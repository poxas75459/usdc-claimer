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
    "4aeamieZ7Y67dTLUmX94CQErjuAr9jrDNsbYP2ny21ySkCSUUusxgB1FcfgrdMdBFu8HvNLMw4RV1GsYG9JbLBey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZE2m1NE5v1eFdphYXbnnfP6vvnuGWKBqvQmZYbzoW7Lge6zscLhcccGC8f4FGQJJbsqvdzhWCbbgoeHUiH18qC",
  "key1": "4iTSuwQ3TyDXuULF3nD6h9JKJvuGAXWNo6dAfVS2unmrtYHHYPSzcjnL3chrsjx2qXkw8JuAovVEcGJVvuju6Z1X",
  "key2": "2iu7fVCKc85Pgy43b4sFcHpn9cutnbdWif5LBH7PGYDc1AJ81M8WVYHQovZuvuAgRe8EmFCzupmE4nNWuzaAV2gq",
  "key3": "YjHQAZSmemAxqspYdb12UKDKEJHdfNAHPa3Z71TgKkdnBqLukNNad5CyDyrhsiyXjk9cXLVHegg7qKZcSi9szNH",
  "key4": "3mWbWRaNpVL7JzKEudJeYSBhWJFZ6dyMFmdk3feMUHRpCfbj6hjcizKqhVzSvU5DxS1w1B8WdxZvLv9LEAzuogcA",
  "key5": "4q3pkY3BT5gDfrEtiL41ZaaDn2sXo6FN4GHmd5LFH4x4vHeLqFn2GK3zuyzFKfhXZmHxvnRuyhh5TispxcNXAjrg",
  "key6": "5D9GL7R42CoNyX13bsL8tiYQgx2zN3rZ6NiK3XWrguPqkuzWNrHZzC3vqusp4o3tkPB88YToWYezU45wPTDzDiNE",
  "key7": "oFREwz2eAEURfjuxGa5NQp6HXmU2UMdA52RExRHYhNyDG8r69HdX1EaLBjQGak9Yez1puLmtrX13mVjwmu4eqSB",
  "key8": "5Cgo3i5R8p7xawVFUswcR7zpTynjAyHc9Tg8hJkdHjrP5e78D6z9FxSsVmQz2Xfbnkv79HprHJ16ZbzUti9H8gkP",
  "key9": "2AE1TWyzWNM6rr67w9kt9gkxDzfVHaYtaJn9CWMRcCaTSce7g3FiaB41LLNeo5Zti5oz3mBxsPafdtiQJkc2cT5C",
  "key10": "4KntWdSEs1kRFbH8NbAdU88DMQ1N24GJt1am1SYbGBixbLS721M5DcH9mLuFh3rK1EqD9gcVYcAbHsHRBhVjfyaR",
  "key11": "5tygQDpteyCPPtxWgQEcTqbEHoBdhGA1vhLxEAtS5E6ZF4YKz5AenWTAu4GA3ALDKJRMnUgqQCFB95vDZvHvXkHo",
  "key12": "3pgoaM7regf7jB9VGYvun3DnRh3RxSXezWtg2nD3RnAAVJUUPanobCa54YQgiXCdDQe6FikoM4MwyiUyg2bB59jB",
  "key13": "2nTraRQJ9hZt4ANi53kmZgFCwEiT5XdLoKgf1Ejz8t514PiVVszoT5S6vXdfSZLzrhrb8FNkVvSWqgs5ocfBopkh",
  "key14": "u2oUBa8mgPWNz3tXH1YMv6Jut8v6tgDJzBiNmTcc3ZJuuqozmST2bWTw2d3TLoi8Y1BTWfYVaCWEiyb8CBdi895",
  "key15": "dxCLcNAMSQRr4vcafeMXTkSw9uLcmcmNg13e4CrNGYreRwDbWc9MryVCxsqTfPJGMaCb8VHtjKK1guXQmJkSUaC",
  "key16": "4zgKdiws91nc81yf6Nh2CLgriRBLVR2rJJKypSxYBTr2VmGMDjr775ow7rQrJMLUvDiqsk6GthPVZbHZnYthgLwQ",
  "key17": "55ar4nCRcxF4hRzBqmN97jCXQ85GUjuua3PishS3qiS8UaemfnxvtTeU4fsJBZzeJaCtHKr7vcWGqENFhUmP8MN8",
  "key18": "3stwXsAswRT5NPpZ561fMeDTDCntSu9fNNsB4RGgfB6K9sjrvPH6NQsbHd23Lkx4Fy8SdawgCnx6ow4xHzYztJRn",
  "key19": "44qM4rXMZHioWvU2BKHwbYcEGk9rvTycvmdrR6dZLhQ88j8ZNLPX3Gv4ceZeiJwWHGDMyUB2xEhNdMZyjLNMUHos",
  "key20": "3SSq3MtVVSF3SjWsVojPxo2gwCxY645Z3yRprDw8UD3iFds6R1c2zfj1rETEKjAmDWwLZM8SwSo3peYJWQk3aTiz",
  "key21": "3Bv928jDnhQ4XzshsJ1cSzmigxuenvMQpTJESnH4sDPJfTJ1wym9DsYFyskCiX3scXRcMA4fowsYoyPHmoKLkTFN",
  "key22": "99HxPvGfmBXgv2o2pVd3rkNnU5MQdCsoCBMCBmbZt2tnxnB2989Dc4RXs2HMzdpF1WBhdugHYxpcwRKsxNXskFB",
  "key23": "duGTFvXdoeeao8P5EdvvY3B7xCoNi9BFG1CUBY8hof4aEsyXpfe2j8C9oDvwTTJEeyswPpFH3SSA2kdrmF4yMDJ",
  "key24": "4V5yQvkh8MpGA6gxZLMJ1s2tDr5pLLEkTuSuCgrMqRx7uZHFS7KAsSbMjEFjXZTHq3aamn6ud7eDo3QnD3jwgQ3k",
  "key25": "2UjtWR61aUZmnDCKSC7ExLGWvGUHvVPMZXDB88buL94qQevR3eGG4NFTNpEiBraeMkoGdESpCCd8p2NKV7NRFDSp",
  "key26": "FrsbrhUSWBKwhxzPyKpooVtGVCB2eRayD7PosSQhRAGrDKCaHyqJTwqutyQxwsEHEGdq589t1zYqA4mtbK9Yz8J",
  "key27": "3VMZt3XF7XBJtAjNet7ckFVjN4BAg6BXVSMfqmz4x4szWFVykM8nKyZggHVDKrDXf15pkxj2Qd8ygj2FuGQM9Swi",
  "key28": "2HCrniRXe77Untpx9fESoHM7kr5LSiuvJ87utVzi1CLMYdP84yqN6igJNMQKmXwouuvgNFyvEpcw2fBE7S1AWnhq",
  "key29": "5adY8B2ixfW6y6oRprvUaLvESaVUxSiK8tfDoHGeaJ9pexbcAH39ZocCrKZJP5JpkL3EoVUA6MGWZxqeEqLUCFan",
  "key30": "5Br7tXTMJA88fK2g6vnJUE4br44Tt4kcRqMPLJm4rV5Gvok99b17DphG5e9FAkJyhjVPwpynAHn7q1FR47sbm6uo",
  "key31": "4YF6TXQJtercxgeo78aZou8PwHQa4kpvyJr4YtNbd3PqSqXxHBgnLQ2vbtrhUwUAfQap1q297t1dG4qwrT2fbVrX",
  "key32": "5XKp5HDVWVN3HZXhpDBt6mPdJevMs8PzHkL8iGbpWzLw9eYKwfbhyJMQefiCxDx9bLmFtu7DucRupodHgTJsmhDN",
  "key33": "MfnZrGD8mAUNKsVUp5uGQh3P153DxR6H6J1Hft1YM4ZM4czz9HSwLCJit1vyZ6yV8ytHdZeof9rysTLv76o7Hbe",
  "key34": "34nN2G4MGEFY3TKeKpfaeiCxZkwuC868nPAf6cW9Y3aeBfcKP4zaHb6vJAJHiY1m3JsCLNgLtNELzVcs65KiKAxo",
  "key35": "igKwvNoPoKNPt9MSXGZSnuU9doF56D3wfAtrs1rKV3dfnM5Q2q9AL4pFTDg1d21k5D8U3B46XdrdPLGvdt8NYvX",
  "key36": "jvvWxWiooBNhm1GyQwoUY5L9PKhebnMktLMxEZG7HWybYi25dSjNqdobdiZU1y5n4irnBNXE7syAaUsUEwWLMn4",
  "key37": "5E6earmR8Jb9epwEjpJZZVtSWzvkupjqywMu1YZrJo6G8D7dLwZWPwUGdbPknqXmAayLoC9aZiyrgqa2jN8EEAQz",
  "key38": "5oAmj8FdTrq4UTKnb1ZWnWmwEnNDKFyA5kYD6AVG77dCEJdSLLmWD3B8mWzrCSqMx3bz1RxNWyHWMWRCxxLV3XT3",
  "key39": "4mozFg3DZjnbZ5DJSpbmoQUd6RNWa5rhdH6QJqNydJYShWaajzxYvUtWiGV6rYm1Brm1kJXSWo9EKXfYy4jrS6og",
  "key40": "2K2q3Az6qtvnBR4WwFV7kKGix9sDTviUpLgBHtY7sB7dVQbkYoyGJ4TJPSf7pUSdi2X9jQxmTR2r6mzu6EFkF8mm",
  "key41": "2USh9rqkMfgxCEES7iMQuNFAqp6u4m2Smw1MmKcar428r2wVHwvUrVVes3jCGi6o6RFRwVcSrpuqu6n1XsxuXhac",
  "key42": "5uCQFdz2rMHokico11LyP3FoiJMpLyjTefceH3gXhSxm2A9ZUCTAHrVYUymyFNR9C4Q6CcnbcPgQnQ4hYVz3NRXN",
  "key43": "64cFdv8tVXCLbAQkL18K9WWseLEbaruVs7uaRvvdXWQ53ocHsYeSNQCJa6c7wVL2U7NtxtR6A2iZRRWbBT4iurEC",
  "key44": "AE7aJwYG9H43QgNPWy5Z6k7hNVewfoX89zpxaKraMZNne1FZa1sqXHDXvgcQY9NhFmUop5sYRmxqBv3fhExb849"
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
