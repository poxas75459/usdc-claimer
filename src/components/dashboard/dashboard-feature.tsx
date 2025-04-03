/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4UGTfcquHa2zEoMoQWvsDXzQYWL4oP97DuMVrXSwkegB5z3R1WEeN12b3Ndb4Ue44Y8Zs15Ap24WWnmxqbA5h2Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WcqPx1VJhx2uHUXLybUZLtwSXKGngijPc8dae7NEtTJnFVXjpQiEQRLD3QzRwHoM8k6zz6fEvZh3PvgaXugb7XR",
  "key1": "iYMrpp1gWix7PCh7CTa9ASo5h5678V8YdDKs8FKADwHgNuLB7oYfn983o22i1QmFixSitPwjVYDYeyuBCw7wV8p",
  "key2": "5Xw2CQJFjUgoTYBp74UqD1USanjZYakPMAMZCt8ioqcyHKsY3GRDuXGenJoJ1r72wDr2EJ8NDJmcCgewVq4HjUWa",
  "key3": "2fGcdoTHuXEG2CdEw4ccgb1RoHFMWx8ZmQdLhdV2xkEtZDQqidNcFCrQKfCDb62sioUXViQ3LpBL88XLa4P4ZXtT",
  "key4": "33mXSrjD5H1tBYPzwQS7PjrF8tmDDuQ4dRYLLp7rXYSXzwjaDXYVYWUEKXyJQRmBVCCFTco7aPtMPDfvMR7NDAZx",
  "key5": "4EvQMMs6hwfKxiST8cwhFPPVtuq9CFZB6QTkt7xBVMDR7qGbYLoJZk1Ux92S2BSw4pCULUrsLVT9bYeMbLDMH2EG",
  "key6": "5yXgXXGny29L7x7nf3Sg5amxceRKtG7hRopfztbtrdyP32H5yqWqJWtztasmjHRuNxyXXXoh5sx8zih5cQqcaJC4",
  "key7": "5fqeRq97gvZyASBaHaHvtQvbFWbGsZbnP296mjb3NPTMLLT5wYghAtZ6SUykkfCmzWCkRHZHAZn9LZ9Vq9D8hxMx",
  "key8": "UQR3EcaLbq7EzBMFn9vwZ6VnAM35otQtBdf9RWbY9uK1msrjR1Teq6j42mtokXkzVXG3BtZoghSj3Lk5vV6wfc8",
  "key9": "5KhSWTB9Nza2aCWQGZrhp1MAxrd4vmJC6bgYFb4P3oxfM1tpNs4zk1Hg8iHEVby86XmhV74orrysFrJ4KWKaiFK9",
  "key10": "3efcCAVek9XTCpkth7fY93SKKMhsY9fmAmAfSskhonz8Yaw2G44WMtet6h8uLQLK6frgzfVyH89bft2zUmaF2gzg",
  "key11": "4ziwq4fCR54RXLTw4yHR9tTDSUKTzShrLCVwXvsU8D6jzkPv8ZhfS5Q3Bo2PU3vJNvd3TZZ8vnnhNuGmxV77ebju",
  "key12": "25qT8rcuzZxs3Xq6wKzcvLXtpLj7Tpx9HmvyCtcsaF6gwQgzik7pke4Lagp6QEh8CRZ5NtcVoRGECefgj7Hg96vS",
  "key13": "3FPexQP6h8e1CyhDUAKdtwQNjq82MgszTLfgYNMYEzfM97QDdeMxFxqfavHpvngZBmrhDhDK2s7KKwWvYsJE2CDY",
  "key14": "5LNEwmVisZH7yb1e54KrxiJJKhF8pgLRJBwkFKrqzUuokE957RSng1orEUz26mutjJDPZriPkxohsa4rhBgXYj2H",
  "key15": "27L4PHSszcdgN9Gi37EyshRv6yD6KVyEyMwhqxQ8DzrXHppBqYTRGiu2MsHhsGnxXzfgPjUZN4cmv8h2sk4sr2to",
  "key16": "3NKAQ2ZikkhifnwphsKzs3jkzcv6mebdc5v4VbpUuP1pDyZmzLo3sD1anGjytzmMawyUDa9CJdvqXiZdJKgExWKZ",
  "key17": "4y9fvEDyUAf7K1iRmBU4tSa7p2kKwLpqCPpnefVQDt12QaQiET4NzfcmcFYGeCbersjE1ZhgLirFjjHpb8rhtfNE",
  "key18": "4zyw4sVCj13F6jFajFu98hfHH7G4so4rZxsFfbg1vzfU1LmKsy1unNYG8TkkQWyQ6a1Brw1X1ZZZZFqYCDt4pmAJ",
  "key19": "3HHMR5A69cfuv6KiQx2o7qbPdWm21FSJmkB73znDMjE36fVTLWarGvLW3yAeCCErEYbyiczL7qyr6Q6RefKqBmH4",
  "key20": "5GEobs39USuwtWz5Dnxb3bq7fzaWSYYgHJWrThWh5RHYBmEuwxQNCyLwetqpQ3RmxDNkQuZiyEu8RvBRMC5DPP1o",
  "key21": "uD4Y23Yc3D8AHfftCyLq5uRwA5F13crVAVmsxjYxmT2CTP61sJCDvacGnfE9VRvDMBrLwCRwfqzCqsPi2uTB5J5",
  "key22": "3nhT2Nk1WEMwcA54vATjbptznGp2fFrfmVQ9PnpHHR6KwSkrFeXevQVCfNAVt5hdB7iQE6dFWGnoLPPapK9TA5RN",
  "key23": "5STgcZ6yAg777VNKmgaovJ8WoJzT3LneH7eiLtn8TeqwYkNFZwT2zAKzp5t76K74hmCkXpRM9vcWx2yDKBfWKFCs",
  "key24": "2JiZZt7wnSfyfnESXtcbrCjM2FhB5YTAzDTZcw8ZcJXuZGSpLwSZA6i7eFisbaeBZnU3sJs6H9UekCjJwDqBFi9X"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
