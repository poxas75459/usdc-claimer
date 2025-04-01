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
    "46e7cJBsbGraTeN5MHSphwPeHCH8htz2oi3BiEmcPEmJiQjwW7eCa2cPNLNz8myiFqDSSiN593QPkPxcvWY15hmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvwDsZXoJUYKUYkzoPxaEPoj2bJpPnsKXuqjDBCV4WPwx6WgF5zu6fyMnRHQwWFwxKJdr9aRyTiewFHZBLHRRzX",
  "key1": "5rE8qRUiy1ud4QFHZpfkz8vNFv1WP5otbaTsSUPTARDjwZEbVqnvFxAVjMwetSGDzbsdz7NfV23m6kHFxJCutM3g",
  "key2": "3yzZNUYPyw1fof8dpHt9MovZ752Esx2RVEnqAJH8Y8FwoT2fJQVRx9HNMSptBgMx78tTfnEbDM9usRLCGbaYwzBx",
  "key3": "2BfC18VGuLc6rVQumjFs5dnr1H4fn9jpwyLHVZqrmykJF3H4K7nEQGaKNXN49wkhYJEMTGAzxYUU9Hho3uGfGgsM",
  "key4": "3N97DodgeQJShYXned85FZe4fFrcz9T3ofrmcevpVDwtekt2ZN9K5KTbsdPrTki2WijM5H9anLJdJo7ACt4VJAMP",
  "key5": "4AqvapcWCeEhZRLDQKYzfb3YehgZfqU5bs9hVBzwx7hrpcKkKEwQ4sMCFVCtyYhmyNfdu5P6oui4qiQsPzqRBe7P",
  "key6": "3EUor3No42DVAuCqNqBT34qSpXX5EZ8ribt8xgjhBSEVNVJm4WZiRwXdueYLpfB3Rf8qWtVAFHUvqYKZtWZj5otS",
  "key7": "3PXUBeW9E1qunsxbmmcxS6aiPNgN5LZ8gk3wbGcEVLaZcW62Rq4oXs9nJXHnZHkQbQTnhizidyD8oGgDppdnATBg",
  "key8": "26ev7i4MWUzEBzkrwAiSrcjKHApBjSi8Ngxf8BonxZukdtgXYhgYZKwLdTwktEb6W98d1cbNdUyb5vTz8cNdc8gr",
  "key9": "3kLmoGThuA4c45882jTPUcCB5TidU7DpxoBvDZwRpi4636XbtHG4c1sU1xsSukyuPtzyAa5NYjMPVNr8FkQvURaX",
  "key10": "nNLLbKRjHovCNSPFjYCwRBkNw2gPm4MZRpZh75695VX8cy7X2KjiAMN7A4KQdmdyqYhabHETopzZag7zAsHNBCb",
  "key11": "3kRP3u24vu6jvb1P6QSYT5kDBZ7obyAeufnBWyVrudsUiNXsuemAEr89y9KXEBVMmTMwRNWQ2J2B1D6wrLWAqkB2",
  "key12": "4BRTeavQv1ixXvtf1z29nZHYmH7SMvxrumTzq3QhAAwUFQTtkcRTDF239dkW4tjEiDjwU6iHbyQYx5ZtfMBmkDSJ",
  "key13": "5MNuAgzBrQq3uY5iSaRQWwrSwRsjSAkh6JUpqufJpoExN6oq8MWFYxeSmZT9CK14aHXC5zBeNPBDp9mG4zZkgC5B",
  "key14": "3gHg4QQEdswRUDAS84YgqnpWToxArwWhZVcapyHFH5oxngYXZaaxRtQXWLvE2swhFNrZLYG8o2CtUdmV9XfJvfxv",
  "key15": "5smZySq5YXBLFzTkMkKT82hQjc2mhCvjwfGtB8gK1KYg7PfsRtfDiuCxHwiU8KaRW8Zuy1sPp3aR6owGUj4gusux",
  "key16": "3RpnGZB11BZfX5zhPPCKEhavDns8ph5dMmK27BrV4snZwTQFcQy29b3HKoZAUhkbKSMHWBFxjcsubHg1zeLQnGG4",
  "key17": "EqZBgRU4YmSQwPRzk8eQMA3CuBxvdJWtYdnsHijcb4EKsbHpmeRmf28u5ytpQBH7xYEoHSAr22jWipesaoCasaE",
  "key18": "42TMQctocZqeeeuJ9W5t7ASkMTJykWc1FrWERQv6TM92fVrgiN4uLsqg56hjgupoLTrEEYHbLG7g4wdxeQhy7BuJ",
  "key19": "zxYoQGwKMuVS5Yt7L3XYDEb7JjEeDzNWoseZ5RvmaZzkf2K6s67Lfv5jsgXRPZsiPJYVzuBZD9WCGqn9aa1e99p",
  "key20": "YPtHyaDSPuEH3AsB9J3FJZL2m3FiCvkHKAMzV9q7yAvcbgrdg59PdCrW5udAp62kBKrTHuR9jYdSSgGwD177EP1",
  "key21": "28g8hB9jHx12YVx8kVWwCM5EEGcTWSLgDzvVBXX8y9fZEVXXNBgnv7BtAcQCn3QzXrm6UtzwedaJpDJ8UUZPeeiF",
  "key22": "aFNucDM1YFgXbNGwow3PJSniFtxDn2pjE47B8dC7LU8Q4PPFUFWqWjHfhADKSDM63QotE4vAJnpF3BAazfKjb9y",
  "key23": "4bLn2H5dRDTqGBS59ogard9YKq8fU5KfsoCz1nJSoownDW77h1Dy1tM3QjfqZumHMv3an4ruGktPjrYnL5XUAWCX",
  "key24": "4wgxKGDbdcMUghCYaXPRGhuDccfrZQvVrhZJ4fRn2CJDsgvrufzK4eoR5uJjEgD6hrrf7SGeaWmaSjnmwyMG32e4",
  "key25": "5vdsXaqyywZ3GVeVBkuPuha2cUoZhM43z5dh7XgnRtSV98J9QJa92PHaEvk1EjXPtAdLZDGvFzovbP1nkCvB6zuy",
  "key26": "64Jz2DZva2uE94TZN18pxB1AWfmA3prRmQ1NGqbp1dpcueH8AzeV3Ko2bWbyPU1nBQSnGaz9XAg6sfboAAk36DsU",
  "key27": "zHdWgKGZF7DuDJ8VG7ZjA7wXqQWEEQgCJ9cxeXntfF5qBj1hzUf7iKn5m2AVZa4kMsiiBuBiusxUamY4zrZASPv",
  "key28": "4ppLCGf8h5NdGvCfe91xZT9ZZJ5cYLoVFV8soMpteXoQZkocCARTg2HMJQm7Y1tRBQ5huYTCCEZFJMsrs5VgF6wR"
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
