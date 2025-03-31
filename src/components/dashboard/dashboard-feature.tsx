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
    "426bCf27o2eDsyeLDs1kXZWpvLoKV4k88grqqPiPzsdidypfs7iDZcV2pTfxPDWHu4AQ7v1x7Ng17e4rB1Bz32Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxeuiJqrNYxwPUJMVYGqqZi9UckhqtSzTVC6AeVjJPgem9JocWsZKopuSsmZmwWeaMizR8RXbFuYqzDNYxY2jyV",
  "key1": "5midC8wAaVKW7e6TRSrpgkvi4dRj7CQdiy7Agw2Xz8euwzoeap22Z9H6wMaENgt3DmvWSK8KD9hcFTK4sDuiWkr7",
  "key2": "2sDL5g6M3KnTXupcrMu6QPBCi9qhLS1zvXV9SNsrVut6UTkAS5FXXueRFNNJQC6kyjHUa94xc3gJqcTudoqH4EpJ",
  "key3": "4HU47YYV3iNJNSD7D7Ummuz5HxsUT67H9t9rumLc91izvaBz1f1UiYCqmHXbhsFTS9mhV7T6Ka9ajYm8DjCo2jsQ",
  "key4": "3ki7wjozSqKnRbRbidFFkMdKrTbhVG2cq7nXJQLNhfANqy3f7MAPTSs9xMqJEZqe9Dy4hPu4sLRr2QZT5doWQisy",
  "key5": "2y5HqTSrT4xztieoqLREB3mt24KAWneZBoWP9BWirxjJhPDmqJbGwuTTrmciP4J3Xr5sMkcoEeHWLw7U3YeT3TnP",
  "key6": "h1evLeH6nY3CzfoAgEud3dmv2Wrnitxyubukmu4VaTQAuyBnj1dnxW1PGztwPsWidLbRN5MnrnUMhBbqTQqKTVf",
  "key7": "3bG17U7i22JrxradUNJjoa3se3LMiENAvraToYfZizUwZjmkUVkoCrLJS5RgFB8KLRCPb6xE6tSjymPUDDnZmJnf",
  "key8": "4CvL1ZXijnCFeP81cLJUmbPCKohxAVSxWic9stHsxghxjn8DsP7ZAh1tJRAjQL7TxejQ8VVDegvJD1HHhS6D3dE7",
  "key9": "3uk9fYLTZ1qk8bx33nTWazQxDVjf4nvAE5qHafNsvgQzRmuKyzAptKwuSVdsBLbVxyeuKTZACZq8XHb5kszzVqxE",
  "key10": "3GJw6wGyXwt9PnX8MMspJmWFZC1cnQKRbKvLvK4znoxW2PzHfbQhcBHJM5EWXJy3fnjPdyrqLwMzfeuRqtYaRemx",
  "key11": "4XTYn6t7Y63RCKGYzZk5tjsDcXUCxoqGPUUrLfVrPX9RfVXSPkhaRi1Wft7VsQzExpoR6Gb5biSwYNtMQKsFsxir",
  "key12": "4LBBsuCh4c4NQ3iYRPXWHUK6or1Vk5MiqeTtgoW8PTjD5Pu2UsCXrMkSd1iEi2rd4EQvNTDKRNPCKJKpb9DnUT8c",
  "key13": "Ko8fpiqVyh3SykHfcUrjmqdbMyfdxB47JzxobzuvzU83Rgtyxhq5jJzQMNKi86yfRrEvMUcswfKh7Biq2hEBvBw",
  "key14": "2A9jA7Ngtw68sYNMY1m2mK6KxMkrnPTXD5wBg9XVmbo99qoTK7gENKeFkvtnA9CZewukywuztYSYsMe7JXQERz6Q",
  "key15": "gxrd4NVQnFqex2sxJSWst4aWKYjk4scEJAndvTrKmJcjb3SnqcTtSh3xXqgFsTwcnBiZoYqmJH74UfJURd2CMzN",
  "key16": "61Hguwb8YTaXHMKvZKY3FdkS9uX1tCpKVJhhnqVFs2ivj4pwFf53uykEvU2B2uXThSxdDXsNEMTqpRgPVvFijz1r",
  "key17": "gqA1BxMt1UmynvjWe4rZqUWNyzj43WCBUNqcwrYaB5tsmyaw6a4UY7XkbJsHDHnJDkp1U6UnFgeyL8HQ7jwfa2r",
  "key18": "4RiJPyviPM9Wbo1QtA4NMCQar7E1yUsJEAECAmn3YxVQsQ5GF9hJ1coWeFkNYTaijStUS4wCsubkyY77ghYcUou8",
  "key19": "51og61BpxsNvPjjrMK7PiiydvWD4jKMWaB2onH1s3ZBuJSTar1kXCYEvRboqyditM5frL6Uvnf199JAFVzVRnq3D",
  "key20": "sAssVMYbbV1Gd7qewa625d8yC27vEguevYUvtnJeoxp31YaFfhx7AGcgjpF6h9bAQj1VtUdVLqqDUwtSDQtDiuq",
  "key21": "5KXSCyKJpp5yKqLWJEnDn4ZTFEtBEGcWRocEehfJbKsuXEZmiLBYiMicAHdDNkVPCqsDxg36MazL3jcuezsGUPMi",
  "key22": "3P72Y3HYyqNdo4mCEkprqAVBk9bdkGMTDamMe7iodLCE9MbFpcyaCr26zUx2yc8HNnJzh2FRM49GEeCJtn1YB5na",
  "key23": "2T4koEArRVvDB2iMQXucjAtoQi3vCABKZD9EPqpSkkQGdSKUkzRjsWm5FmNm8xPkf1pP8BB77kDCaJpB6DPv2jrV",
  "key24": "5gqtd1nZFiCiUyvt3fs5ZUpHFQ7tXhbx3iW85AiUh1NwQ6p9fS5R9iwXCUbMX2MrRkwqPdMPnY2crvvWQu99SW42",
  "key25": "4swQWfJzYbrLfSF8m2ohs6z8gcnxdQ12DnGAVqxLLiVCd3mAR8aoqhXb9UPBeeu5btrNGGDc6e61C2btCEAXYbto",
  "key26": "3z6nXKTx7TF9dNpdsX3m9Bz2UpcbB7HtJoMW1woj4fztVgV2ZLrBcB88NccrxPEru2QAszZ71xKZ34rigVmPqvh2",
  "key27": "5x3Rmv2ucbjtTSZHcdAbkdVs8ZCVd9DLXcDTHyGvDGS3DkoFHkXpt9SCvQ9s5LkU4qWkVMmFK98tfxp2BvkzKDmo",
  "key28": "5FFUcEF8XK7gZXDNF1cQpn537gbEj6kN3LyWMtMCQw9YjUPuWi26WC62Niti983YDbMZinCBVfNAHGDrkZD4KF2v",
  "key29": "66YGN4aJZ38y9ZJLVCFiYuFP3EsaRKcj5LBRaJ91JDWEyTsaM7Ee7PUihLeWngugDcEEqr3J2zsrZK8BBFtW5KkA",
  "key30": "3Di6gou1pDcJk7zqzRzCFVKooDxapwo4VaqSxbcBdMH6hL6M2TJcRzyHoweZn9qCmiRjbGJ1Sdbxp7Cu7HKTjMhy",
  "key31": "5Jgwj5AT4gTLMGrE7DnJ8Tb8S3P4RGWJTAwxfZzunTGTHuYbGWfvctS318oN1EePV74cKmUojtevqWFntBcjzTmq",
  "key32": "2JCRZvQ2xYwyvRKFLpiEPQ35b5nC3J1Pbzh1iq46H7XC7nDYWHq2VGqgKFPW5FXnjwJGQaov5VcXHke5SGSBm9XC",
  "key33": "3daUduBgqimAvRZb6EJkHUYCowp1wWgCnj5BPf3RneLJREAsqaqZoMWcAvcEYmqpcK6hoipNYWHeMXmDnDbSdsuY",
  "key34": "5qP1rziKmydy9MND4e8JPjQ4rzDWxxLx3naiiXgd1GKiUoP4NCRnr3KXECPx6pUxYTMWqeYMB2oq4sqH2ZCVxXQc",
  "key35": "3GvZSFTFaLDqPkkP6qt8kaY57E7CvG8cB7fLQtz8wwzxa8bjYATPZTuf4jgoaZScnFLFEZNSpjf4dUHGNSzq5E7o"
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
