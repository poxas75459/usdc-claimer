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
    "5ixCgcH5CQzsaYbk8C58L1sjRA52yN5cJZjg2ZJKVH6UwevQgw8KhHm8PECASpD11N6DL1WdxsuuEiQPkLpTWrSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dderrj6kpFYkyQuxXAkcCiV4WPTNd49Mno3nTUsm5oZL1TsjWBCag2pS1vBR3sX55d8x12obLC6MwMU9yU7nwyf",
  "key1": "28jMWNsa8ju7JDLj9x9ZhYMTPZZRkT7cSrQ4Up7AHjUvLGmJeFPy1rJBFdSxX8TPyYkqdu78aEbwJmUjUB31Jr9A",
  "key2": "2ZZFGAYuAqR3JUS5FEppCEg3F7QCG3WN5XFbEozZjoPXdE9FT1twsJ1roCeNZefRLoQPu4w3Bg5Yu6C7iNHufrWJ",
  "key3": "5uwRdzdqLuGSvkdpzBPxjREzgUCnAbgcGyCzfnYKXsUqHxvPxeKrN5rFXfvnSVTWQHAVfXRhP3J47vnLyAmQhLUT",
  "key4": "4ki8sCiz3rcAbcqWFNXQ6H3zYaa12Sr9fypqv6FUASJuWPQYoLRT3goo623SvcH5UbdTNm8ExTqfVN1JsFruUXDZ",
  "key5": "3Pp4Z5qcj4XumDT28NJae4TSPDLMW6VS9nhgRF5QL1mwyJ5c7G2WdMDngRGnXa5XD8AW7oiMoC3iDM6if7W7XWMz",
  "key6": "MU3CLQFfNDQaZwziffL4KDWae7Rq2JTh8QPbkPxYLgHb9ZcU4c6vrWfNAXpHQ7BXfy5DcejwxgHEhcvYt9gR2aH",
  "key7": "2iYoAgBQeoNTVoio715gSG4bJfN5Fjjqy5rFjkSJAy6vnVkLggVnewtsGKXJutRfsRYdUzEEDz15jFM13NXJPhAm",
  "key8": "2wCrA3ABVgM6uB8sK7gJLFownuzz18SV7QN5X2oA19WDr173BuzRaKWuPo6g2ePWco2De3u9sAd426hnLajY624z",
  "key9": "4cCzV78Af3Ar7uCimmgqmS7RqPuGhngmLnWCF1qk7Muk2BtFqxWTRSbdzvAnNkBEwWT97ZvvjSorzoAZqiq6xZ4c",
  "key10": "39vmdbbdaEfvaM4z6cB2xmxmNi2ncVYXvgQ9jHE2t3mFA7RoeNVWDEyfPTMorFe4xsNhuEAoeWGSBu1ArfAxqq6f",
  "key11": "4YiywKJps6xNdeC2ypDpe4gkuF2STcDgJ9kEFhmxXPpgPjQxQsUSJBjg6UkVFtKhLpkvSkTaa6QPFE3JQoYYRckh",
  "key12": "3c5HUrVBv56TWbPHAnnzzCzZCiqwFCmQdCmQ5x7G35nkMbiiPDSrD6hvebvdiXbK866XfUGE2g6ox1ccveANcobZ",
  "key13": "54js5Ba1S1FNzY2WpEbt4MpNerzTYSQBuEia6dtSdbyUHWrnpwZveKncvfga8KyoU21QrkKfS2TQdvC8hZxQ4H3F",
  "key14": "ZWdT6XAsKysMWQ8DP7VKv2tHUDCX8CEs9afQZA1Hh2p6uwws6qo2yqGTjbP6kwiGXtK9vH3THNmxHJZ4HrQDkzw",
  "key15": "FtYuqvZdY4uEWbGMSUypMe85XaTqq97j72gDnz9WiZEcAUk39vspb2fw2SJ3y8cq8imoVRwmwzxyMxp63fZhe8D",
  "key16": "Q5wbyxhyc1NKezD2o7i5KBVkej4Lv8kWz7bGht6f6Qv8VFY1xjRp1sM7VQND8tPNkUH5Z1qj6socvEihe7bH7E9",
  "key17": "koxY7keo3SDCRYLX48cXfz36jV2uhZQbcaLeaX52xM4u7WnuPdzhN1yFoewcH81XwLdf2tTVsqZb9Ksmw6RaRQt",
  "key18": "3WFnsdGCBAPMCnZEaYTMXKvMzgQv4zPJc2NKDfEBo8oqEdGRQ5uLbDbnPtymsb6VovsGcMDg5x4haE4bxZ56efnS",
  "key19": "2ojRJMQa3bTwMsC2PsAuRkjbBTJijagSFo8BLowqReKqeB1gqoGd1uKgaoNAFTDkTBXczv8QjvfHret2eg4iuk81",
  "key20": "4Gy9HneTKBupe9KPwm6cvCDGyz6HCdG7VxtbBdXHNg65o1d717rZ2HQRGfioV1DV1DjfJdLWFeedyNfqtPXmiAvK",
  "key21": "2Nj86WQcWU1Rr6gRh9seNC89zLATRY81VjQ2KCZbVR2UTqpan2paa9R6BNrcADfk82YSHvZ9m7ZqeHehmM6y5Hgw",
  "key22": "DCWBgMotKxqfGeiQN4s94aUeym8PkPALp8LE5TPyYj78z6fPzduu6uZewXD7uL2m19nP3KnE6i6YX69TYvm9Fvp",
  "key23": "4JqkqTi4fDubn3TT9nvwVuq6wx3CnnJMaRvAhNUpsTdiFnReyiwfnLKjhh5e18TadiWJn5rY2WCN2v8htBrXnnEo",
  "key24": "5mbGRhqYcnG1EVCKHHDAEKyhQt8BTziYN1HGRF2XRSbiA7Q5cSShckW7ZFLVuWo74WQCQvSzTrEbMj3oz9yXjP4s",
  "key25": "4zk2QM9cBZnznHpuGs3gdDbBHnBpc2dXM8bSYigEDdYNrhm3NEzFut7JFm9EZbwgf5bBEsEsJJLhPc8qkwWDaaxY",
  "key26": "2qVCDEm3W471WgnrdvZuhCgiq9YEoSpzpvF7M8bWFvEVpbAMx9QGarEu73KYMed9zVhjNNAer91x8V4A5CS2wW1v",
  "key27": "3eJn6vUMXZEzUiiP2WDekiBobj6cVXVLjej5r62yVULw7Rr1BPWKAhyHUf9GyMvvRyomfxEgVE5waPyDRbjJteGu",
  "key28": "5BL1EuSE4cWaMfRHWhEXVxevTogywqaagMfMnFiLhs25nKhtY3p5oPyDGyYy51XcxRGGeLewiFrj3867MZrHGgco",
  "key29": "usPBdiP2EByQW61xd1Aow5PCXkpNW9ee6faDbeoVcutsRVkBS2BVLzV5RbZbD6pccn25G24E84YZxBKwKhhGVCA",
  "key30": "xi68TYNT2NcY8shzGBW5979bvt2ai2iTA87bowPUz8tKRL5BSdA7ipiLStKjk92q3jZGk5QhksUGyN6mykvq6D1",
  "key31": "4y2wGg9DL2w53zHSoRneXrXApdPc7tCEaHkoAfLizYPC4BRRRajYxLq13AGSoRe7Unkq49N1Lpa19NoMEXp5Qkvr",
  "key32": "5qYyVbn2TMmr9EVdVfzEsMKMszWpivSME94kE3mcg5o6tN9av4GEEK4B5mC4sN6SPcreNPpAQE3Km6GK5cM8R4Cc",
  "key33": "339TLKbXDv9kmJWt57gZVhLDB9Lcn4zmFbSRYNGGSWVYLw3VTnHoFREjWMg8Q5aVsb6KAMFURxxNs66ePV1yQecv",
  "key34": "qeP1Jm4dGca1bSG7m3s8vg2BKMf1fTUcvTcEAggJsMcUoWxKzQrqqVL7VwgoeaFSWhvrhbTyi85Nh6sHRr8BuVy",
  "key35": "2VSZBt5EDMotG5y3BoreaC1mu8MFCBobUoPNtPdW16kMJZFxnoRYNiD6y5Ao1QncCmqJ71eA1zpeWTCxSu4SZhyP",
  "key36": "5erGiMcj6vVz2GbVkML88naVGbR3NxhVQPkieNMEDw68bKKrK1YXv9FNaE8NBQ8hfVb1zSQqaq6HE1ps8SBTH3xf",
  "key37": "4TotZu68A7R4kuNn1XGQhec7FfrTTauHgUynWXeRe16jkjRAFXiuYBg9apNecWr3opvAQUpXCSfXZmKin2E9kCqK",
  "key38": "2jZvBZyH9v9v2Qd4NdwZhTxkioUo66Bw6qcvP2UvyvcSmL7ZfTRNXmcd1kMtwSXiqK6a9AGMJkxvjjSL3wSvrU8W",
  "key39": "2xrRh4LZUu8q5UXcx5VCXE2wBPC7hBGvjQS5FHQueM4GUGKnzWv61hXk9zzoLVoc7dMySBxrp7Y5nEgeFHjo38RZ",
  "key40": "JHK3HSu4sJr81Bdk2hjWmQvjq7DjfmznWaV5PwA7X1wW5hwXPeJy9qTjh5uQKhJxNhwRiT69jHcfkTN7ZxLftHJ"
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
