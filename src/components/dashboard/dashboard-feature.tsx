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
    "57mfoo8ApEeiCfakwT91PzTks3B6ofNpFugpR5oRbfYCsiqtXeAdnVgd5N8ffMyT8uDu9ySgnf3QuwFg2rCXq87x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRj1F8Qc2b1zF2ao2mDmSdjkSfA6m2P9xQ7HAdEgZPzqeV3hgAH8Zgt4Ki26HWhkfG4jLhNkmWviAEoQWjPJ3PP",
  "key1": "5Vb74uxgcjx4nJp5cy8KZgBgibPWQFp6oB2dSF3F9ZQ6rV5vzKG5c2bfXgNh8CtiPtDx6xWNnftgC5tUxGUE1bik",
  "key2": "3tZhGg5QghwfQnXfNjK4hEqYHmWJYoRoqgmbHo4EfL66jxQZD6jXtac6PgrRZEkPHQXAfQRpAQMJYEYbrSvP2NcR",
  "key3": "tkQe9hRbWWSieoUksaYKkymHwfXHhKkud4eUiJu8Y5YtXov3HKhdncPB9nvcqXNzRbjgdsdaPUvfjVgPH3RgpVm",
  "key4": "3m56TbHNM1MKPRRzsHbd8M4H8aVacvVGPu7AdLr46F2acjj1hKg4zC9YwQ4ECpSYFjvSAgmgt3mMsQv6zSSWagMV",
  "key5": "4rCJrdwkRAfcJKNABXwtfQ9f1hoXtTWFCVS2MwnGhRxCRJqwsXeLQTfhV1vMTLxvS1S2TRRqSBxLbgo23Q3WoUfG",
  "key6": "4YGmdQ8hbuYNPBEdVHGd66Vgj3FU4WGcGwiJwV9ePvX3sLMyrELpqyynxxRQabpHoNwbsY547JLSJ1HSFC9rZuVK",
  "key7": "2yrCbmdA9dWMQY3jLnDVYJv4XbjsQyc2z2dHCNDECdiygGqZ7vwBM8s2fbqkidkSak3t4Cihd11eEqeq1snAtyZT",
  "key8": "3Go1HfpbSW8RcDszav6XYWiEKzZgb46ZJNLmLwEsGx1v2YCT2US2xWKuKby2aDQQV4uDDKshpEPxkDjTAZkxYDAn",
  "key9": "23TpikLHHLrMzCR8mqnJNMP3pMXdwhPLKYPpwNgEcHXXF7EpGFTQk1urLbdUK2s6MAkzt2FEbmC5JBg7QJFT76gM",
  "key10": "367zVH8whXRCuQVG9b5Ve6fNZ52rbxBNZQmCCiBfeqye95PbioKFqdxChwKjo744rJfCiHtW41oLP7tEcr7vYkTm",
  "key11": "4wEKWwF2EmSTD29Qkkw8Ka9ki8m9Rth2B8MVANW7BJKaPZjw3ZJiw41pLCv5Hm4bfgNuQ6MAigqFtBrMadndJvno",
  "key12": "4M1YTQbujTzLW9HLKDu5hs7bovbvDyb4wYdQW8BMiRkaYtBscMHGg2z62Eu4Xk5qY4FZ7deveJR7d9QobwiXZtMu",
  "key13": "4xo5XEkp3VnneMdv8LLnrNk7gbRZeGPQKtE5Vz4hx1LfgtCpCWWUdLnsg4KBQEh7C23LzTVHi2TPE3asNjx8z6Yg",
  "key14": "3eBEai9ECa3WY9BX9T6CDFNEFquEaAX3qieXKS81QaJ92mv5ChFCTv5GBjhSjsqKjWFpKHBYkiE2qEqQRuZndzgi",
  "key15": "Aad3bxHe2KLqek4ps2LvJyT35XZBou7mruZ3xcBLgnaWWTCAdH9YUmXXzBeHk2Wzvgt7mM722puwKm1UKNSieip",
  "key16": "o6CgYxgwBv1HtYEN5CaSWF2b5MoJrkWBkwKF8goWgLJPiNaVND34WaZcZG3wmnm2RTLuEFjzHFhL8D6QB7uAcJa",
  "key17": "4S1K4GQVGZzUyhmBkRjyiZHxa1TwTuXmNw2tNHicM9yLesM83Eca5dPCzSsooucQPJhtgyF2wq2498STb5H1N1Y",
  "key18": "2ALSKgrmnzG3es8E8PepzxxfNsqFBZz6B9v5EhaF162Nz3mByzwGC6iaohoeKVrRCajHpuq9Ph6H2BCTd8sDibx5",
  "key19": "3F5tJoGnMdpoJHBaGYyMQQbd5QXdVMmj67CdazdbNNpq4oAJWQeXw9fDmtXTYYn91y1gie8RNdCbFXVQQHWMw88D",
  "key20": "2dJJymtBif7MvxQQFVTXca3tzjA9yf3qYhKYqB16zRNb1FZTe7K9MP1AwhDh4WZjK5bEK2w33YjYbuhPA1XvJHJA",
  "key21": "2cWdux2Y6PPajv4L4Z5V6pmNSo8fzwTJTfjQwep3hpWTZimXyGPoEYySanm2eP3wTrqRM4ToeWZAUGGNwMsT6VCW",
  "key22": "4CsLAAe24rhMQixs1Lx1rAwWBbq9YuZGnVnCBUKSMErBGZtgBS6QsnFRTb2TiKigHecccSayC2bpzhntvYr6DS1S",
  "key23": "67CXg7pQBMZLX2MxKbRoEuiLEM8jc1CNL8zuF7Bz7PiGVZwvmRnxwkEprbFsPXA6ruKRWMupAyPrDsmHppE37mLE",
  "key24": "4W3xA9wjXcfEgZCPu7wz28GuFjHHemddthJ9WZyhncmmSXJATN64kBHP3ow9t557AaHSddjHEpqpmSbmubcvf8KG",
  "key25": "5i2igFtrp1skRoiwKuTYUq6BCNFuvkiFzSMfLgeh8Kvv1vanbMNukawZAWbQLA6JihkJrajX7p6tZ6Y9pNeK3acP",
  "key26": "2MY88R7hdCb3FuZtCTcXfnxvRgYFw4KTFdqzuqxP6YH8Thi9xT4a2wHgUtTHimcZxCxLGCNVJXrp4MdLx8aaf5F3",
  "key27": "4Y6XwBRDe2tmtLwY5CovbC9j5hn3h4SsW8SHhRGLxeSAn6szkQKqXLR8T9f7iGhSnM8wHrMBxWXu5c7tuZWcDpAU",
  "key28": "5THHBsoEAWR21SAJPLCUPk4WNd6vAheioXjJSZyokcsHSKfNXJmu5Zt52G6gTmFzfUxBUHsfK6cDqGWBPLFU4p9",
  "key29": "7TQnxQzPsTEbrBv9zfApmyKCEitAgGwzavewvqVvjr9wF3fijFzhK96rhu7CrSHP8jSRwy7LE6zkSTUVbj8s4xv",
  "key30": "5ECXfwb9mnG6X3NbeN4qsPvFccaMqgFcVMT2odvdW9VpjNBPxLJKdrZvonrwi5GjDLToUfJkZ3k2BuNXGckQr7kV",
  "key31": "2tj2mXmSSToegNsYehiMV3JDfVbyToaZ8B5iUXGzbEYV2R9YdLm8n9VNqUaewNSWMuCLNLaiQBs3YFvdpkhenW2o",
  "key32": "3UeJ5q4iAo7U7LVfQK9bLD3fYd8e3dEPX5fUY5B5WHzwS2TrqPimiESeMnCTexpzKhMoNSSay7SKCTntkdehtNFP",
  "key33": "Ro8syPw3uGfsvBuWiHFLbWQQSKVM2fRG2ydNhmEBB1Lwzj114Edd6Cpchewy6SuxVFLkzjpW3yPSBXkH4Pj9TCz",
  "key34": "4CjBewNxynX3Q71AwWHGb3XYCpZZ8ZsNr8WYo5wWmbYCxxEHg1287Z2Zdw84ZtL4zQL37oKTmkXT2q21hjkJcMxB",
  "key35": "3rAnvRugkCAgSCmMqMm7mqX4gzYmWoKSBY8hSN6wL2QTycLeMqwizBktwBxNDzVuJwmDwSG7rXm2giLjUSMRTq98",
  "key36": "4KASnz7HUuxDyiHPCsgUp9UXUiyvB1iNDyV9xLWhiQJa9GeCnVfk7zo8RncX8D4zxMpXNsmKFXnKXaNehwHw3SGp",
  "key37": "2W9uCArUoVdvX8Eh2o35NKp7jhomr4rBiLmtKx3WJe767y1HbrEprnbgRWN85DgXck84jaC7hqR2ydEkwi11UmxK",
  "key38": "3ZS6NzPZSthP7VsT3KFgrWPmXs7Jom4jUNb8qYH1cWWMHBkrqKKgbLvYUUhhs1PbFJmjAxcUeiN6R93V3VPHuFDx",
  "key39": "2q8d9J4HM5VxzPjrtUfeT1DRyGhRT3ydGZaitpWn6hoa2dA6Txh6SCYgRUduewaDKk5K4qfXSuZNsP5mtVKrGAV2",
  "key40": "34AmkTKVtVPKgcBPeepgh98bjrsztLrhtYnrryeKe6G2AmzPt3fwqpobphe1LwjnsFQVkrTs3xNeXAG6bzbdV7dk",
  "key41": "3HjjpRGKNwxDpUmNetpXa1H1WvNS4NLzUAHt96xei9HedcAycRyao3Rv24Q6rrjCConJp6CXZdmEcyh9GHkHvJjN",
  "key42": "Q5GAcez5LtXEBiXrYhGWM6x7A4T6BbatPjgrbseFucX14uWWqyBQdbAeG3PZntKCNDvh5PTkcs6yMoho3TRKuMe",
  "key43": "3fmjDARLCTKigiZ28sz7MJfSt96ZFV39kq424xXYfuZj7JC98TpG8xA3KY1mp3W8K5dkewtG7XL56xu4cnbUYo7X",
  "key44": "3SuKPhnEBCfYbJSFHWhUY8Aa3hwvSx135FMuw436o3m8H27ifGtjEvXCJbAcgXN2DRCNbS37umgGecQTR5eCPnFP"
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
