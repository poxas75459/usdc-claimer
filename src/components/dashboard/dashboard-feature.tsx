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
    "xs1aBhD2PiT52jiDodkFrAZtRFh9YY7u55UWhF7i5BFqSRXiQ1mScZmQfJvAMJ4oonc9PY31Ki7Bcy1Q5B17i4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJ8Dw4CW42cyL49nAeAgy3tRKgJoRHMjtJnpE7gqJ7vnpLH6brP46jivUFyfkRiKnqdXbSCp8sEzedZ53VJLbYj",
  "key1": "SMTeFcYMbHvbFfWNRqzFDtzM1tv18nf7v7txrFYpWrAmQAQdm2a3CDG7t63kz5adP843VdtrLwEBBM2MoFc93se",
  "key2": "4rABB4pn8zaQrn8mnvyLD1buKDUgcDrJY3Fz4AkfrQ55qHX5tUkRWEdbEiU4bR4ibaqtXxCNgscqm5fQsHH9uoR8",
  "key3": "3uyYEMwz8dh7jEWp8LfHqwXxcP4qVcC6YdSmk2SkA7y5XFXyezTq3uutYQtrWbzJqyFSgvMNkUXjmcWY75nDa6r9",
  "key4": "2yVQr19h3B6DEZJSCvgps7pGjBZ1sW2bd2H9B9eUYU6NLnnQ14YWfciq3TmSXH2oDZfCjczzv4WoJPWeRatPcrXU",
  "key5": "2R8WPdD8iA25cYtfqaxrfLVLFLr5fkXmGCnPP35gKg29CjvVumV9TPe53KvNJvar6rqKeiN1sQ9sG7tuSHG1258a",
  "key6": "rXzdL3jtZFM28YdNUrMbxsgUD6MN6oPEqbCwUeo6N8oXF8skryC8ZC8d34PikurCuGVAk5zvfbJXzmLvyY6w2Wf",
  "key7": "aZ5qukpbmyu3mmj9ATsdupeGghKqvYnDFHoumTJRwfcYaAL3cxytK2Re7ywreWGGfCDrcFowupsX7dWCm5m7BxD",
  "key8": "4B6d3NusPejY2qfm2oyJufTFQpdtJW5qAEBdApm4kRnm8PVGo1yTM84caozLLembE6bfBQ5y3CBCjBLkb8U4vfm5",
  "key9": "4CZHhjFGVn7JwAjWfkjvekLcmfisnywCB9Aa65TNHCjVKHMYtS8XVFER3yRVx3cbHLqtBCPce4k2y5uhkQnJGXKJ",
  "key10": "62zHAkiWB1TeQwSkMASwC63vsyRpXE3n7Bswg4tSkv4qP4FwgsLW8B8v3B1p3MXQAnwbjZ5kavkBGonWwa9eAC48",
  "key11": "5LrrM8fw6heR99xGiyEwTj5bXkegM3KbduEj8cwtqWnyCJVvPuTj9m1cqvaduu8ajKY1F54kotqC7JYBpVd8kYqr",
  "key12": "qGU59PvP8ThGLmEXSvHCx7BwpBJBjM1rWfaRiuEsHFzr1Rea3gTtqSseM8z2m9HRYHqYMubDLMKVudxPvZtc1aR",
  "key13": "4k5BUKTPC7UjeUMfYVQ5eYdtTaJ44xXnXwsRTa64KDEZT2oPpwQffET7zrThnyLHs8So3DpnL7zAennV8Z3KqbVD",
  "key14": "93zkvhKHBwsgCwjtZpZUfBVgLjiSRsqdqq4YPpsAMaFkmTkkEzUZA3zVC8D3fo35yLvEyTYDYZamfuqWVyE2yr3",
  "key15": "5145L7FWnpZx5qDK9DtcxYSJSLbzoXymDhBGRJktoXLci7YHNtXj8zcY2tDg3uLqN4T62Pba3bwzpwexasXTC7Yp",
  "key16": "ArbVfWQAQqtPpxkDoUZUtsjjq3DPKjjSXPaXjzzQKgHqz4BVTNWncJFfH53WfKeckoxrquHbiRskhzBuWzPHbAr",
  "key17": "58S3VhjatYtASNt3ZaQ8AtfPaqVBqVa8Lx9qxrmCpd6HvyY6q6uKntXtfNKjTBamofGXMH9ryRwR4fj2REeVgS4D",
  "key18": "aDRhuYxNmPtt5pmfj2jYCwLnBfvA2xBFg9D7dvjug9iFTssi4U4U5PWMm6KY7JpB9zj1PzvhuQzohAivJCyEtxz",
  "key19": "2ACCTK7Z6jHKajsMKLrKTQVHAvZ3Eo3VTouBzHMEjcR2ijJtnpoBjgUaCM3NnznmCkmCCpNKzUZb8pR9Y9dDyybv",
  "key20": "48do7sCPfwE6NPpEAyQXSMvVv2wkrzVMrdiENh1TNNbqrjdRhEUqaq3D1ErZSK9FL6uU6VzHaiYckvd5a8Qintxv",
  "key21": "iqczP6jabdFZ9sc1SFGiEjtBaLfavWv3QDT7SffBUbuZsr4gCyXg7HfuD7PRtBevKKVZy2s8hsHSxvLcw94Bj7s",
  "key22": "LjMFHWcFgraajHB9WF8JXCApLcNPvcRMjVhYMGW29w1SXwryTxcit2j9ezu8rZTYBjbCSkkwtM8XqaA84dQpekm",
  "key23": "3xtKJdVgAvt3ey5kiMJsK5kh93VmCpSMQhnH4G8ENDbVFB4mdEGRnT5p5t9W4s61UtqVSHuUB5bRe7W5vkGg2FuM",
  "key24": "2pq7B5YRA3zcZ8yGkTZuG8jFJgunRQfxK9dZFdR1JSosyou9L5HoQjFa3v3PjqQm374TzxCzEw5LZ2KfTqacncjw",
  "key25": "2b8tv6dF9QZi3KQdC7bWwo2XDiCfF5z6oCQ8WvzvUxySpLDKfpRdVQ9rX2JvB32q4tsV7RxAM7nJRUjzZMZRo9sZ",
  "key26": "i7uQk9AhG6raYyRjYsev49pR8X4QDCHZ38GkUKhk9GQSeAU2QPhD2eaxjrGkCDsE6Xut5FajvpRy7V2fLxAFQgE",
  "key27": "4GVmvgSZPLKUcEYAX8NepZ8AGmvf56kgJThkpmCUYcpfDoyxGQx3CP8UbFfvbk9xbMewakVproYaeu8jpt19Bexa",
  "key28": "39VPjFUyBdZ2HV1kYeAPSedjjVp2FPxzXoiwtMKd6mYn2DEbQ4iRwh64SHByJcYg17PRuMewvTtY3eWbg4baXkgF",
  "key29": "4Cze71cHWLNQdMpmEgggGX6j3oY5RK65g3FmFDWHLbMfcRNzCrycZVcauPF6g4WHbmLxtKEJajRnFnUvmDNhVF4x",
  "key30": "2YF7FgfheRTHS5vL2W1PrzJZ9NJAreqR6rjEbjg35mwGEZVgcMg63BiYhUTKiAv8xTbAtJDL8affXkdPWftgWGCr",
  "key31": "5F7jxCJuTVsRvjvjWxZq3odBmPfR2ZxnnU58PLT2LwbQKg7NMaBsEKqqCEvVMESMCbczyrYJeMuMmWnJ3JkUNFa2",
  "key32": "2uJ4Naq4JvdpEjM62DYEZasw14RWQapVcBuDQ44EECruZsFuT6xZ2kjpbmkeCXbhriMv7GX4NFU5BZ9CqDYBq61r",
  "key33": "4McvFLyor9phK7rDouZXNPBqNHhSZwunC9FZRpRQ7cvYMW8mE8Z6QvSqC7K6bi4vUV2tqEM4PumxPAb9L7uuV28b",
  "key34": "3pdtv1rwGYY6zsUfTPSvgfAY1Xsq2nNiukW74GrXci9aEQMzSsmFwMbSqc2WfsPFbkagk2X49Jvny5J8skVYrJow",
  "key35": "5iG1CpreWza9fPMgdFFvVHnYUkAarZvm3g7EgsHGSu98idVYjujTrrK36z6DQvo7sfbRMH9yG2rbDrbyRUhaZMMw",
  "key36": "2BTqCwLVR2mUbrfwyBadrT69WyR1mB4VebdVyirKKHjUmjKDYujbNbw1SMrWTL42MrUaaMm5ne2G8hTtjbotNDwv",
  "key37": "4NdXXhvdhGucnCQ69vuGX9jTLYLvkraQQUqvrZFAebwopx6PSHNeUzM7Z68D7ukM52GXDcJq5JbMaLZWwhJBDMFD",
  "key38": "QtTxSVeE5pLfBuj97RHG3SgWyioLvDZPDNtqz5b3Lh1BHw43TuKJf7GMy4HDVEceqsamiynorFLNi5VA3zU6JSV",
  "key39": "4jSm6MbRGpD75w4JPkALZyzPvFf4k2xAqQkw4ro1Ru6EpWNTtWUAokwusTbX8TiF7LETfCZTnhHxzhVdD6fhtH2q",
  "key40": "5v8cVXfS9wgMVbMLKTnemAUULDEbiyDbqZVzz1YCE4D8EWsVSTp1GXw1c2bAfa2zMYFZY8BT6W79FEFF3ySjasVW",
  "key41": "4mXSjtLy6q6Rb6nHoHdUuZHosBLR67WsZK7PD5w14TyEseMbg3wjvNFXBCENpNC7BhJLfqBqVfYRmkSwPf4xQHFX",
  "key42": "5tzhbrWSymSSVSDah2KMHVZv9JK7yugfZQBQEu1mYjCd9xEr8gjZ51vR7S5JkYs9FgYe6yexuo7u1KMhsVW4ZrmB"
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
