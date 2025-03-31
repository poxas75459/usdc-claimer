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
    "3TWx5wfmyBz2JRparkDe8eQjC2RbB2GpWHZ9xvxebo9aGUaiRhUoAXviJH3qED2JsQPbQvHBeBadat6GG2EGotDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2i9yRwrQZ9oGYsAJDRKT2xbnxqzhkTiMLbjrtcnuqVfUFVr4kAEnV1sHRM9ZQw3QJR6Ws2ngkLs2zA2cvmSfxJ",
  "key1": "4wLCd8CRcXXsqF4b38nX8vF9YyXapSaHvo812v9znU5RqC89SEpw5v76Npdfczx6XpP3SAZcnZmnnnVSwL7Ba4Cr",
  "key2": "xYq4pmT1KPngyM7gbhYJsdKCnzthJ5pV9xDSZWzebAYYYz48WeFJvsXD3oHhgf9THG8Ht9nVDVRsA1VQ7DJbEGF",
  "key3": "25cE4vMLnrddZxkdKrBxCQg3RBKrznPp58z1AXPMSM984G3pCcAAmsRoYWgzwDuCZSAL7sL9X2fRdnKeAv9Vpr5F",
  "key4": "37PugoAqu2FxBVoaZRjLFpKyQdf2pc4NSDYsGnL4YoT7N4q4YEQLF3FNqbZqGou3e7U4W2MvfgeLYsE1SxFveNCS",
  "key5": "23iDAV8CQkefJse8qwTnKJr8TGyh4sZe8fREo7FPgyERZSnaJ69X5wqkccCXxTCwNVkyanXgHk1VZdYWbabu5YPN",
  "key6": "31ntycQZLde4v8XGiNjvVnRhhPjBFNN9GCgz8QiTE1xAaqUPw5phP7BWZdVBrpS7hQQAhxjmJV6YDUSsEt2x1rUz",
  "key7": "59Jj451stKzKZuGDGniiX91atseoQRuA9Fn1pAvt1kitEFQ7UHU22q8WLSFCfwnyV7HQGfRhkJWr52U3csQ8qWGk",
  "key8": "2Tq1mksb71oSHeCotXiDhrYcPm1Ba8nKHGegUGxU4NDixQeLDLg7s2Fe7LZmeyu35oWuJDr6km2Y5JmhpSPBrVd2",
  "key9": "5iqGCXE6hZxXgQ92c5yz8mqvmk1wK3Rtyxes1wURizDE5hRMLQWHRLUqJVHGQct8Y2dkoXjgMhgjncBukB66tWgA",
  "key10": "4tNdRe6uxP11dZHZt9xNHg6HW2QUQhwkVS3jrHq42Wpo71UbB2LDm1aJTsJxrrXjW6Dk27hMnbJkjmekHuzzw1Et",
  "key11": "3f1xpm8PGQF7VKgyoVj647BEEZP3ex8YiPFzB6ipUH61YxGryvn8AkMwNygMEeW1PBeVVBUoYDEiVGtqdhPHBXWq",
  "key12": "kUcjv6t8JCLFfspcn44DufZymToSLeodrtQcqqy2zEqb3t3fPGpM8oV9x4WScpwfA5KzXxtbLYwsHyG2ryqCcjH",
  "key13": "3TqtqukRgwoYQvwQqbekFZpCqobpV2HN9adnqdq29rTXV97N5ok8jRV8M1s66YC9jfPsGbc6P2LmHt2ZrcYfiwbB",
  "key14": "4ipVZbf8KRkuaJMWin1KsvbzQoz6GXTu34HVW9Yxy5a7hD9bD1Xm5A1aS9RaN3uoeqPVTeR9ozPmzcPfipJEZpAt",
  "key15": "3oPa4xVCmqAKCFkDcEuRshHqTenwJWLZfNNVzu5fCxSPVwSDCdEdPH6Kwv3y8Lsu2BdKLumpPjyrnHKWpP7rjq9U",
  "key16": "4yvQ1ZFpULht4mwRZCY3rVB8AJyXRozfupt9UvHqSikjgCmYnSyMmPGjxxf9Mfw3V7Cnjhe3Fn3Fw9E5K1j7CQMS",
  "key17": "24sp7qcDtSZ9FN1XLVJE61mYQBL1BrbfL4mfn2g4eqmaBd215a4NXdzBdxexGHWQM5tsZHXmuGKpFL79wuq8k5FL",
  "key18": "3TH9muM5i3xLbEpgLKYU1YacAv3h7Av6uwAx8sZ9K5qSCrwRcwuQfG4hnoYmEHXt5kgeDsVtkbjSdKdfZ5N5Jeat",
  "key19": "3x1N2TDstZy55mqo2MuPiR4HUvyJQBQgJVLf6j4LFw98kSKQcPDNstDq7SKmKp1Y7NHWpxtgfLmNoFoHyKMCiYRk",
  "key20": "2fzh41KT9uRLtdBRop3k9wGu89M1zeKQRice3wBrqj58CCEA7JyQ4HJofE6828kMCp6MRwnLsekpKTMwDjgFtAte",
  "key21": "sxjVvvfKKhN3aEZseAymjAC8GbfCL38c1PUt84a7uhHLGqSA5Jf5EP17mrMGU2yg9uNUCKdF7PskisMqgdAckN3",
  "key22": "4nvtGFbjp4p3iYJiWj67gkPMd2T3sa2fN3T1zLaSL88Bco26Jyi2jUJhBdVgG2JK9goRUNq8YJYT3Dd8v52KpD1m",
  "key23": "68dTnJvKKkVsyKF1zvDYj2VRuRh5nfnovTtJbnxcvJzAFhYXJxiUgpKE8SPwHiW8nM9BxxsAK2iuDN8Fi5NgMUs",
  "key24": "4iViHY2BC8SuHjkes3KdaDw3DhtLFgS3uo36VWdmekdAvkNvdHfWsxoA13tSY3miySZYAXKo2J8CxyQ2vuRftX4C",
  "key25": "4HTtktn2uneErjrrW2rXU1QRj5dokL13BsrvsYkjbW9ofcBsgp5rKUayK5ofc2YrPzvHWbT3kvBuxk4KhQWEKoF1",
  "key26": "3PWLAEYNg97sYHpoqv2anXrSoBngVjTYs8PcYLf1c4fs2Wgke8QeY52YaXBKgZMmwuTkbiNUBrUyx31c7KiX5c5c",
  "key27": "5LNYwbTqT7wo17iRhwQkEGkmvuMJHUG8EVcwJhp7YVLEU95QcRxA2CfmTrdSB17Ljoe9NonjXEAfUB9aAqH1vGUV",
  "key28": "5Adk4McK23Eoma1YiiUr6zdaVnaQ3VHWkJLAbRpyVym1v2VUnGBHpaPDB75wtGcEP7jUetfaYfe3zPWcvx5qQ1Pm",
  "key29": "4wKAPuwKpHhHXs8Y4FoCj6SQoYL4khrd6HFNWVcLZ2avu56ca4M9qTstYGiYixzbwjNhTbZzwi6Me1M497N8Lanh",
  "key30": "DRzvCpgBeBCDF31kUKzyXiKqwDSdKM3kioT7DfHyWqPepjBvwUtFJXHFRUw5NxNEeKBVoGr5Am9CbttSfjCCyhN",
  "key31": "4m3277wTXjJoDPbES7hb9CTXHzRVVR7ud9FHfGBbqSzSXpwEVFJ72XVSh1ETrhc2NxiXmEXZi5vgE1KjXi4GdLc1",
  "key32": "4txsMP8x6NdeztuxMZXywRameBUuw3bVHoQV9GKZBmY9ASxxebyDAytwz7RrVev11yAGUUeVUcKvxDEyiFHoLPZ4",
  "key33": "41KdGiFQk3ztTe9WNNLnxZRUYkoUu9QwWJ2dXGfkLx8LPAxw1RZPdqyDxQg3r9z7DNivuRwemMZ7Kf9XraUD1u97",
  "key34": "4fp65zzziji6yi9WvJFTcpSy49twQkzX6VGhoVt7qrSpeD2bFb5qmRFPpX9EhDTKvPyQUrs6R1qGhUBEtot7Kv7A",
  "key35": "5eJsK2auhyn2nV1f9n4RnxmVq3rvZyKrtZDPJMfcSvsdKMqBriXjvYbvanA7XseJjvAQqYiEAdcAp4DH1o9SY3fs",
  "key36": "2sTjXTPLvchKjLmpQiqieVEGg2s72ZX4xPPD9nNUT1qprqFcRPQPfNPJwGagY2mD5Qk5UWL1Pr3SPLkNAFezEJCt",
  "key37": "4HTsqrzCx3G7upFePSj2owRKM6nFuRJzL8XjfsjmGsvLDasEgiPW38mnsrai1dwahtg6Bj9Pe81Tjm34zGeiHw25"
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
