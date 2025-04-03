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
    "58wsCMC294k1mKZ7uHQavysUjytssCU5QoG1XkM1UB9TdT6VTB5fsZcCtzmeQFdnGJvRhZvd5j4X2tqx8RJgW7Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9AG63RmgFG5gUwpakc2UVDaJXQ9Neb87qgM9gpjfhS7Jqjt3DrWyUh9Cx8uWWGPsHRX8fKELryNdNwNg5QPafR",
  "key1": "VNYKCCEPtLEe4J8AMjfmimsbGByZLAm5BHcvbcun28vyFcPwBxV33rJgNJJ4XrjZ2HrcRvE177VjaJwAWgo1xMu",
  "key2": "2YSJahrsN5KrCmq8AdQwato5W4FJM1yZLqTpz2Tg2cLC5b1g3nfbZ1RyX1yGQQ8gd8iz2ULeV9ggNanLbfqeXZDM",
  "key3": "39rtUuDVs4nDgztSCotJJhU7fnrdtdfCAMLS6cZ3uk17eUwLcCubr4KjZriHpjtsVxAGfFBGYgSkA76wckEMjReh",
  "key4": "3sGtjcaibasNsR9LbrzFVe5ofN66PRWEkfogcCWNtr2pRScDxbwiLAko8pjJ4MynWCizbfBQv5opPfaLHKf3TVTH",
  "key5": "4LndCENRt6cFn8rGQQHxWctBGoUSEV2ieKQ1tHPuMEDGma58AhbVeDm1PXqyqJASCp84JiQD5b3PFR3yUcvPzUi6",
  "key6": "5otqAYnm9PJaZy3ijshLAXPAXEVJH79c6HhG2Bj1n6e41QZG6rasirWs6nzfEwvv9Egcmf7ahKrE9Coa7EE4iZr9",
  "key7": "UStXJLUybe2WZxZzpgp52UsPxu1tw5drNoWbMiVs4X1EEThyjd6oA3QChMvbc7ih4rLMFV5JsiJBUnmPruwuVBn",
  "key8": "3QA1HBLU5kBV4uMu7BQjbYj5rbgVLsJ6VxhfakWXjj236ehr9Mqb434g66UEVUe6JNDqgyFgwa1XLSrZru1yk11h",
  "key9": "E6VNsQ56G3AVtWxmuRcUac7wyrNXcptdhFn4K551wvHh3B4BMCiVC9ahi4wUGddjk2Yx5b1tKGtzvH2mdqBBr4A",
  "key10": "25xUmGwwieZfsS2RqnJ3Nd9PrP3NQGk9ggoaoxDPKnZAsXajqq7xKwa3cNniGsmyDbnpA78xgqM9Fx9HYEtNWTVu",
  "key11": "2dz5sFCr9DBkq3dzi4uudMgw32KaFqrfFPT74abMWkjZnrXcR6sS7zSt32ZdpmzLHJ9FNS7GEmjBARgeT1JS5UNf",
  "key12": "4m2oNhTWxGfrqZ7TRSanmwSySLVqBgwZT1QU3tmXqCdy2rsMHGUTq2MWJTthPdUKKRSKaj919iCmoUsyr6CAszqF",
  "key13": "4JkrUm1LR5mLDqBoMcfai58WX1Gi7awi2pdtV65dybgQqqBqffM53rf7AxVVooUbXpY5BWAJJxVEJsLynfyC338e",
  "key14": "3HXcD4eVyCMnJa43FKBWjxWsvyNtYqVMJ5NpskZkE9T65vme6tx2zAan3u8YB2cJnVNM9fm669uJ7TAisrxf4UKP",
  "key15": "65xqZT8JEDT4bFC9fm4bP8rpMyHgx41XrGY3qW8M2C4iWvg5ZmSRAEketxPXip1XvEP18yHvvu19xHKnCH77hHK7",
  "key16": "5BB8hS85anNe75Zenp9TstRaAJfiqSu8gMKVmqHhheo83bQxg5ygFHA7j6SCEta9JAYLdp8RmbDKQ5BxwKidQ6Q1",
  "key17": "3jvQgpqENcX9ewUYB9wsAFRevYkYhg7pME3rsAMjUuFupPCf8GCMHwCVQZrbeZYkD62XiYymVa2ef27kK9kqW5Zt",
  "key18": "53z6yQTQ9KWGX2n8FhP1TvUGsMXtedQqrbKrpPEdSagXja6tvkaZ5La8NYhRmJYt67amATZNCXFh42QofJV6my9a",
  "key19": "4aiULf2vXz6mUMdY5Y9RDSzartUZwwCAmWGr6aHZez5KgVbWDW2C8LpT4exnauZJUh4GRnaHuGt7ChuMhb2r5PSC",
  "key20": "34GfiJbxtweuw9ETRtPDnivbUDV9c5L5etfE2ako1hPZThvwiy3JBF8eC3ayY8tKpSdT4Tgao5gXoQ9bi7ocHt1s",
  "key21": "4YUM2rYuD37pcUYSdgf4gGNhx5ectjmZUTye1Ga5J49cCutf8QSVQsst6U91fv7BUBLZY74rVsjKgB5giX2YoiBa",
  "key22": "4ymp5bRRUShmQsePXCf5nkzTUwAozm9G59r8JfzQ7UkFHWXqwZh15FWD3WioYoKi7JUMFcnaZeVg7q9faEGjEySk",
  "key23": "1uENG9QW4mRwy78iLAcw1VDPFWFAbvAsN9Aj4wPFyhczsX7jWET4WZsRpLUqGDbA3zb75q1pcAKU7pBPTACJQJk",
  "key24": "3BYsAXBv2VH5sNTHqRPfjPwJLaxBRunDPb82eV1XqWZeX5FJwVWYL2c1Jty8Xv3ZTENd8XXW7wcpek6KVR2ZpHGK",
  "key25": "59Q6hd4mzbCS3Eq2575F7MfbFtgXS9oLvmDZE8ayHFngPeWP4p3WdmZTFSRgV8j9yEtMekuYMLGLcZUHNTwhyXaH",
  "key26": "5ixfykbzn7cZj99mCWtsCYJ14QfSWvxFqV3HEjbMJX9jMq9qo2fnoE9GCNZPhc1QBbiRxrW4twasoEbxnCfquWN6",
  "key27": "31kfUeGTpfcfJ5F1FQ3nha1hRjAbq8XuYwGugcCaBffRHVsA5Lk5HiBpb1cfBeag6u6gBg554e8SCeqJ1zL2FVAF"
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
