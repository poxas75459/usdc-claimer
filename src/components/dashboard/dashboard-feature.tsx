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
    "5GLk3epuUoPyVMHfxo3kp24oE5fbQHWqdE4AgsTpvq7WuCoU35iX76m693FqkSvdbaQ1Xvfu91k1wAx8YccKWRUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foNHXGfa2zB8g9ujdX9zT4Qn5K7Lh8GT8m1APgKxSN9HsnuDr9W9LbR5pstsEUdsPmXUHjSprvNw9Bg3o6kiUxP",
  "key1": "tsJnCa5ShFdAr2833W99ckCoak5WdK7AZqRSTGx5qQA8fjkb7RDWqEF8HxYNrjBMRsmYTpt5Lz59FLakY89GQx6",
  "key2": "57WrYwgEUS9RWfhPSSJob9kE6B94ScxPkg5H2XMhWUaFYwynSs6YaRocbk6n2zTyeeykngG4VfQpt2onmXwyVPsN",
  "key3": "2RN2gMgeVX7XDaoDbttRgvVsjFDv7TngBhrXAbKS1rcbxvLpjMyqNCTwiWDTDSxAxuHtP3NctSAAhGvVogPxZW5F",
  "key4": "2gKZnW7mqrCiyjp7stFqt1y26A3nFNGFrh5tFY7hXVRkA3QvGbcDc3jd8yPqjHDbnSmdDVyWFXRnMUNE1TcpbBpP",
  "key5": "5Md5xZFzY2fULoaPhZ6omjKdskpm6Cs73bj57yvrZyu3qm4PRJzyZqZbnp4o688cjY1r9JR6Zbp1oTNZ8fAkb24S",
  "key6": "5WA5mCRxL9YYy9unEuttTVUHgRUiYSFVcRLggrrf7VXWVdRiqGR8zXMvNsjDLyZrtbat2vNvtfB8oNYEkydzhZ6p",
  "key7": "HYzBZJFNZGLqRgsp2tvFjVZcL6HfVzqSqrM4DjHVQQBSWyfHQeyzk1abAeQjuK7854YTWqEcysZrDyc24xZW1xK",
  "key8": "3SEB8b8ShuXGXxAb7fESJYFaB6pskwWbEBiL2uKEGhjxNaXPDrJuqhfP9FGrMtf2BHMvD8e52m9NYfGJaRJscsYe",
  "key9": "636rg923gCvRv9Sb4uP4MbNpTA473d5UEFenH6c8DWqMWvCC3cUGALJ6eaCAs6TtQ3AmvogNgsXZzsSXoPqrVRAT",
  "key10": "4sStxXi4Zm6shhTXdyGme2fjMETke1A9XEedw8kduZvhHNPQKG5URaJmRvZxF2VJwpLv9frhSKHnaEv4k3UVYF3u",
  "key11": "5YbVY34dAkaYxFK4JgGYtySmbqFaGBsUaenFxoUBbBcx3g8xogLzS9Gyoo5WXojLXsfNuYz6DwxBgEt6kcXdVyqk",
  "key12": "5S9Xv7PuEUgRzmLPkjCcrjq1NYyLVorWxPojCuHg7bYgXN6TsNG7pqFGyPMS7PMTPNSPSkeW4GxBFV1frD4zcBr4",
  "key13": "4pkbRKdtKVqehwPJ4oMU4ekYDSzE8LnaLTYuQozJrmrbKHbrRko9MCDAC5wvjByG61wNxfkHG1eFvZqPwbCf95Dq",
  "key14": "65AMmdUtgZyaR62jysBpKuhGExXAMxpfGpfoBJXTCZnyDD2QXj9E6DyE9wqEKwkPmRNv1KUBfHNfKGpdykKKurn7",
  "key15": "4tH9XrFb15U1R5NguJgiwHDPt8FchBa9r4qHRLTn45TPeUZFAiP8aAcf3uwPK7ys47pykg1qrMF2FCE1dqt6f91W",
  "key16": "2L617QxmGGq7HnvKHqxfmCLJnsXLsabsW7oJwW7eUhQicstW7zMgVTDb63TV4ij6KPsx5ZATFXP1nFKXT7ubukZ4",
  "key17": "2aAiAns6cYVk5Mt9yM2yUo1Mq7EzwLAttfbPSUmCZzCMBxCUfgvbwcBbcXFaAS1Pxv2dthx6vuiA2aEWUqu7172w",
  "key18": "4xiqTwSv7vxZtuPtwb7ze2cXheJXtJ4Nnoo2o4FW8K8raAM4RJiVszQ1iDLTEAWGxc7dAZNAEhYF1GcET3uF5mku",
  "key19": "28RUGvAuqttEh9KVEDxtrjFJepPyY3zDYbrFe8XmK9wsVBthr24uYzd1BjutfSgNaGsDKM2dscgb5jKg8t2kV9UA",
  "key20": "2R3eViwEtSREwFcKNCT5GYH6JkvXWC4ErqxXLvoPgwVv27EkMoQYmmCjBJc5Ybp6o6ME4EXhbaBZrf9gTG8S4aey",
  "key21": "5JrfUAsXFvKgTcyqwiVEKWm2KTLUUthVBGWFzA4mEN3WXJVoETB9DndtcawPGkxG9TzYPJwzHz1vA7LFwn5uL8Mp",
  "key22": "5K8g7ZSr7tRSXPV6ME9kmsTtXFS1fn1VhX3Pn9XTpwYjFjxtDJLmmprFbrfJ2iaMx2iCnhTPoftTNxqgXjs7AMwJ",
  "key23": "3FWHtY1RgxtXNqeWcacvEmo39zpv41CEV8sswvkHgETNLTPyyuMvRiPhcZotWcrLStvU3ieQhweVaBcogmnWTFEz",
  "key24": "4sdBpNPSRmPCgVmkS7TDEbFKcJtVUwuHnsUaibV1WwiXSC5opsFzHf8TU3igFWtcnqziGNTxBU3jZwLm4zn3FcES",
  "key25": "5FNtxZvxodG2k88Ys3hD3BRtYXb8X8gYQEuzrgXsutWYHgsU7k6Kh9C2dvEbo8oxNE6MouPs79EM5xpp4mTXfPG8",
  "key26": "4SKBp8GXnNNfY6sd1R9oWyqYLF44x14uXxBr11M15myqawmouDFwvuB1YkuiwPqGSoF1jpV4cXiQSXe3N3NXAj8b",
  "key27": "5WdkmR8wCJmVcGUWTbvK5yW6DWrN9GGiWwaHDu64uxTJh65XjPRFQENdEKJBx7QAiaC8ugNLfRW45AsjeKsh6gny",
  "key28": "4JA6Rr5t6nCKKvccZDF8tzx2SMzPLwccPqKsX95ukTSfQdAsZEs37Fotez2kNaWCVG8AoyKR57a5YQKeJPaQWWos",
  "key29": "rHu4oeJJMiGXL2Xbxrs3Hi9VmSga6bjznnQKjSrMhDJxTHHVCHWWKhjJvyrhKz1XZKn3xG7fk2Q2wyz5tEiARMz"
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
