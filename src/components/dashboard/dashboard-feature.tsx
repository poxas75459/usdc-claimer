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
    "4S4b3TEnXB4TNoRnig4sofa7ssUG2dNSWNTd1CN7Rg6uHYiRfyrYRHmQvzYK3GCZcCkm5unT5ChBbgjZMC7yFKUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yB5PayR5vh8hUgWNLHFDbuWdc5FqjQd1JudceYWBUhwuPsj7Z8GDSqKRm7vegQn72XDx9NEf6E2Wg2DuJ3wavr",
  "key1": "5x5Rd9MYcLHpNsDNDB8yeBRDWifLiv224LvYNXaytXv75fk9pKXaBBLVpq35WvnkwRmwDw8rfpxDSsQFQAzhi5gd",
  "key2": "PjrAsP6YThw5cUKoRoDpV5C59vtuYNFsV2MECHzD4TFMHF5Rjf3VKBCKtSawFvjUPzyUa3kmYHVtcVG2StCbTjL",
  "key3": "2bFD7BpSTcvfLp6fLrqAiBWFnyQ9GcbT3k6g7bD43eZ8ireDyaeHgUFyog3tqA5eBoy1ueygUPhPA3a4Ca53xRMK",
  "key4": "2HgVwDoWkpdLBUduaLFS3nviAnvWqcPNugoH99L3A7JLCyLbMX2KikyLTbJ3Cf1a2XjGDwdruhoHAYCqSvARAzMQ",
  "key5": "2nYnjrs4cYSwGNWSCwSoqZYBipGFGjy636i9QHyuWtreaaetWTqVh7pF3mDmJWdwPXNj6VwyTLJ5XGPdnB2taj6Z",
  "key6": "25mUPPtZixrT4FHeGdjjYJGv3bzRQP6CfDuyhJi1Gt5prjUmBkPxmc3QdG6pCvvhe5eMUgdh1Srhd7PQ7NkWS2oD",
  "key7": "3KjWJTgk5bGLqbzGLrUGJiQF99QixjFp9SyYavkaC9vJjUiJrgL6kSc3oawGd6S781j4bb6JpzftVaNaG5K38n7f",
  "key8": "5b5pT9redTKvr4AnYHx2w4KPedyxMGBu8PQHYhhs1mMybfNVkiyYfkrCGfdbA68G8gxtvQJg9khRAbdb69AZ2Djk",
  "key9": "3zx8kqGie2FwiWzqMJGnXkxxw6oUiY6ViUmETmqqSRyxoFtRUFSdpFMpcC1dMdTFaX4Bffnwv8zd89dwFHSS5qhj",
  "key10": "vhoPF54MpnS33qYqnDx7rB8Ktj3BCJnAicqYV9Q27vuzdtC8ESqEDyJiq7fauLXFv8HPri63AgxpCQAuzUwgRXg",
  "key11": "2MhzUJGSpBpt5qxGkd1iGCziZ7JEsMUDn3T5DjDJV5NesbKdzsMEbaie1TyhTA2MiYughVjhwGt34jAkNMNjNS4H",
  "key12": "nbYGv1TdTDenpZ9Jv3MMSrjSLw4dhHWo85wY3PwX9mvzQT5yJoxyFDjXpMrF5Se2VazD7YbW2B1EUqRvZEo2M1u",
  "key13": "67VDzAuyfR71j2AJE3e5483Zxf7YbFMSVkeMKNjygAdJTvDJSNmAzvLRk6EhoyJsiWt1c2WsrQXo83STEXKPV4qU",
  "key14": "4NzmhYB5tnNfQQm5ExzmWPK9FtsvYu129NZUG725dMMqQmgu5c1zpFjstGJheqiYKuVuVF3Uqce62BmHdbxvvepK",
  "key15": "gqKM1Nn9AAw4PUvGWaGjvSdx8dJEjit9mx44KurH2dN3yh9vtucWQMvWwifReRZ3Ao9DqWaLT4DZF5Sgp6pXsgj",
  "key16": "mhfJmstq9vDC1zv38hEzWNKAG72XVK3MbLe3pX3QEJxWLum31AUCYKDtwotR9yqbSWmdJ7NMET1vPy3eeWH2YcJ",
  "key17": "4so8NZiZoJ8FJKkFJMvoiQqQivdorJQEouhMsr4SjNwJaWmiQJdttmJT5xBV6xSS9E9iorJjnkQLmZT8m1w7LaRa",
  "key18": "29ZeYUabq6PcQU2xBz4RL2Fsg2K1Yht6NZCA5tMHCFk198s4fUAaz9T7pYpEtRUo9pnmG8ndZnU4uJ9ZBSjWBNyQ",
  "key19": "43T2VdvmSV3NhVjinTGLPUWgDZL3GSVsui1UzDfRuxYPiRcwhnf9fo825sdM91Gh6n1rrVojNbm5WSaj1cuHFyTF",
  "key20": "3Jgsqpcjx4qimkwvNzSpdKRXxcfsRvxNELxE8NZko3rmHv3T31uzg95qDKtDcBZSPNu4oWG6qB3MescYRVP6UpNN",
  "key21": "4ruL5258Gmb7rq2yronTMCeymRLC7pnsKZXdAuRHZK7xdgRSF1R1mrAQ2FekB8q5qr8sC3e9XoYi35hSTzuNAWc2",
  "key22": "4T5VdPKsbM8jzshJjLKF3rxifwfMuqoaUq7t6zE3hdrQNj9Zndyj5hLamwjeZPwwkYt38LX3cHsKojBudqn4BhUc",
  "key23": "odahQm5JarzxKkUvTJCW4qbRfKJnetSiEptYZZDC85XEmEnb4NRivT5bAzijrJWMYZEnMDqmX9AR4bdtHTMXdk4",
  "key24": "4BeyFPFdMksVWbY4UH5YmwS3Xa7WujAPBvFG6EQtHjMcn2f2yYYdSVG1GWioLxCakcrgUaSRAPAYah9APmWXi8mW",
  "key25": "2Uym2jJjdZmtimLv6KdbzLR2oVSEunMC5XE1zRGpKo57K9wZcJPwa4hcmw9WBndou3BuwDUMRStrq7eLzc62YYTH",
  "key26": "5F5AQ3bd8NutpNEmqKRNGMwmto7S6iEtFShznv2xWwjAktEbuhkn94mp5Gb9dbwyBtBmUvb2yXajwLKSTmKNaWTd",
  "key27": "35oaQ6NjH9G9CtL75P53eNvDYBfWDQNvLUR223wDwKo7ocNtfHZqEzZBfbWfez4ifwEVYq2NvaLZVnndwtBvdbkp",
  "key28": "5qmCERMBUad8QxSCC7Y3BKhJgxNL6FsfqWobquAZZxjtAMyEhq4zj1YQor83TdiM2d4S3qUoAk5Xb8QfgYsQUtEZ",
  "key29": "4eRmnzg69iP3nGG1ZdWvvMfnNNWJjmJUEvr4eogrpkBDRLb9GgeH9zDvHx9uUrghPw8n8a4TVUk4EGc3ieDqvu2K",
  "key30": "5A4oHHzZkZYu63T88LAZvRRUkh4ypYwQ8KsD4cCZCYFBPFaUxBjpjCaFCvtpn8uCxPnHcwTNUzzQwFkeu45jEzg1",
  "key31": "2wUvFMPwcP92LGNnS8s5t1ZWMn7V12wbJY45jw1wgxA5Fgt62vMJ8DvvyDpKTJCBEVs8w71RYR9tpSdtfbmecYZe",
  "key32": "5j2UYxBrV8KFGA6pCd8t9XujYWXk4tj6UjHbDTQrEzF84ms6BxFALzFavbwKvDnKLE6JuarWZuUBGso5WjyFB7eh",
  "key33": "3cPqh9yPArQ3fpDboNZHqxRJsmRtAjHaFzMQZdKFmLxqxmZH7uuvEXqzUb1dAXi7JeG63fuW8TNeuB7QpozDRkEi",
  "key34": "M92K3bDwYDe18tpa8CsMHMJDNoJDBZTBdWsod71DtQZxHy5SXadbmqq9zFxMEA5bVLkTxYk8c75cndzexTeQq3p",
  "key35": "5kapRtM5UmvAcv1auL9zyCactsPaAtqfF3nHUSdRSgKnqk12BpoTaqUj2jxVQTNG2mYSTixeXFUxfFaCNpeM6893",
  "key36": "oDpXkrwBVovYdsLNeug42xhnPABfNvrp8syCtUuTjexccofM99wftr2rXYTxCYNzUQroVHaqTBPYxnB9rVHZGEJ"
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
