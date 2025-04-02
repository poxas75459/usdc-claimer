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
    "32MFR2C1izNyGMhhocjeMqvdP7vc2D5PKT5VJfCUeHDaemYabW9nTeAhk1WV2og1TLag1hnbet6Mju4SMcd1NhS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTHEub2aCfikDULZ7uZ9y4SveoTQhXoLhk2eFd9os4sdsdxV5GWywmxiSjeEwEnAQiBEQojLYkm7gRGKEfYZci3",
  "key1": "Mt1kdD9Kap5YANecuiwUAE1rRjFrYud49BhUqkkt6kM4ER7H6LFk6mmiJ6bXpTY6VjqhUTk9jESTDZWaGkuYJTq",
  "key2": "4ZWpcYv2q9HYz9QcoqUvdkj9cgSbEZKUaxVYjkKzZc2J5YvK87F8byZYHzkSPTeVniJfVgNw8Z6uLuJ1VG3W2EAS",
  "key3": "2RMQ328WcMVYv3T8k4HTWLVGcZh1WhkfsHpjhNcxFNKB62vQXpFxANZWm69vFb1kXKRQe8TQAWJ17dQfLyVSciLu",
  "key4": "3jbJhqwCHQrpdp9h74HeSPGT8F1D8ASXfaWkvGrKBfYCj3FkXbVjq2LdEV3N6cRbNaf2HYPj9p9VBeJo9Y5kNd1G",
  "key5": "36i38DreKCBXwnt87BGbq8gqsHy6krTVeYWm57UxK3wTSthiyLM2FNMwoZHyk3mLHt9oDBPKuNFi8pMhnuoVUk3n",
  "key6": "dnfFcph6EbEPWrLUZnGqUo2yr7AMfGyQBeNQ4zRA7W6wy1wuXUGQZtkUGQ6aeKsj9LK8UrrBgcX7PDPE6p5EFTH",
  "key7": "25TiqYFgz98tpZCuJf95GeUewRKwyxpK4VBKuX7PB7HrV81Tm7BkpZ4xak2fHnRp96AWwWweucBtkB5kpdwbcCXR",
  "key8": "4b9eWtGsQzSHdNmvZrT7FhGyLhqyw9rHnzxD6H5adFiZUxyBRHBu3fHG3Uoo7sDxg6FBmE3BpqwdXnXCpiyZsqfo",
  "key9": "4hJ3hyHVURKAm1aijnsi9TZXHDV2XdayvFgZDCHqVPihJA8h3fKSmBxr281QSBhXB7uy65AnjbqQpCTVxp3yXKKZ",
  "key10": "27mq1m8NXy6atind1duJS1LBcq2Q2tP3HyDEMM9qdoqwfCh3ZosmrhhNut5SCLpKywBjLLeQ74gT1THuQ8E6USRy",
  "key11": "3qFfQ9qpK8Go63cge2HUjX7PnjsmRMQmLsYqdGSHvTp1YDaxcZgkE27oe5Mb8KqN1X6BmQvKsbwRiQjsX9AUni2J",
  "key12": "5vpSGu7rSaAyq9nrkDZmhCGkCz8nKci6nhQwgokn6U9ko6en5DTVZ8moimthkhaUCEYR1v9nP8tsas1PKjmAxW6M",
  "key13": "5Mntc4XPCYTfFu42um87SrPkShBvh8UjNzXq43rCNR7bV6naoAQ9BwyQXmP6tVG8cudGPbwqw4RJ9Xbe8DwL6qT6",
  "key14": "2yZ5yddveyTZePKpFRKBj3RbBiuJ5uuyGp6aeK6TDnWjR82awJa5ZmSrdSpc16KTyWdGsJG2h43QPygay3pVWpxL",
  "key15": "FD65KykCpAG34xTtMdCfZPumauYAULbEZj45YDqiERDhSagVTwu8Cx9UmHEYzszrFvhALDpg4NgQLf1zptCfz4p",
  "key16": "61jzMKQgaAg1ZR3zSnAcArhTjKfKWeqH9ohzuHGjgig3JiJ3U6YHAgqvJ5RS34ZBjryV6MxU1uqVkPcS2i15J8Qp",
  "key17": "3ft94EC9Sy8LqLpM8yEy6bNFXjCvTM38n87QwpSgqh3TkvAjfw4ApWNzfTqEEjKAwxbssszwEBCG9fGS1KgY2Fji",
  "key18": "4PbwUMhZL4iWWLUTgCw6k9vzHHsGPQUkA8td29kgHpLeHrf4WRC7ZcpyE45GbXeAuH5g3uc7Bt4NqvRVQEGx2RZR",
  "key19": "5iMv96eQEVtt9Z9yFSLqqeLcW91si73wEPzBYEGx4SQ54ENfkbj7hvn7VFFFMFrNHwKvn4GxH2RGbcSqFDAgQ8os",
  "key20": "CNbthfMmEeF77KEMD7jctG6mobSSmsAKcDCJJeb2RiTEcnjSuUGd3hxLnWCXu4G4xBUeWzwukHCjd6uAK4PSp9i",
  "key21": "3MnauZkctSphgRwDR2R5aPbVM8w4GMK3BbvvSP5UFLZHivayMveZcGcdRVzSdhnCJ1eM1mxRihtU2KNPtekbgBmL",
  "key22": "24n86VzfLDF1js8F7xPTfnK5HrW63h1QLR7RE4ZKCPsTS9jw1gXPbP49xpZ86cXNnw64HbJWjPH6tdtSLiqiq8Hs",
  "key23": "jKYC5EE2puMdKmB4HN1D3xCcdsf5cnvF7A4RbZ4MyKtBiCxRLcMrsCBY8kJayC4RBB4NsWG2qb2ZBEfmH2y4TbY",
  "key24": "2V9nmU7XRQVTGLtKYYFM3NJZUW3vtefNGuuJyaaDvKN6Rb9p6vFsCye45nSvo8SoNk2dZE8YgrFzkt3begBAn2K2",
  "key25": "4YvntAw1KXrgSB1T9gBkz4G98wqic6aT4uMBL5yrypJXwVuJeCkd2t8mWG4p7FNbCnFyKE1tJnkpkHxgSHpQncKP",
  "key26": "3gRCFTu8WXaxNM4HDNqFZbYB1dW6x6JTF2kSdiqGRPq2iSFyYT9h2a1rLFcdPZTKGQjvvNDgRfm4zVSsdfsG1p6X",
  "key27": "fTrCAtnQ73ULr81CLF8vRRth1eEXQmZsRJb1r22CcDtwfKnJdECzBfazZBoMBK3r6sAbBZKQtrpJegZK64nPyPL",
  "key28": "2hU19aooAWxzngjwqLG9PdBV7xCZ32dJL7SBYWDab2xtGWEyemT7qzJpjgy3kc5T3AJDskWsHYHacYwESg4CSdw9",
  "key29": "4XUpY5aZKxqL5CDr3KyUNH2EangtSa5xSetkYixdS91d5FujW9weHRwoeREshNsXVvsGR4kzDB9YTucnGwRGha3k",
  "key30": "4WzvfjiYNSqW3C6C2Xqgq926W9UnBxa5XX7BDB3HD5uzx3ryJ4QBqPqxKcngsbqNaXL9iiJ4ksdyy4CYfGb8hpMa",
  "key31": "41BQFEezJ953FmUB3EALZX7ceNJXxqXk1tqM3ZLGoRrWascis35DVEBJDFRDZNSRkLpghQtvqFi3GQ4PqnUiwaeF",
  "key32": "3FZDEipV8D5DDVkSgjJp4VrPmwcu82VvNyVzMwzunz7jR76Pt5zWtLPXemR37cEQbZS6tsSPftEJQf73rw6cnqDn",
  "key33": "5xBs1X9y9WGav3UDofbr8YxfTRvh8Ay1dSgAHc5UjgfhDKcLwPXR8SQz6okrTV6LEBPUk2H8SnfRLd1h7MK6ybzx",
  "key34": "cr4LRMyXYtPXLHK7Kbrm9Sot15aiFDCWEVxKgkyHVG8C8foTSsW9dHns9Lgcpzsi5UUZGms3jtLnR7PW9bvSnAP",
  "key35": "2zWnbQrrCz8djhZWmWamTy5B6mW7JRv53f5b4nDJJiSemb6ZiZyUuyZGmSHNEEH42P614WSGBB6Nk81GLCTwm4ou",
  "key36": "2VgNJ8bTXw4MMNHJ5mxDVDWD5Qbtbz7kXepF7BtuSNbV5eyYE1C5HjHWsqTGypfrzZZFwCUfJ8QGQ3nnRz9Eknz8",
  "key37": "2ANPD1u4WrUqJh1Ch8FNXjCCJb4fahNpBXbV7CTkttP3uZHAaZ5iv1yk5RYr6Bjwqzj4YcGcz6rRgmgK3yW4sw51",
  "key38": "5h4STd1SqWzRTYYeU2MxJwry7DETmFYvuZ8p4xrtovrBsXTpi24hiLJjpfdSqyd4Zuj8zdmt4haNeNZWuUqtTb2q",
  "key39": "rTyKcxNzQa5VEAC4A8pkXKPDVBHHMWuUV46dnx2g9Xm7FwQGNYKBbz2rnppmt4PBocHRWiCF2Q9jJPggoyEN6yJ",
  "key40": "4p3jJvazPbXc91aKy4EV8Giv5wpnNLR85uk823mTgqS16HMCDYu5DPsLLKbdaCHqtt8sagkGQgoWzXtZLRkJGchE",
  "key41": "3DCAtgQa2isPdiyqrczWYApEAehh2PKEWXBrCKpsEwLyTVA87vSZM6H9xX62MpejneZJXCmN7QeFPNZNc9YuJ4pX",
  "key42": "28oRmqhLH1FbRKUThbS6R7jqE9rnBC1hfSB7XFErxnJv6kvbjsJg7tXHs2C2ax7DYwv4AUSUBHMWVxMh3EpeioiJ",
  "key43": "pktt1gqZ9nGBQtFAexhBN1KrGfoESyKMqoYaX1SA2cjmPZvfR2GuupL12whpVBCfTDNTuAahri2scAsam7HZfk7",
  "key44": "3P6pJ7Aj1LNdgzrQNVuZ6QF8YmzDNPGPZz61eMcXYXemzvJpGGsRSkqJWG9cyPHxzhgAaZcy9YLxvWoUKjtYcG4h",
  "key45": "4cctc1U8kk4bSG2BcoZSJaJCa1MNZpbYKYE5uwWzj4Dr5aSCB1hTtXKgakwy13Q24t6qJNroCb1WUb14DNeXSAQs",
  "key46": "59Dy5VzGjooKDUFnEK8fU319LY9r1podDGhxmgFg9R6zUnymnaPeR5zZFJHYUTPGMXyT3GaTd28922TbYZt49CWq",
  "key47": "65ficTnqio5AqKqPZ4JrMEmeE39ZB5iXrduJsjQ58D6MsZPewhtCcNCMoDdnncr7itPKAbtC7ZPXELZ9vz7CvRf5",
  "key48": "96bSvJ9MHWFHy2TFEvZt1uaMfqenugNEndMPWNGU7xoNFBW1teSrZ1UUcfo98Bq7oZhYRBx38dM3RG4nwehxfVa",
  "key49": "4u73R6f3FPiBtDMhcp4MCe7qt2DWPAUSnMuBWyaGpxG3Gr8L9aN9XPSEEnd8BG1a6fZDAwoFyhohe1QwcTyawbgx"
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
