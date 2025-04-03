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
    "4oeu5NNE4VvMA9yJG6Mur7LHguwabCd8wn2qzqNCkaseUXqwvnk3nAP8AR1Tvao8Avz5Byi1XF7SUGDmXMaPZkec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZV7Mcnaaxzzqx1LRMnoRYzP2BEfKTiJUEdxN1UrGaDjp4Euvd2Kf6nsg857uxqE8R7ryrxMVJ8JTCVypc8TsSM5",
  "key1": "64epBzev68YGUpMw12RfMZyyibQiqfXPcbbHvLsDmk6MQPJZZzMHn7aNCzQ381ktds81LaTc4cFTW29cY3YoDNT7",
  "key2": "CtQ8vR7G53jSa4JevzszEGL6Rztc1vbyz12r5BcF5iZsPMVRQocJJVyc4C2L6ucrPfhJy28DHN2fohww1Wdzx8y",
  "key3": "3YAFesGqK6kd1cX5E2UjiPGYe5144vop2R4muf6Z4AhvMezswSWqxaXaUy8qeEmu89eA1A1YJdqptvynwut9KPKi",
  "key4": "4H3n3Zn1w8es48bywcc8U1chNcr73TSiW2YJt5BJ1TWBdB7mpdfXXRGuxDZUDktGihqzSV7B2bRw99zZB16H1gYL",
  "key5": "35BW8Mfzpumk4niwVQQ6fzBezRU2NxWDS4GBUDcD5GMnJnP5fiq1XARcjjYR6pnaiqo4UNGAP1Awzkn8T19r7L1W",
  "key6": "Dyk7oUJ7Ff1PE9J2QE6CRZBxMBLHLdzhroztDkUiZE6YajxGHxmaYkamMVB6NZVaWWXCja46Gt8jd4q47U7ZCgi",
  "key7": "2hUxemgSNH2LcG3wFuDs2ugh6Ka9vv1mkMK7t9bh39seoYpY8CvqEGx3nEPu24Sj8BYEgEirNWX3CsGSkpnfmZnp",
  "key8": "sFVFYh9fA3jxrxGt9E7hhthJVkkJu2AErB3Yhv131c8qKa4VHebpYnj2A9gBUZFkdk7dWBzarh88QTdRxFPHPPw",
  "key9": "eAKCNJ3ksg28uiNdgsM3jWmnVDV6D9QVM8qNKHQgFz3MXYEyEBqX2kYjjtLtdnSAGCNp761v69UvXLKcZ8BM2NG",
  "key10": "488cP3jXv9nvCj6KbpiFfF5Ds1uFNAHrZyZV3dZJ4pcATkhD7NUQQGiWWi5g9FSkJUv6cq8JbBin54TXsKiPXDDb",
  "key11": "5Pj9Zf8h8nZs9W3Fsf3VRvdE3PTP5eguKQnuFiviZfuwAoXjbom7jtzYiH39mykKyUj6tEynX7xT2CCrQTGreVDi",
  "key12": "3kFiPxjEWQW2rhWNbwNMEY334cGvyKSNdAk7GXLJKHXrD5ExAe9Fbo22XgYZiqpqrHHc47QBSGWCxpPSFYcDXM8z",
  "key13": "3nsdKKWAC9CscUaSfpXL4pvZbyvzDHWZPMnbpZRWHtMAsyQDuHgYYxcbiMHLAU5JriGgFrkM2iXZVC8NGpER6aSA",
  "key14": "2WH5AV4UwpY6KotnS7FFeMyZa3BWBSE1fTSAkmcoDKzwPvmboatFqtwxmo1CNbXKYrVRxCbU9YmzJBdVCHX4Bz6H",
  "key15": "417Tkcnqdvp3B8q91oE5dojdS5qFqQcMZJWyuKmaLH4z3Z1SF8PVZSi6ngkEHgKfmQcGmGQNw8hkcfdfxRupbKUw",
  "key16": "58JXKLp2JvmYtEJZECFibjVJ6awQfBsE3N4FZbUeVFFBQhfxwS3AaDWDgs3DjTHdAabASvSWGpN1NbxETFtR1juB",
  "key17": "3pC87r7M8A4AUFXSBEbwKmnZVZv8AwhpKK3pV2XwRc5qdeneDcgBwCAXCspWiDTf73XWZiWgXs8Nj8WAm72Mk8wZ",
  "key18": "4EwHfxhaYiLZZBvRikiJap4asXTd1xZ1EgEKQVZ92QkoypHiSvu1PidCtzwqYsszuS9zn8N5xxt2NAmQRAtaswop",
  "key19": "Vr6Kkr19vJELFmZFkQgQa37tNgMPeuDU7CWNvmxFtXMSDGtnb9Sc2YhdqFR3cLjthdukiAxLYnFegnWJEiFiN62",
  "key20": "595TXdqHZzEohLqHxe8d5ViebkBvmQ4iv3Zwzfsb4HnGFCWRmS8tTaidHQ8dJYeb5dmJzeXs6nS3vNKdHYUGhDRG",
  "key21": "3YhytEpu4xEqX9WB2e5evrq7uJ8kDpvxdAd9b3ALDx6F75PzbTazEMDqKMJtPWw14PmKWwdWbXCXdJh3xEkwqVYB",
  "key22": "PyLdy45kBgJVkKrwEC39QAMPmCGjdjqVYKZj7jmaAmnkQ3rDxuGqJk6NEiELznE3KYhZmHhMCQ2aXKiNWiNoGvn",
  "key23": "4q9HDDZQU1wwgcNxavEtHbwSvMscDA5ZgmPyqnCEnjTFUdS6A6Dtx2d1A8bC4oV9oSF5cfh8zr4ZgXj9T5oyiUBA",
  "key24": "3f5NFPEBV75PoQDSzz755BUV1RFuGQmWXi2oo5RtALh6XQ82vput4LS8PHLhDpMxyGesxYkx4YiFvgyRyWsRJH14",
  "key25": "KWEemzJK4WnLA6cNtKYxHvQo3zGGkhg9B8ajpg8QEFDSzW35NkcZPoNXYM6sGbLHsYiFoMrAYJpCppWeZtzZ8C3",
  "key26": "5oPzzWizCg4vf1WZULhBUWfMPvjq9QaPzNpCviMLcsemeVRpwch1REBUeBvxbYu9rbRs4yaZ7eG8hTYoMYzxtjja",
  "key27": "4yyD9Wu4ELefuALZTnMm658wgUL22kZ1udVu1f2Jn9JeF1dkVEeWmh1TzSSoXv7WJs4ffdNdUe8UtwbLWC3r2hB8",
  "key28": "2c9wdqYXvgdr8kgSL6UuwNReC5zPNANAFNjxkHAUoWTksVR2CJH4M4GSaUAmfDjwMaZCW7uL82n52cbnrik9JbTm",
  "key29": "5JhBpG8pjCZ8sR84G2TUKgAk4NpHpY1acZk6JVS2k4MwChKEmoJ4BvgjtqzmAn1S8dPM8FQCRzsBXuUFVnn9pRj1",
  "key30": "4RU4J7SxfLshmiJNAo1w3KHten7vhQ3u7yoHKjaKB7bU3cWqwzD46WspfLZthjYpxx6hso6r5k6aacJn5DzGVMiP",
  "key31": "67qod4KYJsCCWFsdGm4AWE7KRNLQ2j2vcpejqj2CGJtcW1VkxSiTKeHwr5SzRhG4vPoHMggF7Y5BBp1KgxtvqNxC",
  "key32": "fby3ceur4Sm4nPpv42KgymomhoScfnWfVceWLM3dPxT7PpXGsBSrtajGQh5VDWYoW2jx2Nmtmay2baiuPdEjAnf",
  "key33": "4m4xAzySuAxCL8V7PzzfTCTiCdQ3XxH932Fy7bKnCt1L84CTQSRxnEgpKzXB9sT9SQ7YSs5HngdjYRUcs1oMDqcQ",
  "key34": "3JsEztEBU8CJ1QdUbh98vau7F1dACLief1DCWSBpcVVEqF6s3Jq2FyS4JezkvyHsbtcmefSukGSdDAbr9ARJwmTW",
  "key35": "pxT5iBCwemUqc5saPwzz8ayi7tnxTQCcmYjLB7zMUVEXYE2Nivsqkpu2wd5x1GPUmWW47KHtgBD7dvW3o23qjgL",
  "key36": "5gs8SNHHaA1zTDz6JhCP6eFUFTrv2b2cEwhaMkwDjzRKbJA5RcCdV3oEi989NyMNhYAn4C2vKtzvrpYzAtZBNf84",
  "key37": "3NhDc6BRCj616KZkvAsA1udzgy3ks2MuUYWWGSt6hoj5r71q5ncFps1FYDyak9UCELLZ2mgFn4UgJqErj1KUBTZF",
  "key38": "2E8P4LvefbshgjUWbyvoSHXbwDg3V3eWWFNkFP9UvQdXZkP49d5WX6PCHc3ZCG5LJ281DzUVipK7WSLbNZGZZijr",
  "key39": "43tC6uNXaiLP6uEBA9Vq44bbhSGrDtHJncF64mT2eM9tW1behTTHqCF2dnzKYtJ71PpH7P1yfCxAv4CSzki8x2AQ",
  "key40": "jJzqp27VUeeiFbrm4zvxwkhXTA3w44XbC158pzXtj2KykCHjsRbiQfdzb3CzWyK61ARrzXcp2LAmSzsdqJ6fHab",
  "key41": "4HWsGNJHSGoDNdwaJcYuUbinqWYmSSUQvqBe268tRYQABernrWxqpMzgUYYBNUmcC8U331DYC2hgZhPf3NZBWZp4"
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
