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
    "2SkM5hViZsVg3RWE1cPvnn7K5sYgDx4VKYpuWaWogzChxP2D9wVJAxrWsTKbgxqjtcXhpWL76kz7k72Sf3KATJDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VReNuVJt373DdTV5Hv6Yok9WddDi1W6o9S9VudrW4DAdjBGBGykqp63aX2zVjSxWmap88M6zgf3MYaAgGnSW8ac",
  "key1": "4x3sC1N3D8dJU4MwKEL3mrce3Cttaej19BhwoTZxHW5e84XBZLmkxGFTLc5PxBaByJ6YoSb5JZQpVPk3tti1Uo3N",
  "key2": "vBiKBvUopWVA4D4iEFLdqt4YZ47mWuMsNSbewzvkBhkbpCfFdH8ZMtrNDvy8uLapijquQ7ZeChmMHduXWUCYekB",
  "key3": "JdN7HRJkAyGJvhGtkBnzeQxz9bGSq1Qd3daZd5C7Hq2ddSxu6wx3rNFnVJJaGr6om3fvWByj9XvBG1LQ7U6At8C",
  "key4": "3rXAVBTAvjSjG9m6v26C5Bcxt34yyHbwBE3qRttQC4j97GDPLNo7oSfASkMRc3DfDFwvejRQ7BXgpDAT4Y2kvST6",
  "key5": "2BoejhJj1NfMi5srwbWd4PL48LJ3MSGk5WdJ1N79USRYUJZp5wrNBNCAsWnknfwy1UXngf1VMNqPZFpBsaLyaMhP",
  "key6": "U78ocTt9GKwFK7rL6egEQfvFvGMpL64UYpMpPvztnGuYpC3A3doT5dEpNKWv2WPzXib4Lymu9W6RyPAmt8mwSLf",
  "key7": "d2NSba9ScyvcEJrNgpQDTf2ejqShWn3EriaYS1PuH5btgrMKND5Rv829Aa2uJdH1YDSmZGZS6yEhPHzkDMgRpH3",
  "key8": "3yyc69czCc7m5yRxuYkkPg2iMTuiP6xH68z5AdkRivjwxP3Z8wsTdnLz6qc5yXaBcfUmyCiGFtnWQRd1JPi1YyXA",
  "key9": "3MoA5Gi9wBjwsuubdee7J9nkxt6dS42fT83wYoadggg9o6i2tiwW7yS3dY7XFywoMzKpTZdDDkKXCwBWaio8MyBH",
  "key10": "2saoBVfWMd6Pbk5zmBdDW3ErFDrA3QzWRLKm8VKW9fi8L6LgZEZ6XkUnthJgJKC7qa3oUHEwogEJou5TKdDU19ZY",
  "key11": "2oYRKszN75bh1KBxjfjiSNvLei7iNtTJRxKw6JtQVwzLLho3r4tyj7wgvhShpCWBK6Z4zAzyo9varyVsTQUYfMaq",
  "key12": "hSQo3d3gL42iH7tpBy934CPejsSxzVNLzHaHzUTes8Ci9vmtrnjD29SCti1Eznj4ssCKNzZVWY8xGo4c2e5FDJg",
  "key13": "5YnRdyZRr4AydCzdx9E85Cv1QFYTcvpVGAQTvXzr2838gbGe4RdAy13PC6iCA4Va3UaoRV9ENJRzEM9ZDCev9vm2",
  "key14": "5R2toK1nPRy7qEydFBDgiwZypwnezgbD4SjrY2g7eDL4MzqSh442qNPb5kUAzthB8LA7TdaDsC4YxpZTTZnxw744",
  "key15": "3LvCfSWfMu86D2LAJb56S3qBL18PZ2vcaabLPTWVVBpC4dUF2rZ6EqHd6yqktG4mwqQcqfJRnuSFDkNWvrrYxQg8",
  "key16": "31vyRUdoArqqkzUNdwnaw4QUo5ATRQWcHLgUME6cz8DtPfamiziT6rQZugp2TVbVjuGyFYF47wPDmhPtBnuFDq6J",
  "key17": "Bx11EUgYfA6qWismrr9zA282PtXuFSehZe9op4VPsY1QVngBgrtYFGgsqQD8F6BFhuFrpqEhDHGncTbnjtV9XCJ",
  "key18": "2VRdXtf3BAnnvgz4kxV7HsoFgmVGbuYqJnkrU7PjaiHmCp2QZpdiXyAJzPWbAcNP9YEjeUQUsFhxDVxWKRCcfPps",
  "key19": "3rPcGEDSe7c8sWbv8qEeDggkA7dHyf2An5ZtRLdNkTvgkK5o9T99tDudWZs4FU5bBfqyHZ6CeENJzZ9Lgc3v7eAF",
  "key20": "21BVz8Gr2K5hzU6BG89az6rsZMjgq95gipvko6BUb2TrHGnFbqfDbq5KS8Q4a831Qkt3LrmXeJkm2vB4fqhMN66y",
  "key21": "2Gn4bVW74HEBRFvGztLH8tS9zwqMP76CNQHJ8LA7PoeXTEBRV4eTmaJLpXM2vgWMJv28MY4xNXUCvNHam5m76xkN",
  "key22": "2w6AktEeexDyZks7RT4H48PyakA6opzuAB4eaQ1P6zLZB9zoHM3D2rG9fAQeWiNoLiXJGBMpBkdKCAkAPA4VE4Wb",
  "key23": "3GtEof5awecXf8ABw94NqC4r1Su8jNF7FYuyE1GrXVUERvX9BDb7s8TFWVEhv6aZ1SMucgxmQaaM5QQeSr561qa8",
  "key24": "2Y5JLUQeTpA6UKoc63sZCYk5ghVnG2kyMD1jbQKULEWR7bJuDEAipa37SCn78bqxDt6aKqLfDv87tUuGvjdRZ4Yu",
  "key25": "4evFHSnEsTSGX94kL2mTaTcwxuUzMsurtYHYXE4deucMBUENBz5ae96PdDedq1cEa1VMTRXqvuHwuKSPGLJ7eBNf",
  "key26": "4C7qCeczVWSFcDAUUW4muZvYuHBNdV26Rjf8fgLzmB35wS9CaMcrHfnL7R6MihruruJZqSzS3JZPtYTXjQ6u8gp1",
  "key27": "4TEB8eVPCFtEavtxscAuGegmnhdym45pXywzmZJmTPS2cRZG1t8daYW8iocieihRSygZXeJjTtaHbeoh81ztfdcr",
  "key28": "JfCRVYLBfNYLkgeQjRBL9FxgJhfQnEJL56x29WSoXQfWXxiDtc8HeKeNAdy6qtgmVSx2CSWpU3pQwhTfi1oFGwH",
  "key29": "4pec6dHQ5cf4CabbL4P5LQFNjJQSD5SERWhMe4XfPrs4G6pJYUEQQddnh8XgxF2Ks9D3MAUFo6Uk6LhZo3aKoBYo",
  "key30": "3cr7LzyPej39zCJTTBrTwK78H5d3DmS7ccmDz7GjFv32ChPbzYVMwDqxhPubK4dbWfXfPTkUoqSkujQLVKQrZ8Be",
  "key31": "2bpQLHixRANMECt36e5UdfKv6W8akpNn2WuRUynedQjJG3xZMGEhVvMoTCg8NrD5ESEaRCFrbtr3FNteFsLCcS28",
  "key32": "3yZPruHLmC54745QmHYSMmb7QZJmAPthtx6xp43JBdiczP3WreSydZNK6Ub8qkupbN1TcZYmzobT33myqcCNEmNC",
  "key33": "wS1B9E6ckjPvAe5uPBPLE3CfhqRVS5F1S67qY1MzjKns23GA2dAmbguZmtrvwY3fPAQ4YqsxVDtwnaCnqeAH9aC",
  "key34": "rGWTSGVboAaHvBLBu3JgLcT6k7kKuKCgYPF5R9t5PB5sZkdFKSaiTGmuqWa3nTThQ7CCQXVCdoMcda5kVCYQ3P7",
  "key35": "41MF2oSWQAzrwnZLVwq4SCcz3EmwHPfFURX1NMoJJfARfb32c54781c4NmNYN74NpqerXcTa4D5yCpsjVfWku88E",
  "key36": "DswvQTLbKEqP2YsmMz3vg39pSb4gFsmuareDgjWQJVEg2fw9nPz6hAmYu2uvMusBDs2Ly2zHPC8UkytikzsGqcK",
  "key37": "2XiFhiMD8JVSaQLmweEnUMsSxobMSZPeGFe4yFNhvLma1xSuJUrfheso6MF7odao8ZK9YmcSxN4hE5C3cSTQCFSK",
  "key38": "3q6ZV4wEZFDmALLQYxZTejDhDx76AoSMkAKry7rJnkfCUxN2onwfANP3eRzkcvJbnuGXd9D9z3eZcZfA2w5BpAht",
  "key39": "5wC1LYkJqtjG2r1WiZzsNVMCnSKxzExpYVDqgNAcCey5LD2oH31otjP4PoiNxu9Bgacd6MPps3MJYHQRTUEiKBSh",
  "key40": "2FQd9rHq1KZ1xcGbSQj5NVh1TYkXce9RGRnX7CHLT3KCcXV4yJ1scXB7MzLzcugsUaHExS6Yp176EgXAut32Pqai",
  "key41": "5dTM62UwH3diytPUFmiM1nHRk4z9MQfGF45roHkTNygnW3nT6W9VeRyBLvG157LinfcMXphq5isMsTxd7LmBVjn5",
  "key42": "2h1jt2NunLc9F8Eeff8J3Gm7VLcvm8cH5U7wdx13Hb2Do9vs971pSdt49KAW12TtaUoan41aDMxoRjRhXJVsDHoZ",
  "key43": "3iX1YTKQzcyHDxsJz4sNXvcJuEHXBL2GeNvmm98hT6s3KVacjHH94U3mndWBgPt6etyYwMyiaJLcUapTLMdAZmRN"
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
