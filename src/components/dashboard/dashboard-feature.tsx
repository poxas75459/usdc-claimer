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
    "38qSy1NHhSf8UuVjpy1itq21rqFNGsQYaRAcAzqNgiBGRhnADa71WaEbeXrzr42opGpu5zY9Ag36Eahb3wQgJQsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qnfg9dgASqyTLRsXgadtYnPGbY7ULCagsJff5aPcXFBcmPcCvMic6oEBiFTQiqbyeXqKAXqtLVm7VByhVPaV6XE",
  "key1": "2EwPHh9kSGB25wJZVD3gdhaXtu1PNT8M6XqbWHkwgXoMTYu6MCsdMap4CvekUk1jGoEtcXENorKNQVvCpiJ5s7c",
  "key2": "4mKvekUhYgj6m1X5Yz4ZDcR3XgWe4tsY2NC5FBWtYeHswXVGJptDgxWxdPGPBaozRED74gCW8XhfrYmgc9y6xYaj",
  "key3": "4MYU5TXkeoKz9pNMF8vrQiwj1QoPvsf3DkrGJB6GbGXWE323MXb5HNTEtCk7QjkjtwmuuW5r1Nv3sju2Tx6A45bT",
  "key4": "3BV7AcG7NUtPyiHPh7b9QwonaNdFWjt2UPpvwnCefd94iQEKxdyyeQgYnQZUgoqfoudFZh1zphtpAshFyGS5v7gV",
  "key5": "3U3bRPvB7TpMWqbbBhFwB7jgBtLFnPqxaes1tdnZHMswJup9U5s4By9VbL7Zk6GNPTgbRrzsUZApTmsoTkLf3BFf",
  "key6": "WJCqJarse31g68WX2MQyxVk5APuh9jTe2EL9XTxBaS2cg2kftG6peJ1RkjQVsWZrvUUotpkaLwEU2bZ6YbgJkbh",
  "key7": "25jR5Ue122eHhPrrixLhiAoXMeM1VGdLjcYZ5rqKP7XrBEoJnamHotqqDkpJx9G2uKoogb3k5LKBL38Mi36ZVg8x",
  "key8": "5PgVSGbSQZCTP2V4kjmuXwprfwDa2L6DuDq2m9WdTTBKH6tW1EyPyPaEQ9ictmAzwQG9ptWMv9y9P2yiLnL9XTPq",
  "key9": "P9oL4YjLzHEM86RMYbx4wnJFgmrPKbVhiwysCFZuXTgDduXP5guXfuuHY6SUVtmPEp6TB1DN83gb3h2nQ1F9KNM",
  "key10": "3NqmkQRu2PEDxTcprTQK35NzFRYdTYhCvyBjPe8iTVagzai2HddZ28z8BdXHsXmkUXdAyLDDywzYczzKLPTzvUKi",
  "key11": "52aT8vpPiX6fX6SNST35hAeiMaCvzAKoHeiT5zvtrT2j1cCL3MqY6N8PKr8ZMcS39USrZQ1fabh1ei2ix88Pq78H",
  "key12": "2hCFVxpSApCKPMi8omKh3dxBy3ANzuPxS5fwvtLqowBBvVZW2VbqojuA5FvNbXFXba8qqYsvuXbmdJ5N6qV3kxxU",
  "key13": "KMgWB5c6PGFG5Ukr2XBJrhLSroDdA5uGkgYJr2FP51fLuMChfnCxVm2MbLeEHXRbbEmrEKstR3bqbxbAHHjJeu1",
  "key14": "3aTgfyJn2M8GwVrBvaHXmJ66MjwKnPdZbPZ4xfDTh19hxH1RqAkNbrV94d4tYK34VC6Vi4uZ8nyy6KfhHH1QzGY",
  "key15": "4zu2zJFCTmWfZnsHeTYwuWBSdrxtKbXk8pCkcWR7EqvDGX4W4ieRAkoMe3LY6MUgNsGhZfRQ1ydspXvj6vn1rSTQ",
  "key16": "4GEGxhXb4wStYiyXvqadHZqiEL262r9Jjo138VD2vdfADZck3fD5WDyTXkhCxVEKfC8rMk1ecuHQPMQLur7w2Sec",
  "key17": "3ciatXsDPRFWxvwSHCDd7Ec1YrdnYjRL7RymNfSH46P4bF1dfpy9w7G3NfSixiyAFc4ZJy9NbDr8qxaJ3UyPxEAp",
  "key18": "4Cd3t3BLphRFEBThrmQmAPVjkwx4QHpC8nTFcfQkC7cyNTobmTV3YutPSNQLAHKPQcJg33QbrjR81VUYhiYv3Wns",
  "key19": "4GcVvoCqaqBSrtKRpTpj3igDnCKRSwtvN8krVsSfFkWoK3q7bT7Gzu7i2XFhPUjJH5tz11UwLUj8Egzve6TmPmxo",
  "key20": "eE92o8MNg5LnJCrdbna9dHoMZGkRdmxkDpKwnwqpUhF5P1RkFWvjfXaZ4wGJmry8nSkvMzfrf5ynvSoD9HMm2zu",
  "key21": "4WzaK2Xa9t6zeyunPN9sS5bwQuhTuLDCuSnBpWP6qUw1kc4KHrqZLbt8YDSAeRdfwtiYAbabj1dHLdCRGbcJxM15",
  "key22": "5a8tvJwLJNZQ1Pr3DWFJnUXxq739UY6rFmnNVKRBJ7GPtH59t7kVDYnQEeczV4ANrTM388n3r27Kv62wTqo4UfJH",
  "key23": "2ck6v2tEiA6brpJaurpzFEnwETEK6zxjHCyCCMBP8CFZHfqSNc55f7d5qzDQ2xGKrLhVNuE2StnghdyZQNMJquBd",
  "key24": "5i6ddHbb9WUWd7DAkChbjC5sfqXoRn4qRQG2yn7kHCRh5CdSEhAkKhKPDSjRwhqoUsfWdwXofW3cixPvtHmVM3oE"
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
