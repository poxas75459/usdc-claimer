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
    "45wFdjqpTZuDo8ZtdFJtF3KF1FnwZ3sRNY94bcwMZyAgddvBdcRULYGeU4i3xEcf6Sq2y5DA8Y1PaWVT35uMTA46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHceJuBFkmPQcboWNwh4r7k82whFRLi9yX84tjqNvqgQ6EHvRyrMqtLLS43h5gf54xdvTB6a629BnAYTbkwXKjr",
  "key1": "3tszfq9qzdYujVzjMD27ebLPdTqHcPzk3jEef1yv1qaDefRXGJZd5T4qnmd48wYpjuV1mwbQHvnYuw6pSwaE1smk",
  "key2": "3hCjpQsgxPSqs8UBE5SatcrkDZLueRiFnzPbafPaRDVXzhDafCiHHNrfrfSkfNCJpHgiXQmHuBay2BJU4doiHMj4",
  "key3": "2yeaFRs5qsoEtG9jtQHxQoXdLWRqqW3U5jkbt4fk8yrksNDhHMS2SSDk55i6ydJsm2eRqJqPS5cDynCfJsZTfjN7",
  "key4": "9djM21bqfrBrV2KpV54F7zNAE5canZ6U9JrtiQKEpBut8rZBKXQRytFs1wabc2JvNALCCaFA9XN3D2jvehgcanX",
  "key5": "Tq9Rk4m7SpTXZzxxHpadL27mGknF1T7Xo1j6B94yMLdNKfYNVX6KZbD2rdfZwzKbbazWK6vdJ2cqqALbzrNDjvk",
  "key6": "sarsC9dcAqVEStvsit2AgSJDV6twJAkNP19TXdbKiToHzAi5ABZPPqKaFVEzAZiTqMeUrN53U5kbQoK2U3MzgnB",
  "key7": "22ZTrKmshvbHy8JtYEmmYbU3BexDvH6vt1PkN6EcvZLhS9f81NjP5ZjZzF9DYCiCxAc2YBCsKpwqXUuR4Eteh7J4",
  "key8": "3zNtxV1kpS4CycicGqgjfBhm9KYoPYQE3oYfwFb7fRqx4v1EDja9EBW4DjPnA4czC6eEybEsSnTC5sriKxcBX8N",
  "key9": "3cR83pW9qN8UPsxkMUv88pJ7CfqkyrSa5ciLtgyfFEEoKbndPKbpNB5mKK5jrEKvG2SkmKn4SsXeWdPRaZH2S3Xd",
  "key10": "2hnFdfUSR72DA6JTwrMQ8Hu6iKAK6MFTDUAR3XNYavEFEbebwkwpPzvk3tE6R9ftZff9a1ytiURysw7T5yRoMBQN",
  "key11": "4wj2hTpTp8vJBnJr9MFsAixytRtofMRfhBPBjw7jUB28h2SyJ26CLetqH6yzxEGtxDPxVMQH1yq5Ec53uQyhYZsU",
  "key12": "5DkQcvWABvfdbn9qtA7EDhFouw4iECr5KKzNtevKYU7QrEy37GhN7ekCtzB37srEgoEkZSJpbb8WgDhnErC4C6Fx",
  "key13": "27AFr7QUBbcBci5iUtk4ptsVER4KepqFnUdFXevLgikP8KusCWZdaEuMbZN9MvGxkegG5BvRmbTjNhFrhjJwXLwL",
  "key14": "2zZpBitKX8nGpCpFVtgyow1n7mfUwhVEwNSVmJr59hdxsbcNbyV1W1kdb51A2AK7Wec4pwSCQg8B5fsWjm2oB3uD",
  "key15": "3NsHAmAujecMUa1PezdJiC9J9KNDKdKTyfGqZpQ7cipEVnC3KpGG3PqwGs6VKct3DNgoRapWpiFbzNchfeB6uWnd",
  "key16": "zTHzfo5WX3Y8bt9JuaX3aWKeFWY5zEn3RTJbNwfiwfd1QL26VKfqAY9KZM62CEuNxkj6XJzFLifx1xDcoWjsdtP",
  "key17": "5fJvxB74YWXtffYKH7WXVEMWCxJM9VJ5hN7TAB7bRd6C7cz23uvXWDTXtaZpRSRjD3qcuuZBEysMmoMSGh2A5Avn",
  "key18": "66iUcFHMjGmfTbPXKywMw5uithRak5zaAWE9Nc6Y7cqc69nC6iAmbjU33iPNN16YgcuYsjKFDMdkrjhZcJCnMPqo",
  "key19": "5aTjCqKVKqLwP4zudL2HWhERHZfxffFq48nY2sRaQoYipgwBNNhpLZBkeVi33AoeTkScNFphsQ8R7HvJF7hBoWbn",
  "key20": "WWodVo94rLGhwWjanRRzRiP71L3ebHWGZfK1sDw2YNpjJA5LqSXa1hKoxM2EsLqEnjiGXqikVCJrHdFjr4itnYx",
  "key21": "4BqTQQYcaL7uCv2utNdguEp6hoMMPxfify4ytq1HaBjWVy5Jto1gWaQYxc6WWnZkusSbexPMxTTJHFBKsmWcuZ1j",
  "key22": "4vHcUHchKp5HPrz3FH6171vT7t6iDtcTxtezVFYQNXwsQtouCT5ci7C6upWJxgwtyqTKnVsB1cYh6cXaZJaCWQ4y",
  "key23": "4A2NEw1SrxYZ4GEPLaA3FAj1bpC2KWBGsGK34HkCudbLczfGWiXRqpawGiYDbZGjSe9N54kxBQ5jVitW5RAb6FCZ",
  "key24": "3hDAd8seKQbRZ5WW1a3zmmF8HAE3Edmx5FAoNarsUVwGUM8xvHA98LYK8HErncN9jruAdqqZrKvDmauJ6WJ87aRZ",
  "key25": "4UjHvrfzwXUamvMyAvMuMXDxEJtHgz7pwVmU9ohk19oBdNTJfHTGEhErNsBCQ77WKXCbRjnXWmVoQU7fDoXV5FXP",
  "key26": "2nbwBm8r8X1hfivNN51ymn7XhmLUpD54KJSq58pvZgd1smKn85PskoR4AT34BgykLt5sx6qDorH7Jej8sena7Nxn",
  "key27": "35LdTsg2SyirZQ3Gh3FGy9whfhtWn2toneWyaor9qJVfps7KTfshgo1QBWF3A89MLar6DEY4sJB92hhx7KAHajWu",
  "key28": "3VqgLH9tgfzkRQ5mF6hfHYogxEiyqLLj8XbNf58YnWuMjeSLm3RRRfqcxmPUhFYqCJNT7MPdCuqCE7Fz71cZ9dSt",
  "key29": "4ycWLo86KuDK7a2Lk9a8wPKqdTTQfFpHxxmUxoFjBrVfA9k5A7VX8dPYBCCT8oKtFuCoaZhX6fGN324ZC5acRBZZ",
  "key30": "32icrodKe1t1egs1pXfbbQowZzoWSZXLQ3VjMLK42Paa1y6mgFsRtVFj7LxkhBgV3XPzGiWsB75WV8hcgvRsDEdr",
  "key31": "2qihJiRsLmsF3DiCibM4hE8xR8Gy6bDMzinmnM7cfHQyryqLgDv6qkvAwEuhak6syvrMHw6CfDL1spKwbTkeZFkZ",
  "key32": "wLGFbV82t2ofhcC79tBqHfHAeBdXAEsNQizg7VYVAsGK3phoyioiAjfRyJpfX2TwHcCosEfXCBXToFWFoSjciuG",
  "key33": "4DR5rh44eTG1wYTXPjmE9DpVLRGgpGrErgDzZ1XpNAzm5wJgatWbyKG3Tdxawnn9ETL2pseQyQxh3kA8jpiojor4",
  "key34": "2cAFFQAWf9q74RRAkVSzynUZUcxRxnvwFum34tyk5qDzau68d1DqZEVSwAR6AXPeTFYStFjDtWtwqVUDW46jsafY",
  "key35": "4g2rj7MCym21touA9gxb1JrpbutmyEGihE8DNBvhdJj4HLaKXWecW95rMnxY84nz913qSAeerMxvUBsjxNwwQ9Co",
  "key36": "5RVJykPyzuPAqu51tBvDPLPrTDQKxC8H2VBbRCEsM1xBmXihp6tfFBKKxQhGLbUtwP4zUyg722FSoczRw8rRnwfF",
  "key37": "3DJ9teL8psBFUcziMu9xpj1GifRmEBmRZHQptG7nKp2ZLdcKm9rsHk84BuJxopkK81QY3dptujGopyxAPypNwLyM",
  "key38": "41yh7ThX6z41rQJi6Z2NU3vWBQfdnMY22k9BUopmwgGLEdMWpGAawE3BGhDLerpRTu8Utj8aqaiSw4Qpz1SiehHd",
  "key39": "2DYnqd4ZQ8SBirRGeVLXkUUVb1HM8ue91YtyzYixCQEPjqesKBjwHGxTb5DJNNbJXUcHUjCx6zr5P9DWQ9oWBKPA",
  "key40": "5jQgTKwb6LYmvEG5NXPCjJTQkKGFF3xhW5QyJ7hcrjh4fmwDx3gKfQgxbxMeB25KJx9of7iWAnVqXrm7Hqso4vZ",
  "key41": "VLufrDPq3QyUWcqCN9mZdsBVsBwwDNKjmS49ZdWa71WVKwWb2dgupT5TLJriK73sR3aeSCnRxgyrwxzF4knE2oN",
  "key42": "8SWcX9WcfuuQf31CNG6xsCjZJFT65MaAgAyxmTbafuw8xREi29nmoy26LaJFVubExRSfxK5wHxWAnW6U2vccpXA",
  "key43": "41QV2cxdq9Lfa8ti97g6uq43oDHCvxxzkJh1umwDXbFjAGvGAzAYqifPxboHe21QeZM6qBqeQp3rKcx9EnA95J5J",
  "key44": "43vMv2GwhJN5AmNwWU8rrAD3zjiDEQbSFL7fG3g6xuyXrx3Z7LB5FKMFtiPzmeg168fWqiNdG39bHBuNi2WtmebY"
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
