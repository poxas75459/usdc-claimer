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
    "2ZVwwxs9eef7VkY3UJ4i9Wn2QqYv9VU8iHzuREupsk74edj88hy6q7GUSmH9QutmadMgXKhA7AE4wQGTjeGvbQLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAwbxTCAmX59d4UHF1ynnXikXHW83MABszazcfhoMEPRvm6uvEJgDvT7kLRDJDmvwy1TUPu3no1LTDWpG6aK9cU",
  "key1": "26PdZVBdNdA5PneK4SWrPgy3ift8DimfPNd5YcsGwQdXwiMRDhRFnvnSgmGbK1EjyfvvRxgbKuzw7jAZMmHNtdxy",
  "key2": "317TduEVDPYGpKCGE3ahH2YaGZbhMmA1rskp7UAqp4eSSzLkDjdQAC2cQPoS53vLr4QwcebNLgMVoKjUMogKGgfY",
  "key3": "2Lj6zkjEtzCdV6av1S66Cn6uqaeg6i9TvLa1mNTXdKZr5s2cgH6GLBFM8Wm1fbGNmPPV4tZPCQaTn1fNKurTi1wG",
  "key4": "5tJdbXv42C4Mesq99JhCi3jL1o2xWqRpyLCCVo8RD5RdoxQJmUtxrB3sYpDu9Md1no9TVtfPxMUd23KzZnx5cJu6",
  "key5": "3xBGfsZfVwaU8yXqmqUwKh6oW9eqLrsboPbFcEnnfYEbEsU5Z7cGGXgen1j883UECvoC4Lqah1GDYnid2HJiPbB2",
  "key6": "56WTTqaVSVTR236jpLVa9NAK9ypVmrYqhqwp68wcGdzBpUgKkvWxLsJtNcMDoGwZmZAogpogfj5Dx5h6AAUN5evs",
  "key7": "3JWT9xbDVD8Z2mxTdMzXZ84fzxP57Q54QopHkpRvwZ24LYbYWndfJYXrc4VCYgaT5UkhMbxmw4Xs1XbyLedu5WRn",
  "key8": "57iFBRxsmweuwpxaTDvgfMHRkBPKuyKLSdB26bSPSZyXk3rVbqWuwwnTfZhh5rrBq5BnpBn7FNPrJBWhn1xTJVWj",
  "key9": "3s7wzhdwcrFRPY9hTCTtKQ2Q7ZR6SBCJLUP2BDGXLF6V5mCSkJYuR5uCbmtYCHbioEzA9GaXUQakJCqLhv9osm3F",
  "key10": "3zD6FYw1SZCj7kYT1cAtV5AyUVPAXh43JryF5YnUJ17im7Wns59Y6ZB5XbTtjXYzbpNo4RGLY8Vgjf4oEBNkUzSe",
  "key11": "2wh2AY2LEW8CrwjZFoVAJ36i1FJBhKRYzt8qP4TE5Lqho3eGj9y61bS3yCcESNyELNpRkqAGUGfFjPrcoCxSPF9V",
  "key12": "5UtTpGC6DpVnGocqfr7yaKL4obZMiuuFUZ3CGLzt8mwbCxEcg5Th1yXjdG43c8LBjC9DuBndHDTp69QSePudUjem",
  "key13": "26zoPPRqMveq9TJ7V41wnpUYvfgSXDAEfnsC2jiqn8BHjcgpJzg7J3WyaWxz6CbRjLh1AnM4ZZpHiUAeNsE1vuFy",
  "key14": "4u3WtbRyLifZHYqmeNTGAuJQmJFWsKJbWstDDwrrhU9AcQ9t9sTSKXvPHWFkxmzLMHyuEKVkqAofBCnEWWFF8Toa",
  "key15": "FLtQuv7ob6qvTPKvVG2s3s5dUCBqf75WSTSoSdtt5QJqGMNja4kFse5Y4W98HmnXnXPyZt3oq1YEbuEnW1mYXyU",
  "key16": "3wADbW8KCzU24WtPCUfY9SWEtkUxyt52mQNmyiXPFPda16hUA4nMdM4jHEFQeW3VqS9S8Ezj3J9qy9EmUV5qhxkg",
  "key17": "2hi6uddwQj299Lo9yGLioSpzmnLKAqymcc9Cnn657ynacWnEXRC2D4VBpaNANe11HfEs8Nv6g6ERo3ziYWZKVwgw",
  "key18": "58EK16DBLQe1yPvCY989dRkYFMMZvjt5VjRRgwFEkC4NL74HwVJQEpdTsB3bCn4PCBEo9GF8Kntmb9S1eFHJgWdi",
  "key19": "2e4wYrJNNCegsTN98LNqLzLNSoKygNXngPdwK9PScvKk3MGcHJYTDNCzQ4aYWiZJEwZaTHkHDjpnJmLxy46HK7ci",
  "key20": "2eC2N8gNJdaBKs5WXoP6D66XYUjy8hFAjidTnZYsDX8XYWLPqamKobRnLeK22DXpe3BxJRJ2BwEn997H72uAJtC9",
  "key21": "3zgxuFbuus1EjsJD8fGEnZNwKguA258g1M1asCxu4NtdzgCm1r8J2it8F6mheq1aSUWrW6ba17WoAF3yPaYCq52G",
  "key22": "2T9iZN3DpHP8RGX1ibnRnCrZ5fGJiTEVXzYWLwsaUMBaJ7YY2zUxZNEHzn1pX7PkWA7xuDkzyN5uMcv9S1cFrTYu",
  "key23": "623W92FJc363K6H4HtmoaYv6GDKXvs81ahDu9uDbFE1TfwgPSxdGcsSihd4uwYgYty2hbRd6FR5kK17rBGQsGu3V",
  "key24": "8kvQdNN1KpEEPuxw5T869x7x9iwz4oFhtMgGAdUCnDAyhbT7Gb1dSwmDXyQ5ea2u9NRmQdSD8RHQADWn5xXMDcU",
  "key25": "4LHEMEKPLR8QFKoRYeMP3AgzHW2EZQJtGpwuwx3hpoeCo6xQnKSiRnc5rC68R2Rcy3B2c6fQ1VgmtkW8z7b1C8TS",
  "key26": "3cTryHEArvujdQEM5TqYHGm58e9XocvaNFkRk944BhseDNyX4ouXmGsqSAjJKnxwSAAv2dnPhEYDE169qK6x5an6",
  "key27": "5rYv9WdpWKf4HMSwsWBix69usFRsHTvtpTWMgWboF4dT3WaJDA29hGdgR6RygKK5zhFB89Vr2h33M2qkaKdYvsPL",
  "key28": "4cqsU4TaUQNMt7cPzJtsEJGfgu3KyRN5E5cV5RgxNpf6cDpBh9DEvBtFZm2Roxn5XYxtsbDVCCSoEPEL65X1FT1W",
  "key29": "4FAcEwWmeRpnmaeHMbRX5Jwb7G6gCXyvB7hLBRs3ydStWsWkhRhmgbyFDevgTZ2MWmVBMA19uf2CDh2wSwC5AZXb"
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
