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
    "3LxkB2jKyAZ9uf67tjnj43r8MHcGMTWZ8uBs5MiQoXJUqC769f5NDbzX7j8H3dAKSUDXRjA79uBxD7MHsaLrZ9Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aoh6c5Xh1e6wWcWVX7sLRwFiAnSKyHayugRWnd8QWJqiMiM37ipgnWXZy1SexwmtrdJmuhWBW1EGU2nXHkwzQuh",
  "key1": "45bjrpLPAJcEs86FeKZfUbaavoFBJVHLnQVH6cNECEoD8Rz1NK4cL5TRCtfJBfAyExYBV7YT3G8RhYB7KwP9kZjd",
  "key2": "BUDMNSpVbsWpya7w4CprQdBkPU7L73o8hePwsiuQEv7obggkRzk3jZ1wJksHtc7BeiVcRXbF6HBuLWS1zfwftpL",
  "key3": "4NiEaPHAwLoEkxASfnqEbhDsqpvBKGsHxQhxCLF9vuBLn7pQGsGnvr646bdGKSni4h46WVDuVAtjCQviUmn3bDau",
  "key4": "3LeRJUopbiD9TGpNnQ9CsPTJJ2xSYedqewULui2BPfu1PRxNwu7UWuPsMpTqpXqozPUWWSUNMUzMPp6quXr6yk7y",
  "key5": "5E33RNdHBXRX8NLjvAUKiwSTj8wJpeA7Ah6RDZdpGsGHMwfVgaFnRBj3JmFMdddutQtR6brZX5XxREM1mc16DZVU",
  "key6": "4beNUtxTehxb5i1mU2qWh8cGiF1RfT5oybwFAvb8M49xJAKJoS84zVQi9uEnSQemqA5Yki2Z5xi83sR82P7FXh1y",
  "key7": "2hVFXGngJZ33CbNYq8oBcLSMhGJzbNnkkgYYXSyT4UGRg9BjjpCGEWvvgfPmXfGUKyCcYH18gR9wWU4PSGSyFr2o",
  "key8": "MRP3A1SwQG5S8eftjoQbMa7Cs7XAbMryuiZfev11hHKSweJPQXgUVm1Yc9NAa8qNxmGZx9T54DAuh5KyXmSTjQA",
  "key9": "DDcFpktdbKbFT5DC4hWzQBihmT9HGDScoTh4YwaNBPYJgELbsXEsLVHcrm1Y2TkFpHYBhXSnPsnfNkixyH2bXAL",
  "key10": "2m1ytgVvYkapDBQzoMvjcbrUijTo68sxZsxuXrZxXUVeNrKLmXhZqLACEJFvykqEEqpEf77bSRKmB4FnEEh799ch",
  "key11": "35zeeP4HNW4DMGD4AoBmw5ij4pK6oAUDBuRKAgGBTRY4xik9jinsckYAXRddo86LGvhJfkPVsr96LbTiLjSQAMMm",
  "key12": "MyJR6thmHpz73avzM5BexBbnCBgzXLHUv5ZBbRcSvBfxgY4awMdb1n7dHezniTWWaboBM7XHCtUpSkvaWwjuyXj",
  "key13": "5qEPecredz97hvNw9aLGyNh5XmDHQw3sW3ePRsRHY4jH7ABA3qG8UqaGTwuhVJxdNAnCMDHn5ycSDAq7Mp8MJdUi",
  "key14": "3EdwExywMiicagbdw6xSfQPjzKBUD4VSX2J4kfCsp6pYgRKWaZyDDEjwkAh2YuJMGyE3vMKbggbSLrgyp3pFWwJE",
  "key15": "4uSbRunrYMc2efjkMSLeZiidSqfesh5i4YErJgzjikp5kZriNvcwFcJQGRh3huptkD8pGpswAqsQMLPDDQ2HFm3J",
  "key16": "2U1Szf2VyTVNNX22bUh387WqkdvW6MMKpyd7B6SE2s79DEw9xXCPhMyw4WeUHsCdU4sbjXzXuGu9rw477R7mWowT",
  "key17": "5rnc9prrDsRrGR8oS2mM2d5Cq9ysWwdDChwtkxWQQNZfNX38gyce6D4YfrvDso1WbhsmXjxMMA6WUVV4UmPLJ8kK",
  "key18": "3JUw8DWEAwtFjBwHTQfagcWt8bDKWRSvm5T2s4TqbN5JJR5Lhpy9ZR57wroMK7SeGy1fgy9yVkMbMQztjTVVSFJH",
  "key19": "2R9oYYC4oqy39MMTuQTbXMnh7RzEDbNHUZMpJ7MjC64qWXvjD1MWgPrTiCUQwVNc1aUHE5msnedVha7pvSFkyxrb",
  "key20": "4uWNYGmHwrJb1JPbEQz73mXRQix5Ss1MZuvG1XV7Jsejux6WBxsmKARLEHW5fMbZAVrQNXMQGFSuhU4aCF7yxNHG",
  "key21": "2bV15FQRV59nmCCKy4hy5wA3knsMVyZS9xKmD6ZmkDbCCchFynWYdCMHvJHu6Sdb2KDerQYNviu4v3zp5eQKsSP5",
  "key22": "4RmRrTeZm7EH7bgeygyRfH7nZ4gipcRfUeKJipKMkWD2wtXHDbN8ffommyqRmFhWznEhoA8sUbKCMidaibMYXvJ1",
  "key23": "2kh2J5mABRa4qvRVNikDytPXCcPqayKDZdDh2cxBCkKmpg7N87WGKSFUUjQbZqjU8uNFyXXUs7m5epkKHLXF8q6c",
  "key24": "4eVodik5tEnrH1JoZx9CT4Yig3guK5pAxe9ZH1VdZjuqF9cMNhXeaZvi1BquJoCLBVNcJRM7qZcM8dxWnU9Y34RQ",
  "key25": "2vJAbbzWkXqLXTky4pGUatU5eeaFtKJHWM67jV7KUrTf5vqQRzkrpbxRAZPLzK5qpNhcYHE1nLiMr8QgFuRG416J",
  "key26": "5uMKYcet6rBcL9irmgd2ZSmBAGoehDgKqhXsduPczR1XpJaYVPSLS8srvBJ256xos5ja49SfeYcF9onNNqQjn2Fa",
  "key27": "4y5GF5fqBHCFmRdimRPHy3KcUGyJvrY4EFLEEbyxgQWxNQcKu7XPecFx9Q8uvybYKKfQttzjmURRKBwiWErYzWRw",
  "key28": "3nB8foVENaUmCSdpjJ1asyCGRjRD5esJWbvjkgZkZ8av2PsbYmg16TeEKveUPHQHeF8T3oCjNNeK3sE5TvxUeNiB",
  "key29": "5VSndqS6svQUgqdeDVcLic8yYxEKSqXCJ8JJst4QDR6oNRT1D43q3wax82DqeYmhMpz6pGuKcnVEBhccSdYSdw76",
  "key30": "2MLikByENuK6zXxEYBPYRhuVTrqRHPC4EL3cJomBzaLMs2gNUr2zkAXvzqopCkeErefT855hm8w52DSqEAhRh6Nk",
  "key31": "RbteyLvrUabj7NeWG9b36kKFrB998czqviYL5sDkQNVsMfH7NPJZzF2N4qh4iZDLHXzibpqq1z6j4KFzNsDjcQP",
  "key32": "5X6GQjhEzhTbvtXvwpeR8KGANHthpkcDF3nEKysmHFebS9k26riVEvPg4sqmf3nt1rwXqCopicsqRGqnzorXHh1H",
  "key33": "49oUmXE7gS1XqnwxVT8rFMnAoSiQPNpvMSNxvVRgJ6jeAEFtJdjYGNLW5aK6wmivdcRcYPvhep6gHNGuaTbCt5zq",
  "key34": "2zWqdTDNBqnqWFNPuzZYQogimeNq49WfV3SVQvb5rwe5XSrkCqRrrka7YViyZZ7KLakRbnjH5F4NTHfrUuHHSydg",
  "key35": "5XN7Ed3qQkG65MpQgjienZTfbkZSaFs2zWAhaUqLMnQdtKSJPXYVQoxR7YJAPuyDQSd6AccGuWnMEGAgRUKv2u6v",
  "key36": "3P6UuQbuZxhz5WWTXEEGnQHJVxgwHwf3yaECE9eQzQspirSgL7n3WnfKDKWdLcDCUAtX6LdG74W1u4YxSkgRiQnx",
  "key37": "3zUFF4taa6mwLyNRE8pGsKSYJSrLT2TKFFMAkpoDcGm4MtzC9xvDtZUeQFocpGJEZKFJzGpmoP9WFv2Y5NohriKh",
  "key38": "4H9YDdpdpu9CLnjYt7YbJxxyzJy5ASnZTL846JgxoYTxNrPrwcmRr9oEdoy4qgY9LA6y4cQmSpkyfbaWBuZxXBi7",
  "key39": "TfbRAzTn96XbPABY57vrJMVhMLwwjF1RQjZz5LDsb1BnWtnDnbAJGVKsLMeiQXABZmpBA2kZ8KYNwDnZhxeGsvW",
  "key40": "3QRGP9bcBmcKBfk3BafWKpek8JbHGDzwr7eSNuJphqhbiRNByuLnfDvH3dqyXPp54dN4Adqx431Bcdoj9x88kPqk",
  "key41": "ximBcFEqDXfFf8iaP5jdeymETTeGgE3M4j5btEkDJkzgvbqvCwSu4V3Ekx8r6yWUghySmkHX357LMGn8LAePZHw",
  "key42": "2npq8YrQiFJsiuYngrQP2LK6C91Vyo7CVnL4Q5YqjKvgk8adxzjQYMkw2fho3Uc8dRSugg6UTZ4drbaRGBctKWBi",
  "key43": "jq4FftaaH2KxJ4cC1Yz5Pk2oCqhgKRf7UfqPEa8dM62PYBLpaGBbHnbstW7Vc5bg9UMVaLqT1qjKwWsft5F42nx"
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
