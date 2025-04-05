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
    "42Qi2a1yWX7baBDFrkqh9Qq1NUCR7ui8KC4tLiRdP8aSWsNyB5C5h9fhYgWZ6bZBW9rW3EmYaMvVXw7bg2ypkpPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAUMAsQxQL1yCsBU9CiiWRbEB4WE5XRMWHzeYHjcyuKqtPoJfWkEbsX5b21e3b2S4ScWvB6H6eWHyAswiMHHbQT",
  "key1": "63XLZZXBCHbEi2rNEWuKDqimz4ENpxLU6oNtj79VCPRPiLjbzvnjqy8oEzgTPqSqv2fJeXQzkVhz4SHryLt1s3nY",
  "key2": "4a4KX1JkFH3iarZSwVTT7ScSZUne5FvMiPt8hxXFdjDXJ3djz89cXLPiAqdGN76Qi86cdW355pznbEJnNA9KEb6W",
  "key3": "5A2wzwAwc6qg7xFuaMyBj3VddyG9U8e9QgPYfSBHsKdN7Ezzxr4dFnFMiH7QMR9voEVP22nheeJVDX3GMfSo42p1",
  "key4": "oBHE5PjnThTkySyHwkyQdVSDzLGY8KugBXMDGCLfhVTVitwoh8jGazQ4tDvcJwdSr1XPsGSzcQRyMKVKEuYPWPd",
  "key5": "FGavTspTHMDUvRQ4hpmb5hZpVqU8w7Xy9Ydk1eKHcc7oG9LJej9xJWTEKM539ocR8M37THxCDNBEnBWbuhJBHxt",
  "key6": "M8bhe2UBYER1fHfVLSw9yB75TRiRUmgrZjEBHED1DeqHiSnMNbcocrzjL7atKcWWMswJvmVb8ANnrAkgSQxb8M1",
  "key7": "qEh6vRAfgqJyzqoh3CVxf2bxJ4p2vwFGaA6ffkwadNGrt7oCT4oK8ogUSt2WrYyv8zJCnr5E4qbGc17DoJ2dWEz",
  "key8": "57hcSYUTYMA84RHueRAWBYETsgxhkV46UWkSJnCE7NJih6ofcxoADmEH1KsTeHKLz7bntRyMQwqLKTy87YDGZHft",
  "key9": "3skswipPKLk7VDUPngRwdmhpiUavSAwLGT2z4cXrNfSsBPQsDgwt28PyeZqH7rHuBPkFi1HTc2gAgY3aAY6j3uSR",
  "key10": "5nym9MYvsDJSxjvdwaMrujBrx6nBjQKDJFnvD8eKrdJtBVZaEeXVUEoFFo13aRga8dkTnwEpEiBrce6a3iyAG4ui",
  "key11": "cpv3WCHZinav2HTg82t7Sq3wFnUxjBhaHQsrFoAhBUDj8EyaPtGAHEKgF6BCtTBLsZFpQkzzRfFQ9FcBGiXUHXE",
  "key12": "28QmkgBhQ6mwYdsYjwhSBwqsKxSwkzsNLroKuGKtMZq3oNQtwoCbeKDbBb69e6wtyu6VjMJzRZWxVwqiYyT8JNL1",
  "key13": "3Tcnn1NZAJ9E6LsLK7MooE7bNWwiwEXDD4A9MkADjftZfhTRX829oYYAabFBZHgT7cHiJ6Prousz9iMcnWxiBJyV",
  "key14": "4WrkVfAmij2hFQfEg2HCjwhzSAhHPuHm7jnViyP8b9LYyJwn4wenCDVL1x1qfCEspnXYgNYN2FKkVPbBVgUfXgur",
  "key15": "4TrXeRga4UP1CSGpQ7b6WQhJYr6tjfA6AVm4mwXS9kfYMuA8M9j9syMtUBwPQkzy1pTtLXDed8ghvFx46JcPmWTf",
  "key16": "qbKzNdRKu3JJsb7gG14CtmY5QmuiKhe1D529Pr4Hc2JLRqNFBvtxvz8p2Ldh9jjpEnnetVg3Zcz1wQ3C2D6oG6J",
  "key17": "31QidTGUg1zJ8T28K6sCa6949fcXvPwovppF23Ki3AYCwwEroqhxY6Jtho2bCoFNHMFkES7ts968XJuhxC7yeKWt",
  "key18": "2x2UXN5jfyh6cnhgtqxGDBfnNg2sk6v7EzoxLNR7PJ8fHMWevr7J4fAVHzW3gsQZ31YNq3vPNhDwwVjoMG8TNbUY",
  "key19": "324S8m1PmhPqncnb2Au9kz2BoUyAspramVsB7BQ66mNsUoutbs3uvsGrwtiHnsyKWgU2zQaUPHrrMaVJdzyRi1Mc",
  "key20": "2zUouvBFVC18gjDsAfkFXpLiVUfzoJ5EmKm9CRXknxnidSdGraAtNENMwBPGLG6S47VXfddPWgWSoYm1ZUc44fjd",
  "key21": "5LnNeML3d681auhkKpw6XDS6gGU7etWpDRTUQwhN3wa8D3jRuJ5sVRrvuvxJQuscx8XG1Bc9XnRcvkHfHjabeKAu",
  "key22": "47ZdE3UWeeAty7LcNJVizKbJvKZVYMPM6ieVjARmpW7GVbApYSWZBU23UxhdkUYsXZX1gKmxALNtHX1D8Mm7Y4kt",
  "key23": "5kxwM4fECypSk9QMK1dWfp1Lm2ZHzjDKzRtTVUkpePoNrYYmSQyBx6c4JuGH4GVRbXfTZjg1iMFi5N474cckPTmP",
  "key24": "5mxBWCbVuKMBPXhJrgwPtXS7zNXZB8W9DRfN2euzvN9EEpQc2YEaaKoU2p4fUqJqDSFAN5oDqXXTDXo2xMoMay11",
  "key25": "3dso244cPjGPPcypwLYyyMXUifHXUwAmiGMT4xdXnuABtqqkRjuij6KGFqHnYHv4YVtNrYdys7xQFyLVF6a81gkM",
  "key26": "4pPCZgX8pXbXKnH5N4QfEVBMP9shcZPWrKVRoh9Y7qMEJqJHkcKNyes94gsCdTZH6bFAMKMcqfF5TBW8gcG1a9aS",
  "key27": "4Cz41sDad5pck31gJebn3z17r5w8dG8xbqDtDFexUx1ofYsaZYmhb3nvXdQBhK83mZyni79kyeZGEc54eouEgk4V"
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
