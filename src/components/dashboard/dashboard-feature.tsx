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
    "AtBvMvratRd5FQS4PPZUttep1c6c5Ar9w5G5zutg2gs73ip5sRGLDYEqCSmABAr2BxCEGK4ppeL6Yag2TaYebsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNPeGhEE6SU3DT61nfu21MGW5kcJq9Am5wLLXDgjpne7dkWpHJynDZuYJxmGPVM6kmD1NQdMfRfHR1hskhyCNQk",
  "key1": "62MkEvJU2wqLcDMaScEimpSjvPSWZSgUHqWpPTB8SwhqpgXF2UkovaY5aAiKFV8PDvEWXU2yHu5nH3wPJhdFxtsU",
  "key2": "597srg3nKrpb6L1FyspLza2bjs8agCPNnGpuyESWL1QPmnLtLGXwup7s2bnAm2Eo6Js5UncyeoBVYsaK3zy2mCnT",
  "key3": "2gCifg9r7jPaJCRHPWf3wHoZ8tEEdqfDg7U48JxKyUCHbPNM9kiVGDAuBy9qGzTUjUwLLeCvU6Eg7Cq6bkai9H6k",
  "key4": "4E9sPpKYxW1y8dfqLG65QBXbnDq5eN124S5X2bW19DyBnknaATiNr72gQZMmAcGatZAdx9uH3cpUp8R3p1qKfpGM",
  "key5": "4DSR1r72NHX3JfMD6v5Gonczwt8iE2Fm5wkdxJ4Gu4HVxu8jLmaanPkgeRqESEA7EkrTNMpU5KMQQhpABTwNh23F",
  "key6": "3sgeFUsiGjWvV6uiBa7dzB662aN7KYMQaQkpjkNs98UHjBNbCXU1YBjmbsxNqjQLscicT4XkuHiUz2wrR2zsDd4X",
  "key7": "5fK2kXvLqretWxJU7XWm951sdxv4V8e4RqvfCv5MfRS1dcNFyEoDNrEyedW2UvAFSoMpQejVJdMHMqzeWnMRAxR7",
  "key8": "6tDjgkQRmsjruaevPUh6AgxNnAGvVNaQSP9cTWjeHzdBKnaub9T8dFCgWJJw8Vobi9hnUKVLQeKEidUcfyxvHdA",
  "key9": "9qzXzdNGyxnKCWy3oBXxKSGFgg2UKFp8FtuGq5nqUDKv7kXXqsd1eauSAV53MQKVNVugoGjAxqPW9WfuUpWaKbK",
  "key10": "3tt71eUBbpQW1hPXX58mxNf8NdjcqjkMGAPJ9AEorpoPphJeFnSzVH8os2R1WzMrMLCtgE7y1ronAbbFgtHnxejJ",
  "key11": "3pDAU4mHV8o6G6YMohEYdsQKyPPJapm1PpDrMQUr46yntgvrSge2DgfzL9DsxjPVdikLmuvSLpd5L8crLPcfKFYK",
  "key12": "4HLeGw76yGdkmiszqGdB8ByxnpePmfJtEsEpMPCEUD8R5LLzLffhdWYRUzTF29htNJ1wr2mTyiRpZUBaRxK5dy8d",
  "key13": "5r6ejEFH1wW4h5ZZz6wzV1Xw6tDG4949GCsgjLddGW5S7sv2pyuCBX6TSvMfjWUUcj8YnNiBfUCtn6a7DznNxRLy",
  "key14": "5Hmb8YeGNKxNvmEynwSrhS9Q1omRbjiJ7veNghKe1Ziw5XkBXgXd7ENfFwu6dUSJse3URRSTxtyhNfQsSELuXJh2",
  "key15": "2CZchiSbc4GEQSnne7zqZMQ4Xkrm8Ee8xHeUS5K86sj2gXJ9x17c4p84tSgUpcfFAsukRaCuQj2yszUZhCR8vFjY",
  "key16": "SodnrbgFUpLdFQ7UwMXqxGGMtS9AmGj64uewLmZwsrKKH4TXL8yzZ5CWKqfDcPZtphubzrb3oXXKNuvfjGuF5LB",
  "key17": "24EPJhQygjy84rigd4TESiUoRffMNGStxaZGkmnX9FX8W4CR5o6Cx6saCAz22mh9zZjrT7mTteVwQjR1Fdavxh1h",
  "key18": "4BREtuNovvxn82HgodB5gtcDDQTdrYdjTBYUDwgTL4QB5fvPz71WT7BYConPzjf3pFbQgf1d6gGpM2F9pKJfX1UW",
  "key19": "3K65ENNmLxn9Pqauk6Pd7QofXiDfpn76VoT3qPXqmmULhavd8mXRSPpJEEPvPpBdtUM89MhycRKZ15sLPQbRg88K",
  "key20": "4CoKP58J7znUyyUU8A3d49bajrAR1DVpeUo78Ur6BTN67Uara82UDXZzeiNxjCZi7an6x7TA79MtqsNEfGTfnqz8",
  "key21": "2awcWR52xKu7PmiKoRinrDGYNBTd95EHzHWDbcmsHoS1Hgtjphkwyo7GWVipBe81KjqXsRqJodsCnuinyuTbzi8t",
  "key22": "4r3xAXdJm6TUdP4mjuVPZKTU6hPskHiG4gaKRvLRbNj5WCjLQMkvV1HeoDTidSgRyj4dCRxNavhmoGcCihxJbe83",
  "key23": "4YUcd7RcSe7vs6kyoHrh8rRixzZpqSXicxeN73bKWHueR8zVtyFf9tWq5CTvJjQqJW1omnz5VTA1RvgY52j4M1Ds",
  "key24": "54AcpTVuHqaGxKfbW8ogotEQSJyjzQL9MC3MMmp5NfTanXBADjYko3R8ZVbTr8mgs26hhAybFcLMoyoCiGaVT496",
  "key25": "3J9zxqSum3ZWDckEccPqasQsoRUzKBquzo6UbHmNwTYFJvDdJVst7FuzZ2vZdmwPoZ5aB9yEBybYBQsS6w7ESdZ1",
  "key26": "4Zwmi5PEnVPau77Yb3TCx1DGZibZvEvpqhHhTDb8XbQjtLpFJgz37iJE8eMEBou2TsgjZtbp2pNkCSEdqKBWPkde",
  "key27": "pAQMHHmFrEH2zLVUSX17Qtb6v1xDDScPr2a2A4XGNL444jgPYhZKLckksTUBrEK8MWn6DhL9iLpxY86biW3avWH",
  "key28": "67j9t21syXQkNjJGt9VYE5a44Yg9p9x4jAyxE8QjJougxuBHLbutPg97mHBr9e2FG5A4BsB9AkwwDqBbxuC2Y42E",
  "key29": "5JNXRMyvkBVhXNBzN8u9DkNv435UDRPk4979E8se5stupHGvXC9pbWobFCo4DN4VkWH6Ng3EKiuVWGeGkdHUoNDP",
  "key30": "2KenJ1nihQsWxBi3GVurUAjVMNemmjq6Bx4c2dPB7VTU5GJ5zUjkRNxsQ1yP2AadfB7wv8CaQPehnkK6YqiouZgL",
  "key31": "5DiXo6G3pUpXsNtRnuMhSF9aF86sHGeH5haze9fNFdYVkEk2PVM3o6M9F9vzcK1AXYUTxhX9qNhkzrFpMw2QZRDB",
  "key32": "44untfDtAcUwCXXRomY6r7WmixMr8W13g89ouWuPwnGxhTDjFTsbnwZFibHXXVfogetYyDjnF4G7r4RnrhLQzPoj",
  "key33": "2xCaYTEkGfSLbYBvxQobzVTxm9xmT86u2NJrxy5sp5DuMAJkRm5Gkh3DH9kmVvVPLe3do7h4VRzYdCSrnnzPEESf",
  "key34": "36sbsVU7H7acHrwrogNp9oYRBTYbRmm1QTjJVk5YakExCqKh6DiHfm5cDgGE85fKTFKTifF7TSpZ9cd4MT3qWZt",
  "key35": "3nQv8USTBeQ3JJP95fRDhv2gAjhqnxhJtEFgxKTdA3N6u5T3wABvAxEE71wZppfbFVLbUwG6Ww8obuqYhf62myKz",
  "key36": "5Y77x5mxDkLPhdn4JRwFt6Eq1K2KwjDikHbhgW5iM8RiEJA1dzMtptEQgeXqz3Yz9n8dGTQ2eLMfZhdzf5csngn2",
  "key37": "ZRwmuGYEuukqHicAQQ4oLRBDdQmf7P7a1tPVcKYh8K9KZdy4uDkiYmvbxaSKn69FqCMjqwwoFiKGEXenC195PD1",
  "key38": "2cAwT7FEzZ3vwGnKSRpX5ApXg4QZSzCKzMeWb7n5qhWwvCXQUNkBzxZpDYEACCPbT1xiy2FLmCJ2WwtC8GprmK3n",
  "key39": "3Zs2QDwJf9RsENhTgZP7jmTcRjxyACsXkkmJ3KN29sdXZW4VGhVvycQ8ADG1Vx9v6C7CV1xWzU5gVFEDbeGNvYUM",
  "key40": "4Sd6oeF35SSVNnvabYGvS5W6xfdXZssy81pMVT43kvSBJUor6bnxuXZyPUVxydF7Qs6U1V3oL1BMc68DDoi4tX3t",
  "key41": "33yuzSjSH9Fsst6dGT1v5Wg122ufJhLQjk1ZMCvEh8ZQM4hB6s6b2KD6MKf2sTcpfjuiCH1VzEJDxKFfWccVZJP8",
  "key42": "5ZfsFcfAhBvt9RTC6wN7RDHzqRTacBbmqHcdE3gAAqviGSwKBMczAHygqPai489ortg6KfQXAy56bjSPJZsxL3Qa",
  "key43": "5Y1qC3Mn4GfwGMRFj47uphAWAduk3M8Z9LUp3WpbMUTpp4tmXTZBqV8yR34obtxgu5tiwcBuw3mYV7zA7N1EhSox",
  "key44": "2rmJCK3twBpbbiknsVwk7fPMacYBFMCGYXnvQCHeXayuW6ScN2p5wxz3EdtfzLG6eUcBGij179pFxXbUkHRCaUCm",
  "key45": "4WLsQmhbxpyP1APNH81B9KnqU9z5WhhEx15V4k3WV6ipUqdQtGnRrdR2oj48FPXJyyQozQQfTUGGzK1x8RiffSg4",
  "key46": "3P6uho267yZyZ62DmCrm4XVVK422Ej79FvixNLScWCcNAg14pb3RUup6kHwg6YPkoufaLVQ12LPeXiAHFqgsJvjy",
  "key47": "62wpTsRhRLDXgPBV2mnqASWq6ZsrSvYBThEKjzjQqsZvyHZJSF7yi8HdZ7XWhU8vpPsUF4hVhfA6u7zGei44dBCC",
  "key48": "2SYScfma9tKVCr4NLESsVbkvdcm2ZyYjU8EydLEHDBdTeAYonhpB6utB9ajKmmHPraMGXDqQJnv4TntfxNB8wQXb"
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
