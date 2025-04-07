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
    "DehPAQJ2i1aomgdvDHxrW8Z66yzNFYTGpHupwM1K2DtM5TSxiSn3zD79ZSk9aRw1DXrrJMLSYQeLKawrnRxGWK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hnQYrPGybNg4C96JJ5hG9JhCQQoVnNtERBAhcFCd93hyroTxWvN3fAk6gaghtGT5nkxiGacYmdEaAezckyQTqm",
  "key1": "5jT4EVGzU9Eyu4VnBXvWsqffFT94xbbFaYcyBA4qmLXrtnouBSrbRkXRa44ZUAQtyTT8beVU7Gcuh7dUkK7D9XYn",
  "key2": "2fqELioCHrxz8weLYaeai1NuJC4dwKk4GXAXUKNL5qcj9Ugz8osNSrmQhRMBQbm75cdHJWoCDc2aADvVjrfoTa6V",
  "key3": "3UnxTvPpjX2F6eQNYuNJXB2CrS7jvFVsc5Mc8YdxhwGGcVwgZHDpyfjE4nE9t5CtaPk4z2hV5jKrM3P7bfbKjtvM",
  "key4": "3HQEsYpeYffmN6GfQi2dLkTjcPLJDU9iJtNhyhUWR8ztWwEL1nXnNbhGzig8Ro8jNM3SUJ9cH5NqGF3ebRYdysX3",
  "key5": "21VUmxquFuPeEAomEVzyeWaL8yGRpbEsD8xVNfsXRzVmq1t5x6zaAg2211vk4qyRnH14yZoWb1j8deTPocUujPgo",
  "key6": "51Rz9YcH8WNe5khVuBsoaCmGkaFpcTZ3pbTxcu2XGTYPc5oY5eKmTP8U1ogeuE9X5cFQ3zTg4xZBc81HRaXfcDa8",
  "key7": "5YvcceSAt68dTBWbTMEGCNCHFkYoFPNxeecj4Czb9GCCez9WEGPJwfWhbY6RDNzgbzC4BD3Q2zjof4bmutbh9D9j",
  "key8": "3z1qPeDeBRaYSmR2GaFn1bmvheQmwSCh1bUDj6DwNqupCTT7nnmH4Z62mgktA6qNVQYfVQ7LvxhrT3QJhbCNHbkY",
  "key9": "4bpM4evLhyJPD8sP7LjXBU6ypvcADKfnbNmMQ2ARGCiDBDnaDJfQBEPXn8zpjcPwReFa6GZNW48Qv51f3nwfD51C",
  "key10": "5VYY2YQ87JR3WaJ3tTtiHhvKdED5VMjJUW9aRL9tpjm2dynSyhaEaPVkQAdTcExvBnbRpXUGruqrKkdeEwUfe5iU",
  "key11": "3KaGoLQ7GkWKMUwBF59NUYuuu41FMvmiRiDRTmiEf6pvV6yipCg1CAcJ6p5c5U8pNUhjDmHpbd3FG9xDEgAYJs45",
  "key12": "46B8vK1nETpZiyk8EsQzee5jVf6toshTDLrpoZsyRTSVAnTyufmWYJB75TMpBXJSUkyU2sgZ1Zcj1wMaAsHpMaNZ",
  "key13": "hApqvMWZXpo9NsudG6ZTVUTvwBAzgcBCc2YjVWjejENQKrwXZFVcQPHB9C6jKuRsRADjEqsMzv9CHL6JsvT3M6F",
  "key14": "3nyxPtQEMqPGGFgydaAbvHmFmddHBVqWSXbzsDRrFFTHLY7cpBTYaCuCu5oquqT5s1xwEANUuDq2yUZYX1Yemp6y",
  "key15": "3zMb8exfThWoGAsNg8oLoJ3j5LC2WcQsjeiYPzHKJXv9to8TGZeHq4EsAqf9AHQFiRzzwm5PYZEVWeaWsXXWpyAc",
  "key16": "2hgbB9KokNHeprtNRPiUpmqzTMA3oQTxcfDKXCZykDqgi7tWWMVQQM8Qcmtfvi32HfLaoZ6AXb8qDzt7HbsCE9Kq",
  "key17": "4PEMv67RGY1NCoDd1ShFEmiBfW9iUt9BiAi2fadjAnGJuSTtVkUdHDNvQ9DeLrXZeJJ17PzzJ1oh9xnSuDY6wg3V",
  "key18": "4JsP6u3w81DiAUNoUunLWTZbQuxzYzitLjfdutEix1QFKu219Xnw24mSoWMex6dy13Acod197hHiyU81rrhbMWZa",
  "key19": "3Sh6mAruqEFhbiWKKQcY4egv6aaQLsA6MjNJCK62EVaDA3eS55gxFz5GNVN4DGe9Co9f4Uxp3i6LQ6Ewp3orHj1X",
  "key20": "9nQDYL2WF5DnVhRDVeaUsHVit9Tv6vbcPDnqdHvmR7dTJww9HJ8zV9s4VxaXqyNSSeTbL6xmu3HWZX5fyRQ9xTj",
  "key21": "4CYic1XTncN5mviJv7k37nS3hkjo5SpAju9QQa95KiEBgmXEBuzywNXyDFPH42FSDZzDLx6LRTmEv4KNtUpxd1p3",
  "key22": "4UxwShsJGhjuX8Q2KU3jRpPdprRP5oZFRzzgKHKmCMkNQ97LhvZxA6s7xhqXZgag6zJi3T6xxesVUp2zK3sXGhjk",
  "key23": "3cq8fskFHfXhwjidobWD4qVLmYFZaYwmYHhWDxkDkweydiituhBrSf9LdFVsDwBBi1tgJf8AHMpLXwPQs3ne9xTd",
  "key24": "PnyLW595bXfHgBVZejjBgf7vhYGDKSepajyuL3b79Yo4k78aKv5grBf3ii1CtU1dLu3aeJeFy2PJB5n2wkhM1Sz",
  "key25": "BmzSHocAayNQdmVSHqg84h5gh51uxv3RTEmrjCd7p13tPQPy6Xchg1PYmc5nHJYVAnaTd6Nevo19XzHjjJTd1VJ",
  "key26": "58WCaRctBmGmVZq88LR6KFS4778VU62MjNQSpW2YwurYc9KBpbtynK6ijXaQ6EGXSWKbxdKstBowTXiCJvwnFrF7",
  "key27": "4iJKq34cKkYhs7RS93i7NoGSQKsHu3wQkDZV7aq4LFkqAkEPpXZGaxk8ypBiBrWCXZBUDTdRMQZVNzxvFo497H62",
  "key28": "4SUaYNiA3khvygcNyFvGvQXoH4Db25aFBBatqKVSFgvZa5yVWGD7HpHdTdBWeuvUqTob9ZEiPG3zrJcHpFJyFKwp",
  "key29": "3RoukndXt2JxixBXnUU8HwFitYvbPudekrVqEeyf6YGbB3LvBvHcGKvji3SgS1V8Dj8vWj51bshAXM4Kbf46hBwL",
  "key30": "c7kW2dEDe6SRnvMVGmutNb4fBhiULJqbw41RrVfRPFp2VP4aGgncGAdZPg63qVuePonTrkpomLWfuoubyibEFNR",
  "key31": "37B9Q1Lytx2iyAVUCgf2XMx9BWUhSvg7brTz9kryJkTdRmKawKHqTUMFhbCZ3SuXxKQZxJ84XYN28m9Vim4DbRg5",
  "key32": "65u1EKgHUNEvCfnLuw4aasDuvkR9nTRRpZ6XnLGTi7B22DobmscwSJjc35KKPXo8Fkqh2zzoKtBXikxuJuGKvATt",
  "key33": "3mXgwd8kcQPF1YmN93e5d7Z5TBLWzUBL8861Pd6qBJoL3MCXJ6R8CcaDNwRtqCch4XTtwBZvBX97rKb8dapLBUhV",
  "key34": "2xwQSVK4nbjxoUrBJtM7tWPPvV8Y117kYRGJ8b9WjCnqV5itYKxR64JgYQX2tZTdHsggpKVMDewFRHhXdQgVCxtp",
  "key35": "37hpLBETaM6U9vSdZuxZigGzHPsBakqR3KFLCxcAyQUHwkTNXMrD3Jjtqe3XvCnQ7MPRxtoQj5YKHTJzKfwANjW7",
  "key36": "2n3eEv8BdG8W435CAxCo1JpVYBwV8HsviA7cqwSTLAURUPyYySacBo1StKRaf1XuSgVH2hRtbmNPoWHh829cAewn",
  "key37": "5zac1fPu1uNy7CpSRGEsQye8uUZ8sVVrPiT3bkfpXsUmGTzWLiD4XoqtbYjrCGYJRXHi2A7Xxaum5WaSTdqB4Un9",
  "key38": "3a6jjyE9psV7H3NqpqtCQaWmdHmTnVoLWCVJgkfEgztRe4p56kQEVoKY9g85z9u57r4A1G9UUGK3iPk6RWFVWSrY",
  "key39": "H55fYixySBWrNb6gkoK7kttcN8AWf47do3uvkGa8HsN33S8aQ6SeB1Pt6iFwcvaxi4j6AcWoJdsp8xCtS1tUahf",
  "key40": "4mJAqjYyoAVk6JhfkiZELhhkKE8b3xnKCzup7toBiqC4vasEqT3sixp9kQKyRasYVWxDvcVcfzm62M7h4tHgHhHE",
  "key41": "bGnzVgWC72dD5dQi6EqBKZjpBxiEYAJ3jSDexjGtQWYgY3LeqqS32ADLFHdPApo41n5oba6K23MkjC8u5y5jjSG",
  "key42": "5XKRFNmyaguFSroCSTBJ5f4roVw2jPad19CyLp9eYAzWyNhSbS49LESms5J4PJ1WeS2jetbQTWpQSqa6kmHmEngd",
  "key43": "5Z4t1F17gMeYfmg5ALUfDCosgSggoGWmQ2ezXJUGnquFg4uuoWDXDwEgmt4YHBsf1XVuTbyjeesYAKCsw74ddkyG",
  "key44": "3RxUtFZRV11ZiiVpATPiDqaky5ycUvo9jLNkaGu4PY6eUaU8owET7VFEZ5hneHVMNFjth8RAnBTddrhiYCaRWewa",
  "key45": "4cUM3uEnpemfTQEYWT75qM5LtGboVfyaGbbmna7QovHpdKtjCjL75A6nZ6hgAsHk7VYbsBJ5WCL2ApkPEVtwFK4H",
  "key46": "26fHgDyGWDVptrjVtA6hGHpur3iK2DPqygJ5eKyM7cP5yMjA8yd2hgnGJeUDvUqvSXkgqzHMm3Sj32yuL3G9pC2a"
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
