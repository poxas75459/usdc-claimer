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
    "67iMXwL51viKKgtDVx1Dz1JQRqzAuRMsGhtri7iL8YRLVExfiLw2C7L5ZMhWRfCyJ8D85TY4U8QPhoD5YgRa9SuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooLb2szSFACECzPoQMfS7YKrniRt8NxHqwUuvotPaKpFe5sVv9LFTtzN1CeokhC5vAeUjtW1HwAoX9pp9iLH9xq",
  "key1": "3HCstNBjrU52fZHhwmg3eq3Bnhc31zwnnEXYXrytLcewPUf8M7fFFedLDJHovi8TDqMvUXu2jmcGDoe7nS2kT1Yk",
  "key2": "38WKfDYBZGgZA18ECKuHN3PqggsFWsxMn7RdD8QqM83aUyE6XbBfYMjiKwZ26YJ3nk6NjK96pZjLukRzApcvPnJx",
  "key3": "3WH3i2U4VDq8dTzzCtE2YoFUuuzmeBwoKwvWNN1YiS6i6i2LQuCHrSr7NK4YaAE7M7msoDzoPnn1PrSpFrmsH6i3",
  "key4": "46SpAkRNQnL5aKDwtzuHJMX5f4q5eZ8uR9ZSKmPtxyTLTJDznYi5vwknHXd8DLcyxqxki8MGx1cvaLsT7DxsMqwn",
  "key5": "GU5sgfaQJK7wkrzCbj3Xaet3BmrcAT5kkQpXY1QNQoCvy538xXvwXG6WAEby3vgoW5DtPHjEKsF4e4eVeeBfk23",
  "key6": "4EbFNzCxsHqGXkZiPsUKVPXymHBs1pf3XUZ7hENh8jFHWWgnFT6qGMVaQ8cSfkxn15DcTh53Cp8VFSp7oGfNJmcq",
  "key7": "brYq6ddRvhthkkkdCbsNFBiMBvSEoCpoaJiM1H3QBCPG6ccNebRKE6RhQRsbud5fpnEzHbHVFigzBFMhsVJTTco",
  "key8": "2Dp6qDxdn7hj2DG1GGWC1s3Ekif5y7KBr23oFS3o8MUyVKgtJb75XeQstcya1ytMf2TbjuHka7xmyT33R3dZmECo",
  "key9": "51sNm3i5bzBLfFLoFFvshk4bLVmHZZnFuLvVQQo4U8NMHk3AiwVamG94Y6PxmtBUjF2PyFohJ79jeotGQorom9gR",
  "key10": "Sjt4XA4VWisFba9tsM9mfTy2gmaHkfSEWXLvbUnoGXZmsik9J3vD23XsCRfVDtDXQPzzKjVtbJCyT2tQqgH1QfY",
  "key11": "5bmPn1FwLGtCRWERmBeHgz76uzWcDTAc2uWoD971YV22KqJ1FRE8beNPsspt9A4akm3tbChTPRgeGoBSpYD6rp12",
  "key12": "6ayAuuky5RRZhXDfFdWuvviCYuKWWULaQ3D1RDDfXq8Arq6WNymsEjvP9ESNQ6Vpait6Uh8aHdniKfZFodFjWJG",
  "key13": "4NsuuvBXoqCjzdd71QCJBve3jNSSon5ShA8rgu9JWQ8wRQvH8yPTbT3G7WhbNYsGRS7boX3x4sGAXSPRtaBfwqF3",
  "key14": "3DetcGU25nNd7fEfxcZjrMfSuQLi55pvTnVi2aARq643HgyiTyJkYm5iPW4hHDif3G7jyBfgKnuyknNAS7u74vbF",
  "key15": "SbL4zDPTFRQVt5Q7PS4eaoSZM6bW5AixzvTes8X3mXPfxwgLEii472NUV78CTGpRxFeN6oqa4rEoXUieq3HxRKm",
  "key16": "3o6DEahhjBDjfHVKV5kAdD4qZyp7gFbYNYeY4BXNxWDWYMph9wpFow2qoNhpAiZ4smXZadPgkC9rFFSpuVg3k31n",
  "key17": "5nLZ6uRRzMsauPavYjQLasSeMfBMqwLbhAEWVQAnut23mg8uJXcdSGgwmxoSzNe8xUC6XVoF9TSDv7HyNKENEaor",
  "key18": "MPsL1i54bRiuiTLSaiFiNSPkpFDfngiTjZ6nNL7iKGWMNCLf97oEYmgKnigGQgJC7fhwiW5MjSDpNbWoVVcNaV5",
  "key19": "5SqdRYFCG2rj13ixLqr6CPfGfggejaCEUsASj385iFYF5JfytgqPZF4cEeSH7W3a9P7iKm7gvHicfrX3jyKFAK76",
  "key20": "5ZQB9yUKTURpWovtwnh8hRSqTyKKgxrGxLAUN22zRtYZqk3cNrmSYVsUrKj9dG6agyzVnNfmDneWhN9Wtnw1kvz8",
  "key21": "4e2abgHLojbS5GfCPRtpvuhjtWzPNg14GPJBmRQdycGAKcfZENQxy6w2LbAY6t87PorrypE7zDXLcth3eqwfDyXV",
  "key22": "3NbRMyetETzJhbAViDW2zmMiSKThn6okvpwBBPsba4TBkK9khiCAgRRiidotbEVGgbHJB9f4AYqzfHZxxanaXBdv",
  "key23": "4mjPJ2c9bDAyy7xk5pMboqreU3QmXgqSx2RzgX5GK4uHzeqpg9VSKjH3PG4uwDV4MAz31TUBmfpAf9A2ETeBEGEo",
  "key24": "3Q36ptUZXEmH7s9E4a2oXu6Gdqm919MtCiUz9Xi91QfmK7MEKyhpqdmTqNwX1wM4UGUX1MJ7YhnbfNA6gDgkUtMJ",
  "key25": "4Y5KW9McnFPVCRsVMLmKCd4FH14P7LhnBGEKPG6UZUMDwmV7wiZcowEYGkJF7EZTMG6PtEZhUuf9k77SDk7y4UDx",
  "key26": "4zNosvSRLiXtxE6Z1KbjeNpTSVgzVbnbaWNuYkQwFcXxSnAdjk18PNWycSt9jwhU8oEBg8c6Umvf956sVWb2Qsrz",
  "key27": "2B9powJwCq7XhXuZjR8yqoQ9MrHABE4q2L3A5EwreNn9QqGR7PRxSA9AitZ71QwKwWKVKqgtPtAQjQhBLw1DDazK",
  "key28": "2EThMStcrX4NbU7Afx7SDecRShjCuVYsM26PQAVrj5ETH26CnmK1mxngntArQmswrzA8awpRrhkBcM4tLzjQStqx",
  "key29": "Nz5JVGwh91R8pkjNb2bSWryMzKFw7iHZ95XdabF7EPtvUbPjBWxvzLxB9t3gQaEon91Pzz9v5yJ66Dn1ePWfGzX",
  "key30": "5e8bu6JmP4HzgTCrxTVdmBuEHzrx1mn72CYtZctgfYcqoDXhWxAQdTCUPk7PGjrgVpW8cz7zaFSAcdiPjaa1pKmW",
  "key31": "2kQvqX8JU5fUE3cyF5Jk4PZyHNeZYR4TmJ2Qx3J6h4FAW8M4jhA7JEtNbbmfcTevi3G8Jqdvb8oCvAN7Df9zM72t",
  "key32": "3R2Ex5VX8U4skBTMHfnRr5SThQQZWnUP5ojgaAdQnTwNrWQTXwLWZTfuQVjpHxTKpkM2vhSusLUnvnuZQwptRksB",
  "key33": "LyFY93zXGfEMqVSm9oiB6ks8aNPhWDsvvNrr51wVudR9FLykaDxeWCNpnNdjn5BVH7z863Ci91nSKBMHxa5wSCX",
  "key34": "5tD9k7UAd2osY9eDEwqD1Rztb6S8nEKRRQSJGGjkf8nYTYbAf8Wf8F7ZGFojGyC37VJ4LXUVph9SkBa4fuFxTwFe",
  "key35": "3fwkhJKJmjiYK5HtMsRo5BWgeoJA2oycLKZjTRPUbF9qj8KK1jjrjekbeZtVS6zEK5VYMSRfQFHVXcfRfHegNSNE",
  "key36": "jGn4LGZLF2AoURXD9xnQJ8G71F9zZzdMjDQF584n4ESwXYne1ff51cxu6qbGzGwv4iveG1ge4CuWKrYx5J3vicf",
  "key37": "3FZqpaysumEtrUyQi7hxJSMrSwhcRv7goVevLPgAACu7acNyUUijJUgZTMEiuxwDDs7hPHefbQRiWBRgpGtpiF3H",
  "key38": "5jApt7VcFHGc3srEsPGW9aMmrFboM3vCpSToTGPLNZeRAkbwfxQHuDhzaCt5ZEspSLJbgwv9pofep2eGSM2GnMHC",
  "key39": "2ZQsdkWJzggzNWd8CAavoHE7tqAgxuETcFXnDwe2sge3tUoErw87QBnMSwJLs3f25ZCkkYw57xM93LRpHVxy7Xzs",
  "key40": "4UEx8VRRdzyngwAnUqJUPWhvwS7WJBjWf56ttpj81mKdvBPiUnqiLs2iqHqJmiw9hzGPNjcZ5EmxoDk52JCRifhp",
  "key41": "31bHNpnJyJSUEWPonrF9sD3eEjmNQSNSgUUUgL7huLi1UGFWSLaHXttY6LSeofQUxUsxFkNswyhGYhXoZGZQrP8L",
  "key42": "GXD2i6nREnuZKKuBZpuvKxenh1tKgcnJF1t74ab69bPUWtWWKhAUWB5yD93rW2LWEPjrrH8d1VGhhpdUnS2Po4N",
  "key43": "3cuf423mnM66yaMKz5HKskTFrxnqkQzPTWRCgMDqTCBiMpN5YTcZFiKwD5afEBEyTXB23AGAG6Jf4EAqM35bFPx7",
  "key44": "2KCc9k79dZARcg3xtaFyxRPuWiqzjM8QGNQhoZnKtGAJ6QpegJy1ZbqP63o6tvuZFwQ19v7Ccyh5jcby1YnaepMm",
  "key45": "3NWjHJso1zJbzuSRVLwsrUFNGVeK9jfVnyPAZityftGvq3Ek3QqqZhNJoXSy6ARqbxXKxfmL8eAm8yYgvHuQWrhp",
  "key46": "5uAzXbyETHcQ6m2yYhbbFZKFCgoR3DWMYPL7w1zLJcmznVChw2ncwvAk8BbbSYUj8KHLo3nEcLAuE2f86dxsM5UK",
  "key47": "3vdM1LUB87H18uzTLfKmo71GF1u3Hdks67Hq7GSRH1ifMwtC35WLKmW5zawrCGWbBVxBGEqTu2uHDEaoQMjwpS2R"
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
