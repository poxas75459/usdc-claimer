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
    "2MHGcW2MeFdnZLXMbJ2msoaAjDfE5Fer7ofEeXipPQEUjUngDw2BEwXfcDFuXQeKP4hrCQbjV9fF53skPVAXRRgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VppxDi57NhNTScZyW9RLiHgzMkoKGZJCe1HAJ5ajg6SGGj6woV1AerGJZaV7cfXVmbd7LiEfQC5G5Uzy4Eg9D1m",
  "key1": "P3zmZVz6VCGLXnGEcgGDFert2AoNMu5823eizutBAv9UmqwwEeHWGrN4yb1jWTCss4VH3ZfDNJgc44fds9ZfPGM",
  "key2": "2EHJAp382BMqxHXwEFSBPm6oDERRgV6dXYY4QPwPFEcfaD7U6hDV4mxTi86o6Q87fWMVECEWc9vkiL7yP665pjC8",
  "key3": "2d1vfGGYZHHK4oDqVyRPJLP7jareraBkDXAgr24EMpBjsNvKdSY2GrbdsWqP22TCzXabuvRyp1aqoJNUkZxnxb3o",
  "key4": "55XAKkQqVCNAEHDhWcLvsvhvtiDW9T4eKF6noCyUSMPGyd2sQ4maGt8Whk9Ftun88PzpDd374tcc1jj3qt29A1L6",
  "key5": "42ehNsHqpFQ6wMPF7YM5s8jcjVo7ZTcHSQvrCyMKpamyUcPJTJtcqSrNL8UzZQHpyTyeURt5vau7cVjPuGA9qDcQ",
  "key6": "3GiaMzZXPNn8Q3TiW885bZwfrQhmYEA2r5sYyWFyAkXKzGPs2DDveZtiZDtdRArSiHCHJLx1WSKrtJMbFPVFChku",
  "key7": "2bzkjmaib9JCxMKpCouRg28kfnkDfwPzVhT5wYjr6NvGLqvH46mQ9THyEhtp4BWeKL4Rr7p1mNrnW9QyPE6F2dLC",
  "key8": "5CpPAwrE6eF5xNNnJDfNiRtTeRqELC8RvLGTY42hdMLn8RENqCKaQFNxRmvNKF96io7PficCnSgYmJ4xqk7Po1AV",
  "key9": "5ydCcce7F1CJTkLdBz4Z4tcN37hzm8xaGWmQ7RjeieZsLbm6RADgPwiAenwPzMQbeRKS3aDAEarzFuzbr99VmeBP",
  "key10": "53tK5W9muiRUr882KV9jJd2kC5Wahj9wY4QoJXmLb6ABXsNaVGkWi3xyYJLZYARGzPu4XHQsHC1XXoY5TGNC66by",
  "key11": "51Z1VxNZ1MDxbes5HNDnZQZzrkFHsXdqp7CBPNcRejjWVeSbaKYXi1VcusAKnbvMftoMkpaL5b7QDVt2tXSUQd5L",
  "key12": "4NjEeYPpYppfTbZgwHBPGRZHWJKKaDutdf2NErMvDHYw5RWd9QfkNCNaA3TYUFg8VXjmrFKuh2KX3CPzkqGUq6Yc",
  "key13": "26VU5qSgmPns1yoQnr1VeWUzZLACeseLKtKHrryzYpQyQFgcV5VTvpZz8BD7WoJiLCbSSVvhNxW6F8qoJthL5EPQ",
  "key14": "3vU7uozLAsuKoAgwSjQsSUvsAzHaoXVbkoFneEaJVg87KrU16fAn9nD4A8P2ESSKMwzR1ghKoepUwmZyiyqAaQtT",
  "key15": "K9eigvUp4byvyK2k8Qmr246jtmkqrcwPDsQ3ykzoEJWqzq9pTEsMVzxt6zbtqeFCbcqVRPFJ1eJPr3Z9so6NWqU",
  "key16": "EzduxsKr1PUK1mF11LyJCTp4vNygkXfnKi4T6Djgx7oNjgQwLu5JZ1amdfWXgKqiwp6Q7HL3DWmHRieq2GYV7Rx",
  "key17": "3f4pnFndrTc7Yjnbr5hByETqFwQArLy8GcGAMWodveqTGhXwGt41o1bwj7Rch18anjG3UfMUiQvbu6UJHYq4ModY",
  "key18": "5VzRPqehNj7Knw31kfP6SwLtP6BvnGUzLA98i4yHok5nwP4FQVQC7Tirc1EMguHoaC2Pgpm6dSXbdTZsYcwr4mHb",
  "key19": "4gE9LW5m8W1KXPdgjoavodDeiYRV4YL5VZS4HXiFCr2sALEZHg4LADjXRzB7CxVJUjzaKJYZpinbBs2u89WbHzdw",
  "key20": "3cebqvxvC1wSzw7LUjbFEU3ad6qFFEWwbeSCj1sNro4NZk9huqoGVCGa6sCpSvySGCJZde9Q8ojG55x99XrHrJoB",
  "key21": "kEN61zYdyrMArvru2nxk7Am3S5h2bYCF9XwiQ172qBf2S6RyjBqx88bEKSNWzCTtihqPCx9KURbkND8FE7wPrr3",
  "key22": "2eiywprhS632vo8iz6MxnBxgLSV11SgfmVD2CH6MynAdehmcx6RzcMaKhKR3nzL797Yhb8S7ugsp1bizRoswL7Wi",
  "key23": "5VBjzEPiVYytpgv5WvcvcqWdr3NHyvCb8EwNxGvegfGXMQd1Yx6NgL6uYBNnuTudPr2y3gLcQWsaECc7z5n3fzsS",
  "key24": "2JhK4HCDPEtus5rFcZ11wJPVeFC3y3Rwni6xANwuhuoPnHKbwN6r2q8BLtB1spt2DEd9hMPDPxhkVZUD7RnTs7gS",
  "key25": "2H17i8wvHr2FoAnuMvwCxzd6zs68QaV9zzeT2NtHPKt6WtuDVaUF3xYWy3cGn9xVa1v8MCbLsV1oKvuM7btfcqfE",
  "key26": "5rfrgF9sH3NXephfhP62g3Tj6QJACuNrxZqT9UWVqpz79tiPEg885c7pBb9QB69KQNFNkeNfnPo4iZPpaT5v1p4p",
  "key27": "3zxN7WDd3gd3fm6NVFS3apUmMjhC9CcVuQyR6GEPdyXevRY94UdXPuQSo2Vb5KdatEhxWrsZm2Y5uyNFW4gTm1HD",
  "key28": "4pELWaT85Xcv2Kb151naQMj6zPtyPz3kdLuXkHaypS9V2F47XWurWDegxCKz4snJFm7JSBaPmA5NFux8RP6K6bau",
  "key29": "5P5hz3brhkqhggmb6byp6y681pGTTkBpH5PX7SRB7VrpugDLLTheFsQxE4M3UGVxKNQVBcEruBaudFmtPGx6V7q3",
  "key30": "Dj3CZDC4saiDpdfkz814Q4oaXefsP6t9PJB5U2N248WoRC2r82CMisCwuPnFAK6d4NhD6WGrSCoQccx3Pfv4fC7",
  "key31": "61BPf4g73hfiNLavT7DFXgCeTzc88EiZ9C1vLEGFPQ6NLBZtYNM3UciuwGMTj9dAEJQQDMGCH6qhYJbHREU3eSCu",
  "key32": "3VQEKuQpQbXuTof2gdhKGM6DLtFSzLSjs1E7qpYuD1VPBvjti9RctyyoM3FB4hxwrZjeZ5mqoEUjmG5MUoXMq7Wp",
  "key33": "gsz9unKTaWZzjU4y52Hyw297iak4F4Y1F41jHLY29qoCGUjAAwfzHWNhRapQ7ccwHHaXkNHKPFcM6e5QmAbZi7q",
  "key34": "2tLipSr3vYV95SjY9SwcmXnBEf2FY8Fr1iFo6DgCPeXTRJQfyNzrG9FPuqD4N1PBamzZhhmX9Zsz2DseeApa3Dzq"
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
