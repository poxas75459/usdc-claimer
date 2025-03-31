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
    "4fpPupbJeQvPQQuNzpm3ZDupV1MwECysDLwnseKZsajXDJsWchGTwnjfETRgjZvMMYx47dLGYRaGcpgkcViBWaFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ef7uUCTZcy36u9Pa7rGkfs5w1hJtKzTUx52yA47ddfsk1vPw1cXsjNx2AFtCdmqocih6fga4gmZ6samtLC41oZR",
  "key1": "3PckUWJwFyRhB5eEgbZRmgpxxJRnrwG7ywhzmapyfrwmEjREamephD44iTHVQYL2cTaiQgN95vtdrqfY2DDfEaAE",
  "key2": "4SUqSbZZY9vshqwQ95RVpg9EMRWUubqX3pFypR9juETxsejFr92VaR9936Lsn9CRRXMiVyvVw2VHWBLV9JSAvMxj",
  "key3": "3jinnADRgGR65hVRM1FMdjSEPvtQbRWRDrwa5gJuzaP6ijMmQHSkYHfCswGhE99kkkys2Rt6Ydonx5zKgc16d5zb",
  "key4": "qqcUkPx9mbaHL2SF8Fz64dTuddiYxLHxMT3GRnitkzphiZqVUxNyccrCxms2kZV4Jz93vp8oPqCb6g3YTdbFxCA",
  "key5": "3gkq5tNkjaTQaRed8dmYMxXw2RS2q4yuGwJoG8DSPN1i1vS1sf8JnQbDV3Jn7YuQEVCzHhgSFSv2Sxx1eoXefBcN",
  "key6": "5YpmLnmRXrHG5HQmCVHL6EcWVPutL4VfSpjYb6PbP1z9DvwYDArZNj3LzdPD2EEH4joYAX3X49fbqaWryUkXzJj9",
  "key7": "5hkSEa4fFULdhVh8UjnfwEdcPxgmppPzz6S1JiRDU2jawZiXCYJzgsdeegrcvJgaAKPh8Ri74mikkhacBmc7deFX",
  "key8": "4k9Htwc9yekPTQXudjEA66GBzsRcbzjWF7rChsWpzFSQRwdbn4WJBpSdkb8zt6zUAiG21aZpYLYHrT7FF3Lyy2xB",
  "key9": "3FoeFXcFRNm6w1zN8ZBWdzydSLJAZtrjhGLKYQUqTdt81RsPAVrwXY65TPdbS6BUtZDHBWSnT7CGEoFvnremYNY2",
  "key10": "KQhrwuBtGnBQ1Wz9RSKDQjXbVeBvTUfvDznZLWC6snQE3y3fjkfUNemsrjr4pqsU3Ufc26Xzk8LMBrWPLrKafYS",
  "key11": "3vWaBsfkP5SU7Uynisqm3BDr4AGgWpmYEyH86tgif1urzV5VYTue344PoC3Ajd1hatZv6BiXjkGSBT7vv1tgh1c3",
  "key12": "61q2M13iYyyai4SDWRwJuUnCLhzaRLVYKrhKUwu9NS1o25bciaYrnXdK6EtECnNm5sUqHaxfQGEYPAN9yxQ3YC7U",
  "key13": "2QL5bDr9fBdjFmYobGyaaUy5m94g8jEvCZcnU2oGGaqDwXajLnDmqH7VLJYVnu8br2QyiFKG12J2QebxzFdzcrhD",
  "key14": "2RSt8nQhkZmrdzzk23odYadezuZATxK3N3z9XepFx6RpVe7eqQKn2vpQf49B3yC2SWiz4Qam1SdJhPFe6Mrw7kYh",
  "key15": "59ME7Y7rUY2rYQELgTvjmQ3GhhejbiFQGTXpSR9PyfxjKNZBYvCp9a5cqVeyWX1LzDN8UY1aDQCDyk1BoaBTMdnD",
  "key16": "4WpEDFFpqmq5JFUNHooNNmGxTB19Kf4g9YfvPPfBCdwDV3DrEzNbREkDE2AVqxnWBdTaBaw7q4w6HyXWFJEsibSy",
  "key17": "YX1pGR7PCodhK9ANYSzexKTeb63Mf3bKuR4MuH24VborV3Mymrtxyz5aGdKScxEWvEoy1YhmLdpdVckNPaZ5cGa",
  "key18": "4zFhhY9Ft6HLHsNDriF1cjfP4SJoUwaTcdaBrK7F9RCcvfQaT8x1bGAbnNQsnjkLh2uDHCrmDL6AgyJcqHGPzWfe",
  "key19": "3pXFDbjmQxNDvHAwdNzepCpzCseNMazZVVRinGGuskpda8FQLt4LHKPrxBs9rUeNLjYpVX4h7WGBZr2Vr8sdNBMa",
  "key20": "4ATx9YiWaPtXC3rtMhDnA69n74ip6vE5pkJkkZbUWiNgn6zQSUSpRy4zw1BTrPTE8WSMbLYZwy1njo6DFxmC5MND",
  "key21": "2jHprRVQzY5MtM9C9nUQNWsrfEK1bD8FZR4EKKbvdHBLDdx8zDhvuSPyhS2QsJ16XtnrvtGUfD3fdhBJuEFsZAYb",
  "key22": "36HBWmyUWWA4N7ecYoJBoYfpT8pXD1WDbZeSBszBL7ubLxeef9148xpMCVTTT3sdYS13JD3DU2cUpRGPqpRK6TxN",
  "key23": "24Cwa8TDEEyq2pH22HYKFGw3mUVEZaXK2Kidm1ezVudnA6ASeQBQwSBHgWo4rjhqF598sopq5qmWTcdNqGDNZ6TM",
  "key24": "5cNiT9EwnoW71BwzSYnAEUMFxHfRqse8EgmEZRtNpjdTNkmKFyqgAcsjYH2XrGXU7mkX9kapo1toFFjWmCEjHifX"
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
