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
    "5R7ajn8GH5Ns52mqHKT3w8kVG7TT96u3NbPBDZUGVmbYv1YBze6M2QmMCTGU624UDYoGqgmYNyWp83NGdmJ16D3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYHSAHx2u1zUhD5E7PkM8VYo1qpdAUVw89fRnEYK6sGQHN9ZGSoKxe9Rb6AknsuANcN7XpwhBaMv15BaCNe8zAV",
  "key1": "4RHwUm6Askn8tkTgkyM9TczNZB4mhg3XdgD3kQR1c3TksjKsG1FLSKeFMpysXGL73QmhXcu6dVLcN56mRC4TBkCR",
  "key2": "3DLMQbtTfJykRzJM5cgQBPV9Z7YZ2MzVZapDsHTPPAShdZ8Tjf85D1x8CS4Zd3FnbpwgixYBJ5xsxfFBTRjUftHW",
  "key3": "4v6dDnf6e2s6kPW7aVUZpBcTWmbGXevtwNryom3AvYxq7mESiSnHg4MUZr8ngNDq1JmK8y7e1JKTWKAZ5cKyxMtw",
  "key4": "5HEBrdBAKHyyMdQyNBExTqZ3S5G65DyDJfziynsjJ7rhYsKRZUuvmvXpiKykui3YYKt3MVKqgRXREJKUqXsqrnrP",
  "key5": "3t6zWC8tytXg1GEwiPP5HbwpBtZsXpBUE95ThA714wqRpCqWDJZ7PrNxn36BGzYp8geZWX6PVV5t29uertogYyUC",
  "key6": "4wjEDyxUUUx4iWViM6fWoX2qYGVRs4YjhA4z4oK3c9Upu62Wq9XPwhJWHJ6ryCeaAdJEgTJKM7WR42YkrNhJc6VA",
  "key7": "Bg8gUpahuDB23FV2h2yaG8oF2g64vPw9EVsjGG5BDHWagottoBLuMP83J7p9XpaVuKV2Xe5uukkP38hTFWqXjiP",
  "key8": "2EZPVZZuY6ZwCarGxBrpTCqgaj94uYDKKARxjk1mNQvAp7omGYb4V6NcENLqLMvDKXmRaio3UWiAwpVDMCjsNu6U",
  "key9": "TGZsVSLLA45s75qEVeg5FWpum48AEJuRKLakxSHifmSCdun2UaPn8bYU6ths8vALmCmNN7yBEb7MbmVqMTHu6QG",
  "key10": "V2BGYNGcGazV6gWT6NLJYHHRCMqLMyq38Sy6Hhp5TofcRpmAy7wa4ak3kasVZcjkdPf849jNYGMscx2LU5hVehp",
  "key11": "4oKdWNwoDheYNHhvmW2Ft1SHdXdzU6LcqVLqPAb5Fm2HRe3pPYYXYjykRfSCsG7pKmrem93apVHhD2h1ayVFKph4",
  "key12": "5jyNTtgeEX8mGV5Xjkzhz6EAszfALKpEMnfmVf8WqkkafwcqJcQqP9CR8KLCryKbXjQgNwUvpt6pPUoYNyZxG2Xu",
  "key13": "5HTr5Bm7dNGsutLBxRUViB5Y8DtiNd2vRFTXS5zGZnEAovLRRAqv78CCqBcZHJRodeMwy8Kg2B43jRYbN1t6WeU3",
  "key14": "2TDcsNhwSPoGccWVfinuViWUGrhfqMwDPT1DWGJGzqtQpiaetV8fYJ3nKjb9mBBxCgFt8rTiu6xJPTT9KUKpsi2k",
  "key15": "2Tr73V4U589LCwu5hi8ADd1218nXZyAFoBNNcrhfFigtSydGQZB8LibxhFaP4ASQekRbhQvjUfAXTivvYNRDdMCL",
  "key16": "2HcozmfT36vEuST5JZVBhbdVCPzLkEdtT9Kr8xy8bngGW9TMzwT1XAhnRX2mGrGAqE27L6XaW17jjZJiRxvfVEjt",
  "key17": "4cZ4Xy2tsEybUXS35zkgJx1snH5PX8nWvZypThPtPxeYCdT1be7Cdzd64pPwBT2fUrLECQRiFADxLvKoF63ZPe4X",
  "key18": "3bRKfauJ2FFJXxxtQzPw4KRnaHsUyAYVk7SK8pxYX3RfKWxjn3Qc1rTRzMMg6ZatBWtiH3CbJZTyvQzmwfESgwdi",
  "key19": "65k9211UFYEmWpK1G6HzaRVxRrnQybgDTHxQXfDFyPQVbra7CVH1kTrLLE8hnBQyty8h5oWjPFgxxQycFcgEM6dT",
  "key20": "2k8dPej3nzejXJAFEKoGeVcXUqLTL7qjEKmGinCcyuwWCm7fNQceEK76p8eanKn9kfAQQvDgQBDCmoPaDovoYqY7",
  "key21": "fbV8hXtasYhRMcrjfTk8u2qKJoMxuJuedhTqzRNDsbwVTJvb4F5qQKu6JqFuWNGFpbWvq1XvQ4jyb3e8wS74HFw",
  "key22": "4HKyLP91iK1ybzhPRpeqamt2TGMX3Ns7jJrhSASkcVyAEfi2hRrx9mnap1M17ysKVq5FdsU8jG25Bw9uXNvjJfaS",
  "key23": "4c3653gxHnJPBTXP8fH9HG4ttSbxeTLWv7SfLV5JxUJYxDY8RL127zVFNmdPFuHxDWbuKp7BhkJwx68pWcYCN5aN",
  "key24": "3prAuSutLHHenJMJLePYoFBR2CvvVg6AB9FfHBHGPH1fAYt8tDyk4LhcZprhj9hsAzv4c97T9mNjQm814qcXRD9Q",
  "key25": "33jBQjeP36dML5B4p4AyU7VBEmP2pwNF3su4Zn11uAx7pTYaRVfDHRLJX1vpWTiye5EWTt4WvNHx4eh4jGNt9GRW",
  "key26": "4PoyPXZ25x3PhmfULrCmNYoz9NzaQpYHAXATwoo6xNnWRvNXsPDD62RUox9MmTLKikNpHa9BvzTPXLHK1iW7dEGq",
  "key27": "3oZve2UeJofCszeYtAq6NoUxVE7HEw45W1iECDfwxT99SUw4wNYMvS9tWEHZvDLUrVDDaW8dMSARmkDVXc9VZhTu",
  "key28": "5oEQCRYnpSMDxDi5gj3zMy3ZYtAW3EsRLVyv1fkx3FZJq3dVEnwqVM8btwjyizx49MLsitfXnKZm4Kj8jc3AeLZ6"
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
