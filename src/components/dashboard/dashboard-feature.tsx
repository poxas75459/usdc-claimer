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
    "eiHSBQyvojEu1kZxvbZstrzpuFtT7NEz1FpKPdQnpQUTSnnaY9nqGpfkpHAdMK5pF9iY8r5cZQ5717yKSJMbjSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZiSzeseWs9y2EgyYdMuiv8P6bywWFc6YjTuwYjvp6UDC6CTA7pmvw3dw85qS8ZFD4njn3Q8RYmSduWrjdjby4n",
  "key1": "3UudN7DoaMjUbg7Hoa5c2UqpCrSk9huVCvV7i4PhBp9XHMU2eVejnoKnvbePKG8VMhE6bU3jzctMgZEPbs6mGcUs",
  "key2": "5W7866K7gqinBmNMeWKxrJqeYeHRsfzRMqQ9sVbZiXeh656UryTgbhgXqCkNeuzK9vJEAEqEES2VHk32fVrESSGN",
  "key3": "3wvVew48UWdBhEqQuUqewj5bMZfAqhDPyKAfwoJFt4PNFx9AX6JLhtotvNHpRY75RBSHgfVvEjfQQUHisdpqh4YE",
  "key4": "5oPPL88fFHeW22oNepsRCa9jWE9PY2BF7s8uLAqWwq7HoyjMxpLX1r8ZJUEG6GWzNoXjjXk3KnawzFX4Tj74sUvV",
  "key5": "5mRqDL43cQ3yvhfK4X8vBf6tHgDefwSYRps9XtQJX9RUur6NpZhSvF3Ed8b9fiwGwB1wM4DmvtmyotUsNkXjCVHM",
  "key6": "hehJdqWCJm7NwpCWVibfoDo4zPr9P1eHaHDnaNoHxAFgHNcqtiqnQ75EBwQMy91qLo2JDBH1tQSgQpLhbTuAk15",
  "key7": "5LjzccrBFeazEAeadAzw2JXp7ANKefeq2tYbq1yeQ2GeBQZdpxhHSkyGvy45W35MhR37JAQTAnjK5WU5dVUYbfYA",
  "key8": "J7t8G9ysFaaFAgYXdB5tQ2TMTRDQy5A3woKf2vvDXa6dfYaeKRYKuAAsGTVvzqsWCZXYvMgo2qn7q6ViuDkWde2",
  "key9": "61P53L2zB4ofCdAPRWsaqi6YmFp3MPE3FzgQ3P8pmAdBrFQrtgbw492tqJAZ7BZc1jJqncYX2F6hSoGKYjQt9EDw",
  "key10": "huCZ38zEtcPyDGp9qM7v62eXKzRoL6K3dB28W8w12PGFuAf7JGVEdBnL9vRWHzuf4UQs7Kx9Kz4tBRjnb6hxqKZ",
  "key11": "35vwSwEnJoU4pSXLDfdbVD7JxTBQLthgEgWkPgzSayjgpikwn7LWnM7N9xqiSqRRL5N2HfBrbkNWFxyfTZmh1jcc",
  "key12": "5DvWaVpyU81sErMtnYtRJBwqGVVqLPkKUvNPzQnQCEBZR1dJVu8kTjzSsniEHoQXYgB8nF2kLe65XSkM5nQ8PT3X",
  "key13": "4kAXXbEwGaAw5RoFWaNf7fQ2mdrgjHKpEQf86xv67UzN6NXM6ESbRcJP1j4LiToLE8hdjeH754Rgqpqugh5pwt46",
  "key14": "FHoaL1MDTXKYwX6LD5xDozsj6m7ms1EmnQRaCRyrFYTUZUN3JHQTVUzEdyrEaF5ZSB4psUgvyVVwMx2Zs2pwMdb",
  "key15": "3EyDgCCZWgnCfgtMWxZTrRG238ZkiJA3nxyhBGnhmS2xtPQXRa2kf3tYE2R6MQ6nBT8dxThAFF4UbuTxief1JAVH",
  "key16": "utmYosTWQZJfw25G17dHVic1n8nY8prHuGn7udKAotFzeXr6nW1tyycvua7T3AEdpCJjg6omAfTsLcPJK2ECcpZ",
  "key17": "3bUXiQu5cuosTpenRd9DwTTxgw79YkL8Ftah9Bsabte6yzfoUGk8MwuuhvmS7AkwBHWNKeAekAVTgz9geaLx63KA",
  "key18": "5xaNnR5T3F74DoxpNAitviWhpfBKr4XmkShytGd3FWmeCeoi6RNYoUvd9VzEaR7gA6iatdaMYBSpY9RnS2cSAYQe",
  "key19": "4rw6cHFjsyQcCu415JjryQK4u8wLevtV3vqx4AZYycyTHt9DcLiHd1Ks2Y1r2MNXNDWLefjmNbMdcaqccjkq9jUH",
  "key20": "333NKikpsRkQpptJPN5K5KzPG9xeeprWwWa5CEdzhu5YLsqt7cDz9sqgLJd8EgUKfbYgAvoDbmp98GkbarEFcJsQ",
  "key21": "2sUnzpB9AujX1AYohVgEGGN9is7jW5eMCgj24R7hTMz6SYrRmXr2oazRBQU5CPgw1DxWoee8NdV4VCgRptdGNEUP",
  "key22": "3cQmwGy6QjP358vPkPdLu8XLcnHfZQjZZk1KCZeN8ZpnNF9WqeVb7hioYNFLrdYRQs3kaia8xtVMbECqF52HHiW2",
  "key23": "25MqgJuJuKMmw69rPtvkgp6x7cCRBvMJahJbnnBanxyYTF4SzUwWfx6LsZkWccCMDwnTjZT5W394AMNtfksaEJ4o",
  "key24": "3qnMZPn9U1sRyb7Vm4KehRC7apr7Kd5JjsjoF7bV2nAYZrxfaivVbYc5KjJWXTpznqw5oA1Qev5KbWeVR8u3Y34q",
  "key25": "5MKm99Psq6NbyiC3cfJZREzgT9sEzcSofuK8UBpqEbT9qEVFZdPkCkPLNx28XUWxWcmg8HaSTBBmzg9azfuAJEbG",
  "key26": "4dUAG6sr4khB4vsw5y78N7M2aWYYxx8TsL63WrNdwBuxbTMCdsKLqiW6iR1siHzRDtsPnr3arK9urMM65gNiBsVd",
  "key27": "3wbpyCkdR8Wzw9kfY9Ga3EjVpgF4bVSSqf7Bsm6L5dELNQL1zS1Ls1ZYoe3gWGrSk96XXRVcjvUBraUThqq8zdFc",
  "key28": "62hbuGGpoNnsCn76Xp6iSbGdCKmEhL2X817QpQVgE5NqvHMh39PYHEjQ99gLbTLx98qcvQaQ5mdssprzSGxSv1c1",
  "key29": "4XV4eMUgc9oHK3a2ZkYebSHUhzxJ1dAPHXtUg2ijQbRDSVVAcheLotRPeGRaTqdTwRdhQLzkTvPbbPtFTSurH4SB",
  "key30": "33icfHqhsGQ7MpY6tE9E9SWHEQMiWgaCZdQRpaD7urM4KQfjDDV95sT12kd5TwEczBLmmSssdTPe6QBkoiToL2uP",
  "key31": "2oScHHHaJhGX4Q5sERYcG6uUoRUTueQAV5ed83bz4dxP4x1DBemJ2ygKVcEL4u2PdbBnN53rRHJtH97CBzM3JbgL",
  "key32": "2nj7FNtDfRVHReg5K1o2BVpGTDjqa5EEpKHWCSSip76AjMDP3hdzNu3XkzsTXxWrH5qZqdzFvnawdA6EFm4JbJVM",
  "key33": "xqVeAcp4cvXc4NNVx2gV4RVa6WZdCz9b9jdsaR7gDExjpD6o54mYrWtcUrFMhqiXVdrKXb7ijWkiRyhF1YSUnP9",
  "key34": "5u3xnTFpFf9KGwzWDrzRhUWk3TL1U3hirsM3jJG8bYP19E5LmvsZpMA4KQ5w3jySqA9Bu8vwjENmARVYkyNAWcQ1",
  "key35": "5MsjFumo9qG8icPxkWJZtCZRLDU8WfBa18mbzaXspkY5Dn53VvjbiobHGRywRd1r1iAwpDbRNor4yQCwRA74sxU8",
  "key36": "KwrqG1Ggu4VkhvQE5c6Y4Ue6FQ5ZsLxREJLnMJvntGLryRDRAWeSkXUdJF4kZbAvi5iTpT3BixEYNFzEoYds4iH",
  "key37": "3xpHMXb2LH2TTLrBodmPX4ZwRgog229tAEjSwkw1Py4RLfN1ckgyNDUFsMMHVXCcmP4RQgU96ALhKDV9kyqsvKAc",
  "key38": "58RH13Dy26yv5rSFrJEnT7Sy1br9FA3gseNWYjy6QPh2LeWbC5VSFgqb3qKL3nAiE39TaWrwYf7EVYvzURUe8F9U",
  "key39": "3cB4yB47THsF3JYiYNBdHfmtDTLiC8mKtuzcrvzE65Nb6AvTBjA5gEwacyj1GNQN9DuKpTrd88g28Be8D6LrkDTM",
  "key40": "2YVqN4ksNsBPkNbgdPp5vK6nASqtzpY9TTzb9TvsAVFhxFFnJaT7NmWhTdDLqPujhQYRUyyXH8kd7k2iWLTmFXnP",
  "key41": "2rCDf4LNX4WSEo7hikJDzUicbDAPDxW7VoWE1hkB8GZAUqb2nLmux2HcV9LvggwVAmXFeFodDhte2WGJXYDzsZcm",
  "key42": "5fojas4r3YB6AhJMG2NF4YrjFuF228vFDBLVEZkVD6bzMAUiEihQAQHdTUnVuFScBqWR7DtSvoDaaXiVcCo9agUW",
  "key43": "3iNfgLUiztVAstG6DXwrWaWJPMqwCY2Nb4MEhy1eKCPATjCBuyuM437i8URvF41iThqwkM8q5Y6D17CamEPZkiVH",
  "key44": "5ntqPJPS4ttzjJGWY13AyMAMWe2cpJm1MHoCAYTXvDXVLAGu2evi4tirz4grZMVUpwDHXXQkLqkH4SFtejqRajbD",
  "key45": "38aGPaQNhGarVkuSTqBTr8ZH4Z4hVJ29gTjn7M8xMuM2cxejtVv6Eu6CknJW1BgBH7vaMz5v3SKorRu4SPKAxTut",
  "key46": "3mpjeJazvgsu3oJSh5BrrUYGPYdqCE5gUx4JZPcj2zpiArmZHAPVheGKx7Cs4DyXgBPnRJcdWpqHKAYNbTAPrSxq",
  "key47": "4MsYAgNiKoui3XeQ1HVx53APQJwj2DwTYpQ69KEXj4i3Bbi4F8Fc6wnZhyjVghwDyK5SVkJDBE6QNTkZ3N7v75Y9",
  "key48": "4CEVXe8AFRWwX4au7jR8pxqkz2wfZVLhpFoNvxsg1FXevmx4Krp3F37zMmHVhrVmZ2dLYNRKaNhuwBViynGbTFf8",
  "key49": "kmeBotZQvrg6o8xQUqPEz3tBYKRv2z81jTt6AMGn3JFrj4PpaW9imxz4tmNJWVEdehRJAGSTT3V7H6igHWM8B3j"
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
