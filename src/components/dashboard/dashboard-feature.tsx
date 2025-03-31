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
    "3JyRWdDDVeLbaaKys6H1K1ktKdnpzCdJXN2Q81tHfuvZmXAtsyz8FoDy76hggf1MWm2wEGvMb56KnfGWa4P8jrxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQ9hFD1DXqrb2ukYn1sR2ge9apnUpWZWKN1k8BXzGUWWyMwR1xzw3SmvzdNjLLhx4y55q6UELCUxHTJXh3jjTx2",
  "key1": "2FkduYt44sAZ8dBdZH3BDocNVwitcGC6fLoepBjRHwxXfsEwmTyuy4LcYBBCxbTCdKTG1UzsRyjmWgh2vbfamQtS",
  "key2": "22wCxCfvJyJxy7ifg8xQqkT3jBPkyiZodNcX4PHCdcgFpZt9VNRz2xbcPcJBLrT7x7MY3eY7kWDEgz33MJfCz7kg",
  "key3": "3MJYhRNq9V93eKSG9HTWAFV7uHKJP9ZVSf2xHy6yrh3fvc3xq4NXmVYNALWugi444K6f78Uzut5JB8ZmegFymcX1",
  "key4": "2VVjWQVmg7R2m8bqHVJTpEhrF6a8LP6DN1Vfy8iLvwkSjAiJbBwk5i4e1cy27ZTcTL3ya9ML4oXaKxV7GKCKNKf3",
  "key5": "2Zkc1MTBJ87jgoxbHKYrEPtUgzE7WBrHNomoQgegRBHDhkpbL2E5L99RMdiZQ8tSz3tNHSBsSLb9ggJVr6zyhDdm",
  "key6": "5uskDUVmy1egJdQgm2xn6dZpbQBresESsHCd3bSVp441e8CxPugAmRKCNAaFmhAc4s73nW4Ne6tCFyYvxTD8roND",
  "key7": "4gRCRsGhq1CcYYbtyhazeswuf7axrBsSFVLJz28ZEdrzL2RSM6ZQSpTfoDSvTcmhc7KxjeN3fmH14GM87yXGZVuM",
  "key8": "5cnVnUzrZxWEjFKHc5ch8Qo4Tm4WCtS2NNvVs6rqug8tuwWFiQEtiq38bG85x7oomwaiTGF8gUzuTKN77q4iqXqj",
  "key9": "45tCHwHqeYLab1wY8ZZxwmzBCBJVwY7BTqQdLgkQqj8Q4AfsajyUdqj7JzrG9CGPVeDhzayrdVNcDKLsS2AnN5Rr",
  "key10": "5AEqfRd74beXvgPQMwXtN1pLYp7z5K9gnb8CpGhAgVs6unyHdmd1HUy17WHHXAWRuqqekFM2ybihzQZXPmT3qkSQ",
  "key11": "2SwQrR8WjZ6WxLai599CRfpGxaB4BcGvkQApXxtgef4kHBmwxmeAguoa9Znj9Yp6vTdWC6s93DpGTARkERrYCe5K",
  "key12": "LnatyNwCjZFL5gAPhhWdabGMo6eRt3ejkJGtambkTLFFj96PKr1fwfkVb23bSqd6j5Z5TCgYEjs5W3hmNSr7g1c",
  "key13": "2sJDqrNaNK6RC7fDyf5a4cbAJPC5CgfNLCi7rWL8fCjLZCcyAbsQCyy8bp7N21kr481RicDtzpwSkN6Jcc6GsCbi",
  "key14": "cpz1cDY2quFK7VsNmKi5uacoXZBvQSKUfaQuHokmNKs1qUXYc2uJg5khGy7VYGpwxNZ1bdwdQX636AC89kLkN3t",
  "key15": "3JxTUuxE5mtRmeNs7Mi4F1kLwmSGDT9ZhfEsg7aTDpM17futefRuTy3akar37J2M48wVVMnT4hP6EqJxSMu5U5s2",
  "key16": "5TDMKbtUTyJRKZKLBH4wRGxJ9uH5Rp9kHFky1UPB6bMMJKTVWZ1UyUK4EE54peVuQGkYJVrAzGGWRBw6euBB66ik",
  "key17": "2FrGxAkkMjihWGGDhiqnc98FoPCSMABtcag1M3921dMbdZYJAv4tkZrd13dBiGfao2VLwoAR2FhTHc8bKwJCEXuL",
  "key18": "iLNLaLnYwm2YqVbbgd1Yp1J7ZPtrRQCyyGZCkyG36yMSDNCqc658cNWawfyi2axz7wgKLbjehnyHWSmehGUMxwZ",
  "key19": "3dBLyibcPHnAPkLG8WTnsnD43aneNhNyMkFEEq9PPihS2zQAVy7oKSiyAaunpR1THbCgvZwk4Cf4Dz6Prcf9Dcw2",
  "key20": "Etk3RybvqrUjF7uQYq1qJ7kkoJUffGmXeUXyovgCftPF8kADUPkVK5t9keoPKk5VDkAEkkPSLH6hftaVxGACZFQ",
  "key21": "49XwfZScj8oaHjYCcRmVKTdXURHCAufrrJNxMXXKbmBz43EcHvyCPPqMTxJF9wf6pAx3xKEw9ZfrBMatAbwiDXKC",
  "key22": "2Eg4Knb17LzFaALfHju2jEPDVeeykrQv7scbxbu8zLpjusc6Lfh8rHa9Rf1Nj14wffhNpsJc6cMJArTEcBufLcwz",
  "key23": "M8jTXMkwDoSC4aZSrURpsU5yHmj2HrgmHcwp2GwzCLA1hPYzjmgFnvNJSNhunsjUgjSimFbhmjdm927ZHiUxAUu",
  "key24": "2oiWx6GLLcH7Gq1H22h2mnNMmVPuMgRsbcCq7qkZ4tjpJRTBVLTBrc1oSPMyK2PZRcZDhASnafqQpj3szw9Vy6bX",
  "key25": "3iXRxP72JNxVwQDQQdZ5BRjZhqxRngGJV1LC34fnKeqmkKTg9oeKu7TbxtPMLXChjfmQfYAe8Yj8gDaojqM3V7xL",
  "key26": "4VvWqD4nfy2LMwDrqHLdp2Fzgzk3vQ5S4Vrg3NUC3RW3bxfD5fBLum7C8zDhYkxDp6vqCKzMtyKga7pRbXHkqMit"
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
