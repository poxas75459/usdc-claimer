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
    "29eBypW8tkRBBoJhX7RtX3CMZXkLQjH1dC4Zryfhydgy8qxM35a18fU21MrVM8zhQ5camYaUBTqJqFHTzRvhzhnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cb3o2MEm2fC9UoUmJJ8SL7k9a2jEXLw1AQYWrTwpgppNZc31UuCbvqCZvGB7ECtdcQjkA5u6vLCLztbuDKq61bQ",
  "key1": "2gPzSDnJbfxuHivYRDH1xA2iNxjZTe2G3v2Aw7cPJV94K3upBpBK6bkWUhLigRprdBoDoUsT5BHzQKWkJDo664gL",
  "key2": "2JwqFXye2xcM3A3Eq8WDEgVACqCbLa25oGvuCZUTJyNNfpk4dRfPESLzp9YtrhXgV35g4AqozSSK3tLqtsKVhqPe",
  "key3": "3evqTRcW8zo6Ao8TYSHg1Ju5E8hsZsUDXKL2a5ePoU5m98hSSbW8kHcGUqLGWLtJidhwK6VBA5EnSBh3SkAtcJfJ",
  "key4": "5EaEVtbVc3H3nAb7xH3bgy2s6phu5kzQqDPX8iNNgyBNpAcZacPikrybGJaXn1tG4AYwjtQFp1xvPJm6Bm5sxFvT",
  "key5": "pYw6FJcaVU3moZZM8Vyp5zUUKWQHYE4wibqoPTPNwvp4YZ9L9ixnMa8KgthjGZLjpdYGy8uDfwFyuFjmaGiUDvN",
  "key6": "58FEuFTa3e4191S6Ya4wadXy68J7xnytQ68SmR6ENdLEQAaCuEcf41fSWJGyxM3DGyvqgmjSxiy1cDjU1F4YaNDR",
  "key7": "4Bqw5Rr47egdzDBfGcMa6D1ZXDCeLrkcYrwazcS75NbXQdaDbbhgF7XXwuoca3fT1Fy54XDVt9Xa88ajzLDnQqMW",
  "key8": "2DAodfdYRc82n8t9fLymoC7ifBWML2MAFaN38s7gta1Tsh8yxg3KMk5jgUJncBSABmf7713sZs1d9bZGfWCbo5km",
  "key9": "KGUw5Gc3uqrfeDmqCbQhMPWc7b23Nca7VgiDGfKvKq3VZgME5MG4ZrWFt6fGnG4N5So1DZH7455VA6RQT3WZ5sD",
  "key10": "2g5uy4ej9ZeHi77XcksUva6aPr9yC3cZ2izdbwf3FgA9dctUmewgGn4QQb5inqnJvZ8NTiQbjZK83gokjvzWQ3jC",
  "key11": "4MyXKpPmtbSjUMMBZV6oCPLSFqYJ1EDvNNyh69oS2ptrcAMQcPxRToDP8YCMv2hijRxXkqFAb72oFaFN8p47yY5c",
  "key12": "5e39Auy9C6ER7Fpbd92PRrdTSMeAxvNtZaTUL1F8SWWnVLwyuuaM2bQPCP9mhTFM8gwqSSJvYyK6hhYPa1bwLeYM",
  "key13": "4oZYC5GQhHmDGAUirEqXAvMzHnCuaC714d4Ludpvm5q2uPJEMtV68xXY3AKqe2hjaExYjAtbU5UcRFp5fNQ3UxiD",
  "key14": "5iTkBfQQxWkBgX6bZEjWGH8anbfHwDFJcE6Nb1aXH9YYrq19Xqqvwu2EovHdwB7YBDQZUvrvd1Va9ReQEqcY9tsK",
  "key15": "38gQUDiPKJktDTZg1LGGVCQrMtFAiHMUJAnbXNgXymmiadaGJNXB47AHd9E1BpF3C6aTupBypXcnJwyDu8nC6VzD",
  "key16": "TiGNGnHGFCcHX5EQjwyGNWRCc4dV8H5C1ruit4Kd8pBRDb3kbxhoDxeRb9y8W4D9onMwPZXYre4VainJPdKc3Gm",
  "key17": "7eCJ6PpB9YpRh451Ag8bWFd8DvJoKGRpyEpUsZZZMJeNhBptzyUtgjECoDzRgVfiY6W7PhyvkVhAtc7q6J4NHPA",
  "key18": "JQwyBMELH5YS2Hv2t8x9t2Yj4xmCP9vaZQMBdwEBXTDf4vXYrCZUrVUfMQMfj2y9Q6o4u7V8ajH9YC4p8ve4LAM",
  "key19": "2dLgT4BEAbMC7DPBx55aPQuH7ErvX1jCC9V5U3y3c5e9X4SVSgZBAxrpYGELgw1J6HXZzKGuwYobCBn8f2RHGGUt",
  "key20": "XGS4ssc7iaQURxPnfsHefyQEDC4WTqbpyiJWB9D5Zma1mSiNei2GzQ5WfsTLkt1L61N4JgqbQmZngL7gDKQH2qU",
  "key21": "pEZXrPmBVuQh31sdSUZycFQfpwn1VwWHSRbLLYNyND56iidiJHa5RunMVxkr6oSyu91oCLEx9bF2f9QfWV8Pt5T",
  "key22": "3YJ1VTUqqnuY1qZ5qw7DM4tSRFwYYxHXrr61UkaQpxooghsyFwBV1ecwypyB4PUaA7AZ6iKMmLQUXAFZmmaQPy8V",
  "key23": "2wnwqXWN7G6msdbEVNnEhVx5P89XrDHcBGHKrE2ABytyQn1dYH8vx8KcH3AaUJw9PBAYhk3LzDtxGhK6HY7CTztL",
  "key24": "4iVHBL3GsrYCwCX1dQ4yyC3AM6UjzowRMc3ptE6Af82aqnnScgWNfPZkTX2qPcjhTnRWLfpr88gDGBCVTgkpfoC3",
  "key25": "3V2S99UPV6SrZUte6kKP5vn7Tjy7peLxAqv9cpYuMcjutLxYhhwLsFMaUbxdVVdX81Z2yo2tHzmQjJfhMihtYTUa",
  "key26": "5cuopXp6arbPefUhkkzmWnbv4JCvWB3otzoZ16eyjJgjJtsGLDiLiFRDsHvQMq8eAWriteK72AZrvhCFFFtxjasc",
  "key27": "3x6xnfpPP4CJa3TKFb7fKu8A3Mv4EPxJPM1CzP89iHMsJy9RUge1CmyGuy4gcXRd4JohiHXhwqdRnMahd1wkwAwL",
  "key28": "uJSezocnkc39oo4MNgNRUEGLbqE2knH5iqbkaQHQjqHQC1sGTNKR46ED8us5R17iL6jZ661mgSJH7jXBPLXgk5U",
  "key29": "5gST8NAqkpNTEHxLQMNKJ2SxSnhRFMuyb9phnj8YLZWXpByHmjLHQyG9cbrSRdGpXdXQFTPyRiSEwjt5BwoGDRkf",
  "key30": "32cJutEGdio9HvcDCbqTcU95hp9DyjZVBvepsMW7RCKuGoB7N7pNimyr1nfh8YjX5NoxHewZAV1QZ51T4CggAUEK",
  "key31": "3LFiFd9xQTR4fvgTsqij8BiEpZVMWEE1wRMtoY7qvPoR4EZAP4JF1ZayBTP3SFAqBqxvzvQW7Ctt33dZwBUUZL5w",
  "key32": "383EHM7BbbCV4nmfakajFQH1LW23TCPLG68LLHpubMM6GFFtUkycrDQ21zGTHMsbR4PCZhqaUBxx2Byp9Pedppw7",
  "key33": "2Kk6xf1WCj47AE4viMhf9rz5RZAiVAP4ivYEANVEsArCNDWZv9BSfWMYDTmECKFgSYTiy1tMCRLqSa2drAUCX77k",
  "key34": "2Ubbk1xXG78R5qJaQnTMTNWa6Yf7c5LwjYu3fGG6s6avNGYWBTFJLwU7YJTXkegvEvSCoLceAABcfKfP2wpZzuSA",
  "key35": "2tH5oGXT3J4A99NWo3Av2AzWkjWbnjS1MTQvxC6g5ohySbZDMjFFbdssjSzcufh5L5cwkJkitJU2DhduXDuc4zUU",
  "key36": "rPyHsuvjn5tfBiheTUG2LzzpEcaGy1tgRrdfmd3fyuLJYMPg1SMKSATSipLk71MvDc54jXyoDseqv6rrUi6T42M",
  "key37": "2tZjRHXNvyFyr1Gr7aCgWXNXXQjk7xPZ8zftjaHmHvTPqgLJEXNbmET2955TMegSpk2sGrEMNekJLSisKoAqdeQN",
  "key38": "39rD8EkiR4x8vfBXAJUKpsBS3JPHU84SUdr57Z6L14JxX7Xwv1Lb4icYAwNMbS6mXYL8updEEHgtPUYuRQq2P7b5",
  "key39": "3JcdjoSW1DYBLmC9j39CfULouu8kZSkWWB9xgwoJKMC1EdyC33Z9yAL4ZkZMEwARMrqokVSL1e88H6P6j8vyJocg",
  "key40": "5nyGw24rMuzyBK3qSA3p9kZ7cd62rFK3kTCtK38eUp4JmezXdxg7sG42Nt581vBckqh3GcoY7WMuteQvurnE52Kj",
  "key41": "5UrxM6FTiTyfgCUHnsTGJnh7mbR7aHQjJbqXqdK7ogHqguVqDD4BH4VzkeRWWwRsvmvXvsL41641J31hbBWFP56V",
  "key42": "3h5KmyZutfF3e4kC5ySZt3FuCqwavvXaBQE673VbBjC9iBJZRWxigxbVJzEctSinGKxCoczHFySmBa1WgAS8XfLF",
  "key43": "2UMP3WBKptqLxAYZrZJ7VD9ufFDb8mew2NpSdS5Xz4ZtvmXZuZNjStrMGpnST9GNLtXLbLkLUfvVA3YjscAnXR8M",
  "key44": "4r58Lbsss43H2aMTY71mERLMvE2DhVpSWo4sd5hraSsWu7Mmf3P2SFe9geVKqzfD5Cq18vBxp9pXXKBZLTyLvesa",
  "key45": "2ht8f4Ld18iQLkcqMrVDXxDzWsMmKFhVYtQx6MTpGtPBBgKbFB2Q9mABhxLEphQmJunLSZJNKvEYKdS8Fo4R2S6C",
  "key46": "3wEwWcp1TUdmVsdHRiUAdnCCBktiwVFQAUQJMuhq5Y8nedK4GLHbLZZeBmM4MBFSqUu1jgsVEgADNfTAC4zbhioK",
  "key47": "3jy5CyveWtfXJYf16VdPsVXuX1WG1creBGmQSHzGgo3HotAd77uKQWuYV59qRHthbRRYrPTgRuSgp9N8LiYEgja3",
  "key48": "4LPWAMVjhf2DBqkqwsT2nM8gDkBycVbMEGxMPY1gcryZDbw1wCWNCewp7TDVVANKsWGEpqcvasdvhEtzkZFQBhi3"
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
