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
    "58eFaXasr3Kkq6oBvXyTCxtfHpxmBQx4jNzXPZ7T7RhgJKsMJ1amR8cjwNaTh1Qv6o11x9Epf8HCfzUaGf2FwETW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDDgzFNxpwd1J8j3qqUVgWcKAuLjMddue9932UTFJgPBFVtXSS35T378zn1PptDCk8EnzoRFiUCmTPhm1fWrDMR",
  "key1": "2bQ4N2sDwo6LNpQU1qm2QkqZdePCwaYHXKHXGspYfKcdotcgpt37GUCGHzJUkB81FRvkWT7C1UZUyCKM5TiXFZvk",
  "key2": "2zk3K8jPjk2ZxfnpcdBJRU2Hroir3qVEbUe5yXYmBEWDVQR9RMSMqzGUMXPW5Hzv1ahh5Mo14FENh46cRasvmWSC",
  "key3": "3Hvc3yNZM4VCGcP4e1tCJu3HCrNg2F2BfoPvSG2TsgkK8aV7EFvyRfHNHxNhbxLN3uwpx5FTHuZ5S5aM2BnD8UVj",
  "key4": "56yPfGo74gyGzPhkirqTzY5EbEHhoD4KaiA8qm55y64jRWdrWCoSFSVNe5e9hegEqL3z8FZeVHKBDwYTetEyJ4Dm",
  "key5": "v5u97KSF2adf2braGz2Tx3vcM39Kod56R599trbTMSLc2pBjSzR7MPbzQtHTrTr96mPCCr4ym9SD9RmT4Y9VHnS",
  "key6": "5FABSuS8im3j4fJCUSPAk5PrfjbwGLFSK4VgwsQNW5KnWSNAcszEvB6recHpPoPP8M9CGFcoswq1bpzWRWJaKodP",
  "key7": "474RiZzuoxYr8pRqSb7523RKWRt9bzmVwBV7P3ar2cxBg883YqfDfciYjYS3oHricxX16cKLUrxSB8i8sW36gXFk",
  "key8": "aPWhgdmHcnYGQYPJhUBsybnk9GTqCQf88rnZUc4pe78fZ7KxR8yv7h1mRQPeaQtjruj2PkAw2WYYxKqXJY7eQBj",
  "key9": "wrUdLfKGsLtHu9Uvrh69WDBLeBjPhaK54XDjR3FbjfKaViUrUpC9XFWnZum7VpJyyUoBj7xiY3MWGhZ8PXKrQ2b",
  "key10": "2SsPzhuDpCsCLxbbhE5gbnzkiU4Daa6MrLXkNiVyekEmF6FRxD5iNStC3GNp7ZtFRzWUZVafWWn8Zjr2ym5QNctM",
  "key11": "5VaH6R8tnqUouvxMAJCq1b3BAeDdLiTKbDWRAbH5QREwxVjWsoEFxNSi4VFPaRLPxy4Q9QJEehksQyBZUN434S9Q",
  "key12": "y4fXkcmAikRkziNT8mfbV3vDyoNr91k1J3ongVmcGdXQLHJ1x2fi1u8tjiPsQ49f24PLoZ6vqDb7R3E7oC4kV6f",
  "key13": "ZfFWA4DUMFPaxgUWio7gZnm3UJKps3wHLhyNwBUkGQted8tzCa33ag5mnTNemNympD4FGF5GZ9fV7aveh7u7SdX",
  "key14": "2GWoU1TPg4Tp8uRHTKREgLP8fDVQSc5dgqmFN8obxU4d2mBnznH6EM6LPXC8PfL6kPuybzhg5fogP83cZRyUtBSj",
  "key15": "5erL8WrGV7SkmBt9t1ji42ZikZYkrfRSfiMQqiYpArGif9D51u3gxBzm63tnup88anuSR43Gb2vYy9xoA5YzwzmJ",
  "key16": "53Us7bJzrX6eNpyNpyp7FnXzwYQZNmCH8GsonvyJ3CcBpwciuoqn7rhXxfA1dKyKYWz8GDEuPLgqCPGZUXWkiinw",
  "key17": "65d9Azc3PoLJ2z41Hyc6nxAJYfH3GwihUo97nY7JG4pQrPs4rY1CWCsJMrQuuTmqJ3VCKE1WNd4q4WyBiygMJjaK",
  "key18": "HdxyyfDGpZWFkRyD5dAW7sT83HcQ3dBe3CLnL9pVVbeGByUd4Ejt2NANTVDwkv5LGD7EngTMuwhpxxP7gSPCKHX",
  "key19": "5SmahqCCuNiFpivccmwizjXVq4VRJwrfwxgkgbXicSJSCAB4hKHqWYzjNoFCK4icsLP8LfMBZsWjJEXcwB9xMNyh",
  "key20": "3qVPHEzwcJ5nCSMqPjtQARo2z87eaBQQu9ZEf1uz5JZyS1P2uuN5o5kGbNVKMJ7pj5yfPVTB3fMjFg3ZypsaPDGE",
  "key21": "4LtEnK1zuAKxGAbacckm94hoimkUDkY25JG33vSBQxd8prjUQBwJqM6rPbw9qDQSS2Ax6iydLQU955s8aoTiJMwT",
  "key22": "4JRAYfTHEqSJZ4FhSqUYR6kUYMPGyf5y3FLGDTohdApRSW8AaBm4G28MSjye8PrAJFAzvu5thzdsrZTRefDN54oi",
  "key23": "2MBtv7Qy4LXbgSKBgdAGvSLwcbk5FcH76uEnbZFY9d7e8NfdWtEixT3frEYW589nFVgSC1Yf1fswSUfNPZrqUibC",
  "key24": "49GHjdMCE9Y8JEsVD7rsjg3fvYKJrnaZy3YW3bBMHjvELvUxRkuxmx4QbdQZsMns3cXpgSX4SkwZRy1tRDg5uxLX",
  "key25": "4fY6ezsMc2KaftbZGYpXXyZhstzMEX8o82DnkgLzT3zEisxqUuwdbc5f2A2K8QpgKkNQRf8fFUCmWjyDfRC53Knt",
  "key26": "Zt9wWNV7LmbHVbcruMKNdFhQK6sd16YcNC2wJBQRwtdtjCXNPGnH5gxW7LBtBp5dXY7Vrgz3jbxbMhAkPxhsVCk",
  "key27": "hMkdBjGnqrz1DEHYZ7M3D6A8HEJpjxjETYRhxQzpFyQY58n2gtch9NWfRHh3KfgBPKvkhydEVHGTAXA31iAJnCY",
  "key28": "2GzNNkKRVYMWT1zHQLJJPChgvprzu4nnfrrKnLXtqxPsiNhiL6pZyNoX6Z1fBgChB1V5Ts5dwV3obQs6F1jx6TCe",
  "key29": "2Bem3GccDEHGyh1V1RVGJwoPBap7ws6dEEvpPpRwESy2wBgYfjAwdvLX5LN4HJSKCetn9by14EpaNJ8K5RVHZiwY",
  "key30": "5fS9vnRfp4f6t4dyCoLhpVX1exjSXfiwBnZB54TfuNKNZmLTRCgM2esQ4oM9G2z6kBy37Q4j2D7UKsP4TB1ZfzDU",
  "key31": "2J8bi3AWpMpuiSDG8b74cPwwRxXKPNzA5PsW8UyYvHCXDpWcb9cyVhmGqVUpN9d9z5WQiRmirs419vSXGuSg2sCJ",
  "key32": "5DLjjppeaoJRfmuxPZsbUhNEGPZgxrEko2Ned6ReW1MkzbVXeW9skabSPY6wepxA4P34WX6xWgCgiuBeD1tv8gVd",
  "key33": "3FYzhNsLHHUEQwzm3ji19sMT7PDRUThAoQbHGe3Kwc7j4viSfEWQGuSEU9GShTjiFxsg9wKDSLBYcMJuJUY19tNj",
  "key34": "2eqxQhV3KZxHiMjVyydWoYJdwW4zMR2rJv69tfy4nVUthJMHFnM1rEeDp5UCinmpcBkPWeHsJaEkVXWXeFtJDXp8",
  "key35": "3e6U9ub1Bjwi3YzF8xCGTdNbeiFhRzzgfJqrMeQPzhmAvKMUiyDCk2Xw1ZG9uaBJe9nRLzXHDhgffs5mNhMUNgkF",
  "key36": "3UdhipvycDyQi7jwxdViw3LYJz5nmQcRzZhgfUDXy19DEAdQnzHyKas5zL9Fhzevx9ouCbkd8eN1Jh59cywf5fWL",
  "key37": "3pBn8Cnaq4DuZkiKrbwKMoXGMsrobf8H2zq3p45HvtmTRDDpkjZcSxrWEfjLqoLLzzTQCRTZjdB98gafi3jpmngF"
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
