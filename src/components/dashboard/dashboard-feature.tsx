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
    "5afqjZoeLWif9CBJNbLtww5adsseVvkMi3sEN1v51sjs3g46gb3Kr7h9TUdyBJ1QrZmdZwP9Dr9u6ex6yRuf58xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36k8AKUsYkGY98yAxa6kZ1FcedK9wMZph8q6LZVBf9vpTDSyk22oFxi6SMZSHhobL1JryndhCTLUhaMrQp6GEzjd",
  "key1": "6TknYBzwCpdKqgByagyEK3gBa7M1vZ54gpUq4BE61Q4G3w8aGm3dfEfC1x2gHu6zcMXoZVjuB64KnBaRVe3rSCj",
  "key2": "3EBrsY5wsFF6UVi35MQaVfJbYN5yfNPvmtEtWGxj3rhKY5tmj7CxEY4Ufk1LM1NfgoDaBJLtjpQN2JHcyztN3pLB",
  "key3": "4vqUSUCPkoGsTA5onPqUGpskqoxGWXpdBQ4VVDjR2E1gAQ9724LFXWGzUVviHsBchYdoEuheLcA7CfH99tbTMCcv",
  "key4": "5y3SRPRbm5YaCwnxjfET5GJgi6AVJPmavs2b2eeV6yZFcopKcugFJ2Qy1b5w451BYxXrPF4xh6ymLHoXCViGMjRQ",
  "key5": "2GCjYgKWMQWMHvpNomGEV1bNEf833JEZ5c5F1RDTdScNoBQAp5CsAEpxLFB3vrYVxAxGGdFBLx3orbve6R4HCiyP",
  "key6": "kqYFZwwrwXSZ2BeNNsLyix81yweWnWYERuR9hhFxdb6qeTEjsofhKtJhhPwzP6EMmjNsAD6on1jpy3CLwaSYVxv",
  "key7": "RBc6yr6RHThqxAU95ygXxWArunrydmvAzqjVmrh2yph7nno2zE96wJiPJmfQE4E3HLT1Jst5YmmketL4y5nbruC",
  "key8": "37DU3k1aDJ4YkzUU4UWXL1mNJAvyLni8zAEr9wsCJbzZHTJvKr6R74YHCJUKnd55nePpdDhYPot9xyCZrM9Mah8x",
  "key9": "5b27dzsRqDe3b7TyeXJ78bESuqHP5mMqiUAzL1MsGCfuckWz2gZ4eDWChKtcdwUMeBvNwEE24jxdoH4dAAyD3iiL",
  "key10": "2DyzvCBh5Nb3Vmt3Bhk2bdBDD9FCwyofgWETM9pVpxkvR1ZjoWBoxALkXpTCbK7kkcbcQrNWMBcgghiiQPnVF1r3",
  "key11": "58eUp5W9MRNBFYuormHHrcLAvub3Mi2Xk979afqUjbGiXA9TKLeazsUQsaCp19AsCbVWNvXio3c9jJ6amET1gkgh",
  "key12": "2y6agVNDvjBrCQzgBtQc5SCrWADigRgY67B5AafaMC7m24Tsmr3EsNeVVBFHYcnGs9gpKdEVxHj91g6GX2dmKmqB",
  "key13": "4e5jM8pwWdSUdQuQF7TwYDqM1bGXnXCz1V4WgQeoK4ehN2aLzE65kpoKVMqQ8fUyxT4zfvGnCV5K9iY1G1yaXC1H",
  "key14": "5quRVVk3LLHh1ErkKBUkKmmA86k3kriioYu8eZQRknUSdXTsHh33C2STqegv1E5bnev4QLafmZ3v53p5bMYGVNax",
  "key15": "2M26ArbAMDaUeEXZrJo6cULauZhFm2FaN4X1kSUq3etpUAmL6ZGyegYJfRht6CtMeabTNYgUcXGhqjpB4CkcaU2V",
  "key16": "4XfoFgsss3uSrNvZLsnHWqNh4tGqy3w3ui7Q47h22vmxTwYTkCNbAuHkrMLZ2XSaCoR6N2GWsePPiRXPnDfABekL",
  "key17": "5i17VHNnMfDZeMwjAVo56iuBGEG6h3b5E8mEfWVjGeW7Ch6kjAVPfVjpwUJeHJWj7pJ2jadZiMsieMCKA8heERsB",
  "key18": "5auSwjMbdys4cUqE51pMgzx9VFVPBGb9bnt7kip6KG4RMtTVjgEMLtuxprU5kBfk9kzTWzNwskCCVj9a1ZPAVJxp",
  "key19": "vT8LjCYFdnoqyepeMut4zaNSAaF1Y7MDg1hyLCqHd7x2gecu1sQW4Lgpj3wABDp422VT5hrKYtfNGiQ2zsMy4HV",
  "key20": "Dc72QMPxNeRer97msDyuqNFB7rL9aBQN8B9UCHrqBDwPmexo3F8887Hn9uEvboXa5fTNA1zWgmAtStqLb1fKSPt",
  "key21": "5jGeFARFhm6kRNbkXThdNntteXsUCdnxJTdgur9mdwwMW4xuvJaNm5AvVp8jZfb675fZ1FzPEc9waZdwRnK2Kzzg",
  "key22": "oGi8Wwgtbgj8Vzqc5UYTuPgWVQ2HLbjhF7qnA2C1VYNDQjj8E8i5HoisZE1mwHNUBUaeGa1d12ySbStinugW6cr",
  "key23": "3u44ZVPwkxGWpE9Nwr1KJ1mrgLszZVZ2fhRMi32fUMneRq9NU6L8X5wJxyvKdqgDJ2MCKZAFrUiB6jpP4t57sbQr",
  "key24": "2SY7jnRsvueMyDHQCLaox31pKjFYUAfepE7kQayMf5RRrSYPUCjwoXqTbNGxYVk3hmFB37dphnjQewjXcdgiWwa4",
  "key25": "2kNTjkqwij6NbrYGf4CjA8QGrA5wAtjkDWdYiTK4j2y4isSCq3sQYiGSXrY74H5Y2hfZHHHDh4tbhe41V3B3fjCM",
  "key26": "2K2Y9THeivzDiGJjRmta8DWxfnFqjk61AKHKjiBkDXd6QtJoH3c7ervkS532fEcPrpVvhGSRzaqdVx5WaaZdd22W",
  "key27": "4JyVShSe41rSZeGRk5uqGn8hJNMsEb6p53gSB2daquigKXA9oN1k9BoxNH9tk5ELDmoGdHMWwu6vVdSmV9Cd77tE",
  "key28": "2Vyqtq1aWw3h6a8GkcZNSiaYT7RNQ1A3JTCrJHJP7S1Pk8YB82s3PzeEG7xZegTU74PbgnfMfauJCBGLEBspLdn8",
  "key29": "4FU4UCA2zDr2JkvHTEojj8TZi1NCAs9HpoU1nAUW4sYdeERmWZMDz2z3HYLfbYuaPK2SYJN2sGxeJoEn83tJiLC7",
  "key30": "5ASg3Gsa5ev6sFVc1T8TRTvVjLiD2FE7q6Hxmrsu74B95Y6haMFhHHjxTQ3EyDEbgPwX9HTyeLYTtWfyER34EFXp",
  "key31": "5W4rdQq8V91kiDsoeLNhWGnHbFueQKzmJES5b697Tuab54vsqXDHvAXCS2SUiPUjcxF49BGeimJkXxTkNPHu91hL",
  "key32": "4p9EVGgoyhBhUsCpH4crrh5ULSian5pk7eCYf67zfV1JiYUbWyjy2L3xrwp5q23VJzUL26aXCCvNAxDzi5q3eg4W",
  "key33": "2yW43kXbAiFkZaw24V4xJCbugU4UA1ikNB5s6wwmrr4FZyd6vL37LKnucjiU6FYj7ysPMCo56KwgPwzb7vcGpMx",
  "key34": "66xNN5z6Ywq3MEUeVgbvFBV9QkUaAdMywVTq1KiVxNjsU74gBb3B1FWmGdHwQgTDtEmqhwFMcy3aqa5Hnr47or5a",
  "key35": "2wSrCiobryNT1CRAvUY4dnY6c2pYxNNS8hZ5nNQ9nse64d57Svy3c5mRFi3YbJcA6zgBb8LidV3tgpenar7sgHeB",
  "key36": "iC6xoyRM4VDVPWkECxHfN5BbbfsfbwZdNZTCFus1R5ccD1PEh4zgPzzJRrczgLgKay3N2FiEtMqPsceDJqYqUYS",
  "key37": "3WEFowZ7s6jaWLMKufjEWDquNuogBKLwzYixFmthnuajPBmNRf3K7waJagMpCREsjED9cwK5C3kCgRbBnKjqi1vk",
  "key38": "5RSxDR1MaAkLEodJffYV411mvB23RKyKHK7FBBCwo6v2d8TGgfwWA6xybuQu8mADiYsAWmvfKrrXqrvsmcDMuNDJ",
  "key39": "4P8NWuzyVgbrTKndmfyhCrvrCcCX7n2asoCE5SJrF9vm6Sv39CTDvsGmbTfy9S3wc8tHECxeLe1RkTSNA3NLbWnr"
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
