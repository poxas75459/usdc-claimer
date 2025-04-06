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
    "61v2H2WtJxq6BgbCRtWKQGraWRDP7S4gcjEj1musBqyjkmPe6yXJuP5yDrmXyeUuHEGiPAitYZPGq4tF2HTGN3Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrFAe9FJpUbjZ3WucxmkTCJMaeD9GP2Zjhef8Xtyz7KmsA3q3eCz1UUDTrj2XSMz6BiqeJKsoTc9ThauZ7H2jUj",
  "key1": "3eAayFdaLnsGWUrbvBQoWU1joV7LJ1UWZv8sAMtdSLpuLsHzknaBHnAooPiNWRn3WmSEHwUHVZgmgRM6tsMFd48F",
  "key2": "57RQiLasucL6P3skFAa18nhBFDc88ff8RUnRrDK6iJ2PMyEpai23vuf6QM829w2iKuUrFqVRBGXuubUn6kSCssbt",
  "key3": "49yYHQFkgJ8qCT3KRCak3kyfhtRF6NpvSapY5DbMspBVB4rYqzsAQ1kG2psqgKAixPG9aCeqMcmP8qzuzuu4D6V4",
  "key4": "4256RyPhyE4j86aVnQYZgqDZpU2UGBsVYvPVfhXqPYPRE1savcBWXKYX37Ff6mtg7CZztgqCy9MnzC87shBTaoxr",
  "key5": "2nYwrdwKFBzZx2HYkoeNuWAVSqpaVgNtBXmprUZfcpGGnvcNrEtNYB2M95EHMnMSVRBSMbvq19ZmHKaL2hGXSbLR",
  "key6": "4ntpi8gHJedZ1fMeSgBpaRCq4weaPzapkohaFeC9ReRSDSAGTREVoxq9hup6SHQWgCVvRcHkvxzFMBWdejK55qCU",
  "key7": "5zhnTLwSEHCkg6TzJC7huKHkDUWAcz7rWRLUMibuXQTx5Y1ujPKuwH3jc4Js1fGtG6WGFawA2wkAZpmhkwCvggTj",
  "key8": "3txMXFZZfmeuR1mFAgARdZavt1hfeHh49epqLWQTaPANAKwSu6SsExvtQ5U6Lx17L7o1mJ1FFuJXebPyceUb7Gkg",
  "key9": "31R3HtoT3hR8WBAbbG4phqLVBcJNvcs6aqGiGrLw7rtdgL7caWRkAy9NNnCQ7VmdgKBZnq2znpkKkDE15gJHA3vJ",
  "key10": "2ZS4XVSFfGNvSwtqaqWFVAs48MhjAkpUNZhJBDe1XTVpS3XtsEN8Pztq6pQALW3G29hygyRLRk9aiVxCootYCwZX",
  "key11": "5ycxeZsXWwFhkHmTPMgpT6DnR5ZMcgdc3d7hdVFLuBsE6Sjxop2os3EKtWXXrY2NviebnZtTgzq5n7rHxjYgaij3",
  "key12": "45TCAJCAteFmPAiJP6d91tTRnNuvToH4DJAzBhgHHaodhiEYSAfECwff9RmwpCpqz9PwtpomGB4XsQTcFBfyTTP6",
  "key13": "xYnkJksT8gWmxnrQH8Qm6DN1rPS3qgTVBpHtpQUFbd2Q25QU5LMMVRge8obCBePEJpsrYk4dSjCDhMeFXcp78ot",
  "key14": "x1Ymqo3yocNcSyya31xg99edRzuwcLjbbUrrvdmB1tsEqfkg3EMRwiaKrghspVYf37kVAHojw9S7u4kK7GnaWMi",
  "key15": "4WpTGeAhWdP8f2kU2PuwBDUvJJmMN7ESx1y8UXAMSQsSEY3AqE6oQvDR2imqzEQmDbaNgxBvgqS7rNYoUrrNeVqk",
  "key16": "2ZuhkbdgM8hgfzT6LFqgu2srRCd6fyg4y8zmp7VpBRH4sE9WhnprDeN5EqbyvMQpVhjmyqgVgswX5si7fFTa36yV",
  "key17": "4HXWcmAE55S18y3R3bGd1voPjVSAyBAyXxNPRfPPUhxYB4a3yJymCsxVbP6AygFxiukns54XjXKcNVDhDCu2YhjD",
  "key18": "4w7ZimSkz1KCWWEtL6UmE2fuE456ZD5CNgDT7JeM2v6FcueVntgfpzZHpjMnrjshgwwYqQecr5HX6jAoJTNM1am8",
  "key19": "49bvghEqqmLJHFFnQYkzxZE32mxcuHybqksiMyomNxARpT1Rh181RXwfqBujnaBpXzTfrjpGHxdApDVg8MYV2mpU",
  "key20": "sSCZGPtdPVFbSDYeYLCFmVyxPEMnArnxDcgZtXhxeUaXLM2V8zQbbZVtXrGNQegy9Fn2m1dFpvot3B5wiuRRDNj",
  "key21": "rCEp9Z63UDbPmQvd5B1EWBTu6pn5xmFp2DxmDHgF1B9HdegEshjZCcjUd3dgGoFmj1YK7Cuxro7GdC7Ypmmyc2G",
  "key22": "9YgVVTMyPxay1wf28Qv4sNPYCWd3qe2Kk7LqYedU7BUnvbDDJVncvJxFFf2NkeGn8GfuuN8g2xhqkoqdyczguRw",
  "key23": "3EFs612MxW2L3YbXcrofcRV9WYrupxceQEphsHAfsSGQp8a39CuJyG7vL4AQnnWn92fN45Xa9Td1N2Re1Q473c3n",
  "key24": "MvXVPekbeFE5EwkikpGhPQmqtmx2jpzg92RX4hPDngTtYotUisbuKunjQNxaGcxg9tAq4PoxouFe1JpTPTXzXhp",
  "key25": "3hhBPCbTAoaRzqjMdp8rd1w5kG4f4ZVX8E5Zrr4wqBSf8ARP4hVisxotuGxe8Q7BEWuw5L8WusjnDwRQXGtLVRWZ",
  "key26": "5bRaACv6Kfy2EYyhc1bo8n3VC1by8dbMnTwr7v5xsL2dYiAiPhcAxGBERUw4sYBiUbWzdvEtrMT2JXyrsPcbt8iE",
  "key27": "R28V8zrcdtVyc1quED7Rtt7iyDMVGni8mWPK6uvkp4LKGf2E9g6jjUaTv5qnPVX7z9WtYUWNVDtiiJ3QgotcZ4f",
  "key28": "3KkUmiKtmTwSZFkM3yRrE3uvxpp29LFhxQWVVL5XqaGsHM3hks7t9QuLV7ZEfuQ4i2pH7pZ6CNEKXdXwUSVGbC4M",
  "key29": "2qtEDjCRFGWs1qqMLgVKSEb1kvFu5RvfNuw6GcJQSvj6WyuAE4XbXRyVtUoQyJovGpZoUf1Dga89R5mEobseeuEW",
  "key30": "9NQwijwhFgcHzpoFv3rv8EygukLoBt5AYy3gTB7UwrD89NsH7CZvBB1LNQtgtoLiNiujSkyHYamCL8atcFdjWfc",
  "key31": "3rUoaD52MJjSj6oUTMgY5tKmhW9TZRe4mDmLpnYcHN6DxPTgdZp42zxfEjcfhJMZivBUH69ygBMmESwXykFcUbDc"
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
