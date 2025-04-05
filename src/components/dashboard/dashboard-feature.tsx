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
    "5chT2QszsnKBEoewRegTRk1V3iogJnXXVEKXqYyMxpjLjp9vFVozv1QVsDj6KDKdT5nj88dgWxWrdBH5Mdyxds1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGjrj6He7V2CY1ysbiNiuKGwYZeo8MRmtSW63tcnxGHmLXbb3FzYJoKAwvCxXpxo7pP6yYxnin8nseKfRUQfrcp",
  "key1": "pA71Hay8bA9HXaVn6mNZFNhsWGGt7SUVTJnQb1GVLhktCSscUUXCPDfCFYeXQpgAx6iJZFbxEf65rT81b2L6Dgt",
  "key2": "5NNMLqxSXv4EJMTmwkLMt7M2cpfnTjRtdF2FdQZracdUGaWaiKCtHL6wnoDKh9NqEcVUTuU8AorxmCeYAzxHERom",
  "key3": "3jvp3QAKidCLUPfw5RYP1rdsP4igQkYfEtztNVtTRhrTbA28TmL6oyb4c7LZpmnYTF6WjKWMJ6bW1Q5EmSNk4sQS",
  "key4": "5hLvAeErd5HGJL7m7xbLZuTyamkyg8SpGjEj95hLJnrtsQjxYuZVn6NWnHoicuGR2NDLbQjVyfkiFbJrGqEchXHz",
  "key5": "5iS18iqsQGBKXdCdp2jTvnSXZ82P7Ki57BF4DRXNQAf6CnNoni34Rsrt3HdtRs5jZk9rVZdUuq6MY3iirM4oqrHZ",
  "key6": "2SEWMPs58aqKWtKWdszuXcbk6nWbnpgQooaEri61JQfR9mVLcfrkkcwyNzXg3xGcYtNXVYgCaWgTQSf3afdkzbGP",
  "key7": "wwkTyBitkTgLftDtZ7DP1fbzpQFvXoy4C6urS5vHGVFQ3qNSYgbpJ1h3344potjaozZBUaCwJoM47xtRfvJRke4",
  "key8": "3Jo1WMyrmTe4XrsbmmQ8tnXRXSoACEv5q4x88KNYiDY8aiHrCTYM4EfFzaXFSUkJJPbg8eSDJfhjFKzFsgFkLkBK",
  "key9": "2CbzQXEXjqwsWVXs2XuzdNddLZmSKEnJSFMx8yuR8zhhgYbbGDD9Eia2kY9tx72sycfmrjJLqPXw4TAHJHHwHmGA",
  "key10": "4gs7yByD4isgMFc1FC2RH53jqpjdLZx2MXAsFz4hyB3jk4cYPADh78crpivKUjcn5N57V3venRL4mV2WUonJeftu",
  "key11": "2wJ8sDFa6pKNTeCdshijTr5XrMqxjewgDGJKVn7fRkdKcd8K5Q5GccBLHxniqNaaLwrUVjT2duas1SoCooGSCZuC",
  "key12": "t3L5VnKQhMZ5DGvLQXVFPiEbhLTQJQQnLCHZoCBMAyJyDjLdx5a1RVx9e2CECjUwPtiEtvSrUZuKVQ8CRDTM9sF",
  "key13": "VMUYuVzVbf6JyK969QepKaYk471c8u2xPfmmD97eQPyRV36dtkt2ALSBvRFXhttbLe17PFmEHjTRqwpc44xdqpo",
  "key14": "J3gDCpXzacaGRRv17Y8qMLfFZGHSrA9on4vyKM4wNiK7UFNc7yfZnY8rVoZpsFygjXtzG1BRekm2LfrCawYq3bW",
  "key15": "4irhKk4vVadUsWAyts892EFHZMBN8Zcc5YzafVTmmcMbvcuZHUwi3aZKtVptGdZ86dYTT81YxwvuRMQAQHjgSWJT",
  "key16": "24iLY42ujNfq4zzCBi4aLavvuNuCFQSoust2hxyXhdhPghKby39sNWAJbQ34D9h5LxLu6ndToX23NKrEnNwSDV2c",
  "key17": "5jHq6smqKsRGhmQDm23rg7nstYkzJwd4vhJAj51MoNcf6Wy42RGwHrmGrr5i6ZaUpXPq4RrzEDqhXUTksyEJXffJ",
  "key18": "4NxSvrQS5XX1bwUoXcyGHSsxWC4TYqrryr5sYfGBYEYAFMPzy2mrmDzyRuDmVBdvyo4qj7ScwUn2P64ZWAqWFdKy",
  "key19": "567V3WaFzngMP3Vyq2d2uXS32yQmsLPLzDHFkpWcPyX1i7xfxKRRJYJ7oN6iNEUfwCgD6sEVZzH1tsnuT7NH5Ezr",
  "key20": "x8DBJLaqWWz3zgFW58XMSsBaStJ2MBJ2Bfq1wAp489FuX6o8XuMRJpBDgCiQBwUM5DsdoPowLN18dZ8bRCzrtca",
  "key21": "qhVKcqNCtPJTDDPuecp9tc2b3wqHsJxovfCPxmp5RpALv2y6Tkx8xaQrKRNoa6Av52n8mzJHbSdPtBFCVMoicfp",
  "key22": "39WBr8eNAbHk4pA8vJa4ZAfX6Mqr9QJTwTsk6S6FDEdPxNcSN5EGJ9WseBruCL3CSLTH9phqePfCgfUnRLiFrtmL",
  "key23": "4NfDK4sELCnsfSAYgyj4ZrUYNU22Xf57SbLWNZAgpk7Eaa8NPfHkXhkPTqTyzzfGAGhkHTdwzRHSBVWMPVfnya1T",
  "key24": "21JztxEVp626eENtt89uMS6EvyiZYMUdpeek84rigFeYz87sLivdAQ6dPV9u8t72rRCQTHyvmnpCbEEZQqiHJFEf",
  "key25": "4tB2zrXxDYP2xieWyBp6MvRAKPUXLq8m5JYY76jBQ2N6BbF6oxG5Tz39nqzbpk1FYXDRs1pgEvBvvn6kQheHLL9e",
  "key26": "vMpUHoCWk43Ljsh62Y4sFCDidyYg8Sih3pgjM2HfgfyqiL5LVZtoCUr2DUjtaVuDaXWMP79pADuTQgwNAHWsTBW",
  "key27": "49xagwwg85vZDGgWENjWmYQ9YnZSu2ZgFyPW8iJEQEWJqVRSypir2yG11KH2LtGCTq4UAkZxwq1zqZAvg72xRU9U",
  "key28": "3rKGFhk6D47rHndvUUQX5pePSj87Y49Xb9wb5L2iXxaif8nMWhGBcveuL3q7sLF4sp6xFt4PHW8h2NSwxjZmBzyY",
  "key29": "28BM9hWQQ6nHVBBWjMzvHzpA2komhoo3oTiusSVuaf9AptBZQAvnDp8twBQhRc1qQFDXcqgyfu4hAXmTEk77Tggy"
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
