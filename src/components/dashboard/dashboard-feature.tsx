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
    "62sFuDGgj5rJLGYdZSFPLjg8gjbmkff4idL8tP5necojt9es89vDS8GXoWnvBt4XD3vBMtb3bvUKQeme9ZTjXSv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PqvkDy9Qu7JMgCaS9dtBVJpBe2GibDaHZMPT6poT2DdPt4zizWVbDFVGJwA5Z61uYqChye1kcaA5FSNnyuJjrP",
  "key1": "5MWy34fuoPVAjD4q2MSehXtHs52nN2MYRnpgugwtVuiNDJ2h9rhn3dPi4HW1jJxy7gLmBRoQcoAaWuyYdAfGXngZ",
  "key2": "61LXwPFY4ccyZk5QZYsNYTe27h9QjsfbX7PazUnzcKBayhRU24nCVpZaZxTSsgyf33sa4vAq2RXm6cz3r2fFxmLY",
  "key3": "iaYHNBwev47jh9hHm965kZKRxhAwmFy4PbkWbL8ze9xXP7mxquJ8Ytx2eJsG735gTiiZh8vjcMbsK6XrTBxWNMy",
  "key4": "2XkDCnb263iTGju4R9bAzidCVNJPBeFdvjLrdY6SLRVq9Ed5kXTCYPsGGT6G2862L8kDXnRojfS2L1hdDiMyfvXN",
  "key5": "2UuXL8DvZgk5VfvkhwCCRg1TzSwLDoHo3ndXeDgrx3L9ErjgRGE4tTbTqjdkhrL1qxFrWGrB6MBmDyKE42yQ417N",
  "key6": "zLcjJfTTW6JFb4fQgExzCYKEJmYdM5BYfGyunZWpCkQE3zQGn3qpwGtXCR1vTeqoRV5CtmkaJDfeow1vw3kPi5R",
  "key7": "5AGbNih28bc3B34eo1Jn8ERTcDvmBamRYQRefBawsJr3fdTN2PuoL19RXU1hdQckz1hk59n9GM3whKRWUCoLyuSs",
  "key8": "2NJfbuejL5SK1qvqHehWSBQNX13nZMVKpdCsDMwogkEaSqkrAZwbmDWgQU57bMooCso4uWyWVVS64ihKzVbftV8j",
  "key9": "4YXm1s4EdenqhzR5HwcPMV2xRRWd48uHGoKbW7SW9TWDsfcgmsytEHRnLruEQR8BuqExfcUcekahwBzmrsP4XQfj",
  "key10": "4FEqv3wJLekfGuHWsY23rgD9hJpfDRYYWFs1oXx58PZpiohLPXgCENEg4C1WqZ447LHGykp9JMF1VSvwFWbtNe1o",
  "key11": "4L7nJV2vLt5YB3ErorwtR9cXab3r2r3Wb1V4pZBmJAFSF5puXnFSvwHmp6qPZekBpBYkLTESsckBkvKvurtoh4NX",
  "key12": "4AGkAUgiWhzK3pvqUFdcwCp9TZk3nNtyRJMNrhr9Fyq8jLB8mLQx1VrVHK5fxUWL14EiWtU7L4ybpkJAd9jnGuy1",
  "key13": "5gGXkiGZwJqmPjiU29HQcH1WPtdLu5tTCCX7yYovJuZr7knajuTXmDY1QGRjhJ38vWmkHA2skbeafCZKEJSTQ9vz",
  "key14": "5cgjs4pyQuxhkVaRSxmDvtnBeGhjCY7Y3WizM76ZQPmvSCznwhXnzm2Y2B1itVhGwXw7Hm2RgwzG3a63ceoXtszb",
  "key15": "2eWvr7eWHcSbb1MzFrgSHrhkmFm3j8wATkYjvnFPuHqujELs92JyJk4FJGDLU2Gs4wNNUDxrKJhbqPmdYe5uWYyJ",
  "key16": "5fpyREva7WfQvYjiaDpisTLGECF94GbQQVA15Hw9uKG2ASWgsfSidVpMfYN4FqjHfmTVmuGFkicy2mc1Psz3Dqga",
  "key17": "5LxDZKZnjEuufdGb7UFWKgTBdEnEJti3L1s4hEa2JRwrm5dNXYxd4mxvxMemZvVU7WnkKiAxLKcjFJBFBYr3YrAz",
  "key18": "58DL8684s3Ccee25HPnfLsQntaguEUdNfJkxR7QUCZB8nSyu6G57B7L8JQZvqfu9F49uLt6GRf493RWMzZwt17Fc",
  "key19": "LdESAVbUTBmEYNSs4BHXYkA4c1gqZ9hEfdw9ywx2ykjr3Kn2gJkyF4L8aXzbmck8mSpLh42gX16iMc9x7eKYDfW",
  "key20": "5xi3PPyfoVPaRUKoEsMhFQVjdD7oFoZfvLJr6kMUEHxXDitxyoQLGTHRfddFX4kiPvsHXVcVxhdRLWYtz2VvjSX6",
  "key21": "5Nutq3uxukF1Z9xNkLPGD4TxaNCZk9QaMttgc8BS4swWEsNsxMWKX6yE2pznTnsA65S1aadXQapGe8cKzTKxX1Ty",
  "key22": "4VED6xarvbkVN7tq9cuAVXKps7kp3NhQeDwVjdtkUU28JMjw5uoRTvBuG564SyeeDiX99RXD41Yk5bwoJpoGeH21",
  "key23": "56CBDae85c3W4fE32JmgyU3TurJHH9pqpHLFnYhy5N24H9G5MMrNY9cQCKXSDKCPQMY3Mh1Z6TRv147QohPSB4y8",
  "key24": "3URmBa6ubp5xpN34PVJfyq587Nh3xKm382Mmx7eiUm4sF4WRimG4hKmaUbjLvHPLaZ7bfHeJ8KTfFiN1uu9RMg8m"
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
