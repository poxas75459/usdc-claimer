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
    "4rE9xwEkfWDiXJrLwKDrsoWw8i115ysMrCTbdS73BQEjUxMbcvncRxpQ2CP9Nu2tQKUTvPsaSp1ffHNYGksD1Rzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFZ9oa1qwbDHzJm6w2LQ41JpirowQxdLiDKu524pEefvSVrp5cRMx59yYhWRXkQ1VYFtMam4LYsTsaDx5BARDKq",
  "key1": "5eKJSiyjnC7FUmwWYCr9794SaLZgPWiX2DpA6u2tQqWCqUM5sobaLZdWR4SeUNdaye9do3FNQYJp2A2FzMCzyqaD",
  "key2": "2Sci6eYswXZPZ6ck75uBeuWUiZthLJD1JDAnVNtWcLakWU2hgUWSFmS1DeAhDcDzwj4zHKw4sUzV9jUta8q89tJV",
  "key3": "3SotLqesePEVBW8q4TdFK5ULGYqCX1nNpW93E3DAdDuY9f4Gm16KCgFVco4ULQ8pcLmksezB2Lu1Xjuf7yp9hnGM",
  "key4": "31REVBhhvvhS4tjuXCqxoEBo2jZPEzuk2bERkedXw7Zng55Nak7B5T6E3EEn3e7zkEiVW4aD86MgY9AkGw8EMFjE",
  "key5": "5DZCFVpMj2G3nBy5Sw9FiX4EWpCKopFUimBt9rpDpBr5e2fpKzNrq9dKDzeF2kemcVDvmL7s79jWtw9s2ybmXTRS",
  "key6": "4dweHqErgoo7zDAwt9ifXvEdTDFevHmtQKnbDni22diU2HT5zemrKpLJnQzR89KKz4hjFeK6eNGEwXkaLvpxGpr",
  "key7": "4da1ipEYJdCC1mXFSqtRBhsCZ25B3vgmK6iLcZZys8t67f7xRuMoF8D4XVQMTUy1hfsXYux3inBxCyjUbbNNpVSF",
  "key8": "29e37F8wfKibva9wC5SUMDTbQVkbDA1zJwJAXV4jBHQ3obafTGbHf2czkwkmXwap6n9zWYKshg1Y9QZtZ3jXMXPe",
  "key9": "2rXTmc4RpXce5GjbZLE6FQXFFbpzbvHWt97Fbsb4JecouE1b7Msq3WsBGWjyzYtSAkRZhJs7r9WqmYigv6G4km87",
  "key10": "SF1Ajnh6hb1CcNz2Ycg3qHdr291srg1PEyTEz6XpZ9fb1UEzAuv8Dr3uryXwpUaAgbGaNPQbfQCgm5kmfXP8B9P",
  "key11": "59SGyRSDG3PrNfERZkgDsw1yj67Y4u8bbZQ62j47GMNRuFXcYb3NN891No5jUfzg7LFp15SzqhiiBo5HrG5jbfF8",
  "key12": "4a4pPLrasDJEMfabvRXkFuFepWzH1qcnjE4dg8SRC2aMM9afQG5zNTuZY9kVoTi6CAW5qYh8i1LK3D84LwGuyWJo",
  "key13": "4GXSvtx9CdiTnzww8aurcPkCe5NY1MjPB7E1Nj7P6363to6BwFJRrQbaJxucBmnaegiiVNmJRvLkLzCr5s9yXM1e",
  "key14": "gPeDRcwbTy6QpcYMN6qbWbD6QgaVneQjxnvvjyfN1hCNciy1Z3dSouwEit72eXnk23fqxL18mpri9JNoNoJoTeg",
  "key15": "5o4e7ZagxHuYsxMYJLETeuDiuqTPoGNHzzEzt7heSHDWzmr4kgkicnd2NusXNJuceTtEaFTDBF77tUgBwdvgjvhW",
  "key16": "21Rse7ZYJERddJJZRuWLpm1zYfGhTucnCH4eMaSyQSav8jAdL4H7fYDDDmvBeVeXXdZ3U15KvvVyB2NwdsHvAJvq",
  "key17": "zzRfxzz7ZT1ZSPcFTMeFnZZ8gDAv1dswuUNoyokqVt3xWJ3xyhH3S8pYea9itcvCFFUFzZQ3XNnwjoXsSyaKx7T",
  "key18": "rUeKC6qVNb3De14LMgeYAXmk93KX2SE9st1xWS6YE6whiFydpfQiniib4kDWC7HCqSG6tN2CZoVmbdU2AjUkwgT",
  "key19": "4trESoKUmqnbEyJjonREy82kfCXtyL4mc4kM1x5XtXuddmnEoPHQvCsPKNWyQds5WMV8z7y9HHqHRRb3XRUHC94u",
  "key20": "5Mnt9ZeogpXErEoEXYA4SCovom7D7iR8JEqvSe3GzPS5P8vdauX16LwcKbmL9qV4KdDCKme5QjBtKzYpNsgEZCxo",
  "key21": "55KhsK3rjwxnBKfEy1EodzLiBxsZtiryheZma2i8NhMzykmhB3Jz34qLC54CFWn11TQ9gWmqYocusb377iesYLBn",
  "key22": "2qrnt3i5PHBpuJBpoZUSigHHmUAGwy3cbgd9GGeUUmYvUjXvaJe78rkmbY61qiAeg4QmusZuzykRHQBjzGpLKnAU",
  "key23": "25yVnJiE727sN1hBhqan5A53sDKzbCvGgXURmLYkaA43P41FaLrJGsVrEuTndrx3MDVqtz8SazZRvVSHQ4sD66WZ",
  "key24": "2LfstoRLuwR6N4xkchtVDd8TZVyQpS5kN6iPPidADyQkL8gFKVrLegct8JsuPzDkufk7uZGrrvDHYo1T91S12rhS",
  "key25": "5tF5ffYS2U8iJneCjwyYhZqdMfZbKS3Fw3HM9ANLBZNRzQwJEMYa5pDbLS4UsaAUkjm8wwvjYV72zY19TuLpjx3r",
  "key26": "D6Bfpru3kZA1ejhqKDsktw4mxaLHxwfJKEdZKHBSRPjJVeufPUZbSEwPgaV45FZ9LrdyGt8pZJKbmAcu6etU6yw",
  "key27": "SJi9pyaBa7KKDETQicgCFXdGmXn4GvxEdSfYRwG9kcycQ63JQSijHd9tPkq54zUp7A32yKjuLJUYcWjdNRZZM7L",
  "key28": "3cTJqChn8n71V3FcdG7EaXMij96pUQpo5DZMiBy9RhQjwfWgLs3eK8HVpSrGT3y5TzYUCffSVCWFudiPF3teipKG",
  "key29": "5xhj2k9bgdkySzUfaSN1TegPGbTJcQwBwZ2AtfoKH1XJ9EvdAuMUNT7F4VWdA8vShCr8YMjsZYXkD4i1GX9Q6pXF",
  "key30": "2qiy9fFr4xknH2ynQ68Artx9kJ6kk3BzwKeE8NwSSApuMi2z97ZRovjzjwC2v7QWF1rTQy1B6gGhE8Xy5cBmHfy8",
  "key31": "3AFZhKbg9Bbo4gTzEJ7EmU57LJVpECkoUKHgi5eBTRHEt4AY27ur7gKPNkUYiCqTdxqiSE5HdnzAGJZ87nW3i1wR"
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
