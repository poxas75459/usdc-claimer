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
    "4AtGh39xZ3Tszw6jS5FMgFAg3LTWkG9HPcCdKJLAZM71pTpPPdAjvTzokoSsFDZGbdDU6jNxosektSW6ZjgBsy83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3XBZ4g3QjqDfNSxqQDs72Az9N4H6W7E4rJdSxzHqfTQ1YFm1rVe6Mz2aFjgRZGHnC5pq5AoHMs6UMZXsP6Ac4T",
  "key1": "4kwYXLSznKx4oUf1jMcTv1NWcHqWKzTfz8NRFwxb1YYnobpKzUdUxBx1xWNBYKLDgi1CBZ871ukpbvhW8aTgASYs",
  "key2": "2AbcSNu2eBbRoE9iz2qyLdzWFSPBdBqrrFN4ii6he7DZFFhRdKb5JMPZnPHxdTZrvhrwJLGeun4cqE3eMN1yNbqX",
  "key3": "3dquzj9b8jSaXkrdycZWzRjh5NRito3bPDjWdtVax1NkCLDj7oRFEnxVra2kHYs26kHdCbYrkXeGjhDWv6ZWzSTR",
  "key4": "3Hd6gXZg9s7BMoLQMaisg3nxdrymbUpYwrQGF6Qqs3MzRKWfxWLMhVjfuiCNs71Nw3WMR5rFNQHoGXWf2xbMHrn2",
  "key5": "3pWvKMGgNnkLj8epUzeJVV4WPCqzHpQbCcrZeG5CUefdmLJU4qzNEBgHZma6PyyeWiC9HoJPfecLxhHUH5cMXXHV",
  "key6": "2wTRq1y7tfzGBFzKRzzHMHXGYyxsDJkD7qfvxMMDq3jxPVcegk3BkragXAjEcZaU8TwjmYropJVFLigyYNE52xw3",
  "key7": "4vHL3RrWCX6jEVatDpwS5Up6p5KngWtc4wfKF7VsSwsKVAq2EtRwCEuMAHSXYK4KS5fhkNkNkJjrmdyFWw4hFX8F",
  "key8": "3YMqziYe6qdS5YzzvGKtpchctkZpEcTuXvKrziemUoE227sqJ7QzF43TrbpNiR2L27pS4RCdo9hMPpMwsPj9buAS",
  "key9": "f2DtQ7tGdEc2Xqtpzm2zgb92QvWCkvx2bzgeNAhZpYdP5XXuNhbJFBMVxrVaJW3CqedGHq6npYKxEWka4RyguUT",
  "key10": "2q98cmpAeM2QZDGcQsTzbVGmPkFJZwSr3GHAdqLjJJ5V3uJSy2yvtHakFsVfBzFdySQeKuS5wFD2LMzvQ7fs9k8y",
  "key11": "4kCTxumLKjjcyLb6Sa2KHzdGVSrW38qmEGsVsU9YvckimDLtpmz7153yMsTZvaV5Mh4dTvjG7gxLDwKMRgPnNxs9",
  "key12": "bayDnt6dX1ZDtYEAi188tsxM2uLruRnvWjSRuHE4nL5HfVk4cew8YVomJAY2xmXqSDJGcYSGC6UxW4MFqgJpXux",
  "key13": "3xWbCDn8bMFSd1TytFvryc6KWB3Kabf61k4uXCtXGMTvLACDU8VQFMBjckoE9hGGbJ4rgk6y7ArdrqzfEd4CaC9e",
  "key14": "HkTehUoEJ4P5w5fRNy5GaYzPFGKmqafwfep5yW2KuiPgy8bp2aXUz6uagtaYdTYEZA86EtET9tkJTmVfM7JBX5A",
  "key15": "5q49BnDbBRpj2Xfixxdv6Qc8oTGBHVonaXkVyzvbUipvoq1jmGdKxjLfaSqy9jxT8uMRwocSqvZMqfoeCL7oLZEt",
  "key16": "2yFM9M8Q1bqJdCw673Lp9i2P9GjSSFNKHMmoAvAgMNPCjAwMCJN7vgT62KRDV4f7rcVqySKohnUmVPUtMmoc2ewP",
  "key17": "VJ7fpxwJjG6xXXnaJUcpvY8iVVa2ByjSc7j2JrhC6nS4buuGrXkE2VPdcgqEaDAYkNAQbeXBBHGrZFnsUa4H46T",
  "key18": "3UVywmJdswRskUwbhZGfTSibmMtLBkmb58jEjvPRbbxLgUL77Mke5HzbCwmYU3PBegYuzK7yBZV7Ao71FDZ2A9tM",
  "key19": "5FBMinm1FGTsBveVb7Dt1M8GmHt8EswR7MrZzXhtkED8Ff7oSyy7ypwugbH7r2pRufN5naDphTrgShiyL42vTAMU",
  "key20": "3mpXKfbGkhZ8X86FWvFG9Se56oAAhcD5EkBHBgGYdWbCsw4qChBVX3AWed28oUuAvNnJg6w1RJvkhwMZGc64SwBs",
  "key21": "5WrD7gKwXY65osDhGo93S2E8ninmGmLWNvgcb79pfPzPD2zXsTXRY7BHEqKwMZu8K3TpyomFVAWd3ovRM4rFNFCk",
  "key22": "2XrMrWPsJ4BRd69Uee8aKFmsh9SpG8RVrh5dGfgDTNnTG61Wa8EfXiQg11D3ybDjMLgDLjZpt1c77QSgT3z9fJRt",
  "key23": "33Nn3VszkU6DvpfoRnNjRXnkJqfgBZoznrTVSHMxpFg7AQNjV3ayf5sN9UtQfHY72bMFdrEoY87P4TrT6ebsoQRc",
  "key24": "2R3n6sTrY9ffzYrKmN9YRbFCYRRv96c1Fin77UXjJu614hGjtCfHijVQ7tMQai74rEVkPKj7WnyTBBKaPXb5Dnkq",
  "key25": "4s3A7uLRamDSGPFs9Q8T1NcA1XrZ9x72KZrGWopEFQB6LEb72LSnWNKWHph7L2aAUENMrahT16Za7VdqrFmTXsK8",
  "key26": "3ucEdxr2QdKk9RJjy3ruhkJ4LnbMsVUY86hR46DaCinidbi6SYgDqCmvciA1pa6iXEtuNvmSD2jK6v8SGWg7mgfZ",
  "key27": "S1SaxZw3bvv2EDEABzfTVj5FGB3M5QQQZhXHvcYbvRzCXddcBrCU3uau5VXytGKqMoCdBMgN2uwUYuQtmsqHxCd",
  "key28": "gXbydajkuWKYBBP6rsDbrqLbvYnAvjRpGJt8jGAATyRYoRbC94hEpEWhjfVqAJJj3m8GZn1hGT1jNvKmveWqxRS",
  "key29": "GWJ9AwV7wRPutsRvT7uMjcWcdyQSq6dRxA6izprRnJU7gR6UHnv857bdyrnBrc72C8LoiKaFVhLJfXr6GB3BLKW",
  "key30": "5sVb18MShpcZuSGDAUPrqvJxAMohjuz3p11yttxgsucxZJgVa88TsaDt4x3cTR2RcFgQHW4jjJQV25spn7NDdpYD",
  "key31": "3hX7TRg8H8ZVnn4bF1fQHLfuLUvoJhTVRzDrpY6rfgP47GipeArwDg6jg1bV7Sgb2fNiDFxKABV7pPG8HxhxHqEs"
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
