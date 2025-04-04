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
    "2XRZaoJSd9QScgCDBYhCq9cZfxN41uUT8rdFeXcywfnVbbGwTwrhSVBBu39UgvG5tqntemcmmmVWaeB214pU1cpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X98gqgyqRbgaJnYMJ6ZEkT3Yw41tVqDANt18XMD59sNhRfEQWZewXCCzvwxLdFRLctpvKT7ihLkXJDTLwdTLZbB",
  "key1": "36c7RJeAZo2Zkq6ZsM4M5VAXDZAG4VLRZZotixxVjQ8qsBCcMooowW27vdhj4MN8aVP1zeNxbuJ3K7eVsmXZP7BN",
  "key2": "2ZGJeH8rwiSzShRX5hkZwLqHPwVzHgQsSiw8XezM6iTghQUWb1z6nA47Pt8t4m7NT5uAH7wA22RDDJaf7aPBwzgm",
  "key3": "3nNCt47n4Qw51bD8BJKZJkJDAW6AxEE7Kxa8GEoKK46daM2ePhEncbJDczDPQHvw2WtKFfSv4RkjM86z5MjW3U8a",
  "key4": "28nnSSinfLuBPBqjRqe4nvoXozfmS9EvsFsVpg1zhZC9moF4Q6ntA6NdYFVCBhE6CqUAJqWsMhnnzRsTZE71vey8",
  "key5": "49TcUmvMyNC7fEW4pQVneEHQ6dFJVGKNZd1XWqc7TeGVZiT6vQbb85onp3LpQTobaauw3K5dbfhQN6VJJKKcpnE3",
  "key6": "4mxwCckaWFgiLs9kFkHXykyCDhDUmLQ79aFbBBmQsmYfEkFFc5yW8VQjFSeSMgV3rRiwzXZ8xbhu8NMAoZ9LRz5y",
  "key7": "2UCyANC2by9FcDvYvsMWKQTY2MehD5GeGnPPx5Lb8QP3Kc7mkKviaesUH1jKmR47fxiKFRThpMy4FwtCHpvgvQUG",
  "key8": "3NvBrdrwbjMQJj41jZQwEs54k4n9nRLW4Fv7TXWgVinBHPNkRMP3mPWGazGyCCSQ6hXfPDks8nVRE9UL4gNSgCVq",
  "key9": "2UeSTn3v2kSiH47c7zw5JYLHAfuRJXgLSgqKuXuQspMD7YR3ACDnrerewJKUaJweQ75Bwygj41o5fBzSGCN71Yx3",
  "key10": "5zCejfw1bv7xfjqkWLfHXQos4kLSQSe6audDwhviq1kMP2b5mhCXkk9ZpTouXjjXCrRPa4mD7jRMS5JSe7Y9Qou9",
  "key11": "4sw5zdUKQQxGGSM5oNZKMSp5o34hHQ15qxhGafwv7aSAJEysTG2UFYQwyUU8bThy2seALmJSaUYTqi5ccfyio8CR",
  "key12": "PqmeLeCGh1P4TKVbUkQCGzNCZbWD53XBsC1Fs2Qw6hPG9swQQkMpyUUcxapmataMcoGzeoYAEAoCPuXvB55uQMB",
  "key13": "3isdF6g1STq3x4pf2mP6PsnUh5rTPMKksgNQKdqcZpQ3iGsaSavKFKF9uSHmPwRRa26xhRi2qyeaiXyEU21u29A2",
  "key14": "2rZfi97apYUaSbgPprQfpvR4PTw42Vug83ULYB7kCpMs81CB248Kbwinjcqb47uwrFQm434cUMB5WDNuXbeX7uuo",
  "key15": "4ApDsdsmucnDupTcM546KFkcdTbe8FGhNNSTt2mucNg49BgC9pR352KMsjASeWfuDqQwfT1idm92ZEZuMdVCrSGU",
  "key16": "35hsdCkUy3RtJG2KrWExDmAsNJCUboSMAZsPBi4sG1XnrVqezqk76UUEXHAcWBY861yeZFcRoZgRJQGHCVoabCGF",
  "key17": "4dDeMqXGEhRZrXbTopxTqdWUivSZWW2yE94g6ibTQCW8SLiYngLt41nWHZLDNmgYisgy1Ku7SKeVEfw7EPGCmQqS",
  "key18": "3KRaxPj5QPKCCjSMUio8PHsJTixGChWnhRvwv566TkKfwmqLV1ext7JgCXeznUaEysemkrxY2jYYYaSVR3DhT9RX",
  "key19": "2Q2PPUTwxe1DQ89yyGAPDxDLTbqMhU3adpinjLsG14iuvF4DRNUMoHfmsNiQb79mbWrtCWcYUiAH1QbJN5MAczoz",
  "key20": "7ZUKmLBGf2Hyx3qfhmXUpw1wiPNa2m5e3JXMxG8SQUTPPsGJ5j7XSoruCTVk79GU7TKf7mXuYdRwcbcz21nCyci",
  "key21": "4yZWAKmkbvoD6hYSXVGZf53GRJ4S62NW6FP715EEM7FRAu74eSg7cmPWDakHik74RNTBTgwcBXBKwfLLKeKw6j6d",
  "key22": "55YxGjCs3ssTkeLcNjRgPNkgCm6HKWDNrvcUqT7NESkX4bvTYJ9LPas88q2wpJ12pSzJC8Dj8W9Fh493KTkXUeqJ",
  "key23": "ubwuhhcwJhxJWJj89NFsA6cQs1Ydvev9cchVKX7xVVp3ciT1ABaNgPocRuhB2LpvL1bDwoCE6cwr23Q5eSSMJxR",
  "key24": "4f6pubvaFfieZ2FNkkGJh2RXGiDRzKCYVbSSmsqnsUyPs9GdfDMrbZk93k2QZZuEVnGaEjSRwKFd3Jqwb67DBzaa"
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
