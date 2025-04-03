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
    "ZYjEAe3g2X2KR1Na4Nn4tMXZrPvccvmmdF6PbU1scVKPNwF3pUiPdwkVTUL2t4pUfQBL9QSKXyKgK9FaE6jzUdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLxwmq7yAxyEKWLHXs8nRsi1b22KnBgGeqoRukmso5yf8GY4z2krzYAP1JaLyvhRhZVgrbCapCwP3gFJG5DyMxn",
  "key1": "4ELuerfrnDRCRC31gZ8yeUdcBwuFB6hVtrDunjoJ3gDsiMBfMNaPMcoYKdzbejXs9mDfhcGJJ7KrsNh9u7UkCxhn",
  "key2": "2mWxUPH8FYeNSUedMuh7UPqrAVSL2S11c2CHMXt9CYNzDKzfbmPfUqcMezvGu8T3YQjB3rzu8ma1eRZP4m4vvfM4",
  "key3": "4kvrVPVom5ogjU7pn1y3TUN1G4dKrkrGZbqFRqVmd4xZqeBPHpzhAWaKku6TLyjaANHftjCJyLHqgTMf9eq8nANm",
  "key4": "6vWs5UbpYTxd4ZghyWnzCHAPcvCHMJZCiM88pj26EsqoZjRiyGRMsqEXdcDWJVKkimX2uHqTbJouNoRu5EvNAaU",
  "key5": "5ofWUiSY4e6TuBJ7oTrwdFBTFXjibs72sAxg7tAHbDLZ7Whiwu6wtjMuZcFA8maJqH7FqbPWMnd5kVkrBzmu9kPB",
  "key6": "5Pyey9mDiaSsrVUfcyNaCPrZnLsaZqUvGV9Y68ooBLrCWxBtyZSSnKipMRfviTKPrVriFcqqgnjPsfYPHERBAD6q",
  "key7": "2BZgQ5ZuXD4vCkCZ8PyNDznCDGxXdfdXAPA1Dy3Yxac1hMuSNuM8cVATQhp1v1jj8aPfsguuxqRFjA61ykf4Lvti",
  "key8": "5x8AMHy4paNuE5GTzewg4c3vejN9mVsBwyikVkG6FRxjz88izXJk2fW13sRTC5eJdCacRwubmjPvEZftu3F4xt9k",
  "key9": "4AMeTjQk52adadygsgCMgQkjXuuMffK1BtCqMS5HHyM9VAg351D4DM4mD5EhMhGdrJPbSeEjjSn5DiAkcvP5k6hn",
  "key10": "64Tbk1o5m6pUGYSdQsAvAcyYaH1ryp5AmDzWJmNpMhGwAFirEnuBo4rGPL3pURgppPMFgPS3L5rJiP3mbGynaosr",
  "key11": "3xhmaZQcDeJcws6DD4zCVa5Eoh35dJaXC7avrXc4WgEpMwaMFRHEQQZdwQ1ksZmMBJCyactDVUcJHhVXyu3YP9ui",
  "key12": "35Y2kWF2ZoRmtGyMhnCuxdkxUfvtfs4zMsU9E5SzJeXCwUEEFSqSfLMpmWc565YXyBCbtUPhnvk9fCPTGQuuPdDw",
  "key13": "4bsVw1u9wMqcADcXWxNfkRrVQkJ77sd69WBnpo6Cj3t9t6zMfodkHCRfGH2rwxyxjzaziH5VwaZoLyDreg2CZBne",
  "key14": "E7sJxASWhyUKkVpMSpFKCGvt6f2Jm6VnS25NFPHD75z2on7dxTMvTN7HJEZGq5jm48NadNh7ov9FyeNZ97fhwk8",
  "key15": "5Ld2iD8LnuEHQgtyX7hwZgzSMRw62N9cWHVVf7Q92aPpFdQy2LRaVXR6iNAMf4DhQfEBHy2wsnRftof4XTzyJgRC",
  "key16": "NQ3jS58sHdVB4c7Lrv1TQkEAg7uuuuYz3SgdH6xCHB45x1J1upWFcyvd3d2yddhpw9wDKrNK5WyhHXaMQ6AdXMj",
  "key17": "5yqG4UgjCWj9x7faW3kuM1jd5QbrStpt7GVqMSFrRptrdjrrNoj47nNyyYimLG7N2Uov4kzPSFihkDge7PCU9uwn",
  "key18": "2TKXzRCP8SfnJ71zNvs1dWRTss1AYCB8XnG93K2vhnt9X4aTLQMouXPhCndzDtWPZrfWgNp2csX9YLYX2zMwUS2T",
  "key19": "2CsutoASnZMjcvguwSFnhwqrQYqsKHpnCjfL9cE5Hd9GpZiDQ5GJGgRN5Cd2zSGbKdCZ2UBGDvKWJ2CVafAbawq5",
  "key20": "2zn45wQvsUMHRt8fny4dpfFiMyCVUWakLvxKMWcYLw7KL1TP2Q82cqxrhwGxZBJrHk1dQTBK4yE73D82Gx4ZvYG1",
  "key21": "XAs1iBxk9kFJGXz2zpSQ6pD7poxwcPPbq6PWuMGTac9ywCVmogE2qVS13x6pYwzsMb461So2E2fhKnw5wLLZAZy",
  "key22": "5RuhmCmUqwjQuhYHd3oyxJkiTFkB7dKU4ibzLBE6gMzLXYLdbD3mf3gBXD52wMjxW1FWmeHtVKUKLHHo3xv5gjmK",
  "key23": "65jDbj4Ac5XsHT1ci6nssXy1B5T5krRe88G6uVvvZABSyDMuKoitjPjLLWedLZnNKBMaYsU7sknDvYD8DC2ayuwr",
  "key24": "4kCZr4T379Wvioan28eKC6w3MkBsbepjARcBMfs2eYDHF924YRX6D1iwuEgKnk4JcHY49aXDNn4ER4WArpX94Qeu",
  "key25": "JPdCKVC8ut6ARdEJnGRAtRYehByJa1nJTgW1t2EAv7px5C3M3dopzdiaeQH6sdUD9je3pEdmKdxuKMsHRaRGyjz",
  "key26": "2kFKmGxuCwWKKX9BNL7jrFmun6YDaRqqaMHHGCYmCPGnf3YwpGgE8t99SZsPgLKNcgHNW6tqFwpjdkGnxYNPTzZV",
  "key27": "4tTrLeTVStvxvWc25KEbeEWAWH8XZKCRJtsRsWQZpuh953CX9NuTK8crqUJgRabPKLZg63Cnjr3BWtxxvVzUBHo1",
  "key28": "4VUh6kwYfraoyV96vikwkaVa1HzxCkjW9JyGQKJQC761aHSM6EfJSto1uDQVnNemPCpZRMcjhrqb4SazDg23DYh3",
  "key29": "3CbNtEzKMZ7m37hotmQxE2RmsgeMMRwMDRQFHKyTfjJRUtLjmZ5TQFXcbR6MbZVrH2EBRWWXQhiA5jZvwNZhYxCu",
  "key30": "WjmjoeKNvTocXD6Yxgt38EywmpgtqkDLr1SEcBuNkErybg2ANM5dvK8kVVZUfPbQUmAumm7yjA8AsRvZNjrTHGp",
  "key31": "5uePjCgHpZvWvBNoHCxeAejp2qpHMMBCJYueDJa6xTxEBGkzZdApF9quYR7KGAuh4urXwy6EVkNGpHqiGC2FLriJ",
  "key32": "5dHcvaSqa9GwXn28x7gyMWUgvwuHxRX2xw8v1P48H1nKkQLaf5UxKJAyBb2pNEY1SJxgJBB1zbLKv9YtJvt4PfvX",
  "key33": "3Kretooe6LY4p718VqxDVyCtuFJcEtZyjXWqB4zmmxtEmpkXktTSJVKwiFRtkTHBVRRW3UpQuoV28Kf52pRoMyZp",
  "key34": "3TiEBWxqmWUjiZqgXgFeUzk1xh96Y2VFgodkTXqiBPXL8iu8HRQDcdRt3JypqTByLfyR1LXKFMBpLXa4T72sui43",
  "key35": "4Q1RZgnAbXi7wJwNHqGn9LMDGx6jFysoMXnTi6bu35Jju9P66ZENLmXnYpV8rkaPh1dAiXC419uJhpYys6R9uwG4",
  "key36": "65cA3NLAXccm4Jy2amLnzFDwnsLYncC3dvxQqqVHE15PKXmoxtg46ozmw5S68gokKS8hyqo4KjyuQ2xqdxNYdqpL",
  "key37": "22iGeC2fahTJfa1pE7Ev2cF5r4JxtRphb2ynxN8vyU5ap74swhdmeF9rQnwsAdWQuoyjDDTNo5Dm5cTV33yA93U8",
  "key38": "Q5qNyuEf6MnCanQriZn6kTpzmXVYW2VyVk1MrbvBK9SXG3MGRqkxaShd5ELBXDD3fg8eyMvKUqqjtFFZTAQC42Y",
  "key39": "WYS8qLggyEbCszXfV4ZzG7W5SMcA53KkNtmATD6sUrRYKadJVKrgqRD6SPifkjxtw45z9rrLv3n1S7c2jkGJCRu"
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
