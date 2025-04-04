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
    "3dAiXs4DbH6ApJJBaFCLKJYayK5R5JTX4kcrnzeZr5P2EsYVCRMDN5tDJhRg3NfSXG74Nsz5qCRvKDuydYvhhqau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQ6EbhKeYKH25qxpyM6zKdEehaiYPBRQXxd4ffqTwRiW45u6fzdDTRnrq4J5fXzagKdmPs98jhmUZhCxXvWbiGu",
  "key1": "2JKwEHbnTDruJ1FsMKaE4tvCtXEqEGRchHL11v3wQXCc8Bpa1iPVy1cgfRYayuYdd1E81vjNh7YXc9CKJqDeLZ6n",
  "key2": "5QUpqTqWhzReUa6TnRmV1JFnmv4nKt5Zwh1ccHKGbZpgzigt6z4dsJruszay22dw5ZoTutRsFhBztcMCEnmKx3Y8",
  "key3": "Rc7KCAR7dRHhKtfijQgiS6BkP7FNRpWh8LiKx3SzaondMffFncjZW56NTfhRyhYieUHC9tR5pv8G7iC5jLdXsBc",
  "key4": "3p7JCJY1Z1m9SmXUcQYTEghf38FmnqZux6wbNC92m29a8ytjA56JGrHPAL4XT6yke9o9hyeGZnY7Hi2BYyfaBNE3",
  "key5": "4N7AHFmWY8eDxWNGr9ydxJpG21yXUbwyZGYSTguffWQFHKSWErJc9u9YKUJLwUDXEHbqg3oHWtphiQoWNURw2yRc",
  "key6": "4tNvB7ejg8DJkkSwowAYucyAdRL2S8v7a5tbeqgmnJ7qyMzJPqNaJP8GQjMoeSNCxqkqRcDzPZujfCgVWDcQ43kP",
  "key7": "3oUwrvVWMvymtuUaXEvx45AMPhcTJMzhqdBWnCSPzD3iDYKygCRPYNciePuCPMsGoNWHJz36GHcfXAdjiPYvibuC",
  "key8": "28a7bv6zHEDGeGTUFs3pXCMc2jMxPJuPAtsSwqCZkod1t6XciJdo1uyG25Z49ZF43U9o4KmtFi1aKUHvud7FKqPG",
  "key9": "4Mro6puyPKKGJdD2tcUJUFw6tEesC9c1K8PeHdrwUJg3uXEtcTxaPQVPaGyHqYeuCgnBGv5x28h3h9aK9mneMpVr",
  "key10": "38gtYpwAxRPp5L1FvguaTtvV7zWe6ATLBu6k9ATXtP7dtgH5VdD4WQNeGxo99GriMLL9BLRuubQxVxPWj6y3rk1E",
  "key11": "5BZWwZpDGXMKhSXd1d8tmySnWxSj2fE829ctxDfuNT4bEhqUX6roAdjSUoRWGA1TDieGHzgZs92dG1z1CQrJ5BUS",
  "key12": "5bbqHvJgYqHBkT5mBLAYFuqqKihFCZA8uaMz2RBEEpE6QdUsH7aQdEfRzzsJsfsMY3NwgmbDLQeqS9F9VdQaDTVE",
  "key13": "5nTTQPwtave2PRkGsnrFVzyAX9vvNUpSEC8VPBQGcyei9vBp3oJ7EDsUqRjBAR6K9AQvipZt2B6ffJj2gXuRHng5",
  "key14": "4tTTy3r6L9NSXar7aT4kGCwZkmz5KczKtKknfpqnZNbC6YEn7wgNeg1sDoafxEftEkTVfT4LqwoeEM65WCv3hPda",
  "key15": "35BinXfSqVZNa5WRCocUw1Nn9MZTTWRFDkh8s6YcfHKLArRE2ya6hez24We25ARmbd5WfGRVVso27cd5TPpnbnsM",
  "key16": "2dKNRDRoknBBvyKuu3jQYN7TofUY5ZE4RCYRRTU3F1utWvT3W8zmGVGQCPMeVDbCUPWoiPJ7jvEHL5u1vScw83av",
  "key17": "29YCvRCiLRYBHHcPUZZNDcC6BdNndRSzt4DK6euEVQRwDjcMaGFT7Lx9xkEs8VdHjKCmuKCfTnV8ZFDUSVaaps4F",
  "key18": "4Qdqet9DBnPd1JkVoXd839k6YtBGMPWjSncnAK8iSaLY1pdsx65dFkmpRLsGpqMykomsZ3qxKHwJ3KtGquoJcX8F",
  "key19": "4hitgpmzLxwg84XFKn8PbTZ2QoMLBKP34NsUKkXeC5PJHdEsKxK3dLhJnRtPffoiAadPNCMrvFGQmaSk8YpScmnU",
  "key20": "5cwy8BSeuYzM4G4Gj9ffe5a23oYyEvFBwAmtAWirrVDLkESvE7b7TW3WdHk92RVE7Pje8vvq3isdVMB6DiZVBYwi",
  "key21": "4qGu3EzJcJN7Pn5j77d2M96w7bH23mzL1uxRVgQTkTPKGbuH1x9WdvQABJxVQ54NtorMbyBwCFdeiziMgwVgt2wh",
  "key22": "5GPJebaqdPJc865fgAPxR8S6Ec6GWMrw8uDzn7Q9yY5H3rYrRc8TEC3tp9cnEvAALkZFCajmyc7Kyh1yA7KuaUJJ",
  "key23": "5b9ffs2Y9gPqmfk2qNKn1K9E1r8tnnas3AFc7gk5RoHxS7xRxb2pwFHrYnjeH3fVHyL1avePKwkSRWK1NrH8sG6f",
  "key24": "35PCix1yeL5YKvjewes1zDWyZiiYsEgTQQaUgdib4EKDkjF7UX3wZ6H941AtSLSRt6saDXxN4g7KTcM3Kzxrgi73",
  "key25": "5dR8q3Bm9zHDnMRJmEVbR5ywKRbbocprMkRXBVBC1fmZgZurj61iKX3o2KfVFKnTfENQpW6FHTjFvQQMrvmn2Pfh",
  "key26": "4vyNZzs6r94edeJYBBn1i8x5z1J92WLovHsUCihyNDT6ueMBxWWVQ4E3y3krtUNWqP6MYYfufM2bFW5C2dszQ89a",
  "key27": "3ea2wR8pEUSdKTtr53AR3n7nN51HVZvp4pUuf1M7PevRMgRwYen4uqZjYjyFVqYfA1vQ7MAAk14C2RVsn2hovEZb",
  "key28": "3Jd4Rm1oT32uvGnjEyn9TAQ23ia4GPpeBmN5EwLwYqjKiQm2n3pce6UKkh51gFybWXxjAKysCtqsAxAy5qMdrn7r",
  "key29": "5Kb99u6CqL7FEg8zpxqaPbUAgM5y338gAFYzJ9Cawb6ch9tEuxoXNYmx45HYC7RUmSAeRa4qapi8xKgtiE1rUXVT",
  "key30": "2UDgvG1tosj3ZbbbHYRCp6MCHbA7g4SS66YMYiAkC62xv4bk3ohC6XUbu1yHqenCKDj855ffJpnAKruN3c2Xjbu8"
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
