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
    "3ko8fMLh3KvGLYxic4qPG22aUejHxfWHStNPkHT2Y67SeVrxZbT4txabMSjrmxvUM7g4vqXzoNfZwZsr1sJDNxFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LTQjAmALydqyFRR9FWzCeT6cdLSsZj7NdwEDwHvLAtevh37QJRodR217ChVHxvz8G3hgtGcdcHdbffKR4ELL5Q",
  "key1": "2uCYSXnSYWArz2aLSe3BNHbnigf1Zr3UwX8kdYknZMhA2NEvFXQafdsjwBQqzh69SegoZWJ5rfuQUiuFw6UwjQ7T",
  "key2": "2uMPbtVWVfmMYupWop5bz9f9R1KCqaE4wsCg5TCyzZkSrYFR6g4RymoXe5wtFXXMJTpU1H9NCT3xHwkVNVgVo1fC",
  "key3": "HVSpCXaVXRvSfxw3XngvCiAgegzNaodwFZvE3sbZ9FBBcKSw9mzb2XDZ2vUXkrexfV6aUcAbBtbCwmDtnS3KZoL",
  "key4": "4AAawV5RPyYsu7eTH8ASdS43zbjmRakAexQKF42ZZo5XzngeNK4aqYZ4hJvVdQnuWMN7RmptYSv6Tv5bmaYESgxL",
  "key5": "3PdsFAc3izjMHaRmGUdSnMmqt6hHw6PhfMu2aiiqwy94TDnCb68QgtaoRMU5LgarjQ8eM6Fqp6emArZ8KTAVNY5k",
  "key6": "5bpUZj9b1S8DzLGZRiyg5cmXfvpFbDSuPBeT13XPEQn5hMgh7bbwsor2EYjP1XfdTm9pmYhZZdv1vXEAm8GJ9xvM",
  "key7": "2kX3gf8dPMv7kLjx13NnVuLeiqRnNwad691ni6Ph7vmCgnFGCA8dqVYaQfPcc5YFfmRi7XhqvyNF8LVgh3wcMKsz",
  "key8": "3AFZQRScYL528pprKgaGaZqibR8EXBwLL16VtghX2XjqPuLx1XVUFQTZb1Aaov7dmfCUAGPT8e7qPkw3xMsbVwc8",
  "key9": "3LLPkeHmQ3WRyvk23rEzkXgqoCgVWh5Uf5devo2K25qGh4tZaENGA7ADmJ87hD5j1NefMDDLEZJkLtbJGU99ff59",
  "key10": "2PqiP8Ri779vwSgaMYbcqmkMPndgW34dEBwiog9EZYjmTsYLDwkdbnsvX6y2PSxGf9ihs4RH4oXgPHDWFFd1erxs",
  "key11": "5buLjxymQZEcgv99rtVGvwVMmFpSaQMWofmQzQUVNrEiRuBB8oTtack4Q1sedoS4LjaSCRLRenX3EKSXZRapN7Kr",
  "key12": "3kJv2JWv46aD3cHW1598uwS9PQ4mzurN1xbauw1qbpR2gLgGGAm3sf2GTb64isZ6od3vM8AFzHFNAFZjbd5YGmGC",
  "key13": "2ewtx4jov1CBdEMAXy5aATRY9pxKnTKJz6kyqBSvUtKHADe8EKtdD5Xo5ADRXa5AuB1GoNqJ1vx1p3roKfGusWeC",
  "key14": "3eUCQtPYj7wJYfsdWX4z9HdiwpBmKetqL2TsEiMwD5pW7AJxkez9D9hptdEYW8GpFoMGgogWqoHJsf9iaFPxdw3C",
  "key15": "3EBMT597i4t7VLHLCduYqLMKoxZKvGYcZFyEbJBqZmgWhS7w4kiAE1ErmSWxZ9NbFXd5p8NhcxNiHHtsDp1zZaAw",
  "key16": "Cy7m5QvuqEnm1NyjgZE6yHZHYAixXFgT5ZEwxLCSE8QAgShdsNUqsgxP5n5kxbtNkPiN1T3QFaJrMBvog4Do1T5",
  "key17": "5wYXSGQdquKc8czxC45KkfLhjwGfxpGwaJG4pF5TFkNtmuz9RSpgXujHEcZUjygMxguX6gjK2Cr8pA3W7dzDzTos",
  "key18": "4eNor57vA2X4yM3gPJczUCMMM4bjhPBf2L3sNUE4quBrweFAg9w7pWBhEx87RC2BzebfB5BCwEBvRpwCXWaG5qZS",
  "key19": "3C7qFjgKsLb7ag11X7YbUC7AwtDvDqwHtnyuuJgmjzmb7ffqV7aJ4T1wgb7TiqiKX8aiYM5Czt4rpKqw3H27k8J6",
  "key20": "Rf7PqcgC15m6FX66zgXV31J975bXHpWfGP7smEhje9R6bb8tiVDREcdtgdEVYqFVaLyNzh6E8YsdroQVBd5bYoT",
  "key21": "QKxKHw88f3zZ54EkoMwNba2iJJctTM5Kim5NnX4UmHPy78Em7RRzR3GdDv4CeBDv5K9jJwj8mk2iKnWiLjpgBs2",
  "key22": "3kGbx6GyZvdmk7YUNCjP6ByK4w9cy5BCRnfUx2gLURL3TLiMp2eY5TwGcmyKY4yQtY33SW2ezpCgEKu7MR28gCxg",
  "key23": "4B4ecMBVJDzkRq19gpsb8Dk8Eqr9Jpa3TBisVX1TJtxkncW2QTqGz4euSRSr23u37wf3DTDovfwt11aBCWd9Y12B",
  "key24": "ZHShDz4HL4QL5BhefvexSGyJUe6QPXCEeeBVmb9RuJvedyLhwJGUQWhuG6iVsKo1h2KzZZUrcCTymUQaMkgmXqL",
  "key25": "5fDsff7u8G1VWtRrUwuAMGWkxhXQD4mjYurHKn95uvqi3THYhSvAghmFmzFQxrNMigdtU7f8tdVcHBvr1BZaZEr",
  "key26": "5kwRRF6rwTWKSoYmrWTt7YSoKouyzFLfMmxh1WM5rJGrGDL47xfgqqsxCULA5JQv5jxM4mSVYafsLkrAQMtFzm47",
  "key27": "46jtGufrwjLpCUUmTwmdw5mjnyqunNt7QuS5ymj8fvjzBo56koNA1JKfoo1cb3ZfsoSGUU77x2es8RbGAHoGu2Ld",
  "key28": "5JDV4qncvvgxKGaW9vrCErgBUcLhXdgiqRbYHmVp6e3noaGjXyuj1nzpk1e8RxwQ115vcCJatHjUw8aofsJKbTtn",
  "key29": "5T1qEAzdETUdjThhh6b4dUiz9k68T5MtPJwFE98fvnYPoBEtXq3Q3KUsY9MLZfVxrUgRjj8rWfPTUxo6qDVhkx29",
  "key30": "2dXaBHSsGphvLtTStXQuHMzcBHpLqDyWWZ61yMTEPVENZoM1KuoQbAUkGVanHt1RZvo39rRZEK9Rdx95w2vrW3xm",
  "key31": "2YD8anDasKZuTYZe3y1DggaSiQXG6m3dXEfb4p33Na9GoDP66yNjcyAz9EK2oecUJDKmodHpotb3ZZyrpT4uiLCB"
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
