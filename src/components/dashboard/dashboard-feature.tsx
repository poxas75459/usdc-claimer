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
    "4jZ5tu4fGsX3riwyh2fKeRw4rFw7VSSkgUPA4W2y9TP8yHpK7Z4SagUvM7fg9kJYDE2byc7s1gP42g4XYQDg4YDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qoB3qucdpNVLpr857P4sXvvRYwKZ1iPgVYwNLjXeh4EQS4ercszhJSWjBXvWLaFmeWpDm4zaBgARzc1N3stZPJf",
  "key1": "5hdWoKr34QHKzpZN9UnFdSauPEsf4e9x4kg5S3zC2psEWibjDtH3QUTVyVGodT5vcK5ShvmRdegBf9retWt5fMGb",
  "key2": "5khg1J56ggjR4L8G5hkB97vnYo1bniooGEg2dkqUwncCzso8Q1j5MjWaanzb1qcEha1CjoBGk1TuEHfX9XL41Tnk",
  "key3": "2TA7YV96E82f4hdJXkmJmHdmQDXFPy3i9WJnFWxtqXQkgrRLg1cUL5GK4PbKvoHrukjyL3bg3e4Q5j2aJx4b92xP",
  "key4": "1kUhsN1ZPCpxoeBqfeKKR95dRPA9jBxFXQiraFSKfjvm9wA9oxbj1LWuga8MsB3L8GSADjBXZ32dUsMXGqNX5ka",
  "key5": "4WELgNs4YiP5N73ne4TST33oXNqWEu3oEUCaUQDnAT7AkXLzpK5xo3VRdLqmu5Bx2iddhgXnzUMKfeWEKz85DWQd",
  "key6": "M4pomjjaQ6knsWnDVLRG9WniEgQNinn6wqdm5FwKn1JhYSUN9hKJxynb3ScvA7tnxFa6qX6ESQxJnEdFwmuDYD2",
  "key7": "22B4dMX2zoyCZK6Coi524hv7cZAu2UGRB83eu7uzZpGUpihpE4XoceQ5J3jVGrCQzSBUDWYrS8DLS2GQ41jBfwj5",
  "key8": "4HmuGgdaqMFaqCpLMvnhkRC2brKXK4L77yxxyCUQV4smC7qDE3XsQiJxTb1qv4qx8tqi7TYmCPTuQfALFDtSrfkF",
  "key9": "2hRsa95b92kXTFp6nANnKfMnqCDVhHjiNBM6P5QerCSDJexbb78gqNfoCSDy3SRy741JnnBHtc8p5yos6m3XYPCM",
  "key10": "fs9ELCUoM6LE2cuKx6sHP97PSb9DymmNUXTCB8jHLpLAFL1mk8fRLwsZ4fShsV19P67mADNAqYS58GwixpryGn4",
  "key11": "3Kg7VKSr274VNCruRpbYK4ipXPNGAGGq1SLcsvxQQuNMCNcXrDvsLWYcwsPAEunb4yyryU7JDCD48XFVW1Htfd6A",
  "key12": "3V4Emw2hc1YYQTaGKQKZa5wivvLDSs9imSBvXpQRwDvDGqVvEdLjRBkVoUB6fpk79twc9H28C94YDeafArzsg8jF",
  "key13": "4R6HjyaqVov27zs6TCykWNCef45aC14ZjZM2iesWF3UNFHxehwN14Wi2KL4SWdQJWPE4vHY48w8rwWEhjbvssSZB",
  "key14": "5PexdUZ7y3giur85zce6UgJinRkW72D148fSFBEawNgDiLKMGYJAVmAtZeKTfamDShjiPxX3dRksD4PqQ1isqKcP",
  "key15": "EWBPxfgDhByrWrZiPkYoh2xDcHngPqrZnKRDBLtn2wfxQAMiRRFg9oRpZJVX2ieAgypvqfLuD7K2Gn62J7eZDRs",
  "key16": "5TKYvG2PeGhpmAtEzmQpTUKxfYGueJwyahQaruJoF2wyERgVx9ZWmZV1Vd8s6fnYr8Bq9akmczon1wjPtPPSkby7",
  "key17": "3Kf6M2P25mfc3mAp2jwCR9GuQLZXRftzJzarYMfLnYgTpTLUh3EWY5SG6cGcgWnJfZTA3tSVi4xa9MmJvzzVVemD",
  "key18": "2LWsfbJx6KAWbbe72KA5NmhHpA9xxoRNBPjL6KppHveRf6Gpjs7P35m3P9jivvhfRNm8Un9wZZJYV7XNVZMBM8Yj",
  "key19": "3ezYkLYGcyqsorqx31EFHer7WLeF6SPGdoTqdXBZn2rX4TXWx9C2TnXEQusYdy9UDNkodWcDDjr4wmLMDpt47U27",
  "key20": "3pTQBeW9WQELH5bK4qciUt8tXWHwWVmAxCSvVeaypFxsQzvJezUKYE1wBJCK1g5meNk8jL5okULMGD6VQNimrTwh",
  "key21": "da6TAbmNPxoMDp5ixty56LWm9SAezbBfiqeKR71Xa6WTV4XK2KqqqLjicziq77XpDUZFpDw8ATu7DQyQeBAb5AG",
  "key22": "4QCuF3rgNmKSN7fZuMUkWW4QRZSyvKwhR8RVAkk23kjpskWvUWDjKPYSSm8VBUaPZRJEkZSoCkmP1Wp1JViMi7cd",
  "key23": "5tpnmrc8QsrXLgKAtSuJH7JZ8yZTHJucrxFcXwUJvtNVW9sAsPmrygVbymPSpcDC5GckZfCbi9kdLWWgvJnpwSD6",
  "key24": "3P98ftJ1WLYHc2Uhh5Rur6u3NoT1YRmYB4PELyTVZzxQwGaqcjhddH8CZXBPTcK4ajwrqWZmB2ziUQAQPU8R9ivn",
  "key25": "5w4T51jxzmRD71oWkSx7NQ9imtQHavYGGPb9qXybtjcf69pTucr82e7Xpka66B8QV1T6GRFbDprnfFCBKAK4muDn",
  "key26": "KbmmBhv5YdtgApvdJfakD6FiV99R8cEn9epnKJJXiTNFLjNGSA7PGeBPUGmzy97dhRW6yEx4w99DeC74F7EVFV4",
  "key27": "3ZEcutkq847snX4SNxhLqK6hRWt8dML1S7FrchHLEzE15T8YPyW3Wmf27KxUWF3gXLvtKm4VP5k3ozUtaBTDpX7D",
  "key28": "5jaZYuDLP6fagaDNvL7QEdf7jchW6zfCM1uULCzWZc4xCRP5e32MPeTsfDUqofTvZKCQLzCnfi2xbcS6f9f9dUsb",
  "key29": "WMN1EsQeyTe89oSbAXkYBap4aXEtQQQtZDddHVUWjJzxWLdfewT9JrphEM82tecyLJiybFvrFbrFQ8ByRMKupAs",
  "key30": "54bdDKDRBK1UeNkYbDGX7Az5uiGWANNAMhpLWBw72s9zm41WP1y4Y7T7bLMBK27SYML94z8d1xx6enQHdzDpkLPS",
  "key31": "4M7KjY2oDJUXAE2DkVnSmr9amMAe2XrKXwmhK4PjRg7wELmhT5FhYqdWipg3Nm2A126MnAWCojmAT3yyvRCdBhST",
  "key32": "4NsuXvAS3LgLhJHxqxa5vN5aDbQTVtYSADJaFUFCpM3AKymkAwsiosxmAkKaoRyXUnksiP21b4ZwhsCunZKopN8F",
  "key33": "tjZmvdRvr7n1abntdsP8Q4r5QYtiBBFmowWhaEPzMNB1KD2ZUB1YrhW2eyBeom2nGSCrA1DK2JpEs5MdT7QinMK",
  "key34": "3um9Kq5SzcJWYMfxm6VZuu51V8iY1YPuRZ3ccRWibeD5rv5NEwjxbCT671jYRm4ZuGk2wwPv4oHEDMJSJ2fWh3xs",
  "key35": "4RsnHGMD8uiFUA9KeZTQoDYvHwxqBdaijah37cWjotxkSHvwAXtV3Ga5tX4Ydbi2VHB6W8MF44WYShinuQFkqun3",
  "key36": "3Zk1nkW9aFjoBqyPi98GUwbi5EKj2NLsnR3nhknNQA99Hq478vAR2PCG2JSzWZCkBEDDTAFw4vh2ehUuieaEYu5a",
  "key37": "nyBzEKukiPMS2HfAh63h9C44ZrY5ZfPEBrDC79bXTCbiaXfcHxEnMf3NwtGL3odqjBMVXAiWpB1bVKd81YkYBk6",
  "key38": "3v3wor5pD1E3Vs8E3e5FEPuzSL5Zib2pmr3eafkXyADLQ9Lre1Nh4HGkaBtdEpoxTu24g5Z85QrqQAo8ShTaxzV3",
  "key39": "2eFgecFvpk4kVx9v8n5BEjoqC5hgQTxDAAddN3jD4u9UVMNfMXXAnTXcKpSpJF9iPCu5qJzLfocZLUe6U9AoPYzT",
  "key40": "5A2Zmry1fN1Xa3sUxGUXVdXhoijSGPWnA9nZy1o7brvkHU9cGxRo8YGqX5t9qVLwbSNbkJhGqLGfrCCHTK2tKv1i",
  "key41": "3Z2uDhfCRqTJF5TARqKWPs4M3NUdSgNDimx3Zm1ZNuY6A17FThngyvMn2j7KnYhGmNweoLCCn5cFoLiFo78APUqZ",
  "key42": "UQES3TWsVQumjHyrPFdG1ZLYDuxAKLN6urpgmWoxTtLvEh26nLGVmJhKRYqb5ivJPX4tsKkwbn9YP8yuHaubSss"
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
