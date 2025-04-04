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
    "2BCng5JSB6xiZvCv7p8Bya7U644K5W3vHJM99fwsDi3PaeBA9dmzQDJBb9PMmE7w2SBkMVz2Mz7BfxNM73uiAxLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zRj4V2NwhTDDfdHc1N7pREwGPNVH2gyJafAPPZygwKP3NtU4Gr4Aj3oYcg3HjgUWLyY7HCT68AaDFhxTLcpahsU",
  "key1": "2CgF8H8iFE2xn1Ti5f4xVnWEcowScrsLYRZdDLudFAjbRRXHomJtJqkidp1NuQ7mNBxPYLArksMnBbuMZ5sH3mxg",
  "key2": "3nKkS7JzxKwdgpC8rge4AMxPhpBSz7rEHN55hZTBbBnoNLgUK9bsfMEgpa5LEcBuFNFVrdnH9Xs5kWj4zX14FRAp",
  "key3": "5MqRYxd6KEoPruXMK2L219cJps6Y5EtMa1AehRsxbeabdZL9AZTaZ1Moe9Ks7BAWrLzMzcC57KtWRp9k4h72m2c8",
  "key4": "5Rn69KkTHgvp4V4fjShJFxbQF8KZ76qQvzHctaTPWYmHio9uKSv8FUcSfJHw7q5gbTQQA6Pos6GMYPY4VmzYEjHs",
  "key5": "WCeE6iwEfD5L1Yi5waXhuJgArvCkELqcUFbzznqEpviRG9BGrEtcEF1KDE3tJHNrVCMwCxLwP8AqbHPVJJWf6U3",
  "key6": "ZGaD4csmwUGmshQxoLPJ4oFTsC5QJ4MK2wcuTNQ7Bvy1dvCTr3bsLKxCTSWWXET5CZEhDfGTa5yh9UBwYmsQ2to",
  "key7": "2BbB1sCQnLSfkL5niVzMpNC1DGzdJdLWcmvYUMbwt34j22StEs2LNyMZ2jeF6h9A6LHNCgFeZe6S5sT1YpcP3zZt",
  "key8": "5ctEZ6kETmNTAdfm86MZdhXcuD92K9Y6no5DXSHfjDb4zGhyiVLxQWXcE59H39yJp1D2yPSK4LbfZCkANNNkDFgW",
  "key9": "3TnVkz3n89mUqza8jBrgYkAebqQsw1zUD5n5Nifc61TpiNsf8p1KF8acHUCGsiKDKqxSajAY8XAv3aaL2mSbkWtq",
  "key10": "2rPL5RXUBeSKGVkN6oeyyxSXfUFjYfgWRdaBsD5YVEwzEkrBZR43QbKoi4AX3vqvSDptjPMs4Rn7YnWbhQ8SH72Z",
  "key11": "4LJzjzMiMtUuDVeSjKm1XyAqXMMkWkCeLyuaycLDDVBACrKvLHka7dFJstpPfStumDJjhrRDWxe3jb3TnHKPLU1q",
  "key12": "szcaaVE4zax2A9CsTZdAjY4NsPU2zf3HGap2wRsAKcoZy1yKyEYbKEg3Wyjzq9R5Xad57NeZAJ1eKr2ki4RA4um",
  "key13": "24RNBoESuStsTCoUPgQykoCCyGbadJmmn5AYX7yV9yUAKjH7wXZ1xA7Crdm1ZWSGYq5cWmUAiDWKEubFb7MbnEEg",
  "key14": "5iKWfDfQKCGkpiT5fFp3AtS6aMxdFwGyHNaLM3Cad935VXQUFDV7LhLPLDuEiznY7oJPbkLjv6yUcJAz2fgkNPVg",
  "key15": "hrkUGqgDEBMP6fRQwQY2pxuT9C2TFTr5WRzmQzUcaFUdTXQha5qdmtrQT1NgmDyP9tBtg9MaJECeQymxuYzKioF",
  "key16": "5r7pjK1wuHHZwCT7xGEKt2K2DhX2ivfT586dKXWGwtwRWTxQm9X3hnZ26cw6hJ1PpZtAVu1CJb8q5xieRNDMRUNL",
  "key17": "3Ne6xy1fjVjYxm59griEkqn2Yp4qLCb6WLAvuCCL9ctNbZqH8cVqrgfNQ3oMgUgik7jG94bKBm7rGtCst5QeVyjS",
  "key18": "7BTEJFBXzX3wkCFqYUnYDooHfodFAaVAYeTpW7UBbjkQTumewBzQti9VQejZ4gDzN4hv7PdQcUfXDkimvAzxiXP",
  "key19": "4KhdcmqvXR8X4xWFaRGJ9jCA7FMbEa35eDCvN8q2psoARe4EvTmqJvmv4VetRxxWgVzymZoavvE3qWfVDd7CVx57",
  "key20": "m51MLpQoSMm1zfYeKjd5xTU5x1hNDzroErcYdkcgaoQwq1phCREdTeWbWMEi4ah6up59dGjr5E42QVKE4Tp3hLk",
  "key21": "31tvahNYRRWBTV29U5H4GCpWoNxfHPPZeoDHg6YiYAnpr93Sif8NYYA7JAZ1kvEFm1oRj2kipQ18gBTAbajmz1Q2",
  "key22": "4uwg59GN9vCPqmFrcsC8pFtvPi41iaG4WaqEx9kfyg7XyV9TQ7GcUTbKVx1FDQ4jkE6FKkn6YwPRiA8LjJZy5DvF",
  "key23": "5h1NHJcL8FXFySfTYyuQxeKNHancMpxqShGNDxHCawTYC1qxwetYad47Je5BBePaw1scvtriywpSnbxooTYWvYVk",
  "key24": "2kaYLX9hpyTQKjFyD2MjQsNfiaB9cD3WKgguH3mvDBrpohRVTy3ZkkRc3J6itc7CVbVV7HmJqhesFijZw4H3s1uX",
  "key25": "5GuZpxjzba59kR96eVSvWo9yzaiAnPqFLBjmJtC4r6sbQNmW9Q5taFoaHDAZEK7N9DZKYveN8xUEcuBWen5Nv4HV",
  "key26": "35nBf866ka1FAc2AHU6urAqYHJok4nWSwpRCoA4KkZQCVQYTZwmb49c14QAbsE4zevnnFSEzyRGCZ1f4FVdGyfdK",
  "key27": "3ULtp5eGZ9oMcgkgKxj1M7zB432EqYEVL49b5HRBir4n99L6S8Nd8n6JN6GU7mvYXoPuVqBkaYBP5mYnb9c8Wixb",
  "key28": "3sqWFyA5u4BwA4jWvDx3RavRnbFPa5UhpwN1o5VdjRyAibD9ADh8Kw9mtRMzGLGjz7A5eovbArT9SmAoTGZTgnLA",
  "key29": "339eLK1Yg2pKqtBEhdatoXjKn1ezJeMVs6hqXBc8eS2PDGN4j8K8YxdUkTJJkZ2woZgFC8xkqqtHfzU5HYWSroge",
  "key30": "5UdVsiHBsT71c7s6UmRdarZFjvihLD2CDLCWXHDHoSPUT8QNbQksfqsqWgVzJaf6N9fdb6czRdYgCAghyRo9Sn46",
  "key31": "3MSc5WWBAnq8V3bLytedfvyYLE67hshZ3qam7U483XjUt1nC48H8L2cqMqKAmYWucUsY4XHYZ5x42JPqNEYFpCi6",
  "key32": "3VhJAMqy2r22oSGVWUd3r45TGPJv6NeiwXv7tYfRhZx9EqYjc4oazR3vCA2rXbgejccbGUsaU9X57va2ZkqqjJ3J",
  "key33": "5t4qm3kSp9EcBZay3AALCJfspQnnCjkZdGFzmgET4desumKTynTA5E33mqdGjUn1LmnHTCpbiqh7EyL2njg23LEZ",
  "key34": "5PDdeq9Dm8xxPLxDPTpe1zpHhafz1xQgZSw9sSztMTYzFHoTwWq1SNercQkEn2NgX4ZK1rYLWCmYiLjcRV3RVo8Z",
  "key35": "3si2Z2M3Wj2yTbAkA3Dx49QRw2x3Up5v7RVrg7QJMExzG11Qg2Tsov5njByAoWin1zypEsyjB3W1CGBjuX93QzPi",
  "key36": "3BpA3MHtzJUm3QDFNKrm8zbcVriFfQWkJL9noBjUDcoJaJqaud7BBf6GZn4qdK7bjNNdMTq6AAhzHx4b3BrVnVbM",
  "key37": "4ehDo9nY2P4aVxkjtiyjVX4MPyLqKG8rL8iXBsw3RucHiEPQVcGyT7U8AtcDJx2TAZ7C9GzfCjS3hNbMZVpjFFEL"
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
