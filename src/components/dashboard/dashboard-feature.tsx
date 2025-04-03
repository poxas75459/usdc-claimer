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
    "3orve3zuMR7XdajQFkwsm68qcJoybRTSUJ6VcXrXp7jfxDgmuxVPqtrqMpRdmbXpLDzYPUDGEJzFBUsL7sJmnucL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXvw4dES5y9D49YDtASao5nMxhWGeL9KMStThMwBMBeEqtWf3sPmDu983KQfXsRWdixbVW9xjPcTaHWzE9XHzkm",
  "key1": "2WLwqS9zWnm79XY1Sz3Mc8kwExVKVcyAUnFs6DzpfB1uXB6MmPaWHy32GY5msPkhdMaRNZ6dNBgkBs8t5zdUxo4w",
  "key2": "4TGzRKRPiNZ1R3Xs6cnhfp1Xhsx9UfnFKJZzyPiRBotvLivBz2cJvfFgsRZnNSU3MFRtsXv5qqRpwSUxE5JjTGkQ",
  "key3": "3GutpvnvMdxutzx9q1WmxMnhkAjbueGYVnMwu2Ve7M6RNbij8zLizJfkTq1hwn4mf4oi8CT2ivLr87jg5umrxxoR",
  "key4": "5exuFhrv97ivw9ycTqrZu29DQWkA2dZGQN6YAYH2C6nYwNr7vUH5iKYKJqD4ZELfEcFpuEEH4NCnyZxoieHswdTW",
  "key5": "3e7t7u5nAtwC7togQZgN4U6UYubNnGYT82PxoWWKR1L8qo1SK1PX84oEGBB9epjTqjQZQ4Hr1PnYiinywgGrbDrY",
  "key6": "2Pp6EBayMye5UTpWwFbmWhpjVi7uRMd6g8muiPabXD2xHeLYNwADhzCzwShWdcQLj55bSZuRuKcFJsoVFFjxy9H3",
  "key7": "1gA3mgin8W1FqVGEbu4vPzA2RXRjf33za6iSgq768ysWw77BGQmXghdSAp9XUfAf7VCrBUP9BAtRbGPQQ7axiKm",
  "key8": "4guLiJ1zkEAJe2PDH5zxKmouoAjBGmU3x2TcxhzGNj7ZyFFwAvbRPrUaVvFeCXjyqwkNShY4TzNPEavnwuHawXtQ",
  "key9": "4HBKScNeabbz9ZoPYPSvKhG1WrPu6zawZXyJBFXUHksawkYEsezFos2qRRy6jGTrCoREm48n8L67Eb5NobFae59n",
  "key10": "3DETmaGZ7otZppv2kLf3vZpeMyaE413mq6AcCFAjaPbPWFvvNpkVnyyZd18p7eBoij3Ki1aYi8SZvHTuCZUmWqmg",
  "key11": "4AvZskLTzfG8DtzneR7juwPp6EVj6r8gbkf1VqnuBbUf452E13cEN3cTpvc8PMEGUUGTn355bz5mK63PeAkrpN4u",
  "key12": "5MunKpSfnBQtJapjVqRjHeXauonesEJxkLwuotAMxwmFpFaqy76ixXrhHUKUoZRmjHvhzB26ZF4QQqdX5C5fvT2X",
  "key13": "4hyamahbXP4DgtLNSZzHWNHj7RoEA3DXSCM4fDGCtc2a4PLPJpgFor7T2jsqrHD6htAhainYUMpLJtkyggGifEg9",
  "key14": "2ZySWSTaG4Mufa32hi25cSJnNpacc3vsCYBfSeMc3YEou8Q5AbThjxW8tWfpHkJ5S2PB6eSTqKtWaq9H2qi391rr",
  "key15": "632gq7PESeF17Wm3TESQDyW8rcEfLTJkxZ92a9GAhFcf5vLKeVCBPYFX8BwvmPPcDkDD9scWsCUUmPQas7wzNHRn",
  "key16": "2NxG3viqFTTmxBYqA915bfQNjq5uCEegyDnM2w1cmxw7khZqhg7FaqQBhrFuCMhgZrF7Re3dd5TRieMvaUzng6gW",
  "key17": "4qWsWoAbSb2DtYbQoQ1K4LTxUBiYSvH2AvoqGEaZShQEEFRzJXf3G6vfkfXrCqVNPCyUieWQcEkJnnG6G5Puj1w4",
  "key18": "2cPnCbbAwFKwBeG2dXhBUku9V78hJVkev9qVccdq7dpLHViKCNcvy6p5uodTAezE1Uv3YdLwZsApjrUnrye2GiKn",
  "key19": "4CS2mXAYRsx28gS3Hn7iyxMwi5AwPBxqF9WQ3ecyDN6LZXfhHGaxh7CHULpxAXRWJZh8GtJN863g84vDJC9KQN3Z",
  "key20": "2f9t2LicjbdA6TPJaEFNVG5AG7SWWTPiP7aeQ6VcCtyczM8ay7kpbKiNFLobR4XbWWxXXNU8Svkz27mgkiwjNQ68",
  "key21": "4rKoaiEdPxgqaTfqXnnKr8reBgJuyFaotWLFWDGbVSw9sF2SNUUQ5uikoFjnzNmDBoDZtZf7fUbtm13kLJkRk8e1",
  "key22": "34oRyqmRMF8vsMRCbtg1aZwr11pfsvkSneRSB3M8EQMAe8JWftcp57DH9ztHchRYtvfMJewWtSZ96uyASuwFAMnz",
  "key23": "2MT3BxLFTieTX9YriDmhmQfYC9Qvzoi8b9r2qMkBvt6R7zbqw6omKGmUM7CKPawc563TVRmW3LJxPwF9ja5kYEKg",
  "key24": "3RP7tUMyF3EZ2xYf8huf3MRRtuv5FH7wUu8xJF1XJbMwSnqVqvRuaAVjc4Qwi6WRw4VxtTZwfrZdc3JUv21XqsUu",
  "key25": "3VvM3rguCeCLJCthAopCDHzomNLuTkVVZFd3e4DXH6rCB2nY8WzGpcpynGJepQnw7FDbtJNfsQZmbP6WGvtPhaan",
  "key26": "2wLiBhxyMR5zw2dfR8YiqkHChGVSAkM5vo1UUSTAsfKFW9oH33M68EEqPfwqiejkyC7Sdi1HZMFZZokPr6NcdreK",
  "key27": "4xGANCCCtc7b3U5EnYCmkbWKBsBxnXFFPtGx4KNnFAgS7PgtXpn8ZPAAY2EwzFyDbnuixgyV1mcLe5hGRagzKnaZ",
  "key28": "54nvmrhvee51M7zygE9WsmZCES8Mh4qHmTU6AmvVy8Cn496jHdw4hY7iyMJg5TRGoFiutfEQ335NbQ8kiSRGUpfW",
  "key29": "6VSSwGoXLLrpoXj9K47NeusxcKAatU3j49MiFtrXpJ9M2cYGYQdP4Eo2kYmu4QpHUCSAL4ormqhEFqRw2V4oKDK"
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
