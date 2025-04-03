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
    "5JmPwai2NmPrfMmU5SF6xDvY5zevNnSmgDse71LKLBUZ2pKiKaYV2TJwkUwN2YQoeDxyPtaCBYFGMgzcv4FUuQ6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phUM57JcPvxsss1L85GXoxisBq2UJg6AEHPLTysFX9RJUV4SQRTiu3yWXG4kQ5x4AqVaqyc1Pf6UoHUxR3YUG7R",
  "key1": "LfAMvoeQZdkiqgBmQHe46keXzjTfE12DmRfZjYaGu2Bsci36ojkekBZ84p3YZ9oQcrTcLAb2uchJM1Vwgugjnnz",
  "key2": "5xgj2BTFrQrYahvdcbTqoZX44hJzbqwEgomUcotxTLnQRgCUHRu4jVBHYz69M2qpbQFc4tXRKoEa7MwaVGyt3Ddk",
  "key3": "3qkPiyuxfQwc2kgjdpPYjWnLt8ZyK1ZXcLiEPsij4k2PgGW1mbQURgC9Vx2bMcEF6kW3zbSAKXLCeR64onaJdKjq",
  "key4": "4o3WqRSH3RV1rUvWx4zM6VFPnHPYn1HZwixrqYz5bQbBSFP1urNrbYEdUTya4X8oUVcZZV415c4TfSZq1bB4g33C",
  "key5": "5GShKyE8DeHNM4QTZBBgrrWzcqGxEVSfGXmKWrqqSjnJoKhqSapyJSepTk8faBf6oakrVCihwGYp2t5urkTYpeC8",
  "key6": "3AJWZ8HsoqytNzSnfXvqQuKQjraawzyn9HTnwPUyWGZnXhzi2KP5eBgZcu6JRfbLzHver5uSAAKieaDfgRNFJw4s",
  "key7": "47Bc4Az6BcmXFKvky6MwZHmExMmmQBBP9sAbpBbxRs1rha3yWhMvuqvYFLuSXqFmbGh3CKN2zGXxML7CHihXTosj",
  "key8": "5hjmx3pz8DvhEBXfcyTSXj9TA8tcfiSbpqDgiyauhaiMUJicBN43xGB7hDAY2g7Kir5Cy4j9DtiegYAsA1FSvH2D",
  "key9": "2dLLQQgFz8FrmyKKqFNFAFbFv9SfaheYkMbPWJzGeVx2DAMD6xteATVg514XniqDs4K3xFCBFxp4fARUDWPRz31B",
  "key10": "2BYYXiVGC1eA1o5U5Vj5gcmmz8NhHBmXwsYevTFeX1kKUiynT1ZXKbFadX9VzMHbdx6xieffbtQwL29JkXyvQhbs",
  "key11": "4B4Ts5Y3GABtYpB2bKcfid9DAbANoey6miEQ9xRD6aH1M1CsY2YgGAcidXj8fUk1T9GrAjAvnniujqLYjadg3mzu",
  "key12": "5uLxcsL8fzBQxscixKi1HaCJuDrTUhLZcQmTjhbGaA2ogWMxHEFXGSqMCJviHhjCZ5mB7SLPA5ZzLr2xyFj764sL",
  "key13": "39SGr3BcFuUcD78aaqXcRbEe2Riy73HpawVsL1mP6vQgTiwE8xLzPsRSRQUT68F3giLaVC4LUpV7XV3jy4546PpK",
  "key14": "22PXn9PkcApmsy94juaPUaS3m7824iLNnfBkecKnihtStpSAN5eHMRJYwzDLmJYUGJt4jUQaSoxzbVi8Jiznf7aa",
  "key15": "4JPaAZc4GL7TaNHgrEqJqUN3HTS4oCDb2UWp4SHN7pWU4KgtPebXw9Pjy2rzkeCeepYBE4cjuDi5reTsmrki5k9o",
  "key16": "28Fw7FzsG4t5bpQY1E5dnCWDay7BQR7DqPaN9u5BekkkfkmvUGemK3BrJugQno8SfYMBhmYVg27EJnDWccr3GNGp",
  "key17": "38X9nGHxrDUW7oL6AVxoG8ttAXXLHP3iSZeP1FCy9xAUPGDgLQfPbCLyNCPhbNgyzVbienc6xjUZWUkH6kHzrPHg",
  "key18": "3PMvrgk2GWk5yncwNidqviK3gUa5x3TyqxmBm8BVhkovpZkFzJ6nCqyU2YEkpU5UtThmoNWGyHRfDRqDmuGxBrYz",
  "key19": "2o58kC1hYoJSFwUD1YXtb71VVEhnbwsT2VSjoLvvE9G3WMwRvAApVAyKn42keNHiy4bamUK9LsqDiXHei95gdddY",
  "key20": "6yrobTyu8jgPxwQvcJodqBoRQw6bMLNGxP2VtWVsQxXCLbBkGrt56LbNp4T8CLGAaLHgq9qc8r6M6VVve5Cr9gz",
  "key21": "4xgNF6dfU7hoemCrtttTp5DLaaDGMFiXHG4YrZvSLUsJbSiAi43A7S6YrSJQ4xJFC2yvtPex8z2iAq24sppyfo14",
  "key22": "2nV6DCYopQY4wyciyGSj1gRNw1XfLG32U9HjGbaActjGmzjJiD44dEcJa1tbavupLr3SL4kR79zAbqAEF33s4L2r",
  "key23": "5p7GBqYKapWARQrCHociG6VwRFDH9VZdv7ZYWa1gh1D9yQdRNTxVDKTd2YKXecPh3DRQSGXzFCt8AGcAjfReaqoC",
  "key24": "yaTGrFWEkUcPFeMmW5pNsHXmU4o3RupK4ew4ipqKMzbYCUdMxS5FESgvWCMBoUoDuw597p1PtPZgbguB2bzkACo",
  "key25": "5oM6pWQB7VpwnVAvQ8zTcrFF3CpYqQutRthown8o4zm88dzWDRdi4qZGN63QRp3wdZMGVfFK12kWEb9TEHhZZMWF",
  "key26": "2Lpyd8Qj7LfjTh4nzSta3hJHwp4pD5Mk7LJeXGZ9qxg5GDSwb8JVUB3SBrXuatEetTHc5zx7qyrPEDbCqppnasJN",
  "key27": "49xJcdfTPZ85K45wpdqAw5bDqqZzWcbr6dTHQZqmxd6ACE1iC9FAfJXRL9tUzXLe9fiBhCVNyECek41ofpZy3f49",
  "key28": "rm4KXxAb3pVDXDoRNGJFbtho7AY9ueHvpvQW7Y2Dspuf1A6bmpNx7VBFEDcwBYP44D7g3mtzH59pL8MKaniyhLQ",
  "key29": "5KPTSSntuHAPMg32j2EZHzwaVZKCtaX7XA2kLYcTN7pgNZBTvFjVuX6dp11egZj8NAT95B4nNrhfASopBG3iPrxz",
  "key30": "4nxSVP6tp4rns7MB4NFiVSCPb1TCBwJFzJWf9Q8Ddm1E9KzekJxH7JnSM1ncAPcmwoDhkg7ijV1SRf3dcepwf7nx",
  "key31": "3Bz6SAv46GmsYmS339xKbcu3jfRaDPM1hNU6nWXNGGoJE5HvMdJSZ6qkk53ZZYHgfK82B7JtP3KB6i9VSy76PGno",
  "key32": "4Yb1z3zLysZMH5RJW1LoHfFYBL9wVJeg1rX7AXVuMdDtTnqfrb99mq5LeXEBDKzLvLdhRG6XkdA4oWtavripZNao",
  "key33": "bweUt3JQFZxq7RG1TxAjAzGd7k7bNv1djaRq5dTA5zzPYtBVHPZvzHvxMMiJna8HSStjju2GwFsHc9teJCcdsaA",
  "key34": "4hdqn6FzvvdPuADWQ7zrHhjzg3SY5X6264G3XsNzzYBeNPrqyCA12bvu5TmRvPLVoTtmFrRSfHxGfu1iNzH5DVMc"
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
