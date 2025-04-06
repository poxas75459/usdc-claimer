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
    "389v4zf9MwHpU4cSpWNADUopEfaVgHayLFoCAvrn3Wm7XgkVrQFiBaJJXrVNcoUXZJeKyV7kuJiSC7YxW6Kmoneg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgsKeTYoxkr7HJ4AoDa8eAWio65ZUTMXCDEcMhLPt7LjtSx2P8NQk6QNVm2TVK4WGi9FhaJxMkCwFdd56wUNv2C",
  "key1": "4FEoHuzHWdWnvpswL9xnGQ21Yqfq62Pd7U7FdLv1TjVWYvoj3eTr7jdb8Tk8sQNHGjWiLdDhVuDBerJR4m6g1s2n",
  "key2": "3u3RyQQjeg9nH91aCf1mUzJQCfRPdMTUd65pgR3Sf7kzaQu4aUgZQdf8pyE1s1fHaWWPjBp7jcVXKmUUjb5PTCfE",
  "key3": "eLkYQgsKbtoqW5VSTz5qQERw458KYWbC5X6ReVXkaBNjfum7pbV7WkJU3zSykhCNiJMrTNR4M39eU1iNAR98g5p",
  "key4": "4jAXs8ndmwgL5yh2X1o2HjfrFKoBZrdxsBN7irPY396euhQXg2voU5r6wMSiWHob1yV6FFgxQDQuhXu7r8GxSHgk",
  "key5": "CoKNox2RdNkeUHnsvU1NT2dg2txj6HgXZtE4PsET2VS1NFw8qkByW7sDLphLQT72LRaTp8b14FDJTvQ6M7HC9Dh",
  "key6": "58dVEELHGJYWmXUcQQgNiVWpi9g34RSrCRSmZU5oiDcwrEHw289vJ58CAdgQ6w65BFU1RuJtLDTxavMwaG28H1gi",
  "key7": "kzTGxn5533py5PMRVBBZjAmfUfyHVhkBxQQg3bBQcrsqewXqQqqGrxxakoU5LUH3ftxrqpUP3iwvE57pEg36x4q",
  "key8": "3mSKj4XcHKU3Mkzf9E6fS2fpaU9c5Jzt3KpEvuqqQdepGCiuGsDpePhX9xHCfHYkNavnYtMaFg537x9Mv1VdBiqo",
  "key9": "3ekGs6UVsVZtHr5XgtXDFTKPs5ajWasRgaFQno9RXfZWLgzBC3Nuvq8bzuvuPGHA95VkHH3NvgMdLXdpur8vDWwJ",
  "key10": "5GBcPh4MRJggPkQkhfy4t58Ng5wdsZptmKVJYgDSvzSy45Ha9BKCDWdZCaXfLVLfqeJqZ3Z33G1ipVBYbfHJBvmp",
  "key11": "5RFgr1MqWC4RjroPKQGJ6PZjxg8KV6YjRSoaiMfdYfwfbTAXAtGrwKrByGoJ2Pmjdrir6aTQpTP8rYt5i9uovRtq",
  "key12": "5CepQ4Xn8qN2qVasH2S9Vkd3QxbbpTrSp2JnSnpt3NR5Usot1B4qux325n3YVqjxPKKt4aDzaYSsnHpU5bjrSFG2",
  "key13": "4xFp6ZjguRePzFbiUCusaBmxj7GC8pEYFeaYkuo2XqrucoeYdqy3e2Pt8psBpoSTBRY1F3a9F7tXKhsX4B74t1eK",
  "key14": "4wPu87sV4zwVxH6RoaCYqRqaA25RAHyKwAscWE4zSUaKJ33exriPsPek3Jy2Jt3t29yGvEasdmj2BtJQhbP37a1r",
  "key15": "3TorHSH3dMpQiTCFxhCTN6qpComfvZaFHbEHGujURE6qB9g4pb2soNfkfkDFsjutTkEPzVHLRdZmeYqNBtsUEAzS",
  "key16": "4XySVUTdXwDRoTfRozoYsg6cwBkymGQXt3PsFhsAA3rTngPmQ1RU9k9e6SFqq2EwcRMfVEsovYetSnNuhcMaU73m",
  "key17": "4MQ45BzAW5uxJR5MbXKaJ8dF5GPQSwNsSnzvDn3obYJYYPumymrkZWdpE1jzwFfo9A81xrPAKvUE7MURDjVQQcHd",
  "key18": "63d4BGH34xY1hyQTuAB3bBdJkmdta232bBGUzvw7KuSVAYt1TEVEwG4HjLZ84juz2WaQGLFpdSu12MBeH6M7M9RJ",
  "key19": "2hLBSi36HHht2767ftRhSu4VYCy7jYbHGicnptxsMPJemmVFu5bQJMfzq6Kxn2JgzJcp6nNfYfno1Eux9kiE8wtY",
  "key20": "46PhUkwTPe6s5QDFxNKhxK7a4WnWMNtH8Bf22b7JeF1zF9kJVcvXLatzXvEVMfKSBJMkcyhbsAoDhMX5ipsr8iF3",
  "key21": "4WYXW5aHcE7vDhx2DxwiJ8AK9RrDaNBxGwaSgneT6pY3RV3yyB9UpxX6aLJiYpVqF6WDkejwpZjBGfQPuM6jczuC",
  "key22": "5UWJzp3oBtHE6bZk5VVLztiJZhuWyzzBEJXAp1ejXecKqDQjh2XsiGoKYVDfVHPb1aMTtuDvY8xEe7RaGYGxGuqe",
  "key23": "4qgYh69cMTHaPL3tbLPJ6P6bUeph86aePSRV2f4usw28Zy8c3KaTmFYgajSXHbwbhLKRNWwEChvLQRRqtxhtrcxd",
  "key24": "59Hyho3bQLytYesLMgsr3BuSUkqG5NQZqeWamzZipzEhu4sj9bGRtefQbCxqGMSgYyoQxRNWptHpFvzUyqFnkpYy",
  "key25": "3NPVkT1nKxweGY6jhgeQ3tHRm9GaEHY8Yf8YHCyCDhcYzpCRHLN8xYbwzuQYPd4kWgwEf5SCNc2PvRxMwZvr5MRv",
  "key26": "3x7SPyyXTuqDsKn1UkLjDYM7im6HiqcDaFxhTQsfYt9V4ytZ9Gk3iu8NZu2upXLcvws6MVugnwe1TeGgGpnUZgh5",
  "key27": "5PrWbULnKTGez7gSRabq2XU3QCrwir4mVe2dGTtmNJNozRFqEYMJvurLUGfXcSCtGTzx7x7KJ5ATu15KQgtEsRsg",
  "key28": "2HNs8TF21dSna536Rtje6iULnnM8pHjKS5av7RH1abWG8XKbTrMjuVswF2CuisQDLoBRYa9n7nN4j7JvxQneMZBc",
  "key29": "31d5ChMgyt1a6gmUomQarTabCXbT7HtgS1cVLggTaSn1yjo1M59pgvYwh8tdyGFTbRPj5vhPqzeZ1uRYUiRKKNNC",
  "key30": "5aqoccZQro5KTWreMhiXEwdVVmCVAxR8SSHxhy89NjzNLArgXF7TrdWRcYeBAF5yVBzLw4rMXAn8pfcr2WyBZ7Fh",
  "key31": "3jyWkdCvekY3rW4deM51iFdYbBXisr6S5oQAFJdthKTmjgRB2SWA8EfbpPkQi2p6NswAKqRnLyLM13FrqbjaEkXn",
  "key32": "2FD9mpkonwdJmaSk5kdSYSnX3ZC4z6vQSwQ1LzBoXeAuTpc6faTqVzDT11DZbeRMFhfxMvSFhFWvyPrgsVSxKBLk",
  "key33": "5pomtMbBxDCMinZMMhWcSzXjzHgmVRWTcRNqLC6PNAn3MLwG6y5srxGsrSKqgSNksKPGiMzP6PTr4nDwoQ464h4k",
  "key34": "9gz4ru9BZHbpWsEWA99sM3VoyFbjRDmCxEz8AMHpQYHYRqAczESShGMV9y4sm66KoVZs8XCgmCo7sZYZ8NG67v1",
  "key35": "4LuzDA9kDY6J2koDW8YVUdjnp3KtdNBQFYMUGBvMLvasU6uVjoQzkzxmG3MKmiQ8mAbdBkztokU24vdFY3uzAL5E",
  "key36": "4dejpMFqt4U8h6GjFMkEgnZo7K2utedfzoKakeiPskkpfLK3AMsznn3FjDahmP7hCDzif7TWsAnZtYuHZFJJc6cG",
  "key37": "4FUxSy51hnCaV9TVzgaX2DXFY4ySvmw17VtJmmQpKyYfAKTKtuwdpkg2z9Kqyz3uaeTXt6cXKMKXe4LUQrUYfj3d"
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
