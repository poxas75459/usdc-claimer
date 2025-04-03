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
    "3ronY7NuUgvec6NnUen8h7xcTTqzcQwrH8DBghxj7bGe39G8dMtNLP5R1joQxJknhYZh1TJzdEBE1ihvh2q79QPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spgA5RNpuZC4MaXT5upiKfAGu5bDsu4KfaYDmckUMLwoSj67BKCE3ke8i9EpvHt4ujNDZynF8cAASFnUP7WUvRT",
  "key1": "5A7UtjQHDcEDymg2q6qCSbjk9DhTVbB2cKEqmwpMMwNzm5aXTAjfs7eZs8G4ciaqRireK1AoakXoQ5EhoEKqfWFW",
  "key2": "4GLoKhZiCcA147fMnZqygmKftReMzGoL6zqQL8HzP2kQqRHmACrXW8ZZzQQ9N72Gt9bPrtBsqdQuHKwVxceasQEs",
  "key3": "3Yi5QrPec5vhJCYSszFeTMHbiMs9iRWAN849d9jt3Lyu94cZMkRwwSFVZSrDrzYgiS91FgJcSSg4RgktdAwKEfaW",
  "key4": "rLvPhKzZuZffBmWuiFjjrzDjgaQdhY3QYrU8PTHJzwg5cL4GBA3pgHNWAo34YXfmkbA9Q2KrNX1ieEMBikcCVPL",
  "key5": "3jccGZh5ePdLv7y4PSE1Uv9gNCu14Se9XZ4o9nVTB8Non8KzKehibfRvvAML3TCz2dBP1zCPsCmknwQ3fGoq5hgF",
  "key6": "2aMfrLSGrcpDCdYNzAo98djoqwttAYgDXF4vGnaQE6mJA8MFJhZ5jSQCYWpoY4qt11kKCRQyaUoTCQEDDGn7QZLN",
  "key7": "5fLGyBd875u9LWy7Jcq9CBmdbtypDJXYea7Uc1yym3tn6ZTDdjWv8C3dDBqHcB61FnPKssmhYCEvLThvPK1SxXpr",
  "key8": "649QL7TQpZBG1dcuxwubT9BggGF2tXR9R2GoBCoAwD8WxCVph6anGv232EYoXPPWpZvzisFyybkmgUuwzYZwUK7n",
  "key9": "2pHa1FSQgyiZc4md1vyfo2Szp1tZuD568dMNyN7nEcg3j8XsD8GFiDovfiFnx218gEkowXoyTUWTqZBZ25N83Xgm",
  "key10": "Y9z52GtfPV5BL9wGoygjoW1oGDGGMmCfejsoB7RLjHv6bCcqogmwfCqFsqrKhpw7haaD9E7qx2GA4dCn3HAyRK5",
  "key11": "5CThPeZiAJprsyjo4dBNubUNxJKMtSUaGGexacAa7GgiDuBuyARqXKD1zaKxrzW1MSGG1Sr3aS5fVTjM8gZokcqi",
  "key12": "25x4CVKkHi8xrRaKsv5Roqmcg7rE93fEhJGdTYwegqqzCjjks1SGqyYRNqS5GYUoeqoAajCZ2Qbhyn2VT6HwchYu",
  "key13": "5rrBtk6iwwdvzL6kK4GPZshFDYFQHX1hyfGHoY4WZHJeY1aesFAEgWg5i1pQdu8AvJosd5aWLYzpHwzS2v7PCsEN",
  "key14": "4zWJBpgsbN4PYcsghLsLDLaTivQJCkV7M2UgqJPMs3CWYsqx3KCdJC3JQH2hC8LhEGiGPTqzeqG4GfsLiD6AUBcQ",
  "key15": "2brnNSkY2A3oAfnzSjR123SxexDSHhXuDLD9wdBgggPjXteaJDURxaisUzmrt3Qt89M8Z4wngcT2SdQzh73y2fiz",
  "key16": "2fvXE98EtA5YGsUSFhe768AVRazvPekdS9LUGkmQ1MFzbTeQJgRUyN2jZaR5tCXPiryNaFnP5vFF1HD1UB3PD3BN",
  "key17": "V6yRCUoRXT3uamW3PsZ9bgWuGtS5wZujr4kRuC25CajTAFgMm23uZ4LdXUzecyhEwgE6Yu6skaD7dqzq1a4bjzc",
  "key18": "9KgbyD4HJx5wWg3PZ3auanrtMWzBz92J7dMG7gYDAQ8AKFhCMyFS9yhQdD3vKkv2owtbTiDKU5phpWTq5mUakea",
  "key19": "4rPH8V8TMtivso1VWu7EFy5txcSLLvdL73di6QteZxxVBFZidEnecfAvef3Do6MLx22hRUBzqurxPKZMcmzTYp8G",
  "key20": "2VgagqPn4fWBHYxxqa8kdqPDTEYAumk2sKKYzWXnj6NaTDirwwnMSvkzavCffJ6mUECpQqbTmsks6F7ePtQvm1Qz",
  "key21": "3znaJnBo17MhFNmGqBD1LLovv6rpVShpEjfoNPotmLiEscSDwpP8NGHYEVicrrYbVnT5RN62qTPe67i8USJMTAza",
  "key22": "2wLKcLV71j48zK1TZGKZUeDfMnoNatw8ey48mJ3zc2TJy1raAhS4a5ZNkjpxrQ5TPDtuuH5PRmDhJRnEHyaYhEpD",
  "key23": "3BuqWMpKtJFK5awZEJkofarhy6WeyVDxwVGASycpAy1By26cu7EnEN38WHpNb6ydrcQeQRer5uYBpQ3QNJyUsxdo",
  "key24": "5icGrZrHLxGaivAudsssqmiRns9fe9xpqFMjx9mD2fgbs5XUHMmgNdXagEbeLeWfzrfCjU3QHFMRJ2qSCDZGVgiB",
  "key25": "VzAutKeYjNJXxGD4W2EMFJPKmbqzgbAFerTcuS3FRN8UjaoGN19t9WmLd2ZQjT6jKXnzUCzFN3HR5dJZzJMWYCJ",
  "key26": "X9D4XxdBs9onJ9nEUJsuFeagHU9TvNBHdmwcEafTQuLnkwuHRYZpGetvZiaME8QuYQVvkvorksDTLmEiQiGV4qa",
  "key27": "9NjXnp7kF8vLdXCPq8M8nub5fB5MSPfVpXUGtVQZfuNPyNAugRvrVFCJEW8X8nskmnGzLMZomixtXFY5tjSYb6E",
  "key28": "27Jsk3skdnTWPz6ZJ8Ac37NPay4kNYp2F6nsepf3miRt3iG3LggRGrb6k3oWx3RK6p4cHHaRpqeor9xZ381pzyHg"
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
