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
    "35SzCmtractR9ZgnfUCe4B5zzKMQqfwEKFMHETKrrxiEkFTc7suii4at585tSiQd3mid1fk6b7ZSJqy2A2sAy385"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26fYYd9LaAc1Z1EvTg147UgcmtL7BLtWAo5xjKxgU2gTJ1k38pSPNjkLBCUn2VBNLZivBe8zexLdyW6aVMqfuiD4",
  "key1": "fzZRFNXmceuV1kKAdvxEkNva4qGVB2ur6qhrfacQyU135KjsWQJeZwcGU1Qr2DvB5zRPxothDQHr7CkYM9uZ3Nx",
  "key2": "2r9eB1bs9Sg1bFQhCxdddF9N2MsJ3PGj9Kcyb4LZcpsyd2pQG4NaudjiiysxxKW239ySHken98KCm1SFv3h2ieja",
  "key3": "2ywxz7EgwWCwcnrcdDaYCGwWiGRnT2pdbRpSo1JvJWRoDtAK4Cs4EFXBmYyGMNnwPvRGGGeju3818FvBgouafLSj",
  "key4": "MptMJpJQcWUg4F4j8gdHeiWLtCB878LfFB6CZwavhk6AEPZDYXb1Zrmu9y1vmPP2egRrNtyoHucW5x9UHztamZ3",
  "key5": "rjkUxm5kXc15j2z6HwCEnQmXV1UWcmjLbh7WgPgMUGgAzwvBfVSJFoJMw1gC5mZCjnybUDKJGAEndD9BfGrDHzp",
  "key6": "123R2tummBREE7KPN81DRNC7zu9gpw6hnh5VVFYfqPEcu5vJEqvf8uZMFtpnc1zCuuBs49NBDQQSWUkhqVBDYKrS",
  "key7": "4eMBz5PnVAr9hAyfD7GYhvnZUChYabJvigiRhUUkCEMJxstnVWdg8sz9gHfahZ47qj6U18QnYWAqoKziAicSwmdz",
  "key8": "3PridnEzBcoBHnf7Y1d2bS7SSQwEvcEqRsgqeZCRPSJLVC7UmKrHkVCFcuYUPZnQ6NhyGVpdMVMHNhzG6EDKBivz",
  "key9": "3qFSUWW7gS232zWH86gqiWBDgNoNwWhD2pACQvRfDWy9NMV2a1C8g9C9QBq4cuoTwThZTaC2VjhA4Crx2DGWHGau",
  "key10": "4STxXDkvfZZCzSWKc4Q6XfjT3NrsNte7riMtEModZqubkW8CG5fCgKJ1ByPzXi6ocoQArTFLJXv4d1yoaNF12oQj",
  "key11": "5cnwucQpaRQPfmH9Lyuqa8NXwbcmQx9fMjzFXhBxLang5SxL9N7twRrP7VE61KHHs55mxm9kN2nqs2GWQavs4uBN",
  "key12": "2GU5pbA4nbwJyAg1TURFkFvfLZXNNtocZiMeSM47xwRDhTYST3SCXKVycjzHiVjAbpuRVR3qoZqThaVCUUwoe7rA",
  "key13": "4NbBgZKoCFmfqmvbKVXXza24TnDMQStXJX3oTZXvWjnk3kjRpw9NiwXwwXWPYYF3AhVxWjTnEaqzJNoJevYphXP",
  "key14": "4VNY3VQTmqKGpRZJGYzPAuyRgipAhXHzHFimX1tL3QtkjKBmgBnrNSbhbGDVsj4nRjBQrAoNJJrmrrxYvTVsbYBt",
  "key15": "5FS6ckBj4JxXeCB6m8maxZ1KnTifzMbqebCTGdzX8yyk871kb9vUGYfxV9imXmnK95PEbFqd84bhZhrZ4DrLcQgj",
  "key16": "4vMoMLoqc7L3mVcpTbfy13eNapxvrMzSTTykpiMH1REH4Hr2P6exJG76f452QPbTJqp6kYgQQXg4Ni7m8MPKkMxZ",
  "key17": "5r7TbjwvJuKxDC49WMvcHMJB6jFSWD8ajbgocziw2SBupQ43GbStYaqB2uGL9m1Pv5kbHGJfy4iwPC9FXWwECSuC",
  "key18": "3W7mC8UZA123q5o5neqbrhP6juMJUEfZWWvbegfyePdnmGFar91Nknss24HVDFy8B7wtpik9BWUq6tAfksU4KyF6",
  "key19": "3FuwHo89aYENB6LcDRTDBdGU3inphPr5CHZogcWBUGMtjEp1DNWMJN4ttmRjBxn1YCA3SFBS6J7G8N8S3dfHDr5u",
  "key20": "3fx18XWAPwYFUjDo2QEhfg4WJ7HKF3xHyKdsK9p1SnFgUnbzzFqNT2buMUMtTF53GHGLQhTpYXVMzbMFKsaNfrYf",
  "key21": "1236UJ4bwKwKmYiVn4ihyk2xbndRoepAzYc4sMvdAZoEn8jPMW68ztM9bpe9AJAcDJhia47RcYJp8Bcn2oVVxQTZ",
  "key22": "5PbyxANnvzHSPXkmCX2GArjupRnciFBFyHw7AEc39rcKoddbXJtp28Zh7muuxe5tdUdaNiQ6djQzrSguKgC4Qo8p",
  "key23": "4S4GQYKKswpncyFRgcD1MmiWJpwbd2rUW2PwRLkeRLRBgKpeDWWNZDMDCtb8wVuxDS5QEDyerVDuGzMbtTrSRaEs",
  "key24": "2uSJaKiZUXxPi5rY2PdNUg2hRiaku5TPVhxvkTBkzBhDHwev6vYxXKBQhxQov3psku1MhqL9mYmYq8VmT4hMsN4B",
  "key25": "5NwbmJ53VuYHs3w3eHhXBsB9BkjSAMjvowoEjYH7RAc4HKQgS2iJDwSkWmfwmArzTh7v1rcR8ZjqBzsew72aAXN2",
  "key26": "2ht45K12wG4mXhPeyEPUDaz1uJDoKsZBQAThgKQ5DaPfA9FUHMbVLzJ5d17Jvem2MBrwoDhoCnH3VohGeDJRizbg",
  "key27": "oyyUz3eQ2yq2DV9UcoaM8ux84rHEQkqhoPa5XorJohynJQqbWeKSQdzPBVkR1UvAUmNay4SNzf7mwDiey2t87qC",
  "key28": "33W6U7SEP5jpesAtnNcSKLR9ouGCpkZvXyAcFRkwtQa484NUP2BtKLmvYbKbDZqp55bwYWfn1jCStLfJB3LfGjw",
  "key29": "5e6H5rTDtmGFKa9t7tGHMB2H8ze4jNphu7yDFMWyPNHa1dD8CbzcaoHfdKMTbZv3PQH4f7ihBE3LFtwTi3jZGWzP",
  "key30": "5ayrsPMkNbC5U3QMHtyTKuBbnsszjks3tqmwxpMgyq3Lsie2uTSPYgv9GeG1SpXZjvcqCnWjZe5NGbBQTNBkMGcP",
  "key31": "2K6EsE3BA9qMhcjXSWmv91FvhFzJwixRKqn2R2wfwsiZcbWTQFGsXfLuXQEgJ2JPUqeycrTrgGfovkqu8TMjMLuc",
  "key32": "2Lc98jTti6RC2ZJ5nM7Vde6aF8BBRD326SznRB94De9XtDNiBKm5oEbgdtF1KmGRBi5Ku4HLGdafs1By6rkonMcd",
  "key33": "YCwZY7yac4RkHnzo4yjUykkEFNtw3adG3WZzVuYnChxnUqjdC8uLKCCmxVU5wKErV2aC8i4SVqRyy7xSbv3TpuU",
  "key34": "2FRc3q8TURKbZEmbSe5cYZvDvjEFK8FnvWfzG3mzJCNj8RuW4JRrJYHAVH24mVGyrorRuRCA59MXR1XV87zbkAhV",
  "key35": "3NgxT1H3LLnKYav3pNR7sAZPov8vmsfXpNYrgjujCV4yvTb1a42SPugV7G4xjYQyhUAhPEhAyzotSEhUpfz3xpAY",
  "key36": "4h7t6wmqWoPMAb2zCBe2ub8wRf89QJuHUfqfrnDo2q9QCtM3tpTMC2phj5smVLtmXx79sj4udQnsFMS5zUN2uMm1",
  "key37": "2h1ipofrUyv47RVzxd3HUaBNwvE2WyqgiBLnSxYjDhZsuy8qwvMHMWxBLj59LFRUrSmVjMoF2rCzNES86XsjjSZe",
  "key38": "35GZCQhy7J8bJpUQJZ8Dc6CugAMMexWMXZjHLrAFmkbLSYguVG7G4gGBbEuiz4NN2pHwc5yb6XrnQZ9sxcmFprgR",
  "key39": "2iZXgZcpKf31zPetenWRn69ucGnSwkYEUnKdJjcoUz7hDwrbhN4bu6dvdBXHZ995YzLpftyHAaAau26whnndvpky"
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
