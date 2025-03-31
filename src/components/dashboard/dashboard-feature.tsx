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
    "4WPp5HD2RHyySHfkAfUhwfbuFShWGnXao54Cnz8n7FkpeQi2csRMH5TwEhuBQXJn1yXMRiJ9LUkiHWpgBMmQ9VSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zBpP1kJxr6hs91rPzAAp3KKJp25Fw9u6AnjMm3y6iqjvvu7CnGUZRqZJ4DQiGCLDzxtYXaScT6iZUKECTa62Sz",
  "key1": "k2CPygwxMiExR68SRwXxp4MFMXyKerGYacgGTEno1kNLeP1ioMmwUkHsgKcWoeaG72yTYh4xMEEDiuAaZUeRrTY",
  "key2": "4TjFfsMDPaYAUAH1UnyvCcrWSXKRFb22KD6v6dUo3za7zkdKfu8nyZbbocXaCqNgT7DxDSSMJT4uCH1QpoAZx3zG",
  "key3": "4dMKzeou3MboeVf2Wv1oDN5NX3Ss2t62zwmjBiTqyKYyXoAymrgpj5GHyjUh41HpW3UeHcfaQzNo2kz4T9yn6xhV",
  "key4": "2uAmQSFH1fdPt8GRLMZVX9RBhtdQRDadcRsRbMkBCrVvCMdh7pZagK715MdUETaJt6M7YEeTCtujYTdHwRHYMVi7",
  "key5": "3kLPXiJQp19LycSUd1y27UckABJT4XAsQX3tLygihByT6o11rH6V3EQbT2z6kCyH1id5wH8177YLNwzVYTcf3Uyh",
  "key6": "bdxYi2DCu5hCbrVtVYzx91jjGXLzx4Mnxs8XPoKeW1bRiJGimGrpWJSi68KoNPwHeUgjfToUC1A8dSqnw2Am5f2",
  "key7": "5oQXu4yedPY1mxrCnm4iFEHfX6hsATB3vkXTF4QJd4dgKXkCpcMKGdaWnL7i13weWKhvALBVyed1ZFyrJroUJmaq",
  "key8": "2SuZfzqgWpsmihPJ3xuvjBa8Zz3TD1VFhUBg2r5P6jcWauTLJKPPiu5dfuMsojZfvxcmDwkdMGRB7fPaygS9fRf5",
  "key9": "9TC4Mbon65qCSW4D14YtLVieVMx8dsL4AYmMkkPXNADBm9XLP2Phshy17MFroc6QXUWq7L6Y5AxFwRAAT33f7kf",
  "key10": "2KGdugzuMgQVSouVSYiQLMC6UXTwftpx4zbCdK79sx8iVBs6bezziFHVpqmWS2Wtgd2VvSWitVs7swPCVqpJYAtV",
  "key11": "5zXrpcxS1shnuczMhiyrPyxZRjCBijptF1a7PvMhwwqDc6XSeTYtxb4tETXKcbDgYoNPZfs46ePXYfB13Awq4HSh",
  "key12": "2xWRBeT6dWm5nRdqn1DWWcLf1N4qTg28jSaLLxzuVU8A3TtSiYotacS6uPnkd5JPQda9JV8axTS6WHaSRycjzheq",
  "key13": "4fWDQz1VGevvwRUeTjU1LoJkexUvKYMKJTzQxZhaaFr6RWs9PGb24oK464WTT8Y7h7xPvwZdxf19rKNPPpS9jXAo",
  "key14": "5SKvg3Q3z2TZXRsfx4XKcq28VJ7whdGBiTgrwXfFBZVKKYxcTdjhJLngJ3gbzmAAcssMiCpotzcN4jxsMzBqnhhY",
  "key15": "5qfYuBUeH3t4RxJmcWyADGWM5RXTTtSshhtc21vNwz7qndpd3gs4WDoXnBb8ZNvsuWRvwHaADcrxZf5qx4yL7uS2",
  "key16": "2VJaQXge7gXdCEWneRx86Q3DsWkyXokcKbT6izmeP2b6LBGFRAEVGnuKqCQ4N6ooJabwenUqzvUU5rJLRWD1fCtD",
  "key17": "roiVHHhLMTtz5rt7gemeufF4dWivWGRNUchCSTdG2b9vDGf19KnvxFsa3grzqqq7CCTb8CwRCQCysucCXKuWXky",
  "key18": "5SPiLCuUjJykBSbjQRTJG7fwUiZuDW2t98hVSa7L4XaGrHTqqpio2tZx3AP4aJnUB6hHCqQbSChuhEoCNsET1UzB",
  "key19": "4jpydq5bTWtzP2tVcSzzpEfFEePM7tkUUvcuDZaH5vWgutQq1BVXGmDod9nvp5vKGD2uA76s3NTY3wtDtx5pvMUa",
  "key20": "2QCAuPyEcuyHpGYs2SAbvrTwfVBVHetw1xiq1XXYbvmzRC4T4DTgyHWARANobe18seL5PyWQA58YKe3LQXEEKKYC",
  "key21": "2de5ztZk73coQ688ksKupAYVSnvuRMFHwcCrHUP3ifHTUkicmikDkEbSVN3a6rzmWMmgfGrEZqmTctcUNdaXWNGV",
  "key22": "2qrkqWgvpN7RhTmoR2kXZdzq18tMkmUgrP4twW5xwEgsmfrPTn4fYv8eWpmSDL2tqep7eVxjJ1e8Eiaset7eVWn1",
  "key23": "3eufCfoE5w3wQmWMo1SD7yLAHZ9hXkV1hiGNeM9hKysXacJytKSaeBBLUCtcogQJdm2qvK9egqjzuH2GfLQwzHLU",
  "key24": "5dNmBndUE42ZzmjHk3eVdsWNJWpUDkKocBsJmvvZzHKVkozin9yBktt8FEVHPYbE9vjA3bogoxhjRh7AcSr1ki2p",
  "key25": "3uKkbLeaFg5vgNCvei1Xixz2vXyuVtpiUpVHGFBXBoewffV56U7ohsaVUbXuDnTT2pVgPFqUBEwy7Jfgp3RDoGuc",
  "key26": "5AhzmXRGxPt4HwWmGpjcGo5TepF2wZt11UyvLNdygawHNsWPgo5bT4qjrF3hyPCjXH56FKQvqQ515ngNjxwkZv98",
  "key27": "5aiUbdVZLNwWbipt7U5M1dxrPAB6nqGQeRd8ZzGANMmWVpHUEw1tS8iHTmnoaqcJCpuPxQ4x19mXvXn4H4MKriDw",
  "key28": "DYWojua5UpgkiBkoRG1mMaEZNoy4NZGakee4iK2WjePy2RgVN9Ww55JFQ3MDEFrr1ybTv4Z5qSccjYBbgrM32p1",
  "key29": "2qiBikFfrS83p7mNqxJegTVSVFXos5Bj4q3at5a3vpNeag2xR8SZdWfdaEpJPQjPfs4y93TrHx3CBXEX5BT3VHNU",
  "key30": "5677WHAH2HigNnWgVpZYufBasgXhwnbBYPexBeW8sZBiwkqEACwSVdQNJ9frWAsxB5t83AJKsxTV25eGFdfQ3kRr",
  "key31": "62mmQaXuKyuQg3teTKeWtfGGSBrhU125XrgPt5Lo53UzXrvTv8ojJ37UTQHPFG2NwTn48LRZMah8a6BqjZcwXtJv",
  "key32": "4jrDpZ2kGBESv9f3xFGJ3XvA9yEX4sbsHCLhPBMSYLmidARVphk9vrH7iZ3rwQcpAGffgPXWSnhzZunCjzJUcWRE",
  "key33": "4PGuMeuL4S8x94vKeXznjPEHecXrGEDPLPZvdYtdLyswmW8kd4L9TWLcWf67XrVuYDYpbFa7oGbm9KvQhkS4RfLs"
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
