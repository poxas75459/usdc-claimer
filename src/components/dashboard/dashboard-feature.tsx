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
    "3cPEBd4C2R2kzXs8FZXjGGpxxPtF97HmmHuYzCdbWYg1z52QbcPGHCK691P5W7ngHpz8X5bjjKCR6m1HqUmzHcGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAt8tNCMG7gtyCqN3wthxbHfSt7pRVNq46kbvBnGqjpnF2u8rzqXkw5SJQ5Uq42BaZqt9JgX9fKKs7yJCrGYGvm",
  "key1": "4GyQddMoMgGRdrH9eikw3o7C5hzwoYHR7SCzUhAVM1eSyb6VodB8J9HPtz7A9faVWQkmaN1NgDKwNTzn8ZRXHQix",
  "key2": "3zJcvmv3W6EqYueugGxnW4R4zP3B7aJLAdSsMgEnzRvkVABVziKkoL55mtCXJfbmDfNcQNrBjNSqKMxgcScC2zMG",
  "key3": "67E2o3uMYZzVYmogYjDxP8wJHEAqvqkj8DyepgnXzYijd6J347d4tQcRcAG356aEPcJkkvRsPEGhX53qfxyMkR8R",
  "key4": "3pKLzpNJRAitg9tobGZwBmSoHWdQmesQQN8nSz4UBfTps6EMRmrFgJf4N35tdcq16XdMUsP6mJ174G85GSRcnGSy",
  "key5": "bDaqGY54RDY3REksvhSm4cevUcpRGE65mdnGazPFyDtnHGvqC4mS9qGkiNTXuymttGCTuQfRLAqk12Fefkci3iC",
  "key6": "67g2rLTcs4qXzrbmdPqz6vdr7U2tgPLuh1TceZVQZ9211kFGheYgjWrgVCQrBGt9ZapXMrkUtW4qADQVL5ZX73Xr",
  "key7": "59eDy7PzAwskz847mxmxNZtgDyPzYHSfhMBkpJARzmju3qyw6LGfKzy4r6g5jbETu3ksnitfE6zFKPkxbtcXj59d",
  "key8": "4Y53AZfjbBSwzaWmA69AyQCviEk7u9L6jRDgCijehjVnxpcTcC8SY1ReKHDPAfkkMchnVKAvDrqRWVNPiGujUZjB",
  "key9": "46bwuUY8Fu4q2RWn3BMWzxcNyoCS6NWhBzkAvyRjKUMZbp9NLrTLEsrqWMVwbdiT4N5HBxcKmZnQavC6p5gUMcQ7",
  "key10": "5Rjt2s6aUEgvEwP33Mzi7hnXVrLynEXu32nmfJEAPXecPVF3JpV71Nud9xAjThV7xKuzW1omfptZAuKSgpwHaQDZ",
  "key11": "66kZqohUKWEJ4N6JCVGcaHMjSQRiZTLSh413jrZ3XULYCuH1Tu5UjQtPZXn7pd542q1PgWV7h8CwSGiDqmGs43Zn",
  "key12": "ifftekjW4VfMCXZ4xEYqPKVHtEcBWnqJZjoeE4xHjB1GNpZhzksWK6waXU7apyxGP8LfHwJb3iFTcn7fyHrRvXp",
  "key13": "3tQE4N6BWkGE8RNCAwxqrsoED5Cj458epZ4PGkQDjunp3CzuNcHnicgkrz4hEov2ok1Q2XKdo9Pdf6YMhYHqEE5B",
  "key14": "2eFSHghgRq1T6i629xrxYezx63HbCMkdSsrKqnu3uiHjkQuU21LH8JpsLupPxxB1vAyDZao5hrpF16qdCWULu7Gi",
  "key15": "3J27vk9ZUryvWnnFEb1rjQCLJgs2wzPu4uCR6QyhaXmUerx2v6juC68xxx4ZDV9yy66rSBKCZc6E4WoL5R1t1u1b",
  "key16": "2wAXhW8DFgHLGXkJnbKRBfkYxZFWJVsGXAX5TWektqMhMZQeXfN28LBNKB8ZgZGQukHr2GFyp7LVt7uiN3cLdd2U",
  "key17": "2mYimrqFSXD3NWVMeLDrEMQfC8kJZKrD7THC1sqftN5oyCNFwoNFJKZqrEuQ5s2MznmeryoWXAsKC8d9BgDPAmSK",
  "key18": "3HzcV1ayAFCFwKpt8zgBAxdr6zeF5dC14tvE9dkAWy7FLMXBodserAJmaJAxyCudmyxpP9BjDWwwaZZRmq2dXbFn",
  "key19": "2pGdT9YbAumZQvJpkgLyT3CPdbkyRLBaRkYMd4wDx9WyrUnTcFQNawKNy5WqBvvrBaaoXTLubM6baanFw6hAyWmy",
  "key20": "5cTHKorDxk3AgPjiWJnKJxES3Xz8nTvhsDcgAuaRrHN6hZWfzdDijVKBLYnszGW5FQTmQ9Zu4nb9sr8vUXk4DAjJ",
  "key21": "3wEHnijJLgTcFE3YkndzXH2se3HDzjoF41EA7cox54f7kLfs3KvDvQxS6ZvQGwido7MULasLD6r8WsPdGorPt3RA",
  "key22": "2zocCfh4gtyhvBE68oBQQAckqVTbuP6UT8f3hJLdczcktZPwufgrYS3R9p37SBBz6ZXaSBmQ9Tfg3UadXwbMAzx7",
  "key23": "3CaDcpeNx5nVavvezwXm4F2B86PZCYr5ZtkY1hwf7vvU6NSrKUyAxfwqkrKpkEUqf3W1qmUd2oDd7BF1Pr5gwSFQ",
  "key24": "4GB95iUvTG3M1XJizfJPgyiRRJa8kp68W9DzaCeLEu7Lp8GR6MuqKdSa1t7BXdDTs3CeJ3qTT15H9QW312MjV4QF",
  "key25": "34t4PRWXCpoSD8UBhx58s9j8FU8AgXkgtouyJwv9syBPwkjCE6G9nUukArvcZx2uVNtw6rkcc88ZNHGD3CnBH6q",
  "key26": "2T8qmczTA54PHC1H8vDFFm8KscrDhrGjWoSW5NT4sypfurXkeEk2rUy8uiaS4DymGqKLXL5zAT3Q5mp8tog1XmxX",
  "key27": "JujuHjpdPX3bcUnbc7o9wsrkRousQqh56tMiPoX3wiLWEf2c46cMqbL2E659dkYnauB8DcVDJDLo2LDdFKvrGQV",
  "key28": "3AKxozAyhm1FBYCWnSgXKSJ1AFhb9pXgsrVoiqk8Jo47BGFxE337mswc9nMpsWvKqYch9vbdHvspmbSDbGw26DZ3",
  "key29": "4jVB8VXfE8JceMrK8pnjyBFvUgvpxDus39hYd1iNzxc6YqHm8kmVtrWcuMCYFZG5CZwCqf3bNwX76UWd6nLc81PW",
  "key30": "4WtUrf8hPQzFoXDaY3JPmCMzVpHtgVkp4AH3XeUdFCGoWcpRY3WGjMbdRwGakkgu2MUWrFfBhSWdVAs3apMkFWrk",
  "key31": "5GJXQy3qV2ZHCzGyWfRCEDwcXZXseKaRUa8Mny2xpXSGdh7PmmrbiwS92YLhHREpfjq788bNzMBzir3mmP5Xmh5j",
  "key32": "5kYU2UahiBtpewHBMDBLCgcSHuUyTRwFKH7fUMHQAC8HzLnzGqL5zgtk431cbWLF8xfbNi6RZuddruHhPxsRZbSC",
  "key33": "5ZeSvLBAo2zcTrwfKmPSAPXMRPoxQAmNNzb12tQk5Pmtx9GNCWMSTdzYB1hreUgxtV6y5BsxJkz9VsJNbXQh5MpK",
  "key34": "4irFcQCtNotFPWCCp5qC1eq3QbrLHvG5SfWow7vcTfwGVsgTE9KgLmb348Td8tzK2h2NeGe8qt7FaCuGkQALGc3G",
  "key35": "2L13yfQyytSiEaYwVykQ4wEzdPyZEqBytkMk7rM3ts7Fo6nPMrhkvE5oHAg9KovDU5iUKhcstpGQigbAoHu4xT9N",
  "key36": "5sRazHgbPqMLwUKh2EToswNquf7NJDuLUj46UM6JNMBUSnVcuyXqpVSiVAr5yxwjyi4uKbDXiVE8SUhtgLYVWDFU",
  "key37": "3MbbgeQmJSPefctcJVCjxUEE1GtbiVse8DJZFbbZpg6UEAsKm9JCmQmgYa7c9Ea3U1QGUeYzzgi6yGYpDhuEvU7f",
  "key38": "5Bc79KmNZdpvGSRL4CcnJ8B6rF1ArgtFp8ddeaXxA4w3xFvdXqumcg2gazSgYiDYwzvkVRirkRC2puyxau1WwD41",
  "key39": "3iGYatS5wPWRvubSq4Bdt7yLcrvEUWF4K3gDuUEkXULYhxXiCTMVSzaXx9DUMisdtioGdbcgtiP89ynMSRXaWxfc",
  "key40": "4dfHDyc3txytut1iqQBZdj838fq3hmFtifT6rrGXhjfeLxNwx3T9h8DF3psZQGdjLNonK2vCHFDDySnVAYA3AaMA"
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
