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
    "4sTs5J7w5tDz1mf8gE67aackgzioqG6RFM5knKNQrS3fis2WRcdGudMB9VpCTVyjLji5cNNT37bn1qqBMzcRMLrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VNEKbyYnVKaQ1D85NvurTnc4MSjiLBZjGDhnb5Gay21M29kTBqTwPoz5Fu9MsVc7rPhZZ9YZXnDfBzi4UBrxaGv",
  "key1": "29M3C1qaPFHwx4jXt88TwhAqRyFtgY9de8k714z2xK5EeTvG4U56TbQbGV5NWKojmDhaCyvDyYi1i3VgDeUCMb82",
  "key2": "B23Napao8fR8KsbiVcfXwbMppVoZfpUGRg3fUEBYMaPQu77ibhSa7B5d8DtpCY1hreyqivrZzMpAYc7Cd8eUprT",
  "key3": "32XRi2QNj5vVufS2FPLNLF5UknAdybeqNsencxFC5LcLYyRqjNFKMfahHEKfSHxzdeBKrKJQSy5dDEBk8ES6ptsV",
  "key4": "54WE9K44SJZwpHbKdH6MXNVhUk1Wcz1JaUayMbZfD1XWGJABWyTHmQe9pwti8jiFsK9aeY4rTfFmdFofwP1aAsXP",
  "key5": "44TvM23uxzfC6PNnax5tEAi2SDvEuQVghCv2RPUo2cNyewvrKNitdZRKrxNqDVwG4hjRddzLSGjqdrtwAa1Fhy8X",
  "key6": "5MsSknYXwcLzRuMUD7NUuA7DvujcQGM2SVimxmTsdSL95qGqpCNe9p6eSLXB7PSkcmb5TzVLWxsswaq6xJ1Ct6N6",
  "key7": "23KGrEzshJKVJdDUfyX9Q8QxUU7AY8noWPcuccdgBtC7PT3nqBH9nJyxmWt5QTMwic5QaZ2dnuiMz2CHiCDEeuMP",
  "key8": "5BXZVEBJw5UniXzfitPqeVuHzNWzd6GkNChEUTS1sQHba2WXfwts4CjZCUsx48p93dFHXDTV7PGXXUGmH7LvFwJE",
  "key9": "2HDoPbqEJgrevPTsdnLMPGy62aJG5QfdJSmafbywMp2ZJJ2izccy948UcycdWNuuA8DxQrzjpKhsjMcNkamSfySy",
  "key10": "31UQh1UumqCQJj1PnicKfMuM9mDzW3swZ4zRQ8nzsvFrNqfNtJsajipvXXgwoY4aJ4DYiBUSuEhshcGndj4HaczY",
  "key11": "uweCrEzg6oyEez9SJHTxHe5VtCPQfiiNoP3v7rdXc8f8S4TS8r2chuvmm3JZpmSuvHUwuzSPC3yea824scybgPj",
  "key12": "44GuFURWnb5hyjNsqadAJat4E5hGoUskqF1TK2JhbnjYT275ViHmBdztqdhjE8g4PKQkFRNxpWtjh4YP1Xjj4dHW",
  "key13": "FZzjzL7XcADtnAZeYnsALtFAYQm3EuLdPhLQDXRffYPMJe16LjSas4nGS7Cm3z1c8pdV2FUXuAgptGzRrvwJznX",
  "key14": "Ve5XbT9cpcvegkWWN5NL4jj5bCcgWpHVMrZrBtqw6UFve7xzjZija1t4Geie5mtRtNNq7jbW7hoYhmXZjVVfE8P",
  "key15": "4BhWemUfhvkYHw6DqCh3ogUeTdp5s8rj1axXyjryg8BqvUaaLCptxe7SbMAASkMjpCMB22a85an1mJfLBK8tyj7J",
  "key16": "2A9ixnSqci8qv5fvj4jkZs9oaB9iDeYRHy35XKkCpvXJJewyhfCFNKYqPfttHCH2nLF1H7wgPxjKEgWtk1rx7xkr",
  "key17": "3jK1MtTLjXwiGSQqtsCcqzZXkREWQXJUaExeEJn4mnRT3ZF824h5v1DLB5pVkRDKcZiivZwvySbSMJeQruNaoNPd",
  "key18": "5wU9Tjhcws1WMhJHZcVg1VvDLcsAohi7PSyt6jerDALjN57CEYPpcwm3hBmSUF5421ZcxbhDzjoMRLczuK8gPoLZ",
  "key19": "6AnKMaUqZC9tqRjaxNxHzrZMqLYYEAEK9hYLFKiK29nxwjMkS63dyLLG6g9xsSzQk1VrK3BwncAmYn4eaar96K3",
  "key20": "3SxpCqpgtKtdEB44cwhbkyqeaGErMqcAqd2SehSAZmyjEDxNw7nL8D4Pdz921Hvw8FQGUmrPfEcvSk4mU68okjoe",
  "key21": "5WFsFkaYLTkbrvphwMdZyYzua9nt51iWrq2tDrqsi9sGpkjPDYKTNhicVsqySygGyTZpqWEaFkcdcRkxAturRcht",
  "key22": "3KQyd452n7VAEK5UWnjPCXa6Cch5JrRkgVNFmB2aXF4SrafV22vQBBMWf2jW8xin9TxRi3afg7a77DPtatQVhJPd",
  "key23": "64DtFCTMHnqWsN8t2ZSJ28ThKk29njj1JQTBAYarvfFKRfSWWvQ3bRtnLjrkFFASp2jw35cEraUgAkYr8MVuWeQv",
  "key24": "JoVaihrEdoYDJJB84WJHG41PvGxsWthz2x1hdmeZxsR2Dt3eJGXUnN2JEroyYTsL8AEdRFPubT3Me69Y8WACUKd",
  "key25": "tN4QNhzc4hjbztKNAPLYRbC1NuKwQ2jV3n9Zt4G6LFtojb8CA39YUXGPWsptV8fvwQ3MCeRpczRdrA8kNkK8Rpc",
  "key26": "4tF5FSWYUoT2TYAnakakwKoXCyzXtyyFRX846GLWaN6Bi7XSa9FjwMDuwz6Qg1EsWT5WnwqnBd4YzYQb8aLoYeNi",
  "key27": "55g2b9NyTgXRjDhjWW4SxnpXm8bpdadduwLSV2NxpkFUrje6snzSvPokkVC3WioJ1KHhAsQ8DuEaKHUmx93nGXXu",
  "key28": "BTgUAVdrjTo4KpPs9X9WUEBJQnsLkDTdib25PvUC32Agg2fUgXSbf7Jebn1x2bFdC7G2VmjRnv38hY7iXt1RaaL",
  "key29": "2i3atA2dPTQ3nauswhAam1rL9rVbtRKuWpf1P6J21L7z3X8HmL5MB44hd49UuFFRpp9q85HVw6PBtdqbuKgn3XSv",
  "key30": "3qws6fWXer1MYkcjv7Nrue5TQ8DYCbqHhTZLSP7VCb1nfB1NjJK7ESxbjTKmkT9WtSTnRPoTiygc1S82GzyixuYq",
  "key31": "2aypTthntqxva3xJexX3WWNUKg33WuysuwYVP5chsFozkqY1AfdD7mznnprrRobYXgkUp9cp8njJzYVw9z7y9yFM",
  "key32": "3CFtjjTVNbfeFqbKPwdY9LdngrCgrAjEmyZenmqSCmZYkhAC2eRmnNeTX2JXyhQPK2tqgNcAhC63hWwSxFxuTk9w"
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
