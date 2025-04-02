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
    "659ZS4kgJCKf1mVpcUKEearQnQ6f9iEg4eqs536vXTuEiDqXLXhArnk3NZPQtTGQjF2Ww8ToDnUaC4DtgF8TbrJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Phn2cYNUWcB2hAGMSsJMdMSdQYnF1L7BMTzmjmz2wLhjNYB9TVDKPoEHf4zdd6KnsDTJWPAnttKeTKz3fEA29d4",
  "key1": "4DxYYsaeMPN66Zsxq5WKxMUNQKQqucFQGq7iF242aSSqbqGqUp3rjQ8xaRpVMD4ut3WAUdvVF44HSasa6Kwx6J4t",
  "key2": "bEfCggqtPfYkaaVRBRTkPpipVrtGT6dFegJH9V4wtgqZE4aPE1JjHN6SdHLu7TkRRouDfq9xx4yRizr3JndeZui",
  "key3": "3GA1hAC87xEbY5dQNtwjAvyEBr2tU7gDfE6t6kv3xX19m89hPo6hXf3aWCZQfoX4LfLeTsYzBGbPoNeAJetF5gj1",
  "key4": "t3vxuWkivSNe2QrePi49EHknTZqZMnowRG7PN244oH3dHvQ9hJxhLvp21FuZjgXAHCf9w4C9NkDFB5NYftKKfuR",
  "key5": "2wvRiPLSoNwJZiKsFfiDxQk39Z8GVCNrU1LYRf7G11tpjs2p6fZkWQjjProtysR7vYMNqwENy9BZ1Aqa95aGJpvx",
  "key6": "4aaYSUAjPrHdQFEYKMNdpNZm7Eemg3V3w9St2pYnX8uL3aud8ZjENGB9aGjYTM8n6achWT4nqDUsVxJxAdGZgCV1",
  "key7": "4ZsrM2pYzQXjnNGdPMWQSSVWbB93gCXeFZKhT537WijZzJstis1e8LJooVjwGdNaVeCUioa4afRm17wfVPwAPP4C",
  "key8": "5ihwce7JKhBCADRxrsvvPTSUpdmkEa6wYQGubxfjjzHvhpXiLvKyxnZeGWBfVtmVbi25ioaQqR5G5BtHN8jPQW4Z",
  "key9": "3LYRTAkkoeqx14KzWtW1dqtb72kCt6w8gntAsJYPU8zXxBMU1NGW2EXNHJE2prktSg5oqiD5c1BPwam3y2aXK3y8",
  "key10": "4u6M6VCZNUKQaYznHxiBg3X7GZgbNKoGpiem1RUrEPc25FTaTATEwWXp9wSJGGLbY19tusrawDtvXVWaFye7qWbS",
  "key11": "53jxmGRpd5XzvKbKiod9T5HTmjwWpZUDohFNtR3Duc4JaeuPrG13s7M6VsVysnEzisMnpHY3hSYbcFBPrEn8kxCc",
  "key12": "2vtvcQ5xk6p4HAAGGWNZZnzJYxoHjrDngUDR5qdqWsFe1NCbcVEu9K95aD3aJkLPawJruHTKxidQXxHgRVapyFMS",
  "key13": "2Ypw2WgeZurXktmowKgPiaMazWU7FEqtNyq8WJ8AH15Ms4ixYXeq2JCgJTiqPSeZGFH8gzWcnxr5HeqGyP6jD2FR",
  "key14": "3kkubkGVuixk9GbCkFk5FtHqogsYVh1fZB157kkRsyGqNqGxczW1AF2gFcifPcYxhKnoTayRwGqYANGoEUQdK43o",
  "key15": "4JC1KtuNmLknaRcxhTKiuzAxzXNhF8FrSXbWhMk91QVzGSQoAcC7nukG1gteSG14WiSUjv23kpdQo9ZLie1tChaY",
  "key16": "31HnQ98qaVNRMAZTZxx4HMVDsdyG4kHcL2Rgc98cPnTmJAjWRjr7tooYyneazXechReNSJzYRvuPCfoN7G4W5sSx",
  "key17": "urJ3d8TVXRaAGkc28h2D1PkZwxGJE8s7e1DPiLrkVtukh7EFGvgbtK3BGdDSeVSFdGyK8i1NGSrGNb7owDRBoBB",
  "key18": "23JHXCxkBmm4aLkrq2rAkqAMCaWTPLQabADVKkdHkAqX6LtetcsN4kdhVc7vK6kcDgK3V4PEBbXrN4xZ3AjiqDFN",
  "key19": "51a1EDCfmpauVBCgwbDi5WKcaonEYx9bgmj6MykeMrUGcM3hbpHqF8KnWrHdYW4SW7E4iNHR8Txx4VyU7hGD3jQ8",
  "key20": "4nTomQx7JyUwZNRqhSXQbK5S5kLcWYPjJRfCgAjHTGAo4cW4n9bEikAw19xFhyg1XGHUbs7ft4SRTapwKRVReX4v",
  "key21": "37kybgqu18KdVcJbNGEeUnXSJH5fxPRQ5k9i8brRiqpPLWmXhyFo9t6cAM1UHzo9o4aogk6Qoy31NbYMEwXat8q3",
  "key22": "4d6YESS7hLefkydY6yzLyaBoGHLLPQgCREcW3DmW5Wuo9ZnPqyaS6vy6aDKC5DLkJV2FBMbp7wQm7768P4wibMjR",
  "key23": "2rp5LhuQZ3pgvpEC8ZadeJVn6CAs3Fz93zFqeZprymrEdeNfMqNag32Cs8furLPbq4etJN8z87B6ERffKQTBrtsM",
  "key24": "sUX4grdKW9ot3ZWdhEyCs9fhp1mcEAd44FbUDFyDG38dDsZRvVHLUR9hNhuDnuviLhrieS9wZdMwgXwqqz1jfTi",
  "key25": "4rVV7cE1wQgSgwqF4Yu4fQXdyiPZR73f1cESZVqaTwpZj92WMCE6L9TJuBQLNd6JXBoefppU2Nzb2bs7uzsWD6Ab",
  "key26": "4cMuBPNmwWXkhhUtfxcYBYqZZwPAKXrEdVjZAXgPv1vhAJNM4Au4SJ5N4iToDSVnUDqVDxbYoMBiHZHudf2dsowo",
  "key27": "4BPvn1n84groakTBm7uFfA7WVKmtFAfvKRkjLQ553UfSCcLCrMRDZ2LmznFgmBFfNuyjUB7QKJ9xBipoHBsWgXqF",
  "key28": "qMfuTmZhu9xfNs6xZYf5BooLPW7L1yDPtbHYCF7mXjz6NVoijCaV27iH2GRjCrL2ALKkJH1hhgFQhAW49LdcUwM",
  "key29": "4CS9vE5sbkdPPgMDXuzVVGCLZ1tHGXYQx1UZjRS4EUeNazyX3aRxwAg2uRYTc1arp3mfTKbmSGytkyk5sf61cFYW",
  "key30": "5xCVuPGGm9QqLpWgXA4jB8jpmHFHkZFvVbvEYRtqTjLbVoJa1ksbwf244yTSsT6RvPDS37xvStHbfgAbxzsH3KW2",
  "key31": "uPUYyZPsLtBS7jBt83VALZvxJTjCZLzkeCWHbqMvWrDT1e4RXt5uPLTjTCrDXMRhm1hpGEFKaen3Dm6smZHAhb5",
  "key32": "2HXup9iu1vYmVTdzGVXTAuoMqbNUVbE3rPXSdVg8Mq69VQmh8qXpriToRBaj2M9KwjA96oNvRbhRSfqZZD4dbF5r",
  "key33": "5k3wybFUmdtePcPiVZXkwZdnMKp7c6vsv6yN4NkNNr9UVT6LB7L8GhSUxHdS9ndxkfvDJ1FrHBRHzgf3H52YuDVw",
  "key34": "47dMKF7WoJ2QBzYK5ySd5jAJ4TDqpaJ4wJWYZp37r9Leihmyw9LqeRm6KxLRg2yNrSzSkmsvjz2Rbef9PSowityE",
  "key35": "n6mwMHpzC4TotNhyWqKRt8yX8aTaCfVWJWAAWRVwZfDMsxGoHaYRkToUYt72voVebW86uchrLELsj8gtrUgDTD2",
  "key36": "hqvMv4iZ9tghadztZN6L9V5198wmHDYKQujdvvAFYNcnzwuieL45yTb1qJSPpBTrB4d8Z9BKRtm734eDfhNraaj",
  "key37": "3bKYUypzjj8cwGUVoE6VTgq6LHK6nSsouH6nkYdfsEU4twZZAyEWF4Qx49XN7AP7Az2sH7F89rPakFHbuyRE7jmz",
  "key38": "6KsCG1m8du1fPUvhmbMsr17WejsftzfbSEwh4svDdtwZExMqEfPreB4MdgTUYNbX43iXH1W4ZsJZdoDFYfKEc12"
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
