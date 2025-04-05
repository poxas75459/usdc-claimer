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
    "gMDaWwtazPtHVnoNFLJhnmYTrFJyiru9HvfSpLuFtjTw4RTtGDgpKh9KHNykqPgoraBkx7ryMEJVKx9cfriJCRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b53Sh4PSmzZHmSJGaRDzwFy4qgEjdAp4SdmDEWDBR6oBqiCi6CCRV3df9TXRiCqofW2xjq8SJdxXMcMR5RhnFcj",
  "key1": "2xHv4uvMMVquKTWUfcq41WXp5kHiUsWGjj85nvGvsaR6fjCre4KLSL2WaRWF1BMgDTce6Rh79gG3zyG9UnU5YbBU",
  "key2": "4XwU7CKMrLJEsF7viHmJpUu8ceVZ6QLcunq8f31gpMPS4sBPDiMHYtPzh32rDBovCB22VdaPDTbAD7pSTUNr6M4G",
  "key3": "26UoHgoQtd4hS9m8zZFpKj8mZw5jYt4NvSu8bsMnKCwS9QEph7J44pWuXc2KPbtzdVoxjr5GcFUdAWsXPiufc98f",
  "key4": "2s48FB9o3BADse8UGLwvyLij6wNfV7r6NqKgTW4ao5nRVVZZf5RAeFnzgDU8BzBJSbJrSX35xs2UGP3vstfKkgvU",
  "key5": "riwp14zHCFdD96ULJpEYhRbeKzwK1aoVRvEbwMitRnisVhDkEErKTj47BiqQvvRQ2bmesd7RXmvkDLNtLg2LVkL",
  "key6": "3UrnqaDNq94nTc2iZzcKwkhexXq9Ey9w6T6A85pioDJzGMKhT5CVAAjKiqDhvfEfBwiG5LYr697dF6XPWJPdmaT1",
  "key7": "3bLzjwUAbv7f8R7GHZ2f8iB7vNW6o5cwMdgVweXet11uj7QcjxWWHp5bv44NQP9qz8or7CMgnsoaEw9xgqJW4s7Y",
  "key8": "2fJnHwC3AuufB8aLhjHYo2zQJ5f84MJ1CyXvXKMVx2c1yf63HHArZdJRsKeLAWawicW1SWpsHpY25bSoLmygpK4q",
  "key9": "2jUwNq6KTSkbvn6GEhjStV5SLHqTNRmVcPvu7PJigUroowAwvd9b66vBnTjuu16vLT9N7aw6sZUTuhbGch56q16N",
  "key10": "3gvSyVYDLd2ZY5enmQP7K8yX6p9XKMFetwfp9K9PLXPmRUjZwcyoxZm8woga6hD5Atbp5cfitdKdeFZ22xjyYgVq",
  "key11": "31PWc5bkayoEHgRgPyFw3uzwvUmwYdNKWEckkHtTr5s1oAvv5tFhT5grt5LWXxjtpgSRNsS5mii7APiCQqCnQbZX",
  "key12": "58ebXjny69HmkdPkBKDuv6cpN349CCKMCACLSUjNSYt1Xx7zBZYXeoeLHkz49Yp52rhaRRhir5AesGxa71zqmnDB",
  "key13": "4h2dFNP7F4oCz5AMjdKgnVCAEeWSG7wynNLzNPZ3Win67D7AiNh2jGoaKU6sd77iwMZo5UYrbSBFA3NJLVMQiWMY",
  "key14": "4NG9bzKDcC2tSt5SHw4q8YVPi45efGpgBPsLwVyd98CE8NZ9bJpL4dQG3NaEj4SFwzj2aWVq83MmadbyLtonqavR",
  "key15": "4gkah2KnGvuV7NnB3TpuAfPmVrnNusMBaLjPVRj1ZEF5LyTBKqvcfhJoEswt1Gx73enUhYc3qHqLz9H81M447ZjY",
  "key16": "2Pj679eWHvj7U1rffJU4cd9NhYPSMhSf2NGnCfDnbRNRtMJvbwQ1gYaHc5PMWjDwkHs8dNakd2tMWR3E4TvQToQT",
  "key17": "4czC4tpoKvC85dcY6WFkrGrcFcgyQTyHAmg9CHeEFbgY2ypa4PeUMEtZJAgigR2yx8iyHeg6HE6RYHisBhgVY6FA",
  "key18": "Qu4igUTVPk7aYWN2Q8QVSuFYPTSdw2Vk9ZDcQ7pX1pu2CfgNmXEvWqKQU9QytUJtaQUpHUpQEKgGtb11T2czpbq",
  "key19": "4i18JNd4yrn7QzkgocFU6Kaz69U34YdNyXHHFd7v85dydeeB7YKnWsSLde19WYLGU3djca4eGUEvfngqXJC5UDKc",
  "key20": "3gPuYeAT8iVcGo9DcvdDrqga5QN9kcsLHhFFMcV8K1GvukHqeuyt5dWudJLa2BnBUjSLebLUdoVNMagpnUy7vkhP",
  "key21": "54oQddcNg9C4Fi9WvpbWu3vo1LCPZptBH2xoHYntssfHqQqWmc5sXNv4ZGkZoz5PKVro1fTM21Lgrn7rvk4ppHkS",
  "key22": "28pn3NEYA3tw2k76zHYgNrKsg6hK6iaMU7gZhZB3xscMZgLoTAAGdVWadh6ypjK4n7DdR3sgr5U4VACSH3ZU1yru",
  "key23": "KvtyZLuhzFPM2ARbowUgoo28iR1mXJD1z46uaXzCXuE4g28WgPjCDghrRNKmqHv2jduTa8Ru1xmpVx7tXFYnBBg",
  "key24": "2SmUjZcxYYS8sre4VJTbJ1X1xAn4tbqD1kFzJpReh4HMV8W6J3qC5UAAkzDQiUNJZDV51HcYCEX5iAKJQcQNUwF1",
  "key25": "3SYRRg9TLENZuKaKEbzH7KypmXpCVzhufBHYkTUdn7FKQ1LL9dFVJvw9K9su9ZjiBr6adw86SiasEyFXYkyBo6iS",
  "key26": "5mNL1ryy7VCWotrpDaev47CBxhZ66swAAQYa5bVPESKkmaeDzrRiDVLhC4vRygvSRyvZsbVSm3h8aSJspyMNc1Uw",
  "key27": "XuZdTznta4e3CiG4dufiHc9BiCR9YHg3EuYxJS42YoZrmA6dBHv3tuXTjv4HzmYbBoVLA8QRoyLhrpcGTHYUgVU",
  "key28": "5rmvDgLZh8KLFu7q7qDPEjhgSRPg4kY98MyrgMp1TSQ3NtDKTZAuZneL45rRhBy7R3ttu4dhP8cduKqhHe2HmjDN",
  "key29": "2wjAyhBoZkVrXYMxzRPrsg9KDcgXRzwSe6B4UHhVeKsCcFw7mYEiSLz9C6oXcSqx12bU2L31z2bjzRfuyGtz369j",
  "key30": "2zTmHcZ4tzrYaQri4Fx3gGArawMjgdNMMYiLif1me9mLHwU61x21fvsfuwPFBmsLKdQxAgC2eQZkyXSUP2FpH5Yh",
  "key31": "2SbF9oyHe8uMUTMXoLq42mEyPywmTpygeRyYhiMmtuTUDTSaKTBdPk2APvsYJuRcQM7txHdaAFqeENa8dMJWZmSh",
  "key32": "3ZNo7yBKDtyeoLMgeMMgnbe4XjPNC6odrFZsNnk1HhPfJuRc35uBtNtheh9W2VuVuhCZ5VWxAHAjJ1gYkQvShCfF"
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
