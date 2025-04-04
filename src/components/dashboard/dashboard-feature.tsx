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
    "UHfwNappQvhwqH7EpXiT2W7tMuEFyvRDDuE6euGhefwXFxetePYfvYXz4sENJkpQ8wHg4rxpkgWUATNCX39eM7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q2CPwW6Fwapx2m83UCn7fXKwViPxrP9JXeorx64SppKgzvK8wEKYF4W6LDHhZuWBsNhwKTdttkgLJPWhVDS61iG",
  "key1": "5mS64SPUyZ1nYY86mRQAQneN4GKKyQyGFsHN2CCGnGf1Tss2S9Lhn8ZgJ8PANArCswDwrxXbQ3ovQGVDhyRvvd6g",
  "key2": "GHfSrLWiW6VhECgDjPtMAFbgJrTbodujm1TA5peSKhHuw3NPyZbbqESAo1VvkWjt9XssmvSV9DqAuHy7V1y3ygK",
  "key3": "geLHX5prXjR4nnHGzFXxzz5sW94hdQpHfxikNgNq56Wf7hwDC4ZaCuWU6S99cHk2SgFQbqA27JY3HTYqkU8gYe9",
  "key4": "ohsD8tXJs6gzvhHezxm3sC7yFHw15WabQNgyZyByi4uHXhwKqyYXPf7PiiXzkzoShuvA7vgXcrgZ68hrwuKyeyp",
  "key5": "3xVe7CHzqyG9aZfrAGQB8SzjRTjDo8GEPzPB4onoMhDy51KLRrPDm9TXzEZ1wW7EqbwbgN9F7nkbDaMp5fNJUWch",
  "key6": "Sqw8Uc4c1B6BGqYUeGYpPyaK54ymXjFkPkZwm6upQzCK1kS3bXb1u41yBX7gVVxNjZ3mLgFWB4oaieos47AZjF5",
  "key7": "Z29h5RopGkHqZXu1drqZ8Lh2kdL3TH1vtrRQRc4sQZZcqo7NCFXwj5UH7kFnV33dz47AnKtqeX2ZjDWb5225jFE",
  "key8": "phDWqKwHe7RwEWs8a3ufd1Fv8hqa7UXvcBqREx5zMFWsko8GsA4PZg5AsCYiEuSij27LTammXfx3KU2YrvgPnEL",
  "key9": "2juNjboRAQodx6giWgNFrih5ArwwB9dnfAgGZmG1pf5uXeLKMhdkiUqb4qc5wi6smhQ9LgmjiNUgMbWu2fhibYJr",
  "key10": "5ZCz2kQZQtL6wbuLBeuNi6vA7k3pcHRmyXasrQFDyxV4WxgRbzNy5FmdP7teTe9rQMTgTR2iqbgfF37bFHPaEf1W",
  "key11": "4hUhE5Ti4zQersFNdkQMGjiqhmoogQ7ViP6aY9UL1UawN64yFJung3tm2ycy9G2Q74VRNXLoM3MFCSQBxXMzq6qG",
  "key12": "3PE1PuGw7B3rjSbBGUing7enh8gCDzyon8eYdt116mQSm6ini82M42etcU8ZDLaWoyS7oNf9EsM4KXzKJEhZA21T",
  "key13": "4GWJ8r9xNtMfwnn5PAmsycsWeVeWx35q1Ceeyux1ZVQyP3CDnQWugSrUDxzELPfGSQL5hbYhLw96QPy3KiVSaV7j",
  "key14": "5n6ZCWDWJwKYXeo6u1uDFXFNrWcbJfvTuBxRH2g1jFE7pa2tg7ETTp6va5jxhSP6uGeSzLcdTHwJs1JCFGoYE26t",
  "key15": "41A7jBmf11dVJXwYH6KDqypxSmvqQqsiVjDswHh8JGtKipBgntw2437uXc8pzy4ihmodoitQSCbu8skirDTLwGVX",
  "key16": "3CDHxC4LJyk2uYTvTNsbh6EuUVeNx2vR7indjdLvQBkUmLuVNaSLTvfeSTGNAMSTmYebnt8FdRtdYiYo5diR8UQa",
  "key17": "2U8MMpFtcXskUjpqzTdjJUmkh57QrutGsojfydWtNAKaZBHT3Racvd9cAhsgWPFUZPQB8eA32doktPPyUU3DQvER",
  "key18": "4bC6DRLH8TwnPYPo2CZ1Jdjy69xEGtvmg769qAxrvy6nXFgmFxCDwp9irymUKWBWaLxMsfX1YqWPH1LmWzpth5FU",
  "key19": "62w6b9JjNhPaSfertdssFs2EuFLBSfdoaEUX1b4U6tQX2JtxCyLmP984TynkbYwJrTW8NJoDnmyb4MpVDDS67BqT",
  "key20": "3sKwgxto6XLFUpUEu7iRBu9nNAMCkQKiPaFaS1SMEA9AavE2UveKJAVy4dzS2wzGJhC4subSnsZGREUnzK7Na8nG",
  "key21": "avp8Q6uwyH3Kz8DScNfmHeuExL7whd5PHVs2gLShaAkRv47jh2RguZn69kyn5aTySvChXdzkCB12zJ5p7f58yzZ",
  "key22": "4oJczzgr3GQscQoWH7Pyssn8ts8ewotVMmwcVhmuLrVgpzqqFvPA33qyBiBr9Dd9XQqWZ9iqswXwEUQNuH4V6J6V",
  "key23": "3vAyNGMxZWnxMpKtBz95gPRPLtwZED7m98MuAjRLBYniZNQQe1hmexXrTwyJaYoNcHdSS2QJ4bnoCMgUN8jUYPEF",
  "key24": "3ZYXfNuqca2SKqgooBFV2cTNzQ6wZXxTHXb5gBjL9UmvXZfq2mwCCWBqx2FphUvqZhovLZtkk9VVbg3Gdq9DABMy",
  "key25": "2HgNUPkfTqXW67aXcXU18JY2Z3MFSNbgS3Fx797q9ZzkbwViTAEb2c4ooFRJKozUjHpYoE3urrMWnVoG7AwBRRka",
  "key26": "3EVUxKkEdqPhMsXwkEaQNYC7SSfMZe5QrscBrGJBibLte2c43gohbj2QWEjrhqVtmuoZqzawXACoUrmHgjtxxaNY",
  "key27": "2gCtP5pbeBbtSfybtDu47WtM37C3S4n17VLxnMYPpJ2AtzM4XD6z7JBoSxLCAGMXoWvVKyWnVR1K3B9wxPepfMzP",
  "key28": "UzEf1m1EtRqCbmz92yz1aqA6XZ9kJLf6xuaoaYZoedQU8Z4cRgkCDdyysspUZcg98wWKCNwQpTo7sz1oXaeVQUE",
  "key29": "346QaK5H1GCXGBTmqFSoCjnh96jhriDjikgkr1AGdUdtpYWpJAS28XN2XHapjM8XFsP1HfiqyxBJdPPATTxgbMNH",
  "key30": "5abm7Y7Arwrq7dwvcDSpibkaeGApnXGkZ2z3JcrutcZ2QUvrfimTgHmRYUQR9P2usXhCnnzATmt84XrdA3Ss3Z3t",
  "key31": "2tByKQVXusGhcUPbSepks4PioPzWcgaPSFWKiysZjpqsu8sZZgxfTuv4zumB5yM3rKVL4AEhc4c1mCpXhRgRzXME",
  "key32": "4KkB4K9wTRnLNU4GeTkTajZLBzfFS8uKzoSh3EW93VtZt3eVZShbG2Jvnf3zCUCogBChpcADsyoDnGy6W6erS1Xs",
  "key33": "3cGX6RyrC1oxvXD5Qf2nhBJiXKbzbHYqug71cbxogi85hGBwMtTfeYxrtdoW1NgAZHpbXUgWUXkHqmkn9sD2gPLW",
  "key34": "dkmmgykCQvH5Gqau8uatQjDa8AYbgRZbq7AWPfADiqmn6p2TKqrcjq3GzMZtUCiTFp4fP5H6nfM89AXBe382KtE",
  "key35": "4Lm21Vx2U2RnUKpwUUzHJuwKgXZfBqxtFkpAunENir4GrzgLaRMNjZEhDNiUzYW4Lxkp2LfU69vut8fGWTdx5eWx",
  "key36": "QWZ5ik4rsLTABbv11cbZwGq4Bfvw3Cp3i5EQekRXRpof7274HpBuUshaMbcRWtwuAawfEgRyJT8nEmjUkHS2weP",
  "key37": "5ydbM4KZZ8p71tX7YgCZscjQkv85qXrYwe5LJnUgq275LwMNDUrMhBqgQkpq95tXkjuibQGBB3xNHCAZCwJnyyw6",
  "key38": "3uyzxyCo541FbZ9ChZSyNgkNz9Kem3crZfDx97iZTVpbZ4yh6BBfMKBsQX11VFVKz4wWtaDovQaCoU9bsJ7JHgL5",
  "key39": "31C4AyU8r3q19hazJVFUPA9YUCCb35eJLaWX9acXdcTYHNtVv3Nnffcc8FhbR6KQShcTpyq3qWDgfswqPn71fZbb",
  "key40": "2VTpDFmdHbUrcx6SNi8w1hn1MUsLagiFdrcxn9HMUEgXN25EfKFPbZBFEMWKnQhugb697Jo52KUt5cNdDvFMerHq",
  "key41": "pZi9hK5rE9ikijccAb4uzzCgr36EDhZHKRo8FoD4aEcVBGfnbKQUQwBykE7U54GoDN2ENSubpwHoNMDJ5sJgvhv",
  "key42": "mazvQM6X3eGPmgLLLcvPyf4dSBESUpGA8Agnjnq6kNEmo5BYV7tY2aZRVcfXzxucwD3vnn8rqevqZkD4Rf6w8Lb",
  "key43": "4LtvhRxffGHK1DkRySmxiMeJ8Gdc6rqJ9yG18gEHfkJZKGX1A6riURC9Jk8CsfPsQmNoQ5po5M49vJXfX3jHncbp",
  "key44": "2Txa99Uymwo1vYZYEzbTQQ6z253A7vo7zSTGS833LEGyvNP7XGBWPBe67iXK6xJ3TdSGJCLJdoU6FPDTYFBRv3h9",
  "key45": "3mQCgxvyd2xTTUXj4T1JzPYyhxnuSjdyJ56x7ULqqYcR4NXdR5z2Y3kLPbMi2eHdq8wJtq2oCC5HE6VRSGBTNo47",
  "key46": "3XiSHGpruvDi3Q59eHzHqa2uHd6JGS2STd3p8fzU7BwqidrBQBwUris8EHCn3bezpRchSJ8pv4pBTkFuwAQwk7Bb"
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
