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
    "5QxH5xrJD9RyCiJ2Ufwe2y8iuvR8Mupa1YhcT3t5yTq4TSeh9ueF7rfkQAJFzPN5C9wAeGZPeKEW3wn4Q7LwKQh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxjwZB4cGF6qG8Zxv3CynQugzyAJRghNpKMDeKVfmdKzjLaWSvWES9rLtVAAw2eiWxMZuJDJJVmaHpvASpfZeGW",
  "key1": "3BohcZ63MN8JRy99s1dJdYzVR5s8sD1KssAwTNHEGyhyjMi6uYZGahJGLbFDK5xS2AkFHYb1oyrCP4PxynN76kig",
  "key2": "5ijS2SQsQFdpLqFvEd1LSo5asFhHWS75yVzDGRWa75UZHPshgFWqQP76jkMBC9V1KFzvFp369CxYbnddXZ8GqoTv",
  "key3": "NDRQxHeG9qGMCAkER7uaZ2wMkVYGKZiwVbKmszA8tbiGMeuo6CUYXpHjRSRX9bsqGKPsgKYWKrRfgFpNRFfMrdh",
  "key4": "347FTkUEovij5zyvMPsmW7JS4EU3MCAT3VhV2exrNxTScZEDTAuMujnG8XJu4WQJJq29FGBtgC2g4rQb8fHMhYB",
  "key5": "37oi3MJ4xwHHk5FntZkoVeDyaMaHpKqJ4wZJt7QfYpAuQCM1A7faH3dPFL9QqyKtveuVgrY36udvSKs52X2mcirV",
  "key6": "3A5PwWhDUWr5bL8uGyfdZLckxT29jf2v3NtoT484MPfQZFGwwTJApD2SKXTaXhsqHZx1meo8RUaq8h79zKBZHtyn",
  "key7": "4pcnPHzew2smNieXbXRJEd89JrLi7RHLemE2jUPBYbrMbhCXHJNWUvQAuZnWWH3qVVpd8JdLmM6rYMCAJEyynpnt",
  "key8": "59Evsa7rsHpVeswCnhdxdLQ3aa5b3cftAM5ixgEx51VKEbWicXoiGRgtvVXFYFhmNN5FgG6TrvjrTJr4nxCZJj2X",
  "key9": "vSPnd7Co57h5vrdWdQWdetYth66HDu2T8sHFGJsgtfuaW8T7JwfAPFtrcNyyyJkKZtueNdoyLocsHkw1CUXpZWs",
  "key10": "5j6aPZNh4ThTjdj2iCwzUABGk99pWTN2DaMrm3J2prfkh4rSrauSjuesM8LZCRY5bsZVokuguKAoxpGz1b3o9WS",
  "key11": "r3YQvUrUHGFxDRxtAba3tBzKaJF9QvSroqAS4tvQEYBKqPN5H8hdeUmCUtbLZdhux58brsPct2Fg4qHxx9Mq5Te",
  "key12": "sATEtYJcZkAcQ4qo9ieMjDXUZPXbFUiLusje45pYCMj3sqcNhMetqNaZKg6svy3UsMN8uSCSqXEV2PfZgXkqf9y",
  "key13": "5b4UVCvDk29zpDrxunxasM2zQumGtyYK1txvrnxJxJkADYeGqCzvgG7eSNJKDmvJptrK71nW3qnfFbpoyAs24Jf2",
  "key14": "5yaF11p6EFijXJB5Q56PBKnzEWv7F8r4fiXwYwMj49RX9wsb1q5SUDvWEAUjymQKaU6wzJgHzmA8ivgmRgsCj3MK",
  "key15": "KCVCXKvziQfnodDdeFBEtdYchk9LyKrmb21h4uU6MjxK1AGdKBUzjPG1FWs7DLd2EDqSwRrcFdzHML6UTb7mLnb",
  "key16": "f7TkBFEMLpHNxXAgHSZhszEzfMCCdjTzWW4XiarNB8hKE3qwM3W1iaAvVpQRUBRZNNkGrYp4vmmuN3eVfvvTi8z",
  "key17": "58spS72VzqziGk78WBELyc8jzDFRyn7u5khZiMVznfkZ3gtnuaiPsoMT756hUjF3DTzGvG1HVc2JF9SUzoj6VK7W",
  "key18": "4ritwJttUGukKcjVg3rbR9m8Et4jG6Ffey6acANDuqgAPnWfDmWvYJ8Styi7BMX27MkBQYsETZSomzQzM1Zr872j",
  "key19": "5wukKVDftFc6FM3XE1JaCgPKaDZPHzcZ4AK3HNt89nc4jJdQwfdEoyuehNsT8ie5314mKWQnDCnMLNqQ3xvwu8we",
  "key20": "5PCoWFZLQh9NUD1we814rbcmciFSqbwZGpCcP4rgDgqDqHEYHyYGYH3Hr4VTKGjw3chniuGecxLmEjysYzY4t2hd",
  "key21": "5NgfuoUbSaSNbK5dQo5avHkqaqkcGkcA78bRZJpca8FLTGTYMqNZasN4YWXhNgvgGgwBPExMim4dvtK3iNMUsG85",
  "key22": "3NbVhCcWzKWzid5eV1ANm7WDEUecVVagAffZTfHtCYq9N6hYA86tLEmYZyDLRo5KHqqinWhbUodYCzmQKFGdHoH",
  "key23": "5euPZum88j7vqr9435CgbU2Gx3L4oeipuZtSJSz9KbWWMitX6tTMTo125XxJ5GsgCSUyJsLLDsfRiHzVdko2c5e5",
  "key24": "2E1Sx1LcfzPvBgfHEjx6woQjefS1XG8A3RdHyXW91aNravKLQ7w1xEBpS8gUYS3RWQ9Z33GiMdp1ssY2Rt9UDj7C",
  "key25": "5ZEffn3JK18xVJ4eXEsj1rssvjPyd1sbgkCLiSd8tweC3yrTd5GfPh7uLdYLBVXHoyy95Le4LF4eAy1nak3MSWuR",
  "key26": "NbeVuRPVLcuQscFUNS2bU2Gj6Hph4TKkLDbtVtvSnrNZqAPGf8CU1yvtp4DLdsJnk5CVggpRGNUWZ6bsMFQeowV",
  "key27": "6nWQbWQEitgreWfpjEsaKUULToX9Dktso74h1oU7zF3MhgK4uAda7vvbocrX3bYsZS16mDFkD8Gm5MidYM1rdHp",
  "key28": "5VSptfZLAVkArieJRUB3MfREtwc8C76HnBBXWQ7f6YDvFNVc2cXLT96eQJ7bNdhTjug7go6jLuww8xcXU4EvAQD3",
  "key29": "53AetD13GMQiJPEFfr9kpBRKBucQv9nUZkyeeVToAspr1Rj9H7qAbXwddmpDGsfSMzesCKaK7Eq17WF1UsCE2i14",
  "key30": "3BiZ3jquQFzgPZBFczXvT9ghA1BqJpVdjCwGLecq52xcfgvebVrkx3xeTTPE1mnzu4uPyx1R3sxFwoV3XBgVb5hZ",
  "key31": "3fMdaHemR9jwMhYNKoTxrGuvUMrZKWhAtDDvu6bvGdewgFUN3pUcs57NfG3A5WJdr4d6zc9511sabrADndgCQc6s",
  "key32": "2CC1QSLQz2Wwm56ACm1DXhAgNrv46BJ6Xd4N2YLTN4vVwVVDS5yzipX7nFqWQUn5nhCzrgsvvMngd61ehBcK2jHP"
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
