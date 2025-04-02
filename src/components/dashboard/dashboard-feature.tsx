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
    "4VBUEdE32DSLVKw1aWCzD4mdwiCQLoXLyaMBL1nMF3nc1ms7q56EpwqPwvxmZ9Qx68Xv3gPmFdpeTt98DLdVcLYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLkMznVroiaZuX8BAcxhRs19Tadbm194ceGY5a7r3MKFAES7h3sYgP8a1krR3hNASsKw1PRdp394jrfGSPQPzCG",
  "key1": "3BpqfLrz8htVs8myfZsuNpcFLnixsNcxGY9xZgtTVh9xRUmw9bgbQromkwpEKrapNxJzgqzN2MZpzKKQZ5hDUwrQ",
  "key2": "2qzzzqpeQ7hCbKwuwXazxz6m5WPQP9q2TdFM3VzB6CwwjZjVGKwcuc3WQQMjkescZBKhUdVfRA9g4XYHKp6E2BzL",
  "key3": "5n3h9HNCyEZXBTbrMpi1bbuSevRFWSYeDAkXaXfvCgqV5TQEr7RnMRdMyYYmECMcHtCg85oKa9nxp9Hi6j5Lrxzb",
  "key4": "sTUeH9YndqjLkR4jZBUJwQW1CQR5rhNDpJVNa9we91gqhohxJ6f11v4NifLUyxQ7NAqm3Zxw5tUwi5oXzoXRTen",
  "key5": "2RMChf5YGm96yd4GXMGbCPpLEdrAWnUZHu7o8ijrJurmBGzg1vmzZ6wBwhv5bdKVkYjFrywRyPECWdcu4JQKS6Jf",
  "key6": "33wbiWmGnE9dR8VY6LyyAsyyM9XJA8AbuCCCNsC5SehjhWUSPsRNvc9KV3T7Ma6GpvvHy63Nr1WjZxVPU7xH6cfQ",
  "key7": "5XikaEvdL1KETXU3T9eLXX2orMrAeouvTeuByKBkDe5wrdgWBVMzP6oshVvWREVhE5N2wRxsF24WP8tgobJSCuYJ",
  "key8": "3Q5gdVgpnRx18XFvkNmBz8576vdsnhrdmRhpCUpD2a5fKxHscwKwAJNkgm4bCeerV2V84zyTtf1K1BbTa5S4pH5W",
  "key9": "29yQY7ZZQUtjaHZGV4mk9MrCK5nnnV6oWHjpwvHPXu99S1N7J7t6XJ1UtPMaJoF6uHvTkTrUketF9KboAgZqVNFW",
  "key10": "3nMkMkCHacv3GVKuiqhmoUQkTrxCT9gPwAkoDoUJcca7f6g1ifickxrcPrRGdJzG8y21v8QkkKbeac5PhSgBPNTk",
  "key11": "iP33CQHkXDngR5f1SwQ2kuQn88tUbUtBcesbt4AaAsoHuUhzJKd11MaX5twaochDnaRZtH9y2bZUcbGTR74Ejz8",
  "key12": "56grdEZfrTuDdvxcJxh3QB6RDNZzfyoGDbLmpe1VNTuHWjBEUHBeKx74vaTaPjbwiDh9ShwCSNu9ZpvKQS6768TM",
  "key13": "4NFFbe6nZpQMvpytkQk5fAcAxKvFjxEiarYM7cQHpSSTS76PnQZrBCiW4V5C4iuh1kh6YMvKgqpUr5jnMVaXhnke",
  "key14": "UtscXztv3XBpQ98myHnYZ368A2ej9jq3AdSixVvorFQ1WDaP84tNuHfJiKLV5nsZ5UtgpSrkwaYvK9WyZiZyQGJ",
  "key15": "3ed7gXFne8cBJ5v3DZaPg4HfN29sV7FgbrjuosHweG1q823JvHhbS3HT5e8Ac5Mh2QqNHPoBfZArYM5ghuegEdYT",
  "key16": "5sYn9GJR2eJ4y1hbGVh4De3sktXu29FpbpvGTsLNChC2cZuZGihrp6b1GD53JsMcacY8Bo1Yi2e2Vw5NzG96yabg",
  "key17": "3RKwSfvGxQikoB7AcDKQ1JqhqSYKxV19ygn8dAcuabiy73hgw14poodsViX2Ahunoj3JXmcLToCqukNjdMEFza28",
  "key18": "zfqhPp6u1EqVkHUVN2L4Pot3iKKaYMRbo5Tb9exRrpDYAWCS9Thh8yaXq8dSXGgNuguzP53ifbXWMPMJYJze8aP",
  "key19": "3U55Ahb5yXX5VjGA8hs3qyMTJEoeYa39s9SQ8SsTrkAxwtto1FGiFV9phSE7MuVNgSz4ZBzkuZceHoM8RW9HVKor",
  "key20": "2bSUSrMqFtm1px5Le9Cpip9EHw8tXMJZCKFHLWJC6i5cdJGgboRfkxQyCm9oRRmPQKX4dPFY7EsjJBTKaRs8LHRf",
  "key21": "3yYTULieZbVvzqVwevPEJ7hmpTSd4bcZoBAn7ifwVuJYc8YnGpvV7JMxt4otPkHrNSKqRQLz5CAFvoihrMZPhn3u",
  "key22": "4Ci49GsT6dXFLuHxs3PTA7Bo1WAmtMTsn2Q1WWLMQKJyebs4VKPTf2TYDuWoHob7LFXQYkfryqfSQdQnmPaHkQCF",
  "key23": "4ySQhfbcioA3YyeCD6nepmSupFfi8ix6J5hnvhCyppr8ojQnJPrep8YZWKM4tDCmrVb76qMMEnYdBYU3ddVFYd2N",
  "key24": "2etff4RKr5UQMReAe5nVV1j8Qap4kWVJwTynR6K9ZptjwRZDm3rWA6GQ1de8VRP6xWT3xCrANmzpcZiJc5GfRJJV",
  "key25": "4ntWvFHJ6udWvb8U8KoKun7hYps3xy7WgtBLsGaMXxDNcrekbaP3oonzwpFc1AbKEHCY3rE97i6QPYcYF5vvY9fB",
  "key26": "4Lrw8uQ3DidQhSeyEsJQTAYSXxFe6bKqknHvRzfMX2o8VbcGWGWruab8ctaqfH83jH6jmWnCDfaSCFooRq3bBxJ6",
  "key27": "2fFx94wDCHwyeJ6C2r5syv2Z6gETyPPn1DYGNST5VeWWRvYVZRodDrHozCouCmLkxyG3i7UuH1eWs78K87Nm6Shx",
  "key28": "XGSV2XTQiXe7MFUVy5abpneEXdLqVeY6qGP4cWiQijZnnZeAT9TqDsP1BvkHY3A2XbWebN24S45QEQRhtFYrVDB",
  "key29": "5ox7S1F4ysyrMW1S5a9sC2Wez6J4LHbdUZT2V7XGcSH2oYzjWgT3juPjn8iZ5RQjaHkM89AeKYJG9SKnpZdX1hU8",
  "key30": "4efHSdGzqpA6kUFmfrppuHq5yx7tbiQEJ1WXbtTaweN88BoeM6FdXQjwU5XYjv5mQo1EoGSgKiEKX3xpmqNyGmGM",
  "key31": "3DFPeatHpjDSPfgDjynXVyLMpwH6TTVHxXXkWeKHJrNsdJzdtAknzsRJLCWcAaiBCJLhm6PKCuHdVBgD7RXpbyL4",
  "key32": "3AuZGzKRdUd3kWiXeMPZesn6gPZU1zFDbhLEje3map8sbhEuDuhLeP6NmUJtpdeFnetETdWutTV4pAsjFAqgeTkw",
  "key33": "53MdBo4tqgU7YZLmSHVV6j2vG3DzVYHmjeqiXLZ4DWR8kU854fyev1T7C2SPMWFdDicmPEaWTVx26RHnFZ4rST8d",
  "key34": "4mP3WEKnjsbkJhNRrtXx3cGdj29wu9V3qcFNL5VPajHi6op8pNVQd7MFU1xaWimMxyVHm9A6hjUVZHG7FyoCNcnm",
  "key35": "5TDV46KgHnZ4pfAFef48bideoaP5mZFrczZ6xKfmjTVwpFC4fZh9xMrkCuz48fSFh3C1WFx8sxZ1sk8USGmTtqwC",
  "key36": "4cYC56Le2EobTGr3pZXyvAGJCiotKn2JyGzt7gx7V9i2fSPGn2bpx2HJCDkcmZm6RFoj8xQtqEs6x6FBcDK6NXYo",
  "key37": "3wuNyxbgi3sSc9LrawEU42fNpdCC7AB3XiY2EaBgSGNcv73biYf5ZzjuchPEnxaTTSy9uUw1pyHjXotogn5HHnns",
  "key38": "bwtRDJVHc8HTzFqPddH2Xvd6QKgQYeFBtsMCBZ4FuMfUKvYDbPMJSAkVfepf25Y1RmhaZGsds4NBZc7Pu8gmmyv",
  "key39": "gjwhBVJhoKjT4iwH4XFuCCiXpmEXYG1MtCTBug5LxDiQUve6THqwKFp2tKa5gk9rFio3QyHJddZTLhBn6PzjUYV",
  "key40": "5JVLHZJusn7n5oX8uaZmg5gSudkGTqM3CRTXUdn6XVAVuj9hmMMJZpKBQZzFTygPfDWCLuMCjr8VRKxjwTD99jiq",
  "key41": "42EmJWqg82DoRbcDDAJbJNrT2D7ybvJA4hSgpkJNkDEHLWKjTfTJLU4T4WzFphoLnGSQgBDUisxsbvNf1CxaRCq6",
  "key42": "3EBiQRp9SpZKhdD4F98zhf3wz4xVttP8fPFUEVKa6ax8CHgk2msv5WwWgMpr4xL2iNHoPfvWCS24tBReQ9v3iiGr",
  "key43": "xyEP8hqH73YYe4FVZ96kBkuLrgEA8ZHd1Sk3FAYMp71ykKw6fabSpJmaV2MWVvUcjB4sVxQDgxgHMLisCb1RXEn",
  "key44": "2xJy1pZHEcMStgTtCjopV9Nfof1f9DEJrCsaU43toNAeFoiuSeyo7nGktTfjgMLAPEmXNf9aSPyosyyoYkbDbNBs",
  "key45": "2JwiogpqZADoBpdefmXxjq4D4GRCsxQFbvhHVRbdhWvT1gDtvGNE1f5LyA6EJ4mxL1XH2AsvfvL2HFiCbB3zJfJX",
  "key46": "3kvRt9piLQUfk12CPdf7Cf3hzsBm86wjAgFw5VcxASWPuAgp4XUmzygvByv9o4EnkWkfyqTbx2wdS7Vk4iXKXPMA",
  "key47": "5EzvFtSyDtbKoY5TWC4nmuwhM5LanBwLGXeKLhQxBuaNY9Xx5a8Rgr8r4iCMEAyWmGfYEdnSMvKBgAnVgedkMwcc"
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
