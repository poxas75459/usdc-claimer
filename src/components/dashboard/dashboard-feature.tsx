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
    "3eUJXCf1qrAsrzz4TacB12pJTfE1AiWvJQU3vwbG9gecvhFzwwL667gGgfvHCuwFFdDC9XwauqgMepTYwXotSsib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBa8XtPZ9L65RMmtXKezZUHAA6smLtpxxg1UTytYLNLCQwCyYs4iGJH6XpRCCVUCYUGxNUXs4HPpsN3qAMWcw62",
  "key1": "cCAy57GqKNwbcAjH8c8aY3CqrHg5npH4fFECTrZSSYxcb8y5ezwxbHVEzFzkxMiMJEwn12NeUqmKxz8bYQf4PgV",
  "key2": "5E6YG8rmoYfnt1ZJv4jUtf3RKb1nCedh8G3fmHYoXDmNwK8BL2eR41ZBB8gdzHDsa9rfbdv51qiv4asvFyk5CTDd",
  "key3": "23uSojNBGLmz8MF7YqUf6k67nr4kSzmUkRyUJ46Kziw1ZUAAfXXA3fJdZdPabZ1gn4reHbHwi3uNvQhe4aqNyAPp",
  "key4": "7CBVQVz4fEo69R27BwKUoiGn88a1Ta2o3zmTDbGB5K3vfA1sAjcuAV6i9xVsESyPp9LxKzfMeMCoZhYzrV4t7Hr",
  "key5": "tgNr6SfSR9R5GQYodqFSohnZC9iDxocBf9y8c8Cx6X46sh9Fky5sUEzEsb8QbALtX17VhtDY8cCW3XuJbSReMYE",
  "key6": "Jpg5eEeXjgPNQmKLqLgD139gRxgMm8Gt3WaCj4t7EVYtDETyUzTdWk9osoPD4eyFRa7ftJ1sFYiif8GFvSmuCRR",
  "key7": "2cP6oc64tyBSH8yaq5ChJr1KLC7YHFXx1pQrQQc7UeQZLVqzZxeaMGrcN41R7L3fZNZnx2Kka7CQ5UGCoabXCJDB",
  "key8": "cgs9tDHP6Wd9ne3BzCquanFH3tq8ssDez1maizB88eBuNsqEMRcEyar1cnb5zAJPCN6A7Zb4JPZzAsEvD62X1nj",
  "key9": "4fi3SyeTxw6nyfxVEZwtJiU2VXxKhcp1x91DiiLbHy1uJDN5EDNj2TCwJoQhRD1hiAriUHpJBokZEPDtGNFX5Uve",
  "key10": "3Tndc5in4hZqddUNbp6CSba8jKKeQ2VyxDiDSytgRTMtjbmcubYJ2hPNtX3hfqr4QJZhbdBJ4XtdbAKp9ra1LCFc",
  "key11": "cHLoi5YQ6j56kAWbTieK421pJVnQeZam1yYUtS8JnvqkKhwkjAKhsr8WRENQkWq4k7YAZTo223cVt1hMmpffmMY",
  "key12": "sdwW4soBGeJEso6b5AYSTdVoFCiYMVZeM4PCyT5FY169CqUbBbiATCxrm5QM1Yzgmbo7tabQ4rXNWhoGscU9q9e",
  "key13": "2Hd1ra6jBySVzbqiR31qh8ej5AzXHuyqxkWBLcoSWWR1iHiVr8JCV2tLga8vUK3DMoW6PyBJiDSExfLyDk3Prftw",
  "key14": "3ERt2DHLvGjCYNT5kihw7VuK38es2oR983DmY2p8imHAM7BDY5gnVUy7YcAb16cwGSkmWA6EnFm1rWkK1aJcZYz",
  "key15": "27Fiw1G9LsqoxijpEWGzeG7mF586b4JruFAGnbZa4gvaX97N7xvDkgwdnrApEh5hvdLiCh1niJMJREkUEjgq84j6",
  "key16": "4E77XZqmvGgSrWM8dqXPyLfe7a5HLmjeDNHsahshezkLd6mBtiZ4gmSkNoejQeAJjUCaDwk3ebUerDyK7ef8qc6Y",
  "key17": "4Hju8iM3f3rphBeZ8AG6WBvEV6gRs7wPJxvTsQvre6kcKxg4oqJ8Ydu63ANcbMcwbGkZiWGVVLEhKTX5HRMcDWnH",
  "key18": "5L3Ygsep8zy74aizTfY14XZrjSq7pxxmZAQqXLmqPm1N9KevNH7QKiZZ1jswCQnQzyDertR2XPaMu8TTS6TUrPE6",
  "key19": "3gZQEeAdfnvb3iWrs17HwmUpasw8YGjZ8pvLm9zK8bWWLimBNQGSCeQenLEHdXSEx5issFJwdz5BKHw2fXPVHkDW",
  "key20": "Qq6Bm75YH5UQT97cVU8NeW36n82qhDyy1fi6VvHdLTc7HqrrL1Pd9N7vBKmBos9FQEnygmZLPMxMWv2ZrK4gtzA",
  "key21": "4avzGtsbzSkrvV9c4K1TpFt4jUNow1hgdhDaevfomGGtksQoNKvocKW7F4aspUMFQzvMgDFWJPEQWCSEvkXzchpj",
  "key22": "4wVg41gUMzWMppRJn36JmqEnPTViFaCyt6X79trdQX1fWr8EQs3o8rzKsjVh85Y8t3AhPqY2cNziZUb4cnsyXr7m",
  "key23": "4q2d7eHNBizLinqxYZFYKT53MrDeBNoFQqKEgVoAjUJLKGWMgUGUJCHzZNL634nXwxpNHgGD97HKrZ2ZtZZaijUM",
  "key24": "49i5Z9BjCBxKPhrTjQEV65NKaMzKZC82p6XCSooXyV2pwNUqNgKuGQGvMmBKzvJXSdNHoUrmxQaM3hVR4dqkVN9p",
  "key25": "63Vg28eJoxvPjyMekdLgx9cCxKECTPB1GYVGfHAcuKK1Nxmb2B1BEUKVj3e8FkNfDDhWkTDM2AnocbogaDvavvsc",
  "key26": "3sbCnoarnYsHUED4LuHLhiV2CZbppdpt22LtR7WrADFci4oHTCsF7cvJLrR9UFCj94epjJCdACPbvBdKTH9pp1P",
  "key27": "4KmsM8ZsgrzmgAmo191LPPyE4y1D6hHtCfzLedtaNEyNg57BW7heQ5dPBdUdnWYjmxDCxHScLNPR2RhRep22i7at",
  "key28": "2pjLXSHb46Xa2nWHt1EMZmnrkSkFei2U9pLdsB4iSSYVnNM9tkTNVFitjw7Aa8Jgc2bmW85WjBM7F4WbNsRqUiJw",
  "key29": "2XVdc4S3E8tBk52Pb7nRmhsEuZrkSE6jVMEpHfnAeYEWgx9CJmnbynNfx4JcHR7huLcgveKW1VvLNx8xuReMvYsX",
  "key30": "67iTxhpknLLCxgdTFwH6AF1q1SkY1WJarGdzVhDLijeBCzZYUu3WvZY8JQhgyRdd39ppcPPD2um3F3K4NkZSR8dQ",
  "key31": "5vikP5GZvM2SpdNMWXwHU3YqNMJAzAdLQnbcpahGZRbzSWSz7Sbpw973EkfPacDapAvgJKFjiZQNvLWpDSc6rD8B",
  "key32": "2CWCPuUz1a9KomebXBbuTRZwzfgmGz2T8UrVmvGN6StFKhW3oVmfFVmMBXkkB9PKG8m6K6vR5e51D9pKzbAvzYD9",
  "key33": "3tnMrxD2jzKq2KDEWewYs6BD3DtEiUmY9F6x6HaivWnJtJiWHJ1GHDL9qFoYsQNPjtWNkqH1Kh5t1xYB8W2PLq9d",
  "key34": "3KqbVkJHBNmmbToMX2yzJzYch1YRHqYq27ok9xJxzvFXqCSEsPfEB4D4NV72cBsJW9Tf5eFtkPFe2CReCuXmAGQW",
  "key35": "219vHchdVF8wx3jyLYvfjLsrU7s1qqgBNFbqGdG1PuyuSEAbbLQXgG67Paa1d6FNFFhNKc9NcCwdnUMhKZPtF4vD"
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
