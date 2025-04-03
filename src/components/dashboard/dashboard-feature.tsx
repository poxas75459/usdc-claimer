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
    "V4Q2MHpcDiyPUpwo56W3RGpgTyL3RJoG1Q32X6iZ2dvN5kGZacYnZSKhXRM6J5iBg3dFrPHrh4GLyeJvFccr2Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REoo1gBtmocfBLQvvGJ5LgpkK9BnpKvzak3sJ551Ed6oH2x5MLnKaJN1adWCfJAjmJBF5eHVuNhdLK9FnjZz3Nh",
  "key1": "4iHxJXVizpfYSytPioBTujmQHhPJcchHnrsdBUMjGAzMv2NX31eJPSsaoyQ2szTr7MWTdvNbk11cP1fit7KWMeLB",
  "key2": "4kPkTuEQBHE7UYJFgPqbi9Qqk6jvk5iAthuRMPwzwPXcHVZnqQw23tWGrycsgRcBbzgjZ1eaPDZx3CSg36cg92qb",
  "key3": "3BxkhzYa8wVppvawVnryBxXVoENT1QhnpBERRZencCBhjFinfgcADZwm7xR2mLhikmNtoUGsAmToCnFQwK1yT9Wi",
  "key4": "3scJA1DWHbYTf9BXMzWbuHAbupgwRf3VhpQWn4j4g3LJExVZpHspjBrkA5ZiKRSWt359WjVcaToEK4JW5whTH8jm",
  "key5": "5dEECsdi9MSMhNtpNY7yVFumM8wEeGQousQc3fqMCi4eEKuGiRsrvGkqKWAzvefMPDtgV3HsU83QzBATJutatArA",
  "key6": "gg72nMvHdZA1WqGs4rjk237eRTKRNWugeZscEgFMXsHPvwPWERKBhx9aLgvfizHkAEKHKYivrF4ibRudNMmosNz",
  "key7": "3M8hcNa8XALJqNmRtFtk9jYFnTvPMBHiMyFAbuhg44uDUk8Ueg23KpoRZM9oE1qfbTjjxw4iBkqh5cWVh2FRfFab",
  "key8": "yVTLq41BvmBkDB9i1ki8B74Urrw7et8Re11b9KkBehG1n2GFAoAfUUeRVPWj3av1GLpa5pAsVhhCBuKRSsVFp3K",
  "key9": "sENvBwbnpGwPDJ4kVdATt6QN2wJHGZ2wGE2XzKfAvuipHDZoENFwsrLYGcFhaPEbzTvBzZuS5EfeptVN3mWGZFd",
  "key10": "4wUhcor4vapyrf6xTWwUsYcAABP7u6EWYaaHVJf2uCgnW8WWWEgwiUU9S8Kn9xQvCvCakRHsRRLh2rsQduQJnRyx",
  "key11": "3i6rmoXd3iVc4zonZ7MQifCsV2xbXXJ8EkA5QzHEpTfGHScu81VEpckidJ6z4fMN62uv7kDSWnu33z9kMreSisdo",
  "key12": "4y34tUu2FWb1u5jge6dzgRQq3wyLqdSbJ44DmeS8G45c5JvYoE6grkhnWkcQrdmUVo6d2M2uvTLZakDLbQxZHWA2",
  "key13": "38h1n5pYDavz8uWuwvKEaYEvCMu3UrwaGWXnovvvpqeGDTAjjme2pe4W5PZrZqj4d2kvTVWmqMFhX8Kn65QgLz61",
  "key14": "2oPbjxbTzHhj8XiS1VUNQ9g1hmTiwV7CjBzUMBVzwix5gJksnGUUKtHVkYcdsNwYevCSs2bq6i8e2mH6u6VpDnQL",
  "key15": "58SkkoF7NuUK8o2o6dShoEuFzUXFXZvHKfZKorEccc9Zkz96niyro7a75vC3hYz542g8Ra8PfFvoUwgZpG1TZpVd",
  "key16": "5LzMsxEdVqQKi9acKDjAk6aSFZdfxaoXchQDd989dGqjAS5KubeiMgd4Jctn8SGpKCmwUfDcFWpfR2mRvvd1ddnS",
  "key17": "31cmoBv98Qx7x3t19BJbqsRNXFXrDPJW6nnazPMGxu1nhy5RK3MJSqAzz4c94aotZMa38EpA4LnjE5u1g9LxXa9n",
  "key18": "4vCm1E8UkKxEbV96JQ5sv3RwepwZtRHvNfezTKfCmWMnpfe5TghEcoRLS7BTfR6BP2PCQ9P5FNZBVGLCD3ACKrep",
  "key19": "3qr6DggNCXRWQKh2vCktEf4GTi3wMGzKNmTKZw6wJfPixfsvFahmZZ5UHFoyNoxPUYfPgXZPCNyEGkMXnAsSkn7y",
  "key20": "5mQ6NkxkAeSjse3UrYYrwBEphnUaHLJ2vcXqTKsGnahm9CjoB9nAQ7JhSCn1fh6FSn21xEokzyef1DU4QWcMRebx",
  "key21": "8rK7LwLQkvHDk23ZDmoEfUHc9k6eMiaZvRWc1DMKkPS14XLcCpJMDktEfQH7HkSsTxYnAJ9UAWFJSrYAybHMhdq",
  "key22": "21VcDcUHxZUYRce41fgkADhkSUx3cc3MQzLvW6VYLtYa9QHNAadbzV6ctSExcxFv7yqJincfEvLHDcFdggYSL5bf",
  "key23": "2aYZZSMgTvwuqQNNCHAoqHGpE8qZVmoMXzJtuETrWABgQmaoKaTKWn7rFbUZeyK1YZ9993hDMXNJ3tJ4jKB2XA9V",
  "key24": "L7wGed4SDQ3GhRishUzujWWSLtZ6iZS9YeLFRKGTCD2B459ehTCqSFGVbMQDd53PFvXyrYjm3jahKCfvkPAd5Pf",
  "key25": "3XVhDn2ND8vySGTsmWRupJ1kM9JobubFUHgYLBUhpDJ9RWNtfALMy9jTfL3YN7dvFya49hSJzJbJSmfXndRtJuCY",
  "key26": "3nvb58Lxgi7WHesNqV5wabigRCqXiWmHhZGpVG6woD6kNXWnRppq7f652Gyp4hvndpWbYG2AuL3M5mP1hdtksD3t",
  "key27": "38CHJEwund4cMsM5bw89oLEisor5gE4rwoALkwPYzBE4eb2Ei4vEWBKRU68XV1aU5enjJDEQsMTEboNzAXC2yNVs",
  "key28": "cXvienktcky1NfS1KbXKwZTqbWqFZdGNwMNVBJ1yHM7kaZdfXAThMbRUC3T2Ax9c52ZyJtAvaNnnwsEcA6MG7yr",
  "key29": "3uNZVPGaLmoCUmK5K2cxByVXqmnCiFWATvZuvNQ2diiAQS6PRLu8XTpZN2bbktPRkbh7ebhWzAyEtZ4v4usSYzFr",
  "key30": "NrF3mhSnHA31vc4Pt1QKnyjZuzVCkExMEvN2LXUT1SGXVKGL5RXB2Kx6FzFoaLf3dBEWbkiyZqQWZcZce15C4TV",
  "key31": "2RR8zDj9EePbMRFNyMcSECyDQ5kXHUZSb5sqeQMShkUCXax25ow7CZepBSvDm2AiVwJ9eNHzRMaya69Qb17RE1Hr",
  "key32": "5TgnNwYF3phjiDP8goCJ6Q6ug73tBiAVANt4cnoq4WfMjsGUehTLws5b7jLSYZRcnBao3oVpzawXvRSBYH9Dtee4",
  "key33": "3JXd9tAeXxz7dAq3U37JxuujTCSJo11AoH9rZCsuWiAcq8fyN5R3SAkyjAkQcuFD14zf9Y4uPcQnkax8svWN2UQy",
  "key34": "2dgDr9ECVpmLNzKkiznuyFPZ69Cm7HPU1grEGFfSohGyhPZsx1T4pCwnC4g3CsbcAfsZTQ9Mgsq3TXvCNHMqTaVt",
  "key35": "2oTh9vrSSAUQ9z8X2v4dcj4pqkPA1Pi6puArcLimZyDeFJhKCrRs7mAu5feXhczpPfWonBwRg5jC2MRsdx9xecDt",
  "key36": "3w3nBH51M62VkWzk2cHGGtSpxhgfjVELnJe3WfdNssrDUn7L8YJvn7ju1hecBnFKXtGBN5CMRhwxGPDstvhqZ6gt",
  "key37": "4CFgv1gAm2sgbNruJqWK2akv6bYKYgghopnx9LnibceF7CkWfqK2hZgBS2NbAzW7VporfBQoE2aNoZecGCvH3iu6",
  "key38": "5dY6tg8Va58PV8iUxbLjE5XAG3ZFz8m4TR227UDHKFYxppmxfeXGm3sEddPEVJ2CciWNiCyWw63dfWJ28HzBmmUZ",
  "key39": "4wgZGPPmeK96VPyvhtGStaN4DN1JkUHCd2cmDtbsRyT7W8PaghzbgSovYAwrZmRAoUj8ukaR1ZiDxN89JwA1ENis"
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
