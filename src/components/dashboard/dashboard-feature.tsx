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
    "2GW7x4VeY4U3Cf6P8pqNbQhdgJR2X8vLhrUtqiqwKCke62aj57cbXvD24LrapZuBeGn3rPsXkjb8UiuT7ZfPT6bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBsBCPkMVFBbM7664cjiN1r8supYoBzGDd6hhjsLNEMrtbZJZds3xRWFvWMtpq4bhxudXBZjeEfp6MivTPBoxow",
  "key1": "4XkfzKLvXnaGUd2FGDL1h1KJEUk6ZfgZtCEd6K3VM8B7pLkbVur8VJwnSiTqebzeB7x2SY1oaPcCKrGyXro5uN1V",
  "key2": "3wLz2qozngXReDiwvHzcinNgYUpmieDMHcC2LUmaao8Y8bjzCuArJQbeSfPw9s2DRwsiivKFAga9ijMXe2UKExmQ",
  "key3": "36WSLkbhXrG8pzsneN3E8FqY6DEjk1bwSGXGPBZ7c4HcC4cnLmWNtLwcSTeMBB4NXeLwC6srXg3ALPWHteqadqHx",
  "key4": "5NXT621ZYbpVE9fxMc4aL9R7QYxqJCpdPYKRaBaSdqGwtmCf2NwnDT3vf2CdyMrvdvVUD9tWgCLF7UeU7uLoxJca",
  "key5": "3cMcFGvZxX8nYEknm4M9Co7L8D3S7mUCt8kU6udC7F7g6moy9zcoA5o6YA7zhJMnGd4fwP8XE9MoZKHza8nTXAcq",
  "key6": "4qUtCkBA9jHfSmnBRYTJ2Tp4iWxYVLKfwsRWSf2ij98USFv4fGXB3K9RggGy5dPNcwPaazSxyHu1w3dZioDkjQSh",
  "key7": "mcySSapz1Jw5E41CkPn9jX9HuoJGBNjcz2zShmc3VsA5Yr591AMG5jPtGDs7QTTjyJEmQcU5KuHywzV362baDno",
  "key8": "pzrUMXnm2XqneKqeXe9gp9LfSwCDwdpSyyBoejbHVdekToQKDaVVVcM9HzA5XwRrcsfk5risz1AnDr98E5X8kkP",
  "key9": "2wjD4iG8vxoKEUwxZmmrP45AY2LNz5NxvjBJHmFKwTwzTAZ87sp3BWjkPpy5REVgSq5Yfdx9Zmu9pYwuA44K2iF1",
  "key10": "44zsg97FMG37MmQYkS7PbkjHNKYdoTjAX7YmRcitEcJqVux5LQSHejgAfFuUCyKmhovXJPjeUGcvQSwdPPJ3yqF1",
  "key11": "5TxUddpHzgydwpdwkmyXCp9ZCrYXiRwD4bXCiQeYU5ZyxJ9enFAp6FrqGT3DfQbQBpa9CBwaUgBshMQrnDtHVjp2",
  "key12": "4FwvLSBLmLUns8GLswTQUYAyQ7R8Wb3GmuJHv6Acuk9aW3NearC6t4pjzKXNykwD9haZtCLDX5c9EVGC2cQeYXsv",
  "key13": "4JBpPEdgQjBCqcQwaiRpNMngvkR4HKgxE8M4n418zGzn2FmTrGAyrYDYznDPKY5pLbPYo3KuS5x3wNrVJujRSDxn",
  "key14": "496p1MZjYTPFEnpJ5vFkFJiCdDkuonFW7g8nsJSsaETegWrwg1HHrjAX7tLwpWNjZkxFBV93E1Y6LVL578omXZHz",
  "key15": "4YyZiBcLHVYdVziZ4vUcWK6GhG5ZXjhW6TKvTWnTP11iHxtSnwc9FRFP2jGdiShhFqYzoZrbYEin5oW8TJBAPjyY",
  "key16": "2oquRwajWZCX2f5qgGrjAGzCqi84dNmvyFSXPHdhYE8jdLdqXcSjBqfrhBcKD1DAK2NbKSfEuXc2meS43T9pKYqS",
  "key17": "2AtdCqcrd5FGquXV8wJQScD4hrmGWdrV9vvk8S19RqiLNeYETaYNeRzUv5MgZKqoX3WgJy4okXiYySzhhMTXQ12Q",
  "key18": "4UxtAwmFjDraCDk6XNAExNqha9EasM76efRBZ8a6xY4cWXsHM5iLsEjL5WYncNwxreuMoNUsHhPDXDgwE9MgotP4",
  "key19": "4BC668tT1yiQNyszzj4t3pCf1qToqtwejwCNCbbWZmKzF5zjatKmMx1soz9cVhu3VGL6SVweY1CRntkramBstwHT",
  "key20": "5qZtSM3LU1VsBk6T8P4wCaUvEmkpNsbojCMU1DnqnEwNJKdS4eoBnnbWpz9D3QJp4TfqicT8mPKAjYedj9rgnnMu",
  "key21": "21ynXG1FxCc6j3F5KekrkqPdAbPmwjZe5tU3XUWKTpgwi62SeQy8Qb7okYwr6sxPRd57jHt8vwgGs8eDRvnTN994",
  "key22": "5Nvp1y6iXFEUeQKpyZiUhZha4BpzxppJnBUNiUfuWULGiekP6fG3y5MDr6cwFPhSUepEfW2EjDhRKdQ7ACj1M2Rw",
  "key23": "4HcHTw1oT6ieFsYVegeAgsfUuu7SiXXZ1yWk6egUsH3vuRUHNjkCr2wFuHXAmigbKVSSAqV37R2BgHjv9Ex8uCgX",
  "key24": "AeMAbUZcmdvT2mTvnsFnAyS65M3GmPRXdwzY97NBaBsjrPhmsNT4mkFiYChQUaFe91mgVVGM16zkzc4B2kZrKQv",
  "key25": "4Ngz7S5WhcX46GNdtUfX4mxnvAnTXQ2Awh1htcXv5uxR8tWMJo5iGaryH4j9XeAnppYVuqKsXZ8d4ozxfpiDzC53",
  "key26": "3aEWE56WfEVdhB2EY8MU2iJwwn2q3WT6cQp2WUoXGPMTRRntaBENSfevZphzdrnAFqYbqh9Cfy1vyhwrYZb4RU3R",
  "key27": "5zH4Ht4j2c9MvxXcDof22BB7yGkZKRRxtsj1D4ppwacuWNc5YeEokQs75LtVmUcfQ2gZJzFyDfQjzgc87RY9jF9q",
  "key28": "54KAUXLZ36Lni621NBDV5gP7SnmEBHMgsa2fxhgojLc4ksXoE3ktnszcP3Qm5dFfpiSyySXjVDWhSuYDaAQ94eio",
  "key29": "DaBargFsPajYUiFaAhb8JabVfitgg3rr3srhJAg2pLHxMGxD4Cgv8sLP65a91Vi3QEo3EEePa3fqj5ZLkGYPTxv",
  "key30": "2sUpvAbyEwny4u4hjgqXp5Z8xQ9kBG4kYyAyXvAAWdTw6qFq86aeufBjEq2eZk6CATAuaWF5XYFiPhozFeHducjr",
  "key31": "316rx4id4gmzXMqHr5vfQ4MnW7674km9rS1wUhfV4FyjUGwg76kX6hUvS5Upn1Y6nbJFpMcnNv2KiMUVMVD4vUio",
  "key32": "1YEmEEB532Hf8CGyxDF6uySMmqCg2TwQw43UZEgZqXdw434PB9VDnhH24UgeTohpKtQPh5ThTtXRKbAQSLA4v59",
  "key33": "2Pb2nSJVPSw8iZqUWifrM7xiFtkjE9vLEEK5dHvTN4odQTqEcLoem99YR9g99n6X3n91dpmMY1pf3KEfsoW91t3p",
  "key34": "5ASM2iiyFR5FQNfNahbPrvpdHKgSBnPGCDkFo1GRBzyMgx1nPixzqXLXwFzrec75STK2BEpun64wM5foz6uFmYWh",
  "key35": "x9dRwtDTKFdu5GcLFAwZyqy8beTmZJXsgnWPbcyEfxmx7obVtRhZqZoBpQQ8rgPio63ij1yd4y3cjHakKcnUkD7",
  "key36": "2kLXmu4nQpaMFpqWBS6M7rS1ckCoypUSTSH8iavdzQqJMea2E3DpLG4fG8aty9j8V8ncWGsiN214pDBbBpsMLTys",
  "key37": "3FUgvFHq7kkKLtxKpfxXSeXhFSqKRBojn5fJWaAesptADfiHwfcK8rBw5yrgMJLuuQhFYKhQ5BNM6KCeZovZFfeK",
  "key38": "312TvSS2uDZxq35utoWEndp1bDtTRkPTbN8XSQznvwsbCVQSbDKDzAndeTswd49TJibgnzcnshBi66e7qW64ut5t",
  "key39": "Tkk8G6Ae2yqayv4ZimcjLNqtqhhHFA6EdVapsX6YEotK6Rc21c8xEs2v2RYU6bfPXFra8zcLcoeQzNFmFjRa974",
  "key40": "5ZHxh4i2JksBbFnWXBrXFAvp7g9fzu62eG9xyN4kaszF1g244CymjqeD1BQQAUdRiVFRWJ5ynouR5dcffacdBP7T",
  "key41": "2dwFvYNywoH2nLrwNhymLsX6dbJdyu32MdJYFXdByazeTi6k2MF3kYBNCUgSdp3L6XjHZgDvpehG1KG3mhC2iFof",
  "key42": "4XdjazYL38cp4PBoPSLRpWhm9o38eBe8VUv5KbJu48iBjZPdq5vXEokuizRifCFJPVxi1AzxW66oniiQPa4stJW4",
  "key43": "mgkafNWE5nuAb4zqucpLpA2sCWLAyNJF9CLakbhTkpjNjCD4UyRXd7M2VE3K7StD11UDHg37xm8ag7bqjkv9QeM"
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
