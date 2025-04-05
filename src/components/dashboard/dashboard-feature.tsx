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
    "37TYmUNSxc8bVDXFDbKAjW5ZvpeLAkL4W5FmDza8wsAL2iCihYPFy9uAQmJ6TTqixoRwG6JYmC8NkLqYkXc94Q2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRVA31GJqjXW3tnYvY4pzAtM2VprTvCSJM9PfAvCZCKHMEerBMJcWzrXtCwAdMFSTkj95QMtE2mQvMABghw57vB",
  "key1": "5Kds7yCHRsuDsuKA31p4z8YaVYAyPpjtm52pPH7LRgqJUCesj7mvB73RPkfbusZz9dLufE7NFfLBYBwwobYngtAP",
  "key2": "3TWhRkD1ni3MWsWTRBSJ4jiHu6BW8vSYa51mvCkqCU1Zn6vSAR5Huf3WGKEaV2DxUxNBPpT1uukG4coGHgLR4Guu",
  "key3": "29CDELAe8MLhm61Uvcgoxm51A2Z7Fk1sGf4FXaaY2N1VWWMtoLANuhBt2MkKdxtK9shAVb1XoZdrn2mek2koaxLq",
  "key4": "BBxHojw1yyZthZVkqRzhuHG8LaWSqVBbiaRxBXMdLhvncJnhxPepsKpLfwR3HM4jwCLsffeYBLgMKEarNggPjeq",
  "key5": "hHC9GgLn8m49dUoiMLKpxwQJv99skhFg8NwoxCR9BkWSenjp9Qx9EG1VUqrJMRQf1kRo3xDQysyMBDgZQYpD4i4",
  "key6": "3uk5nEgTdYsgi2LYojCb8DyGCAPrsafb1ps85cnLA5Z41cKxbDqrk8FEabk2Qf5zkwaLdRuGm5JRW1gPgab5spZY",
  "key7": "4m71codWWPEKgXgStbDL9FtN724aLmz6NFbRMECMYNREdf1sfdeketgDWri2o8a2oWtrkwyBmqphe8madhkenKwK",
  "key8": "pRVCtpFF8EjsDsGK2iSo1z77isHrpM58an7DQNYA5dQJUKkKQoaB7j5jQCvNqDmycVtU36uoqzdpSqtCzcEBgdY",
  "key9": "3PdXD5oshFhwjGjvdcGfarA5DAL8HDA1Lk9i4xEFC8KSmoiCw5c6gh88zzhmKQT7BqRWxtfHLdYc2eNV6DieR8JW",
  "key10": "562DCaFmECdomgeLnnBCsdrFXaNJ9kA9aaA2AnEnGEESLQyq9btYvL83fugbX1uhY692as43mgDWadhY3kSBgpi5",
  "key11": "2gd2ag4D5VGN5hKSeNzD5Fbzq6GVWTFxUdZQ8LrRMVa9brox16gdrEGfALaXU1rcvas8aytvfiqBKxSDSBbFySu3",
  "key12": "5XDM9hhp6GGhd1FpxRQQpQFjRaZn3JTpwT3uDZddafED63MjtLfdkuVmmv4MMF9uuEwPAMJm3WWv992mbmv4n9ZZ",
  "key13": "65PqJ1z7ZhR777z17mfJFPtJe6Xg7Ac91iQcqrNyDWLaDQft6GKTVwBf1MSLfeN3kECGHXDiPUWcaxs8HEeC3igU",
  "key14": "3arZtPUJwwgRtAe4dd4CqKdGJAqmFWaLykq49iakHFjvtk3Qrs1vWpkMbRnJUHkiZWb2ANjXU8bcM7LJjpaBHye9",
  "key15": "KK9ufAUMg6krW87qCpdpe2mgAdbQwLnzACHBn75FDbpW6DMUD9o2DqNEG4ssihUDFvpPYYWmxf2cPYVrE37eDGR",
  "key16": "wiKMrdP6Pv6ShD159ecEYkpQC4wni8pjpfhhmKWWX7ysiBJLLogocM5BfZ5FEMJzxBMm7Uvhw1cfUEzws9qPhqG",
  "key17": "3Ecksg7LQ4bHT1pnQ2zf3fv8hbsEiRUDz9LsySHTEJA9tA6Shdar2ncmCyTEU5BQCLyLR8RjPGPzi39RMpYN4hzA",
  "key18": "4ceguR1nXniGaFAL1KYToae6YLbe49Nys9vG5Vg5im62TuqBvQ8Y3ALYPR5VwjphBpsD19mnz96oPAzDG8et2R7r",
  "key19": "F9y2RHW8RVfjX8uTqk58FdF6zfFhB3dHyzxty3T76FDESctAijxSupM6uEFqoGBj1pbbcbUMc6C5zcrDbEP8csh",
  "key20": "3GqcSZFPsnD8vwN53RbhvwkbP7YNaqNYabWQBav956hT4iskCZh5Vh2XfBcWw7vsQa8nhuKjWQPnurg3a4s13ezJ",
  "key21": "2Mcg9aeDU5LKQ9EvE8xi8SUs2UTB41m6Zt6SpNr2dXCFJ1vE9x2QACMpho3ETquages7Ht4rLopk1GpgYB6odTnE",
  "key22": "2nqpgpqTqBQJEWhMMXq9vFZCrdnkRKw7KWPgrQGyLY2t1i8tUEWTYX6oU5msNQ7neEBkfbXwf2NbeQVJFSt3sxzj",
  "key23": "5rNGusJ7rVqsmEbAWQqPq5ma12e3vTS6A53ZjnhvKKzBfdLASiohKu5d3UxcAffCgZuxKgFWGAzYumzU8yn99JmU",
  "key24": "4XDX1uHDDAVppboYJtPWipKdfmkvVungtMZ9sBye4kY9oCefPfXSKgdXZFLDbfM53gBFC2okREAuhF42NTPZjCDD",
  "key25": "5uos6FVdTguNSNA9jBheNUMj697zzccT5a32Dk8mWUEyKs3AHo2Ywi1EQC3XnfswKcCNq5Bdc8ryHKSVS1kAbiWv",
  "key26": "235Jc2FncLjgxw1Z4sJ8beJVhyQNXMENq7yhv288qirmqpDKgqEtuVeEkojCsGRg4F9d2kWYdYBugPAyGHNujTo5",
  "key27": "6X5McBdwZbhmHXN8162AZRekS4n3hfxNwkqmt2xWsA2tP3DETFVQ8cH6TEA6AJeDMKqvEH9hBNWXtPvUPSooDxP",
  "key28": "4A8fhL9gg9JYjyHyAdb1whzEnbx3qnX8Vs3GhmGT5QC64Cn9AueJTabCgLhSgh2wKWwLvqZiZD74mZoiy6jeJK4F",
  "key29": "644eVWfU9JDG7wB2Thm3t8q2QXa2gUMidDhaLGb8EhY4drfkgma3HV1hpzeruigNnWnvNYqBqoXqMHx8Z3k7XJFG",
  "key30": "5g1Y7PudaUA7XBoL8K5fvG5wj7F7h5h3aYD7rVhaJfBjpPDANvBx5dgPLfSB8scGyzUW9XQPmhpfoeb4NerQ7nQT",
  "key31": "49DizjwLgCvWEDbYo6csycTMFABqrjV6Nkf1H2JWanUDnewT9Tkas2WVHNdd3QkWPXNgzUAJ9dwGmwy7iRJMES4r",
  "key32": "4f9PsxWagBGBY4vwcTMskqRVdKHPmamyYZbtjpvjWERRS4XeNdPxm4EbQgnyrnibbD6HCzvC4sBJQjnAmBjp9JyY",
  "key33": "3QcrRpKHbT6Qq2jiGoaM3Wt6PTmJ6EKfy9sQU1wbFb9AHEoFr66p4vd8zxHnvfsSabrped4rxs8RWjHmnrzSyx3Z"
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
