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
    "BdLR2Tvxr2nLfShfui32gmywAdppNh3SvpZYvAKZjT6ZbFUQC7iAUcxfNhrTnKvek2js8QnyG26Ff7DFuFzZA67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEJZxticcmiG8Uu2hBy9RZJvWhMpM39UKCJVqsysikLtb8XYYYqYzD7tNA3mEQzaDj5kRnkiUJwBjJFvbLFHwYC",
  "key1": "3fxTS2BbxiZsj4jB7M2Ecqay3Kwa3W2eDgykAF3vp9mgj9uuc237TjrTKPtc73vMPw9qXAjkAuv5tW9GJsXCtyqB",
  "key2": "3w6LEfLEVvSKm5ARCDUhr9HD1gNBAtfZAhBz74UZKKmSruRnz3XLYQXRf6CUiSLNdUp35hQQHcST7Y9eTvUMrXEr",
  "key3": "5bV7rurm2vj7Tpg4dpkeT9VdCYPq72RrS1qgjZ1iPr563ynz1tziNgQXvaYWGH9qHcxAWGDaoY6TWG12kCJw2Qia",
  "key4": "EFermm6KTjHqjWs814UcBJMsBEpEuQK8TaiRZiikszWyEbbmjBEWBNgP2whzCumXWeijTTcMNpra8nRyZcweaWF",
  "key5": "3HN3Lj8LGz4MPptsAQabrVyV88ZwzZCJH1wBGwA7yNwxArV69QizDhSgGi8uMzoyFfjQiu3Btrj4dhsEuuHk8oVu",
  "key6": "2YNUeBPLutwYqjM49cCVDhux5ixYg5K98durf8z4mpYzPPprpd74MeNsTBHNsakRNkwAQ67XggUbaRqL1HzmPQUu",
  "key7": "5uk5QNGq3C3dHJY3yGzbB3hrNBLr6D2xtqWahbFBLcNP8XKCcqPA72acmL84Re2sXyn8q4dTWj9YWR7aSgiXijjT",
  "key8": "4ENniNLXadZ7SD9SBqni7Q8YwsiEiiZcAU3abBVqZLvuUqFvpDMuwGs7bjpL1GU79xmwzoyYH8dtHDeuARM7qNgA",
  "key9": "4xRuJkT7LXcynzuZNejj8bcRwhSoPJQoB6V55J9WMYdypQowcDDhXLPBYqrYmiyQQt8wbxqF5rdANSzNTx6cPLEQ",
  "key10": "kbQH4bMmkeSjSMznr7gnuJzoFmEehCLeHM7LethYeagkDUP4LWiq53r8GSf3RfPxKWf8QAT5JuZxizkXxR1WpJV",
  "key11": "4iuDr55Ui5tvbGy8aRDmyMYndWnhhqH2jYhYLeBsB4EuEKNyVjjCCv5JP9tiBdn6rCXfPc8ab1hoTJunjAs8hLtA",
  "key12": "4CZaMAs9nBx1k4oU5w3zhNQcCjNgWu935YJBPVsZ71dT28Nka1XZHZHhsu3EK1n1isrjsNzkM9z8V9FkaNWn2g4Y",
  "key13": "3VYE34soQZxGX2kQAHWQizNsEJydZVtbBB5LiCcUoHTrVmerCTqGhNAMp4mZnpDd6Yrt91pDWC3yo8sUvZp9wVod",
  "key14": "3E8jjXAkRGsnuRhMTSYsWuu78zWwRdoPZnGEAmqGLVDRie1ZcWkXoYA6s4s6n9rNpDNqxCsAZTGLbwUqxZxNBYHk",
  "key15": "4v22YZPD9sjZ6FrZGUTjdMGmNSaU81HPPtojhwvHSZu5EYnuuxTht41x9gKUA5nVpjXBJF2nsRUcVyfEQfxVD5UB",
  "key16": "5qtbcEmijV4LQTyMQMBCx1aUsjG9M4r2kLDYDEq57rqYvyhbSEoB8JzJYZnfGDVAVXn7EAqVStRqc3dhR2ptYr68",
  "key17": "22AtdZqKwQpzMC26CCmTLBUQTHjthDJFtjjauVKPzmPiD6Q7jcACrNfqkrrTWk52Bn4QrKhREXv9xGRem5UpqwHM",
  "key18": "49ZJhFd5NruGfFDaPiVu9MWXSKnvX3dbxzQvsX9Umo52zQyzv4r5kgUoujE2A33BqUUEqZ8ZptR1gUbrxwPZMa5p",
  "key19": "5XZ3aPHHy8Hc6UZxowDpYFzrYWLBGCbH2adVFkpqqXBiVqxn1pDuHhZD3kPtXJRnLTbdKUMF1YHtaD2WtbCTUnm2",
  "key20": "4RhbWeVr5yEjgKfcK4EGfZxTek7HZyG5bE2cMUTgKFd28RWqWDX4Mw1bfouBbKHekP2W5TMv2GXCSno7Haixe2EM",
  "key21": "4WdK1r8h9pm8GyD7mmm767K6Jjrpwwz7Fx6KFt2hVuZQFHyFhjkkRB5DmXg6kv3BCVCmH1u9yH1R7MV6RoFnfsJe",
  "key22": "4TohRjQF9CmMCdUHxFLZ2Asu8oPFXsKmtoVaPhP6z5Tyehdig3CpjVEP3bLLuLuRvCdT2hAHNNBr9C5UKXoHnMap",
  "key23": "5xSCUqmfS7VmPFiVnJgJCZvJYd5UKQFEydeShPoFei4ctcMo9Gb3hEpaPRCE6MD2ZAps1neWegMQk1GXZpybcRdP",
  "key24": "4w94gAQxpdKa52frE8rp4WTWqttuwgSwbQy912HeTwKDfUwrLde4mHnvaG5cMn5PcNxPFqAh26KGv62JTK45EdFH"
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
