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
    "2oUTvvYv2jtupq7efvaHTRH2fqNgypwyt3rx4RTc9oduus5FqcSi8RAidLsE67wZdDQLfzEfJCu1B8fa3cvhL5Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxuQsvC7K6G4JmqtLKKwLByhink6LVcuL446meGaampTUNwcwTRntiBJGg1idCfbD3R1HEEapdPT8hCW2zcAzWw",
  "key1": "42gPcfiYuMoJgEVvB5yA5caedESyMVMuBAzNdeWtSuDUaurVwRZ56CYkgkQeA5Kchk2W69REH1HAo2PJxSPKyQJP",
  "key2": "2ERv2jmQ27xBNm8X4xirFPXnk7eBwnW57TqTBWthn4iioEHy4DuHZt5MpyFq1CUESpNUZor7mrVJn3pU6H49b2Au",
  "key3": "3zjJVpbuWMtVytXhKbm7HajyNafSQZj1qTKnerVoJ2kzryHmTXUTCLy48AZSYtHEKk3tdgQbqg4UL6DQ37h6pwgB",
  "key4": "5YpjXYgpnkzsj68kYULo4LR9r3WEhW3YUdZTjFa848DSd2j7EwU3EvF11MRtfXCWD7sERamu1Fumc4hmkG7DMVLm",
  "key5": "631unXyQzVkfdNWKBQgReT7xviHPYdD54bnJ5s798iGFXPaT1uy7ABqTUPHfhJdnoSRgs3hGmPBvSc1Le5rSAPAr",
  "key6": "2hXsnpC9dyN8LxAiAR92FWC8c75DfekdQNneBkPqUPnWYCnnkCuSv2iUwNntXCLNeZy4jkqJWdPVju76cHYizS1t",
  "key7": "i4HfFYBrULqKE5aVFDpYK44GkkCRQnd9KEi5HEgHv8VQ8R6WAdviCC2NkroQ4FncBTh2Qreubftb3hkNaUjtg5A",
  "key8": "21ufzEqZrMUKzpAf8evsB1CyaA9wv7XZVMAdDHfAiN9ht7tm5QMJ4ngyAJEXYrZSnBc6QmGeUqRJMZBesSsuNg4E",
  "key9": "2mqE4wG78Qqpiut7UgTuvKHUJBqivGh1s8omczWi4dz7GVdeDAWwa3F8gJgzstwdoavk6ZtS15P2iNM6RwooWtXs",
  "key10": "5tcRyPFPrvxPjPSMQ4ajMv4KhrwqAMjXZHCBPiwjQKwevD1pvftMbNkTY9e3t4UytZNQeb7fMzzwhmhMEz6vbYpL",
  "key11": "i3DEWq8zWibmw4UjjiaCG3Rukw96DKVhwYfQAp1yGN7g1WdmCKdQjKYntX7KMreos9d5HEbyoPcXb9VZVDEzzfm",
  "key12": "5bSuqFjY4NF82K3HXPHW5fvyJSQDuM27GnCfVfaZnhTAnwS6ck6hfKZEYmh8giieJWy3Xw5dNR8aRMEitBUcha4J",
  "key13": "2rQCGCbPqwYydJrn1rAL3XW1qck4xVHf4ubDRQdFdQjpFMJ5VHtWv2o8f7MfKm8L6P34TpYAk173xwozuTneytWU",
  "key14": "43xZB3c8CrLnoj6vR4nTvjSWm3BrGJC34e7muYyvXTMhDwyyNwA6QupVjaff4xt5aLbZycwABdZcgHqCEqGKxcqS",
  "key15": "tvyfHpvUXiWnbVBCiceHLvNqgTp4V3ybDtmgDywymvW4QDHQwCjWY9EfsdxpEB7nFuTMUb9xXhgCTasMcoovxhA",
  "key16": "2yN4Q3GYTtcb5FSsoWkpCPEK59AJqfnpoaqRwA3pf9Ea482WEUkpYRsYz5wRSE3k15TQpZAxrNVcnkA4sHSExA7e",
  "key17": "6aEHkDLfsApd6ACw2nc6qkokwTTKZ2vdPSGAkGGBi5ScDuoQV67vjgPbeXgbyrWBF5Bys9JUKpWy4R2Vn5MzR1M",
  "key18": "4vzz9LbULxTuRKckP6p3zzi6EWRYtbz2mMvzHm8QK4mLWCntXfXLJLhnzH5t1gWXV8vDF4XzrJxAT8BXPvjzn79F",
  "key19": "5twetGWH3c243T1zopmdoPNbUXSDiQUKEtJPu6VQgixw2WRspT6u44twWG9vBrnckrx8uoPQJuV7Rcfz8hVBAYSA",
  "key20": "4CiQ7Wc1iy1tBbePxWdEHY947vQcNYS4ukvG5d39DRdJDxqigMXFqC74zVENiF86gqaLdUPSAfCjoaBdJsmzp4Gk",
  "key21": "2LA5nQaaSnc2YTp4kb2622no95o2b8NwySjSWS6EeMcvnEbiXrZsScohALjde2RGqp1ZyXvK6kD2w3BfqowQHr1r",
  "key22": "2UN1a1uAd1NmpGVroLqb7JNFT9VRddpBQ98xNmTmcLHGUP4obYfr1uRBGm88aF57X8zCAYsdbpqeaDJiiSst9JGs",
  "key23": "2NSA4wDiUA11CXmWpmp7NjYeS5pxFGnGagN1yCxJ4dx6qWiJJD5v17v88P2Cc3pUNMDTuQGxEdcUKFhYPuHbdbch",
  "key24": "65qX2iEuTq7tF3Nh6mrcWaY4ZrJuqxtuwi4VSbNuQgTe5xsZ3hXU5Vx4YsXvo9ExN8cXo3nPiphy7Bjamo3Xs8nY",
  "key25": "5Sac32e4wqMYq7EAeVP2hs7hM1JxE1jKdjRG7kVmPzwurN16QQEP3WuaN6ZvafW3z52Az2XRfaF7SpqREjn12vhA",
  "key26": "3LVEGktwRpFQRXCnRZFiFNFAQobEE8ojxy3MKEYpS1uDC2Xs8bjPpHYcZuPVP7btHFU9VdBLW1gDDa3FHtwYHdXP",
  "key27": "5JgRD634zqrFuCFEinqxaf5qJQYJwx5oMs9NVXFXogeWb4qUydWeYjSEnkcNFqkR7YL5SdHoSEzLXd59kkCtFWWJ",
  "key28": "3xvMq2v1VFSetiC135cfAY3DsiJkaS59fF3xzbv6MTB8HPvjayAxgXCXGhDMq43KcTfaXLCEnjFPgcjvr1RPnLS8",
  "key29": "5qjLV4juQK5ipEMhZvKSUrs3rnfe2jqbDeapFab3ZMnboauJEWauMVWNhddC6mb1v6ckQLaepu1ok6hpNVcrDvhv",
  "key30": "2kFaWLuYHzm4i7rE2xTr27THpSG34QQMxGNnHeZ3ZkkA3GoJEA9FHVCwrNSqAuoTDXkUaGxaJTQuyZH3iLMFhpfu",
  "key31": "3kCKfZQaMnmCDhcgDLdFawZL4TJZccRzpVgHJ1bmPrNfm2VwRgBJwPaaUALBRSbFoRCHVLBkyyjzryX6Q6g4hwJq",
  "key32": "2s72PSo3h7JdBsQTBB5gQ9UjMVvYd5XzLrkAeYXapLFn9JdJPU69EtCAy9sQywyQXeTwtPSq7KhYMcCPGx5jMxa1",
  "key33": "67iWEht5g6UfiRLCXFAPH3CdNrJd7XFCBCV3VdDT5n2KD21QswRqxMT4cvpjCNSQcqvbvwmUCTG5GW2prXEPi4Nf",
  "key34": "54eB2LBqEkR27XMr4St5Ax32n431XvoQda8mi3URhJ1rFkytM5MMkmZFQCBW1d2S5QoyWAgrgWH2PX8Ws11239JJ",
  "key35": "wB2aQpwG9mj5eZtmqVR3FT7crkd4CLNUSsPwXZz1NLQFWvsAvPTfbTgmFxsTJ2DKHKvCNCdxsy95MYVsaD9StAj",
  "key36": "3inmjcKpfbBwaiNH8PFg1A83r15QtgsXvkMGxULbtYbn8tBb92QNcS2fA1Nf8XAFYTXrjoY2Cqe1Rdxy1E2x4FGG",
  "key37": "4pdCHS6afDYbnvaZUUwpQJW78fxGcp7XpGiUx1ZebJVnzEBVLyDRQXrxzuPZ2XQMyMu4xgPBfmoucFhsVUsfYapY",
  "key38": "3Zk3zhpMKrN3kNTtiq9XrBPhvUXfcfHTfE9ydr9mGzDJiC96mpV2oaqK1hj8i8fJHZvqqYNe1f5wH64i3jBLUz8s"
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
