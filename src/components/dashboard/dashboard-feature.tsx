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
    "b5x4NFWHuXaJURTa6dFPMHPXjhke8qBcGV3jbMhvhsdqxxmVzNaCNxXeQX1T1fzFuPJfjCPtcNRNJVx1rkGexEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywpBzBvbm5QXtvB24oSRKq6wGq9E52UMRbJgdtyRZYLgS77b3tsrcvtuYWTisQSSN42dpmW5eSre7uEKD78sW1f",
  "key1": "4SLrEtgPm2iU1yNVVBJgcNeFvBLTMeWxTwFejaH8RMbYCfV9JEf1QB3unk5ZDpB1Jdd5QkoYhFpVvoXpfM7AQbkZ",
  "key2": "3CQHJfCRJLowMv6YVcK2n1CL4XFSk86CGMuHBvxF8aYEB6bQdEJ7MVpVgTTLkHzi9hyYFnviwDmfAGVRPGZALr1k",
  "key3": "387hApCYJFie8fJVEjToXBqZHVY6AQ1p4Mm1J5zz8Rf3XNP7ttGnR9tLztwnSEzwWMdM8aRtx5bj7XW4q5jWs87y",
  "key4": "3UKvPaDcypXJJ9xTj4Wx9LrBji29NLUmSLLapRdgN4xfjAKVvdUhKds3kmHL1rYpL7hifgT3bx4zjphHqQN6ewmR",
  "key5": "3WXwb2UUT7zeAtXXkE1pnhho4vpi6dseHWnEnnWBNbQxTacrkbHqiczwgZEqt5MFAuBMcj8UdWkRwR5aiH4yKxBo",
  "key6": "41p491XrXUy5n1QvD7btYy5g6ZPsXFnefygDp3YNXw7GkpQSXTZjyCux7PwVG53vPUTzAKPsWaBszBC8QHrEg6tM",
  "key7": "1SFi4GzYfi5XP3uibj9BgidevX45TxNL8G23dAjeGEsrcBSsRpMzHX16HiZfzqzTMPdbjciFidrdUF9gmvXgkJy",
  "key8": "86V8fBy3jBXaQYT6TyCJHxH3TFwwiNLa5d5H86e3cxCS9gAzKxfc9NH9Bjc6JVF12y5WBzvjjEiuBbXUBmb4vyG",
  "key9": "4Nw4ffcc7M9Kybf7SjJ63cyKrJEWiKqZaXBDarDUHKEsLEGRR2Don5R9unv4jfxU5toXqyD9PSEzo8vB9eXL8bSq",
  "key10": "249LQjTGL2aXXstyALaDNLMiwwCF62VZNUgxPF11wrRuX3tC8kNboCw4yjnZUwN8qVKGMPhpPM326WxdLRQ4bBWB",
  "key11": "5Yo9ZmX8AiR6n9JzG8ZHD7GimFv7VsQGeE3WVaVp3tB6WAYec1hv1cBcFH4z8fDzH3zfEkxbtTRRmfXr6rsHmxam",
  "key12": "3ccnVXkrgJswFZAs7u5KCpnfmhXKRWNN5eV7u8TF8PJFZCFwqY3RJXVnPBPSmrHWWH2mWT3HqTjY9NqXdSBPxRgw",
  "key13": "4EGByrJ8TKdNXgQmJs2AVitz1mrnj61YFouGkyVGQKBoRohDqZfyzdapDa7Z3SiUQdZUok5SgXd7NgYypawrM4UN",
  "key14": "3Crq8M5TiJfxxCHShYEoAHrR1EtQ8sBEtTXUKpD6mNkzGG5VQZpVxwPgkxjoGf1UqRfbPygVe26b77UKr4hPh5AE",
  "key15": "b3GEnqNTwf5Qz4PFfM3naV99AM9K7t9Br7CMWtjt83GSCAaFkyDt3E7bQP6mYq8j4kuTtYpVH7RhGgrJkGGT22V",
  "key16": "3idW1LSjEfzgFcJ44uc1c2CNBW3nFmr1twCsxb8ZeARmvFuvDP6Mum6z12xAnv4ePzEuZzi83chAAZX6yLktuf1y",
  "key17": "4Ra7HPGwMcAJFUqVQ5Yk1FXhSmUiPaRZiC6jFAQ4noafJc51mGLHi95vrburB51krCRrFNV6Jrf5bF7CEPQZs5uA",
  "key18": "MkigvPP6wpcmf9u3CTBAEXs4o7ofAuwB4SgXiYAPMDG1MVtxKAs5L5nL1mD98kUy1zENM1tYUbNbXADje9CYgWu",
  "key19": "5Cv4eoyuFgwVWmtEUzFgqatCaZCcqtPjHJC6LiV2m3beiHoQZ8CmSoeY4oVZXWkLG5owwBwb79mpgz222A1mmyWx",
  "key20": "545wZUCyevfhDtYyFMwEKPvjJWsBvE7CULXVKnz2e2xq63mdipYLdzHN75TCbrCJudvK1U2yo7yzgZyf1Pv96uMq",
  "key21": "59QJ9YqNokumZuaBv3JNLpK4ieJsgwKr8mpwvwyWHbGvQJEukJq76Xfod85K9wyfwrn8WmW7Mas1L5FUjSwxSiB5",
  "key22": "qdfT5GVLMXZx6AsxYzWTGeKP5pLRNE8x79MtbtmV9Vc5EL4tVS82d3TDFiYK8N4Bjv5Esk5Y29QjZRRK5o7u1Ju",
  "key23": "5bZjLmhhrQ4KGYzunv2M1Tyesvq5cyNjG2R3tfxdNkdV7SF5fzgAV8m5oeCcCe38eYBo91D9omgwdjVMKfzBet5H",
  "key24": "2HXSSNoCMogR2sYfQBHLiphJxcZzgrtNmKha8EtD7wj1fpbmJhy5Eb95ViAMB8e2YVMwT7nX6mSX5CokKhAoRaEa",
  "key25": "2d3QSkEnsxWythtvAEKUYaL4xVaH2gbg4M65pBgz7LWwLY77fzWGJWdG9oJh8Yw9Dfs89wS8yuNEepLE5oiUu5Ep",
  "key26": "ccE2yjzXnH1pRb9fTVZfFPbejupy55PRmCP3NZjZ8kwGddZ5x8SacqCp7ehkaWTEuQvZLBJKkKxVLU1N6VKzBsU",
  "key27": "ipQvsYtBftWuyiHPgHhZxLJbdXgX7PY4eCToYYTWUapqDqtEkumLb68RANDBsWcMzcK6aVAf877ud6gCRPxufjD",
  "key28": "5djpXJWQy2uDL1fYN6v7CstPU7kk3rCwTBhEiG5fjcm1FekSB4mXioJuQ4Lu6jpiWzuj1rvQ4s26C4xfhU4QiWf2",
  "key29": "67BXgHKSGoj8V5dh4mGoYCZthvYL2GSQscVytnhPoNwEVu8G8RsVnKgifzGzTvJNo6F3ZqhT6uiszEkT5LybNtcr",
  "key30": "2DheGhJ2C9ufTuUpx3vUWmTEdYgTqohoTebJ9TfZ2KVy6aqaY6eNBFZR7WJC9fz4PCtr3RifkVZgZUDE3QhtJi8M",
  "key31": "2hgDXBwZnVeSRu8EWgt6Cm1i2QMfehvxByNm3MDz9kWKRjVBoTpA8JjhbDWiZcPz4KeWN1pGE5La18e6HwkTrUze",
  "key32": "3BWmMsX3o44jw5iLjSz9kZdzhGWLcXzG8Q5Cg7CPG7RVgbUmq6uaquBFSN8kUozkxyRggYQwjJL4BQbYgjVQR1v7",
  "key33": "2tHgiQxtGhDZxKrUL6rq7RGMtrGJoGyvB8Lmt8vRUgfs6gb45YnQH5JbDLPBYvaniVSTKZaPsmhcW1HGKjmgyTzQ",
  "key34": "4yFxEedVoLabesodhgqhrBxurax4jyqcZagrhVYwRD61dRYVzmnxe33zm2AP5sHpQnefDhppx1SHw8BQwbsEpn5b",
  "key35": "472oDyDSW4JnX31kCGcjFSxcV8TS2MBUuMLc8NZwwpTyKwGWmFwiWo5TV3iaiygDS23hX37fK6nncpcvkowAsFd8"
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
