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
    "4d2WEKMqDy36MoaeEdMZ5f3Vxu2TFYJWT87A2KBX1ZPoEq7GoaCPLfdo9V51fg3Mf2Yb4FX85hA5QUKb5t55w2FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnrywAuzZktByUYeoWKVF3drvSBsMoU4xdwrfjHa4znpRUunrAAfDoEyr9u9iHcKpJ1F2BwAs6jo3REcw1o6x1",
  "key1": "2eEwpEJeWei6CW2Md4iUT7qzotB3NKgc6KT1vojMNQJTzFHWr9yWJeEA4UVhpNRLi758kWytcF9sgtLYLFQ7dvTg",
  "key2": "4r6uykaY6A5wEPyWvA8MQfiSxDDsmnuoHGnbUPt9xviZvGd1mEvyD8X67xNDZD82LpEuiJXS6MAF2SyoB8sSVZyk",
  "key3": "24qMk7G4iQnR1wJbL7kz2BMJ3uWdBEvy8YWmK3PRpT87rT5zfqJY4Q4cKyK7sKzCpmuWfHkJzynipJ2YwD7yLd9H",
  "key4": "4tZYs7f3MiJW9DggQYrpfPDNCSFMrRCRqGFQGTFP9oPa63aaYJTrYYr5Avw1EcLNjrs7has13qTZJKJaNLWUBaF5",
  "key5": "3uPX1ucxu7PCDPcpsXzT8gyoh5x2P4cHBEFHyqsx9E5EtYdtj35AKfADatBpNb4hMiGvwcQZqvxhpmot9hNBSp23",
  "key6": "3XNR6YPTHPs8ZgYYR81tS5HeJpQbAx7PfNMeuXyBi6hVqbHwv6jGErmaDX1JxK6n1aZHBb7Z8fvgngrRYjBnnbCU",
  "key7": "5evbkhDJt8DumpigawRYYBJU7BmWKqkM6nQw9BbY87S3635pdNCp1G71fwTtt7Mik9A7e65fKjMb1dYv2kyUD3ti",
  "key8": "4SR8QJV3Q1uvyYUdTnR4WzCBwVSYoGV85RLDD5pStZK4qBWKrFVVCc3QNnEcrrxnbfKrFtEqHqMWqM1pXUayRY8d",
  "key9": "2arRLQYs16ip8gUW218A9VDwsTzqXRksbMRd4TrrhxDUqRprLejqB8hfX2e2uhDB7JH41wTLiDqbg1CtqPwbKB7a",
  "key10": "2Hr4zjTvqzEwsugyQcNKEkh3ufBK7hHjCsZG9ojTty3Ez2bTAR4b9QA8D7GdXLRzqkozWhmedRAdQu9BBB2jqYuo",
  "key11": "x6aTZmqp2YBjx7L4GYZjt9phZutGEd3BXwy64pzG5i3csPPA53MySLNbJ88AqiwcB27XSxAPahjpq6RDVwfk3om",
  "key12": "4ysq92r3Xp26TEA8JAZ3AN38CzoqGPwjANwS368MqjzR3nABDVd5yUnz8JGxHG8SVqzMVPC5Pz5GntDvcQpTaXnj",
  "key13": "tWoMzj8RmWV5y4K6LKTpvdFf8wTaBVQvhScQtB6KYHTFv37N3GkJxbFv1daHC3Dtv3hdxXqNEDBL93NaKDHeGqG",
  "key14": "4JUDUmgduU39UfRJGjtKWaeA1MaKvR322ti2TQT6Et1PTWUjW8hY2sEMP9mms3HQjJhgsHp69Dq4W8YQPmxoqw14",
  "key15": "5xDHYnMDLftnoDw9X95iR1SEcRXAfLXAj5vZV1pbFz5KLmdDW9dvhmVbjL51D49B6GZfjNU26CkyDKfiNuVTiESq",
  "key16": "24ttsq2kMCAz46kBZ28rB3WmG89faKkrbfYKZW5kQqyrh49CtoQLLx2fyqyGBfLhutY3Yg553h6ZqpCsSJdvvDnE",
  "key17": "fo4Ap3b7t6h5Mp3MuNy45gmWBFNEJPUuxWXMhTdZxMgwZSDC7rybhXHGjgjwMWQr6aTZEUex9qYK4a6vA7QM7QU",
  "key18": "3RhrqPMjqZChoHVZ9gGBvpaXUF7QPL71vfpHvfaM9QAMB3cQHPRJDLabtN5WCzSK5iWwvWiwKKHk4mzpiHHudKSx",
  "key19": "46eT3PW156PcsLvQm7wEkzRu755mDqpob7b3Eb3eN2gugGFHi9xaCRAbdXAZDL1jM9XhZPS4XM4yxb1W7Hd7JYRK",
  "key20": "2g1AFTZUDsGiE2Pnb7hFJtzoDaYFrB4jUnYKnWr8bieWfUpARwRCzbsjxHpaqjo2k63jLvLmdgnr7Lh7jxot94Jd",
  "key21": "25qju28gwxP2b6VF4AYERvdWMwBjEuGLXRd46aJsDsFKqXXEpfoBRKbGXCDXL8P3323HL8mts72Eqi5XwHjuX6fp",
  "key22": "124KWqJfZZme7ezaqr3evzycV6rzHw849Go2bEymVboq9WwUm7eAqi3pCmUfbsJiB8b76hXBdmLPeJjNUDZKv9Mv",
  "key23": "yafQDuzADiwMVy8Y3aVd8tLqDBxaZ2rGPc5rYov2pE2KFEakYij8NmsFeS72cos1bj1BAos2wr5Lqum3ToKAYAX",
  "key24": "2DGbjvCtgAz4BbA3wgiqu3tpR2Cj1bnb8A3f4fovUvUwnsMaM3YkdhWU8eXFEg1J6b6x8Nrggy9GnYaTXcTZ7gM9",
  "key25": "qGvW9cTcFiDdVWtnkuxMjKMBYVQDbdEts3gP5BaWF3tkc6WNJaBdmqvqTin7nJGvyXqYW1DLmUM6HLuZPk1Vbjm",
  "key26": "34QZq1xbmRA2Tm2YZ9dfUCkHfd5CJvEuS86CmLawGyT97TE87cKJ7bCSFVdPSpvf5i1NN2EX7bPb5x2YhWAahzTS",
  "key27": "2pXFSYcy2p7KJWnLb1judo9x1RFW5HUnkV4e8YA2kYyVZztWyyL8ewVuob8UdghQ7JeLGkS8EKJ9MwFGKw3NYfc6",
  "key28": "5qDTtYpMEKPc6ZGJU7fxZUwrNNDWzQAivH35zWAXMYEEw2npKYSj8MTLPpQ39r4bUB4WvNqy1dimyztW1AUbgtDN",
  "key29": "2LW2a3PAex7XdAjXL18rx65gJ62R6eWi4wnsRNKtGrYCbJosJz9JDN9f5gDHviRhinRhzqD7QfNRbAGxRhW4JqKH",
  "key30": "5ApvQbhicasjrD4mSYh5xmepLLSgwRbVUZFCRCPSKJhgeYa1nRwTdZoScKGBwQceUDbsHMDwzQWfs8ridu4Pg729",
  "key31": "5hGhqVwuLjZqC2cuhke73cg7JWzk2YyENwKNTTHRGt995F42vtSMWCWXuxVGWoyZcn5LeZrZ4VQ5NW8aTNGDLNAs",
  "key32": "4MizkRAefaSaMwCWQ2mh3hAjTgcpJW23UbKC5eQmTE8USFZQ7u8HNjZPAphNoXdzLpzcxk9THTqDMQPM9yXPdYPa",
  "key33": "5iBqJoh1b9QDK4pNBCWcVEEtCWf89xC8qUGJE8Unb5hxnPuuZHu5xbdaFnUD1Ni5cpURSm6cgEggreA5vQ7K6Tdh",
  "key34": "5SRCZLaJFsj1pibgQHicjUsLZbDd3VWBUwuSHckK5BcjFa4aN3bHFqXeSgLdaGbLggdZHZFroM5XRbBPckWpTCs",
  "key35": "462d4WrFyPVn5jTCCKcip66jAAB5bv9LyXrbK644wi69HMffbjcynd5zuJJbuYkBKJaRtULa3SSo9gS28CdsVXi5",
  "key36": "3RDcNQ1shNrqLPzCd4bkKQLzRegjdJyjAJ5336LHradHgfyjmxKCNwnvT6meA3JLv8AbvP9oxiC5xfFBdxj8g3F7",
  "key37": "5mQXXq8AEycpZ6Vy7VP2EUFcSZNeyyDB8q4qRjdbhr6Zk5Mf2aWnodqJApAJ3X73VE46iA9Wp1ByysfefwsjHJrk",
  "key38": "9MfDGM2PZwQSGpxdJaELSkRfnLcfCzvZ2zS7c1SWoaDCtqgYbkqfsXEwtqBvdQ9sTBjgJKVuV2ktMbNEbQ4dKAF",
  "key39": "5TaLt2qBkWFEmvFroPXLoGYbEnm2GWiVZSi51vvbCJfZkCLto8K1w8ErJzNZfy7KtTv6ZDUMUvRJCy6vnBM9moye",
  "key40": "241t1T9e32bsNmYemeK56HrNmSMcNMZ1yrWGyHPoUgDDnMhKUhdM7zp3Ady27X8kjKxy1QxAdLdoFXDHyzNgGLuU",
  "key41": "59gaU1ZbV2U9epGDnmy6r9DgRJ33VUEfKbhPxyeff4UDPBukoRCr4UxkmxBwMWwYThcVb7oKU8DY1dRQik5vSUsn",
  "key42": "5KfBzmKuuPfg2bCmGeF1Uuj9gGSA4jX6DqM3pvSkUKuKEvwY5xX1F2JsnX1K6tpdhEFNUgKZnT617hsuEWmwELpg",
  "key43": "2kdMseAtbCvnZjCiWhs1XQAXGEAw1CXtpydaVPKMT7j1ozha6ooeJBgUzfJLUpENYXkjLvHUfkBDokrNVwXHMawS",
  "key44": "2f8WHrwz7f3cczwMud7bBUBTVfDZJzkUhkZQ1HnR2Xsr8a5WcjUHB4UZZjSWoCrkBzpdDREfQCaQsTkVcr8XdsSg",
  "key45": "5XsWL5zFEK8T7BJFvMbBnxjFao83GDh8wnbUbfFmxnLL8tyYKMRofQfd1WsoesyZq8huA2sTak5UHZ8kdnGc7cCL"
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
