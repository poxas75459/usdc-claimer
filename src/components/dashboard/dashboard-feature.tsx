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
    "2Sw7he7StLh9xF4Hx2tE7qzsivSKWBka7jCQBEaKQApA2n67rgkEo2SeYEtiy3c7wuMRr8ZGycqBcYnD42zNGKWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9u8jN4XTdfpZY4kE3bG9UnyQhG23HnEZHzSk3VfS2zJ3pS6ogVMQojp2N5umqTPmRkmWxPC9PpNLZMZyUsosaU",
  "key1": "2CkyUphunqcLt3d5fhwkqwbHtLuL4NY7YnfpYdB6LzNkFnxsgu2yjnota1FgzoidQbZfFDDZRu2b99wBD66c3Zpc",
  "key2": "3qawwm6Do1s1FxiyfDKtXnEZr7cEDcShLDFei59NUcPJyK1LYroukoeq9Pdm16hKqXwiCSF2vMiGZ4GVhXMbbCV6",
  "key3": "4kRLYm8ieq4wPVgLcubUXUUwezwSW8eyPyqUpgvRw6a8RFrfeQce9DMwtGmtkd8GjQsamHtbFLdwCKmeL8c2tB2m",
  "key4": "2WH1dFaS4iA6HRExRK4jCqU555gprgmushCBMsexxXqMwCj3gFV89xPNVeX9ysEHDbBZeeofUYAmQjPkmNvsdYCP",
  "key5": "43jNw5X3WojaiHPeqxzW7d2MuG8Rvqh7bZaNz9L2rM3k4gc6Wuw92JaNCy8haUaTrD4M1nbKZbJEgB9xZfbYgAbG",
  "key6": "3qJJ8PKnYLvJbRrjiqtatZjLQWck34p112HDBiM9YXnYYS6NCKkP8kpiUz3Hq1R4vhMNeP15fJCD6H9pCCd1JuoZ",
  "key7": "3sB32F1mmU6yvUgsH3Un6sXKPSmevDWdW4dKocJxpyx9kgQzN4m3uBDEj5mN1DYezSkSRsDotKy5NA1Ukc1hHVA8",
  "key8": "4Et9MDhXZTHs9jPGsuyFtTZBaWKFvV2xcNBiEbEAeVo1GnxKyFG4GRcFceaRpDBySxveFha2XQuyMV8szsyJYBup",
  "key9": "2vo486TUaKUoYzD7acuAMEJnpkNQJ8YUoykgXfhKxhLso1MvCyZijU79vUHSFodGzM7AZ3j2r6M1x4C2HbCT8Dni",
  "key10": "811r87B9vaCj4B8Ez5WXdbfUSDKjmXASGLLsXpp4GQoE4a3zUCb156qbHc69vo3FDt9J2Te2L8s6AGdQUCi8JjT",
  "key11": "3pAZp4RfyJG1Eyj3nXVcJ1uvnEBASXg5f2KkxrR2qsKFGP9b1RfZQTuyYHczbCwmwLMLinik5MxTYkkvdtmtQu1L",
  "key12": "tfFXtpAwYcqHai3vCUrK2GcWFjK8U2T2DiViUzCJeR3YkBEpTctbFbdxUiup15eZAVPJuw66a3yPtZxVEUK3guz",
  "key13": "46wpWTM6tLemcRx613j9R5cZ3PAt1jBin4NtFGxrpm2Y1axULv2qwC79xZhXdejHUbKYtVd4L8g2KwHxr3xrt5b3",
  "key14": "4dauM8L3TyaBT9xBoCkq7Q6s2z3j8Wm4JRG5xHwzS6JkJ9xwEc2FxBdxoTyMMPJfN4CDzcmRZd9JPWVu9AKc6994",
  "key15": "4ngLBZ2DqYYoBnhtuwSNUJp8MyZA8qFtyVRtwYD7aUmHnjaw6q8margC8xbKiGW8ofZAMuBi3QhUetSLzemFsWGu",
  "key16": "2X7CijBJBWWk5NMrG9fwXSKLb2bTwvfKDYwvWiTq3CDbCzrUKaHsCpPkK84u9EUzWccgSJ75sySNv9ACAvF8Ax3V",
  "key17": "4rCJWakNVTVnBZJXmPv28M8pQHtfo9sKPahA8eksrZjVh3g7Ma9pbR5unsAdNbXgyi2zVy9qE75gfQb5QjYJSwe",
  "key18": "2fT76bTbwUQdLYXR823Su8QuPenop6sideALj8Qw1qfCtJn5CxQYsBTAdU3EHyYFaoG6qWrvRsDJ5PnhRax22qdD",
  "key19": "5sgT121vwXZeRvJ5mMGP8vZCc9nt1ZfsjNCPpxPXDMqPux54TyzzCorjejj7ybDfBakZH49UHaX1Qr9jG7wj3ExW",
  "key20": "65MBoQaakefkGQEPiJA5iTwCWF3u3EQwYsM7shAPP7zRxXwdUhqeYz97GCDWkppWGS9MyzyvbW12uJopv2ixeTPD",
  "key21": "4pTmakDQwJez3R58FZq9VgLKHYgyGH6Xqvrwx6LdvokPX1ZSYmkuGJdeUAzmy6j6wW4EFsaEK9qe77DpSpcebi14",
  "key22": "4keUcPYfozYtAuY6u3575MmoujpVWyCAqomDnj6vTuyamUdTXvZRA3BA86QSEquV9acRERjjnwHHXjMFZMidr1DP",
  "key23": "5oq6VLniNMkWgTXWxqDURNjZgXVczyVfdFpdPJhc2CUUSEPvbh1gxZg8DypSmmB8veXWXNF6wuxTWRPiWm67fLkx",
  "key24": "VwmwHtPVKZJeEoL3pyS7npXjVLY72bG1RgKX1vg8qLRNWUpBzQWzEhnrzhpb9WgaZPFXRwBikWAfTVDRjPEqtzm",
  "key25": "67AMbB58rp3HSridtvAq9wkF2FnoFbA91AVY28Mvn4uqQCq7gnwXuMduDok3ARBfj5bMB9qfJKpQpaonVAKZjKEa",
  "key26": "532MuqmLDP7u7okAg7bja8A11yAED1xQpAbLbKasFDE7MdPbh9hq77B8suuNWP8UJ4Y5cvLGRgyuwWAWeircPvFB",
  "key27": "21Bc49XNwvP7Rj9YxYhCoRvrDKtXqGFPm7CZ7jKBG6iD5Nm1UpiS4iHDugsXZVAtrbjrdjbzVLfX5y2FBucQccZN",
  "key28": "3NBBUXAtTJqStPdFP7sMmJvRkZKVMMxBxvUH8qZ1ZKws8zSYstb4V6VKBQVmGpGHrDqcQUorQBeqkyNassrcTwjQ",
  "key29": "CfFTfbi8RppKoG8EGPG3kSguLAXrJ4grG1XBtvVnPRJfVLKwocWNtmMcWfa5yDbtfXy37AMUH5rgz9J2g1tRihQ",
  "key30": "pJxsxmWomLWkgU1D3b8X29FEw41Up6kWviu1uzKMkbWjr4yCsbjPEFY2Ek9ZQ2WWxEUaJk66tbiW2dnHhVJUKHb",
  "key31": "5xP1D3TYA73PGTsLAjybaq3jGyJnXUB8axmtNGZ89rEkyPPhVCJ1ZsponNwAfF9RL6vckh8cLnpHWjxRodm3fboM",
  "key32": "RBHRhNMuWHLmRTBmrAEkg8k2nkQbHxM5HpGi3UncskH18p5b2ryt3tt9jZuQs8ygkDyXqvQpq3jMP68hK8XMMzc",
  "key33": "4wduWUtigvZNuHcPYgNYZEGgNdeRWNLXxsLfSNmVaSWKn9YRhptwQnpAwkCo2ZmMoUtQv7nSzvjD8GJLecEX7e1E",
  "key34": "359hyjNewHw6veUjsydZ4AGuG8sKf4DVpb616iLgivCDGsXktWkVpY9qSY9pG8LGVX811W9daoQYnGHAr4pVykh7",
  "key35": "2QLbHtRYAbL7F7j4DqhxcWFTkWNrP1Gcwbk2F57qqMDUFzDXRWNhQGFiPovJ69eEvhC6gwkV397TqQGGheuZvQdF",
  "key36": "2qdgT6sYArm8gix6KzSQXcDh2vL9DPf7nqVdCE8wbpXFSFQdbSLXNt9ifWnsfJyucB9fRHTZ8QPuYuyFiaM1T3md",
  "key37": "2P8g5MK8MRDv35Z7P88DdpVbBuTVAhXvutaQMwTF5phTmj3RcNvLZkmbGnUoXSLNQ3RXQDUzdytXC1CJMf3QDf4R",
  "key38": "eXo1uGuiApQsBqLhYWV5FdwJz5oPvE8X4smCzU25fcgdfwYb5xuLEZ8M8pHMEnvkf7kYNS9YriaQhpuwLTu8nBg",
  "key39": "2UaG4DLSHme9eKTjXGtVST9XK5nPJgmHfBg8yQD4ZZCQefgnhGtK1rrfABoQkZJtYnnDP599uWK5SeRTReSYHwBA",
  "key40": "2pjAg78on7bBvxRGqypjkY4GxqAjorhALoyefWyUVtbVpUjEhdQRUBgdPP1HtU2GAm3z3o13HE2DHvzKqfSzADUc",
  "key41": "4DVNWZUux36Tpp1Cr2nn3HEehG675m1Qt727iUepsEDX8pVBAGJNzA94J2TZG1EFvJWMRubEHYcFehWWmwxhuX2C"
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
