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
    "3iVwFbdHFXAv4iFrin2Qckp1WCubp2BFcrCNd9whYAJ3bwqijpLURHtvFShucWv3J9rQbUCKWNEJrocLfyy7zzoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWy8XLrMJPFcmQjgjVsmx15UeNujiD3GBUGT6nSfW7wMysrUJJ6qXHBNiUdBZ7aMf72DMmkbEvgjLVNvGkb6VEz",
  "key1": "dxkjHU7VceHesCvhmCrYHanxuSP7xJeKCHR2FCLS37u3xyvexRtca84tfyqPWCb37z1UcEgEDhf8cETNDTWeJT3",
  "key2": "3fYkzkQRBogvLvAZEGivv1FctavECAo3q8X8GSZfUXBYPQDEFVUJ55KwwLyJbvn6A4CzSgZJNZjHNBb8UmGyva5v",
  "key3": "4HURon2piu545dGiqRiJ5XTafYCaqZudzuXnMfbjTwWgaJkixizNVAnnjXdTn3ohu4izC3n8YTsgyCbJDHwBHkkA",
  "key4": "5Um4adEwxzkaTtSRtMySbfuumppXN1bPekb95WLW8sMvMGpTpGVQunhN78QbyYtyyKE7XeN3jreb6Jf9e9a5ToXJ",
  "key5": "bZwZFRKdcxnY2FaJ58AZzway7r1cwm2u4SeX4m5j2DkNPkWiZZko3x9aM23bUjg2AfEwxwVjrGeUEPnZFg4xLbk",
  "key6": "64YdESJQZMqSh7KwfwddYXZoPofZZQUKnwfAcXfvpD9iA1A9GAPky2p8PSRkTWcNsD4pV4ADP8v14G8K3jKagJZH",
  "key7": "5A3PxZ5rQVwz6mtWbmwBU2VmyHDdx1WKBbiE5aqzzewcUPdZ9Dxk544EPnWdCcHnzG4gKCUsThdavnZwDpZXfp1v",
  "key8": "5pAsvW8Jza54VkeSypDMz1LcbcTE1HdcXfXLqqLvN1sJC3LTWxEAKrFjZdDgWEcXwVx1vqu1ngUfCHwJLEv7GjQd",
  "key9": "4NhBwXn7cnqaRDiDYkACh3gJa7Pjtf6CehW3iRQnjYTsBxXWATKFcZn3zquuTCDYVLiHbtHtwyAiMZErPkCZaX3z",
  "key10": "4U63RqTmDgeDmqnF6gyA4hiRNFrMXNu1E6Cgyjtb3JmP22Y5PDY3NAkFXsyDjkVGpSBm9KPRqQucRBscQXCswF5o",
  "key11": "62ZiVxhMg1pojvGBFrJ1f11VmYTwVzzMuwD5z777uuwTnxP2hm2nxzL2M36x7fi4i9yRKj6kBfxE5wBobzhSmKbU",
  "key12": "5wHgu8AyaegC8dya9YRWxzkEFJvbwEkWLdzRvTS9dKxgxPmbE3EbCVXdLGfLn7dZwB7f33M2natVhsoWYuaN3Vdh",
  "key13": "2KKPkcJvCvPPF3AikyWPqP5wT6KyqFMjGDNtpB7xR9yYn17Aff5tQ8EB5is83VizoLYYM5BhenHesbo3dsZ7VK4H",
  "key14": "3aVuCnnBm8ToCGAB8DPKv29WRVAkPyXFewKAgLSvv7zFqtxA2KAqwW8kppX71SN3QBWKCJ6iYQduGEeYiXsipgEZ",
  "key15": "55TkMrXDZ6qYsSGHWRs8qBNi2vPY3epDz5BLUxavbzADc6TogYRpPSqvmCr8q5EDMKbSFoRK5FXKvtjPaQoyY496",
  "key16": "53HENFhysbeTUA8LFFg4fVVBJUhmvWd7eCRAejAxy6drXbKP8MK3msSKosY4fHZ26cBS3LiMMpSGRcZg132Zu9V9",
  "key17": "5U2uTfZG1kis5EYW11TvjJHbK77n5srs2WkRuj3RaGWqtJ12XvJCHmQCYJDbbpu98mxPwSPUe2Aa65e37pqTNdKn",
  "key18": "2sGFkvABHabdYvWyMoG3RWmouvJv57GdP5DjTmbXzoBGtWyZwSQCpkd6aFWxEcY8uKxCaBvmyu61BBBxAr6u11Dk",
  "key19": "2dJQcABmpk2JaFbZEqLHt8wrpRQTZxZHPiVnQ1zRJvruSQeHzCfdppT2gtcPcc95YorSbkbHBb1KexJmMVKeZHEC",
  "key20": "3UVwwQzDffymVQdDgbH8hf7ZJBXngnvshRNWWuYLPdC3e4g6UT6z1iJTbuwTVhfMpWe6RK8Q2Zt8DejsUDkM4xWh",
  "key21": "ffXwZuZVW9ugy9CXEKCB3Py9TDUwpG57jeyUk7ZvDZ3z48fvVtwTZHTypueHoKiGwXLCydTqJVvyaMJ33iRcKCz",
  "key22": "G2qX2rxxxyY5P77usVyCiqNsdQ4HBYAZbbbbpzaS8bPat1zS8foaBPghJYq13r5RhyTSLEwtUAtyd5DHzURqPBs",
  "key23": "CCuoTuLQ94P86WGkQQQmveo4en1D6sLbkosW873mC4JUZHXcoSp5wYQ8cDeBggL71zzT8PBrg96xrJcVD8Lb4r4",
  "key24": "2PJhnCiK8ZejjotMUaCTx5A96TnWrCiRPCQH54Yb8EMUBW92VxDxECkqjPPX7QrwhWEpp3uTPsqaRUQz6Ktuo5ab",
  "key25": "2LXFFFofnVegs2omTzd8hCcGbSQuA4wrviMYTcewX5o6WiD4upzRaky5sa1v6YSz4981nduTzWSLF6wVJv9NZWki",
  "key26": "JktbpcXcMc5XMmqGh2V2mRq9zkYvMsxH6vmECPT9nXS9xnCvKEkPqw8LXz7ku1dVB6ArZVawbDdirPDF259DLdp",
  "key27": "86F4punTpQ586obts6o3HZoT998dSmxNRCrCZuHasVr4R3fUmFvRfC8P7epPSURQBd7H6godQKcNuv3zvYBYYbn",
  "key28": "3cokviy8AJNmfSuqyTqRmiBqeGjPqbxmx8KCMXQEfKQYMJjBCxKGFSK3aXB3WaRYUztXvdNfzp811EmMgorUR9Vj",
  "key29": "2WN7byrrKn1enbgDtjLbewusU2H8GE6jbc38TLxkHGawD5iXfKav24S3mfiCMayAmsbWBSzB6rNTumJ9SSrEuZcJ"
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
