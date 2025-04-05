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
    "3WDFPgkUeSTLaVyaPg3KcGcTHLcspegeCBCAGvR8nBTZgEcaT3NWYVmTx2fEhZBFd1MooquJXuCERL5m5KocsoB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCdchJj56Ry5qMctUToQoeLEbrT4AMzJnJzLwtKugbc7xZTuo85jg6XmRc9oQig4e3XD4Ccq3aKyNM7vxrMANUV",
  "key1": "3QQyvHid6uNY19EBUBwjXtuZL3LdPmQ2TwrcTo4BsfFo1uyphz2eG7sXMmEZD3kjCbwKqC7JHTCQVnMdwbdCPyEG",
  "key2": "JbWCRnNNwvEXeXSdAp7kVMFKSstD52Vgr875rUvLMv7VqBxYLvDAiTS2kTE38NgVpWnmhCJzL16DV8yVpm42XXm",
  "key3": "5LrPWr3Dtux9tyxwwiasKTELMFko9TnNcp1f3z2nogVEHrepofZJrSevbRNeo31LFZa674zWoucjB26huQ9GDAUv",
  "key4": "4CVMtrQiuUShrF5w1n6A934Cg72sS7kmu8iRfPA7mmimX7J2SbzZr6d2yZY7Nhe3PWEWwxkTH2Xa28bkvwsrCSyF",
  "key5": "3Uq1aT4TpjthaYNzkSWN6L8cUf9TDr2tA1mAR6Z9VpV32jyr5zS8GycabK7DE8HDbcd5QeHaHAR4xWBtGXMu8bfH",
  "key6": "3rMVYvngfYP3wfZHhPD2gYQkdEiTFv6eqgoGo6WP2qj5dz4i4FyzWnwhjomh4fayJmgwGpjJQEC7uJE4gUtMANkS",
  "key7": "3X81YjJVLKCcXFHdiFAN6ZfdYNyNrrTZaWc2AtnbLYSo76jUQ5qBc7BVDb6YkzNtkJL8xP92UJX1AosZVaBcvHtu",
  "key8": "3WA1J874BcuNQR3xM9qMXbx1JCPKU9qzfYzPxeHPMfQK8E2HcJCgdSK3VoZTRugQWheXGBhnqrVMdinsKJQXMcDr",
  "key9": "39uCKXZiWFBSDUbc2B7R3kPjyE3rq7odfxk8E8q5zMRc7rnCswbWVN3W24P8Eo27ywR9o12xKju3T5Rmn4qTdHCP",
  "key10": "2b13sjtHfC8zp34pyxESookvgFEDxYQrJp3hgi2VDqntTLts23fbrCbKLVtQaenmm388JvrzaStWhd3KnHLcFQJB",
  "key11": "23tv6xZW3WvTCtg8aMKNyZLRuTDuhGzj9DffGiQhRmyH3bqkDWE3VMgFzFcWwMG6Sb9o6YHGMTiDxHFy3mt2cr98",
  "key12": "28d3dPgd6Jcv7voHo2D19qC37kgoYavpdBaqecuG4b32zjeZfauQKPMaLt1Ea4beXvNR76aEgNyi6oUC174AFxQd",
  "key13": "4YXmowjQFNoSHJeDZE53PJENGvsgRPySEa7XVh5LPJPfenBhEUgmoQb69h6beBKb9MRPsa5uNMiusyT6HvzNrecN",
  "key14": "rXLXUm9BtMuxDpSJvAfz7onrgok15oo8jg1MJiWmfceX6UQJNKXq472VjmPFbvYuEdE83LvCA1a4RvcPUxsaaPt",
  "key15": "2V4Tau1rvNoeGaJFLNmDp6fzn6bryzZnXgcvAWyvwWqanAeDyWFPbXQywmZvKdxeSXC3pUsYVcSir8GVpPXuq9iW",
  "key16": "2QC9m8WbNKY5VVTrR2sSkLnXrVr6jtBC1J2J9G2Tdwfnue2ZaEkmgjXdk81oCHakTvTwJS6RaaHCuG3Gig13WyPP",
  "key17": "2jTmzuRKKm51KyxNqwzwzdX2Ni1sVZANSkBzSJr2Xg4MhbCu2Y2xqjs5s8gVhExZpCaTtnTLRZMWJKYPaiH361Ei",
  "key18": "3X19xmy28KtnuJuVUCiPKsBCPZgoVJcqD7a8uVePq1FhmGAMSTS77UrRXrvKujmZAizV9Mx7tB4h1NNtKciQa2dL",
  "key19": "37UYaQ68umZTVHoCHJwuzcmceQMRkAbmcgtkg9u9YYqBGTUajMztg6BTocnwWyKwTwDnYwerLifMqx68BsBsJwSS",
  "key20": "MvBqmf9Uxrszg37XnyngMrqJN4dBnTwWsE7WWpHqAzifHYVNrhS9ijv2BbyPFT6DDZo5PYQij9P7HmUYJBzkHGd",
  "key21": "5MRpvQ9EyX71vi3ZUQzXrjSu7bn2qCUmTeHKNdMYHLidwyPKpVLMfwAAb7AVzaNpYtEqFFS5NutDFB1bUn1QQESS",
  "key22": "3NJNoiPraPxV171EumFquw5RHmSYyf1HsB3etEGaCnw6mq5kqM9gTAS593gMKm4K1T2DmJrFAoLghgu2C9A9bun1",
  "key23": "53K6UZqmtxswybVqw3kB1oALhrjQFhAARvLrKyPnzqh7KppnQUZMafo6t4A4wRanJTo6JwtKeVFgLFNSC25Cp4bu",
  "key24": "5Zj9KpNAXquGkGYbA2YAkcn9RbXwnZ7GrzMwEh3RQwniE1CEX4y1kbDXGraRneuip1QaYp9rZVNQS7hWR4aUMvsW",
  "key25": "5jgmcQZpbF17aW133f9zyGQyGQtqH8hrg2FqKPjNPYbrroUT16hDSDHDriWhPAEaqGpB2JoXsbxguNCPXWRfHdwW",
  "key26": "4ZSadJyonNQiU7eGX7PiK7dCCoAiBJWwJWBZp6kTNeyRRMizU8gp4JFADhCppwZffJ1eaBAxWkdR2ibNSv29f7mE",
  "key27": "3pW2gVZeAqMQ14LsmqaLRNVX6TDWJHkj9Tq1bt8SedRgvAV5z949sL3e8Afh5osePd6F38Q39M4adXJBGNG1KZ66",
  "key28": "36ofs5CmLbAri29SUqKFDVrns4VBc9JgkgqrFB6cA7puTS4HN1cNLhjaXiQivRBuxWkUgqzL1FHogkWAcinokyia"
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
