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
    "5ELYdkpn5FpaKvRJ3Uybeno7wG7BjL6L11giciVEDE7LHhnKFmqLzZMY5dnr7Jae6mgY3yWFmY5PuvUBwLeMPxqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJ3kU2Mn1rG6fUrqbLj1f9q2y4VZ6KdNe4CbsWPAniwnDeMMAVDNi2RbtsmnWZuuVJuWz5eUr6LC3nHh4xxTis6",
  "key1": "4c83U5BJGxnQKJbqtcfq6ozj9bDkXZVPd8fx9nnKAHjCLK3XQaWdrg6J4enD8tVhH7TYaqNf72Z9kPZaJqVCwyoj",
  "key2": "2MDvYqeJye4imVajVszjfkJa3RiMNcoUimQPwoM1KmsBevPmZLBR7hUmA8rCVUroaNJ961VNhHePSr7P5rPLee4",
  "key3": "2KnqauHfDgQLAEArTM87NdXtNETv4QTVpAWQvDJHpksKhFNztHTME829qijWDegSPLWqp7sdptbYniWcTLsX7uoJ",
  "key4": "3ssXothcxawMtb2Twn5SReFbXvGBjY9TNP3GH5kzWnExRKXwMgYcyjwCYLTUBCDaqBpW4ipe6FAPM2vz9voMq7Qm",
  "key5": "5vULhik9EHtxs98L76SiwmMJ96GmFvzwutshRNnH6a26gfPyPunQnawJU1XPAt2Yi9EvtkiA257RaoDfyYjKsF6S",
  "key6": "21HjDxQj4wAu1h5mDPR7rVhA6Br6D5x6Cd6Ni8HpFv5mDjQChVKbFFTU7Ew5w9kJRvuWy5cbQMN4Wdw4uCQBWZAp",
  "key7": "zMe9mdC2KckqDMFqfQzMofqare8GryzXDW9ydvyfbuCHXLvN6xzVVy6DHWqnjM5FCARdh3PM6vKc9cDo9m4V6r6",
  "key8": "hd5VapnHzBusWEKp6dScjJ79RV9p41ZYibZ3s5noM7bNcqjEUzn1P2WxUGZzp5UBgnR3QQ1rZdQqBLNRyKshkTk",
  "key9": "2e48TPj1omgqJ6CWa3TUCP1LWbNpwBM8KS7u594xq8K6eompXjAMrj8izWQw4GhEDTCL4sBPThEbrGmacUJGWjvN",
  "key10": "4qBNxb7ZE8VU9dzbQrzpwe1YPruDoLbcQDJVzLqf2msjqzjE3UHr1R3P4FBKkm5wbJv7X1qL6n6J7Nd8ME7MReHm",
  "key11": "3qkPkr9NrWh1hLr2MPY8oKaj4fYUezuTdYgUwZzWAaYThBdRZMevNHwYTxU9kYmfHQp1ozcvfpgFwnbbhrjFmEV7",
  "key12": "3D5tL2NFqDtAHiZwqcx6UZTs2dGcP87fo25bQCFfBTeZHV1pXuGh6VVFBabU4HcRQSxAia2wu4ibMXZ4yYzQw5Bu",
  "key13": "3zWDUPy8aU7poSHXX3mXoZuyoXMDvBezV7Rc5dJ2bHJv4SuaCgvoPL8uCFrAV88eAtWtsEj8tqbqpr86be9c23Ss",
  "key14": "3PVY8cqyDhPRMSeE8FoftW5XpgKeyTB99ep2bP6f17v5EE3gTS5Bma2UWkUKf847Qg6bCHRLuM8mqsxJ2aWevWbh",
  "key15": "31GQbpaqv6wSjJymHMnx7CbeqTtDUvp36zYAgUY6JEfxxouDxtmieTUGSdB71GwV5KcKXfW3kLMNDc8DaQh9CQEs",
  "key16": "27GEuXhbk7dzMgyudmAUdgvYWF4c1X4H6PsR7HpZApGkjcrqQJtawXsTiCAixuBZjYGZ9A3uxpcQWA2X4voTvMyS",
  "key17": "5Mmk4TQfUn8iKywrMaWxAE8B46CrB13jcBH7VLLmBoh8TR4fhKizFUQANLaUbT5LaxHNP9gxPeSAriUL4PKPcyte",
  "key18": "3yPjWnKmprJ22Ed1KBU1VE9SPmGC9JPr4c571bTXGN5tLaBESH2AVvgZ6ii7A7qbNyYVGDEbaF4Y2DKyzXDg77Wo",
  "key19": "292e9YNRCtt4TCQckCxShn9WjapTeQ8ub2iGpGm2q2k7Ft5zbhiChiYzsFWnpFFR1v3WhZEXGidvMmSBvjhjtXD6",
  "key20": "4PUMmyXxh4bnnqZzXrajj2JNF7ErZEkN5Ne2GDKpnFGZ4aicaDjX6EDa5QTSMBp6L2miDx3AendRA5GxtubVcakW",
  "key21": "5vc3idqCvASMFFLcV228DZCPcKyPHD2fY8uHXvY6asEZ2dn1Aom1Up2s5xaNVRCMNuf6tZWLLa6oPKu1ySLwsLNi",
  "key22": "K9Y18sDRW61AKyKhc13PXmyA5j6s42PvzC8gxTigzhDGksFojQ95YX8wmsjh9ciHs7atKtwFtiHN4V6iHWuMuL9",
  "key23": "5dEcLSfzCp2Cf7mVEVeoGijigpdSVHVc3ZytcsBBThn7KUBpYgPGASXgpkKHQxqhwED7Bp9rdDSBKxCLeRKXCzAx",
  "key24": "iYoWsvSpTsaam6KcwScJrTwufR2bUzLmU9HFdVUvyuL9NrRCoZmgX6y9uYSNXWCaggmhZvgzUGB1gpEUPYvjMcb",
  "key25": "5aFJVj7NG66As8jbVscS41KLyqoBzeh1ZkszwSySRBR47tYtHy7WACMtpFiX8qvnkVacLWZsk3ojERVtvxpwknMd",
  "key26": "WxaiNAB3KNSv9CMhL881qqekXfY8tMy5ZipHLq9LbMB5HQukDFPkuvTjK3Nq5AsqHkgKcVzUbr9wTEMzSBjhAWw"
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
