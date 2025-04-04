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
    "3r6gLZ7YCSoKzBU9rNAsQr3ZgjjQ7tMbhZVg8XsXGciMbkjj4RsEJKUcQYRUrgMERvR2ey1nwqMk2n27tTSYrAJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3syVJCi25vqr2D3qcPHt6cUiJCrpYVAcbCwWp92RA747X4XcKiKqMH5a2VY4sV78wMJacQT5dje7Yh3so8mNhK",
  "key1": "2rwhiWHWiTgH27zRBiqP3wjT4fjSRdDU3TMg5heRn9EGwRw7zPeYusNbQA6ePR7eDJeLAbBZc916r1C4eVj3HY93",
  "key2": "33KU4nqDFFwFMukv66uWnURUgwPFdEEYBaU5DHCgoQ4kkWorHQnmGXk6wucwEUziEvHbRLC7zDui1uVNzehPab61",
  "key3": "57EkofqvskPd2atCjKvMNaEh5Jh3oHkeWzucXemkUaCp96euCEhz5PmsaRd1ETfcdxxePNasSr98k6YMU8hQeVYm",
  "key4": "TiN9V48rvWAG1yAbJr18GnbEWP1j12EsX43DmbW1aHkrNC8zYi3StVfhjTFBnBv1hn9DDnNRvgAzXefvfohsw9D",
  "key5": "4VtR6PF9WMABze7aHM7d7Zfzx9AFDzrVdBHHRKz8Uh3m4s7QQ27agmMi4sHXdBZxrt5C7mxJCNVK2EvoKc1GzaiT",
  "key6": "4cUMQc812u716eWDDdbdveh1ddj954t2PAPL4udm8wxHAtYfyu6L2mYERcBh6rwwpvQUwAnbY3xgYM9Ntq42693T",
  "key7": "5nQFrY4RVHDgbtr3eRUT4tXxxkzx7J5wN56EEAKdX37oUZki4cpw8L7wujG6obaYyrevHxT3VLnAHKgxZgj9NnrV",
  "key8": "4TuBZPM92BCic6YUGsC6uyAS1oEvLLEAWL3DWq13UvuGeHFaytAJevRxLevLmnppTVjS59ABT2sGw7dxhSz6fi3R",
  "key9": "2p3JwCvwZsNGbT2RJb7omHBshcxXGmrV5RifDa54kWg1vbTnFm6HBP7KvYyLYQeY73U5oE3osYSvHpecAA3Ts7GH",
  "key10": "M2NHj9D9PwTnyFrmU3QoxCKiQa2kzBeszrd5EskCx6rhLttRE9BxEdMMi3NJa2fhNHEWQJkLDupL9JWRS7vyDKy",
  "key11": "4inWk6bHf7tWfPhH4f2FMuwwuwQE2HQtL5dVYSq5PenWqg4DBPBGGpcCuLhBYZqw84CSJCRRiDbZ8UZ8DeRjVZY5",
  "key12": "27Y2rr8k2uKjpBHjWvaWAi56Z6S27r7Fc3jMbScLqUVJJ8uGnLqZpkxAqdDTMYkrYAbi4oXBzNxAkpP3Y3GPSL1Z",
  "key13": "3ZHPDxEArapeY4Z7srYfhy3pZFj87eJoiTtAbtvwwZiiQarK51Azt8PgxKgkeePS1owbKE12c93MEn44Xo3QjS58",
  "key14": "3atUcr5M5ewDDVg6rjhEiYiRGUTBPr64wzCXsCAPD7SdMcpmMTRiq6YjeUhy5F3GjkjuSne9bFSsvnEKsaF9KzP3",
  "key15": "2j6EKPg8UkjnhrSeBu5GTpFdAwu1pabSs9UtKUTQPAA88FYEaXoveewaZtmwiRgxiUkC3uHHzBThWFYHz9k2aiM5",
  "key16": "37Y5KfZsch4rz6EbVFGu4ZBL94JGLM6ZEEv2dYzDDqgw2CXpttTNLCRDRDzuyRKUWV9EwScyX1iNw8PZYd6Jyx1K",
  "key17": "4fVUZgiANgNSTGjjk2Cbg74gcqQKMWbavtqtjDRYG3wXDmxR2AwPDizpgq3mJc8e9GJknPLAfCkH7fFxRg1EAawU",
  "key18": "37S2jAo7tE3oFrFPCZQSJDPc8RZ8ntB4jB5etn88NfQP2MGitGaQJYFWTTPGmNjxtMg3BPEjKGim2Pds6BhtWWGf",
  "key19": "2E9AwD65RoWkbgRsqdazNfxT2r2nUgCRwFTUQHbc277YJjQHU4R8SV8WrTrD5cFqYKBi9ZEstGzvfQgzawTNXk7f",
  "key20": "21oe1sCB5XKXQJrYa4TRd65ZW9HMzd8tGF8buao814V35678TWN7KAz6BLgpk6ytSsjm74MbKpD5PoW2my32LLhD",
  "key21": "4rScS4Cgs6hieiU9s8nasQL38jE1TmVHedBGMv6jd2FRHCM8PRXTYjnuSme1kbD5A3jCfpb3Q5irTV3JJeGccEea",
  "key22": "3GT8gufd2bKTXZeJGeQEoXwWkNnQ1CrEA7sAJtAQY8rnPJRrVeoMNCB8cCSZBtxMnz5axhstBZRRcWkJm5tvf2R3",
  "key23": "56agd4aCV2md62ofku4ugC4yPYVKuteoexAXpD2RCqjNe7QZMFAuFx2cb8PjHqqkMJ6QeUCpGZuf33zHUhDUfRYv",
  "key24": "48ceM2x4FjpntXwawSVjeN53JewTX1HFMCHyi39B6USyY7GpXJYyg2nZFSxpkA3TcDdQE6xQafXRsCgPzDrPMAzH",
  "key25": "gwoRz4xSic36KDcYwiJWzJsAcykAFqhmhjqiCCBntcvbvLKpiACB8XfzzP7sX2pFjsnFsfgkxn1XpZhG9xgL9mT",
  "key26": "2UfpyUtH7GT1KjXVV5AxAUQchQEGmwdCE6dtVge9Bamd4J6i1pP8rMFxcMHH8AomNLcF7tKVBPHuoFJKCiJQGgvx",
  "key27": "67J8stjbbfVc74CAp3YZNR8ThaBuDb4kkj26deTVHGB4fr6xe2z3JuxnYTUBK5s6hEuW16smQETDpvmNxJWUhWhZ",
  "key28": "3yBdmJd19SuSmHweubeY7gAySpFsKFSgAxFjpwyTN8TNpFfSC1M6CAWBTRRddsLtsQ2GXPBoqYSVyMWqcaKnBtGL",
  "key29": "8kAuEQwVnTMutmptc63jvrxMLGiMq4GThDBd2qBJML4sJbZNtNdWpNJ6YhdJu7kCoY9rKWkiwbWzKbSJQRJQ3uZ",
  "key30": "5KfWLkHYag8Svo7Xf75iQV7kQGfWJQCzcyanP1wDrB93zhDAbuJB2LB2ArUAU5ooDx7TuyLurWKAbL2SiEE1zrZW",
  "key31": "5fZ3TJscLrJLeUARDpt8xHcDrWsg4Z2FWphH8pTHgopRTRcg9L2ktNz52LZSV8v2o5oMnVMdSL789bQaWYJWyKRp"
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
