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
    "qgci9dhKEgNG5hY7f6YKvsL9HhP26KmFwpGFngiv5N7w7VzfxXVBXk8qVaUqRPrtdi5DAMg8tpXSeCf4M5Qnwdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuXtXeupa1ktBjLmsrqiVCJ8MxAhy5XcadWoXDLbWUnu6wRVfBrBkMKDRjn97zd7wWjgH1r5CXDR1PMteq9AkRo",
  "key1": "5FkUoQB5KwyiV8eGqxgquGjeHBZsPxFeobh9d3dQEz8pdQcdPsvvPG47cDPpttKmtGCz3RDfRTki53AaXiGkTCYN",
  "key2": "4nb9bjBmYWUXAwG9wF1eKVDWvmdw4Gknvzhs2rCJQfc2xEu8eWCjvg9wURMNJQr7P6LFKovkf6C7MNp21XKVhcHQ",
  "key3": "24fwxKpcZmGzVMNC6F2GQionEZr9wPGvqoXNrGyJ8sJe8hp1MPTMiKvs5vHuWAgymzhNg3r3pd3eqc7anT6t7Xro",
  "key4": "4ftqD8pHV5FceChbiroigeC2E3sW6aPQgPPMxKEbdHnrZQjkmCDB4RkEW5NBpV5BBoSPFANFGMEJjh2m3p4dKevD",
  "key5": "4996hQY6rSvCpqN7dWNEidQntsQZTKsLCqJEunVJM4DwZX1GwkZKjFn2boDsaiQyBGQutjm9eAaQWtvGEJVZmizE",
  "key6": "4yoiYYtT7BQBF7wCN3oSUpZjJCEiFuYgJ3rC1QCEwaTXa4Ji7TJCjo4V4MEw6QgZrShsArd7AvvKMPZxJTFAZjav",
  "key7": "5Kxc6Y7GSqVspuTx1GswxNecueAe6DTX6z4PnTc6NW7zmu5WcY9TKbhpzAu5ZMaV9ttYPAqfsjF157XThLjzLSGJ",
  "key8": "4bS5VSj9N9JsAzFE7vuucuMbDngrZMhmo1yj1VPAgCP7Rky2aSGgKy4zFeu25dh2QZSFEtGNoGnoPzozmm3rmYk4",
  "key9": "fGJhUGJNRaNBTfWLrXm8YUmKHxLic6nqbcVUSVk7VoMdNEBh4E7w7hWkYsytv6tj9insCVNmsbwWssFoz8r3eCv",
  "key10": "2apMEe9pXeyQEbHeN2ejqZupxx3pcSinVdYcGYragM8SLDwqtvdoEpRcaLN7DMzKQRgTqNFdXssdBufpYAw6bnVo",
  "key11": "2c8y4LtyZHGxqAJbAE6KjeNvVrL8VEDh7DDJ3K6bPXmEWMXg9xawtLNNtAQeTmSS7adqxtwyMwc7hECy7nSYBRiM",
  "key12": "5QWdo4TyFgWW5k27ParR4QktNmpriY2RNbxHZ6wkwCJ3wJZzJybBohEGkQCVYZjQUf2gFBvi3frXMZ3W47nCfZ15",
  "key13": "yJ7LF5z7Z9EBnhtBswD7sK943ARjUW4WQMZCiToJxZChqTBPSfffanvunycvGnyTqWQLZyMNVFXxQNk3pZ5528J",
  "key14": "43RtiK3NDWRNRifJ9KiNveXXmHBoqzGRMY8DqzB4wKhUb9NoAJ7NWjxSjoUwCGEBCMSRxHUW7GLwzjqSunZRv64z",
  "key15": "5ta7njDtnUZhPjXQ3qKKFjbrJZPBXVFjvBgEYYY28PhFKmYKowrQrii5pKTyDsiaYygKsMRPnnLwMu2KD4NhAF79",
  "key16": "2H2V4wSGKcAuKqTWweTxsSM3wVv7eW4WKJRLjZmwhMcaa9VNNGN2LHrXpf9JQYbBjE94WzDkatjDW9DuSGMjTMVV",
  "key17": "2GdX1kqudKBChqEmyuZJwgr2k61ZQYQz1gZnrm2xHy31ttkTDHD9mjsVN8SSVAeaN5BSvxu993AN5xM3whAvkPsv",
  "key18": "STFkbE3iyypK4XRvLTYhEcg2e8zB5iC2fXPu9C8zTE4CY1yQ7RMMbvpFk5RacZ7NJTxfeHyU8GwKgZ766BBnFMp",
  "key19": "28wYa7Cq9cZBmQ33qSrQmSgh6pAcUc8apk7gQX5QQjqAm66RJDT2XaGcVRj1aJbdGjT673dwQ2uhPsxoMeZBP93P",
  "key20": "3hYuwEhLYFLfQBahaMDfEqQa43xYQcm3vu2ztU2y7kraEb34sec4d2CmjnfMsfdC7vUsVdpVR8ti1KQ4MEpzLz5f",
  "key21": "5D5KBrsZ45dvUTjgmdhr6VyE4AkvYyrFJpZJJpwtFv6wv33zmBaKtWFm3SLSpuwH5CFwDHv5VsX68s23Ft4shne8",
  "key22": "5y3M1inLCZPp1hEjwv9wXZusRk6ZRqWujXn9znSyzirAGGP5kjA1kqoctr13CzZyxteC3KMCda4TmeNBtqtk7ZkR",
  "key23": "4ECgfvYBYd5viCEGQFePLCn7pWPhzdeRkUXTVfznqS4jER45ZRJPWKUM9Pc9yQsCm2h1giA8hPLKpq7764ADWfXE",
  "key24": "5QERQBFgH772oqPX2SrTo4GxeCe3d114C9bzfsgSDPR11uEmqju6oZDtYYwE68hkg3w2CLUSfbS7D14XjwY1ZYr2",
  "key25": "YKUQqHEogbLUFQ5VoMCE9VAymWVFfmuEvZhDrAUBPqrjRz4XKRZxxnC1FLut4jNXq3S5Qwg2ptS6HxhrUhwxe5y",
  "key26": "5S53SystGpRKDocz6TSvRxsbGHspdjf9h7jFoGyYxVexLKnSvanFvdiewjknWzcjBeXJEtM6BSA7qVLjCh3Z5hf5",
  "key27": "2HH5r8tYqzTDW4j6BXVssnp6zLZKhQDQbRqo62dJtEM8wEqL9PpgL1h7c4HNzzuBSwD5Daqft5xSj5Ncvv9R1NyL",
  "key28": "3qtap6Beav5xuFqRfssD8unFqRJw4ygtHaUw4UHQWCthDiXz84AZtEPqbyn6L1VyFQyH2duWq649z6epdcADGcUX",
  "key29": "5QzsHKceAGLLxHQBAPw935pcUNdga3bczJnirGKkZMXZQkM7A3i8zj9M2pbauusRsNjVvHLqn58R1yhLK13smJGL",
  "key30": "4RjWkhytbH14dmxfmz8J17YEaFD9D2nV9xovTszPGu8sddCAYtBqzK8irWSdk7TQ3Dq2RYRecsFdAZjpdLBSLCN2"
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
