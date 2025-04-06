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
    "BAShGej9zXV41q7uJYgxce9PZN2CGZn23Q1D6dPrHEzW414SqV13shPMDKy1DaztScfex5LjJCuGvV5k4ehYDZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AdJE7LNh5JyCNvWrqLxuri7ZBg13S1PCuvVSznvG2u8dsJFysYbWtiHdPx6ygFfFUphpMbxSSVL2cdpyG4kHoKk",
  "key1": "2PMbcNbd2b3tVb6aCruoi76seGThN3e4GmZpRuYHPZ5AnXmrMKyB3qNhcPNt1mNMnBqvtpjJ6Xfk3Eib2SVovaGi",
  "key2": "62c58E12ML1impypmEQp8Agk51KWPMsdgf2gBu1ZT3r5EYjbTXbok8yJsY4nZqwAkQzdeKMqH9ak4YGDZeZ74e69",
  "key3": "66ACYaDczK8us3Q6Zz2qHruPCvxRzxA5et7TDr6ASM6tZ83YgvMLnCgyqqtPFqc8FsXgvnrQLz8W5eJGV4rZh8wU",
  "key4": "2LH6gKWnsTUKbd6CSGTFdkNTaAtigw5edgTuMhopcb6qBRMCLH2Cb1Hfb1vVRtFwaD36HVoCfyGwhN7YxMKPPf55",
  "key5": "5J4vUYmTy3dfTDBeEgLKxRH8L5W8cx2qUDGa2aWXgT57XwgZTGCma3Ngd3dX8A9XAET648MVUn5Wvg3fB9MFMCGZ",
  "key6": "4B4WNFKLVhcjUcwLPbSaWYrWhqfXmj452Rm1CVZsPGWx4BgXBoGrPMDGmMFEpaw4wsT6x1fbYqJUDEVsEeQTPAyi",
  "key7": "3DXBksHCfS64vgSmJANdNjH3zojMeLTNLnwMX6p8evjnVq82n5MhxFyEqH2Xqsb3Uf4P4sxhcpJ4k7HsmqYuLa37",
  "key8": "2RhGzJt7MgmGaR4gns8C2inrLt7DUH7pvY8Lrz5BWWATC8rUEirBrwAcPeBgwrKJv8cU6Jrk8yyEznTVUaVBMnq7",
  "key9": "kjtnVLY3dYLpD4fB9zvpGLKZ3dY548zmcXGVE8xRyEQ6J9XJTWWPUqNAw4jBKKavxQ28KsSUdAnmzR2P8wimYVm",
  "key10": "4h5hG8TuUUB8MURn51yj6Qmu2UwZT9FT4H3yDETLnWGEqS3Kg5TJvB7EG4YcCkGHPd336R6WBHCgoDEiKHyhtsD8",
  "key11": "4wpbr9Uj8ZWdSRBzS8PcBmfFKULw1UJEnhYDa2TcdJva3718Chk7C2x7RSzTkKJeMR6USx24HckGGhxH7rhazfp7",
  "key12": "4vvHKnmzXj7RHhQUnWX5YzYpmQZftkin5Kg6ScoZbXp625vtWKMn5soN1ZknoS2TfTS7JzQ82kHuya9z8mmMffzK",
  "key13": "3nxRAkL2xBJosRsKmGmfXDPGrhWJTKQVr1Ws9PP8LmicpPrEPuXj9FKupEVgKdQDouS47hWre3NgtbKg4EUWnvac",
  "key14": "3K3rC41gTf5tn2FDksCxrVdUR5rpo7jkjYVqZ97VPe6uyfLEceyAS6NTSmLddkng8Rv5rEHBsCFsNT6dYnDzbpM8",
  "key15": "5baA18UN9Dsq7n3fYDbC1Uo2WTht4wFid2db6JNQYtCg5bHArduNQZnPsrUp969pZeZriXtN2bdWahnWF7ajoKNC",
  "key16": "4mWYPvTWTZKQPYhwsaLEtvoDXJYFWtJXPzDKC4NyBsA54eDDEj4iFLW7ddwoNrAdeojCKKWCNRbzpHWL4gvbv7XH",
  "key17": "2NdSgr77e1BhJPcgHQ35uwU8uYCpdxJcVU23YUwynspcGbF833fkxzd1FTkuQQpf3MNg8xvHnHA5jRhaCkqxPgzP",
  "key18": "2A8JM9nSZhdHg2vCeZgjxFANC92FFTRbWTumbovcRam67e14jsY7rDT1ma7paB5hC5FHTYb4awDsRw9F7MFZwVuo",
  "key19": "3rN7bqSeLQZPEbDL5Gegpjq7vooiR1nTbDsnKgdZPupHEnv2svvECEQXMhHwAZudNT6KcKf4EQeoEekhxgG65rBB",
  "key20": "2AoKUnA4gPTXPTqLm3d586DHn3WLZbkXYDquqoJ1NS6gMAc14rACynVhLpyJWCPnCXiESBNDwX9G4ruQiHyrNqpK",
  "key21": "4bQdPQWKTvCHGfRFBo4D4CfQ2czvQiEecVeHX1XKUkgiup9mTzegJHUWwmhYtPjqtMTGjSmDaBiDpToWg5rwBXRA",
  "key22": "BVp2E5bGCXXFRpSyisfZ8ioE2M5nTWr17Do4QTh3dny5iKLBfyZb788W6mYTF73yfS2rsVRHP7LWqf5oQgbiExf",
  "key23": "4Tzb75KB1CRBuYN5AcSyLSfMVducDvsGajmMbJ94vA745uQHiT3bRkJD2tQdboGpRxikahZakxNCMgzgkPEzemsf",
  "key24": "NBtF9wAz5DqNteiN7dxQrS3RKJiJbaqytNjsqCq9yQ346S4GpsSDjBbxQe3973cDxPmpv5g2STLZqmcHbbgrkns"
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
