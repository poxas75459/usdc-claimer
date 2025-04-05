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
    "2ZXQsHRmW9mJNtHGcERuv1Kapm1tyjwYofb2edu6fHftcv8gRgeNkj8kU7ENRkwBnTotFRVU3ZHWnVWfSTMBBr4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28yTVwXXi7PmDq3BaNgqTDggyRJuwiAhkRQxToqy3h7pkzLLGGGyuEdPSStQqWz6Qzm6rNCv8TyxN1UthUUDru8W",
  "key1": "3q5f6FDoXdrBp9sot4pnaYX5KbDwTUkvNr9iHCi3Fpe996g8U1WtiCBcLdrf4EK8Lbe6LDMox6bfh1p8wD86uV8M",
  "key2": "gjnTHN9brWtMjDBnKPrafVPmt2q2wxoqe6SfdfBoCkXQ62CASQDn8dRERN92GPMjnJHDsvVQLNksUYXTLC6EUby",
  "key3": "24dPuHtGa45i2h4QbTguuGByXuXvC9EpCBdbwJA93oWWZK3DVqBQGFyNkMMHADxEyVCKW3ks5Ur7odrczQ4bQULz",
  "key4": "3WynXbZ1suucncvg6BNw4oLjK3EwaQKRWAKfh9sDFjRBj1CZMTmz8qBTPDoXKZV2YpiUVG2ceBxMTiHxjenzcYf3",
  "key5": "2pzCoTysMnBWFWSk2T8FTG1B744hGj3ooMjyvMtcfiQts7RW7bfY6Z4oJgWvybngjFRdcie4RkZLKhq9NLD7QMTD",
  "key6": "3HfDvGGmoL5QZD3TnqRLXd1EWinHG51mPzZGLZoK1g8fTfiAvF85mM5D7qJZZnf2XBFQoJzutKpq4g7tSzssgVwX",
  "key7": "4awFqPXpWMpPYu1TkgEV5xtDKT4Z7xcZVTu8p4X3GoM1AfsFQCWcL5TkmskT8rGa8ukovir8qz2ZGvfKH2tGokM9",
  "key8": "5tM61vADBQ4iVjCfNRLM28Ym6QTJw9XmdyCBVUMsv1UacXoxdgyLt6R5Y81RK71T3wntjQw3zc6wBmksa6dYhW6D",
  "key9": "xGuyccPSdyzW7HctJqFwALPgXHUNC3W6Hi5Zyw9xF31xrTV4AnRu4TXZyomAGAZFwc9ePeZpxL6nFHtiVGZVdQ4",
  "key10": "2ApCSSGmWxxybL4kbFiV4K4dMRev5NEiNf3raKb4D83xowFESG5RxAzLKnQ6pwjSSo7GNcHSdnCDrCT5N5uW8P7t",
  "key11": "5pRx7wPXbshGVb5MC4TSYyWuy9spD1EEhzvpLBhmgr5iWupV9EojjMbhvV3XWQJqdLoAB1dUcBmwJL2sHVjV2ddj",
  "key12": "455yqSWNrxgQkZbSCxUBXtRF7C9se3hzTHesBHmosJcucra9nMZotZNuTa33UjvVKCQaM6CjhXj2nW8T84xwqeiZ",
  "key13": "43MrZ1FxVbzZ28X5TN5FjqredB73Tb2UsAPy95VVdjyzyPkgzp7Q9VzysC6tfSEgSEU5VmtaieLFKLTvEiCJaU6M",
  "key14": "3HSUAnAqEPVfSyt6EZihzgAaiU1CtW54BEhjecE3n6EUht1eYQ6V1iGHsj7kvFKc5TbekNa3nW2kPUn32nxJ758Y",
  "key15": "4EucfWga49EfxCY62sb6iyS1VHbpiNvwVwAiBwdpvdKfjiZhucCKVRZJJXqGQDZGFuR5voMzteoWFNF91g8hhdiN",
  "key16": "5GmAwggMfaUz5sFqXa5A8hubucLqYAXYVsmX259CccFPatADejXtKjTJeAucSbhUo8EecWw4p5k9kd6QmtXqimm3",
  "key17": "3ka1Pv3aYbyNk5FeJxBJKXav8aF5A7xhZG2nJJzYw6ePFFjm3VVVXPDV1Vk3ggNGmTzUVvUjSySmp2gCsGSoYk4d",
  "key18": "63cjkz6SJXE8WyzYd4NoXLMzChYXrgWv6GtVq5pSdCgJ7x1jTShouFCGdSAo5gb2N2Gxy3EKjU5UZFGaXiTFV3dM",
  "key19": "4gZurXZBp58ZzMvbeuqQweynqyKgLJMvF1VBmboE9E3XSZ8ZsU798UikW1rL8Sy9oTP1rNWVMdiZaeogizY5t86z",
  "key20": "Z3Mo9aN1ZbKFWn7FbPf8WToNhdP8A5W2HwT7kREt5ALWeyqjmiq3A8x73e9GRZ2YzgTJEL7jD2U6hwTc32HWCKb",
  "key21": "26ohARfmMmRLPD97y5PTp2xWDrLuvp8rGXUmejZGwaZ3neE79aVSjNbbrLUGFqxcf9kvUVJJbqvNvJMAC99C1zuG",
  "key22": "P2wLWDrsdh5AdvrWcpEQ7eEDAxQgDyJsrdk2sppdaVLzin7aZijRY2EdHb3rm1y5kjF9PYZXzJobiPisNER6guF",
  "key23": "Y6e91JK3qMkjHSRQgh3VVjD2NoivFyeD8QoYCBcto8YyLY6KGMoP8axr2ZQ7A5U3xbkbDPmxv7iABqcnPGJzfY3",
  "key24": "2qCcGyg2MWA1AamzkoB19PEte7G3bJ3zcFWRRwpWYnMHYFR2JshCeDa8gnLUQ2aV3Vz86z26DmWGharZuBhuHni9",
  "key25": "3SGpRZoT7hjPaJyB8iVe955BZ2V1929PKWfMxjDvfgbfY4oVN7xpuMppq5mojYrzS6FX8s77wz9mPAX81sfoJWL9",
  "key26": "4xR2cLSY73vDTUwNG2KCUtRj8vXsDNqqLWQVHaQNnd8EJeuHhFkEo3gLJc5Pa9PevJK4EGa6ghPNvJsXwVq4s2PT"
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
