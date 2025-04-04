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
    "58dN2zempEYCcVvqoGPG9729B595cTUE3oNjhSbY1Ew5MZEsdLHKgtXd8EzeKPQRF7YJ2gUi2V1Jxnf6TB8LoxMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iE1H3A2gt85ba2FpZk52RATJXM4t4rYb3moQX3pfCaPNBQYaPQ5QPcFvKjiJHy6ZuQsUnWJ2NqyxmqfhGbS46Cg",
  "key1": "2EB4nJhhzAa688MpEPMk3nVhL6U8KsC5j1ZtHJcva6XxGmuzwuTVqFHEhUXQoVBYCBQhNQxjvVbPzbenx8yXJX85",
  "key2": "2fpRXoe66T5Ve7h3Q8Nyqr9cZjm9D4bp7EKJvovb9vfzeC5KTytbjVQ3LJ8WBKCPTcvFxfD8aVAqaAj6hH3DBbcG",
  "key3": "2DEkhzGe3nqZE31i2YAASuQxCBXyASvtiownPdiKssA2Hrs5Yf7xyFb4gYrzVtHoXZi9tBKfvMj6iARGHNLJXDpa",
  "key4": "54JBm6KYasCwfUkB82shLj1CTBPwsMBM1QquTiXidu3vjbvV9aumYRXVssofQkiKo8ZPQgPrZVtgGp1jrghbK4AY",
  "key5": "3JBksh3NfcfaXht5r7UedhKcgPrX6PzVEu8tSTCwg4M2gtcH3EXqwkaJ3R3gh5rJiyZFAPTzf4JCaZun8GD84Z7R",
  "key6": "2phiyNFzBv7gH2Lzz9DkzqTt1wCP9GcQp4niFBM747FGW994XGLfoGwR9Jgr4hYqpTyPTQf6vPHjiKRMa8hZaGFR",
  "key7": "Wd8zJzaqcL7ZZ4mQAH1UtCKej6FpzfikYfDQ4Cvdxe9yhAp7dJqsXtY1cGZDWvmxav5bemVQhW9Vcu1zXvH5qTe",
  "key8": "5j9RnJNuGHx6hhRUWm8RpS1zEJ2DD43HKfd5Q8yZbym478S4BHaLXabSzswKQRxWWWhCJmXKR7hWyfJVi6nVkMKw",
  "key9": "548TvAfi6VYJ7kTo6n43dCm93KXofMfmGYHDYZ4HEMWCyEmPCHJr723x8NXWM4hqNgfyDxDm6amEVwW3VqVWAkMt",
  "key10": "n98XXHLbA7GMKRADVEKRBN15EEnX1kku7n7agXoDA8T93rhTXUjcZeuWUiAYTWWqRMkarSmQDy4BXwUMiTxpwem",
  "key11": "64kB17oxPXZ2B1L9pMKzDnzHawAiPduwG3VC9PTKxMnR18QqBo3vKr2nzH6bBWfC6mZWfsCjxf7g45NHzjhTZiRU",
  "key12": "2NJpo7tFuPq6FTmaGSGs1B5sDQwKqvubwHEsrXah1bwkKYy9ZhjCuzorcDMxq8iocyvH2BE2oijYoxMQpGHZh29S",
  "key13": "3qnN97RASJsJ7cGHbJHt1ZatjeLE1pTQbA2Zw9CEP7JzapMKgcR5jgFnq297D39xe2zNsxj4axoVxfaWKEhbaE9J",
  "key14": "4nyNF4ZYAHAaj1ZTWmMU6Pp2WbANR5K9RyYmSXV7BVas3PxvCrM12w76v9srg6wg3z6AfwFG2p5A4LawwydijnnK",
  "key15": "3xbgQkHij5Tz38RP5N2SMUXPMqPrYb69HLzvu4jKXv4od2EuJNe7PvD7VScFqgZGNaxnN6r7feBMpsjgvvstpJKh",
  "key16": "2E6Df15wtFgsi2GSej1Syi5H323kFudLbrdEoRPV8cTQVg7tj5Gut9ez8bDPSTUNb7qsQ4PptoCebrtRsP7Uftbx",
  "key17": "T9xKPrwnZ9EcSF9vWXT2jwAePj4MRktgZN32PJJf1CavpWeCcqzTBXpfem6fVvNWAEN3AbreScpPqtQy69aT96g",
  "key18": "2RBnvaCoeM2aKCbWiv5XNV6MUexmfUSc7ars1EbPWzEaAAV4EoQbE6bgcYSHux3LVCnxDvy4VfYsMvFXpc8NGcBA",
  "key19": "4djwxDT5TEnwobzf4o7ctf2ZQJrqMex5udiLZN6PKV8MyUGoDxh5SRoqJbFVkR72tqJXnNBGsz9pjM1FyM9fMuXH",
  "key20": "2cwUxXRc7kB5rVpehtRVMRbUai2xr7EZe5WwHeSiMqNX1oDcgeNP5YPi6xkMMpgjbh2A4LQuCRHn7Eq3knXXPJuP",
  "key21": "5u47DLw7RjdsQEZKMdnwFRePrCd8aPKpkP2LfGMxgmDEu24Jh4CRWgZRzeSr3AT48rDqJrJMQkT4SzYmy8TTwqFS",
  "key22": "2vVtToJNHnc2rVDdQvUgAznGm42Eiowuau9kCoedTkJSpnbBCa4AHRjhRQ1b3ZSiueqN7wTwSk1Yv9ASM7y3s2oh",
  "key23": "2q2iCsL6SW3qCA2b1NtHQE21yZWwm2tNhSJzLbSSgqLu4cYezqSZH9bhfYCcnVpNXiozzxH9HHkNfmJD5uUJNb2r",
  "key24": "3rNPopBgwnW8yamNkSNchDEVggDXQdZnHwk3TsQJDEcvd7LvKjQyd4ZrMr3RXcGMsqYTt9zrqTUsCTJ7voh3tAWb",
  "key25": "tRLrujpFwi1qQVdJjqfnVfZJEimkkJQkKK2VFDk4Vksyetu2nwGDTirZ5BvsWD6VZUaGYJMHosnBi8Pvr5bYe1A",
  "key26": "3v4446CVdW2oKbLjYyAExiANSvhLSWWdZH3Bc6PubTwNUPy4DXKAmgBkMrStwx9axpHsjg7mKVhc35qVqEMZMod2",
  "key27": "2PEZLLohVVXG2D6bDMZDspyiCpB4odVMhCpVB286KrSi4a4hMRWBYQ5mCX77PUtFnZVcS17UFm48WuxHtAnZCpKx",
  "key28": "4dnekDeHgDR7ndX6So6irLprMHZnx6XhdnmHg9tU8vAhYCShaL3Dc4W7FsM2iWaH9UwtY7yS6Sty9SqqZtFdtBkE",
  "key29": "5uJd73GoZ1LuSyrBd8gLWh3RfprJaFAHFQAD49WTqXyTBXC8RHiA784MVnD1fnE3AkHc32DFhb2dR8Qu25iTzxgf",
  "key30": "3S3HhFG8TUhKnxLaro2CRS2vGDUW4yu28QCBp8xRt8HVNWjaZd2ifddasH3nn6QtpdSnW29LmVU6jhp2Lgvy2TyT",
  "key31": "rb7iKy8Gab4PYspCWwq5E15zRCxy6Kqee169hWPZ9yjWYsADrDchUsYcdSbFxopQKfhF35kY2qGZoumva2wUHyL",
  "key32": "31g6QaJHWDBoWmkoBwcg5geEuAygFCmPvyqe5HjmioKiJBquCgk2TDLuP8hCEJh3e1vDeuDeHFVqXtEtwDa6mtf4",
  "key33": "4gXkQiDww2qwj3PNAqBLK7GoMb33dbi4nh8wVVLxY3XCJH7gbdTs5EEu5czma4LUsWi16VS3H7dFx2A1jRqabg1y"
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
