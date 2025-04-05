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
    "2FpR1E4u3s4oRaWvj1UA7UQXWHuHhqkpZS52iCBDtqa6CVRWrEH7JFYfK7PqNJSd7XeoY6rhC6mUCe1XfbFunmtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddsHkaFi1UUDooXDDUee8d3i2dQSXiy5UZfpKfMJVcNJcpkbsmA9JkDKdAtsSUS1hy7CaVak9w6odkqPJyLc9tJ",
  "key1": "PPQKZ6qjAGhv5npKqPe5TBXGWDYW5RMMvcWfSorz8HDZBuz3UsUxdH3Fv3RocsAKADoDiJSsyBDm6RSZ48GQVAB",
  "key2": "HTXbPX2kuDysHrz1YJ1PTYVqAZHxmHkLLWfwqin3RUsSrN7KCGsCdRzKqngPYHUBcq3mFwKD1dsCx6qj7J1eAxZ",
  "key3": "3d6rjDo3jXqyeMmSgfMeaajhknWoXoTL1cEVodQjgE5SzLcueasKjpncFiuq4aCK2K8gfLUVwxHucKxSWJqHzuY1",
  "key4": "652Qs51jgCg896H2nxec4KVhP3za4ugeiE8X49DvT73ZAiV8RqYPXbES39JPqnEquD33KpebNs8KwRkRh69UgUN6",
  "key5": "5ydBajA7MK526UiFuuFfry3KLFWJYcBNZ8BEE52gZKCk11H2dMd4SAgvoYUy1ei6MkNhk3RAXdoXAqYwMEujeQ5j",
  "key6": "TeFCxdYQLBaHFVk2ADuBkzjpGbjgWb1xDjqsJZMAYhc1sBC1tk3MkWophLRD84rHmraDLDTdxF7zaH98MtEiX3C",
  "key7": "4c3RJyX7Z7vbKjedeTahrA2jWT6sqXDbJxNMTu9MLCSBzHyDZjwTqEJeVdU44UmmDLYwpT4G7peDYxPmBNULi3Bn",
  "key8": "5vEmLRtNoSuYPGu6iNbdMR9T1K3imQ5ZMpdnLzaQbPm95ce12G56w2twwwDR5pNXkZxu5aa2pLwMjpLADu1u1djM",
  "key9": "44vkZUmLFepzGhxD3aCeqNcjia64NQynbx7mbMQsfytJXXJbu2D4dyWuAABweniJfUkWCuNpmq5j4wjMuz3AmQ1R",
  "key10": "5gY5j1HRcxhMXGSun8V3cXVNBAJdyuufZazqtg2Y5fHXtxDuMxiR26Q7BBgXBsX5LDb3Jzv9DU7M6BNyj6KmcLTZ",
  "key11": "4GZBxqE4ptgDazYDUgnoYM3TTakGvD3rkwGLFuzfxR9Cxg9vAkg5pThcJ4GnWkDNExEswfDjwaTGx8APZ4xna5xd",
  "key12": "5GufSh2HE4L5a7A28AGoaDZutXYjfoZ3LCLvJAqn8CZL3dYawFExk3GrB1K1h5pyTRtC7FXEZX37XSX8mMvUphkY",
  "key13": "3NsMt5kv5YmywLQWXN6KgFgu4jhFicCGTE9wPBdbLhsKnV7QhihWiZ9CnmiVfYKYJiyXH265eneufKGZcHPkyxDF",
  "key14": "4TmoYtej7d6gEhhCBjf3nEyi4et7MJP3RBYDHjCQ2dse6anZ9TEEL8tvVs1DjeG32xZuu86G3qg3mwMaGtvZD6Jm",
  "key15": "2RoCb3EkGA6n3YnYFdmBjjgx346975ZPct3FjQvxBkd6BQbQzXKpJ8gXLt7ao3hjpSxJAtdsBnnA6QKMQZeX2RXC",
  "key16": "37wAoJaeDuVwTonLJCtUNf7op8DYyF7XjeQmJcSXEXseYku2gMM4UNPG9hRL7EYNYFEaKr4cXbEe9Lp7F5GAdunB",
  "key17": "3KV9RJnrE1D9a2Kraw7FmSVjEx7cRR62zzH5HLxvBDHgTKXxKd7aNmsi5Usc9g4PgcbbrgpoJgJTwU82XXh4yqLi",
  "key18": "kd2DPGGEwHc4tWz59G9vVANaL1dP4GtVRoH72JBkoLxE3KaE8i9xs9WtXvChazm88wNWQMZzjVVYumohN1jn9wm",
  "key19": "4qrYDeqBo7DYoXTEKVvyr4Psvg6msDqY9wDcYzscpe4o3tXYeXCZGhSG7nu2PpX9bSECptnE8b4QquABextEtVpu",
  "key20": "26KW5B7ceHhT7sRXM6YT7c6eo6BRcJ2vdRbn9cbFHGazgQduoxUr81bAdXakQTnWMgVhch6BYJrpcT9qHg9d9Adc",
  "key21": "2QxBSmxx63CzWdxApMYix1k33fTTUFF7HHRWD9wG4n5AHSRnkMGarQGUyu8BvVHXobFg4mgFkH3PxA4Mn4MXajax",
  "key22": "2rJPSNAf1H82QR2cDH6NyaP2gDd9hTKZcqoNK3XeZmMrwTh8t8PQovbNWU3JwjKxmi1iiHdECXGR1rsWh6QPZZuS",
  "key23": "4WdgVjnFarueiuiqUCFk5J99EvDTZDs6pcAqHYpRmKuMa3Lr4UvWus3bLa8KZUJapm6K7aLi9BzEraf2LmwQSWRQ",
  "key24": "2MDDGSoioh4vi6ALGEgCYCDFJEnHy2bAGNCgzTiufkr6K5AFZXA2sUju3EN3qutcwF2oMXVhoksixCdBAj6LdYrh",
  "key25": "436waoVN1Jp6okUpaJvRyZfGtmJQnrSWUxJYcNbUSkojWhgjqZ3rtsjLF2B1DhhdiRSLgyaoxSB62PZwZ8m1zzZ2",
  "key26": "5wRTA2GDRq2VH79615P9RfzU7ULz5DJxrX7HHDqnmRtAZpFQqaDSLjVEgozJ2maaDnb4UFRt67osK9mhnPsqdsY7"
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
