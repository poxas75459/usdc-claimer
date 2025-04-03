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
    "3xQi9EtEewWv7jevFj72ki9L5LBhWv8QPLj2nxBP49Pjh45RK6W7KnoVvUMB8MzctZUMwuC6Yr99w5wHJ1ABnC95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXBfwBH8DCyo3SfSM2xPw5z6Ku8vDFPTjMpb3ELzx11FY8FyF35f41VkR7MJpsKvKxUTpYWCFJGNBrYCcPErUa5",
  "key1": "oV5gqJPBTUPzRJGPKG72Gb3vXfZhfey8TaKoCWJ7SwdAnZGa1RAM6ucZiiLtwrGgj3MvyFGEKyY9RQaA2rne6jb",
  "key2": "4fJzYgRcF31kVEFB4YPAcBv1ogUYRH3hR8k2SQARXYdky4ybjf5Mm2kZhY1sY5Fa1vQSQDrww5NpEFDdyPUbUSxE",
  "key3": "21a1TUXc4nQDa74W61iKBbKQoVFkZ1THqwyfBahtkLq8oWFE1EehrJ23JgGmA8h4YcqpJsywsscdWcy83q43xGf5",
  "key4": "4CWS9wEHdxV5hYegCrfHT25LeqQqCQPwAFLbq8QsUz13wb66GX9U4466HcHKU1By91YfoUPiqht9kK1mzndnGSXV",
  "key5": "4ffVL38KZNbDSRbvNeDGGYkknYTCxp3cW9ye1TYkktq22wDLecQBACYgxwA5EBgd47QQTW1U5GJnPmgY14vZDqvD",
  "key6": "5vrTLWjypX7KRc5Rx9XA9dvCCqpVEx8rvuGvGao7sH5D86QPRzXGkGsvfUXhv8W34azT8Zb7eQFXuR2EywYhwBzF",
  "key7": "5RXY1Mw9S4hMUyeEHkRtKgVhG9Xjz7UMFrVUbFZ8321jBRfavLuhEn7tETZRGMihyJ5taUpfG4vaC2UXBwNmABsw",
  "key8": "4WyJpKy9xmehnadKBJFXZL662uF8DPCLHHQPCpNpDMdJLZRYdBHYNYZhinW1baBinBD3nW2gpDN7bciyHygmaHaK",
  "key9": "BjSHyGDoa6S49m7zRGdNa6gMmtCcB7ccw8KhSgykAmgyKun9ncXyhRXvRtcvfnSMd9u3TcNnP5Ee6XrD6i4wj6c",
  "key10": "Hd8NVfktPJqkdNYtdWE4Buj6QJ5KEfwPdSV9u8pQYZyYr7VjDtuvYNEXqWiCXyJ28nGJgajR6xGptpR5fW8Qk52",
  "key11": "5nokLF97146CH3EGr6nLpvVHum7Mnpmen7AmucMHjEXKykT4f4H6axYYW38dy9mASMvjhkMvvHBjhvC7cadcMnbH",
  "key12": "2GrhZL6Vnsay6v7iKfLNYbdTUFEu49tuS38AuSFYyAkDKTpgQcLyrZEQMNveqvohhTDV297kh9sQt1kZhPrfPA8z",
  "key13": "xUFomTMya2rdkkwXwzm4XEUyGyX4gMLfqNB3XevJJXUAGiB2Ej2oqhDWcbnGqas5LCsF5anqABe42C74vngm7Ce",
  "key14": "61UJqEiZprCLzDJG1mZ9ojoMM51mQexyZRAkga1b9Bd9sAGGPdE6FYk8HnedXTe2D35PmX5kpMFRRQUB3MhkgeKE",
  "key15": "Pg1Jzc8JpdRo7X6CGLFbBaRqjmwuRNz7L3azFQhkxrQBCVTL9NUeaJt87KHsiepfqDF9BjRPz9WUQVEoyaPb1zv",
  "key16": "2zLWh51wGPyZaAgeeWGX57RnfBErvA9dv8bPdkuiYTNCeRrh7iZqcAymL3U5xF7fW5Z1jeBvpuYEtVgbFWWjFUmk",
  "key17": "2y6XkJQuN55iZSRKrGGgYbVNVg9Hrepnn3G2FzcDjUgYj8nUsCwp3DHBdGAq7ZiFtpNAt3DitM57dDMCrmRtu1KF",
  "key18": "2Q6gjchw2ayGu7QKY6ZH9EQRCHvztSx98Nc1dSetoNNQ5tHBmuPQC9PuKevz469km1eJ23CMXN1hifn9W3JCmxLC",
  "key19": "2xwEMfuxvgfAuNW56LrMnwpgUzAnUbwhuhCKK1rgYdMfVekbwVAvcvD2PnJS6kfuaLPaywzRKNK2wTzDusaSMzRK",
  "key20": "4uefkAinR7DbxGxDbNoyo6C5ifQpNueP4ysUpsmLqVZgDv2W7GczXRaoQRpUo2MTBz7oKvJnv5Z6YzSAXRMJ2nj7",
  "key21": "4kkLmeTSnqsJMWEiDo5VtkzdvqAf2SVU1Q4EFJqatZ9qBromiNNMC5NtgCRjDdgvU6ZY6WvXY9syBh3JqJs7NfhU",
  "key22": "3JYXoXKFwebxNdbLHvzVEmAiXMy5bLEjgp13uF7PHKKdePFivG5dyKTGzrnAN1ZoJdQAXTCkhUigeVg64Ch3Qzzk",
  "key23": "4ZwLADx3KsBTQkVLguPDXThg5XgPAaqwFCzLFGuZp9hvpfTGoJjxCFxJvAfQ9LaQkbLSCXBp8BUNjtM9UKNrk6L4",
  "key24": "2oBhzMnho1WKkpGJCijA7uZikTc9DjfTQxnec1UQrbu5nCAqhA4E3nV6ePBDG4jgu5dJZvCgT6ZNZdsbVZxpUt83",
  "key25": "2D9yoB8k2paHFBomS6KviGBjNMezA5xd4kXBQkL2nRv2iwxucGHZr4pexvH2tU12fQ9MR3VRmnpakvjdXBCjug9V",
  "key26": "3PSDWR1RyFkrSSqtbkd7a8L834xLKKqTB6pMoAWRLpYaR3C53LdeBUevCv9mTAt9yTLAKAsnQZVUiW6WhXdrxsVM",
  "key27": "4Q57EdReMsYso7S2Gu5bMihiS1vsJTKkzPM3dnSRruYEY7gJGJcMcoziWZQj7ESHGpnRXfYmC21k76wfvvJzEzqX",
  "key28": "2XEXdot4WqAxrad2Y4kk7vsZr4zAEcZabdkWLnCTwutmN3YgqnVnmQaZHZ1yxyNytauCi16mznAbc9LcAn167Fg3",
  "key29": "2tH93cNDnmjCmBXBcxn3zQm2fGH2pQoAmKztbM6BnGwpa7sq8PieXi1yTRcg4u3xKzXK5gucPgv1Moa5LVc4osJP",
  "key30": "4f3QUKY2iHttMv1tZvmAXNoc9Pedtm9rqwD1SoUbEF42TBKYA38Dw4Kry9mzNZG5s8RqZhJpnCWCznCjkv9rcrKi",
  "key31": "5LGiFDVsbFY4wGHhxfCeciX77dUfnucZouqa4Fr7mXan5b1wwmKFMnqXYhLEHdZgv36u4kGSzcNb87gXBNdH3p4q",
  "key32": "4TQFPPTbiNwsCYB4LxgzdbsP6y7h3PGb8mCCgsgSU3ZbKnaYZYiTYJ3XpVFQz9mcst2dTJy3oNrnJFiLMUS8yHQe",
  "key33": "5ymdmUDkCt44duG6K8QHFweJHAJQ4f9j9C2Jgpz99eNJSscHTrTgq5Lf4puzcYmMQLTxwz2yorKDFMv3gaLassHs",
  "key34": "3dsYge5fhWVNzu7A6ByBf2crcWnuSrfwCnpyZLZMXkex3KVwnDNMHgfmjT88Zhf55p7yzCCXhkUkpX1weszGcUoG",
  "key35": "4QoZ148VbVJhL2KcaStU1tJfzwU49pwaRAT588FCjdZH44bfYsdtq4se1b9Yi1N3n6Q8CyUs1znSwWzdxvSrt5Tv",
  "key36": "3hbbcAtE5dVjRNPN4pdZBoEvxsbXKGZnQZ96hEaAJMxMMJvdHmXYj11kjS1SaVrEQGPpivdcSWL5sHeL6a6rtNuZ",
  "key37": "53ms5pDSYQBiZfR59gfk37hgUCCe5TfffcGGCHrFPyR9nSNVjjLAb96mJvGfjba4D7NwpWkA22rxPeH6kNDgAxCH",
  "key38": "2R3LmsKtKT98f5vjN7yGxU97vabKPfwe6uVj3o9P3pB5ccVCkjzZuQLM4Ba9uQa9EF2Xfs7tXziDuXZSbDh7gEj",
  "key39": "4xiw2YKMfJDB5LcbH8ZtmAhdEveHyuzxv5PvsatrQA5WkBwXJNAq9mhVFCLQj9gzk34WusegG3wbjDpwrw93Mhrc",
  "key40": "39ZiLfLx12VeW88GHmS2tYB7TfDiRrrAKSMedPqgiL5xnmQiFXaW6rcqwCVptPkgwwpUdXWfQe1UoupU8ehmAYAT",
  "key41": "5sJ22M5saGggN3jDWeLFYQwXR8WSTtKkFtgqWwCZf8dSFV56L3mES6ixfFvgW6FMDGiht1L7F6HXDVcQKRdwXBUj",
  "key42": "2ttoXqBGeYs6QKxEgKxjg1jCcFe3DnxSfdPj7mF3oJmJgrk8VZqoD5xB3peVaF6jxyZ3hjR8BgJedWFszwUjc5rs",
  "key43": "5Ho1aF4WJw8itjs1j8z1PyErBoKrkRvYHCyy7DH6pjYV9D8jkodXUXqnrc184Tam2znZD3TpHBEj9xBoJSd42H9D",
  "key44": "4kd5Yj3QSjrSQZwioeJqiCyfvCqbdG3gj3btoFRuHpv2o74K3egyfLpPDfWmh29QuwKFNAW9JydYoRpNkNVAZXJP",
  "key45": "h38wboLXYtBQoNRf9ckZoTLHahuua7Y9uR2763ykEHhAssyrE4fXFzCEBdQcyyUtBXr9jySi3iSvRBJwemrmWjb",
  "key46": "3uYenuyoXbDxoA49rCcTNqEe5dDzKNGEWqKzZQukeT2C5w2iZuMiDGsd8UyAs52BTkCYRxjJ7NVU4cBAK5DbF7Jp",
  "key47": "3TrwCSKG4KtQEb1CHFokRpkjZUEtbuQ1rVz5JxYtwzgHJZXKc6tW13EmoMyaES6TPUVYteHqxDvmsg9RVpATSLZp",
  "key48": "5vHdwYHZ5w1otZqwW82eBfji9GPEGUsLPgRFnY35QaSstWUD2qxLQAxAhLTnXMK9cuEBxH8mSvm5nHkyd2Wmyw64"
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
