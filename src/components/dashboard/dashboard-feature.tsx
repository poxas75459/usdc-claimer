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
    "3mdmMcRKD7mN1WxZyKrCgd1bmLwV1ccHfTNzHtBnDfjm5o9MQmnEJiFp5XBXAt68HCeArZBjrFBBYuNuoVvpVENZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42afNaCfTyobHhRBYt4yJ5R9M5MZfZ5rCKXhvFci9z9AsSimShS9ei79rCTAFd5hY1YJe49Us2X8tpmZzuF6eLtu",
  "key1": "2u3zavUisHg7SEPs3zBajpYFWkXAUZtmwDPE6atfxrEQJ9dr8zwtm6RjYtn1c5Q4mH8xtK2N8ELFGziwyxCiQeso",
  "key2": "t76A1oZnp7pAt5L3hUfPvP8qR9c3sYT1SG9anN9AnbT75sFUGjKVp1wZDhnybLjp8Usn9Rn1ajRHPnBrSfWZZvt",
  "key3": "3hmjoa3o4eHFALWVtCjqJFRS3kn5vjbA6CEbg4iffarJ8jHi7k9fJcVbJbaqFpTq59uAi3h7XfYZS5dzLWmh16oL",
  "key4": "45wCxUQVme2jwQB1CbjUd4hSsPraH17AKitfFgpsEHAVsJK8CHR4EQtMi17tWgbpR3KgAV3BFoPYXnkd1Yuupm1T",
  "key5": "66PsWiaCrzNe6RhvJrhVL89WEHnGvwmxGxqQmVzZjcPJ1KtxZ5wRyP3wKTqvuhHspekta6sdMHg5dHTZRMt5QxXK",
  "key6": "3MLLsMLQq5yAbqYwR9y9ixMomhjMKaVRh78hFumjhRCXUwRE3hJuMCEjwjV2Ee6dRXWQ7PkYmoJ2hdEp9HDVMM4L",
  "key7": "4Wkzqjv6HfZnzA8rzdnWHSVt8ucgiV2uXbg5LPSd7bGk3LcEaPTYcY4CyTHKsoxha9AjSVQJ767d4Yi21xyqe14j",
  "key8": "4cy6NVzisoSo6syiW5txWDDcT3DeDeDScv6UW1QvVJ9VPUHmbbxG6SBvh6WhohXnteXxcbT1hb51zpy3dB4MLhp3",
  "key9": "3KeJcM6H842nNLnLB3sHAoU5rgKqiVCsW9v4HYgUdunvKDY8xrseR5473Ynaxj8sMWTZc5uXjhWeq8JzEisE7fry",
  "key10": "mn5nyk5QcEHa9uBFjvZ72GxJLxvYoFS828GXKJRrAqN7Z5VydnwDcrXDDMbGsLNd71Y2uTzZnqJWwV2dt1EdVdM",
  "key11": "61SoxsGtwkdwnpNfz8KrCWDrY3gawZnsjspn8G6Q8daWD3xwExe9k7UK4f6gREDVmTVkMjtq3GJWHLPchnhwucUn",
  "key12": "m2Q4b1bCZD968oEzgwmBkTeKjB74tozHFbLunDuUrHB7JXGasu9BiHdxBX2Xj82LLrQrrHMwvfJrsSzrxRV8VEc",
  "key13": "5JEqJiKpiwXMZNT8zHBUMsbAa23izjKPeSEfFKxQpdPNXtCshzSAQ9ECjQ1fasAU8STyQtX2nFQg5qEwngexXGYt",
  "key14": "2hQEsLc4f9nsWnHKNW78Xtnv4pWkZV7A1sGJG4ZMLd7R24Q65ugSEybjRFJ8rQB65XALXy4fM6jesDx5bgMBy7YG",
  "key15": "3NZHvu1WVZoo2eFQkDf1Nf5Th9xZ736YvthZ3TwgovVZUX2gbLHwwPewjq59apzUNnTqZwtqGSn2mvGD52p9kmRQ",
  "key16": "U1SNEYLaAW9Ez9egKuTyC2ZprC3KeVi8jcA9e5kj9Nh3KQhSDVoN8LWKZmTL3BsEfs2Hb3TVCN6gKytb4csEvmE",
  "key17": "2g68YMrcR7K1hYmRd8mTNUues17EB2GtrKRq9PJRakuGN1D4ZkZpmFTHzadQ379FHqktL1g93vzsTWTjVnWAe3R",
  "key18": "5xRGQjEjDtnFfVyB8Ck9HSt31o2aJWjoSgLk8y9H9Rq9mLa3oH8AWTSKwjUNS94zLgavaoC1Ey8rZWPTHaMDXDUW",
  "key19": "63kuQ3E4GvZx3d8c8C3NR1eGkVXVgUd7omR3dRUuxLtxsMcvxYfNSnhvNXZnieytGGJA5upT8F1oABSDKaQvb2Ro",
  "key20": "341PLCQ3XZJ2JW4Uz2E1ZrxoSLjUxnc3tTxQGWFkwAD5AqHJLXDgn7adGyKyHHataM53hRtsGUSAmxPw8xN58pJu",
  "key21": "4xjRQWcFU5qy7ENq6VdeGRph1jeKxCpqd1thiiS6HzXwdpypk8umbEaUZewPTPb515Sv4um7oN7FJXmxq9Kj1Yqp",
  "key22": "5BajRycpoaDRHfR6zRAqtybY2KQoRbdrSYeuDwSXibh7vv4q9rNGBihFrDGVLyTQ3GjvS9AebDbFTuusU8nuoE9e",
  "key23": "29ncS4b2yPShstQ1SKkYbxszJpqJm2TRg7Vqs8mnT7JyimSP9eQZfCoNzvJfr19hwyy34unCve4ojnsKXBe14nj7",
  "key24": "4AegNoYGb9cybjobYonXGmKhtyyo76JwQw94LWxrtwtajNk9C2vvjf29cBUKL22Pk2qxm2MAq4MfUhqcFPnEHtXK",
  "key25": "37cNWyyiQoXaT61h6VSLX42uJgtG2JUUnLE6sURcWbi1fnsQ5FsMNe28j8UCfokhm3tmEW8qMw8y4vykkLzgJPSF",
  "key26": "4YMtgLLxZ9Ym7fYJ7aHNXQUQNNoRKZPmsufBqG7qTbC1mSJ5joCAUshNKTCZ7Uwf9Z8evChPVxCPVgp4jHxyAEJs",
  "key27": "2BjFCSsRkMcbwVaEH5UpzMhWieQmt1Eybv5CTt26JgHqQQ12xGTCx6c5FKbUJ2SFfHxBbdwNrwpLEMVGEuSoNbL5",
  "key28": "2TSYradXqiasw3nt5AiL2RZVMpNWUW5hyAdtS5yq23Cnvf52PVzYsANZ3VUL6BBtRpCMiegkidhrFaHo7eR5c6Z3",
  "key29": "5MjYe4hFCCdZU27DRdRh6Roh8QND3dsKKuPoE9768nyyvSgbAbW69hLRi2se4qfdYEDRZusjqEuQXeMvtrfkJSJx",
  "key30": "4ov4PdkuFUorsNdbAiKX4yzp5c8fX9JQr6KhrtbWqJkdX4Cwn9PYb6aFGFdJB1ohxCN63zUeAJtaXw22pAPeKfZG",
  "key31": "635AebakHZKEp324grASV2E9curFDC1xfBi42WKSnLPmUWRkk3fCVV4B1quN1XpVxcDPUiEVsTa9Zed98bWbze4Y",
  "key32": "5eNCCJCZtav89JrTnic3gKZ5Dj8Jkmhgz5q2AA9RJyRFLc9vv53y76SDQpjhmBDZGErxJmvdiDjACbdzHBzb8Mbe",
  "key33": "Ee8uxYMXM23FGzrHC6mirZNbwUEdfBso15ZogSLZWyujmV3FJs36nbhZQbzwikdDhhYZARkbko8TWkWaKm9vnpB",
  "key34": "4v8eFGPHjUQ38Tw2RNRfBir7kv6ycwTYhYqtiaYJfi6DpNjbC7Cn85HR824vTnbLcsF3vp6ZZ26J2YEPhn4k9W4x",
  "key35": "39Wo3zYRQr9XQ2udUNCSsnEyvd85UBce8vZJT2YTsSvKQpRk5gJvoeZcAYxgr1aPppt4cLP1rmxHrCRtKdzq9By5",
  "key36": "nDcy7Ecin8iWckiVDMgttyfLC8Dcx3LekvkWJK9d9GAB92uCkLm5vqHTkEv1gF8wWdCRWn5rQ122zfHSZSGBohL",
  "key37": "2fwsf7Awcn4TXrAXdFSxo5fAMBZfZynuaEYzestxmDJMQ6v4sPUQKG7q4j1QmhiauVG1J1ELvUhgeJeBaBZdJHpL",
  "key38": "4KTfnJmvCtS4pixQxBG6DmiSBweTGjHL15dHinkRmVruqk3nbgSL8vPpAZc8rkQEuEDEsFjTPSqdVPyDHEEdUvmd",
  "key39": "3vm53k8AUUP3vASvFphmBqxi5XY5rTKo31vPGGkmrTeifLc2S28GjtYr5e41NWRbMwRSujP36HFE3m7vEsrrCRW3",
  "key40": "3BhmMJReYoBhbgrWExpnAEXv7TxpNwnqkCJbcR6oR3oRtUH7mKDMsVaBA6JgVyPdNCzmD7RC7SeF82XVJi1rTzu"
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
