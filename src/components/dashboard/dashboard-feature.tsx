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
    "5hnkGTcFFa1odWDpyMcmg14X21EBxghtLw5tJPt645CWy7WZsXMBWctaGKvu8XKjeLLFxuWtLWvsKu5gZ8sbrdha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rmouhcBjjxrQ1thbJ5UMEsNdSoR6uaCSP6Ny8RFTnXiw5e2MiUVVXo8VPMbkKBtLcwJyfPVVe5YVp6LxubdCvr",
  "key1": "4FC12cjwCpBGAzwzrH3VQsjoS42NqMwcubpqQgqonEaZLWXYiniQJ78KF4Uqqp7MjbrdXYYguJW1bHmt8neuPe1S",
  "key2": "23P95Be92qVXua77aoAAwvLxYTNtCrER7qk7CJdckCnaci6TgdCk24RWyiRRoP8AqDfnT1mGyGMajnio5JmGx3FS",
  "key3": "2v4ivkmeLygojPRDMbTamwuSHHk3uYMGP9HH5PFCfrSNUCEKEgHy7m4G45JZnv1UQVsSyj2ZT8mJjBxFuEqUQ5id",
  "key4": "2tdsS4ALkLuJXiGB3s7Nuz9eBzq3bwpKCBw1ZYg31u4zMhcyZ1me5bD5Y3BR9UwrbV5MJ3jCmZanF5BERe5hp8tu",
  "key5": "3PcSakXZcaE6SoBqPs8Y7C84DJnp6uQoSZNjk5kN1qt57bGSfE9s7w2fghqTLBCPaaXsQpgSdiCafsKU4Rmw2BX5",
  "key6": "4dFP6urnnUDbjgbZjyBLiaKLRdgCQ4VuAZtqYXG75atsQwzK82tSk5Bh9LgnLPr9mo2gbeiJhd6KgP61qxpXSopR",
  "key7": "2DnitVCvbt8zDDua71bkmqd71ZK81ziPkwGAhzsG5QqRUoUWLYXRAJ92LE2uQpNQtkKjsL5XEPPWAQYcj6R2cQr9",
  "key8": "kLMB112FqzmxDsQ43C4oYjHWA7Btx2AeuuFebUVfN4pR4rj4Yier4odYzrjeFZGXzHRUuD1zymMTbxbF9XDu9Pq",
  "key9": "4szTfxwBedT1fqemd7xWxWvzGi7GjoWsVLEYivXcjBNdKM6ayfFD74DV99ZPujYmCwG1ddG5Vghf3Gqeoubh47L8",
  "key10": "2gTtNLXgn4WYqYsoDsRrdNY9D2ko9hUN5SGksJb5ZEq3gqzYtbhQowKCCuEgD5qZz8kVFP5Rt9mL8ofyVX5BVcab",
  "key11": "3UopEKWyKkkiBrWhsMUSsEHdvBPSWgCNHxezWW9SPuMaBfSVVWoZhzAE1LFvwzfAGoZax3zKqda2CkBXVcK19WrN",
  "key12": "2MynPioZz5ymLvonhG4KLeXA6BXUvFsSTXggFG6QYKRSvYV39ZyfDrwAJxgtbn5vjkw4YNHfauRy2V1oxoybefbS",
  "key13": "4gNf1Cvm9RzqAiwob5LX3kTcU9gNsvXLwfQW7VMmpipJLa3EPTSqhXyJDQyYKm4bZFkMaZRMCJPxvZjPiJLiE8QY",
  "key14": "3KWKcUYQ8U4zHJwBLziNowm8sCEUEVfCrEHskx4V1LPiNki384KpjpXmGFQGE7XHtJ5gyB5R8DLULyjcv9qNrHqJ",
  "key15": "23m9NJ8QHn7qqq9AxYQHm3gtKju1X3fAGvK4aG91nYkQ3wXjaA5d7Rj6p3FeQKfxR7tdnBs2GhJiyxUcA7UQ5Kob",
  "key16": "378Kjb6REfHDLu1ffYzyHU1SoTzAkXcsuSig9LBhZBjuBp3YWmdH6vLcaLW7npTBfffHo3yYjjWpzH8ArvPDCcjx",
  "key17": "Ti3VP1X4Ggxj8ZDbK3RAhAYmGdi7hC3E98Zf5Aer8CZxsDhd9utKeawSAQ9A9QjAQkkWnnwHesFsNeTSyvxZMz4",
  "key18": "2TmY1EDqASvSVL6shTT54G5JKW2S4w9UnGWmf4LWJyaRDPys7wmFQdvZx59r1PuG4XN4VR2pd7BAVDz1aX5fMfcS",
  "key19": "5P6yxB8QSnazLGdmQo3YuVcpz857BWbSHKF7HmbsCbeRntnfdLT1cZScJbgYJA5eHr3mj6mugQDPNW4RptVYUDrC",
  "key20": "26wKw72qf9YyBStiN7gM6MxbRc3dwiYv9jNwSKh3ykZgtbSMsaAhFRuCj1Vec17sTY7mzQ11vzuyZ46WowkzvMgm",
  "key21": "yewf4LAiNLZk9pi2ZHHrsKXSDZ8A9yRG5NiCmVfcRayrHtV4tWPhgV59o2qiPWiQ51cX99t3sYt1FUrGeeiA347",
  "key22": "65DCUnvhsGZdP2weMYyWTqsEWAqGJc1Q1gL5dzAYnmRvjPEmmk9gB8sL6JTuXwe3J3kecMb5CfmepiDm88bHWthU",
  "key23": "4MFuHX7G4NuM6XzwSpUEo7E46BXLnJ8w7DsNouBEkTDeRpLnrWL3S7MDWLLLwzfAwPmTBnCEMkoLs3pBZ22Dgxt5",
  "key24": "5PbBwuGdaPNQZohU3Z4x7ibenycoQCyTKBhCSKT9XdS4GcyXo1LvvVcCji9eTpwM3DgJuFyjk7hCieQbfssUFB9A",
  "key25": "5nxBRgN7YWJSSvn5cQKwHG3qUWVYEMtpDpshXH7tMteYZ14AxkzMowZwyNWfGvMs1hyjWjWKDNW3P4d27gYyhjgM",
  "key26": "g53FCkbJaVE7Y5ByT95bF3vvCMhYQN5CkKhDxQXsbFyAe2g8jtjoMEqnygJxTTm68FR9muuTaHHqTvubwcPskAt",
  "key27": "5gAN7f6qc5dJHp6MFuhhtHtgqdSVFBLfkgVLPZQ3r93YqfK4MYAkpRPHMGJK5kaopGci9PMHjanbNgsDZ32Qbx3p",
  "key28": "eD47CgtBCeKF4uc6kk1HuVKcAKWox2AXJnj5e6hzdpTB2M9eY3h5chq79tTo7JxBVdyH2UBPkLmXU6f5CtrUwHi",
  "key29": "2vVMH7PAt87tjys5sMUb6rkEvg95Gu3ZNBTJZqKNUx7HbpmWNJcDbohqMMTabWA9HLxcP3Ec9V8VEjjGWPXvbkkb",
  "key30": "2LqjJ6US5ZV5YzKZz4GdUVsw5SxnRfDvKGBD16AxN14DwVsTS2HMAqtRmBpA4eXc3yXv8CNrPnxhdSSgYwxx8uF1",
  "key31": "4A5Yi2p149nPHwM8HX34kcaTqTWTEDa82KksnXoNfCdBCmVo7y2g7K5GgVNuC5jGffJjhgRZZgT2gdHn4urCFikj",
  "key32": "2veMnThEa5pUNXJX9bFzxwuWotiKDJxoyVVesjm574BUpV8QsteURaP83q8A81Ho9o33sbPWsYwcHeuaqA6gWo4A"
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
