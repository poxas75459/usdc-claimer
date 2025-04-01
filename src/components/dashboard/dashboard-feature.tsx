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
    "3pkSwsagq29F4hBvafSDZZMs14iCvGX5e5hgTGiEKkagyiQzxu1PY23ZJFatfePndgznHutc4GNnVUNUywnJ4Dgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpxk1yqiGPa2c6GbivGwRT1vUvs8YKQrLFMWuvmr4jb8YdwTBrTLePm9u1ycm8mAEKHej4Du66WEp5njbJwV4ob",
  "key1": "3ewrNDsxpLbVER9e6MAjKGmVNRr8gz4sMKtoQ3rf8BbVp1ffnttVcX7MAD4BykMtp7oo5PxsTnDY2jV2neLpNPtm",
  "key2": "3sA4C3Azak1kLrBU6jmRd5odHAQDzgz2GNZtMgukxjp8YgXeJcYSBffKPpsCvAWNeBsiDL8BawEJQkUdorqNHYHN",
  "key3": "4rfiR83cuvyog8hN2KetzAbWTF8GycAmX8CYsiJ69ZF1AFZBYcdsa6M2K3ZKupcVHXsScumCwd2ACDnh6LD2Yua8",
  "key4": "31irYC1bv7RBRDP4s6XvgWrZ2T5w8WsCwVmoQwWWTnVaidXWJYCkmybyps8udpcaQ6RaHVGc3MGHhqNaEZYNWkJe",
  "key5": "4GfCaVekF63WpuyCBgYUv5ZPbkY5grvLqr6jeecRk1YXwLuhqcVNoMZpzgZq9wKwV5gQ7z4pFcKPX2YUQZu3YKaz",
  "key6": "MjXVs4qVPUWhRW3pQonBJhCMcnjKcpVFVUcsRuC5qdVYMnJQ9kn16y6qnfPF8kjGucVh2tJ3UE7A9PYXhgxEoks",
  "key7": "4A2q6yEhGb2GeMqUZbYwrEqs5sWiBTENVusBJc65QEWH7FMan9t3hmCbzKZcUXnwA96ffhfUFV8SKfdeWShXCr5i",
  "key8": "G5nWKXFECyvu17JumFfcKMh4ojm5AZq3TKKR9GPUzF6viTujw1Q2FWZqGiQLCgdQC4xQxnWF4JHPUKmfoFr9fwM",
  "key9": "5PTEm4ZuYQ7RdN6j2Cqh1BkJxQ42VchoTnyzYRP9RMkCmJVSDKCL8nvkmSmERj6p4bkpRGwkkRh3XZPgjZ3SVh5d",
  "key10": "ruTro89SAqWSgFKdHco952PUcdfoYqxUdvngfV5RVpBTaNrKy5SLaxPRruv6DQDNFJp8uucnxgGdbPj7YWQhjAi",
  "key11": "4BzVYq5mQP3a2SoupKGuZioFR6MLgFccKfo5Ei8p5qnJQUtFKc36BhkuoQdHw7ngcFFDxjyvm75hqRFQWTnU6oXR",
  "key12": "43jPDvw79cVsC2A9wipekSpvcpSU7c1XhJjNgxdt4zVygKyCVmJ1gqV3VEqb4C8ZMragrtXLgU3VKXxCBJFuwvWN",
  "key13": "34bPucx4eCcruu7wMGEuurLwjrggWCmtjnpPSq9nbzzaGQnneCLcw3GqcaNcTumyQMN83bsxKE7KzRTgTk7Zjnzj",
  "key14": "C9Zq6mz5DU4bZ8QmppqbJjYXDAhnL4tnRuhtXk86dWB1V4aXD1sfb2cHttJwRM8bbS1sGp6i6eZ8fnQMNtpXK8A",
  "key15": "5nMyYpcio9fZAs5L3mWYCu9H1ow1zuYUDqAajr4GQxEKp7LpsfZyGMD3roqbodN8vcSxadVd3JeySV8MTduQShJm",
  "key16": "t2LQoa3uGf3D9zsEnGwRzhgYBca6qJ5cWXpy8MmnUgakJ2mqTHLYVcofCT9mbZuEuCTTJb7MMwz8cqWGETq6HvQ",
  "key17": "4jG9ZiiLfwMB1TuZVWXRQjMNvvUaPgysNcJZ41SzE6jUQo8aRLt5BM1SMFsb4hxYvcgVK6ncuognKQtVGppsLKTC",
  "key18": "4tfyHkqQLQFycdQZP9U6MJmP5sohBq2VFSZFDeRcUySxzAtVZPGChdLzDSNzEfsFyRrazCMPBxrTsQLSuSAuUhGn",
  "key19": "4hmc833epKaG1DJRZPNJp3yYwU5SgjjVDB6skXMB5sSuXxSX5id1p8ooV6ryCLKiKxucELwizhxXZ7c2y94PNAf9",
  "key20": "nuZitH4jFyyuuTUfXcuKuNKqNUsneKW6g85CUm6puKSyHiF3f64CFiJf5dwChXiFXKsH59xfh32Wk6Crpxr3wRG",
  "key21": "3vK1Gk5f15WmUSUG5NjftkTn4derzTRQ2dzbrHant6SeCtAqJguKjqpZDexKLU35v6zYPWJaWpoeDBJLuECqTpAn",
  "key22": "3aG3tW5QuqsYmtmkFhntuNKHFchEVkJGnGXYShVttMiDhuWE9qHx4SeKT83emgvErnG34J5hBUbMouKjZSkeGHFf",
  "key23": "5EFpopXK3YNZKsvgG1vr3eKxzNiXeXd7Z19WZoRdpLjYK7hBzHGcnT9PNBeoQXUjxxARssfqtKytvgPoAEfkYHVX",
  "key24": "3VJh6xifhFeawKp67KYWfC8ohUvMXN3C6vgrjgq9N8uAPLo7wgWvkhvQR4VF31TuiyZzWwtjPX5EWbqnqFZgDCz2",
  "key25": "3uEvNH3xNx15jykFb8FQjkLen76eSCFvAh5BmY5qHRYYqcEPKuj3AQxZdvBhw2H66mmKCmGnyXpAvRsV5npSoAvo",
  "key26": "21Me7dPcLZyE3MYFgghDTrUC29UQ9sqpt4moMDuEsDvR1KrXSk23wedB4f7B8XPMLRbpadjRbpL4yhp8bBE1BHtT",
  "key27": "5im3FtLS2ACm5VFyYjrYNFYGWrBejB4kd48WZtaArcdMQL6GC6aY6vZF6Z37MqBFEsHjjmWSthHCCxRJTwS3SHqJ"
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
