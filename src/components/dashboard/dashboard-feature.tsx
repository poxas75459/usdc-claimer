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
    "4tw3p7c2nY418JtK4CuvuPESEM7NUqf7K6WiiySHt5eAWuLpmJC39LBXTt7a2CoLQCF1zPVhTy5PTrvkpB4TZx2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuTct9BprEBJLv9kRDxr88pyfNfgTdmADeUnxRhdA3mfThVxD5E4QVp3rBd8ztr5W6NK3tcK7PoAKin7z2xc7wQ",
  "key1": "4whsGNRMwxUW98VsnTmFeecqTCVhKNFrLzV3K11A4SQtYQmwJioRto3KFtX6XCYdXFtvcvFXzZSFZwbv9WkGHbhS",
  "key2": "F3zPgC7SNcxSrasBDSyUBSh6x42nAG3WsjBQAu4yvyWrmjUHQqR9dVE187a9HpvCuXVeQyY1QHoHSpScXXXKB4W",
  "key3": "3Eq6TFCC7Ros3a3X5D4s1iA57JuEP2nivakNaJZZg2X7szvLQBUdcEkiJgvJubvFzxhGFYuhPtSLuGpJo7XiWm8n",
  "key4": "55XNRTxeUbeRpAJ4QZ7c7WDkQSoBdysYsTnC35JFxmDDHxPX45yQVynEfd5sAwgxA96ECXeejAWZDupok8t5o1nB",
  "key5": "5ZK7gnWDfYPhaTdtvrp81bwgMj6tcXCrnefyqgUS3WXydis6Kn21Pf3MC3pPsUdo5hDpPHYACugSMENSFWTAfbFr",
  "key6": "2F4iMbv2Ynz6riqPcZZGDrGBqBfk3gtKjd9sCKjGyeTxFnrdL5hAhH8f33zAACNKKAMNTC1gvVLYPZuL6rKbGNKs",
  "key7": "412WR5tuh96tLHf9jKVus7JsUPFop1d8cX1vFJSUzWZWQUGzcos3emWVvq7MM8NfLiX5xewJVc7GXtKHMGp7Nd5h",
  "key8": "2WaC5UWq7BGt2v3zY4mXCAUnQizQoBvu7uBQkt7MXSFpTPDBJAEhBroos3rXwAdiWv3iLtiJTMGCktFMqpUkgTiw",
  "key9": "4ncDW1yibxCecac1W8CBPCtU5AEcKLctPbVhuqt6tANhFYjwmZaKGu44BUMET55ryLhFbzsUt4njGqrMG5m98jzQ",
  "key10": "3uuVWrGABAWhEmSF4eXpfThRVVxBFzrr8Vgm2NoM8ddKdwD9JdU49F6UN9jex1sgNej9sUTjA3tmFhuf4MmeCXHH",
  "key11": "5vbF9GdgaTN4wimCUiRF2BWuBndkGuW3XEuCWSpbnjXtEmXKH4keRznwYxcwDdio4WiZazYGrE92Uvf2vZVS9Xxu",
  "key12": "5ct4hSMcFAFYEpUCxWX9hbGD21YMFosw2KTFLkXT134ysPDzbYwwo87NpKRhPawfoHdBfoqiaKGdn6FSXna4vByM",
  "key13": "333bVFHfe4HJ4Ayck3CzorhKbdQdJ96ERu5hS9wKxMxCFh3Zdyz3HchTucnKv62sMkFsqhajkgjBHzoPGycSFN4S",
  "key14": "3tH1gWKaDjbedS6FgQjQLboKvbrVWSH9cbpJjxLgKYwdfMzdrXKEpWWxBXMnP4Ce5h9ssytqn2zQXd87Hh2gxFtG",
  "key15": "4ErqgR7nJKJJ4Eg8Gu7iT2eyntNxBnrcuTwU2cHnunroSWT2x8jXZNWAEaMpviFBLJVuP5DcS5QFbFVMKWTWnh6Y",
  "key16": "3m8YMYidUXmNWPgR5H8HXnrUavJhHNqrnyyRCEGk7K74rUvDf3HAbXDHMAGUypzVossKBDS9UhgaSxEL8T2vsCCh",
  "key17": "4kviw2GGG1QoNks71wfV5ziyvJNf9zubWRbQ88SSRakebsJr2TdmTK3dHHKMCWBzHH6h6Hs1ctqbHzFrm4TWNwtK",
  "key18": "KbPkuyqMPcinr3y6qBAF9P863PQUQr5txcYWXxfTGRtttYfWMcWQkszmcR3gYqjgu3LMNTFfaHYpcPP6Aq2f5hU",
  "key19": "268nPPmDJ938LNugCfrE1uupp5UjhWLvhpy7xLmrAX5y841GeTUi3JHnvBAbkdqcUiX2kYN4XmnoVKUikGrEq4n9",
  "key20": "gi52hkCH4kdKTkcRoi1ZajrhC6ro6xgQZqg1fSB2iW2HWddSJhu2BhfCZffSMn9Er5vETgUyEfKCgzgcpyVEugy",
  "key21": "3fmCDFqxeuQ7aFv3AQ3wLKzwu1ZQhqHVHXqc56QzDu5Z6uDT5JPghTLfGkXm4HPS1n2DksqGEA3PSBwbvzTrByoo",
  "key22": "5aPd2W1ZonQWFmJAPjDxBjJZU9rP6XmvDvsxHUnr6WLQMCW1cGveuPBQ6SuBoDgWWhBwBhYtAViKxQngqegKSvNK",
  "key23": "bYVSWb548pEzdUKtPBuGh4KjK1TD459mTNgeCTKgc2gg2X9C7Y3FVpuw3CKauNhdXaiwvCzf5u2orxgngRN4Lws",
  "key24": "R4YWtDqLP1iRwz3zC722eYGF1dePCYyAnqKtvbtVJP25eU2hZM2ELLmHGNttji2yM2mZoVMNB94FFYJfXQYjXWX",
  "key25": "4EhAU517ze33qFtT4ywsPR3cXFHjaSnqjaxTWeDr3JwrTLUXY2QQ7sUjdCtRktgeGixh9h84sZxKX4DWUjMpB8Bi",
  "key26": "wDej14kpRE9225JRhNhSULbcaS6m74NRKR7Dcjxja9BNgJ5iTtYxMKhMtojkByeJLPQVDFJXjM2pVQRZXm7rkjP",
  "key27": "4k7KoS9RAoTgNCkSKuR64o7XDF1EBenunbQNdG7gAE8iQZZUrQn19rx9dDrBoPqp5fYFH6enjQ3nMJa5M6Brzi6m",
  "key28": "4UdZ6HrkADMG1SxKZiUrLZsR9JipF5JX3YqqpAmsFohDWtXBmCy2QMve492vFYR91JPMAmQJJiXJnudYhUqvvhMD",
  "key29": "51ex5KjTkLmRrgMLrAT8jwYHyeRwJ2918zXRfqxTENq6b7nMwyrPR4UhUP8czAiuTfT8gnv9YgM92tgxxEW36KPY",
  "key30": "tZ18nV8LLV3VAC8duTpPXAcFoo9iQMzENjK2roq7etxF5snx5rYGDhFa7HNEERijKSqEsfzk5djgMEAKM5Losyu",
  "key31": "5HyfRccMTo9tt2bATDeJ4nXz7gN6kKmirKyzvhbojo9kvZi5WQC2CHTSKbYduiitzs8wfyKPh85Xjc6xbfYySxxU",
  "key32": "55L8hJZYWPMAT63jvdjR33czGb9zxHkQhnbq79dEJCtxbg3WekYYuhC5JuLFPNYrwTmvVXiMWvqASBTKAkyjnPBs",
  "key33": "2ebCmenVmLmjb3Ue7wZb4hgfkShPyMShbhYbQwGotHwcLFoEiGox6LzLRA9JmaxYUhJ9xQb8fv4g9yyT9dMY3JuG",
  "key34": "6iWRvLHGV5jikmczHReqvmm5Gwpwr2fVEnbAyBpPtRqtHqXWApjgDQS1TsGuyJCLiRUvqcY87iXZ8jZ4DSjgLBx",
  "key35": "3cD25UE4Q3toRWyBENmo51ZVAGoRySGqT9a7pCGyYwDtQ7FLLm4z5spZHEicRn7yF5wfpYXCXgDqZi8dwZjAT3hM",
  "key36": "2fYRsXkz1UxvR552Rzxrem6jyeze9kAkcFPWZ5nqqefCe6DHtJDyEa2R6gFQRPHhPmmZxccviyfZQA8Vc6UB3s5e",
  "key37": "5Se4Kyjo72cjcvMJdXUKdYprM6gxAJ1u1KekftockEKcv7VY2DX5ryihcFvJkXyaPzG7GWnALieSiD9DakzcQVpF",
  "key38": "4TXyBHqqqKU3wrJbMD6RksTh84SFX115vMSfoYXBaScCazvZHdvQFtoPkcDCPGRqqFDTSsJ28iJZQfFW99Vhv3gi",
  "key39": "5EVPMYzKMRuwAAV3NTAdAnL4F9jEiG4dD46w3uEGCnT5YQRqrhvvDDJLY5UNYx6cP2Xv5N2HCcb1RVXMpVifoL5h",
  "key40": "67pzHqnn7SdDpBhjDhpHpfPthkzhdWe9yfnpjxe48erANEEPgiUiWNeyNFjEzyie2dCTannD9zSrd4BTV85SUFEx",
  "key41": "4yPeSLMR4ogsAR61X77sMMChLsYwrgSJX3xHgtqt5pxfKBuTLCxENzPaef1szvNtthEciCGfdLV6ZsqLKM8qu7Zv",
  "key42": "4L3DGn7cCPUeJwPLYYxsnYnGWGFGBYcKW2oqapXKqkLaDfLgx7S2UcqKoEHtCmtg2ashpEwFUPK5JMJXh4GnBQun",
  "key43": "3yEyjbPjr3PqAZ2BMwzRUgbBonsTP6faD7W8rm91EAKNxCdKP5ipsvNGTGG66Tb2cHA42d79B1tJmacxjLub95dN"
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
