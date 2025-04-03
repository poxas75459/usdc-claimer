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
    "3Fnghdr5uEnLvDTx8b3RNZwnjW8fxFzm1ewBsXwm7V7UNpzxQfTMgvAwUum9yg3CyswGc1Ki4zcg85iNDWeuJQ49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63w6HTLEw1mQjcdm12rnfhSeCdvt8Kq1wfaVHv4YEKc3UdszeaYEdRmncy1g6Hr97auVKmjsfWd3ZLyA1FcCC7AF",
  "key1": "BV1CM7Wduifo8FTgtGaFATr6Eb9CHGLNQe4LMNLCZYgxJvoUQpREJRPF43NwPUfXJBhNxM4YNk5yy4o5vRsjRre",
  "key2": "4sxmKxLNH9S8tZnPVh3aogmLYQbe4dsb5Yg7Msnwb3YG8tMYuP1ZGU8voqbEEmRD4iEn7ton9RvbFURDTrjTxvPb",
  "key3": "5CAubk63VLmrEWRMvUpESTcmvmxz2DNGzsMgGFWFJdhjkQuGEv3vvTbJvqFhgo6iKpocnuSY93nWUDYQb1GVanvt",
  "key4": "4Rb7pNk6193bAP76U1Lvs6JvnSab7qASo5B3SMH6fEjrbBaD1eDmLYpHegdqTQYuUAxmssj7J8wpuvCyk12WQqGX",
  "key5": "4WcTT2W99E9iSfY9ErWmPXsNR6s6Xdj1ePGVsyjoU6qPXmLq86YcFZAer8ezbqTArXBJ7C1grijFztBueMvaxPZf",
  "key6": "aYLqfgESoTAistwqE2HCGf3fnD8APNeqNM9QaM2KT2Z1oskpunNkDqBdQjJedfpXvocgHABF34PBQ1LK5ds4Vnp",
  "key7": "4CC1YYiTinJvyubCiRXueboQn7vKusydrxsbXhGJEbPxLW12KGNd1tLLHSddx4BEmZuMyAtTCqDZ8C7eGZFsHzyp",
  "key8": "57sY26mL5qDwQHSptdVC4qtqFmZNPzRuftvvsz2Jsy9JMGqpe3CP5AoRdoKhvFRLRDFDXe4N92wwiLNVhER7gSGP",
  "key9": "32XmnQmzByZxFusKNNzCpbCkzXox4bvXAh5pU4KrG9Ndm7Ugc1zzos1wT5gd1fKVmfaA9BvkDJbFvgvSHXXfXPwc",
  "key10": "3CN6ZbiMEtD8opP95hx4U9AQkfAmc2BT9MeYYCVuBosLVHuCL89PUfxJJb7SfoGpXfjUvRcLbsgQ3vBYxByPAFEZ",
  "key11": "3ehAKZgaEgM2gW1FatvK5Yi5oiGqwixdkkTTmH43z4uBWocUricaVbBX9ShNGKhqaYYooMLSB5cEVqvAvdKTpWDN",
  "key12": "2ipQ5EoXpQJANJJwohgvWnHcroCeELnMJ5d4aZAhJaMSxwu2tM83JJY2QFiyrozcSPPt1KVNVeUeiYJaDCVhLWzt",
  "key13": "5fSSA5SwmiMmhCkCyYwYG5NVvG9dbZA6CPXBxj7zr8BYw7X8Ha4y6cqN4PS9Btuj2Wq5sfw5TEPTT2U44BE2yTPC",
  "key14": "3X9xKwcHHkki2sdq3EW5yW1Dh38C8kyEC36etwpd2cQVYGS2wEeJvjnjYxzxBk46P91xmsGwXKcTcqA6zAHbz3jJ",
  "key15": "2A9J7ye9GJwaUfEgTNUoaU7v9to9bqDUJNdoPofMT167BjNd6afio3Wja57itXf43A74wqhZh1yoyasbBxVhKPpM",
  "key16": "5FANcQu3bLBojw6kLYVgWL2mMMqcY6HV3HuCQXFAQ4op4JRHQxPJ8sECsZ4hgVduWP7SzRnoq1kzdVgMeA854FVu",
  "key17": "3V6x2ZQRdqfUCH8g6FqkFQjp6YfPGdPs4K1pEMc38RyyhccDwSUKuycSife6YdnMzixgcd2KQyRBXyQ28wRnaszQ",
  "key18": "4V5QnsjQSovzAtG98HEZ21VWsfJVUypZtUwxqbNvBVXot6azWJWWUJyUS8rjsCJWWzNMaK6MLLxbDUkLiFUogqST",
  "key19": "seCqZXkK6XkGvWSGGveBF6NGt2UMqKRMFvAu5NfsCD8nyHfkrVmpPg9RuVGXeE6cs7LA57MyTZpca5DXdYUkbLp",
  "key20": "4wiXM3BX3649Z2jDcmcPvYm3PiAkkq66miqYV6mhkjnK8eHLenArKh4feFBKVpxq71nshdKLxhPfoLekJP9TuJ5m",
  "key21": "3bvAXE92kthDSFtrweL75G947eJeqG2hK6BvJgtHCbXA16FRXWVjVxVi8fShvHy6WZSLGNfVQDG6KMXKSbQDbSkY",
  "key22": "49rvGSEELuz6nhvDF8Dh8f9oDYKcZmu4wRtEEaUjjvEBX7egBwu4acjCqCBtiFsqhekzwwMqpeGbv8FqamPkHK8M",
  "key23": "4ccRByiZaeiTLxojry9o7AkBpCpUPKqA8kZaL29NgV9Veiev2xY2bKWDkqMJNrSgiJcxQbG2K5L3k2YjePoFoPNR",
  "key24": "5HNWAjFRohH2GRP5md2HCfAmUCXjzmLt6VBdeJTG684FNAs5ReLLptoi2aTmi1T7wUpgyoG5XPo85vdZfHMa95Kz",
  "key25": "3uJx61DpgwhqbZpdx3HF8yRThe453K1XDC5ATtE6D5yVSmgjwv3A44XRcqmWvDN7gunyf95Aj71bu3uwMVspgYd6",
  "key26": "5vr9KwVUCn5igAPA9RB7kmK2XoL2XLNvKxJQCJgkxRuBhz1zbY9X1UQuVXNGvJPAM9bXKHnS3FLPx9HvLFuYojqz",
  "key27": "2jhwLDN1Li9gSA46mr6AzSxiFsacYZcrtHU5GjatYukGsptnEDGNdSxbKtsakUjRPDavJ8qoJgiq5sHvXQkhyGc7",
  "key28": "Y62bgB5Xiq2ghpXmmKrditLwX424qQeEtu4X9UmgTeYBbasumGWp7U6JzX2XQg1WTJU5u8pma9mtuc45kv2WMwc"
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
