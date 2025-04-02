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
    "qWwyPt9YMQksUyrRJD9VPNRKEcPtR8dwMF7pqcThtktzJ5ufmc73YWrfgBhSbNdii7Sc4dKMtYt7aibJtprMb2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2cLyzuqbNUZ3vKctopnra3fHwo7ii3jRQ4ae4cYc1nafTaNp4zCUizXWU6U6GrNUAV28DqgXw1aiYrrp6svi2p",
  "key1": "2KQiWqNjXKHwPbT1STJCY6pyEihtFoJvw9NiTJQgBRDaFGRH65E7ZEiq5yMsZCTtdiAHqeRq1dXFyXxJ4gTMbbFF",
  "key2": "5DutqB4t3N7YUkyh9Zqr1t6DaSsrWM96xkV8vXZJyPFuxTNKhrRvfhJhd326YAuoswgGHBwuchDSdARwFwLN1NEk",
  "key3": "4dsxfYZ6dWsVyyX5nRZiMNWyPz6r6rLiddvbg6c5TTRrJkEK1ggpoNq1J5JcSwJjKkP1QSv94p6gqkH5Fcs8p3n4",
  "key4": "5VrxNECYD7LN4F3wegvME1Gs3a72KSnCZW1LCHT19HaqQNGeSi5Aj9iwG2P3S3cW2sV2Q9BHiUQL2vkVFPn3hTEo",
  "key5": "rHSVaFsosnQ1wjDWBmAK3DMpBVtfEy2YPpDg3TixTygVm3qq6xvNUGmsBkbc8wS4wEjo7BEqpqy3Gy3C6vDDX1z",
  "key6": "5gZjroKBwRLJPYadgekezt9nzm8sPfUhmU9mT1i5ccL15nXrqJfodzA9xvjwUCVSJvXAPi8w3bPtusheyVAjwWtE",
  "key7": "37jQth3ii9S7fr3xJMdm8dZoNZEDJqd3SDDt6Z2HJswYNLg6FMTyjzUrKPWtKwd3kGfTMSq7hpLu8k5BkunGVj5W",
  "key8": "38qpiCZpiekQThDY37msz1gtBKCpY7jjnXzBKAZxBnuEe5Skm4HUczSEJcjzSgaNskox4zbcTRM569i9e7DMkbXb",
  "key9": "49Xh48SZFQ7L7FsTekZS7DWAk3kct9pPqEanGBnAZVyjcZTd4CNNGx71XnfrorWMgHFZyi4VXYJ398QbNyXvVgwJ",
  "key10": "3HPT7tFvzwHwAQ6yf7XYxQQv3TLG8gP8RjZzAG1biLA4ZuwvW8KhzhSGxg2DFgxge7fbNMHfJPzRE6v6Nug2BtB1",
  "key11": "5FiRVQ9jJ5R88vPG3GXZFygQG98rW9mEkGYScQ13DnWRYLqxrLJHgg5HNgFsSr1ktsMaWaJJrxRRTHg81QkgWnw2",
  "key12": "4ttBDAQ41m9KxcoRSs4fhpxJ1LQKdbUYtnM2NZuNVACUBaCfj1r3EsHPrFkzRgXmqcJ6wbEw7ANQZo6UdXbFWdWn",
  "key13": "hH1L7SBynM6qzYSJnXrQVNyQzrVBELHPLiUKRhE2w46895pME9kQFFm9Sx1Bm3ft1MbBBKaGkP5YszT9Fqh6ZV7",
  "key14": "tzFpDDLGMBYzbFCFtpE43gHmaZJ5Nycwjfs2daf2SPE3eSZAyftFnJHxPmzVCC2kSNrKXHoyCjAb6Ak2gHhzXdv",
  "key15": "YKf69s8LyfMk8vujE3odFbmSBKjh9TLMp7u1N8h9q5HQcLUzVc7M69J7PzRgQ4qx5NxZK5jDMdp8SxAgfP8vbMa",
  "key16": "2m5iNHbeAFAw2YR5ysAz9npWdTzkw9ngBoEPCxTGCQxyvM6FK1UXPY8hYkvjBjqdVawQvbndWEqjkyNnPzG3hvVQ",
  "key17": "42bfXwhMTqUrRmSv2hSKjPeJCbx3tdLWaxiiGqK7nNWqjLx51n27f7SSvRubeC7UqnxH8BXDHwfS48vAMjMZZ5At",
  "key18": "2BoY3kdbyRpCjZjaY1HXKNFA33qh1vnC8ZXEaFuoiZSQutpDWCLpR8KJp8qSuSyo6GpEkUfDycp6EJJdH7VvF9RQ",
  "key19": "2bacM1wPNtkCWpzMkxSEuZ9WNScnwC7cF2podwuqaS9T52sqrLWufNTDBR95Xf4SDitbtzUGVgoZzyGrT5qgmQ8j",
  "key20": "4oDEbcTZctPAopCcew1hxm1EUdVLbPmzemUFGUp3EuJjrzXawM86aDsCd1roPHpFFyXw3qBNW6DBasFnM6bD8D4U",
  "key21": "2cxcohdjpG7ifbcpitcZCaSaQ7SW3ouvPsTvpQDiGLCDK4RwgecF1CkisDfi53GAFjb8zNADVWkuGoyhJ7xzNSW9",
  "key22": "2tvava9t2TWVPiEfd6RiRwxMLTop9EVyEoe47DT9vxfkDQKz9uMD2ZKTro3fozNXKBNbm3DvzjauGmHxQxKL4qXj",
  "key23": "EuJXGk4bviU7MjbK6yCosj5Mzo2RNZ3xULKgeub5EiuS3Tvd2jk8GCgy9R2PjkA1SvUQvn2bgBHp3EPttjxbcyd",
  "key24": "6NQ7kfXkP9AjC9pCzVedN9hNmXQBiDBBJsQJbJqu1idq6Lo5TpHQGACU6VbkT42AhFEfbGBzs8dSUZRXZ3rWvBP",
  "key25": "2onoX5h7wzitEaJkppXAPbk9WrrL8NQFVmWSjFZCsSH8uMMefVhwrP2VVTo9yTdQC94iJAzr5YZaZCfeU7z7WWKE",
  "key26": "RCoq5qmvE2jKCopUrnGSPJTesDbDY98EPNVj2Z6Y7rT3WrydrTfzG6sVVJEeqbkDuY1n4TSoFUwxybzKg7Pbg7b",
  "key27": "2CRbPchrDGatzahUmzanQYkMQakWVVzJheg2HVkeQxGByEKB6pSzrjzP6qMA75BnMu4KwGjgYK7wUopdprAWDd3E",
  "key28": "4AihwNir6jinmXiXWhpBUwJ5iSqEwdzPSfZ89FSzyoi3PLG6vtJbGoHnw1V7nmzzKwNdkWFgg3pQFAjtTrXai7f1",
  "key29": "3WD43YhmmdrWVfFJZLmPsxfqqoJiExr2tSwnuvYoxGMN1UBSDRHLsrXBDodNqcn7i8qDw42C1hYZvcKBHFfST7Lg",
  "key30": "29VCYmrk4CQx3rQyE9cHqmVcsuMTEDGSvypYfmEa7pwBezBr7y5B4BgjVEvwi8f3Ve75dYKDEjx1PGWRLZRNmxgn",
  "key31": "4pCSD5Pbop1MWujjuUyUujW2K8oa5HtdHEjCHDdy73viSgc8ZKhdUFHCi9qTzaBuVwudVucQ9EJHJFsmHBC2LAKV",
  "key32": "VfWiuc7LwUFUqmU7Pzerj22s1K1EDCJcpMgb5mf9uAo5tDYFt4ym1ppEZpZ9p1zoumQNqsZr8PajsamFQFFweZJ",
  "key33": "4c1LSBbo8T1xnuHFXRECYQZWTBvMJsowcg47JVK8D7BAU7r3Gv2Ss5zVE1GSPSFgacW5JNDY7mnffkqGkbgUvPoc"
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
