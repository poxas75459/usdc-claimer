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
    "44hcw9jTRyLYV8Qy83SCTrME3cwKQxu4AAdkBib53bmvhKn91LL7xevjtPthVvhKVn4C1rraa2hSuqkwPzfNHsT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asEvMsQaZ6Cwcc5RktVq1zDj8m4DgKBT5nP3TURnRiTykhBqm2qja4eVFEnc3hCwhYGf8qtuHYzjPbUoX4mXLJw",
  "key1": "3sHGJoH2qV2p6Tr3832wqzLtVSmsbZKDbzd71Bm7tdyhsndv3nUw3rmCpve4UgMpviVJNuHuEjn6WK1TVSK5S9wM",
  "key2": "2xbnvEobxwHRYgTK9a2TKZCuEJTwfhts5tYCVS3s3TeZhATi9SS42PzUBmwCF3efjRsBgjG62eFkMAFxoUBH7xNx",
  "key3": "4MhquboHAqNdeRiAzMjY6AH5Gu12Hf7hQpLXpb9mNWaiAqHbj7HJK773X8ZNpMZAeZR87KLWuWBivSGudufxa6So",
  "key4": "2feVdneNinoTsNjG3f3riU52xHVMxTmyQFzViYXP4FXqczQS2g6eBkXRvhaG51XnMLLD6Tx4tg6WJKjH5dNyfcNg",
  "key5": "5a3jpfu3xAEnjmueJESPpNQYYvpDDcQjizRGR48GAzroZ66HpELXjKqo1QMxECdy1Ek4R27CwzYmpKdtdgFp184Y",
  "key6": "4Xp9ZUpFhdGghz4wypbU5qsvnv3ZQSn1xWEe4TdCg9VRVCmCGVDVnwKJU35D5Feb25rVj8KLNv2HtundAuDByfbS",
  "key7": "DpoAd3tksJ1VBujbK4EP1BcLWkKN3fyVmJmzqF7PWpaK2NtEn1EisZrvQipS8mntPc8afn7MS73WN5ymqWtjTes",
  "key8": "52ddaF8Tk4UA3gVkeeqh7MdoE3NeHYKBdo49MCZQEK4ywXZ5w7GQjXRUPZhPuAZv4GyZ8NrTZisRREpXrbp91UFF",
  "key9": "imVJTp5DpXNRdArNZ21aRzX1R4E3NqBYpYpLGD9h5W2tmG6QmQYpNbierat8VbyoPcEn7ndhCKXus77s4KYH6SK",
  "key10": "jxPmUzPiFiomkaoXWLdUJTVbiwKgaWyLTCAc7ddxeVYTbVcinGKcStdsHz24jMexsGy38ePrH53dxKokGfiPfu2",
  "key11": "4KqiGqobgYiyrAbHF7E72Du55bP51rKifM8FkJz1nDa9pc91cTBLwx4WFoSV566RudyxGybDWvKCMUcGJg2C3sR6",
  "key12": "4w9ZjSEsArVybHN9hiTto6N71anf3cRy3GKSHLKeojo35aFtqZcpLmaCaLCC2MgZuV9VKPoq83i87Xa1hhvh7NVc",
  "key13": "2629nYhFxAPWtvgJ6GywwvEJXkFLPKRaPqKwk6fWaoBegahuaZLrh5qRZWMZMkJgF1AZvmvMTwqjpEXEXNT2xrrd",
  "key14": "Z4YyGmqjrhN9DwwJfQi2iMscMKFwXyLRQ8ipWN7NpXBt6vZG8NLPXZaRCwvwEtGeLEK6nftZVNj8i6x4U4PXzPH",
  "key15": "4sodpKCy7PC2bYgzuhBMPTo3mn57raCppcsu4B7KErDn4ECV7RPM5eYNwmQqV55SfMheHQsEaSjKGhHZH6ccPeq1",
  "key16": "42aMcrYTTjvMZHcpWXgMEcxKK9JjjueKRHmsisY9KxJhUoUdrfT2WTYsXPPE3Z4zubdSsdavXn2V47PDGj9KswSZ",
  "key17": "4iUmZbgeEeq12iZPmDNu2oVtu5Vww2UuHUkiE231SViNDyRZMNxts2tnUoUcM7jJGtoouxFdR4zoPdjE56NoWCBc",
  "key18": "vgg2ZarLkSBf8w5mTZ6pRh5erJuuy9vycTS6yGMX7hiqTfR28Z1e3m8LpsdzTRC5JjjCsU8sPEzvorfKkK7TJuW",
  "key19": "5AATZxfEjP79e8mz8LQ32LUbX5iPPSjNbWuhyeZ4LqpUNxU2Jzv6vYFzv4nJq9oQpaMytaka1TuN36MAhv22SGN",
  "key20": "5fcTDkmmkQ1cFqPTkVNttX6AD2dveDmYcSZde5M6tbyu7SYSm4cGnpBWuQ7ksJQQJprVJHCVXt7yMicCNnV19AxF",
  "key21": "2exC6xE8Xbng14Q3pPZRb1Jtzqr3ze3Zj6RVsdrqkCuDbsVxnGjDMwdf1zdJWoBKw1LCBPmv6KgKbQY7NRssYZPb",
  "key22": "3LLUL3wgAndagoyYHrv6jU6XT7tDaWgAwd6CYqtzLK3AQwGfGdaDG5cwJmg524svYybqV89fWRGw9KPwCxURYyF3",
  "key23": "5EKiffgAb1XVpWB7Ptq87jVD1bwTphWg822cV6923EBdTVNBPoBAEWyRq1bkuBk1TUUGpacKpjVMgCr1Zd58hi7",
  "key24": "513cVQTBptVWhh5MgFcRvU4UbMQHeihUpn4XUwKKNjopV1Ga7PShGobFV35ucyxKX8fsRYoTRqaeLLavRiEEdLAc",
  "key25": "NaokietyiDWrePaRTfX65ypLgimE5Pjc9fPwkGvtb3coBtcK5AduWWYuCBCzts2meZD5Z8Z5fR77dEeupE7PEG1",
  "key26": "2ieY7sEn2yk1AdhZeoZsKwqdW4xE6vvcUk4t5cG9CLQNgEtY7n5bZDB8xrKAQUarazzB8epkFjayacJsKSifxiEq"
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
