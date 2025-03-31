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
    "FsQ7yN1kDHQTjHtrQi3yjBU4eRmdUviZSodike3rqKGgwH25u3h7odUBBND6Ws3VKqb19cNDHZGEAepNSLRRJ44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5te7dLf8sJ5FP5pqjeipqL3J1PoRjehd3B1Yz5mHQDPoyfu4REjaDth5nKm19wr5h4L5usSQLLSYVeAdPcjJU2JX",
  "key1": "3FGdq5ER4wBZrTtrYn9LMC1zkm9oxQQEpTdpPz23egGUZJ12HJDViLXRRXnCgbE9Ysj8rTVxv8e7iovK6cntWPbW",
  "key2": "3XNzXcLT5PXXSVe4bpBYb7qveSrEoMpttspJUqR28j6hPgv7LN7jtvZRchE1Gx8r86idbX7gxxiCrjdWBo6M5XjP",
  "key3": "3Fw7o7NqzWUqV987Ww8FGic94bNsMPGiyQX5ucZeW1aFqJSHU8Cphxg2psX4oRQjAHnYxzouXe7yCFTxKp2eUn8q",
  "key4": "pMEhYNB5Hz3JR6CtaB4qUFh5um3yS8F2qBo9uoBQYN8vC2F52GfjQH8aGA88uZuNTD9vw8ALAdCFMUbmnSgEwNf",
  "key5": "hYnGEi5TPjea15LuQza9hk2MYmRtQ9iCsuu7QYwyAM4qhWZjfJgdvW9dpuWtSy8ttg1tshU2NRKF2Z4NMutZHYw",
  "key6": "2d1ooEqrToPY48ongU3sYMQUAW2w6a6XmUFBE76CV51AzdnR1ZmFRP8jagBWMJzmmg5hfj6rocdJPgnu6hnC4UkJ",
  "key7": "WKQ9h4n3zcUbabDXDGeLhuQGriPjXQ1QFcvq7C4GRZsFn7DNzroRFhBaZrCm13hNaYoYte94vGxgqYXoWbLsZ5v",
  "key8": "4nhLLHehjiPMd5xc6fq82RmNtk1PUh4BURez3G1uq1MqSJrnm9SKE5Z72c1gNpcKAD4P9Cj4uf9AmpaWXokmMNRa",
  "key9": "238HpVZen9QXhE4h21PGVKYssyBcHAxjwW2Qo1jZrV6aSjSBnsLDbg6eGThXG8P4wAw2okyMeWdri6911KXSSkzx",
  "key10": "34PH5HXqefVx4b5LtEWWZwFKa9x2RC4eyRNLx31SXq8rtFMSeN5s2AG43ZReqvEXMFKmFUMesb4n7wmY2uGYBgBk",
  "key11": "3pUHRLv9m5DzQqj2RLUqQEJC2pW1Xc7Eu8ChjjXkUHEFwnBLjsjbotL83SxLKbPwndkPg8fLGk1FUdedq2T1EKUy",
  "key12": "1YzE55jVt7y5Ep9rZmTGhhLvd838YXXTyqJPTishswoG5JAxKmyHXxhjkNgr9d1Y6Vj1krRQRdbqyDmWVU9GyNy",
  "key13": "2uAgQ2ugw7xiMFsFv9rRHscmDdPRVdRQFPPqU7BVXpBz9Y25sdeYDcFH7HL6qYbLQBHKP3S6SLV14q1LspE8va1c",
  "key14": "5Zae5x7s41ieEjd8FPNBSj756qNBmcAnUu7P4d239iLXSmW1CQ5sQyw23Gi8TPgw1XKKvqtAJWfUSx2uFcvC2GkL",
  "key15": "4rE7R3nhxCdQLPQe79U4PXvLDMGGR75eB5PKN4kvyHt7pNWHzw6cRXCxCPXbmivnBTqWvfNWfnmGpPxkvFfJg3Xk",
  "key16": "2YB3XrDj4SdDUCbn2c2VCEMSLJz41pdAaLStasahWo6A1TZt26QeLUkrNqjCcvVPUFWJNC5JpZJ5BNg91NmEqmpq",
  "key17": "3nDKvXKQrXPdwppUa9LchdBekzxz1JTy43PTc19nh982mVFndtwRpVmVD6R4id7L7icw5gitsXPcnziTXfThfqhV",
  "key18": "jRJi72mJRXe2kz82VTAQBMhGYKwj5eJioFdkhibrPrHEAhJLsqJLusMYddwT4SsrpRHEyCUe19Xd9DVfvCQAKPF",
  "key19": "5uVtZ21rrdwcH1ey5ZxQ4PsHV8N6YVw7CJ6ynER7oGCGE8vPh7uCXKMEJJzjB8c93AuXWXCrjddP4rnfbQw1AL6s",
  "key20": "5j7oCVd6Eig1d5BChWvjaGDHdnTDpNyPRCiom9nUBXuePZ54iVUQrts1b37UGCZnp6NfpWuMH3WRxn6CWf5KYYam",
  "key21": "2xyjuHB5uJtNNiHyLcdftxV6XQ9ePdB5BQw5VgVcvn3rxyXW3Vrtp23GQGzGT9ZhibBAkLKzWn4s3EuqhdAoZc1y",
  "key22": "2DaE4cFxg6hxyqiktrSQPxNMXaivNxZfjjzY1V4tDcLfeDxh9XfezrioHwDmynbc7FN2tE64a4uxdwZmb7uJhe6t",
  "key23": "2D4SN5Za1Zq1T9TVT3hKTosR5KKojK3TZwQWtPAeK5CY3S31aMJNJGmGVNbduEjCZeyHMU2wZvABychs7VY7i3uY",
  "key24": "2nBGyTNMfggxnD7CZpa6vXrr1RLb4ZjXSMNcZJY9fCcNFpqHfb5y2EnqHW4TJrPNx5uRVpL2M1arjVraMdSUywRE",
  "key25": "4ygZe3BPTfEJ5x93YJNZSxf97i3u17T24iJcSxDzvEMCSkgr4exXs6okw5EsHkV7JzUUK5GCzzjdkqaftQmTMDha",
  "key26": "jGh9nTtrTDck4QptXPi72fpTSavN3GFy2nUMF9EwYzheo8kyaeLeX4Tone4xQiGnoEpFPZLx6wF4PGEBraMwTJm"
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
