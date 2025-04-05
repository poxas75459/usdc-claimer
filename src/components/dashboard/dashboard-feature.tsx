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
    "2yNGN9SiCpAKYx5h1WJX4jqNLLJhyH3TcfRCMcVdr7DZUfb7XcSUBxCyRwLYFvXA3ET3MrAiPAjNq49JogujSpPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ux2Q8UfDFiLqrGmYHYfWF4euJ75CTu4hf58x2ZsibeBqqAHPCxJ9L67Z5nLrhkoMknsJDjf2LpfYydoqehEK4ii",
  "key1": "2tHQTARQNdpxbq9BXdw1jqYGGv4i7fJZeiFsiprxJU27ku24bnUJhWEePrqTpTeHWeQ4ffPxSevt3xWjHG3HVmCe",
  "key2": "5cCHFAsa5vLXk24V5yDrXzgV8KxA4M246g6KVb1fReSVJA6FphYSGnGZLaiMHSeocdyeFw71Nxa32jvMkGYS12Kr",
  "key3": "Mwdu4f2buxYUcTd1MUnSgzLQFD88pQeMTnFE9hjTa8Lj8RGTUcMcZ5P7PgWXazxvfA1kBpUZWEMLjfnC3943MCv",
  "key4": "42EtrkFaUfGETWkWSAibAd3VMKuJ4NSNCkShGgAAbaWbzb1PqhJYF2m5AStViTZrBtaBG7kqZQjdyqEJAFo5ATfD",
  "key5": "5ni8zjSe5aPnLPppcz8eon2u6yu5wBNa4qjuNHxGtpgaqZwGHTWGmTz9XD64X8sR7qjCHLhc4NELCtMdY3PSGxgF",
  "key6": "4x8ooA4u6UrWWg6d2APnMiFaBuMtSJVGeYifQhkBDDAyoFA7d5zN9MBGeHwXK9Nhk6vTu9sKZGke9PFGYCKFnVA5",
  "key7": "3gs47Crp3kKutjWy2BkEd8t9gMyrcBPswnEccgLBWt7YU1VVeEQKWvqo3t4NdBtYTHd2VAbn3ZX63Hb5hxQANDNM",
  "key8": "3vY5DppujGgmEvJtWLLpY3EsSbEwEBMLRckfW578Nsu3EgvMW99CnLTHqdrs7RgdTpLJ2hrHPqf61TZ3VyGkgtue",
  "key9": "4JB6EuheNHk8WR6b53uSLLzQtE4LeZpvL7jM5ZApPJDeY44E8o8MnCeaAWgGSKoFBsexroRUHEyFTh4WPaB7LRpd",
  "key10": "ZLSyA3WjoRnxtxwWHw9Agj7qaAMkWkenS9hJyDJSnVwp2Gzpd5qtuGccTD1NYUTzhZ1UvAajQpGDnZqg8fAiYMj",
  "key11": "4uDEB7cfLuqZ1p82h7nr7wrrLpFCa8p4X3ejXPAQ9pRNqoac98sfxebhwJzfwWtsn1jM5eWiTp9aLnoDqsXGorA2",
  "key12": "i3KEMP6E5uNMhCatJNmEvjFTeENEExDa58phBHABHxtotmvmqhuZnCzto2645V3jsHP5JnwP4PBJM8WNXxMsdWB",
  "key13": "62U9JheTUyycj2iwYPVEj3dgHPuCeFyTFqWkP5UPrVk6qNze7i5iAwmgFRaLDq3FKSTqdDWMVF5sWpQZ3Ya3bcgS",
  "key14": "39UXtmbvis7cvCWUzGoavzrweWeNVfsS2i1pn5m12jRuX54zLqwu4S5KLbJTMqQB83SYV7uzEDDVMFFLuZP9WLm2",
  "key15": "64diyG7KTKqA9U9eN3q3gFUTFVVLJA5SF5grLc2G2FfurnZNSHGdHV1CY7JXVHxbZCNdLw4NeA7PVx3aqBPDuV7d",
  "key16": "4Gk6jmschCCzdv59gbMxb9k97DeSTkzq8uiQeCjP5jeByhoRgqtvLqL9NsLgJtaF2reypKkGE6U8PY7qJZTuW3FC",
  "key17": "C2wif3F44H2J3Bw89qYwG8XEKAtEQVTtqByPKWtGMmbr984V2FDdn2FE9bZae7hcehd39FWLrw54Sie6Fn4ZZSN",
  "key18": "3tWzD274zn29qywCmaGpvHyK4V1b1URRmsg6EYfEWRcGgqCTWN66vkHWM17VBYm3SDuCERM4A5mF48ycMffqgRcX",
  "key19": "4FHGURZiaamYUD61tQ9mgiTrEDdxyhBzkogjpGFkEPXcbGueJ3H2Yf1VweT5gWW9JL3b6kBkmDS83AcxFnmtbxfS",
  "key20": "3f3G9GfkPK5kSCHeTSnPtkwFEswA4sopwV9dRAFRUzsP3hyaE7SL9TQ8xdJnf8ike5fartNVWxRfA7sAHrhFUa3b",
  "key21": "4xKN46Ma1KrX1caTaZKLZx29sn7vULFfBhBQU34fDQjnAj9HRCRmJmXCNyoSwyNqnFjwSVCTvW58u78ZJWcjxjmP",
  "key22": "5SfMTVtNzmvfJmRpbrY4QGbaJKHUdDvtKoXr6E3dMAHd2Wze47eHiPnB9CF9paDP4pNHMVq9CQSLDRww3ZL3U1s9",
  "key23": "5uePbuj4ftNDZC3mPXABtew4Ba8WS8Sz5kEJf1bYo9W3mwocZjq8bFcDp8GJJBzXanWRkeXPUV56nu7kSrDbiQgS",
  "key24": "27dqm1PR2wt3oqyvzBxxrD89EC5rQCnvQQr9nDmaCJ191BYbSKFBV76VnJuWFZ7nwA6CVimYZe8DNVhP5J2Qkp4C",
  "key25": "3jjEzQo2a21dMrgCuw8KJSBqm6pDXsfKPBprrQ9dqwbLk4NXDkR3cZdUJGrCY7ujABjzdRmeHojMt7hfsoCEMBHz",
  "key26": "4rffjeEJTmF1bXgJfeAPMi1cbV4ayEVwvaKHXqfuXu2iShpo4pvR9vrYWdtsTMGTLyCRBoFpSAJFxFA3E875HZHC",
  "key27": "5ZXwkymzTQu9vxnK3hzUJEc8yH5PaJuPEnjDXJGMjT5tJSX2S7cfrTqvWEJiHoDTqXBr9T2z1ikPs8zccrH7jVGj",
  "key28": "4TEAbn3E22g8GwCQuvLSthRSvvbeMbiGCygxZGNMrkVvAyJMbFAMerFcTfawiVe5BTFVMu76xUWMCoMFnmzkv3x3",
  "key29": "h8V7FGFmkjAPb6zHkyUKLRfdgEaFyi3y2Cyq5RorjwaA1oXX5Gp4nLiHnt9kpkMcd9LnYcS6NRnyccupGbqt8ab",
  "key30": "5oczwsQZzqGi8MXJtzzsvDpepTwg5SnA8QgVyar4hWqb4vFbxX13qjVDjd2mMSQ4atagJtwgLR4BjrQjeu2TdA6u",
  "key31": "3dkWQCiwQGfJTVJhHkMhqssMPrbH7UjtESQMXULQwbK3qtNvNrAqL8xhYJXdoxDERFmBh8qDxVD1xv8sWRSMVKMD",
  "key32": "4daDXg2piKP1iGenNVZ9UrWE2CvP7yibtmW7f2gujPVRgX8nytLjhjVCp9XD2Cb9hfbjmNTMHdFLuHwpVsfe6pcA",
  "key33": "5NyTwEn9SqrKsbGjpjmrtmdX4LSyuaRK1qr72S5m4X4gPqGFf6K6HxTzqZGe9qPkfWCouApf9xuTYAxynFufyJec",
  "key34": "3CSUBC5qkeELeYQxJ5SKUTM3yXSMumgCNrhhRuEGWBcH8iMtbGqPJ3eda9zkcnGA7S7efmArrq6xw3ie9YxAaCT1",
  "key35": "2V961oN4kaZjVVR8K9qvG9iTgKovCXnV4f78nnEhTyBvKtJetoxcEGsNGDF3vaNzAJYrxDpEE5BLJYDKmqpsF4Wh"
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
