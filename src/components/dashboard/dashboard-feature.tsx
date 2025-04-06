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
    "58P6StzsTbxQ1han4kYSpRtZ1wdzVuiAU4oWnc8W5ARYFhC71FMzGAva2ZJGYFFrWhDaMX3gs7aDrahaEHUvFg79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QaLxEe5FRU9gXJHSUBuaLeLuLTNJr7M8jrran3Q2fpeZ3fffBakAKUJJLFk5G5CJivfDp1BVEAXaRfqVinX6Pmw",
  "key1": "4QuA5ARAG5UUCNrtQoRm4Nav9vDzGYJ7GSSq74MF5r3RkQNERU5aN5WzMT3voWaJjbu5Qa76X3MhncnSim9EYR5W",
  "key2": "LCq4MJmUrf3RNJwWtnXEz5t7XVM84SNMWVMytUyLJQUfkVkVirQuNcSExC8UjF5QomLgJnsRSx897DPspyXtaFv",
  "key3": "2TpK47K9TPm9rv1MQmVt3S6QyH6wJUYh5TBx4U4FdJ3jSdM7Nhuxqk7YharE8VTmP7SQGiD3Y6vvAyp7mb4KEyGK",
  "key4": "3cByYo98De4Ek6Xe5guQ91k3pg3bGFe4vDPCwvHx8Eee3cAT8k1LNuPe2u3J1Mmm2hVVAeWQfVynLny7bjj4PRte",
  "key5": "mYaBsLTwsbaiZRxazM3XcBasEdxGm14hZje19osrZDN8bfpHzAK1pPFxbDnqPd3gwhxnBg78iaFdGomE7VbFNMo",
  "key6": "4hYxEQWjnz44EKWVFJ3CWn5xQ4rok4J9UJZt8m3FhPXmReW89mRExPsvn8nXL2UUPtcxcecsMYTXas8o2CRZWt1P",
  "key7": "4YkqtGfcxXBFB9B1wz3z4JPZyxMDmBiQMZG2wrSTTnWiRWA6kcEHjLdLkKcN2PtheweqK95C8YaNjrjLLs2i6VFe",
  "key8": "SGT7jXpTi5sJi7MDziVGLh3D2LSndQEoNtdTai7Df1MKwX6YhwfeSKsyGYrFuuvKy24qZyC3TxhKoJspevPeaaP",
  "key9": "eRxAY2rNKnzR6ST5o79skDt4mRKTZtTNvgjzsTHSTzDWKWAm8qFA8eEmEkafJjkorGepDdkSVYvoLFZk5DyZeSX",
  "key10": "TA7j7Huj6d5TkeKTEviA5WhuxWjwC2nQt4Dk11dTabapAWRMLz3WhUpjNRUkASzmGEmE7Gso5iXctcUS74y2re7",
  "key11": "4R8YVdjLuPjgKfScAw51cvG9W6jRYcKaUQYzqA7nyWXdwPW66nu2pV875otFNW16nCViRJcwyoTayPeBo5rDJb3m",
  "key12": "58XQGawWHcfHvZcX4X8Es6DEsfW3JpRzyhRqG2ktchMpiBiGxJQDbJtZYSRTUqsjJE4udXhHobWHzdACE3m3mAS6",
  "key13": "EKjBjPV7L1nbgQGDmZjWskJ4qvF6pGpz5Mby4NB2n32wPjwAaX1dyVoPvEkojjB79nE1ayU3uU3SkyAJSN4Dv5e",
  "key14": "4gsV9yazeHFWQvp2q37b5FSWQJhyLhNqmeRmFLWc5sebFvUi4Lbdd7KzqsSdhtzLdoZPczEcjdL8bG99WPcmWX5a",
  "key15": "5uTteps93SJue3XSXrYwYiLGseo6z9Smu2N9nB6vm6XoP5XYph8GdjWgwYMh46rYLFATjknPni2M3xbnYZ3fL7jd",
  "key16": "4dEhxBv81Q9UvEGdjUGXp3QzhtVV25LycDFcsQedNaPHVrtRPKSKVzUdWHb5kdXLQaX1MDWrLUfayhZ8PMRVmBF2",
  "key17": "5YZWCPLWqujgGgGEcA4AtGJorWDPe4umQZZBj4Aczd6UF3FGWnrHKmUY9ybcZ8i4eTB3U68c8QouhEUhgcBmHFZZ",
  "key18": "4cgL1VU2mvLR6raGL95RLt1V4DGCU1EPMmUC9U1FYLUkVfTdFpiM5vAWthGFNgjYZvTvYFiNrEWdWYV43nEpMcC6",
  "key19": "66RF8oEoxSZKoNXBsagRTAGw1nE8rZeRkbvfRew9LrsmQGxRoMhuJsdgidCLdF6uW7tNh2X9bpBABCX5mFq7i4du",
  "key20": "56RJKvrJyyjzGnxHcy9gP43DJtcDWxy2WbRSZ2tigM9S6PJqNpfp6oNMj9y2zFEXsV4xddXFtEuQE3R1b14t12Cb",
  "key21": "3Kqd3y7AK6vHsyZgAvV3o4UFymoZK8jfvg6Kz2tyZp6aKJuv5ShYEb1y5yCgFUKJfMnaca3TWGBBkNdrVswoonM9",
  "key22": "Nv9QrMidUFP5FUQFRgFFNK1twnWHfZUqNjoNEA5rFEfP4mbadnZBDBjtoj36tkeBwUfUjDt7y7nuztoeX6VSA6W",
  "key23": "2WfQfyDKNsntRsxfqSUCPmvxfuJHgrofVEXqM5ZAnYsoTY9QeRzvsuUFz4aEXsb6iySHfK5aiuFJ3wxV1hj78csB",
  "key24": "61Padab9ve31dWxua8SNgyMgkX7q9p8W1SiDLAeDMUcb9X8m1sy6vRCdkNwmnXcMb2ez7Endgj4aqr2qmgwt313d",
  "key25": "5xbmBGz9DSmWUuiZWhFzfRbc84coteM9GxFioJZ3vNPwPzRFVPNyCGy9EgiDcP6SCp12TrYmQg9ZSC3x9g68XkxB",
  "key26": "5yR1m85hMGTGkS6QzQoBsWeZbaLaaZQ1ALghqgYt1EL13fMJMeyoYJVQSwGpMLdTJs76bBJqTVntA1aekTSYDM8L",
  "key27": "3HV5qjK87skUKCVf8uv6S2rFRNQ4Z7uBBVyGYK5bg3s1C4j4RqSA1QEHykH1MzaFqoaMiWNjaNJLjN8uihnBccSe",
  "key28": "4L24FN9z2MQnis5hR7MQjqpF3bddmgEpde3MrKxMCYuXuo3d1jY13vS286ta2vGRsJy6fLucjwsX6k8Lj5EqWDRU"
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
