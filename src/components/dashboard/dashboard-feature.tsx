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
    "2sz2zbGGuphp2aTLMPL4ZTPjVmgTM94DMRucuVFiP67Ye6cuCaSg8vGajbkHfkf93vD5GXnN99Jg2CURTUDYF6z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tMGh52tBgLrsKxSPnUcxEKVnYQPMeckbz7MxgTWG5HxryvreBWuxkrRb5t7VHDDajP6SPXnRVLTyhR9MLiaTG6k",
  "key1": "3nzvwmeqLWgYb75YR2ZRUWt9JZ6mSXk2UWW63HcYdGNrH1Sc8V7NGxCPYyT945La9wczRBfbwKgPoqDRLN3K1dRc",
  "key2": "5coinVvsyeCjxGtqLry22qUgsX1qwyDRtE5UtDbQbNp4qPJYdV6MwhwCtwAdDQyHnAk6yzwmv99zDpe2nezQj9nR",
  "key3": "2RS7x6PSmSnrtxc2TVd5JDPzRBEPHMwynMML2qHvwBs8DSyGXLtFB1xGKKueBCwtBjhwY3vgvxTSPMfRTMdmEh8v",
  "key4": "2byQH369DyiD5oVJSEUz4fJL7rRRnsb4bx3gb3E4M4YQGW7xh86jECiBx7QErkYpfr8EPD78iYWjohod6o3x9jem",
  "key5": "gH25Mv4WXD8WExiz8k1oAyo1qSmqanV1Jfqh3DQsYaAC8hXuERvoG4ApzCk8ovjRekk4ZZ1YnADBkxVmUXaDLJ1",
  "key6": "5h9SQS3E8MbAKCtcAVQHt9pG78ymuFEqLscqyZRubSi5U8xUTAaTicRmW6qoBb5zTsEDDBQWBW3jf3Uj2LXPCSyE",
  "key7": "4HpWCcAiYYHEScZVUC9RQhNRwhq1uTnwJETW95j77ex695EdT61CgExe52UjaTJmmL7eKxJKWbkaEk7QCMt6bVoG",
  "key8": "3u6mR4jadKfdWijZjUrgw4YtzS9C3aaACdZDpZgS8fHDb2ShcRsWZgzkDxog3RRYeB642LmikkoKCQU1xPQDspsx",
  "key9": "5vamY4vBpqeEaepveBDxtuBZbTLmQvCsAX4RqsgY8L5QTf1J14HFnPDokh7H4hr1EybEckNjLRfTh5HkpMDrmUbS",
  "key10": "2fNL2TvM87PWUwgy3T3DPoGocy9ysu5VPyF6otnRE1vFTz9zogNdCZ3xpsT4hYAyKkE8b7ycrHe3J5nkfTXy4rBP",
  "key11": "4cXCcAidacFMuy3p8uoLHGDjgHnSvLU4CugKAU3abvEko8yppSV2bBKxbGGVrVAKuxRFrANaMJSx1wVbWzyvBExQ",
  "key12": "291d4CVo6V8b86vxmWWPRfN5dpZEzhAJWHEesUm2cvSrqruEUKAa6CvSB9T4YTQZu6YcFiMBByD7MajhA2zPuWbz",
  "key13": "4kFcP3BfJbV2LXKh1jfAjby6UX1uAofD24JktGJcVKx2abNzY8yfZC9nr2h8Jg1EzF4yc6EDFnbbuNDLV37Nz7N8",
  "key14": "28u5EAJDCFKGkA8HAhVaZfa2UEtCK1Wr5SXzijNiscDDqDwcY9w75GcE8rCpNrXzUA9PLJkDGeND1asgevrthcQP",
  "key15": "3ZS1t8WRUNxcEnGoZWdc5jbHEfWMCXGNMNSY3GUNUX5drSbRco79F3pj4iDcPsCah748gKTYTaLecBH6NatDSRwL",
  "key16": "4m8m37jTJQPL9wqmFWe45rx7AjfqKFRRSdn8vb3FSJYHE7gGUxektjskUyamWaNt9b5kxBAWJ2hkhpnp3ehT6rND",
  "key17": "1257BDrjCcnAXWVDjGVnjegLcVAcFMNLKVoXeD2M7QByodkUMWo772Sx8fFDQ3ueLqxLs6pNYHQSJ3ntuWz9YeZL",
  "key18": "5NGqySPeaSmfjXAt7q2D3x755n7hb56d3asqebSbMnCVhhojpDGz4nqEjNuQ2jCnqWexNzKaaMP6gwzmz74dwqGK",
  "key19": "4x7z4mX2yhZgk5gmyBbXWVNfgFfVwzFJJQNzAU6t4FYVvJZ1szRoMyS3iCVSM2arGhGFA46ZKcue6Lizsi6cN3gV",
  "key20": "2YBqryFCk8FNrd7GPm1iZP89DYFLgp9aA8WcP5tJoPtoic2oKbW42HEPjDtUSc7NBNS9qTUmgSBvft68DCV7exvL",
  "key21": "5edH5G9twnMrFi3J4E77cMmxRJefd8aPc8eWKZmtThrvBVsYdbwSEkgQ5hBEg9Uo2Prk9vmVxmYD8EVzfmeyu5qF",
  "key22": "PYzVJGozGC4LVkGfebLXp3CyWpvfcWh9hqkFyj3P78eNm56mR5XmRh4eTzRpAd4UBSLh4ssGpdomVuPV9G8RVAL",
  "key23": "5L6zqUogrovfd8Z2q4kiQnPfrFiSseg7xdgV33YvyW83doSMuEmbKDuJq6TszYSKxTzVeNtoSBJGUr91wTrWjcXL",
  "key24": "2622GHud95dksgZcnwzKyPccjxksQkd4RSmduoYtG2qbYWkcUG8qW3MmvRR4kphkdSLp2xFA3PyuoVA8jnxTFR9U",
  "key25": "3pCUCBCG51rrE9HAqVQihdK3CmAt3JF1aPqthA3RhmctuMhB4cxr1k7CT9YoxhnA66qSS7uUWXHFeEbCqi9bKVoX",
  "key26": "3Mt34k6qRJGBDhZPoBMwXezisp44VCxahzjHib7aGzjnhJy8G9Dh7JMfxwzkgF42RfjpXVEBYhbNkCMWzvrB96Hj"
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
