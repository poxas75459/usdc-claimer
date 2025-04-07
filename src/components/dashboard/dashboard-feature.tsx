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
    "4TM4wTMeHLq5U5djgNkaszFnnQ5etyoxemxTBF5UYcquaZRwYKJ8M9GMXJUDdViasvKiX6MDFkU2yV4FUGc1cZCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32o2un5xGELFjA5oVQjs6A5AapYuk44MPyYi4uLaeJiq5oFsGVozRmdWxkzXRjKw6zcCTstaeYGb6Zp2qFPcabZz",
  "key1": "cKUG9DPs8P9JiCz76pcr8VDRLFY834ABTG2y4ag3xCwmr9Dp4XQkChuPEneEHndJ5byfGv2Z46ApXaVGS2UhXCa",
  "key2": "Pc1HzL52M3GRrvN4SfCA8kedG3wokn1PjXaVWx86mXjYvDNg9PxCYGqgqZpFTD6QoWvXGZbsaTN15EyVzMLfCpy",
  "key3": "3Fi63nfxMmrqaJu9mxSfjhJiLyYJaY6ZZrm3nga9qCccitsCrF1ibpL6gKJw9Quid5hTFkqDpXhSyr1icxDGsv3V",
  "key4": "4vYUSWWYLAyodvVACL4zEYwG5WGuvximdM93jFvGXAYY1TRZjme1MFAHMvzU5mssPQBpPTHi8miuE9Eo6fw9LxPv",
  "key5": "6yXXXMPm9HmpfgiJKcHCTsDhJmSMRpznBbdaMVEuyRRKWmcHg8kSLUVpkU6w3EELCcKC7eCFVPdazQQryn3xV8e",
  "key6": "4aCc58PAWh9nJnh6zNEEDzpVuS7DqKhsWAQyZPDNAhCsqd3gfTkjDmgsU98mvYrWGku3GVnw618pkfYFQ14dQrFB",
  "key7": "373TGpo5vEuEYg9Y6GVHCDiiTQkGscGLrEjvigquQtFNXRJaTDASVR4NRtH1QauB5KX6CJwVdhBvAohZEvjWr4cE",
  "key8": "48jXXVtSUrHpJqNYRebSHk4k84tUcKzzmuXPRsG1tvLknzEr95ZuNkubFBZ7EDfe6h1DVTnbrYXP8866U8PqrUVv",
  "key9": "5MbwJeLTJ2UWJLvAySgmWqSxsAZJ6K85er9moChGK7172dHwc4hqiPy5PTjYU9RY4UKznegNzVTe44awtSDYFFx5",
  "key10": "PjKLWFC2cU5RbWZsQuXVpRYzCbQH2UwJojPVyJ4hU3XXjNY1oA7FGQE5Zoryqsr8mGwaDqjneE99JUEWeA5aS9N",
  "key11": "5LAUN3pm5DioEJgW3isoJ1yhR7i6mtSJmJrznoTK2dELyZZcfMEeeYRnwLiq1CotmrNe1ZbEpWxgffJY7T1qxzKU",
  "key12": "2Ggb3gi3uVyctDSSBEuPQwq9bczmpbTdYdTAgSSoxmjSHGFT4bAEMeCuKTDLcgZwgRUU3ipD2fG2TcenVfZNuDLp",
  "key13": "2GfJZ2UAaJWY1xShYmT911nD6EbhMiqK2tLAc9wNRGaytpiiGaoJkBMfaNQGTi6SC1sCdBxZtpy1JZJmAWMk4VDt",
  "key14": "Zy69ZCyHXwXVnUtvab9JPnrkNC6WLRi7nhdVZAHK9YqmQRBWWKxF4Z8xftoQUWw2uVpaNpLfPd1draPyrebqiqD",
  "key15": "5dehWLkiabZ3u9W9ADFBkrr5kAqWErH7gY5zrgtQbXkuXdgXqjTvdvBuL2dtoCm9ueCHUJut8ZRKxZS54ThW7pXH",
  "key16": "aNMg7XsEJRYfTNgdZWjHbj8sxZApkkLJqgquQyXc3aUkR8G8B4CWAwHCiG3Eji6uRzd8EEncvVEsYUXx2LbaQhe",
  "key17": "34zwyvW572G8yKL91QsdmsTwauwgfGJaev7Mp4Mhp1zA6kPmN8ucczyhUsCkM6udmyXsYmTPeRX57xZyL3tT3noq",
  "key18": "4gV8z4NHiRSJN6F7MweP5E6KMYYMFfamcgxX5qU5YW4znHLQNUcRPixzjh89tv9Z7gdKz9oXLr57nCpkgd8NWQnP",
  "key19": "2digj9LGWUFyyaXBsS7XMJaw7nrXYdSsdZBdiH9zk86UnAEDqSPAW9Ah34RnR8Vv9Qdeg7ZVpUa7vnsoLAqVS4Uz",
  "key20": "4XeNQJqa3EE5ABh2NR4ztEeb99MKxZTU2QJAzhtK5LWhyXwAKwefYZr7oA6nTaCbk6qD6TDowXACb2tYZ76dPVz5",
  "key21": "25uGHBvUS5NrqYwd5WZgijMiLhV9r2v4VmkE6xf1EBKDdrcbLvXmkXVZ8Yxa4YXjzcMzeFSBDdHLvZnGU2ekx9RS",
  "key22": "39MqnJ2wPByHhkHtv9xgL6h98yJoUTN9jJuYdLEtSbxkRXy9YHfacJBJzqn68ke7kzC5FEFN9XZP7frhmLNmzzZV",
  "key23": "4RMXF5YbGYAoXzbaRVzMVJ79zKmCVMJHAWvKCXnhfi9ztQKPmMcra3xKDmM8M42NopnaTST5kdGgXJZLyd7mu9Ki",
  "key24": "5Xu7hVqexvdu9VBzuCgCrkXSCkrrz4cD164oys9UhqB9U9LEYJTPVhdyJQ76hjErbNskQuE1idetpEoorsTygZGk",
  "key25": "2mrdMDaeqwmugML6goGn9XAvnVHRs7gf5nWQCBM65BBTQEaXtxahKNuaYjKMaiZPyaV9monGU4RjWhGbsLLiVLqm",
  "key26": "4Em5oinmgh6FmNHkvP2gPZSbh9XnbBaTp1MSSm4St8HBcjymrA5nwEqX8WV3yA3YuCcpS3h8ZZUzzEs1ZZhUGCkR"
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
