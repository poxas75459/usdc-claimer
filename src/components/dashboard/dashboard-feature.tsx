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
    "PpqbJLQokdFvpZ2ZD873WfMYLh2QXezDJ1EmqkrBvMksRFqiQidkvy5N6Z8P82KK4S7XHpTffQv6sN7TxC2zUXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogB53DJgwnAgPogVopk2wWCpfsVBhF8Z11rWaFFEoq7mNxN3TGZifBUCQyRMWattSYqTQBfHzq8Umf9qU1HD6HQ",
  "key1": "2yYUVnm7jvmfp1wnADaCqcvHZ2zwV6xpRb7PhvagdhMMdvkbHP8eRUwZ1f6Wca5ov2hiRefEA3hwzW14w8c5bYS3",
  "key2": "3tBnNbamNL5BjfzpDEqR3ByQQxzww85Dt3VYDb7HxHofAheaNYBcb3G2YPTNzEGfpoeGN2XvWfXdwmA9jY1s8Y1x",
  "key3": "3MSzXiMuBnxNnBzwbNpiqEWddQ6U2yo8EJcNqRdcXYGi6MUkn4oXaReA4fiJNdAzsuv7aDXhGb62azk5xUe35PNr",
  "key4": "5RBVVBEHNAMy47VTL7DaB8ZPRtq3xJNGrhe3qwS2rgR4YFHQdo8xeK1MHtfxT54wrj6iBeT74QC9J5Rt2cRPy6DG",
  "key5": "92kAZy1ZQRcmy7DmSGq9TuXiLgqK6yM4wjW7VB8ZBmSbYUK9i9nLjugjanq66qDrdrxVXqAWKyNTosTYZgGUVE6",
  "key6": "546mKPtPKZwuDDXcEJLJbpxogMPqQo2mbQG8UH3K3J2GpavKJGZs6ept9x4Z4vjFpvmeGJqP9hn4bSEWzHfcZxcS",
  "key7": "4DrnSiSANxuMPg4As6p9pwHUd2JcbrNYg5RR3wCX9La2iThUcmAkSzZwLA68VMcqrQprSq1yeSRxr8WWQ91orcyJ",
  "key8": "29uns6wFc5fqA1LS2wXX1R5L7KhDm1SXSzVnwg8P1XEe9MkSq9tgdhdvogxt49JCxS8S9KjTkC9Q5dkFLb3WrMEx",
  "key9": "5tfEVCPdUsDGwhkJ2iAPZBacz1uA2pRvQeRyUqwTx87CQmyck2HpcFpoczLVt1enZv38MsnDWdvuwhu3GFGyh19q",
  "key10": "4r4WDAEvBHbXip9sTeDz8hwdonbbFU7KAAApfTJw4JobwQ9eQM4ntK72xC5bw3vMji7HixnVpPve5vzzNZjUXs2o",
  "key11": "3Su6qhypEEAvmZDjz2ywYMgn9BEpMsYZ36t7oq4QjTHCztWhoHoH8qmvHb7Gqcub1WthHNC553aj8ANbU6hEzVic",
  "key12": "PPpGe3VmqAcBoeSmmEgmUT4xyvq2LMGHTx1VQUjMSjA96qTmn4oFznevfTp1yKCu7Gm13ByWgpqHaGdsagQBKEd",
  "key13": "49mcVs5u54Kf4NGma1q5R1bGixJH1tjgJmEnC53YtJpcDFMPvTmdnCqvQXKpAhRfRp6y7NxB82N9NJWxHuMRsFfQ",
  "key14": "2H88LBps2FoM4BVBa5uGUWXPFMznZ3FfaYdrNRMyBr552nuhabJnm3ccLTdnjkhoHe9ZjaCFLSyjQ4rkda8TAyTT",
  "key15": "YsuFbiyiZsPqZpD82QRStkxwwoEi2h2wSZQ2X8A5HvXyjEoSLai5oeXmXJA6UCLFiaHG3wu1ePzBbGEeQDaPZRp",
  "key16": "3YXFdSzyLCsErM7QNhS94MPWRKto2CG75LntyQataquuhm4DoCVNNFjExDYPTDr38UAntEzHkmm3GAtQfHKMuU8M",
  "key17": "5vbenPJWq3Ruy96XPvYS66WPCynTNDwjHdJ7JK241b6TA7YRc8o3FMsrTcaSiF5g9d9EGfdbkShXYL6kiCiog7Cy",
  "key18": "wKPymzz7KDUDCNKjWHoXiRq4p9Jn2UhRpSH7aH3L9VCNoLZKgEsVME2Uw7xKnR2AzgVu39YAg8hfNJMWdBzKd15",
  "key19": "2Pq8EWeTdkJQLNDhZAvaNapA2MSW1cLaAVv8iC7pCCP4TNANEPJFNFzoNPH8VaQvMk9VzUK5gWi8hcdCinjmQ2B1",
  "key20": "4F43sfzTEZNs87RFjymgSkorUR7JVUX96YxAJK9BkmQVoWjYXE4VZnHpC5ZnNo8r4zfgpYLvFZBv6SR1t6jZgkVm",
  "key21": "3sFA4CLysPxUajrfaxorDUUnFB87R4PWwh1HpZ31AUxRFtiuXxMnd8P99HrfXNXg3PX25h59eEGXmMzt85vCMAEk",
  "key22": "4JkfVKU2B7GXbinZK1SagSTvYxrD7HECq26iz6i66jUPpx4knBanxQLP7aZLQoquSSH5FkAD35mRsc5STgCCaEQj",
  "key23": "38TDTKQS49Crix3rh3q8jTBraH8ZQ1nk5uihhH8vt54kXSVV9Y8zUjBpjA59eSSmN65T6YoLmDybsHANnTNXRvhv",
  "key24": "te8JLpkDszWwn7Bfe1o1xHRcwadjjwELjVmRSqANvaadzTKS4m1wRxwyS6tY8Hgnz86UYzDR39NJ9sRhDYkfn3Z",
  "key25": "jEvtzwzHjxY4xCS6CkYXmjR7uwcztNBj124Xw4ZuEhd27oR38M89Rdzd72VDUh4DsGfuo9U1dH1q6YVKZ42G5Q8",
  "key26": "5jwi41g3728RpbWPRzX2ABZJ8oS1jkg9itJHj3FTjFFmM3FSoxeWTE2Bs8NbkYuDHjQzuZ9B8iHMypDpA763RXu6",
  "key27": "5z6zwvzPmzzJkYMX2DZp4U1TMPDuNewhoow7m8WeEMLpXYda85kNvzUL7nffWduifnFoykDm1HrCdzgNXajwmPp5",
  "key28": "2V5a71xoXxTcZwfVfJ1qMh3t9uYgJdcaezkwuh5kVyFZXkgE1SG6pMntuUsiAuUfnu2r7Um51x9hFK4DedUpXQbg",
  "key29": "2w4ssCN1wZHWNQB8XpGN6KxWxjb9GZsDPa3T5H2DbZzkof4C9pBNqFHwzw74fHVcsv2DCBFkQgNtzSC8K3otLvri",
  "key30": "563vNNygqw86auUdfXJnC51kqmopPqSs73UJtsgSsXQGND85hmQDrv6J9PGGGJeLpvFjz589zJnZMfA5nqeF12oz",
  "key31": "5rGPBfa8NFTiq432wCjkqn2obZbhFcwSo1br6sgdJjKn81GJeiLB68JshMQd1dvYb7ZuwVE5zyAxSTL4iWRujUSm",
  "key32": "4JxpRkcFqZvncEZpThx1vPgFydsVezYuPcQ5UvGZBAUZAFCVLbigGeZXgFWSJzMLm3qpvswM46Mc1HQFgdAkNk2",
  "key33": "356fYEsGq8FhLYpPmyeTPovx7GypdgVTw7R8JjChdeprdzQbtH8XrhCNGgBuqvJK2QBLiXrznHkxMiPDRvpimBa9",
  "key34": "5qMAt8BohhSAm3LnsGkQtNBgxwXoDnd5Ad8KkPk6H8j4uonbsm3QEjCBUkhNbZYS2jZw3xBx5aaSWuJzuEw7By8n",
  "key35": "5NRYVBkhS2G1dJ1Q8ZzxWGx6syGg5d6uY6JEewHHJHyW2hnph1MKQa8At4ZidvVXQ28naSVrqV7zXgZWdukU2tQy",
  "key36": "4YeM3M8HEYFQzoqKkiV6hSgmr3yEivFEcguXarWj7iTgCxsqXs4YAPSi4vEmRrbboGjz77DUgpYhjQ8z7D33is2x",
  "key37": "3vqGM8xQuvNQz5GYUJa57H8Z9fAzyHXBnQ51hzxGbSt8BWsjcd5LRqw81NiJorioz3aDCTYV2cfToBZCEq99f19g",
  "key38": "2BapWd5w3fsazmRiKz4QT2B43GKy4y6B2qcmbBfixGYcanzNodL6hH2Q7jK6vaK1LF3rjiGBqcRxC5RSW3hvCMHL",
  "key39": "31SYj9uQ3tntVeQEGBwWintX7Gpf5C8ZJbZFe4kwzwoELp99eNGiGFJrwFdyq3eFoA4uBp5CBFKhkC3bf9p233Qu",
  "key40": "2gQspfTQxA52vCmPEcsER7Mp4yGAvnWiGeUQtjE9BqhKhL18EAZrpNsbQWiXfVeXojLdSa1NJru7bsZKq6jvzbZ8",
  "key41": "373aoiJCAWRtu1oAmp2g7vYEjKC9f7hpM1acoAooDEdq5AbCTDxJrq6JTwwyW6NQWsdY6WaPgkGWRq85p1iJiZhS",
  "key42": "24kqkUf1aoWGHn4YdKD8Hk12dDP7VMk7d5Cs32PsNhiL9yvqJdBdRBVyL9NnDrFGhFzeYQXFkZg3ZmkGErso8beK",
  "key43": "4iWJRnSHYjXYeMyswEM6JSY1SP4NCiGcmk4EQ9AnDmFSGcYZdYfJJ6i8CYMw54cjxwQnsGofbEzZCbbyc3Hvj8pM"
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
