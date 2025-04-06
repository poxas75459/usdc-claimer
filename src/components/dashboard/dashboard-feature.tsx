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
    "4zRkHGKnrKcRC3L7ei1gRYFG5bDGG11WXy1uH5aHXXNJ3N4Rmu5n22qv2FYBZDKdTDuSs7rZtB74aqbnnSxBxXnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fp5LQus5LTMSMMSUsAK3TLu2AVP7n7we5am45huqkei8ywd6uvgpbvnqYtct6ABRdH7nkHoedifLi6qT716RXe1",
  "key1": "2a8E3pnmzeHBjk9Ja2LVkCZjNk96gR9fW47arp9BLNcaa7jPjyvBACdVLgnGEkF9Pjt1MwqLzJ5bMhebPBnZeVj5",
  "key2": "3KTgZxmGDqaAFETdUhjkjLyifjdKKxPtUij8KzaKjiwAv5oTJP2T7DZCnRDgCeXmcHbDioaK5hsCnUNQyjJA4XRy",
  "key3": "2dMToiAvSt4W5mtphyGxjAaMHdASaQ5WPGqBpJNQgNmewqXqZnuzvXftWz3gxRMQ8XmJtBFLAmtRaJE1QTX6zEao",
  "key4": "gHiXfFjXSL7diQutam4Q1LpTgrnVXFKBUAkSMp9yA66spz13tTi6UXwsZwkpmzeAioxXL2iAvfR41ddhy2vWjpM",
  "key5": "34pfASA6CyFrVTZ2duGEMNjm8LrUzKmo7gLCSTAY659Fr5RK4SkST7GNq6XapSTCLbHEjZLTASD7HkDJ89Ggg9Ph",
  "key6": "4PXpP2qSbcowq4QwCgF3zb6xWtMeTCvfoeQpNS85BQiW2mu9MadyiZdAjrEwXKsvGtx8EKftxVj4PYW1FV51Zye6",
  "key7": "5mnTbF5sdbwrHkS7kNuBzFaXVxojJBFf9tdCFYyjPycnjjueotDcyAPrDV16RqhFJLA45JNFNazuNRb48ZHr7wpu",
  "key8": "3YaoUGE8zPngxJka1iSYLLoAuhME9i5VySJ3bs5PdVvwBjGL2UHcmQs9Mzh29DMUPCMSxd7azEyaLjtEZ1tUTjPQ",
  "key9": "4PUS8qETiDm1Kzj491hJMknFASFUzz8NTfhSLvXHZGhn6raKon5zpToMnU2KsnMGUNAgtcNgDEzCYJFG12kWVCqe",
  "key10": "4np3DMjDoAzpaxmWsdxBPjhhspzsd4SM7z1i5CG8BCmpJ8Ute5fEMx3TxDGLKJH4TVHTsPgAJWWoEFvmFUi7bSJh",
  "key11": "5DMSXdmU34eAR58Kp6GjnkazaNRLh5989Z8XQDQTvRGYXA3KGQ76ngRthprtCjJE8t9oQS6Ur9qJS42NigmJQiXw",
  "key12": "oLJ3mWyBALG3AagA79g7nkE3GNK41TNGt5hckdvJNfyt5DnM3vasHQdSr5bQm4fT4iwJaF1kedwVHR1J9u48m1n",
  "key13": "5at5TQkEEkKLSF492h7JqJCRCLedTifuA2791LMUrsRmtkGsK2TNVBX3n9ZKRpu6ZbEcw7ijD8wqkt75cSyfwq1d",
  "key14": "ZVdGbKWDrCLrUX9cGqwyUg7KvVYU62oR8FL31ZQrYvFLaCKwaL2JBBYoDYzBbXTyWhcYvGbBiB4uaNuCzzJkC2x",
  "key15": "2mjjGHEohWwHMbiBXn27Avain5mYBkMG4S3ipJT8bkupYEeFYihwtxULtrRx7vTSet6LhtMPnedBjJ6na7tMaizo",
  "key16": "56fkJRj7LWxVj4bj8ihxzZHjps7rmTsrw4KjEKDVJBvsfC4TPTqTPyppYFs1efwszT1ZAXoSKY3ZLo7iWV1QLRHb",
  "key17": "2mFZgVZbw2MBJhsDxrsRizGE4AZbgsddMvBF4LxfTx7HyiMZTWPYE52Mxn18FUTffmXX3rJ98sMru2ykpnWiGR2K",
  "key18": "5PVFsiH4KLsigHLrAxRGL9oWvE1gEo7SKpaxEDgWxgFftnQgmLQTGJh1CLKNbo7SKMTvcpeznLwYHdYHJbPk4n3x",
  "key19": "23ahndzpzBzrav3CB7acCTzm6DUpBXH1hE3VEaXV6LFHQbDSNGeEhbjCFfCvfUQbUyMuYLJrLHKVUo9MjmdZSH9W",
  "key20": "58twd7qm1MU1eEKhSvPYePyCRFasTrG7gCDfPvmBu3FcHcdJ9iYsugcysUFTzub9FiyhNL2ynAM73JYnutYhJvh2",
  "key21": "V84fRbgAwGEPBisgh26tPC7NmpExSM4K2EuVnmyKMCBUg8CFxa5B946Ahsd818LoenuvKmESWMTz65gi9n7eqfb",
  "key22": "5UCrVpyyASYzovZPjecyGiDQEfHEpgZWmwgcTq6rWVR4p1Rx1ax56uZXSXnnfmWgwzx1uyLjdHhGnYhqfW1DPV7Y",
  "key23": "36ex1XKgaW24UqCB7dXtHVJboK1Uy6Fcs9Di6bYbswb6uV98NTo4Eunk5CecjtWf8eDdm6uc77CPymD66Km4sHen",
  "key24": "5gCqwyMLNF95Cqg57TqmckENn89wTJpY5rn6Qg9yELvwCwhW49owcK9r7E6ot1RUNQCc2vtrMLPLaZaKpVahRnbf",
  "key25": "5RdG8eewQfR8q7sUn1B5C7J5suHaCou1c122k6YSkte9YkSm1kp8JRtXu7TZcev1aan8cv4H4tKMWQcTdVaJxKhf",
  "key26": "59NuazHcRHoD9RWsypBqaovdd3oN9C4FQBZQWtByqgUjh2PMthMJPs43TFCHtDDdoiAFV6h6fx1E4eqJCqkwdFga",
  "key27": "3GAub9agbjLktU3LNw2j5Kj859M1X5DteYF2jDPuMBdoVCnZhMD8FjaNnspdp2JhddJcfiTyneVgScSSNpyU3SDP",
  "key28": "3KU8gaxxU85g5njLnAAmC6ryi99aqZ4VUvGc3YQdg6GW1t2nkr5FYMNK4LAaGfWCeis1R7QNZVvmb6iko1dnAbLT",
  "key29": "3V9YMFbaT1DrnRLKVRv6DPXqU1uSvvR9LNq5FDqs9JSHK5fd24apsaoHQN9ocedoF8bbda1QjJfSQ1GterwjURLS",
  "key30": "5ZHyGqxLzDH1zt2sCexwYY9TmXxvTB7UBV8e3yPQWQ1NfhXxF92RtqLHRWusnZmrienEQDosjDoSuJhRWQC1PHgH",
  "key31": "4psWkepazQLevGbUFqYukcB8eAtUeVJJF5wVKpLaWoZdo3extJoytHePVQs6dFSdyjJ1wHdhSPuSbyCfU7QFsbpe",
  "key32": "5L1VME1kviSbPDqXCu1ZvtZBmUyiuGXKAHr78b6eLqZiNqWjjcwvcXG2uzfyZTk6gu6XhnoY8v4xQaG7WAzF7yCr",
  "key33": "XdYMVpNKGWK9xGsTaVdJWRLGBNs52oVKQxJDzyLteugAES7KsgBLPrbz7LLLJKQPBcV87AYAqPXSqhoF2Lm24Ln",
  "key34": "3Q4vGerNKRT95DCKX28z6SM5YWRurkMFkSDPjfBrtF7MsJNyV8Rg7KTM8pb5Bj8BLeGJo2sqDYvHkou1TTbiZSwE",
  "key35": "Z8tAfJncLm1cGm7siX2pBkNdavpLHjrskAQ5n6ftce2yBTB9oM5WE54QMVztTYmJK8weCHzg8TknQKkexPNDJP3",
  "key36": "44pzoviDti3EohsW5vYicVVoi7WgYVUL5e21RAUFa6YGtZfUJsmZxQFZsQ28EsxMfmCjEMxN45XYNQouxgNUjGPk",
  "key37": "vnfset4rpDFwsUBVooYqTm6C45JiiX6o4kAy47UXyVBadSwax6PRxMq47t7riP1hZUgB9r4T2nmwyigGCMo15Rm",
  "key38": "4EGu4TEeqFj9cnyUqFfBC12XjnRrftQsKTj1qyBeHNdk2mBv55JF6KC77HoxedgD2WuTPi33e3BvwWozC7RdeHdT",
  "key39": "5Gnt7GH8KZoTP71zbGxAR8GNaLg6DUg5x2jPjd5poSBLixppQqDwqB5H7owFDG7rf7bYsu2BiUZp89GTWu1rz3gf",
  "key40": "5whP9xrKkD6kw588wGcYaA54Z2yahLkYa7crS8FwwmnemN2KSuWCvJHyKR4HrqChFJ7YRwGmvhPEpm2sGAooWBtq"
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
