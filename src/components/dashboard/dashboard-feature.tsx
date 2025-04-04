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
    "2bqaBZ68b4Gm1wB1SuxUHe8G8gFn93xpyUH6NBUH26bqfzE4Re2BDbX1qujjFXwWdm7egAEWzSuXuTPXMirQiRNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvikXCCC2qNL1i9APBcCX5FhK1WtgxR7TZ5V2d8K9kMscHLV7isW9k6bWkcKzaBCq9jPzkTY3p89EhksRzSqo9j",
  "key1": "2C2qagj8pxvjD9WUBvmUjXHpnFBJyWrFQJbnHWp59Gjx1zLCVgeomCqBdQjSZw9sVHMsHfKhGjgysM71DRzdjHSr",
  "key2": "4HiXyXWHbYkyzPVLuSHVdWUfYABqbHemBNuuAyn6wsdhmekaEtq32zgrSuA4raLheoAV12ZAC94p6Ev7tniNzvhP",
  "key3": "5amSMyQmCw2sbgEiHi8LqKDkwZn3yZdqVp8N1hXLw9Qfzsu9JJCszM5bjzGWbigp4cwyxGQhZXi1F8S4gwcRejDW",
  "key4": "4AL368PztkZbd9Uo7tbHC8a1nJbQJntcM9DpFjSkqkna5aLhUE3fD9mWEKVd5F323EPj3SsCRV65hPNuzLEBXBxg",
  "key5": "4o3DCrFG4u4SUVoDErhCf33xXgtzXhzuPiPYoqtEdiKGZ89dSu6xddmMwdP1PUvjcVdSZqpdEf2TSnGWYSWEJEPy",
  "key6": "9jBCa6YewiQ2NWpABTCpWv3RcwZbR6bBWPva7aEg9xVcqWAAWd37ZSYvAYVpnr4kpU6TETnVovSLvpjBJY9bh4U",
  "key7": "5YbkJhyYUf9SwsieKdRKZ3ZK9c5NrTn4iJkkgbMzzPB3jmLxDiy1rMSsq7ByMuYdff5GTKoiRMw2kaemg2XuxAdF",
  "key8": "2tcuQwFof1ee1A9q2XoEWVnPC1KunAfzX14ck6i1Ut6UZ3yhWJBWivdcut81sG1Uc1NYX1jgRimhv4qdB9i8Hv4J",
  "key9": "3Zq9i7evt1SWr9Ln5RxvJg9JyMd91TkCk6dZrhEGKqw2DbZR788t8HdvvbQti4ooyyGZtQi1CP4YLVmKRfPJ74oz",
  "key10": "QxHNTHuiuLvZFTCNvb7DFLGdXurtABBjiJJDqUWbNQgCfryizvZeZVUjhWhYRT4SJ2Yuuo3hBxguP2uFBwLDyWz",
  "key11": "2osth5yXsRGKADpbEKzTdhcSQM6bBMcE9CcHmPafvXDuKnjbhD3V3jLmByC1gs3ARMPbFGzcGV8Rmmaua6PA4WBG",
  "key12": "2iY44Xzsm1qaoieWooU5o2gggAtw6BWDKVT8fgGRMWyMbBQUkypKcPSnMLWxE6rCsvC2gCdutZGD7ygBw254uE6c",
  "key13": "4Gn8cPXD1Z93LMpNRVqReFSPP2EhDHyuHTwqkXaCDtyyFrQqd2wtWhW4fUjqCLbnv1gx5obidrJxQxauco7CcCb5",
  "key14": "2iKHD4qQ3Y95pHdCW1BFf5trt2WJrfuPaR95Cqti4Tu7eHw56X31URyUGNpkNSs53osdU2TadbKhVycZsXfydzvv",
  "key15": "5EhJAQPQKZxFY2CS9mdMHaVk4iKuYQsXBQXg2SejwBoSUers5S6KRib3WE6bY5ug6WWibDTaiz3dDEHciENgLHzp",
  "key16": "2kwzjDECYRVD4KscTm98qvSQKndCW2a8BQgGzQB2L7WNGdEsx5sqNCE4ieyBV9RVyBBQpMHwdZFUG3VhBHYufSVG",
  "key17": "49xY5GZh79fRqgVRVKT8zCM852zFowJosW4FCH2JUVhehLdHwTy8cKCLyoSzxb2MkwnFvbT7t8mpPGp7po3oq3gg",
  "key18": "5fvxKJ8WYjZJUbycrWt2pVXfQ8ndB3932nMpio2m1pJCbzXKT4imMRbHN8cg3Ubv8cFXcba7daStTidhT4RsQZnf",
  "key19": "5sKUECEvVFD2twD8RTFuni3Jx6p3NiV673VyJZUicsHzjTgnguKgteFvoPjajpJNnvJUmjqt1y7uNrsmddgFEvXp",
  "key20": "4xS8NFee3KMouo6mBEjFQhKsuGWnqx18M6VHHQ99Ft9sssYV4cccY39HBefeLH9oPtfwhT1rjgbDZpRX1D4mdJQr",
  "key21": "54t9gua4xNTQjrWqYzsHwUNmxnoSgSw6fe8CyL1GzMJboYixkMN8mhXjyvmEBoAGeEp2DnL4x3irTHnYrTSasyUe",
  "key22": "5Zy6b6fHBwXVqVjrnzfeoW46QpAcG8gb5hdFTQLmrGBsBVhxDiYr9jpCDnESD4tBrhJrchAC8h55BsT8EHpmLQLH",
  "key23": "4q91ibJzK1HVAkUTKTLgPA4DpHhscAkDtBD8fJuiQjcAc4JPD4T755MzNfQuLj2282wTTmfwMNMQzQyNnMrZofEF",
  "key24": "45zmczFmwdPr9p6pwaQzB2F5AEHnNMydG1qW742xGoRe27gNDSYtoFpG3gx8STYZYkMTRwtWegKKM4ANKtEGn1P3",
  "key25": "gf4ivh6hKMFrc6zGqVMKsp3sMyZxsZhcTBVAieJhp5SyAyqhw6TqSGRH27N33aL6ZkD2kthyCPcjtjP2UigLL77",
  "key26": "CF8Xoxwb9G2S2ybioXs7UaEvqTUu2xcSGc39betqmX4R6twB9bhsaQZfURBCCQL26CGrBY1PE75T8xC2WHdchq1",
  "key27": "4SUB3Z9QbQ3Bx4VuVriEbrynY6BtdLN3cgRiJ3tBasBGWDmMy7AWdgXAHgHFACfCwNDBPoM8gdSj295yXrvpi6dr"
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
