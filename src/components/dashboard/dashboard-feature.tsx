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
    "45i9neWYcNtD9nPMekXgJ8QFDaeCbfxQeJdA4Hxy8pbXLs6ev3uoyVqRxsP9v8oEty5GMpAoYrpuu5aW1WbBvzxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZJ6xr1tfFeHCaLFMLNmtyrFgzq9SbNAU1gxeqACEMCwRTyMXzybJAi4tWHhKqEbov2RkBpbbcJQrXYN71mtT9QZ",
  "key1": "3UF8MQN2wNuiegcJLgEeUyuMSdBnVvA3teCq2giD6EKtNubj9M3wWGJLF7W2ZBrxJi9kzbfQcBH6BumAPkCs81JN",
  "key2": "2qAKxmA6cw3Wyj4VvS1fxnWPKVHVtjhia2kKujZqQpS7GMi74ejGABu2mU1SZSdeen8y9muRq97d8kzFGe7jHDmX",
  "key3": "S37fQTo6zSvhWMJqf3khm4Q5Yzt2x1SdccFtsQmmxAjWWRw5FXyChy3oUcGcfu8BsgaDGjy3BzVV1UiwcDEqJHt",
  "key4": "w1QGfKqSCRFLtkXUKuJCJahJTp543igunJKnxpvanqV8vSmdFUD6bGeXp2fQthhYxf9tyqubm37NJDNvpBXvkMp",
  "key5": "2KMDCqtVxR9bVK25QaBrFwmntSBS2fqrmQjoraxUhptv5r8hBexXhbXHB9ayRA7Sb7DJ3kZNmzYrJJGGh7SpTM64",
  "key6": "61VUCn8wEzbBus1mvpvXWdFh6ok63gkSGqYJfyCWbhJ1yzZhctFXEihxWQQGDpZopGTgdMFfVraqPJHR222u3stp",
  "key7": "5nadPP2W41MjLT4UKRtC6kMkgWBHZGaMayjjuzfRemmyutkUBn27FQeKUEHpZSb9PMYMYCQZNPBnGnM2DdkaKe1B",
  "key8": "677JkKbCztaH1h4yPReAggYMmNoEj7iNNy41imfy8uZfvRDzgMVtCuXxg3MCLq8AFijVWCfgNaGSsWLqzZZQxKWP",
  "key9": "4uUpmCMLHeHGdaYXbpX2e1x7o2LkDSUhW3XumMHZiwA5pjkyZnTWdjJx1dKo9zC4YaTMMkJndJ8wt7aSGAdU9CBU",
  "key10": "3gV5w1KQTDNxynwutvviNB38eCKNMyri6rVbDTVwnafCuFLFbnrHYnsXVrtRKi9wn548eF8ZaQdmEjytZwvkLAM1",
  "key11": "4wDAZ7Ttu4XrrN6e7xDgof4g9wNYEuMygR2tqfbAoUK3NCByzhDED2946y1zbpJbyeeLXSgEN3YK63GYnGgMUVRb",
  "key12": "HrTPMMPTtoWLhTq4u4RGq9fBRf53uyvmfMurY2BtTocVWd8eU7B4xPwLwRrb71PYDhXzKWyg9tsqPz87CQRZtJN",
  "key13": "3adcBqjn2J8g9zqUw4jmztCFyW5fkJSTqPbXaKFMnW6Mrj36KDVEjipmVS9kCn3SdU97pnGeuXeprAkB37TtZp8R",
  "key14": "BHdrteTRPhemRuf9trva1yCgsNzeqckrB8ZLG8q3Nshcgo76jmHDVCvRnFnWy1eyP1RtGfYSH7CrpbvJnxz7vTF",
  "key15": "2Kx3u8dCFkdxpy3NErxXf2fz7ygvhtgo7ZYVoFLLMWRjUE7G5MM28vVgbivR6Hh9GvqhKMaCrXRxwuEK9EvWrLBX",
  "key16": "3vAv21c3boWNasiEPge4ZSsKFe6Rx5mvVeTwV7NHBxCxg4rvvkt4xVZ5dgRjExpJhq8AvynEgZ2TQmgaHuAJZmAG",
  "key17": "1ozdEU2Dtn6B9FcYVStciAYbHftQ6nVLQTpddVsmJWiSShCSuKHnZXfMKC7Ppw7qqnFpc4KmymcMBB2GPX6jwjb",
  "key18": "7qgzCuwqLyJp19BMn1WbogS1q2CiXF1saUQ3ahFpGF5gaNn8e7T6mjRQukgvfMLbb8Hg7V2JEuTUhXYibktkWcq",
  "key19": "43gFizx3tccCAvpn8UV62wsrJfh295QgQTJtL88NUiXXHegSDFHjkYGAg27BUPNBpUR8MQN1sbfFCNE9QFyjSZ5x",
  "key20": "2Nmnn35xKrPAmsHxs99isA78Ryy8TYzpZswZpbEfda3R9Kp5Ht5QUpPZCQnbD3RimiJpHqGFYVGecMGPvArVhrnt",
  "key21": "3THczwkZCuZ3DJQbad17Erjz5JCh7iF2CSqp1nDw1E42hpsHvEUCeUZVWoazhfx9sQnBP3sTUEzuZQb4RUSB3nL8",
  "key22": "rFNx9ekGRF8zdku3RxHNSZL7EJ2pcngxgDkT87jtFB6VbVv1z4NqDevYckoRpfteoWrigpZYyHZ73dQX9NY5VZB",
  "key23": "3vH3ttAixZiv2hPmW3FtHwvK56nzeqt43G7s7ZoWbxvN83XgrnUU5j9Z7QBUP3jfYUpkE69S34nC9DTKz3xcAa4m",
  "key24": "5FHXShHDg7xsC8TA7TAVuKWDMhwR3y2Mj5GBtJopMr9VaUGWkdz6qqNvEPcEHSnnh8zy6kM44UdrdQ9G2R98n7T6",
  "key25": "3sSppxEHH2SBAsgEWku3Vt8f1ufYFYVmbP4YPDdCj9Yy2porTdzwGkYpWB8Fuh34ZYRTyXW5FD7nX5Lu5GYFsprz",
  "key26": "2oBYHdpW1B5gzX55tubaCFvFjfAmYYMRTz4cmqRt8i63PTr3S8kj8BtxH5cED24eJ3ishE7rqAGpR8jA7Vtv6VG7",
  "key27": "4d3AjeKTeNopbxwcXndZsfpqowRQ1nCWaMAgkWmv2L7aEFEW7gcimfAYk84sR8KbdWHKzangJ1ZEU7BePZh1WkPh",
  "key28": "3ThA2qSj4d1f24hn3q6Jtfbw4M9hmKitoUthykCFhukrwKWCeLxRgg1Gnof5oqBHWk15jicgQsPsNF7hyDgjYnWN",
  "key29": "28RCktiNHGCLbCxzCDzxei1Ac4ZC7236WpdjBsB3Yc89U9roVhEk6Mvrib8gqaTXtndN6mhNP6J3Boi2ATWnFiYg"
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
