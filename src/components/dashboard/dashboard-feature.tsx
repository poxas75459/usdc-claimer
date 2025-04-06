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
    "4yzKBUfJVmRLcMcbecjRe448V2k4L24W63VJAxwPVHEQx3wkeW6jqPQPKszZQxWnoJJdb5YfBsKhKfaHjZWPsQZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnvNbt1gtqjLsgKh3uJapQcsMpaVW8z6ZuzYo1LGvzHuV1UreEW5gNkJRi1VXg7hYbxEvFmFF4vRQWCDCBuFVq7",
  "key1": "XkozgMK71vy4rDw8LoSoZM2KxTdKUtWEZaHJRWbE6wZt7h8oHCQLCThujjgBFXXpjsgsb29uFfQoqeoJmixVxP4",
  "key2": "3MF81TEsMiQ8Qj8CRZKqW7Wse6rBEShKVF8q48thwBXE1dGH8Xa5gMjpEXsLasDwU1js2U9nvjL1HSmzGACtPakU",
  "key3": "ihhwc5mhvr6rnFFrWMFNT8UnL1Pf5gBgCBv3hDBtohLr21w9kbuGEVs7QR4wYZgB16f1H43BwDDVS5T1gcg6f7G",
  "key4": "35cicBBYAwxTUB586EBeBTYpPVtAeAQDCNqhg69CFBLkMxoCQi2NDYvR4hHCdBv8TiLUf19UQRD4WB8jn7CziLKa",
  "key5": "4GWuEAHQaRaSQorb5j1UfC4jBza2DyM7kw3PF5rp4tDKvP5LfwihuRWEn1R5EdMx4ZmVHGemoLCNtTMAtmiSuAjf",
  "key6": "TaCU2pP6qyv7Biq6Zj7m49dbGjxKqFf5noPKKCRap5W4sDTFtmsuGqKyGJQZbXrmmTJu8fryTgaryNq3eG3Nu72",
  "key7": "22uHND7oP44swa95cQjDKYm6j4KZsvpESybPMHfSWYp8DQiRS5ijm5Y6nDxGiLCriZWa6LmCD59vRDr9LoWTFZCE",
  "key8": "MqYEuq456SrXPBaQL5DezfMsqhYBW41YgjkSTnV17EtNnfnQHwYXJf47aCBiHNJkJsY6oHRmFkdqV6TUtS3XUq8",
  "key9": "4Ka4WTeo3sRFcrGfGrUc8ikurNoU7Rhhyps1ahW4KTZ5nDyjt5XUqoGSya8waEfG38grqEKiSEHoNJEQYUkmN16P",
  "key10": "65STEjaVnYBjxZekrSruTitvfEhYCs3gUtQrScEfK78iR4Py3Qz5yT92zzb1JgHzN5s2gZzvHmCPjX3DL1VD3nwU",
  "key11": "3mbEkcuiHjeBnLV6wRTbRbEWH3SHNL8yjjbLyfossAXyDaaKHjh5ZYo5C6xCdZ6w9iMwpx1ZLvpqpVHoxJekARpB",
  "key12": "zHKGxpAGPwRFawHGxGiyDc87jkifhea2uunU5WKPnEXuFwanE12MZrUrxDQJkyH1mYNFVAsQmZw1csq7cE6LGmV",
  "key13": "RH5otKWFYyrjrsq4KbU3HHoMeLkiCzHg5AbcP1CPPNVi56Ci6EugzXXNYtQkHRFBQvjnFsRTruSMsL5VtZBbZqU",
  "key14": "3n4NF3kcvZWV7gPz71hmTouMQeUPiuEakwHczNR8gFCEPei92ieqtQ39386R6WnXkwjuAGVCPzQxci8fs17Fd4Bi",
  "key15": "5Wa9G7MvNjRrs3avsvRLZFP62Gn48erYpMEvVW7Dcw5s5XN3NtVx8pCenm3nFEqLe1LepdeGFjejef2SsxznLy9W",
  "key16": "2hFPxAVpzmzZVHkvSMJKuTZHHAczyLcCWvUpT7ymHWUcT8vWygLEF93QhP4pppFG8Jtx9dkhTe7NE2hmXFJkomdQ",
  "key17": "3iHPjAt5xtV8jgEM5EnkEzupEZW1JS6p5QFtvnZdAB7YdboBogUecxh4CXGW78r1C56XBLB1XsYJg7yqyg7WDweN",
  "key18": "3rcbxfK1EBuaHkugkfxTe5WxGyiopBFBTqcevTrnFBmXh46Ur7nCSPp4hfUANZGhxXYrTjsX48dmeD2MW3HxdG4G",
  "key19": "FTqAZ9YtHbQhHTjDopiyiw6raUaFVTCyJWiSMSbYfjhoqkzUuh9MrmRrcF5JMCGXd7YuUDSvewgGMxJbxFLAzEZ",
  "key20": "67AJw8ikFs8ETmC3msBUgoNGLiTp842QeQ7yNYSYugngLpfK34dxkqLW9zFGbMGybvCpcGXP4aANtmxhKgeNQmG2",
  "key21": "5g76L1p3ckBW3Cfu9VLwjmEkHoT15hz87Sd8N6CzMUVpRXiALkjhuzyWYqCziA7K7x4F2FACmM6ZZNc9yLd13uyd",
  "key22": "5Hywp4PL6KJfRBXUuETj2tmD1AaiARkMYGxgDG7hm2U4sadZy6YRykZ7N3FqfgvVk9UuKM8aeCB9SnhAUBXQcZDK",
  "key23": "4vNHDkRvE7Ue4RJNAqpPyvWorTTUTUe5DQgDtgFc2aFvjxVdfTdC4GKzRqVs5jYFG3QW2CeWeuzncXaf59V8kAr4",
  "key24": "2pKskydPr5g6Qcxq8eWSGQvCDDoxNc5dD4GEnp4rU7wzM7wWUY63yG9B4PPCZUDMFg2noGNorZpRsuPbGcDYfMf6",
  "key25": "wZFArDEnziXmkXzmWh92PkxMHAUDD99jR5uFnxChLzKKUPXDSeqX6G8UtESZ6k7hVtoJxcgkQmkBccmMASKLuY2",
  "key26": "EiGiRS38xpvr3wb66kvnKozkonpGyHM5KpXPavLmL3LhvitNj8BVcTQxyKL9gqEitMs3tBdAgABhCT8Zu9RMvtd",
  "key27": "5M2sqHvfagi8b4PJP8C3t4TuQ2vZB4aWs6Q2EA6B9qA36efGDUuRGmfdUhD2V1D56iKHBxQ7owFqTD4wmiTgwa9o",
  "key28": "3xemrsnmoHHXtXtG8ADGBx4KtbYoWRJiWWjHSwwkPtQxpvNjsnvqqkuYVBgqrkZwgCNPNv79ueiASsWJzPGrArvb",
  "key29": "5N8HtGJgAvsbtgi6GeWwyWwFoH57ohsJqMaYsoSvK1UzZDvQSY7E4xZ4Mim4AybtcTZocYUZR1mhWvhNKFL8vTdX"
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
