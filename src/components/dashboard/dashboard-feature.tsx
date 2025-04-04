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
    "5HTtaFdnW1Xd6MHJjVhtU7A4mNdQLNomK4UyqggugFBgrGJxGjEzWwK5NvuBkHuwWZ7aH2rpdo4XnRLAm1i6tREg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXDFwHbvfn9jHA7DcsgiDn7KxXwoZ7zczK9rGtw5F6UYH3BmcuuRTET9VF1fmzVW4hWBGCrnywLf6w23j87zLDX",
  "key1": "3qSo22sJmm5cL9KiwTtecm9UhoAPirTqPirZxGQEagCSSBiJNcgjV4w9V3XJJmN7YDEZLKLK1teCTvZ6s66s3aU5",
  "key2": "ogiB2FxN14kDM9NxTE46hUQr4XAnPjYqTgHvFFBT7oSvXHG7WT1NGBGS9vX6BM3FkBA1NoRY2ffmWciwr5PR7Hd",
  "key3": "Mt3zqShs3atxHmawiWQebUEHsouGhk4furcsYyQhqPSdsuCKm8QXNyDHURdwaBh74BVZA15EYJsYfLhTErLwk3X",
  "key4": "3soByFyP7trytmGNc79svBTeyVAaAUp4UKwtAqR1KMSwKt1Kz6Z2W7mePUVSFwDw4PxEMUKNSJLPDwXggGebukr7",
  "key5": "2F5i6UqFFgkQp4pZa78D4u4bMvWi5FpgzKF8UDguJj2MRypnWdYF8xybGwvD2RdRDzb4XcxTkdGNjT8F7qjshKNb",
  "key6": "4zGfTwjSwjEDbZVCzBHz65cF3pph2SxngpiEMmSTMzd2o3cFs19PDKANBcCWLiCUGGWQxPuZ4Bsq9yBCs6jTzmYF",
  "key7": "4wXqJKt1FodFzf1UgZdtRX9xhM5ZmsCiXzrZsiCU7X45beogAdnztpe4313g7N95YaNKCxAk55HkGfAsave1pDhb",
  "key8": "ydCSB4s2RkHAo9vDqeFj3HE4684CXHsfsAWV4PDxt6Z8ZNya4WK6U6yekdpT8VuDfkxFZ8VXzqAVBFkpSUDTE5E",
  "key9": "2UWbUtFMh59SNay9brfM9msK9nwnkqkboqV8m9mEpuVLqXXoahSAtW2A83oVwNANLt1Lr1zy7EbrervoqDZsZecb",
  "key10": "5UMg46xGKcULGxaiBJMYhEAHX9qt2eoJjW4YFjYHQo798esptebRuArwFpmbm3xAhJECJDb7tXKX1SqWySW3SS8E",
  "key11": "B3dLtuZLzhE1goDD4w3vmCRcmjiWvbCqgdxfvx4ankteudtq55R5kuC8RVtv13XjCGjfua8N4768JtPcTU5DBhV",
  "key12": "38Ubk4mK6JkL6CWy4NnkgL7xxwMqrAT9SDCF457woPRFnaJZEoifwrRWvftyppvvT3rXawJm59P4mtTJutkWGhjp",
  "key13": "591QN5afxNp2hQiA3HBwqt3vuyBX3UUHEUhsQjkfQd4hsbE6Py5o2NQq2WejpZGfmuksW1ChiWMYsdLAhZURQgBZ",
  "key14": "5CHSNzhfwQkQz4ixGgMAFPcZyd7oyP1FMGhJUpmcjmSnGRYJyxgnChiuf3prgqrVrV4JytdYdBwubUveHwoN9enW",
  "key15": "35FKHpPF5sFpejAbPtQRszTAxa99vcFVXeLeGNKsodK14uS3JkKGDJGoepTQNTKfvEzJwq7xu7kVxCV9bD6fev98",
  "key16": "5FbeGqX4xVbYgNTMGbF9Ruvf7x7wh95XvUiGemeWu3r93DNpMv7UjmrVZa4Zv9XxxhyDk7RpMAox3uBDD8KCfNbo",
  "key17": "4fWKMoysACVR3dqLSRuBt8QzhUGoGPfHMwZX4AcYJ1QiQnKpxwEeVzWV1d9pSMEXV6EPBv7RpkiKG12wU6H1TZTe",
  "key18": "bGH2LdqcZ7JEU995cWrbTheCGDsRuTqTJpLXFeFDwBe1n5w9rZ9uyou3rvE5qLB1yWh4u9sCw6FLtf9ZQH6JNHu",
  "key19": "2YnE8tQba7r8kJE1123mK4oRKhWqot7rajHw4XPwdPypFwmfzfu2PckyMVtx1WrUwusiKBkC6BHxGSbJKKqfFVna",
  "key20": "5gMa7kgpFEJbZ3G1yThbK6SS3zvkRrtepm8H3Z9hVqwF6HqCSfG5maFFhhfaUSeB6gsuZB72xthSqXtGvjjMpGtm",
  "key21": "5KDCHUKkss2HiMzf7wGNpchsf2VxsCWQorxneeXS8h3gruanvTspjY7YmoWNPUpBMWVAw5nrz6dYikRHwTi3vgyS",
  "key22": "31JxE8tw91ZUKncXFD2YVVu3fNxD7ao2m1eC1hJL8JrgLxctveg3d5qLzRLHmWmP7nS6DdRe851i8HMBQH5c8gtU",
  "key23": "3ECpMhcZA3RVKRcGE6UxsdJZedvok5e5H9nxDh86LWyNSQeQrvvWpbcsEXePararKEyjZAPvzRGhZrKcXkWyMP4S",
  "key24": "4Z59oV1kQ4ffttrNWG4hYaatZvv2df1KAJaLjoLUPt3YeP7S3sGdJ99seMMMaKPxmVKCY7U47MQbun2FNQX3DRg8",
  "key25": "4nshaPdvht6JBboK4LDJt9EHVpd3dXnX5BVeUAjWagYrfN4A91ADRprscjnJuyukw6FzEqhxep68rfxgG3DWXfDW",
  "key26": "3qYKPpVe4ReLpfXZ45quFsiG2iRyWXxtYC3RGbQTms9uwRrS7fwevPW7mUq6dESw61cuPTnqnf3aMDNgYZQ58MmK",
  "key27": "ttkSTg1kWNVb5e78ong2YaHMdsXqJtzCagQDEtrGCFx5y5TMPxgeSGESZCp3zAgyx17RtQGYNGyQ3CQHZ7SxqMM",
  "key28": "285rKaBQrZ1BuspcsWUoaNVPkQpSkpzbpwLWPcPhKpCfzx2Uuwqcegbh5wFuJ2ayH6mM9MNfFZactp4Yo3vRBsLg",
  "key29": "3cuJNgE7dScZq8h22ffNDwhWf6tMSHrHT83T2qAuC1Z5YhQ5FAvgUvqjzMvawVJS6V22vPoe2KdbRzbncKVTZANA",
  "key30": "2mocyeaqphP83khrCkpLgGf6mYMkSfm3fkGwaZYLo4iwQc7prGx3aoGUgFAbfvJmj4FAgGV6gNsy44DjYHTEEQcU",
  "key31": "5LB7GdfUtUd2tdFZXq6VYaXurMBQ5BUgSmaSgmjMipwMkabqp4JoRtoyevmHdez2Cx7MGPURgFKnHqeC6FHxZ6gv",
  "key32": "EbmMSAQxbqaiwUMhCw85DJt98f3DrxbV2nd1wCFMqALBYZEA8zzDpbHDu9R4BLmXNFL84QiVFvmVgfbff8CwRGp",
  "key33": "PvmgVRqc3jXPriz4az7dfYoMRmdYbamikCZ9frq4AbZ4unKij6mKZcABE4b7BznGdcFpsVrDkpYYt9NH25SF5rG",
  "key34": "2Qq4toyR9YpysyQuE7qyWAXRk4JVmyT5mKHdeAYW2ehtYu7uCWwWVe3Ts8j9RUcxNxiY1NtaXnPVBfAZZfkg7yDM",
  "key35": "2dLARYqZzwF6LCysC6ievTm6fvZsPKj2hiiAxsshZLVm4SrArEnfv6CyFiY9YF2ygctMKcWSsmgXi6D4kThmjC2D",
  "key36": "ajmd4wybUamWsiVpmTf2vyWLB55TiorfKnMSdja76avyYMJDvCFCncksjsunGdMhrSwVT8MuMudE14MvFi7b3aS",
  "key37": "HFwJwY2n7NunXrrfbLwPWgBK1Wt4CKHraNj4NCMo8TeYJ3ypgDMWiMz39GUchXUEo6oxdp9jTsbmMZ9BSyXZnPA",
  "key38": "38z3hTuuL8FeGVcD59hGJ2fYap5h6TFC8nnSLQdCihupZDi5Fjv65PoSvA93MEsWZaYf6XvF4amqN1pP2uaihRuk",
  "key39": "63VWbEU1G2emyDFdnyNWWtwXw9tDjGCC9S3ut3EkvNVwcw1gTok6M8VzETuH7Vg7aN5oqBJR1DeSrVr3UEgcnqVQ",
  "key40": "5AkucziNrk584rNWfYo1c5fxtcE23vRCXf7pEbMDt23GyzS7npMRrAWQGhuNnpLEz92A83AydHNSfgwHCQhtsoB8",
  "key41": "ex8N6SEn8GVNwY5aHE3G1KWx2Fa5VGR2nXJdD7uWm8mJQNMjhU6PRSDY77hxB58GkJQAcwDRdyeZ5YYdPohfxbU",
  "key42": "4MXP4t6wddCG8j7iXW3tp38VWhWkcKd6RKKdWU8HfC4651jaQqzKNptVtNEVkjHfCq6hB4gaKnf18iuHKfd66PGM",
  "key43": "fenvCjqMYM8MMMixaSBZuL9MA3MhesERfQPceVfpenmVHNxxzdxy7t88KXDDL89TfSQokLwSrnJ6R2kDs2LKb3a",
  "key44": "5RHHLWB9giYddCEgBMBMjaYsMSaQV6MxcLcaf3m1Kh43WMtxsy4YBF4zFEXAAeeUVkVN8e1NvN9zUNgcH7dUyaT5",
  "key45": "4RGJ1yZeMWhf6TmWXNqeeSjfU9vr397YrBR7DVDFFAVmorxoa9kQPTjpmU2c7vJNCWKne5BL9Apv21gSKA7K71hd",
  "key46": "4Ga7mWqaTaHYw4EXMqqwEreNC22onHZ8HLBQUqWQqpUUA7cBGSgxEJezmDhWQf58YbAMkWH2rPEPGsH57MfiPyTH",
  "key47": "21ur3UCuCrUeYAn3xgAibHkoMDABo1YGn19F8qjmDfchuQRo36QuUzopZVHdJKMRkFEbEefqriF8dMivi3DraNx1"
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
