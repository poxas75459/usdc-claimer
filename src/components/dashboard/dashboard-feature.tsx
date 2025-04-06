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
    "65vwdoamP5e2K1N7k6w774YJzquMAMstP4fCsyzL8webVyg9yGbYdGGMkYiUmB5XeUgeeKnanHqSJgBVxgcNsn4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WHBH4oKJLh3KioXcCGgq297j2AGHDAG7kJ4YFbF3GUtnGLTtjBmp25Ca9L883dju7Lcs8wNhW1iS3Pum3F6pyJS",
  "key1": "3eGoGAH1FNgtSQywyhuu7XNG8LWaeAKxXjaCxnncu6sVv1qtkwEtULyrDgbhmoQXzPL96rcLaqMeYDUx8cULjZdd",
  "key2": "54GnXisRv3Djdzpg1iP74FMrspmPz7bt2JAfcyKtLjvhvCPBBX78Qg9PkME7myjsSszaFnbCzGXoj1S3UsW1RQaN",
  "key3": "476i8vEr8vv3sSAD8qkC41wWKbyBaNzfQP8wXq9wtYEd5AVn8eVgeyU4es547USBhnf4tQpRYpyKqG6KVnyS1U89",
  "key4": "2jSWqUXLVW75JEX8HewCGhFDysgxVKnEDTxhzRNiKCTbArcFXE82o9yVvMrr9k4DkwygLEsQJYKvyiVUnPe5cynL",
  "key5": "CQGtm8uBwaoJe5MsY4ST7ivyxwkN2hwRzLLhtPkABukUjVmR8NKVuCZofpzxryvTm7J5P9zWoSc7ScHoPMsQ27s",
  "key6": "5qebWLvuD2Pyq25pjoDnBCzyZqb4ps2pgVUHkMJrSBM5VarnsYbgYwx96rZkezfqsYWq31aFfx7UCAjwA8U2NSLn",
  "key7": "5ygjBEnZwwRUQvZMw4MVLru8pQZgexLMUYYcZmBnGonD68Q3gWBdeuP2CtEze4A811kPcwN9zpi6VFATCCeHfPAb",
  "key8": "3iiJtQLZrLaGtj18mEBMXo4ktL46gXpnyztZyTxTgFbjXrr3JobmUaFdtEjAG9zMHaWotHGMtPi9P3u4jMjLiHDN",
  "key9": "4NiWSbaurtJ6pmkWJcN8J3dagHbjh9ydApWgwN9enRJUDxx6c961TLo2Ld3hSnnzmpXuktAZcV17PUpfWLzDxFaE",
  "key10": "5Mk4wDkobEtPwRbgjn51vgTF6TJXwTtPKYGAiUHiq4f4ozKSLYJ4bdPUySLXKJLyztR3gJfjwoJiyTh9FL8eeBX7",
  "key11": "3NJCU2JZZuFk9SSmVobSzArgcyKHc9i1W8peKbWkCv8man7hUDWsk3jjM3MK4HKik5pru3SgQTsHsFcpdaH15HSi",
  "key12": "4nXdmwicpjK5xtXYAPmZhF7J418FxhveFhfbJhLadpx3U6JA6ftcc5Y4qDuwnfog6sCCta23Gqk3egRLCHKAZTtk",
  "key13": "2CsVTtR7oBcFhAPPH27nJpPXLZdxt4ymnRL1an5yc16nUAzv7S8HiYukqa6vUe6fm3Rxk2asR97UoGmYMEKwyJFN",
  "key14": "5KsgKVkM4LcSu1PARjL6ecMYhaQNaH4Brk91yvwfK36cu3wtWzEabJ9jvxKF26mojUNYCmWdifpkVUeeyMFe2YcC",
  "key15": "2Ccv1USuAbcHte89cEXPDZs5ZXV1S4M2pzwtrbYYnSowQWCBwo6Ecb4KVq2qaK6oR4zQP1GYQqgKVW18QZWw7Vqk",
  "key16": "5HCkFEUb41oVmyxurZDshc1LVhpPzmpBcTqHJHaZwNiHBxndfR7H82pv8sVku6py2AC1HYso1itiUdi9T2vLTSbP",
  "key17": "2UyXF96HAW8tTZEJY34oimiiTXGW3HT1iqcKTEU2s9XohaVucLsFuiZF6uFtZKT8CkXG9gyYrLXfJ182by4dnLYU",
  "key18": "3DMUSnJf2zsqaZgtURzHdYtjMgs92E9aGozTqLpFHFTn6BsMVpddQPrEepQJMXxF95E5U2GTCEKe7DwWatUpMe2v",
  "key19": "39kjjELVsH7YYbhT6PSdJ4FS2kzWC7sBBKNNwMPQYfQJ5W19UhZ2Evs2SWnAofWwjetNWuFbVMwQdpeXfaRYLkZ6",
  "key20": "4ZF9D5HdBZ75jypNYZanJwKREVk4BwWGaMvjnwURvn68UjXMYH7GUZDWEtvVktSYfNDB3nK2E5ba6qDBfLuMXAEj",
  "key21": "2VjPtDyTbj81iZ1yDg9DcojxGwyXj3Xy33mjQ4YuygXuZbRNYZzCYtkFB86q84bw368eF8bw3rjKpZM1idpj1kBW",
  "key22": "4Rim9MgbyRC4QAzm7HUSXgwL1BUw73T8qjPg3gcmyawsNxp339UMTzBPTwQpJYtmoPV2wVtksSmV4twP37vrgVJS",
  "key23": "33RRNmzo8KCvgmdunVZ2T9hoj3TbZCSN7R2kyE7C6CTLKtQ7nfwvkWvjQrW3YkqmJnbAt5fmhi6KtsQVSHyK4Mx",
  "key24": "46dKQ7VCxiZwwcTFuWExHc89479XC8wFyccU5aTYhiDunDtyDiGb7jcGzYwYZCvppvLK1nK68h4gAoM7d8Litcjp",
  "key25": "4wExyRNvD2DDEUEeVtu4FgDyA5wwYmf1nB8eGeZq4nEwaCSfjj71TxwcXrXLSjKRsNqwXz72KAzZPAn7aDViBT9q",
  "key26": "39jKbXPD2xiGumzU5iELMr1jCbtBMVJgForix4vP9xo64FK88qSy5LTRPqmuofTPydtPrD1zN4y6uryzaGH6waA3",
  "key27": "58cHYHiFSgusVK1X7h5oEDKzSWEc4BRfchbGqcwybicYdLXbdREBDaNRmMLFqk28xkt6VyWquSAmAtasoi3dquT5"
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
