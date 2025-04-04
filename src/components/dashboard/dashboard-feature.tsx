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
    "4re4XBMUjG91YtSJ211yez2ck9yekkvWY3SBTjvzM7m1R6AiEus3YpW7nixdAXY1TiUAzV6HxCSGsr5cmLtF4kNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1NtQnvp8KspM7SnHyz3CMDinq6nn1enPNKo1VgcLL4aHCW29i6DSudS6L6HTkQUUFYsKgdDQk1JU8KoB8KVYRC",
  "key1": "4hdYx13nkNV92xQDoKBKYTh2q8Diuigq6xLyNLqiHzxaz9MbFMGgbAtfU1NopDgFPVMx1ZK4ZBeXFka3hz9Xsqva",
  "key2": "ZXMR2iyy5n1wKvJH6wvg4fuRNEQryvSMgvXkns8oxUnt2EPgyowqzqGLFPWTqbYy9cxmZ7ibFNYVjJZ6VYRyto5",
  "key3": "3CrSH5eq1GK7qyutXaA9tKxGZ5hQwUaYkNtWbMQMukU34XhYsKcx32UY1ttYv8ehyhAAqyDqbQ3TVprDJKimDNc5",
  "key4": "48yYxbTGpK2CwHiZH2uQYKEVjeqzyXGcAAQjpo45LNuS7hX8K86KNrqBW3ffDefRWpxRXKfpBCQMTZYvov3as6MB",
  "key5": "2DFBVnzdgxUVLeasgymffKaNfcEwvkK9mw2bCv8dannfeuN28u1iVjSP5YZocNDuYkqkpspF7By5zBksfccySfD3",
  "key6": "4whVKRwMyqAL3HHPvrC5DtJeaJc2LNaa6p125nvJ15QWYRDtBYEZh9MPHi17m4eFZzS7eCQFQQxYYJCzTrhbKbJQ",
  "key7": "iCwAzuwqp6QRGea3stQhqfJMJpgmaaK2L6n9Dc7bvo7R71cQjCpAHarMwftoTjeJwJhFFKs7WpnSFXdbaEYKfWm",
  "key8": "3vHXP286yNhNURcub6FYsiq8FHNY5wJQzzEPBGMisqH1TweWca7GYP2rvWA1DZM1kDz6cqRCyuMxfpCCPWSeBVuu",
  "key9": "tEtmJGLQxdJvqcKNW5JaNsCMabe2De7u8WH7gNtXCi6S666vztHaeegXKu8zvMcX7pxYcjdF7WqJXDkNeenekgV",
  "key10": "5fN24vobbsd1mynYTyNnACQMMpGvxrmEsAHoeqQgg2NhH2EJ13ZAhHowVHGyGwNyDQkDJFUczu8Pe2TFobwdx2B9",
  "key11": "5Bip1WmEs2U1nWNX8JnDLFa4Vvq9fQgZ6yBD5BRhL9oSdTkdgaXhtSoRaYBRcriUughsFHjK8gnDN95UhPZraFoX",
  "key12": "4fo8qkUyc6E8K9KFNA1dogSJHU4BeTqv5DWUY6hM9DEJry7f6yzpT7bR1Rf9PBEF2DfmKgrqaVLvxDA1aZ8nc1ZC",
  "key13": "5XUM1bxUSUaM9s4Gx2HdYCmqgMnN4BRtRyiRxJsi4ACRfH5TKqzVXjfGcyi3YswspW84sANqUqKqwVyj6X3UMvYx",
  "key14": "Q9294rZbrJNPCBjedkNKjW8rb6Z3EhsYV63928GRuxTLBU9b7hFUjZdvY8d364v2EQ3CnRbT2ZN1X1jaZft756U",
  "key15": "t2D8ZFw4BZd5HPfTNrhKSgSrSxDPUp8sgNCnPRkyW2KB1NMjMx7jnjB3qcS96fVVjqDTxEou6oDgATC1Twt8M6V",
  "key16": "3DZdbbjSGGGnCtqgrhzdj1L9XyrGAC6RQJJhfftizC9aeeQswVWgM8vW3LN2K3DAbRFCu863TCci9nLjbytr65Qb",
  "key17": "4J8TuLP4ZrKWW4SwdYmoQYuE9MRh2UF5YSpMTyJt7VjFwWKxj76JcS8scVxaD9UyjUWrjcxiNqYAsC5yufZFQqoL",
  "key18": "5Fq87zTuXSUB6RHr5ibciQVN4C8aPjUKBs28Jbbx6T5sCPbX2RU6VBSoZmdcC3mjCdqiaVF25xLZJuwA2KmozBVC",
  "key19": "4U6XHDyRy8f9ad5BhT3YzZZkMnYc1vRh1z8mpScFsR8SDYDJiYbEbQuAAx3HDRiuT9UVbvuoirYGg2N82UqWcgKT",
  "key20": "5PRbPd1dCzpuwGvBQSnXAYff4DZwcAvXX6supVR4NWjKJw1pFyf6GnZ9FkPc5ZAL6NEkG2e5QKzZeuatooYAgEcq",
  "key21": "3SwNchB7iqugWo7NKnz5Sv5Ma4kpAcnRBQdGuJRPi7ksr1Lb5cxKG2zyqKyqAhkwJUZ3d6KgNjyN1ABuLk7yC9dM",
  "key22": "mb8RiBgTULpgJMTPeP45LoUjXEUhfwhwVvRnbRxut1KuvRMqwJMACr1VMpq5gDgUqHBJf4oSPbU26ppgEB5BUR5",
  "key23": "5tdT41njuoZJmgMdUirtx1sgSPBYWedAkJ5mTeMB3dEfSQRmtgewdfferMWPjwyFg3d9XzGtPPEGuYj61aoDcBoc",
  "key24": "2PKARp12KVMRkyL3pfh918b3Jpa6khn5F4BCQcBAg5o661kk94SZ8NwEwwMk84vZ3PDv8jjAaMXBuEsgbxnYyxfi",
  "key25": "2au5YNNzU4PaJKii8ArZoztYGQ2PAwvL3Kq3Zpc8FS2YaqoCcERu2bwvVuSX4zZS64wMZJotwMJGWkf4qCaJLiTK",
  "key26": "4MtFWepaHS5g9ZKyhCfuNKKvKX63v1qdMEAps8D92gts8qbCCFuqxhEumcooTPK1FLTzHWGuFb5oUKb1wapMii9d",
  "key27": "2u3MevG8iDwU9QYtb1caaJX4PVCp5hUTwa7wvqxVxynZEoKAFdy87cs4VKvpBNWPxruXJ3AyTWkhNHgQaERQPhja",
  "key28": "4X9vkpcAW7tzLFUrpb3532h2zJ2zT6SifQLRE3LPDYx544f9FNvAvypSrDYBdwu6NmAUfvRZG5z8cdUjJr6ymGb4",
  "key29": "D8yLyKw1cdC7CZuMweBhqZaMxe7BVzSedumvb5CCvTicy5qYFPNX3Re3YKPgrXXncNHdALjwymQuGsiaM4G71fu",
  "key30": "5uxxwFiQEVgCHQG3Tw9xrxQG9672ieNfUj3pxwEZttFL5iziHJ1WgKfvDwcptuNkXZZHFyYM7vSRtxpVgg4B2zqV",
  "key31": "39LrcJvFxyDbBhwjpAWZFhLVbXGGLH27WVKqEawPps6GyP9P4m1CQqqBLgH5Ao288JaT9A6DX8okN2AyVXM4yqKX",
  "key32": "5G3nFX31y6i66zFNqcAqqpxyym3bUjosBS5h1GK7d6BwyEjhDD6J9cqYcWy8GjEHEA5fJWhejEGxNEnnbvEUKVyL",
  "key33": "3e3oWJwcpjmhL3p4eaQGK4YbFdcZah7cZXYd3qP8wMEbCASBfvjNgEyos7JCuoUZttN29fby6rkYHoUE5P5YhkVW",
  "key34": "3a2MNBGhhoWhDFDhmERLpsELm9eF8ttDk3rHfp1nLxJiA2y2C8giwmfNQRW1T6Lcq85AdW5m31cemP4gjdx2LtbC",
  "key35": "2zbgvUp29vGbpUzNfM4j3Tt1drioauwvn63aq8GSkTUEetJm2ZHBLdFFCD9raVPy3dJndbVmES1uSpMArbpGqbdp",
  "key36": "3ey2VWDPwGk98uvFNJFJnDPwxCEMzMfUNtRwpKE5HLBGJruuT1hM7X9wKBPt2crUQGGcKRQpggvjvk71hPp3YDqF",
  "key37": "3k5GrWC7m1MmLdJVVgBdjj1EcsSco1N1FzKFuSybrh9o7WsHAJE27Hiy3ZRKRNZ5HMw2DmpMefMsGyCfHv3p9mKp",
  "key38": "2a8x47y3E43FCs4Epg62NipBsMCmfVbdacXSGX2pdhZyXnHNejs4zfXMjTMEeSarLjrV32dPcrrsHAeUSZWMC3CU",
  "key39": "2bKLy4iMBBCWnBUWJV4GYTaiHRAWhJd5M1WTDv5BQ8joMfb72RZQQTCMY24kCZ4MR7xYfhzGV3WiDes9wMcs3EGa",
  "key40": "2DbUbNLnGeRsNjzxrEV6WpGYJBkZtqU65wHfVcaiZ82j6hRKRPaMWMRzoqoyDjq7sj5evrSg1SQq2GRoe3cLjRQp",
  "key41": "2HCqsQwjT21c1ms4RJ3MC2cZdMaH86mKYfQsFhHmFpsisx8LodaD6ad2rmxCDgxyEco31V79RzHfQGmDV6KMBxBG",
  "key42": "3mQ1Xef41go6MKKeNRZLvaFLcR7gNZN93AewX2aLAt5xNUEnRFTKE6KEDHG8cTA9jLmPoQzzZa2gj5mjzUviY4BK",
  "key43": "5iFQzBsiKmhzuTyJUumtf9GGmUE8koRqQAN65EyAYQaQEgXtNnNuZkpeskKKf5Uo8KDTLoZNiUsuPshA9g1fgnry",
  "key44": "jJCt8WHZzdf75c21wQ5QGSPbxPNxzFFSWnmkqenZgUxoAKGNnXuyt1eLbHKU1DpT9iVd8iH5K4g9caYvVudYMMx"
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
