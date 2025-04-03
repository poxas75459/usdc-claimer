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
    "2tuH1c86DaCfU9bFFLfBmLE96hV3PLBjnRsu9u5p4VGEQTF3ZnoEmfwDjsqEVDbQkhbAiedG5emTSrxi68CeFq3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyofdCnqvALyqMdTEfTFFSPsjaL15NJREo6BYLQk5EkedMdqUF5LNfP3y3XfCFvhrAnV6bXSZnnN2gFXMkgCBc3",
  "key1": "3dkEh56bU7uj9UBAHVi2WRndVyVMqEDuhvFfzhqjgK7dyD6X4aYNn3s6k1LYo3ocBjj3XFwpPdMyvRfyqp7fo5XZ",
  "key2": "3czxqEqhZLPFtqZGL2o4veVrUA9bJUNVwX99A5xYgzCmyrB5kG65wNkkjaDBmn7jpftZmGMq3DtFZ38udEdkNauM",
  "key3": "3cnUFA8CSMG91RZzwEQKVU2tc1Gy57TACELsSi1sATNHWsY1SD3trMT9eCYDGX4CioYzAPzkpSbMoqkwtANFuD5L",
  "key4": "zHnWT6CQTiMNRCdkHJ9i561YzdhvnsEhRQ8ekBLYCEc3Zo5eZuuhaXLjGrZQKTjyyrMAyfZsFz5EKCU65xz6KLp",
  "key5": "2GF1Lft4xRk2fjfNYTtwvSCpbtZ1JePCB1DHY358N69fYUjB86R2E1vPAecxFoa9itUFZ5tSYWYZjkta8yyuMxt",
  "key6": "2eL1rZaMz2mJMHuqPVFvBBZpUVw57D3jubxNwyKson3NriebFCuGPN9XnqFbAmeNbzzGLNh3xr4qFhVKkXXDKirC",
  "key7": "iw8EMAQ3DXUKdmQatFLPUn2E68hNURWqf8LZUkgzxpKF9qniWh4WKuFvDdnSZze2nfVKWsirzHxEswJgwaPBTZj",
  "key8": "5VTG1QgdY7jxSa98GTaK8F9NdsDQsjtdNWYMTg4VAbtuGtZCPfTHw7tGyHTByEenvYYXP4SmaJVPJrf9vPS9WGXd",
  "key9": "43CjAWqfbHzCCuupWDygvSgsrN94udwwU3J7LKhtWJ29XDYrPJsiDEQvZ81hVVAbGvY5fjDkGPMtYD7UGB7jAWN8",
  "key10": "HnQo19U1XSu7GwWbk6XLTKFKe3P7a8J6LCRhUDF9jSJuFBHXAvbN2nMj4gieioCZnLsMDrjEeUmJkiqNoKKowJE",
  "key11": "3dmTJdGRgvaZXVuYWtso8PuaL6D5ei7CABmJSgah3dMNTUfceWV1iPXBWEequiWRrmxVQ77HoAjcZuMu5MjVCzcK",
  "key12": "5yMLYH376hj4tZwYkzBLX4USB3h67eUWS5cLW3LhBJx1ZPAkvqb4rdK1WyK1Vs1cp56ewghvmDXqheNPSgBcJTb",
  "key13": "2womAZec2ukyd7uFDcYmCU7KKLrmR1X9eH6ZJctD15ik3sXaNuJKcWyxxJSDmYxLNBSXwCiyyfdvms5scnaSwHEe",
  "key14": "3wdeA8J1GM9udFWrSdCxB7gCvnU42WzJPBpYpDceR9iqgRDMjGQ59AdtaF8e1Y3NKGVQT2Nj1kkNusckM4yFZfbU",
  "key15": "3nhoypsFaqoT259Vmx53JabVf6fCSnGgDQAzwixk8q8XcztfQmbAoSijYNjwW36Ta1EmEdBK3Rdf6awEwv1mekb3",
  "key16": "4a6e3x8Pu37kricEGR2PjEPeAthjVAJe9XPWJEgFWtDwKt8vEicPVBxw1YqP4zvv3C4y6Z8qiTV7LvwsEdiew6jD",
  "key17": "9oeSts4o9WJ1ssQz6WWMSqArSXCr1hQHsCyAVEaCxuzNpiBRHHRVaLg7Xvk9BWEosUoC7DHmuGJGsz9NhWWccSK",
  "key18": "5QZzxuYgabcSA69XhcZKkDHsp7em7RzwSgwWVLLP9Coo37sBYmcwR5yMh9b2L4hrfMhMv9C51eRmohAn6iDfhwAN",
  "key19": "CK47QazU5DYrGcXb8EsSrcgzbn9MC3Ku99eJqtoBquLWPNPyiWtcyHDtkXWqhm7KmRkSRsiyv42qa7JtRQhGccU",
  "key20": "2x4v6cNvG3gQdwu8hskz8jJZ5e4GPCTffe6D9oZqs3mEuxnn2e6cKv343TtJfGy6URZ8B3p8NFKewQEg7Y7qVWLV",
  "key21": "5ViRFBz5xfjgM652rVs5AppoHyqkRc4MaZ4k3RriW8WbE9vt2rmW1qjqwP8JYQLUvkePBgMz3914HD8UiD3X9j4C",
  "key22": "4ECkMWJNrme3GbNWA6xqbnFwePaoQiPQMYU3Zw4XPu4c8vHJpv8EHDziyjxtRM7DpUUS2YruNDJHJDmMQni6yQns",
  "key23": "3VFD3QDKit2fdLG2jb2MsPKFhVaWx3DzZMcBNEbR63pw4PoCWBsE8rGTTEfKx7RLTduzseQijur4yQczWJi6nKsp",
  "key24": "2EvkjzemxGVhRGWE5GXTFSjG64zwuD9vwKCXzmubDP959p9gs5nfJgkW11uU8teqPTpNbwfrwqYZQzzmvibSQ227",
  "key25": "zaRusb6szzQqg27JqgtkiqaqKc9CK392NEJeHyaamksP4CVrtXYfxa5Asp6UfmYHkoq68xuAPH5W9RTmnR7GfnV",
  "key26": "4oMSro6AMYeR8Gx3vCnFJ6nutitHN5QxbrfeVzup36bkcBk3fFCZusAn9ukAGCQcC2Fu9kretqh42dqDBJNnr3ku",
  "key27": "2NegXqDG46eMcYAVe4UpCuXVVkxVuKi9ujviAko1e3nLYoM4ANLntsCjyQFQYq7dH12pmcG5mhviTkjS4VJsx2PC",
  "key28": "3Ad2bmUsz6yKQDUQUbyiJfWz4VCHWDj2cf88Kb3tT2vV7AXMEjnJ2DpLfVHYVyofYWfccMatZdHdR1vzMFsrP2uY"
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
