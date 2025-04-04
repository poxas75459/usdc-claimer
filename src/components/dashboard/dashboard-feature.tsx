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
    "3rmj89PJuJ2Sy68Ub4izH2heNwzxMDuE8r4qZHmf3kRwB3TKeeARDmXRB5EFKDxUMNTFjraWsXmzdqoidLonxreh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJ2HRF65Fbezj5LPJqjqmuQU7jetQhsJEA7NDX88wdASEsEUDYd856JniEFCDjVm4tSHaKGiJ78p6qmteHpJs8P",
  "key1": "4CxiWLXy6kKVfRHp3MURxKHpUiyHfbCr7Fx87paoe8bmiSxGgX1v9MEixyC6ejf38GpCsaBYiaNTa8KWBSutpmjh",
  "key2": "2y3vYULggqWqs1nQJQkfArmoxwqF684nuFzFsRDha1kJ56GhqZg7QdwjckMXytuSzCCNyh6sZVF3KuLpQhHTixip",
  "key3": "2U7nLUfTHft17DiMzTg1hfaY2VTV5e6aqkZE5CY5L4CpTzqibV8aZpTpqNa6Cx97fDntBhn2r1Sz9fr3JJLZ5tRE",
  "key4": "3JLGe16RG6wknRtqsn2KmpBgMdHFg1Mwb7FebFN3krbcQFXfJSaudav1zkzVsVg3tCRokBgpuaeYbTjFCVA74Jxz",
  "key5": "2ephqxMW3CUK91s1EfiUr5xhb8q7sUUp1avQNgi2kpS1pvG2kMjzNUMnq6tyYvLQvXHvYZ4xSVJmXA36NaGsY4hT",
  "key6": "5YmYsNdxxSUjXp7cRduq2Q27J2EtnX9keKNGRFHkyRdD6su14CtcczBoXe77AhggMaxhPXAHSUWwzCxbys9VzNaH",
  "key7": "5pPrbBvD9wxM3HHkH6Zizk5iuDE6fP88iRtzT4WH7Q2jpN7V92joZfFBQM1tfwvpuwSAqboP529cDSGWtt3WSWDU",
  "key8": "2wd2np24w28SP9N4djUsMgMDUNwFTnRUjtU7NrA7mWJuXTgJ7cBRUwEGwMKrDXdu4gA9iMmsC8G5ZcYZ6RahCbRV",
  "key9": "cmXTfGW6asi1jz4m78XsoeNYrcuLsCQZdoiniAq8txXPLSzrDAc1wTYAZRBhJpo7BvKrmfJ5NFi75Dh2m3S7vmd",
  "key10": "5Q373coJ3erqYfi3DE35PUz3qKDxqdPN19VZBjD2FJhp9bnBAwiTn5k58uxnGq94y7J14vsCQaMEsTRYKavuEEWF",
  "key11": "67Fix1esYhVBdBpK2RhyptaKur6Bfg6bTvtCzms2gufpT4d7mf4re8U8PZuuXgAvrk3F8SqUwgMcqzWcKoesVPt1",
  "key12": "qYuKBpdHDFT6bxFYMghRnYF1wXG1QFq7Ty2KScY6QCgStLJh6xnC5ggm3RjeLLMur3EF7S3ZBi8y5ySQZkUrPP5",
  "key13": "5gCqGwo6bFXrevrayuBxexz74M1oa6eBVwnX7QhNak7vVTSKkLsTBdbLsT3ePCfHo88p7k1wrDnG7xdkxjKhS8GJ",
  "key14": "2bwiazxrf7ist92bDB9L76sjfYnqarbNeGDsQGPTAhLV4KHuq44djkM2bHkTp9bhDq6bbdKhCRCDoNp9qBxjuzeS",
  "key15": "JBGkdBwvpwjwsTcgg5zvnZVQxfNgpipeMg3p7mzwbboYVXnoVZhjQtksejUn8ec6KkjMcyxAvX8Q7wUmzYFmuD1",
  "key16": "5fgsASq9khqedDToQ6cBQXxpPBzRBKwdfoS3BnzWGMvq5aZM1nDfgpPdqMudyqrrHwHE3Q6qvnBQrVDSAniZNbWP",
  "key17": "tsCGWVRXKz9mX7x8csGkihj4yRRjc4GXUZVpBMUHc6GTGecRy7X8UGJMzURiqQ31E6G2WaZgRDG6E85ZnAGt3dp",
  "key18": "5zcxQAjbjbx8hiuUpV2zoS9e2MNuxwqiF1YSmScPnxBx7mqopxu3WbCwQkXvfNTiyNLVX6fZtVWEYjFQ3sYsKN3a",
  "key19": "5GxYZsZA8iDzibt9Uj5bcA465mQJ1PzG2vFEA3gVSYT6AzYay2T1gvJ9y5avpoE8C2zZVAzq5JvMpP8XFfCFk8sZ",
  "key20": "4gj91VHb7vGW69emQzKtFsHELxTKT7bM3WNvRTVDPPHLoCc79TkGjJNW2JBPzEwqHobRmR22GfJxfaV5Db4jPyn2",
  "key21": "2ucgbGPX4Dw3FpmXK9DadqSANTNfq8wydqUydMmqkrs3xeBUVXpTpnsjMzEs7dBkaLW3qPCKdk99iboB8tfArSQs",
  "key22": "2vN8Qi8jMw6c4nQqKKpL8f4PqXx6nmam9Mo953tfxE7uU246291ya9QaapYtwMQmojHcyaiazRcRk9cFj7Swxkbu",
  "key23": "4GcriutovGH21LEdXCtorcY575rpQGAsBbSLGnHAsNdogno78AfraPtXj3wKvpNozj4jhq9q9s77uZob1i1mAcpo",
  "key24": "4ENXhmNvxeBQxQxT9F7zUxv3YkZQadAdtyG9dQuhbfRKdTvnjzY53gydJUizxqAFo3coDpWMZhpTLpS5Es58m3e8",
  "key25": "7TNEm5PAZcBtaxcdRXSi9gsyqnY86DahPmhkEnVym9wr5XvMiow7o1hte5z1Chfgc6NSzvpM6Fz6WFDzQ4EZQzN",
  "key26": "NBuDiKZEbxsk7z99jfVKNeFwCbwg9Vf9DgkMKkRHZCJ1YcPu9mQWQfm6NSVH66oU9cNNfvQcZMfQhDAe5Y7uDaV",
  "key27": "29eH1ppqeXPvdfZyExGVEMwhGzn9Cxq6Rms65wTN2hETg4vjDWYJj4eiuHHJD9pDEc4w3rjroev57M7Rq9VpPiQg",
  "key28": "1Z1m8PcGeFj5dEiuDL7NWD5aF3zoUgRTkSM6tLgRfw6SFuHsZagFZNzCagDHkG5JPvuhhKd5ff8rKGForoo24wa",
  "key29": "2BeJjaaNjgXB7zYiJeqAvqbxeTZPrDgoDHuFD2FRLX2ZACJ7JMdLAwCSEUa1XahirFF5jYWMwrSaoPg3eDH2LHZC",
  "key30": "3NFodwTt8JbzTHLasbR9xQ1eg6Zzp82JV6skGTQ5mQi6XMQ4d7kBDQsXY66SsZUjaEkmyrcEpYEgQkCE1BNvR2mm",
  "key31": "3uSg3nMoDPZFsBdQQpuGvJNF7PQZDod3iSHbhCjG3XK7joPAX1ZnSELvwAPeyg3Hd7Q5fugXz9KEQcWnz2S8ww8d",
  "key32": "ffHn1tT8pyEv7mdshaZDqeo7bivjaz84zk1R9uLd4X3BspJLVnH2Kua6PAVKJc17BWg7jLT5HBaBnkwqUvnJ2ef",
  "key33": "33nzgtD4DVKXjJR9tkGtR8AA58ENkGTSZ8da3HvpijhgBXATUb3FYTLdXhTChdZAgeD8aNu2VjBdx3CAUK4oTMpp",
  "key34": "uTt7nqQsyFUJimuxiYt3c7HpSKASwkHYPE4DnwbU8DwagzjLi4ZMtMrETxZTzXjT19McARG3r8nsjaxG2icTzpS",
  "key35": "4AyUTHSfYhMf1h8aZmmLSDYqR3ZPGMoUgaaj23pETv8rcNWANSfsqhmGNwoSYf9gYRfTw95ZG8CktCA2FkNPNaP9",
  "key36": "29VdtYKPZyxx5mNsVsUq3wCSChRvF7fVQAkptWeRoNTBp3oQCewbDXBo3yKWno6VvzSoEYasGgGAYs8uyxVb3Yki",
  "key37": "Rx1ZjLqErCGhFzKYoMVnbKqLAN9fzBPYQ4ZMfLQegecB5srwQkNg1hqtbz3e21gNVtAohdjf6JDCpJhV5WgFz3h",
  "key38": "3ZiDPQFWhKTcUBV82UdGWrCjSpTMzXvaoFU9JtnrxW9b5AA5pqGnc8DvKvJBZEoszwGiXB8hzPbzqhg12CRMki7Q",
  "key39": "54ghsSaKAuvkD2N16XJX7zHHHfWodhR5pcHeaAbLpW1ocBM3pwyeMhfsiXjmnFcQNbbwcfubbWpxCy4TeyE3kVyt",
  "key40": "3tM2DZTzgQeerkx9518SUZ7naJDie3WqQ1zd8BmtSiy1cGUCXHN6rkvBKtpDHNWdnoXmMZvyKLkaENmjDTaNpATS"
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
