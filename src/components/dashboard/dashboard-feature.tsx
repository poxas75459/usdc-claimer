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
    "4DUTTmbrDho7HSdUHKPNcdiiK43ckCd5h6xTDnLMj6z3mnyuP8sTVKpM9cZnmbEDMGP7rMXmSbGK78fMJoXSTCLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42AttcX99sKMpC7fi1Qnkfw4nxFEsuMhMvE28Gcvtp117wKtWwtCHNbzJ6yvBRxt3mzLwcyzeHuUTfyoEPd4HQ78",
  "key1": "5L57ehM6Mpv6bwTzMogEM7wwYZ6qFUbD1CAePy8XtB9DrjWsCYv3mKzHcSYMq6683RLSkyJgBXPdbyPcS79ziMpR",
  "key2": "5ErCPnVZwfeNxt1yWrp7pLwBk1vcPda71HU7vPLkjnfXTwHowXdG7S8GafD6Jn5k1BP5bxc5QDCAEh6QNRZJp4px",
  "key3": "3hWBVhGJk6YRH4BgArfZVP24RmYvbzMgeaxB5agyNaMNT6ZndK14ar8bGyh8o1eHxErYGgqTkK7eaz8XbzwWynZm",
  "key4": "385e2NDe1Kwap8tdyx38a9U8vFe2B7Sh7tACA3bgcJ8fqSeM4oneCgZU2HhruGb7qoTaX8iAisUh6rJGnABhLMxu",
  "key5": "3YzhaGcPaETWBZyvSQysgXba3ce53j3Mn1GLUan7ZwqB7DdmMujNjQYX8okoma46JrW91J7cxJrhGdKvEn8xs2LC",
  "key6": "MD53RLtwbcM4zHdo5BbpTx2rdRj8Qmc2tRcYACkhiBvJGYzUVXwmYzMNK6qqv59r953A3KPocR1NzJziJcQuqcN",
  "key7": "HaA9jaSiMMa4iJhHuH82usSMqvPdKgb8ona8s22zmgkwtGbozepuiuVTn8HhdMnNR9wcd4Q5xqzqhvZ6M2iTJ2Q",
  "key8": "3ZvTvNxKMT8BWJr7221KbPcbpv2WVUJmq1Qt6qZfm6AxZDPAjzygp3ZeZK6BjWmtVdfxZQGmkLwKr9s2eTdknXcb",
  "key9": "2w4ANLCaYYSB7qFgQaWD92FU6FRxEedwKLwG67zbtYYQ3VHcWcSxvSDfMBep1iiBjMaFnmE7sHmXbdikevc2zR2o",
  "key10": "5nExYanxbdXTiCs4qzFFPbvUU35CP9WHBbxPPRveohYrxzGYTaLyWk4YRJJHChvNxULkCnYAGawRgeXEtaKxpuDW",
  "key11": "4BNioeTezdPsnDCYm8NTnHfag8za328kiVCFEjKqfJxkBRPbie2b5HQ7QKiod6aWPP2hyo2K9CDzUnTQn8xxdrjG",
  "key12": "WUR5y1SzkATDiBhphJZPMWp2H6EbS5NRh8eekbBmBcLSG658Qx8Bpt5C7ue6qXgEKvuEafVqi8rGAhV4gw1UQJB",
  "key13": "4qbprnbwieXMFGs3w2eqMmX9suu6C62NMGARjrHWLGxVoiqt3wSjKUjc3WqPogX6YLQVBcWuCBdGxpFs9jzfsXW5",
  "key14": "3LAS53HYhiyskRYnMcWGwBeYipbmWv4kvY7rPmBvq6kKLkPhR99Qi28oHexkbXvVxSAC8Mh32BHJBL44AtLqHnrX",
  "key15": "2igY4uJNBaXeM3a9gvM7P3zAqz9WcaEY76VrE6151tkVCKdZKcZLzkwdm1DYDDqh5baBcrMKa5hq9KHLJfmyb6ZW",
  "key16": "49HuNywDmeiVBrZPyv52DJ1ARBf8QQoiwTYNthpLo6m5LacSqe2YyN2UhktVFQk2DgYqbRdnHcBFPgyAsS65JYNr",
  "key17": "2pFkR3ADkxSpXEyRpbU5h4arJwNTucxCwiK3S6h2P42EPTUiko2aEc9DQUSRR4ydYPNPDvKTsZvjyX9D6tm8zzMg",
  "key18": "re9vHZ7QaHWDSY9aLNzdPbziBcjh9VKV599BzmcbnV6uLKMBQ4A3tAoP3JG7xoww4J399LWhqaSsoLsuUK6iTud",
  "key19": "tf3i7wqfJpVTxx1yJaQpeEP5w8i8uc4oYrZg3zDnYEMn6Cx3VbiEhkJ1wdkhQjXpnTevjzvF92G35gmn4n897GB",
  "key20": "5M7tCfuA4LNGdorTzfqFz8wThfjjEbC9NrnFG1xA6GMn4FAdJ9XEqnMyHRXMiafQYGCNDhREsrEroZPY6g9JXzvh",
  "key21": "2sbFQoxiXZeKh7BkFzdNkxmcYWaY3WNSt8gFDJdEGB1gm5SpBGjLiTYWyG8D9PiCThCBPLfo5h5ByHr7Lano4fa3",
  "key22": "5RVzBHnWydgGzTFZqipkZVUD3nW3oNVQqm3Xa3TMN88UjYgk1q35WMLjXqUhihNQPa5WqSvGvvKA1BuXhaE5NAUW",
  "key23": "XxfkYNxgogAzD3sPgHdQPtbso9XyDAhuz4fQ6sy8yDHq8NrXPafo35rCKQQq8rr2xTD4NaE4YV4LsBiCLW4aXcN",
  "key24": "27HE9fAtTbtJ2Sbq7kPjbiwFbCNVzPZo6TjYZshm1oTYm9jQrqLJM7jWZ78RXr2rrMToAbzu9WWsuWn9HxY3c4dN",
  "key25": "ErECT4nfco95mp96LswQaHpsr1Bh18W2sSe49JmLtgCvuCcN8Cy5W8qpAfY365TFmquVbm3pQdQ5vASSCV18sXz",
  "key26": "5dAxyxDbSC8nL1kvfUzoxrg3gD77HmHqBnVd3eLjkuswt1fwxHv3PyRGahTt33gEZ95VRNkdmKZ8qKe74hdifyfr",
  "key27": "41LfQykybesAYKSZkcDcr6nyH4ppjZiHZJ9DMN3zrbTUBfibzbGoDjLpEzvyhSbAUBWoNgQANKaKHStLJ5ByQW4L",
  "key28": "4tSPzYTUAUpnQtpwCGMSonvPWiBcQfZWhkGAD4VBQfopawSdnCk9x32jaxVtHHGhnDYA5nqivjkBSrZZ1LX7TD2J",
  "key29": "3M4pwUQA8xhzGeDpLPscc5CVZsTQAvi8apGyVJomvviM2RsdmSqQ5kyLU1XfesZ7UNYeseLgA6dnccyMKxaWCd63",
  "key30": "4GhYwPR2T23qK4yWdRtZZxdWaFhsmiwsGZfM7R4XJGocLdoAcFkRpCQgurBZgye6yGC5feVoEhCynDe2VZBXmjCB",
  "key31": "2fhcjGfXfK1aDakgngGxYgpFEykUPFvfSQw4D35FRXa8bqsmQGdkb5NC5eNrNxTAnA6MHHcKtDFbYytQUnfw6tuw",
  "key32": "5TRW9aZRCBKfeUnZ64eXzxpbQ5zcrsEWteYDabrHxYttjTrRkPQVSTm8LsAeA29Z8HTWTmwpxUdCaLmxdsvDK9P3",
  "key33": "xGVqN3yPJDTHcHA2xvR14Vz6PYqZjeuTjNpTgfrmP6bMpzXzh5TnFpKMskfV5D9DJtMhf5fpjRA66vnkyvzhkF2",
  "key34": "5BeocQGRm26aUfF5CPQXgGhyxH3yyBRKFd84oaEnPx6UcYfdePjJwbe3WwVahmiLh7bEH7kiFdVu9MZqz489KAcw",
  "key35": "2PUr3msxWfwgaVPr1vCwk2KyQoD312G55qWePiXHJkDH2FMiza6nTPN6GQjfGiu7yzmGoBRNh1mgxtPGKLz2H8DW",
  "key36": "2Fv6sGUHWCDR88oc6NQK3MmBzxBay29XfoxPwTZG3HcMybZUJ2ZTYBVTbPnDGovvMgMGC2Y31AN5XFA6xYTEvUwM",
  "key37": "2FZmy9hUNj87fteKPZxNXbrvg9mEA8W7tQvfRR2sgmWLL7qdz8UwkrxAbLaXq7nssNQtqvFzynQaMPytHGbXApnZ",
  "key38": "5pYDrwydFFTdimqRiNQp9U6gvLN8LtQVDm5XYhrBKNxcke5fW73rRDjphedraC4h55KDTPHjJ6VoTGjgpmZLkZ6g",
  "key39": "3677SveWvYvi84riuQ4ExUzdFd71PPFKj4H7MjdQnJWQY7tWQK9y3eUKgQJJG5drk8m5PQMN9L9LzVxyL4QdggDb",
  "key40": "4Q1Sdiu8KcsR7xRLQMkQNqo9zcHbYHgqKUyEY5hXaCxrD8tHC4pVZjJ25cqttAXBKxGRS66UGe8FUXEVJDBqeTvS",
  "key41": "bbdu1xyH8yoNwB2uk5MNDXjhwSkHii82iy68yjpsnJPhciWZ85aviLrAP2FfPymZoT9iimatSw4p8XrXW6uAvSW",
  "key42": "4UjGDJaa6sXk3X9sEAcgeaGq9bewzDA18NX4jLyxejcbxpeieJxFNGiAJutk2qWKE3rrR2SPWfPq1HPFd9m1Uh2V",
  "key43": "3Jr3npLyaBdaN9kau5FwQsvvXyR6YcJyH1eMDhjQ3ixVq8YmfNDWbrK5ML5HWEyKPueGSTjPS5ySJEwDd7WpZs9K",
  "key44": "581oYEkv5QjHXE17pH3Gu9FSpss4kaDA2ZypPHPd6PzBVpNEMKLDneerMvcDWPTvxbXFv3U3f7iBWTfLBr5XwVNs",
  "key45": "2wJvU4KFseAsRXT35Hck24jC81oXgLrh4HXXcSQ9d5v1oSJJbobnoatoe14t8mC7fzjjFrzQPJtwXTsorAf8KMbF",
  "key46": "33yyAz6R5YWNw1biQgZbPrjU5vJS2kgwdkADQWQH8NdkX7w2bMESVKCJHpHbM9uhxDdfTHGiBHzjpzhN2KfU2HH6",
  "key47": "5F14PFyMuudXTkigxKhQThTicuu7eSsdRso8pSXscW1WzUYcxSS13VDnpSWHvDsK2YtEijbMeBNfH4rMG4YCieGS"
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
