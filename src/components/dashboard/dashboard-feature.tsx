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
    "3TmGDWhchVJXLT5iNq5uTp18LiPTnc1aCuABAutp3XHYqfLphX8nEpwNPiBZDs1uQ8uGadn3X85cdNyuEuoxzMn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnGm9RbarLuM4X3XZgkyYaEAvWL5Lx9LUpqcUXZff9S7TRE8LhPZ3RGtpgNSHiic4oGa6s1cMSo5csY3RvAGK88",
  "key1": "5VZSjW69mJeiCgYXtZ9FonkTwf6f5mN7TsCm6EQ6TxUoPP2jFShiJBfMQGz2sjn97DP4Xx8qy4o6yYAQ4SR3DhBG",
  "key2": "ds3X53eutcn8oVByJooWx2S5Yh4uU5KZUNcqsPv2rSF8gHbxXLDCFxtxTEjMVhbJrMp6jRH176AJYEGYn5SVLzP",
  "key3": "2kgKcTtQSnGa9v5nGUCzTUGvatsPL3oT6mn5c192ZTCZvveoPbTFbjAaSAeWVP1djt2eGQNtCHBSe2aoQY3iQ74g",
  "key4": "3obtiKHWosL5BrEBhMEgXp49WcSPJM83o6iisq6DJYjHG7VRkxrkqnrEzVsdEoABGhNxTjMy4cs3GcEUgLy1uW5s",
  "key5": "2AiLMnWz6pyxXj3ZQf5n8oMChCFpGZ5RXJU3VoKaopSFaHszfjUDmE5mkwtY21nkRcKpFEQGDg69hU91kBs9p2ZW",
  "key6": "jSCtMunvcdt5nVKsKCRWUSA6Nxfqtu2QHh6Jor1hEK9rXXGz7fG3obwzzTGiCDD1yuKGoPyeHxBZhNDiQJFTULF",
  "key7": "3gNuRYsubtygaZ7m7Ur9uzvos1wRUT5mdrq5LwGNu3xo4f59Mph8G6GGsTaVD1WjdLBraxhP8Pm5agjtrVNJEe2n",
  "key8": "3mSVcLb3suirfpffMpiqonMqhPyrAmwButL1AmLh3q72bZmoyLdKiNpYLpU82ZD6GUvjN1egfxDL18Ytmr3dC4V3",
  "key9": "5oUnoxPgvSPCy47e2fGY8WQhACB21AJRw3SAfsSgeZTxvZxbNsEmpKysj7c2WXEMrskzKveAFmSrDYxnsyqrq2NK",
  "key10": "3Yw24e2WseJidLSZuyWxNUzRVLqv67KtRQxsuVrdNAJGHkWEd2A8fVJ5FUvP98UjjVndv2E1y3Fha8RT5jsZ5N3h",
  "key11": "5ifeRF1Jq5NiGsMnf3NbgbjgeXy4HnZ8CCV8dzbgnZVLaaAeCi5tm1HnG5VNBCHiAfCkCr5NhfX5q4WUqu8uL6Vq",
  "key12": "geESqv4HUDx5Boxd9p7TjanKsKJ86CqDghgRijvYeSiVC539BPaXsF3vP5dAvGEGrqP7iqyTwjDj11h35yq4LES",
  "key13": "4Xp9r7efPCfuXyZWtgSzvwN5qoFMndwCyEgV7TxN2NSxGhSHLABasD3dCQM8pcYtpoJenzy36ZqJ3AbygJkZCFuB",
  "key14": "3cypsq3WA6MZjUyiuDrRGvb5spcjouqFiJohbDdg7UPYFewLJcHZyTwvmvyo7MC1wAM8Ln4oukMF5bBgQTCJzhPi",
  "key15": "53R7L2SqtidVBE4CTmWTek8FEGtVKQGNweKxcBWo2HjkxJkUmw3uB8pQbKVksuH7wizwac8V136KXW5EzzMspQLm",
  "key16": "5uSAMbPVvf1MCBJV2CVHVVDTAwsSvwMvkmM2nEyahhkXSjnEaX8grrJ7gwrYcYa4oWCMf7bBZi1XYx2N9bhm3tos",
  "key17": "4xuA32c1ekSLedggByuj2Z4JGmUUn341U9oh88x3eK2uCHbKfo3tGXRP5LNphRoUUwZg8upbQtNntsHk6Rck7J3A",
  "key18": "2F65Rh7cVtnyuiXDeErutgXEB5TwkSbBSQz3zVsjjtf3YY7WhjJ3dA7FWW6R18bYrsDxCoMT7XBz9refxzF5Cm5g",
  "key19": "f6oLbNns4iyD4c1vjUNr5M3us7BQaX8N8zMG5qEbq7rXyz9oS21fMaSXx1QNU1hx2iEn6aV3jRGriv2DEVk9wTd",
  "key20": "3XoppcBBVjWHnXmpcJ6pAjPmdm2iC7NWc1VR3PCn9a9xJTqdWN2pEUsYmQib5exgS5wAyxS4ECvabTKxP8VPNpeG",
  "key21": "2M8dHwMHfZRq6mBG94P3btthN5EVFGpyCMoAzvnXVevdpxjRTF7umjvL1fRxwRiCunGJH3C3HfEzkDgtE5Uu7LGN",
  "key22": "3QVF3xwHM9YhsXeaGcXNcLoU16MRYg4XJtdRNZZbHZzQbdr3mTGZJkKR5p63njyfA3qkF1k5LU1GN4uabKdQsKb3",
  "key23": "3eP6bEq39GSDBNDhqAfVUp8hWkBznRVASDf5RnzsFg7xxWPd7tMqAEGwJiMvNNv92cbUffg4NAz4hRUzvCuUTgNX",
  "key24": "62aD6q8gKxx2qFy8QZoCQnkWDUi3MdiWkNXLtwpajUqrvmk7tfykAiDgEx4Z1WzdsFKtjC5hEZhBnQ1puaThdxZ7",
  "key25": "4QD8aieRe1mmEFUs9p83XmukEvm6BPUfGmshbgoW5iTLutbGRn4CJN9deBvk3QEFziA6a8gj4KzZwkgE5SBW1Yxd",
  "key26": "3fJb82V9iNmvz6oW3co6BT1dzVpEFpGXpYDYZqmth3c7TEojBkRMZZewJPvJknFSzfCpixwBcDHeN2AAMzmecZmK",
  "key27": "2rwAL2fiRzfGWM5U7wcMw3wUrVS8XctWhZhojBnhcsv9ZyHXhd9aNpx9sRb2y6U79oZK6zLtycRRwu2ZSD45odnf",
  "key28": "5cEEN7bRddA4URzyagjUn5bXG2bVtwpKntQG8ZHAwaSzC5UpYwLCzA3A4M5MUJT4MGgmRoKphDMB8UuqDB9zti4t",
  "key29": "22p7VpHvKLV6k2EekwWhRLCmexvnQoqYbxzvmZaHiU2wHyNidqW8dE7e6UZkASuwFJUsvcit8tDzFqYSj3aE324g",
  "key30": "437pUPvKVuR6j5izLpT2rCafhXCM98E1WhNUJGHsDaxbUXVcVEjMLPtnedY9fQeux21JPysLpDTH9QBtcdnGwDUj",
  "key31": "3nknuDs58szLxyN2HorgA88brVgsd9fXywfh5SJW2YbyDgBwd2gkf72ptiUYs7VahANvkk4SSABcDiPKcGvQGwkY",
  "key32": "2ym5jdQ1oE7buKCyQPM53K3tgtFEL9d8V494jGFm3htgnEacDAbjuMM8HkeAHm5ngYcnFibP1jAC9FzBCqB4RkWe",
  "key33": "2WAZw6AmxPzRd6XRVW92C7JvKuChfvDMpAvBtR3F8osy2wJSenDTkX7WWFyqZ5LqVT7DxChZeT9WwsBxkwdyrW4b",
  "key34": "H8s499QNuVgzZZXUQn2mX3Y1C5NefNgApB5BPMSg8S5g2XGaP7XobuNpPY3xNZrSQ1xAAkFAdgP12qWcDQZkN7T",
  "key35": "zYFYfEHqX5XpRQDpccJ59XatvSngm5Qq9dUcicorE3y7RCYkH3qKokv6JDu1nVohP8HWJQwhQkrhodWJMC6Hgqr"
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
