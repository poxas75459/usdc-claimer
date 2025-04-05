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
    "FZKrnzAhcMYNV8njuz6JLNLctwkeV8mYJqBcUmK7S2BmmqTfM5h9mfy5E2j9ZzUN5whjQyv2cy9YGsepjkgXvLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61A6GEGGueaZcJ6fMK4uRqaxxnAfbHJeSxNEop7zzPZ3CxCmh8zzN7qCgX88VkBFF8JccqqHZTTi9TnAxFHQzcWX",
  "key1": "2ozkNFdWQZwCjNmWDfnqjeEstDNEGazwWx9oDKdrMKwjZtHqgvphy8pjw4djz95peUALyJWmxV7fDBq4yGFm6huf",
  "key2": "Egb47qw7FkNAvNgX8eitcW6uRNqSzPy7KznBgrF156Yk44pVEYBZRqPAxz41MTszXhsv1PZ5S7E9xhmbhC6DxCB",
  "key3": "215zgeQegk4Kptj9N65ekoMCfpNxudUqy9NAmcN5PrrJ9zrYQU2zFcStJ16k9mrDKt9aU24frbrJbmX9aScK5x5C",
  "key4": "5UBrxgHSwcTATU8hJNhksoQYKpvyZxiNixtjHGCyt8mCkQt3kgdav9x7cuGfmudxJGNqcGA4Zj2xvm2YfCF1SyHX",
  "key5": "2m8dyRTJ3bmNRe5PoXXpAQHtnAYohzumw8UAwCHcjcpA6w5BWncdGGuqqAF6jkku34dXHP5DzjjVe3Y6HboSqUnA",
  "key6": "5Ar4rugftr3Sfa8MQNASUNfBxHDuLHeTKvK7NNWpiXCdbdWbVM98FhZ2k7sEqaaHJan4G1Gcy9EsagsQ3mwHZT86",
  "key7": "2edBuAK2T2uykR8J8CqH6oRyp9KqM7PfsTfFDNXNy8uz3bGFCvNrh28FQnTWP8sC4N1iETHwfG8shhxRgYVXYhgr",
  "key8": "4YSUszMMyUGRrRr63qj7NwDxRPMHvjFqbx2ZXqXXBVsWjuWagSVCnmsYKnCCYwR2EF6YXd8Qz86TNhaUGxJuHFJR",
  "key9": "3sMwHE8TNgWehZvcbpCyQYgdqzUEiJKgdES1PnSu8RwFkDeuWTMVFWWw26LgYH3YLEYkngs5jyB9Dge5uwqTd9jq",
  "key10": "ScU54VTpWuyMEqfGgQeW9Kff4LAKfqW9Rghx7GEtdEcaZjif9B1rE2t9mehsDKEXQZeZGC5rtx2AyeZXNzjiXty",
  "key11": "qkoU8XUVTa2mcAJCsjNCt3PgyoqvsrgBYVNjdW7jEMCNZbUDWPqJ8BYx6AGKffCf4rp7NKFiiFCpd1qLee2jbkV",
  "key12": "2wsh2j1BCK3hvBQMDewyfCWqXFGyHk8KyNLumVb82VEf9VTwfcfRXMvuafYSdZaPDXyrPdQgMVVUGuQu26wQBjrs",
  "key13": "2bFYHN8Daea1BHGUdEBb9m44TxGkdVdzQfMEvcHfwXTPLEDmCBj6L7cmdAqrWnBwTE9nTWosaV5EKQpffXBrhkfu",
  "key14": "5AR6YrAQd8Yg4SdWQGF2b9sJS5AA4FbXdbhyXdmuxyUkMQaxdj3uhyemctpCrKTeoinryig9ohjWS6qL7f64vFoF",
  "key15": "VysqHT12BpFvSARrKRv4dUFtPrwHziQV2Jzq1vogDtKU8U1vjZcprvXcVuud2ZcuW6ocXr1Rw9T99uHfydDEbik",
  "key16": "Ga4fzxgqW59DBKV1vAPnY3ojVV7iJPXuhDPAKSGXxhBsx3GKkt5rgesNBM8UAiNTYiuV3AfR8nUYT4MkGPCvyrE",
  "key17": "2AaBVZThb8bS98Jca5FutzLNF2982Vdnyf7ckNya8DLEEcm5Tz925FSnMhBV3xcBKwZhFoHSEau1Co97eFcBGe9S",
  "key18": "GzZqVeQGANioUivPLhxQrujfg6KpvvTYdiTRDfdb4sfLCP8vfgMLRYjSbyHwAmHCryDba56HKxagrr8Fy8V5wiL",
  "key19": "4bcHBFFnwgLqSWfe2UwtZdtccCdE4Mk2Qi4N9uvMjsZ2nhPZ5vt4o219jSemWKLMUy7gSWsZa7vgzTy5f3ZwuXZN",
  "key20": "4DFHDoBgGwKotCvFoU9wRtmcicQe6yx3H7kDcYTwHHu9q6DVhoF1WN8A1iCzVvcxjLPNRP1kngdMA52J68hN14Lm",
  "key21": "4EodDosstATRPfRKxbQ4dfZvJAcRfjqcRbgnmQQZaTY11tpM5dbZHifEh1uyZ79s5UYZ9J4dvnrUwXzg4sPb1BXu",
  "key22": "337Z8uPpLNdstL657hHj7Y53yvD8BXwQkFwe4a3jP6Cg79eLvh2VBYKiwD7cBpn3ajuE858jd68xtQkB2AkuHKKn",
  "key23": "23av67kqBSsrxjExLzYNkpcyihgjiZJDtWGxbxst5FJoboCp4q1jfSGnABtTrppaJ9WETkBf97BBdhJy3MgpM5KC",
  "key24": "44oyXrXftBfUtgF9ZykZjS2mkEEBzXWhNZAJ2DepukAy8gLEwaF9TLe8B4ceFKkPvCx8Dsmwzeny998Pfqow81yY",
  "key25": "x7huHnxpT2bNWLy8ChT2fWrmcyjB1MmYqsVd1UBTZGTh5SUiTm5VmYZxbD6m77nUGt8PckHGtL2kNyBEBk7owG9",
  "key26": "5fdNHK561fnrsTbeSjeWE23xAnf8ojXCBbcLsekbKFQWYAt4MnLyWQfrWhaAm8FVmNk8HTUzfAyKBkqsdQp763wG",
  "key27": "3dCERto65JzN8Bw5avxuJUDJ5Ekp6PpLYYqEmYXgMzB47RTbpcRnqBnSETwmQFWa9UE9uygFpkBppMF8f1NM4kYh",
  "key28": "2Xzpcg3ufh2zJ7cFTSiJiwfuNe8soPtg8q6PEwb4uaxkey2p9zP69zmB8NxwoedEUp2rTTPSrB1e4gx6816cFAuz",
  "key29": "28spwM449C4j6AcYF5TJ44oxE24Kif8fAF9K7m5jPvN5eijVo5K474YUaC6GNS6TWA8oWQUy5QPc4xKx3T3XRB8D",
  "key30": "2aoSzjqS9oZJLugfgJrc5uFj7X5qkcFyMmR7cbw4keDGG91VMP7SkPs6s6XFiVGQ8oGBkC5sTE8R16TKb2gMxm6D",
  "key31": "29iheJr3GPdcV1aU735oBunCGcCTBEJ7km8Yq5iDtkDmtiKW2CbJiVByMwSkz8Tw8FnyVNxQfPZWKPPPy7JrYYqv",
  "key32": "545fx3e1BApyJFN9ZbHo1hDbSrkAKGr3geH8qGX9ZH2xM7vz76KXnTmk8Fa2HiZDuwRy65EYmmroaVdeK7WvhQyr",
  "key33": "ayhyxeKn1uHmCWFKvBeQ1TGMn68XokfoxpmzPdpy7twyV66XTcxFxuDNUt7fytSwfFxwrjCuANuLNx7Q48qvuRS",
  "key34": "5XJpkxwyrRw6EGUpXwmubiz4wroBJCmxycazz2dGce9v3j2DhEdwMuyLVcoxTmczdS6kG9nKDGKnPGpDrp2PShHn"
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
