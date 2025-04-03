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
    "AHc1jfHLfZw8wMs7k8okyzn4M4n3raJ8RTgCy5JcwBfa2zYtYUvPRJibYZhNLY5XSF3fRZkttKqP8SpHzRyArej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPB7cpJT34Ej2x2VJawoNUNHauefvXh1z3A5taWC2e73ZCnvRrsmrRGDc9q86ed9CbGgrc4r8PmxsE8XBfXHSM1",
  "key1": "3M6ryu52uCAj57UB37QnEhRBJzxZcw4KvUatm7PMKSQymkmDz3349o3F8UuY3ptzznjSjzJX4cWSkBbiWro94E8S",
  "key2": "4ybucvCHBgTyyKAMF1F3u9Wf5GJV4W2jyzSVshSU1krzdjqBgqR7Ytedmz8LaWdyzqp5QRvTipd2FfvVtVZ7BKDQ",
  "key3": "5LyMYoYqV8yz71s2VKSSX2ZCGn75LX2t36HeynZK2JCvemF2NmiXSb9ezYLfduECeioCxvb5jQ5HUxHpkSeswySm",
  "key4": "2cqFZhL8vF6sp4hCRutukuSF4uaS1FEmfNUgHgXorMdMFUv7ahVWo7CK3ounmxaWRNu1RLdkAH6QhePjAkyQFgPU",
  "key5": "3zWG2r9e7SutkLvPtCymSmi55dJEu4Y97PPCA7N6d6o6Gv28jKTHoGPnY1VbG2s6yp68MVBJuQeRfjreEy2TwSJj",
  "key6": "2uEqiXfCiuh3fEBdDqnYb67wq5qYwe3Vq78yZCWHz1sjtmPVgXbquNCMzsFjB29M5rbdpUZCGMJbPe53CyiBkjUY",
  "key7": "5PwNyN2hJbfi4xPV4XZQEFwE9tYZuWGs1SRqbx7i19Msg1SSijmeYM9KR4JBkR5Ye4sG66bjb56wZLFkgxdRtgb2",
  "key8": "2BB42qAHEKNwaHJw2qX6xGGfxkSQSsTfcvUaqBEphC4NUBBDNK5PAprKN6oKFYGYyCgqUg4B23JfRWStyHg6hEYh",
  "key9": "4qj83cf6swJJVo8UtLqzTpMj5jqLEgkxvmVwtqhF2ADjL1ukFkHxVia9K15hvoa3PAK7orCVQc4xEJjeZAznV1BF",
  "key10": "XSs3MFkoDnCdFGDTyiDE8YLdjVgXgZ9uZarcF6RMQbZH8sNf66jMm7iNr2RtxgCj1NqAvDXzef3qUnvyDPWi2Aq",
  "key11": "2rQuviLPPUiTPvTTF5cydS7jscXvpmdCHf3RYA5YY4MbFW97t5orNnu4RheeMEwtm43uwXLBJGrsXWV7icM6mGmP",
  "key12": "26ystF6KYbXRPJHCmVnNAPgWYGkNoYtvRDpJcbe4zUhezJ5L6HV4rmJhuB8e2PdkzKfXahjLvbvwpHueV4e5i3M9",
  "key13": "qMz7C15G8naeyHfHG5em6FXepGzCxoQ7aDLjMcK9zJrxjqi7B9aa8qfv8naA31fSPgURSCuWni7yx1Pd5vXG7fh",
  "key14": "2bc1RLgZpoHXSs98ZrLFY4uxbpf1auECUMD2vpyQd7FDHQLGozn76z6jrNoeTqPkVB7CoW7eMWT3oySh3dJJB4Xe",
  "key15": "54wBE8QVR25mozCK5MyZvmwRoX3E4JTUFjr1V8a7mGo1qewFbqCCpsSAxzBoxynyMcPU8RDGH6jbFh9LhZHEwHew",
  "key16": "3e3Y1L1ZQr3YQMtGpoNabV1MESfweU2NbcJjqbRiLw3wtXNRtGqgnKEiacQCuCuTJsc8TCVY5wKqQX4pZR77dbeW",
  "key17": "4GRjpKS5MJpGSUnxLQivjDK47r2Wh2uR7rBxVL5k2Ad9LERbqXxoKjRxVySV3Mn7JTU7GdMhEwhDt3t2CvgV3uYA",
  "key18": "5Sm48XCuauvjtzK17JgJJg5MEWdEKsN3FhBeXoPQVj9dBcozGp9WKum8J6C4TyfYBMFWdma1CNJYV5CcTPFA4b4y",
  "key19": "kY9RUUWLqYcB7c8UvdZsR76DGZdLG6YRTMbEEkaC2k5NgZE5v4pv5pMEY3UunE1bXCsGdJEHWTEViGAXZaVPPWh",
  "key20": "5HcfHNJ5XJ4CWHRkytkC3oyznwGqsZ3n7GzGytjbjzEMdELV5fWxa8dcrY2dnUa3ADkrZKueZtgTGtNH3K5kftmy",
  "key21": "3nCQMH5T9whZMoUkJGhU3xYaYNQ3DaZcgY8eqHtmfTsGhB2kJf92cviNc8uKQcZs6CqK7Lb61czRHCxPmduQHUJZ",
  "key22": "CqKQU9p6PhLFnDD2HA64nKAVE1BwtesNmVxEAqvNzQioJaNVgNFNouLsDBgnUBoNuHFHtnGN7hPGNJvbVoHgCMn",
  "key23": "2afpq5W5rz26DHoWdTpDSfXEeCRiKWSCBmVNQRnZmRpVtYNz2nUg8jNx7VrhwBJePCL5wdgNaZBWYUegrXQZvV8v",
  "key24": "3Sy9Eht3CayVgp5evniP1xWMWwHf2X9pEz8ZgNmdx2G6JA2J9JAW6YhTNaEx93R7Un6tRLLwphS8n5EtTGaX15M6",
  "key25": "rnYBRXQc6vwtAPDYRd3mykeMz62KL7SEiD7cX4zu7HBtvjFq7kWe5UC65Czi5emKqHAtGzM6K2JLkUZyj1LHZG1",
  "key26": "egiDSCrtzQnwrzAYwssFg92K76iBagFjvgfS6aG3Rv898K8Ym9VweVkccKixDxLWspqNMNeeGBUc4LvxRXYv23N",
  "key27": "3nP5zHkEe1KaBPNjg8y3vmx9VnxznMcmEe6BM41NdYZv6phfj7j9ixhazmRa38e5AKEpNtpbwbozhMy7imY9wrQ",
  "key28": "3j8CE37wXbSGijUWa9ojYH9daFeiZYLrBNfu2Hm3dv2VUhGEWhx7mR9ZJbbwevUAptb1tE4uuqGs298LJ5tpyDq2"
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
