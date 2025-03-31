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
    "21qtsM8GF5gYc22jcv1eAhApAr3HPusKfM5vGAf8bA9g2X5QmqLG6wsLyp5jZNfMMqTU33EMnSHsiDvMtMv8hbq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xEHhFiPwkVWXBtkRdMzeuHc5YERYzB8tSTcHv6gunhT4PjASZWxaNmrx6FTGDqM9DRdVpKVjC6ysqsKCC9kmcQ",
  "key1": "5hV7rbXJrPXiDX2ShCFRqeHPyAyHfpgrVKCvzLsHtjCWhET4YzRD7oL6ndW7sVBPYTsZDBmqmfEGHpjYPXdJNbSP",
  "key2": "4SFbmKdPm17XL4k7fvtoNm7RfygbmU2BDPhz6jfK7AdSJzA1aNCGWzeKGYMypteutX94HC6Y7aoSGzM5GVuQ7ptM",
  "key3": "5jkyTUhbZKUnNe89ZXJKyifSx9RWvLd6bTBQksV5ZxchV2THzpeB61Kpt2YqbVeamV7nP6UyxrFJFzgqfrQnpgQP",
  "key4": "2GENGMtJdyXX2mHV4roTpEopPGf9MSqCDUc4AnjeqYhCjGaMAAcBUXn5AzvzSk3cLqXHGRHqes5Dfs4TH8fnM6fm",
  "key5": "23wcUQDmdJ48XDcKx8JYZKtkpAkeQzra15e7MEh5V6CHviMeiB4QeaCxhEfkCbcGcVkk3Qfv6wWiTBdyjbcetLQG",
  "key6": "52GKmrvEV7TAYCc5ZFftN3uJVUemnv2bzWazmyVpdf3ibUPDZCqP9RXnGYjoCFVFPby7Fqc9WosmagXc38XSi3jq",
  "key7": "2TTNuVUu5GgjjuSva9x36W6AXgYp8i1cWXBmjwUGRpgEvpYBVpU7EZVbHvmZFX3JFFWAEH8d6L9x8QQntD8o5YSM",
  "key8": "2mJfXVkUDz9LZr1du11uK6wHd4mHuCsZqpMtDpbNtMP82h8zAcGfyyz2wfYAFXZU3gmfJXDixJxyMivHpNg1nWNz",
  "key9": "rCAJqK7FCUjYR7VdpZ2nrnyBeeKhuqv9rthTpYQb4GUaHJWAyAbG3urrb3mBMPdGmFyRdJAPdQp66eoaUD7Cyiw",
  "key10": "5SXB6Eg7fD39bRsJyt5KvH4pWgkk4D12hmCTaVHN46kqSZn5t5CXuS2Yrv7YFDbi1Fw9TD9wxPdvse3ZfjHQtSHD",
  "key11": "5eZvdoxH6Li1iPGnwymyzaRWNohuRAEfpywqX3GWzFVmiz4afM9dEECujrG9vDS2So8G8xHy3RFsmN9iojXvFb6B",
  "key12": "2X3Kr7mATUcPAoDditJgS7i6b9KzajgCcRB8FTH8U2UL5ebFwb5qZ8yTWRiBd9SSbyijuJAvdeuJnQvVCQk12XcT",
  "key13": "27j4ujibp6yN5QkKmLVPd4azTwogA25X9LdhHdSTKtSHXiGyifPxzDrvb6r56bLNveCSbXBrPseNLR7MqQxnb8GW",
  "key14": "27QiamqsfKkXJYYY1upZYZ5KNy9HLSBiWmBmhSvpne3wCBcXTgwLCLrFw3cu6T9fjWcfMRoWTRw8wXZ1TGUnDZjV",
  "key15": "4Y3HDqemgAe6ub7xCTD1vS36aGbHaFBr3sdfYJKzLcZTaEnxJajkKU71A1RrAs5qu1ATSVnMBVhN1Rd2T9YB71yB",
  "key16": "LuisgJ2fZRGAZNhLAqSXRH5QQnvhYAidVo6JSguo2JR8VAKfhpibXyE1a21GBiGRnzcf9oVqA6h7VKSKzbtvNew",
  "key17": "3Hyp9nQ7J51vyxdByKj7v37tJoZNRHPembKgcHpZyQJCtpu1VBzyAw3DzFxdz4QbWjMZs2c7NCjNYRN581PUoKJe",
  "key18": "3UGrLe8jKPWzVePPqohhS4ttaK4ZZpCRb7Ajda6sUQ8ozNTsw9YCJKXkih9SQKm1QEqvRFcGm2nydJwEtUDN37go",
  "key19": "53nrSQ78zifU6f7oYyCGp6mZK5y24yRaTT7osK1ZM6Pkqm4xAwGmYpMJGis5EyawYD1wEJRaXRWFBt88nGfzFL8M",
  "key20": "5upLrdp65vAJdU7DtjGD6JCfaCGdjcW78uKi7wwRkqhJGrhKieY1cgK9qSKXVCsPbd5QsWf2RXsdihPcPaxQAV5j",
  "key21": "2n2JW8kFFtN6wvQXBDbsGVuhXj8jH7SCDgAfPfKkG6FjymuBNseFLnLSqW1DLubZAhg8Dz36tba9Whz56MHgZuPP",
  "key22": "54hkenSxUMNwKqF4uS6599hmymmKsxR6fdTZVAWLdd6GdQAdn6ujAkss9bNNHgQC265yGiSNsbe5MH5UKfwZzXts",
  "key23": "iPvmG9aGCZNJu27EpiNphS574L6nqU4hyMJohGmvT38sqxizbQfg2Ffs4Rd21mjKi4TdyGyHTdWp7NhCDCrMt8v",
  "key24": "3woHV4hJrmaz4aVMm6UFp7uN3HxHv9HboTV3AF8TEpEv8vyBgpUn1iy1s7pJzJSgPNYmZkp8vty69szya6CoG7WM",
  "key25": "4tvP9m1CWbYkADvkq97pPNQnhzpP7C5JK7FSh1jn3PLfM6jwPzbE1tuHWpJBtwb3tJ7UfpjmE9qCDkJywdje4o7C",
  "key26": "3MxY7RGEiqhWEuQUVMChLVJTVk1nuWuHWFWK889RncmWxg9NsBjHJ7DaF9eAja6ynwGoh6TqYqtRvvr1U5u5mFgK",
  "key27": "2AUnsQehy9GMPUXQJ3ahnwix4TuBsgQ7smyiB6BsK2VT82uyYkEhVnoq5gqFrRjX7H861rvmFG7kaf2WYmYDBiyL",
  "key28": "2DLvM6yu9SAbLvTNZnF5AAVvDmVnrvZawqEVUqQkbJ6fmGXDbTMtHaGTMwP3LytcYovFsZugwqrzTaPWUvMqXoSC",
  "key29": "323GGJoVodqkAxx1PR98b9gjs6BHCzdhAs3shiC1GfDf1BYDRJdtA1mHYWj3RQc2c5uLFDPRC4wynKYm5xH9b9BL",
  "key30": "4rnFsbmyPpjwGneGUqyf55XdspRPqxpCggHcNKnSunLYUYYGgia5p2H6vx8suZgzVdUx2PcqpgPEbAzW37ggUtY2",
  "key31": "5YwSLFXBFi6mhKpTWSqWrycpfCpo2CBGqGU3JcVLsKE8v6JUTCtuWYyyk5zdWaFLLvFjQ3TP3tNrdrdmpcE6uE2i",
  "key32": "4QKXRgSN9UTXyn3Bksu7pbYF47Mqum2CBwdjBuh7Y3DaHQY8cQ4egVbStunu3bmC7K8gBfXYDjHonwQQGWsqiunY",
  "key33": "4Z25VxzX8J14xxHbnkavEWd7fu3iBWQJozZHrQWLZPwgbTMfbpHXsi4uK2TruWCmJ6KKnEN9G16puJU7DBRCrdP7",
  "key34": "3mBQ3g8sA3SBwGPDRBekYxvb7eFmp8DrBoRBdJRcDr11EdojtDmUJXnoWXEtACseW54rfq2qBcutKQAPGWR7bQnP",
  "key35": "Tu7pvn9zdob7yHiFExSzM9Ye92Xq2GGXP2TSrUpwAPBJAunPmqjWTNte9jqS12WWAxfQx36kDw1T4M2sqrsNizj",
  "key36": "5rMijTTz5sE7MnkRJvbDGnZUBTwFkxbekLxdRNa9HhoW2edmvS2nV6By9F9kiShdvwWH8bx722TKJqY5THnBZ9pe"
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
