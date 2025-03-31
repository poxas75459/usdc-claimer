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
    "35WGV2Gp1LAa3ewCL4eNUyajNUgLH4Muz7hvGMgvEmwtvC15uGLtiPXnhish5XCbEdAEG7A6Vhh9DBSqCgckQXPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARDqZnvcB8rPMKAno7ATvMVpK64AxW3nnLgvebA57eAwYKkAhezestduB9GfRCEYnCaUnuVYFfGKCwyXFG8RkpG",
  "key1": "3ZWPEACb5cYDC1TfnWotd9VfAKy2znDdZW7AM8dgdNVP1CAYfzfRVxqNYQywzXove5qZvoQL8FJiUcCTGa5iTPHm",
  "key2": "66Q6h6HCFkJ5xzyoeGS3DZcELUMi4SFBR1YJemcuuVPBn3GTnGAAioMCjF2ftAj6HxQB3JBPb953TVkzUY8vJe5t",
  "key3": "2UP9iGZJaEpFUSG7AtXYnQxcCT5bdXeF339h3Jr7bsTLYEr5Lre4dtLLhwX37uW21bm3QiaYiqxFfffTSKVfKa42",
  "key4": "y7G9iyoZ2vj6UaEMHef36pziibJdtku8Xb6ty5eQSo1QNoktvcEKXd4ZzJKtYzBTpvh5UBTR4g6eTH5TKEu5Ygk",
  "key5": "356gkctiWfekxMd3wNPESL2zmdrdEJtor6VJSRxkDPbs9tVVQT68wPA499B22s1u9jySvxU8rJNaz5ZEfqBwn9Ni",
  "key6": "41244TYdgy8sJDAsyAtNtHG1ZV3iKGfomU5jWVftnhwDpkdmu3ds9y78zAe8WxwFQHZuAUgCbNW7QEhUVbrUyzMy",
  "key7": "2bvi4rWBpCpK6mPzHuWCM3r8sc2QeJG1iH3WUMeDskx4kQcXQ2X2YSf29RyyGLDvtvakrbuA5w3Jp6yzvex1P73y",
  "key8": "sHwg7qxppZujaksMqEqZMBSE4vq4axmJn9252NTRSkynRqMEZdtADpLQkU318TX5fRCGJmus8T76jGkPsZVLwpe",
  "key9": "4Xdgt5GcE4vnHx7mVPNTg9vtUjfcYFB8N9ESJUF8odQeCMgxreiMVKiQymGc8re1fcCqMZoWD3tETGHRp4RLwRBr",
  "key10": "3mv2863xfzZyfmHa3WRFdEvJRPFQ8DYY9r4ai7xRq8xk89H1tWE2mD8d7GXH1S2EKZPNerMgdj6xn5sqHNsHUkUs",
  "key11": "37sAhbVSWyWtusYsfG4ZXUNuJBXepeSXTnkULAHUYgTFwZBMDnHhSAQDGFnSofqBQNu4oiCc8oZmdADNSQJyQm4e",
  "key12": "4Z5TnWxMKUy5T7f8NyQDF58tFW7Uk79ee5DYEFWW2FAVyQAyQCjVAcGkNkaevffeDSpXDBrDhMrwo8XcY5wJE4Bf",
  "key13": "3huB3exeQMdz4TnkhmNhQCSPsVShgRtTp44kHpneRt8qdn6oYfWCRxrGCgpEHHuyMUiVJyqdMBwmm4H9jakq58Sp",
  "key14": "3m1CL6y5rREde33jZGrcgcS1chRA6exhfJxivyvHvJ2Ch1PXuwbiJ6UqSUZAJFKzRCYRfxJPfdtmAFThA45TvdaT",
  "key15": "67fem4pNB1RWncS1BbUCCbwPm918uLc2EenQpPsB1WDuoU6ATvjm7KPms8UGcJEbZ7VVk1eEi3H1ssWdUPzR1pzp",
  "key16": "5J86upTebr2Ad53sq5axsGMMQ5jm1myzZgNR27QgVpW6vNBuNBQs4pBVrZ5U9VSsR3qpdkiLmdZaggJEKFHgEMYj",
  "key17": "2E5xJnYrN64m9LvZCYYYj9qDTim3E864BRnWGMtMeoq3mhvgJrZJak3Qeq8qFnCrKaeqVGfphL8Sw5GsDLeMB4Aq",
  "key18": "38v6ayB1rfXGAv3Eah3qsvyjEZVJSp5J79BCk5thGsBCM2CN6FkfvDL2KMuWiTpP6E25MiBKiVSqFnNexMwSyE1P",
  "key19": "4fDKFYmApgjXTK5LEuXxE3bUQh3ETNgYvrAiAv8vnhdtEUqAfAZEFqcEsi238DguWJLAHd1hLLxFURiTv5jxBuTh",
  "key20": "2XMgbcJ5po5uPNKDg1WeeXsB8ioT2gZojVyqzJC3nqiYncJDXcK4tML4UW8QbWUrm4sRCeGJhVbWxYJZjamMWANE",
  "key21": "YWrRGS9h47fFbvzezhZdwAvoJKyz8hteiLRR9WviyD671pZ8zmaSwM9XQ64QF5HsfSrPSY8HpjRaFpU5zCMjGRH",
  "key22": "aB6b7UFJTb6FheEFopqnP4vWRb716voC89FTadcFnjdhB4bwpBtTJkkHUGiEwJxjciDLqNjf1pRfbMd8zptLzpc",
  "key23": "27s6wYcjA9Pdsxa1E6JeoFoUm9wJtELMyubZjWYvWmRQobdMiEhtw1XXLrLgvsWWygLWMuohUvaNLZxcbV7pRPQ5",
  "key24": "48zDHZjNLHeK1rpznWG5qTPED9TNDHhXXKkd7wztmrRwUWopx97UJ6sjDqpHsvawCpriVRWQcyPXxeyNA75PHfQb",
  "key25": "3RYspcMuX1GkzVxPprNnSxptQfaoigLk41agCst7tStC6sRsRqZkTM98ErEnJaKLZtxdtfR9rKZgkHAHJf7NUJAC",
  "key26": "65yuGYP2WkamPvwmoRAg3G4gZWKZ5utc5KfKayLLu8znHMFT4jbjAoL2Lhi9uG6osA5zeSW8KAVTGPu5RjH3xize",
  "key27": "3GpykhbteuptViZYSREY2198TAD2C5FqAEGMCyacUe5Dge1q89JYgPzQGu9ZgP2LfTGbfGbUjRrtp26RBQZ6uUCo",
  "key28": "5ZGHFR9hMmYDAGvGiRsWHUpm9chR1Ub8uJe6jZ2WpWLi4Cc3nJC849kkV61noyAQ5XMJDMECsfAxbDtr7hYEr97q",
  "key29": "2c39cH3KLx3C623fDNd98q4b3S8k6MuuspMZtxkRvEnm636uJD5mvYfo9S8uQFM2Jp8pFSc82HUpY4exEkx2zSwW",
  "key30": "4svG6ZywFD2koGcqzF16Pb4pDAFYzCVQxvShV4Y3QoWK2iKNqXGFtRCfUohUg3vCR1p7SHz2V2GmgqhnuKjQc1yT",
  "key31": "4wU7izVFxmELAWKBa7qreD3VsTu36YtU4vQQsC5wsqSJ3M9zkDpT2bSAAH3937gP2nd7zaPoqRh7dXorvwJbH3ua"
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
