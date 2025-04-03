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
    "52jRvbWdiU4GsbyUyhYj2JtqmgKaKwYRAsWMBjcuXG258PB1ubF8qasSHhkTUQkUGU7K5Ny5nxmya8x9fhUDnoNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXJ4kBMQR7EKwRDxZzpTKpQMPdtatZsQo5iKJ9zPvC1CFh7n3eVHwycEP5wts58ymdshRxrV5R7Zh9ey3oQTog5",
  "key1": "5Fjjz47fccNKCLPbReaHkTXNeGfS8vCsxG7oNUKsVzTQRc7LvFwSAbXdkUQqL28MTivc5tquejYLmYhAyMo5ea7a",
  "key2": "4CaSdB8s1rKgf18CpKbXqNAAwe56kZrMENJSRHgYgxSbrMo72ySugWFTga3bgRaU9N2G4aswsZtVmbRdvc9H32kz",
  "key3": "2g5Kj4cUDTz6SseC1mQ5p4LU1wgLNUoghJWN6GudqUYLx8awinqoj6CZrGDebgzxooEtrMy86cDgoMZm3RKmDuCs",
  "key4": "4PNqbdoSNJnSvnCQqyJEFsmCFE3BNdt2iKSNHvmt5KivqYJ7JxZzMbKSnxXLsb2HkJaGHZX1QS1upG9Rtt1DLGZm",
  "key5": "4RDaxHtwims2ky4YsgaZdJycszSgwWFdFtayEfcfAh6nxkRKpn9ra4o13JjuX7WBtyi7BYNaprF1bCvQ4dgv2dLQ",
  "key6": "Qg4TNb5DrvQ6m5wHVi1KkFj7xsDrBB4dCFDv84fZxDtmds1Z6hv2ggn9D13kvbVZWY2HmJ7yzmSo49qEYUyUjjX",
  "key7": "XA1Fo2tWBa1FZd7bGJtdcBGL22Wo3wLMs78NphokAVYMcYtKBK5nUUHUWRiRETQU75Hr758ZQPgZRjFojHsaCRR",
  "key8": "4TPs8q4jB3kRd817iLnzdaiZ9ahhrCQZumpEw3Mq5y8uyATH77fuh4DEaAZeNAhP9nwA5Kn7fnFB3gknmSYNy6ov",
  "key9": "3XAVxZPyAUi2yYfk9GuQj7smEYXaN2d1ppY3oewNCF7RRTdNRrcmtLmGVQEBhK6X4vRt2GGhsvDuGVhPpWtfVPyF",
  "key10": "3UD3hJ8FausksRxNh4UiWGDCzurfzAcnsc32UZaHQhszoTYXJjZPLVD1uLsamUu7WNrfLCssFQ6CG968nCZdkc3p",
  "key11": "32WrhNSXupkTnvvfULdGaPceDDy5ZMnNecdDGwtnmWTM2Guah4MriHxzw7EV82k5XW7N9S2ZU6xuBrwhf1Y2vQen",
  "key12": "5WAXrLgcwzZtYpXoEuKV1bUfk1R8XRjcvNA1waq2dAn3UM76qJ9AELXkr6Hpo9SDmoTnPJZ2Yxi4UZyHhaANKM4r",
  "key13": "4XhFgNiSbL42bJfWVftV9b5UNtGjwPKQsmwRk25Q8RZMrTUP9eHun11V9gbDgDQH5UQ3ayDuubA3BnQHaniuurSG",
  "key14": "5E6A5aeUEy8trupQ2xaZjjJ5FegwFEh5od6FpiEv4mhmVCzYG3s5Q2KtkPur7wBEht9ykUjWSxHsGfn1LfKByBH2",
  "key15": "2wE92sA4vihXYyvkiK31zp4PpwQEGt1NYgndbmFMXAFhprYhcXBWY2VBhfeaFF7LV3rK4pGB319xQFqcgpCtm37q",
  "key16": "5Q82GgTPUV4ayxmf8Pais3jHTVZ28ZjNzTY6HRSUEcB8GxhBEa1CBycq29SCyvmdUq94i3rdZV4fNTyPP5mZn1jK",
  "key17": "pXpcUbMvJ4fcyNfwDF8d3PBtdhSemuqiCHTmskTkSSQT7w5pRtVfEJ3uq2qeSzTJDLTae36rsGb3VZWVwwjD2PA",
  "key18": "2wR7KFLWrGeBbJFEdeD5wSS2CkASWH24HjLufu5mV1uejCEd5jG2yHzC6fPQFu7dECP76Y2dU9T8zXQWP8G3Kxta",
  "key19": "4nS6WwDHX3i8dPca9xDbR1eXvzsi8p5QMifFestyDLW8d882mMHUxzchRDitJ31MGBokykaHaTJGB5H9yqwBeYQb",
  "key20": "2etjyRG2NsAK4KnHk6CKQV6nsZ5aoY7xUKwRE8yDs1TADJbSkQrg1tR2FFaDbNyw4Ps4d8pnE3TvNrEJquRbJYLU",
  "key21": "4epyR17mqqg7mWGDJ4f7judZyAn6VCkkBuNFHyT1fvNCgPF96s2agZwDc8FhkPwxb9NCf4UES2goHsbM3ghTGh41",
  "key22": "31BEyyZkeQCSABiPkQzx1kbnvCT2t1vF9tnW63ZdtgN8XSgy8ycabtSvsqCij4XF9SCb1eGd6REP8uFmUPegbUX6",
  "key23": "4KXaKRwkDe2yJCkcs5ZejPucoac4gW5Mut6irGrmuAYEaub924b5Kim4nidw55NTfpfNVYJooc793GNjgKqc619a",
  "key24": "5xCx9Vje1gHz5q7kGEdgPbWQJoZY93cEehhjDH74pjPFfkYivkP8dwmFzjvSb4JvkqnrkHxZnb2zCmAoFRGQn2eG",
  "key25": "2LVkm5gyqv5QnVxnWMXYx8qGdHZoXiw9b1HdF8fVT8DmU83612XSkf6wV4u34tmuAXU1ayDFyjNFyydiS5g7nh3c",
  "key26": "4Due8t2TjWHjRgt2BY1n4KXEKmyGGwRq1i8HyfMGyoGJm1iqeriTEXpyBTF4v6w5wC29VHwzXi4jtfoCuC6Ge83L",
  "key27": "3gKx8q69etwzFsWMXMW38Ag5wAgVJPPPLecWQXFBw1kcCrgdSR2QVkPEVRw6RLDQj21FG6A87vYTC2HRdbNXNFEe",
  "key28": "2D6LEmF29CmViVjLfv5nxYSjtZ1HYUCQ8SQ17E9WmZZE4gmPtHG6MBwwUVAEQ5wHs2VMd6LwhW8xotaYFJKS8Qt3",
  "key29": "39FxKajzJEWnHQiv5X9dnQt7JUSLjh8N2EfQy1yFGFXP1k1QncN5HGWFsRzAVBvf4NMz1n6f3YTSMQQg65W1avha",
  "key30": "2w5YMvG7jtRL6AdzK7EQeNcmoRxcCVNwHAULjjukp91zysvzMTFKe5mu9QxwHczPKab8XtfPkgBBvRiSUpq48xbg",
  "key31": "4hDSyjEToJhvQuaczptfK8qH9T8zyvK8Vt9GGg3kutuPLtir7Pgu3QS86poSubrM6vqDPd3i4hzXKQpM4SDRusym",
  "key32": "4KyErZFEFTpDLYAX527ur9zx37zv3kg9AazeJCpRUAjGzBf3ri2Zqp9AKnmkyRG2is2ZeyBRqyrTV9z1ouHPfKA6",
  "key33": "6ZnwHdfFwU9bu48dntroejbBrnZcMDmcX3KchYVnwB1161WbeUmbJWzfbm885oM4XvZtLXd4iymUPBsgQQCreJU",
  "key34": "2DhWMFBS1AeoQgALdCTuDCjvtjjtW8s9G5BigbHjHFgopFTbGXowtEVbHP9AChsjU7FNZKQuMH16kbvvFqNrQiTd",
  "key35": "4i22uBBFdpchEQE9jPzphwHLz4p35QdpqfGQxdmR7Z2U4dnahr8aqpT5wTeSy5H9BBKSg7MJa5pGDE6Hc78fdZEF",
  "key36": "4URwB9EhwcfwCNW9gc2zMiN4ZWrkoXWj7rczFNhB8vdeMFQiTYyCbuhdgo3nC18SrfD2BHSw8vDsV2CHWvVNXL2h",
  "key37": "2RcQ4tcuSdSu6jrJzMsCb9qPPoCJCmuyJj7cY2ZRmsAyXWwMicjJ9rDLHosDX7ZmmA6tHDbbYsxUvaC38xG1oyYw",
  "key38": "21LK1qS5GJ967Xe8CxCYXBRrXbkkkkz2CAFnSu8KcB9Z2PirAs9bbhMx4DfnLbtw3rtWCJijQgFcHwTgPU2RLNMd",
  "key39": "5tduZbpP3eSQajdgZrKf4zCwn8FA4ZZDLtH1EdseD6AEWeoHTthU84xSo4Kf17acZwyPi4xQygHzpkXV6KTvwgyT",
  "key40": "6516BZtknkRJZdgbAzPToz5nqyM85oCmt9AzCLRXWUESKR6xiijFQr7zSJs17yNFVw78BSNwrPBwkxkB3M72DcLe",
  "key41": "3huDfzNrNBb6RLCEqxEKMtrxFD6wWfuuKrcvUi5iWRgnET5KSUNHrYbe1FELqsC85PPjErcJqcihxDJoyzyQucYE",
  "key42": "34wUsYCK1EbccUQY8KyAzXUjDE1kHSo2WgZaKysMNoBnYdzmqM4zhpeUpV1mdcEF1MzxHC9E6fgJJmFufQimSMWV",
  "key43": "3vzi7GH76z53Gjq1tVtNvnCxJQQg9vTa52Rgn6VxdeVac42poFMWofGSBNBVBLUA1Vh6DdyhAMA5KdnJ6kJBfLRK",
  "key44": "24D9tWNZ6HUyQ1p7DiqLGLDsKGPgPde8W9YZwuoYfQ8eoaVLZdECVbP2Bi71H1caoWCBAqSuescpQ1cVMf1DwxNv",
  "key45": "5NYNufeuszUNLSn3NZGp7NVr2pWHymZvwZkkmiytaSm4x1aUbC8FybpnsP3kRYPqvPvTysWAcdoLYkJrjzAxMEVN",
  "key46": "5skpWcAM68FE1nrAY4X26ZF28B9y6Z5nhCNxUDAWPSc34drktn4j7KJ49nyFFADEqyndeF3Eox6r7n3Hhe6TMf6g"
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
