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
    "2N4QpLZfZEpLwZtRmaPQLCEMKXz1JoreSotvm2bU2yckF7iPMicACvpt9iCKefHJKzMD1iCwbEKuMsQdvS3AGmyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z4CG41g6uk2JwrPGteGVeEfkJetmz6SZf9xfKWMhdFrCxpfNG3Jny3sFeHpdb3PFRdkzEvEaqaWNWcVxFBr6MYU",
  "key1": "paefMkzEEj18icEUh4oUSYq7bUPcNeyZgk1cbUzN496HNm8AsXXUuqz853q5BuJxPYdK8pYCqC9XtfGvHbKpXZp",
  "key2": "2HH5EanMf94K9zcf8X5QZf8T8hxWJUgkwTP13CSXqYizNVkNgPm7qFtX7WYRHQAQ2eCQdRHA5E8ZsatnRPC4E5QT",
  "key3": "2NqYokz7Q4UjyP9YvnaYmsvvnEfdiJG4iDaqM1mhKugGM3nKnPkSCQAq3FvTahhmKnUpJzLUDLcyEYsKFgH8RZXy",
  "key4": "5pzAGLa3iRmXNSt3NQSqyxDNfEjEubJ66Etn4kLhgVfnPoWisfNYhT9SJ4RVwK3uk7Tpc57a4E3X1iNvq4G9Bw7C",
  "key5": "5bA7Gfi6nPRDLoNv6Qzirbhe5qhPkUTFpgYHMhsZxKH8weVjnudqeK6ZcBjzSFipnPjkeChAFVB9QF8yAnNmHzMu",
  "key6": "66yhvECadcgruTJtQSXuoPgcpDFZQVLuDFGos2474yKb2i6tcmYYoQmpmdRYpbHhbReBw9CKxjyvzhS6C33d91Kp",
  "key7": "4sEb8VUbPEj2vnQuCgcTJWq6VEGtyJbPabZ4VAg1kQiVYZkCdNTf1GtEoXH8NVVVr1aJpPHwHqm18KpBij9wxZvj",
  "key8": "5MJVks6sinJ62846jBfSRemXZRXjEJBS6S3L7PbYYZghCG3Qc7y4UHKU5Pg8FrABHkkp7eiR3Y8VovZjgAheUZUc",
  "key9": "jSn14WXiyEM9cWS1tQ35jBtfUKJk7GkLY8oQLSwqwTk2M2fg4gfcwhL9gYqLVUuyVrckV2UzR7Xo3fbv8AWMo4D",
  "key10": "4sa8HExNeCzdNP85qX2RvWCSAjUA1W9ALLGW5BNE8FHE1mJf378AYsAphs31k4tKGbnHfCnZEtffRNxV8s48uc8J",
  "key11": "4bczifTq12aAGoiEJGtwix4oXfCucp8QSzNUXKbEdpkuj1eGxvWroWPKVtCL25Tu5AmvXuP6rMip8yQzE9hegNV6",
  "key12": "JJ29XzheKzGDRwpsFM3CxBGMW6LiEDtzEvqNLUyQFB3EWbPNjFuxd6J5dYWwkdvrjR5W9aR2xYDjNaZVfjNpL9E",
  "key13": "3gmhzX9jqyvnU9ctPzTrXF3T9AWS61DnjckdA3Rd2WEqBsFCfZkx34gz68BL5aYbnuVXK7ZMoSxRFMfz69at8XM4",
  "key14": "2dFvRRY8JsrXk2CLrjr7HaT8fn9PXkBb1cTFbXtKyU4CPcNFmdVfhzB7wEwTg79Kv852Ck21rv6XncV41drEjwJr",
  "key15": "2hCUGaBPreYRVV4fpRtmD4jBch3wkJMidzeKMPumL1rj12a7wnFU8mfzgw33vzzXuMuBuBviH5ysuaxiSfY3ofjU",
  "key16": "4Ujus5kk1mCDESyAqFB7ABDX3Ginh8z5wiaDGskv71CpFxDdd5HRNcMrzAb51UzumkyZWeoUdJS6SLwCGGvHgUuB",
  "key17": "4sUgvNMbBgcRnjejDQKbEC26J2Fo1tsXHbkZeFh4b2oR87GurSLJGivJXneevdyykuKmQqJNLiKrE35mdHguRjU7",
  "key18": "2BSTX4pQCmSXo6cXfWWvFiJbrVhduDjVprK8mzGaApjkvDbdbWJ5ZDPqGfUg6QnS5xKshmy8baZYr6gMRbN2qDQh",
  "key19": "aDKuHpoQV6sRA9NwiYCrD5xsDmcgvvBhuDeUnGyvLaKrpxXk6bmchYbvyeAdP2djHaCJrKcB17Y4pkFVqG4AvSq",
  "key20": "4A6od2hEmvQKBaygpyx37GmA4i8oQkE6eKDPG4UenuN4QcGPZhdSWVfESm4pHCozsVg3osp5kBCosAMKErMBdP7P",
  "key21": "2tymprjrCgokmAqVQm5YusZ2qscgvAtBJDje724ccJ6fscRcJBE7xyXTFKWMv37A36J8AJN1hDSM8Gq6toVniair",
  "key22": "57h28RoXQjeRpH8jXKNhcAJiD6NecfzytvBryk1L27AsHC8vYgrExN4fqq4PEyB4f3xXNTDxjEBT2HeneVqmsnmK",
  "key23": "qq7YhNBkqxosbs64UvnDsqHFeZpWGBHRX3x7RNGxBB1ZEMKHyM42X3hVcXGpgQNzJHL129nZiTcMsH72PXpj15P",
  "key24": "49i5dsbh4jKpGZ3d8NpBBtjqTSYo9vRVNYMgrEg5R2Lxte4hfzE7g9tMYXDTGPeeqCkngz9243zvXjZhAXBGFMX3",
  "key25": "4JhQsb7kwXu7nh9EodLZR2iCgujxGoFoxGNB3ogsccqvzE3v6C4RgZLzWgNMAq2n8skCodweJWMDTrvh2i253G53",
  "key26": "2djy8esjzjDeGUMKhsQQAA3NJRpTP9fWWWB2mAo8ZgHRPqS7BfSR6o4LN2z164bwGtGD5b3Efeas6LZ7KABWe6qj",
  "key27": "5SZHj124VLsfnWwEcbdeGkUZh7eziPBVQ7rDYqWmtsQPeAjKBGcFhQpDkYF8FiuNT3cn1yUn1wyvkekTf7uBWi9k",
  "key28": "UZqJXpv784DajeqTXtJ7Bm2eeg92EnKoihpuCZQW8nVxYsg5YEzZXstCoTZt1cZpQWgyjtsXnadyTkuFi9EJbdt",
  "key29": "5oLTHe8j61a98zkSrdmixeHVmB51Di3zDt9uaW2c1aNhsCeBSMaqp7aZDbzfytLb8gs6Ng2tgJmNcz5XDtk2dzD2",
  "key30": "4fVijwBW4vHK1tp8KEEXHJuE2pjJiTv9Xro5KSdr971EEfdtiMapE6iSY442v37aJ3NoJAAmamz1EHhi6as9J4Jc",
  "key31": "3dsBwftvCoGrSnXFCeENNdns3qUuEnYCewTXXwc4jSWFmgWjDyw8U3BuMJyoNE4dxXnBrU5ncEMTNrVSbgU9dMeP",
  "key32": "RSCnntYKSiM3dR4ywcK9GGAx8W7ShpBCjQq3iU2nCide6e94Cq1QjXTtwus46ryAaKY6bM7RV7Vxhb9xLdDmX1F"
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
