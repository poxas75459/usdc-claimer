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
    "4qRoSg3Du8ssD36pgpN9WRSvCLH3ki5XQ6YzAEqeBy5eyR3pDbZsZ9xcd7qS6czpCiuSUaag7QaAp9GHtfKtdVbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEGhDG3dGjVEhwRtvmVzALaqVeJRVtGVqnLxYEW4hcSvQC5y3A42b3R5DCevnQdMWWubaCcHiedTQkpUurGzEEp",
  "key1": "4fii5fpxvYmwsjc2ikchSgB8tS5XkE8si7LPhez4Mo2z5XecRL1VH8gf91ARuAVVFN5JKTvoTTZvbSkho9pXmfTD",
  "key2": "5oqrRgsoLHK4uKS181feRY7MJu6By7FbYXvNaNkFVENmohc6ajD82ZZu5agDw31VHxrY3nJbrZzF6Gutqekkz42",
  "key3": "58QxqdiqgPDkDbTmZd7Yyz45d4Z5MRaR4jMF3b6zBhxHb9enyrCBg9AgAN4WVtXBzap6KFKhafDdm7sCeKAUeR8z",
  "key4": "3E44YjKCzJDfx4iznY2GvazmyJpMkZtVdt4sK5Hx1iLxeCYeeQDNdNb9z6HtuH3pszLwTLGcrRY6wvG2JzrPkbcA",
  "key5": "5iXoP7tkMRra2xvPpLhqmTzrP7fMqciokRgj2Y66QR9CJMKz2muuekwbeEZLpTV4faLJmJDU5ucQP9gu8zLEk5Q8",
  "key6": "5JmBDhGvzZiG7KNUuWMfNT4T8ZFiK4MpXm8oKXfMTMWxvWHbmoaEvS6Y1GEpcgY6NrG7aGtyitZERPoiNrKBQUCt",
  "key7": "4wZWTKY69xv7cAzPZnby9T7QvG6Dvo5UKp3rrjFGk9iUZTmhTcXfzoTeaUP5ZEUx5GGiMQ1mLKqqQdKdedjG2CBu",
  "key8": "58FSZ471XAQg87iyb8tFmW7Xj1VoaJqR3ftKxjMfM7bzy3rQMXSAywTsrqzCPX9rjehSn1pZXQgHk4TkecFunHmE",
  "key9": "535JLVuauwaUuKswGFENDvCYirEwnCHUnuh4uLa41EfQY6Agy9eMWgeoZTTBgWSyzbdiwYSSCKszsJ77DwNp4pex",
  "key10": "65ETkTmackCscPerQEQqLffbyzDKojZTAG8c8bieMkYb2QzpX8qtfWwcMCTovRnxp2ezKpjfdTwTVUeYF2rAzho6",
  "key11": "3BjqAfKwymFfkWShhQQByMv1wjpVdoHEtxfvsDfYHYLAVP5FswG6VD883eAQ9E34i1HaaTEfjo3y9gR5m7rkVLfp",
  "key12": "4eC2B8hfXBi5VSBm5pYEf49AHwRWZuXjfKvkRQGGkgbEE24gi2emKZD3C2SujPTPEriqx8JBLTSwrC6bRoGUJyN8",
  "key13": "HcKh8YSiBwEY3FyVTJ9iw6AL4oUcmtXPTE1ZLvdGxEYXDq45BVNv3xLYxofsvjbSrAwSHnz6UB7PgvfLgfEhYpY",
  "key14": "meUCTsvqQ8ttix1zvLhzkhCFxpeyB8diE19Kp7iHaGepsiy7MsSBgjrk6RdribwMwaWvPBFFN9Tv7egCML7BT9G",
  "key15": "5MbzDGPEsx8vFmPZvdkruXv9E8G37izh5pn4N24gFy9uqgrfkH1cmQDJjYjbnKrechBH8r6tYKCHZLmBs86iPAZB",
  "key16": "2yP9FgzvPZdhQisGHfQYWhPiTjXBqAaEK9UdYxJ5vNct97eFQBvf6hvYsdoCaPo7BhZhhAnX6FuiyUnL66Uyriie",
  "key17": "5P3H5G71BnS3z4txHvcfbZZwTmXGcqRGBLFa87jmJoYt31H4pYuWAdFwaQs2wRVkqjJLzgxP8Ms5p9JMrCh3qFig",
  "key18": "47wVQh4ZYKFfDa3nS3BwB9h91SPMo8RdbiiXtsCw4THSEdbQCe5QkhKFs13vsdkA7JTxpwfaEhszWMz2kvHA6pew",
  "key19": "DocyMjEU4mc33GcVrY2ew36JYYTdX3CdapZnrRqpvkTACdYT7hYEZh4aKBP2JX7xyiXu5TXjM1fPAzZayx6tYT2",
  "key20": "2aonxKVqKLXao9trCDYVEze2L43FCKTvNB21gfUKMvCauSQ8DVViGUHjZADgJKVNEjVGyLpjrsDU32pCjiLtWUyD",
  "key21": "3H4sm8gRCSNUm16HcU6uH2uboYjcZ1feZrH7ZDzMFVunFMz67YBsHJmUZDBH8wnnY14XnYLPptrn9QJTekuxtMj6",
  "key22": "4j55RNvLBfCQJigBUy6n2YbghSF738hA9eePYB161MqNY5cuz6MEPXkr23Qxd1Hw7MHcnKUKQSuWEZaJBhzb5rTd",
  "key23": "4mufYuLzNZW5MaT8rf6SXdXzXARmTGXp1m1e1sk8pyYp4sPP423aQmDtRKHLweyHKEF4tKMs6RH7Y8LE3PgLaPrG",
  "key24": "qe55tJHrN8gn1iriHbwbMFpXbnhM2HUS8EmuoHz6cxENbRVzEzcmSzEBHTzAXhD8mY9DPZCg3UCyuoXYXTD91Rp",
  "key25": "cnNxvU79XAjVx9ogc3v5qKtcmPNqKATvwtMtVKNiAjHWXAaRy6RTLpPC6z4Q1SVSfSKuDugsN3qEbkD2uKRcmtr",
  "key26": "5dpWAAEMWZAvGTip2ZZKLUehu82aGENWJV8DWQuejLykvxowDkBx2rhv47pyzFsAk25kA6RYYC3G8VFLKCDsQa1u",
  "key27": "enY93C48WZykxGKzTgRTpcbig7rndWu9VpqQZ7yKTbSBEJwaQRJUpSuybeiEsgJBaC7QU3gw8Y7qYRYxV4TUee8",
  "key28": "5LygMUUMxozQ75YwSrCDNSpDyFZbMbv79UCb8GdoGDQbnAoQx4xVH5nJm64P5VEBmkyRdShHDWzBohKSjh9N69mv",
  "key29": "5Nwda1WH21ehuzT3PzcYupkp8grFLV6TU1RPiHUP8vF2NGMv8h8DmqAVNA4vBwziRi1YpqJWHL27fWKRFCAbja1Y",
  "key30": "5qzsHYJHWCFikk6P3chgVTLZh9iih9GRxvrGvt8wrAQRBzSnmBT5EHL4HksBcpLvrS8VrDuaPdG21VhfAHsCVfU3",
  "key31": "4jnUGsTkBVxpt7Yfm2VGcs4C2s3c4kdBYX14Ufc35QQjkbtYtnCXncAKffKArZ35D4gWLP5XKj9m3eecaH42BayR",
  "key32": "2BSstMeiqeens8yUjVeG9SLcqzc2T4PRP2Qs4hd47mENzsqWMKBcx9Zm92cUmVU49D6rzPCKWugzzvQX71ikXuZz",
  "key33": "62LZzUjCrEaD8hrNsMHf6NikPPaB4NZKGgXBVNyyJ6m6GMxyhSr8cYX3J53FpxeykiaEDigRzfiGNyzEAshxCX18",
  "key34": "4sn3PMixFyDTPu3Js8xyE8t7pBCHPN4QmRngvaSZJ198A5F2d2ovCFQvkRddu4NuWEzndPgDabkfu1wLtCtXhGaj",
  "key35": "2kvZ587nrZoH9NG6UmxuSrCxjdwt1dtLuKz5bk3ps873BdkFbDgeBqmcs1691NAc5UDWboRkDxHnMLdM2QB2k1Ry",
  "key36": "3eBZX6ebPSL2cVSCtdp4bbxKDz64qnrsqdUwSKL1btyTes3QnoucN7cmrAKu5EN2ytWoEPQsr9xFRQb1zYmAR3Vw",
  "key37": "3uFACZX2yroKBHkAULRS63xaDmVqMzihTSABRVQwPsBYbyUWRrgExfjFESB55SceYLYWxhCPyj15AEicgu148dRJ",
  "key38": "4ZBRCUiucJCjaHpPpMwEpu8z5DfYhE2oWrYj8JEzcaKSJPeHHx3AC834MpdUVtJ2hTJhWUNRp4uc4NpaCRPmkA8e",
  "key39": "2SBm3GqCp8S3r3ctzQmax6uELkKirV7evhE94L1EN9iDhGc4y4JczYEjU7C4wVMt2Akpfzg1EAQ66Si2TjG7fARa",
  "key40": "2TZWJg7fw4J9QsPm8hWxv9YYxwvFogWEMSUwDc2Qj8CHSpxCHCES8mduBBYhTh5zXMzBTQQ5Qk3DdvkFvDQNBacF",
  "key41": "2mECmjvCTX1SiNgiKnRpRdPTegRJhxchrXDAJaXMHhdnCmdsP8eCutwuv7mXS6Qc1haRYhhCj4pMGtJjGeidQfs9",
  "key42": "5phPaV1zbBcMiTTa87s2xpJxoqr8p53wAb7q6ofvKMHxrz4yXsET8pbEESighfXAJk7eN3UwA8VRUNKiAy9BJriL"
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
