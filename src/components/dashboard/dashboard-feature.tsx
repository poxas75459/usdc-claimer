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
    "39mMuGYpPAkcJgt2CWR4FYLUk7kGj418hnM3MrK5p7NVzd3ukyaqppBSBB9fdTkQSQ1bRABe4GE1jYmkqV8FFGV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsxvkAvxGEuHpEg237242z8AP2eoBfAMcGhGFWNwUSd367cyT2NVnA2ceCNZTY2him2PB9gPY8vzahM4rGZF6uH",
  "key1": "pqbEZ11W889H7LqwGedR6fHMvxUcb7LZNL2sz3F4paMLyVhyJoxLr3wkXrkFCiti8kwNiZ83NuQZWSpEzEmsfaw",
  "key2": "krGeM7mj2sfcCxcA6VMFv3SeGnBHyf7o2gQvJuJYdmc61pqmvYRhZUgRpKKiP6tnrrbvmNUm1BBquwxj4Zct17H",
  "key3": "2Wd8xXfN1cFr37x3pEhk1u59gZQUvkbPox9BHog3nNGrjNQF2NZsYB6vjYubYHcy4UDQzYVL2shsmtWeeuC2xSnA",
  "key4": "d7FxYUJ3h1ir9QJgsXF8kBhBzBWy8ZDonQ9KW3JxeZr3abfBX7m3B4a8q8gYXUeBzdntDU5DAY5p6jJsRbBYQLt",
  "key5": "57RwhV7nkmt4e672kji6ntRrL3eTdvvZtbGRYZQYVCV5ukCwSErqY2cXNepd7vCAjW1x8CaUvKTFBXjDtjfgzudo",
  "key6": "atLH8zD9z6Mo8Cn5snw9KP1fzZrXtKj7crqZ3bKreVk1SD5ccMAe5UGvYzdMKvBHqt6puVRRpS7xUFtwcCpnm9Y",
  "key7": "5t97QXbn5QaRsYKi6N3dXLZKqSME3c9tCVambVfyWHcAJFQ8U5EjYEAwe843R7RKtnuG9NQsGA75yiCcJfeD6bXr",
  "key8": "4pTD6Y13W5tj3KRk6GB46Ndwrn8SeuzTiEh74YA1Ddtm2LHvmWbRZ5EFbMGZGdfcKAUwaML3Ru4C5oi7XNHd3kZ9",
  "key9": "ZnuW3cBUvYsJrX6VWja6UVhJkmquw9LPEUAhq2NoSH6rjTcRqtxBfdnFgVmL11hAEBX1EZmRjqYfruj6WspTPN8",
  "key10": "5oUuSSAY7paABqpEHGaMhYCvwrdJZvJw2au1DK3CSkHHuNkc2nPRjtmm1tzexeSX1LfM3osvb3PHCcf4r385Bm6b",
  "key11": "4pno38rypDBx3naoJ5gzZFPxySUi92xB3GHz4xTZ2gDMYEV2GqYQYKen8xDDddJkz3WmzKBn6RpSD2KXiS4wtskA",
  "key12": "22oMBJt7qhZH16VXPCbqY73gdBVqucExgC7gmqGiLxiNTBWsQK9C4AuGzLcYJJwr1rcXYtzYPsMKLGNix8onStne",
  "key13": "3cvaGLZLbk3JQ5bbCBoQcy1S41udmcA91gGun4o6AFBbT1AzmqbF8mcLxXcStb4Gf6EDUwrSrwAYVjXottAH3rDo",
  "key14": "43ojyE1dvsX51j4MMfmLqmQozGifiof5fXAiGT17Qj3ZNB9HJ59CA5boBzwADMhqCoeNSaTL8hGXk9NbVewLh1zs",
  "key15": "3bEvdCYq4sYZhX967EHEwDtDqwjW5S3LPJ9jSL5aqPHtauNWPdghd6hJGr8yMd5HuUjHwjqzgc1Mvrpzz4vkgXMc",
  "key16": "3rDq88wSwKvvYtnnCMChHHXYb2eZN6GMuD4Nq76XxrKB2kg7UHxEAEGmJWojEouSZeJcatwtDPE4Yxoq2utnDfDU",
  "key17": "33tLrofyF4wWxbmuCaTAR11ECPiz77cB1p9Pg3VQ21dpiNmZCbxzSfPLezx2We8fUVRER7j3sbgV3gky35kDGSfB",
  "key18": "3AHxgBzMSqhg3AHY3WoeV7n5cZKa9nrPCu7Lazdwh9cG1MsQNZADWeZ9wzhq5S1bhEnwpWRYDetFhHv2g8aVvZ8j",
  "key19": "4ikGeJAEYdsoeQbCsh257NtawMNaXBhqJhYrWZL1aw2LhF6HLxYcrhPktJCQwv8Y3HubmGD9oLSfxxGf3RVGHNCY",
  "key20": "2Du8nrc4VPULP2HNS1kbKjamVQBSLdv1P4siKDVeK3LQ7THb4FKf9uFxCHM3ogZ4ta9KPtScDm3qiswQPZNJa3Lh",
  "key21": "3ywfg7ESLHY13ZwSFWdpiRz6phTyxFSJpCqLQFggJqfisSP71qHqbCCyjzmRG534H4vYWLr9jzsPN67GAF44Tjge",
  "key22": "3HJC9T5GTb4j1nwSRzte1KeUJzVTaW6ocZ78Xvxg4TAwfeKd4u4hYxyKzZkPRG5UYTcCwPiiyh3Ky9zxG5GNCQSF",
  "key23": "4TFJhfrJfqRJHcMn8E4XiLE6E3mixDNKNacLV4sG3s8XLfkj4TaxUWiFPEwkkxJ9vAEbSK91QJ5VeE2nNsjisqdt",
  "key24": "53YPdeZrTMESygLLc4pp9KgXqom5Caiha6UHnEhE5fPLmsg2a341G4d3JvFPCfxUMJL3PDEURvaqY6gJMyomRAuZ",
  "key25": "29aew3DdSTFJ4BdCUj5A5rfDEdRhDQweHVuFGR8nUCwnfvkBKmRSt5x3xfFjmMFFVGkbfrzNxmwye24SgsZAyDaX",
  "key26": "3BawTusmKXe6S3aphJ35M6u5ZYF7iUFn5fWogbjpVv4ENvg4xnz8XG7B6taFnpKQHDCCrk5amBzz8vN1tS8dTYXk",
  "key27": "8vy2i6ydmWY4adub3wwsWSiBJ1nCJtsnV1xHmZMhYo21yBwPbNUWfaFRWmL9BL1iYW833yA1NUifaFiotAHJk5h",
  "key28": "3srEcBLhGaDTeSE6GyMg5oLaJdYxJmRWr1qBRvj7M1BrJyinrTZFGmTzGhG1qp9bebuybUCeqFdoJo1XDNGt8kgS",
  "key29": "4dLZHYVqirupXmwxHYFmm9R8gP1XZEW42ESXB6oGYPjUxgb2VHULoggpdkcF2DwxpyH4iK2yQLdQXdbYViBnXQ34"
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
