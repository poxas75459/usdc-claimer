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
    "4AaoY9W4LMbMfn5LLdaza18hedEwwgvBwyiCjmAii3jjMcwxwojHdYqdWQuULEjE81H3GBWL1h1HY6PGPfx1pxwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEkmrkVjRiQZev4r3w4QN21X3BQFU4TDFmmH7cywFwn1iM4XMmNjvsXCcqhq3D7cBLUfWd1qCXZ4GyNDAabHQYW",
  "key1": "3tHRvJRVmskWwaDkHQhYucTN6j19YEyYFiKVWu9kb3HS6JQKy2EgBvePSV5anBQJuW9xN8NLYcUbksFxjn8hj1Qa",
  "key2": "m7ceyYEBd2zBpirY3845q8SU5BpiFo9VexGmbydiphHD4ZA9LRQE7MKmqUPDv4kSH6C7PajH6ACR5bHevMtAd7Y",
  "key3": "U7LjSBYWxijbArNAUpowCxTyNeC3TmJ8ohx5jSofNp5Z7PYSKhhu5pCmZQQLHk7rUZGQGvexRRfMdQu11uuBikh",
  "key4": "k7PXtDszYL2VbMGLF1bDuuPcBrD1irP5ZyiiXCmK2DhLnPP7LkfmhNhrP1v9npG6CU7CqAHDwC3vXiWkhLN29oz",
  "key5": "244AWGJRgbm5N4NBX8qAmSw7AK7uVN5ZkKEH5WtMGXdP3NviYjYW8QGDkdUBFA5ka6aWeHUodd2UzwnjzGtRHKAB",
  "key6": "4P1E22rv3vhWxrtAZ9Cdacj6tWc2GUwhrZBbstK2asyLM7FrJRSRRCwVNk1kjFiqBqsGgbwUrd68xBTNWfszyHCZ",
  "key7": "2HunRHg5QYoXHGQepMnxhFsKAU76X4S42J3eN2DtXgnnccuASM5rastRV7LqgBG3B3kycXQdwbg4ZjnaH2ZDGg4p",
  "key8": "FUVsiTAZUpWBepWMtA1iYBsoC5xW1dZziHQCRY8zg2ab3g4MDTKgpMr1dQJthjsojuLnkNv2T4Qc1yDm7UuzEbo",
  "key9": "5jgnrvvkc2njhPMeEJa2meCHejfNJhpSJbeZ2uqU2kGYXRg2e9ii4qzBA8HzMooCCTZUtCKYZgiYh8oM8ciBV84a",
  "key10": "5YmoRhvByzG8pbikJndJ4rto6AVL9gEKgcGRgAAGxafiUscC88azTyZw92sgF6ix5vzJaKGuUHtNZPjaswr9kmHs",
  "key11": "J8p8d1ySiDm1NvHp97rEpirRf1PBpiJ2SZeXjGUZh85vRPS6Qe7ReKPXFYr5KVoEXXBAezXU6eVF9mM9LzGxtL4",
  "key12": "2ungj4PyXxBwDay8zbH4VuFomHD6c6WAsG2aJKodKkHGVQTKTuP5ZpuFyo85EadHR5h7JpXegC54du2LiDoDz3eJ",
  "key13": "5BDvYCLYcXozoJ2U4Dk9CVDfdaXTycwcB5n9vSiCMy5zXSHyAiVrCPfwDZ34LVbxHE9WJshost3PNckbLTJjfymp",
  "key14": "2vMJSeq2H8fnJr5K8wybeTaEoYtti8BJXwxwGn3DBYRMUL9dVy4pCfNKJ9yf27huUDYW66GGjnQ8udyomhsPSRVB",
  "key15": "NGaNvs6J5kwbMFtxAhRyvAwk1FoJ7fYYT9eTpFS4u6skzYNCK4jspgUNMVcw9ro4KjmufnvoNzNCNFvYZDSgj3a",
  "key16": "2pcnn8wLPnAc11bQJ8kCqF6WGzJTa21wnkmcNoJRLvkkbCRQPePSYim59qjnUqgmJGRo8CdWSy6awQ4dAm4AJ7AW",
  "key17": "RfzWLgkvszDCqNvF8QffosRJkstDk4cDKNKRWggAkRpehB35Y2wNWJyJA1ZGSG2TX4kvQtGBkaiGB9GVvbaqaTA",
  "key18": "2uMYPnYSZgFJabQfS4USUjynKAmjCbDcH8tCRhpZALXC78tNNrv795fzv3NqsBaCtAF5EbBjC731R1w6rwcexW6b",
  "key19": "39NyLScANRVWFgTGF4vU7rMfNJBVTYzFcZUoiUy7T7ByZmGwueny6VYM4ZqFVKTiRGqHznrTy3hG8WM7jrrQEnd2",
  "key20": "2FWgcBeeCqRw4w6PME2127vXiZe7u2HpHhVgkekVc5Ss5fkb9GwrbnFe394xyvAbQETxTDT1R7H5qd3LDC57qgwP",
  "key21": "3uypvZAfCMBEtQyiqWzvQNKQQJukUtK6PQhbS1jDxuiJR5cZDBqD3P3NuEwn1DSZjzfQhyiexvgXi5h8FzvwqrYW",
  "key22": "ZYCutZJjLaKZh4949m8bQQrvMzXxFtnga8iW6yejt6zQ1yKhS881PyfoUwTCiQeeQ8wHoMoWyHF7k9k8S2p8DoG",
  "key23": "2YUXto6XHEL5Zro26sraKW7wTTJZnAqYN8C1QYMJ65TyUtXbEfqMuq6kR8eMYaMnh9djLuJbJuYwRHoxt7Cnmx4o",
  "key24": "56hTnpQCKkkTMTnVSL3qXFLAeW44Kb5UUArvbDwWWSwACE4bkGzSMUMzaR8dLzd1ohpHpnCwc2QY7idHpfR6cQuZ",
  "key25": "aeeTmdA1ABH7GBYceZakoKgxf9smh1nxpHnYStGRK7bnEFVsySv3yshd4MAb8hf8rs59Npt37TxYVbnMr44AKxg",
  "key26": "3wZctdMu7sbfRLVVPcTe3qDJ6AcXsBcrT58huKJnZPTR63MuM6AmveHAEhM9SBFeSBKLuTbRc7Tz28YbWdyW1faf",
  "key27": "26ZRsbDkLHYWhAyU2j3pVBkBVtoFuq4Cw8dY71BVJtbNsTR2JEkPRcrr4osgt687isBEsog2BJUTxkWiYeqKiymP"
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
