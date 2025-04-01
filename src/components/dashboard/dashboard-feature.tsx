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
    "4r687hShusiXfFZVcjPzAVBSfGb3JPX93nRDQmYisgqTv9wAZNSnMTxpsfnKLbgAshkBtF8TsiiVdPKNXxNM33QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ue8CkTDMLZk4GxkGpmGsDfsffzBTmbDPpDaK8PGektVGjRTMLh1KD7yUtXiTMgkJ3DZAjTiBYD9BMNPgzh9w53K",
  "key1": "3r9yQfjT6wPrYyH2vjWSSBDKs8YbgmRJ1dFC6EK4fXbBhAMB4odAZ26GR8j1bMy7MyTVoJ3LFqmvMAbZx2a5815b",
  "key2": "4kgbT3gUxAmerDrUxb7WeG3VwwavVwko17ofU89dKyzYd8zCktwvnZtq5pjmVWNFA7ozhAhKsFG2JmikHBniSfXS",
  "key3": "2ZZca2cRAN2gr6MfpEEiqpWPW5jYwqrfeCwcwYGdRayWeXyo6d5YgmxcoaFSLrpe3h14pyjQANfFMzHz3cHVU73f",
  "key4": "4ENLCSRUs2g5Ne1cQ3FaD1ffTkbWyHdnjaNDNfNUd5HWPJZJHJE8f1qCoRk3CoV5XRXFs82u1VjCR3NXc7ped1aj",
  "key5": "49ZF2QCqutCHYfLxo81ntZBo3ZSf45Pj23EUbYyk7GHk52kGNMZU2yY5uUtdeX3qHWr121oh6fUSaBP3wfMYtVB9",
  "key6": "2j3Brr6ViFZkC4eT9fNKptc7dvHpGfnZ78k1xyx6zBUQuLFxQYRkhkZzdQPBbGVCH4kwq29aecCKLAXUa5Eykr1f",
  "key7": "31URNimV2Syx4CCHTUXSmogwaRjF9oYUUBdyqmpHh9ZGSomcnY8nPtazr1ysyVc7yvBQrwVZwsWLiV8Vqv38vpgc",
  "key8": "4V8RsZZuB4iwUhv3XdFqQD6MYLCeawu57d9E8pF4GNvYMm8mLHLyvatWg5Zw9TLEDQGc9AFbXPYdP7svo7QRYpWP",
  "key9": "gpsjfAVLZGUhERdxvKkjan9tSfBQT9qCf1JXeRowyNsbAvqeuEiigxn7DM2hTFbPTNAPuzDXjBEXDWJ9Z6yNFq3",
  "key10": "2Fbz9jMBtqN9gw7yft3nmgxyuvoJaszDjkwJdhkNieTZcXNg1eYZdxXXCWM3ms26AkDdsnKF6niL4VsGPm3YSkvo",
  "key11": "26JZYTHCjFuv32QEB8B84dtXEoKY1AkaC3j9VKeJKDDbvLY2dGnGnUNr97GPoz4gkkP9uiG8tGVtvsFbbh4CTMFP",
  "key12": "2nRJtcfHf2i1cFNPTL6itnVrRqkTSXF88vpjcUL33Wrdp1M7XwukBAiHgn3dg8Dmxz13tWA7wnFWDHKYTiSetafd",
  "key13": "3jn8RyA98Y3QftsMMdXPeFnqbupRWnjcX7CKjrtpa1wJHE7pYDv5sRK5bqK5fskphFDAHGbsLiBwq3vJKpzrq5Sr",
  "key14": "2BHRdew2rU83mAYTaHZbCWeGhwSeZuEL3Ju8YaJGbbkptar2yoqAuHsQik4EhLz3sUkHqUwiwF32dGz4FoAaPfNz",
  "key15": "2ck6LhyWN6eNqkXKUnoV3J7NuY3Nog7DBpANsSKQjoFNzMPH6qRYhHM5cTGCY5rfjKzXzG6wdivFSUn66pNV5mw5",
  "key16": "3eFotnt4GczC7o412AmSaDiPRF1YFtUPsc6R9w9fGR8nUgvZ2Th52wiBXhykewDvvrcxLYm6ABXKeP98S6qg2FK6",
  "key17": "3CLjAbWfwq6DM19YREjgKbAkuBY9HEFGeCs4zKZshDaT7u5JYagLn73W1wobjksotxHQYWNj8NSgxDBm59V854Pw",
  "key18": "57w1HcZf3doQ1PHwqp5DEZDHJ8CGDzsyfsFxKU7QcaKi5Hg6vQfJQpjTG2wWUwZLs9KL88ZKsjNfynev3kXF1Hdv",
  "key19": "2LjM87XzFX4kNBEBXW2HuQ48BTqrQrP8goDv6DgKATAKbMVSyj3QzasJfuCni9FYz4n2dUSkhCdRx9mQafWWvpZu",
  "key20": "5cqUBTb3gfdJ32QpNHmg5TQvxnh8cKUNXc7tQWBmJAdYjj52BkznierADuKjcbfJakiEKxExCSc1jzc4H9bGtTfg",
  "key21": "2rfKxCt6zYw97XzqE1qHWgXjcwxNQugp8fNzai6hw4UgV6PyTJyj9hTjESzzk1iVTSp7rx3234FEX8usPZBBxRjj",
  "key22": "4MXw5E6dv3A24wxmKf6XepaA8gB3xRkbHx4YkMQ1beFs3W75P1T1mo5pG2kJrimEmz2fg1iUiWdoaR9ZrL2cZUHJ",
  "key23": "5AdLxSEWHAVZM8Y5kozvr3PDo3jSBKq5NeHjhcXybccurCTZxwVDM8doA4ypEoN2Zt5LjSQMxe8r7RJbGinMpTjr",
  "key24": "45GZDYvipTMYtYwJ5GYPFSjDbFzaNznmBqwZEgtmgLuXh4TNvUMkH1TSCBZ1Fx3MbjE8n1P4biZPUSoUcuPpH1kH",
  "key25": "4V37e79PFGjxQ6zqB5o39gmjRgrPGQHkjM7cXjCXrNo8nxszJtwaSkmbjbpSKTJC1zJEotojCzQbE5Nq5oUWAqhe",
  "key26": "Frhj7WB6TugsPpgRp6ybefCqYb5BruCRcWY3HHFKP2Z3nuJMyiL2czgbuzrhrZauZKqJYPwP1GYhSM8JjqDBwCr",
  "key27": "21GQFCnEbkUFo3pW23S1upDeCQgWmsBnwMPr9eTj8BMksFbEEtFqU4jFcf4WRQ36EnjS6B1Euhqns2j9XEyD4cNU",
  "key28": "3wxBmQNTYqAj6obVpxoPgMDYJjnMhZiV8oGFmwRokhPs8FUjtZEGnfeTxLtQ1u1SLpeiU9rJMaswZKFKhGdsNE9b",
  "key29": "3BZmSCf6t98WooQebufwA6c6hwLpnqbK9U1ooNNMJbsBZpSJziy8bBkuPcLHmiqFn2fd918Sw7ttyquSHTcCdsvE",
  "key30": "5ziAQGRRAMGfiuy1DwUFxZUwMaoXXS98cadYAoDURBQgRR5yq3VMWU4LpGSxK8APj3ULMXdgcBfMTA2Z5BNRjkh",
  "key31": "JTAWogpo6UGnygdF8XTSBBGs6YQA27RyA5eUhsVfbEc3xW1cfVCd5NYQysZLPpABDa1faEcTige97jFvAh55NtE",
  "key32": "2CecPkYfuCd2eGQGy5KkzjGG5Ui2h7SgBdyjrPHmRXpVdin3VQzdCJsEUL6fz3g5nAcro7eAo4WKUPGWFAiwQcRq",
  "key33": "4xyM8aQ8SPJieBinmtWpy8La5JXTnMPnJAC9xeECjupC1FvQ3kZeaDj2tpgJVMDpMN3a47Hf4d8UDPmzaAEe8NRT",
  "key34": "GxRAHTPqB45QuZ6PfebZuoGGRPms9QQg1FFDmj714psArMtn8v5Cqn6NNbfZo8p6fBZXdHdDPMuM4BoSfB3FDzj",
  "key35": "2sJoTSTXafBwBj2zG4EKMq88NM2vntYrxfzwAxe2wRM3LD6F9ef3vknC9To7uyiRbi5pQQpFjfqAL5BDPFuBE4Ua",
  "key36": "6666BaRk8BmTmYBKpBEbcHeohboUioeNzw1BkEXvn8AyyTe3GmhvXiuHebMWtAVjDHwWtpu7evMrEzavzdBpGWST"
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
