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
    "3itmcn2twd2ZfkzYczKfjCP7k5sUacLuC4oxt1dcNCAQQeimN95esPDnqWbWncZksUDQvu4HekCbbAd6iRdniGUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHqDGevfBi9UqbTBJFa1zQ7XLrBgKrZmygna22o7kLFp3ndS3kY764mnW2YVkcdQ9nHF9aDCv4945ohvF9Kd4sL",
  "key1": "3zTnAsuXtdDqmdpgLyp9r3WL7A2tUtkYF4Acvkb2nxN2y5bQyMQgPnUs5mqiDGkD1FkRsXXeiSnvYpQ1dqsmG78P",
  "key2": "5o3M26MSfvxEmyC5oppTpvitqsJtA48mVEMJjSh7SJBwamT7bvfLmYhuREs7atos4m46YwSu8sAAmv2ar47A1SUr",
  "key3": "Y3GE6fz91EDt3nx448tyG75aoTykpfSmhBfbsWJFmSfACPRu2CMNMmEk4nHjB1BiJuaA9jDgSZnxMtbtyDUxvtS",
  "key4": "2uvvroFVEPe9TbmwF2Vk5qRsdZXpTPHDuihiGKThDVPRaRLE6sjm92NbawpLRJSwgNwjcvK1dNwy3yBSBxRCcGs4",
  "key5": "4hPjJMrUfgN7JEpQFQKVSGsQHwZ4ebWG3b5EutdV7GM4tgrj2H9wCGunARq4hTXZUTuQVhGVbBaYeVdRMVxxG4RE",
  "key6": "5QkeskoL5RqDuAQ3D3T6QYLTnCGcspPnYChS4aasnBTBEwpQig4UcGvm2rCXxFvqe5kfrKQZNQZEXjHt5Dtwiojh",
  "key7": "5h5erL4jFPHp5mob37PsA3hi5bMmeFkNEH5ETNFyLZueo3oRHHLYr4EdcT7Ygg34cFks1EJyKyuwTngy1TxeUvfA",
  "key8": "5qCQDZdhuqcKMk4dex9RD9LXK2CpjPbrSKMMVAgHCY6UfLknUPwLvo6qKzpDydUiyiL46gfoZtir44s3ReNKdCtf",
  "key9": "4QRQMF8KFeQ5sCQ7vfJv2Qc3jFR4xWhbmSEQFdfdih6DkmLne3K35xjvYnFakzTJBrfwgEgvB6eyF6kX2fytrw8t",
  "key10": "yA3kGVc2y65KwxjQZvDpM6AAA7YHuaFVKmGMTWg8BKgcmPSePxENSz2uQhPyotLCyhVMxKW1PmqriJJ7P5pjRD6",
  "key11": "4R2cLPjeiZU2tqRVJY6x5Yyt6riK6CbtZ2kBZexa17TnnUkVn15Cjh4fibCoUZHn3ke1S8qAw59Yd9e9vxMeJVBc",
  "key12": "4vuFFBjN2kbMx6TWPQ2WtPTzMDLi6UUXa2kCwtgrf2mamC4fsZzLjTXd93aNT9Qq8RuUpEd2GtnEtnxGVYQNz3s4",
  "key13": "2uANcprkhVUkMWuCAiYDbJavwuT7bSwLdvQ3gdTBdabiW56V7wmLcXBqXzBZZySzePVKXxu1PbTKGSScRUrK3hr9",
  "key14": "5TrAnJwAe65PDHnGjNAwWSynyCMBkCRyi5PLgai2cqVRLY3VYddstLG3fQSSjCWQmk6dx6cT4stBMvQRMuvz5wWS",
  "key15": "4XZJeBacL2QunKAnJRE7wj9QKgSTDkKSv9siWSGZJZNf1C4xmEUZYviwmxzwg2qGfkML2YdLrNzLaBea5Ki8oDyC",
  "key16": "7jbavUtaarbZcVrbroZcxpVX4T1hkRBXFYq8CJqsQwoFuu8N4DaF9ER9hsQdGXJFmYuJy5pD2U97wweRpEs1n6B",
  "key17": "2ufkRjDh2kyRVd5DSfrapi5L177ZkuMLgGSLtnqyA7yLaTsR33PwomAxujbVgmUuHhJhYQw2SNhEPnnmexCHzc9i",
  "key18": "53cMpVDHgmLC2SvZ3koJW2jjU5ahbWsh7EwP5FjWwoGZn6MfXnz2BhtkUvJ48Qa2vZjB1groJYzmP3FVCxFDh49x",
  "key19": "4DkcWRgqdrQ9wgKAU8PJCUEjWVDpxem3bUD1h93Cfr3UjrEKYRhFipsKmpmyhynYqDSeibn1bE6K3dRZcV5wGg5p",
  "key20": "5Fmvd4q1UHaPip4eLLDg1TB3i4ZdM9xbfPtHz6tyuM32r2VGmBKbD9SvEv41uh25R3FYmJFnEeFmx5zCygEPh5m8",
  "key21": "cv9gfkyHxHyQVEk6V2kaBYFDEADjdsGW1XcxP1MLNgwZpzjvoooz35rSiGSx1scshNxU6g4NfZkFYAFhm7j1Ao7",
  "key22": "2efGBi92ovgHA1SB89PNVf9e1D4xBteWEgtBjZ9QepoCzx2YYfQL2yRdUdwqVb9DBuisnjt4ihaWZLVCQ3NfzDQi",
  "key23": "2TxvTbhkEYDdckmGSCE4Tof7qNEEjTiWY4sXaJqaWjeZzudyz3NrTd4FSwh7zqFBN638rwLJugjAJ3k1qiL3sNat",
  "key24": "2zStz5veS59eVmxYLCJTsxZAgza8Ae8NvHSgnz8zFKo2ZHbZYyu94qC5ezFqboTxgPQ7a5nuzKkrkTsMvBUBV3NZ",
  "key25": "4oZPXrmM9vnLFaTtD6tbwddFfG3oW7t2R71RZQvdeGHksvshQwjopjpDZj4tZTtV8g6eQ7KMxz1B4r3ZsA8ofvXw",
  "key26": "4zfjVYYAb93PR2hkNimBxtnXB8twfKWG3AL219jCKfQ8sb9eSoQTQ8rJVLQMfTTVvX4nDVFmDk4qgAqaz2EMRDXX",
  "key27": "5zoZoSxuHMiDmKD91qy25M6Fj22WSA7NBzUqMeQu3mKY6g8rBF57JTHoVB35NhJRgYZEjf1VzcWdytg2q1ow3Bbh",
  "key28": "Vr6Lh3CHNw1cDXfCmAx5xgdN6zxqsPpzdvaXvGjnUn6SYQSFn3XmwWGpgqd9MVS6JL15QaWoZ2a9XNiApLuAYZt",
  "key29": "tdyR19CEqyGkkiT9DormxaHcn7yfhqdT7rqVbmfekX272cicZFLt99WftL4KwNw4LP1No8SGpoXHsra8i9ds9KB"
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
