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
    "2nxWSvmCi9bMD3JoQ83vfpLX1W4j2Yi7UEhQDavTPZxSi9qsNzUbkctSoZ3V3ESQspfyN7uFjuhckgvYxc5k15Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTRxcfBiXv4ZRbTVmCVhY7eEmgWddX9FvbxvT5GQ5CBZdjYFjetYWcA9gc4v9MDNXRhaHRGR3k57C1VvZ9xWT9N",
  "key1": "3pXqMpGGth8T6LEmiiB6tjwb5CedLoED9nYWu4Y9qqMZBkVqQzgt7oGJodxPdiqrYBgNVHJ4NtN649jzQgDRRfjt",
  "key2": "4L1XkV3WwLBiS3nWPmc3WswN5RJf4ZrT4eJYyFQEZtwVjbG8hnPSmgQw1uqatCZER5GWP78uwVTGNYw6sUpAGa7w",
  "key3": "2zCfArkYsQqGPqYAci3hGveU4hZmRmftrDYLBAsa4m6SQsgjaA3Va3S838B8i8f9qcF9osZbH1Zw1awEymDTFYDv",
  "key4": "5HDLdgnK19QfjT3ZyUf2yQ4dwAxvrRAj1t5SLjX8q559NPU6LBjjDUyZXBjkWbAWN6QwrCZsXpkG5xdsBRUJvmgH",
  "key5": "e3ZnPkHG22FKT9k7dsYkTqtE9LdMYweVDjzbw75TWWKg63iw2dLwJHSBYaHaykGGeLXRcDLViuqtztCoNYMksP1",
  "key6": "5zsoxBFA1CJxMkVMuUKcdb31urDpcB1c6sigr6NFbzB8LwNeP8X7qcr5JwXvue17QmszjmXQwr1kLh2iTyc4r47q",
  "key7": "65qXNSJ9Q4KXmzN7jJWcMgpAA1Cu6gVLS5KXrvfYcarBskhW6Pv2pD4wyKRQZKEZpZ5RPZEUnAELpURPxoF9dkcJ",
  "key8": "5dMqkT8eEdoBmpoDEL43P7hgUtXmcbzz3BcazEYhDWSeCBbWx9UJmGghVEHKBvexzwYTrMkSyPBZ1c1Yjsw9YQhK",
  "key9": "47PQNbDfaqR24gYtAgdCyYeEEe588xabyW8T1X8LT73znZR3XzsndaYPHcSMPG24ozvhWUKmf2J2CKtzCXWuz6p4",
  "key10": "3BA5LDtjk6kiwtnxGuWK1tUdzACrXS5ZjswTFVCrT3UihGkn6jH31Lke7cTrUAMM3TFwE8EYtKq4L2ZfeT2caeXz",
  "key11": "55VTPuE5vAifxUVKhn1NY8VYwMxRNS3Evtkp6ox4L82srq6BcrodKvY7Pk6Q885XBGGW1RWq8VE6AdKiTyxkTBkt",
  "key12": "3oSKqUcbwSoARHfqqzAw4gxpn2paJ1Sei5hwWgvNTHrU6e8YsJv9BkDwcGAwcDVjZdewUuATUCTFDwmDUBRrV4h8",
  "key13": "5fG1bSLKsVT4Fw8sdSjvk38UY7XZhQFLkDVbqZ37q9AFJxSkqpxx9zWMYZxVM6sLZ5S91tjvQ5GrrKRnZ2rhw9nA",
  "key14": "5296CZaFguSWXhsFajibBab4aD8c2sJ349sRrdwSdMRThioERn2aSHBJs26ZVjVUG4VNFfTN2wUp4WuCNRFRNnqq",
  "key15": "3f4unBYchkDwpF9sibaTs8gzv2UksktBz6LQLqormUjXGynJJhXGC9Vg4ASUjpAsTeDVBtaAvmxFbZQN2haUdMEt",
  "key16": "5QE1R6hpJSJvgYd7fvVvm5ygDJoDgYhb3BuDdAubwNYXKfopDPTW56KNsEUyXmM5RddryXMghgezNYXk4txoshpQ",
  "key17": "5mYbwK6X7okrHSaWt1DQwSXGwZnbXRCYi2cxkHUGPvsMYzqWkp9EWA1SZH1xFFWN453RutqzrHRga3sAAqVBb2Uo",
  "key18": "5XcEnpXSH3AqJSe3HQrFreVyhASbkMgWWkEL6i2ZcPHdHgEBLXrEUKfVts7rnXK2J7d8rtyfKtN5VXZfwPrCD3Tx",
  "key19": "4xANFxg35CiDwgnqKAcqNcAPrMHn5NjoKWC9nt9zXY7KBuwnBU9G1bS2NCeAAkqyFi4z48in5B1aVodcu9GZBMtW",
  "key20": "5G541ymaMT1DgHuaGHieU4VNHsQp3cBVixaUMFV5C9UucTjmkbMEvDXfTzqiEkr9KkrFRS6K6UpN64bHgAjB2TDj",
  "key21": "5EPoDWMWj1oj6Yxe9tMAo8r6NuAemPZTKUmogCh6QVYnGN1tx9VdCjicG4ZEWYcYdUhrV7f34JfZcZrc5pAcqMwk",
  "key22": "3GL8V29x3yyVbioJeCdXQXRTYbenkM1Cfg8ucFLoQ3DUuXEoDNwDNykkaFZcVkmmu1rS5DjEAEyZFh2eu2oZQ7Xm",
  "key23": "3ydfUU9EZFU5WvxLJ8iyG5z4Tr1YGwrFffyqroKBUV44DN4spAd79hcppYuDEpXqUx7rGaZzGnF94g8g48qqzboZ",
  "key24": "4WsSPmwDG1B3Sjik73GYQtYNMVmbZcX3e2eDWzfi726sLjJ6xUNphxpFdiwT7452ZoHH3jFuvLQjvTHAakM7HxGA",
  "key25": "2jfiHExCXNmoi8vnxJcvr6RBYARtArgNJ4ThGj5FJVA6Zy347YxAVWTDdeemyohcLCQMms5VfXe8BQggSi5tUWps",
  "key26": "3RudhMaLTwuZgSo3hPxqbd9F5xbrKsPqwMFGWpQ8KFv5hxxcttVTLmj3a1LmQTxTi7NZFczZvTDWxoqQ6N7Tnjai",
  "key27": "5ydNDATnG62ZcEEGUPGXktQeDjorPe2p85mqoQGqbRxdALDqbxgQuq27KCKUeXr4heqr8PVcDzgu5HpkKwb5Pgyt",
  "key28": "fNEHauMo2cqu8iCLu93xb1wHbxC3yVkKTBQLSJhzMZtQ96r3VAucjp1LHmDB1rGFMqTJbpZDzRPVhLocnEJB8Lj",
  "key29": "5NJugkJePP2rE6Nn3fV6DUH1qsDsHX2x5c1MTrtyb7XrBsjSLL7LqvYGGjxTRynjHwkC4qMFUpEv6g82cSWDeihP",
  "key30": "37VierPxKkzjXx62o5Lr4jX7iS4nitDmdeMXe8ivRehFTscmrrAn3NJMrgLPjVGAgpY3Xt4K7rvwYgfJ2V5xeYFp",
  "key31": "3yzJAqPPzP2T2FTMsdLoSv1uqUep8GSmw9ePKDCpUk6DujBXywwqx3zoTNtSWHn1MXtW5LmJdCxshwfiyx4ndWmU",
  "key32": "3DNQQHdTAxVp796NcZ6h8PYa7ugiUagFG6cv8hy7fRRJWqFrcc3Uq2QQhUnyJpafQYMEkwuu3qWsVdAkieFbPWVx",
  "key33": "55Uf4hv7S5L2DDfStPYkbTXE2sS8JVzNTekieXAbXHdT6LQAqHm9EuR7LXhuFU9oVQQ7Sun6gsWzATMPpj9Y2FZ7",
  "key34": "3VjE6e9XZSSyZM5YV4izpW9QFrBtwrK45RhtJcURv3ZSFJGajgnQgrMqLfsA2C8mb8Pqg7SJ4BoQWqkerGG9MTh5",
  "key35": "3vifvRHGKHnt8dkbyWc9H6xCJtHRkLzRP7dzh2xXk241Lg24wZSfm4gLkYgfgfTAY7bjmqji2kskyHiTTtuvTMyC"
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
