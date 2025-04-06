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
    "3HxtFunmkHPnvdsG1g4gfBCAF6ZXtM5g2GoHkDbryGPJCPQfBoQLqyv4g6XnPA4KDsZy7RoMtvWxQjCo2HmsnJKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHHUXYLyrES5wn3roCT7yQQVmkr4xwXk8nKEcp5MCWfTFLTjVW2vFUh62hrQi8fxSzd3LMWSa1uiGVocue3U5KV",
  "key1": "2q5DhSHqa8RZXTp27ujC1dLspB7mcuf8dzBNmtNemW2PnSD4aqJJMSAQPGRCcU4zsmdjqMHL1akv6i8JfGgUSNSu",
  "key2": "4WivyFxq9TW7x2QUTNbjSpU5PdHdVJ5AjxFJhMqdm1LGouBf6uxZ8bCFoLzaHeDA5apJfXdqS5F6CJ19mVwAtK6q",
  "key3": "4nupXCjaGVGqTxsqVvwA1tRifjTNBuqEgM3zSrTrmjGDiZKcXo3yzcSEQ7XTgHnryYdCHoM7ix168uR2jiLmrpLo",
  "key4": "54CQbTMs5ShVAiHJMj2tvTYDTZehWyqU1UyWCV2vDcCMG9oFRCbZ6j1fesBQnncT4YKD19hGgXqN8MjpUXix6Vhv",
  "key5": "2PgMwVTp3JoA76oKa4rfSH4DGkgKpphofssWiB46KMkCHH3FGeKZDviXHYC27WEuLep3rr1iCyunNCRB3vErHs8q",
  "key6": "XxpcfAAjAKE4gSYScHMTxFdBKLmciE9JhD52MupbkfqPztHAfi8MVYje4ejVu3CSALqffCpiQAPwGgrsgQHtvXw",
  "key7": "4w3e7fEcDQuW8YH4zKRsH9acJMhodSDfbQ7HD6XuKQJNu3BUboikYgWuGjuMVzb5zqjrXhHQ6qAGkagepPHvAgpn",
  "key8": "4NcSJW5EuP9X3tLgkUCNXa1ZbGpm1wnCt148eYWYzg1WpQBMVS2Y4Vy6K1Hq1mwDTitM1dZAcqyvkwuzYg1yoCn8",
  "key9": "aUjKAQ7jPvgLroj8PpfXAinYTRhBHRboYNkE7dfYZ3ARnXipJQKQNMw6Yeq3UU9jS58W1bYQDuDxE7CdYpNAnLc",
  "key10": "3wSz4X8Q4SAnecEvf9UeGfj7zurjHUD9X144YieEDaiQoZwQkZhfwP2pZ8ZXfMwxhqAaSipT6iwC6oTLfunEDTLR",
  "key11": "5CE5ktKBei48X9WySVLFVbZxXeaYAXb2ms8eN7ukTfsXLiTbHPAzWn2vy7iRqpMR23n8KaTEWGtY88qxR9HJvoi4",
  "key12": "4XgvHex1Dobkw1tVwrCKuTVY2mEubrBMZqtCLkFtfTHW6LfUncmAK9bjpvVZGBp4F5cdq6xr5iXU2neU7fTzLSwV",
  "key13": "7nP2SoTMhMUNfp4PwwFEa6iLTwew4ZGxZnjcb2muupJ7pAndxVML5DqZUHaJ9gTGZo3JpLfiLAyhqvZLGwUy4Xf",
  "key14": "2im7S9PCfRYwQeeqWVH7kKqNm8gNf3tihJb7Cjos4coSyrukG6QL5QLpxpk68u3x5WgcDRZ3Ntp67FhN7R6CmZ96",
  "key15": "2s6qvWcsrqa6BXCzSafvzx3p91YZ6trDXZpNx3TDvjaSNscyF11SwVuvQS9DRVB43FDbugCN8ZTgLfYheS9ozZrf",
  "key16": "43TkFXUWF1LtGSRgS9J8YV7mLPrJRGVDgqHZWdwsAMnj7uEYSdTmbCPjoTxU3gVphmGz9o3h8s3He5SzwcLsv4DF",
  "key17": "2GwdPCuvSzZTZcbHMVPudecjKK2WpUYrwxMe2dhpFW81T5dCwYndsGa8MjkmbpMoes8thtUvDAWgNCnRmZ5HvRpR",
  "key18": "MFRBYL3dLVwRRHW5R38kgUmATqcyCHHWsYn1KbJAxS5TGAsZ3expUGwu7nopfmmfLjKMhjx6qMGcRXqe7LfDvWA",
  "key19": "3KnytRpXUPzn7uGJpjcmbrXWb4acpgekBmmQNXK5Aj3T7nVXU5GzjzsweqsreThgYkyZ7mXgyQqAL1R4mp8n856d",
  "key20": "3yZZm4KSLXgV62UKFs7SF3kWwdPiGzjB6eHSZo1MkwRzEexvnzAScU5xwAMPmMvqjMUEycK6jcd6okv3ZxGgbceq",
  "key21": "3obq9qna1vSsxPZguv6fDzQFG9cDpxZocfpvKCRScjNT1gCnAqGMYCigiNAWS48CLWhvhMDKm8eYmFqsaLcMfe16",
  "key22": "3yYQL1QW62XwVEVGpXjTGHmoLJkBoGVr2fgAhbUoGEMEBTtr9pw6VdpdjA5NUogAcnMhEAEZHMTyequLiSqhnqsp",
  "key23": "3CwjmnjnRivk5EUcjosvPgRfVwJdtm3ZJiisYgpgBx7H6zZ5YrasGF1tpv5pdkPzZKWDrogKTFFZuGPih9tXce9c",
  "key24": "4SRdVTMa2DQWnC2CNMSC8pCLLhQRWTPz44KFH2QE6oZWB15BLivUEmZynB2GoifbaenWK7Z7pXkfS62py3HgbArr",
  "key25": "3FPjKN3i2FzzM4hE5ttKhSurNfnZbAwx7P5dMvH7gLUSbzm4QdD7FsVu4AY94PMK5DxmqYxJpNJgkKVqKbkZRe63",
  "key26": "4g2feRQgWVocZxkXgpPa9cSu13SvRMCBsrugz9jgkWC1jLATDYUCxKVQ6oXJujwwq2Gf9B3LbbKVdheumtYnHcKQ",
  "key27": "4UZr8TPeAuEgzbo1Xx5oHyWCBvfkzSWeUHDbtcgDbTuxEQCZjWvjU8xFB4dFk1zfxN6dEeW2uhR3Trr7eRF5DV25",
  "key28": "34CAgVFKARy3fiBMvTMXYqx8rNyAb66RXqicju8Z5esnMqbcri9c1ENVZfz7Vx1utPj1vHvzNwFcmgWz52duqKPQ",
  "key29": "R2n4WMcW1GLmv8CQx443kT7D1McgkdsdTDcxRH3ckqkcfBf6Pis1sYuXCm174f6vS7ugPWJF8cv2DrcUthLw1aG",
  "key30": "4ngqSf6kAo5RkQotDcgqjsJJBvwYKYhmZjEQctbv3MTqgZ9TRuceaZyPPUpAH5qiPCMPf7MNXZK227osN5M29vfW",
  "key31": "ausoxkcADXaUsYjTTMtXRB1bhZXQcK5iShzMDFh3wegwm4yaA32VrLMC5pd9aQdyPdm8e2V8xP4c47QtTQ8EGJA"
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
