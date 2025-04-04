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
    "3FhShBY9ydubgriY1t2XD43CcBsjamY5REv9kjq1haQHNZTHJ4SLqf9CHHWbviPUrXPAqmkKRK6TKSwQZb1gD5zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6273h7vBcMFUuGRZdLcc3Wbvc8EZu9BEknhq7x1t1ytLDdJV6xZEaD1vPgNFXi4YWh8cKDfdG9RRHqN9wEyTwBtt",
  "key1": "3epdKtwdsnZxVGQMPCGCeZkREtbraHSUi1646gSFw5bCqNC22Lay22TsojLfVxgxcX1gsizbgAa59rZnajAWLv56",
  "key2": "36DkYLPNozZArGt2UAJMZX2ziywHmEJ9yMWvtJAeZMkHcgjZmhZ4hcTkiJ7UcbgKPWyGQnTKow3g9fuoLeA9DTZm",
  "key3": "5BY3Gy5NKAn5fDLgL9YEpViZrK72Xj1zW9sbdbAoyHLKcvDhh5QRZXGgWW9q2jW87RoFgYnk6SkwbKD8ofAC9xn9",
  "key4": "5Rk8Pvx9HBRFz9FTW8DH688qJcPpasGYiuAETDzt7U1QZziymo4oi8j1f2DaYqpV5PJ3S84eqPtYJdgKDk2GNX7z",
  "key5": "59zAoVg3FGyLVfzn7uU9Fo5Ezu2bUb3g3DTkZjNSMSe2bKNNRJvWAvmqdxKk6CV24dHgLNqMhEkdgK1y3wX3bE8J",
  "key6": "3c98iEWHRjrj98DbKL1HaFL1pZL6KU7FAWRjyrdESVtSf1cF7EtCYDHHLz2b6N9kWATNjmLRffmqTkDSxep7xCLJ",
  "key7": "3b5e6hmVm3CxTPmh6pNb6RkE1n11ttPWzbvERCNzZc8s84XyvuB8KJ7cr8uiDii485TpNaDosUcb9MGa4entFFs9",
  "key8": "5aoQUEgrmVt5JJDmrEyqscaoa4UdsPPHc8EBH4VfhGNq8cQChHWVDwEXmXSRPxby2W3doYiwvfFYvRezAkEQZngP",
  "key9": "5PN2nj53E75wuvAar1PU5vAKnvfEitUjz7nXcct9KpijwVg6BhnNscCFuqhyVgHLzu1rXyLoRGvR8xfxoPMPHADT",
  "key10": "5xENJrZ5UN9usFXiNSWRSa57C6Dnmh8JCKdXHhDkcBSL3FU3sgqoic8tageyssXsRhDLZjwboWoMLTcbqT6Qzmm4",
  "key11": "3PyGmJ6enYg6qCE88U8v5DY6PjNrkLr3SVTZuHshtjA2JRjnaaFgjvLqwAnVvxn3kDxCcuBTh3k5Z6iHyib2LPbb",
  "key12": "3tzwTsjwKvtANiePqAgFaS8QCgjBo6oYYDFs6CB3arkWAYZRZXurLjhHbt7qqbBbScUAn6SZWJAUmMAjxb369d1j",
  "key13": "3RKBwHtW5hJ2qjThk2yKVHCuMsLach2qHoUrytSWJJUX7Bo1TnWyJ728EJ3bwonDgHykoNT5bqTWiACQN53edgBT",
  "key14": "2ggJbJX462Tn5tdzUdouhNcFt6CCnAYeyfMQd4qeuKkFU5zu95Yn827GnCxxmKTvXJ5N2ADPKTq2ENjbA9Trdrtk",
  "key15": "462UbSxqBmZmTFvNQbnzeHXSiN1BmJu3ksLDxoCvKes8WsntfXaHF4mjCVYXF3T8vJ4MQEMhe5TCZtaUUPGhrwqp",
  "key16": "5mRW3dHNVLjeXf1KUhFbz8fV33XC7UrVuPuUhT3VhFcybzuJAki2DRbw33eFLqEyWe1XCofwzukDj2wENvvePNAA",
  "key17": "3qshDgBTbbUE9AcmzwAZdvhjhZsyL8jnMbm33DKmuZThWxi1P4DVhasEdfGYKMaQ46QYC5Q1m1rjWuen1vdHtuZz",
  "key18": "4wVCjbQj3QjUbonDD512HUyTA6fy3kYCojyr5oZ8ZQZXzjBtuK7iDzk9o9nxycadtbaGr7K5cHPyApb5DK14KYZ2",
  "key19": "5r5UziyQFD9KTc3Nb4uQ1musxDMiDMULXPQH5FTUDzkySZnnALzcFnZfqE52Z3mPbCMt3DTtUwCkdDniXaTPaYEA",
  "key20": "2Gmg3xdsRGv6VYEoUziFVn7rZyPqkez7oFZmYx9pu8skKL2De5sSGWVFrDsknmkCho5zPsNVgscKpUs6XpJAmMEH",
  "key21": "2g4tbtPvPbAjfE1PyAR1WVCAc8odQFs3FZthuCL978nEhVLLeE5DhV6FqXTwciko6TKHdknByRJhbhW1BHc27PCg",
  "key22": "2ZWT6tjcApck1Hiksg3RgHzxJbjZzLVNrikSFip3emwcaRwAR1cS9Cwi8yTCmJyoEWvZaxtJrDALFpjA4hJfva4c",
  "key23": "PDbday3jNf6Ec8tFZsQhNfAgFNby47BFgrNKq9cxgyij5MXd3paoeFxzPUo1iGys1sdGyNDCzxDT7L3mbDsW6up",
  "key24": "2rSuw8M4BkEUpxoGEHhhNPjzoxVyucCmXCL8gY46BYFzmBk7NfcSAFdXsVTgNWZRBRaZpJHnGeF9hgZVYSwJmT9J",
  "key25": "1FZFMPjJ5JFXXzMuhGKzp8J8u2uKYd7kbNDySPJ2CFteUuN7iXVmRKMskPoH5hnDFgUn5d1DQDhR6z7uqJvB6ns",
  "key26": "gEPheNLR2wxXmpU6Gq2g6X1vWWNBL99zfnuRic3UNdQKkEwHtxkkgTSapL3CkFcM1bvfC6mfj7rWubotvucSe6r",
  "key27": "9d92c1uUi7UdD4omUki2seZs6VGGW2wexnM9fBPz8utYs4Df9iyqdjxQwXPeEiramWLVPk2xC55YeA1D8rkuvdo",
  "key28": "gZTv9iPptUAuCDoKqbmHhbQX9Tefdt7ks5DudE7CPsq1a6etgZnpJ5NdGC9f4g45GAJwvD21AVbSHnQKqqSHvqu",
  "key29": "3mtExVJKdoFeFzihezQ4191VDxweCWScFSD7fLTU9HQvwRrtPH9dJY17SG8ZRF6pq2ykEi7QweVAgtjSi36UAftW"
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
