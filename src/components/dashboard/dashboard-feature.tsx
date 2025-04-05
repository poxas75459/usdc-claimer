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
    "5FYGg7mx1vN4RFeuVQ8bEMZuJrNh8qRGXa21QC33cHjvQazK1Yt31JEh7EY33q6N7jnr8Hhyc6Tm8D6bqgv8Wz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xc3S3Vyhyrj1GAqDYbPCYogX2ryGap3Sc2aA5Js7QBwoGe1TQBx8iEXJ23QMaH5wmZTNAy49LbcXVFTKhR4XJeq",
  "key1": "5ZJtyNT9JBDHZycWqTT5tfXsR49GTkvWVFqYMb8PV1BxptDRsD7sZ7iQpzxK11dhUsQGYhNagT32ye2Mx2wEjJRo",
  "key2": "43MNVumtjZvCHkZMMFuEeEXhy3bUcNxRwtneme8f3xwKKAoNxouBVFmbjLCH5iLwzmt4nyDY4Kxfe5EzmuUK77ax",
  "key3": "2PAwPUn2B5hrbzXmeAFGZGeKBkDLDibnXK5mfRcvJcvXa7fTMC5UEoqRvmJLKP8WsHprQFu3wZV4NGTHSTKzzBy2",
  "key4": "4tPndMDZa2eQFyVgwinabYQhWP4KfdP62eFrASh4v4SphDp4s8bio57gpPVJGyfH22wwihZ1UDD4xbhLnUUgqkBH",
  "key5": "4tYpZSXjhbE9iEiGLVpsyRAXeuYeNQAPoACEokHaSpNSCut2BZFrMW6K7AWfxRZLmx6kcXnAViyVhKmNgPP3JvAN",
  "key6": "G84dgv3q8zdHB4SVQPby8LBb5mqnb21fPvbBy2QXwuuE1rDddaCcApxMpP6Mcjwv3N68DoiPvm5RQjz58pCW7UN",
  "key7": "49XDxyWVuNHZhJDCgn7UyHz7si1dmTUmK5aYKpDM3n8Yx28G97w21FWCoLPsJ3fpoVad4eaS6Yr4iw2kvSnxuDUJ",
  "key8": "3JcmNpBBDZCmsdZ95or3Ch63kHFEzy4p1A1zTTmJGwewC5RWvfMKdaVKAF7ceugLEBKMiaeJUnrobb8n9y1jmaa8",
  "key9": "56H1Nj6iEEH3yZfYoieLheDcfBJxTYx1R8LoZXqSJtakb77ovvo7ExZQkc1Em4uKuN4RQS1DSBE9eDj5roKQ76ws",
  "key10": "5v7LkhGNVXrX5w9cNFLmcP5Bbr5TTiD4FJMCUTccRTwq3phf7Q29Y1CJoYMXHBHDjNMVt9CCmxb3QmPWX3Yh1m1i",
  "key11": "dZKqtXtauZf6EuJofPD8o6e3yvLZfLwYGvfxvJ3vouYGkvuxjW4wqbD4BMLgE9qF2NgrdBJ2NHqisGSesvn1erv",
  "key12": "2veW55or2z3uQmPSkmj6csoBx2cxAQym6EeRNboFkGwEd4apV8kp7wBoRjHMUUUNRMPWPwzdYHmH8AjqB3SsdoWB",
  "key13": "3NxfV849kiZt9YDmifSchQ6ea1eTfzgwhAmsHLFVLiuRf236ChLrJxy8cz58LmdkrrmopGq3k2bs1LaVZFgRWZth",
  "key14": "5EKXtwJ4vakcN2Vo7gb4DiaR9CViMUZgZizB9YyevdAmMjMSxgF6Nh95MTQm9MzyqEgLXiSxibXuHo6MXs2vFpgb",
  "key15": "2YZgt57WKYE4RsHUHH9rayzxYy3K5tWKnBuxNwaXAQedTXRKQuTnsRjSye9ZEHYMMJbp9JFtjBUZPedHypFSfA5J",
  "key16": "3T8qaTYEKw3vNKtHJWWBQW8GTT3snBLuJ9631d7c9dyuBTtdNFAHR2JikYngxuue8uK6bDq3Y9od7eiGt6zPmN7e",
  "key17": "3obQhcTVFFFdfZuSHFmeWGWgpPaW78cEEg2YXec7nisSThDiyZrYWj6V2Wt3jDZsuvr3NLa2pZr78yLYigFuBHL9",
  "key18": "2CmsRJn77U5fmpbzT2tFk2AGeT9C9JVZsgQrKZgULEFc3qbLWZfDVqh3UGjoLyNB698dUGHUvhXneTtMXQt8wR8",
  "key19": "4va51K3LR3gspULtAFpojVrQmQEXeE8Kqu2g83ogSea5Cir5s16uE6D4BU2gd7YpsB5oL8cyntNWDvsLTatJnDBM",
  "key20": "5MQoZYndznLh2UoyKSM6qnaxfZ1PqheH4mRPCHe1ZCjXoJBSPSjoaL1e5QVBwxLdQf2pcgmAnkG875ihPQ3o57HS",
  "key21": "3Gq4DTji62ebjdw27m6NnDcrn8WMcnqFKAnvonaHWV3tBefmTFSoqPcUBoAfh55YvuL24nCLWGfrVgkcA6Guktog",
  "key22": "59FPUThL8DYqHRxXQzcjEFmdKREidKSQrVUVKFkYj1N9g3eVJrDYHjKW8SYT7Br7Jxpj7RTnNnmpjrBu1Lzgqbqn",
  "key23": "5puENZcrQ2tUHEK3w4XmV14UcDLB4n2nii3kHw7xr55YFirDNd8q6rRpVHodtTHzQ42Q8Byaq1v6qTZdZeQevyCb",
  "key24": "66FJ3NS7fb89zUSRegBDpDnmh2pz9iLqKk3N35CNmJgQoLdSBAwzXjy7szUEMkJzEEbn2VaU3CNNXCeJsLgtq4vg",
  "key25": "VWPh7rb84N62amfSacV9B5BwVG9KBcpktrsAYTMfqSVkQ2Az9tySSoLrTHz4xh4g5aXjJhcoZ5A8f4bZWb7qoeb",
  "key26": "4N6g9tvSQzdc46fLjvy1A9eN6Wp9z3pkJk8XBKyjQM53b5rf89KFmbb6AKbLDd4cEWJxX8GHNmZ1yKDqf1TtGUVn",
  "key27": "4aRtqsb1kYk4vSjAarWgNCjQVxHUzud8wk7Mx5HQW4fPzcoAe7DjpkyBac2pk8bXC8gFxtmRhkA1KQz5bDcXntig",
  "key28": "3jgQfk9MScmpWFtWFFDx6SzpZGkdMiyV3E5ydsD5U5gGNcka5P2ciNijFhief5EniePpogWfgER2W4pEZo49xfPs",
  "key29": "3ux8n8ftRrJJ9XuG4H2cpEvbGGEoJEKJ9SHwVz6J4fSHbpgomQnKiitnqmDmo9uks5DF94VLa2R3H28Vf3DbEu5t",
  "key30": "2wR2J3q41WdoZ2jM89mTrsCRamyZVyzhq7D1GqMKCJNvMguhsV9vHbn4haU4CPYfbcLEyxiGiPDpYLKZtzEVEQ1",
  "key31": "44wGT2ndeJ1n5U6QJ5LVJDLoaPHmcCYJYbP5L9syqRdXFjuKan5xpLK6HhDxYRRDkiuFm9MvxZABtvZMCBZ4qNw5",
  "key32": "5AzcRGQXdtSSandD1STU4kRn5kWg5AZ9h2x2vrjWzzwgZaZdZNjbQcLwgGyUFUrMuVEGJzLG9EeTPrZ33L86sBid",
  "key33": "3aC372q7oJxEML47951fEGrw7rZkfKWi4RWBVftK5xUGSLzKemj91ztfVkVntECHzhxTxy6m7aFgqPHoKwcWigkv",
  "key34": "5sA69TNicyHPqWLtNgmWsmUWmKwNFEghbv7YByJ5QR2FRW8R7gnBzH7TALVDt5zuHUjGjnKGBZGfCHuEhYWx9hUY",
  "key35": "j8g3bACtfRRXhGBfx8xoMN6hyYDiLQQrAH3qayE6Jmqtqv6jnbS11x3Fp23JMyESHbFN3wTvbDGFAYE1hTuH22i",
  "key36": "2VfL4z7LfjnnbpotgGw8CjU6Gspz8pvxQa8nA4NpynekHfzvto9E8mVkkGsWASXCLFZoTfcZLr11rs3xPHHFRCn",
  "key37": "66wtC8w1yvDbUjRD9cfTuzW9MQgEdXKoBxxLKjFgvUCkDjfPgwgzdhEr1Pjav41vucN3YKPCeBZgKHmEyADZk3mb",
  "key38": "2ok6SP4eDWpvNk9Jei62aw8ZPfgnmhTQytgKcGtHtjErgYjsyspKMDXGCBdrRFbunasCcx8zWcdJRtBJAfYWzGwL",
  "key39": "3jc7RmX1ePuFwqL2PwK26nZY3Dp8GQ3MqfY9id91Rc4h9dpMYR9fQhv5ADtmBKLYZPMeydFAJAWmEphTJuL8AhSe",
  "key40": "34BgnsVbL3cgm65iKHd2FaDDgNZoeBruAWuE9usVbFb6q9MvQybpbvcmp9GDyHzJPkJDPMGW4qbuGAZZ4Y7shB6B",
  "key41": "41T4rXG9kyAuSrGvgwjFLMwEajUr8uU5q37SeeSigL6SzV64UKx7RwdeZ1HSsoVfV3dbzVBJTvBrW4gS4PJd26gZ",
  "key42": "3yGL5m1APXuzRyVEH5545yAehhLrz4RmGfdHc6cxz7wWfCxVxnpg8SEYqfYLZQNSAxJgWGgdQPk3mFTiN558bDpy",
  "key43": "4DsSGBfRGv1zefkWRy6GPMTjeEHfu9xGSSUiibjRFxhu5sNspdRnPQEyeiBHhwQEcWyWLPvh1SaLMUAARRZbF9ie",
  "key44": "51nwGAcLmb3fvGGKqQjihMccrYaJUNaJizZ4uZjLJXvicZCF26YSNMsSo9dg5gNDvF4Jzka4Y15e7c8SKziQfRNV"
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
