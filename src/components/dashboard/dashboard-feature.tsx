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
    "cY7ym8qgSJE4jf8QW92HCXkee8GkyPnZCJdcLyF9DMQ7TD8Z2XJmfbdR3Vz9yvgT72J7iHranXXfoXeCVdrjLLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kFyErArLHByEzaGKqaXkiLy9mwoVQz16vAx2FvcAfaR4oevovXChiHPj2tEyxgNrNFzBYvEqGEJeffCoMFGFa8C",
  "key1": "2ETkyRTvvkzvHVC8bSJNVSGq2JM1T2QVDrQrD6jPCwJQ7mJqZHk5yFDRinbAwTndztPsbR34nA55nTwyYSv8yoKa",
  "key2": "5CvJCqPjA8nz9qNTcEdpLLoa3NghhdMG15BV85QRZ9oCwL3ao4aGi85CLCdT6r6kkTXYq5Rqptq9m4SHMMzUY8pT",
  "key3": "3cwQaQ5q5XfYctNFNWXysnERKy5k6Y9Lnf1sfEoykiHAXfw5AW1YvigHM4H2wAb5xsJU9ZhLTfkenATvuqTMdqWB",
  "key4": "4VnSFaq5SC1HQENucDqMr9JUFDw9uQaZaBY953mz4FJw4KNgabqAvPWcyzmK9qRrMy3i2LEvAcLBbGLJLqPsXupW",
  "key5": "616p9xQ1toCFBEkNn8YmkUfm1vtu9wrT48FpU2EF29QyucAJo7RmuYDqa7xsZLkBbA1PaYGhREGNKBAbrwMpmre2",
  "key6": "4kTX4ByVE5M2a9fs7YSo4uqiXWyBnziyMPj8WVGhjAu9j6saHia96rRzSeQ4oFJ3RLexBWZ9fwmZdZrdPtt9KdMJ",
  "key7": "2fTbbAjBYZob96nDBsPTo5jXq92MiVYsbiSMkdNupxo2x29KVFsFinpuxzFWTCJtTsCEjFvZiDKTLYYCzbKKRJxB",
  "key8": "2Hpe92omBfq5jt2RyYd1ZUpYBrgmEWXby9fyVXnCh3drjyBc6PtwTF4EsNL6q5SgSSrxRV6VthrWisE7G1mF532N",
  "key9": "3dNA8ZWhw1BPULz5gcxFp6xr9oezJVF3mZfQh7mjKj5Hx5712jqmPxUgUr9eEk9f6evJtNMrjjH7S46BAdaVqzcv",
  "key10": "4MJwd16nAK4YG8QVok26LLzAzX1jUk8zfQ3fp62KLLqkjQyFZnM7GGy4x6A1JdYFgAbrfaG59YQcDU7pokhSSv7V",
  "key11": "3GXCjgD6Gpu8uFmd76tbNEc8PQquzkhmz4TKVVgBswernVCJKXNLwVnvVZgfHr175tZZ5cC4qCiejKUfb1UqrinT",
  "key12": "4Qa8jgnw6FDbyFEd1qF6bEUBEGccqyzhDof7DnT4bCZtPTWMbx222ud7kykEiMWKEsp8Qdp8mia8nXCVxe4Zj9uV",
  "key13": "45932Ef1XLhJuF2JrHA5kYbqaKYBLW2cQe2A2xEvJZZZ377aoCvXVg29vECmnkQKPMvfMgvGXE17vfWBE2DW1pTz",
  "key14": "4neMe1tAZMy3HumSFUNH4rnCzAZpvuZ7qbTC6c226GBMjEztvmkDy3GqVALRcFzvre25UC9o3eKjoqAqkykZoddx",
  "key15": "537uQt2XsWUtDuXbGmRMJPBNoEAH7V3z7iTZZkyk2XCkrvoJk1Estnt3X6APMExEvfSqMwzX5ipTjb7aM2RrwDnG",
  "key16": "GH7mN9cZYJKYgWMtFHgnC8mXUZa53iacn8mw5gYH7YDjBhJjQ5YUN2yxYffvXM8UVEdpku6NVeJcHiJjrHZiS1A",
  "key17": "2tGPEyYUiPpDCo5zdHgEtftBeXVuRLxVxfzmmqPLGEJ4CPc9fvAAq9JaLvfpPwq6gWfWBVdjii2Ha7ZghV96Aedi",
  "key18": "3R9yoay5XWwyGHfDzFuE1frVey8V3zB26JWbmnMRgzga68S74sTvPH5yEMPv7ds3oA9tqrpRZHbHcGCzFLSUdsuc",
  "key19": "5tZ1NK9Q9FtdFveUP9KB6YjyShire2dAFCGvetLmDexX6RkdQEwwR3EAwxEjiFjsvhYNCKYdGvuU8V1ti32gP8RL",
  "key20": "3KD8xxnBZy4bP78MMHoDUVL5g44CC6AfudCz7eDNSVoSop4tpxeXC7mW9EwWn5ddmHUEzXGULGryt4KEBRg48CfN",
  "key21": "53Q46iM8XZTxeZMz1Rw7hrbKCJDUQ3xcNfkdqDxd4kfsRc2Q7jeRyymHNkPFPhYtAqCopR4oPjrgg4RjXvt4KHQQ",
  "key22": "62ZkAx3JYF9qCtUk54kCD3WZYssza9KPvtXaNUynPJn1epgzDA7BgTrzFntgXL7Xwouck4UM8nTbmn6PuXmCnT2q",
  "key23": "3QbR9TXXrqPnJhWmyHRkhimCzMsNeLW7H2PVyorgJ6hoUywHrpSGNznNeTi7QYWxCZWErqtN15qLvR9KgBNwDkhJ",
  "key24": "3xs6Y3BaUmV2VkuvaWcpvdEyQPAss9GDtMKFnQt1a1oR3tgc3iFVMHYMe9bQhUP9hPJc7w1U4ve8gQ9LTRp5iC9U",
  "key25": "2Zd1AfJKKZjZcUTiuooKHLQaV8ap14H1PQwZdtiPF7WjZxvYtvVNjAH6KRQj9vnJemRLF6jQmHS6X2Z8GWaX8kgU",
  "key26": "4vrSizayFoZRX34yGcJjiLeAkZPJPuRLJ584vvgZfZrtR3w2JBMFfJmhXAhZcH52nTmkBB4QJbEqzV1R312gkG48",
  "key27": "tpgfKELrMXWEDEGnEFosSWwknMNB3k6FLqLQR9oFXNaovAQpoGpVSeBzinJBgXPgYzFgtvpLeLhmc6XAxEJK46q",
  "key28": "4QRTvxwmdfgyLMTpuQ4gzraJe4PAUMydVn2NFXwd69HK7gNNHThX5VMFsMQgr9wPxC2TKRnJmqahj5vxfq1JGeHN",
  "key29": "3Cvh6q2TJyRPL5a47V7GFA5gVPbPHjj4JzK3CRftCSsvLx94DKsTb11RjfUhdpSq2ksYQRx7mpKfpRrL7bNMBVw7",
  "key30": "5JP7WfddWrKoHyFtf91TPjtA3euhumfEKpRNq16KDHis3gEaucedSitU5gSTccBh2dgQPJEMLtVD8nAH2QqTuLRF",
  "key31": "2W8WA6aZbgxymqmXUhyTUbzzW75h4YjZVCsU9kAxdMayUkv4oZHL7mYQK7Li8DMWBTD7xuhqw3z5c8ZBKNHE6zxk",
  "key32": "5AcwpPcH4zqfeh44fbCyxCHjvUp5fCdsvSdgHfgWLoZ5GZ7WLVQ3nH8vPDMev1LU6y8NjchFxjg6Wdd6aoM4MiFg",
  "key33": "vgbj6P5mFosBK62HKVxsWoJpZYEExjp94xHDuattF6sPvMHWhsjAfq1eBqCSdXtJbCdc6S7ur4qS6eJJYXDssgz",
  "key34": "3nsjFFX97bDRtngfuKpof9opD4MXa5AnTWyUZMKpZ9A7eYnHpucgVH5VcUrvG9kcyMdcKfQr9TrV9cmDHa9y9Tj7",
  "key35": "3kGf2uPrkdW44wLqcZDRXXiFFXwW2ncPyFPEDQt9ppnMR1sqwTZhntDwyyHqZNfZrv81HA1TLDeusLGRwP5wT6Ry",
  "key36": "37BEyvWbw8RzJh7m1kevv17THSwx8GCW9sgorRdDciUzT6Zb4FMzgVMSkKgqVKU5GDkAiivvnJxMUSFQxARLDDWr",
  "key37": "KNh9yHLs5oQjUmmW2N421W5wTdPeapJxuXYHrgXiCutNjEv3fVyXsXyTKHxqqhwjxjd9EjeCw4chnrAUNvdG4mU",
  "key38": "47BtstvCNVnh8qRAQ7tPjWj24tiCcV9kf5t4999ngTpmVHQCYA3KhxuirTDa2n3Y8wvocVEqYnbuMbtyZNDqvkvc",
  "key39": "3EyoBtMpwNaFi5BNFbcPe2Ybcexf9dXVqDR7UVRmCKJBSZHpAjBJq8Rgd4SACkid6TWgZz9QAacyqCsUq1X8p2qa"
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
