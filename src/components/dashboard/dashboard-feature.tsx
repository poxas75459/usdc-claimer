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
    "bpWa5UgYYovHCzt9B2NDR9uxmrsxFb47rXfoF3zxeFiJtWqmAvPgr7LdqfnvZyoNDaYTVcz4Gi4JQ2TUN8ZnP2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXgMa1CyYHBEFa1E2K5SZSP6AexwMsTLgtHiZ3CvMPUCd8uq21Urhgpw9BqkUfW4GE7tQkyVUoFaHkJfFLjo64S",
  "key1": "5fc3QUiG38mqub3bTDXg69GChP3yREcanP5dHBy2G35n4FrQanncyNpp1YzfSgyC2mE1ZrELELdk1DEQeoQXjgx1",
  "key2": "X9KTzJYhqHqCcKCWRDG8Wabxwn5LrpR9XL8zGHf1qJcvssK8Rp93gsUbSGtzuxi1Ek53vd4jpgcMuzcmzFK5jZv",
  "key3": "tZ7JxYMDogdPyWK3cieufdAb1UMmAACb3tmMeJgZLZ63kfjgWF9R2J5xKEktTu1masryQuNB5yAJAE3M6cx6RfG",
  "key4": "2XbihPYNAbjFqN41gyLuHhjd8i1fcNWhjCReKxkaq3UbmQRyA9KUbSEHz6dgB5Rcqyo3hgvxrA9pY8NignFfSPZX",
  "key5": "4MNX6Goce5ndCS5j4WKcPtCpF9i9QMmgdURNs4Spfbpm8jcTV2FEwYG3tMg2ccVRnXXB1bWaRXie5gqtSkr7EaiV",
  "key6": "23q4uCpckSqTmPGayDknJNdQgp4jgnwyUr9bDKWaVh4hN1NQP7gMtwvfM4c42vXdgSLaS6DhYVdf4WkCCAhfzBJG",
  "key7": "2y2Cd7pHMSA3neL5GFyPbVNZ87aN4Kzur5j2cQakBfndHyiGeeo9iKiJa2i547GAvz3TPtfsZj6GLifHUPzsywZH",
  "key8": "2RjA1ioyxoP3RS62bgqiovkKXsz91arCLd6G6v3r6kzhWjndsYSUKWN79Gup3WWZVWDpsQJgsBo7BmpqN84LW75j",
  "key9": "28G1GCyiivwCb9ws2MXfwYSjCdZWqZVJrpMYFHiAbwYwtyrMxraMUU9ae9biN8h9bE4M2LDsLJbARM56FPcLzSEQ",
  "key10": "kYmLNv6gevzHmv1QNpoLyk6HEFSCxcoDwCYdb6agHygG5gx4qHnfQUUydcKW691hxmkogzMt23ZtDSedGgme2aL",
  "key11": "2dFHXQRraB9LwnzTmMk1eKbFyha1CUsjXqF9cDM7Diom7q5hZGoHxcXSqMUgWEefDvDCco2pujNokWeDMVVu2qvg",
  "key12": "5y7ffHxePXQmjJsXcXmwKaneXVmSwbHgEY8tKdreGdWRsxEbhJBX2dzvR7Pk3Mf1sjDHxXh1PkGunppUV4JSd6Yr",
  "key13": "3E5RpV66WBSXvEY3L34RUyexuiU6NF4NJ9xw25kifTgaNKeM9jC2y4TywVgTdSgar1vHHHmQyQbTzFRAZxmZPAL6",
  "key14": "4ipqKvWn6P5kMP1YEByDbE5dBFJRmDxAjqahf6Wn2XoXW3B2msJFMDEN5356tk2hFEB529bHETABpmr2kyiuecpZ",
  "key15": "WsTwj3YRJyh6qkrnW3fmQ2FMvEtjbEbWiGcZoojxCj8RTWmBeETRzs2BuxmQCzqtHFpcvFkg3cFYa9AC7ACNhcq",
  "key16": "3Pf5GtvdnG1HWSrvp56kLjCSRBuuEK3LPQ4WZrhs2iwpPQNuZk8n3Q1gCvEGJRyf3fefuhqhfZyeCVj7u938e5hu",
  "key17": "65j4uhZbEFHwrGgFHsdbbYFSvszPR5uw2KSR6XXMzm2Lw8Dqb9ozHYfLwwEoM9uevXtCB6m6BaLswVASWgcmK9BS",
  "key18": "4pHjgWFF2SEjLryYBBoAxK9b3W5fdT93AAfNhpgjN2oiHBRfRbY2vFrbhN26bCiVFk6e8uFuNAWGeoa1a4h8wvcx",
  "key19": "31fkLRbvStkzHZLYysKiv5YJUovPVBgoP2xPsVtp7Jg4imDx3G5uASD6ZxV4dNrvKSPERvmsuRMgA8D52KUpM2qM",
  "key20": "2xdSCwtQcpFV37aiEZyGd4n9SUnxeaU5TFkSuMofoiDFyNe6sj6NTfAiLtXcoX6erp1hokDvvdozXd7GT6KQRTVZ",
  "key21": "5zoC5EDEdkA9JxXYhwKMEaQ3yFnWTLxoUe5QFFDTYEN8q9dRjiZmu82M8jd4mXfb55jk9RN79zuaCbN7scDnCgDh",
  "key22": "2f82Uf9y75XPECpNHkq6HhEnnDFoBt5iW3ipWGSD5xzGftJQDmqjGDAYHvMSuFRWoPb1RwHkRnfHkP7vDeM76ST6",
  "key23": "3h6WWrnM2tPijM3xy4oTc37PHYQFc8fL4RdZbCUJLp8aWnbGDWw3u8gLQFNVAxhcV51HttCMBadu5i3Z21jt17w9",
  "key24": "L4veiqrhijtv9MPkVXRXGBQv4HZKwQJBA3wxDGEuSte8jjZfkJDaYvYjax8i3cpE91P1nnNUr8x5ueF3xiJhSmC",
  "key25": "36DeYi5iofSLAPdM9HsBKoKSohavwANwf7LqGNz7kRrRHfX6GF4YeZtEJpD6qCBXQcob5kx9VN6ovoCBwHVoLQRT",
  "key26": "qyWTpUVSs19s64ksojnMCb7mD183i22Ak9p5sXoiyCjCSpFvy2YYL3UJNFzF33ghvsijFhmnBQqHGsPc6uNLhQ8",
  "key27": "4qKvgo8UTX8fXXKkMcZaGsK2SPYMNJnGWGAM9v1unpPkSaB5WDXCgeWNj8fpw2wtRbm9eiLsx4gcSMSc57g8XCeH",
  "key28": "5S4CpbLD1WT8DL21BYG1aphg9ecxNGoRAuBTov4uehY55qscMZr2Hd4VQKUR67qju1Xh4tBNeMNu8mGum8hXsWok",
  "key29": "5HgMqMyiyehWD1tvEQMm8CikBuVPJjj4qd8vXxusnApwMAkzVDk8csjKRtLin42emqkbGhPFBzhffcx5BnBpXFGk",
  "key30": "4bnTPanXV7dh8WHaj6C7NFPoxNTX42dShNPC4LBuNkqztczmwPD3AYf2J7aBfJkwLh6RpPN7gTkVEQqLSez5wK62",
  "key31": "2hMmTSngtp8gdrbZxEhWVGzYndgpFzsH2SK9TEFRAmWeQPYU8utC1hzEDYg9gxegLh5N59DJ9f9qpXBkQfaCrg7T",
  "key32": "3p1m5PQBguqvzjCLQRBg3YvNK7qKmZXTePDNsudhfXZ2g5jxHwWJmG7DdGjWvPx3SqCHRPXR5Ai7FSzPww1c5pjX",
  "key33": "5AAZPbryRy6ckC9DS9V9WfjPD7pxDY1FrW1RcqQHc8w91xe4vB3NDRmvhvbbDAQT53XXtxZEoNjSUKwSrawYdw4n",
  "key34": "kYwWT27fXCz3Y5Lz2tSn6E7VQaxezUqYUPgFwXYRqj24ZvXPoj3RFMNCXoqzDTHbkqxUM1dbhopQvq1khQ6AiKK",
  "key35": "3PxLet3zPX8oNiL6v7z1LbzUBpFjmWD1rZnce2nWbiwk2cBVyGTNKgVfwwwyD8KAzHdbYaxngB5vwQbszHznbJZp",
  "key36": "2spQumv4hK1d7UvtmrVNE2hbFmX6QDxBSjHDsDGnybmSzVSTwPKCQLEXM9rBUXkvYzM99jv4tobPm64v3ipJPyiP",
  "key37": "4QH2dNGqhhcQpdWVq2dWJ1AKnUidSWHBrMBhWTFCFtBUtwQheJVP1JBQEzKuF6qKjc4mpQ9eQtuz7MwbJeSXJzMP",
  "key38": "5GkWeNACx3P8eqBsd138cr3naMUsoPKxBqSHo7Fxo527qczUcCznSDpkgfEuPR2meMtTuUmddx2gTqai1K2Lct4a",
  "key39": "3FcseGVzb7z6fwxYh2EUzWcMyejMYNkuiLAm4R5QCVUmnRSKcfJqiJqY7dpQKvXg6cWz17C6tm7YJC24oLdtGds1",
  "key40": "5bEb9vn3ZEtQK3P7Dxq3zXE6PrmvzGbgWtezcscXdUTr8zijDC92XQKAFycPqq5GMvvDUM8NgHkKjr2dUQNGmTRM",
  "key41": "3iQkS1q3jcqRvcn9bb2d4Kv7gdkkf4QQ3q5SP2FLJyRNzTBdm4qoHtSovQhrjf1N6JVkMwGhUt8ffJcAHTBvRhpp",
  "key42": "5B4bSqaerBUwUVH1XaC6fDi4yoBTRfmJkKmgt7DUF6dL3BL7DJksBm64o4mRbksWfdrnXMs6QW2DEUnCfsuFo3Ci",
  "key43": "2qLaV1b126WrBBuNRmrjjS3JxCrLcjfwY9mhrbxznfWNqEvHQxzVYN4wwzb9xk85aiLYzSX3WZL1ge58WDxSpved",
  "key44": "2BypxLXcsf66DBzEU1D9G5jhs2RRErnDS7576iXRozxtY33BkhJ4svMdBhB8JDyGxGJpdnVcpW1NLNPKM4FgGLjF"
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
