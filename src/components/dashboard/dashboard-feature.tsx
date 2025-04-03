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
    "5UgwYBPi4t9CPx8YicZWxGtDmCLJntt3wSx7C2HCHHtWvBpNRGdwGM5mWzADDS82L8Hxo7kFHNULq4Fn5ZEEmXko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfYgVRxKLP6T3z1c4Cdy4MdZhzHbnVpgwUUXbVfQUjt79EvNEGC5VcLDv3EmPr4ws1eEnojEQfoqB8i4Y79Pq2b",
  "key1": "3wt8v9uqppEiU4JAKbxSzUM4yTbs58d3sYYm6beeiG7iEUxQMys9kQHyAdpNbYLPt5MoK4PUKbzQRZt7hrXrepd1",
  "key2": "5pSz5EjZb3xu6SzTL6BYtoLK9qraf4HDrP3waTWEgPxLnoa2ALfw85siX1YipNdGnxH6N9bfrACmU8mHZLrrZLfg",
  "key3": "4aJZ5oRPGYqPJ6LUDT3D2oHGp66wko5hmQ1yAQrrAy3rdEMRAXWC2ieqURqScK8Bsqub6GK76eb4HFGgwpox9S7n",
  "key4": "ZGoakwWNcKnYfrF4qjBasTmUydDXF7RmUgBYGueX5YWCrfco7gsFtNighT3Ki7e8c9x3opE1tj4aQLL5pQEn5TE",
  "key5": "53XAL5WnEWgJJpJZ6LuEhedogcVLWNqif3SKGPZohvddqfBmheSb5mr6gP8Mv3oyHDECB2gcs7nocppFSSBg39c1",
  "key6": "4rNAuznZWhckSmoT7Lv1UweGgYVngFrs997rkMQ97iH3JxgP4hLfcZRbNEWY7WVVjg2b3cL4SseFJR6qDSNyb56X",
  "key7": "2BxLiM4He6dymY32Ycpe7Z9fixPQwN6RE4y4rrRZKfecpB8dJMHiqZoh1bR7wnmzUJyDPjLkFpMbLEs2z3pS27Bq",
  "key8": "55jox7jjyaXxnPrpW1kUXM1uwQ8yG2tnZ6oEt3Z4LLBY7uP7DjRqgLppTg7W3f7bUaYpcNhEo8tvNoXHsz2LBT4i",
  "key9": "29wCdkDcWHAjDQDSJpKJaGKXtvaZq5nHuZ89oxnd6K9YN2rHk4PmtEEZTMfp8LNN5WCLrV3QjZnpE5UXxCemRqoe",
  "key10": "vbkNbkpEjVKmadgKLXAgFDg16r6fdf7zFgccbEA6h2Q3QT1cN24UV6xjPSqnankSJyPmP4oi9ZQSPe3qiN3r4cG",
  "key11": "4mUrqt4W8drBaCSpvvxwK2KW8LpctkG8hYnEF7jLoEdeoN7AHHJqjancDaujT6VhxuWoYQwJarW1sBtjxZWpM5hX",
  "key12": "29i4K3JkuiEruBEamn3nAZJXt6QhA1G4rfmBkjG5zjjbEQY4PCVFtaeewnqtFqVyFc1CJP5nhNwUWoDdmpKpBFT6",
  "key13": "4hfjyrK3dAs5R9EcHzvBydMmY4TTzCuznH7BRgSMZp8tugZNLSNCkmVcFoozZkbDUCxve6H9d9e6oCsB6Fe5mzY8",
  "key14": "31NGTfdsxxBCXzgSf8JGJ6us3tY8prqLfRCD61yMSduXhVTPLxsX9kVGhfTgiG53foCyBwdoAyTw1JER4BaZMxjf",
  "key15": "5p1NeWRJo3BSmp7TPVQPfVuNR2s1mtY3KFdEkMZyXmbZYp3bDxpqr7DUrSgLSvCpzgQcMKDj2uj7rwsTtvkjKL1p",
  "key16": "4FQrsnbm3z71xH3iPUYTvffdT21u2pnGqciKtpdr5N2ZjpETwhraU5WwZgufsHcYjk8khYWZQ1QZ4ECTjXFNUpRU",
  "key17": "3SC2kzpsJe9x9JyEX4QVVCeP7Bnbmgvs1YcQEvDGq9PMUACnJLsUqQ5EB8jc1VbbzuMZUGbZ8R7hs49kdGeqt1H1",
  "key18": "5Ke9vv3WuYkGTeizHckV4upkWpMq8t35yQwHdgaqLz1qW2EnPrWfNJKNLS7ppgB1L6sgbfHNjEhoDpadTXPLQj1x",
  "key19": "3fwjny5dFM6HDek6RaBM6cBNAKeopSQxvGsb6rTfvtagmHg7fnZmZoaGtTYWmTMPMj4HYKbgfB7y2UwyubFbZzJ6",
  "key20": "5JdwgGRPNgFNAw7i2UyRLxN9n1APXiisXBBUHELb3qsEW1bCKHoqPegzEH1FuWSrSoqtjzai4kGam4baf1eAi48g",
  "key21": "dfyffgHKrj4dR6X48RFsJQUtPMttAPSdhNXyYo9sLsbgnXMnVBFJvoVPmTzEGTKAT5gzb4BSot9NzQ7krWSTB7A",
  "key22": "5Aux2YQu9Vwvv8N7TPYL5c6UER69h1v46AabzU9UHphALmDbtmwyuvEH9CzTaDhF6TsiQfmj83iVQWiwFkADBkpB",
  "key23": "2soCRkcHFrzwmj8h6mxn9XiEjoBYL9Es8tjHxdY7iqozc2e3SA6zMGJfCb8vAuW4HwepirsHaP3eybrWpBcyUrV7",
  "key24": "3LbMbQCRGw4umNArWvWPUMwwzYQovfSGUnJjb2u4MNZZhFw1DsoSNvrCDZLNTckRepUUXYqq6Z8V2BgW6cFFomME",
  "key25": "2YDJN2SErnRUWhWt3Wsu5pfa8XgzL62Zb5Kvn87QzvazWkzZ21VVdyzprd8E5HmP7vuubacJx9MqbrNNeDYY3nLE",
  "key26": "2udeY5HAooHguijaTZPRAKyjVytnh8zep9U1QKLRffNW6g6fikZksTzMH978wZdsvbzS2RZKh3JxxHkhXQtX1kf",
  "key27": "53kSxHV5vFzLzsxQrZw4F55Fhswvh26AjXzxhFAP6gCouTtxVUxJJbhibkNCXd9pquA6ifNNQC6Qh1C1gZQ79suc",
  "key28": "jajrgbFnYUVdTVBzihm5vohHqTn9SRK84pziJgTSZxdCRXN76PMcNe2tFzLDD4SNt91CTZwgpqCe3G1JxfSPQKf",
  "key29": "5Ysbfcveqhy7NSyejjguzyaoW1RzJkBMEKkZaw3k94GFyQsPgqfN2DLiVHUtwEkj96LGmkwCguRWwZneDM1GaSAL",
  "key30": "2UVeRzu65o8hcawsMj4aczfWYRjHVc84td3Qa2VMor7WA4GzigGaYQn4ojmgzDiGkaBSVAn9vXpQzTMTHp7jcf3A",
  "key31": "4yXyRMTuXq6zfxbdnaWc7qu9eSZDQxYgbn8s1XEiZaT9QVpSYx7R6Rm4MYS92HZ1JNDrkAuyoHYbu4Bq31BUCFWJ",
  "key32": "4Nyh4LcF1TUFa9V4NUKbv3knoeKNoSJWDXabDbEcKni53GBHXbuhtrXwsssZ2oznUGNY82x2RQvUSUw5E7Pajyz2",
  "key33": "2FJcqF3tZntmF1WE21pR68TkkhykNXSoyhz9HQXVxv5de6gdt4aK4X1xD486EUA8eZxthGGdez2jkCQ7vnR4AXst",
  "key34": "4FvEmPkNzE9dhyePQgvL8jKJBwQxkuEGf5Z3MRJwuUd596eyxosvwtZNUQfdHZjMBgmnwhBCxCvrqrpRrNWj8v3b",
  "key35": "4b53MahBjmSHvoLpU5AqNr2jBek8XNeT8yqpgXPP2GWpcAoxtKA6V4aVUiU8goapRYdjLn5SdnjYhLwzvX7u7ysq",
  "key36": "4m6iQ81koeXquFffKuHwSYP9YFp8HJyq9Apa8q4PAkqVeyTScKy9umtvKDeNuHJv8CWGvGmwTJ5DKPsEVzNhnoV4",
  "key37": "4rKuPEf5ayRBR4fY7KwSTY9sdQK6QjU7c1shME7VRMyNRdYBZwTyuKdx77RPFcH7S84jNNEogbyhAXLh25LJrK8x",
  "key38": "2eoUggY2vydHf3a6RtbCF5mTAUdsPYTF94o1TccvcwQd1d9rdgzzVnMdAmpA6QnriwQP9jxbbYb8R1DW7yTvNFVF",
  "key39": "eLv6zqVA63AeCPxFj67d8jL8S2CKkeUuUkPBuYwDieuDPUk3TH1ga4hPJ1juDMQMGvNAhHuayEhsnRhagFe6rgn",
  "key40": "2HKmomZ9SMcrottndDaCmsk5evtFZiSD4vp6EegfwJ4QS1a9LyCr1dhAcNatJUU9HTw4DK2wf7hkpFbPAJnFCxpk",
  "key41": "5FcvVrfTgDCdvnGiFc2MJ72LRmgmHZVTfPFxQYR9SRDbmmrQqmxrtQUovwDHKZNZ96TRVuNotq3PQUy3zLDBECGW",
  "key42": "64fT8yBtfiPMaZjU853imrogjgaUnZkg5AFz7FJQMMAfbD2MiLXsXU7N3pCQnumgCe4BH6nYvCk1vzuTYEruf26B",
  "key43": "3wyXgEHwqwQut3BZ4jPVTXU2FVbqCckVjGrtkxzjqJ4KRSGWwVv8FsCAQFk3upMw7HrY3Trinx6PGvzMtcNcJ5rf",
  "key44": "5bJNmyn545qtA7kG7MzM6oHogn9KdquLoCwBGQiMgtqGu4pFRyJLJnXwnhQgjH6SoXVuzbgzJcAT42KA1LXoUNNM",
  "key45": "UkwHcYfcWfodRJChGHWkEGBJNf3gBmopkuGkkM47hjYyQsxVHAgjWa8ca5k4NoMiLyBk4YSngpMb5GDipyvCdpr",
  "key46": "qGatZGE6MjRpNh23LZRRP5sD2NzonDV4TVVTrumXCvuJoaPB1DgJqoJ3SMweDCUQG7je2MRjjrok9oJzCxvCt1F",
  "key47": "672meiDWpHmfaAXvyRA1USxtv9axg6G4TcfL7Dcy32MRsckr5jmvweW8LEh4B2Si8zFtBp17mPgciBAm2gnF1U9L"
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
