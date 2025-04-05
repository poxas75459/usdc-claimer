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
    "3sb7qjM1UdJ5DLBWfKsxsEzFDcPgV8nLfET7xgEPctNGeoo73QMfzsKHteLQrrCiZRF3dtNRJxXremjmn8qN4ekU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKP14YPuQyNAXSyV8LDsHFZCkSWvtyyDiX9NzFj8v9pZQDEiwgDZsx1f9vYWAFYytdajC5XbVebBq7FSGUcMihM",
  "key1": "5dtYL9dqX81U6dayJMUMpzkWZHmfQA79JMXYGX56LWyMckqtqQRGpvXoL2KTvaoTEjD5mWg8vSxwdA8ungCJKAmN",
  "key2": "66gUrydNPXQdMQ3FaePfqt9Frjijj2DLWy6M13cYk3gBMoveYGZRgVpA6B6NPWSAJKrAzTk5Sb98fz3uvaZ1u1Fm",
  "key3": "2kDnBMiHt2gkXkswVonPaEuDwcEZj96VLUPtarRGSg9ox4YKqes1YAKPwMCLpK5FecVTKHZvEfJiUaSb3VQ6QSNs",
  "key4": "276RrwzXTcZig7vhSXUJpfDng3mjn8qkNfxH5oj7e68p1yCtUZy23iras1xKXuqvUGYEPX6GK3j1KxKukPcUejRd",
  "key5": "3Hh31htdoz3zUKcv5R21EJ8uaotQWpsLZN63m2QV5CotBQjPqrvEHk7qri8PQ3aEHkAbcv68Hf1V8KBeD86umD2B",
  "key6": "4QAWndoCTxjnuMRWwnekRqxJqv4zDrbkFjs1mYrpRbc4oifn5xCFXzPEdxamS4uzHEhCA4dTo9HdgSWkayLCJ76a",
  "key7": "3ptCQGPe6URpTMr61VZf8yVg91wiSdoYLpWmcKbcXMRTYCDYtLyf8vTjb9tjvS5BR7Yxf1tVWWaTqeFgV8v642cr",
  "key8": "3Fv1RuCovMwnEGeXYCdjb3WC1XJnVZm97YKniDrWwhf2mUmYv2V1V5ekMCZb39AY3vikY9TdLupHenADZmnz5QKd",
  "key9": "4kg6MPNpKDzDgngqMgVZATBcTKPVZqbs9ukCxDT6pq7T3GyYq6Cp8C1p4hd2z7Q95CjCRcfcvMX26FyFMjnuTXjk",
  "key10": "3ks44NACaXKVZHfuAHnCm6ZCJ8otLb2ESy7YjxCczDPXDYxBjaBz65SB43wTrvwrXCCibqMVd1zkK6UqEi8JEfxb",
  "key11": "4o2xD9HwWfBCiqeSx5CkTRonZzdZ8Cr37sMqwJjUbA1W8CYkKm937TqsFiyLdR4QM1jS4uzGtgKFjrVExeipi1xw",
  "key12": "21vDNBPfM5ccL5DActts74XBcqaJE4twP4sfmYrUMYqHamBRYJyW8R4nuUnj2Swk3NkS9C1Z3CmcsGhLMeHCQByq",
  "key13": "431KVkFuuTPTfPkdB2pAekV36rxHS93cCASNNfcno9e22xvscuvkrmNUesfZBR2pn8z7ibf13TKG1nfvCAdGeeqq",
  "key14": "4cz6GZ4uSDtNKrhUGUyktT5Q8qinnUXMKSSYN6UBsu2U5pivV12iQLixcuQiNBV6heJNaojjJhr9ErZYxsyR7fJx",
  "key15": "gDN4dT5LUGqRKXTZyCeJfKjnfrm5Wn7pDEtntVKa33gBf1fqNkX4gjagww69N8BpPtD2F6HYJpkVfCHpdA96Vbt",
  "key16": "4fzhez43j4gD8NfX3TwMDkP5yJ7mANFrjJEXqquXXtk6hPbg8auZXGvAdj4vY5dsJe8KfP4nPZ5pRSho3HDnmWHk",
  "key17": "3yKtukZh595nc8BSG31LLTzejwWzR4szKiSNr1xByZZqJELCe6gGts41RH5yUjyMD1iUmkb9moHGyQpyq7qxRzfN",
  "key18": "5uK6tNE1aVLUGov3Pb8ZJ5ihVe8GEPhNZ82b3cP1JHoWtEjNh3827dsx17TNeHCjTMW2FRVTZ7tRFmKZ7VK8gdni",
  "key19": "4areKCroJgS6oNoYTcpfwpJSJEmp2xJjTT2BM1hwUEZ7WQkt72X3z9NxZ6FYdcLcDiBUS56iQdtsGgNuhQa8PoMC",
  "key20": "4q5RqG6pdu2sDfiVjhrBCDrfVUZYJhgg9hxZHBztQ4TaeBSSZX3gqWFEoRiD6erATUXjM1offYZc3asPcQk7KQry",
  "key21": "YxkzKPABubcTo99nFVC3mDjtzcfsoaxGRJUFjvnxCzAPXfSXZ5s5Ai81MnUYL3HpbGeCm8cGgQAZ24LCjmLa6wA",
  "key22": "3ASKv7U4NoaQiFfV6viCtp5GEoYDfwiSCWaJWQCnqVvMhnXbSAp5HQQ92iLJp79iSgBkYt1x13JMYpg5T4dBYeLH",
  "key23": "57FVXP3RoSKY1DfkcikJUwh26MQMfpSot8bMLQW5miLCfteogCjbNFpTMGwmKJDoNnxaf9j3ja9yQ5DQZvZ4oAPP",
  "key24": "5wXBbVor2AEwmQs32P6L9Xc4jhn51qymdMyyrDPXTwZU7fW4H6rdvP6nDT92PC72SMH2Zesshutwtfsd7q1HCtSu",
  "key25": "3ua3HD5zffWhtFQdf2Mnc67dErKmpATCC37HCkiGStqpEZFwzMZ8sLWKTu25wutuWeMBqZdNknPNyffHojQyHyGw",
  "key26": "pWenQaV2Azgbdf1sKgVaKqbQCCTCztTXM3MCnAK9AkKaehMnhoSeQY3AbmTAsYdYuAzJnEUEjdfQwq62t9U4fX5",
  "key27": "3HfuWq4tAsGDisz9oagobVTWNmiRnAT2Np3KbaM6N4PBmRnJf1t6evVm8YqAKNcec1osoyRaEk1nWzakYGXSscyM",
  "key28": "4E71J2w2BwPhMiiSbfULwvRmCpuUC6hvo8sM4Rg7hJ2VG74eHY1jVrY7QfFXJp53NwVruoCmD2xprcGQcVba3csN",
  "key29": "PmP9PfzdTvEfLSzHobr3SLEkxbbj3vHyii32VCEcPx65AAA2TqyXRdw26EC7CepMTiybBugdLm5hDrKX74wm5Ep",
  "key30": "29CRqTQtk79ePR7NXyYYaybiyCiTRRDqoLmeK8QSVLfmomGM97i3QVw4j7SZXCcU48PyDnf3V7k6N4whd9eAGwFW",
  "key31": "4DmRGodWXeuZrSYTYqLGfUHa3GKnwpXw121BheMCXeZmQpVUvj69APuakzN3PpwLKkRTqN4Pn8EgghpBh3BMtxp6",
  "key32": "28ywT9ZTQ1Z2YQGvJYtPedPogBd1Q5sErp4tesoK5fADQ6kSZTrrWRp82MEtzvS9mqBinVLF4UyR6HRiRLtn9Dok",
  "key33": "2zYQbMJdeJ1NXhBT7K3sgrXjPDW6NG6zaEvYzDt9RjcoiXWpLC3ffkHJ5H5rVoQ6DYi6PLJyZ2gZf34EMobXfPF3",
  "key34": "sMvLStHCkZtnwTFrbAtpTroVNpis4rgR3d8gc1CboN4NMJTXu1pUaMQ4ndBmAYFjCHq9HBuaB3JR4fFQvr4eXXB",
  "key35": "3KJ9QMjVyiZwoFExn1UNc5ipehkT7sbVhUuj1yv7335QaCmV99xTgKCa6o7KJZeRXSSamHtABtoPTpxGAACbEuJD"
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
