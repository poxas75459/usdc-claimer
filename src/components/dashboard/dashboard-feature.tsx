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
    "33z4CXp1zbA5rJDfgqETPsoBQj8oFRToFU8YXLWEMet1iw1DkA88CZyDngEVPk3u9arAX8fT5eF1Sh5aLDTRtntu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehFkN9DaP2GLbXSTNz5YyfRGrkDcMRpZWU9kvXN9BBFdR5aLH7qW8ccJzUHHzyuYvNXcAhqa8d6ja59e7RF5umR",
  "key1": "5ENfJJyXwYxNz2oZv6ee4Qp5VfCii82W5zbhhjGWxzdeoj2VnyNVHtR46v39xDmkprLAapx6qKr5h18uZ2nuWxoV",
  "key2": "ghyLNsCX2C8VXD67wxdeZmxNZXPgSMoubUKSsBadvt4BaKjGH6jZihsBK2t2icaRaMVSE15JzXfzAQVnRAQ8hJa",
  "key3": "3jnk4Zk6uSD4QtQy67JG1X6tCGj1WXgWGc2PHtcjYhAS3n5TUBxygAytxx3Zs6wLAFiJxgSviD1tfK8CDC1hYaPf",
  "key4": "3oyZjQUeCiHqsBPdpY44EmzQbdSbexYYyQECFgtcV1NWCApEfq99sWTjmay4uf4p2aJDZ5K9CEstuQHCekqQMWtD",
  "key5": "3EoJ7zRAyRaqMRf57UmrLSbCF2vXNLLKMNRbT4Y56v6HPEHNj1ZpozgCFnAa5x2SyBkMsWHZEH6f7pGdiTuooiUd",
  "key6": "388GyFjMr6is5yLHc81xkoGBSNKKWJQYDMCKpGb5CpvwjVtJ2cZvLvKjMzTMAQ3CRMTXq4Xu2wUcBFspMRjsbAHJ",
  "key7": "3kTAoRSxauXFpgoVxizJQ1T9QGr24eNL9TyhAhuBL6ziDQhf5gLL2bbq3evrbNMrNC9ZnZrUQ7YgQb4xdP18LcWT",
  "key8": "52ixudmu1F78h5bWDxRnuwePTVpPcjWbDAoUBr5e13tGraHQSwxkJ9nLbsigo4u2DBo1pxrbFqSzoektdEhBKxge",
  "key9": "5S2j4ZBSpSmnxx4xVGtbF9gYXVT7z6XATpjwdms1dFBRVGzW21FNVZijNw7Vpa2AFmChFNJ6vYdq1pgm3WoncaB8",
  "key10": "4hWM7MJ9wWREQv2yX6EbbmBWnQcGcrbEWoZPm767G2pKFSpBgUjtNJzoiJvQKtou5xcgyAgWDhshMxPzMdy1An1y",
  "key11": "WZVQE5yk1hJBuyHt6Mnt5upGViN59pQnDAorkSYKDuCJJA7HjTeBsq5EPdZR6eJw3FCJPEi2cs231RkqqxAxtqW",
  "key12": "VoYKYoXEat2UTPU5ukFvQ8vyz8ocJoDLQXEhPBR4nU6MwVTEWZMHhLVFR9GuppwgNWkBNDWNU3sYxmDjhWBR8Lh",
  "key13": "5d2hifKsXrN1hnkfWkYUxYpBJ3ept6Li92c5FRwPQgY1SnEZ6LXvH1S33xj6D7udNysfu51RiFxaq7fYwUt85qq7",
  "key14": "4YtcpKx7hiaimz8hcmsRdGuKGuh9ymRCFMUDgyqRcftmEymqGPi1XJ8zpyRtjyth2qkrjfQgjRGfCYF5cF6Scn6m",
  "key15": "49PUFQHHqEeaqHeYbZC94niQ99fftXU19BA5KyMedyxbGat5QGiphwquFfoXnymer8Hut7ReSqVvytpN3zvjAV5N",
  "key16": "EjwcbjCoSuJpvAN8GtnLeVgGQRRow41G4b3KG3R3CFMye7xXKRjuSfroac51cYSA9vjDx7BiqAhkAE62qF1kxf2",
  "key17": "5swGUA1zYMNZ1GctdguEr3CvXx6p8SKAxbuXw5UdrNfvdbW19qFqKkgjTXZ8xavr7xy6yX5jgmAHK4TgeXPdJbga",
  "key18": "5rcyE1Sto4HhSPzCjLGa1ooduT1t6hEiAMhc1aKz7yY8p57JT8VLeP5XiDPWLNdXWTotdTEJ4MWopab1XBSFz46Q",
  "key19": "66MiLx617o9r2s35sMMqSaEXfVYcMPzrDhVmhspkzb11donLdQ4YVx9do46qyGE8S2bCcMxTKK58yXvK9z12AEBF",
  "key20": "3d9EBRoBUNvvE3BXDZe8Yu3Rp2zHkEEUEU6HEzAyRRFUhjRJFEJwC2Az2iBV4Ly4vAdyE6T7ERkqzW1uQnysYtnN",
  "key21": "9N9QcDqfwSAbUD4LjVB3rN6wvXJ94Jzu2Bi894AKcNyUNjmDrrF9mN6wNeJv46svaKahcuEucVTz49C2U4w8usr",
  "key22": "2e8vg1QtXJ78a7ZRYmaGLzrZ78B7Gpp6L4eMaZ8PJjJZ6cqYqGZ8WcC29NuzvWMZq9s4QCMM9YhcGUyxguM4GSG3",
  "key23": "5V9ch7vQXwDZDPwZs1i89gdf4QN9rCFV7LA46Ki3EV3Sfzi89BzBrbcweJEw7WsB7HGDFazrpSMX3bwWY3vH4DXZ",
  "key24": "4X2hyR6hbQrDYCvNMVaQaWYwqRuF1bbfKGq8m3ub7gKCkYFyU2SPfriKMkR2nW5dyrnNMFTbrvcsnnrJJ5KakAAv",
  "key25": "5pNqofCWSVZVmb6ZodxUKBc8FRYodhmoVxhUAef2UWFT9mK2KBJBYhPUJQHS4XczqXiqRo8tpidPi6gUXExdPb6e"
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
