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
    "J4fR7njSdT9dYH1b4JV1JS7RTYPDbdELBwVtk743BgoYkp7ZjcXzsWA3uLCtJXyoKp6psFjbycKTuxe4xqhJvKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XD63K3GFvAjaVjT7T7yKVAaoXQzHYd15sQn9mSFkwLfibgxLtg3gDBBAtuZPpV2aQQpNCFSCfhRaSXMuvM7P3iF",
  "key1": "3AuUFT8LdPNoB9GJaF3zcYisewCDMzQSDkixAyLLVxSAtHH5m5tCgJgLFz6orrQ4MjvQKqf4Uqj2iM7kDevKbQ8C",
  "key2": "5p7bdMCgvBRcJRZSi7msC1QK6thuiHrpSKzn6fv2Dh5wc7pyKBKNGTPHRJEXAW2dgETJzjmd8Hs9a7uXDQSXa1b8",
  "key3": "21n9U6nXHUJmgKbU9icF2MY8eiCFkhnVzi6F9n1sqsAR1ikmh8xMNPEwEYmdZ6uWbaEpEydaFSGBfULurcUqpkMi",
  "key4": "5xhpxxJSBu9GLyzJ1854oe798w73ksEKRp8mmTZCoX3iQJTs8A62Qfe1Bmwz43eY2LU6vKQkDrzWikKUBhg8zVu4",
  "key5": "4ZoM9BwuoidqbhQ14dJqSGJTJd7QmAwPPvgMpVVdU1NjP3apkfoWJrt8yoPj7aS3gXVYwEuhLkkPZfsDvbCna4EP",
  "key6": "5Ph5VKpoqkwpbrCXzZHXEHk6toskhuzZJCRqaUcbhPUw8HiLP95rWoAdAvksNHYQKut1PcPPgQZ29nHhezMF7Cta",
  "key7": "3cbcA8DCL8DNZdXX1n9KgqaYgXTL1LufQaCLsVMrVRHuEsWVD3hAHefsLTwFopHz98CKJfqzvY33nnDyzJ44RLZ1",
  "key8": "UUgHoRArHtEgYCU5CacVrv7sWHUnMeiGB7kQuTBDGV7yL9vaimbZQNo1b5Zxrki5QmXRzDcjRQwXhCQWMzPAT5J",
  "key9": "5jrmPBrTzPuR4971RBB4k1yL5DEWcJzfcc73YWPxsVu11k5UAKBLjF8HVMb5iEfrPMFGrrzHWXwZTvAcjvcBvE2i",
  "key10": "2fLigroSHGxokE6RdVUuorErBreyqrFU2QxmZjmyq18xeGc5MCJTBX6H5kaikHufREU6cJKNbwHWUwsxNuNRv3iS",
  "key11": "3DpWsvo6YPJSsfQCm1CVY9Peu6XVSwPErLZMwTv7ToaijvNGRCny61Ho6i2AeV2pZ8hXmik3pL2WBHoAAdrP9ZWt",
  "key12": "Xn3ryim6JDn7Dy2E1WbgsuRMWMWcHbPuMpvS3qWmmQhVk6jPbHhUd2L27cwgAtxid5pyYiZwX6JAAceiSpDVA3S",
  "key13": "61x3dkL418VqigdAG3xeZYLqdcpzLntcwSJSosqKdpRFeeFoSWx2JvfcweFEyXaYAoD7iKMcpKxeh1zkvp9HGB21",
  "key14": "3oKbbRbJgeeZs4j1fJvGXhQtE3nye7hGZC7PKtXDdRPkbpsok6ts7gSMAHdVsSaMYtRrzjwRyBX2HWry37RJmk2u",
  "key15": "QPLzfqNCpq2oWftbTyHGQr6e5gPaErzL8nMFrLrqWxxM4vsLQXA9fiUXZmtM1DF6UDiirEDiqDw4ny4BdyFfT9e",
  "key16": "3X7e9s8ZsYudpnbbqH6xqrGHkyC6dNKpjyvx69So8KkYsKJSdgzCZJuUkYYbh6UWrdPyMvftnNEiM4JCT6ZV5buN",
  "key17": "649tipcf77CoRetA5JezCsZi7KM17vsmmTrd7dsPyUT5yWAfS6mgRn7idrt1oBwGz7rdEHVTUYy3AVxKqUD35gJR",
  "key18": "27ucVWUcoVC7bzZd3wWcCN4xUcA6UB4VD8Gc4kuu4FVXj5R7swhymiGfjZjJxoFikSqxw4NfRraTcc8HWP4v9v5E",
  "key19": "4JBMY5JYfDq29c458j8hQMJZaz14mbV7rXYgNKgESJnSCFZw4ozF88maGsG9GEzWRnAbxAqeQzTpKSKALPq4nGjd",
  "key20": "2yDbqaLq8gz866wTWmJW6Chaz8uK7NyA8WiYST8VL9LWmbCiNx9mkZ8N2ZNjPe7Z3t8Na7G4xroMut5Nf7Amvi1u",
  "key21": "ubHffVuxbNhpfnMtoUacpPZdNtJ536NyffvoPpUM98VJE1xVeKvrqcfrYHXacyCVcNwmWzkxsnic7KAqK9X93nu",
  "key22": "4J1nGLh3gJ47z6v3wChEHUhQ9nDD8GQdLmAXKxWKw84LPfNKG2YbJoVS6mkWd8jG8v9uK49Gwv518baLmPpJ2Bid",
  "key23": "5t78kas7rvb3tVPiLskZTuaZDhZ18wMUeCTDgUwaFDPeBQhdpCzFjGXwVtkqzJzj1qp4e1JFWhCdJx9oMZSas2eM",
  "key24": "5dSND42Tguhi4hPWkbHwUkzjyVGUxzyprtMwZtJ8HH8rRnkbPs98CS4YNf3qUL7PWC1Jbc2gr3fYJyPWU2fdNXLv",
  "key25": "g73t8TZjjPYjWfK9XRE4jBwiNppnv6v6b6M6q7pDwNLbBVJaPvMDGYZkA4ut5phSgoiWuFY7SGko5PrK4zXXsiw",
  "key26": "5wGEhdTkFYF4XrQXV1p5vB3wDiBKua696CtLERTDSbsFG9HWF6X5n1tyN3qhf8ApnoZecpY2MjSNsGy7tVvhwLH1",
  "key27": "645yfGootqnxKGG9qKKNhUxtvBWnYiUuTxkQBmqiystVF6Gnss3LcUPNTeP7j8z5uCxPL2wbQ8x1EmEaZ7nCxHSf",
  "key28": "4PEm9YLsfCgjkonpaX6es4mDXLr7YYeVjswNWuKoqztGjkWrtb38UCr1GkGFLLNN1tMDVjt8joQxcqmn4u92XQ6J",
  "key29": "27bVvvxiV8YfnFviS38aEgoLcNGiZESo5YYiGFPQjfVj6JfNEzvgfTbeZCiZUKgwWVbZSTLVckPLgc5DACTanfT2",
  "key30": "2S3NFCDs7F9CUzGpoccU7KYpwLZ16vs45T5bAynNErbCBik3B3WxKEtZCgpPkqk2PrzyR3T4HVcgBASgn9AchgE1",
  "key31": "3gqmuRWbXQhUjHiNjqhMNezbR1dGEeHPCA9drtyb4KozkBpc24wftoCUWireeBiBhAAx7MoiKNShrJStqxoJ5Mcp",
  "key32": "vh7EqbQ4RKXWyqez36J5Y9SbZhGgUpX1ZvDkPyjXzdqpsgxqDfGT1HmDay24YuxD7p1XMbUMYhSH2bznJmGZzyS",
  "key33": "5Zo2tycytp1yeqCw5bC1ACT4gTRfLnPB8deCGGhtQoztvszMxYAwSUPowyWjTfoGsfyaT3iqApwJrtXKCn7hdR8H"
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
