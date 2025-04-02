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
    "4UJ9foAKpem7BjvCposh8poEwP4SarMowadUehGNWaGBfJSYKxWJmEbVsvKHRhGAfZzXkFTtcx1nFGnUQHCULDBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u9Dvwyq3PwhUo6Zethvb1KaMiLCvipzPnwM5zQnEbE55Sd4K1gDaovgWTyZ3ahGUxsYm5GbCsmWseoK1KNuGzcD",
  "key1": "3SU88VZS5z6XTHqJHZUeZA4o4A7ED8ZjzwDE9Y4yhE9bZCDhhakjWHToLqF38jCre62paFsxEtoSWSGHarZjUsTg",
  "key2": "3cbUfXPfGUyexsu9KMwM23dnxXuB2mbrUek16SxcuidDuvQpaH4j9GAwXnw3ur36YGMh2oPhymoJ56ReR6smxs4Z",
  "key3": "44xydm9FwqjHuGmUkzdRYopsLFC79ZHTSY1N3CnArgWoeiUFZabPvN923WsjtHgQfWmMFS65j49trvrkHwKNmX8j",
  "key4": "2PAoY9csMbqk9QhbrunmRnyCzRJzt3q2pTxz2Pttod5tyeB1ecMQmUsE9U37AcsZ6rddFsaNNGsPCX7pqUbqM3CR",
  "key5": "3cWzzMGo1TnmLJRgWMWYS9NvF2zaT9Jv72v7gYFsiY3eNHT6a5vczeQpSRetfRh4Cty8p21pv6y6RBZ8MX7bQS4G",
  "key6": "5BnNHbQnBQ9rd4TA7GvyECXYLJAndBU35JduW2A6E75TvEeyJV2XDDbjQJmmRHgX7q67wcFVgEMG8JSuHru4XA5L",
  "key7": "48fgoXtYpaNiBeMS1bcFDUMe8r4biSsXBMSYe9coA3h8KeVjSj2e876kyrQ48NyAU6LqEP9ShRH7VAYno6WQ6nXx",
  "key8": "2vQ6oGgJnZHBRn66WNnKarnecM5pgViqXPg51p23MF2dRzJd32qupWhgCcdBjTZ2m59vszKkJJg2zq234r7GKeqW",
  "key9": "5PoEABXFfkNEmDJYS3ofFPYpjXHE43CYCXtBThyeiTDZU9GjJa3LbAZD3SdNZo3opjviHeBJNZbo8UN8twNuLn9P",
  "key10": "4dtWz2HCDDkCHecJQNGHmfAGfWTWChVucr4VXnAQvdrGM5XC5pc5LCkMDxca2hkCuQUyf71TgVULP75JaT9ZgGNz",
  "key11": "35GAqaeSKJMVDUuf4HZ499q7aE88ZgJYnRSXe2uxzgdcwCFRarW4Rn7FqPMwfZJDoxYrHh4oV4Ff1Ds1iBAUutpn",
  "key12": "3Spg2h2BcJA354VGqkypZGMp4GqLqajXjP7bd5GyWCk35ohfhd2hwzwJY6riFzGntepTSwyMDRFemhQNUWUCckTp",
  "key13": "5yK59Mkcahu5Ccb1w6M1SZ1jaDhxoam9sKMKB4ZAiKSJdLQ6Lw26thECri5CbXAju29ZnAbVvwLLAm8HA86w5iCL",
  "key14": "2AHHvJWRnDbf5B3zB6tCr8FekboU4qRYWf6gbQ8dXUppHFiERhVtkNt9aH6xKzu978wpwbEi5aya7AvnwTk4FJJM",
  "key15": "2phXzL1xRf11AVSM7tcrr1oiA44pX9jihnHAUek6PETjNrask9nBGaGqTaNgUnH6rEF87FiUVgkoopGc8xscEUyr",
  "key16": "3csQsuixc7chKdhuuqzaLaYyYZUvVEd8nDV1Cav5MSsKdzstoqEkCatAKvb29DoKY65F5G4f2Sg1Jg3Bdb712fgs",
  "key17": "4ecCoG3gjSyiWsvxqcj7xY7DbMB1zYxeCAyXbxctkJRVYPmtE85gYDZqbH3Uwm3PdEkbDTobu9xQE74inqMHpRdY",
  "key18": "3iyX6jNcK8ZjbX56cTaEzYWuRWiqgmfMnh91Zz2TREDVdHYF4a5NFBAk7fwLCqLAdUxPCi4eGs4o8e1uYyQJeGeE",
  "key19": "4GAsMkTEy6CeUaQhMa5znvpjFLcPDkYcT7GEk8cpD8t8JxCDSPTBoVVvd6bDGUEauaxwTCveYpE5S4856Nf1MWWf",
  "key20": "2HKMsa7d2D3y4k61FAgWXuy95VWJh7VU5RCCvDTRResdYRs8qYiviB8z9j6PMgJJg9LMqsexn1zjkuvbi9VXdvX4",
  "key21": "YEUgzKjZ56pnHggv4JmoagBqw3KD3U95bGuNLDbSWB1pdn5PAGLfXLdnBK2eBPmcXgfyJY4v1M9q6js3WQcRhj1",
  "key22": "5Mt8MTdSEqSB8cDDkkyxAfkLTYW9NE5xjEJnQ2vyGyQZD165pMT75sV9KbGrchTaP2e5MMn9SGhseUe82RY6SVnF",
  "key23": "9j7kM386J8KbQE9Cnr5WRzWxsUDrVvfmnRNSEVea2br5YPLLRkGawt87XURiiMUHMJ13cdFq2CXjb1YA55yduLS",
  "key24": "3zk83gY9oKvwbFqw8BB2tWEPMU2BHrv6MmPuhUuxw98X5k2wHmAtCzgM5T89DFw4thCYq9rmZAZhoiYoem6ByBAN",
  "key25": "WGhgXQxmnqiVJnGwR7bnjiUZTgyfrN9eiou63zXweztkQGABcG4oNixS9JvEMpvnZBUonm28nMr3uMFdFNjS3pR",
  "key26": "3fHXyy9CLMuuXyLsXZG6PobKZsYU6YmjDBBSjRYm3iEVhCFXZWqLLy6Y3iFZZ6Xhpu9SJoEmhMHeHXhSvurGW8yN",
  "key27": "z7wfDMKgDfUacR9PjzgYziXHrG888QgVUWcVNo8MkuCokfmmSrfLvs1d1pcKPrfPDo8sEvcmqwYSQZCUmJQ7iJM",
  "key28": "2991gLavCypFF4UxgDCrXr3DSaz7HS6UGv4ULpJX7ZiMnNU83PZEjqZ3CoEoRLDVTyzujtC2e7MYWiVJGMd4iNz2",
  "key29": "3grWNzaxbWchjPGXLB12qVLktWZdPbMz9Sq2rD1riJoUGDUrhguTEtsMBVZ6TbnqPTHeZK4rUCAY43E86H6o6Zb3",
  "key30": "2FPGM8U3BfFTtEjLw7DFe2cHxjZxgWQ8w2ZdooQwwr4cvguvqmuBaNrco3Wgv6HLfvRz3h9HfeMyKwMNnRzLUUp7",
  "key31": "37Hw4NrdutjPW8kRZT3eFeXjc4Yh6HumFp9bXGFxpm2nJWpKAmzXNnCKMXoy2xEQS4QhMkg2CCk1F76jBRUXojf1",
  "key32": "2N24CuPVDm3UE4fgfw3pruqshLSUTtX3x5c9XzxvR8HSZCuS1dNwqF11nBsLyRx9WjqpwriRnbnbDuKdY5LzUKgs",
  "key33": "5RhwzHc7JRgnftpb7RZsrga7asMpDLsrXv94gdLDXr4bBuCmaPEqsgdWojkm6SHZbSkh2qY9guZdnRbwtd9uZFwY",
  "key34": "d59hEKBeZr6SHXwEMJA5u9nF9XhiG5t6pASKgpYM5MYe6K9NfhdKqUmGcAMdEWroffgrGPFbdrfrdGNbWkpoqW1",
  "key35": "4FmUEzNK2A8EpGGAzJuyyLqf8AtAZgijbKaTCwxBg6myKLgsxLVmjrDZT3iqL2B66Xzw9buRd4sBkNNvmTFgKjKv",
  "key36": "4z97sEbKVfzX1UmE5myvG7qaGJcQSLnkLcXaXecsRXXLwgW1QZEexRaQQL1Q4xXgLgBbWii36pTUNq8MaEJxuSkr",
  "key37": "4xpkfRM8X4qSFQnHRqQ4KcvPTrq5LkPFh3Yj1diryFfhF7K7qWBeW2HDtpWzbEQcpU18Mrpwx7b4Dm8SKNm3QXps",
  "key38": "2XkGdCrQ1c8WWn31PNzLTudA3N744B7Lu97j7n7w3kLQCnetByo5wz9HqhmkntD44RGxHgN5rpzcBqSNpuHAkRG7"
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
