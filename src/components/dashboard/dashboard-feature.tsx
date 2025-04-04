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
    "2zW3eiFAkJFiKrRykewit9AVGFMcgcgoP7yYuTSNGw1NmWwqVKSSXA4WqEtJm7bHPz39iWJsWUZfNJS2j5pMMEBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8JJLZ75XTi8K4ZAJwEZQ9Kb9dPg8hPhobmVgnD9m3gxKgtt7yZ76dPc2xrXDrbtn2tan6f6PS1gPgN5ryhuMKs",
  "key1": "YR7s4a93g2uic61GP3NNMTHPMAUme8vRbkaCGKbU6ohiCBeFhtwDsyEmS8X1HrPVdt6cgFu8SuSdscPt5YMX57H",
  "key2": "3Ln7qdhJondag6UVpSXGAZXrj62EMWW64G3dnQ6kT4LvvsZn68jQLH6ehVZWFVMjNQxw4cxc2jYG7x5LDq9ipJpt",
  "key3": "4KWWYPBw1zXQbKitbMDWgLLDpHp3QD7oZXyFdYNTcDbXLRhxw3GCi2K5dfAyyPJRqvDC4FwgdxnyZ8u5hFNziro2",
  "key4": "3zffwfncCf5JgTQGiwGZvhD8ecT5DKxc43JUrRdX27fpgExTYbKiehsnjGwggiUdgyC6jrrHDnvprhhSm5ppKZWC",
  "key5": "5bnKm7DaB1Kbso37FrEfq2AwmF2oFi2L8xfaPvB5QEtpuD7zpkGXtZcSbEmWbU5CbAXoAX5VTnoHzc5BWoeJSUeU",
  "key6": "nJJVZvmDM2irixLpyLUWhVxoY8AnWhgy1kFNvpz5eaFoeRTxnKYwfYqeHZZG7oS6ZL8tgBurEgGPpGki5TqyBEq",
  "key7": "27NZWBPMmYudg611yaozAUiE8aoKHoSwW6fWScfhUkd45KV8vZGweJQfz5kywQVyGJ3L9psMoyFer6ia2Vrbm8z4",
  "key8": "PUwouCgiJKPkyKSNzw4y9ZhHhbEN1EHc6pnszA36Cq8LHG66tgCSqygVYnQ2LBPiNZu2vFmtDCGFJeyc2b6agok",
  "key9": "4D8etkQDqfAdJPiCH22qYwictJth7LgpS4BmXQtcqG2EhVJ76Yj5bEG3cV4HnV5XbQRCraGVjT9qKYZVcnzSuofA",
  "key10": "3PbBm1bNwqLEy4Qt9s4kZsppCgXR9oPJiH8TBhBeUgEPsJ1bFeRjBtw5H4LRhkgkDbnRq3ugHaodZdfhh9v2iTDg",
  "key11": "42oYkx1K2NTEUmx4WUfZ3EwjjxJVGjowjtcitW6nuQh4qGedNEcZqPSuns1RfajcueMqnf6rZH5SHJBjrTPBAgRi",
  "key12": "3oLq2X3r4T7dJy19CqZyFum24zYGHwMcyEyLb3cBrSjnWgp6cRQHUmgi39Pj8skt4qjmP411tVBwmeQSer1YsAy8",
  "key13": "4zpdEVYsiELHk4eUrYShdarsGnu2Z73v9GonnDJf5vCKa53dtt3P6CFBC5RpHRBztV3BvWWJsGnQC6Va7WesEpqh",
  "key14": "4W1bVonXPH3dhoC3FdZgjTj44mUhap5b26dugJjATzR25F7HGguDkouHoXRBEMHEox9HibJHt4MPBe3FHwtqM65u",
  "key15": "258Xx6MPcCzqMvvWeGsFZuSb2GSaFSeU4psqpJLQVkwXpEGCuytCkuCVicUZvQgYdvbndocLD1nETZoBeH79jGRL",
  "key16": "4Ln5fMcgpFLCxEhSEvrX8Tup4fmZ2hwqBoKVWt6qtPhMGQrDc2ExZwQv5SPhrHNhoXuUUBx2EjLAPt87vSh26J5r",
  "key17": "29YiLSLmToYomjUgyZXz2hqoRC5snnV4yeSua7a8ACafdN9f62Azu1nxgy5YVsC8KjVhy2y6ynnLMrwtdt5BSPSw",
  "key18": "5zToBbyMWEnimYNdLFrV6TooQp9xGS9sKzKnKNC3Jc76n3fBWR4EFbyEibyGv4TrRuHXGmiNy3bV9SHJk2AbSGrB",
  "key19": "3dTQibqffB55g5xac5gfcJJUPm1gBYHyZFmaRLivqmLaYS77Qzx3UvqxXC1PZFJRbXsEYu8yBjv3vv7q2GHJa58d",
  "key20": "4oH72T8KkabBPwGHdpJRHwWvpy8bdnGL3NpHXXttag3v2tvGqEoPgn2ngziSv9Qygp8G56zYLxZHPu3K9Z2VsvZA",
  "key21": "2DQUtJbHpGF3R3NjdB9W1cMy5Q1BUTmWY91bg9fFUtAZyRCEt4FCXdEJZq6Q2qUfTKmumjbeuy3JbHRBGSXSxfmu",
  "key22": "5v2UMppwwa7VDDEy1DTAhzLMxR49vXhgwrV7GPkFKCHdcc7McxDhouHKNSUJZwJyUz3ZyJ2PVntYEgcbJ2f9BvAz",
  "key23": "5qXc25jwzghyj4UiWtwEQDFNwgFA6jYqYYop9zAk14eK35FiC42UTF1mHoUPXZLKzugsdqH4jJ3RBR12tcmy3MTQ",
  "key24": "3BVv1MRnwcvZbc9d8wJxZ6LMRYs519tfnZZ8Y9kwtr917JzSKrVGa4ccGyFKvbvSsAqrHE8cwWFgFeD4EtAVBMCv",
  "key25": "5CzQyF5ekbfG1ehL2PzwEyUT8WWFfjiQUBSxm5TaaJ91ALLpPPA7LgpyNQdBHiDusYWKnAdyi4pRiCJXBr3QSyZK",
  "key26": "3AKAeJzkCQQhiQzTXY7oL1MpBCCoKXuoUqeq2PS4MAdm62df7MSJ22kEBAu3EiGjgzrr56z2pBDwbUYFd6CVjPXU",
  "key27": "4sqgXafLwYZV9ACUTAeVGhr6iYzEKYt86r9BwZoC82mmQxkic9fjEDBBkE54Rag5g4EbPW4SLrNVa4U5P9hUAdvk",
  "key28": "Trr4sxWy5e1yy6CG5oHUkpfrVja6ZNRupcecZ1KULJ1gvet8o1Kz4wAVrPBbqhxGoyimBfpfEpc8dvCczZm8Atg",
  "key29": "erG17TeEGND6y35HAWjtavj7BTbZDPVs5ZGHuN1CmTeDuTo9dJJW6FBMNpgHoykvkfwhMwEqhiJtcCCmm4E5wYy",
  "key30": "SpP6CDHUFcTd7Wd3TbQfzw3ANhqi1akPdNyrQQmNGsq7DgPaA3zwebGC9yXbcAixd4WKJQLQA8cBjavRJAhQqk3",
  "key31": "izdyAnvGSCXcZHraDnsDepGCejJair85X95N2CQybwLMqmPAMmyrCPuveAeN1uAafhKWeLfbxfWR2rDWx55Vbmi",
  "key32": "5WB2PsFb1MVZ3kjUL7Bn5jixaimLbmrUN5SQpn3YPb16e8az2fjMqiuhZKNuhqGJLEz3LZzs6to5u9Ss6F3pgQcv"
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
