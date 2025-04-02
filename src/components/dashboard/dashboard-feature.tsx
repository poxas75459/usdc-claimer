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
    "HS21E7jDhx4Q8XWkF97wefs8sNuk6M8XKiqJyQoqvNtgQxXSJxwe6HcyTSf7ffAzhsD14jCJ4z2N3C4sB5a1PfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJiNEFxHKbogU4cEqbvusgTk26Gk975SzUr2gdpAZcKPmaTfjirK93fpttUjFFPLz8S9jJ7oSAAcM8r9R4jkiwS",
  "key1": "2rgev85mEsZv7bFYKAbBF97oyRX8sHQF439fbciwm3R7PZXn3VEMXi1GqHJF5muynD2mVnMjwdqjcniaQV4YhnSS",
  "key2": "2DqrPEZCSLkwViGWWWCei9brsA3ShPNX4v2Kf5s9CzX8QujeN3TKxqULH5XdMfne7iG9iVJX4KXT95aAXrzF2Ut3",
  "key3": "3SRb5tvr414syeuDsGTYPEAyPdVUF8ubmZtuji1SiDVw468EdUkuyseyKRUdLBSR27aVohf6R74LYue2NnLgvjLB",
  "key4": "4PQsDWaW6Jamr5QvPpyzmUF6buzxau88CRced3SXT8afWnfTv3KMsYDRx1ViNFejrGUobA7ZbSV5rELKuYQnDRcu",
  "key5": "65i9wXtZi7SbMCtFiFL9ZjUrB8ydKpbmigELMXLPKN5JdGT94J6KjWAy9eTzww6MCD6737f7ucjLK55mLUpZy5MZ",
  "key6": "vfVjiAFPg8XSUmc73vFUr2yVWaHj3VkhKbBuDNXc9B795dfoTNhbmMUvventTDaUvgwgCfX3xokryAZQRygEGq4",
  "key7": "3F6dXBt2cktCAUKm2BaiiUAWneTT1QHszN4pVioQGM4zpHDn8Lznr6TwQrXfXKXWDUhLp1nxsx7PV2t5LR8WvDpV",
  "key8": "5afXcy3e5dvd2xkDDJuip2hef9H7yDCbkXMo9ic8aFy9FqUGDz2z64gWT8csoW71gwehF8dtZkJvrWfayg9cbwS3",
  "key9": "5f23qce9MdM8jwmYDSoakDZ7kuFCUnwGNVHvPFWaLHGH5UFyu2tE8KrxyqKFbPLXMe2hz8kbtDgfXPNNawnxUTLJ",
  "key10": "2MWrbCTHVb4CofzV859ZcMMazU8Zg6xhcwUoBw3fqhREaQMDX2jVe2KLXQA31SXNs41LNN9btqba1jTSU984EtVN",
  "key11": "4NjyVPzs3hX82sMMN6nXDucmG2GxfQakVG2rMJdwuGAA4sWtcyzHbwdyS7rsY2Y8FerdTPGUQKFcToNiCXHsxED9",
  "key12": "4ECa7Ld2LXCwg1iPVAmEENVLBMxBYN7iDjzqpMaAhK5dEeAaeY4q2SukR9CAHdDzANoBLff8bbaDBA7BWNuWMo9o",
  "key13": "2nD1DcGiKXEACpVGLCHiVxJ3FGrg2XmYmVUnfmdcgtA1PGqoo2s3BXxYtAFFJGs7MZGyr3WJpj6e8HDMhhxgMe8Q",
  "key14": "62BxBhwNGmUbt1Fs8Zxeuf8Lp1PB1c3qNGN3nyTbsWQkTCUZszrixDdvKCXHUYk4w9h1G1p3CKa3aA3tDB7doXif",
  "key15": "3Bt3fASrd7jo11ad6qtKFHF45uQsustW6tHbuY3LAQwCimzSFgb2kGQZPgt1w9oHJXd9ajv5bteSuCq5ou7NHGr5",
  "key16": "4u54kZcBbbn4TvprGHz3fqTjzQ6mCqB4TTDEZKEZLoKQWDW3bNsMHTZVmWSieS1VfJmiXhkYqM3NRzpTHsG3jh9J",
  "key17": "23oXexoYakQ6Renru9UWvh45ivyo2zngH65Kg3ouJUFaySYfWeT2V3SwJCC4RBWr99KN8SU73dzKx1BybFuAgYXZ",
  "key18": "3Kf5XtCPZMQfiKwa4g9bttjqyjW2zS7CzQm2UUPndgHsvkEHyZpzEABAvUHJEb2YXe1oU2gJZqnyCXVaevcD7D57",
  "key19": "54TXk2hqqzsuzdU6JbUp53SjHQUZy54uN8EBpNUhe4mHdHhjtHvt1NCHW5aYAfQJxWDP4pKyhzgamX6d1bbCG9Z6",
  "key20": "3hqFe1zsHeK7woEthHn48v7yMgrzsGY7hGjrj6bEfA3N5GxVsm2gEqkvqpNLiG1iWHb7vcvZS6Yt7PWDWDno5411",
  "key21": "2WjauJJX6vNwUfe5Bmdgkoc8XyiPmQTEEMFDSZzSiHCWH2YsCnHUjZVz9M9Zutne4tiSjparBdxHBpcuex5UtFUG",
  "key22": "2GdCnkxkXoxmBNxDBkRtK4dPKVA1pXkWZz3RL2DnVWHFGBxLUuPFfgKxM4KuduawGkbPG9V6SAR42ZFFwewWsMZ4",
  "key23": "47cypbvBFxeWp2obT9yc9Nsz8PvmJs7JvJQf1yhpTB859L9jZafGm65EG6G4dYfma7oA6QHUTDkXn4na22ECWZLA",
  "key24": "2uspvECcmVnjgQmZdDurTFMqWZp76W9bPTTaLbSBjfFRpEtbTwGH5BZowmxVpur4gFxNCQuVSfbMf7cpAKUYWuSV",
  "key25": "2gjj6vTW8m9AiZyVZhvu2KpmVh1PGj8XgQ7BV9SmEEmga43oCEs7eLd6rtzAPUxZkUW7Gim5YJwNC6CuyQFdaKQ",
  "key26": "3YYXzPtphjMRk9A7sdtiQGgiZ7WNPagQseJBsW6dMV7eVhcx1vzTumstwCgRgXeva5XUtWRuQXnB1VmYdtK6iHHU",
  "key27": "4Y1ZBgyeTv1wCDPcXRc15iBp1C2LiNDtkfaYzvuzmWF2emdmNewTbJhpHZ78dM7u9cd6W68WN95VFjQTtb4fAZ2R",
  "key28": "5dtkh5ru5XhpiDoxW33GcK51jz3BhrQ33FmPFRq4kp4yTZ1ppvVmhSm2HLcuadpAG4LZy9LefhD6u8LxCyHZdgGE",
  "key29": "5GbbDZcnoqGTMoCQh9DrGhmQk7RhP4iMpKcKEDtuDRo643khWH5bwesTiGbs4UQh6wsQALK4m4AXPc7QYqGndeYx",
  "key30": "34iUFeTdfWdTx8G485vr852iwFGDDKYwSeo8YhHCHwX9WiWs4Dk3TpZuXAqjJWv4WM3WkvcebGg91MDJ2z1CazEf",
  "key31": "4mK4SV7Wqq3hP7hk9H8ULdsSVgREGj3dxfU4tPgqN8Rim89vjj1cuXPYA9L3JCamc5v3vt4Rb6LnCnmXuiqJKBnZ",
  "key32": "2wezZUbEW4dPQGc6fn6CgJpeC8eGCGhCq9Mm55dNC8PzMojhSz6oUT5JrmRWLXxX7kZTWo1yRSkXWAS4wEEAgrEk",
  "key33": "3fNZBtC812ZVK7wDon6Zdt6w3bFDBHpa6QHx9raudNwgUNB3uQpDtptRhGLvmApQdfJiHsPjYTxLMYwz3Jb35WYK",
  "key34": "4zDrfA8jr81cu1yr9EYNigzvQhpAo3DnudSYBGZwHWviQ8r1i7yG9q8z3djSkJxfVtqudxeo6K54kjwfk6bYmcCx",
  "key35": "3D6uRy5GGzwycXt6j81NCREipxUcCEhr1on6H3LmtTYMwwSxdNjHieMJ7zoDgKjkYPXv8QLvpZ8M34EtBjoC15KW",
  "key36": "o9ZQ3BYu1NirxjF7G8hqyVFjMmSSGGPFcm7MWb2Dnu4JF8ikjbyuJVjfWisHZuvavxPCi7Fmu4JN7DMssBSrKxk",
  "key37": "dNKq48tzS9sAPm5xyoWAJCvta22SZrp7sZphL5FAhzSsWU4XAewMSBWoEUBSXAzAh6d86j9iCeC56ugHLfxVatx",
  "key38": "2ouNbwSqqBHmdnK4zmTPYN4mVPhQRc8KhW5MstkV8MAwh1hyweDweHxhdjmKH7iNo1dQS6sEkNWdX6YMPG5jQiZB",
  "key39": "3SBYfeab7rY41JZfbmVJaGhpiVDG1spqwopLuBJSr3nUTaoG6MDKUNiU6q8VbuDZy7VRksTn7BdQDSn987rV58TK",
  "key40": "55xUfkohJBaAyKQBmXEwA69LKpRcRYoQRNesasPJ9BP3bgD9fKJHbHfy5BiM1PGm7osGEjcCYqYw26tZKXrBkCB7"
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
