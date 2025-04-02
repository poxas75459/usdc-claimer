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
    "3ACsFL5Py7J6QeqNMufJoyfyZSEvywXMaiaJ7wWEAudzMUrx4n2Z2gSU4xxcrXnn4KXEuw4bAPsSFRaRoSQPtPBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zo3nq3Am8N5QyjRC2fAaLTijijvrVZmrePYvJ1Nbmij5anM42EBv2GRQjG7kpgELdKUHgxeTgkrjdPqWpc3SXZB",
  "key1": "9TNXbo4HC4Cuwm6pkgrJWh7QxYZyeDjfMRx6bfSuLGSQjerMSPNsrzBV3bVWh9LStDvCMkrDvaiRZuaWnAXKAQQ",
  "key2": "35CEA92EETcM1WgG5rp7GnRzg7YBeqnm4nwfY6QVFWMuaUXoM9qbUxhv6NHVbb4QL3oevYcx8kQZGP5y8KtiaxPD",
  "key3": "2xJjCH8y9vbUtV19TYdRokE6rw1nEJvkdRkKUiP3jGruNPDb9eCWpByPjRLpLpo4Baf46CL6HBAgbUi2LVfck31g",
  "key4": "HkPcRK7mvzviXo55wi3e7Mru2h5maCP7ZxcJavkA4LsgxqrL7t66PZoiaXyPoBS6j5f5bgkTaJn1jogQc2GtwaF",
  "key5": "3ddW5LMunnPet9M9YRjXZoAYcwUkw7f4Pcfz4Q4uy7gmETL62U3NLWFMc3MGstsuM27Nj6UAffgELUhiPdujVLee",
  "key6": "Nekn8YGhYhwc76mFKyXyWDVde7zdMR8y7v9hyhH69UiKjkVbAfJgScasj42VhaBr7cMD4QyJ6KyNyEiFENcbFtF",
  "key7": "34uRPNJmRAEgZVTffF5Q1MyUWGGvk5SKiNzzvEatny8i7fAAfCFNaWgk3jMMF7t4TYFe8mWYTqmCFxxdE3XSn9f5",
  "key8": "5vn9d7nYLpGirkUno9TAjvUh3aV7odGTSXBGv32PSKQcvjvYDw1jUK1iRpZ4ZNteTzNsiW8Q6P2UXb2J1a8zYmjw",
  "key9": "4QdpMXGJX2dJz5JD8TCKva99wz13secxa8zncN7Gskqtb7TwFFg3WAEcMPL3UDUjhJEDCpWc4hUN4hQicvAshiwu",
  "key10": "3iWspDDpT14Emp25a7v8SdkfmpTVjMnfYzyJTK1BYbQe4teZWZ3oU1tJj6vRbyASvBWARVuqgNPesP6jDZoJmkAF",
  "key11": "5JY2YLx9eTGLt67nermQMQqqr3pck4RZxt3HqohCU4YmJrchZbgi1v2vK9CA8Sts68aFkZkmZqqgL8MQwi8RZ7ez",
  "key12": "5BWcXZpjroXV1F4PTWJZoJ7Hpztxm5smpk3TnS51J9VZSShQ1FeERfxsUnYg9tJoKZVFmA1KFzAbafc3rYtu1A6A",
  "key13": "5XSEupqKRfiTtk2F8AC4HfVJFAQoixfaTGy6NfVf8J9ZnYf8M4K51K8yLxT7zSt34Pmk4JqBwsp4iqGxJX4iGtM8",
  "key14": "2cJt9WujzBVny7xzASa9jsAVztTxRECrRrGcu1pqz1sE4B9rDXVoeJJtagarv3kDJakQqrfgBmwiN2KhKCaHWDEQ",
  "key15": "2mtPAT6NGwci46etuBpfdRpjBGfCyn6JHksXwySqneUV2nG68EK6NdcTSQasLJNhCfCf3KRCtMzrkPTPH8fLHsBm",
  "key16": "4vd5xaYqE24mK4B8QRkvMTG5w6CmZzZSF3DTB52rzAEn7VdSyyPdGCZdBVELJFW2DosQAZBtAgWcfX9uV8ice9Zc",
  "key17": "TAf1g7Bdzy5UPKy6VEirFvj3we7R8bAGVFwXKDdjUTtjDZDPY3T1XZJ3rPiRATCuC4WDfceVfDPj6GP526eywPM",
  "key18": "3guofyWVYuVfW4ReQJ54mnTomvZhxmT8z5WJ7LXBK8CLQ6senwmQkQEi5ViNcg3tZbvVJVanJnuR8pAai26VzpXY",
  "key19": "7B1neJ1p9EHur7DAixMPkCupKgdjeub91BWJAGwtNeUxuVEYmNaWcq8GdfgeMcj4uLXos4wegDck1RLBkc84kLk",
  "key20": "C6rtoYraWHTzDXt519feeKsYhixCkAoJFWyuTCJGsqtg597UcU7QbiKu7nsQBfBn2jAF3RtknaLmAK1gngNKR3P",
  "key21": "4D2W273LCgfUgEBHGWpHKFpbkM5eyCBK7FbTFvFN244TiM6MA9gNtKW5VWYgEtMt9HGiRegWmC564TN8fEK3EAam",
  "key22": "96bwYyns49c5tF7XEzTctbMaSvWPSbizE1gpASjSVFkBWY8uGSwk8UyBCmTWGoYMV7WqyJR2zUbhMxrcbUNCtwH",
  "key23": "2GtKyBbPvYCDU7WXrc5dtncRAfRtcPaHy7Htn7e6zfTDDLqboNSrdn8A5cYWzibvvPmFFC4sUisuvwHNXvmQxpoW",
  "key24": "dMuDygVifTBdtTAJ33efw2bBTAikWMwdfZyWAN7GJBF4tavavgnhgPkCJQhH4dDuXs2dxVJHjNPpESYq7UxWMvY",
  "key25": "5oRX3DutiSDhzujsDadBUD3Xy79AXN6YxzAoeQWfcxBeLya8KJak9CTz5DzUf4p3gHbwFcYAQRgYyDJNqj3M2jKL",
  "key26": "5CFdvPVceUgqho8PJEjxCGwBJnxmZhDpn1BhYP9EYL3ZzqYfrUuCEy7MsRCrWVtz26uD6LApzbTtGZQb4wxHBuxt",
  "key27": "4F2Y74kJ2E3FWiHB5YYo4i9r215zFK7SskxBrVi2U2H4ecTAvcyPA7Jpy74WVN1MY2XxkF52kuieRBvvyq34byiK",
  "key28": "5pxgTYjAcgTkG6DXFshR46Qu7kQcCczjK6LLtoXW39fYL68HC3Sxc4uy81zoNaVsthg95NZUTuHGHqogz434uRh3",
  "key29": "5sepzYm4WfrGxkvuYLTNVX7VRQXqCQodHhoUMRYSp9D9Dy6qzuZFDvZs6Q7sms34Gdv4Yq4QhyazBK8M2fDNo8vS",
  "key30": "2ArNvzuv9kt6o6CVjCBytqqfeKYV7aAWDMWt2Ba3eATmJoaUGKYGYyZG48n5gwsKNyiA34H5UNp9JYRBmXcYC3Py",
  "key31": "4jjW2Y3Z5UVPDb1cM5FrXmp5LRwMr9ruzCmFc8TZ8DmNpuqVAaHC1becM2BA9zNwHf1bHGViFtm2ZzVnuedXQ7KP",
  "key32": "1UJFdkLQ15FCh4kW5Wr9xiR8Z3irgQ8R8HUTRpVdkb9ZnCMeWq1mPHNKiccAzhULJZzwazns56RknNWfDkYWr8e",
  "key33": "2RBSgSAikb7S1nJYur7aZTAMNbeJVa57b4JA1gBLpjhiqsGGKkVYFo3R9Pg3LQQetHMFp9dHsHTPgVcF14LdciNR",
  "key34": "4jsibVivM7dLfZEfpe1Z3Zgw9xcuPEaNdSTeH3NDXoSagt6vNecv8hppG6cvCqpr2K8ndjubfMu79VzvSVvGqXKG",
  "key35": "5682M7YxLXiUtNUUo5JSraMvakjE8xqGsgV7Bzswfyp6gWW7Px3mkfrbdWtKFAkxjkpqy7XCdKnRkJ15BymGBR83",
  "key36": "4bedbNMHsrVaRxpdwzuQ2jPXC92w3Smk6BAuwUapeprBZUs6ViVDs4hMgsEveTp89wEeynQD6puSJtznKdpd16US",
  "key37": "44b6d9bAjwFFJLcENKZ73YZGyJ7NGwfBun3Ryq35WVuRFMvqepgdDWqd3Le9iLTuRj6iSDcyD3X4jYWkiP7QGkag",
  "key38": "2J6qgKFodzAQ2jxQiqM63UoDWE3deCT7GgxRb9LktWXGLnsMibNzv8jtNE4w2tdmJdLfkSGkgVmtkQ6Jp22omzYJ",
  "key39": "phMaxb8Z9HH4HCGzKo7EP1aRj7ZjSPdfevNLz9sVCv1DPun5P6RysCtsZtE2PNjMVWnY1hx5UctypeJ5oSTgdcS",
  "key40": "3xMrqUPruqTzU6dpb23N1zLBtuJAVoLBDnG8sgEJinrx7fqTwir6UUGNWcA4ER389sU8djQNwnGPNR4rPGwo84nb",
  "key41": "22DE7quvCkknkBv5fnEc3Bm6DtQxorHREZ13Cgzwzc8iqmdGFn4nEbwAoXkjYcjGcFhhAzhwxvmNeV2scBpwKtsN",
  "key42": "3Ek1LdmeiZBxcefeF6VGUhMy3M2FLtzEE82fCt5xBnjQQzQo6dkK7AZLXtQxjzGYjTkE3qBHfPB5tCSfo7SCEcwT",
  "key43": "4NkmHB3DGNHMegYEcdLQ1ccL7YCRWJWXeBZdCBaroeKWzH4B25Pqrs46nYARw37CQoNvMa5t3HL69w1MD9mcN6Ey",
  "key44": "4juhUUAXad1psXyc6c3eNfZpaM53tqtMKmPXLNzCWHS4Gbyeddvfb69LeoWLZ2GD6p3x3jo54CZBxoFdPyz6xiTQ",
  "key45": "2meR2Cka2ppvZK81For7NfzgaPw1cEWwPkmXY833pmsuXb9PnLS4GQxPPKAeHm2XGBpSEJMrvpAUckX92L57Z6cW"
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
