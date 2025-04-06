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
    "62CM3y9GsNTKNSFtkBTaFutHjoHNkjeMVmb8itxeoae2F9zwnFFpqadCNmuJUYnWAmaAY9ZFjAo6atujzrC4VhAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJGUxjJ2hpCoxSfkgHEyuNfmLCvr3kBtVa56tj5Mgxwoz32Y73MqqUwGNGo5jExrArMnZRGf63YBnTaLomWdY1v",
  "key1": "4KsjxVjVA1vAGuSYpgVHnvTg5vymyHC4ByZJ7rk6qAz6CuQ1oJKYdZkjY2v7kB5trhNpwjEvkp7qkvCa4VW1HtQk",
  "key2": "5mPa7a6KAd57f3nE6QThBG5uCbNHoSvLJFSY4wakrDnkEPecUFdExjwQnZpa64H6Y4Lbi7hsUkgjtHB8v8MoSVFR",
  "key3": "1txTHh4x1ycBWvRfTeFy4YwaVZBf4VhK6AGpgd7LafQYBx7oznMGYXPsoTGb3yNh1bqg2U2ECRJuBmx6XBAqKzb",
  "key4": "2ofbFNjvJKu7y8UfDWacxU3j3JAMmTTvqYbumD8vXZ5oyJ7E6jyCgfw26E4RvTcVEVkZ2UuaeJwKJikFNemhxP6w",
  "key5": "5my1z1m8gPPknGyXybRh6x4gzWZrvtA6hTXMMVZVkvQ15Pp63Z6PfEGYjMv69eQ1XYSwjK2eXWPknakYrPMJg1kj",
  "key6": "nfQR4c3fwmewsPqegfr1ma2vfASoEfBqfJ5MyifBrEtTqCbUpqLDSaGdFpjhatQbc6HjGfJ4ja3XJqgB9nXcgvg",
  "key7": "22fkUvd9982HaTSqANDANV7wUeFoGuPzEgf58xChGTbRmoKhxgZopxqoWdoama8acNCU8sM6ykei5SBu5wf2LQYZ",
  "key8": "49c5Q7TtVSPZv2Np7PbHW1o5LEu8WcsC9ezDSFyHtwgR4MZ47wcW9cPxcVCqWUyVaQMeptY9ioDtRuBJ1DSSDgTK",
  "key9": "2XiBYw7TunFGzKybhoycs2wAd6rvQQdFvZipLBTvr43ARSS7FWJsCrjEDr7Gj3V1GC6MoRk4GmaFSDcotbbZJaFR",
  "key10": "B9R3egrVjUUsapLEutQXPFg2LETmjwFWKCEXaosUMipemegeBwrtqsy6ebNypwQ3AtLAKmmDZdmh2XpR3B2aKvh",
  "key11": "4rzZBrZAddYWr45CCsfc5dqLkHJ4puUPYDNBqmgwJ9DCKaujxrWvCx73A1mKUFZp53qmFACzUk1KKzVuUBihGff9",
  "key12": "2cZpKAmLAG5uNE45sjPu5Ex131xFkS8afUFjyH3QzxDickMJxuAfWE6rj2FyDCMWwejqcD1q7U5aiFcmJoLvXatU",
  "key13": "2KJxdGZEMheJ2BD8yChCYATBmJVLTDjSZnFhPcE1qGDjsPKacCdUiNz7gy3bF6g75LgKuojtNukRURm7PtdTPphj",
  "key14": "5iXrQw5dojtHP4QgGcj2kMNTivDzVqNGUV9wfzZZJ51gsA62fXNkR3ogP3KW53qXNzUCU3KeqpQKzDZRpX3uTYWL",
  "key15": "4qpdQCJphsbo5HmstSyNxsYPjX15hmDVim2dCm2P3F1j3GgDBfmGADWpicBcDiphg8seHSoqYQqx518JV1ncnMXb",
  "key16": "3BxKF9HfriJhfbhfjKX4Cy1knmPNbi9RgkFz68foD5hvbbdNDcB9g3ob7fjK7EhxrGDc8dCKaqaV1oFgP1EtQmk2",
  "key17": "34SAxqA84vozWJe3rohzsVZnuxQryy7FHHaPRoyugsSWPUD6qrBp1VK2Mge9rT7DtMmKmQj8JocsUBkn5zuaYap3",
  "key18": "4j66evfm9Gd2hh1SxcrW2GwEzbDDfnhQi5vG9vMpYJ5yZhCSVa7M4Labu7yfWoDKGiswsFi3ERXwW4b2QviDmZan",
  "key19": "37EZmdfqeMSWHGPxJ28kDmUnEQ4zpRxN1yJGJXWjNTFJbNXgn5Ky3Ee5tx57hESqssg3JetsRyKvSoJabz94KwXX",
  "key20": "5hcayEQr27ALVzQKauQTWhcDsCHgCqkq7zNPURZSnEKhYjRPA2RNRLm5cAdMfmesXhVEVY7F5w3TkpWH7fqBkp26",
  "key21": "3j3ystb4dBBcCwYoNFtmKazBe5RMKStFGu6JudPaKCbZFJzXDqUrRk84iyH6yiV41cEm6KDBMYW4Um29wed2MXhi",
  "key22": "51Xj2iUQYAhs3Tv2TknffHidPLKo7c2mM5VBT5QbzSVWVhEq6dYP8c5A88zpZSHQhBp2tDHEX8dMQ7T6i7LcUqk9",
  "key23": "2qoPBz4UuqgAUWHtmD3NqVLBCnBXZzP1coqkrYLBt47tx6x5pFPCsW8k55LRjokyXMFEhHTuzCy85nvcJ7AgkxJ3",
  "key24": "FuSRg9PFtJjAjqCSriXcQi3c9jjm84xmfpZhd5AbX6sSDYpb18jL2xr3DXqFMuq7Mr8HgBowwiQZduDQEFbzdiC",
  "key25": "4hHKjJKxpYd29mGQD6dw7cywtpdCHW2fjPV6uqq3P1iNhap7e9wYsBMShd7aVP9SJZEbCsxtbjNFGNFwGjToAVUK",
  "key26": "5uCS91ProKWbKb7XW78qonP9PthtX4UADuLech5tiiPBc7gvXcuwJdYUuckfq8KYqXh5hbSJvT6biaM66ZghurFq",
  "key27": "6G5fLmpspbSFrWHkVUpMEbcBwwWTNv3b8PBzRS627DhFx4NVXB6UwpKLeXTw73v2Syyqhx8eDbKbpuSv1R4LwSx",
  "key28": "5PCsD74RXVhCAJfmN3hvLhdF5HHTvqKmmsHSjxQPodg2gMZpo32rEnoJDXqDFGRiofn27ybGx3gQQ7w2XY7XKrmK",
  "key29": "YhDHErhKh5KK91Eq1tNEBChw6QHAmQ2rP3tra9FjjgnCW3F6zX9yCzKNLac4Nos1SZwja6YcwPRcyNvwWhpmM8e",
  "key30": "5KxF94F1VNTayrEWNVPrGgtLazh8VVnqMjTiV9scVc1sxoYBATB6Sa1gHkzWRBZsXUpTyN9ioWosnA4BuNom7vih",
  "key31": "W5TN3y8txNYbTb4xjEPE3ygEajc2LfZJEsKFYzxZvFQEygtxSPB8gwyy3LPWVzRhPNmnAv2UQ6TqMzX9bcyhdWJ",
  "key32": "24e8dDE36QoakjNFHuKAc923Wt9VmMCU9dKXUsJGbmgcYPgvdpj94dvrHMSsDJ7pdAK8BcZET3MGeFhfduUPe3vy",
  "key33": "4kqpYcLf7j5whEjDV6vZvaeYj1VA5jyr4XriwMacVFLX6c2JHrtouhH8spxdMYAHuX6zSSHfxKyAz56tvKyKVkv2",
  "key34": "5k4i9ECYaKA4Ma6SjavtYg5jEWVBRbNc5ZGvn9GXQQd82E1oBn1RwCBNQKNiC94PDuqVu27Fj4nrZbhFwsfARboq",
  "key35": "dnmYsixQvgrztaNoc7mgz5eheRyfLGdiJYXA4rhJY1JbEeTGP9Fdj4bZ948fS5bB8FtjEvMzkAtq9BQSrg1ysMB",
  "key36": "3fbzmzqE9hsZ7fkoTQhaRyAAPsT8NnHcUwoTX6oHMXwSHEFdokvUygzu8cgjW6RrwaU78EKNARQJh3Ecmz58D6U6",
  "key37": "4DBmTHEBCr9J1yLSCrEbmJHRoZuhE31GJkCQQVPsnzPuLoDfDuUURwvS6AxVc6jwk93zxuAEgT2EE7p87KKm6Z28",
  "key38": "5iHb2BJhwf6PkHUBNScSKGS4c5t4gLaAnUUiXWfhXm5pTHH1X5JxRqRbYG1oaSwtGytj5ddYZVmqV2Czu8AQzR9u"
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
