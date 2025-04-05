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
    "CxVo4YiuCeoDJK1eEUwuip82etnk4qdqJXTuUaEvuvUjCoNqG2Wk3Yf436bNWNymNiTLLcMrtQWAUXDfZBERtMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpDmS8V5rqvQSrkL3Vv4hSxmXeZL69cTGfq8ibzYHqgmWW8GVSWSYCDULJc1yYjvL4BirC8vSWHmSxL1p8fnLBG",
  "key1": "33ZBnf2Qus5rzYi8ifdf7sR6eaiiL1sciRqVJ6ddtRLTAT4Vip2T6iM725ovbPq1ELR5N7TbmG9UsXTaSitZHP4T",
  "key2": "7J3cNScWuq2j8AtCBdCNcH9r1fAf96JttXGQB7cZLC9QPoFRTCV1WaFPeRHcsatYhVM7NtdUV86VroV7q5kYSP7",
  "key3": "3rRKJrDadawqVPdiCt12jEqdexuS5aGtB7Uzai6XvYuM5it55WjrSBV9Ni2L4GTfmxZYZeMTF3aQWbXTqf9r4N9f",
  "key4": "3yZ9KACGR4sfucMrHZQKo1m9k4WyRqEjYi6j2TpYCn2Q7XQ4cx5ZuMDs9XuHW1LTgL4UfmHBQNttnHWECHsiWkRy",
  "key5": "TqAc1ZmzNki1HqdPmtY7FFitSUs1oPVHvmpNLZd8ANzYfmn9Ep72k22yziuaEPsjoUsoaqnzbnzW23p364yNdbV",
  "key6": "3cdkZSfTtMd9os8hA7x1pGwwa2XuEcWT6H5FC4vnctd1ZpESKDkYziuRvhrP7AfrhmkPDnaRQZrL5rhKDrnCJhoV",
  "key7": "42MhTGvMNbHpfrPxMZF4VFUQie98Ym241yqEVW42BpY5XUCu3Lk9Qh5M1eA8dHgHSwHrDMzpCPMwb9EJxutPRkrg",
  "key8": "2YLDtf9KLbAtczu1b9NXhBqY7z4A95Yjt2x2VdqssXcECKZsPMRUrjJg6bSNm3mCjtTGHrJhrTqwED5dXNb9Yo1Q",
  "key9": "2xfF5cMRqLQS4MQDeLoBoTi3TktkiSSDCaWFyCj221vum2cVH5bRtagZ23rGjC1jWG7uUbq1qsNDDakHzNMZqMr2",
  "key10": "5J4QSuhoRtFPsSpxk68heAGVEWMQgpwpXDwCcZoW9kxsVcnTbnqyTMtqMxGf91o8YnKjLRg9vf5KmKRg4k1DkdoC",
  "key11": "458rmKhcvQQgRhm6Uh7WwyaKgWcpPb6fbyuwSoZQMzy8MKe9ic5Qbyjw7EzP5rv1hd8io3RfFSbzRYbkyx35546j",
  "key12": "34KfwArYuoYUMVAqQwA9qDbxjFT4THxvbqJhq3P3zn52FQs8TobjKqhoYMk56MeAev671m1i1gg9CPfV7DG1aFMD",
  "key13": "cBXr2JeVEywvNLxuLcpRPAcosC749gWJuLRZH8DUkhqVhfjgXXCaUQUiFiUCf8ueDWDEesCPcnsEenpo5rt98ar",
  "key14": "2fK1q2XPSBHpdUAZefLZPDycnQDBTVjkXt6xr16hYraQ5ve6TWZHfmFWMFDnZuAMx5R8Ut9TsRorT2Qp9MCdCLYW",
  "key15": "5d7hR4HqJZFKTsMMnkKKU1rEMiwjhiXp2CHMKUSUN4VcTNH3EcUNBXJhhmSnXkSaAN9CvBmxhQCnNpkz3WCCnDo4",
  "key16": "nWLUdyKvB4jFJzAcEvtHqxdKVBfeCb8Auor8X4LPqoE3ZjeVm3mYK1YXKDTsGyLt7iuUpYCyM6svC1iJYp3dbwK",
  "key17": "2RDJAea8t9Jpw6hA1FFnUXRxP7BVDhFqynL1vTUPuzebWHuHK7m1k8XHm1CHD8MRU2fUFbnZRRhjBaFgY9rhcddB",
  "key18": "25n1yLckw13EucdWhG6Lgyz9A1SPwpc8GX31Dip2cr948LsM4VRoRZLrsEJ3JGgVvdiEP317KLDRwF4Ukmf2gLkr",
  "key19": "4shumMSt2242b82JeV62ixyygKvYJugnRrbYbuQuf6bv289uiHT63g6GN9nX1oSQHqqRC5hfBArLuj1ZXoPyUmop",
  "key20": "LqGsmESe79bWtFifLm5faTq7Bx2ccCyatU1KkfVBX8XtcFYu9sG6XWkKCnhtYJvzbUNt7uZ8nHuCqQ7Ag9iRjvi",
  "key21": "ZYEmcVLkFFvCsGjc6wmjgQR4Huqrhaor9gNcn1H9ZPqxCTp6p3ruFqub9bxdiDUxJAe1xTnTj2aiJmVjZyZ5K6h",
  "key22": "5QX4wp8Q9aK9NnN43b5o39JuvoMcxDXy1qN6AZp53tNZo3LNs2SX5iPDPGAHqu5wpCMPV2PiGeGhGj9bDvUJ6HEN",
  "key23": "4nHpTWpjdnH5YTJAUnxgARgMdk6dWZE64Csm2Bhia6DpYD7F8NzrMjbYJoDgCoGpPvv3Q49oQnwtRMoBJLwn3rUX",
  "key24": "4eZVhbDYQUcgTa3xbot2bnXc3SsUxnU9Rtf8i3qfVWSRdctBz6qd2pBQdB1Fno6BzAQqKYZgg68oAfXGTw8AbtXi",
  "key25": "4sNgaGE6syjb8JAz49UTmkGaw6in9D6xi4uE5s6yTNuVXLHyrRNot2UCpsdPrnKEgMUWctVQCg5jGgLQLpnvB9jp",
  "key26": "3mzsFC3eHnZgE2ebZKdbtyhzE1vGcqjkXdcmAfEfxwGygrktmwCZDL6Y6EzSW25QUbYzHmFQFpsX4zVCborTPjD2",
  "key27": "2EQ7Gi3zgt2yx4rVvRPAAmqBJxLNsvjg6qABnWVjJ27Z52PJERfe7t8KmcB9DFBwF2cASqN3Nbw25e7xxnwjEnwt",
  "key28": "4kX8Z3FV8MU8X9aovuYBAo8zB5tUdJ9ry2oHRN5uHf4DVUYjTVme1NhBcH7pr6VTadBsj74SUFyTjWpZcjivjzwx",
  "key29": "4kT2WjFrXX66vRWfBrRuNnjD4JKSgGj5hMhoXmQN6PsisSoS7j1CwPPtfyLG2639mEB6XEtwCqctsdjAy6aWDkAX",
  "key30": "2EX1g9yjJvipvYGC2Fp98kRyeVPci357xVjaWTDRDH2TgYeEWqU2JJkNsHRHTkmnbxJpkciex4TMUwuz8UgckqKV",
  "key31": "37mLNTxnFN3zMEwuemZR7ENvauLt7bVZCfu118D8mGkDMqPsnam5kUniixc9T2v4hJV7iMvHyvHNaafBuJYXmk6F",
  "key32": "5eFyYkecTGzTGDfDpqwEJrZHWf3wBiDb2PoFzSaLnfQB1gUNtm6AXrk9yWfJ4NhNDGF6JQisZEsVNiVnkZtJe16F",
  "key33": "5HuzRDeLJP9bV6XCQzYdRLCjaGMhXZ1nGK4VMQb8FFuRqf4XGhgTGeWFHXsTdxfRD1Ya5HLLY3yXZuG5x5suCybK",
  "key34": "2N9koaM9sbGUP8jsNqXUZU9GkhpHVQTQnxZScrG9ZfEpum9iysUEfsNAy8yg5CniSWvmMmqpPcdHNF5QQnhtGxNK",
  "key35": "V2ND4nzDLpUK6WdAG2MzpCBtzTsP6hn33mf6nXeX3xC46nHgPH8A6ArXRVuemhbUgwSA97vjQEMxjcGam3jdNPf",
  "key36": "4QbGzzJJCZk75zbap6f5ekK2NpycbSoJd8ArpVh5udESgVF7SZ237ydRqDsaQfWQocsekTzqwB8FZsXm6HP4beK2",
  "key37": "hdaKQBjkQjCFf6qALk9w2d9KPXKkDzXg8bye8Mrm4K2EaUkiJhbLWnVWrc2wjYDZ7B3EfvtCKAaavzS2cgTqsXq"
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
