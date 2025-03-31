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
    "5jZqXeyy8hwmvAz9V5x3fvMUzZEigDBqvec4Sy7k6QbLX4DDjThApPjgYC76dKXuA5NR6d9cNSnaED9umLvjVDTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dykdPXtBHPEyBbpNguDVDMDaEZuEFgnqe9oBkqFhBupZA4URPMUagE21vCtAPa3oafboofYoUvTZmnn3moJ7F6e",
  "key1": "5fe2dG24S7LzdxAsZUbSVZYC9aBmi54D3ukZs1spRfqSPGWL57cmhzP64Je5M2NiVuQVXFWysGfed88dKLv1hC8y",
  "key2": "62KkRXj1ryR3anNierT99MmLmfHxurmZ5TX36vuAuDUUZfpbowEy2qBaSA98nanX2jjXvESYeCgsaUPBv7gzAZrM",
  "key3": "5LAYfUWw7kzvTRyVCKopo5eprWsG6UqD7o4WaMWsjpmYjzpiVGYVE2ms2HHcQ4NUivNFPpyg3Bz9jjsYo5vAByg2",
  "key4": "5A9zXyo2VZo8e7i9dXpZBHB4DJFyMve4Xry8w1S5UhNYBAWuNbxb1yo4f3LwjhNcPgYcZXtd9hhVRwsMypEbmNYJ",
  "key5": "2GXTyrPNk5UMLftRi4JSEwSMVsvP4icESNdf4i69oqrqcw2QFCRjFLGHG9Kbfu5j3ieJGokcRUukegp9madXgvdp",
  "key6": "3ZM2Xu2mXd8tP6bn5raPcV8L9Gx9H44v8p83Kw2ofUC16HQr94AX219GFMGoxAzFUoSMkuZ2Ep1wqhbzdLNuGEQM",
  "key7": "55f9kNi4dq7XTkYmzFVajJRcvpJE8ShLrC7Ym9xr9uNrvobgcYmicqr3vUmqPySybrhknrSWP9sFToH1vsKc2UKt",
  "key8": "5Nth1t1Y2zTyUz1HD7RJ5nf2sbcdDiPTNDxSa3ysKvF4qmYLtA5VWDJygSBzXpFzv54ARhDPbVwBJJE325BaVURf",
  "key9": "3syjwJ6zUDjye24cDUzEUpmSC3KPkNrN5yh22TrYv9NCWXHGguroFvEYncQhiGNK6dHMnDxSczEC4zNxjmemkfdD",
  "key10": "5RqBhrUrathw4wSb94LtKJvm6i2soa89ncXaBCs3SVLfuK3sXrskiW7T8f82gV3kydCd4EduQdxwcRYhNJQsFCU5",
  "key11": "4ER5hGXYZPcodcHCwBCfk8qkhEn1gSwh53t6K7hNvsTRZazk4BBgd2rbUWW7mxqxwyRms1q4LLNeiTmDeH1z3E3Q",
  "key12": "3pgAQy14ijYLSaVHDPU2Ce1xpFh9mTgYxoyBQJmVfDRUdkV1xKd84GQo8zjWtEWPNWngBKfi9Mj8n28Cm851EWBm",
  "key13": "4nJrdjwkQgQsENoXy8TeRdEDu1g7BuipJvpCTD8SDSKU9F9LwqCBZTeBjgZPawq5rEFbTBGjRPa5c8pbmkkN74Sd",
  "key14": "PR2mswTpjyFPtdw2z5hqdH8K8EEgZqRgbCZhvqBxnxEjy3wwHJ8LfK2WXRL2zi11M3dCLSxduQpeWckSL3wny4x",
  "key15": "2ME3MHHqmN52Fm2MsqzQ9Ks3LgRRNxtcZsmHKxydenCgDb7BPkidgEH6eHutiY1Y93uSVQ8ro5u2evT5CDXqj7GN",
  "key16": "3ow7GxUn79TGPd1dXMRncjxpAT4rymCJb4HDrSufNHdogABQstDb7g8CPeEtZ9gwr58DiH9E984wKLGPtJvcr21Y",
  "key17": "2Y4m9wZNgfLxzcqxxHeBuBJ6fm5ZhqnEtBRdk93fBNjh3MjC175hBkAFJFmkSHTti2vzdBcjkPWjA2jJBoqufxJE",
  "key18": "wHMQBAxfB8tp61B4rKPr8ssxr1k9wXPptpDsLnTidcK4MWseT79jne6w5XC5DKAdQP4NPRSfGm65PS4HbwneCA2",
  "key19": "KwnnyxHhjjLE9sWH8TKv3DWgNXFXufDKpckrBTEjJQevb654FmdGXFAyfDRqPuFYpMDj4Ud8QNnM7BxdThXjVWm",
  "key20": "5dvUBwJNSTXcx5QhEJCcxkf7HswjnqF55Q14kKsgKREgp4QPV93L2YpvJS6HWy8Ka6TEQLEuDZovmqp8zVMNNoMM",
  "key21": "3GhRGSASbGLgDWYVMQFb85UhRDYjsqEFmzjpp17PaQc3W5SkzrgSSuCpxHMkjAfDZU48JaEQRPDvm2PJzqyYEfQr",
  "key22": "27D4uxvS26h6rxWNwDUU1GytL9iVDr6GKcBgVrZQWzTtp7R3awr2PNbDH9C5EkgDFTneC1j7Lj4WKjjLMm5gXAwr",
  "key23": "5GLdPigwZr2dGaiyDPHhXQFXdHgebyTMCb2GYcuHjbYQdHJKoCTcKgne5VdbChWgdDPr9QkojTe8rptE48zcBdQj",
  "key24": "9M3LGGDwx9LuRujNQDe1HWcFH9fQAbRz4qtN3dkWh6Ehvy1CGKZCckCcNepcw3REHReK2gikPwJMcmPwcp6aoew"
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
