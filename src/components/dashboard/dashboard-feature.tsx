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
    "58WLfPAAVB9DB7hqzwLEU5o2fUBpanjv6wcApmWKy4pez5GR9z67KzBb5sQbxe6dvNQdrvv2nh7BY6xvo43Nrzaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVRvkNhNYjCBeoyu5Xz1PS2Cp6Qz4xiAjdRrDznbdhDmmKWkSpqN6iTkE9dezKHtGSwuqXStas9u7ApxBkenAwQ",
  "key1": "b8xP1mhJYpyKbFZmKerMePviaziTFRm5xrTNG7a3nmz3Sp6HLUhq9jAKcfJDxTZ5Q7YubwhqYrFpoVVjsEs4Cxb",
  "key2": "3sRg9TNYzTDqTUxEUAntwjoCCU5dtSkBJFZzXmXf81oM5EJ4UPaffvL76ukjYAFyL2TJ8D1dsquahhkT8UiZDMRu",
  "key3": "2habsh4zu35b3H57bNcJ66naqc6skdoG678QD5J1nt99z9ETBqJcrPKwZkSGdEkNVxVaoS3EKYar1gid4JXku7mr",
  "key4": "2w1ZE41rKAYW6e9kDzfyC4EcYsjLcbHDcPCKG5Aafg9WFV8ipNnSsARf3cisYcBwBiX4Rgd31pJ9tzCijgZTVJxj",
  "key5": "4UTF8h1c8SkkLWyQ1X3aR6NmgjLFvVX3qcxXrWByNpzRw3tUxasJfevLGh9bYDYimHLh1d3JMTNV98Dutm6KQ9KU",
  "key6": "47n1nsPDz3VVxYrydBPrEne7StVm1SkZm44a9T9Ee3St669C1Povn4qV2W343PziKS3Ae98dBaVHAmL4xsfRENdm",
  "key7": "3FC8s6D4LkEYsQimUjN8QgUixcVsxkiVbaSU91XqcVpZNhgCCcbRkouZyo8nHRsaDQNM5rwqdYAurnRAUFYE1tzQ",
  "key8": "53PdfRwYRgPbHF8T93NJhejRSymowoiUm9yosnF37dotMd5G8t4jiESpyVfmmG5dEVTmGhjv1N7jxnmpJdxc15UW",
  "key9": "45wzd9g5gMyEse2RHfQqhif5bvtBpK96Co3f8JhyS5EBkdgkyRHMuFtZMj87tHpsPnVCrbMLfAgMcgPtnMxrmr72",
  "key10": "3oQBs3nVH96gkx36LRtbxM5pTy46XS6evbnpyQBcpjzFU6o9bJGdgivmukTzU2nQ3mg7befHUgFNs7KmhKu8xZmS",
  "key11": "EK6JbzpDosSpVGPKXoJ69Y7GMaevZFx1xaLF5qNFYAXyVkgdk3kmWdirf9a2ZDJ5XqYNPL2d6SmZM2hBuDEggZS",
  "key12": "u5HZZ7NmtEphAxSTRZ3aZzRwztKncqAhbNpQjiyjQ1MPCk6yoqj4e7Kr6oykLv7VbeCFpjwPZXFkpj6AXznZ81H",
  "key13": "drBetHa9qaJLSW26jofmWwspR6dzxjPsgfLzjPCQaXKkpiuK7Re2dHrXgzfecnbcSnLmS4WNGyRoGFXHD2RWhRA",
  "key14": "4eRwEbtAMFfyYnKF3n7DvtNrHEbQLRVdxC4RhkpsP3xqafuSxikYwGfKwxz43tHxYnLfDcF8LmFfXwWAFv4zcuje",
  "key15": "2RBy4m1NJgyPKzetovVcr7ESQnE1iuVuH9i2RYAVh695ReVxo4ucBQuhSMqpmRcUMzYmV7Wy3M72mfriVjRDyPzo",
  "key16": "36fsxhSZthNVMw6CTEEh6ag9Ph7LvyPYXLe6MFcDmRqXiCNZwK8vg3MgUnoNGe86rF4Lj5d4yWNW2sEJf754zPzE",
  "key17": "5ngRs8bgwEXYQfW4sVWthK1TkFRkrSBofL5K8usPC9YcjpB61E5JHikJoAbQDWUPxbWMCubWmLV2EGiNGEU29VFg",
  "key18": "5bEUmA6u5MVDu9QBmWioNzQ6pV4KSNgN9ReQbvfAmgjvFTLHgpTvPQFTBB5YgbjBx8hNfg6hG3mjaewBjtzshc9Y",
  "key19": "5ig6eM7To3Rvswo3gSx4QTYNYi13GhacM7H6K4TrqAwoGegFBtbqjC8SG32dC6pkHD4wkQfc5QZN5xrdSYpKTGoq",
  "key20": "8ZAinR61ATRXWNFcW79PTHdHcarq1bEtM73SJaVkSBKHbuu7c7W4DSTkTRRpsn5YKZEyoBBz1HuLH2bsGR34zXe",
  "key21": "2i7SMTejKSRAEnHSfWM1qJfvA3MBHRryoMAbCUk3RxMFmEjeTTgZJxS86nvfNqpMqPkR5RrFXFtnEdvag6C2B3QW",
  "key22": "3hh6rnMPCPjCWDVdP92UgGHcyXfiTrPuH2PG1v9xN18UxYxQwBGvRt2wxmkn9UoLVCq7o4mkAZTeCASWnyHvzmHE",
  "key23": "21jGMRZsjyFwb9RCsWU5WBBCyZ5ADf8WDZE36HFhM1kYgGzAeEbxkNjwwAkaQZUpXfF3aL4BSV8u1Mk5gra7efgQ",
  "key24": "55yYEApdZooVc9VLruTXio9K8MBXtzAtLRUE2cppx7YNAe97j7DaoRdaiVSBghffPsRQVWimDtet4ABb3F4gdUQe",
  "key25": "5fAsqA5x6qUUhRnDps1DBkWjkBFcU1derCr451Brtoi7Zfre3mKb6m13NPjw62fh461X5UJgTP3xaxj1MxwziQNq",
  "key26": "k2eUX1ijvPujrRtSjs4hppPxBTMjsMPfLkayBoSWcbUndTsKXkfz8AuKoSByukqtpDrRvNtP9acPoaByDH9sbjP",
  "key27": "3VQY41Zcan4q4wMLmyFb5HcRdHxvaEsdoFsbXPbnxiN41Mkw4W2caDeZ6aJsrF3SXs4EnnP5CxDHrsKAMvbo2WtH",
  "key28": "3ULvPhr5gNctbrZjHBT5uTcfwm1toC6UsW5VeCrrnKExoAvE2TuZ56UDduXjdmLffsUBXYXLWvkeNk2cASt27YEp",
  "key29": "4sCmrG67WVDUqZnNfKXjxi8xGgHpmNH69YEkviQnTHpSm4G8BkY8za8XF3BwsS92Z9qTzb6Ae1Eoq9T6iRyY18En"
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
