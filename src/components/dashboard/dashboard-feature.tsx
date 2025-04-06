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
    "5QQsboGdtijikUbnEwWQvf65E2ptQC17B16VQMrBtJ4pHgVL3rkkwGDMu978Qp8NHnHcpCXV7XGmgvp6MXXaoBZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkpNtf7j1txup7XRsFZq9iDdeJv9xnXVb5ePnvfeqBszqExYNEZS3FzuM3DXmvUZ7QmCTdgaXy5qzatUNTZivw8",
  "key1": "48t3KCre79bnaf52hWeyj6NJ91Y5mZ1stwPzKqkoqY76MLdCHV2MUnTi8p5b61dNGrgtX2v46U27V4imMNBNqmgr",
  "key2": "4VfvgWaJni9XEgQvXeUPQESRGKt3YqxYBoJ2uZRGGiqbPGH6DZ8fTCefLoYVxRYXDbhW6yHzJ7NWz6KpMDUo7SMJ",
  "key3": "5LX91UqCzTkrppsBhymai7qc5VDtpkzZnLP6U8iSWFDcgqVMthbB8iPQjgTR2UWEE8A5pSX8v6Fo7z8WeJACAC4u",
  "key4": "gvaNzGEg3rd626fecbEhsB49H2pr9mcybfRLZfLoFQGrSoBVzQGd2KNF4ksQgbhob1w8akstqiu8xZPg4bNEkm7",
  "key5": "2JFockrqYRTR9xTgh62vVuXuazXM5eKHLvkhg4LKG59uP4BbPRQYA6kor6YXNYL56T8JkMvhes4sWRLZUmM6aFkW",
  "key6": "3ZQ1znTKrWnAb4XxFHHRaotQdxm8CE8CpKeebzurUX9wneDRZ8AYyMMmDV4ZMkCANchX6Z3feGQcJtDWwrVui5gU",
  "key7": "2d1br7rQBjYtbZrJ6nKmKZBh7gUWncSPa92Pz28Aji58hj8GD2i4vKgrhQzDcK8iJ1F16Vyy3VJ1txjqkqY7uS3p",
  "key8": "5hakkvbwRcErBh3rdrpxNXsBgUwrQ6pfUGFu2zHcSYHqYwySHmysTPZZe6yrQnqNjZ8HQyjrxRzLSZjNBbtewHQG",
  "key9": "424NxgUxDaPYUC56PfRcrRRH2fH8wMotMBFAgWRXpU2m6Rbzsb8WVkJP1o4X7t1bZ1CY6u6B7H1u6L7UaDURK5Y4",
  "key10": "4AwNM7PRRC8GDAZNvXg6zjL9f9qB3ADBg9mWnzydg22EjCu5ZSanU538LGmqvSLDTgQC2Q61hQXh7koEGcJAmHjg",
  "key11": "2p7JZJJHXUwiv8Jj5c4qw4RrgT3R3T9y4aXfGM2RdJM3eC3xPuUTrU9kEbxi4cuS1PMxhcU5cvbe6TMETrQegz3c",
  "key12": "5sRiDykTbQjaNgogMe65WRxSiAPqEaAaybcxSbhu7LfNBprLk53rsGb7ygKYxyP8EsejwM1XQaanUxui2pNsQEfN",
  "key13": "jYyo6ikDyyXZYWQnG1EaLYow1MNAYp1nhPRMRWjQuA2ySKfweSDDCjc4ZL9mdhVPS536zCowntk8nPHgvyZorrM",
  "key14": "3Ydrxc1h8ZMiBTqDeEHCTEj51oVKXEMUHtV5P8K9aqggEHd1NzLVPdenGLBiCUjRxtRJCde4Hb8yinev2MEdEcje",
  "key15": "5YwLERbxTs1SKxF57rbWKtzYqvShVj2TahELu4EkLgMXR9GUt9cjikNaLFLFDX58xAHyoY3Y4akmtKW6FJgBD8LS",
  "key16": "4kt1pCfmdVxBSM1sSNMjcbiL7326orG5F8q3eT6v1RJVS1VhfibcvYYi5nVt3E1Mz9x1u8xmhPcisntyRVU8RrwH",
  "key17": "2rQZKGTuyMNwkxtaGjB69hyPY5SkdFoM4NYEGzecARzwtHab44tFpcmLRPa6x7tpE55P7mML86RJCnj6eka6PhyE",
  "key18": "fxP9CGAXWVzR1VPCk8fD68UxwR7r2maxA1MAUsZUC26n3h35FoEf17XgZC4khBnLZ1mh2WdBHxT3aSqPzZJvLNj",
  "key19": "5W363SQ1J7kFFBg2476Nc7uLShajpgNUzzqZHj4NvtAg4Hh9hJixCoF3qdWm5WsLxPcEtKXTPnpgyhr69sAEcWyH",
  "key20": "51bAJedLYdJYRiffSfBBzBjBDXvyKZp5xq3sxUjbViN8HXNUt6guZqVprcJCLggLEJ3QpszkH4CK1DhitLrKijdV",
  "key21": "5fR4tJzT83yn4ikkXuV4YpuT4GZ2sjj5JKpfEg1QrSXjBvUgydNSVSktkMoFGYFqE8W3tguANnz2Pisohtz8urQm",
  "key22": "2ZhsVHJiLYEoehSYDQpvZ9cgJaKbnaMNfn6MPvEfm1AA9PmUowGFEHGj3QsFeC8gSV258DvD61kTpXWBBJ91pacU",
  "key23": "32ZJSkwVi4xBFhTc1e2AD5c33FHEYnub4AsiVmHz3KCbXmjhKydbYy8YQhV13YMtnKR1RRbGDCverxmo6io1Gb1s",
  "key24": "2LbgQQt67qczJ4K51istujfWjDQXuwk9E96ybRKUgou6deUaMEV5tCs9M1V3o1LnJCTjMekX9HGk3TuqfTH5ikuW",
  "key25": "zXt6zuQdBZYanf2mNc5m5d2F3TV1rxmUybSiVMzGujWVMXChKVjMv9bdPujfkRkdBNVfNLtoBHKW7ZxLrftJKB4",
  "key26": "627UTfBMCTmjR15DNiWq6HWkraCCdL5R1ctZiaWVPdfX47cBzzDyEUGZ4Q1BLuuX3TbNA47odj2e9fLQEDBLAnBy",
  "key27": "izmXrALHpKrf42ZSzcCz4mxRuQVBm2fWo4sq6LKgWbg4jk3swWq9Jfrb77HXuSUW2txLwKnRUPbLP9e3gbfm143"
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
