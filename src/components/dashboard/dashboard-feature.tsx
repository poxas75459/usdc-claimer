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
    "4M2ucqwJRCMo2zAwYgcms1jjrf96xvbCxohZyYRWDkqF8zCZEmSMgM4myavmmPjxUvgVpwT2BDhyGoiZmS5aGpJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CE9SDvQrbnumLUybzRvGb5zG72u4J9bc9shDZjo58Gc7HupNCtSH4Y9A4HCv5J9p7A8cFje4oW6Na3pXpJ3uV84",
  "key1": "3265Yg7mXiMKCdFFUDJug5pqYQinxhC5dhnixueNagPM8toZxzbzT6cqsdRXakks7pA59w9yq158DmSL8VWDS9dq",
  "key2": "2U11SCQbGs32aQFWUPhznpnJnhLH71dY7Refg6b1xcqNVJRVP5t711SxD2bMJ7XwBaniLz1oj4cY9WjxKwJbkWuH",
  "key3": "8YQMBMoXNzr3KyzXuXa6QX9EsVT7i2RdHpphadGbMCo2PFVSknDhDgstMhutoMmvUub1cU1c4gx2GK7LB6Es4VF",
  "key4": "2EtFi4PgkpjhBeGXHLHQ5xeEfLHntJP4bfM2YwKcNL4e2Vr8kMN2rtvkHU2mmNsLre2p2Z3HssA6BN8okeajdusa",
  "key5": "uQEiNyZs6LBRMJnwxEbRyBcnaHcKC367EBmhioFtxuBqNWMeMzs5YgXPuTCNET2vgvoG7VWRHBcsHEWHr6Q8qCV",
  "key6": "5mvaeD5wCGn2Kfx9Ka1QuVev6oRmi3ceHGoZc81w3vZ5q3YYGuimyau9kvhwzwCR6w4TM1uGnBeo3WxiWEDgX5na",
  "key7": "2BH8P7zX83VU95WPYPLEn6S7GCCRoqzLT2XzyaTb2PMFWGn1AWhU3Rcn43UdCSHpN7auFA9MNdxuyak8hJjtQDtH",
  "key8": "5jVguowBfynZi9h9Zhp9XuSPZyjdx9p4e3bPqtfzHgCHD5CMYsPpMViXU225B6BjWM8q2y8rKhyU5UuAa8mGAE21",
  "key9": "2hGHQyteojg4KUGSrGRWWNzsGE3YqsBGZwqi6rxBYaS3UQsLyaNgV5RnNrxXkS6Z4jZF9AzFizhcCvSL1wBf39kn",
  "key10": "55xjEaf5AXQrWuyvrKFTru9SFTFqPCgG9AmTRv3uyxZJYK4tsS3EV9e3hgNALg5EadnWuy4Hut8aZkmDGncZwwsD",
  "key11": "2TCeyw3VdgeXfVW6oavCiTDWQb6wVERQqDvBCUjkcucSFEDKGS19UDe2NK61nkS79P7uAWRnk2FXRYM7wMfvVBUY",
  "key12": "AzHBqcw6cWh4BJwTqJ9aZFiBVtfoDqynx2rxTddA9qSJ9hvP7CM6bLsfjDQLsECm8fRVXM21yj9T8nAniJ4jM2E",
  "key13": "3jusaVuAqhWwwW6wzueDw1EiM6zsFMtyRrKkh9QWuCRroMGzPNXYx7ngqfkAJSdYV5dYPLJmmUkZLbNMTg5CE4NM",
  "key14": "2ZTW8eCNTA8RT2KBaWjjt7gmFrrESdUoubCavw5DPBNy7tb2Ke9eHssX3DdPmtFRTDds7zJLU5j2Xry8VWZ77ar2",
  "key15": "661Nhgw2BbndWxPn6GxA42iV5us4PJrXQ1YFXKej4EjPxodWCrtqQvrmFACJ2HdyV41CM4zk635ngPdzjZZzTjR1",
  "key16": "49vhsiUJ2v1dcek1Y4p33yLT8PBRKozaZ6rwTD23anAQs7Mm9zKmz2y2rpjXPidmpKdtjEhdRGZ2a6ARGKk6zajK",
  "key17": "3R2mrzQjqdi9tkvjGPvvKvPsiDKTHUMk93rxz6zndYyV9oHar171HkBzQn7wEGkMJiHNuYhv2s21kyKH3zZDVReQ",
  "key18": "5HpD5y7cX3jQcVeTZFMPcJRAx79Dcuwwcu2yM6GN9BFRRb93E5ibNCsXQuSPJqDkPDfbgkvVqNt49PbeUc2nk5bt",
  "key19": "ECP5AFHm3xvicgCFJN2XZgbhYaBTiqn5sCFU1AFrSgKXSoqghbK8bn52aCYb1Eg4fnJw3uoWkdX2Ls4m7YTLb5K",
  "key20": "646WKSyXCKc9EMjs2RxxfcsfegqaRqj8repna8pHRuSWREwaxcfeZXQe5AexYt5AyaEXgWW1XfLGFkgp7PMnnyqR",
  "key21": "rCarYt8BFU1bdSy1a2RSRKxwMHXoLgrvKpd7NLwAz1KeivKpG3zWemVs7ju84Sx3EovY9tjD1CvtnnMj5oygMGK",
  "key22": "2PhKLMJ4LwvZqoufqX92qcZxCUxYBaCgmwa4rDQm9Y9r4yLHy2N9yGFA4iXhhKkVPNF48bENzsiSZ9P7R3MZ6Fsw",
  "key23": "3nX7gCm4rrPFY1FWaQxHbqm5Jyfcoj9a6eGYetNH37eCRXNfQz7DqzWFnyRLo6N4nfCE22fKuAHV8MWBTi1aMNGG",
  "key24": "5wadV3SQmfqtGtixGFAxSsAj7bEW5RZVxDCCMRcFHHc2yxe9DbaS5CxbfyzW7RJVkEF3Wm2L6nQPKPBTc29MAdUd",
  "key25": "W8NVN7beU69zTD2ucdMhRMh3RTZJj3bYmi9xcLonscKxTDxzbRWWJ421dRF8DydBMpkrPH2qynj2Svq1VZHbMfK"
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
