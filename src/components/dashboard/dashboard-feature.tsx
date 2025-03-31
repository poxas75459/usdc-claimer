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
    "2zRh4v9DiFqXqRZRGQubqihSxPYEk2t2RBoPLoGpPUbH5D1EhYay9FtexRM8s36fPmMfXzYyzXTrXgfjFbfbmFZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwuUXk3Jown1wXNc3YXZ3yKmambQgPcnuxZ1jB3RY7PbXLAnLYunQ6YCRv3v6pmfok5khKHsrYxjLSNLcT2d5AH",
  "key1": "2U6BXwhzUQG74wJkzVmLZoDi3iPALB2Uo3zzus7Ud9TKJAPpLzxWXhNr3bTmzCSz2y4LR3MeNEKMCMW5WSvVYKx2",
  "key2": "4nomYwLRm39NGswDEevXQU7dkrxj6QkEAK8xmBf4phwY6zv6cLA1eZV6ymm66hLXVw6qA4ysEj6RosQqFPNBMR3A",
  "key3": "KeUdmqPNUPTRoy3nYbBLMJpsX8FAMuPxi9LMxsqs3cxQRS7ggteeyXRzMTqxU3L2RysRKt6GVBg5qrW5czx4jq4",
  "key4": "4L5HDCKxBB1aQk6VG2wteAkzwkag4gdbfNwGbaGuayPUvUHDe66zTk1Rr9ASxZAG7o7zfccRW45gUQi9CJMhfXN9",
  "key5": "5edfJaJMknSMA6nwqp9SqiviEfL3LJnfd8yFoNBsD18LnACugMTw8oD5s9vXFKEdcGPKmdZ7kHcwMy5EkLYFmig6",
  "key6": "5JtJU59pzKdTDE2swJZEe3d5n1rKrEaqWz8h3zTvczYzQyqm4fakmmU48MLcFzh6FZ3dHiqEejsnoZ4xoDhSyfbW",
  "key7": "5yLKbVNGR5ScaZVnQskwK3gviBG2a3mjWy91wGMMJwpvkfN57JyKR4DxoVEWajotMgCTvFv5xGCmyhzu2F4y7eEa",
  "key8": "2WjvRZUk1YNSQE8CR2zb9tQjcMNVQetexKLuAQPWEoDcRYLtSKShzFZTcHq94f9BRMqKNkS8KR81zz7qdb6FYBTt",
  "key9": "VXrPcQE4X3ru99NmaXiS3dx375gyAhnPiL1KAYn3vhYtVJBWQ3rww8o4BTtzbnQwaqgc7DGUgVGBAgoFmt7Wabc",
  "key10": "2f7QSVmt8h4ujAfDxmnRPmCRfUhpzXGT5k7GWPTqMAAtKtZEVfDhA5kfAKtYu2kGqtaMAcNmtjRHfDUrNtqJSvWo",
  "key11": "2tvv2s5oBpJJGgfF6c3RPjYL1YofEu8gviyETYDx4uHYEtFf8TGzcM6gEDTB2SuD9XzeuFDhEpd5n3wrt1E7efbR",
  "key12": "4CLSCje7rSBQjQLfT6h9yee35WMNhKXHed3QaVPhpYdqfY29EdiSEmvMa77GwocreJVia1BPWq3o54RFSRqR6bHb",
  "key13": "cJXpVtts9eGvvS8HjHGLNTY4HdU93rSTPdZRMKWuVMcfsEoh7TykAiN1XrCX3PyMfaqnQ5NrtLcBC1k2V1nWLoM",
  "key14": "2oBxu4o2EJdyGmT1ih4iQMd178bkhjPhMUDkZ6MnwQZ6yEtExqf67F44f4F8jMd8hnsFeg9qea7YE1tuWobH3e8M",
  "key15": "4mtK7ifjGaFJS582rSVmgYNMJHsSDohs9MDDqU2ZMDhHvzesRb2M26CdttTfTq1Min13LNS1ksNqssTU7gebZeNP",
  "key16": "ZZp97JYqPSQDw2ZnwdC26P1vYTeSyqt4QoY92Yi7RV3VAuaKXpNaVMFqgm5QGfFbDY3x6yFPHTiJ679XvaEyTaD",
  "key17": "SW3XxYVFsVvhM2d3iZy1ifH6oxwdPSG31J2Us4gguJ7Z4dTrNT7nCVk6DBBNKD3qLdXKD4uLLccnqHe1H4XmFaN",
  "key18": "42xmfM4VtHRzahLPRUynmoH6K1vtAQw6t7zdvTkTFfTV7jiga8CRrGQ42qP619bX3dwNQMZd9UHMov388pjsDWk3",
  "key19": "37yGoEYf8745BDWhwD17cy5WUSz7ZkTsiBDhAaqWb87DfQYamUcrSS9X2YY5oLve4FBgohWyWH6hR6Wsivqfst7x",
  "key20": "5q5uzhAKNdnCaFTU6WMNC2YQ9da6dibaP5CmKxjxf5rdBiWUbWGTYu6pSwHfvK7njbnetEGCTPrThx2412XR5TUS",
  "key21": "aKJio3tJfq3b2AThSLSNdLCyZCDJfVz1TvFf5sEZ9kycoTesQ2VMhi5bd9ZTEnxK16RVFMGukjmBwSJKkpdCWYS",
  "key22": "5Wnikc2U4PME8a7i6RLPLcBkd1pqptQRZKx45FJLgT5dpEk8RMDrW7T1MbApHyrQ7kEgkVzr6PsHpJt5CWyw2b1F",
  "key23": "4Yx4oRrApk7bgsAiSr5bqffP9sNVBDCcoZQ3Yw4oTnEJfNouovr27CgoZnHhhFv5sKqSFQdeRK64W5fjBBfZb7ku",
  "key24": "2LWVJtSSyVD47XwKoX7LRYMcwQAVXJvCUk5ZfAjhLnpvTtXotpALcDjvf59np3NFLD686vXKpMv4LPfVPPQsRNU7",
  "key25": "2WJQBQtf6FJX48WGEUKDiHuHLFE1DQpSrABJhkFx7R7cSY2cqByG3RLYPj34xruQmGWrcMerKNAbHQzuKS8Upnky",
  "key26": "4h42orXGDY81AuR5KHEwhpZRhX214AmiZ3L34BjcYNboVR2rXUfwdK7rQWGdZ7Gdg73AZGi5hDBkFrna2XXP3JF5"
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
