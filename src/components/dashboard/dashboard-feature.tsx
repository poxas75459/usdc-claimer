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
    "bKMb9jeLqe8Wqp6HGNE7zsB2vwMkzAA2nn15oeCWsjTn68oL1Q2eG2JcQpGRLjyKy4Lg11rUpWrRRvMTZWT4Gw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4JN5XgSAcurFkJdhqwt8T9VpUgB5rky7URm22pubheta6XaDufR5dorddPb6udzd92Y378fGUpGWdtkQtkaLJ3",
  "key1": "5ZDYS4P2ZY62GT9yrnkPus6tuiimarn9Hpmtvh7k6knQkScD3AZhdWhwDbURLjLWbCJGfUyVNH4e3DG3eFQsboK5",
  "key2": "5uyKzf8oB7QTr5Q5raYRStkKCZGcs1xkoySu6t9ZqqnD4KBcdq3jBDhzHx3E7RgtvsyaZgi7dHnr2x1uZo5cw6J8",
  "key3": "5C9yB1KBYZUhFCWSt6Z2aZDqzTY5Z1fSk4MUGXrPm7J3ECwCiCSd8Whzmxox2k67wTRsQtFMcird2oXBqzSwwBWs",
  "key4": "2f4Jfsc5dDUrQRRpmp6zA7APRnGyUMVd4sWvi6ucjqbrPfhbQEpEZoPSPtnhP8S1Z7yiE2DncdxaWjj8HWGLgLt1",
  "key5": "527bVnAUCX5qXvNmMfzmurW2gAdFs3GcxBrrar2FBdCc8HDTSFFgz6QEazALaduQwaDCBWwdoCo4ZMmzkS5BgkHU",
  "key6": "9TCQ1dhn4uJnHTwRw9nCRTLWPbcEnqYvcQLC3wRUfitHzeexW6KbKrXpktos38TuYS7yX2eLXFBK3TWYr2tuDsB",
  "key7": "2kGzAuKW59UhDxCBQMPVpmMdiAAyDtXFQTrbepXp9TrnMBjxNz2gZAQQpxbLHMSwufbFc8h3pdWEG4GLKDbZShQ5",
  "key8": "65bYT9iWPPRoccYL4ykpYsr43LwGeTG4n39Hn2yJ6kB3WPXeHmy2QuFPKWwSmcBDnv66Q5uQoBQxdvhmWZbJuUfj",
  "key9": "5pTcrXSbFJn8hLyzjhmcuX94vzTUpiQ8qKc9UNZ1ouePUMEDdMGqrsMQpDzRtkXUtLcBcEE7NTSJhcWrbL9Qi4qd",
  "key10": "5fZjZ9CqFCpCds1F5CPPqBh7K3zSDvHhd1Pex47HVApM4U3fCd4xq2EYGj1mQRdFgLQuxZxREXqzfwJ38TkXNK6S",
  "key11": "5gbzUFqBeB3uyCok4nozQ63y5dCDxzFsmLkfDGFEWC9PzrVJSdwo1GE2vXQWvsoyCd82RtKhNKm2SqVL8ugPTpoK",
  "key12": "66ma3MQPpMTgxPtsiqBof8YXu7yQQeyBvgh9gTP7TXvwtuo93B6AcPrx7r9N4FM8w7jZqziQEdGoWa3rJLU7ib74",
  "key13": "5oDYqyskZZub3JERSoZtW7MVsSwEQvH34pj9ySy1s4XGVxmPvjGH9UcEzmutkSndxpKKYyutVdujhHzLm2RhvKwM",
  "key14": "2kse9Xdbo3tmKZ3CMvQn6ASBGGqbGMfvnKriDESm4ZEdvLSQv1xaLaBUH3NUr9vmkUUugVzU3veedye8tdEuBVfA",
  "key15": "61ncpJ26YdkYQbvC1VdLJS3mojaxcNk6yBSFaYsgVJfLsN54k5QKANBCcr9kfDppmKHpo6YSXihtLbdsY67fWfRw",
  "key16": "43d2VhRyLad66ZaGWoJFVKd8y6p24hDJptKFWeqdZzK7ZuW2xGWHGrVVf72A2Jn8PXs4egS47gBbFBD1TYECJHns",
  "key17": "5n9F29uayYdSEmozBVPUvFhYFkrp3TsZGYuymEeyW3dMaTehbbzq4tJ8cKkQhM8irTXNuLhDQ8D4CpdCvwFXjYrQ",
  "key18": "5EQofW7iAfm9zXioFT5TGisjjqWVNrpBAy3S23Wio8wJwYKQQzuGuHuHPhfXhzxaeHdPaam6SVmmxMPh6Xzez8MV",
  "key19": "4mnEizo9mKeRhcQp4xRThpAADrwUV1mdeTbyrdpxALf8nQeddaxSckfhVYZyPKiewrsgwgisEvegw9qycboVUCtX",
  "key20": "4BZvBXguQC9iVPHP6LxuEjTBHhZCLKesvty3GAd2Z3RVShQyKKeXK5LZs1kA1Luq6NEVaZnjX8nuY9TtgUBp2BZP",
  "key21": "4xq5UUpR3n2njsJ6wdXtYbhusQTERv84EyPC3GSWr9xJJ4rE3PP56CA2xenQqC317aoMtfMxDkYBWTokxMd3tYZY",
  "key22": "4HGJMUa9RzTh7X5xLhHuTQcgNDnhbAoaevgrLkbpHxAnq6VcvRQXDsBrLdkKaD6ymaLff5pEj9ek9TkUydvQd4t",
  "key23": "4seYMBTCxKd2BxB6Hn1q37WEjH4pYYmaZhYWZkam5DqMDugE9vzbqeppsSov78EVap3dnNBLB7S9pMqeFrzcvbLM",
  "key24": "3see9k6iXXR3Tf1xxJ9KMeoiJcsPo8t1SbZAHv8J7uCyzQbXq2g2WMA651qAc2E6DriuQNzBDbaaZsWhEjqNou8M",
  "key25": "3sioM3oZuEYCsm1DMPpaEg4YfiYKtHREz758kQUPddBM38Kav7BAd2Pr67hQTdztRTSCVQ46peGopksvAdyGAoMm",
  "key26": "2mv1btetgwxmfmFZhyjt1vrQePFs924sP5BnmRcCeSZCgXXTZTsxFMdWzACs5kJnBq7vtqPAmWuJP6eCaTowGWRt",
  "key27": "M1TozdGhxKjNskdF6P6G6c6VM4DF8cP3wx3YfcBvT7vS4ZxJzMTANCpPKZbYXmt2o9bd7HYz7EAp2nhMtCWwx6e"
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
