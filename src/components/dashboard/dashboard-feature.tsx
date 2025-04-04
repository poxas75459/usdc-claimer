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
    "42SPphbCwaU6NRYC6S61f7gp76La2hXeYSDu4gM4v9SJ6V8GjFfkttsd4xbBneyyiktgZBdpJkJuZdgzrYqqDWmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gs7Pzs8UANv8kG3Mga62iHURvwmyeVohkRJ9PwwL2xntftXWjqCsMxmVFyWgATRPhUhJVoCHCqRwQYxMMxg5kLk",
  "key1": "2NLtjE4icRm8fASeUKwQgQ73XinirMwSFB4S4yWWMiQFXu8pY1tun3pcdNdrUHiMxnvsb4qSq6pMPWQe9GfkcDxy",
  "key2": "mibxvhmUc4Qg1mkgRrp3P5tyS4zEUpojGZpGQbzyavThMf1xKt62SqoCQS9v1RuwKiYwhT9c1jZyj56B9DGgPMj",
  "key3": "5gvT2RxVzpF63uccbf6YDiCVuqBy6kicyVXzS4TbhwhhTDfz69iJki9pxVtJevT57J8sFSph1wXaAyqH5YCz2HeQ",
  "key4": "5xssKS9KoLbGUjFCFWTgGSAzDoL3CEjWV4LVZK9RGaFbCzwwtL5zeamzNVJZLHJ3RiXpRpPUbC21TnXpSJv8B36k",
  "key5": "ftqknv9Pfie8degvhpZMxSu3dt9rajRMhrAKDwoSGuHfvPhaDUUBwFvjzqeJ8LF8bER5NqzEyanSY9mizZCEuzX",
  "key6": "mwXMXhWsYWDu6n3HiAP27uHHsLeR93W3jZfo5UxrtBsgXw55HYq5USiD3AcwAPwoPaqwGUMQctz2XVn7DR5x85U",
  "key7": "2SqBgdrvbwUwQRfBWZjSzU5dC56A8pVkzNgSafCTmiAQvnNEddm6R4HDsJvNQBjSyzHFE2Kzn3sTg2JEe1ZoHLU9",
  "key8": "284XGz8gFmW4bzQTw1zZ2aD4oyQBYjMWk3zcuYbTEkywDddhAXfMPdaJfTrdYnEpDR19fn3yqt4a4HdeT5c55SjK",
  "key9": "2WGgeXgiUtjcsqwWFTHMe98jsJo53NwEQZAis4w82sE3SkVBTRdGfjdnWoJ2VAKgnADqRoTJRi8X7FYPyxX8nQTx",
  "key10": "5BAH24d2MBhuGiXhPpDTvRuNDeH7kQPEseDCa9ip5KNFiQG7y5iebrwPNjWC3Y4bbhvSQXtJMoAGYcbBDrHefEPN",
  "key11": "3pEpEAfBot8CV4WHxeapjUsUdwh1fQ4nbyXQNq2GN2VMG6FcXB6bKFDvVY4sjyGQvnNZ4KLhXLzrYqnEmRiQeXv5",
  "key12": "5cCZDcW1qLsWEJzmAv2KQoWssKC1tu2APcG7QSqFetRP3Mu6jH5cRAD1fxm5CcCSTBkgS4tySdw457FihEzf3mJj",
  "key13": "4kEuEDDo8Kp58Rrafzhf5ynhPkmewnzK66CU2QNi6s67FYRLq7oJ8X53RSKa2HJDBWzzqYwrRRccffmFGMYfxLjw",
  "key14": "87j9YKZ2kdo3UzHap391q5tfxtdhmrXcpXfNsx8PPkoGSPggRKk9GC8WbrSpKd7CEEgiNgHXMvASqxdTDeHbSZa",
  "key15": "2djXv9yjYCFCRww7B88X2vi818vi55dpXFbX5edwo6eStx4b5AFeKKRGuRot4Mt6kDGUpu9SNHYyGHdgUH3LWd6D",
  "key16": "2awTjyJK9Ca46k39Yv3frTV9YVBwCDYfqB6EezqKJSRbHx6Kp33zMxAudD5fT38Ude6zrcs4fboG6bJFXxYStey1",
  "key17": "3HaxTh771obwmprj5tUiuRRzuA43xdAkQtN2pSTKJ5SaFjpEsniHRbtG1nWUNjvvM91sdvZ2kvZVyYPZCCGrP25P",
  "key18": "3drRVfbybjkjEGVe2RYRPG5u3ViwaD251jve1JjpaUHtbBxEUd2pFb4m7HRGz1qo6RmyqetyUjvA9xoRVbyLbG92",
  "key19": "3ffT5MJpvBYVHJHNayCQHRBq31dciSgp984NqBimPWkKH1PHgVUyaf2wg8GZLwYy85LYo97wXwEenjECx1nyPczK",
  "key20": "5RVwSHbjo3P75EgiGFgWGJRmFWoMguE24uedikZ4kXZqs641Qu4VoqFYsjNo5WuHCDfcbGrpG6UY3Pqhtbm9nzAg",
  "key21": "5rsvKgveiKWzqNL9BiVZ8T62SHZdJv6ZTtGgnkUBnHBhKnL8hgvZ15efEFMmHPaBMRfpfkJRAnTETScfAhcgfXnK",
  "key22": "2k6kcZ9Pc4NDVz1sRqVcfX5U7bjddVo9oCbCoTH1pfbEZmkhBaJ9PhDN49kgoBJNAc8MTmJukwU3dMtz1qTGTHNZ",
  "key23": "pz8fwUNG9GUhpceK5PdNsBvB4ergNUt7dyA7wu1fTeULPDL7opD28bLBUmZZXbuSCztAiAnCfRtoWvePBc1RfE7",
  "key24": "4NfArsrgo7ZeChG5wW2paYa3XNcUGEXung4SH1FLRkaMQgnmLAxt2UfytHSVu1CuWydf5z5dt4PaVhfANsJqxgZL",
  "key25": "5i3qERB56L2Cfo7XaALPqPA5vYjCKbKo25eAw62q8DZAzvm3BMbirDPR4aUrYorRKivYwqnRoqRX3DoA7SfS2J8K",
  "key26": "3UMX2jfDe3nVJDuQ4Z2T9xqbb4CBe1ty4qnwvbpC2YEphQQGc9SMQsxSXu9uSXts4RpoRRrK9ydqFH1BVnUdsfep",
  "key27": "5YmpUsk4R5b7kAdPTLynHLXWzZdJkLQU4dgHSMYbdgWPmWcb9SPCy6sVnvy3YDkXef8K13LfNZPe3qwDNAx989HT",
  "key28": "47LixmGUReiN6UzhLhugsyDpREq99JyKptkmtm6fqcMKa3QgByMGSDgP8ypAkWXGwBi1ZeS9ZWbRgmxUGfvVPJjt",
  "key29": "5XS2AGj4brNWgtxj7dkoGoFn5kKY4U3aUNwyYzpCvi6W3ozWSZ6ep4mfAZKoWftPEuZHGLeqQif7k2Dy51mWFAAA"
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
