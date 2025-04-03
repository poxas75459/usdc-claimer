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
    "3tiCMJAf89auEik1w7DUxu6WmR4FDbmsmMTtgAD6TzL9Z4HtefkBwZfLxTKSF78aWP59PckaTo8yeTF8dWUXcsJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRtNodj3CJ7cnT1k8RcYbM7VBx5VgLtmXgC1K8xQcRN6vifF7mtxhQFdT5jBZsgiNzLc6kfTnvFfkJrwVaDMbPH",
  "key1": "3wY5RPPA8eX5U3dX3A6LEhio1vqyq1mzxZbjRRgG86tnZMM6qbdywZBxtEL8jWSxpXT4fwMZrnJJCi7Vb6xRAVZa",
  "key2": "2tvisfmdsPGRXwttrr847Z9UwmzwVdJFioiNrkVJLT9ZHyKxpQztz8f89Kt8RET4SMeNDcA2KZXSUpLm6LcNE4uN",
  "key3": "558XjEAxG1TSCWdgkB4XumEMW1sDfPwzAzPQqGt7Sda3fjf142j329YoYqG5HBfFHm2qoATTMcpFdJJpQe3EJNcC",
  "key4": "Sq48fUgiJ5nLjBR1LuiEDtrVR4A9AbbNuXcWhh32fv68tfPZFsc56vA5tbnr1z79sRtUqxCN2HyTNCxoQGgNbpi",
  "key5": "qdcGvnsNrXHR9ibsos5pCDowRhotoSLoa2urLazZEkmEMzH6ZfhqYwnwDdYEJE53FCn4BoBS8fd1yesdmNYptTU",
  "key6": "3HScoTHbeBjnBjCo5A3GB9n1F7N7MXC6fUmVXpWwCeAd8skiA6H6tCPUKuaN2xGLuzBLqV3R2oQL8uHXGb4pnJ4h",
  "key7": "H1BBCCRnskz4BBf2ENu8FwmaTKg6yJhbEFfQJhh2TuR9dpnSDoE5d6RUZ6YPEPCpcfN1p7nJdH439RMt77qkL1a",
  "key8": "4m9bVxBqUygPbXcgq5B9usp8KpiSLeLU11bgTbFoQqyZcogDqLHvhW1yDWKX5abktasJo5g5pdCoVaP29qhkMEvy",
  "key9": "4b3msizUag8XUoPWWJczABZfXsNpB6XLt4UuxPmUJtsTFJga3322SimnbDAKM7NnLbKDkvXneXAmPLWQGHUG6bT1",
  "key10": "2JigkA5oZVCjAdoVrQU5eU4XcWunpX7NRdeunak2JpVZdCAAWuUTszczsTN3xkptyDmNnUbFXh7nJXnPfcG34d9s",
  "key11": "4UxH6chsFQ7C3wdTrm18Vj253Wn5ZHHJHsitVb3wRpw1v1SBNV3RU5oT5QjBFUX1z43sm8yBr19xcYc9wu4DtRLY",
  "key12": "5yYk4HuMp2UZQQR8hQpotVkrdQsgFf5F6wwXfepRWK5zETMFgwWnTpXkCxCaHe3EfGVjHiqoTtZ1ttqvRqbndCAR",
  "key13": "3KKNvNFXvcofx1VNxLLPPFkqYzTRtGUteXaSDh4yzDXiAn4bhkAaRM2sbokeu6td3GdK7C6kUx4QYVx38eGMhcnc",
  "key14": "4nwBgXxfWz7sZhrqm4A27yD4aeESBnZMxKwYxX421h7NXssHQa8NvdruiT1s53uK6q3r2WmgLsTDvCj5mnsyHnWc",
  "key15": "esrLJKkZ2EgkwqUUoLduYRhHgq6L7ddkdngnM9uaNckip4aKnHBFihxTFfXVFchDiThvphJBuaHepakCuMpeGYz",
  "key16": "TSJhmi6wbZHpLctffYUn73nJVsVnBtHVcT6AwyM8W6UW62tESfwTkLYfUZqpw64hNASVdXbGsBK4BSt5YKB6uS4",
  "key17": "2QBhkKdbbhwwUKJywWgz1FfMFyLfpEv8FLMWiuQ9Muq2XqFrUt9q4ujVhzv6DSRswkxhE4K8WoGDjzpea3L838GH",
  "key18": "2JYb3Z4udMEkpS8uhaTEHsRET6enH8AQf6FYLyRcB1SodYxRf81uHoJ5QT8QBbJxtLYTZh5ZYVJUETTXCMQXbC1X",
  "key19": "peUjDYz9HC6NHr1eMDJVs8wvW3ZwubFwcinyHCSswWifcUn6L86CP4LmYesPmaQbBZDYZjfzEzGf2F8PmjVwou8",
  "key20": "559NsQay5MQATKV9yEEvmo2G1fqqMDLrAQZzBVcGyzWS1xCyYdUrNkMt24SEMZNiDSW2beoKpJdE3b3TnHfxiNnq",
  "key21": "2HCrCkoVKD4RbsW4tPpPo23KKfJBeRMUKp1To9yvT5zQvf5JuWWtfNyvDKLjjkqmtuQJgnGwqphrn9bzguXkGQ5D",
  "key22": "ySUoVefvS8JB7bRubxjFrzAtnrGUAnoesQnNr5HiP6p5hsrPhuSxju6UoYUp1bYU2gtSvybAjQxgHMRM8sizUXa",
  "key23": "2aPqBMAkKi79RrpcVW3DYptGfYrG3sY8AokC8AsnFT7VxR1oPAhXdNaeUWbEXYhSUTnjf919eCDY79gi5PNwqvex",
  "key24": "5ckBkPWAWzjuooBtRytbXcv6gYLtTCeyeW7sfDA9CVjTREUqFFLmejp7CebGPtNz8iYf1TpA5b64hsTFbQ5912Ba",
  "key25": "4g8TwZRDksPg5BQ4AuQa87Lphbp8jTQm3kYvC9Hj5uqqPQprmfifzzX2KWwCgxeSyPtBL7Rs4Aehiust7YPhhUa8",
  "key26": "2kZkD9K1H8e9EBTzzod6cPyw4JvuX1WaWrgwSAEDELVYMWMxW3qqSKbxCdHZ3LBZnCWKMXyScb8yPSZX2v1Zn9tc",
  "key27": "5qH9NRCMEAPpbXvE5nKHJpFuwxJb5LfU2cCDSvX9AJosjd4Y4xWPPbMP5f5TYfCHZesksYGMKZp7WLLYEKaUBk2J",
  "key28": "26wHRwocuc3PxrspGNQYrkVNKjkwy45tcZR1QMSiTMUL71hPzKmd4WUgtAEwFUh36RveFq8MufRFCWiPvo2w3nnU",
  "key29": "3fzvhp35RTuq6z2Td7G5FA2ZxP74YA6Ni49dMEnFPDCHFQBFKvUT8fF8YmYnub31UFm5fpL6oXKEexJ8sFjGmhQR",
  "key30": "3PchviYMjhrZmnQy3bBFb9d9mBy1iqbj8j3KK2aJWiauSWyUkUDLUBexRDyYqDv6EsmheiXdMw5gxaATqzJoJfLD",
  "key31": "2kY4XNV8Bvkm9DyMJbatNndyVzT9kzq3SH2xRxtPzu4XP3rRcKq5PvKzSKHnUMRKuHTNekyr892Ug7NBnpVCL31G",
  "key32": "5GEPzSAapDSd1Ag4f55eyfXoLnktQs9ciQPKE3JRAg2aVZmQFWFfLQ6Q6J9DfinUcQaUm43MfMQpYDdSmwqVjeLs",
  "key33": "36WRkitGfHVUeeZzM7hnN8HsVkL3C32kmoZx179i6v5bqpSVQ9gGxUAPEeyvujVDoU8Qh5o4WrAqQG9WEao69ifz",
  "key34": "5iWMiksYDRSzeQ3QxuFQcKtbhKLy74agYu24C2n9AsSgitSTWDrKcLxCAiPM8b1wk3bQLmz2ubAU3w231WXzPA6d",
  "key35": "3UP6XpE8xqpwvu463YoswdLXDq75toojjY8skMGqnwwFCHworGSM4LKsx7JBMna6KLyCqvuPHAS7KVhzQhnCf2w7",
  "key36": "VFcHkmq7kZ4t9RUyNWhHDrgkB7Ma7UkPbj4f4VEGaR7gkjhaH96H6snxvd1du6yPDqUsp64CnrK7KbjpyPoA3e8"
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
