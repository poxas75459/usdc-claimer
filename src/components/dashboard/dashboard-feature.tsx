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
    "5ggu3bKtbm5w4NTi7j7Nt9YMoP9BWCGTa6NQSKBHvpds715GeXjEsC2hTC6YLv4tBGj9sT2AonUNxXYd8xJSdFpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56JuMfqPVMkuB4K5rUEApNrAkvebNLPYG6RAbHrgYvH3p3EzMwsJZBxBC65V5vTZzVXnMsBrc5QpFfiFtjpzpGwB",
  "key1": "2xoaB8o5EkhvQUpLopG7hkVGXBLEFDT6d2YhWiDB3G4UM7Xp2Axr4aWuwp43wEi6vuzGev26Ft7GQNQ5JqaGWk38",
  "key2": "oouFrR7HBJNBfVb6WvuPmhJQ1ZbC6HUa2acG18aYixfhp9x9pKABZVWjw4ZHFhvmpf6gtsLW5L7rao2f6GofUXN",
  "key3": "4aCRij4c7ANVydBkDUsQnkTXz5DensAmo8rksJntGiGFYuzjn3JyRZCyAqG9aW1wiPnHByP6E9zJp2cNfK7zLhDF",
  "key4": "2hTp2pKi5Etj5cwTuCchkXcw4WkztFDdv9XEpVgh6y58uED5yePSeARKSh7doQ82r3nRZudwWucbD8SpqxWfTeFY",
  "key5": "4MXwJRjAGqt6STefU4YzRxgXnxMEcTRUUAdpbxfGXtPdrzAkCmfYJ7Pa2VPntZR8R4QkM8mFVtExLsBw4oMXTS95",
  "key6": "53bduRYgt9fFCy5MD5UT5ZU64qjNTFoq4hxK72mHnJXuj3kRn2QNh7SmKrobm3bXM22tXHyhs7vUw8upVSjciMYk",
  "key7": "4YAwQjSSvMwNgVVL3AbC4KU1rmjJ1RTNnAcaUeqB19hJqx8puR6GEBNiqVFnTh1V9XXSaNqc7NkgoeyNMdBvHTc2",
  "key8": "4yDjZF5o29EKHVwScfwYkaBu1LNxVoAhm2fR5KJQmf5dTBb4B8vcsCPvfarzTLtCXFDR629KazGkEDx8mtXBvYT3",
  "key9": "4cqix4d9GvQfu7ZJ4FrSyqMxSUGvwzpoLBVNeCqGtms3DTBHjFWeALJaxyZ9h4c12QpXwnZX5nJEei7suxbqyBCt",
  "key10": "iZodiM9nQuvSUqDEXy939n96QLeYa7AMkFQVfQcaBKAJv2bZXcpqZDMwDDnYGzhUB375UatdZCvotJz47CBwSkh",
  "key11": "EE5zUg4KTwSwXpvtj4pYAC86APwwPs6bvK15BJJyZDeFCqnXJY9V9gAf2U5psGCb1638apsFCu4nWtY9yVsCuJZ",
  "key12": "4LPbsdmHYT6NkH5XLHGP54ACvoaFEYCK9Tev4R99MeUsLj9Qdk2iunMJqTQY3kBejuUVmkuf8n1jL9CxvEyvjXLy",
  "key13": "5AC4kd7aHf2YgAXiDVgXmF9F6Rg5DMtQEx5ah2CS9CeMyzh3eLccx7EGCMzaBSnn4LwRp4VmGmp1aTGx6vBrT2Ku",
  "key14": "uAKqWv5oGCyTa9DiZYt7hnfSV2uNh8MmCrsK8xZjtQwiK55EKS4xScLTaYjnDJWdop94CKbKPqWJnN3eYjpBFwJ",
  "key15": "5uPAZhBJh3PuRtepnmrEZus15yRDTN3C7CmcJDMpSWpxsEKkjCWhAQydKpUDqz4LoqC6y4SV9jGPbmt2W8ajcUB6",
  "key16": "5doAU42d1BK5mhzDDJ4XoRiMjJEuHyzva2pM8JwGkz3X1Xk96UedpDzM3No3UdaLmGzXL9ecrEE2A3NEhLucgB5b",
  "key17": "zg3bgF8SUGYk5MzWqWM5xYgcpD6dkozeqzgzxYBRrjfk56iki5ioerMvoiRQZ3v4eyR1wVVaCiUatA17vB7ubHG",
  "key18": "4mhgv46QYiSuk5hSsnqyAhqzq8xwFTF2H8Asih7jUCveUCQ17LAFGmaB87GubYteHSz4cAFJXnvabzHVjipJuc2t",
  "key19": "2EED9v578vP1pYeu5A1cZX7mSSyYzo1962F55KVcmtkZypeSo5JDA5jqQjG12iojQ9sUt7JGqQwsEMHiZENTskBf",
  "key20": "3ciZfcspddb5DvZhyLN7oP4RFrqJr1ZPuvTbXTQQued98skXtnJ89S3qvTDPHKrET5RyPnuToCZPgqXZBR6gcwtz",
  "key21": "39yZnGLA766qjudVDv2x8yNmy45Acq1NgAQ74UsxfjmtqSeGJEGYstFQBFZcQeZ8brG5LSJtkykFEGtJXjrcEx4M",
  "key22": "2dT5ra9HZKxpLjnWLVQEShCn3ThZc7AJt23s4n4GVngaARh1epwnRsw1piLLH2w79cvDMoxkR9eywmztyHQdXubB",
  "key23": "4HEpZLoCkpb3Rc4DG4ERincPngew4BBy6k5RfaMd8XHkNVzyguW59afqSBzkJqvJKUZQLKP4hbKodLCCNjMguvFJ",
  "key24": "2QDdtP4nc7yDqkh2viw6YBbiQUaYDhCUFDZ2KoSzTFdQ6ognwcdFRXR2CbUpUm4x3dLnZzWyP9UodwR6G94HAxfn",
  "key25": "3dk6QkscuZ1EEaV3e1kky75Z99fAMbmzQu9jVEVdrSVxVvTDBLckRpeFXgF9EuoodZerHyiXkb7NSebfYnuP589C",
  "key26": "4gu8RrjyZ4CCsx3obHRoveNbwzgNDw4vc4LpAK2exxNEvFZncfJHQuzyoBkpEn4PpzwVZaYPzTKBvQz86NtnDCLh",
  "key27": "X1v31fRPNYn3CTN33Ytox6tYGnRajFAnn2DPmYCYDXd9Lv9oPJJAcmzJUPrKvLFecKjfPSWjtnoNihcbzJUiW4L",
  "key28": "4EZqakFcSA89c3Sex9WphEhJmLVFeeaqHjFb11c7GwSCPZAUJBqUvVGoq5gPXYRUBimXX7DLSxgEDFLBZUsk37nZ",
  "key29": "3NYd2S3V5ctpUX7DtJhLXefLSTBrGHbpKVzCqqCZ7Z5mnghjKuAuMkR4Y9uEfayzYLtmti19d5JxZkpvx4JNfn4w",
  "key30": "3resxfbxZ6KMqeLw9USh4Pixz1eK373nc3qnThAs9QzdkFTRtC4KmEXNeXYtxWMna8wzFquQQnh2LExC5EtkGU4E",
  "key31": "kbdF2ZXqTq8LKFCfDv8ZXYDysSDoH2YzSYaTv1G9ujGQyPm9bvKxjqAGpQvZotV5M4n53mLDsi91z1sFezu7dpM",
  "key32": "4WMyNQrm9geip88MREtBGJmKKyDqCG3UFS9HQ6NdiAcYVwwbk8DrTbSWjhRdno7Y9edPARNp9FxpVMrL4GNpGHSc",
  "key33": "3ZAHFv66LYLa4PQTk8wAwBpZPDvhFbiWQ223H226qgHvqDLMHeo4rxqAVAgVgWAiAigTzEassLURV72f37wyzGve",
  "key34": "5D8VsmXoCxJwR45EcCAMZ1ecd3GdPq3nsDK9W4YPLrMEWfZz3C6y1T1Qj4Bfr2LRLpw5NpLHFo2zpsQsaRuhTn3V",
  "key35": "5S1SzR2HVCNSEKSma1oYQQYNXnGJDzxAGhxLuSGTZjxnEJFKQ5fHfPmY3Q7vvM87nG9PtsMh9NVRzjX1XoEkWyfv",
  "key36": "2rgvDbvsMWHx3csbrEbWnJRxkPh65YoWYzQ7Uc8crFxgQ9vRr5eJyNHppFGdGoiU7auQQt8EePPh7jv3XuoaVoWB",
  "key37": "4rohwrPzLzosuWaen4dmNmw34HkVxkphFLUQ9JiCy8BN4S4wiZrBTimrULL2eemb3zLWeK4hM5hVr6tEUaBNf6CX",
  "key38": "58Rr4awMXyytbKuzB5NAEDEpS2XADKhi5ET2TvApP2yRT7nN6tiSLZDQ5AEC3ZH5s9E4bx9bhfLdH2iPaAaTCuKE",
  "key39": "3aVrDBjiUSuWKQhzYrYEKkmxpqJaqz8wJbdTVdSf5MQinSqy6hQSwzkeZTnnA9dmt3B6Y62vrZDSSSHRj3dAdFu2",
  "key40": "4CpPoY1xFwZ1bxkMNaoPLi4GaXwE24rnPAiQvzyBBPRrmY63fWSaE34XKh2pg8GWSBxauaXH73p2hCFLzBSYDaHA",
  "key41": "egvZtV4p3gyVvnsRNwryexQdjxedydA3NStngHM4Nw7b9JULNMfeVZ5C54m1VhEF4xx925bHM4LC91A2PZXQYYS"
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
