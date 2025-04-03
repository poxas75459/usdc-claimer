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
    "iNC2arGYMqv3iDmmX1xPHzYGELJyNAK2dnKNacCN82m9zkT2qRLcr53Y9hD5YtgzZpV1Jj6m9YDdMgnvviLG1Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b76nCVxcWGaaW3VWomyC5g7E8QAjpVEsr6VkCuePuYpbnC8erZuLEZwe7ZLTBmrruW9Es5SJiEAxC5WdFaBKF9p",
  "key1": "3G5TLTsKjMa4phwq6QVhfXDvn2kfLErbmCjsaSyPvPqRhHEov6z8zZgLMVgn7ZjhWfBErqxKPYWAGebEe47HjRG1",
  "key2": "3yJETM9bpJWe2addSwrvVUbENptek5nhgTrvwcsp1xatgWQdHKY1fgPykWp6UjEMqHdAYVHnrWpFFS1HjWA9GsRf",
  "key3": "BjS7wWwn66GTwnhEEMKegucae3xuLhtyoycJ1oA8KSPenLGT7uPvMGvNt8mfMEJVQ6YFTMXdZJHYpjTzo6VEBBr",
  "key4": "26J1Mv8n3LrRTTfmpgWHiLuF6na1XzsjvPRCdZdBqA3xdLE39xREEAHwFBjHYRUxFpHX2xnPq2C2TT5ocSp3g43C",
  "key5": "vc9j6euFGsCppSgXx7K32mPFsVNkbsYUuugd82RaixEPCj79zL2NrCM6oNGUcsNJj4RmNQL6qgeFmfsN9EjfznT",
  "key6": "2KL3NbuoPirPzbaDEVVjGeC8LEB28gPVfNStDTsrbCd8CVtQ5aFn1MxsjBddqTPQvEDo7NTkqee3RavrKRyf1FCK",
  "key7": "47UTzdhhMpm142Nm4avACyAiGeGHCQasgX4Hs29q65ktK2dV2aafHTVmzneTMUaV8diNmtjbkSwQYHZdhqH64s2g",
  "key8": "2aDwuQyf5fN2bDQQXHZsdBfgrdxhmAwbBtSH6AbncDQmE8kPAy4ozhXikBVzxGfEpBkEwQzfABMD1p72vTpCVbeX",
  "key9": "52VtmgJeZzUaU1WxGomdd7aScngozQh8y1tDN3zvqdowYJMpjSvnmTWfsvTy2rP125SbJaBE85v1iqjyFBdBKyVM",
  "key10": "2BLNHJRz9BfQa7U5JmSSLud6i3MbibTt2gMRuj973BqwpH7HyuE6U63HM7FQD5BGqnge4vPZU59Ki22Ft6S3JEhn",
  "key11": "2g7gzCRTESWqef3rZ2mycCSemrstpWhNZn2xyFyyCDSmPbLmobbVyA6sr97Fvmo2n8rLbfXjdw6aUeapYZWtraR6",
  "key12": "AMdTjXRDAiegnUVeQKKTWYQ1G9Hbwu8xvTPtMtWRYAHP9syySEWLXWT4sz2MFKuVmuNR9BqxPHeUAre6bdkYW9J",
  "key13": "4aDJCxAW6ArGDFmu8jfgFHtj4xh7AzbYRTHG3L76vbegvhURZir6V9Q7aoqXPXyPzFUQiYvCrE88u2vyan9HcZyd",
  "key14": "5MvqZDWhUxUJPdKnXVXUVF3dqsFCn8BexicQrxhqFiPo7cgrng6eAnR87GuqFiQEAHqarW3G5iUfSjSbU67ACNVL",
  "key15": "4N4RMpN49wCN4MsbBSsStUmLwQKPEgbLkcRAQD2H3o5sq4ucUN7x9SrHKL7v8NdeZhUconxeQk4fCMnMXbfmtAfT",
  "key16": "4kzY2cvdxxAMjZJ2atrydxwYm2rWGReyVtCyT7Wfg4g7pxxtKGXbkAh8CRuS5SaDxnXSh1HGmQcDhvR9eQbDzhe5",
  "key17": "672Z3FzDCPRhrgH98SXZgxA8Nn9pn8vaj472cT8KVzh5hK75bpB9hC7EkjBqWvnkE7wzExyrm4LFmWpnfSb7E9vb",
  "key18": "5WyoVYgNFYJY1K4oHD73SdKqcp75MwE7cnBkbjrAp6u6A19SRGNTSnoVcyA8LZnCqYK2gk9aebxL25uFyFnLrdoM",
  "key19": "26dbVtVaGZs92hoX2GcUTRQVqZT87KWKExxTtG7aLe4bbHks6w141Tn2XDtG8EfwX4G6Gs5q3gugd6cxASw2SJhR",
  "key20": "4ocKDK9FnXNHMZF2iPXiv2smTgDVg61H1ZaqMwrBiuqEiS7uno5zi7y9vRLa6SjirZRtVs6hzjGmaMt3igYKo1iP",
  "key21": "3ChpPRXYdEapjgWGrLUY5EpypU7uUYZNw9sHQqhwmYYN975Usu3x5xEhgECqLXsgsQtwJmjXa1BnBbfnksvgK7Li",
  "key22": "2kXWUDeqSTmW5nfaiCwWUfWLtSWa2KVxuwSAK3pNqWBt5JAun5y3Qj7HXeyvd6e7tkN2TK5vxpJ5eUmobomr2pLz",
  "key23": "5ABGLZVCdT8kso1URLMVutWftHMiS8Ntb5rP1ciCCG8trs3o4NJCUepeNDbir2ppsHnxs6rtST8SuenZwnVScgCK",
  "key24": "5aRR2RwFSac9kQyASck6rLFMPa1XCG5XjrUqTcBaSMUHkPDRN8ZhHbwtggpd6S3oGY6uQSUZcukmXWJh9V6fcZh2",
  "key25": "2JswC9SizBdc1EmMS6AGyRFU78DuPHZjWbPNsceJzCdefddzCfs5cnPBn4h2PhPTHxwq74GD7vBHFMrGKqLuAn2t",
  "key26": "5mp7qtE6H8y2jXvtziJn4ruU4esvDrmPK3nVYqnK1fk25qJZXpGNMGhaergjyu36A1hgRePbwFyEUTnk3EcZShWx",
  "key27": "311aFEmqc8K5ymfvbhnz5n8ZdqMYsnEKSkx87EFa9c15hW4QGYawv7K84X1HUUnX4q93abwBkxUFR7cjkGm2NvSd",
  "key28": "2vmMTjktv8aUySdDujBeQVc56zAq6dZ1RHDbjqTHvgNudmEFvH8cwi1tE2P6bEUT2RWchZv3bB34vazAVSXrfb47",
  "key29": "41L4PUzwKyTEYwMPXAwQU1QKH9djeNBeLo4yePx3qna5Y996nDw7mFJvrFdnXgzyBpspaMo3q5kthGjeZCwbaUSy",
  "key30": "3Qw768kbnepGATpNepStjQrP99oiHe1nvDugp3NeJ7hprCUmzH4wSkhnnQq9B2jLaG775yz71CDEcKfHpZCMVLcR",
  "key31": "45mrzJ5uszNzzWQUZwX2D7niuDsfQDe75UaYkQKjNRkMprwWqbgnF6CEeEkP4x9QQWfqCDKhNRSuh7jTJQaXXVT9",
  "key32": "3p88nP226mbC5Tmg8gVEnBjTgkHjxF9wLJnVC4TkvWkT7WrzGV2VXPnTgT6q923s28t36MWV5gTiC6JaFP6PARVg",
  "key33": "4HfCzQivQAFstunCm5rUHpXZN71JQuM37Lo3PKaxndVFcPVjRDPS5t21FukdcZuEda7RDp4AdoxRvpDK4RdzHaBf",
  "key34": "4qmpRSmPrKrNQZRPGWQab8S7usgP8YxznTrAijXg8SsgEGa23yTMLu88UGuxzeNpqzBSXC1RKKw3LQypwnxm5fv3",
  "key35": "3FBoSDmLmceig4XuJ9ppKMBBhTWFrisLmm5iaSoDwD8XHN8bQiBR3BKW5gAJdDMnx9KiRUigxPWNeZFLkRQmQ76o",
  "key36": "Q8NSxDo9bNmvyqWQniKL2qXc7GqZe6fAV1KyjrVaFpF8LsmKg1KoDD3H2DPMCiGiydBWqjejz5S4kzB7DQgtAD9",
  "key37": "KztgMdDU5awzWdv1ggy8DEnuK3ZMfMvfb8TYoNsDunQ9gQwgWfrRNVZjXWDTnUp3mX3H4nmPPbah6WZ46PyyNzR",
  "key38": "5prFPS4gFXWuPPdj9dveWfGSkK5ozXPLzJeZQ1JQRFHoomDMJkj7njcgYJkbgueiroDqSQxh5RuFZMjoBPabRyGy",
  "key39": "5jPtVYrs8P6kNTMx7XafG6Y2VBw6L3G1gvrA5hEeuV1zZgcdeW2knbwqKrY3K242tr4KRvYJXUyD1dL5tpD8HMvN",
  "key40": "zkLoyH1UePaLJpg5AQQbYyZLK4oxdnsw7vGptyimwdYFz4KnryYb6APpDU7gN7c7vfwA8uq5EQbL7q4Zrvkj69Z",
  "key41": "3Hg58vgDGQgo6Cc822V4W3NiLDtpe9CW7sukfZAjGYyuYzdPTMPeL6Z6DScfd4YxfCC8BXDkrC1TMYCEgBfroSAR"
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
