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
    "3nwpDBUTz9tswF6XPFbdz9WqEKgqsTC6zu2PyyzcVms14eYc8kkBZUJJ5wLJGkvwTX1ouCG7CyjF25qWdWGAucGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3tsmEHjy3bZKsdZ9ufAfrtPcsMCExkrj8KWzmjYsCT3FMEiTR9REKBkJ5AHWVwrswt7Ld4a9zvbc1BLUogjZ4b",
  "key1": "5Sj6SkjyV6gKCMhncEBHtQx8WXoq5oZ7HjtQdvudPcmxqpyJrRuMFfDVxrbSstKvZyxNh43VWdiVabNrVzkfaq1t",
  "key2": "4idagc5ABc93dz2EwTrS26yMgBwCE5X47R3P3Fr9x6g4LKXHunfSzfFgkb2JERdRAZJjhZPB8vs7CWCrCUJyDxym",
  "key3": "4PsW94y7iA7KU9wT1dFYWrkx2Tbksi3aubPrtfm9zQMvoxFFsZFJNMTpi3zL1uVVsKBn6qn5dhDU8SU81QxrkuCV",
  "key4": "5Zyu4TD86wMAMvgfW6V6nJBPAdepFVhc1JfwLvDZFD6x8xUPGRGkpJ2BeLXNpJeXC8F13gkeuCP5mfRDTe7pP428",
  "key5": "35QYRNnfxvmLzFKhYsJhCUA34gKBbxAsxF4MYPcxVnAtBhuznyMnN4oPcknTxWihXndxN1Bn8246YerSn3HJiAVR",
  "key6": "2JYRMPNFB5ezDxqAXnxccQPfSZZLE5hqbN7vfhrkNVgTFNjKFHKYCu3c5m5quCHLLTP9kJfrLqxEfnndrEpQGn7n",
  "key7": "2e8CB74tcjhyg8CAU2qnT3xQH6c9YG69DvJasA9T8PkTHoTikH2uhauTLQV2DeiUCHBBJfFePgQSLhF8atNNSLmf",
  "key8": "5BJcMocWvz8f15a5GTHjbF98BxKc99D9WvKFnNyv5N4kkoFwzok2tSVyB5AawBUmak8JwGby8mQuzhyCtQSWW1KU",
  "key9": "63HY4VhhAKexD9D24PtWp9CcK9VEeyCQwKmX1xaLxBvP5WsRqfA5aejqMNfkNeyEUEWQHJ1zgZ3TSMKwThWXXfCT",
  "key10": "3QjndY8GMmkoR7eCWTy7yxYo2Sgq2T9CiK5HW18zAQyvDvHS5F624cYEmawRNUa42MLAMWBHyB6rERuG78e9MPzA",
  "key11": "2qASbre8hMsAAs1RrMSthuNR2EqpTSit5Eu43qmz8y51p8GwTYq1WeJDRk7CoQQqywEEFjKthbpsknWNm1YSC7Da",
  "key12": "4XTHaumfLpyUvvNPgtr9ufKFmeB9bx4StN2uZS27xe4x1GZwXXJVeGUpbDeSRE46ZtuQnbHAf5C6ixwQhppDJEwX",
  "key13": "4RfxFyBt1xvoNKJcsXPzvYnpUhNcLtgszYVVXEfbQaSpaLvpWkhwca92xySAnYQeHiBLQv5iCPCMHneDRXQZ6Vj",
  "key14": "5ydgRQW6UVseXd491Q7DpfL8EZrt1FecKLuS7pXqpkWfsRew6vSHJ2YgEHyRp36PEF6xfUn4Jd5defFvMJ6KsnVr",
  "key15": "ncqX6LMwUA7rsDkLsEwFHkGCa38LTgScuLVqSB8Lcyg4rxSodkXN9RrPm8XVLzW4X58FHKUV2UYc7QCg5YvDVBN",
  "key16": "sN14sBsPL37ZjMiyhacuwsv78VRN6mu5LxmhRjig1KguPEVduBWPKaLGp36tQhoTNGBfaA747QLBTXRy8CxM7yq",
  "key17": "34qSoVH1wiQjUqi5VnfDW5ftRFfx7J8gAhNuExepfqe5Cu9jH52uiqWhNKrP3c96ygP61bc7Z2Wnw39PH7Mi2M6V",
  "key18": "E4mdUGFwCqh2MRsPGS3entfCfc9Mr8x7TC51iZJ2EszEAfvFtDVA9ULtX6VEWNNTy2gdX8dWqkfz8bkgPNkj5KX",
  "key19": "3SVnTsrNnJcaVit3KRT8PP1K75fBijGr2NwxtDtTk4N5w5UVRB3Y49WPVDCS4GeNrY3m3TWaVA5vYQTEa8hQFkK2",
  "key20": "3GtCmR9XChAyBP83nD13sNaZmYLg1SrtDTB3mw6yLUAz4tHT1ZuGhpqWkG8pg7G2WMaAk8yMXhFBYQc1pAQksUy8",
  "key21": "3VJa3ZP8pyv9c254b1gRMAPp8oNS6DZkYkuhShYxxse2bHrewyp3EdAnkivbcEJob1QqeTryRNiabtfZrHyZEP7y",
  "key22": "2V7itZfJY81JSEiFdfkvVCjnghJ7F6hRg7gTVW8SxwxppamcUUHL3dheX2uHzvaCNhygAV6e5dxgdxRvCpKiyUjX",
  "key23": "5t9Fm1wzm8ZuNSiiK3CCwWASVbfhPn9JacgAEc2i37LWttEWGFgmrTW1GkgGotrrKtqdcnyxAbRr2v6ZVktV6d4e",
  "key24": "4572NqgVVptSokP6nik5KZg7wwigFcMvSea8gRK2be3XBP9jcRWRhyEQemnkwongSYVAa6CfEF8Eg3tkcH44gRnR",
  "key25": "5na6zsU8fyJueXyUB6ned1QgN2ofxjZagivaKWduw6FKwEDQGz4TK37ecewqwP9ZsybrTRTFRYJeAZzgTVcYRs7F",
  "key26": "5h8b34RUR7xgY1hPipXGS438k7qXvFBaZwTByvg3TfSmsQkfFqQK3Kw2Yka4GyUUgBRTiRAgDvC2TAvoDUNrdrnf",
  "key27": "2kWchTRwNXpN8qhbiumXzyUpVXqqMAhfKhtJoa9LwhwuD9oL4vwQVHXQCHDydbBkNnjCWXwpMfhqWQ37wHhXU6u4",
  "key28": "2NnAgcsbbKJut3YL5tVNjgGN77g3V5hWaye8hcvKd9gi4HZp7gaz8kmGEW3WCi3Apn3eQFxRqL6zNnKXSuAQj6DB",
  "key29": "426RNZWxhULMTCheXxD29mZy4FoGtdhgPqms41ZdjfYXZgnEsoKjAWfmiFWUBB9vr6qrAjJUwfwMXrvGrH1fZrE",
  "key30": "36pssApjXKi1Mgq1QyxnddSDc788EmDASmhHoMizf3vcYsYhANmd6nxEbjmWb5jPYntHxBwFg8z7XJsywRwS3cZy",
  "key31": "xt1YFUNj5cEqBUD7pro1imLChamxLqcYxFWbA4ZBSp81TiHBesnwqzBsMSxJwRqJMaGEj7Y7k97NmQuhXtoPsSj",
  "key32": "5EL6bArKFoViSqKdQjHR8Zf5m9M1z2HLEvVc7WkFByzV8izwGmnh421qkwoubkFrxdH7pzyuspYMZdXUuyaTPA6S",
  "key33": "5KthJh3vMPoaHUwPYKAHiPFsfhdHJx9u8sAxieqi54WBNqA8wnL8yZSdmbkpVuSfUZvsTsj5ayMMQLGv9CYefDsB",
  "key34": "RKjq87wopJVEy9uupErepfCch7LKo5oJxgnHdBR5h3U6BUC25Zm7sta2Yyvb5hEnJnpDttc251r2bhJuGyfy1jv",
  "key35": "oVMPSwRTyMsQjAcaDwxSLu3Hhx8wcNdqGxNDWPyBqyUGindYmJZssgKJr86BKqqdgPns7YhfiFJ2TSBWoan8MU7",
  "key36": "611jrfL9F6w7SB69QFhAqC9L35JCugQBYo9V7EdgGaGq2Fkf14X48D4CHnFTeduEF21zPJGVwcBr2wzVYWeu7FDb",
  "key37": "4kUiDCo8iErpWZb1J2UvxAxWc2FtHDvPgRR7vvkYmm665QAx3BoR3Dc1smoKce1gZmdV3Vwz3qUbeBrSQEFvS1Fh",
  "key38": "5MS1ZSgdUTudjNjWgEzbY6i5Jm1yCGcxSuySWTBXrj9WBFA3TEQ7iBhZQguTJptstGvf3SgWDK5ZmcPMasThABFX",
  "key39": "4dKZS7p9e6owz82Gg79Tnbkk9yRADNWJogbhZsjzBJwXrtdkqRGYZgkg4V9HdJpCvTq9iM7dwMd7tE1QU2CbYE7S",
  "key40": "412tchfvjgDLcvNodEs4JDbFBWm6CmutPnR5SMNQYrLHxP3RbydcjcpnvLt7c3B5Zn4XkSErizB7wM7PXV69u7MC",
  "key41": "4dYiqVPR1erUbedQA5eFVdNEe7XSx3EHWo3kjyxd5LCQ1a2u5uuPTLWffe2xb3ezZMUFmWoAUYFcstwBUQbQJPXP",
  "key42": "2FzRc1om22uZDJWUksjy9Xg6hVgdMA3uk93959n6NKVrJuhGoNJNjqv4QMkNEU2QdgiPouXjMmqwKCqmQBYADjuV",
  "key43": "2Na6gQdrEbZ4Ghg5X4pRUPmRCMafjquvKAJYrmpKazZNxVsyDP9FaQ4mCgfyk82KnSQFD5uiyH91jS7n2C4omMFc",
  "key44": "2GjkS8SKPRdQqqVCWgvGBaJgS6Yi7asiiveLUsT2bhd8VwQ8tBN6HY59d1eJ7D8mcRrxKUhBdK254xwjffnhEN4J",
  "key45": "rXtY7tr13BLry2fh6B81j3HEUpY3zm5xKtxGue3YtYCmDn3TbtAhP1PcDeHemvjQMqe9sJJ8zbppUUJ5q4JAFmJ",
  "key46": "3iTPGRJd2sw9V9pijws9HU9MqqN7Q2x9XwJQfi2fZwFiyUSLiB3YhdyjBRgXm5Kn2mqJXecPPbhwkE3x5vKjnTB",
  "key47": "3TzDKZGYGPPZVVAwmf9JKPc3uFRoPjD9YxySnEJFpWqU152RcvJnywdQDAojm6XPcz3z23GkoK8mNX99KgrJcsKc",
  "key48": "TKhQwgdX3XE1wckKz5VnddVZM3bHQsSiv9UWmVW8uU4QSbF7JMN25myeuxWZYbajHio6QDYwWKg3cEXwPqPwsZT"
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
