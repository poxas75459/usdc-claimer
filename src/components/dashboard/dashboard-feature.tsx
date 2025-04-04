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
    "4uHNvbKf5RSX3J3EDabMimPQK1tWvSseYBDpm5YGoscYmTFkhgEXNjCgGwz5mjamVhr3T5wkcAKru91hfiXpA1ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BSPosHBCETJWCG2cTgpNsrQgJ7srJSsKZP1Wqe9Q5kUTFu51v1xsSSM6ikYAsQHmPfrUoasaaufn3mtY5ULezK",
  "key1": "3ZQt7iJSuyjPx1jvB2PaMHfHhoP55mGQ8ygyynGAqdT47yiRos8VrFt5KR9ji5koWYPCsUaiJ1QNzKjLRxWfBtNQ",
  "key2": "3fwnG6Dis5Te113iTdAP9XZm3WRMgANf2FT62uB5sadRwnT36gTPVi9R91cuiFFnBgEh9QwD7mQK2TA5X3jg8dBn",
  "key3": "5gmWxwqgG2c2MMtZxwJM1dBxNXEM5SPcAv9HW6MKDWbf6WvjYiW7gz44qfe36brnE9AoHgr6dyRHSYaCELDQurmu",
  "key4": "58XJac4ZjTxe57L97ZiA6GgpKXPsLb4E4vkDwC3sqW8yNAV6pyRAXPojjM7C9C7yHgYMavCPao1ZUbNFk2KyLAyR",
  "key5": "5oizdoePin3jTEoKUXVoySo4RUMFYDDVAVojvHF7mxAqtRXrwVhgc97tDpkyvQG3ma5H5X7p6itTJTBGZx5mWxhE",
  "key6": "3pANwuMav6J5kjZjEQjJatFjGD6fhzZWJ3vaWyLq8w78Jx3LMJXaTooN7mfcU2J8FfYYAwfq4yh7A87ecrfV5GfX",
  "key7": "2TaqTYUjvCPyhpdt5CMuc4dgBRrqSnSDkVAm4QejGUQ5NALXMNMgPdQRExWB1HEYb1LMgbve5MmcoyxzfiDj31Jw",
  "key8": "5SBVUhJQgoX7JiaVZLByojMbGwh7KoMnvWwdEJFYDC5zFM8CcEYqogNLGQkQZ7Fgo4qsKSfhGWUh6d3bN6z2RzqB",
  "key9": "5jFjvwogTnmJFDy7eQLt3YCSp1EbBUjCrmBbhZPV3wo4ktrQy83fRz3nEpkouiU8XD1gGPJTf7txuYBFXKv5vftt",
  "key10": "5cFq9atz8sUgKC4gEKKMAAp6NERvF7bE3YWNZ8wkwXnKYQd2xr2pt5F99GZn5KU37VmmN7aT4N4peSzYanErJNBr",
  "key11": "5dHKkeujFxwkjDGVv3dn6sdyxQosBftjN5uJAD5FgXomAStRDxb9oCHhhBeyi1nGFATmqxM9dWrXy6RD5ZjAVWyR",
  "key12": "3Pf4WsQiJm2ZqmPfmV2WaXBHY7313tWDfnA9AA6cepSnxurrHnZSNnCaDookRxAm55mAwNSLSKHriTEaYPDLP6Tw",
  "key13": "5sXhiBzRYYn3j5JxQpG19w3RdmHRMduN3LRJ8xNDCeRuKN2Tcrk9npw4noq2Pw5ivEg4snNzCGxVGfNJZBSLFAay",
  "key14": "4DaNP1fMwDzFxFamufRpMPHp6UwemFkzzM1D2zd6z311ctQaN295fnfZ5vb5qSULjM1WHNEWsxaEnLh5VrHqdiYq",
  "key15": "41in24eggZifuksuBsM6aaPR2vtKxo2juLMiaa26UqED6eiKnCk5DdURFB1d5vcLs7GmJx8JoxXHQiuzdtCH92AV",
  "key16": "64WBHqy6fryhh8RB5DJojAbFt9mR84FYVKmTLTwvnPJzBgMyVd7vBzkz5PVMQiQvfACLRMu5kXqELJwe3TWPnec8",
  "key17": "5ZCXCBbEYgkXKKWqxe17q4f8jBoFryTNLbQWuxx4nMPgdadTwyuVqhsZYXFzWiLJmeQzdWn9WRZYuBqdDXRddzs3",
  "key18": "23uXQ6xuRm8cw24LkmD9pE8toiJtCLazrGntfzPtfoLgSJGrw7t861vuMVJazaLos19pMqw2CWky3QgrGGUSt6vv",
  "key19": "AcUQS6WQJLULgVpwogg7WnMf4ZNdcDbGuew2wwyNJN9kNE1eLGQEr1xJMxuTKicqZLYdVAoudM78z7snEzJuPTz",
  "key20": "5wQqwDaRextZpdoQHpKd6rf4tDVhDR1PWrNnrEkZLVCHxoH87kYpD2eBhXQ6YDNkxEaZvTZST1hamyaYGSxiehHQ",
  "key21": "2dyt9ASVXCSHepnak4jhWi21ooK4pCvdLDTeV2k2GABmjWUYGrLy5isZhmCyuwcsanhi6YvFdYnnoGtpVvE6ewLS",
  "key22": "2W6Bjgpz4iBqBH4AmZ9rViE9g91dmik3q1Z5GeuxDenTqj3v5rg85psaMzKqRiYrkeQ3yTeQ6EwRjhzi1t634hpQ",
  "key23": "3VStCwFGPiTqytrYhyvAU4vPpoZuHXG9JkTCAzLwjMjx3HyGfTcYDTHfdu2xkCxazgnTLdLxvxRo565nLtpanNJv",
  "key24": "L7ebpR6PNjxeuZBtmCXkD42HHwzHpUHnZD3dzwrVgEiZEPx885CMPupSa2Z6LJqLGa6xp87GhvrzMQ1aAjece7Q",
  "key25": "2jUWA3H7nvTfv3cqvTQ9go5EWcw492UpkaWamSo9LQf8YG1Dm19EfZm7gosEF4fiFXsW24TZsyfzMKji1BcA73H3",
  "key26": "5nu1nJyEhPpcTatp1D9dwxhw5aVqSiFNF8SM6QH8fmyp5S8FANMhC3zeEApGS7VoUYEYER2wh2Tswhvd3bu5weRD",
  "key27": "35VriSfJw6LcGD9KFb1VHBpZJKHKT6kpoWgMN2Z6ahD9P7ufcr5gebFTXStzr6ph8YCULsSvy8oRsn1G1yZnVj9P",
  "key28": "iGHJDkWth61M1rv8BPJvaXQfVAXeXUTYbc2jx8S4ePZiuTzZCczaQR7bR8r9dt9qg6LWRfco7iB2a1ksrvcjci2",
  "key29": "3AXkVcuKbGvhoPAn3wLifarrA6aizsCxaJg2hTVy7xt1ya7SS2inpwpAGXhcuo2GagHJEha6PkTJ98MyTCnRZ5p2",
  "key30": "3sty9LW8RuxNdyVBQgTuvFkFB8TFZDwxm1ixBcWwQjYPk3WLRfM3rZX68HYaoZMxHf3Nyi6kk1SfGJgB5qrhEvBn",
  "key31": "2pE7THiJyZNQ43DpyDzNJq7NYab5mGXa2KSVnxxfQwJqLMXcvvUSS6M5ZAnKMKwmuL5QG7ZTMuFB95LL2nMFNpKC",
  "key32": "5TUWkxukvZcsv9uiiRhrrjRXvBaaZjH7PiG6CVS9kW5Te7bt168ph6oFzC38NEFZamLkVM9pefxtYwNEbKsaCsC7",
  "key33": "2WQ3NuqFnKyq9F4PXpSGviJdnpEphkKbmt5m1HVF7xtHvHQJDj4bEemRE59rE8E8snkNseT3ajmkjLMrTNXzTMCc",
  "key34": "22459DZRpmjhk1HQ52sXh3qJi1cAR6r6DnGcbGcQJhoNiwG4wFFXv2KaASVED6jtAwFCTezEWdhQsH1zcwGEK752",
  "key35": "26dVnut72FGyGRmsbk2AX2cbd8aXddrhF16jPRC9rchmNF4i4YzjdkZb8XaAy117tMDpCUDZs9ibVH1kktvsWGWm",
  "key36": "2hpf7e2Um5asudXdbPm7oposEd7tzbjinuTEoBhSU6Rdp9gFGssVgJGyzpxg8ZxTBJGVsT8UxZR21zC438Cgw58i",
  "key37": "Dz51MRW8TL5tkqkVckfdAdfHSbo72H9dbYWnEjgEsrj7SETLYkvWuxTntsFFmUSMFRqvwiPX6ZbTyf8ATDTjpCr"
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
