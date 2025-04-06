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
    "5RN1Za1ANxufXkv9ybeWGHrDbFam3GAFzXPxvW5HdMHL79Ky47T4RusCa2oK7Djjw9HXyHjpbCdEEcFafbr92oFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfpUd4uKbtUoF6wuzxSxdKUctfzcVPcjgHezPfJvhStdH1LYfFjguoo3t2Y8BUBKTCAXrvvM13k5W4TZJr46DgF",
  "key1": "2tZ56ZgAyqParFXuiS4y4FDHzaA2NHgYrPapRXAJ4nGrFjmG6AaseqZ65vFeY5LZiatrAt6jULMhSVD9VeXU33tG",
  "key2": "2mdwDn5bhDY21RTfq1zHXq5dWZegefn1eHi6z1VsFqTUbv14oEG2Two1fm8VJ3hVbYdKDi8TUaNVybRwHpw3J1dm",
  "key3": "2xatutCfDSSEUWeBW3UiC9QQDNwjiXVes29M3pUFbBdPPhh5BKp1DhjsJNQ512a6RHPgyrBhbQ5Uu8EJ4tSLNjqD",
  "key4": "25Fhnuz67sh6mttv4gbJwKXWVMrS8jsUgqq5aWVZVXSENZUr2qgttciNnV5gMfSkxLp8k8ZR6HSrkyXeJXWyNLbT",
  "key5": "4aRqU6a9sjwGfu1TgYXjyFXuNyAndaEpC7r5vP6TnHwzjABmFr5Fnqj1qJMtodiTTYQo22juhybSNkFG9VWMbzfk",
  "key6": "4RGVp3vQ2JwZqzLx5sb5HgHe5naBZi8wUAqB2JTgADqm8bu2vLKdxVUcdapKCNDJoMH8bxQCjkuLyhh3SetjBLGU",
  "key7": "5gSyc8BRzzFbKdXtaGVbN79b1jpdNXEtrsMXEiRogdT912zH5GQju9SfxU1FUJWiWcB7y2W2U9c9BRDtKEAQb3cT",
  "key8": "2iZRzzu7YR2p6rH6DFoDY6nwEvqzHNMUNbmuAx13VEhKaPgwH7CiUU6usK9iCAVFzuEMhPxRsdQbdiJLTBziYibu",
  "key9": "4n8r6rLgJoNo1FX2WsdRUPQQVgwNmEttXkLQLViaMrUiE9eVrqbSeFHfxJYkZU7jZgqtG5LjgEbUGamB6reYzHLM",
  "key10": "4xjHvqhnpTWFVAwFh9Vj53jA9Vy7zzSQTyDcxwz1FfrFdpCyQGMrzwziabrjabupHfVHLoceauTCoXqVi2epgjbs",
  "key11": "qmrB9zAojmbj81q5Jxu1wenpeNqg2pagFoB1to2c9aqJgjM3TBCrjHga3dd7CpsjrXFiKonDRsEgQ5XdJh8bZ7Y",
  "key12": "5vfhJ1XYzgZksRh3BDUJPDjeDesaGwQnGpEcRiLgfENFJqbMr864eRAEBtaEj5kFXSWQZZZmrZRV1YCptKssTurd",
  "key13": "4ywrnXoS9YE3zYDzrKCE7XZwo2njnwfSRdJzkQmdXibBqce2hRF5DrtZDxcQttwbM2kEDxJQPQrCLhnAUhTTyzYV",
  "key14": "4993fqux5Pp6fwrf3WNTb2ZDTs8tf7njuqaL941ENiS6NkPQ6aJNvC7He8NjtiV1op5dGexKXxDc5dwgvjxXEamP",
  "key15": "2wtf39inXpJ8iMyTkg7DPzGhUwgmrpT9UryEFgUsRxdXCKPt16tkZVTmU1X7VBwL3audeV4idCuZBi8kEjeC71aw",
  "key16": "4Fh2G9ZBYiW9YPGxBZ4o4cjgiossfnE1mUSy4WykCLpu8WY8yaybwXZrGoEmvw36WUuSXKtTrnLbfan9RZiECLiD",
  "key17": "65TGniHkrNvbCGinBAmgKo6VZALbZivg5xUqyTcDMT2f8kRHaMbSz4o4x9Nzj5DL5MnNomfxAdpfkkWv2b83TLD8",
  "key18": "64AeQwwVijGMsfM4Nkyk7crZ3jMzV8dmhM46Lycj58yGRfEHQVV6PifwtRF5mwHm4Vc7gAA88pzCDQoPerLkEvmh",
  "key19": "5cwHB2AomLo3TNfR6jWxjFjdA4ABS3DprzePytBQ4ThvBxd6hbeVK6hKYs9zn9v2JeqT98piQreBXbyBi8mvjYym",
  "key20": "NviD6Aa8gmgNaK2xpoxaAm6HAaJhfQWF3jXGU5t9wbfpEnNhM3CXHMKnjYxjP4BJo8xiWySwZUvys2fm2cTSXNf",
  "key21": "2csqTEVuXJTvxzpcjXhq9TYPzZcvKHGUUE58EXUvkgvykFFsdpBV8xdHxwFamDGpC1SiVzKsEdckL1uFGKj6iD1J",
  "key22": "4exJCokLG9uMxPcp5J1kYhyXZAvZQAULHq3bPF1WTsqNaJh7phquxPSkY5dJYmWeNyf4RRnr9trC16bi5qyitbHX",
  "key23": "GdyWxFRZ4nV5ALT1VrzfKG8j6RACnNL18Wv1Q7a2jX9DcdZXvZ6TQ1Pb7RCpocm415REU4QHpie37fXPnCpfVPj",
  "key24": "4PmQ5K46nzdnSPjzPLMittpgMLbRmZDqMF561pgdafF7cjqZYzkuwh9rHNAEcmeQ1vhTRScqKGgHCNJtMTNNd6bZ",
  "key25": "Cocd3ckACGCxQsEhRyhPPMTtNyGtAB3buPmSxgEi7TxNo45BdyUC3sftPwSpGarsjNEV262hYXfaHB26AcToVej",
  "key26": "32LU7NxikQAqFuVsqyscTUBu4i7icYco9s1wJnPBi5HGvzhAnYwKaqToZnezVboy2Lv6v1STqbXDfqfF7xbM4ikR",
  "key27": "6fBbCGcyXy8bP8Ua8tKEJAj9JsY6TSmxqAYwHvekv2SGLDVS67TdhZQPRPmsGJpXi2t8G6NdP4MGjaZomg47LQ1",
  "key28": "ssa9A8K1i3TWh8MNDdppgLraVjBRPbbi5ZSkQj4TC12EuwkrxeehDGy8kqseZwUZkoLbvyhttxDuSrjE9KqhfD7",
  "key29": "ECHJFAxp1bsAeEtFcdjgoDm4Y8ZBgxv4Ty81xARJ37gQB33DGay1qtf25ACRjYKFp1v6hgQabQC3CYZCXQC29MD",
  "key30": "X1ycQZMS6D4ZjpPX7pvAgYgdxM2F3chELAsDGguy53fJLX9h4jLhayCByjXFVBuzYd9irvjGLs7ssXQ5Tj4tuzt",
  "key31": "5VSyucBhDxgZnWjBZgnXBZoA2NfQoLrARhvrP9BbFEd7MhHpTfnUXX37GhjJEmA9w6wN3HyXZXFnUBbTwChX7au8",
  "key32": "4tLWmFKHLpYK3my7Ak5F3oFAVXCM8k95jXuBhZJuYYRV2w1jM3qaypfZTNhNicWd515RqYjfYgACApNrRB36UuS5",
  "key33": "3ZucqQtmdTWfwQLNrHtDCVfQgF6SWUEanruLFnCCbQFLwoHPxB6x8ZqW57wmrf8kL68KP2urGjy2hz2QfRYyx7td",
  "key34": "CFndey8Mb91J14HdTapiPpgLbLCZ4teRbaK8nkqiBxvwvHcCnYFwQdDRdYGSSge9JB9ExowrR33nSY6Q4t6EMEU",
  "key35": "2JG1fzsNArbgpTvjeYdrfkLMyKNqrFV9wHvxKG8FyXCat32zNJCs8uBYofbQNqW5w1DYYCCGPbipTvB17QRCTCar",
  "key36": "2vDgALzbvBr4MUbtcd1YdFNMUSjDipjDArUahTSoBLNfvT9XUh8sMH6R8mEqYSaQk24r8B5mZAhL6TPVFFsY3uzD",
  "key37": "4r7ee7poNbBtYWpPgTNCaJbnZn9xa492FuR13DyjuLvFjtF3evwcmYfWGQPTrmCDP8m4YRCzQAEnMW7XF2MdeRQk",
  "key38": "4b7jMZ6ytxvjYNWBtTfTyMZu49BAf3QbHhe26ULXbtMZpbHf8P8jkrdBPn7JRAJWbqyrj4NUq8EmTpcTaFU6hXkn",
  "key39": "3F4tTn7HCKNZybuJPCmDKNeP2UycdWXEVZ9DrShqNDLMLcRSgabh4AuXB4S9YMX6ps5htV1aReUgZf6SwAeaj8xU",
  "key40": "5pwLtKe8a9WRek5sd4Y3Nh2KEDfypz2W3dTF36nne6f67noPQ1TFWUutyNd332HhNpcPRGa3HuhQK9VCtDz3hCn"
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
