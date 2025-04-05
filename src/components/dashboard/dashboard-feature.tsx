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
    "5hBuYq2mdj95AhU7wgY84EysNNxr61fA5E7yDMWXt2dw5YYjDNwxegU49dhQKTiMxM513RETiSU5v8Lj6ARUxzCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57aj1kCdcRJejTeNH4XCa7vmRQgv3kuKaSA9KJzdXP5dCtW18gKBTBAyNrEiBj8AeEFVQ4oRrikE2pA5xbm9kDAc",
  "key1": "q81QvUwKyySKQZ2mP2fh81zkPwbTgyhoQLvBQeXNom7kiT7pQf5eXPhFLNRBz8q2ecjrS98YKXKZtJvKZAVr2Tt",
  "key2": "2sWDUNP1u4MxuHxH7i71yaijkd2Smpz3nvx6jKXs65LgeHFmqqhXdq2QNKBrL2bVy35mSijC5JjMMmDDXBjq5njQ",
  "key3": "524Zs38uisBJHVKnCSy6o3BPSapZYyLG9t7AN94zi2wiEi3bAtM24sSNZ432VonQveR7ULkYPeiJ5mqvaGUKT395",
  "key4": "5VyUQTB2Vyrkjvsod33jJgYBTFq1JGHT7iGGyNvwPfu7vz5jztGwRCCE3ZKMeoAvggtW1EMZgtUXRon2ENeaPTzh",
  "key5": "2awpm6rWE8nzVhtrqPHDjD4n59Vdrp9463v2VakGLSNqZzUiujFBPoYqbyo4XZQaGCupGVpuGEh1YPPWviA9rPSH",
  "key6": "41tDMEcteJiKo3DKnXGJYjNctjS8skXFpawBmYWwjsPQF3HvhJrT7DsPRdDTQk2dYSayYZEn1f6WfYSRFYUKMJEy",
  "key7": "2J2je2YbQHvFHhqzr9UzEo9jVhX218HiSTrnHax65wdg3eD4pMhPcq6RjVtjU8rrGQ8gLLxAgaK1avUa1sRxxz49",
  "key8": "4L1y19aN63VnetBGduMqWJrgy9aHwn9nz9pFmgFkLYNbPNZ19c4G3xYXA4tXoTaAHoMyPBFpPJX7aStj5YJNJWXH",
  "key9": "4Rfj9T7r8kFZDjDTT1pS1Pmeep7tjWZQSiYtagyccEDPTaQ1HeGQwrirf9eKP9iNoS2DuCM2LPaAMpcmDZ42HAma",
  "key10": "5JoAUnNikx2DNUpwYfPnLx2x8H6z11xAKsGBkmLo7QwFxBsYWfWN6A9aP1zLUqsV2oS9g7KUX5WhTwWwpJg7Rm3t",
  "key11": "KK2MuzTVouy6PFPNTPJmjx7GZhJjxPbsdY91qKR6u198mWLKEq8o2upadUaKr4j54E2JgJbnVsQf69aqUNzhzUM",
  "key12": "3W1rNWxVsMngwifSGDVrRvkTAVwWGijBbt8E6J5aGPKSFxeHCxzqMKPCmt2YgpAm28j8PMPN7Ths5RA8nZRyPJFt",
  "key13": "2vU8XF8NzVhvei3D1nh3tBgKiMmP2w7zf51VPEThHoYTQaPLR1K6qm2YM2w9EyYJZ11LecSVJT7uV1GfcxjKDjcX",
  "key14": "2MePg6pNi8UsFn8MVhGvCFM1EpVnxyUtvHH9gvr6iavrgVWcS1TdYWdTSwxxf4G9wGxkZGxmVr7XScXzqNWsYYzs",
  "key15": "3MupSSVzEm7LmyvqsVmEDnhGJcTXFmA1g1o8j714AyCeujRa1FkpZEW3shxsn9SaUY4qDvxS9NqZvGTfop8SU3yq",
  "key16": "5Xhbi97p3maemsYNB8Ai8yT9dG4vmn2Tp9NmBWzzUZ2Na6DQP2FkuRUHhpgdKATDhaerhSLkCSnQeHqyCx7sSc5q",
  "key17": "2oUkptCGz42fApnWQkCaN9dgfsj3hLT8a2fXx8ggFGdXhPiG3eXRF4RBDxJeE5suCgwmZmiWcPzZFG79BD3KwgEN",
  "key18": "2eyrqdGdRfcFna14mo51b9tEdTHQee5soRKqCGti92T4RzGXxscF7xXZYpm6HLr8xNhwJsMnMakNAjDwttarSkWo",
  "key19": "4skvigpRcb5yZQnfUiddGL6EfobSocStZUdz8k9cAjaXTQJ16KMrj8stcK35NifytwSaD4bbPKAsRujwuyQMc45w",
  "key20": "Qe2iDpbAWoBENissN6c6Pu8dLDcG9ttJsf9dtxhckcTZ5bf4CyGNz4KQPjp1rUjmbLTpGxVTFsGwmUFPHBmBGu3",
  "key21": "3Hc1NqvYwCdvKSekjopBdWLW1Th725y8kf5HxHPH4bkNXzqPCaCy4ioxMrLj2T3ABZkgeGxeJEzvKQUf9R8wDACs",
  "key22": "42qAcceShZb4wa8PA46NbbvhMkh5s6iCoDzuMYG8NVFfCcF9ddgiFoLiL8zGdrbvC8oTNEBspPowXu9FzshDjg8c",
  "key23": "3aLCHGEpSgB6y5F6xGwfvZoisWWFZLHLh8AtDdGrzgD6zet2sguQFk6Y6eusryXvM4Wx4nbMpMMV7ENZJqsrtjC",
  "key24": "4H8Z1ywsYDzub2MteRh7WM268V24iZXoPnx16LL2NvMHUXbhjB9TTNdbyypBX6ZgdzpjvuUc9cCVwgbGHzKuokRE",
  "key25": "5qPUFDcyVtQA4imcTE5138KNmmv3yRENNNti36G127ykqS9j7xUBxp3Qe9R7AfTgMA3VWjo4oJmnN2ZwbNPmcdV4",
  "key26": "2LVr71smEzDd9G9ViUihPjmPcAL2YdKdxHRpWHkG9MSHz4HWLwmE44VAS2AP1gMwdjbZGMm5pwMaW1MCGGdKNE64",
  "key27": "3BXbfkVrzfsJh4kEt3n1vMaFrixLmzaH5w6WNnnbHfCXWbes4EHN4EFD7fijR66PwmcrcobEE3Md4zBz9pqQSziZ",
  "key28": "5kQbkfhmfVRQbFPKZE4CVAzCRXxJfAaUZCt5eFeoUfrFQJCozCihC3jGACCMwyPyWS1yG3Xy1mCXYMc2J57WaD4i",
  "key29": "4W8BtHR2GWEky8aHU38zvkLb9bLSMsopycSMo5ttb33e1sHMdcmD3udPi1GwhXUxzwMXZZK7YzvSJLVjQ9koA2uk",
  "key30": "5cR7Lx73aS1iFzoF8HLkxDeerYHSku1SmjzM7qJFLpYdveMq57TRVJoCoRCDvR5DNoA7eB5XdjmmWsemvmcWyjMN",
  "key31": "431RSimKKUtADAiLcuwxL1Az8LLFS5rtgcpVNfpx36hhrFCK6rxKF3EbMBbYXz937XfBRh7T7ngAd3ECvKZib6jU",
  "key32": "2qgSCsSUxaHvBnj8nhXy7Jrxzov9xB2XakRNNrPCK3SiYr5CQ6Vzzgj9YCmtVkuCvm4dKz4rwUxVhokwVkR2sgCC",
  "key33": "3tcYheYQAco29RWgFV7cRkQ4Ykv6PpY3wTGad3P2huHLCWRFVz7pyMKM8qBfpQmwX6xadzmHNq5scB1TnsARxLSb",
  "key34": "ebLgGUHeC6kf4JkstyF9uvSb4LzuUqtuPM4qTX6bGJMd5ByFddY2LGGfSW2isARESxoqDAd7GmcCNGMhvmnfdZs",
  "key35": "3kHvBCgwX7AwifrfrbhafKBUP3UwGnCjUmax78UVtHUycY5LEAB7MqqbDg9K4KSVyZaANWDdjtzvrnpH1uSp1kcE",
  "key36": "3jtF4ygX5SP7FHV5BtCCpSkbkSH5oZnWc5bT4ZXL2C3GCTqNRNEkeUP7xfy4vtnnmQutnkAHNDvFuedi6WnMSdRG",
  "key37": "29NnaYHxFa6nFhbJZkU65WqNHFSDAnpNpKv17BfdSwjK6jTw2YPUv5xjfkxw5LepjnAtU1zPeJ3wmU1QMWCUMSV5"
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
