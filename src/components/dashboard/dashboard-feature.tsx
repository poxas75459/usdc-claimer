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
    "2f1bjWkfYXZs5cQWukPdNxBnGzL8ucsz6pnn5FCkke327zBMVqKoY4afguFCfz1ARFahAjapc4GpE79siMokFVW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxvNaKaJ89jsjAk4ZzHUbJmxh2op9ESv5azsGEAm8UJuP5NPGcFfGZJtxzQ8Bya192peTkzGc43fgVxEfVx8TYt",
  "key1": "5K1VUc7zCvUaeRxAQ5VgRx9LCs4NZLzxrMgjWFR8DGsCT1zBHjDGRw6j5FUtdvgkBtLZnXcbY4XR1M2gWpAHeDmq",
  "key2": "WbVed7DTgcQTHQiR598Ppi8UU2kkpRoYRZhzsWSQSJdQosrnjcAHnfVFPYCL2aM9z7K2C3Sf1pTjy1QgEtKmTEf",
  "key3": "3xSMxCcRa6xj2HbtYTrvJxHSsjKDqAVdZouugHtJML1ETPQXYbanXNeTm4A1HMGhnTpZY2RyZn8m8nqD3vt1abXD",
  "key4": "3Xcw1c8dPfzXfZnEtJeSEjW14LQpsayrKFCGo9CSGDWL9AXXLA64aY8sg1oKKvjGBJUzUXSsAYxzwLErrspHWcuf",
  "key5": "63EcL6JdphpYVrwQCHnRKjBB7BbKHP56rLHySPMGCEE4574Q1vAG3tmRZ25QURhG5rGHATPzHG5Fr1EYNVYJLxo7",
  "key6": "3qmvQEKYBFhvERvLqYLzPMzVz8kq7YnWkXdMtCt7ivhL9G1jRrcAuMea2BHoVBym3BSFivNYt7JjW2N9FAviwgPV",
  "key7": "5Xy9SRPmugMsFaPXPXoqLt4EQ7oUo3WDLfr1S4MyhXhJNwq7TW4VUGa44B29Y3SCWDMWCgEDVaKBFagpumFc1NN1",
  "key8": "51V5u7S4Gzx4VCeRxmpwHiuvQJgti9MazH7vBroRHZm8rNNjNx7joHgfTz9udadKNeYuzdwDBRNVNLHMBmgGactr",
  "key9": "4K8c2rrQoSp3ckDj3Yjy2yunKLeG68VawejHPbjs5p5X2jXDZBbNsbyV5tPfBPtaRXQp2T1zjbn3PckfGmGtSAs5",
  "key10": "Zbikijp6WUiDTAhRAaFJtzA6Th8Bn7TyQrQQB2VygkWAzoWjwpDVu21RjBFzLsSsXbuvBLymM882p622FrWdosU",
  "key11": "3yKE8eovRqmpCbMyDeYWUEsZWwpcXEi1hHWDAc99wrkFEhq8yBeCzgz4vqUhrbLgqMxALr3uFmosHQGsMLRZJhJj",
  "key12": "tHM8KfprXRSAkXcm6vdnPrHM4DyrbEn67JLwpeUDmQfg6XXQAeTZaDHjdmg8xB1qB2SfSNbELxfR4wRoE2H1owt",
  "key13": "53mZZ9kkePMuQU8C1WwNzRG4L5Tmep6QY8KEw98NwMQhpWunEScHm5UWJBQUtRJuZw3rvaPn8GFmkLDZwfDQgtpP",
  "key14": "4S2VVXbboMkdG8cEcui69552CdyQiuuDdSnXjezRhjXJjARufB45rYpSLvuNffLmvYxSk8odVUaSCeDwn9nyfJ4t",
  "key15": "2zdKQA4G4XrnWtuKg8JxFCpv8GQP3JpQxQNgyFdMPJCyKQu1JboeXZrkaNdMg91qhrLhmjU7FdNPqaFappnYJMGT",
  "key16": "3nxfjAp1ZY5XeH8Um8knhuXx36rMVPyRg9Mg6A4NwZZPpXjfsePAaQNdf7rsTxje848XKwuzUNWUt3Nu8cDnLruR",
  "key17": "WwUqqdeSoGbC2Er2gCvQf6PDA9tyFUKEJDUUiwx7KpYaQgRcyMdwbzxBKgf6bFG3MYyR9Q2GB9apcFNESKoxJww",
  "key18": "4tTzwTYDbtJEjiy4YkY6SGBhZz1S16aR4MF8m7z8B9dQXQJ6hTasSxiR8VvfN87mFRW1Yiutor5VTk8YZJZx8FGz",
  "key19": "3qSUTxJYaeoBNNN8xhMpZnfSBVRGuv1HgMuu4bvDh8BBNCC7HanVQSYoUafCwfhqwokPDvdmgb3Zr8j2pUFEK4QS",
  "key20": "4sMERHmvn8z94eBMS4WW46ddErRfnFCnKQ2C7yEL8j5pfAYPsrZGKspxo7fYXDEYaDkvVRVedag3AtWzu9FPyaTX",
  "key21": "5TvM4ojJtdvLQAvYwumtYEDFuCKpZ6uCwLxdrdEiGykZNsJ3o6WaXNbnUu9KEutuc5iMU4Hhhjpu4L4PiZJe6YMw",
  "key22": "8H3QEtkAabwBWccxyoE98owoF6mPXnENNdUkNLdnKqp2rwKvYorQtpnRAg7Xj3AkeyhVbvuSANjB8xvnAfi2Pxj",
  "key23": "3U3kcoobEVk8gyJMD6ZVDpKWgRzXZbuMrgEYeeY65RT2u6rVKw3fds9Wo42MjCjT4GCqBRchFC6CCiLGzjjaGurA",
  "key24": "5UCgPJoyoPPojRDLdHzPxpffCQ7xWfxYKYdLzQz6VU5LjreYmRafmWjfVGFWGg1LMTz3TRL3Dju5ByJcuvwwQwu4",
  "key25": "5j7b1A5D3HjRpNLuYym9b2kUeUh4rgRwrFknX4fGrRjcg8UdEBkC1KEbD4z7omcefNyJFcfiFh69sfH2t6J8Nuic",
  "key26": "2oGBTXNTvHJA3qC9z49XShJHsuz6Lx5Q5ZRee5ZqGnTtQKFsPaSwfsf6cauYL2mBzc82VMrNq1DvEa2pxVBR5nEu",
  "key27": "5CSA3wscCNWiRzdfvqqAH7nG9MEdRtWAjPA6TwJVgApZLb7BCFz4Yake4bGaDexiTC8NwWqd2u2ocuFqc8piZRoU",
  "key28": "4EcbJbYrSHRRAnke25fwvn7GvCGEAJHM2ixiu36vpN3CpND4nT2JyhWgpQme6LaGEduBMK6CbkzMD4DzGSdEodk5",
  "key29": "XitgbEejhkFVcDV6Rx3DjpivFZjATUStAX21DfVrvNEVG8nZW1yWRp8BSSCqFYzjXmGmTvbzzev6nPUiRn7FvvR",
  "key30": "3iVgMosL7UyZb4P4VtEuZrYTGTJKJxrwy6NuoJRQuNqLP2yDuDvyg3o61WUbxLcfCds7vgWEZBYq94bNSxR877bJ",
  "key31": "FDtrrMo2dfizuGohonM7fGAYFmx4YGf5rEF434Fjv3DiAg8zde5oXm2CwZgG4cxxX4t31vQZGV37oWKpVBC4tE1",
  "key32": "4xEPouGTE1i3V3SCqM4kt7Yh2VJKbFXDpMzL8iiaC3yz3q4ecikkD995sd13wuL3rS4E4QKLEru6bp7qpPyDietT",
  "key33": "5BrqKdvRCmWb3urhh23kW9VCc3WHZZhx4eqYKGDRX43L5e5odz7Jeidhp5Qo6hDcKjDU5bjiKvkbGYnY4D4vf9yZ",
  "key34": "5Vmk7oGkC8s1v9RzC8NaPwgxit11sk6SeUs31ffoLTv6zMMkKKbjS6KGYmyrbybUQWfbihhWv7mGzw9eJvyXTSt1",
  "key35": "2jSvzPuzj1rFvvnPD2QW1wvvfnJ4Ba3VCbPCq4tJcZJCE7nZvLrKEdPTRbQ16PThndb9brUqoe7ie6ijy4AGM2WE",
  "key36": "hkwSiCym8pKzT8xxJi949KozHfsqXw5Hmnm4dUx31XWPzGdJ7fvahk7qgNToUjnzSu3bqGU61w3LiiMEorrUVvf",
  "key37": "Pzsd29qpKwM3Lzs7iAsFiD4v48M7N2fvTgNpvgr1sb75342Lx6haYMUBxu5v8EakcMJi4EVtspDjhLV7NfvTsrp",
  "key38": "4b8AugVJE5zFkyvB5uW2byg7WfmmzU4iDut97T87S2fNcVj7umZuZx6LcVLaGNdF77KyYQhWdgxV6oc5KAyW5t5S",
  "key39": "utp23xx3nPtJ9mXA2waA8GA4b6MrS1phDfVHU3tXfvtqY3ssoQPZUCrhm3wgS99uyXXsbBsaSFzuC3LFBwi9C7f",
  "key40": "2HXFinbas4Vq1nU6GyCqaXkcAoMA8uddAgbhcHjKcegP3d7ReACGDwq7MeEka3GkKHe2MVyYgVF16Vdb6vgm64Eu",
  "key41": "3GzVjqxayQ3TzDqfFDqpt2HUAveCXfBTmuzVpYohfxEnLoJYRciXesNeF31rkos8sK3nC2x1AkvMAyvpnqfCy7pd"
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
