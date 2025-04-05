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
    "2cq9rssdzrDhLLQyEiuKL5thmtwUw6SGUAyYa9s1tXY1ReM5hj4pFYcdqenKAH7WL6iG6Dye6s7RuxdiirLyZMEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HjxzbFrGuVh1crzjSN1ffhSYU1PyWh4JMqjNFyyadsN5Wfxt3zf2E67ZXMV7UnfJxmQGGyLGTy8Lb7pQYifhCp",
  "key1": "2F6cC2fjtuTYFGm7kiosHhoRmD5iFATQVKkA136GG1kFHdMUoAYCHsPBAJWPv2zzhbwJk94EwDp2zDxMMrQaJqcp",
  "key2": "2J1bqFL9jfaXJ3Se3Qg27EjJGruAeb7BaNJG7b3EpPhCfH1igcEymJLvrwJc8K1ENtEWP61kL7jgkrPYxrVH3xkh",
  "key3": "2vXSgH5uUZv1CPfiGSVZii7jmWuvKgRn555bqiNv3VNptjfz7ybFWY9XbksdMrWyBwVbPJhMRsszPSbPpW63ucT6",
  "key4": "dYqfJuoWFjxWtFQ9TZ32RQ71nPeAK1er8kpcr6ofhvXQFvp6Ed76s7tiQmk9Pai5H3kGpxBqBbHueTYZezpebES",
  "key5": "2GubKpdeteebhXhRpLRyo3AHsfUsA89ay4v9NsxDw6x6xmcZBVZdhmUBmXKXSUvgr1ZisuKE6b5UAyFmLSTGeBqT",
  "key6": "2ncnSVtWBYG6qbGNw692sCgaBeWjdnfkNWnDSts5iq6t3X7jH3oLoqrmWgjY4AsSi4SZsFDYpoP5Z6jww9tRjkPi",
  "key7": "4ksPnKWsM8zPLXaQyncHcvkbDB8ZJSeGWhhmqZ9gb6SLhYginjPAFXPmsCZptHVeV4Z2N3ddBevSvS48c4dPUbtw",
  "key8": "5HC9JKwjegZWqvcnA376ajtDDuvt9MwQS8SYqbeWyxHckK9rnjFm5DqX7nzQ8TJQ5goScJT5jMEok9QcShQRbRVB",
  "key9": "hWMuabbzm4asBjmYb3jconLKyXFLz3WrsrexDXNNcckvdD1cyKSi5GxEQSr8LJYuse41nFAJnRqiRU6Moz77eRF",
  "key10": "4WMsXwmYEv9Um3sa32HcNGr1GKQ1bPmrdDqripYnF5LbJzaDJwgrVbXf939ZrcdaHcvM4hZEyeZqb2LPaBrEoHnq",
  "key11": "3fprsps8dJyrRG7EF79VJahpqQmJV4kG35EUfjtxGjPZi848onDSSWYrmbPB2M7TncFQwy4evuBkSux6A1SDduiq",
  "key12": "2o6r3Jpgu1SKbQbKBMVDZKwXTGWisxEggEegZDgxJN8ZgrbDFMKFv3TtFNoV2Zt89SnFkXwZ3gUCMSrsFGBxKHQ3",
  "key13": "46mnNp7dFapgABoYAY1pPdkTaos9jArhSG58UYLpxdL6merEXA3gsApnPkG89o8o2uUDeM4mYfhLUWNCArAtkgyp",
  "key14": "sfzjKeRNsWgLcCEcGr2tNcnndC4q6ccEUcwby1UvR4qpdEf9H2p6Ga6Ax7bP6mQk2ucfLUSJMH1jm9qkqyRB2ni",
  "key15": "2U9RHrjRLpEDB9TsK5zLzsG8AEAX1oeCexiWDF2psxcSYYaYodXQXYNKmj5VutZzCtCx9B3DAjFF6cmBa7grji62",
  "key16": "P7GrkdUxtwZeG6fqUpSWBJtKuSvjcUGSA2HV2UaVQZeYXmg1VmwypDSMtSgqxPMfMPPMzWxfMMzsvpJZFCAEH8j",
  "key17": "4Df2uVFRziZTnjsdQ613zoVNYxFcJugmLH2PUQjxanmV7M5zuL9Z7ttmEox2SD1Pga7zqiim7MYJneUf3oSouvt6",
  "key18": "5F727KTJ7jTZ49bNRZ7JZAszJmH9T26iesA1utStENKqz3jKZMKSQJygeJjn7YXEoNEyYb71FQs1QbzrSHfZj1a8",
  "key19": "5o2UQ7G6PvEqthPn2pURuTqdsh3VqPL6PEipu6oVj2Mn8ViCcAAbyT6pSfoJ8vNrwoj3zhMCwjQ9cmr82UqZ8wsi",
  "key20": "L7tBqf5Qn6Mx6Xe3pvMNTiVzEUCdc8PH2DZSHs8VWUmX2XcrJDqQWygKz5jfR8rMZ2YxzDsSJoSp6jBBJF6iDYo",
  "key21": "mo6m2Ed3q5BkMMzmruPAisfGxCcjeQreFJDEjTRyB5TzSP6eLRYPHy5m7xwGhRJXGPSEhqy9xJEfhTcdBK5wup9",
  "key22": "2YaXqgG4s2wK5vGXQzU6N6PcA4wkQf9aqMg2b4h8yRkQYMVYFJTiNaACDCQwKkuSGsiQdDd1Zmb7nLg9Z1iyT8i2",
  "key23": "4iMV9fPuAQuikfExf1cJ4EgPjHMNzAQCPbCUvtk9Sbxq7armdmx3x2TEwke36J4opUbhjAoMLkg6PkF17stBygbv",
  "key24": "2TGXDo2XhQB9CR14Gx3DaVeCSknMFYfHHxaaAF1q2625V4m9T8H7LJsMLBENDg33wQfzVXwB731nEF9ca6eo5URZ",
  "key25": "521qBNbJdxfvNb7EhCMpRBpw8u7XXZADWevBDTv7ySZJuLxi1mXB9dZxXcfypoze5PX3qvmnQH6AbM7oFtBnqWtJ",
  "key26": "3ijdKBCyi2bVKUBaxGsiondH5atQjCozNsGQsNwSBy88CnHE6F7ynUj3xPZmY96fpmqP9Qn9EEis8q5557X8mHeh",
  "key27": "oJ3o8H214qWinjyZyr9qijRvthaR4zNqVRPaeZfdGf9Vue3chAcTG8pXnqStBm7id9wFHrYKqPBstwPnsiPBzvr",
  "key28": "4weryEYEL9zefLd2bwUeq9aAQ5L9126ChziRXjxZz63eHr4TmFaNkNzpAeY3c3KEFWdstvA15E55NwQG9fzAudEz",
  "key29": "2MrhQuMQXvtbFF4Se8DrQMxyxpKV5zmZzzNzbAfD1J5y3T9ypFs95pMGLfxtXpSfKv3iFQzTXBKfZuHVja48v7Qi",
  "key30": "5EWy8ELbuxYx3DwHKM1K62YnDeeKBQy1gJYpk2BBHAXH8ZUGshyUN8EBofyNwLS6yepjyxHWSqbeMRBoJtu8hyW1",
  "key31": "2nwjDkq6hvg3PZ5H2rujEXS6Q1n7454A5h2eCwHZJFoKiUC7ypc35HsxHRVR2djszGhceBuGB3kBr9mcnzBsFCei",
  "key32": "4NoBmBuXVEZWwiP3fcrkh4hmHvbYiEp7ekhns1kyi61weZ1pDKGwEy47fFWEiz7jNeuUxiV6UQGkxzUKshPEwa22",
  "key33": "56L6eK5JE5caKK1pQRgiVh9nFLHtNmvGDiQ3SbNegG3yNHrKXraR2SH3SCcyWJVMXoQfVTT68jHAmiQRrmAUzA2X",
  "key34": "5X1f87Hph8oDUCA1huvJN8nXtMS5wM61kuS6dS3C98oZpZHVEdUqB9X3LfkaJpqSD2nV5B2Zi1kvjzZxcLKZhHP2",
  "key35": "4jWp86XQ4SC154S5ovmeDU58nEZjtHtsseZ57skbTL2XTDz1udkYXNWcmzAzHEmvWwxnYvJ3Gy1vfDMJU2hmhziU",
  "key36": "37NAQSrCVnmsZgnGE3HnU2zR9fXNrVKNfZ8aBpMrygNFFtCpbjPZuxKzYCsNjENRUBoarNFRcqiUuhxH6nDhZ38E",
  "key37": "5knjc1tyzGy9weUkPdAcosKmpCRY58EMGm7u11vTdXc3ixSwQjrMvxc5zziNhfTHx3YLSs7P4h2TsE7hogQ5pWr1",
  "key38": "FJWMQQkWsKBrHBBG7kukwzWFzMiqon8vLWSARyjkp1twDKaPkgGyitge96tCfCAAfMxxAkKRMg8mDYXw2ZEYMqb",
  "key39": "4dPTUAo4qYvKrFQ7fRcWjxVLrHpGM5VJmSoRcUrzrWhHqxAs53anxDedbC2rdausCuRHVRm39W7wgXn6frRrK8y8",
  "key40": "KijbCdxkZYs3diYHs3csoXL1eqR78KGJk4aVwiGEHR96AXbgSExe1DDVtokjR542oXW3c4Co7ofEgCmEXuzP72S",
  "key41": "3UkLtMV539X6k2qGPky7fQHusjR5QbeqZ3U45PJ6CGBQfrHDJW7ejSzLprAQSogyy6rtD3CzfLMBLhxkMCKjBFU4",
  "key42": "L3BKbSwCjSG7PJ49AJxhquzm76BDdWDk5rxAkYdkKLTCvyjDZ2uVHb3EnfRySoCFZ1o3KsbaHrNN97iwEn85DFo",
  "key43": "5aQxjLPWpvtZbGy2zd2guupMvdmscs8NTNUVp6vLmyxS4ra7WyEAMvkGYVb5Wk3Gsb2WVy1TqyVoYps9rpCo5qS7",
  "key44": "A4wA3Wdekm4JdRjSH73P8tdRpugcApaUYYcUhqBafFAqvYk38K196HvA7L9qkvq9sdo9ZUj7ATGWqUgKntBCsj7",
  "key45": "282SAWJSpg53pT3ktB6gtrBBzaqUh87CLRCjxbqpWC3LGQ2MwJis8HbCw6yogDtPEVY9y13iGN1FZRBvH2UBrnoX",
  "key46": "2yNHruJGz73MHbiHmngdusCG3xjrFbpMYJ1i4cRZisXd4qsbeCVAc41wgPss1bGv9E6N8vFHB3PxqkLFGMRyrBuX"
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
