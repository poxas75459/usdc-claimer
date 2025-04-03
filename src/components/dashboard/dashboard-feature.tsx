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
    "64VPxhgkCXkEwwQeiLnCuZW9kk96vCDuwNCQDLJp6kL6qpokUQ7RKpZJkKszpTmqjp5gkuG9NQyPK3KxoJT1Fy9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SiNFokEbVuh4Vt3iJnMxyT4zXrgqZhTPjqK68CRn53yuN7A2KqkU6XoEt9KbLuaUCF9KLMsSB3N6Vqk8UXT1bJV",
  "key1": "yxH4e6vmrCVJRGKqJLCzVq7fnJ9nDpqNwX4kxhdHnp6BAfkkaR5BA2Fk7hXozHbPstHS8kvqef4fTAJzLb3c49Q",
  "key2": "3ifEVNEW4bW7CfKHNumRtkw3wcQb3NFEsFBAxDDKcA6o6Aof8vGVvbnrdtuP5vUetp4VzQadNsPJHAE4fDjHMqXd",
  "key3": "5AkZoHz7nSSHYbAc9r3xnPDkb15GFjFDGpjxNHrtNvUeU4ptu9ErbumcdTsCusnkWYjVxBiRZv2DRTRjEX6czaHV",
  "key4": "4XJfbRDcf4fcZiNdXHrPedM7pNgoWYvLJE3mGbhr4hBfcuWrqXwpQUotP2G3LhMVf18MPMbDYPdfFp5FtMrHSwc4",
  "key5": "2k9yy3HG1UbAfLwWMSbKMQ6X1vvvJKYQKQAi9GoGAFbdwpQ7JLcJS9YySyppGnBMGkEWRjFjbajDw14PGWmhwwxS",
  "key6": "2GH8XN2mpiCUfnE6hcbrgXBkGK6KPXjEESCakddXm8Bxoq9oxftW6KrtVjpoEg4PGDiX5rMTzvokxyEcEUCFCoPq",
  "key7": "bsssr2vFc32WRaYuEpMw4VBckBXwy2MFNrMcXiELNtkBRWKwZmFAfwPv6R8qCBcRdEBypDupFwRXhXrLDicfaDc",
  "key8": "4VnDjdXSXXLQjMUqm7fTXQWZDab4Saq8mRBAafBWj8wQe2PXFgDnjYwJ4q3vvud2EpgYGpaFJCGUibHJDSV6CCCn",
  "key9": "2VmxJQ7igUPByWEHSaE7U8JhUoGW61DHNnCmQMkkmik2jAERTZcHhM8Yqrqdgpb7UsCewQpr5mzaVVY8JhAbBTp2",
  "key10": "3TTRndJuxUUwQc6bNaCmoEUwZ694oNn8gGDQLYhDjvCKpHjvby7Te5wM4KHi7tHYDsFEUitp1JepEAWgjT2feix2",
  "key11": "6CL2h2z8eX17YyuzW8vXosekENJ5BPBcpDwW3Kw6NPmPbB8QnrJaudF8AgpZR4TgjvnUd8bZoecHQiPX87RBM4b",
  "key12": "5hfK81n57jRRQSN3NmwbAhsotrHB7ycHnbuSzhUghLWS3vj1zCMLAgHc3fUobKcb4YUMVJsyz4jtuMwsgtdicD6P",
  "key13": "4RrtycnbMexsSFs7VSg6Hv9m4WKQs1W81br4voAuHPMunyePHEmPTbobmasGF84GJMHyXoQLikuwBLpt8apUamzc",
  "key14": "aGbwuxyGgDQq9Mf6y5AUPzCABzYhAkE3CsvbdEaTti1opWkJZ8WKCAjNXLeRSM2si2Jx19C6KMNK8s5QMoM6pZw",
  "key15": "2WoabhRo9ZYEPfXmDkAQf3d9Ehs4G8T2zH9NeaUfyoVNwJGVbVujD2rT8dKwuWfguCZ7GsMxSB5MAKEJv1HKcFce",
  "key16": "rn2Gac68QZNBU5wReKMXyRop46yBu6b3NzpdanH9tg5gqBzf2nxvGcHQL1MEqmFDQx5sihTtGzSJq8T4vfKWHAP",
  "key17": "2BzP2r4QaZS2dzuupvFxHC44bN6XVREdZ6qSfSECYMAgPPMArZhhihPbqbogrAUjXjPAiXaBa8g2HZCej9gcdvxL",
  "key18": "6W459F1bw3BoKFdEDmeVPfae3KotaoDNVAFa9phXGGdesfwmW6RzqYtszZ7apGuydLiP6eKHDDPrjdZ8X8qxtVW",
  "key19": "67VPWa1vFNwbhCRLwmcLbtjiMSHB5CGzXydLkRCV98zsumJQ9n7uF2PBNUN3xCAceRoBAkktwALjtW1eqmAA7j2V",
  "key20": "4fcR9MKFvwubBV3f3maYTjcoYs917pJgcifkB438cnyNuoikYtYLNsErsC8WzB5LiQ9151vbUDFy8KeCxYP2M52R",
  "key21": "2JUkGXoqfm8SboXwToZZzYrzV2V1fhoFRUGeAmrb8Acw3gaJZqe6CDU3BJQ37qFbfDs5heZKcUqjSNABPkr6avca",
  "key22": "5unAUnrKK7fJJrDYGazekPqSxMZeCenzZtVd66145snFcehXAfdevio9dNJf9GJVh13WimkaKTxXbeeGFje8GGNc",
  "key23": "3Zd2r9XqHVFCUBKkS12eMUERXkopD3sUoYGnJ7WSLJSozPuKSLoz6fSfAo1YMJf23W1yEgzNGdifCWX7A5c9B3rS",
  "key24": "5Y8YLLEm3btP1wcjb1zeC5UwFnVgqc7wXWrpAEmsF6UwdYf1c5aMJD9SqasuLfwZqRbHXGiS8MjvUgAEuF68afAM"
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
