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
    "3fu1ooRiQgpa43sZw6AiTBNc5gbZDyz6hdfccAjzvfboDotCibEceUgejqXG7amGteHgihd8sGVuKrqp6GVEEHBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KcACFjLxp2DmFK4kAy3bgLMxMoQoP6mqcHU76EgjETBP2QnLDvZLBzBtiYcBkMABEgCitt91H1sucZJGoWKJDS7",
  "key1": "4Fmkq4CSnKnhqcusw9yJe3cnFzXHLXXjy8GkezTTUkaUKZkQRY6drobhbHBMhxGseboZpRNnT3YgZJbnnwHTqnmV",
  "key2": "2bytAjksbXJgthjwPjkKmKq9bjyt7ReT9vLkYhSgN6yUY4DKW1SxPKSbeWNNSMDiPejnVn73yzAX9ZRVYaGd9Vwp",
  "key3": "5iA4tKM9ZnHhu1qChbZfiUiQ5RNSjzUpEXUw3FKcnNWHkiWdk48PavTNnhEezUnYg517MXqCip6fMrcuncioMBRy",
  "key4": "2bHVEw7QBYSmR2NAhuYUUxEtYHTzQb2yczppPeGMY9WbPuTgxk6NcWhfWormkDS2CBM4xUZirhnrcaBCNXrMTbRb",
  "key5": "PZSdawbTybGMazhXiXsHuAiWVAdJY5XFheqELFD8PoRLsn4LosJnFunNV57LnAdfeCTFDFBjDniEsJNMv2Hr5mh",
  "key6": "3Bo3SGtit6XuDssdAKkDCPPqhuqNHS2P2mjc5hwtbtEDbnt3xSHeGm9a3aiGk9MHy8yLGjgSNjRJqYQSYJ2YSqif",
  "key7": "iYWYD7GUkUCxAuax38sp9rm7Cbv5aBWRhnurgCmHFtxX4qLgEZ9yYVWnRWwDS8MNbzdREDt6yViRmDExmBtUiJ5",
  "key8": "2brDa3B3k3pNSetjLCcWC9PgqH9VGRPPLezrSkmPZVobcqSm1bfcUc6Q7LkYEotqq4Nhp6Fds1LuLWJSHAnpMXQG",
  "key9": "5vpYt4kjMFrgknbMA8KSqngEDBFuP9uPfBKBQyRXmBxzoFFEYh3dXSQeWeNHLecAaLN6Uus2cC3fAsX7E69EfLDH",
  "key10": "5Xdyq5vaVRzi4SEFYGsEWeLYRnFWYHVX4j63PSabq2dMGQXJh6GFmJmoA4nr4EVthK9kvzezQXu9HsAwHyb3swyw",
  "key11": "3nBjwE97Q9tZLXFvHFF2b9nnQziZ8eqiyGZiR9WKXLDjDa7HW18CN8Qc6jHG7iFDWaNYnVH783NvRceYEA7mw3Ce",
  "key12": "4A6B8ydzmpCzXtxKtwfFx8i6NLKFybtup1dLjCXdBsyhd2iwoGRzLDNMBC54FaYAwjh9PZc5xbWRnzdRfRCrQETE",
  "key13": "5tUSi1y92MkmfYGafNYuv5sHECMHJQTMocNa8kirpNcEY1EPaqu1EyqtXWAv5PCBCwwuqMgouXkvsYv29dLaEC4X",
  "key14": "4r6jWC4HDdZvwtHvfKzjex56xGUUKRj5XUkm66arKtTyuHa9PfSJybKWaFYpBKuXAkHKdZQHESyy13G3efrJSGar",
  "key15": "4fAaY2WjpS5maviTDdE5Bn1H96SGitYziU4c9SbaaNfLvYuGpLnwVWwiMUg8GpcCQguhCqW4bCZBSZxmd6mZyaeb",
  "key16": "2Ni4JN7diE4x52WAC1NjCy3HAsPE8PcsCPg8GXUyZ26hJeiJgj9zWsqiQGZHtK9bHoqhxKFgbeqAn3SBkXi3HoMG",
  "key17": "4VrC3GsUGrUf4rvib8WV4rwyn9t7wiG73rpk2mQsg79SKXp7sFsXxrWw1HuBm4oaV3eLtd6MrE7FqtVF7ESioG8y",
  "key18": "pnDJfsaiAGAwU2yvwPCDFiPawvmQGNYu4wznon2SXWx2W2APCks3HvqAZj7vYbXeJ3pcGTNWpj1CsKoH6QX3dcZ",
  "key19": "4zSpB1Cb84hksokqZ8sjVocH3PL2H4bXyQLp4CqMxLjbdD23SpTD7jGSgvYTpxqEgsmnAdg4VGUr7Xr9LmfZ4YGp",
  "key20": "5uih9SRvquxSr2tmeGx82vg7TAJ6DT55tC4CVCgmS4h87Ydz6t4GrYeGKQBW7VoNJUUs2uUB6pRJ7Jn3bUVWNgoG",
  "key21": "25eSzpcS8z6bwJiWhPAmZHRwwKXBfEdYiREJAfEgKv6LXs2xHHmwTiiFV1QfUoDcKxSubupYaKBemPAfSFZNp2a8",
  "key22": "FnusLpCA3M9r7SZxNy4sqa79GxsXBwGQak8QYCmHGQemguS7aQ2ezMTAqQPJXyiz2Jwj83kj9nGRGiBVL2NLBZq",
  "key23": "43vnJ5rs4z1d8JDsEXD4jFDq72SFwjUabhBJcU19fZbbGQhtL5d6JMqgi9eofZhJ5Pd2ewcs47ARYgAe1Zj1cPxA",
  "key24": "4SsmjFusoB11nUvjxeCQxCXdsPDCHXzLfn7MNP6CqN4qq5iAfewavfUqLEm6YmV7jCy589f4xthnjqPy9d9gQyjK",
  "key25": "5Zq15sYYin1KRtQseYeTyzbUMrevYknQRz59fPdWchhQ8UwrGA3LMVM8kvcPcW3B5FzKeiZPdpuJDgHoFrZ9Mb1b",
  "key26": "5P6dgbL8VkmaAkBk7eqkRTCZtNjhhwpPYjoEEopoWxuETmbYQXUYzDNxa8taDk3bmpv6zvU9WyjWyhM6eMamb59e",
  "key27": "4rVQ6DPDDtdT5jKGyS41pm2yaCiYS4SipcJWDcQG1AnkUcvxAkjBspT3eY9fRhmgL2xmrDx5CiaZtgVgn7hERWsi",
  "key28": "5TLVYD2pPqyNJnLErGLB6H4eUkUG5DNk1UKwVk6BJMDtEeMdhVEGHU8NvWZmobbscXirR6m2zJ9f5AAYc4B1AN6f",
  "key29": "37QL4PsGpgYVWWj7KfaropndMrkHykowjGgUJBsdRsgMZouufHhi2923NiKwFPyQbPq8yFTMobkqHQBFFw95UdUY",
  "key30": "64GSCsEf4rvv1sdKMvAnYGFtanWs17muwJ474VBEDZgjgbbQtacdxGTgrrWX2zfDafMZEQZnsd25NKp2KFKJAT9Q",
  "key31": "2vvrAoqGJG3Nw26Pu3fnAkadiKXtf1r4iMeipNTAWwZfZoWmnjchwoZv34Frr2NrFrESp5wSx2osTHeUYyBWxPm2",
  "key32": "4MteEZwj4gXCABENtLFysfrzq5A6LV1djxooftkEpsER6WjuYcCfjr1iAj4BgheuVEUyj2K6Da3xRmxjcfmwAgE3",
  "key33": "3C7Gyt96EGqo7TrVn1eZ5vc41iF8NSpH6fqx1nJhGKyTZs6xU23YDd2WMFuLN95uLGuws4A43idpMFK3n4ySCitw",
  "key34": "212HubGtoaYfvfJv2riBrhzTRv76AqBFooHwQZZtwe3ydcT2j478EiViNQYJHiSGAEtnFe6Cmv6jGuGxtPhCXUj6"
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
