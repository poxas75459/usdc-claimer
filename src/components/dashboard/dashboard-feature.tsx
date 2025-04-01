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
    "5LXXwshtLZ3azd2WKzPT6xUk49mRkXMkXTvBKjN5RiQSQRSf9NDfovJ9nJEHDEZr4RdTLmqhDV5SHJSTpiJbeTpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whhNHB5ZWcQb3b1qYGGmQRDHwKkWULtsjfggfdL2hcqhMANFYESAp3xNfb4vnjJPP5aoFNBdVr9p2WH5LrEvt1B",
  "key1": "62Sxki1EY9qSrvBJVagzyTjgtULdrgN7R6XkVpbSVBB7P69H2FjbGLwhovr1q6AcdKdmrDy4TpS3gxwVw3z2BRRG",
  "key2": "2VFr2Y23GUwGaLVVmqqgWDXeTfwQYeaQQcX5Msn8EfaR2j5rgc555Ho12bv2c761f3JXPgjamnPcPLzGMsbRM26r",
  "key3": "27RFn3F2mX2YALaK3oKb5LHEVcDMdPzoC3kPZJMH7abLU6bArNLdHNQeSLu7vHCffs2Bwmaq6932mKtnavcUnbEL",
  "key4": "222iKNhsq63LFHrLMAFf9eR2goSoDdqWzu6DRqGtobRvPXs79WbhtueVNWMTA9D9U85Znn26FLAUPMfHpunzmVgo",
  "key5": "4USZrbZPdhkNcVtTwHsXJkYn9yoWF8vkJhzQJBbv4CNUxNWh9X873cCeKvpDyQTppGDJ4HCmChtHCnXJDL29pqZ2",
  "key6": "Hco8jXUnit2DoauVuJ4phcJLsr2rVHzgdZPQ1vHpVUN6Ysz17ndHMuJMGcYYojpaReUH3htMeAYS2tiH1BsXV6k",
  "key7": "EwaZ4qRoKSSTnFVnSouiYPhuYYAdyRZGmXGUEJQnbdqCvPRYjBYKqC3qB7a8ZgJnrbzM9YyBDzPdyxQEYwFodqi",
  "key8": "5EsCH1Sb5XjdALDWTPiZA9NanfB1KHWJFHaCe3BRdRLaMF7FmgxtoeYSMsTPY3VawTpZtaMPbvKnbhc8Jf5A1ey2",
  "key9": "5EJPiWXchLStoLwSWTkmkBU1r7XE1jLSUMtLt9dhWhJ5UHRtu5wLsYtYkQqxBMis9DZLLuiUVSbmR7BDCHzzdijn",
  "key10": "5KMZaZy6ATQTn9KBD4Xc1PJTPbE49awFCheD1rEx468u9LRPxNvDQ1vHZW1azhM5VvivZos1rr5UqvgUyxrtr7NL",
  "key11": "2qX9hjaeHwYnJDhKSqVW9besjFUtFCYB9QD8BY1bTGgJ6D8DiJHrdjVxxDmBMVcR9SaZgdYPFo7f9Bh5hXNKhvU8",
  "key12": "3FhkAByP57DsXYisehthNGgvtxN7Xu1wZy4PXrZWMLPVLg64ruTZQqUNCSaCnXdM5uhVf44QD5ga5rmr85xPmgqA",
  "key13": "8dh1gEg97cRXcgbqc4J75bCrpKssAqNVU9q2zS7suL2HCnHpBTHmuAWYXwNwPQkBjidF4PxSvacqj9nLH7wcRqR",
  "key14": "536sK4whXQApsJ1y9ojYQjxcw9oW7VE9Era7viWtcoizXnLB5nmoDcQJGC9hqXPVMdxCJTuRrke2Yfq4S5cU9Azg",
  "key15": "31jdEs4zXZj5qDQrDKNBbGB6Q5wN6D6pEJuKvzyPRrHvmkUmvVfHf5jUBtYF464KZ4FV3psVh2wZLzuMEKPG8AS5",
  "key16": "56mCAGLJLBj6LuWWB2y8pQghmyVz4S5hf8caiwqDor77NL5KqZHGgp28ZhYEu79fSLjq86SFgGeQonBEUAKwTarN",
  "key17": "5Zf4T1BGex7bBQCgasX32BbJT6GJo6eCi99YaZQ4ZZQitd12c4TUbWuiY7nS3VXR7mn4mXM1cChvVYsiAFX51igw",
  "key18": "4oRCKCo3henfJyRXai2AYPTZK31fb3adTkeXpCGXSSe9UJJqtCe1gCdvZkoEmdhhcx1jTP16D2bA5j7KGM52zTgH",
  "key19": "3kwiQcd2auqBqFVjs1XsRB2GSawC9mA5Wm61rE69PhjCCRa7CF9MUUNBCCv69naRoErxK249dzGyYqC69v8rn7iG",
  "key20": "41r39zFGnqhcmwxGxr4AoCrU97jKG3pN4DXK8DcTXBYGcPJxC5ADd5rpwZJMk4jGVdySqHBfBrHkeCdHZT72gPia",
  "key21": "5bxvgTXEhVbpPP2PaiDm7kTpc9SLsTW6MSb1d7eEaQ48aYtGdQFubugNNxoDFq79V1HrQpPDLrX8Nh2FLQR6DWT1",
  "key22": "5v4MYgfhVn4Nm4TghEyboKYsjcd6VDs3ZfnVDEsxHwVhuzp3BWX32BnDuK9UqyQGXkSFrW1QkygimLJbxRQh6f68",
  "key23": "4WaGSazwBWzogPD8tcAoUNvJqRuyrZKZXiB44qe7oFMGTiMgbBsLH4AZdKDPi4w26B3HEuXALDv4K1AsgLdaMHoe",
  "key24": "4tvJDfygm1kXKh2qrSkm6q99uLpmagy1p1hnniKLd7xFFPdc8XcV6Pw4sBEnZNy5JZ6yprjcFAQswiKdVcNMCwtX",
  "key25": "5nc9wDuPzBQ3yUEsxYZWD2RAbU6bHhJqE3QWTnBjBe97wSLtLG7i93LKx4dNi3pBiQHdeZxQQ5Zs61vPbCjzUFfg",
  "key26": "2hzapWhSFvKkN4xyPmHjMtpxWAak4ggYbcUkTgzkAP34PCL2Lk5VegpeTfD52EihmUd833c8xDSfwsKzMxRmYsdS",
  "key27": "62eYi9L2JQhPvaJ6dh6RsQKYMUc8rKiFdakP9GwcYTK4ziCMYD65Xv4mcAgtsfL5o6vCnVqM6E4qwEMuePq3jYHy",
  "key28": "2csQ4H7ZTvvqcyg4NHF9cJbGx257D1ye8kqcdjNEib7fG3EwNuiEB49PSJjhZ1AviXxDrSsger59fe7TPtMfMwSA",
  "key29": "245yUH1GuRLyVTyaPBb3v3P6ywiSPSLcGbxCjaRZSvWJ2QC73F91Rm8aEYQa1qW3e2new1mJibmHUaW6CHf2Z7HE",
  "key30": "4ntEW8usAUGXRQfahyboD5BQFCWAJT6VNW4PyNPugiFssj2b8gisB9zHhmwkg62KiqKjFtPczREJayZx7paFrCUd",
  "key31": "4F4F6AnMuYzNkP48FVvL4a7CrS5ozHSU8D42sgPqtrd1SBhhVU9w6oEo5LVYRYDoFmFshyLF3T3Vbx5ugN1u4SVV"
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
