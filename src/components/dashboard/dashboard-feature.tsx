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
    "2Zcv1DSYLdrid7Zb1Uwk6zNc3AH5vK9eUHq9EtojYSLQYtrurQnKXmeucjKMZh6i2nQeKaGH925qJ5wtmYRF1FuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzk38e1f1cLcuDD8rsfxhovG4HfSfv3eSVDdiZzVahrGATQ6TY5UCfoRGFhC2a7xDw7xqdwmTdmuTgzMzHxuRHk",
  "key1": "GGv9s6YgvuBjCPzXSPhSvgwvEuiTDWmyWANTaHQ374n562e5hPfadX8d85zGQ1NQjztDRk9HAi2jau25saiCHGm",
  "key2": "5QMNuSjeBDEVYT5AcTtNesPLQMbrY1cGeQhSTCGNit4siLBNRmDhk9U83CEL44STvktxdx6NCuDGr9meH2ipBsDC",
  "key3": "5YP3VMye5xCKn2xaGpaLpnURgVwiYr6mXkMEySGoiWi4C1MS4vf1UPDZHr26zAvejp2wsDynH6oPYq49P7jq6c3Y",
  "key4": "27omrtuLXHiFDGwWeN2A7PJ4rq9ECuGaDNBiDV7hDRYdmEWN9EtyVEbgtAK5Fu8j3E4d6BDg7m5M972w48p2xEg9",
  "key5": "3sFLapuSRZBXmDM4LJeA5i4xhTJuf1MME4qGSScWyvqcQqwP9ihkZXQeTRWPSoSAPNVjqH3KKxTD8Qq7Wfe3YkwT",
  "key6": "5qchr8VYVxcRxbWsXTNHbcHtqLsxWAak6v29G7Vx8CFXnk6jxXjvNJ6uhe6fxHKDQ4KciEHLHaYbS1q8bN5i3tcF",
  "key7": "2nWXvNYe53W6WyUBAzWnvDuoS2GtMBhWCEnSFEoLjhW2xngnpCf5yUqxHDB2cdhHZfLq413NRLXRZgaxCUcTumoa",
  "key8": "36e23J6MYE814yqHxPQQLnVCzthuqfdYaEDw3CMzxdGV8eLHiEpQCHXUvGTz4C5EgMsrHarKdGUhLAeW29KjTYDG",
  "key9": "435zCDuF5SGaNRNwfeSxcNn47Gi2FoGNGi45wgxLgJTEAGE7FNv5aSJVqGSLQAED2UFL96kN6D8W1p67h3Q5W5bu",
  "key10": "4BLD2982ofetRu1bDpZbtsc3ccdKeoQbYUMCXH78hz6mVnvzwj9dQP1C2TjSLmiVPfarhXRipGyuoKr4VwSyUZCq",
  "key11": "pPWFYfUAWNNArAoknEKT3aBJeifJfBFwzUjSfbufT5piRsTRn4fzjRiT59krAKXnujSkvuU83fZMm7Jrh3HvmkF",
  "key12": "3cZjZPPD7JWr6cHSFbhmtH3vsZLCQSUWkP4appRw8iw3QTZBYtasdvSf2rikujfoa1BwwT8nVK7CkBi45zZ5o8RD",
  "key13": "65TWPZArat3K7wwbrMs8v2Mnt7mgk7pJGPEP3FtArBL5DuetNbLCArVtXLwtdZHZHg2XKRKrMCzWmq97WDKEhTBa",
  "key14": "3Cbm7aGD99yJzT7aGKabSZWDpKYtd6NHiNSAbitqPWNSCz4fL8VvWpQpUGS6uwuEdDTE5wWmcoRskHFBTDaRQLK7",
  "key15": "63Cmm5ykkA85yo57CNe8jH7RbECT2F5jgDnXXpDmzXwBwkJuTX66PCZNTe3s3V6DE71qhH1obbiy3GFCjBQcKhju",
  "key16": "2y5SUz9gm11KwU4bwuCgux4WYD1GPk5ywZjYTP2t7uDkeu7u8Vyg2adw6QyPACjKFPUrCyfS7pwDT3NuDyoT3jgV",
  "key17": "hbyzeGG6xmwVEKexYpp3QMgn1nrqrPQGqrP1fQBGyKGKXdLRCHKPX7Jn5KdF1z1Ndpck62sT2frhmAT1DJXBkmD",
  "key18": "3pa57NtxgtDQGERe3rJZPFfwcxKx6tDj6iMmffHQTHanPoZCH2i9wh5joZZD75V97cQP6wwsUFTW8xceG4bCcPVg",
  "key19": "3cZjW9hdjjp3q5jn4KVGqXmUynjser8SJNXH7r6LzyM4f3RdSYKWpgGy6Gaw3NCxKrtTtmrvGdBLNBZaaNNogtJs",
  "key20": "2RyWR8EP3gPgnP9Ss8UB1z6FBgbZh6dpPgNHRDMTSVtgDAZb59zRENm3HFRbLsDmw6KXEygs4tzLM2ouEH5R7LJu",
  "key21": "25r25abdW3QschCG3yWKUZJ2eUhHW15ZkydgKHyP2fzn3sZD5MzEBfKQJTm8SgHQxEn6Qa69S2U2Cocz5DjEgiNY",
  "key22": "55bafEeNATxFKLMPeyXKN6nuNZfoHShvCLCACaAWkUKan9e537CiDV16GwHYur4kFHJHCgCFAMkWQC8GCYUbF4kn",
  "key23": "2PiVE3UnEme4LQNAfR81zpnZAARG3JNADLKRFCt4xXzDdnFY4LXiAs78nhSFoNHVf4m9ouG9AQ5tNTTqv6FH1sAp",
  "key24": "4mPTp9FMJrtD3kxsxh6CFCao3xV3wN4vAkqwDCYLiuQct9XsHXk6TNDZmrJ2K18mvZCQ1gJYDasJuzKc7G4MJsHq",
  "key25": "3fdxaX1nQCB7AsvX3XVSkeGUU3UGEfWkE6g1PUesqwFEQvvrRaUf6W4bEeWEJt66s7aPYrXR9BXmY3tVDfiZ12hB",
  "key26": "5ZUyonArEne3S5bHYWziXsMZpc91bnc43STnS1cAK6QrPNn7XT53LsQbwe5VHhmXFEeqKJBBsTroZGcgXWGVBb7H",
  "key27": "4j9eawZUTirn37Cw8Uc3RHgMhi8EF2ivHexYR9TYusvHZzwBUGamj8THRg2StRjAw44Zqd7fczd9KMJTDufGZogG",
  "key28": "3X9EnqbdxVpsSTco5SEChfB24GUP4k8yeKisK3TSH5ekcCSPbr7Ths16MD1tg31TXzaAjUpVQcd8m7f8XmbGTGRN",
  "key29": "3cSfKPQuMUgXXn5wLkfQ3a8ZDqLr9cVxFZubQRPV4LU86FqFP8d2Wgfms3LHm7EUFwHvk6AbcvARhLor7NWA9ET6",
  "key30": "6HwUMW2sVCXHeYGHCDizYVFdYXU9FgNRSZKZionc7BMkaZJfa22bYHFs2fV85W61LX4j644LaQp4qYFHGeR4ZUd",
  "key31": "5XjUqTARPCHngAYKfDz1C7LLgDggNDifZrSmwDq4ow5oadpVuqh9813i1w5AmPgMxLNntmT1yuRM9hmrwKXkNhDZ",
  "key32": "4sF7wYqVfNZHD3okqisshhxAdqXYe3F89t6NwxwM1CgUcQofmNWqFkGA8WqttHTK2w7deX5gjHtxq7JiUPfxVsR2",
  "key33": "SVE28MqTC7Y4uyEZ3JFro651L48NgP3qaVbtxJigv3iYTnc9nqpVMLg86MRULpq4UYXJvFfBeWQ51vxzjt2VARP",
  "key34": "4uJ9uuVvep8ynuXryLASortB3KHq4znNdYVJBCsGXYM3j5HkrqDJPAs5wR6gmSr8ugEqFqRWGAkDtHJcTVcMnh6V",
  "key35": "Z5i4cNWtwcByGVUJb9XPgef8zfxDZmq8VD3NrLJDM82ruiy8QoLfe7RKyq4wfJdtAuGN1g3NQuVRNPQQnSon1MK",
  "key36": "5F5KwbSXA8FwBH1fy75ECttASDdCmdKWikbWf9dGVWMrbuLzzr4xbZrdNxbtjqr34xYM9pAXJqPBC6abDin5rR6T",
  "key37": "3kP1L3zEcXR47YTdvuLy4EV8GpAw9CzGesiixJ9i8bybYFuVHc5D8DbtaxCu6Uc85VnZoe79MoCG3wYQkWJLRScJ",
  "key38": "47mvC3pG76P1aCXFBp1evk97WY1zyDhVUZFRFCN8Mu2iEmTd2hqoHo8UKZxF8RpUgpJ5HE5VKcnxJJ2VRNk7bVuP",
  "key39": "Bh5RWynBrDpXceJuHzqj1A4nVy1kQ2VPYX36kMR5x3jeW4484v4LzQdYFjruszrArkE6EouyUG1NvbL5TvHycVK",
  "key40": "2civCQXJpktddZM8BddHEhzsWSBjsUFxMG22WfUMzN9VYNb6D3WVA8XXsDAJej2QbxP3Bsc6UVXtvuRZZpY8r8NB",
  "key41": "ZKtWhcFmE1QXM2gsggMF8E5CPdKMaRn7CPkkwqWUad5ydL82yqp66WQNQekfxZv5nRkQudjaer9j1WvwvBRqeiM",
  "key42": "3x5xTP7UYwE1Mfzzkpw2WWmmEEL69wuagzZrEPEjRVxSuFrGKcEcvo7Ha4y226wzNy9fX5sovJPgrME5rgNSc1P5",
  "key43": "5evfZD96EqxGBuPQa1DhUoCTrs6nxqD5dRvf4wxwxDHFR719qLmWcMVYADdGtGXKADtqqDx1oDdpB95HEY5iJdhC",
  "key44": "4NKmdr44mJhWh7e5Hdi1vtxyZNvgj6mpdCFa6BjQ5FrocVxRDmJVzGErSjvViJtz5FpzKtv2qd4wDtbXm5EzwVH5",
  "key45": "FKPF8TWgHLbkWXKdQ7Dw2457Lx2jiHPKAbihW9ZcuTKK2qDJDpsYYhgiTKzk7EXag7FQdBi93RMFpiHijqrC7gv",
  "key46": "2anKoEfBES1NmmpxUmzTAJKKfmvnNnmJUeHqsakRhebJaVs5crpnN9bKnEqbNfD55qgirPMtUR29oCoFJHtCCJN4",
  "key47": "42FHLzEBpMDeyLQdEC46sELwgfZzzLiiptSyZ7UPYB3htf21K4FcvimupuhZHnrx2tGX7Yj9bZNELQtz3HwQbgPt"
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
