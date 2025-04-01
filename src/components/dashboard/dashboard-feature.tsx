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
    "4Uefug5oak6ryvwgtyZLpBvFiCvYTiekstgoUtVqrDRVuWiF8a6RtGZhV3AtCdjwvGMKFEMBYPz2m7fQosduyuRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJucgoRG7QfrXyu3CkBMrH1M1DPaNx1qVdJ4W8C7ZkqHGDmd1stwsGMz9hZP1hLa6MYwk2hVzjp5rCYbGqTCYCV",
  "key1": "55WaMwXoYkyLD8xYqwRw3jQrW61TtikbgYKLUB9vUcwmcSuLzisSoC5VL31v1NrtYx3iwhPJffcFR85KcxaaLqwh",
  "key2": "PnEg5FzVpQeNp1vk7x61j3JnTYX3YvmVJ9s3P4gBNStt6fKHdCey4dAQWMxULznrg2NYFS2Xx9BCYHM6DpE9nrk",
  "key3": "3sws9JKA1WvQoDvqpXddp6qPBmZoUFyyG1MgzHqc8A5qSZSGQuPopJS7jzL9kgXLaQx5N22C63fJ3XzaWjX7BGta",
  "key4": "29YbWVQPkEnDn6oKzk1Es2LZSCtv68GQdbXJBudJu1W7fDZqF7KCvasQi24a2UNwEyeBXQcXZeuv4HKRnsxU91i9",
  "key5": "41aURgAotMQyKjtcmFBMYyE36mPYj4uDToabJboP1Ji85B9JtMGABCjLxEuQ5ZmKuce43uHYSP4LRfFD1CNyHYL1",
  "key6": "4anWepMBmYoVvHgToGGXCtFwqFkpG7n5SZwvxyMqh1xkhEc84UKHZkyoHuhoe7Mr9bz9UKzF8FGM7TSfirE5gn1S",
  "key7": "4U8VDQjFL3nPz48NNBLvHpSL6ERHDzC9VKsvePDvv6d5VMcB7v43V44b2DXCuvWLGmaxU5uSVi5R7x96cgHTXCF",
  "key8": "N9fG1Wxc5y6p7vbBKhTbommDm3Pza2R6Y8rsRVsYiy6uo7W7Wm5RubwuLzVfaUmnboNiBqvoHDeQSHQTGAmm4EY",
  "key9": "5gXhCAkaQAz5TNZDJz8PuKQRKoY7FpBYw6GdPS5hL13ZYiWjPTXJ7KZxWpkEvS3AiTD9oKkKdG3o8uoC6KURkHMx",
  "key10": "2goEfEtFvXqzZwK4JitpsbfecjbZoWw52AfUtAFLzYKqCVXHtyPfNo8rTQDR59HYpNLJ3fwks7GkMxcjBWKVhoec",
  "key11": "2hiuSGsiCKp4GK3hsBPSsQFxou2XcoiV6tzBm9u8Hxuh8jemDcLVHF4RDgiPoYaK6HRfXGVAo5BwNQ1keyTtQ1xQ",
  "key12": "5JBUe2XnZp4HJrFP2N6H8VusFfPCnEKWwVSmMotMrTLQ6ZNQJKM5Hq81Tgm4GS8DTbgWKiNnBPmMMYz66VddqiBA",
  "key13": "YKeH8fZbRW5BpqHECfqUzucQBwf2TKf8G7zysjfjaBvaaPgThZeki2jBoiDKYZzaTv6uXTRTsbcgkJYWjHqBn1g",
  "key14": "SHm9Po1PTBettnjeuhgoUUAdpQfHPqr57xomuQH14BEhTmxd1fjoD8mnshQwhrSSD8xLsuHWNnBWrZZ88HFSR69",
  "key15": "4SY1e4TWw31mrc4S5KyU27tYqwuEntCvxwzLTka7gZieaRATWuxWHWe2KgTUS1eqQKfq9gKVVwaj8VhrEQh3ZEmT",
  "key16": "3rcXD9dWHaijm2zDQPxkqsEMyBiFkEYAYbWK2TkwkPKb35DdcJd6HdEughccrqJqDFqML43xnR7FTL7adAcS3uVv",
  "key17": "RxBHLxsRt6GNDY14BS9gVJPFpsQQHGAsVAcyTsRDtyHZV5EozWy9ZwVBtzNwiwUX916WLPcHibhtHYM8csy8MPP",
  "key18": "3c8kAbr51JhnzCP5x6cBfkmK8vUfLaxVRdcq8cWHV9WWX1EX4UzmmLMpTT1dopF9n28MZJ9DNmLexMptqZygjd1e",
  "key19": "44X33NfoERL9rRaS1U75aLFJtHzCrq1QsjCLAjLpXjdF2BGFnV29C9H7pM1ykXvnufFDTLpfj8143iSg8i2G4Ym8",
  "key20": "2T9NTRBQW1KhVAyrP6MvMYhjDFsUBp4hTdnCobqc8s1Jnbmqet3DpdXLRByC9KqjHStGRYZjhRZLmMc3BSVyjviY",
  "key21": "2Ba2WXDSYsaYzvQXunRJpj4G12BTGk4XGrb7o4gMAXRJ54yNtTnrarxMHHCfHVgGCuNKquMDoJha9nwg3zLfeB2C",
  "key22": "3RLR3QR2Ub4azF5xp3icLPRYtZv6CDDx2UYA87JkoYjCHJwtarFyP6WvnNqaHTgQYU6tELoj1rmp9kESbpenNXQ1",
  "key23": "62LypfWF6ERbDJGKPF4pGhGMvkWfq492hK3AP17wujUybsaqsh1LaHKyFT9KHg9jKyuLDzyk2XesdughgrH4xs8c",
  "key24": "4qDri7MrBiexffrAGY8s364MknPfX3M74Ce1ZvqztGbA5t73km8S7CqmAxCwsocqe1268DM22d2UtywfBECgUMXQ",
  "key25": "3XUuhPQ3NEk3KGi2LzfC73rqsc3gFgU7xPSPqnkoSTHkJXyqEPSBMVBUuWLg4HpqxfbjinL5wpVBsJ8J5KqALy7E"
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
