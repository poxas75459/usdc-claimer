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
    "3Xc2d4XECcrbNBkxk3zjWKj5PTUY5xAPG7trgubZ6XpmmTZUsMJ34fX3gRU9mYDAJX3syD9kyaV3Pjy7gacJPnxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVzkowupcrQTt6rFVKkaNyRjKSjDvMkFJ5bnApwDMavYB5amVZwTahgKz1dn1cnvNfn6j7RCBTKVnV7UVBKbhvm",
  "key1": "5GT1P1jtuvZ8BQhJqc99SzftpHtRP1PBJnyEuggk4NBHtRKZYgsqrFayVUx7oXsvfw6Fw8iXzdct5ceFxDCrdqm",
  "key2": "5BvfsNiR1fMCWRs2CXohzkMwDwAr7Su9rMKVqjx7eaDwakxaRULp44Hn1mAdiSkudyPHwMzUZAWbjtf324kPfR8M",
  "key3": "639TE2GJEbeGqiFLGAUMkKB3D7iKz7PFUJBYbh3UE2DudsPti253noCBE47ttvJ6cxXULDAniQFpYN2p38Da7sYq",
  "key4": "4Vcw1Q1fUG4MB6X9oT63ACkdRJGYSEYPGHHpDM9BWTqsJ36HVS6h4DSCjA62RACPSf727xZhAtUGN2bM6oJEm8FF",
  "key5": "45kdnPLFBXzsxWHxDtMQ9kAuMoLbcF7nDBGLqDASFWmPWZ6WDPKnstaDEhE4pAHCQNQYBi28F17d7pu7mAyn9M7S",
  "key6": "4rfmjXxXzp9hDBufeQqEhGcKdEdATzDqhqHyDnmiBVcw8N8YzszqnNnqH6NhwJXxoVSzcwufcQk3PSV5cL89xitx",
  "key7": "2LGWEnyzqbKcRgWuzDqxoo6ytz4S9sdk5i3XpcoHzG25GGpgUzvjSkX3FxCQXuJM3aRm1i3a6AzyRmSA5sBfgZma",
  "key8": "2gGKAzcPMqSv5ikLf7ocvDN5mbvxrxUKqAwvm5pqHfXeHaZnfS5ch7cDYJHVjVoCTkkMgt2adek1UQJHWWf5DX4w",
  "key9": "2vvorf64v9qAfhA43vfTRedcLvDuj44xZMtBihQCunNe7i6zwSCgokdxrBpzWPBMBivVJtWBJnGfaYho8kkJCmeQ",
  "key10": "FezF2APJjuWHbq9zBaWEa9JVAt36spD5DCNFo3KnCgDTPs4bh6ndXLeofuw16CU4y7uyqYi7iCKw7oeyuddanH3",
  "key11": "2VmcnSrJoNUCzuhUC7SneA65X2x3kEfjJbqYJZUJn3hU1M3GssDmyaZX6pUPij6yY8kGky7peHYSJ6MnY9zvEu3N",
  "key12": "4ahLL4KCJLvSULnKfr5BAkpFtF1iGYsNiiKJb6vZ4kqQ3MrtPjTdfjYjmcYFpCKP4Xi4yKpCTZ7yj6fZUxUvSrUu",
  "key13": "41ePctWJSYcwkmTBaxAkZMyfSh8gHeLSyxTkqYMcSr3xXwdZ8UAEmoeX6DxLffo785JVmbookHQVSwZTp858reXY",
  "key14": "4uMCqHwagtx2NdR2AieBeg5wmXrzc8vdNeUSa6tgaRCrk1kWmAkBKmnsda5vPYdyBYn9hrYe9jfbgmySwcEpSLv",
  "key15": "4q6kbRBAq4Hxz96Dfn1WNWS5gERjHi6wxrnw9z2aWGAGbht4fbTPP2ihzzd5UirQ7qizyBaJA6FDyPWQkdZGsWJa",
  "key16": "3vEZ6Gkakbo4ssv9uciR9zA5Kso9uZ5QtYSXjnd5c4ETp9eCJYHsiPJw9p8LwjZ9DpCt7oGs2Jr2C3122ShGru5H",
  "key17": "bDL8284GzVz42y2K6r9ShfjvzZUDvW2khjaSwtmhDsWHoYKZhjfoTw252GRDFZqapYiCaXDBGS19N3i5MxsXQyC",
  "key18": "59Szf3kVxShkFDYFGuom73RR4ZLU28gRTSHdfzJRUwUTSpkN74CFcsSsbPF7KvTDNhVS8yCJJiVh2njuXDUWo7XP",
  "key19": "5VmRBKwy6PvDnVkYBCP7GAKoCRiwZeqC6XjrBm2VmEFZE2oLZWo9QEpX426kX4vS5yejwN1sKUFpKtAspLEpqvKn",
  "key20": "34ExrdoZS3wcyqSbNsUHfjc9Kb5k3pe3fgDU3gWwV43p9jv5ftP7LV9TxQQYdT6ccD4nsG5etwsm2GMAZzZp2hyc",
  "key21": "4S7Fba5fdnCAVJATXHe7Fofv9SrHKN93VmZky25pBsmDydM7nPbreWbw3zUoxnjTJySFMsfFNFbuPaHY7TgyFTSM",
  "key22": "4NfqjNqoQfFXxmZQQKwVJJhsLUVuYDSTrWgkNo7i71i69gz61TrPP2enBxdpXLs9qi9CMKhSTBFWAUdSGwuPsh6u",
  "key23": "MJyuuqEjxYceL78XEGTtQvmCPPiW8bKSrmjbjJktVSWhyzic9KZK3h21ThG3wA97MDTR1ddCJ8iVtvtaUmoy4Hj",
  "key24": "3ngecr4VYoTS8aSvq7gD7vHudzP7UjX7ucc4QAUfx5RKginpkgje2xWqujZzUdMn8ceybaGdddd74PdHnErfqfhc",
  "key25": "44jGjpQ5EVKRR92Es2b3CsxJ9D2uCHM6MiQTejUWNFFdryzpwR98wnefCD6amAwc83uPSqwe4bKqXxX1frHtWcog",
  "key26": "4PRcZDEBf6mD8ZYjVRp81aRVR6sTrmHw9n4KJ4mtVGGN8dWjE7gUMvmzNm8fo2vfi3fGsaVjPLQ6r1p8duW2Pfhn",
  "key27": "3k7DaZ9Cg3wCvNkD5o8eudveJSQURrzWF2B7vmpWT2vspbWoJnobxxryzP1xtDjCwKsK3phxQntnQFoFZhMA7nFM",
  "key28": "2wm956188h3RTC4VjDFbweG5FdfeHvB42tn4JogCyro8pnubas6XtS3ZD7Tg53CjZ7RHaSti2gwkw9BdGK9aheUX",
  "key29": "5anBrQ3S84nnPRnCoXBxsjma3Bfb4n79tF91gLN4uN3ftTpEdYNbi4vd3eMJkkAfs8xVpn2vCB6EAJsXJubTv5Vp",
  "key30": "bANmMs6xaHNjoKF3teoM26c8BhBd217Ra6mVUXZ4q6NvqUN5UrC3RUyXxYhzC1ticHNYCP4iNaj5QMNSrCUTE1T",
  "key31": "hN1mDudbZrje8wVVgVZ1aWxtK5fcUvtLQknuwV8vsVkviCTMXLNWbas3rRQ8hRbp5JysMDaEqNRmBuvHwzs7L3a",
  "key32": "sBgT53U2j256jLvRqYxXiqw9pa7V12crqPTXPhZkGm6WWMvVgV2gNRtUG7xU5xh7LNcyc9b6QfQ6Aa7oWvkDkiP",
  "key33": "C5uQvmMLe4iBB4dJBCSxWH27rDoB4ZrT2d4hoPW4SD5yHkQpyuk39ZsF8G3dQVcLh1yETx3LS824bd9HAWWsDT8",
  "key34": "2QwgCyvSvCq1Ld8mqfS1vh1JW7kKuKdDcQ7QgHjJwKFfPHmUvqBhWyPHswMK1aYnvZB8g8uvdGqRy2u67vokSxn5",
  "key35": "5oYTzEYG5Xff2x21qvXd5JE5h7tKxuuArp7S3afLDhk33ZXgwPbMu8v59Pq32VJFAyHgjFaECyeddtgdsQ5tiAhb",
  "key36": "mFRJh3ggzjkYnCyALcSY9eF47EGto89oYYfa81tT8aX6osdwNHxoqMx5hs2dERkntNduQsnLU8F39C9FnvPuQGE",
  "key37": "45hZcDgBrr2Hd6kkLmMf9teoDGyXe2YfoTo2fvJrn8Ub8NXjdroAKaEu2qZTvNfcUydJsDBHYsx5TBr451CUi7DP"
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
