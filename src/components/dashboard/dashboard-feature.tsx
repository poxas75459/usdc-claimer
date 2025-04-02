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
    "5XtpnKpUXReSAG8JAKybLafTueSdtoWGABUY9qSW6MWEN8HBVMRSbrbo2A4BRrkzof7K55gFe5fqwjBox2AADZJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WjubCRFe918na1DGqM764KEmjXFSEsJF5tYi9RKBoJuFUyFpfUa3955HSxHSDJeKjcbU4LADTUazecwqC7EAzce",
  "key1": "5xFSQVUoPMM3vaqf6zQ76LUS1N7sdqLFWDbq6Va4syYYGGP47rKL9PvcK2oZvuSATnQKfN5ih7J5fqALxGpfxQyT",
  "key2": "28Wc4oZEtRuELhSBcJfFuJtDqtcevrHTP1aPGSn32tNxxoLmwF73gXBvstdHnMTBqbGJuCxMLNtHJSG3pg28oYQ3",
  "key3": "gkQYLwTEhvv3zpH7Mmry7gpVbcKTnFRmY1iMns6SyXtoBRiA962AUhcNa7u316P1T5tYkq9D5eU6DkVKhpcoi9y",
  "key4": "57D97v7xbydL8JFL8BbV34f2uuqNEJgabfm6C9xUR92FQ97djjxtgRm4mLQBihKd7hneG9vh6LzNK1H3WSaxHFeM",
  "key5": "4gWghmoUtP7AsdfsgaqPegagZc9dXfnxsBsSapEQjaP9Njfajb4EQv4mEXjkbdXvJGM7mdx76opSEnwKsSumySyY",
  "key6": "5FjE9U5ScMNfFmSiDochNKDJVxoqo4BqcJL5hLETyevvFPHd1eRtNHFZrLAgzKuGj3Vg3JLU54FjXfUx6zq5Nmgw",
  "key7": "5s1mPHbPxAPtG3dmZ1GKRxzKYQgj41sSQgcCd9Svzbr5f9gVo1bMVpRDSyhPs33cdXZmatMRQYHHgsWBpysJuCnS",
  "key8": "iRGPxSqBDorXdPs9aQPr2wpGVeAbztXhye3zSL1jbXQM8tPRoMk4nHwRw6k2sR9fdp6Q13eFW2BtB7i3ooLGpjN",
  "key9": "4um4AZPoCJzX4zdQcWs7GG25CSkm1Xt9nJSkxVTpDTqG9wmHmYG7ZRcyQzKcsc11MUTM98v8g7AVh7BBixT4sm2A",
  "key10": "4JmgrEZNRQ7ftpAae8ByRjtm1pCnpmh274pFkSnZpn1jQV32JyrGotcpv35KieUp3zrvYbBnNvnEczyFrY6dEBhU",
  "key11": "4inwsyGwSFgYa1XjWCoTyYCDTGxDVVvXaoE4ghbeym3Reo8MQphNcdrCgoYvn66aB1cnJzCDFW4QD4sLXGzoaVu2",
  "key12": "3X2AjoXXNBHeT47mH57F4u3Sq7YoMeyzeUxv5Vc2Mz1BZ2SVg7aYQyvmBoHVkcWCpDm4hpGJ9XicSnuRYnFcVqZW",
  "key13": "3b4qwvouhJfxLoLUFxBMMPeSbX4fX9iVCBJLjD1CRmf775D21AS9AYWp7rHse5xg1cZRTu3JfHrhdzyKh3cDrRUe",
  "key14": "5dbwCCVauNWsmgmvg4jhdyVJcQ2UyEPqdhjMvRhbHYm44BMq1eSVJCxDJpGViuA3tHLyczhkjJjb15ELXA9ou8yS",
  "key15": "2Ce6RNBeYQgEgsDFdUUoVtKoN3Ee7SBaSona8QEdfP5VLeNyowevqcwBU8s8WeUidwcVUCQQe6jiwuQMW3SK7SvY",
  "key16": "bCg8E1uEoy4gXDqK1fCLCFWe79v2YmLqJydgF6fuEG46aQcMgHruYHNeFPk4xMgscPiNQnGZmkWL8YA8BqYCrsw",
  "key17": "4SZcbrYeGP4HbdJ9fwcXWuZJD46meyKPfDcn78s4XGzf4nCjfnftmsKfdzJdWhsfRDJcU2Ye5yNC11o81LUtscNW",
  "key18": "4BCqg2azxsmqsJPqgL3ixwvZ8EtUbpfUj7A7bcKxUGZiBqiffMZN6dRfLLfvCV1tGFGx3i3hbggLYtJ32VYVCveB",
  "key19": "ALN5gQPL2id96ak6h2e8WD2588VkWm4vFMeRFKs5CVgLH2wEdQFrZ5Kaxyw9rKwq8yyfyQKyExmPoAhuKJr35pQ",
  "key20": "2E2gZw3NFV5Z1KSWesZXuHHCYe5DtUjXcr3rvqCeC2GWbuUCCvmySqoHxMBFCqQV2enFSfDdJiaJfruR6CtZ3CwS",
  "key21": "5FK1UQG5fPdLG8sJsJ3Y4CdstroLgbpBXtaHsUf29UqAYmthaN7imrjPdxJ2XFAPdtHifjnUfgS5hS97st6LkMj6",
  "key22": "2G2j437ZerzLdm2cirRqFyoNA4RQ7nHNY1Ef4XVdQVt8pG2tYhty6YYytqBy6MVvsY5XbCvDHss2soaGrrVph5K9",
  "key23": "4Aq2fHho9gpSMQScVf1Rr39sBPwRwttkK9Qxqw95bLwhxNcxvzMFM8zF62hzT981kMs9gPx41D3Ere2mL33QndSD",
  "key24": "2Zw2f6FgfhLdQuo8VT5C6ujTCkRniXbh545hKxP6cNjUyjzhvw5eaHT6SM6vuVzi9UYHAPqg384u7EjdLGKeaQ14",
  "key25": "HBfJKm9XsgciYV17uS6C2u7HARoXVpY6psfr2j5yZ4yLSNFuJ4fqaoxQhjX1Mzn3VNFhZcEKbKxCNYpCyXoh9vk"
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
