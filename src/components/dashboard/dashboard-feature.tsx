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
    "3Exn2S38CY7LLnmbovo2AkwVri8wTv4r39jY4Ucpmt65YQfz3o4N7n6YfyhJhwaJE6DrR9VXPJwxtXbrFHmjWQbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iftSuCkuqbQF8unuYzQtFKe2dzgGKWGmDyqNyG3so5SRJtRQXn3xpmqBucko2wAkRtX81VoRu6ywKhG2r7sUYhz",
  "key1": "YGjZNRJCsvmtWEFBsy3q7dHbPtaaC2G39ipnTV7SET3ko78au47rKfkiGtkAJM3ys4kqm7F285CnxsRmPzsohb4",
  "key2": "V3hQuCKiixez5dCmtiX9gU8CbDCvc3CQFyfuEv3yVgGfn9Un3iM3Xztab9GYt2JwVugixh91ryrj5DdnFTU2eJE",
  "key3": "4phTUZxakwcw2DNTde5RqraW9JZhcAht5ibNmipufZT4XBg53whzDkkbQmDuQnYkuEguybb9tMjL2Dybj5yLgEeX",
  "key4": "33ZDnELM6pHcHvx8RQy2rLorAiANUqL7hMfSSQ22o7ibNWh5PM89Q4z81djwBRvfuV21UH8VEDQbvPiQUuxwEVZ7",
  "key5": "4RpEdTBMfHxrfYeCugFfthvCBiEUSfGUV2NdJ9zLcdBwcfMBnjJVPSEQXzeDrbrs3f8GuwsT5QKAxrdW6kAcMtXj",
  "key6": "4pNUefJjx2wKWDZdEbx7q7JzWdsf9MrvsxMqd9N9BkU8H6MkPHV7ucU2TTVdGc7W4eRPAiA66dtRr8LtHfJAWBqj",
  "key7": "5iGE9xbATR5VC3aVZerfJ1KzZXbD2EZ4sxBwQaQyfvVHd3NFPog8Y1zCxoqUCaePNBR3hj84G5jn487GJRZfaMVM",
  "key8": "51R9Jj9X5hyB53LMLvvWP7vZesgTjNdAcSap8dQ4AAhKczQGYnFymerYbQUCGYCuWKkyeAUN35SeqS8dkTY8Ernt",
  "key9": "2GtgJukkNUVHgrwFWtoJdYhqGmdVPpTkr8ZDttjVLx2XQVHavy7H4LAD9NwLABrEb1JPsnQzwdafYxguuLd6Ljey",
  "key10": "25ahU99S2N4TWNhqfFNiZEZJTD2ugQFzptTsY9k7dEytucGdfmb9ujnpz1St6q7G1d5RCLDXxhVypKx4rPndW6HJ",
  "key11": "4rGQ2nmXu4xmHhktWy7Xfu8gsHYmnXXwscGd6amGN9DjYA5c78tRU3qbirCu7QJs4kLyG81Lxz2mZskUSyhCrupg",
  "key12": "5ZZaEti1DFQ4PykZXx5GEenHqhcypwoDwowhjYgYk4CfZ9tSRfvbC5VgdSkWqK11sm3favphKEhgkEHqXyRVUAqi",
  "key13": "2tZXfF9TSAAdL5yYJWECn817kwzSL95LzCusrM1HKTS82PZFKLVkZnznsPoAzbR1zMb9tQV5PpvUEp1pguQdg6qq",
  "key14": "eTDGJRf2Kt3TKkenp9K9YHiXrNKpqphEy9P7ZHxHcmHfHbZfnMsnrV8TTM7JpAAcMYVZDtzeYCNYrvDjSVHGBbs",
  "key15": "2ijKQfRVeaYbmsd4dnpV2Gy2FRFWaECE9rRfH4bq2k4K95wK1VLMkp2fBRLX1vSAgWsrKQpMZ7ZuwmBM3oTKabSJ",
  "key16": "5cXKsLpafpymWs3DQWnUeiGqR8XvhcafqcC5V7tRRRygrfhPjsS6N9MFV66KEbxgAZ8WE1xDBMKqWrDAZQMfKFGR",
  "key17": "3XWVkmZVtPXcUCP2aXA3732RFSEw5iyY5Wfwg5pb8o36jfdnZHF71zcSmJhruugHbNuGL5qLMzhUCeemJ8ftK877",
  "key18": "4stBGawv9LsrfJYprSvWbpB2qWcyFaiXfDheMQnKfiakczzqeAybwGVnd82H9QzD9TmWyuDSba2D4Cv1679yh4R1",
  "key19": "26KGzz2sPA5thjTP5pSNbk78ygapKJwdJXRfoo3aETzkAGLGkTrSbncb783FqfohmN4aACSChEsZvNqvzCPLP4fr",
  "key20": "qepzWrGbrJYCNKWedUwGLdFYcA5iLuQtU8jPXQRqrYkhWLh3cRd1sRNQiuHh6vGtgLMcby5SCUMNfmdZSn4etGA",
  "key21": "5yCXCsnbjejyuqmxJv2h1HYdzJChG4YwCoSvX87WH4RXMtPyrZDJfgDAgERcCKhX1B1CBEzCvtbjJXYeVwSB8bcK",
  "key22": "w9CLsumTSrb9UcSxVq9UpkPDHgKNCXRXjAdnes4runTSVSJivsCbHSqDzkURPkhyTJcXcPr22NHt2Q1JFg3UdSR",
  "key23": "2nmG1Zhr5WzfrbD9otPBKuEnGMk6oEE5Aj7j5wyah5155XU1bYGcnsV6Z53JoAFwMAD1icYsF3aiRSPo6943NNse",
  "key24": "2pwDwQ95mtC1CMCnGttn3BFWdKvKBDXQd5YvojmY3bfifktmYAfJwnp9VboSNpi5stHy1CFxWstYCcajfAhNoZyr",
  "key25": "2qqXPfr3xPjFRvKHSAqZWC8B4DKQEnMb4nYqmfi5SThPNDmSTDK28w9dV4t3kciZeQrkVYxsC6VDwAvLEuypA73R",
  "key26": "4KQ6dfFjbfx7s3Hxq5sBbczsNbsRXj9keJwUVPHXd8keL3Fvi3ueJDWtNL4NMKa4ZCujPcGuoPVn1p7y5n3HpBTn",
  "key27": "onANmwQVAMKHe9EDBziofqZCaPzFAXzc3ure85KJuFC9FSf4W2XW2s2RBmVEUoBTdrn5wcjntRkxHZdHV6PCrL9"
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
