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
    "2riU3pkMNYCLDMMeDXdsmy6gW3wdZPo2zjmpXs7zQ6bA5MHyKpjR7X1aENSjfdajmBLUrtG4BNGuD1zD68HjWcZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s22FdLqU6jX9XE8zEgSFbYdVV1NxxBFbLXRUqvPsGsxkRkPJ6iwtZUcjVUP95WuNdYjMQwMLWFw5qBW8LC23qje",
  "key1": "5wL9ksjGjTXiTvj6s2noZpL7jqth5mPNp2ycHwexj6mxxnh3YczczSNy6Qjm4RPZd3RUd1ArxG1oRzAvMga6vbxf",
  "key2": "62LM8GYT4MVwmZCXq1XvoLfuarUKR87yzyVqg8xbeMi2ebr24sFEMNAiqa2JQDPTpGAnX3rFE35NoRop1mCq9yCz",
  "key3": "2Kfk4pfnSQetMuA9FuV47JHAmHo9KXePvZ47FeNBmxzHfYumeoHf3k6AVmQYp6YJHSEETxmVDTGurohAGhUDAWc7",
  "key4": "5Zz9msoqHAjvcGUDYxuEqnBM3NqpKC2ZZX7UuhvUz9Ykr9vzP6RZzYV8RAKjcAQQTGggQ44dk2Zdmr79wJhT3ie3",
  "key5": "6Ap9wfkFGsxLjDRvaMmf1qDo4pEpJtbK9Rmudz3NtCcFjSLLrF6ieqrLtypMqjZhSYy4V9bBnW2MyQWJoSrv2ue",
  "key6": "4EtsSeK4yQazyxUQm7v9zSeXjXaDYf1tco5nCRvSd2an5LDTtvuU4MwN3neoNGonospqJ2ad6Hu3L5QquBTGf8Yq",
  "key7": "3dK5bgm3W7ZMHDmJKMsNSfu6Meek5C3j4uZ1rCcGXacZURKYK7GR32DfRaaCtPZE58C3zX2kLkUE9zKb3kLJ2mu1",
  "key8": "Ci2XasRjfBN6cNh8ySFYWPDYJxyy3DTjP1DtQUdBUux6UZyU74ByNvWXcQJsPLwvAgJ8ZkiGK89DTQ2qj6rFF3G",
  "key9": "5BpQ44rM9bwY3RfJ5o4NZPKi9UN5MgMpEqj76xPjJo14BCEDvFFW2JMDqEiE8663gBV4i3rGKumaTjDWaoAmGsLg",
  "key10": "4perGeZyKppVu5fVKuGUA1nkp1nMMw7PzQY3KG4FhcGrnmMEX9yWefJHLP7BXmSHJeKaGWk68vkFHiYiGb1zzWXu",
  "key11": "Tikz3qcaChbbQDq1LdXncFiwoASPdBGaPeFEZwGxgNTpE7ZQTKZT8PwDt9K1Stj35z2e352uf4MvZoyXFPqv8qV",
  "key12": "nsySeAuGAeuBUX89sW9qx6SXPxLEhokQPpu5uDj448LZXdfwpRVun3gZ8XEwyPQqQ4dpUyKwVqHCCCRc5DCUn8B",
  "key13": "W12x7HNcGMXajBWmj5hf9oSxgd9ucN8sGfApfH4zbnwCuEwnRKWXnRJULmg58mKWL9snQWWXToyJqHL5vkxZZAK",
  "key14": "5vxnYQLcefTG6hWpYcEYnxXwcvkcnAaC6U73QZqPBDAoywpegGFmNHaLMdooWf9tjcZxuYaQEEZj6mf1Lb8edzAB",
  "key15": "2GjYNdQKPLu6AJB3dNkcVoh7sG3Yuy27PooeQiA63i2MojkdafzdGxyJLQjWCGgw4XTThyzLdmxmYzcB7bW8F96W",
  "key16": "378b2u1FZ69xafnjCeoyqz5uSEgMSNRaRZswTyVeHcPkqzXLsUjbXBzLPUP5XHLE7pJqubQzgwjPNMkEbRnQCkFZ",
  "key17": "4HTKfvsFKJS5gxoHJjYkzkSEXZCcuGHv8tttrtMxjbqghxzYky7TMuNFqemT6xHMbjX7QoyLDQtzkw37pNt6kNsi",
  "key18": "vf8xXVtt2dEXm6ApYvoWgrF2LvyM1yb4HAirUdUTo5MjXwj7GPUwEzMYRgZoXiHN4fAedrpibMVNMq3vBvatawv",
  "key19": "2swqZtAm3W5KQNP43TiMhpJHTfKou97dpc7WeLbHXHFtTzYvQPhQxMkGMCZiz4eNd4s9eRezvrx3hdSVZwD3UQqX",
  "key20": "2GQzvijm8aR14uTgag9K3n8tFohuUQkAvmCuNfJDc6XPPhogpPudubCi14LUYNKreTsoTBiW9qXQVqcsAvruPKXw",
  "key21": "3Zvh5d9tP2eLzxpf4pXaoKmxNh58z57pd5H9oNBXKNi3h5qi9tJeDDeGrzPNMjNdhF9djB6gbixrcUDoGffeBXtx",
  "key22": "3VTovx8aYDp9wiSDG3HchcvxPJhsmKM24zoPnNrjARfZhmm9zXZsqLVdTTJDjgwmVnMEM72sxYj41NazJc5d4wY3",
  "key23": "2kbG6uSBECAJHkUnQ5YkXaknGovuHQ6YR8w4ytFwAU8rVAaSMpDK5pUSMUf3vwZBpbhnQLuSuqmyWSr1BqRV81Qd",
  "key24": "3CUaYpwhmGLZ3ukUARgfyiWo2S7atyxVYsrwkQJ9uCDCej9D7187HwpEadjaBWjmHwWg8DRDnDQY3QTHTc9UgFdQ",
  "key25": "64GrrxM48sCYoCEdCpnXXa1ZoXNjsj4HKwTeRX7YDknPTQFF9DMemC8u8veT55v3A9cxJQSVF9qyau1acuYGBRbC",
  "key26": "52fArPGWMbrEp5L5kgJ9fWkdQqM8c7nkXEFcz3oYaaScWDdvvcG1wcCSD5cuPmyN72R5vwVXWYb5N7nNXGMw46sp",
  "key27": "23RyLoFY77VZauMJe4GykmaSKWP5wUiGP51WeQtQZWEVZaiyp3cGu86qVjx2Ku8vYHApGXtQiKNHZojmxqvnN5J8",
  "key28": "2RpGNmL33rAiMgZfKbEtUUbQ25tsMm9wBk9d2RXZ2BbtWyq1LrCDfTqAHgbJZJRyvNDXvXYd33qDJesEqMVxu7L3",
  "key29": "5uYTuZcsYrYLnZpAmyXU8AB2aVQXccT7TfdwrKdRBmdNwyWCBjok43Af2awRto8s5bJwFMFW2bsmazWjfKhQ12HW",
  "key30": "2Hj2hW9JoVy71XKY8p46xRkdECVKR3k5Lq4ab2sCXZctM3WFw4nkHbpoFyguyjvwSD4MnMxbtfvbfotqYQZpYufG",
  "key31": "i9Rx8apdBpENtMizZCo7cDFcM1ih67n8kAQS8KM2JS7Az3h9CogMVGdNhp1jSN2GrgccZsANtARMZQeJ4PEqH74",
  "key32": "4seZGfSFeK6HNnNjB7HszS5uABiNRf7VHNApzrWHjhVKvPCeejphyd9UGTyP86dqZNki8AfALnkpAuD5L2su54mH",
  "key33": "QsUTX3CEvzN99B6UqxFB1WWKE1f9jD3XD1gEqQvxsZK1fQy4ckBr6yLAFWoFseVGVxoEQ2vy6BhDotd4jci4Nr8",
  "key34": "5jdFW7TGHFc1KAXsTGRFMpJnY7Vhf9BQPki7E3XGnXRXPfFetRGDX8p9rwCXt1cLeX9Qj8DxS5pJ8NGpJsweMici",
  "key35": "5tWSNXkKkit7PhsFwiJpvZNCEBUk2pxpFJ2afkd89jDJz5EHdQoe6tje2vwRpUtFPhh6mavQC9RyUJiiJWpoyBCX",
  "key36": "4ntWeP86G5Q11wnxEo7YqmoDTiqECZKRR1fBDVe6TmfdFqKaaS4n35uk9mizcdRfzRdS8JcjvgR7RhrRk6DAMU4h",
  "key37": "48kYGMwwXqc57341KRRyJYgBHtZL6HamZucFtsPFbSbJ93z3oZP5ZZ6RboXYwnKRQ1mytYNLcXXejnRgiJE4Kcsm",
  "key38": "XVct4rpN51y7FYZD5B8kP8PEhu6cPnYPdWgUXdbftVnfPgKtamcZwVnpvwN1neLVQSNbEJzyNNWxDH8JHV6ddtK"
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
