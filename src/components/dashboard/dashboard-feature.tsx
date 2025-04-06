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
    "2ZGTGN7ZyPfyPUv6qYMXmeR86dAXqiASztLzNxZRtG5VdaBDT6C8ZhMEcdKdbsCY1GGuQdz4MExjHe69F1hNJJiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkogNWynfDUjH3kdmegyatRfFKShNZgjm6V7JYkv7A3KGafJPy1iBpRwZ94H9yHH6s9gMHYjdGqFKPacvv4LpPJ",
  "key1": "3rbhyHYNrx9L3vtiMUwyEs7tZycHA1L9uTn7XsutkeQwENyJgYF2ZHp2kxTsn9XMCtB6RiC6MJEF3ZdRkp4c2org",
  "key2": "21SgtwxtYKMPjwBbrEKqBq94tnMBEUMatxNkEixeqNUoMGAEyrTxYmq6gmGVCHfatEHY6HkEQspGWAV3ouLjpGCD",
  "key3": "5TJRVnUCdriwmQfpDVKUHjMmZVMXzVy6TnWfWK9gjZupdm3JxRj4TBHr5CvqcyncYoiMruH3ZiXVQFDHP5QoQFXr",
  "key4": "2JnMANLTmceuxgYJckLhDnZuMwBf5zkpy7uVkieiSywEvSKHcg5mJLy4c6ygRQGeeFZq1gtFP4yhhLb9TBC4jkUT",
  "key5": "3HqXrqpwLnC6p6GHiDh7SfzqUUPUJCvcbm9DRzNvmnPWCefaDHDekJ5WpUBEnfj1JDKsRYBX1yy7oHD5gPv4hojt",
  "key6": "rCjyzPJEXwjGzXkbt9iByV8ySYsP2EFzFnrqVgqLG6KHoAhEUNtmKbyMSGKQdVgk2ikh9tKN2oSQmYNzeziWdMG",
  "key7": "3QJZZEyytu1tJ3UTtKNWa239doXWDcEL8sLYyKyKaT6wtLVaonVt7ZEsUhopDMZnCq9UrqSUbBtg5qBEpnyhKEDy",
  "key8": "61scVLVjdkdQFw4dDaZRih4P3eLfzMoZjt9LAT8BvVG9jXYj5nF4KVCv92h7Jy5RQsPZnD9cPyaE4nNydvC5H9re",
  "key9": "3KDFufYpAwYL9PzBvsVs6LVadpAocYrd7RmBPD1SYYR3yH6rLQMU4XZQBUY7BUKnvbTdzRqAcywvjfC4sAiJLPfc",
  "key10": "3mhkKo9kLbAc55tKbUBg6jEt8s8sYRNr4UDK74Cy2DF3wEGUtzsNHZz9piCqbuoBgUFAUHabHZAgTnCS3tg1g3Hx",
  "key11": "5sL5aFTrgU2K2cAnSHS2AW8SYR3Gck4ceoSUs6M2J6HxrzWpnuRLifa5bRp11HeaPJBnd38f7D6RoBGtbS9Gpz1",
  "key12": "4bMR3bCBv9iLVrJTBX2MHMBDSVym9qFzPYPJ4KeoSkNxxseYtm6dX2XB9VfwE3gAzX8dNZuEmBVwrxFgkCVY1dBL",
  "key13": "2gs3LN7bX8ybzoqC1VEDWVvyzXFdHv1dhmXSvdTGNEwXjYnUy48x96trKGGQvLB49NykqxZ2oPK7jamij4fhY665",
  "key14": "2ZXhCD6oTHCWWCapThb15egkVn8CVxCHNe4cjBwmb8Zq1BFRRvmGGA3xXNNbAmExB6yLML786BTCuya98dbsoH5i",
  "key15": "4PAb6KWLGpCBNW7xuCeCs7YtNuEcPCqdUbnUANSztxrx2Yp7AFg8YSZ91bE42RJvn6EedKugtnbyz2jXE1aQ43tw",
  "key16": "24BTvW5dJui4LyJ2Fr4Jyioiq97H6bmKEQ9Ga7miFY9PkNK5CoxoBcGAyKwvC4366yEoKsSaXoDhp8rCqsemLcbw",
  "key17": "2BLb9UUdh88x1aVsfKzFa2j3GiRwJXvYjUmRS5vn82MK5aT8aaPKH8pTUvj3HWJD9eFBVtLu3NBF5inTpCBFzboq",
  "key18": "6199LCMy7AZxX5rSXsRG7VGusYhrGv5V1p94M118NZWiuEG2WME74Vg2WiZptzbNHukmgo8avrD6DKbPBnrqLRME",
  "key19": "2D9Mujxnas7KxsgKtnPwAkqiXcPYjbTj27mQmzgduKxNtfqcc9bvV4dJgH26y7UHeqwUYmXRMif1VPkddr6hfukb",
  "key20": "2NG1jP5rEag3Bp79mKpdJoqrx2Enp6GedQ9CPt4KL2BAqJ6aKnn8SXpL8ukDXG11C7z3FF6HdNGDe2q8kDgTubd3",
  "key21": "594ynhXiCS4Fhxvij6gXFNChgA51yMPph896MtLwgkGnxHWNBkkTyxmkegfhoG6PPxv45AhDvi2w1sT28RE7MYtB",
  "key22": "1SDZ5HDyKwEZkpbLgzUeT8cvLBG2yxiab6DZusvhwgMkeoAVjQrJF58VqQhGuZiouxzxuFChjB7HPzsdAe1nK2x",
  "key23": "eW2SVGqBa2eTUWYHk4ccD2XYboRamt6k7rURReYuK8EntWhEaHH5UsJfiSGCrvj74Es1quxem8fj8bZE64pb4NJ",
  "key24": "1n7PUm6sr2qTnRXMPAnSJaEeFi84ZwVEvXohPphsfJvXNoY3gEUVLmWrgXsw1s7JrscvjPAFkeTrRABYcqgrf7b",
  "key25": "5Y6UZVcCZNitXduTq5gXVT4tXsfooMtN5E7eVMZwNsqC4HfQCEAJTcTD5aHH5Gau1DihaxfqqZH84FiZ7XEodM1K",
  "key26": "3sJD8gxpnAeZMmAkUPCsYbwpPFzrvcTLsmGjfZ7XDXZVwHrpdXs5qUmYETsAvzGMUyRaFFfpqbkyvThuLfBicdNz",
  "key27": "5pq5Qfhyxw2U9GFUxuBWeAxFuG19FMUUzmPa6KAnYZzsF7AdsBeY9wXroickSj9nkNFJDYcSFHWjhCt84EmzyeGa",
  "key28": "5TsrFtZakEk4W4xLLTrhJaKt9pXnJFDVWFQdmpmfLnF9stCpSPJucSQeaLF2dZiGDAyY9sqtaYhrje7anfMmtQeP",
  "key29": "8vCsbqv9SwJF23Gsvkmbfoqv6a7mhpiu2miYFUFimNnemVHiJHWWH1FxhXKKj8U1Ug92ey5yMWnBBg5HfoZHMB8",
  "key30": "5yUkcRir1C2e6Gd76NNSzSjdmFvRByqRz9dsz2sUH1mpdM2BWAB5jawp8UD8Ad1YoanV18cjDsH17q4cfPZERQvp",
  "key31": "8F19SLtLY63EhVvMw3ARzb46ELhrYS23tEwe5REfmfLN3WMPftrHwCDwxj8Eg2NQfBBQERMeifAe4Z83AD4GgBS",
  "key32": "UJZVSpBUHcgWbHS7kGEJnhsHzABMQFowVcXXTQZBeC7t7tZyHw6b5MRhCQ7wt2T2LfYm6vmuFe1ThuzkcEoB8kR",
  "key33": "28hcwCKGHVR3vaVfmVpminSmnSCDEuBNv5JzNnGN68Dye7thtgkmeSSMP2ZYssyYGy8ZSaJvDQJiRcfDeYssHkQP",
  "key34": "5nkqePJREDvWpkMYtWG5L6Ai6FuZT9SZyFmutFVdC665r4LrtS8Gn3XZT4Gw8GnRkREr9JaP7UnPdw2bysgJcdWS",
  "key35": "5Q97qQLzG3CkKzUdtAxRMfFR5gjdiMs6CaeMav6vWkzcmbkX923mDaMdSLA3xoRH8Y7du19pNKjxoYusPcGybXC2"
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
