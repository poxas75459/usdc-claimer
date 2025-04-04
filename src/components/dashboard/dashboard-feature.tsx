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
    "j9DMTe735zhg45fWfGcc83sveBXxcPJkJGG2SdUgHGVa3fr7pEfSnyC81ZddWqZyVQqmbUmZrF7UBwfRg62XzhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFLTGXDDYnEkWg5fK5HdSUgYP4UNbjrDEYbMev7DdCiiKtgaLGUYBWGVrptg5ZxCWzJSU1cauQJfqppmUAJef86",
  "key1": "3s5kR5W2i8UArULHLvZfFQ4Vq6PnE35DHEkrMC9Uf24cXsFH48SYZDB8EoPZ9HzsWSEkFf11xbinsuKHkCpZc4wr",
  "key2": "53oVfJi6NXbhX2ENxUqzDRcVbbcbgKZPevfd8KG5PkDSbrMPSXRiFJuEZptPKLrNTLWrsk2YfLefiiHt7KVaU69C",
  "key3": "5xNeBbp9ca1TxryWMMAY6RZomHRS73URPYErweM5fTgvTywjEL3PT8RPyrZtAFtBtxgtUGJWc3DyG2CAnE5M2Xnk",
  "key4": "27deVBvVPZd9YeFhrRyrhMTTzcyBgEZeNnWj9AoLhZU5o4MRA7iAUnVhSVfgVsBxhMHU2iY1U9LA7UMbVNQmHhkD",
  "key5": "5EfeBMZCuAFvkhKpCKQ4msk9cxKYjkRw7wFD1R4sCJ3DH5rDXzFpc3u9x2MewobidKZ6vA8hC9zr25JbJzo5HyjJ",
  "key6": "4mwB5618uEjGTPQ14VF6ZXVeXsn3wREGrws7GbQm3eWL67ejCN87w4jiqoSEdFyi1NNAPn4rLpZ1eWVRfrEy21XF",
  "key7": "3vqj7ghMy2s9GTyTYm8D8phgERFgn1wPfDagM2MRHG2Uknw1KjdU7zbrZRRWCv5LYsgYQ76vHZvjYR62WXLKXYKJ",
  "key8": "2KwVCe1sU8Gj1uCDwSVHA9CwQNqsM6ETrtqKAtpw1hY2a1cYZvDy9tydGe7QjXs4CpT6wxFFeJKsFuh368tTcPdY",
  "key9": "39zqNJqbBDWmnK9WNAeQ4GXAtB2dxXEwjQkYXc8LWTtdreKC2hB13N3747hzKn2V8fWUSxsgcFUohJBwSUHJN54R",
  "key10": "367fkP6RRhWscyqAkPdYv5kjkmVkRSnu2CM5XfLxZC6X6H6UbpA9LKaehVr1WYhnfBWChLc2Cx8VVpoLnjindsC6",
  "key11": "iTsPAjPLsYgby9kW9FDC13jihiENB4U8xNPU9cuTBg6QhGKuXPbBKHp61vfkGdt7RNoQadtrwsAaETTY7S9R6D2",
  "key12": "3Yf9TpeYq3tTcYRJGTTJ6AbZfzTMAPLeRBLcDXKZt1SVqYtMRFMaeKhJY92iiSbFxrviFSHF3vSht1zsiVns2SnA",
  "key13": "5iGyY5UiwndwazQxVdgoLYr1M8eQDn6ipEu4F1HH6QuKyQXLXxAcF3P4zHNPX6YX6HEArLHPbGUeRaLpty94GpWH",
  "key14": "3jrm1s3gsrf2J4Z8QmraimRsDMJgfx1m6qBPWat63T3SDWHivcpvmEG3Q4zTFNf9KEYgDE9oE83VHPLx3KAFBPLP",
  "key15": "2E3GHVDtkdZUYnD1igKY61ymgtuSXHtxBqWsAZs97zLx19tthp2VXeTVueJ35Py7aY9oMfkGZt7bvhGs8MKTBRgm",
  "key16": "2Dd8jrUFrMXthoJNpQvHm4XTZWKZY2QH556w7qyghdiv74NdaN6j4K6rzwJ8QoN48XfZTNG3ixJqCx3mHaRwyDQ6",
  "key17": "33bR8QxYsQ6TPeU3GbpywrsjeTQXpeczYTwg9p6RxVDP9Tbp2CxkX92ymhpEt3wBZy7gQB6dDDePcyNe9Q4PAs4G",
  "key18": "vczhU8u5XBuhtUkcae4Tk9SED7rE6ERb3rb6YQ2ef3jVLFet38wUyLAVH9hQEpLKeCZAvMXsCeczyumFZ23kKz4",
  "key19": "4mgXydhweJujxULoK4Ujas5syKza1XYFvQsFaDVZ1Xhei4wrhBPXXtpz9xVf4mA7K3MH9WNuD2mYfRNLZxvoRbF2",
  "key20": "4sKjUbCu7efr14MWEEHezwvWSDGUznm5gavfCK3Sh1xytj9zKoNoAU23RhpBbc3TK5ApKMJGLUVe4UhbQMyRwczA",
  "key21": "4iiK6FoCdME9aekVL526yQt9PvMqD6uou1S8mrEAeJ234iMiBkAdt7iPsWZgExmLUPXHrWbNTB7LJqZinHaY1E21",
  "key22": "3bHuH3KdXYVjKLytE49JEWGaocU3kpDj7eGpi7zxvUWPcAjMQJcoNYx3A2bV2H715YLxSnwTKmzpovgo5KP1K4Mu",
  "key23": "411z5d8BTyA6EkhwHQKBJv5M3JjRqV8iT2d8Ut5mDYdaZVCPwMDtVdx6eC6Jy1cJeHzpNyNUP2rKiWVu8wTD4J1K",
  "key24": "5Cvp7EKafppiBky4RbCBUNfvShDHjdgWD7oJj8CJzcVgPnUprMjezf2Q9mspnSL8bEedLB8FBDrfqMqtiVMsmkFk",
  "key25": "2wWFKD9992TUmJo8CC4jF13gTSuuFEFbpARaeMQA3725nVnSk7actH2wDeycPYb3G2z1sCcLQDkmGZ2r8q9ZnQhy",
  "key26": "4BjRPcZiKdxXgcsWcQ7Cm4Qr5LAgBcDbWVDzCSQ34HiYCMeym1sjYfWaGwpJru6Dkbafq2GPhwowMC81TmGYcakY",
  "key27": "3DPKFXaHkCB2WwpkiAtQWAjCeU2gTbcTYBsbyxiAsXTPcaR8pwnBiXtEjXYgj1KfMBzuC3X9ytj4Qnkx7ZcSZM7h",
  "key28": "5gBFMsrU6YeqcqHL1GECzCH1JgUfJiBG4PiuNKNV77FmnC9dtqRmAjyRSxGp8PJmc8gGYt1sxKfqvwrxAEmJnKyQ",
  "key29": "mX1mENNnStkCjDxiqSjJwxxzWVdzZgdKqvkAJu2haFjaueCBsABUtqowH7gXjP7k9wP4WEL3hF2em9vU6MnpuZT"
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
