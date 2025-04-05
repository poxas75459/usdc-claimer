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
    "2kXBWnkCmJTM6xEBMUhCpUFTGVd4BCcWN7HNh7qCCxBcxts34SvWehBrQxSBV1Hrydvx59ggXL94Umscr7gnHix8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LY5wBa1z9Mx7ts2Q1THYtQmybQY7hvdHTcSt9dDUbJJTeuSiqNrLVYvM7HmY4tKMcfSytpu9ypR7tymvL54kUFB",
  "key1": "229rmg9RrRQkTXD3EfggwyZpo77asHueaRm3w3GGwTNAnhqSpLZ1MirKFUEa9iYfQtsjGN3k9Kag4rdzUfSgHbMk",
  "key2": "czPwsZQTESaQnyWuyxgVpWtP611fZAFu5opgghoAdLp8VGrr8GfN7XFn5n8TpowiHDVaHia9Hmnxf5iwASsWHmj",
  "key3": "35h8cRZMkzPogeCGQNaY8XDANc43u5StDmbJKte4cpH7jo65KLYU71RPnmcRBgKtmsvE35oJvTFothBnbzz6xFCL",
  "key4": "5rxYuRjux2HWqzdC59XzZML6fSW7B6n9SkUo8FpadXjpsa3W9t77S6ueR7rCg9JL9Gb6iBSLM4p7TgiuAmMEmHMi",
  "key5": "5sDHih5CUNgSMJTAnoPtqjeHtA8Df2G4G2YPWdcQMpzAqCVLM3CqdRfXH31dhioLkcu6e16KqPKSjcDR7n8fn72D",
  "key6": "5NSDoGsSB8jbjzAZYRzJCjWZHXbgseDjL6myLJPnQxJCHE7fBnDhrN7dT9a6dw11AT528Fp8CTMcvwFwLfxHEH7Z",
  "key7": "GoDaKewFhaCqQns6XRhjxxARfSTnxvavcBEDQTCqcCboEQQ5vywSRjQSaMsbjG4THizeEVXWdrK7mY1Vi2KsuSk",
  "key8": "4Nd2HvN6pWCtPp8CfDGMm1DsZxns9L797YRKPj3xVyoDm84KMn7RP8owiVdWmCGoUJ6nU4zwcfC1NfwKbbQrF3hq",
  "key9": "4YBbxtbu3nZfaCJitdzxZ3x6qpjAFhYpM1UKFs7R9URwBDbKQci6h97kFnry8DRCT4ZNVTSRVGSBMpDEdMeDkP4A",
  "key10": "53vPKnMi1A59Au4VYsgxmvD3cKpDkByiy7nxQ7vQvUHJwzr6q6p478e6mY1vsFAK3Z3iaMaAPmzoia39ZjChHBmr",
  "key11": "65bZgYHcEgws8FSnMqKHkcDMJC7DmRQcBsk1HjbemuhoQamojBt5ipVGssrQ41PqkNWQCT1iuSKkVPNnHQnSiNUd",
  "key12": "5UKW2zrjpGCxQCoonhaHHagY8dzJLjTWGpqajwtMz8JVXnf257tv7UboL8CtxMuCYFmdA2XPZDBHYkWrMz7ercju",
  "key13": "3Pd3CjKNYWkEyoyUb3vvA16nkPYwbT9d2yD6J2iGksEjScqCxnjU5BfRGTBmJ8HVqe42HRXWBbri2yLuBK97UTrQ",
  "key14": "2Zr96x4c5qdzkKDGTDdRPufWKZAFausXQiEsCinvGo1ieB6nRvQSeVCZSigkhhw3QFHUgKXwzt6HS9fLZQX8SGmY",
  "key15": "U3pVC11N864VmceT9MgLm5KW2k5g2KZCwv8ytfYyCsWc2DS3BTcADNTkW2Xtni7m4JFHmB78zLVMu6dn6bjr9kA",
  "key16": "3uLBMe717WnwsbJC4Y51KAz2SwJfhz6Q6CJ6yUrn31g4kbUfwMZHGQJt9c5MWmGRqYz6oYSFLiCrgJSGDTVUAQf4",
  "key17": "2N4WozorEP4bqQLU9e9XDwYkABzR6eTngRHB5Y2hCxHDKJ1E3bWZyodD1J1WJKDxqXmZra5jRE9ZHU6o6ScvcDyB",
  "key18": "vyHyAR4A2pAfeJxCPogJn5wYoqkiCHwBCPUK8hByvAvfZLf8ECGh81yKTP91JBEotPM8uuevaZz5TGVApbfEsrg",
  "key19": "5WWLpQt1PktaM5C9qy7zY1WSfCEz1T9pM2KZJqN1P9ZZLbvbiKrVqvTjSzcB6fbi5xtTeGFmnuuSHvV2TWB2q1eA",
  "key20": "25NL8KU351rT21pjGMcsc3uywxWtVi9qMr9ExLXag1oRK693vSPZcz964JYtjB9aJ6pkeFicy5WgNFBBhW16tib1",
  "key21": "BAvpLp2waYFv8FebmJ2Xu66fwdEswdfyPAux1HGEdaDwwV21BQ1cZLZYCyDfzn8Qydfbw9shjbiZhPyQibt8MKu",
  "key22": "5PAPsyw91VrqHMuX1AMrxgaVSnKGUsSP6Zm8KVy9A86onXcmZX2tqQ1QdHaKbUqhFh2kZtkUSDUtAgx6rbRKdZgC",
  "key23": "3N66ura58JxAH61TmAitx3bDrFWhPbgRyoQCkwyLxCpbeEkYQJVfs6iHdMWa96cikxEr5G4kym7CDEKx58p16S6K",
  "key24": "5nRDXBL4RhA2Hk8cnypvcK1z3683BpMyVoQMnMrJg4U2TbQSS7WBGPUKxWEbhS2wydhZgqMJEoEHvVkASNk5axDE",
  "key25": "2hpbNbV6KrNoHRqtkAygAWbYktLwfVYgHcp1R2wtqrBGN1Y5HFMU3cDAwrxkPWuuAfucJp5DTsFG9zhgQZxf33HS",
  "key26": "TAt19zA5L9iqKVCb3YNerofz5pfYJp4XuB7CX8VADemgT6nRDrXfuMKnZkYWtdYwsJk1fhqyt7rhcEG16aFjmAg",
  "key27": "2D4iX9gG347aokscvpQXt3LWZ9ZRYY3btYqnZKKYDFeZJB68t7NDAtp7XaQzwRGMyDHdHGdFkvCdKnwMgYDQgogs"
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
