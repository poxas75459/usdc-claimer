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
    "4B9qwp8Wk5gMNhBY8Jyqr2K4DodyoNv8HEBN27twVtf6Ret7xwvokDrd7rAAh9V8fV2Unm2z1iAqiTLwzx718VY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUF8mbRcb8PC2xs5uhXWnvdJTi5zmhnGVa91WxBubJowFYu3GMYb29FZyNxLf72tDBkQyaUeshVGGLRvYmDjBdc",
  "key1": "4y5QTEQtr2tAVHQ8rwDZVwpxvgyCoti3CqXyK2TDZcjRRntpzKU7fXxxqSAgagxB5MwDw68xrQKM49f44pVSh28F",
  "key2": "3wTHBFDgu8rtK21YVWtVJq4UmSwXJMYPJZDqZL5bTDcjFZ7yHm1vngt8EB1tJjqMmBzf2rpW71p8xPa5MGHFAkSX",
  "key3": "3UDJEUZtargZe12hDsaksC19mpwiGnbZ3bt3URddPSD7T7u8k9oacuLoQc5iUQrf8nUWXCc1GGh9VAaQgtmju8Wg",
  "key4": "3UNWLvHJjfMQTHTVjHUTjv9ecyFBNxJUcwpJQnUaeSqtk1zBHfn2csPhpYsykvorJX7Jds7KrehTDDP3gvQEXqyQ",
  "key5": "2pDSg8KbWEVi38ygt91J9n45gowxxgsP8FH2CnrqnKRoFHuZCtJBw9bhuLs2qyYFQhsNY8G1FPBnMu2NpTwegGVc",
  "key6": "28N5dGUJ5GBuskgfAsykzrv66xZ68AZpXXMkp45BUUov78CDqcipGE6mrpq3MGag2fbsy2Cw21A2vmnvEv3HBBef",
  "key7": "2RB1exZg2E6Y6Gd2A1Eig89FRG36kP38UM2XzwqeDgaRSdyCkpsQaNXxqe2m7vm17kRzXkUdv8drjk4ZpN2mQHvi",
  "key8": "29ZxeUvvYRGHb3i4rt8JyxPTRmYTV8xTBqaQnQuzdgWf4g3DnrMsFu5tdhMhLLMzpYmaY2LVAc4o5TB1V5rmZ2UG",
  "key9": "4kEQnwinwp35rMod7QrPDPyGojJFyrGEker7fKmfmsRz2FDXKiiAtDHaWtogJvN7bapx3xLimTf64jQKb3jrhrM4",
  "key10": "5AN5ACwchcWuABxJEPAnygH9QZByFbW8AzktPwfeL5RiMN4KsJcYBdHL5V6EXoUQvHrf989fHz53E2sCQJbd2gWy",
  "key11": "3jrai5FLoBNrMsdTmvBCjEPgiyevertuxU4q8fYkCBp3S6s77DcwKxoMBncQLyRhsBAKpxPo7od5Q7FuJALNwW26",
  "key12": "4eD2Q1SkcVvxZL3RKWN6A77Mr9THsrTBGCDfDMHHghDmFoXxEYjnbhE8HLpux7CfBrcqUSMiLQ3J8gp5bXV9UoyZ",
  "key13": "2EoQTgm43gnyvR7yi3gsKcDdUwkgAnoGdw7DJjcqAvCYDuA4SAPPmbzafEworfjxNaoTKfszebkopotbQrULGkEU",
  "key14": "3coaMPKsXdP5GnSDXLaTMtBsMHUiJ4qBKcA3MddSvywRuxpXEiHHJ8YJNhzmWBQweWYCSMcaibpFeWjKUQ4heF1F",
  "key15": "5XAkTord4tGXy5UZBEQVryGTAJQjtc6ivDgjhFFpS11wWGKbcYN4Quoe29s5jPDVprgC4wN19rMWpLGfeBakMpbr",
  "key16": "42HTjJ3S5Vu7suffQZXURjBHcYtwYRqhkE1Q8nWx7jczk1QKbhAffWQES2gu6pr5YbXp52Cn6iJ3hfQR9jfwoYjN",
  "key17": "5vjwQytsbK4xCreD2KK4oxgxR5hjzusWxXgUUcdZsriUsDyJrrEde2gYyiTawqMXCqviwxacuSfBVxsUCpHQyoHk",
  "key18": "2XhRcedYjywXYYRFaKP6KJzPk2M5L5PEuizXYf8gowZuXorfp77P6xjgj1SDTNn1W42cvzpfvgDtuWWFbQx53uMk",
  "key19": "5ee1gizicovzhfyNFq7LE3TAYeGit55vdrzskz9LAFAfrZSdfS4wsht6hy9cPYouonY68izsSzSSsUQ2pZTfaYNd",
  "key20": "4rtXPBcxLd3QSjqXYnjEs3eCtz1GVdWn2kuoo1F8Ri3LTT14VKiigF64gi4kCCrb1GV5z749dry4f3HoLEwK8ZJE",
  "key21": "226PwChqCPjroqa8yPBNtFxYP3aAbeqt8KznMufeJKpgqymsTktXQcvQZvnp84hfqMApesci9bqTh1r6X2LTeefu",
  "key22": "5usn2zgUCAT9CDkgU1RwGyD5N7LvrUYw3DrNwyV8BcAek7ZNCt1J3xzHEDDcDB86qoyedNp78k37S487uj9mtgRW",
  "key23": "5b4iqdFmvcn5z88R7QM6maSdvwTbcjPXKoiZP3qG6FUoGqwZwm58E5MqZQNxcazauF4yXzWDSLvLtErzvq3BMBL1",
  "key24": "3qTGHNrTLqvcz8deYocfSiFAFBGUZXLVSSwpaQSYxekLApihda1K55M1W9hfoc8rShsrmZ1pDT5gCafhAfdvYKya",
  "key25": "2oLPC3ByJ2tzFvhaiinCQiS86v3xcixgvg5MmiWsKPaEQ6rkbYySasEc6uGV4YwUeY29gaoErpyK2iQ8GHFaKmw3",
  "key26": "43H7AzYQLmdhQqE5gURUCrxAdJCRNLbHwNeWpftnC6s1QwZaLy8BcvNbRpqDbeHJ3vKp4dBBepe2veXaEvS4Tk1p",
  "key27": "3u8uR26A1JkRwaBxJPdHthdbVAokJsr2nyV2K9mrFTy65qappRyYuETmEeGPbqN1AAf6z2T4VCXepH4ZSizU5Rhp",
  "key28": "5jUiskWPTskw1gBzYhPxHPYJtmjYUmVk25kfKD29Sa7oiEZcGR8CgaEa9eQEN13ZRQ91U7m4izTRjGhwn6aU1Tar",
  "key29": "5zbmsjwCZCRjoMNFiUSCMiYtd1r7TA6RTt9kSbBH24dss5XEEGeL9Yaj9FbvDWb5UnuLCtvNxLoTsvD1qLjEGuqA",
  "key30": "3spXeJYLwLA37S8HYYpdwmx7uD9YXx26WfnEUfU47ACt1dq5VpcRN3fmcY1YrtjaM2PpkCxN6XcwPdEQmRzUL5Fb",
  "key31": "4aZztogABYd39bHkVdtwy2BPpGDS5av1L86UDsSVHC7mkd8gQ7H448c5ukzpArGyVrVfqwmiEpB4C1NwJt1cNie4",
  "key32": "2dKqr9fwX8aHNJXXKhjzAPuiyoJw5kdHBx9qDriApREmhozgYpz1yVo5kci6LaeXKpuxwwmgV7yG6VDBvjutPTDP",
  "key33": "2N7AswEd6TCPp6nqqzQ32ywVTVjuxpwGsWwdPk1wcaux9vUiHUJTsjMAHfJtdKMZwDWGhf9VkJFcpk7Rhj8sWNiM",
  "key34": "5bnfBGWENKvJfsjzDqfeGdZu35EpN8KjUy4CkfRq7ro3rwAwqnTBJPw5eJTYySZvnM9FDvGTuv4SAJ5YPj67tEwv"
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
