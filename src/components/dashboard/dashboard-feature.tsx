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
    "5aQQQ4SniPEw5yLDvFMdNYBnXkV7MLCJjgugcCyxoUDWRg6tSD1cFfjxj8YaJRcwM5TaynkQmkEnWACbzg45kfcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnBamuXkg8UchGUSXU3k13QZQCheCFg58oFVNyMLs4FZNtSkvETaPvPo1uzaBCZ9XWJVTcunp66rBMj1tKvpqiE",
  "key1": "4GpaxnHaCrvYua9aJz7LsdH7Qhue8tp7W2XtV1uaXVJYGtnjDCx7jYqJkihRkPCSvhG2MuHSRPnARf7mKGoR1bME",
  "key2": "5gf4vFVxbwcBTmk2hqLHDfYwgg4KuGAsSmrpXKWH6dtCHihdNcNcMB7K1orpkPtTv9cJwPSmQ5GveYJ9gwJeHxs4",
  "key3": "2eTnSuCyPLxphqK8RKxYAy1867dAaSe4yUU1UR9c6FuABeUtK5i1Q1yRY8vYVetiP3D7NuqckDZGWasPwzCvQ4w3",
  "key4": "YJh2aUB5AeXQFJxPDuFbSEza1jojRmHgnBS6h96qrrpwG6xosXLERWnYEximPPyArewU8axv1D7vdUthnsGHtAK",
  "key5": "4VFHXB2p89JJy3mSL8xHXifCwyRSbJnnSJZUsWroC3bn92RTDVgdnvfEKsVHmqe2QzV6LSfpL5TkEzgwXJYwXauw",
  "key6": "2ufVNSmjFXokhZBmt2FmGHxp2QNqHQuwtZAcutz9bxQaFFwD8S7nK4vDFu7qfutdGa73x6HBDVPPzvF42YvKTUj4",
  "key7": "5gtDR3tS4ceXyDfYQMqKbdQWvKVVxxh4f2WEi4H3V3zzu77ioKXrUf5kE1Nc5MBnBJUCXhpFH4funea6qpKuTPsg",
  "key8": "3ZNUN5QGym6jZaMVwyNeH2aX9eXXyqRiTYwXi2hDDCEoTvjAfv5zJF1vcpZfjzYZsxcv1Fm8iEdpN6uPcWWg2bsQ",
  "key9": "4kEJv7Av7dJ8ayQRRz4UnBAbyXaKLsTvkgCYHPfVk2nk3wGrz8Tt7DQoHfjeyNj3auBUk5CdLeFt1pqhgvoX1kYo",
  "key10": "3LBrCYiQPpWBYXggXoEzZ7GwE8NMZmSeLxRJK8tQVw7H7SGrKELJBazEAvgUQUqFapJR6EheTrBgDKKbX2aNnM4G",
  "key11": "krsg4XxfswTvgt1w3gNT75rsuiD4spLNJB7nsqTmr6KPYJq6Dps62gDfStnRcR76yirHzCw5EvKgYkoG9bM2K5v",
  "key12": "mGRQQ7yfWyBAmwNtauDWmpvpAfqaQpRdMeRJTtzHQXrPZb2G4NZSapgixEsEU2YzGycZoNTo7kfVk94MWMiEt2Q",
  "key13": "288sgzDDgza2EaLAYGFGf1Efdzp6RjbLFmLqhJEM8pGxevt5wockr6AGP7Ly5GTL1DDEqJN5z1a4Y6pRvTjHmfrz",
  "key14": "WykLMeSmKjRXnnbAUQZX2B6ApKgqxTjHm1DvtxSq5camHJobJevu1aqSJfgHJjna8yw2tfAbyppsdcxYUPSGnbs",
  "key15": "3dpgTJanhBeXQUUyp1SYwrdCSQfEXc8HiBeEia7ksqKwsKSZyepEbhxNsHR2kqS6dJxtnLCnhBptC3Sd6es25vtc",
  "key16": "3eTBAoTRtMEYD1XzJBCCr1eZnDqu35Y2iDKbsrYoLW3LJsiJx9BKF3wX8rukpHRAy6Nki122PJxGcuUHmaSaYJfH",
  "key17": "4jFZmuk8hmymvUhP5o8gZNNB9gM3Rym6gzqnrjuDbyQd7auiR1S14joZ5VMe8AzbyNki4s9tnAGxxbcGqLUC283y",
  "key18": "4YECSb65mueAbzY2aCXGJXWNpQ4eSrEPAVfLK95ZjJpUmvpQ6uW3R7HAV2kV5NqYFjcU6XHuVfWCiRVLLr6zZhUE",
  "key19": "2sV6tUiTpoA9NNGvhuKVhFmXSjZX49HH7hwDitBmPW7s9ufNZwxYfkunQWvowBvQaPtpnvFh6sVHBbWWqiiAnbrg",
  "key20": "pGjS6gnDkwtBACjci5H4ovTbq9DuehEoH6oqezbfUhBucJf685ipSCkyCAWTmv2XDPN5TtG2D86RhQhjKTT5kdm",
  "key21": "3HGmeNUwqNcJZKon64nviui8WYgAStsTyTCdA2SreuXMu1ZRLa3zFCBXQE7pDTbb23RbmfGfs1nHt837sSVtDvhM",
  "key22": "2qUmMhMxtF85Xmbw2q9RZHrVEzy1rQAB27ZhP3biKdPB7EnzTCNfyXZrLGNahosoSRjJppZDEg5qApGVAM68jZak",
  "key23": "fpYy9URwxN2Jh1YWqvNNPA7CUn2AxhqPEueYtjqKgZoxUU9HTBntYw6XVy7UjrBPBEXrHnvaxzE7DEtpfKLL7gc",
  "key24": "2Vg1AroSXLsCCNzFa5ax8SzL3SANwqpVsRYtq24C42i6AjpNZi2eTVCEiWfCMEVf1f2S1w8b9F2pUSVTnnbYDmuJ",
  "key25": "3wdS8WVoVo9p3ZqkRNDJShy9Co9pRtc27x9gRJ6YZLB6B6LugwxeStrURLoCEYeFFtEw18DyhNDe5RXHHpsBAQMp"
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
