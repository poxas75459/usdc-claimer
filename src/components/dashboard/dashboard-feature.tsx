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
    "595ZVEw9ukkJWt3ZCWLS2HRsJbkqpHg3rAJWrnfP4AQyu7yR8uyx9khe6cUtM2YmGCjXDTjq8wHMrn23D11UY9ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezYiM3Ai49i9oJSJ1mpYoeeDt2nnVa83LU1GMF8xeGHa5FNdWbvCwZQgJ7VkGbb1s2dmSghnjvahBsFnBT3yCD1",
  "key1": "4UmxytdueH4BVwqxmPzjZVWfPn2pSD3LfQovsxQDZg1QmVWBDFTPwK52z9G1D94dpzdiLhFwGoWLnbXC5SPzWwNS",
  "key2": "jjxqiXwWUvYYfPe6GdrTKFqqhxwqgeVbzMvk7qSfDpsJvjHJLjNhiJPo4GCzBGfAAFmbLji6qcdREW8KpwZARZe",
  "key3": "iYkuAfEYUKxPxnb8KE5P8QKNwGBRJJjaBEaeitYSsQMfjTA1uP68msadDRdEkGZFZwsdM8e8u5om41LaWAwatGS",
  "key4": "5vbQmkZMRdJuS7Xvh5AeFTRdiB4PPw1uWVrpce476Aau2qUwmVNTbHTPJnasL8KknvU3GyeamedGEwycc8yzowN4",
  "key5": "3wyZxzQG4uwcerokZgzXGKXvE3RwKHAMq56mPYktnqzMR8ANCpEEkkzav5xLnyTdbeQTYSmrogCfPpMAT7xX3mfd",
  "key6": "yuxaW1rPZJziwKfjZ8MrGwuxG8rcGJ6WPSVmQsGEqNDCBYns3VU7Ru4nEZ6ExkoFqD22JWw7me3JpuLLYNPMYdJ",
  "key7": "3FXeuTqcBHmLpvU9QEN9nTd7kamgiJ5x5DrSJWoHz6SKmbCkQ5xVQJuJPWJwvdzd5SrLgJJiHmEvS5vv1P4FA67s",
  "key8": "2nmjvrg2LAZXJTg725bAKfYMUaqfGDMeTY8mxvjhTjR5umPS8EqihNijigXuQizhhkL6eWyyDnajm9xwLdaf4kve",
  "key9": "4TCEPSf7hMqhWY99iyKJ3kTZAWWMAAVtU1bfigqdEnxDxPqGViipVf7XbAXuNi5Qt4LVzx6W3QjrP1Vc41T8NcXh",
  "key10": "HdXNvXNRJ9Mjuk4jyU2eQrv37st74djSysbgsnty3KcQJyRnKUPs6mUuaxncKP7TccPNATQHB2qxFmMWAQpjNFR",
  "key11": "4GUXBbgdtFKeNE9ZXpQG31Gi6BUipReikiaCmCbwAhQbVztAXYua1WUXhQCZqsP6kVZN4sfN9c1tFiMfXUwj6z8v",
  "key12": "Xk3hiLT8yorpJeLMM6nBRQT6hwCALhQeXUKWjGwsttF9rPDj1KEiyizBmgtWsntaRcfieHDwaSxmu56ebfAABiJ",
  "key13": "5Qr41H2hMqGV86aU2rFDbj4woZAUJiV82ck1CChtseCnrD1JhVh2oeA79UitYu38NudjSSHMrv5HfWE2YHZ51c4Y",
  "key14": "2D1i6qYbi7oxkJDrFvSZdzGi6hyd64e9qXqH2VP2utvWatmjR4mHAz775wfmfdbqgonW8p3bSBSijrgZiyNZrhTP",
  "key15": "4KADUDc1DUh5nPenwQSZo5fsSWGG7UwuDNNpXBQqmjDcQNzXGVpiZXhZHhVyz7Cd5yrsn7Nny2o8Tr3tieLLD5GV",
  "key16": "3gPnSKe8GcoDrDG8WpeGBLuxmHM9ajY1XJLDHnYXGGZEUzwL3AT51kL7zXhvNApYMcKYafLoXJG88F2cmLNCRyzR",
  "key17": "4LMad52FQ6bannZcUHwGy6BtL2uqkcw6UibdyqNhUmyoM12RV7G9rEFdmLhbqrUW5ZSxfaVsKjkGy7Mok2JUJgPP",
  "key18": "3ScByj2kSFDoe4PPPWX74AnB7ZNHLNnXQM5nGTs6W86cjEFBUtXaXSJ6bEgL322rJJaCRU9kCRVrDc2seJjWXAVu",
  "key19": "5dfBfs6zDYSMekpeSniTHkCm6sY9QvF7yxYDbpmL89KGgTjPu2p2F3QT8NQMqSCLBujxwRGMQc5cvfqcsDodwzka",
  "key20": "3keU8oFy3t7WnwmdaVBkFkmRSvw9ASxxDViRvmww9UBxcGqiTZAVZ6CunFZfPjTXY1pyvz3ce34qdWkYagEduGs9",
  "key21": "zFvLBHi9DshCL3aJ7iuya9CatNeEYQRfynbkhdaT8isYoH8HcMzHnfaxee4ZPZtpaK9ptDKYSb8B3nhXKHwgRnf",
  "key22": "2g57uL5wBXha375B6BsCfd2KiPuT2GNc4T3DrbetmNmCmkVNUjxV72p2CLXQ4TzNmjWuEg37U58aBqP7Y1svv5BG",
  "key23": "49vDfCTnU638Wz2vp9sCx3KqatU2WsuZD4qQN4aP1o12ADy4ZR5SqvsuNc4KjeVpX3NjKmoUdXdkrfruTpZezkwt",
  "key24": "4eUFBLNs1A7AHG2qyeFeXSyHjBvQ8fBQUYLCV8RH2ffznu2g1Je8JiWkP7VSMY1iEX9fbdVdCP4HjSmMg1A9x7EP",
  "key25": "31BMspuhvnHT2DhYWAVe9935fjZXtQLyHJx2Cz5P35TyDgvA4xayE77osFCf2WrWXgyaiZaRjHJRiSBS4okzEY7d",
  "key26": "3vnfCh3JMKbHaGNPjEyP3NygHLgQ7fYe16tgDB9gv8KLvzHLgJDA4K83wTvknmas9b69qtRnZev3vHW33XTZT9X3",
  "key27": "5W5KYgeLBWT7pcAdNnsq5qmudUc1phgYxYfkHgMuy2me4PQFtVet8YMTZBMCyfCyTA67p84cv7spFeKB1sNfMFjs",
  "key28": "2oCzXk5Auehfq8ZE6YbmiFEhA7NN1i1Eicb5B7G2kDovcznQTiux3qK4ZNorwhxL9ikmmm1Ek8e6U2jKqKQUEp57",
  "key29": "4dX7QD2M5Lsg1B1QDviRhwkPKXxoqjMuxbp7WA62XW7cBFXHhSwBTZaqwzem9wQQkDGHw2S5b6wajHdBN2s3n54U"
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
