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
    "5cpePnhK152aqMoeP348ZNCocoQGM7ptn5YoEJC9nNQgYy7XhLsxGGUJsE3CwbARJ68jXDp86onkme81N11Fk1k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kvGdXEaV4k9CHWduyNYaCNLmUN4p4Vw7RcjqBAob64F2WU8uTi3YJwDY3KtMNNyHY2F4j5MwpexQ6hMEfqhEC5z",
  "key1": "42QxfwAKecLpAztthEyTKL5zLvtuZXQ3sx9LZo2DcdLJ93Lb8y8ZctvAkMZqojDM5sQSSTuUvwST4wu36WDHnktE",
  "key2": "5EunLXMKX4fcNTihESKJG4dfNA3j4RNZvXPt5huVpcXPVGxi37yewtSX3xHaA3QiXyek8jwrTLJiYwmNk9nETPF5",
  "key3": "XUsANr1HHn9JHu5emz5vRAVSKyvmgujGvHD1dNuwubSef752MxnY8yk1bbvHmSH6psSTaMvaobxNTrnooPSfLZ2",
  "key4": "bjetfgHJ4TCJB1GToYmuRq1UjX7ezQCxcfGS4fhyQHTyAKoUfnS132mm9zQeP5x5744hAF7aLCkvsENKyaC3gir",
  "key5": "2fEFjt6dwYp9wruD2PJ8iget2fRSWUn88tQaJx57wTB7jwrZaT8HMmQYtcvVDmeuucf3egQT7kfx5rqaCRP46kPY",
  "key6": "39MxSVonrVNyxc5zGH5daEzBjDw1ngwY48b6FcsrV9VunqMKXzuZ1BLmkwD17fQUjSqNCdzVMo18uYHwcx6Tw3VQ",
  "key7": "3yxF4Cvt3EDAKdoU2dcz3e7N56nif69uZegb7iv88Z5oG1WoSCb41Gz7QUZoD8iQnfTf6SMKWb3dSRw5qeioQwET",
  "key8": "4bPDeYDUmDpRUHrAuxuV8xKdj6diXBpKh6HdnfdPjCdaJAPCqcZhGWZax81meqw5EcV9rVQpReHHr9LezaQp8DjZ",
  "key9": "2LvoPiy4Ro3QaFw9upgu2ebt4ZgNLisy9EnJLFuqdEejhgo2MzF6hV7rdxAnnXdXaktVof81e2pcDwqre3v8Jq4",
  "key10": "NvKfAuN6ox2uTBhte93wgx3io6LjEkFb229S3fvtHGD9Jsj7QSKVCC4oniS8HE7Z9wz7EhzVeC8JmPpgb3B97n9",
  "key11": "3ruFU1F24xDLjV1dzsQvrp5Hicag54XDo1REv6Q9FkwwaPwQ4rTm3es2GvZrzcCAuiXKHT5SVEBjcRqMFxWzKTJc",
  "key12": "Cc7YbV7RBYzykgopfPgbiQesvfeToBmQFUHtnCt4RCMT2nizRQTHebYdxsCFSYh44rzxpKk8NG8CKs8ECcWbiST",
  "key13": "2nbqofdrpjjP991HVAJN8gWDtFp6YBntudfZvJPJm166qHsjTievsBwR7cLEYbng7Tc9SXVDwXr86rFUspuZP4F",
  "key14": "2cYVCqAQzHjoEaWfddMNro9cHcioTHzjU3TJ3bDSE8Fghk2KHKhjdhjgeRMxNCPsZ82gNbwice3dvwPGwTKxe3RX",
  "key15": "2yDVHRJXgA9EJy8FuCCk3vjYEGo19qs4rabKeJR81iCEK5czW82nCWoTUT2RJk8cZYdRgHegTeuBo4hSPLCJwv6v",
  "key16": "4Bjopp7BJ9stcDUDTLsWyKmP61mZ1JuPXNhGpE4JiLQrX4aQ4gfL7WwMqQ4mPh43ixh1bgMd5wD8tL8pGpQzSxiz",
  "key17": "5Tz4PdY6q3fwRiwxN3X4RGwV7jWXpu8hD1uo9Fxv6WnbjSzExEH7u5cjzKbomRWQ4ke1p5VH4i9bmGz34soXWrwe",
  "key18": "AVAB1wt2js5ooPbCH2x419un1hqTLh46rYzQZnEgS4h5qxGWMpPxt66pGWKKSN39Pf6ZwepfnfykHDE8oDXT25j",
  "key19": "5CJ6j94Frr8j1gYMZGM37a1qknHJLg5eAU3kB7E3zFK8HGPNHPZajPcw8NxxWz1o7MKtyvGK7NxAKwYm3Mdm4puH",
  "key20": "48KPxH3MLgWSWtivFxM8do5WfxJhiWAZvpZoR8uKc4dPwCzqepiEsBc6fVEXBscE49arqH3QUB17d9eqfnYz2B4X",
  "key21": "2h6fnUix7uUL3CY5jmJCoyoRaBvMcfUR1VuJ5Ys2zfHsiNq63twNuNJZP9YM9oVKDidFZQSDEKZ1237XG5VKA6BY",
  "key22": "5kudFR3ttFNLZDF2dPLtgjgo55fk9iSBSuzmMk2g965gxPKLs9QEExjproEAtb8X9vh5rGrMjZYwBAh6wjTzyjPU",
  "key23": "3ve6eZa9vuSD8wY9hgBk4ERGiTjvucUzwKCFwPB23Pdw4TKFHcRywcvrK3LVC9TfSmKEos8EKVkZXS9Twx2Qx7RB",
  "key24": "3B1jSXHoeMY8GgfHAhFCSNBpkRm2JYvQthURfPrS5J8o8Y85CmtNbKG2uwcgwCocTaEMs7ZwCjFtfMSvbLqyarYP",
  "key25": "5LG195WMQcoHzhggKxPHJXocDTpo1nUP5zuR9WfgKVM9MpZTJufsgBW8HKHrzvKuTV8xiKdfEDmvhZNe1d7qMREs",
  "key26": "2jqHvcNwVotUK149cNbvaSQdBPccT8RvU17prZDpXxHWihPtX8yA12LQrUNnvoKfE2xq1VEnBE9xnRynFtqfCdoM",
  "key27": "4VEhw7PnEUJPyDoAM4VQ3bCQ4U5S4JJm9kJbaD3j7tRsh33wVUtL4XRhm9i7bJV1QbPqTgpzKDv4D3s5TrPrApRN",
  "key28": "2QKvrNEjJ7gNaPdg89hof1gRcrAdNdsPRvbo9QLjNxtt6L9vsoZxuGHCqqBQjWCnVMhveNCWDRbXwhecXEhQ2jZZ",
  "key29": "3ZmBtHM2kftYcFLd1nNr35GLuhjAFYzwDzkQXfSSRTAT8W7aUsTKhwfjphhRAQpnSEh7f3ie1ChM87tkK5q4CvZd",
  "key30": "49rgLrXsUy3mq4vBH9D6AyPQ4pwWZU1GLD19GLq6EC47kz5hZ9UzMcMqabu1Q4GWmo1TnmZkd1xaa15Qa9L8ZNGs",
  "key31": "5qG2bcsXNFvgAN1P4AX7GtJCMcYi7RzjgigKd7Y5ZaKvsmAtso8gkMHenkjcaXwfuv2kyT31LHZTmuUZ5FFTQ2uP",
  "key32": "4VtaxF7d6uguAbBSniNd18ccfJAdfvb2SdPUZ8wgXeLCZWiLVJriAA4BXntwkqsdPSwLJVhZrAMQr9q2ENGTVYaE",
  "key33": "2vr3V9bQaWxebFaaHbUfDdEwVWxA6urESgpc2XqjhXj9SwQZG9rRL3npzULdmZ2kpZm69aisPZ1ro1N1kj8Et5x5",
  "key34": "41bxn6Mcww2Mh37eibbsHtxTZmPBSNKpijdbp6N3XsgkbHFGY6Rrss1oSFnbfRMXp6uVee72Hm6JANECNsA7rcXb",
  "key35": "4vjiXY85fN1bSpjrfwXJtgkxzKf7kZEY6YLfiQCGP7SpeEFgxKjWisTdnXABHjoseENPHT5CmR2HqedcuyL7cDUR",
  "key36": "2CK7m6VPTAVuXSPiDHwGxtVEDfSiZvVuwwAPdBcQEa9bdEXocJAoTVSnYCb82MyYLBxf1T3wWHJwXbYxZJSyYLUc",
  "key37": "29ZSKYmjQmhq6Y26Tt5B5q29Hd46J4Q77XFoTr6podvVyg4huo6aYnG33oSrrctqVYXy38KWQfQMhkGnVJUxYzbx",
  "key38": "38M1uezwb3oNhAdXRRsESctdqbroLUQxzz12qa2tQzn6xeFXVs8Eth88MboS3mbipB9tsXTkSHnPrNDj4zF4tYFY",
  "key39": "421J3dnUBgMksqHeEFVEJTZ5PqhHhFufXANQP884VvWw7JUmWnpWhUw6z8dWHqLfsiptftLRCQWWnJaNCDq12DDw",
  "key40": "4U7Y91uvXf3dk4pazFpFJwfbgX4dhcCrWfUhvce1Bx1ABKe61tkcx111Qdz4C6Qj8WhNqBCmB1JT45MD6rtNV8Wm",
  "key41": "5pW5irTie5aiq1YePdffQG7Q8H37fnfCGkhAqXsy7VspovP7Ey7FJ2fE3mKjmK8F8abXFJMQye4xcvXjyMuWotXN",
  "key42": "288axu557meoARSDs7tv2wPy4Ugvv1o9BGie7tWngViUUeNSFzgDu57DajRLY6wsccUACGbmAEuyukmRrdb62LQK",
  "key43": "TVtkdBbAnocQLhfzkAvT6y7uS7neMYCJAHysHpiiZ3Co2c5eTHfQR5oC2udVZo4n3qdq6X3erwHUBZBHFdKx9NR",
  "key44": "581afbRbhKcjs9QkYY9uLp3GgbefS3gwmqzZWjVjzKKVvRV3NGeKUTwyBSoj63fGjpVVXn2X9m7HXwLNiiTsQrQX",
  "key45": "ovcsEtbPk4pDsjKqfo7fGwgQwNNpbaaC3wgbBj9XdzExMNPMs9vVG6FGBPEAnLBmCephAWVjXSWbmaXHsLJCBXb",
  "key46": "3D5ao4hJWizv6c5v1fxhWcDWoScNK9ztYfu45nUmwaVadroJneUwbzxPSEE4PixY8nfxwdsQ24MGRZ2aHtRrTxhN",
  "key47": "4HCMDv5cWxnrJdg86pCN3hzp2cdD9Cmfh96UYPoTumYdBcCEp1t9d8SELjnEUxGc1n67MJbwMv5ZiwD1UVDdeWv8",
  "key48": "5tF84NBqa583JJgFVvEfMxTkTZ2RFm6eBE1tvbw1NHTqcdjzArQb4mPDbMgAjy1qWAns334LGoa5vCmg5SrkcC3",
  "key49": "2dpjZoHqaeb6mhZUNFvkg81FCqHffkmKx1wg8DSQVuDQpoF1W3t1SKUZiyBpEzpCV6pr9RtMXU1U34gckcDb1Bzv"
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
