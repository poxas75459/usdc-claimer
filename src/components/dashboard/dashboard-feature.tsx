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
    "4Keib8R9jsfnK1juRndh6yTRrBinwi2p2HrTyeTP8UNo24h3qryqiJwXRpFnKcwyetmt9yQNrTuivPwj2fYtQNGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGBffSvGoXBt9EcZfWj9ixVuG11RBQzJG4D7oVsGY1cwNHy5pJZqakkxUfeH7JbFCFnXuZAmgJu22nmjLzBEen1",
  "key1": "52MM9WmaifK7TZjqsy1MDvmtad9BffwRJZ4H5hkaFy7T6oaN3SerfbfCvMzWyTqrJCcSqVtdvxCAj6nfvrjPckUy",
  "key2": "636FxtjqErmE86bUDM8NahoKL67FAzSSqGNp8kqLzBPQKzx2sz1BnNiZ2dvUb7nSmF3q7ik6Ry9pVXXTkh72Smzx",
  "key3": "QEodVZNS7THx93jtg9hD1bKFWSJ7f3KL2mAnGTpQRkCur4XZR9N9N6pTva8Kd1ju8F7mCNY7jw6YxoTcCDojJLb",
  "key4": "Hn7TQFbCjPG395DzdZjWgcDYAGVSfLeG76mB2DHEMygJcPBavWFv688tw7WizDapyN3fTb6eU4BzxEbD8Kkf3Sm",
  "key5": "5iKN42wCvcoERoCUnyGqKtv73rQStiWFDUnpAvgGmeNpGAmdyCXY4WKNiPmp1yHMtWxTeBPLBp57XDFm9R3HPMo",
  "key6": "3ruzDL4f5t6D5yD2ZFxZeMGQi91GQ7jr5VRYvs7szBcgKudCG2W6oKXcQkQsUx8jAc8fPuVzvqZoACDYZsERvN6E",
  "key7": "2JgB37QSbTkN2WsaK88nYeo7mkKCmBvQU5TjcPDmHPRZxXvy3k6RPJjyBzkxoyjiKXXLUJMRwfB6srChtkmyr2m2",
  "key8": "2f6w9akBMifoESvniCnbkMKjMi5bXE4RRrpVAAf5Z3MSVDmyJkUBWsA2LsZuCwziw8fKATkgnsYz9ZN1mraRj5gx",
  "key9": "x7H41DHg45ey1oNyyKHMqLDeKVaxaxeEp6t36bMAF12pwgqrsmoMqj2KcNMrbuojgh6JyuQpB9E3WXRGCk8NJXA",
  "key10": "5gcopfTQE25SUMnsxips2eoumhsRpQGUE744zzGqenKsv96KGK3g2HfvTUuocdsZAoM9jW9FpeyiNn4cW3rmZLsZ",
  "key11": "3T5aPtteBwZksDFjwTPcvhZFKiqaP2kYTHAAEMK8BopUTToVL6o9svkWptPy9TPkQgBJvBQQYcKALx8YhWSdExnp",
  "key12": "pr7BEDeTMdtgHaeWn1rgyKWuPyJRi6CUTQ2Vngp7fR2Cc4NPoDUm3r9EU33osamb3NiTqnKPVhU2wUrM2MEtcAd",
  "key13": "3wB4GmZdHk28MA5YiQXzNEb8BB4rNa1unwGGCaLPvXijSMy32ZBiwsHFfMnEhWTaLsPzhmKdzvSPxn4KkcMhDusJ",
  "key14": "3mW9EMGZyfNkapiaMWeS5FMssuKVD8NECojzagNYTGkGpsj2F6U89566LncKFezcnC7WnKWo6WkL6RHyBGgxa4fY",
  "key15": "2UrCsYaPG31LdLDCuJv7bw16kw4Av2SbUKCtaQXNYGArEBXtUUnZtKGKrvuQTiZhSPUB54yV3sAbKf7bK5hMGrZL",
  "key16": "2HsdTYipwCh9Q6A8RV12ENwgvJGsoYCg2EKrnRqsrbY7jTF8qMfp5k4dT7abAJECeT8AihucUhe1ULXHxuyrPCWP",
  "key17": "2iv3nA7sVERuN9BL9LRDYCYXydduoDqSo3y9pfwxDKzJF9q5n15TaXhtQ4mWqaGyF7DroMECxtyHtTc24ewczRXz",
  "key18": "54Xd2wh5AW4wXMWw5wTFWi2SQXPmR9hocbwy6WGhe8wfjfF3MQWQNYmb1rNyEcpE77pmQE47Cah8Tzg9RWsTHF4N",
  "key19": "4QzPJdMTSHsKodgTgyxyMTBgF3U8ejngBmZ81j9CHBUQwWFhRsKnpJhvKcMqu65bcVwsWuScxRELdyPy8Ggzq3gS",
  "key20": "2T7nH96B1B1W8PiPuC4GZdE6xCY7tcHUbCepHZNfzkzqbKocuzvb6RsKnQRcdqwL9P4rtUAGYssbBiQ5nkQMXfCH",
  "key21": "62Yde8tQUB3JngrA2Q9NjL8hvJjvnntcKiPGD8KWYgiWSB9DJ2TgkLrhQyTfAf4NCLhCqDyM5xtbiHFHXeJ1vQuX",
  "key22": "5UjhrChM6dCjvBBdnu3qzWyt7f1brJ6shY3xnWEpTQWV9tpEqy1buNCLpmqgqgvXSH46LFV5ryBbm7fnaggk2iGV",
  "key23": "5Ah7GCBSy22HbCG88KqQUi1L8FfxgXEAdXWCJYVVCQkWHrQBxByHojQoCMREr2paw2e1U7rMHWbCN2tni1biJ269",
  "key24": "2KhCcGiuCUzdcStk4dtBhz1pxM8TGkpr3Xscxw32zEkcHDD4zAr8vJUhuDVm5oQgiqygB9PrD6BF1qX9NzFbpoU7",
  "key25": "61t4FReNEwepU2Kqznzi4otAYvqTxdTCU5RBK7GkZJph7xY3DFXaFw5Tu4cuUfEgDiy2xN8TjvCy3ZBpcHnLTjz5",
  "key26": "4eezUurvGvYUSKnBek36uMw8G6DwrMb9pFuGLPU9etTA9GwZoQ2rySiajE3Fdi76PDgvHwJyaGAHb1bQ1a6pT3DN",
  "key27": "62YtgcpKb1Ju3UXwid7h9DePg8qBxoAQWEE9gL6eGjBBjkCgGZxxHtBwURxUidfti9TE9jKPao7Xgp77uibRYQ3y",
  "key28": "3hyPRgjecXuwKHRjDZuqZWR1uh34Ur5uo3v7Gvtr9PRcfP5RGMZtTp9txvxb6rH11oA83uuRmRmV4h1tJST2gaR6",
  "key29": "3KNtrN1qVTpW53Sx2jQeCx3ur5erjaaRjhxfvfkNqGWtWmnrmvZy9zpN7T8Exvu44GYu8JdypmvUxYpR1oUiTVz1",
  "key30": "5j668BNHw7v2x5CFkuwKCkkcdTkDbRjLynhwWwZT4L5UYTJQWRmzqsskRkLuiqRSjZatnsEsfLMHGLsj2gFZM1SV",
  "key31": "5i45kqo8drPZ2sQsLMYSuZaDg57kzB4UWnLb5gFJtw3zc3KHdrBaSRxp8BtfmhydKSgsJDL742k4FTZN1vd4Dna2",
  "key32": "3mev3TJkqCqexYPG3tCQaAtG7S8rEQjsq9xn9coNpoPU7SewEg532p48bJ5jnRe3kWLDfHf7mGsmGTm8B1TwCACm",
  "key33": "3KgwvsL9n4PtGU7MXtQNeTrrncCzjqvNitJnr3vDPCcz5fCXm3kjF4nRU9wC76UV1AG4bYLPzMbguBhBYKmTPJXs",
  "key34": "351anNiYBXPcmUmsbaGYFYFYsphArnyYJBR2c2576inNzHJr1uCTryzg4sHDVKakRZd5qYA53N4Hzng9KpQfyHx5",
  "key35": "3b9LJPgiYxPudJjRkGdL5LTYCoEzyU5LA29vWJPKMP7yMEYZxBA1Guorw8iMay1s3SAa7iM9RdyoeF1ekfkUy19J",
  "key36": "dgWg73F78aSz39xKnpPjvphCGW6Qzo6fp5kjPBsotPhMyen48vm9yUQg3ZD4zMxeDfsULazqmNuREm24iyEKW9v"
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
