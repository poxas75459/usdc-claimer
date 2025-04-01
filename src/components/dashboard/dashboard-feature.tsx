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
    "455T5zNwPFRPULnjEGLG7t5GAbMLAZPvC4V5QV1i4hv4axUVQU1WbuAiHEZk6JaTcMah9FVSHFsLDvhcJjHddLSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1VgeRKws4m1118B9DQiUkVAMyuiaosDXw5E6H24FTHPQRdPTboVDMC5BgNWZq4YRvFQbaGDxkx9kt9jUDqRyh5",
  "key1": "5xAaNPNdhuhNw3JomNExeLr3Gyuz22DeAwRkH8hTx4kzBCLHyG7mpLVDQmaiCt6izPKxbh3NKs8uQVMtX6aqCU7M",
  "key2": "33NLsSnwp3vzPc2DPJVdLB9PufDJiiCwXFssB6qkJ2XrVkN9WoMiRbz1EnKFYSDtieGALBUfronfwK1a4fUwRQSo",
  "key3": "AsHyLXDhwbHtzY6KHXDzPecUwQxokUAf795X4KJLQQFGJaLY2FZwvf2WqTgEvPzehtyLoZkHHjZHVsS8nb1wwDR",
  "key4": "51tszK3iSZwKVEYNEVJmH9veNrKsPP5PdqYi3ZVL4inYXBaLLTqrWV1UXxD6pVxEDvKuY4MgH3HNHqsmH8Zb4Bs1",
  "key5": "gJtTY6Z2mo2uWL6g5ydSMxNGBLgSJgGMJLQF5qBksP9Ho7G9PsLzETDkyjo9dtGU5VofrTY2aeqrqjAFfEuNBqS",
  "key6": "2uUmSHZ59KVcNUzGyatF6298SGVjjmUneeAarBumEEuLC1iyh75o8j9uxkhq12AaRFfecWAVPoky8gryKAs9tn7Q",
  "key7": "4kJufMB9Ab15e5qCMEheTowuQ38Erq7tu8iKgeUsqvigDu16esUkfAdGwVw2M5gmGdu9norZJFw8Gj7gUoA8ryye",
  "key8": "29qj1nK9AdTDowK1pfTMapMPez2Lr4Z4zQsyBQhNVkc3x5j1HZgAHgA4GABNDE5rmWDRJB3gm9wEKBP1Gyid3KWs",
  "key9": "3EZUQBVXyLfEB2gpd7wp6EkswAPKZt1gcFDA5JzoHdwc7WwBwcxGsVy73J1FjHp9mzdCY7oLJ3gvP9CLxWkgLr7q",
  "key10": "61sG792qqa2vWwA8YAAfsYcKJYDJcMFJupDpddkiZ7JnG8frwqVzCgCTx2yLT7Bn8kDJ8KEXTbkWuwPmebjEeo9W",
  "key11": "5aRHJqx8tT5QSJMq4Rt46M4pYZiT7CumvJ2HVS2zgzZRFeYSWPzvRJtaVM9LAXeaYgRRAmfsv3RbYMumSkjfsARa",
  "key12": "2FQrum3tFnMcLcD5XFZFKRZWkuTJ2zjXdcYrYQ9VkomzNCWkzsCKDN9aUq2mUP3UrpHbt1UHbwWbKbEnqzdkfTBb",
  "key13": "5hPQmTPf2oKZc2Sau71B6bywfjRzynFo7ya1cUngoHnu9RqTVwwbFogPm7WZEvmUjcgnzxqdrb2qnmAMA2C5YLac",
  "key14": "226jQWvAyoBAWJaGHkMbL8jJsx5fC77x8Vig3yaU6QGxQpHav1KmYY68SiJ59uH2AB8Guwp8gAhevqEtsS7HwLUk",
  "key15": "4XoBZjygRRJWjDQDE8StUXA1wRBmsfu3GoG111PQ6gJ57Q5Sfjij4W8TeRCaxDHoacQG3mcng6pF1QysMBVRp8MH",
  "key16": "2VGMwCwepHGnBCdKy354reCAzwVf4dwmKDhMVwVvnBxgZm2eD6DhgFMA4jTee4CxHnWhaykmQHF1jdp2REVFkz4V",
  "key17": "32uG3v1UcVLnnTN5hgRPpA3gjVusAKBn8wGWD376pSa6xX8rno8wYgmb925b5axkLUJNFNHMLzEMSLpLnE76Kt8Y",
  "key18": "3Pe6wpfHP2uKNcwKfgg4ni6Vm9Adw2GDSpEDNzCaEykfCkerqw2B7bwRyevvLyUQkn1vEe3G15LA6WYReCpf594W",
  "key19": "5Q3TXpQL4S2JBB2LT9Qe1T9FckypYDA4Y6KUBMHVBySreRp6Yun7bcrX8R9SZo1a5TWBW4Vc3Gga82szjddAAoZG",
  "key20": "tufLY2z7R1mKSGLqZsYFyPPKZzcqhE9Wcq75WVrZq78WL9cXtgvoW3rfvKNKcbihoXAhJ5sPbxgCJnPrsAQNkXL",
  "key21": "cBQu72ZdZPsPVwJCed2UsHFvbacBpifY59g1ph8s4sNqXKfxZkR6QMqQtGv7YSCB8RPjKVs2mN9fCsvNrbouD18",
  "key22": "4bGyL4MiL8YQXGnLVdD6Yrd7aN8nC36gZiyzocci4i891wH9c68XMYZR9uoh5uhLDE51ocCLGwSvA6DSnjcPdm3R",
  "key23": "3EbnNM39VEiMdXcLtKSUgLsXrXautbsjmjXntNHX5dgkb8rBSFpcA5YjGzo8rrxo356H9N3TA96E4ab7yRwVC3kD",
  "key24": "5i9YzZQswrwuCJfHDAxXzkiYEAjKXvrnb8A15JBmKnKdPssd2V2xBLcfxz9vLZNnv48AYmzii1NyaMuVpFtD6Hdb",
  "key25": "ekUyyMkFG7uK1QA78Y2k9bNGjqrSEqqLAhEKmjobzu2jXcFdxhUL5uxEhs6ndyWoLzDWyfC4Cvvj2ZRNmPYrCAv",
  "key26": "3K1PATQNML8mBhoJco93dc6Vh7GzQCSSSZW9a4kvXE9AdamLQFRhZQRadZmrYoiKGd3et6vNT5AXc8hUSQm879As",
  "key27": "57qw8WUVDD2X9tXFvLpiCyqFc6x2BXm7drXNTHNVmEUyqhyRzvehEjuywPJvMN641ow8iSwNmm151zYorGWKZqif"
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
