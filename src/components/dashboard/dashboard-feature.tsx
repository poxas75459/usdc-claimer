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
    "28RsyW9SFNmp4z68wuBM5Q26zkcq7vpYV1kAcRAdgxsqB8Nvrehad9w1onk18VbmWpkA6XFfKJMrp2rmdBqv99zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMjRfc4rBjzscv1GrMtpkws9eFooW7kDGiSJ7pap8wPUCZjPu3LvAtCQZvQteR4aRZC5yiZzhnKYbaR61CfTLNN",
  "key1": "4mQNzcu693GNPoZ2CnF1wvce6pD8vniWSajeso8M3iJM2R7fRGAycrwHfJiQPxnRBxjnhvostFjdwtTHXSNVUn7L",
  "key2": "NEcrco6uJn6R4mZAxFrfLpTyE2uznyTKcWiNVX6PFrb9CxeW2jyK9jugQpZHHzfqQYSfgrDsxEE4545CsinVh6A",
  "key3": "kopEzp93wq8Vd8X1BkZkdLhHQjFW7YQU2yNyCg9TxfQCn5ut9RbybT3AQFCziTZVT78gAt16EYfaNYiEY2yH2rK",
  "key4": "4RsNqPK9UdC7SY8bb8T1VwsNYC9j54FTs9jdd2YDpt8AYvu8fE3nzf1QLr9JNDgC3uXpBZhUWimqccBPSpPgBcd",
  "key5": "CnKKLtpTyCLyiUTD5ndbi11kvZbxmSRjQvz8ppRAggXzTPgydoWMyAiuHz3Hx3wnuGYh846v261SsAFmnPJfLrN",
  "key6": "4rDNKHW83qwXpqVbzWjfNDDXFY28eGR5xQJcFR5kWWDxc9dGyHGLKGqMDNSQSBqXjr2n2x1Z8JuviMad4Ngdz6Fv",
  "key7": "24WkmHMsarcMPXb3tjD4i5FMyj1siBuStPXwHCdk6a56PF2Zt9zJWYp1fMKQWVVLRU6TwxnTMQMp6HVQHgY8B32U",
  "key8": "5mLLoZgawrFKZwDhCKY31mxbMAtVop2q55RBirYjqCRCsg1YxkcLGUC1qqKQqhSaZFbA3KeRF3yG8gdUsa6K3AjC",
  "key9": "eK9wh6pkuHxd3j9XGuK6irUibEpmaroGULYKr8ycw761BL2mPZjAwcy5AeuhBaFuGXMThTehH8zELSoc55aHpPU",
  "key10": "2dY35d2tFwWEVgrnstrWcWcEWNGcSztpPriMMKkDGBNZm5ajw1c9hCfREuxHetQKMUfCCnNcUrBP1QMzzXPMaMeZ",
  "key11": "3MEG1BXjFBruKKbfVzCs7Y2NHvwRrbqxRA8XuiTi8xFSQWxvDz9Byf9TpMNxG6Djxudw1dxrZwu8xBsa6kqx3FMK",
  "key12": "578sxcKXgboixZHQKBHEZxYJrNnRDgVX9RiT57KsVw1CEW8WPnaKxZrfsGGxSV2LqgsbCsjq2mSA7U2SWbYp9aUn",
  "key13": "5jva7Dx6HzZKjpFA79x1p56QfB1i5VFT7XUvRiDyk6N9yZQxm8FneMCoUdhSiw126aZpDcADNUteBoNYQcmvZKF8",
  "key14": "65X62q8wrWbPPHb7oCJAcWCxLjdawECQnZTt7UW4y7VmgsHjQHxuitZXqxAYuF23zDT6W5z31hw2T9z6BxafNHso",
  "key15": "4AC24RM1XoNjso2sRK6WjqmCnoyt9yTQnhhvxA7DnQSA4pSmmAVajcaZkVNR3YfEExJczegpkDrY5HuzaiA3TDrc",
  "key16": "3mwkoXjUMrfFkKEn1va7qZ9J9Vd1g2y8Rx3NufxJ1UvDiaSKXurqKoawWBvnt7SakjitcnZvt3iMwHawdRHWqC9A",
  "key17": "3jnMbj7VNKPfCkPT6xvoj7NkPZh3fBDUK6DCEu1ZBC1eLAfYLRjwr3NqN6Cg7xVM5Pt4TPTeHj82QLYBcfUGHf1g",
  "key18": "61YWVetm4BCqjXMG1TTR8MdLdAwxwHSjC9CAXbLN4ec8YkXgsJghRXwavcQoRWqamarjVykUDfzavZbZuxYs7tLn",
  "key19": "4RKXaJLyT6FdCJ7CS9fp68C77AymiRYDfobxu38F4zpAUj5TMsi3bWnbGktqvb2TfsdMibjZVBWwPQZZFxuUaooo",
  "key20": "4gv4Qe41VgJsiTQdvXyNGpLVYc9XwBYFSfJP2uSsBVZHnhHWpiNdAT4XLSNFthUgodbLfSod3c1N75AAp1Bga4EW",
  "key21": "3StYyDHCZgu5pnN7RRisBfC67ZFcrmfbWEyhkk4j68kFxQHGCK1QQ4uoA2NMf64NCmM17qNKUnj3oieCTww2g44y",
  "key22": "58gPmqeYX7waLjDbZnimnzSdmcq6EVEy9z76nXKRhkRGMhKVNrjXD9gqyoWkFrUQGUetsC7bEcc4fVc3y1LqH47g",
  "key23": "3uiz5FpEwyf3bgL9JJzJvbcrgEYps5nc94NtKQNdxjbpdqX5eGFKkecauLC3vyNNr6m9F3EwdG43xLdapsujuok6",
  "key24": "B864by3HFo4QViCE8z7TfAwqXhNiGCRPU4YVgtgHYhQHPcbKRypFTiSmeEZz9AjAMj96Fi1fXzwR88HkKdGE9js"
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
