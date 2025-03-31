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
    "3QdEBgche7ro8UgtD9beKkaqD9RgdSHoF9FWChvQLKLcnMfkZwEgyTTpvEZsDaJrxYYC94h6CSE3WA9JzvZYb6Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tbk8aJiEBQCSCRiPTixVtKANegN2jABJvFWYE71GP8ieBNEXuhGbiASvHntmXq6oBbvkkM5pJiWDe8nSy8JbhGh",
  "key1": "3h8k1stiKVLfbQhvvuUEQyoCGpVgXH4q36D7VyMLanGAgyNF8QbNfNp8sVHKSFYrwkuu8rjVqRFnoSvVH6vKg4Kx",
  "key2": "4YMXQDNAiRsiLfyeUfSuzoYaHfWjvey6eyexEa271h3v19aRmh1oR4SBKrZShV2PsD3d5XnPZDQ5gYyim37V7Fh2",
  "key3": "24wMEkyvasBXCgbVE3xEwyHWfxLR1s6mS8MoSry3XBXzikZpChp1kMDo2CPbBEhqdW4THJqQ62Q5KT8eVPKsTwTX",
  "key4": "2ftQk7LG1VRag8csAdxQhrqrV6zkVH4qGi4KxmrtDwQvrYzpAhrvGJEixawV6RC9mpYnF34TKZoL7Jxr2mi1iqKw",
  "key5": "3yXsAsYFSiNFJt1qjzJhchQe4UQinSZrG5CoMMLWNrDmvymiSL5Xb8adBC1JMDJpQyW9TaTMSstvhXAbTD8SJNM",
  "key6": "8s3yWEgA43VQvrSqYMPxD73d4aEPvm6qb2isnM8M1jWEfPP5iTRbpcSrYJo9gukBA9B5ZxohWGkHZMU2DYPDf4y",
  "key7": "3xGHRAVYa5QoaJxTrJfT42K4EZXCWvitZcreDm4rPFF97kNrm5kAyWXGFfJBSZRyJxuP71PUTvMfQpFCu3QR59sQ",
  "key8": "2Vhjy6xuKXGBoQjET6H1XgrMg8vMFKDDJQaMMG1x4dmDXw9FKTGVCX3f2WpijZuQmZwFaubp2hC9oXZCesf26i7Q",
  "key9": "5Gqyo233xDBjdFbvW7poMMcUBuWzNYMaRMi6oEhstP62uwnUDqaHdBqvC7WF2KbNBqVQfX91gkoaY1N5hk6b2j9D",
  "key10": "4wRCQyPituatESJkdb6dqb3NLgfnpajbtdgU6yrwfEf31RXXTGwm6wjAj8dCL8yMvVxhHWTj6R2Z9wVhkhsrRjRf",
  "key11": "38a4q1GoxBUC4yiJ4s8TcJYwAJjVnWFasf9xK5Pi88xtKyT9AwXgmNf7fwfjuxYvqpberaTHfe7yBmuBWS7UzejG",
  "key12": "2rqznystWGxRKDHwBY7zNbCdDZ9ftyWWZVvQfnuEXfqNx9eA6msdBJjkJuHUrBDCDvW56PNvy4NiZBPe1P3vhz23",
  "key13": "Nxoc4KFpeQZPRjCT7e36h2phU7YTMFGyKYwtv397bTCdNkZK1aZZJuYTUJJSDqD9XhZHJr9sSvN2R5Jtbath6ur",
  "key14": "3KREgZAV5p1eFztCjFb5iVtivCszhiR1kRbotand3QzQvJadCPucbmAErF4TuW5DRYFALMZ8JZ4Z7b2MCzJzAutv",
  "key15": "2KuSZBf5AmMRRVJhCg4hu1h4mMyW5cMpQAfoJJTVkgSY3H9nhdykgaRHhwT9jfktLjpYyQE6Rkm7sTqD2jMTe3Ui",
  "key16": "U51iviSir6ea42fKmdmWzZfN5zccAhz9skq3Hot8eUXzdwzRSEBKCJCzLB99U1kS2eoG3ZyABCMYUMEEoKTJRYc",
  "key17": "2zx2RMPKD9bAd62eTowSUY15iemPxFeryQQaj5UpPMcL8v7Mx4NnTifoisKsMpANiAJpbgobTqmygsFF6MW7BR55",
  "key18": "3yUAJKa9CTmaeSBqVyQWnrv4gX4mV2JWBT9vu1kLiusbZRVUqEoo2RUKDPcVgns6qkeQiHEH4QgDHvTGTpMoE48h",
  "key19": "5BMGJms3P4nmmPF1DRCiQ6CK7HS4FFgq9ttowZbedMUgo2nrtLCKAUcmuhjDjfqXSFrEhq2fyPSW3ryjXjbPyrFZ",
  "key20": "2UskqMhjShdsXvuoUrXMweJeg689fUqArXQGocv1tN1WqpQnZfymQdJXSgnLKwzXbwUZKSKRtdyu62vJW6BHeKwH",
  "key21": "2j3ucEUNYyfzsDWNTfCYq4PUDrNTz4Wa96rY6sHVPBaHVMAGw2eq8uZJmk12Hv4vc9RC7ATcXD8CeWJcWShE7Bn3",
  "key22": "2BUQtzCvPeFZPJYH7szFNGgt74N5xvZ9mS1iqh6jk9JGnMNFs5Ptj8hC7NPZrXKA6Dg6HSuDhxhYRa9wYzSi2gCi",
  "key23": "CfNnzqzoQ9horBp16LjjGP6vF7pcbePoTfY3ZPht6Zi2ydSH54bvzZwWQeFbBvEfkBQrMiygMZxwd12o2tCPHH8",
  "key24": "2R9yesnNEfJnuCMcPgieNHsfK93LcDtW7v7VmZkPQRgD14ETYCkcRKGifoniTYQCpC5CDzhPwURB1xaF2gBwLtXx",
  "key25": "8D4EpcuuCMALfqegdRKFEfyfY6nfijPwQsoqbPwrMnaXgzgdA2juYvtguJdTtRfbeKs4LFKfRnq9PBoyVs8TBvg",
  "key26": "5Ag8KJp5m8JYmT3Jia51V1DgDTUAG9p33MregLvUJF8AydTzjSybkxKHJLWfpvf2BfFp7sLhWCkgYi8zNreqh1e8",
  "key27": "5ZMUv732bfio12FSJs4mZ7UxuFYkPkSYhmdkJ5aM5uBTNzNw8PaRfMgUAtm4d82156qo6g9jtGoHhvqttQPcqutz",
  "key28": "3x2jSTq5MfaNgUpfXeENhk4Vh5C8pNCMNMi5ovAiBB5kfrcRZR1PFyUtgegqCP2VBCnSVLkFQ9e3LCQsf6SqXVQ4",
  "key29": "P5jr2XPJ2nfdLSSbzkM3EcLguyWeJX9v3m9MFJ5gM1VfFbLn7beRojoKbe4T27kektWKo9vRt7cdTAfnWhqqSBR",
  "key30": "5WUk61tAHfuZ7gEmW7vFxzE2GzXjuRxmj1jiY7mJB2t9NmMu56vxAutWvpFJ5ubxqXk2pLZd4FqPNDzoy41qqsPj",
  "key31": "5yiEqZ9d9WR6QXnY3FoDpht4KSfUnV2rBDC7YiNwPkijWtAZZxChWNoREVvypBHaQHAhoAje6vt2ACckysPoPanJ",
  "key32": "32eo5WigPWAai2UhayAtgrQ5K4CxghQnMHRQUKQyyD887XEoFnkTDtiQEtrJ7vv6tJrshF1xheDwmPNunjgx9vpX",
  "key33": "5EerkUmLMmWsUaCXLKLqJWWaoWHQmvFe4jXVtLpJHt6deuVx15A7DWttVCCihH141TJ6Uphjxr8iQavG8AZ3vE7s",
  "key34": "5jBiDBkLvGjvEDD9FNhHW9o4cNvmUAWNJ51NZQrTGNxqgk2SKaTk72zSS4URj2szgYkRGTZvSQVRMUsrsmRskHoV"
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
