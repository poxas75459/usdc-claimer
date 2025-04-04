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
    "2cUJ4NmCDGK4M7ZAx8DYrDua9LvaNfbxXD8k3gJgdTBMcigYM9i1ES1DprRdrN1MMxfjowmWPhbtiA1F2DHNJMAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5PV1wbXt7ShFkjVAXahCCowbH4ahRhNSjcdqzdMPBDFLYVASP5fnQSowxmeBKuzsjLcKtS5hfwq4vw5JS2Fhcr",
  "key1": "57Z57rPDhaRjKKHfatagBJrxSfyXXDscL9G4QTyVmfzP8wj5GK5oiAj5Cs27BwtgEDs3KD7jLUz3LSdTCgoN49ZU",
  "key2": "5LGg8bJg9aJe7D4GQRbRLG3DtUxCt2UTQyg5wBXppjEwVKsLeCv9En7PRUSNq4BcuPy56DU8FhniqUSyRUh2XGuq",
  "key3": "2RPgqijfJtQQDkKFqfFqDLHppsmZCZbx6CKznxe7mA2mb3VQHfXosYJmHtHPRL5CL1gsN7gNzkEMWRwQKMqzrq7C",
  "key4": "ohiqoXKPLqDhxwAX2VVjPeMMoRU9dttmQpBQgymodY68fuEHSUKoCbRwLhB4Xrm3cVqtRuTYBWt5yFKfKFbaJju",
  "key5": "uWw6aG5PN6ySi2C4M56PNoaNNrijhHZhzXKiiNR8wuALN5yM4sHPaWeVuFiPM7WP8sGcwyZXYeE8bTLksvpZd7W",
  "key6": "JBDXAht1B5U52NX3ZpYTvUZQo3gwEZGUm7AvBeGDjppwARDZrpG4jn44YpMdYrpyfTfZC5GkkYGwy3PiBxzTB8f",
  "key7": "2tarFTCJHnSKRFiCLiMKwfLSzQNvD8Tq4zyG2eh2F4AjCw2rbWBr729yKo6LCJdY7vbYc3eE3WxDKP9A1fxh7RDe",
  "key8": "8WqV3k1hUL1Q2yGQitThsjEiQpnekcVPxXkSR9NRwxhtwx8X4oHPVHnvApbKzPdtMem3kW9qzeNg2HygeNiHmhv",
  "key9": "5mPGprhhQfqpBXSdcHQZhn61FptBrPJhSFQoFDfFDaqApSzTTEzjVBgjkB47Mn5Ey6GBxaVD7M56HFDq8ZNA34a9",
  "key10": "5JdUM6LKgAEfQhBH2jBhQ1mF3WVcS9YJMCAxZYskbyaWkDhw1GRdRUSQbE39RHAE4MusztSdMm8WhNptx6eeJkCs",
  "key11": "4XUF6ZShxoqpkHuCa24qW79WLVQ7ZnmRPE1KHszXoXTkN3DLbMTzyAfE2biLnFeBKjqgzex4ZrqntnbWTDRsZsci",
  "key12": "2HmfsvP9ZCdpZmc1foDmecWJqtmqSDPFFBLSGeTv8X44UW6o1QT3p8UU65WrcfkaTXdEhivbs9tSUaDnSk3DL3ZT",
  "key13": "7rFvarEMpfwRMz1pVeJhh5BomP6zk3554qHgmtdWv6sbUcVdr3mHj2837iAbqASLQwJssZwStvS4tWfXUvs4ehy",
  "key14": "2UFQNeTejuLUFqH3kib5TfafR9FaY8aLXYLUqX6TMwRfapYJDDkmF7w9gnSr3ougUi1udxguhJMxK1trUwi79ES9",
  "key15": "4tiioJRKU6FtQfvLZyENiTaS5P1uXdHcFVmAE7HmTM8ayLSEaEnVpiCefFmkAmYBcq2b3nWDpy8abSfp4pAorKdH",
  "key16": "fUCPHNB3jemvtL57UUqXKGp8u6fgJtck7L2UPNN5mj4ezajHxCgBbZppFe1NmWScKaMcKNENe5joGHLr9dQKZRq",
  "key17": "65WubptKyBXHwRcEYLvNDzPMeTppwDmDpc14ZVZXS4udBfGtyDc7oPVFFy3JfVpFfF2Jz1X1oZeGHn88WqKzLagx",
  "key18": "5N6ixpZvpdEQ8YQWCyTizZUEWmKoW8RZXj3xiGf1xBoXWC6H5Wr8RRuMDfvyrYh714f5sqUE5jXizxvuz2jXbiPN",
  "key19": "3WTaiwtA3WpJSwpjENH7jbMc7pZrwA2FdwRAVEQkzE8XbFSAcJcdQRsAKxN7WLgCYHv82XPh3LNfm6rU119Rp5e7",
  "key20": "f2h8wuKFKzYcwsDydXCQWjUtPBjcXtv8LGuDsfZkR5SEf9ErFDKVBowJNzz5uKCMwp3oJe7VsY3qHYH6pFtZHpp",
  "key21": "2UrQDqqRkxCJCwUn994EdAWaF21faMo4aoG4to9iYZoQZSLVeBDGT49swDjNgVTRB2JAjESWP6LraQQ4QDjoS4wy",
  "key22": "2KRPnV5b4Uj4MvRjVfhayPpmCCAqMQR7VNQXCyyeiNnD66Px9WBCgBEEUzeTbGvMZPtJujdq9PJ6XTC2ffR6JqHf",
  "key23": "HqY6h47iWmZtHjSfzPLnRRmcE1kGcVsGh3P3GKanhoKG9pZgAMotZyY71pJVxPMUnQ8v5cfpoJZwzHfq3aj5jUz",
  "key24": "3NcpHmmm2CcLg3tdSyt8PxTxFC9Wa2rMqbJzLZH16URoFkYMpFotmJHMYKwHX6eCYog8YVbTNmTcaa4vaTqKqT8",
  "key25": "5pTGdjgkPEBDCkKUk5nZc8hsqXNEgghvr5baraS3JWpmkVqgGjNQxTWiMsCgST53b5n6Vi3Zm9gWb7uvaN7zRmHp",
  "key26": "63QaQ9dq6Ygpm5WoVFsBoq14zcL5efHNvmaFeLSVa9YSkhh1yueANUvub8NNwLnM4RKxqeNTokxyVDfbatZWbfZQ",
  "key27": "2gAADPzc6dPzUngXVvQw1DEFZnueREdEKQYEV65QAUW1wG3o4iusb2kPk9W9bwCd4p5CnfeFLCA5677yjkpAZEY7"
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
