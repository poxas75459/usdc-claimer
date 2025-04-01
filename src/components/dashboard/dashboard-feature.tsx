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
    "2fKmxJNH1WeazQzMbftdD5xeFbPYhegmaB2xF66YtUYRZxSgXHG1fSe8Pp7WLEXiXBq97SA5zojRmECAvKFghwzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DFYP2nM4Gqz4dGbiqjBMaZSxwsZYQxKR6TjP2X5pVfMVGaLvstNCeWorzszEh8aoLWjpyLqcUcP6jwC1tjiGUA",
  "key1": "4cfgCti19GeFXjgx2KD4Dr8oV6rPQ4SijRXFpMQnYA3wPjHCcPrQMnQvQr1aJ1oHdBaBTZxJS3piRvJTCE5t9eKC",
  "key2": "2wusKpjSk35zDXG7AwbyieD5HQqq7FymwNBvdCiJ7kmTZSHgUsUAjUHXDJzEmC5AzAhyxmNzDB9pbAYxjbsfA4Hc",
  "key3": "3yKStBPHouEsAY8Kucub3vWLZPGECd3W7rQfJTihFqGWVNGcejVC89HjqAnRe6DY9HX4RybwrjFQkrZzevMBnjG1",
  "key4": "53wcp6NdAnaY526XD8HER3gttnbjHbXFzHg1j8yPhsmKqTzq3VKRuLRCGn7xpRUteLrJ1Ds2tss2Uyvcn1h6Bb2f",
  "key5": "2vYYMzdpSxXAsp8hXSFRhhSQ9K8JutMKT6rhzG1n83hZKxU9ENjpfr8epchJAQ7BjawkdQe2M4QWVNR53HHY2ABj",
  "key6": "548AaQFnjhtwgj9xADiX3hbbJEGRNNfAjWvTJkPPvPU6jjGMKQjWiJnh1vLz3N1PPDQezbFCunYcxXFcmVmnTCcs",
  "key7": "6m1Ybf151bcbUhAqa25MckgDmpQ1hFedFwgwfkGs57YPCHXG8rpHQCXCoPLGk7npikBPH6hYsgZVd9Mzp5Wd1y3",
  "key8": "4tWZ1MAJkCPLpsLgvWpBLZ1HpXWHuzHrd8cctkAVDm4ceQaVWXGmu8ATN6WkZ3cpeGptpuVJ89B15ZCzujooE8UE",
  "key9": "3qEGVZixrWxAzT4hdDk7agQ3T18tQs6JHss8PfkQwaw98v8YeWEknwSdaFjBSen72K6ir2myPNgZhEhh1VnGduVG",
  "key10": "2wHsfy5qqWka13youvi1meGNQTrb76rW9LJ9D6XQxA4tW9zpv33cXR7y7nNeyrABnj6ovwR9yaksC6wnzzKU5Gw1",
  "key11": "4qky1LxHWWb6phSTFBhTjgtVZPhWHsLyxkaKoqgMyDTzby4XprpnL43vDFc9iU2xFrWCXvWkVG84CneUW5xATFNq",
  "key12": "3LiNW8XD7o8D4PF6oYYqE1hEmTHJhfjzkCoQQUxiArSa2TGc71kN6YK5rFYGGUABxii9zwGoDfYZkWnksVyw9JkM",
  "key13": "2MjEbUWRxvBkLtEcqFDza88JjT7jiJejMyFUFR9LeSjak7iyd43p9HUVAAVNWxNhXS78a7mBYSRPf1ad27EC88xf",
  "key14": "6whP8mfRatph61YZo4gEZxHn2wa2FBfDP3MQydjFHYqFm23h75p931nSyYHsq3SFCpnkVKYotaooc1br9txincV",
  "key15": "5ktTSJSkMCjMQyLoPYFKR4eukzmi5F4KgD9ZhA7EaUszhEiZ8GLaWujj2FTb2Kgw4WWi5JNSdMaUxWW2d7kVyLFs",
  "key16": "4fEFKuatjpnKQvFmCo1HikDJH7LGzv73zwcvxWy22dPKm5omZKG1WezTwDG7vAG3xTj67MHbdpVUjntKhstznTnu",
  "key17": "3j5FhzuLUxQzj8bmunRmTutGVH2Zn98wHgyoXoqVg2KB6vC1uvfftcfp5AEeatgFa2hUs1W91mBeTufBPB5Hf6pi",
  "key18": "63qF4wSMQSQWm93XmkXSqQ7k9cx8tUphN4nVPSXghNG2e2kaqy6kicX4HjPMMuLtLJHPcfa8W4JVZDBsHnnx2LoC",
  "key19": "jQifCoRpSfD3jk4YaScLVV3bbEpfGTFgBc2fgVEhwaj9Kth9myAP36z2RaJuRY2RCSqnWFhBC7xEmQzCeXkADv1",
  "key20": "5XdTaRMsRw6wJ4zdAgSvo7s2tfT3h1dZPaEuyxdkQJduYg669UBedmhWkzL2kZzhvwQUbgMG2nqQPhB8WkUsfMff",
  "key21": "4dsPpyjsFqiZNpVvGttYwG6RSVi7vUvffCcRqGVEaZVaZ3rTgkxLZHdNMLLp2L1B1hRbTKvm4ZiZerVxWAcoe1Ek",
  "key22": "FS2vfCWBcHWhmQ4m86c43iLJVxRnAwP2VYfHXpVh3wpNrkNYZUPdJGtw4d7815DeSksxQx2yBCQChixFFQZ68ZK",
  "key23": "2fdfGnDbsLnZtNJDZjmMx1PRgBygWtjR5bdLMw8GXpNJkdFc4dTBDY6xVxKTuAVVWQrBpuQHoBK9sKgDbwGirF2F",
  "key24": "4i8m5iJC1FiXUAkgEe1fFsTPFNabjXr1hJPjui4qGrJeJ7RMacANXmFLGHAZ13XocKA8sGZGX3i24XXnMbcTEfSU",
  "key25": "2tiSKfhy87y8TvzZguEyDAxAAkF5jae9nTXa1QEGKH92yJWvNrS4ZFpinPa8JWfdNNDoFU3XCVraF3Kzmq8URUev",
  "key26": "3CbmFupm754TiDP1oUx4Vyt9TEBTLDdQPJqYruZFcFGBNwpjqz6DfipLjS2ArVNWipef7gucw8YRQZdDP7dNkgbe",
  "key27": "qpGs6Fqqioz8Q1y44m3zkHn6BxqVjGP1UWv1bDNgNqY3NH6tETTK7H9VrtF7rJ9Fc5n8EqrpEXrqLp5CEMbWmyv",
  "key28": "25jg6zMd4JuhDgShjva8FeDb5PZnikcq2irujDSmXNLW9eEmLfUXkGi8ixb4f1rJARvosdjUAsJXTzYiXF1t2zup",
  "key29": "3yVvk2UPnghycHmAquVT4D2P9MqjAcL7tgeD7k6A5w6yszxdtrA2KGaDfQy7ioCfDRkrV3KNqKT4wtEmPHenD84V",
  "key30": "2CwNGikYz5iZMt4tKJniThrvUcVMz8c9GsgHhEe64X6JzByRAVaiiu8NHuWAAMw5ZGxeuZ4b4XrYYfPq8JLBswM",
  "key31": "53qZKvh77LyBzn4r13oLujvEu1ZWmNPT3gKnqcVu5u4SrAuSGMc3uZ1yaKF68TecV6Aw9npY3CXAb7L7iSBWwLp5"
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
