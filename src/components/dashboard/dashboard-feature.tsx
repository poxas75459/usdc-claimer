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
    "2NC66gMJA5tHNq3yDY5xoxmBPjw2ffSpYKRkyv6nieMsB4tuB1wT21UJgfpjxMWRTMyGDxMnWwYvzp9AQB9LYesp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2it71kCxEe4HYT9kfTvHvUYcgwwV7f1sd1HpiEKc2Pu97HocBaCqVT6fj7ub7rZ5umRsmU2CwgeHeVK1ZRGXmmk4",
  "key1": "msz2Bg7CWWH3ejK2kDJJtY4aNY8G9PP6gpEiRFahgRS8H1C47g2HimpssSZtgynrfNDFPu2Skv24mafy5JAVMbW",
  "key2": "2rYncJXBN4Yk9G38Po85r8smHeDykAMqywvYnNo3kLnm5cyC9ei7d4akVrDVtij2buZRNcoJganQR2BGrNf4aZ9P",
  "key3": "3rACqh2xLSYdhzFnzaWkwW1qrJm7fZBBGEwBTzL3BYfwAiFcqUR8EFpXwH6iDh2FQYmP6KnWUffFgVPUMjKLfdbe",
  "key4": "1QM6fYAcnZbaGzxMmzmcxAuGub2N8sxHDXc1f8K9nU2BsQRyLeiFkjxHkD7Dr6aRDfLRraHmprrNrPTfMUqeVfr",
  "key5": "4hvFxibPSeJQfNi6NJKiJaFs6Nnk7Rqsxspzfwfu9svagBtydEZdWnnXBW2RehcGSCuXy6KzgiFMDh9xV9fbX1oA",
  "key6": "2gURm1Y9qDHHD99iBVDVwtorVmsekSqmqi8pG2m2DNs61hTLqbDFxLn6tKAnq3nd9x9kHKijpaMpvJpF1Z9Ptxr4",
  "key7": "2VSYPY5Y7bNwbULB7vsjyZXb33fWAhz1xn7Dfhn24J4tDQ7sqeCzmATjUt3EZgK7TPXEtpCtzvrrAzwvM8Npm6UA",
  "key8": "52npGp6znE4CtHTi7kcJL1N4iSaFZ8K9DicmibQeeor1y7fMja5FPCL7BL7VSpFsDoP4aVJXtuEiVWeG8Wiv1Qgo",
  "key9": "2MsGQDWdPJkqhJtdNWzCJdU2WeiNPASH4hyoYN3kLSFWJJcrr1riHcVEtJTKKyPJ6LGhV6bhcRrsMwJTATjdoMe5",
  "key10": "4YUHx7N3WLRezpMkr5otdaAqJmZJEJoQqFhW3UcFSbaVVrVUzjzxnvZdcd6eavpGerCdWquy8NC7JZAjJy5YfzUs",
  "key11": "44uDHmEJoBc4P1ZuiujTBBCA6EEJFKyfBdV8X2tRvnjoDZ4reYzVUCMWs7FS26F57gdY2vyzvdD5eZ8cogcvCB2",
  "key12": "4EMFEHrWWAwFZRSA7B7H9kQm3AZKR82TsXD18R39WvHt6KSASGBcxXnZmVEqAFgiZ47tYcjGmEQxNQvhJRYmjLPx",
  "key13": "5EEE5XTBdfnZTQFJFTuJ85o5N7iTgSByHDMuH7rxgtTDc4HnYsGg3ou7FTydEBTTg4m6qLCMaWxrXhjWfCAiRfLc",
  "key14": "5cYUjd5gyrsPntip1KQ7y1u2DEvGayYHARZ3V4DnyC6Fhiob6Egn598VU5AjzJZempX4SJpRhLZGuNRa7HZkLQ5u",
  "key15": "612jcCZRhmgKutyPPCeZQtdVRuiXB6EqjMrLPuXDoATpEPXSayTwqvwXwuqbpK2XyAed3aer87r2DzALegLTWkKP",
  "key16": "2qW8jQxPRjXEE8xFyhkCyRnEBfn85UQJW2RzvXbUWR6bPPpJnQfWCAcbMsaX66DnavFboeh69NkdYe9HYfgJXkft",
  "key17": "48eZiYX1wubb2sG2YZs4DESzCvqCFATz9gRBDySSpeZUvH6oZk2PETWi1p7ooaGRbwko5XZN9FxcozASR4D5EGFS",
  "key18": "5tk8JtobobGTpixPEhWJAhxbvViXGeDtvQikWoTD7ZmssGhPhbtUpTs5xZMD73FTKH3g8HiJBNekggSWN2S6gpEa",
  "key19": "4AzaXtW2ZAZ3Jyh6TtCMcyt6ERkN3tTH38AuvDTsYdrdeoytuzwDDV4dJNJ8aeg5UoBKYj8qjm9viq663YPA5z96",
  "key20": "5NvRC9zCnAqycmptkbXpqFfS9YWncCq8HYGYfKt9joiZSakRVLneit7cVkvT7oCrEmHJRcuCyhBvYEHyQRZAN1Fm",
  "key21": "12QErYENMmV2CJyvz1B4DTfvGMLcCBkaNvueFo1z4PhUjhT8LQpsw5w5v7kqMyHCbm9XdqxPEkDQhcZ1NoV2Kp1",
  "key22": "4id7eetrbERmfJ152MC7eQC5F51drc5bND37ueFaMWDLrXKG5ndhdho51UH8acKxUWauK3fBnDHMAjDqeSn5w2Ew",
  "key23": "2EgqLXEr9ajNK9VpqFGwbMGu9wCY8c4CJv63Hj2E63hJhizMKTZRPQUrDP4QxGGr6JhwwvwYeEJQokVtrECc1Th1",
  "key24": "4J2L1FXW926FvCJrVLUn541MxpKdxh6L8zwgaQTmpY6Lf5wGtKq2y26HYQpDqsXJ96UWAmfU5xmmDaKKzztf31YJ",
  "key25": "4AoNAzx1giFN6hYVVxfoo5R6S6skNsnRPVap98Rm5UPCBEE6vdCoMH4a7xMwaAvYSxv3SESXmkgqehiCHENRtWzN",
  "key26": "5ihSGLaHqWnqzEzgaxdrx8ame8rMEx9579ZYmJz31psPMC9ofLMDVWNDWsANbe1z1zuWuiL9NT5q5X4g6fYyejcg",
  "key27": "3f2R71bMPhQUNM3Z2SBFZ3YKtS9KJC66VBzuvQysxQBRkWRD8S5pZBPjbppD4X6wRYkcpfcsYxxQEp849JCaVWne",
  "key28": "2jfKckmuLgMRTCvsEGskRbuhZFAtwW2i8UsExC6xN9ndaWSHnoPuzJSxxyj6XEeja7r1v3nJsGmRiZ8h8kcQ1Aga",
  "key29": "LkwwMi7ffcbpanBmEFoZUJiK5wMDcDwoQES7TQzZaep7kTAazM1ArQkNBtnFK2ZMA4hMSDwDX9fHVzWTf7U6yhs",
  "key30": "2iTtWxdzzfQotohUe8aiZiEQcWCnH3eWqj4GDMSQKr3ZYUddRCibCGffg2n8U4pw6xwDtk8qFUYdZTtjhRPRXBdS",
  "key31": "rgbFa4P4QbnrussJFQd4XiKPzMR4GTyehPKic6Ki7D9psSbAb8XhU2FhvTXsmFR9detdWQdzZzAhbz84PXb7WR7",
  "key32": "3uabu35wZc61Vpv3qmk5nBReJGWMaBpMJoDgPEYkHKWLDK4e3K6Hbfievjdfd55YhbfnG7Ck46s2oQKcPTFHAbCx",
  "key33": "4cizXHDhqRUqp5GXxVmo7UpjpML56k4ygZD5dzpzBUwJycumKwBRBVMXt6RdF3BXhXFFA58W4PLM59nyZusbfaLk",
  "key34": "4Aefs8FwqxqJyaCUoj7XiB1Ek2X39fonpj7GjFmQ5PFrG8VZb5JGXJFHU14DkShW6AD6vZQumHLGkNqREZJsdo3S",
  "key35": "4C2b3BmVhFKZFan5dqfmXMpgrkSky8HEFWAvn75YFAjUnBMgwyr5HV6x3ZWkc8wioJ9GC32e8XQZyszyGeMHgP8B",
  "key36": "1kJnEc955mT2YGKvozwXUo5wpRQm7Fz7LBHXqSWCYVyZaiaAHxtiRT9B6qjt61EzmGcstDi1WTf6CeEyqKjuAdr",
  "key37": "2Yjh2g3kmC6JNnHAYnmkbYiyAVQ8F3Qm8e3GuJAC2RmaYhayvZPFqFyMxg75GaCTKkHbW9tPZE7RBAsHQTMkt6vm",
  "key38": "4CncCqy49mUHnh6uVuEfDhH7wjfC3scjWmH12BEXgm5JtbkB1C9grSGoQZjw9Ea6PLAduvLQLXZ3V2u2RCdbKggQ",
  "key39": "4koUGXNYkC1famYXiDkjeaSRx4FDmrzsVhoMn7HvQHqJBYb1jCeFjK6evJeLyAemj8Bvew7UYrJ3EJ4XusJ49X52",
  "key40": "5QBqx3xEjvotMgeXsJ5cKKQhcTvs71amdcDFoxXnWpDcBteYcbeV7NHyBbR946a2NUcqnkvGY4rGk3HVDFKWNzmN",
  "key41": "3NSBTbMCTvKhEa7CW4ysrYHyZHymEE6Vrdw7tSkGGiwVLQN8eBW5qWT2D7LfuxD2Edoxwg41EL2WXAv5nGTvF89g",
  "key42": "2rYpvHPtk3pC9VdAGihTdfDAYnKhXoMSNsztMazcwqQrEo9zcF6g7GfgpV3PwQpGUGrwtodF4tdJM9dPhFHSZPn4",
  "key43": "29NR7CSeozCkm2kewSfvSo8DpTSrGnkJasabz4249Bh63mzAx5k4K55VyhsKFZYzVdYZAjAejVXGmd2HRTpkwVKc",
  "key44": "4c9p3h2h1C9sT2ZRNQ7Lv4jNYVnnW81mwuFBkVbtEemPgxB5DsmLYTVNmRHdxKAuSLMZSF4Yfxan4Daa4jk7Hwj3",
  "key45": "5BnsVkpCucVjYHerLidnhDiuT48AJ9xxFZsU1GwfbZtfsabP5N75aknkp3BcHqSGuB3a4guLTYVsNo8dc6r49roZ",
  "key46": "3fwL4xbXtUsVAw3YJhgyfmrqbw3FoiLBSNqo5DkRG1SJrPGFzfhfU2bctKkEMQSYwX5vn6a5Uz8qubDgt7TBJue8",
  "key47": "47KasujKzbJhjWAUE4uNjrnCvNmpvXKZBf7v7npKk9iEsa2m7srcK2Z17P7vmgMwf98X8RJcLAiJ3BEBiNm4EWrL",
  "key48": "Yd6Jnt2eRAy5c5Ppvixwv6A9TrZNcyU3L8gPZqJBcmJz8c1iUddp2Yxndcn9hhcBrxA3s2xULHn1Lbth2Xi18bg",
  "key49": "2agr5F7ZMFutDakm8463r4y8mQz3sXnUQEawQx4jEj4yC5LGg9Gtkmsz5NsGwj5jGLBBnBz2vWnYMwa4npNaxGHY"
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
