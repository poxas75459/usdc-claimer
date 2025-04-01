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
    "39ndZ5Gnb7WusqE9Z5m4XJaHjrwiTpdR8FmhARqRiMnnRVA2Y8Y2cUXrQ4bij14zu6L6aCEMQt85veXyrSWn9kFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKAKGzCH38N6TQqrXX11ygxDJDTnBqnv5cdrY8nEjrrc1hFv3BdQoos1oHYNk2yitpahpvK9Y73WbZ2GgaRFBBh",
  "key1": "4iEyACP5d2yMfHRLgRsrqx4qQZa2Rqm8hnkdJX9Hc8oKHkTDw8dv8NYnyfdGvwGJmMwznKmEe5vt17mCqrB22xNc",
  "key2": "Ca98Hk6KeSaLAV6sEHMukAdPXjmLwPWqaxi5SU93ri8m6yEnRA1rDF3MFHTwG2BBkGJqNdHG3VFoZkkybqS6dMY",
  "key3": "3x6u8aubek3wZ1PXYnBNKaDKmC1S7p1sRtcFM8oKmWr3VJC9Hb7RLt3HRoichAdmnzp4riUKLDiHzGK4m15pRAG7",
  "key4": "3C1LsQQkvUKSheiEv8DiofCYbDu8afkJi9XPQgu1Vcm6BwiHCR1gYybBSnXdfGxXNKbev49WrjP6iJSCrX4G94mp",
  "key5": "4YSNwS8n9HrRhcuWGpFu8bwiSwYnbBVpWwiRqNzRMe8VXrRqyXVB6h4raE8xqjE6opjvWfwqFKy8zNtJ1FaQcAQm",
  "key6": "5uVL4YdqqsF7NZeYXYrFsBCV5ArKAbG7BozmpcebZcLL5U8mD8L46NiT1NdUng2uavmmzcst62WVaWzYwF3QTuE1",
  "key7": "e6PZfYFY7a5s8FSNRSaiTfhqcPMaVJUu2Rv49S548Ngwq7kDTDzJmy15PTiwLFDCEw2cMni4cf9rYMr2iPn2Ve4",
  "key8": "51sNypEvXicGxhatGY2soA714iYbt3cUSQNscwDNEXsENwtzsDfgQ8VeTWMcfS9RV5bg2csUzxud5JzkUv1nvgqW",
  "key9": "5dQZpgBRbwqvaistp1EKCNXsMGko6zBAGBjBA84YNeKqYi2qAmwTzUT25pexQvP2inHDRgzNfamSgZYH7TtNaRQk",
  "key10": "iUxP8NTGhEdn28act6twaCrC5Dyw5QKVskLK2tNmMp8E1FpNzLEEXaPVHsrA9G747mxtMrJKTM3UVnmkcriiYj2",
  "key11": "5w2a7ziiCMxt2FX4JCyes1f1WUTYi4qzwcD76VJWaymwbNHGTwKQsivGvkMpHW9mJyg9RVrCrKehKqVaMo5uNqtP",
  "key12": "CU35h3Lomomo53ejNaVy8PW9ru5aJXvDXETT4Vu3rk7baSq5whVa2gbMNTo3HpxdmxLt9fCgnx5eM2TN2QPh93D",
  "key13": "EMe6GTXzA8jW53cQVi9J2cijrBH3ammA9zDSY3DJYJgbuEVuwpv49Y6kknUFcJ8zN3EmECkAGfrBQrzUnMV68wm",
  "key14": "5EWn2hn5x2ynLUFbkv5Pwm2ezzKGufyG6VXr9QGCoRVPbS1TNGHmATUcwmsZcyPqT8qGkoaV52iPPpdEdtczeis1",
  "key15": "26WdgBavt57t7JNfcCuXrN9fFnF3SBJA1NkmwmhtwgobXzLYLt9JdEwMm8kYTp8UmGmMQyxY4j6pnunS5bVMX9Wc",
  "key16": "37Sjp8moSotgZpNswF51NQ2GDqyFQL6wsYhBCnzq8emaNXL4YC5iiw15rpBdtBFMGLczqkadVm6wbVsATZNHQY1E",
  "key17": "4XWS74hvZmw89xTPczuyiiLuHdEdxu7h6cZFcusfNgeUnz9HY5TEE14eCUYc8wKcYEYyEwGXDDkgEqNsVGkgPbyt",
  "key18": "5TqdR8GAr8QgpBPranUuthq6SUdsqeapnwWew5fU2fABit37bjEZBBm56vBp4HScERXg6PAzkLvPsVwboBNEu76y",
  "key19": "2c4omowHzS2K1LCALFGKSwc9KGT7Xra5FhWpgTJJaSK4MTESN5DuKeMxD76bKkC3BgYKWsm7kRSNJfvQkPVUGD31",
  "key20": "32arLScZdHRdxio71agesPrD6M5DnPu6yzzWVqi8aqgDT9E32Hpb6rvkGbQC2ntfR2RCBDvakqYakPYyqTLPJuDp",
  "key21": "3yBqvsGziDTdSeWqRueSiuxASf3HF1riDA3ppPE6MJDvrhyXDNtoitUGKdSrP7pWqj9ao1w9XkvbCzkznbqBNh8y",
  "key22": "53E7VRpq3GPt6Rt1paZ1ZVMi9UZps1efUfHgX4PeKM4g6uZbNsbRUJJ5nAhU2UMefkNovXwdPR1f25hXenc3dKww",
  "key23": "QC9MyYkApNK32ZMGEv4ExM1mMqdr3NeFvfzHAQeLq4WmuZsiPdW6x7CiM6Q1etvhNHw7kW6Aj1AFVdaHFr9WMnF",
  "key24": "dirdjYEVjoMvRTPSXqvpTTj1PvoPiCEwCrNbyCQsBHufXGRXUPCGnNcMkij24ne5CUFq875sUicAV64jLXgafE8",
  "key25": "3cqWGywcTDeDKo1RNoeNXxZRMwiX8LSR44gXSQGZ5QXDHeNjMcD1wsPE5MhTVERNS53b1vhrXeyAXcPxCRDLMhwt",
  "key26": "5zczRmwFy2tFsVDz2WFYdnH1eNKP4gRiJ4AccJsevHXj2VZPrdxsm915FpQqcA4fH1r74W2sDnKjJ9eCvqtLy43Z",
  "key27": "216PdDkXaMeeh9Jxf3gdcAEUA47vAniqHVPEBpGZ5GHRxPcDQdYVGVcK8UUh4EfJocXpfDry7sTa6BncVhwGCSoX",
  "key28": "2d3WdGpdkFpu4CsLJcY9AKVxarHAPab8q5vTbWjoT4ZgRhJfQyzRhv6XcFWGbA33njqjCTKQo182hzpa5Ui1TXQ2",
  "key29": "3eBeNNJwBMGbs7PSeYFDrvAGbjG4cYmA8T4GW9eg1mxvmxFdfZoisJGdsM2nbzhAzpkhwkGmLe661jiDGzJYancy",
  "key30": "2BwUHuAW3QmDL5n7RGn99hvpCoG3uMf1Dnf78PBnDZJ3ERk8x7ZpAuSBsAEuvPBaztWA6bJ48E5VvcczUYEoJ3VY",
  "key31": "2YfBJr9hbW6gvJBRbdSzKdcSJYy6bDcLtAHqG5bEeRyettnT3rRwvtkibA6mXjadMiRkgQWdLhaLc9vvTDpmxfBL",
  "key32": "2vfPK5DPmGaH3on4yAW2hrAT88PJ1dsampBEJcuAnVPdkXvs45Msx1EbmsjRsPLsmw8tJRQbBBdbe4cCwHYBQo9",
  "key33": "3DiS1me7iM7X7AgSQM7EZY2kxTchNr4m5LYPujKw3r2N7QmyEXhKeLKkRpdQNuufbdgKUApP6zWkcohxxaRNFSjp"
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
