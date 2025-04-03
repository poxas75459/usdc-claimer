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
    "2PrhAKkqW23smLzSivYnZvVvRGmbKuw1gjek6Tz8RMDa5Bh9cauvSYHC3dkxSVURYhr7PU4gw1jDMMSKA9R4Yirf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqNFuaTLtP8y6va8xMRi4hogZe4s4uVih5NeTCJNrVBNNNW4YP1HNkWj4nxpxPuBefvZLdRJUUqrNZ3preAqYDA",
  "key1": "3ryAh33ghQSiFdBo7qyHQUQDKVsYtJ9e6Qmip4grPDXP7wXg1sVBz1ikgzCEXFdXdvrjY2vDWmnRxQNBEHPLkRNo",
  "key2": "cjnu8ruWCzowG9Ch5H9b6cUqmvbr35PfGjEaYjNtg4mKtNcTH9M761WpZ6XTnZLiF3Cb1woHybinFRXXTpWjUEv",
  "key3": "5Ugm9csuuRp39f7dxhT43RsPRF2MJxSfko7usHAuUfSHMLgcTMSn6aAy4dAehNDfWazZgm8vjR968CMssTKfJnLL",
  "key4": "2nrapfZxFGvg1q5V1VyH8GBi51bJhHuKyjL9gKCw4v8YbKty24xMD3e8nbR9pvTUy8dDrVNVdEKaFkV8jNFfeYNS",
  "key5": "2ARB6iwRr2ckksCTqCT59Lq6bKc9DNHqANuTqHb2s6UNc6zUzw2cZoURDofPrZqM3vn1wTPARuhVR8VZhd1w19BE",
  "key6": "3k1ZPLvcu5sVPysRKAJG1dMYFmXYhu7XVdJygC1uRZSZXVtJdKSU8KkvufPP7HjFN9j4c4r5pbqToouKeM5aTW6X",
  "key7": "5gjF5aS6ewcHRNeSaN3jVmeJx1rzGnSE1nbzyZRJj3GY1RZGsXBHQnPSXs76WXdguTGbiT2Kc2vHTH2rgKLmnrtd",
  "key8": "5UZsUjGLKhZcEFd9DFMqjWVHacRERgzimi4gD8hVQ9wNQiA1FmQaqnpqFN1sx2NUaaLyrTU2wigR2h9f6o8o7z8E",
  "key9": "663NC5NnhAsQMmzfgSDV8gR14F7hPdvmJdxUEh64MRqhfDHwGVnkJVw3wBDNQYEcnHi18a4QzGnEwnofkqLs78QA",
  "key10": "3c65ToVg8YW4jGkhynUVfKWzZFcECgN1wbHhyAh4gGBG84fUb7RTGkHTWA6uRobACtRf1RKHnx3w97eNk9Sjhs4A",
  "key11": "FsR31mwVUc5YfjCpG3dN1EkcvpaFW8XC2hQTskgzeXVaXgLWUE2pEURewVcGWtVg7ZiEwGLK3rrnWEpEkzdq9Dt",
  "key12": "3jensbvphGPSUJn8rSbuHefog825bfoBc2ZFKhBy2g6evuZNorb8D11zgMZeMsPUBW8m4Heb2xXCcz3NqtkWqsGH",
  "key13": "4GwkLC2tHxdBkuKYimHmUEWYq1pwbbYTfj3oooWWS2MWmcYfWr1vARTcvpjZvGUsGfu1anQdRD9Vxf1dUBz39XNm",
  "key14": "2M1SqxQK5njrJQxyShyWCiJPD2Zr5aEUJEVk42U7RvbXCZHQgshhVNGnruR74P55eQrjLESxXRGMFZcWuzNMf8JZ",
  "key15": "5ba2QpsF481WGB68Kt4BTzPTSPZSPa8cSP3VNyq5fryXSPLnQQ6iyAVopUfoqPPiuTkqtNxHaAZTRX4urJzWMFQJ",
  "key16": "4uhbmLCEg1SmEjbezZVZAEXwtyEcDKE9kH6FT4nVEpWs3hBTyW3EfA988mpd3FBqrmj1c8ek9c1eGGH2SDX95Sgf",
  "key17": "5F7HzyjWmcg6bQwHvTw1UEiksDvZEi5rdzgTxTAMtQhozL32Et1EQyTiVC98WnkcVJZSGX3CnJpumGuCChr327cy",
  "key18": "UyVfcjNVDT8GgCgpd368S7uR8G91whQWcMqUADLf2Leb1ga19yKbZA7d3GRs9iThFhQgx2UhCmx3ZfRN8AxQ4mZ",
  "key19": "uN2HTHZRnb7ak3KS6cwsL1eXS7GJfw9qs11JmW1XMaYoLMxc7cXu5BYwuVCzvCjBZeo1gqg2HW32y9TzQdgkuye",
  "key20": "2jsNoVw5rKdagSsHo6KotpMr7ZFzv8EQgGMjEY2L35bSvDJv5dK6AfSLBCaGxUcqNTWRDJ1my4qAx2uUNqXRMhMF",
  "key21": "357kNGWW83a49GiogYnKMn2Wj6c1QG3hXbvujfJ7UvqdURaHj4R5LreavoHcLk1ZZY3Y9mWDuBfxMTsrz7hsVeQ",
  "key22": "3JBzj15Wva7cqwq6AhJwPQPxqQHLGooKhFMZnAKAtADsKThJQp4Vqx7vveo5xFpxtyq5pkWBD9MjYESqbX9M6edg",
  "key23": "2pkDah3YW72UWnb27vGPNmA45TbfsfZrCBXgAbdRfCFcYkrbXVqoqGqq7EaY41qws1AdEtjihizb4iSoUoVpnEQ9",
  "key24": "4d3yCCTE9Bv97fMDaBbEAb8RyWguKA3AawBuMuoVJAZsKDa3WwDSbS1eSGfu5sYRfS9RNzV9uJrXmm4MbJuZU4xc"
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
