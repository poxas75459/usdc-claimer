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
    "2HAwEcvaYStLk3Z871axkBrdXUvv16D76BibG7kmtiuNb7rgtZP3ZTCT1ofaqtit2oGxT78bxERXWZUMfk4UhPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KogwvfY56yUYvFnGC8xHifmgb8mEyJoCYEsY89j47iGneZLA5wVPHHtY6HxmZgcmmhUbKmEk5J2w7yU7izA56qv",
  "key1": "5mM4ExxQpBEH7oZyamigCgBjfms3TLsWdzGmyjUqbAFP58MXxkAKyBSx1Q9mQcHLQVJzVtMdFVwbAazU9tYkujx9",
  "key2": "5X2geL7PyLYADu3LjemZcaY27AFbjszjVevN8wRz9G3DjYKWrFJTNVuXz16xUikQZzhy7qwAPWqgeHVaVKanAyhf",
  "key3": "2kZPz31pn4GZ4xkoX2MjUK2UTpS8vQjTPDbmU9o5vRgpA5bASdsasDbyVRXWD5YEfxfA8PiQX1iyHMjLRngoJd1S",
  "key4": "2BnWY3NRcAtC9zKn4TKF2iKpdHariiQ1BVuBjFrWCswypM4nsj7j8XKGgYqQx1Dtsv8PJoQuh94rhvCoEcNt1YjA",
  "key5": "NTyLLCz7P5NXit4K7yxpY2KSMV93w6X5DJRrHSAYrTewEzSkHf7aPAZWwesc8pNFgAzKzkGe2svKD4mnH2nJ7hD",
  "key6": "5AqgjkXRAHZ1j1Ni91Qgjb5tZUewqmEwUR7ezjtL8G3djzJ2FcPBd6SovvWpoL4HgvczJGn2qosaaePeZndPqgAB",
  "key7": "5XzNgSU1jFnZdYnnzNyDdvgsaqVTfFyUwDBTjMthAavQcD81WiEYThxbuS59BQPxmVGzEkBtfqG8bEJv7gm6R5Xt",
  "key8": "3XsM3nt1seLpb9Ny7AY3BWGWxn6tzoGoz3dKcsNCV73ZEtHvcZriMXdEQpRKmAqxSYpubiiGZzudd4eBrzniXEdR",
  "key9": "2sEUr9HBKSG1rr4uTfS5Sb7qMZJqE7TEiyLCoo5LrupGcwmK2Rpufx8ueVEc2ESf2dJuoreteBH3Cg93Q6Pxfgff",
  "key10": "41yv9tpnCLcapJrFpZi4uzznKkhJU5ay9FHQzbALAvKrw61tJ4gLykR2iS6YNLAvdJt7XbQQE7ZRRtQywFDkJpPh",
  "key11": "22u49QyEooshA8nxkEFyGW2UUKSUhMCzmp6F6Egbf2whPW23qKZ3YLphFnToVFdrVYWx9nCSSzrGnMakA6FE3Qra",
  "key12": "2mSVkXHS3xinQmjMz4Rd1eszm9tc8aYysdAwxQBsxxfYgsN7vnsg3j3g9F16ihw6fmZUZkm4csrNK8cTQjoc7Lcs",
  "key13": "2EqL1grvSjxexJmS5L4QvNLxcGA3qni1HKBqHGMRd4mpK1jeH9A7BXfvZTkqjdTMCqwmFssCGKDgLJUSRUG9Q4rg",
  "key14": "2fMuYMVr9hUqQLBKP52Nh2Py2TXUXSyM7UVuBRdptgKiWc3vdv6YivM973yyGmMTprJBkctynh37kvx4fe3nnvmk",
  "key15": "H7zs3fNtsfPvc8suNZ57BDhckP8bgaL5uDbcAnjAiw6o4ECDaiNcWPsF8ppNngRw9VGhMWyXbfm3JqEirwUXy7x",
  "key16": "5dB53mAZXmrZY1tLVRUZSbMVtygcZoQcciFKdHd6VJ5cB6qwBRr8DdSLeLAgH3Nq6oMMDoRt3mhqmDuqMJh12WqG",
  "key17": "2zQ4Hj5zed543ZogkMV44D96iKgxEjb7weYQaSyru3NBkSPtvEkgk9x9Ma6MfYsQatVNMEjXQbSCwgF6FKet6Dri",
  "key18": "4vESQhtnxKHVNXPDcU38Ms5wuQmhsSMtznrbjYECtZ3JuvdbZFZ43U1yCaoet46DBmm6RKBGFfeMYphhAb4Mvyqv",
  "key19": "575Er25EmHR3xm2zuYNbNY7rbkqN5afu66o4moqhHmuHyHcCtB9An5DksdHoLYH2xVc1QDJVwqhDTeD4xe833mnJ",
  "key20": "4jBqHzKQL2ojwkz3LGosZd8jVTfpTCEgBYsEypMoynjuYvBHEEZ4RPuCrzYNzP9AUiHcRB2TpS1gra3dnSDk6D6V",
  "key21": "pLV2qKYgr8Jsv28AJDNnpniEPGuksgjr1JeRM9DsrqKd7puyWRbs2ffFZi8CE1fKo35RqwYsxDrqfBmJGRck7Jx",
  "key22": "5v5EYShK8owJ6Bao9nnS1HF4CrMmjUgN8Pz8AYLDrHbfrEPToLXBuJ5byhCDtAd1xR8pBLf8aoc5xW1tbVhFNhK3",
  "key23": "3vhrUQDn9Gu99SeqajxncjFFupzLxMCPeqHhVmfPKJj2Kv4S7bJEhBPKUyAiFNyjdGNA1eMTCeY9KHo1h4rUGt4e",
  "key24": "2jGbhYuqajfvDsFhD6ZShVLSgJHq7Cev6n22vGJ7azzKZv7ucJHu1vZRTgAW76AAtxxbnXG28pwYyK5L6MRAm2c9",
  "key25": "4HRQLqkLBiUoLD2aTgeusyBg4a2hYnhMhQn1rzDZwAdAKtAPdm3dkjV3Na4pe1pwpAxTxxk6yDBtrPLp2nCAdF6H",
  "key26": "5QQp7KKSFCTyyM3ASGR1UmgW3SCECc266jkdMb1A2bFFA6jKeA22mpoS6cMjuP2FZDudxyVEkMKGCETTbNbBCokM",
  "key27": "5bWBrFBS3VA7FSdFZYg6Rp2RSRM3wgXRoZrPqW7GnTLGgt79ZQqowvFUTZJ3Khsh581mXDEBbuL46v64wiT9aMNt",
  "key28": "3cdP2k2Z5pmmgmkcjCuMaxhkaE73t8L5d2G2DXoJqucz9Ho4eAqwA3cHoE3ZpYFUF8iWhFQorm7CMTWCa7RjwwhA",
  "key29": "4exmRoLusdrQfFKyouxTcThHLeXRMcDbisTr1LDv4DyWhZg3gnGp1kYBxAWLrHEmRWmW6oUqtbZB3YnUXkXVCsS1",
  "key30": "2AMwG8ByDCycvoqU78jBe7sN67ANFs7BboDJA5W3pBFyrrMfzU6FXshJWD77LftUxWuzUGBKdBT8tB6ZtuN5vU6B",
  "key31": "2t5Mm47ffTcDcvWW7me4dhA6hq9guU1UawyrCNjo74Neihw7oYGiHco3syJGHZDwySusJe2rG2XnjRFiutQgN5bJ",
  "key32": "5sDaQPXm5yTG8aa8BpiuT9Wrs6ZCZe3Bsb96NM6tNJAeUEihw4bgcNTrnp5xJ5SKEZ6jLyxCYVhm5kbLNcfgK7Ze",
  "key33": "ZGsCMYB1s3m56D8pwXJc3UySSy3K1DGWgqxQNgUCudFCrgmkpS5UuXZ4KCSqjVB5pBKYMJKnkyVWwmQktHqh8xz",
  "key34": "2DFtAGLuJd1dFFmDxNRTxfHLmhVgbEX3H8cVfNDMvZ33F755ejgwmjRRCZTVZGiTfxVqoLkwDWxHZwvryDNYf34X",
  "key35": "5Y37SXpfSJf1wxqjLHd6M2oRM2vkmoNr6dtomRmsQDrHkkHsgZUpw5xrVyMJrVDckPa7dQf1ni7ZZD6CuyCZV3H7",
  "key36": "3DeixiZNhBpNtRsikwdjTrEK1H5sdbBys5qfn2PhXQme9Dfq8VmWubMqH42QcPSnGvGhKzUGBLJfNTz4ShrjuS73",
  "key37": "3E7ywExZxwqNtRfp3KtPD6CYLizcSK8Wegf814Qed1DCFC4RWoqVcpNpExq4cUtzwdnBtLVg1fnuyyLSZhTFzPnB",
  "key38": "55GLJhVzQu7cEFtJoKgDNySqvL6ZyJKgbKjhoXySYoRk9zR177TyvpR861baebY7XRHuu7GX5xHv3P6ryj8m1KBB",
  "key39": "2RNtbKuKyBCPu1RvJQ2PYXCE4RA8DJtuEaW7nK91QBQ42SdPDVgrNaWeSTjexhrFLZqRseAjgycFTkHNN5TbLUou",
  "key40": "3RDhS5QvWYg6P35RRMYpFFzBeGtgzLSe2sWuStpuqZHFtyUfQ8JXKCWNATWZRJxJBNh9BB5NfJsLKYLYDYkHndeE",
  "key41": "5GxAgWMYYPuhgGF8yL3tKhwNLcsHmN2coeg7KZicTZDjwZA2qRyMVkU56M4bhsurjB7ZaiwGzqceN7KydwngeUuA",
  "key42": "2pGD7FgU59QYqjYupZdoeWXUGRD8UVicvYomCj8adbUFy37TrsfwVYaHvc6noNHpjBXifEzyzw9czBvA9XsS5kEA",
  "key43": "3W43WdJkx51L6iiowDvd6zKVvJU8YgM26MJRHR4HVVsDV16CP7X9qTxubqDohvJHB2ashCcojjWJkuce4HVs8st",
  "key44": "5FCA8xACyVQbWtH3GSsN3EhKch2PNxmxkbtywJiW2hA9Xq7zykArvyVmc9mAXB5h7qKi2qvDajiYqYWs4c83zao7",
  "key45": "623rJffEsKZU6XPKDm3nL1U6vpzBEQ38Js7agbq1tinkF1F2TdqsPWvcx1XYeRgF1iQb7BfDn1gMVQDBJdQ8hMMX",
  "key46": "5B87khiLgFG9FRxGoB58GwbkKxRp78mRoRQ7V1ARs5PUe4JmTTknpM49fVPnc1DkmvN1vZgpDVeNAoqyR9pB5aMd",
  "key47": "2Mb4hW5EH7ZpwUSmroMqShgudK5yixVbyv6Dk7RMxrH5iGBjzQUxJHdUZSQPPY3DsEBfweqv9fqoBRxgdBMQUk8s",
  "key48": "JC4SFaKGo9GXG8Zivf21jhU33v3QqgENUrmomn7z4ifaKXUomGmewd2NVB6yv7Kh11Zu6R3msPKqq3rV1kR5w2m",
  "key49": "2pYsEbvzqr1BnDjv9f5x8y7c8ZHr396uMQpmDpMkopoEKqxMWM9To9bPTXnjyfKBFFkzsR2FoZKsSNbo1xegibd9"
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
