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
    "Ut68HiAm441925n1qAHGwqcxRD9aeEoc27ALRDf6WheeGyRLRHFNomApjbX6hKohJ5pfK2yoixH4HTmBMErsgZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mp9DkGqGMHvfcs7CfKTCNcBJPBdgmHy3hDze1CgngW9Cvh8Hetsv4j5tJRipiVC3RFJCY38a2xc1UAX3Pji3itF",
  "key1": "4tJKCaAueideQYqP7DMtMKjfv3W3v7RRrJHy6sUZWvEKNrDor1GFboTtkVKGDcVo6bsFsPqwenn796U2fiWyF8aW",
  "key2": "4BDzQRTs7US4RHik9GWNPfhD3xtrKzWi7BkpDcnqc5gy7hNyeyzGwJMRDtsRJnCmvqTcf9uTViz1N5FdifV57H4W",
  "key3": "51wtV4J3NWc9u2Ntp2dzAmYHfAZykhAfyT8QvjcGk1v6bmJmWo59k4DzhePqm3sQZQR79Ujvsd5NW76Bm197BEni",
  "key4": "4xV8YbbJTAvbCYQRhydqqUkLurJ4op51ccV5KmKVHVhUH66PELiS4QxD8g2FigiywUCyLWmKvE1NPQubCBSfto3a",
  "key5": "5rCbjHoQLSkV2USspRYy2Hza3RThbTFtCpvqyC3TF5e1CseucjTkiyH912uD16BXXzpun94bLXpERLwEyta7wj3S",
  "key6": "2MBqZQ5LAX41p8XAwQC9Hcm6bspSoqMfab9ycZvdMSXTZpsXPRCw4yMNxePCxdwDKJa5YDmbLESGNMh34uPRL7RM",
  "key7": "3iqFFhsdCiT3QsHRvJwWRzSM5GQEcTpWUPkuRwKhyeCnmMTH2RmhW2NeyhjiKqYckuoaFnPt2dcBqgK7WHBCXAav",
  "key8": "4cXCHynP2agfDiQff14mGhEfxLExVytcPWGtYV1h1RuRgtK7Amn3eRyFvFojzZdr9qNJ1EGYZL6uPyQcF6eFSekK",
  "key9": "3TZGRxpetFxtm47q8wvZCwsyEKQZc1XG4SwrfW4pJJMNirp3dvFCS4PNApdAcWtTVp2C4kBmvYb4yFy7z3HG3hvM",
  "key10": "5TASCwFKqenqFHi1KwriAUm28EH5okDQ3dNE2YyXVVCwckBXurjNfhmCkuDHTAj2dMbx5orXpZKBftUFpvLUoFsT",
  "key11": "4CRRJsK6TZvBUaTzJLRz5z5HA26ukEHYk2ieJHaZLMgCQvb67eKqZ9sQqEW7MxQpSejpH7URR6uPG8qVentngbnR",
  "key12": "7fqH3Xv6xb2NMbvmApSVbYryv9vMDqvX1ytp6KtCm4qi6g8pvM2JRutscT2By1L2Cbo5r1Pu6ZCikUejP7Rpg1Y",
  "key13": "4JgNzXK8qZX8DLHY9kwjauUDyyBd1zQC2rU2kSKFwcvfJJDRnvwzTxW7c6rFVQRLRiLJiMYNhgHZYAyDFPYnmbEs",
  "key14": "4B9edT5AeSxNRm77iV3XnjvhwcqhapjSPbdFXc7VoaFfEGGXCNyQnzDZPGgnPCZpQDX4JwQs8TfyUvibjcMGJ3MJ",
  "key15": "4sdgZwjzpeLf8dAj8KpVghris9C7MhS13cj6WzUECu6J7Yy8mGgULW42ZEEJadyD14mFfSZqmCWgQFPkKp1TAKXQ",
  "key16": "3dXp5yxmjTTUHq53QnmYoB6FhLE7sbZKQwk2XnChWZ2ztgCupYxgsstdqe8rroXjBckufR3ifz2SS33oayFtt24s",
  "key17": "mPD9a6vfWH2g7KGFyjr2afwNv5377phX5mVMhhJJC7ehw6GJYDySBw3u42Cf4X5Gyzhhkyvb3GZBxjuBSGSUVru",
  "key18": "4QeJLG8Q7DmBfCU4G9nmVXrsv3KsjtTFFERmWTMABSB4hiFFPV1JN9QbBGNKRy4iEhjirm1eCXYLX57GKxVknkYE",
  "key19": "5iGjQvMcBEa2MGwMvPNEXA3DAVzHvJoEcWW6qoLLKJwAJGoSPymoDrnVmC6QNrXSDDFWBprVKe1QdY84nYhFka8Q",
  "key20": "22PyNpWzNsGfvh4n2boahEqnT4dRSLALfeVp17eyGCm9AB7RAXXBzMZp4ncLDDDPa1XFXk8kts9WW5LXHDsxYW2K",
  "key21": "JBdSg9SwDaDJoP2VxkJyohjwXGsSGJdHTBM14ndDHudSCE5QutXugrMCSapAJS6KUjrwYjco2r9ufEVTaLozzti",
  "key22": "GKMC3zBBiuDfgvD18mJ5NcwJqjArd8S2pqiFEfYiemkEXYKJtrVPdCMUepJWJGm5m5sjQiaGgH7DktPTbTahZr7",
  "key23": "DrjEPqSNKtD11FqbQXXGQmcptoi1Ldgm4cy6EgHoeCLyGNi8KhMAYyid22ptaoUdjRGFqdK8JRjoCRYPot58fYA",
  "key24": "3aaGSTwg7CNaknEmPxVSNuissBbrenZDrZmX1cKdEMputpKW6zCHU3G1Ehw8TDe54tLTUfjDinHMS5qPjRbaqGr3",
  "key25": "2A9bf489yw7MbHCNoX6bFs1eE9tohg8YFiTnqSQK7uHZZAvwFAdzYtz3aNyBorEACENJtRBDUQ992rNLc1LpstP5",
  "key26": "4RMS6wV8K915xZqXJtPiVZBVWpmGmBfM1ScRuKRoMFeBcBTjjUAEK69CdpMAn3U7RffYMx4VRhvcbTCfJrJUp2Cr",
  "key27": "3VfGzu8rTHkzGWHWEEktspRkE2FsqfDBq8c49uEp8RWxpSksNXDqKiR2skiY9rJABX6y2b36QK3Bxg9JvnRLNkWv",
  "key28": "28uduxG6NB9hUcTLaEn1jRz2HuegWkHyVggh4etri3d3ebHPmQHKmxSStyy7NPHNLz5cKXDALbzg1SQyFqBh14qB"
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
