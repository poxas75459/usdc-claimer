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
    "zaPPXKMToRnM2Az9MGnGfGSZJE5eaP5Gc2W7neFpKaVpmr9FCLvpukjLKWmfEf8Q6cN4Xufmi1tZkZ1QHxCxKqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYoW34KUyxEbsvp5Xx6Uh6K7uFUY7wECZf6tE345s4npJhD9eafMfPuzDpipi5GS6ZKM4QYtcLYd2QkXzhuYhbC",
  "key1": "nzU6MWVpgdRSZydfiBApfarbJNbFetrDvNNkFrxpsdLwSPWnBE7DbcePW8ECkDuV5AcLjsmrH9oPNnbGKS28Hy5",
  "key2": "2MKFXZyhJ1hsKgSQJkKMdQHRdVoG1okHUyimHqkugtmRFyfYnh3d2QViL61juV6J9a1ZzYGkf1xXCaiccoPNa13t",
  "key3": "3E62o9N7grYPqWMAkUDYbb7BD5MLLhrpDqK7dP1LdMzdZ3dy5YXsSLTj6oooM1mTUm1FvjhELnumpJkEkb9menV3",
  "key4": "xLZd38jq2cBHETExrH9v9V8o4bYyaesmTToz5H1HL9CXA2FQXmk9nexzHuYC6WSgdAya8WUmstJ5zXhwHvUam6a",
  "key5": "49pBt6XG8tiychGtoVuTp9owGQZEardLRBGzdXwipT4jKJwjc2f4PN8Lv16wV7WGqudi6izPpurH1PsrcChRjktP",
  "key6": "4AwLt6Fg8wULiN5C6r3Rh2S6pTyHGmf8MxzjpF3QXdnwSB7eoRLLgY3sYYTKJ7jqoe6WMPt9sAYAMiCVQu8DcSca",
  "key7": "5eNK3L1pcx4DQSK5jXsqoc77WBui6MkcFNQ2SghJRUMBreKvJrbLwFFxtdXKzDbw2RP8C1PJWMyFnshxALqwhDDV",
  "key8": "3a2n63QD44sBR1FE2PKzmcMeiDh9XEVx82mWZPvSTFumV19nY8umPnbbZ4gkR2v8oHC5pPkKpq9Z9bzSGG1qVqNA",
  "key9": "Mf3vkEWAxaa2Ay46x3oZs5DozHfhat6jxzcLAedhNiC1JtDjq7fh6BE2GjziRaFjytXGcyLrPXnhjFnHuxtHLPa",
  "key10": "5anK2KaitwKBX34hmKtFS26JRhucc2j5LMAAsk9Phq93xtiRXunEt3o7duxpV7GRXurLw3AHaCPgvnars2DABdAQ",
  "key11": "2ctC1T8Hy67HRFoQ3CVEQVgUY87PruApWxSrathsSTTiRtcufKCyWboWkcihZzK3HJHjCPe9WWfaTfmT7HmoZseR",
  "key12": "4ntpwtVRY7VC2tukdmPUxBLy3ddAAEKajWsVtAxQ1bCn2rg3aWKmNfV4bA4KBdBLgPyNm3zWFgbNssa67UjDvJLy",
  "key13": "5ZNFD77pGXybbscMSmxEcostYqXmL6xLo26MEzZqVKyLyK2MQDDvKzifXrXQG6ADNCkKAWqECqgZgBjD1i6z99pV",
  "key14": "4gNX6iwf3a1baANmf4bPGcT3U1sSxRidYvE1vEWaUSsvxCGKWAT9X5kQ6VqvtRCs8kx3Ja7USxhe2gBG6Pqa78bV",
  "key15": "2zesVhVCEv6XdtnUoXiSCPxagFzU2i7GuUy4FDAWKqjKMn8z3PzYhCKfWUZdzfzoYV1rFz73N46WCkQ2GmVZyrKW",
  "key16": "3BUo32GqWFWQJv1xJ1Riu2vZR9CwHkRxcUVGckTP91qiBRJNwvZoFy4qGaTqd2cSoZeZQP9b88qt9XFKx4DPLLRM",
  "key17": "42ZsRxLaBdEx6GfHMeXRVFS8DHBoC9XET6k1xjg29jZsHuWvkYZxYiUctGvEFxqMwey5v1gu57cTMcsWEfTgCp8F",
  "key18": "57uPNu1m3EnQRBZnL8WQhjSaPM7e8DvMvgnvDsbDCPs8sxkMxzJRwEr9dKG26vjbZKu5P2CF81NsEyYe2qXjrZ6w",
  "key19": "5DMbxBgsh6TXwZNtgn44Vc42JiQNyPorfLgt4kpm1Dvzd4KxFhuvaupLgqWFKoERdAhp8YFeNXYbDqaLes6xSX4s",
  "key20": "4U1qt5J7kpFyRD6FR4auKSLyZQf8akyiyQHPH5EXHj8o2VsWGj8WZhLy6nabNTXXbCQvuDmVTvSHKtRyhMn82QNw",
  "key21": "cyNKDZiDnNAXW6V8NPgNEo9m8j3tZ4mDPNHnfFA7pq6GoQjbzPeKoJ5ynxZpsQG8Mvq7WMeByWVMhq14JmXiC1o",
  "key22": "2ndRe6MjxxYDCEAkqqozCUFspsyCBp8tEnpsK9gMTtwY6bxQ7bugi8XLDT3gzvjDKsi92XTW9TNB8BtnyD77WwrH",
  "key23": "4gG9q5r73ezPP492sk7YtmrzCTxoBgNvCxL95HhwumEyEnb8kyVT8BXE8nGLkH8wz9aq3TmRM4Us7nzwWNvxkYLF",
  "key24": "3FR5WwXhTabtdWGWx1uJvgezHvR2NTsVRGWzn5GbUiMvKvhhHTQa1wLX5dLmhj5VXvy7h4XPdjrMqDbzXUuGP1pD",
  "key25": "5DXqBTsARYU1qGb1AT9SyJDTq5cuC2Bf8Z4Yh8fV8XaMEzfoGig1ZaJJwLLu8rnPcXRfuVwkdZ2GzP3SesezEAuZ",
  "key26": "2d2Bs3tVTFmQoMHYjwbGpKjPCJSR39tTQKQCnbezNNvkHrfGmrESpUm5jycK2N3BW6VubZwWU8GsaVvKbFfRXmty",
  "key27": "28C6LfNC1897t8uR16UYZkbrA9h8kSPyRoSbDrJuNqzJse6p5o9rT4ZB4j419Z6vUUPd8c35MWNzGPLPEQUSC8vV",
  "key28": "KWwL9fXqK1BdB4BVgYszD1XynsCdkjzuTp32aKSnzqVD9rDtKBPeVHttTH3d9fS37v8aaLZs6fqZGC2jQBpr6du"
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
