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
    "4Hxxc2KsBC3XjQ8etco9F3gWtxsazb3y4y1wEH14QqN1nougqjAchdm2hGjHAk63wCT5hhzrBQn3udbLrU6SULSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kc7BXKv5MCPXSNcgqatnf7hqtUEckhE9Hhj6K3P1UZknMSAkUc7D7GeqbQwQEBKSJQzi7HrJhYcNdQrK7hJjiYD",
  "key1": "28NueUxkzeLJkvmE5kPDWy2U2aPfcTnw7dCCe4ny3K3Cs64pUBPsAk8tKkLPbxCPHbNGGd2pED7A24CdgVniBgKT",
  "key2": "3ooreuhWgWE7W2ZLthDxQiEYzjMjh7FwSYh3m1fE1YeVFb9LZUEKSnp2hbwu6E4NzM3N5FNbYMvMLTGtK8BvkJXc",
  "key3": "5dK3gN9Pi3Me7WgQRsuQhbcBjiK7jiQ4bmtie88ycKJ5YspKfpHSJTZqRnf2ayDNhdn4bMyqjL6dwN5BVvmN8t44",
  "key4": "3T9L2cJPgQ3uZ8LzsFy2NzsRcA9yH4fT38iVsCRJhSmhKnQUQaBHYfcCSY8NbqLrLE2WhFqngHFasNQaBTcRcpp4",
  "key5": "5TvNX2UNACgHkjiwM8ZQvWGC3BJV6PKJjBtiCYiC8Cvj1FuV71BtWSApbveHjBwWMN1xKPcYAW2KTHthaSWaRzLJ",
  "key6": "2P2wrZuh88qTzwPTbs88WgFa2JNVQynvngujnV7CEpsLvWzZRuvwABbV2m5sjtqb8x4kawJn6FNQCNeMTgVUiR6q",
  "key7": "5XXgpWUEYVpav6LF6GPPkt258MQyFtX2vCcdsWHPPVZB5v1inu7DP3DBFUHEgYP9LHMtRVNf5iScK5ZWSvocUGAm",
  "key8": "4twx6QyRtb2xWm72d5xezMBCKtQWc3X65uiaeP91HBTtbanhiDxhkVmEbZMJevMtTtApdCQaH3PviBVhYNeGUuF2",
  "key9": "3qXCnvSAgZu4auUKexhrYEooo2DzSFevpYi2tikM22KkG3oxevVfyLdMj8mTGNHQ48Pt8cLpDig69LAW3MPuv1xY",
  "key10": "3tm4HzXkgWggouXHTJuGWKucxse8zkLo7TxP35BaouN7TYiPcEaNnSbz4iJczFAQrRqDdV75yjMGCvTfErvmDYk7",
  "key11": "WGLWVJi9QS32DRyAZNWSWLcqbWpyBCGSef4CYPtZ9uG3S1x2ShB5jEAw3czzbP8s9CttoU2MRBh2WzuZFNevFt9",
  "key12": "9hVtZScYkmbyPonj6cP5Ngd8dRCfeo3exenWb8BUdsaNBve8vTf1Gj5ndZMDijpFZZN1GSdwUufykJrDKwUAutV",
  "key13": "4v5xTfhDmZySJRxEMsJWybdG8B8ZA8Nxwf2uY3tvQkHCtLtfVJhb1maaz9moWRcK3X2pPupZguKgyU7g3j3GzmQw",
  "key14": "33ZmuKin4ix4TniGBdcwJDp28SV6DiZufSkHedSRDqqLsXnzA9EuPqhvMPx6KyL95nWPDtUDxGLT1H8JZgqxRbdh",
  "key15": "53Hi6VS1jZd8AvyzH26kM1R9eX4sF68bYkhMs7eXoXDyVuk31qVLmXgtsJUSEj2fToif9creQs56c3Q9Hj6Gji6J",
  "key16": "4fdH4sapuHxV8QektdBstwZi9bUqtSqtXHP5DLmski3PJL9eRZfcNDUfBUJUz4NQD3N3C9z1VhfPofg9s5agG9ds",
  "key17": "2JgRQpLxnKN18EJfxnL9suGKNRqxU61vxN32vFSxPRkEiz9TG7iYtWnAsDmfAP9MLjexw3ZtRs98kdoQXXBpYfBT",
  "key18": "3SzCGa14dkX3sVc9zouaTaCtb3eBaMpcfHQBPtuVgx4JqJXiMKBcTacVjPfsN4TUkENsFogKvXfd9hvaeK1AsnsR",
  "key19": "3u7o6hTbkC4Q2Qnvy3FULcog9EacgHB4tsqvmSxUi4JMUxgBXQMxsAk4BszMfTmZdJb2TZBYxuPcsPMnx9ETr2BJ",
  "key20": "T8dEetBPrbA5pGLer9iAnjSNtke8nKDuriZpHUdRZw9Fcsh9N2gwLm5VmfhMFzYFcKNdCV3qrp3yk19mE85d3bD",
  "key21": "3T5GVzprYLUzjDUqeBtexsfqs5MdXpweyNby7Qj1DKXXbiJK8Fng83Fz4B5KQWzLr7wwEQtEvLmkw6CBbFQneRmg",
  "key22": "4TX1gEyFoi6wosTyWzJZnnWeaGr2eREbYTNBK93qtMVGoUHjXJmEQNTnsznLEhB3roBL1N7SuDKeoMzLQd2VQCab",
  "key23": "3a7DJ6ykwvYPzrupTpSjSdtrhvr6YVfcu2RCTTQNZAr269U12FuRfTud465JoV5Eq2phCKA5H4t2uAm7dAHUAMpS",
  "key24": "2Mh5xpnsGPWXGXEFHZtzx7PFYYMnZ6UoF5CQBkEXo2DsvHf1QwBVR454zGqgU9V2w9kztweV5kon2zyddmh3gyP6",
  "key25": "38sd5JqPcMxRa7a9YjMPnWo82wiYFSanveayoMuCsB3QgXuK96599KkncWhhKvKk8jXpYHVH5uq9L6w52QzHhS5k",
  "key26": "7B5jXVB1xtHMGRx33C54QiMKzvFNRCKgB96DfzunFhkUhzx1WP3NCm4dTJP1JCcruaEduWfPQhjDGfG5n5bj837",
  "key27": "2C42QAcDBKYTLB5CmWxCtHUgpny153qJ3xc7QLDVeo4UE84LwZzqpHX9oagAa7zSQEhtkjzV1LWCvdgijd1PqDpK",
  "key28": "3wCxMfcp15yf9f6zT1ZuEpcoZoHcvurVokEojNGrU7hLwjD3vjWHDE14rqqzRJQwFRtyoUhS7LpAobbhAv67udQt",
  "key29": "86TX3j58A2BBu1PrswcoeDsza79J1xwjFCXYugLxgcWkqMMXAxCk9DfPTPx61z6QLap9evRM1A1s9tSGi4nj6Cb",
  "key30": "4JziHCbJFArhXaHkymwS9nTDqWcAYHtvRwCQUDH8DD6dxUnwnrzNGUzppVJ1fc53gtkQCm36pRHWKbGY8PDF7f46",
  "key31": "3ypSoqW6s8Q6fkYi9wBNTeP175WPULPTRrQvfHWPfWvDZxQVDRhd5TDuqnbzu2uS1XkAgCzp33Ke1Xh2strkA6YP",
  "key32": "2ewCrtyUt1zUb6MUoobTRpZsTjJVeb37kYQfqWRb1RQsWZnsYoeCU67NyZCMDKMEkSdEVvgHA8NPtvnMQRqkoQQ1",
  "key33": "4WaxswvvPfKMWmjMAaAW8VESozF9uKj1mP9MW6GX9yCry124o9QBnwyBu6GCZCxz4wuURDSu6JKfuzLBEZ2zNDAT",
  "key34": "3q1SHNZe4HYbNrqrQz6BTDvLkf6bX6odW9R4SkcTdPpfcYRGPz1c5NuYSkCmCLPV7r4Y5cjQuyfudycThfsseG8L",
  "key35": "39N3ey6wy9MvNiaDBHvMVJBpHRZLzjUUaFq8gZt3YWWiywBc8961zCmMrePcDPj6GdRbjVocKaozA9a5mLpmjcMd",
  "key36": "5eUyQasf8tNxeRfqtpre2E5vczTqPRihpxJqFP3LfACU9veqdBspNMWBGW2W4AiSx1szBUErJTEJ5x8jraK4pPsE",
  "key37": "5p43JLg9ff1gmPqgkxFgeSQjQXfai8rZMwNbD7tnYD6AGivXuyHfRUyGwqrLV5rpxnTzqPobd7hpDDyY9LBfEnEw",
  "key38": "3QzhrGvDtFqPCcSrQkEbLPFB3DaRNqfBE1xEv1N8fha9fhaG2ehtkCzEVsfiPx6k1UqXS4CodMgeP8ZjvtGBeskb",
  "key39": "23kJDQacnPvBpugH6JPD61sRWmGQ5GVXKaeuhSSujXZwMdKZZ1nNor1CqvTzEsQfraLbQkHAt71ziPN5d1ZrfHcx",
  "key40": "5wDo3MicQZ7R1DVnA5hfGbZTfXh1ta1LjhSFTGKsC4ig4MjmmQmhfS7TdRamGH41RTzs1zTjQ865TPTwyirZ1Kik",
  "key41": "5XQ9k7ARk6XXEs94UN4dvsuvgBaSkDFyrVjoJnv8wKM8yjfrzKswApPEBWr7MsXBiupseEvJiwZXo74WpwBtkDeE",
  "key42": "3Qn43EXta1W4cx5pQX289a9HJAxkAVf5BZ9dXK3qCZyQY56RzSkj2U9R3A2DzP1iJGGK2PtRXQaG6KrtzNsLQaAs"
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
