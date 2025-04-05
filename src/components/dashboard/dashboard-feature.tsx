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
    "2Cy6EvCpYD9S5GBQfuk3RvGR8JdqgxVde5fy6Uc91twr9H6e7zGHze8sqeTWgMwVUeUABk6kmxaodh7ec59aEKYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ioNWnv5At7PHX5YWNRFbAJrraMoTgXB3o6Kwy634fjT7ejbMF63apW6qJQhtonkvHZmSC1A4d5RmNPR87yNhFLQ",
  "key1": "2WqHjtsRKkLWr8G2dSFVjvjitoSWFoTEZx23MvqFHQsrfNBEdjBhiuBmPshBSEHMUEo3Y9Rhu6HijALvtJJ82uXv",
  "key2": "UXo4TJkpovVQ57xxyZZi5aUppt9t9NWHqa2AKrLH95FZpwUkdmr1hWycb68QE55vBhWzuBxoh1oQdDEQt5B2iNk",
  "key3": "25rYpEmKgaCdwYnE242F4NjCUXmXZtHEw38iAmnVhiSGfK3WJ3JZkDCbeEnPBoXrY2BGgE2F6vSDGEkBAu2LVtt2",
  "key4": "24BAJmMas3V1Rvn1DyfTeHrdGBk3zuCJucztfwtrkkxrBq7KHeNULyM4HXsTx1sHmc8kKbSNbnV4Jpm5KSMDUYQ3",
  "key5": "5NCSMRsYotrpQfw6JVVJguJU5S1781deTUbLWe9fN2KUkFmyWLLzsRy1Sd5c6ZbmJfDbAG2QdXU2UtsXcUAB54hU",
  "key6": "37sQBsTa2Qh678YNGW1iKNow5FEpJ7ZtQ87FFdkfixhJhwxhfJx2ddZjzgsTZpM46GtBoBUQ583beo894qVETM5g",
  "key7": "5jYncMQCECVSgzLPF2cBHqxGAduef1oDDQKcbiRazeBFxAAy39r56uCGeVzKMbzmd4crwUK5WmbSZKUvvEF1WDR7",
  "key8": "4xTv8tPUdpwQxqaRRBZpCGBE4k7eGpjhu4etdevJb1uo1ZCZM3ApzTXRaYDVcLqr6StbCYWhAeQUPV6NmUsSQSDM",
  "key9": "4N6R25ZutGMEbAucb4MwRtcs2NzMCB8rVwPga6pmNFKAhyBLqASyqH88URWwjLsSZLNeTJxErrjVTAtwv4rFAwnx",
  "key10": "4Q5UY7G77zSfvnC41jvMjMtJX6ajQnW54j7s1MvDqZ3M45SopyD44XFD6NguQ8qqQLwnKHJAmTyvY5TLYQVJzdhs",
  "key11": "5cMFVGW78HAXqm3nAzvk28ANNra5v9P2HzceiCs9gHydj2z54UkahhPHcVW4kDCMvmedPLbG4sRhqoWm8dxwtDES",
  "key12": "wn8nKAji51wXMgLU1zYCKtAvRg4ZfJ8rBfLMTtLQ8ekBKp19XFV3GqAKDJzoqEVzFop1sV1GRKLwgPha3qBMkhq",
  "key13": "2DX3QvF3vMPoEB36BauncfH2CdZCkt4SYH9k3P7t56TivLGKJUcyKZYxq6DYQZbCxiyrrsa4kFBeUWU8Bo1JCSL8",
  "key14": "5YAttHT5YFFc1WAyvkPm7sSfMsWwyNUPszsS1YnA4BocmrA24oeiXhPyYxwyZ2UYqCwA87hDpbuGxypdiWoNP3Xq",
  "key15": "eZsBVKSfooeRQyGsxDGJGpd3iiTLQGY9MDC2TYQLMWKJzuCRDUBqaYfwdUitAESw7vEKMagFuRMGujeRhnp2BJp",
  "key16": "4qZcx3kBoxkv2gkUEZAZ5fC2oGn6Px1k26XYtM5PP35Hbyby23ayfmrc4F4oXsXxg63ZMuYL66utZ9Fd2MpARC34",
  "key17": "2Kv6XM2FWeesU1jTjVJHG7uG9NYfuLo4gSjN2pg3HxjcuZdAwQZjuoHwgG4aA3Qthpa3xzJvRiqQDXpYH6anf3FK",
  "key18": "4c83zpaAd7MEqecNBP7MnSgWYZ47uBigngkSUMN9qp3PYWQ47AxHbwVxY6wKRxVaCFwfWeUU4jTghV19qA9iQSgR",
  "key19": "3U39MKBD21nYdn7SPDJBDuAaGNcNbcAB5w63rMKd2KNKwnfSGZ745Jc2bP8povCwxprwp93H7cMBKi8QGNBhouC",
  "key20": "4t8XhLw7y9Nz6ixoCMaDHA1WUiFf9goEBL9SN6XDFPHF2P1JrJdqevuYnJytqqp8MXkkdwkRNpqYn46tC1YRE1ww",
  "key21": "2a4nupurmuUdDoAmrinFpW6KzWrxz1uxUWgLjCEJs98ZK46bTKfwD2MqgFE5fmQN4HLUKWPpmRSuGVAv5WL1Hwqh",
  "key22": "c3Zkbn6Yki6fbFahtFU61JFHJHfzixCNFQs6M5L1RtJxqG1r7iXCdv3GpVXmHHdyrA8uudcfCXJMmc2bE83VHUZ",
  "key23": "EK8XKjiQWn9x3uNv8Lx5cYR1NZoet8YFQYCQvoBfzsEJAWHdHbBAuaGSQpdbaxkA1oY2P5CpXYyV2dLVcR53LgS",
  "key24": "4Xd6VE2vaeVMeP3mWAnksUNa1vQe7H3SqNdihJBRx6BK2MV3VRdpocZ3oFF94NYU3cKAi3jMfs5gFviPTYhXtdmT",
  "key25": "5joSMdkAPDRfkCM7PTHWbAcZzg1cR8TJNCjooh35zad9aaj4WK9E3jxbdb44MAaQQsPAEjJPJZ7JG6hHvPExXa9U",
  "key26": "5SfaYY3x3zZmcDZcXXABFLE3HEddvW4tRH1qV25bQpxKJaLyq7FWYhr5ZyK6zWCrgcWtxv4yRTUVuDbYMMTSoTsB",
  "key27": "5tHvpBNx3bX7hcepQAZ5D5r6xAWz2zT2jJBa3CubpiA9wvkMqvLy6zQJHtpLnnonDmUocY178MjYw2eURHbCGUrq",
  "key28": "26VG9A3WXJkQ5f1BrcrjB4X1XQVgHazGzYmQZNLVK3y9DNBehQ38xzFPjFggoXCxicyMfFgM7Ddw1JF2KCSagLGE",
  "key29": "3pxJvfozz9QvxvFYZ32LkaoL6SLj32dNjd451EAj2WtnG5xvpHNctPFAkpGCZuwA9J5G7HDgMKubpcZuabYfuVn8",
  "key30": "3LZwsaPUzde5aDKkz2Gxgw87Mw1HT16ncZtFamWBXnJmkGx3MrH6EhJmSwwLE6UoLFEMn7V1CFUH3BRLm7XGxGwt"
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
