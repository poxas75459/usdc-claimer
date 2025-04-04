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
    "5gXaZ9STUkPqZUADfB98DnyX6pePswpiuvHiyAvvckbCPdbkbkvSGW7daRgUfzQQg5MHzb2KLwpmbQg97nxCWSmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nmnTwgciddc3xCfJzd1fcZC4Ts1tCJoHrBzDNu1yGqww9U9koTvkRo25yYErhgnH89HFhNuJ4PTpTfn3NNuTBoz",
  "key1": "24zto8osj43WxCFypgijGm1E4Xs3C5dMUmwRp5fZLfYe9TaM4fgvQw2iHa7ytA4AeAt3MiEZkHqzHGpHv83GvkFA",
  "key2": "5QZ2BtxdU7hsKrN39KqhQq3Qabim3jxh56w9QhyiYVhiidWE4wRMLekGowF4HyspGLXJqb2GfoMGCp8EPcSApaNk",
  "key3": "ueV7EneAdP95x6YaXeurhKodgCNnRMXHT2Xg9mcarRpEj9PHdzqbDGYqGntcbHi9bUbu9it1SCxoC7ZfEWizfsd",
  "key4": "4TpA2jZdyoTEUFabkuVUbUUMN5vJxLX52mY2jaur7PjJtgTro4mmnK191nhExRfxZ15K4g7ALkEy2iBNdtbdhNDU",
  "key5": "2Ff2nhRUmBw9VcS5dwK6Zc6DgQ3caKqnErP8UKXti32dbYsvefNZz45MmNSW3DufbhECpfj4Rfyxtvz6k32Cq4Hf",
  "key6": "3edfJVbvs9wki2X1GeVahcfLZmRCLRy2fXbM46StRPPWfXp4q3PvoVAWXsz3KpafDSUQeQanPr2QvyD9q3dyXT1Q",
  "key7": "2GBFJHLS3WAhVqfWsTfru457CS4Cr5TXV7NE1BrsAAbZf1YgHyPS33eq8dXTSj4Rk5Wixa8tbbh7GNz83kkT1pTH",
  "key8": "2V2ff1jmPFiRpdunD3qrrVz37PKjJrPsXnsMB4EsurPBjEb4SZAkutM7X7TVZ2mzpsQCNCZhSa3TZDLfJ4mE9VLd",
  "key9": "jfkGwLD7aZCPWg7kZuKQYi1J9Z4MCrWxMhtjaGB1qZPPACQH33hzTEPGBMPpavSE9jnMyPjpc57b8BTwLjQeFef",
  "key10": "5ao9H6J5u76s4bMqtAgbDAZGhW17agudBrsGegByKkfYWJMiHzLJa326JNmQkATebDK1Q9ayqF3c5cPM7D6RhoLm",
  "key11": "2Byzinum1nd9MTXMg4sMe13yFnq7XYHKtmwYDJvRXp1N374sCLrv9ur4gYNhQ6EXtNq1u2uew3jASaT9gG1Td44b",
  "key12": "29zuX9s237mYc513DgFcGTzgBFwkm5Tk3JcaGuhVtusLX8ZDS4PeSTJz88ErSqqaLd3df8SaJD9YhHpWM3yuWMFX",
  "key13": "4KsAXUHna84yKjqowGuEyBpDg3kjXnVbLfNbVFcTU4LZtg2whFhLdpNEYxWcMEFrUVNrJMzMrHhF9F6LzF48FVDS",
  "key14": "4SogXphJLWuSdxHTbZLJ6S6vErGkBV3RgSqfJdm44y5m7RsKCpQGcr9tP8nVUfCCYjTNyknG2fRRBfF5LdUrrQLj",
  "key15": "5y2LQQxJ6goqhMNzh3g1FCAvktK2ZroQPv1xfSzThudLxpHtNaYEywNxKPX6JKuVFvxqd58hNfde2jXAj6EktLt8",
  "key16": "6ydHtizmWMmiyX65UBrsAZQeUVBbh5duenoEwaKoTxfMGJUdBtY6CzCmHGyKb6TFmfWFperKgQmwdyzavknjN5G",
  "key17": "m4xuskehFGw7q89NhxcNNt9zxzLPJyRKVDGxawjxzmccrGhdr6fEXfmxkgXJYadePzPp7MBtRDYBahDyJhgr1uy",
  "key18": "ygj6pcSqRNFdsc4b6Snivti8Mgxya5C6ro6HEBdWzt4tYZJejLtYUKMixQWEa7F64v3mMEYxFzBivAKfsuui9en",
  "key19": "2c4CFGkyPBj7mV2Fka6mSagxyRPd7q8Nd72NFDa9s9dG2d8cCbzt7TDymyJFTeec8aJxd2YgaV8NVJ1AC5KFxj8s",
  "key20": "4DRukgQjLrtjhk4S6Y5NHWD4nd6maf45JFRBR7t1wWdEZeeXb8Dj2ofoC9LKkEVzsNxaANMEL8RjMh4Kmf62rzh3",
  "key21": "4SGB4iYH7PjWFjQAPAqdtJJ892CFtUS3x61UCkxKCcCap5uNLT3di27yM8cQYJR8W2NzKJd2oW37M7snerzKG6UH",
  "key22": "3Ywtw3VJrqaTmkJyVdFTbZfJJm1kBBkj5zVX1jsS1UQgxhbk8Um5nVTM1K8bVE7peuRU1VcAFbYsK8LSfGsSqdvi",
  "key23": "25iofNiqsRa8cQNEYwYB6fECX2ty2x86AnxFYpKfq2khWhJLKQyUA8kS341AgYUBdvAqmYSsBZc6vzr3t1wigzUQ",
  "key24": "3WJvcDB6YkCwux3o7FkChrcEKa7HMttiUXWVeFvnhnoNaL5hNGBYiRCVSGNW2edKK3PejZYeeGKgfj9W46rE8bxd",
  "key25": "4q5BfhA3hmuLDgJH94TGXbgaKUqY59nE6kfciWQ63z6C6w4tMbrM85747tiNgrPcwmnmLtWhUAJDekdcxf5JJuRh",
  "key26": "2Sno29qUaDJzvFn52wTdQ2Uq82HKxVvjGUjdPDqp6VkH3hGPwT2zNFRnCL8eYiV31HVJHie9CKXGKNsKR4bQrCaQ",
  "key27": "cCMXsw18da31zs3Zz6pM9K7h3p1cMyoKTgFprbmAdCKssF4ZTENPPjpT15ymrQvhK2Nu14zDC1GuFxJ2qB3ZPxH",
  "key28": "5fvn2FDszTAvfNscQhnqGVenp7G9FevPTpUicQuK7ZRYGb83kR5ijWqGn3WXsckXoWi3Gkw2NHuktT152n5YjoWL",
  "key29": "46bjMrsQeoUCsQ4f9Ujdkf1C59EQ8Y9RTqCzZsa4GytR2KjLT89QnVGPKRAYC3ZmX2WELZPBCmudme3xhGPCZQFi",
  "key30": "3dwQ1TkVuxA2UXKK2B94F84rA97qA1aiq9ff1rjgGtvGiRUBqhfJXxfFnVmaXpRPiK5UvFjnNM1YPyJ6bgkxSyCA",
  "key31": "4Gp2PfRKwBBoDj1z28N29esvz5cQeCBw1dANYk4XZubD9XyHqWqHYB4WZjoRCBz2tWCX7pqRUHUq1AnZnJgq932B"
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
