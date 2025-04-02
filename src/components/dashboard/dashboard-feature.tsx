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
    "33VgteHfsrE5qTyaWmm1YVUqDmo9wh47HrfbAxToGDXyabTRjE3W8GC5MvPmKzTPNueQZhnWCwu8LiG5eb55m9xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXkbsm7Jh3vsQK1ARRsPW6WRUaRsyrKyFYQBViSJcLUKRMg8XTMGJPo7zNdrFKB81uAcotxf4xst3byRqkyjWaD",
  "key1": "3qbLsfZVRCtGnkHuRsU1eRqGCHGKgwpJbbZgTvnpJDr7wJmDLNuVvQi1y9cjLcZCaZ11vp8CdLADC7rAhyaw8xzc",
  "key2": "28TUNA6sWnHo9odzEymGZdqSjvvCyxTm2eJVtpKsyU6G7imW1hmZm6TdaPHiAdJC25n8WfDPHT9pfyF9cmvEsW1d",
  "key3": "FtsP98aDZzHVNY2SE6YGmFn42QDGFsmqAqKE93RtNJuuHZcuCFWP8dwzGcXfUuNwmkW7x6od4cbNqjdyHcJzfst",
  "key4": "3e2ZfADYkXZga23VQjSzaPFf47HKqr9AR9ooGkYNZ2CBHZUU5S9Qj4mZVq9F2Ke3H7L8XwX1giTPsPQFcf1JB3S",
  "key5": "2Bydji2vHzGpsBTmfXmon67NxdwnFAQy3nm8VhmMQLoVurpKPDuRqv9e6C6C2j9zbdDQ33db468fae5bU74hpzNP",
  "key6": "54AZ4TwuED4zxkA4ejEUiTerZFCSyiWEdSEuM4D8MxBVZf1bHKDAgNfmi4zKNXMRJsEy49WjGtaP7k7P4emgyFqx",
  "key7": "3AURAcRLdNnuuMhv7tQjFE3QXpPtFMVmv3m5BuntfaHtfEiBpVFz33Y3cJ7z7PvkzT3VtrgMWZfsRGLzJYUY7tXE",
  "key8": "2WgvdgUjeAkxG976fLGd7XTAvb2xHKdM9JhECGAhdynaspzEcGPfcRP4ZuyXx3exJbCMTsRHmV6mBXudZ53dS21P",
  "key9": "2Ssn6d8LpiJC4LAFX79LG1SNw2LbcPasSUw9YvfEste5KDDeWxZL3aLaGFCAZ6zs9UbsLFd58sErGvYhpqAPAqNk",
  "key10": "49njzjsGhfvXcmvCShULby2YRz1UoqMmD5Cbu8KpnAnu25eGsoYQhVEyfqUFSHFHSB5VsFC91YDCpSkvaHMeFXZb",
  "key11": "5i4y4baMHp4x6QRheShzic57tF91KRvmQBXsaqYji5q6G2xK8xaP2xSwzt2xfzP8ySxNheSs4L5FcrwjKtsXMZhR",
  "key12": "3SNHFqGhi7gsg72D9dxjBzbvPJV4pm1zHVssHGUuxVmqJWmF437yqiqWjw9Pg1QyTzg781MJCe4Koj3UDiEXdCrJ",
  "key13": "49UaEcfNgam4xJfGmfVDPExGUGkhVJvtzsMVZWeFzFLBXmAhM5y64Zi9FNjYvZdjj4eecM3ZuMn84F8fC2YQowyp",
  "key14": "43QMbKwdvJuFanBjX89GCQ4po5KwFg8sPKh1V15NmTbsdiSixMorRtwYEYuBeGrg8DwtPkoYcAxPnPjynGysQ7nY",
  "key15": "5uswtiF4xZsF5wpYqmUFEDwHXFNVXmrSMd9oGYQqSsnAcscBLDm2x2uk8v2vUvRirFB4qVEoWHRuDsrcdVEbk1XM",
  "key16": "2cQxwvewv9uAmvsbuouBR5s28murmvS9MahWuwod72g2Sq3HqFmSQDKe5zxSJ1w9LiDkSBSdDQFoYfr79gatWpXM",
  "key17": "294wxHvmnEp9hhjcBV5ud8M1bcGyFnQ5XQDf1NLEBEAoxnVgSpjKNpDswpFkPn1TKiPvhizZUf1j9MMXm2Yr8UTW",
  "key18": "246so7pWptxhqCP7HnQsdRek9BCPbt7gpXb16wPqfR7w6tB5umog8TcpeucVJRw7fZ1bt4jVjdihsDJ31TFcfLVn",
  "key19": "46wdmC3765NngnxZiSm1MBaB9RpjrvALGnK41k9seyEaXFntexqXtxbdQobiffpCaS5hQtRTjHpytUP8eDTVdjRD",
  "key20": "2Xb6jf3sTmregMTx3uj2VGnofv9BTJYGXcaDgBck5ePwYVq4jS9dExijAUA2DcZYih4BnQr9osAqV9VeHqFXgLhR",
  "key21": "1yCpT8wiBC4Y3s1fHQ31pxKnZ1WWfQzF3uKqk1VAPFAP2XHbYz4thRX8kTJsGK83fW7rDCBXcMbXNRG8eaN3X6D",
  "key22": "2ytJRB7m7p8MaGRFCWdjQegmpRaGSCnhhZFmFAeBpjokA9cqCKdfD9ERugmuauPyx8RsVA9bkMQ9gNz3Qhm8dz5e",
  "key23": "52WiZmsq8XSnCWKnBcYQHHS2t2X5HTnhAG9KKPpQHBrmnARhmPxkGQjS8RdZH4aUZCGG5x8xVcK83PykkYgt4N42",
  "key24": "39K6qpHxLE4fEsgJdT7t49mmzHycN9pqs6ybphRgTNMwutduvzTyY1m6rVLXPRNCUqMW7nFbcytXiykohbHSD5d5",
  "key25": "2CcC6FdsjEEWVkozox3xtrnfp8PwdE7kxuGn4b4DZ4YjPw8gheWDfmm7u9NqqHr2vUPCC7P4Pwn19hVoi4hMk7ri",
  "key26": "4k212v5dngRbBZrygjXMSRYKUHXbsvnBFkReyWLeZqU2qQ7k28NbgDN7G2Aqh1hQzSwyN9tHMKQZjE7SPrZRrfs9",
  "key27": "uJb5rAPDAsk2bHjo8XW7w5JcE6hUBuBP7TJoxk1HxksWQNujeqDz4AvKBH5dYXvR9QkHXHqyh4oskL1VLqE6PDF",
  "key28": "4QhL9NSrL3xBpnQbsp7eXL5x1AhVux5a5H3rAg159vtapEppYSA25Eag61L75kfm61AW5EzdTkRyywsBaaDn4VUm",
  "key29": "3ZQs87GPyMVWoEaqHZYEKJUyBCK99pQPdAZ7q97yPd5SyiG1CqMujaBKYuy6DK7kfjRSdewU6xGbRy7XXSXexTyC",
  "key30": "5WGfvyz8GNUUm9guznNGWgWRQhvbvMHUTTFPzdtD6RBka5V2z8ffFGW5fjZDLzN8KNUPbFXjvB59jUteMzkX9yL8",
  "key31": "67mcehwa2sQvaT1Q74TDnNEU7TzkVKN6yxXmpdbEdoDQhSFu5YatYhBorTaXBQ9wSSgxaFeH96GNURUrzXGSnPpY",
  "key32": "3Je33DMGAAsJpQTcVsEDNMqHf7xpzbAT18MZxjq5McBwfMRGjLVqqg2P5tDe7SAopPoTfApZVBEVwAj8xJykqkfT",
  "key33": "ixewoFps2mLeYmDwqK5Py4emDLcvANqrBpSHiGzGJ55tTpoL5wwXFGT49cGm6PsbFqMnT8DbNUjYdFiT8ZALpky",
  "key34": "2sD5vPWx5CeRFcu18bGMvMnZvapBeWYMN2EqoVeQtFNLQsVNt9eSa89CZ9PACLEtHLdScwRnccDLwaQQNRENKeSM",
  "key35": "5prdJitrTgarL2KME7o1RSumeuiHBieBNufMQjMXHMtpd1MMPAEwvUMVaJr3shi45gBHam3JwH6GgaWsxv4m1vz8",
  "key36": "63tvCGP4qaijn8jfEVEBrAxhJfPu7rk7RWuZJ1UCSddAg2HjsCFTjcwUmHNnCVeEefrtLZu8aw4iZRanWHxupMHK",
  "key37": "3arLT2j1MW5iwvHQPwhdPRurbCyDTGiroUVKpHsAELXGjN7sJhSGkhQqnPKZN3yJLiHB6jGuT4RaQso7UdiY96Qp",
  "key38": "3cWahCaRUrqYmFQ3WZ13VsGL7WDvr4s8xyEDkeeaXHNJf3m9AF2ovJRLtuZCMiBtqqQN9rY13fAkecDEJ54PuPfx",
  "key39": "2e3a8fZsPNPW9JVcX8nVCoREzxU9bBa1AJBBjuEGx51skNBcnNepDBcd5qjK4qq21M8urjoGUqr28TeaM4HjkTqv",
  "key40": "4AsxVDJpFBm2oxnQ55iajuUJaiLUw7aX1MWKUE7PKzPnq8TQ6znxjhYMKNd2dw6GvPZjNnH6Notbyr7vBbQCJx8p",
  "key41": "5mwSnN31sZvwX9quNvmhiPPyRzbzd98hUwJri6tcoZE8STJkcgagg8zMbF3PHbdD6hfhaUHxjqrZJe8A5G19s8ef",
  "key42": "94RS9icV4CLr7ERVr36uk3CQE86fVZhJRF2cGmTav8mdAkhV6BmcKQXk89mCH9ScWXiUmTRkr5TuSUobuSMrr63",
  "key43": "Aq9SH55SFVdnP6Ha71GKQxHhhsDu4b6XLSNN6soYTAU9M2sYDb37En6JPwGLVZvPVnSnuwjD7km12CjVL4Q54iT",
  "key44": "4ZVcfU2MabwDQVM4D9peWNAx4kkvSMyuwi2KeLzPBP5rapceDvdkPwdiz3oPfLTmU2CoeQwctXf2rkVi5SaEKJjE",
  "key45": "74ajgxRhXXfqbMr6cnQa6jwt5p5oDeBugrh1USPgBdeMY4HCQEVDRiPkErrzV5JZkVrUCKrRDavtsLirUM5G1vC",
  "key46": "3TvhXY5kaGsmnrLtBvB8ks23L2iPt4FVMqURqgZzNdf4gwD1VbEUWpmeuJDi6Q6z9vSAFuXkF7onvAxTq4CQb35G",
  "key47": "4yFgHuiPbwCnLbQ59ThNw95KVRpvZ8G1nngAgCHiY8KdhXiNW3zrvbFMN5Cfz1t91T9YMUbQHCJjny43McT6NLax",
  "key48": "3cHzuVNErXU2jYnBcqq6h9qwjB77KSBid1upNNkV3RP9ruhHHaA42JZQpiUGgXGmook9Hc9tvBRyaB6BQdzcQscF"
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
