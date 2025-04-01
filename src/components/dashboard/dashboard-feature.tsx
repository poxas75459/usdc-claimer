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
    "iE9xF99k8g7AGTd3ALZ6fqP5hqnJhd5sz9VtNXduwc2EkLwuaP6urUgRREmmSVdA6hD9ELnWXFkFrakVVm9u6cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pikzQGprUUaQDdvqon17jVnrHFmPLYirr772TDkkeXajurD6uM43H7U4W8KVhnLHbFtHUqJUBJWMy7TTFLLHoZ",
  "key1": "5bZxsTCNfZZY1q4bNsR7vcKBt8FreCqb5yaSUAgaPtW9RWXUWn23sDuKEcmpNWqpDqJT12J3T6wUU6NKpvfBQ5M1",
  "key2": "FLgCgzLCnZY86x1D5uiEzASp3FugPKW4bYmrzTUDJV2BiRguBtuWirq6zKiYiPhNKK5fz1zNxBRCxEr2sy1x86r",
  "key3": "3Y73L4WRLY1qKXxkbVyK5HK6iJhWALrGN8F1PApCuMLUQr7DeNvEBut6wh5tYbBEZ4oKbVHtmpxmGM1uYhmRZDFH",
  "key4": "2fk8Qt61Ys3MPojHuEiehLWeyXGmLndam7nJd5fw6g36H1FYPVYS1yZubZGDZBgkjLtXUo6f3g4pmXCcPYWK1TV9",
  "key5": "37ZqAno2BvxbLq3FB9xPPfspyKhpN7wRA3qmPAjaFBAJHsLT24GRD4SAtFmgEGG4KyU6iQ2EDq2GTNJGiPJT1PTW",
  "key6": "3H8x4meqg3KvCNV5kkWhyX9MJfD1wodmotWJzYB3P1uNT5FCaM6uAmBZZeyFnQr2KU5i8rkFHpxNew6kv4sQkjNA",
  "key7": "4ySzBh7i6RHPTGaWPLKUL9R9Wkh4Q3JxGXbNcP99HnTms1j6oD2VucT9qWkZaRSUjJLLjsEZUubU96RrVC2FtnEu",
  "key8": "45mNCLEfTKakruByL5smbPHCGsgfgUNkPNsCzTHAAyWQU95jE4MpojaaFrSoeRKcJBNNBS5kGfNPBEuZiDfcugLZ",
  "key9": "52CKKdFLMukWw2aGgWbkpyCXJQaQvpLczZXTjavSoZaCCyVsHnKWtLgG6riziP9VjmHPJ6qcLAjmuqjRGa5z1TLt",
  "key10": "2hynqR2m884j4kK6989VvB6XjZpXMEVxA8AGFPuWpxJy8XBpAsv4WutariRDUny8GgM1G3Dvj37ztV6JaYpKQDG8",
  "key11": "SHQ17Etr8aDHjqERYJB5dBv7utJRJsyn7eePUNXEhvTn6S8PWnvsMUhTjvN79ngBT8BuwWdbGBwYu9MyPdLgG1C",
  "key12": "5wdvr2dZqrrCzHF7Zt3o9MbAUj7UJTcbkbD2dmPKae1C98iZa7UyYzfND62dkLNBjFwHUHUsjWtfSsZWfjHhHE9E",
  "key13": "2csTosJcVbYbp9zhnL1iXBv9YxbDgC9MDZtnqxeDGrJMr48C1hSJgobxfp8b5FhNacf4ccwwE7PVVbbn9RqaHSvN",
  "key14": "zsDAdetoLo4aKcRFtCSup658Q3TukZeLiCPY7Uhx1JRZ3grnbXMNGbNiFawu1jBqWDx7CcdJMSNWJ9RVakBTZ56",
  "key15": "KvSzYkTmH7ceAVLtBVxNKVnyZ5vccaogdwjtAYJWZxuQspda6SJKrWfRwxTHLschFbvZ7KM5PLPbX7B8Nyjo4gy",
  "key16": "2tH5vxrFPungZCn1p9NYsGAc5v8shivaM22LTsdriuDSAvVBBSBLFbyQH9SMMtArc5u57YBafB2A5Yj81BP4Nin3",
  "key17": "3DCyrNi2VMhEA3pNPUvg7JLWLXywrLnvfeGZ8DqCNHxvp97ffq2JoX1jJ1xb1eZpZPUAAzPhWDX6bYVm1ZGTfaJs",
  "key18": "3zPYk3neExn76jmY6KmZfp7CUd26mbaZhCjHrDP4AAcTRFdpZCtoZqKL3k7dFzMfsPeW65mWdarCfqJ29VUg5ZTj",
  "key19": "2yXXoZ9oXMWnicj2n66Gf6CpUc2Sp2HWgMhgcvqbuk2UEwsPKsGBFHRdeB5swuaSdR6zwru4hJ9nxkBNHFC95x9Z",
  "key20": "4DPxrV8nsCAc5TeM1eidhUM6mU7oh4MMpTm33QGQztduvReJ4oa8cDQiJet25Q5FuNGhajKRaMH3t7B3CbY8WFYd",
  "key21": "5XRLWwDxi1HsR3Ty6xh372HPKhQi9R56Ht2pesvEtoUrrKyRrjPXVjx2KTp5qUhZeShPFB1YWVfJz6Gr1UrctJat",
  "key22": "4QNfmSWNGSsuPnfZnyzPk6jYztTq8qNbdL2d71iiMQ6m89tWM2RMTZsG7y6q3rRh9U5ywiGmAM646RQ9G4QgTJNC",
  "key23": "RecuihHCKfcWyZcYC1sNd1DgB98CjTpcfgFcrZ7ehASYD6v7k4gURcdcN3XyfLfR8cEByuYNnr3HjgjMGH2jgtz",
  "key24": "2W6MLyqp8Q4JBC4u1VCboaFMFGo8iLtmLDfreXoHGkBKhi4KX3J9jypHLpMgnBa1a8aRWMmpnW2w37VDwLXVvEjS",
  "key25": "MZJR2zCZG7PKJwuTh4ik3FPGHXNr18iZQbKmtAdBn6DsY7CSVRjwGieycX6sckDhhRaZDPec73CoZJn3uBCwYYm",
  "key26": "3bv9eNR5K4kzBVPWTyLodQzDjnU9V8CizWjZr2hkmydNVsUKxtDFGFvKyTpgCTf7k6bB1p6q8fWbvzRBJJ9HBpdQ",
  "key27": "2bepBk8ytomZGAJ5aA9Y13P42AS4BMFAjHGrRASxCnTJtnQ36caX7FPVCN3b8XoavXBTPjWNFEP2wyuFAoQfZDi3",
  "key28": "2zcxFGLZyiPyzqPgJzQntx6kKH46RR4fFzFomnSShL8ME354Z45mkTpZCJrxdMbQfefSmB7S531nmGpZmmFuk8L1",
  "key29": "46gvAnoEifZXEpM1ZLYSLrf9NQXYBftTMKPUwwMQRGkXa9j7bKGG4JAQvKWuwNwsTTU2xw3zWL17nVdCYYqqqqqs",
  "key30": "5tmNM9QiT5KELsV7yh6xfxyGoBXTvsuWBffZDyxsJ7rPAZ8zWD3CcAu1juhhmoVzXW6dWKwGpEKpN7wYmA8f6osT"
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
