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
    "5vqw3cvLCsnsaK6F7A9xA5rSpAoopJXrY92i42F9aUUbQQnFXMu3Jh633YG8pvx2AVB8rPgHxQfgdbmQxr2TrM8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qACMSQTcEy7gYbCXPpFTKSTpCe5n5uMoBmSEXvGjAWsRayMj2LgXHAMmVFBtyW6qLo9JV96kVUQY7YbBZuNCpyR",
  "key1": "5cHJrQiE7Z6JEZobiEyKRfJmdhkp5GXUsCm8ybFjMx5G4yEBN2rGK5fnBRCUMUSF8GJL9zkQNK37e8nEwwwsXr1d",
  "key2": "5pFg9A6csk2JtmMgEoFbJsDEDbMHQydW4T4pwsgxaW1KRN2VgZq8gx4XPzFgfJCbUqtVSfkEzsmAzW9djzEBz2W",
  "key3": "cRgf643xfMTa2tTajg41pqgFuuwHW1emKfJ5aEnDiLLMrmf9aD8FzF3r8xMm7zCvwnhgnCKLj1XZaHMFv7UDDi9",
  "key4": "4msApHvJfk5zvmRxZLJENbc8LdWYC9hQPLyniDJa1icfPCENEx96bVgZjHdyqbw551gEsYLCw3kqvsPLyNkT51oK",
  "key5": "23VC1CzzPLDCpACn446oKySLdAqoDSWZ1T6st8D2ommEYLhqjFiHNwfT8MepkQ31wtJXMYt1GsTEreTX5hEjt3Zv",
  "key6": "if2r1MUHvZHoSfDLqM6VCqQg3MwKGvjg59mB7a3NkwUKZeUtjTHCNsaNmccjmApsrwyqf7LZ3CwGjQ4cELQP4js",
  "key7": "3qXA2xD76d79bkiXm4SYK5gg4NQsuCJ927SpnTua29kEhQPr8vf7QJbtUfVnj7vLFEKNSpT1nH9gZoRSgp8MKtMQ",
  "key8": "5y3wBbs92hWZNj6Y1eDSAqCDNgZf9WptK2MSm8neS4g4HFezvPWP7G4Cpid3VchV6jGV7N6fZMCmePmUMAsteyLi",
  "key9": "2ZeCaQPnt4YLCKcQtNAVLuQQKrgGbGzRbDN4yrDTPqmtnAH7WbHL1bEppwWEnDCoVaHjomG5yBGPb5AUVofGYuJ2",
  "key10": "5EiMQjmZcDwPhrHaFAxgTiJw6nq6SKUKpi4j68VziGiYXm3wXs55E8s4ntLtHbUZ42anunHvhemYtotF1M7zDao3",
  "key11": "7DbKi3W15c27dVMrjXUcrfCYgjntuV9EXRbJsLVANzmPWspzHgN49uwtC7M4qQM1evAh8Vj4qj61C2KjiCoCvuU",
  "key12": "47kFcbbfYq67urW7HcL6jMZ2tPFrk7qZxRKP1YuTNSYuju8cutCFhpgzqMvTdxofMBey32qY6RxR5X7FCPbqVV58",
  "key13": "dZ2obubxjywtxH5TFUURKeo7tBtdGVz2t4en55AxnxgvRk4SpfSM2ncE5BmW4niGdW2CpRXTgJbXPVhKqnetCgw",
  "key14": "3EWw7xvEptYyyKzBqaxXnfZxeviVgLBH3etqqFZMLpfVF1pX9oX3F7Y7zpNJdnPdXXr9YYRQNNyLhax72Rx1DjM7",
  "key15": "5LJQWGr4ody9x4MvskqvgUB9sXGXtqZ198nxV5ypf6TmZqgsEn1a5x9tdBcj27CxTG97VhCMHxkJhiczoJYgsaC2",
  "key16": "4MUTkaXWK8VkgAVKviDsrNVPnWBEoud4jpNi4G9EbDr9GsQHM9Zp3D7bi2aFhKQoXqA9Jq2EMgwpv1xT9Nggzs7U",
  "key17": "4tD9g4ankdg37FpuNrj1YJMfT6HCJch1gLT4tZZf4qreEkGomr69dq5XVhwBqDbvM12uVJPpq6PGT89bn9uJ8Haa",
  "key18": "33GBYoCndekcENj2WvLahYhwaPNgvpdxJDPxs3cDZiYdAKU9uEMkjJndZjpk6LuUD4LQeRoGatSM6Pqiu5Z6LpfP",
  "key19": "5mUwWsphAsYZDPoQFcELGuBZcCaYDzWCq3JzB5rBHTQ8eZNuaynGCZgf6Q8e8LLxa8umERpPGiNc4kMukawUJyRt",
  "key20": "29ufnzgABmd5eSWwDG6ju9HY3Y7XLDsBQB1v5ZJNSEMVdES4GckS3KiRkRVZBWUgFdyg88ewmYJuGZRFz1iPujkc",
  "key21": "62XmkptBzfSritRDNV74uzd9zFu9VCR3uuhkXDdwjgnCY1zNssXdPmQnhMXPbxDdBEkPFo25CBjgZGcXWkKpCmSA",
  "key22": "3Ls99y1pLZAzv65ZhQD7nCHUr7QVQ8V78tJs2cVND8ZTUsmCa9AXARS2y2k98ugXse4iBfrAT4gQhJPMiReRrcH",
  "key23": "5zEhF265Kr3yM6r1JwGWCpNuLsT4W1nAy3hGrPswBkkUwD65BLwiMQrCGS7tZNG9wvzJenCC4J4d7sXxYLSRq1Qr",
  "key24": "4ev5i2j2miw1LA3ZU9SCpELZRk5AuXZuPzjkgRnN2Fu9QCVcHHkqHWjy8yK7H9VC3RF5vQfdAJ1KiyTqvBzybKuF"
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
