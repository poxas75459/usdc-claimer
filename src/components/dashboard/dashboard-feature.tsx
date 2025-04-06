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
    "3K4tDvZ4s8dYrex2PirMtV1ACriq9rhSR6sEESiLHqys5NtYPP3aS2KaMGnNRfTtALFhVosuZcYu3DC4RxqZ7xhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HhHytqmf5z8dGa1igjbQk9LBzFwGMkiRPG6udU3qZ8jAtPTZrQhbGvkPtWEAF1wvQ12AR2TYWoUm9on4ejBrRfV",
  "key1": "4gGDvv6LZj8PHbNSVYzPh3DdbWi4yFxTV7z5b2N8sVaJfDZ2cdfH6uUcVT1R8oSgE3gLmS1Np2zyCjCggd6ZFaRQ",
  "key2": "4KpEiMpCqbVJVQH3piq1NtFjSpRofqxPPu6yX54VwcXBUBUie62cWttRGHbxdBYGgPWFq7jCtqxZEUumFhN9e7WJ",
  "key3": "LNtMxycP6BuMp74DwiR5f2xbJCv4rHUNhhtScQaeHsLSi64zMFdw1apPYMYroo2EXRESnPVCgw26wXrxZMCSNHn",
  "key4": "4DkWWfhVVztvRKfSE9qYvGTfvfpEdtxZtXgtNuFzjiNjRWvkns9xznHccPbfFDuamXPdAvsYuKiRLeKBxsM4hhi",
  "key5": "4W7DDMuUndXzz9AQf3N6yarwUBs1j1tvnzyjSiG75cKrfN4i3GQPSe9ENQBv2Eiu7RNKak2rfv8hcjiqd1uSHyBs",
  "key6": "3sgmmW9NE7my7b1G8hgLthuL34ayuWrninhtEpyqWBC1c5YkEA2xcvpcSKWFUeWu3umhKBCmjE6YEsWuSMeeV56h",
  "key7": "5Sbv2i5J5jeJEzQ1FfjAqF1dEoUTjmBBHhyHASGRshEKKnP9QwxfCXoyKKNLxZ2Hb2CVZ6pnerdtzpp3HfT3nTHe",
  "key8": "2HzC3Tqz4KtKEixUnWBKXxhe4SeZHR37v1GzdhaCAocjDvnbYEfRERFyXMf7XPhfrgwGTDVF69QPCUwy49BmS9br",
  "key9": "3YGDJuiFxNrMw3ePfjY1i9Zjkr1hrKKjyhhPgEEDmqgKr1bnMVWn7N6XfZuC8MTUY7Grr7mbAwovDWBDRmKMaBw4",
  "key10": "JE6D1za2u4B95k1WWNknSJ7shSbL1VsvPtMFmTjKw9H2drszdtTKgajJbGgaUYv8Z1f7q8SWRvN2gkrvPnQE4Vb",
  "key11": "3yA9Z2ytCBP3cruTuH6jGiBUZGF4jwZo4AyFPmZWggVvsE4fwYi4TtYgQKJMxdcRWLrmumE1UEDvCNbwcwELqr9W",
  "key12": "5KUcGatYktzppJMw9mJtAKrSjFxrgChc99Up8PA9mRo7JDmnVubzkVgHwJAj7sATnvahm5kAZnWkeV4cMCAp6rQL",
  "key13": "5VFMPsrnzhE7J4N4X1NGaSpZYmLoRtP8BKiv7FskAXGuMaGwVA33M4oDeiWTJ9PXFuaoYGWe6xtdUJDpmWiGnCKL",
  "key14": "3UJD5UpRrxo4rV4mPgWvXbZuZEofMNEL3YxzzJxHPPUqh5WN1fy7pN37XcTvwYJtaHqKHbo3vjinA5QktmJDsPP5",
  "key15": "4Wv5jPxF4RYYdGiMCswPrgBKb7JbSXDntmEaaR3GrMR49jTte238cicFSd6VWANzRHuznCtVjQ4A6SNH7Qnkq8D8",
  "key16": "4NzwyPw7FgC1BTCoruWi9v1TTy8VzBHtb6oc328ufVyCEj7bZ3f1rPVHx9nJDm2uiLeE2cSeC88nFaVPJXwQwA8u",
  "key17": "XgfZaoW3nFDfBy8xYnFgrwRRYNajK8JwjsBJikzBB63BtGRMPbccFuTfWpysPSY5QFFCBgnq8DQ7kjFC38VKU4n",
  "key18": "3ew44xgretGqQCdchyaneoeRQkNac9n9S7ZsaqFKbCBqJ4oNeGRL3HjPYEJZ2Ut2R7YqzgjB75ZSwq6AV1oHu9GY",
  "key19": "51Tk37fExkeVi4U4584A6auRvztDDfF6A3JDKSsCEXUedbxzT8fqhaPTMC36kAjpkkksem5EzTposK9nXJZqhCt1",
  "key20": "43BWAwroxBhAj6BpjdX34135Snyv76QLUxm5viVXhxD36PXjZAS1xE5paeEDZPXVgnac4FG5WuNhZaAeW9waUkKp",
  "key21": "2FUuWbQBJdCdRnPi3FVaiRZiuywPf3rsvvksmxzXZt8joDHa8Di3gcyrkZpyRGrNgoUFVDy5hSR8Dvzs1SZwpsTD",
  "key22": "4vCmuwg4HjoJ1xVJCie6LTVkMsL9dyMG8tyEXGoSmFiUAA3fC7LfLqRJd1mNTz8GY58SZDDX3g4L7JFGAQZBRjVV",
  "key23": "4ovQCrw4zCmtdtyK2y9uoYh64qA7eqT7gDpUhUnsVFhyBo9aUaEsYbtpezGnuZXxifiaCem1Jb7czho9B8C8sfGw",
  "key24": "3hfghxApKk85oPF2sxFB2W1399vsSH9QLMv8WqDVafRiMAL6H7c8uYTF1AvWyEH6D38FDFXuJdJpoUd4cxJQuRoF",
  "key25": "2bUP9kz4JYuAZsGWTxNZh7WyBLvYtKUj4KEtWLe3VS6PSYCj6ESkqxtTxqsdL7MgyKC5hwDCqp9Xjf2i5iTaaeNk",
  "key26": "2quTtiShiRyBYJeY5NNm66iJCgMqn3L19KjsdrK2nHUFjMMaNFNqZ2NgKCzURXpUiZf9PKFuhHbqzEmXtxMhWKmr",
  "key27": "2bdQXTYZApMehUJFRD2MjzqJfWQfV2tH6G3dTQwBQ6KcXwjWjZsw6p9aGi1N1sv2WPswqSffTyFKVQ7x2vKgVfvt",
  "key28": "5H9ubwKtX21UmLv8rQDtn1sMpQE2MmcVWncymKuwYCBjT1yo5jW85Y2t8mTjyX81deHtZqKG8VrKtDGtMBbEnzcH",
  "key29": "4q7NT4WuEAciBFM9XnMheJn9JhJamq7fzcv5HYuZgWPXJKLfbsgYWYd2voVi78nW6De2HMjd27pcJLbNhJSamNgT",
  "key30": "4XDfWFmvwYJXNinWPTmKFqvw3KaMS9KQRR1NysW8WsjWE9qxtBGKcoo2ESdNZ8HMcD6htAicjchRf891BtDNBfM5",
  "key31": "31hKpcDamN3PyC1L85ViuTpur1ayUm5ihkUmaGL36sHpLjJp8ug3L6Jmaei8TBJUQWfUkuyX2L3S5vbckVpySoN1",
  "key32": "5ZeogUfqtC1wK1HF9pqHjSay3bJHgZKRwQ2oJ4J5PWXrYSsUHd9pEqHwJNdAbDFE45RPSiPDQKNDsvU2ixsJ1fgw",
  "key33": "4aHvfJ7nwCqHdfvUsP8G2DxftLuU2wNSDnC82emYHoMSgoZE33y94NyFy8vCCzcjFBRradCpKA3CFqymfh6k9d2w",
  "key34": "S6qy6NyDjBYsgu26UoZNCmgDaHjEm14vbLMGbjBdqi4Xvs1mhdVBoRpJWcyvovGhhrUrFowaoaEAbXeJq1Pv98f",
  "key35": "49AfKZ6pdidbhAJfzo9KwLzen9ak8p9XHNahKcoRFpJcTDVEKA7ZgF1qjkLqk85KGCwKxZGEbhEwN11wk6hGrsAQ",
  "key36": "3E9cuMCak5QjUMM7o2tdeJUU1EmSTJFY6pdzLsssbzJVzxgv52fia3sbjcZAzqPFnhR7iJ9cbxs6qWsEJ1wKw5u1",
  "key37": "55jQr4N7mRQ7fB1Y1JckduMmzP1w2SeJ5UBHLA7pqtu1J3esT1JX9yoYV5XoY4xTzxyhSqPR16DcsPy3hFTVTCtE",
  "key38": "5tthENjPz22TyedF6oZDLN7Q2oS5frk8qSokkRmCW5K62rcbEyhgNet1K3C6UmfWdz8xFyjcmPfqdWLb8QR5Emsq",
  "key39": "3j4s2uSzNJDScBNchBEo7okwDgEgDh7Dn8J7N8zP7UJ68bhBby5L5uFbdEcrCivFjjMhYjoj8QP3HmUewAx1Vxhs"
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
