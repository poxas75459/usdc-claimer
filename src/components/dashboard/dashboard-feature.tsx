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
    "5KKbXoMMgTmvKU1UB5t1MpbjSc2DXSSVXd4o1HmSmxDHsK8fy2GVbH1wXDMBRU7DUt4QjNaYi24qgc5AehTr5BPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qGsYMgUUgpGoSzzx146gfRjqpQT4viQPFqVLSwdChVMtPg7ea3tozitMQpS3jrhY3Y6p44Uv4PHrQR4Hy9G5P8F",
  "key1": "5XXPaefbUd2Q4awyKn3N6SHyQDWWK3CL5TdFYeskYVgvwP1BZtZKimRC7tNUJ91qTBDpfC4pSef5QYzRHZHBX8mr",
  "key2": "4PBPLPcymxrKA1ZrFvStA9dfrvzD25Zap8qfgPk9sEBxjPPRaCYNkQ8rhzEAh1G1iWL2xhL6vbmDMw7SZTAz4Xtp",
  "key3": "4ojkxSazoCgNYUm36vo7WRCswVuafBVNv1XVpi39Cf5yYTJWaDJpT7MhtvoM8vySpmhhvmzFM7K6oY289AGbnLXM",
  "key4": "62vTpPZPSWoJFf31nLeJFNqErHm6RuJHbuhDe8PauUmpiBPmeRV1jxTMUqjM4hmGP8WF33J9EAr6phcdhgqpke7U",
  "key5": "3Pt2AH4RUAC8nU129aAX7KkyoaMiKZZTZh121LvyX9Ptg17Y1pj56M1ozGXQ6qYUpXy3kVjJv4yAWzFpo154AdWh",
  "key6": "2wqiW3qWeZA7pPbSL1yaFbTF3o5ckidhPb2VgQdTU48em8rVsFRW6HJccoq2QchcLqXJUSnKr6VKb2M9LUVhbrRp",
  "key7": "47cJzci8qDZBTtqfVE14yZmQCRNH26c8wxJihX148dVgonyDG2HiDmwKiUnKdoAwa8oCcR8ETciz52tQGfUrFJBb",
  "key8": "2NeCh77NSidFzn1rkYkSiJuVttStGg5TdH3BKTWzSzJfQWQC1m89SDfJ72VmtVx8gNW798EWdb5uEEvPYdFQ48nX",
  "key9": "3uhbW3HAoSFBcYXo6dVHYprR97VGz9YLjRmzNXCTkw2QBwjAFyTDDjoDCk7EGeBCNKM3B3baEFBU3zgnEkYMwAtV",
  "key10": "2kojVVvHdWpQQ4C933EcoFs71o45K3nspBv2e8nzCbFyAwMsLb9nB5yjTRwuifc4cVuAyKtysvrZBoJVYPEDTFcf",
  "key11": "4vrDCo5u3usen4xUEprgr5whCVQKzhkEKGns3CnsHVcU9gCqaknbtjzW4dsqTNT6xhwAPcs4jA99TW8oXMwoEz2T",
  "key12": "3mrobB12zREB4p9qqML3JDDjM61k43S6pqVvHzqcDHk24hwcNLY68oy367CN8Fxpwf5TR4qZxoiuqPj35GJHEKi4",
  "key13": "2GYH8RSWpNkBbDXs2W2t4zgv1VpEUJEahha6aR5t6mkTZDiFZkJn8vYr3Y4a9UQV8f759TosCdnoETtgK1jQ4x8i",
  "key14": "3hjHFT9LSQh3Emvr85suH1o7yePUVadTYZCtqMXix6oZrvWrAqcvgwSBawtj3heKpdK7mg2McBFxQjV4bCAPQMkt",
  "key15": "5ykJRzHG95BMn3L7u2u2oZW24Xw8Jm9PDU6j77LbZiy9Pc6TarzcrMhWXkvb1UKwjzLa1oxYEH3zyURztMdQg2Tv",
  "key16": "2XzthxjvWbKjun9b33vCdvubBybyCDqqfcsdKE48yMiCZJEJAaJE3xvj5MLcmZ7drSHWdRkpx8gobuiroZFqWM8x",
  "key17": "3ynkM7DkmiJoc6v81degXi1b6sDZ5iEZ4icEFPrqJ5wfC3vr6Mf3mgiPSNbV5gfny48qFi779J3SfLAFYUihsySb",
  "key18": "mievFczmytwtyyNjestEwi4wGg9CceUbCfD36C6boDnTreGzDHKGGb7BQKRMCQSCAiPmWmpvjRuWBz2fH5LZgrY",
  "key19": "3DwVwAJHQgs7jiULiukKaji3yHcXWDc5edLS1n8irdSZAcyU2fDg99vKgduNwrTgiRFeVkSdTksKnEZeAme491Dv",
  "key20": "nN83TiLYuAWZNQSJihc2rFFD4k5hkwLrqaLTy5b1TPT4JsYC8jQTVZqfH7i7gWYg2yFwvBUMaMcPafytSVPK67i",
  "key21": "3rG4qpJW7SG5i1oC5cFcRCC5egQAYDwYz1YWWehACvDCxuKcRNEczsDtDgtAhV7gAVAnxxRtxjXXDQZDbYuqyiUy",
  "key22": "23rM8gTTHhQKkgoXpV7BEpCc3z39wcQuPYGan7Z9qQet6kP5mcGKhVLKZALPAboimnYwAnmoiWrUttAKYNfWyTzW",
  "key23": "3rgYmzvAnXGUxzHjm9P5DVFcMChbpooXPtxfXJMRTFXDFdjqdJyXwWMiGmvMuEzmE6bPpPvYsireZdCxPskpeMEz",
  "key24": "4Vfge78QaxS1ozSe2PEoaEkmi7xUpHPT1cCEvQeDwPWoXji1ne8PfTeqfefiVNpAx51jzXZ4gYLsFSUy48fUgTob",
  "key25": "2413hv51VQmt58kdWPBuTvEpgkEApTjjCYvtx9qJ7ssjUMShYTGLB2oL4ZA9EkdovP5dJBEe8vXtEnbC9ePCWFMp",
  "key26": "3wiZXVpjsSu1iT6hSACxewLd7WopFAFjVhswXG5eoDXDFhKBQoAKGSTwYY3N6A6xNkNA9SGKNe9bDiYYNnHncemK",
  "key27": "g7PXCxDtzbnzvmDid2SrL6LxxWhi9PoWBSU6wi8LQcrSQ36y8LLo9HZNjYzaPjqGY8dWZby19rgw7xKVJWTLK6w",
  "key28": "5ajkquoWG2LDRv58PD3uBL55xBqNNJXuwHYDTvmBZKj2YxwzCsSMa18ZjEUAzV45tqAmV4RRZEXfGJ3QvXhzfCT3",
  "key29": "db7mQ9KYUzRkKdsR48Gs1DzQHvZzVHWzKpwFEigY37xWYDU5LyV3H36EfJuUpw6xLmPUZJTUhmcgiaRvoLWkVEd",
  "key30": "mtYR6xyQMMFQoCE85nDS7cM7fyQNFNyaQLPZ8QJVbGm7NDhDxg5ktEFhZHcicBq899buLYimfZn53D3sQTV21MM",
  "key31": "3PH4iZHf3zsgGXqsT5aRmvr9WGVw4oQGbvZRV543m4WCVk8cDf1KcikpXnJ2zrMHr51k7j4pCAajjqJ7YRNBZTCv",
  "key32": "2gRbXCkSG2R4VQoZmKp5ZzofEUYs11fYW28CAECckgpwFJ3ERVqVsA3T2nUqFxZE9bbFbn1FmxR3XW3n1M75FhoJ",
  "key33": "5hjGfkeFDe1c7vQj9VrMKfi278GVYULBPDRHkHWBvcqDyV11FVQNLytdWY6gHm9yFNZQtpvgErEdzXzJ79EzjCau",
  "key34": "2G1oFU1exz8giFCngXeF4KbnB9xRCMHgM3S8ThjF6jSbB8MqobvdmZ6iw8riS14fHF9MFKZrpuuXJvCh5kFbFTvr",
  "key35": "4vq4DVh3zUgbcRGF55d56uZ5CohjpuCSvWSGGafZnai48qD6hDiUodQdYY9UbpWo19Sa3A1fKPJHEBDFFqPY49aG",
  "key36": "2EDJuCYndca3Ax2jPTBSpw98asKMTKrn8ECccp2aiJWoWTQbrr48YMmqwfZBsfKtxCvXYdPsrqcidFJVwciMpqkg",
  "key37": "5tDLaraxz3aK4GCiNXtuTe8XKK942w8Z2BN9VWkwh7L3xPYpJ9LSsfud5Pr1N5AFUAnsrYtspM9KKHAAgr4j5a2r",
  "key38": "66MbL4wdV3biVDKFdYtoHo1zvH2TotHzttpCzdwFfJRCrpLZ8PdWmjchugKuPg1n12N1V5pL1xjk3Na7sihSmJBi"
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
