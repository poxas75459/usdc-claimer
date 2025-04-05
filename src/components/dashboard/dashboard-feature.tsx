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
    "T26qMFo68PUzrtmnbHbC9JG1fTSieCxBpkdt8R2nA5FE3VH34KZKrZQGugUBRhgpWe3ME9TwfFqzQwxfiGLFnhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXqvtWyeibLnTQvgcdDkDWWDLeR7yUWYmCzEaEsjF4C8pwSkrZ3MFjDNA1fu8wLrm68L8wSdJykuHJBX37ANPN3",
  "key1": "4svgdXxr41C1CT5HkRHeZNLypfZgSGHau3XGXV1jz5Qubp4ijSqCnt6EmhYbc7qAqqLGi6MG5kXrK6B6fN2rDayw",
  "key2": "A7KHJoCYBvUzEP4Y8RkU6amuy2tzvrcbBGmsugnnEemduRy7xaifoJk6YZ5gzzVsP8m6NgVpnLrVrxw1Ep7HCfW",
  "key3": "5trKs8JbtzSYUJZiH4hihHWePnZyetBFiQdxCZoWWGrJWqG43tD4ATnXfZ9L15trjgNwqXufJjBKs1uzmZZVTPtN",
  "key4": "3xdAMi9qrkt3RzmsP4m5vRLthJWSd3NszoFAWAFyjShLa1s5Y3ssC7fTfELNPCGPBi6aJ8whsXLvjYuyNan7b2jG",
  "key5": "3A3WrsYD6jDVUp3J2e3h1BSV1ptG55FifZjs2oWpgePbadeCyot1D4mkoZunBXh37uGTS3vdPbZSS9kGQcJffmjZ",
  "key6": "3GyPvvyzvqg8Cnb4HW1XBm8jXEm478iS1QNGHJmviNNDiErHC7DRn2vqiLfz9uuea15a9VKsdha4ebtBNoPPZrzt",
  "key7": "2qrwixvQaNVVeaK5ubBK2xnWpfhR8HKdPrh8A5ZQSatneqP8E9sf5CR2fd887AdUczovKGSaWCEAC2Qcago6NuUU",
  "key8": "4kSNfz71Aut1V1w11Jcs4fY3WK2GbLmbiSuf773QbFobpzTjvfZ3wMTxTrsFifTFLPgkQdvXPXyNHYSgmS6aAoDi",
  "key9": "3BJ3Y8kxPfV9kUuZ8F8wi5wNFmYY7CpjdWcywXmb1yC5QR4iwh7L5FbQEZ1kjSJU3iuKbE45E2ZWK24CDXPqskWi",
  "key10": "a9GZcZL9KirBeq1P79Y3XFtvnJEnpVyMuMoiZcGZi2nSL4JCrmtdcYLk9ZPUTwDu6BdGeE2fFJKv62gCX5qRHTU",
  "key11": "5zh5GmMeAE4gjMz9dSBGAp9ciR9ViXExiJQHRPMWe5vXDfkKWppdHttrsz6fYvqCSvUX1hm1UdWhUTzGJcDdwYhY",
  "key12": "4BYJBsTykLwiw8tfj375hangMxVt8D2HX2aQpUKUtLQdHiR7gzFf1STnvUUcSzG5Xa87Pve24iJ8zzAEQp756fSg",
  "key13": "4BkestyrFichS1P2uQ4QJDZuNupGd4iRvyYpTM8C4SvBNz3WMPSZdB9Lw68XLQX8eVGEndeSBKgFPQwGBgvLy53h",
  "key14": "2c7ya88Ef5jref6bizhggJQ3cTMjfaSShS114F6FheHt5GCKhAki2UzVfjTeCkASFhSMX24cpCbPCnk83BCmESPf",
  "key15": "5HwLoMvSfRciBpfebM6wtTRHqwWLq8T2hFjdpZPXttCsN5WnGv8kxehS5Q9F1fjBz14juyt7bD91ppoZJ7MjC2Y4",
  "key16": "5uJmmSW6NyFhyHr2StmYKBKL2pN8f54zgDemdcvuNZ4tJ2NKBEYe3MdzzDdP2NoU1jUULJz25YbVwnJBt9DQmzHE",
  "key17": "3nxpBPL2dzKDpHairUSWbZ1bfALwSA7uqp3BSoQkKsTkbbHCMPX1KVEikkJDaN5t7aU2kaP8yNcVgqbdFaQ6w1xL",
  "key18": "3zhdPZeyVRLNarmHvTAPZsXrWn3rNA3uHNmgLwJ2aUosRQhVKc3vdQrpWgBajNWBALTpEpgbaedVp7hecUht1han",
  "key19": "31LAS3qfsjTejEtzMyjMQC8dhpXcHoheHY5HY5RRgZ7DkoxNJaGCRtKqnJwkRD1BqYppHeLRWmwHbY4tuwLi374j",
  "key20": "5YTLZxcfcAtXMDcZuJHoa8jFzzUkdD2o3xWUbsuGgLQeFxkFWE6Tht4HsYpjzqWsMZMeRNiurohqnMmcdUWva25X",
  "key21": "2ue8SYk9Z34nX1Ku6fqRenp63VrBJ7uCMmCzRZAYXPdS7BwpgXuRL4Y1SbDq3PJwL3JEMgZt9r1BT3PKWERq8ZT9",
  "key22": "5QtT5HM34cqL83BUmAScB4pr1558DU3HZtfvdEfZ3MVnhMe392YPTfV8Y1p2o8MsyLYgKaUU4U7wBqtPg1YaDe7K",
  "key23": "vdzXwKpiUkYuzNBrM5TBeg1dtez3vHxZ7YWZvN7n9q68Lbbxy9Q1KzLjpAwMCrnsKYoSPAEJ3mW8mT78JReaY2S",
  "key24": "21FeQf7AnjGTtCCppNibGpPiEGmTQ99ce3Sc2x2K5zW46WqTHLUncMLYb1kH41DCEwcC8gYSEpq8p4deUn6R3KWT"
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
