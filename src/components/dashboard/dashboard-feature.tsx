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
    "63Mc9PNjBZ6HBMiS4XXrV1UkWNutBgFANUV5XVpA3xLBdtopTpxp6Yd5Bhj23BERiKE6NbDPJpJmqvfvfmR9JurS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8txyHRK2gYbbXmMMcXyGx41x9o9w4UcVxkRuLN3w4SH6MG3BQZrkzqrSMcJgPnjaDdffuJg7db8LczujbSYww8",
  "key1": "3U7DgSCQYyuFocFrmsBDwjJ1hBzHgn5iFRBtye1np85yXwiTGE7kJ7C7oWYoC1zMFqDAqAz9LyPLkzPJnbwgfqPp",
  "key2": "4iPUTqixg5efmzpXBTbAN5cLMV1vmivGZsDujRGBqHJPmcBLQnYiZPiUH8BLi1JgVBdz9kH6zNMX8voeNZUx7DVZ",
  "key3": "2suEjV9dEmEZKFEf5WvbDrrma2T8Z9sMv46LPWHYXPHGvqu7PHdfERgzjtmaLALSWi9MgCWuwtL3evjr4M7J7L2a",
  "key4": "4YVT7fkjfwdZAEcbWmGWfMBkXs2KSGXUAeBZk1E2w8eHRvq2WydMRxkTEKeb1VEgHDhsRTPq1M4kRyF62pKozZ77",
  "key5": "4T1jG34Z7XTuT4LNteth99xyHKkGJBZCtVSH4gTYTUKg7rgbcsE44cUMkjD9ctaeuJeN4rpvq8wcdidbTyeR2hbH",
  "key6": "3hzj9F7G87znXXP8NM7wpQjCTcrCtZfkzGEk3xNeVXhN2ezw1sjDJan9i4ZNh47v9E2HDQfWQdodb6jPg2fgMKho",
  "key7": "4XF6sAqVV9PKeSkkDDVSBjPYqnfznu5gn9BNya2EW4dPuTjBahWjg8BFrQeYBiXs19WFNMduZ3inhzovAHriqUqs",
  "key8": "2Uifh9wBZ3NxUZ5QFPzBHLr3YJ3qNqdWL6AvCMZ1UgxVVKoPHcSb8ZFWjwxCD4sWKfAmykGdbaKoaDWZRH5oCKaw",
  "key9": "4Ubtor51KKU5VTbrGSDFRtAsZPdwS6ZwqkVQJznFgt4mwc6KkERhs9vbFapNyExan68JayAiHGPEtojA8ZgLFAn2",
  "key10": "2VAmHnrknCtgMpRq9Fw2yeq7aLGFN51M4dfUCpiPEu3yavzK4zsgohipsm4Dk7cnnDq8v2fB43zVX1Eg8eLfk7VZ",
  "key11": "57qEmXiXNet4YfnvtA5x3ALadYjYuAneBszXEsW7uCtgNgnGBfsxzrpnc4ZLaRndnR26XMLcmzGsXWn78R5nTBG",
  "key12": "BH8oVAYujVCZN43LpTq7DEmuK4dMmALAfz8YKmahK5Gwn6qkwyNAa4eHZoWUA2bY1RKt1spfqjVyy1kCUocHdB1",
  "key13": "4UyJL8fFoLeFanMZcbVeyDFuB3bnxRZAv729jDzsTg8pjHwyCUTzsHRGwVuVVGou65KTjBdXDnmwC79jEPgnvMea",
  "key14": "3G96wSK3f2wmJZJkCaEGs6QAYHcFAkFCapH9pxNsCYsy6zndP8cVcMFfBkkMwNtKT8XPnZX9v5fpLDQYjK5icj4j",
  "key15": "XDjpsW6FR1hwP2mrXdvb5Le3WPnUeeBUFHvgds6YNvNhzR2h9B3LBveXiTmtfKkxUsCjgCCYeDfuJiAtuJcGxDR",
  "key16": "4jWKTg73a77b6x6aK24zyQJdvR3PsMnn9VfNFkWHG1PMDJjAFmgxk1rYacFsqQu1EmkS1PVZcGqUbh6BjHs98fvS",
  "key17": "2hW3v89stYmmVh8aLCRt88wmJDPnPzGK6XPox1wBB9XPH36UWquiVdWM5XhkjjxKsjQaVXWAnTGBT5UJE28xG9LT",
  "key18": "5jfCGZhLTykc1q1oorYJNLEDPLo1ZLPFH53jmp58y56mXMVEb8kcCLwMnC664qGMr3QrwfU758HBBvA5uLsDEjXH",
  "key19": "3VoUHAtjC6ST26dtcL7GJ6Nqr17RTN5KtZLCvsAH4cKoZqDmBvL8aQsiaQFuBQZzRVu3od5cBDJZz4f5NqxVSSEz",
  "key20": "348KHpnyHdkuVhstSnd6J5pNAVJvBNA6QxGYJgooFJJDVmwacyuGTerQWomXpVyszRMCeRoVbxXW8VhQnpDfrpHM",
  "key21": "4kxbpBm8bmwdaotxb3d1q5xik4XkzjN7GtMwMQVfKwZWAY7Venf5yMYcaBP5SRWJw2CnUE5J8rVppZ6dQ2VQXPCV",
  "key22": "SHuDXJ1GsqXCey9vph99shLcfJUchNGUWvNqbZuqdHg5AdCPs3nRPa3medQknZnB6W6tCTjk6sVRG3vS79gNC4v",
  "key23": "3maUKC57CsQGmmCgzD5wVELMnCyjVqonJUztjassGrPEFNhwnrtd28eB89zBLKk7eRWe5dAh2Nd7bvhEgtvvgBnm",
  "key24": "2py5cRm4dc8yT4VQjjaCqZCgtsTi2SjPskDwzQNvnf925QK4RPKKgcFKz8eVtUyKmp3kAYDg7eV3AiViLiy11xdJ",
  "key25": "4PgVR3b1z66HHa9PWfrabb5cRYyaKa5cb2fZYw8nnbqVTCGjPeEeZvoHWxhjPXZEwNTyGiKENkFyDGz47n8DWPJV",
  "key26": "54CMw5RT1qpn2jt38nNKjJ4ZejXvpY6wRbieHgBqU8wGiYo27WSLuajbmmaFP4tU6ZTAZDeXoepFQAutkub6QvDr"
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
