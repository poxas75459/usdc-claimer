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
    "b4itwioTAJKnGPYNP7zvRUstYw9FdZennVurfxQv78WD9UCT8nK42rDCw6zuD9nVZWvgherFjdqVoxZHrH6TZZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gU9CkbUo3ovfXLjU43N6x9jcCtx8gZM3phJq22FQbm22ePpN93T833p3fjba3jm3uogwMw8BQg5BXdDh8GNNwgz",
  "key1": "b9ZTi8NSCnYKX1i6jx6d7z6mwpYKa3hs7X87PKS9wHMxAFJYpr3oMEe5aEaASJaqQucrctt84dxuY6XqgC19Hnn",
  "key2": "25UFs8Qteb9unAGWKFcBzbzVYdpg2r4eFPWE1hb86DkKZgTpx4yzDUHqYpBF18CD4BYSFjgecATQooy9mdNsBjuH",
  "key3": "5Pd5CWN19WbgMhhAYM5xFpRHUYiKsQ2aktdYxyzp3nKb5jpsbdg3B2go94qbcStMHsem4g17jNPo2uwaFDa1SXAZ",
  "key4": "3QA4iWxhyeEk2hYx9zQgu8SCCqu7fCW2To78ygKbUbpV23wWSdaJ8AJ4ySXr94WDzuYRabEBbxSogxLCq5NnfYfP",
  "key5": "5NzhKXiFuHtnh9Eon26XyJeW8ZN3gmERtx9DYrqBu3DDjnEXcLSSp3V6mLtVGzhADcx95zns5WiGD76eiBf6AoT5",
  "key6": "3LkmdtkqT7BnZQQHvsj2FJB2o4vnpSEpvq5fXbLvEQEkBZvsMT12ueP4xfh4qmSQsqZBT3njLHyzLFUmxtKVscfF",
  "key7": "5CLt18ALcmYW5XNpMsyZvryLVQA9Vies3RmRFUCFApLCGFzJSbMRkeopMFbBsHfWxfddziDrohPSdhZZy9A3YcA4",
  "key8": "5MWfsTEmYncrg5oLgvrsTrxq3N8XEV9dzcnnoscYiG8g9PJLFW5r9TmF2Q4xSqLuEETTyu2VXnnkLPQ4bk4MQvDc",
  "key9": "5D47HDVyLMHq6mohBLdwKyj6CeBkos9i6BscqXFULs6twSMLHe63vD2bGxEetspCpF1rtWV39DA22Fm1K3N3Z3t7",
  "key10": "qo8Zy6kM3AF5z1h3oz793ozxJiUjsEq5mWaoUkYtaqxjY32oKggZPwT9G4Pr2LCLypX2RqU6MKSWuEDphkp6usG",
  "key11": "3LQrEUmvts8yxC7GZxdgP3vjCeFcgjNR1H5gCc6DTyeUfADSUPSdEHvWT617FQck4wv5ETj1uefdHK2fKY4EpETD",
  "key12": "WHXe1L8xjVdTLxQypn2K1EHkLLbcQBQBPyfdZQ1mVxAcBiJ8mVaBjc79yDvvqFy5woAvqKVVD2Uv8egrQf2zWua",
  "key13": "4G9zCrGQjoGmz4M96qkFLSENodc819EQRE1iyb1SoPA723jNvtZpxVwuebzfyg1g6VMZ7A9fRLnmVCw96q4BGjVv",
  "key14": "3dfGvk6Y8Qdm31vfCDFRGmQuF7g6K4DV823TV1hwPG2reC9rSQrZm1BkLeoRTqEN7BtvXSRHdFF22BEBbrNyReoy",
  "key15": "3PFsAUbDcqPqbcVF9iALtjwM8EU5kVNURdLxFPW27SEmoSPcaqNZX5m6xCu3k7fA7xHoksxyoyJmVzyQcvAmwXze",
  "key16": "41W1o2vumaV4QffqV4GWRqzmu7KTwhjDXTNKANTWnz1E3d6gJdbzwY45hqzxaXgkKmvPQebZreRfwG7VMnLqwWnq",
  "key17": "4YfrWZnxETekWWY3xnZR1Q4bxebZnpZAbMYgwF1PipgmN2q2g1AkE36zZi88h84UmiqXZaCkPDBEWDwMfhcXhWsg",
  "key18": "497PtCvdDEqw6UxLGpQhzGtjnjXTeiX8uPgdhedJ6P5Qn1qQxN7XGW5ofcCpPWzvsoUfkxboBSZCJ8vWmYuduhzC",
  "key19": "4hB7LBcLq57Z3ztiUhzckDF48ocGbwQBFhL4ehKhnU5daWLLT1Uby4iyczv8RSXtcVs7pp46yF1kWpzJLqKZmaE6",
  "key20": "21jLU3hvBiPh56RpvzWPF3DELaDiW2TRDfYDRpRNsgJmz4RdL5syMFFjSkuevTzqqcwmf4PEVPtKQ1bxpPX66aBv",
  "key21": "5dcrsh27u4r9Wv3iindAWAx2JxZYAJo9eesefFPYdmQgNHJL2qrFmyrVYnF1PpYfeAbyMSNEwRa5JghCgLmL4iEP",
  "key22": "2aC8CwtxqYWPVogtmo6FhPUkr68ntxCSkTHoC4Yye9EPJohd8P7dVKeURxS5PPQc7MLE5bFTTGwwBewm3qEMwjQN",
  "key23": "3FBkHTwJtf8drKCD5VMHdbzedv72dMCd4yT8UPodiECG38UVq1KVdAtYEVUcQBRRUMh3ks9rxN3yzfDGwP5rxVBi",
  "key24": "2dwBxT5y7CM3ifNoPUj8u6xfrgqM6MQYxcFc7x166cyCBTgFVwTYTagzWVfwFdubbgcw1ga9vMVXXuRj6LvWXzE4",
  "key25": "2CCciEsv9224CvudyuhZQNxdEasMooLBWbqLGv5FJAMpYKyobf6H3n22My3u6b8Z7S1qzpZudFU6KTLP31fU5E4A",
  "key26": "5eLW1X6J9U1ywzgp2DnowMVEvms7ahYqmLATAVmDyiA2zrQy9X6jGBjfCNbnBZp32Gmsk2Rr7drDpcEnBHvNaiBu",
  "key27": "4h4DNmfZmYQjeSZi2M2XQ55wk4m8gH99e6JpWLfHHwirefStrVfs1iuWdCEt9nAcocLqt9SvF79b8ZE4JwmHpbCa",
  "key28": "2RNpvFJgyapDyRiUDoXVURuKiFRra4TFJMtLb8D5azGpG4HDn3hgnPrQJmr9eziuwWDnUn8mHHt3LUhDLpaB8HtL",
  "key29": "W4kp2P28hB3UZUuFRLCRjXeYBd3T6Nm3hWUmzjAAu5YziXxFazsk8ums7PrvdGNdXHRcUMZWwnGs9yr2VrjJPkf",
  "key30": "5qSncF39rsMY8xitfhEqAYN439pUHD7jkMqtoqyGpBdP84ZB9DwvKjFQDZ4FLi4ys1wNxZ1cJovctN59jkym3nQz",
  "key31": "baHDSfdibgsg2u5ZL6kGp2SKwpdTxp1GdWcCQQvPvviaMgkquzfn1kXyirKsSo2i9znZBUvgEBpaXD5GGuqqDPB",
  "key32": "5rtSYGMtVF79a3rptY26qRt2uFYPAzF4tNxKM9xFkcfpbxQansqtYJRq3erPq3wCZ8fLFKHb7LoP7rVsWu9DkQad",
  "key33": "5HP7j1WPfpzqwwistYaJgVKpb3g4En7EYxtYKfPPsWqmFDmoj9McdH8gJN5ZAonhVAnPqRk2UotBKjVJ3VNPLVx1",
  "key34": "WB6AnVseLkoEUbZh5fvwXzWLbmtzcfAxUXLi238aYv91ScVN2YHZNe1iLqQCsDLW59m7wppqXtuQR7V3Eq1NiBV",
  "key35": "3gimkS75cNG4xcojhLqUTSWDxH2dMpV19xZf5izFdw4nEhddKQxmDpmhH2vHVQ27SypHCAz8B5MihAMhq1FDXv1h",
  "key36": "2Qa25tCWX3T6zqSoB87Cike9RaCeBdCTMPeVaZXEEcYnUgZjPA4NMseihuMok5fbSCexMoz4rEEp9mae2ZhciY1Y"
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
