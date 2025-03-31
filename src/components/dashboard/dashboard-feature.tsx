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
    "5QWfMMjMgmHxq4i64VYuP21qgbDRNL7mqoL3VykRyVTqs3TPYodiEXKHMwCf1XPe1ewjGhWg2h7DrdMonZhGXuD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fTxuMH4Q8bgXNopyW3oRvvk1a2i7D1Vcj6fVuAjHesMDYK3aTfkDGXX6BZkHgy5W14vtKkAia9QJfsGpN7Xehux",
  "key1": "2MTEovgvvp1XLj15XGMovZ3sF88ZzwfpNLKG4gWicJTF8VSEYe5BtyzS3j7VkeGmw6S5q91uVbDkyDLVfaUU7ZXK",
  "key2": "5qhTVx31WrDJd3CP993KkWP215NwLEZ6htygR9b4qKiuKDsFMV3b1sZW2e4GX77MSHJVAGEZTYdrngpePdTxDKs7",
  "key3": "2RvboTQWJwHuTCRvZoGxoHA3czgthftZ7U8JtF59TrgPs8bdoRr16P3tjJgGwXS4Gi6yBdtQhBYYRQo9a4r4KMbG",
  "key4": "4UAjnQdK5BnkpseKVeeYYSnHMSgKNuVhoLXbBJ3nYMFNNTTS586AEWovxg5vejEGBpSJxon4svezSa7r3UWjPooD",
  "key5": "2hepUE6HGa3sj3ypcPhDAbq1jyX6rDFfvUhcagTfZ54AwN69yUmQSuHV5fdzTn5HTmu2VWLGPFeyo84q3Tv7hYsq",
  "key6": "Skp9zZhuVpiBNSxnPHwbLjZmzAVGLBgKi5kqqiavvJTuVb443B6b1pwM82HMLWjBcgMo6u59PZTwgtuJ6AgF6iQ",
  "key7": "m55SeSR3Z7MBz2C6qra98KS2ciWLGnqAh1j2gLY6T2w7KujPu4uzZUrM5zh9vEoaSNA2FJK5b4vwFz3oPEjknga",
  "key8": "22obL8fS1XaFr3Bn8pkyLCtrKJcZ7oT46NczXU8iJj1bRFobvYLPF7r3DKjgvRFQuXahkQ2RuEDwXzh8Vu7EA6q5",
  "key9": "611eLorQ6DHVu63Cu54Yj4ZZJLgGajbiihnvWGvLYo6bEmHtovDnR8gVXCiYDCuFSy9PLjvb9Mb2gxDpn3YJTLfg",
  "key10": "L9dT5WhcAJAFsCwcNS8eyp4fFgrSpFW44Uz8U35SEp6DKvE64DGd3cH9RYRChhEg2v7aYnenwHy6Z1fzJfLYj6V",
  "key11": "jHSZeL4ttAWYTUQtsvDvLmbuKuiuhd74zixPCNSgUXXt4d7Arxsbjd54mxFgbjdFTfKgxP92n2wSqyzeNsgD4Hm",
  "key12": "21DoWkshV1pPbVA6Ug1v1vx68N8kDFVhM6uuWfWGbh5TiKgrp5KagixqrPdTF2kPoeuijo7AjxmeM6niJVUzQMDQ",
  "key13": "4Avs5rtiFGPn14ZRtuThqPs9vaE4ZjCvExuxf23cN77v87Ged1WQ1rFq2d7eSdVQ1ME7TiVzyAKYNgdMxcBhHmvr",
  "key14": "3i9he9NAzVT1vrQUi9uYqynKrGxTK7WeCW3vLHoLeFY2FjTNinwoEMMrKoWyRUdK5Nh4DrVE97ZN4hqDhQJCfU5Q",
  "key15": "2L7fruJ4BdYZG7vkJhKnwypdNpzkPtiRE7FNHMFpwAtQ5HCnHtbCFY64EkAL7riNTwvMSTPkiP2GYgFEFyWSejuU",
  "key16": "4bU3PKJJUERDHNNEhXJwXGnzXajBx5XBWa88Po4kyfAKEjVPg7YVViPd4sFWVWCcA4P8hHhqJNkCffmqeukEW2L6",
  "key17": "U3Z9dUdSeWJwkH23VQQXMaTUxWCTXK8ffehYEthoGvrudPjFjpgz8K9bR7G4JaLY1Kbqd9MeU2WdBBFUuSwn5je",
  "key18": "4jz6Hjr8qycjPTMrFs3f9ZsQPgTNS9hRvYWPXvXgpuVdeSkooYRiUSt7uSPrwoqfRxmgg1MLquy9PunFaK6Q6WDX",
  "key19": "4NETB2Q5NnGP76fxjD12R4mMGLKS7VtsZ3jZuizSqnFqNN9sp8KP4tNfVXQHHNDMWzmjgxkAr3EyBQgrtcHzU2mM",
  "key20": "4emTaYmTYZFA7JCpZZt7qQj6VvGDYZPbwYBg9YXo5mkQbk8wh7nxjtQezemGHCTLGhefF3Wh9j2EqpV1ekSAutCw",
  "key21": "qtBEhshHA4Wk5LWPZKm1GZ6RxvMuWcTNvRJ6kjWp9WcTzmgb591VvZFp2Wg7PpGxBVnEHv7jCoPJaMUgBSsjamv",
  "key22": "5XBHZzDSP86uXCoEUQAAVjvKqQ7EtwhJmWhRSE7jyHqNP8Y7pdgTHn9Q4TnHznwRS4WiC9h161RoNjCeiLnPZvt3",
  "key23": "2jfy3pq4Uc4EZugPaoq7E1hEX1UiPuLkPdkTTNn4WNnhS28zykySzt17LzNNceFLrFuqyQm2V1j34fBtaSK9RH72",
  "key24": "51nnN6LvAGtEtw4DQoTP22UKRzkRB2RcdY5CnxisG2xzVQKSVsgfzePd3oBLA3w1p3JQnn46YWKkfMs9oatih2nB",
  "key25": "21hswtNgmt4kt9RPURtANCmH5qer58JLt8UMYD2DnaypcFg35mg4dq6xvqor9iJMp68GKLgsc2eisduFmf3ykZmC",
  "key26": "2BwGwMVSkMDVBGPrfNwVVCz2eU2hXnzHEWqgoVQwThiyn1HX2nA33EFEcHAtuoAtjBLM1zSDapC8ghZEUMWzAuA9",
  "key27": "4tczQWGLZhEqgfJCvRFuhEBRTEpgkerK4tj7Usub2BSUotvdenUKfV17QHbg3nrtFMMKvc37TnyodiWGv4MsjHHB",
  "key28": "3oQ7g5yvoCoKtWgcwL8jd1q2goAbB4ZaS9VrQVdPKysjL86FSW6zRdpecYbzMVYmu9LXc223VSQFSVpytjpwzgeA",
  "key29": "8c8VFBbYtKDgopXMi1j7RF5JxEYtcDSmJZtNHHNk9bEuT5WFaAxuXFiff1iB1i2oGJ2ugMq2jUtsSnjGbakCbEL",
  "key30": "3Umy2S5vCGbeBV2fMtLJgR4hstWP2X87tFn47dNrBjrPwNLxek6p5qMXeFxGysfo7NCBDSY5A7Rh3rbhZPmvyktp",
  "key31": "2cUgwJHUVi1XkK22QbxzWja1w9WZTtgk6KLoAt8f29hwEjQ9STEMYHT5pWacUWpjwc8CRDqTWuLYBHZ7xY4qDVky",
  "key32": "9r74kx8QXoUf5BNQLgrC4jrQWbuq4GW7daq2YpJTzR5TwjvoGHMU8Kq5J2b22MsE6GfjbBpz2zTx9W4BNi5ijtK",
  "key33": "aS3xSZzNgSTUS9PcDyRcnVtAAmvHxPRzZpaug58zGS4W9WVSyPnc6DWaEjWG3CbSxnuyA3AUpcNgep5UrqDPcWg",
  "key34": "5pXtv8uFxnmDeeDXRjqGpCCbCHecK4XfDueUWrYkjV1Xz7Mnvv8V3pkgroc2Coy23JNFQ2NmXEUTiAeXZoNqkrsR",
  "key35": "239oG2MSTpdhGftKzSTvtmHUdQhqyUGX3C3PfKMjhVqZsUNVJsPgAdMaBRhkq3zgTLksbjAKFdjTj1w5mdVoJQ8V",
  "key36": "GchSnQuzMwa31Gpid5Qqm8bKUFj1Aujt7LuHd9y4KeBNR1A3nMToPFAvxNKqNyftf1v1ugjW6cf9oVYkWrY8C2V",
  "key37": "4QSHASrbBmHV7Uy1Ujepsd3D7r5z8P65JuLWC3mW5ndYerQrPYbNeAUmxCHhDZ9KDWhi2PckCwZdhFjzeMCQYHXM",
  "key38": "3aBJ871cuGo96BCu1N2gRuTbF4A6PcKw93Y1wTYjngYLXXi8ieo5PF7Mci64fY7iuDN9CGBtKr4wvSJFstwoQm7i",
  "key39": "2nH3LUrSf5FybkskJnieXR9Wy5nAPM8uS4BmFiM7rGtvUVpcRqgyjzr5HLZ2ahXjLusrVKCiGYPUSUoq71Cqx4AB"
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
