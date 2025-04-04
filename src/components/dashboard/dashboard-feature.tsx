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
    "4bwWxrMwqTN4EEipwiYkng3R4uLxjHN3Qw9jUigAM6a1vYutDVVujYF712duKXTt5ig1oxnVdQZMYpSneMxBYA8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPChaYg5sceWZvYh19dy3hj71AKFv3njsFiFiXVxoGEjcjKEiAiyjLVAxcKpAKrxyimr22uvvfhpVVMx3ews1zM",
  "key1": "wRnmgPn2w69RFLGUUDw7kYPerJMewSDcKMwJU11ZDEvd6U5e7hSsDmN4hqVcLid5r4nAygbNQ5iGh2rDZyEcN7V",
  "key2": "4pVs2QdhjUTzhDMqA1ajVtSfT1yHyXpLfFV62cGSAEBtMf4KyXRrCwndasUHX4swgMAH6u2eyp4oq3uJW1sn8V1r",
  "key3": "4HSToCxg5XBE5SuJxFDfgxL3MFwHFMEykvG5EGB68vfskp58LBxYNqgdWETYrRnGFRG72RUBymnJnsonYEm15qbW",
  "key4": "rXMyGPRbZvCKXkw1skZwc4Nrwvwf7oUgWY9a4QpRpbBdZt6BmfiXZV9idegoF7XrYW4fE1j81qgsnLxsJZPNqKn",
  "key5": "5rhC4ufn5YtUcdgDLVFM3YHtjvNmtvqgF5VGM9SVBpX8wW6VrPgRVifdZtbQtcQYqSHEsQs84GtzTXesEXJwji8X",
  "key6": "5AzuvFK3nwDDYCi18BHU5y4ATFftWULbgmQvbTVVjxvJiRYGLzUDXyNA1fL7oTJZ1SqNXdJwdnqZBngWhvb23q6j",
  "key7": "42oSbgnwd2BAdq3jsJTdo8wbeB9ZrFYd1UuiLGrZHCqNXPNxgzMmrnY1S1veLjvtuaianKWLnxEkXGZUYVs93HTp",
  "key8": "4JoyWzjttd4J3WhRHsfkXGueMaZ2M2JNQyB2ucB5idpTTjmRbqDahTD11kLhfveZQEkY2DCcTcAVsfRRTncop8Gd",
  "key9": "WUZg5UE6ZdR1dcUhkmNrvZkwtHHz3vorPKJLdTbz3ACCTBp7rb68Wq5UAjF9UCydQ2vag5vS1DsozdTfVXEhucw",
  "key10": "5KTC9CfepeXrsakryutEYjh82JPPaUCca6ZPJQDZ1Abf9QfYy9vh7fysUB69Y6S3zTSy4HBJSP9ePmbS1F6E2KNz",
  "key11": "5QWgHN6usJ94HHY9RiCmYrHELRWq7Tc3ZFCe5gLbEVmDHzfiP7ypELFBnFgm4DhSVjdBwA5tK58tvnfUX4kQ8sr2",
  "key12": "VFQQW753Q9PnphTPCqHoyvMuw7cxdyKybZ3H7yCgREyNN4RTbEWiauzjmEgCcRHJbXTR5UM3i7D4w5RoyFTUo7p",
  "key13": "3AGq3WrJhGRKzTpfLNqbdqwgwp2g6tg4jGR3z5eqR8ePYQJ77K8wfT1GW1THSfRqtaAWZaLQGrXYvjB2Q5L2ZQUD",
  "key14": "5DLrdyw5XcycBiTft2jT1fFwcqrAhMnxi2npP1LRx7AsSYphC7uxUNhtAwqhVAzjktRySqibHf8RgaUEXbamWn32",
  "key15": "4YjgT3CUo1VFuT12EDJcmYHn4cHBfSCRaGHVeWcqRcWaKaf2ehxydpjhWkCZjnsoqgqzLdhHkhsRLowm8oQhpcCb",
  "key16": "3Xw67kC2fzn7iVZKHxsUWhTzzi3TopQDcU6f71TC5di3Thjm7Z7yWD46WfJX8GDomwRkgMFbJZhw37S8WVmAt8YZ",
  "key17": "2Ve3wwofBc2DvaPYMqSY5tSCRYZaMd1MyWrhT8EMP5E9xdQPzqmsD6Sw3gRnzc9m8nFrw1xNFSjQxWQt8PpWrF7M",
  "key18": "2Ux49w5dgYrnurzPZGyEkeZGNZavkpMfaLrPTBiSYczJhASUUDKQBjfjXWwEZJwGWkgFfVtkLgvn6Hq6ydWyNAqu",
  "key19": "2LnTXWqxW5cc5oAdfcWRpxBANVY2VbvUiwkzmcCGbjGHNqUZ31LunWQUMgR3L7ez8sKrWzyAGuW9K1HsxAcHmM9G",
  "key20": "25bcmPinnbcoTQ7n6b79ebXHX4KZBJCjNZYEzkQ6tMMg8mtr3B8nBM9kuHk4iGjcyXubGC7gR2gSn8eQaDq41pP4",
  "key21": "P1m1EFVfmHXd9PkHMpjqer6zkXbRg7UyyUmwn8p2eJaB31B8txKibMgLHjyWPqpZpTQ6Ga38Tw935ZURDKhbHDb",
  "key22": "2QtqczURrmSCEExMiqtTPVPzk9e5ftU16nyE2vS2XyXjErnRKc7whqpefwjQsYaTs9NauEJ9WM98gTnGCfznTvNP",
  "key23": "2w1Mbq6ZPppxJeZFYBrto3Rr4tr2kTr3mdh8955DF23tUpXmENN42URtfy9QYZJCMMZmxd9vsFKfoKaSTZZwFQ6g",
  "key24": "5iQTyxTbh9scJ18qEYD72eL4ASuUPXrKPzvLWngFaZNE47qwNfFd5HFYHoqWg3WkRYFUmUmPyXRPq8p46rHW93Cc",
  "key25": "3VY5FhgeQt9KvsoHubZ9685iMTpwAm55kSQsXVD6LGnMjb8ZdnWg58HnNAH7gWRg66Xx5SCjGxLF1mFfEVsGgPNU",
  "key26": "3N1Jg4UsHqWyB6sG3S7frSWL3aKaMwXfHNVsP2CgdzvW7gSnB9BuWUpp75UKRWFjaeuxXvQZNNGKbi6cegVKMHPV",
  "key27": "5KfZkNekmjNL9cSaikFcq1RA6JLiezaPUK7nAJWZ2dpH4XyqNSdtFijuA2Vr2fJwNUY2TvFfnH3PYuBnBsh3pE9q",
  "key28": "2yNmA8WhsizFjwamDFLSnih4XDPuFDELAwtyREY3U4Ze8c2x2jJ5fWrB9y8HPwLLojxHeYANsJaDciXD1Tb8oNcs",
  "key29": "DEYUKkUKHSo9F2QLVxCeE3KR5r6QLTQ6jea2Vb5XLLVWbV8gJLg3NakGXEoXgJNHpgmocR9Aoa5mF554sEqPdjs",
  "key30": "4bqHE6bbc14o6m4j1NdExeB5X2rkhPDhNyfLZP6ELYZK13EamiagSaSUhEgbo9HvdfjrCNJZAZXSLDV4AQRQiEmN",
  "key31": "x8MHhFnGXnGk3FNBvGw1ti1jEeKDBuUgReCbG8tBmUhyqgZKXFEztYT7XyGQzDi2H674gUQaPEqBKvMw8cqayAn",
  "key32": "akZywjwapzd8iRtap9aqfpLSfSVVLK1PrEAd8wFiXNc3Z8jWFEoEpY52jLcFkxzYA5WhcjbSCocpNQQrNDWzXCG",
  "key33": "2yRxoEf8sSNMYPxXY6A1kePxU6iFK5Ceshidpwko4AoUs9EXsFWKEKJJgQT6iaa8W5xAdZrmdFYwDyKSLqk13Q89",
  "key34": "5XbMAQHjzEDpBvMRzaTGgvJpXsYsJXxSh43Qbh5F9v7TP5tiJ1MSGWXuCCD2Xq3p1bfYQxc5XcybHuYeYov9rLJG",
  "key35": "5mmuhm5r7PeKJNDw3KPav89RAWeYRvLKmHZjPTsARx5iUQFvyQpdPWd22sxSq4bBZdkFCPSp8XhaQDLT1SrEoikD",
  "key36": "mZiKLkgHXUF6WVsK6Tk5EHrU295gVyPRLMBV5nD6m58VGf67tf9ek4tEKkWsjHtcAbWhnZVfnf8kcbWerGyx4rd",
  "key37": "BGutm5SM9RCnRV2bEV63zyStpdQnk7nhpZiF6xQ9JbFaptJ8igYa6vtNwbCEJw8MZsjHjLcbpXkFwyYrBt7cXbm",
  "key38": "2pdLpgXRjn1cx8q1BsD2ZWnGLn18aWoLtfrCogPvGVANueXZjZkNFarheh4DNvCAwERwbGjRKToHf68jc2gdSbtF",
  "key39": "geHGdjMgKPzcwLXJohdytEbnpFNxnfNwwDimoEX5DqszVEBbqbfYMb1iyAAd8m23KEfhykTTgXfHzz5Gjmuh21p",
  "key40": "33BiiuTg8L1i8MYhqvtoP5Sc25Q5rj2goT1FxxiD2FEjYFDiXQePbD6b6ZM2uTdLLshYnokyp2X2ypoZAy21cjLP"
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
