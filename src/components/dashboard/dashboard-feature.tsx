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
    "6atTueKy3Uip2hqiwmro7fuqEBarGCvV9MiYdHWwVgdP1dkDdmzc54YPQ4rpzRTJpmaYVBLXp5qSSYUAqDcqybv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWxoMj12zqR5RjVPk999EP82toYtt7dNDw1opiKMKZyQ721txZm3C2EwDLXcu9NzWuf6qdKb371Vv6EwwYLBdo3",
  "key1": "5WRedpax5MonVCAhCx9KiDyRTDMYPHgaTiawS9d457t15TrXvH1ayW29DPJCJs3Y2Mnd7ah4XuifW7HEhSRgzZzv",
  "key2": "2uDQFTso98coE96BXVXkHo6zLobSGce6afA6pmnDFSF7RcN7S7y4BD3xbWBDDEMuD4mHUSqn2vf2VRgKq6gXFxV1",
  "key3": "CReUTpeWzPaT7hyXxDAhRQ9y1Nq4CzZiuMdcuTEYE4bM18MJ7StswZDyy8xW9UK6cYtRwgNtbgfVNqNCURffB1b",
  "key4": "4D74zyxw5K5SjGeb1y4Z4bfEthjer3zbndB8fpzPuoqyrjvE8FiU5yk6Rwbkqd5kJZRNwaszwVjjskeWdEAEkbFa",
  "key5": "3x3igYmyaMLkPhb5Xs5KY5TX9dwENLkBXAygoD36a5r4QAnjKYZzk53ArGLhUutRAC6P14PtgXATCsa8inXcQAEy",
  "key6": "5YwSh14ReXjqY1aJ3SQGfDNQ3DeuiKFjtS7v4T3tJLccJqN7CjkCf1uURX4iS193rVzGv9RYNyk1CM1ZxmS8Ziy6",
  "key7": "4ZNS8HYi9NwXmZwuLKTWKJQ9iNxgnDqCedHos8SnKvk79XKrcbiHyycqZkJ3nT87Bzhr2MLzNZ7zQXG4WarB9nMr",
  "key8": "59msKqJQJ4ziMDfXuRojda75NGsxAovZDfxe8WXvgwL8NF1X7DG1kCkePT9prcZe9bDLoNeTy4VWLCQKsLEqEbbT",
  "key9": "53SbZj7aJuydo1Lxu3gRcpXFYdja6wQFiB821qrDErvpbbz9uoTLunmFspZfje4XkN5LzLJWhCBNh7Gw8bFfECcn",
  "key10": "4MMWJBtza7j5zkM5JPQs9R7oTBoEuD6NGn3PQzSJjMm35K1GbjcwASrdVUKbBgDu6EEBhsHu3YPNX1sXRwxDsUax",
  "key11": "3A2bsGUFiqRQ5SKJW26ckPGAXT1jNUujFGgWFK41htKnz6xasmFTA1YZ8yzcrhkt3FzJrVoi4huJqieAE1krn7eq",
  "key12": "4noA9zP726M49FyE8VCVsTnjDWGQina8fHZu3D8zKoqcNY9ZYTykratF2YTAWqRBb3b5WcAwKai79UYwC3qp8rqW",
  "key13": "4bLvjkXvrTBNcAhMvtuCA7ECabU5WJhEWNqkquZPBApwuNMFARwkYBGHhFR2jcQcvG9E2DxpidL1BBCrSJiAjGx1",
  "key14": "4qhYxyHJqdhQesM9MvHCH4xQ1MX7PEy7VUZa15oQWWxk5JH5MW8P7awkJ35aZyZuAjxT83tLp6ZXTGFz9G2Kd2Sp",
  "key15": "4gqbv4qSdhmAcyLYKi33sBxJfrPrhtf5pX9EZ4vg5Ga5Xd8Er74KXwRwC6dRRw9YNaXn1DNSWwWuoSMtWgrV3cWU",
  "key16": "2a4yTcuPV56UVZqcJitJf69F2fD8gHJWkiVZMpkRuYaSAT3y9RfqBwghRYr73UxAdYcRUqXJrHWGiv2r73CWJcjp",
  "key17": "5eLzdpgxoT4QQ6qiXm5a2LSgLf76aFthqSCTmRkSjVkCZNf3kWXNftJ3w4aFddgQkRLMMm29QeN35HynnumBZMkD",
  "key18": "5gsTi3EzCp46Uk3iMxH8J3uCwv3BGNADPLejageqPnpnAsHUMVAYJ8kG199geWtf4W35SQGogmJEToXywnfxBC4i",
  "key19": "5Us7Lx62xeS75LJvydusdgQKCAyZMhq5X5zAdKPdBbUrZFXy969Be8GgQqMF5HwT7NZEgdHoKJ44opzyuZRLXtwL",
  "key20": "36PD9FNLxcq58MH8vtubSdR3NcpnrP4tSiS4ZsENRxXRrnfHoiPgLeRzswWUrboDKksmmgPkNBKkVtfjwUGnyy34",
  "key21": "37cDeXGvNnhEn2VthKmBNJVpS9KtcgfECrLXdcF2tw9DeWhHWTamFiLzP3u4834tVrBnv7PPiBcotSmJuyzyTCeV",
  "key22": "2ruy6kuvHgs18QnJCEWuNY3iKRxYScY3U42feo85YEG2HU1rZRM5q1mZ3t7hE1aNALAZqoP7XHbfBQaafzjUrDE4",
  "key23": "5Cjax2oSbnrJrKY8GVh9rAWRC9qkKBZnu2HQ5VEtbxnieVAarVdpqfw7r4ww4dsKggq696X4h6gcdQFSmt359jgX",
  "key24": "5Lygpv3AeeyTc7ASqDGJTSGhEMxd67tpebP9Rin91Bopn7w5cFQDuHdoKmQ731bJV7nJYp6UcA7DPZgyuaSb16hB",
  "key25": "39aEpKJRrtQqNGfJYsx7CBULcZJDVMRpMCQQ5WMCZeztPyVPc3Udhw4VCrcVR5EiTQVvB3Ln44fP9p5pnS8Lu1tC",
  "key26": "4fj7SVJ7V5ffCTjKAdACte8XbgYRbRVtAGSm4QuF9RZtuHZJzyp9mU8wAUvJhjqAYi4oQ1AQvG5BXf5diBt3yAqW",
  "key27": "438AnHNSRpEgwwvfwGVPmwSdPuWrACSVFKVcVXb4zLCVbzhYkdYA3DoxXbqYQLAn763ms46bECgtADB5Cu5k16eg",
  "key28": "373hyvVgpBCrMX9Aky8tR5FwSPQDEszhszn168Pv9nj6jNC3gyEWQ38WFrtxvzqtTHdf6xwQVXC8AEAjxWEXefiV",
  "key29": "4MZeiM6vrj6pSL4qKFpaej7XfjK8X5pHpMjX51vWAzqLdydpiru41vpnnTLE6P8DxtShCBTBZdSoPaEm8VmJcSNg",
  "key30": "2c9KZNGCckqBwKeV2xskhc4ymDd1uBTAHkwP5GVWU5B1U9s63j8B6FZvD6HeP3ukGTUVBjpnyaPujwKPyfyUMEPQ",
  "key31": "43rxEvHtjQD166myspYSbE5w483dpPx18GHKrQ5WHhkiUVqhjW3noJHX7ub9TC3mtFB9ZGByDrA9sXD5b3nujVmM"
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
