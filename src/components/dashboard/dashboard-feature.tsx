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
    "NtL3qJ4hq1r64aKzsrrYprGacHPfmemDA4VCZckUrWwY8Wv34LVDrNPZCpNJrV6G3Du6aYdXQMNQmRT42eEUaP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dk1ixW6QqJPArTVUtSbV3fpHFbfwD3F5Jv8jLEYN121xHHtn7JNAQyF3NwNk45KELcS5bEXmZgMa16Qt6emsbzA",
  "key1": "5BSUai45dM7WihE4MapqcNSWU4Y5ScxQNoscL18vmYCoHVXgXgdzJJpD1WTB28WH4j577U6ormAfxu79wY247VQ9",
  "key2": "gYPBzVngm3V4HnE1FLm9MZgDbhm2zraHcHJibQW7i4QX4RewbvPfzweeWxsQFzYdyVhKHcVRCHhfJoa9jLiPCGJ",
  "key3": "56b9sDucouikrtFM2WFyc8LiKcSMnvHH36VXFsaFag5g9wTjvyfGY7mW9Nu5mdViCWWVwrNbFKYufMYH87sCV7TE",
  "key4": "3qxEaZbuYkGdsqQ6qzbMZVa2WZn42cc4yUg97ugjok3H7tvzBZrxUyY2SyHcR8dPNzEgiv8AESHhHshVKubrikEH",
  "key5": "4yt7hKaX1i3edXzRyj8WrqidSK7wFUCwkxj6kBgzyqGfPyD6qfEEFzQQcpGdCSGnxYiZBSkXHpZG677NhJhveuA3",
  "key6": "5hQ8SUt7rcLswM2sEPE2BYd84qDt5JrrWf5nptF3xSvCZuC35EggF6HiT3xAK58v3j7ZawSGEcUbNYEfqmfz5B44",
  "key7": "4qRm5sdgmTs2gkUsjP7wxEDumNrH2d42MyzFgadmPV5ffFVzA6oREMFLcZExCK4dbQtYAGuFQZH5VmjXhNC9CBr",
  "key8": "LW7cukZTzFhzcWt7YRN476xNDPbTQkc6hWpa5TTpGqFVMWoJUTXACMgARDjpvjmRQXaAKyLAqum7PwzmaoJdypU",
  "key9": "4hobQdrBzy93umpwrQVj3U6tf95fa5ZMbFVBEmXAbhU561ZeYW5737giXw4FvntEP14DwGcCYur7tfAt7PHrGU3N",
  "key10": "uENSemR6f4ZrSbgEeWLXx8ZNaj54cMaEop57AmwQDPkVKyKaJ5EFz4Ekjq9VXQbLhre5TDEs9fYahSZJQTpadAE",
  "key11": "2RcaUCHg7pRXFzbyYh2YuuJLdH2ahkAsbsNKA6Ttm9dV8WwU8pr1ra4WCfRqAEfadDy5nCSQhHYVKBUyE5EXZPF6",
  "key12": "2zHdXcAUS29pxmx2XiScRSgoBSVAF9DeuSMsrh4MFois4684Vc2kvWB7keXKFSeJhSnbuMUeStfiqoNuTecSMCAy",
  "key13": "44sBGU6B8LPQzUH62QRTUVsR1nciHRGBU1LBL2gFPnzKCJ9mT7H9P9zE9nYFtVtDhytA9du2j8d2RqBDKTbn6R1D",
  "key14": "3CpBdoNKQDs3gRte2seZtTvSY9rY2yyY4BXXzcJkvbZMM9X1gvDZshx8PaKvLAhg3JvrpZGCR1Ez9j83ZErLhQQS",
  "key15": "vrJ6nakgGm8mBv7gPpEHWM4uNMfAZbTjhow2ATaab63t7UWhwWkBzSQcaNzz2zrZkJJpueNNbKmEs3Ua7dsNUqP",
  "key16": "XPnYgCMaAjGMq1mbhSpgzV6fvPV9CubkufjF4URRGSyesJS8dzMjsVDYvULZgqQkq5JsFMDn2RebZVEyrTgJvTP",
  "key17": "2qjoCja2uG3izuNnbxh9aX4AFh5gqQwH2bchN8x4r8GigrKWL7n4qx1MFVM8TAQcQxgZN6WkLjhxTXg2xMrzN9Ve",
  "key18": "2Sj9tSYoktcT8TVXg6MbnJJk2ke26nxgrLPxnas7kqWA4xe2Zaj6MdkTzbDTnT9npzhW5aLSPuFQMvY1NgauXLuh",
  "key19": "5Eb7m2ot8nB72RX21N8WLzkajDAe7smmNaNww2F6uczU5hRT2VsN4eteXVZmZPsCRgSu8FdpuGMrgZPo7WYGDmT3",
  "key20": "2gfuiFCho4hb8H839vKHduJCGsGe5zfDcUiTJYTwJELcFr3U61r9XfJ8PiDtQn2sivHbWS8erQpTvphnfBXYLZLp",
  "key21": "5zPaMDSKSQVK3RNkGnUypPikFs8T8RkPEXvakhVEo3Q3ZMARLger43HJMHpBCHFLzgSJfJaDFWGt8YMkGCFdkCQp",
  "key22": "4MjJsY6taj8DpHn2mybxxZUg4mDUAKX6MHkvvqSNhypn98J1dzdwU9faxLmBBPdjHn5pZJxV4cFVu6A8RvqJcUj",
  "key23": "KssqReZQ9KMv4oNYeytRxJ3666nzY4JdnKcyhkzThimMQot1aJSmo93pkDudQaivR8wdVV8aTXWS26KDx1jy2Bm",
  "key24": "5QA5Tr5kkrfkfpkWR4HezE6J12GNT1j8R97PoDbtUNMMTYKkYyVeJtVUFQmGPNnNdamjJN3TmQ7AntbECZwANgNa",
  "key25": "2wa6cKgd4i1smgVdYEs4HdwT1e7ifrJEgcmRdaDQhycf76E4sq6edFo1uhkPS3jKzV5nLM72vwFFHZ988kse4EPM",
  "key26": "2HdFagc1q4CLEqaahK3k9KaLC7oqbfv6reggQLdbf8nGMHbfR4xfrTJp1R1ge1qNrxbhHfXKfjg4dcUpdSMizVKd",
  "key27": "HAkGtdfSX2jbtLghS5KN4LVLcMMvkyzkU3jeotS5tBdbmaaQRZ64peJNb3KfspS5knJkkQ9Ht6ykhFeAbPLMPq5",
  "key28": "51BvK1XaM3dPD1Ksey4B6qaqToKu4qLrR19jsvhVVWaFpwrt9zQAAfhJ1uNkWKpoYWspGv8bjxFSK4Zx9nowCeKx",
  "key29": "25GTBvum31NzVHfksAS9oWE9qHogi6HyJwz4jezxvTDwbUoVwBNXyT26uVbfBZuHwJMiBFM4SfGSbS5AAe3affsC",
  "key30": "3ivhewTDC4pq6hRtSUHoToHpq3QyD54qxwCpMEqpEPzyPsAU2JUTRWtRY7CKxsjXTQVPx7xPaTsJvbeNs1oCNNwc",
  "key31": "3vDQyiMgoFbpH7dGUZ78kdG5juk4cywx5BfMFkNC69kZyt21TqksEqwNS4i6uoMZbtRaFQ7tgqQaQry44EYejeY5",
  "key32": "Q2KFADTmgoTHEt78vdHyKQHLFnfiiubMhuHv7NL59Sq4ku7vq2xfjc9YDadHMbxgWfNsTCCr5ybHE62gU17Q7mG",
  "key33": "2XksFHgPnqzH9uG4qs7yoUbNuPTTxUCoGonDQfwmzpAWQGkRMfuz3yBU34KnSFVYma8gZwHcZ5p1ipmZkzR3XwtV",
  "key34": "4jSTuPb2NAGrAGW61ohFy3n6ShvBRG7jtLQoUedf7DCQ3Sv5fc6m6uopFCnS1ntiSoasmoNfnY2hecjdTUa9xHr",
  "key35": "5sfK3h7V4VKruCfA8RMAh6aWjVH4RFCiCCgensuRYttBrkq5YTAJChpBAp1zQxdtRdnQK96FtnEsGgce35aczFF6",
  "key36": "4S3aj9cKJJxX6QnWJbPngASxS86KfmtLSZerVvbBWrHbsfx8bcFbsFY84HDXrMMFoHkwaNjJPguWmvMjBM5cfECa",
  "key37": "64zXhTL2fu73zK4PnneenCYn7FPq4T34HsTgZHctxUpwzXqZ8r2hnWcXVixs5kueyrAQk9Cni8s6Ei7uwNK9xBRz",
  "key38": "wRGEpHTzFTXs67uF2fgSsPh5RdpvxB81piXnD1qWAVZZyX49pkrJpTHUEYNDTPow53VBHYz4DULQY9phqUtw8De",
  "key39": "3Kw1rcUQvD6Yiv5wUW4V5RjQsJN74XEojNk6NAq55zvewLFvFfvcGsFaJGsx9m6FfBZF5WjfDdyrFuMh8zC5pbvT",
  "key40": "28xgR2EeV86Wbrj58NMRToJzhytk5PLzXjCw77kS36rkafTjzzLzf3zgnrCDUQAjWdCc9et9h3Bi2fqg3VWBXJFG",
  "key41": "391Umw2p1idsRtwtmZrPkEcLLQhgbwkdeXFsHuda2ZnoKjasQHPTj3vgTKraEnGsuCXCoLnAhKSz2FA5QttDMKL7",
  "key42": "3cputihwN8z6twrpoq7pxEDSdxXNu5Jdx42n4wS9fTYpB8fb5wefMpPaqQKKGb4wVKyWEfeHZJC1oaj9zbDB3Qjb",
  "key43": "66un9C2e4gvcE2J4qh5jTqVVM7vujNWr4UtVxDGFa3gMi3jqybFF7PfBRa2HC3SzRCFQi8SDCUid3kJvtw4jy2pr",
  "key44": "5Juot88kymurp9jz1LFnBsSMwQsXnqVfL5qk5XXGWMiwR2So2tvkKVWYqVpeWiHUr4TvRnMBzyg4kCcqeUMM43GJ",
  "key45": "5eDmnNH4RPshSfFsHuCsQ2tsWqDarKYSM7xvGFRszbpiDvL3CvP2SiLQ9yF1jKP2uLpvuNwGsniZDF8u4hafF3X7",
  "key46": "539yMgdmHPxawVLeBsGMnEWj6vsw43hvKurRmj2oWetj8T3FLoTpRWkSNbMFBwk3svHGoftjcdgja6EAXipR4TMZ",
  "key47": "4RtXVkQn11VSMm78J7x2jGU3r8Dyx88roEkpbLkQ2jw9whDuc6GZTobYC517xWfpiyQbdyoqEz99mWw2R6Mw1xNg",
  "key48": "4rAxJS1an2ap4PcRiZ5eezEdDZVPrCEGQrCdv59fMtpsURm3suSxcCyPo8rLS1EZU8MaX45MqAhwuYrE1QDQeBS6",
  "key49": "UBY7kBSLAYbUFPkhhdA1ABKKfDgX1uNXa9YFxXzwieJ2eUSttvHtZP6tWodknWo7HpYvxwNoabYAjGVaJTtpdsF"
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
