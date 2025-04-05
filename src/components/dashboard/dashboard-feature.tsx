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
    "3dqD3Tm25upDs3xu2tMq23AbLJYw6apncybXbfATWufDmvN54nZUUUZ6PQL2xpc6cBUGTqNYhQanEHedKnbNTNuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7ZjufzEo3Hbwj13xCdoegKP7Jfgvz9q4QDXS3b1xhzwLhfAk5kQuutUJViaLT6tefdrFV8jnRmjw32HhHhxCR4",
  "key1": "5VED7P9Bzjd26dTnS8smd22B38fpm7E65QQDVMZTtT5mzXG2grUCUXNJF6UbmBftpuybUdgQAQufUCY21FMMXf8j",
  "key2": "5cALeQyZqEJA1fu5ZM78PkWio1Fat3y9PKttERac27kRKgSMyd4hm4oQxCULWUbYV9G8xT6Gh3EBL7UD1CQSuU1V",
  "key3": "QdegFhPfdzmyyGQArq949ypuEdwBUS8nJ8rzqzHCnXCPMPi2CWJc2ubQYjfVYfJjczoXjdLJjcmB15ipazDMXuK",
  "key4": "2C8Un2dBsTVxBwzyyRH8tXxztEDGJoaqD6aXJS2ax694LNzepf8uMXuAtGSQXFAYGNE14nsV1xdJMUN9q4ptZPb3",
  "key5": "5ZPu98swciQkaUd2t64WAGfsnexY5WvZP49ANM22Nie6qEDhot8WsTatd6Q5KT6qvZJQFf9Pxz99kuu9MCqS1XhT",
  "key6": "4t7dJKu41UNwhZaJ1gkHFRh2vYzCRNrKVyqos55CvjdvrD3RLDkmG9qhWfz1o9EkVzmwLHr9xvzuHQtvhdi1v9mw",
  "key7": "5z9XJmEuLZWZTSdkAxveZ7NsdZtVzHpAppn91GMKXE3ZiEzTo4Q8XCYfPSGmqppNdUH5nyL8GuNKxE8fEWvG6dUk",
  "key8": "q74bkASCUpnBS5Eq7MiB46yCugMhy431Y923x6UJALVhjRi7pm3StzDGWrX6pAMnbsiTgTt4cTTf75HriUFYdqC",
  "key9": "U7Zb9sXqrfHeEx8TMCYvtsQK1yny5ZCoKreh7QftHgAxLGfptdS1bwcJjPcyoVBAVHBsExHRJceJ5m5syp2RBix",
  "key10": "49R8U762tNcii659z1nso3TmXVyXdH5fPLZd5Cvor44s1DdowoNQUw9TpRxusDhxvpxVd5SCnRZeK8U2FLo2S2Cx",
  "key11": "2yeGjQNTopmnNGSWjepD4Sg1RkXEsx2YgDoaf35Tok5FiK3UCePwMaUujyk8jmGuzQwHLjUYzyXgBrR5nFVz6hJ7",
  "key12": "3hFY2R1uDg8gHgkiqDtFEFXnerTKVuc7Mb5zHbZ3KPn2cDytuVoPLHvdw47kCz5EWbtRp1HLiEnHVSvn4nr6kMnz",
  "key13": "2gx6qyR3mWnRBWTvs7ZGP9GXZ4BDiTi2c94ibb2xx4CJ7w9XwPx1fKBVTrsngJDzhXYiEzdCU7KrTJc2AbfiNB6E",
  "key14": "57pkWqcw35eTUtNBcqbbuqE16eA9Geh9UW3DCXyC4FpqLTbnU5KyrospTJVz6YLfJzXg6MqeLt6hveMz3agqbEwH",
  "key15": "3uCRNBtdwVTfUpNu4V3jRmUYGgCWevnvNens1JD2mZsXjYJiRhjeHCnSCYmJh2nMmjWQTtumjE2o6qg6EaNXD42M",
  "key16": "4h3d4RuPGxe4KyoXRrSpSYv55LHSL9Q1VvSbtaQdU3xr5W5jvMpsFCKYKJQaRzaFVGQddiKy7ZBXtbLtcPTM8d1i",
  "key17": "2WKBuh96RbWDm9TgbLHefiw854KuVDpaUhHkyrPG9QGERR8nnD5aggdZvN3qXL6rtq66SazTV6GvkvwqJD9sPFet",
  "key18": "2wSbdi1xrbyPMPUbAKKRsaLQb3NHh3vN8XbhAUFV3MnG6mK85QrCtRWj8dS5yJeLNPn3UGDKRnF6XRaMyfDn4NvL",
  "key19": "45ery9AUrKvndBHkj1Svnj6p5zRdn2EPBPAA3JHCM3kpsWH5zWXsDcADaHuNfEj7G4fBfW2pC9iB7R5aZjCeJe3i",
  "key20": "fhYwktnXCFYnQGo2pNDCnbKT28Fejy8bezBkG1vaQYuByvTgc8Ynqi5miCoEkqhCFYKku8McyQwagPan5Gie826",
  "key21": "9m82TWNAyNbKHMfLDPcWuTagT8jnWLFiXd3ppWeMkVnxyQ54SHtjrJWuxodDyHRhDqLdiZRQxM7AFrdRtEu1vwb",
  "key22": "4JJ6yfsrH9HtqErvk5tx4uAiy8HJ5RkvSw7Q2MKQBene2wrbA8tkcWwub4Qo5P6T18nAbeEmPPhfnwJmuAnKd994",
  "key23": "kqJii7qDHv5JxgTRFRc3XVPDbcXuoH9SZpqaZGwwzJuBY3PnPfK8mQrbBYH6sGN34y2DPmFNT1urgvzes8xfrVE",
  "key24": "4tyCYPoyAb9DhmTU6NogykoAnasy5P5kcvvKm7QPHyBbZqKSHj69MYERxaHLQ5jjtD3iRjUyom2kZttrv5ZgggwZ"
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
