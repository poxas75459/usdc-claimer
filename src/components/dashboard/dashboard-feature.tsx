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
    "2XQo3wLXMSWVZmgC9LUkp9bdnw4sPV8a6b198iZVYsPyK4bhkNKE6xfLeizLgQN4XXpuT4pBLHDmoTdEr9SH8Ura"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rn1q8Mg6JDLZCPyMZSWmUN85V8npUMhcfJfu6ArByaVZGj7QHcihcj3qYsF8KDPnPTpYWrnki6rFpKbHQqFM2oF",
  "key1": "3zGq8JoPYg1t91b2YCPBdNs6ztKUtULjjPGE2RMtNir4B1pR2EuNedT5EMzosNFr8mCPHvSe79vxBFrxZ4LUs3y",
  "key2": "43srMMDs5W5vXiA7P8tkQM3H8w4Es97WQUEo4DsP6x4MehGCDnxKP79sNTjtZtFEgYMnJ8mZkEDDhm63fSrd8xjF",
  "key3": "YuHrXQk9YoN2i6UeUKRnPSXUnaDyT9rk1AxZHsK9eaTgEuNX6ezgyeMEMPYDHumGaiLTHbC5JNtbT6z13sz8v19",
  "key4": "2Wi9LmjNMwBQE9v37HNpCm5oHpg1UK8MTBrXDSPW3eBJ3p1CPe5jEHQbv83kgpxsUfSyGcE5y61zyD3KwwppXxn6",
  "key5": "2Hbuec2AsCuUPdv5RHozB2robN3SZK2j4rRgfBsFVFUz1nrV8kWn3HLnmHcr9VnEezFn8CkiL8TMo1c3ZLuvr6Zt",
  "key6": "4BSVradVxLLFmWwJTd9DTpgurRYEFtUixrKGfhPyoYQFpvqrFBsPnmnGFbmf5U8ce5iZQiRuFjH2VSo7Ub7ixDkY",
  "key7": "3nLcjqCZFrgS21nyGhsueHm9BcsbCAM6bDdoavpdnHwZXZKPqgtuEg1eR9Xq8gQ8pdKynwKyzFm44ehjN13qcsGv",
  "key8": "8an2izZaqveDFqM65CKJbreopqgFCopbuPuHiz2Szj4MRmU21icAT6Y5zGPqwDziRD8YKr6gWLzbFdKe5PmRSTj",
  "key9": "58CYuWwKfzQQPrDwxy2SdMJ5zfExqS4zHNfWzZTQnka36UCpniywRJ1ZGUMSqx241x6DqxDzcxFq4SNJvqBouYYm",
  "key10": "3Wh4kx5fTjX8A3npZt5FQqPtcyNNT6PQdL5fHdMHT7xJtAyiMqBRgLsfrT736KqfgxNkhuwGu38hkdr6QbbesWrv",
  "key11": "JDsqsMrRJ8zrLJhRy9JQBoRYXLJVKhdMx36kmV4AzykHhkEjXXSBTWNVkPqYCMzKUmgjiqNmaXeZg2kzFucTxd5",
  "key12": "5N21oojneCPAVuwdHHJHVXwgjumvZpTQKzkE4fEmvEXiJsxbVHqKp4aEwvKCdpx3fDcqeMibS7xkhEvn2Ls5ajGw",
  "key13": "12225uyL1McmkrGDARDwwdnQwUQTDBq8s8yGx6sXt3a9wuqDfdcdayeVcXann8svELAaEt7Qfxu83pr7fgQdD88R",
  "key14": "r6J6rHg4KqmRb2yekYz69SRHeTD5WtZyuoN5Z5EDAKQAC5TyL1L6Efx37v7xpxiMwQmFXpWMZaFNSjptuyhqhC9",
  "key15": "3C8ZYYvWtdKZENtvjUEHEXBjXNFYT2EehvJ3QdAVi3MCyN1hZCWn44aCZyFjnivcsQHiNe2HJhipJFAYf7Zuutvp",
  "key16": "5PxGmUG6yCLgCUmRcCimaVmd5SWnrWc4BHULHwjBsWCNqSkTesrNFKgMfHWpv1AxBmtuzdwvLHKhSgToQK16UEdt",
  "key17": "3BugGEr1AxWkzt7XaXGjxNYJcRmwrZsN5TejPsKsVmg3PisiDEfePhKXwAU9531hFHMiecwmEpnaQiBjYnDs5GhP",
  "key18": "3DkhzL1CVE7igsZ4y3qdsVvAAzP5A1ihrYwBHBZTY3junBKUhq6TYgdVjgcyYWZDvoDshc8EpHqYa4g1wqcFKiSW",
  "key19": "5dnBLauCDiPtxaUtm3wxP2NVoRKyythVozBTw61oWFinhNPrTH9zKrDjLxkEX1avNgS5aciFBZxXGqnKpJz3aHoW",
  "key20": "4rBZk5fcec71MGRumMazT5TAAEoLMfkse821Qqvf4df36DKYDJ4YWfVMoB122YG8mpJwSv2XVZLiAcyhk2qSohhM",
  "key21": "27vgsm3mbM935KyqETdJDSmTEKYKKuL2Skogg4evDt7hwMrt3juPCWhSHjcrP6pzmsWr6dB3Y1Y7T4wYSA8u3sYN",
  "key22": "5KeTiXMNvjiyWa6DTbLri6Wbx1r3DsQNbf9SFq3gYCkgn3H1kAYZVEqzEmSycZpj1PkQZf4d7yggg9vnFhQyBkyp",
  "key23": "2vYFduh8YRCrM7hHhExPaupR7zjefcRWNVmjMpAhW9xYKsyVd1pRnQxj2ZpaYfNsknWGwoGeScyMJPfqSqy8vNiL",
  "key24": "3HQhiWgikxd5yzyPTxnDJYrsgbqE4cR9RwNrPYxpCExzuRse5ckdqdyrLVnp81WjNF8DBQB1VsDZwetTTG6qVdP2",
  "key25": "4c5Xifjpf8ekhchiWH6YgV7P7uE2WHTTj6QgMwEKb1f8r7eP4kiaRBWewZsTMD5JQ6wWjMcuHtNM57nxTgUQJktT",
  "key26": "5pQg3EjDDKswPBghh1WVDykPCKwXWFwCsgbi562BzyLsyh3tPhQGR3ECRSZMdD1eg6SNEeDzy8jqRK7dm4viYwrE",
  "key27": "2WjZpEEJSfNdrRBqrXJdLu9ZGScEi7wjJamq1CyTuLxuanfwUGu6AJ6dSAe6fBS5K3nGYvq942Kbt64bcPvxx15E",
  "key28": "2vkxYwNp9sJWnL8t189wWKcrAVaSniSxwuXhdH8GfDmU4XTmXL36VyqxEqwzzbst9XH8Z1TPy6YoZtbrFdGtQJjX",
  "key29": "MdRuhrDT5RzsipJ6Y1ZioRSbn4jPLhvZMZuBThAamK4pPV9VqUGQEb4QGREkTTiQTy66PybPsAzAiAvzAgbAnji",
  "key30": "5iPCuDubo2kFXuuBSBdEnk6EPkG1HjQwyZwurPqF5EL5EKmuGA9X7g3mKL8NwHAV1zY9euQ2FFtW7Rs9oocVVN7N",
  "key31": "59XLSfMopJTPtKnqwK5pwYT7Cnm5HvL76KHgxTdxWfvqU5zRew8WHKVDUYfjWJ8Ktu4VczGbQyYGvLPMzNPNYVQE"
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
