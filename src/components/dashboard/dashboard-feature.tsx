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
    "5YaZSJQGXwDfMd4y2PWKmDmfaqpLvvjTsPpXMq5RfcJXcDb1huvKWvoYyjzg1Rg7G294FNnHWug84QVRemGbN6vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmGZmipRiKoSznAB4K8ZhkBjnsBz3iiRLf2gQ4DPoZgrgYxtVZcmqJKdogBikE27CMRcVKdfgBDkKYd9TD2dfHQ",
  "key1": "3HByqdW7JYaPaoHKnqfK1ijym6vUVe5kg7oycQHYsqHsvHhZcVa51MtUusM3PBVyTNCte4y4J1EJ7FUMjPj7EiGg",
  "key2": "5kFcRAJmR9PDwwAjMc9nkAGXMEW8ucaYgmi8ENY4iUiDPiVDwX2fwqcTVpB93wBo3uxXAgyrZxX6TmK2KZaMwEoV",
  "key3": "3i1wuuupTTRMe3ihQNFJ31GUubrn5kirz6XmTwBe1gjxBKwkgYuNDuK28CaMa5WRhLvmHPsDqdNX67zWWCU8g227",
  "key4": "2PBAYZE3kT22EH4YmQsH9wXf7hpx1LuEtE2WR7zRwf4fNuS4t7MKEhsoqNCCrQL54w1pNVQ1u8DfDd7dSEpLmC72",
  "key5": "3WrhdsRoGNzytdtvDtcHYWLNNSZtdoBxaVDTBjBqg1eM7dkpnQFgEH8EURci9gE2bsGgLiBYezZ9UsV1UVGuzZV3",
  "key6": "3xurxkx8dd1ohq7GwrePXy7uxfDNCJyUooMqMsZJMQPicSH1vMc3WtTMmfADwvKiJLQd3PMKMVPRpabuLQrPCibp",
  "key7": "2gVpSzSDBeDmC11nmzvCP2dg66EiWE7y7XyCQkBDUMNMFMGs2Uytmyn1zVfwRNRGzcqe11c9uA6zB7GtAu8o8hpa",
  "key8": "3yU1Rh57G5s1Qbk5a3A6VT2Qf8zoAkBDngp8wzxi6LtQkUmyLFQvPqQrNZmJCTUpYF1iwSmWvS72G67LJue7LNwW",
  "key9": "jVBZKVKrwb2XoLN1wbYS9N9LWByyXGnusEKpkKypC9YsWCePhzsTYWEACUvW6cCLULE5YJ6XcpKYo1JDkTmU5eA",
  "key10": "2WLZBSyYxpu3mrc9FcCRLQM6zuGR3KhBzvvBXU3qYaAitbsQTSiZoL8xQXrAnHsHpWMwuuaKMai9N7ZzZfqtA7Du",
  "key11": "6nW42jXShiLJCsE3MgsxmK65X3xYLwSHRo8v2qmuAZKB1WkThEUFVRkmv3EmAJa2eUz44Mg71gQh2s3V1nZRnSQ",
  "key12": "125Gka4RXtUa48HEwYgdcacf6c6DQX5yjqRPynJVSnnfshAjg9tDRLu8WZdCeBn6oD2HFZtcNEHjrE2GBJbh1nvb",
  "key13": "2KzLmcd1rk9XuxxFvTdB5e9NtahPEBEqvxqrsXxfXoBS9pi8EYkxv2LEJxcfgZuyLQHocFxmfktByKgaZrjKY62o",
  "key14": "5ddRD4dqCryvdqdi5T6FKwQfRKtg6ZHS78ifqFwpE8zpauNCBXusnNbZ1qdTHm9KSLzxPxs5o11UhXh4j7Ff4KRg",
  "key15": "3y2zzxFaL1uYTDvnEeJ4Cjq3euvtSUXwAC9xyDJ8SaHbu7UgoH6Rs5R23P4iJrjJWz9hGXqt1sHc9QtJ5Wft36Kk",
  "key16": "3bT7gNuQUSsEBW3q6ExH4wynddw9GkcDk8ALkRBdSKGzfA8VDmGNRUdmpY9jKyW6xqJpna37xXE8pNSRBWEzXPEC",
  "key17": "5vKTxobvXyPjaHKFQ5NAukpzQbXPXZeM4EvMhBE8FVC2d95uy8b5YfoXRDfNJiTTgg62dSWEBGaKneBqVGGaa37E",
  "key18": "2XVsh7pRh3b2DJDaDLh7vTgnyZuCadbJ5w5vWjfTv9fAo41HTyu9NC6d84JC5U4BpJqdT4pXT1f6dQ5RpdKNdBjp",
  "key19": "5dqNbyXKXFobKh5wWUeoXv5zweVA25qaQhLczaYtZPHeRtM1HHEApgYGkXJKGY5LBs1pr8PrqksEeKyih44wrYD5",
  "key20": "5McWxoom6ByUNX1yYHRjxDiJKbrZqdqjjXRisejmxpAB6MYmToogKupjC7XStLHryFNbETvcFDyQgacP23T3k2wP",
  "key21": "5RL5sJaeaAiySVHEvW4nVVorTQuobdrSReeYpWcrMMV9WYi6w6seCoF2ajPxKKk1thDx3bazNRWQ7GibdVCCd5DZ",
  "key22": "4BtkFpFzTnbGokERutEs6mswn2gCNMDGzfgLjPPW2S9y886hsMgvyL9qaTL8GNNA6vyNxfm2Gp6mhQMPptAPkjNL",
  "key23": "4D1sLRLuDGKqGgbhgQgYFoX5wfV2EW2tcYeUDUfigG5EFCJHQzTuFtVWcxE8cLNULRd3Vspmusz2nmnqfsjb6x8K",
  "key24": "4DymxnprAthgUPmCq1ypE97ArZ9rE1mnPL1j9M6dSibdv7RiQoEaZxUwRwRhC8jciGZKjxTN5GTBeYBkt21tXXq1"
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
