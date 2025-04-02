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
    "5EctSXovvSGKQhkE1GjcLQ5id5RxrrDNxAE7CjTj2ERPKCwNWZnusWLUHJvmbdMXVZXhuxmx7du64nXxX8jcNQjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26VuEsFgWVQnXwYbids6RToN7sX4HsgwSavqkxp3gJiiBoKuVKErYbKceW5Ho5PhTzrNtvBs8qzwbBuTSKBPG4sg",
  "key1": "2b2n9gZqGhd3gHcprU1ka85XPMrLSKo2xKV35Z8UoFUuPxAjfVJR1nUreg1JqDNNiaWMD1HM5BViX6rWGMMGBgAG",
  "key2": "5gmrvDGUVwGYw4aeRkqNJuuWZsNAiHdyRUSuZBnxYRCUGq8NuANngUFyvPyW6KdH7jz7TbdAURfdD2uWh3i1pWtE",
  "key3": "57h7AEQGkVEzwWV8QfZZfVbwyemawgsan39LrCWADcfJPQvAeKTBZSbzSSEU1yzdk4K9pTrR9oPZHP7ubSsU8kZC",
  "key4": "duGYN8XEWb6yYYgp94pVhQDup7irK1YffhoKnjsNaqXsaVC3s68wnjEdTCBLkQdcgwndCr8fncpGY1bgxUxZuhn",
  "key5": "3pA1QYApzG7UJCAZq18mfWPhoJQtTz9xqXsbE6hNc77GESXorTzpPDcFp8nJBK1uQo1rVo6wcXpxY5shzZeGitBX",
  "key6": "5QwXkfFBcBpNxmzvNPxQwA6a5VJJnkPoU1CSghn55jNugkuqdEvcR7kyxoeNRm4awpJsfNNuyGXNgSLFNmnVFzKT",
  "key7": "xx5gu23ybxeFAygN1pQezHN6iEGqACPH7zjg5jMd3eQBQwqPEeVK7fAQ8GUJggfygWD7DnCUSCLEtsBoep15AbC",
  "key8": "3JmwU2TwR7tgvSxuLZgyRcGvbUB6TNFfpn1KAVKA9gsjtJc8q9AzQoNKEYpF58qczSbWZDpisXQ8SfWgBMfTH8KJ",
  "key9": "rDczKRSfsRKrL6kPLCqGGpSVDKsom52UnidNtj2UHYQc2nJEKcywtRz1S4b3QPA8VanT5AqZQHgzDg8PaYkVt4D",
  "key10": "5q2hNMG3uZ4dYTwWu9K81AapDPWW6ufyZoqi55PAAwc9JJtTevV3L3SG7GekjSThDRzwhmwEGf9L3o7VZ2GxCVPw",
  "key11": "3pXK1sCNYTSwxdWhM8JjJ88asRc7ooVuWmLZV9kagBKCgFfnTCX3WSLAZ1yPMVXLuZEr36ycwsEahFio7yLtGC5D",
  "key12": "3uVEjR2bHrf2Cb4Bzt3Kpm9qFuz96zvEq2pcG56FjpRt5kgork6gvZSBKQanke1odWz6r81vTmWmk83zAnWmEJyo",
  "key13": "54uENi3LEZPtFEo3mkmjaiWPnVLvSKxZg8D5aapyD4otvAWdnrbYTnpoUDHA8KGzmqHeBCF6m959pUctPU4vCixU",
  "key14": "4DWGDFaX7Ce86ESjWEDwxmyUHWt95u1PQuTP2HYR5VpF57AetNHh8ofBy87smCmwXodRxUXJs8TachDh18sqXaPZ",
  "key15": "5qapiDptXbU7baYQzjWPPCv7RNGoaMdd4F4wwKDocGA5VYJ7LA7X5BCfUpP2q2DHCzRTkzMA4AVgKV7TgpZLeLrT",
  "key16": "2ZhaRpvad9DD2KNUq11by5tLEBWfHC5L93gcVv7jFzPfoKrsSNzwUH4Nxeobyeokm1NYq3XrYtkLsuKoBgVBMsBk",
  "key17": "3srJQfPr24hYMHwyZTbVH7abQ9V5oNK4sypdutY9edvPduqaap9ySWmgSt3NSUKqBx9eykE8Roa4yteM4mWi634A",
  "key18": "3VuckoYAdTwizcMCgS43nMwNCwonzcCt16u4LJWbdBRPkovuexAdD1wHApDNxK5fw8Cw1adMeUxamiih4EpBAYr4",
  "key19": "hontxEHANdt3MvFY1XaSh2tVaGR6H8z3rxFxj69mbjHyE59xQunJwrJVHuFhny9PZVkge2ZCKYcyiMzMdniYdtn",
  "key20": "2UJmVSNUwBkfLY61EkTbc2NRWPDvnhXP6UriZ6ZqWRqkS5rXjfyVchCRgappXQJS7zyv8cA1MN8veMJHRdu6G8oN",
  "key21": "17Qoce4V9vov2sZFJTopGwEgpoDHz4PkDTvzhbxd8ybYhwhjW3vL5R7gtdcaTcS4fF7XMMsCwyquexxroJVuvu3",
  "key22": "2QwWRHwLpvDp7nZR7zMWzrhVivFgCN7o3FRdn9hMcEoGa6V3jcsXxys8pbeTcagU79GKAZQ6z8aqg9pNpyT3KVtV",
  "key23": "65VKN22HhZBgJC4sz5R8KfN5JZiV5EbjvAPHPzYfCem7iXv8FSMW9jULkCzzp54B1QJ6m7ZvpiypGZwvXvtSmR5s",
  "key24": "44xPe6btwXHpsuhPztVSEcaPzCVc7dLJVR1miL2SwEfDanBUtMNhpskGdnJsi4WjFxupHmbLZAoTCA6tKWERTyYu",
  "key25": "y7KoR8Gi2r7y7iRyPsoHD4S6n3aQczxvkcQ35D28TAWpsaBd4kJX82tu2i8u2t3aSJEtzB2b7pVrA6vrtRDQWs6",
  "key26": "2wvos9jfphZWHpk5o3vWzFMAf9SC2TyWBVgDMVeCaspzCRRsW5M24FH9Vf4NFxH9WYBY6sETU4o2jW26R9CSVRNe",
  "key27": "ae6LNdPBXNHvD5guqD1WpugCfbBB8xxPKFc2iBh2gBTFwpmWPbFHnMfrfDWZn5LdvUMcudzN7W45s2HFzzYUYrh",
  "key28": "5n8udVAoX2s9YKYKF1yiEpmGNgEAsKfXqPJQRLrSu1aYXM7RsbAZ5yEsSVeF9DyKy2DeoY7fvt8jt3VeUgySqoWX",
  "key29": "4t3XpF9rJoabCQePdoiVQBszqTXtaiahinjJqEWbcYXA7hjJdVTexKtxQwq4M8QtKeunvX5qPezvQZvkGURW1axP",
  "key30": "4bvzepBaw3phnF8YkJeHato8PMFjYBa8H4Yadd4RsJu5SvcPg1Zapf5Y6KSRALiYQaFRa5mU4dhHfcivYXGtG13V",
  "key31": "8oaGoSnrpJ2mmQugB9EBh7eW9HyyzPNYxFfzpQMooDDUeMM12tNyCygQ651QWn71SGWnWNUVbJ7Zig6dRr7dfNY",
  "key32": "3e7EkPt5dEoddP4kkAUgYaL6AhdaBN16jjmmaSK2249xjjaqWeRRUtmf8oKS1C3TQE64bZns2TxnTGAzEijBA42b",
  "key33": "35JWMpbVkRE6vTm9FPGp78EzKumMkdNpn2woeYJHyjwp5rXmy6Z1cGEcA3jwiEY23ozAYt72TL2hQjwEJaor1eQj",
  "key34": "4GRhpn4SSuXFNR36ns8FGBsezYdXNLG6mPsAEGX5EJH75xPfRwNcNTVnqxfQZz8s8TBBAe4DydJ9BptJb8P2eYss",
  "key35": "5jygJcnMXb6e2iG2uN9S5HJZRCFrD8XcnDBaXkkmjZzWm9AdptSihFgA38qRnuDNwNReFYwqLvGyWTtaxQB2Qwuj",
  "key36": "5hkMFC8r45P1TkwU8YvdCv7R9SKdEpYXmas2yR9AT96CT4fSk84GZ3cjZYjPHpKXsDYZ5KaphnEi3oz2MM5kNVKt",
  "key37": "4hXHxQ59Cw7JbeuSdVKoQxVSXRqXEBcwUaUunBqZ6MpBma47YUzbwE8zXy4LW33sesWpUTuG3acmkkmx53irKmy7",
  "key38": "2RCwPMpzyWaPLM2w2Mytu9Nrp5YpaB2s98WYGYfu99XFL91Cw8nDEgY5ME51ih2mzJ3LmEQYfhsTD4bTRiZsBxsc",
  "key39": "3uZVhvMVRhSddgnoVH4UM3MzZ7mZia6sLKroHbSqLDGBXtdzfDGptmzSHXdS82Urp61mpsHrHypfVZzcv5gXB699"
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
