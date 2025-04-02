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
    "3XKvHMtVEbKBT7NJd4VxF4ubFZdg2h1py57TvLtxLheCcjT1Aa3Es2tof5KWLBdmYBhT4ZLsDDQP2Hvzr2FtJkNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3od9BJNMtCKQRgMrsi98Fiv58PqNUANjVGM7h6pWYK7JAVgqsKSZ1heYdM1zqf3RGUKTfCGU9wxDfho4J2Q9j9rP",
  "key1": "5v18fjcyvnyc4Mkq4Lb6vvTBSW9ym3inLhUMthz5yVJrEQAmqJL7ss1CF5dxKbXK2KvA9XHzrb1VKyFEqXiDZijY",
  "key2": "3szZKfVVyYDtt2oQqWChN7yk9kZGBvsmiW3c9LtmtLTZ1EZokrUuXhDKDBvnA48KVvPomYa3S9WBV6uv5mGNvkTv",
  "key3": "s1kxepMpqMk6NjQMMGWGFKPenuunx1bPub5CbsnHjj9er6PkARwWTz5nxEuDvhWzd3r5aTzp3WVjxzfv7UAZnCq",
  "key4": "4iCW8ZRZbEWoMaPgw1BYLHz3NrivTbTofN2bZk7KSYpcVJ752CrQKjJiscU5ZrYaLSHcv2wfL4cdh4kR1RfxogCK",
  "key5": "59i25DGpkt61USfTLwhrZhVF14qe2vjWWJdF3gvDMbdHWx9jRjmyWbwH6ammemzx5JXbvVM1gBRi7cDRMkQEHppz",
  "key6": "BiKCpydCqcZJr6ppFWGhDarWDHpqXggVzHoB8VhQcyHMo5iTBaSKbVvV68giRrzmvkaowAzU6nsE9qowfgS77xA",
  "key7": "3Lcys1xKXXsvZTFwqABuCuVeLmESRJxEzEzwr1GGqsF5N5w3uQhvEkW1cbeaD6p42bE337axN6pV2SKX6JSLwA1r",
  "key8": "3dQeNrthmfo3mrH6ErQPzYKKfq3cVtdj7vXudXRJq2xatjfsusc3G2BsTJCyEPckiK8TeFc5DHqbBSijMPQ8gnBm",
  "key9": "5sohKACfKqeVngqASrVk5Dwv9ysF9LRaWE19zPpXLjdP2STE1aKgTX6ZUWN9t5Eum3jA8E9NtLAn6EVNpHC9cNn",
  "key10": "6fGPGPkGjbe2LWbotn2GxSnYrYaxRBv485ogjP4KBzm96uhg9m2c4VDZe6KFxmXvVeyg9tGCSyHM6YDxBzofoHS",
  "key11": "57ntaGeXebHQj1xBE87CT1XGEGkm9Ad95iN6vWiwjPcmXBB7N7yVDAuTK4LV5yB29vNT5ywU6jCM5JxuYK81yMP3",
  "key12": "349xSd8MXtyJQP765k86z54X16gnVdjMEpQUyJ2P611c9MVPXoRndo98ofxv4Uiu8RXVc1WXgaWNTtbYj5LvXr4j",
  "key13": "ZD6zrkcdcta3uH1N4NTRxi8jkkwUgNuo1AVT1ZqtxSjunNSANjYBjUwG1TGetZMyaaMB9VPo2ZNWGPLTr2iRYY6",
  "key14": "2LygjANUSas5XKkfbVcJcoDuoqgZuQfpsNMb8E8RnSckFYFiqTzjL7s5rsRJMpWccgjNDdme3WvL49KQR72kDh2H",
  "key15": "5CKCgzWnBRy8sgNit9W9KCFUnrMfNL1DPfZVgHPZCM5N3HzPmAznjaXG5mEVRxDeU2rkCfPYhELCR87kNqKzuKz3",
  "key16": "3SpdAKpsnmP74KPCucDjM2VoZXytUUsRCubWM3FWFWZdckcG9KccEEb5zHhSXrofM1PVibaXygjoqEh4EHcs8UoA",
  "key17": "Yq7dKZBh29VB9tR48iHRR2C7Fdxp7i8e3seuhGtRcpqf3YFPw3QFwXCPpanYSEhAJYcwe5cNVUoZHEt67hV52qY",
  "key18": "5iXsWK2CqpggM7hmE9B2UqR5EqA6artre57SFRJXi2khMQwM4TfUDAa2RAZFr6TaY2sQGACwxWqLm8DF6Q89WZ5t",
  "key19": "3ueJ5Kg65MGVrhnVLRXeZGzsD36oAPGBp65DANVs3w9wM3tZP121jhNqzytR9C9GgwbwLp5xhKmF3XaYxSK141Bp",
  "key20": "2kYmGsznEn9yNksraUYAuWssqFiRSTuACqCJ2MNAM2vFJraZZwevDWsjy7KvqrpvAR8ELrBvoQaWiJUS2krT6XHA",
  "key21": "5A4cyqdrCmh488ffKXHCw6ehXcsaG7vJgmcj1KB5JSY85sknsbHG2eL6Bxrny6VEiRGdyMmU9qWQyoWNPAMQC1ww",
  "key22": "4rsFMnCL3emgWZd1stGCJA9yfUeEB6rjT4iQh27DNgA6U1xRxY76aifyybXszCmUChQREobo6LihwdcPkVWbm44e",
  "key23": "4EXuDmFssztUfKutNNUxW4j5zKNdxRQGfonSGbbDAqf3LVHiL7DkbGwWwQjxPqjxWzFs9k5fzf2k6scAc9XRgEXX",
  "key24": "3J6NHfsQFWwrEkbLu8QDLjmL7sUdRGFrjqYNWyJYH84qHTdumsMWHa4j8ogUHNKGf8ZjHndLZSp7pjx8vftbr5T9",
  "key25": "2Wu5shuYnB7MTNsco3mCuavnxbCNrqM5LyEGAWc3N3S7tUVXAFGRGUk2ajCJDi11tbRRewqxEWY7DYz79hrvwhmn",
  "key26": "uuNs64kbvKtHSvGAPHyt8petFa3x6MqxbRRDJo5VMb6iYzuUqgqMpjTWWsurjftTZSXbeCG5Tjy6tJKUx1LEAuz",
  "key27": "5FyVyyCcLAfzByojLpqYVvJxMJ8edRpX15P1VpnaZop7PUmU3EBfTmfDXebgHRWJK5UcDWxbfx8knws9QSevTvJX",
  "key28": "3AAxTDa9sS7hX1DZamzJKtmTFNMZbQedRXpar6S6K71sFDEF9ULSa7q9Hhz2eDSGUZ9WwrVPrLCzbQLFgPmhAyU5",
  "key29": "41Ncth79amC9Q8LDsSBU8MZHbyQ4eKQGq3QpsAUDEgBX1L82WwYFanLZESNB2uFQqokcwzuBrnnkUJquLFxsWBdT",
  "key30": "5GyyjyFRTupnY6b5nDPUDbJLEN8QDp6bj6ZrNTgjLqetie9FYqyr9URwa3zpaBpGnSLF6CLSG33hHYTkh5Dr15D4",
  "key31": "32GagkwJPC716we2SDEdYCzY2F6xQ7hmwk6R3zRuAf6tEPsXr9BLrfavjoU9QWaF8ZkCevhPjDQ4miJEK5bEpACt",
  "key32": "5khnmrnyiCQX4jAwATzssHT1bqogjDpvMHAKSoPgMLiukeK1AEPNCQBs9SzYjKnSgSzCWxeMJVkNivLpGtf6d1pD",
  "key33": "4yeWhoiRcL6mwJuvsu7UaVmRSUR9rf2BML9RZFaE5ic7E1doJgrutU6teBPBFJ9w3AL4hqbDXbB82W74YtDXNCBz",
  "key34": "2gJMTftJzkG9mUEtGuZWUzJGAZN7vsU9jaBSgyoceouNiL3tPZcPANs4zNHNubapbydyn9859rMuUbF5uNvWpg15",
  "key35": "yAJufWPBWQ2pQBCTrMPb1fVLREEd8Jxye1ds2ykV7BJMVCQ1XdkmcT9TX4QWoXWrSQXgV5d8dUyiKy99adAo4SH",
  "key36": "VAE8kHM1HHHNcApcFtZNUV3584U81gWFn9s7RDSt51vPqxuQEXc1YGUYnfnuGQ76BPEgt8FVcRVVSk8sCCrY6sc",
  "key37": "5hNS6eu1iEmcFhSrNg2so5sgeUUxdGGgDrmb67zMu6SZT4Jws853xDbxyTBRATeW2MrphBsoh9FfL3K9TGhLvXWS",
  "key38": "4ynpci5fgUXyvZYSj3VU16DYjZDGXDBZNFSaYgYccxi7pMVsafuxffRFHVi5Gnc6AicavdzzGCLn8n6ke44gTWLC",
  "key39": "2HMq3nE45DW4cepsKSKUpt5zbGDKZB79uEPBZq2kpS9PgDbTGQDyFukPTckCRcWkiz6wdXJ9kQbQsA2xUzfEE5Th",
  "key40": "3RepJ6ZD82DZUiPpUYQhsCox1hmJbrSj3WHPRHqRnN1TkDmuwPeBGd5R5xSmqprCePoNFHQxnVSPzZ3QfykDvFts",
  "key41": "4qxzp7Q75CPdoMBAU1zPwjWHMtUCEbs95Lysy39MrASHcXhgeXRGAWGYqahmrPiv6UBfS7tQo2WEFzdv1sR6WEGY",
  "key42": "781vUKGDonSV8u4NQNFJMuWiUTcmm3yjh1tooZ62DJFKT6ajTNNGqdqUL92iXQ5Cb6zwjLyEJhAn7wLrWxAdFLn",
  "key43": "45X8YVWA2632iFBSdxCRomacm9F9uPQJSqygKe3xJFgCessNEkRd1BBEmDGgJN8X5sVBDvQVpXtzWPXpn6R96aMG",
  "key44": "5i2ZBmmAJ6uUJVQqULQTi9bK9XXnza1toNYVdP5t5Ye6hgj23XCdWVk6uWXDcSTTcLCbNC6K5L4aQDdQbw6MUj8T"
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
