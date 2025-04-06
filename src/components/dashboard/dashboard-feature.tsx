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
    "3R6wWqav4TVjjpWEWmLaetoEEJvz58eZhzRHswD4F5syd1e9a2KYhUsvEqHRLoqjjYRRbsFFoqUstRsekaTWucPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W45iW4oAqzpkh1r52JjJsug4bzK2rSYewuGJwMjuNCv9UuzfJXd4Jgb742PSLeSWMdT2u1bcVcp4r4zCh517tVf",
  "key1": "42jpYUySnN2zGwTYr6AuUk2z5PdtJs2sRkp1q5igREgYwLnVnEbsMBrEYucQKdX3QcpEU1U6buWBAPmdDgMLpL2r",
  "key2": "2BRXbE2qvHU56XbmCaup6C5oVLHeAu1si51QCPbyEWDPZDozUmQuXCiyNdLzYcAwwf9QR9BJRATGSnLfASJztCWV",
  "key3": "33v5sBkKsDAxRPnjAuCPezidezhQkhh4od4Pg1ojRFKDUerGmCddEaGuGuRFaSKXsun1e4ASnsapZsDdwpnkHuf2",
  "key4": "5XqmzVXin3EFCY5fzUmFWTu5wybS5NDArsPFcrGivupNeFYvopT7471YGi8WHJ77nLj9hBPbLW1TvYr7ZWFMpnNa",
  "key5": "58ANsPhW4q1bZx8sDRPzsgvKbjFDshD3ySzrjYd6Tocmu2huu6PkAZH6LnPG6vL9V3cWuL1kBZUbdv88hJZimRCz",
  "key6": "3qEwkBho2bCPbvRmroU5XdMXcmTNvvjCTq1DgtihsXVwfFobdPbMHwCcazmzbPnukAeGC8cJU5YVNqjENhsxKdFv",
  "key7": "5F4BrxER9cJRaFMPdAX2zpWSDeEjV56vjxFh6cPoWa51DStw2VJsEtDU48K2Mvyv4f1Pa5ag7FpRevcPg4xLDpxm",
  "key8": "3mALNV4dpJFzdxfQtD5F5vabaT6sezFf2bqF2EEj8C2ctUK8zQ4KEodWNksHMGKsCruwwk1t1yuV1ZWGbh52Z4bP",
  "key9": "4CJ4UemGXDXEJPMfFBRVYbDzpeVHf4Q3Ue8r7tbXbzGvSLaSJ8acCBHPJZv8k8owY6cqwFwM4NJnQx9PZpeHU4R4",
  "key10": "4srK2WT5RcF1Hdg6ZfUtziQjYoC1mFKuRiEcTqtc5eKVB6kGYMTvvgqcGx7aWFi5xvxWWZAutYuoDHZcAPkBqMFa",
  "key11": "iSCx1cKmj5jsuzdnZJfutY79x3vbufR1J8AyR8koQeWvdpRN95C81YAmHTy4M4MRis6FrtKoUxAKuW2dW3L6obM",
  "key12": "363gYxx6MerwQksTxtaLv2c48DXH5bSWHom9PYne2P9tEqWXEGHU3FQrwUYBovGiSQjSfqbm5GKHpk3HDFSyHXHA",
  "key13": "2vD2je8FEhYvzKUsc4N9oiJjqYRNP3AcuNtvH9uP1DaKf3Q2GCYgAThsc1kxFxzX9Q6795XyFSqNc9MSFQRRF2p9",
  "key14": "4ggaCvGGcv4p5zc9zrbKsW7PBVEweLA7uiF1VTbn2gDS2NDYUowZc8QffBBZLVfjcM4VcuyXCvRAnG4FWX7egQNK",
  "key15": "3PYZ6pcoJ5n66XVRzVih1iijzrb3gwyuci5YREHzQTvkCNd9oqWWovbPGpVgpb3BstKH6zbg8nehcBa1sSsJFG5h",
  "key16": "25yyUQpkpCRJfc4LU51b7158HBUdd4yZH6Zw9XdX5C8KMKSQSMcT1qhQbYQ8eZBtEXfYykbbA6142LcVHRU5ZCTq",
  "key17": "HAo2o6ADDYQnr6puoT19h9E9ULSKxiL9pQSGW7ddg5h5YNKC1Gxe4AKiFjeCp5ZTbtyMU6TVqMKz86p8BArhCQi",
  "key18": "TiN2mL3GsqcooN255JDwmv1r3WoT2coemEgUg8aJP3rYfKJpnRDPbAXnWU3STixgfzQgJTiRn7JejEGC2FytkhZ",
  "key19": "3ficJJf8tqMPkeb5qJqjN3ufKaqj4CVhv4mHVy6ZKrAHbTMr4xBLXrtATXoDmRYfADe3jw1LDrMJLttg9Jd6pLW",
  "key20": "St21YC7hn2GED2q5cwXonnxgutnE5JWRuNpPpP6z5kaDUeCcDM4pvHJzXU7kpej69bhLiAwTtzwHUCWCkd3swjk",
  "key21": "5BYDP4PQmdsKxhSGoUSpDwMAhCUpAxvGX19vuiJLnJDrw4zRYjftFbg6BwfnB1fynVUHoKXa3v6GDpEogwnnfj2r",
  "key22": "4iThuHPsUjbqL8xKGxNuabTduYiRX9S4xvRewMRNLLqJ9Hj5EnFyJRwprUKgVFPNDZhEaeByjqCAYYp1b3yJDmZp",
  "key23": "47wyFz4LAPdGRQteYDiGiChrYLv3YfGg7UCGhMMDgX2EngoGR1BaPn8JdpKxvf2AVp44QwTNL3LJwrprp3r2gZhG",
  "key24": "48uUP2KMUznmTLWCJDAWiMojJdu51S9iECMztdofbccoYhyp6aU9MUoZsmwuNxbsw2rzepWkCoKdNV6iR3Htrzip",
  "key25": "CpU7qNEsCSh7pUmewyZep39tarvbhgzqbJYVG8xC8iGAd5qABnSWL8pSRn1zZvDhARHmA6gHywkGgE3euZr1h7u",
  "key26": "372TdTDjqpao6PmzUUfiWM2tGvj2XAb7kB4AbKWZVgKV5BUwZWXMd3eYYLJm98GzWP3i2GmvJ72rum5QC3qMd5WF",
  "key27": "5nG57CFvx4E9H1TeuSpJ87MkkB6s8BVB73AGpzF5cCszk8cDsswbGXD5rTdx8wNmpZb57ivEdZ4dXREUSoG6PS3R",
  "key28": "5AcLeQhbr4pF8wwJNE2SE9GsBoR7L1D5QVZ4muLU9dyuqmqDvoAH3SDriVBUYZiyo7ckTvsjABxocQfY6FLvoCzZ",
  "key29": "2vZwcrr9iG6Lqtrpaeqt26HD73AnJLXBr37ve13cKURRuqLKwDL5mWJfHkT2MFvigws1r7ja73wkkS5rTX8S9BLg",
  "key30": "4SjKevvcDR1ZCJjkB8Rbyg91ct4Lpm3bG9rFnAER2tTYwJ3YFdkNeUpHXyzXmPrG7peUiAAHD4cwNAELW4kQLjsJ",
  "key31": "3M4joqbuK2sT7tNdPAf7JVV5KH3jHBrstAG63kypx9uBqcAtebbe5orZwRaMMnep6CKzuApHMkmoSDQrURrFsLRo",
  "key32": "ea6rDsfnCkeegB3PcNUuS1gtzfUjxT5mafFG6s3VTfor7mNLjX1FnLoseYRcW8VXyuSC2qFziq1znQDu7SZtGdD",
  "key33": "r7SFJA4nKANU33t3BozgyNKsxKn5edxhabXB1K5DP9NsNEyDs6cw4NqCbMFTGXReKtRyS5semU64kxAcQuLFMKT",
  "key34": "9YXGKYotxAd72NaSR9DhBTLGxx8wqraWWsePY2yjXUhyZb73oc98t3kTythqV1vrFyD6bLUwxNRxtrRi4wAG61H",
  "key35": "5AnRpiEYmG27r8a8USQRKRYj2rCu81fBNC3wfnRRrytxAmpKajtBTDzL5Z2Wfb3kvvzBnVYkCBuK9uqDgA3k57ep",
  "key36": "2fwfeWnPS6ZwqmiidQE52bmTPLz15wcS2xoDp4dioFSwaqXfyjNyJYQqbRBSU9kakhszhEXF7iRoZpobUfEWhmVH",
  "key37": "4veotv59bn9QJKZSVNDY63Pg2vmvKVHNRBighGSyXpqTA7uFjRncfSn4kttHKNTt9fkastv77FBvYr9yhBaXWHF4"
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
