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
    "2gPfc6xFByqQZGY9Y9kx2aBWEUeMRN3j6KD9LH7Kd1B18Lu1Gt39RWKdHA4AREk1PzmoQxVUJQmhLfjL2f4tB2Gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwWkGDSvumcaf2ZSfaZTS6cxmfvLAk1gZiEuJPFKNf4jaFrCh8TAMBdRjwUxJbiQFJFwJjYjNE7AqycgyszRDYf",
  "key1": "53WaDcRgC43BCXctxmhbiXK2xLk46rYsFZU49owwnQ9r7zrz6JjZhgGZCCbLEVPmU5pJVd9YsAtAvSV6HbPuLCiR",
  "key2": "61wVdPaRiqZ4RQzWS2Jnu6boQNf8W4YjvbUJrvEMLiUFpAZ22QTfmS7nbu2tGvNdimVpGy7UtBwBJpcXUX4CvcYC",
  "key3": "2SNB525qDSUmAjDuM6o76keVmCEkTj3wSQZkYEV29TDXn7QYPPGZMLWTKxLg1ioaM8tbcg8ySNnzGcTFkiaXNPV5",
  "key4": "54XQbsEJC1mZ2jfkspaGE1bT8ebZmBdiGKG6ykRAJyTKJyq2yCxLRjHUhRQYbn4yU1dwF3Ue77zC1BRW3pi9GdLi",
  "key5": "3jdXLq1qoifKRQbj7VDWnkitKN2f5dRhuTUZs985oe9WDmTP5ALYWDLbihHhaom2Hr5JYcbG1GK5XKB9BJoNz8kP",
  "key6": "5kPFVefVEPVm3sKoYkW5qPUtRn3YA8rJbE9bae5WV4Ms5vJb19ovqLDkEDetqGxDzsF9uv5pDdBV1rPKw3A1cerS",
  "key7": "52ijWhUkFcz5GzDSqqfqEWxkSrRxeGN68nFbErfV64MEPUXx9SJntQMe2AXc5QinNmGpPDfmfGVzP9NuuvprTpia",
  "key8": "3wwuT6NZL4eaDeW6PSfJn8mMJpA2oTiPxWcCc9AXdbCDh58Ee7GW6LsY9i3fvectRRHaMzjFSCp8pqSfqBF6YFNV",
  "key9": "2jaj5PocNLrwzEo1Z3BJyccYJ77y45qVZT8gChnNnrMLfQA7U5HcXppknrfHEdwfkQsEfq5UYMzfr2746huDzyMy",
  "key10": "Q543abaUmkZ51KfmWQwsXvJogUg1V7CKWVcQUWgr2zKMdTuoURjsnEyUQVoBCuBcBN6uemDSn7XTRkNBdbQT9Mg",
  "key11": "2XyvMR2b8jydx9BMqcRDXxGEr3xpL2XNajVPVQfoxpJv8eJdQc13yAFEqWkPJVRpKP5gZRD1qaTZXp66VGkk78LJ",
  "key12": "2banCJZ8Rd2qnxPztH4TywkfRJwjBPASwD3ZSG1Pvp2Fdts5WbQqxeRLhGrtjA2U2CijSQixdRyiPL8H22yuXScn",
  "key13": "gS6YHDkU1xagqHrjTfwYfybweHxgqbQjBUQqyXdBnWz3p4tCUA2V8D3jT6nVFJmdJck2TodQaqLE9MFc9QcQdQh",
  "key14": "3hntjDtUdyS1s9PaseJTHwvyi1TLphtoLhaGpZTE2eDRanpqZkbuXPNgknPmUsDiSwpx1cFq4Abh47HKfndcwhbS",
  "key15": "2hSZytjEMumVfmr4c9SA2HhvdxPpLe4yfKNfyzC4MiXMbuNVdvixNKjQGvvUQc9CK9J3Mvnvp9C9hRVWrc4o8AkU",
  "key16": "6YDpU9PMLRXvF7uYzWSe7YFpxqQvPA2EAyRrU6aPDpFHUHkuVwHzxBBpcMdZwGeBXByfwGTH7zAFJAryBD18oBN",
  "key17": "5faAduxvFutpu5eSyxTZjvZgDuaDmbfRS44HShUfJAcEgbFWswqQyj7LdCcHSjiyiNd1DqWLYsuZ57CpUnQaCmvt",
  "key18": "56E2boj8WzgvpFqYP3AzvDUzhs3avQHTBrSzkzfQAyajFdV1Tbu5pLZChnH8sX6NAKaToCiKbyHbmb7WD5WraBPC",
  "key19": "5zH8TA4RP23P7DQm5wVNTBSbysMHHrWNHPUDmayWmnEMLWpQfCffuwLE5AL1Ti5bGexdebUQnC9m8ecB7G5uQLi2",
  "key20": "5E5y5tX8cTyFXk2RGa3pjPDe5U2dgJjQwQRY9ehDEUSB9HDvJJkhsbfSYTax79CpEnRErgCpvVFXjMorPsPmADLD",
  "key21": "4DUm79MiWkTQdPayTmVJaqQFEMEmvkpxUYQQsKZuGWNJo2nGdDBKiBi8a7TDXFc3qYNe2W8CQRSChMuy5NjSAe17",
  "key22": "5DCfWYFxMiAjj3QPVNQmnLF6AR68qF5PqKufb9V6vSpts3XNRv7f2sYnjsf1WHqfnzmMLBonqCLjVdqknT6GdBrZ",
  "key23": "zVSLABvGbyHtedhEhQwL2VfvYZjTrENsE3CbRkShZBkLWSubw7sZesdSBqG4so3Bt7jiaKdG6L2swd5w8JKbTMd",
  "key24": "Z9URL32SDB7GL5WbsCVfWoz2fYjznb2NipwmpuvLdRcygv56f5rFJJVq4Gz7b4UR4u4Ge9RA1eHptk3JTpTpQ2u",
  "key25": "466pdgw1LMMY5QP5Cn5nFzCGFG2Ns6mZy475pTg23cMknSnrZfmnpwVt1qMuTMYFudC8obYdQWR8nUiEgFH6uvAX",
  "key26": "3i5uxR68jAJ3gUi8i7q64maYvACXPu1ZYjzk7WCwiGW7pEfVRRnQRoisM4fC4sDWHd4ATAWLc6qTuzHqTiEu9YpA",
  "key27": "2zjvUn3HNzBYMnuDwnf8DHHupdxN5ru7Af3eZcgj2wMS92jH5WYhR226sEMc4VST1YX3wUQmrU2i2H3PpP36cmMR",
  "key28": "2gJmoH9NhZRP4XweqojtCrsGh7LBkJP8XFsqopHqBrShccPWvQXtNbjwD4pa14VZLFW6Nnux2DaYWgx1ajh5MGYJ",
  "key29": "2gHtFx96shSxHdS9Ze6fnNXme6oJyp3DKUVBCNKQYVkGkdvTPjzzyzkmMLRynjp7c7GKLi1Di6BcysVvzYKiVoKW",
  "key30": "3BLDfrRfRgRpAXoUHsLLHdAQRtbaBpsjKdwjGDgtcM3W5wCfsLXTQyiCzMUrcYvEKbqRKz57Ko4qkPz5PJv3e3C7",
  "key31": "2ehVFtDHEQEUqEYx4Z42KQJrwHQDA9vK6oBHuNBPG9fViKX9GdRiytFMtdrBQTzYVvHstPy5sb44gYTxXRHRf6fD",
  "key32": "28K9MWApByU66jGAobF2ro7GRGfE5o2drSSMLYBXaoafMkeoqFAgz4SZjgMaKWto6FvT5ybASPdoz5ndD6w7fgbT",
  "key33": "5NuSF5uze2JZ757hL4HeMj4CjwN4U6XhivJBogkKt8Z9aD3LZmKV71QoX7qxArzfoAc6yMwyt62QhB4GXGL2ufVF",
  "key34": "26vCGhS8zurzghJPJvcURFAuqMXGCm3WDySRoWD6C3AYWcf7RYcfCJhgd9Yi3ssDEaCHX6x8BreL3NVQ9xhiJWPn",
  "key35": "rJyFZaVeswTNTtj9PQhu8n9BSxmDD8tNHCzHpWxenKoxmRaXAVyxceqseymYaEq1zokGtnBHaSdCrthZ5yctXaC",
  "key36": "JYQexP5ik9BkNGvi3WidJXWs8HbY6SSsqMLwUyYQx4g1kRANpVNyLH79A2EuaswzqaSuF5iqWseu3fixhm3fpbw",
  "key37": "2EG7rqBA838HaLrBHnPxQahhkNkN92CURsfWPPa8YSMZLTFZrzKrTCX3QWRNWwhwdG8xgSEqbnQfYDVs6tLJpcFJ",
  "key38": "2zvTQ7zLU7qyH5BqQPTTmQLDJqZp3pWTrr3urwpftF6keEdej1H8LHk5NhjEFxv2JJLXFtM2hFCrwh1tjNCKbY41",
  "key39": "4BV9Kx8JG2h1sPrSg89t8n4Mh2SSakzmyyk6CQMVT1f7YBFkiEmQWyKpa6MmVfP93BhUgzHv5UNvRRPBK7TtBPLF"
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
