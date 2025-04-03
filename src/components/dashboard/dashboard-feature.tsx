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
    "5JRKv6nTYjS2ofevmsEDuj2FUbicF4kQHbqjx9a9GiFKzELPfar2SeyyKUg9NrsuP23nk1pLu4poYnkmzqVmwc8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294sVKGmSxG4nWYL4ep91RwDfVHe4SUFVF83zZZiGjo2SUcq8fpec6bHSqicuzHmcNrYw9iZiPVbjYYNBv7o9jCJ",
  "key1": "24qyRfmCFpMWGhae27KHpXUS6LUZL3HuUuyJpeJ8WVUhkjLYTac2hkX8gc66FhxQdV3eBxVJqA4d2aQQYtAwLMkt",
  "key2": "2nqu9coK9YGzisZ71S9427vPNBTsqw4QrVgS7fCCGnMSi4D6VnNMhBHKYncpYHyUZeHgwFfX9KKCwj5jL8qpfoPY",
  "key3": "2dLXDMHD8WdKpYo7mSiB71JdqLC79pkmNbfNwTWvEBKhBqxKfj78Z9LVJgd2MtzgeUoLAzi84Vrjk2dQWZopfWGT",
  "key4": "2tohreerAPSoyKVGy1jpSZ9ZhLqbEdqrrox8aZqGFXGxbJ9oZaJX4mX9sQFAktwZj6v5cvPYx99z6VoyGGvijxG",
  "key5": "P1ZnqSASgpYWhn55vJ3G8M7rQRStrGc87VdNuEZnLAwUUpAYSQqrfpknyUY1TMRj6Ntt4UqLWGM3jG48FfG3VBJ",
  "key6": "5sVqj7ZS1UAtyHTWRJb4TvJLJwL7CVgJ4JpGQFAazVsfetFWGMasRgmEfoGA6JimcmpyhHsNGGs3CSQ1BSHfBRbW",
  "key7": "2HC1UuzfecKb2rjzRicZn5ZKzFmSr3uVP7fFLX7kff3DaX1kx7vC6JfguCk7tyq1pigoYBhrLrn4s1AnXrYgzJPH",
  "key8": "oqvuDJWBNkb7EVoerotEFbAvKn9G1gotxTtdEuU8hcPur4HZNpxSEggUv1g47GgEeXTYD3qexymXd6ULbHUZZiJ",
  "key9": "4Q2TfP8xCrURSb16oomDndnniiqGhEprM1SkxDiiGkfTw18NFLiPELgbuYif1gpjxDKN8wuiVi3HASfFsCKvdPzU",
  "key10": "3SkLLdy9BtuPjZ47PwxMCzChWMTLCcZq9j6taYzc695vuyHdJ5tjPeqgvjaCzCsue73XbskJxKwGRGTEAKxGxDTY",
  "key11": "4FqotUagXsqavwzoYuMkfsSWUNL97Pnz1i8rpG1Nkk2Xn4vZF7eWTSsLuJ4kJejLFpzuYGYxeHii5Nv1k7MaurP6",
  "key12": "4NrX4nbKavaFPXWvZ5vvAdL6pt5NLfAKwbSLe4EHtrHwh2z6L6i4fUJhf6byDLnZvzXr4UEHBsiVLUZ9Sm7wSria",
  "key13": "pco7E6LktaqTuZ9F94TTXCFVcN37iZSgqsgXfkMaC35GZVVhBG7L8HZ6wLb2QkD6uVcBsD1vKfgi6js529tJ2tP",
  "key14": "3RhC6FLrziyjBafNDXMpmF8XZWg4tGEJuSsDpATRod2G7yD2DybPwZdHVKooQMRDWtcwN9kEED88pnKnDb9bjFsP",
  "key15": "4F28EnMToKawg9uvxf1c5f6JpX62tTJA8ks8BECeLVBUK9JBUDAQsiBJ6ZRBT89DLWRWbG6bZah3papmpNgDooCo",
  "key16": "5LW1UoK4QPT6eBcfrjQttHTQ6zW4ScHSmjJHqaJTKSmoofm39q3EP3sCDYh6EpuEaDsAQD6w42xvfECAyABCyXqR",
  "key17": "65pXSbiZAbb9yzMi7HpXTFQTipSBvPxwQDMrCbYQmFQcD1o15YE212ESKsV928XrC2KF42CxKZ9bVDvk1G4nNkcM",
  "key18": "4Pzad8MWDaHraMCjvQFmBGmEDT8xSVCkSCQcVZD51VUn3ASmDtHc2uXTb9pRtiHSe32tsSvxQ9wVo61bL6XRSHy",
  "key19": "i1xcSfYZEyxki73CTs1yp7BtRLVey3o4dPbSti8G6iPT7jCAixD9RzxMk7LCiJdGnrhJh4Ux8oLXwJhSYfdjibm",
  "key20": "j9gWxgJeK9ozbE1j1ys421SE221nr2cqcxt49myHSegqEDUGBFvuSob2mZh7FvPB6VHqBHRmCcufz9wKANpwhqw",
  "key21": "2o5FXcjq56pwJjWF1zxqirDdFz8rCNYS4keYykE1bwMUrL4VYWegndAhze2UuKD6Su5N9xjhCKjXNknYrLevtUVT",
  "key22": "4FiRo9EaUEgYVr74CifmWtTC9qYBpmY3wH8edWU9u9bDoSYwhBbGoRLNyon5jhsne48rbbfkc38xor1XczTVbHcX",
  "key23": "3yWT4GLyUACrCtc8K7rcnjPkwFB46LEneh3YdMNFi8gV5pxCmQCbywFsSGrHPGWtQcXZAxRN3N7wLwkjVrrx1D2r",
  "key24": "4FbYMUJDff9MwAtH3HRad1Xfnn9UJX3Mu4ggoDRWSYdsnjvbVLNXRUZeS5UbrV8z6r22TF28MPTt3xcz6MhvwbbY",
  "key25": "437Xcapg9aBdhQdVu72RhHK9q6hX5J2V28ZMzUFEcWDRPjTxivuJbR8d9ESTLeDM9a5knk9jy2BkdjPb23zS4toS",
  "key26": "3m7ihYzJTTghqTA6vUJcnSRMSSx8vG1zCVVzmaxqGeEShkVwhywvRU1ppms9BGYbd9APMTknVCU3edzaBpdbxisP",
  "key27": "2kkRfYTiVHDL1PyV5wCv5zWmwC4Pypdzzan3yuXKHpVep4pu5EQ1miScCkVtrxAqj2wmsxiHVf4esn8fFz4655QJ",
  "key28": "3E9bmGhh6q77MppMRCEF4Pcpr7nDkhS2KUYoW3yn6EnnDYS2r1Ffxi84qFGsuPRZArs8rd4JVnMHCBrUBRdRNKKF",
  "key29": "ejWftLQ86R29MBqqy3oKo1oMAnEgDtem6cQFxAnNKzCTMpLuNX3DCMzCr24DsJhJmrBHmsYrzxV2Vk4fYLdtF8w",
  "key30": "bfrC2LToK2p94hucnAE1BFQVbpzUXDAyZ1DSpqLQ1ruo3EjzxcWBh6KUThNh4SJ3jQyggzYsbca4opbNr5LDEZK",
  "key31": "2mPnuDZSrSTvSSZU7XUR4sd4ZUKnGXa3DxV2HPqSkRwqZamQa7v5CuQtBvErWcXzJMx8U8GNZtvGnL6d9Z1oTmf",
  "key32": "4XMveLy7gzyz1u6BVqyx6587gv8HzUK3NBABggFf3LcSJk4i4Fqowq9EKKuqrd3YGRfoFqumFunbDSs6ihYGTmsp",
  "key33": "46YGggGTiXB1UaiZNafCwkB64m2qiXiBSHXMzB2QC1osmhnpnoF8Go3CZsSpvnzv2dnRzpr2yodGJUZ3YnpA1ZT7",
  "key34": "5jSMFTFLwA4NLKYJCHBn1dEYPfR3Q5C3pHjN4Exn65P5oAZffx4aFtoByP2MhPF8MBoXdg5fP95JGAdUSBQf4VU2",
  "key35": "3ApMcxXwM8raECrtPX9LQLSzXqUBxHkGNnHTm9NAu1PUYvWTZxovobMrZF8aqJcH3Z5T8ucCKg8fVprYEMWh8Dfm",
  "key36": "56NwYGSf35YJMRCPXGvQG7Gu2rqVbbDBAHFFkYHM3XW1hEyrbhoefdt84GWduigBGTF8FBhicCoRLiv7Qqmwx1h4",
  "key37": "3hTZFpJVXk9UnrzWw15pdZN1NntGUmbUSwioTGzCyR9bvMSm18JDTs86XQNv83JbVBBB6fcrnU3SUEq8PG8AhE4C",
  "key38": "23deGfRnks5hNgsu8XaL6C3hmKeb1WCQUz4VfPZ9Cyv1wVKLhoMkAezyGzdDsQJLxbdetwcpxyFp3ZHdpxrzTnkP",
  "key39": "63sYrTc85boF6sgTFC6uTJPe9ite9t8rE5xERu15hqkFGCgDFwfrNYkAyf7UJNPXvrR5zyCV9nWugFAJXt7bXxCQ"
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
