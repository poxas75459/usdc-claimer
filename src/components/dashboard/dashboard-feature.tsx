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
    "2Mz8RXwZDoVxbWzCGqHwKSFktr9uF87RGWgN4GtUtQxFNQkALgkK57buPPGjxequC7CmiPoxusQq4JbbnrSXBGLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9G2VLvAdFzBDHsmAoVnHbnMpMnGFsRUFgCz1Nz29rLhnZdgtrsqSWkh5Qgv7b7HgtktrK2QXvAXzeDGvvR3QKo",
  "key1": "4y4waKdTFj1xS9ondM3L2NepTU8XbhcDevnKVhmofCnfDFDA7EZhdAt4LhYR1tAweof58a2qk2rYUV8PfyhmP55f",
  "key2": "2podoWFf2iXfPSSiTsRPbwL57thRvryCXLDdnSGrEzgHyk76gGwFeDXJKaGDDZANowivNdLxoCqR648TUQet31wi",
  "key3": "4Fdd36ZgsfLYzE9Sh2UbKt1ERFLdCj7MKhSJQMP3rskzmYNqv2XXbmpacqr3KMHenaRYFFW7cRNc9NUkh1f8Jzun",
  "key4": "2pVHqq82yhi19DZ4vWLANuA25Y63AxUKxuXbvk4biLE6xy86PYQN8LY3LkCrWSiWSM8QskzLipp7uK6mEQYj9qzi",
  "key5": "5Yjcevyv6a87pfK95QQTB9GWcj3mgShBAZ64MndpggrBWturbhkbbG1bhDW8uxvzpc9GmW7DaJQsUHVBknUL2oUZ",
  "key6": "2is1CzEFx6Ujw6H9tUUae757frRHyDhzzqqFD4UEnWZFi4H7v1CvLZAj2xZECigpwCdj3bBsXaoXuievhAbQ6bUm",
  "key7": "22KRjRkLyHZi8Snr33zWxgw2G5qt6J11FtNkFQgvoJEyGFjdhmKf94wymxWGFmrwXx51Re65EdgLFS3LRBmERCXf",
  "key8": "4RSgpRKBdSEjDdg5X9AoY8nV4gUeTx2jEVmWzDp4hkJSbu2RcH3hjyHb9LwrW2AyFn2Nu6kWB1fqGDJk829TLbMw",
  "key9": "4bBHRccspCjvHvzDr6DqWp6B11Mrd1KodD2X8dcnjKqXWVCueGC5oHivKzCAdt8BCmKug2PcpT8HS6fNgomoaKNg",
  "key10": "659pT2qygqbcNXM8ugY23K3Z64TiC1tQjsdjz8VUgWAyG8eyrEewTzJE9XzUKp5owNWKDkFXvvCebKQyaoPcd1ka",
  "key11": "3MFuCAWUNn1JkVpA1xvq1YAg4kpEXxUpUHJpimFNCVdf5xH6WUfwVJJyFNmWs1Nwqb3yxHLMBEQkUNhUZGKs7TgK",
  "key12": "2DLUnGiiLfuH2CAeSz1PHMWG3ypTDScu5LsMYLhqn9FcVGK39QYyY2moouLqHxdgkLuTcrKH97Airro9Nf1Tkp2n",
  "key13": "2NJS6qTudxowRDcYegLC9GqGfJvCN2yaaZ7nw9MU9dEVqGueK8r82HEsoebbVmkM59rZ4GU1ZxgTicoo78jH9bbB",
  "key14": "3oe3NXpiuAygyjbWs59yo792HjBVkdj29gpauzGCjtxM9ELKs3RfSVsUi8dCmVT5bMKsgFXT4WumfBVykvVw9sxu",
  "key15": "W3LBdBpzYkrkNo2ft4kqq55JKCmkgDZR2Ccjvs6pzUbXJMXeg4UHy2VZ3suMrasHvyPBdZzCoY8jXdgmSCaDDLi",
  "key16": "io2TrLsZZDMqNNDYdcW38ke5qN1mGiEQdYVXqPmPScrZndNFuNi5DzAzBRZCvnfKbuoteBe4qkqYDYDEUTXEBGg",
  "key17": "2MMDWaTSjTMNJe8AbQzHQZ2gd6P1s7JYSgqTWW5HtCseVfYC31h3T7WMCN3HbEYnSTqzEo7nQH4eBMoQmrZSXwpk",
  "key18": "2JV6WTjaGAE5PmJF3ZBpMzwcqzgbaoVaoeoc1xo9BQYLABqpAxWemjVRsjhKsLn3C7tdgk3kTDhwe41jZZedtUFS",
  "key19": "3adCgYZyW6cEHbpwN6zWq4AjgD7hLypzUy4XQsHFvErML7E6MQoBHbycoTEHCMyDM4dTvpLDjGstH4xDjtPPtcWP",
  "key20": "BnirP7yvxRLETZFQ9qTiuCXsx2pz6pfQcorVYBweV2LNAZYfMxJooJST9yEeg1drvWQksa55YA2G2kQs53mWPpi",
  "key21": "3gKVDdZS67PoLGVUPv6QmuUMjoVuXSkAES2FbxZu8hHaxVaPHGRwuq96X4Q13oGJNm3xJynpvocZtaQgAkxgnczq",
  "key22": "puWnX5sG56dBrWQpoztXAZuPEx2tuqC91nsTF17r8TAAZX7KnRDYnGrQjfCcrXZt2BeDz2Kpy8ArqH5qQHpuGZH",
  "key23": "46vge8CVAnE2EJAiKf5TAE9V5MABY25eFN6KfqGFPbm3t3RFYkq3G7DHzrrcSqZ2VJpSUAPbMgMCDPS3yzoNCcrh",
  "key24": "7PmZ5Ge9Fy5U6gvqN3h4vc3ZtZSRj6QgBjamMAeWr8Rujy4SHCjmNrU4QMWDdqxLiGuJ5MRBipcSXKftXPjFsG4",
  "key25": "2h2FLBcNro29iRFmLzJ5EhsMiQM1scGupocsNtZFbV1orwAT2RLHwjKVqcUx4cwNX5ZK6gXNCP4eibddG733veRq",
  "key26": "Jiw7HukqCfiGPyiWZYGL5G16vukYG9ZW3LkZpMj8DT4E7RmotMKyZ4ufbB5QGpJB9N8pMje9b3qyXDSZHTwpVq3",
  "key27": "3diYuic23Tn3z5k3kynRDHAMGhj6VbCCYtNkcEgNZPKvJgbJd13BH4kQynoVBX6zHgp2TY2hGRZrDsi6iNcXXkFW",
  "key28": "2fuVdhNjGDfpMTTrCbcS5Q2dHUNmafkUSXbfGXUgoR7Z6Ukxk6TxWGARGWVwEus6Z4Uh1sc6ikBMtVDCxwEMZGoN",
  "key29": "4JBpvb5qMZvyTadPcCJr6fy3XnY5wR5WBM9vk7DQRbrjdDp9iY7zJNywYmZR7uMUuFCM5UuDy4HW37Nh3zFxXgBg",
  "key30": "5RS9za13gH8M9XbTNTPwf8b8zMPe7SrWuTF8hxgCjXeZNF7vVMGVJT9fpQhGJv4ZczPDbazt71amkEFU1mnpSYwn",
  "key31": "3Jc6zva9xV4g53W7HCgEaoT4m7hkRpNau6YB42rL754Ln86YRYrCn4a8ZK3RcYyEwSACHVpn68BqAARozTaz6iea",
  "key32": "4wu8na4oaPDdzAwiieehBRfEcXiQLuKjVD51UdwJU4NAMVFzbXYJVXC6qWJzpVUo2PNKNhSRveytQdeJ3PJ1H72W",
  "key33": "WhZZhxoSBwCpELtDtLj2VvnJhy37Lusvkd6Uc6WuzBm6ombV4Wk8nrsBV8K4NQKFV1TL7SSgg6h48MoTDhEjGob"
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
