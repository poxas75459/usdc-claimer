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
    "4jkwQZy7UZeXcTEwygnx2HdXLUWaBCVTR7VRmsAsWmztPNaYFdmVqxbCHALKepMKuVDy6YMWubEhh3eehkwDAk3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QYxJQZerFpGcHzqW9uwAvVppKotMEczgeGiPUfWAiANeTapRu6xBfjjorJZv827vsufWgRWX8TiFzfXX6qMbut",
  "key1": "BJKqV7bjFLttbgCZwcQyDCVMhDL8r3UXr4Z1byeXpRbbCm1HurnP8F3iJUzaUergLudkZJpMNpJFzEb6EnBe61W",
  "key2": "NhCjccShXMeM8wEgQQ51Bh5rJa4YqA661PhTqgeByeiNmfFy8N2ogFFeeow5rSA1cZLMJrCYgW3zNKPSqRqeeEb",
  "key3": "LZZqV46LWJWxzLHvadnfGr9HV7k4scqna5XRoPfaoqacs3QrnR17SRGDAKwD2TuFFVyPKaP7nn6o8HQc4vCz7Dh",
  "key4": "4pRxa3yL3PH3KVL2g4eZojQ1Y3TpBZKpDr5R9eZoNgMG1gCxrZ7oZmgbLsbjEcVFD6zAeK845hzunJE9891qPv6r",
  "key5": "62MDLYkcsWqCigPqKf9iSiQYCGLK1XrpzHpeuhU3nofbjKaKiyCDHNUbZJjhYzXbhuZEWkdx29RoTWPN49j1Jwan",
  "key6": "3Xv6dSbuKThhWbUXShfhRgjKKvkMFqHSxDYj7BZm9FRiTfhALhSUBfdyUznWMVvqYpFgCB9WndrNdwyTi9MbJtfu",
  "key7": "Hc1qLM9D3dapeHSwtQAHa9mx8jTVH6E7vX8Fr5oqHyK3P9GAWMAm9wBbKT3gKmQQrvY92wTaxSbmL3fps8gFCky",
  "key8": "4Nb5eRbAWC6XwBHuvRSe4br625oxWr3ynfHkegbcwNyWzqc2At4pGqrjVoYo73qMAeeWku9VSuqZRmLhLUw1EWpC",
  "key9": "WiFyngUhLqg4A2QaDmgbx2FyP5sREWf7fUccQ3qadQYQubxsfeBpAR9SakcP2P1mTRK46MHUX871Ks8U5PwvTj6",
  "key10": "5CxXPaXNSfcsqnoDs3FVXDmdGXyQwjjDebPwUrP4N3WPfveYSCdNuCt1hAqQEPXfW2ZNQ8kRTM3tW4RZyRgn6xAd",
  "key11": "4DSsgfZk8fR9cP4JgLrJ2TCHX1SN9Uzw1cicKVeG3Q61tyaSQKPznKfR8yATB3uUP18TNjkFQqf2gAVJ4mLEFTXX",
  "key12": "4Lz7LuSPCfEbSEr6mpSSb1jxDxAM4my7KLdFLrRwDhbQXyuHiuFrEbi8TVUY1Vxj9FZsggQra1CTv7CUo8gUy2zc",
  "key13": "44LHzZgFBayrwxARvtAMf4fpMHvGQENw1BfHQ14raKHFeHfwRBWn6dSQWJ5XCCdBBcLWWw8nAJ6TcHB4PDfsJWyq",
  "key14": "5CkfA354erqNvhWTk5b2QSzoXsSQ4GWvLmPMAPThGiiZEbFrfoWby56Q5qzoDFwCVnCqidRLhRseqSx21VZXaKPy",
  "key15": "2Qj3GYgVNx3cbKNS1JdMREsuuuoHpJiD23R72UtqRbj6z5jmFhdECnRBJwugqj45LonwMiPKgtHf6sUudQVGK1cG",
  "key16": "4dtkxYHnaJTDzLB92LenBWVc3pFqCjbgZFCcuDqNZH512jjUfQ5XSsWzKU8sv57h39EjVhSfjXcXrdoFAWiEXizE",
  "key17": "3hC7TJ2UxVXED1uWuG21Y93LR249bcxvrXVKaRxJ9RAFvM63iRYzTWjKX6463fHgVRKgwpdd1VmxK9H6HhEdfTi3",
  "key18": "3bXJzf23x1wYJ6vejgoon9Hb8vnHLcgvvrxY9iFoVTN28jzeMgNAA6TicLHzArLW8G2qY7fRMUrMZzuhmnyqTytF",
  "key19": "Ui6LiDCKRP1754jECEkT5TC8Kg1iS1YGygX7G3yo5WQFeDrmwE29qUeUMotzCPBFaPK5k2KTD2gz8uogx5MKSG5",
  "key20": "2F6cH3tKLMX3gDHFrptsUAGZczxgbVgHSneFwjH5ig1VWJT6HbxKykfHFKMigtjka2EH6ARbUpzrarTfzDswEs6o",
  "key21": "2jUXRzPp8kfMxWs6WZdV85BfRKUJCtaZSKetdbJxgwoG65j2DH4iozw4jfLPMZmTUdU8P9DxxjsxXV8eYoNhH3JW",
  "key22": "3PwmoWCJFeBozJx6yyzVvacivXkbZFcdoXW5aU4oGvJvXH6NBVL8GUKwmVNmwAPhTrmrT8vRz9ZX1rgLNgNXSMzL",
  "key23": "2DzDXcCnGceBEkFiygUJxxiEGcAdp3JLUpDWtPLL6eDiiwRB6z3V2X4ghu6KR6D3kffF7H9JsHvRcpUa18u1dNTe",
  "key24": "61zJs5HqagXCwb9oYehmNER4nEtVfdjXVTWpeR314exnULPHRPUFNULBgK5yznmCyo6dNeQpebHuW95ohZaD6HxG",
  "key25": "2Yh6V5jDci9TssPvifiCQW8GBhjHAmAPZbJTjV1qG2ZnopynzaDX3UodXGJVsRWs1qRzXzZ4FReDUnBWWbhF58YN",
  "key26": "5KRodvfQ8SKQyknBP9VWkGKUtKrP5prFXkJYM7LsW8cyr9sXdT9yNtZxqHnPq6qWo5JpVZvm9RgR7hHvpJppwHFv",
  "key27": "4Df6qcjrVVznSMAkcbq7neKJNHyUQWWzAbpBJWbp2nj5pE9PetzC9FuCDWmgGN1tvuifgD7hfnqUAf1ysoVq6yrc",
  "key28": "4aWczDn4VnB1ByJD8GZs9omEjXadBYUQDyHUEB5Zmc6vm6VzGSrzGJW17G6PHg2crCY1QVSXckiFBW2UaLus6VjX",
  "key29": "2q3FuAQUMMu3d1rA7qXgXQgzeDXouNV392iuz1x6wKmy8ckdwKK5z3fxhkBLCMHnpM83wm8u8FXJvpw8FAB4QAbG",
  "key30": "4f85so5Ka1KZ7TYYZRPqHEdMQLEX7KVMSZ1DNkHZ1X8rUU4xH3soAcbAiERPXq71W9rW6TgGp82ihvr6DSh8JYGn",
  "key31": "AZSSYZs9baYnPoaLyBCMnsPhHK8hGxswsDstS9nvZgd1W97E9UCmDnDsyG273aFupUZmPfTszFAZgi6Qcucj3fa",
  "key32": "42eYuskC4xsyyLx4nK2MBmfw3nBmX8eH7P12rqXKU1dpmPWhYxVMsW4c1WvVj6ikLw27T5iVVPhes4L6kvyS9yEK",
  "key33": "5pRkAqTkGyTwDfs4c5uDV8UQ4SekNZyN4bEctYBttxz69FLJn7DytLnFF87yWxAsuMREq2UUFETEkrGxL6vpcNQn",
  "key34": "3N5M8A71VesDjs4TWssAcQtFCopsQW5Qrkodb3cweoxtUPjFk8239wxkFEZV2phEThabRDuVxL6GLz1yqMFisyWc",
  "key35": "4aS8oz5RZjzEPVMST4eSBVnzNiKtNQnvfEM8bkXqGprumsDNVJ4i928qnbRnZCHD1paYFU8LP1vHd2d6tpqL3unP",
  "key36": "5p7iUyiSCwAmRhzBKN4oDWknXJcgdwAMhzWe8waUK3gnWwFn5RiPCK19RVUt2gDpm4yNE3UssFaQfWgmPbuhSUJg",
  "key37": "6qtADPaq2t3d44TXqpD355a55LVQBHXK3V947CqYh8noubxU1A7jJWbk7pV8RDL22NpvAFh5HQU59pL92sW7diJ",
  "key38": "2rvNXpFe36ULNiVnRahiyb9MU4x6p26MfbHm7c6iZgwiBDbjMnov9962tFDnx5Y4oxtLJ3deSNqAWroa8xghrRhR"
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
