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
    "kzRxu4t4kjDqSLCsdwkhyn64hZ9Ya6XBBr4ebtXaYdvRBJrVuXZecspPmG1oGraF4Cf5ayVo6htnSh1daAG2rjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5637xwqckycuppr6Wu1zq31HXo1971TfndJg1WxrkwHcNaeo7R4zsQRpMTvuKDWYM1KLmC4SgT5WmAfd1rHLkq3",
  "key1": "5ndnkUPK3rQQMitk2TSQaPJr77PF2UbhonBYY81c8qzqXggNFG5B4JYBpGtm5bmDE1pt8iqjU8TCbkkJ3DXuwnAV",
  "key2": "ezcTkyqFADwMGCNXTtFTAKE62LsoSXBqoTCA5Z7oqc1U7L8npahyCUF6aaK5TZhLm11vPJdXFPTJVAS7onMnH1p",
  "key3": "oZEN24REgrPGgFofnhd2ijnn1jAvk1GDmK6zWf9koGDm4B2spQagvZqjUS43rWaYjnmatzEicRbokWPeVPXUq7o",
  "key4": "39oeUnVYP6tp1dhZ18hd9vJPmBFVYhnfd5kooAzfAsBMskGaBe93f9Sww2UyJYg3A2jy7sa9rwuj2me79XbRXxza",
  "key5": "2ZQoE5TWRruWmDNUf6fyCdDDUHQLV5V89CZQTm44snka2GMofiRNgdD5NF7FmtWphrgTCZzGYpFvVKBADRmHuGMn",
  "key6": "4Coo5W5HeNe6HiJbPCfgyigPJQDmahHVLTFD4sHifx7epnvjscjKULz5DY3HvsZ8spEGt5SYV3WosyCV6WcTJkQx",
  "key7": "utRw2rEyU2CHUA3f1pp3NDAHqFq6EpxNdWSdUY2ixjVut4FqbPjPKdcPzUwDgWnRF4ZXH5NmH2tbFJKg7RQ2hVM",
  "key8": "3UxfnHNKmv8o5QDN7D9FXwiLoBsW9b3nyETk9r7hkg8pk5GTVJsVgyroQm44Ewx7FeoYszJcj6uCvpvuK92pipiA",
  "key9": "4WBxiyDnXrjz7amiuPFfaArBRQFamYyrmV24SVo5Sxtg4bzxxfdhkB7YsbmX3nh5px93BjKU4XNj6mtnC6YccDBJ",
  "key10": "56XSmQFRF7cfDJGdLCLDcrcSDPXZf95j9GQfQ8JxZnKvVZ6jnbi1ot9vLmUPgPybtpGxmfJ98dqgaGrdNWZtv1qd",
  "key11": "2XYVyM6JpxVihyx6G8KAcmet2gWoATTfgjxDzAtzj6CWykctWtQjZRVBCTTi8najEwbd4cauY2UZnKTkF2KRr9hd",
  "key12": "2zkB4Zi4nnpkLEMdZFE59HAWgbKV8EUukU68aahsxvtPGb5NJrtPmeMrVhuJTbaJ6zFYRHYxZPF6yqq5okpka9mF",
  "key13": "dwcdGCumCYPhhoQ7r3tSspF1WogmRWGKaAfpfnbug3PT5R3UdzgRstbrBuT1GXViQtE2xRNEzTcNQrXs1eefg2o",
  "key14": "5GEyZfLbcemkeh95gs5dfUp7cJ3pjY37zXU6EcEx4XT7AaxuYYjshrYEKZUEMkAuQuGWXc3iDijZwemhsm6VjuJD",
  "key15": "5PZS4paJXyqzvjyxMdzLcqeiQgcQdfs4ToPEvSNcWS5xcNkspe8bFw6pSYpGF3yifiLpLTpSEn7bgSVQUG3Dct4Q",
  "key16": "47iFi5CgdDDLhgJUEHkAapY2LiNApPpvT8LMm3MxNzithnwFJuDCTfKQE1kg4PmhngAmZcsw1eztjGL74dPUWZEo",
  "key17": "4in1UidCWCdjGVC36ErqK1zPkKX7ANFbHCcPmcYzncXdezYF3xnB3Xh1Axco5dYsU8uuf9AV1C9vxKBCAGKX8VeN",
  "key18": "2LGPwkm4Wafoqqa9VgSGSmgVKZDGBJ3g3QC8PCbHMydwJW82fUiHndDbpPbdG7DLYKX5p6GRPWtCaJdcNKjbQi6H",
  "key19": "2qTg9aTJubGu3CrwZij7MuBTZVVC1bpBzxtPuKeNrpmjDdW6WCmccA5k4rJ93SfvH8xwUznx9VbdmscVdYkM6iJv",
  "key20": "5JHNjmXDNYN7XeZkn3oSC21pg6J5sirVCcR1ZZWGZBvU1aw1Ttj353xXeUSnMEWa6kd2LMDyKuBbSJGR2nXRBPi",
  "key21": "4s8Jq8gL3Qss7HqBaYNRAjvkUrLLNnL3DZuDUVjzMgbWH6eZUrorE7TPyZ2yFTvaoKjenkGV2Wf9qdWLWbtLhmWg",
  "key22": "2Zx2D3rmt9xpyGNk2mwvuGqMnRWHVD7bDoGZsy9XponRxYhrrNzKfv8XmmNB4QVFbPCkiFGKrjyJhyssYQf9tigz",
  "key23": "4fgSMovQqeaN2wVvRVw7n1SCKpk6Vdz7z3J75wgvmuAmA9pgYtNz4iBmZ3MGicNHyurr7kkeKNdqmFu8UZKR8A8R",
  "key24": "41TBs7Gh5Z8XiYxJ7b8ixLHqWqCuFCMpyBYnaQYTH9Rz1HPZvUifCFh5fqFvaFD6jFSMYM4w6hA5d3KVa3CZ2fxj",
  "key25": "4U42zanuH25brfAnYUJY1yE8iHYpf7wat6RUvw7uvJaCdAYcinRJPdPk4RNK4ndk2vt9KPbSXKHCY2E4aFBhR3Tg",
  "key26": "58FhKTXX3BC4YSDHqRfVEDBY9p7cfyXcY4rCfX2U6YdXAgf3oDkHGu1phtb5b9hTaVLg8wDm7wCqw5yU5MjS8f4Y",
  "key27": "2mqGXwKtmdr9JGsDQQzsiAcEE63tbSzAd2DnBXzwfTm6AYUgaA6FXmmyv29dVWFJKNaN9u9nTB2sMb8J5MndWzAd",
  "key28": "5DQsmpKjjrQHYAkhE4kJcUmqcbDAuPy68AaFgRynDmBukTksKYrgEKXGBSBnaxKRjhkhXDmdieRRnFt3rtFjNV9H",
  "key29": "3R9buixNsnH6PXBqLGtCNJEyp6rBf3pR2euU1hdqVVG7NLbQTEs9bfVBKD8BTz8AvP7pKjtBeWsdrVVixFHhD53J",
  "key30": "5df5zyMrx8DFnjBimjVVcGXGq62cxUPZyrw82VcJ7WTauxUu6RLFdiycTMyUALCKgb8SeoNdjGdXn1BeNYWMbpmT",
  "key31": "31pg5Ne1iiHbJ69UZxBWkDqxdU9HY2auT3c7wxA1hurL43etKcfF6t47EjuttVdErHmMbQhb2XovMSseWCcLP1LV",
  "key32": "512cmhH6LR2QQ88X7AGnsZG8QjrT3UWzXrvKpMNx8Nnroy7nhUGcmerg6P8fdrdyHJHMf8PEdtCwhDZRzov2aaft",
  "key33": "4u9GQmoyGT7Zs5yw3P3jKYVpNhtZeAyFQR99CJYhpeG7V8nu3EhHe3EEMFjydsCApg3ysuHKKNcW6BUDY43fWrXE",
  "key34": "27ia4mSDtoDU3hzqF2PsE7JyJCawkd91tAVw2gjKxoRvfQEGKU9mB4ZStmkANTiq3YAYK3qfTmUQbJjYMSovjnP5",
  "key35": "3VMa9bi2FqPCWRiPJB1Fr2CzhFvvBLw7DhtBLEKUJyFhRemUQn4HXc4bLxmQUqwyNPq3ArV2b1Dubkv9e2ACcC2i",
  "key36": "58wBGAgq8kBrEeox9jBwndYwPT7346Hyog6CiYjj6uRbWF7JAPSQjTMHEWmAUridReDnzF4C2TQE1dkFwmGfqt8u",
  "key37": "4baH5zVTwd6WYnB3RcTdBBR6FbWVMK5ypBCT6RNpF3AyAuyctwZDN6Gnt1W5eDaGB7Pa316v83q2S8QJ1APAKW9H",
  "key38": "2am7yDXwmkThB4Gck51Xsb9mmeh3xNvUMWQv1c2YkSQDj7KXZMn2NCu3wDLJnhu1rwphMHpjEu5jjoEKKTZwW5Zr",
  "key39": "4Zqah3jECcGNpKH6p583NosZNhZtfMyiA16fFuxAmL7mpEaXhQKUdgW1WUpSaxnhKT6hUpVbENPRyAzKVrr1MyxP",
  "key40": "wvuuySaRyAR2wv5WqHtARP4YJQXGWwzLQMkMxe8mgAfYF5JrcHvuKrQjHSijQ6AanQgRc2153pnuX2ykC9dUBrr",
  "key41": "3B92cmugVJ6DjANsG2KHhLuvds5x4B1pAoRmPwJ37MQFxiH1wuvtNNq1pqUw4nyAnd5BGaXGKMp4s1V8U7PuwB9m",
  "key42": "55zyqmb4d4Ebe1WR2F5Zq2SRhQFxjwpjUGcJzJPfQjQYcXnLPjawzVkEbSY9i4qLayNNqYV6fQ3yoMwMgUrx4gYM",
  "key43": "4EoQh6X8JbzqbX6a7ZSADWJuQbnuzFABWBPTTHcu9gwcnChAdPpzx1j4aQet27FPKCFFEQcSMBV3pBok11P3kr29",
  "key44": "4M6K7Amxkj8NeFSP4syqGoJBWkVbSHU7tMWHLLuEfM2dVkTPr2Y55GJZNMrYhAZhWA9jcHAPJBARabezcxNB3c4n",
  "key45": "vCFWvTLsYx5KFLx41rcXEaJFPidzG9sF9ZKKxp7BJx7njesWwUNNAD2mZSCtNSW6KBpPGn8wivpG5JmnuKm53Lp",
  "key46": "2FxjCemkHK4pvBoLGdTHYBwgQBvN2AnDSzcjM4BquVZeNEwoCPUDBANV6VUo1Rf9qq51zV5Ma4S24XbebrMkF11m",
  "key47": "296uDX38N71DcsbHiXeFsRcG9ALnGRbC6oDc2qyV2Pa4BBVoBR5n9Z7VXctWWitxmcYqXi4fzydQopzeP1oHTVo3",
  "key48": "4jaWwPdLu9bwF7nLLzCCcFx5VwRD87Tv9C9788ywwkGxdxirmX12KrDCeLWJfcqHTxoGwioZNQJFHcMdth7kiQ5Z",
  "key49": "2caeLSQcn4pwFmoN5ZRz8JTTxhadePmGoPpkvzbZMW631Y6YbMUYxWdkVNB9EvqthB3goCHTR2nT4K5ehFGwCggx"
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
