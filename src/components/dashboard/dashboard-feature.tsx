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
    "677WxaBMosLhCCwF6mwP8YhvfsG2rGMUirwY8HHgHy23cHjMV7qoNwMxAtj7s7LCQjJLUdLAic1eaG2uXugDY3cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eGf8W7XvBgGuGd4LickUTon67mpLxXEZi4qy7QQ5QaTQTgZ2GGs3PrDaW2AAzLqCdbuXtPL7isMQQVCx5TPPBBv",
  "key1": "2b8GGGwUnhKuhuzyBV3qZMGR8zBoReLYJNNe2VchnqvizRiVXhuaruQgBQuhVtzDhZyDdHX4S7AQrov4YYkDaBtE",
  "key2": "2DQYUDB6vyjRxm3hQWNkWGkmdDhCaggqWVSVdsfrmRYnupjhjC43DYKAYZDBFcdPiR5Le86TqhxVUUmiyWXMsGMa",
  "key3": "4pcyNGv67QVH9bhavw3i5YN8YAWCDBX7mPHut2Hu2TYs7pEo2EUK6g4HZxWmBhg6pryVegkrWHMTNWtqeF8GErKN",
  "key4": "5dScutAuAJNnqpKVDAB3moMVJKBMYV1KCNZuRUPohZxAszBqjzW5GFGyzmX9STr4eXKvxYHPXYfGK2xANzi4D2f8",
  "key5": "F5Lypn3a7uELS2DisFVfxBAY7RPgyTbHh3WD1jEXgLiiddag5VNQL6m8tLxCigMgsdbjwLzjFEDQrihKU6qVdHQ",
  "key6": "2ADjwhVFu8851BjFmXzN6fifvo8TrU5Cws2AZd1QyJ2o3XZQFhhs7mvZUjJD3TJikA8oaRpzxGQ8iU5Kc9BHLSKq",
  "key7": "3k1EuFxADKEXXa9s4vJjt4fRsetYgT3wxtaN1PpiRf2vGy8m4r2Q3uEgbEUAxNvzUyB7FW3FhptzrnQhgDaDLLYD",
  "key8": "4XhxrVGMrdYbBQ92iqcS7KphFVPrtiZLWc477VQfW4G2e1QGMn75Y6X8djVzxiCa91JGsN8RNK5ovbqTzKCZ73VD",
  "key9": "3DJTSTtJRha8PTZ3HpkYu7d2c3donT6f99wFcRPyHBZ18Dpr1LVKxWiyNzh9bjNwcJuvgVCpi3wnKjYK5doVc9d3",
  "key10": "5uMbjFKqkM31d1qxaVKo8NqCRtJrQUtxgHdzBrDX24WpyMrUKfp893RrDrw4LA7qsqNyyw3G7nKR2u2RgHxF9Ad4",
  "key11": "2cFWKXM5tQzfFSaRwkceacyAmnu693NRgGXg9DE5NgXxGkV4ffj7N64KzBegk3WMUq8zKBKxzvVstfV4mxcs3GxZ",
  "key12": "34MqyxbD7QevrL9q571672TknCtR4DTsTnNQ5JkCoCq9pCuP7dQMW45GWPDcwRYemukrG7HxLA8f9XH39enLXzcv",
  "key13": "2zYVd9WGGv3Woy7CMaRXkGe7rei9JFctty346Y76WsD4C3xJfxiaLzReCfTS79wpb1scw5drFvWT8cRBHr3zzfRj",
  "key14": "5jbsyK2A9LzLskEGZkKiU3R9ArPQKGRBr8GEYfJa5mhPxULCu1KxxL5JXXcGrt7MKS6bPnez3h9XUSCdeCX4kVHS",
  "key15": "5J2VR2knXqCVwSqHJUHMBzXT92swwyQEHtmzEYSoKygbeEYEPAqPsQrvKBC1aMvVj8fPTLgvKBx5cWnpM3odGuVS",
  "key16": "4GmtPqQVzAicLETBcCYfyPRRE2z6oLoRibue643nYNDCcTTapdFizXUQ2hGoS9mRVX6kdTZxofRcE4H16xbqwJUP",
  "key17": "22aq3EHzij2wQWZXVqBDQB9yiCv1EwScgC1AgQbcrvGKspSR5hv3qWgSEtfc7nBKCcCaFG7Us6iatN9NerAug7Rm",
  "key18": "Ygvzrn8sVJHkC6v2cdDoGwtukFrK2N41FmB1t7PmgB5jAEAaii879QZqConZsfYk6iAXjhX61kzmBzFtPv2LxCc",
  "key19": "2i98gB4LEMS1cC4bSxYRGUrUb5cSrA6imSd9Pe2CS8T4pgfpFXC7wwpaRjaK8Yk1sVV1tyLyyrajctn7tU9Hr8ju",
  "key20": "2gXdw4E6NbZmKraZtpA3cve7n6mM3AkicGGqRHsCLYQHQfnNaGJkWcg9WdgEiA5LJbFcSCHCki8KtxxeKMveQgoV",
  "key21": "3a9uBnFKVGk4ESYz7HNxRe9mYmWFKFHuiTirFG8QNzeo2mEpijyBQQiGTZzXKjyMnhbyhzgm6sp6w3Qy59uTbWZY",
  "key22": "4xHFNmh7GSvsX1QuGEeLZosVomhDUzTeKHSPkUWhseUSkTBPmeFReGbRTdZ3fjCWcBM376ngMchy19sWjet5DkC7",
  "key23": "5G6e69nWTdgrufbWX9d6v2BsyBTMahaWwkhvWbRhHGJWzhQWVo87XTNnu6p4eEJ1naLM9eR9BTqZVvqzhSfhHTU7",
  "key24": "3HteK5Mqchwcow4TjoPAJNdQZfyV7vaSBXGYJYv1E8gzMCofy6VQ1SJVBtgyyTVup6s5oxDUQGA4644yHzdVaAeT",
  "key25": "sofpD1j2sZyPTzSpSuzbQJNxYV3nQzU43Y3vsRLVApcXyEAegLa867oNDspeb9z9HoTxCBFwqucuCRKU92VnJHZ",
  "key26": "4kMxzvqzPmvAigQPmcL9QQ14fBSkfWKN4GAjBUxr4KZC4TZfCwitcbJYptk3A5tkAkgdyqDPLFmcTTGu91ziuw7r",
  "key27": "5cdbn4ZhbzxbW81o99cbE8S1AQNZYsWePrNCB8NigJEEUJnTrzj9h2ni9eV6SDgi3P7q8XKAjPnveCVUYXLkWcwk",
  "key28": "5BBaFDDqqFNwuvetgWjD8wWtD5UA1uyzcFoQYdph3582SFWpM8RMvN3ZyqgcK4Rabkg8tJ6NhNaSmLox8SxtamKH",
  "key29": "59sT4NLaVioGREmCaSTPgvQzJmDfojh2hmQRh65o3tXH35ZstNTh9AZc3ddEmt3bVu3cuzXbZpf7d4CZsBCd99Wk",
  "key30": "h3eJD99xkmYNrZbo7TUfB3NPV2sLYE2juod6AqfqPRgLYMUqgtqtiXh3bvnACzqY15fiRQTqz35ASRZrx6sW8PF",
  "key31": "2prf8RTdqTssXVG84kHy8SGAYd1hKsWc6SAnQkRin2k9gcLeWtfKhYLXPTLaiNA4jg9yJdsT4iSpmJ18cytBMwP8",
  "key32": "2txiPpF5jWwCjH7PVWh4iiT7tNNZmX8jT46ARKRBhJnxmxerZwXoi2WpcF7Wt4sW9W8E5jbjfYxPMYKciSnXSrXt",
  "key33": "qTnQonzYJ9rdJHuNzLB64YQZPEDapb8iWom3D8m2VV2yTpTNwkabmeUGTe6iqJSSTsQUVAaYoywfcmkBDE6W7sd",
  "key34": "48JKCXFH2bZznBcEAYE5nbQPpgqqvo6G3vtUmrUqL24nYBoKgMoT4zckcabeD2JUe3CvTYuAUqZkdFbDPWtHod9U",
  "key35": "3yLfobHo8giEW1HN3deRcwjLWnYs6KL3pwxkh7UY1C5bkUK1ZnbHr93zvfiJ7n2iiyAnhL9caezdS84Emjovmrne",
  "key36": "5AAmyPfn8LV3whjofRmQLtCwtWFLv1KDMBrdNj4WiUZjJwbpuXhFNiLX9mXeAu21qw1CtCxsUdzF4HmcKytR8fqY",
  "key37": "3faRpFmUybjDr199VfUncsqvxoN7DBYnWTtpURUsZ1bF2fnEWspgC98FBSx85qob3amQXi4u2tA286bivy7P4Xay",
  "key38": "5raNHcRJ817EtvUZCF163egXoLYEQFwAWSPhVYM7B9kZF16BZTtDH7fZdG1Bmie9K2v8JCe2kFjVPTqVBuThHKKy",
  "key39": "5BhcSV6j2SKufs7pBYu4Yjo6yDsCPPQF9pTX9J87Td1qG595AZ9vMBUJJbHeV1nkXA22bsGGdLGNFadFh2EAfGNV",
  "key40": "4ZNG9fvngKerm17gVHgcuAbsME7whD5gNh6rdGEZAecmSQ4hPGHm9Es83qn6jCEYrbmBfiqDfvS3Ty3NGnurJVJx",
  "key41": "JC9GbiEw8U6c7P78g8kG9Y9XczMsSMUyZtcuhqUidTPUg4gJNgk1T6ZDRrcZcq2GpNoa39Dbj36ejTtTYvGkNYw",
  "key42": "4XaT547xzvLJdxZLeGbw9Y9kiYA3ggwCsYFSsCrYkHgPoHj4ozwcaBncoDvSccXhabm44djf2QFmnSdTdDQ58Cx1",
  "key43": "Q4xji2kbsxvQojEr68vjJb1EdCM679Ex8RsHwe2Mqy939jroHxM2D7oHWhbnUtZ5Xey33EUXPm7scyVGPfEukaE",
  "key44": "4E1aeX1EBxoH4GvFuFWMaC6oKixRUdoh1vMEtvmCvNSAggC6jHmb95ZTKAda31omn7rRgGSijAUmhdR22LHiLtM3",
  "key45": "5UGmA9mnbeEknG4zaJWui9m6ZheCmpBrdSKjRMMxwZgpJNHaMVFbMjhSyBRee7AfWbyMxide6QV59oVNoaisJX16",
  "key46": "3ioWiFzkZCcfpetqpURkHjsu53Er7dgiK36qYxaq6xhXdsxXqE6s87Kb71Pj72wadP8YqCnyPs48G1paDmC66czd"
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
