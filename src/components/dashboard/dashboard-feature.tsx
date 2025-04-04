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
    "4W3jjkzVPi7beQZpBVkUkueRdtJk5Knce1zMM8pWw19V4A1Uk5CtMCKYoTjxCNk3TqAWRJkPXkv93nscvSxstGAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2yYMhSUQZoAd6J7fL395YvHC761MH2yBwivT1sKP75iv3AzQg8hjnmvMZkPvjycgre2FKs4Z13AW4X4hMyZwVK",
  "key1": "23apvnueDax8miixbir6ARK2mrTtc3cuDfD7vjEEjswHb3T3r2QreoSaBQH3VqeuMhYq4NW3d3te8JegZb1QNd7G",
  "key2": "327byTmEk5xBjqBEUDVyjg8AYq1B8d38SwDFZVvYR5vYNMQmqSU3u4EEtY99SoAhyyxiECjn6GaJwNcTgnJdTFf9",
  "key3": "fRMwsgmPWbge1pMjvvSUqJX8yAz4ba6Ve1gH7Bx65i8Ma4wP5adfqgXgeAE2Mdm7DtwT5Nm2vLtkR3mL9Yym8vg",
  "key4": "4m3xQaNRpXLTFC1U6CGENEMk6tV2QpkysUeT3RtZGwdXLZjWaA8Ym94wFJ6y3ckoDto5cXdrkQApdAfxcySoPxXh",
  "key5": "2ssrKDeX2vzHNj15VgRj9fqFMKATBXXsBdbx4UZh5htsoXu7nzY2p8dFpGzSAzJym9GnbJThLEuYa7p8yt57msYL",
  "key6": "4rcEs2auw1ppfsx6i4iAqnASbQ7HMTJKX3rfEEuyQqux6xaQTJAt4wEgUq81nMPp77bwabwZYioUeEaNJnydRQ4",
  "key7": "5ccvGNh9o6YpwUnuNBVeJJoVpHAj4Qp3rcdQDSKwsVNKjHUfseDrhFcZChYHxCUvi2xNqq7Q5R4632V2Dxc373Wy",
  "key8": "3EPaFfdb4yVLXW16oMv6mFMy2zHFNWJkJfeLaKotKMe7zgb3nDaWqvZpn1UGVBf37gUYTk3xhk9vUwPRHeijnkYd",
  "key9": "2uJNr9WHCQxH22ZbghuDxptT8rBzUKqFGJcCtj3x6k6nSaSopFfps9Fb3e6y2Yvn6RDLqtBzBkwq3vJAMkL9ix4C",
  "key10": "kE1XXfC4Mtapz9RDTou8NzkW9YHaAu6q5MwdxQwwv8wPYmdYJ3NUsysHF3AzcXBMAiLWYoSikkj3jT7nYnZYAvT",
  "key11": "5kV16At8X8bTj967i3eYkggdC3ZXXhmwijVf3gMVVidFKqFUPNaes1YyiPkZxCKCxYVyZM6eNKL9mf4677U7RDn5",
  "key12": "gJvWFMz3ojnCwCUSSvDqpK5Uq1LqfxFTet42QPQofLDindRrxzdq6kgZVctP92VVSXb1SvF6C4LzhVyX19aoWiX",
  "key13": "48jYqK4r9u5o6YfavMJoQNWCfUu5TdZor17bhBfEbt3gCsAN33gwB7wiwWc7QtjVoLcDshqpMRy1QfuGmMczEEVC",
  "key14": "43bUoh4t3kGXVopEdhs6hVhTSC5KtWPV7nnNKFCWWW5TwtQgjrxffhPq3PvD241boYqkG6Wzu69hjwBk3zP3JBgb",
  "key15": "63gPYR6Lv2ta1i4cQTY361K51MU2EkPiJBCuMa7Axyk6RskK9ZHU6aeLzWAcdvWFVBVAgf2e4viPAuguRKptEbRc",
  "key16": "2kMtZRP8dCgQUVi7oKhngpgFruUXFoQ1esQwmTsi5SkdmYKd4rLyMgf3v48aHuDuutRM3vCZB5NtvdEbwrzdehDo",
  "key17": "4QoAY9sRCkPUyKjoapeei4XzuwLvmaZjYiXCYy2X8nhNiamfqrAYpgPz3MqCmZ833RybgK9ixtMTjL1ymDyNmFS7",
  "key18": "3BzaLqPCHLyMpAP4RpaTgNS4rYtC9sGsx9zvogpsVQU3PtvGozj3EhnGGUK1923s5L2aBtMajevMySouZTNMw3m1",
  "key19": "62zFDvRJvhFsjsCHLhydmAeVCDyJLuPa3UARi5n9YcgFE6Kj3oVogtnbVz48gCYMCBepeXyEt9JPeu4Uyc9e8oDy",
  "key20": "iPj6Uy57rS7ymu6zg1m2crWB4jcWjJeDGoFUrAYxSTaoNRBb9sdsWo92tvW5dBEyUf94UHMb7zyoAut3s3pzfDu",
  "key21": "2aiRTkSc9wYh4SVhtjq8RG62iYJQUqhNHgdYTdLc9NC4uWzSvBnswM8Hby2BWphmVmEo4GQVbi4eZ8WtTyUtTgVY",
  "key22": "dADkzKPnuGsACofez7gCMs4eSorrTG4c9KBtggV6DWoYL5EfDcCgGm3M9akZLsSzDRnq7mFixCjexGCUwop19dL",
  "key23": "5RtVK52Rg5b8AQDBG5atdCXjfoTqdx557mvXxcjAmSynmA9HNFeawBtabm1bygo83RGYyuhTQYUe4W9bfJdFaXer",
  "key24": "3mn2GTBoxDdD2kmKkt65xJGhjtjoHXkhb1nh7ANtTh12tYGjYxvGp1QdQG5kzgSMKym2LvUPivyKLLtLvrkX1QiQ",
  "key25": "4HrEAjQ4NaoQCF5qQXTV2GLHk6tT4s6VxkNJkHoCouoWhDEkSF2JdANMKpVVwQG7udm3wHVRmiSmcRgjWigBygsw",
  "key26": "RzizVCKWnhGHAa58sHWWc9H1Ns5BCXPvbinrjWXeVigWGcsvz8hsQQZvUVgFgnVxP3cnLytuNzqUA7ygFyw4L4b",
  "key27": "5ytbaBXfJbKLwNAzneHQHTdq8pUcW9JvjT9EFAKUfmMUwfiDAqjLUtRGQRMjLqJcSrRbwwYYheF1FgHGhrV7SEam"
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
