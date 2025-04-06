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
    "ZxwobiqXL8ARqYYdaRin76WZgkKRtaECd5sVTtjhYWuc9tnsNy1tiQgiHYyeuJi3PkMdBdw3HsXofv7Nztv7Px8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBPmCAt5QMc8qpm1vQroxZu5xehL9wGcZfeqKMzUbtSLKSZke6LNsrLvaz5jYCE3HAMarfK8GrWFCN87boES6Ln",
  "key1": "gGggUUxvLEDCR6bB3zkKt233CbjjnTVayJbC2qbN9uukro8F1CuKYUANAqTPAX9zatfqHkqF7jU2eftpQVQfJPX",
  "key2": "5hGArRoseV1b3K17ViNVeRqDUvxUKTJtymLkGVeWvHh3bfew8LUwGX5NVV1HVsdTwiKTzWBoVUejHhepz2KCp1qp",
  "key3": "2rAvrNveVVdcMyfn8NBWjfHpQ3xeRNgmrgjXbcJujcZXB8wbmJE7qywGtAyEvTkWK3Ge27ZCHEkemBZKtJWGM2fm",
  "key4": "v1SA3p7C7zhuStKpH2oWPQJ4VN2E2bxcNiMXYdvgfUWKR5UAP6MNJ1NEfvL4wuVP14Wbpmy9MTYqB2owM11FC5t",
  "key5": "VM5Ap3xxqzdy5bzzZPG4ne5zGUagNqbobGyhY6noJykb6uPkravCa4aA4RmcmDFSfdLd4kUos3xxnaGvZ9Fh25X",
  "key6": "q55E7SsJiMy5KsUrxw9wb8HGpkZphdc8w7RTJGwdw9XFRsx5pjSWfgauoPJDopm45EAYbodABLMdkPVqPVbD2jm",
  "key7": "38JY8ahwCysRUcmqp4H2mjWZQ9u2DYdv2ci4DsuHqr5GbYzg8UBBu2U71FHunHp7BSvbpScYvQzNE54R8pooMXvm",
  "key8": "4cAXthwoxNmD7oeMm2LQ7CmHuBXFn7Se2eNYi3ZXVV5Armt46c3k7ByceJnN3K59VWRmCpY38Fbp9iAyprpe31ZD",
  "key9": "2oMfEGFTvGMGLsWrByuNr5p41eHvAdpz2dSZfaGDYMwPXTSXXbB3BZx2HiYoCuGD9PprBzP8JpMrHFDzVAyzExkM",
  "key10": "59LcnbFNzqJTNeXa1WQH5Gegt7u7SMDMTg4DBF8HKoTPKrUHXXaSfPbZDjHkYoR7grVeLgSoy3FhqPxKvxnhLBi7",
  "key11": "NBZ62FC8Sxu5D9Z6yW3s9oEutVoYjMgoXmzrTTZ5HrqoPRNd58KbsjTSjA6qaw76nqMoKH992ngy4SPSLniCHxG",
  "key12": "nKsWMZ3DhuGShRckAdMzPS91JWd6D1RUfqtXiBYgWMPs4AjWfzChk9qqx9EMWtiQQhbUG6V2SN4L9NG8QeMgVEM",
  "key13": "5HBWNPAcCHScnFJ5fz347MMXANN1bsx2hjgomyQ1QVAn3A1eXoWRrJbtc14YToAJFiNToMvZo9K6s2UgVSwHBoNG",
  "key14": "2sfsjd1GS6BMfnZYUVvmXpLLc6j9mQXtAhwwU4q8ePuzs26b1nNqtU2a4nGgrrSctihmSDxA1kD2ijdN9VrATgHs",
  "key15": "271UFrNkg8ZTx493aZyBG6ayjzpeN3NdkMAeCJqULTgydAP4hqc5eixSqDMgajic9rf9seJWYwZXY8iknjLfxgfz",
  "key16": "2HY82fMaPvV1YUJvrMV6AmVWTDcwk8Bbozy4zT1qs7VmQ6rFARWpua3hpfaW6XDXn6553bmp3mrCYgPWSEKue3j6",
  "key17": "4KV2sqx5GMrm6ecqGsPSFTPyA3UgCLyxYSaKKTh2DMjJmzrjokNgLqUWovxy8H9GNmSm6WKWjPPsDRdrZtPy2mvt",
  "key18": "4qt838hMADLmw6BPjXwANSqZE4JXbvWQefMgwr8EZvUpWsMSYV7QWB697cddvwwNz5oUb1eZvmaW94oKGsNZSB8j",
  "key19": "2spzoXZ3NHdUKnYUq94hLqjBC6KRdNpNxwidojPrp18hHhCD694PedJSEQvEvSp6BYW88rJUV1sCNrjnGBjmU6fK",
  "key20": "35ET1xEp8LEwRqQ5hEf8uG1Um2zWPULmRDx6wiV4H13i88s85HWRttm2ScbLGZNkbLMnTnKRvvgFXZCLYorCpFBZ",
  "key21": "3Wsn6PjUeDTB2XdHZBghGRyG3UipnybR795XZz7jVD7bLv7Sq9Dq6gEEW1B8AYRKNBhdu378ACVWbu4YLqpzDdXS",
  "key22": "28bmQ8P55kvMGZMQ7t88XweCSeRjxpXjzXic2bV1GTyBpuC8QnqV1bVLokuW2VGrjCdkZrHMKVYhYtUQopcJum22",
  "key23": "d3MLGNJaLVskhmKvfZG298gt1piLxaMqqy6obKUt1PYM6mNviwmT6kSZ7dnvxxTALKwfzr2JeQggAqTVqqPoHzp",
  "key24": "2ULMY52vw2V47YUEmt162KmMsQVFhsm9vcf4YkRadMJdKjiw3UwFWAJ2K7aKuecnmMScTCNZ1fDZXQELXnE7DJA1",
  "key25": "5UT5BBk2njvLjGfW1vHYCDHQoMCoqP7Btbx23984u3X6VY2ZSCK1QpsLGw35ygCMboDjJeTny3e6uvR3BPwpnCMv",
  "key26": "4wxVedSe8p5br147cwBrguV5jpLdB6YFeHkVjQX19aUZfbMDgzVAk6X7P2qj7BRYNFxYnrqXpFcT2vEhFxka3B1p",
  "key27": "sKt6itZ1USZF7Hgxg3mGNKRjB5VKriw9eTpaVTPPQxzEerJCU4Qp7R8MrkmAzJcSSx2j3QdHQDC7AAUFwmmTYCG",
  "key28": "5XWLEnwyGwGx6CgjJbsNpDSPeYZpvxUTS5xgA2xxDv6whBEzQg9cZQ9J6DUhXUX3D9hdHZ1x8CJsBjPkpqmGHBmH",
  "key29": "4qYoSvepxPnWVBeFA8i5fpQUA34XtYBYHXo3shPjankGM9nMF3PbXwFcgz2HcyCe2soTvkY8SEMdWU6erf5JzL6X",
  "key30": "39JEA6UDH4E2GwerxGR67AqiFRi4gnhDVhQVRkjrqD6u1m8yT54wLT95GAqd79wRPB82QhvwoZ7aiDXS8nGNLU7a",
  "key31": "4jipw6HKfsRsbf1ydr1E8twTVrjZ2SSajm2kreb1PtEyhDuUQEpvvvLUd5FqBDyiPVZPTW7CTjj7dedJuUhpRjxG",
  "key32": "5mzZDsbGNCga1nDgQZdZ5fQJhkGxsUrVffj2P54msBpwdYzaKtRufjWP5RcZqu5F61aBM6JZYWBMRBUXNGdYcQ3U",
  "key33": "5TGiecuSCUyUzmJog7m6GXkuTME1hfZM6jidJuVE3qGWEe4GPLqEv5R7er4Mv8fr8nDufsiZcLXXfqxSyRETxL41",
  "key34": "pEQz7S12ArocHfAmV7gkja1vnJSKQV3JM7zn2h3csLDmUwYejsixPrBZwiE1cDDJdWDh3a2HyUq4Dq4mvys1RHM",
  "key35": "aWdAwMqB7ntGMT8aPpaA4axuPaFGBRKew3Cp5srBSzF2FZ9ikADZFo8pdHdtoBcZE4U4kTEgUnbaTeR9rwCSrew",
  "key36": "VSYBTusH2ZdKMbYd7KKcFdJTg1oEidgmC2uXXMY6sDR5SNKBEBgsa1QZLpUVi2J9VKVF19qhWvkgx413cJW2B5S",
  "key37": "4rdBWrRKDfe3ZXV5awPAVGiJwscC318yE45PWvzdyjzcPNWhCA6rozvfaJctzJ2LCf6fyXmcvbY3cxGYhAtvEfYa",
  "key38": "3HsuaNGvscHsPU3Up6vK1gT2NizcmhNkeSTSueb8EWfhmEM8oD76rgjAJDJZ5fVGcAfpkYxxhvXtRnBj5bNUqyRV",
  "key39": "2UsucHbrw6a8nCtLMzzawYwEb38huBxpN1xCxcxzkzU9uKWqgZxzc2wDFgE3NjRTw2vPy6qBHUBzkagXoBQA1FAj",
  "key40": "3hCwybJX7pnKgaEzaqeMVc7CK9hQrXyhATaRrGAhUeyEMeL5j5ZCk8MmuiaUoNbTGLURzjZJZ8aEfB1Yvr1DMXeo"
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
