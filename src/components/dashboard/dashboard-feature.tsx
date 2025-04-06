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
    "3vDF1ETNXVTfgwwqSEbGuhLDG1T2hKx9HST3xFYLkGMMtdsn7T9UA4nXYwBQ2uHrUdtQUZMFaQ9MnAAJinCkqNfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uheqs88fnZYADCVDqDd5F9MhKfzxwRk7CogQWimyjBFc1B2UstPvRE4GoEPq1HFnR4pUB8J3516FK1Nh9ZhJee2",
  "key1": "5TGUhmLWNm26rf4r2KAD43vnNDdm1TchrqyKkmkYen1pdhNBSSGYhzKUuxEH4HWKr2yABBY54jMVCJpHHmJ7HptY",
  "key2": "5kCL5rwSMAqW6TpszJX8gxRGcCMdvyF6Sb7yxvoBCsTvySRKjQAV1m3GVutnvjk5JkAKiDV6XCmZ1yKQ4YiDEfBv",
  "key3": "3NSdpG7m2pNBwLJ5Wi3imGs4o3ghiUKiPzJQy4pxE49PiEj23VcndosMrASPCZ1tYc3rKKW4jpDMNrcZ9QLkGUXU",
  "key4": "3RushvgVBQmt79hLWnTKY82X6r5eqEtmWwWsskRTmyC7k8zoxZhw78aXYLtdSKw2uC1ooDZvgMsA53SBXwAThjFQ",
  "key5": "5pPqq969YuHxJLpc79aVjjC37D5ittFRNoayzuoureHFSDSA3v9ZcVBYN1HhvzQk1W7NHFxnuNiaAFdAGdf4vQbG",
  "key6": "2pdkWymS7hy1XmYdBAPCN638voLC2Disr15qon9mPNsz2WAtJ2UBqectxRe98UeatvffdR8tEbaN7PnjkbRsgeRt",
  "key7": "3g9sxNGzrUVcLQXqXCkGfcd7qZnQaZc61tRpj6wzzjGcc9dyPPXx8uXKo3pVgnEKSSz4H5VSgoETTHUGXzEob2fm",
  "key8": "5aevjFRtJx2rTXudLT6LEgV9JdasFBbiGuD3VfxmiLbw1TSbRuApLTPWmggGKjWvk8vR4yZAmXbjtV6p5kXYggDx",
  "key9": "5XMThVSHtJ5rcCWpUiFAyAft3PeHCQcoba6VCbs5bi3NxuNDytib9jtk6xpn9sA1NjdKJZ882gsgNHyEhca5wnFj",
  "key10": "46D5MRYgQry8p8Qnw4M1zdxxCr6Ts3747RAyW23NekVwaGNjeS1sT81NSJJaerTcoQn1cq6NrU37ozNq7P4HDNPV",
  "key11": "2psg1ERyXCbQWRNdad4TwoJunnvVB5Hfeo3HoAbH5ZH3bcrcbK2WvodQUhSsbvouUtMo2hUyXHQPdve8hxALzRRZ",
  "key12": "2dM2hURz15K7eUXkaiQXPQhw2gkbfDu8sCFWsWiHhQmqYeUC3x7eZjdJyALZfr41HZdNNhstb3hd2CGLKnTZTjsR",
  "key13": "62sR8n3LsHdibyVSGpa3DF3YhbgPsuMH7eSVPENcW2LevC5kQrAvhJPRvmha7eDFrX42r2NGAfQr2wM19uyCEBk9",
  "key14": "2NFEnTgjNS7EBMJftx14hmdTfcA72Tt5jgrb9iwSthMKSyQdsH7zoUJYAvNpuvDNrhER2oV8tHKSY7RVZF62TkiH",
  "key15": "3ZYFnvuAz8pC5uXmjqPDujk2WDmdN5y5HxAxxTVwToMnKq2ve9mTMw9teGSBz13K53aZpxsgMQwFjiM6Lh1ZDKgn",
  "key16": "4EFLhwkCoAGULbFzMzZhzFejAT9n4Cyh1NrhXc4SzdRKvoXmcd4uMNwMhDRw29stRNL71e4ZwGD4rniYVnSoAA5N",
  "key17": "t9b73phTSvRkxvzRWkrA843nEwft1tZTqcsepZFks81dnyygz8c2Accen1Kr8AP7xGrjjBTkB9EdgWuby9qd6Np",
  "key18": "2C8C7HaACfehhxnyxo83BkcDFkcPfXf1YFs5ojG6zZ6LHR1ELH6nJA62akjeBnB7ZnbTTozzTQHA4iNxj6EhjXhb",
  "key19": "oYBLW2EKCqYNkJw354tpfQBmufVPpCnaECpweSs8mMju2H8cEttovLerNqKas8pXewP3kmrRweQQDpTENM4NJmF",
  "key20": "3XBsG4yPcdAoC1vE2wX26kFiHTXprRUPLw5UPqMzx9S267eTZ7DuSJQ1inchvpu33ia5MQyjNa1J9d5z9cEGAtbh",
  "key21": "3db7Ff2g7wmPWWZHV7rMEkCBtD1QYz8UHnzhvdLxitLYoS7WuH25a1VuMTFSALv2LsJCpNkoaRK95e25Fre6gGCw",
  "key22": "28mZzT3XHDrQCSDaVwdKPrqottHsvgWQLtw68HNAwk1baaeS6wUfdLANftQfRnFKFFJUdCHxEw1beykiL7frz8bw",
  "key23": "59Jq7TDoLaKsfPFzvVtH8ju53xweRq8ETwUTU9F5Vy8h3Nny6udywVi4Ur3YJfUVX6UQbFmdqxZpmbDVEyrZFcqX",
  "key24": "3vMpF3DVESFiqCft3WtQeFhCLV5kpRvgMtuCwMcHVMpyya4xxbnBfqu51kp3YVRoAmtq6VGP8tais2yFduejzbjx",
  "key25": "2VgqNicGqJkXd2Gzuj5Li8rXeLJ1ztauDvYk9uj7UHFer67p3D9z7WKpkMzBESooEurWkvXLP8YojgvQZfFnhCf7",
  "key26": "thurhVNsrVmV9vdUDa1543UsKV4a14RHqquMudFTeoSpf3pGw6B1ebtPLskgQnF1TymSNAGAudHLd4suTqYe4Mo",
  "key27": "5P1oSoHzh4DGw1KnhB1Vy9PT4hi2p2JiQ7Hew1kVACDtfovghoiPFbER3z993AeMJFUFPiQ3U4Dauwf3cMwakH1",
  "key28": "2MB3GwXJZKxwjsEp72EnbH4jm7s2PKRwbu9P3kLvw8wAbL1drdbVezgVzRiqgRxKFdywCXLHm5jRB711YJqTdh2L",
  "key29": "37V7D52MmAd1QjxyTQGKVd6yvwnqYmFQdscVT5NrByJjwY6gYrsN1hEJ9Yid2xweLaThKC5KBzy9R3bAhnCWjsHm"
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
