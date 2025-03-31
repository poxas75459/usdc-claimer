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
    "kEWjXbWzVnoETGRrFUo7KuXFML3UgNr1D8FAV4SC1nfjo1LUc2RewBYDZZcCKHr6ra966U3uYh1tYgRafMCLDfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkC36fyP7GoTvvFcq6wdkyCuPx4dQLqs7zZoj3zeief8uWyiHpFxZ6wTBNdtaGoCdDA2n7M6ufZrDtGJHVTEFf8",
  "key1": "4t3GSq6rDxkYtzS9ESwP4r84aeDxnwNj5VYjWnYbjx7eQLyFPWqoNPZezzihVKixMddi5Acj1a8k82go2Pbq2tMB",
  "key2": "2rnvd8UEFy1WpAdq2APaoGVAg4RBx6Mnj28qynEsDNymAm5dAk1ifC8cdNW5CocyzC7zo3sYA7KJdNj9ut6yE3dN",
  "key3": "1S1MuR4RwHUXS7HWV1wPufib71ovqUr6a9NdafxE7onaHwEF5rp44JNjzyBjmB7SZuDeQvHDPDqLoRp3tbPxArc",
  "key4": "4KGjvc5j6BqkeV4YmTcU9QXjabfpnUsojd2LX2kBdFSPsTPBTgrhHGrZXd1H1hrJRC2tDQYT8ZL1w2enz6h9U9kd",
  "key5": "2pk7HrNeE7qXidw8jogx6L4B1bjEjcNjd3GYaaXEhC6aheTZmizm993wmY2dZPHQEUb3quM5NZVDM296B495My8P",
  "key6": "5paoKcPJKjovunbGaCoYSqFVA5i4kHGPHyYb5F2iPHze9edsLcsxEiKY76a1ozmMd6CYpWh2y4aKzXSK5sTjGxL6",
  "key7": "5B9xpie9XGjNAQ1h9xTnRmhS8AKENq2dUxVw3zyiUVp1u7SER34BkYsu3L4xiUw9HSPci5pJBwTGeBGi3GLbMKJ",
  "key8": "5Rpj2iW8TgAbcsJi8vgrFg6KxpHEoMUpMPPkLiMjXUFRe2NXWFxooqaeZJRX5hyZk2pUXWPEJFW58Mmd6JLHPgvR",
  "key9": "45aLPJ2RjLCyKQEWuipQaXjjempinv1PBUQsWcsmt2L2GHsrsMAqoC3NDSDqxRZTuKcLnz65YcYdTwphE4LTqdFC",
  "key10": "3oFv6gYCV5BQFN9od5Pc9JEoERsxwgGcMGrn5218Uh4JJSXBskZCb2pYo3pnZyqk8Sjj2cSVdexTQDHB24Jj3BSZ",
  "key11": "4mKahSN11Yi9zkNq5XESWPMhHyvvJnpKP67RhfhhM9beXD714mn3TsL511gnaGCAJgHzo1y4qXsXQHMMJ1EeTzVV",
  "key12": "3fU56qQPAWRsHcxBvfNcfedPPRyWyfFUmAuBwDoNU4k183VdUsE4HnpEQcT5WukUxaW5QZ23ZbtJsFfwGHDvXgAs",
  "key13": "4cNw2MTopMzb8GfgbvaYJQGZQfRg9jGUDyLULYckAQNiKgYA2JcjXBayDjdbH9JsHnGc5nPdAL1DcSoWrBumyNv1",
  "key14": "3FAkyXWn78BFRoTvAFwWTYGTm8aVeSbnxkxQvTCGt8SGiqsCR9ooU1mP9Aygg3BuhTU6QjjqhexbbMLRErrVzzVS",
  "key15": "K2AtZy3dH5N7bjjTBNrZjRF5Rmvrx7pSwgbQvgZ3MJDgrtE13tT3Be8aA1Uc9ihkca6pjXGrJQMFhrUkwn7VAoY",
  "key16": "3cCByyv3Vrqki3AJzt6rVmB5zHSqzoED295nqkaxuhQMT9zaQQgSxCkeDqaw9Mn89usAmcmS2eH4RgnnDSqqqEJa",
  "key17": "384yLjoPPAspK7JAJtPUWLftXUP9agsVK1W9oYDRjggiKgAeF6CUDhx4BzJpxcWBDmPLmXTCS3gsgsFGw9w8N9NL",
  "key18": "3akanzs8oAbhMYP94g2yrMXh8kSQmM1KhkfD3YyRqHgQtzimE9PF7Yxafu4TpybWGDckf2orw677JYuypLvjfM5n",
  "key19": "3os5z2NAvVADj9CMCEZXfsMn6FZJGnQeiNeHS8nvQmqRo9RiZLHij7qxhVRAkmC4nijFa1ir2Cmf5zNoW9RHLRDn",
  "key20": "5rgTj5Xins6XrvQWJQY6NKsmTvFGidwJSycFpnCPvc4MiSbooPaY9FB3jgiZfaMXftUfFZTPvpkdbqui9DtoArmz",
  "key21": "M4sCAu2Fhjxhe1RBLtpLx63FBCXwSfiumQceL2NMtT5BpZwdVsoVVKjyjKzyKYPAqRzx5FHi92rXTuctq14QHeP",
  "key22": "pAHpvgAqKBfKLoukDB6A5SueRZv9VGqXa6Fcv6i2e75qfiD38hMSh314mQJYpCe4oqMZnXDWy96Z56frPzc2fKi",
  "key23": "3ZByTDawC2rScxJ6e4GTaTDRpdWyrW6mNB9XSBdTPnQN8yTHTN61Bn3bVvrxrxFtWeYxw1P3ueZcUV7g62wkWY6G",
  "key24": "2mQSzMZkqgrrXmZYjcwaxRFsBCwyo5exoegihGiYGsnvrx9PnZjgqUgG6Z9mqhrLAib9PY5KsfW1UdBd54SvNDTW",
  "key25": "4t5wa9rbKDkXPLEjLia74mx429hSaKXrnqinuBjT8WbVaf48gESYjHLVWyE2b64SWHygaLEQxk9JxHcRe8auqjBY",
  "key26": "3K7yuDf5f6yHsjrq17booDkxAgi8RWXzB25wss3munMaXS2G1fd3Fv7r5f8iGHbXt4XT8HREra8T8CMdPUCtKHxP",
  "key27": "4roWcH8p5dEwThkdYQQdY7x8m4ZHWBJi9ureHgm9ZkpQVjqybkyFFHNojFuMu9oTdbSS5rUZbmRbY4be87R8t14Z",
  "key28": "44Bk1VqPfshYjnWBQ4hbJBBr5dN7J8chSWShkYtiN2HZ4TMwHA32GNJxdKdCApt3wpXJBCwqPZGpzfno4iTMpuZd",
  "key29": "54upFU7TvAWnXjBaJ9U8BvM76TSA1oTZCJ1LSoSFkraUoJVc5wVBoaNMSGcUiBERGZDrQmuLr49HkNEWXVBqrwoH",
  "key30": "45WHKHEutZkbh8JozaQFNTc4ioW1Sz3tFi8iM4jtE24aFTDTJN4AXUtVuK4F2oDYwhmrMSTASNmcykjaznUpe9wr",
  "key31": "54o7WgEVyNE2acnAHt3CDcLNo5HhscUinGBTboezmrPS2q7SGwWjg6Xth574BbR73A38vJgFD2d4T1kimoEdFssh",
  "key32": "2sfMUFDFfcKJSDjeM2vnRsGoZxCM8U2vE1q77KdEEsEDDRxeZVG1YgianxtqLRgVApXgpNg767viX2VEHB2DPLbj",
  "key33": "5cf4EHvQYCYXWYoYb4fBVhG3zHbHPGUFNaQWZeUWNj8gc797rqqwgSkhrqxanmWwSqv1m9aTGHbAiN97dCUch4qt",
  "key34": "SmB2WWMFnLTjXjHQA5SDpvnkGTCEhw8nAh3yGAq5WkPh7FiEnyDEquVKwaGGMhxdHSnCpcBZpvaAoEJzHZUJtGy"
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
