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
    "5eKFXJwqmxn3xK7vRFdwqtzfKxWtBRL23WvkTPeovJrGNrHPT78ZLUjDc1uCNnhiF7v9Ay5WgsZ5kagZHk5oAEiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZnm3EZSDpvVfQK4JpbQAS7uDzhVa2m6pTAJf9vuNS61GyZpnM4JmiNbFUp1W1moBChFV8uapCdGGg3aZqxq17g",
  "key1": "4MnUgfvmEyCZ6Xr2wsa12QFTnCVUK1LTTeEM492YUgNvAUT5k7np2PdhRoa1GsN1FkMMwagwVJzFLGUXM9A1TRud",
  "key2": "5HhPYCWF1TtprurFUEvxtGf6U8GhT54W5py3ChijCrw5ezKgECPt75vzv17YJ16jgUC6mr2ao8FAsr89ykBkZw9q",
  "key3": "2vzWkBBQTVqMY9D5fhmRPmnE3u9c8DDdQ2g9kNeejhfGvvHhw8R4x9kChbgixys21q2Y6aukoKi61W8GaLLNxVAh",
  "key4": "2HQ4Jn9Z4RvWPAxPjjZ6fLoQoPn8nBR6RBKq8MpM9cZ5pMNMrcVq5RoWqTrKLygQZH1xP5tkk3cCzKe3NwFaJxRS",
  "key5": "52CSjS8YARoXJ8PukQcGeszGhQXgpEZSMnBe7dsop27Wn1mST6ZNFhyuQL9QfWGaLMok5AWgZxAgKadBEy4gNMpR",
  "key6": "3r5HmPyWnxmzDQP4nT1QNzbvLwYXLLNJWLWgYqzqRaeZa4Pr5Fnmwx4XpKDMdWpZ3mQaiwBjS2sEjpYB6bipbnBx",
  "key7": "pBgNXj8bFU2mJcUmqPpB5UCnqc5zfRZzAXRx8eh3ngvy8HmRQtxUnVzYUbwtFbcch7d4MvPBcbwUy1LUSw7Vid5",
  "key8": "MKSXEV8FB2D4e6VkeuvmcjrD3ioG8Wjq7mEJC4jTsKynnRm2h5t1cAHeEtyQcydJy27Zp3SobfMXwCAEHDqv3SA",
  "key9": "5cwxsSkRDNEEWdTKdNtW1H6bTsdyzSBzGCbCkdLjfAMLX5URgL6Dk3ixuRxqEyHP51k2uTiYfDDqjmYjagH61xTd",
  "key10": "2UpquUwCEw9ZyT2oJZdKrLT3s7DEPW5sWQCXgvBRECWcY1vUUAthjTM7WECeZzhFiMbpta8kPE57nSVLWE3AhvVw",
  "key11": "LEPRfN5gJ3b6GrnMjrd1GmqYKfCQ6xR2QikGdLy3nMTAxfL2wCJnFxYjivvVRhXPkL2Bqas7xa5kdmB7tUaUFrq",
  "key12": "4jML9xmCmhNaCcw27AVv5DiyMjjfhG86rrtRLcieYdCNMDB7P8eLwa8F5a7bhF6Hy66D72DBYgGUX441xK8bCgoo",
  "key13": "4gEnJM1DNCp7pkGGseLmu5fihg1wMgps7cctN4ReUegnFKbw4H5aSn6M8FQHkrgqhXJSsQALUdopqvHGBSFsXHye",
  "key14": "LjG8NXVBZRzpVhtTdk1A2icE8Pbxh6dxwiBuv56DceaVXrL3orDUkKsAaEEzEpVxkjq9pjg741hpMyedi7995nS",
  "key15": "4mEimQYD4mU7kzrTk5rCuMPM7x7kzbpGCQv7GDkhmpsGxRKY2X52jGjtNdzDTjv3mbCgwGZJdupBijQbsbuPTT9e",
  "key16": "2GGdmLXDDNGirjqbY7E7RgdZ1GetN35SpumZJrrijz28BeFWnvTYHuiRyQHuR5tdF4GxcEPWHcGh88UkqtEdy2Q4",
  "key17": "2Hm7iEmofQYTcaSJT94bk3vTceFRLZYKBorKCG9xK9WpNyXxfJeM8ARLFKF9JASSX33bmTq9DLr6ymytgDeHWsQk",
  "key18": "5DNP2VHQ6mL6Z1qwgz1EdUPPHeTBX6TWaRtvNokmDkKneoyxDz36yjYnJkWdivMfDPNc355CtUHdf4TLc1okGXCx",
  "key19": "5cuH5Xn3H8ZPMSqsrGMJPwpt5QvayvuxNsrmF3dyheFfBF5aZ8JuoG12LM8vvkXF3jtwredB9ZdLG8wsNRgSYCEm",
  "key20": "4FdowavE1JyKrBPETMvRMCDUaJBb8ekZk5xSmvfmyctMyHuGpN5bVrMj4XTL9Mr5omLdmLkMuDr8wVKFAyZZ4Qgk",
  "key21": "3Ln9Am8AuYggoGN2ky9UShzc98N1tzkzWKUmAmiKfKhmtahffS912AskcTGn4L2XKDsCxwqMy4AH91k1x6jC8N2Q",
  "key22": "2wEE6mKdURvkepqUcLedDHE3R4HxchSXu46fAvMeRpbuoG1BYAuq8Dw7zTnAgww692pfc8Dd7J6dbvPFfuBKtpRa",
  "key23": "WzaBJZGE5d4PAcRFoD7fMbV4G1BFAsjLAjTmVCMT4gi54J4PcW38FhQnas6Z9YeyxDan6LNYVJLGk8ce58Tzja2",
  "key24": "YeSxsjSTjxJBkdoZj5zJETBWbF5jDF6oB5h2YDcsbpFw94s6hRi5t9qZQV6rFXepturE9hvn8NHnmcNmUdkf44t",
  "key25": "kdHwT8TbE2fe6e3eosnEFpNYk6uEGgUvPa22Y8ZAcwZ4qsydKqXLtDZEgF3G4Rrv26BmgxJ7k714yR8igpy2ujy",
  "key26": "64uZ1jmKWJZyaLAqKonvnDxkK6kwBBwSGPXYwcTfgHx9RRAyA6Lv2jrPqmPztE15ociB6sCujNm4eWLdyqLwvogV",
  "key27": "4d9Nuhv2J9MQiZdfcu7hqCYJ2cfyWSgbZv2A1sNk6R9HkZAYezRm33o2dZKj5VRupVNBx4AuHRxMVeaSetvu2twn",
  "key28": "3P7rjuwAh4JozeGA5YF5nGq1ksovqK9gkNN8EW49gru3qX4RWjA37AJ8tGXA27RnbUvJ2ZytP1FSL1niLmM4Qwnt",
  "key29": "47ApV86q78nUHmQncszvyWWnBv8ME5eGUuHunEBCCQBhvVpLY3SXEBbsHx4M2VncCzUjmv3NFtjE5DC56Gns3ScZ",
  "key30": "38s3kVKVA1dYFPi7iUZJPs4PEUwQiiu3AjpQM9qsWbjQwbCjD7wmqGqRP26KviXvKF3dhSQEYWmnGwG69HamzQaF"
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
