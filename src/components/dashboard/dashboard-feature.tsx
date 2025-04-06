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
    "3utjRFxo36C6GgHeunAjVECvwoR6H6itDmwCQN7NU68vk4FTDJP8ZRxG5qz6TnBfEedVuGq8XEPJoZ8ugQ7aXxFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuNMjgUsJ8B6z9c6hKVAx8h1kFonmNbfzXggLnLb4rJq8RmPMRNN8VLRX5Ri69fZ1MXuBxji9AVtpaymfZSNaB1",
  "key1": "593t3KzMZ24DwFx6DviL8DvQzMWJfGBuDnUVX26V6KCjkLV4m1rir7pkgMY6o46TCrjWYyL5RFwZpNAD2wHZXZm7",
  "key2": "3DrTLhmV9bXHL45mBDTTDeaom9bCn5gZXqa3EJkRhhR7LY5emL8DEcyFAEb864ytuNctcofBsfZy4RUan1E2tY3f",
  "key3": "2w8KAhdm8DwKbi1hxEo8rot9KtRNtaJ7aRgbrTC83KSTpcBwoP4pLsUNq6Sz9f9m1T3kxmjaPuMjsyqhhndYAeLR",
  "key4": "5MK4fkExaeN3xk3Wk1k8y3WTaxYLFLAginCWzhLjJwzkhhcWhoWNhUnDBZQan8FymLhni8tbVAG1djayVZgr7WX1",
  "key5": "3mtDJktHYSUJbkRHVbLe4GFu5LokxdnTVr6bw2g1pQy9xWVH6dX62twA17mZFL9JDjXh3FR8RnSNmgCwEGCf4hF2",
  "key6": "5cgquHqH7fa7JyUYiUg1HdRqhF6u2w1AdZr7kT5ix34Xs1A948UhEZ31212moBL9B1fVqpaKT1DKVenTqzy76QVF",
  "key7": "3TdMsN3X28vwfyCq2XfKG7z6iZS7DKcZdM2Afg1a7kwCLVRD5jC3jEK7x2vJ5N8UgjZjv8oTX4LTwSXk1vyAZa6b",
  "key8": "VXnJZ58uDidmiHReNEegCzHZnPbFuxmtBDqi8WVFKgXD5VPxFtvZBbCXvZ3auNErQiJv8att4xkwFKEcxK9TwDG",
  "key9": "2W5PzpF6n9Q8XuDkaYKQ9buQvErWTT3upm9m7DSrF1zyKFKXWFGc4jcwQsoPGxqU4T14FkqzbWxs3Dpk8uoLWejK",
  "key10": "41mqrQtJyjAEA5qu8DNJX4F67w1gKSfDZPWQRSdJEZuaSY2DKY5qv5cjPQAd2rWGUQ2mF4gipHEgBS1XLmtWMVVF",
  "key11": "Ppbt4iyE824vrZKAvtkD7YB2iKkexxkh48UHM7D5TTKMkeDPcjg5whYy4ihRmjBZAwcV6daXQQCte88wzp8dGA3",
  "key12": "3vn8C3VtXbf178sfxPz5oc4KD3pn94f8YxLEuyucnBB61YVRmwNXXW91G2iTaum6EATxEM3QJgM3UxHhduL5rjbX",
  "key13": "626ajgZXX6V3KpYijiVT8nH63LmNZPMYQb44s5ZYXTLjN1EbasmYg1D2A7NTYmHBtfFAZTubSwF1FX5o1u3mmUmn",
  "key14": "2iwa6hwQxuSe2a9imqJv9WH3YXigjigPz5HYCcwT6xw2gqJws9beNUL6LHGmKRkJ5rWRuD1jGYdnvBNepnYonHaw",
  "key15": "3ciukPSXn1ZZMjjNm7R4mxKK93xpSfvp21pLCr58dAQjsaCuowBUjZpjrPyws4kPAAAkHwrc1zdzYca1HpAHBtpG",
  "key16": "5csHfgnpD9cnSpFFcFtMbxznKHccu8aawQFUvG5PmTPAqS4B5mCPMa8fCZbxzNTJ9X6vo8QUfWEsaFCfqdAFaDKu",
  "key17": "23B88tLH8VkPpHdqKXqKj5rtSM9QwnCyySmJZF4LE8Kc3n2rkFnQij3B2pBQNDsujHVH5cFYwxQ9asXbxBM4bnJL",
  "key18": "3vk2iGXKvu9hcfStUPu4c3NSkDoehmwfHCkbjr4qadSvMU5YoTpc8sEGjqGcK418c9qLQPT6j8yKD3LX7SbNivYK",
  "key19": "51eweKMgR7CpiGGgmGoKGddSUZ8JdmnPsknkAysMqPFGscexzPa2zoBWNQbdhQ32ANc46bQ33kznERZz2e61VLHz",
  "key20": "Ne69wBYVaVLTbThxdrZCZhH7uvGBGyHJk9zW6nWzGSa9d5kpQNUcdbCLTVZK8q9C3XabKwKS2WudM1e9gcd3ZyJ",
  "key21": "3aC4NFsBJgxCXJRXViMsPxgA1jcDHx7QXJVLwjoi2sCdQaG3vSbDfdzNoWEBsVKozPN4T1pBiQtUvhNUyPU9Feuy",
  "key22": "M1zCnqqUDnKxQehPfE9BzuEeDpKxCLSiduoByjkAQMvDXxua8gnBb2jhKHwNr4ZD2tcExbxNwyvjLvLLpa4bL5B",
  "key23": "4Ag2Z6SnTRrzCJyUjGFCw81qoed3uALGFF2ursVpmea7B7w55MfzyBrb7npXtymCRaWLoM16qmTExbk33djeGFVC",
  "key24": "5AS2AVRVh474QgjVRM36LXziawkvXZns6i9WfaZSnNMjhmkoPWTLb8sqdugsR4MqCj8Q5PK16xtGZ4oFSqNrtu2w",
  "key25": "djgPQftvkfR68BhZTZW1qs4f4ax6nJSxH9ay66fVwd3ca4f5kwB831EN8rg3f7YvJYuB2p8KRc4ERo2DZY1X855",
  "key26": "5BbncA1gxxpdaqhShPFzv9M2rBNcNUVcq8YHbVeLTm1xMqfmjvyRMdeFxUwuwDCpBC1Sds5hpspChDNAWwbxKntS",
  "key27": "5uR7TftxtFaB3UGiiqRr4gdXnx4dEWjhXfk6NRkrmLJdEtePB7vKnkB17szm9Tu3sPQdVrZKj2meN7iqxJmRF9Cz",
  "key28": "284hJb3hWCvo8gV12SKxeQ4N266YVLh1NmuE7DiuZbgLVPCcS9DRjvjipmdGD6iUDfJCCRiwjS5Y3H7BGDAGzNww",
  "key29": "2K3Hi4jjPJ2kqoXAjZQ7315R7xGbTpMCKVBMBUPEDvSn3A5E5Wo14vqoStnnvtxZYm8V6L8ubg12JqoFmjSpXCz6",
  "key30": "5RZz1HSCzfzfsEsksD4PQDUPXsKkpdz4Ug4fpaVWxS7wP9cyZo4hFfrpBRRW5WxkPGVb8XVQi6oasoW9Eq8Vnyyf",
  "key31": "3yCMPenrwCSkQBZD3PdpUo71KdEyv8ecQqvrzwiTfbtHmbcxRAYHFhJB9Zzd6GLKP1KYWCzGtjJaK4z3kRa7aNJH",
  "key32": "65EPfwSQABrwVakpMiottSYJWaiVwcEokkTgPu1dmZZ3btvYd2BJZf3tGL79JxuCcNtvVGNDxcriuBwSqbFw7W6W",
  "key33": "39kGmUVv9rtFjBX6thFDg8h4wydZDBHg22VHpJu1XkLHR7zCSkF9UkJqKMdNK9jadvzcTNbZYQY39zJ5AY2A9bEE",
  "key34": "36xc7MfvRYrZNeXyVpQM1C3NaRG23jL28cAp9Zcaz9cfBsWeL5EwoB8G49pvjRVC6xj319hg1K75EU1Kv5rBryfD",
  "key35": "3Jg5MmDu96Bducgu5rK9xr9iDrmFoWDEJ88ogyxpJ5p85ZqKhN6Rm3xUwnpma8JWFwpMh9zro8oJuLA1gvVMiCKQ",
  "key36": "58R7shku3chTyHhw9kiMfes1AH4wuN7SxCzJeKW4MW8fGEnDs3C3f5f5SMHBRFU6PwKGezGdVR1tV5ES3ZKYYL2f",
  "key37": "VHNcDoma4NwVyaffEPd54THXT2XQPP3sTn23Lw5QheSyD43TCaiw7wW2vbNFu5vU6wKgH7nFDjpC3TWPN47TgK8",
  "key38": "26wo8cGHNUFnNQ3giGiVoK7JjzWwgMa7sUkxF2SkyeeYYdB6TuZUraCwiZhrBMvMs2JAv4rbtH9wjhxQxVi7VDEo",
  "key39": "3NGDBtPFi8ZcFdhrhCcL6DtbEXnvz1To9dCz7xBfVWoFN49kw5Y2epNGR5UQFwMQSvo3YGXdhqzxkZZx49pBnGtn",
  "key40": "3eg7pTm1BDTxziZeSuxLmA9NTPtN2vo5v5BtAkegMBYDdvhzGhzdVuv1ev2ucGh8NNGAEAizK9VpAJswRwvfmYmy",
  "key41": "Ugdk4WzvfSxRyGWUPXyKJCVJsL2bCLKnn3YfpYTuRUpTvJHFG4Hq6Rb3dATZmAPuQv4NZr4wmF4ux9gMMfThQEP",
  "key42": "3upFYNfAV4q4h9apM7XR132ByC9F8snrsAG2qjpNu6wymL2fayZdNYMviiLi2nq3BmepRGh1RgZm871UnM2RXm7P",
  "key43": "3D7KuNeaxrye6aBNepxTQ8QvkK9Se3zYu8cgCBGG752M2ZsuqEPagaKevLAyy1Mo9NcfBubT54kWnEBXsdt69ETj",
  "key44": "fsnzPoMcWKAm5PeNmnnjEEhpuF1AUYbb6MRKthMyWTh3xSbV8LfVvgiwDTKAPYAAiNLGUEyFK53rnQis5Vr21kx",
  "key45": "5jYEHPE2NkZgXebEXt7Aonp3fNu4uUeAgHN4hApdKiRuh69ZRjWUFSythNSMCqA3ozUo2twhfnpeCNBniLwRysxc",
  "key46": "3MhyW8YR3Zt8A45ATehmakPrzMt2q4pC18F7XkVwjJgKoh7keMBP82vUVvGmAHjVDAji9VpMCSciE8T5facSedCx",
  "key47": "2NBXmHhkZCfMpCzSxcG7oAdgTTQvLnzfXCTaVtXQvCowWx2VC4MTG1YV5jjq6z1PSAytCweBCwFgxvRvzezsfp2U"
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
