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
    "3hqDXW1BRidADvBZf3srTHYGHc6eRqNrb2xjQzVF2iJ2zcG9BUmaAjWfp44mmWtqs94kHpm7BFo56UzLgF6kdKSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FezZH4iTH9bkBxxGqhw9cEXMLBCLxhk1yLN7vccaaM1MmBoQBeGdqRtQbLFYpjo5PNRaHEAeU8SAiT3Fd5LJBbg",
  "key1": "2MPQkJdRM7JgDk5XjbynwXnDWPADd649DyRpTvyCZXVJx7kmR3ayRu8D1pXr5mAJ8uay2PcSsbw85a6R52Ftrz3g",
  "key2": "2uQGQEKRNGdAUyzXUARdFgiXnty8TZcJud5XuwxSdHpFE7PfvypgwNPog82XCQt7h3EZHsRtHRqkJ7nxkNUGyFv6",
  "key3": "62UpWGX5fNeC7DaTMaLYzKNHetifhUtAh93WTSCrfdnwpiomY7PDn6zwY6duK9SUXg2m3kC5JTTuTH58it2L6uTi",
  "key4": "5kW9x62xKHkvy7yt7XhRnaTdqs6AvE8Mv9JnmVqUUt1QS3CnNzbF9ddC4goebCjnqeMwKTW8pj7XdnbyRTDohZjZ",
  "key5": "5CsSGn9HC9hTuhVC4tY116fBQc5PCw2RSxa8crCGpBMob7xkKSkYGdHPiZLgtAzR6Qtr3Qxe6hD98gvwBcfyzmzS",
  "key6": "28SpkPcQNXqjKGXsZPCYS54smXuzjR9Dv56XxxWtEtKP2rWDQeCEAngqs2ajP7n3towXmWEB1SDuvCif1rn57YYE",
  "key7": "2cudvtrwAe94BSSLpKd7E1RD1Vv9XAASV3KUw6EVFhKER8DyrtJp9jpgp4mtt3GbvZEb4iyf9bJVVmd77iYJMPM8",
  "key8": "5ymDxrikzksHny1sFgdXYyibxqFZAY3Zi2nRPYYtY52UZVM4DbTmTEzj7JxLznhtVkis4zBuhUr93xVzRownpdHM",
  "key9": "2sGfESAArFtB27QkvuRmExLTKMyxzDd8soosHTM5jBrWhtj451UnQ1Pt4dfKHn4pVneTpcXypCkx2xwVYwe2gnj",
  "key10": "3obDrtvtRbZcqi7YkDLvxCdaV8EUR7Ak3nSfFwk6RLTwhdJkxGbvu4zqFfpwVxLQdha6A6tBwr2BNXQFiq8hJEC8",
  "key11": "2YcfYZtB2bjDnAAE8AcWNniXABY6LmCSEUoVpJzfnWq5ok8HFCa1cQMyRzzqQ3RUW7k2fH7wz7acU74vjceeHy8U",
  "key12": "2EsscLEkSoZG3Vg2EzbdGLHgchDtT1KvDimzV7jcrV9Z3tX1748FCEtCZzRRyoeQfdwMuLDD3y73rxYHv83kZDZ9",
  "key13": "3114XPKsyVbSCqde53wR28BVFzKMt5qZbauzSqMTVujd1kL5LQKjDxZr7n9QreJypsnPYdjPJeJ9Ffr959gmHdZv",
  "key14": "4wSm54mpBDKsbkWeri3mgvochLrvLarvmFU2srov37rYeMJWjoXHxLSDLEhJi1d1Ec2qF3robnw1jc2fGSRcJqtv",
  "key15": "2TGxAB2x6XX3Uu55dHkEcHNZhSGMHvkiUS2NyA8DbGgydCKCNt2s4cnghtZ5QqwNPH7B1kjLcyE8cjLBWrSn2iHH",
  "key16": "5QTTSAmdBD6yWuWSny69FaFEzZuhjPhUVMkY1KCokSwqUm5LFgiVrA1nUE7kzgjHVyvnBLwn9kbSZcs9G2yBR4c3",
  "key17": "3eiPurbzHUE55Nb5NGJiZcnmeHDFZHnmv8NHrkhfqk54Nu7t62KBxBxo7Dj6qVwh9cQmo75iCcKBNEZvJfjyRQsW",
  "key18": "5D1xY3qYAHgJfdHwkBPnLdf1XvA3crWxo9CwqWaJogMJf46MpyybrEJx2cwhvp84rpX4Wvb5H5SCcvVcs4gRA68E",
  "key19": "3EdbNpuv767uNSrh7Nsg3WnAmexUZK97FFQZhdBsJgkYfJbjWGZSHSsDLpggEJ4zYH6UcYoSkjRaBMQXjqcs1KX",
  "key20": "62uV4NpASeS4bp6PMffmmuDYxqzqPj9q9yd9inNqnqtmEauPejXhdbRBERF4qXcxDU3Nqjcwcf28PtGsYuPKTTfK",
  "key21": "4K5Prhvd4c74zdhiCPYKyLzPVczxebNgfpUCK42Z83VBh7xYQqVQkjtrJnXTfjgXs31LE7hmfo7P32dAj38FJaN2",
  "key22": "5XD1DP2yLrny3PJCeYHvkto3F76ZRmMpPxdhfa29U1J6SWpW3wh6mH9QrrUP8k7gcgmwWMxVPGcBv7LNyxGwcxgK",
  "key23": "4oChJG18KBM2f9ay3MsTQRgXNKDfp46wjj2s9xS7w8XPJDdNHX5EFYLMrqQgjsHRbhU1ouxMEHDHid1VZ1pQXW6R",
  "key24": "2yKZtK1qBwm7RETxxMUWyN2P1qTuEMduwPYskuCCZXtmxK6zqm12kVXPYnBb7w4vg458m6udXAh1c2FRVHThN4sT",
  "key25": "2E4Phg3CodkqPwDKpPK77NSaFhRwCWnjohT8R522DJEWQCEAidP77SxLpAD8pRm6fYosE934wJpWy6xrNs8KRTsx",
  "key26": "39kJZSKLEgR7vazoZzqVkDnYWWNzN2Rwoctvimwbk7nnu9w1mqVMoN7mGMFAjkmEVAW85ZHZeye9SDpUxNfpVNvh",
  "key27": "58hteYrPAQMvAZxTuRSfkwixWQoTLKu6uoNPVdZb94KSb8dbG1ffKowLvWQA7wsu6Rn3xuYHBsG8yXeVNeJ7s6vo",
  "key28": "FCjTDVcHCzaUtGxD3d3xE6oZbTzEaw4WypzGqHSuQsJR4bDHkEAjqp54ab2taG1DNpx3ShwRWQEHtPpc5sdPZhA",
  "key29": "27i2hDFD6UTqDcNnmfPLtbiFjRWjxmqhdB9icG2GJ7rTNknAByZzcaRpupLaDrJBvTTS9pLjzGEL2FvH1tdPqkno",
  "key30": "3JLAUysN4FPoNyff3FujcHVcQ1vwPnKm8aascpha5r7wxJd3QZoDPzimXSYHgqeGc9SrvHGRjp8Ax1i9L2ZGEjqB",
  "key31": "2pkUpwBujp9vaWbZSDspoEvecwZ8GTfQ2mDjMo3Na9kx4UEAwKfPrDa5KeJbvEA1GPiABtA5rey8mbBPHvSNjyyd",
  "key32": "vChuAxmSgUeWD5xyoqcLWdByKRyhjyPdprFkcbzQTz7rD86SedeMnyMRKvCXJyk1ysdZPkAciHZ2SWCkPbd1Ebj",
  "key33": "5SFs1GRWrDbxm94n7hPK5Kwigrd4Bc1pvYvvZYpMie6Qp6q13Es7JJKDog7s7pUNKWpn4nKDF5SKrc2LAxHm2fmp",
  "key34": "4WDVX6Ri5Vtntowm3czLJf5jRBad5SgmGzYYyg2P7zt38kDEuBrCmBRZQxYw9MYzqeQdu41L1JQKbnkPUkm7kZWX",
  "key35": "5Ft23bM9apWbHnwoqNmUV9xiyNWb5hQuwpYC1EKYPGycbetqvbsLRry29J9wjx7ae5sANekhbhZvZ1dW7Da3NMxM",
  "key36": "3qNJ1RoPQcTbn6cP3HBpuJcZctAGXLsUyGrjTepGu1Zm6uenE5rfEJu1wERCqkD3CLUKBLfmsoFbPkuqkhE3reSh",
  "key37": "a9MaEpJjdiwmdJZk8bVBfGgX77b6cw5dXTZk6tegQAKDGKxtu33Ypn7DzgsWyR3jMDhsvzpkpd4uFHgeW9ieXGb",
  "key38": "5453DTEd8k6Thu8EMXJ2j54wRtyDVQuHaf3V1TPxJwU8SaS1xEVjT2gZSpfbnHpVBPmJHWjH2jfPnFCL5X1uZEG3"
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
