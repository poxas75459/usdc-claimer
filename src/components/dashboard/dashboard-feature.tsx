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
    "2qX1k2updQUpDUVW3qdV3Xqsb4WzB5HqxNWLB4nT3kjnxPQmdJsHrEa8JiiutbjWtsYpu8PeyNCb7jLiymSVgG8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHzftdCGVwxC53HhsSn9nqcQZkEhm7N8VmBNhqkWNWPaVqwbtvEnaJQSWPRjJnnSv6PKrE8jtvejcXzioy6ykXm",
  "key1": "2fGB4HhEggzBEDUi8ipQZ6KqyL8K6Dz4T4gdsF8dWZWiBkmZLQ7Hgbr4g1dT1y5onH1Lp5TjxNdGvcMXUDtT6k1J",
  "key2": "5KdukLZ7ZRnLknHiTpQCSVXoeFtRoE34EqaeUUAJ1crbwU7RvB3BEHXzLWxsqajKo8ZDX59TD6VQa4bxvrUidqyP",
  "key3": "3vXDwjQc5tPeuwuHf84EXDAYhvPkbmqk6G3fHyP4yN9NUEmCCUnRwoAnLvNWrjuNs1FezTVq7aNCpHiiGD6uriWs",
  "key4": "4CWCJLLX1GPuTXFysrr6UQ3cTPgMzbJFbkQMA4hLkdJ6xU7gxgr6qRn4w8PsvEz5SnBx6x2M8wQY6ZgZ3Dkqbji",
  "key5": "23qhjmuL6o4PkjsBpN4Jh6gLxEgZXTqtrL6DiWJsDqf2HMJkKWttjmWHrL4Azq8UNuiz8fuvmJRs8qxf1yo6r8xN",
  "key6": "JCUyhQ25qd1UiA6YPJ8TAuE5H5G3eXqmkNdL2ofPA2jtcLayf5rx7a7Sov6BgbmHzCrW8E5ESL7aKhJ6yYD34c9",
  "key7": "4ufPPRWbBN37T6zos1X5RPe9xAyrK2NkGB1dRfDh83AiqYYgqME8pnyuYpMA5souv4rGphs9ZTLbZXMrdMLr9Cmc",
  "key8": "3gBg5j6M7taLw3ZgvuidTdej9KtVxjV3CzQZqahB9SzDopdLJ8tUcY8DeNTyouSpvrPPYgdNLuVqMsJr5ptEwC2W",
  "key9": "5cKmEXV6BDjxtvYce8qkS78ybdAAsF6K9ejTcX2byWpARfMtbjsxn69BViwGDVRLxyVi8mJWDxMZf3S4YQdVekhB",
  "key10": "qFr33cxjgtKuuVNKkLVwdTNcaN1mAKT5qrMcbmXow4QCUG6YxCcbHhVYnLgABs4V7TRVYcqfVpRi4Kybu9UfTAy",
  "key11": "2TQU6ungzXH7UVzgGT7McmDRUe31cwkNThXUqVKPBGDmoYzoHAEcaU57nmrgdFtX1MTjKRgpGSxAg6f9BNmMh9Qg",
  "key12": "3KPULFYL1PJo8NFCFpjpLZ997yevEsN6RTkbJEth22T3rrp74W48BrTV1s2KWdjSK2cpS8pc1dimfq7i1nkqBp49",
  "key13": "2pQypbX8AhtvrYCbt6NqMsuT9MiYnVBmoyhB228TsGLJLzbSH8uDwo9riQqSo7u1GsFVj6MWEMJjCTFj52nNsBha",
  "key14": "49YfPPPzZCGcWM8WX3jutyfWtk8Ws68wHgGTor51iAG43vwrUk45GdxepLW33XzDa6zhvGtfPoGw8XJ9BuPhqGcH",
  "key15": "TtQNktCdMYwhVWwaitHqBY62aJqVK8X3HwHLxxns69arMRnmWzRaHHdSkoB1L6EDpPEQhKxhMisvBifuBudWe18",
  "key16": "5p2XK9HNV3FX1a2dvhgEsxZWM7V8uFD6aMcvPyoUJcoBcpzvgcypeYVhKN3m1piBy2EqurCidsRV2gfimv4dMtLT",
  "key17": "2cUZ2ATJzp3xjxUopCPeUWdGwkosJoSLUJhipcu5qKJbXxgtSByScLSftCmC32AMiqtqUf4FrmwR7N7zw2WhHVAs",
  "key18": "oqZSUp6JtnrbXSf5TjX29VpyZAHqE7BugUoCVs33mmmX6bnPwLT9f4gcmUtzhfQC7ZUJAbaoYGZbJqGnS2f5FPa",
  "key19": "4W1s716LyhVbAopYELmqVbDVPef2VhkehZzmJmtpeBewHANvw1YhBXHh5hPS1n2SiThFE7TpkX5T2G9qmBEEV8MM",
  "key20": "5rajQR7s3uaCftg9EfkobyptVszgsHaXPuqz3i2QFi3vLN2A9HQT5gY4EL46EMzpb6GYfk7iVPhJyxLY7ACK7Xz5",
  "key21": "fzJG9x2mCYhq3qt8rigsWHgFNkCyVR4QVZ6RV4PQD8Qk1Uhx47KdotyYAtXbJtKKM71UBCVxBJCNd2xzGcfnjuU",
  "key22": "5dKb5vhawAD7N1mG37P3c4yRgtts3A1H4nsMroybcLDtWyHiVhyEoxLJ2Nf78oPhPbqLWQCWmcSD3Wt65HGyBaUP",
  "key23": "2Ki3XwZ4zNKwTRh4hmfLavYza4nrwJSgBUyHWa46kfFex5f2uGfDEwVrnu6xspyog175syDsih8JTtpuCGSGHP9w",
  "key24": "56zvDBavkn2rxZvTEoP6bCNN25ZjAx77BzFJxGQRhbhGCH5DooPYAoGS84gDqzJza9htpngKwAYHS7qVv5cfjAKL",
  "key25": "5ixwna1FXNDjRNLu6FXwE2qZT1LvB2DKyaJQvTrroPkecWevCdMv8wmd9VP85BV1et9DC4fgVfj9zThX675oLdkK",
  "key26": "3GwAxiP1jPdZjNRTJ3mHN3rHXY63coXwTUNbuYyRfcty26wqFHAnuKFNBTNWCBRX4LboUowoyatvKpToYHhBoToz",
  "key27": "hP8ShMoPoWKPUr3zQ31QG6R4shtmrbewf85Y4Dm3konRSxQmmwp7YaXSDMx7Y94npMe3njz2Yehq72qKRkNUwek",
  "key28": "3w5pxAJQHoT7gjpz5KxaBHz2Vj6yjzkPEuZ1VLtxFHbE6o8FpmSCYfPWpU5eJVe4svKtHWVogidjAT8u2JTehky9",
  "key29": "4hnB3xYE9h7UFi5mGP2EMEQQKLSQF58uykmZsKG14eiw7XZVG8wBV66Hsw5GCWqaejGfkzgTd5Y3Le9yEccwEerQ",
  "key30": "5b5eVbjJyNjzfQUusRCS32hJqn698wU3UMWYzArxM7JXsim4SfFs6w2FYMiGJySmVHQnPQo3wYU67uhteRdWXa9K",
  "key31": "wEcrqVNUP8P8EKy3P7b5sjBckyBcSdyR1VSgmTyPeHKxgvkkreY1EFL31QXC1LVrFojQvrSGBEGtizmUbYMPSZ7"
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
