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
    "3de2Ym5vMtbY1fRScgR3uHwZr6NtY8RTJJBWu2Dp5v5JmYfFu26Hq5dGgbW9tZppd7Qt1cbLc4P7wdGnQNYnbSkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMCtUBBS1AT5M11u9jdDCzkv6M6GZEZsVSdJnusM78cYS33K8f5nRA3EfSqLMvcQHeTjNTjr7kbFPpCj1JKqikP",
  "key1": "T8Kb6YK1wsmWPo7fy3D4yEUN44SqsUMDMFZReQFWJ6fh5wT4VE23UEuY7YwR7AjBV8dwsxkmRpcgHb1Vt4u6stU",
  "key2": "2D5N223VmaggAcywcDu6w4D4sRjXn9GzNq9faPQCNMwfoXkVFUhfEG2VwNEtfLiYZnvuwES8rL9boKte23kQ7isU",
  "key3": "59knGnXSRQduSE2QabbFZfHcjRqvUfNFYSKoFc7yAG8zDox7adrwT8JhrD4Xgj9E5rRufk9PB4LBVTw13xshC3R8",
  "key4": "5vqZwpr4LfBawMa3Xm3R5MdGYArp5jULCkyudv6RFPuQo4uEHozkUpoZ56LXtKjKezJu5tLBpdFbsaPg5ENnFhNo",
  "key5": "2oDvbvsexiqnMkk638cjFd96rw3oZsb47DivEjhvk6Pvwkyii3FJii5RLkVrUiY5bGGQT2rn2FuSGCG2w6KyUCHY",
  "key6": "2QaZsVAieDZ74B5b9qYhCqzVH8rbZVM2dLfdFNRFFptm7MmnXMhSsQ8V7yUDvGuE9yDFP6bQTq3Txp4cnroxd1c6",
  "key7": "26n7chajbzGEx5UG4kwoP3G8LS32Xv9rCyF8kM2CThUCpejXBDS7o1Vv5mFmrajwW9q82t9556SAt7UchGXJeai8",
  "key8": "3i6NywcbJHrSHSSeFoU5rmGRaR4t5ZutxCobGyvu58EUiGhVAcvkTbmG2ygLsbCADMrRmQj8U3gmVYJ8i6aeFMM7",
  "key9": "3dZFqWaG4Rvx8GJB3Crknd1P4gsizHD9PD9BFKJ5hohJpij9ScXXxYB1hgn5RKXSw9HWdAXHCg74Z1Y7nuTnVSoz",
  "key10": "36p1H3KtSWqUJbQTwSkVZz8tkm3Ec71nsihufpoFQusvQKtRcVg7Kp866f4G3FEJa2KAj8y8egvipTeAJPX7Py6S",
  "key11": "57NAZ8hpii8pgLYDPQcT9tSzkJgu1M662M43f8yRsDgzoYoGfnnCdCvjg4aBMaTJ3NH2srDPNqwvFs2WkRr7MSXB",
  "key12": "2qLThDSSJNawi4KtCKGiSGHAnWLDXfmUfUdQUWcqdouAy6CCPiRr6mN3kDQBzAhHwGAsqTjQxDjwfXmSSKkgXTU1",
  "key13": "4SooSimwp3CxG2aFu7sEdMciAoggjuNaiTcxYdcPG3h29pMWRrhyVa1WVFSSNAQMuyf6ERz46FMgvtmc4zCbzAXL",
  "key14": "4uR36jtaigx9Bu8yMWuQ6Hs1dRrMPiw3tap755sTCXY2CM86zpHKeNZRxueDzi1YczzCz2wH6AAkjkcufwxUpMi8",
  "key15": "3h21y6RpJSTfBcDagSNALUy5W4VRAAG3nCwimnnuiTawsDtckqPX1yaMe3xzU4MT7PzjWNMiVBYYdvMdi1kZUY22",
  "key16": "hKXJyrdPhMSFhfezacixtFJrvCD769LtdTuX6nMLjUZCZWbtoXpU2yFHTd8SZcH31h1GT5D9UTu7AYYYhoCERQV",
  "key17": "2yvnToy4pJJmhvRnyuqH7Yz7GiRvVbszzXwrNJ1KmAbrJXgQMwyBeRZb2kVZFSh6bhqQ6RkjJbxGNQMPGjo9RUeS",
  "key18": "64YwNCEVbRBz2NtjrZqTmbK6g9oY7paC4b7A87y4CwencoKe8tu7bbzpgubvj12EfTqt1QZam9eLMEzbpp9w8fZd",
  "key19": "4XAioGSdxP1fqeb8m1HV8m8fmWCM5bhmaQepi1Cpk23TXE8MUsYueVUsLzYcT8d2F91A1x8naaUupetH2tcbFyxw",
  "key20": "3Apw48tCZHaj8mMkeVEhntCWRDsw5nkn24rzN1FdzmkdxYRhPiL6QAdg9JYCAbjDu5C2arF7V6DLNGMfkNTmFmDK",
  "key21": "4rgixrbp785oQdLSzkjpfC7RsrCfnv7cocFJJZuQR8v9BSrsSu21yzhGX3dNsoau1GTUAsg1fUMZSzUoKiwSZNCd",
  "key22": "5uQ52kEqDCDf8zN87CCXTyBdNkgFBLaPVwBhxpNjfnsdonyxuxJEPiZ18bKoruFuiSMXuLYcKmdPSrFVrWhU4xjd",
  "key23": "pagHE3QQ2pCf33veTWKqugj8ScwHsHzcWWTXvVpyhZ8dnRZx8YorKCzp5H9TpVDg1Kkf4MCRSSXajL3Bw7kwvmo",
  "key24": "2RZbgszQZ3w6rAcjosso92Hb7tN2zLWAA3MMBd1KwhnF3b2Q5KReyHuFssW1jf4LQcFE2JUXHZTpUzQvRSapKBKu",
  "key25": "365F3rLjwLRZCwWfpqPKf81KwJMwoppwsJEcurrUjLVP3uTi1qNUbG79TjoYYnzngiewoc4rb2iqA3t3cwcUrj87",
  "key26": "4ZpGFqKo9DBNfmcPvd6EnUytho3BPr4vgyWrGYDhvMsuhSFA2zJK9ywWvTDge4BwoadEhN22gQxzq9QJNTMZmETK"
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
