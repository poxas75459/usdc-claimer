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
    "3RLvRSbFY22ReS9rfN9ss2Y3xSWKbCm4jzPVcuzNWKNNx19BxB1oubWHXiaju8PN3C1AS4BXd1xYxiwnyx61HhWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYh4h5V55EW8zTcvpzyJYBf42UXF72TNwVqv2oa1D8biHnRZVwQnBXYtJoSH1x5xhZpfHPc5a9ZahPWqoUt5JnF",
  "key1": "52p691T9qnoHpmkVp3AYqwMqdacCQW2FgARFsnbbMJQPbH6NceeTBheNj4yGEtKHh4oNeeUPUTh73x2xqgN5hRfH",
  "key2": "4xfr7kAQB7xYbeSkSkmPdrHNZmMoVTKTWD9rYeccQzchxvW93r1jctahd8RrAk2aA4fPw5NTiYPxikzfHDkpNmYr",
  "key3": "2Nh4TQdcQQoLcr2C4ABqgZSUXCaLNM2QP1pENpvjQBjDinPuMg1KkBqDxV2S3pJG4QLhaBLLJKSij3ysdzZyFpEP",
  "key4": "3BGdFgsnCqvdYsCq4HEFiSamEhuDJKt1F33mm6oKaeqc64mwKd8RWHFzJ7XuGpq2HpzYKtUAKESRzDJFVqf8XrPN",
  "key5": "5jzK8UCu2u33W82kBK6n6Kw5GXFymh7fRphDUyiNHGHqSNzdJyMhnWW3mzk84eFm6Vqgv5ZGefS5USVkp8GaEvCX",
  "key6": "xD3KqXLbYPDBHrkBTFWZyRzg1n2Du6hpSe7hxYn8w1mLqgj64AgcgTPkbLqYfh24ZozkCobsEWknmVzhKXdco6t",
  "key7": "4GPxgfAEosjbomjypqtQMCu2yPenhufhyZ2cwpswNKQvRbUzJaKdUVGjnLQeFD2vBrsXJSNbQ7ev7kN2pg9oRG7s",
  "key8": "617AqnAn8Jfz1SXVGkxu4tu27iDBsTsTmT9wbtABKrzDDcgnKb4WfNrX772gzYHSzqhXbyu5hViV7h2Gvv9XncFe",
  "key9": "5jTmc2omkoayk1exAPHuDMeWfJ1fHoU4GGzU3vnbnrpre9LZQC9CrtMEMEAvr3Djw9G4Q5qYYm5S2sjNswYq6Lu1",
  "key10": "65bkpQYN9nkBPfjc8RnLn9Xin8HtKky7VoazKr6RD47zTkP8AiPEiMR4YoCQkeGKNGsQiLDiiGF5v4JLzbTQm2kJ",
  "key11": "2cwmJ5BvVfNC1NGjKMKaEB9BodANN4PzZQQNT3EAnF6XhWqGXfimCFgGSrckKMvm9cuCwfXoGwf4Hksgiu7g7H6q",
  "key12": "2nrzm8hCWC22pR9onxheF4QMaeZ4hQ6HDx22EHteFmdffc1RkCiaGJxDF32RXPkmjEriTgcteRXuh9KodBee2T9X",
  "key13": "4fvkP8gfdyPFXVHwd1scfDYdsd7xoZsHT8xB1W3knBNWXBoFka8c1MW1PyvNeF4rTg9iHLVLWFrPNu4JDoTfaxDV",
  "key14": "5FiVhBxCXRBf7YFAXYmwq75hukqhwjzcBUcZjawn49dUYuKvLuUEfJuiPuJ17VK3fUBqgNUtnRsBafC2MgK3MDds",
  "key15": "4m2pfr1KWjuKRdg7tncspdLwt833PMkupVdN8nH4JDTKYyEzTfJ2LQgyRSKNoW4BzDUVPEFVwPbxHJmVXKtRVeeP",
  "key16": "2QHGSvCUkS1o1PmQRK7sGeRHCzVh8bNnoHUTCibC97qNfSWfBq3kxCv1TQSsLsK6gbeKW1GqN62BmahedeHTKTYE",
  "key17": "5mRmpKvkanajXfFSSHf9KQmivfFj3z4uF9GvMAKPCNhu4HgtLNr36MwUYkn2KFLE2dC1YXZ3QLVKJRVu4hRpMpdi",
  "key18": "2VWXJpMPQNwJ78HqpnUhLEP67WB4oNPp3aJpiWRH3rp3yKCLW4G4RV9hXrCy83oMzFvGMe18S4kVbF5vjHzxTaeV",
  "key19": "cFgxzRGmYryxbmwh7gKPteNCd5kGsEGFoCQsme3RARWrehSjEBXjwwdo42NvumUuceUYLihysBpdZnrGKckDSzY",
  "key20": "35849hC7U6iqqUcTkuopjU6biePdxHjYu8EhYodvLQFvUGJxix5EynDFDcLupPhAkoL44ffQ57mBU6fApKSAk3Rc",
  "key21": "zxgBvAoTibaRN5bJw7EqTk3wNFq59S7wyPJX5uSPjexFgB43tWccwsaM9J1ng6Wk41jGfU8MBqX2CG8PYBXum2n",
  "key22": "2qrLJZXWyDm2VDvnQXdtaVxxk4MJg7xLfBgWL3HRBhe6ZQAPGj2b7wDVEUXBbSGVBdJi8qj3vWLWy6Es2MRsqhav",
  "key23": "4pA9zeQaMLkv5evh7fTUQkC1nUWrubEGpWACSvH76VS4oobbC82sbsrsK7TXp5LrZhgjH3tb3WEigTCM9U5NTBeu",
  "key24": "4FyKxTpkJ8T621dhadFkXjQ3DerBGVJWTLBVFz4hC8BSDRQLkGeGTEdbpyhjDgghowFaWgtbH3wcNubanGTLETcs",
  "key25": "5tdKzZVn2zko11J3JiirmQPP3sNucgbyPwXimBUNKS13um4289cZirsqYQ6NybZFAThQrHne6TnGs1L8mXygGsjV",
  "key26": "3xBrfQx6ceWJkvVjMpBGghtsU9ZmRBYAzKzk4fpb3Rjv3cCwofdcaoLvscNEbso6MHje9BgMsefm9EztZ3zAhVo",
  "key27": "4xN1gbV5wpiovbsk7ty6tqutdGin6ctykWRxq4rUHcqyHdoFPqA9G3dRUaoMXzEoC6pYJZmHD1QzLP1yj6LNX5hu",
  "key28": "MnmfYLHAZ5KC1QAMaSrfsKht3BK5AguHR74bhnVjRM2xVQeLJGasZ5Zm5SWqQe4w6XyKNh9XhpsKvdRcLEV3awh",
  "key29": "51RqbP3ah183gNZUaw5pj85DfQhUx9vj3b2xwQFoWrzkZ9Bj213JWEhU3tDjvpNVNZcs8BRDtTWhhq3JsctpSGdt",
  "key30": "3vxtVzAG5V8wpJY16Z8D9pEunB1LgaNKSdLFpW9osAtTtxcoAfBsf3DNfDNiwFdj7rx7ynubs23joe5yJ9S17H4h",
  "key31": "XdZYQ9zzgzGH6kTvn3mVHWURv2BesohRZECsHXp5gpDs8tzDPu4NpeshpuFhWDdDsHfiB1HkaMQ7KGjFeVRR6ew",
  "key32": "62PHxWb3kbgYqC5gtRyLA9NXMZKEcEYaCxKjqoefef2KUT6qBZGvUBNSPbzXNPgxKVA1CZz3go68JZh5d5dSwzzy",
  "key33": "4LmUe8aRy3wxW1iY3J55ukRjBqNQrPb62JaRQwGCTeP5NHxtb6pi5d1eSVS7U6tyAcmucav45u6T8jP7cEtxZXZG",
  "key34": "4abD56QYwXv92dpH2iyPRjkGYZC1vygtdzt3VCz1zTG3BrXaJt4XvyRZbQsRqVX7oHwZKFyXGYwNrVWUEY3Gjyje",
  "key35": "4XdKtsKxB7gDNmmAV267tN3SBVJXWCPBuCnCxR9gT5ArkDAwXrgWvubZj7hXn6Zpa2Uou36dpRt32whJQQuv8xW6",
  "key36": "5enMjJyv5zccYoCjB9dzy8zfE64BQsGbzHcmzTfAn2W9A9jXJXGD6ortuwWnh4hrnY8Mkqxy4pUewDNfkHsZfm6j",
  "key37": "3fc48mt8z4kvggyjewEkBqdSu9kydvdejyqKxuWZ3HgRQzrUazoAV91HC9BzmsyqG9REwwgCWfzV3u1qfGfDoyk8",
  "key38": "42ocruu2FKox3HXnwtRwZcGrfND4fNAXyoRbL5Gugna7f4rNppMaU3fgrWgr931XuAxGxnVexL3y8kBVTD6RpeRM",
  "key39": "29DwuesJdaW3feS4A9oX2ceavivaQNZTEpU2BJQ18bPABGMsrYhvjMNjY44csorC7bYZXSGCbzZcrKfGgKsogBoE",
  "key40": "uGKShqZWedAdbWktNcN1jpJMKrq45PjBfLmMe8nVR6qitMCpT57C19xvac8Cnern4kqYLJMcBh7w79r7xG9PNXx",
  "key41": "28fDhPGbMkfoWZXfjkTvRPhCtE6L3mqtPo5iXNZDT2xWsS8jtpFkYUo16YjYERtS9XpvG7TZeDRaUAruBh7rQr9T",
  "key42": "5MrS68FhUyJ9aegn1oEAjCnzJXPkaxmQ8FbdB8EVXQUTELvVmRidK1TrudpRNArQfp37GYVZdHzpx7gThGKLTjF1",
  "key43": "36Zg2S27Bzd7aw3ctDGGStddYc2rJvUNcccYQMK8bRoyMDM61pphruMS7q5QeBYpLkkqoVPi1aRAqGPHR2XSYWCo",
  "key44": "5FXxUjkU74WpvTqRFXHWZVCupAarhfngpxHbX2csFwJPssnFaQwoxmsrJ4r54JeHMh6QK3nB7b1ok4uW4vyhdBjw",
  "key45": "4MTLWJEZqr8urcZs6x6XpXeGbxq4fCRSG9oVqb8dxfxCNSZK3t9gNvjv31x4MQFBiFLX51KU6j1bcGCYSRyx8Gb6",
  "key46": "6f6u3YENnAnJoaRRGCRYYiQMqWQ8hMwHsd19DQhtwYtrcuaApx8zxnuxZkUGbPnVqB7PxrUefLvEf9QS4mBw77V",
  "key47": "2vNfXh6e2kZUMzyyLRC9iMh1fnD5gze5RJhQkWP5M1cudmhU8yyYfMLpYjpk2GYzfhHYMEatkDFSWz9cfFcQddY8",
  "key48": "3uzSLygCLYZMKccRPkTNbdAhnGuA7kLrk2Cbb1cx3aaLVR6VUd14TRaw2Lo2Tu74rv9Bi2JY4DUeX9HUbH1Les3p",
  "key49": "4Pbcs6PhEDTH6eDgfiinmP5HXNraQF3DvUW5GJj6MdAMAQyfWWA4W3dywBUVnb3R9uzR3vKhHY7gsN2NK7aBXgaz"
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
