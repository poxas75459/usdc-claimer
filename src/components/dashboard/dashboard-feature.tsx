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
    "5M2eMT8UX28ZmzAkkWJbt9ogsWGiEUo5qWYNp3bX2XDiS6S2WEZYsJbdwneo71i5TzbFfwV1R8PMrhstL1cvjbu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQuF3ste7B6dyNb6ggefgNta8cth7GYUTpAzdW5t65MiKvDdEtPoWtRngzRTiGzv3Vp8uNUFsqE5ruxWggj46Md",
  "key1": "8YXoXogKnDqXrLwdWcm24h8JssVxvX6hV7afoGigxsAVpiUvBVJcUDnCexBFLZfF4Y95PFR1ZFjan8CUo5L8A8E",
  "key2": "5PrQiMPEMPsPssjKCeo94QWvNVv8sEqNmbVZTQXG9KTvDvspWa5cfEV1QQ6wkUpBA3xFPGr78NohbPVyLZPt6YUP",
  "key3": "CHeGjU8Uv97Lwkp9WzNTus4p6bnmPNhPeRC5KAEAJF3fyqKod1NyoFL373PNgjmTUtt5W1qH4XvUc4ZDeb8mULJ",
  "key4": "QXUWMfyEPdJoc7SsgdLiqvmzy3R7MuiD8jhFDrVRc47JBUpRnwH78yqanxULvJmKDQMPNmytCav1TzqjvwavX1V",
  "key5": "4VAeN8maNiCgmKMRZxTxDWfcCkGsHdnRZTrezdpFjr5oYvAouLZif2Kah8t6jFcgT8cVLkFKrRrus3E12Re8AeLu",
  "key6": "R9u2ALHf7PGswMfQko9FRz1tr9LiHjPGgWpeX6Hr7AR7DSSj4UaZoSS1AbvGJDHGQWCxrtJLFumPwLMAo2cd2UP",
  "key7": "4rH8Ur8nSMM7YyD2HLhNX53JpikHcgrEWNK1Yr8tyA2S1qDkLpHW7XNP65RK7ttRqK2Xzzi1eHTim9V1yeNAsqe9",
  "key8": "4nVT1btQCRqfp9Ftad4kaBc7JxvNit28HT62KRpVyxVZUPgTnPhzxycUv5wtN4jCHpVfRkgzYLb2Wm2RykbM3y6T",
  "key9": "42hChzpXv6FSEfkfeR2C9xgRrwoMSEtLaDwEdWB51ajVvSUqqQVD6du1EmRxjTXas2hpuBnfhXiBe1RLvhewuhyf",
  "key10": "3tzvgqa3deCJTwTzdKj4dvPoFZxutKBJiXWwmKRprW1HmPwQbAt5QGV734RN3KWkW2chwUNaka7BxVw48J5BioCw",
  "key11": "5H43BgiVZTSuEStT2pEy2EkhrBMqSHysZmh3apg9HzC3f2LaU6C86KfHAevxJ2bAnDWVjHz1f65zzcFCRC98QKd2",
  "key12": "64SgdNTBgmAHZgxd9sLKgTRyv5iDj4Nw1FeNqrpyrruf7oTRET5HmfTqPeHxpELc8n6LNzVMUNiZx5zqBfspukAT",
  "key13": "3pgg2MymWKXFQBCUT5mqe27S1BDJyZLG69p9JbdpVJkifgVWGvzPPvJ3LApnFM8GDcJN7H2aoKjiNTcXdisafKQg",
  "key14": "3NfAmezmbw1y5wdwds2zjZhYt85xrgu4HZFZjytfvsU6pq5rzuPyiuxc9iqLZkSi6atx6cg4HYYVDQi8oqBNGzrx",
  "key15": "2TYXAWon619NJb5zuVpKHFRWQLSiBpFNLyKFYJKPYrsRUgY1BwNBCQKTiCFogqdfxHKwX5zfSSNjdqTdVpBeBkqx",
  "key16": "4gtnRnNHzA1xfHDG5AwVhsQxpyu72Uu5EW9SauNEhAEs9GCD8negWCgxLFmRqnJz2WpaN7vnDcXMHaXUeKVTm1W",
  "key17": "5naDQv7dMbcL9mAK7ES7vgpMh4uMtxd6guaLyFQX2BSe5f421dC2H9p8Qv8YY9QWDYmjcDC9FEYhGSNuLu8GYQvF",
  "key18": "4oRdnwSisMgki68KBHfVwDa1ePcbwgnm9Z9wdeCVbACNWd5kCqXzvTxrankSVJXYNJbM1FwUmq2zTUQixDUKQf9D",
  "key19": "3JhtVEXWxjZQS93fhSV2NDPhP7qxwHahrhcmFFJjMXvvAWkn1RXCJeZCgqVk2uyBkCtF2yRT45mFCFkER2osX7e8",
  "key20": "43iJD8FRnfwqPNYwAaAjexfafsjihQ9MVuqufQE7bF3Q4SMc3rsaPkBVe4sNrgaAQ7Es413Vy5szR6ErqDZUebWm",
  "key21": "3WtVt9CD9VnAeN8HLwXbXPPLc5LbkKwma1cJ9N29vU5mhyKg76PJvANv9Chwi7MczoaWrPRYcgEmQ3NHrpPNcB3W",
  "key22": "2AM3X9Vk1vRHj7MiYBDwi2QMoBSFSgKd6gyfT7AKdHdDEK9ZivkPu2Gz6jAnRyNypg7P6dWPsP72G2Yc2CmsZJBb",
  "key23": "3Wy8XTuLLdiX32cpn3pSsdr5YN2D2GWgMiMNADB5p2eJxWrKhMjXZYbZiWNL6L7inpJBst4BVgKXvs3471tJrjy4",
  "key24": "53Mrzi9FS2sZr8sVZUHx96evbKHxbCEczixQuQtPMvqhNobYRmAoxdsCk36BtpQ4fW9YmM6HPuVd54sk9bKfqurv",
  "key25": "5WYWWcFuty6YJHnmGovzo2XyjvFtzxtCsL1cJe3vWiRuzvJNX28P7Q5NZdkYSuzyriwfPyvYeTRTAwxFDiuHBoRo",
  "key26": "2jBK5UJLpKEPcyWG8cG38a3uviiVuQ96hyf12kZcyGbCkipHLa7nEcZnNWstGJ2UzYEiXgXBPERKScgtacnKFU1n",
  "key27": "5s3VZ2aJiJiQ8FpwHM4NVg5VU5oHYi6hcAi5rz99ccRug6YSe8i64pFZ7z7rp1cjaYo6yoQ5cP4HFPxrJk8f5bQi",
  "key28": "3GbdXzfuogzdiobJwvvRfhTgAhGAzLNdEcuEof5yrECfNfpbPB2gtomMuJk3vtkmhmRjKCnpL9oKbYW5kpo62xkA",
  "key29": "3vkmY8nzSfUCHiDuhqkYbFcAWqjnNat1x5H4za4SXs8zPTje4QFwDzeP3gTnNLN2TjFMDrDGB89rSuDV8ghVRMq9",
  "key30": "3NsUJ8enkeDW4HeL3jmfWZb7n5Pugg73sSRpsM9KsPcqg8pBypDM4fqi8G4615qZSu8AC3m3Lazw26MSuR6v8Mox",
  "key31": "3PvMLVHwzvjXDhMwTmz3x14hXXxWavxs2QTRCsiTRWCxMwn2pbBDYNHPgMYd4nC3hSKjYspao3Azuw3k1v6tuXnz",
  "key32": "4Tvh8mVEd4Njo6Lk5w18D87ZM3Cs6oQjyF4jTtkjVpMu4VuPeT7YrJ5nt7BV8goQVH8piGKRP35uum7L4wRZn8AM"
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
