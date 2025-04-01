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
    "LwvtC7L8RZm7M7kSjR75shuvNwisuXTQBQW3xgkSqcHHBN5EXvazezTm5PuQYSfqpTsHetoPb7DmWTHDuZBsU31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAG87jUDeWq4VkAUNPYESs55hZDwPykL5smMGieYtcvSjASMppV6NbqUVr42L6EKE2dJchrRrqpDpwnm9ZSr3pM",
  "key1": "4vV8XCm5gCaY5vBr8ARUJtgFsQW3saLQrydibNnhDPPBCo7LnWsDMpcfHUE44Wpv5kFqHfomMxYXDbVQa7Z18Cnf",
  "key2": "5c241SLik9TGmLp6D7cHnvBC6eArpfGZbTSgRBDwGY8dLBVLxUimCPmLJxXc3mk5NL2tEVGxGWMWNmnfK7v2uRid",
  "key3": "4VVak8dxxejCDTV9PDWoF6oSCpYFHqobcuYN5zFmRPNe3PoVjeC4NAHUbx1tV2Uy3gsBFBYPR6qfcwQFzRJhXyL5",
  "key4": "3FMMRSZnUohcmppXf44fA5Rgcs4KVQ9Qx5UTEJnhUAQjD882ufRfQGmBarChoYSjfyHg6Ssbjn3zpuXUscNpE8yg",
  "key5": "2HycCkckrkSnvLdEJBVUCcd8qs5Wp9cCq6pu2Z69fn7t6HVnZbv566yEbTtbF2GSsdZSZvg3u7X9HrGDzjPtwSFg",
  "key6": "47av26mgqQdRqikrQKesbwpAFPFGBKUcLGCdD5cb2br7ZbYXGTmiFRkRe79MKEoJDps6KZqVXmnrEsu7GmyT5Q29",
  "key7": "3RpJXG9hTkbGSQgKFMhKfAwx6S9AQg9FdpqYHGvPLwZ7J1oMETdkozUjiBVwHzqajwXCNK3B9CbKu6mCPoiv8HD3",
  "key8": "4ms4iqL97VX83UXfBCpqHtmMY4Gw71K8FvecXdheZqUL6i6oCcE8p65494ug6B2xhzNTd1eWVUVQYfcomEtdzqJm",
  "key9": "4PD6w46yKrRbHEjzSYPbwkPqZ3zAcnF8bqyponBkt25N9puLGBMQVf4Dj6wmoqMv23XynSYuJKEKCG9XZX5YH9V4",
  "key10": "ME8arpZodSrkRhFB9QFwWaMexZ29zuht7UswJEpBCDydkUF9o8YhPeKXshzKPvJ7JZEm8AXGAVeKzkQAZrUSKyP",
  "key11": "2mWpL6VaRvh9evFByWZX9C3VC5AZF8DSH4EPBpsd77h7pXV8cWVrpBjJwLBg6Do257SaCYcWQHVCXstu9e7m2y14",
  "key12": "29NPhJi1sSDenjTYvfsC6eidLdYyroVnCab8khVgSp6gqenHEqbH2zL1TL8pFJhkMM1rL3ddusePzLRnuRfRh4u9",
  "key13": "nvQ55RvjpQ2RFkpCnpXMvH3nQs5EWDbXSPwajEZ3yfTJmMJLXYajyhgQV6Ytj5fjp1aFD7CX5kZCTT4BktwbTko",
  "key14": "F8qrPiJRmmeUCjeeszuAsb63c4AcbscUYa2wzAMgbSeKKWQhEYpGPRTC17xuH6DNRNMsYyTdVJxp6NM2bRFv9sE",
  "key15": "5d3AS2ncMpNtyvRUAs6zR9mZHWu1HtvP8CFXLb4zFQm8gRxTuSS2vmrsFUymYGx3ggwEKqDeUsaZ5zky62Zn1eD8",
  "key16": "2BSQx8WfRTDCo88RwHtzmuB67ziebuBNodCWrEihKZAF4acVjj94mYzHFUDMqUapTEFL6HvDwnjQ4FrZGYKjaCg2",
  "key17": "3cH1vUwD6oUj25PNFuGtSndPPS8cJfvSMFf8HH55DCmsDeuwtF79NNfrjntzaceXioySMvJ1zLkAELnd3edHtQct",
  "key18": "4QbxhWLs2Zp82MYFKLFpp7y9RG4rBMKBwFi9TyDrYs9LxM16zcupaspbZcAZ9WcD5UVeM9Yy2dcs4QMPKPMEbVAi",
  "key19": "3JsL9EyXj7Qr7GomufbEhi9TMde6ymHkmVVcPMjN7L7vz6hEAEoSqMGnNrAL1JwGdgVLLRdu1VM4AoX3EhX2drGR",
  "key20": "cz5upbcfudZ4ZZf5Ndh4oDyT19FzkEMHUTHYn8jAXx4VoWLFPXGFWTf6kDcuEAW3yxpatuJEYm4VTybsjwWc4DH",
  "key21": "5CuELrHonzzdtYfgxTQfnuryoV1jWRhEGStNb22RMjUYakrbBK3RXhfeneNysYdXN3qsreJcEUHoD6S27FvfqL2x",
  "key22": "45KhxSwokWqQxxrssGunTPgaXR6L2L8FPo3Uac3wnN4PVQmJPNivj8pk37hZN5qqZHfzRXMCftmhYFbZqyqP4gL2",
  "key23": "3MqFtRTDhePMR3p6GjLVHRJbT3ycrKPWdDHfHKLwtC88bkPHgsyNUdvmW9s8MCvYNmxTJ2fYjUz8qDkxFKKCGymS",
  "key24": "2TWLNNvxg1btUptqsJPkD9nkRwPKhLowJ46hLTBmvPCUbsQo4fmohbPucGyGQ397BGjTXSVyn6UfZ4HLMsBnoYNs",
  "key25": "3837g8ALZ6YRVPnJNA1L9V9mD6SGniyXQ6PXGnMw8uo3wxX5USGjCQDFe2nzokdjdnbx1Q5Uqw25bWwim26ErPf5",
  "key26": "5M93eBbqPCurxUfFUPREkUQrbBvPYdD4br7ovg8TZKimTZQA7o7wh21p2dAdU2ZF2Coams2BUia8xdsiV1WdH5HU",
  "key27": "YeAGKQKS996Q7WzzXoKCuB9vu2ji2Uwg61FXAnRzZWXfTWJo2LbZuw8qoLvpPBkF2JihU2nUCDTwCDjCyZZYudp",
  "key28": "3STkVYmcJFjRHe6z5eTMXpRhf7UDjPSzhshdqVmqTmpNkHnc5L8tZJSgJZpH2kv9n3V8c9Phznggbu6kgLmMncrH",
  "key29": "4Cbier7vf3LxRN7jrJs8jxghEzyuJT6V4CzCNwxoR9e2LSSYQVBTdSm3sYNmf6quqk8K972nDsdpi3zdQH5qktT5",
  "key30": "3mb9onpM8a89AsV3pAnKdwWfjxCAdcJvy5y9uCsmUt6jEBcUejcivPeBwjUU37bkAk6rGMchYTrfrqfpYWYs8J9U",
  "key31": "2z4AeNXfZhJHPS8ZmVFQH5Kegj7zGEoLXjGbm4ydnumxP3QFuv3ZD8k4s1rbm4sQVTH9fQZkswAceqcf9Cz93jWv"
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
