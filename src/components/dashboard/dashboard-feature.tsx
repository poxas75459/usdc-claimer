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
    "5r1jEyF2GkwGFXtUqLkh3RVoziHhrMbRAYqkLJUF9ZTpM7f2WFEs7R6s8CGThQQ9XdgQDvNmx8dFaUYmpiCjHJbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6VWreWRQ8yY1Zt38gVL8d6nbuYevRtAGkstZFmrn15ApSP1bUxUuNNc4fWN17RBxm49GN79SAgoAM9wUkgQCaF",
  "key1": "5z6zcrbku7PkwFTHBPcokrvPHZJQweeSqjQni7UzUU7Wzja5mNNBdgwjjSm3QC6Ss1swzA6DjHXRicyQmmRSPRSG",
  "key2": "2cd7kVjpLbHzJaPAWTk6DrUaNkxUDv3Br5kNM8va7rViu7zLRp7JRhm4AdvuDRqXjs9h9zMLEYo8ZBbFFFw9ffMm",
  "key3": "2pA5hZqbgezKU35KCQGoAG247FizqtSJAcxevC9Ka4YNrB9M3BjZAzG9MNtAivSRP8ZNoTbgLKDUkpsVPvvJdNxU",
  "key4": "5Vm4shECMhsKE1qZDQB2qqAz78hcXaccaKh9ht4ckSThebn7HDfgf9WnbS6BfV72ahUthL3eeFDUbEWh5da62BpL",
  "key5": "61asSjJ3SvzNLpVUrDgqJnrYhnz8j6Xj7cUSo2LshYvWYPu9SycKXW2N8H8c9CAkzsi7D2s2zDrmcxHrsD6z2QTC",
  "key6": "4MzawouZ7hxzpTzwSMrHk2a8BXs7y4efM5ChDANdMGR9N4DLFEPoc1yqoXPNyYSpYdAXLbwB49nrGiV7iNfPC5f1",
  "key7": "2B1iZ4v5VuLWp67kUNT5UmzzQSAmYxYH6cL8jVmAf4rn3AwnSAd598kCmf8CEuEMJ4JY7NPcEoJpjd1p1mkA18qX",
  "key8": "TNUfwS5qZbC8xwTQxRgpNpEr4k5Yc5yKqq2ke5LgmJSAEv6NTbQyBmES3RjjAXZ6m9rSeSb8baM7FfD75iEcs85",
  "key9": "2DFhquypjYHLg9D33QEeG6DKkVk9xkXxrtwaJNnXTTke457hveidYjnV47km4uVXrXXxph4qPKE261LWpSuGfD35",
  "key10": "2xrefNYbYnnDutNt2iMeodsb7WBtZg3766FFSrJJbAYaANKKdVnx4A6pVFKAsPxbyTU9WqXVmDwnGJjNLFGQAzvw",
  "key11": "5Z9xkwBjygsvwK56PZKvnzq6xDuqvy46CRSSwDnpbwtZuMN1qvhuDwS8Zr1LDPVsDLSsx9U5H79kkpFnCUzjeJAF",
  "key12": "5n7FiftLms2XffprjkmPtQo7ptRmYwfiL4Qi7L4phkayoLooeo7pxELGssXb2fT7HQtGngKv8j9KVfSzEHRBr5nF",
  "key13": "twBjKFFwrzATN5CDLe7kUj1i6AQvLZh3sP88DHqg67G1hKhxN19X51LHbZBGV4Pp9y57nepUn1JYasa1LVu5Gyn",
  "key14": "4JC7HkEkYRzsNPoQoNocPuEAnAcW1TN6DFdaXg2rcucqq5R1aWDbtHzASQruf7LCP9jKphxA4Avv7UMff1CAXxK9",
  "key15": "5t3wSuEWMxS6Wgxa7cVWFKdqTzp87JTpExRrhJ5cb4z1DknrdW2Zthni6vqe3vA8fNmAWwnkFHUSU67knwB6gA4K",
  "key16": "4w5UTemv6RqT8xiEdyJuhq8LjizWcmtXzqixUdxNuemgBh6hfNAyf3NNUgZ1eqAPs4NrqkJ971hvmRhsURb3wVyd",
  "key17": "3MvjW1S3uqDZCiqnMSJA8b9BTwwU6B1CeDQ8ghaPVknahYmE3RTuEFWCTGdyvt2bSQhtnE4EWzuCgmrjdNLukS2D",
  "key18": "3NDoTfmnZCxaaPLCBaNk32dYuuyFqAneF62bs4wD35sPcPDADJBd7cJAnCy2YLumFGb7TwgbkL8cW1wyf2r2Fjo5",
  "key19": "445QcDLqHKL2DY7gZWYAmaRSuEqJWZvPcedwAoeJun8x9kuVS8ebVENnVegjmsf18Rbft478XMQ5jfr3ZhMTgDWv",
  "key20": "4yg2Snxemm3ahvMRrtFLraqrQayAZdEtufqw7BDac5dAsp87Bcrz5Kc3rXe4cS1uDyVTfAt122qHD9DD3z6BKWxn",
  "key21": "49iTPG7XfU42pPgQSQiELGy7oGMhMPUp9g2UbHrcrH5kroXc5qiMcBppvoPk5ATTQ1MYJRKSyXzU87zYaEQJCcRA",
  "key22": "5Puij4jNAjrv2zb6NLgttMKHSHe8UCdN2nBvHkF2kFd9hcBt41ktJoSC3Tk8W7f6rEamMwbJMBTH5h4zySyEcj3V",
  "key23": "4k66RkjDpikrJu84zDiYbW4YogiU2Z9n5F2VJNRws8KmV5Z8gcLfZ2LAsu5eqtpcy5gdJcDmD5Rbgm5EkVyYZgBL",
  "key24": "4DyzjVeRqYdY4PGwUa38xVRJLtS1MMyCjwqsDFE7E32XTh81S1RQaVkY6ZB5f65pTB7FekzBiBjLj56KiGvWanxh",
  "key25": "3FQDTJNbjGpRTkZohfiagsVLkxnyY4hcAFbRkM6bF4Xhj8Vh9zU1x5Z7EwxFWjrfBHh5JihxddXHFEmPzmYJP24U",
  "key26": "3Q9FB927QF6jAGLo4vADZPKtx6F4NV6C9j22guUGzcA7mf8ZHPqSZaXNbQXNErEG7UzEoTL79idBRQHfSZVE4TKP",
  "key27": "5k3QVVHSyeXrNDiMVCNm6Uy745PMWezxgHStwRfd922q6Y5zanCvYc22N7WjgWr3beaQJM8aCAbvsH5b8LhkN3To",
  "key28": "2W4kZG48CVim4EyRr76q8PBNq53KYHbuB3x96o6A4e3ksW6kBhYiig2uPpQbKjpKNZBRrBmU3zT1W1G7sPuEpPjZ",
  "key29": "3y4ShBFq4Mq7r5wfz84maZwazCKbo4EJ8xGBDCP9c1ke65G3NkZt1mxcSY7ccyYAWaYqp1GMq5YSMRDKXDnaQTVQ",
  "key30": "41tzExpAVqUdZQa7QT8T7SrekFhvV6CJrh4N1SNWv24KWbSV3qutWFyMFw8k7Q3ryYWZb2GkisHmYGfe3brarxKC",
  "key31": "4pWakWJkeVCWiZR9T4gL2wGwoRobk58xXnxqGtqX9okYDZqSGZ4ExfFsanwPHsLmME4FCmsa4zpwpMiFsHprRpv",
  "key32": "4VyrUccp2S7XsETD2X2ibagrWANmfjvsfQ5vFYHcNVncMtw3ywkVShGYZLMMuPU2TymoApZ5RiK8uoU8PiqCzEtT",
  "key33": "v3gAzVYLS2gBborZwF9k3YuTs9yity7Huyn1ZQeiJPcueeEVe9peo6E6fsrdV5sjaVopketKUfxMEiXdzjrf4Dk",
  "key34": "2qiZUCb9XcRwD7Lpk7wKUapPEvYYPZzYk9mVwz5JpHyEnEDguDqGB29DWcnzfEJEGpkb8mBRqyjMZQJRoHTPq7Gn",
  "key35": "2RoKAwti5YUXbCmeEBDSPQUdf8aAhM2JQtBs36Tejsa3S2tNSgQt3mDo51oiUbAf7PdknGZBCYJPMJyXjVSwGF61",
  "key36": "63WQN383y16sCxVHibgxjiyXMmxfCAXWZx19ZSYvWZ1dyMUnNtvBRFzxEsi6a2vYAvPC16K9xYee83TNjCTFtAcZ",
  "key37": "3e7UbHPZmRgbryVDfgjTGPyqKYjadnsvHZdwFpewx1x5xNjYrBcaqQsB5Ru9uehXqLUd9aqbAoeXa6jjcx8ohicn",
  "key38": "5DDSLfeymM7jWFftx5EZ87trFwvQ4bwLz6M8TiPjUxVKEgz1heU5F8ijFfCQjwgtWykY4EPWackWN2X9q2ZZiKTr",
  "key39": "2zvVn7yCThvmefLggTFKYsCbhGQNWai4ZnRECq4JSrBMThTHGPdVF9uYTtWUXCbyzkcQPP989RKSBd25JgitKKGz",
  "key40": "5xSLPgshuS68yGcG6FXGqPSwpFA6t18JmwCtEuNKKe4qmPfcsyZbbUXHw3UEqLbjcX5r6T9u71Y2f1GmtcSK233T",
  "key41": "4CkczGWus6Kc6kZmU9cenvXwkSxa2yBZJGAzxiF5UHthJPJ9jVNS1ak8nsjrHcbyrFBRBo7GC3wFT6jFeEKEjma7",
  "key42": "3X3mmUgNuCGMnT95ww6sx5sKZSeit2ssnyZjZw6g4KDcnuphGUUW9fGs3Mba7cu8ygEVmkw399SKD34B8WYsm2k7",
  "key43": "4iG2G191aoFKsiH1g1VEdR5VXgC2AQ8QkTzfox2TEQrTr5isqL84xAs5jYonN3fM2bwZMDHJwveTzjfZD1jFqVek",
  "key44": "EygBUV6KHzPAASyy5i6PFhmtxeBvsszzvGJYJTozKQQ4MqMkXwNfSummVRvUpr56v5dYzC8WyQLDN5E9NRNnzwH",
  "key45": "5iqjTUPtpYHvb9B4cicKUvKDQyZ5DridxRw5L2MzYfZh2gWoKJWWNceYWZkhZjAX5XDZR6hgzPwVMgcDRJyDaxTe"
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
