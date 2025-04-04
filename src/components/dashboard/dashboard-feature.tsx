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
    "5pzy4LigzT6XsAeExWwmdkEAQfqtSzzG8TznjdXddijuhkUgT5TRoQeq5LXbT6PiYpAPyMBHFyYuTYw9zWuhzBqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDw16mUEUkdAZ5noXtNyKva1SoPfeUcnXVbTCmUydjehFm9McDp4HHFXQXKKsKKBLcukG5ZGqBGVv9BAoD2qK2j",
  "key1": "4ci9CAqgtaYfEisHwe5TaHRmb7CZG5jKaRkXP5Y4LBrYUzYSGQyJzcdpFCRyHU17NrocEr2hU3VxLaWF4RggtyhQ",
  "key2": "1V9cYmhcsYuNAMMLuKJXLzeHnwxA9Pomnhkky7S6vwUFXpCMNqX1ZBNn46eyrmkeuFJEtPudJUvJQ2KLrP29Auj",
  "key3": "2oMQVmwsThmuQvt11BbSoW5fKeimFpZrCMAfBciq5dFroArtyd1A9PXAtcNzvkSuiP36qq2b9fgg5qiE6H8LWjaQ",
  "key4": "5zFE8hqDRgiNBgubPxqfuaH9KUcz3PRe4a2hF2yy3pK19JBNq5omQv17fWFXCtPceqcj39PwPNtiCiux1H3UA1yz",
  "key5": "5hQxeyXZNZT3oj5tb23c3XU5ZUvmQMkpqYDzQbSym7BkmMvLri5JxsbfSdBjGJcBd5GKtfrTSVC2Qg6r3Fx1gYw3",
  "key6": "531Sy6MT4a3PbGxQVqN5byUB4uC29DzJzUAKB9JPHnZpbCDSXAX7Sg8wcTGYTuKECLFUB4LsKjE7MwGyoAQrPYFx",
  "key7": "21rq7CJ16GN5WVHU1HhMPcHkZFmtuy23GHTwAJVQ6LgJMDkb5LTG7mx4QCgFfLmXPBah57JvokyTdfhpUgMLy3vP",
  "key8": "tLRZJGDRKKv82VnAAyDeCf3XTRQmfacZCjwZV4qUiH3JJCrGnVgNYYSptaHLUN9r3Uv4yqBXSERb1qfBNA3mjqm",
  "key9": "AnoesW84Qigy9grUv1QSmd9JfmAGZRXBHSWZTouQXi3Pfp1Xhg1JJJjyTdvnUrwMsCf3Yg8e8a6tpQWMBUDNocF",
  "key10": "4Lcbt87hpy546DAYKUkskQbGH2TyDkkPRiCH5emMpdwEk8PWWFNeLSFtqjx1NSsbkn7XaumnbR16UzJ4tqZfe4Ax",
  "key11": "5d1uwtyLrpGcpasqRYH5yq9kci6dyxJPnrXCtufcthMyohZ1BPMx9yhUzHpANg7P8MjnwSrEqWSbXe92aESfvKfJ",
  "key12": "3rkoxznmtxeY2mxcpEGQwFWpX44tuZ6pdXp4fFmRbMUeiN2fcLxu2SPhoz1FeWFALVEnKQ2C7pMzkhscAnZiRbx1",
  "key13": "5298kVpvRz9G3T6UiRU45fGxCoAvhd1wCftdoiXRCzXSM2Sya2aTMuHRTWMvRL5imjcP45uEfmBB5MWH77BJTg9h",
  "key14": "5wBj9Rxvkj3Augr9VobpPXbCGxMLyiqEqKKsXcLG3eCfznTKPXT5wLbitkNuETDU5q1emJrfDCyKZ5c7Xc7QP23P",
  "key15": "3im5WtqcNH81JrjWrFPSLhFSLrxmZojmqVU6RTrnK4Pue9zv99re9FYgsLszEZqEym3taJYjzEGZWZYKCD4PzYpa",
  "key16": "38CS6ytaARcSYB7jKXbiFehynz1uApES4SygNSAxbUxUecVSMYv7MFdBVYHnb7wT7EgcobcoqPVEC1XPG39K87yo",
  "key17": "2rF42yngFc8WfEdnzu6fbHQJPxvV6VYL53Ty35jGzvXHdJzADJU1NQQDHmVKpYTZDR3fDbcd4oQsWMjH2trdQesu",
  "key18": "4dmZzHkZjojxBiEuGaTjGMeKD51TVqPMRdivQp42mnGTDaHjp9YfeA51YyN8cPRLV3cvzwtYQfoBuKuALURhmorv",
  "key19": "551tFeKaKXo8oVffjM4HBj1hU7oyLhqrtzmfXRzuqMwuxTqFyGwsKLsDoSZWVh1SUaMtzw5HsJApXzzdaoC7sZiE",
  "key20": "5XVcwyLmCnjtGaAXJ8BZVFJTjxqiaHobdqa7Fjw2eGvjgRjDSSL22XqwRMcFSeguec83MV9q4FBoP1BCyeQQbM35",
  "key21": "2UoBkSqQd2JS4KVWQqLMRm1s3VqXSVDoG2ZBCo3q7Qrggonj6kzVgNqhMBVHRzjeUhkeDkkZPtDszNjHVmCUG4sd",
  "key22": "3oypxnxBNqMTfuG2wY7aWtsxQnw6fiHAdA1Bkew4SjTdWdvCgHxjdi1iyj5VqstrwaddMgwSqoxYR1VmCCfs3vMo",
  "key23": "5mhdyAU3n6uNxE1YHi3vpD4hAskHGgcRDwPiqY5uVr1cw5dNx5mGt4qEFgM48Lmj1SK1XhYvp9fzKCjMGvUonR8S",
  "key24": "5omXGBS3SbpoPmbDXkf4C4bHY443q9YASb1SR161Zx7wc1vvU3BEVbUwSvuuvi1FfMLmmP2WcKij5ZvxDML5QC5b",
  "key25": "2DQp9zLxgyFRx54TdhnLkoRceGV8caeResXMn9twvV63GicwFZDuqgTzARemN7PUA8vVFTUztsLAJKsq6u56PAM2",
  "key26": "4KyB1AmoRDALmNPzymdHB3rXqudSxKPhxx6MLYgQTd4i1UDZ5ZNvacxw8FKbaYLGNuRvs2WmGnkHRniFPFy6FNQw",
  "key27": "f6b9rRpxksTkWCzSzv3Z3eLXGVP8x4SJMNyaLhsK3KSemYebMQyrWoRVofCNMHQGSSBXpD2hndjzAg8DJjRfRx8",
  "key28": "5L1SPkPa95wa6nxWvcbivNPpFJnNByrf78WXaMa7HCDBfmhXYsSmJJhxASStyv6Lj4oef2voEm4gkG1L2G9RGWMq",
  "key29": "51NTJjX9nNyHFP2J9u9NGpnJbQrgA4zyWrbgm78Zoa4g81rAzobGw6Nqtq37McSGaZr1ELWQVCymZWzxEkaTq9FK",
  "key30": "4yhG4WXb8PCreoU9ecfD5aMbKioeYbk9eVNp6L6BEK2rxCqdXvdYEA1jfJVg278CFtfE6Z47crAJj8odrZmuZHox",
  "key31": "5ivUMcvxRcqLEW6DUtCamhYhpaFGViyU9nx3pWr3LtyNnt95FJjzPpmKb2mKbWagsjwhVyE6aJEHbzdGzaVrdoDc",
  "key32": "3zufiRkeVsr7pcPyA2wCjjRqjBto9WxsMoBdhtMbHjgupCSa2dWT8vmx76YEdTBD6uVMEf8w6WSrsZ6AMfARuHK7",
  "key33": "tjXrLAiLxLY3t6wmEUxL36LwzA2ms49Wv6ArV8MaWEZ5H6K1Jf5YtiVfQfHw6C4byVZvdEL8HJSXp3LpJwyozpf",
  "key34": "4BU7ifyuqumyLmEPSmHhcHE3KEvxxujsWWgRovHcA8jcUrKkgaqgU8gCLRUtN3GdrRcfxr3QFoFD9w89ci6KoYxY",
  "key35": "SrxRX7mRp4pELkpMN5DDDv1aopBF48VAQ7WFPNu5vLSmyQzDaXUZth2HeXP5yWJYtNsWN2JJpczYdrFxpP8YZyn",
  "key36": "2mZpXC4YLqfATtMBBHBiidbmRAQXw68PyxYeen7ty6hPAoJDekidk8oxfdER1wm5XpWhCdBqiRHWXv9uy7URukFB",
  "key37": "SQSBWUHcvw3dE2vtoSue7hU7XbtZfkEKkzXmhYYDwM5dKw4SZVuZBxiqEEF8wwtMME82cPtdci2aJZd2R1gv1oj",
  "key38": "2RMdKwLiy3xXK5MH2UKGC45sgUysv9M87XnbTeAtJ33tfjYUrFGWFYuTTKCQaHU5QG4LcoXTnYJMGa72XmsQhtFi",
  "key39": "pTFLsCuTwq9jjDsTyuyY4pH29mcrdbFB3PcxthUTfseyPqPBTDn7W1a3LkNFEvsamkkRVJdu2W5gBL9C8o9ruSt",
  "key40": "2EEmAN6MFYsx874uMfuNdQuQJ8g8ZCaz5fanY9sqh9sFQJDeZgC5XzZ9mP3cvQQmkDUvNDEf4mF5PD8Eviz4mmie",
  "key41": "2arXMjvtuTmZNBRGi1d2QthUKasUL6VCFkn4Gt2ShDaKRYtyvJ1Vc8QaHqwrqXwgqNZV42s2QK8nXcySbC8BKhST",
  "key42": "ojnUoaptXJPXSKT8RYCUSK2goJM6VXU9b7AV1NqHKvMsVJqw8C1VTkTquvU4eKrPyTHpvEnspCsEqaagGg9tSS1",
  "key43": "4pndYneJf5KwsDD1aRs6eYAA157oxN2kGyvkcQq3CmtBgeJRuFdFi1odKgN9f35pdgjKTmuthi6Gcs8UzQdLaj1P",
  "key44": "4wKQy3hLivGWKKn1JCo1xmWh7Y6wrWP2WhR8YwDDhK5NBthzN37qKDi7yY54JZyHYHMzyHYP7GwHQpnnmbrnUfZ",
  "key45": "4L9pDaDx2fT2LzcCX6kZVQouJZSQkjAcwVP7F41cjncxwsL6t2DZHwtkWS6rLd3qTQwKQ2pXxCrWYomUGQRKQfjG",
  "key46": "5rughno73muhT9apFFrXkj9WLWgewKuYjTac8FC14apPZdrDpd5ZCKfbua2YDwdPNr6ii7k9aBAb9VRzgebdHDNZ",
  "key47": "3LGjBkRn7YrXbfqL16uZ2U7BMwqLJNAisha2EMQ49DaWfzgPgR5hi1Ba176mn2ohiwo4khAiPKHhHLRrQLnnb9Xs",
  "key48": "52tN9pBdd1eSv4hJy27gpqL6VztNzYMLDk9UHSTiXM5GVHAXJNYaDH1p7cg23vEDS1V9Z8gCiphsgtLY8pToqimq"
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
