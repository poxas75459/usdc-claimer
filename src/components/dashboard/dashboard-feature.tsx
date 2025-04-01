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
    "4mLBW68Y9CTVmHpmDU6S8Hk4txUSVjsPTPc2nEa4xkdE6CR2eRiHqvXCykcqNY7pQq8KxZdFLPrFATtqfmgTwJ76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3Q7ZHi7YSiJt6T42PDMES2tkgNxiNVzkys1RwpdP4uJQm6M4BbzMoiGX8wbWDWCdWseezCGHJYN8i7iA1q94dQ",
  "key1": "3LwJ6MNRDQH4YQLayeMEBk6QRRSVofvweuf4NJUQPDG7jW6LhmTKXqQjwpp5UL8C11p9dePpBY2rbZyXBNsA1od5",
  "key2": "4uTdAovewR8FRhbcfmdDaynmu54pd4SY9JMruyQQHRAxspZWVxUAaLdu2MJVKMx9j8b6gUZ2ThoAtTeUvd8FCKZ1",
  "key3": "5BJm6AdNvEXjwuiapheWoE7RDjYVQmvqQRyFhHht73gKzV51KsjY7VLUQSfdyVLQgSwEr1JTguoqoRqUrCQhLy7V",
  "key4": "rnnUUpPAkepPv6CLmp2wNNbsFbnWeAfB6GosaN2zWyuXaeC38aUkynQPVCopec3wtVumfqWuigyf1vgkdUytnsG",
  "key5": "5rDAJrksnguwUPmkreHbLuJFPwHdwT6DhgyKG89HJnEzCdh3pe4B2PqNsrYyyWMeq9rFvcSzXEzRfge73G5cg9VF",
  "key6": "4wgUuxC6MJRsVhCnRr3xjzALhTdL4yfHZdnLWqFMCHN5yPAABsUqhcwGHuG8StxJRbgSvtKTRSRbCgXgExC96KjH",
  "key7": "3JonSUvQxSjyqbjcMErAMPMQZDJivYcWjVsv54awBCLYHdDNuwgXdFMozKWjdakUDKAFSVaPECCBi1cYDyMYHA2j",
  "key8": "64VLr83gnvzX1D7W48YgdntpMeRnQ61bTWNqP98tgeV7FPKKKgcj8zzXB1g1cGyDVnSPsgoPD1kjzEmxXQFx5yW9",
  "key9": "2oHMSG6tx2ZGhrvL2wm91MYNVr7RFxgpTZC9kj12toqf7qDy6oH9RyAhKx93HrxYuk81pS72ndekvmSPHSZD2HF4",
  "key10": "3EZ6JkQfoSpvRnhaYLaqhuVaLw1Z8mTBC6rRdA7Muzbf2WCoMRvEcZqLrkSqvVuQGPot1pFeqv6ZzAS12ASS7nFT",
  "key11": "2AQEz35RV7uQdrUvi6LTA1wWoBwJwfgPPCtEemWQAnyUrBcBXqbE7gPBjxyumnzJDxoBpgChjM1jgmBw6WsgSTVg",
  "key12": "4F5U4i6RiVHQe5U2aGDGiAy7vZAJUAabzX6x2WtcdaGrVstRe9UDTkRW453FRnzzYn2qZCjNxc6zWWE7k1Sgyvc3",
  "key13": "MDcH4sDLaQJpeyk32snHPhRLnHaf8MVHTTrsAhhHeC3WQcUGoRxxMBoyDsmcKPNdn5PuQtHs2GdaFTQdDXSQeVg",
  "key14": "46vMJZHYtLZzFWCrfdRjKLHr3CFvUvgk9dLndTvet7YvZDnBe5PKdTvcdfKGujJQq9zo3FcUpFPo7Q5wA8Ju499j",
  "key15": "UgqBfMDBr9M9ZMDzm3JZAUZDk8uuZWpUrUK6yfHAr7ACYuLVWMw9L35ByVKHNpgi56SxLFtZyWDSiCfMZ1w7kQn",
  "key16": "2FB1cbK4BwWBfgQm1jGTc7Wn7XBhpVBKfZ189uoGWT8F6fKRCe8otH57CAH6TiWCcn24Y5Lq56thBizLRBky8uYr",
  "key17": "3Qo1QXjysEeWaa6qepJ8HbR9SRj24983UJuK2J26Fz9EzWQEsMg33CJQn3eo5aXdVXDYYpRhAqSWCF1LSenDoDVU",
  "key18": "4oCmbuXj8eLSsfGVstDfFCUBTFGY2Wjew3X7TGc9e89ZfNtbsmMadww4mEu8tUwhbaojSbKsLiu5m187Ta7xwdtN",
  "key19": "QHhbVGFmA2y6S92xpW4yFtkdbdWCkGaXLjMhjRoXERcqrcCoyG1eoGLakmuqksv4373wgntY9VgjLoJJqcGf4me",
  "key20": "FJkuJzKAinrkjox4j1c7wKjJkFArRXMrdEWsqbRXtKyKcy7rELcpK7WokX27J1NDaLxFecbYfzpnLT2ch6CvYcw",
  "key21": "4AEjZUvhDA3TcmVJ9NniK8RoHcJqys39Fss4wGNorm2bdg29Rxc2xKqn9hnWGGRtTRJgbyt7bHw7XAJ9HpUcfYC1",
  "key22": "Y9bY9U2PVoFvkXEonoN7jnPzZvVZz85nLLVB5VF9bmf16ocNAxYiWMHrSfqigaq3k9mrWgeaE2kY9JASkAQJtf5",
  "key23": "9dGayKBuZt652BxB6QYnQkAoMziEcySpDH68mPXXhfJegJqopuag7uvwiQbywNJxuZRqJHKUHhd4tReH9ANuwC3",
  "key24": "4jraqrhFXb42LtsqVhkgu6SDcdLzdzrSePzcF91zXi13ccg94QYjM6Ri4xSf2WNBTNdVPwYjHK8GhVHVuYu4oxvb",
  "key25": "4hWf2AbY3cv1VUJJmQDPEdW3UP9HwxJzqTYgo6F7Rx6BU9yJPtMPTTBLm2fPaKniDEAKBo81pDQe3EUfuZAPMQvq",
  "key26": "3HTgrwP8xpYi3unnoNxvwD81Vhxby4gp6V8dB4wP2sDF1jDWd5jds5KqqMcse5NKJ4ADBiK45D5xzVDS9mtGfEE7",
  "key27": "22s8XqyhZ5MWwUijywgtcLCyn7CQRvgzCHoDVCAuyqc3urCEUJZEttEvw5bpnc7cARfgasbWATHnYqNk4RkoYtbQ",
  "key28": "2ZDsq5ASWXoTGJk8dTgG3uVTMPpRuyrHJ9A1yQrQPxhg5PpFrvoJfGUA8oMS9Y2PnHnemTZjfe3w3CpztKoBYayF",
  "key29": "4T84Zo9EvSyUsTu4LMSA84m8RbT7dkvJSbrQQrczUVNi4ifbb5VU7fAJWLn1aJubXfgkNFBt2M2xMGFyDw21Zbim",
  "key30": "5GVL1Vrgke2Xs9xPtQym1MuV23AxFXnWFsEsVbCBVhyUyzNYzeBgLm9smqN27pZ24q6mGBm2DMLRHLbW7Y3upsMc",
  "key31": "65uAp4S9k5eYjzrxuams6fceBETxrcwVPeknRqMhKDB36865rRLxmgDdGuXmtpsi6L26rtWuzGeKGAJftZkQ7boF",
  "key32": "5kDH1iYpzbgtvp21ThHrvaJFYdiFEf2YesQJnXwmHzhwPPhUZMmFbzyXaFRCRShfFQ5zrT5uYpiYNNNApysRHqpe",
  "key33": "4yv8EjGvGVDQjQFSVhM6nGrrJD1gRf5JC3ksUxDgQmtRnnESuZahDUWh7n5vMbx1ua7C8rDsiXEo89yESgq1NfYL",
  "key34": "ae6ormtu5bs2zPu6AdPvcT3aQJ8A1AXvArftg6z3rFNMZMy6tkUAb6Zcg4BZfJydQbYHjGvEoqw4PZJLpUtEbUQ",
  "key35": "4usZ148UJr2RJcyxJ2YEkJXJH4SHdtYKoPfWehRoxcMkfgVffDp1jY92bRXLXptJcatmq6ELHFB1Kqd1iRJnAsPF",
  "key36": "4yRvjLHNANBNVvnoGbLxNBfCqZ6nMTpNCF9uS1BYpNYFe5dcmc5Tq9STrSToRUWLjEyUqfgLTjKaVieZVcNNL6gL",
  "key37": "2FCTKmBukuWsXF9JKUxe5Y7jPNZWHaTEgbK1e7epMoo6BfHAvbCeyb4qrgcEGg5Ex2m44871d48KiTKwWigrxTcY",
  "key38": "65zgBkRKHACxdFmJVHxFzR5Z2bN8EfwAhzkr1VEdCDmN1iU1fSduC1cCTD4U6YJFujXdD67AaQa7xN7GobZ8Rocd",
  "key39": "42fWQRfT2hh5ccrDdVpNeDBDu8MYHs2FrBEnZr5NUKvshzb5UhqudQunoqEioDKt3v8rfMRrDyHrFivdk2U6WyDH"
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
