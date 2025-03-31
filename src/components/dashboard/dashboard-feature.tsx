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
    "5VPShVPDoZSKfuU2EbzQUPVhbCjcjBnsURmb6VF7wnMfiFrKoGB7znz6j2f62HVANiSsWVQvGxpyxCwVW7W3QcwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9UF5oE3VB5CKse3E9XduMantWyockiEZH1ZJ5nwHnZVAoUSXrVJ74JaftgvdEoNAu8sWbbzmvdQEg8mJ14HwsE",
  "key1": "24nC9jxVx9FD8MrFrf6jCpN2fPvErXeDgVxGAcFCZ478wZ5j74opuaqCWgsBHRppKB19JPfK5CpvcfHtFFyDNxeN",
  "key2": "5BRDYCiXEEzMdBDpNGvSjAR94edpiSQf9yk8oJyJ5CB8gpS5Fwrey1Xn1FqEdVUftX8rNoVQXw2xB1XjPEUexa9x",
  "key3": "2Rz79KHFJ1Zsxb4y57BDa2orEayRPn2vRbe4RfZRc9Tcd2YQN44XZ6Ddb3ciP5VgcdrggYmBeapaDf3XHtHbix16",
  "key4": "3A72zDFXFYxYw2ziMn48YZhEq4maEubD5YZSgqpETYHi2uJTmgrz2mVzXKE2snnVGom1BKmqMTvCipLcq3qNJWK3",
  "key5": "3eTRmGqgx3QxRoo7zJCxEJGE6si2gMNiCjLPinN1Xs2tPoNJFX2kDQYkvNixpLFhKSBSYn7Kf5zBtqcpDpjysbhL",
  "key6": "pcue5dGpYvNa5ScL46KwkKLusyvQh5avGLaz9TuPG1x35QtgZcwMLnMbA79huZ2Q6EWXaFdaVaMtPPnvSWTb2hb",
  "key7": "3kqYAzCmKmqrFVaJMWtESxSxuwVPLWPvRm9MNbVNE1B4JLh6aM9k1n53Ct1UJoobYgwcjGnTFkKS3Eo5p3pev5rW",
  "key8": "3yiusDds7Yo1K8fAUwrgU1RnmMwRiXxwLYKzELcsSRRWbPetKxD6Z1iLabU5DSVGceh6ewSgpYXvMPcXuUCdJZQd",
  "key9": "2RgkLu6S7Pnoh8UmoaNNAVwrSV5yeZzYUdnXDmphfu269f53knpnBJ2wjM2DxGcrgP2ogvJQJLs1mSm2AQsBQ13B",
  "key10": "5KS54rgAnYvkGXwm5jJRDgGywYFJLREVBVx5o6RQYkgygCmhK4nyJmPZzuE8syFiep2JrHoKH2j94srfCjzMEYSM",
  "key11": "4kkHbdTJNgU89CxxXWCAnygXqVM7abGNpRpCd98PrwtVCo8GyqAEYLYUTf7Fn1fQJf9zzFDReYchQCwaFoqYbaFH",
  "key12": "5q1UUKjWLrqtGFA7Yy7rxsHjuWSNCrP5hTDHFCoSYnakyhVqV8hQ8yy7m4T1z9h4N7ZBJWV2ocNXizfryLYt8Kws",
  "key13": "HBMLG1wSFvRbCdgFchnnyRx5ytykovAXzqWweEGAGj42sPT7Uu77S5EPNcajvxGJRGSCDKku4ewbRcqQgsn9q9Q",
  "key14": "sx6ik5q85vzPSG3NWCBttUCbb1uHPHNYA3BBEwGAo37Ts2pr1CCjPiTmRco8Kf1ZDS1QzZ551MoHdafZF1HHpRb",
  "key15": "34KegCii9ZSspBoSgedDH4fnysdyqrkVjhrkmxC3kEK1Z8iSBQf4cEBsDJ1qBvrwpZF2UTvXUVbU4vMb2jcpKFfB",
  "key16": "465XciHL2JRJ2FpgA5C4rkHSjH2nfp2JChGVCJ65MvRFs8ddwZdoUxHhtoQmu8ymnUq58NPiama8prqGx2TjWcik",
  "key17": "5v12nXN2rGCBDSBBTK9GYtLhgjCSxn6HpFBaWhpe4QTJVbWqkCW2fHCrhbaoeVwoLDLPeWt35EPsZvwiQc7n5m5R",
  "key18": "2c3JZPVEVkD3SeN22spv8NmkigsXjNeFzMYq14YuFZ9RaRonzK2ojGdDvtGzKrsV2yJ4Qh966yTD5ZGronMtDf9X",
  "key19": "25d1rwc9QyvFKdxFUVk6rRysLHxroQ6kS5PU9gfnbZvACWsVeMYJxNkEGdjLXXPfzAtJLmWravBfE1Sz9uR2jJcY",
  "key20": "4j55dRDQQ1Eg4UHXBrhW8pBEPbTnpYy97TLVusBvpevDvcXFjdqsXbGMQ8PWKRbn9zqYzXcdf1UqYx4gQ1Hmcdby",
  "key21": "4Gpb4zyQLL7Kdvw45PsGbSQ7Qr9zv6FTPHeEirp53rfp7FGyCKg7aiiMR2UwXEsWSkwUWPbcZGGEBy6CumcUtPUc",
  "key22": "L1wGiJcpXA2Z9N5iD4kaZmLtJcjAdZXFjhsBsRqUvvfWoxNViUXskv9MEnZtbpU1ew88uNs6QG77ukq4nRums3P",
  "key23": "LUq8XMVbUr7uKxfhGtfe68vLWqxPCw6p4gArQUt2uqKR8J7PyrtERwpHraDPVvUYt1KhU1b79fWm7oPn48Zfwnv",
  "key24": "5CSdYvzbUj2DjPF4EG5M34pW6G5MumCngAKowY8Z5cmAW4aL4Jz4NuipP1EgG9ZpF3aNt2bXCk98W4AAjyNqPGLZ",
  "key25": "2NernY3Ltjvt6hWTfs7m8E6CgKeFPq4XxPudqyC9jSftSVKzUs4YUQaDo5u4SENdHsvRMNqmEcUZzzj9q6zKbqqC",
  "key26": "4qodan3vM5wc8j6ymoMYUYLykGKJRimUTqKZcaomYEBVXpUBenTnF6YcRYaZK1xVcx41zLHYeJdCpE8aqjvD5EeP",
  "key27": "3FwE5fVyST9J5qGmd4Yuy4EnAQyXhwXPvASRpDnH35qKg74r1px4ByatB9W27nvWvWdXt7XmoNZAuWKXuEGYqZdZ",
  "key28": "2nCbDQYAj8m66vcPykBnWtg3GFK53bGmsekmknjX7vGNqYo8Ry33JiYKenocbp8cSQ69Z1oGiRaxVC8W2xmmUzr4"
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
