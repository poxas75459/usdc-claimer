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
    "VRUf4G3bV7vGsGfj4gCZbsQrDYBbpDNAhVQabPPop6h5DdJvPGmPTds6c6Ndu6atfjjYFdvWEbMGf7XEu8LG8Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtuivdnWE4g6umnpaK2dvxGJ62wiyNuhhT6ab5SQqA2SbJbo4FR2jx7ikcLT7fEGpCgN6QoCWoWq9WNxLqysgUe",
  "key1": "5GzVwT6paxy8rcXY7vbwoiku8sxVNNYWfBhPp7LDAt1gikEbQVntvjp381dPtx1uS1RZRoDNmJ3DD6tGHgbQeBwj",
  "key2": "3oxjDvtxJdsJhZHkQdCFU7XC3v2dWLWK1JJR6cgKpSKY4i4j8Wm9VzECzXCVEdfs1VxtMUXNdDWm8jpyuJjELEXz",
  "key3": "2q8DhQi66EYabZBCvquSfY879kr1LNvKb79sz6i553UqbNG3ucY1ugdZ2Tymd2JVX8RKhY1ztEXo7Vh4aTBJH5yX",
  "key4": "5AViYVthEqBWEhyKtTueK5tyBq32g5s88mwizAUnwXBzmxbtmpdA4EUNvd44vFUWvMTxbASyqg3X7yqh5K3kWih7",
  "key5": "3QhpzHeEMuXf2UPEZrXd8aFDfxN9yenpdz14YrEfdjuWFsX5jc147r3VJ44mj5bsVq3stXJKRpFEY6adR4GBe8FN",
  "key6": "37FyGvDn6qinuAufzsJCjr55GPvBFzvfPQYiDHoAAGqKGdY7NN3XapE7QfP6y2LcHXHtiaTgYAf6HHA7rXJS7DEL",
  "key7": "5RKYcDrf5tQBzmDyjyeGWWoGNV2BdvRGvsZbeiJQ62sHEiKPAfPCJSVctWxBfGAaheJVZJfxbmH5hb1GwrdxyKEc",
  "key8": "V593FdHoSKXnq9JmUJwRdUSyPmjTGzF8DTuNbvhMz6jaz6mSZifvtcNmcgjvwNYXuNzHJUH8hpQYGdpZkfENwkv",
  "key9": "LGXwbiTSZ2xMFWYVxdw1N3ugHeiG2z6puYxe7kPA2WfRczraUhnDixYZLfbqxEcayqDE7WfYNYNxqhDtmHEH89h",
  "key10": "2So4moskTDBj9aUFrYhXsieUeTuE6qQsEng11aQ5R1wc88yPGyqRbuBtK59p7AhcXg7CmgmaF8cR6wZUo5tdFoKS",
  "key11": "5ABeWQzGgoSVfRDiFXSAsE4JhiHvLfj83Rzg28PPyoxVEf1T2kicBW9GL9FKzW2xUDNS39swLwUFpa3j3jcJuSiD",
  "key12": "4SqxEXLkq1Y1K8bcjK5nPawfFen5FSko8gAv3sVYPkrf9Nr5FHNvn1nCdkCL8XFrWHouLjKpA9jJDkY38vPsFr9p",
  "key13": "5thj6atHRybu4dmLRZ98t8p5Hmj1tZ8y7ZEzbXeQ1vUevUafgscyrXC5RSKbuWcytzutihpYgndPf511PZu9brPi",
  "key14": "4JoJJSRBa6uL5Juj8wgnJuMWiv2AgSNNBR3a6nNjS1c8U4oGk93UvQg968M4D1GAbopRycuMuahqnRzn5XtjiFQA",
  "key15": "3BSfaVCUbF7Bv5nP1p2Nx9L5pqr6fzaPU7Rp9T3HF856VWqFMHUqjcwHgEYS3ViSNnBm5BioTaNWLmohr3XqymX",
  "key16": "3hSP4cp4D7rPqXveHvfUHGUZSTmwZQwrDSPYqJKezLyMxNSrwMANGtX69QbKGxuE7nHryZxZFv384wU62c3epyKh",
  "key17": "5GnAbF3qu4KcvuCRZdwRpgzYpoJmhYt1gzCjD3df3ADJwTwHXsWhH9A9exM992gDFmPhGxE7djqxiWzcYmGeTQB9",
  "key18": "28T3yF43SZKxZrYrPCKwgqxoxx7X2aGjTRi1AGm3bpMPC1MrHGPEAaJ1DrqRYZRne3QqApYagPrHGcpEsvMZGbL2",
  "key19": "4CuXMAW3hQH8HSYjy1svr74wH35TZwefxvL1dtLEiBLAMAAEWDzRKgH7HdrErNaMoRacoQwmY1zK11m7LvcjFPqN",
  "key20": "46ww82dV9Se3HRuwssXJ4uHGxgZK6fhR27Cxb8saYLq2j4H9xVfYFZKTYUWxzUTzTZLTEYAyLuMfAnW57cWF3Prg",
  "key21": "WAsqzGS1bwEC8xrd9k4ecuNf2TS8tPAmZFvuks3a96mWtYpJG6zjsPMPMWtudGjMM3rxGWTNEqwsoALtLKspww9",
  "key22": "bcBLXnDk6ULqbZ6GHNPRi5PEnc1jKonnLpA6dHz1SdE6xBpz37w1CWQZPUhEUY6Z4FCEogG8WmNjbAVpXtsHRvz",
  "key23": "5MNDzUXzBiMdQcCCqipQnjHt2yyuRb1u3bNKNSCh3DyZSyMCD3h75J1ZRry2r5sLcSRccLYVrXfHrZGJB11BPDHY",
  "key24": "2y2QfKQ7zpDHiDMnM2i4h4B8D664dRLytGr5fsrDChwiks9Y75Wg254eBu8JKLAj7w21YC7pHJSPS2h5bvhCR8AG",
  "key25": "3CGMQnp4ZEjwtDZNRkeE3xfXDU1eju9rm5ggxPFP8A47DKfM64S2ucsH5pibxUVRyERaxQjXBzkr9WcnkNPdhAFj",
  "key26": "3CibTJY49xy5Dh2oMBs43Zz4Wxs97TEJw2PZ21Z8H4wgMekg2eAvwKwuWWmtKLea6VbCykPAkVBEKHjbq8MSF1cU",
  "key27": "5UhXZEbdkBwVhdNw5qzBuiSx6Vu9NNWGeuEBXKnRjV95tPvb1KVr4yrXQpMnrDJB4hC95L783yAuHgN3dr6kDzAg",
  "key28": "2Eto3venSX6HA9ESzJMnFiExxcpXFUqNnZnkGR1D4JXU5hHJV8mv9uiR5wKibumbNvKHa8iRdywU5cbKdogotZu5",
  "key29": "2YJhiw7Vddb2MwUAWccgkty5myGFfVgvxP7WPVUiPzjNhqvas6wTiPthQtnUavbt2jcZo6JUNMbvDJBWCDPdraMw",
  "key30": "3X58VxwZjpicTziNbQ3YkVVpgj6oVS9N4ukdB2WpP3VViQbCqmKdMJXT7CmUUVgLVFmK6oZ2sN3ei6hbs8XVyUTt",
  "key31": "4y6qJYLXnYykv6bJWH55yz7XQNXnhQi3N1GRAhkKevtgYtsUkjj3cPKKXGnAXjZXzSwEmZmq21AY17tYe8FsJQYB",
  "key32": "4p5m6BvB7LXoZQrP9uYWYjofsBxeL9nw6n2yFidYLbJtUQU6tu8QF1mfx4AwhugrebLHBeLJy9XSL2B8jrYZhQVu",
  "key33": "3R5zVrcJ97KW8HXdKo5NRtYCBA4n8nSi9n91RZsav3kyBVdbPmxiZCHyKmnUroeA2PiiE5uBXQpfz8eqHoVGWR8C",
  "key34": "3pbpxg6jxZsnVpjV5qnbQqDyK6bmnngLuTzC1FnqW26uwTZBooBSkh7ByKuk6NhbTCKdshYtnbo6DHufckk281Wn",
  "key35": "3TUGx8iWBBtLST5qDpAJuHujDPS2D8CjDpVW8gBbPUygLeKGTNv4BYKwM9Wa7kKixCkVQRXb8aqnPGA4nxEk7ue6",
  "key36": "4BiavCUWYwhVALaq2mMVDrtf5mdAwu8Mruksmi13AqjtiiiZR8Lkj4HVbUEHMY4c8iNVmtc5ksN8HX3sNCe9ZoCB",
  "key37": "4U4hnjDwQENhKZbx9Ws1CXy67AFUZzN1UocwbognQCo8qGn4nCg8B1JMQFgtBnpjC8dTyivWXxwGtTEZFE2H9gA3",
  "key38": "5WS3ax7QnchraomnK18MesriypZ1U2jNby4dop5XUnsWGWxtfnVv79TB3BGrt7oes43TRPbw7b6EEqPpsjtbdsE2",
  "key39": "3NsCeMGLKLqeZeyQDMDXLdyhVPiZXVSCdKoB9RysUB2XmyF4nXa7Abcf2FUjQKHuyUHSWZRfBxJdecyyNmbd4ryk",
  "key40": "xwu32tixCQf8mEGYRYJp7KnVfAXap3b95ZfWJtPggBvrJpb2jDmqgYuCR8BjAtu4scLNLSn89EtW251RZyJNhyk",
  "key41": "3EUF8qbniwfrTbMc1M6UwYWG7yRgeG4qXnAYR3UVXtgztADCVMMcNj1Xd3eRKy2EvfYb2PnzKzHNSqN2b2bxV7iA",
  "key42": "3XjojTi5y42v8Gj44wQV17N3Ru4MpqXn9vyGbyje81cWoANh3WHdVdmNJ1AsaLAxi5dqJ8RWUYj28iMkZtwUFRZt",
  "key43": "EkHkySzsbYfSxZfAxxCCGhSqTuyT9sJF7RzXHhP5p2QfwpoV8g2H8pE5uQJGLu4JfTCBiJjgSAchcR6xHsiom78",
  "key44": "2K8oU62m9zt25iHwNwYbw5nEDWaWQhj9m2V4SNmL3cg6goApNvnznCoHDtV3om3t5NbbthDDWL5XVkpJB8RKkzce",
  "key45": "3gnu5cXxuxPWhJz32vKv4UN5Y1eTSy9aXarrm4RDKQBmyjtQff5rjfMvmCt51BnNJAjKaL3hmwDfGyxQ8cVRr7Ju",
  "key46": "3KyeWaY5XXodmRnmy8MAvSGcSZyGRfLVQJqamDvGHU5E6aUVhAcd5aEHhiTMbWHccm1du38CZGd3uJSGyAq4Snjh",
  "key47": "2tZLdrFRwopKrZ4tmtraEBPhK1kyZkhCV6ET3rJLoxm3ukpkctZKaTcjssgUiNnx9hKGMoSnPhbA94cfMLzjpmJT",
  "key48": "4cd6WyBktDwUyetn9wr9oVQ1ouCH3EFuZq1PJUiEpFPjJCfmF8Q4w35hxQRNTMR1Th6Nwem9u553HvY2otpaFTz2"
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
