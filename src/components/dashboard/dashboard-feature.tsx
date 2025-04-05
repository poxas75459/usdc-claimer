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
    "4kPTWtyywob5oADoL4e3NjZiotLb38ciPcua1E2ErngRVC1PhERfR15woWvHEzJEkYxhaWHNtvcSfYMr1PeoaD8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sUnHivqgcFUDgZMWfhNE6DMur2CGRdg9aC3JWAmoZxpRCt3ZMc633Ksq7reZupgWLMjEZKxPADGXnS9ZK5hBbk",
  "key1": "34Cki17ivgnxS7DMqgjT2JHLNYrGzw7xHR5Aj7NL6e8QAFHT7QsJppn1xKG8jCUURJVbhc9MwU7eRx1sgT7R7psV",
  "key2": "3SZZQSrFTbJhpoRdSCqdmFDv3aeHpawCdTipVug7Uhh8vjJxXgDjfmb6zYe8tda6WuTqxWUg2m4t4tjAV8qZCn16",
  "key3": "3vYt7eTSVJoSJcJjSdJUJ7DEPcaoP5rpeQzJoxWrhxEMBMkoZRZAki2hcuosdzTxY7oLkiNgwY8Ti4oZbC9TK3CW",
  "key4": "xxqD3Jrz8RY9zrcKsg18UkKNiHBEQoQaJPNy1KYSiAEkjJtDWfaynPLuZMiCw3q7s4pWdj6oPBwtrd87b9vZu4r",
  "key5": "5yuB2JmjyR78BkCiQymteAT25XuGx5wupHixxJyrfQp3r7EVndS7hBbtBHgVVtwJdyoZvmUiEqe14AU4iE8zaTPh",
  "key6": "3R1itAf6kcpJ7RFV95kQWZte8vndXw2KFEmxRCfbcbo7jaRyD7KKFvbyK6kh8FKZr99j75BE94DD1E3kvgEWHyuD",
  "key7": "2t3y8uZiS25U7oTZUmmH34m4SMJbwJN8mouwrDBnEihb7SfttBfJF8RVV3cRZASZxUFLp2z1CZQabXkKuRiv13sK",
  "key8": "Q4gdsPFRgfgiroDoUNmvKwA4gEbuJnQ9GaCjbL1LfCADvKnoNXUu7PR19FN7ra63r5wT9Fa7LHaMEuUua4efhGV",
  "key9": "2nwr75FdBx1Cg6zKvGHehL8SeUpQajJwKxjq7n6c2qe238w26bEPfA4WbBo1yYeHBFrMhYe53oaqBcUQkmPn19u",
  "key10": "4BQJpRyPXECgGcxg98FZae2akrT7powh3HvfTHMTV7FwMoZZ3rsnRxC5gysdXBUJiWVn8Kw5LCwBBzqdsMWYNQQH",
  "key11": "GZ7ozKbNC4Y1JTazZKgYTFzXGgkRbxZEVGX6vdvzajxECarTkKGWV5Wj7Fm4c4YtK8YacwmT7vHC88Uh2CjdptS",
  "key12": "3TFEMzFH42q77gNFtm5WHcFRDsM2Rnw6eXsaGdkGFfq2xiqSNDCC9oSBNm12bdFEfp1KeDPYBo1UVK6kFYX4z3DW",
  "key13": "NN5tSUM1YqcsfQFZcsvSj86TmcGd2dCLysmEhsuPRkMirY38Jyt1YY1yekcYgrwDusvJ8TyfDGmoWxmJm8cpkKd",
  "key14": "f7NVkmJ2kYVZNyqfYNpoQrGduYVoxH2rEvdehkY2vviEUdCDGsCqyNSBJopjFooEvkVadq8HxA1kAJRUmcm1otH",
  "key15": "3NJ49bFnRzKW9ca9nuh9tcYgKHUtvn6XnX2ChhB4pGQgqdF8WkhBxk8bGwNoaxMCsvFY6KD1RWb82CNgjeYqncQe",
  "key16": "2FqWaXU8X1ahw1143jivgZx3NH35VG8ia8QiNKhSN1yhQ2Fa9LKR5x31kxGja6aqvJTPJMstu4JXi7AqwME7sTRA",
  "key17": "4Za4M46cnctcuqmMbh6aWLKYbp1KsnCSZSup72YrNHfQ8Wu597LpicaMeio2GeEgoPNFXNfHdCD6nQrjBqi5zKP3",
  "key18": "5pB2utbQAifpeG8fwRHSwbAzgC5dDHaPHpw84v5VoJZyssn8Ax5QDHYqjQkfkrwbTnFgouRva7K986fAt4BaBPWY",
  "key19": "4vtVvZopBGL89Jwy3cSG21QC1oKMPYTZ8ndgyThPabZtMHhLEMj4RZAw32q8PiVmm7GDgFBQQpAWmrp2G9qg3Lin",
  "key20": "3tm2k3FeNsFMfvPZn9WhgMVAzbp53NRNDFj5eV578HaTFKS3vEcHvNcoULEWpKqsb7QrahhdUfmWrqUjdmjXAFiT",
  "key21": "66Jkgpq4DeVaSd6KAFsb2RhcnoU5RJRQWjvXfSi86vcECzvXG1u6BNc2f3widn28xrJqRCDPa1BgPKxYE7T2NU4t",
  "key22": "4q9s1qdAiukBwLiWU2XgVwZnXtwDxAXhP9kienYcboHJ3Sz1eoPgMmNepSCEsYoJvifg6yakiF2JmPD2rYPJvQvg",
  "key23": "5w2t8M3yYY3zm785HnwrcTCpsu7jt8DarevsSNDnfKbqLoeLdhyePsh396jRjsZpPgiuJijWkEQfSW78hYZgYqRq",
  "key24": "2wovCuTDaQqC56Z8v5zgfQkpj9qU3Wx3Thkd3e4QXSNn6KxGMAva6tnApFMH6akAASxmustEo2GPQqfkCARXR3Ec",
  "key25": "5gd9B65ysizKueawEVKTcCcsbYPoDVSAZ2sbjkvbdAZwP4VqwZBhbW6JEeRg4hPYeVMrdgkL5h1j3krLXVPNPc28",
  "key26": "2VFmubHkREjcJFwwSKJB6xo49fW6JT5TxpTW2PySpth38dgY3KEL6A4dp3x9d68JSeCBSTxkGeHuf9WtNjtkFswJ",
  "key27": "2W2vp2xf4G92VHXYTsTkf8LUn1myE7PBLJzKqJL6reNi68YbPCfJVKdVjZogpweZAZEpcCRsZXMksSiQsuASBudk",
  "key28": "2XHsDb3g2xppzFtpjZdSxgHyu88Tr7B2UeGuCrWzCqwY52DvRXgMF2a9sPMmhRy9KK9PBBKpah7f7YGkYEiUXqMj",
  "key29": "5GE8DT43BMCtnfsX53jvUkajrChDojm8CwxBZ8RPZnY8yPUWJhE2urzXgMt499vDBSzLrufHkxoafMcDvtDJoXy5",
  "key30": "2DYfihu9qoUHpaEBc1rUmeXuXr5iJEieYLkZrXifwHeWaLEsyeoBoPzwJKVB9UnESbtvMmqJQszApJG8XXGATwpg",
  "key31": "5vF3Nr59obRfPFVTirGb7r9KaJEu9fB5N4rGvogU4CW3Bed5JtKAGD7uSr33pMVFyQqJTYNQkhpTKUS5tNi4Zshc"
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
