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
    "zPXHv9vUm5jWFAckC9JXEmkLFKivyfQBMZZVss5oSLErJvPYaTFi61Vu6CK4HHqG3mgy2a3kqJgQZuP3r5N8VGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfTqhY6tJzHUP4qrGY7e2v8PoGYfpGiZqmHsEM1UahBiCSXuiJuwE29uJ53hxZxRa3ArU2z3UJtGNBCAguTkEDG",
  "key1": "4QvP3ttnE6yJGoW3yVQM9itpHNHa3QUaAk78gqmmrpKurUc38V899JSMUMBaZk1AFRmAQNt8FxcEqytmrond9Qr3",
  "key2": "3iqLJiE5uCdBWTTwtAYDnfgQazF4DP3VPPdDddbCotmWcj6XgjeReNVa37Y4mf574fnzjajVL85FWgHaeTsLS1aw",
  "key3": "4PhsLE87V1aqfCj9CupYjHwpv6ET9TJMD1NrDHHhFKanUa4x4BNTP1AiBogM41He7bCMxhdzZaTAXek7dknUEKBM",
  "key4": "37D2DXKV364QcKpRWhR92YzNMqcmWALB1GAQTks1oqjf4THDzcM9bk36oqPa5pWHmEVbeFTmpmehuzcGWS7uhvkQ",
  "key5": "2K6BLR41JWPrmWW4tx8Kd2iGjiFcBSP6j3Zcq1h1haSqpYWQ2uNgxsDGfTLjGRxzyB8qf6fZmgykCVnaqDm98L5L",
  "key6": "3NEd3nqC2tQC5oqCCvLaFbhBmgZmbci55RowbFWiGZUQfgkEf1z3BmMqDYuia6X7nNumj7T3RLNhZY9o8YKvTaE5",
  "key7": "2j5pnhiYgdV7ytHUY745KhVAFnBNEfurp6PAqRCv9zqgcWCbt5H8sUYQ8STtmnEXWbH4nJAEvWh2gvY4EZrHJrcC",
  "key8": "46Mxi3EPEqR2qMSp7Q5MX2xrYZGE1KNFsA4wFmFTU2FNpmBVXjshVy5u3Xa9XDb51DawPoA7gA2RZSWknwoxcjWL",
  "key9": "kwZc6HfcFyCwtbyT5WhM8dzJ64cFTb2hzkvWgGVZSqQCs7NRZCQQZZR1Gu7HbaBe1DXSsABKe6QEvBsYZzToAAx",
  "key10": "239N3PzPjNjRChgGKAkKPfmbeL6sKGhiYJRKieDeEtBJeFRoRPA2fGv2kppSRUozBrR3rtWy4sCBDEA8eT8ippBr",
  "key11": "3cGVZn7jh5YJBuA8LnhHLroM36y8cj8NSKkF4J2KmSMJ79pKjpVqEq5q2erRYDwFRg1wrGxdPtrNsLp1U1N1d1Tv",
  "key12": "4m3o24zciT5bXGp2CTYU5KQ3cCBy23UTeTfiTduHhHXMr3dRgMFWi5wGt9R1j9tLjwuXiK2MuqEtNeaReC4pCDUX",
  "key13": "4irvTRaFgwiSrVZasThzRpyc7LKGBiCJE7pP92DhHevJz44Yo6qQggW3rCUhb7T8c8uUKi5onKjMS87Be6Dsx2Fz",
  "key14": "23hC3pkV4jtnowSg2zkWBKQmtfRzm5Dk4vDJLYrPP6Z4ENZZHVS8taEaCi8Xbn7RUKWpmyUfAojyFYaxN3nzvx7Z",
  "key15": "7TUgQkUDLt4dnCm7RxeKRYdQA9GFo7ednmMHosDvyWeQuQz7mFDxeKzkSVwdPmyE1noDrsNw9Mumyk5i2BsF3hX",
  "key16": "4F7uz2UtrLqrN2DvV1wLzSGoLEYUBnBcfyB4gH2HDDGRhEwbvnpzpM2G4KF3wh4XfyGENV5RtCYPtpXhimTNrFph",
  "key17": "59mAKoeNMFQHA9DNw4cbSBRfZT5fZmeF8giFzsw3iiFGwYs1gVCUbJXAVhPLaCMairEb4do8NRcLfzLEMDymKG82",
  "key18": "jrM9VU13MKKYGbT82ypLC17dkcXHSMoqEgkJQamY2VNy9MJRJivwgdYo1w3Z7NHrf2ba1bztxoFZ7cHosqqjiqL",
  "key19": "59toGdrNefjkVsuUZrdaNRScU68BZdwr818MUPazspKP9DW5AkDesFiskfywo97hmAdTEp3TXtQJrDu2N2So5s3u",
  "key20": "27cEUydUEwAfFF4ETW6JYQvbU5g6EjtYFoZZtw4PzekZZMbYxmGUN2zTxZ4mxWJY4xpokw2BzE923XVoAmxp1Zwv",
  "key21": "3BNVE9GRuXvijMhJWTqaEVwhBQWGG6DadChHGZhiBxUwK9Vb6p2C5VBTyjSWVHeH7CvUHuqjzarfTr2GaMHEAv5m",
  "key22": "2ktB6HVRgoCufExMKUtFAnW85i5WALHz1yxGxfujfgxkyUbbLUhZVPhv9CkNrGxLrdyhhELGbAMZb9nbHSmhsWMT",
  "key23": "52oixBa62oxQaajoA5y4vjHy74Mvw5551Yo3wsJJRP4XeJKKV5DbyqehTqitjT6c5tqFi2kCcdhTArn8jgpo6Ngq",
  "key24": "2LTHmjtHEBf5p16bd1z5mFdDfKgpcMpo4Y42XLDYbDYzPphCxbSd7G8TafYRcUddnbH1gH8idruhRc9jbFU6uXvU",
  "key25": "3G2kG7uLRZsfTvMreDx7cn4ths2m3t2vNbhDBBMTMyA6mMFr5nwiPX1GJJ6vZ7mRV4VJY8r7eNk2sR17Cr967WPp",
  "key26": "3inMWFnQEWuiJZx5NGep68AkmtBEyfo9fHqmqzsmKS7ZKrjqTkQ6DpTEan5XKncair2B3rWChWkLxa5X9wCbLqGM",
  "key27": "2Pzjy645CT3A8RBiNTSnyyKThJ9C6gQ6yHkn5RoR3B6icimDJYWNGEALdTuGdNj2Nqqy9fG3eSrzpPcTvqaP6USB",
  "key28": "65bkNAyunA2r6rhyHjcrcMWHAPUFii2thLBUaMVDU6TfXvuR1GLZcZTCZsad9dC7yPtwVErUyrT61WLVwgBNLEEu",
  "key29": "4ESjXGMJNJv86ZpJqHcuptfR9SRUH5k1aC6cFGMjPviNUmwWJ93kxwxpeMKVECvWG9Z6Nj8nSTEhpAuQezxG1N9c",
  "key30": "4gRktwc6XiT5dzTYraeWjfCUUnnTFctHGKzuVX7iuCo69p8t5JYsfi2t4tVVhjntPyuVgtUbmE6GUU9XSXjFrE5S",
  "key31": "2fRGYkm65X2ztwZXptesfayM5jufFX4fPzaxWSaZYSVBwoEecvHXkw5cqKxunKtyN1N75Dr4uWcpX4SuN6AeJhvb",
  "key32": "2VCmKJHyxcAQPEArtQwEcG2WsAFe8i1sdUEzJEw7o6ihgCLUrFeD4XdVF8skMzeXnemjNewiX92e1EvqWLE2M9Ze",
  "key33": "ZubbQgXHanbGUznX2DUc85zn6CLRaJV3HpMu4HNfMnMQV6u5vw3ZD9JPreHfXgcEx4iT5KYED3HnjFMLDo7uGcJ",
  "key34": "3fux6zDQf65DPrAmo75YAmM96wpkukjrom5P6GVhWJH1KQwoPvBKa6SdckVQ2z8g2NwBYaB6foAM9H615vzYdLx4"
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
