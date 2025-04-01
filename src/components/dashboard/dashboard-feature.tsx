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
    "3JwFTTaa3i8vPvQxgX58YVUtw6PLnwNkjeHtcScJoKQ4WyHTApZHjMxL3oF1wkpPZgmzoAE4mRSXghQxUy7bg5Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNXcMprUReyDmB3HgWnCUn7QbXVy3pgaNzNnLgrdzso2oXXNeuqbsYKQz4A1L6xybK9yEkA2ijjSwZPUyfkWAtF",
  "key1": "2NPHmiZx2kznTT3dJN3mUEvu8AHkgdXjDXSPuxVFXGCYJVWAVxQpE4Q5uDxV3dZvPnyySyU6yqZiS2Ed2EMF3TCX",
  "key2": "5tdrY7jJfK8nb2RdUnGWjS9LeY1z3EfnvthA1V4fCeXu9bdY7aoqf57XcFoFALnS3hNraUz5Fjv59LTpCams5LJq",
  "key3": "2g7UB1Xo1oNJGzqwiKZM7ZjTkfUGoF4nPMCJvv1oFoDmmMuPNkQA96eZdpKyVCU89Pt6mzCWmHawcZqQfpZtTqY1",
  "key4": "56bWejWyAp83iSeX9dKyjRZq2tPYALQV6M7RVpEDvs4i4dydcdXWuU8kgS7Aue1bxUAUzGs9s2ykCmRxXZ5qfPtD",
  "key5": "yrjzx6eqdZ6hcNLwtKW7rdAEC9ZknkRKJ21wozE2ttvVgDRuUoGdeMz55tCbA8iVjPVC5JpY9YJmpWgtzSSuVvn",
  "key6": "5XXEHaUceRZc4skHuAR1FbqCWxwau2ayu2B23JAw4shUQZNxC66bUZ1eAwXwvCppTWo18Dm4V2wA5Ci2uPygLTk6",
  "key7": "Rrw7ZUDz1hry9adJLkpHL8m8zyz7LULp5NUyPguLaSTeHUr9vSEmzhLmCHPX1Go8a66p3ihs6MJGrXosF1qrP5d",
  "key8": "5L3DARMoFnhrDMjBL8KD8c4qXKtsM4AkUTPTebBcDJHVfPfvo9cQ8Ypbwn3Sz5CAJmVXVvAfdMhYnsq73hCFpdsY",
  "key9": "49y1Sm36fiaygE6iELt5FaHzjp7bRMy1r9Ej8JXZMCqvGKxG3kzrEbqoRas511EjL8P9EfhpbjgV2ijAeVGcqRDE",
  "key10": "2HeQ5Wg9sB5gfVsSqQ3YeJWydfUP1Z6wZaAw5AZpd5eTNuPxXR1z8A5KLZKKjvHcybtamZbkscZWm6jS4YzqTves",
  "key11": "4MRHDoV3Fgqd6zvVykoWrPDdoRsbZQacgVn5P9gxg2aezVWqwqxgqbFX5sM2uHcCN4YZTHZJw98GceCgkDVMe5Mp",
  "key12": "DQGwGtzc98zvSzwAEV6uG2nAPbJ9Vx5n9L4V59TXuLZDeGQoRbocGFdwpq3YfxhwB4HDFfaftu38vaFUgeJ2knh",
  "key13": "5YssmnHnxfN7HUrAgU8U8payevUnAVrgpmr3CPp3fb4QjhoaAAPyNd3RdDuWY9Ajwmri16fwzw3bpuDHvxTzRqdL",
  "key14": "YCcJwkxbnMS3uDmoqQxCCK219FbrPQMPrgmVTSNerdx3V7PBCSFJ5azezVkiAdJKyevAM9Z4JCwM9H2Ta81MvkJ",
  "key15": "4ncPhEzhUkVvbW5QWihPo4YpWSwCo2YZJA2ov1sQ3kBa4q4GshxvM575DCSY73PkNjYoAay1WEx6wQgQueNfPr98",
  "key16": "34Z2Le8XDgaagxYYkVGmdJwnnK5nKjVNf4AyNUaZtctakzZKRRQ7G2nTsStfEBV53wzAGHWovzM5RfUJHhgU77Ku",
  "key17": "5MKBrzmTCWz4zs3G7tUC5XtFDdwjXk8hW7kRfx1mZxDHyfmDCG75uyq3GgeZrYQRw9pPmSxRfQWeJdyR6NfiefYY",
  "key18": "5Caay2vhtb7FD4EnCKdTBF6SbPcHH6H1C7XQMehMPQwTCEcmXbWqXPeH2nUj8n2iPiTbrcm3z4tL1ySD6QKAEis9",
  "key19": "nNUCJvK8LZ8ZEDFFCRHNHk9r7XNns64EJZ2bxbVS269A7EBnBaLUrzsukgtuggBNzCG7ZJJYLsRP3ooDj1UxPmS",
  "key20": "4nuQcovho5bw6SvjQ41BW5uR8xP8sQq53mz3vGRyPG7SXpUG7K7KCTZ6zoMtk97RXEM3t62gS23LQohhpc89tfoB",
  "key21": "47srcotFkSNd3yYDF1V4QBdT5Gn43Kajjad2EFqN8QmZUZF7WFykqQfebFdQG1R57wEhuCSznP6foUYEzx6WQANA",
  "key22": "58TbZhkAMdFKUvXG5TGe7jsCokuokCkE5dToRUwtXAwiAuN7L2C819bzrdoUvq8CKgM6SH7foTmjXWzsvw9zjisV",
  "key23": "2wo469GTjA3KKWJtS5t7EkxVDuRToeXmesPcZkyUscGcnKad7c5FXvrTHbN5YFuHWqP5QFkvvZSKsDfGPPAfNrzq",
  "key24": "5DwT6JcPVWyvssRPUjmojdFTyuHqrdNjABVc2b1dV1Vu5Fq7x6gP8Jdu9t3Rg4r39W9KoV4FKUZdH24ibHrnE6wH",
  "key25": "4jXM5Kod23c1DyCXF5NErcX2GGXFiBE7hw72hJ5y5QXTX6uAvvMnGyHpTzo9ofsE6ufxHbDDNPtMdTrLBdV6PBR4",
  "key26": "2uUxiNchGHRmnBPHhEgCox8JUCDjxtoyWCoe31SxRCqqLb6GTHrpjEP8qBaPzNUU4tztexAAztaZTKKJZd6mZxXr",
  "key27": "3gAGmfnqynKM7JUQK2Z83dpyhZUpW4YNzwVFsYAm2aNRBXspFW7UZRUwzthvBZcQ4qbrpsLASdWVfcuNomUJsCRe",
  "key28": "32qntDLfFHiLZ7i6ZmNyq91s2A3tHb95LhDSog7yVgMnQ9FuN7NgnUC8VWNg7LAmUWDzF86hGtJvdKo7k6CryWeL",
  "key29": "5qNfEQKWKaF5ZovAuMYpHnDauEVuGEbNVHB4sr2CPTtz8eUYJ3Jj7ZPpZVtVJtnH749poTC9XmEQJTDAiaJCKXLc",
  "key30": "3td9cqRLvJEfCF7d3XKiuDSLsNy8QgKqNzKVRCXuXKwXxWCyGWrcpG2z5orEVpnt1mNsHK3PcQsczQdaEjCWxn9n",
  "key31": "2idnvo2GKimEaBSiCwRHcmaznh4NhgkkgvR9jdNpHx6WANixqKJmpPvSEcdes7g8sk6oDiPJsYqPu4sN5PhPioE1"
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
