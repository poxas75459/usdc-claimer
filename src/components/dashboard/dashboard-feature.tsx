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
    "3axwv6dx4AJA1qNSbsHJCdCx7xSasbBkhA1TZVn24wFeAR5FE8tP9FUsEzCrQ23JT1FFTKfcjcNFAudB3XGPotaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnahEcpXUEsMPG9X4UefzA9FUjQUHczMBfKKSzoEq8PdmC9cLbBHqdjAoPiegTYKe4Zbrqkugaa9N8PXSZB1nyj",
  "key1": "23gv5H5Xnn25An2VsFKCTUaEMo4kPfAdgzDaWdt5JgEzkyEiajS2y7dkikNkDSYr5LBgBHibKmL5gVWp8tB38taY",
  "key2": "55urXihP6wL762oL8VZXgoGXbZTY95HEcqEQReVJsfmNdaULSWTiyukBjPLRYnKFBkDwBW7yuKRMJ2FmNMuYupSg",
  "key3": "22AZLrfiHUTcRQpUxhWw8gdAiqa7e5CSSrYPcNQ2waqFhoepvvWV4mvMQqAKRmWtuPBC7sVKEaRvyEt2a21f145t",
  "key4": "5nnHDQFdZrasgBqMR5Dznxq9mpghQ4rrHB5C72itrMLFpwB4aBvMNUaBNLNUEzgzcHseBCdGVHGPn8r1QLxvZtY1",
  "key5": "61EUfHN2tz4h8pPUEvP5yBguABds3V3EEy1bf6CLTb4hSWrtj6fvRH2b7hj6Jwseq1U9wtvjCU5Sqd45ASjCrgmN",
  "key6": "4QRSh9QkE2MSt1Cj9SpCGs5aPMDjwzdEkhSFFQs9mawzC5mPx8LXnG5nWxBRYZr7fRWW298dhgf4LaGTFL4UfRC8",
  "key7": "4cfXm7Qubh6Vkp9sTE7Xa8q9NCP54qXnS6bCmCWeMziN1YjpGJ1CibDFGewyojkA58GSiPBxG83JXwWzAtE99BGD",
  "key8": "5L2DgYdaNSwsf2kzjyRQTjW9KuP29QdL3GmqLEoQfE7f7sYbiSfcZ8U5NSkJVVXDLST8qYkcZQ6JaT72Krx4vjmu",
  "key9": "315gfSKudYeqkpoo2GngVDeGusagk7GgUszq8yoeCgwUBnuaTdqxChbnwdRXSrMKE8gVL3m3mVHwyL7cZiTkeomT",
  "key10": "3bNxPHchMFHHk9QZ6z6WMEj3b8GCSdCFHz6mcKM7ZNuEjAQpLBG1wAhupgL4ir7CXFYErCfg9BiGNfAyaHJaXQgA",
  "key11": "2NkP4WWPrdPpWSSxVhm6FhopGRFZNKgAiS9Wnq1vgybrxgMXKT4cfCkrgFYUQTGUA57jMSSJD1hUZcnvtF5grnfV",
  "key12": "3HyzZnk6bbLrpRWzzKKnnJbQ5bwLqb758WnaNViknH4s8WDzAR27MEFjVoTyncnaZRrcr7EJCyGhqnuJXGAMHF4c",
  "key13": "5NrQfC9n9qNhsKz4T7UgkqNVTF8pTTtD7bf5bknfyER5pZjha1HmbyVyUzG2b6FgU2tpgs2kF5T8po5QnHPtMVCE",
  "key14": "2QgCLVwkPiw5wHgr9yNHpiu3pkDt3bpSrSLh8uPEGATy588MwWKSDb8XNM4XD6h2hcYuTuuq5si5f36zBs8DmRNr",
  "key15": "2JjRk2bHzwwrtSfc8SYxaJLBCDfTrAnSuWQPkpaxedBX8JqAJXtXngXc69KS8ekWdpUVy2ETCwYTixZMfG4ViRQj",
  "key16": "4zwPZZvsyD1pXd4fnj8GCdNf9V6CWQkaPN5AbHaFm43WWqeAnqwbguFknh6VTPfTAFSxowHBiG4C2Lbmi7XLVL2x",
  "key17": "2up4tF4wsXrJ1igiagX4vbGgrVe1C3RLivgf61UJxvNk7shUbcPCsA5NJ1MfcNhjYneowfLY7gxSNYzihskkkmBz",
  "key18": "SotBXVwvKzFQLRfhogXtv7ZBnAVSY8UA8vsyzY7djwTTGrjQ15zSMx5VtQSf9o4RdU727RqnmyEvEgpL6Nkvyvz",
  "key19": "5nJG6FzEMB9LUYWiYW5CATNgkg3bVj1JxUrZrACPe78naEUBaqf5fqkxKKB5scXzM46K9Zbi5gB7TL9BaKg1o2CP",
  "key20": "5Jubop2mPMdLHEHcphLwfeCAopeiH9Wm8TSdd5RpugKob45BrFLNHK8bw9AMFHKLGbfFgoZhB3oXj76euHbnwLq4",
  "key21": "3Y6EVJB44Ccau5rVXeiBrk79KFULHtvLuZ1B7qxHLmYQ1GcoUCKZ2ZfamcqrpC1juKPzwz1JPNSasjddFpd4HfKz",
  "key22": "MNaxdcFFZYahpeQRya6JGsVaCt1KJhhgHsn12J5Z8VHTps28dvtncYhzYf2YbkYUs19QUmyy4zF9BDohRCuN1xJ",
  "key23": "3UMi7uc7atwx9VwytcLAreHgbs9F2qf8RwzMLLHabUvFTYRqjeEt4yumZzGa3zSFgWDs26yJs9pRjDwESPktYThD",
  "key24": "3ofCkTpjzA3HmHAMnC7hwdYYaCLNcCgVrUFbV9nBywnz3oLUJhv56kdt6w1RmuC9ZPZ94LbctnnKLGGbe9CRvp38",
  "key25": "4G9c5MJv7MpUmb6QekmYykJ9CVjKcjSzn5BGU9GGvpFd4qGHnRR6CiNmwg5V9EevQEpvJZV25EopMjBCt9BdncdZ",
  "key26": "Cz1Z6dCMY63JJQnDgp4emGGtmAS4SSkk5WVE9FcdfB3TTXDEFNHGW43tuxAkxiqDzgPKf1WrZL64GAoWKGnVk4M",
  "key27": "ynoafMb9TkqKxUrnB4RTD8m7HcTRBxrhmaYNgNRwBs62ySUthEhh2x9Uts9SgVGacnHvueQyQH1Z7eFdLeKdb8s",
  "key28": "2GTJaLaLDe2qjAcPAgguaahCfab5bbekMLfbC6QBoVg3r6mmDwkdpxzjx96N33TEpoMVjKXSKY5dj1r1SFj5mHLy",
  "key29": "5Nc2m9YVfyJ1pFVgc8w7QEytaQdMjqGTvpe8NFzRnrLjpRecRmBuPMbd4CrJ3BrjHk2CFAR7aVmQjMrF2iGgS2z3",
  "key30": "EW3RRgqH4L7TodHgsoVDvf32T5M39pvyKSq4xkZGWm1dPkc9915kE9Xgv4EViFTcpXnyw8aQBUmPSYEbYbkgPCZ",
  "key31": "LoCxhfw1mFWzT5HPjHDU2aAvE4F1Zf6DgC4DYtHGKpzo68mT7VDwbdm7GS1uBWSvy4r7nYNVk3Rf66qE24V48i1"
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
