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
    "UpmQRBabHE1Q2dw1RSGf2NMv6USAStoVPeGnLGoA6ADKkDtvm2qm2EoYQM3jK93B3p8rzu78ab9pxgLia3zyrtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wabXXNnTCWGXt2HRQHce7eb4ANJqV7gcmfh5hr6oC9VYiXcMN4z8EQ8YSzY4YeuKXdHJMRPK43ojL5c2UP6dUG",
  "key1": "4R5CS9c4b9cJtgKXYEfCF1mEc3zpNsjdq5uviSygvgNvFu1rxwbFoDgW6KUfc2eL2xT5Pg2o6kvhcW3RYKs8v1FS",
  "key2": "2My9eMozdy2b4116sxhh6AbFGyBcM3VEAFPeCo3SJKrH5AxbSofFU7SpJixeCfZrYR5KNiWvY3jdwapjyLhozZJp",
  "key3": "cpVfp8ETHUy8CdQnUum79micCh6EME3n6wp4H38VoUW6nuib91f9KTBgrKu6qk5oYAiM7jJHuTcrmEAmkiuv1Fn",
  "key4": "4M2iEcxwxN8b6mBMB6AeYH2hb7pW48yNj6L4y8sK6iPSuGEj4Au1KU9TA8wMfUhvzpZRdzeXmQnDcUwWYTWgoPv4",
  "key5": "3jMbqehXM1MShjknB3yHFLoV6RKuT1QNHUHtmugBF6wFuwyZ9Tkfo8G3vTGYnR62rSXvDAbokUbeSh8PufpQHvTN",
  "key6": "2pbUWxqTEHCuda5Bqc3ddm2xWRp9rhHUBfQAfh1qZxc16eeU3Ab1Cd9cyVBuBLnSnkM1ggZgB2YLj5PVwz2KW29q",
  "key7": "47V4eFiEbHKzyoUn7FsXqYyqbVKcAvUnZm6LhF4owa6wf741ugdom3Fn7p8w3ZLsbi3TzudgKMUddnghaniNVTQL",
  "key8": "5fSQSoXKigCZHu7awLP49mDpzFMZcJRA6ZirrP93RFBYvquL7uZL9K3zVnTmKTDPdSbhqhf4vKmFb6szosDXiBKj",
  "key9": "mFX9mai6FcJBHDwL4b5K8mSANsGNkjZ6vT5xaAYez5pnF9tRq1yeAA7xfJD2uMVq2MFwQVVQhurgAVDeyhEbFwP",
  "key10": "17ws84ohwG7FwfYs2nuJFLo8cvcJbLEkuhuuwNRyNAd6R6Co2caL5vMYSrExxWyKukFTJgmbBFcTFqLZvh4Jg9q",
  "key11": "33UP8yafApvC6mQy4xQ483hqbBV6rMuvz91LJAPKSykYZgEkiPtUVMVToNjbafWwgpHBxaocKrf5tWu6ww42UjAd",
  "key12": "4shUzf1LKHZCqXhWyUooBqzhWETd9mxETE4pejKd5CSKtv7igCuLFVQQFSR9WBzfKpj3pYZfzs17i3HXaCB5Gyu7",
  "key13": "2fQdaWqwPCd9fZ7Fakwrx9dvKZpFbwLBFzSGdibzZihNv3HBoPsMjFJ2KxjCkcsvwyBRNXcF9FKVVXLdfPZ1jS41",
  "key14": "2dk3t7vRWvHPm2o868czppsAbPwah7jimTwi7ksnLFijRXu2dEHDXArGn5zj8kQGqPEAoMgjAG8v8NuLBJkRTXJ6",
  "key15": "4zgouRs8HCMDvwEbMbTkL1RsGvCCndEHy9E77zUBXZ5xWsRRyhEExPdu4NS9oafTLDgsK5WJdYoyks7YVmSbWXm9",
  "key16": "2PCoN17v4uf4fJ8bBzJBsmDhnBLKTzXoP2umzo2Cra2V551WJDnWwoGyCPTvJdfRtmFsu5yRb5XcDh75KwFxzzM",
  "key17": "KbNd4qudPhXMd7YWj3ZG838Ez1tepD2AJZHbp6VoDBZ8GViLVNiN3YVKMXuArQ2SYtkHhGBa2afcoG8Ep1eUe39",
  "key18": "2hHGAuxwpNpJDv5bocfn877L3t6s8rfEm2fznc1SBPfGTG2yaxqiiHnHA6n7m6sTAvn1gQTrHsFNPGmGqYoGDL9a",
  "key19": "384XrfFnZuWpxKPsX6stUz4SfM2YdLD5jSYedgsWvX6k5dzMQe1EXVazdV1CnBcNGviavvwN2uWoHMCqAF32rqvY",
  "key20": "3LKhcZkK6MmcKEZhAoPxqdWrDYywiCAbLTzK5DRZYnNQrpEcfkSiM7pdpHfDxJJbeKW8qvtbzL1Df4iXwi9qa5on",
  "key21": "4gV7uMeWWySTdpNSPGPqTWkYmDYHSHNkH6AZJVB4AcaZWv1HRo2qwwTjwwBWKyvustWBzBBx8nkg8SiJEHNDs1JA",
  "key22": "5U4c2rxKqmzYywMDVgy1FWLjN8BsP2Cqi9BLGyjRCtgvgJAaqa65kPnDxJSRVsubKTrZFVAHx9ZCeE8dt2J3djjK",
  "key23": "49tMjptWVpnsbCc9spmD2d4DMH82sppvtWmqXYrEkxBhq4y5VcNF1HW53WS1GgbVwL9pk9UDVD6J1hZVnKwtje5D",
  "key24": "64UJg6BLkwa5kjUTS53nkDayom591VZrW5TSYwUvZSXgoQJdsHdqnu5qkEN19DHEfN72BuB9mxRxjHarYxRYXDaY",
  "key25": "5wjUbt23tJGjpehAUtPQjtm31SqGbEt9duKpbncpQ7bsdzLikqrvaLU1u2rYQnQK9Favx1AvNAsLunebsMZMmJjB",
  "key26": "5uqDeKwWZBL6xzjVsF2m2bvUAja6nZW3w89Qq1caBqu3ZwSow4BETUsE8Hxto4z3oDFsa7dXRsbWHdDKnixJsnSE",
  "key27": "5NsnbMM8aYHVWjVHfRXVmmuuBiHCRRCgsQPEbNo2MLVznUcDFNFGGBTRNuRkk6dS8nqupaMRTSmGJNTs51AAKf2w",
  "key28": "44Dy2iMCcVkUbWBcvuvT4VeRpiymU3TPQwS4Qd16nWorAreayrD9A38M7SBTMona1jfjaAofgpyX5yrmfmzLv91"
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
