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
    "48Txge6k6Xdv5MthyRLNAqxHU9VhLUcQhAtETYtWvNwhrS1XfjejTCBLXjbvd5TTbTg8X1EHqc7isDzMXapzPemp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41euXsNskgPJXqDwcALWauWhW8gFFh2HZ3P5d9uCKPoXapNnymuGYDjb44E5wA7EgQ9M7z16Y2fU4tW4zL7p78CE",
  "key1": "3zwFQRXkRtqWt3CcG1T6kNg6vw8PEZySmL5Yv48MyV9nB9feyLUvdYeU9dPkxvVMVFfi9VVEShMzrMVBCt4img32",
  "key2": "4QwJ6cK8tVEUfXM9y96iBP4PjqAwoZ7a57EigpVoS5YXSB2ZRWFsywhCAsvNd7fb3ytSC9nJiVzHB1JZQrWcrnGq",
  "key3": "47RY9iiMLqTFBxfxTt7hv2Efo4HZkStDtHjumdcjeCYYAgxbbV6SRF3hCULX6g4CiP1K3pgijWe6hLtpkxmHQijy",
  "key4": "ijcdFHUT24efoJd9txwxWfC5eR3XAgT49coqVzo316AoLo6n5rPp6e3upLDCxQkh8gSPuCpYEefPcrCEZaqQe5e",
  "key5": "5vMMmpB9MtPCfY9jCaqH3ZHr361eABc2i7eM6Cp3sKjvcBRAKurpzmEwhUQErSDQ6AFB1dGeWFjCejQEi5TGgWtS",
  "key6": "2WkfhZuiB4EtBTx3NnCZddxCqejbxWDuMrn82aKKn64WcfZ5XyJjGZHoevM52FeNA8jPv3xeRrpoJeDi47dxZKEf",
  "key7": "FkEGwgHeGEgeQiQYF918UDgeKDFa1DXvFJsgcGuKRw1CnJCGYUfS5URPZU6CQaxA8JAEC9k1NTEKt7yEeSzg3Jp",
  "key8": "4CJFvavfdkUBXJd2MU7dJebcHfZ3P9vuinAKpQ88zJsYncj6k6JrtVeWQe4cCLrbyxzfWXDwdLEzWpmB6ps4DTDf",
  "key9": "22wbWhqu8osaTd5pdbE76bWevUgVBAzwAVf7HwXSMzxQwQkBUD9g9XLEfmaRW6XzH9ufhyiXTgnRePpSu2tmKupn",
  "key10": "2APy4zzYvKSw6fk7mU8PxoLwexU5H88xJZkwF3K34JgQBNYZTyFoU4bT4dgVRkVXpejBAm8BLSFdc6oB8YhYs67S",
  "key11": "5bkFNckhhu5SBZMDuVxyPpKGroeMR5ipN6iWG7Pp9roFQFAw1Ahv2Yq8HyyT7PmFmL7gfnQ65WWKUcHskPoP8Q2Z",
  "key12": "5m2vpF7aRaUjphu5CjHJ9Jb6e8gpbsQdaSMcf82MHpW8eWaL2FRj9q1a5MamfjxEVsbxg3YGQTxAHnGwZoE1xZwr",
  "key13": "4SZfP28Cg4gezoSzL6NmpM62seQMpF9T5yPGm5nSBTi7vNgCXqK1PrnS6kmwWWgw8QjMRVQgWvS1hzUiwwcpzo8L",
  "key14": "3K7DDFiyeunB7r38LMqL3iESHX7J1kDjgtoXAhVLUCvMcomnbR3hfc8g5Jce2kAWN8p3S6GgAYZQtTrWb8dytamN",
  "key15": "hAEg5f8eS8RbDXNvBD23kFKxmMagneqbt24jXVBsv9RXABrG8eZZtCcYNUShGduaMtKpgeaQhTksD9haWf4H9QL",
  "key16": "4hjGv5kA1qhYuYvyk7T1UcEQuhR9ABTjGmZEkkC8WBQV6v546LqAAurwoLwva1JHxg84MnBsbvNvCUE25hwMsriw",
  "key17": "4T9miFbn2YoBNe69oikwA2Wghri2aLTKhQsa1RcRYJ8vh33uNwptmCnnrq9YqPbViHHnpPkoa4WiFfWspZ7Uohwm",
  "key18": "5yHAEPkZLonbh9KpNgZMFVrrdHUoDEHBT7NJeqqch2xcZv8tmYxCrkhGUWuE674kwoUsw2RNeFNzrGpaWS3NmxJ6",
  "key19": "hRwHm4i1EDjMDvDfMjv6e8aNpSB5pGCwn1uSjJxUdF3EvCn7R5XrXVhJMpwAvEokv1QCJs87Lc6DdZw4jj3uL6e",
  "key20": "2umm4T38N29Jds7cjweT16xeh8DgvyCsUwKeZcAZKWunBvXPnnXUStjDz7fULBUUeXR6cRe4aHz3cmofV1txzP21",
  "key21": "31n6frKLJVnFUM3dESPrSpjigbLU3fWaFQ5JfPaqXofWMzRuaMjeXRQic8heLwRqgPX84aHZAV5ege5F4unEBAE2",
  "key22": "CNepJ9kNFSfR9wRupXr3dn8ssqxuUpRa1dVMGrUqv1xrYUpWqcbhn7k5BM23fLKLy7d2373LfGpx7TiKuF1Ta2Z",
  "key23": "3ApHJQ9EgdrU3r4W7qqpiW5cSemT8n5w41yXe9q1vkR5zr1Be9XuTmXCQCp8cqGAo5HRPsF4c3pyK9gNvuP5mXqK",
  "key24": "5od9TKBUfrSiagVi2qm4EX9CzhssDbhdFbmzTGUyEbnz1UykjYp4wJm3q3fNDLXmCfkhpc3XrFGQuKYYbKYTSFSx",
  "key25": "4u5YkXpxx8FLsnqpNyQxbL5pwqNP7EYJ7f2eB4QTQHptny9rHf8LgSsrVHCdUZEvgY5QXywGjKYm1uXrqW46T7eT",
  "key26": "5KhhSszoE8wmHN98vXZnkcnX6fra5vrGQT94vbVtSxGQgt3CdE1shgF71bNnske2yAp3B6tuKwyjboSQaJP7sZAi",
  "key27": "5z13sHcs9Rn3BrempZn5Zs8aPLAW9AvhrmEYkLPVwXynBtHfwZHQdjwF4r7FeCFfLj7JCWZ8MNdpj97DBVwDkKTC",
  "key28": "5eGet3T9MzT6UrjFc6kuohy5SPNAcmF6h9mieMoVfgN7J3JMUDUQqwnUTyR4Zew1ckoRCN1pRTkJpJvgeezikk6C",
  "key29": "3C7hCuFxHPWRbU6a3hEaZLGWQK7iakPiZ19YL1D7SaQFi4up2VGFQakPAC4pc6WhdWD4NCPc8aABoan5Mc577u7e",
  "key30": "3C3bgjb2WiKbyLCs2aLtRHcgZcoyz47tkVdjM7m5wZyPPefhjDuSepmi11xru9ZPEzSuozYGCYssMytDpzq3RJk2"
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
