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
    "2UKG9PhihFNe5487H19YMrwuc9eRgdw4nwAKrYuLurkLmW72A7wcZgzEgubq6G4Z58dvV3DM5mCJAiVZr1K7QZNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zM6XZuUwWAmZAzF8F2zii7rPrHjm7NWKxrBZxf5neQBcvotLUQUdNcXUgai5gqefjyCLdQuWKwwsCdpwX9BHTp6",
  "key1": "3asLgTUr7ztBQ8E43QTkvm5PrePkfSqFVQjrpQCvjgYtbYCGEBLGrcYmYgooYmvovVvkpgtGHAHeRx5swLzK7eVH",
  "key2": "4U9cZm4p7598gzYyNx8mfg2t9EFDk6xH9AP7kfUbN2qQEgf9WSnnFU6Rc9HmDzKzDgyQ5JtvSmhz5BBPEyivK8m3",
  "key3": "5S9bJ3fqg6PfMWUch42VFXd2VSqBFsFv9vTipthBM8NkLqpCJfFLyiUy7jYQrZFHHxm4ESGsoAAhp93GQ7TxeY2p",
  "key4": "2Kvgb15ia13QukADaC8PHjDyZYC36i4bYbhQe2dn8Bc7vseoYTmfXpQyF62mL9BAFaHVxW6WiLWw7TCrsr8FmKmb",
  "key5": "5rRJqDgT2oXfTwqRDBivPPp1M88Nd6UtyPoEtNxAhFRj2swJp3amXs2os4DA8vUgxP3kCjWYCApmtdBpJymitS7g",
  "key6": "5mkoAeozNSkf2pkJfcaRYuPb4sF2ZB5sEsSukyPTDbnPgW69f7W5JTkZVPtskCZ6uZUo6yFFuuU8sEP3C1UAg3xP",
  "key7": "4xQ6unYTWYenMZrqwtar8oEgVeQEiu9nSVfh8RGCpohZfjTBe9BuFCRreREYydJb5LqpFiCgPbixZR9LKPk9NeDA",
  "key8": "66rwZjWHK26MUyAPQQ24pKNVp6AHgxDQgK8pibf5sFUTjNWTLAvfZZcUeqrgXuY9kE95LphdaaJTwXcVrxKtx8Kk",
  "key9": "3FmnxL882tqzupgPJe2oVsKRoBh1k1QpTyF6Ro4YiZKmmBqWuPjJVTJPei8uFERoT2zRwSuh3uBAjAibx1TtMJhB",
  "key10": "3RRQ9gb6eeGZ1dK2ttg4kMRUXZSHn1siGzTkKbj745E6hP4cYVopPetu8zdpQQwVrUdBoop16HK1fnzX1zhJM6av",
  "key11": "2RnQqaNSXLfmMramw4ifYegw6W8SauZWLbvhfapiSqykjByMJKx41Az9WTNBXcMrFpRoKSaL5Q4vB7SojtHpjK1w",
  "key12": "4GQcPjGuFfuPniibvFGdPkZY5U4wzTKCbWPty1Z71abrCpmnwk18DSVEy2WFYSesCyRLPMfLwCp3qJ5cwYb8Uej4",
  "key13": "3ZHaNLbxmTQbBho4DCjcHHX9yf2znQsfmC1vYNerNCz43TLJQkasjgxjQEf6fft8z1ZzB9mRMByxq7auF5cCQr3Q",
  "key14": "3nyfMEzuaZ87QvwsnhgZBENAiZDVf3MGhW47mQMmkQvQvKzx4LBnA5rTuzTaeBigukDbtan3BsLiheviRLSCs52P",
  "key15": "3ssU5oUAS5Ytu35uNdEBuPAS4vJ9cpjK3pWFHq8NXHUyurSJ2k23VMmEVqWMke3LZf6wqtUGFcKrHs3ZJ1wnLfrL",
  "key16": "2dCzEeSkQswTiZ3exCnucUhUiHkyPenPPWDEba7EiuCDvo2Qo78bVDpUJQdgqbeAUYXzzJNF6jHfbnHWddkwRoHc",
  "key17": "49AaR3LtLHUcSRdEMK18K1mKDs2xpnDqsFVdC9vgXHTahnuiAyWHCEUZeyZ5TTm76jJJxPM15WgnPwZTx4TcNEoA",
  "key18": "3g1WjzMLUUEb2aABLnoonJF3ZUvEHxmcxtN3D7PFrNEfEdf7tXLch7qCcAbU9ZRtURAXWN29V8ZRC85RcwB6pA6a",
  "key19": "4g4FpVs5kvwWgieZoFuUsFT1TruMD6Zha4rQoXSXLXTXiFmmqrj2648Nk6731cVSHVuYLwNQbQPSWCoanEqWou5y",
  "key20": "VLH7d7mfwYSYAGSqkCcvBC3tk2kHoMcRNcYLiLGmw3J8BVDEHbbtgCHQDWDrcAGiFrd3mLdfWYcVErXRRU5mgaY",
  "key21": "5DQmWMS2a4Uf7LZjnr6P4PnocG8qErorVCrhdG37tTmXYkfFovPwskYTMADyTy3msCmcgJtXXwE6oNdXduZ7Rgii",
  "key22": "5qEAK4FoCPrY86WdW62ju86aoUSt7UeFwvYSq6sMK17ocJYMyfzuwjXhsJa6V6m6SJwxiiywwWosB89GVng7BXam",
  "key23": "4Y9L76F5n2E6W3Tgj8bn1sVj4Uc2iiix6a4wB8Y1Fi9paAxZuaetttrrmxFDzKhNJZHMaczVcT29qXrb2wfn66dH",
  "key24": "3S39oiV5zLgxczenfBLgD3aDNS34rvg1wy9emQqjpc55yGtaTo9CaGPLfDVXLAxab3j8qkGPxwgd8irs8YFE8H6z",
  "key25": "5FFgFP8BLF457HAjL5eT2SCATLn7bqLeEus2t1nTdqB7UoevDUREyi45SXuyDM17MMm6iHJnaRFpQCPdED1Ngvm1",
  "key26": "5sSnLEfbf8N1aCMoH7qYxbZAn9S4epHUW3BCCmS3CVJzLpFFdhep8qPoXEuV7fsvrkNuJHoNDV5ZtiVxWCRz4PRK",
  "key27": "5BXyesbZeFkDCkH5nFkjK2tUrmmMQzU3DqqhAJSbztb8Vr1hK2aLe1mWNkJDKyuTcWoS47nbEbrRoqhbCWFqvgzZ",
  "key28": "5Pxby83WwwMuNegLAZyKyr7Xt8ZrLdCVgsF3i48dSB9FvAgs8sNwSKtGCw2rwRbRzWZ8y6VibM6FmQkw1Ecg9s3k"
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
