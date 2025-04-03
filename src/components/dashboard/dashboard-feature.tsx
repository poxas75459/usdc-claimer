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
    "261nRa6yvFvb9DhkwDH1KHSYtvtPogFMWSx2KxytdJLXckJw12yiTaLGG3fgzbWCzjhbwDMy1PCSiHQ1zgfzyMXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVJgtBnRKKzKP92oVqqx2w1Esmo5PQo1MiWSYSghWH8py3itSvZmQnmr1QS5arAgUaxp3cvZTavhVP8uERLKCka",
  "key1": "3tAywRibRV3QVygAqKzVdYKdCZCb3NZBBeGU5JqUws9edBbob6jkhBxDdSymwBrfQcVY3Xc3XhxuknP3uewHqpj1",
  "key2": "3eydCWKasNMGmoh1gMATZkWHXyNFM1i3XyqkTBK7GiMvQJHfkCJDa4MUr2M9RJxqL45WEGjHPfo2re3yyT5QV9qt",
  "key3": "5YCCHnggYwmPUryTe2xtwfDHveMKNYbH3ycpuriYqSZnzakLr8VAbFhgJEDdcFRVBDD2yJysF5SfSwdPeA65LSr1",
  "key4": "8FK85ogKgmm6U5zZrzdZAabf1TPJDeksye5mQUSwgtnkmvf5ZkdS7jN89CjMDQpfxzxTj5r3PNXsarh44m18qMn",
  "key5": "3qEPFVgn4cFrydnrm1qW8KhWij6qR9SG7X6cCCoavkxjtoihhHc9oc2AaEWW8Mc28naNmd6C4CV8AKvDfCS9h43h",
  "key6": "4KFewnrvVt6QmpHiBppjcHnLoEEhhy1WezoF4WdQhs9Sss69X5Jw6FPN65K8qRJ3RhjmBiLdS3zWhzLskWVSiJpE",
  "key7": "4A4BHQYZdcGCc97LRQoyjmVyxYwEkbSz1snFo5LNN8gVU2uiTSkbEzLVZJ3XjcqFLFYHi6LHEj1FufsVFtZXSAdZ",
  "key8": "4dLvJhSWWnSTuZkuVReRoFyqnxtVG6mQ5B5w2zxaLt24hEcujYFqmVCKnjFH1hLxTfZPXB6uqMHKx94GfWcA4YA4",
  "key9": "5CZjrPsvrriau7ydb93fn4anCxeoy9DVYV7RC2k7QWoiM9X662bE4VLwkGpVFLNtpwnb8mYi5K9MCUyWkkCCgtLL",
  "key10": "4eVcwgXoBjDntKg5Qxa894UV8SQK4NvqakZCcqENiFeQUFrgBLkArfmDaypTBMQ589DaojEHBBAWr1fquXL1Y4tz",
  "key11": "3TSY3NLmo7TSR1aMu9AFPgJ87zn4XrvvfbNWHZibHSEf8os8MaNgJajQo1x71YtVbBs48TtU8npZcadez1gk6qKd",
  "key12": "2VgEJxdKhJPpctQYdNCU44rM1Z2CXKVcG2Jd9XN1PQSX4MjKRC3WV4NkH25QZP3W5U37Nk9LFhJ43QsJSoPQw3vr",
  "key13": "3YqDfQQV6ZKVN2RTZrzVjHmTRyyDyDFzQuY4Kwxq2xJc69EYLUCeNknid2vAuXht87UPCRNnPuyrF3G9saoiHghc",
  "key14": "52gZ9wGbArCPgmwfCCSvvvyD7BCukThDebe4EXiBmYaJ1Ce6tSVr1p2KRh9ndhKPPStju45zTSxXSPczKwvNyi5P",
  "key15": "4kbp2fWaRhtH7d5WAVauCTbNvz2ekxP8MHfdC8gYA5guSyCsLmZCz7vJHBZ5KgLn7e6rZrcenUmaZxJMCQUWevKZ",
  "key16": "4ix35jqK9NDa3BYcRaSqoNgAdY1yUSKZ5NNxN9m5fEPiVyDEqQLUAAbtwbtYNDjCqFXbUBhT5VUF2iCvnhb5agGM",
  "key17": "gvDaqiNF3G4pGP7xvhEJbSKHZSDivp7MF5ijv5zFeuQiVstCQWQUyerZ5WnbJJ5wmNHaDtwAAwA9gq4QyjdPKEe",
  "key18": "3Zu3LigKLhwJYWzrQKzL1o39NpC9uBQ1u7M9k64fbwd1ydrdrhKVgQHAHdPcSFUYUGkepEZxAenkhbVhVS2rGwcz",
  "key19": "2amf6oyE5ndjCTXEQaomJqUDMwjUE4Und9J71zPHv13QRYXTfiMzLhFEw7bY39gLdJktC4TfTcJronnQ785hJT8H",
  "key20": "4QSm78cKXY65BAYGs8aNeDcQYmzRPZMeh34TNYEXCsksNHz8Xe1q2g7VGr1rxnw9NqmmcyrLKKJKBNw2apQ8JTWq",
  "key21": "5FjxKVT1KwAVTN7qvpviHVXKLW5WzUf9ifwQBXK4wARW2TJ9VQeAvtwAoYAmM4BuvoLAxd5rHYdMiRcFEugyT4Aw",
  "key22": "2W3Ak8JE4ijfEodqJbSYcj1VysyRxfT7rqSrvRDYExsk8Cr77RWSZvqSqi54C7Quv3ntjpVZ5Y4FJ5rixAKh77JP",
  "key23": "51uD5NG2YRw3Y9HwkjNtHPmkp3Mbbv3MjtBpAGW8XTdx333ajcCxWqpyxvEZy8xorjnQ6H7VvMRH5aVLkfBTEHa9",
  "key24": "6R3GMAGzgy4BcmUsGKW1j895X6C6jhPdafpnVhT3nEJA1vu32eAC8d3HC856FMJA7EASfkixrm7i7Tyc8i3paHd",
  "key25": "3rb2XnjLnmsH4oHyD5Emr1H83GjmLEwQdKMty4z2wZnNub5pMXrBVURyvFjfo99fCTJ8tAhhe5BAWveFeQHR1DWS"
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
