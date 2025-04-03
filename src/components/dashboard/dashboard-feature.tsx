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
    "CgnLkNTcg1WCArr7RBtCuaSFfadAjH8uwe5aJZUFs6osqCp3TrCv6uJh4UKJkRkjkJCVjfv3moaCuCLAkrUpt9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohZpVse7YC9UBoJWZFrCTJNiVDLbUg4cnNrMkJTroqegsenqLg6CCP14aJYsrfE4w5VunEBL2gnS6qsbspofDc8",
  "key1": "4iH9dGDz3HHsgxN65yHVfWPifuLzzxXzmLmVho9L5b51tWSRKCaRWMmRPjAAtKCt4xL5AkuNVLch4WMsabKY9NkY",
  "key2": "4CUPBeuEUJa23xc3F9QKNN2obzHAvVMewZRYTD3CNmUt864bQhXxYaSHJERXgPiGFGe7x3vxihutfgS5VX9Q4zwe",
  "key3": "61ZKcbN5ZprErRFzL1V12fepmKzDNyw8YvayYBcAZVz6NwR38qE5yVRbNDwbeZyFiKT5pYgLFDMoSYfXjofgJfXY",
  "key4": "k9XAe22fC2kXYXuBcvNE34YS6qR1bHSyU37TSzdvFTzCoMip8gYheJWnuLz2bfQWRGGnwaaBr4mYe5HFZ5Moqis",
  "key5": "5rVCJ1p1m7C9yjA2NF3p7EEpBH6HoxCmjzTJKDvEv8WiYSDPRWVvHX9bwXChu6JRuP1SxDKkct7YbT1qSTragfPK",
  "key6": "2f16MNbxqwoyGQwGQgBb4pUFWs5xKeqHA6apu3vpi9yL7veGRKQqnVyZAGpRXNh9NM1DAXSWT9d2sYF3UrJJwb8F",
  "key7": "DhjeG4VJBTP8jTCU2fiYBbLzkURsqw7483Mrcprmxqqc6wHmQt9PdDQqseZ41q8e9thsbUL6UFjJjBkbymepXLW",
  "key8": "5hs2XQYGP4xWfALZpwt3NL86mqdJjhL2v5ZiZsgjUni78WmgqitMzRLkwysyH5Tn92uKRrDEzUxeHaKSjkb634ch",
  "key9": "4Hns4c5MsqpFWU19Sb1t1i11TUqxirPR6q28KFSCJ9PCMuMTgAj1whRWT84JKNH6caiMVAFvmmxmhPTp9so4G5VY",
  "key10": "3MnSLBQ9KkYQHpzZgMGmfLRmLrZ2H6AnmMxx9msVtgFccgmMPp5kJ8wY2dfjjGUsG9wfuwyavDZwUjfyhx6VegCq",
  "key11": "59VwMnYfS5nE3TwDfJLdu3QdLWQc7EpznXzZAtPGhUJBcTMkvfGWNUe8E6jiCGUeRf2prc1Dq8QsuNW2nFMhUCeK",
  "key12": "XW8kNkGHPTX6rpgwxR2cf4ym7W92m6EtCdaiuoddfYNrj5r5JxxUpPu7ozGi7XwK7X8jY7PtfQxQnpURjSD1ANx",
  "key13": "37RBwVfHEzPP5No756RtymjV73JxGAFKVRM7PNn6NSwDCFvTtwBFo7Ro85Ao3bB3rNar2YjvZ5cCEWoedYXVJs5V",
  "key14": "5v9k6wp8Zu2wMiZxMF36kakPZRUie9iCWHmv7JK25LYNtmUWfg55PCzXvbPYJ4vcqLq7oxpVrLMBGB2DcTDtQpmg",
  "key15": "5Zdbc3mUcNMJBuA3Vi5jBJYqqhZmg6bYCUTGuCCJxdbtfpFzt9tYCQWat9YvbaiMBEreNvDskzG2bu9PAxLMwBpM",
  "key16": "EV7GywQAaUPzj1Dw9yFyo3hjgebuizQvrtEmfCdR3VJfBSFzdBqbX6fDenTwWfHjUsJMJE5UewpGU4W9MCfS7ry",
  "key17": "4TNJn6DvwtMfrWy7pYhFcwJHYYU3QeqBDQjDzZupJ1HRGSvhrpohGAAoQ1k3GtNFvMMqKGFuCBSUc1NhtodAhYDK",
  "key18": "52CMcEiQoFCMQVvFCAX6QtvPGWFzXfYJWsWVvCUemxprub9Mfhxo3a9SAGqbb3dtsfxXmkET4efFkqSKtyrnYY2C",
  "key19": "2Trxczz2kJ1jffGNPjW26HmLiZYrtansn92vn2mi4F1hbFoheiPmEh6aKxGgX2Y2Qyk1ir5kziBg5kPKcxemsmRG",
  "key20": "5vFxj393kxZ9DQ1fp7D1vJHPDGPVypD4p118REmbgofUJaopMVg6xptjhvLa54NHYh7wd9k9bgg9BvLV6CdBMWb7",
  "key21": "2X97HukhuT1GdcV7uPHkpRqVrsoF8VmqCaJ5HQFSmaTT7RnWY3iW94C9XW62APqGFv3pDy62D9Htz6RseyZSZudQ",
  "key22": "5U7debVBmndipzbXguaP87Hcf1v7USXYP7fMNA9SWX9ERfG8J5UvLohBMMhppu79LGkcySPwgXZgYcYm9ykHVhes",
  "key23": "5iAun4hCtzDU6zKsdK5vA6e2HULAG88RPH1zxAsqtRQ8mzkBd4nUTGrzV3DqkCVr2fMgYAbG4fm6RzEGe8cnULLr",
  "key24": "3aPVzGyrsKNkB46t6qsErohdDf1zV22VbeMJ3hi98xJ8BYjLscmgoKh4qmtd9Pn7Jdm7bxP9L9gYdgGg5MFH7Vq4",
  "key25": "2yBzY63ZSN2MJjKs2hzeRLhQja5YtxT3NiGcBHdHv6ki3Dadkn75N3WiAoD4pKePY6vifJprto1y2H41gGuqv3Di",
  "key26": "2TMnKBuqPxmh5u7SDML3KuLWG82WbnhWaEZ9ce12njtr5AxgWyPPft5QAZsmXaxCn9kZ7f3BJrQSCGJjP4K932fN",
  "key27": "2jDxBCAvwu9d9kKpbRBeqqVMjpdyj7JsZ9b5twqqmNrrr3Gk84VS3uUqFSRw3dbGngV8gJnxRuBfZn4QR83HzUe1",
  "key28": "25rXzDXhGcVL2ZTTZYFyEHbchsJmLVxzHCjsoaP2CwVDTVHnM23sGnhZuo8t73L93E34CD7H2ACV6BpfaJS68rdb",
  "key29": "38MemTyX1riSruqQHAAindxBUkkZBgJWHcwbnynZyQt3Edacpbdzq6Ajm3upuFwcV2q6iLKGqrefg1yXm6x3mBnt",
  "key30": "2WsXuDw38uR915Y17RansFVkY6HzAo32mcNAGrM2LWdmARTuZUrLbdr45cuBtB66YkjCdML7yPxup5177Rpfs9GQ",
  "key31": "55KKMa4dY61BHnQh1j5JDQjYHURK8G7YtbR31earHpHqbczp4XeeREku4oKrrjXszT6jy3YXMW8i92yjcyzEa8em",
  "key32": "6VeJKnk9QMVFLr3RBT8b9mfjjLmKu64r6uRzXe33MMjYCgVbNEnsoS4Em1urkHLc5HKaQuLXEBGxr3rwVigbd41",
  "key33": "tMp5SKXqEsWFYFt2tu2rq68h4SjjqWxUkyroBEd1xwspcVXz7yzcV199PfwHNuqB8ikgd1esNrNzAAyBkBzSTkB",
  "key34": "bGMP1kTAMF6UfRGPHUvWrKCtRgok3MH2fmcAcZdk5KZTypfeJHkYX7LH9ZSHciQZcZmy8BvPWhrccieuUmcbb4G",
  "key35": "54tLS5tLTXR3raLM9xZ1ABrj8i9p1TAoVpcnAHZ15fpVUmneKcGVfiqc8ygB4xeE7eRzLt8dKsR7BU4xmaXM3HNG",
  "key36": "2Wg9zquA7DGy9kjq4z9h19GBRKhUop3Prksrc4B55dXijvuS4NpSdwpCbbsxug41HQcf58dRxuPTNK5UbFhweRHh",
  "key37": "5yoKgxwWMNuEpmX7yhikvk9GyvgBNzV8yVcgpcLE7LfEiwHfQZjuyj6Rd52ufvta73ZsAjC6notZX8NmQMDiMN8D",
  "key38": "4FnRU8hhAFyYsSmy63uRawcBj5dwzYcMcTu7enfezSmJiwNG92pm1avqEjV7tT41bPHJRWm1GRzEE4G7f77hUKXD",
  "key39": "2ymFqDhEkVgJcj91K23KGLmH6BwZ7TZ1gmGRHPKaC1oK1aXQqc4SmRYV1EUTLcvDe8RfYdv4tBEHtKcTwN8H4o4u",
  "key40": "2gwZnVxYWvS6Mad2LuCLtHwmUrXU7YhFkRhHExJiZaPn12hpqqNipjQsQQGrEYJnXZDpoPApGxv1infuhCpjsWkE",
  "key41": "5DgenEPDHqmiRAws4yGohUSa4poceYyD5GBzWqTv3Uo6BQbL32gYRmGiaepy8HfTfCeKw4HCBMPb8avMpJhDzAYr",
  "key42": "5LzbSyKxJRbvZQXbD74t6aw1NGDvmc6bXwMS3FKXp4KqNUHpXci3LLGacZEDbSjpAR5987yJ6boXTB3DxwMrCE2B",
  "key43": "5AAotiMJpmpK7v8UgYryRveGvfMrKU5F3WTLcm74vSBmRGoN319LowtXsn3ycSxQQ9VqkUGjFXhtvc4fhnSfpRTr",
  "key44": "tSMhPVLJr1QNWfUunPEh2AYqATrjUndgTQ1sN6QneN8Rd7fXXqVuRBhZVAEsGUCaZFeg7sCH3zXdwAfRY6aqR7j"
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
