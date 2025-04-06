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
    "2qf1WwPyz8HFgVJG6D5bBuEG3vVr8PscGoKLbr8cGYLjuFTCLcm1nmFaNjQfEUxHRTazya6hu5twju8ToTBgADEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28u6GJT2USFF3r8caHYpezbExtwT7ahaCAuGB5EnVn2uFxJVuFf5rDtyfQpHbxseVrDwASQBZj2YX4YA8ydWqy13",
  "key1": "4Htx4FL1c1WvorXYSgn1n9N99RmbweyzHvDxaraUH9azS2NPC8SPLM4tT2J1RQqaMJWbnS31RN9Q93KxWxnPLYWW",
  "key2": "2x3FPv46KPoMkr2DqnTV68GZxojPi896HGXwtGzrGrvonZ6pLGoxsWycuk2aFVRnxk5VmLy1JQTjrLwH7HrJ93U8",
  "key3": "YEbu1tcBrYfUWkgE5ZWpv8kjeQjtnDtJ7XAjRQxunNkufYz2M8LP4dCDie3WqDSRpuyLFcU1oKDqYJnG179fQDd",
  "key4": "eXnzywQjNuNtBtgKc4CcewNCLesuyuwzJ1V8uxompeKFEATAmGzQ42gKPQgnJ9z9JxQT7i5PRHnurKcYvvv3vqG",
  "key5": "2pk9sEi4JoNjAp8uJoDqNdbgMYpwfW8KAj7tHqL31Hdk4n9YqWCvqbupp5oJsNZ4qRJmgHcK9hFypa1rQkpaTT7C",
  "key6": "4rMBu9JRpusd8p6A9HQrnmaLfhLXg9tHaxM8pJzP7jU9A8oyoPCJTFEACCLfxRAmY1riy2XnzEW5RLLrSWkC8FoS",
  "key7": "5fmZjevFz9xF6AKt7Yzn66cM6fumVDuFLphYMtb8PWYgxivnmFrGxu5BTL1Spvgg5H6vMkYYjFHZhwh7BzPmbmx1",
  "key8": "4kFjFXQsArs2iv5Yy2U2v1o6hnf987U45pZgoMDnRq79mkqx95YWuWC1n243EkNLg2xQCwqRhyjUMNjDUJM5A5Y2",
  "key9": "5Mysio249gMt5MUrC4D5qsw6owsecQfM3SLeFptsicrSGcwUjPTKZDHZBXr2vt3L4jSw54KX6D7sFUaZRswF6uXN",
  "key10": "4rhxcz9QxvKKMUsAD9g58SzFFezwXgPbz7wUTb7e3oFTY9JhwqpcpiVArTRYGXxpubqcmkufmhusr32RfNyYvLfL",
  "key11": "54L34d19hN5d56MJrer2UkmrFPg54RVtqjcH22xSLZ9rEx81XRtG4fRZjgZuzNsbf7oDca8SZ5XmLC9WXHcaEPix",
  "key12": "2x3VgvAXK1MZRAR4CjUGnf2hugFJUANeqeVNSFprk1SFARzVA5bpbvCNLWyPEVvNhrtW2LguQp6N8LRenFFpwFw9",
  "key13": "5KfzpbQrhdeufJuVJksGnu45brBcoHMnAHnehReKG6G1XE8m1cT6heAY8ta4M9McFqjGbK9K9GWLaySmAiGLMjcq",
  "key14": "3ZA2KxP4wGin2p3Le91dzWezxf42vb6FUUZPBjwiVcsgWeJYZ1eAsLQVDSs433iLYbLiyGRDV9e3HazgABJihKWF",
  "key15": "4crLocYfjaYamdq7pGdbS4SSn91anVwxJ1zZRZSwWVx7GW6qGdb8djZSUJjCqDy8epSb3FnSeFvgxGqpBPn9r2ZQ",
  "key16": "62WuR2XAkmsC96eY5gydsRgNNmkngWGz9Y96UJsFm8uu1yM7GmCYYnYADo8JBTyY2EE2F4oWWN3fz8W7gK7VuaZe",
  "key17": "SvH9Fjkdwynse18NPSwKQ3xsKc8sxXN2kEfkTWuwDgJWVdLdNtUEQhJmj8FJXcZkMzq7mYBhiu76meyMQ2yvm4s",
  "key18": "2HetjvDNEMfgR77GoZussuFdrhtwcD5xYxM76vtVF9TrcCKruUsHdpALWBancX6BSgv3kWSeKPHo3uQLgJ3kMQBM",
  "key19": "2M8trvfMis3whkSkMr8MYPveAvprHQgaJ5KAaX56TkNUo7LCa4FopJrgeF7AQGHFuc1vJqtQ15UWyQdZBmZVGEgi",
  "key20": "3Vz6VmfYBaf8qTNBLE9rZGtJVzQwwC2Ma3EaZMyBV3maZXkgYmUR57WLoTagdzgjR2DQq9cCKhjgH7DLDKZCnpvP",
  "key21": "2WzVJLPcgdpeQx2AU8fX2MJ9ujjMVv1AXFTd4vEzzcCMUFctzqkGxEj7pjEFuoADv7WbvB5dGtjtCU4WaFTQVnKa",
  "key22": "2fXs4vgp5h8zdf9GstHuyrpMvxi3TUyeGnV3Tafk98h8S8dWr5KdGcPD6uwZqeYUPLNmR4dEXGpfvn2ED2qVciJa",
  "key23": "4NHJgyoEGbrzUouR2vpYwHqgnSp6XeyezYkpprJULbZfvUU5CuR3kuYH5oNQi3mrLHG2WDMFSffdJXWz4cDECXqa",
  "key24": "57his4aaFS41vU95voLDpcmPVDzriSyc4BpQFTduiAAXJy4k9FKoz1rBbmYkcAQrmHzZX5UKuuS6ew3DfdbugRPQ",
  "key25": "7DRA9SWuAD2CacngLW6GqN33tPiU6cxWNPXgSkoGuLPhajh5mL8LjX86LzPM77ufL3zZVCMTvvtUyefe5QgT11G",
  "key26": "55DkkfSuEym66Df6cJk4zXDE3E3TmyKxDUj3nm4o2JKCCG1KUznxyby89BR41apHqs75tshAHiV48Vx6FE5TSSDg",
  "key27": "3iPbSBY2HHongmRKLUWXaVa1weUGb2jGJdC6sWkVCQLSzrwVjjbv46dzmcSVNRpXbvBrFSDvuHdJ2fGBS4k47Gej",
  "key28": "3BYCFgb1N8TDJoJ6q78ELHLKQ1nADvYAeaFJM2aHemVY19QiLs2KvbfnLLdTCgJvEBE8CU5R6WvNrCLF1MFcuk6x",
  "key29": "5v5t2pjB9dGZ6w46xWDdSgXfzBXktGVwwYtk6FKadks2Cu5ebH7g3gQZiucb8bmBgAbGgdMJ5vSFUXhGvwUTBeaA",
  "key30": "275k17uc3VrhzUYu3RkpZCbBzHdNNGJ3FQFXQ4F9po33mwVey1b1sqcMd9BXttNpzCcnv8bMsxco8a9Uy42Ff8qK",
  "key31": "ukbc4zwDtVQQzfiX9eFUKUEaiUd2eGHCCaCNgSKSJNbQhe4NgeTamoyQrG1p4ScGmLmX8EXSLyAvkYoEUzaximt"
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
