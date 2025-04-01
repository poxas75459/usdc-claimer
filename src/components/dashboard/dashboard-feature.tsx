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
    "rkZQBMeGq8cbAWrWRufud7qvJ9r6nsti8mCCrX48UV2w3ysLbRrLdTBSsqdi7ZSU1HJKyVaYegXQ7xRCDWRcnPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXotZHiGdVh9CCAcTZKfzrRSVpkZBTvVaSkJ2PwuWPya58iafKnFZ6EWEn6VH8kM4rFMbDsTDKmkhuZDnnqPgSo",
  "key1": "phJ2j6hbXQmcaKwwtRCwDyUvfsXAUh1H272nR5y7aYGAre3Ei4SbBNGe2BHeAVDHZiBbth4L3SDS3YfrDB6jDgn",
  "key2": "4dFLzRMGK84EbvGGvnEbL6YZEhZza6obDx75BaWjCBwemTHV8Shh24t6iz6yjYby3B5LVLyfFTwLGp8hQJ8xWdEq",
  "key3": "4YfnBD4tbsuUqkNXW26QwRwB1gg1M9ie7deuyEfsHMXVRKnWWCLcULexECPodH4aJfp1WEw2MwXwxVf4rQjTEEoe",
  "key4": "3nymeqXz4V1ed13Jo7WXYNZGaRGiq3NH6rwPQN3nzaQ3BDgEHvxBbx1WQG7pTid39wmpfCYvQdHGCHqLbasN2zBQ",
  "key5": "hEgnVn7AxUhHtzZ1Sk2d498eJ3pgjppbA7RzztQbf3f2e9JfdtoU6C3JYEBT5AQd1NSggasBK4m153dAzq7FSV8",
  "key6": "iMPXusndvgg4wVDkb6QJRt5TGPf1yuZBRm571onENTBrqRdiTKbPNnqHGstJB5HojLr2JzhPj5XRdGXoqv2TP8M",
  "key7": "5w53PQJjQ6K8TcHe2L1oxt68uNR11hpJ1zyKn3zU1KPn8Zcm7EUkfyYMGe9Rr79nAtdHUZo8zQmwqBBM896G1KEa",
  "key8": "pTnSSQKmXed4VhTPfi1M7afxs6kqAiAus7re3UKL1FSH79GAzM5edB8gD78K8eWuNjutCgsfn4wwMMgDuAZgr4n",
  "key9": "24UuSydx54Yrb21qd3m2hJXRgTyWCe2uW4rnCoHmVnYLQsCmWJtJAAWqnWnxy2QZnHw7uJWeBmX8tjYtJPAHpHcH",
  "key10": "5fbXE2aMEinGdBkJbgjF6C8KhovoiTSGCmGsfsYAHbCR2T3QeNnJ5qa7nPbwb7gJfY9kGrm7yDiEi1jCiLffpSrQ",
  "key11": "5ZDrmCWTnTrRUwxoZ5XZyGUraregEcff1S3uhGzyxSYyjhz5gqsUz2Bq56kM1pqCDaRhYv8KNAa3cbegXfqpGbxE",
  "key12": "4mMQg6dKim9xDYisqnUmAmbFeHPRa1eTzFtHa3A19xZrb3ncyJruzMHd9f4qebxDoMAf7QUUXciR4G4WiZWE26nq",
  "key13": "2GqWkvMxyBeRvm26YB2hJfvog8tvnQmmUqgN38A2amtTSS6SZSVBPN5Sr1Lz1tUbQ32mLVqK39J8swWDgReRXNGX",
  "key14": "3VhgLXRFHKEohWMHiQu2iz3742tMtvknFPuobzE3eXozA8HStBBSKxPwqvtYATryenJRHw7RLWQbUa1wHPqLdrNv",
  "key15": "5E7c5aKTja9rJZfS65ubjdQk3CDajnxriZabqfJ8QiVwJDRNHvuJcBvn9wsoAoJo6EDebMtXunCcSSXdGTSVrnqu",
  "key16": "TXx2vcYFY3mViuLVdzEr2AoU18t39ZiX88h4fiLE26tqu2g2pxs9iC3zy49qXi43JcuNwv1k8PPkbKwD3DGweDr",
  "key17": "4mmmWhBFekoKoXJDnpKEYUorY68ZYGvMDWwMCu5YeaDnzfT6okKEDvpozjLmsMWFfxChTCnXTasaSRuQ43XgAWuL",
  "key18": "3HCe9BVefzDKGvrzNXpagTDiTDb4ZNmAYuFA81rtiBf4qnmvdepkPEwQnUZZWpe7HNFRrSPwN9QQGzpr6AuTGUPG",
  "key19": "5Q2a1egSj6SGvhtM1x3iZZZ1aHw6TkVvfLM19Baz3vCroPxYuQAjxMtgzu4Agm1ZK9JZga2WHNiCqhzqWCDaGAE9",
  "key20": "g8uuqa2cN3w5qo9ZwswrTVcZKeKDebgRd34vSiKG5eVvbZVPSm8ynVJXsEJ3HFt9JuvgewDTnv8TRz2cYdhGr5v",
  "key21": "418S5xWva68CXrqhQCHb4qZffyfDTzBagoaYeyQCcvYhBmyEEXBYzBX4UVVq7ZG65J2beFeRcKb9ns8E4aZs5Gvn",
  "key22": "5JzKQZsu5QYBXbyfB5iPeAsKHj3hkbLYATVjjmhuTujRdUdedYtxgCcJi55pY4bEKPfuj8E3nTk2bEYwwz8AvCP3",
  "key23": "AFaVPUrPB8Qxq9roF1wD7mcY86cMdjXUwqfahXZwiYQ2Xcz2SKxb72gvszV6wrmwDGKkjALFepo7uMMGt2bsazu",
  "key24": "5WPtDRpKdv46wE3CkFRkNYDRw78sTizbtDNJcd7bnQETQTRh861uJvmFeE8b4dT3Rk2NyAyoeFMpkVQ2xLEaFqCe",
  "key25": "4G5PUZj4T9ieyAMk8j4EtQrQELi4WtLJ7jrEar2kxkmyvvG8LvjSx5ZMPxjXSr2WD5grgu2HyMFGrgMHm9REPLHN",
  "key26": "BEBJVeP8eHkXMRQc9sa1Kz193TBTH2FtBLbi8Pd41KdGapVBjxX3BHk7X7qRFgAB4yQG1mwuLZKSLVqR75WJTHu",
  "key27": "3641FyX53WibKkkS8QV9sVP7wNLKQdoBAYfawR4XjEmUadn6ZyWhGHc1N383onWzRd96K3NhHP85at7JLnAnsyBR",
  "key28": "556kx9srKrgM3uEwW3ypcWzyuLiboTxd5d75jm5929nrQzB14dUXmi9KVNZ3gQmM8HDFsP1rwS2jn7kM3DK8Fhb4",
  "key29": "5x4YXFbVXQ2Fi147269BVGj98Y6PAMFkatXrwkzTqJwxXJ86aP8DtYY533wBQSoJSce54pakWecVHhRvDmiFdbXR",
  "key30": "59Bh2TahhpzvZEogbqRoLgFaan3565n1JhxVatie6pks8BGbTd4en4VyQdpwoDpejrk8LzySHX7v5esjqv4QaVWK",
  "key31": "4cnPDBhjpfMyH7vwoaY3JqQtwvfyhnu3vueBRX68Hf5Db5v8yFAjNBtUJoyHjYqtymFbH8G8wD2GYZq9QqeNDP3a",
  "key32": "43ZCpY3kCZKVsnag1cTemPHpthk7NzAZGwhRGkjaKBHsAocY9y9jMKNKmkrxHdCcPy5VaBj2R7MieMh1ooiq1Gpd",
  "key33": "5xrCgB9EyYM1AZ7vm3URuZ1kvzjV5s8TGPFDni15U4YLmi1h7SqEiPPmmzHFkrAJrEJnWxBVNumcB5mzDgwJj8kM",
  "key34": "5EaDXCj2k6AW2Bsmff79pDVYTggHruN5aocRxv61DZQ8F6N4LQU53aEkwB87kDEdyDBvaufhLwyTTa4HZTxT2gT8",
  "key35": "4phfvrQcw9otjgEKZx67yueLPJ9w9eFr5uv5VTrRch91CLWBrbSz2HCm8LnZaLwk5yyge9AhivqrUHoT9GypDfXS",
  "key36": "3RsYwPZ2t7mFywvnntuGLrtit4ZG2XVX44Tm2dBMjy2TtqQqSFTtkvdqHSMm8b4isEAkDwxqzXzXxgz2Y1Qq9fM2",
  "key37": "21JnxtkK6VwjwqbG2w34BpqrVN13oXF77mjVnNRvERJdB1GPrDSmGe8wQAcjnFYMRaz7dChDDPPBotY8DGRbvcuj",
  "key38": "5yzU2P66Cc2vfU9mnASyPhHB2YPaffkGNdmXF2HWbvpYdeQxpEqyXhLLPHck21gWftdqK7H2jJeurZ5xn7WSERbE"
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
