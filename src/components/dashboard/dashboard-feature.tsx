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
    "5D5M4AyNYQzkGXBvdWPyzmQryXC6aDEWJfjzQtGoNn4PXko2hhGGTWYkbB8woVD7JfaK52wHDtS6bjrKCXiU56ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S5vCs78SPQXLQjMjRTvr3DseHv13UH4Bx77C2Z8ukaM3G5h7bE2EyK8kvoSjVxKboC8tRjZcxrqqV5gUQXkk7i5",
  "key1": "4adFzNFqCBUQAAphHjRcHerBDNp86M95o1CQsiKzpNk1hLvaZV4YPmsViQy7TyDaSJM3SRgWnW5qPxXg7f9xr5Ed",
  "key2": "4q5j7S87pYA2HGRGx229fjJoUNaTsaFy3reajjuVrRndrbRpRpZLjRiBSRjTXCPPs2pCBu2JknKvVWWQYUCAs6Nj",
  "key3": "3xbbguQKUceoZvihQvHE3a7UrtYsV5H2FkeMt3gbcosywhEy9ftRsb2aPFBQfyXtCCsuRXAGtToLzQBrRAmAo8Dt",
  "key4": "2DXebLwhbS5UPb8jXAtGNmHLwLiijEkusk1y1BhtRuxvLfScDsrQUXMs521v7aFEm6G1TqnTnwX9jFiHkiKFkhfH",
  "key5": "58QB8n1aDnPgiqNN22C5UFyHyJMMWaZkg1MoAt97vBcuRdiPRSXB9hUicNeDX3kygjDjHMoyVVY77Z7cbGDhrskz",
  "key6": "VRAbugurpzgkUhcBSJPfH7Hn4BWb7eMdGofzhV5NXufTiKLmcwiVUE5vqqDgfU6Hxxb68R1TDb3UaALvfM9Q5Ab",
  "key7": "2otYpVWGxr6BWhANpK65fY38SWmcUej5kZex9Y3d93yZUpqPd9b1GZLeNjutGHo1k6qv5JeHBXNs1z8P9FMUpaPz",
  "key8": "65ZPekGMAmqrkWUwZzVGUqYFRot7VT26hD6TzVkEEP86CPA3v6oprjLoj8gKrWWeteACmB1F6xTX4wTiNMrMRRzK",
  "key9": "4pM52k37S7ufMYkzuUAwqD54SPHbwvswK4YJAzLisSDW4bqqnTjbipsQ7ji6vz7uyWP1WHzqKTYGb3nwFqteHDf8",
  "key10": "3kb52iZF5Kr17kHDny878xDTjHeWgLXKWEzVAg4EYHKaUtiS8qUtcCASYgFydKwW1d7vshqRKbkcUxZqwdiDnaQs",
  "key11": "XC16tM6Tfbv1dCRsu4mUSWPUz94mzs7v8bsMQX36VfH7b8GQWwNRYqgjSsznBwmENumheRqYkWzYxc9nm9xa6Hw",
  "key12": "5nEk4XUmbZ7sYfweuPydRGBHic1SqqoZGs1Vnv1xyHkPyuKcoRnNQZt5Bwf5otc8AexA7foSkhBqBXY91Qm3tmvU",
  "key13": "yxYrkXEmaXYfvgHjJDf3Kb1g8RkcVpBDKSAupvFixB5wZph8rJpQ8nGfMMP7V4M71pgo7ekwWquVGXGo6ekGyiV",
  "key14": "2AqDLFLGCPrznnDqZk1pPsPg2BttYyYKetDedKtfnx5TGSdtCeWAKRAMgj4CvMRV5m7D6EyPLtQ2aR6RLxxh9kXL",
  "key15": "KynSRURxRDLnebspMZKofzgM79PfxP9P2men6puQdPfDpQ5bwRYTzgAi4GrG1TQKQ2kM1gzt561MuRGqAVRKhec",
  "key16": "ooWpfu4VqYVHiWY2izfVgCXJmUPBvoPrp3g5f5ma5kwYgKyXjT2tm9EexWvykrwuZDnvV7mLfeNtNoYcE6G3b88",
  "key17": "dUhjCvnZu7NWTCFy8ZLcYTFogYeCWm8UJZbg2DHTG3F9n5Vca48uEgzSbbsWcEw7aiu7N1e48RQNRUNfetTvESH",
  "key18": "5o3VM5k4vZSmPCEQoLebR5qqMiFPRxdA4WTCw637diP2r5H1yympJdCD4Wng11dXXKqJUrJWFDdEknd8gfUAEDnA",
  "key19": "2qG8Gwr86vTXMrMWnXpf8c1dQj1s6tyiaB61aUyWrMX3dQSoyBHUj5KaPnEWSJTgVVBh5M62CMKsC56MgukdT94A",
  "key20": "5gLWo4vZUzZtWk5aPgvyGyN98GXA9gYHKvfvdGn1jjGnPBdLfbDQRmm6CUNku1i7UxapwS6hYohrqVonxrpZEDKN",
  "key21": "4UiCbveAYCtQYwpXFnc25376urN1K1zRGYXzg3EaTgbv7FRguSfvatyF8kEP4gPC6S7z7orM55KbQWxvT1R7ErRS",
  "key22": "3gdByuYTGbU1zPfaoL3X5Ce8spaVEhggy6mBxkEuzZ7WBgKpFMJGFbyfgi5VED5wqq1HMnZYXFUHNpRucTqhP6EW",
  "key23": "5ocEcQ2vP45A1mcMSRDBavnfeSKCdDHQWhaQpk1wU3R2iw2MZu9aMufgFBuF4ZoctMyhtBRZrUDgPnnx23CyFjfn",
  "key24": "3b5C8gnQX6qa3ZpTzgqDwfVvyhnPZKVcGgMoFXkXi3UMVcuRzeLtzALHTm3aFHDQ25ze6jdjPAnR672v4Q1K2AL5",
  "key25": "2eRkXg9Vrr2z4BH4UtsVEMfTVZC5dGtdv1LBNLy6uYDzpmBmGoa9DTVTBXZKr9Jho2jBPgPwcS5nvYuYtQoqbAwY",
  "key26": "2NoJ94wcigYitVRDt9YyH67soF18po8rVwvCYPNAzUu9PecbcTxDCsXg2HwLdJYya3N2qianzpBut9iZL3GqQ7U8",
  "key27": "2QKYUxd393syGWguuw5rj16FvcBpzwG9fxMnEDKFE9TKR4Z1GrXS71akadUd6zR4gBswsyH1gnNJyHJcWreoMv1U",
  "key28": "nc1hDFyXSGMu34RmoqHxmra6dpLNN3vHvV5U3VSReFxoh61Ke5346rVBH3Zq8zKbG1XMo14ZUFkpewSn33dq1EN",
  "key29": "5srdC7aNTuuSmEPnj1axJB4huy8UvnGbv4neMMwXb639tdQdpNmynudUg6jS81qmStecgHG15R9Gf6RqCjY2aXs3",
  "key30": "2sPh4FSfWH2jrT9UK9qrNAE285ukBz9foeBegWGcprv4Qm46X7FJRhhpZTiDUCy7EMnPtXk3Jo8re6M6t2f2Jwz7",
  "key31": "4g2cmP6a5WbFSitM78NYScZaro5yXa8ptoLAKcSu1quiEz1DXMuCcU1Yfv8Yh2aoEETDYtf7RFBedf8SvQkm4pdv",
  "key32": "21oUKc6rMVvyAFgdPQQJi2Mq1zE1YuqgVmXp6awjjpCVnFUVb8kQaMXrbWGXCR3jJgJGPeivUCNBcXdsaYEJmPcK",
  "key33": "4FNb8es6D1vQRJ1pgUDUQm4UvpWcLzEqnnqXftgCBzuQWFbLF3Jrjit4JPMhbxMxBz7Tsx3KgGw4JGmG2pPAw5Rg",
  "key34": "oGuePTNqygnhS2Kh3k1tgykAig9rJ3rHEV4EzuVQq5tH3P5uEkMNv715TeSyvUzmKzK8e6Nghuvki5UPnz2gKnr",
  "key35": "65PpisqGpAHYXGu7QjAMYnRb6CuzfPrfXbDYMU7p3GxX9fsLEpHGJgp2ws9cMiCQMVgtj6DBBXZEUXLfFJWAXRcJ",
  "key36": "3GuuAvHzZmcFkUC5ymtncMUkzxmAS1HGn8yftdGthFW2ypFpkXpf7Q4ysadJUSda3vsqMXyx6gE5RLx9hW97nGf3",
  "key37": "5JWpFRQMLHN8umZsYHZSFxwEqBKNq3jG1AoLp9WXuJEkVPuWGQN6srEf7uKaW7cHkff7h83c6Yx3ycXWHBLtSDca",
  "key38": "2bvoHrwvkAWV3CBTP7EfLvsUsAMFNmnrcrei3zHammLm6C8apoMysrbTPd5Upo1J8ntCSxyrfXNDaL2QJ2MUZHFs",
  "key39": "3HcsXsPuSa2zvXyKzA1XatRJG65N3wAWNFYsksB2TqLqJTVdShEL1yoCxZHsUJDWyAfc36efZdu7eLi1AG8thD9e",
  "key40": "59qPyfAHBe4JLZhU7gWNbxq9F34wWJm2vk5euF2ii41Msp5Z2j1oRkNiAhqgijWPmANdoKrKP59ZhtdjJRxS9keT",
  "key41": "3Zy3ECEAM9kj16Qkv3GBCx1TjkzoVsUJ1bsi1i1sDsfK9dsXriqeMvpoaxR7ayeToxtYez63k6ZpSv5nK2M5X2NA",
  "key42": "5TVv2BrJ4ZkVMfngqCSCjsRdRyLaSVR6eMmqJYSCphP2iBKiLQXUPudoN4xtLJRQV9GG6o3ozMe2Tg637daTG6pf",
  "key43": "2jEj5wqgwLXpawLf8mh8EXQvue9kxg2yqfTebyDYLMZcFSn1e5CgKgdp6axz3VYZzyCZUkcg1gRmYVSZQDZ4QmrC"
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
