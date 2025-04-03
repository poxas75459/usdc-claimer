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
    "kF1rgRsjZ3s5bfDEBRYNk1sKCYgxEBAJALVao6zM6wT2LrfgTjz7qPm8LUjDdaPvtzQKoq1kLCE3aYAxBngp5BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqhbanBZTY3mbAyYcCHctU8SnNmWfEZiqTknze1W96j681Bivaejp7ceB2AU52LDKZjwaHBZgs5buXc7KjQ7FkJ",
  "key1": "3tDvKKwSSqXxGrqhMjZ93RraqrWR1iqaWJcQfnTx4H39dTDDAV1ekjnHAn6rV65K9YqjWrc3sAxCG68Cz142FHX5",
  "key2": "2mEM4PVnzESfnm14v5wh1PN2uMrekYY1fhNG1PudUPrgj8FGY8ygDjsXjUUF1in4bWovJ1yjpof3Q5XEbhvd4PHB",
  "key3": "5YD9J7KmoT9LNcR6C7KZUAS54DJoNAXL23xCCpeGxSbfVrjpqmqMPBHHD8NkGjjbypKuu4gzZr9hHSReAd3N5XPe",
  "key4": "673KsY9UJ1M3uoETE2x3DLM4pK4THZ2PMZWW62y2BnRx56iCyKn4MRPWasCTF8KtGwSEDVPbZSWiVCXnJw2yhRNi",
  "key5": "4ev2QbDkJLJcs9CwzsUHGKzwpt5eT6Bu8DhL3qCRZwAm1qfgyU6n64SQSMyHuRcSSLj1FMwYMjqzDxevH2HYbsXb",
  "key6": "2yYR5HPJitk5BcgRCNCUpWXe7Qpfqcv8TseqZaEh96gCyJJLsQGUXnMAvr5C9cUJm9LzLPzxeD6TmLdsdx6m4m1b",
  "key7": "2DgVozkcCW5mtCn6xdnXXSNZ8mmHiJ67BjxKNvEXu8WGXB8BdB4oue2WkdubzpwHFFuarn8fNoLDujdz4kXvcFYw",
  "key8": "4MLPAJn7h6iYFHwZLHVeq8tmqgT9LeXK8mo5oan3FHDirg7iCgGShD16q7JUj8JnWJ8bBkE5z2beQ4rYJYUyam7a",
  "key9": "42txGDKMAh6JkyMknFeLTvBgSzFGmZBpctD8Qq1m4QrVmFryEo2LdFaBHKUASQeBzJq62yu5mTp83sEE7QtWd9bb",
  "key10": "2tdnrgDH5zMygR7z43drdudrW8txRaF8cwjzyJTz9AqgWfcQ7pApucYxWAbh1uX5vMDWxwdBPYYyVTQiEyMatbPX",
  "key11": "2zXWJWYqSvpRAKUcgHqM7ER7NNs65N9nTHTDYzggeQnPzt4AhgDkVFv2Q9V56G6Y5r1tWypBK6WXD29RTNdQQcZk",
  "key12": "5YQUJUCgFVkfLezT9fdQNfDDnsjSMjQ5aGmN1sCcwMT42fWRnhtaxykBqLNLaJorMP5W54b2A7F1A3TQBM4K7CH8",
  "key13": "34hdKDaePMoWxs9xjxcqeQjhBcPN1e8V8wmC7YWnvFTEJ1asjQtxrAC852BuGZqjuDaq5ZJAu8wwAYoUZHcntTVs",
  "key14": "2DZVG7bdSeLZTFbWP9owKujsyb6EUPUuyRdZ2q44czMhx1H6FCzStwvnjv9pAifmXU5mdvyQwvzxKpLMFNgjWpbu",
  "key15": "53kSE71YQBXJQdAuWH8kQDMAF73cWQcHnTf1V25kvZVNXy6UQbvWT9SVuk3LX9AT9YK6aRaVjN679rAf1isz5jC9",
  "key16": "2pRwpbmzVNNoHARc9VbA3NZxwi6M72cox2499YZFgmxibJ9TkQQHJGFjwQYBKHEwBny538rdiddRxyLievUrwCTQ",
  "key17": "3PZ5oL8qA2UJVzM3q3TASwEfrgUpof7WQHA3cuDnu7y2hi36VpqF66MfcqQyL3vU7cWh3JWaMwLUFSh9jL5aaa7z",
  "key18": "rYrAKH16fndY2GigKcvrZcW2CYrYkyEcAq5iDVYCEzrn5fDX3zBhAkKEFHmbL8DHm8vsG1P1sj3JHgsVbGGvruq",
  "key19": "49xKER8ZZncmdkXhRpxBhj8eSwoJ8dbbmgbauSt257DzYqXVgkrxHLu3yvTaJLUxX2vdtmdeoMX6aaXx3Ltagx1f",
  "key20": "3bsmBXAeDchpuBVwFhJwv3bjgGcDGhExKb5KqZSeyvUfSFbfg9QrhUkhRpjBwg3GnH7bsbsXQUvQz61my4oMLKqc",
  "key21": "dhh4Dxu7dQPG4h51fVbbfug7iqUVY2rC1Zy12z9KNsFamo4b1M3Syho2yxrkeicouUCC82pfJ2EBBivu24Kj95U",
  "key22": "5rzvJ5CTd8NJTiFMWypPVtLgEjTBxPzGsN8KVPck3H3iy17KmzkTRS56tgUPbFzoKUpjTWWUR5bihziA38czfSzr",
  "key23": "3DJSzgV12WNxwTKr42URetzAsdnmwfvnMciJ3A9zdsTTBiC5gQJxHscoBNuZQd3MyAZWtJ5vubqVoMqYWTc36MYW",
  "key24": "4s5CNbpAWKoqdLhV8nAZpPt7Htt8UTFgMQmoZDHr4HuJbvPsdN6XTohxPqRoPD5zGQHEZshywtVkdd7X1aUUCXE8",
  "key25": "2L3iSUnnpPAZyBYmiQeaVTpVqbitqFNy2sTKmtLzJzTdq9hHvcJeip5H2W1B7yk4o4ksD8qpwfvFmQzTijczjnQF",
  "key26": "3aMA3rBPTHUVRCxoTFNgBjjexzPKn9X1LrqsarFbKfFPMtnHzA9fh1oGJZdS1F2c6tudvcprewE9xgwTCFRDw2E8",
  "key27": "5PkMFMYdPaXZttB4CRGSLX6TkHbdMtpnWnzyezVpTboE4NAtXxvw93oyFeV4nWFWLo7b2sqjHYqjdmNp9yWGQwck",
  "key28": "rtTEin8LW7ErFKfXjRuGEi3o6D3JQA7w5dopAMh5Rp7ZPqL4BDpqocPdjBvbtNTHcgkuMrDJ8htanrC9JGsL8LD",
  "key29": "2YvLzu3joCb66ezj1PLq1x1TeGZntjE6YZ8oZ4Mhf7BhjeEerZueLu7kdxEw18UTNM3tuVBk1mv3Diw1YoJgSNNN",
  "key30": "5a1z5aHTpCXH5MFuvTVCt1HLU8vQN9RWtp6niCMWL54v28XPJuA87pmgHqEukRdkhswh48ZN8YGCTC1BQRovNVqH",
  "key31": "5oVvcWeY6NK2CD6TZsUiTaVrW5bN2FLutTEeRsrCkcHdaVqMD4uKzGJZEzF24HJRcQwdXFEDq3xhmf3ouUrsSwkr",
  "key32": "4rGE5KZfyAWv12GgnsMv6yZxa2JAx4fhxah93Jmkw25EMiFZaZWsq9GaDiRM9UqBfDbGxoZjsHd5wJ9epZoyJi2i",
  "key33": "anGaNCcgPJM1v2k9BBRZRafKxvjUCXNbbUnoFaHkzstNadZnVJyo7ePrKkJV2TNAo5WRdPzTqsUHoHkX3SKm9N2",
  "key34": "VA1QpJAB6BLgHxNKjKptHs7H7bTT3drezhMZKTjJuT1sHECJv1tA8CaP4SXU2ejWzhx4FoJ1ZmGVwBTVgWb6ZJQ",
  "key35": "ypaxXA21fVzTYxKb8Hn6WV2JAvsDTGtniLuGxWQWsC5RS6ptvwBJKM5PLAnG9GeC3bc9rsHx2nCicJrw6cuqQmV",
  "key36": "3kHp5mVwxFMHnfaVhtJyqJPv2UaaZRLw3BktCvfa9C77sFAyzFSRs3JNJndVjE2SkfKRfHBf3ri8qANYqiJMdg9X",
  "key37": "5zig39ES7N5guhVUkbJz5k7cw5Ghknk1uRkWFkCDyFiYmAzziWMPW9dAmpxVPNW4obL3VMUuJECuqDco9rNNpMUz",
  "key38": "4Ki9iz2MHNBxfWHR2S6dGRQTd8tnK2BfVfquHQfZMxM9WjMRMfQH4jqh3RTbiQt22MqQd2cN1Ntyf6osXUHihgT8",
  "key39": "53TqWZofUsYCXtsdRZ4XS3CPpHGXRLUSZC1BE56P5ywqWdurcgK8EfXDc7miwAnTRoFgBE54X2A2eGAFndaA6KbG",
  "key40": "rnJkhvnRpLHMhuyyfDJPRUTR9UjnKEMp7BH72bPJi8Yd75fT6PD1q7eCaGQ1ut5SWywaoGai4k2HRR1sSE4vF7F",
  "key41": "bR9YMLXt9D16nAigEM51XtfHobXwGckzpxHgVLhHTMHNBmGRTfbnzNQJjsuS4QJzmqK9PHnhXK24BdE1Z7ZG3aL",
  "key42": "5y9gDzU8ALB9GSetrgRzEDDQ8K2gWdnJqn5LhZLHboxvu7XbdVrwYZkGHu31nicqYNBTccz8pL1BfX2HmJRdqQSc",
  "key43": "62wXTnYYeRoy4mDMuW9boaTSP24tsydaB9dZcKS3uFkcYj3xqTL1MkCkwRrbLF3UtSAKkDnXZ2xJVaiNWjzYkeR",
  "key44": "2gi6oJ7WG9jpmJUyf8D8kLvQyYMXgdYSw2gTvkqnUVpnFmqAHydtEPL9AfLuqA7HkBomVjPB2C88pxDDKSj4wvCp",
  "key45": "2gkJuzbhYPw4gTetY4yXqPhYG8XMJvU8sLqdgjjgmaSNioJUiMhdBQa121qpRPSMcUcKhD4MfLnfFs4qZ5uYUeUG"
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
