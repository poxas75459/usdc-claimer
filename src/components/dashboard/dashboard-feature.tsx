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
    "5wpAQ7YT7ZqvDhr73SsakEeXtaLQSuHSGdquuVvLHEJy7Jr2sqXvk8Bhmbs3umxr1XzShbnvcs4TQLhaEGwgcdeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHW5XB2QdPgP7zwRUEkXcH5GUkZiqwuj8VK79F9YeTKQN8NTZdwuq6F5SjwYRLLqiGevsTcr1apdgWUMC2krjVF",
  "key1": "3uDL1Uo972MTJFJSdFzC1y4EbsFgWVkD9iQ1Ef8w52r3RBQGEaQGoGYAb7kvJrz89DiufVq7Gi5PAYAXXHafc6Zb",
  "key2": "ZKtPWEhJgXVZoCMDuXcJeYroxV8VhLqMbCKmtsGA9xShm1gKJZX45SgnwhnEkp289FYCKaYJdVUmgKYa5hTmip6",
  "key3": "2FUHA6VdFPUfxoxwdDFiXjwmNuRWPtVLLGfaJwrqfUXnaiLbyKsCLJJFD3CPSLZAZuXjQ9B1hikTy2L4d9h5kEwf",
  "key4": "5ATuUgUZKNwD7qSrhC5EZUcTYJXFXerqSJhYVsCviF9pk99JHo9MvtcUPc9brixSYSbSdqpJ334bzxvueywgo76R",
  "key5": "31H4RZaw6G6Z9gBAYuonBdPgymCj92Ezv8mdPpqKJQ21PZSRnCpHfk2nwSMLLtQ1iqkAY4PaB2AnXvsJRaeRCkvd",
  "key6": "2ckEhA5XFAxARd2SwfWiZuhJUNFS1z6aVbo1PrBGhs3giBtKtF7qwYuJyFEc9u28xgtbzFaCGuPTyb8GdaPFPjMe",
  "key7": "4hMbjf5pTZgwNr54VdNV1eiMzK9SihiRPNjKRyfoUoBcszLVtJcFhRvFbWju4nBqCefRMCNtVTCSVfmbkNQBMJjX",
  "key8": "3padvHH2ByXtbco7EA3HL3E7oYjkjrAuMHvxrxSLrxybPgBPvACLPtzFTCNn9RYWHwjDWvUjv654GLXKA3XUNNCK",
  "key9": "54g3pSz4Cg2PeZywWjfajUMouzXwMpkQgp4aDmMQuC9EHTV4ACUAMpHDo2od7t2dG2a66s1f71wGgKythhks7eum",
  "key10": "55FzJwuFYjCAc5o8gMSjH5t11sGg3yEURezXY46Y8MFLufT5Yv9NrxqehWdX7HKBtDwk54FuT3fpS2Ts5JfPbZ2Y",
  "key11": "4H5dQfN7Vwu8Wd2iAya1Xf4jh9a2G7rLzXcTFy8WaEG377v9U16mCmoEcL3tHBXbQeZEb3b4c1r3ZExxE2RvKJxt",
  "key12": "5zXqMMPkf3cJGAkLaa3YqMXgvvHY486YawzevkksnYzXVvCi6RuwkR1auESUTHprA45XZYRzZnpUtingCCM1jq8S",
  "key13": "5LQA7YGQMPDwQkZLdSfG8aifCnzk7zeTsgJfmXVzLmvsprf5fjEwQBJE6hQbxBHJVsQHBecqySrhzftLccicJ5fn",
  "key14": "2eUwqyt9FEGwwCasnYyiGQemMy2WJNW6FRYYgVhtKcrGbF6x3JUjbZfu9ucGk7SPuXuwTkFSqMXrbaGxrrjXYrW6",
  "key15": "gW6tJN7uEZvshQpzJT5iD8jpTNxvVMbGMPtw8nf6yHnGoSR7YvuJBu5n9ggvf62ixD4UPo7SpVvw7k3KemK3m3Z",
  "key16": "2t8WhVhYm8wVXnkmQhMTwKqQtbZXU93TyB6GWGFW5qGU4UC2e3ighEGhPeEMVRM9EH8VfHN76WUV29wSugU55Mp8",
  "key17": "3HFQxL4HkLQpf4wzxyaLSzimVD6mzGM2d9i4ELakAsZRNrisbERdTeLwywuyjDPhKrX8ZBwTTViXPt8Nz1mayLnq",
  "key18": "62wUERvfsDkDjYSwmrtGJ3qw9MU2pW7pFvRSwfdCx8ybG6H7aaRbFPyWWDucNXX7Q9BsFrHRAqQtcgxa9wRaspYK",
  "key19": "3BFKstLKhi53TKqpbhm5hcqgnzEqjyxNAaPX1mRA2FKrt1yXqaYLxayTrCgtss6ghySrPaXmBMnjPABkWrBiKrD9",
  "key20": "2yUcG5makPQdJwJPEKa6TGC5PbYkAtop6at7MnoGt8Lu6da1ZFT3t6vr9w625HiaZ9AH8oC8pCeTzRJSG9Ci8hQU",
  "key21": "3PMMX7SxripkKKDZBYuh998KnkYrKN2kYHwocWQMVpZchZHGctsFzDFd2oUgEp5saQunQThwuQ9qvqauUTmL2UvT",
  "key22": "35APgcz4SDYxQRa5xr94k6sMzDDGMatyBBsdeGvG5AFGxMJbkY3ZKGoqgUgH6q9ZPFG86H2LQ9bTGRqbcrbeJxs6",
  "key23": "3bQJ1ZAWCMGkuLx3n81SDQ4fupbfuedrR85NWeggAP1PbKMne11dFZqzcPzUY1kL5QRPKPW3bwMwp69A18U4Uv5u",
  "key24": "nrS7W1pPsiQ5NcVbz3G1YpuyUC7mjAYghfPKn63oEQZCVs6XbNyS7PHZW5SF9Mx6a2XjxPfMi2pC9QPtgtSPtYY",
  "key25": "BRV1Sw39jh1S4yUMB2ksHtmxiiRBWRtPNkaLESrGqV2UT4dU6H6r5BwESLSnTPJ8V6gZeEVNCqUzXniSVDtjY15",
  "key26": "3ZibCoSMzrC2FF3sovxi5jBmg9oVtRgzZCUcMNKzZYdCZZvfR2tTw2jz1b6NPZQzoxVxLZVd8hJEEoh25oySCNK1",
  "key27": "2WG12XJkRnpPei7YArRhrPhouQz4Beco6LdsVsSF91C1vWcjpUDj4xG4PUegCkBAcMAmmTHVcnSViKGxDXSHKYRV",
  "key28": "62fgfbdEdsn2enzgQBN3Ud1RM1agCHP9BcHFicqh1b5uomLmX3kecDnUKU5745abiEsHWRkmmzpSMcGBrEojoZhU",
  "key29": "3bN9Dw5gvf5QRWHkTW5RaTiXVrn7cKWEJioSVYWuTHxBMGEsUtJZWUR7g3bjQswC8JZ3kVzzA28ZzsPpAppZ42Mb",
  "key30": "23EZbDJtX9jFunsNYGDZzoGPTTNkTuUqNp69ahAGyTYE6oYbtbYjgrAikZHxw9YUryXXRjR5984nCMwCeNcWhFu4",
  "key31": "4hHaUELExsnWPhA7ZuHnC2d1vi6bHLHk5YyQaLPkRtskvQyubWUGZFGyETSh9mzNUVpFqibJCugtyPZDWBPGZnb",
  "key32": "2ozBgNGPMFBrrb8VfWutKhBAPKQmLSbxuy16H9L6AaKdqNKTmwb8AuTPbXkBnXeQVQQFY1s655ntBtuytirKEJ6x",
  "key33": "Law1mc1jH1LNPHCXjRQxZW45sTahKi6bYjPkFXUjbVtYE9Dx7A1jt3Ygap1cbAtvRWSz4GEMAD1dFph43jQD4EB",
  "key34": "MEvGFdY3VTApKMkfBZkMju6xhf4xqurd6UtkDVKFcwWixf7JasMkEo5otCYjGhgyTS1qbNBC5seCXxoZ19jhgos",
  "key35": "2pBBVUQknpFzdia9uCgahmjWNF4qDBMoZN2z84FFKgrVo6ZfbhedKhofyKcvWi36UF7ZChwEQ1LCWQ4rLkgPYdcT",
  "key36": "4n5AmzPWomVDPzB6wqUZR1aVw7ex3UAFXfn8BPL4xSUsAWqasLssdAaUFWuTmfvjwRaVvP6xyXwmAhuqZsyQB9bD",
  "key37": "66Juhq4zZQCMv3BFifQgJJkc14c1f2kB3eTGt8RdxYKCx7ugEk4Q2zVkgyZcwcBJLcdWPYnnZLovoHWhvE999tYn",
  "key38": "3PmKmu5RCFda9b47agXiXutvvZRWe4SrYgoDQ32j9UY2LDi2Eb4c4EDAMBV22zzhK4K5QjiptQ2yUdurcUY9K3gi",
  "key39": "5czXJsouhK5bmdJpzQNoyyGcK3Q6u59KyF6fPahEUmJ5jpSFQ2XHdf1Wjm8tr51TNz3ivnDQQfxr5BGSumKsVLTz",
  "key40": "MFtXGjVXdA6N6fi1WwnDsL8rnFgK8PZUwkdsa2CN3vEf9seXk4JApPxKTUJEvLpBsZE281dYFP8EQRb4P2DnUiJ",
  "key41": "3UQa21zciQ5ie89fePN5cibcPdMVc416Rww7iTHYEJRcVF3MR8paVYwZVT5NXRHhFfGi5sr6odPdH9fKZKgNvvCc"
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
