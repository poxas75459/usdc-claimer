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
    "Pv9o6dWp1HesMbdQBZWJbdRFtgThEns5wN1RhMZjHHFU8CSAgPzdfxLYRpt8VTAZdKb4wtb1qZbbzx2czxCM1Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVH8S2VrDxR1msSCuX8fASTsibsUY4HUb2Y2y7uFuQyMYfREsFJbb9gf6dcbgYDkVCMTuVsyw7BJTsUasGTncVi",
  "key1": "4grxi7w1VBPX4dMwoUvvm3hcXZZvmjRAEg6JfcGwV39JDwyfEWFXf4PHNKBxgDKXF9XaS8WVet39tJWV3eafCLBW",
  "key2": "2VszikMCdUDhd5VN4BDYpTNF19hzMoLRPVhg9v8qetC83Eop1B6xJHQQmwEmrntK3vSgR8SpnYmsgZCL5PiJC4sr",
  "key3": "G66Z1hEG2iZYW69McbcqpNBYM3nEJUVv7go6x73WSU8D7jFiU7VKVtm6GgCUHyibpruHAR8xpzSvuhRLdNVcoye",
  "key4": "26zMCLmfyUqVxUrw4JSg9sTw32tkjyQsn2EbbZRJ9yZW7ZqXZJh2eqazM73fejkCccX2aGiBsu6ECCFE9KaDyAFT",
  "key5": "2bFxejdKo3ezMciKk34SG1y2wxrRtvV48MqM8KNgpLm9X21oRqR9QTbW8UX4VP349zDMLBR5qxQ3UDVAgfXYDdA7",
  "key6": "PGLGeu9fkJkK34nXPcmMYqm9A1FFJfFrsnvUosmEjLFfSvHZC8itf8GihhuUzugLy7y6JS8RfqSVY1H5rVovY1k",
  "key7": "3LYCyo3rKBzufREDuPzeMNQWcTJTRCRszoJgAarZC4w9huvHptk1m741fvPJquk3b99yPAn9AMCYQ7TZwrDKWFMA",
  "key8": "2JdHbQhAra85c2Xi5xTnyb23HQsuiEQSpgWZooqtDbZ8q7ywuKJprnVnLqfzDfB32gbhTtmNq9qvyxT1UvqsDvu9",
  "key9": "5MDEn1ooZWAHsGdPqp2tnoViCxZFgp59pC2FP9pX85VEqXLhqN2AuZxhBrSLwdzhcMeJHHchNT3mXin7qeX5FYdE",
  "key10": "5wXAP5jBPWrYVb5e3e42iw7WQKt8YVJPJUEAXs1MTqv6byDXbSnrShFvrbfdRMivnxzYERd57YwmisNcmCq9qc5T",
  "key11": "21c7eXVAfWEgyJR2B69J91EYscZhUZLEK1FDuhKZW4GapRwwetD3WqEttEGx7zJQziRkKW6qFZrB3rvat8xmxZpd",
  "key12": "3Y9NY6H5kXtYExvXgeq3xByjsBAFXwGJb2bHCTZ7Sb9Ux5LonRSfKipJsfhsmzMFfCBETDxRWaXqQKQynCrA2bsT",
  "key13": "3u3NHMJJcFurJCaVVPqosWcB7KU8qPBLsttFhFUBRiX5KkVjNzLGpTuQqSVbgE4QfkVox3v3sE5BvVUY8jcRXRD2",
  "key14": "2PpZ2BJzbsvmgYi1NWEvTZnktmc5qfWHV3B8yeRARewdwMi5tefp687vTSqwVWpqDxbhnsvUjLUm7PS8nLvpynF",
  "key15": "349PNCk27dwz5QRWRBGKCReTYavXZP7XZWqV8tDM7LJ3oS59Y8uSmUHVXJ6VUaYjbRadKxdna4avTyjok63mYTpX",
  "key16": "28Bw1gjo1iotnzCw4CfUMW3KHfNdHXDD526NMFZNZp6YXhB1Hgn1HgqhQnFjdQjei5vGqkWFvLgpUQSL9sFnzsgn",
  "key17": "2Fymzmw9ApVYsv1t161an8XJBpHh53cw9DMzuvU2bNsZszWQhhq49tdSg31PNVTLRg4exARMcsPx3Nb3EGiihzf8",
  "key18": "48ozXwQySsjcj25AXbEhVqjrQRoDV9baxDgyXPmHj2KHqb7HFeWA3GPzeSb1BCrSRjXb6uwDiFREzBzsM8aioteJ",
  "key19": "3nJYdwupyWenEQ99mHGvfmVAGq5rWR79Pf5APnjD66rNNbGLT9pshdJkscVfMcsGNudDN577apyVbLt8SGvWSGfR",
  "key20": "3zp2uG2W5VqDBFi3d3maBWkcGgHYqSQvL8zoAAk5pLxh55fSunZZoaJkkmJqZBLWRQrXkBopgYbt8HeWweKruFo8",
  "key21": "4uYv6wREkJP6WWU3fJUTtRouSj3px3CWGjxtBzERi9NrR51uUtfjMVUtMjAF9wfWrQpec7rGZxDKKty1PJfwMJXV",
  "key22": "2CyHFkrT95EYq6yNw37po5FcF74seCnTe1v49gR5YaJr1iFrVGgqKA17VLEJWbPiqwZLJY8RfKge7fDGUGfgeWev",
  "key23": "2o2eHB4RVFnPE5YmJoLPzkzYKSvBJH81QLujThwxbxGJz8KzTkTAyf8BnVznCyNTDe62V4QxCmnRsp6trSiYQdcd",
  "key24": "2wiSFFTL75kn2D9fBt6N1YFyGm6MDSyetBCK85SggiBGM82GTUdjiBkdnk34bcnB7ZMRfy8t4Nqm4fLYK2UfhaBY",
  "key25": "ifLeG46oGZBqcpVjdSkNyAah9uPpyyLiSn53kRHs8iEfc5xtpHU84L39zbSnRYcYrLRQm3emz2NyKumaUqJeyUH",
  "key26": "4VWXLJ7ak3bbKy7bHrMFVtSoeNrkKxjE8Y8wqMV9pEBc8EW3Rg8Tfv8UPV9gipdAjNnYdGPFJ2jjMZAJ9S3Mc5iy",
  "key27": "2LeKjNT7GdLsmSsdUDSohE6H9m86HUVX3SRukhMFP1CriudLoU5MF3ApdigxHnHXrD9YQksh38WfAJWiq2VzpJWs",
  "key28": "2zRGee1maD96WBsXQqpBaNKEZU5L99jYaWBD7bb51mrXTVKYbUSFvhdtjrBfeBzUGqdkKwd1BaKPhq6vwyTUN3Po",
  "key29": "4NzDVVzvMx8fd4VKQtfft7gq298wGWqvAmsdModxjXCaar5kHv9EmWkSuojVAtazbqw5FQGa9YAfBKTzFPBdoAUg"
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
