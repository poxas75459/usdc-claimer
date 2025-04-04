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
    "5YVhpNh6GHBt4Y8ErgXaVT7HJ72wrdKY1C2wxMwowSQy4fbBuCu5uYPQkDnShxpmtvQGmnZcKmudiaxktezYvLFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1GvKFRhX7bNY3UfXz865qTVUw58v3dKWjTPjsZ4oS3w1KD7ztzfyxiooX9LaqJL9fFvTZvWp73RJhbuULE4LmT",
  "key1": "32gUG1btHkhd2UCNPf14yN8YQFu6E8HjutNcRRHXFbE81TehkjKMGqpkbnNkW4TTxaDtzEq9w42n2ukvD1PHsfC6",
  "key2": "62xqVHv1Cgqa9dozP9Jvr6g1B4T7jjHWimnkNNdzkQwqp8hj7qzKUS32JdYq6yn6TGirfhApX8CUgVRtnR73u7fk",
  "key3": "5ef12SjmHKUJs5iLawMCFUu13STUhR6LSt8dz8LaSpBZ11HFofWkSbnw8gfVdAT1gXg3NTpdrpB5sRg2QmdZ1XX3",
  "key4": "5EUrUNZ2mtyGr1VbF2GP6RoNMaBE3URy2uVKhjaHSuoJRaFXdNJGqbAAv2XEzwM3JxCUReN4fqW5J8PzmquokHtn",
  "key5": "5qvThMJrQohpBgPXEJxZEaANcggEu1qU5gGTzGTe5mBUxngPtxDhrdDEsxdUyok4E2BQnsYxQa29r2mrkZLfgaax",
  "key6": "3RX2bdaZ4F5LcNL1FDorWs2L87KbcLTbAa8PRLdHzYLi3Hcf25tKkT9k74PopNGnZeLUWXDcHn4Bb3PvkLi9spyo",
  "key7": "2zvjUPMLEF2C1EPfisZotVsBnif3QKy4cG2X2rp5159WRfQrWX85mrh9fHVJXeihWockFCTXCdR9ropJsiFo3C37",
  "key8": "21V4set4zReg6AcQ1Mx9o726EWGP4eSqyLEisNpogSXWwZumThyW8CJbkDxG7WFJuKUf8HmuNKDCcW9raUAj1z1E",
  "key9": "2aXWrVPAJG8Xq6W3jxmVNCNQPYVdJvPN2Fnqu3moGetLUXpnSzwU8yhBDBEWY1JnTAgEEiYgKyFFKr16GWTpZTrk",
  "key10": "tpFmXa1Yn9atCEcJuEixFiAiMikgDRHGXKVgqptVWsXDG6Scv6rpkXM7CVfcdXVfiSUcoKdF5dGgKWxyuM1tiHK",
  "key11": "47rDvHw3aWSEAbu6QaUvcMuGqdEcJL6VrrShxTMYtRRjNYszfBAG5xGdK4xkB6fttcz7PPxpQaxRcdcqand528MW",
  "key12": "2eU23y5GnToF5zVGpcirxNdyhqB84wZXhYV6zaERwFSXTfpyS4zBqG1L74rPxJPKhxjr4xAJgt73xuQy6wSwXrrb",
  "key13": "5Grfz8w4UTADgmsqKnmnG8dHiRfwUVn4Wnz4GkiFuUNAbn2xhqzpQsRiqKr1d5WEcvkPYYR3xXn73eTvcrG5aJJb",
  "key14": "3JsLnJzATVuVUQaeYpYHhaxrQXTwS9afYeihqL3rD1A4sLbpyH1KTJB9DNpkHzrvE4XeoHshenvgfTLS4r741E6q",
  "key15": "4a6RoJKG4y4TfLkxNoDauXXK1fU12HkdFhchE97uD6Q7dDMh7xzkkBdSwnrk72633rfV13Q7qMbRqV5jEj5jZKsM",
  "key16": "5EUgYCYsM9PyGg55WUghCGDACkVs9Tf1HpXqEqLNC7m6nzvogMJARXELWJyKrZ4nqVg67TwtM5a4deoiqHi4gVwY",
  "key17": "61iVf93RsfiEVj7XcUrdQ3NxNYfkBP9SomfCAG9qFiQQJBKTa2bT3rWdbRXgAipZFMbxkYDrbp5MGFNQx4safk5Y",
  "key18": "2RAiHqWnkHt65qppdiNgKeaqMcVpW3hTxWQ2EU2V8fRrCpCW7vfqauac4AzAv24EKSyL73uHm5tpsyiYZo68Qsbu",
  "key19": "3AXQstAj1Gk2BBAkQqeHxGqDqvvVdC4xbF4iixaarBD7GJzTaJMJ4WNiThYrYhMaPeoPUgxCvrubVZUXNBKorbVs",
  "key20": "2MzGS4CG4KRU92TdVZKGnxyUZcptP3zJU39VyPoaaUkpLdSC3tF1Gv17TcmXGhgjzbGBpCUKmsQfxqcadnUkaUPZ",
  "key21": "4uH8rz1ASaqdEvqVao2mcdx5JtEmeZCPfGGtUKDMgmL8WeE5dwgppMKF4ZzY6q3B7uZ8J5FbHymE93u9bEYrAmsu",
  "key22": "4B9wgVv41AJUSFGbnf2n9rs8g7JtHhFddiVvzdtNBycJBQyPdQEPaCqeSQ4FGmc9dgusSG3gwkbPW3Z8kM5eWRZy",
  "key23": "3LuiwxXv5DPw72dmSZB4gTEn726TEmpZWUENgpapbHMPi9VWNhmeqEH1kAKB6kB4LZL7NdrAjytYE851aEHmTXRF",
  "key24": "37VzdYqgyK6ykWERL6UpChsdPy1Jom31yaGrhwdrHaGqpR9YLiaUdPWC6JSyjchUcGkJ99VGXJ5CQQGhxPaUZLxH",
  "key25": "2kANU9FC1e2bScYqKK3SEPK8Fc8M9ASyrwmkPS1owuptZodbJuqueLxRD5GgJUynbHBzRC5CGHQRTSSFFKNYczs8",
  "key26": "3pHGH1AFvFoboo9oEyBAdbftJk5hwbb55h63DY5mZnHFsmfE9vEfgKSqx4sskMy2eXXgTxhUUCapMcBhJrePz5TS",
  "key27": "2Tdjoa8JnhUXD4tfc13ejCQhvPNo1RvQCuZ9347ExKbkBSrQnCio66CXuTQqXRFV2U4jkyvMjoABSRtM9vLEuGLh",
  "key28": "wRz2o236XmMvCiPodR5h4Fx698W1VoDusghPuqVJokTDzWbQvGhVDb3ZHAdcbVdnvAyLjeDahhqobaFkyCFmhvD",
  "key29": "2nX78NAyNbkmwQcv27fs1vKmRdrzjXX7skaq1uqcbjATo2caFNYMDwJN9m6JvqknhZ4JiosR6YucNGd2PM5vbSXK",
  "key30": "ZeinQqzzpqAt4RSThRjhobP3vFdGT9vJAPrf9QHLgmg9xswXQzdkqzfkmqe2poqy6XQgHXTJWqaXi2fR6j7N278",
  "key31": "5RaP2HeECmoMCKwLzCgPNTr4qWzKRyygjjFVxQ14BsQe8okxwEgN6aEKfUaCbLLSqNfpjtdceHZ19c5jG3pBq9gM",
  "key32": "5LF9YcwaRghZhRkkVagvnqZyPH36UGDXhHKJ5njoBUBLbykRdsuk53QcEXb7czz7VoMkMRuLuE1NE7uesjBMBgHH"
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
