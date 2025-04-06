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
    "2RUAQeAP6R1krsfa7bHNHgPfVuD1td3L2S9KiLsunfw4pMC6yvvQ2yqbGqBmdnXHgwAy1Fzmf9wQT6RsKKT7T2oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ah9tXd96VYLhST1KfH9NzgXbur8Jm7q5GDPhtDJfj7YKrfk1vbAgTHwV3ugY57F1EbEAQP1qPYcn5V2MYfcEb7P",
  "key1": "23f8p3pxZt35UoSLxwzqFzo268nq8bp5f2cEq7msVJBqVvgdnzDfdFJDDpYHoyW5Ki7Niz7uTzHfXasDvVVH7NTu",
  "key2": "WdxccikQ6Lz7Ri4LQvSjYCscU35fdns9GQqmFMCT9Cq6ybD2MTpz3ad6ER8itX8UKHazTs4DtmEhq5WV1H6W1ZC",
  "key3": "3aEnj7JrHxp1UCGjdfMitGaU5EHrm9sx3rJHAq3y2Fv4RiLgikThRTs8LnfHt68P8V5LP3w4KhNJVEBUEReXoajE",
  "key4": "55w5tftaFSvXuyYRTdkF1VxPpHGYw4mYfjHmsGY73FJmuMAbvvcdNzh7Gv7BEGVRMX6sszfZsBkY3NeDkxZfD5iy",
  "key5": "5MCHeZRKRdpygH37nxC7KxTiZRLHFdDyLAHLn2FEpUVVBccdeDnFwn19GPUKZzxfzLsVbjKFBhGojM5ySZyzSxwR",
  "key6": "5K5d6w5ivFnfGLgPxegZnoaLiMxf2UNogVgkRFmFnX1P6ke9kSSa7GqD39uapzucHDEnfSKhe5ZmWug5keLGArPv",
  "key7": "4rMcVjL2ZmMen8MLsXyzv9pfwJKEXdSsRLVTLiREdLYkcKGAt4kXKLdtoewNfetJ9YAtop74mmxxtb7cnQzY92fK",
  "key8": "3ZBLGm1yM2RyuUy4MsVwvbo27uH5NwbTB8v7UZGfuchUg68uKNK9rsPY3M4TqsLjYz3cCxbeDWWF9oZJHThf8EPG",
  "key9": "5cgsaa9q11XDdBkRizFzxVPYRrABjMjZ2LNDppyxy3PgJTJHeAirjyf5ADn1vvYc93XD19cVbzFbH8ftB7scbk3t",
  "key10": "57iVv5i5E8ESpN7GSSnKWGoELDbtfhwZ7rVpJPJWgPiXQDNv91bph56GSeiUhb2uLBdaiBTkBj82QHKocp6zSrLq",
  "key11": "nogrzY6tRcBzbE3zirQYtBS4b5gb5PFq7Bq77nijsLuLkajJziR73T3hxNJLCQXmjm298RoCxVYaABTipJkQLzp",
  "key12": "2F8NZidNDbA5PatUbJzn5nSbhmQn3LqQnYrMCJncpevnthF7wFDibzbt5E5eSWUDLptFqGsQFf5C1zyDJHUYtKr",
  "key13": "54AZ7avPaJ4KG6fHZ7FfTzHfRp6sGrnAuQZ7dEjHgh94dT3UAR1UuwZTaoJHYpHCZ7nDuE6pE2XJS4k5tD3DxsME",
  "key14": "5JpaaXKr98c5PVK63XSsnN1ww4rEMbNSw2Exejm1Yg3UM25QJpkmwXtcKcrY57MPs7J7Cr4N5hVkJJG7D7BzhaRc",
  "key15": "BygFc2eWp4svrd2Du2WCa1eMEWqc9b9Yisz2DkZFFiwVgXjVViDf3DR9R3MSxcD4LrA9Ki3rpU4pZRyEDU2xyGV",
  "key16": "5ajo4xiULeVTWEwmZGCCyxFEAM9m2bK5RspZo8QzcHpWrHRmQ9JLBsaZtC8N36y1EUjRcHzLurc6UbVmkivgjFgB",
  "key17": "5CeQD7WYMQjGXQyHc9UcWzcZrYvJchE82RTo3s9nYQ2FeVseNtis2RK7Z71E6vEkugB8Eg4Smqr5dwEZE2KwUKe4",
  "key18": "6TGjronsx9t1watqGCYHrKcjBeqZg5ozeXdan222KpzT9T7xPskHzusuM1Hu1ej9BwjtxQmZUJTHyRbFfztK6n3",
  "key19": "46H2CDLaR7ff2nSrVibYPYHw4Z3GcnQGPBTwWhohT3f6mnXbU2v9mWwsojGDmnG9Q9codRQABHL4A7ZRPjJc5iR3",
  "key20": "3rWjRCwZnPxuDnwHGrTGuxqWHgBHgNmfNh8e29mtLVHBx76tNQegfsJNq834aMK3G2UVp17ZAMikiDDArV9JGJcs",
  "key21": "2ohAnBdRwHuWx9TsSbFcmeS5C4hBfe9b61tDiN1bxVmdeoXnxt27VP6VTkJyb1aQYZGGX2Ds21djaG4tx8jPqPzH",
  "key22": "3FxqxcdknXorrp6uum5c9EtWEbYSzGpAgX8AzS5PLmRKUvwtcUsAanDQ1ZA6WMr79HmRCtXzCVNHrwefG911HKAG",
  "key23": "21yWsLBgPnASzJhBQ7jQ7g1eCNab9sM63NUnkdXenoNMNCwEc8U3ZaqGs799qGqcRXvkLHjrsnhfgBgfUxKJ6DDz",
  "key24": "4SyjQsQseAn1g59VJT4xJt2rspUmp9WwjhVPhYyK4gxa39aWgmBdzWYUbkfz9cMXWcGbDzUh6ZPsGmxq69AMCftM",
  "key25": "5zeGqu57epPdwYybj2gQYqXpdq59L42eVf5p2qHmFCBEA2XonDieFPLvrBCKyfNn16zsDxLMwVPB2dEGM4TjVdqx",
  "key26": "3WFoHZXGYbQ4VT9bpangjCMLrijM38R7mxLxYsuxYC8QhQqDzAyUUK14pxVunxfBQcg3zMEUUjff4XVKY7qDe3xz",
  "key27": "FBcoK9zhc9UY7GujXveRnJmZTgTXFAenYcAouK2vxwZTj1ynBptUPoRjjdXr2TVp8Asr58ek2qkLyK5jP6izJ3b",
  "key28": "3QFVHj1JTheZPm4sETjBBYgeH9ye3XB3jicHbtq82A26xPYQXoDpQRFTFJiSE6Sisc4JRNEj6YhJMoPZb6HkTvDd",
  "key29": "4xmqSn4PJULLuXhnjxwhsvpdLJQ2KqWFtp3qyMmi6xmRTJUqZXTWWCfWdojkzduhmtd3Q1PEaH1P6KFEFpBM5h84",
  "key30": "3DNv2Fjpz4i5fHBhJsiJT3quzotwof585RJMLQor4g9PssFFJCPmTiVWfnEhC7UPGtGi1yFWXyDvLGgYaiCwu6pr",
  "key31": "2tuR9B5FPhJrDCk9JXMZF1NRfdbDbtDKgyACgPY2ruMeR8c4idViAFZrMbcG7qT2Zbdgqb15U7kKkCVK9U7CTARr",
  "key32": "26ZKdWTJuErh1fHfxik8fvppDCZMq3TZHrXMoJ9owXqefk3ykmBUNcgPDrAhQv3XdE3uZyufiUUbxEih94q9aLbx",
  "key33": "4fpbPmuZDwiYDozUcqWRdC5Rz9SrdafDZuXi4s5bX6FdRhw9wsuH9iLCuSmuaK15CpvWEcFYZb8pQxNJ4TfWeBXf",
  "key34": "41kS34SWjNGpvsgF9cgKRzbjnUJtodXDvkNGWSd94mL8GqYHNcwXJnsPAZTc49nvmNeqfRupVVxRuJezYJCUWKFX",
  "key35": "2nsk19kyyonvybY8QHHtXCv8V1YiGKPgncsY5xYtbLnYFm2Xq4S9dx3dmu4fStv16qyXJjrvCKTqcCEaY1sBYN16",
  "key36": "59vCg4zLoVU7GZssC7D6fCgVKWgZAm9TJkjLqBW3R7d4qqYryTbo8x1qX8ybjGhQBYsqFXCNizQnjFJHP1DfBmpk",
  "key37": "JwWpiFDEmzHqD7sn1ETZC6fo3nrkuFsqBa7zpiBdeH9VoEyc9XnxfPiZ2UgdL7WAYMZb1zTaCWD77Aj11UWZt1W"
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
