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
    "5xu15d2NpcWgqbvXFNqJunWVczp8idwNceUKvuRpYbxLYDdTfj1DymJscxooZ6MvwDmnWPZv9g6kUJdvkrswD8xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJCaC1GiDCY8EY6GgFam48qYQfzBxGNUKprcX61amnEpu5VvHND5YdW1eKHiUnGCg1tedUzyPDKL8R3bsVHh4Sz",
  "key1": "5CUXNxCgVdrDtVff5SStKmHuuWSxaEQQiupzxLQhvN2xeb8JumYcvU6LaNrdTh75WzWh5fgb2GeL95eo9zkh8qQc",
  "key2": "4xoFTA7NGKhNXYVg64hCFZ1ZEz4hR9KinUL4PWeBVRwTQ1uNq6FqiHgWydkRnz4neBvzBNE26ubRSuqdByepypGg",
  "key3": "38tSN9Xt97GTQshPwX8gZHRMfi8vtgjDbXqr5Bxb5pLu2MQTUusBGsotDZCTVThmqJPUHWhRWNNJD97q2ZJpEbv2",
  "key4": "oKankiLs3fUt5yaF2EEG74qiyQeuagbTm6YYNRSy77UADAoenrQt8FNnZm8kDDRgA9HQSLdtzhTBqmxiWfKZKEz",
  "key5": "4qEQ1D5Mr8LmXiWmc8GLVSAuownPPjmqfPk7rJ5bnrRE4UsFAUbF6cv869ZBdac6xysuyhMTvKG6C6V4sPYCuaiC",
  "key6": "q15xaFcgt3mNQpna3ib3VyKb3wMeXnXBywdQQvMx2poBGEdQqkt8PC1aFQvreMGHkBUhAmQiKSh5u4egsjDK2Jh",
  "key7": "XuexDpGpH4HZaEq3zQwUjDSakHacCh1xCZ4hYTWVxV3he1wC9jg5mJJ4NwKyrHLsYQVuD3CKxz3bRKH71fWkWuG",
  "key8": "4PrNuRN4foE4xcUYxCL3SLjMMd7sHvtnc6bd9tC9XU1WDVjPbaXvHGNfdMRqR9unTEsRVhZs1Mow2BXrxpxZGZc1",
  "key9": "2vA1nB9mc3K1LiHTtugbJntFWa376L4xKjoxCP8viWc9ihEdSfLTxwXGoGq1Hx32zWUuRXhJh7XXBHp2W5XySbjn",
  "key10": "2MHRS3MgW3nDENTRLAQ4Tvwz8aFpUsWcbp2jLV6ec7H7wSeKKLyjZJScv8KfWkaXJRfF7QVrUU5ogf3NTAhRGh3M",
  "key11": "3mYXm7zRr6rGnDt1w7sK2xSSenCjccRjzqhvSJBby5PpApHFsTHAkZkPXDnaTBXn2QZshTi57dcm7oJrr9Kyas8b",
  "key12": "JzBtnwAG3tktNUmhQX6B1aYW6vPF99pbE112HwF5JzcjET6FL73zKNUSwTwB42sDq8DHT3aQmo5axBYUMDBGuvt",
  "key13": "KvFHFggno3yJaVYej2nDCtb3ZY2xSdFJ9QBiCk86Y2UYTQASgmMaprTF6Hb5X8C6taGbgevdMr4GjzB8z7vfiPg",
  "key14": "5CEefDcaTucQB51zMqTntCBSJMRF1bnGVdv5zC2jvYRTuQf2neDRQQhvsMwXTiHGi7YgQn1aoWXpDU2AmwzZahHA",
  "key15": "4UReYvzBo5HnnKs1C78vifNpi7k28oVGdtCaDXxnQZ1E1vH2oadwUwkndTXjXkBWute22EkZ4Y3ZMRR7y1D1bpZe",
  "key16": "SnMHno9sT5k9mHQ8ut9ZDgBKgb8bQ5981rMhbkqAvz3aZH36ZupjvtuUHxajVmW6TXNvYp2k25fgrgtLwnWhaft",
  "key17": "5EcVZCUcSDDb7Lk5iNwgnjG5F6LqbJKCcXPHzNMvrUwjzVTP8gJyDo1yDg8yubwgT2xBo6h759A2CbRfNuC4Y7Q",
  "key18": "NFLTRAuSGpQEwMV2MRTgzq3Cw1aPataVgRbiz65vCquNKEYcxr6MjSeuYeaTouvor1Ch2UHHZBEcv2PgQSB7JUF",
  "key19": "3kW9zrjs5NxjcaQvNvCA74R1wJan2BBsqs8ExY1vfezBAn17e2deH4KzfTAJKPWivqaeUjw6r7DHUb9jDBtKLqd3",
  "key20": "rRT9aZt4uqbBkNg82ZUvzjt3uvB4kd8FFqANmhSxg3aSm8P5RnoFvhyMF1KSDo2si7AmbDVnTk7C4VD1eE6u6Zn",
  "key21": "5K5yPqNQKHgqPmbyfXGwrfkB18jWBnoNZfmz8W3QesVLj4X3eh3jTSAWrLQvCLywq85tygaJ4k6pDAuA7hwF2H16",
  "key22": "3AYNVt4CwvL32UiREdUT9XbfyC2AM4J6s8hZbhVCaHkYJpnHhXrqLkMqdWQs3fvmqNvWEQX49fEtXDYZEypoAqxY",
  "key23": "AdsrwHNX9WZcucFk7u4TxS6512djRHt2kiGtULeCEZejjXC9K1Xx2H1JzUXmEDoM9QSQs2gVDvbvj7YdSFry1Kb",
  "key24": "3qwu4AmoEAsVeHjN8mQGWHYV6QQxkMuehbNEsSUR9efyEFeh6uvDMTpwLDjzMgpPdFuhDRUchDhNuJE5Kv5SwHbY",
  "key25": "47P13f2yykdFS9n2e6pqhzoTts9pcEkeVPBQmpfnGM1mghg8TevnCM73ny5sr21a6JPyhnDb3QBHNfoeT29wYPZL",
  "key26": "5G4HfhVQ8sRXszZDR5EDERurFF3nQcHGJMufsES98dGp172aCygA5wKTF2vMLCTtThRaaGYGDwD5KSf54tvmcJQF",
  "key27": "2nW8M8Nznx2Kzj8ZHhhXDfVmqRVe47669aJkvFvPCKnqBuk1tY64kKAZgVDStkdyV14C7VJZXDwFYwEA74eVGxYh",
  "key28": "4sNd6spRwc42BUuewQibKVtGRR75XoFx3m8tKfy13tggegGrZ8H5dGgvD5PbWCVLaWeMEC5wPCBEyzk5rfsNXpUY",
  "key29": "3m3PbHccfLeMmQxuHz1ZDor92krYJhBkRounxpu3y5R9NPdVsPkf3UCSzcDB28j19Ksa4QNR8CJuAKtUosfRLFxb",
  "key30": "LdjKKM2YCdzGX9Ert4CDRwnbHiaFBjei3zGNHMsauNLtvF2P3xvbLLdNtedwxKciSZz7PC2qiKo7BgEHjAajiYh",
  "key31": "3yBkU6rHcv6rqQdrMmqxG9hYpz7zKDkm8vC6iuhxP2xqD9QsZ3b9LkfnyUHmGhvM1ngM7Es2kgmhRd68ydYwjufc",
  "key32": "u8B5vWui4FtZsBDddiYGvqgTDZKsUKoe1RthkEt7uxkWiPsxz1ZpFdCw3UPb529hBaYHNvmx5fKXYzcCpjaVvu8",
  "key33": "4AvGsbvcoZSqFy5XWB6wVEFn7hJUy5kwcJbvjphv6LZqbjnEwx69acvpZZV4SrAuwYjoj8qRgJdLMmsHeEKgwCQ",
  "key34": "a1WXC1kV3JnD394bGDvJYHRg1DS4DgnuP4JdrnWSkMyEKGW1fMCExmUZcnFDtQaVuNEGsGoD42MKcFXFcLUsKi1",
  "key35": "48P6PCL2XnXJ3RfUrCL4onYLMmBfQWjTwHNBALU3kDHUbeY8z5Y8t7J4mcn3MqSN8JwcLtdyYYsrz41WaqgUKYch",
  "key36": "37DJ8r1EE96kMe6EnYK8tMrmK9zgBN8DbQ3qVJng1sv8iCbYnQRo1CDsXU2gLAPTUUj7wDEfFK92VjDjizdBqbzh",
  "key37": "5a3HH9bMrs2XrtETh6dkmUG12LYDUSeum25QW2aH4aBeA4fAqhK75aZxSBjUBrqZ9zyLFmryn9d6JuCTEA6BtoRk",
  "key38": "3UVTvz1AZWcP3eBhAnRqboTbVKD8XDfNY7E9tJfCsSeXiLBXcCcnwfd2ibuauenoLd2Me3ugTmjMVvWoPeuDTHxu",
  "key39": "RwYDX1ScVXbW4UiMAdkfpTU32fw3ToztZaf7tshjKZkZWUwAtveNUWUevDDJVdCdzNh93v4QkYL66RkUKfQW5np",
  "key40": "5hBNkog8wjGyhE7pCbe73u6d8KJojfgFbtwRuxxqFGSaR3nsFs4aEC9jLBz4K3pPJY9JP5H9E2f8L7WjbxUAdjet",
  "key41": "3XW8KzocwsJcupgNAsz4Pd5VgU6rgZhr5QX15ZQdGxnNSn5tGqUgj9MSnc1MzZnACC9nkRdXwvSjyhqYjWW4QWtt",
  "key42": "2Aq26ZjoLKZUSTjRq1NhTvJmzSpiMQw57m3ZQGPNXZvkZQvf6Xh6k1Lai1ST39nMdgfQPwySYPh3Uey9A6MtLGQG",
  "key43": "3xS2cybWZt7EfYGNqsYnHiSREYcbipbgPsUzNrvUG7xZLPHQVgqVg8LbwsHTjuwWeoK2Q4BufrRoeUSZSkHW14rU",
  "key44": "2UCt2HB9RqH5cMKBDgo4jZKY4awYMpqMVeEGjAgZqUMJdzHosvzXfhbfzFfn9Saw1tjJah5DRn5abmRRi4XiLxVj",
  "key45": "3TqGko6rTzTvFfUnNe3BXpTYMhQ2CR9DB2oSXizq7xgzR3tvwotnFuoMirF5BZhPNc7bZ2ZnUjHXDHj6M7AXrBb2",
  "key46": "Mn89jzU4nCMQEuwDx64FZeQH8Z4ypW6pG8MGCZJGAFdqvw78GPwcqBwJe8JacevFE11tGvv5GTQBFUa7Vkz3ePA",
  "key47": "3awcwd5A69K28xWXMG714v29Tykc5WSZHkHqVZwHtWtKFxMXMGxf8i2pGZTNiY9XCp5mCg6v1hTkNwmmAKrxhYMy",
  "key48": "5J6Fi2mZkxxoRJspg277YssvbeQWcn7bkwiFMADmgdnrFoNwCQvicKFfu5u6d8QMMFkZLhUekjdx2KhB54YjYTDu",
  "key49": "2YVpq2SR83YHyAcVzGZRJpMU8xZWWfqT4AdyTVzrC8GiqcTTHpWuBcBTpSMjFpdBcX4xpyfCw7cJ138LWgtsTgAq"
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
