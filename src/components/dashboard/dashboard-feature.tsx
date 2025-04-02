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
    "3hEV5RiVW13BjbdkMZYhurD9qrWtMFE6vxDoZiG3J4iCr13H5288jgthT3LCiJFbfheYVMd587zJnzXvjkPb8k1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmqGMUPhKY6H1945qhKZgAYjKGwV9jfirUStWBbKcUe4u8CCr2ct8GBuqWmCeNnzbFVsEqLTxtMDX6k2SiA5PLC",
  "key1": "2paWaef97QWdADNAa3vPXHuLXxNT2PXsSLKK5ShZ6DnxuLNZdHwy7fevhVs2DQeenVjhbFqXgHBL2mfe4wAD4XAc",
  "key2": "3QB5boc6jG1JVvj68VuSqVTc6JUdUdiH1SLKLtKFfxFpFnRvwP4NJVmaDMkf4MzE5zGByB3udB21uMXhVE8acyY1",
  "key3": "638d5HgsHQevNn8wJM6DLum9mvjJFWZJNzqagTEPMYyvwFeNh8XExu5fFoDCFj2ga2RXiCXa968BD5j7efD87aPq",
  "key4": "5B5GvGCkb2dkWGoppUrSNiX1hHrK5R9Ks3wRxvs6XFAY3pwsZghSMJn7cP5z3bRPoYTcsMNpyAN2B47HNM4JrEy2",
  "key5": "ozPUFN3Fggav9UT7T6wq4ADr6f9iS1sV8cJLiJpdKnj2dxddbbkEVsM4LaFA4EzejqEzRrimm9VaWjoMpURkQJh",
  "key6": "4g8zqGmKBfWoFg2NHu9veWMr2ZEqMZFS8pTRiUpTxWzdmRbfEMXKkijjVej5o6b9ppRtt6TvmJrN9DXL1uHykWmf",
  "key7": "52Tg9SnNhMMPy3FsBLpBeqBwbrPLd3sQCyqKVo8wxXkdjar7ekgRCszAjtsGjVTuUKqguWJkEvXf4GzT1Ds3o1u7",
  "key8": "3wRkoGwRioXR7ovhWg4xdMpu5ewAzTKdhbXTpqniAgMTyLjFcbTAuG5RgtzYXoB4Z3bzw5qu2FLCzsMDf827C1zW",
  "key9": "3BmJ7Fd2o9K7qEij5yf8t2hK9s2mpXP1mVBm6nq81U3K7w6ZFkR9Ci8DRZgscePFRKBsbvNMZWxFqobjn2RUrdR1",
  "key10": "zQhX5HMevynaZEKNCE3fTaBW1hoXETnWY126s1p46gxjwPH76tSofhvEU7GB5dbWfgUNR7hkPYjw3v2Uhpy5eot",
  "key11": "32opEt1ggorQM7JRptDACZNFAXp5bE9hiDroMJ6f51Mofnk5xZEXgsv67tdTenKGieJp3Ke1HYx6Gn62aLrd96Xs",
  "key12": "LqscG5W2t1QxaVnj9tgC7smMqrB5psbS7yP7KiWsuCMLNpz5sa6AsqT6cb7gkjbGVfiUYFA5gt6Q44L3mdTE8kE",
  "key13": "2oTNFnfWgncs6VYifEfkMpaqhh1XzQawimGsBPVYX7ECfsSUY5XpV9EuztNnjs7p3WdYPCdEvpoSvSm7pEbCGkv2",
  "key14": "3w6W3DASy8YP3GZCt2vcJpFuo4tJDciCxKMM8Navn76Hq4cEyvsWxtZaSBwiqZYqW958212mneRHNdpLEN5Nr6d5",
  "key15": "3srZFaNqx1b31vhtMG6xgR783N52XWyrqwpVPQLNcNFfu9PoYtGTmJ76hsTgLuwcNKwwfSsxuxR3M2fwDrS6myDA",
  "key16": "3xjiuSYxeqfNZVgrFhGrChybgBvhfP9h4kLH3P1YNmVPjA7qKNy3xdoT3PsAAzgZsbD6VDi2ttQJJ86xBv7oNaBH",
  "key17": "MuS2RHh92iikow7GbpnwBZ4sZY3V3CzhTUGFy8NoySAQsU3VnxziZpJj3o82mbgHL1CgNUTyhQXFsn1S1afPEGU",
  "key18": "4Q6755s7QqxDeET4UyEKXUfnR2mXXQ4T126gT4xvKLAFgJKN4uv7CswWKER4KXUrW9Zspgpwx5HDPVT9k9h9K18J",
  "key19": "eF5s8sZU5yqSETdDt7NFhcoTCaY3jYmj6yNReq1WDimZZ59KfHMwBmBz666DQVeLYPppZ9UoNGoZptAkzfAU1Uj",
  "key20": "WhbFsovdT35VC42ZBkwjKYzfdZDRnk3Boxkfbc6uDYvePtVGYabKmtL8YmSbBNLUdZMxYw2bRtFTL8xPJWMowGN",
  "key21": "4DTQ6mg1TCLhhR4CJUW5PmgtBm6oKRN8AzbSHUYdodRddAPmqxXHm7iakrwQq3Z41nEG8rhwHmzGBq47ej3EPnzi",
  "key22": "3Lwo1eHUvRJRBxZcEoqmcEimcrJhceKLMkxnpdsqiJFbfT8XYbZ1aZvWnFqzTW79uzCN7Rgs6EavqXazDRLpCyfg",
  "key23": "2cci4EBhpNSknaChZ8BxfRgrD48LKB2V172Hw9q3i8u9eezahjSeCGBWQ2LPUxyDf9Q9F5vnHH33iVSWsTNi3CrM",
  "key24": "Zo4vfTn6K3VVHvDdn5sqeVjmKoTPjSJ89bc7Hp8goZG4ntJcNyRNhyjrUNbzoGagvUq3FqDmhj6jo1UijrAuzaJ"
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
