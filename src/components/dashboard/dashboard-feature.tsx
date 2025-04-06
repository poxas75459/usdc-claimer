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
    "3QrA5o6raFcxnETDevzoqBawwPasLirxt22fzwMxcr86SWaXTRPaCH9tZnpTPCMjupBvYJN6eYxnT2gQ73VfLn7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxbYSSHZkFHiWZFHmQtr4sqJKZspWoJSdMqtsMCak91PNqo8QPF7MBnnDiTwo4aNBmcUgtUn3watSKjwGr2EHmV",
  "key1": "52Wz7FzYj9FWxFLaE4HMWLtDfcUNNxJKrUa5phibmQauvz3quBB9Xqe2J8DreAovhmG58iDu6xWzp12BTFWnnhHu",
  "key2": "5hE5Mu7j1GnB62wXTuRJFdN8YYJsmjxZSHdgxgmiuXf5dhGBEvQwpQizYsGAfxiJj76cmihYvNCgfkDujUbJ3mFL",
  "key3": "4xjNfgUgMf4tvUhVKKiWoJNVkDyZ87M3KubR1rwm7EggFHirwx4ENx2a21dJW4vLMoDabACKkabuQv8u9LTTVrZL",
  "key4": "5bM89kAmV5S8GMQFfz2soTnFedQvRrsDEpStxiDnXj9kUH8SspQtxif8NNWqJ8FksDEr4kDdeWk6EwYcyvp8EnH",
  "key5": "2UQXuppQsLr4277TyZy7ZmLD9eD6MXkpv19Y2N8TsE4ZJ4PnwjsaceLUCofW6575LZBJ7hGnnNMK4SSb4PdKeX4z",
  "key6": "4pvKj2be9phCdsd3b5a2MB8j4NcESyspkqmHKp1QB8q3LcJHz1e8kyKgDZwfyR2EzYVSij6oktoXvMcQhdums8aJ",
  "key7": "44fJjfwK2e3DSKzirkgrTyawYgEnnbHCRNFJZZdRSdEqnQmu3wbbNcJ9qBypposXX3Ro4AZocpYShW9jofVAoaGb",
  "key8": "5hUmMzgkLAyCnyd6eJdfyo45g4sgdtLUUzm9jrgH4qe9LKt8f2tfroFEwGQhVpraNboKGzvsLhnsKBG2oBPPtkxV",
  "key9": "mPjeP4gZ4geqhNiCrwq5y9trSVVgcR9tyZL23Yfme4QgQABGgapgoR44QiXP6K5sGX1UyEMPwMQaGmnhUhoyAcS",
  "key10": "5nEoGsPBEbZRkMnqbQPMeMogGaWEvZqxGKy4L9QDDrQF7V48wKVRjNyhSRjLBPbwePhS2JNYRKrd6AxNctLi5rir",
  "key11": "41iD6ze9oyFJCPsVdAKgrs7iHjM84gdjtwvC1tCX197GLiqExXDHTDdyuzKcerDCZ5W6aG9xAXdbuEoxqa5pnw1y",
  "key12": "661QpLa3oFxXMqeFYz34vkBCqsWGAqKFv1izxdUQ7huWA1VojYAzEb1jQX5qtYGCtu6GLRKNBzJ8NkBTiq7bRcus",
  "key13": "3AJxeYDPC8EMYxtRt8RF5ujK3eFGLccpxZTNtw4XgYtxLcgEtxzTKaKNHVfF2MdYht3yDcUWB1ojckFUhTFVdKt2",
  "key14": "28AwntxoY7zJdedEvDvmR4AuohhAtEDyxuZ9mFAgavqnVy3KSvymosX66JyqNc8StZJCWKgTdikdU7hXsdCkbL89",
  "key15": "34Nit7t3kQwSrDA5eBnSqaiSPJeZZBYU6QeNMm7SDJHVGjeXNho4gHeus3oCLECBYFYHvXZSqTgta3bi8d1QRZ9F",
  "key16": "d5Sq8ByKYp5cawULWKqLiqfoa9KWNjzf21S4ywNa9FeFi4uugDfe5TCRvkLfAjYnxy418vVFb5Wybakus4Tnrxf",
  "key17": "2onQvot5nd1sMoFGG6Fd3JRKpU2HV8aWWPebCyWNvBwjDDFh3hesixAbGXaxgjaXYcTPJE1LL8n73CLdHkX1gkmG",
  "key18": "2kqNBadv5YyYjdY1PGcR7HfXtfK78AhBiLPc6Xu2qHoTDGRSVzFzWmWX3E6FNojn4vvs4XEsDgARXkZ95EQo5Htw",
  "key19": "31BbvfvTZ7FgLimKgMgZRiVzGiwk6FarHvnB2jjxQ1BFaWq7Riyiu6ji3sE552fP5FAeLWeFkAR7yBmdEDQvp5AM",
  "key20": "puQxqZ3zZ2KyugStSViXc4FDCYd7pN21gUvb78ktfyDwVqmgqXa1GcXipHjh71uWkGpFDw1GEEXtyuL9TSYwcEx",
  "key21": "4CfdDwHtHHeJnBUw26g7FtfEGEG1HDRFpK3BvJBy3HTR6mDCiHWA6Y29sTX35CjisTRTWUQ9Gw1iUf2KbFTCT3FS",
  "key22": "3t6RdctoV9CsD9q4pwcnKXetfEpPE5tFExw7LBu68LmT2K51V9HA9A94tJstLzeQp9ouv32WHoiyEcKWcPsSHtVY",
  "key23": "4kHperwmeHCQ7SYBfhw1dFTJNpgyiSw8T4r8zqzc6ri3kRyTVxR2VfzM8J6jzSfTFsWLEmQ7GxQGT4Kz7P1qZ4XJ",
  "key24": "3DW44Pohxm6jPDDDRSKwqtM4fUmZdxfv23cFFfQGKj9CPr9QRV6HdG6Qj6nbUdGhW2QnkiWfkoiJMyMa5HUPAPy2",
  "key25": "2hLKmKuJuCnfXfJD8JpFxXVDNPyAdrpUxU6YPvJvmsnBL54d1pjpgBpEfpw2ScfxvBFAkfBgF4fX84U2cw4fo2gW",
  "key26": "5TBnyg6d29h6adwKeLQibGbzg1bNW4KnLWwSBrEQ8u3cK9hP9Hop1K8jKrdubt3Fny57jtYmw1UZ4BUN6REh9yDh",
  "key27": "yxfGEdHeL76zw7NeZKUgg2tJSHqHHLieN52SjCkt3h8Nz3YuENzj7XWVhs9SqXhHUgp2SSznjWCumTaq2G4wmZB",
  "key28": "3zyxephZYgZnF8sA5u59CYm24ZB9viA2RWGToBKswRVgadDowuK1zdEqQTrXdZq51fDTyeVf3hGn21mvztAnsBZE",
  "key29": "4DMaMyvAGt5uLucJRi9Gr2L6i613dQLL462fAhjvZZyvCE7VYJmcMCGSCejTZHvE9TMizYERmyjVeuhreEhgw4i4",
  "key30": "44YV8TwATFFXUGV3Q1oHKwgLDr7Yoz1yxdnsvoDo2wp67UknGcdYyJYMV6rEMHaA4PypzxMfudH3ewSb7CYJ63wo",
  "key31": "2R8RnFCyWmEtgqc4jJ8ytxPtYQvThSRAGQUGkrdoKQinJK1NJKfUSYzFZFtTNDf53ZWyP6Gu7Hai6t53JABRdcs7",
  "key32": "CsmG5VxBqtaZ5RoBhVwADkxmxT1x2LuBScSwuLd2pUfQHSYHahuoewQxRaPuApgijkt5z3YbyQa1T4L3UKBMURe",
  "key33": "4zB7umg3LxnJAi93xE9SyFiQLY2fD87dw4BfobZh2dpyZRfaBLtufBMoRcRtD5rJGtk2wT5RuvyN6swWRfaAg31d",
  "key34": "3bPBjWZf2VDxGZp6LMskQMKeVwgSGCd8rgVyDhyWBjmusY6CbusmQanXgkT2K4SUpcGnx2dNwG7WnfeBN8Xfs2j3",
  "key35": "5A292VHmiyusVD1KEgTDSELc5UxkvGyBJJcSQ39BsLppubPZce4QHdc71F7AUkpcum3eH6acCQRn4or2GYtK1RA3",
  "key36": "65XmfBdHFUYjUm7jLpmpzaU8Edvqfvk1eXpvYib7FnY8Qmpe4ZySPiRcz1McQBaNW2D8iboZcx3H322hpLubhHLr",
  "key37": "i7xLLuwnsf9dFuuXmxtM1EarfA5FjQV67UvDWfjLQrRbyRdBi9sS8MtuGpJYNsmv45S9nCQ2AZjMjghQcPGw6TV",
  "key38": "3YH4UeWdHCUgg6pPodGyTskoSXASNkGZnCXFn24fNsMy8f1jeAPJjHMuDfNuLfaKEvCZAGKNkQezffhxm5X9XPwX",
  "key39": "37KC5Mx1xj6SFc9PkjQTRxS7jQhSHtcTntznsGLzNb1LKxggByt44FHT8fkyNHKL1S1NJwAS1iEPFr5LYR6z9qyW",
  "key40": "rrn8TFusPwSCBARf9tq8TqRKPQcxvbC5BptWn8K8xJp1Yo1z1hrRqNeFKk8S8ccKSE4krz4odvteMTd2iUTRt97",
  "key41": "5a7cuwctPo71gtW2s1A3cWBcoyX5Tz1qsZUb81T7WjSJofDssainozt4rRDWhuhwAGreavWQcce9rJomu4mnM4UN",
  "key42": "536iP7vad5mFLDqWymbPPNMVFuDdwsqR45gGM6seb9XTEY3sV9k1cZCxHvAADew6QqoBc7dQhYcknD5ehQAfzsPx"
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
