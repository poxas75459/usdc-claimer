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
    "4HcxddryhpRzFUdKbbreyWiiCqcXTqqgwCdAujkDs2MmRbNGdmup2iifPQv5cMUXZamACyj2D7maKZQ7z4H8tnKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nau5ox6dH6kRuZEig5KRPjE57f1N5VmEwGaFNS7qYw5u2Pv827zWDcom5a2amLuTVuUTUyT7nKXuyZKctBSs5fv",
  "key1": "2LswomgTSh5hqMUJc1SMka6DnpL4yqmpZy8mLdjk1YYTqrjBWKHJRhNwyphY5Rmhz2rYHVgUt5TvF6u28o25YRKf",
  "key2": "fdzPo4xMyzSsmRENZxAorMsdhW92PShXzNtopMLScr6VaaVsp413Nc3E6hXTd49qkJkPfbA7wWCdCuRUDgytv86",
  "key3": "55PHrVfckaA9CZZBFAVTZH7oGqp4y898xyFueruzWX9Zc5urEc8ktr4T7uB1HsoJ4wm71aSbVFFMMUbzEf3wgsWn",
  "key4": "j7oxNRUb21RfTFPGspRzwfnqtCN7Cb2Ng2h3J7BR4Nt69knnbVcKCyVAfvU3JXBwzEzsNzeXGcKFv9c2BDv9xB2",
  "key5": "3c8DP4YMBchyzRaD8G39xjRWzCdBcAwVPkRrcZnd8UgNanBcqcjiXvt92M8UkGsgFdA5CuvrWfD7g9zB36yH39sq",
  "key6": "5M2z3rw8g25harBTwahfJwZTNe861NMC8JU3AC2JYFmYa5nstDssKfYCx8yUA5suyZA7QUi4G1C9xJb3VE49ERLU",
  "key7": "4U7SYYjKZgh3QZvESWbhGi9mBfDfpqojtUUigr86F9Bpa8fSn5Gy3R6sGm766sArXh7bWJwzniZEboM62h1kCdLy",
  "key8": "g3iPGHqE2x9dj14zXYTFR7vrXVQyMqjM4WyGfF85mXw6Yc8k4wt5fAirFuxut2A5Ymn9MVGKWg8aMhgwNHy6zEu",
  "key9": "4sMKgkHGwkR4FArvPL3sYTDfiQevHXRS7whitakdYXmwURNWVQZELkrM9XMjccTD3gkJ9pDqrVsjiUaRkAHzvyt9",
  "key10": "2apQyoUDDXERSzVCnK1E7nxE2AP5ywgGnYiXWU8Hq5jyu1kJLyDBUGQy4proDna4DMwL1mkMrQK2LZkZii7eZ9zH",
  "key11": "26kiZauEwEhSEAdiMc8EJXxUTD23Fx6cnH68n49uw7mNuNkxsKoeQWcBvPfHBqXomjQ8WefKcAsnECgdayqgNcRy",
  "key12": "VeWC8iPvLU7gqwqwCHtS9SFyJMqKA96aj2bcVtLU7nLAp7K8rkgVwcdouAMk1xVVRfhxNNdBgh3K699iomejXg9",
  "key13": "J6jdC3x8QT3oazMPQmDacrApQxyW7g849jr4bAc7nD4z5nxaLR62JNifvDhMRVXbhi5ym4gF14FXYa4bRAjSnmV",
  "key14": "2Yw1Ya6n1LBKAv7GVhxZmV5hfrMABHhNLT7vdHsjrhJwRpfc9XPLRyMYoFbrwQo2WPNeVMF4QcxCbcyqBSGGYvSb",
  "key15": "5V47G4bC4otVC5myATWq2zYvapXmMXtKsnRNVETqS8PmfkvT9PXQ4XSgdzGnd3kxECQAgM1sFRKaTtGAx9QkaZVc",
  "key16": "4RwuLA9QFnHTUv5GeiMxLb7LejnPGqssmr27g47AD5W8TFA1rN5XFtKpi3aRoxzwNWCQCajrr9VpQkwe2wUP3tiN",
  "key17": "4N6gW1Fo9DpUG3JzDgGwAKHjZ2YGaSPdvyXJkwT4D8QxaKLFKGGpPNj7z7iqB4pnN9o7CggYrkfTQNhNtg5sByP9",
  "key18": "L6Z17eWC8vDUFdCnYYGsefXGXe5LDFjMubPyZ3gcJeRRSzBvvgUD4ZWefFKJwep14waNYBj4DHiwhMbgieqXTC7",
  "key19": "4AnkjANqmYR57VPQ9FP9e6Zdn7kv2QMfBc3WZUex8rFJ2BrgUQaid443iGmyUkznpaLg1hun96499so4ENwi37M5",
  "key20": "3JqZpJSEyJmkoLkKDzZiaB2e2Sf5kqGfDnH1g1ePqeyP82FVxzJfaztZZN7pncs6ttZrdgYWxTW64VoScQr36UsP",
  "key21": "4B2ax1xCapakXa3F5YFUV4p8DCE64c2SiWrDe5Z8Yra1m2L87Fw4Gu7hSg2HXJK21mC2CRjwUpCVoyMmxZHmixMF",
  "key22": "4ydBMmfeDVVBGsALqpoDMjjk8GsLoBSsW5JZnoKT1dk5596q7GRDLJHH5G4NJPogj1MmKmFs64v2AsAsK78mJACo",
  "key23": "411HzzyS7SNkhnsETCnKKbt78DdoRqypkjw8ySxSy6npSiADePWdvQDzzTqu7AYmUPdfTj8Ux2cH1eWU7HMaHo7X",
  "key24": "2LTrTW9biTh8yQxZ7P5Q9HwxTysYaoZDmcHxF663h3CJfoJZSPwivcsHX7JHboij1gsjzPAv5ggqdJ9PwzovjXf3",
  "key25": "5Gt1RUYfooKgw2bjuFvphamq9Njrs9wUYTPQgV1K3uBACN31128doGU5LCnCbcbJhzD55dmYk39Sr89eQc4mb6HT",
  "key26": "5S8YzXvfEiLMbSMH34754iEa2PffF5hbUD4TiWjs8sbwGHARh46FjaUE8xWiF7toHgyPbM7YVpmVWaz1d55nGbYz",
  "key27": "5asnzbeeqHBjh886uaQszPTyvQyiqGcpCwUjDeupGxS16HZU8hQEpb1AwoQ94dEHcQMJn87YimcUDHGxbAXKCFN3",
  "key28": "3RH5qZ2FNDxkcxENu4P8EtmazjbjRBSp2AiKiQbC4mvJA4iugWDgXa7wVWwt5bEyPZkky4bsGjrquLRpPLUfRpBe",
  "key29": "3cMFaQaoP4P5XCaoDP6ESkxK2HqF1xqYZp9e5nWEQfuikYeKEucpqVxZcsH8SYHJtz3rfvHX5BZz29CDB3FU9ugZ",
  "key30": "5Vnx1xVYvuBezBDkGc6J5FDh7rFGu1CfV244Qk4gcoTDkey97e9qmaQEQNx8P93TQhpscJJSwUsPxuY9fnkjoyKw",
  "key31": "GriASXZkNy78MDD6eTeaan4SJSHfsGmrBxPX3BE8t2qutkdar8o14ZcMofjty3bUjK2rtmDxjCqEb48tqCHym53",
  "key32": "ELLSf6acvMAfP1U4KG3V2yQSEdaVezt2zBXPNJoMG5sHY5DZHvgYKqx32tufpTQ5ZegpzgJ8LE5TrwDZRuQD4Ln",
  "key33": "5NrJB8kXM9QoEZDe6nc7Si9XvJKAo8Yk9VozbRb2UMW6iL7yuLGVw5u22YhchWDFhGNyyCZLvw7Ye7wd496hczX6",
  "key34": "4o9g9LdGgaJjMMzTh2ety68jQ5QBTSibqcpXWFiXaFxVmt6deHAXrUwRsGRunFRei1NfKqP1R36jBNYMe2QKotdL",
  "key35": "47bdgwvmhM9vsq7VeovcN4sJu984vrjc714SUbVhLy1EDfPVPEwwQE9jcP4QZ6xt7W97GfRM9YgEyKKZ893DNvsG",
  "key36": "5UjxKksJdfPJccFUxRgsNFMB9XM4pzXem2onxip5j9mnygiJCZ4nZRHff5biGjto56Tn8Ms4ENLo3WqYkqeVmmhc",
  "key37": "39D12JRauoSwQcEvVqKaLg52c6srqomGJjH4zpypMWQWms4CjHGUSYdFyNc6hwVPNm9SdFpye2hn9wqLwTkvpvZN",
  "key38": "2MJi1vwqd1LXtxJw91gGZfMYo47uU6Dunt7kQL8TfStZ71wtzDYYgBmji53c2gNMV3fikMib58ofkX8o37jrGov2",
  "key39": "YTef6HUAMEB8pUa61Pe2ESmFwq2aeWxoiik3Q4vSgMh7A9PpuSb8NasSzdZoUyzd2USJZsqLaJwUb3ApaBT6nMk",
  "key40": "4f2AHVDYmuYxwxnRr2W9nkpnuh7uGg9PsdL3fLLo1ChxqwLDiqYzC1ghYXaAN3WCBEckD764M6YA4Z5nmMXHJRs2",
  "key41": "yYJkhbAzUpqgNkjZxNwoMsjhzcXJeC8wmNLJ1b9EbDe6bWooCRkfYPSDX9C5Yjo9ecwSWuBsxBr1j3JxDauLD8M",
  "key42": "ZLLtzeXjKa5dZTrv7gs7ekABgJ5KgxJLmafqx3UMRjVQQxyHr79naZeZWdvzbdi6m1T5tc3hY3F4ATvqX84V7NN",
  "key43": "2sFvnVCK8yGKW7tzVDsMcPCb235bQWU1i7vKskue3TNaqouD2fvhwkb3LpPwppcByL5wPHHTH4zXiBZVhNGdpSBN",
  "key44": "5fPEngMGKjbCX5UbuLNTe6msYLFiLA4XiQ4wcvJKRevuyDyLrUd2jeyfCi4Zc8Vx72SDbJDoHyCBevbD8XGp8CSF",
  "key45": "5ZnrY4er3z9cyEGmmjejqjWJW6gTKhFHDxxc8UWPbWQ2PAzSRQGKMYAkYSbZ81fuAqD5gtX4qChskWpNijwsnAci"
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
