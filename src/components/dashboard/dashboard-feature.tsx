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
    "2HtcyDAkCbbrC6z4tdn5Bdbd1ihmKGLMHasMdg36U3Be6Vhkiia6vW5czVMCj3Uan3yoX42Yk5y2ySDZv9ucLzZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeK78q9vPG4F8HmNr8SC68sPbDw2N5nUSczKeBZyWpHjmALoxFgKi23Ay4vkG4Ty5XZrVoG9WCv3NDydZHJmiSp",
  "key1": "2BcPVp4pBchEZhDNCSrKLDTF9EBU9yugSSju8RTeNbfmjNj1zTuXorotbAwFrYoPqKRG947i7nV61qeGo5tHvDPk",
  "key2": "jprPi1c3fr4La84vyoXs43pvwdeQiCAzH4jJyD1DHPbn2XLB2bcJGxDUaLgKrmL2oEZ3WaEKbjCGCCcCDoR3PKT",
  "key3": "2hLF8JdtwMLi99XWwHfp4Qccm7aBBRhZTC6kN7C8WbMXwoshrRVTibJg34VXUs89E5nLgX2eyd9ZoWeiViAPNP3z",
  "key4": "3tDNA3B6MNYrgLiscE8cBhbRMr99c7Q5HwoG57qPHUnw3aKEqgTCWPoMKcGZS1q7eTWuVpG1jcydvAifmP1vsAzY",
  "key5": "m28fTeJWhvkYE4YN1SsUUkrqYkMsQLaMs4iSaRBnv1BEaMwG97CF85jtn4XDW6dyf1jPowiKurcdJZUftDq2ekE",
  "key6": "4e41uZQ2EQqSWU25LUnumpLUzoE7sUrHRwi2GYE3EdLqpE5LDKd8GErx8h2NjRS2HRdGzgsy6HodX9x39JazKusE",
  "key7": "3DvF9yYebxqkYGA3oZrCnGw7ZtJHcDCtdnF98HXyuSbC4jzqPM7n9LLJLmNm2siFQVyuovcHn6HgFbJrFe9VNtpx",
  "key8": "47bfUW6DTKgU5jyj7BisEKqb4Ea68tS2UtNtX2rWrLgd6YumJ5iopv2SEu5MHSuzg6GiigEXD2sNuriSTTKiqi2a",
  "key9": "3YGRfdEEZuN3UxBsPvrLyx1XTvZfuxkz6BU3EyFqPuH1ibGAWEVDGcgoeTZf8RaDqVtePuwNjSGTgAwzpDQu1qBG",
  "key10": "67Se7BqhJ2gf6dHFvd3F5c2PjxZqAQfSEKW1wJEud4fFkLYB5VPVKWdPAjgvooTEkxsAdMGgG57pgFe8SgCAxYVQ",
  "key11": "5MReWy4Xs8g8ZXuraaZ9sTDw2rnmtnruATpQiigXybViNE8LAofq6RUHxVvwFYyZ2j15nVixYjJBcdh5n9AwCc1h",
  "key12": "5wNw4ZhCCxck8B1BcG4EPzekKmLeitugy4Rry2Si9YFFhz6oDFAdbKjhZngt1ay2k3kpq9TbZ8k2oox8iRDbhsgy",
  "key13": "hi7ZwzBvgdkcCoMEgXSv22L8JPDZ8N37XRZav5oXVRtuugqybRyVa8Jfwgdu6PD39ibBuyfPRD8ERtrikjcRpni",
  "key14": "3MXRkFWGvtgnGdxS5fRi62y2DffsN6xJgLdWJ8SRgDHiCZ4WeTfdHKn3Z7e2wbgRNugWSLJZbyEHfkpK5wJNw7Z3",
  "key15": "2US9xMZhDLBHghMex6QKNKjFcg649pio1isiGJH5EVVBzX5T9M24AK8r1mSZFEhXb9vnDtinCfkurDAdUQSbxZGR",
  "key16": "cLLXVZk3TSoaEk6Lw3kwAV7vh45vVLuGgFkYVwcU5NAsoiPjmHCkgxxT8shhdioBzG3imJgw7fei7pgErfropUW",
  "key17": "5WGBvz1eMUqnNs8Dxw4m5xc7rcKaDSL26yX7mhjPujTARa34FZnCx8Wxe2qMwtpSKrUu3hSto1gMhHp7VYJs3x3P",
  "key18": "3KpZ3fgj8mWp6SRtzNGdoFfkqJwLkn9PD73pLPApLo6kcHAkrMAZeAZrUTptVRy2WFMC8E5ysqA5S98DSUJsZJAm",
  "key19": "314YHYVkjdeGuLBJdKNsfD532yCmeaRgsjYzsekPjPerpZBH5Mya9LMTH46BZGSWUekz36cqp1cBQp9aixffFEfj",
  "key20": "4PDSuAtHzEX6Kaa77Sm8Lm5zQafavUAVKnXJeskFs13ZnHnuXn63ncqcA1mdj7vosAfsSFUf4cW7PSkKfccBjdFn",
  "key21": "5UTsurfJYPe6xaaNy4FqUq2tKxP5eKR3mEsrsttYw48zGCMVMkaFgKxZ77fR9UusEuvBF62FmwpM7bv1Vv7TJVWS",
  "key22": "2bYBQa9rw8qB3FcnzgFvSvkVG7vehg1pYHL67D7hqEzp5miq9u9DJ7qtwRqsGGhKmTE24QNMqN1oC79hkskqBDPF",
  "key23": "3kffk9beX6TGYHA2r3ygACkzVBM5NXeKCxwySA16E5YC4auH7r3bXYVHpYEqGpC4opGn53SGYKB1xkbh8LCuqH7z",
  "key24": "4HfMS3ikKArR4sF7F1epi2aWtno7oV9hns4APQWDumnh39yJMTWG7Qx1fZZSqMouojyyzKeCboc1gbLRD7r4drTL",
  "key25": "5HB6aimjHLWmVDFjFsNojFYc7besJ8eYwB6hELf5bQpjFF53HrzzqAMH1VyKVGbp5T7LmeCHH4VscBwce88pqu6y",
  "key26": "2oEe65NuDVaCWfpJzgqS65ogw5TjSknbgHst7tkK42ePbxwchsbNLvfpDQwg1Ma7SYwD8iLsPyZPiDvyQbGnnz3D",
  "key27": "5TDYTtwcrC2fgCJFVwXYA9T9WDQZE9cg8xHbbeoEiNcRnpAK95GRh7iRCyVQqYjpJhkPenBd3S1y6YaNMDqqL2Ce",
  "key28": "3LLyhQPkiqefF1QGNj7zxNSK1CWT19c5YRegG22KrS4sUTjXfHu1btpgpRSWXGq3qovxBNvEeHWqvEJvQ1QhuYzu",
  "key29": "PMiTkRg5SdCukFo1er1hNSrAeFwVvuRuCByausAmSLTNfyjUUwqiZoiEtof54tp8UfwHQgPnbmiJJYk2RjY3a9Z",
  "key30": "3CniWfRCb6V5dggWcDZSW1H3mpcdjkWbnZU5ypydQ4mVoGszyxWw9zwVKPYd515Fdcb55mQyimSH8ai21JYZWPPJ",
  "key31": "3ZiJJ77MEgmkH9VGwT7CmTuG3r7G5RM5Kyr28nZUaFHfeDApRvh9DWThSc4zAW6grqyRcCpynLwD77Z8hUCZL5tv",
  "key32": "3FwxBHFXJWX9u5VTRxrWGUka2wSyUJ94ZoZp6xfYLGtsUxBJk72iAdxSCXANQNWKUjCQytpBbLd89dE5kh2bK9ns",
  "key33": "4mT6LwMAhJNhAxbJD4dVvEeKhFrYKdnN7y7R6gbYe9uRP3TRnUaR4A2BrzdA1NZaEpcGoh7BAcqg1ZPCQQtftPej",
  "key34": "61Cp7u4T3ea7AA2hDbCrQp12BszPvKwWkgvqKUeiRWtNnXyocD5fzczbgp4qGDGVFdtg8rpCyGbJFvpSDwByDBPZ",
  "key35": "4kUMNfMw7GqMUNLGq8rG5wyRgb38rcnJcgF8VRPq4xx6zTemmU6Yb7kjQy1CHnSqR7poiuErzFChZCEfLyMjmVpT",
  "key36": "3cPjBQChseFvv6WkuQ8LFSF9n4MN8RCY6kNcV6MapmjXmwC47ok8Ueg7PtPJtnPAGYck9zqdYWyrLo7EWWhSufYW",
  "key37": "5Jn3fuGX2ckofCtp6s5sBSsvJxrGtuM73aRSscYofhe6Sict893xmfcyqVrTjHroTTNwfkRbTXTb7vt3hdhgv1aW",
  "key38": "3xtiEW9d3tZbxBbx1mBrdwAFpdPELRx4FmYJSzmHjoM2P852RbY1ZrEJ4r7dAmXrNjojfqBrnvG1tdi6UhTPciu3",
  "key39": "2Nvr3cp5JEbfU6HFisjxTKFEsaWZVZ5xQbQz7F9x7HvnaXH9iGVkqs4zTgjziu4KFWwx7WBngVte2uvcD2Rdd7jX",
  "key40": "28RTcex1brtQyYHScNEN6BcSsH5TcaA4AY6xwqY3XsVSjf7tk6BkhGrwi8Wpeu7my11qC4bN9spRqURVBQT1qtAm",
  "key41": "37Sysv4y2HbTKwVyBErcQTdQKqHhxuuMGoYop8fZbsTCRLjtVNs3s31h262fVnXp4Y23wMNE6VLp3FLCxg96tBoP",
  "key42": "C7adEo3KWLFnpecXmKbCTkzsrzTZP7j8oDFFHq32pb4gb6k2LrHL6dgrvKzf8UYAeexVUmR2uLHaPM8CcaShW1e",
  "key43": "2AvpQGiRon8dJ8jxghUG8vSUoyYhpeTxzGPHYCUdcqz2pNgDutKovbH9BRp4CupYWFi1HEHyJYN3crnx1KP1p3SP"
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
