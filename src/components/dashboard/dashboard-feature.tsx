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
    "tgJKyVMJtSqxtarAMnR8yAFkj5uBEv6N2uwpZVnfS1pKRpuaunuGzB6t15ozFhSC5gqquq2Yc3S4NXv7H1T89nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsXu26nrENqQZAgCy14LPTfeV8yfurxzd3H6396kxAZ9mUoaRU5YgoqPsk2j6Z4MGgtVL9APsumvvafPRXmVuWb",
  "key1": "4eCDfwtj2tpyQSzCFfha9CoJpAgTzRSLi717mct7TDqNRzLSsK4xnyod1GVVuobR83XgNAE55nDRCkA3wBdEzJAj",
  "key2": "5dM2Jt6ArTbftYDHnJjGKQvM51TFhukSyJzH1K1XtftDLR68cqpJ6EuS8GrUxibxXcN2AkCDukvxqT28FhZZueX8",
  "key3": "5BXbMgs9g1yBtSyyeXA3wJPXrfcuyKraRGMGfYcfZriqpcbLgjs2a7NMQ5efPSXSRFQSRoTzHTgcJ1TTYLrrfFbB",
  "key4": "2CXcqCkr9fW8kccCEi5x2HXpYvyQkVVQwCXtF8stbVwtj6bDgdtYniDMVofDG9LJbdurwvvp4NvMp4qM6ArkKjCY",
  "key5": "3NZEyPFrfg6QD7QZNassqug12npbvYmpgn2Lb1oW7KN9WT9ENjD6YgNQ9VL9MCA4dM6wpyjgcBfGESbrnxVX5e1r",
  "key6": "5LoBbTAbehteTZYC7WyiYGACpn6ryeH4mpneDegim9U6zD6WRNESg3A8kRGdU3CsB9BtkyGBCeueuxSD5vgLzVPU",
  "key7": "5V8R5XTceVocBFwQvJ3gANMnKRKc5xkGC93SaAzKQFqRR9BpEHFG9619FtwdmQFxAWR2rSZ92u3mhwk5aUzM8NeB",
  "key8": "2YAHMUdWbniHZBLjU9TAxxpVA37DwftijPgHKnkxdLW75bPApKWQoHKjQPipcTqiZe37G5cDcZkrgdT7XnynAwBy",
  "key9": "4qB2Kxgn25km3hCfPpiTYZrXAmmDJGxsMW7utDCQJAMpWNmAB1mk9oFNp8CkzN219PGdzZZPzMmwjHThD36Jtbha",
  "key10": "2YpX3eiaPcdroJgDqn8CsnuqpmkPCsTSa5D35Y3uEp5VF94KcHLjyYStViaCX6m2iraPj2KFUwu6gpEyb6FZk8Y9",
  "key11": "YNnoeZFgQ3Pv1Uhzq24iG9hMJHoXxV8xAAbFTDDLzBvozN9koLzaMdoNLU2ZVWLg6tcJEb8wEL9hCB11vFhGN9x",
  "key12": "3SBiHKBKNKdxNsCiwParwYNEQkmvua7WWFCZWxvc5WN6MxjnPUETVqddb3YxpotpVEh8KL94253H5MWX62XLVS2e",
  "key13": "2XAySTB6q9XwmoeMBLVNB1ax2Ki5DqpGMf4bhs4Ce9ZUbWzqqWxNR4xcgzWndeqKnr5sLcFaqVCX2WRwZEx1ghjm",
  "key14": "58iH1JWqX8WGhfvXkm9oKWFo2NoYounNFF56LDrFSyw5svogfpGRre9u7Wx8fsS7uYWxMTu9zxxRQKXXxjPhVS3u",
  "key15": "2DkESkq5YZhhPaDvLUaYALAwNDYwkeCpog63o7mtNFvahG7w7dhoTn4X1sxiyyut8EDDjP6E1uQidjnS497x5nLc",
  "key16": "2uxGcVaWbLNTvwyFBQDGCiUk2GUYFqA8xTy3unQacFD2sdHF9zQU5mcMrQcDCfCvfqBhY1WHfy5d58eWtGRbPgnR",
  "key17": "5f3h18RCgCYm1kXfcPejiyURrFWFGhZi4BNFjCPZZJi7MQjD8a2NKEvkWwFYg77ZvPcfsXoctdtAXVW5389v9Qge",
  "key18": "38PpDQiLTMuo69XDh2MtLRKAXVBtBnanAeg3TDnRgthwA7bATBHRa6ZZ68vfxxAdKrq4NKb7AxnptHbfMFvbpuNp",
  "key19": "5AV5Qoyekt6K5p64JGMpBpJUYaGCQif2iCWc7EuoaWcJ3AciPiL7LXf3ENKe7gWnNuDESVdWCFqpkH7F4ieSFwXr",
  "key20": "5xE2FPtt7orP3R2XoihgQXWxEdqYAJAvzGpJRZtfQfzVyES94iWChkmiTbmhYvgm7VnpvU7NvqAnsX6ppD2Pgfnd",
  "key21": "EBa3JkygZvnjHLRWdDS21Y3vCbSveDfUDjUT4NGzohypEqqnS4Umj7jiieEm8RLnHYnbnBCbA1THz7gW2Voysi7",
  "key22": "4ewhgAgRuSxXHc4Eu2BPm88w92FCUMC8TCDiph8ehrzVsbqewBB1i9bKtLM4S2XknggTempqe77DjGScNiUbW1WR",
  "key23": "jz8ZkWs4kyceFZ5uG9fDENDGdeqyqtSgmHDL1kNmiX2rKHojURAR5N75mLtqXuGQoNXD4udp2ftXDvFSz4ZNE1g",
  "key24": "5xNQJiyWWW551oCivc6f1n6qNta76shgLsbSjGxRRCra1CKGyf9HREy2DoEmKCXEVFD6wcXnnfM51K3mfAPCBUtU",
  "key25": "28Hk87G4f1VRBYniyAbZLpJFb3ZmiskaUxiqKNvKViMLbXPd2Vz8n1DnmH3CBSCEP4cZAjkYmSzsw1f6omA7dyPh",
  "key26": "2HatoMBnBpfyjjGDESbjfmofQz6nsA6pVjkSMFhMpd45qYBjoZhKBqGvt71ChQg2fYQUQsEYLh5fdLYULmpTkV2V",
  "key27": "4LPCMq9P67henwBm4HmeBoSuDQnm6JuRF33axQoVxUW4eG7KCSaVNnakbdN7JWChJD5U4yjWakRJS9z9ZNUgqyBQ",
  "key28": "2mVUFANnDzt1ThT4n6JgaVCRAkecPF11DeLS5gbjD5XiWYaNrdoLRYtp7WpccspKSV45DaYWYeBh5mFZXoddyeHH",
  "key29": "2ZCYqFTFXQYLBJ2DjhkFCvXmyAapziKWHXAtHYBAQK7EEZy253nM9CYKRfeopYYBvXYurWBQXJiLFHuEo54VbyDb",
  "key30": "5HUdvd4sRELXxyaQ98wuAed9W22dmktvouCGYGGV1Tbs4ks9UpGVJK37YwtRvCZQCa4qmtWzvzTfGgbfPdcpWfh1",
  "key31": "67q7mVRxo2NwBeK4W2q62BM7EhtMHUdJtDCjkixFTqq3zahgs2czyDxZxZJWW3KgUTyEg6tuTXxDi17q8SyAid4b",
  "key32": "4W4GpXAEEwxyN91yymKV6DV1JHq86Wwe8VmvM6cnZNPSDihVCY2oRVH79AShxTMh7ouRbbCRscDV9qmj6oqXvKbo",
  "key33": "2Nro67CgcZc1XN54ZzKGnRzo1qJQ495J9A1mTK2gnj4dk5cDL28m1oWmvUJqWPXewAJywH5CBN7DsrkxyRpNsbio",
  "key34": "4bS6MJxULryn8MjDw64qjv9swbAeTrSPwzQBSVfdNwNZJJcmQ9PcK5ZZBzkgUPRXeiAWwGLqEELyuuiemwTfdPFG",
  "key35": "2YsugExjdYHLxTpEx26hk4xSifKmefN7ZEPkoyQrAvh9hDTWiqwZ4TJ4tCCP9kRsK7GxxZs75kQmdce2bNwcbssp",
  "key36": "65UHXGLk4o4uz1uPsUpsGys8s6h7t6TZeMgc2Q5VdPThHNciRA7fh9VUPopXyiB9PsEary6Lzza6zgFzixPYJYqw",
  "key37": "JuvTsnmZYPfLBUaL7Ezqb6dCwF7mapz7kWNcmwULufoxqWR63YxBEFUa3co4QsdRXKqj1XTCPXXvHxXPSN1aLgo",
  "key38": "3S22b68WfDKSUT9zH7ucNGQ2xBhd42YM3qxonm2EU2rXZaHneRh1KMytxjk5ArZ9tfLtuWevkNNqiALSj7w8viU9",
  "key39": "5yX3CdTmhr8yE9cGHFcxpzMkYQ8FzLGT7iRv9SJbeMjHgxrP3j6ZRJURXEUb7FkvZdfnTN2TzgVeGM7LrZpHh4C1",
  "key40": "5udq4cv1SC2uXd51gWtWnBDvvYCJrVo7syaLYcA6kUEWER9x9rMWXwwW96gxPduoR9mGiFtneTSCShuNoSvuV4Uy",
  "key41": "3XahNkTFVQj9EMpTa4iCtGNFyezp8jiSkyXX9eGwpVMxbiemUuGoCmGZAoL6xrAMZnKQy52GyViSm3FyuybYcjgB",
  "key42": "2ftWM1uhownfqfJ1WYaow99nXdub5wBreMBk4w13gw7KGaG6CpGjUkVyD9SWZyz7mGFqMUPpnT9s2q8Js2jdsAyE",
  "key43": "2nG8Q4phkB6ehPKBQ2vbqSZEkBGq6MP8rTXDgk5c57EBn7k68ZQ7LxnhnCRzUojY2qoujX34erMMBKoXU3txbVJU"
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
