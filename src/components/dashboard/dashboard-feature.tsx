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
    "4u9tfTNCq6jrNGwMBvCNQZLsFzB7eHmmzqZ4SQgUobkN4AqiMYAJr3gYM6LktKGHeBt82mPrtZxfPHPBnkjpmej1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjenhzt4iHnX17WTpLQM9Upxty4aRW9Mqc1gx1XiuyqUH3u5S6TmtWSHBY9DScqWLpx5YS25Zqs6NQhaCoCnNrK",
  "key1": "wVxo8gpHhKkJxYxuNN3kkrC58zEUxmEkKKWLVqftb2XsUcsFTyfj8LfyP9UpfpGMD3Yf8kccopJQc5rPtf2xVJ3",
  "key2": "5k3ShSQDPPbtiJr5DaJzrJFatxf32nt58D9j7eP7hrvtbpd8rxuUTCPooCWJxBQnTM6LbZDnsvjZ6aDiHf16N7my",
  "key3": "2sqrTJmVL4R1VoNpXVnPYfqKVFhPSXbU1VJo1x7T9nbvu13NHdnkRupHGw913o1jLTD7WEF5R9XEjouoQMMQD5o7",
  "key4": "2bwALpyRKrTUYwv4RZLipgAwukzTjhx8HGjCoEFY7uMk8QCA3KSkiYMQBxo3vcJfxFuzMWaYp4QHk6qDUJ8ysVXD",
  "key5": "3WyBU95oUgLsxDb5U8xW2neW4H96L5xDQMJ2FTMSA1Acg7uAtUfDxoyFDdHSyJJS5TzGKxHHhFwtQrT1gRzau5Ue",
  "key6": "2KGRE5iv8E4A2B7uwPybCaQ428WjWL2BCacEo4cNSKioE5KqVxyvreRhC3ciwJTLnwo6GK6knGy6VRzZh1ubcT36",
  "key7": "5rg4ZccWsy5uw2YQgCVk1QsVmRoaUE9SQDdnH4FoYSo6gRX6xJo6QQaoZSC9efSvTBiCd9wYDg55tpRUrCzo8jCx",
  "key8": "2VGJregLRjnDLr9SMfDyorQdvHC2KC52mW3EyMyWnjYcGWgAX4qox64tuQjpVeN8uprFKaeGqjccE1LhaM5m7AiB",
  "key9": "HHMx9qpwggp4dagGmCm9cSrAkdhCTSQ9mxP8dgkGQVU4NuvDUpuUT58amcoLy4c3KPrFMjxi3cvR8HUHVxcJU9t",
  "key10": "5FcRJVEXT535iiQ5LuNErRTQkyjFom3btQV6uGi9819Z5Yq9ovkHQCmzLzEpjde6idUVsdinvEmenihEh8vVewp9",
  "key11": "3CeGBii71rgg2engpUy84nWr1SAqPWAyYjUuxGogEPVEhBcmjzXgh33jwvzvayVyW7nBSJnNuY66mGsnPAss1ZbM",
  "key12": "27CzFrkcK1NJtdCTbUuMtxTjnNf7b9KoucL1WGSXoWsQechZXkwKnNbXjpZ1q4zHQPbzRUKPrkhtxjMDcPBCncSH",
  "key13": "2e4LQNG3djgB1fGBHTBGaZEwT8u9VYsYHyyHDHASxGEKHRuyTmtH1XtE9wgRQgk7HSjd4hTGK6uEHVBuZhEHeC7o",
  "key14": "2aqL5jaJrZU4ST9UXMsR1RxGns6jX6yVCruVmfrKmhPKjTnMdN1xFv38T9X6AvYnrmKWu5e4HJkkYQ33zHe6bW8x",
  "key15": "42oCvgnv7dZ4M9EEQbXQyVL2cNUCCXdBSTm8ctLewWM1JRD7MCgqRdfiT6kpWukoWJmGw8nNy12WGi5XFcN8CNyS",
  "key16": "LEbGt4YGfa9biZkN1HicSRUY2nQiohurNPjacj2LeNeq3W9KuEbJv3ntqRrMBF5pTYwMSkPtstvJhY8aqXHrXnc",
  "key17": "2sidsW2ch6ABXQ8o1k1XSfdQ11E5Ne9BaECnZ3pVwPRonTnh6dfTGjzYftTW9MxEmHYH9dx8nvCcTfQrb5m4Dh5F",
  "key18": "2ZJuurcMdvSETJ5KRHEhcQYNCthDiyH8rcYapeREjAwnKyBzfgjdikEYRH2efrHEU8oNyX7G4mXmXX3hbD292uLR",
  "key19": "2FoD5PubrnUFDwiCQKdn7GQiLsWa9HP36rZxoaH1u2Vf5i1bppK8xSP9gjSofG1iktuXxQqRCoknwBKaajxqWzFD",
  "key20": "5gVDm2DSh8Hq3wKmmPdHYSjQu5mdZuGNfdaLvAUyvmE9jS6xCbmm3WfJ27giYJ3o19oMZDGjd2hSeomcQRFi1cFe",
  "key21": "5MULY83N4mqWePnAfGTm3DhyNjYM6qkuAvQVVJbeRviF4X4pGt2PR1iHVvqbvkZCruEs7U184Anr99Mbvd9PtQ5",
  "key22": "4mLtTzNi4Fz5Uuy7qDR7wiGutY33QZDpwPu3YgJoHQbXX2Er8eCHg1WA7P5X2g5DGtuyfMKqdaVzzUpK6sY5pgvT",
  "key23": "2vQ2wcmGZQz8W3HtBmJH2NBoFHpK5bGJB6AmMAFVzZ1aq1jECu8DbxcpX1YnRvFPd39Sw1wWzRuz7U1tsGURePBk",
  "key24": "3Kap1Gcw7Ecb2dspAyX4UU5bHDF7PJD1o8WwCk7pYFsVaebDL49n2pW3bfyovHRBusCh46TmWiEZBanR2fG3GAKG",
  "key25": "2WT8qajGUxrhnyo1YYMNSDjuYCNmd2gAFsNih6eckq2yQ5qgtYmNY9JzjDN3CBTpsZu8VGtG58tmZQDjP9q7vEsj",
  "key26": "5szs9mxnL1zEq8yJk76bCGbtgjaJqsAfoqD25B2FDuMRz75kVzkHKWAb6q9ogvsYxfWJxq4yMDByG26X6SGgSnZ5"
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
