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
    "rs1xQiup6H1zqLcNuQ7C4jRn8qQnR9j5TmALWNiYKBVfkfjHM9vAjnMuTHFE5ZVTKvRZb5WrwUvg1t4WUryrp4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Y1YTgu2ZGJwmKyq5Nod8TUBRdZfi5gRSGC2itv1HCtN7waG8LDbyV5KU4yuD9WJy9sH8K3Hx7AUmUHscEA1mSF",
  "key1": "4yCNA4FQ5nZv6L6aCZMCBufcj4hQcUSY7xL7thJR5fEX9CSMEzPjKsyT6FvtxyppytgRtQS2tbNH3FbMCrnZRndp",
  "key2": "4niZnY3CqL9XrkjcLncX3obnw9qebngogvQYembW7aHyi85kQMfyrEUrtZVcZuPh4MPANDDDai3u2g2QVZ7wagqm",
  "key3": "8vAjwY4Gyn7ULciESUcjTKJFGdeR2EAVfzdWQT4Uj5QC4TfdzVsMEoDAUyBxyvdMgkHZaCi7fK8YSyjRsXkQR6R",
  "key4": "4GUCaWhtgreHdzY3PfjoqMDHjRCLsED72BAHJ9nUGMkeikQvdPeYZSP6GMUcv2R73rXdJQSgnVPDcaD33Zfgj3gi",
  "key5": "UmeYfSwagkB12WCRrTQYuS6hoHEW6PWG4frUS7Fr9aDCtZVnMQ7bZtmuMX6bmqvoiGLTtawkJr2eZHvW9ekfe5j",
  "key6": "2R7XZiUGpXpNyHJtW7wZPUz8KQskuQtgjFaWHdF8LBUPDPLrDs8QziQC3w9RB3RcgxmCBpMw9YnxvdaXY5Si7Jg6",
  "key7": "2EuJGozaCXbiejz8nQN7SijLhD8V14ksxdX7BTDL5rBW2iben3jcpuYDXwSppcWdKTbQcUYAdJ8ajUGd7NfdYuLx",
  "key8": "2Qoze2JJ7V6b6mRocB3eHr8zGSZcHgaBGfCzvESRvb6qan1tym7qtESzvarik8TBn2s4G3JuFWCUvWNvgKrwesNZ",
  "key9": "4qExnRJwZT96Xv5Ftu7RvhVc3zqz9bEMkZabaMUhFBnhdV9WrA2aGB2dFZtYJ7LrrrMt47SrLmSo3Vi48y8iVNcA",
  "key10": "51FZVBpxxoC24CuHvnfu4BuX6rVrppy28sxTUz3D616RGqwP819n1BnWHKMVZjc7qsXtdupNorxocADZLV4yjBb9",
  "key11": "QtbiFxyKUPAfTRh3W3L3bx1Q6PeTSG2o4vq7jNJhPHEXsf8zVT6k2iFeZ8GT76Wfg9YyfrGtqXVPQdVEYjZfNZC",
  "key12": "53YR5QTN8yiVvkcLiLciwkpc7b7Es9JJg657BA6fDvUWuwCa5SVgkaxJprriAzxAWFSfiZ2Avejbf3KYo6ZWDtGq",
  "key13": "27563ftbPChGUwEu5guyNBpeTwHDdMnyPhB1vY5HzqSv1gjb13vzyWcbr8s2vHDoD4GD24WjCc7gvyNF6hZJxkb8",
  "key14": "4iZBdbWhUrpPndm6jidD9TNZqRh7Uu7iTn7WZ9amanmiRhN5CWXWd1divb1NHQgEmpXFF62ptrB3hosCD2S7Ncx3",
  "key15": "5s2KPKRK9GPXoJE3iYF7fMYzWdhEMHizdYPV29eP4cqvT3HmvjNZNW8kwMEwh8Lh6XjbHfMwsd6EP49cQJkjasXU",
  "key16": "zDgVQFY8rwUneZBro5vYRSAxshqxch3QwbtxeB69ckk94zT2avsRnQpuAxbx4Fe8pmfeywr96KLHw6RQ4H836wV",
  "key17": "41BC52owQDKz9ZeLakQ2E9oj5KpGpBKkXDW9e5W8fvMjjCtHyiZcX5Dc1vqY8n4t5Tz9uGHpCPVwyLUCvSB54LAn",
  "key18": "3viZT13khrFfFSege5RvuYKbCGfXWwhpuKiBYThAyT4WMN9AheqaX8xUBTZKB1SEYU5ffPX6z7dHJ6drnir2CtKq",
  "key19": "2yq1hbyL6PcQjgRmuLvUawM3yUyfKNiR9ARYQJTwfDMbv76iGFrJS4MH4AkJU2rc5XhiZ6sHXgCV6jxyqHj9BFna",
  "key20": "3mq5JqHxozMLSRLWQvMnH4fWoSAbBFDNtez5zxJEM3DrjvhEvfcL7xfKkYTNxdnvD28J8stkPqHgQPXnU2BUQxLE",
  "key21": "4FVqASysLkEneoyAVPyCxnTY2ZSdVkrVMYDwz2zwMrExguecxf3LLmLDRskV58Pdux5WHZdZ1jChVeoo2DViGr7y",
  "key22": "26z6FUSwv119pzt36UksLvrGURRXQdVHFEnBjPFS5ZU2kinNPUKjvb4zKxJX78K1hBJ1q22D6Z5jHExudDBUDp6p",
  "key23": "4jVZMpRDzGqMpTrtfeqqkuc5EySMBkDtFZcCZZmYhPvTVkTZYHAxWSAmUwwvpSauLdFETF81uSgXcncBC265QedU",
  "key24": "2cafabuxHZDiakdywt1BwL2zy9vGUA9SKEhJ9QSp5w3ZeYJVRFiLZvvxgYAMNt8C8NfhwdFhD8ea3GhydLvtUbo9",
  "key25": "4aCHBQLRHSg5CJ1sBcHn4ntXeeSVsVQfgSDUcbgoCZpWEm65FQ54CXVc3WA1Ger7fz55y194YMpW1WSXjk59Hm9a",
  "key26": "537keUKq63N3ry9GByemB73yjvBoyK8wPz5fqzswSs6MMUn5NXiPyg8o8mUF9sjgMfyD3372g1T6kXMtSonUdoeY",
  "key27": "46t88TPc6ebQvrbWjL3v1Szw8qkZTGK44rd9CdLmd5iQTXN1zu1SML9NvN7cMQ56wiQeFrQo3RLdp5dAxFUnYE15",
  "key28": "v4LNpQPfjzP45xcijLvCtfpVWaQQhCRpt453t31oGVriw72aRH9wDHpc6a7WSxxKTi2WyU2CKqr8QmhTafqwTT1",
  "key29": "2QGbms6jxEgpXj2cFpcgx5LHkZpgYanaKBpJuf2R3aQqDK6GuKpCwBSsEBESzwcZaSNv245tgqQ6T3qnsgLv1HUN",
  "key30": "2B4HgzGrrPRHwfwRhwyTvfY2hc1n9zmFynoQurbcdSYvEWAGJGJJu33y46aQKJ2AK7KDwWddBDFCf4RDrhgnzcmZ",
  "key31": "5pLgrbSdBp4auggUATC1qZiVUr5VVmLgZMD55x1pL7ghHEXrcjtXyGBvdxW5qgpx7cUgDrYVD6FfYin5v8Zqk7MH"
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
