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
    "2ej6cVMaFHcmpf3gGuN7b113upumkKmbvon5YHoveMeNg3FeNnSdq4PuxnbgNML6aGMm9P5VX96SdLwb1y99g4KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYfJMD94iL4JE7vgzoSN8cYky4neiwTwbZ6Bs9tNxXbcTHAdM1vzCYB5TArBR3kyAdJxjoycXW5MLzfD7WRqs49",
  "key1": "42ANjnhVfNvDPh5M5MxL8cszqGQsHF33q67AiGsHTSydqHLYEftha4J8Mu314JBCYLtWXFY4ywPZMoSyN3PQisXJ",
  "key2": "5vFNiRhEHmFKzh1zDfi6Sw1zBS4sh5JW4xM2KVPkMmM2oj3GaEugkT9piUhiFxsSjX6XHbKtBYGAWt5eGVHJy4Qe",
  "key3": "32D6JqASBz6bXzifKmMdfY44V6Ue1W4BGSg8JoK5mevkR8wq28z2VRAW9mT4vK4x1BQMDeFB23B7f5o1ChrNAUJi",
  "key4": "4i3UuFbR85hqfbTwLvTmgpeYGuzTj86VrNt2Rmp97KqrRVsrnyPvRfgAjw34ySBYdHRAkj4eguQtdqqfGkC2sd9q",
  "key5": "3XAtY4aGQK8RbNYB23ZPMTW2GkpbDR2XQPqUt6bjrtnsF7pDiUZtqoxgLRvLNP4Zq3B21AHqynL6wTjBdbfXxR1J",
  "key6": "4HJksBQLgPvJYsX95oe4b6UbD4bbj18q3xHgUXnvp4buM56qNkvvHkQSExS7nWCpCF2UrnXaFyJbtt4hGspTmkHx",
  "key7": "AL1w4Vq6cTCxY2vgPtnzHHr8QrEm4F3bvSoH2EyjZjUVTtAVqdyuGXNWkg6MVKf6hSTPZmMVNRzgdVEkMiUnZaE",
  "key8": "2HDhk5VkmS4dr5TAavMrVpT9662Re3st2hFwWSbEVX2a1VVjFoQWentg6jEcNNXiyTVo4RfevWjj6cXZMcucBUJX",
  "key9": "2Q6zYr1qvur5FnMQjEzEs3nmMyDCFzrVjw6yF6nsAbYUfssiJX7L6t9VeYQA9XGCtXme54BcUCMLetG2cWVcmnkT",
  "key10": "TZpF4Sc38XXj4bzmCykoZ5fQpJhyExoTrJbRSyKkogWv2ZArC5nne3kHAJdJCur9ojAUuvsVteCtwB2EWkBVZJx",
  "key11": "3qUsRvA2ZQyAYWfVj9nYEZu7p5Wfot1T4HRpzZ6sETZVKjmebLvrqdLtBKCP5pU7HE8y3wnm22WYATSwuMmDig8C",
  "key12": "3F8fMS73RQChco48XxbjduuWUDPmCSnqE9TpiTxYtt8MxmCMbaZr5EkRF6WJNgVDzmgDNUPXh82oX4C95Fi5Mnf7",
  "key13": "24QbJfpgjWG2s9urPvbpHvMQyQUrxa2JAPX6AJWyZgxwYwYjLUwnHnS8zRspeacrqHnLWW8DCjLdge59y69kvbdq",
  "key14": "2JiT46W4TFV6YEeLfLhkNyVBnpcgSmWtcFWKFKwcve8KLBsd3pUnS79veDLWcZ3uLXafANpASPn2iQzHNJ5CKP1a",
  "key15": "42TxpgU3UdSnjNfhh2mtcepz69mZmTuj89Yf5sfS8zNJzxXh42buCzk7UpsVHRjVusTdrf9V2nqPykg1euPkd1PU",
  "key16": "DddjMLfZdQv5tPmi8iuop7xxVnaFjNWnAKzAv14GXWKqsVF14YKKAUpPCntNjdeC4uz5KX4cMQz2kusoKEgog1A",
  "key17": "2bggJp7uxq66KJxHbKAkkGpRArkaKMNMrjDYaFQ8YqASQHzCoskr4tCSGGNJtb5kbb4HKy78aGeDefjGksAwXjEc",
  "key18": "4s5sBZ3WrWSKgcm5cvuPrDqWxhdYVWmgzonQeuXFozy5s7YEjXS2nM2SKXJHMHbd5NnrQrRZakZf2nk7oo5pcLn",
  "key19": "nfgcfKEdbWf7BzprZEeh7PXSBu1DK5UVqcJCdH3DkmKD8oi7EiF7oXE4tEMxDcH16sB442KMbHzz3jcLCk9Pu25",
  "key20": "3YH6wCU9ZvwLTmV3Tix8ajAoFof7jAhc3WSmrJ4GegPypEuGE5ifaCoZJc81EuPW3y4w4xKVELbRFrH4qjc7u3JR",
  "key21": "4vhcWSZ9KjDPapmh7NqzTjA7zLKxiWSXd1oNznw8dJvSRp3GM4UCJPA73ooqsycgDKLGMwHBAGTCgcFVfVUyJbB9",
  "key22": "2B9EoQi2xT3x4W32qvZ1eZ7ajyLmbC7oQKnWTpiEU6MDfTL7GHGcFybdZcttY8akCLXwzEr3E7y6rNifZ4PbjUtP",
  "key23": "36phpySHozJD8msz4G7iaBTpsL8aa6HMACpQ6zJXxoFRrC6wnuz1kZvWMxdR5YAApb1e9FAQwoM4KXcNJbesVpm",
  "key24": "2aV92KnstQQBvggMeH8B4JcQ2UAGcwQpAbsyuUfNm8kssXA83NiXnRX3PxxxGGzVPtyLhQn9snVNJhoSWaPGdphY",
  "key25": "5reHyXxGstxnQxnLRUAZzRirxQqHEFno7Dds6ixWwUP5zuEiNGbXSou1bQaZZGdKL8N8VExajJoqn1BFPVKgHE7M",
  "key26": "Bdbh3SwJjwZgttKSEDcDojBSXbXsWMQH2vgBqw7aX9orHNVyzSeBaN2sxbeV3YgSRoYqG3AkfW4maUu1bAX26YD",
  "key27": "4YvVUhdU9tnUJzscCbTa5r2GRgsjXrQMsiQmqoPhqTqxCMFKZaLWhDjtrGZ6XD9mg5iDx8uFgVWbCwGdvLZx11oo",
  "key28": "3o2MZ6x88JCvYZPkft5a3Vc7xU3Dt1oAmDD2A3myV9S44W9iBmuxgG5kRj5soXFyPLvnGH33d2VgcQvXqapJkVdE"
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
