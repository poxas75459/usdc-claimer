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
    "237Swg3i1Jke6yE83fW3CMrtGDud1pVF2CrPNTNCLS9Hun3JRct3odX3hjPsHHS8ayEUCcFzWkXR1CbQkq41oGRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZ7dyDGqKLmTAdCYmbjBKEGUT6reNyN6t2AJo9g7ZfRNGmVxTy1AHdBnVmrLh552atrrgXYgGN1Jod4PEAB14St",
  "key1": "9Dd76FHK4qraJv7ue6qnySUaBTpvgrtZniaLw7YG4hgviqt4fmdZSx2fs2jLC3gv4CXoUiUqTKdm97BPtoUpara",
  "key2": "65sLDPSDSaJCefeVcBXQAwFx6mF7dCp5YyXC9KgFSPuqScdhqpzSidTbmLG3h9wT4UVn7uwD5ZvSFZ3nd5rr9yow",
  "key3": "XkMPp8SAWUQ5MjYz597G98DhAaawTV5QzD3j8kovJkTu6TwCnfsyJCbXcE3KRdKHnTc7Yw9U9AmWDAfVgpJS7eM",
  "key4": "43dsejgRdNGKvBo3wKPDhz1CQn9X9HB5zKBwdbfijoFJG9tFvW4eNdqhx7CvG3wrdfTX1vDvEiKygtU2r4XyRQfX",
  "key5": "3sfHcNTwtze3TuFEPoTCSHrAANF6eAYLzaHHX6HFAAD1ZPsCtWPXWadzvQPk5WWKKgUNKP6cGF8FQoUn2pfpt4tq",
  "key6": "3Zhwxtx8zwJcL5jgshmAhwJ2rPKyG1RNpcyCPJwnCLRuncYRtd2aWR8QHh7121VFG9WRswwcnZW2oGA9riAfk6uj",
  "key7": "3tayTkm1AVZzoYpJYTgpowr6CEmuzKDSdmhRof15Wuop4rcixSyY51wxNoixRjx9QYKKr7d88cHDs2u4aJDXxK7q",
  "key8": "5G1E5xHhYu6T8SvXe9ZGrwr5XHUavP9LwZdzcMDpAWdRW7ChMyLSckBxSqw7YLUC3DsnPUBDxeKGSYD3ZSnPqFua",
  "key9": "4WMJERSZiMXu5ge84LaNQHPj4q9w6ACTgJwz4hM6CG8GTbiX8xgFqBaTbpFMsPfrdhbUoNGfnqnVBNXUaHwVP17B",
  "key10": "5JzjxC8CB7cphRNwoXboiJn97yapRLV3XHovhNkevNpXAK93MTtxbuKsPLiCQTLg3Cc6gAT3V3jWjcR9UM2H2CRm",
  "key11": "23JrNGzXSbPTUHHJhQ8xzZJL2Yxp3pgdpdDP9iDQ5vBwBVxvRDXwH76kFMgGGXGfh6mSx3de7Z3UCuoLJnXB5qmH",
  "key12": "4ZdLCvjc9gocsrT5ENQ5tGqk88yxDyuXjGquVwyKoe5Rhosu1e7qzknwrHsRepbRYn1sQgxBrp1kFQbaRU8pNTWT",
  "key13": "sfD3DZbUEYVjvTAR8Vk2jPx4xds6PpPEmF74zAgMhvzq1PMP25TsxDzBP58SojmdDyrR1zbsAkoBLom3y6DuPst",
  "key14": "saonpTaoW6v47eGwcYQRDeJ6Kw6UExb8tP5BM6LZ1zRC85obpU61Mc62skn9BZqvvmXb1qNNNc1GJU3KExJfA3b",
  "key15": "31yAgk3o98Lfeq3bArjzRVe7YemBbB6mbRZUZQ96yV1Ugttk6bbooaHoq1ktkDzZjnystbgqSCsecJWCXFq4wL2r",
  "key16": "5bKVuEeeVCFNsH2wCswtEbFGZSXVGbdEZLgqHPzvYtwNV2Xon7Kha5QopPTs2XFvtV9zvXBRTd1m58o1EnpVeuBc",
  "key17": "2UCP9cSWjwhiEbVdqKPcYpkYRjtnU4v7VrDaUwY1uvNx25UaXZi1aMzdSWTF3HT9Z8vHwKfe6gHbYof7Qa8uXRjW",
  "key18": "5SJ99ptGtmnk9U4iXs8KwTRWYnjtQydtgxNYC2XJJqcLgovT56Sg5A56iZsv926H8kue7kFPj8KZH16sQDm95c7d",
  "key19": "444pxMPh167bENcowQgL1ZmKcdYtZn7MPn5D5TvWm5mPu4V9zySVLcXU7cNn6y5tbX8MGdLcnbpSDDZTVwts2ARZ",
  "key20": "43zufjntRaRrBhV1HCQhE6zaWo4SharFRVU8gQXgYELFuw9RyXX3VZjzcrBf1sfy4G9ywCWPgB2FY9T4zrDgTdeu",
  "key21": "4gAp9gop3e12Ck76ciV5BxiiMMZS47roZjbbNhPkZvf45zeG5zLZjANM1AoPVUoBvYDcbQktEheCfLUMA99hwAHf",
  "key22": "5uHxCdUaRsYUbAvs3AY5J3sfyj2hZNACdX6FkqGxdprT3MRaKRh53HUqzyKc58NL2hZhEGs1rBsvgi9by9X61wzw",
  "key23": "3f1qYTjkaG8efHEHi6729r89YLkivXaSB4bMwDW9f93iHngMJRE8VSzqQCsBxqqj6nvUykjR6ZQf8WDmgf9pBnnd",
  "key24": "R3wpyqYNjGLfH4kcC6aKX7Z4db672iyPX8UCa6KEoK176M2fwYKzhAJoJt2uLn9FuLqzUzAigEDSNmD4Sadb74j",
  "key25": "jXs9rtuFhR6ki4x8ksykij97A8qDZLy2TPTTCHAgSqDsCu1djUFrKsHAyxYgbpZVbtUJp21aToLt3t4CmdNdKzH",
  "key26": "4NCaEkQJxrZK1m9BZvxCs7EYpzPfJDuPEb5Cm3HVitKm825VzNovonazJAVbQXHHRz73LDXNfWfTQy4ob9nZwqGu",
  "key27": "5fUX7b2xtFhj12LdHLCGmhL33kSswqp7962gX4PbgyVVVJJCpb4RfFLfEr3vEdXFu4bGPFWcnNujVqK7oPC2GKkE",
  "key28": "2gtR9mstFTeML9oy2uUnh1Wh33qN9267voKjNP9nzcnr2VHyyu3GKH3rKpsvATVYnGDMiqCx1qhiS3doj3LEz7Hk",
  "key29": "2ennqBVp4Kg82yANXTRa7EG9JF8rdeo88CG9nKnFaB4oFU6oJrp8xBCF2KvssDRCmjs1r6CkBYqpwcy329sYrNwv",
  "key30": "5kowQnVZZ7ponx2kfELCqgXDL5V8CSekHJmYqgXaNLzmxx8Qpegq2fSULKGS9rJhEPKMxJYmPudvTbYPZK6VPseP",
  "key31": "i4iUoo4xp6ciHTXbFvv2um1mPWwSSZqQSMRoFqA3pkQxvPQjwpqBSK8Z75UQkf8qLjHGWpYnR7bCaRnVE6bqR48",
  "key32": "4LD5uX9gcTFFtfhmjJNQ8gnuXQrcJTocSRkEBRGZ5Was4WTChNtfmCu2xnLJxkkToHbRD1UaEoqFzNS17D3vGC4h",
  "key33": "4SamoJRv1nssMJWJfjj5RAKsfa66vVLwtwaSDHxeZguJ9Eu7hATw6ecaUrJfQWJv95CywmFy1vjFrGtM62x6zwhF",
  "key34": "4jd4pUcczmiZJUzsqgXoh9jk5Z2zKgcTNmn3zuifukkSEjRDHLzkhmNXqUru9xrbmaV6a8mauXvnBVFThdd5qWwk",
  "key35": "2BPnt44bGqp4jR5ArcXFV5d2SsCJWzRG5rmgc5B1brd11DYTsmH1YTaH46RkB9CJCQiKbLfnBPR3XhPKRq8HJTph",
  "key36": "3ZtWfbXcrx2kYTG9GAcHr8zuaFVhpdhJ4P3SRurDkrjMbZAAs1MAd8PipqZsTYcXXdYXm6XpcfErXsgCTxetMM1C",
  "key37": "2tJxoZi1dm7KfhW6BmR4yxg6C26BESGeoot4xPtjrpwcAtgpZoMC3psYmSqWCDrTxtMPAiEbRr4MuzC9WDDPeU1x",
  "key38": "5abV6rTc65b2UMVqqNjxbjVviNMBVS9nx3bBUgDwJSyqAXyLJFFbnh925zz3GGTpSJ8R3WedztTZHcgNdoFPzFaQ",
  "key39": "qNp8eYCDtLmNWFV882uo6VYxHQCFjRWe2FkVEVVKTTjgfh35XqHkoAJst3LULCBQftXcUJXkmCnS68p71oNwD7W",
  "key40": "4ouY1sMH4ZZToS1Smq7Xc6z5RFBfhDtvVMaun8kj6FRhpffkgy2Gxw55UcqtNuwV25LD8Xnem1mA6b2z3cJ9HGwF",
  "key41": "2nsAy8qT21mmHo7vrichsrnh4WdEZhiZdDrhJnpt22MhmGY4F8Va7todrFYNqeedSRnSKS35jw8yAnqiV4DxFFSK",
  "key42": "22pqHszPWHXAT11FTftHcLQNLSZbv44atJqbrJ9gxmV2GSjPRj5WB57Yw6NaozXxAoihuhoSZYhmGh42gnF3Zcmh",
  "key43": "2qGPCvP7gBasXseytunj4Mg5xLm2s4GgDXLNxVWrQJ3zutve9V5SfHKF6v99ih7sxM96JQq6DujuFeRACijpkwqF",
  "key44": "3PnH2czjwg8mWDkdHALagNxE22ZcSRXokVQwgq79asr1LQGaJE4igFh7mdxHB6GcyfHyeivmV5eYHNG6vu8EtBeX"
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
