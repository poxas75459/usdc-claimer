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
    "2qkzrw2aXP4iWoBRpdrX8QTULJdscQBo6KKpHMqie6zSiWCeDgDbAehvZigUq8DVcNobWQGqn27ynTaA2CfmTq7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwit3H2MCzraY6qUNKpYU2B9pAJnGN7RHd2q3aWrfBnR8mfFwE8pgompT4qe8BdeRrqt4CSAq474zFasctHP1vH",
  "key1": "KT3fWhUGPtti3erKMBQ5GiwvBRr93VtQ93oeRqnsCNXoYW23xaegSM8DDYQ15VQ5gsCcTEqkQMakgC3SuBnEcY3",
  "key2": "iVBYArFE54to1B5DnYqtSENCiLFCdmehLfpqL4jBXmBC6EyJonQ7ZBRKakThCh6wLYnxVazwbynMx3SdQ3arziQ",
  "key3": "5qJQ8iJtZ55wDBAzVpjMhWEp4WX1UKwrPuvze5hYNDywdoWkWTq1n7LiF5EKXNVpxYnquWUwak76gLqNjFGQYXxr",
  "key4": "4DFGEyAtVRMU5cQSA8LGSAmQvpQ7ScqnDTqn1nYCng4sh3MW1pyBoabJAcbtwyEuod9HzgBVokvPmSsmSM7NhLi3",
  "key5": "3NVmH1n3W8T3QbAVxfhgq8BtL9sDqts6okFYMwf8FzpAinSQ9ZcPyxiS8Zagz9EFrLNjt2NbpJcW6EE8Hw42kJio",
  "key6": "54A9XZtM5ne2vxkYFn7jTYrZYfXcRnxwTAW721UhQvCTyAgMKF1tQovVX3WJWHTgqbLMm4axKm4seUBmMNQxvP5g",
  "key7": "2QtU8yBRA1EHJqjkREzYvdnXSfYi6prFmkcTdMTHHysPgFpPWbo6MbTQrpAbLJiQh5k57cCmQRADFszhHg84aDZX",
  "key8": "3d7EqCDXfRknVyYxoFChCxoBFrJpViHqbKygT8zYSuGneHZ1mDaS19EnP1PxMoLvHpwMzZhKsUVENT8Xoh8rMZVf",
  "key9": "2jbt8QhvbwxHZM3HuWAgtC8tWbobq1ZxKxRJH1KkRKUoMPJa5AqDkcJ9xuGmHyzzShpc8ZUpxCUz4KFcTYCWwJCT",
  "key10": "HYgJ7mL1MhtQ5175fS3pAvLeDTvY1ytBfBYHftCcFdqHsHFpMN7XZUUL6D7rBT9544aGcFqYf7g3FXbikwzNePH",
  "key11": "vKH7EGKT3gfskSZhjERBbycLaXqaSMYWmh2r4rYj94QLxtwiijtL3Cm6utVbevtiHDp4aVUAZNg4LDdzV2hq8f9",
  "key12": "2Bz1B4zNQuKYjHHpX2RHfUf7wHw5vPctobUEyMqwYohcTkT2c74kxrz1WyejwYpGTWmUL9drhRWRbuivjFrav6Yh",
  "key13": "5o1kLLg2Toc6VQB9H1KuskxNqkYiocjnbceuCn5T2t5ut7d5R4UmRVT5BJbLLqiJbcAhR6NnRgirqk79oLrVdTEt",
  "key14": "56hYAxJpFkzZBcgMb2emH7NpQGdDkygou7Wg4aXxL6bwcKJhbJy9AUkoUHGRNDxJu6jLM7mXFG1KDfjPLkDA95UQ",
  "key15": "2jo4WUP6QeRiRe8JnN13qbYhgeRqsBmPjhNQoGA3pdYg6Mcvm3EtapJPim2jmAH1XmeY1RBo287nz5xXBbF5LWyN",
  "key16": "4Wwg9Cz5avTS1bLXuLfn8vyvsPBY69jvGWf6cBVuJinAzap5Zxh9f1KGzLPBVNyJLxYWzM6QUSfWiCsMR5PqQSxa",
  "key17": "52wL7VigViQTDpXn2bTWSVMHxcTCGt5nfBQPkVVKH43UhYCcRUeTHQEU7yivFHFu8nPBcSjWjoHjJCrD4sSFCbqF",
  "key18": "4ohaWwLAoNoCj6mkNVTCcymX6ycppio7MGM2hLpABS99QCuFTgecL8YEd4EaMfRV4NPXhLbyYx5hmhQX1pjRks1Z",
  "key19": "5HTutgvBe6AcjH8a7DDRAVuWFrsS2C8huMVGo2CJ1hVvzZ2vr7UgQ5Zc4mtM67Nk2sXxMPpFbkbkvkW44zqDDdWz",
  "key20": "Zvwgzt5f5eRJQsWR8Uhb7NPUe4sBmtkmqeExS9x7JBpB9EZoZEPMrTmYxLHWxnJ6Bkb79EVGV7mZpoN4KBNMsYk",
  "key21": "Lr9bmk5iNPdyRAfuPKEr8FyQyExSsfCGCrjLSc46tYpvva4bMYGYW6GkSqPj67QYtZAJn8xuzxzaPJcEcCh6ykZ",
  "key22": "3JYA5bipegh3CCdjAjMYsj3dwoC4NpyEoRTd579AYtPu5itrL4Tu9QMmdoYACsMq4Y1xheY52Rh2nk8WA7BTCL6Y",
  "key23": "2M2BBj6dSFaLdkkm8aRHPgfo6afQ8FTJJ5LfLVrfdEDbZ9RHo7oHPXeoVWf6R1YDcEEosFm2tWJ2aNFvrzsMi9a5",
  "key24": "BqLSVHwid3hrWNmmNAnDeLfRTsvod6Ueg3BCPbJzmXt2Q4eDRfwbQFK1NmJbrJbxKDCkiMSSzEzGcZGt5ndknBE",
  "key25": "3pagJUi7SQ5usT7deD2Sarfo1jmSF8hqMi5XG9GutcCQRaV6FGUSzYgLApUyRL8X2UmUfmFMUqq1x9ZKb2ZKu8zy",
  "key26": "41K5ahvYkHy8y6FfG6QM5Dvnn5qWkBoVxzMTZJkYidReJosnn6NMeohkHyerU66gLLbi4Yca6A67ewX2ip4aQUb1",
  "key27": "2dS8n57tDRKGctZWFotqVYbUvNs2KyG8APDbEWvGsXLinj4uLSmmGtgWusxrv3UZtAVSCKmT9tmDEk3iovHKX4DM",
  "key28": "3YmxpQ5jj3tHpt4Fkkd9qgzyDYaXbiSMrBN16egiYAjrCpSrqCrDDLwZRDBvqaHN96x1F1oba93MGKEWhVvD6oPe",
  "key29": "49ZvtZfNht1tQY9H3pdfU5Ny7yKizkgvszhRYeZZgb87Hz74T5qppNV58AJer1dm2fzsH993sj1RzTci2Z5Gvdni",
  "key30": "2akJcDDCttB4rgsPwutg8Fa2WCAkbPod3C64DbKqnrRjGwTm8pUZQxztCqkgFK1jqg7GUFDm37LD37yNTX1qEn3H",
  "key31": "5qwGkR4r3xTGA4xSCz6mg54SQHj2htR6sfuZLuUw8L9pa9HgBXH2X84jtAh6TmW3tVVatYG8SicaJBDXigwcPCSZ",
  "key32": "4pfSrR7CbwsPv5kDWwUwpXj2KKbj59kgpbtyWUyXVcoxQJ8TCH4hpozdiZK2uuwqAsJqXkjpAaqh1WK6VpMpsozf",
  "key33": "SPYAKboterkxS5Bugu9GgKxMd5mfbbWzEuvR1BYevjoYpf4vWkRYavDLHnyhUZTTqskEhjwTGEy1Nxd9fV44FjU",
  "key34": "Vkvf1PYvpqQsC3yvpKKUNYRuWiPy8K1MuYVTSBiFdzQ63ANLM6stgZY1WYjHN9rqCp2no1y3Ch64JJe8CSPppiU",
  "key35": "4gdWS5xiwuSvraBqW3pRjpj4TppB4vzuEMXheDiWVYBZbNE9hwaDS3aLcWxzpRTcXqb1dTDGJQqJEDSfdn7cc7pe",
  "key36": "5GVaqTsEWVEUzYzNyCWuChMZpQVrtnWEv5ivA8QfDkgp5w9yfArzcY3vGPb7JX86HjDG2eDhof1MjXwFEXaRCN38",
  "key37": "QXXQ3zMfT7cm7jhjvBaHH1awfshmKka4iJwYqGa4CJJ11zyDWXpaoDHwuAQArfG5fynVVgs2Fj5btUSWMxHWFXE",
  "key38": "t3yTjThWmYuVLv2HsH3sZu2tqFB7JooJJKAqPcDNmPsmsKtmLc4dYH5PH3WiyYBJQefnpiYgaPaBDLFC72R2Nu3",
  "key39": "32MVERH7AsCDcNncevQEtzG77jMbGQLpcU4Zv2jKUreDFKsNbfavyVevytsya6B7aTXGAXLvKZ2PEYVgaTYEBucv",
  "key40": "47yRZZ5tDpJbYWLDmpzkwUMroSQstTemQ3KE1RFPLorqRwwTme9QGxq4LyuMboCJKdpr96FtW1qMDTaqaFeVTHMf"
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
