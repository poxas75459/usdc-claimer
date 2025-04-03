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
    "Gjky9dnLQPhgYMkzhnMa4Hp9BiuGaLrfHr73r9LtLiyajFSFgXuC2L2hyRPCQFkyesjB3BgeVhduFu2XqyXCRj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9XD7UrgYmawszV6TUXZaEE94kcXtSYRU5LCDBxx4Pv3ETUuZPcL84RAF31fTs9NbnE1w9q9y7LCurZsqZKBX8L",
  "key1": "4QYTbB3WsJDGtSqDur6P2k8v7ZmDSxMy7MWqr6kVsr9aCMGhV9WQJmgKUNCDWEvukwy13JiQKG69cWMuXtTXPN9c",
  "key2": "oh6kQYGC75WwYWQ31SYFMcfpSeyeLnGNXebfhyzYuASVmygHpAX6xDaNg2jCR49GgAfcZG8qRACgNrh8PhVYdkw",
  "key3": "3Y8dwUVLk2EhbJ3rNFquzdBUivAZxYZ5r8nfhz51M2ZVYRYpjJeran5xSPAu3j1xP9vMkRaPZqMStyMsVt65iika",
  "key4": "4ps72xgQ2A7kiH2bH7sWuXmCijJcn5DKuiMx1TVdLtsPrQTJgbfekfofJTj9TqW3dVRZKG28uc5LGU4tQRrEsiqs",
  "key5": "5ZQPyadGwDCdj8UyEqJrsLApvhdHnoGNFXSwwC7iKzCFq45JbKDMRTyhftHMt5FgoVEY7FXxZ5Dxch1tjyNeDtRy",
  "key6": "HfRz56tRCa1KmNuDo5WD9bTma9mXmEw15Ha6u411itABhjXLENC3ymR9AcPg4KcYLcNLGSWAgnt4BaX5b15Acj3",
  "key7": "2CaR7qyRxTWHtShv9seKbELS45QQJqVmEUsQV8YCEZTYyP8YqWhMgAuqDz3MGTJo9SmhMESBL5xWVQhgog4kv5p3",
  "key8": "3EL6H2axfE9mXmhqA19vCpRQwf8WewqaZNBA2MXVCxXhRXKrUZQcMj3SRnGxvWS6M6cy7awVfsUg1Lqd1VgPPMZD",
  "key9": "ninLgY9APh98cCXN8B2hHwXJBhVnYWaids3HgfhHXRjy2xY1G8hyVsrAhEh1pNBaBhKPDMEtQAhkJJsNZkUtfxD",
  "key10": "2KBZdgT3dWs79Zedzg3jMv3qc3pfEEudP8bQkxFPTMkDZdputbN942qwGAhf9nGgRj5arPzVz4NPUpo1rLicDBRg",
  "key11": "t13zUJvaeDfi6nuzsrFfAa6AXEVvGv1KaZH5BDs7UNfXaQvWEs5Kj4anviUhUnowDEQSbWnKRk57pytvfTMVRTv",
  "key12": "wTAtCHcXt8hB43MTQbmU8P9yaMktAaxoqSrCyTLxHkGB4qqG2fPNXHFsKdvyyg8pAfNH8vzUnw73jvB7ujxGrPg",
  "key13": "4EqimoKG9RrmELksQ5nkAdqD4ZsR2th6ehA64Ejun9zWtqJMzeJqzfVrfX5W17TjTrYGFkMuzTnZ5HbzfxXBTa1P",
  "key14": "53D1bdYSouttdh2VWLwta8mmuLe3Cxn5WzJBqH2qjjdVnQ1Zc9cfHfJJk6u5koh77ooqLPdE6bM2YU79wgupUVh1",
  "key15": "4gFjZHr2AgoSNbVYEY1kwAGaLAzbGEjoapjnykZrpfQwHNnGyZsL8CR5nqNtd746DFdsWiVQ83c9J3dpGqq1HzHm",
  "key16": "5MN6HCAq5KJvwCL2ouxj6pvhXoi3XKU4RHMEjjbvZGH29n44WtMVfGbiuMC44bd8vj1L4QPjZLrXHpcznTQDWFAo",
  "key17": "3H8T9AJo8gkrs6BYEGALq7xs2ricKWEDdaZamvXbdAmZGYdi18TjowUFqGxCWewQXAfgPp9BSVh1wJUcdVxLwKjB",
  "key18": "4CNot5f2VDC97VzkgKEW33TuDLiPB4iGKYosQfCxiMuXGTXdeNWvSAZGFkVfGAM9vJ3vgPewuh76vmhbeCVxMZND",
  "key19": "5JxriPXPZFRSeZSkMZH2hTixDL9xFu5HmoA3bP5oTJ82QmWb3CSuiCVaBWr1Em51J5s241CxA37nZd81k2aV5GRW",
  "key20": "4b1KLjAp31TYgLEfPJya2D6Wr4sSMsnMhv22gVHomQ1m7RdofBRQ7KxoopYAiUY653gBHvYLn8qTNCrA4v8fS2Vf",
  "key21": "3d2rWtwS7w14ouRisUwqoVb8h9foVUzfYd4Dz341ETJdbgqC6A8mCehtBU4zL5Zkm5wpxgN9TJTooLqyYxN1TkqQ",
  "key22": "5ye5E16Y271oxwKTr4CVc9GR6Fq4zsXGXrddHwkjmDPbDrbwuwU1WeKhXZkfznH4fjQFmxgYTcpSHxh5wiKs2Bpr",
  "key23": "vmPZFsi9uDjfNLM4iBhocXbnJqMZEo2BAv79MHaDuNNgi8f6AkwxNx3t5xErvFEAjE5aY332k9oUJvnDe32vm41",
  "key24": "2bruwUQsAFkaQPDmDd9ZHZ8kEreZ88rxGmDMpp6R6LAe2iPmsKX4ZkbcNniKXWjNaraaE3dx5k941ghG2boqSqy2",
  "key25": "57KFZmWy1PQN4w4CXL9tpXTA6UwDjU7GuwY13pXhg9gtFrLWgKcjDnhdXL1dkFeC1CCJaaCGj2C6tipTo6Wt8DLN",
  "key26": "4niMGM7xoa6ZaxRQQ5DgAYaj8wcX8bvxxwFc8FhsygtSujfacYtvPmjgqpSyxE9obXxP2i41Td2gCPyS9zXDPRpu",
  "key27": "5FASEu9mLwzBTW2VhLf4pAYdWxyAm6D6MLheK1ZdzMLgNubZKkFzf9E8ih9kn8RWh8MPds55kQbnfKnZDWhVdgwq",
  "key28": "5BGjQx8E7TAAn4dt1QHK7ehfSPNbWK7WVhsZEEcRpRMMUaSYh2zyQGgxB5fJ6acNkafkFYy3RE9kYKgm6EfB9jk4",
  "key29": "3cNdqBJExW3TEBNmPaQrGT8CJch6hFfFe8VoLWCxCRYVwqCuejDpb8dbtLeDKMMPnpqrv271DNSBr4NkF3NEfSU5",
  "key30": "CM9qa8j48kjaQzTVaEcXTPK4EeVRegUJeCXwbn98TMfDXtj11LwjrNjWMRimHtTdmgVHCWCueLp7d6TNzHKHCzf",
  "key31": "4XeiW2mfh9TQBr8r3uTHPLzZ4Npze7Ld286zJHMfCcV57LGP5uatiLzWS3FcYcT3RnbsrUW7L6VKMWxPboAuzMF2",
  "key32": "JLmi7qVWNjdnEX7niXbvi5nWqxziMHt7fmKWHF6ofp2fEbjKtHn7Zc6EodPF39UTChCtuc9wDQj9sJ1nhJRBkXS",
  "key33": "5uaFCMJp7kmMae5KEDxzZJY5Nbv449r3QkH5DXqEpzYve7HZhkmXcZtEXFZxoDDnUEaCzs3ia7hhYK2ZTa1Rkpe",
  "key34": "3PTKGY6JU88wMyiy8Mu2XKzZJoQeM5JzSgESPLRt9xZiwmJzXKZ2vhWH9bmj1kVvEajA63cWaz7TbRshb8LPbPq8",
  "key35": "58NL6HUac2DgSWdgsWUtnaqB3hMg2oGTxeFsv75GQV6TTsFmoc3sgEGq3s1PbvuPKFS8X98p1rmHJXWBr6MR6hsL"
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
