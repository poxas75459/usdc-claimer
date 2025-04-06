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
    "4rZVSHU6kP7gZFbsK4bxq7J4mTJ9KP5GsdzsexxnDgqtERNxo94VKGirKsTsHcrSaite5m5YcmbyPT2nYyZQWNJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NLGF4af9g46RYceYQNaYeai9UaxCdXFvg7bvq71A4ypQsZBecMxbgZYGjs7QBkKKGDZX9tXHYZi6k9vPmReRn6x",
  "key1": "524oYVUhqY6f8a9him9h3ao2R7NURPYC8ZeLRyNLJodehVTTWnt7L77tjvNRNUN4Vz6mhYBaxPBieJcZ3vJAKBjP",
  "key2": "5cXVhs6YJ5hDtzcJ1eQtcfsKf9TeLo337ZHgYpiRA7PoJBoMKHW8ukJVMNTbifEpfqzUgxtBs8ta6C4wkp1dTBSa",
  "key3": "4ymKCgXRwa6xyauQYq5PSsvR9qkXdRLXC2nyoGBwTDQEjHgfZe5hbdGhZiaR13k4i1qwzTFdqbacp5fWd56gnTNJ",
  "key4": "6yqZqvHv3ojMBFoQDuDAQPrZRPQbJyoDLcTWAGzVeNAFJTLgCNxvzZwfHkf9urZG7PgAfahmCta5ecmiLVsQn3j",
  "key5": "34K5kJJq26qjbFF9f6VPyMcLKUffLdLTCeZx5YkbeqSy16mdVg6oT8P7A7crz8xKpLte3HbPs4UTYXZ2cYPAKhBj",
  "key6": "2PMPyE3nVY68kF7oTKKQC6w8va4yxaiTy5hmYXmBhRQGBEWNFM6UdLq9cm8Xw2GsNtNCTmwqeDkt7M5YzYmmR3cr",
  "key7": "2xBpWhM8tk99ojuzCZiQ3SVnyTxc1XX4F9U27Jo2ztSrBC1MoYXPd2waJ95VBPdT6czRT8T71UJvh6U1Mjesa66t",
  "key8": "X3KR6S8hxRVAZHTdEy6sa81gL4LKpx9kuPay9tEqYBhDfbAs7LdCnUWYSgf82tfMCLqezXGxZawEx6zPCFVbAqW",
  "key9": "qHhsCL7zyBH2qKaNZtp1AvZ9wLZiFKcHyJHxTA1JuG6Eb8cJeaFB9Mg8v1GbF8Eso8jj8hDxMB5vuufqbUDd1AL",
  "key10": "3JhcYhKmr8eLdZF8g6LuMvuwBS7R2WDaUzoKpZnphvFPRTuxwpsA7wyGtcYq2eWoQLXJGfi4ptYhGWrXJLTm1zMA",
  "key11": "2Gx9i1ceUbq1u6jF6Bv7YvvDDXGiEwkhb37hJsEB6pXub6tCcRToqr2VU8SR8wPXatbs1uhfD2HkrX7imjweoeYD",
  "key12": "4tpFMN5ZpmpsjFvm8nYnbJLoHXkNLYXvZcbAsnNuDzuoveyi8Z4tqrU9sc3boLZFDPU9HwQwsV2vNWuHzeFbC6Ss",
  "key13": "3pSvzX31zPhF5V4wBzUecJRyAypeS7nCZRtSo1geRCduCWCeXzHE2pwFh6qBmdQVHHbVYaJTcKLRd5Ndfe2AGEDV",
  "key14": "4CHLTaqs47GpGE3N5LrjXTHXYcHZSSNYKhXjj7kvSXM5ChNznfGLR21i687GzZYRV3tw8bwmkprFZANy1cjS7r5g",
  "key15": "5ZL8Jpyos8bz7PeJaqjVMZfJcr8fNouWbtqg4342EfnmonnsqHFWfz7x6WYshHsmXybVamzSC4PnKJmyrU6TbDq3",
  "key16": "2n5Hdx6cjXgiMzMvPSjtDHmuHWkjpxWwdBxX4QhNQLwFXoe7Xe4ZNb1pn3oTk7RJjsZH9e4oTNCBfYoZynUz93jt",
  "key17": "2BRxni2eY3mXfxYxitYL3JctFP6bLEZ38j8wdARkdYogxueYf8dDkpJU8UBJ9fnfzNGHQ1r1315U8GyZGHUBshCu",
  "key18": "2en69GudkFK2ZUqnxFF4GJB97GtT3cgozgvA17FmoUVVVZM7nGUsKxDcZhYsMKrgB1ZGEN4wh122tBWMhQAaeQqk",
  "key19": "nyZC6jGynNa1ePWStSLtoZumNUzDEBkkkY3c4adXS2DtKndpK3w9jqbK9xHWnE1AAHxMmef9PRLWRCGekAk6EAT",
  "key20": "4sB2YrcvUxNTeEnNj9U3gA6N4xbrx6q29LvFyLD6i2PQnUZp5FgJfBem3bKhgWmsRnPqrx1xcCZmiwK9LWuzkaNs",
  "key21": "ZegDNHNnCYKY4Afp33nUBod1upimdcz8Qu8uboDABL7GuezWDSmJk6P7gCAL2sdiEWVEigeM2YrpGD45mPfjitY",
  "key22": "24AbxAdFQyVzXqGwyfNWrunJa1ofWSmGc7p7GBXGWzu5kk2p5MUmDTU9b1QZVc83tbCghowuwtx7ngjc5BYh8cU6",
  "key23": "5zsusJPbTd4pFsqQUtz5SAj13LPpvnDv7eNV1tAnSxiigXZExPCvmDGSRoTiSDPzV4vJAZVQtNqJFajS9fd4DG12",
  "key24": "xZQXuVVo9Bv4wWpfJrpV4qjEN3gwJfcfwP9cti7Qmd9x2c4K5FQENEQcX11WU29e4fia2wLDpya3Lyzj1fuzNSS",
  "key25": "3CuaJX4rLx7amvSK8aYHwa93z8mvnoUVhmxqCCnjjhH7gq6nJcBP77feLoAT8R4kUv5F8hp1WScbq8gkUhamcDE4",
  "key26": "2wEVntJ5i2529i1om9kQYCC6bXNihxaLR1Sv2GtDeMnz7Y6kpsDVunbp9Ccid7bPub1chGpCnaa3QzbRJ5VZAfYE",
  "key27": "4BDG9fw2UNbp9G3qxisqp7rZ1qDcvT6JA3YhSaXnvhJAJr46CTrMoDVtqSUPDGgAMbGh4JkH8Ga3eaieci98RuXh"
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
