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
    "4zu8Ubt8UHwTe2emv772NrhmBtYnqkzxggdWF3xX6BCQDhN9CAHggrssK5gJjFY1bEjFQK6iDtTSDPWA9QfcVjS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KijtTntcVuAbDnjsvJ5LbpVxKWDQiFFxcQDAgSkFjoaYYr8v6p6Ncxfq4gwT4LBcnKurrAGQwSabEMnNMMjjgz",
  "key1": "5kTH6TYnXGHQHZRecNoZKykkwTqFhhAV42CgqaEDR8QxfD4mYeC6npadQAkpDjwaaX7CXtXJVmjQFys8LEN81Q4E",
  "key2": "48ARuCzZVjNGUwE5M91buyUEL5sJ4THu8HsZuTKJAFwD5wpGApkqrzJF47siHmiiv5eWYZ1REDBiDp6qixoEkq5q",
  "key3": "4tTd7YcH5McVpLNrgCdceRVHSue7yD57CExFRcy7jfWxBKddjhtcBeRKdzG356DjmxBoqetwu49kjCcyziDL48hs",
  "key4": "2YFvBfdR2ov7CWWAcBdv8s7CsNiwekEADUMSqkXgb4DYj7mPX57JZnt8aA3h4FeNRmZNNetWD2sG6sRPvNwnRmWX",
  "key5": "3rdep2noXQEpvZch6zK5Wz9B3U2NmmzjWQAps3aNe581FsLnHREHp2cKbfBGHGgFpohuyF6QWY8Z6TtX8CZZi5Fw",
  "key6": "3s9RCovNiZ3G9hBKVFQNurEL7KXigkUi6Xtmc44Ta9oKQDLVKhdn7sYZAAm5x8zGjAHbo3WNpNYuySQj4nj62vUL",
  "key7": "2dcX1Pym7knWG1JvPCzzrTz54KsUcC2dZjQbLAGioHeJsH5xStADg6JrrQqanmaR9davtFA59mi6DoYBrJzkaqKb",
  "key8": "5aaJ7jENV2exLyGWt5VtrrA4MGRz8ZuMTNTyc4U2e163q2417w8CQ6S2AYgtbDTp6zvifq1JBWJ7LK5gM4NyJLf",
  "key9": "5sJBjpE7tT9BUEtPwyZf9BcPb9yHLWRj3C8eep26cyQyP8wewBYRMcXqJowg88u9dNPePYSFQRHPey1gaciyEYzH",
  "key10": "5v8cY8vkZn4yFhx1bcEhKatWitT5NPoXzNa5L7ZcSXJ24obWjDAsqB6wvSUT96yzd5M4hxkDvX2EpuMiH9XvL1HF",
  "key11": "4517YfwVNz4cYiqAGjTv1xtEhbbZpHR7EW9pH5di7wHszE8DyFkmpMTmMKbTvaTBCXtEro2Ni6nuhdcR89cx8SaJ",
  "key12": "2Bqy7UAGCDo1oiRX6sWj6ZxnRe6zi9ciGd4izaTB7hdtEy5a2PRpczc6jzWtnVEEUvvHmyeP4bQgfqBUASG4eqsW",
  "key13": "2pmQmBgmvEHNXPNrjPQY6vpmKifGUSMkUi1wzHfbAEHYK1wY2nP2oSw21dkoKPrhcrcoN6kn9roNMK3dU6nckSvU",
  "key14": "62PwpFKsWWd6UrLmKmUegg4kVzxbJ5gdfyHsQrTizyZyrAduiDyimbqNSFmcXddDGnmep7pWGMbbic1HUcPSJwes",
  "key15": "2k9vboEzCcrHCuSLAaNtnGyGbAc9KaLgM3MTSFZ198V4okmYgzBu56DskZ4rHopzTb7suvDA1hQpDuNZqUKAVdk7",
  "key16": "2VPKkhjcXAys5AeeuMwHR77Qj75d12p2jtv8F8ERzpqm9BjZreS7C13VDYw175ZwUokTxKgAZjCLcgzzxZtAMd7i",
  "key17": "5YQPTHAseffxzdA2jKXHCY1SF1cKRAdvn3re5VbicD8D2SfZ2dmpyJHvS15fvb4ftS3htUtrQ63gnxFLwnzK3bWk",
  "key18": "21Bp6nph2HDdFxT9M1TiJZWFfpcZZhrmQeDZxyubz2nmXiPQ3KFgaDy7GaP93ZAWw27qi3MkMjRKBhcarKGLZLES",
  "key19": "pir2tVojWv4D48ouVvXTmrho8Wj2RzucRt9wxGXMAhEA79YE4sMr96y181SvTqDL7SdpYqg2RoTxb9SupiiVb4t",
  "key20": "GtkKNz18zrKEfiYot2atFrmDpLZUZfiboJwijX8R678D2pUUcTVKxpfRzimC8gmw1MhSCEvfGH6FCDuec1ScEyy",
  "key21": "3A5rUhSSQDgAs5hxV43rViM6qX6wHS43DyWFhnHUgwbeUMHXB6wH44CbH8TmwXcDnqrkRviDRVboUkPDZKsrhRUX",
  "key22": "255F5RUKmeBHgLumZXZkDxZjrQKGRiMsedJjaWoiPnxL99WY7HGVt5eYhaTPSUJgioMeWs7349zLxcdACpvfYym3",
  "key23": "3dogdesecNW1rjt9vtBQogKNdcAFNbnd75LzduH1Ee9pa5td3oNpgYycZaryWS4VmJKU752Q2RQYkvAEXYk9Co1Z",
  "key24": "5dtmuzdVc7SLpyXaneV3wHVzAkS5DZkNN6TtrpQ2DgT6JpgHWZK1HctrbmXxk9cwtwQcye2Jr8DJeKpW7xHa1wKT",
  "key25": "4X3NgtJ8SiwoFeHq6e2p6H4Cbi72JxiZ6XURoS6XirEChYK8kkyyWKaawcbor24oUYbAWbinWugwwjKG775GcsvL",
  "key26": "5wM1gR9H3VhsnFsDYaBVYuTSgiHHHLAadv3Cb4gAX6fvS7ZHKD9Hxzs67y4PYRgdEegUfMxrG7tkkLpwjxm7Fu23",
  "key27": "5awcBKxB6wcQpVMijd3SQgV4KmkBvy4eg6tSqUhzT6K12JCZrqxWR2137PNvQdAhkgMzZoEEHCkrR4KLXmXb6pqu",
  "key28": "3gghALL1qne7bTY4fYStK7A2u4o5gDmR6hguaQXfvFeveqrGux29xYNXyMYr1ovPgXFUrfST4C4xFimhapbDDnrk",
  "key29": "2NsrWSmgH5ENRLufTjD8sdZyWgwUgP8q7348iDoZZTYnNv9WBbBhtotHZraJHrsSTC8mXfc2kAT6Xkx6DNKqngYN",
  "key30": "gkx19PyxicpQNPV2Ds4pctbbYdY5Vvy2ULZhuuAwU3Wy75bk1TqL8Xv3LPKjeh6wJnmS1yKTmzS962xDJ3QCyYK",
  "key31": "4CWPy1xcou3RiWXqo7RCWRqimZAgvk2atgFrag3NSdLRot2tY6CBGSfE9EGaHcbUPPpKULfV5CtYwiD7zVLFZeLC",
  "key32": "2e4GanLwSkkKEkfu8YoBwuSqjgWNMvpYq3oYpBFCkDTbpwxpzdUJcnVT8kxvnnu699rJYuMMrDp6yck1awkrBobn",
  "key33": "4eArv7bY1sfKLBLrFmuzgc5DJkcwVgKamwydz8JHMKyEaCU8mMgos8kuN2zvnQ3P15FCwE1pnH7TpjEJpkL12qSE",
  "key34": "3ysqczQPztyNNQX3DgwvKEAirzcoYyyS5hN5FYVkAUoxFY6Zv81ckAJK1QoVEx6kkwfuShpmHmEsUL9rbiTiwcVv",
  "key35": "3VyE9XLDnsF4LYdNAGsxAyXLXiyBR5wVgxyPt4E2TVREWUn7LZfxU7iiGkzrr5sQy1NZxTUu6eRxmtCQL2Tb5Bwg",
  "key36": "35coMcin3DFPJ7kFdhtiKsgQuV7K6nwK136K3k6sX4YsdkEQnFkxwSvxcrn4Nz84PAep45c7rtRYvBDs96Dn2DyL",
  "key37": "4ax6gEEW8H7Agxp6dr9xeXToL9k4C69tukqcXSbTjYZvnqQdVSis8KR8bshbaVbpdvPkrGDsJnQT6VjMtiSdecx5",
  "key38": "4ZdKVjEpzAcMrEsWdSMja1dkJDqcYQiCpdMEnvqfSvE8Q7sNdFKH5QZ2WyJjMk9M3oRkwxydzpyeB25X6PbLieNS",
  "key39": "63yW59QcFZUi3TnBvf9qoACZQaZAQnw1B4yubtYW7qQcicTsyTjaXJdhxKnftsVShvE3BLncoSWZUTPymFmS88gV",
  "key40": "384A3F3MNeFtHtmLeCSvvvAspN7fAqDfBNxSq6WJZ4LrWS8k9ck97fcF6H6Z1Y7pCBFLNga6egm64epvnoKpBm2S",
  "key41": "mHZbnUQubZoYeywtNCrLJSbPpK79tUeszR3BGX8W2kcVwaFUZt33ETn2gX4jiH1jBzeFS5Er3mdLh91KwmMTGmv",
  "key42": "4whKPyw2WQCBqWSRUzVNydcsuuQpHvHjELAvyf4EHxyjHb8nEbSSG8QDHLGg9ufRtWYAgivr8i8E9XknoXmhbKwU",
  "key43": "pMUUwBfTmwPdXVpdyuL1TRNKh4dmDox1zW7VsLL8M2Dzw7dwDRmKH6PRCjvAAMW5eSdXGfJuvKUc8ToMY6HJtEE",
  "key44": "5VML5mTGZn2wkf3i7aFxiPdx3pdKV6crsqpcVjNS96hNjFGNm87YnarDvagHvJQrcCMUCTETYytPGL2c5oUXyvpj",
  "key45": "Tfrk5AXf8YNGaSe9DBKThcxLaN1UqcApwtmoV96WPNghdxnzo1D7Gc9kmfb4FHtMQUSm5mszmGiLW9H5KxMBLYF",
  "key46": "5iLPcYTQPSgi4i5YEbkB84mmUXKuPsSCFHwBRL9CYVyJrAj8vtAyHW6Zr8TBa87QKTJUraxatMPMxbYex3VbrWuo",
  "key47": "3uCAui1ePYGuHBddxeEkBKoZyfvdP2o11akJbm1GamK1VYEv75oAKBcixANKaYdDTpiKAk4nJmmUN2suhJw9L9jk",
  "key48": "5r4qZEukTJoYQvw1dPeypFqkZDQTm7zPv6QBs3LVzdNtcDYeWvXNeJgTVDNT9n6RJzNzKqnTDBGkuT5J9HkERnXE",
  "key49": "5QbGEww44NoU6vvPRcMu74tp6aRJt6GMtbVFkuwux2ERNfdfdxf1zsdpqb64yjoQtQ2VLjLXvdaC55hxsNodxvSU"
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
