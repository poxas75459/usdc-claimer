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
    "5zFGARmKJcLMvudo6G8mTnnRzErQitdNwXZaDmnFUN4uoXggqfGX4YbBBfjDrtSAz6SAmKhjbG4we2GVT4txjsus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dF5KRPBqe8WFAkVSet4PWRXHnXvhYXqkeBLG7VCxRg316nZuistE1hsc85i52DMAuKoTfEEjG84eNedBXjVErqe",
  "key1": "5cAFb4WhiGZDbRvjRzziVfwQCDoa1WE5KdTTmNtD7FPsH4EEL7YDmzZ6WsWq8NyRpgvFDtcxRTsY45fQsLZs2M7p",
  "key2": "SDB9bhbVTMNPwPmuxtYAZbuS8ZYeuUKDiZF1Uwj3ZNH3rJLCXxW7KBQ8VkixFpcqHMLj8FKTwbAi27Dc6FMony9",
  "key3": "2SvvDRhZSwaVP73kcagaomtJ5VnccKrDQrcToHKPD8Rzn2HJYadghZYoY7fALh2UZZQwAUWNtMMsMqRxRPUGm33R",
  "key4": "3LRgCGTxA3vb54Vn9g37LGEpmqCrCKgXJcnbqoeP8XQAkW3c9MMnpPxY82P4LCiiMVwZD9xG3zZpK717fAaK2uwN",
  "key5": "4oYY9TPSvoB2gv6TrMJUj2wmax1dnqFVaUuM4wLZ3kUyzbxp3KVjjAecpQF2rA12wu2vjMsvNZaS3DcTqEm3kmz6",
  "key6": "4jgqtHrfjs7t4W4seDxYmiT6HQt69RDmz1vYSMXn7RhtJFC21GbaTTtgBaAFDQgufkLkq5xieeqwyeYzswh7Heer",
  "key7": "5BDyGuxc2yLxhYXXAhJqQexRnLr2J6EnuA8nViRu86ZUh4LX1uVoSeujZyBHvxUjvKiLoB73BbFTZFPUaxohbr8j",
  "key8": "5zuRgGHC1HqE5reEGVzKwK2y9xLVmNeaQyrVwPyzZvbip2GxaZ9JUwtiGNBbNEiNsZdEwXseAjSWssuiqLbCknSv",
  "key9": "3euB8XxTTPT1CQLK2zq8bufBNhLpVEEJ2geihWLg5XYpMowbEnHHF4UaNoPs8hGc46b3HKHrTzbeykDH8ja5pbyp",
  "key10": "52DTpVg1RA3gosrH3JFSnJqFL1LmBmvrhc5V4jGQH67opgxBitDNvarSw8p25pZU6Tt1QPcosp8t87vJE1MQFH1u",
  "key11": "27ARroCQ4k9MdV2AyJSFxgPksDUA813MQjyJx9Vzp3zNeVPukQWgwtCHh961ddz5aLbn4EvsGTgmv8YoXanBQw1T",
  "key12": "5wgE67vAeajPHuCKWK9RH5S767VyT6L2HWLKaPgtCNtA2bS652N59kWuhHufZZ6J5Twnc1KdhqTxUrVTfNoEQHoP",
  "key13": "3y6HwgbM1FEHSvzJR6P6zGiYCNbC4AZCmA5xUchxWutvyLWiP1kjH8quwicezXbcD5fMkszqy7jRpAXFR45yXmgf",
  "key14": "cYhcRPzh67uJEWPXGsbWcNijPYWrY497WLURtafvT9fLhevf7GNb7vdY8p7S2Kmgi1Jq3xezjrEHMM6hfCeG5Jo",
  "key15": "GDEkHnrXLTERfJ3Sd9kGphzYqHzJ8qHgUyCMV56eVp5JKqeKgRjUZ3Zg6njfrLfnMVnuiTFnUY9ANmeFUJDYb5L",
  "key16": "5HhM62JvFEvAhXHndewqH4CspS3S9SiPMWYzzyfVSKrNJKc3SBMDV5KhumLKbehaAco1NVTTnBbfewpeYx9aRxYu",
  "key17": "4j5FGA6yroX334ePTRHmfBkU5HfinDRk5Q2XmycjofaH1BtQs84Vd5boM6yrsM51ehpYwoCQR1Vv79BLwoVS9C1Y",
  "key18": "4xczVY3Ba2UMxsZu3iHCLtmgLfh9s495rkYhm52wqNgxXVqCfVdWVs6iTT4dRFuhJG7t2t2BV3tEiowsDx5m2yBX",
  "key19": "2XAK7mtAaJuCrseCLp5BpMhqmEzsd2N1kGYyhhFJZqeCsD954AXGprnyfn9PXUecEpPodWr2ZWnyxts6zojdovzR",
  "key20": "3sEM1LtJK6nNBrHNCXvH4VGvQhF6zmQ7N8goMBHmdsqJfQ9TcH89mdYPfPPHEvDYBsAtoSUPqHzSPMoYrdECC4GX",
  "key21": "3xAZPCJWDVjkHnycJMd5kB5xu8sdBXEBjR7aSdhxcB5XiCUngJXvXM3dsKjv4r9whH7kAJB3yVJx33zRXLooFr5G",
  "key22": "LKME6wHRK1XJNx91NRAvb25nVpbdrKZEo6Kei6TFrHjcZWn94GZCQZUCETPwz4J81zJk6pDSnswvmyLjx3ByWMX",
  "key23": "5pT86QBRKp5PVxXbHW27oYZERvZpLaqF4eAdKjtwNZeNNBAHFL4A23ZdJvSpiodPguDbPeR45Ciz8CGrCiT6WAoa",
  "key24": "4RXbvrC9WtPCAExREPmfDM1o9MXQ5WsVoDM8b3CXkixWUMq7ps4vPKB6b5UXDY2NTfS7sgUVdao9CACrqimDmbG2",
  "key25": "5Zu1RsZZZnPK14vCb93dhRwA58ny9HvN5sWbtAY1JP6AaZTGrNaaEWPznaAjBmronQwAWkVSwFVpARkWAzGxXQKE",
  "key26": "2hanTageVdUkUTbPCe9J9DB6LDDFZgfRDugg8ypmCnSv4VrzorUEi7mheDLNc35PGzhT4giQpxQzRtbXPPm6gNNt",
  "key27": "2oogd5UEVLkCRbsNGfXSvtRqeRyGVPjwk6ZSb7bPdZYmBbeMEL2NEKufmQk9E5GKEAjZiNJLAf25v2uXeRZiDQFR"
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
