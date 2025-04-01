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
    "36tEMfKYB66DY5Dbp94BovuaFWfDaxNBtMv44myUChhyz9QH1f5Tt5EGCusSTyWjc9Ng5Hf4XPvYzi86nEYU8eBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyJ1mf2evFcMMJYGsndAEA7YxaWfshRuRABCfoZ4K7udLCZJiLV9rGgAX72maESnS7nAycRaYqVZTP1ETAtxyov",
  "key1": "66Fw7cKhMJ1A5gfcYoNEkc1U2USX6GzBSYRCdxqpgEzDdKK2bFrsUpxwefcZ3FC3dUb9v3wJetEZ9JTpPWYgCwjW",
  "key2": "2a7HVp5Dr2iJG1ZY4HLCk9WK4ZCViCzm1hMno86KJqyVS5Wy1hFbxw2GGL5xVP2D4auNDuq5MPzgYePTgufojNvm",
  "key3": "4eVmAT3y2QvCRpsTiJN9rPbtzZafmPV1qqobWcAFbCDc68BjYs2eJuByrpHYG4RDmbcSQiL59eVRsnxgydX9x51L",
  "key4": "5zvukCyZiBDEmLA1cdbSJ9eZdCM1X7vSQhezyKaB7dRd7FNapqLmnmpkWBMqDWY4M2GoBstMcxUJyW7Cyu993TKa",
  "key5": "3HDv9vEWoRvzxcNizEJwZRvbLA92FKmEHWFmP3hctyyJraKCbHx4Wx3om2HetGZDST5xqm8hCrHkWF17cevJMi3a",
  "key6": "5aR8rctQpV8qXPDkjXhJpUBgyeEerckUnkpthiH6qEoJ66hQtUcpGCEZaLyCgnvMTmC6oYKq7xQPUPZq4132KZP3",
  "key7": "3nihQU5e4VpJBQr1GB4sKhRtgYQrJheXgTxW15HU3oum8ndyuB2UtFUJnyoLgcHGWN9NC3czHSQxqfR9bahZcfAa",
  "key8": "2xDfEcuwnPp6ohVrawmjBfcpe2bbbFpdpe4N8FtNMDVFBZBymkzLS1HgW3EWhqeNKs3tBjcdfwCvvTRzKiFZhKZa",
  "key9": "5gtJkWzxscCbt3Amnh6HUAjohb2VjpeHxhJQQPgPpwYgov4tiZLJzSK8vTY8g6GccvH99878qLhkNXjtaik9zmwU",
  "key10": "2wh4zQsai5ZpFLaHynrzcos9mCyZX37F22KoAKKRhvkPFGp9tQjVkU6NLeeHpCKpJ8SHZGh1KCQBL5DGZ8YQ71s6",
  "key11": "22rf6q4kEaw5XBxGCcPdbxM37Tke7ij3q1vj11z6QSQYEWjUudVknUno6gBT6spCdPZsKJNhiGsRbPZkGCsG2w6J",
  "key12": "5bkXsR377J2dB2CZf4ocAcvvQfBCRxsvwtyXYthFndohRn1LieEdCKJna4w7475RSnffUh7Pjd864Wj4nxxg1EtT",
  "key13": "3tfKXf433j91pd2kAdZgMgX2mJjyfMXom4uqoJPeaY4G5ck9AYkU9eHXDuVCQkNjuPVS8ehCdCqxEyipcaiUgEXG",
  "key14": "m9Z8zjXTU19ABisqBaQJuLuyWAHscKPurgnJn1r4PGa3LKx1VwKVCHraEShFes9HB8X8vAkQyoEXWfgNkMuM1HA",
  "key15": "ZCPnW4ep4SnL5YPsTk4pMqZNJdzoJzyxXJoUy1oexfpX5gEPAfkQ1fDmJQWcLs1wFU1GPRZrvDQgYWEyM4WTALi",
  "key16": "5W4UXz3wLSqsy1zD6AxbsYhgRPzSzSuVrZa7P5mN8Kc5zzqsi9v3EVUfje3xtkhhE2RtsBEoJQaC9aGDHe45uW6p",
  "key17": "39WnueoKpGrCwiiUPtXnp3gCmzoH9Kh1VwTtcu6LwwhcEDjuidn5nbyNkAXt1NqemCDUj9BnK2aciwJYHy8rRgWS",
  "key18": "3swuC9JZdnAZTc9t5RNV8pFRLT5Vtfv8nhFQqLkqeqpqV3qRAnC19u3HEXmt6NVG3TUb57PZRHQBiQNdAkky5jpK",
  "key19": "3WxEu3rrPfWf23yDWotRvxbf5tPS7HSgGogvXa15QfuC3pT6WxC2KCbLWf6YRWogN6TyUxodubKUjbuMhJB7r4WP",
  "key20": "5ffndbj3umCwT9WMfAQJMxDsuxjQeHonneALhPoUAt33K4t3QJz2rExVAA3LipSDxjEvvK7pEnDrCFCMXYo2yNGJ",
  "key21": "64iJbX6E7szCNciXfQQxUzwvukZYERyxuVnUuX2BERrhA5RqEyhiU5JqdZKH3XqtrDqngG8vngHGcCFJSTwDZWND",
  "key22": "4PtfDYgXNuDoajkJGv3T9oqcfp3wadoicw31DYT1LMbuk33Y92gc8T2C87oBCCurszyE859GZgSCs2SpAsyPAJV3",
  "key23": "3h9WaG9XcTNUJZntf9kTGgi1ymqFytw6QZD4GDUxMHoJFFUxR6AUu569RAHvyiGDnMZXysLUdNjFe2ajPxYAXJXG",
  "key24": "2cHHBfcpB4t98hgKhhB7x6W5Tie5hQkTMHm1sxuJTQcD8esj3gcDwMXW3Q4sejWYD2PtV2o7MLiHXHxopGzfeYcg",
  "key25": "3QFY9JfQs4kbZJmZqQXwTatuqEa4r86ZvkF4xrDJZhXhG945q8MQbcYuQqoAMb1gpwynpnCo8jLVypWqAgk7B888",
  "key26": "4eoYf9uPCNRambuMZs7f1fD3sdpxfm8kg7ihdo3WMGv51d5KqryAuLhpBjfzs2Jr2txqD2SKp9R2M1hpj1ctfjRv"
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
