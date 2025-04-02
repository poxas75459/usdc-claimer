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
    "5id1nEa8q3vXbGZmFeY2t3FGfpENQeP9XoXP6JcQYtGM3D7Q8YB6EJrU3BiR62jyqCwu8VSo88AfDH7TSGZv6j4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnxsS8frog5FkwdJm7BaTTw2Thwnvzqd7ZBbEwRh4aZCThwQBmAV4xyr2yXBsvz74kmJyEuFB2wXkosKsaAL3sG",
  "key1": "2EGVAEAHPGnCLTQzVLji5zWva3eaTZ5yMe9JhJzqEhW9FtQVa5p9vdvrtLoQougceWuRNaHoFxecnqMZCiaJ3HRQ",
  "key2": "2fzTwE4Bj8KE9nafgR6XEHo1jLgDb71HxuGGJkXSeUQ8iAkGac7uss66F3zBhDSYLEwPSJWxLUqdV29cab5uMeQu",
  "key3": "Kbcq1FVQCuUvbPsS8bMcEVy7ujBzEgsZfmsEsa5mWFP7CXNdMkD2D3J1WqABVeHKpxSkwwQSLtn8nzCKXwD9LGi",
  "key4": "3zpioGc5V3kGHopMGK8TBN3v2JdUKtjQUvwSWiEyHWipzCsF4pSovG5LQx7U5KG291KW3VW6Ak657f6gFr6dY9Ar",
  "key5": "5ncZmJHhA27M6jw3Mry3CT365P9z7f2cYM58S55aXsoE2nBdvUQqHpLxRY4cs1uD5eNJqDPi14PGAoAnRZgtyPNQ",
  "key6": "4spxYYQS7tkAhB7s1QdLTQ4VdSgjBrfexwLjxbXofYaQA9oG2cBkQW3QjtAuadY3TxWedcbMCwx2taeMjbAcfXa7",
  "key7": "25qnn1dK5jn2nxAZrNR4gEvC1GhTr1ygA19qF78JdiE5TcaREYLGaCYvGRWChEo2q6DQ2VNnurZs4W2KJHWNqGkv",
  "key8": "5AqS2U336u3ftqiRnuG1b3c33BQB5s7CgznKR67SKxDdJLnsPUXb7VDZgBo6dR5KTemcNSA6pYXL4RZSRBdCcrPY",
  "key9": "5xHsWZT8hom81kAbAFUmZae9UkbyHWiX5eFvutJ7wuwUNRD5U2kix6GzgQug17CXwQMLcTVkFNZqhF9WURES3vkr",
  "key10": "4nhXK9tGwWnDF5WJvmBRyMprfNdNfQ9pJR5nhqfeW7QYQo6N1LYNmgLhvDy9v6zqqe1QtMCrX5ZTpWYnRcDfJ7AU",
  "key11": "27FuRaD78MRFFwtXMyggBYyh8CZbTBK1Zi2ovRq9ZBqNRNpFQ366bztUup6zJSvk5ZGDRM6DeeoMR99K3F5mDvx3",
  "key12": "4DhixkrjreKZy9byBSTK3LpxD1acHrZ29ofTRmhbrnVLHJUZFM6YWEe7Znsxxd4549ztoAsggBhSCu3ZM6bjdTYh",
  "key13": "3ihG68cNYy6SPn84ALCofbNC8PH4ZadCWaZZv2uATL6DjYChddTZMhqCsLUn37iWMhKM1NE89QJmztJ11yxPGGub",
  "key14": "5JEeXBHEDzsujZsFSEb12WuxD34GAiA3NHabfgwcH3aZXN7RtDZfQFoUxu7FwgQ95mANCqra8wCC8AmTaoqNJagH",
  "key15": "498gWhwg1p1YVEJQZ9xCRzpZ1XWQqsxSWZQeoft2Cqrg4tGfZfuKkSKYQhXaWxZMKfyAFQwG6RsRi3Xyb9z8KgfC",
  "key16": "s1Ft4cyHpvkHX55w8uQoHKuKHqD6eZ5RS1RJXrZF6cJVFZ11WiVUV74ebBezee5BnGSNZ4c8EkUGsKQTpJUamGf",
  "key17": "5htVqWPAhtZC5TGHS7TTBznnqo2oPx1roYEcuQVmbThbxhkjEr4sr2tVc4MCeCMtXxyEzSbZ3z6vxtwkxbysYn5N",
  "key18": "4d47HMPup6TLCyjXMQsNpnJFA91AX9ifD8ARX8oobLTyHADpUfUs8gXDBDpM9oyRNnqjBBRwwwoKnvSoQznxdNBo",
  "key19": "3ww3sUWJMnCJCjf4TrR7RPGxhCEHNJinMRycF3h9Kwduw1943S2aQZc9z3LqyCGwcxxC1ZpyMeFE5tj5rp3e8mNd",
  "key20": "cp7hMQAe2b4XAFdn5NadPAMbLFKHJTr63ENUWcbfNYEyUQ8MTWGFxx31dSFcg7EasBPHng4szuN7rrLPphxBVwx",
  "key21": "37F1wTJwMo2ZcyYMqKVrsiKx2GqCSKSdMbygFbLxErgxPx9TX3y3QLpryn4qvdoZCG7PrR43w3KBxd3wd3iJU1W6",
  "key22": "2Nh4S2AP6F2pocw4wCnAs84c3CTymqaqZgiwKYhKKY2DQ11gzq3Ewzwnx9aeS9YMzBpg1WdYjVVWiyBpa1E4aHaC",
  "key23": "3J2PKB8HgHRR7E9HtQG8n5TsvRjP8uY8bTTLKvSyiYuyoBdvEZGp96h357XSn3YSMaVEEHkJNrkPzGifADUNakuc",
  "key24": "rkJDJBLBp78kLCVNd3ix9kvFjeRBui5Xv4uncfUAhrXtZ6XJqozcmK7Ae3F9V3qWXu2QTWvoLNMo9Dx5EDXM8gX",
  "key25": "5fQXWE6PmCNaPn1hNrpfKX8bEVu59kGEekKJLysnSv2zMspRnDPxfRdn4phrhi13wCNzARFHpMxh4HBfNw6oHWoV",
  "key26": "4ba9kbBb5YvsLxtn1mcC1k6PS44T9dMzfvzDpXGyJK51EoHRCCtTqhDEx1HQhaGbQGYP4N4qkhh2wPcQhrrUWWMX",
  "key27": "5UBfXiudRvQjewzbkJ87wJsHruKrRauVmqJ1EHVbeHZF1LYaB6LbsDXp4nBrdZP7mJZ8ZJLQhygKXBbyfqeDriws",
  "key28": "2EyXHyok8WcP2fLp7kAuUV52VpDDszt5GPaCc8NX4zYkctCCo3iF5zRFFXs86gudwuFJ7oD3uc6rBARrw2z6TUNo",
  "key29": "jo7v7EETtCAHbnJpAvea2JcerU6eLNQdTDwBK2YvxUTgJ3uSRdLfMqKBZvq8jVpXnQGdn4remwQpNYVnWAesjk6",
  "key30": "4xxNqZtN8hhXUPfw68i1JBrwQGdr2JMHUybAQWFCSXB8ata23mmBy8ULYqzNMdRLfUPk242siSVwxoSJCb1GmKYe",
  "key31": "2m7oe4DfFDy1e8M6uZQ2BAxJDSKQGfUYXCTuz1Bc3TuDvhDZZ1KYaeVYM6Ak4YxPzMok7KyVguJfm6m5hFr5Fh2R",
  "key32": "47S6GnpSJjvBX9YAyXvTuoNYRFxS6QMFtVampU5ng5qgwqiwTebVvwGsJXbQ9vFYw8CHjBXFJ3FqpjRmWu2FcYmr",
  "key33": "4R1hajy2zv6PQtiSihKgZ9Qw4pbeykpUMJPBnsYeXgufSSgcnbbz6JRZdj47ZeM3PmXGaKxoUiCfxHBT7w3DBnGy",
  "key34": "mDbHgCWwEhSKtnujfNu6cdztiCDY7sZF6DuHJfbRRGgWYjGkNhtWzjwph11sYekSLvaAn6oCsKSD4aBrtzb5HdR",
  "key35": "3KjaSNNSxGnSc6JPwo8MndJB7dsMhSbzSZ4Q1dU2QwtA7XhBGqKgfY88kq4X1xi2ZfSqfVWqJ9H2dmaGQLxoQgLB",
  "key36": "5kNibq9JnHTRW79juQHVMSTPXA69dYJnS3FoMfhjxPifw7JgAnR2WDYbfxzkC29iGg3CkU92foqRgrtSAXWU4fWt",
  "key37": "3vZLMQhQ3RB5XMgq4G3K26V7eV3AymVV8aHECKk7yiF1huRphkwvXUnE3gWfChhfTxBKC83uWJH5Ck3f4rtpmozy",
  "key38": "3GtMhipRE4octJXZGyw2LxunqjdMKQ7gH2Er1rAWw9k6hHD12T6WxUTCrYcPdqupxv8HAzdaScZLRPD1GXbdUGqZ"
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
