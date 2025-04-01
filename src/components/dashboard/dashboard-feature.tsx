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
    "1dUGzARVSq5JQpibq7uT8n9uFwmNoKMbG1ZKRyHeypWMorruEYA7Utdv1e6D5uWH4ep1XfgAE76x81iPGRfWVcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uNkDfTyhKc3d95HAQXFUfkEv4RLzgsAAPN3YBijaCfp6Cq6yZZu9gRiWk7s3HKJzf6zmpAx714PsnengbqtkJAh",
  "key1": "5ED4zzxs2Yot5nYRTX3Mh7gMcfzcPTKzX95RrfgfQmTU3s3RysCgL6eJGXTqehErTw9psfqfpEbc82bMM3X2AwXV",
  "key2": "5q81HWv9g191i7RcYQaqDVUnmLL5aGKRrGJwgsfW9UFrBy7bSS71nmuBCuiwuStvSr8fVZ24Tg4DvzAd6yM1RZme",
  "key3": "5evKXVhQUtuGRrfkKQew31oTXLmAiLq2tjKoK4fZxEafNPBnePGZsbhCCe7e8xfw4kANnxA8cZqp9Y3znC1UMJHr",
  "key4": "5JLwxZJ5mJCRe1rJHFwFBBST7wfoUYKqFR7EEzjqvPpKmoEHim9oiJMqaeQCsfvg8yu2BeLf45mkg7gLibUL8tQY",
  "key5": "PXdKL6MbUqztnvXTYQLEig1vkYwf8Hw17rxGMnQ37UWeS6taidgiAdbctG8m5bu5VGzSGQqELbEVU3ffSZbDmXt",
  "key6": "52cshxmsLgxU61rB6d85EEX7B4mVJ4rrLFTTtM3x1YfLvCUpmsq6opj3y8xA1uVYiVGfLKHfsVENuwBKBmjo6EHm",
  "key7": "ztSKTPJxfFLHHBvYXP24CYbCPo4ikFQMBosvFCr81BjLyuB6B2cBjw3mhNAPmpESaGtrbQwv58ZPY9ujYJM3Xtj",
  "key8": "pAtNEVsXC9u4FPzzWT1yT4TcsLzjzhgCpWjGzWEVe7kMKeyxNmcTk8ZapiBQT88r8xTsDvV1RgWULXTuTRszFwk",
  "key9": "3rnYCqfahppLJsfPbZBD1LHSALBdY4fbAw9emLKz3YpwChLkcvo1KShHfbNsantXS5kc49CeY61mzybxaCxLuMX3",
  "key10": "4XRJWXqfhbLdmKxvBZ4oyac4sqb6wpwZZ2zj6d6EhvDgH12aCxS9XyEo8exjuWbjpPDaJTBGki3cm7SHF688fYPC",
  "key11": "4YDL3tTCGmAsfxMRFjMN4dDwUzqePDRhJARkfJJoCtf7n4hC6Z2n5oqQaC847bNuJyGmrpsxqrroUiuy2ffZqceL",
  "key12": "3xJmHarCPAttzE9wCzvnQhFjLipe3bqzZ91GPRTuYkuHGUg3h73mXWr6BwutcY6iDxWAuGhgt3VXm8a1WrJRzp5q",
  "key13": "3bjcpRiceY18ui49ZnpQDFFnBRomhp2dmBRYZ5yBt7PjWXtRHWrfnDG2yX11GMw3Nh5mxPviRtd818gMQhUDMK5h",
  "key14": "Yd4zFqPpZHwifivKBiDgpQuzDXHojrqhPMgzSfUWJ6dJCvQdqgzAvAFeq1iv2aNCUqKhJ22wzKdWu3hFRkfgLyD",
  "key15": "mMWAJftinpPN5Ybmmiwx4TZ2XJKKJYU9oGQFZswt3m3NVAnru8ixSwo7ehvcQsGp5QoP7ryxnZtQSMEmHLiiSUz",
  "key16": "EboS3bSYrAjMycTRGWsMamvgmztNhJM2Ate58gVTKL3LVGdqCyTDh2ZgWJ7TRKkMDHYm5966YEc2hi4R1LcBaai",
  "key17": "2XGZwVp46gwf7Rd1VqMCSy64kNjyTVaMZfcGnEnxGKR2JzhkCP1FsEP73Xi8b6m9TvhhxQfsyQFpknGKD55v3XRU",
  "key18": "EnrC4uzZmuKU49cVcVJ9daLjGDPQhmGgM3Dgc2sbo6s5vh4vM1BAfj8TovLEv6wdqhbDm6RxH11Gf53jFEJzWV1",
  "key19": "2xUXuXGotXu9Wq9G4sRVGAcf4MnUhsHdFnWCXJiHbVtPX1gFTj3unCosM3SEMaQSeJyhCEZuxs3FGYX8mGdamaYq",
  "key20": "5J75RFLUhC2bTRjcMhwwM9TkkC2Cr3X3E27yfsdoGcxgD8oy6RBqWX3nnG73zRY9gGqzSFKL6CcgP3qKYhjHi5NJ",
  "key21": "p1eZyuDSYax5fePyXqwyTsXJznYSk1SjNUTHrgrDXpb8gZuCrsscqMEznoAU2Z3D5uFxEtd2Ct1dTyCU92vaW7z",
  "key22": "49wZRoQf57zDmw3TwYqBkEtDeckdWPCVTMPN1aoStHow9vA2buv5NrAxWUgifaFQY1zwDjqGrUJeHjjRQgHSUzUL",
  "key23": "aaZxFEQw6bFy4E9EAprivt7qBuMFdxePxQMYXqtwn375CwsehrzDkTP8CjhKyKEuvTF3CPZDJjP2uLYEcEFXGYm",
  "key24": "65x1Zvhc6x8jZHyWVBJ6QvUwHFuZCYKJo5d1GCjUF7TtPHgnZWEEEgPDUBLJZydXwLToJGK5y6APbpN6sFWPRmRf",
  "key25": "3vb5BLkZ1kWeYgYKMyUb2aM6oM7W5tQ644RaHSuMDRr5U4dyv6BTsDpuVbg5sJjMJ2rtY4okLXsMhe7ViDHLRjgP",
  "key26": "3xd786zJb8LSmj7ye4nNet96P7VakhvqLECyzEegK3zdwv9cXxKStqoEYLRULwxMLzvHHCcohes6r56P2X9uqvF",
  "key27": "67mSMUBTGMwX8WQvwzPUT3MLmrfLBRcGgyMyYACPc8H1gs71oKDedJdvTqCarrAr3CzzGkho4TzjRHaNF9NZmBrt",
  "key28": "4hiyqz3rGtx1qfFE6VWREcSQR7Z8DCyYQNvNXQWMrtjND99WNo5bBFfs5JcRJ8CT758gw4bNMAMBe2v5wjodTxg6",
  "key29": "WAQy4RBHtDR1DHCjp2kxKmrqqERHB3Tnff9rzreieqrrhYNB6LrF755FSuhw49o2mD7LrGKAa1FKAe5i2WAVmrp",
  "key30": "rYoHGbbj8X6RetiQDAxruWP3dVvD4YVWUh6prXihNxgCWeaYtQoREEKZW2BPuGF41Ebj5AF9C5QHtLCbLVc6FEm",
  "key31": "tKC93zmkQE3fwKNY6PoR6Eqhsd5r4VnUh63P6ioPpKQYtznx7GaxstA4nLYxp6dCjnrcn8tPxs8WDKzHMB4HCzK",
  "key32": "2vqu7avAijVffEVkcz2nubWxRLqEdUqVyUq6aovTap8nkRcseEyYn1kByX2XTaSVCbFkeZG9sE19Gx254yGFpJdd",
  "key33": "LNQUDT2ZCmg1KWYMUhixfmoHd7PuHnvXXdEdkTFUhzqvR7fhcxNrGk3Hu2bZXbWh9SF3qULuHRD6ahPw7esoYj7",
  "key34": "4gP9svayj4KizavQFx7uHANfAPWSTrRNVrVwPHyUM7uopo5D5bhW9RWDdwU6TpGpgHQjLAtWkD6VD23De2B321Wi",
  "key35": "4uKKk6Maoq31JCu9QpKd7DcKb23HyUcqviycuD7BCnnQQjrFzC1fazDEoka8jnYwmSAF81BonRFB28n1vsfsZ7bb",
  "key36": "3vZ7hQyFe59cmLtLgDv2QVwDbsH4X3uJBNexLcsLJat9GSYGZVSQqorbrnAMWCpVuKYiosuEVNszuoNtV21nZ56a",
  "key37": "FDmz1FR1Yp9k2K5vnigyQLF46Ci9vbuEXVD7ooHhfj43Yoc4ZFcVsa8HqDu7jQ3YNAuoTxP7e8ZjTRPGHDGcF23"
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
