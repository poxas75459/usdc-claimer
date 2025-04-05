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
    "3r6362b447bo5eciPStK48AwfyQdH4DX4Wpc7kLSi6ck8ueuwARccD6eyQs65k8w1fZwsaDpu1KpJr4cVp3SC69e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aever4z5QRM7CmnECyqq2TxWAJsKUZP5g1k2FLxKD6Jy9w2w3iXGSpzZXWJaJHJaE11ynaKC7Jo4An1TKbGi6B4",
  "key1": "2h5DtRFBQdbhGcYxgJqVQqCPR3zFqDJnjsJDYCFM4q4f6Nz5itgYFTWAikTMmfwfXwbusudcBBJEsopWzZVMRwXB",
  "key2": "p1tEz7S1JMj6ucNGc6ZjrvST8pMPDyqstWPqxhrFtzbWgkH6h3wMSuWhs4nqFkG4qWxXN1c5ZE82DriRey34tGa",
  "key3": "Y7ZPUTmP7KpZcicN5uRN3TWS1PgccZaBUw474xvCUEz4jac47gATa1Bu9V48oFoJBgCb9vrRVBLNCuK8JqH615V",
  "key4": "5SzgmsnPXqzdiLxCEeHGsVQyKH8LAfSfegZHuEj2DoSAxHZqSNhzYie6RaehAV5arP36W7aCDTf4ye8bzj7og3Cd",
  "key5": "55aiBdx4h1jtSATmmU7Rq7BvcvpBZYw8tjm5abkdtABEvtSvkhMPGvF7uq5sUPM3mZCrVucmEnY1igoLvcq97nwU",
  "key6": "5LkKb2jAhjb2mCsXD4ffVb7Ajr4KFDuEpLSY6YdQsrurqkaDoXsNCxwXmyB1nVjm8fEv4PHNk4VGzaEodqj968B9",
  "key7": "5qtAdVhG1U7tExXd2mg7T9bWvjrb2KJ3qkJnXHFXYvEtheUHrsiuXpGx73VBToQFsLaKrU4UaT2wpWaXBTpSYhhd",
  "key8": "2VgwDfeW4tyV87q1jASUVz2X6TdWmMncqe6o87tSHJaokz8kiLgMsJp9UYEoVWgyYxknYtVaUECGQKXTWqfMjCFV",
  "key9": "5FyzMYM18BVv9PGx8eyzKBz3hpbz7EsgBQeYsA7quu5x2VFZZFfPha72VD5C664U7v3Be5cTWJ63VU1mTSdA9g2R",
  "key10": "5bqLCUg9gY2CEigXxZJtZg3KapnsyTPtsPDRXntRi5hQTUFiCows3Yk4FZrMaRCzmpn1oX1x97m55fFjYmuaUYMh",
  "key11": "bwfCeLJN3NMDWZC4ZJSusC12t7hiZzdxJkvsd4E3v4qiPJ6XwVacfzjUGSU1HqzDqozSaYCeBV85fT6RuUtvTTi",
  "key12": "2ZF5aG9Fy8PFa9DqESMcx7kTMmPZoRHcBiCNuS12ehMSrf8bRMgfAbDe7yjXjboJo5D6NFKuxpy5XBwaKBFHQFF6",
  "key13": "5ecR4mBJT9SfV5HDtHefVaAX5XSRc2Dn9FLt9SrGJkfksfThBV1gw8yBzeD5YYMwKous2B8Z9G6mixr9x9kof9Bk",
  "key14": "5NZAp48iZ3WjwBeiKkJsRf6Lc1ehPzEQ3oxA8VHsXSwFKZzQZ5T6nLuBV5dzdy9hRBJZxQDxaLwFwWzvFUJjAqFX",
  "key15": "3SUH8cd5yL7A8uGVhj4PzZpbJvNx2BAh4UUidd2eyLY7Xt9Ee6g5WrKZcfViX1hjuPWKtj2EhXMSx6atd21Gowgj",
  "key16": "4oiY9c9QSn4gW6A8Y4FazvxDw6ssHVodd4jUu7LsqfGynh8iRToXwbtbyFHpxUAxqXhYgLZTcSZqd1SuFs7DfS5E",
  "key17": "2C2CLapscLJLJmmZFxKeTzeh3cAEA5HPU2F9krvfghoMrZRdxJAxHwEQfRDjSuQrdctjMLcEo6bZ6xTREJoHFhaE",
  "key18": "27yshMbKR2VJ3DxrgMmRpsfV9yKDTbgRGv3Qc2jXtFQcDqY6Dm6umy8fTTrx9decgBPPU6RRiPZSKByEYwfCWoAg",
  "key19": "3oqf3Gp7TvQVFbkLkXhkEgkWR2xioARDR6Wuqe5rf5NJKvegwNbBTFkbPNNsM11aSS2WrPR6E1C6h8ko3EvKSjM4",
  "key20": "3rwqhX5KwJ6pz9rw1Mk95Y7BPP4idmpG1625nCJ2eCYHZ8KQ3PjwB4WZ81h7yN5Du2QSCewAeo6JbxsEsEmF9DPt",
  "key21": "aqMtFRpoUQFrhtUYAjkzvChGywk3opAqJLYgceqo7DuR7STmELGDsynVHgXvskeTh5nJcCotuNn4976FuwMqXzX",
  "key22": "5HMkyoFTyVH6Ucey1JmKsr14Tjp5qUUKABEaX8QMvEPGJPrvFfkqiVHHQ1DdRYjnqL3xk3zXT2DoQDzhbZ27jUiq",
  "key23": "kpm2pJBmsa3ik3UF8jN27DhzYCduauPvXWhnMxp7idspiBKqYsj4kt7LMV1nchaLmSa6J417wvG8Ng5BwPNnPf4",
  "key24": "ScBqecmnktNgjTVqGtmEsFsJW6yGH4L9X3JZer1W5VSoyQke2ifmvVxWMeifQ5J6RDvA1yXVSjXM7FzfPL9jmX1",
  "key25": "4QYYEXCNojfvPk9pamLmdg1Txtv8ApgQXCfXdES91HPLzGHrAsx8Fywwh2Y47RfXqy6qXBvpHBpbUcYHq3VVbmMt",
  "key26": "7FPHFRbYBziUwcznZ9NxSy7Y657wb5JTeua7r28aSJiRys2fBgpgdtWBGkbzGXrBKJNuDuQzMCpagsnazvnUXUn",
  "key27": "3YfLexT4s6sJF38s4cE88pTipH25cDuTqeLe1B9bjW43oCZay3YDJD65dbdDiRgQdg6Pf6GVLmYEVhH9CCyuubzB",
  "key28": "3BRM6ExCJbPXqPd7KxFFT9CnN7eyzgQDTpFbaFjqHFXbZtTa89jmJucpbT6HBF8QgM4nX3ZjT9TCA2eo5pmVBCnp",
  "key29": "2wHFJMgeaoMPfEPRFAuS38qSzmfK5SFYPheepcNa65EcLNm9kMLeGuSKaBDtsMEuVUgLMzNjQbkPwoJAqz6Pt7dT",
  "key30": "2DuLHJ6tKAfcQ9v7DNBZP7hS6sPXvpEuVWCyAFVxR131UEMjwokAeJYAA2mwNXmfkQcqnjoxE1u2h6YexDar2hJY",
  "key31": "3MEqrMomFnyGtynqGPWCrzXZtNaBPUyh5pUViVVxgXA6nNNmhK8nKUsfaEe3mh4tigczRwMAnQGK3Cjn8njzfc4H",
  "key32": "pKd28xNEZfiMCzVQL1uPUfHH4adGc4ap4vvRiWgQK3b14rrz7q1mns7uYJ8tmCeu638vvs9xMnfsZqCwyCU97qa",
  "key33": "5ngzqyPutLvgUaNcBdwdmAaSjzxAiWd1hxCqDq6sbdaYo8672Lur7bEHgLWAcFWtF8kLmJB3wSbxSJCuuFgp9S9G",
  "key34": "5KZ8n2a5TvahA2ohk2Q6JCSaztBehoKLraMvpJzC4gk6Jmws6UL4c5uZUt7c8aLKGup6x5i19xAzH2dyhVJYzsN3",
  "key35": "2hr9PfAF1Vz9erPY4eJfaTYv7SU4Fw3fXxb4KrGwyYS7a71aJLFmSMLExovAhXDFN3c74y2Xtp9SZbB7tKxyH45J",
  "key36": "3b7bQhDT8atyNjNg9LbF8bt6iaDtnfoc4k7VZtThjGsemEuSRhQkyHKRdhJo3zMUhjzkBuveZMWbS4Ggf22DFvjX",
  "key37": "3YmVuSvHupkpuzgm7jMFWskXip8w6pBoyS3KP2yNUZ2Jck7bT49Xz9u9kw2FNxsWcMrZ5eifih7HfSxUJ7ATgARY"
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
