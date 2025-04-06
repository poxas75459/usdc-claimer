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
    "o1eZPeT4Me7M9gfy2gWdgDvvzktGV5a5JrcQvnUXtq4DpaExiJWxx3WeaJHLDN4jWnsYPotea8qcfskzTtAzn9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9t1E3baBuLZneVnfCRC1V2gW4QaZKuookzBd1aXEDx7MdCmjE6fiYcMoWyRd4k2yHxqyVQBcb4RqRrsLS9NP9s",
  "key1": "4H1B8ZZ1uJRJehDemyoQ9jRgyuDUv4tJV7H798HXougXkzJJeU5Lvhfi4g8tMfyLGZiwvJ9h35cUzCr1PVnkHnGP",
  "key2": "2jjyV2uKsYGZ61EfPmSt1vsaxJKrgRTEhgCycBnmXfHGv9rhqWni8gkeY1LQzvMdgkLNAyBu4jWNuQRiK3shezg",
  "key3": "49hhAJmKAU7k7VDL7z3mS6g9ovhEPZ3PnRvNWspb2EpfThDZy5SvUbcu7YrB2CYcQx7NmNPK3KovZMkUDB7Pm3EG",
  "key4": "4Y1pMtZuy7CawY6qMgTJMsNbkAusmA328hZ1XqUTJauPWC6pB2bnK7tR6u8omEf8QRiVQNgRMg4HtGDp3j81hMwK",
  "key5": "3X2ZwnAaMaMLmEakaGqV3RLfwcGdS7CdEXBRkcgxH68jSdoLZGWq5JZGVFxgJafhX4wJnBAJ94TRaZwH54KJdLbA",
  "key6": "2pK3NkQ66JZTTZ2RFBCCbk3n6eJ2NYU9Vzw2gV4iN1gm1sahb557gLsEoL5JjHMYd7ZSHVdfa6bTzfj2Jy2RCQDk",
  "key7": "3b3WwACntZ9d6X7KXSr6fzDSKdjEpdYG78BHjp4FBeuVuW8fdJzKeVbbMZFALo3kzywoF8yuMmDcTegDK2nSPGrx",
  "key8": "2N9X9GJsrXxHVQadSoNd14ZPTTaV7LC6QDzwt1hdQbLJKnUdRUrxy7CmkQ5VFqJ4gbM3rnF46JbZiF8idwR32Nfc",
  "key9": "FnVy3LsseCGvFq1QZNn6Vtjx8j2UwXS3MuVKevbp1H74G7gvSWw8TNySrrGraCpLvRhP3KyKzKbY7WCVWtfHjJo",
  "key10": "5UKZzF5JiUmmRjdS4vREXGfPhMqetFcDPP6fHkL1YCntESnxWGTFNvf1k2PqcbSeMv3vvuyFRdSnqFj3uYrwJgnU",
  "key11": "392pFi3dupru4Vt4tH3YVjAr4rDG1ffH1NjZbWvDURxwTFmQsi6Jdp6kHDL9PijGKW6YC7Lwxcz9X58ASCmVr4yj",
  "key12": "3Bf2BcF75EFnVHRV95krM7ju8CdNLdwnwvbwCHZhFsLLFxjd1oabVnY6x4TmwayTDpJ3mDgVdyEwA9f7a7K5NLnP",
  "key13": "2U92DB6jvatRTmAFnXmnKQqNCFFC9FwNoPVHDAZ8f4X3btiKN19N83BG3CYPohijJCJtUefJpUk3pAc5a9tMGS9E",
  "key14": "3uUMUbnLbRsrGtArHuZFVNuRCC2ot62XMkpZGDfLsRSVN1WwyKW9RRRX8GmBryQVVrp3Cwq4iFhQu8KxDtZsKAMA",
  "key15": "66Frx9y7aNjZovEANNyFFg3Ke1cKQYHugnDrHnMb7DtGCtA7Gsu2C9vcFTVjbzRQmUn2ptxHoXxZ5Jwp8uSw9A1B",
  "key16": "9fUPGae7RwCQZsqgFTVn3KiYP5EvoeFk3UX5hBWkNhxcyQMdyxFT7bpcynGvXa1XKJ5aye659k7W7zjMwgmmJGD",
  "key17": "ibkpX3iaoDVyJdeFqabzBAKgVYnX35ySoexgUxXyYZMBHrMDGSus5obrsUupjm7oWojA6UqK6o8MtftycQaWeFi",
  "key18": "3bNDup5HMLHk57JtPY9fShATZLDUDYzzzx5ywPdFopYYzgFUzi4JyFjYuqtntLTNidSriwebrnRgW7843mvXiSwS",
  "key19": "27NYBEoYqxcx8CjVsMwHHfZti74SNhHTPE6ovXJiSepBkJnGRuNcCgrz8yHgq1MNMGF2Drax89PeZDzghoXaPCCn",
  "key20": "65oHsYdJeoB1QHJihZ191yfE8LNo9uMV5RFKeEpAkyyw1NxHdQBz5eKW7KQXCHbEJ7G6Si9TCM3iQpTvxx14tBnP",
  "key21": "5fM51LtArtai3ucmegAqBortHq8iCZPakNCisGiewgesZC2bxWitzr27nKkTHZEmHjGq3k924ZdXieMG1rFo8TE7",
  "key22": "2stKZ3i7i8n88LNiDJhtxEXanmhzNES6wtaYd1ZkJGx8tWHxY4FAGXbaY1KRL3ffANEJVBUJkwURW8uVwQiuUM2N",
  "key23": "29HyBVhMTaNPmQn1yNzRfu5YQM4uQKkYsj6prR3zkoCYLVs14Ft9bzRrfaGYXCQfYMs8tE6mULsochPEotFATGke",
  "key24": "2Eoik3reKo7dJY4WYotiWMKu8k9c9m6gD3qZ8Q1xMyYB1yA6RUo8yYWYRswNUjhBAHuAXFx8EVJyCYsGVEo4xvwu",
  "key25": "3KdfMW1bB2J5tpna91GjtnEyZr3rv8H1MGEmrogTcKmp8Tov6tU6dsw7cVjV9ALGS9fiUSnFYigQShwERxDWGaU6",
  "key26": "5L4WE7QbAAM4WvyfQrbWFoERHeAh7hZk88wjMdScJevVTz5FzxRu5PyJw6Ur4LLWAcfFx5XBPpNeiU34Ee6CPvc",
  "key27": "5rnyETfSQheEtiSAYHdfLRb3ZKLPbn561wpPqFa7NqpQkUrjRfA6MVtcsyiUckXjEgeqa2C9MbMKWLgquXDuLjHc",
  "key28": "4WQSmeowbcc7dD6BVS3CHD4Tabsjed2MHgxXxknwZMbvdQQQEMswadsTS6DB825sgfNCyz6u9MfidNUDbfyWNe7",
  "key29": "2xhKduJfugGGVNZt3hW4w5Bkee4UWCtdwu2rVWStVWSVsK2KUtkpGg4Ho4AECreFNRAMgxvwgRwqVzwXiaAvAoKb",
  "key30": "4v8TUKwKLdetC3T4hnA7yaa1p6XXXXe21Aevor5rbEsaSuVSABpEfaCe6FftKq5PQB3M3QtdR6vgpKJCbnLVPLPQ",
  "key31": "2YkpQPVvkyoUhBJmXd2TE4SmjAMyHWcBAYnjAgcNvRXibzyRUThZkzygPeqGne6fmiNY1EQZTKpKP85HxExrmS5a",
  "key32": "5bPTZHqyMZMdpwubUiPGDtcVrb2e6qzcf9ivyTdpL6M1FePv5QoeYkzYbTVQpP9DcDamNPRK9YgwyyDKiT4GU21r",
  "key33": "QTvS2kVKeP8s6NBNptMrzCHSRbSdfdpFumuuRc9FgmXmUivQhTE5r3n9AQ1cygjRbSTBnfB2QLG2y3i1ZaQter8",
  "key34": "4wgZLdq4LjF4VEhiSwUboyHeRzg4urJhHk1ie6EHoALyPKp8aJuxhFiCYQssd1vp2taWBzC2G1mtXU3NJgdveNe3",
  "key35": "2shYRDLbBRGNVpaWWjDLwKd9WNXBMyzU9RxEnZ7GyusMuZYjnGKWW1PXxdH6JM9hfZXs6yEp2f7cMm8grrhTfWMm",
  "key36": "4UVvzTEzUFB84iwD4HQJawRVttViGYi7WBMDpQGWDbibQ4EdwgWCrL6NMcynrNk2usiwyZcqgMD3Zny85dM8Kd6h",
  "key37": "2XLjm1Urodrr3VZS1DSeV3y3WsnEX7AcQbEX6KXTZb8Nhskxx6u12hmkDPTF1kR854urLta7Qc3avH8NgtGfnhih",
  "key38": "2SdZHq6MKwmkMoz3Nqr8KRiPiZWYAvv7rj6TGbTEMAmCZD2WoKpgMeKhDrt7cErqexbHuzT7qVJrGVbLmoXb93JG",
  "key39": "5t3BwK31Y4Nr3RwRHDtkJxQ4QoL2D18Kr6Epkqror68geRbqxBJZFHbtL2aPF4A2bZLbxSpeFuaAXDHYDYL2cdo9",
  "key40": "4vGsu4hHGzRT8aEkG9PK8xgqbc7mmx8rvfkepfMFJs2FQ8cc36KxFfT9uuT5MgmyeqDeHQhPaXdi4KorDp6An2pj",
  "key41": "4BsXTn8iRpFm8dVyxeCxQPqfPSX5G1agZC6XzpQfPwi4u6kKN25oMZ736o46B3QXoXKt4ZuP5mHBpzMG8vcyMMTT",
  "key42": "26ZdtVWruLgdzo6xUXY3dJfgk1FxbycgwGP3Hz3TYhqPJnQkLzFa47C4LgkBWyCCBC3D1KuhtEWz2uxLaxiDtxyY",
  "key43": "4wZpDmg69nfUZU3RhwxJEZxujR9iBLPDLSe5UQcUpLTEq3w8wW537hJTyzgPaCwjjqnrULphsqmEES75wzarA9jM",
  "key44": "4TAg1xfcxv2kVGHs4YdWxDDnv2D1DWHDNXiunKJuethCHLSogrXTsz6iJns1DXkiRQyy2V3LATFtGbP2T7xKigQe",
  "key45": "v6eYTYgehz61LLNeMPGa6oYeqhdVRRownudHTxzZGZDF7pNZnaPVBsseLAu6Md3bET6qFLUFdpfFnG1NzZ4WZXP",
  "key46": "5WWE9Z4CdaD8FnJRmncgFzssqYQMQfK1JHrE2mXKJgV3m1bywZRHC9tEDTA6oWamEaRFZzYkELqA86vKGKweyuUL",
  "key47": "bk14fYBdKAe7mRCBrgvDDVG88Rk4PDo2nK5wxTxeJpkwSPbEj1sP4tfQroSXkbDSuEUgiaXG8AikicSifMifD5s",
  "key48": "3yBVMTakFe5P2ZdeUskw72GZnDiPZwYpkvxr6scVVPaoVHtATVrmgxKymWVcxY8N2QXdxPDLM4AiZkjyX3tm5KPc",
  "key49": "3B7u4S3zFcmf9aeHu1XUwZzY5T4A826yZwUdsPo6U7pfZLDZThF9qyy6TV1orKL3u9PCKyMo9cH9MqwpkbSZ7guP"
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
