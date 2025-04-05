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
    "2qh7M1y1DpUhNusV1afdMAJzEpdDqHbmNGfsrEjtfrAi7FzTtzAHnbN7idxNcYwTV5eoZ9KMWVs93aM1euwxY5VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cM4a87sYHZKq2mid6FqqRyCwoxKoYqqcTPpvoDUBhb6JrUTjZQEFzzBMWHFkJBZfKFRPrQBDwKAjRcVcrpWDpQr",
  "key1": "5WjnHtEB9u4RHgJLJxXWbzw4iUnLwxtQWkFqxPKnqfvpa8TN12Cp8YgmrWj8FCHgncqpkFqoXNgF5T73dXniS2fT",
  "key2": "4WvLxSPY7RLqkwMUbvLpwpYBBXX3jVB6krrLsdL6avqcFkNFE6W6L4iPS4BzazzEsMA73CTNLaL3mq7oD6hm6m6U",
  "key3": "2ggDAJYRVoxBUGXTfAu3vmp98U4d84gL3JBaAaeSCF5UJKhWU3bKvwVUDjpkMomJBHFyf4VNugg6rEk7L6rSjcuV",
  "key4": "62EMRRxGQXLWLkHQyBbZKH4qjdMs5FyM4Ry6fCSYY1iyULxth2Q7HguUQKDuP8dBHDpcLNfqRLDJEFopH5SZHB1x",
  "key5": "38Fm8weTwJ6yWs3uo58JWDXwAY7tyLG6HVF7iRzGVxmBQAshN2f3RpEqZDyC5xbB9qnHAYFquutXjiwbmL1RxULi",
  "key6": "ywQQzgcMfW5WJrw154McNmFar68Z95qiGj68aRkdXWcCLFVemdVUW7W4RnP3Wffpp9wN8yR4qAU9Jjo3HkzrC5g",
  "key7": "RsmwyrtjYdubkJAdm9AEYMYJ2KjE2dR3b2hvUjwfsC4y1MTPtAVox2MLL2iMipicFfzRUymsS96f4YakJAUe1mv",
  "key8": "61npc68Vv4tPZ2cf368VdYexDUEJpE8VpRYPxND1eZ4qdcarihYbsMqbQEc8CK5BtnANPivEp6zyR2gPh8UBukBD",
  "key9": "2uJzxgFxqY9aevwbkxiYZdrrCgJoVDaeYMXhP5K9XUvaYhNMpWEzyWxc7AaFA6JProoXYE8H18eDi2izESFmf52m",
  "key10": "5w69U6dFrareg2HbHJUhpnVbZXdyge7QvAutCY1ytJMJA81Ywo3g4JYYguDP2CrFkXBJxVCTZuYwDGf4vbVzaiqx",
  "key11": "4KtBLZZdz8nBtnVxfwVDgLqSfCHZZhowzUBVPo4wefTJXaWam633x8Y9tVPLsmnUSgrXSVMYhosYdmmPwWhwxr3z",
  "key12": "4SVxfm9Pq84pDosjj1Kz5hgLhXLMhDvGGPbF7rhhrhNfBn4cfTEVAUJt9JQUj3CFm1VxV7JBYNERRQDhU8Na62kx",
  "key13": "4UTFn5hrPVM8ERAcLoBnSNCUxAV5fbXhhCfZDVigWpdx8hyiugGhykTnGmkd3F3W8oAD6uaNUiLKuAGu5pyN8oav",
  "key14": "4Xwrtqm18mWMoNsM772YAYt7khXp4iA2f5AkVKf5CFnmQUe65aeFiXrtjszqWkCtBB6onx8weAUYwoshBvhAo3c4",
  "key15": "5RGcanoRzNx4sAHznbRTiGkJF5Xn6rjtHLRiqjacJY32etGNHZ1US3A8QKJxALJzoyjLPyc1LsV2RmSjidZsycX9",
  "key16": "zSEksL85RzCqc7FWATAgryCzQuZcRxGNuEmkRsVvnCDwFHkeh1Xh43GZ2ErEsbPvVkErg26STZUdk4QqN4rVgva",
  "key17": "2SqKtWgCfvY86qDJrKJ68a5B1A7SDPKYq85Zy6FXWGB21QU2swYdd3aoSe61RnHKFi8NeKzCNpgNJGAWggqj17ks",
  "key18": "4LAvmmwCFbJnM6bWs9r6CJFc2NEMSYj4vFBgDngJcNjVi6vK9xJEREb8vek3jxV1qREfSMMz3yfSaxkSsWeL5epo",
  "key19": "4vQtrPTdfkMGzMS7EZjSry8Q4Vy91k1UhYqw8GFMxETwWronZhmBrjFCe44Q7Qj6T3SzX1CU63GfcBFUwbcP9tKV",
  "key20": "RjmQt5AhjFztbu3vzEXdnCPiu8FhFtZtgTuCbWJXNktJKyagjogAYH3bcGoHXgt2yzoe4iBm3uwbEXD9z7ZPF7p",
  "key21": "5HnfVYZxnnFkn9eX878WU17catNibyjKSV8NVTQN8kSrh4XSXxswy7RFTvLVHhpvivUWYDno28v9ecCvnqUJUpyb",
  "key22": "4XafWzZLdLYqU239qgYwgmQkypa5aNw727aeuPrMEz9RTYhv8mhjNvPMCVh1Uy5zJ252QrNKi4muNN7oCGWY5MR5",
  "key23": "3zF1PmxRqT8TgX2Guky4HByacLW46GXvRn463tB4f9rvz79roTukV3xQeLTkawaiaM26vjMZArWxHJPzcBWEKfFQ",
  "key24": "3j7LNga1B1KYAxjjQDVqg2y9sujJuqUutdGDe78C7DDpcMct8XnpbwKCmpa8fvcUwgBht1Soob4uVo6KDDropSYi",
  "key25": "2eDQzGCP4Qn7kJCCr2Ua7itPB7ZtJXoaAyckgXDaSPtqDwP2kZmMhByyWX2ZW8f9cSYqxAYAy6Wvmu2NtovKpZaB",
  "key26": "5Di4vFrKQ2PP4jDADE22iVGdPVZPqdPvHxCxQNpWt4972w5BCZQN7XWn8scTunCVPJUfvWfruQwaMAUnZN6HQAVc",
  "key27": "4Uj6ASAdh9xWee7V8Y5bE3qUT4Z6Q4ArsNzF9YYrzD6x3wKEJ8rrc9Ymw1qFpzJcd66nDSut8dCzvmorQhznJwUe",
  "key28": "5yDBdChTVrMA9wKnKD2jwgWNVEKBacJXP8eMGye6LwAqbFDSDki8WeXkECJyzDzVFdkJESNkb4WLfJigY3rCpxCB",
  "key29": "gLJcztoczw7ySTAGMFJ1Utcn3WjihSq7msJXREPZv2MHegPJmkjf7R8Trfyi7aAvASiV9oYhTsQQwdCns5AP54u",
  "key30": "5ke5rwJ2W8Mh7yqFB4iB2kkAwa6wS9WdXWpXSYdTLrMmkDfJDJekUxHFrYZ4qajDs5ZSKZn3e3C9WtfaCdCmsNmR",
  "key31": "4pfwWV3DFCxmBqyRZ6Gv38EHR6c7CWg3yEBYEebJaQijSWQZc9Rq15N7gXErdZf9qZYi18D2kL9uNZedWDZnh4C7",
  "key32": "2yr23VW3nBrmN92aq1NP2skVH1LKGshBZeaPvbcVCojqRBRuoaYUFzuHuUsfejRGPCAKfbSi8LkWTkpRtwgDvar1",
  "key33": "48iEx63nxPUi1YMnubwThSSAJfT6nruTB7NVD2yqDAp25G275BooFgzWEoLsPki2cg97MxBANu1wD2Bsbcs2of5",
  "key34": "4QPg3WeExSUxeLvhed5wgSmFRoLfFZTtXZeP9nshMgrRoJTwXoT18aD9z3dAa2u5uZctVR76RPPPoKvsgYNSZqZB",
  "key35": "64YrYwYNwofynA2v7ZnhTqpMRqETwFR39SVD2xjaxbHwsEkEeXy3ohZppPhvGL9WAL3wfNbA74Bu1CrABroSFywH",
  "key36": "KBZDqwZn4togwWX6XxJdm5QDB3o4RzXCcgPKjKACTnzqZakkSf6Ee1DxppZe3oDuJfJ95ArtcuY1MURxNTrG2Gw",
  "key37": "4sVDKMsiNYGsAYod7E7FVhDJ7uTvnWJ6GFyQuWyLthtpZP1Yn7AKUXnhnAhowhyVV4pGFjH9xYLTP3kndzqupe52",
  "key38": "3jq67zuqvzQSzgkDau4nprQCBY3RwxPm2Hv9iorZ9qxTRoCr1ExejLawjXbUdmLfFk4rtWNxvTuqdupFGqiYt3iM",
  "key39": "5Y7HiXNS6PiMNd8fN8tSfwiMuu88oZZKU6iAqNHAKw1GPsLvUMZapk2pY2NfW7gEy6QPFV6J1kcccgqaUGJAHQMy",
  "key40": "5GqJaParAAwcb3TArJm8MQBQ3xM2aqY6mow2a6Qq8YPjNz3BqyQFeKnr5vGXGC2yUDwnjjXrqPfK84PmkECozUNw",
  "key41": "5422nnMg4Macc2zkTJRXHN9SN3ZmgtFwsKNHBgrgoHbZHNq4vSxbxKKagZ1GvZWoGx2Nn3UpMCbDbPmrUT6ZM8xm",
  "key42": "2pBfLJxRDqx3ZeanLL4yQKD6eCEodEg6YMaUVHWddHvYBPcS4Zf42Qpytp2dNQHSSZEHxwrdqaC3kJkqFiTUBk1h",
  "key43": "b7F3Ta48dLhiib3YzLzHw7c6kqRNTw2Gmj3QGkdQhtnrkmCFdKST5JFbb6pyJe7fNCfwRVBESg1gs36p2QNHkXv",
  "key44": "4GJ3mCWYiJPCZVp5AaTguAiLhHNrcqnbWe4cNgFndg4Z3Z5BUtaoztRvRtEVa5AJ89QuCS3oqsT6RuEhWbd1P5NT",
  "key45": "5j8ZjnvSJFaVF8jCfaRY9TSEiGvCBg2wuBvcFQj2B4oNuqMmoNopxhQciiZR9wswnygKh5Yh5xnGsZxemF2d9QST",
  "key46": "5zmCSNhJxJCgHLyBhN247A3ggFB8U4EwwQ6xanU4ifc141bpEE6cKj2yXgigDjdNArXgWPrp9xRwS9cW3WshWbWi",
  "key47": "2D8LnQZ4eSeZsy45rvDMhMqYLkfgtq6MbZqPE12AP3ocJaBz25Rth9evkuKQYYqxTVmmnmqJ937sgLk5Ve61dCV6",
  "key48": "wkecxSw7rXj2sKPPq2zMR85wSF5cuxkV1oo5X7uuh83Uq938xVPVrCF6TfkYLPFy58EDRR4XrtsLepbfgfud691"
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
