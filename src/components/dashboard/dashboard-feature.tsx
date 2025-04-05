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
    "3seKS2u976kc7W3hRqMojUkq9BpcPdYqSCCydkuPTLMY1oCZ4wtLtCzc6VNuhBRoJbBVh8jCCYk3WgvMZDQUEZ2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5v8MXcd2ZMMwC8r2WLTwWTMy5CWbQYbLhgVhhMcHVkfecZJrJtLMngU5dnzQ9Cam7GwatE1JEvcFAwtBNK7774",
  "key1": "4QWmKcbS318qBrjxUxkznR1Xm6yhzCSo253M363wi6xBxpysGGVmdu8dS3h56Wgys2PJjjyuaHFW6gy7dZLxZDvH",
  "key2": "5dK9n5NZbxUbc3ii3vGFqHJBg9H9ndVpF5fRbzbMLhPt3V5Zpu5VUzcjuUZJ7dn5B6zu1Bzt9R8JvwMc6rakamcD",
  "key3": "4PnTD6TXutYBuSh67bRGfjctETTichnyvL786U7c2UdNE3K3WmQ7Y4oM68gdGc1HTRW8aUQGqgwDM1t975n1dk1x",
  "key4": "2rg8dUiByTJ4ff4CVMLxR1L5U52haTvoRuN4WdKq1nhd6aGGpaA2NGiRWYoQ1hGMmxPdUfM1ft6XRe4YZsQCu8v2",
  "key5": "3yooiC1b6q96Q92jNvnzpjoWwM5eHvdXmfywHMco6HfJHZ2k4oBdzucfLmuwbF6Q8Px1JHUqDqW92UhCTB1ZahVq",
  "key6": "2nnnq83RUthRPLZpLyciCx7T8eTmH8JHv3sSspqnS5QVZCgUEJdfmmU9iRD6L4fUnhgNaBQppp2BzYtujoJdg5Sa",
  "key7": "5c1vWZ4aAaQzkFzXaVYxZPqmYpNKXNw5xSCLsJDaEfPeUuyAqHGNg1pv66Wvvu2iiMDsrsnKgGUrA2G2CbK1y45L",
  "key8": "5x2beQG8ZRCvTbaMYK83Watg8YQyB2XXatcPJsPTs15CJdBhPjZwHcDkS5HwbvSipnGXx69dTEpxzesp97stkHjM",
  "key9": "3coxuLPgiv9kFdiJzYuanX1vrbHBYjNfjM35DZWtiRGpgP8hdwjpugcK2RjdzqepCZdpGYiHbXMByum4VTzwYaK7",
  "key10": "2VEZNM8aBhKYqa7MJzar66ePpSugJYFwTnfr8PQdPFzUDnVH152vcpUMHdCvafRhrqJvbSv5KocoAXFjcffhvuk1",
  "key11": "3wJZw68dZUGYjHkbmUbMxH6sYSou7CnxNqnFmASqfqHX73MjsZQyEdbHJUXgzQNLRPvNkuxS2A8m1wJjVwCWcvyD",
  "key12": "37DY1Mgf9ax3fMRSYDZzXZDC8o5muwcJjS6oj8YTgqungiGjKQZWxcx6AKoowqzjZrQDsZk2mZpk8GbsqpCbKBD1",
  "key13": "4b6TSYfRaGtJcsnPMQzsKzJm4Kfnk88B98UobqDP5ZeoSGdSb4GRUaYxoJaUchM3Vd2gTgbyCumedFA8dZGKZLK7",
  "key14": "3C1e8WsJmfZam8StG5SVoAU7vaW2QCQmhpBRYtiWsWw46wF7BVGhhyyDt5VfxFdEN6gzPdLhiinCHZmoAGqvQKB6",
  "key15": "5azMWfocaGbXK1jCMzUA6ajns6WHdUk74Aw2Gd5wtpFDdf6xmUAvHpDvm7ViBECxqV7V3HgBPrGoUVCZqCVS4TMD",
  "key16": "56zZX23Q3dbymZe5uoDrR3NpXhodu9A8XFLbt8ZumXNKNS6aNcsUYQzAEcPaMVXpMqKr74XLyj6jkYAfUwcBuhHY",
  "key17": "3LbLfx3mco4RCca3R5AT1mMzpEgm4vkNMc84ohn2wKpJnzSp2vXfjzpfyUiuY1Pwsz4ersCBAuqH7AvrKEJpxxLQ",
  "key18": "3RjB1dr5PfWpCRnx38DHY3nNy3rF1R523QHEm43PgELyW11r4LmAk4GFyDwuKYoZJcs7ywDYupbXd7gx1kqZ9ZWi",
  "key19": "3aBmVGtYAt7x4Mt6C1MgmZui5QL1EMAXgqbyS52NQ1U7acfMNqLWgVcdxHFLDTSLDhcSanRLnnDLHrM7LXnB4Y5j",
  "key20": "2vRJtfzsbzKt27qnWnjwUrHSBdHsVA7mm84ppnYRtJrBj4B3WoPumAdrg8tVTEVQtKatg8uCgqBXYXCBjERdDjCj",
  "key21": "5WkEjvsgZenWy6rTJ8gMcjiMPAgmp7nmUHyGxFXfULDXxzyAN5DFK8pN9a9m7mNNjRd1sMHvCtBU7cxDkZkAUfZY",
  "key22": "2RP53Wd1rD6jzaKEvsZfZ2EQGgLcqCn8PHW2jtiVAQ9YHq6SFgc18QSfJCehLNiWiaJ44kK22XLAbS7i6gFS5jrV",
  "key23": "4z5nETR8tjgUzR52uLM77EHJXYFGtUsMHsXuc5vKoZnKm4rz7Xg2A2dL6XsmsBdukMz8jbaTnrGJKuTF8HP4UA95",
  "key24": "AesnYUqBz5WVyumKDF2fQNYargbcTn4CpPyJTARiUyqQtMouznF5GpEiDCKwKMQsq12sAVpGgz55pyaRnNPH3FB",
  "key25": "37Q8eQC14eixwnx8bEMZWH8PtFqnQtUmFQsFCwh8hGdPowwzo9K3ADPSf64yMajFReX1ng5pCfKjq794P4fq3euz",
  "key26": "5resqPJTqF4rwghbNSrKtQQSv7LBqyka8wLKrfjUdhCqpZLNbmVs6AxkC2m8Z52YQWgdz9Bcbtb9mkFfcZLGW4xa",
  "key27": "5tCgvkzUek1PSpfTKB5eztGgpTmBskyWLgFSvQWTgPCrsA3xKswg97pALfKY42CL4Bo3pJJxtZvXSpuAY4axNRaD",
  "key28": "3eDTRT9eLJXfFwnJc2XUjUKb3W4Y5eMKUCEr3V2JBqsoPahfSLikdccXYFzYv6QrYLFU1iBo2NTL5HdjbyW2zwyX",
  "key29": "5iZdBSXrGaNpNEdnTpfUKXK4kjgNPfz55FQpgnrNLj5zXwor11PSWy4t2eGVes9xEGDGJK3VoTpqeFCN5mUEDwuw",
  "key30": "37RFW5vUMSiCUopVfF7zJxv86W7KMd87r2aBcPacxsoxHsRCcsyB5wtD2JPgQb1xycgRe4WHtiHQAqDMHBu6dgco",
  "key31": "5YPL1naUCnLxtYy3baNjzRn6v24DdhpS7rFoiVAaWNWGPoyjiG5hguwUyHhNBMPmC4QE6YTLeUsmibjBbD4txpDY",
  "key32": "5U8P2mSq4eSRri4mFaBh8CVZ8Fj3APJhBVtM3v74x97SLAeSh58HKCGiieXeR4osFtqB6YfqYG69zppvdstcgMKK",
  "key33": "XJ757eSHtkkMUMdVi4dCsinnrGJpBmPUUaT365PcV26ideNZshu4UddfE6VEKJscTD4ZXWgZQAu9mfWoCRVgKUe",
  "key34": "5qhY4tsEkf5PMJvDUThA8wAMwPrqJWRgoixX6WFnLNY1paTUNRzhvPmScbVbmcEtrNcwHBrp5wcSjZ8KLXK19785",
  "key35": "2Ptr2PW12BdjjNtMZHEtMtUwZqTgcCdn4dLUFd4Mda3afinUMXYCEiXfuEyMy6LQeksgYhjXGe9DDtg1gGUX3kTG"
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
