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
    "2DLFgTF2FVEv1jZop6A6qWuehasP1dHaKJDPRsacgyrV2TKWBxbyXHD8bmUoHo3bp89kcZafuWkAbNqeaa54E2UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8mPTfd4SJcgxQfqgJUMYpiPPNZHkJfRV2qSmmrA1GxgPRDVA8dw2GNuvWE8FrdRhFXaqTpB1XtgxM6qUarXvrk",
  "key1": "5idZqAVs2kE7Eery61Gnwks8FRu9JHhwi8zBh2RtCaYefoaPQ8PTgQ1DgManMM3cmxmHsgWFwfhtHJ8yYYKmA2dN",
  "key2": "34qxLRS7GNTK7dDc84SDDB4Jg6TzbwA5xxmvpmH8qPD1ifrnSTqbyXFq63KKruj9atL2EYGAwTWwbAEpMcz5kbk7",
  "key3": "57LT5N9JmXgZ1RfzGQf6iYG9ZnmR5eo8F4s6jUD391zWKtbngCkzocMe6yi54AMdJv6GqD7TAZ3ojPE44yUFarUL",
  "key4": "3FMd45BUe7FpXKiUtq7v6TSoqrfKu3pMKroZHAiFHYVsEqZeoUZz8pMkaYSAkL6yLEGKvGDHjkTJeaJZeb1GpUU4",
  "key5": "dqwnD9SsEHHpydWYPsUKoACK88yjWQiTgcE7rXsmNBC6gyR7n47Bz1zDbbHS6txSDjJkaBNVPsAQcpwPRRzvoWh",
  "key6": "2Ahg9ZPgVFaj8NoTKn7mLmsecQmvzEdeTecXEmDFjfHs7MDrcJNdMHYxXsQEWH13PgAHTjRTwifj7mVP6L4ZR2WK",
  "key7": "22Qh5URUN6uP7AtxNg5DEq82LUMNxu3WzhWhGouPHNeizYKhqLgKmtX1A1yC4vUdVywZni9EL4GZwx4d5AeCZtjq",
  "key8": "4QmC8doPaoLFUcCiBap35xD3Usos5Bj3wJoSsMXpmBw5cB5unuZLfjgk8JqM3sfjGcHpMQCv1apEDvisH4XXPGMf",
  "key9": "CGJdqT1FCa6WhKY492puZEkZYGFgyEoyBZGMAg3qd2ydFCKFJR7d65CvKwWAi8gRdvfXNtaZDgDVjdZaprawv22",
  "key10": "3TFQtXKFmsaeALwWSvqiGjehtXwiTD3oyDKAf6spETThXCHXkpHpcj2aDTCKMYckUKTv2VY33UutmfXwHp8aBHzf",
  "key11": "5LRK3ioiShWvc2zMBetMw2PwhuEKWxXpovyMRGQJy8o3m3mT6xPschz6yE5JtZfUP95QM1XZpJ5KYhasiAF42aEF",
  "key12": "287JRhoPczrXAt2FLWcUd9A5vZJnEg5GUSxZ2Jh2eyhX2iSEhePSFUUh1xEZgYHouuuTnbEJs7kfns478HYMur1H",
  "key13": "4yBEFxgHLT8DM9MYj32eKeP6yGDS4x4gKQnD6FzB9B48yHJM2kpCL6TgufRpicyPqfx1gRoyT4AGvr3fvAe8Mowx",
  "key14": "4RixuMt8qNK133tKm6VuTCKHHKe9BMXGGWJPtTxD5zqc7kF1fKDDstz5oNQWD6Ziz8NniFtHj5T1pJVybSjLggDX",
  "key15": "41CRvdpSPLmDzuYqUrpG1DDB4yQcw7QuPD1vNmq9gXFELMjJ2jPFfp6mUZdk4JydMiUkyByZ2e9ga1v57PVmRYp5",
  "key16": "HpzUFK5WKUdfmwntYzvvRk11WjMFH3JfbCXNytazFgS5wnbwAqRMHZAexJtFWMC1Qu2Um3nZSjy4wFA2Hk9ANSy",
  "key17": "5KgKKDKcJJeeKNDcDBtjx7eq6Xp9kyWCHj6oFoXbwbhN46vzFpj2ZpXArxXhot2jNYJR5m4CK5XSjNFfFa1Hwik9",
  "key18": "2pjJwS2Gg6KAzvi7RcJCmJsAP3mnakXYXm5hLNhHfvKesEWHYSdS2FxqFrMs1d6oQedByo6gScwrEKjZ5qL3iEG7",
  "key19": "FGmaRMHbkPMcQkopqU2k1E41axSGtbCUNnC4nY6drQyrRsuseC6Sqn3y9k51NwkfyUCvQB9tPLYPinDaXbrXVRM",
  "key20": "4Z7Lz8tkKACYmpDtCv2m1af628zXeFuzkL9uHtY8oK5oUUULP7fqCFYkukTizpkJeZV5fFaXuDFNQ1fAxWSSBCfd",
  "key21": "2nXnUg89ekwkJrVB5mENsC5TQWHVhoUExKA24LcobrCSFPQvysTpdoZjY2FnKY3sNXzrgcA6ZEvnz95i7mrPCFMi",
  "key22": "RKvwpUUP7VkS6cLfqV3c1nnLsKJM6stAQpVBrL9A1i7RLGdgyze2rYmUx5xfUSPPAY3LpyPKxgXw4YtErc5TqjZ",
  "key23": "5mX4ABKtLD7Fi9WscA8YmGxiSRfHocqKYB3MreP9pNYvWLLuVGYCKX3uc6nq2eThNvnAGTwMdWbnK7SHb8Pdbvrj",
  "key24": "3o7XbfeoP8ph6sn5u8uZfkCucMYY7ugTHUz1TDoH1EQibxoVjr4NTJM6cWnkHkU8UHJdYnFEFMaWynhgpHjVFiQp",
  "key25": "ntRzHbxEbAsPB4C4bXE61KnEavSYb4wFfKeZMR7YiiLmgwaRJHbfskvWe6rcvD9doXxXqMuXRrkTC1WinXNdLyB",
  "key26": "2ZnviKPytigkwdN3JPHnocu7tEbzdchMF8hitW9xFUWS79X3EC2EZ9CBcFfg4vLnKjv9eiLtjywu4xgZqaGUGGYM"
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
