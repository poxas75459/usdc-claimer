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
    "4hbAFFPrDkv5w8N9JaX1tmPhchS96AELkqd668Wk65jcF4Pec5GKwF1xg9GJRxQxoAMGmDpr62fT8vcYbVo2wzzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBMFJjZMp5KQZR274wnTw11ECtVN2AGqRoP7RmW7UQPhBY9x5Ai9tA1XtbV3EAPy55XoQbrBPvZ6gSRgJRKTJ7c",
  "key1": "5tnRFPvCQTQH9bnYDuR3uPX8yjm4LC8guUseT2uCMgLBU2afVocuzEjdC3XeeRf6Bc8Pgjy83LQ3bNfRckhSw1XN",
  "key2": "61LpdzRAdtLYwCMtxeroZPLPXcPfKXGPN4jpGZPupTzjCm16MaWt2mTfS1r1gQK2p8ec1UTKDSBynSAKVWH37Mrt",
  "key3": "c3x8iY2MhFngDCetyk3gqLYio5buthFFesuDrBxgBWtHbE3D743eKZNo4QdKd9SyNydyX833CeDiG2VyGQFFiSJ",
  "key4": "4UvqAesF7LNmx5hJfi82cwvQqJt6JskxsSY1MQ3n2Q9cC9nDTkFUXzSahZWDPArwK6jHibCXnF9PTya5b4B5R6e7",
  "key5": "3wsXZxJo9X32e22sEieNrtLyYM938VR8Aq7ecNQfeRtNiBe4uQpzkmV8j8s5ne4Jpdse1iByuBivQNHac9n43deo",
  "key6": "2sEmXkLn3UbioV86rn4xyTo35UsaaSMWovbAfJbadSzQxyNjWPkZE4KnYRdjh2rw1uAa1nCeM5jQYW5pekiAuPuG",
  "key7": "5PGdrHZ2mVsL24KA8nX9Q39xnKNMzYwRuvhcY9aWKKLTAoSzoSPj1cyfFo4AtQvqEP6H85qjB59HMesXhpzGd4qE",
  "key8": "2YSzXA2CMsiadmZLRK9tUHLVet5cfvLmuLPvEM7kb4NG2AiDHWmRxRp3JBQYEPTpX2D9wCCsA7UNuDmrD2Wo56Rb",
  "key9": "3HofUf3JjGYxXjFZvgNzqJnwhTdivZ7oVKEBX6CGK8nTiDFXiow5Te9WSk6YmaPfW8PhpCCN5KRmi7YSVzvybu79",
  "key10": "3vnogiBtHbBEcRUVm1dZzvTs6XE2AA4sEk1LtLCnTEULPUd1CNJqQN4FK49CRnkbwqW6kyhM4WWBs5gF2t2vJUAw",
  "key11": "3y5FuEe4rxKprC9KwcELYEXmSUJKWnyoCJs3QmvnU581iyCPGdTf7Z1qvA6aLqVRpN9KLZTeRmtAzX5PZ1MdtcAn",
  "key12": "5S9dJfES1Mwvo5jidUUgZfMDYoYJz3Kcbb2mHJFpBKdsDcaW94LbBwJNmLsB2PkwpfQ3MFhCiiVeENnhWgjtB5u",
  "key13": "4iFqTuSrAze3BBw7UB7JciCjYJdqpjHFy9QmC52EZa7sH3E4xwpEVCYFzB3iNv69n9MyQ1ramLyve6Umc3vHcLLm",
  "key14": "cARcY8KZbnhTx2y8RboCT9t7RzcKqd7mpJGESYHpQrP5uUSV7vvdQEcsF1gzrk45JR9E3QAKfb5u3qpZEjQWKSx",
  "key15": "kDSdrvSMMUTybryhPWmQQYr9GCgz6XbsTZHmP5wCt73J1F9CA86wqRnA547n7kpqspbE1ZyEarFghfq1nZV6gvK",
  "key16": "5A2FH7Mis5a5u6zBn3VYCxVbt4kcDR5LJR4Vc4RhotBvQPzt2fdZWmzW4nzb4e1VPvHAjU6qY92FQwqadAew87p9",
  "key17": "4yyHp8uwxEVhcJjvVSJZRTJpkwMSAQD7JTsKcLjEN3D8AeHjUAodJvye9h9Pjm1Ghm8wjzf1ZYf5ZxD48U7EWLYX",
  "key18": "5JBkvQU9eKM5nSnJvcfAo6oyP8xh1iFragrv13nEaS44VSdFrvrEv6KeQZZ2NPqc3Z9JfDCXfBPQM2KcvM8pAnNb",
  "key19": "3MsU3Tg5N81GRnziCvd4ZpjrR2gg1BWoQA5YjybNYnjdMuDFpsZfUf1CrfccGwYZLVpQuh2eCfLwtZYgvJzwuvmk",
  "key20": "389YWeAg6KXJ4wB91mBxyzoo2PrpTniGrfXDJGvHb4HU3aZFwnDF2DFeKuwrFrZKNdDoNmYR5gUKn42hy8Ugrquz",
  "key21": "2WFoEkjjDLwTB4CoP8PY8xydMRcsbYKhKxqG9fQT9MsGEVBoW21QgyjF1HeGFozktNqrCqCyfcBow3SsQUVwRnEf",
  "key22": "2QZk5BzmrWS9r8Ckh3C4nMxpFmi6yDEgVLj53Pyr8Jxn3L7teMsSmyKecyox1EjkqEqknd7xmaf22Pu6XhhgQhv",
  "key23": "4EPExZWto1zGYK8c9bP9xi9yV4ZgRz4EQ71ksUWBBsFmFdWAtumHnhV32S1vHBb1SDQQ6SRe915rqgDqLpBJXAnW",
  "key24": "SML64RNpQMgBpKdCDj71FSCE9fgBaRokXTf5zc3iXC1RmcfyBeQqNbUyrQ2T97zZwBJJq5tTP5BfSmWtmHFq5Hf",
  "key25": "5PRkGmPM38n1KABXgQo6DKNpfpjLWbQRct2M1fgqGL7brrKgCrNM2RwiPWByT6KJUQke1RRf4BXUHaaJJqB3kmsj",
  "key26": "BBBA8Dwfudyx9eaT3X6iV4eWpAFqqkGqcJKNhr6gGJSxSQS4YodtbKBV1mg73gLSfK6U1B2DESLA1m2C2Y4aYnE",
  "key27": "4j3YMJGidAE54qZMz1fcEJtcnciX6gtfbsRkgUErW7Rt4kTvCBaRCuhna3p3ibEsCeSXePjik8CAyxTkFvKYmuon",
  "key28": "3idfkYq8qjg7EBJcqKQAJjBgj7KBDmebEQUFzZFDe5AzaQgSuRgHgnP5XqDnb5UP1PgbiZVb2DGSNssr9xzdfbJN",
  "key29": "3PqsYiwSvztKsRZLWHc7dB7LDseHVvBA7VFuaW3RvAhsK8M78chppL9X2jpgbhBjoW1WbzG3GZgHUzsEd8k7BuyW",
  "key30": "2yuzsWDbgvXBwyQ49urHRC48djgLHi69KhqnyfRBkm5Ayrh6QNr8baz9fn9xYNjMrBbRmKvwKYsnKeeSRTUhqrX2",
  "key31": "jBNg8e4rSTagGfiWNs4LzKYj5gctFxAN2U2gnewS7gRJE7veVwpj4TcYVsLf2e3WysnCHwpQbf8rAavusCJyiWG",
  "key32": "5qsWyj6A7EzGQZyY5iueFkibWVhHjgLeWViee33i61KwAQiuvVEw9NjMCUUnXCZDUjbzjdtaCTu5BLJgDzu4sU82",
  "key33": "2V1bnevf1fgdhUmdnFuFyQJC3AaTDynBq8dsYiX3dBpuRTtqrLyW7zRDn15TWdM3sdAsr9g6N8fzJFjYXcrYvRub",
  "key34": "26dGbQvKvY9iwFC2RzzBxQAzeoNo286KeU7C143x3QkWX24BBptPp3pf5uxHEpXk9vVgAp9dmBpTm21QLCJqtWwN",
  "key35": "5ksBwmSQph8RF6uhHMYXfgGyCM6kzguaxTrCFufDKEyzbkJBjL6GCCPshZKbhJG24smauPNGLaNJPV3B4JnQ4Met",
  "key36": "dt87Nhbeq8aCjvUzZV86B7SCiRbJ3ub96Yt7DVq6FooRdBN2p2tcV8ESgAu4VEcK6RuE87iwhMHtNgqJV51bgax",
  "key37": "3p6pfCs6Q6twCsMPDAAVzxaqDX7R4EGUnVyEkQojwmms2T7jrbpovgx1N7KVACb3mcprpSbL7UToBfQtMbfLBYax",
  "key38": "5tytc1SGR1eLBk832ozcHufa85zHe83SPwLuW6BbZjSdQa9cgsWN6F1B51MGDBKMbuxtntYP7nXjDxYyB5tRU1Uh",
  "key39": "66YhMJaSZmWrd4tdh3juihzimeNQF62LnDZ15y1H1Kq1GhTqDneiXpVBLJRdBPLRAvKELvCvGZi1MHApoJGi9kae"
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
