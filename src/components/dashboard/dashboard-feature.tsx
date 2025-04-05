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
    "43nFkTB1rMaN7NVihBYEDjaZjBnW35hFZ9DoRrtt75HcirCSHmRoDUjSAY5dmQ2SdaPMW88e2BMaHhDqrC2iaRdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KVzHABQnRAPaLcujc5zTq41q3GzXd6DK4pS9Cgm7vd4DoATpKtmh1huKQZmC3c4yS3YBWQ2do5Ub6ZxHdUTjUwp",
  "key1": "5sqqrLidekRHsSsEYzYn5F2yeBJRw5XxL6fUSYxrHdETVH178VTKBnokMkL5KpDzoSMaANoYxZHCvRREMdH8Y4ea",
  "key2": "45HwQZLfpWgK9eqfVQT6BpkTieRwhHwNBhWtLkwt3T3Y9qAHk3A9NRq5yLzDgZxmz9qW56MLNWNMzxoJuHqaDBNH",
  "key3": "LG3REpUivHeVnYiqcbPDCjRBLvjPgZRRkLTiFtMDjzr1ZYdiJqsyYfH5bYJJfinQo7hWC9vEtYUEaC7KHDfCJEx",
  "key4": "3eHt31yh2mNFj8PpLzQ7mZZMywde51RDiobrMaxvPzGPwvt2BiRV5iLbirHKJipZto1ZuZaXisGtSQhSSNER1QWv",
  "key5": "3KDmE7SqaCHdTkFjQkcWAfoTBvt1myEtRAW1ZhNBNonnjB8TtRrewsYi5obrRxpe9PMnmyxhoH1eeQbVYEXXxBuQ",
  "key6": "2n7jE7mSfossNa74YJRCkbKRDWAJ3ZknP77ZZMKjuev2KT4N9f4CJNPoQnwa6pvDP4MBLYSZsabXbdf7uMVe3jxY",
  "key7": "6EtpK1bBfudtispA8rXqiWa1Bw3d4udVBLNHN4smK7vhykzC6v425goygqiP3XhHuTgzyo8uNPDagjmJoyJynPb",
  "key8": "2qQBJChxbZGHmWW4yYSbBuewAn5B7qa1NVQxq4YQV5wXtCmkPPA77uw7t4WgvVtUmbvxLissjcUKqeGzXr1hYP4N",
  "key9": "MZRvvPaKXvbFKWo4E19m3oQUWu2XWoHDhSyonkGP4mVuGCTXANsUcQa9EnaXySBtJMaN4Kv9BCq8uG3XcQ999aA",
  "key10": "5DARn7YFCVvGH13BqyANCsbJ5qKFXdNekBhT6pADGUrXQrSx18nnfjAmghS25JjUsk95FKtftRYoepXLAJV6cd5f",
  "key11": "22owzANSjRsNBB3ztKJRjayqCtZ7Jege65zjdAVQ3yLnn5H9T2BNMhXmrBYWSWAfPQRaufoAHHeKdRT8nbL6UgAv",
  "key12": "2K5ZsjdHuhcbfr4ELLrMmyeGeXMbRj8ae6S4qb141V6mE5iZH7rr1UzurhjJ3yhQgvK8rXA8XRQG22xpKPqM4wvi",
  "key13": "42CHjWrfAXi8mABH9zsCb9KkQpVKA1wxB2BSPQjJT9FpJjQyn7TXHTiE4YNKotgFvHxWVQxa512LU5zCzB8aLKhR",
  "key14": "4ZtC4JhKoEQDRW8A2kGBb7EAGAgoHkwpNrYySywu9Pu1tCLxMP1nBmAb4ntHrU2uv8iQJzsLeWRghPm5EqKocaQd",
  "key15": "4gxncW6XDMVtdaioUACiQtLhwfVbRDFkPczFNujy4hm7FS9F6VxDN5MxZjqBqeZmU3GgVyTQx4pyf9fLLEDXpV1Q",
  "key16": "pK8tTxsAJamwR5eKu7Lvuuqna6yvSpPXNUtyga2gmfEPrWx8fTsy6ermsetbwLNKYeKq4RrtuiwgzmvJ1aevsc4",
  "key17": "2qwKQB4HZV8f4x9q3pC58CvkDaiY86xdLJ1EKem4ieDcRC3RNvLxAAjTboRizN8wsacHTyAvUJPsd1rYuks91cas",
  "key18": "4skS15nF5jvEF3acbTNz8VKyvpNTgTZMXrXRtUpn99vBjrgUxfE7My71y9CtuR3beiEMMcBwEKiKjStdSjMbQuY6",
  "key19": "5UqrPWvg8jpjeRp4ZVeWroQB79wCU1dgXSb8zvAJ8GRAutp4kfERqKTkASLw8Nxse2msDchcKZcyfeMMzV4gBRDM",
  "key20": "5rJuhzyExWt8MXh3zodTKVsCqmSdHJBcfX1GhK25netNM5rMETy16aBE8eKaXFhw5XeoRpS3f9qgZKPiZZPmei7B",
  "key21": "3zL1R3WxHAYAHR4Np74x8TFzoF5sFYjGqQF2PxCDqov5ybvMajmdUZfADLMxmjSBcetzHqraZHXPGD6G9iiaCEfT",
  "key22": "UdmYLK7uZD2CnVLGkfSYVYQ11Bs6uCbNCDanekx3DwaeoNyKkkQyxXWVmsRnfYWCSSdaE718cNnKi6uPXyuQ28V",
  "key23": "3Xu1bYdR75x7X5ZTzjhKrURTDm2wMRQEeQ7CkE2KtmsEjGk6imd31osGZX82uRt4te6cqKnv1B2hS2JsqTW5yREA",
  "key24": "3ooTU6UiyJ8frSQRxV3fF5MzLCJvicNYPqeFXYzohrzoEUFk2YLL1Rc7g1znnxGRobsVcqTTLheCdCMxbiUWwJyH",
  "key25": "4uJfYj1u2uy2VDyKWJo4RnFR39enLum2m87C4CcxPTLmJVTYP3DKRuHmNWV6JZZXmQaq5KEzrzrQjtVsiudwpq1L",
  "key26": "SRAkiRoitBC8aLwHZrMfd3GgRym8yf1iatzvrQpVjUU4n8zSM2dE3gba1bUrxfW3k4332G1amtUcqQqEgwpAwQy",
  "key27": "AGo26TQL3Cp21hJPCJPZwkDMhrrQDowBWVtZTbhTM23eGSZvRHsHz1CU4VGj69Zg3CgR2A7JDdF78ZVQ7dTDzSX",
  "key28": "28k5yrA5QaDkYqGn32iChBPgHy553GPrUHyJ6EUrkj487sUNf56DC3VX6CyBiN6hNvjdYKQ4zTLhgTxYvXJhgUMp",
  "key29": "544AYMgKzpTbJBjhqxirEJWLi4G9X6k4nswbnQHt72dcV4ZvMRx3cyFgVCWwghY6P1VyiZXgspBf5eBfiqg22QN9",
  "key30": "5rfxVkyYVbar8mPyEAg6saDjgp1n218ffHvuScgYKorAK1YQAr5zTHBMHW1pAkTmoThG3fxC5kLFSb3RQgFTjJXK",
  "key31": "4fFdBT57RwiVffaD1cA4NjubxAb5F6ThRnhfHcoqoSnGeygrdmT32ZPvwihpNQPNJ1hsJ4nEDoJatviRjephjp2j",
  "key32": "4bR1pAwppTzKMmRZbsQX7uNWvGveWRQddaMrCpJR9K1tNG8VtYeEQRFjMZP7UdgQg9UGnUpBSzMuoQN6qJMS5hmi",
  "key33": "23Y5KgZVpA8YHaiTHdK9jqzkFXG34ke8f7LaQgLEQ9WppzN7Lt39q5pk8m88fkVBSpyDhHzduTD8N8fVAaXmH2sB",
  "key34": "3qCZATvBuycA3mQpSgoM9G7SseABgYmcachaKRYacbnJRukJ9aSqMrsHdXAsecQQzsqBnyLZQyqzJdNEexUG7wDb",
  "key35": "5nTiR8Cu4CTj2o3mtyNRyRnY5PHwPgELgb1DSGQqZFyrs9bL3KeqwKxrY5EsxyCsnigjbUPCZ9WANis1dt7j1Wkk",
  "key36": "34hPhUf8SCMnEXBt9WZEHUP3gmc2UkErhGcZLpZHX9UL7cjwa4mCWeh6P1v88rdNcyQkBXNavujDNnaXwXKCPCq",
  "key37": "2DtZjJrCnsYq7xMDKGyTCxCBVFbXvZrobWaUjJ42E8BzztKdaDgw6ivotpEbDczdMFs1yhxdYmzP5xhUaGXQDJZ4",
  "key38": "5EiHHNVbHyGRtHrj4kZGjtNRMPb8X4UTwq8vCn5SnoX2TbTAYZJXgyyxwyHaMciPSV8Q9DqNZqVFfQjwLNyKSefh",
  "key39": "SA94UB1SUmd3d5wDHxeLi7ZVuouwGFYzkFievHtyLUoGrv4FLeWaASTQDUejxixYE4CrP6cN4X5y7tiZ9hq55Yx",
  "key40": "CtpfFyavtckoUK9tfuLAK89uLi8jVdhnQytfdPgugp1rgS42zd4StX6BVMAkQxRNtYXMYXw4CHgBirfVXTDVqFC",
  "key41": "Mf4MTzNDru4QXJvaih4UB6kHnGvyT4LpFW8wSAdnQ9EcKdijNThQysbUEMqkdubWzF5miPaBEGxZcvmoEQ1Sady",
  "key42": "58Fs6MRBZPoExokxymNXnd5kkechzhhm1irH2K3T5eFvzyJNx1dWBqPyFq1vu2F7nneHpkuoaTtkmhp4CXCr4Vtp"
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
