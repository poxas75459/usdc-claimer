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
    "3LV3Wjp3dx2mvXpVs2N8SVWYcVtSS12KDJhq6wtC5c7Yjp9eppw7csM91wZLH7ZJDRto4UXyimDkaJi3CAZjCXNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpTYykq8L5JZCEaMB8NwtTVghEHkJY2QsMhQW5rWBsNRCGZBkVYRB6CqYV9E2aaUCTx9fQZzyXKSJQt8wrwfEjb",
  "key1": "5HjHqMmntV5mSvh8NYu5rmTu2ijzm2AeGEELWZdjkrs1vj3HxiLxmMjbZoPuWt3U6dSoC15zsrDMh7obXw7f7GuF",
  "key2": "3u7pGzqEBbhZCCxTtVC5tRJWb843USV5TCNCf8ZCawSoVrjtsnxg1KL7gQp7QmZqABrK6DXceSLDhSuoGATm4cSa",
  "key3": "2K4jZXorTGxKYg4dpihbGb6b6wE8t1MEsc7QWoNB4ZxcN5zHs4798RC6cM29Dpp1rtoRtw4FciurczpbyLyszhmZ",
  "key4": "4oappgEGD9KbvVm43Q1jmSqCTiMHPJqtjHRVG5EgovVcq8xcKaLX79G2PiJUmpm2BpMok4RYT4yErRryoqTgtxnJ",
  "key5": "FjXxcwKqvHQKUvQ561Z8SP7Gny7BZHb5oG9uCyyhjiK1TQXB51zWG5HMUq6ddV9g1qhCcSYidE1pmuMZRDvZkuB",
  "key6": "4h3JLsphwiQ3phbzLKtgP97Jw7QgQeM5xbXJ1ZpWELNyTjedzrt5EmvUk4JFpVwFpgYi4oVu2UEg1MSCexwBNXj9",
  "key7": "5JEzzn1bk43oT2zT2K5Y2thY73TyB76JNdWNhadyjRib7yhq2AwhfZddyKybitz2NbqaFsNHbReuZLc9S8zGKNks",
  "key8": "CtdjPLt7o1WhfmCo4ibUkpqFCoCepfvLRx8Hcs6ibEkKVHqZKfTtBav86dXSCiBScgcWXMBRTAvs2Bsf7EGipfJ",
  "key9": "2WUVjF4jWHs6uD4PeAuCmSRAuGMQCATTnGrsjzrmbPiDj3GRtBTBeTGX9zetJfSMYuq14Xk9aHnvS5bGcgvxaSCn",
  "key10": "2CF7WZwbPPrDfsZdpHBneW97JVWyeERSkCSgLrdyTRBYYPMX4BHSYYSpwcJyPhv9ijwEFkJcyQBgQuNSytLGqx1F",
  "key11": "di7fSbdT5AAeynzKxnLehokpuTNzkY3SNcDkvQ1Xxd86vZaYnHwwr99QFFuHCev46Q6PJuHEMyrkgkDqdba9HBK",
  "key12": "5eAsjN24pw1PtEynReMAMBJz4yX7fdDkogskHfMZoRahVtdDUgd3fPczfGqJPr8a9wxraZgxDsJM23se7BdNkvTF",
  "key13": "tStY3XNV5ykqRCV4vUKmRGMLgJAf9z6wGb3A3zwytaTVFMVAFjrYEkJJBc9BBZpHoMU5PXh1ZzU2NS2FdaWuJAQ",
  "key14": "4CnDb13NLuzLuyC1MYtV8A3QiUAoYJVTfEd8fxsEx4YiMb5kJJ5AosefADTUKPq2LxeRMRJ1xKFqVgnCTDFzp3rV",
  "key15": "3psmqLTBtKwHKdf9RBdsTvPwjSoTeeHfycLkSRkvTjHBKcyXHYMP9ceUDbAZ9xusxe2aWwwQUB8VfXUd3JhfmadR",
  "key16": "2asqr6gLYSqN3B6egjsSvD2ZqKdoudMa3947DC9pNNsX3znyWhXbyVgbDvzPMtSD62eheN5EZM9vRtgF7RJfvKP2",
  "key17": "2RGyZPbHG9ZvDAw6VEkFi8N3ykj8s51v99k4cvygFrKKjMEBbWuZzWZR34kbiZW2GCDhmLF9ZezgpYknqVFN27Xj",
  "key18": "26UiFGUayG3itZM89DD6bjqU2vWonknjXAvv7y26bxci9pzZdcCabSUB3b5X7RHitoFoK1fc3FhJKtBuYunaazQ1",
  "key19": "3Kgo9dcw32j9QqDDWLwoPFyX3G8ajRpxe2hqiXDRaAZx3WNFqurU2YFRZPvbUKHhZ5gTMWbbixq8gbAiovPUMoV9",
  "key20": "5AUyyY29C483PYbfQ9ezKxm62TrTLTU3uiSPCvPEMsx3RgqQZ9ZjQXgUdRHBRPxEuNofMYydk6rkykVAsiVGf6cX",
  "key21": "2tKSMGhqu3FisfYDSc4Ag2GGbSm94LTKevrKy5SW1xFNfCz4mGTjSzvuYvGj4iTXxF7ebaBawodBS9W35VbhahxF",
  "key22": "d7U8ubnsSzJfeMAeG3Yx3XBagowHpm24Xkn5YZu2HM1FtQEFZGbAE2C9kGGvm21HiqkFTYP8pM2SPSCPqzB4bZD",
  "key23": "3f8LUNAyLkQnDnNzEeKgHuBNqHESN1Ma95kVqPPtZgvyLcA7HKg1tmsVeAQeLiaZLXtfpvjJQoc6b7aGctEhYrGF",
  "key24": "4PtLVaha2x4h3PJmf1vMurNL4VcCegRR1Km6jYuw8J7PZGUeExoURJUcKYkfF8QMKbUukKzr4tZmhjKp5sP8PUUj",
  "key25": "5iA5V6BU97o3GXwS2iS1i3MoUMFdqXdBizf1dCYZuWuhYsKGxv9R4iptLHV6fsez59Lp1QW6sETwKYWxd5oUX5jd",
  "key26": "3MGbQxnUvBFtQc7S9ercufDYVXJLwhRr4PeKWRbmGubXzrvjhz3a6siDpd869Zi5YxAHVj9Zw5eG2d9G7QcV722C",
  "key27": "3KueCfydVRc4DrY4ETgFYsAVTky53UBZSFTNhh2aFqPoBBWRZUJwueYJwZAN4o3yoALnBdnQUyJtix1dbn7dUCMN"
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
