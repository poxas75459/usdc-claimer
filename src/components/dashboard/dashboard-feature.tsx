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
    "424Ge1xX4qxE9NsNoVYWQL3cryKhWVPT4sjUWYWJ3Nv91HJ3JqiujmjJBR3m1ru7be6xLga6W2cX6dHdkzLi6A6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32LP32y79jTDAcuZUkAmNTdNttWuGpFmuoD1eaELd31xQQXM9pZWF9b4S948eDNLyh36FvqGFEedX5VBA3LjSj1b",
  "key1": "D5kikBxPzHrLhxLKKUfYkw1NUVxkq3CRnYjU9azdeP5vxvaGVLxfshjjj5H8MBiaCGQ9AuFprrm49qSGyqskkD2",
  "key2": "2cD2KD2TfEFyktNU9oewjTYTSiou7VByEu44TsB2z6H88KjswLVff8ennhXSGCfrNop2NhRYmZjzEfwfAwguZok3",
  "key3": "Fm746ksf5ub7qU9PUKPUAmhBdsM4B8gzMiGrn4SMzJUmoBRDcj6yKgNcbxTA9V3bP9raSsaBXtqHFoJgPLVNhxo",
  "key4": "5dKygpbCDuvWmXETmWGRRfTi49wjHsaoLAmP86N6XerYx9ujHMtSogZGzUuWKhr4C6DEjq7pFeCcDpy2y8v4Kovx",
  "key5": "5oogrEHvDDcui4sKacA8tzqycJLTsHGrHVDaZJyQbA5abdvo17vzFUqGStLeyaU3Nx66Zd5k6UiXvnMDavF9LmNg",
  "key6": "57V2zf5yPRXXXksGFYQ8NJHGGNWoBFyBXbUKUBPo8yvGFZXhuXsEQnW912VZqi779NuDQwNwgFg6A5HQmBNrCrTc",
  "key7": "4LZ7PDdhgxhAqbWSx8x4mB5JY59LSwtQEaoBBeWhEbKyBNpTEYnducx2PYMG8MKpmRYfVEhK4Q4YmRg4YLAkQ5ov",
  "key8": "42P2ppuAVtwg4uaRd3dFmSPkMrnxbfCH4hUAf2gsoC4XXJQpppavWJRd3nAFTTT5mxNcGbCmML9zyzbbq9ayXRia",
  "key9": "4od3dAbFwEajkJ7MHn8HooWZWc3ncEys4uC9GS4Y4gfTddKtu1ss6u8Ea27Vna3smLEJv1PToAq6cnribeeQaxk3",
  "key10": "5WHVDyhjgNRTrfTJgfMGk28413GtzDixeXCMkVm6VWrNEtLMVDVfC1cr9Yh5bUJU9p7synRW5NngJ9jo24vfMv1e",
  "key11": "2oj1Zq32waZVtnM6zv4fWBbpgcvQLXjEW8XgZ7HcR2TbLVKffLN2vXAGV9H1Nx68xjTWMpF8eZQG7Uaizk9zCbwv",
  "key12": "2wpn8GJTmHGfTwpWoB2c4aHqwEEnWRBJxkDi8UCoA1RHNwpDRuBR2wGAJSKkAnotTwjJJ4FhWGxiyvHzpGuC4MMi",
  "key13": "5G3w5Lm6be825kQkhSNx9tnE5BVkCMegi7xobSjtzdV62m8fpRR5n6Ez2tJfPwf52iHpwapn5zv9csyXuJaMdvNR",
  "key14": "4Rn4bbMvm228qsAZDtNATg47y2jvsRrKQDLDa5FrGix2dbF8nkbJN8eqp4VM2eAjN323eZh8BaPy6peeod5fTDSA",
  "key15": "4w3zVqTEGdgzUiuqtwzGQTZTxQYPGGZrUqJoUUWzGXVJM4yy7fStHpe6upQkLaWGgghAiGTJ5ziciHkWBPia89vm",
  "key16": "4ZRgMzQkjSiMrfeMLpggmDxbAhPpzbKzjGj7e5TBgYFggvW1aQddYzt7GyaoJzGJLNS3d3xQFxCWeBmpEzv53U3M",
  "key17": "FsTKoDBgsGLboTwQJh18rYdsECCBwbvWWyKjKNUbV53W9rTCwuewEPzGPfnbeRWTRdUGwR7LLu3q3wFz6LGXE9V",
  "key18": "4rYJj6skxoAkfJLmdMLe1jLG1x4rW4BYLWTRggeoaucpvtSQgYS7Pp2UUxd6cCKdp3NzyUMm43384V21FtVLdmMp",
  "key19": "4jM1wCsMbb5nKipAV84zq9JTjeAfzo5yKb4uHWzAaC41MiUnhCZ4WKbZvE9EVUWhfQpmRYYsNabCjHVBQYvaqhhi",
  "key20": "5mDFjGVAn6WzMax3NSA5wrjuZwLJq775yFeZjLtK7hLNj6eWFN7VHRmbq5385nSgHwMLp6qWTxeiNRtnXMxV7n4p",
  "key21": "4j2TMCWPwNdMRZrmCKqtrBa9x5hVjujAmi5Nd3x6T2tB5uzBrr7ZUUiHnQHjcF1aYz1nuRMvdD2ebphXZgs1hSYU",
  "key22": "3Gb5CByGtu4FtwVhd4MdoQsti3VjuHYW8dYZ6P3pSuQdhPNzU6kPUHtHMiUGzHh6icCudYpaNAPkp6sJuD8iFf4n",
  "key23": "3kYfdUapEtZzCfNzCdyRmkNhYNgrX1ga9EgfvfVSZoiUiLUAgk9xVrvdyotDUuGwnn5tJFBioJ1vJzNchuRm8ifE",
  "key24": "3ySJ5vHgn1w4ytsH59PcYxgMfPyWMLMAWwavpXgNQFkaRZJPERruoKJAYS5v4GBxoRhBBE24cYPw7ks3ZaU6uYzb",
  "key25": "3zFH7adS3svKwd7WkzBcMkmWYbcyBbdC2AmsHiNtYj4wBEqZzEJTUyQHySCszev9wuhpP4AgPiAKXyc7uZ8GG1fa",
  "key26": "3Vwj3TE4RQhPDjndMzd9i63NdD36HDeX5k2M9vjEQV1Y2YWEudMU5RBAy7x95dKn1QEKiKtvMjWPhZfT3pvei4ha",
  "key27": "44zRXP4DLvA2sFJ2H3M75EAYoeZLHSmLei1UiKpaw4dqf3xeKRz1LnBgMqhwEVHYq3YRQMSNbiGX4o9DrzYe8bfz",
  "key28": "2sy9SqmqW2W9yW58zyWf6FWRYka8WoYpXB8XvwxytQhktQMoUC4BSRu6athu92qHTHSWj4vxG25gvsXnKc8Aw4Dr",
  "key29": "5Zwm4BAXEW5TcXFD42Ly4ZjzkxYiar1DVwPzdWsbHr3iEQuz2ASsrPcHVEGdtaAvqzBXqHhQFnQHQ9UrDZMDdpmp",
  "key30": "2bPxHNp38J5aMwSXBWsu8EsGy1Yj6uuVihfZcXvvotwKTeWXXULVGcLBYvQdKMPpFEsNZgWABwfAX6C8mS262Pye",
  "key31": "4JThS5LYi644X6qirFY4scFigCjoy5WhTNkjGRDRRKaZfQzo2LiqPs5Y6rPZ5ER5ZVZkoFUVe3X3Ntpw9x36CniE",
  "key32": "bTSLcST5G6hh6WatzmXRnUoaqy7iPaMLC8zgMfo4Xx3aaoZbxiNDRLeBn4naKRUUJSygPXmfhAiNZTda2PJiapX",
  "key33": "NUsa8X4FMGRmRNDjE7nq8suEpePKuAi4i1sBjhN4srphoQMHJX1bzDWzXaN1QF2CpxjPyLnrfAYJy4Li4nxTBK7",
  "key34": "xBx1saFwtJD4sGWY9i4yxQcJNKSJXvBuD2psHQpP3NuoJi9dABqqUMUNsc5AB2sZbpuUQWAM3YR3UJU2hnciqiC",
  "key35": "2Yiw3UpeNruR6J8u39XUF9K3kQTQhNAFMUKo3BcAjQSrWLCUJno9gAaM3stVvxSmrDVs51SV4msCuqxeqHwfYmbo",
  "key36": "65TUDc8hFDQq3pcbkwyvWo4yGSMjdwaRtgGTrLtCyQPgEkctoVWSKhN1N2SyQfv4QJCVFTrzVCio1mypzYNcsRLu",
  "key37": "5KFhYRX17PkDMYXzCC2G8XHPYm7XGucRc8cXxNCMSwN3eea9iiBtnfyXcNyQda6dZ6XpeVsxkTZKRZuWb9cwBF2h",
  "key38": "2TABZMwCEvUP9jPXaeowVEVrQpSYhTn3GTSt78ssyviBPyx5M73vg3fyZoz93W8NXwB87yEQx3YuBVTqsB1Mpw9b",
  "key39": "2UmVxovUSFyEQLm5B4XqUnoBAxY7tNCG7XdXkku6W8t9BQqvxC2RUnS3s66w6tTzrAWTC4BBtgkDepLdMjxL3skE",
  "key40": "JmfViVDWjW59VVktqCb2RTV8sqQpnBHm7qXbNGAHTJg7RfVDobZn53xBTufErJ5qgYqwr7cbJnWb2oFg283hrKL",
  "key41": "2WbkzhLhKbvHkx8Du6SaZy8kRwgzCsB84tW3J7w1jigekjraNStqrh392bUE4ihBnXGSqksbu1e2XXVS39edm7d7",
  "key42": "4FaMBdrMQagBQH1qZcLcarSuXzihh7ajCvrKi2xXCZBP7PfNAPmYayfoGcAAkK8dbcVXrEmzabR4zrSbrhhzagbd",
  "key43": "3zYrMYMEztrSBmJZiSYJubbeCHFLXdoSwtU4qdMW4cyBHQRgVTC2nbyi55YwYHv7GZ5MQE4iHxG1ppjTXJrJEjcm",
  "key44": "3gh9NDFFAoTzVJEKVRp8ojr9XsrmZWNicZLV9Lq8Hs2cQCL1Hy4xzGodSBqNQy6ZCUABXRqn63HFPmZjZrU9j6jT"
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
