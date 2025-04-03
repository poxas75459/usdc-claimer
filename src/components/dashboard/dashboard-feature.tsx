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
    "jY94hpoC2y4eR5KYscq3HD9L5gHiY85RmhwSYEDobaM4KX2HH7d5b5PS8oBdTeowFmMUjE75WfcC6Qzny9So6FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GV56yE3gU1EKDPDxuERZTKpU6GRzwsoQgxBh6SY9vsibTMTn798NAHaLoi2rrJnjMaZXivA1XzcwvsnaDhQQ3Zq",
  "key1": "EwSewmSiYHZgGMUrAhLUtcKpMtsLhzPgjRkCAFL7NGpemL9HoTk7FsZgtH94asA7b2gfH9AmmnqPwyHgwcuyRpA",
  "key2": "aCsifxVknALnxcRXzZG392juHvzQyoR7rmX9egTmq3v7MATVTHZAm14v8QqgHJomudDC2pDg49NeMsXUR6v1K5G",
  "key3": "2zgBqUzNARF56mA3gGKBD2kUDLV3U4GLupe21zHjwGv5VAbfhfUVKsqfPWNJVKTsADEmUkYV3JvndfHS8WAWAaJV",
  "key4": "4Zojd8HFUU2UPJo4vUh5T8YpFrF3vMUemV78Cc4GvEBo23LHPh137DZQ9jAmPGKLdYYCQEh5ACx7xDDtWyYcnbho",
  "key5": "cq24JHP4R941iDtYUgnSEqJm65MRZyKSoBb8CkdJzQ3QGjDuivLzszMGUB751E62uxgboQY36LKAWsAXYwuz7Y1",
  "key6": "2ePt5B9Mi7yw6WN1J6h6a3TwWTt4HgmYzUrCLSCGGPBxeb2DmTRh8phEWLdSaaNh82p91CucxoZCVHEdz9tsvPRH",
  "key7": "5MFFFPcv6iSt52tTiNsqq696Y16H8J7nP3vc2dKtM29GnQsvF5WLpzSA93TMNLvidEdwb1tS2oPX89iAjMdFeBze",
  "key8": "3UCeR7ZxrQ51WBM2QaaSoNVHRTBJNdCkY84oWAP1GFNtSq9r4vYZLbrN6ocoJB3c9wGftGXL2iMPTGAyWdGJBWws",
  "key9": "erwVHabVjChvxQfLeoxgPoq4f88S9gERARLWp2i6GGHUFvvMfV9s45mQ7dNf2DKtxgnvkuV3n18V3iT4ySbrbMv",
  "key10": "dXATiyewBbcUfqs9qyTvByGQRboNEqGU3FyrcM4U1LiZ1ZZpobRos5D12AoTUiXKxxdFL1S1Rh8EV4ReymJrfb3",
  "key11": "36Qsm7tkfMvDZSLTsYj8Q7KaGk11bLK1Yu3Gb33bTKZjoobVnYedtD2xZo4VMme2zZ3oWD7iXLEGEtaNxL57TUfv",
  "key12": "5s9krgDNh3LTT4hFCPf5nqayHubH4MtvZHj8KCp3T3WK7QAvEwNkdsJBZejpgk6nfRFVN5PrFdU1LyBD6VVu4eLR",
  "key13": "497iaTaaVaHARTwPeAiH1eJBBDMTEZpu8reomBBSoMjK9yeFcNyxtxE3xTYRf1N42DkV8kf6vBic8qC3cDbvUFjV",
  "key14": "3799TqqCnNBnjvGmZsJorepkikiNZoALLWqsFgds8PEnpU2N12Lv3rXQQjeAD4SrAAWsa6Xu1UKcc94P5P9ao6ow",
  "key15": "2mxFzPPN9jC1FKSXt8DY9EGBhV3updi1pd2Z52VPXM9RLfqbFT1Dft38yNsznh1yL9BFTCrLX4RUDEPcFhAmYxWP",
  "key16": "2jJ7zummZ4pTpUjtokAgKEfAfwU1dnEQ91rHYRWnvpx8SCUSQeFRvJtPwNnyiPhqmTfWTbbY5VgDu5TZZkGc7yGZ",
  "key17": "4zv4KCNibMN8jsJmidTnFkvDxDZAK2xgh5YC4zCMwWJvPTEJhQtXaZcsDzLLtEq1R1uYfRW8N3AvQEMbj7C7QD73",
  "key18": "4B69UdzAQUyzzv5XDKLSCLvR3BZb53PYEUH9d1V6K5rK7rzDav8c1EG5anho2YgfF4X8C3VSzh4m9q4C25HW3P4t",
  "key19": "55F6SCbjhxYCQMDPqX5xWxLgVTNzJepBo8MgRM8WB865BBXscNxXV6iHeuo1wwWLFUspBDubwaGsk1hPLe8b6GTV",
  "key20": "4HrDp7YT1SvUoPbKWJ6SkzrYbyuV47Hb92fMqBjsbXtkS6AiHbov4hXqx4SBd3AJU8km9sZgJrBqeakqKrGNxn8W",
  "key21": "2f72mm61gvpzH3esHMMogfXGvuak2nytQKJb2YDfSxAQ3MZSN8i3qoD6h5rsinWe7VhJJTfK4VuQ2bMCUd5VMUb6",
  "key22": "pB1qc5Lo41foCegsifNh6nqZ7TPKEvCzTMjHJmZmS6Q2LKgcpPzJwafaVYnuGwxqeWedVofGNezxZo9bnRnBRhd",
  "key23": "MXPwGQGhfnYW8LwuCb3t4qFgNtVpeTdmW4wv5DQMCbr15QzpP1fgprNSr1CsWWzhUuhasy2c8XDiKPuaB9m9SiS",
  "key24": "51nnG7krCLb155QZyhgUpX5rw7eCCwNYj2gshjcYFGd4Ff1EvuxhFtfeQpNTLLbdeM8K3KvseRrJ7Cta9Hj919qP",
  "key25": "2xfh6V9i2y5mURuuTPNAG1bWhBVriKp43YkM8eQzAnsuNpXohEpHKx4Vs8JbVP7ox7sZsz5YjccxYUnEKWsks5oP",
  "key26": "bYXT7zJvBKMoR67V3EStfvWqNR1k88Hh6bBTijCfKVf1wW5TDjd5on46UD5eFcow22EtWsDWyB5BkxUxUJP8ACm",
  "key27": "3Dqzxmo6QrgdMmnNEGzK5jBGrFTQ6HKCCKqTWrQsURZR5GRs373hHpq74daMXDaX7JtAdcE4y4d67JhgojQLQUFK",
  "key28": "3QJ1STnTNQQz9wa5b2YyAd1PUroAoiFb3YzdJtHTm4QC9LxiKM8ZoVHYhKf3a5rNpQGuSw8FHpd4BfJSd68NyYJJ",
  "key29": "3Qh6Byn6TcuRy3stWBrfFQujDV8f6HgEEd4vUJNVVfNhJBdNpFgF1nvnCF5FWispwrG1j92fVZryCf8bYFJuGGY7",
  "key30": "2FEnWixa567derYBBVCTmAnstvCqpVpEtVniQchtZLJDyWKtMQvgrfA1jvH5WZHDQ2hSfTbx7wwuw7eigCpoAY9q",
  "key31": "5Y2taQdTr7r4XdKmVP2P82GJp4j75tbt3qjnmZ2jucrxHBu6RNnfcJqLeXbitNSaJ1zcZwWZZ628LrUKxGH3akq6",
  "key32": "2MX9uBH6ebrogXY8tYGmRCTVqXo5M5pdiYYerruFnwk3LLG3puN4v5RDBfJabmVd8Q7dYzfejgk9gucsUMpvTgQy",
  "key33": "meXpzvXDRbzzgs2vCicrA43PPFfLc2HAFyoKbWkbTWtaMtL9qTXaFZeVjvbJtvFMuLVngtw4p6wFCCMrpDF3w9e",
  "key34": "36NFefGvkGYxJJVLvS6FEdnpKZ3AHujL6RZsU6A1cXmh82DQXUxcK1faCPkU8i1oNGTqCWN4t5XQdioDBAyrvAx4",
  "key35": "5rF1nSNw6DSWT6TV9gY3UU7afmxvAnoKScFqBMxdSVdWHnQAfS9uXShSojiFzFSAqMwHjBBQXQZjs6bUSNGwYs36"
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
