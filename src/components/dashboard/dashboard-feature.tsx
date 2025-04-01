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
    "ZUVXi579byEWvvbgVNH9soxFnnFwzmMiT3BfdrRGp8vL9Uc9e6t3MkEpBBa9XiiNDSBzwkLA7TfcKoQfLnqrf9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhUMMo5Ld9TqYSHo2UniqSAJ3jRXG9u1MLDbSFF4yih2bYHqnMC2VCX8pKVTHbAB9QyH6NCfZSABp8mES8cEEjj",
  "key1": "3x8CRmYWa2s28sHbMA6dS6wt5xvNvwPMvukfBuLV1gHWE13kKGMXWdgthWtDyx21LH8Kb7BcskbjVkgV5J1NH41B",
  "key2": "4dy7j1Vp5F8fcyrg9gjr52RGV75rcBEyv8WGKdZgW4NN2jcpb1X3J2MEubeVc7G15Z35Lf1WTKXmb8xU5K8Cfdhy",
  "key3": "yBZRca1hjxqLZcXDfNy8RML6zD6aGw5s9VPksEWdGfAGQxKXVdyziJf9JT2PzxaakwKWNRm5Nx4Y78uHQCoXxhD",
  "key4": "zS7xMtEikMACeMQEV7iGVHiABL8FQhXcgKJSQX5QZoBmfS5rckWDhn5Lq8nijab7Z19GpuB6j95YvDS21cuPETq",
  "key5": "2JvhBC9G1ERGphe9WL4r2PKPHAH3Ac1gEXqzSq3SisJ3So3soZPecrbxtUAusjHf8ZCCXgWfSdv6SnwK8xFUnDMD",
  "key6": "3qxq9GvWEQetfyvX3NiRfatMKPT8q1CTdP3jMEFfRTBiRvRMdDMGRib6RKGfpL2ZLPMUM3VEe5EQUTgyf5LtanvW",
  "key7": "Wj8RzuoEbG6Me7RnZgmpqiV9jzbmeCUe26ado417K4rbRnXWo8RRBq3HdpmZTHbcFTTzm1XbP3mdnNweyfNSmuu",
  "key8": "4BRMs1dUxDfgsAVTKVEyczwhDfou8Uu9sqvdwSfH5Gk3xT472D2mJZ7tQJKPvwW9Gx89ZqfbRwpZA1Kp6RGhu4NY",
  "key9": "UrWNVZarZQ4DuPzR5F9MkxBRr6MxTowgWH7ApH1gDUZNNH95MQnQ7XKgTk8LCtkDRgCa3tzVnRTo7cFByxQfWQe",
  "key10": "2dXtTu1tUTGaV4PEmjKnz6A7gfjiNVpk4UoEZw69v2kjRVBhXetzsd6xvKRUToddjKwTGyh4DnBCACk5phRJTMbr",
  "key11": "2yRutULKEbRWomyohwYYG56VURoPSKnc5FD5bmVAt2gJgeTXGxmGNjyexKrHW1XaE8gqyMdaBq89rH7pYyrsApfy",
  "key12": "3yTE66hjQoBsrjACZ5BSaEv7Z3wkErnPTjRWSRcPd86ktMZjZLeE7Yd9KnTK4FAPiBHSveNGtCgr2PKxDWmwq8Ha",
  "key13": "C2Qsz6L83Mfh53zNiUjMR1nYYH9ZU4Fkav6q1VK6TS9spUbXqSvqkwaeECrGZD1KVc9ETr3QLu1YMdz9eMzM8v2",
  "key14": "5acRy2QTwnauDVJ5rNjYcsMgrhcB3j5pr3js7EMbz3sZH2ks9M1vaJfLjRv4kCpWQCFSxzXkfDQxdPxVriqzPNFf",
  "key15": "2HMYvYm1d5gpwk9YMucRppLMqXTK33Uq1oTeCV3pwjGzq5PQTGWEqpcW7NtBGD7xTqyYyikiVw2ByBWq9sNQqRFb",
  "key16": "4xugSuq4jqMhbqmQSGNYiv4jnAkB7ojJMcd3G41846pWJqYbFaB4KAmtQrCTvupszz4oNZFMBqv5GexURKo7vrHM",
  "key17": "3epRLdwp5TdPg4u73gw1PCGx8Dmj6K9WxsSQjmVrb4z3ZnLpE2mHMdvCJsBZsnBgJxGRh5CiNYHC45ZSKBGm5H6m",
  "key18": "3bcH8WJVynEnece2LzA9gac6NQtTu5Byj7dBYYR5ek93XzDqkPyRYEsEccvKSW5LoJAVnMtF5SPirqULYucaN5vW",
  "key19": "2v3BXjzbs9jESNsYvtaMB3Wfib78YWCgryfCKBUfLA22UP679LLG879qQTvsNcVDhku886957PuKciQ4WCf6MDZx",
  "key20": "663P2Ke5WzqAUvEHcTGVrpQpV2W5c52XE18mpN9WuCTauwfKrSGbMe8ShYp57qjHroW8PKb89uVJVHHmFaYkyfAn",
  "key21": "5FHMfQ9eyHeW2VbziaGYk3s5S5bNmTrjPme9Yv79TwBX4UDbACzaSbyBcRXQ6MeJ63ZLcoWoTiN6inFWAsJ3vtPU",
  "key22": "24pWL5hSJV69i9X7DoUcE7qMDKTeMw9GHfZecnh2DQxDTdJW3beoLWTieH642gUtdZCWGeScfbjmMaqxPqawHoK4",
  "key23": "2MSo81pU5NCD19xJY1uGe3wtX42UkFASSPkjkHCEQYbsMBJrhMgGxLB6DTNrksJcfriWNMC652dpjkf7eesxjFpP",
  "key24": "3NwLY28urBrFnWkZqsYcWd1MLSPWdeCksQwQGjogcrJVeRQzo44NNQDvoWhJXRwd23uYxUrQPoK147iVdnKefxCw",
  "key25": "2dou3ECchSbRCBHFaXWTt3jFKuZYPoordDQ2TSaZPwhN3QpY9upbNqR5M1KHogGurGgq3QzAY4wwUCSZZdodBZVg",
  "key26": "3j9TSQSHmyGA2CSmouBj5jEw1GsGt9hNo5ovWudY6vkd7GT8RXH9vcQW1GEsVzieEXHT8dpGi6bmhMMGmorPS8zT",
  "key27": "3iuXpF1pCodqevMyZD1woxaqWRk2tT1gFCjqxZAoaJQFLU2PAudbK3K8s9s56GsZmDNsEtnexLPKGRUR7MGu8mSD",
  "key28": "5jmVQVrgLSFRRVbnBpDbJ8miNtPgUQzU9fsQGxVgmn47JEKzT1AMGXbpynkuDa3qUUNErrR5bPXhk1d3cYCsMnSs",
  "key29": "5Aowd6fUYJQjNXCdaLzwrvMxY36EcFSLYY8HEJTn9dZvEuuDvpAnk8Z9KbEvyDTUF6fsWqbtvsgLVJSpQq1oWNwR",
  "key30": "HPVSKQ16wbN9wpUkJpDfsgawsCQjSFgb94XNRVk67TCiJt2jAJjauReRecS33TofavUZJfyeRKQJFrwEvLBnPut",
  "key31": "XuqEExRDhmvMgmmNW7AwjKRiGuqjBEPFqzJy31qVm3YprsjWJrRtuWTojUDp2iieGyoa2JfntSV1NNfggeNhkoe",
  "key32": "5U79Ri1dTarTQ35yVXytwBEi3kD6LPMAZVtfmmwZR3NCLrdVwrX1ZUWUfapruRUkwBf6bQzg5ToWQ1SKtc3VrdRw",
  "key33": "xhHadtzKxnaQpv3p9faQDyQZ5VpDPgRmcHaMje1RL5L411nSwu1MH8tCZwrb2L2xzHkMFztjYTvmSmevLYBvbb5",
  "key34": "2GPX72RfUhD2QxPibaNxvuFCq6jtnYA1oUQJxYtZJF7MTrP1zAF1waW4EFw2qoGbDbQr5Mo4W41M9aqBtRWr7yyB",
  "key35": "4z7fTu8StNu9KGezzWsbQiV8DJG1Jx9G885LzA7BignqYwLJ9KnVhFee4sB6ywr9HdbeK4tZm2MGv9CooxG4DKrY",
  "key36": "35bK5hZZbgBdwp86LZWBKgjvwjQgGLaGHKhF2sjQXqtrrQzMvtzaJfoYbkVyKp8MXVv3NJ7XSKZqydR2B5hXc2Xo",
  "key37": "25L7ohgMFek1WmfTpHtXaVDS65LCq33ypNwCgrok7nPjVxxD9MgeD3eRStTv2DHSQLj1N7xfXC2trE66uddXqoPB",
  "key38": "YVpjPV96jR7aA5o2SJypipct4YmaDi7D6AEFkJJEZpJFHCnzh74MBr1Ja4mUjVkMY2Sf3g9Cc1ScFPQiLhZjHyw",
  "key39": "3v63MUQpHpDhTWhbpzFe59M8QUPJJEftvMHMaGwCaX9r2rhu4JvisEVHJSoHeZgCpiXsbmKUc5sfsPVpZd23jeAF",
  "key40": "21HS6R4SEVCGup3suKH5xkg8s5mhujWD4eKr3ad2XzBtgbFQ4HV7FeWndR7FyKrV86Yxwb7J3Z421xvs4rJdHNEN",
  "key41": "vCRCLZgwPMhpopyyWySdFbpBHNTCP8VPMbnir9DeM9TeSv7hyZEiuVbXjRMsG9UZCsGa6gV5DotkvSCBiezUGLg",
  "key42": "okpEkWwRgNRW9ijMp2nBoMFN64EaQAXTTYe6oeyeyCiK3jYoiQsj9gFPujvf4zkrLehzXr6CGnZaQu8r9UbrNYX",
  "key43": "62fQxg2xYUjsTxKVWfmRiQzMAm6EvVKH32X2HJa9gG9qGUFgzhKWQqvjtgRV1ToWhhHmPEysEQuEUk1M65kFwajC",
  "key44": "SBrt2RvABkyaXvByudMorZEHYvThGLbtyiYfDVW4JZhuYiUEEsTi8M111wXCQXMYmYRfGYG9vT9XSjZLVF7igo4"
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
