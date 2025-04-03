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
    "dSb3Y337afamnCQtqjHfUe6sanU257ivyCtcUh21yxzNrm2DrivQrDboooBSqJeVjSTwFxnsFRzZ91uwF2NSbrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQwHaGpxtakAvD2Bfsvk76YwPH6wAUJSVzHr4wCRGuWa6syh2c9ej2jAwYy7qCAV1QuQ59P5DzTU4x5JJMomdPW",
  "key1": "61kb2u5g5RCHPrMqhuCcmqXqcAvJA1EUZ2opmKfsxVchdsXUpx8isDoTEP9zdDLcLfskLwi1fWgurDEAoXUVXGA1",
  "key2": "5tREqnLiWmPka5zd2rp76P9sozXr45MbbfEBXAzDk2CqicQnAn38mrTovKmCfj6ewJjqbQ7Q3hGovNMjx4anhafa",
  "key3": "35YfKJvNutEubqXsn7A17pf1kgkmParEn4E9uBJrMwQDX2uRqRCvGkGMAZYnoG2wrs9jNKzqYSVAZvjWuh4tFBJX",
  "key4": "VRfSNp1tVQaghY4JRGMudv1KWDDhirZyzXp5AFQrDL62iMoXB4n3KRkBkJTsh43EnobqnthjEovrWN1vVSrMPXe",
  "key5": "vJEGrYNNrGrcxox3j8wUy4QfhPji3hUub2GAwjyU8ybJ4AkS2mA7KeqbWTEb9SirMHFuzWLMF4TguWd6nvRQCcJ",
  "key6": "5wcbxCWjFqdiZuBdBy1XJ8yjuRyGXw3R3WVNL57xKRhJZ7FMDrFVdEHJsNLyZ23A8H5XxFn8KVpAYqx6mJFTUiyc",
  "key7": "5VgjyY4MDWtdBAAG3BHUZ4XPFQNnhFpB9ymw1JVFm6pabKVmyMcNam4PQszV4sgbV9bPdkUwUaCysoDGFiZGHQaK",
  "key8": "28mYejFwKGDU1kuh2Ejbsgdr12dFMUSzQcA4FD2HzXtv32hvSwQnyZjEBFz5ZyTPqpTcz7qnEfP3qgWcqQ8TCJPR",
  "key9": "5QNtWnzzhgLwgnRiKwokygMvxFQzHWrgBQDoAX9cARuwXi5kxCfe4tnzb5Zjy2FmdeZ1CDcPAp9haWAM1qURi5VG",
  "key10": "5EgMqLf1nU41HJUcA1ch8dz8GhNsV3VaHGvDTbyLCwUuiTdtkCmqQJ8XKs36Ydqvjg4z2Y6WgWGw1HFnh1Z9foLj",
  "key11": "4R9Ztba5x48eqHYZwtPudQvs33eteY9rJXB3f7BLfYE9Xr9CLCdo5gofjZh1ZMQ5qz7itGe2e3BMa77FnggLVnn3",
  "key12": "2vf2MSrAPHbWpydtR4H2846B2LTwYrFTrkgydAhKwxRV7MQJhFEQvHc7h2ZW3pWfmTeSDuiyiinxn9G4a9dimk8R",
  "key13": "2ajM9FQ57yee5RJ9RgbFdPUsPH7bJD4jqMLjs1xq6VNKtmu5BF8jjNvD1APhjNM1y5LKNPvA2tzSkmEKwMXjuYJZ",
  "key14": "5ubDxVFi1Xx2sfRvFfodD4myURpAj4jdLSRpHne7b9ZMvQbVSaZ9ycTVD9PmjHqKKDE7k6i23Hnq6JXSq3w47JMa",
  "key15": "41Rn4kq8BTf9iAPe4bC8xd8DAkUhKjE84SQnfC8RMkkLmxMiK2qUm8R9i3GMhqHXNpLTTFwARLkyRwEzXgeeiYx5",
  "key16": "5w8vEspjC8oQWaKnoeqgaokXRyUrfqR87BDwicXLy6hwTmukFQdKW4SfiftJAVM32ezSPP3T8iEf21kpw58nU7TC",
  "key17": "2T27rYQGNvyHWMTouqtLK7qiY8ZXMiBotz6uT5YHNaErXLfUc74cv9p5iuTGytzwDqRBdhggfREDddihcfjtcps9",
  "key18": "29V5TdQF64sBXETi8xW2Zd1GPxnvbSY45fCbin6q536Q6bemrDaNLQ5YwrHja7UAwMDYYrDw8u3MeJYZqKE6PAXE",
  "key19": "25yMExLcfgnCsS5mZr2MKyx8V2QiZkMPuFeHcetaKuA7CA73DcxmcMrdsgLeZsKxT5McPyMQ5G6wdrF5TmiQFVWK",
  "key20": "4ps61o3RE25AKMaSDL3vyVURNMVLULVF2CeB7Ezjp5w3J1BkHWM5Yv3AdCTEKxHi28mcFXnE3JYhHbpMTC6VBLFY",
  "key21": "4GbefK3sBqF9iCcTDKig1adKRzBpakFicJsNVz9JAEv68g32e6sWu9YwXnXbc3PaDLmkWXqRGP5ACam1zFZQEuE6",
  "key22": "4o9ykaVzj9ApQWBqYbKmoocrkLn9NguNcSjZFLkbAu5j1Hum9HfUbsiCs8skQHD7FCYYqQT26vXgVga8BbzgjUDm",
  "key23": "mK9VXFGYR3DQagPMyvDLS2KmQXtg1W6dFSBhEDim9dFpvgM7jkyrkbA7C2zEXDSuZmbjvbR36JmE1JAykD7qUTT",
  "key24": "3YwH9FwVDD4j6TiZVrRAtEGzdnHxTeWbAejubwUDY1DKCX1RVq3sRBJxCrAQZpeYAt2P99B56K17Y22PWQoLxqqV",
  "key25": "MiUeQHcCxz32ywAHkBUsmKrSMLf1XD5bMp5Hf7WhUEEkGpvC34YNSyLCTx6asCFbKrzoidFtvTdwLVKpH49dzbc",
  "key26": "45w9hZMWHwSL8KRQz3tHrsTiYpXi5x4B2wANN5GH18ErTJ4iCeewEjLwN2mRasXR1XCgaomZdBN7usTgAEUwrZzw",
  "key27": "NQQWpfLNTsCGPbnZPanXRUA8eRzJrqt9YqvHbowRk97stJmqEgVshfg4Rvip3MxHUj6ugJyeAWYy56RD6gH8ZLN",
  "key28": "QzkyxCUebtRQZx4XAdvXPAZRUUuUXoUbEfABdxpk7qR7oPU2E3uhihahfJa9VWe7S15r2Tmia1zkRHGE6Mw8gs7",
  "key29": "5ktwbXnafE5seCbxS6jAvwgyxGdGEteCW4nyJbGUwDzfFUhvq9BwAVpYSKmaRmXV2dz69A4d3fRJC6BLmQ6Nib9R",
  "key30": "whyFJw6VpJuTonxp38NUDbtBSRJM6vZfqyhfUwaUhZW2VnyA6TiLhhTqaSiLqyUC3KFxyxXRBPGqXrJSGshw2sJ",
  "key31": "2NssRFrkN6qKEoz9aXFDk8dqWSyahP2GGoyZp87vAjj6HjCk3xReHT1bUqE6mzofawHSZ3NWC5b6TwhhHAQrCYMa",
  "key32": "aV1pthvCMQd2XuNgV2Hj1PTi67v1gAnq3m5eMFevMtrv7LkfGQfPQEXLXsNFhaW5VkhYGgPCwoe1HNzuakvtJvN",
  "key33": "5z7rrCk1DVwLD7QpNeESngxF79gdExfuR1r9rsEJhPpYj631L9VQWNjrWfWpazErUvZ66i63TUF54dP89pcsfjAN",
  "key34": "629wCco15kE4VKHmS3yS1bHqEfmTErQ5E7N7CmCyPcUYYDymxbJVJP25fGQDkPDsm3zSeaLBLdVLBn7iLNjt46vQ",
  "key35": "2jrmbnaqHJRpZ4PGn7WGFepEDZmMj1o9PntcbKhALdK1modETFx8GAWTiukV9HXkA1gsNthW9BZqr9CmQJXryd7M",
  "key36": "3arTqPp4aGr5EM1zYY2m37AmpgpUTeZuZX8zJFYnQpqCnpWfe6kxhDxT2u1UZGotY3rfaWHmVzSciNRf1bYUfDFt",
  "key37": "3JoBVKEnvNx1WEB3YEX9kbitoVPbTNmHfRmAsdEbcgLgoD4koTPcxqShzFseFP5eJuz3rk53t85KBP7YBorKH2Xk",
  "key38": "3HaFqskdoLCSc7FnBSZchdBsFGPRbP3cdtRPNpkfF6ZnT4jW84uHAJtCUwQWfZs3MzU1FimSgj4FzcMqyGVCkupL",
  "key39": "ZcLMwy72CUjt22Knuut31Pwbz7JmhN14iMjGNYAHXYePLdv6Cxro78ry7eNiMqDrMpoan7PwGBpXdX6rjPdoDBw",
  "key40": "BwN2boYoiMmoVXWjxSCbZqX9cEFxAMoNySRGGmPBB5NxP3GYMxJQ5VFGL1veTb2LWFQQxh3eAJY1sJDzeGCXQTZ",
  "key41": "3UqsCozU7d1usve5fwdNVctNKAZ5EaN9HNVdvLkvmDeAMgKttA8mndbY5VYEjLGS7ngZZxfcWGzcdwzVY7D6Fpko",
  "key42": "3CiKPpfKVdkJquFAynUVqKgTNMURPXHkzAxmv4HrC2xmg6bStaQs1aNuii439Uf5shLYZfRwFACQY695JvGJqJyo",
  "key43": "2c2n8xU5DyGeRr6oAaugLKtVEX7eyQYNYaRKMY38vpkSCjor8843JhSsGNHtKWNS6cVAKAy8iHvwpSWZM77ihRUv",
  "key44": "2WdbzM2pBFCRJWsb19MtjkM7y8QzXS66sKUEdSk3hN8FMcoFHHedhWgou1iH3EqyaWbTz5aWc2xLcWAZRAJACz1P",
  "key45": "3HXbd68ZcramW22EG3zXJwBKPS1qbeP5svwU7WLESQGgr7frFGFWqMatTubHC5oHRQiwQBEbSiXKCcE3ueBGQkj2",
  "key46": "Y2RcupxmQtqnWRWuf8yGQb8hpcwVH9vPkNCGDPAf6c96cQyopY9i5g62H2ML9TRQbTHKwJMoKvtC4yVsgH6MHjT",
  "key47": "nhvhjXwVoQmbotb9Tvui2XLfRXaMR2HgPUMUQdTg1tamfjwucjeuLrwDcRKpjg3vwj1UAa6sieT2Hjvi4Y6cGNr"
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
