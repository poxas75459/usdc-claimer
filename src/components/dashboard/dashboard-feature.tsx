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
    "59qficB36Cg4dZCxKHdLGZ4WE9mX17rcLZSGMCZVrzamMv9XimyPhjJu1r6cRsGVjKFvkJ4EURyKymoEmSozb2Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKuwtNpwawj67FZLMcSbX9TzfBV5kzn73snQTkxhkKmg1w8kNBYHKFsi8wZjBPkoiBUuC1w6Gp4mnaakfjvqu9o",
  "key1": "4bcGkDxK2WfzEHdWrDd3FbP77X2bv5zYXQZEbkjCAE59faTDHsknG5zKHa4JvGBEZJSkeP3aKSs5JE9rP7cfQnZ2",
  "key2": "4Fh1C9ZcwrMGMxW2zNL9KAWRhzWuuofDnc6Z946ZCJHa9v4WXUDNNno1hNDpwrtvudYG3K3vpM9Q4zqFFGHAwTU3",
  "key3": "3oxnovA7y3AnfrkukeCWBQB7W4SwrGWrWwbRNNsZHUtHy1dCRNzCgZkLZpNimuz8r4221ShnGqZVP9a439UVZPXp",
  "key4": "rJwKYtKC9naYxG3uiojNkjNKHL3BMuwHvWcgnkzwvxGwL34o7nxDgTEyVTYQcw4pYGeLS6SvAYvCsS5WwrkR82q",
  "key5": "2cHTi9ercrLgztMHV9roPNQHVVr7os1y1Eg8N3M7VWxum38Z7ZQCUJQJVtNYGmmfREejkgw8SyhAzxDVKzN6XuWK",
  "key6": "aFBJApf2tG5m22zF9UzVXaMDkBrGjk5nXKEo81mSpRY1wuz3U44Nx9yCi9Zh69c8PBX7K8Amznz1d9aNKmTKdMW",
  "key7": "5UeDjMALaUUcQ1aJAzyuHhRontnuDKbGDU6Z3FWezYxAaWs3tMih71oJZkieY4Hbb4fRcR4N4TDGvErw8ohE1qLf",
  "key8": "5tAvTKEc21LqtvLqJjWKL4M1VdU8oHgrHw296DqS6QvuERJwmnLzWZf1ExYB8Bjw3bMZfXxuLW1ie8zS5SoBEPnp",
  "key9": "GYZ5gAAEMC8tzGfmmXvteajvBUkZfeVWEm13y2r6Qs1qvmUZT9SvZBqWYJoZVgxtmXDq4VYip9749KrfJMWX5ok",
  "key10": "4H4XxdoVQhwVTpw176Vc7ZHmj793qHpN5xbNxxRBpQLnH3Fy2sx6WdgkmxVJNw8sKJkS7NkMzP75ptPQvZgMyGXC",
  "key11": "3jdxjKXoBVmH3YFT3QqW3kE3d661Q95uz3zuxNL4L1bKv9R7TsoTMhG5tbSwEmAWztqzM3Qs1MrE5RoG9Vza9sBx",
  "key12": "59Y7ugrLdx8mgZFNfkmv3o3p5stKn1CFAZSzk2ZXQK28HcaSFP5kbkQSc11KUrrBXxaJVismRe3qky1D7dJ8kYiu",
  "key13": "5BKrCS3z8HbnnY7GFQDbZFXGgz2zALpLqQea6BuzD6k9trnywYxhySFTZNHithxYfPmXuZW5G3cTbtcmL1BJQcE8",
  "key14": "5KFV7agehGp8KSmTh8k1RqEcW76vGoahXGibwJJRsbXrdps8bscaNPxMCpdWtBUxc9mXXVa3vLmSm1RmmigLysm9",
  "key15": "2K19aMBQ9oYSmBn3QV9zCCfYY9s3LxM6Qjf4KBDLQfXQ7DFGZHwZR617VcTTR1sAyLwbEkwQvL77dsFfnLvALwmp",
  "key16": "35PWYZMrckSxc3q9K3UrTTXh5tpaKE4gwpNzPNNkQEqeJECqMbTPWiNtpf5LeNzP8MnjhRHYSv7ycaNKCY5EEnZL",
  "key17": "3ivFC9REYCFJPthzQtRHqSxqxo3bU1WJRrEFSwMniaJVYkctMLZuDr1gEJSFx35Dz6PaTB9UGmdh3HTAEQCFG4N4",
  "key18": "4WPYZDKTR3hGizRPXV7GE7r7E1zyDgo7Giqgor6AEN9CJdqkq6kVLvFniuhqonuVpL6TDKWTctBxtvDLSCCKSQ19",
  "key19": "3yXMvmFcuQyw6dd26wVz8N9dcLQ5gwnnY71mW9qXwY8XtjzHgfX3PEvcxvDJCmeg9jNDY5vcjcNfDLUZVSqtBizn",
  "key20": "21Zpdk56D8XLaSRPZjut2neZSbgyTiSRrkP8LwwRBmHNKDyX4c7NT692UVTQwQFKk5saiXhwG3WKD4GVBPxDf8oV",
  "key21": "2EpnQJ5QJkFzuSDSpXemN5HB4jhvRKSyMBVwhi3qmGCCG6sAYfQtdceHceW3s6Mzw4v755hLDJEcZWBDrVVUiyDa",
  "key22": "2wxJqvJ93QS3yYRGCzSrRLnPXE5ELtzAZi8GRtLoVCH353oWgcUq7b8BnQHS1gRzBArcfu6B5JUQpxgo9ejc4fk2",
  "key23": "5k8NybCaGsG4NP7C2XViS5HWFa8TBz1vynMnYPzXBigBcXaFs8iV1kYLisyYg1sKG5btoonyCqmZGZWMVycfF4Hi",
  "key24": "5hFwVmSZL2PSLCkborwbpDB7ZbUEugVNeLJD1kQRdGJseYd5AyBo6Wz5iqiq76wKnnEXP3LLPCiQGnZu1dHsT6vY",
  "key25": "d7K7QjxHuWRTnjPs2JD4SCAzCXSo3XZ59VE1Em72ki8RaHpz49WKNxMGJcHexCaAY5Fp881HRjtjRDsVTkEMFmo",
  "key26": "5odL8deL4ku7dRkKy1CWWrS7BjGe4TzsPtWjwtRhb8pbSBvJCmNzQ7nK7gjBGcehmC5bZrwKYydwBY7dUs2G2jhm",
  "key27": "2NneNFUHCEp54Xv4XYm8Wt1eVJjNwQCbXDRdrcm78j7QDvMBhT7aTDpNjnD3U3189vm6Qv7LaTo15yukySdmgbBK",
  "key28": "4Xd8XYd6DRdNkvUARdaTxfVBqqhX4WfF5QNFG24hYVVXun8BULTyondxm4jkUQKoegwvKGptQdXuMdvSpNPsjhHS",
  "key29": "GaumZVmUAihLjhfc2rv2Jkuq89wytp4hwEfRH3HDjCqxuFRMLjaAQ8SHCUretapzd3yi56iEhsTAy4kgGwsqSqF",
  "key30": "4tDSFpxEmgJtxUBRts7VzQsPPsyR8aSJh77YDRpDgJu5vPP1XeWppc9D4D3FGqUbRzd3e5NzhtCo9Q3Y1hNvdXB",
  "key31": "2ZY24iEP2dYoaP1n74d7gVaRHmBVLjg7S2unQobfkHBLFDWCFJ9WiL3Ckkhivy86oUTWTtCnHnT4mb4iagsZvpDn",
  "key32": "4p9ZEd45zegJYuKKnuXJKW3Ry7cnXW3Aev5EGuV3qJCJ1KRGNxxzZTZJmK9DZyNXzrTzhoEjjHgWE2NqkW99Uq7L",
  "key33": "3or7ri7HZDdPLujELui1AePDnSjn77H7vRnHfycom9JygZiDA1B42mh5NgcUhPsBWtj6QaKhVxC8YtxuYtoD2Bi5",
  "key34": "2Kng5aEg1V82wrHUq47W52GfYAgHUQK9wPPrdanmNwjccB8uD3varaKMhz4pu31uk9jreSUwBmW5xvGhqcns9Smd",
  "key35": "9hRmXK8dhWfRSdEdwhhh95py6zjH94yxTfg1cHGD755Pww9qj98mjJ3zJeG2XMyXxFRJzz4bmMvjHrtaBvgGCaW",
  "key36": "pG7oo1BdJoW1my8PV8jMeRHQkJJ5JCQ1KM9UR227orY3ptAKCFPSojeciYoX4rnWRvvD9s7p47jn8DQwqN9uQJy",
  "key37": "4sRgLS9J9JmzteHodVybZv5MzSTjvSb8TmLQ9FKMUyJsDcDw57TL5Tf6BB4yReT9EFCcentvnzrdiSKQUhHnC1mb",
  "key38": "4j9XwEQM6de99oWFetrDn85qiyVigyad6ttUorDAt4p95j5UDAenHsY369ffEdEkviMJpWxNMFE1cadVEJZMgjiM",
  "key39": "3s5L8XyA4M3oqMz8SUze9PziFCYCzSwitUKjHwArgHN8S8nRSzx66J8dvGhMAzuqWny8fWSDxcLLtTN5Ux9ZNX9B",
  "key40": "5RknZk4gaSpRVgzfrCjhM9ZpN8NM6WQ1rMHdYLF1jRMQSjHexCiGrqUSFhizUXpemfR24rt3FW2JrKqxaStV1hCZ",
  "key41": "tbuJZaaN8q9dJiLVTjdFXD83zKJ95uiGmV3SfqxXjr2gkEU278d3NqVidfphQ4nYZHtjUJ6Gqb2w9gBDVPZe6qz",
  "key42": "4irowmtgDQrKdiYUDwYfDB3opfVmyzj9dvDrrDVmr6QY4HJVhNKwkKmBXH62crx9yd7XzKtQAML3R6SkMDY4Mn2H",
  "key43": "3j87HUdX6htWxErUitVmjdu8FL5vyCJczg1ALZXWRGVtVuVFRe41MuemueVFDWLkhFcpdo1GDbKBYLbzyyJangsE",
  "key44": "3nak5C3fQ58DXtdYHF7i4hEEC2wevX8ZNYfDPMqXVD5sM5J4pxiH1e1t4y4VMJeHapPUxrdnYHEbZqcRQjetjSrf"
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
