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
    "4DNFNKNZaJrkEkhg3DRBuvrbS2h63oouVUQ6iqTAFTeDQchY1JqZd4upiVHMB2178BJW3PZ3KHJuvoktkFhuoXBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmRqkTp5drmbKW94HbF3EU8VfRuqXXpP6Uvbu4qd1bXq5rjnRTJTWyJhWbXipQDqqHRpJBa2zrngzVuk4DSeUkA",
  "key1": "5eehrintctAVPq5yg19NsuDLqvv4PQ6NEGCC4v4Jo3sgHTH4XsCcLTqu55k3jDdAPMagEKjcB75wgf3S8JjVXdDP",
  "key2": "2kNxwitqNbKCngRj17YBVXgtDQBkd5db4mxUfRieSzn4CCbzbXdtDmSQBQ4ugXqwg1AZAKj8QS7ESmosxHfQk4J8",
  "key3": "2zb7FJuDuExwYJCkWcp1GYogsmxVHZZhEN4K4fFJcGq43AWZc2wLQsfsQBjen6X7n4uiF9NBwiuqyh6azVZLCCh4",
  "key4": "5rFZP85fAYZLx9Z2EexzSVmkTmaH4ELVLv9d9Tba4i6iNhUp6Mgn36qb9CkdYsSEYA2bo9imTXBxx7epUNR9pc5Y",
  "key5": "5LPfxvCARjzWH7uazC6CS3vdyEXgX8CHjwmrTcG2ZMKgBXTiWzRwjJih15jNHZ9GYDNzfT1STksAzDScM6a2NMJF",
  "key6": "U92TRjHQJpHTueQibJgsf7S5uHmtCbYyA5t5hovTfLQ5pUbvHhj4nwAmePejdDf5QhwiQ1HiDGKQxt5fEJ4gojp",
  "key7": "3YavpbZYFn6tAuDzRXRtcMLfAJqf7mmc3MhmMvrKGazZXgBxGK9W4tJit6Py6cZsAsuD2x3wwSqSGZ8M9PpzE1FX",
  "key8": "vxCoZA2gHEfPqcscDhZN1JbdFyEbPvNBeNaLzkyeTHJiyM3nu73jCCVQJQv9vNFruk5epXjpu48MKaQKcHhh5RL",
  "key9": "5oZHRPcB79PAZz4k2tR8PG7qTWEC4t52qZUHNU6DaVkt3AiyYAULrg2z2rAens7NfxxgUCHpNzcykfauwvbm8JtE",
  "key10": "5YJZ43WpGTuWa2t8VQF1gidq5GLHud6vXfkbTNQLLUsQeCnf4A5Nk8tGYna18m5cohTJPNnfhhKoopNaAkDF8R5Y",
  "key11": "4xBHtg7zPmhAsXHt9UC1ao9hAyhoqLhEEFfrqgbgyQ16TESdEYZVXECo89JwEUc2MywLMZc8k71hAXQCVwjBcVSj",
  "key12": "5xr3ybEGzQoAqx7KQhLF1BSfFyTCYhdH57JUL1i8rRhAbcpg5rwSUQnKziyPaSP8iHaVWhbtVZakrCceUngR2SFs",
  "key13": "57zXzcLxDiHZijftD7fbC2km2TBbwqzR5eWsENPm2K17GpMK318wsAWpbrYg2sCqLfxR1JF436fhgu5AkiBqkTHy",
  "key14": "4wtgdnTL3KPPXPHdgy7T69sAtdyBS4p32f3Q5eA9nuXYqUMJwQXCgsyQFgSBD6jbqsff44LyMAfwK2J3dqg9Qi5e",
  "key15": "5n3zvhAN9WZotTcbgtegBMjKir1vP3VJX9yJXdwBZxXwRdPQcfmA9epg92EsZZVoNrQcJyLZkFtn9DwMHHqCniqg",
  "key16": "4dyCv9KdPAvvti2rHGvuBfgLY4GsskKgpj1Lr1Tmbq2s9yeY1U8MbL99BUFt2WSNBqkevzp9ksdzupAZZTk4pzxH",
  "key17": "3ooE6my26wXXWMZk7oFFpsTixCXAYgTJmjUDiK8FKT6FCPXBCNtPjyqT94j5b6HrfNtX1yvvJBC9SLbvXv4bUSZo",
  "key18": "3rAwLmEhL5KVCZb3fWPKVU7LqpwiYYPAeMVDHWUBWjsdpnzzwXeuD7Rd6r2j2NhuffVywF7HdbPPHzqNcs44GU4q",
  "key19": "5GWuXHkPKhHhpFdJjguFiYhCBVk7st9TH4VppCC8nzzgjNJmzD8g9uF2j9qBdAoeFZXFumTzuQnfWz3TJC3yAgae",
  "key20": "2iYpmnz2mCjVTkW81kBjsFF66oDxDCJjS4tgKesCEXYdRHCMxrkHoEgfcK7DR89ZQeziQCEKsh6vFGpsTWodpNTq",
  "key21": "2KEnrWgdiJyDtXkar61dKyCU74FTJdDzMdnsTvN4AS89GzT7F5DY5DnhXdfa1f65rXwZB4frT8K56hcMAhJvLUPE",
  "key22": "E2zLc8hYUegfFKWnfwcwc6Vkosorbe2AvZnAGvYi4puhXRrPs25aJx8QRZHq4bUUHxdjnUwB96aWwLvG6rvUuGq",
  "key23": "kvHvDNUj6c7FEPTGyytv91mmxb7vJKiMg47XhL7eHTF5KUsZJSfERCn5G8Jm6HiJZZWjYA58rbSBN4cznYS7SZ3",
  "key24": "3miqwaP8DqMS6f8PPUwic7b5vhRmo7STGXTKqEFTZ8WsAPuqaMNdm9mQy2jf7Bru1a2vbUqSoTa1xYxMrtCi83fk",
  "key25": "4YQs8qwPH4W6APFeeZ2aDSv19MSDdnkFM4mxGfdB62GkWipp4AvQJmhNWxprCSvXEbFRXhEMtqyacyJnAatCmqdQ",
  "key26": "2vRweDychKeax6TkT8hwnezz6BPy6e6PdM7j758KuvtaraeDhnHnW9CMqZBtFNXSndMeiNnRW2gYz8CDBN7DAo1E",
  "key27": "2frLSyh4T5Gmm4BHXVWCqo54NB662mksqqBRaHVrTxvh3hqv5MD61gWD6VLfcNnX9HTsrjH31u6KGunrPMS3fs76",
  "key28": "41mpJom9G9EuDibikwE1DU7FaLXSGeosdGVWkm5Qb9f6ppFX5j7xsxgKxeADuZ93HSMhgREbWDo1kYfMZJVvViYc",
  "key29": "5JiufpAQijKzEpjFK931BeVMVgPXsKno8BxKYLbtP3JeLhePaDeiocQkJkUhSkVMs9JsQuNzczePw4NqyotpdgbQ",
  "key30": "2Dtd2sPM1WZBqJUcUFMB3pKuS4Lpx3qWQYwZJe52kjoM4UYywWhfsiKJKGftUV2yYHVMn3th6v59LYc4pzLvBoZM",
  "key31": "5PJTyVGVG32W1utvmaXQqqCoBCsqKH9A4p1sbPThhz893KrADM2VJGtKgBWxAzgdWqppEtuDwN3N7D47i6eNkywF",
  "key32": "58Qxjv34Ftmeek2ucS6auh5xsigAxvec47zXuqQz5Fmwc95EubWn9TkFWvMMrWeJL9bdWUahJArhCKFX6ueTyLgx",
  "key33": "cgdjy933TG9HjF8vsMmvopQaup9bTpPLU8XWK1oZJhr667Q2q8ykTt6ESBAvpusdJfZJPju7aNtRXPrdmogxdKb",
  "key34": "5jvquBP12KoWxe1t9U3eBrLyqxWyF2xj2USumhxsTPgptRPQP1FN79WaMSUin51AQuztoCDLzWKqtbeUKi8noyMs",
  "key35": "5Y3c7nLQK7dCV7yTZF9YoKbtqLkHjyHwXHz5dewoGWfYUmBqmbYwnkd3p5nLiUmweGvEMQgHraEFEPgJQMenvFDu",
  "key36": "5CQU2GkCcBh3XSPFxik1fi8NEkrmsTnCAc8PWQ4R9bzVuNLXAtZ8GF3z1Mou7QhxnCdKe8P24c63LhWCdz9Qcqwc",
  "key37": "KcCp2nan7LZnEHqKZ3gDuMGruPXS6hfXdEKF8jkYSzFLM84FD1WfbrVervCipP4AMUJW3kwXBtdA8tw8LTGF1r1",
  "key38": "2RYAG2cwY88ygnjPVdJ3SJnYouGt6aC86jogjWufnfp4JrJRRsCqBgEYvTxsbPDkzjHBLqZWpXGp4oQ4RGZEzEN6",
  "key39": "2cNCtnHTamdYAEygzkr9rgPkauGfQ4aVuHUwNbpeZ7t3hrPJkgFvnVyGkazq3KXT6M3na2feduFD8NtXTotuA6fA",
  "key40": "4y9VbEvs9veyqreYyjT4AmgVSy4vm2TAiF9h4b8QmA5HgLJbcPfWkV133Q56Tw6T93fHPuft43TmZR7nHHTE3pc6"
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
