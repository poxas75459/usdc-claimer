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
    "5g5WpafosF6mi2zAsVspTLSias4QsvY9TXbZBN8zM9AgT7PQorpaFYexzudEAh11rg6qHmbDN5kJeGofY54MP7BU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urdnd8s3XwjT3VXjmSkWaJDKDhNCFxKF7kYRH3Cr22VuAqGb1roqrRyJce3TuXQLWSjgE83vLKEsdHhJLNGbrnK",
  "key1": "2s9Rh6gQ4UuCSqJf5WAFgWrNQLkqttbvVKCuegajixEf2y7iJJht9cWeGGiPKPi9CKvhxxDmb3uxNmSKf5qyac1w",
  "key2": "5b5d6SW7ZVSZkLqWsyn7puavCqeEZbA4T9fqW4Pa77wbRcC15oYJ5nBcFrjwsbPAzC5wJHEQjtGtSkpCbi9SdNvs",
  "key3": "3Xw8Tq8UdfBxamJALN3E6VrCy7G3pgJW364RCkxT7iTzJ2TUVNWQuXGckt5FdN1GcWrLchjwwt9EtD7krzvCzzkq",
  "key4": "4iRBxxtJTgWgyevfGwKBFM35AxfTkBsw44vPamtD7rVDdPHsNaJhfsRmMCjzwQFHDsTiMb3QxzAAGPBoqHHGHGHh",
  "key5": "38xxx8q7gQnfGY7XPtV6BQZkbdu1ihrgiBBfA4V4GtjnzP6xgZFGMPcbrRJQZ24Cv5WekDL2iNCBa7HSLnvsaTpS",
  "key6": "5sAvDNCzutzm342vobfg9zHFWQs91tDsKV9TJvt8Gf3VgF3cavAUDAJUFggDwJjrkWbc3V44giEXhGaxws8S49fw",
  "key7": "3UpbnHXPArVcvt8C1wcvY9eGS21x4bZCnB2zyzRdqcZ5iJZkckrkU7Bb6L7GMVcxvU1PydKPWLxG97AL2Ab3vzHd",
  "key8": "444k9E8hp3bwmgzrTczZ1YvZKYZXAENT5y2MeJbPq2i2Jcs2qqbc25efWtz7B9uAbkhwhVjEDkBCofbhKfHGHXVJ",
  "key9": "edmggdf2Lcw9sQ4VpjwbDsvT4uuetdWBGCgdak3VrcGBNFKxg56B6zhSEtwdpkPcbUyqzw7WZuaKobDcFgPFffn",
  "key10": "3UoWdkux89o6mkMZh9syWdAMR7YxTi92dp8EPX3atkJsdsuLoqaQnrxTi1JMNLR7WBKP4TWCVDBC6PCwCq4pMzZa",
  "key11": "aT7sotHisS6TSVKG7o5KZQa5p7kUvnMxYUetusoHT6WKWkauBQs4xxrjAU9uzELU9PEeUZUpsxYyb9Jd5EzAZez",
  "key12": "3BJf2ebHC7UVwn5uvfVS8DRfwXRwrvhCfW3UtjqrGKzG8a4gYywgXwW1V3rn6Rt2Zk3QKTe4pWDyoAiqSRBfcGGh",
  "key13": "ARhjmXZmSSsmhEVZzRrRjiqQvxLxpaHu4FxELgebJco6wBRHr3SRfXyZ3JZ9uZypMrwcLAcywdb1GG5uDmiu3P4",
  "key14": "5VcjW4dMVCwnkjuyvabZbvzPetnmNwXvbZdurphPrXGFxCvAEB3hWKaMKNFJjmHuDLnJaDdpEpgdfmyRdzaZGnjR",
  "key15": "5TGYYn19bHEccEUzpojmU2UETLvuTtS9iKsbhBkziD4KcehHxV8oZo4Ge7GbZ96ZPeNVeqJBvwqndNfJbLzvuqAb",
  "key16": "4HEtywXJWBQQd4X169bAZSn4gi4oa1N5itNmgkCsqPFzzaAcDY5Ln7CRGL5aSr7Pe9N7cef3aRZeKRxRXStHTQZQ",
  "key17": "2eG62g7niUJEhJyMBLvLAUyx3SxeWB2JcdufX26UMbqNBNjdfbbzTDpKjZhgCrSC41RJq6Bk5LSQVHXgR3fHM7cW",
  "key18": "Gjs72VL2f6Z3AmeyCrGXF5Mc6WcvHMJTRyprKn26yVJQE3M5yYGsfUbjx3DxD48f3DJLcMpd9YbJc6fi3yzj8HP",
  "key19": "Z6BmygSEGhHDgiRVw9VqTDZLWvTdJQ6bZnWqnNqapskbEze6reLAgbDsbx8nHfLmgcHF1X14mQ3jS8CfU46pdrQ",
  "key20": "5XZmrFZhoBeXbrAP6CXu16sQPtkvw6RYET28yXhqjs7nUN9NqBbTNCv2UQaw9h5C2myGj4FJV2rrMcydt6YEnWCe",
  "key21": "2pSLwnsPDLjtVyo85wKcATuzfFLLba9r3QZmTyNd7ujYMBveFfFFBHyRVEZ7MMemUf7KLLkr9atmF1YziKLCiZik",
  "key22": "472Xq1kwMzL74TcQg4UKqDwLe9pgKq4WpJKibLu3j8iKXwC8BdwacMt3y9GNyacSdZVWATGcsXsbRiN76i4D6yih",
  "key23": "3hE1wVE2drJh2wQQA4HC3dgJB9gUT3zUvpgJiVUiDJHz11c8KxU7hnkjCtra4ALjFvvbnvTxiy2m8ENByFyucGm9",
  "key24": "2iyk7sFk2E3gUF4EGD3nXLkpH6X1MmQpPBurvjJo3uLrUKh8A4FoFTgmSbT3FhyJUnDj6pVeqWAbcYNsAnTYEC1e",
  "key25": "4xojznCBvU1kAkBoufuMvN4GtK9BcveAke14p7WfHw5D5HVgxPVxVyNvgF9ss732HCQpqjMTqCjZR6sam7JdgELb"
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
