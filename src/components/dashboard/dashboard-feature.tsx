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
    "53dW2v99SYzZp9QGe9xLcrEPfoD7uQEUy6gLob1UjWjNgD6jA4MipkLjVyf9UEdR4aCyk22YXvbuot9wAXMFGkx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dgKiaAYbuEQJSWbtnYcNqHtbUUVyAxsdSRt1eM35jNJYtisxaLMEL6S7PRnTq8yRKVF8cTGo63aD5sadCE5bijw",
  "key1": "2XyGrS84KZn2a4FWt16zoeo5Ucd2KpdHv7oZ3bsyWZqnznMTsoU23WmwtLyhi5wLWBBiNNxkDy4nRaxN9d5AoDSV",
  "key2": "wjeLiv5aeDJYQpgq2jeD4iehCsMNX5uGvXhYfqhSTDTqX2ogwfo41uMYawo8xoGWErfq469eb1bYWLa623gvm3h",
  "key3": "4jkELLEV3q2PromenP6qYQGAaMzMc7NyYRR8n4g6gE5YDyn4rhPqumYQV55F2qNN8X7qoTtoenfLvepjyS3H5EYH",
  "key4": "61vAqkFBpjZsxVdfa697WoF2XWf3oS98GTqzPYkXTxPWX8vyBn1m2mK5iEUECkcHoMJvAEene2XUFH5qvWyqtkg3",
  "key5": "V9M4Dv7fnuAGmNnVsuni7EWhtchQzSPdABpyv2j42rLG7RiiC5Mz4nS11H5dzpFNC7ngzmAXJ2aQUJ2Ehj7HnV7",
  "key6": "5wFTh8JcnNphBCJr1fJokKXucfDcQfHDZ6LpooeT6RnSaR28MNv59PDm8xkuiNikFshYZ9BRJYGjgnoyzEwFULge",
  "key7": "HBPTpSrbJWf6K8oNnDAVVJEaRVJbH9mH1MybwegzexvirLMjEX4AbfvWd2rUYZoXuxd8KSBT2uj8agiQAnndFow",
  "key8": "4B1dvML2Smt5xEzFKHRQeZYaWxG2EJZpW9WcGb2wsfnuSBKuJ8pzbYRJpCUM3Dzsq9P8VASpg1dJ7qX8tURGifJm",
  "key9": "316Vv9bRXhboVodhW9t79ydsdQ2GmrXzkdTipueKZdJ8it2Ru38ZKSCsFaygwBmtwfYAoQUdfYJejhjJ9KB4PuM8",
  "key10": "3AM75ZDQ76zR7y8ePQo6epN9G7TV9ei2SFfRbpNvgJfAxsZ3CzwsReCyyofBYhVnqgHcSsM2coWTkBm94dpgnY6B",
  "key11": "4tgzWLLh46H6UpbpEmCPWNDZ3DP1suj5T5hfQBz4LqbdM4F4gtSikFNTzniZLPZB2SYj3GmeDdJWTKpbfqh3d4o3",
  "key12": "4BJUWcLq4iSZPiPVaM3AjKUdeFz4BH9D8BtxC5xJjLYrPmjQTmyZjiX95mw472nnkfHNEPfmw7QzJZP2XQ9zWjaX",
  "key13": "51Vk47LrmaF5hdxDBAcJ3Gsyp5GVhwKNCJiz9mFBkP47DMqte9mHgBNSRnma5TqbfVVdRDpjph1nhZwKPce3Q6EY",
  "key14": "32qFHckEFef4c1qE2aG7Qz8mkrUX9vJLbB8GXsWU3f5TMXrLV7FsoKb5iqm5DBTKzY85S4c8vLgJ3Wdg5M1UycPe",
  "key15": "8QRhsdKYCnFpMxRgrmHMrB5LpSNkM47jtJ2DmF7rkA2amqbdqU1smWa6NnpRy3R32681Shxj7TicXzWeCi19vYd",
  "key16": "59Hj7yeK5gZtyMctvGSAdneopDHVvxLXETyjSvvQPbAxJuZSNocGBihey4ixztRcLixJD9gXNsJ5PJkxWBXQVGew",
  "key17": "269Fr8u7oCozsjgJMNX5zMsRpHPE57gVdkPjJXA5jUM3bKP24rxoXmVzXHoUpphhJAM7KT88SxMNE46yz1PPZvdw",
  "key18": "5wELka9L6b2LsL4msK7hd3y5y78qBTnfxykbsVANtFMANQJjxymPBjvzLuRjJzHY5wripA2uf1tEJZe5xMEoFaSR",
  "key19": "2nuNHtWD1fqbfbfeiEDdncxDuC8Jqpqc3e1Fu9sqVqK9pBvnsHwTfsQ9NnaaU8SmyBn48yiyCiRo6ABy84kKPK3j",
  "key20": "61dbuyoMwojTW6DxMGXCj5r1SisSjMk18ojvFkEGbCPJZiwxjUKxAViaZ7uVxKqPqyMFMb6RM6KFAzj6buw72i39",
  "key21": "mzr2Tm74eWiSd9fm6vPZb8U7UgffRSvAz1eJKSKjDhiTJ84xZTwoTNfgENUvk27CKBXJNr8scd2wdDnySJU3tvp",
  "key22": "3dDQ3WK31ZezR8sHafiYWJL1wjMZ2V6C2XaLD7N1gp5JeYg7Kv2dAxKXWzr35nThXm22XxGv1Bgqwq3QJh33tWeA",
  "key23": "2WgKNNBDPV9QCdUfbPaCQR9ydHJ1N4cpb1xn6kZNFjJbbAQqCNJdJKBPPPEszoD6z9D3SJGpZRpFvgPFaz3kuTBn",
  "key24": "4xYGrzeaTca5Kkphf5NLbFknzCR9beNr7Sm9hg63UcUS4nGxGZckRtF6Sq4nHSEbkWF1nUjjwqYPTkxtRDfJXvaG",
  "key25": "krdmxyqJnVegY9rhieaBJ3JGHoydiQHNmUW5X8WFHoxBLGio4rj4rEG4qrHi22Wg75JdBFtfN9YrXGJRocpVXAJ",
  "key26": "Nuzsm61K1ziv97gpZTK924jDA3XtuK31NvCyfonEhSbVLuDByeWJd9N51qnXKJ9RtqVg27P4KR4aQoFDdeYzz6m",
  "key27": "3caEZU5F6CTJgz3Nmac1zBYLK5CdLjK2LtxenG1Y4AMsUBagLnURhuVEF9jTMFy1Lx1JF5a7gaHujGV8LrFSxPsZ",
  "key28": "2PeE6xhywQeCVkBiuhtQJhFmc6yCdiGBWiAFbUu7zAkHgZjTdGJ1wpCeLZrJbB2eJYC5XwDGjVkoQfATBVKxCyDm",
  "key29": "XViD2TxbJ4YJiEnTgkFmwrE5V8ifdQ1UNBuDpPGPpnrTtuMWniFsbPEKhb6sDae3SBtjC9TtQuBUpX36LmCs54L",
  "key30": "4a4uS8jJsBEBMWeQLWxLy2HR7KvdxRMurYCuVko3pejx8H9Cjx8NZAU4CJ3VSbTh1jKPrjGEYWgsGanepLR4o3kU",
  "key31": "ro678ELXQpbaY1VfkYCWwpvnCm4Lm5uHKqdVFHCYbhqvJhR9TpkitvdXB6W6FKbo1ssAoCKgjELW2SgxXe77r6X",
  "key32": "2CXjzYsexE2zYFczCRrQJHQUt3YYR2WBamxXrv6XiPfP3cdsEkiqZTXe3CWJH1gMvELzYwYJ9q9nam8QossBay7Q",
  "key33": "aDeU1neG3H4h5ysBYy3dRWWRndw1vYGf9PcwHUvxx27THwqA427qpvS799Y1pVytq7i4MnXJy8i9iuQddFMjnEU"
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
