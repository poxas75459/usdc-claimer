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
    "3NtcY6bEEzGGjNQqHCNwTanejxVpfY3AK5owFSDxgcHWNQ6VEiL1MGEG1NW8yAiaJfNT8Cv98BieX5GGukpj79pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvPTd5pzbiLKWheppipUe9ncFzeTXfHvdJqnuY5KUDxqdd5rn8h2hza6ecTJ7ypMuGLNnbWgj31SyctbZdCUn43",
  "key1": "4f4eR5JRcUp5uL3iR8pYQBsPQAR9iiwyneCdbN8g7oeP97i9bgP6NR9L5hAJ7yAcdWzdzzeHcfhE5RMC3eh8Jtqp",
  "key2": "55JcYGka3PDqUQErPy2Uw4ybu6x9qSfGgocwjhHM722gBK2fTNwLHzFg2uycMwADRsFj6xYgaGXtRiKWFbvYwEkM",
  "key3": "3Proc6WeY51FeT9fxGm1tJAt4SJqXHrsNiMtBAVBe4vd8FPUyt3rak27nKEHc7u24hbWNR7qzCnkWsDmM8CqSP1",
  "key4": "27SYnMcjzMEjrBnDv8sy6nfkhJqvC2RTb22BGgxa1vrPwFZu2VJWevjnvpGJNpcjz5gfUzZLhtFEupChspPUL9nB",
  "key5": "NzhG8fBo4uAdGqisYjrj5KaSqG16zjFHCqYtJjLWuGGmrahqmbtuiDiZ8rTQyRBinxyoiSCQnBigaRQ8E3y8tcP",
  "key6": "4XgE7Ypecvqf9xFNKxiwDnVV44gi6yoH73XCd8WA5iXGZDBWUNGvwRkwPP5LkNkv2tY4SJZLy95vKx2hpoMjRLU7",
  "key7": "5Nm2397gsw7DMqJUM1z9DjvGqdNLhP1PjqVV8CxsUSuosc6CmhkowSmfPKzwLWNAFkofHKf9GkE5zRctY4NZGaFr",
  "key8": "2KdXTu5vQxtGarwdvT4HxTYdUumqzwd8B6avM4GxMdWFSfX6he3ekM61kjyGqzq73EsAtFEhPwnPn9RF9ToWnrCQ",
  "key9": "4xsKtpg1TgouFMXjq6TEk7KHkThJNsQHGuWs1LpFNSmm3CSnKfJ7Ap1r6pTnNfzzN7LFRaCWy1DjKCecpSEmm7xF",
  "key10": "UVuFwAEuea6BYybbZeJq6PgKP7tPxMcMb2msQWkDX6rvS8cizf8FvAvMZP2gQQLApSQjh8PpR9Ngs568iAGRxzD",
  "key11": "26cjNQ1V9JBi6phWBUgR3XBkjGK1SEMCmfUAa55croebvCnw5fFhv6NqZznk4FAgFEgZwtUUy1diJ1ufTDqvaNyh",
  "key12": "3Q3cfAMGncpyARgUXtCEAv512XCj8aTgG4YwgNqbrcsxqoj4oHzXdTYTfmtpURdozibE1deq8uo7qmfJiQY4wYSx",
  "key13": "23gZ8mry8zoFkU1DP3ALutM3wpNwL97qo1WG1gmEi13ydVfC88wamTFz45zDTnasxBC2fSUxxZ9BE4bLEojLF4K9",
  "key14": "2VsBs7LMhhyX6dK9r5Uh6shCxp9zrMQ79qZZHJpAabFVL933q8z88Wdem4japm7Z3xRuR1KCd3gNJ9qutqV9kYxQ",
  "key15": "5hXpUsLYo3sZCpo3PYpKYHrJQfxpAsvd6WFvuCcR9WJKmcxKZoYEJ8aUg7yzPJWCTY6Eo5xyymukf6tjdEjhyihh",
  "key16": "56xeziW877Skc27pFYtuJ6jexBzE48hBiBtLEG4KkUXmnQ7xBz42nB9BM1vgcfoVqPneVi1r6zB1gKU2WVeWG7iw",
  "key17": "2fqX7G9NX34K2xAH58ePqfCxrcHvZUXpJ4hRw1D5jAoCeDgM3ZRDPsCW67A7Cm7Pyw2rWBisQd5z425LrATrsC35",
  "key18": "4mc3VQZKMnudy8GwtuumHeMcagpyihVvxq5zGfgzVDJwHAsyYPVuRauoTYXaczVtBtgxSbErMwZb6cYEKcMWVwBR",
  "key19": "3Bf6cDGUG4UZMrN8K33qMkhS6yG8eGBAjn8P2PF56HGxRda1FM2HDDpKAt19NnuK1RUjrrX3Y6WXeQRgp65EmbjT",
  "key20": "4qjuobDpzk9L8HUjsMZcsdbZQQvfPWFBT1yEMYFpkHp7e3tL7geGokVBnqqbG3gRKRL7wrAUfEMD7Q5NEzwzRfxa",
  "key21": "4xZW2xsNXBdVzVGx96djpfuA5mRTjuBCUAWDawmGo1oHQTC8aPMsKzi9GQxTqjgauypHNVFCxD7HnKr1WUQ5FZKA",
  "key22": "4JNuuMkH7MdEkVdcY1JAudG4Jha9Hq5NKHZVjbZRuufW9B1y76va4m9pw7dYT6dgDFTmZTyELP7cF2FzFRHweqiH",
  "key23": "C46Xrxbr1weL5hSKvdF2Qmm1QJQYaog86MEBT9qxoDs6GD9kwcUZGiN8BoQLGBm7e6wYmbWLbtg8BEiWkz1rCna",
  "key24": "7L3XjSRn4nSRTqc2AnqcUsUSe28MXppbwH7bA7QyKe6ymdHPrnMzFxYtE5tvYxfFoCkcBvRSVjdhsmLr9GCVWLR",
  "key25": "4epcak8TqZiYFMrKgPYq6pakhMueQasF89etMptSUobEWxu33gjdC1PHYLDb5uokxJgoYKrcWoeqFBDQ7DeC9qkZ"
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
