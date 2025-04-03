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
    "25Fj5h5v8PqGJ9z8Luq9PfaNxStK9VYGWLhSTENbC7VjvJtoavmAcAvvNjJHQKGPbXCrsBxjJ9jEdXJqwwxW5uQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAJAP1ZjybmTuhSSrJ2XwdwwdC3MepduC8QQYWtL8oPsNLrg12apGcyQpGFn8Nix56FdEXM4Grd3etwjg4AfMdr",
  "key1": "4EipmGSkXD3BbAZ68ftntFY499N7VxdEKhs1XhVDcCn3ooq4fQQcBKHFUy7pBcZGuZrKETjg3kcLh4Leqxz4FQds",
  "key2": "3up5YF35FMjbFuuL5Ti5aeuZvRjmNRDepLzjDGqTnCorM9E4kEonArVgEQgXoEcHK1rLak3qj8HYvpjLKVwCTQqq",
  "key3": "4kKYPnkzdMXe1RskkAMwVGGta1zJmrLLHh7QNFLKfeoLBthG2kLQ3QZor9v5vNZ6RgbR1RuG2gGJyVGwX3Zpu6dn",
  "key4": "5b3FdyXhC1jp68vGq12v7Yb7dmD8jj1wNoqPy5CPvjtXdS3e1RXCGs3vuvVoM2KVWPYuSB29iMdLbdvKJpzkMMbW",
  "key5": "5GjcgmcC4zL4e4oJekUb4McuVFQ4UamVAmsGjuEsQiTBSgyzPKExKErC3ifRK4GzHTtm5e8uteuUw9pYgbhjbLkd",
  "key6": "igAYAQL4NpKZZ6NLTQKjRyoqYE6MVoZhLhvdb878uRJjE4b1yv1fFp6pHUfH228QU3DEcvDGYbXitrRQcbD1KiY",
  "key7": "5ANoVYXGacrqPCn8TxiJTyN2xTtk3E1yixNEyp1dwGpZXN8ePS5s5oQFZrCbBCcAENZ6mBY9eEK4LdMjTTZ7h7G2",
  "key8": "4Pf5QWVfWyK97Z8V3uDoUEbxiFrTBLwxEZ1pueTcaP5H3EnAFLmJaYcBaQHKkZLfWWEzSUor25WoECPyzJJDQXYz",
  "key9": "55fQgu5rGeRK5FNJfQPYGt29M7yezRBb9cDVFWiS6jayTZpcvj9tGWqBNKS2t7ZgSfLsFCMHft5TjbkXfeiwPbsT",
  "key10": "4C2APD4GovjM5Ts7dp2pnW9G7WugxuwSnWiJtqWDgLNC3kAJCWQSwE4HeMoBzFi8WnT58bshyjuce23V9i7RZUcr",
  "key11": "CPxCyfK6tCCngBiVgjWyNpCtcixzwRhTNEVHtrAWro1wGtBzCw6CHSQA2fAd9XyBNNAayoaKNdVLow6nTDVrQyr",
  "key12": "3QG5v59k3a73TJTNEo8iDBBHREFMWGtjpmAATQDA2r6Ax2iju16deZzxbM6e3tYcsDPfxX35pVsLMn8GQj1uVNDm",
  "key13": "3pKEz65kR2aa9JLdKjDXpaaY1C7jX8EK1BGSwE1Vf5sHNAk53refPLLjAWFpsDC2pdGH5tuyZyCkqYuEZhUdE5AF",
  "key14": "2Nqms5tCxEWcTe4cgYuhvx6gdx7kCJJhXSUQs7rY2cSeR5gkBamjFjBR1KL52jncvN3oxi7mrDvkpAiuRUPnoJPb",
  "key15": "4wQYUbNdfuMkeBAsu5To4YbVHx8jDVpADoRyZAfVevPVzKfuPNF7KefXH4MdGfiUqu1xv2mVpfZEhzvoVJgCu2RJ",
  "key16": "4YMMUEkXB13WhhYsMaz7xcjEuH9gFKUU9FQEzt597vW5yzKfbkzVP9pBoeECAhfeadMvyjUrfij2bAVsd14eTh5t",
  "key17": "5KJmpoCC44WRpErJADwsGQrmjQr3kuayx6nMrHRET6zFa4XAHWWnziPGa7wQKC66c31eKRrXxbtosBpBcUsAJCS9",
  "key18": "N5u4q4AnXuUSgLvrVQxyDcFgyCEv36cdnYeQsscbZf4EW65iKtRFgxLqB33uoGtFxYg4aZxpMfp7iu6kzFQ3fpH",
  "key19": "5aWHWHmSAQjPAGZYaeumPZrn2UmCLpi5YjUjfYFpf8hiBSm5zmV8nvUArE9PnqBY1n8YbJRW9JLEHk43i2wfrijB",
  "key20": "453nJWUt9yMdsbLqAdFMYzwMMjmsaGR6fR4qQLg1Fu84ePGD8PmfBJoyoV5qkv2MbJQvRr76WQxdJGUC8N9QdJjt",
  "key21": "4x7QrUEuKAGpBpFQYjX748qu8PPnQouG5EEXUGi7RR8j5GWTCjdpbeuiHXD5ARtJedZ7prF4qXt5SpmvJmreJiaL",
  "key22": "2zfqg8yxeqAeNdG1MsobRfaBTH7hb2rpf3iSKA2kxhhf6csgZF8V48MQvgwAwSuTE86zmeHb3dcDG8cbvzdxWJZg",
  "key23": "QPoKDh14FD7cNJm5bx4J5dsGVSEkaUPCV9wpui7TPLooVFQBsh2MFKafEA1E3RH1v75Ac5uBJATazbCKQuCbgq4",
  "key24": "2h1UEAkEgQ1Zv8LXweqkLDk6PuxLrxbBBDNfB1KnoyCEJiudzarUdSauz1rbY8Yi8UDANjnYFQsM5iEjpbUKKuJk",
  "key25": "2NUawQB5nwyCyGroSU6JzMGGkrV46wjS9YFY49gLREnAveRgtpSYxXsavEazUWkvP3Zmu59kZGGDdKEzue9V4Nz5",
  "key26": "SiPZ9WH3DjntZBSPV7MQCQ8vRaXMpA1BKxJ42aznGw6y9ayU5ss3YLdkF4DRYfaLpGtUMDPb9JGnfCffVhZwkUD",
  "key27": "5C8MXwTe9p1CXMYcPZr66Gkodq6WPFoCinNfu1Vc3e2fHTjDys1MQy1guovxGDhXSuKKpPFs8CRC2u2fGWSq6h4G",
  "key28": "3XkVm5W9oyjBPUgqUQbgXm9XNpLkEFQ2pSbEq9yyX37pxzB9ThjhorDQQXnvC5zYcsVMMDQK66vgeigQHsaNGcS1",
  "key29": "5MFP3bvSbn7bqozFAtjsdkGBVHtWewQGMhQYvFdmbHMsT3grfYa4pXuZT2jm57fJJanXFXTnGUkYkZFmW4nLjLWJ",
  "key30": "49iwheB3xVz6SpVDw8KfwSdSe3A7Qmp6iwDsYWTDXHneCrLry79NT6Ygg7ZmHEFWRpSBjwpnDLnHGV91Ltsz4LpS",
  "key31": "2vuoDMzPyS6gcPYSfvranzN9uu9xworGtPHV6rBQCTCmhCeG1dfnMuYKbevvsrSevKcBEmaLznKRWhZU1CqpY1Zw",
  "key32": "5gWsFd3pFRLm6jA9H4podA1d18A9ufD7YxPLynjddYcpbaSxU4Cfdnj6cSBmEr81thbzy3FxC24P4WKjQtoMhhQi",
  "key33": "44Lfr49vvgKutMi6Sphje6ADiJNX22GSo3Vo6K6ygcYSQcQpBqpPg31X6yhmNTGsrTDe6xLkmLjhXBVADNQj6bKS",
  "key34": "2VecYjQ3KHxAa3nvjQmpBtiirQ8rK98GjD9cjvYF2aS1fyKdZsmxKo33RwhGXC4cqm5fc38SQUimsEKTGGb8SdB8",
  "key35": "5rmuwHf6oCsGgEQdDoh8UR3njJ34QKwv8qdPSvuBTYeNsjSsSP4ESJJSUdn9BuJk4dmkGCTNKt5UsDhqoXvvNwn9",
  "key36": "espHiNF7btEn7GbXZPu5g9KmvgmXDFePqPzR2CqHySZwnwJh9wb9mK45yT4vS88hjQLdEmhNCJz5qtQZ7ae1YPq",
  "key37": "4t7E8HYXxi8oAAcsuhiXJJPj9AbDNNevgXxxsHzWNTr8ca5KXLwpxrUL7SSpe6yXXS4TsWoZyY4Rg8ZwMnGuQyoN",
  "key38": "29h8fRTwFCKi1sGEqLKgKaQtszfG1xcMupvhQK5yoP1tSpcEhiT4o36Wbi7WubA7E16hKHnZ8TFL4p3z9DAxFU5M",
  "key39": "4cgsGB4qKTeLrTdsQ5c5nwBMPGiH35Fb8GwUv4ZYAsvHiXK1qC2xwLe5LuJrz9LfWtprAhZKs8yF7P5SUCYdNjhB",
  "key40": "P6hmLoumRbVeD64jEMBdue5eaBmpqB8eMC6mEBTK8cxUdhT1MVCbSRaBoWTbNzUYkHjLANiCx6bbmg1ywXsCLaj",
  "key41": "2vX25oN5bfBjPrXBBiTAXXjf2f1jap8MRvXwduw8Nua2GmLQQu8QVRvh8XEe9C33ZFKHtcDQ5njRUj79wSpzurKY",
  "key42": "j61NJcWES371nMBESjkKXuZLz8jBTidZ1NzoSCi2oSXbGwQovmh7AFa7SZKeoPDfqHMYvo4wuHUdPuCva3knHB1",
  "key43": "2cHHs6XqunxDzrKtUpUR1SFzxq8wPagCJqK2esER4UJ9aokRE8yxuRAf9oLm5dxBeFA2Bcg6WXD3JrVTRiRvVb4z",
  "key44": "3MbFwMumUvdrLfpZNxq6pHUKXyJCcHVcZRUihYyHixVKzDDvTw5avsqckhKTSBVNhMhG1n9B3cFZjqwsQAoLELDD",
  "key45": "4YcfwDWdiU9eF9NJVoPB5fFjeZUeC7rfVhML3MVchsLWNbBgsiqpSmm1ujfBpLkUtNnB9noX1qPdxTSHKCPkmnAP",
  "key46": "2y7FLvTMrM4fJoph4KwHdVPcCmNDfcoVJYN9yEw7jg2N7vU2vwW7cDQ9cpotfLZT9XxsLQir6MffaHELzjX8LcD1",
  "key47": "3kA1MHnhxCVH8L1yU4UYEqQAVDoyiLdBb5G927abnKQHZsQSEVknrkUwYqDarKDGFN7LDGhg4fvfv7aXwfj6RWnU",
  "key48": "3Jck88xDRNZ1b3LDLbC4Pe9agUznHuJ6kk6XT8W5xAXCBtJm25JA5unV6NMjxZG2wKBkSAv7rq8aGuvqNRXQR3fC",
  "key49": "4mfSTrVWae2c2RCWc9UgugHipw4WBhEHfF1NL67fB96pZY64GiZegRvSQTePBBoWWMqxCCP5spz9U7D9tFtYt8FM"
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
