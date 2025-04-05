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
    "3TrTQLNuXbeVLjGcBoAfvp4ErWfAp7aCj3Wjcui24ftL6FmPCCpjXnkUtRD8CufECxw2ipmH1U89wMvzU6tnVCzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LM5oCgqpaVBhATsNpfDwySRawucQTGZCdbtcQTiyQkr9Muzcf372NazjFAszezysVZH53riUJDKNxkzYTiic61J",
  "key1": "5dQMK8tbLCFtd9Bttxy8i6qJZDEsMgpNd45y3oSSWpfPz7WJLYJi6y6DfG5DVpuEzUiHNXztTCrMeXYWVdnAbDgW",
  "key2": "3qrAvZapL1AqQsNEcTMenPz1KzcgU5gpPbeLtYDmxdV7utkULya9wLvKrNTeLCahurJAM9twWLEARwdPBhrdPu4Q",
  "key3": "337nqe7DTFW6SAz5kuEcWUUAaRux5M4W5wfYMZRXwbXZXKpzHdjjgbPuzCjyNSBY4E1EGafiCneU41NRaY8Lj7F6",
  "key4": "59KyPHhM4LXmvHnkftbRdtUSWyPdeaFKWfevCS7LwDZNRPasZZBH58wFt78nUq8ADxQSay11cLYFNvezG7bzT2Yk",
  "key5": "4b27v5ZUYqmp5n2o9tYJXct2Ms5b89yPCkG8N3ooPwrfCXJcU7Aq4Uq8dxTeifh8YGBVshQGMeZepnKhd8LimVPA",
  "key6": "5Gy1U2ezv65gA1vx8yvd3zCACm1aD6WR5VgX9VHqwPfidkNJe2ynh3RuuiioSvUphzRH93qrgHnV8rT6MLBjuSWQ",
  "key7": "5YvxLt5n53M4BszP7EkeE5MKB7yok2YDzTYRGmZwqNyZFsnkLRjEmW6wXkc3ZYdpWJbTjeWnwprnQf9wczbdekPE",
  "key8": "4w7XUUqjATm2Gc293DjdCeEmEQz93YiAjCNY1chTEYgsHzG2yiPSAvnnmKY5DEuHzfksC7DHcpqXH5WRWy5eH2KY",
  "key9": "2azmbiWDEQ91JEjQSzWFxrabgoWzJu1BzY1rVNsNcvAWXQ8irUtdBLzgEs3tpMuMviWUvzzX9UpLABvWw5ie1Gnh",
  "key10": "2tYqKekvQxou4MzeAXF4xynb8gSZc6daw8SeUamfZXdVHaWsjDKMqY9HcHqr7iXt8PTptrH8mqFfd6S4fET3zGHj",
  "key11": "4E36jcn8NZXz121JNdnscGJnk46KmfQaJjroqxJTXpkeDWhG5rroxKL9Lk1zyQLFW3YU2UvvihydXJbQnpoimYZ7",
  "key12": "3W7F6sWKSY29CpzJsnwah96md4r67d5N5kehj9wzJ1X2scJgfbNg1qqxQ2rpkNvxjAsX1Ng8gGVVUpEVbU2TPwxQ",
  "key13": "2L1RvUTFo7jT5hAUADGG8cAopaykMnzKdfQ5Xnqtydqg51cqxVTRPbkv5jskcLhZ7WYkMTjwGz7Q4uYyTACcW5qp",
  "key14": "2ijZybH3TStEbToJt9qi4sBiKFNfVFWZXhXBQZeeeEdeEBKLC3JaqMMrJ8AopNq9Zam7Bn4SBKbv7GuD9j9PQTgS",
  "key15": "625uTUkwptsziV2FuTZ2aGM2tyZWDC4uBMKPcs2sxPsZ3WqCSKYdzave7a1NT2CTZiEw2HPokvwccKYoBpxCXLZ9",
  "key16": "48Ji2Xyu4Cb9aEz4gBGh4UUFX2g4WQawHFoXmRiJGnoTERLPaDy6DZ6Et71xxizrtjChno4htjJfQRF1wfsmW3ur",
  "key17": "3eZTkfepkaM5CoCCMhHeqdEFMyrSXuLavu9vgWwdvQGRfeMHFwkTyH3TyXWFfEfkKYkgy6SoUxKcKoeiLVb1YSGF",
  "key18": "5CmydKqR1uq9rZZwFHifEKzM3Z63hMJznmNqUFgSJ48VUMCmoViadVjRwDKEyGrMAKxZYMhperzEGU5obUmUAzrL",
  "key19": "qukWoD5JPZdc4UbsMUN7EfemajuQFK8xSeXYp322PD5rPAmsRZJr1TjRiHeXUcUqjx5TY93DvDizMfyMvkgYEWt",
  "key20": "XM8hgVE5pe7L93Dj1R4oB5jjQ4VoBgqQNY4UM4y6KHnfsGFkn9C7kD8oM9yqAqNUMCE3g61UYoQxH7eCCYqfmVv",
  "key21": "wmzvzTMJYacDjqT79Ksk1oR61Jb84hiexWgMYPGBAM1UrYBjdkdN5v1fbAdyGTN822R7S654o3bbvmtFKsXRx1u",
  "key22": "39Autgt6ZqAxsCZR1LTNeTNKAMqpqSXNgZUevv5we3sm5rTpV6kU3WDgaAzF8HkDksZVe1Vqy5pxqJ5LDkWr1uJy",
  "key23": "25ZAK3sq8ksKvLH1A5PeuaWN8GBsG3RgCYwdzrN64h7JaFipsFyWnCHN9xTbNt5RsqGkMnieY3HvdrW2PAjnbUzy",
  "key24": "29KRzVCYYQSBFEDsSfit3F193z2wkmZQCpRFtjD7TPcbuc3rLM86fmUyVMHMdzxtwiZpuNDViaLHeejaW19RmrsV",
  "key25": "5DFAkjCTDcz4A3tycXBcTZuop49ZSab9jzDhLcNLyNL5dZHmc6MJ63hXJTEcZrJiKDiWFw3VbwG9ScdhiAEBFJMw",
  "key26": "5JRuhpR3SyEitGcDktqVwbEkdCvpU1aVCrtSRj4KVnWvgzZvhhxoSWGCyG8DAmgsgnq9znxb1pxj6X6bTU6wtzue",
  "key27": "k9c5PRQGjt1Sb95o6vksVF5yGEoicxtPzukqGU1gCZuBJjBDHELvm8o27hfmNPKY7J3Ama65JBx8TfaH1i13rBS",
  "key28": "4HocoP5Ng59i4gRsRZdSq2XDW1tvdHQbkd3h2Rr1BF8RVGhAhcipWB9vJDEyAsUwVGvixnXkb1Zz6BjLrs8hgd8G",
  "key29": "dzaeta4LGkLVoirvKzcMN5eCciTCC37WjLfmCZBu7rbWcS9DJ81Buh2ofDurP4uRoPMaDF9FtHwRsrqbhsEV5nZ",
  "key30": "4Bc1AoAFkm6mAQoroQZALRK6HpryGn8d6xtN98jFq6hE9ndvAfkf9V1185D7VRJ4zusHJY39hpSw2imJEXr89Nwc",
  "key31": "2DbuBTg6F4xMSV6Rqr5s9H7p5MunSEZG13r4XsvXk5LExG6u6gc7yigQANbgh53KX8V85xK9oSgAjbp443exDH7K",
  "key32": "TCVGzpqd688gXMWzdNCjAn75Lz1MFH3hRj6TH3guSiWnD9PFrsJGA6PX7dxYPRaEYmTQJuN2FjvGyx2w8gYXpQ2",
  "key33": "3fvA86yt3QcULPuhJu4hLP68LntydVdCk7gZyXw6ypTDc3yFRgMdUCQXjb7QmqKi9nXvmSRTqgpW3pkxeScjxCS8",
  "key34": "3yFXsS7mQbWRwZuJzmL9PCgPMJuuCtU4jdnP5sXLx9ej9Pq3CHyC5ftcjt4NzHKjzbA6BxR6DhwEqURg1fX1zg3A",
  "key35": "2xzmnAmAHGoatRpHfP4kGRjaB9hVAodDU1XqiNkUzDXaVDyVeShGyPVS3DphcFeyQehHAsHHkyrCi7947pBBjMQu",
  "key36": "fJ8p7crzA6TjxRx1ZaAzx5vn1G3ucuWDkN8EJTJ8oManSX6nf7oyakbVXbCD9AdEULtTTBFPWYjHA3Ha9g6ZnNV",
  "key37": "5yL5tcZWtJKScSMegMFxGypPPKfMvjh9Kycf1LPgZ6hchr4E9sTy7yWGWxmqejSiqUoTwzyyd8AdhtkoGXcaNrL6",
  "key38": "WYbrpTBreh7WaWqpd4hstxU8qhJBqAWhJXLMc6zyaXJHtVh1rA9kXhxUawNwpkA4RRv7E2p1fvnVM1xnwDLxmsY",
  "key39": "2wzwLVtMWNRj6vbYjSYxQ971LdXxiobCVXNmjMpgMcCoiXWMpq2N2EEfAHMtGXwFjQEdyZSjzQJUzamAy2ezKRPB",
  "key40": "2ExUMP9mEp3ZTBWfFT9HSMLmhmJtbDFJ3mEUevLpFosYr38cAvcLRj2NEsVAYAcfkk9X4ceiG6oH6dLFrD8mYuje",
  "key41": "xCJKxytFVcvcYaKFUHaZnJAJDLFXdMxcqikQVVCxHcNSTbAWo4pKXHyFaJTZwkDQXPaFw7RSZgNQgXcHmQJxp8q"
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
