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
    "4ZMwRKx8HdiTAv7Rix99zSicuDE2rY1SWpSdQTWPfAbbpxPgiF2NftYcv4EmJoHNEMLFURfBc5RG4WibqCbK938E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LBWgT4Uanrjq4kkMSvwVjEuWtiEAt9s3g25itw32kg2pq8vGfcDkdQ3SnFrPxYLaPkZoK1zUfEYjU92Fnbx3yj",
  "key1": "3Mae6cRoYnsYVMPt2rZRNijLtHqLg9E6g2BY4WNYrSu6aQLhqvQu24KPQs93im1b3HyynR46Zc3aPVADh2Cdy2cB",
  "key2": "57s5wrGrh7XpyCYozLveae8zsydRfi3baqUkPZ7CLNJoAALnoMfun2UhRgagSCCHydCysMxrwZNeLKgQR68FiUn5",
  "key3": "5qmrot3CkpNp4H4NcTNDoQxXpvnjrFXG7zfdnHcom2HhjcwNLLChiFTnEQ7UvwKAWCThdENiKZLcpqqZTFmxyaXb",
  "key4": "2sCZedEE5C3c4BWSajeDrKec2EovVRe7FhxFfoKZzh1vPHC7euqi8qU59jePk4gKjtRqVBzqUQxSjWYXN8Tndhp3",
  "key5": "5qa29vvh4DAnK3vot4exhiz6RZ39LjUGqtWMyP8vh1nTckgA3QBHiVjBYEy3cwP7Rzrth32PPPsyiVgpxFeoXjGs",
  "key6": "4QzQUPkMhaGX6XGDM1oXZzaCqw2azMF5mCEk6WSL8EjnTzpCFmF9Utx7T6eGJveHRP8aqEGwuU7WdWjRN4kB2H5v",
  "key7": "PNwdmsCuxkvZrfzjJh58fDx6jL4RpcEmQgR6jGbUQawqFw1iGjpNDXXy97jLjuH1n6gwKeYzZcUh8c5J1RspniA",
  "key8": "3qKQDR3atVDu2G6gh6xVVwC3HQT4CLL7qSn9roBEdEHLWjvYnR82rddNBUzgcZeXgT9vf2dAp1xKPAJGNhufgxEH",
  "key9": "4SM9QENFA5hiFeRvuMBqszUWdynmFopLHEMkovCPuYpjLfTmbjUb5VdZkBTahUaboJe64vYQUrywZ9dxAkCVagsY",
  "key10": "2qtnGmpybSJWP18dohPqLQsNLqLd8VCkR8o5EUZJzXrnYwNyAfC2rGYKwqbdGTyK6pbKsVArfNbHYvaEsSo2NWBQ",
  "key11": "4RBw55JBXCMKRShrzb2DUwJKUGKjRup119YQ3WCpLpsoywvqxdEU6AovMgiWBTvdrzqp7Wj5mbn3RAGPXqzwoddg",
  "key12": "4ThMNuwxjKUJ3RuarwdapzVKPJySgkh4TWbD4Y5vPyTqbkYGmemZAcffxtWv7heMF5Cr9TYEL5Ny1eFRqmo8r3gG",
  "key13": "3R2rt4vAc4ZZxjgNSJ7pv5nrwjqwV5JU5bAonzb9V34e4GydWe4uks5BmDnykfxyvynqiXqDCpXdJFe6nfvHCJ7g",
  "key14": "ERWJXN6etCN6n2f79Rq1dpQ1Wk8GwdQS76sJRKwenBnFPmCbrBSWy6VjGm3g2eeQgVdMgBjDPUXjkMf8md6re4Q",
  "key15": "3atAdx76Si3hr7iF3UrxHHVxxeSnDkvQtQEmqsEiZ3bE8d8ZBrWd6PabpZxpCQGteL3J93Cj6FHmHiUv8Y1GYEDU",
  "key16": "sYxFTs5gHmd7NKcv3dLQidDYb792etfwz5ofFUJaFA6UYyFiHjRC66rDaGoqZXrnHJL5X2xzPF9cqxkF5xx2XR2",
  "key17": "QKMtjeDpa5wXeucy5rft8nmhuG6dcSZ6fVSVvwu4zAaENb5jtGKPRRAkdgfpJHxgK22gX1N6pn5WV21frAvm7t1",
  "key18": "3YwDpLNaQsVtSWTrKrgKQfjS567DdmqPwBqRM4KnFJsZLKNaS4PKpnd5yiHAmfnzFNexQPXYjpDnL9FMiAiwbAFX",
  "key19": "4XVesHXVNDABgVrYUdY9ygXjiSaFufQqSPxw3pEWCPDbwSYbkkB8xLu3WkHMAmX2dUgwzCoJcqwm6YhpRp2XKhCL",
  "key20": "2yPgVLnw9rFHhxXGauyWA6wzrypTsb2xgHG48BPBx4qLBxDxv3HBEr8hZgw3ucNSzQWcNPT789UjbWpDDTfwKAmE",
  "key21": "3sYb5rcKzjzGWLruJEkvAVwn23rtV2kKBoDcPc4JWmGdyHXh5WXrDxkg2QcUzhtQyBFEEXx9MxUXRZRGRSXH9fTW",
  "key22": "a6DgXm8qTQ8fGMW6SvA2AnSJ4tPrR13oFv8ZfiaQSrVcE6b1C7NX5XTPZ7VWYt67J1qm5LCkMZFLRgiT8VzSjpG",
  "key23": "4JBhJfuUX73gdssmkztxXh8z61dmLQCWQJVUi92Ks8KuKdo5VSHh2THt5wm4D8DAAg6TSRbm2L3LomG8jfvp2Vrg",
  "key24": "4TTrFE8Zp9TUgoY9CK4QozvniPuaxasQohr9X7Hp29oGZBhadp1dhCJ4semUpMY9NzgaMEJYcKJx5L4DQwV3Y3r6",
  "key25": "zU1rpVCkf36eVUzzNHSNNbZDByz8t8iTV6zdCt957btGWN4ZbK77FyNFP52qqDT798LjLTYiUdos313VVFRwntg",
  "key26": "P7f9nb7A9EiYHKPbiRBEWi3X7T2BijkwUhCf9Zb1MMLDGgfr96NmGRDZcsGn9Lqa7iydcSrMuvZ4zxYYv41TZBX",
  "key27": "3HTb8bqV6Y3YpeUbbpbzwagiZCVj2k24HxiSg8KK8yj8vgMCEiLXSRsJHVHo7JsJsxvdfR5m9XVL6JaB3ARhjwqb",
  "key28": "xbBx9xwpzoQ5xm6NCyxRLvZqp8rcZe17siRsPYGYT3MqYAJXb2UXgd4dRRvYDycpNmR27ahWaqqKiSoaNQhbY7W",
  "key29": "48T7CvJvZmhFFJsBQFzEkNcB9wKww7bJ6PkrFmbX2EKi3v7E14YCRPiL9PziCpaB2LWd3TasuEziAbFdhD9Sxowi",
  "key30": "UeyYjGv3t4NvAHTkBpSTnT1QCRREnACvjv12LgWAbdZUsBSY7fSDsQokdzJ1K5rszSbZ8BgZqrm1wAfdBs3cqrU",
  "key31": "2dNX2PSjVoWc7e1wDpxkpRPZriTiuSxaVWPkXQtFFfyzD9Fny1Yb6fbpdSDMtcVEri7aUeEnGDqksfdZL2yCdZF8",
  "key32": "5UJU7EEapajgvVrxQCjkgsQwDDWwLqiv6YKrCzqdoMhchdyRf7n8LyBYYTGZgw5GRUquAbv2oP3ybNYeTbHkgaqz",
  "key33": "4KavYtX7QGgehkT2zrBrKsphueH2Y4ay6DPFVNEDBCbYex8CWhgtBUE2kRE76J72mWwB4TodATQ2bWMNVcRzc6xS"
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
