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
    "3phHgTdVHWEPUyFpsVnsU4hbuKnknW2simp3WBbseiSPNTEeUEhPytgtN4BuZg6jKQxpocRDkUJ5jGtNHNrcFqWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAuxQ1qCGR6tEvdBpCv2UMaZ97s8cbegKy1osttEmvdkJ7S7eBD6xW69yqzL5Tx2naZg6Uvtgh43DrhFZYb2KWV",
  "key1": "4qX26D1tSs883pft9UddoiibGxiakPN1TESeUsQ4z4iNaD94EYhY2LT5cfNtZ9H1nsJ7g7pvQa7KzePzDoTVDokD",
  "key2": "3dRKZqhX7ohnfmP96oasiYXNGptVX4aWGYJt8tjUstZPgRd8ZkWwpc9wgxX41XYhbrChazic2PjKVGe3AnLvsiuW",
  "key3": "4NjV1o7e2TXrmYp1iG8utfLR5CLyr9B8CsEqHyb7HKwoufJaftsMCvQWKGtjE1YG29bjVfMvqVAuLoGKTpU5YGmy",
  "key4": "5YkXnfr15BxT8Nt412FTYUk7KXM9xY86VD2yG3iB2Y3moTUjKtFStrKTVRCvjXXBSw49xV12N4drjqNhdNjFhwRk",
  "key5": "38cTA369NJqYDyTGhbonnF2xVeCjjnTErRvBjFffJvD125jArYZgfCc38bwox5yKD2v9Sk1h43ThUEuVkz6bfKPL",
  "key6": "5GMRtzX1vF3J4sQRZpB8JFUMrj6A5p2Fvc5hJjn6qAD9hxQYdYLF1C4NTFmww22amJEkQyN4jyod6bPgHRoztHc9",
  "key7": "TuiPCQ5TkiSH2MtV6GKQkeRKHdQ7KCyuphVcJx4BbBpyytGrkmUcGaEJJWQDUsuxMkaZ4t8HfmeJEoZYL7WTned",
  "key8": "2Cxum3W5FAEtnmXh7Wo1kk4n4g5Qhw3xJUmr3BoJp6vrkAyJfxGDUy26DfSR7xQc8FiLwh1SA7Yq8SskXvQCkTcJ",
  "key9": "vV4H6amNDyM4JRrVgFvWo5XWCxAkVqBnK5XyLQWuJGyZvePqEsFt6cRPBPXL6uJn1p4FBW1Be3uJ8YXScvNobim",
  "key10": "BLhdC3UEC45iisyCzuw61sTmrojJatVTMk5vRGvCEB8pegGqDV1LDoGdF3yV2ygrDqzfHp379UYeLZ2SD267d4z",
  "key11": "5d2wmaciwTwxPMeF91BTwkkZCtwsysNHo4bkXgjS9fTohV6DmE4jnV6W149JJxSg7HaEgBJNq4xYtiwRgpcrXRxk",
  "key12": "5R4Kvv1sQDxcH7vi1og8zVi23GeREL51tm1AD7tkT9DzQwtJSGn9jFaqew1a1sXSiGLRDNMmBAaRbuNaR3UqS91g",
  "key13": "58nWtkrszktUAy9Dvw1dLWbUqY2BVAXJsbxuF7dRFqjNVYSPWmNBwBdUqALnMQBjZcA5AsPzurwM2psH6RqwarS",
  "key14": "5iLxtk83omWLYFCb4LZowzXuZhvh6giwF4PHD56kB9cCDTzAAG8GupCy2Ptxw7nP6YtpX8eGQzb3tKPzx81YW7a7",
  "key15": "3SRy25cTbuq3vBAEigzMrx4xbmFUouRrmznyKM1J1myeK39t3qGhTZqHGS2CWdLZdJh7pNZ6EeWdK97SPm6yMqnr",
  "key16": "2ChAB7UkFhePFP9aysd7cC4RGYBYucFExkuZqsF5QC7EJS9NLAf1xaf9dr3CLAeURehUmq5SCYjENTfDzWjDXwSz",
  "key17": "gnPnooccdfxyNY8YL5saNxRbhPRNfcCzeJR5ntuvzHs7XzTU6qzDw7kKB5J1zJL8etcMgPHCYHGe6DoLYCC9o76",
  "key18": "4uD2c8WwL1gNVDfMwB5UCv4BA4659McX8bpT6a7knfVhZo3KkXcidqnZLW3WByyUN7Tw5BprKoTGyGBYmUPM4d3t",
  "key19": "5G7mWsCCNxZUmQkDvgt7ujQ6tajDCunBoHVF9vqberu7Y81FfUuT6scQej8aJAZuHCQ1PVnmStQFMdeZ5CJfkZzb",
  "key20": "4aWPnb1cqnFReufUy4LtpQ18KWVDX9Ge143ZUmNExR3zdK78tnLogD8q1cpJt9X2zRmbEfeBAUaBCLkQoRUamiTq",
  "key21": "35rmWQWQygBFftfR7yryNCVhaB7uQCewDJvFYnZ5V7hXAxcuqpFniWA7rZuiJCnMyFfx8Pki3qL1enEzzpq324fS",
  "key22": "3t9jfLPQUhZNMjfHhnoDZFtbxZ992Pzg88FS4aZb6MX7wgcRt2M8pfoAm61b2epZfS7J8ADM2gy7kgdTfV98VLyE",
  "key23": "3ScnFnwnmmX37AcLTVP3yCFCrcSQzM6iN3jacGUeoqYRHdWC8aYvSKLzMojNfFjrSGoP2rM318TWVJXT6RaqWfSs",
  "key24": "4NbDnXmZXZkxAsNLTFSmSqBms2m6V21VrenfRYpQwW5iWmJqnyCPyP9eqRLXApTBmNhtajGdm3oaExxmBy7UW7rX",
  "key25": "3mtqWHHy9YyhGuMHduXXs2Ep1a5tGaDHzRpZzuwi6GhBZ52Xj4x97FwezBWY5BpHFGZoBueBrfNMCfVty5nGoWsY",
  "key26": "44SkgUbXhju9Sb6H7eAsDDeeys27hZwn6soA98YJNHX4BzZqXHMrfye9eRD589PGokagsfQghcjNykdrKoRuz2Lf",
  "key27": "3oNVbF577v7k6JixkPuHHkk3K4d5srNTsHo9WdpedjFBPxspNRfccTyriMJhRi6rgbMtwb1izDFyXeuVBaJ5fays"
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
