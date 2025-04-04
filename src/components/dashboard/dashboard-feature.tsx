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
    "5RcxensUeU5ieqjTLhwtC3iZxjrNcNPYcxTmhef5XC9ehM4zjUAQpTnMvU1tMezZsv5mDL35sHeG7Q1FD8m5gYkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiAyenjGunQwcU7BvH6qdXQhD5Zz1uocw1ZYPRM41QCYAKvck9zrMApBQ9sV5odgnGpGWLEWdqRjYJU1EYDo92k",
  "key1": "ccSXpSEa1aCqWoYW5vsVfwA9Be8UUbZaAZJxKr8xiBnJgr7GRfmXRrwhSMBVWd2kKff4x37CdW152TpS4KgKZ1k",
  "key2": "3r7fTv3UQLqSdWTDHqNQJTLZAsgE7HZTJ3WQhNY9MiVpedfMEqsNpqJHJeHMJjEnV2cMyFLTnarobN4toojvisdw",
  "key3": "sbfcdjF2DmVrhJYFq4MFxzSe5mXqpBHtPg3pjJHWTExbNpRsPr4oHyM2sPKGCMUUKL4jJdd5JWGPWe5HUVPP8oq",
  "key4": "82H1jpUvEzobPkh4nY3R4FxHSKjfp3Y8hjfJanx6ARtv9iKyuUxvYtVhNnacw9nFC7BtHN5pnY6QsP7YFjmEJBy",
  "key5": "4sPhNhjYb666T5jNVxghRM2uji4nT6cm8QYPfdfz1FgpzRce6ytbiR4kRTWvk7BGWaUQKouV8Vn7Nnur2G3iRhs4",
  "key6": "3t1jYVVxY7D5aGxTBBn47PfQZiXJ4u25kPHhsEKKvBGrXCRRKHqnCUP8ot5HfbGjBp2TVQNiRiNGZA5ft3dRsXoo",
  "key7": "21fVfrbDqAPWkWXe4sbyuojyPxp4Te1YhbDCofZZLt5SD76zKxVjnfDtCxvDjgFJtvK29Cau2TaCsJapCnnFtRqN",
  "key8": "2A5X6xHeb1Aehh4rZ7SopWWP26o17CzSdmjmgvXZdEvTgqjM1Qf16WQVpyXuhDtzxZk4UfP193AR6KuU2CU2n4pk",
  "key9": "4jLNQ1H25Ekb9KchR8qgiwgmdHKDPQAvRRts8Ngftywgduzd2SuHs3cw9v7HGTiQkmTagP4o9wKp5qyS6C7YVUtp",
  "key10": "wWALWsqCtbLAGmZg4u3cq8dy8zz2iPs293mP5B9csWrr6oMoH2UJCBBW2Ht4YMXmoNJ5fqSEfU6YaDYDTEqtw7N",
  "key11": "59djqsxsGB8cdaL5gy9EMxqaTMGQioCcBn3UuFM33YL7cKBG3riz2roZ7KUrnEgdXoJiVzEDCPXXTQfvRKmGBhkY",
  "key12": "5dz2p5ggMuXLhUniHtRukGtF9QjnVcXNNVdFfP6d7e2MRJ7oV8ZV4H4tFkDKZr2ToUEXTyEvyc4xYMoVWZchLCrk",
  "key13": "HfvEoh6aEnppKWf3hDfLw4qbR1oaHf2uadFKxXBd9cg9FHR5nwQGuyKixzjinKyYw7xb5wrBp5AAbdn6kDiF2X1",
  "key14": "2d9UACp71AxamYQ14AD4qfun5UmGaSvW8m4hsjtqm2dUYNjLBZQ5W3HsDS39ttHuB3QCS7ogYnT4bspYnka2nkPH",
  "key15": "2kSpWc47cS3qNX2VYv1B7uTficJ4iRrcoyJcWXZMDXeoRkYEugpPuhphMVE69XH1DHUdM4ZFfgbBydB8MjmmJg9j",
  "key16": "5MeDSaHfHRDMkNh92wmwsgN9TLnd5nibrVsL679v1TDo1Bhq95TUvKiSy7NbrZDBuZj8RF7wpA4bMnmgHWBZJ6nL",
  "key17": "4mumuv6TGHz5qq1AknZp4NsMWgruh4794SoendUzcWePajg91Md2oMTUxDPJ2NqRDuE5p2UcPmWiBRb3T17ue3Zw",
  "key18": "21UPVNJs4L2SjYA56apvwJiqLRywZHeL4DimtVBu6gsKsipKPq12Uw8Q9x21VKMUuKzjGjuNxKN36NWu1yFfUZPY",
  "key19": "4eFByVqXhnwyHgrDreFt5ZXiNHLLEjyEeG6hcGPbsXEgtY61HC6Dvz5j5xKSuavNLW6oamYpVhJHxeSQxeCYowez",
  "key20": "2C4mkyEDrrspYPr73D74N2sMRFrvczrPqcjMKiftr47j1qz2AaexkuGysSR78KopRkU5MksyG3gDy5BHaXN2FzrA",
  "key21": "2pHuUZb2EU1HGQHE8pK6kZpyW5M293whsk8YGEjqYFRJdQXbmep7fL4LyEELK4Kn1x7QAXkFaqVnsLqahKvCkBeV",
  "key22": "4g7nY33tgXVQe5JzxPyX2SLRmU1xDXcbo8jHDGMx6f3wrducAyn1E1ETRUofRXgW7RACQG3p358Ywv931Cty75Kk",
  "key23": "5ztNx8zL4JTgigDBVLtyRzhtKYNZWJKsNhKDcz6TDNgnnA5p4KiM2BRVDyL7txZJ1ypw72W7TwQ1QutmVLxhccfm",
  "key24": "3nj5fBsYWCpfrpdYeiAr36dAHmt4fgn5vW7f1zbt9bkKDfJb1LdLcCBLkovabvc7KZLEZ3Z24qZsJRADMSPhdfuN",
  "key25": "5fN3i3zMeAx7mRSiE3SbrYkTZCuXH7wrconH9sCkF5z6fDgvU35NZu93hK2x4MYfN8modAUKFrheR4B51z7RANzy",
  "key26": "3pyXSxtwGPsPwbgvCkhUTNEQsvkXNPwn4P8jC3jsGyW4hXVKegm26tUFvCRzYZQVFN44mZy6aLtfTT7EFPJozVwi",
  "key27": "5Zej42ttDQKLRLhptauQKji939G2RnfWQ9V1nQ3KpkLapc7hJd1mNgvac3hckGBs99Mh3CfVUos86rTAfre21CXY",
  "key28": "5H5GNKaoUjfW7YKxjcb7oPnLdbnqWWfMD4MQNv4fvwb8xybFjNmwakKuC8uz8epzDoUsQB1Ynv4DJg8LZ8nHL1UU",
  "key29": "4UaSGTYUcaGrBSP7CaW3hTeLvQAz12d1RYUCJeHgXCSAU8QgQwVy97Dj76Q2JGs96shKoy5nAuEiQf1pMdvtZDST",
  "key30": "28WPRDQ2GzgCGrNVKi59AppbfmAHC2oN4WJykEWVrYmf2xtZvq4YYxwWuatCMJuHzPasyfBxdZd7x9KFTLXu3Ln2",
  "key31": "5FPvvwdyYey29YPf4ntZoYQcn4uohw2cPpWuKfneSWJQ8BKQ9j5k6Cxyc7fdheYhC7QrV8BJEYuBoHGs3zjxRXDR",
  "key32": "5zRqUnpvsRRKr6XScis8m6t9daicBXGvtRhR6hJrRwg4DMEdDiUaQ8V8V8NZPVDYfAc47GPz8kfE1anyP6jL17AM",
  "key33": "cTs3qbrvC2wVuokJSdpbTaceNJiPKp74DPsAaPzL99VQ4o36cthhvMjs3EWzGBBm5xnnAKqnELH86WsVH2MQd8P",
  "key34": "2Xf8D51GFtXs2RcHZ9yx2SAWAhBAApWMFLwPgHBzhGFeKDnoVutZkz9BEfngTz5mgSu8CeuDeCfvzoBctfA5qzRR",
  "key35": "67PNek6jAjt5c22V9TiKf9Sfkq3njdXAekAY8fr2PXu7Q7NXGYabV4uVGEg8R85TWQiRNnyNkJ86rgusmCNd9xP8",
  "key36": "3mWhHv1Jr4tAp1J4xPJrDJV8JYb8pWbfaLV11QrqperPEgqknB5sgt8yBgeNALbZR6yxTe4DBkykGKhreCz1jWMx",
  "key37": "4sv4oXqbXYE86zprMtqVYtNP8oXuzzeE1XNScmxxNJD6wideVqhRK7osZUfWHAi9tSMZGtn96ybHcn1oeCe3t4sE",
  "key38": "nDsJkpaSVFz9SKbDXuHCVmvzJexAoijZGPCgntF8Y4C5PBv9AV5Hg74t7NyDgRWNWDu9vSSsjSvBbzcHdv7Afgk",
  "key39": "2kEke6qfn4bb5bz7qPY3zihY2ufhQwfhXiRHnCujrrAxMGKEXwr7ti9K19GYErYPD7KKHeFtkWimHz23P96gY7Jt",
  "key40": "4dbgeirxfh2PkYAuFA6rX225hubcncpkawH8H7R5PLCcG8zGqDXGvXnkm3DmFQiRNdAmFU3GN1eYfERwiRpPuCXB",
  "key41": "se2j9Dis4JrSnBeDdGbUuMd43S6i7cDZ2X7ryVdXbpitn3QsLCzk52DqAuLJCyT3vc5HAfKiqG54hF5JqV3Spye",
  "key42": "DMd37NUdintnenrTtmgXvoaUKYeVwoFUdctiUvTW55FztnD4cdQaesQ4wdqQequ4zq1TBDcKtfhUdRfgHuu5bQE",
  "key43": "2QK9LPkd3QZ9YaYMF4pnkkcBs36GNbUUcHfX6b71UogXyaWVDpYUfEgmQ695bsZor8hWsDrJkncyLU4eYPvEo57B",
  "key44": "3Q3hp9PkceoiRi65QY69N23yWzawufjC538ozcLm7GQGZXL1Uz3iAkAm33HoQzVoJFhAoye24BxJ8KYkTq1r1te4",
  "key45": "9phvazEtfdnrJQMtzGp1eRvd3Dh6RGWCB55B6D3sWSgCZU5FeC4BBXjuRDVhGNEgBdGCEXgRmj5Ws6KzvyLnkLt",
  "key46": "2VK15xDkjarYTGycQuUXHMXJWM8pHEtvix1A5NEitrHk1pFgEFGYB4ec8P179QeYAmsSCT1vKRtkPtUv84mufWU1",
  "key47": "3mMx18vF36EEU1TLrv5qALZNSdxAQkFZ8wgnzxgxiCPh6Znj6rHhwRCm7SF6RvxmksuYgksraszLMipJpXX3EvB4",
  "key48": "uwCcPWYixDni1bYkzB9WD5stto1BJPv9W98jcUsVAPL9rp4YijP9v6TiGk5SWH5PBN2wB9ZtQ3d431sWkkkrZaU",
  "key49": "3iEU7ah8RJUNMdzDyD2fb6ZMX1Jk3cNi5ueqVHo1q4Nj8enCCE3MmK8V5vL2MFgCPBSDCN6bWN32mVeNsJnbFnKm"
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
