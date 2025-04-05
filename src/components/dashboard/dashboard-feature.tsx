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
    "4sG7gNqgbd6Xg3hB9S8KKoK7Zo6QppAtTSV5RGQKCbrTjsmhovRtfdbFtj26Sk1g6jXGSWTfFMhDihrt8g6kAd7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izX8pqqoXvTwKcWKy6vFvBunrS9MSyQyRNX7RzGrJ52sLKofwRm9UTTG2UMDuGibs6vhD29cFidyGiRyZjvhZ6Y",
  "key1": "2MtuuqozjuxRYPC9hW76kwgeWdxyAibZExA4YG59j4kpTCVrAKhUjL49NTinFGbcuYfBsH51FieRJWEUx9pcoWg4",
  "key2": "67LXeUu7HD3JX7hbJtsBGoLgD36qpwVpUQptNzwvp2iQ3BNmiTE6HKs4BJ6bpS9LadZtpMbRz1WoYJg6vB2Qrkxd",
  "key3": "2UV2xevCC17ynj6sPKcyZf533o17vjGtYBJYhTPca2NsGtDqjW1smyL8ZsBTHgfqEHseg8vse1x5xcZebENSE27R",
  "key4": "56zYhX4oipu5TZTtjwmezhMuTdA4gAfSPsjcywv9rfm3VNsBzHH5aPoF8CaGVDLanTQJZibAmktF9My9ZEryP4T8",
  "key5": "54Aws6vtzjAdgiCU6A9AUGkwCFHpbsQrrtdhDjq5pR3Fodha2LPsbBbSVdm5opksGYmu1QnnGCPq2XCa37A5ANMH",
  "key6": "4e1DMYGbRt5bfXEqGej1fnvrtmi1DmShSphFrajE52PknHYtYLEFJborU1Mys5pmCnjPuXj2rfNdEb38a39q8Tp9",
  "key7": "4SpDTr5dHYzf89CizEexicVQBRu2bbhcRkDqKRDE3oHtDJxcBb33ygSSnBYGFA3UqfWihK2Xm3n5yg7L6MhGGoAE",
  "key8": "59YHwQNHrPvepCCWGDWHZ7R7y7b4bFYijxtaUiPW1ogABvRso1zuUWsPE7qfhW2eAUZyPmXpAiA6kMno53h9mLM4",
  "key9": "38ZenXK35T7JmsBcd17Gj39k5HGbnXAJ4LZqwjssYPaik1JhnmR9Cpayvi4MzRjFkJvzQayYX2A2QcBResdDCNAY",
  "key10": "3E9JiDkZAwiCjUyhCRwew2hdte1E3xqn4yT4QRSBH2LeBrrA9ZErk5g6aUDxtLd98752gnKXbXszkuwcuhxLSdjZ",
  "key11": "L17LiryFctcf8cJDV97PyWNLNXPxfXmHCFwKub9cwFNPmy46AeGNNbBkDvWiAKSjLE3aXDv6p4NC9k4ZxC8YemN",
  "key12": "3fBPNdk3sQUtxXScx2TRXpUBRrocmkcBnuDF5BcDToMSN9DVYxJoAQQtGHVjZjMRGHYamSWH92reiNjfNKbjs7ZT",
  "key13": "4Jw9voGgKfKnWacdwLZsfYvAuGKDvg8h6wkZpqo2g4PiQfyrTqQ1R1hw5qbtpkdYTRygeCpi6SShSgxSkaiCqGUy",
  "key14": "4d3GKk5pSWoFjwHv5uXt5GVRZWtUbC4XSmQTAphXB4KvqxZp9DjQXW1hsfLugTJwPQp9s2bPzbQPj7xYAi3owhnE",
  "key15": "JUBpdyJRhUdgsrbNEUNQfuYDFy649RHudwBJtsfJ3ZTZR1uoH7LGiKERWftrJfrh5jUYec5f9oLxVLZ7Y27fuFo",
  "key16": "45GhgvxPj4RhgFEcpRDaVKzw4aQMuPW9jBJUqwuaVXbSqTpPnZu1aByzbfdYtWV3JU5xyR1TKd92ibDhnZszMRdE",
  "key17": "41EEgdocKtb7VeG1W2EJF2cze6iw5iD6awpqQPLbpnMDvjpeE4YnBegdRgcNnoWxxs9s5PJzbGw5BBVhafgnjMwn",
  "key18": "5dDw5sRY4wqBHefVcAntc4adDQhz2gXd27Ux7ncfVfbTbTKDbDNiUytwTGc3aWfbZdgni2z2nYSK4tSb64ZcVPAi",
  "key19": "3uzQmRkvQm5t2MQLqryUHv9PkAJsr8a6n9YsBDRj3Scpvk7XGw97GLKoMieP32kpTL717fXWp9rvsc192RRMYmAP",
  "key20": "21UyNYudL1gJkuPjrdZMh5oLWVzeunrZdMYpxiYTGdgtMoB8unX7KzLJutrCC2mZTVYGJu8kWDAg6Ujwn7qZmcyu",
  "key21": "5FS6A3WJKDkM5Zd1DfxA2vTD9Bu8xwQJogZE17LfZfnSv1vEhETtrmx8fGR675arcEjRW8iDtaTC2Q9wyVPQMA2T",
  "key22": "4KUdbJKQvwuxLSNDWwqppQnzp5EoSLdSUoY72u4hkBA5tvVzvN2ev1kLJ9HukDtuDumjS945JLTSSaGDJihwz2yz",
  "key23": "3EqfJFX4UGcEUohEKuHhJANk8Ns7tLLFwdd3tDeFKkqnhM6mPPQkGJ4qeybY4M1WfW7EjB1mhXi4g6hGLN32Ks7D",
  "key24": "67ACHnqP81sLxqvZE8MynSs83mouizRzEpo2TcPasJoEnkfiqhxVvk9Uxu44phGVR35HieN3xnJLU2Kzx65DKfsN",
  "key25": "614HHPEP3jBDuLcxaaqAHTkFn9epJLdmZ9J68CaGuzKsseLjPATM4WtMN4GcPjxDASZyEJeiBCf2ip83x3sYUzGy",
  "key26": "4RmpKg9c9EQuymTNCCBkAFyZzDu86bwpaXXLVgnoarThLPiAoJjdygTz6ndCu8y6Zzu5rSgyf4J8gmzHZKmvvqE2",
  "key27": "4ycnLLMs2SUui6Rx2vCST7SujpzYgxc9iBRr2eGeiVj15b4nkav9pbgVqNJxyripsK6zFrhofbXrsneQ5JmaYLb1",
  "key28": "GLUqaKFNoK479JQCoYer3RvNswWAaBmEXoq83Zb9QM4hu6RxHbwRcWEcXRrxnGpLvRTj6V4B4UJqDeErbmdQUW6",
  "key29": "2LsKAfnbaMMqbNuicUE99VWeSjKgeNj3gPPuVQLwty9oG7uk6tfmDKFWFgs8aAks95cHRVaEzKwPXP6dDJHQWSMi",
  "key30": "5YYAJhTyVGxU72DNkQLaxobiohsLqwtR3ckVg1qGUnR3fEqCbdHistZKpF4TYRgePjpHLWc6QayhpmLjH8WmPGPa",
  "key31": "3KSrXsVY7T8Dij6UgTgjruvT3qQCbda31U5jNM5hkAEHa8Gwe1hyNSzYBjbtykTJdNC8gxbP7EfVwL9y9EoVmZqN",
  "key32": "5ndDTfnrstW7wuPGCQZykRHcgYzG4fzQSoZXS1Fkp5QSXRAj1N6thktZyETrcepjJcBJxb6EoUEKmSZsKdbp48kc",
  "key33": "3ZyejMPMEc57MCMS79aX1jz6uvwrWEve5rfgoRA4DYyT6E8ygputCMXUv1ZNdTzKSA7Ugjsfw52i6k9P3eFZ6ExP",
  "key34": "4UVi8iKwxJ2H8G9TgiR1CmAd5pjL5LQw2mYAUWmtzpVwdqdanFheNNMKKWgoYXCRPGVXf12iKCi6EGZogMk2Nrrz",
  "key35": "3XHyfpEDnaazvy59hr7SKSBGqCfWtJPhU4mhSivKZFRYE62rNpX1bniGx9VBCHX4rBviujR1GZEVxRfUxQtCuKcr",
  "key36": "2ERLePNuSUX8QdEziLzAfpkVq2MVrCVxSWRqc5aqfQ2ZRy7KK156Xe3knuxrBRskPdpXFk9833uxjLbgyyX2RgZZ",
  "key37": "42Js1pE7kyp6k9tU7AdQduHjUVzbVQsHdc98VFMcakvFDniypCndd5BmbJbnVYprzeyNLpowFZFbLrFHg763y6ye",
  "key38": "4kwNCawgytqMh3YGXGqcr342Ce9YWdYbcFHpdujfivTejSepm8hMjfE2Lez3Xg52gm9TM2kNxxAAJkA2NpR3MTWk",
  "key39": "2xePS8CsZLTMfYpewwcnnjHtkfkHjmJtf92bA2BL76HjGMDzuq4znzowzqiZZnD1zavVqMjyVZUWWng34hZa6nGi"
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
