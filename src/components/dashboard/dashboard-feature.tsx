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
    "63UMKYTWsVwamf7w2sGKdKt9efYcDuGJEd9mhDU1Ts7mWq6ZewFpSoTJdJUm6PrLLoWNdHEewseAtB42SK5ivLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzeNM2bfWDC1n5acE9VPcDjdyBzej5ccmwotah693oT2zAy3qutKLfQCRxoWTqXQCsNwVJ5z2gCpSMi9VuydBUA",
  "key1": "Zp5f1rtHNjjV9k8uovoF2dZ9PkMAZCFbwiFgqW5FdnSibr6oKtoyL8VkaDK4cF9LcDkcsU8UnpWsmikohZBrcFg",
  "key2": "4EE1vPuJ6xVQqn65Mk6kUhLiG1A7xUmrPMDMMAnrb7XD8k8veGcjUxbQto7mTPv4y1xfmNxxY8MFu2iRyt5XsKbp",
  "key3": "45z4mK9jUeXgmXsezwqZCB1G3Xh7Y1uNdyAS8cU5UZo2rPeM3nj8y2yqeTdvBU1ac463GyAev6kZqxHCj8HXjyFZ",
  "key4": "4NJpSpw45q2viKhMNajJnKWioSyzJte6Njo4DjXKLH1HipAW7iSAUYowYgfcHo7n8AuXAnX7VxjK2DwzZ44nvHUC",
  "key5": "41TNnBetPr6KR9dCYvsj7wfykz2qRy2AB3Dj3DdKrW5a7sVcJMurifJvdpjV3cXpk1yU4LbxaVZFg7jgDBTTnNqk",
  "key6": "38zf6gUUjGMZchVzyX7npmckSrHCuQSPvxXVdDQiNqQG2fFhhaYt8SSe2CYY9F5iWZpjD7tnH6VU1CFK6a2a8wkp",
  "key7": "2uv1vRGTv9bsThGMLA8EaRVmqSZggD3KYTh2P6doPodcm7VuwKNcjhUrJx1E8SpHGhgnyRQP6sRxWZzD21oLLoXg",
  "key8": "5yd7TrfUx5daMTv5rt42eZyqEmmYU1YaNq56Tn4Hv2GVczBLT2p7b11RYkrhryrojJUXAmt7HwCBymtDjHYmWESV",
  "key9": "2HGqtX5fE3bzMo82NyvCmwMjb9TZDyYXFBsjUADavSje65vFewPpVZ7LTDuefGJ1BRuUgBDSrXToXnkFVfVHGPcW",
  "key10": "5JwUt1oVUyE6JxYWcLNiJeNuvPYR7fPLSSbgVJYu6NgRvTxzV3uHSjFZ2UibB41RPcEygqPt3aF5chnpwfNbHuvi",
  "key11": "2jZZyTq21h6BmJbBz12qEmb355pDGHi2dfdiSDbQbadLbxrBxdRSnJfrxbmTzTUcVDoqose4Ci17FWiW3qjHWgdp",
  "key12": "yxMz1yi8QmzT5CHmmVBgsHhSEBM3ne2E5WKTnkqBTTXxM3Fzr6VYz3RWqaXNbcZRXSkj4B2urkhsg45gMaxMFp1",
  "key13": "4VG9DUw28Q71Gy3EictdkGjwMLqPWY96EVQkNeKMqXEyEgWyGUwzp5LqK9wjokSeJoUpcDa2edvTrPEdZoVdXZCb",
  "key14": "gnyGwdo6sX7H78vdV55jwE8Ny2VZt1SSyunp1ZkSrkj3w3ssP9Z58gK92rS8AFRvmDrBDnigdxQsAJ8LTqCNRfB",
  "key15": "22ipYfCskc4Xd8VJzrZ22GZb6nCAjRX8xA7Vdqcb3wAbAnxY8FvzX2GqFaNehFsi17ngire2Ts8oUi6jGVJAedr6",
  "key16": "42NYryiD7vifvqasTsuBbDfA7QV1h9VMRuR2Bg3tQtFfm9TTErNiXN717Hw7CyXsHWJGVsPLVnspRvKRBMwuwbiH",
  "key17": "4vf9KbQThhhPV2tfR1wmkKxadWUYaAz1M23Kgn3b7uk6cPdodgc2dm86hZ7bKJP9JnyVe6eSmdnr661Wk38HSwhu",
  "key18": "5B2Nk4PcEB8BcB4MDQonrNT4EvaKmBjqmYEKZLgox7SJ4FaMyuAdNBjtGNn2ggZXAr8VZCkfq9WY1UPRh6CX5hoc",
  "key19": "256aHfCDbhd847qTqZajjuHQUuN6bT98B2AHnU51Wvcs2vNpHrBBWVSJuvf7JCQntYCvHPVP7wmXUpETGmmi8F9V",
  "key20": "4UnGcPQ3zxfZYCANa5v3mShvhmZUYrzYfg9zNiRzPQUVg8nZQ8aCwvcnU2Txd2gtFUSQQ4QEvbtMaXL8NfMnGfSa",
  "key21": "J9ZEfDwRprw1jYhqh6LGLm2GseoTxcLRWDDZpvmAbJcjMPiY88SY8UvqFSMZChWPDATne8QgSsJCXVc3hBFXJBW",
  "key22": "PN45A2XNohkhzZoCubEU1XkcBexLBUcfX5gjjoHeABCrUbKkHugWw5FHMLfQu9R39JpeY7wKGg5jacJHiKs8C2G",
  "key23": "5pt1HGJF1RvHjVrvZStWb5QJoDYuDKHcZNdoBBSzJkfqWfEsqef86WvU4FDDSxxYJsjAVy2SkW836cyAioa11dDA",
  "key24": "caCsTFqZVJWKH6J6k2H1V7CNzikgUeEQPkc9bM9iLaji8zwG6MGY9WfAByy7dBsB2vGELLouD4zv363tnaR9Fr3",
  "key25": "5KuNkwcsogLfeLui3paePWKrvrspP5oC67sezSbfpZaPTPpZjd1YJh1nWDfk4mGAWt39jMbjMzFaip5gbBgjChiw",
  "key26": "4DyF3jKcqsvt1wj7vP8Co4Ei2jaP6pcDuYGcP24aEC4CEWoRppoFx7GEPws6NCV7Qt7QcfHgTevc5J9bNr7Y43t2",
  "key27": "5RyarWbiS7TsbobrdDc5vzmedBUZN9TBzmQzN55W5erE5Pru4GgMbzpEKfsCq8mBAz9fRQa6Z5RDuWzj7HN3VujA",
  "key28": "UNrTTz2gpAEY4qaiF46jvtKafJCRjjkxyLUgTmaJ9PSxKeEHKgRhj3ZsuhAQo1tSGeq38jyy5xNZ1aTzm5YebmW",
  "key29": "8RfeFdS2JY9ixsD1prZ7LEnSXfta2zRdCCvytYuor8vr7gATYpR7VcmP4Ld3opF9cxjPPMEor81Bp4ejwY8x51F",
  "key30": "2mgyFBAYPekoofiYuoSPK8EMJPg9cksoTSU131bC8HNN6hBTYRJBSdAiBSgF5M4nmCyYqojTtsTQ9G6PetMvtw87",
  "key31": "1bUU3CGkkkUtUBXNQbMUsdEff8BkTDzppNgLo2RaesN9sVzZTcWW7WuVybtsqRRWg3C6PUSdwVZmNWE855rWUNh",
  "key32": "5REQ7ggiFEBiCDLmjcGKq5E72ff3ERcuGoP4Md8gJKkMCZaKN1cZ77ndRfGRbkUXJrg8FLMbYgcmrdLVPdvMAeR9",
  "key33": "433duA5J6MpEsi4U5LyDZ9rd2ZX3fDEyEvFTMna7UyVvusmwrQ6QW2oy8PKVCeBkv2geaDd6FmCyPZFvGKK8wkqq",
  "key34": "5ykcGyy6toY4uyXcFmFKnE81iVFfkMfmDzy3zuxM1uVs7P3TthckHUfyAv4JCrFraCjjMuCXKsub3BZeBBMEPCX1",
  "key35": "4TJ8axgi5aAZu273gSP3VzvzFRoYn5PUtgsn2x1BXbxdye5ygkjNp86Se4ncBeUGxxWBYaCF9SJW1ynp54412tH7",
  "key36": "5NzumbFtnq4Lzcd9DdyzeNT3XPpKf5hwkmRjbAUg39iNJh5yuL4S6BQDQrVpoeJy1vNvJhAZSQZzhcq65PJdYgx2",
  "key37": "64FCYXLjyiymQxHHAxPbCFhXM4DL17nJpWpaaRhLFTK69obcxTX45iF6cNjXaeUmg6CNqSbmwQAW53VFVnRnrkJA",
  "key38": "4RyNdyBqGcBM6eSk1hiU9KDTHqoKGpi4s9LBScWkSSqxzUT9GNr3huKhoJgfQKsiLRUaSgFJJeiRFW9WzDSJ2J8V",
  "key39": "29MZ8HD5XWNtuPknqYneyvsMZ8EeiKTuCrcXwDN4HgUbVJJ6JrrFonZULSzT85ExcsS7xZGcbSC2j8qAc3MNh1Sa",
  "key40": "24yfYBcQdWDYZnAa9tTAvYZgLMgXTJdjaNhpJibMncZZfyxkUqPmD89FcE55vgKWXgtB9ggcYsRsQnAZbncEewH5",
  "key41": "mFGFmoH4NTHxu5knSbMeHHJZyUz8ZZt1EmcHZxseHWxPFt9QkW4ux6dJQ5BF87EokT57ZJeq9w92bFAEWTYRvoD",
  "key42": "42nrCHaAmJPpYke6vkeLnv9MmKFv4PCPatzAD4xw7P2byVjTQ8f8TZpkQwBuDkSeQWQK2s4caYW3A6EDYtbQQ3mU",
  "key43": "4Se2iEkzLrrJddjM4v74jLrjuGvzSKbP13SAF3NyDskRYH3LYrzYBuNiqpgFGRJexs2fouJo8yWnkanca18EfcvL",
  "key44": "2QyhKJyrkhgq9g1BxNoNmgjeAdPZwTLrWgA7frpSLYGMSRBWiPA91GZbty43n6FvqQ5T9v58bnaJmF2iL18kihnm",
  "key45": "38FM7k5xZ4DtqzDe3GKwMHnXwGUERPtZh9K6ESNefj1b3LQnyDE4Np3qQRti9YqgXZSzmpgFc32T7gUzTzvCKN3B"
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
