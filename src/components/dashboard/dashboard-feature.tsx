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
    "2tzKAFCgQN1FMEYTxdpnFv67AcoNR3Ma78yEwi2fULfPWmxpwEkw5FbExXhaL9WHwGrHLFaMVBAckKMEn8RDGtzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215qNhKAKUsVCsZ2TJumFbx8UU2ayjQgGfq8SRHF2A2JEZkC1iUsdkkBuiKChw2obEnAbjQ4TPw1tCqvj5v2f9de",
  "key1": "2W4zRxihhVrxekVPaX7Ri9xSmcun1mXThL2Ys9yTL3TuPkxGHAnJpsfQjUhRK8tBeGb2dg14qrfWywRcea7fVnzf",
  "key2": "44t7JeWRDFWfoZj3mNsgaBvfSfxMuPqXJ6sj2YEqonuvdryjzL8E9c8Z5rkybBEPJZD2DvwfURcfnLS2tji6ieoU",
  "key3": "aPrMoLWsPTQ9Gz3NS7RBgPC6SY9BCgpTQzyGEsRTEYvWV97ykzPGpeHCEGWSe7w6np5L5xArudizHKoCQTY3nXJ",
  "key4": "3HLdDBU7AjSr9DQbWe5kJF3d6Ny1bhvchWZeGJkB2hE65CzNSRBqcQn3Cnh2MergTZsfWS2u1QwM7ZaJ7f1sScEH",
  "key5": "uCEtmTwc9KrguE8DEkFPMp3p5SiJz3AuNQK2nZuBCypRY2A6BibzzarHZmSFpEhYPg6CDjvka8fYWK2edDDJdZA",
  "key6": "4CvAdbKcX7WFwZuJoLWcWMSGZWPv72LmVhkzHZU8RoLhdaVVd9FhVGi1aTE4fm9cLYputoL1aTSQcPkrrycgpUua",
  "key7": "2c87pdJ1MqWBqVZNSjedxnXnj4t17uwnWFif7u2ycziEZBGYgEQErQqqgLfF6QaCzWzhvFS47zv3pZcG7Wf914HC",
  "key8": "PeptCUSY2H9bsjKpifiT9KnHj24EKwTbRPACpmkAuCTsme1tkRJXgNpfv2ZCUuuFy4pwyyYTJBqZEsPTpQb4N4y",
  "key9": "iYEVBBoBonyhHe5evfUeCniA4RArymm1qfxbh4Sg7MM8J3Pnbjw2rVCpCqsbQLqBWfuVBCJCZxMkNUXsQiXcbXj",
  "key10": "3nAaw7RusrpnpjMhdrYpMfgXvYjN2HV2Jza9n8pNrWctwvy7jAMMNvLTXjYLGwUmyLamo2Kai74GpiCRXqSjepTY",
  "key11": "4MdJAY8Z2pgojyVdGe5orRDpHuMZK7shiaF1P8e8aJjSG5BrrHZX8jfC84tAopTB6F89VCt4D8ZqwfeLsb4xAsQa",
  "key12": "2WkFyXw25E9zpFALs28f1CiwbPuhRpPBbebJ17eEUSFwjiqtMTP8AABHzY5nTvi68Pn5ypc459wEw5x4Fpe9wAKG",
  "key13": "zfmph7RwBBDMgoxSerUpBk2F8u5C86zjTdT1qZ99bGXTDWMALJ8mS3KvSQ8dvgLWw3CukhG3supYUrsE3NsMjXA",
  "key14": "4qw7evDe5WRBNvcfnpfMKDcPzyA99KLpzATvCNKnp8YkUxV6v4nfAbBTWE4yLpgbncybstqdQJYhPh4SCoPYtJRA",
  "key15": "463ipCwNvoZiYNZVmzT85gcYK96aN1uXmvNe1ckWFjMHk2YBEHJcUH7RTqeu5bbCiqXmiixR9kf4yZFfiZLNBbrR",
  "key16": "2p6xqMjFVbeHCYr5DLH2KoD5dbYrHw4umi8oCN26XX427y1Q2sxgz6MqqPKUfZTvEZq4FM2wNaphZG96uWX4rv5C",
  "key17": "2Z7DwHfpPns8GW5sZUuaGjBXebYaWVYYW4L7TupAX7EZ8ZSdXUdcN7SHosod6eELdDRQwbnTm7dwRop2jK4GG9hp",
  "key18": "43cnsyxmVixf3qt9gjskPtx4tACt4WQcUV7b3UE4dMaAUcdwWVdBAPAbDepoB9LrqNq3xJeNTEpsLgyVtiU7jxiK",
  "key19": "51QPRQtPncQavxwUA31YGze5afuGBwMxMVaVe4hcaEXpL28A9LTt24DBntyaYqEJ8RHLdZpcE96Gt6EWJFbXNn2h",
  "key20": "4y8jRM4deEUHzsVBD9z6EchwghrrNmNyifReLREHj8FDa1gj8v5DDxmssSBYKBMy8cek9pzyKtLi7BBG25ZVUY8s",
  "key21": "335Yx7mzaYQ2h1hmhuADgzxzui1ykCbuD1cNs1toxLNCDc5aPEuePPzDPiTwcwU8LHTqhQMMC8gqpp5RcAjQLiJh",
  "key22": "2MfF1v3VmbzHrYTXd4tHqhfwF8Pm6hCRy57TtRDG3XHKyxkb1R8qhZTnKHwTzzWff8dZxbxhSXdbz6ZaxzTcAZdH",
  "key23": "4nPRTSbufHArdEbYy1qysb46b3ssqGkEEmWNnix7GzNE6quGUWETzd7SMhNM7W8Lb5PNT9SdCJ9XVNXnj9Kes8TM",
  "key24": "2wHYbaGdNTantricej2kym4Mn7Sq5cJrtubDfPFsmokKJGdvBqv96pKUwgJiQPpWGWmpWeUESXK3aTmDHyHKqsTn",
  "key25": "4QjNVChitQe42KPzZKPFLu1d1G19ZyeuTknktTVWtLaSLm4n4xJWCyPDLza9ipora79twjj22ojLNmApSN3zFWef",
  "key26": "faZ5RJUZRn6n6WyoXFACmUhyVMVub3Jiiao32uzuZUYahNB5jrjKFushXoBEX2S1hy9wg5VzPM2DjzPyBn9zcw1",
  "key27": "263GoGXw3UiKCFRcBk4KhMiTUETzrEUvXfeR7xbDQAfuqKKP4BJi5hKUXEHjyoLGkipQ3ug94xa9AcFpSxn2S86b",
  "key28": "2aVWsuUk54g9fbTWVbceA2LkGC9fc18NF3HUtm517uRHtMdCyeLPBqnneBYHxqX4wNVp7S8sgtMkH5Y2QeyoVVkg",
  "key29": "2BD17SF6suEuzYT3VEqospj9xujgj4TteCALS8ndxUoYRibEo5CpnCDK6Pnp9gbohsAXZugcuCFqMm2MgFZvDZu",
  "key30": "5PgaJX7u9AZPRxUmxr1FUFC4ZYpeniWiNJLdyAxRoH8tQ5D7zwcr68CNg5bWMxYBQKU9tSHLLPntx3qWRwLFy4vK",
  "key31": "5Gyw8RuvpT6xXCCg3ZbFSHk2TA9WqG27ZqyaJFqBHf4HyVXXeFi5htKfUhozbHiZh9QzzWV2T8vmA2MzTSCPAf3j",
  "key32": "5t5LgmUbctFqTnzVLeYYJ38WqPnKcpkWgQoQTVGCZDHRdRanngCpM5nqWPe9BikwTrkH11sVektAeAphJzxa26dh",
  "key33": "364YqiwFhWoB52rrSX9Lo6z8KU9soezCyV5pkbSM6yEMH3oxoNCEuufGYPpTTHRkuudHxvFwH77bW3o9MtV1f1TS",
  "key34": "5pfYEwRZR48h8BcBfjxHjTC1eDdjmVwkcgTQkyfstKbTuFXHoDPT8JR4Q8r2H5RhV8DXCetfAdWZ1mKrRri6XQro",
  "key35": "4vwUQZohEq2qfJW4jGJUwkqYh5eWYdJLxm37dVTE38E7H9vgMCXungDdq3HAH1SqVs9YQKMb6pthE2JbWmq4wKCu",
  "key36": "MxM6zdpPRAnmBrjJYdpR4M2Hk8QJCZbEWciaWyoMZL1FfPbAkJwMEh8fWB8XsPu1skbyX9BbV7Z9YYrEzd7jJmA",
  "key37": "gdwcXvFmRTJRfoVpi6NWmFvUvDoZag6bjU9wJxnbBEKeoMeUQNgMaqtpKFFGy4cwm6U3JPoz6Rzwjw6SUVH2JJA",
  "key38": "4NUEd4ZJULm5ysAQhnT1NgUYngakJtVMBqMgXWqJeeEaqu92duuubDWyUc5ZANAexjcSro35As5khv9T95W3B8GN",
  "key39": "2CM1haZpM1JJkGE9sHVq14dEe3V1PyMCTtohP5xKexrhcfWLKezHv9Tph4ShpPZJVjXpDnygrM5e4ytRkq7yhdbE",
  "key40": "4EP7E4QtdrGLo5H5nVCb4A4XP5CxzNNZCdho4yjQ3RQMqQLFgnKFTMmoDWJMi7WBwRkVKDDiqS7k6y5TrhMzGe6p",
  "key41": "3AxGoZj1CmrRJs25XqKNCMhMWg3NmuYH7Xwynk7k4sXu1CUQPUbXRQBoeLhM4EL6SBwBKuUujo63k5MnRGqpEFw9"
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
