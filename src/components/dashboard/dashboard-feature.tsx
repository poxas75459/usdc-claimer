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
    "4mhCmZKJuuFxjZDHGz27eSpZgGdNjsKKBmZ5AxXU2wjTE3CvACaSA5PE4gx6VSuek8APn33TopQuhyHEH7NwC5hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hud3bjcNpvBQZwr9p1uS7ckeieB8SdwtSFqXbX69p6YZUVdnXwb8zushqZruA2Ffph2n9fr2EEPS6BNgpZvmsyU",
  "key1": "5Aye5ardf99V143xxkHCPnqJQ29cZzaVuKEM66QGB11z9NVSXSXc39DgLoBCjtDDepXktgAb55VyeuLofxQA5LhA",
  "key2": "c6PQ324sKoNrCicENrys3VTmotQShmTEsWa97XVg9ntd7vE5NaQ5thiZjSUsV2J7jKVPThc9WYrpm8YC9PHpAdN",
  "key3": "2idEo7aSUp5YgNkGf1vBq8tBDFauaKVCcfH7yuaa38pztjs2CXBEeNwWF38yYmLJERoP4MoWoAnSeWdakx2geGFk",
  "key4": "4viBuk8aChJ58W7P1S6nugHDzVdj3tH31FdKhpPJxwC1f8TEj1WQH9ZfvPnKYVjpVF6iHrvouTKrRrThvPXA4a3y",
  "key5": "35LJuhcFWDC3BqTtDeBXFpjb6156aC23s6hxdhnqBy7DBhdGUSubH1UvTZEqrDpHULqNK2rj17aQ2MD8bjk4sKUH",
  "key6": "fTrzJRhjnGpyxNGtHF7yrJRhon29qaPZxymGaFFT9WktbVmGUPhy9vFvCw4uZfb3rb9pjBL56v7YdHUjF1NBYvg",
  "key7": "4iReH4khW2e8QijJsK8Wkhc98DNfxg7pvA3cMk541r5bqaSC8D1JwxWfJWLmZDhnPn6yebFmQjh4b9sbvU4GWdFk",
  "key8": "348ZSGUo34sxpE8nNk5KbaqQCZ7x8FCUD9iaaW5tXizsfzQcu6j1wHNscP9X9erKk5ZGPADJZaXEiHBsHkr4vNuu",
  "key9": "3dXoRQXy8FPc8R6Z7jAr3Vo6MRpFfDV8V643XJLgVvS2L4hw9k2vBEad33bukBR3BrWxDQu9AuAvGU53DMvcFN8X",
  "key10": "5rLVKDDMbjWQ774QDpkk4MyXAb3C7hvGh5bVFG3uFMPJ9emdxSnjhED2RaK3CcdmvHvihcNirzi1uwxME1sctEyJ",
  "key11": "PMou4YeLJhHnAPSjQ61UJxK8zW54fDEnv8zkCdVudAfVuCFJ4azFKGRPDgKrLayPfbiwZmMKTvses4Etcrs8yHg",
  "key12": "5J4hvJoHHgMUXEWAKdaEkfKUev2sejL4y5ijLuZJhRYSmLiUV3F13nLiux8dJPXruRqH6PsA3Bz44z2RbT4uPVKX",
  "key13": "3QmxiYz2bvCdXGBeBKg37Ctk82jShiG9JoZvYxb6HmR9mjdLz3cFrppZjmLvYu8yQ2dcwydDXTWM1Vbz6F56VLb8",
  "key14": "4TiPX2s8A5SvDFbgxoeEp1YqcnPpXUkSth76hxGSitrgyGyxo8Xgy1UhNbRej13YM9ksXKbDcPdDR31zXhjrq2Vt",
  "key15": "3jYq4p7ZM6TAw44swsrXhcoPGgpEgSXVxAdHf1kmafc23pCTS2U8Qbd2pkVJjaU3DKAhuni3MpaaodJhFxMMRVcT",
  "key16": "2cEc7Xs5sF6DrRQy7dy93Y3uJ9Bq7CtJV5UHqVc1tooaeqXGzUYcNmTjZTRRUH9JgTs4y4jJZGTAqMXKRq1DDqm3",
  "key17": "4vgHQNbc2n4EBMjRtugGKuRigNfXqaTVvZ5L25kVycemEW2td6Vs1h2TaKkyZdXMM747EiKo9Uk5NBKtSgDtKUmS",
  "key18": "4HfJ6ni5qmWdFecFNUAY6Cdrg7vCj3DRaAot9iGUonabkmCskktoHrqXJQQ1HgoRApis7V5Jqo6MQ2QkfunE6z6M",
  "key19": "5Kj6du4HoeAHbbbXRoV3VrySy8R8KfRBGLdrN57unm9FCixzGmRRH4RDqvPRzDtSaaARPn2fi37eoqQ6DhRhMoeZ",
  "key20": "5HYDLJB2zun1Ztu9TTpX6tebv4byKUWrSqYAPDDkfZTmE4k5u5M6BNUckbfbLUp4BMv5stgbhsjSjF84S9YcAMfY",
  "key21": "3gTUEQYUUyYZwjShfDmR3pdLqZQdM3pLuDtNmd3oFYq1zUAQM42WsJ251aKiEmJk7tuJAdjdDs8MU4zRBsFDYfrK",
  "key22": "3R9euobGFMPhtwdueayzY5vmPBai23Z9h4EiHYx6Fe4NLFqZRtrxWBagYAGb3mtgivFE8qk9nnRz6HDkrcLPq5fa",
  "key23": "5RK515N4ts1huNPn3jyRh3swkVtDcSFxnGpTjwHUdTpRXm1Cq8aRx99hzjxVc3YcVxNgxN1QAFskUZf97Ly4qJFv",
  "key24": "hhoef2iWFaa3Mz3AroULBZshtHDaYxaYC9jS9BV7bhT2R4VVSZqDoaMu2HSxXPYQ2WPjtGqGXmxbwqp7JDmYCof",
  "key25": "4FaQB1ui4wB2CA2DeacojguNSmzaDf5fAdcKMbzdXiKi7VKirEGMLAacu4HahGfhtccAJJPoaiqGaDJCmFPiKSSB",
  "key26": "TiKDMj5i2CrqV1jNpwxQ6JMgyuAq4YZWCawqpaLSCdpWVsNCWUKsUCpxQoRo3F7Ug9rXnytsABEHi7cKQW33FRn",
  "key27": "3eYqrbaSkhCFqSyvCD21teRMhTLyij4sAcedwhu4GnTMLNB2XqtkSPcTk8ry2vX5Fn4tfxtqyfWwkjqdYaskPiJa",
  "key28": "GV4nqis9Ms26QDa7qGfV6u4uaWGEGAbapPw3FWMhMh5y65fk7SLzjvsFmzctiVgkphTRFNFemsRxLbSrESCxyvj",
  "key29": "rcNfHukEQiJbQY2Rbos41AzTHAjUphDAtWx8fnDC24R9uBGXCFGuU7wMt7UBt8ZwojyP7CUmXHoSQqc6aXQBm3i",
  "key30": "3Jrsiug196iZWtouakLYJ2WDhYXYi61XaGR3JR4YRvThTCr2s6KaAePWK3cTGQDQoATzJzq6c4ow4g12JCYkmnFA",
  "key31": "54VvD8ZZXAzahJf9rLhvWYJ5tGfkcsTWcWdmHTzg8nMfzDxTMwcszRjeokaGZXWe82MU38cXfXyA3UVfQe7LP6sG",
  "key32": "5rYTjxyr5Mxu9gCupRFnWreoxYzDt94VyAfkeb2KUnBRc6BcfMPtfjG6UxJecjb9Pi5TLLdn6c23WH5UaDUMJnp9",
  "key33": "5iNrpNRzpKWJFwedxHyCCeFkoBGnTTLpmuF8TwBnkBLjoo7pY498SbmVsFKgQtXSh2XGxxuYqJobU8DZibYq8Meh",
  "key34": "39qJahBaeAdhB9mhz5aAD52vZYX2vyccURpzgzTjFThj8wBnWo3BMF6uUdzJtLL3ygs8ih87guFpn82Vif3rxcFD",
  "key35": "38FYNtp3HSyVKxrLMm434qJBUUDmJBnrtSofZF8EUPxjmHLroNp9F9DJoyoUXQxEvr9k6YYNLspm5zjqFSVn3RUB",
  "key36": "2CChj7F92G1tByhVMdzXfkgoeHTxwVGcPujGRoRmidBrPAcRhqonDLQhDxT3V6PRYhhTRss6YExUPn24aE4LfSJa",
  "key37": "21oeUcnifw4HfGr3gJzdxCj65yfFemxgWUyzcqca5PRKUqHWbbqBWVf3SCgZpfeFE5tKDyg13ZMfCukLpjW13SBW",
  "key38": "Z2XU3dbW2udyf2QNqXyXZjxmMQ1LC9bXWjgfN7GqzxjoWuYFfqZ14ow8cJnq3mEkVy9TBEBxeuCHrfb5LEHUvcv",
  "key39": "pZ1bfQdjr7QCATVj3steCgVAg1ouvXQ6h4Rd9s9pqvz6XqYVE9JZDZ5f4XXYAQQNsT2RvWTiMLvudCPTJE83xAN",
  "key40": "2s9sMxUdmbeyU7ogw96Sky6dEWByr7EVaVF4TvyW8JpocBG2a4ccDUKciYbMwhGNZyq9Hjxu2i5xDoUhdYPcaqot",
  "key41": "3TgPWbMxHwdoy9ocwY1KT3KZRdSnE4ezRmNaPorHBShSztBEQWbVybdN6DvuNSBb4bGv41juivgkRwzSe9NCGVLw",
  "key42": "2Dqns1fXL3APUiVP6pfq3Q3MRjvZeHWWzjRCwTRXrhggSNkKYeLRHV54ZHPaHe8NfoVrhdLG1sjNDjsdvW1TkEj5",
  "key43": "3RdPScT2svMpA5TnZuaUTh1vY5ozwsgKMa5gwCE1pJuHA9iwscDKksrp7x6eXrDsBTBXK97cyx1aCReh4eWcRx4H",
  "key44": "2NHqVG8HfKm5CFBtGTU7ixCNDNjLey9g9BcwUpuyzLPb6pSZMBXzthbNdBNfKEAPfFdyJTKFn9c9zbJU4UCvZn8Z"
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
