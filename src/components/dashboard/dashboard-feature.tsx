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
    "Z8j62acmL1eKXnivprYMLqjR3XNTb9zKTnKiawWCSvVkMRz3aPPdtNy2NEHiF8Wh8AEHpao2A9Dogg5svrXvoJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioswunWqdkaYzDWMdobaTepDz1b49PDqKaahL3YKxh6WDD8TF9KWhMJbv6XNYt4v1EJC9Qgc24CQLFzjKerXH8A",
  "key1": "4NggireTywJU9bEDemyPhH2MUEovzEka2cck5dFUpqE17SQH3qBvTFdQXVsfkExA7dRysNjQwZCEPjm8Hk2AZwug",
  "key2": "4afhg3PxKTw7Kx71p1cEuEqqa7JeDjxQWLbtU8Uv45onTUq3zzUwzRGZCgKgVMbjDwySfT2rinesyD4gShyNwLst",
  "key3": "GGF8JAq1SDyeezdQsPR2xWvScoRfcG8Ug7drvgR7YYLRacDokGEeLehdYPNRQjerR5tQ4ZvksA6e4nTZUUY7dpZ",
  "key4": "4w7E6aVWgt1GGS7fgCBp5Lf1CcfhcGTfSXkCvvtsVVK3rKvUaA8Aa3gPUANfzEzNqA1hAAWG9QWzkEPb9u3UUSWE",
  "key5": "3u6FMka8aFXW5XWUCXEpaCjmQpyvvtaB6ezV4TH5cDHxfqCGgVRyFdPThWHxuoj6577PKMQ7eMgthcxSYPsE5zFq",
  "key6": "5vmudFKSCVjsqyQruDqqgmkSXbaSjeXowaSeqC68ygFxgbWxMd21ewqydMB53cQ8k7TraXx5W9kMmMZvmEiH6oJ2",
  "key7": "3FwAorcMNGYq9biHAQvX25VDqj9ueNVdVjqHg2L58tKPg5cirw18ffZxc7Zj7b7RrxRfUMzTsaWCWRJbUJDJ1mVT",
  "key8": "4mD4es7mRMAc94kwCr2YyucY84rxCdk5pt7R1jy9GP6jiBbucK4tVnebSDw4DRcTxutmN3HhKAbrbmAqhpMPpzfu",
  "key9": "5KPeh24JG6mFWaUD7w4anXYBEVF7E6fsT9PqnuSut3wx6StEAsvDAAmUn8L5qrfh4rF3p7gMuyM4GkTr6Ew8iMtj",
  "key10": "2avAzjhHBdhig4JfVZMNbdPyV88pTEs2ibWgNRTi3TTjiAjJ12CCw3Az4zPV7RjPKj8DjbKDbC71pybzSosEWc35",
  "key11": "5QbwsmHV622B7dT4ceYZhZsGaQ9KeXFUhnY6cF9Gu5ngaNyqEkJVF9sWo2p9bn9oA86RqLg1ZceWy2P9vJ4npoHJ",
  "key12": "652vL6hT5cKnrT2qBZWxm9XQYzwHuWKE6LuAXfDArWDEzEXeJoC6MZzbAjtY5EgajwKbayg3fCajDS9nEaWpw8N4",
  "key13": "NanXyGi8UnVKNZyY41RsauWBWAMxGJMHuQn6gSaUu28PbpqVbVsmGJnFhpjadnoTdvdZAgnrNnthLPN2kETC2MF",
  "key14": "bnQqJby6JXEcpSsngjd2yE76LPkvYZp5t3rWJDMfmjCBFqnjvBnjUxotUTNa8U17wkbsRZMFKs6gJWP3i3R4WRw",
  "key15": "56qXnGhsah9teLXoKw5JYu4oXQaBGqnVNGQT7jgTQwpDmAhGz2qKFVhWQ3722mC75TH26mpUT95zKDA9ad7c9GXp",
  "key16": "4eu1UNrAk6NV1bDKb2K3HED4tQQMcwTmHJrhJLCNHhrbfBGKPCuNj9KwHh2XbEYtvenVSjqEnwXqXyJfoK5irn8V",
  "key17": "6iWiAKJNNvTC5UwkiZRmjUan2QxJAjeABfmdRnLLtN44vezeXbCjayLQUQEpV4PELPbsBy8Axq9QFdLWR5QH42J",
  "key18": "2JGTpSrvGLCH87nW5RBtRXLYCyAeY4XG87ZLFkJw7CZhxyjPYszeLfLKjNYazsvma1FYyFZUaBjS3xbJhMef5RXq",
  "key19": "enjG5Ppy7mJ9zR2vsvbKgEMJdq4kHPPzYbP5MTWCPypUjYMKLxPLpSthwTnDz91Z3rJ4x77UDvoFpmvcAcMPmQ6",
  "key20": "4YDufByv4jfAFjsAMbgvxtg4tAppq358DMbMKGTXfyZHSWkH7Ywvmdr8qgHtB3CH2UgnsRC3NZZ8Zw6y3JoeWb5g",
  "key21": "2XSMAC9BbnFMaSyfjXpLvrc1gu4bWC9mcHddcGdcJwayBUShENikfxjAFocCfNyA6tqRgWKLENX5aHok9MTTfnBC",
  "key22": "8RTLByTabvnAyu9nuMp8hw7njQ9y3W4SPQKCV7UQdEm5pcEYtBgmoyphkEMwvXf8PXxb32BSV3PzWBB6C4yqR3f",
  "key23": "4DxX6eeqTnnzaBT9RG7ZqaPne74cknYQfxb6WK9t1kqxvUX63u4871FpbcEMo5Y6HT4HpeWDivaGfosYKTfEmcBi",
  "key24": "3fZbMb6Ay29VA5GUsh7ATri2oXLCNZxjcq1Q9FMxoV95eRRK4dKpEL5S5bRzULcha3nmqKVXiPhLKM3EMoR5YyLg",
  "key25": "5NKCyxzZTtGDCjo3YQTCZsrsStLzERLfF441y14fWevBaUzQfCmvjNi6FvJe2xs8KHxqja9apqZZJ6wENdjqmuzF",
  "key26": "2t3H3ugjTXAbzehnEjQGihzLQnLtMtBsnUJQtPX3xYUkFKBYW9PXcwftvLCeQo7ZXGQ56LA2PBFifaHrzatc39Kt",
  "key27": "56NwHjtYu4i4q6Jmf9syq1FeTbSuozFSPooDdXCdskfsyniebjxeqn9XJJuanAZAWkEiTYZgAL9PSFvMdMukdsN",
  "key28": "8RzUWm6GUEDunwnY2oMCGXdNrSe1nAbVSLk1fdvrMskFyL2QC6k4D6atNUEuum65gwsXAVZW7RxidSKwJ58RNHL",
  "key29": "5Mp7EdfyeFYxZu9qFoTd2to7zgjt3HAXbuRd1wi7RjYYpsPSBSYPXcFgwejMvGSw5h5q577nvLZhaQ7FsAEDL4dk",
  "key30": "3v4mckW5vmXrFUyowQp73gLBCCxm1Zy3HicEZEJV8Z2zxykoKK5J2ooY94zxJSMREV88DrszKzkxV1VD68RVSgLo",
  "key31": "2XFpTF4NfXD7vefRkZtZj2tEue7YS5J2tniceWuCB4FcH4kfhm7UGbYxj2uAUM2SZ5GE89e7ddoXdrys9jP8iNPe",
  "key32": "28AQ7vATGNa7DoH3HJtSKGh6y6idcaB9j14WVHEve3XqsMXH9QSXodXY4zN49Y4M1RZqnDDWYHmyDTErKYu6T4v2",
  "key33": "4VM4fTew6utSVNcJ8Hsc93cLpVUsCheqWtcHbSQHTteaWPKTbNU7j57G9GQYtDd4MtzynVrKgTgXEsZhYYR6tdFR",
  "key34": "2ri2mawsdPCqRC8znk5NDkQjLzsgfHmLRd3AtdffqqSocV8wYbugJgPGSPhfZpStfJkLxgKqcwPs8zQ8Zb2T3DUY",
  "key35": "3v8KpzzdmjPpyesVXfk5SeLaPnNjUThei8MvjP89AkMpQ9UZHQMK8a36RvLY4u8R6z9TDz4rxf4bJts2er549jRh",
  "key36": "21k8HRejZLxV11DeJccRnHDgfK9QwbowBgB2kTND6YMR8xh6pvY6H9XXRDffPxGxDoWMKn2J5NamZJDDhsMvEHPn",
  "key37": "6cbtxvuNMRcMSEgzgWHdo8UNyqiU13LjuxanQNMZKaR4CFBH7ypQjpDuo9pFEV2C5ExDM1eKk3tGN82vgdtaVtR",
  "key38": "3wz91F3LwuhyRjsxsAfo4fQXdMBwMWjD4uwmnX51Qdu1WvpSMbSnB63YothyXtyA1J3dFXhc1TLT3CLxLQFMAwu9",
  "key39": "5u2R4TazWWCBAyJPfsuWS9pVbLtZJu3Zugi8dxJ9JGmAiiWLRBduVqDMnyhoBnP4erE2PCu928cz5NGfQheWLEDu",
  "key40": "3KCBYVDnGSchYo6XRBM3kQ2kkxNtNjZbgZi51d4m7sRGxmKZKKef3nw7MEQfTpiVwssGyVnv9qCR5HmXDkg9tsEu",
  "key41": "4JXm8RBSyzQVHrcAJkzff6JmrBhsyYu6gLgVgiQzM2bKPZCVcHJySuW1P3M8g3ogDymeGr71Uk3NzFFqWqtj2WRx",
  "key42": "4YmFxyNgEMn6ZmLjX7yHWDdwQba5gFAcrjmRrFpFfnEHE3HUSxkXmXYT1q2KXjUUv8GdjzREjvz4Vy4MXSzXZrGa",
  "key43": "4kRXFDqa1Dn5FxEjVSomcagq6CNsp3Yzf72vhDUinX3DwNQBqNSPf6WAFdKkBCnd8jW6M1gynVUVntGUJfxMc7PM",
  "key44": "56eAJV8vN7y6SX9hiju3nqPDAh7HguvrvbEq44wFfDXJhCzHQvhB7hTovVzT8PtSbXPREwDve6j9WP4HmLPipJDp",
  "key45": "474YhfVhDZF4op73W1i9Hkw26WmEoMxy98XFr1QHqpM8e9CQ9bazjHJCc34yJRCZFa5ViwSZUrCVS3tp8FxjkXyJ",
  "key46": "2xDFSUSKnKCvkuNx8jo9SDFXQeD2a6gNZCogdfrvf6br6mu1Unnuptw5DCmpGTse8bM6FkkiYJqZrikqUuusitgF",
  "key47": "uYvrGmduDtKQdXLmXH9mkvC9TSiwDoLuvzgU4yDM3CVgE8QQ75mLvH1hugNTDcgsdfh9vSFm8gPiAMuc7Vp5oga",
  "key48": "3taLYDFmXFpGvuu9pTUNUnCkwQcvrFrx676Rxh17w81zrUxjXRucVL9nGS4ZaJVKGVG6deSq8tnyvzqvMY9tyMq7"
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
