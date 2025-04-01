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
    "2K7aCedorTDe9YgwSF4JzuX8D85Cg7gS8DESRdRhb1vftChnEBTiMXpfq3F53YwrnJpchuPufxtqjdeMuGucz6u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBABXGLs6eqxkhAZL8nCBhbNcVjetgfeALEZfGaResJh6afFP6o8RCP9mwJx4KvMYQiY2fpoFEsjSzRPMoQfcAD",
  "key1": "4HG4ScvS4C3tAKMsMsKEnV4n4a1q942e515ko8o93yf4bgZEJty456VtZGmUFQrCRkyoqpdYJTRGekwjRBkMu3pw",
  "key2": "5vrXdzLCrTaxwtUdBH4KpBcvhxCNkVKMpCMcL1KKkg3TXuwZLaeiALVrnP4EcHtXBtLpV8ExUVZxvk6ftvuisv9p",
  "key3": "2eo61cyJxK7ee1RxpPQyVzzs4sMGYQay7y5Ly2ruisJTXWjBq4MWN3AbiNDwK96P5DHXn5WE9s2aVeUD5GLvvSRq",
  "key4": "3fdgXGkVMTtKvPoJ9gTXKcpZvQmXm7gchMRNA2dBJeMxhmQZLnBnb2WMySi3t1PsN4dWtYj1b22ieB1ohXGcADkn",
  "key5": "cKgPY2yEpatQ92FhrVMkWKMutyiu38vhhv8iL1saLU2QtELGKkih9r4UvPq26fMtQZELqYBsv88gf5zWZtWXUW2",
  "key6": "2CDk5aBj3gK2hpcc2zRmYzqFLRdDQiVPbYG6sdyB9GS2zTaxQ3fjHBbQvu9DswTinc9y4NhYa7yWQ2gFLiNLYUVG",
  "key7": "2jPh9TrswpLEBZjpkiQUkx4GvAFbSFKzHXN3gcuRdLQ8Baj5SvvGSz4rrMr11xmpPaoYPbMEhuibegv3AxqbKSm",
  "key8": "2c9s9KS9AH7xEJfmuW3TYDKqbNqtN6Jzu673uEMQRxfcmyx9mgWg8UrMqdHmipqjz84rHsGWJLo1UPyD6YXZZGh8",
  "key9": "5rCsMPB5uZnzi8MzXuBvWycrjdXgyaFyNVSc5H6C95DkpVzyJaj2c5YHsUmB4LmLs74KFkG142DUr6iDbxoX5Q9U",
  "key10": "hSGHxc6vbyRz8TYkj3uK88YqRmejb1jXXbW2eu5ns35mK17cJ81H6qunXLThmeYM499MtbsTZtptQhqeAWKob1e",
  "key11": "58cJDSd1CrxJHGsCEBbT9pxsWydbQvgfoe35YYj6ZobyPoZ6gjFXsdt9bnFJJWMceEg1Y4XGR5gsnB867WLhp4Gw",
  "key12": "C3iV3pCPKKLYfLZPpFocr1qVEx6PxfHMnqAEi9VNgYqemHL1p6tuqdDV4Q8q5SDoxZtwTNkxbhYcCqJ1JLjpZkQ",
  "key13": "3fETNmSTz83LVPNfvQuWm1q24YQhMEUchspzgHH379BrmDchMwJNLfvXM9FA5LcT8v98RViAnREiPwEpYXjMK6tu",
  "key14": "2JHfb1W4fGciSnmuE4JcHSb7axG4bmdFE6i77SXpA9Vyia29PrzKrQYpYea1g7TmDiDwXAZw7gR3xhX24tx3MnW9",
  "key15": "SxW7wS4HWsutTTwTmN3C6RpEhhcmeQjaDDZCUmqYAuqnK5A4bD6ZjRZmA7S8qfmw5GET2EMDSpef8PJLaNMgXUE",
  "key16": "39p84KiXU1BUz1Eb4PPN442Z8tHkmgQrDEyEaa1nLbciQJF3ncpbjiRU3doUJtRZ7bV1y8Xd81jUSdrqPKtoMgdZ",
  "key17": "2xo7386bbzkxT43YXZs7SKBpTBwS7MTP9kmndJWLGBAkcVgEJqRga1SqaZSCFR8QUwuvBYZtvKzza5oPKhEJHFdk",
  "key18": "3Z4avUcDL826nSSemxNkc9u6KD1SMbQxTQjwVdQsTiAEipUfJrhAkjg7iXBc3HEtnRr4zp5QAkUPFaSVb6hcgSXc",
  "key19": "TLJpJhucFcJeJaXWUuXBoULWRdbxrGG535g2NSsEEmg8oU8U2dYMecrKy3N3Eof7g1pfF6vHLuzsp9fxFRUrdmk",
  "key20": "dER8M1nzrm4cAYm6yx7e5iJAgkbn84ZMmovZgNz9P11DszjPyAdFF9R9mY4Hyxq3YaG8q2n9WidpG6tuH28fzSA",
  "key21": "BLvD6PeyMjw4r69uVu9bLXUMVGmdu7bopQtiUFCNyBHLrrXkVWAZk8hNCV8GhrwoF53XURJxf1oPFDpvAfsNxnX",
  "key22": "567cqRStwRdyLXsGyUttwHJ8zwcm769Qifz7pYDxCCrLFYqpGFwPCwFFsSYNZvrt72a9BSat29YrgwRLFZwDt883",
  "key23": "3DxeamL2wuDYLGd849w7cgXcMZPF3u92r6P76iP9UJsDY41FHMKRYMmmYwHkqeetwfpmLr7ZRE5yyQng1UWAMxzs",
  "key24": "rjrTNQVd8udwbz42v78p2UkAu52Y44oADhDZao51ayxpVcc3ykV1D4sCqWvu7Zpgr9YD2oGiCkKmiDnTtCjuznH",
  "key25": "4uEJG5izm4GLBq1QN83Mig4gyw34GTfWSGp2N3fRnyqioL9fVC2GLS6PE7g3Zm1c9BgfnoSkiE2tgtpw3SUH1Z4k",
  "key26": "LRBtyWvSQE559ZsStJSzmeY8ecmHgCUhA8bKWpRWMghAxFfwvyjyTJ3PaB8jzAwjXbr3LJMiEjDTZNGs2YfZCBU",
  "key27": "2QD9m3AEwtJmzyfAzL1ATbCnszHJQm5yMmnqajHFpQ5J3dy8oH4fhFqfwbuSPDc9KPQBepRMeoctqjRMFXZwV9SJ",
  "key28": "ue17HLYn3AzzYjdi3pPDS39nbdwKXWBWFC5PqNNySJadwnLa8vb9LHERXUArvwDUQSgpChjMEXWiueKqXTZZhR1",
  "key29": "5hgKd8U6zWu8HV4HgtG1GGBrXNqpjuA865Y4AGLtFJityw2NUjvnftJWWBukevtdU7vKv1RPdE4mQFcYGpDfpE5h",
  "key30": "5nygGyd2sTKxbz2suUYysd9DJrrbVmNzjTZcCfGM9MorByn9YSPKrinSw4fosYhxb6DNuS6zZkxMFN3cmMasGsND",
  "key31": "znNxp1YzU2yNpPsFz1iW4HvKne6Fpg7FHrGPPXsjP9DTZ4Nzr9XRVuDE7B4Ba9J89PpkunxMTmhHbQurzoqJhff",
  "key32": "2wTiMTwvxV6v9bgtW2xF5EfvUScHTtXvAoBZe9buZj4ML46LnDSGJPcA17U8svVXjpATK6Tu6cQRmUmxTgYHxip4",
  "key33": "3sj7sQoryF4RRehAb6fTJ9wP7JCEtrjuvZ66Y7pr2XeXfbX1AzaMax8vP9puinPwha5WvzUrWukdy7KZ2A7THb5E"
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
