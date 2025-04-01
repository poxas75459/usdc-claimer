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
    "4pCvZdYzJG73rZ33mPqCpv1xytWg3uwy7m5yBsAaCcHM32YfuavjZrJTi8PfJ4vkeHK2696WCeBE15X7yjWHxgT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hExNkLYyAYBQwSePWxSG9hqMg3kANpqX23zu2GzqiSuR3FHi7zvL14ZsjwB5FdELM5vZufYaZa4m3rvJx8sUg1G",
  "key1": "57Re2jLKatBBDnzdbyhNoG5UpSK6XWMivtpWbudZwTsVNRaxT63wp2A6keg3xG5tiqhdHsc37t7dp95GMo1aM9TU",
  "key2": "3fJ4qtHgg59CitsMtsJ96F5cUiTT8iANsUdsqnvTXNCPpPP64AuZfgGH4SM2F2s2RAFm3qyvCy6HkaxfJBUcTyNy",
  "key3": "tmbk58bw7ZrM17Kt774pv1R7Zk7RY1hgpL8ExzVGyESxAjpLWA2dtdQqij6wzYsxT1CMygUatrZ9bsrJcNw24mK",
  "key4": "48Ldw1JLatSci1srimfAQtL4dm2uB3WRLxQtVAPuBv9sneEemEqhumAnJk9fZ9pYx72U1X7wMCS2vZDkivWubmXP",
  "key5": "3G6sU5XuPdoFsQkVUcQmG7VmQvu6PAJCK5RKLKDCt139Lq4gFLr2PdB4CvjXkVxviZY9Y45aD6tbfvNHhRXZScas",
  "key6": "31MA2HTxJgn2jHguXAKbm3EKioynUcMbMrXL3WkaBpMbAX5fiHCPoiu1jhjNrwWJAqDw6n1H4eTbE2HphhuxJY4e",
  "key7": "5AV8vwL7rcRNeMKBd6fDkVwq4Vr6o6Rcndmf5A5U6UzMgXH53cyCk1fLo8nxfNbiEtw7JRu11RXV5GakUUugtEpN",
  "key8": "WbCoWJpWTuUukAsf15DQvhRSKAoXEzrGBK21cSzJ6UBYD7YBd8z2oL1256MjFPXuSh4fXJjvQUgpst1rtRDT7Jb",
  "key9": "3UmFdkVzrumHjtvP8yKu5GNsFkCJRPAn5C8kg2iEki3KVsnSNP4QZPGiHXUwQTLJSoVUaH83aieAHtSix58kqgS4",
  "key10": "2E4ssoFt4i3ouSMf7u2pCwtkyaoPyfah3DdWVJh6ZSHpcS31LWxiWe1xB6KAok2HwzxjU4PSQ4mqUkezh6DZjeyD",
  "key11": "4XWsxYi3ZTYuXS3MBpGWFsvCjeKhPNdVcQ1LKr7EpUjttjoVvBRXTdeChKAwAEsK6xkgbRs4iFttzgPLGj5S4TV7",
  "key12": "55gXA2EdFjnWfsRjWVpTC8TmsG5QVPhxbBDG4M7SwQvDbULPNfbM58oUHQEfLD3j399opTCMSWicyp7Li2NYMQ3Q",
  "key13": "cSanUbc6bbhU4WbyNcyr9dQdxJZWdYHGkiuLUzou2KFJbvtpz62ECisX8SFjNc5dYUncDmiBgE7dbecCJtEPs6x",
  "key14": "3zrYEizrFY4mn3KG3NwZA1dKcXHbJX6W4kZEuwztc9Siiq9Bg8gCumvXuodd2K4EbvkYkN3TnRdMNtKhQVfUE8C",
  "key15": "2hKsdYFwSoCKUbe16hoNWGdPkJnVXRsgMVdTCLVCN1yhbwVyXCc5TteuaLoTnUppxgnreGEBBuiWgwZ5nwPo6TpV",
  "key16": "cAeJxDSXUJ5XUoG49k9HKFaKXQsLZWocKQNbjER3EGKQ3QWwsyyGpfvMuXC2sbB6asTn72jLXibHXBPEtf2G7Z8",
  "key17": "29NWZJwgpEf7opFgmCXK3Rom1vLATdqN1FQ2fp6nSPZ3ruVCb473yKyAyD9oPt5kM4BBa4Es2dHzsXRwpDX4nuAr",
  "key18": "66ctjhvVrFvv1yzXgSAjiXzvEE2TTYhe86oxKXzZDPire7w5PEdtjsCvcKwEFpWQpQCfhpbPSqg49v6vUwjHEBwd",
  "key19": "Yv9oKsLNbHuuztAH3C3Pcc9CDESwuuwA4cN5cp1Yp2oBh7wbyUaHar3NycJ7xW9DQFKGR6S244u1sPrX133LFTf",
  "key20": "56tD6W88hBdHENxKB3HJXgiEKQeMQgp1iWh1aYxLLaeqLqzCYDgciq6xfECYyAqaWtvhpZg1DvjxzzCpxd3wiedP",
  "key21": "FqPSSX713d7BmzvFMeyGtoGSMtyS3PQxK6PtTBpEb9ALo5L1E3zMfExmNf9d4XPRGGCTXU6UzaxWZ3aXPUVFvHg",
  "key22": "5uqTcYBDwPcRJjcFBCawdLkBWX5XC5tH3VbcCEEbwrWaVtqPsG9PyYU4sS3ybZCRuVs8sN1qGLqFu2xNWKDMnLbz",
  "key23": "4MGhLrMtUJs3AeJFDU1VaFrHvtUgse1aEo7dw1qtGQB1UhMSP8CL9FKdTQ1FVAti2zDkZSCodhSJyG1McCCrDwUu",
  "key24": "3UHuzKAzjWhWKKepfh61mXHD9X6xF33Fj7cuqg9vYoyS4iCMgHMYERCTZTcREKT9NMtC9gAVGB93v27cPxuC4dYh",
  "key25": "2PzoxEhjjsS4NhdfeJZtQcD1X94nawMqX2MMCSQJEbnpUTJa9HmPnpqafc1oLwwZvMWjzbUqv4ixfV5SPJu4Mj9C",
  "key26": "e6DBQrgnqLDXBLag2WAE5g6WARShqk99WnAndAXEBJqe8RswooxRHQfK7Dc2KYo2aKPiTVCW7jRqvd9XfrtiW1W",
  "key27": "2AxV2Y1yCJtseGEajA42qeaRFgb9GP734393RBvfc4rcUW3f5TtFUVro4SH7XZQEVP9tsUtyJMjAR4DE9KdbPEdo",
  "key28": "33nADAc9b5KrZAtwDbKhxitbEAsCZC4qJBhvgiVrYnAGRQCtLCzmhxH6m1ZePvJtgGfRbZzYM5D6xgbqhfKaeyEM",
  "key29": "2h8jpxpbuAbddfTJr5fRhgaYtGt6UUmJPYejKPwMe3PHY65n9drMiZekGX6eM73DKveWbPyR1HvswDpsPe44tzvy"
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
