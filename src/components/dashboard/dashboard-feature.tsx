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
    "5DiFKNaccXHpjuekzJTVSQuc4pNte55CCN76muBBNApPgY62wZhUEpFBEHZrYyuBJjnuS84nVySfAHNqarF99jXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yFcy9UrsVu6TfDjBATaPyFh1qcDwvYpWiUKkLLYrGAEuBJkFdLebCFJLasZURjhQWMZyYAA3Qbr2ZeHKG82DzgD",
  "key1": "4CUxpHNFtDwZE5qD64KaLQCWZJ9QRLe6fa1Bk7ZffqsTvuJWWyRrYTAt1RUhvxF6kLVjNtXE5M2U2Y7eyHiWt1c3",
  "key2": "66T8ymcdSUoXFVNau77y7dQnnMBP3mYYzWXnaUtqe3Zp7KfC8n36GU7h2bKJWqMzC17DDWVyK55BKmUakqhvvujk",
  "key3": "4hD9DCbEiv8BkKAAkJ5mg9pD8MSRVz5pffK3fuUb8q1r7qhumbmbb2z684JMjVgmeJmEzh6RoN5WL67UKuaVgdx6",
  "key4": "4PRw9aiWM8CHtqks1VxdnRqPwBP38LhWGjKNqFDHJjrVNV1yQ2kJHMeoSQoR5wV8o53eMNGWHU8nfDVHgAb1LmeX",
  "key5": "4yuM4GiyMjoxXxCHBEdbGc9vGUeGDFvXJTsoyAdyu7C98XpjWsCCVnymK49t4wZVwZ7un8CnPCJxfLG42jEsWbQo",
  "key6": "5ofm8bVJsqSHQVnMxCYzr7Cbb98yL3PGjBKoEXb8iVELv6BgJBgeNWWCa5aXM1WdxahXdHhp84SHyv9ohDyRAzuQ",
  "key7": "vo5BkQrtmGncPqumxmp5A5e9rxnonwKEgwySZUVNrSxMYLWSPdsHrEVS9xj7mPY57D3M5ZGBqdgEACXZD7jSmh6",
  "key8": "3g3aidbBGX6U1QkHxSNeUyTNZTXcSGyjGdX118DgR2xdZ2RZzsHKhzhdvdPj7X34qVBHaqnKoTzeSPvDbmVo6cK3",
  "key9": "xq5S2pezDoyZExWdUyypZTMbneT8fjhr7CoXLxZGKJgKStCCovdKXYmiGnGCzghcPTCT1wt5HSVHeRmjebPzrp2",
  "key10": "2DLZCPiQDCtozRb7hCfRkZDk9H7ZXZVCXNfHxBooNgdcFrmCk29QXNTHvKY3fBEvUk8ELmC5BDFruxmB2VU6Vruz",
  "key11": "3zNQau66zwXneyUKdSnpu6EVRJY3tDU1RWcRv9mkvWt3LkjY4oY3iyzedjgqUS4HruGk8ZAmB1Up6gBLcdrHwmaL",
  "key12": "5J8p9sDAeWxLohHrVzZZaxTYVTnpmEi9A6ikkVGz5aXCQZEFSsBjCkQTLKVam9iwoyknyHeFpLEnEDE1ZoRUiMd3",
  "key13": "m8i8mzacrwR8wLecTtTGoD5rHmruZzZHU2hs5gXz7BwzDjVfYuEfVGJxKoMM6T6VW34dUTFzCqGYP8iQrs9wxHh",
  "key14": "JLT9X8yQLkBYjBHSEi8uCwbnW3PUwqgqxLNjMH2o4kq2nmCRr5J3x4FoGMbxgPmMtoh3SJ6jQdubipFD4KUx5Lz",
  "key15": "4TDwBkGyqFGGqwFeVCU8Q9ik2H4dir3zPbVoVDuiKk9cgHbrKZhd1u3r33AxqWU4GT7176HHHW99T2m2iCyPpQ8Y",
  "key16": "5RCKFyNKDMpKMCAty9ttrVJub56YP2Pu87RkVYC9uU1SdhghgjZ29j19C3uFMFRQgd5moe1yyo8QoX1brnutDkBq",
  "key17": "LwpWWJ2c9P2Sbtworfhe5LVNPfS6ieCTUr4NRcm1pP3bXjWdkb7VMa6Aif5wo7LtsWPVnWWg5U2kRvpRif5TtHY",
  "key18": "4EX7PAjYLZn45fgHRiYwcBQvqg8tsDbEodhodhTm5SXz74VUwAQDjZEY9UA4A1ioxH6Vxiz1xWTRWwxkRfcsQ5G3",
  "key19": "pDMjHnoAc5TcYXQrGu3nhGEbr2cSz5MMwq7QJptsKCb6oDqy751R7JSWPiKV4g2h7V6XMwAoeAjZ61uyYqA97nh",
  "key20": "5Eojzr2u5ePhnHJDMp6SMh53ngLA4q9NCn5NiEUXS3aq285vDfdMMmeRW9mGL2G71Da41uSxc5pyfje8erdsKDNL",
  "key21": "4d8SxzFxnF7ms1NEpU1DZNBaBSTN71MBd1mLcSjuLdVXgQtkqEF2iwTZavv8QLMHGoaHtva3f3WFt9WenDvsKSRL",
  "key22": "2o4MmsATMRyxhHrbYVUtynDNk9Xs8wUUuhdAMKkqSNmYF5AEBuYdoWENnkXr5j2L7GL7BCRJbZ9XcTUKtpqDHftV",
  "key23": "57WJcg2k6jCSd62A2kajdBMk4Sf9oZpB9LoKhbeTDxgGDHxW4rrV89dJKbyjHB8oHA6UgcBmvzgjcDk83UtRapxq",
  "key24": "5iKi82HS5cJTcAq2uN4ERmCNzCPQZQ6WmvLPeqxXMhtro6tS5kjmTfcG8N5bDYwuBp3Q9sKw1gdSWpfiVzHE9Fnf",
  "key25": "6vjJ7GFyu7dsJRdZrhhvsV57WuzwtiKDvAqACFreNR5Qutk4fXdDZ5WTVEoPYwKh2BXGFsM4rVUNmBvuTygbVnm",
  "key26": "EzUbZ3CHmn8kCa3k7woaj8r5zfn3csQFSh2gStXBtj9YMucawW3GAqTyu2NjAe3fNwhtv7eGwxd7Xx4CQbqC2KF",
  "key27": "5cNLHWmRyAu7dPvkQpfMsDwT2VFzXBHXwUEydhMgCPB6LQNTb9xSKP74qzzQnKXufe7J546BEysWQHLTicC2ZT3k",
  "key28": "2ds7EwBQSkgnAptKhr9FsrpgMtryRB2jGa5hRn84RhcDY7y71aXMBE3qU6vPhvhZEvxGrCfhAWyVZsptgsQeQHGS",
  "key29": "4odNGHiAnaQCSZ598sXzcKHUFcR4Hr1ir1uCg3NWcf3jkKJvcfFynFq31MdMyER8FnyquAGWkA4jZxezJKQDXZYk",
  "key30": "4eupu6W8GGpFpvZd3V7RPSLj1jah5posCUd46wZVeNkqoUPDAdrcJ2Gt9KeX21LJM9GYfpFwAL93txHuEhUXqpJu",
  "key31": "jHapVYs4i6vrda3FDTKho6aDzw9L7Nm5tLqxQsmVRZV8P3HpmuMBeV4DJ1PMx7y9esAMu6G5Y9T2XLZEhLs36Sy",
  "key32": "5rbKczvTWdREY14zJaCVdd8XDPaPbwcfGjaSckn9NWV3UXF4j1doJY793Lcah1qDnZdXZrd4wxFNigfeLNYthdMq",
  "key33": "2TUAzNENEqupuFPofnzNcHbB9q4h1X2v4f4JcBmBx5Ge975epuxiJke68iJQDNmsChQCJ1ySqQaRpMTA3ZLViwCh",
  "key34": "5ydvkzpgLAr613Vzs65u193pQd2MeWQr2bt1tZ57fzYtNhZwwMbkqZKRG6qHLD2KRqNzojbwdU4smtYBQS1fVQyu",
  "key35": "2QxGRGVx1JS4ZoVf8dLYwDnaF5qygXe4sTnmbqa62Lfwk6o8fmsRb41sFk9znLPt2k7D1BqCpMEkF8SBzrG1aYbA",
  "key36": "5tU6gtpg8vg5pu4ZxUZ5hHMwatusSwXFjXzPtjWNM76WTerWFxGJLjwXfPc1EZfrTd4vTrPu1BbNmdAPeTnk66Mo",
  "key37": "4CbnU3Lroh8vnf4RuYVceypiB4UThae6Y4GGusQFkjhPh513FNnAysstBZhjrxF3fNUJ68uMxUKhX9WPRLtZSRdM",
  "key38": "kfKQJ14D4DW6CajBsM4sgyyzZp2VGo2QdhrgipccPej3ZJPdNbT4ew6R1gUyWhQ4dzpECCtYRJMjgUGFHo4mEjk",
  "key39": "57vfZNp2dW93KqwzUovwLweEsVBF2HXzRVuacSxqU2kwED4YFdYkgpbj28ygAU7g2awNRnXheguJyP56WSWBGu8m",
  "key40": "3ektw95ECbwviYEMuYAR2kykZSirC8y4KDSyKnLvxJiRKPprhRqTYSncFaWj4h1hCRUAZiJvECwuCHvLkwDP8Rqg"
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
