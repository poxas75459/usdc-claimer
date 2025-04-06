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
    "2ax8akPU5fzw6mBTK6aVYSK68hQ7XS6tzgBTVKqUjNN3XyhtcPcffMF2P3BwKjRyuf32wHUc34PPMdTZazzxEuGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYr2NuFppFBaELBMsxprTLiEkBf4LmhnrnGJ1BpJHWaP3zkmHXaBR19x5RrSMqt2ji1PEdo9FVGyGuUYFcLN84M",
  "key1": "3cE9WsiRenjzoF2rwssH9XJHRySwpAtsez6FD5pimhasQKBKQaKmdrNcoiKdQjx1wnYk72fV5CXByY23qz4WuePU",
  "key2": "i6pDBDpu4ve11rFM9TSwo2F3y9dTzUKJ3joFmz51FCTtL3fCN8uTKTi5MQKNuggmDNGh2G1jprTqc53cx86S1K4",
  "key3": "3aWcfe3cRz95ZvVNiLoghe6mhV2R6DTA6jHiw6Te3va3rH6uGuq7eS4sSofKZ35YzRYwEQFcYmpdSPWFG579Hhdf",
  "key4": "67QaSbdwJ3CQMBDa2B3BCaLo7ebhb3LGg4NgFEMeVjmbSsPy2iMSBnwZFeF1o2gdZxT7WajK2RNg9NzsQvXuvuR4",
  "key5": "24kYWiwbieXfY4TnjfJqHAGeotrUTk1qbXXPWFj1c4oJo68p6sC8gfak1wo6uwbK7EmFEnyWarDJc17Q9aWptz89",
  "key6": "5LfAywTypkPCLgWkug2euChMXbzVwC6w58td4HFDj4tQEVds4Nirj27jqL6J3TJbA8y5tFdyr9MDTQ3wFxWvPxuG",
  "key7": "4CeAKm6oPkPnNuHvSJken9quJV6p8tUqLv2Ub8KAvhRq2MekAW3rE5upNsWTGHDU1JXRNbEGhm3Jc8KM8C6DKxDP",
  "key8": "2A85xPDYskvertp3bwPXdUgVU4YEhRbtpQR4998m3hG5TSHmzSYKD5toFyMVFy4ZVKTV82LxaEYt9sq8CJwBSUXH",
  "key9": "2yTzx9FwpMzPXiduUoyYa8CcvpHpREz3pW4UEVKZoU4xxA4o3K6QsAMXSP3PzxjYTncudGvndapjZCVdZE88TKU7",
  "key10": "hkQfCRTZCbosbJhKM6vao2tWm7HaLG6MnVfb6gsQDtExgqeNsLA1ofhgzE5RR3g27yFyRg45N6uRGtUb8CDVERy",
  "key11": "34SJdkNfJc6uuAppdSmjKwct4tAF6uqdFk8wzonqtrh3sH2Ago9TNdKETwNEYzcrgZVka4M8v351qfJ3d7WrhE7S",
  "key12": "3msXofYKUXYGaCFFb9L9TjoYSY3BBmVb8doeGzYqz6aZ7nhCsb9NCNo9VPYNa18ZSn5xaUfVg7n1pFkKuTQkQ45G",
  "key13": "36GyNhFveH52vr2P7topUCrwQsjLdYaJAQ8ntr3S8Gcgn9ndjS6uWm3eJTnqztNwp1HfPB5C2ww4RfDdcoefDMF",
  "key14": "1rVo3phnVDQxAhniadLiMkQDmV69MFVSRTt1Da6AohdvnMXJQpAVDLy31voiTbKEhMh8hvK2ThBwNLtpNsx5hgV",
  "key15": "2snrudtg4jPXe4ysucavH3m7Xmv6Z8nRmBNDYBbfzkKZiDykx8YX3c6FHYzR7dGbXJpSh3CbRXAwvCeWmduejiRt",
  "key16": "2V7RC6ZJozQLWXeon3RTnpKsbBDqyRsact7PQZaM2gwqcYrQBzrWb1sKbAuMngdK2Xs4Q5sR1Ca8dLDq2bZ37B7A",
  "key17": "59cBWPoF4M2CdYcxyTbWLQqtDCQYJy79Mkqdtx5QGhAgjrCayZrKhrZsgchChdQQm7JSM1aVUGS9WLnDchPzqJbJ",
  "key18": "2fG16cCngrLahT4Yv9bBPQouBkptKHpJH9awhzJYZqFrKbV7yoRk9fzbV1xTxS5LV4cmGCidYjJoftfS5qSc3m2w",
  "key19": "58p4xxuCGYJfQAEWfbFDFsjuRKEQmKwd69kNKVj2cFFRfea2or7dnx65jcG2yD8YxF7E6n2uFzH9TSMu8frVBiTk",
  "key20": "3J72QrZZ42YQcoUFdhZXSZ62R6cbgNGUiMkDeSgpKLn8pTiDJUouew4NutFKkfKyHQhwFYkafAYX5phGntrCmHt3",
  "key21": "5ELdBDKJdZZXTAFsCY4butUqyy15i6CuFPYRoY1ybtJgyuoZp7kAb2XnRN5GwbiWNr5N1uoxk9R72b54pHfoBAx5",
  "key22": "4uiHKnJvnQhxmyi55uZM24s6ocQ6Shr6Duc8ecNs3XeJhPqW3SjrwYAnS4tSQzmwfkqTdimfgWMVByzAeWMFYZN",
  "key23": "D1iJK4qEbWP76oYU2LWatAeo5ow9gB3o3oWLY33kUSNtjij6BGGzAjaRkqviqjYha3ZByndvNPCpAW1gUtmoACa",
  "key24": "3eojCgddcokVe3Nd8XD9QkHLhpg9U75isGwn3SfX7zFDBqDvvqV2rSgQT696P7qU1RF4ZnexJKQZBLt78WjeG5x",
  "key25": "2Vh7JgbUgueW8ir7CrhXsHKdwRjhfZVRe6xUPSJYLECamEzS5Wgz2BYW252EmLi9BtaxHjbqqr8dy2ymmnBtzvsW",
  "key26": "Y2wNcuPfXRxz8Wzbb9gC4yc7dw9YDvj7JsbUw4GSfwLTe8dDZsTS1DPeZ96ZuokfbQ8AE8ShFuRD777o9CXxWbk"
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
