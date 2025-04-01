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
    "2gh3erLdbiNwvC8HFrWCUxL4PdtftQbM9Bm8sLVqw7f5YaZK7TX6Vp8669N1YPywxujrLumWPqXZrFG9V3D5Fixr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNtdCwWWsP26d2keF772YDcusBt4PWAsdfwq2LwHep7Fb8xmXGUgcsag5P7p2wcSQrFuM8YJV8kw1KeMs8AkPT",
  "key1": "5P39e2MbpCRs6XCjQw9p22P1gBMpYJVs3SSLYqA5bmQXbVuAdEps1qq5rzr6Bf8ATGxVTESZ9oZTL5jdSHRnKZ3s",
  "key2": "3F1bvfP9TagcSK2XXvjvRKy8EEMcz5UtBFDbBMdK2L298161DD49F1hL9g6a1zsLJoJoA3SWQcw81unMBE2i7Ps7",
  "key3": "VyQSkpv4A4bNBxs2EeeK8JZtPr2dbq2ouqNLFMCuKiKzznAHdUMfEr28PygTkJbq1sAoKWVH5yGraZtZZZLmaNa",
  "key4": "QUXh9QAfMvQEviVBSWVZiwchhz65iYbH7n4SroC8wWquFp78UQoWjiNHRaLx93VidDZWugnPCDNZSEbMV2BacXJ",
  "key5": "4DVGt6kPxjHjBZAczVeo7aRYiXthdx8iidowaWgNabA193Cf34o7pEYTWJwbFqzxA8ZiGBRrHwetRD8HhKDqxkgo",
  "key6": "4ayxpCNLhAYbGJFsPkynLqZag7JuGoJjgkVxtTsSfNeW1Kmynzsu8sN3cGhakPM8dkGkMbQ5cUskMMY9erNeWcni",
  "key7": "4ZpU41Zt5QQvGDvAXrjucC3mLoNHbxyRLJBdGBxnQEDqxRJDwY6U7F36ZGXfmHF3DoXSAU3diHxyFbgVHbaMcFAD",
  "key8": "U9bArXuRCnLgU3eipmKfC97btFN17bDCNPTzL8iD7DHLW36CqiASDK8abEgewoun3s6AswiT995usPnBSVBJ2X5",
  "key9": "24jvcnvrCtGmp4UPRdo1wUikJz6FD89xSp1g32uL5nRCy58hd3bbD1H5s123xvvm5WrXaUk61BuukrJmQv7DFYko",
  "key10": "39ZbdQPM6zPWvcq9pSwsCNxjBtC7ZoXhpAa45o7b84fDrPEqLXGL2yPiLx3RQqYWuFXwqQ5cTaUGVBi3zXdrsB8P",
  "key11": "3hEELcKLVnyNQjwa5fyLbrRJQ1BZWejkJ77XYCsMJEFxEpShQ66j2aB1wXF623GVbJS8ufMdsZyBS9auBNGBwbC7",
  "key12": "2BcyJxhEvyfqpjxzG4Bhkzqdbwi2wXc6n1r6i4FoPGVGTvjaLsYiut9nFsox2HyYRnK5axyvKkfpRR2WW3BbZ3Cw",
  "key13": "62rd7uMN1EdoLqB2PdLqVAnnQjCENmQzbFURHXSQUMixgD13czcqrX5zRAFFg6G3nU9ukALcrwug3CiMKyaDEnnz",
  "key14": "2nQgPKKfZbrKMFi5gWWrRc4yNouKWSShftsQfxQbT3NDtiXdgUgQBhqp6SnVDHtDpCQ2vYPyUu8ChoemhT3or2vo",
  "key15": "3ukHUBJWPUr9kV2vmKypxf49vCbgLj5frjfCKRk88iS9Yodg2HLgaQ4cwC3kiPAYQuMwD9DVu7dX5Crn4F8YsK7s",
  "key16": "2VfwDSu7zLYZjDsU9Rs2hzc91KFKwxcNrT92r3S3s7RGAWxSEWGy5fdvhfpdcrhBEu2UjrU2zfiQyfvZqbUkHhDx",
  "key17": "5PTXPmxDzPgehVJE58bb1AoEvE4UmLWwHNJVe4AkgZKh7wA5UyAmQ7oV3ggoQMFDVCfLjk531s95F6AttbxbZDQZ",
  "key18": "AvefoxpaJB8qt6uExFsbZTfyp72ArwikVYsbAEgQyi87bqnAEVJ6a2YqLCtCsjeNnj1X3ZVKkdWEjdyArwLMpGh",
  "key19": "5h5hDxbrJTdVTUPFyqKXN3JkZXNR4Awwhv53iyspxhDBpzpnJkzeo3tL3WPL7cwkhpZffiUr8Exr3CZHsJxCZbat",
  "key20": "T1DYTAa8VmCUE3hLUTzwjqMUidTE565Tmo9dxzkfywYAAZthMmTsxWMaR1LkJ3xwHdWS5oogEvZGGFCh78rwwPK",
  "key21": "N7XLQRp3EAaG6LMHwp95gYs4tenvSKTMcH881aZsfckxhGGL78XEyuYuNNUXnqm4wtjb7d91F7qfD2PvzuF8Ucq",
  "key22": "2PwMpUa2jLpNoBudywedZqvByoWimGFSwnCVhM3PHqvuh3acyskhjgaEbKpPnDvx63WV1hxaF5Muz5LV4PMBB3f2",
  "key23": "4dXBxsHN1ka1mHn1KqFyNvRCnkK8c6gBLn2n3ZTC2sNPcC1DoSCWHLrnWMFJn5sAZiMixE1HPnJUY39SY5Sqj9cQ",
  "key24": "hCwZwK4oFA1os5hNnGHZ2yFwDxZyixeSe1TtJcWpbzHNgVDDVXdntTh6dhDb7a3uMYwCMwcREzFgByEMb1Bxv3s"
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
