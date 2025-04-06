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
    "23TxcPTXxAWWtRJZig7q3oUMNd1LVMFmMZSQyhWGmi8pVv6fddepoBFrVNLFZ8novFqKAucY4rqpjVfrE9r9n1qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWZBkaseVn4JJSfYAcFVVRj7yLpr96QXwpbPK6D16zEUKnq6XP5UQTtMnLVuZdxU3rTM9CGdcDERY4zZheCEqhY",
  "key1": "4PnxCgEDogqu5bDbQFvaVkTPhG1zrfvtJYnDF3MofrxUqr5nZJ6pzteSgPqNwL5hBPTavFGWRxHRAquVAAUVDWVA",
  "key2": "3aEe6btffhC3jUsgFH8HebvK7QefT8NbxGMHHs1dWPeYcRNHfpky2sAd6CjYuWiWjisqcUaUBgUiTh1akYJyQmdU",
  "key3": "2kDDMsnih9m3uYxvVsZff65gGVJL6CgVmsmSN4bi8jGGA2qFSF2zbnnLH3U8NqGtkVw6cB1NAy84m8BXqj1JW2Fb",
  "key4": "LKSBT6fGgoCAxrRAHeAHgDdCMW23icEZhAwqcEwcEMdYGVvtc5XbzmJ5PXds4jziWQZabavkm1W3YBjgjsD219p",
  "key5": "3V1kM5WY9qo1ej2tpTGRVLpm53YmrTiygEqkM8TAXfJFhjjLpzckYHhguQEoQU6kgLhio2qyPbuMrdFP9UGomBia",
  "key6": "2dDxaAbcJPRrdehPXKWhmNKuSgRedtkEY738VFDrnXuGJ1byUdVL5zhgYD8uK2Qjze1RdV591kiassZWVLYrMkZT",
  "key7": "2Cne9T2cYpnFh9gz7xfvaVLtWoW6DzdgRvtU2XcBCKSDwp279W7qxf6Qv9dkeiosEB9oMTkxvRPYefYkPfecifv9",
  "key8": "3Ts3qfREhqfAp9fUx6kU5RAL6wZuwaV2y6wS9uaAFHAFGandFFhyzfk2gExGEiyVhTY1MkaKc3kwYUNKqNJevLDc",
  "key9": "2UrufKXqWzCXQHjUXzp7TU1kNRPUJ1Q4FGGaoTtF6PHuGJwsACTUpP1YDGDwwR2pyDnHSPbbJLEotsagXu94P9aM",
  "key10": "31bgRrDCBPeS21Z7enfGjSENDgoZKekAziC6QnzpQju5ZMuDfpyxdi8Y66pv3jED6kzg2MHnQjimVhbxKCGVeXo3",
  "key11": "5fuvPgf25Jf6kZuUyS8ktrjW7TCeSfuFsDN4eTbfjyFxoqWY6uASKWNXXyUYHPswaZNYaC7aQFxcaCTao2ALiHoY",
  "key12": "4uvfAdey7hhvVWxfraytoqCStFpJ6ahQYEyu3FwxWWh36D8Kb2doTAPFZyqE9xYg9vUbXaPMBtJH3VhxJdULGkNd",
  "key13": "2xD6pWvujtA1QhAGjJqrRfkYXxLQ3pc4bsrEikvD3E365B4sgxqQwwP7JSSvbxvUG1eNncP6rdJWmy6qHTPQeg1y",
  "key14": "3px36GpgY3PNTm9bcfUBuByGCx6emmi2mCPJfYhCzp6tnbP47AK1zCzL9jZNHkkPWwRdCkJxY1Qo3fXs92U2Ck1H",
  "key15": "Jdk6AvmPF1PHXLzjCwTvXGx6GZTN9r2fvof8HXKPjoQ3b1dumntQPj2uTVwxdBxm44p9iCQkvgArp2pavHJKHaB",
  "key16": "5TfQitB2AjzdfWPdBqHbh1yRiXXbhpwHgcTCMUcmHrcwE4NziR8zvg6oy8gZJJtW28u4iBUumimC1FmY2xtqL6KE",
  "key17": "qrheTsTYLtvNgVPurLfmuqxpiMJW49GPhUEpewkFrDzG8qL8P9oeh2MV9gV1Yuv6xgKXWUpZnMGnSXNSQHk1V25",
  "key18": "5aDxJjugknUwRJBAP7bb9UtR1A2Qucqtg3gpFjbWEkHRm4KDsSp624DDKUUFJqtAfkdYKDdfy85zRB8tnbwakMaE",
  "key19": "4u7AXT3jAR46JSDjG9mZbBGZ4M7S6N3eUjX7KURtw8ftZaBb288aXPfAywTzhiM9Zic9Lg2VmrB6Hw7jbLkMYL3W",
  "key20": "3F5XdJKm4uS658zssFGDUCR6QR9AHkNyqtkCxUXoxQsrkUCCaxuDArvVZwtyxtB3KzrTjo38SADBRqdkdDVKDgvL",
  "key21": "Ug1eyxEu56HrYDnd4eC6Ac2Zy7M5LhaaFPgTLyNrCafsfGBK4NZB3MVf8KbGemUjZYFwXsRBXuPKsvsG8twfrbj",
  "key22": "5L9HWYPYV8fnBmqzy3QizPsCF18f3D1CczuWyUzxyj1uCEQ5t3RnXjBoWGpepZ8gWkUeV1WfMAF5Tm5PJSjcnwcj",
  "key23": "2VFCaRrtPGGB37pcvLifVNexA3NNrfATkm48JQ73o8zDEEC5qBHAWMc4iKrTN35kbzfimEp7ZhfhC5oJmJyWJbXA",
  "key24": "kC9HnNmSBv4yEJZiJKNk5m1iuXCETJ4p9SaEFhs6X7snPdW4wyx82g25jKkK6VJoQGBh7ni2EkUxWr2YvG2LVbE",
  "key25": "44xW8FhwhXshGPDxfPpkFNJsJGjrtrJGYzhRcCdo5xeWcnk4YDCuaxZkNKwWyWcXBcpngqd4YhG52qPz9Reio8nb",
  "key26": "487speSviLwdiZ4aV3Kzj2YfRARRLLjw6R8uUfgoLHnezsSGeSiFjDSvdTxKgRJiYSwVRY9HQAsT92oQTeygMyip"
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
