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
    "4H34bs8nWs6ay47ZVtFBvRgcjPqGvp9GW1YFWJrsT7jjnydG5AiQr3rvscqGKkPa8rioFFxY4C1FExHAXhik9Mio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqCqaJH1A9ZMmvVHfKoqmHQw7F7YEwexKkZsQpLQEosWi1rJtCKwXCkkULA7X9qNSyxaAAKYtpsRp9mb86q9DiH",
  "key1": "3dbkGZYkhSn7Evt4dVhz4RmygXowrKrcfE2LDmb3RoktvfvsxKoixFzu2WdYVFoEwtGB2Uj1RTz9Vt3hEmazUUpg",
  "key2": "5z5yanGLX9Ky1yPP3ptm34qtb9BYSh4ARYJ9d7gUgEWEZNLksvbaLDkqgntqSUq3upyh9fHCB9wE9jYcsQd3XWbm",
  "key3": "4wMX5d9GuWLXS6GiaanrLnHmsWUXnnGi57vztkBtixzP7kBvnbCP3KdpJWuKmtu81Ei8ovEvSoWaZMZpzi3GnkUn",
  "key4": "2o1aPwWnbdAgXbNKrmnyfsbMv6gGGQgeihn1v4Jdu22p9zeoQL8atLmKzAbXHfieRHJL7WfhZjrgiagGoMz6Btq8",
  "key5": "sJYPt18EwqXt6oYqqYr2qKFMARraZr29ojVKdVqBvkUyXreZN541Je2AgmVQNsoL3JeNr3rEHwyXBaRaFj2s8xa",
  "key6": "4hHdC8yruV3iRGuNnaQyjiksmP1uEs9UEJeSskfhGwmTdmaRxvNHxfQuHufo8PemZFroX8XwnPJz3oucsgNVQCTW",
  "key7": "1DzDRaf42esAN4Lw9yxNiTzLktznuJJwoyEDtQZtnADaoSMunh7X2wG2D9neoNN6m6wEjewo7kJsJPGBvpndXUD",
  "key8": "4jy7SPRGuS9i7dPAGRiHE9Yu3zuKNJiLrGMBsb9p3twQjG61anTHvnKvwL5UxNyg4BBytaQebAYQitvU6J3swuQj",
  "key9": "3YQR4wHRhhJquYENuWWLLa8nM5KDMiTrZZERAUoF3rMjT9NFejpy6B9BNS2p2qwDBdBTV881hLN9rGQf9wNaKLZ",
  "key10": "2QvjWutMafFeUDJE89xScy3RA1QSj9XMUocETMbtz3wi6856wXJBh3D83TP9FYdSCU3dHQWemo2VVZz8oXTRbPc5",
  "key11": "3AYuv19DXUAiD2wtyQ5w6SaEYfD6c7DFCVbUQEorqxatqe9HfrFE3vPkCd8gJ2Jzb32TT4iq5JJxsbuXscUNKJG2",
  "key12": "1wAo5iWj2ukD92mSDaoxEUKJd4McrSvcDoBhYmTvepFb1HmUx8eDLfrYvjo3tGMcTkcvChEUg9YwYcoNipo9dRR",
  "key13": "z6cdGhRMYhXR6FbCsxwCrgThYSVuXkc2XGQMRDW3Wtcm9fJTP8693GhRSH2eB1uTXk7Hg8EUQwk1xPz8KKtkhGb",
  "key14": "4RYkK7JD1eQroxV1Hif1ZZASd31t7Qn95DqhRzXbWuLFeGo42yrigeXcB6cNDehH9BaicwfK8oGoFHHq2PGAVSLH",
  "key15": "2xg3zVkhi3vguqFvMjB1a7QtxiJNL67dv8hu517mrc8HWi2oXpc99m71DzL2debsfYtChYnim4CBV7CYPzEKPuDi",
  "key16": "FmePffGnSgDQUbuVJyYwKDwD5YAqrs36uCJ3f8rT3C3BFvji5WkW4GT8mtRXhLJQGFyGqJ5tHyxYTQVTJvssnmj",
  "key17": "47mMwY31AJZvfd46KkyW3uypfe7bVMYmScfSfwAzFVaAyeR4mX3rgaKgkD6j4n8uKFkTEbqCG8Fd69pTjbvzasnp",
  "key18": "3VrggHy1wpzJuSfEu9HD19VekSn5TwMpHFj56f17R6GuwKaqNgXstDjmLVQ7eVDRfHVRfRmxa6c1TgGE7QE23z6g",
  "key19": "cqAaDAq3N7cGaZJkRBf5HPX4XwoFo9nSWg2oug3DdYTbh6a6BhPJgBy8TXVWka2545HM1KXwmTkzc3dvNvkvqbE",
  "key20": "cJZQNAYxg5Hm6a8twgnwXqki2qi2j3UnVx2yYrqcPDjwGQP36DN6jEhnUYMNBqfaJdQE29x9pZrDy9CHumG59ob",
  "key21": "4RauGm6d6Giw7xutLfdWUHtAqRTRm57d3ciNLUjhdH2Vg2R8AsxeHK1mtmyh2fskkWo9VsQXmaBzfA66kuJJqCJ2",
  "key22": "295KibvZTVP5Zo78ohkcdrD4oKjgE3oaGGuqhEDP7VRRSFDswhmtd3qEJoydvY8UcDFzUJ3StM9KWXFsMAUScYGL",
  "key23": "2Tnj4NxnLB7xzprTpv27oSf4tLoFyD2n6hCtS8LkL2nohC52iYeCFaHzVxEXCpzvbkh2PxxXW556vEanXirMJsqy",
  "key24": "XRSKf3NjRr6Jbcz7kuCED58U8Mp1N6McfcZ7LSvg63Gt9hnNkByKSRG4DTcct3dXywWmKZsqGf6FYFxx3kVBUdP"
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
