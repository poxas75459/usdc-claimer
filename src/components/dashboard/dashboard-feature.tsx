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
    "4BtevhXjmnimiGHSp3nfSYLX5329kJy87EvJhctXupS1jvJvmcKDAZjZKPBDJcXWPz5pFvp5Fi9Qhn5jKpw9iRsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acLgC4PNexC2nv9Mk3C9mKGX84DPhTFd4SyuEoEqxySh8wiYnJdj2Pj4rG2FhRMYR4T9DTFhCRrhyrL4eiNG3RE",
  "key1": "4UHe9vHqQVD5twAapyzvUJjV6cmuXUuJYPXtmGd5UEgUPW9HfobUmDiXjp8JigzbzjUMsixT3TKK2DPdiQ3Dwbxr",
  "key2": "2gSLgrNVmHPGV98usfWuH6drAaA2PFBUvK9YgAD6sJXcmHP4WAvVXwFvLy1kTWNBb2X7M4PNA1H9dWcUvYCZd5mp",
  "key3": "ugCFCExYZzEN52AUHFQiMQjSCJkYvKarVnwRVCo5ndFi2YX4wUCqFQrbLZfQ3ybBpYEhHfwinnnXj9t38Fmeq31",
  "key4": "3WpLocQKwTNCk6Csd4aXgRXxCzu9X8ShkYFfKTYVqqKH6NLooEqAdPL697KXEDFuEigZJBZc7oMxF53dZeWNssam",
  "key5": "4mJau9qCk3PPSQif1VHuDN5DjcGoKhea1gBWGMPUaG5jykQPzcYmbo9Vvo5dosdx45sS4tw2YHQu34s6CtGwuKp",
  "key6": "36pLp56t7zCiwruMwaHyAcXDzpdoPpqnERqCbauN6iMnfNxNNGhoi5BswP8spzV9bx1sdxn7NrswwRc2K5cGzSd7",
  "key7": "bq68WKECAji5WyHBHHAspn58Q8StehEKmBJYauN4WvCLQYACFnt3ShRgmtLYo17Zkhig5CCHqCphVwF8Qi9NCzt",
  "key8": "42rXnjNB1FY8DxrwW4ki7vDf9QPkFeh4ngj13QShadLyhz1S6BFQspxgKbqEhf1BSMKXCxVgBbgvVvsEoDM4537c",
  "key9": "2gCP7JHx8MpGdy7rQH5KKpfAzX2Hvg3bEjaHrnTznCmisSKe9mtfWKh33GyUz61oSBU3cfLXN3nF7YW99NMvrwWB",
  "key10": "2QiX7WhhY9Ye1998VKLnkz5xckWvrhEstifud2Z1tmNrNABRteAWKKuJz3c9shw7itGbhjcyZepcinFxJ1gsZVqL",
  "key11": "FgEd3gnCKs5ZcURmJHDXjuaz3rHMCq7CkXhQeTARA3FPMNEaXvuWyxPQuaarnijeWywEVnvXcfhtGw7SgrcdQnp",
  "key12": "3MT6Na2e64jpERoRNztWxJ5s1UUedU89Rg57xSVW7Jyo2oGwCH1e7FEP6LKv4ZyPSiL84LthyBJg9suWMTjTLY1a",
  "key13": "3e96LUu4S8DBuMVg9GWhLM7jL8Y9uhBcC5iYWhyrD371jXHdRrhfYrZ9YWEypv1PSzAUgAe8iD2pG1f7R5PhTEYK",
  "key14": "55a5xnsVqDuQLajYXjmnZcregWkyYrnEKViepBgdM4E6H6xW5hrP25eqHH79Xao4nmsQ6ZpJ5rur3Gx2qwtYjzh4",
  "key15": "54ZwM8mLezmFFR1yD2kYQ5gPQoEZNFavZeBwQUYXUSbDN43v36FmRPGZ3jaevwyA7YtCZ63Q5G1sr3V1jYEwuWb6",
  "key16": "3PzaArrGbSTseMWqehvBYgMGTES5L9Xd2KLq9ta5zmsMBnbjC3QGas2rsr5ADkyt79eA989y28P1ZSGJdkKR7c5M",
  "key17": "5us4JrG8t3ZEJaPLRGTFbe2h2YmExhb6JjuB1UWCRHpGEQo7eKqMgxdcaAQ5gsz8u2r54rrSKiX68RaTanEHjqnb",
  "key18": "4uyVXQTWGNghHwXV6GbLmqDxnGb3iBNP9McVetQa4gCSVgLfQumCkTPbUAimHNmybtvW8gdzys8BJ9dacgXYFLEM",
  "key19": "4sEbsSiHj8Q332UHhLv4NhcHLejPPt77pTBeX5NnZogNtT7hkQAcibSVRnNckHzfhLtamgKpdNKxAbRzJaHDadKx",
  "key20": "5ExN5k8SjKuriAMhxBSVX6rVBs7emBrbyc7KFhtNXL7DcvB24g6vTFvKuTcKgxyYUvchGSh3ZzpnFahfeBRzoDqq",
  "key21": "3i3hUzF3fMoocTwJc5DUWU3qFqv6m26JkjouwkuLwfbJWyj1pRumAw23qGBCAwzn789z61bjggLEZ9gocQSzKe3B",
  "key22": "fScooeufa8nXfgaN4KNkhza386VArkw4uWEUHYJ156GpeWQWA8CwkPExUvc7uVuSm87dVCMEwwYqfeYxYvPkMeA",
  "key23": "4oejLsvpSeCjkxcbYfJGSiKsP5T5xzWXzD1S1LjX4jAoWLbTMhsQddi6pYPHDYsJFv9pHCndycyFxLj2JXBE6cdK",
  "key24": "2KKwJyyrP6fun9K323e1wbQm9muPBCLo7CDJh48GYSEfycZKkuXkRzku4J5utFhjthPRXT9Yqe7kmkNLmBHKecs7",
  "key25": "2DFkAzjCDChTsGv8TF1jaVxfVvUR9SUdGnSAvxH7y2JMdxS4XD4hLE1W6QBidafpiVXxqgZ1NbpoTupGaQsTEHyw",
  "key26": "4dzeDGzxYkr2MJ5eNyFWUP472y7cvqCB9hXYzcFXGaA9of5fatbMgpBcvUoN2ng37e1HDTVWHSFwzbUbThPPk56N",
  "key27": "65tDuGJ666Jwr2mS6ny9GSdRXdeT63XULuAyH11oiRDSuRuNM1CT43NuXr4nACQh1SGh8dpUYfJwR6mgENjKoZ6h",
  "key28": "27HNqUpHxWwZaaXTeNnDtHuG8EJxeQhDjpRM5UNryHZaBH9otGHG57ZduRg18LBJbbMZYNntbYCuVbhsephJ5uEi"
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
