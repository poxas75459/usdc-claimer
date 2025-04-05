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
    "2cKa3ebSuULHucQA5rvYNyjR6bTqQEmNwfsL8mjsTrQiPfNVhdu9JWjaNwZWKGvtgznpP5KEzeZiRNqC7FJLgWCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSCwtqeEWPM4jfFAEgBMx7s9bdt89mi15KhBm26E3HEbYi7uTFeY2nwVuFXDm99k6iQJ3XrCF376P2M5rSEZ9pA",
  "key1": "4t1eWLFJf7eCxn1MBK1Y4XHfNf4TjQQomxWH2KRXbWhjhPU7uAHUSEU3uinynkcND5ZvfkTJFkTJBN2Bf1A94xrT",
  "key2": "4RHPFGgNj4pKFCREd4dhs2ngZat7RAnk6qPUMt7eqeMaJVEK448L2Q4cEpCaToQvhGGrDVReDN4dJ9zGiWdaFo6j",
  "key3": "3oGNawxBttULAA5RuRqsPRc3E6VeRtMtTxHQPcqpPr1SAr36JYX78r8qsWp3MG96gzP8gFHwYTywdahCj4xtbLJJ",
  "key4": "4SB4WZWPdAH7WEeTyGJQHCGp46hBDr5p4ugP6fvBXTMc8EZqZuWKeKNDsA2tfQGspK9SakX4TNectP9LzdnrSHqP",
  "key5": "2LedYgfPEYZwb7chfo7vjKB8r7dgM8JgXz1VMKVtXm9EvYpS66KQtJ6hGVJ2D5oeznZuw9YWxHYH71VxZNgXUbP8",
  "key6": "4zxwwBtrTqsSy5Y8knmL5AtBFNjxKdCdr7A2XdEdLqbHxGRXXqfiBvZDTaXnhr6TBwrxAP1NShev5XkGwT72yCoS",
  "key7": "45ki6SXSDGLz7mnL79mGuucsVkjtCHrUXiC73RHQ7XVdzvFqhQy8DszNn6PfWfTHb2gfXW9r7R6kAj6FAd7zDpQ5",
  "key8": "3BHK72byzVwyaFF4L8SH6FnKMxsg9Cs5x5iagYpf1mA6dinnv4enJAde5yjuUzC8GTmxghkQ8yBK8FsQC7VfPVfA",
  "key9": "3gZJYLEwGq71VEssSv3ktUUBYLCFEZMkud8p56jiLJxVdMhWAv6yHg6YC4V8K3AcJrBWLavah8dkyi1py5CysDhZ",
  "key10": "398dir872JV992RVzqXqACDWi9GfjV6m6QtYcbrojJisET1NQxQzenpo1BmamkTZorG2eS9NJQ4PdrvSA7RiENsz",
  "key11": "Q4XCkKmQNEtJ6mmG1XASDNbDf9L5KnBzVBnY9pfUUuF4JEEkyEeM3QQBi36hRAkAHSJs4wEW5AoDV7b6L8EHdXD",
  "key12": "3ab39pWFRQN3gc5gbfhGuM1HKpTTGvRE8kpANjo1XGuKQTDedd2AQAJHj5nRVHuwjwSbefFS5873s5RHsm2vmyDQ",
  "key13": "3Pf4mu5wFrNJj3vS1mu2fyWvCcm58obWaBeeU8opygyKMYvLMS68KXPtTVHRfLDTCnLVPHNovKFErpRKyo7BagRP",
  "key14": "QDnuhzNgkBJe9wCYMTLoatLBBWJdWaEqWCV8be7XuBqEef8Q9fEK8AnxPGHWU58mdQ1tMPHfkjZPsvqFM8U1K7t",
  "key15": "5YphQaDWXTuV2ePcHAHsVMBY3QfnfxsHP76XgKUMd4f3jqrwze8i3BTQaggbZLMJzNVrHXU8bMEHSzL5vZVXJWBP",
  "key16": "4pUfaXrGHYVB5Qku7qVo34nDCt1ncbG23D81kV6qThKkED11BF19AQkjT7fnAkVuqSJXKJUrFuKFGttPxkTuedo8",
  "key17": "3whYErLgBvpZfT8GR2BzvHXyJepdx7ndxURzapGnN3XjoN83puz55NtYwFep7BfNbrtBrY3wXsdynYkqB8FiNFWL",
  "key18": "45mMekghRCis1GQM8SJyuGneDfk54J6rF5AVVhma4KxsrCsQSER479iih1JPAT2DWGN4u4aKSndRRoSyFyAK1qZt",
  "key19": "3q3xJhTrh1d3SdTwhv6LgmdU9kMWVJQo2ZeryiYhnvwmU4fD1quW7Qi1HZYTrH6SYDCVcYdvS5UHxfPmiHHrbm4N",
  "key20": "3qB17T2NLNNwRMM8SyZgo8XN28pvKQixb17dU5Hzxhvi2dLcDrKW5FHAMeC9NkWhacFxinc8KiFHJ2eova7GNugc",
  "key21": "PmXYEnNcYimeiifFZocMCT8sqWn9XypgoLs6Zq2CbKLWaXBfMkbY151S1LBS4diEpQy74dk8mkpNcdZsMnSDpsK",
  "key22": "5t3qC9XMgfHeac79ZGGHBQ7X41kGa2GL73MrLz9t2w8VeH9uTnXuj3QySfg9ZG3yHoXnftXUHoW6K1AaJ6ADKC4",
  "key23": "5xdq6SfWvnunvGmNJ7AtveiKNYSSbMNXKx1ZaY8jCh7zhNwBJYDRS4T6jvPJFFs2MHhmgcUpuduywFd5fKf1XDov",
  "key24": "4d1GnjtdXzpAydta1mEGE5QJjZMoLHXRkYGdbvwii9fXFczEuVj3LeJuT7QEF74poKzmv5L3hUAw2LM4gwoYGWAX"
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
