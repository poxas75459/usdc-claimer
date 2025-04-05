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
    "26rYzGbuX1ULxEFZfpdAQArhTRJ6u5YEykJkuqVWNRGoEeeKPdunzAaH2UxULrxUd9c3RWFebFMowhJYrKLRSmLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yh77MVHW3k3PWBcQYiUJdA5C4NyMe1FtBPm8JUgbf5g1UBfnmjE7uih2LuZxKwegan4JAXfUVL8jxfEm2vc8jsQ",
  "key1": "2V2twPSMFFgA3WmJNDkoULTSLXi8nMhnBkgajZCEYayTGUkS9eBN9AEQRsYCa1bbgia17cPqrBofd8LTFFbpsiw3",
  "key2": "4tAtqSXrpAqufVo8N7VRf2Ze9Xnq7sQbctP1dWbp5C7EbGjuctKFKPMArH79XFSRetTMVp88YNZ8vY37ojsZmseT",
  "key3": "2jpNUDKN6oo6KqTgJSEX42wVhAgYXrxuXh6iXDpEPhxpvduyLSGJB4cpM8rCbkHk3smMkgDJssbUz1SE59XRZK1a",
  "key4": "37mrgyFX7NoN7iWFhohJoRJ7R6sL1PXmHp3Joq9YF8FihEKmzG3E4j25Mif61n3tXGaSXNKJctqsKLJXvYq3Wbo5",
  "key5": "5BfbSKfis8St8a6a1gC7JASSpYoEukAgtUTTfMtKnaNfJaXdzuybuw2sohbMrkDetxipZPUWo5Ske43fAGuvQCWF",
  "key6": "3cFxDm6123iBSGJ5j5oSXQw6Uk1MiW7Hb8RtbWYDWEFuDCyyKkVMkEsMBqSKS4oJ52nnP8e2eLk77NzdwUbMjL22",
  "key7": "29wPxnpAMJmQ946wMBxtouSkd45HWdBYWxN1Mi8BUJj1AZrzCHWdaaHRyztbbRguEF2pw9sLBF3Vi89ufZ5sWtQF",
  "key8": "k3v34s5GzSw4TbuFwCsWbGkykvv5TJPXYYFBQYhUtq7a73mdgKXppsrVn7Jc3ZtLfLWoASkmbzN3DKRqtVwu8JS",
  "key9": "54d4UHZzo9H23jaGPzeYCsnf72QXsqbBvhXGxc6jBSVwcSiMwgTDNu1MnRUHHqAYJHXy5bF8ToAA5V8yX1GBwPdp",
  "key10": "2o2r2rorQvSmtdoRbmxHgowCn3BvpjbgEoW3zs1QRjyy8ncFcuEqxWZjPXKmobXyPCk27QUQJxRPFgoFn6gvMMDY",
  "key11": "efLGZVPHmbTN8gTYg1N8zexZsbWYZSts565LkxUEyKL5exJ4jwMz62di4CbJqNvBoFiKagDSW3ifrwnXrm6BGzK",
  "key12": "5WAnAKQk3dekhBUNF4LYM5K2fQhBq3SZUoqiTrYNw8NUwcKxkFaWWknawJEp9NXCZ23UuiUhG99QZefPqyK1zbN7",
  "key13": "49wsYBRkrqGzDSNy1ptuQb4JJibnXCBZJsQF2iBKUyWsNF1hfudab6pHyWKhch4BqRHCgSoYynSjFFHLSu82pQzc",
  "key14": "5PYXRTNY6A5byRoLSp9DvKnkgKjxbw5ncpAS7rUnztYmzGQDorKrTbZNbKYZnKSvQo6yqufP6zb8dBiE542xMNNt",
  "key15": "2tZKjMFbJZF9UtKcbW9v7brnso43p2hWk3of1s15qiV2SWbBJTNWGWwM14Hfb39knKHpcWXKFCxQarv5WABTsgR2",
  "key16": "4ikrcTLPcRYzFBtpVsAVKVWKcwgj4GNjZ3GJsdW97BnWWMFvvQ54x7g1akPAXFTu3uR9LyznHEDas2tP5R3iJVxM",
  "key17": "4MYwEScyum8e7NwHVwJRZXt9hhfYDnY8Sipg9wpFz5HPC3vCBrHfdsGM5gb1PLvpdqaHy5YpQ9qL5y17Ei8QAUP2",
  "key18": "5rzbGrp99j4Hkg5JStKYSNVR4dt5e683fkenBX27D1UyEhZ4DzxhDxgB2D95XEBxp46SfW2fJxeCpUme1d5LDMo8",
  "key19": "3eVrn4rFBU48vTpBu9ufHgqTVSABFxrjrf9zsLvGPLFHmdfL9sPK6BW1jNVRjmyvD4iodebQdpthMf9EBNvs1Fme",
  "key20": "2mg1FHGEcCDaDQhVkyNHh6FkaUWbBUf4HmXqtPNxgQTvyv9DyoapgAZ3BSu8fXnvEytkk3e9458d7EYCxM4s7Leh",
  "key21": "5xsmWH9psFKSRe9heBYGb7j8AhGzcJZqpf25qC4VEkC8oSZVekdQGhaJaDYb43gYeESi1BkukbdYDs8YkZN2yesm",
  "key22": "29hMwhaLjHrZUokPqkPw6Je5hXAR3BBab3gc6tw7u5QSV4e8HqLcp8G17pj74cwB4AYKBFa3xFDe2PWaBZDBMd5X",
  "key23": "66DSW6ctuTzwzBejbotG55i3VRXq1hwRxoahrWwmTpEU8NbuG4hAunT9KZWDEHJALf1EKmvLLSnJn86sWurEQ1zi",
  "key24": "TZzym23mM5nMbxZLvDGh1ooKwiMgV8eEA4Fxsy7ACtfR2TsGjAM8mGiFoy5xfdRcMGngo3XZcpbX5zG1siCDpSh",
  "key25": "34VBqNcY3kYjt41T5tPnys4mt5eBirXJFxR3VMthF4hbD5f9TmSsmcJNt88dKad2QgfEYp9RfYqhegasKVTHRYjz",
  "key26": "VWPqME7wkvfmQ9QmcuobNP2AT5dtyLAVi1F9Mpm7cxrbQHEUQY3Xv6CsCE5DHvNNFjCtYscaDE2UcJ9E9Gh81J4"
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
