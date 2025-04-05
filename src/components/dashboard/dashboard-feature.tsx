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
    "4HnNgv66h8ri8Md8akFwsNkMt7uHhkd9NbgeetnvHuvsjqCb7RgRetfi268LyFTRdnAbYh8Ftr4UyUweoZTTPLPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTvNQaJhkGkEYk5Wru1Co3Bj51xtoNmJ27fMw863obFZvtdYHiM7gsEaL92Qa39E15Ff8gM3H2EhZHtFE2EM5VV",
  "key1": "5iUNotZ4zdz2n9DXbQoWbBkp4FG8GG79GFMsKo6i95XgN8Z4HCQW9VNNoR1w4g5M9vQSZBW83xaxBRVm89gpRmAx",
  "key2": "3a6hjAX8pvtHPSQdA7FBmoGYm17i4R8M1S1thKxkQ5reQ8jUN8iCagy39Cz3W34yBG9ugmG4zprPRx7hNbHwKhrH",
  "key3": "3qcCdwAMKHgXXWY5Mi7Z9YTikAcBFQR8MRhM5jL8UaK5kyopNYdL6WGnJeindvjZrQNnCoKPSuchMoofqD8f5Rz6",
  "key4": "63RnV3C13nc51ANPy55B1Uwj1K1pDZYPaYTT3qojvfqJ2Sf4R6VxuuL837cLNfBWvxTg7uFG3eVbiyzMMv5Zj7mg",
  "key5": "5hzGzGzKFvKjjxowR25e4jAcZoFUyhqLGkFVTBgmQee551S2U4EwtLBhcQcrLraUWUfTw9mr8zoVTvLA8FEpFSjc",
  "key6": "Tv3bRGkLJfQEXfFQy2mTNbu39Abg3c3q64bpLbZ9LDwjrtD87nt771USU6XxbBtiF8CyN2SG3uXYKmTq8kpuTPc",
  "key7": "2WosZmo6bs8QWpipNVw6rj4rHyzudvvzZn9JBZhTddL6XMDrqU51zMQ2UmVeg2nXsZw7xnG3ep7ZPhfgNSW1XpZt",
  "key8": "4MucfF6TmomhLpNUGX8Gugk36qubFPKG67eL3cKJ9ES6oPiCnrD1R5g2jJ9YRXAgVeSdGdk3tmDo4GaPiPp86ALG",
  "key9": "2WVD6uWKuqxzxkAWZGUNpewhR5ULdcDcjarQqzW9o7kLLGS7k5aKx3KBSKAfJuauxGqHzQvisDdFr49wXAU98Wh2",
  "key10": "3BHNQmUV9LcHguPENWiNqrfoRnwhu1acF3zK3tapUBw6GcBqdmJe3Yp7AAq42AAevqdTTf7beKYnBBArzXmJhJMX",
  "key11": "htEhzodiH6SG6Ujv8z4NWiUGokEuLapLHEmK4tfeX2jPYTxkRkZAtYRvgEGLpGSg7TqZfQnQFeQtGHvoUVYXxRy",
  "key12": "5mgRnzgorVZS3aRZApQKg35DNHwwYyb3FVYkuvwsscY5tZGCBDEZuRLmgJFW216wiDVpdMAPTNiWSxMRiXjEzi8k",
  "key13": "5b9sADx2xmjKbWXDkRERDqMQZTJ5FcdSAcfY3Pv4KG6Vee1dZ49tczRat3hzC1ELUmDhG9x8DfVDpXYJ5JpzMUUB",
  "key14": "4RL3HwokqSRRXrmSDZpiZYmSXrRg8sKuHLXFi7CWk7TcQbrPPesYvYWD8Yu6DPfdjB8ayxVPMeRZeZsjBwbiPbY",
  "key15": "2qwqKjBjBAYD2bYn6dELppi1Wuq3CUaHhr6NyUJVh1wnjuq1qXogXEVpJApeC2YB2z4CisiTNW2Trn31DwZ7vmaN",
  "key16": "4xNUizNUg16BQFbfG1NnUTnJgKhxCGsqfZBoSj7KrgwG7wA11YE5cpfyqcKJPj94pxFNGcsVbPANe22vG1vFc2s4",
  "key17": "5owucvv9WgqhKT5hTxVFJ2toGMJrzHyGCpQktLnKpuJ3ojSEQYchuukJKMcNMhw8guHFehvn63EwiAdEqLcDMxwH",
  "key18": "yqfJxvQYMeMKK8a9ajXvJ7KSvDQMrmBiwW3xRNwUGTA3LaRv6nSunpVx1GyZrKdB2BaM6uNjARaY8hJ4co7A7k6",
  "key19": "3RA65zmgbMy9xQAchL16TTxkeor6GS9rwkb7Fvw5WxFTbMfxkgL5vwzLqFBgAfmzV3LYetfwtfP3aQ7jKpkDbGuy",
  "key20": "3bqYREiaNJdq4TUq9AyShioBXRSA1GvBzvMVwRmAN3nFWxwhjdhpskUwjeywq1ndDnMCabWjM9mw3j2jDjBcNrKr",
  "key21": "4somvchdiH11aHb6fA6wVt39uGqntkcqMFzU8dci1sCiVWmCHMzJM5zFAaGFrbSrMGaPkZR8Hmm29BBVzEMaoJQt",
  "key22": "24AMM13mw2CnvrH7sN9Cxj3Tud1VDLhsA1Yr9qJPH52rSWEx55RUCcqUdyuDAGaWSpv9bQN4UYaJsT72usi1cYxX",
  "key23": "3BMp82f8fPRtdENNPaABbtvQWxEikCXk1mUeTyD7qFXF3nJuff2SHym755z8NXoz4hsHLTtggL8gzS6MZ6HA878M",
  "key24": "4A1mLRnJWsF2uDN4XtGFN2K4aQz3Hzjfk6twZjjpJzHHjz2S4HMj2kqDwja7Au62nxMZQpVscohvtnjd3v2B2BqJ",
  "key25": "2ixrbW7kLmmMNcgf1VNSDSEmQcCFEpp14kXndHJghKkyV5hHKe8HR8FwKnZwg1uweezCky6MA6oHPwFyovbV1TN8",
  "key26": "5tQcHsbknzQa9ismkm4po377az9zapzYwq1WXjb944s2AKHfdvns13UNLdo1g6ccB7GzCbou7EDhRjtr419zogye",
  "key27": "4ohHJ512AzwB66VPeX7fMxzYuFphRFFxuj6zMWMGFSjKgDmHEykAyfjdJzfnYGvuvrPGDjdirLkRk5FNaSJj6J25",
  "key28": "TVL1sMGRixV9Nk4kK2JGNBD47SmrrZZfc8uCtQjEoc3c8XREVf6qNuegXpDznQsDxo5cFyfZFAy9GZM9f1dK3bq",
  "key29": "SjmJ887XB3EE8w4iGfa5wceAaxsjdBMVZrmQGqgs3CcK4K1J9DdqPAASgbDPj9N7bjdRuBeYxGsF4U7H22PHzG5",
  "key30": "1mGnpLdLwVrXCSYfYM3GA3Edbxpqd8T3Z4bRxoD4F1mfQBFHXSYvMU9dqdiLdN5QuKMUxBaeq9YTCshTWiRZf88",
  "key31": "3DuwvudsAmEh4KoDuwkB846pNHtTebq1E4qYQjHafUUuiCFddsLD5LKf1t4QnXpGhRc9yQXK4KAxFLpLRBk38dKW",
  "key32": "64T8CRmUU2PyKGU3Qj62EpzrKW7tKchNAKBHmjYYHo6znQeeGjawFkGmrpPnQwJgCF6qcwvhztQTXBxR8kRNNL6b",
  "key33": "376BQsPpjanUuWvxMkAprw2X1kJfJJZWYX9HWYV2uVMUY7Sc8L7RRdATWqcF4bDfdfQxSXXdjDHuhSYdZAaqnxHU",
  "key34": "hwqDRMcYDNJDVNHwYyhgC84WBcpNt5o1ByYhYPvwsc6TYasKWgm3ot4PECrnbd5Fxs9BmZJmZPQMQzFFqBSfsaq",
  "key35": "55mr6DFCa6vNHJfzCYzt6kjza4J6XmpJrEmKPu1ofsDv8sW17pFVyXvB6fvnYJtTturvuzv8zFrfubBrHGwpwHEA",
  "key36": "3nUB165fcJ85LvxB6nQb1U4VWdNSfRGd6Eqiv4Gx4rhJBZ1wwnUacPkQ4U49JbxbtieBZDk9EJtjG5RnVYP9Y6iH",
  "key37": "5ZP9pdsWDsDaAci5jbpvjbBK7feyPXhXmPsG9fhvy3LJ2csoaCM2QsYBxRUvj7xKhqactLjB9BAKDSpb89Wkw2gg",
  "key38": "26F5p8MpurjaEQr9qdNfGBR7TftpHn5WuZFTqq8ffr5DTzCgWJFKjzfidzpxgUDgXxHJewqcLkYTPnU2RVY5DC6a",
  "key39": "3urVi1vmcjtDPfabe7aNPb13of8LbAXAdRfZ6U5LC7SmEeUgR2d8ga19Np4NgrvBNKBFHTicGdnu3f9NWDkU3veA",
  "key40": "2xGHU1y4gjjQYRSpwdtgmDR3zfSApB7Yrcrf7gjYzetyVXT9kDrvjMftDGGSX7bTZ9QaSJEdn7nJPRhfirGU9WT1"
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
