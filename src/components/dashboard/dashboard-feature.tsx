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
    "MRKHgooGqa86BkuJ67Mhvg8SPjFEGqxj3UkeuhXk33qMpzqiH1U3iqvxUhgtykwdyU6u11yLJ1aMsTVz1PpZ75r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRyDps2iQKCz1ZxQYYbDxy4zbbzuymSWS5rd4Df2M5e1tSVEtjfhueqvLPDVvg3CUTYEFjgMXMT5v5EYvCH1Lhh",
  "key1": "5Eje46irD6raaGds9c9CgoPhRi7bqv6H3DXDyqntGA9qEeWL9XntFtAzXapKz1cxCobTdjHCouuaBGxXdgAd7Mjg",
  "key2": "4o86VqTYCJ1R8snfA22z7Q9dBhKGnzhL2KyARFcetUXzVbWV7RViArRGY3TRKRayWTxRy4KJFU1WTGY3apGjXHCY",
  "key3": "22bGGJUZMH34ywZTidTph2PQq7b2qmWCy4Y44p7Qvtzfb6xvTh8bqrFxyTWN4V7SzQeV1Zg8UvVYV1FBPRFboB9g",
  "key4": "2kSZVfEzqcETz74hzyc4zPfMowLTaG9RFTB8sZxXxRnaBzfo4VkK72kbyLt1oTg7W63EY5nqBMdxPwC1iPDiGk5g",
  "key5": "5KZxn7UkeDhD9hJyFMKQJphiCjcpJbrKpPUBsVavzSMy4ERytQapLRq8gx6dA6AY9BATek5uiJP7b2BVFWQWjve2",
  "key6": "586RWiXSpZreyaXUb7ziQT39X8gUxSQ9mHYQ77BjD1SY7hTWp7XKsviJ295GCCYJgzJrduL7nZ88mxHhA94Eg7jf",
  "key7": "fn4rFSS7boBZPeWMFxUyNf62hZT5jvfnYNbkiQgF2XqJeLKka2sZbjVTEeapRzN9CK3nLZ9TKx6z1SifRRmHe2S",
  "key8": "dtHRHPi3HNMS9mwFrG1bPeYwekuFrpkoH4JriH8DNtm41b15tvFsuDTiAiFDAtVae9po5H5vxbhhf3KTqRJaqsE",
  "key9": "4sEt5pjMxHjr2N4K8eT8kRA1ZAWNzrFaiDVE8ruYPNBqjtbgNG21wELZHWgZjaXDSMGuEk65jFMAyCCkvnSTufmC",
  "key10": "55AAnqn7fxikB99XfiNQC27ERRuzuLqt5kGQ7ATqSDkeg6avZ6SmUqDQU56RYMX4ost7pyrMEqj8uhtLPPUj7Kbw",
  "key11": "2U6NsSVUFh2WmkHaA44bjJjyMjiGG2BpkhRSnMe17H8wCzy2St644WWtAC1qPCRUVkN7PuXckp98gDXmg2Y9bsZT",
  "key12": "3Js3rwwN7UETP79kdcZdEh4n5mUsQmN2vUEdh31KbzHqP1cQRMYKLx1G2a1eJZkDFhbpNz6DZ3au7QbF38STyvwq",
  "key13": "3x3UyfSAbcUL9TBXbygmPNmN2n6a3kjgnnt7jtU9QPoHhKCh13B9uFkAv5aRqAEczAafTJWmXKX6QR1RZYV6JB1B",
  "key14": "4rYGXCd8shFKjckeZaLNojMMH1n7wrGTiTCVsaSR2FLpDbkjtTKAiVZFufSjvgPw32xUoYcGKKjTEihE4Nkj4NaZ",
  "key15": "bUak3o56XJzzTSrNutcWqsd4ESPHQswXx3EjUbZqWsKcMfZcT1eHNUfXhE1YUrWRL8Yx9Tk9g3Lz1troCABgdVF",
  "key16": "3LQUVjFnxYtDfzrVZgArYm2SpKbjcdCzx9fJdoiYDAohZE5zGwRDVzxD3snqHrAwrYcXLC9cK4TmHEd55YYfTE8Q",
  "key17": "3YUHysUjvLNzBFRodRcfnDy3gGY2Z7ZjJVSF4ACckNhW89BjRJpsjMEFfoWBALvtytpNgMrEGZx86ofBwyD53Tm8",
  "key18": "5Ji323bmqmJAeevbVmwdgWnGYZorzLmsbxCfRJFQXwYqU63nJgefZLqebBFGCySDUeSjGhDNBt5aZARAAV8vfvoo",
  "key19": "uQBDNRcQfoiHbEmAvUgCWYTyViSE2ivACpw8HQANoMhqTXV8br9G4pwTeuTvCzPxVjwvqGjavdQNFFt8MfQSJ9Q",
  "key20": "2Jp6dn5JZ62swF5Hs4SoAR1hDFkMdimckjDD6DSeneZhoevaGhWjJpC2oa9dFvXUiGMQmEjRpabz3DTfbP88wXsc",
  "key21": "3yFNCqeToGgbJZuP5t2xCSsmLNXT9Z7AZ631ZMRFBDteg66RYeTQSCmsnQeZhmWfCywAmpJB9RrRvCDp1czEd9RB",
  "key22": "hjG2ZCMR1SS6uKg43BSNjUghoSFvmEprGpEPsa8f3eFKGbCzNegYU28TdHJ1cTC4KAX6hFzxLYwYY8vxmfM5HpL",
  "key23": "2N9BAz34U9xyfAPBZ9uPkV3EZ1yEnLN2SeQbhsD7y9wMTMSyW71bDnBHbV7qNCxohDDFyhENtuZnL2Wnoabg9fGs",
  "key24": "53ATkkPR1M4tkCe1FLbvQEevMUyxpxj52vwAAtrwT7fVEyDdMjppNkfeW8ck1wwHv18tm5qZvKzb1jG8GLiM77Nm",
  "key25": "Eu7E8iC75bABvJRiZ13SCw3q1npcP8yBSwVopzob8wz9oYxPS5hheFDeWey3Y9NDywEPcC1TiTMgPe8cud5dL2G",
  "key26": "2NWdMMZH1JbZm4AncDE6e35qtpmo6pyrmea2aLdLoiaqxEaGjrWiWfosGzbsKWfKZ97LgzxpYgdrqJYa5rLFVLHq",
  "key27": "3asjDbzs4AeovZdZd2XgCLjgMf8z9uUbTFmogc8DxoEUtbui6PbpcdrKKZyMefQGGEwpQvNrGFAa3qmVrX911FTw",
  "key28": "53x7kJWGTgoCKbSkWxoL7mau4oYYieo5hWXSBvRztdCB4Ty4rUX4AjnP5ZHrh4eXGG2QVmduJ3i61Kk1ByJ4EN5p",
  "key29": "7wKtu2ASUMBVYWcRoWJwrYQ1PFY8G5ggJCfE5x6z7Qq1RF1Skbjqaz5D1Jr94iF8jraJRYhSLu3eskzjViDvaUW",
  "key30": "5wY9scAxKUwohauV4Ati3e49p8YLJpUA51NHLXAkYVjK3b6BgrSt3m7wJtUeVC5di11xMcXGCHeDXXjm36oSiUdm",
  "key31": "4fAhJ9M7avq9BMdsKDqczcM2CYZvtCS9epCyyi52QHh95saFno151Ex1aXxHmxEsRgNDbAfK6M9xAbxmWCY1NAyq",
  "key32": "3hGEA213BYf9sUuSavi53kZK4adwcQVW3itC6bdm86cY9vktKKLHACMZtEt9SVVie5igzpRfTeARXFEgNpPRrrLE",
  "key33": "5j8kbehQHLWafXprYGxfDx7urF5ozUMSB7JksbVpsPKTJA6WXe2B44nmoV26fKm5GAC2g4QrgtfzV2UGRMjSK2fn",
  "key34": "5phSesbS9GbS3e2gRqQmxjgrviYTt7CBRd5Ei1r97GCmeJAZ66Ak7amR7CuKktQZN69tAEqgV2NBum9QqrYXCbJ5",
  "key35": "4qY97EJLQYn6HbqJmygQYjwjKkyaPttdBLFED8DBdUDeLfY69yyPpnsBMXqTEjcjW34qAfGEd61AKEMc1kH5xsZL",
  "key36": "22AeGdVdqHd3oM8atMQEE19vo9aSC6eriNioMrq4HBGfR8LjzizceXpUf32wPuV3t9W4XtvtpcW73Gm1WYRAe3oM",
  "key37": "tbuWNuHQAPQFpv6hCTdJzZwKQfSvzkmxgWKFaqMR8vGT2KFNZVpirraVbLsoaKkh5qK73s388w7geroVVhEx4nq",
  "key38": "mxHrpAKHMm72BENY7BDp7mXrM3pry6dpKVN8kLL9MkWe8LgWmZQgkdC3CxX2xYHYUH3rdZFsvwQWvXFcfz6Njau",
  "key39": "4kJLjxgTyxdBCsvms7ZxZihziTNNf5s6WWeqVZpvXguVSZZZ4hWFhpcKe5zxiAjuRp56ZGvd3jXabUyKq3PUWypA",
  "key40": "5erNMDpRffJeWAXv8qrWSVJH1wsLt3z95Nd1rHZpzezHQ9G42yGXK8JbaAQhJtkfwXiWt6VXdCRJot5dQQLEfED6",
  "key41": "2qTvv2yzTZHHFToNT7qC5t2F4M8yvRNcbo2yk5guzmTst4ZcaXwPeLanNPTDNqkodWH8e6mYmFMnu6XkybKoBtXR",
  "key42": "2NNMMsAWDHGnmedJJhbMuvRaW7NmbRHnsFm2xTHpkTLigp8gG5K2qNLYP59ax2CMpzsm9nm8nwW6kD2YfBasfwne",
  "key43": "5F58vojRsD7ZYvtspi5tCJY1hrL6MGtZjaH5f12WXDZxSeaFrneB5gGxbX24ZmSnnp8cEtX5qqJdURQ6KZ6e8seh",
  "key44": "4VWXryyV6NyXL6UMGFfbFGzhWCTUzgdYezR6ZioSQCLcjtivnePqLQQZzi7MovRwHUvuFA99advVhhnfygjjhsVT",
  "key45": "4Su7DuECGHTYdYJTt8kjjaoLqphwcNC1pPxuKo13U2298hkA3XAQhuUjHMTYSnQMFVo9MQiiGX5e7FuttytHpeXE",
  "key46": "5iinreYqqwhnY5W8sDFAuSWmRHJ2CLWhK8DxAKWLLyCctsTCJcUfvty94ZG39DyKkgn1dA11hQxvS9jAk3hnf2wy"
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
