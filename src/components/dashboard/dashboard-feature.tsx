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
    "3DPZf6s36m3qK1eSNqYzFrXGv6spKi9n9ziANuqCaaDqfbjANDvCTTZYkrDNmPB1AGYk81LumwC3ti5EcEgfvQY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNf3iEEZqfPY7GfH24NjuxY5c1TZdifnYeSkkFEi233VFc5xcyEDJD8VBEVVjr2S7JbvZsm7FHq8gCheQMJE3Az",
  "key1": "3UnudJ6G7XjcAK1V7YP2NqU1T7rnME1Xi2cxZXDZTDQgNP9PC6Yo9wD7DTGRHxMBbAm1Hna2gLnm5FQPAiqBM98X",
  "key2": "58K7WPKj98Taqusdt3XQPCFzcL9X4g117vGfGE5hgexdzZjdhz9Qt5GiEoF1t1BYJb4URAZmEvmWVqxuTtQMRvbR",
  "key3": "PdqsuP2wsss4gUH8KUSuhnUq5x6hAyAKfpACuNu8SER1Gi1iQ9fK9rPJbZ6T9ahmkyGzMH7EAP2M6qfNFjW9nqK",
  "key4": "24DbBVv7rVMot4kv116qA4R5cx8kiSUNwRxtXchQFG5TSDoGHdEUBBDtpRkdFrM6o9YRxMYvWiGkaHMQwLhCoN3K",
  "key5": "3Hy1Xbe9DVFvWQuAeJg3hrTAjAzUZkaQMNDBRnQfr7Hk8omjicnaTcxyoRjseiB8oiZDm1BKkRLh2UcGbXnmczSz",
  "key6": "5uQzWv8ASJW2wEVjmf5a9hUT44DevSZizXVgqeUuDQiw7esGc1YoeuJkknucQEUdz7HrehvrWE1qMR6sqYn64yBh",
  "key7": "MPgtjcXTabhqRABcbBRjLc2SrW9sXYLuQBpKoPFHGEWY3ZeTq9s1z3mmk8eYk4oPguwcFVoajA2ZwhEJXNtWphu",
  "key8": "5Uj93qLjZfCJSUgxs8u9XTcfnQRwwqV6nQpHQRsGmHWmyXqmGKV41qMhqjvwBfCw8oVnVcA2VCix7XyVT4CzGm3X",
  "key9": "723RdoZ2fkgoJGoEC3saGudJcaQ96QNVYqfcAb3yRhCbtB3YBLVzR4wKo53iCqZZ85RTMJkg5FBAccc6vwsgbDe",
  "key10": "4w815YaVi2amHktyWnBsuHxGKLDHcpALtxG3ZZEyGUZZGVXJJmJBBdPp6ekyFeesaackggJRF4C7BB26VzVEKSUa",
  "key11": "4E5iLcsHUFDaXYwaiZeQDe3zQVBKto6GanWtygiZMycpnsaTHNBhSSsV5HzHrYVNEQLAZgRYnGJJoVzix1sXNAzm",
  "key12": "3LYUAAWJavT4VvpYZqsn21wRwwEMd7BLVBLE7J4bAC4hFS5YifR15nntDQbuphTfchiAm1n4ynLiVSspXEhnE37t",
  "key13": "ap7HhTX5z6yPsNe9zYKzq74ekGfqotG8PcZiPaKAJ1A3AL2KbZnL1NsjgQxrj73gkM6eYzFThfub8tXGFJVaK7Q",
  "key14": "64QYubsT64cgnr7SvdKBBYvzYE3QyPUmnM85FZLcS9eXFzUsgfHW6ERkKdB6LCFFpgsc8RKvZ5xCcmbWHcbnEFz5",
  "key15": "KUrTAK3xTDtPKexGEtwnzdAZygg89PFtFPQzrvkZCjpTxDNgN2u3h6cwZnWffaAxASPDNRUdDqjoPdwpcCeVvjr",
  "key16": "dSDQophyRgJ5mSiV7JNpCSv12jKbQ6JCDMbXte8JJK8Y4ARkbLF9mGS2XXcJuc9EyF9UodwMNdKonJDgHaWfSNZ",
  "key17": "7NHbTs2bDBqFP86m2XmeBaa6cdSFP42qUzVu2KhUvpZ2M74JirwvuntDYgPGa1fRLyX8q6qMZuqjgknZVnNkrUX",
  "key18": "4Hvd2oJJ8tv4M3n1mihvPPcaizrGknEUXUxPvpKXLxGk5QGZoHj1iZWk1uh4cd7UPUJFvExkzVZA97MHayCnq3VW",
  "key19": "UBNdAZxucVhpjHtcxr5ivQBPm3bdMBXmnUKLgNCFa1JuKkqvEyC5nbP2JeXFr6iNZjKZANPV6vF56h2twYFFnQw",
  "key20": "4D2nyMYkjgZmxEYqwTGiscZnZq6HB5kaMbjvF2S1Bg9KQQX13PpwTpcBbUkg7ozY3FtD92LUwCbDET6thYuFjGdY",
  "key21": "3e3nCDAV9MBP6CTHeMcGo5isHi4v6cev1u3uPDjQwJTaN8QjdcSBxFictN373ZGi4S7G1egYa7SxQZtEbmJzmwda",
  "key22": "Wcjy8RPqDDXN16mwv3AqZRoUWGY91tSoFtN39zrt5s8hbagW5WaqYo3wSvaFxax6auLFBywVtncPCgx4LjtNbzh",
  "key23": "4yHxCYG1gh9dWadKeQWqV74HFu7C27yWcm4ur6rWm9q3VJUj35QybvCgeRCM311ct8dn9AK1ZknAsQChEYWnAY7f",
  "key24": "Z1hTSVDe1jnZ8PkfU2vby2KikuVBK9e1xr7HFMcTjnsHxcsUgZLPVcLF8n3rKuALnP3XqvCFiuugLgyDjZpLdK5",
  "key25": "onqZTietPvjVivQ8tAjPDN58vpoQFmAghqFTPX1fHydvvKAYd55B6jiQtyyfbqLwRVN2KDq5rWNBFnTRNC3eq4K"
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
