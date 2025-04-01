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
    "24w7UKrr73LdijGtPzqtGsruHLJiKDNbfwMCKCZXbRuyNgsNMCN9TsNn3ueHKVrhCcnLD1LTnbkHrzhZuCQueTAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2sPseJcWysP22HsK8Ph1D6BkJrnow5mf1PbVZRhTqpe6eDKtiVJwnNA7QycBrDCqCEFXH85PkocPJ7tz286Y4S",
  "key1": "4t4zS2YwbzNUjtoPxTDE7wtE7yvd2ATZpvXfpP1uWc89haddtWuoFMNbvyLDcKpDPQLeic9AP3HBAC8FVGWZxH9S",
  "key2": "4YYkHE5r8Am4fAL2JUxLpG6T4eKMvHGU3eaLPLhhV49wURAgiAKhBo15FHASC1LXs7eMwpRuuJ9iCGHZjFrLM9j7",
  "key3": "3V7vVyQZhcHMYx46F96j7dkAY6CW1pDGuppEtuHQ3ba1UKgS2uXkCKjhLjoGLSLU55qLGXRDhoFPFJj7xijinppD",
  "key4": "2kSx5P18yYzGszuKURzoVayfrsLDCRJr13pvyuAHzCx5dYtmmx2E6G8dNh8iutmAPEz2ric6Y5b1zSbbFDCh46Aw",
  "key5": "5f6sJGPSx6rmEak4f6bpf6QRh8qxYeGgY86qXRh85TXaXzpURKvSxr9oy6AEkCbRYUmJoDKPTURixcNgT7hjWep4",
  "key6": "4jjJcQKxoTKcneDCF2kJMUYEwGzugLi4VVxc5otZFfxNoJyU2M6pXxqaBCiDcxkU4KfGpokPdZatEDaqmfLMb8Vg",
  "key7": "3ZhzmP53VTD7YCHq93PxUhVeWZQsiZdEdg1kj9UCnLA1cAm2o7wzCyf8GWUDFbFB3FKTGB36v2dxjNfKBKJeAKPk",
  "key8": "2WhF8kwXYJCbptrTQsUgBSMdrR5hCFnBQrNvujCoYKhEg9ZRQjaa4XULgKibfthRmjbidjx3fGDrQqdPtvfwKPZn",
  "key9": "4wmiWnDqUpsYFyTZJtPdmDcg5rr9aKjLnmZboFHaBKraZ2sTx5YuPC6kXF85tB9iYHx11yvz2LixSFMP3BxRj4C2",
  "key10": "21FTDDgSqdoqJjMU7r5xec2wLtR3JP4cqhwLHd2PPLaz9R5w248uz1uCFRZZkXfgN2UoAG8t2jEikJkzoHpJ5czN",
  "key11": "i73DWJzSgKmcWTNndEwFDwL4Qoi1kWgR7rm1Jjza8kSDzvPGuhxVnHgagXR3eJ97362mNXtKGmUzk1xQKPiRZYt",
  "key12": "2gNzxPbph58uqJjiQy12jt5984HPc5HJsBBH9tHmkG2wJSvUs8VvWt6P3yCWbiMggcMgctcdssnfFRG1eLw8LuSY",
  "key13": "4dhB1wogAkATUx3UhyKBu4kVh7aED8B3KE2LRQmrkjy3RQuu9KnuM9p9u2DNW9gv2W3epbCfL7HDDbxPa4gnSow2",
  "key14": "hMNdBCpyUNtV4sr7YktmkUqGxMWAUfyWJTZFcD1smdvzSkBkbY4h4uaECstAUh4aAC47VNLend5DBt67dYURHMX",
  "key15": "4YHqZbvKLsPSqTnGU14Y55ccRigK79Kak3rMzQ5kFNheQWqHSrPJYXTjFfRNpvgf26B2sktmAXMs5LMteEUQiVXt",
  "key16": "3EY6PzHqKbzPKfx2AD25W8vZXUe16DBsX6Rq44Ye8oWEim5uvnrnd45xVGVcyvWDakvD5n21gGHNzoFwTPc5b6mN",
  "key17": "3Yoi3agbtYyDvJJ7f4tYomQ2GQUzDVGhvBnFc1HFTJtfa554XrXoqs2NigFEnPS2tcDeue8LCpLaJ6JmgRbmZAcV",
  "key18": "4FkGLFAAcjJB7BZvsqKBZQaWYdHhjVwMKMR3VJLWTN7jJ7ftwUzfUVGaQXs5a13ZiKJX2Zn2bJsWaYxEAeC9RLsv",
  "key19": "5hhtHLhpe8RkswVQ8oRLUcH8xXCCBxek9tUazzsU6DFaUSUqg2B3WgLqbFs2qEc8J6GUCKu8ANz3tNZ8X7rAfki",
  "key20": "2a13DNyrJ5rAZNrFF9E6dppzj4A6daLH4pki7ZfiTBJ1azhVsFEhf2FmvFi1TJReYk3sXMAaCBKjUSf8TKxkitH9",
  "key21": "32XTiDwLptfGH6wqQdmYfhM2fWsz12BfagwoXpuixjMZGkmTirFz5uvL9iR62rtcsP4ZdHsdSGKKhTCWFufsSg8Z",
  "key22": "ogecM73gUb9KpN4P2ecZXtxEExXp9XohyREfFjchxDCnsy2Znk1nd8L7JH3rME5fXybFnq6MtN8itE8K9saj59A",
  "key23": "4diwUurXrnQ9nnAC7quyeeBBi5dMzeHeKnHbAKxHdCUuqUg5ASecvxcBQj6sGsqiYnjMG4ik1tzW7QQ6MGJjhSLu",
  "key24": "5JTHvTpFhxdYyZ4EwDvhNSqiurayqAXQe5WN7oeaZUxg22s1iDCYweY6kLbNBcGWHbeWcBbAcAjtFhGViuSshKre",
  "key25": "3yp7o7jYMfXibc4jkYk79Sy9kHUpXwCJF5QZiYe1dPSoKuJGjoVwsc7R6MryAVdif3wR2WH1xaauH2i5NgAiSLm2",
  "key26": "5uj4aMdaS6N5Gb6VpDZQvfKxPjM9QrcGzsK2QjoxAPjCgHEfoG3gcgRjQrV3zqvtRdr3VysAd3eDPv4cJh2ZAAww",
  "key27": "44ZS17cYF27D4uH8ff9jWjWmfRDeQDLxNXSWqVaZWWxZVGYFB25A7fvx5NWEaxrmkeiHuZPK9LFVZZjo7rcJzXuQ",
  "key28": "3rSd79t9A9J3n3cm1LVuJHR55atDnmEcGKo7zHFts8qPnN3Do6djgb3CMPxkSCCYN4JaR2sWNS41Cbcq8kdAhTYF",
  "key29": "58WiXpCr2AGMgaLFbAZULkz8d6ruSrikGSUXTj6Lg4998NyCzmSLPjbb9zc36huf9up254TsmEs1zUd6wkx5pzC2",
  "key30": "4eVzuZ2fNwD735FxXX5ectuoYmwiULh3szu6b2n9Ryj3Q3bJvrWn1w7L5e1o5ociaPDVZtZPc8Fmk4fjK8MVfH6R",
  "key31": "3TbuNXcafht1DT9F4a5dDTePp5qZj2dmKaXQrDWRauwR582sVUWCCk4Xsneojk397jgsnpb3UqYesGezv3xgCX3y",
  "key32": "4PiWL3CkpXaf6evjpnvMgwQQ72APDuvKM6MorJ6XSioWcBc6dLSLS8Qmk5JhgLFvNvS7asb3MuguMygzvfkZva1V",
  "key33": "3UpDUfr1RigGHsA37UpFb7Eb9kSHQBxPQhqhkmGfqxxZjymbbmV6tJXzU6nUNfgVER7e6GVQyVdaZ8F1EKSC3Bo",
  "key34": "3wrhy3rwr22swMrrrzHmqg6NE3X45WkVxa1Xd5roA23cHgDB6cgaHX8a3KorGWND8KhT7SmTTdx54zwM9g5K88zm",
  "key35": "3URM6X2GnMKZZYnh6KuW6vYgExF9LLSsbB6wjhwLyUKj8AuVBfzwFgKkzN4chsbysfiqnduy3PhFk3iRNf2MpG8w",
  "key36": "41cVGp2AZi57M6swVs5iUQQFPPrwVLx2tQLEUxXusB4bbBWMu6MvAbVipGXNsCtBfZdBY7ymCvZ8F4bZfj1faPF5",
  "key37": "2KVaPmwLQgcmsYB58xZ5rj1NffDE75jvpYcHRZsXhTTBmuTLzUyibaLMJjzGtxk1dc6dYEgkqEqrUUKWWUde4g2P",
  "key38": "1vqm8d5nHtj9Hik1pXou28D9EL55AExu5uzKwLs3gVwnixgbkUagFzXceNAUuAppAgg5dSkFKqRLRufHs2UvV2q",
  "key39": "2o1JEzpho7y9UK9MUVnUqtUzfRCnEfGTVdS4sTFqeyiZbGzgkC7y6RXAF42mBUUePK2JU2tCUKu3ntnXYyt35ktY",
  "key40": "4sN8aNAknxPvqV1gqMqfqSpEr8SsFwDqSfUGR6Nq2j75uS79XbrnWW3dpV8zZT73akRekzLSDqc8JyAKe4UNt34p",
  "key41": "2gsDyHDEwvbhg2SpFm1BhCUJEbJCMuhE8GMRLtQqR9q8CBBToNjQbibVEeTTrCH33NLJWSgVxPb3ueHBePd5zgMn",
  "key42": "uzCgd7bw87RNddSt5LJZocUEV1TiJ3kSBB9iaNEtJR6M2hef3djBjda1CcLAgBZ99eTxujETzXPJQobr7ng3stR",
  "key43": "5Z3pd3omjdVCt9Xt67xYyTdH6N5SJLxajsSiXmbNcMwKMsZMGfha6ji9goK3Gt2KLqd29jAzorbQBcbWzQTbqpB1",
  "key44": "3NttK4WyFbMJxQKThYikzDPr57Ps4hCi4MVrf931NPgV64pM21naLs4DhEieWnKeZGRjWpgw447ePcaqaShrmdWZ",
  "key45": "XXuJFJjfSYmNbLH1wU3ZGdDM7XEqmRX8z6VhXkd5Xv4prHb11njGuaD1e96YBLbv9JZWCL3F7BWmDNm71ezHkuk"
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
