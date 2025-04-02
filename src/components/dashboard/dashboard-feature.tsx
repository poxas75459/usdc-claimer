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
    "5JB1Vt9SHtGFZT4yBfECayU3sBebMWuPQto53TNU2TEW1xgP9iJdadLdTmJxxtt1z5GRAcdu6yVy5Mqu2XoyAj1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c56vba1WRWiS5h62pcxMNYKk6dQMGEFhLzGkAYxoyqvdxeKS5BqxCKQ5YXfTYD7UFBYCTgV7gTjuzCwVmXqM7CY",
  "key1": "5UjWmWJJCNV6ketRtRTqucVepGRMrNvKNvr65THWUWfpZ5s49cMPSZcJf9Hg19QvsRe1fQVg2GxAatyfH96gbStF",
  "key2": "5K4PGjCSCvR9Hidif61iGAJeCZD1QpAniiVnwFt6WZopVEuizUu3XaqvdaAbMJVGmtSc3WCQy4JFzLd6MxcZzHgz",
  "key3": "YqZb4VcjH3wjEg9CkuGdqtKsMgEovQaSgHv1CC9i1CMFmqaLZmXzand5TXdJsYUNcGGvVYLzJ9UKi38C18Mfy4Z",
  "key4": "KMC6Eh1wPWDE7xEzwgCDA5VVrdDNEeoHFDGue5jYyj2ab63rhJJ9iyHd6xCsSRTKMpGJeXooDh5qJPAy6dq3NtD",
  "key5": "2Z6uquYK6Di5eFYGTBrvHF99Vhd7JR6tamTD5oBFGx7FUTbc2aXNV1dyqFxLn7pmJjDnzGasxWoLGLHp1Rq5U4zD",
  "key6": "3txaQpWSgAyPyBv2nri2zvymn3BZUFnRbCuzhqk9Ci8LXavdcihZz1PmhRchgFpurSB93YcqHXTbMzobrHWsUVWa",
  "key7": "3B7MxAYR4PT7S1UNGmwZsPW5nVhSmLk4szK6QWqPLgwqbYUKhJ1bBZX9zBHTr5gGbkdcfPswunXxeiRFNt8W1Jsx",
  "key8": "3go3hKfiNX6F89AE6u1HTxMbWhE3AhBf9cJD8f6nTYNjWuXAAiBvHUgKxqBfbU67mZpRh3PrJdewwafizDNKVaYe",
  "key9": "3VYBcNprWCzvhsnFdd81YzNKDDB41Nj5MfZgKMbuUQZPMXyfqrWtQkpnrXJWiYMHGvkBnDDCSii2oVwob9ByAoBV",
  "key10": "29yZWgzXs2LmLED37d2VJHMp6VuXACP9kmxULuRZr5LUFjL6v8EatWKZYLXVB8wcnCJB6W9RKyeKMsMpwtJsncyN",
  "key11": "21xCBN8FMHaDJfgNzwrYgoruayVRAtT6VJg4QyZmy2DGscwgd4frXVb8r9bh77RbWzU43whc3b1oA7WvVb3nwxRE",
  "key12": "QRmGFgJCVz8kAnqsBYPkFgMF1v3rwED8kB1JY9kLcotCtUBrmb2caT8ajWm9uYfy7D71EpssS9wmr2BsnmcMrvc",
  "key13": "4qAnm1pU2ifWum14sBgQ4PdGJN75kxD9nwenmZrrqEdGKDEnohwGiWk5YZ8F2axEVBXVPix5eYQE8dZZ7kMNYebD",
  "key14": "5KMdLizK1rYN1wTFjELW1h8z7ovG7hwKfPpkGh7N2TZ6fGzDCyUtS9yGtLjiFU59B1mJZeMbQMzWEos45kssc87U",
  "key15": "5JxFiZKvA116g6JB2U2rDw5KE4GNocr3CbT4otYAbc7kgVK7KHbiNvN9ojjcovq1u5NTbjNF392D4MQeVjf1KApT",
  "key16": "5fNKA8THTNuJJyYN2hPHygt5UAhGQ3VmzsJPnvoL6A5gSkgCEcSoZo5xfdeFfrBNCaBcPvGnm9t2wcyTBGNykjhH",
  "key17": "aSNSuKdk73EUgWHEAAxmAQbgjFrLc1yqghGE4pb495jAVVYZT4yNmC5oi1LeLuaYav6iPGA2T2DeBxH3SSAX5HJ",
  "key18": "2C9GyY5KNaz9usjQs9z1CopcYKnVnMqs9NMhHDZv3szmy355dqEDtH2Yd8A8dBN5ERpgKMXVmbjJcie9i2ZmY5Uc",
  "key19": "2BDz8sPVeKU8yYL8BLHd2KHMxfZsNh32PNRVE1uu9YzUL4zUsE1MoG7qz54ACRcEyqQAagCk5V8GhvJefrBmBpV2",
  "key20": "rqqJrygJVK7Qa8gxZ7MPqqwBWgcVqdZThRvsJXF9cLvtCpvN4DtesV9Cg9N9HprHRbP4QkrY58aEFqLanTvD6kD",
  "key21": "5KugkgXG5ZG2z49kmpJEkUL6LxxL7augWdgxkJeyQZisBzZrne5ndHwJr4ssJMtkfD3eYSFkkVS2rqXTKPs6Dift",
  "key22": "5chpNjrbsRwKK9DgBWg5iHpTC1XyPDYCaCKGj98qJAXH12uSvNLCtNGzHcmCXJdp3VSD1rMH7vAoRSegmSFRqTeE",
  "key23": "3EjGpEmt41TKHgSnvzDmwgXsX8ogx6aZR7phHxNs7cxLbUxuE75VYv7xUPJu1SabXH1zeKN4DczekM7JCtWzBFgz",
  "key24": "4ipuiDk7epRJ5gjwtqSC1PFNjdE1vq8VvXEQAJaBLrdpYGHoZRKUWHEXs1iSEYzehoNzciq6H3VcPuQkarRJ2kxa",
  "key25": "widJW11DT8AXHYYux6zwYRK3HucxPbLr4gckFHEWdxced4j414pppZkCtMfmJ15Z9PaPrYuZA3ZEbHFHUPqEdvr",
  "key26": "5ZvsvTXdbbicZMDJppAY2NRZNoXaGHaMWS4pCiNx4bsiRKUNVrJhLTDmPsG15FfA7eHGA1mpfJACFeXommjJ9URX"
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
