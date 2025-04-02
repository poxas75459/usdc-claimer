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
    "4zZ9X6i2SdMy4ZMEJpRftJMraP8MjWriZEJav6pmGzScH5sySCPNFsSeThm1uGfY2xMGzPaKUfmJ7EHDt3GhVwdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjX69J9jDcTc4fqPX3D1SoH21xtdTrJo8rSZPYrDeYvsEFNqe5T2oPKatbJyt8BcaZWWBhkcjLEDcJtH7eu2SpX",
  "key1": "57A1naUndXkqCpjEFXyeqdUCdjx69iRARGw9YLDyuhyBm31M5GhgNDQt5cjCFtoMBMZ37iQt28CyARDidno7jJvM",
  "key2": "5aWTG4rHc3mMq1Ek6EU2fCpHYUioLynFWXhLJM3psogpaPiaiv3Tbk11Ac1BWvyBG6S3dTKxeqSCaZXDLzPSMUj4",
  "key3": "5tbT6y5goQnMRJrmTRDeH9veaajgnWyUNPsewrei4UrviTg2KUiSB8vca3w3sC9Ms6Yh3fuP1fxVX3YdaVjRtY8d",
  "key4": "2SfpDNfNURuBjoBxfjramL8D4sdxVrh4gBpEHPY1NtWwtzUCs5RfUfZvveUcuKi9weLcBT1NFT7pB8ceuDx78yBp",
  "key5": "5VVdAb4VN3M5jLW5p8iy6KjdLzJLTQRF5vnM2MRg5tpLQY32dms1YQ31TwzxYTvABf8c14K2rM2wG57rj61Kuemm",
  "key6": "2dHpXxQjFEhfrCyVd5AhcHsAgwCKjmY6WuK9Xd6p8KAoLnPzPKpSfiYgKjwaNRofqRPFBqvU9n4xL1VifHVcNYdt",
  "key7": "3Q2QVgdXC18LLCaCpCQaystobWmMF97eTktm4pttgzEUd9aKE4pMiK4XzSZZGY33hHiHDeBat6XKmuq5qJFYneWJ",
  "key8": "28q3FbYgHyCDt216GyWQhBKQYStTHx4cP6UFdedzBLZ3tSm31Da2pLqJHqpTejNhMXNvLWZ8d6aZ8P9VCTm2QfMb",
  "key9": "4VmNqDqKEDWdepuYnNAy5sogRB96XqeRVYgBuiUUcFXFmLfFGntXnQi2skr95JTUhfXGGGJAH695DN5k8hp5Jq1j",
  "key10": "4djE8CmKWuFpvZUCUhzVEMNFovfVSpVLss6Q64FwagCRseY4FgusH15Te2D1YezfKrpUwu6zVkxh5EpkAwBc2BbK",
  "key11": "61dTLzqwMKmZFXwh9KioLaWRN3WCuJMH3284sqzCXVoc764YzuQrizB3WxTpmCsRbn8HysGoQ8z45wYJQ12qxxiS",
  "key12": "5yD2psvJ58skHrayALYUBL7SbNkr8ePHyffT4kmur2gkSnEmpw5kWMtgDmFR7q2Hc7CJiVVJMXT1F33kC7pVT5a5",
  "key13": "HNudjgZ5SK2FAMZSq64GSydfZWZKZpZiwT7666Dyp5jvdTZh7zJp6esrssC2yF84nQWAeekomopqnBFVUES6LXH",
  "key14": "36wVJG3wmwtycQkHPM5DGELYM3FEixsqikwNjCLiJWusxy7xAZEDoaMKDnaRZDTeLuKkoevL4fCk1MqfTqmpwgQD",
  "key15": "M8tY2jpsXVjZ8RFyzF8318kWGqG7bUQLZJNZUFFB3GZ59PLKScy1xYiXogDtvkLUjTt5E9NK8yDBU47rFHP8HGD",
  "key16": "2fVs1sGJmnoqYkoQHUHthzfZkBe3ri9VAH96wZgndmb22BxeffbfY3TwhfQG6RCSt6rtpWkxANnKucGQbscrpAer",
  "key17": "4R1pRmTnUdCmY8agsxFp2tFL3RRoZ271TjhfWFEx7W4HB7ApANVUg7juiAz9EmNSvMVzkH6xCFDFr2jUagSG3RAE",
  "key18": "4UqRPK1hgxno281Wse9iDezPZqrvSCKS55Xo8RJ8qsrrDXE1LTX2DzTP59HQ1upSw6f4kg2JHNEQpkEUqXW7AQHm",
  "key19": "2hzY2vJzuTwBK5JJDmRo9tUqnRMC2ZssiVMHRR2zMVpqKWsN36b75WDJpoM8A3ggjGTdNXWcukDL8avAE9qhXBLU",
  "key20": "52heJG5om5T1ehPcsiSitvgxuQX5tLpKJcFjKm4nwDGG2QGUezjnqUckwr3zv4fJNZnLwzGyXvNvk5YTN8RUVWXh",
  "key21": "66d3HyHgKAKw1P8QbuquvWzvGW5Xp18McJ25ggHTv35zMbhqFs4RjsDxWedfoQFTcEVEDC8VQA2xi7xVRjoVo1WN",
  "key22": "4tWriSyrWScbQd6LqarUiJexeFJG6RbCMPEJfytYieVLnQQkDJYkN24Y8Ff1KasFwKDUh4nh8p1sivAMHu3DN4X4",
  "key23": "5UrY4fzGLwRdSJTdAQcZNKQDzzWjWwkipqxVz6Ci5zxGRT5WEqDjbYisMDJq7cA4H5MsWSGWapqG5GbZRV4r8Udm",
  "key24": "2urqqtQHWrGVpeKywjh7jvdoX9PyQVapeF7HR5fHDhD8UuhQqV9HHAeZ8tPQYdrTdV7ku2ibmaTP1FrZmWmeQtpG"
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
