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
    "48ZRCrqisSBVaU1suK1f6psunhRFL975Fqxq4fJKmm5FHrHC5iBHqjtB4CKXVbJeswJyQFLt3s5qjZyKyFcFFqEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrkgL9WATEZp4J5xqNmLbpgqMpmrcnfx98sggBRmeqUiADDKWyzSzsYTF7maRh6dB6bEYd6y2TEgjYGK8QV4bwv",
  "key1": "4D6FLmbEudGGhErC34HHJ2Qp4Rj3Bbgq8JLnVz1KhjcnXt1i6VDPpCDX9W7jxxJYUpfjeu6wQE7zkra3FBkKnFbe",
  "key2": "2YDHSHJh8GyD16Vz9aGuEnhEL3spkr5ck5ztjuswKPYXnJopRU2nwEBvUHUYVJseTPDtXqXFG5vu9izs76FD3UKB",
  "key3": "3p1HWe3wj12W2Lf3yHRbXRhhsUeEJvPokEBanWMquyigUwmJc9TaL8XbfbUf6fUDre3ix7hy3i1jx1q2dxeejF9L",
  "key4": "2r7NP71WMBDzYd81dEMP8VBiyXqxnggbpHuL8YttqjcDbMxpPjzi4w13rBWPHt4j3yN2Qj7ug8P9o7VNPYqDwXMD",
  "key5": "gTTg2d9KLFPiAegHZTnYS7RTk7CAoFKztXPRqwmHubXTf3DG1KS793vVsj4egYoS6gQXdkKXhwsbwr5X15zU7Vn",
  "key6": "4Nsjvc8amHakJnbqFoFCxEfTixHD9iXpbaav61j4Mnb91mtPXyVDFuKviQBzroKz7c1TmpiKqaNCCBUrsUTsuHBi",
  "key7": "4JVAW2qav7Xn9GmBQYNZkw1D72Abcpoy5brtZecUAAMrFxsjmPZ4RRE4EC8pvVpAT7TGqQeEXRhaevPtLtABdNYp",
  "key8": "4tP98JA4BSrDJ9htGVw5Qee5ynxRnMbQwVwExAXucqRYfiiB3hHgcpGf483UcqszsWizqaNJnwvDWkPXqia4wDc8",
  "key9": "3EP7Co3vBetBw1PuSDjEF2VnojN8LmmWZTU4Czgj5VRfD7CLGjS6w3brA6ZAU76gZ9Gz6o5344wTsGa7dut8yTgV",
  "key10": "2aL9gWvrJhfKmaKNKN4Xx298Gn8LjtVE6BzVSGQGQ7fwM8Mp98DGdbFZATjWAjmMzg45Gofu288BjyqPWUVjYjYW",
  "key11": "3LAcTvTcXTkf7VbiKiAnTYCcyyCCviiWTaAx29YCa6GCEPPxAjJVouBLbxGpFGrzPSQqowLgJqmbfiNCZd31TyKV",
  "key12": "x92tTXe6u7AuucNqCpu4CxtDRfYVKLGaiYHonounGnLM1ZHnHWWRBxDaMKRBsRFGWzj7ut4L7FUdmE2MvnGAhry",
  "key13": "GgVLa8qEEY6UXovsQbJm7sWSHVNzDoFwvzGFCPsTMVqFNXrcn8dEU7vjvucgHFJ38vzEuX6hxRLjR65Updw82M5",
  "key14": "42w9cWjJmB1A8PoJoapukv9Er5FZnfxbtpdNPJ5WzpHzjazQDhi2BVPJ2u5KBzUHwt1sfU6jVc7CptdrFmgHz9Ys",
  "key15": "3bfEvGKMYBjGv5hFTv6Yf7UDKTXBaJZ8891PFZuqNCFGyohiQ8pwv749zsPhixEmCPxq15vjgvQni2fVkxYJ2H5f",
  "key16": "aGe9wChCus9a4v1qRRTSJHmWM66THCeSEZLdsHQnznjtvpA9ojMW7NBVy9KmybEuHZpXL7nc1zqLdJjmU7CbWNf",
  "key17": "vNRbv981dRPyZFbSYkwaZKxFCQjizN5E6FTwPjoyhBomGt5gwgXuxrSvsNxgSYnnXGRB59N31MBpRQuLEgsqf7F",
  "key18": "3PvtQMPYpHnU8VoNPJBiVaGxMjgxjWkv6PMuXmtYrLxMLZxknSWdTGicXcinFysxexxppMCSe2xLLsycxwo9otmd",
  "key19": "Uzjrc5DzzP2h8HNG8GktrUP1oePrFLWFWTFK7hLkfcdr3nNDPqNnpCAkgfJSLQKRp1rS78LS2ak8YdezYEx5MNy",
  "key20": "4xCXXSmm7MfZwi4ZgoeXJ77stFRc6UcLRC8j77zkSDCjdLA53a4WyHAbUNFfgfGzHiFWgGHTHDgsrbAZyDHu6eGj",
  "key21": "rAcnrxNgCEmyMLKLXdudwUQrf9iVxU7c4q3SSECDtDMe4dLMtyFghvjBkLgt6wCe9M7otZnPLbDAvNhAdqFB8AL",
  "key22": "4hp8sdB1f8TkdYjiWDmmHSNDS7KrTCBhUTKvn9JJUC2ZknMBCdBAnTDT7FK3m4tLjuFq35LcGYiybaAbsvy8RxbE",
  "key23": "565vc7JcCQZk4AE5ts7dHtP5Es5TtLA8Nqz6ZwBWcHNWTX6eh92vnueqRi8tgaCLApxvqS8yUTgT1foNSCTaWHUk",
  "key24": "26cnwivikouB76ccxmdGN9KAp4C4nUrXMZa1breknnTnsxQHfMhtbMVXTXUHnSZ8wT5fWEQeThhiKTGPmJsQkYot",
  "key25": "3vZV4KKsgcM4GAqCUdW4McC3rni3f1ZtLrRuBTcXgqNis8JB6bwBbqiU8QUxqA1VQ9toygBSHfe8HaTuTJ9bNDN3",
  "key26": "623c9wYhWs9gYdJziLDKZcFEkEVarJmExzehqPHtknJop7T7Pwbh2SEugdVtdbM3WDJzS4TCf6VwDwypqG5PB38e",
  "key27": "3QDzHRLWFKb9BXvQSEFihNvnwa12rsNci2njnK9AUvanhWGcM2ifaXggaw6Q3uyX6kLYTCcV5mXrUhxfg1KmsvmH",
  "key28": "4ZpRp6h2JVc9bkx6xejfRatYnortgZSSukmwjHMaxx27ZptxXGErJgEQBGKZsnfSeTWfjEMAD9YLtsJhzpzbp2g9",
  "key29": "5hnMN73FYVK8LHQQVyhgaZc99xhSGwC5FMWMgpd4oA248VYpbkQv8poqZ5XkNogNftVraZM46gRQesue23LEVFew",
  "key30": "5SXjY6BHpqRzrR8Aei3Yygt26XnQeTtXbz5td5ALNML6BLefZjKFXFpU2M6hdZUBxJ7XxJQTCePXibcMp8wuuuUV",
  "key31": "3FdgLdoNm4m6u2G6atv5oy2TRVKLQCabrJN9Pc1vPuMeNkrHnJeE5AwLUdH92SydkjMrVbnJerPUapm7e2sWGFVV",
  "key32": "32bPFEQJ6K8FtJQZKPqbgJ1NJnVBRtHtRa3VoiVwSbu5fvcAR4SByudxM41pia3DoUeTQL1hkGfY18QQPp3MVTyK",
  "key33": "3RRorKvtcuWn4duW58yKb4XvGzcjTgyPzkSSsCkTtiXGmJRsbByZ6yAJ7Vi783dCpuuQvHdmqLziYd13nSSK5zdH",
  "key34": "qEAyQMJz4pcCpK2kzJy2xYqFQ3ebxBwVa8hj2fUnprQ9BtAfbo1faWxpFdN7AnsYWwix19KUnTfJPVhRHx3fE9J",
  "key35": "44RbEeAPvnFpTwMwk2XE4V8u2J3X3DM8EjVtgLUEfWpNWtGfoFeyg2MVhQMuvnAogVdH5yUEgDvEDPULTfgEpDjS",
  "key36": "3GgCbEqQxX7BXmDX1qNTwGWfx47KMQ1e7HNkvz2ZsU5QXDeJ18DzGSyx887v3fqeV9KUBKZFHhqc4bgUpwUbiRQ9",
  "key37": "2g3ABee3zYM8UBzPFHhdkSrJEVADh9goe9zB93qQPhDPziZaeyaaynosxJKydopnitUqgZufe1jrXxL3QDcwgiB7",
  "key38": "5NbgMtdReUhqPUmnBDLJofKqKDY4qoN3jNHjKZUh6FeTyEBQ7xaLGxfgQG4H9AJGxh1Qx3n7uVhzVkBSLVimX66r"
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
