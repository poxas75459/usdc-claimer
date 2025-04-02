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
    "25iRgTTNDM715ms3ccGquXtLdxsGFcLDUY1zS2jwTpan63i5uqp8uy9K1SDP9tci7DLXwear9uXxW5N6eL2kuQSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNfzwAFWVJUUd1AsoaHqwF9pzMvHwiFQ2BwyaN1V2pmV9kYL4g2RRAYpZkP7jZbso7gnQyv9BndaWdc412yNEzY",
  "key1": "3rVwtbiQmFgeSPkgwDBKatQXh6ChP3SVjmsnfrHXNUcoV69zE3gp9cKsYTuXHEVpgXLfSxMXyjWo3BpsbYZihHrB",
  "key2": "23HqLNXbTNtfGNvrL1zJaLSzWBJMZLRsQxE95kKe18VK8sMzbYATDTxf2NsPTc9JEr2QMJPb1ScSrHoBuACAYLZ1",
  "key3": "VJeUoLR22onZDpbgisVPHbdUNVKKRcdTrfo9RA4kc5y4TX9waYREYeEZ2PahaTGGdS9t1f3NeTi2JwtXsNKffvF",
  "key4": "2XM4KMeNjxxug8DYYUUuGfwyAvEmByuZWToeNSPp8U3crcsjQ166L7SUQdyjmNf1EjMACpR8Bnx8niyvYGaz8jth",
  "key5": "4buyVQuU17QirQSk66dArcm2r2miVAZxUbCErMJkfSgSvHVhs5DytJoN8BELcfHmg9MCT2EP6zQiR4NVb1eHDmE8",
  "key6": "4jg9B2JSttmtxEG1GyqFmsYq4N5pvAknkUQpW8yXQFMv9gYVRGTH3GayGW1rZKLHgLqTVdwu8PGFQanwL7ghqX4Q",
  "key7": "3obf1p9fzsqebytEX3aenYGE8k5RoijiPSphsDX17XrxVnkF6r65xXkbb58rZexeC1nDkNtDnHf4wtLoGSJdSYzM",
  "key8": "4QmnrR4M2L7EtDeumtqRSFdoQbGuT93cCcybV5cXgig4sotYy5U9tHW6raUY48s4J6uBmwq9GkJTAwyXbpncsgMG",
  "key9": "2Ku6XLTRawdagYgpFVm1bQrPMLctHFHYFLmgFgXDocc4aAYWqtgmWwPW5ubWmyW86aFprUygJat5dR71dHQYuTFU",
  "key10": "3mHfpgKLWvDfmDdYgrFSjxb9Y5E5F6mcww9MXJWMSAibFTAQk6CZ86wzjYwcZUws7Y11McR7qedWY4UeqKfneHdH",
  "key11": "4QgYq9rMPe1DtsuHuixasQnTXv128Ta55E6WtjUNASwMn6zJQsqmxUTDSpRQEcf9NxDu1kvnWgacWnDEMoJzofYG",
  "key12": "5ZMrgLQXvVtVXksdnpoScLDEXV6QJz6MPUrwtUzjCvhcsFCsWKUZX1axe3Qs7mwBiaDpVmiQ14nYDGrL4TZZEsD1",
  "key13": "5Bw9Jk7yLRD85DKXnTdM5ARzV6mbZCjndLhjqaapYQqrb1Lz4YPGGtv7h12LCjJgeaJnQo919RvvrgR1Z4qoaqgY",
  "key14": "5v1EZG7GM3eTa9ZQLWS2EHsFpkVgCFZFRVyQBUeaHX4YPG8rseyyR36WdrfWdqGEfzTqsSG7E2DDzK5YYxJirzo2",
  "key15": "2WBCAsNjiKtNzMZpW4tsVHWXzg9sA6jFhNSgHKZ5sqm9NsJDCnDEZsABkoHUyuVKw4GRNbDMhqQzqfAQWC7M5VjC",
  "key16": "5KBtEqKMoXHW8uXdZPKt4YBmtyGbNtvV9z3z5r8yxHDDsC8e7sniKPQ9jQVv8oiRyJry9NkLNnJ5X4rps3qziyge",
  "key17": "515SybrwGmNP1ddiKst5XTCmRHhCok8jvsgCXfV1r1zGU87P4QeVZEpfcEUwXXz5wh3FhGnsc65XhBpDnxkNUYeZ",
  "key18": "3NLiaKnHubsxFJJdxSimKheSRYAyz1QS8AGjKfRJpjceDART8tdQDzj15hUgY4ofLXZGdSgGC2mz36dhjfYKAQd2",
  "key19": "2Cw9nTcVFPMF8kWHavBG1tzWzAPU2XTuZHiGzjHYPxW2Vqa67DtcX8wcJ6WZPDDH6xDNtonTPMVtDxP2vJuS5yMM",
  "key20": "2iPZwLMFKW8ZkyJnLqx5v3rAhXdSCLq79AMFc6ZLF7L18SoeMQn9doKJJe1ua5ynuU8eKd4Wua4mdtfomAdo82qz",
  "key21": "iqvFaCYhQEJsBFTRDxQ5UUoQ4iRaBttNLt9qpBWogacgHYjpm8KU6Wv7HwEyG1E3NNgkd913mRGMKkWur9JRkQe",
  "key22": "4acMFa3uUYJ3bT3ssxzuaBBu2P2zm2T9NEDJHXqYPEgmfmZpAuMQNQTpNB8XEEj4GqywpUr9c9NREgQA5Ve4bcjv",
  "key23": "mgj3yK8AVUQEk2fdjGwxthhMfeh5T8hCStmea1UrcCSqaFFZwWysK7Y13opzBJVP16MeTWXSUnY2pyJcc1FAH3z",
  "key24": "2QLvgxq5y6UL1nrhaMc1uFwr13XB6y5u6hDVbqVUyduhTtc5FT1TttRxH1bjLsdu69gdhb6rXsuzjBhZ2G3Hkt6D",
  "key25": "2RpWnyGGg5j7wWkTVCyoHiHcHe3Yu2iCd2N2cgacdzFvqm3zTvjyc9LWvMZyYUKixA7jPMvX5UXXPUJ5bZJcDSSB",
  "key26": "J2Ky57g6rnQabBhFsdftgCeZ9dMevXSSvLPBr53oqMeQgjHVMuW1ncMLDzBpAxaqSrfEAx18oeTepvTciqSkfgo",
  "key27": "5bJeGurcTuMcnETDTkLswTm1HXT136yjQUnjree5CpmpumwjeCtxeXm2FKHEDCMQhQiJnCQTyatxpopp9ZDRpnFz",
  "key28": "56rpwreZo5pKiMPCadqUPQQ9mtBgmZZc3sbSdTqefLdMT69XsiJAg3kypRmZYH6KBF9WfZjosMobAqXAkhEnAX9j"
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
