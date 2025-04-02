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
    "4SP3rFGngAEhQ6nchTAqbUFmbxwjB25XBtaT8jxNjCQ8x5eAtXQ6i3AgjKrPdJKp5zESRiHtzv5GZswBBNyrbnMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goPR1SQqAkzSB7Tdi2euGyqK7Ggz8GFxqQTsVYwgzSdjYRiG8bkaP3tGKsrhujMa5iP67S74SDmLxjeavQgbfVm",
  "key1": "49meNkkki4vhPqiEVxZHWYKWit353DGgbej1S7y2rZDk16q4bR6iqywDGWhptFdSxRTuffi72tXAxP4YmiCDRbNu",
  "key2": "5D6U867R6TiZ83eb5hHmtZ7LZmF9Feu5on7N37U5H9m6WdRndpZdXHAKoW1LBcUxtZV9YCGdrTeLNCm3zfGqZXqG",
  "key3": "2SUo3Q8FSoVi6uYFyLa2MVMf38FPpxTQNE2pEQa5fBMNLwT6SRgMJxpxHMQsGf2W5LCU42N6KBNhJF1hZPJ4N8hm",
  "key4": "54hTHVWQiHaYbSNzKWNfFRSKRant7JZszFhDWGiZ6AQvKMkKMMqjqBUhcYzzvojJTiFb6ggnZExVzHhr8nQ5HTRn",
  "key5": "3gueQbLY1wPkCxK6oXgWCbswaHfnJVu1KzSvdLykD6Nvu4VicdLMoCLM3gXbZEzETMmWEPE8NmKRjyvcGjzy7k6B",
  "key6": "5WtRMXstmybX1XDkCbaLBb2A79TF4A6Kz5UxhBwRy4ee8BcDchrJKhhfW1jcDa4LeAnpV9QN8jFvUz7x7Xed6dfR",
  "key7": "4m5vTbXZEdDr5aUR5hCbjdBzWy3prDxNeVRefRdBmWrctUj5pJKu4WQtTCAsZHP2DSSYAzn2ykWSJeyjHkeAnZkN",
  "key8": "3g6pvaJ1pYmcBbhTe9ZCnWFZduVDh5qebWSMF2eY77z19N1NagE8Z65tWjnr88LGf1zPe5GA1VKcKK2Naq3FEP8j",
  "key9": "4tm5P2wR2AxBjnWHVbCrgc734wJtmCVvX7kwe1pbjXym3BHQP63o7xCxZyTh8tCTqcs6CBZLahJF3CeY6XE17Lec",
  "key10": "5FJqLtS9YEg6QyMpWiGu7X3BPDQFspv1pGa1GFZoSxGHxZtdV9Lv4F6wVuvNri5HPt7azg9LRUVwnfE9aUM9dyGi",
  "key11": "2cr5ohb41aV2FF51xBCztByeK6R9VFo95fJyjMRzjnk3EqUpLju6LK4kjdJj9ZrbbaoCsV2YoEKBqiW2Xx6KTYmQ",
  "key12": "5a1xbKtTwzat4Dfs5HRA9ijUfFuUZVPjtVSi4ZDF3hYVioRrX5BRRtT66NyAJCfZ8S4fcwxnTfRDscLFrJyPAfEk",
  "key13": "2XZxBEYTvvHK1f3k1EPM4rsuk3576G1BRvTVBUrAseEAgDrLpJUYKh8siNRzm8vxSrcoDoKxhVX6oGAZDhtHX8o1",
  "key14": "4twwJYm73UCLn7WSP4M85wYGxvSUdaWHm4dHPGsBuqsRzjDmpGxtWV5jVd4u5C73LWkKkoZwyRPvd71eBTbwz9D3",
  "key15": "yfMGJpThW1asjk6UWyBTns1dBkpqpLfVjcdfZsvdCKGFQNRL6Xb7W1RpTw7jqvNasgtuHGQ7CnPL11uEoLvmZ1M",
  "key16": "2cY2DjTt4URYcguJ3eKgzpax5Jo46gwQ7YovuTGHRuZszbLUePkTugM1aJCtmbSE6wz741preLVf1tr2F3LKZVvf",
  "key17": "288knAShYwSYENVULR5SVzKPTDNknhGQpZHz4JVbHTyqN3enhEk9ymHXMEpvaVpJAkU2ZwU1wTThyVsoB1RmTNXH",
  "key18": "3ddGHvwrMRTPHgRJbAvKD68hw1G2Yob9YTacCNZuMvfgbEX58zQXvRBGoUX4PTUiXsNcog1u6742n4VuhZ8TmeSy",
  "key19": "4A1YVKdBLiXjravNBNHbtovEa7sxJyirR5McAiwksSwX3k9YgKsGzTRwxTNx8X8m2Yck6NAxVBDoLgNmAKrBLoP3",
  "key20": "4S7TVukHsKZat9RKHKmgJs4f9tvr7p1G5wee8ndRgpFpWBHSrjRm9k1PbBH5p3PzZZa4F7j6Nt3JaMUWvMKcKjRY",
  "key21": "669TwsWWvc88VVp2CEVtL4DwU5Ht9QW5gnN6qbVbSwUkhmAWxHsf8v5V69d8k6SqrhNdBJL3xZ6tiPRwr2L2Pp7z",
  "key22": "3LhzrFPDxUnGVoSdghEu4eQZyBrzEokkpQiiqecf2hwpN96yeDNpm6CKYSF4Z7QGtZ1Nju8oYigK3kF2oM7xerLZ",
  "key23": "2KgqqwTtMqCKaBkRNbgRrJYawNE24MN2EUnUhvbBB4BqKndtdEyso32jh4jVzRFd9BPcGam4YkxGB9JAxU4NSo54",
  "key24": "5Fm8n8enZJAPoHck3E1joNH2M6sKJVv1sR32R9Acehe63ZR64WwBiyDKCx1jLsnKvxrReHesjxNXoFsToXKiBBkP",
  "key25": "CTo4U15hiDw4H8Li98JsNeZuUmrQdKfdhXdE7kDGdnYeqY5McwKP8jSwPRxkc7G19LHFMQNv1BwbGPb2qxbdhwv",
  "key26": "29X1uSboa9iRCikRi76SvSsuyUaz1pS4UqzFPCUPPm4Nn6p2FxwtFGPuZUsm91whRiwhdk8TVEYjevnn6A4ifR2h",
  "key27": "5KXVT4u8VD4GtTdtoUkr1v7h7RwjfozhQpUf5atnRdZsFMAZuaKtRX1o5NMGK1DyB4VFMef8gBjwkym9UinjH6qS",
  "key28": "2XjibrRRmgqvWxDr5rZXYKwiXxohhL7CKZMpKnaYYUVnVkt2dJQ8QP3kWgRsG3dHntmv9JKfbM1yaoAbNFtTukAv",
  "key29": "4iZJB8URaN7Yb3Gsrbi5nrhBVMF32mUAqjiANvLrS62W5GsBJXjFi4tRxZciZoGWUpgbJ58kujHcpXaFByNLmX4D",
  "key30": "Fg3AwRB6DLmPx8upzeRbWLRM7AedFEzpf9XTjFtJayrWVXAQPwHwk9B4Uz6ECQqhy1R1APeMdixSK4CcF6xDnYz",
  "key31": "66pXrv2RSwZsUArfKP4RxtEN2ca2DbFZwyo39T33rutxz6PLqHHHRPqKdjYPpQa5iBiCuSzZ2XxGjSoZ1inUZQnB",
  "key32": "28Vm6Hj3zGJfbWrNGdSD4CaY2tTnkntNR6B368rJbbwY2rtFkhd9dgpBCnpfqTLLrqtLu6LGXD9cbBvx5dm5oE4r",
  "key33": "64iKCMosFdK7SKQFnheUdyLCKFaXuPCJkmXPXAhJhaDHvz5CuCviDUYv5WCzyrhWEti4Terbm1kCR7e5219oWVFW",
  "key34": "2bgFLJG3y58AAcdx42su9TZREsvvw5NDqFj3LZ2yvF6nfMr2yoDwVFsDQnJbf9Xo3AmLqecyrmTWrww8ZuqanYbV",
  "key35": "3yUcG1tEwABFwPPapyau3pQYx2H1WDefJctG24oHusTsxstSxXqUC6SjwQFNs7zC5S1DMv64BxqGwt3jZYHBJhjf",
  "key36": "3B9MXBTVWF7299ux6B7jAm98yyGRCZ5pdLybCFY5XfKDTBG6EnPfxfnSFWC4yPw1FQrUNSykuKzeEGShXs3uMoZi",
  "key37": "3zu5RLCYZp2AsXH8wwuiZoPw9cwQka8j7gYHiis7RSSFGkKt9BZpWbPankHVCeDBnrBLkZJ8Uuv3MwgMcv1dtbdF",
  "key38": "2mBim4Po24GhfcBPaX3wPZHTcad5JwG8NxLv7nPR8YB9y9geTqsjwzkLC1vk7FWhAg5yy6dZ5SVxkHMaB83TLQyE",
  "key39": "3vL8SNK7JQiEgcPZxwSSus3QXV2hjCAWUPbxCNq5nrXMuuDbitLcVQgxT5qc1L7P1Ezdjc2SWeYbXV3tVNm7R7Fv",
  "key40": "4ETrDa2ATJv2w4X8vF8KXgRwQKBtf5UiKjykPxZog8gYsN1qctCu6dzc57bnYPbNjGvJ13mki5Uh25gVgsvkFCm4",
  "key41": "4RakBoJnpn6dxP3ucfu2WfLtNr4RMjHpCj68iQPF9cvuZaVRaUUULUB7LYQvn4oaLc5qQhsP6YX8yCyHN2RaaS4L",
  "key42": "4LhR4LXHGxcy6CfhFipLSH26DTLcDLUgFUUPpg2t9Br8KJV4AxwSBi3KTubQC7Sx7ZD3hGL8RbWbpugGGsn8LAF1",
  "key43": "4eviZH8AFmvVJb4nrNK2LPW5P9jqgMWPaM7KNyyXHRLbGA92aWvDJfBng82aVzerdqtaNEyPVYafnEuNynpttt3K"
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
