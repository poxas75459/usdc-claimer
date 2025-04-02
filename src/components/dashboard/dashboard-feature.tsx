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
    "4RtxJX2WGZkZoeSb6Z2WMXbVz6YZ5VHvLQRcSGN8hBNm9qGLLsUtnYLrfhWFncUKhjrh433YQcGff4dDvE2ARq2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WaFxMY9wYzLcSvfL8BTVk9oKV1QCWNtfkNEbJUcykm3htBP8U2WNbpG1Fj2wkELgucJqAZJDb7QjCmReFXsQZ2w",
  "key1": "5ygRZhnCHJZPFpkuDDqvC3wDxucGSK21gDeKaw3Zdw6VQS6mUYvMFXkrzTBpYAma1MxHCXSxNALsbhhKxUgYcaMm",
  "key2": "5tqzihyyrgi8PYS8mZa8H4CgoWEY5bgykCuuGAh1jpjhMEXtqfmKwyhfkTjdS8KwcNKU1asUDseamqrkPMeU165r",
  "key3": "2XpGVNp6tUddXZ1mfw6h2yFySqE53ZKYEFQ56h9jKUTQaiNmC1NjFGU42piTSCyhUe6F4A3Zt96LvFmXM65Dkafr",
  "key4": "5naHb3LvM1ov5vcJhQvHUR1NHfGLkTCRK9efAhKp3cbJ5gGPjmQcA9Teq73nxUgwUVczTGcbaWgCu9CySFMC6MEo",
  "key5": "46Bh1QSTayyN3eDwikyFYE3n9i7FrBwqN5ad4dWnRAj4dV5ytkyjmVHbs3bnvmTXynUipeVq9byeMhZCiNtuBkst",
  "key6": "52XoUmNmpEsVd9sAT4MZmaEwCXUfHHwBrcoADCzjpKpHP3xFSTuzf1QYru9nq2mJm1Ev16atUBM9vYc3zv38HdmX",
  "key7": "cug5wLoN5ei5MFJ8y8S7Zu9L5aqKhAFJVWxshvJT4EczD7jSZBdYsBXY9ZZmazN9fiQa7tryxZDKcSmY6gXkGyn",
  "key8": "4KdTrea9Lu4kg4cepPNRfyiYBcntaLPRn3Hcvf22Z1yPnS3EcAnoF3K7VxujLWM3aamCHCbPQtpakEUptkVAKjeE",
  "key9": "2PeKiwk8ioekD5o3HNZuhd27KeA3yVsKqGQJA3P4FTDDUYaAtehA1Wiafiv7ixtJ58wWFAVgCT41GAXKqjfNB3Km",
  "key10": "zttVk5eQbeCDqinthVY3yyz1FLoyLrzwNHuQDUBKeZoby1yQpHiMUE4AuZJMtXf5t6iq5fkQxveVNNgPF8dfao4",
  "key11": "A4CUQ5GqA8nidCgwZbihK55kBsbMGGYEaEQsemUTPuCJMKwYwTn6gRJ5WtY66QVAuyetDn1YMukYerc16s51ZH6",
  "key12": "5MA6vAWmBUMfR7ZWMZyDayrZvJBtucbPenNsfyovP9KRyhpp2wbjpgNxrFZ5yrTnYFTtDwVGpJeva2RoAwTtoiVZ",
  "key13": "3TZXB8sn8XLuerA2pBAvMBvhQCzLJs1xr6vR7Jxd8HMtFY4mY4AN9f1cYAM6dbEDRePkqY6qK5aeqr9gfzYa6SAd",
  "key14": "47zffJBC4LUfFPV2xizpTdY7GToXWFZTn22RM1Ew8iZAHrHwedAf6iaReuFYQFocXmc1rByScYe6HL9rUmmZ5EA7",
  "key15": "3txYBpYRCrRCiCXE1SxPL9xFBW2E7nVeoC9u86bgwFLwYej7nSwgzeWtSDTHpiZxRGMRNgXKWmfyJx5Mz2VR4UHm",
  "key16": "3ZAvK44KSTtsgHHKqJcatLWQnFd99PD3xgFPBQP48c1UEF3hTs4bkCcrcLy5DffC42iVDJw1ZrwDCbbjiFHWpvtH",
  "key17": "56oHy9H82Y2USKgxs8ajepZXu62Bab2yov9ZV4s7GHTtQcEin9wDYdoBZvr16CBCj2LQaYvh9krPadcHeHPchjtQ",
  "key18": "uoxfDiimKQ7WhZmxTkKWzmQZG9dTpxNpFAEPkRPAVxVe9XJ1FfDzQp2RTGTxftKaqdw7gKtudQLFQY6ds8ypjMo",
  "key19": "rbBPrkEoVcCcM8or11JVKYx1JC6NirZFhtcVsmdNRVEC18C3DgkgFmQJjLdqaUWSNa81jWCen1JPYKMWpzJMp9u",
  "key20": "2u5kJmvjZRZtHh5gqFFGNHv42bvheWtvB7YK8yRDjm1YfXWmkZHJgSjnKoabHNBcHRVSoTv4DVQ7EdWczpAAGow2",
  "key21": "YkFadFbuwffCDwezpuSLsH6yx1cKfLhiHWVQvLfXTK9PDaEdCizdoWY26q8Jqd2D4iSfteMtcAVGuVGUxJ8wkgg",
  "key22": "3aVWJQUuimoTDXxyFShY1FzXt1BkuFosgcTmor7CxE9KfyJJtuxevTCf2qyR21fyp3uuTzwavYXzmtyPT7LpnttS",
  "key23": "46ZM1ete3zLiiXsEBCVw5WY5WGTCvd5MEytm5L9okBzuVy8Ts882FpxPSUSfmSyTGqcfxAoYbZ3VyUdtiJwnthh3",
  "key24": "61HxqnFPHkbC8A4vUKmgDHqEbTdheABX8Zd3PjY2WRr9Yq2cXPr8QvsLHRtPcVzB4D9DQTjNXkaRq7jB3qdNvjuB",
  "key25": "47fVkFLp9oNBAF5fwaecw8jKxywg1qYk19AuMVnUnLzbeiL4Ba1b6GNwknzUHtPX9d8CDcyhTrb5Nv9pviEy2Fd5",
  "key26": "4rpbZfWB7qfyjd1LRokvBobfriiqL7MnSk4j1LJTph1Kwgf6NYV8zX7bKdqD6ebKLKxqrhzNWdAR6cKjrbXCENCe",
  "key27": "3NXyqxdASTjVjbrd51eXT199pzy2nbW5Min4FY7Z44i3MhGNdKnbGCpeGUi5jLDZKQriC5TtuLt6etvcFje5pxBu",
  "key28": "631TEsQUi7MHY2YCFKCK23o4g2b5RGr1Rk6THH2obmEAws9s9jP9Hk2ogUgtvfSCUtAq1ZibJ7QfwJBkRDUnB6rh"
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
