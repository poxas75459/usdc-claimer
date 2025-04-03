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
    "WJSGmihs6cEdh5dEVkZEpkbc7GREvpmYKdTUrbR3698EbAADfAzSuvdx89Vqdoz7jMk6URuQzqnZ4DaRyAvujWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ky6MeKytMrtM8MSyJmxGE7t3uLwgBhH8q1oBCUoodcB7EXmwPwhvfu8WWxtNjWQ1KXg26EuTZKzys1KeXhcpCu",
  "key1": "cj3iLzGNeBFeyPnodLUmceCFDvgqijsGxDwacDDroUCyTLwyZ1ZVK1GMf49Jo9475jcakwpScvRevnuh32KG32e",
  "key2": "3272kz7xuvSqWzVgohTcX81PuJGgugaQ9v34Gih8ac2eyidPnbW3nYe5Uerr6BumgWuPhpgpDqRX84Cm85YgCG4W",
  "key3": "oUkVRBy7bcicYDZ4Bc8ZDQk61B9kMdDPXQyjVrL65pojBSe34T16oShsCV7xfwo6pTnevFGHz5TmBR6A7Ua4ciu",
  "key4": "3HdVbJkur8yuF5y1PPEjFf4XvWZFejWVeGbAmKvHvQtATmEtSYMVR1ZqfoYJN9Etq8thcQj6fVdVV3GMXct2gFNo",
  "key5": "4usJNxTdeQ6WknWZdDD8PpKJS6aiynnd2g6xMRmZCBT8W6GuqjQfMXEE2hj491WShFQhA7aMtDQfT9PaoSctzoFE",
  "key6": "3Sqt3HtY6HxcNr4LTAcCrx8iTpKJ9CBrm7LJBkvmyuWWR4tSDPLsn2YHdXVuAwdyVQqdYLRef4xRnaz4m3trcYRE",
  "key7": "fXvZ3EzZfPzKpdzntdr1zgFuzXAmqnS8LPCe1qDaxF4Myksf6kQ8zeJZ26Zrc8eJ27SCB19KZs4TjKbvoxHFHu5",
  "key8": "3gC2JLUpPFmgTHu6eY4U3hzjJgBHa83dGsB2Lwwx5DJtaxkuL72BvrAPKkbj8sT7m6SPwVzrnV1LicnuMHgtevcT",
  "key9": "4Ee4msW9QuMEWYJjWmRbj9AVTK6J5SdraFjp5WdP4CiTiRfAE1vZBfaR3Rdww8b6r1TiwLMmwYw8CMcpf9BeF14q",
  "key10": "tWdrvyUuePrVuW6pubZDDfEbtKZb4bNfnEvg3dQVuq8nD9y3ptqkpYUNdmRMHh4EsQLFwFTZDZ4HTJZYrFqNbsB",
  "key11": "3vWWSSodCtPNqxL98ZqcotyRC8HPJPFq5PL8z5XQfuzPDuqoc9rFu8ujwfmDy5JPqF113znMVpPg4znzaNmBTs6r",
  "key12": "C8hN3ezjpDoKAhZAN4TUT2UQfPfNYWiCtLncdSgTjf3eByxhcr4j4DTuhNFoYNrLYXqE77fgFihy5N1sb32EKNn",
  "key13": "62CpiY1HbYbSNc7gwRQFaoztKjebhMd7k9vKuGzGeKX65PmXfkdAC593LxsuVzUMimdZcN82CH7WkekvgR5qeHBN",
  "key14": "5TK5fx9huDHaSqLX2bfMnMrJQc1wNhVSqbD9PxxipRvHpYM8rDv8LsR78UM42kMaBfwSJKfFpBF1YMYdyW94Koze",
  "key15": "2JaHqG7iUouakbTwGBNa9GrhUNPpJj3pseMsSpCkw6VK6iJP6AW7HxwXXNj2f4iJ4WFmerW25u2Y1KS6SzoWGt7k",
  "key16": "3UQ4gpBChdPzKhh9FP9cgJE4jdKVAiWUe2cVfcnzDXu3oG5LgGgN8dn1C6W6LLRhS7pyZwmrEDPWsnCVoBUspL6P",
  "key17": "w94r1STniPa5ck6rFnChUotkhgpft6jjAmUsb8WCpeRjzPrrWe9rRBUVXHZnJcHDR92tTo3b7aSt75bXUod4e7N",
  "key18": "2wyjPastMD3gtJhqnXjMzqMGJafVJPYQW5dbakLeExeuxytRcB6SD7HQskXhK79otxvYJy5qDtnn2o7ibRk3Ly6k",
  "key19": "2EcK8CU4QvfLeNvvN57KjdaFDCZpyv7qpViRuLc71WC4FrpHAunejkvWKcaCYq1vozzpaNsQfiMPU78oHKeCU2Tf",
  "key20": "5EuPw8iSUk8v3NhA8NZjooxgoE1kqsWWWaXcfrvBahRwSUhD8saTMgf5mRG5GwqpNNnoq1TPo3oXEwYbYS9R1BgC",
  "key21": "44neszhgH8cAoE9D8owt2uskD3mx6jMPgp5UjCkbGRbPKCutRQSZbuRoZVryvgxmRZfBK2hKMXZQFKZqscaF8Eje",
  "key22": "2ez3w85TxC5TTGXZpKcvYo6EUfBkwoGxTDyE4wLPoCCzPyJSMiZUU6i1cLckNH66GiuA7FRhV11dEHkhr86MT3kJ",
  "key23": "4eXDXBLm7qZ5BxpjSeUjZZXDE8jxo1Gy5JhBokTr754iVaHw12DV5UidpdDCr9TthAQ2t5PmgM8G6qmzWjr88ksT",
  "key24": "2T5EM44tsUVN6e6PaSXXEuWBE7ATTYgVzkQr7iZUnNLnFCp1SovRzFzBARwsUUHyoKsA3MD6ZnLLLJhVQA1dESzV",
  "key25": "5v7meoxjVBLjWPVscjVWCMqz7fcd1p4JTo3hvt1YDxekvYzpScKhJcQYFApHTvRjLHjXLcX2K2uBv3haaEpQpFDv",
  "key26": "ZfQWLoUYNfcAnCTakmyxe2rWyRqcz4bHX9njXBJk4qmB8ZBvX2vWS7iPwjZu2STsqUSGDkc8qMNv2r3Qx2id1dj",
  "key27": "4dSe3mVTm7jqanhPZJ5rHyvNcouJkTtxEDNLv6S5MAJFK9kBX67qBhKxvJ2tNjRdZVN2DbcfLQFDc2aZxLMLyPuN",
  "key28": "P6nJQxd1ismft6A4exLqrpeRQNmtFemn1wgnuxLtcz5AdbF3tLwqdmZa8q9jdBa7F1jboH71DqRJTVCZxzpHXEm",
  "key29": "5hn1UZPrCvKyp6ScehcaHpid12XnCHPvHfsVwmjcEi6PKKwqw7y8eVkFXwL3XPsFLMeta4UH1CckVjHKdgixBC5h",
  "key30": "2Sv9e31xVDj21dYTyzyFfyViYP9wegWPLEXPyjjv2y4asT4QPksgjza1DwzccnEQkeEJjFgL24v7gNDz9jBF8hXw",
  "key31": "4mpJ3F2RU4LPJySur1CHBrKVDJWPr1zuEtmb3Ke52fNCaiopvZmEHrG7Kfe4wpZdbWgohf5UiHNJuY4NnaNutTf6"
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
