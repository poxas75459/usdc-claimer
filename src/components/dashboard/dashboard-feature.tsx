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
    "5rBtGGvUfBNHoMM92zWnwiavKw46Kt4pvYjjPsmQG7X5S5KznFwY7pMMVnEFP8dRaEqcqmrxSatipy3ZZSHM64YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51adRJivi94zmL3BBEWFdUwEPp4aDZL4aswpM2tUyuBnfbXfgXkTJGmjfadtxe47jGYDwS9wVv2zaqMCo3dJMUb3",
  "key1": "2MsFbgyNiMT2uuyWJV3FQtZqz1BndzJfAcdd5vQiyfriu2Vdi96GAhEiw3xmb966zohcPJFMbAepGWQGw5taw9xB",
  "key2": "KuRyGKuL2LgsGsbqF1xQztvMUrmxw2mEz4gfBDVxpSUJ73QoR9g3nKmXgQEk3DDTzC7M4ZFX9eBNTyjW5g4V376",
  "key3": "67JMpks18Npqkb7acPd3hnbvi4iRxWTmVHRuREQ2SCXmgHxAoJkorgNS2FsnAZUhZp3eCf5JXmVe4bksTgbEzNVp",
  "key4": "5pyTKQKwqjifLRbMNFC4FP3Zpc1xYncokPdFoPbPWTT8GHp3uhmy6GHKoqdHUwVeyb8kqfwhQEHyoSM8kQaD2FVb",
  "key5": "5RBT4ud1FrdJSabRetLbxzCUSQXzVLENvsLFjekk6yNgtfhaQ6mrcV1Bg3qrA2kK7VDFv88uf3vtgFpNqsfkjCag",
  "key6": "3hHgTkSKyC94KQVRzsb63WkGJ1bUF9cP2S6FM3VKVzbCjzhjhT13gQ7DXtVQGoDGsS3YNgDC9DJSRbjniyMg4ApD",
  "key7": "3ESyWsnL7W7uTsZxYM7BiNjYtLdBu765717uwVxrdGJevx68KojcLcGqBphKPT6xPYTVNnsukXspvHXeUfiH71bU",
  "key8": "3VPwLwWEBMfm6ABeB24XifDAHWsKfZWCxTz4UUvioKi4vjsTDbyNgCmBsB6HiuGsJZJgZQtCmfakAErkCUk5VdPx",
  "key9": "2XZagRs6zLVrm6Dwnaqr6MdTZ4SyMpDNMVXu4qG9Q6uaAGoo7krAB3jDNfxmo41ivEEWVt7fYWyvUaYEWYYdV3TX",
  "key10": "aesxs7Rjf51h6kz3LZyK87fG3st35tmjTS4woZCBj8UbqnPUZVfZsbZKvkjrzBDjbacdpTEvjApLFirPZ6PGHzr",
  "key11": "3wR2DHPpsAQx7qsXWckx7mcHZ6Bj3eMpsFAcdYaDKtae1L8zKrY4kb4iJij6A4JSLYS8DLQAsjU7jVcag6vFfm8e",
  "key12": "22LTvtKLk9xsS8ZSQKHxqoHcGGiVrdcxRsbirNtfboQTCng7kwJQDHsBPZqa9HitgqD2Q17UkoVxG5bWpwG947vn",
  "key13": "4eDVGsWjU64Uh5etQ3QCkFdoAmXrmJaLBwm1mkS4XJ5Gv4Yiya3fwEy2UDt2LBuStBmtg9oMaxVaQ5iVNWTCDLKS",
  "key14": "2HAUpMWS9hbWcKgFxZMdBQ6jQhE6Z7erVY4ZoeLCrQAYriwsNTy6269FBa9UehDbaaD2ek9YiaMZSTbnM4pst319",
  "key15": "5quKcttTtWU4b7r7dnEDr3q6ZLYyAXiox88eqWBKigNUEuUPFW3BAxmjvDTTkdGxNRrbxtFDDDosfiLXw7624pvd",
  "key16": "UfdRgXXSMgGUPAqAgAGcJXjaxvmxK3YKjztzcBN4Wqxg3bxFYsWjyfMNwKwcWVbMqRDZissC3Z3tcmneUUQtNDc",
  "key17": "ZXUAdCy8AkV6sW1X3gTg8uSU6x1EHhMAAYpT9Mxbh9XVcsKVkVsD1bBWwRVtYWdxBXttopdH4LKz7aKDWmKL76A",
  "key18": "37f7wtPhgBwTYF53MmJKSX7Teez5V6ttPpjgRcMcWfWCi4U4PGvGbqGrQidSTXHSpi3PRBsAi8mB5SoJ5kbGbGu4",
  "key19": "4DPcyZZaoFNKKWLNt158o98ALR1td9Jcb79tbhFxNGqq1v9xmjCTuVw67VAn4E4jTzW5p6TzXxSpfny3uCaenSqU",
  "key20": "25RTa11aHphB67Xnx3WsK3mFveb72R7d7itNjdfMCGnM9VnfXjnbATeYE3csTP5DifnXxNHRd3GeT1BtCsd5KRKY",
  "key21": "3pY3ahWsJG1TwVLJGrMRsa1ko18FkFtD3SqZJ75NPjGtDbhMaUA1QHkkDeCRQyzjhtxrVzfs5nKdafmavYMc2r3T",
  "key22": "3EV8JV7EmoYWHdZfiefgmW8xTE4wjLEtGp8tERx4rHNnaSpM81YdPucXDcnwUtoPXV4chiKFGLTjWrcTRaHKJBYb",
  "key23": "2rSMrBTcTjX56coatVk7mhiLQ11xS2EwwTajc85NKE5eEr3YsHT6Ujgs5wG3TBy6Z2qtkHUQkCnFSRtQwiHU4o86",
  "key24": "2pavPExeAq2w1BXgA3iYBQ9kmhDyD1Khmp7emM9rZ3TuzB4u1k1PqKPrdDj8Ct4RttJGSiGu7XG4TJpHPVQsxJeS",
  "key25": "2shPo4PLyGecjG6JxyqGJHTWVihgnfjwNuPJoasRE6N6VU7dKM5WrGUQLzyFJ514GFXfqjjA7pZHg9qsFRGFMGGE",
  "key26": "3B6U15NVmdND6NCJV3hA6SGvzvfQqEgcvKrAuMBu7kaFa5E9FNun2A38xHXMvJVgSXMNqEJCASeYux4nHnTB1xyF",
  "key27": "2TfsM6A1QP4ZCrJ2CZmuj3GPNfs1KBB3fXFA8kieLfFSAwKHdQVxBH4DuFbB2Zddni1CD4JJXBziMiZvYPcwsZk5",
  "key28": "gKdZVcfQcC8cDnLsgmDrmdNHfhZVxkk1Y53wEz2d3eZ3JQRwuyY4xGx5oTuzatyPqwmsQdgLHw11LhwSnTf7S2J",
  "key29": "4mdhQXTuVYx1cNBS12hFpHbpY691kkTdLFNsq12fcCrWb8vvDjzFK6TZcQbZ57d4vV6E9NQjvXCcHJKRmCfbcRSw",
  "key30": "2h2LUdt1eoKqkiqgxEAuhoty1hDX91Z6ABzjToA7Xbq7raHxtZUUdmiSfQ7KUT2YkBKX818CU7TuoSF61jh1QAL5",
  "key31": "3q3CBQgnF7Yovd1V6TGY2LLNZh6ddtAzeCG3nRz3q94FFf5fXSUbJHSpNDb2WE9rZWdyMeANxSJAwig8ruzwEJth",
  "key32": "3zrN68ikcmWh8kpiTmWScTk1j3CdT3F4MSuzZ9cm1cHK8LrUsnqS31E7kcLYFrC1ZfUrmsUWnZdvRLJwTWC2EDbz",
  "key33": "3VKcVr3xkjkE3Z7qDxex5JGmkjj3W3Eq8CyL5jZaq9PnjfKszukhvsjaGKDKMj6sDZHTkmMRcrLt6KtMdLr6QXS",
  "key34": "3ajY6MsS5f5oXTG66eN2hkZzbYEtGwXU4roaXPC9fnZbdBoggwoc9hLF9NfNzZjCf8rVsVDFBpukm8TFwKYfKFLr",
  "key35": "2kS77Fhn6BkP2drciynVoxRRqvToy2iwf9KyfigJ28SjUHtk6BA2HCDKq21o6hKm8Cgv1dnoDQhh8vX7gexLq3a1",
  "key36": "27zLwTxn7UgS4P5YuFYpXXkrUBptinaTy5341ifyFoP3rgxJXgqPa11DLGyZgiZcSNYteCKdBipaba3HbLi2VBwL",
  "key37": "5zWuqNNkysAsWhUAwuQWNqDjJuLTwcPY4vaSN7nFXVnfewskFKwMXNNdBZsVXcFHMUB9Ys7iqTWnzEyPSEPtsmgx",
  "key38": "4RqBypBQ1v1jDSXkmpk41A9D3g9Hi6ADZYSu7n9WFAXxi4oyTeusUjYP17KDD15cAtjzdxq7sdaAYJkPkMPjW9wx",
  "key39": "59fq7W37QU2TjcugDghVkdUM4Cr4sbLVwnXFbprutbkTxoxqzYX94izuFdC3LN7iasHgYv2W2avAUYFk4FizXxjs",
  "key40": "56NnYk8VhAT2GGn5si3t4rwyn3Mg7zW5KUhfHpwDPpeAUjPYwS3fEKnCBXZQegQKTk74fGQKQTB8Fu6CRktWiEwt",
  "key41": "3QAoDvaK2rAaAERiwc2CCwkCkdWYUs9sxRmw2ZFpTSpLXXsZRu83T4cQQMcXFTxiLhzrxSQKum7xYKwXQ97EEAEt",
  "key42": "3euyS3he3a2ipQ8JD7uFNJ5pKXi9q6KRLddH8cnAzFURcuEdBnPh4Go6wc69rZt6yRKCtciqmcDtcEcrSmXDiHEM",
  "key43": "5uszmtWvGCmKSKwVKNqBKjNpRp6zuo78CL9WvTRvxANbEWYe8hKFFXaFsncWyFcZH7xwWtSF1iHwex4W2wo5hqDW",
  "key44": "2ABBQN6uawyyCvmV8UFFquuG7mHJa1mRFqoiunsHf2r6UZYQG9SBjXdbv1v2yTVXWsDZ9EKUrXCvVAs16Vezcx6h"
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
