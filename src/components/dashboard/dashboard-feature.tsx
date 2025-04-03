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
    "1uxsfnxTgo7h1BzLysHJmpB7NqKRnZBMhUgx9ryZ59hUXRYJuYjWxTAZky9nkC7ufKKaZruQTkr2aFDCAyUXFKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZA8uRE9ETCuaa5SbXEBdPBEgBxuMGayqGewPVjfjBdXPa3a3ufSzyV1Wx5JoF2eLaYxNFbCFZvqMG3D7k1WDonE",
  "key1": "5GNDz38g38ZxxBZXDEZB47FMFCvBugYUoehpScmzCGm7nVKuFBKP2ySfYChm2r5y4NP5Kp3Apuq2Wem5ZcxaaYxn",
  "key2": "2yMXvnSerGmS3bgQcMPAJabXqV9vCFqkHNvqjTxkwDXNscgfKBgd4MfDtvcDWbsTpsCvnPBkSrHgc28XnFHX159o",
  "key3": "61k66VPzzXrcFQPLJy7e4c2FjeNMi5gmFQYHf4WbFs8o6WDKNXYENCCAoPFm6TgX5XahqP1oU4xdQv2BeXbDB8Eu",
  "key4": "5egHZxiKVasfKmiwKz1ustNogit8XnzW3XfuKwiotnCvupfLvsVRUioEbrQsSzexhU9p1LW3yfKJPowRCnMcYfWp",
  "key5": "28oyhrtgxnkkJ6kVCdfd3Ycos7GG6TWrbJ2vUBvNrECG39pTrN5rQA61zNqbLutQRMecKkpBMSk7eRDhTNSURJ7D",
  "key6": "2DHT2UKE9Z7MQc5QwmXDm9iSmSh2hTgkH92LpfzMHZm4cw6nfb17VxeM4mFyFYaZmpZPYmjjjqoVUUpbm9YH7XTP",
  "key7": "21f6Ae1Vjx1MNgg84uVRDcT557xZeBRSvVHdKSofK9m1XQArW12DK9oi1CBHtm97ge18wU7KFXFWDKp2RH3UbfUu",
  "key8": "pkNPw2SZ7xVq3kHoEETh7pf9b1r8JZekj4kfwcJB62tc9rQdQLsQGEKwJFVhHDtr36HKRo17oFYPNUU5ThJ7cpS",
  "key9": "2iiMhXLFRu6NpHTEWaGLrsHct8uhkjhEQDmJKRTZWggzJxkT1MF6qTMMnGqYv388yK7K8eppZ3xNacAhCRpharE5",
  "key10": "mkA7ibd7pGBiCpUoLsyZ9uouVUpFjFEUKXZSYfBGpt7k3zNTHpb6A26CKSB8M2CfoNeSeZGr96odsCAyuRQBGGq",
  "key11": "3aPoMbhkUxc2k58yoBm6eyZdfDLdvoBxCvQzWjLwLCvmQ2Y36jsXUaKoeDZJYLY7Sauo7EhCsz5Uq6FR9K1m1FEf",
  "key12": "N3vBjWGPxpRY8RQZVVCvS3HxSUn6gRFDwBWaY6KHWYn2o4hwbrjXLvgse4jNQ2vDPBTqkdZ9WVHCe2SsaLaBDGb",
  "key13": "3vwytoQS6ve8AaxTiXhuQFjinBXNZCs77oUUpP4XAU21RFyk7NRDPoA8fkpKpAjV4brDS79KLemF1Dnz6fJtUSkf",
  "key14": "JsTG1EUavoCM4ryr4WMmqtYbK4aa6NfBFUDqC5KJqb1fBN3Zf8DYpmvFCT5GGEGittmWcB13J7febQYnBWUzmrD",
  "key15": "38k4SEh6MRpkSHH4eVKrxEdrKZrQmdDuD9noWKestTC4j881pmEg8z2dchMJap4hMFo6hJpP63Jgu53p6i6wRtX3",
  "key16": "5WHZn375j4Ua7Nd9RRzLCxGrMjBAknfSW71aAQV8sk3WzNmJFStxZzgjJMXSaRm46qJCMVkDkMxJMnjXueknndxr",
  "key17": "2kTMhfMawUh7VAxHraSE1DeTDqiLwLXfEKHFpy38HE8B6CcCapyv68LQuXihSGqE8gpMt53Z9WyMpD4523LR7Z8T",
  "key18": "QHTSLwUbdas5QtkhvJ6JNLYqGZ9Ld2Az8SvZu6hmNjT18ywGFCgX3imvQZREGbaqXAK5yswGsDD12uxUGq3nfGN",
  "key19": "2JJ2NLRvGTENMsedZxnmApHaazCjNPuFDYCL3dxmNvGpuPD9jJJ6J8zhGXpDHi27kYPxku331T2u84K7WkST1pxE",
  "key20": "4kZqDnbpFyAYA4igcQdZ2fTUk91MTwXyXpWKufbACEKhPEBC5SHbukfPt1mfxZb8gYYqpH616kRgnzwRexV2A1jw",
  "key21": "3xmcsCAS2p86gBbjN8zfp6if713bddt9F4Y1mjjiveVieFMUvvByyoG8ojE6LMv8eJemhprASGTHRhLMYYrzueV1",
  "key22": "3Qnr84v8d6uWoEBbDR3NmudnRpB5P8scPHNiaoCorzoU9fjfEAMM1nv7Ad8vNGE7tjHwuBxYxahdEeZLbzuHBtDR",
  "key23": "2kiufXXTbyigmn1kaB2fPpVfobgjhzhDQABCtp638S8CA8Dgoq2K9miCBNYhSMQaUg9pXS6omHpLYZcdkXVxF4F5",
  "key24": "3xhGVSL3ZsSEqvCk1JTeYmXRXugKLfA26sS5H87G3FV4drjZwn2WqAw35yVqxw5zZZiiQnf8ukkrgxqsapCcVncw",
  "key25": "4gDhGstf4rA7qC6mGdLKh8nPeGjEK1zmDVNcnXUQtpbUHeYPhjUcQwdR4uchsVSsfuVvjhtj7U7mYQpzwZeGSpR6",
  "key26": "2LyhEp7nQGoc1VQ1hDdQAyBrAUzoXk5NbXjEiee22teMqxZJBrVzQJpJA7K8NFDUUdUpEGntwZKHm3EQpxGL54SU",
  "key27": "4WJYughuQmPq9EwCecGfvvz2vpevJEDQapnymR2mHCzvVguy9fZhGU1szym5f22wc7GpstyG47vzZWFvXpJFS8Sw",
  "key28": "5JMXJuuZWK9LuoK7GJ2zwrfRucG8nEnB3E8i6R7VqLFGdtS9Q2a9hwiYDt2He83EAJtYhFZcRxjVn3fX2xVXrzyk",
  "key29": "5RoXkZ7MLBcoHCqxP2ANw9ASrWMrr4LFgaSvbGJyneF4L9m9WjkGHDtyXm8zLptmudLkjuRh5NfkNbujwyuNRc3k",
  "key30": "sR38dMRGD7vssCtfAu4xYQ1DA71y24rn54kmdxxnCf5VjyCNiD1GUgfq4VC5PB2Wvcp4EdbVk4ocJE7Kv6buktu",
  "key31": "9o81V9GsGCBoL5oUYAS7aKREFzsZfS1uscaXrEQ4exJyqU93PywxCFm6ciqRKaQpxeCQTth4oZLy3wuQZvdgqz7",
  "key32": "571WLmsJFXvcx99kMsR3Yn56rvgnBrXr6z8x9xWKsMsuCPZBYzKZwsJY8E18Uw6HrkXEioYP9tDErRzhje2Nkf9Q",
  "key33": "2DbWSh92x3i1qYU93vgGrbkDiDMjJsisNYVpaRapYoNQB9Pyfr4pxSpD7CFm7ibeJzpGM1qxT3QMKZvztXUqW9B4",
  "key34": "2b171MZQ5NkQq6UTTWpoHUvNfqmkTG5ghgJLf9bgRp8URBTfUdMcJJfJwPzVJREy1qurYaVrw34JPzd2JvAaCF8A",
  "key35": "4tAz5R7jQzcQB9kj2TNj98F54wazuA4AdUD1pwzEuLRgS5y9nueo2AzLbSfszbPdp4WXtbCtD8SYmpjCyLk1XuV9",
  "key36": "2wWMDKagSghXhqJH35zE9GijbaJ7dQ6Ez8a8kEri8gR6eEWGDjSxYZvfJyYXo3jwER7X7c9v5AZZP6Xe6j9pLkcW",
  "key37": "29G3cHdY7Gaet3utNVTE32BQdKzhqQZH8jQgH3KULAV9Zgpr8RuELTmKmDiSz95ua8iQSs7d2UbMZ38FRiurkhZt"
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
