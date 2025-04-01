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
    "3rqvSHb15xMGZvvQH33FEt9Fhm9dTxjsHSA5QU6MTiZ1y3oTxkRF5XXmEeiCXBScXZp9v5wV3rwTBhJMWwqNym8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GbH3qRRvtFMCVfeBGs9W46srzrPv9cVSkhDajwgHF8uNqXsQK2VH2n63dXuoNUNVbByHFENavWk8EDUTaDBVWic",
  "key1": "2Hao5LvLay91N9tZMU6WgTL4xS24Ntmp8ZaMsCnZqCc5Veozwubgqan5eafKJXujmZmmSjkm3R1xd6Bc9DJ8nDVz",
  "key2": "2MhJdYw7HBt5BSbbmBZ7J4bmaHECGVJf9VfxK7zrxQpZRjBUeP7vFN1wkGYAJohX3EJLaSWCY596mnBTJb7eaZ1o",
  "key3": "4UFrJrpjoCe6cdwW3Lm21JHXuYkHbFGoQ1DX9PZDQs4RqhEbTDnvpDBpwgetVjfN2LBgPJA4vutabfE1RWGLcFXX",
  "key4": "4pgZtyLt4pVrLf38okRkbaUjVmNTWFxwv69qLNdhA7dcPBMoWcY1z3QTNi23JAUMWtLSVTVTuuRKMsyE4H4gdnQy",
  "key5": "5tUugLPLGb74EaoZWZDt7zMUH7D8XWjbyNUhQhgDvRr5HujhB4TZybmAeh4H2D1ZLvBH3g1EVKJMtfczmp71h8n1",
  "key6": "4gXfXS3CHF1f9u9GrGGyqTtPcNDRDyijBKWyGmro1BJwVkYUcUnhkj9gAAtH5DmrxmaoiRCgW8iU1Kyb11bwKs5K",
  "key7": "521nJNoLB4uPUo5NAj5zjMpNFoPMqd8ZhDNjkrNCQMzWrGbNKW5Uku55qaQrxUT7d4FxTc4qRRVQXYsg56nAnjMD",
  "key8": "63yfd27mLj1yTeAPsVxMiQYsGPTL2JN8frWa8ammvEm8Afiui1SmcEMAEhKK4mKMmGUyeXA9i8tWResdV5ArwBDK",
  "key9": "5crv1xLbw42Rg7oGh86rfMDcmKbCV6hYDcWABnSDuyG88AEzEF184k5p6vXcJqo9rNaefCksHMtBvtvSdk3UR4N5",
  "key10": "62Vn1n2jRuNTMGL84tqxwewyHU26bZRn7PtTxxhN8K9x8AY14bPPatF6Ys8DAyD32zJYgZ77RvESizFz5RPKMnar",
  "key11": "49Ye1SyCYZgRGTyzAzSVBtGFHpKFuTMTbGvARtAC7tehPH53DfLNMZo2eku9RgLAJmWoDt9vdFhwt91ohiL4Z51s",
  "key12": "5RQTPXn2spnvvRUK3JRtPeh9CVTC9qiV6AeZCz2QT6mWuaC54KxtNsyHd7Hv9es1kw73D6tRa3R8nspEavmYAEpY",
  "key13": "3CK1uFZqxe7zLBVsqKr9NGfMN9wAc7MD5F1Gyb1F7Luc47NowtxRjqdWzxKGmXYijoLwM5MLfSSPgAPP7xFCKeU6",
  "key14": "erKDJ28VDZ35FYuzSyqJNU4LvQLBg96A8RnsoFdhiqtW7sSHjCAWRVcJCo7J2uZeT8nfut8rsDnBo8oFk6P52DZ",
  "key15": "26v3JHRcK93jFaKzgQDujCaLkSZShprhFF9DFPVW4tg3QaDqS4N5jsWqW6CFFgJkPvgUuUMeoR9u6eToDvQUJi5W",
  "key16": "5FLCEiWkhW9DzkDnJY3LCwYpXmkQ6G4NRpAiDi6zVhEpgfXFUFWqAbw7oKm2g8YFrLK6U5fY9NQNv5sAmSGRpzvc",
  "key17": "2GAc5NwHmfetJfamMKwJLvg7DjgEZqWNLhpWJ1KdsPdYbdtZimbQYC4WGW3TbXpuESfxkN9mBcyM7T1K6J2XRMZP",
  "key18": "pLTcQNokEhpFmANntTzsjC4c12NmhFdskVbMkvqJCrgv9EFFmXzUdznvdakAvhjzdJ8BoK1LqF5LaRRtDzVR6F8",
  "key19": "HUeHxhuZijAgXdn34LvG4mw3aQShTunZFFssh11njsu9LkwewKSdfXZemLFMfoevYwAGR1CH4cJryoV5SHj1emU",
  "key20": "3gvsKTnmP7TSA1XPDLXmcHu8ovfN5d7pzZgpArce7KBPgUiYLTpUA6Scd25LrbzYpfqBwp4vduEPwyda7aQdydQH",
  "key21": "4N1898UgQSBKnSVqiGjjyVyzWrgTMnRuYnKfzyeXFFkVZqhgpvGCfNJqhqSmEmPDnegN3TzSsv3z8w4HbtoXW1HR",
  "key22": "3cdVXdgXyV4KaJy6mRDAMEmu7qdLeXpa2d2kVQS4unEj1QG4R8NYHKYcRjuAsXFjVC81VLoD7NQ25DApEC7Hm6LD",
  "key23": "2HzVmJ7mEKgRQ7kAgfeDMBE8Kty1foi68dXXfcEecr64RSSSNwhyjknF2n59axoUHrWM6Pf7EbQhKgUKdMBqoEwk",
  "key24": "2pwZxPbqFJttmvYDs3pDunLevxB1aq9JniTdRRaD4GxtcLkJW5c9N8nKPr68jiiKNSz3nztiepNkRt5iMjb8mBGV",
  "key25": "Zr7zmcJUDu9tA3W1YbCKgcX2z8zavuFcjuQxD46Q2CXZB6xZCJM3tohasRVgQAW9rt1zC6CwmPn37MANzRitmmc",
  "key26": "5ffM1KJukh75fvQPZm3topdwjb4BhxeXB8VFXmTVXk2kkoj2Tg3XBsufkqS71XSE1Wdz3TPLaXXjdu87BHGjbgis",
  "key27": "5AqbsGTUJPKo7KkhAqDgAVXbUnyvJDxee9ZsRqYcYVReHwAW3wCn4u3jUTBkgJ2o77T781VQY91Kn2aEX2LKkixQ",
  "key28": "34Zf6weLDM9fsqY8r9a7pbaxZrtnXq5ZCau5Lo9LX3p2WKcaTunrAGZ3pgwaqtgeXNW75AwH4Pf9TBMjvtE52kAe",
  "key29": "5P6ouVEwfYChEcLiTZ8j8mqc63iZeSV2zQtZWW5u6VNhSoRwkV99FRaD4GxBBPN8FBScisDgu5KrsKCnqoocUz5d",
  "key30": "3V8Ut3SkbMqdeoBs9LyJCRG6GCwNpwRExFGz5ckHdgD8vEjhyk3A8bcYLPRc1Dt7DJ11pNMwSXKBdrbCQfisq6qg",
  "key31": "2aMJueWQf4KUZ1fRRqgsCEcsdzJ4DPuKzXq6aeSkkHB1e2vNhbFAqyUFYoboZq4YpvCD7fm1AYjLu5zsCU5F3Sxk",
  "key32": "3MXvCujYwprHePjCZebgg2ZLhNofXLMuH3FeV2WCEV3a5HLWv7hc6KkvX4MeS2SycSdw6RV4QHtYbhb81eucu8Fz",
  "key33": "cpNrYKyguSj9NRUrGcsYPkAVpsQBWt3ZaiF45YuND92qwCMo3q7Buc69662XZWcRQoAt8tcMivNPS7ZXCGkSeJr",
  "key34": "26ZRqb9KNbdWvTh81MbnTNngHvZJXxz5iTkJZKjajk6bs7oCUAuxPPTJpsecNkWrRmtHmFV3kqPy75554ZC7YsJH",
  "key35": "3VRsRPAQrnEVErRPahVF67QDdFLShgreKdwm8jp2uwZ2EJodw4mkFK11EdCcWwfiKXhpWdc98ZF47ttg21bb8yb1",
  "key36": "3K29xjcz6RgcdNnicKPzcm7x4zJDv92DYo8Mnu2ejbrc4n69s52HJXdaWCgTYpPbemWWW3hCxhnZjGadJz8TvNW",
  "key37": "4YxZETBJ6Cc4dKxKR7PrwDui4uipH3n6zmgw6LX4uU6gXW4C2Ckg5wM3gxY6oMRk9p7sUScU74xUGxWvpC8P5T4W",
  "key38": "5wxPqRkNktMG5efStbiSVTVrLrm1VebXyXh1umSEDgjbQxzh7NcYEkj4ymKSbzTEqqxJDP2HqkSTuPTZYqXKZsD7"
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
