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
    "4HTxeVsRZtW8cAayGLioYxAUeBx26DNdWNXMnqhTdW1xDERvBQfc3nW5QPLf44Ury8eCjvSGz8R21HDNnxRzB86m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXA6RGvNSD4jAgCBhNzZBGWoy8M9yaThTvbt5nXZ39m84odRAucjkk6pDjFdFTzNzRTnXvmH2KmMryQ16VDr7nW",
  "key1": "5yCUPZbLvyHXuwy1bPXyS6ujfizwL8SKxmYchGnQzuxFyujTm8spSH4rQa98nkeTCmU2p2dcZczZsv9EDW3c9j9",
  "key2": "Wq8CBFM9KcD3P2h56B1ztLdwSDvZnHwWBhNHkvSicdWVUsfbcwZaA2vxk9fuhhM3XLjDjNHXRCiAgkecYZSmNLc",
  "key3": "3RGttWygnBbZFP3QC3ZkzSu7sAmZfesfhZ4eSyefVGPCeW1jiJa5GKU1483662DTayt9HsuhpxAnY25zNcHeZfpp",
  "key4": "5JBhY9jqeRPn4qiqkTE4PcgnU7fmiFGghdCoA1PgZzG1kywDy2Fa7gtGfSa5dsTM3tcbtp8BZWNPE857uyYVtdww",
  "key5": "3P9kBNYgrB7W2mkLBNnSBXf1FBsdCBXXGP5MNRcnPfT7djktrbRUPcNKRWM6GwF2T23WWjADmWVFdV3FvupNZek6",
  "key6": "48ReYupTXaXHguz7Sobf1YwuF3P67u7LYeVYLxKrDhVJVJoC2283Py7XPVZBiYHwdRrw4ojzGiwFiNw1i6HBxC9f",
  "key7": "5BQXxrEhENUNp7Mv39fSE1QwTFPQhcRcEWbkAaPY1zf7NfKcYcq3tQQMjpbqajVESxrxYhduduc56Ub64oyUnhcy",
  "key8": "37yKM87pVa9T77o9EzDTbQXaoAu6eGyfW7WGm7f35gfD7QRWQQoGoFSFv5W9BVcHFyewyUaVuGtHHSL3D9EN6vf9",
  "key9": "5bp1aieHGaLZy2GXuoMwwXXaBVz41wdaLDK9dnYCvd3LgR3ufJSLcuDDfSnsJu6wdhetQhe2qFjRkz2xVSKj2MuE",
  "key10": "3whNagFcXF1HnMvAjdB99GBMXhDN94K5D81JxkZzWq4PXFceYn9M4fTPemumswpUBLpf8NJfyWZFvHF1i2vbag9S",
  "key11": "51sTKPxQGKnusrjjyB4sGkrpmnPhVvJdQMPVqpadhxhvCUD4iiuhFByBremETcJSwGbmPcf2PXEAoaiu2MkLyfyX",
  "key12": "62oqa1vGFuVZLroUNZ9wDdwFSWg6h7ubGRT2vfRr4X4skwsMiapjAYGDBaB8y69YmwMXyjWKnCe1SNQn9W51idZ3",
  "key13": "2CaexYFP3Rz13otkBZLAkys3ax9JpemF5z92A8UdET6iPLsX1DYMLbdg9cb5otnip4Gf7QbMHFv7GPAzEooroUf5",
  "key14": "4a3YC1AtN8h6YzrJ488SYxJr8A9YJ5dqaVpvWFnuDypRHQHLuwvNMVsZSLDoHNGakhCjAffxCLn2CmQGqHevpy3",
  "key15": "4Eo1oPnz4RQG8XCa1uDeFrC5pXBvvpBk1bSpmRUdTgYJFTfWLDrK39xGCpkiWrHzZQ55rmjXdEvVFiMmyB2cexuM",
  "key16": "3KSwqBGgUpeQ51BHamvKWW3yaXAgMG3nKj9UJMhLsDBonYxGfqj8uQh5RKm5kYfpHz4XZeUg8yzeb9EAK1S6HJ2J",
  "key17": "3yp6W7mDtdTJHQGqo6z1N3KCWpfHEWTvcH7KqUcW32Y1Jdnjw8EfPzUpiwmosdrkPPoP5hukg1pMv7GFkh37JRkB",
  "key18": "2cMYULZLAYkLESw5mPqLVz8wZK1zMkRD2Q9Vm6CEHuNe8tngRxXhhtRa2kz6KHBC3Q1SgEAdJ27fMRvDYQwG3KFz",
  "key19": "53bkR6S996jLoYTnMHqSBvaXrgreUkUFhDycpPFEMBbBWrsG32SrMtRMVXGEKJWKSgYSfwhS5LugbKuh7qkukqwM",
  "key20": "4iHcbC5zUHR4SmhoWQcr8axqZaCMBny6n2WG7Yi2emhmEQ6BPBmhLQG1M6YypB24RQYwzGSwJDAamMjbPyhmiY7u",
  "key21": "2MccTAZMpSpS7J7S5VqVXfe3yPDZFjqFhQoYJbQ8JTVFHpje5B19FC11n1R63GeT79Rup15Gsr4yfyXuSWzH4obb",
  "key22": "2p7iHgoFskG3xCUAAzebLSrfD3yS1cbn6QXFvjr1qh9EW6e2vo68kFJXHVJyoaNVHPHfY6xcg4oEBHKSA4yw6Ly5",
  "key23": "2DL3ZmtDGF6CmWa7a9BNTcNXGmuckKtv3UxQWnT9fCFp1x1YJtFD4GfuEbXebh4ksYCAYzqpj3JANHwiUgvEsCYi",
  "key24": "2MPdKrHN7RpjMR2Mvy1o8h4LzWvPnBAwzekzyyGMoVRyMFrocGQhDxXYpmxcShzHWbRGJh3Vfk65c2vydvQvvNuU",
  "key25": "4jTkMmMvUCyU5CvvedTNnzqfGwisdjk8o7quJf3EjmrUFYoLNrdwPN9XmtBYtUs7e7QQPf2VX3G2WNw6by47wBzF",
  "key26": "33RzJH7P68TitPwvUucA71CdfqFZCAKWWMEbeu572TyovtKY7RBgAsVojsJ1eW1EZUbX9CqZovz6i57A18n4Kxym",
  "key27": "2Sb4tcc7rKWVXipLRu6g8p2viZwohaxhLDJZVij2SCb11S9tvASy5dWwDSHvG8dh5rG93dutpHh9GBWpb5pCRocr",
  "key28": "24BFWukboQrrm9e9fxStPHJV7CH4cY2R7eLsNKFsyccxYodXDiEBXo4cqaEPzCjAByKSL29MBwtbY1aFGt3YUPzA",
  "key29": "55XP9PtBFNRYRcmXGUyZZ237b6St1tUFStEPj1f21CyD3mXPjPQy9jb9rE8Zm4z3Q5BvxrvTRhT5V2B2vp36UaVf",
  "key30": "2NyxRfaDSgie5irD8gWqXfKtk2YmnH6pHbzogvqmHS3HPGopGYi95b59rzTk2xrsMwJ2wgbeNQ8XcFK7swQaEy7e",
  "key31": "36pz54hdKQY21qB839PkhVMXzFG5VoPZPPfwcmvRSpimJDDX3TGi8tFRbvtfDsjmKASKrdbgKdSJ1J92rMFbzC6T",
  "key32": "2gYhMbVp4N2uJrwh8vr8vSpWyVtE6nXGwCXPgq8ghW6jdoDvi9YNTsz5mFot5kV9caPDnwJziPM2fdVWtvfREhck",
  "key33": "TAaDerC3NaXJzB3Prwq8bEwgeewpmi1MR8TugFkNBxJWVeAYnh1mM2gD9ut26VfCgwVWymqa88TNXkh8MFoagKi"
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
