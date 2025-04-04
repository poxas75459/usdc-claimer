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
    "2apNd61w6T2dr1KFXVwiaaqN9BpRQSCaq9M6zq7g6oA8ZbZkZAftE74nsCWhycQmTgFo16ASFErVm2itp4hk4gfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r88iJBouhduzApQVWNbCkYBR1TXbbdNx3Wkm3ReDE3JZYAbmzyPa3YyzHMsvpdUizuviK1Ttn681x1kTd4PAX5c",
  "key1": "5hAiPR4YfoWyHjvvv4AMWmAqFYMhaFWEBekrGXjs7rYVT8QYTN4AMfaNsNr67NiNEGS7HU5UiVnWGz6RHRmQ5vWe",
  "key2": "2Z8Ce57u627nnCPbm3jXFgwvbDutK9GxZKVGRMZ6YNEf3jqA7JkuXrDvoWh4ZiCdKgCJLCpVRLiK7MJnr4HT5Kxa",
  "key3": "61oa9cT6zeJLpCFvmFShoowUDJHmbCfLgGp1ipMd56fkdkk4B3DNGDkvC7RhGddVFZZPZhA7MPY5rvCVgM2kZUr2",
  "key4": "5kQ6KutjZDt3AX43sR27hnEngfxwy1HrTNwCxhKeUXsPQBudCGoUik7y2mVQGgmqmiDEsxswwuZbUaT8sTHvZHrP",
  "key5": "5hbQfSNJWZYnQ2ENDKU9ZSKPzRuUpERoJb49XLJ1Fc8jmkwDbQ9CUHBE7mcbgdhMKDPT5w4jHVoh1dz2HR3SDSoq",
  "key6": "4fCc2mrkoCghMpqxqaA7Mae5Z3FPhscXEhm25HHet5vgvSMCKNFJdNHfUZRwmRaHjpfdccgtD5oDjHZxRXyGvVX",
  "key7": "3PfBx3rqksAU4QWBY6ey5YCqJn2HDv3Z1KZKUnKrAoRb4g8zNuVziXg9aNH9YhKZ9P5g1DpWYnBkz2wjez7AZpJt",
  "key8": "3NVxgUeRfzbkNSQ4RMmn5CRdRbi17UQqyeBszpjGyaeVSNkMvWyMpDxrPKnqunxs7SxDYDMGzxwptugeQeBnhFVw",
  "key9": "3WKnystDHbvHCscMQGVYW8UikHSPnaSXSpTmTJyLyLHhHeoNe85natbytf3ugS4EpJDugTtxbVdL2THdiEy27EC2",
  "key10": "4aXkTSNzBMVSjnVeLRMgS7bTRhu3dsMyeUFWT9XZ6gGonST8xv5ssGxstkbh8TMMTRGW5uEfqQzQFbPeP75ZVfbA",
  "key11": "5EPTwgXNYhg4TBKx5EY9fExTkmQTGE8JTSK9xRA9R49Ct7GwggMQAzNN6xzgAd7fVNm5ZtSCvUUbbS9Ec2ohHWre",
  "key12": "2qGayqaAf1vEwWfpu81ak7hTq8YQLYE3Y6BdGKkpbbqpZ6PfGsU63vm4b2VFLKXyTog895CVq49bbR31mDog7KmJ",
  "key13": "5XgcHaHWyrUHeKzqZhTtAjA36Na1RerbYkx8bbj171LpFaGGavrCRkQ7xazDc958GKoSm1AVNjRUEH5S7M9c5WLD",
  "key14": "5p6Gxb1FXFESk4ozrsho1QfZ2FRp6sd727CviRsMt7UajBEJ7fHx31oPdGDcotnRtFcz8YmHxvG2FVX63yn352vu",
  "key15": "324vQ1VaQ4PSm5LQT8a8ee2AtmZEcJb2eaNt1hCfhkHUGo8rRQbvtnyGnfxfQJ3PKEYtAnmLvFf6BY6dYn2Tu9aV",
  "key16": "4Sck9y7PDakQchCrHQnhPrKanF1eKqgPCFAf7ru1arXuxAJMdrzK7tHTCz1vDvv3ZmsAYnmnQwnKeLVMKWRPa9Qf",
  "key17": "2KQdY7c3wAUeLK3b5DTWwgpy3zJvLUe2rbA62CHCEaE9BDeYx4Yi8qjpi8ibaR7oPgDGsfBru5HinCJyYwQtHqQd",
  "key18": "5wxyjYFvV5GZEPhjr4kBr4DgWuJWDbs7528drtkmJKm96XK2X9vHe5UKmvMir8xjwzwG1V6JAtfRwUH51snwTH2K",
  "key19": "5pHEjoGj3DpH1fuADJBVjp7Veot4QvdbREH91i8nu2udA5vXsHeSqyUr1U37Nr8fZ6NzFntrk4AB8FULWqnYKHMy",
  "key20": "3U95Qi7Em9gmkKSZpAHvPNa4ejea2LvbNGWeQdyfs93pLGUSPqd5aQSVNXnw6pc2PZ4bLN4vza3GgyqV5rkpVwJn",
  "key21": "4s1w2aGHzyu8uMnMyUuBfGpKmRkTMeqsLoH8TWZ3bHSQLgWNtijwffMwaLHf28GF35dFH3MwvZmYCa8K5Fh3FW54",
  "key22": "3KbCQ2fiB28cGBYT6gJ5Z6PYdzAF1cBNcsZV8fvtANgHABAmheHDSc5fgNBEGVjL4mb5YrThPkZmeUGVSnzm7KbH",
  "key23": "57B3nygE6998ikdECoiUUowCc1QB8SF8xNHNYKAw63cJMma5EpRTKBAzB4cLmTK3yQMX2aUbsoF7ygS3qf7UY7Uv",
  "key24": "3qGmTBm3BX8iY427vt4Vb3EuBnr7u1R6hNFP7AcTW1SUm7HB3sNfxGip2tWDPZru1y1r3Z6N2Q9uCyEjNNauAghB",
  "key25": "5BMrF6sajTDzkrHq5SKa4kJUBSQ4nqNBof3eecNCCDsMPbwDvSgnruvPcLb8PGHSAYzgyKdxsi9unVtsh18i1JCv",
  "key26": "3xeM3rRfn8eouxr99J3c9ViArT5DpeKnYfrbAAT2zkih8fCQEJZZXgFhSigHMAFifRNzFFdWxa6X65H7LB4YudCF"
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
