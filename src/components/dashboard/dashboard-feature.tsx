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
    "35s3QVTrBVaL8aXdvv9jQaoFaegjzWpvrjiCfNb16umRTrq2vZo8XXxnmCZEj5hh4PB44fFdCdXtsy93wnHVstpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZqoSW66FbLEH1s75WmDpjmYrwFbkjd8gUcu2kqXJNdS1zG4n7ap5EvNn42Ae1TXstaEtHFmvSoKXickfECMKLa",
  "key1": "53nqUdsqFLZ6G2NnrzpqDGZcGDQ2dZfc6fXTfCDk3AR6pwrckJX7qfppSK9KnQD1f55rdN9VJB99iwiRejr1eaQB",
  "key2": "WUUGZH3fD73KY7SdVtqVRudzR46QuLEiYVK1oHTxRMUJrbC1jwNQaZFEAvqYi1H5oXQaz8farRyKfPtzhAuuUU4",
  "key3": "5Ag75D1FPHovZtZsz73aqhC6YbMi9zYPy6T7Q2Gyd96YDUnE2Mejmrzs1zmGF5Aozjp2jg2Be6Qr85k71hvs9JXh",
  "key4": "P57od93mnza2UW8apBa7muciCr5YV13G6bbQfV79twZhA93KTQ37WCYtbTTqBH4qxh7Xd3J77eiUmgJgoeL8zAc",
  "key5": "4U8J8oNFgzGBSqVTcbcV6cZrcgFrABjer32fCkRgKA1Vd2DsbFhUrtNtf6AQ3rt2pacE2etqgBgGQfw5CWA4kayj",
  "key6": "3zStQ5Y5BnPh6viFYr2crKcbURMWKdAh1ez98WTPRVUiisnrKMdwDTAsrGXEeC5KvLShGa6u8ZGCxmdzsePJRuzG",
  "key7": "61MsZWyEQT5NxdMnMycxDtx3pbHa4briCcRcd5AjgUzENdhU8nYksN4h3q5FcwnmfxfiA6XQEhXSMzRK9DdUSaH2",
  "key8": "2s1o9iFwixUL8HTNmytMQULiW7gB9ZuHnxwyghixsJEYbM4YY5gwQGPZnVxXgVSAveQPDVgNJrYxPLmoj3eUNEo7",
  "key9": "7HwSkGgc1DcF6wmHhpDc9W7125MMbFE7RfVhhpmHKYo3J642ASY3dsUkM2mhXvjGDX35ymp5q1mwjpNL6V8w2ir",
  "key10": "YRFVowLyNqE4myw8kN2hcjVruqV6rtH2NvjH1xW2hDqhdAubLwcowpyFY5451R4HtAbjAjsVmfXiTFsrH9HoeH1",
  "key11": "53vTG6qttLuk7GMVJYZT6ekE78jKZpSwqUWWtnjSA6fQTgNGK1PRkBvMyV7NsBwXbEm5oXRpC2U2dfJfMXKJEA74",
  "key12": "4gHXyetqjg7mUMwUDiWM4DGkYqaVgtqNWesuEXCQviCpF4qUjqr4GQeS3onGrNMriYPcPdJJAFj7jF9pLwZU8nqk",
  "key13": "zWmxukcGi9UVPD3ndFhqUn9NT1XSRjRSLkiRz9GWW8WBFkDHV1U71U8TvSnhyWHm5NKMWDWKnPaUPieLoHt5YTt",
  "key14": "47SyUUseNNn7hFPcLrkmtavTLeVZgniq3N2jXy6sjjYBUHYXtVHHZQEJYdU9atYvJR5M7WySxjvGPMWDAL5k7R5b",
  "key15": "4GExwSFvoyHZMww1DH1Dp8yGH7EPA33TWmvyms5aUkggPJdVCFCRBpTCeSeD17BKzGY8pxS79vZNiB9WqPNhhkyi",
  "key16": "2PahjQ8nTeEzVRWtGQThy8FyKhM4CxhQdK8ftPMkFSLFLESLnvbKMxMUPnf6QJFdS7eoPq7DgSgd3o6PB5nEacUC",
  "key17": "vWF8xkaEFqe6UYfj6YWEd1NfRBoTzfvmQ7iXR3SyQiYKWQDQXWxgU9u8HLB5tiMKKvP2Gu5G4N7Hdrimo84RgXa",
  "key18": "2WJVUePExaNWfMVquHjMp2cDqUyR7pr34Ly6WcQhCwGcgmehAfbDqmeyczkRVfBKBpG59AMHguctTnjS8GPH3tFW",
  "key19": "5Z1Sr76752GJRUxgJuizhNhdzgQaSQfFyf6Xgz2TgGRYZp6jqCeesfccXMjurbPhZKcf6AWVanR3TLMMaEFL1Hvz",
  "key20": "2xX7UY92Ug7B1hegKfzi3sZ7qRsvZADBZMu9qf4HtEkdHW7QHerGGjAnM2RBx1LZfJpU7TFQAuaBL615tds9u1qZ",
  "key21": "vmSyeJqF6Kp3VvTJxKD1X9rxjGvVpB4Z3cNVaHeRsc32ji1XqZ5RiXnSj38Zdydse3PqqAbjf5UD2khY4TDUEzZ",
  "key22": "PjKmQgkdPsqsZ5YmxkuHZ1c3j7VFhoJ6pXmXGLCAMDCvdyUTbNzoiij4okgYL6bb1GwtiMuB6L17gjtVEFuSHDR",
  "key23": "4kWETvoRA3vQbjpM2abQMWTWxKMd6FXCdPQzVhNxQmDHSfwJ63Rog6JFicJbjDNhZC1J78EdhEAWK5jFmbC7XRBn",
  "key24": "MXPc7NyCFWvmBWnHkgmEjNFQQ6QxhbNKkNnpiw3zHTxNHA6Lss46Viupve3D17jLTctCGhccXPfKYMWqTmWmNKU",
  "key25": "4nYyDWxfm557UQPfGNM1YPK9JvQeMyG1PKPbmVrBCAQjK9R6LUTLEQy3AdYh8rDx2huff3GLPTvdYBTcSd7p91jp",
  "key26": "4G61i4BQqUNXTWkX4EmGCy4EddbKYKYAX2QBxtN9ch4qFXSDp7uHecyxpdTZeTb8r1rEkAtoTFUB9pjz5VPHmCke",
  "key27": "3CJM4gBt4opCPNFoZeDfzfvQR3i6fVXKYuP1GxTHQ8515UVtT4FG9LNXHPac5csBJoBe74TML3oSyZRZpeox4Jwt",
  "key28": "2BL2zCqm4vH7YWTAr65DGdx675xria9YwFQ2jxDob1fK1n8y9BVZu1avTe71hZAjQ8yMA9yFHPkwDmTj13daqJ5b",
  "key29": "2y2FUZT6r4f8G7Wnt1NbXKWBMfbeGukhj5FNu4H4JSGtYtGZ9qnQBNrdxKyVseDwkuRsu4endF3JJsjCHJNP6mDG",
  "key30": "5vZSNfb8DZ3z3PFNCFzXcmpbkLHCCkwR5eudjfJomTtMtyAbgduW7NZBAHBp488wNvYTPnGN5Zy8jHskTqowSGwk",
  "key31": "2HmXz8tBZnoLHPuStRVpMFGVBgMpaG7wTwSaA22QFoTG12wYTMYGZEFu77ny5MMeMVKR8DFCpDwDhmcYcynqkKEt",
  "key32": "5gUs9ni272v9EkG8aAWeNb3eztpQqPjR8awG2JW5eefVsV3ntXY6mYeaQ69WPqTwEt7j4CYK4xQ6ray8gNKdV5T2",
  "key33": "o2o1MbkostJJWKshf7MYGhVCLGC613GRUjmqaFz4hN947zyLYy6bBbZydYUWEJdnzjeSu69JAWoR9wEh6ZrfxJs",
  "key34": "4RZvg3kXjZsEhHdqn3zakmcGV6roTmb7Ppe7Mud5cMmz3H65NrTvnVYKoWpiF5VP8TdM7ux3NLZPbWy4CAzoiggP",
  "key35": "5tCsh9tfRZCnjBziyk1QEiJ32PLxXUTN7TKHXs2ZXkrV81vEhv2tKXoEuucQUQM74NqBnHrLxoTGJTMsxXwvfoUF",
  "key36": "aMtWiPUDgbDuXNz2jmAqctZPh9PWcnXS2qB6cR4CD4dzeCeTE5q15dPWtrozqbuD5oetJ8eGDcWoxqGEdQ6zosa",
  "key37": "3YKkpuJ5kZWG2Q6XMEVFy9ZVpPQQrwnQrP61oij9qjNYPXdTkKV4MJcqXV18nHRs2JND3R5W6PtHWxdq8TfUkRng",
  "key38": "2FDsSDDyA5RBmACEMgr2ZBgqPfnQyZuqha8t7dKef7A7Rfj9pe7coDFuSqrKoK1St32FMjYVzApepKxY2LWedCk9",
  "key39": "4K5BXz87ZX1e44w8H5K6pQQa7rZDxD3EFXpeZfh4rtFhERBarMqEpSRge7BqGoSFw3D5T6KumVsFCkQvC7RA4t3c",
  "key40": "2UHNqA2k8Lo886uLh3xCpVjAqWiSaPLyAcDQ67S7fNJUPy9RtdAg3ZbVSuXA4Cid8G2Pdcv5Ewby78KM3VTtFzbu",
  "key41": "2v3RAkhS2kJxfK5YfNCZwG3eezQvdDxsSh3Mn6oro6nRShpXwbzrpLqSLYZtb4JtGrhA8iP4UgaRrtLkjsW1s44V",
  "key42": "5tVXEAi2AnfnwqsdQFnfwkohZDYKv7NeWyKEBbgxB1BeoMqdGP4KdC4rShZWUs4NvGvSojeb8L2kZMyAVCrK9U8L",
  "key43": "2QduJcr1wEyuLqUsJQcqxZPjcKeqQZFovhcbJHGD1rdZc32yfSDvXRtYfiehVNypK3iPwUDCmnnwckTLDCHzsvyL",
  "key44": "4PfNTvph5K9oFJ33go26SjUQsyroSiZFRdZbSb5eS2j99S7q28Jh2p7HqV9ctWy83D94Nwu69WLgYqovNbSQhEDG",
  "key45": "5gTZXraZ1hACD5NR3qVMNkrz98zEBQ3cJvywBEj8fhwJxHnQYeJfY6Nu6YZfVfpzADH54ch8TnJBoxmkCPE5RuMf",
  "key46": "4GSwyNJssn1eQYw7ieyAJ4G2EAqKrdCeETtZwLEaxfv9buBze2B2uFw8aZhiK9pT4KFn9Ydhj3XH2v12QPWJwfzV",
  "key47": "5Q28o76jE3MtFhD5G1x23drGq2Q8ZVQCUT2phaLUWT2FoMcHRAch2oQoUySLjvgbEiCcDB9Q1SHBJqacmz8tVvDW"
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
