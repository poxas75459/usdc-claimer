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
    "5mmxb64DVtmZdFaReAQoCL3mK2ej1gmcgV4URAPiBwx7PPPUCrBxg4pSnt7b6UCLjZDEp772ajega4hnTSPMzxdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hq8oe3XyZ97kQBUTkHSiiPLy7WfsAKDSChRc9DX2MdoMR29Lq3ZgPCg2h2u8pdcqrV1FLXvb6gbYjjYwR6bm74F",
  "key1": "3s4SmZGpcis7eqLWBYbX8XfvkgBcorUPKwHv1JRfwVVXkdmAm3wabtD57whsu2voKWNQaLqoiSa275ZYnX7XRNMn",
  "key2": "4ACa7w8PFni28f4SgTsE917YG599VLfRTVh1Tred3qabCydYgWud1fUTVY3wQCcN3gZc1WvxmdhiuNnWvWeqkahC",
  "key3": "4imBDCM8hv6R43c7QaiH8UMCcehVX7RLJpYrsmQBzTFeJBkM4pseX37feR1HN9XAcFXBQ9XjqJytrD6H7DQxGSXs",
  "key4": "5Mm2MUktJPDWpKSeVBLpRV1WrrHnU8YX6BWzvQe296QfWqQeZdSaqNHWScMKXCUAPYHVk7GavyXinsjcuyoMZqKL",
  "key5": "5AwRwMeJyAUYgkFTk6nqHGhXfPxdbXMDRJqEiXFkUCsDctFRxzPmXzDcKttYWtaPKkCM3EMqpS69nDhCJWb8khHW",
  "key6": "WMD3e6m42yNyrp9BRRKKUFxo21WiUfyovP8ThiqyjrwGQPmMq5qRT42m416CkxUi1SGa4fpSZjviAgPsHVYqrrM",
  "key7": "5vYCxoRFkEpv1DX9FcaQ5oCwjKzLs5oJndx5SRtiXFppR9nj4wdSwqfjirT2iWKxPkEjsWFrGi1mNwUVPX5Tn5LG",
  "key8": "4DU3vknNXasd2xmdJ2H64vgjaLHePXFPbJ5VTQeiZByTvARcpYVKo6PjNcrsS6LYsFhKDb5AQi187cqzbi18p2cv",
  "key9": "3cDUBZJGoxK6Ayv1ZeemsCKv4YtQRGXym5YKvqVCUiDnGTfvDNF38ZHYSz7CdWJN9VwtD7kmfEwkgS8n1Ccxe8hL",
  "key10": "2LfBkPJazADwvzDbgS2xqk29nLD6DDQJ2qSnSbwk7tGnU9LYBFxJoM99h2ehhsycJZ3gaEoE9dVyxQiVCkcoNvHn",
  "key11": "4sXB3phgmeC8Cdnzqt1LgCJgQXqWYee4nUAsHYF1RYJW33934p3YttAA14hFfSm9qqYFgFCZuEgMKArYANM9TZSq",
  "key12": "2wX3PGb9VZGRTcSSDsfWtFWNsPfRoxn62LUauMZdXuEY457GUjS1CydJUsuzaGRCCqEGepfdDKxmohjcmXkxynhL",
  "key13": "TysUYt2Ys3tjGR14HeLMmtkakpRrenCpDk3oPrtDPyeNevoAwah3hPdKETutxVtmdhR5NpgZpv63eMPBgnZ3cSi",
  "key14": "5cRJNV5nu2B1aq4czE8r9cbWR6sSvyQHeEFeSPbt2TZsxMobCNjsJ7mqjySEPaazQGZjk53eahVGvSyVfLBjrJsQ",
  "key15": "m4e7r8ojUuw7E8mXizvgAL2dzwXMTURiDjQY9gyLaZ28QUr4uVUSf1Wnoevm83HDzhZNfEDMkbz53b2AuhrbaAR",
  "key16": "2JzMjyCMDEZ4zG4oNR8LyDNXy8yb9cTQUSC75djmmhUpXjgkG6RC2uNoGHH7vQn8V7bwQ8X3RR7fq27iY2CGJu7h",
  "key17": "3CdMDXaoeSKEFXLhKpXA9REfPScdTxbMm7A7R5dmGeMvAeir3AM2iNtxF7N97wbk5DVotA95NozXuUXo2iK8ppJX",
  "key18": "5tKwVFK4nFrFRASWWoDFfJcG7LpnH64mPMnYgwidjHeho98FzrJ7ZoKQQuvWynda7xaq6qGevYaGtUQyk428D4NK",
  "key19": "26GY6tVhrGeFfamqFxyCrrNdBJr3Y2dvbbD6BDQqgHJiS2morQMf5qSDy6846fJTkuvRhBMdF2zhNUSUgDNoEf4C",
  "key20": "2aZx6zTnFYNU6pchopFzyXb5eFALKVuSmfjA4FZRqL7opn67keMChuaZ15wSyTf6PAasW1LyJ7PyT6zTu7VmfnzS",
  "key21": "U99uZXbvuv3Ru3zJgTfF2gM9UaKPpHJqnBVNz6VMFXvq4b4yb1qBwuyGEoZaahuCa3eXMwWZm9wfMP6uuWVPXD4",
  "key22": "67dM8sNZpvg1ZjnMSaHQv4PXnCornRWwHLYtzYYoywB55CoiaFNjpZmoNv31nWESrEKGYbQWvUp8zrnVVQdVv7Ti",
  "key23": "TV2VcYESAn7nFMnHxmyWHFa2Roihy4Trkb7cgvau5pPtnHYagKyVETtGicGnaiSGmKjK2Kq6ZRNp4iafgcV3PTa",
  "key24": "4KmwA4NTGq3g2LnfgcBjbAvuWTvXzNBJ9KLQCBGRquWQ1owr26oXF9nNCNJ7k98qRagLJkCuSv54LLoSoBBnQWUG",
  "key25": "ekf52yGPmva3iiTsumxFHMqhhbNDLoCdiCucH1dULA1KDDPWjcC9nzUHRrdhvcnm4Fgqk3fAgCaCrymvdZLYFGw",
  "key26": "56zVU2hFF34j18uX6s9z6i2fcUaxqGSrQs98Q7Famq3zUKkJWv3dsmqNVTb94ZpnWunLM6jijj2yr4UNP1oWe7Ga",
  "key27": "5ByBFt63rBCbdx4GskhGU2Hnmv6DtJZm8GP31gM8WG8p1y5SEdr8QXmgvzFZkyWZKTmnTvrBfwQ5EnCFUPNoccen"
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
