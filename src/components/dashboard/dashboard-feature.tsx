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
    "5VCgCWjLErmn2Eah7sShDmsw8k8aaUMud7uTZw4qwqeioJoNueGaFT2MLxdWQ2aMGmNe2sKcnMa7FYEmRdiMkt5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX8mrPfNpnzaJ3m4XvWSyJyfJbC5rYTN4z2pDhCqDSypQtkanF4oHG4CGHb6FpUSYcoAJV1WyvAMXMEgEUKzMq3",
  "key1": "2TTy4hwh5Tvqbfc85VN5o4hCRnYzj2qNAwj8g4GMuhJQYBU3mYVgvGLcgqXiJzQndu6kTfxMpgpqX6DX4VnUaPCJ",
  "key2": "3va3kVjLNj4i17V7yArcEcqE3sC4DwFAZtPtSTXWsbPwU5fKLTctNzkTPoZoB4p1tqyXhd221LrxLwdwqTAfes4P",
  "key3": "2G8Hiu1Rn4e6JyJJitxVrHhCncLo9dh2jXLMRDVo5y5SEeX3XyKbUG32ipbbcQhD9sX6N1eg8rLeJpX3xasSM9KU",
  "key4": "3SiBuJNnKWvfSimTsPXwPvWZDKnS5JTuQw9qMundoNeB8Ko41XUzYqdJHowf49yRLzmzgERha8T3g298MtbDS4es",
  "key5": "4QVk1nUmk6rLqoEor3G3eunK7mPcMoYAJ7kj5ma2cm9A9og5HkxqKMDnP8eKr2XpMxGjZfGMgDAUg7pQQKECYB85",
  "key6": "2VsCR1GmgZPMXgjA49xLPCTkyEvhVZQQStgM5outocgS8ma2gdipZVUgBbXT448C2vyNXj31UN12kgJ7Z2MoEbPm",
  "key7": "GokWkPnCzCa9NRPjYPYK4i1FzgNu6abHRNLGgs9iCcTd5bRS3M3fHPLDUNYyYv4zKKuz9jQqXyG9YoHyZ7JYnKW",
  "key8": "f3HGXjE4N3yUUcgLgusuw2SqRkMViqPbahLTugMA1NkqHR8vMHM54HaYcqEQYbUrfEd8ghgm9R4wDqARYH7B9bD",
  "key9": "Mi1Yx5NrCCzVRUf7cvTu4aCm6PZsVKvqf3UjsGjHoX3X1hspJ7vBXF4rWtXFWQgLYfXuhU8h1HAf5URaoaDbN6E",
  "key10": "3TxvreVb4h2Jx21QGXvgRTVMfyo1FD9n94njN4Sx8TSLK3ccmu1GRcfDZcSuaDWTRqjTkqmfKSophD8Z2cNgoMvY",
  "key11": "2ya5fYNeNrDR72CGWUx5dTymbZTsdW9vsTV8yqozA1GE4qGwsArqhqXVCrcim11mB2JG86XYTXCLm9DkSmkkSgqi",
  "key12": "wKhkJyqpCa1YvszL88HXCKfQHrr6zbhwQTERpMQfB927XrZx26CQhbyVQWXqeEf2Rwfo1wfKfSBBMLMQKEkN5mc",
  "key13": "3AoyaNJvS3qnBrXM4CgsZfBBtZAeVYriZ3EVVbnGx3qVPPicp7M621pmQspRfNCHMaZ8YWfiBPWb1mkCotBA4j2b",
  "key14": "2pbmmJvPBRmgPkmJLiWWFZuhdgC3XB87VdgkhdBFqyMNK7GNh8MFM7DQsrwEAsZUdFRDfqGP22mSdrixo4AMfCwa",
  "key15": "63ydXcfdstVr8cXTfDsRLMPCkhcwSS638Vpmigo2SBNFnXwxJmNx6F3Ui4HDvX9i3WPPmmvvij7DpjHUTwpFYyue",
  "key16": "PqswdhLkjbRwmpvLX6YkY8YLvVec2umevJCqFxXduYgKhzLgkmuQ2iJxmmKiyrvVDTvKbUyYqe781dsvHe98xFC",
  "key17": "a2QhqheGo7BVWTRYZ6vQU3y5pZfCQYYZ16xsbUNBdU4moZXKtU6krxkNJRC7JRChWe6uSkvDXUjfsutjtUoE8qU",
  "key18": "5ZoWJxe6iLWxcndQ9EFoPJKH9yNHqDFSmpL8TfHuQygRLzBnpkdGEY9rUXNMDKWebnsvvKuRGpd7x3UjLHrz7jSq",
  "key19": "2HSwuc8KUETsWPDHAdhAyDMfMNwpHw9jps3bJ1xEsf9mPfVJzK7VxuvoaNzkrUSvYGfoWxhUPnVx8jYb2vCZaAAF",
  "key20": "2FBUj7FmXK46oBttZqjCjJg13VvcYcaADhgfLeFD9YWgUXFXW96obWF6Xra5HF7g5XxTP2aavvqnRTtutcUJVdaV",
  "key21": "x13DLvzDy8w5jD5k6Sp5JnFU8gAFMgWF8bfpS3opc8o3wZc4fnZQ9zfPx29pNVmtDYa9k45bLSkj26P35hSBr2U",
  "key22": "2MoSEdsw9VDhw82yxG3zjn2NYQKEmpwfxnY4MD5JHyKgtAYUKTVnMMgJNZXRSRRis7Fp786hTWrxLi3hTjw2vCET",
  "key23": "5WHACTo5XJtLA1ZxCadHXYs2daXFDTYddd7wfCAtYaWETUDkVw8o1QE9abtYZLDqJg8fGqikz8UrVrMt5krwxB9s",
  "key24": "8tCPUtMGgU1hBW6i9vJxWNKAFZyiBjDDrnf4DugaJqru27REuL5toH5TQCUsQck82UHZHhLfCpJFADdKuiibxTN",
  "key25": "39gfFhLSdGX5U7eZRPHLJBcbLpcw7sqeywiHDcEWuMc93y2ydZkTha6wigZMHcvu9MRKf9Du4XJNe7AeomWBovKK",
  "key26": "2sCyRc3GizQfGGYRcmLKbfuaj2KrK3A6w9637ysr3yxhpdWZtZGLnatPog5qd5uYEZgojt9UrqxVuWu8Tmuecfui",
  "key27": "48yzTs9DmZVdVCu94wsbZrpvtETfWU6D276zuQbxFiDCEVRzwPfJJFJc9LXmMFNSQG3Pwu5HjUitT53jXPCbCRQT",
  "key28": "5a1DpTNFQahKnuvqjij22EULxVAb374kVmCVbXQ6p7FkDUE27XHeC5nC9QuE5xQsMdkz5dfas1bQki9jNz9iSUPJ",
  "key29": "cR3nccPbcUN3RbMSGfDeD2WwK6dipQvs7THzvZ4rMCbFbuLF45TP5pTJX5N2AJQQqLoEgonPTs27WwWwySxztaB",
  "key30": "5KjpC81erAeBKQdRkDa7SrmvZSR5LRYYkJ9KogPpy7QikUXxuQnDBZU4jjvNbHprbU8stsC8f8vxNLgLypR5ZuDy",
  "key31": "i1p8ohYFuqsk2RkpiuRDE9EqsDbBQmQtj71GESqopkvywcFbwzX1UFreA3K7PSB8Pikq2cuXN68Axn8cu6MJZD2",
  "key32": "53Av24bQ8QERBZzBJ5v9MeHufywoQkVMxdsD22p8MoTrb8bvDKBKn3Pq5dmvxvw9k37q1xgg7JYonSLGopDpbAWH",
  "key33": "5BS7L799x4u77MmLVv9zHo6ioiqAd9CEMZjYY2t6RPoMDQRkUJwHVuzVknqTVHd7MmceCMFtwBT8CmExiNBhFQ2b",
  "key34": "4ZD94XrYDDcoJwgyoRVvfjC4DHE25r6QwQNZpZSYXPRQuiFboawHMCrdFoJQ2AF3LBcxTrMVz9eRRAaSSq7ckt7F",
  "key35": "eV2UBR1bAHrccUiTFQRAqXer8nDcXsSMGTDyLCtKipGBwVeUkYR48xx3uGetUeAVk7779GcbS6gH7uFPnftpEtq",
  "key36": "oK1mZXjywSqF5qoLfCL4FbvPDDaEhQpAbx48JiV7SyeQijZXJd2ntC2WP8b4JJoArah2789kSQ1ih3iWXyPkj3C",
  "key37": "2vUAJ6qkKLsytgFjtpULVqa2F4CCbPCerzRNb7sFgneCDY1sSCAei8nwx6kG1oajyMBNVtCtvvrFmmxkFLS6iEAU",
  "key38": "5ypuLxtNsRGquuWouoHg1EsDUw5tr7EBuVKt2cPhxoNTRUB8HhXtA3SQpz9EHyz6RvxWTeJMccWFeqDu4Y9dWYZE",
  "key39": "oEtGZJkaKvPCFuD2dtPJ1JbKMmFwWUeiCFFnFUNyG5itvbv9hacMaK8zoMBuEVYBHuMA8vx5kvjbUatYCN7HcxY"
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
