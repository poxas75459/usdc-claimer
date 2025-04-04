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
    "2QcekpMVfdQajmmymnNDFNQWFrN157m6rh2BN2P5GhYuDt8WVhE4JzJHvKqFv3SAx5UDBy1bALdYQKp6ABKLQ2Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8dnigkdK8sQYL9q9dxnNAhUKktjc11hV5sNibJHDjc8JXF8WACRXS4JtNdWQPUiAbPGPmJG8C611pZPH6Ji2HYP",
  "key1": "49CNhuhb5bACe1MM8SYBAfBV923cjAea629Hw1cBkAGBUPekyScn5GzUhsF3JSuMtu6XW3gFC5qk6Arxcu5Ciikw",
  "key2": "5JYGd5aXEayrPpkNMwKTdt6Euj6HQ6sdtv31xvTpCpsGJyGUMwCe4BFSv9sFZfJS7f8TzQrQLgY56zYpD63qvDNf",
  "key3": "2sFJknM3VdW19dntP82HrNrfbVEA8u2Eso2DFuNbY63gaZweTHDQeJvdiQyPUk1Wz2XzcoqLLPo4haZGK2R7fyt4",
  "key4": "2jnEpxZ4Jcc68krRhmsVG9BP6WYbDWiPJjM2ecThbtnu36RSvcMWKrk3Xtj3y6CAeD478j5JXWf7jFv6prncqTLW",
  "key5": "4xPg2b4cAA3wGt1KdPS2xka9sZtG6HfnNFxmxDfG9n639bojixCJuhRQFB5FH1roaMdgiQnRUsFaXuegzQdPmgGg",
  "key6": "2tCS1qYF7dy4FyDAYSceqtgqg54oA93avAknKPZsuEyyyNb9SwsFsgYvmwnPN7SzimtXak28MWhsL5QkUoMwmVbm",
  "key7": "4ubPtmYgy9tNurkNPS74iwkEhGRQgxBenCmxszQz3jd2wQhtQxSiaLX2uyS28W75bcoDUVe5zC3LGtTSqZyjKFtz",
  "key8": "5rLWEt9EPShpgkCq8ZtABAwNy2oaDcmsTY4no15svFqLixuVcAWQXFpcj2EEQwVhwuodme6EsSkKn5zChaoF3fcL",
  "key9": "5rJghNq9hMo3kpzGsDTk2AApSYGdWhdb3c61eYPqnByxPDLE8nVbRk9qMGXubzwHj8ZzwtXFwT78FctwZ8c6zyHD",
  "key10": "4YUD94x6CJ1maCSgxyHP2xNCJXCYtN7L6bJckpd1ZF9XA1op7e4Qx5AJDHRuNBc8Rtq63yeSJtH49Lize826BmSA",
  "key11": "5U2a7bBDEvjVDEhPKeJdGMS2nFmdpPKk7atAgHkxzfUT999cUfdrpEovzP9RWLJjrVYxbKnqMbzaBBHbMv9strXN",
  "key12": "2cHDWnV79wULJisQnYQ67eAW2QdKy3mxfdsD9xu17W1hSpxTzUaUKQChWHwGzY3AQ7A6NSXdwqBJ5VmsnToudmBY",
  "key13": "5kyjDqsRcmANT6GMVohuGsWYr5QyJaq96jWj67TZdpXfhwaYXfn4zbb5X6FchnrJLXG2WK9aruWLDQahyeQ6Lk7K",
  "key14": "4t2WVFkrvVnBUiad6obgh7afNxy3NaQgEVqDXDQeHe9vPscspx85MusDy4r6wKjPA5xnMXg59z5WUuSLrPVpb8vP",
  "key15": "2Pggpeq1e7SjbnzNubnajDfPsXYdwLbfBj33iucin2EBV3KVxi7yjEycBwaAe37QpsSWiEoYbKjW5BiLPffpeoi4",
  "key16": "h2JVA5PzdBiJpR2XeVCHLHrJxCfXXaht5Up33uhcSYrCCLFPs4jJVLRopz7T6rFRbJYKqdz2TMGtKdVujPNKiD8",
  "key17": "4mgZbEeEUAhHXL6Jh7dKVpWcUJQP2fe537NYcJAqNLN7Gg4i14mffNqR1u8FCCRC8HAWRCbcGfGbDXZiRKqxcPsY",
  "key18": "4Y9qhZVXnhRHVaUWzMH7jPNazuueNAwU3nCDeFdiGJ6d7NRpjcTNFxRPZQ7k8s23seWbpVGSCBpnKyJ53CdQW5KL",
  "key19": "GrXmuKXxn8Vt9bc3dYsLwTB7nqEZJ9wG5SeUFoMJicViJiMfAAWxja4eCpNzaDsSdf335FwLCy2DkmgRPLyHY4y",
  "key20": "SN89i944KMB495J6A8QJLhCLbbbHhHKcMkR4SYU3oGpWFPsWCH8Ff4qC3V6e5oCS6G4mqE4mfys7QTFrJprYnkS",
  "key21": "4GyzYwRVqFJ1SdUAKnAst2rWnDNBVUHfBHxzh3AM6AKH22n4TgKnZPf6UxzDuJj4qiwY8SmmUUkFS6PXsqin3w9k",
  "key22": "3pVbqYJQPgLTswyEugwX7mcPEgCgMNXYPr4MpK9coS4b6VGMUunbcnyEFiQ9pRASDYgnG4R2UX8U62TqtNqCAJWa",
  "key23": "46b9qDschzrfFDeVogysjasA5zdQ3f9rWi3QSLtarMsSSu4jSd7CAV7r4GpFyKayKPmcgKN9gP7DxWwiMu1B4irR",
  "key24": "4rhN3A6XdmJYXapn1mCu9pXgSxLVWNduSJqNkXzq8cpxdFPJg8ciKVnd9xmFy8UTUG2pgrqiTQaDXMLgvz4UrcTK",
  "key25": "2aMuy4rwD2bFfKo4aESTfB3gxY52Tu7YNsYYqyGkXKAZJoCmamFad6uPwUR7GP3W8aXE6noqA6DhygWz711w2SyJ",
  "key26": "46CdnoQFjjPJbEGLCSyyRQ3dmFevKbgBxZLPaYeWEkdc4a14Fhmo1dRixPravxZtAUSLGyyNpumB4Z1fRdZ88sXJ",
  "key27": "62UA5CWJprk7PsBC6YLvUAteYqadm2FWjLhMpJgh7qSBgNh6iCDw2r6uAXTf1bgjdN2LExFmbkzMUyNJfxRVapq6",
  "key28": "4CXNevH72z1CXfFMFKX47TzCmin7GHgJ7z3Cs9nWW2c3rckLFpAAbKpkduxxf7XsXTNbQpdgSoTDnJHxYg9P2WCA",
  "key29": "3Bp6egJeei3CzYQxbSBgMMsmDXZyrsdFw5aWtHvnfWhsuXVmXJDeCw7dbWJERhYmshSpLf5vtSFop7ekqngXJ1tE",
  "key30": "5tsmyMMx2YYrpSQeigtDUFZNXMkeY5dQvew2dH3ztfcUcePx3BMxsFQn7Hd2Vbmu7LMnicrEEDm84Abunu2Xobxd",
  "key31": "2T5aA1S18pZH8giWXfmaMEKfgLUKgCvqZ13sMwoHjBLhKV7oagwxeiRfwucXSckbYp1CCngXq5nWK81EsTjLXiE8",
  "key32": "4qKxpkW6RvhtNcJn9FxJsd6Em5jWatCDSZmuidp1Hc6hxXNLP45cC7fqsKNmeSYmmG55NFVz2EfYmCf9jxeSJu8w"
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
