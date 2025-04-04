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
    "mCZY5GhZ3qHQmRDv419PRadpPdDfSgxdDpy2YjipcaMS4jNqdpd2j3tqveDAspGoBQRihE5Yapc3ftHZsuWeigF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzpbPKDmtEGXa1hKVgKyVQgQftEb4qv6YjkyX4bAaheqd5P4GHhEJctJQtje2uQzNgjrdLJWdSYVF5qCK7upxzv",
  "key1": "5c8zbXuAv5rDphBcjMakdhb8f4yuRG4HrmggAEg5ptHwD2MjHujTCa6jPhciCaB9q8F68AqQbMfAdd6Zq5btzftF",
  "key2": "4JxipfcRvR61qQsbbj5fB2vzwnuoU5usJJ9jBjQ94wFRUzpYWiAsgj643RjvmqF6gdgGbkFHZqnpuEc3W31LJ1LR",
  "key3": "4hrDhV2LVMouhpfxbq3iTo6u2eK8pdPYSnhjL3s6WGsBswDJUNLxpD29uBY52CxUpgpZCujfNNDCu71u7ECc2x59",
  "key4": "5iHukK223WE9UAsACx7wmoFbAcK562kY7HQv9TxR2i8w2DC3Ap97tvKaN6mPaxy5jfnfQKop5GTaXUFj8815NJcN",
  "key5": "39njCSdmUtaD9BDwLWTSkR5YeT4xbB9E9hFC4UAsUpyEiBC97RZQ3piA7cFBbXawYHuYNwQzeoDFBHd8p6vXyV5c",
  "key6": "5NYm5USby1nwumsAsTwihb8fmye6WQ5FHemSspEU6U3AySS2d6nNesV87fT31rCyNCegKsFJH6i8xiM59oWpTrEH",
  "key7": "duN7e7mKRm3pwp5ZqfwriSXF2MtDpmi1hf1kgaTUa2uWCoZaiy6eEbiGbi73ZJiqRqGb1hHD8iennJSmYMDD9Yd",
  "key8": "4TkDivoX6Kf4NpCMjf4UPoJ1d39HPX1RskiFpc1goAPpgpZRLFmmt48aNvQMzQz3mbr9MCg3Dsccb22qEEVcHDvb",
  "key9": "2F12rhByV5HGhkaKUm5Y28yuoa6Ztx2J65t6ZRFGLuUpx9FEzkEPPAz3R31Hw9bue8Tz8i9FtodCi6WjZPHjQkpc",
  "key10": "62q9t1GurKjtv6fXffBanAdGCVpiPxkH9vxYrQQvu8eF6xxNPscH3UC5kSsUtJSiF9EpnxGxFKKZXWWLcvSJR9WS",
  "key11": "3p5ciBcUS3WhVFc8NM1e5ANwwesKrcgaqBt32YUPToii6uvpDQAuunFPnQT7YheYHyKWN4SJ9c4z2BGYHAfiVRTD",
  "key12": "5wnFu7AkcTf1rPGw7bbcubQwQFEEqJnQPw4LzawBJinTxaLRvsQYmTNzbAaiABSVQ6hwqy52gWob2PTcnSERfzk4",
  "key13": "5VfCX5rNLMURSDSQEZDyMipNWpubYmEzSM21tDJwSKeg3aqggTPLUX2Dva3hbcdRGuh9v1e6E2EXFCwAU8btHckP",
  "key14": "5FWvwpfGT1iReuJYpJnx5ptjGayBjqV18PsBRNycfStk6iDqmVbR3P3fczBJfeFhuRpujTaLdiLL4i7yfzJGy2Wg",
  "key15": "yzWZ95a7ZM5tmGU33ZZfTwnqKLGE6rN67uc3UNjURSMhhAL5aUmvQmryExX24528vdvyU8Y4vUAeW4s99SaDaaB",
  "key16": "2HTuzKCPEZavc9VqfJSSsBjtykvA4wGeMmzPQ4yMaVQjwwDC4UY3R6PsC4mGEBwuYGcdBXsZ2rk79cETAtmgLfiX",
  "key17": "2piwRNd57qw2kqRs2QruPcHgsoehQU6j3LWuKK2dY1p9zDws5VpyVCr9eW8aifzjYGD5u3dW68izufs4yQw7ebSX",
  "key18": "61dDwU5amSg1E2hk9UirAyfqF2ontTkVjP9SxP6vEe1AdHkc7L2Ga6iM5we7GmRBdZ7mcnKKkjbvBreozypXm9oc",
  "key19": "5r5n6bqiaKNFsaPdLZbZCxYArhEpGJ3oYiuS7LBriNAYchZjfvNvZwqGTDbWhNFW1mvbupWBWBoEMMY3yMyQX5hR",
  "key20": "3iH6WgRLHC8eTAL94xap3cnS3MVbRQaRhbnxcCNn7jVukcR1vAPEk7xawNvXQUHfgafa4kHeJnSNRXttuovKfDUJ",
  "key21": "Y2r6nhzse6JnmWMzJokiSwdHSYRMGhaHm15gtdQeaWSEEEiSC23rQ5imi52iZKVUPDNRSQpoV2wUf9LXPr9DGDc",
  "key22": "4ZG7HTdrVaJeVuw1uK2T8FDyMztVE5jhyYEJs9xsVwwt4j3R9ba7TyJVCZCmrn5Sr9Lh6MBijZScnYvwZnPLUfww",
  "key23": "3YwUeqQjdJ3E8ZkqZBBAzmX1hU7mSPvw1YVropyruT6arxbUBZJPPsudddAr9wE2pNUtj4Eoaq1Ekvy2oESmk1qd",
  "key24": "3XBdoFqpoDZHwhY1FZtHxtpn75SNnbRTGaqkw13oBowXnP89YJ2ZAohBTq3c8PZuGFsYkGxtR8SiFFmRH41Cfjvo",
  "key25": "5JTES7nqu2GukeVPKcJtbT5dXqQB26d45hJnuMHw1PqvHDxDvLhsBu7huicnB4PzwPp3KyjeUR2hfh3Rvrihe5Ji",
  "key26": "3xBq73TzbPUvwytUAPdx9PyBqrsa7axt4ZdJjqWCgyK41eCnYuPXUT8Ji3mtaHjbQ6bZUDqSZ3HDRRbUFBzn4pEM",
  "key27": "3Fqw8iGJkuf8q4xzp4AzFG7HSHndADfFKubZ7okAdwQTXGAMzwB8ZBRfnXniHWsK7nY92KqZ8NBmPKQCdEpefTd1",
  "key28": "3jgWMoY8Bpz4djvkQCfVGrJqKdMhgqjSwuXMVoLZKV1yuP2EC4F9UsCdTgwedcQ23hFEggu5gMcvdTLEz2sme5kt",
  "key29": "2gxxxu9iL9omQHRJbHhavjZxmUUV5V39F5sAdyUBwiftzN73E6GU2Gn17E4uQyGTDQipPbqY6anBZJ2JmNWHDy2n",
  "key30": "4Lc8YUvExrHfwzDcGHNLoYkrpBwPkzMEdkmbjfEA56Dgjor556C9L5ojG1AyayBKk8NhsqcTCEe1RwqQL9Toh23c",
  "key31": "5DFhzxkzbvBgYp1wic6qMrVN7oXCQE7PrC3nnacF436bbuiVmSp9hS4EggEhcfAVkaKBzofzvMZGXVq1wGCvpxe4",
  "key32": "QSzdVAhk5KYQYmmBiisHWYrRWfEB2od11oiW32yhZbzATJGSe7Rxfb5BnfgUjhJ22gmGSUoS9d7oBj9WeoyhTFb",
  "key33": "4K7z3h2P1Kz2rJLR7Ye65d5bT3cxK3S4xGCEWh1ZkDz6xN3yZngMZUkBVYpm9bBxkcgUNSy7STDDZQyQfHwa3Z2H",
  "key34": "4sSTK2wijNZQUDu8YjVJuhLFVpZD6ER5naNZqp8vGJLZdUUCgGWJaty4LwFcXcNbk2xPodfS12PzfXiTtbYNMkcZ",
  "key35": "2u5e6xeAbUfbNmaXaWpG54enVLobA2Mo6UNEedZLUtvrsg4rtsYnBpjXnmaQ8qkgbkec5GP7ofuuwfbzvxCkPCjZ",
  "key36": "3XDPy9ArL8AXYNyuyepqcj3YFFyd6Uqf4ZDt1K4wYjzkrhdHYVU1YAnhVedoDP6XjAuHcUFtXLxCvrE1YXs3UZ4",
  "key37": "2hcDfe8jy1yGpexFi5LP2dDSpH4poMw2NYhhDZJ1qfxhVjbxfbN86oC3y5zbyr3FTBTfMXrE6ZzJ4AQtznZzCLrk",
  "key38": "57WGon4yrkuZNYNd1UYXPiAgbGpvVdzkA2rm8DGiwULqNcbpRM7Tr7dxE3VU3zVtJHwK6zfZvdTn174QTpKFuoxH"
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
