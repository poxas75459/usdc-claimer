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
    "3UvLE37RypGVf6Sa9hYx8Lk7Uz46SUCe4VVJ4tssoqyQfvQF3DmiTMhsVMaUQWaSJ8zJwj5TVLzMS7w1Pb6PpVjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTMwtuKKZkHFujSj3xLFDrDPomi76KQwdTGdpPEUwmBR5wmDN6xPjHSh1ecfT5rANR3yk3bpzFCohEqmSHmgpLd",
  "key1": "LHJ5izamSQGfWGZbQ9nqZJCyN6FxvP3XDuK97ukCw9kpisRjaVEuYQoC7hQWdyfmGpFwcT1w61yxoVecFam8v6R",
  "key2": "3VGh3Q4KJhA4Qa5m1SUzzUS3Q9Ue9X3e4tQcFMN2ppPHteNuJnM3bgvxqQXjn5XFAoVZo1bAXAnRDNLfpvRyBgjm",
  "key3": "D8Fw2sHoPQskn1pUVa2Qj61q4eyswm3SwqcQh1gifwYXBDAUviGpaY3YdUTeX9A83kw44teZWFoHNLmuzba8xkP",
  "key4": "tqN9XBzb5K4374QkXAxz2f7Vjz8UstYKpARNv817g4ZJZW5LpMTWTzUrKvxBeNNrVcjEhsvmUmQzSLGTWE71N22",
  "key5": "33gJHTmppunvdq3pJv1h1hxGGwho1Exk9ME8dHE2y21cq5321M7qDNL8GLqwxtoSCZJrZAwWiJkM9Hh7x2zcVv2R",
  "key6": "rafWijPTVxLaxnryLJ3R4ykgERhsqE2BrMfyRjDUHe2KY5KtmEzLgT29cewcM6gXq3FiTAkCJcHd8qTCzML4gby",
  "key7": "2sz94tWnCzzR9jeP65A9zxxCmGK2YNeRTCPke3HbF8wb6cKm11Nq7ZUDjsoPLoY2AhSKk8vLm1wT4JizHCeXk5tb",
  "key8": "yEP8EBTtyxHUMxe1QMzX7ZYkzB1XALJLEKvuEFYXjiH4XJZLqFBo3DQnmNyw3bkKt1pFeAcdaSsHAT2AQPgoSUp",
  "key9": "56x8zXRwx1vxbTEXKrvi3h499BnGPu4kno9ysYsNKkw7Z99xGhjk2tBGo5UkhxLfQcjxTNcu5a6RYqLrdEc29qni",
  "key10": "2ksJJcJjVAJ8RbnJcuK1aYkCdHwbdS47wpyBmz9CtNhyvsxF4gQUL5jMihv73cauMxT9vd8zaSmatpNfWn5VKira",
  "key11": "44Y5sM3Aq5xhyoUVNYEQeNzipcNYCBDZ1jwFovtxtA8bmDoimJotwRy43RZbBd1qz8FsS23BxDdGBJhwMg4Ayhes",
  "key12": "5cb7KKBPvJR2HAsSVKshoQakM5TikP3FWW9x6FCiN1ZiyxAtsC9dAzvbxZgqQhrEiGdAYDw6Znk9zmT1JLRJ7PB7",
  "key13": "5QnHuRNSe4HCw71W1tc5wsS4T4n9STNF4SHe6ruQxAsku3rhr7QRH6zRZfPhEGRurhZWuxqLhsdsHYmCUTMUyWnk",
  "key14": "42ueTJRKLi1oLFruhYjyN1BbRZ5NjiuMrJ1dCQCzBUSLcC8viKRa3jrNBR82carYEaJvhnXLFxa2G2xVfVrHztpc",
  "key15": "2V2GkJHr2x6HGtKTYeXo5cDNgRViQJXjgzezsk5yqeXgjgCZZtcYcqXWxiKfGQGNqu4GQjtcscPMFK1qAWYZqN6B",
  "key16": "UPDKwBKVEuXLa8yF5Gz5Pab2eyiycpKTFyacmTrUEJcAgZVtmvT9dcm3RaV6EtFLmmAEcyrxvjeRsNtZqBEYkW9",
  "key17": "5H5k5wjPTafYThkQqifxCGjP6Cpvbe7gQQs27xNsRLLts3tKJjCxroat85w8T73zGRvT3W8nEoKUQc74fmogQurG",
  "key18": "3FqrTmZ4H7ybQTDcQEvxyep5ERmsEts6Kvi4U4hJt8jdo9tBPXdLYUktigZknZZurK87nmwSqXxmCPjgj9BZScTk",
  "key19": "2YUKJiwgpvu3xxeoxVvpii8H7HcnK3HKiCC3KH1iFWHB5nbxrYoRbHLPVxZcVhXKfdhajjBky5su2c2pDEaCKwFd",
  "key20": "3MEV2Zy5v3GSy3RrhfMQNPPHHtLrbNFHF3iCVf1ZnZ5vDZoF2tmCR7mC9vdGWr82Mm5jeNJwGmLqsghRakiHJj9E",
  "key21": "5J2orzVHPoxqvLCfcgz5fK5xZmv6aNvQ5JqJiMYnHEangjsAGexr1ooiQNGZTe349gt9P5CNbY4Zn9oMYdFPi64B",
  "key22": "5CXazwADgkJAZt1gPXme5442coxaVugVLbRdjeuNpptpFnsCxCRtotNm2tiXxTi5HA5sDjWCchCqXp4THZMZZAKy",
  "key23": "5XVRQ4SD7CwxMoDY9pGys7SExccWJfV5skq6tQbVW9WdJQRnbVHzy2PyCcvBXb9KMtV2aXDLak4mrdGPf88wNkR1",
  "key24": "2qufs9e3HZ93zHgM3wGQJ5atbm6TY9famZggu4XPxhtqsJEJ9aGrNbBcJJbwj2Goc5smY8HxpUsu1yCDd6DNcT1r"
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
