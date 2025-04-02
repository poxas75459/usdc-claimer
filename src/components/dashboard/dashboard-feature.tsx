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
    "YeqZhzDGghwpfM9MeoLuF6FdyoH8o56z28v84Tt2KXCx744Q5euAhKLmrGGU72WhZd7FKaP8UEhYwgZABdnKcdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTs5srS7KYRAwA3kHkSHYoD9z3bYoZawvivS6oCLsQ9t72QUL2bPy8JhudKzYcseV37rsBL7ou6mfLFoJdW7JAU",
  "key1": "4D5Yet6r7LCrbBJQP9GSVsEzxHwhoqRypx42MnVEFqHsW4G3bhWuFWmQXUErMyWB2L4id2FfkSrvvYRqwnNhx2PS",
  "key2": "3rbJXKrnaa71UJT9tPqGb7ugz7GVtL8K9pC5XP4QwDo84PbhAXoJLV4HMhFSoy1FyfA2oXVfNE8tezuFRns4gwYu",
  "key3": "2BUFSp4yBnZoatU5h43u9Aso2wNcXYartR3dXjjcAfU4Q61VPW9JUUpUVqRL8W86ZASQREE47nnDVuBy69nPksat",
  "key4": "idyHRFZE1KF1VjEoJxZJ4UYwZxHHq5zuStEqWSz4VvT1ccspn2pifNz31V21br37dg9Gy6nQmo6mMrYasnZpnhr",
  "key5": "3RoeSCBuhtJGEnTRhXSAVPaatANyZrpqEFaRJhs4hurv3Vm4JPMo4XyRS2yN3TSRKDZRswRj2wiEXKMRjBzNudZT",
  "key6": "43LZ3EmdhjDTHu7VD7JsTyPCcjgxsag3TUQnDyiM4fZXvT4wfnJJrSWvSBfDvZ1v4QLQk9A6SRZ2wMxmdkd3xJmi",
  "key7": "2v9PQdULvedCR1PSy95WGJ4RMDmxYA8kepN75bY48NytJpax3GRqpBFtUQqYhu58emRXXTunCCYdr7TdkBsB7Ad3",
  "key8": "2c99eYUr97cX3p1Qox3YTPF2tARTU6JEKPoT4WxzR1h32gx4Y3HA5BRFJqWKsRtP5kFvpZbmWLAEv8NvDDUbPNWG",
  "key9": "4Air4BBQgCEQpSvrF3EM6M7xh9eLCXjeRuGUn6MS9sxyEGhh17wdZijKzFTFntcE3EGjQK6CBKnoNcrSLoh7qWQ",
  "key10": "25M9AA1FhVgVRduSq4jphfmcVU9EmxL8HM6TJFH2vEPBQw8NLV54KMKeSGCftXe8tysMXUWeGpDa89sPdzmuGntT",
  "key11": "NQjTeYtiYXLMXHHkpDiJckyyhYPKS5rnvfcVHwaAAjyTaRZe8Jhys7cyAVLYk27BWnMNvHxHcqnh5GfMVowf79W",
  "key12": "DWn6nTqEtmk48ixr63JxVR8w2NXoippMZf8NNDtoN5pyWLHCYTCcQLccUntnGwyknkp9jMG9sojPUnbba2hGrTi",
  "key13": "5gDEo7fZ8RUaHqnGQfb6BeJgue68RFxBa1ZqhTcYjuco7kcU2tqPEfYWHQGKZmeYQuTeqEddxjBwMBdToDrBfwGp",
  "key14": "3oyysAnx7KSH55bKQy84u1qFtfDZdW4DgzzzYTzZgnsVjLGLaCsxgYjnNVYSeuXBcBPyqdiVBQZVynFQigX5yG43",
  "key15": "5tyuvRFUgEjVAGvagWVs37CFQ91SXcRmJWjU55Jfrb6hRRQRXCtgvLDgM7stmG2xd9mYkMzjcFn8sJTXxjLZAemQ",
  "key16": "5YiwEEALMVQijiCeLX7LTf1472hDSnV8KWfGjuw8nVGyGmiMUcooRPJWMEYz8hmqovjpj66w2sZevnvRm6Aqc46Z",
  "key17": "3NC7qjiJe7P5CrnJBQZLcoRkNX1dkKBUtB3rMX1bRiUProkEwkYsRSaTiH5zBzxJWAKF5ciuBcF8NjYSVJkub51K",
  "key18": "mY3AuyRNXj4dXhz6PrE5V4G3J8Ag7k4UznA2ypKfrckhADYh8eq7q2gwGjbqyEEr1StKHssav8pMxGjYNnGARgF",
  "key19": "213oVF5NMYL9rwPKqrSyZ1F9PdSLX2tKyNDkf8pYT3PpHDk4KqJEc4B7xprJ93CaiFBAncda6LfQMGGekQtR2KX6",
  "key20": "3SrEz1aLfmSD3ZkF727yhzSiBpcF3tLjzuKMszoLP8DaNNrMrnVZWBVq6eoJxrcj5W517Y7UXLiFvYTjU3bptieG",
  "key21": "2h3UKC5SSGKi2x8htq4SrazGQMjPGmnAJhxXpRGLbsnnicyjGxTo5rARGsnkYEBgDMkwquHYGdejHW2dSwY3jQzN",
  "key22": "vCwma81Fwrusn38BRG6gm2rPdTWWEpdk9a3aFF45RKAcbp4x9zZfGFkGUaRRYGrmw9fE9F2i3bfHW9173tX7a4U",
  "key23": "5e8TH2qLxKGbjN6eApdaStecKK6W6SM1dsdiidWdrhNuytkcg7uRg5sGpNkQUt6uEpE5RXY2WRij4ANuqPfBp5Bx",
  "key24": "2WNioPwgnL6sJLQx6DW28yKGXUazNEGqahDucHRdCdKA6j4UGZ4gwH762W5BRBFrxsyjdUTf7DH3BsstJmgGUVSU",
  "key25": "56hjsofhxroHwpCw1HupwZHAxDRbV6VmMoNwtxPRnrYqctqYnKrBufBUvcmQtMQu5Hw639pw1coiyKchMvXddkBr",
  "key26": "4yfJCQoRmCLRQgP2dsG8NAPbQrGgSRLuSpceDs8urMxg8JNe9kKnZASvaAYFSdgJkEPHy1hsWt6HBo1uqnFGx1io",
  "key27": "4jsQ7gsEpXZ79zQTUEiwXecLcsWCnXn2SJqWGsiwAe2TMDM2gjZf2qmPPACcADqjJwSNA27QBKoxtjzsNPXdvs2J",
  "key28": "qamuducyd9GydvSjXywY4UajiuPJP7X6F3fBpBCDyQBebDrBZd9qTnMrfzexY3Syrrj8HDoLpYhWoGYiAt7QP8y",
  "key29": "4dyWzuH3JNj7mE3SPM8qietqtUNKMYVAe6TCLzTfJ3rnEvyH2TT6RRihrZywJ2jFbiWkXp1PBCdH7336NVBfqRs9",
  "key30": "AyuvyJGJqVKewe61vRV7Yt4HXcZq8689cukcK1c5kpPuX3mF84Pd6KKHVQ7SjGMWWyT76dBn78W7T1hAEAcaytX",
  "key31": "4LuhVEU2fNmfaYEz4qhjBc52E7p7ca4UBeWGnQSXjzFZmkfKN5ZmsiUanqgZvvmbh5TQHMFNxPJS7CCYxvGFWEDv",
  "key32": "BMf28FXZuLrhPShas3gRVy6umBKHSWn4iYpsUzr5EwjMZKf1hgBha6Z3Ry1KKeS5mayoHHuD9vEtEfboxMYPEqw",
  "key33": "2WS8ptinNTgUuQuZWKijjkiF9qdM9aqFSzB1RdLZJ1tnuZUgcPx4KRwZypqtYYj46e7johdgmkFSu8yfwmR4ep7X"
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
