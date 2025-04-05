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
    "3bF3PspiRNVfUuxhtguU5QKLtPQJoNW2qrJNx57qcjLzSwcsWe9EYfh8TPf8SpVSD46WPbrxX4KFBLSMf2JGWGJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9q4Q8qitYGrsHffEYdoK8AGKtMpFmjx6Lk8G77LW7WNDSWoeAfbujVxwyVyk1oFvZUHDQ4g7N5rUhrq7x2B2TFF",
  "key1": "2R7FAny3GRq2ML6W2i78x6ZKLDMtVDJi8tdMsUabfTCfArVRLTXVdXCvNzXLtMfY7JaufP8MPA2EjDAvU1s12XTe",
  "key2": "4e3683gcgVG5W6Pn4P7avNYTRepobC3EKGo61ZcTiw6Cqwv5naq67eY8AmSuNKyPgsfsBiNNdnrvZiyv3W6qcDam",
  "key3": "5pP5ejLMZeReuSyN1DnsLvMjnwwkygg1UvJbqseTWzwx3WEstyv2H9H3Z88GBVeq3qzuZzH5MDLnYrNLVbXa5w8N",
  "key4": "4hdvSWn88WbAKV1bBvMZ6ndtMRDrsm7MPTMAiDvfqNd2F9VC7r2bVvqY4KY9eXxL6c7XBmfjnisyyrvkV2J5ZQNj",
  "key5": "1R1DQccyHowodRmEWWU7N3ELmKoeVVe33dD3RDV4DwwHuQqGxQB1D8MknR6e7sUaHexpxQqDYc7amTjVhpckeZG",
  "key6": "4HrnH52ScigQtdaWamPTRoHVf6Hd1nBPJegFnSCCBacegKJ21KB32XgRdNU46BDMGmFiLWJTojyuG1x8pE7KvuZX",
  "key7": "2dUQDEwwad16RkQ1JcefuogkPtdSY4LKjG5zQot9SV89w7BWFeLyuE3DGEzo3eyWXkdrAigWgDu5Vc127kiSsq6i",
  "key8": "4JvuZvEwRQwn2mnQZaWgJwNh5XGzcS5r4cjrBhxyKTLiTWd85oFFkUkEWqgpC63PZuqaycRpUKYYwnZU424rZ7e3",
  "key9": "xisCxJxCZETevxosTretLTEvZ38QT8Gv2PKVcuCJhbRAsGR59oqwAno11MpgkkWTYiqWGjZFg8XkhLhUPdAEYLC",
  "key10": "5mXhTCd7rtBadxF5N4WDTgZbpiu4tvhU85AT4oq3xwr6B1aBkgEuoSWJXqsUYYhgZaZLeaJuS4Jeg8yj17KYkAA2",
  "key11": "26jUTDTap37ZrCCsRxu3aSpDSJMc2HaRbwNyBLWKTVQg7GJbrsq9DAXDAvhLW7hAQrSeKJ7x6Nur9spWHq23Tis4",
  "key12": "4XUAR16ytuBVGENbeJGn1gNgVQ87tL2gHKKfUc4foospX1bVXaWKgAZ3asP5o1CnFC3B8pyeKWQEes6pn1zqfMUQ",
  "key13": "5pds2zDq3HvPEChUjhWYnkVi8ZNoFiLWbhuQ6SPZjGXZ3qqoECVkAzubHS4ePEt8SLJUL2fNepzwvbPqxwMBq7LM",
  "key14": "4jLcF8DrXtEjRyrRshiE2pC2dV9xobvEvbATuyb8ZW9PZfUnudZ6n1EwWSXSYNPjfZZYWjQaUcAL7yeATwYRX7nv",
  "key15": "m4qr7vc1TdqxjgnCUZuweh9bzd8iBeG7AHF7ztPjCDL2ddSV5s6zwbrzTEvDDpNec42DtGj5GuvjfmcYtf2bEyK",
  "key16": "2TzK2tT6xUgiZZLcPTFtdsg8NUhvZCKFwUefLptdA213wrKHp9gWCuZCBNZRrKVgZyFa256Pm4kxs8hyvjLPfTM2",
  "key17": "2Ppf42AeVMu9TWvyyYwcgvEuLa8rNjRcRGnJBaAZ8p8AbhkfhnVLaYHEx7asfgTR1TPWY8U32TiwyAqBYVWT5dZL",
  "key18": "4BEcGiaxrR3oGTptpPcBQ2u2W4StwKHfYUYpU2LjJ4GTRhKYroKXKvNXQBn8ashVokrgVhsYEi9yW1FQNjqxrqi6",
  "key19": "WoJp1cf4uJqfUERjmvtvgY3RaWJMV31QYzk6PD2c4eJjczaMHmjAs5K3cM7zd2syQfQZZ8HubZVASan5Nq3fLN5",
  "key20": "AmCoAaNhs6j4CmiXLtme1AaYvabNtbnTLwWLfnZM3KKksHdpeaTKBuL6uWvqPjc3xYkx1kyABv4hDz2RcwGiQiy",
  "key21": "3r7GkAsgVis3L1SKNtZvsS29UEnSrUXs25HRTuFSgwiK4Kxd6CRhpvbbboqu1qL5J1M6K3ar3zd6zN5iapEE8AEB",
  "key22": "46zbVWYhsZfYgpY5MztB2cqt2WAALwY6MBEGeoChQc9gtBS8k12UuGCydpu8kxnnUA3iiZwnPZcdrq9yaDa2Mazz",
  "key23": "2PQSzg8WUUvsyGEBhBaJPYY2xaCbiaT6mch9zLbr3fNPcsrEghRob2Bs612a3VSkQxAkoJKr4adzJ1ohW3N6R69n",
  "key24": "3eFS5uJE6N1CF12Up9aw9Z1ej73Ke5SY4ZL2eTvt1DgZqeCpGEyvdBKP2Phcuu1wpQtAFRsWpShvLSRcshqTVY71",
  "key25": "4ZKqESHHwLd43fp7GiFysTFzVoERag6vpG5bPNG855kUMspM2Nx3kNfCMjF6uEZABBR1pHPSP7VKTKF4ir9S4Xhc",
  "key26": "4hx1M4sXCBZ7SnHXLwa4fFavXDWEB6EFpFUttuX3edQc65YApbMtspsNwoAc3uSsbHzesz1qyn7uT7do8Gx8HPKu",
  "key27": "46FjTgkdNnVCfjWckorNn5MVJrqHY8egvSMKCe3MZi2CpHXSdGxPeev4CNTSVJw7JX1neHeThzEsDeV7ebAJacv7",
  "key28": "2Hr1kAeouqdz4GVf4N98vzvCSutAhwBXkd4hiKxJaU4uh9jfyRuCWhxxcEFHWzCcLai1eEWcj15D8GCVXJ42nCGR",
  "key29": "3F4CoKZQMtjWRJ31w5rdpPoeTinmTyPX7RLhhULEVMwU2GrhL6PA42KR1swcvMjYD2whBjMeF2UbbSk2p3GPH1Ba",
  "key30": "5PgqgrivLfXpySqG5N1ssY9yqJ69e6qdSWr1vjKyuXSLyLMF6S3xymLWnZAdFjKqrxgapU9Z4jYyvxX1DBA1nxgM",
  "key31": "SpFfAQAtQPSKyLD7vMDsQh4XU1koEdUV4P7mwfLAWu8Z4PrDU4ZGrQDMNshYYURQdk53KQzP2vAja3rVFpvH1eY",
  "key32": "5oisZAgvqDWAUJMxxvkGfLnJu9ehLARDfabcJvedvkMX3qKkLHqV6FWJNTQyXMyFYQs9Gx15ffxEKgCdDZXN5Ypa",
  "key33": "5xTtWYi85HxwX3gq6UhtvsjZ5qEFfx4MFkHskaSibWpo5yGwoYdubpe8FnwFoJiC3ftFzf5ZXJAtSbK8RdtnAxDX"
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
