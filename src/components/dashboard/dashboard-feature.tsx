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
    "655T82PbvEg8av2yKWh645xmrgRkSLdYiBmJuiUGMuxNPTd8TUcharQ47L3HGwhgUJexrZiM39vn2beGrePM2XUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvwnZQLg6onc9B17ewp1MF6LXzccTEiRDAe2pzZNKBNobnSAihuJf39ULw3FSND75FLh8kTeqA5erJkDWcwqr5X",
  "key1": "EozTfEnzMLCnX5FXJJg78heEfywxWCF54ExuawoYMwXMAQ4fQfnCSEenNAcaF1nXrj37My6uPXqmyCCkLd6C7rB",
  "key2": "5DYjTq2S46mM8hxg5vHbN8R76z3RD9mT2nT4BjDRJqshEt7u6vNMQPD4fs6J6DiLa1ZoMSRFK9CQ36dEaAABd2QV",
  "key3": "47nDesR4mtX8Xywz7BBGtA3oxDBpGMPMt32eZnwUSqVPtViyTgsGvRUvNvnYcaeQS8vsiyrknCee2Ntocs4MNwD5",
  "key4": "4r7G9fw6dZE3NYP9b9UCHqyM1Z1Q2scjwyhwnYCxC79HrQCnZRRYW1Cv7Qd3TZa87Wr9LP2BZaoqqNFRom9YMVuf",
  "key5": "2MeYFvaoEhdY7sXTu7XhoJmBq1i8ecyjNjzEgiVFFu1gUC37DkZWkKHjAwXFbCUTvGahtWxwNc2HxYegLiMKRYFo",
  "key6": "35pNtRLF2yYhpAsGUzdg3URwVB1czVqi4Rm1GjpqnM98b1sWcrdPPQkKCYDWjcJJaSoV2iuQ87nw21P7pqUFPjc4",
  "key7": "52AH6AN85b5nuK8M2eJQctA5H8McaYBJ4LZYnPGqS3GAJfUjiZLEL5MbYgvkEHtLnkDTUyzperQcUvnZpxjAzksG",
  "key8": "5kQM3dcNgVNZi2LR3vPmNFKc3tMGp3q3NTwZyt3HmoA7UH5QP8BJLRX2LBnwxRaUmFv51UjRCbezD9eWwzL7myKN",
  "key9": "25m6rMgA76DiF3ocwRYwqvhK5v2TvL5ppVWpPxHpK1gqw6DAj7aeVCfpe5RuFc5UCaqzaU11VYn994z9hWe7HbGd",
  "key10": "5ZbvdJhGCCqfMmiGBrorENN2r1ygz4HAns3EuBzuEYArN6XDRLe8Yhb8S9XHCXgnyYYT7QRaAj1QZZs7vTxuhhXp",
  "key11": "616Qe9iJU9UGW6qw29QgQJiQgv2xGFQNmARsEPv8FUxorAe72pEg5u9VpQYZfN6BG9VCxZyQXRBG9QnCx42YBtiB",
  "key12": "67rZ22D9bdXHM2EpQqdkNaX95aBUWCwsg6zpVPSZQCq1H3KmcKbKDXCAtgTDUUZnr2XXwTPt8dqDigbD1oXnYVZo",
  "key13": "4qHzFMAfUwMqHW4wEWLWqckkE8R3CEZjAVR6XAz4s4edb26gRHS35EzAP5xXX64WXQzqXZrP6xBPWddFKG89qAxV",
  "key14": "43ysdhZXYExG73mLJWGi4zMMVMwLJER4raXYzq9uRKVRMZXcYbHTmpiAPGcSBKEECqtR1dE1XyJFR5n4zFgkPJX",
  "key15": "wgoXMnHzueWzwgFBkowzNeWDHtajk7b6dtQ6tzM5DFmiyuPyHbDZWj9zBnwtWNDR5ggzJDLXA51roxjNFnPSsMW",
  "key16": "3du26dkuWn1yaY8JorMrah1VS4DkxMsCMnM4d2SGcjjJgs7LdFdLhzMBKirpMspnAmLfhcWY4jq2jLe9ZrQRksRa",
  "key17": "52Erj2rwL2GDDcpLsECdGCqXBEMmpQeEmtgP5yUCr7yjYzawahuTpt9p6yJ13vUS6qVXoDNbHPKvAjZvyXFF4zeP",
  "key18": "32a54s4rzvpdgmwkUtC7qYGBXgEcS6FCVSyk55XYibV5gejcPhakZXXMxS4TK15XjJaUY69gegT6Qq6dxuzYAsXN",
  "key19": "2svZCEyA5T7KC6dPWa74BcvbqeHXHLP6nnUXkcf1ihQfuEGcWWNSGWhzd1rJWDQChsSRbwCy5HLYBt9k7W6xXLvK",
  "key20": "41vuFtimkUMSZf3AisAr9uMHGk22k37nd8vJhE1xBaj1cYVjg6YT7QzYRAB1oPXuMzCDoJ6xfQNkcETs9MSssQBr",
  "key21": "GU8mDUVYxt3ZegSBXnWy49e8UCu38WtdosqK3aJtA8B2m7cp3VPU15QEbZpnytqhNu9hrHhoG9Qny7TjmRFBj6R",
  "key22": "3urPNR8CFv1rkwPZEqge6DnGuSBdXdWvsNjKSfc79HX8NLPFrr3eLRBCzYU5kxERiCT442PVikNbdgd63AkUvvhD",
  "key23": "2FHNzNmf3HPXhaotv4bY7Zo2EyeaknWM7x7gytQJemH13oiSfUeJ92xEi2D7V5vjGw5xn7hbyF24DWvSkGwbQZ5h",
  "key24": "4wxSzJEXkHezwQgiC992DKZW7RHWWAhmSpTxpAsy7wKAuXXeCTPvs2ryvKsNy5QT5ptN4ckZSzgEjPJryM988zm4",
  "key25": "3tAaWyEUdmD8PQXWoCK4PRBE7Qccb9gumcaoiJqZ8EbNrLcZESwoMgH73u9X8yMxXDGuMFKCGaeoJy5EwrzEPLFN",
  "key26": "47taSEQ5jNoxvZR3SkxWHjivjov2BUy1awD4e6iqWdCFupMGcHLfmKfLjShc8ALfsgwQn8TzEWaSPevCpDXsTxYi",
  "key27": "5koeDbArofxYVnKwPcnCYeR52TobsTCXAfmXbXvp4wRpV3C1XLcHjvMjnjtiEahL48m7zjhxczvPCRC1td4oQddj",
  "key28": "2dCxYnvKPbecNSUfVgxTdc3MHdsvSU61ZFRp3UVMY5jbiWfGxorervsSCjCreJMQBkJ7uF6ub2tjbxERbxubanPq",
  "key29": "3hyy1F3BEMt5U9ktWaWZKY5rZRJ64MotTVhMGF28uS5UgzZ5XAde2vq88dFqvLuVWEAgYcpX3co9W4EVxuBoQvkx",
  "key30": "J6EoignFekiefc1Y1DRB9ftWjBPd8BtCHMfNd87ugHuMQJTe5fDjiQEPPvDWSrXZFF2zvT3sJxx74q4MLyjyojp",
  "key31": "4oS69VMAatTKYQ2dK2uMkHnoGpWuvhjXW74uFW5532an6MopYAjzS19U7AftKSgXvV2VNa459TeJNiBZ5i4zTeeS",
  "key32": "QuJV1cMkAPzbtP8WoRfchytyMmyuuJKYxLmWdF2JX4mkD9jzRhRwmrirN6437qpAsxyar345nrJpofpcH7fs7GH",
  "key33": "65QTWBr1Daziz3sw2f7wWJwPfr4UZXF3ATWE7g94Y4CKYNvCtnySdP62QTPmk7ycNa1rwGr8VzJuBZft2YeaK6Zo",
  "key34": "4imocVe5hQVHFMWXLkrDHfWvoU5fyBV2fU8v1LAdSENWPr9ZgTayYGX4Dfg1d5sppvcFVFXWhgi1Gtxexi4rhNSP",
  "key35": "3QNyHoqNfvD3jnb45dbhNygksjDHfX2jKVmfL9U19vNfiF4MKdj2Mfjh1jp5RfM8yMCJ6A6pSJTQQ9j2P3BK19JH",
  "key36": "3XfZRYtnWspNQBQtzmnd7qFwTY1LViJmsFzRgst2YNLrVHzRWKWyKR9gvRFugKUZuvau5Ey2pjRnXATWKVUKFbXo",
  "key37": "3wKZ3LSDDtQuV1HaRM6SNmUWkqvZK8SBDCFS17Fmm1Bp1gUNHjWDPhCGcqKL7DEMVDqq1NL9bj4eLUkHDh2eY9hj",
  "key38": "2FmRRvCAQawe25PewfYzBs1wENCeffzPmgej3pMDu1gJj78nbkKUbawksD8FT2Q6zuPyA2BR5nNixqsLiT7gVqi7",
  "key39": "mio8AfUsnkSAgkFRV4CkUe6uYazuU2aazoAyyGRgVLzRrgu7H5ejE27Dks7AgyTMvHExXq6bCASDVysFUQtUXDX",
  "key40": "5hLeqRDvHYgJxqWRZV5DTdpHvqtn6hMrExjMcmnUbicLVpzu17iEAATbXBs6To4WSN8kyGChwF3xsWpWn3TLMk8z"
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
