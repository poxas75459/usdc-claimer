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
    "41jQbbXvf6ziPzVHAbxviZrtZDA8DFzmTeWDx2PGXcWjoTcPPFBZpuwhmeXApV4VTPpaaXuzuMiJwAve9XhocKXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtS7cWd2mSSEeDzWEe5vXhKx1B7aCJTB8FcfHa4HcQ4CK1pfu8yTGsBB4i93ALaeAPKTGHGp4F3sPmvChQhQ5sr",
  "key1": "CFnQtwKAghzaFGDW3JqGUGp6Mzac1cC8A7zZ6jfCWkwqTq7t8mo2uHsUibsodBAxF7Fc5zT7zQqokqC5jd3bpbE",
  "key2": "4AqK5UrgiXfZYjVgRJKr8PT8xQcNbCsx5qbmLc7rtLuMZhDJKfqLPzZR9CZB18dGRoV6bZ7uUoUKJhXhztvsiSV7",
  "key3": "5CP1RDdxHoHr3sbiPo7SPJTNkjvqyTxGjzU9UQEo9TP14SAQCXS1SURQmBchTJXz9tZvEsijXjR9aBmzAnCvHJTM",
  "key4": "9wrpsgzXK4mj6UMdiijkxZ19ECKvwRS98QEcARS1cifhgqg3rvSGdaqK5kuRiXt3Nnkf1qATond6YHapeVHB796",
  "key5": "XWWLgM3wzqN8NUD2mZLNz24nQfH4jL53dx4HZdi6cGVmseTdC3ME42oZYpf5QAaiN7KQL9PrBti9ohnuSHStaRW",
  "key6": "F7bEDZ1WaTR68myw8TtvHfzryB59avJnbV1sXCZRicpA3r2TdprHRAk31PRKxM2Bh81AyBsTjNXSPpeZch8aZ3j",
  "key7": "4tJ3DudJbW8B7Sdhx2rMBTffqf7q1pwWLBURNEcDDrRD98u6aeFfktnycUzSEQCgwdUMa6HZLn3uSaeZWA3rwqj9",
  "key8": "4d2WNzpRKmAkU8nqDfR5UroH8A5xHMzQj2JB1jYfAnPjzcyRgWjTvZ1Wbf3hpEkUa9pEywJucZu5o2m5KiZZf8W3",
  "key9": "4yeYNW8v1gSXDh2qWMgCNio7puKYAJN4mW5dnBQoWXtLJMKteH3woKC2fArwcp1qobNrvtfeT2umuHtPNzf1unsZ",
  "key10": "4vr97vMoFgMo6Ta65miUjt72KYEiLyVhTenMUeWXMreUNPzpeChCmKbSwS8n729Mz75rLkbQfNxQoM6jvd4z96qe",
  "key11": "d3DkTnzU8sPEt4dPDW5J2wcJD9skA48vBpz54ENqHRgEZWBVQWGL8siCZoAVUDm3Jx9w2pNif5MKk1KAaEmHs6u",
  "key12": "5iDtgk7DWuYkWhQVP9RWCBdtPa44LoKjuRJ1fp1ZDwYZFcfdVkMorZu5UM4jVHGY6VimmG5hYYiMSpjcuyb9zfsq",
  "key13": "5RAMyFuRu1LRCptbVcmcunkA6bNkiWKx8gLo3CnAKEXgAodXL7xhdTpyRT7EfTB2Lr3X8ET8ceskiGM4QbD594Y9",
  "key14": "3ii28EXGMTyfNUp7ZHDi1TptDG4DjuzqbBZ2E6WQ9xZLFyX23dg7NCDwqjXxYhkd1HbPvSkcVq3wxBTTRfQZAahb",
  "key15": "2uXT4PcmobT5yYiYgKTz3FGwgxcQcxQ7meypUdeP4eZpzCeYjkWbkHyGPR5CrnXaKcyJ6VcKCQFxmYmq4Pm3WRHo",
  "key16": "5KdGAh9kcE2du2HwLvPW5xukBFxV1PnTfKT3jZmxoZw1CC85DFm4EkDYNKW9n1xsNVw2swRTAUYytoZkox4MC3Vb",
  "key17": "5Hq6CzkHnbmpNKREnJmm2fMYrB4wxPKPps65Qdq8YVAtE7v8ebNAg6gArV6Kccqr9a56btqR9FhDrRXt2kKrozgA",
  "key18": "5KtdDnE3sTBUQQ4s1GFSp9kg18WVGirr9U7acySy34iVdLYPfRU32FRhywa19j7ZBcEE7JayLVT7rBZh2RvB4bme",
  "key19": "4gPd8QK1xbLAitnnUG5mRmZ14mi12EgmSLNfiBErSbrBAJHieMYJ94GA2qTKhuJu6T15SQrBuF5cvVYjeMbWuhDL",
  "key20": "4Hywqo7Rp81ZJmQvhXsCNZPYSWG5aTTpXwejr36GWeDtvW2SPbrnwa6jhGj5fRrZpDDKeWJjXV5UdRYsti1HGqXP",
  "key21": "4xzzYEYZ7AgGnjamEE4FTS1GreKnS5U1uMKZ2ZybNrfBB85gjZoZxkxBEf4JyMvRCJvTQtkQnEiwJo9H5anptVLd",
  "key22": "RACwChcaCkwvLbygP9hSvgBHs4PCnu1aHHzDtNQiQ119iuFeaSD8dnVScBJDvj5YjaGtdvzJ9VgiqAFfk5SmCCM",
  "key23": "2HR4qLbF9PnM24SJyBk5gBvVAro5NhhoW8kuCE2SPNz8XzB6XpEitACy8LQgmj4prHYjAUuV4t4whaJ4b3F5Gkia",
  "key24": "J5LgJMDz3grT7wb7yAqJ4VZDnGrqjiXiVZLfWG6Yzd94KDpgRDgQh5V6c6bU6XU8zbY4HsFnMN1A1VqmXDjyLqN",
  "key25": "4De8CGXw9Wi2FwqPKwDcVtxyJdfwXkLFrRM2p9CKkXDrvjuHv1zSeHsAQecu54jBZYws1vXHyEMZVvSF8T9Uy3JU",
  "key26": "Su6WBG8TSi3RYGZGuMxzEB8nQNuXVrrP3dukXb2Y86YSMcsdSUHAx6eF5T7aCZZZ8qPbFouU4rD9e8wKtuC8TiF",
  "key27": "5YqfqNtRc1m9C5vdXXFCyAx69qtCLM5vkR6PMUV64eoYZPQQr6DKb3aDuxwnHSt3MHrTYZnNBKVfWxw2SPQdJDUk",
  "key28": "2KoQWQFg56jqUjwTdPch7Jhib1qEHVbp3EbS3F3mhzuXa65WcfdskdxWKbCnE9jccxKF9USABJmcvrKDRgv6ntR5",
  "key29": "2896uwGMmrPAJmrxYaPoWtCGnwGdE8m8VPiXbz8AnktapyJsmoC1b57gPkgsfRLu4pSnQaDUxj5amtZLqXMLkr9t",
  "key30": "2BXiRfb9ugh7vqu8gDquj8duGnNA7EdArF7k4hRkfu6DczFvipsE8oPhc2N8AJw16AjLtgGhVJca81xULa8JZpzu",
  "key31": "4Pq8FNVzLDrz4ucMsnqHUsmHH7gNunG14zfvUMmnWqHGGEZZsG7Zjibm8pdPVvfJD3nvWT4NTdHUJhYsKHskAD2B",
  "key32": "39oAvFsmGcNhMUWZpH5c3MCnnATjJ64ycRnWyQJntrguLxwb3CMmYAyWw2K3LDK4p743PjJW8q9mLbWSMaKb1jE6"
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
