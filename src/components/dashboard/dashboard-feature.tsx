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
    "2bi8kuzr4ZVpTEFPx9RfsiGmp6twxoiPiLsCRJ3dNqR6ggXxH6YHpVEt9r1EGUwf6XMFwGF3qRP3H2E4Yg2kZutv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kV3xAtukYfVxcxfBodRVSakKf9LEzpYwELuSN192niJnAxAiKT68Fu5M1aTckrg1dozPYa6hvz6oBG4ZQfonpFa",
  "key1": "2NtDMvfZBJcg1Ah63EEw9PAWuF2CyWnQHwn7cbrYRK7DFYJGLA4dwwyvcvMFUDRLN44haYU69kJajZis3h7zjcFD",
  "key2": "4RHSJxu8ma9NU6bzuHP7tywnYKQiVjxygouR4nftFCkHQL8TWk7dqsHdt6j7jsPku3AD4V39RjBGMq4kU4eaLfnj",
  "key3": "3JiSocE9p98MPJcGhck5nw7suafJGoBo16H4MtVhAT1TWpPM9kXNgVsU66wcDUPNDza7h7HTr6mhuNF9CMLGtRAY",
  "key4": "5awidejL3XKuKZDwX5Va4fYamKCywfpjUUH1qkTXfGHKRjdPLzUsTYcZNbbQdq4safX1WA5J8Gi8FhAxrpNbnaTW",
  "key5": "46cJvsPnxrx7qg5jYkEc2i5go1xV4vovFWZaus2ZbhCc6Kd72QaFMfzT9dnr9BotnB3MmJQir7xD64vvoXiUMqYb",
  "key6": "2pc7gg9uryRSJDP1i8gABh6sCrnHbP3LED9UC7sQ3povpFtKJrN6be6MkTQDEHXFScn54C1TirRXAe2Uv2x4GBbr",
  "key7": "5Kjv4qmPRj8CGh2AnYaBeWwQqyrxdybJg6ZmCJpE1NYaAFY6ChWZBVxScTHTYmZosf4icGeJEFX5v6SW57KEDHgL",
  "key8": "37x3Z5WLniCZmaoBvqC8dyqxG66WmHioRauXG1wEzzQECmfS31XJDExpKU751cAj8MLZBZmr8sM7jcNTydMEPHQT",
  "key9": "3ueKBpRdwAjRB8hHFPscmwtFwJT9NeerxN8ccsbjLUR2haA6iZdebsYvs4W8aPEa5ScXMonHQvRi4yYfDbUqbQuk",
  "key10": "xSLeiTbTfaJE2SpG3YYmx9karNYEzvHRu2Pz99fATEMxPdGj4Uqdx8umqsj9Ez59EHjfEeySTULuvyvHLZHVvFq",
  "key11": "2r2SP3tiMTkZ27egwzpyjRLUWNuqT8u46VNArMXij8iSLgNRUknJM4jA98Fdou343RJy5uDXUdQNDyj4gEnGQGQB",
  "key12": "QhCUo1Jf4Xq2ZwkaiG448Ah4uRWobJBEEhxeSXWNMXn6HDutx94YdfzrSq6rcN9Aj9MqJYW7mj3JPwFv6e8xKY1",
  "key13": "3tVHPi36iDAZeqirzgMErpeWxuYzyNBb2fZ3u3oET5Lq8mXpnUMBTHeiGyM8ShGSkpa3mJY632pwiY6eHJwsvRdo",
  "key14": "49sSAdeKyAvu6q9v64uPJ7bS5m96mvwhDeoWBeU5kHnLFWymiqyyh8nAtXgdjXVnKDSK119VzC8syrrPNRx3iMFs",
  "key15": "5MbhLpnhzWahisuVZS7jwpFsHsNTsybZfPAnCoRc8K2AxZ9R5gM2YJwmWtmVYcyHHhpQrRaKMLURy823cRp1YNy",
  "key16": "5PMoLWzm9TXkkfuv7w4Dc9yC1vciVuwW5x6ELRA61gsHDsU33S7oik3pxiZgweYGqyWdGr1VW5QLnpbMpxvkf1er",
  "key17": "iFHbj6bF45zGUsxMEDc9oiriKvkjSdz1zJvRebJftpuqrPBMz2mRqGa2GuM1AFppiR4QswqmJECjfBm7goh5s52",
  "key18": "3veGK72BbNXA7rWf8kZRj2K89Ec1GrXMvVKLKMVbG5aYKMt7W3UiNkm7vSkQQVMQn5w85sYT2yEZi37xdBcVPuAG",
  "key19": "4ENo9jeBm8iptTkNAudkRyN9DY9AXrx9ZjBi4pfTxqYUabzEigNrZ4F78kei7uy7KPaTN2eLF9vpPhXV1FY621Ed",
  "key20": "4xHh86H21yTrbUd7PvuEsuBjpCUwTpFjH18wCftjmExWvv4GvFWEoiRsLB6wUyMYpCaPEz2UjYSZkQ8oK2FrbzR4",
  "key21": "5qfS73SfqQHEyaFTochJ1grMhceX2qpQGbzH5CWFXS5qoQpNifug1ht2xRtbiv8k9AJUUNLoo9KcqXA11JfVp1RM",
  "key22": "4jL5WWUBhHcyRzj3mXHXCbNDcrLZ5pyjVMRigAnr4aVDsCAcxmc1JvaZHRGfk87s9ohgZ86zyvgjs1pr1m7waqyz",
  "key23": "5pic3rhCCXfJqXi976qHfH6geuKfkZsiVTiy5DV2y3xfLEZKmDwXtFTvvvaCtbNuZWT2v46NzDDkyYjyDapX76YB",
  "key24": "2RDdfYQ9csH99vU8xngw9svE1FkPwyS1bSpCFPrNCMQ5EYYZ6fJJ2RgXCvSCVeEoZsptSSqpdijKVJg6cEg16vMG",
  "key25": "3JdqE3YTU4maa5qbRSEKi1rUbwfxre5tZXBKnzz4wf2gsLM3WVE8NZqqTMqJsve5gk9oyaKyTv4jDLgNwobPaYAc",
  "key26": "635CKbmX9roSJhCw63Ddfr6hqWq6twXNjYkTWVCW5tVYQtME77riPMYwB3zhadbFtqbFRneZpxNL1zaxBSThdZSu",
  "key27": "4TaHDswzyXLDN6db1DbRTnfVLr3mo3t9iQsaVhTMVpWFkQHub7cvXBJY8no8aM1DGwasaTMhjs9VnU2GHqhtsEov",
  "key28": "72WojGqQHsUv2WHiaUT9cDxn54kYzcLH1SkAyR2rDiBUghHkqv7r5QDMusAdZbppGRATrNzzvEZYK6hWPdFPfv1",
  "key29": "dbiw6PzT7XhWDsRhcadyX1oNKVkfpGKmhhbTTqi97bCNL74izDZu4STQgk9TreQemF1hNGVLT928HLS4USyCo6Q",
  "key30": "3QJLvnTUCpDCCPp1vbMZWh1MeXRqYrnXbwo1MYa2QvaR7hxW5wY1bW3xgR9vLfTznGc1RixuvoZU9BbtD1VsWiiq",
  "key31": "3hdtumu4aN59BGpWm1ztZRxQAd3hEEdTVedKxBDjhYaSJkiZrzr2oZub4D6cG9o2eENpbWa7J82fakbBrxpB6AcF",
  "key32": "2T4nrEFBVtZnp8QiG5eHo9xkqjidh5xq8zQPJyDQgx4XAstrbeu8D3fM7MfNmotTnLSp1DMT1TGMQ6jYG2Pfg397",
  "key33": "3Y35uLNeNPajrCiMxwzE9wyP4NTJXL2xeYyJ1S7wChdxNFrofqd5VXNVu3VWHNaiSX94hFcDGXo6ywGt519pDe46",
  "key34": "5N6JxN5dLs8V57VFoBG2uAQv9YtYmDmuiWt3Dhf6i9SXrgwYDnGM3ZNvUCSf5V4Ri3k9tnakXVN2gBws474zmUc3",
  "key35": "3DK6fnX1BWYRAbZ6Whrpvpn7wThHQugPKfEzsXS214aEUzaBWnBRd2FfyXMWhFEuUax42taTSgHeaoB94GycyNV",
  "key36": "3b7T53NHHq55VmSzvvzYVjWeAcv17aXarFyFX4j4YZMyqSWnBob59KUMAMBfGC8p6cDD2GjSpQSmEddPbC3p1ZBv",
  "key37": "5eSc9H9nrVtkiwPwVZHwSdQ66qsKfvUaex8VoPzqo59XE1pthpng3a7fnYFMpYBTnr1Q6ymZ6sPTKPLyT4GkixEv",
  "key38": "2UVyhXRYgS3sd8GmJQ7cDsY6oPgPZqVqyX36Vf46yaifPansyAC8RDwhtCksV5VryBLzkkze7dUtJYcH91sazuCf",
  "key39": "5pLGxCQbSTmrJALpAh3dg4bPE5WdTFKcTDYaQzQwWzoyoiZLsgPj2MPusX9BAqu3em2W11R5HM5CDfy94NtKVDjY",
  "key40": "4YQTi4mDYsuA7omvk76fLMAUXEQAK52nfy6bbtDXBQVLhvzNg5XGQnoJ4us9F48javE7r8WR6q6pShkB47HQQsgH",
  "key41": "vfjnoE35BE1n2SZYDHFjRaJAKUM7TssNRX5ZZPqs8isXjjNM8fMgwVWxAWg3pHfcjPcU6tNSifaAbhcj94YXwG5",
  "key42": "38eG4f2z25x6sEkwBkydistKRzZLF7icWgALXg3xZBARoa1jGUdbdrcdcaBrGEvaVwUSSakXwqTMCa4GXrK2r9nn",
  "key43": "LXgngmDpK8KvXtfaLVQvE1v5d91rK29JV9AG95E37FbqzXFT64Duom1sHkS7KkQwjLstVzJ2VQrr9F89HrpyXCv",
  "key44": "475pd81ZDGGV5J1ws7zcHBFHvjqqWUbRo2tJwPytp1HWbRJmb1jWtmPCmk68bkscbgUeZQRqvqGMvtyj2pEDngRf",
  "key45": "22mZwvsATTovmQhkaZHkvaXcD2jmQBaHXEcYnMdCUGVn6gpx4z6TvezPwCN2vPEziqajtfMoraEBKhXfLutgCHPM",
  "key46": "31NPK8RKLTUni6zskNk2daPrnFDKKCJyuvjTA85uaNZxzo8yhp8QJhV9tXDbZtf6Ukv5H6PAZHLguHhJZmzjJ3MS",
  "key47": "3hiVnUyd3ccLwoUQn7RCcAroZ3JFaA6ZhkgHZMFAfJwak6RsJ9HEAx6caHti7LGSckYdvtgtVeu3b6R59fMEZSAY"
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
