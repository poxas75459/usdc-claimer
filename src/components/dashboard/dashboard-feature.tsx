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
    "2nRWakHodWxWyfKqDxKFvcCGB9svmMwztXvpVjGAGgodgS6Cz2j9bE9duMrhpxVA6y9sWu3cjNo5Egm9QAE3BpHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHC5mrcMDPFcbNkusSktpqfMP4aWi5rB5PsArkiYHnbjqRwRZgPSEVKmd1a5wg47ENBg9p28q26RGQCcDePfEQG",
  "key1": "5ei9xpGe7Wr6oQp75ZAquvTob3YtqEShQ26TmicrronEaeYU1h3Vo386v8L1mpTE7qm1rN9ymwzYis5Hcasa7RfX",
  "key2": "bwonVsL84qahJ5BPdC2oW5AiJ3X3GD2d6wHzKc5TZJmVWxWKKmEWoqCeAn4eRE31oVg2XKGPcagM9Tdo61LhiaH",
  "key3": "3YbmJbsVzSGHqhTS2mfsKmrwxP82Fa9Y5FssDFKRgVvENGL6viQ2tWwrrYK1T6kvRoXV7SqU8ufqFrDgJwRu2WBR",
  "key4": "55w8wrGCdjWEbNcu8mQsXibWTW3Nvi1wJ6ym5WjdEMhTrFtHwkaWMoC1JhtGG3YQQ1ZgEBs3ncfNgiNcEoJEoW3h",
  "key5": "2RqbLuee7Aotn1x9gP9XemWUVg7NWbSxTitX6EegicBp4t5F7CitAXv6tGwtLdUCACZZdrRt5xQpHM3tWYV46ZEz",
  "key6": "m3DeMdodkey1C8i8aM6hRSA1jp1gMioWDYW7kxE1VhrhgDrKvQ4akFeDxziXRmuHS4jZJkmgjVrvWoJibrbfRsJ",
  "key7": "4N5Ttk4pskiZuypLLF7M7VPTjHS9RyBmiwEYFYm6VNPLHduWFkeGqfrXz23xYFWZDTHMAXzdHUBUCgEwCJmvgkc",
  "key8": "REHBufq98vvVrz5F2DUAcQwC5QEASJBH6wm4g6Q9Gftye5qk1Dn5yqejP4VxYL7Ua1DiepHjhQNHtJWtdX8exSA",
  "key9": "uaKLcUCfyTqEbHp89EUYuQDxwCCPwLFnjxMUXrva6TK37WhULAYPvBvdzequzxFy1coNYXqPAhjn5wt4Ktmijri",
  "key10": "2WdhUwbLnqA7BjQC8pCJgb4GVugTRLEJkqdTJHgEWYLRZFEM1hrk6ZuvMxtmaitjsVBfNdmBi8F8og3qgnaD25VQ",
  "key11": "43Ye1aR6Zq1fdPX7pR52bkDm2AKkrG9dy9yb7tL3TrmJWtYJ8R1n6NKPTP3wG5WUauCtd7Ldt4Wf3uybcpTYYARN",
  "key12": "2fUDQApH9F4Yxp692USJkpXZKD2YsMny5SHzR9R2jo1PuZQvDQoLAnh5y7mzurV2N6ykjDytT7yHDsQGLwv5RF2L",
  "key13": "2Ep2BQBQPLQDAQBxL4UE2hpjNHriiQRNKiK3rDbPAcxdmW11gAxYR5HoLLHQPEdq9zdQmpKZuhVhqFAutznnB4EH",
  "key14": "4EhovWy4edFucyER12kYdkT5zXmGdb7KhEXd1xL2pGG8gf5iGY1uPciBJHnAGijYJgxgNJ6A2ENgv695DJaWgbfm",
  "key15": "2ncVAzEHKMAdNSroiaj2fS9TDbBkpBZbWCHqZxVHvKosoch2rrEdMqWB8HTQnhRrfHzhpuiohByUXyhMnzsTdACt",
  "key16": "3urJZLq5N8ogMDUfTRDRrSRbnjdexyiDPeM5nUdjUmwVkgyJ1AFRgQKk9gK9Jt4psHnLdCdDNWferwzxW1yVAzMi",
  "key17": "5vufk7RtEmpyAT83aZZVavU3oxpgjFPBqA5hBFgh8nt5paiSU7wLLcAYcfnwUASH9vVbMBkXAzFLEdaWDgSooUtp",
  "key18": "2zanRbCoobKQsQZrXSB9QYqGvg1yaR1AQTUz784WtMvBoGNR4uv4Rsa4s5pBcjgunrCgkHiZB1K3Mr57vGjJXgeA",
  "key19": "2mEoYecbHXxucNFumtNg1b73zfBDXbApwJU1NJskSLpVGZLFGpKGGECcBXDeHNub27kwMKAGtYxnWUcXfr4RbdJr",
  "key20": "3UQnKdcFE6spA55uN5vk6PWiAwMiPoXKvqkqv5fEYKpNPAitbt5f6HE7GtMjqg9np9CMxpbz4FMZacqV48qaiYjL",
  "key21": "2GzmCpmyhEq9nae59GS5RPgn71VeZJ5jecXhzHCnfD2tnivxZtg93HHVM3pWvhKXLPdaXkQrLhaFfAyFvPZvqeDM",
  "key22": "66ZJtoPG9sYqRasQEYMFN9Q2YP9gVi62KUMeqefV9iisBeVjqvpmQN5dyAbianivXhxcJv9hrgVaoTza5fq2RaRN",
  "key23": "gzE4UEbLc7K5RkH2mx7GEdoctrGyCSDCy9GqsKbpPruZ9qb2VvK7A1FS9F6fzwWVShprbGDywtvi2tN7geYV3Sw",
  "key24": "mr1mWtnP7aTvutxSwSx85u2BRiFQjTApmrvmCvCgTnN4DuD5MQ6ArKMCbcGxBV8aKkeZFMpDrmMa8xyPo2oZ5xX",
  "key25": "4yLnVp7uYZ5TCfrWKWmRjzXy2DSxysKjFQrKJ4q9rp7D5ER2KFV9n73JdMJmyJVgzFUaLRirT9uQmg3XuXfbiECH",
  "key26": "5uZxu6c5YbfDCbZ3FJ85qnYK8kFMy3iZgsUkZZMwoadzwjgV47VU8aaBt33182N1U26P2YjFzqY4qDEK2bKFqt2A",
  "key27": "5rr3qbQzCXHEf3qr4RkDBB12gx4jHu7T85zHXtYS2tgMTEDZ29ow1NQfupy6ziJiUfsovkA8rG594Yc8noP89vfM",
  "key28": "2C4KNd6uBqpd3dRs6VzxZjyB2jKq3aJZZuCmTN7H21bpmym9YbyBNF2DdxdWrgVtFVfyJhDkamGUV6UFEAonSQsV",
  "key29": "4NVDibbpVHnViRtotLjHpCKXdURhtq9ropKpELt9yRVdKnVeZPAUygmxHBnotJ8cm8tXcavUwaji7oU77JVpZ5X3",
  "key30": "48HgG235uYSvrX74X3CEt3HFLL8tKUkY8FNnNXWtEDfcd21ELmmCZUrHCjDgA4VvvGSuEGXeFFK3ntm86LurPcQZ",
  "key31": "2FQro6h7vV71u61AQMWwpARanYVGFSEpyCmycCMupbQYQURjjQUJ6jkCWTQbM7GhPoRQoo5W6b4xWN3Cib54YU1f",
  "key32": "4oikGMAXHLRYqdp8cnU7Zhzo53aL6aRMUWrwq6fU2Uf5ffFk8XiuHDANijcg8nTgCkwho1NGctFG7f9d7ccZHRHj",
  "key33": "4viQh9ivzE1wdMMpoTheAUvskDKHknrDk1u6oT673yDa1UQcyXN26WgBGMu1rKDEiGr2vNihLLcPcZtujvzcdJwu"
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
