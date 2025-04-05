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
    "2fjS8rJRdyXyDyFT9gVBLKjjXVGKPrm7WUMa4zisf24XcSm2wN1ZJxruSDaTR2SAuf5CahBxdztHYwFMqg6mtrf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTL2aYxAsxrBB5bKFd64e2cuhDy2auWjTDkvYE8DYbmYcwVKqR8Gw5KvxKDXCoiApUtnBD3dRNn6htzvtdGi8D5",
  "key1": "34iuLjK6y5G4xQPsK7yGck4gheeGUvZkRtAB3Msb54y2RYuYgaB7X1HGxShayq37HeF6AaWSzC2wh9drNWXj6xBc",
  "key2": "2b87DwnoDy4s9m7eP3oe2Lyw41nSgPT777j68VpgfrgdmWJNDa2EHN8yMewRaykx2PF8CJYhj93CpzVEF3ggo1YT",
  "key3": "5dub67Ke6yGgkmqriWnKEbgPKFwqdXJ72VtPksLMhTFWPDXtqR7gLNRqAY5pYA1x812tAixe6ZcLqb6to2FrQGhr",
  "key4": "ML9mLvxkHkb3ZGChiQeHsH5fgTgtockKjiez84EMRTnSaiZDQB2LUakqRtP8EVQno8ngQkEoWYSi6S1PzSP2Mvo",
  "key5": "5TVRxoG1ZZ3YJ6ZGLcdsVxsAUsSKDvuTW8UCGFLnPWQn4DvZ8VNTePN77K8wjGrm9v38tFh6jyokaYKp4wWpjbwq",
  "key6": "3qGD3mRXfcts6LoxdR5PsiAokBU7Qk1tcAZduKCBThLD4HNkeVCPLTRe2WFT25CefA5KwQBcxB8ytaTrcZfq2QhP",
  "key7": "4LaWLRVNwjyh6KJaX4hLYrF7znTQxGaSYhpnMJdUxX81GAA2VeHkCAjSonpQBABjZ3ripqufqaJR7Nud2um591PT",
  "key8": "QAp8SwyWBL9zbou4wQjtCQJRmeRpkSFkCsHQUjfYKH1qMzxpfHp9tpGGHDBkGV4UqnmSESkmJic7XXhC5pMyUW6",
  "key9": "2koarGGsZ6BiXCqL3w8qYEWu4Atb8jrDWsshz7XKDCjHWnNLktetGoD7BaH7qEStZ5LwKZrRNDGkY9xGQWg6GgDw",
  "key10": "44Zk6DuMokfszrg3iq9YSjp8T369BhTTqhf4BfLyqDRyAcPBbRiToThgHzgFtQuJ6DaWSj8TKLecPYX1TQWdU8yV",
  "key11": "2pnGHe8cU3UwD1SkZfJNAqxsPRpftpT3hu7RxNpTfrjLpa6ujjFKkd35UR25DU3BtkxDdqmfRSEGFDWdT5W7mkMK",
  "key12": "31HxQ3yrBKp9ufTWMUicVDUX2mQq2rvMPKLGTHKoacCzxoBMQeFbq4uaW1RYW5hTtqH729HRK6eMVkaZQPRYQH3Q",
  "key13": "D7UFiKbUHYDtmoPPE611bWnjqRU9afuEwa3wrhGT6xbS7sfQWq4432bnLYs5AggQgxqzdAFMXzp8A6LwnWjDDtF",
  "key14": "VKPDwob7j82oPQhW7XDD2vjjCQs7bbF4428SVPL2zkRj6p4JTbmpDtw3C5KPwBAj5unZkknikchcZMKD8xFteEf",
  "key15": "36rNHw2dyBwTUzHgMZqTQesJ9sojBV8tnLRm3UTTXmAR7ACvBKCmeGKNNPaMmgcmrab2sFTDYrz3fQuygXLZFEJy",
  "key16": "3h2sQRqLAE8xzGTqhQUH89ST6fDfrN2fHtDBwYRMTipFaT5U7SkV4FVp7mjS72qb8goHdsazJzMD6MBxUkyaptV9",
  "key17": "5bwhQMh4kVgT77iUcuPm5oSTseFQuMqCvhBy9uYYy942T4a61wXLHMdHW2myiCYLF1x8USykC2VCAdTuPSupYpPb",
  "key18": "5G4VeKNSdBwwTj3KdQGYsFyRR3yWn7aguxn6Bt6fmL7tKZAAQc64zrHcKtuTWoQswdE7QEGt4vounGThqfVzpZvD",
  "key19": "5AK8LdoKckzWws27NuNYxp5zwrYVFaQarasiLugZqMdNhkT4RNP9YKx8uETzK5sVnzgDQYdcY3enT579QjL71sNx",
  "key20": "5tPXvqyd2KjFgp2L4Cnif18NCEzq6wJvsdXoPSpit7zwu6ftZnHHeFsHUBJczeiYkfbdv4ppAjNnEysTCmoq8wj",
  "key21": "3PF8KYKGm3YfXk3T1pS7PJYkhD5eXVCidMdiHsKfv1PJt7xzxTiDQRBrLLjWpy9mBYNdQ595UUu7if7SKeS7y19G",
  "key22": "BPjUYmPNKz9ZoVBBXdvmuenAu9CtMR7nec5Np7gFA28BPyvh52UR28p6DYRaG4Usih9ian6GekTKr519pzxR4Y6",
  "key23": "27ZNXLkg81YndE8fzhAVhXdFXt1fRfF62xWitGnu8bsLMyGa3hnbtDpm8vPXzMY9mY41Rsvkvug6MbzCpZFunx4f",
  "key24": "639zxRDZuabM48Yze1gfb6MdtvL5JXEq6ELuHv4hmuAUfWBKbQUnoRveysaBBhX2crJJ1wSrzGuqpdL3q4it8bhk",
  "key25": "211zRYLEthD6zKeEikNC8XWLdPbfbQFVrZcCy43W58e397bFMXiFiG9BGzdh2bbwYpH3HMF2C9PDyx6ZhkG8yqjW",
  "key26": "5nWwrS2K9dmrPMNqaR8hF7tKzWg9NQx7e4dVucQppd22BbabWrfF76Pkm81aWtAyYjuDYQ25SLxJGX4KmrcTcGEL",
  "key27": "3LwzaxHTzNBXbcGNqoGKAnDnGy9R5qD9ta2BxZ7EiAD5LgcbsXuuAbVXELj1b9e3NnXGG9boZ2qjjWka2nGzTMet",
  "key28": "38EUzhxPTvgYawDHg8dyH7nE2y2AgLq1kup5hkggSwV8buhodHZ2rVNkRvFsWKepAwjVz61BtYd7LhRvBXJVPDWm",
  "key29": "axpG5REWhHNCHytZJ9Dmhc6vCB8Sbh7gAUgQButpkPQnQoBY2eFKNZMFNZq6fhQWZCEcyv6Bd8uUjkU4tPuzsEh",
  "key30": "3ZnJLsuuRcuoB92RkapQKf2AK7D6cQXPSJschnakPx7E9MMcHdE1HuQuJRbqifQUsoGdHncmcqy6jtVx73bx6bxN",
  "key31": "2KVikn4FmLZznkdhfxi6R1fvJq8xVHbrQWbviArFdMeyYv4QJr8mvxZkmRXbi2X3hovbzNKKDFEyTYqANFFnJjfN",
  "key32": "YkQ49LvWRBNnS3tKjSA5XSZy3LdjWL7ZXum1sZ3GKxaFJtdvNqyTaAcesrQG6KWqpWm2HkLZAj9vAKggHdvTqoE"
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
