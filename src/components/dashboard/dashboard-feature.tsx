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
    "2y1Sy2GdeKJNrGhZCwWouQ2hC1e8HMrfnHicJRHoepEw59gUYhh3fTGQsxNLGqinwm7MaJcqvbL4v4KL9Nh8HrjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3amEgdRVh42H26kVUmDeNJPbkw3eLVfUD5VeHYCcBBj8C7NSziDVT2PaNwEXndtcZwcmeUkf942fKpYbsC6oeci4",
  "key1": "5YCe2EQHwdazpDj5FwiPCS4MytzVb4a6wmsuxGXQjoLeUVpDqiuBKtjr1wt8Xy7i3fNgMEP1RnNFYZs6GaypiLGY",
  "key2": "2rc6Cv3dLEH4RZ6mLTwCXVqQXCk47TmtuaRF65dwZGqsNogZ9JMxp5KL9qCf2PwbTwcCubi6fy8ZAKPAKYmM4njS",
  "key3": "4YZt2xo7QBosMVGnmaAoWRE8CkhMt9nvntWA8cnRkaVQ1HeT7KjHtKMoBJGiGthzrYYDdkWE9igPCFvv9Xp1AWuu",
  "key4": "3iWvLk3K4C1k7KQWvBEY6x3gwLRjLsoKXZq3VpRzBSYaEmkqbJX3aS1HnkogZeMFuauU2PPQszrgpXHife3VthFL",
  "key5": "3rW7e636uTh4K9gujLhRfaJgS5sbWsoKAcS663hcu6KDTTiUGKc9aKTCXX3YtiKAHN8ti8s7mXNh97VBrT3biE1m",
  "key6": "3yEV51hdtfvamkM5Pg3vEQUyqUxFDPmt1hJoJKgSrPZ8JpztMK2VZcjN15ATXi8wnbDpFHjcGQfEPEivgX3w63M3",
  "key7": "5BAzgtvT1Gf8srN1jC5wjZmJMKN5xQfRGTDa9X5imEMB8YsGAXzcEDAimuJPea74DRWra7bLcUMGPTePcbAvU4zy",
  "key8": "yobdMp2AsthMb1APhzKLJE2sqqeSFaHk7YJ5jHZeLEMdw1C7zbydnDiLbMF79k6DyhD18KmRZEbVdSKirrUPpff",
  "key9": "4BoK14zUwkFBcScMhtnRbEXSqe91F3WvQDUhDFi2K98TkQ2erUpogfhH6ZVot1ZxUyNWGh7DWJNe5vQuTHsWu5rj",
  "key10": "5PQw8BUDpHFaGrJdHyYDcVZLz3gpg6nbSEVpdCYFZ2mE5YRPpdQrUjqvptLNWfbaHV2KiXpWUGs8zcGureXbCkuR",
  "key11": "534uEi3bNTpt2HieJKZL1YxVsVPErntV9JFwbg7fqJgweUKswz58LqkXaYngMYAkP61Z5TN8wBpTaCRCLvhwJ5Fr",
  "key12": "5cbN8b7MpikdmXy7qKs9CqYsFcenBZb8G8VuvjmoaB13B9FsZ4YDa6RmAjM8pnUK7t1urySwej8SRC9kSYc9aZhU",
  "key13": "2Xw54hKmGfBxHVqu9CYhfNSFNYpEu5dS3uc3qcrcKyWL91oWd2ipuy33YEYpdGEhqADzJxDZd9sm4qrqmhJ3kgCj",
  "key14": "5h8EZiX3rdAJwGeeqrdFQ5joAN7KVntaDcxBfxzfH6Bqx1SwFeARLB41oqchARyCQjzxYTAMvQoHfM6fnygrVo2b",
  "key15": "5BgEy7yjuzjXKHBiN7zHa4LtETnKYABQDA7qi7tpeUCSvAs7Yrt2jFHbP5oHqhMQ8BXWNet5sUzfq3YT78815rS1",
  "key16": "3z5eN4y4qf2DSsqFbuKuFr9BF1wm8XuAE35TSWDJqmHACL1evU7mJ1qPGMiJUUipaHuYKPktrD17n3AshLk3krHa",
  "key17": "zTScUGRzyi97LEiwRHFwy44dwWksBewApuSy8GaVPakYVSziXjKTPbntvz7aY67osefUfLSHZjcYWt6VPSXetuK",
  "key18": "43dN6BJb39Dt8bo1NLXSNSMYAWNoDk6Mk1dgfxmvGkoygiDT4wyjkJaRLWdxF5gboKPhAmj5KFjuhNFpTJVUZEom",
  "key19": "5yniTZVfLx4tdFNGxPCCMDBNGQZ8LKuttwYnV4cPvg3YwwHzkQi3QdBcyHNqfmswwXKM5W3wfKAxrMhPn3ZqHUXf",
  "key20": "4m2zPfavPELc7tMAYsVJPi114ozpwnP9Z3Sw2JVk2aQoZLt9njPbRb8r8vskuux93URfrvmXEtTmdQHxf4c5KrNA",
  "key21": "2xxVg8NYVM7th7USa3gkDEpmyytZaqdaB7z1mbDvzQYSk9mq6Yneu9tzLRn4QKR29TzkUdAicJJKghbRQRBFgoMa",
  "key22": "54qJ8RJZeGKyaB44mnzQFKLnH7MKehaMVgF38khAuuzEEcTSwYsgv838iCzKVxocmrPurGjUhESYfeosKn1d8LfQ",
  "key23": "3uvaXnjFT6sDnZSaMXyf3DChnfrYKHLnBLhN9PV8bwehN9XGaQ8Qd8v9JvkSxJJxKCxBAkq7migGPLcQNaqQE9Rr",
  "key24": "Fs8BNtfndEiCuwt7sVU9qSH31n4WeLqzvCLHgCBAYzAdj2qFjMk4jEmWa9EnwZdFNdu2zMpoS7ufr1KiTo8oBVA",
  "key25": "2uTq3wPR4XWA6oW4yvZuyjeHQzwZ89ZkiJGSC2uF9gbGJbfHi9FU8R8BBpKvjoX459avozwJYFv1w97ab1FbMDoT",
  "key26": "2wU7itYvxUzeDAgv5n4kNvoGPUJnXKseyoFgWif9T9EeFF7DwwD6L5ALdiKkAfWMNqAVYrpZTZpvS69w6sew1p6A",
  "key27": "2br29CntqPwpro2P8z94gsNamPYwuJ7XpD2vtKha7wmBVgCuBrP6SohdkQuHExJvKKEfTjzSEgiSptU6jpfR19ik",
  "key28": "35HMQp8GS7TQyQzJG7TKxpTuf6zQ4bCfeN3q91zxtEyhJC65jez2VoNuq3bL8WUqxBL7NDyS8n7gYADpLLXc4D7E",
  "key29": "5SrJmqeLFyYc2KVspPVwVXWNgpThmuXNNM2fCVzNwXxfbUcAcwhBB8rr63NfEvPeW4C1rx1PkweCMUVw1f151gda",
  "key30": "2WN7wudseRGCkAu62roH2p8S6ZfE5WeymE1PRMqQrMHdmakztB3wVZaCw6Gm67BPFrqUA1RH1MVj3Vs5Srw7tD8G",
  "key31": "52aLFyzZb7TR2ewrAcgoVGph8XmuhbM5nUx81ESann58XKM1s2k8syd9o1W1iQeLo11btNH9hdg1R68qCGgLDTyw",
  "key32": "33TW8W1aZTPZmCgznqCk78kU77GysE8JbPu9K8GFxfVgNeXWRZ4UTT22ePKnhur4ege39yoLG3AdfsTT4r3uENGM",
  "key33": "FEotfZSpSbSJ4oegy4QXgZPAYownsYV4mEfQFfEAN3MPt84sEjoA9mgciaiPR2968JSmnyg7RB8PpPnNF3aBTPa",
  "key34": "yTwV7FnTy9huzqJpMUbWcFnhkzRRDvgJ2iC3FsrRZDHwLcqsbbMVq6PTfa2CsDH6cqCKVnRL91KVtATGAYruhDr",
  "key35": "5tB5YKxvR4gC1gHS4JZTE71o6rFftubpzKGnETkNWGeKzHo4kB1wBQpW1VoCdqYvXV2gDcpF2ePFhyC2Fdur9qpR"
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
