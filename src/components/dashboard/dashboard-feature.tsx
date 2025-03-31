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
    "5PpCPPzLMPnRWtw6deysJC4pvkhuctgE5uRq4mEvyzTCy96nc8AGEdbHaSMumCJBBgiwiBNcrmanB63ncgMUpLgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9R7qupPHm6jfD6vcfSTJW8hnwTVswEB7cvfPtjebqmA7o4vVdUgd3w7NSaWpvoTU9x3Wod6FkQPtcHFzLMv8b8",
  "key1": "5hN6u7sSpUAReW7S9fgJGXokpUK8JD3sfC6MneBABSkB5SzjEmqhhP27Qsv6RsD1fiLuySdbJZMkKhN2uVMi7Sda",
  "key2": "5ScxVuTe7Ti2gXJduCGYnJKigTAiNNhcgwS2zrVAF49Aaw3Di7CKyhs6u1nvPV1nBG1TfgPH3TVJhQVXGvwXjxB6",
  "key3": "33NTqpGpJxn8ss2TauYHbdMuKFtM6CPMGtrERc4gnfMs2qGnusXpZ4ah6rqSfW5zMYJJV4RF4dr2LxDUgJuL32o7",
  "key4": "2J58VhPAJjN6o7JsaA4Z5HAbzWP6f49tde3k7Ss9J8YM26z3yfPyvuGPVPkAob3szra6LS9mDwSKSKn2UhGXiXcm",
  "key5": "31jaUEeBdF4tUcmLBn7PLK3bSwBHzN8kFQWc1AvR4ws3QinPkk2h3Snym2YKgG8wBRyog9wf8uKisF6PSnpVxdha",
  "key6": "2DNXmUb8Si9aT5XtzSiRpgv2FqVACttwvHrfTBC5pyAnDaW3sEjzBYUmUUyZLUUwFxzdKoPeXCnbPUNWrpmCApoQ",
  "key7": "NUq7zWZnL6mCiPkLGzQZMhtG94GR5hEn6zEyqV89aTKa35hBpWfNHoJugrfiMFDP7xPF4BanLguTyjBbtQZYtk3",
  "key8": "3oMrA2s61XifuPbrspNoKWmSD6hpJJtn8EETChJmdMpc7Niv1KMD7mZjMyh7hxJnqZUpvAf3HZbEWXks46tF2UnE",
  "key9": "5WV5VjipVZeoY8ByTXgqK7pPZh8aSePRWm5NHLmRkb7afVyeyhHmFq1vAgK2M45j1gt2iqbSyN8L6fgqkFXzg6z4",
  "key10": "2kohzD7GvUwJuZpBj4cXumkW5WqMQxFKyDd7GpU9DkZ7tRZLVGriqEReS83zuukioCnD113r9HT2pEBMi6wRfC6P",
  "key11": "39yiCL7QxXZRcxLyoi5bH7k1M8RT7rbp6oC64R3JZCjViXfFjds48fjBLWyTvAScopGtBqnBJ3JQ1iDRe5GKsQs6",
  "key12": "3hYEha418KAbBD4JvY7QaeSff7aV4naBCtAvxcoY2jr86fCgk6D3gegcJg5btGNbYgoM39rRvrrMvWPDG8QpgKk4",
  "key13": "5XmAUUQN2NDAwBzRLhuUhD8ke2yfP7bjhzo6HrSeuM1YQRxWQSQZ1rmhPQ9YZAVEUUbTA8DDGMqYwvQRRzpbGp35",
  "key14": "2gugwo1w5tLZHptFBBPVdFB5rs9vAGSkLDtHGMcjuTmT46996gnCwx6H1uuwjJbQNyWvoBuVjY8bhoHbp2xEaAeU",
  "key15": "4bnqovToH3Do5Pc9eP1rxWYqDDT9o1giBWLUnyGtFSStiistDbjZMxoNkDvboQJZPQdVGztaQmTNbyqmMzhhr3HW",
  "key16": "4BsQ7bxWW6Nq8iHCwZRPy7dwD3xZ5nia3xJWHFFG2ZDMA9R4BHhSEuDHvy29D7FstknJRry8usz7CYxKEQ1SB4QN",
  "key17": "5B1cnNVm8i4MPs6WV1TKxvJfQrwe8jZroxvooURMoibuHPvHDNwCuUrWvETuuiebS9xfibEYbuxpy1Gg4RqDim1X",
  "key18": "3d3gE32xJC3FyJRZP3h6TjTWPcdA3iZ7NH18VA6ZodvtsbZGP26sDcfbJhq3LriD91c58StgTAqRBGXWeyLjwC1k",
  "key19": "3Dvv2gBBGnc3hcuFh8AKJHi6dKfNhPta5GcAk9wy95GrG8Nvc985QtYudAjU5Mg94fPqzABZmdTLttgMRdonURr4",
  "key20": "5kMZWAmU7oR929Hp8owA4oiQVAD2HKNcAyWBT1tptDVhExboHcg1xL3vLZ5NLwJ2y1Ev4qxnfivWkuUCA4PDnFkC",
  "key21": "3XvKKRx9nVV38deLSYvzQW8hUdCmXx5HeB1rTjtpkym9rKhhFehQCFPd9BYTi6WjfZtRLGpzMUqeYyNnwG4i6SaJ",
  "key22": "64gN74Cd8JSQ2DVrMtuofp3EX11Mj5kPFFh6n2fJukpjBKUFj1yWD2Ry4QnydLrPYwZwsnhK8egaQEsPnPNUZcu5",
  "key23": "4Dg5LzutFh3FnrrbRVUgJ3XS5fNQKXgvCEC46BdsjUu5dq35wBB6ffedRqPp7HVXj6qY5q9VxJij1JDhx4b8jjnE",
  "key24": "5MAWK4qN1yEcTm6A1vf3hdxrcovEiyqnDuznNRtgxARyMHLyaph4BdozRtxrwHUtoSdVSTm9qX5ZHBRNrrN3K1Yq",
  "key25": "3AQNjAUsvD3nSZT4C1TtyRwvrsdz61hndmdAaDUnaRkveznJwBAziVuzAkBj9awHPML2QSZnaLozFB39QFh3GSgq",
  "key26": "2u499StfcbTUkJ3VSTks9rQ6jPRuoPG6hg86hRG9oSzrurmVs1Ft2E6RNcNnzBeBkMwVFEDP7YPApsSjF63faMJX",
  "key27": "4DGoJ6xvddDcLB2Ukcfj1zvJQnUjnHCLGBcPAGCgFtktQF3PDn5pucMbcNNdT3P5uqZ1aDfCtdYfCR4uJtR5YB1K",
  "key28": "61BUjkhCjbB2zrjvnnNh1f31pAT1QP2QZzjm7jwxLtJh2XnmNMYdWBGKFvepBLoMnWKupqJzX7D1QSUggkooZqLt",
  "key29": "2ZGavj7cCNuXyUWCQD8jWuFqLpi2TGPSazsRNkpPWb8ekDaBouX6bpXbmuFTgrU68WvBuWRAaEfb3GQimFy8NdBE",
  "key30": "5zxFmEHShUiQeHgGxabRaDDoAvpWiWuKzZiq25nz29L68ZgYkq3DCKeHAwFJZkE7PgDpeQEzqHx5eHgWHviR4jdb",
  "key31": "7GfgXsFxp9XT3FWF9sjgxTchdgpuStc6jBG4ZAS1NqzSBSXZ8CibZNq5BNurAC4DafJv2rkGYyp6s2vTUdb51KX",
  "key32": "3LfHH6FJexrYaLAApNsnApoFMgAHxffhTwapXDMpbBSqxvdS214FdFxvLUa2NDQbR4PuA4HAkYDymMjFDE3fp9f3"
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
