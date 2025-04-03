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
    "2rSiuisK3pwvQ3GhocjQLfxeFecB5knyZa9GGSBvNwjLVrzpMNuL4bPbAfW3Y3jHmH9y8GUZMMjWypDYwZrrZKGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qf8n3XqEs1oXPZBUxUPgfzvKB7YhSPWph7Ev1PKWBuDxDAw7FDJQ4xP9YDTmuFni5L3jZAytRm1dKZ8VnF6pPDq",
  "key1": "eqFP8bnFrejhHHqXhS1KjpqDGVoXTXpHJxnz1RWvXwazdEw5Np1HtfWSuosCv5YwdQQjXvpS23kJGJjo2dgbBHD",
  "key2": "5aJMUeG3tsQDcBgUF1sVG87p4QarirnwupgohYFp1uGREDqtyT2JdRCHvoKy6jcpkbTZ6YFpi2bp9Z2cjVJKMw62",
  "key3": "5n88nfviZ4vMu3ViAY4UMBwEx3Ry6b4c4sqEiuc8KJ6qqXN4wtS4k6F1ySnxk4cfnkvyywd5ki89dbRCAURGFSvt",
  "key4": "3Fpi23vDLb7QUBiWvVEvp6mriiqWqXkW4BYoDGwb17GcHD5HcBSTDPpfyHA6ugwo94PgmPH22znUx9632Mp9Q9wS",
  "key5": "4VqFS7Vg6jJEV3U6XjTLGKystnae4Ubipqf9mCrj1TMZ9P6cWfM7KzGQFKYqbUYY2W6PLx2mkmCQnYZ4GGsRz5Nt",
  "key6": "YnLT7FCEf6WK5HhBTbUzJZE68etfQgLEErtAtNMNt9BB5nZ67UWLBeDW2m815i7mkMEjCvcjoaBUSaPebUrtn8L",
  "key7": "5jGgeRA31EX3deqqVvQ68brBXrKpVxC5gghMznwBiCxXDSFs7VHnra4s1n5u8Hb9wqk6eJh9QMFCctfEkuYqqQQz",
  "key8": "3dSQ4r3tyQsMjqCaCM25WgBYDAShdwKhnFSKu5keNnVEMvp3aAAihp2FxtMYYdTRHJTEJ3GZPSpqRNPjmkMfTogk",
  "key9": "MkAvDz9j34cx6ichEJXPArkuUwaU5P3bx9aYwUpMMU4u877mgepZLfctWbPLWrp1kbtUVL7v5sabGMnLK3GXrfd",
  "key10": "58gGsfWJ35UES2HLjLXfDiQ6sYdx4p3i9CaSZaJNfn8kSy7fhn7N6MeGRN8MFydHuYL9ygJs4LSxMFye6LygSgLz",
  "key11": "4D5h8vpyyx7Xr1wigW4fuEw1YH2XbU1faGeGscwkzFvsaBV9JkrHW6iG8LxVnWLB9zLFyjs5BLMp9Sg5xVXKJn79",
  "key12": "3nki6VhHz9R6iXzdgg3SX1uywaiLqVhq7NxQQ5Ss44gP42XA28q72nn4ewd3QSzkcsuyLPpva36mfR7pEa8mzwnn",
  "key13": "2XV426fWmKuq8Z7TwoT42QAMjmGynnpYroJhjDL8zxzyyitDyBRtHKnnW3FKA9R8Zmd5CUmg84neMdkNU94zQeiK",
  "key14": "44gCajmL2SYkDjVXjY2BGNmQyeKLDD49TiR5rev46yoUfGfTTcyY6SMCpJpbsmEWgrAff2XAtA4cStWDmDcaxrKb",
  "key15": "5LzkXiGikJEa95jLxvYUrdnnYZNYt2XWXutwzUFLiy48b3FXVmuiZStYsRq5CgaHWNyLA6SJ46cnKe62u2LgUL9m",
  "key16": "3wMia1SA37va9uwWqcmJrnFGMqokVJ26XFwd9eSxFLgsgUcPMD3fhgj74LniN5iLGakuTx94bm2X2Aak1j1qkmax",
  "key17": "5yuQ7FV2rpMgt68GSc3pi6JB85crbDFPfwfT3GQJXbN7Uf1Baw4pus33kTzcpYmbJwhkqFntWB9G51rhHiNsE1d",
  "key18": "6UJyq456TUQjtgP4vAzvGs3c9LvbJEERRDhAKnC7yP3RJohufoosV8aC5LA9f8bnGCXkrWk7ZMxiSJvqFhbJhuV",
  "key19": "uBNqCQatg5pbFt8UzmUrjJ1DFGRvbTK7FochJ9oPKm1JM1iyFjEpSWNejp6JvjwJqHV4r7V4Lvpqz7Ujv4Zn1Tk",
  "key20": "4mQpJMwzsoX9oMZUmWsdSMAG2Av2y9XyXNbmq84crXFnL5SRFpGk5JE1UqtXxKNajQjm9EhhFi35TtrNMgZ2NBbX",
  "key21": "QnU4KgjcCGyxPJgRHDQ9ZQvmzGEpmNNX3HHpN6AQxAKQ9ZnPHZr7rBUrxYjrv9NYb3qfBmBJhhQ5V1f8zS8Y9EH",
  "key22": "3zndJUCyuTTKqvFk4XtsqLGDaqXMdEhJ38GkLAFYFrT4L1D4vHP7h7JY7rEqN83B1i7TE4n98b7KA67etYK2Aa3A",
  "key23": "3qDLVsWE6ahJBTJqn1PiNJ12aCnJLdhJ9K76AtZVRcT8nRcTXmXj67MRfhc6UpxX5mr7eWcs7NLY9owb64CQiSP8",
  "key24": "3YpzeoJxj6CnDX9jPKr9cZmymVUSUiJujnDc24pUjEURGQva5VBuQbPYB63syj4zW9gqyHX4XMzCMT9zNqyqMKMu",
  "key25": "2LJaNSYCbDZVUHDT99GfgNi35bdYfKtWkr5sbdb1CuXDLd9bkFyKLiHxCy7mDBGiu9yAgseBxLhVx2Qdx1kzBcY7",
  "key26": "3ssz5LdrCK3bCGSBLrqhZPmiDttDzSNX8yxuG38ef3T6JYn8RYrxK8nWmA36BvcYEQTC36uWXRL7SZSB5935cvAG",
  "key27": "5siYGDk3GVZcFEqnbx4UfpwcLt2zf5gM59Ze44Z8yheZBCodeuCkyBcVS7cHjHmZXVXk76maZ85QWqbKK62XBN9b"
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
