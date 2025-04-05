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
    "LJv7bBSv2sJuns2C3RgaVKwEtEwNmNd8VhGCdjBX174QkVTyZgdzQ4AtEagL6GdA6TWzAftGX2p44Gs6U881jEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xX5iC1D1TM7DhnDCaxpFRQKaYyCebDr8gQjeNHDoPPWD6q44f3CjBcMY1goS7n7Fs2k3h1v1rv1Lz2YupQRmtEK",
  "key1": "4ScaMAEDjhuc8vMPTqygH8d8qR7f9AbSmskeQhm5aSEqaHn577UdU31ertUz5csc7QStXuo85CPcbtc8WDUjgrxC",
  "key2": "2AJJfSEKcKa4NZPme2E3S4MM9C4uXgngz7vognBwxLdJMQPsU286DMfNZXvDgc98hEa8bMP5TAaFtdtYCTNxmHp2",
  "key3": "4JFTGUzcUDNcCzj3ALcMnJVZbEt2Ldg1kSohH2fGoJrzoFLSkjt7Ju59rdqYK8mzesEbR6C9vQDJYKMgdKnyCHXf",
  "key4": "2DZbCTNnc7gRB3J59WSqUcYNNf8PNuaNFbxyq8DqQEt6KAAbDT8gm6SXZjnyKvMYWUAGDmAWszguHApbE7v5ySBR",
  "key5": "5qEpN9GDFqvv56sv4DkAfDwHfKG3PuthyJqfPLyP1pPzQurxPw2nu4gdrzeGKkdVGfHtc35VnCCQVWM4Zm9qYKWV",
  "key6": "3aVmFeGMRqjMMjem9SPd8a2kmz9Wtu7MYKVNEiWfiJhS7DuUZ9bf8EvDJHEVvp49BhtH8UqziqfmqnmjJG23JY44",
  "key7": "45PGxZeZbuRFyTK7Ni7RfYpTvmcoZkienv9DgSi33NSQquZkqgVfWX6dz6t37NnJFjyCrBHUxBdD9iLFjej2CLJx",
  "key8": "4Jt7aTkb1JiWD24JnTfGBUFnd1k8GVU9MKQxq9RhyxTeMrykbsTFiLdA43Y5SRZm359cM92qmH7eEZuJC8qRi2eD",
  "key9": "24mD6o7MdfnyocbGzvxuz2izNf3rADboHndRAAXvrCnhSEyinYftr9t7SfYiDKEXaAeAYbeATadKX1tNGAppe1bV",
  "key10": "27xhQLm2NieibPvnET13ugX414YZ82woqnS41VCg6JEoS2GiE7e4EkTSKr7GyoS2BuoNNeWrc8o8agGeTF7pvXYD",
  "key11": "xX2Sh7qaLUWyAtT7i5RPTj9qwVA621dzz1M4tv13HrSPXjGCfC1bYp1eQgtnZpVHJbEVJBEy8pRqgBz7TWqvMJW",
  "key12": "5ZyFbJsRtZjJbdpVj9o3f4Dfrd1rwNXYuv7Za7cgTnYAjjN84gG4VXBKMqscZmjM1Ddqm6yUXDxJXaKsoTz5LEQk",
  "key13": "2wvY9DcgjNaUQjyNfN6ur1VQdz6kNahGWdLiWV6ksRMLnDZ3RxbMu8idcWJ3Qv65cn6s5eE2kCXPRqz1dQQcjytk",
  "key14": "27dnm5EBo5G45gA835MvU9nK9WBzseXhG9dDS1yT1wpomMKmnNKr1qXqUYvnNRDZJgKztc65chCLin9ZCMKHEgx8",
  "key15": "3GfAu2GaKUnF8q31gqUQoqopXsNYWVA891Qj2EpBapAnd266TktpAKdy42jKrR9Gb999MWvpzw6FXEAdaUUTAC3L",
  "key16": "3ySivcg6xg86T5LSUjbhSF2QGqSDpSyqcYapBQUznme2fXz32L81BDiddUyAVySsHNVc2AYwguLqyDQYpChTAfYp",
  "key17": "4PAoANSJZKT45NyfdLqfED7EzSqE8PsFtCiNPkiDDvRQJLu85rxsrYVnCHtiRmZuk6p17mqcEoci4UQjfrFQ9X4k",
  "key18": "2PHMZbL3d4e6vCMxSwrcTewwYQHeJP8KhFo4Zra1bHUxr7SvqQd8xhuAEZU2gnxWGk1RxEgYvYobQmPQ3bHvfRFR",
  "key19": "STrPKtK1sxWMNXJwMQ2iakt9gtWUsnnjWYiFPNuHSECWukhKYGQ8VmJz6UyWoHKLfaZw2B3qGcoFMv5c1Hp1bNM",
  "key20": "613yYQZMrU5iv9BcvYy4go7ePE8uXz2M8LC9XLk1S18G5xaiz5magVrog1vpNJdAB4JowAxD6bk16hhZnrDGRiZn",
  "key21": "UDJfPErzMBFqEZ6Ns3i82NyEyM38ByUGYQxeEpAQTTujnU8qFYg4AoJWTpyhoF8mozyABSjpj2dz1ubZUCs84AJ",
  "key22": "3DpNWNY6RVqZqXoYu935M8bU1KTaVFv7ryacpG8mu3BTdoiT53w5PNHSYeUXxMvMyweQ1TFGxH4TdFJWgQcw9bBr",
  "key23": "peyjw8BSmKeGDZxwaxzJHx9bDjYFqNPxfez8CishC7VyKx9kHTuBcgFtwFivav81LHGGkQi6fLZ4wDTKmX3uZzH",
  "key24": "3uEx72ZYXfuKPXKbPeu678njCVeSpbpv35wELCU4cToVkkWbErBPFwTtyG8NuGTvZsL2pEQicSNqqEZgjkbShRd1",
  "key25": "4JFpzNqgHwy1TfCf4arTbhRyiFPaX16riAAWz5TKmMyzTNaRzQPgd7FUivYrNCWhfvZwdwcGxruCkDyb4jNQUoPj",
  "key26": "22Cq26QsC8cHKjREG5VDzuQeLXydGPo8NCGnHm517sXavRsNhjcWz5WLXtpywMEa96kaDY2Gic2o4nkaEGhX1BB8",
  "key27": "66M7tQkNqckp2fSjZ79cBQ5j3Gf2jVe42SoHuCsiJAnmEaQKtcGfKd4u2ikKPFM6884Zec2u1hFzFTzj6cV48WuE",
  "key28": "JCi6Z3Kse6LoVmcmY44WKZMbjfBbWj9ttm5ofCStYr7Xre472md8vWXak34TaNstjjr3TpM5a7gxx4eTeFBkt2i",
  "key29": "4N1AB9ipVnnFWJW2DdQzrWajnGV95raZaPBLXRSpsTn3DFM5wittoJGR9WadzrTXQRkLcL66aVBcVdQLuYvBxSCA",
  "key30": "229CuEDuL2VL4vodD5t9ZFuHqqk7w75MAgzTshvu3w1Q2aDtkCsJA1q42RRvYpVUXzf44H6qwNVHrGmSa5auRXtL",
  "key31": "2bsJ5yrpuqGne2LTKbja9qivuQZWtUJG4hJYbJLZJqmSoVg6pbVg2MY9Tn22Gr6DLatSFK1mHmSZXSAbD6hw2qki",
  "key32": "58qtgTCx8M1tUeU9vKdijsnCQcLg9U4rtDGZTngYNDisqGXHLvNf3Dq63E7t12DRUYJAui9TqmBt2Fh4hPdNM2hd",
  "key33": "36CmQ1m8DJSrueD8PNkd82ZV47z62D2UQ2Wxrmi8HpSzXk1XVMEXPSEG9q9KQ5sGwFmf4C71UxZDCBYdkLGhG4HY",
  "key34": "5kt3ZLTi1HjY6ocXfy8qRsA1nrtpZpP5A9oFKxMNhPrmRe7rnbEVipUKA7o8uH867TVTCwaYe1EuANDB64X7oGGJ",
  "key35": "2Uc8udTGepk3jwdHeE4oxspX5PC7ugXV3fc4We8xxtdBDDQJJGrepPGpghXxRscDR32YXbb5pnAwXWoaTVoGx2n5"
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
