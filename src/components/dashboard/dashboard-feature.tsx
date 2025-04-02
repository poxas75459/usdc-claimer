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
    "tbUdK5pwFyeDSV2AgQwPacxGeYZ8DqDqdLhxm8omXkyygfsxnsj1PUTrYsU6n7jQHG7aFiJ53CeqecDXsutADpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VM1K5ahs2WBrX5aNgwm9FGVi4jLBjUecNJPLTyA7sLrbwGdB8GpcVmTFtmX9rHycC7FJffBiW5C8YwKjTFtiGjK",
  "key1": "2XCTWt2ch5qQvVP9CgCyU9ENu5APESkVh9GngZ1TVgps3rGjJJEbPfYXQyNgSGLmvURJ5w1jqehnA9vM8YLhEiXf",
  "key2": "3gcyAc42xNNALaLns63kXV8asm5cujsvUHKcQTsCM1G9NWzLbTPufjz7uYd9w7bmgamUeFfiyaoV6eVmTMfsXa9U",
  "key3": "5i25nFXwjXCJTE4Txjrss6Wg6Uzy1U8Pupyac1TQeadC89Tk6wgnoFEXuAd11iSsFTWgeE4YPArBy4bLZ5866BK7",
  "key4": "MomvYUqbHnvSdiyDMSSkqAiM3AVYe4HQKhq7qBVTVfwpYhRctpurVjZ2QQS2hdHPZy5TJ1BhGuPXMqSc4MzCfcZ",
  "key5": "49b9DGe5fRtKHUBZ9rJ9GZuP91GgGJKFxdnFFBY6FdGPTgrTzSDdEdiRdn8fofvhFXDR1QPiKDTUJiNNZFTCyhVW",
  "key6": "mxSqoteVSZTMijeka1UMY1C3eVABAE8vWFDqZ9DGdLxSh4ZwroAC23MBPiWk7Dy9Zx5Jiyss9vSaNEkv4nxw7Cy",
  "key7": "pQv8Phja7Ayt6o7kJKoN79PpjvyQF7UGHPArbCJGP4fNfqTVz3ESDJuNTpbAnEXQMcrNdMYd8dUinWPRkDtLEZU",
  "key8": "2FBJocbgtjhgjgKBQqFycsxan1ezZMFQ7Vv7fnDe7CegKZVuXPethLkwGBcXoESkNksn8eV95KT67rrisAF5Sany",
  "key9": "JQtRfeeNoYieNg1hiusMKMbEqSLUz8Tu4Spa36DtkaWuxSyKVLWuNgt8Xr7zP44XuTrPibygm6TnwkNvd3tb1t8",
  "key10": "2GB53WXD7KzqMAm4vjHNDRwb6kwUVjE76iGrNjKQBuqby8bKV22LFW4ozkkYuvN5jyjuUhJsnrgSq9qwFdFGHM4V",
  "key11": "MGRZ77YiZAwXhskHsRdbVHvxCB5qhmHCJ9uZvEdmGdiX4yvVwiarKnczQVgXKUw9DweDWjZeLW5b8ZWGdRnU4wt",
  "key12": "2LSHJKfSBWq15woFrGggwHdor6gz7K7LxFXNNcFdU8urRUmKQyBhUSFVU75aMVNX46Fi5rsBgvS4v1165Xece5FE",
  "key13": "5AqwsBkJt6MMK6KdD6BkTXidWEGxw1u1SbWQvKLPa9iLVXKUg1sPJL775yj1HmLUy5tY5xtFNbiYDGuZ53Tj6BPZ",
  "key14": "2T7oq9cYg5U9mc9YugsxwrZVHEgHxcUHHbgN1zDtamfE4qFywnqg7QXbicq2HhNPq3CU7SiEraGadcxz4hGkC7JK",
  "key15": "3qSvKwUbeXLMLKQxFE8yuVS8EjRUFcrdJLiDMQKJLQoAzwNnc5kvY3mCQom95vGb45TQ1H56zmsdhDc3xXHiQBE9",
  "key16": "44AxCwsMm7Zio6fwApUfd7ebQy9pWsv9spcMRa5rms74TYfRNPSUArsZCLQHeuYwueTR1hDGxC3dMb6N3vXxMbrJ",
  "key17": "32uzt6iU6kzBcmFWVCggkC2jMGBwBNFT7N84G2sFEcP3ub8jYr57fbGRJ5DageCCcp2SzCgwQ4X1oV6r7kMoMAwr",
  "key18": "34QDVGNurD9rcJaZKjiB9BZkCdh96rumosKV2a5uKj9QS9h6TXwZqHRuqQ9UM5HdyGBUdFBP8iTzFFMPBtbfLdpH",
  "key19": "42LiHdrLcukAXHgC1w3KPLegBFoPX7GpigypLNr7tQzjMP4RHzQxAjKpLkGyH8or7egbPZThTWVfLDjRuz1hrLMh",
  "key20": "63cnetshiyrKgonk9A6U63TuYq4yZaBMLGLHfeCog15AD57MPV3FovA5e2zrhcbaLdHviPNe3AJKPzhfKX7mjJq",
  "key21": "2Uxkhjx2WWnKbByWfPoWc8ohCU15pQPQk5izXunfvpjrXzkJsAg1ahdw369S5Ut1d5hFfCNDKEGpZfWzbYhCKKc4",
  "key22": "3ReuXKNWMUBZ78SG6M3D2DksxpMdpBBRNSKPhBK7KVWns3pb7w4TVyw2cgB2im12kcvCcsaJjXDqH1tbEs5oetDH",
  "key23": "2pDQEL5XYuA9XUvJHxWmqSiftj4q9Wc5ef7SmB81pC92J6joYNpCVSWU9WQEYjYgCoq8iwFhDGiZELsehRBSmyDW",
  "key24": "4nDen95vuBwQddbHHe9uS71MWmH5U43UMsgd4F2EapyJKWZt3JMKg397cvujETf1d5onbSXaEdGmrsqzLZ69UGwx",
  "key25": "4PPVQuv3NGz4SHBjnituvN8ZhDs6gvFf61ftcfdcARtCCV23iKEGvp7LACREsURFkFf7QrfuKrcpMxXgFGY26VSU",
  "key26": "2zE5dEEtXQ3htkBTWcCT6nob71AU9ZDoY1hCZqQtzNH4UhSifUGnw6gS6JrYBMQ7fCSNtYTGvFPzTzzpsMbzMRz1",
  "key27": "2qwDHn6rvKCQCtyo1tXgjwMAE7VSGQUn1sqSw3nejtDk5WniMu3miMQ62oxvahxq537i9Vx11r4wAnNepfEU7K8m"
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
