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
    "2ziphSHkuWT6zkiVAcf7ytDQ3HrUZr1HUV3QxYsaZosqx3ujFKjcUy8zXsawcBqkTSY8F8N269N3Rzd3CGbVVAqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpuJFjpM6iPK4dHaiHy1VsQNAk7Y5hh45AgQd43YoMN5HDTLAdvExdJVUuoiGAWfefotkpDSpf75VgovsDqK84N",
  "key1": "CniK6yvyS2YwZEtPAkHWX9PhReVmyYpPqKa62vjPZX3GcLMUg2TwSuPDYVRsgpEeJqcnsagZ15ofsuPh4tVLjSB",
  "key2": "3prFcjsc4KMiboLhAzKabQBewX7yovZz5Bte24qjzYghFQC14azsw1GEV7k4vzUSKCSQvYHgV5TPZmighkxMnn4y",
  "key3": "RRvCEkwNavwUNQpgG7yFsSj452dyyzBqronGvPXYZqGGveKo3Szo1ipiogPv7K9RvWHa988UdkeQkX1rxPhzxZT",
  "key4": "4SavfkcF1SzHhFDf3sQSmE6XR2SQ96nBpo9rJygcinCVDXHaibQEDfarNaBAcdaMHxz9NYzM2RYsvzDjQp7gqtqF",
  "key5": "3aKyYQhiCRPiwimQhddJHbha1UZuXcR5Zzu5DCkDzQRUUDgSzxQcjwiN8oqtniwCbXJ97jXyCAtfntWm5VwYX73x",
  "key6": "4ytXG3qC2jSQTJXvdtJCw6eWK9srgh2L6vCes8n51aGQSPaPr1fbFJs5A7zfipRNLzGwKVUJvJZfs6JW4n6k7DAG",
  "key7": "4QXCteftRCaVLZPKbrDAg9qqUdQ7TfrKSj1MNzuokUMtbWpoCTuUbohtbANqoaVFQKJQJhtJjT9KoxGk1i6m1kdB",
  "key8": "5Kat2XWoKig88YtrUiyMMKPNdScdQu8affBqzuzT5QixJ2nBpYXRkv9S2h2JNuGdJMqnfLLRpdBguayFSNgA9Xgb",
  "key9": "23wdX43cpGJVHd5oWoBoP6DNuBkjcCATNaQc3XwzdzXisywsv1C7VsCNKJsBTKsNa5KhZ4LTtWugbua2k2nDkboS",
  "key10": "63LE2S6ZBkWFwN5uygtV3mFDc7UVFiqwH3eXBfWpQJd5wmK9CB6xSGQPa5P7WSr7o2B3y18F28VLw2KntefWm9LQ",
  "key11": "4AAcvoDv3rzSb9HpH1fnSp9VEovopatQxEE1NKtxsNAWNBpLjkR3P5HTfecnMFvE1b76MZtwNcoVt99wpK2s7oxr",
  "key12": "5Ss2mg3mYTss1UpoFdfPhRyuArPXM9fzmC5WaCjfSy3jXGDK3XFP4HqgSvpNMzfB4DoxU4wKmXooYhhNVZ16PN1y",
  "key13": "4W7xC5SfnU2MDDoooyP7rTHLV8BeFkeT88Eoo8CBPodftg6o1LJVhhFL3xhZfXysytNwHStVeMNAi1VHYy4c2i9B",
  "key14": "3NuoxPij5Ggyz25Unn4qLikpvwc8yv3k2W8BBxtM1qgrcQCTme8uDerYjWEEdYyAS7AHUUUXiqxT2uxSsx5d6Q7o",
  "key15": "5QnTf2FmLb4wrepgyedjVJcfL7TyAHWL4YDgqDPKuXmKziF3hf4FWANKQUtajgzjdJmbjLUaYLx6y163UMTZW8Yp",
  "key16": "4PiPRErdpLNbn9yrmxKa51AnNFLt1e11Mgq5rtij8sErHgyoWb5SYqBinUGZhrrmJmDTkdcR5TstHi5WfpqzwE5Z",
  "key17": "iQbQtrnoC5mt5342TYQmD5dQLfX6wLjQpNdrPZwZcjhMJ1WPxSJMwiSxutv2UcqKWsVFUpDGSt5Pew6JWeXY9u2",
  "key18": "2DarAQHpsT2oU6qBJZykKs7i4mAqE2kXwB2j9zFVdbx1kiesu6BaWu2tpdDi8X6H4hvGLN3AX1KMuiVpPjb6gb1P",
  "key19": "5BeawkaagC9GN2kajxXLuK2JB1AMTHc5xrQctmr71Ae5zLhE59BEMfMZTz8grVCHHbBEstxb8M9uPRhzzDj8wt1P",
  "key20": "cfd5F5vKCyVTxPCzM6ieNcwZE85R3eG3qAVa26kSWbDwVYtUMr8wKDxQFp3wthuiwNhvRm7Z1EnKBARyNd6WnUf",
  "key21": "2C4Fn4c7wvm6jbPujK4TDQF9WLKawrrQabB4GdQHPTvtujVBp2Ra5BPXWjUdmxnUs9zAcyWYjFADqTEGjx9ZH2jj",
  "key22": "3niaui8Eu35B2X3zDyC39MX4NC5QHyTRaASuzYn2Ldf4Fr4xTFXmzpezrPbUWDsbK88GZgQTnXvx9N1jQqyBgpow",
  "key23": "2C6BtJoa3GbM6tvM5QAkJYduKGHw5hRa4CTM3UB4ywgXobNWX2bmpAUHWAFHb7kceGwYE8Ym3t8bU1k3jTRcBAGa",
  "key24": "2tQrgLsQaAQGum3qce6VMDKmq4R3mFEQmiGdXySTmRNcrakWnXVzNRQNvuh6X5UcEsjcMsTfKEEhSb8gu75qxdFh",
  "key25": "4EDhpNjENQzvoG4FB5PuKKtxDEupcfUTDAW8Kp6DNE4YLtsNVKTMtBUin7YpZaMZHNwRbVCWD6kzCsN5zpBBp8yD",
  "key26": "2FAj3XLozSd13fsyvS8SBpCJCA4GQg6NppwGotGTwHHyLLDraPckTyCRzE5sRUSrDdY82jvQp4y82vNytMyWzgiW",
  "key27": "4GStP7u7bGgWGPhrodaVzEXrJr3zrCZjtMgEHaTVVXxVBaStxCcczy58jy95aLK2idag2eUiX69VmXTuSairLLED",
  "key28": "4SJiYTGAJEpTBJ5y1hNJMWZDjAyqEoAWVM4G4ZbVQLnU1SXGRMoUivKEJtGRwiwju3xBsi7FTQbeuP7SvtVSfckY",
  "key29": "2ksk2zWFHTL5sL3UDfEvELtS1sNWKj1BWk9mAxMKtFp2igyHZCybmF4gN82dbxrYhZmnhamwHCReszx8ZvkWRxyg",
  "key30": "8T2qbwbhUuskdgUdTd1tHFx3Uxp9JaG5PJosYe4V5yLyhrzY9pP2nSz6sXRGbS3MAEzqGkBF9BKnC3MgxBMr58C",
  "key31": "2j6kk4sE1XPUni5v525aEJMV6Eb3K6V3Gqs5nLAwLMc5zDofajL76ReHeaWAg4oqh2qtSAz3x2pbkpKUA7YixnZa",
  "key32": "5GavNQLHqCW3RvbfTaXc1bUx41xSbLM4wiWgw3V7rqrU2DDrJhmxQadzwGawTecBTKKdvowAwHBNJ54EwGignUHE",
  "key33": "4BSH3gSXAvyz9Qdj2hmDGYAw8zzxqK7fqnNx63TWvPVyvQMmJ8gHRy3tYVpgJz9eyApH3SiEQWKMxYcHhdNjB6E6",
  "key34": "3zfBTykxNa4ZpwpV2ZEF5NPZ9bpMV85SWE114Yu1DoXFpcdgPszSUWHeGmwty8tTkytyErkxukPVGhJrix57KsTL"
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
