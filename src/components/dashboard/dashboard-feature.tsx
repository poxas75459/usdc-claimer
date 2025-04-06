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
    "eQFn9xay3pGrih8p7nBLYpe5nJzDiWqoMvNfSsjqabmqwMBQWNkZBv19Pn24tRdk2vwYvDBAdSLUiVzYgEPHyH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHgQBXyzntpUUX7Gb1oABEv2ZSGCH4fjnK4RuEFKwzM4ukXRNYTpZr6gbGNPLZ1x8iSbhHYdSWMZFdWL28F5pmw",
  "key1": "5xt4ZzpiBEp6WnUbFAqFKmiKQE5zaFsh6oaAoJkDohpNQdureLt5UShNyrf3wFmrBmTjoHXCChgh44sFusSs4f4f",
  "key2": "36Q7Bshd69jokXww2dVKRHAEguuR8r4ofDoJHncqyXY5whAtGVK246NQLotSmzshzdKS2eKd7VsQydxWjWx5Njcd",
  "key3": "5s4MpMwy4DMwXMQtR4KEKFBU4NizwLVb6GpXP8pwpPFnPS9jQfqdsBtCCwYJw4zLYRq7hyX75m6VhVhjegGGaz2i",
  "key4": "54SAtP9BiFwzYBNsuS1XKAosPr7AdbPokvheS4a2hxdQ9ppjYSYtkay4wUjTGmiLxh9hCoL5D66D5fyJhYGyLUDn",
  "key5": "29Ge56UcG3mbrLBsUub1oUnqQmTqqcHmmyaHsJgU9UQ26mXynWSsnHH6iSx1op2bPv2dxTgd1dqiKcp6bQRiXeEm",
  "key6": "5wf21ggUG3sKJ9EdJBtSP7oBXm3gSHSPG3pSMDKZasmHvWr149tyUBS6a6YGQ4DAFQgME88YtSfNpYGq6N17etjy",
  "key7": "2Uf3T9nTiaB1kqAwjCvGni1m5p8vNHiZfaxKYwqktTQRm3qCZDm6xMecfYAxVCzWSD1gPWC2KDqTg3Gq4uPgtfXB",
  "key8": "3RJYQggWVZMdMGvixbxX2BvfEFPKXbVreWjDymfUQAFcjBhsgeKZExK3XmpvLTcoheKZ9YH9oXD84MwifViwqPKk",
  "key9": "UCPKrUGNiJsQAgnPXsBWoAZKhioqqnKsFGxnAFo7pUgBNcU53N1hPz1uaghyP37mP4Um635X8vdrKA3x1tMabP6",
  "key10": "4vLYSYHJ91uzHsF8kGL6XGTCxd5CUM5abyrFrVM4EBHuSfBgPpDJJNtxz6cvZNHbkfZRH4uANpJB9pzu1nrv2Kfs",
  "key11": "3s5WG52K5PJXfssAcSuwg6MX96stqLbFMD82tC1PaQwB9vYj3bXuhmaRa2WS7MhkGNcRiyWQkrtuPEs4L9hSGorj",
  "key12": "pPqNdB4ti4nnjo3LsUj9Dy47eMg6uMjFgo63MyyQa4iFcnL6jG3bKuA54BHbg4ixLbLCxr7tBdgk1CB4Qx96mbd",
  "key13": "4T2hnUAfXLKKZkG5SD56Ry82X6p8DzP2AEFrRmQfayxwcnuTUQHUym5BQ9aaPt19ZzfH3PvwwaE586oNtajhx1Ww",
  "key14": "4Zo2DFqmFw4MpprfZsKarnGZEmDe5KUcVXyeJ39UqbzahPLQzNXJfRR4m6NERppBE8tLxwTT7Xw54iHnNkk5hmom",
  "key15": "4m6yx97TCsCvhZMoMoRuKkWAHRWHT3Tu8bmARw1dd1vLZepc9NzzT4kwnbuydTT9nL9FtM4ZsvWt6aFmqt8Uyu5m",
  "key16": "4MgVJFHMC5NXwPak7NakkACTgnBBgqbBT6ZiZLUDFRh2Kty5oMWCr4NY6fACrvBWYm8yqYkstfymWuNQUtNkNPFT",
  "key17": "x1Co64V12A2Mm8nzzDd78AzstftFgiLfZ2FbfUzbbr3BAncn4V79hNqgjn9RALLN15FnUmisBqt3UAYLLgRfPhi",
  "key18": "U2n7HTqJ9hFmmzZt9psmZrv9SNR6i6fyzbqo1WLujf6QWLkghcu89dYzNddZfeqeu2YrHQiyjzbQG1VvkMbKkJ3",
  "key19": "4srxmkHyyZcEEtR2KMEUmSmxjL8EBNU4wNMadDTmwhkS8E9LCBnaJxgVTZfo4u9d3upbj1cLWh56opwzMKh5JPnR",
  "key20": "5rh5QfNP8Xu9QEJ8zwuz7HdhJ4S6rtyKgK7SqMCCs9sxhm4T6fz8UVgxB6wdy9x2owwkueS2XBdoU5pZXg7TTkm9",
  "key21": "5VCg6NxhjMSQAJZvMijBE8M22nd9Yj4yTLVRKLepsDY4cBUxYUSzKRKpv3DKWYBi1XpaUmshGCZmBfuTirPRRzmD",
  "key22": "5n73s2vK29WX4DpmDvvNQm9hC4J3n8cDf5A7RDBXwnR1DwHeF8ibfQ9ZQCzWEW4YCRk1aJkbFSSDVgy6QJM69ctE",
  "key23": "26y6sV3JgmbWTM6pZtvfjwFbv7hmNEy4cdiH33NkzvEJezyju4WkgHabV9Zdd1rpAdmMe78bMX2UjjeWz6JDSh94",
  "key24": "2k8d699iQRU3LLocuhKR2q1QcRGXHDcJcbicjkkfsPt4wiCsGFyCHLjxZcBe4wogDs49xXY9S2zs1dB3m5HnfkHx",
  "key25": "2WznnXxK957cTv3LCDEgMkiToHJSvsoGrVGcy66DXVfbm8scqYTx5P2qm6djrajjkiRu76rcGfNb8C5ovtGUw33E",
  "key26": "2cePAioDbNrqiZSzx9gzmHAvovUmRVrin96YBujBWakAtpM28thzAXz2HkDXtqNPmz1zaasPSMYihqETDXUYK4Ln",
  "key27": "2biqMrZmBbg8NcvBxPWNZ4mDYvbRPdsbCeRALai3ectNoyZ3zbKDjJJW8ZrxAvTRQAJQUTFSN3dH8eHX2hZfWVeP",
  "key28": "23FpNm73EPzKLpqKqf9wBJW9LvGTyVRfQMXLuWmRinyciksVyhw19dNtYH2MNDgFmToT4jiSBTYqoi8bwAcgg5ZF",
  "key29": "4KyLfYA7xYkoxSLcJYaBgdCg7gV1ZzfTj8epUdVUZ5xMQbdowPtxfobwbttx9FwJU5chHGLNkighNTpr97xe7NR",
  "key30": "3n9T8oznAnoSJcHgbQiJSFDwenTWaanHCuZVCxeTKopraSefYeYoGBPCV9u5BaaXcj2Wsti5ofrq1yrCfyetnnbB",
  "key31": "5WK1uEAC3YdwmhsjvR3d68fRuGKH2GhBSJZj9sCBGP3TapAp6a2biWqHaQYeNpChLGrLoaYkre3FeNHG2mmc92Vk",
  "key32": "5rHwAuwqjfakKyeudrMu8CnMSG7UvNXhe3cVSUsdMYk7qXTWwWRnSSkVayEJoEXGZQ27jsSP8auN8bHvEkhEALzj",
  "key33": "62CUa9vB995dpcsqo71wZchoRiBdwidN6zrV1RVfoDppXcQBe13Pf9DwC15SXpvTtHPe4Nk91BbQ3ohV6FCdy3SN",
  "key34": "ckCnyXoA5VgfTnM44prpg4rddPC1oqmgWBkrKs1DNaxEbHYsGXCYGSQgeqTV8cdiNCM3Nnuv3ZJfWgStp3Ry7HP",
  "key35": "h2Edddevw4FDBoBWypTjc6P3btnZTmbMYHLn2Uf1aV4fPhWXMXM7vb3dy1vfxQz97yHTLVXekWdetHSTz6w5rEy",
  "key36": "BP4tqJJC5fzHnH6myBQfbba3ipcabV1o9kzpKhwsYMKLqqm4oMmL61cPn5fEtzULfXFjxH2DoLZPK4wSC61siib",
  "key37": "3Kp4EtTBxfmDpFUSMUxdSsrfGxMSF1tHjBVE42d9rcQdHF6FB8YEwRMQYTPm79GkofAWST5vmP9zUCfFjSGB6nNN",
  "key38": "4X9XtDtmcfubrdaUaT8Lq6KGvVhtYyufGLP2LkzF4tyKDyP9VumKBo3ihX8UfPysM4wTDzH3BznoZX9YeWJGzhyG",
  "key39": "4NQDPi8vkjQRdKpLBGrxosTDohVC42nnVQYRz2VtbNC6o3o4i3u6jnM7Di2aqKh8NsafMfcqsm5KhLSSnHp57Tbi",
  "key40": "3QziPi2WTxXkeSHYFCJJTcFAwN1q8NwTTndG4KJ5djDL3CwVaKCzsug1thRdoFoFsVnZYh4wP23wLYouudnpXHvw",
  "key41": "42xMTgr9MBmnM4LxPXgeEQSat5VRJv8f7ZWhit8Q5mf7d9xuCb1qYxd8uzqjvx7EB8vVPXwKWbawgZzrWxcGqXGM",
  "key42": "4iYheRu4wHGEQXZxc4GQyGCzZKEe5NMoDjgQyryrWTp2AoVXT75AKfqAEhGoQar3JEhR8QCiLPAnVkGUmbUZommi",
  "key43": "5WzPAshAHcGhEUykDNQbbamZAoSd7Cg1rmXibJUqjmg1KDQCjNKop5MHghesKmGuAoZZeSWbnyt8zewTbtDaCLXJ",
  "key44": "615XLEx9a9G5anS58K2WRjWkZ9zUQYjpvXzRi39JvWWVSGEKQMabH37gUuELnpdyDQ9HKMzFa8QrMijA9nTJNEE4",
  "key45": "5yKEvymjvrkMUzeRTzWiZs7TQX2L6EobW6W8R46MJqrne6JnRcEzdLAYeAmrdcN6wVsd45JHVVzTZDbAjUFGqb3i"
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
