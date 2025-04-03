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
    "PaxUhxtMXpUhGuZaP4J3XzNyKc3oWPMxNwcHzVoiBLb4X4Ritn5pA3UtRKN4MGj1KhmDLSuRXo2uUHHgBqrvN7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cmcuiNzm2PWefp654HdGhZt2gf8mY9yGJUHpg9dH2oTUrDUwY8vxYUg2Pa2cPeEbJU345fwdGYRkEExhqE1QiH",
  "key1": "5V371yP2sQyrdEt95ZRuRJqHnh6LFDNR3vpvcN18gBx6x7ozH8dtktZBLUJzKU49PcVZ8xe59xYDJZhVRBC2D9HF",
  "key2": "2VV2mS8KZM5ZrXhaf13bduEsKm1ipU3CSx42mtVF1dMGyfaun9omQqRyu6MTanpbr4XWz9WTvpYbhhwNgk7DP1qN",
  "key3": "4migRo5ZRKTkuQNDKe7JUp7SQCGHfL3k5qvErhTWy61EZ63DQJaN5WgqxETpKufZmyxpdepMwJZ94HfcPY2wU1u4",
  "key4": "PC9QCWKk6dMzBshzwUPRPEmtyRMANcJ9jnXdJRSoaJqKWj1XrBtyDaxGLqSzwBMS4bEmjfAEzYVm9MjCp6sx2Pz",
  "key5": "39cNjYjbrMVXKSHxPzsN5d4Rv8hwkJx5N5KaQjPrCDJhxfafR2994UZzVKv662CrUE4Z85GDcdZLRiSaGRkowUuU",
  "key6": "3YEXvS16aQ4F9sYkjFEnGELz33PcEsc7ygvVcUTv4stfoUHSfNRxtYy9S53XZZq632Jd8SPorUCBFkxcvSEopuGu",
  "key7": "5dYqTPrio7bu3Q6NtKG5eQX2mjtgjcXjQqhobbHEWk4ZfDS64FRUWVVJv5iBDETv6UaE7zyjuQMDcZ3JPXJkxvnj",
  "key8": "4tSVVqpFUT9oCtszdKWT1crCHazorLP6D7mKg5gVwdawgnuMGZsLoA7dbC3trKqGyNwQkQFVWJzXzrLw1vRp8qh9",
  "key9": "4tmXoJBnJCEtjfhLKi3nnYUFjpBAdWnHH17ypXxCj5b5s4oqXqBxDFBYCr4qhBXNiBek6JdYN7p8tbQEHh8UR9G7",
  "key10": "26VrSX4cjfyAjFg62aLuWEfabDyhH3GfCkr1EWroNrgf5jxcoZqFfNrMynvHHmaiS4ZdLfgXwfkrCzsHvmnHpyse",
  "key11": "AhVaDGZ1LZu1pwg1azSsVNVnnaudqcZ9odUMkYogXZQWbHFyoDY785kTYzwCjyweHLQjWAC8P8PrCtkAmEdaRST",
  "key12": "5kr3gTixxwLftJzjvxLy7ZMyKRA239Gx14NS4oLcvpPJb261gDzJnvSy6cjYvC2mxMM3Ah5mB8Y7HPLqRCHiBjn4",
  "key13": "G1HjnwGvcfU6u43ywG877g6zPc3V4qqmnakgceBKiKY9CQKn2brUSEMmDR1tPTELbKgRwWctp2ejzHto46Q8u9f",
  "key14": "593FcdENTq6Wqir7TU9DMme5Byr6X3m7dJ9ZJq27VZbQ7U49p4vwBTnsGtcPBjc7ffHxwfbV697CVfeezz9ohQ8V",
  "key15": "PyWesxB5WH3xDfq8ec7EiAXZSkAPA2W85hS6kf8RjM6M36TQHh6itCpT8SqYAXuMxVowExo3jBXRt3DS5HMaXFN",
  "key16": "2fqQ1Piw6jN91Pu2YjunsdASP3vqCWVu9Hc7Y6SPhVfRDa7e5ZRJvJLjDDWN2btg6WkW7BcgZe4WDL2dKHzhJwZp",
  "key17": "5SafABpZxyj2quDCeS8quZvAFkEyHm8xfKHvzgGci1azrRvoQfbUFEmtvmTfYUz6r2UDWVLVLpvEAvQUsCZcxJ6d",
  "key18": "62oYE5d3TZFCus59vEaMpAavrrrx3j5ztL39YgJFhNrVGYVzZV9xbpvS1Sswr8KQjWY7S3ixoZmCLMdXjTCjBgc6",
  "key19": "59XQENBSBPGgxS2D65e3y9gExdmoizy6f9mMHC8Aa43AAfewgj9McQNMD8Q4bQGmYREzmc1qXEBW2iZZyUmEo64t",
  "key20": "2fyJ3JrAEasQ4v16mdfXyybAzcJyZ17BwU38SpHrMVjnjkU6YS7zG2DzA6sM6SZQjdv8iDVvqjNahq38rZTmBQFF",
  "key21": "4eZmdN5R6ehKxodCbffcacQZ8AaKtrbMCwMftA633iXJX2nxATFVpN8qPUSC5QzZ9hrfFZMJnWCKQxmhUbZjy4YW",
  "key22": "TTENAcvnpL2gZPQbA1CH7KTjGo2exUSW8dwHCLF8hT44S75k1K1Xe7RvoHJQPoUXoE8BFGqvZsFxUqBYFHbrG3X",
  "key23": "4EW2qtcpGcE9eM45K9a8zX2MxQBWpRzLdNNTKDXpoPBSMGitfXgbiMgfSkTE5NgXsVPwNLwbfiYHQfJ5ie5qM14j",
  "key24": "4DFUTnXpVPy5guVT97zu1dn3MWY674vy3ooW8szBMKoL7u4GyyLpJs9HHw2eBLABaAbgvyxu9xm95JPiDpTScG8v",
  "key25": "psFUfWJQGnrHz4Ne2YHFvGKsdgUeHQF6bCXQDV7BnCVuizbvpEm4FYF15BoUgcXEZJwuxNdJHsryw7Qpx14DMeQ",
  "key26": "RmaZCHzaCGT8SxxKnAZREZ5WtQCLLEDsRjx3jJHDdPpTer24tVXHy3mti3NEcZPDcSigifJg6sq8dyNUojBc9HD",
  "key27": "5DyJMLWThNPZD8AaBpgaV1iwSSvHYjnN9LoKd45PxugynZbFVUNAonRuudEQ1hYvp9uhVS5oUzhw1Jh6j4UFqHBK",
  "key28": "cGjzojV7HdQ78Vk3ysYygZEzvhbRnDFHGYXctg6fDTarVSKMATrDDEgwdKRRNC63AmoEPVeW87Kn5pEdqjLxAWX",
  "key29": "5duoUuUf3o8inZr1MfDmspQyqKS8jtD4xe3SnrAVfZ9XnnvfnUwcm4rQ9C87Hbw8wM2u4xF9nLJyP3TEvkCkRSo",
  "key30": "2w6ZwRs5kMsen91pTU86DCzr9rwrwTXmG2krHUcX1QMuDCpCsvhAxGBSoN3tjxdau1qzgJR72dmkpHtWbreBNbMc",
  "key31": "5auEJtMHcoxKUvjchjrNhtZtWrbJ2AfCpugUb3SQKuVLaDABZpgAwhc7UgAEn3SK8ZrgKLAFZZmSknZ8gmGrDFj4",
  "key32": "424tfGY8g27yWwZoHTKuKysiFqersXqbYsD8EkjQkzd19dSEbVMzRj1J6K3c26Paox6EYAeRaGPPZgwm62ktFkfh"
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
