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
    "49mP2pJKCLPhGgvQ16itbNEf4qwrzoxtv3f5sM7HNNkx4FhXXUaSSnE7qd1FKtmEknZfzUc3zPg8RjTNWGQ9Wdb7"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4PeZSzgwtGRYzbg2ZsbFEqX7CafwCYz4pupw64gqzzTVMdaUodeQKYxiHZJ2fovUSq5krsU6MNh5gSQimE8nra3A",
  "decoyKey1": "4u23gEArPZdsh95nXAr7WpSLKrqGUYNd9e4VrAxCfzuoH7zFTJHSF7NeJzv1eBdvNv2s4w9ML5ArtkYvT8abtCKT",
  "decoyKey2": "3vToq8HuLyvEfiPiY57FdP16d9N87PABsEqwMpoov67Y7Qh67rYNrmis3sqkcyDCK2ohfyBruyrXfDewBUQi3Lq2",
  "decoyKey3": "5cXKmWBrcvWfX4C211TXU3GTrTWz8rPjW9uJxvov9TdXLSXbf7G3MYFa8E81tigeXQqd6XE1dUvKQUSvPcyeU9hD",
  "decoyKey4": "4GNsmhhfdvZ2hZrwyDt2qJTwGp4FVF8CLxvtq7dXVXexnfP2tRgmVdkGL1H37AyDqVMjkFjzuxzYbtwEDcDGDVe3",
  "decoyKey5": "64BdaMNy13bd74o5FV4uqegPdhBv4m1Py6bLDcjx7W8K436LQc2dEkyi3RqTNjNkd9LUmKDHCYiZEWPeEYY8MyyB",
  "decoyKey6": "5aJpHd8J2FA7sogm9xPMSiqtXZh8M9JWC1Wg4hvrAae4kvyNLEmEu5KuYjDUPVivzQiwqAamHhJQnA3Ldp3jdbhC",
  "decoyKey7": "CgiyBHo5VkA9zbYEJFmBY4ENGpPHSHKCmoJV8HERMCWGRdKwESB8EvCqNeV67gESZvwM1n8c5NyeQyc7fvHY3K9",
  "decoyKey8": "2HZL5AYti5gDXRi3JqCLcx6ydcMkCRNHwqN2kuyDvjJPdaiG7LabTzsh8XkEMamZjMu1GtucNw59d87QHZNwvxNK",
  "decoyKey9": "NiCcx41iUiSDDg6mGU3MgDLsv5tdT41rDaBt7MorioCwrNZe5xzFRMaxahqz4Mi7D9eWGqDxahVuB5sDbGnmjoS",
  "decoyKey10": "kr3g6BrRWXnzLBckD5BgHVaxtC5fCvE7wWu5hSUE7E2ZEC1YQmFVhdbiAFJKC1yrMst3JLSnsrg35NMCtTetC2H",
  "decoyKey11": "5bZQurL5wsZps6MkqChtygfLxikGeLR3Xmg8UYiJXqzFAxK5DND7iE8Hx3xFDeNxc4FCQFFqjzSRNH5Nzq3K8bkS",
  "decoyKey12": "3muEh6htDLHcX1NPs4V6X3y36RfavjybeBSE8u91qgFzs6A66NvcTmWR5TtrK8NggxToPDg4wo16SS2Qoab2Y3K1",
  "decoyKey13": "1ubj1gqmts5ysVSH4JtdjUZRGdQVmkGBwHsCWFmxsTzGjENcmkjDzVEDfdDb32YSJhqn31T79GtRxVxr1xhpv21",
  "decoyKey14": "4CmHPQXNK6vpmebtzbTmzqyxwvk3dcSD6M2kuAZJWLmm3Uft8WTfh276ahax3g4T5hMz75CoBVZNoYa34cJxHnC9",
  "decoyKey15": "3vwUyCakhBrRrwpVYhVdfuXzh7nTNxUqPm8KRmUthwcHUfJvUNpx2NHiKbbJNXN8Y52U9BmuRFq1ck6JtDJ8hyVX",
  "decoyKey16": "3TqsZGRxA8hM31Pa7yxcgnur8zRRmLUNNsQQvA3RUMn15Az5qQx8EktykLc8PqoRDVrNhzKU7ddf5tuQDhEz7W8u",
  "decoyKey17": "3Ef5Zffcf6vjJ6cdJHmcFi11d796mQh6UHm4TDWgGV6RAGZ4ZDVCPnmsD9oCtJwqiMYnUDg3E5X5MqbJRDkaBGjn",
  "decoyKey18": "5XhYzZYy6VL9mvaaYiEqFWsZHmj4NGWeGx4dS5KzEkkbNFEjdcmyCFB6TCEeXxmp9L5rtzppbR5pjf11jygWDCTi",
  "decoyKey19": "2NiFEnefRdzXThZKcpMP5irQGBYbd5Q3mRHVp2Ax5aBYWtgATiA6dnHqHje7RzthKS9GaMir19JiUWBobNC4a7Wo",
  "decoyKey20": "2iZgvYy6k6ruERvwTbBea9Zchj7QCGpgqY93GgeKRTnBbyZGmMX52YzdBQsiFLG7c3dJkKJCyKjiSQtrH6PWC8Sf",
  "decoyKey21": "5E9uRJgfATyd64D8UJDtoLVx1PBSNc5xsfrXq7gV6mTJinXHGdi9VzCCnrG7e78AUiBG1psCWP5TSZbuLR6G4PBD",
  "decoyKey22": "4vkKyRyvFMwS1WVxsNPDQaAtaP9e9tWz45Fa5xbNEDgsqosBmfbwdRT5nT5B3kfNBnpH5W3E2gzvQmLrAWxiBTgg",
  "decoyKey23": "5ZGVW4unLMe9kLTh1NRzJrYsEajiob8s5QPUdGKstTTrTkZuc1rW2TvdgtPAvdHcAZzNUJLMZ69qvyG39mGKLgmG",
  "decoyKey24": "2E3c9RWzQQww76AXBJnbe5syUMtRMQVuLStcD1LqQkgPt8pm9zVwckmihfUqCXXw5GPTQxaoqwfgsY9xZd9gSW4E",
  "decoyKey25": "4GikFhW1Zg6RFM4vdxcP9tS58sjKMhy2tcnvJuXSqWQLFGEaswC4kRF3o1sJX4cjxoYU9ghPeqY3akU4Z1oREtLQ",
  "decoyKey26": "iyuTnkqnWSFUTcjwCJbaemxSiASQzxaxhM7pGdRx8xE48YXySQ2HpTa9Kc1R7fSa8WKvp6oCTFCh6bsSJJKey1p",
  "decoyKey27": "5QhMCnXUHUeTexMHwkJUxYSKzZfEoXNKB8TNEK1Mx2jzvWtdmEUP9w9V4ZL2s61VkKrTUEad3BshSFDaMDZJH4vF",
  "decoyKey28": "38N7uUbe79QvD3fqcPWKKNaVNJEZgKTsMT2oNrKFmtjHR1pBf7wFCQKG3brUK7uWxR7M84jsq9iLAPi3TXAxyBWx",
  "decoyKey29": "2P8DdCQBwBse6gC52mBe1LJob4ybmM7Nit5C8AYh5EjungBmieWeoPkwUnSDCxr18ai3Qrzn28eyFinvUuC6zgNy",
  "decoyKey30": "4Rv2jJEjkzBrA5ML44xxQBRB8EyCtPg51khyjg5K49SCQSodyQtspwJpb1RR4BeJprncQdyx2BythZLWNonSHK4u",
  "decoyKey31": "5hV8Nwbx1AeQ91UciR68ZTX4UAZ4Z4qX91sqbTiJqzHFLTmci8xtNgHbpGxskWWwUef6g6f3PyvCcFpGR2ZXp73i",
  "decoyKey32": "3XdkAitn9ApqrSn18cejAPm8Jim4QxJD2z6C9J321otKwwMBq2PjeUWYeHwEVevzqeeNqUo496VQ6b9ggwV5PYzt",
  "decoyKey33": "3JCXWpyzUjbzSkJGZjGPnMUZ3X3SnnSmc3rKcnWg3aoxfkR42Xur6onXvoMgdYMuGk27JgkpGZttC1mJxA93ddE5",
  "decoyKey34": "86nHHTMwUVNni5zykqm3VuyXLVhPRDsezJJtrkMaVP74pqsRa4dsm1YRRSwds4GAi3oL4D5GNDoCqJucGwiRLho",
  "decoyKey35": "2WqZpCBLtybKG1oaXKNBgmgbxBwshVhdX12uCNJD2vtUpVK4TYuQzqzmfhj1PcuwAmkiFTJ4vogPJdfFmPh1PBCP",
  "decoyKey36": "3Vq64oyBQFqZTocfHwGJZgfbec996WU4jidNPNwPaELPqdieyDyEJwwgNeUqYaTNVGjBLhNd4tvRrSKUBgBUForn",
  "decoyKey37": "27aqbAHAESoN4VQSK2xo8WWXxZU3UXJTj1svcxn6YXYJJT4UGLkcUpBvNmKxKvtmiDA4RzVehZyWz61oHa4pLF4M",
  "decoyKey38": "yet3uqHnQx3bQoU74Nz9QV1LrvnzGosH9YrQ6iUmxpsrmov1xQHfjkav9HcPM2VH1seXttFvCAkGTu1pVrZ9Zoi",
  "decoyKey39": "3t2t8gMfCpvk3gkjGCVnWPdpEHqgEYgHXb1gUWPXLr5efBsJeMBSWxsnvBiXtmSFVQ6A1dJajtq3wFJv8eAnYsEv",
  "decoyKey40": "NHyrq4K5NcMAo4c4rqSM2PwqAnyPK7vPh6SrHqPBHNugJiDpJ7iqY55BwR31nsnLVnjyFpXKNkPgUKrT8LvCoMh",
  "decoyKey41": "34ACWXscSVRcLWNcYD4yuKyivPEn1Psfj4LFebRQKiJDpZXv3Vd74bEeWKTvgLgRfwTEdDx2xHSgpCVwLj47URF4",
  "decoyKey42": "LWjFRpB1MNzVMwjfo15Rpd9CSgSZcj2YksK3W3yGx9FuyjFqQyPjdoCvRGoyHYNudaSmRfM7wzv59W35Wk2TYF4",
  "decoyKey43": "3BkyHsH4Gb3fy8gebeN6nZq2EMM18QhfU6meRVGMVjKSGeScSaDw4qKgDMczbHDiqMmxzSYQb1s8V83pr6fQXZwT",
  "decoyKey44": "4YAFfnZ6XBrLXtickkBwz8EYNzAAqr29oRZaDbV2D4EFFNsxp2WTnaGs8dsGrfPLtQf9ad4bB1LYSVRRZz7pNybE",
  "decoyKey45": "2KJWM6YmQtzrGXFptcj76S3Nr1ZmZeM16wgMfmmZv9HBxjnqtALaiNFJrKdNfbvqn3gUhccDbwYzY8MHfSCstKNB",
  "decoyKey46": "2rzkwWEeHuTQzHXfBoyvziKN5JWcz2g4ycsMUTxr2HqUTNZ3AfUUq1jQCvQVXRvBMtNcqpmQP9qGNbXSjM74pfZL"
};
// DECOY_KEYS_END
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