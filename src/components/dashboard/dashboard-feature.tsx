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
    "37twmhC8at7aNSRAHEYDSTXRG7uEH64vXwxKZ5GFnbrYLaD2VMbSoQBTm6h9hcLAMAxuKGyVL9Mzr1nR2Yomy2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rr6hTrmtAZ2EXGE9bMcZnk3JbBvrW2JRhvcitu1hobj2pEK2fyHYduD8vfsHrGwphqrbgGew44YMhbeKGRtKfMS",
  "key1": "3zYsLhhYMpQ6qm6ZN1ycqaYftkXjdQnVJNQZsP6zLbeabCZfcs3Ri1EENX8EJea9MAmvng7RU3JhbY3UKPbWP6bH",
  "key2": "5EfYT6dnBF2Siv38jWvhgy7Ah9yxNgGus6i3uf4nyQGrt6vbm1GMn7pbh3LjGf6W1TsxNVcXejhYPM8sv4KqBrzF",
  "key3": "3gAhAceFTu6sfDbcmYufJKv8wpCqqbKE2U8xw8TFxi8YDwQBRJ5faHVzvaoivdVez4u9wa8pa8qMBJKA8SXiUnHs",
  "key4": "2fhtoaybNAoK1nNBwh73YYN8joa47d8uMf4sBS7LkPcHwFQqQqf7wsGgUEccaVL5vEY9uvfKYD2HxXMqcReKrNZw",
  "key5": "4KtGzDMvYK8e5R131oZzsz3ehsugsH7eYLprLTWaegP4bTFn7e4CdcSY6uzJ3T2sCLbubsBFsjmaR4bLgfCdcoTA",
  "key6": "2RcwNC8iGUf5u1Pxa5Gk14JahbSdxfqeHSqXxQQHio269JzdaDNeKnqcSxdiCM1A76psEaQV1Lnng1S66WnKU5u2",
  "key7": "39mY1RyDh1KoTDoxrxXs8KA3QpywBxFpGboSz8MXua3RESfure8AjYftRALAmSff3rvNVpu6QbREEibjkuQ98U7J",
  "key8": "5j2PhhNKP3Dqq72V73sc3xFH4YRj5NouQdY3VFZ4Bfpmn6w4PbxZSSoiyZ3t9BveWvap6NmJ7PVUg6EhBZvjvSSn",
  "key9": "kWuMuco35dceazJZnxPocAUQuN3rihwrwxnBbw13Eh6ZWWwCenKe7z1ie4fQbp85e4e5JaTdiA3BHEPy19bnoVR",
  "key10": "5gJvoMfDXLy1fFuoQnLFTqYpapCQfuBEYiuGX5uWsr6vkYQ5K8wHa4quUJsM3pfY9HmPQZPxVjZrLey5EYEFJTJo",
  "key11": "3FYPqfb9KiJ2mPJto9fBvHaCu2MRQhA4q68TFQkXHErpGAFPzyru5wRG6qqEBV6iw3CqediUJrnoeqQKe9pgV2ot",
  "key12": "5wVUPxaAdodXAkbvrBu5v65xBeW4xudFASSKsZxHKz6BGKjpiogiCHXdRxSdGU7zw55v46yPYwNC5mWa1QmHznBA",
  "key13": "123UpzJgyKi7zTG4Xhjy4cxpe6bo5SYvN7nFQSfm4seACRf599CBUKDWjmwZNsFokSugMbrz4ZB5ErRUt5HtvoTR",
  "key14": "3HAGPnPPaLBJUTi9tSL5ruRwaZhEkVbaJ13mWim2hvpRn2F9u6ajaqygSMdu16rsotbWoM56WN2Vm4fW6auph9Rz",
  "key15": "5Bi2waLGVcPByj9QRmSyY83JD8SfCR6CLkL6YUDGNjwrqxwDmNeBHx26v5tAP22JFg2s5FKL4rfvBrsvyfXvMSKM",
  "key16": "4eCNXxA7BtjLvoYSfPWiXM9yJR7KabLndWQU5rBwcaD9mXy927JnVQaAfrE83a3HzwQxum4xGsnkuMxAF6UAdqU7",
  "key17": "4ZU9vKijy6owXC7kNP8sNhMr1TVBEGHDMxFFVL3cCR9RKkkokEKMB9TyJdA7grXURrTcR7jJuA6sAQxWZPW3G4zi",
  "key18": "5ij1GdAAyUGFbA7C6mcYbhvyXLpZj2Ah4uU9aLTcVPTekmtU65PakioqxmLppoQfrSh8ubPt6vCcnWnLKtrLZKFi",
  "key19": "4JuUncneNA2sLbNgPoN88qiJibyYgMoAYR6WYSZMcFjdvwdW5AXrsouC8Ld5ormXbS2rSdhzgdQZVmQx3xB5hHih",
  "key20": "4feEtZFignnSXuyeVugUA68izmJhMCv4MSTiYPS9sSW68tKhzgHR15mimZfF3kZKZgGLQb3gq3ydXSU8iEXSgazi",
  "key21": "KqRxgX93MiYsEPQvH7XVY8u5GPrSmGqofeaq5fRqLoWonNKjW5wYEChzE3agR9dwjCX6bznRhaDQUk51gKv5GvH",
  "key22": "524ramGs5ypGoiA6sJ9zrDx9v9HAEpuKzSHMS1Jeb3SjtXFp5mtX4WBZFkziFLLEhj7oeMu3bNsXH7RRMPqPLdhp",
  "key23": "2wXBWcyYhwYBiNZwKJLMRJmfAAUdcRkL3Edw4CzSwUyuY2rdZCcgh6qa2reeLk1qK9CF5fQFNxefgByavUkVnJKf",
  "key24": "5ctCXnbSMj1EwgQPbf9tnpWYmzv3iKNs422G1suu2AnTBYwdg2nYhJtsF3KLbBrVryZXBSHN92j15rkBC5w1W4o9",
  "key25": "5RGdx73mhB5ktexooabMh9fWZ2oHJdxXMZ5DMKL4ExmHiYcjtA8idCibzNdgGgKF8BvcGFZQwBRP9hk5fUid4jKx",
  "key26": "3ymZyqS8wrN8B5qRZidYBfv4tp93FqDtWkbKcpFMt4yaRZM13ti2k6DFD4p2AE19GsiG2BAkSjPVJMNURUDnccGB",
  "key27": "vPzKpuPVKZ4pNAuHJd2pR4YZamdE8hhdLNvgEjU8rZLW666EUVmZJ4X2CWNzzsrE3jyPMwXp3auvRUngb9gZjbX",
  "key28": "3cZMkv4GWwAxTeGF2cyTb5kfe6qA3Eb7nyXBqv69vvv2ZRKBULt2LhX2Ajr9ZXvobLo3zeu75EXAJkzC79bHjpzU",
  "key29": "3pCmFp5z1FauxzohW1zFhxZwoNFACFbNZw88jkCoehZRA6619QqosKLpRTYEytMbXXHpMrHQxZZFPQucpxUjdvPi",
  "key30": "NRs5FpHfkWrQkxGftSbCQDsT7r1496Va8aK4pTiuXK8kPbW7SC993e1XfiQ5ECtGmrUaHV2rh99vjWTJzpHMUEj",
  "key31": "ZN2MscWZ9sEJj97w2jmyA8xJRzXqEyTaoc9ZGSEdDouYwjNDQVoiE83VAwmqDmHWFqBjk8UWcEshZDMRZaL8znu",
  "key32": "4S2miAeDaW1VqiLK6raYCiwUbSn1VsWWWdRSVziUKvrVdMdSV5aRqgcZcEyKhbjPGKd1b9TKBFEpfHMZ9KMBFhC7",
  "key33": "jY8mqt13Z6iojpDYR7BAWpZqWcRdnRn5bR5pzvXnbdgictBS9iAwzPU88orPtaikxnDpsgC8M9bXYhxnxyVU7LT",
  "key34": "4rDtSWDQj6yjMxrmCWwiBLT1oknfCPP5euqKGAf1CcmxZ4ofvn15P4nHxfy5eXm7H5zhvxzf6mkqSykicx6Ld3i5"
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
