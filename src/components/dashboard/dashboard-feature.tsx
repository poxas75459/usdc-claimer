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
    "2ZmhJtu9hjGFUopHKL5Gh7n4jQDdumvqDQga8kc7Y9k4W7g6LjR46k9p7BY5zehKSYzLUFE116FFTaXUVmZV9rRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35gjBsuUK1uH5Gj9x4JSFVSSjkudUji6dZ8DSXRhxAaBVb6nfe8vYR5WAKnECmM6JMokk5kFFj6HTPzzib2e2W5c",
  "key1": "5Z453Jt41fzWW8d6Fs8Niuf98UXW8XNmBcQjFkNQWfrD6D88CCi6Sdhsdzg8Cfn2TjMXcLHGMkTvE7YNdU52HcJQ",
  "key2": "3BVyKJU55u8JLB2NfDnhYowYnuMiqkw1ajctCVuvGEPWf12Sfq1ZmUDQtNmtfeveF93epvJf79ArPwit8SphrGgr",
  "key3": "3ajGJHRNXnAL57YPLqbKRkqRGLfgLWZWiDPaUPPJ5Gcg8HMVL7msD5GjeHnFVdLGK9dYBJL77ipxMyQ6av45rtm8",
  "key4": "5i5vryG5oKJhhetkcTs4Zk6SWnixuZ5GXdcsL3xoAQYjN47bdvZ6qxAS5CfLwnDNsgChG7Xa1iF5Mg66SUTPF4YW",
  "key5": "2TzvGaskW2xfK2oCnmtWQz5XrqK5UGChHBn1tVmEp4TbGYpuQ7K9Aanpy5y2oMcJToMgHmdkfyBom4uH4foSVmmT",
  "key6": "5TURHiZcDEdnMweoAGEYZnQRHwAukztwFKwrdKAWeJptF2sEfQN4znY7xzd7coNXArjau6SNKrtznwMbt8r2DKb2",
  "key7": "2yi7covZ82Kf4tRTD1RUdeAkdw8pSX8QCVWkBeiDrgb7bwWyQfUwKoMG3McfphPvvHpkPvsGRTtEv5g3LvyHv712",
  "key8": "5B115n69G2bcMvBXBF9gDPfrKAj4qTmUDStZ3VvYm4WGTbZ6Ypi64tpand3ovrFQctZrRkvzUxDuWZajubuauYJQ",
  "key9": "3FtqWgRaXa6zxm4yWb2TBAiCzJXYewE9r4hSwQNxs3HGoYtb5GB8EwbreCmhVp5nyWB5NdKWRRs2puzTPLPA45a9",
  "key10": "5usFT3ATzthwUAtz9Zj93vzA9RdE9F6Fecwb1pjmXuYrVtvbepYQL4WVBxGcJ4RFZ5YEANjTk5YRHmwkSR2HyTwz",
  "key11": "4oSHfqZQEb6V3jgKBEhAAJhAVQoSHKHJ1BPNSKVrju3NgJwppcMaATY4pUdxuvn6ZFL35mB1ujVtUcdgorBxsVLD",
  "key12": "QedFZV5VQVCgRp7Zi61JsGcKhNsyzBcRJn9cpdTkqBVjQrnH7TaNcMYPCrJFX4iWhxWhWkqjBiK8FDRqTxjSxf6",
  "key13": "4WQnUSZUSUojhgRmchkXyysKSHoUv7eUgbJGvrAsDgjW9bTCHsCC5hryjPji674HzCpaQPZWMSJWLNPz62KafvTA",
  "key14": "5oTs9QTakwuGKHNz1AzKf8j2kDtbTBpCVJMDhzDmUfbWoKuV9wvCSuYiH4xaqLna7hYTxnY5GJrktQri3RVkHPSS",
  "key15": "2hvrn71EQYwGmXhmmDhRC26KtPbNVcR34kuRvVsfBnuvyarwdHEpVUZcPSpbVCvEpqGYT7euEirVKdfhUmNo4YqR",
  "key16": "gJ1ci6PuAGhgMVU5XrF6xfiTkE2mff6BzXH8Ki81ao2LFywZrs1K7w6K52DUorGqpWuZhP5571vW6S5Wg2QZbjQ",
  "key17": "5tohbZD1X6xjf1eWmXy6BZhWfn2pLy3JpoobjAzj2SVonLbxWBhHNhfX6m9uHvfq4qzkqNoxEcv3fXcochdmEg73",
  "key18": "P4uF6WfcDP9ADZsRZihzw5KRyWDGX5yYj9D9JdQBrLv16nuDyp7NMuk7JJXhHJP5v1HRaBUZZaL6WmfGHCno9Fv",
  "key19": "31Kdp4oDE6X3wXi1oMevBfsvUgmx4jFXiHRSuPsSm3K9geABdgPuAx53mzwYma7J1Htbjnt5fAGufEHWfDx8Wu4C",
  "key20": "4H3ARvHrbqs6jDeqjtgmoro4swYdmoKuH6wFn6s7AXWmyzgMtPBMhpU5c5ZjWNKQTYnDfHbnYxo6cWpRuhEaqYyN",
  "key21": "22VSSMWia9ea9WV6B2AHLUKMPZj2C91VnqH453S6ehvi1azy3P5ZBzsa4f35ztNgJQS5Ad5btK6UBMABgNqjDBVH",
  "key22": "2dUHaHcXTYpSPP4GdaeZSWQDXFbSQkLMf17VkpFs23b4kGbPGnU3ZP2ipXcxfG19ijJ25tVMFAxa2SYnXh9AwL5w",
  "key23": "4XY46KnWru17L9WwVj7tM3rZHD3wvy1XKKyV93pzHac9hmqSvA65dQnsCkwRdfsAXCKTmgzex2h4SqUtuwBcLj5a",
  "key24": "4DQukGTSWJdUGgBBukHZVVWidhGiSNz3pUGRdctcLGzNqoCKg2KnfGhzSm3CQ1yEryqVudJqnWLGKSCQ8P9FruWz",
  "key25": "3KyXzegCJPqeM34asCVRZaXfVmSeXbhDdS9H4QnefajMxA7tx8f4HiSAkV4i7VbHm15tVzrFgAT3DwAdgZbcSjkY",
  "key26": "64HB3PR7T935umNNEM782bxLEanHHVXtgLYqTakVaGaCMkUKUAfv2f6hQxMxjinEBRfdVN6Fb6rwu2Q6nkgGF9Vf",
  "key27": "3bG3GChjXU6XcDckKp8EERoxajRYHC3ky7eGDaiiNwmMCcpqhSQU9MbzZt9ZA1RFfv3itKityqNkLKA8huQqPHHk",
  "key28": "26zyAQVzMp3XKw33BZVbeZiW9hhq3QbW2MyCdGP7Nr65HWLGAwo5DscEzEM4R549NVhALxwzZ4kVW6MMAmWEDKXs",
  "key29": "5GL45kKCx2bTnFB1ohhnS3WNw5PjZYN25FH2uyN1LRjtZQvkwYiHp33pTqvXdgxB281tS5CCUDN3oce2HFgqDZ5K",
  "key30": "3WQfok7rwBe3ZoGNEana7L7VWmrkJV1XdNB5THsUKiwK48GYW5sbqGQr96b7HyhNM2PZ88KFrtK3j178fo6XXAhj",
  "key31": "4AH1gW9vEnWtXFCsiDsHM1xPh4nL51nqowR2xHTHnr6X1Xq3suucDatn1yMQkaa7FNwDCNp2ErnGSHcigX4Cyr2p",
  "key32": "4vq8NtkYsksKG1SfCnjSdrd9zuZBhvTf3Yaj7dQ5gDMYFJ3HBGVorseDQAFrYsvC7yPGxBPKFiVktvzxSwv5xjvf",
  "key33": "32hsRFX8Q29Sk8WUmoF7VAXCwfJS3QDT7U8qoPktpb6ZHc4ifrCWFSVHP7TNFxrzpkYrEJKbzRQoCY4gAzq4p9gV",
  "key34": "2bE27rBGMtyU7aBwLwFnSKFocw3bq4cuT9utev7Geh7YxUun7AL2G7MoJ9f9RipKomGyBpccbtbTiuBEe8GbhQM6",
  "key35": "2akQBw61SRBbj4KKtFZ4KsApcEyW3RxPngghBNfZ3YwZ8ZbM95VJeKShgSnUTzjgeExrZPkbcUd5qFKvwaLAFf9T",
  "key36": "3i37EYK6zyyWer1ebuLUCgqZhPnTdGcGxSmeLbCorqYRUtDQdPt4nc22VDnmr8qfpL7E9ukFzpnyymiKFrXK56MT",
  "key37": "EFveiKfUGmXm8Qmu2JSBrDrbX3ThcNj1LugvPUarvyppkDxnLmyYyC9GSxUkpehraW5Ym6r7akR81ddmQz1veqD",
  "key38": "5GATvPsvtkEwUwfmbVsvox2nv5Yez4MigEoRdur6BrfgX6Yi4qLeR1BkmdqiVxtsYw6jHdX36C8nw6KszMSKsyQY",
  "key39": "4HqGEkCtRw4bv12uByzc8pUfn5Hs7v9HtvaSrdYa1nPohzffMqmDYgn1PZP15xJGLyFh2CntuGBjUPU6PdvzqR5H",
  "key40": "2CWDYxz9B2U5krpaXGz4UZ48rmm9sC3fjh5NJwELLi7etmUZi2WicdZCDYpuwDYtqarpTeYmE3EfcBFaMQ2GM9aT",
  "key41": "3bqBq2YLc6DNZsZP2C12Phg8g9yLGZEt57eHfKimvsosema5fTFzuBPWTVE4vPT4ZhrU4eAr64hVLWhxrNFFqitx",
  "key42": "fH7WDtGfAoY6TYC22PPVWmoi3ejG8b4uoBshnCp5XrZPGwbS5cRttBzRupQDJjofA8PTxXWzZvncA3HeBGBnHej",
  "key43": "CiupwcoJsyfoR38P4hJ3DoLEifvVxR2ChGnQqnQ2DH4nFzQ2v6XefMrqq2ZEjZezn9eQNueESTgTNAEPgnEPfte",
  "key44": "TaJcqZ4P9twMLj5UwhgJkdUKYna9TzUnwFrry9f1f19AK5AL3zMd1CUAtRVBH11QC4B9X2aVXptDXVU5ACi7jfM",
  "key45": "5qK59ATA5TkTSQ8ENqiwQvaBLHQRqqg5qdQMgkqDvEYW93BMwtr1DRzGXAzajaSDeMyCdJqmbVqnVNnMNbax4qqW",
  "key46": "4BGU6g7363LnAbdhsgaA429QZ5oGJgRhZjGxPqe1p1v2nja9ty73BPgqgaRQey3o8hmw6xkk2HDGSaezvjo87L57",
  "key47": "5DFkZxh7uPHnhCcnJ7bCx5dey99mRLyQvJM7SLyQ8AndbSLWWtsVBSF7n2Uj7aeVEsPGAdcQxcLBzmrnCXJA116v",
  "key48": "2hFA9qqW1cxoVwa1BGYYG3wJ62WYFpMgaUvNRd5X7TVDztVkh95Le9jhLaMYnpyKvuje5JwsQQFzBRotDWRh4Kfi"
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
