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
    "5UpcbrvGmzR6XQjkRQPpiexbCqH1vRcAMdPb85BCxsv2MCNRtZgaV3rzepPBGqkJtFpriLT2Dda38YmaxYHbkBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ta1q9sv6N2iPfS81o1Hsz7QxJBrwAktfAJuZ3w3J3QUweMpd8ZHxhy136BeR6MDdKmEY2T6V3WciE95M7H7RL32",
  "key1": "3NEbFxhjhGDhJ6Nvc9DARcWZwktD1DraBjALXcRRgkCPRceg2rW2pzeSpGXaZLcTZxmf6hpGGemgyXyjsA6oP3aF",
  "key2": "4sCfi4yvZvejd16jnZDYGNtKNejbTMcMiF7u67eTW4suXH4HMUuV1yWzM2g2hrpXJzMoKhou1ovThTU7RZtUCYUG",
  "key3": "5ESUzzpfikGq9Yf5erKDFUGRYACtyFhEedAAfig4XptwnUt2VR1q89gY1cXY2meCbnmAdeia3sCtmjQ4QFrLzU7R",
  "key4": "3favdXdxBawu3jji5TVrBfsqf1dn4grUDTv7QyudTuNwDWgrBqXkozywrSHArNDBVx9KeyAZ5hMHXWyvjx1p94Qh",
  "key5": "3veU568zCCUjaj3somNoDCQBYu7MABNMQqHgiH1DguPeSEFmate5WuUi7nPiDfDLrqfFxHLdjirQt9CggUu5ogRa",
  "key6": "BugSJafaDMZwDsqotrXKMTZPMvSVFdJ6MtgpUSSwXFvpdRVcAZsfWUM9vK4w5dJCs68CYx3c15WGVfGjmEDLpzg",
  "key7": "CpgubBA4seLYDtzuB3Xg5PtKvsFS5LY5rnFnXKfYmbgvwHRz9zkz99AnEzUJLetJtJV9VqJcMsNpkBSJr5SUj9V",
  "key8": "xojFNpK9KR1yHZkztJFWRxT3BKNJqXV9GEigzarHL4fyZh7DqGQ9ceozp26Ejh7N3TE3Sh3CXXhYKtX1DRDKwzg",
  "key9": "58ifLBvqE8KZ9TDN3ZWfBhnwp29n2FaKkdYi3CwTsP2WzG2VuFqsy7gBVVEob6jkmgtbyhD1j9ecrHHvdK1mcky",
  "key10": "3QjixvqgV8JQrWNU8gUazsjxoWCPSMG11xYgjBMaw2cpC3nnQkbqiVcvgETkZaYVbEhJoRKvb3eMNXozmnzVjjmp",
  "key11": "bgQbfwkjCtzLrmG1osvkprZcmiUAW3F9R798NFaCwizbc2Te446UaCFkfWvNsijeggNiATxJ9zcpNjTShz2gkvb",
  "key12": "5RJe7e78vH3N5KYVY8BDcm8fCmY5Ln4joox8d6LZFsFRffUXubkYvMmgtGE1o1ZJFNgEWGRAUbbVzxbqSUfYpX6d",
  "key13": "3kV9jk1fqT7MtcdrHq7Go9G8hdRPP1PUuVuDKzMGRb5G84EmyUNjMPsE5iAYq5w7o2bRVHv2h7Nt9BSqsHW1YZtY",
  "key14": "39TpR9Vqh2UBAxroQRhXcBJeLeMRnGyJzDZu32T9pyaTGdRmE9H6Y1YMDoLydU15yRaYR8C9jd2nEL36d9sGNDYx",
  "key15": "3q6M8UPWnCKWddpotfwoLRdGfX4DEiRSToFZmEL6bGmyFAYwgdNLgafpLFV6Ejnd87jJKvmVNWHk8U5RnZe6RaFz",
  "key16": "4zYYNsVAkibDBgdMd1TjveetLEWou2jtMeguSbWKkypAbPGvRQUX6JjtPQC7hHpA9Y9d86rXBLWxSEqHETUx5tYx",
  "key17": "2HyCZu8kDAe3QBwLUTK9kQ4n2tte4VnwaSCNLuFhdap1NtCqKNk3XMYwWjf7Jde5D9aYMd6sXcmKjB335G1Z13e9",
  "key18": "sSxjrY8mF2sdfYPAdDcwoTU1tPJFgfhEzjATxvBV61tDTgApBjkzgt61PwrhcYFx4Qt1jxMo2U4fJedLk1Q1paK",
  "key19": "5gpUAqsaJuehNcRv5ZqUXznBa1mf1ACjSvcvg1U7gVd1Wsyac2MtRz2GoVjqF3JMEyKsTRj8Sd66ApyXswwFf1G9",
  "key20": "2ETmpBBK3SWRPfEq3GjYwFRz4PBvru4yVY7DkywGGEzppwQSQUPPQvKwGwAmW2eDiK6ryGQAZpsGevzg1Pf1mX92",
  "key21": "2Pfii5G6nU7VgrEm8ivZN2NLt5XAAVSTWHQGrtkpre2cmpVZ6q9tUViKGVX7ycvCfU9A9PupFcswdxFUdc4fNmUQ",
  "key22": "29nrvaaKQm2uspgv8EbSWn8AsVzjHt7fci8yr8LhqYG7GM3FEiRKjuPgU7yYSUWEG9XUv16utXEG3K3unbyG82qa",
  "key23": "41fMrDkgCwHtpz91LzzMrcgkgvPBdTv7TSKgCuA6dhh8PZ3jNuFhhRxYiJsqA19pKe2cBuX4Q2ArRmme4ZEwwdge",
  "key24": "2GovJr24vdaxNgEHcr2CfTHb3reSPDtgLC28C8au8nu24Ho39aAprKZADJiAE8bCk9s21BTYbWhd1amiWhV1Du4Y",
  "key25": "R7xrTBDeF1sfBP2QuuXMgYsMDQmCuVDgLzmfmMs2HfozCFS26qG9sxGhruZJhaDhCpfaRfEt6gieoyKTLmAJGrr",
  "key26": "455QFMbtmxvmZLPsYAjEJ38zM3dSouR8FZmW5BBxDa1hUfBxQWDuHaJxNfYiwWBTWxyj3VmyW7btXFBgu6FH8imv",
  "key27": "7WzwAazj6uNgmU9XXcUcUyFeSXcz5MNkykw7dJJiy3NRiWegAiSPaD5rny8C62P7EHZNbpALDfVHZVCo7ajXU5c",
  "key28": "48fs2M2wHGDTKta7RgUmpyfHQA4TPaWaRV1rgX1w42bm5vSNQYrVSik4pjTmtwhv1Nd123n4WMhACAAyi3dTH4mm",
  "key29": "YgQ8oG5TW8ofTxp4DEc8xA97JMrKUybnhvh5PRyE4gjTYhuwr1ZSAxeEJdUUGAXkn1Sufx5TuFKXJYRdd4NjYi9",
  "key30": "wv5va8WknYhewWTXPxo8aCCHmxj54FNwfMVyxhqsFypZ82di98fU7xgNApr6dtHa56guNjfykRczi2t8T3yuo4P",
  "key31": "3JVcbaJbkcGyfMW9vct2LgfmBbfirvCFg4AQni327e25EPpC2Bebv4ZYn58CWKRovUnYG3S9jdCVtPNT3mtCdbcs",
  "key32": "4teWyQUbGY1ipWvmF3u2bf6XW943sK12io1A46GVGsgnpZdofYpu2WF1uxKUJ9SMB7EPx9X1FmCCC3eEeTtcqsu7",
  "key33": "44AxRmvTeziuDBUWECFWCAvTguQ4UqqqkH1Do9dioSdRY8aB1ptxxeVMiR6qbud4XrdUAfQLdzVSwoDAdMXJU2Yq",
  "key34": "VUgxUncTjZDfzRB7fcL6h9huhcqJXrCkVU2PBgrLu8k1m37XK7kdHDUdF111CfaaFWW2fHac9pcApHaiJQxaqS6",
  "key35": "KLY4hLn81qtqVGMZkorjU21UrJSog3Q5KjjDv6f9kVgX9pgc6GbKFRuHBUmHrmfFBsxzhFi2TMHRmkkhGuh9AbJ",
  "key36": "3i9GvsyMVrkQiNq7hXRM1kupoVPsQfzc8eJSgcRPkUVeiqgJkXoq2jh9fLVanT2sn1uQFLziWB6n6sXnEuR2ap54",
  "key37": "UHcrDEw9rpoTmtfaXs2WWyz3n92Ugec8CzEUv3vVTZnBUzxWoP4iwZaPoUsdhB13sNJ3NGaN9oYFprRFxynVy37",
  "key38": "3gZs3F2S4ThL18MJXPthLVvKCGMrXgY8xVc2cXigBBtbFnyyX1WUpf8PRo6LaL1FQCSdgt4veUFHVcWLz34sfKV2",
  "key39": "2XXzMBEouvw8FQTKVQzMq8YPNAe5wgrd5WZGFr48VJJvypZNVj5acLqc8FdE6XaVe1Mu1z8zKYYWucewzizzKJAe",
  "key40": "qJ4pqttRdmXAwC8bgZn4Nxu73vxN6a7hk9GctaZN6kQCkyhJW5vc9tNR38wjdHuDdrpAFaydgJKg2mSWMdHFBnz",
  "key41": "66j7x6PFegvwr19ZW2rSEVmGpKrhRajd52arRbjh4nrat14XSsBzSh9tuf52WcYeaBKd8D393CCiu4wcKw4v3MSu",
  "key42": "2XnJqKRZeUiVGzFMvvAa1ZoMi9SkvugYHX95y76d4G3rjC8pufEbVqDGxKVuAGzYvgGr9X8Wmf29ctUxihMsVPn1",
  "key43": "3DSeRg11jnEe1ipu2TnWVxJSR3giyhpkjQLXW7w7QXNs5NvxPKAbA5oZqRSUV7XicPQNEFpjUSnLmYtTETf5Wih8",
  "key44": "5qvzNEA4Z9Soxmre7gpN9n1GEiS1T7SxRATyYVJVsY5nNmvF2DDLNPXKW54RkhnXukXvvVFMCKGUmizZcnjjx3K1",
  "key45": "jRabPvKWV2egRUe6RjUDQ6127mYnTSbcdXLYzfhxdgdZrvP7s5EBmpDENMghgHwzQQfe95dQDXAvaKivwXQq8cQ"
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
