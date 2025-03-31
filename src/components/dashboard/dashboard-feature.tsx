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
    "D8chY5rnfGGYfgETPSas7wYS55fWhnwdkUv3mgtoefPDitRvG5yGXLcv4jwt8boEEQN1qkQAJgicYrnQmnfY7iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63frizjEd4jbgbZzFE3fniGqUJF9NerwcTkrpicUbtQyU4K3oLvVxg3n2hUvQ35Y1soxgZkGfcKLAdhyM77qeEkF",
  "key1": "2scAM4YXZZUKyH5y8sYRox3ZJiXRoEuUZ7fYt3CqudpV34wNatazSXsW9i8XRbSuC71rdHt7Gdtk8BsGgnqKDzRB",
  "key2": "taDM6ysaBra97aJzq2qUZeQvuPq1RVvRJaWwuubRgAQX5AGcoUvVM5io36cD5LPzhKR2t92oJHoECF7kayT4XSe",
  "key3": "2jk8BNwTAQHtnPTGjxn5a9VsjN5XZcDPa1ePhLGS7DWodVS16fnFyXp7fW5i3vbER236sSZepLmwnSChyQL8oVxp",
  "key4": "3K1vWyxQbFFkQYTaPEbbdUtuqVA3NMLqjzYua1PmftDLfMCH1nVZTSyFAGGeuzt1bgnFfWmnooMBCumr2gQcy5aq",
  "key5": "5nBHg2ZerUiBKPvtxyDpsHkZAmFpCCwaEakb4T2dXcYK6VahV5t53Pc1Jaa2QZE4N1kUPPUFhMJD3m7papNKeSBw",
  "key6": "2SY4eQ1B8dqoaLVZEjUDeQ4oxqdFEVjwwDAnadaPQKCjKsxM2hCDVxmcJdK13gcp5n2ZwcbYncCTtHdvnbpXTqwz",
  "key7": "DE4zZo9pUjpZ3aYs8NzLaAD3TSRMKyrff94F721desxMF3q3a6RgWUFHof46sbAGCZtTGvMyGMojQpnW2x96tGh",
  "key8": "3CtRaRpfoyF6MmRJnhYhiZ2MqrE43CDrnfMxBLk6J9MBk1iefFLgBwuhnkCZjMPbtgvFSRd1wcTnHt3yYG6tbyhs",
  "key9": "43g39M7PgMcdAkBJTdKVSMSsTyvkDWXcdk2Xw5aNfhPh6f7bmgg6zGGNSCm7vfCyVuvFvFj9PXUYXqmp2ZYWB4uA",
  "key10": "12A2zC63WakkBKGey5LmUWQbsDJmYdDQMdJue6t6gEoiuVnckJqbD8BqGbK7iVj7PaNt5nPyR5gqwSH9TLn8cfYe",
  "key11": "3k3Q5WrL5QRVX5XtjgBfRZPnk89WF53E47pCVjUyZqJoXCp3UZxxLNaZpPUQ5NwawvVHHTe715X742XQXH5vK7sj",
  "key12": "TtqWmtC5bt3iqUnR21qPfYuxobCnfxGC5V3agqsxhdVm4oMVksLmFMy3r33LVgRQJNg19j6Cz3D4ewrz3n6XXs8",
  "key13": "5xQeWBp7grJ134Ecx4zkBK1SkVtcDDZVuhU4Knma8NUWsneR8QcrcyHUzMSgdy5Bqt3C8Ga2qCyWYMJM95hEjfHZ",
  "key14": "5uecb61bz1Kg5bw4K1EMWwXSMKZQ2dh4SoTTqAWTAVgjd9FcZEvtRQN93tcQQugPapsHAhc9bMozPrr4o8g3FMMH",
  "key15": "43U3Hb8fedaCWwisRLXj6tmzwXNu8Uxei5Nrwj7wtmAzBE58YZ9pqXaHdSNHo5iTBRSmfRpyw6J7KWnic9KQWDb6",
  "key16": "CMRn9uRsmEqpVx8PZMA8B9YiEBRNE1BksZDjoMPAAbxcJXFmSBc7qn67VovjQaXwmgF8DiLjmACqUV9wkQU6wGo",
  "key17": "K21tmkRVim222duBxWMS9U854G4SnZkd3CAidgzje5Rq8rifGo4Br4fgMT4NLZMJRB3eTKrgBFTCasffQgMf5Ae",
  "key18": "8NwCV3gpEKQMJw4ZT14N4pHhKXT8gH67zZdUKjkTypcdGyj3qCYopUHg6zZjh9hpSueADu5nf9DbJmNsZkpoFi4",
  "key19": "2GFqmhRuebp23f3TALuk85QDCvuVP33X6GDQFB7u2oWXzJBPsNcPb37eMhhS19JHPdoFHcFjeueyzF6vJFtuP5pg",
  "key20": "44xEqRgsEqS4EXqepzuc3XALNdYJjh5FaCaK3ALypjxrLLdS52ZB6ZeaF1fPHCZ8NaxjbtCm1i3LQEXq7g5wA9Zg",
  "key21": "5onuoXXoVSRJYq2uNhHPwEEqKMwyPfFY8yr6Wz4yHuArPyAG9VCJ7MuHWJzwV39PYpN9sxGuLNkXdcyYWq4hnMAK",
  "key22": "2hgmtjW4ZvvWhd2vNRNXwzfNgugegJjGan8ewkk4DbnqA2r3c74aCXoDi3Qzvoy3PXnc2HpVYwFoKBRtMenhi7pL",
  "key23": "j8zGXQ5ybySC6RVbzZJKk4nz9nxxo9LRWmVmZ2McsMmKeXKhAF7KKXhufNwvtraeqG95eBDfog4nkx1gC51o1qF",
  "key24": "41kmBLhSY9gt8XAMf22CyP6nHPorGng7wEzizNxFGmhLH4yNekE2DtG6oPmt8QNE638GyynPtMhYCPegXJArbhGu"
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
