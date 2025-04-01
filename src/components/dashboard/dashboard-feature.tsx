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
    "3P7Tmtx3ZJk9Dr9anYXj5moRh328yqVZUsSbyn4MvscdikCGP2gbxAsPUpYKaxUQMb9kg6k2HrBUSCi4QzcyHCvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrPwP22Yp1Z7yByATnBhFf4qEzTUxiG1BEFDaidzvs88cX5TYDpQm48bEFYeTiJiaUhKQQpfE3e2B8eYwkDaY8J",
  "key1": "492Qgq8ryLL9vVdPLDDKWkWrNT7ZpPRFEAHe97sRCFsUTg1vG92tWTjuCpso8sGWo7H4xUbxxyhZaJg9LkGFhWQ",
  "key2": "4ERUyXCfeS2pLZ3PnwsbzBXJcDAvt9eakTMKRmHMz4Qa7ZHwr5cvxPhTsw8HgnJpbZoEosY9Bgiugmp7X68dgzXP",
  "key3": "4BKyQPpP2p1WLj7et4CyxSvc3ehP6dXgYtxcracaAQf92fbTf13e5XRahiyqA1xdEkRBU2ocP4cHupxygJUuXgJw",
  "key4": "2Vx6QZCiK6ViPpnRdAoXZwShEb2j4ChU5nbkvJUYgeg2wa6UUgbqcQN93ekRf8XE4KQYYqpUCcHMmaTcayYab2r2",
  "key5": "4mkFNdkp2Fgc7DQq9796zip9gYoUQ8ZEmt37rG3WB9gKZKj9rg8NguS32fiWvjyXG83SaQm75go7voLS61YbrP38",
  "key6": "64yF2tJQmUwSCSWSsqUagudksCPKmZaNSc6LRQfWcZ8Twsru6AXwdyVCJptphJtMyQdj5mAUR6dbJy5XSvpM6BAS",
  "key7": "56VSQj9mccDJvEyKtrLsNgkaW66vsvHfaD62JjHMbqDPeuEe8cYhed55e8cAopSb23b1uwU6KYEtae8Qajc9ogaA",
  "key8": "63q7MMKmFxRmUDKvSoVK4CnRJb5bVoFPbHGdmmzedCHFCCXzdci2wGUknn4XKHJfeNAXBLWvKH2YEpiCSDrLwWnf",
  "key9": "33sTVdNq1h18wayLDwuHYTRA6gZ6E11mWUT5v8bkBJEc4MrHV1mwYtTFrFtiR1ht71TNSjpcXZcjzL8djLKHxuZD",
  "key10": "2qxUStbtZPE2F5cwfPG7E9akYbhZYSJrr5auUJYKgo3qM5uGDbNYmP6W4cesTJh8ZJDoorvwWo1GtcoqXYgBQ18Z",
  "key11": "GPr6n8vV2Z5je5Qp5YLg7X3o7Y5CjPk4uuaM4WRa8m8jHexQupmg7EitervEZczXw9mjtATBGHAGYhz1AwixMDW",
  "key12": "54nP58Bqkc89TCgeoCDnjKADc7wik1kXN9gsYUPiSScNGLUKU3u2pGptHGfTb3SgMNZTNiCudmfQhWay4ghEECn2",
  "key13": "RDZJUhKggVNzDFjiXovN8DNGyFmQTSyj1buqBi2WuYZf8teVDbi4xWa1y9h9KU5NJSEkPXk38j5cbwatZTroDRv",
  "key14": "5Rs4WSX7eR45VEPHpfd7TEpFbFuNgoYzLhkyFoZEsnmu4GKdWd7dnURz7AjabdnARAAweBw4nd5BwGCagT6batXL",
  "key15": "58Lgoep3cHezcAahQ7wHf8b89vDyLc7DRV9ZTFux2jnoHDvAYi9iVpsCsG1QBcLv4upiJTuB2ft1ZCLfFYk6xYQp",
  "key16": "3Mc5FiX6muDbAnDKepDeYV4zy9oXBUw65epwQfNzYpzyfuU9KQprRTj5Scxi6o1NXK5MtrBGjGRCLyP8kNWhtKUP",
  "key17": "2G51yYYaPJ4KC3DuqWnn78CvBURETz1kMhYvUERi55372WsrtZGwcNr8npS6QTPv7TuJWjNAJicYiX23AbwKmUWj",
  "key18": "3rdg4fUTic7dkqBGG7isQT6knMXgvg5Cr5UM7KCthRNMzTG8KeV3u5bHEm7ZZLQa5SeuXDoPVEEsf7Vv1DaMeSx8",
  "key19": "211kfGMUxcynNFEFesaz6yHfaWdkfAzmLnTxDH5B7mZLg5jUrc4EyGNGP2z9Et8VgSypHw2s9JcuxsfLkVX6UELN",
  "key20": "5szJa9HdmBDQqj8XEB5GNTjdRvzy3b1gHagAzVpT6UcvjMEUBTFG92rsA72Fh8SdfctCz5ubggbL8kdaB3w1A4DL",
  "key21": "32vDFVSreejYW7wvdcgyhCduPSZJBHoL27qxXiG7kXVv8PvK5eEMafMMbCfSgqTDcF6MESkVLs1BpeGktFQsXT73",
  "key22": "5tJJuu3CTvN1TdCewvmXvmd2Zd15mfUdsoGAVPxpezkpN8mqkBVBfnLxXvmNpyGDjE8U5DAXRbbrZeB1gNLV8pH3",
  "key23": "4Fyjv4oi8AfJPzYYLxdG1ReMJaBZ1STgmDmJmNUmd3cFw3nRSdb5AwY7cfKdVgPkvErVcF8vvEiSWdBTa2CpouCh",
  "key24": "2hyo3NakrhpQwbrsJapB9RYCFjyh86DjmWgAMoQWjNjtxyoFx917g9AgtPAQcKBsJeF5M5MhugCxc98WNChNgiEo",
  "key25": "4QmEYosQozmxEBQ1WnY9hBpvWFvtcXAXRjB4PNk9fP4kTfaGfM9ujz3XWSVjdoskgAXUQLSjLv74Ebzo4FJi9uFJ",
  "key26": "24hQ5nkyzUuqApUrbJw7tP3bN6JBifLwFXn526zysjj3NKPj18sbuBZnUmf5GXC2WGSeAqxWqgV5PSiDg4veX44D",
  "key27": "4sK6cxNzn2ayF4Q5vdvgUfwSee6i9hu9iwB2MSEhM3jXzKMxzPjnyD25eSUKWS5ZaPMEec3aYiYsQQ59Hf7ZXu31"
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
