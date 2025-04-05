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
    "3j3ngr8HgUAykf4hGmDkiPVj9Fpi9vMUPaW8orgXYuz4dU1zptdcEQUJ2bqK8fRFkfmWesGfUZWUcBbxMncshyu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyfMxrLiz6ymVjUAeVHrnWK7oGTk56jeXVM16x29aUTo73N6vbs4wNGvjHkHRbfPwWSCazuMVjArf4bNLxXYvfX",
  "key1": "5wkYxu3ML5eY5K22TeNZH6FJQSgk2opNyt3Neh9jLqB7Nxdfcr3HfrBzLpsJDEwBWqpKPPQSLLeg8MiFebUbaqY4",
  "key2": "42C3inkbDvGL9cVjzCYTBjziL7iPXQz8RcroTFQGd5EgW3DWAShRfmHqJrbErGtwrVLJ6mnk3KSFSqz55WSU4ecc",
  "key3": "4mt8uuA7mfQUSBem1wQMHHQ336nu3bwgyMWGQ5bW7hNqpYeVHCUf3xijwoosvAYP1V4vz5CFRtmHtaFSF2WgoYeN",
  "key4": "2cMEmyj95brqU31qGS8Zr9A31KzbNP6B9NwpoXyZrMnX6J6uctXj3M3GdSdGPHX5V3gbU7G86tZ6Z6xFG2WnQ2s2",
  "key5": "4aLGm9fZ7MAeGoV6gMiD3r54MKdaS8eFFACwQL4WChbfXM2pFV7PuLBZdNa8jRDPRh1mQVmmA1aeEpV2zMuEeRRt",
  "key6": "3yKG742H4qdhpVRubUKo74y4KDxwevL36qFHqDz3GE2cgiacShvZkpnSsziDi4AhozSey2ro57XekBxd4YpvSEDz",
  "key7": "2WY7i1w73m1LWz56eiNTYNEWbUtk4LMfDx2Xk9MTDvfCcNVp3vrGrAKANAhPFW2mZZchyXaBxprLAsL5miZrGBsc",
  "key8": "3mRgLPbBFbbD7N66ZoakjejcswVLESFEJq7TGtRGUFdiNxU5JXAsgFzSKQYfH91vZHT5nVS6YY4qDfvxkAtHubDj",
  "key9": "3bbQM2Mx4bdeZG8D9LyMGx1upq5aFWuFs8nZUPbp2RUNFpT22ouzxrQj5aoML1jA44mtm1DGdp9CnvF5gBG4G5SV",
  "key10": "4FrCnYcBq8YBPRqh3LG1cKxx6JjK2Vu7dTMMtF1kWGu1mKZDRXSYoDUYwGAd9PpXJkPXfMiRXKPckF4jKnekBi55",
  "key11": "2Myuci1EyZZ1jzQBL8m8JZSrb4B1CmoPUdnyRtK8TXRgUoWGxHagR6hWxbNc5zdAyUxW64XYuDpXUXhu5qyUMiha",
  "key12": "56kmMRWtqHCbjeJpDm1RUDr7aQBp2viRC332SyyenPrGedRRGBZGUUHWn2iDiiQPj3uyxFd9z7YqNEeDR2ojuRfv",
  "key13": "542HSRZ5jZY8sbDn8f4PqkyWwfQaeYLXCfQjS7tcPBnSW8cBUvaNh8N9iQNKPBeBojFja51XUA9vFCbME2ZEG2Ay",
  "key14": "518CHJKi996gMW4mpRb3o7UUd6Xi6PYRtuaDp69Ns8MkeMjwQRwbnUdKcKpTvp1usKCLgHafQkaQ1zN28Vr55YKs",
  "key15": "5fxHBcrqTLxEN7PrqLEdN23dC494RYQj7ogFyHjoKDHKXpN3D6Z9STLg4hFxndXoeWTAYprNGeoVQsX4mpN2KmJi",
  "key16": "2tCtsTAXe3cvWe3aX2fP4si1NbwNEh8wDfnHsZaxusXXNEzUKpxkYh1Zg5vdWooudX9sGiFD2k7fzPz6heUYHwuo",
  "key17": "4PWzNVx4Ek8MnJaLVKcZeXfrZeLs5gcarguEJMAALRuDfJgaXKqXpLRbfZNRxderMesUXtq1jebefaGcAEAmmGx6",
  "key18": "4eccCFHGe5PcFJVYRKVLgj5BxcZS9mDdiwepwas7ca6ssNQRHqwGpSFZ2dUpwV7UeDCHQ5wfauT1Q1ArbgRG3b26",
  "key19": "3vsprW8tzchdPj5ETLsFoxqQsLAuwv1eE4iAY38zsL5C7kEN4HPJzGPphGRb3znb27BgF57VohzrV3i772bFjZN6",
  "key20": "5zJr4UdPToQtvs98i3Z7kpXnX3Q5JVhv2XRAQquaNsTMecKNS3aHojRdYcpbiEFw636zdfXaj2zvSCHN2LYWqW3M",
  "key21": "4pKEMFrzC3hrBodDs1qMr5GdmM4p8xbHp2TajAS4EAUN2LiBqSonsbeenR9KUL2jjmowcFur6n2Whd84jNjcxGhA",
  "key22": "38BLwaqXaQP5719sDAb9C9NXxoPSEFc8imAdgRBej1zuFRex8E6koRA6HwpHvNYTb9zS4vsBSqNtiotxeXFHvh3F",
  "key23": "2nxCRZStbttUCKQdEa2RsRgRvcvYe7imF9k4R4M7X2xejKsu3XxGc3D1fHepDQAq26rvM23m69SGzk7FVbj3pnht",
  "key24": "31NMWkJkFDRE28H7QU2Ug59cAph3EkCFgi49gNJYEA2HU9eKvdyYTeodviq85Brx9KuMPYFX4hYCMECXPnNi6ueX",
  "key25": "3RhBb9W6EUy7U45Fdvg7kuFxc8yy8pFJNXmB2P9V4hvUfqAPzqtpFk6yeBoWNecCiDn7TGpb87nYYwesJNySWUZq",
  "key26": "5XfHkrrpJuSdqCjXbGXWcq9YjRgxngbS1Cid6iGm3bctYK4YQy5xuF454ZoLA5Ho4KB7CKFGU3CeLnXMYGq64hz7",
  "key27": "4Hk3XodojLr42kG4eMJE4TdQusSAJmqrRqNu59ZDtZupSMexWXWGbFPEw6QbBcC6HBr7CGPDvm5dwp8ZSqPBJoBy",
  "key28": "2q3jUzdD1PRFvTCkShVShAAjaah3WQtmYeW7j9QHdhM6PmzcHHEBg5ZANmEcrVagNA6rLfzkXU3evnuvwPEL33vk",
  "key29": "2y18TFJCD1kiiWuo2riVSJEFcmuw3mUsH2voDwBfwkXZWgiMMGDUUWaavUf1ZYYC3QiYJS8hZhBrEw3wvJ5XAR4k",
  "key30": "4X5AoTnPjCPC1xitxCA4hTQRFwmYYHtcGnzcCyfFA7bHiee1F9Twq7zXB84UsHYms1j4FYZ4FzwsKL2KRWamdbGK",
  "key31": "4WWhiD9Uv3UHeomLocLwvE8Jg47HxYGwdAjqgB6srnqxV6nfRhP17hz5NFAHMSJDN8Pw6Dg5nrrV8L4e1sTyymzK",
  "key32": "4rjhMBLdPubYYyy8yhXRu3KJKKySA2ugkKf3jBmNZrv8XiiL8LsKWMfjHRJEZNf6sC9vkXgErvHPwmvA4bGzRE55",
  "key33": "2aMYd61MjQS7SnKqSP7KFmsmZQhNk7fLhobBPqFhZekHhqKyjfUDd2mZNhBZTDjELSwD7jVZy1mHt8PDbiLVAEF9"
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
