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
    "3xtVPDGdUWQ1p8YZKiYo7GokiqjPdd6cYY4HMhqefqUTZEvv899iWTaXF6ywBUx69v54oMfrM8DF2MdodBvAuTu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXTs3fi5UE2BMBsPaSKzR5BtNfZtdj5ykrTB79kPUHfvA9EiqxQB9XmuKpZJJ2AsQM5JrE7xZVuLTdVjKHafbY8",
  "key1": "4z5GeyiTKU5YJk34DdAnqNNn9D3XGgxyj4hV2E1G4iNUa3W9nidTACDzWtwiwgo3oqAaK1w1K5e1L6ADZRXCWCUb",
  "key2": "3tESphDKHNamUu8TF2FTJibgx2uv5zSmNKJBZkifGefK2Aq1PJT5BzotvreQHsMfJ93Txs74Ee4cW62Xw9c4AG2m",
  "key3": "23ezuuPygxqKpzqsa5LAMDHzs45hCEs8sRfwnEo3idUqXTig3sPH7hSmvu28oWe1VH1GQvdYhc1NAaXJu9jMFedM",
  "key4": "4fbeMMHEqusngo7Ck4h9zmQfyjCGv1RS3RBb3LYC6JFPxCVXyRsB3rXMVVTQWpqNuoHFN6UuN51xJa7ET1bR1U8g",
  "key5": "4DGSQAQQfPTenxGCbhSuEnT2gwZwnmfwkSMCG6CwzvSC3TSB6Fz2GqNLWvYz5vN1A8WbpaWmP2WRvhU1x4xENMLn",
  "key6": "5T4s8gPGoXHbwPYsD46wW1mqkA3CDXR59DjDJTMkBqB6PEngnRpj5DzGXWjLkDqAZZ3ovYNFo5sfmdCwSEYREJuX",
  "key7": "2G5UwYXTmos4iEZBmRhFe6xBt7r6ZqneVhy6mCzNFo7kBDfBPdB38BqirLzfvo1a1kN2X2CgodSn5c9uK7o8YonA",
  "key8": "5d1aNGfrgGEawxLzy5BLTu367XxVuEHUbgoL81hZbQXhdWTsEdd9scsFB9PQqo8otYVh7qAXGNJ6n3Uq7wSzeKi",
  "key9": "4iWYuJ88oUswJJ1fHjhAneE7JFLXrWHhmXxdGfkaWxzAgrDoyfJg67jsCc6yxuidMVVFGGCtDVRvdUEdopdhQyRZ",
  "key10": "i6r9y5vuy1uvaZ65Mg2SXrv3J4oYkhwjtgStgKx4JhBybrxXktfr59oaYXKF9oewzsfofYFWemeDD61yQKDPRJL",
  "key11": "3JG4MUwCtKySonwhsf4pCHxFutABz3nKdwUXK1VyFRxCqWHRkiHh6rRodsGHFXRb6sQ51xD2Q3kyXEcX1GEdBb7h",
  "key12": "4nfF29i3PceYtNPF5NHS8Z8UFur3JgnknCCfGkErm5y1XVHRSipg8XwByyyGWCGPq2ud7JQRU5Q1XDY6r7LkQGV6",
  "key13": "2yPjH2Ccsznr5aLJ6NF3ofSGb4jnYuxzyF4MZhp76M6Gfnmm2ombRBHN9saNnqqBb1qzpKvpUojsHsPXVxWAGF32",
  "key14": "Y3kqRvp7Qxw7jD5K4KWsePE4tWCTvnSsj87rMypgxhG2brkSbfVDhQbgZX57jDZhU6TQtiKeziVExpifnUCgLiW",
  "key15": "5hZd1YjTrnsGL9x2avfofnEWEwA4ozN69CSKb4YFcpGNedAqjr23BKgQM3UN8CH6yMLp9jc6W5mvh3i7RUyCGgMP",
  "key16": "5EwYkM3b9XeJrpHdbbcmzr3HjsEvmmmWJht6MFrSg53K8VNVC1DJZ2ezTDHVvHP9m8BwkPVSLtKKGGQtYYs2MDr5",
  "key17": "3Q48RVL4sQBZvSPPryRJDGUKjAZRN17BV3TFXrZ4Lj3YUfANB5fhzTJTJCoFhaGVX4B1J6xZAaJGwHPDYpwtkQRC",
  "key18": "HtgRoXAt3bb4SqChe8VfBxVf6TJzPm6t5PpHf6rFsgFZfFAxQYLeEcbuou1J2UgySbws5LQBttLgokTGW8gUUTD",
  "key19": "2EKEx4AkEHNPfgoS9TLkAoDi7e1aL8JSNDZHNFLrQSMw3H8pwEP1JYVrTYXNfbsNEBAEPHTr5CwvmNbzinNQMP1Q",
  "key20": "t52axbGfvC8ZfGJiyLaUUaU1mLX5SaKc5SsT5vCynSCcMEJYrBzwCuMBCFeys9sArnhuuiRmGHHmGPie1uaHsqA",
  "key21": "2AVJUUx9okzJMh6WdAGJcT84DnZQ1KvZVw1ziJMPhQeKfu5zUULj6MJxxAcoj2NMDVdH17BPQC4eCAa6qFjD3nGn",
  "key22": "2oz6AoSNNXeLPEyHYow3jHfPAaXRmscn9khZoq3gWJ2sYmE7XVRK2d3mbd1UYaG45tiMx1RDGkndmpxQuNGnpbRe",
  "key23": "PsrxqEaPaqFwdQ7PPQWNoDsVVXL64AVrrVJ3RYvkUYrvkMCoCRLozfsXLWVdrBgrqYGqnWnWGRjtmYepB3kjZvh",
  "key24": "3QwzUBKPMrtPjKTuQVvayBX1Z5wGuqCxzwSdyhJReWB8fRr6UBtbo5gabhTfdVL11G2wPLsfbFAxe6sbCCaqPCFW",
  "key25": "K7UAF6my2xAgyw1RWF5gjKVj4mUtQocVV6XcbAuHMhjTky2PxfhoTZ7fgexZt1JQpeVuJTuEQQ2FfVWdKCTUrG1",
  "key26": "3TNh2VRk3FHVbAWja9aVTPvRxtekhYRQaL9FL6vUwwC1whQt2pGrmeaFzvLT4cLVQ1nxKdGpetVDYXgYZJmHTpHz",
  "key27": "6728Wy3R847NjLFDr48bXdsgL78t7Fd52LsM1XbmKpeUKJ7VzTZDMzKVmdVvNMjxAppHeK1Rp9WtmkQy6VU9dyia",
  "key28": "3chUuw4Vsa4ads2roQMMJoondJosEypH25XT9jWgzNpXzbpiNruuZ5n7uMqQPdVaE3M5UPT5YqiMJMVSwCa742F5",
  "key29": "38ZQVai5mmkn1HeRxjqj3Kzj7F2c3mS8783tzaB2STYMkPqXF2qz9XDZ7X8hHXKJkRy3nqBhRA1pKSf9iGwXswvC"
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
