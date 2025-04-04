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
    "iqZgtMQ722TNXDwWzTHbzMxvCDCubmo8spoCjkimzbgWgYPayybSkzK2LBSH9U3Ak3fCqErSed1w7dKr139Y8wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgAvZN9cq9G8WRrsXaipPiKbwCjGb32e8pU3fizDQXcnWCemZxXaxwtR54oFVoaBu9fNB9T1UemwbG9hRPb1Pit",
  "key1": "3EpBLfZebwAqxEhZBZqEiYuvyFnJfi6PA5JKdM3iv6fcEXL8THtoLsHHdpuzS9QizuYx2uyCh9EV6tTPaKKRViPo",
  "key2": "5yEPdyBMCCSjUjezUfSPFidvi8LWss3QAPnV4iGj1oby7HW3iTDgq5tRS8DcB21N6v8gJ4rTJocqhz9JHZQTnsNx",
  "key3": "2oPY8Bc1KgusRbP8Lcj9RMqEFEV888WYTEywkPXbrkqwqtWFSRHhGH8bBMdSdmEHKtH1m54S8BMKFGSLYnqMyNRK",
  "key4": "3BRTdkZT65QdBfatMVneP1MrjuggzH3xnkaye4NTtFDymnJRBjqyuKy9K9Geo4obkwx6G1idjUr4kBM9RqBb5MA4",
  "key5": "39iPXKKn1W8TFs81jawWWpckkHzMbuuyUyLKTG1oRbq2xdwtZ1GjTmFFGbPL13w3VH7GvtMzJcKC3ouqYss5cvX7",
  "key6": "4qT6nwKUED31cpg4Hu9o8vndtMYFmDYU4nCefc6UVzg4S6Nfazzy2Gw1hbBpQBhCXTsxLhpuCoegbKWJ2ANordqJ",
  "key7": "5ifYeMYYziYXVkDQViVhEUDeERRt1iGtcjPLaFmsS4383Ybe6Y9LKrdzG8TbcyqokDq19E1x4GfYyZj4XUe1mog2",
  "key8": "5cagHQ7nRu49Djy5gK5WZDmmPaQwE7TwiybVJtYRvdYyoQW2wvumR8ruTeyzTJFx7LWKcBRGX3bbAMZ4wfVbhtqZ",
  "key9": "zYGeRcM9ApXHA9grntvuXQqzzto8eizQ2FuKuzwbzmUgLxvjupynCefpfCJVZ7xS5NsMwPoHcCX1Pjtss4THySE",
  "key10": "4Vy4jvEjx4QuayjKFxKDquYWafs3fext6s3UZXsgGGF6c8bDT5FPEenArbRW13MkEdB5sRKRn3KzRqyM1yYbLxoa",
  "key11": "4BiUHCSBv3N44uRvmXPACpgLqd2rLtB9DXGQShs7BaX1AsdETdrqaeSZFs9DTg2dksUkPXn2xPNrXStZWJ8Pcg3k",
  "key12": "35jAzvQx3DmXzddSEzi4jMnXgcdWpFMwXWZU5ptEw5XYm3FffhmfxrfYSCkQVTGhYz65nRVqgaNnrtLPoWdfUhuy",
  "key13": "4PR9dpRiJTFP5HhVSKRiihyPw783zumKx6Sj5fyRUJztj5Cy1FwtyYNv59f3HXv9kZPA6psW2qbj2NyuWNFD8WVr",
  "key14": "qe4iw1QaytjvaMSei29z1rz1tBXtsmh42ZfVB3DmjcT1g6VcjqDfbhtPJ16AnMkqZxvrqoYReNVJhFMj1EK9Mes",
  "key15": "si2zqjZxK579eFczigoyay8pCNDaV8DM3ntCHMMfftEWEgessYBBxaCfJwvMkTLyYwugs3CL6DdrDUE8DSmnnEQ",
  "key16": "2VtWYJNsVJJsWcoTF2Re8oWKF7UeqeiZtZW2U5C9FSeYcNUy16mHfBu5vzc4wNJiERcXajuYYjnkrnSgm6e31YUv",
  "key17": "3GJTL1NLVb3J5yXjpCqKc5YfGeekM5uY2xsDgntdHXfiSYRA4EgeZM2y3YrUVTqMSHPqSPcECw6bRfTDDMDWrFdJ",
  "key18": "4ryyoncsGp7jq3RUYWA5ShrX5np83LV8KfXkmCpejkGN8B9TzkBk4NezBcsY53R7s2j3DNLey6piUqB2pAj2jbE",
  "key19": "5sVhuFyr7g4nSFpiY7EXZSeLCVLXM72MKdzkgKv74jcJgpGnhVSBV3QthfGrhbTJ8jaiLuBC4KNnuRBQ2WVHhBn4",
  "key20": "5FdpCrwkkuLakkFtvAEBZFdYgkUBziCL4srsmdADueosrv9KWtzipHn3sh8fT1bT3rJKhT4zU9NvUDvRXD23x7R8",
  "key21": "jBnoaouSUVzG7F9j8a16GN3mhfRx78FKqdQcptoK7ozvnWAqNF7HBG84u2uUFraWHyFBwv8GNbmbCUjLjYodqNK",
  "key22": "47NYh34h7cEpTgv5bLEwzRoxaoLvEno1JXrYuTRC4AkaPeUgTfBxPdqgn63hk89zz2e7RKm6CBX4m9Xb8HQYgpaZ",
  "key23": "2fBEbnnvvNpfjFwVrrb6EDAp34oP4CetzrXUNVCiGVZa7tFL1Auk4Zw8DY3rLbgoMe6pPaen3DJUHbHjLhDML8bf",
  "key24": "3YQb7AD6roU1p6p7G4pw9KAE9b4oNnqx32iPW1nPMuRH1YQ37iuu2MSMDJwbbPp6Yhzdo2ABcjA4uU1iQbHZntCX",
  "key25": "5v3gG6tvK1hFVHQi3BZ5H4r7YSNcWjyCaT7LxLAqUUFgg5YJDoZdZpsaR8KcCnQs4feYUJ9UVPz8jeNrZ8oFkHzt",
  "key26": "4jmtxUJERCsxH1zwAs5gXJMLcLceq3wP3M6tV9jegWLus2rXaTJFHXaMcshH5qVKDo6j4acSxeqTwGu2JgX1sv5U",
  "key27": "4hxfU46RXoTrn7zwKkXpAfwYvzoYVBbgYEXW8bofWg1rSwR3y596CsWTr4YBxDV8akGxD1TzU5ENF6wY7xzXyyvU",
  "key28": "QFH1jYzoBTVRTZmqbmaP1ZWU7Pdq9zFfiAc8F1VQnvZpe2zDW1adroxjiBKZ5aYXmBWLS44y1QwJb3qzHwtoSu8",
  "key29": "3xnZDnLs7X9VWkDnAEjwioyYYFqScmeCQ1fXw6JbBQw7VViLiq4mxk15NtpLVEaTGDw8oV4Mk2ai3VvbEhAubqkh",
  "key30": "4YxRPHbUNMmJJE7hbdpwNaB5ZDFfuA5nFuo5sHSBbH5YKu32oKM9enE1U9cGAHzk868K5wGJymmeUKt2z83oFmiK",
  "key31": "5Gm2GTE5NMqAnUNz6prjeLeovP28DWQQrpwxgBaUg6Mbz1CDy9bHDaovJgkqNXGMwQikPVLa8oFJPvaeB4oCkbd"
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
