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
    "3yyVUfcFPjNPj2vPD7yKP19RJYRqbDCd66xouCpxGijayAEF9Vncx7GsE6a4iN9xDtLrmqrts42ajXRWHtmjCeUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39trCCXetFsxi4ZXBrbMuYNDcZ8RVhNu1ARWrQzd7uyeqAP3pikGU5D4M12Lo8KjKESbxRjLTNTm76hC44A9wkKb",
  "key1": "2RQnDw7XnPFgx1Y9rrBtHS2RSAzFyVqySc439qA7g25MXfEM6yGRaKxy3xePqPAkc6BPmJV2S1tgZskyt5vXAaAq",
  "key2": "5kzgjMSQLKRYwrt6pmnMrM3VcR36Ynvmzfeka9vTQQi5NgSxawNymceE58uWjAAgNdng8hLd8S71LfY4UXrAdZ7",
  "key3": "3vXTuiVayD3p4n3BoASB2qckxZUUaQ1ETWJWqHYVLyFvLQjGkNHD2sAaJ1czg3FjBPyZWwEnrLzQ2X49NKE822nx",
  "key4": "56ucUEKHj61i45pZbaMFTLiTy2PgonGxyJKjMsY6j3GCKVXpmJaVXUQjXV7vugULWicnmkQybxRxuYGLVTQshtZF",
  "key5": "Vnt3YsR9xcbYNK5M5wfceeV7vpNZPLX7Fo95rhoat4AFp73tmKpafimF63qM5aUaRSi9FdccaazqggaucjM5LbY",
  "key6": "2VNNurZVE4a7qZfexDRzodaHg9Y5pVYAtj3MTpuFD4CcEhkfQcCsMVA57fFoL2JrsG7YTK3HYfGo5paFdV3Vvwwk",
  "key7": "32vw6NNyyioCgJ3vsjZR9TyEjmnsEsSCCTF1wvEHEd2E3JXY5nQYrQjFg5y3GogzPXN1tqX5ncVFxtfUeNwtB9bc",
  "key8": "5g9RHTSxsx2XWN41rKUWbDQc7FiCtfrcntB2X9ud1UtC1YveJhXp4hcibrfqckEBgpBpmoA5WhCrgdynNjNRsV8H",
  "key9": "GrJEgNxQS9ybEorCGgXzyVAgfteRmPje4771TfrLBTX5DoKmnisQjhuwQMpuSGyeFhYhoRZrmZ13a7hgSntJeJU",
  "key10": "2wGntGC5s3qRwZU2KNTrLZAkcqovNYmuynnznrETRCkwxP9WMCtpnqosH76Z3zWvKvhZUQjEVBJn2XageeXiMbtj",
  "key11": "2rE1bK6wisfmHFdBsjExxWZ6H5CwwJZsXNXc6LDHLqL8KGikCLpfCmhaksWmZsDNBNQdhm89XbtzsQ3sPevtoRee",
  "key12": "itrH2WjGNM5wvfiRb35HmkJVMXDJnMeTKNFYsYrVaFXaSZSGUX1HUr8ZKqGVG9rWSGvRvtSFxjGFytQLizXJzco",
  "key13": "4VU1F7rCnY6JQvq3baBwHjvk9tZZdwW2xMS2fSJgn6Aia1oNQtvSjgP7jpsarvMFCAJysoUFBin3MZz1cmveazkP",
  "key14": "244rC8CmJLoC9CHHtrepUGdUnUaYeDEDWL4Ny2MZ1BxTWEfZt2YgEeemW3FumgKkUjnX8kJQbaaLk6XRuQE5jewu",
  "key15": "2FmL42oALqJ4sBQsVrZdkdXWKN3ugT2jCqVGc7pmE7EtDHLVC2GG2QSbQTV5qddEt59qcqCGMyF8cp2Zayb8ZSRg",
  "key16": "5rxTTqtgkXtMnx7KJVqQ4pRYhU79L1i5g6QZ9DwF2Q3HZUbXLWtF8WPJrVMeEJuofnmKGyHjWMbHKmgT1B59bgBD",
  "key17": "q1dGLemzT6sBFnps29twVGasbCFDLHEiWRcxuS4uBcUaybJ81oJw7fuBrEDeDDVEyq5Mo9d41pSEadRVpG2fZat",
  "key18": "5LsGdq5MSv6XBkBNUiwSgvTMdAwVeimBRHD7kNVR3h9qLqn7r2gbjFhgdNkUa53Q22nP2tZGAaRjgxnyabyzH7Md",
  "key19": "r7bDngxYiDSg7U7bonPGrW6RPvzFyZHj3LgAu8DmHwV8DAB6c2fYFSfostQUNaYMmqFC4CgdxbxDSgmeHtZrgt2",
  "key20": "4kXK332NJxgmyUnD68B9YQJGP6xPF8ePirj9AtxuWSa9AKPhBPPY3iwAKa4N8M8o8zpeVVMgeDjFJ3hbrDMan7kJ",
  "key21": "5dgcDDrzouNiuCBFoPYprj3DsvJHeJV9M38oLq46tWM6884xUfUxwri6aHUjd3uJ3iWbBhm15JV5CGJs7PCuzNfK",
  "key22": "24LYJzeV7KEgDCFNQRFfs6kqJg7HjfbtsBwbtqKT4bbzQ4fhhXiJss5bznBQ4vvAB5QwyzFGgDwP8Gt9pU9iPr8v",
  "key23": "3jgsxaaBjDipDzynAov6GN5hyuUrwEji96xL2WRuob1mskFaoz3uijtWrVy8SKGD9M1kfgczDcY1H9nBTj29FbpG",
  "key24": "3a8efM9nyP1wauYnxAoZaCBSjA9A5wT4epMxHcYLahnDay1ZcMad3p5EeKPD1j2JFLfWXLHzL9mrXeDRdyBhXL9E",
  "key25": "2n6L2txHpuLG79sTZTgMDVA8EMyufVQKk28FtydnQnfKnQgUuLQWmXsaqJJqZ4FKv7K9s3zhm3UUbVLKskan8gUC",
  "key26": "5saF4LJWVABwXdEFDtLT3gKys6ozRENZ2g7q1PvusREMWqWP9E6ga21E4nrZJEh6JUcLJU7oH3otFsRdRg5oJGXg",
  "key27": "62s1VFVRVFVKuKFoG2Gv4mCuue2aG2Ate6RZkfzZ5FTgt8rPTbGd3oszzryFVvkGAkPUr83Qw25ro4WeTxnik6Uv",
  "key28": "hQrQXS6qRTVzrUNDzFLBg2L4NDBKjE3Yxcwo88KTNoEceJUjwh4kYsuuZKe36qGjwRHo4W67PnCgcMVy84ewnh6",
  "key29": "2p4uAU2uAAncsfGLgNYLdA4DruZsncVVVbgDqD6qCyPASNr1C1MZ8njiYTqUHjAXNecKRRRc6EddEhS1BFFMXxEH",
  "key30": "5nxXA5him51tbX4MMPbajcN6GFUaiCDPSqiddCy2h38w2tGGwXRPU5U2cJSQuCm6Xy4BoDQjyREzf9atHUCZw7gb"
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
