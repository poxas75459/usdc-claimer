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
    "4BEWKVNDG58U4grRBW7WhSnpCLWJMfyvnjf6bMVneUWmabVZCYs4getB2VT98t7AafnKPKaXCSCPUYLKnQzbwZfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHDmktGTvPP9hCns5kew5mPEfQcAUtJuXLgoBE3yNpuJwAy1UCw7FH49RXpzKb6RkMQxQkNVGueZN2xn3LWt7nw",
  "key1": "2mZJXc31hGzqqFKeRqr2Stp6e25f1JECMBJHJAGYLywKxScWGP2zWnfW8XErQdDK3Hojp7f6WL8WZDAYXBjNjN8M",
  "key2": "25uK2iQP9azrXFqrcPd1syQ5FQR9zXXhQzKRZUAxjareM99qAJaxzMF8b7Z3xkB8U32GgWe7ByruPiDw7KmqKLBT",
  "key3": "nGngmkYSF443GrYXva7b6RuFy2ChKBUDmoVYymShQAA7QYiS23hcPfih444EV3VUYAtWMNfeb8RR5yUFpypNdLC",
  "key4": "2L4S2iePz6qiDgfrT1T9KdnLAaw1LizSa41r4mVtJxYXiULyzVF72Nmt6Dag7YjsKXNFRtEfhtzf4Y1MNPSf9Hsh",
  "key5": "KfrNfcoDzhGWRfjhR6Wf3WkTGMwrmo9G7LFf15tVc33QFQseFN4ra4RELaYBLwm9HWBbmoqPeWRgKCSCayLf71S",
  "key6": "2BSAAsPU6DZUMpGDVcCAk4gVa7sNey7gnNzyLG7v7CRh2W1XCXH8QqYX7GJPW4zzXV4Zs1yvwcU5NUrU9X751LVx",
  "key7": "4fqGgnuFw8dV5DUqevYh7Vd2UXPwymz9rKx4RawFZfiCD7evYU3zkr6gQ1za2JV1pEEgiKgfs1eQy9W6ETgBuCfA",
  "key8": "2PhY5xbfNTnym7ppxoHPKt3HkJLXSk4rXeG9grZfjzsxFGwaEwUFkF4UXvLLDaXM6W1yKzMRybjGR7pbBFhkuEuu",
  "key9": "5xojqALmUFPFmxaY7TMWZDkueifVxm7XuUoS4wPadRiHxc7oLiqy2nshin79BSiZArr44DuA3ZiPNNjCB5bgcCva",
  "key10": "5RDM4xRSCRxf1gRULeNpLBRGeizumhwBYhLtauZ7RTgivXCAwcYnfkftBpAi42swYFqh7ymj7JiD4UYfihLoe7Mo",
  "key11": "2L5F9UEWDRcvFoBkg3bUFupWf5m6ab7W3b9DHUgX8BZtDv6P9An2hWQbMiD8RXJRu2SJQ92aDGtvSVPxDswmQnfF",
  "key12": "2U6Lrf6myJPknUNXdkg7BfvUrqfUg79bP6haZ2xpRh5KW7yE6LNBSmgMmXtedm5vVjp5jQM7DrmfHWEgrweWF1Dk",
  "key13": "5gcvWQBVs89YRWQUvGk3YLeLZy4zAduvSjsYLoF9drwiKy8cjGwZRRoPFfJxPTZZgCKnC8vyCsqyWk2Gp9AFVrtZ",
  "key14": "5j85Z3JRnBzNRmdSZheQKFPg6Kb8LhnirC9zRCyKtRJ8U3wx3GwYA6bENMfkNAH9K21hzVuERNU9T8bpsZuqgne4",
  "key15": "2g1pe99Nco47WqW68MFPBX725n2u1We6NYiJKaiofkcq5mSAYwa63E65PxYN3f6KEY6BkoaTt7c6MmF5qBwtHHnW",
  "key16": "2gQGwDrAZVAjbnFWX7Fg6ewz6FGDM2UqkNWgHPEkpBs8cH2mik7tQsp6GTbjACUDLyYwmwVSigj4aiuKr9ZynM8A",
  "key17": "4b2A9LM4iBURqVB5FEA6efk6mo8mRaTxJkdKX619F8NCBHC5XzmiKpjJvnTc5DaUBa3PY4V9yQC8bk2xt6Kttoj",
  "key18": "4pEW3qj9ubNuPN9EY6ZJPXybPJb9NESkg4PTzd7M8B9D3zGdXrByASVvHY2ZFuTGzAbWep8QerasgPtQhSucCRve",
  "key19": "4XHZfdKhxgeufZNBmYCvYqGFkDZgP2N2ZgAxdecHjU1mUZ25pnY4x1eyfyvaT3z5HUDURQye2BaNA3SEhh62RvN7",
  "key20": "5rAXbLfsoz6hneHJvf3o6WzHd2Gj5d52cVD84K5hps1xACapDgMY2ed3Tziknde8jNmL6daL8L6St7PH9tze2ifh",
  "key21": "378xWJTNQg3JmCLbN2txqtqyo6NCbF1FRPVcw1wbK9JD8pWdX15G25H9TZDcYKGdS2rPhai7GMZR5SZRoGi2WKZa",
  "key22": "2JB3gKr1oPVE1HYop4hNWsDMUmqnz97V2QPYbGuSFXJsjCf4AdnYhYyMHBBswBvmteXsLaPHBMCFiiExttMKkR8u",
  "key23": "4f6FoyJG1d1S5QY9PXeDYskXsTAfpjb4NMcP46jWbSKUNMujsFzFoFaDeLMWpeiWwTD7xKiNqG4J6fyYM8tEFdXE",
  "key24": "pVN5Nebk4Z2jq6zG2SyE5r1Hhuaja7G6D3qtPD98fgGVMR68pvn5M219WxoLKE6tcjuwvk313r8ajEm5Hs4SfUr",
  "key25": "5hW65PF8Ti5fJccd9iQe5wnH2838eizi4XjvsUTFPRJHJ13mJcv1GVFLfNYqf6KMVj9zrWpnP2vo7REhd79gZ6kr",
  "key26": "3QczDdyBPSJ2BZNdRgyAFKiCxYLHLjYv3xctRyjDVtmoduGkAiaUVJeMEEjc1PFsJK473ozEDxCK5yHULg3JSQpV",
  "key27": "ZL1YumueWS6mntmnqwzE2Gq6J9cFTU42QfSpWtHhMaJc98dNcUhEQxETJutSJnSfVvPvULchYzehD27vho37TdF",
  "key28": "hZXTsbLbm2r87AqB226B7iwsKHUP6v6Q9o97K1qLbiAmJdrPRAWsjrDpfKkCtBaAJUyck4WucwMYNMFo81KsmY7",
  "key29": "4jyvsMuJVWmPsXc93hrMWbjkLSxJGMHhchCppCksUKkiz38cnM77U2YdBsuMQPvvAqpJCVpX1qnv1cwjsAKKcJpg",
  "key30": "2ajK7jsYHfQAZn97RfHXuZLEsj5pC3RXN4qbBtdabyKYJWMu8AQfKd45rvo1JtsWskWZW55FWWaKd3usqE4jEX5T",
  "key31": "3DpwSbKwaLspj5UJkqNMnHTmzgtSwhfZD7mbK9ewHNUUCvAugi9DE1jc2gfAXYxzA9mbdfj1HCVY3b5FbKayyNKH",
  "key32": "4ynQcVRAXmCaf8pnvfirWEeip5S6YpE6BdhkunMoKitK4BSKyCHNhySuaZX8N1FtPQseAVr1hBZf5XhitLHNdG14",
  "key33": "3xMXpUt2R1mx3pbpync4HQ4eG4NjskgGPgsVyWPJSXDdjLQbV9xYgADZ8GDZdZ4rKQtcfDFPnfKzRH536hDh2dxK",
  "key34": "5D9RPsMFWi5J9k9D2My3Ao85XaBq2upEckAT4Lf3nBQgsbmsgDoqwx37nzN8nd75fMSCv2LhmHhu67vjRyYH2zqe",
  "key35": "1vyJe9Zsg8AnqgVU7LgGLAxfaWz9j43pAWs9hqDw6TFurPkC4tZq95tyKtrFGyTLn1wHC2SnpaWigLmPuKWmYbx",
  "key36": "4EVW6Lxh8xz8XehW4P3eT3XrkgGKDFot6bBuxbAQgvrsgdYrRCHgYKPnXi9Un3XGGohmNEgSxJxieG8cDX4ypEKF",
  "key37": "59k8wkacPnrrbGeBhm34NpYCJhm7UvikNe3dFv12W6bijGbmjYhDb2h8LnNELJ4V8NBBm4N9HyzxozAa7juBuZkd",
  "key38": "5pyLyDdfrKdtus788oZKe5uYeZgJjHt9twBPRWcXrdVxfES2ZK4BNDeEsjUP62PuE5qz8bxUHfthPweA6Q2Gi1EL",
  "key39": "3CX9FTMYWXUSE9dHCN6ZTwQV8QR1ThhBzwMrn19oPGPW8fpADcc1um5NLU6uHXjCJV8Bhe9shEbucj7bA4fiPMCW",
  "key40": "58af9ceRgLQNfTWDsbLUk69ijAmkH27J9hmoeYgvkdWAVVCrmbLSFk47UXof6qw5GaW1U5sVpDw4W5Ps4kSdnURt",
  "key41": "5sC5SFsKebsehoL8wrjTcVHBnrPscFrAhfT7g1eHbLKVG1QZ32ezWtuFdsx8ZM1VWpCrSfxL8Dxw2BvoSXE2ey4A",
  "key42": "62r9FTkWfoePjwPuDNUYccBUJ3n7kafNSx7XFRaGKoDZTjgu2nDNUuaEeH5ALhkNmobVmSJNKxbbvQgVp9xPYgvi",
  "key43": "efKofE8MwSgQDCM6XC79EWqu7QZVkFrgttdcNz9o9zdtQytK3Sa5PQRXyVWtKWHaQgSF1Mr5DNQRRjukakUHPy6"
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
