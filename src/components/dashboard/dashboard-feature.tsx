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
    "521cfCbLGUcL5zhyk2Ei9qrU33RRvRi7RNpM4JJp3hTLYVJpHfZDodEgLzHpPmcnA4jiwh8qq1Mz8uo6J19iWMe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXRnnZ7B1kX6Y7ca42Ej7jzatuyUk4iY47N3APmfRHxmQVpN2zQp9nCityD78mRvEniiz6PNFJ4TXPZLrz1p9x5",
  "key1": "wowAqPSYkY43vkFGPwCbWmGWXYPMMCGgnL33CzSNkXBGM9fr3HUkG74tXKjXCLP7DDySfpeptmUXMHWZ8NDvRi4",
  "key2": "49StrhafQvAnduTWyMpLrLSazK4BDFxtaZKmw5q2BUBrtjEMRgQVbQ5y7JfLcgfEXH7KnhNpVG6q6VNv5nNBmk94",
  "key3": "2cpkCL7kxyE48EBsixFDuRCqB7mhdRBjVVSpvFLy5SrEqFmnJJP3NqpvpCRZhT152WpiH2ZdvvP4CNfa1xA6gBtD",
  "key4": "3aEnrtetW2G9EuGGePHUEAUkz3pNDYFngbUQa79h5oyw22tME71adWxRgjcUmYFBahnxMpcvbw3JqQmSkDpqenqL",
  "key5": "3PwKRmkvZM7dfmrFygzCTeV5auWThEDpmcb5R1YpwoqP2wcNLdQYRwuB9vWGmdLzzwZCCkayX4SzJeyWNDt8LNz",
  "key6": "3tzVtVdwcJx6pPrfEhbyzQWnrz6wVaNm1TbthDNy8CiaAebsUTsayfBmLHChAi5rPThLbWf5Ump3amEnou4oQav2",
  "key7": "2siTaVRws3MMkht6TcmupohwzBmEWM9M2n96Pf7atAPxhUF6oLcd9Yy8pvmpCR8bPpZ7LUfPzWpqRzwXFi4fqshj",
  "key8": "3uo37NJWHTe5LuKohTHaeWA4VFnr34kyaKHpuEL4eVnYHvaaUcoSTBVhkRh3nVkscPy7wL1jtbTyPFnmppptAT6W",
  "key9": "hvyXmTDaM9uCyST3BazSzy1UgE619kHYfzjdTj68nhCnqv1xcQpnDTWYWmDWAEjVYkGcRPdZhGxfTawsEX3EZS7",
  "key10": "eQU2kmx6kzGwuBBcwZAF1xrmrmJqw9ob8xDt1xcuLytvovcKPvbzJ3jZst3UNaaP9LrKiyuigm7Nztc3FNGqegU",
  "key11": "2qabQFvbkqG8RQvUAyP3jVu3zeyzBKK9EYhSfeTofWYBteg2vniBHcByYwzhzPZSzKfWmLhRZUo9aVRwNdKF3FVy",
  "key12": "2Q67ZVMhEqvHtCXkCZAwyfbPjQ5Dpv8sfeZ4h8tJyGyqLamfncmY97TQE4PX1jss6jGwwhTYWcaDkm2CsJz4RZX6",
  "key13": "2Rnhaazt7TaYRpLCTLWb77jVCcmasySMLihbzVg61Mq6JMphfiWoDsb679Wf4CuHA5NSH9tQ5GTsvSfepAXrwmys",
  "key14": "2WFphm3PY7pRAAFv75smhhr53mo7PGhdx5kmBoH8hAuGk7yhuZfeUpJ35uPdgcSAvBzyNQvoJ7rJvnsxQUCQTnok",
  "key15": "2mVNibd9q8k8T1hGvhfvDMr6kY8kZt2uDR3H61EDL5qCLUKifDvJBhZ6Kgk9XajYX23nqRCCjShayfM1bifoyyeg",
  "key16": "2RWu6iruZPS9f2Cdn5xWAaaehDanBLR8paR2vXerYXWnpUjq9fVRA3YGFafD9dJqWW7C28h5X9vZwq7FmCQhfkJW",
  "key17": "3NBRk3EofUfrTDSJ4Ts24TkwtURt9v1Q5TD4RW7rJdAw1xio8EdsFuNDDKdnCuSisdbPviVMrGT8EmtzJW3N9uWj",
  "key18": "24MJ9QZGsmgETpjGYUUBtfrtkXJK6mbuJZJpZZQ9bCr3gUMp2VbBpMWsuU4CZVHMHswSh4b4DVPqfFyjhQdJFzEq",
  "key19": "58Z18QzauHbWDPqfz3iJJ1Du9qGtRqd2SyTmo83EQrejMB6y4GLWMViT1x4KkbhHgtNNpyLUqkyvCQNJpMwpk2mF",
  "key20": "2ZZLP1TNMNzwJaqJCXvUwHnnF53UQrQe91y7Ttp64JvhqvTPhQrZdZsJvPMUpLCTVjXBcVn1vYCr2TnuCDZv7EoW",
  "key21": "wHLjfV84VjGaKAgQGF3WVJBF3B4JhMPAJsEw1JN9WtSiStjbJxZLDPD26gdT36sF2jgf2CRJkickPAXA3S11M3h",
  "key22": "3dhJDgsv1MHubpBPuKLhvMuYhB2EYeCLP1kCyLYXCz4AuSicNoqA6s6j7jaoeyzDEeSAAHnCGUyZ3RDQ166yWpjs",
  "key23": "5dFKpaMUq4uJCw7wFQ3p7hrwKqu5cHZPZiZcRrJseyDu9s25E5iKhbvXMgKyJWZnfgDfFQiWLLoLrpL2z4uvseGh",
  "key24": "2FJENjegVtzxnNpcqdoqe57kx8tb9H7XzDjzfRRTkHxiWS2LK8BnvaH3xj63Jsw2iKJNDZcL6cYs2dhb9Q5iQVoG",
  "key25": "2iTyAoBGJAaMCvRV52uVE4TyCB8F7bm1r7nZk5qzMbFM1mzdwEGZ1jePHs8Ppag827yoopU7hW6UGs2Mi18TFV3n",
  "key26": "3hTiBRUVy8VT58X5aU64VjSjpoDcFd8WLzNhvc8HwSa4hFeNJjKYLMqrYg2cdEQwLVjMScnJmfBRWwaMS8rubXdd",
  "key27": "3oMXekXQfmBEyMraiWx4Yamp5jBdkobLgb7WQCSu4FSUrgGckQX6oWkrLxeQESvtQWNb6Cqbj5zeBgxPfmY1w95e",
  "key28": "ZH2m4S9USMYBg4FdBDTa9daMVz6sthKyV8qfH2Sx7mEZVxqYJ7hSLfQvSSuAR2Fq2zGJf2TWiBaMNoGm7V1or6Q",
  "key29": "obptaFeNgY6ZVzuBpPHRHbAYSzejVMXVuWCW9yw1vgcP6Hbufx6AUzFm8ukmCzWMoU7yEevf74AH471r4YL6K7M"
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
