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
    "4gaYXZ8QTY9G7sf1QSBwYNHLwoDKpQa5M9Auzz2w4UFi2rZ9RbqYgiZqi9UdSfPPDoNJ5piH5QkvzkxRef7PJThw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsoADQyqi9nW9pmgqKkc2w7XahHYRV1Bfr7jYT8DUoUqqyhrp4dvJJnWfwGLM4pYSAUnSb6UvMnuGQoqKTUrfCX",
  "key1": "3CCE81vP9NbZCFe9RZyo16okTGYyJS6chZKenZ4czv2nZP1aagrWeMzq5N4JPHeaHdHkdynJUCfhbxb7D3dkAFyT",
  "key2": "2BjkfmuNgNoJjBwonvfwsupM2jEG3AFKMXCEczjoAVo3JREW6oxyYkqDvsX9yZFkkzC6L8uMwswNWcv2G3Zqmvzn",
  "key3": "5iLXhQs5Y8HSwDfSyJbsW1kqkk3QaBuUXWVUNpsLx2p4JpnRXmzntSKq1KFsNcLkZDsBDwHPzvKDKxrgUrZSc4Ka",
  "key4": "6gvpGi6PSaSgE6BZRz2RAXeFar97frWEqeYfCTFjijXBXQWfBHG8jvH4N24x52PmmCrHhBsanb7xQ7FJQGrhvrL",
  "key5": "5Ruk9bCZxx5zZG48P5ySFbNDS3955BhQ5C1WCZ19vq1uCn296DcJHX49G3QZDkfMXbRj5UDnDVgh2uVqQjiQMXjP",
  "key6": "51dyyt4ioUBBcev1UZxjQKEkHAqERAaqLBnhTGi6Xzsz3YqY8KWACMFP59547TmKxHJyargPRWjJLeJcZ8GhejSB",
  "key7": "3zqg7aB5cYrSmXGVyox5iqQxMkJFjhqAptEZ7p1dbvkfatBXYnbtFCcb3ETvmiD8sq9Mk7zoYdYLmvXuv29uU1ej",
  "key8": "vmHHAMpE8tFfJYRjVtWZPwhXW988aiiZomRmecoFNHebHiNJBN9RayT5yxUmC65oZGsJqRdiSfE6ncMRdxsExzp",
  "key9": "3m234kdycUsWxByEiYpkeJKPv1HvWrJq2YTMnnicncu13dwFJhqxyvATWeNnWAssSqguMF64tJ6hnhgoNgejPLYT",
  "key10": "2A2BVdbYfFefmr9D6Pibs88JJZtqUCx22jjVWkWGEd36QxWf7rdFt8PEPdwC2XRupeF6nMc7dzzxSTvpQYDDQdnC",
  "key11": "2dz2yM8mz8vQzj8BML6KLS8i5YLS4EUJUd8UynEJhGXzUBBikAz9tQKquvRnrA1qamTyan1SQSUszEfPVB4i3Dd6",
  "key12": "3fw9jaeHtFUpLPN495cMHm93GEFBr99CF7ZevTCTf7gSepSCTwzH18XzM8jQzsDwypyJa8X9tAPyGza6bg9wsUfo",
  "key13": "4cx36snd34HsAtZmwkWvqMgDEn2nEUMVWqYjyddoyK2N27YpAqr3TrMtA9Fger9sPRL76t4miaSBjWDzzgxhtXKC",
  "key14": "5xcuUuqwkU9CanrKAxne6Hz2buzYQD4jWBjLsK8aC6o8bFid7xivA1UM2VpDg238wfQda6QMek8QDGKio3Rzr8r8",
  "key15": "2CCZphvWTcVWwK6x6MNrCnCL1LwoSe8izdxLzcQeLGGHT4W85HEwpRcMYJbUjtfEFpx1DisGHsTBwmtcBJK2E21c",
  "key16": "FugJSJw9E3Siwh24PoC7YzgTT4tjAyVBnjhQrMLw9pFzQRL2RuSHPcVRrQuhkDhFCv8min7DTprhhyZe3x8qWX7",
  "key17": "2SDorzGUS818NzSNNgmYPtYRPugZfKcTiAYxppezS8CGxCk5A2MFQktRekTYP7rjGTiteBRfJsNL22NrtZu4nNht",
  "key18": "4eHV8y7AfAG6t5cB8RQ3NLodXDWfCz51gNfwM5Jp4hNV2afvEtywzeEhu9LU748F3GvrCFL1ZnxzJSL6FzixCCWe",
  "key19": "3yUHkm7KhmEECGTzZnB1a7HvzMMjn5fZMSBcRyirfJUbh1ejpruXqXgudLj6sZRWKckaDWoGNaKcMZowLDSH6hEb",
  "key20": "3gXNuYBma2a1yCNx6a4o7FgSKTQnUoox1nfEBfwR36XETPcUfyTHyJa7qs48NPQVrQDqWUasDULPhfFY28MVGcWo",
  "key21": "44BVbr4mss4maM7X9G9iQBQrejHEggpexXP2UDvx2WTFzNjmwjGpAkZeFGX8pU8ZrJgkFC7NXFzBYQbJkKA3QHfD",
  "key22": "3eVUMgScyrMn2f2itXHR4pzk31CiqxtP36RR6cFyALqGZN9RHzfPhz4dsBkFP2hcCW8fmWs7kqJ67UJbjYEzLK86",
  "key23": "4HRhkEFHDcmepeLNqVkvC76H8wLKVJS2EkxKrXANSsK1EpSsyoRNcRZxvDCKqjzRYVkhCrx3WHZruw2vaUhAdhgT",
  "key24": "61viiZbABgEBesdyZnBJsXS1JKAFL6EPLhPrk8Ag1VgtsTvi6u11nesNfdpdcZbLYqD28o7S2WdDQiniupa7yeoS",
  "key25": "4SLGiVQZ6QogNm51MzRmPZ1KsgRz6RaWM5kxvwYE5vrHToRapfKVbGV7SJL8WyB1KpAWoQddivAdnDq3yi355din",
  "key26": "4JieqvsR5wCzzYkv45R1yLCtJhTQ4pcnAgCcBGwyZT7gKtyEuFaezwgk9t6hRDHUN9yVjk2BQ2v9RG6a8NjdFaAa",
  "key27": "5ZWuU7sjkv29dcxmBBjr3dfkFNpCWmdeZXPQTHYEFfiH553D5tfRv1itKYVnexb172FLXK2vjRLonuKiQexdTSQ5"
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
