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
    "54uoXWxCLg9SkffsBnEwitXKEXoiYcUXnuEBnG5qt4nE7Ra7uBEKoPVLxgyUAdC3Ph6MVWViRThGVYRoJUkVUiXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jqTj4BdkwdQuj9wn1e8pwTJnd5LA1oza8TK17YA1y2ugqdUVmeceu1dRwiKkvdzt4W6NfYgszoDqV2nuggfspN",
  "key1": "2vTML1px3DTYygYFc6F2fF1jTNdfSGYJpcVehKuhs6pSWSySqMrSYNbLyEnyG1jNY77ENbbvUa1w1v4RaVj4BNsw",
  "key2": "WSjYp7QkA5yUTjQQj7SqAzuvpHXJQcGzseTT8AynsrQE4kVL27mTG8aeEKgUePDkK5ehtwYvSeBszJVv5y612nr",
  "key3": "3KdUppAVPEKrhmcCLc5YtwxrQXEEhQPYHG9nYcG6WwTcguYVJEfejthX8vfQPZFTsg9TD6ueCKruPyDkjSCnLwBk",
  "key4": "5Sgiwuy8pS9YSNS5QRQCqzb73fTPtCpJUR5YzR9mUoLNMLV2JhaM1xDZdrsP2RQYMqQmswUxsvi2RBSCsvvPfv1Q",
  "key5": "cwJQA2oWb6ekub7H3eVSgog88PuQvgeiKBVuQ3WEx95d3tf2AseBP8TrYNqLUTJJa7XZdjq8gdDsRL88bLCXMAC",
  "key6": "23j7sSNvNCqTTJbvgRrNcHvNQLFEdr2LZwzXDkYUVXjjmBajJVuHaMTR7pw19Ziv6K8ArDmofjAeYFiBUs4UZcDY",
  "key7": "3HzQUkhuKmK5dzKcbZ4mpsKrw5Ufext1FxHukPPQxRDwsbZMVnb2xqG4sKq31AgWrdEAFRMgZAbMhSRxTYA1iCBS",
  "key8": "54u86hcHBaJMHoDz4i7gdbNNLxYatKWGScwLxFPDHyaczK84yd4mgvxyMLn3o5cYLGBMViciRu12X9unnZqTexpp",
  "key9": "2ZJQZfuA9QextXcUJerDM6WVsT7jpxfURszmXio74GcptDRHEkjBuqra3et7uP1qqLupp6TNbDaEWg7198EG44Ed",
  "key10": "5uDsuCtqqPNW3quvoPzFyCuSGR1HJgxFvYbBpDn6myAmygkeREGX2wuf4WmGPH7nEKZGN2suCAwKtzHRWv1dJLoC",
  "key11": "Apjrwz4ss7M4Vte6vjQTrY9WNfusMFvdWu9FRXQcFANhgVULojNyo6KrQufX97vddEGrQDU76mzrKPNjUGNsxDZ",
  "key12": "hziPqXPjM2Y5x1WYKkhx9HFhvkPLpLbMm9nmGhFFuJa2fZnudXAWpfkSDfozn9AsKfipAmTZCTtgfgPtXRX69Bc",
  "key13": "5Lc2YmD3BgpqK1XnQcYiS3xWpZanndP9MjpDpagbUqptvdPYQhGQgvDdAzkdBQTHmvSnWrJwfJkomUYJa75D7s55",
  "key14": "4ad4EhCnFvLAuS2zaj8JDZ3DCmpcK3zK8aYqNDbAxQuyGfKsfChrMR6vzC9RbL8aRae6mkVozvb1QyiRYwkf5pWb",
  "key15": "3moqiKd94ZBdZgFH3FwkmqW7LkTLk6vTfLKWZZWkDE6fFNrUrUmMEn9uRG85vxXJ7etQt3KXFYufPtx6cN58MQ3u",
  "key16": "5JcsSJ9XrDa89UyY1HvdFbneNr732e2qtvX6YabBPiUbD8HkuPTQLkEPZRYLnh5JjVTWPiu6qNc7hYfUQDn6E92C",
  "key17": "3Pde7J9CcNxAPs9ZRBh3oCP5wjGYVvdxQi8o52btNNvgXkvGwgfHaxiqXTxUFrcQtFKcUiBMFnsC1YnFEmXjCpVK",
  "key18": "5FAHSPgzxMzfYSc7AeHZ4A5jysTTSCQi4bWx8j4RDUTCCLwqcbVTnMB9aPz7QYDrKX9RHstpLNfsotXhsT7TC7Da",
  "key19": "2rt47aMJG4xEzapzykz5vLDo1MYz3x2Yrs5KKLCc6bZ6Ujtz5cQib9pCVBDbBKbZbHjdre8KZh3zyXS9eAaDbCq1",
  "key20": "kT6pUqJizDzvFnFm8CbfP5WQLcW4ohNAe5MXzGVd3uy9uFNc6x6UY3REiv9yAdptjsRu56tBbGBqwqnSXbsT1gk",
  "key21": "4NFdZHHTdNvYDaKK62v8ppA6tofDyMozBYCiXnmAvnWrXHd2udn46MJMx5kzb4ZLKKKbmdWtemNiZyzV1c4kn8qn",
  "key22": "3AxARhqfLnH5SaJGbNKtAGQvLwp65fnfNbPeb1xp6onq4JeG3TQsHXT7jkhW81oKijmz9pFKQYiBzVeaaq4DQu7y",
  "key23": "43aNyNn7gH7QeXXRjiehaM77AGKpQHsSag4afVKKY3kbWysVJUW9UKbpFZahrLsmbxU26dLDLLyDyetnqWJh1pBX",
  "key24": "5thpviqP54j1AJ2gwW37neBdAy5H4JQHhYWHRZvrTuXqCQkLSoytfrA115Z8Y18wYXdXWosvkw4HAAm8QM1u4Usc",
  "key25": "jBEyQmP4EL341suPkDHTE51aEV8dp95nLwJLLD8VJ6eaYZM3QHoni2zig3V4sbtZVDTsTsM8WjkXsvWpNLhxknE",
  "key26": "5tVtiiLS6MrTHpzLsJpc4hBWrMKyHEhxLQ21CNa8j5hUcUhAcxTaGKtWgJxLUUXV4mzANUvvp9BgFd6UzxEJze9o",
  "key27": "4DDPXiJf9ntMkH3RoE4ny9N6LDrom4LSejFUDAtVzoF55DqcP8zhsupyudHbuduys2eWEKShMsvSqqJq9kmvCj9s",
  "key28": "4mHhnmns5EzgWZKRpKZsxG1HQ5dfM1qeLbFoTuxSyVvUFbtdQc9E89RxQAtodefiM9UeLMpv5eeWQtjRzhMJrq4w",
  "key29": "5Rcu647Qs2gP9Uwv4qFj9vtcki37kWrzgBtPSf8VL4GLMDZCymaB8aLLJvEiJhvEhLN5BA2x5nygnSY24NKGZBhm",
  "key30": "4hQR1N9jgcmXC7ujFMBuzNTFGsVUUQ7LhUmcewWcDZWs2RyBPsjsUbyG5eDrEHW6dc8UqB2vs45gY5TVwN56PRi3",
  "key31": "4sPre7bhFmTxJoRFEwRNTPom3H42dxAhTKfYiRyYReNUUoQkpA7iSqDjiUW9wkqfAifobbmAsRuohLnU4isK1c1m",
  "key32": "5rFAEv1y9SHtaFXyv2vGWuSksRn7HfFYceEBYNvWtWcwpyRetY79AcVYPhJdvJbQyCjNdTTEkaLkiqrdXE1ifuYV",
  "key33": "5SC62WibaW6TswvMyCX5AFiHNMXqMp3ti4wCyyNCDkhdKwLpS2fcYPsgKxSceyGxrBFrRsm5dLqLgyL6uH7BXeKp",
  "key34": "4uqxhrG6LKXehCKEkfhHKZFtowbUxLshzDLf9ejcQP6GJ3djUfzJWQb5cPLPM4S39v7dwfH9qfVmrgCMzDZ1MSFy",
  "key35": "3meqAHRXRZ8kWpF28AeY8VdkUWSmceun9M35HMccGivRc9cBUfkEhedmecMz5411921H5RSJLFZoE2MXAeScNgNJ",
  "key36": "5bZyX2dphHWjCmQ12pHc3qCmVKdu2dYcbY9tN3urykKvNnA5Zw63ZYLKG1WunaJoMFsyB2qtQM5DDaG2S1usXLDJ",
  "key37": "EP9wp75Da9NDEY9zJRGBFkPr2mQ8tUPW8DRwM2sNepUBPogTcNKTkGgaEz5BrFGufR6BjgURSZ9KhhjDzKku6LT"
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
