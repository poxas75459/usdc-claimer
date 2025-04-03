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
    "4JNMWeN9odHUf8y7L2715bsnbBUV9Uu6kUJzGK9i1vQ7gvhnJ8kRuYtz6EifKLqz6r8da7btPD5MNFkxWuXFfGaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AtowcP4tPF8D4pUx6SfGjRyWAffLFocgiXykBmUxaFzYQ5s6VEfAuERYaDgfTRGeBxBnSqHBdZ7N7AuUj2mwEo",
  "key1": "2hELhKcqGvg5fs8RbRrSHYbrLQmi38GQGDoRFBgFcpo5XEWHU5pELrHD8LfsXFWoieb7w7n1tbTWgxLF7NAbNEwM",
  "key2": "2vtx1FwtgJFkpYNj2YPghp547SGugtvGb2osGRZkREssC4w9R9wf7z1evJmVDDGYqC9HXm6jUZiHmDD5FhYgJMxB",
  "key3": "4Zxh8BVPSqAZ9JHDUAu2Q6nuNhFfsUEfZ1Ho45QTU5CUGc3yPJb7ngp4N7jCieetQF4p6L3buNdi9m7nUyixfxwU",
  "key4": "aoeCMD2PATfr1dNHC8pvwTvgXC3TxGYvxu4MVfrVprcz77v6VUchSbKniiKCbUvRDZxhPpxni1KQGpbHpQC6STG",
  "key5": "3d47UbBiYQPU5oNwgJMp1SEzWtBMUAe9M8xLrRix6XV93zbtsrrGiFd4Za54WhDYxHpeX9onbeMLsPMYE5yg1t1c",
  "key6": "3vqTMHuqVbGeSWXHysqit3ETa59295DaHwEuhgGnnp12d7kRAVnpvQNPJdxJTRhHUzEYeqAR6znu3ysyZ6PNp46t",
  "key7": "3S3nvoGMoESMuD3hG3mJFD3XnwJMtTSVDx1a6Ub12VKaFvrQ3EZWBhDwQTkxyJsTd1BEHfWstzexcwWbHx83fHpN",
  "key8": "3JVA9NGPQ59xtcZEDxp94cYaGa9bR7kbJtxqYbuHfjDZsVFBktC6dKdqcRXwWqQoC7HUtsfTxcTv7Xor9RQNUgbJ",
  "key9": "5qFWnVBzDfcWpDXXyYcTsQHL5qu9DgJxUAsfcdwDn1z6dFXfKoQXRq3oYqsACyPQnZyzUZPyGGnMCJiEy6tmDgit",
  "key10": "2ibcAiP6QRE3zfJfncnFuphTAMEyX9dwt2gc6YSVDUZvcDCaUGML3v8D8uzioX3g6NWqRKJncv5zrzYwqV2FxJnX",
  "key11": "53vye2BhtVdv3qDeN2zCwY6AQnFSU9whJfSdiaUTZX6khzqDLWb152WYfLL6eJrdaSsvv6ofzgpFrDuN3H56cPfo",
  "key12": "3QW8eE7EB7xiw5rzXHwKg9ScgCCRsxuFHLqUsVKARfPzeaZsuVfLvyFKuNEC6AMmvy2Yh5ikdgCS7pV4E2v2CN36",
  "key13": "5PSmhfeKGKgyRtsrFNLqo6AHMdud6MryCh7Cjgx7wj9zdWWJ1JBmiQSepMm1Z2o4E6V9jaPwN3UJcCK5fA3Td3ff",
  "key14": "zs6FrBia1MVtmgBdMdXcL5PmgmbwLKeh5VxG3GSWjqD4KPrF3MH7nUXLKu9GWTDVmWRVYuBZQfLfK6FN92MMBY4",
  "key15": "VZFuKbyBahHQo6yLZTnmXnF1vYAEXqTHvKPQGYAn6BNjZaRV9q1bMumXHrLRofhRhcAFAwFxzbXNCpnaG5kgxRV",
  "key16": "5n5PL9CV43YYnkBbzWsGyxJX5TADGXi2vXCaz6xSyhzBudrhAZrpVPT3ub6iXRwTiDZ3CDqRGwjWCKdLsWSPJcdV",
  "key17": "5nPZatLQTxu1Nuo8YpUSXRPq5TSFdMnE4JpbEHu8xD46Ciw5KRhN2AjSPBiMP8veLNGsPdY51Qdz7G9UVUM84a2V",
  "key18": "yXF23CxBk3yDpNRNnF5vDseWMNDug7h6NZ2wGX9YLQGXoo6wHvJmQo3RC5fV9KYGjn95trsGmV2BKN2N7XH886G",
  "key19": "3wg89ttD5vqY1xnLF3h7fC7hyreBX1Mv4ZMNgTQ4kfiGpFxSQJnNJfbvD8Er7EbmwpGseS92uCYkYuKcCWMSZvbK",
  "key20": "rdLJpywp7WKfYfKJk2R3ZHSznjszqKhFZgA9LHXpDHWtdfLifoJGzvpbBvKKZ1HGYeBFzbEimnguHDYhRx3B21q",
  "key21": "3HmGAY39hjDC8kN8hYirenwNrTYKyR5dGVhZxT2V1XmqbuaPkNGA4BASSX9mBrRiDhJ7ssxLDFyT3zVv2RAmdc2P",
  "key22": "2Vn3XDJhXE2WXdrKCbJPrmQ9vgcELsasTPoKZsZXpW9EAmjGieWXeBJ9AcJ7W95EyNdjaD7bBevJWnLjiCBato28",
  "key23": "4sDmnq9kAaKSt4KMthVuAZQJtuMWaTWsxF2xnLuykhWTPWJGgs7JakWBEoXbbGaKbY6Bejpkn4XMkDFdC4SRcuEP",
  "key24": "5oVnj8PKjNeYEh74cBqcZPRpzLXoWgwbWwXibJhckXJUkygKtaxP2KuackLtkXpbnAa3bDCvtfFUrYJZxhCTzpy6",
  "key25": "5TJCuZm4kXAnP34AHWpNiZqci9ynCfdjMgpwTqMTh4p18r5U7KQV55c1h3b62RdgGJS6JQVzCdWRL9oJeGgtk8GZ",
  "key26": "4kUX5krSrgdtXnYEctxyKTZvPTg7oqQrEm7UM8Fpnj1hpxkZ3w2ZqdhS5NPxjk3AUSnU2X64Rt8x1W8WhtVHsy6z",
  "key27": "5GReJV9a2qoCLogu5dXnXse3fWqmJSYuZGSqrVWVRtyQm5z4piqxVtUcPncajwFn7mGkyarAWPdZj53YH6hdmirJ",
  "key28": "5fqd6CjoBcTjXLMemwfLDaqfNsCYPrX8v6JHjpw3BJZ3yr5T6AsQw6uPVsT71q9d3th2S7Zwbq8pBmiFcMjVrj56",
  "key29": "3BraYtkasYmidwWcBeBXjFvMWnaQqvMvqFAHKk7pjyZDaezNu6EsZ7AGTREZLC5XwGtf2weujmnXbxH3PZre7Gxu",
  "key30": "kSsbVuWDvUQeRRq7skaPWHowUktSK2VghuJq9kyM2SCHgJoqZj1W43hJB7C9Y9v35hBDZZBLzwjssK2tKiUJBQb",
  "key31": "4a4vY6aUuYsvKR2sSy17TmDZSdnyZMTw6BLe1DkadQ9UKgfEd6H53RqrkeuG7p9LuH8PWjnde3JYE946YhLUWnd9",
  "key32": "63ti7b5dFMLYoLv8UbW4yd9nC8W2AvZUG9vb1FdmPusAAQn12Pr39md2EuQDU7pW5pGMPyS4H26oerFN4XV9SZ7E",
  "key33": "48cSh7cb5vCPKG254qjZw1YoWnxTH2jpMFxMdk4bRdXVWiHRxUgZ2XM4CRyX76QP93r2hbjNJV8RB8523ux9z8Yh"
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
