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
    "2dC9vS5LwW6U7i1UnNQAyfdYWZM1G3SS2MznwAabeHszjRmMdfLBc3YsKRgnqfxdBGe3etiBnPbXVbHtAZiMHpnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDsus3xtgGDRcfmqJAk13q2pCx1BbJW3bWSKWpXoWAcdFjnT2wjK7g7i9AK8GbVbmYVjYp9CKzGdoWg3HMECGGo",
  "key1": "4t3RqcDhZvTnkYfnT9wmChV6jwPS1YdENiHfYMutehvM4o617VdmD2uEdn71CtXghwhVyDvuBSDrnePoLgp73zvV",
  "key2": "Wr3E3Fq4gZzYFYDyAkwzrG7YYzCs2ESLTMAicGwqk7Uf8axWJLb8wTdJgiZYwZ1z7UbzWUaznM9aUwj2ycTtt4V",
  "key3": "zNhd9H1suDZ93DRgvZywknpREftaWu671FM1dFr7qELVRfcGgVFoHkDfiZY7qCpSgZ98eZ3SfzvG4aDg2GQnB95",
  "key4": "D7bt9DFDmW27bwVsB8ikdN9BtP5mbY8miSqNibRur8TdPGYZANjDyZ3CyVu3jB9VkN7oo8XSeSGnjoHCX62TPnL",
  "key5": "4xXdSFbec99DM5ThQepkaK4VwMq2pgVnCBKHjrbRVrCZ6w5btmYqFMZ22jSHLZFr9arBxb3Jw7WBnypfBmNdG8Qz",
  "key6": "3M3B2mGfk3bSmwmAeqcvu7o6S6YMMGwEKQUjowoZZ4q2aeFUsSmtm4RcDgh7ZQG1bvZzch2pXjc94LUcfHLq9kNJ",
  "key7": "2wsNmwboGv9kcbVx4UEvwrz5kEdKBEzKLwTMSRJQy4u9KERAJQAcsmomZG44vuTd6Xhn4FaLCnyXhmsXNRkBD9vF",
  "key8": "2CB3cnRVKThYPBJZoiTQ2zU1BRkQrePyTAuF6x3ZH1fXfK7kMfroivdAXFQeqXhwJBboJNYZjZxTeqHei9b1Ynmx",
  "key9": "4weYqMnZBcKY6LcYN9KBg1zV1Eiqope8RGFQNA5dricpY1gfu1HSqqiNsoCsJBePjq1tZpACqVxTFgvHjs71xBta",
  "key10": "hrFZyJmwUXttsDu9fpA2YkhygQECx3AhMNLGzQqVit821xvVwMLHvagAR3WNpeoEKRJTrh5yvLbTXAhFYDjCh6h",
  "key11": "3PNSj9NUAWFrvboVWfEmzWCjFUHVUpP9vyZaBPE3QrBQw2654qEHedgUMW3Sfx2VejwsK9dfPCZr5jm3snphvJYX",
  "key12": "QE5nFKTPNK1A7UsyKVADmGPhzp7AnRSdZYJMu6enDN9DmfJrNR7pv619cfSucWjyKWWfNSa5RJCKCVZzz4UUSUG",
  "key13": "4RsdhCq75BEbQGc9xg7Skv35t2zkp2HzypLYrtJuuekaasbhin5pVEDnfHDnCc6Mk23cnPkov5LjGVRAjLdAwEcw",
  "key14": "DxmziXWh3PgRaqNUfjsrMUH8asf8dCL1Sfo8fQDwC5ZRZjVgbtu4xty3pKJb141xLgwsyxgB2Vz5F6toSxjR3x7",
  "key15": "3XJ3qZMFgWzWjodxE8QHFv9EL5TbZNsURdCNk8P9PYZu6WqV8f8fEyvJTrsGbUANYopE2Yb8SKMCCncN8MufJSiA",
  "key16": "37RmZBXggjQijna48goNhjSUMpNWi7LAmzmyzvWcMvSSLxf1DZMasZvNf4gVa2YepVL4Ecez4wdfUqEodhGgQzgE",
  "key17": "2MC5RZc9Sd8teXrYANfniyP9AiCwt9GcKRcvFuFEinh8NfvXN3Tf5df1mKc2QZnvs3zrqkbmRAPZCjVmmoqsrJrj",
  "key18": "4b4VhpcNm4cXGwxHw8r5j8gZDSKDFMm1ek444nVo3W7HyHyNQNKBJDpq6XpEXfvxJrVq6dqtWRWhidNFSwsrsme7",
  "key19": "42b8jnwC8PLZxKhgEFvycgLtPy3HLy98gtDdyGfjdoFSaki8CDijTZBinquJyBp1f4uR2TXw2wpyaqz74gtbgiYh",
  "key20": "4jtQjTxHqWMoMjL466B11fVZpf3vbAB9JzUWr4inq5fUSoWfJUbbBsU2YkcfaCYSae1XdN9SXexPAK5dFyRtNHGd",
  "key21": "4X69WX2J5CCxywCdgdQA4bpCHqTcgAbnAm1Zvm14vwChXLD1FfC4bzqb1sJ6jnJvDpMjadGubZoHfbq8NmdP29Zr",
  "key22": "4N3EpkQWJopGXeoizGg15yAt5pVnvRXZgDm96PsfuBqMBNskfT4ZvgbmGtxF1JZya6NELC8pyddqJs27omvwUtZq",
  "key23": "5F2g9KpUyZZ8enx5K525FQRUY47P1J9hZkcEvbtV1eh3LuJUL9C86NMHRdL3Q5oKJHXWJcYq5h8r9Lycbz7hh4w2",
  "key24": "3fABraLDe8wN2gnNNdZcDtEs2KPuQc5BeTwS8ggbtiJze2ZnhEHXZRVNuDZ4KntFz25EgNJGDgyToXnUV1vyNTuM",
  "key25": "4azWtSA92gAJeMtr8hH2YDyLstZkzVE2DBcEcAC75qGeFVsbZjA1NBpJ1wWR3ybv1TXapEai5Tvx59ZynfVhRMn"
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
