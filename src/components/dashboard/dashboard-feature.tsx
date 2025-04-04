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
    "skPANCy7rZ6nAfiZaEgBGMZAXoCvZY7g6oyiJYLW4o2yKWrdPsxGH39cJB4wsuHnTupk77wAJppSiRLfQU5XDH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iSG7Lm5mV1KC7k9xxPpgxBGmquqgWrNzVrNFnUTAAxuXs55no9R28yagnf7brLUEEcvQwXy1MDWZVYMrh7CXJjd",
  "key1": "u5j3XP33eokCHyD4XzoLF9HF8gYg1tfMdXSz3Z5fr2sJMDpLRfWA5rmVCKRbe8C3ULqbwCkHWw54m8JTQoznTdj",
  "key2": "3V5XHBGH9fFz3fRir9m5K81c63j3FND7LWWsa9yaBVFShSfEmfTUpyUqzgFcqGYsuRyQmn33JGyX4F5qwSynHg4T",
  "key3": "4F4ct4peKFkpXTFCKn3aCGyum54bqhNCFpdMYPXzXDeSWLxnUWrBakoTD359TqCMUvKRBGtSmKmtjYN542utPBL8",
  "key4": "XBjyfX1w4u4XPwWuSshpGG7D2aJAijPHZ9hmBEsGLm7iBW2ZaEXxgX7hDHapfYvUkhPwzRRoXCqg3gVTyqk6aNr",
  "key5": "5QDKh6kFN5WiPb5PzgqmQQqsjtHcpJoYvan7HNPcj4LHBYGyGFNHuoctf4YMLfVbERuQ2oTCsAdd68AF4a1bWTEJ",
  "key6": "kGKDkNpZwU7EVtAAe73nTot4fDKdNePkvkJsUtBgMysT8eJzAGCegZ2oY4RJHPoMFnfEK5gqbFtBms1pXnadzJd",
  "key7": "5HaeFsKdMSzHkDmvz9Ta26vRnxBYLydUkgSViL9A496bsWEUTs4C2nMULHNnVsQr8vrDoGeXabFyDDQgT22WmNhu",
  "key8": "4nMAGxcKvbedj5wUA4dYwUpYWdzHTJW8nx96xwWDaWR3YmcYX6fYhiaQQgo3ias14HzjeKkGGN97bZna69w5eYe1",
  "key9": "wY4xfwmu8Gh7pbMaDD1EN41req9vCLJu5rQ6CN2Wq4iwKhuzxBPTRZGbPA1CB4Lo6pmYyqm31sYo5QDZ2jCBXHJ",
  "key10": "5EvpSwJTHDxfhZV332TxKxBrdtCKn87jFyeSdaKrzBYUVzj8DFGeLTvK5LfXnk1CyWxDNmhMUNVSbUocDdJwVHf8",
  "key11": "5YXKR5UyXgpmDQecS3dQ4AFSvVuPVeTRwbBrBH1fJyDC8ZihJJhfA4WmWznDd2wTVHZGPF7W8y22vFwsQdE2mxNC",
  "key12": "2jC64Uvd1m4j7cLYKUNyr2vAnv9WVSnnK8ox3Qj81Zbrs6oRroUGqsSwXtKip3wDtAHqjDwrKsLxqEJv6Q4BQ3xK",
  "key13": "3Acy8Sxr8wCAuA1V9KSTybCRmNHvbEkAsqrz9ixJJXScLrE3RTbXnwvpToVqTsG9ijGZsM8TgTxAU42ozZYzapY3",
  "key14": "324fBZBebEVWYhZdd9Wxpdd34v2EzHbazssrkBYx7q5cntEZSu2GM3v9vcsxeG5gA9Tm7QEpG88tcLXZ1D23pT2u",
  "key15": "3p9brVBQvWULyD79oJ1NCYRkDPp69jo4u4hwKfZaLmYNvh9ZvuMGq7Kk2QDg92UNexGzfmFSSzC6yyW5aQQvumXi",
  "key16": "3HevQ1HKb3xCVo2d956yx3AyuZTzpxFu8B1nrJcN6AqY3XVfUxtgko876QfoFzA1UznbiRnHG9AEGsQjvv15cBrD",
  "key17": "iM4UfESj6LyYVrqgN7bsqYrX6ZS3SJVfovHhC2QSKnMF8VRr5NCnq1jtwutwSbFxtoA4sGH5ukM4Sdu9jCYU5wg",
  "key18": "44W5jZ5vHELEqNaSCmuYQWPLkGXEQ1Uj6PEda5GCPxy4fDXTwhXKqF6ZWSd1K9WJM1Kyyiaya2fo46tegxwGSpUW",
  "key19": "5QqW3PBvCRG79T788DUH3ebzFQNdLqWrHzE5gsD5N6vwrR42XSrBX3Rps8A1MuYiZ9NMnkox3fzziHEzPKopxoPB",
  "key20": "3Sbp1wb4c83NBpNP9GP7Mf93sUs5JWNu4m9zsmcVDWeBzCAyTYJRuSRgEt5U8pXdDfno2HLMqL1TbsyTQS1msT3U",
  "key21": "3p739ucYhJmbwhu3ycfTkn7N8JyNAd2unozpA9MmCSiYAvGPcfL71Ur6sZmfiGwGrVNs48wcWHgCdtsMtYovjnL2",
  "key22": "3KYTW38RKC7GgLAjiHJ9mVTRW9d7XoSqRAj6ctzLpe5EvRP6Gg6GKTvrjyW52Ffki6U9rmKMtX5xh5DQSCafQcoD",
  "key23": "E48JaQFvPYJVxTR387hyGKocxQsNWYWsD9S2qF8qr4wnsubozxdh1dWYuiLwtqqxuABEQ3FYSWeHhuDLp1pif6V",
  "key24": "eiMdo8haqNz6VoUxnH2cW3dtfS8CsjkwgLjzjThUjUe3WtTu7BFhsXWEMDKVTdGfUou235R3LoTeVFf3BGX1m6Y",
  "key25": "2GUXFRmYNtghZJ3EjzhEjsDDCybi3YcJpZnrKFmz2HZzkEF3bUspYtPqz1zShdupHzQJxEY146tcztwBpcCbp31P",
  "key26": "2zxExkVqPqWa4aVMxJHkcK4RmqvoVRoVMJTxX62jTTTQRb61i34uZ85XTV3gMESfR5k6RpmU9rrMjJk5VtRcRZr9",
  "key27": "4cMVXAhfU5SYZjSoHRUxy1JcNLrtZvyPf8814SDzcjoBwLGxSQr52w4fBaodYqgtExSxbkYFK9DF81U4d5eQojRc",
  "key28": "3XgRH3G49qYH5GtByNgvM6cM89M3hSV9kewMxVs6x76SSHPnuXSh6tdW7tZL1tw7rTEHuG2L5HhAmjkpgQBuooKv",
  "key29": "33ojDqgnrRu6goPGekmBQT9rYJCFicK9vZ7ZBeRDYeYeXj4DQoLP27RBAbTQktj6j7p1vZigyEjer8eoJqT3n5HD",
  "key30": "38Df7CabTn2kQ2CcaNqLrf6GsgxqGrjwDGCUBUT8gnjRb65bpKpuqZyRzSudRPtRanZ7jRvYGkU5YijHyu9ppgLW",
  "key31": "2jusBSDcRANY6m8vD2sqegu3dLRgtNW5rSpZYzcbgtBpzu5XWuH1Byw2yg6WgJMCHmycxN9xkRiYoqGBF6wtXnSC",
  "key32": "2XBxyuFcArRebaku1CfoXjDRHHroSCyMVdREeokf4qNjfgAja6tpMTx4zmWrTu9i5H7YDbMaH8vKvqid8wo4mo9B",
  "key33": "4dR551fsxNpTZizdg3RHZ4APjmz9apnSK1UcExNS9EbyF6vPN96P2pgDKAAxePsAH7k9PHeFro12gAB1cP34ZdWA",
  "key34": "oZ8GL778jAoQssx19MQ4cmSKpj6K8D7urRmcx6UDQCMaWwkuyRYHmtRWLPFQZAMfJMohGjHuMp1eWTknLysLMsW",
  "key35": "3davK2mYmiCjDjMn2n2f1NPckRkDp9sKMK5x5xQGs4S1iprowgWavEBoimfi9gkLata5nAFNYPHB8GjL5VdpNEf2",
  "key36": "2ixXgy1HTrjnKJW7kw1CzFa5ux1fDjx7ciT5THxx58wdviEAcQgg3yAxfMx1QkLpyecdY9tWVrmLknMnLJXKqvsU",
  "key37": "4RRxV78H988VDbfNJt7dCU76PAJhj5AaaDeUf1JWVsfpPVBHRM8CYumak4mZBFeCg6mxmaHa751o1RqXdQrMHbkV",
  "key38": "4eY99xZHCaoFznCxH1oCExPx253SkKzXpXvmDVEdxbc59TT8tHdgwyQyQgNmdNAi2eY9cJt8XWRzaAGT3tpCc6Lj",
  "key39": "2ym1v1cpsty2bYbu2E55VciVRyrgiLspPDQkQtgk2uH3MDkt2PwA13BNeh2WBSHbEhc9RVqbHSSThfEnkVWMXsAS",
  "key40": "4Vm2t1NYs5Auqi8knxpxgWrGzyMPV95D2DbBPWrAdsqbJ4aWA1iq7K46SXkbiaPnbSGqHFgShzDHEzyhBsCFuqaH",
  "key41": "T263mVVPnaD6Lfp35PJSkQHDWy5o5DoDnvHhFU5SMgCoUjyZnaoKQzdXGBoC89wvQC8DxSzjhjV5DRj1FjRdveJ",
  "key42": "2ARfbyeBTbNTk7L4iBR29z2RATD6kmGwaayyVrqh7fwCkjtGwWQqPge8L14AQqVpunWsqUGNKyMuqA7Qzr7F7x7a",
  "key43": "4a1GcV2bJSbZ42Zy3miv3Eh6bSusmH4evE6Bg976SjVKfuKB9crPzqYLL1SduMuBkL672oNJSchkxjEBWNVNkJkG",
  "key44": "4SZKy9f83bddRXukLw7tVwBvjt5Rqa7ty4LSzENjutvE1Vm1MpybgLoLdeHoEpxg9f3oiNCpnMYfD7dZjzGut9rB",
  "key45": "ujhwCDjVkJV32YwA3fkXPzYrJTujHBkty9PehQRzSoRSDq2zBnPdkwTEaQheZM7gQrLv8dKgZonNgMjX2iYqUf5",
  "key46": "46F8XuDiwDVG5MR61Cjiibj3FR82cyq2d6BynmVzWz7GBwz3QKqGPz6xYDQQMtHJZPEJeqYftJnBVTsRodNi6ubr",
  "key47": "2kPWpnaRLUUazEuWgzqgyAVs5ZSdN5ttDcQQLHBDv2XW9ZrBejqwh4pfptxyYcyLRsRCUh72Ca7YD2spHzx5wryh",
  "key48": "5SW4jrCpowcfwqpErw37MdGSMeeoo5Vsm8zaHdYRHgPgbF92pB9Yecj2bKyiiJWLp3tSMm8xFcQdY4dVUY6qXUbB"
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
