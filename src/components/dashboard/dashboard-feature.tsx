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
    "4HvdiTnEyRiScAZ8uXeDeeihxDhjvogtffHZVVPztNrLVJsthvx5NxUDAk4g7Re72meLzrKrb9r7ifHskjbgeaRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KedMppu4rbJfQdfYMhqw4v3Vfeg7hRtDgjVACXnp9SH5zMQ1gFjaz1vwJNNCWnwF2jrUwqLhePQHbvmnX9VQmGs",
  "key1": "DbWxVeMydKLkhqTM7Pk71NTd6zwDBxAGjqPapU4J6WTaVCgk896doioVX7wqK9nE66p6sj9yqTydLg8sk2FVGQp",
  "key2": "3xjdDHPELStDt7kuumnNoQsW1wVe9jmrAkCeLCjxTLLbC8EW3RF4ywZKWkDXj8fM5BYryLvKEBdXttknv2bKebEP",
  "key3": "5AhfdFr4gWJ1J1oQ7G2iVhQsMbcE6G17HmFgDro41u7UxyUp71uuZVdbfsodSFVb1oZH5pLAEjjgHxkutgF1Dfne",
  "key4": "2ndrSeTAkWX7wg6nUozzsXpQfWvePyfuJcAWhNvLk9HgkahUk5nJ54tsmomX87xuqwzXdF7dueS6V4ZYqF8PaiGE",
  "key5": "634TN3oF1oK9WZiDA2qZcjF5eRdVEaVyZbSGoP4rV1ZRy2yUU1VDU6rxoRhbKP5H8B1ykixNQE1e8SswSWXSLRh7",
  "key6": "66geVBo9FFapbi93xT9jq8RJ1VRX1npyYEHC9nNw46DWH9KmAbBpAtUsawYd3P5tVB5RcuVKBGexe5LzBFYXDCqy",
  "key7": "36XBY3WLZ3fiJP5izA3WHXrnNTgbEAfbHbrhJHFaS33cCxhuxszWdq8iz5pzhcnU81gFHyySqB96WJWnsfT466s9",
  "key8": "2NxXRfubP1c7KHCb97iKQaaLxYcfD16UBsSfa6ocozU128wkSoNrTfqMQ3NfvJkxzNJmW8ojX1LmqWvo84NdwPNf",
  "key9": "72N5TjHr8CKYY5GvPm3t1ooCnj25gGVSEBE4goJqtUWoDiLyPp3wRRqMrc7QAnXTVj9BZY1KemZeGiERTfACXMA",
  "key10": "5cpi5WDPHr8cdU6yarVGVAGiBqaBcZCZMxjQor7LzEntnJKth7DQUseEBQXu9Juk4TLn6u3UsbXU8jpazPzGD4p5",
  "key11": "2sghEPR6wik6Mz985UYWxWTqcZ5TEYkGYQefUhfLUJZP4xBWqrv21kL5srUD2pq9WTLVCrKem1F41mWa6wJkeqfM",
  "key12": "2BHeSzmcjJpSiiaiLANFc1cM6Zk4rtEuXGu4yG3MudTpUbV3sHTKoTP7sSqYBbnNT3jMy5ZH2ALLvBidV2zaK5HD",
  "key13": "38QkrTA281dx983j7cbjhdVyWA4PLm6ZCpbrujMte2MpGfeqnDeNRUFz44QxM3ypk5k9i88YhFQa4giMuqDRDegQ",
  "key14": "2JBy6L3CJszdJ7t33U5ywrd3e9j57niCyHgjGrxHKzyxExTCyV3W8qgQEiQgCftPMoqREw1UdDRxMJE5R8d2Ur6f",
  "key15": "4udAsCZdkW9Kca8TbvnHzFPjuJKWw3wpDynpjvpNKpsBY9mbsQSdoKoi5tUhCs6zr8EcY6JRyrLHaeVWZyqRCtBA",
  "key16": "265UsYjm4MMV3mCvpN9NC7PxpDN1YZWSdayPzCb8aBZ8r6T3EHB5NjLuX3t9kXQRWKkCGwEFUdzmfrRJcx7AzvFg",
  "key17": "4yVgTtjSiN5RpaWJHsKiw317VoMxtQvqEC8jgWUfAFMsmYmn2QjJoSDqUZw3W3i1jNtPXCntGzp8skQYSwbrsR1k",
  "key18": "4jSrgnwQW5b8KFHX4QBWDtGbS7CgRuibNQTdpMHkum4g41rw2hnZiD5pLu7D5MVeqNKY9QZLxhjiYg4YPtMmTYMJ",
  "key19": "3DzE8RHMPkDTSyaVVgbiZ3XgT78RvRuWnmNFbDDGVhpBwt7AW747CoQ6MrYCVXjNFbiPaAMRqg9ZqTAsPKPaBwSD",
  "key20": "67rnE1bqDvyHEjSixJ2CQZw1gotxrRabnnXmRKH6QaV1UP5LxkM2Hk7Y5nPpNpKiWRJ4CCLb32EYCWhxVu9vXqDT",
  "key21": "pP4DjYzpDBeh8dBWACPygJj2prxvSis8Y7tv2PnhencheTsw1aBTfNp5NyCBGRi1XvnmJqAP39dWaoioEfxMasx",
  "key22": "1Wn3KtXvpU91kgmiuTWTosPcPHWxVbRTwo6FNuAGSiKLPj7x8Z74DtxrfDPi7wfFUEpVi7xs7NNpropg6rug8Ar",
  "key23": "3obWkpEvxr4k3KHXArSuvxevkSiLNcdbHxymKrEFx1y8TL8ohk7k58EyEjFMjvE1grdFkBt9Lv1zTt8dFVuWgogZ",
  "key24": "3Fgk5XjZ14cR2ZFHFs9HtecnHv4HuNnTTCCWxbDkv1VuZxnem1VdPF8DZqj7U23dKBgfy6guEAZvp8q92nPiosKv",
  "key25": "3nxenZCWXQP9Eta5Saj617QoBB3BPCpyU3DPKgnVHB4TFJyuxh1qWiRgTXSdFdd7BN3MJpNskda5xweKitQFaPYM",
  "key26": "4DPWFyVtDGkZQSVo515Hipcyqj3NLPCYJ1X9QXe9idreEzEvUXxqnRhcRE4ikgncXmw9uch1yPvtM1FFYaYdhW9L",
  "key27": "2U3hT58ANipwLWVz7kejGxeBHMbt4waDJfai2BMK1HhA1uWfJAgM7jN6HK3Ui1H1WFmq49uQE4NjBwKMA7JiBEfu",
  "key28": "65qgQuboLTKL2w51SPA4mCDSca734FR15NQZt4PjGkjXYyjoSiPvyHvB7VtfY8RjpwGWFvdFhuWALdGzB66qYvRz",
  "key29": "3X35Eu14fHNPBvacjA6yfLec2mkoWMYcpNoAXVkgTQCyU2AS6DeBPvQ8bEkYrAd2BfVCJvavf4xDsLokUcpHV8Ne",
  "key30": "5QN27UmHKTA1WUgFtcxUGAAxgTaHFqFye32YCrqx84bUmdW5BRrpF5CJ6yZpWUFPRDrYQXzAMPgxrm89XgTbWx4p"
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
