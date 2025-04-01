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
    "4y4XhTosyYF7p99QSktjGY8LZRcVpaxEhz38ydBiawXYMFMqEmiYA2w5p4L1QCAMQfz7F5FiVchKgno9PDvrNErB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LWizpYY2BPvd3vD7NJw32nRis9ZfPgvoKg5KUr7KV7BrNN3srBPP2py3gPKJ5tR3ebDDjoYQRDxGQ9szmPc57Kc",
  "key1": "2FdWDAdZYt6VRg4hUz65oSHu5SNgHJW7Yx4G8hHnGAjjWak9z8jZVKPrKd4cnHGHiwM2umPbtyG5jZViPesw88or",
  "key2": "5DprFCNvzcJnynmnxZVEYbjyR22CwZFwLwXdUu9ncMzWNF3N4VZFJPrdBsTyGtAtuRrpcnDKrwDaT76da5KgW7cp",
  "key3": "2Y7AEF6ZAQ5PL4ThMhDNxpmueRMUaacaBhBKkQC6DP7NScAsZdh7smcmYeHf4NnnYJUFkBJKvPdZkYYHK6kbXR6Q",
  "key4": "2afbu2CbNtyRf5Feqpm8BCs8EEanz6zqvC7VURw6KveXfEuaBUzVC3pCHTUkd4N6wcJQgxBAsp53CnoKhVCbD7cv",
  "key5": "2fDkEY1jEviATcRaHDAfgiqvCj4bKjVTLtW3yeypVf6gXsZ11QAvrJrYKi9ajnjiJx3PyykUWD8oepGxsbZ5unmw",
  "key6": "kqrEokQFfND5WAui1RogtDjQb7D57sWwipV2HCRM6VaoyPGGePun2AwKLM8jGnV4j9UoUMJCK71KLtJeQVwRDUd",
  "key7": "MkGVNGyDMVAuRsmGafHgqoFedrtx58gkagtwUkoo69ZdGW1L7btLaBmpAzVmef7s2uMhLZL9a6dcZFejHu3hGvJ",
  "key8": "vPLoZqNe2daK7njKzMCNT1M8CVDo8aiDFioFhJcztSUqDejJLXKApbPmBMWnSGaLsEW4zHUL5J61D6TKQWKNuni",
  "key9": "5QttuvHBrgPK5TpgdoEREfnAHEnX183YymQsuy77BdvFC6NyUCU55mFPDkyh5aDHbzzRYNpAxAD2Pwh1iw4XZ7GG",
  "key10": "3kYKK934NVzpQhpFq2JZVRkHe1e3QL4ZEQmSQTAmdPkdafXMiCY83rV3cpY9gy47VRgXFE4pdMWwcebfKPJpoGKc",
  "key11": "pepePxH7RmonDADSWiPCUdGLCmJPFCjwevQHGgCRDsSbpW1mo4dxg3zz6KboGAyTkNYsyvuCLdURUBfRgtPRJQ4",
  "key12": "3kgCXZ7gSQHJwZwFtLjv6gSoUfiBU8KKdQu9ZqSd7pZjtzi9eH8n718Wa7kpLnotugKSxGhJWtRumrBigwCgzATH",
  "key13": "5jCw1pwgYHK2SeyUHRC8vTxSuxB9LXDMJ5WtgfFdxiAXzcsBHMRHofb1MBvetessfjE2s7D2aWsTDZRHpQ2qs3wv",
  "key14": "3yhokGCLnjQqZxP1vdvDueamX18igAvKbsymAzYBRzTGeL2XHLdqsi1CzUD5mRcNTb7sRfqERwuT2jYMNv66pHQB",
  "key15": "21BE76ZA3GL6kqbmuGgeeMrVcdDb13FQngrjDDpnHHkEUBN6KF8i6aqQ7xA2jtYGc47TmrmxhBqyFi2PQpMTF8S4",
  "key16": "5Ndc9tnNwBhFzNNCbaxkeNU6yzoXL7za3RvVqXVtWhx9AVodggDyLuZAtFQgiLwNMVuptyBrpXPBKfFVwzPHbcZt",
  "key17": "sDFpHg23TSSFvLeRZoemhB4WDRJLawc147Hjj8rZ5qkhZVEsPcp5sFXQoDSVdoy1VVo1fF17o7zTz3VSMP1zcZA",
  "key18": "4p1VKPgDMuAd1XgMENtyXWHw3czpW6TeHdgg8Lp2T4rVTjKj2xBFyRvV7cmc9RWLGqJmbzwbBj7j2kxV8fRecNUt",
  "key19": "3K8gEHqaV6C6JFPSRAnMbJQCNU3mF1oG1UfVxCTsfg3GKBBEArPa1Wh7a59ZqvBg2xTGeA12smZ8gBGfXMynQbSM",
  "key20": "JyMHMtbAoWG4XbYWrpunB6NCprFCK27ZvLvSe6jKCb5RnpbQGMj4o3uB2WT9Um26oLYRTHscv1GxkamdRWzA2Nc",
  "key21": "27vbsBdzBmtDB9s3rWET7H1zbnBZT72ezFQ2hQwUrXwgHssCkMEMWeu3ryyzFr8qgietfqGxwWU7cvXCBRVQx6Rx",
  "key22": "4UwmC6cyXrDQUu75QjGJBfCUdHBy2A2cdiYdnNp5c5YzocZ36aJT1TphUKfY3WcJUtyfZYd48i4Bykm51NXfe4wj",
  "key23": "3DhVo1518GcuR1MGRP4UYs1LeJVM8cQEXwifE1E7ytGzYUpZaiT1DM4P1wg3MM4Ha6p9eUpn58VwqoUXnuAHp7Wn",
  "key24": "4wzwxvAF5jAP87vmX6XhuX5k22w2MqvxCwbRD4WJKqvss889NvJV2z5KHG55i16YLuKro27WUmZe7ZjXkBCiWBMw",
  "key25": "3gnn5QUJh25eE1NBq9TkQivvBz7pDuSSKZi9LzKK8fmSU3nexC4XK27Gn9JJmnxfWbpDo3CiWQMyidyf5tuqWFCm",
  "key26": "2KR4J92UKHmz3vbAoKijDKHj8ShqDwKmzkyN17Q3WW6oMcNWkMF2x9NT1XnrksLiKNPK8vbpVhf5eShCWwisD16S"
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
