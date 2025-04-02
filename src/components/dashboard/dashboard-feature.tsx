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
    "5qDh3P6kCnv21NSKfknxR1JhgNT6BRs4wRCfmNPHr5HBVBxwRA4Ebc6fYZGDtKirHYLWmgB13Qrwg6xHvkAwbXxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596TGTLkkoZFmd9ruBYS2Nm6iY2NnG9wojbDTCK3L1Z8BZXAFuUHy2NGHUZkaq84NuKEqTueiDgn4JeZRJ3NfhhN",
  "key1": "3MH59ZcBWus3A3BTRXd4QNPor3ojihjZaBgNqgnjwctj8S1wYZouLJ6jHoHcqh62PVjH55yVLe7x1g6Kmr1x1Fzc",
  "key2": "4tFprUiR6BtrLVZ73GwZEej6YgfRQkk7QtpkFiv6hjh1W5qX2DCt4ednXwoQpuWUwY9NwoR8KTukdp6ciFMPWGYh",
  "key3": "4Gtqux7jn4BjWo31XNqWAxteebe6xWuw2HVh3Ycq19t4j9tN3nk34Z3ezt6iFBnpwo5Y7PxEGysYvbjkaDm9cigU",
  "key4": "3aLoc9GZRv3WwTkk4RKy2b6BWLtni561XdUwr7hDiivw3u2ALrKznQeQNbMv8VW9BmsTvHpN6M6c9FymSni44M3F",
  "key5": "3Lw828TCXykTVKvyH8WSAFwVTg49kb4Cu9Y4wdGuZW9d9p4JN1Mrg7fhtp7jbb9hGhNXA59v2GFf3mq1j8STd22p",
  "key6": "3sj5YB2wKhMbBUGJkc19tYMKgEa53ZJUesDsJJ4rHKDvaQLixcPeA9uMZej2Ay6YCPdckC41sBwxnmxAEAtqWJX9",
  "key7": "4YSRQQKK3mePg2KeSb1o3MWDC7EV81GKNsYLWkqFjzGGr2tT65JpCH4mud3xghcXJG4Ne4tESPHiaU77Npeo5qJy",
  "key8": "51AcEzkm3TPpXUh4FKLwezmsq6HmHfgKPhJX52wD3CNFWQJyxNs3FpZNESPE5g2YfnKmBsYNfwKq3ceufTHSeyYW",
  "key9": "63JEiWeFB6kxC3k6qnhCtdWUvEufgtsU5Ep7LBR44Pf1EkHG9qroRQgWeq1SsmUjRKHkHpwaDaszKCuPw4632mrK",
  "key10": "3B4Qm66owkukZHaK97UzGQufgcs52159gRehkPNrdVfxmTFV4E45g8zJ5mzY2cmsFDngyTUqhwtHqL5u565jtBnX",
  "key11": "4DGUQ4Wk9XPrHRoYGCPYix35ZGrqh6Ypmi4ccepqjzuWPHx2oaAz6CCrFzAyML2mkRnYgjhyz8QcxBjh1EphQ8Ey",
  "key12": "5iYZ7ZocbmAzw871FUBJtyMUhUhf9SXi7bwU3PKG4Jhzt5pU5dZd7JSCLHWq2DXUE98E5Nfop5ip1Wd31QQNZwSK",
  "key13": "fu2Rpj19Lsg9sVRwbmNro6JYaZ9mzXQadKUyonKqqwFKpsdy1AA7frsu83Sx8ozadWKPwbXYPjFTDBSUT6icoHA",
  "key14": "4C4Ky372MGwcibZWDrxadw7f9vzD9EKtcJKpCwtCjc2u2fAuyh6GwyZAYnXWiGdjx536iucyAE5G8WFXcTWabk5K",
  "key15": "2x18SRwD4NxMEAY8JSFqNHJ8RCbFbUneNh4AjQ1LqDfK7G7aVRj8uSDMHmaduSQBz42BEokVqGedUfTfQDYyJCr2",
  "key16": "8E5twGym1FS1WGECZ1RDqGdv2CPvgHHdvSKkBtNe5GEXXgVvDGBt9A66YAP9N3S4qsLzn6pW7AjcAmbokG93uw9",
  "key17": "4f2bfKTksu9e1n9Nz7BaCFnNHS4ySUitnDa6MU3KxpqCSZJ3kwDyg7ZuHTyr6uGD7M2Bxk6EW5WnpdzDqPoVqREU",
  "key18": "nuv1gRqLk3MNnt8AjK658k85iDYbEkzTnVoTyHimR9ttHdS76y3eaHimk4SAo1WRm1dMzBfXjFuCQ1jq9VQRrkW",
  "key19": "34HEn3h7QUXhkqsQaDVFqNY9pCj2tUrds5iMnQqTfntu3X7tcjNWuj2KZYYyaY86krj2GJhdnSkDxoGehAUcs4TS",
  "key20": "38ZXzbWUNpzRBxxfg4D4SQEF6urbbjwVSYaVyhRpwBgwMpu7RvqMP535sWtzau9Kp9Dj7C4Kwi5yxV2tmxq5s4MN",
  "key21": "QKkPBVMhDYWvUurE9Yd8hrLhz6HxzcDFe3VpvZshVNTC8s8e3SvJuBLg71JQMVomAu8D7qgMTqT9cGugbdYw3qP",
  "key22": "2KKgDXiCcnLbf7WS5RJLWdxcs4YEKcqsdUebD7g7xrpjE9b8waYxXJa7cSvzCvkT4Xi9ghxcLLCN91zHGHCwMZbu",
  "key23": "3CJji764cgTZuhYjuWMwJQdg8yejhgR3krrGYpAG6EzA6kcYseizshQqH3DppExwqsopq1KSYhEwTDtyYF6Tqmff",
  "key24": "21TgDHgEqwSYg1aBGYpzyFKq4jdPuYQRENMtJLYLZ591n3o1xmfTMQwLZVD6cdQB7PBkajqLPGcsEgMhyB84iXpj",
  "key25": "Yuh8WRydnwPXEoGkfigcjVgSkia8ovmv2HsQddvAHJXNShTraZ6uACR2P8nNAg2ZL5rsWT4ctkV5JswRRQZJ8eJ",
  "key26": "2TBfB7SzXU15KMdiG7fFNqH7GFcVmfUJryvGxNoAmDFzjci33XkR4buQDouvYJyFAvbBiDkvkJdZ937eJP1segtX",
  "key27": "4fme4VNhAQcuxYWgAAQAKwvxrE8Hsxf85nW4di8tpZRTRoFG9U1mePvP6jKoqohpR7ZXTJbCwBCY7yUNhiLFv9fg",
  "key28": "fPy8XieWsdeDBPVbA6tf7AcBvzRty452WnLLW6By9hzhzoWiovGgwXHzG2Dsm17ZwUfsqdxdSYQvigjY6ypZ24t",
  "key29": "3epX4oyTuCzcN31d7QHvj6rvTE7HzLruaQnvEBTy3KpruftooLrLLGNBE4WLNyzSKq56xiLWj7yDRc29hQLHuNqH",
  "key30": "2GSYTQuaRNN2BRc47ypJXEcmX3258PinMA2xNaCgv5TLcrkj1HnSqVCKty7eBxbZYrbhPedvtfjiJtjU1NCtQ1Cm",
  "key31": "2QkbYDBUBefJo1YDxH27WNvtS1wMVvYD16HZ6kBcqrRXzm2DQoZCGmmHYb48xYD5UuZb9xyh7aWP9oPhhMJWvRmu",
  "key32": "5Hh4EYstsYLUkCe6CcBJp8znaKUq1Q94JigKaDMkrqu4fJxWR8RMDHbvCM9w9oZDdfk4DCD7wo8CLERhDYEWYD3G",
  "key33": "3g46ZSqkXo4KJ5Kx3KokpQZTsKdYaWFVwD2bW5uLtqwYaQnbnKn7ZfoP4uZ3Pg2qQaP22UfePrZuU8drSg8rVyeW",
  "key34": "KFt4r2vcXvrWbXaSPnmgqrRqBgFHFdfw2fiMiYC5x9fWCKKRMwNShZZUaKssZ9XudCCntkksTWWHDhSaqALBBFG",
  "key35": "3kqfdrnz5QsRmmYRBokyAHm89auMq4d7Nr8sQpq2zwXxiPsXg33nmTCkq1cRi23ZgbSqvtvHS3zdCisHyzJ4nUsb",
  "key36": "5x8UB7WUWQ5QygtAxNjcBLUsHZzCZuVm5wzNcbvNLXonGL8E5MoTeqhPGjKrV8rx3BNCaB2oCEoSU6todiZMqKeR",
  "key37": "5tVXfU15KiaqzUQgt34WntaDdr8JEw5tj2rVaFKAnuspuTsTgsR4T8NdhkdtPmxozLWorzmRtcJ8jnKxtn8MLG1q",
  "key38": "2iWymB5dntzFdRhMuMf6Cc4WUt2s2bKhP732tc7Hj6mQ7uRuj2CVrVg3r3a6GJpYfq9ktJJP5hAGszVwTurhiJ1g",
  "key39": "45qcwcyfmcGRVTihTBYaV2JzcHRhFUEs3HdZQj2CnZfin4q8xjNWuVdt2QKxfjTDQ2Vnnu997XPgprt9SYhXYZXN"
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
