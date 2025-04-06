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
    "3WzNGHpafjKVr3XtEfupGHLEBeb8SKFzZKqqwGpjAAEpwmXyinXdEQ1KrnV5gdXotJQYhRzEPBzHvx1r3VKffQ4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGGeS3xFxTucSSjJWXCvQcpu97iVZ2SK85MSUaaxuSiDmC3mBDhyoGDNcg57mUigt6k7PUDQpFgvJB3ooY3CSwb",
  "key1": "1KjqWhtubznexJNqEM19wgQkMRHfSmJrNTcm2rgbBdVHC19gdfcBq1CFMpJ7vPfougycGYNLhEPpk4XngrRCwNA",
  "key2": "29qp2xU9hG1MP4MKN9t3qq84YAtjB9KddQpGHLSN8iERQT5ijDwLzyAKY51XvCmDijJxTpJS9dCE3rkd9xuwBkZb",
  "key3": "3cjraLJpRXS1phMnv6TemP5h62YNc8ZV7FfG7ts3wnPiTG4t6xBPYfiuWB8HtWMzLSJ74SrzQwykpgAnPRo5KpHT",
  "key4": "4rFgR83Vzp3Gh5ndzH8MoNGbvxKxR3ivnXJbLjWEqRhjpkVVnKzsYyKNgFw7h8GGqAMnrTKmNyJfGduqWyCfFdJp",
  "key5": "2gxWucrxwpLXPVuxqx73EKvLKDzozRKNrSk92iLimFTLPoRBUKQq6X1iTViCh7x8YMWXpEbwzJUMGR7AX1ag3zo7",
  "key6": "4T2WmBzYrcV5eqqndPHuk9AobEWn59yYRAok4JrQBHw22krzia3rgq8FmCXUQPgKeoqVsWcx8UUUc94gBMYQKCXn",
  "key7": "5xsBBx4X1czQo5neGq1qErbxoE8r8gkpBRqNG4zyxq7TUnsy3y4TBTGB8Jo7Xc2CAymgBnpbGK4V6xRxGSmaAGL4",
  "key8": "5mFczQt7DPN6v9FZ14zWbc9raydoVeinVq4zhGJ6RaALd549tTcUY5Jzu6XsbHTsjwbx5VfefhBoY6jCZi9g3Y8N",
  "key9": "5t3XX6w2f4cphgdKNe4mdtftVcADSktuH4SeFXRdg5AKUH8YQk9oFCs9R25fWUb1SfZgHY4ERqGKC2Ppp9HsuQNY",
  "key10": "5mpsT98pSzhoMeB82hUBwViMcCRqU7LZp9Bp81HTF69XKV2wEDEjvAtVmRbX69qahEafyS1AYXjYoGSJcyioyAVQ",
  "key11": "2J6oVVX8thQKwfKimawpRpQXFzFcsRR7zeZvQVztGzJdUsB7kwB1R8eEWZUAg2jeCsEkTqpUsBDsSFnuzWWmNvua",
  "key12": "64wxv5zdRmswJRsyj661oBhLNXDbguin62Jm1YfmYAyFv8CyC64nUhwqFEUBzoeMuC31N1Py6XnhdFo1kzPG8ZqE",
  "key13": "sVTLj4WpV91hXJrDSudqnrj5cQzQvNzXkPfEJs96Ji9pv9bTkfkJLSqNAyxeE9iGgQrsfPBCKFi5c7nyYop1tr8",
  "key14": "2HQvsaEH1RLX78soReYDa2qaNtJRTQfS4AxSGbXWinoeDAZaFZe4WnpaBPWw8pYrkjERgG3T4cYqXMxuZDkpVQ31",
  "key15": "5x3RUh1LosPNNPZ5xGTLTvmufD1BtW1bLQMgGrH8epdcBvyPfMhfMgviUcNM4nq5DKbcWS7KMW4u5p3RR2CsLCDX",
  "key16": "4ToafBhwhQmV7ovodYeHUXYwmSJa4ZyasTH5m3qauaixvVsdze7Ktb4YNRyN1SzKjT9oBZfT9xxDMP9qFrUaHHAe",
  "key17": "3phMTeSkmApRMYnTb9TeS41mopXTkbNvAxoRKWnZbGqWY482Z2rQCYsqthaAWyg63Y4mYxqtmPf5AV7TPVwRMzyS",
  "key18": "ZJWTi3tHi8DDVYq93XBs9hgTSP6gFCfRXuuDufsnRaYUn6M5dL7mx4a3zbQBPzqAHXAZojgX9b4brASLBA56f8c",
  "key19": "3n9cffgtcdTjPwvfzzB7LgXKWEmLvdn91saTi4owrFZ1k6FcGi4GvUiCM97CRzgvfFVuKo3736r6Bp7sTtWNeFcq",
  "key20": "PHkpcSyYYp3tGESZQYRbLZyFyYkYXQrrpPYv241NQCchhU4sjrLKn4xbknD1fUnmFkTzHpXQ9LdKYy5Sk4UQcF7",
  "key21": "3m2FhA7mARMjJd4wFK5JH4pnqLETj4UWHQuNDjpxtukwyB1qihgpRKwaJxZrtKR4FJtX1Urk8KAzdTnQikDVMBWB",
  "key22": "2QKNYT2zakCgLdWA4F5MTnvpGjeQ65yPgDum87F61YrmM5H9mZ4H66DNvAE2rnzY38aZrd31afqKA6ti4CstUJdG",
  "key23": "3GAYRavnu1EWc39qX7GRxR5QDquX99e45KYT9TvAR7n8hafjkFEKxr6ZsjU63e8gP8E34uKi97sLoJJkhy8MAJEF",
  "key24": "3rRnJFt5HFfZmyrDig2iXuU7K3aWyyNhZVd4GSW5cL1XTqN4fBjipPmuYmQGZqnmJu3aZxLaN6MhVNcq7GUaY4iU",
  "key25": "5S4ctgRP3v4pXWCetJf1rD4zesS9Fnt2qDZfMduMiNRbkCMafkWyuxsgYBMwpzAiajUYxc8Ht2SdEUxPQGXs3upx",
  "key26": "Rq1YqK4iofgSCdcvek4daE8J71KVnNbHrmGx1RXzGyJFZuoAqfhADhDq7JqQMyJmYKQNyRJShStxnYEnDMi2Gx2"
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
