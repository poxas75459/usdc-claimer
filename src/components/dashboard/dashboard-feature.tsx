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
    "5i1XMtJcmkhychCLN1YoLEEzKdMtxpprR9Ar9enUFU9Vm5BLwrmSjyqokhYWs4hu6Qg2GCDiERN3P9GFhQsGp8GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3CM3kQpdC9k2Lc5SpbQ1tvDX9ZGe6vgnoraD5aC4wXfSfBJDhuPBCM3W7MsHsqqEnXAwVLJLP5WDUxCVoLYQyf",
  "key1": "r9HTdwVx7zoFjaMaoEQ3NXxvteU7hyPpvdpFLGr2csaZYLkfFuxzbQtJrcn11DpmD6DgiezMmBiZsLvvPSe16VD",
  "key2": "4xnrQHZGy7Go7zF6E3Fb9sUQD5bEnwVHJ8QG1cMsNafFbdW5UFNwVHB3ArBCLNa6FUcwrmM8r1fSo3JJncPirRpw",
  "key3": "4M9ck64tgp7bvqJWAvyAaXN1WbCvu5o6AwbJdAA77osDQTDP6FJdpJ65ziqoEwAf5xrG3qDy8FRiiUN3eVYMSi1w",
  "key4": "D33T38UECngeFXKtSokKU4Fq93UZ3QmucnUezYTKWrtKCFFGR4MMwn1nygRv27qQCyicwafQNp9DjFPnnnA51iy",
  "key5": "4KgxWd8dswcuc1YfRbo2fstY8oHg2RHXBfJPVTceaZn7bKAHUAJq7iTqb1qUBNvQf4r2mmpMSCNUziFVMcxcgQXs",
  "key6": "2QaY5gq2ZwtJpBq7u7DPYXM27w68smhm3vyb7PUzafUnLXX5HGz3HmRZyRVQ2c7op1CWyzfYHt3FX1iwGAUSrj4",
  "key7": "5rirsK1fRtNDvsKG7UwmmtBzzhXnXbR4m1n4B1HjeorC5i9XK5WbcWAFbEhHAbx9vaefgeGyeP6FaonSe5M26zU7",
  "key8": "5Z6KT2srAoCmpoopLiG39a49kZPAFNwx2F3U3wsSXaMhp2kTz8tkttcvarv3By7rSj2fSLrNzG7tZb2tLwHzTRxV",
  "key9": "D6CpY4DpnymZBbyf6TJ7CaiaofLYZdsqjpegkFvPL37nmBrWpjPEYhReoUstHHQFdRvuz24iWL4SLF9U9J5LdzR",
  "key10": "2YstNBU5v7vFvECrcZQ7azQJTvk3MGXXEgeX3EK4mP5YJHPUjNTxNTiRQV9Hi5o69YWm2BC424a1XSjMaPqfFQiJ",
  "key11": "4ExNyfNZm7egH56bxnRKZhEaKHEQxsFGSxhG5zkvdGYQrLTWMEv7i5UJpUM9Hx2C4rz6Ye76rAjQjNLAF6tSJn7U",
  "key12": "krUYDFbfMnFxqVkmBRciTEVJLRUGpRkh4yhd4sY1JkECzh1erDXnzto8E5vZCGwMv7g5y2MibJp3oumXnH8oaz5",
  "key13": "RXvQaTLF8qKh3CiHfgBf74NLodEit4Wu3JNiqVYRk9BhMxZt7SBRR6k7JF8cxKWwMhX9UzhS6BSBqvj21QiV8qG",
  "key14": "3HJqAwHx1EGKzEPCMD2bEe3fW76w4rPVJmYpMs1Dyep6ksV3nGjsLc9Ue5Rxpg21pt9jgsMTaeesuP6pu55DEXnY",
  "key15": "mZDpcPszVjKjn5DDCjmmrNmkk2NjvtNEhU5h6PpyFwqsEaVMDWfyFYmQzGPMbc6RCdhv1D4pg1tv1D4ajhzfRRP",
  "key16": "3NyA3aQta5PXBnLL1NpyK18nAsFUsi5n1pRB4gimEejutFEkWyEHydsMkFMqYutcVncRrjrH6K7MJwV8YgaqkuQb",
  "key17": "4Jamd2EZeKFPf1YnKRfiyYTHSb9kJKJqUHGfftnHAruTNm8eQphvYt6zZtaqBTUX3EhLRrMynAmHpFSwaJT5p3ko",
  "key18": "3WmcJ2Pf1tetZiDdnMCjYf8QmxtRGK8jhZVzXy8pMnT1oyoo3HuCmXxfuFx8UEepMHfumNfhG5Cg1BREGtSy3jv5",
  "key19": "3VsaK6WRKhH27Vdpynuo1upVa4hVbpHbtjFb4RNdXKSJA9UjKWz23P5BEVkqojnyBDW5usE5FCgk3aRqeKYvn8j5",
  "key20": "2BRGdbtLZiN36VoGeLnscaePCEQ3XM4aE6urHFf9qdyo7uu6HG4Wnsz95z9HDZQ5q4hVnVJDrd8sgsEe5Fr7U6vB",
  "key21": "wop62CqjjpgUi6ceU6H65xov6j4jpb7S18Y3HoFiMjyUfJEHYMSgEABGLu6rQokaJk9TbJD8wqFWy46VG5QjirZ",
  "key22": "2T8T8TNnMyoeufz47rmEgQKoLYRxtSnJhzynqg5XjdztjEDZsQ4QLck55AKriC8hQweZQQQjDXQ92vHJWzcV4eBW",
  "key23": "2p7XjiuC1AgnQ7mbiiBqjSCDJoMVzBBoyeUzLcVVHroaiM4nDXztkn7ybA5V12KAP5qz2DWRNyjgSWHMnvM6QAyg",
  "key24": "3krFVCCG6LLzbqMLTwi3CrNFeB4e4o89SCH1vDRUAiX5PBLkQfrhjncroYGnLh3zByfAWysP34htVbxYrNA7f6Jm",
  "key25": "4uxSF2QTgBWKsA7horaE9FRqrmNa9PzWCJ6cTvuuF8KGWD3MJbQW9yLuWwb6H5uVr2X5RCaE65bBhBA3da6yE4wa",
  "key26": "3UdEUm1HcUa2ry9SQPAsQ1mYGoWLM3Jmyo9pzFSeNSxrneUhbkPxcg92TWVpR2e7KgeyooYytdGjL4cpTv59ux5",
  "key27": "s8qnfSQYmEVAMSnkhWSgZxAmz3wDgJqhr6Lim72u5w3yUEQkbfKbmPM2L36wYa66zmCMVxJY7pPTkrnM6ezYwv1",
  "key28": "EjmLZfqNaYSWaL5iBm728DiKCyfv23pjeNua7aYNL2FLUMzFzxTakpAtMWut8d8AQNt5hmbHAtEmnRZ3uxH5Vk5",
  "key29": "3XjbzgoBa7Q16DQrHWo4gWUcggGJXV7nyWUZXoRhSMfxZSK6MHh9DyMbM8xgz9Pc7PCV6NGUu2C2XoAFbw93LuY6",
  "key30": "24wRCDzDitER7royv7X8x2HBpF56NaXh9fJAdtDvFBDGR1dJ9kv1K4H3tTG2TSXpEiojKWzgVoyn7f9puWFeWXp5",
  "key31": "5tCS1jjvLKWPmtGkdjeDp4wwdNsvkfCiKsCGUn4jiq7fTwWE7YuknnmBLg1amSdzAgZnqfP1aZWE2gY6Cft9jRgw",
  "key32": "4DQ6FEHmK4sebQ3PGi95eTWMYXm4VhCeonwa5a6uTjXfiaNRVMSspd74QPuNVS6DhyS5kMLZwp5h19CWmZWQgWA3",
  "key33": "4cLA3EeQNgC4VQhSvedQ6ypTRqHHwHzF78vimq5m1cLrZwiDG7ec8rdNkW6DPXE4iXGnbxrrbHNx1ULcazZ8x5de",
  "key34": "3tBYbWwy8mmtFs6BWShV24yekhugFo8q5SMwhRpmQ2v819gWQdJMEmGndXn3yg29v3j9T3AB8f819F5k5Fc1RB4",
  "key35": "5am9XzvjNmekscCQBfD5GaK9Zcm8p2PFtq5qxT5htYaDtFsLpvndpQTv58idzuYDhTzFqDyd5iYtc8orLuRwgvWs",
  "key36": "4g9iiqi82xWK37PvsiM2fwY9BthDEgdBnCpivcmv122XUYpE5VLZ3TKhHGBKaJEA3GXJhRf9VTZrmN2XoaCB8LdG",
  "key37": "2m6iymhznwTRNiuuZMzLYSTK5pdh4FSUGoQrzGEtoW81mrxAb9yA5iYjTb9mANAHT2ekvmw9egBKZVbhGE3trT9D",
  "key38": "59L68SoTWbvsrQ8WzDp2ysKpkadKJFGAVQ9gWxn16pzgJxvoou8MFqDC1spFjB2XkgbWCzkG9ZhQFGRvSPM7a85M",
  "key39": "2kdTtdn3B1WWMihBzVVSXTpUigPkjA48mbKvTyoKCiaAgyxBrK4ntX9V5mHKXftdhCiWx89egnPeidQEBUsaNbfM",
  "key40": "4W9eCUE6bZyVW3UZJMHzn9vs324WRHXqeZZKaJxQCDwWjWoyP6zQaJEH68mnTaCDPsvVAu2s2pHJtMkcSrpq2VHq"
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
