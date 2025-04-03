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
    "3Fik1LyMnexNhirBkxm2E1mHCn7yf3Jx4N2vgzBmZE2u3267vLaJxW4L1V9JjeBr3Boi8qUPuX2njvJc6uWyjo5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jWuToZXGk2d1AqmxrmPj8AZJNfJ5bdNsPqket2CaMjNC7rYFTLS2o3ZjQi4Zp8oZndVFcUT7LiYAg6L5Kzah8Yf",
  "key1": "4x9u9vMCHMPbcQKdH1tV6bA9BqdZk2CQZubWQHgvLm8eDv4V5yJ9E37Qff3Eytz7Lxk2bg78EUUt4851NrBgwHvJ",
  "key2": "2T9vmLS4gAeY5zPwMPKiWgzpJw4dtyWBJgR4WCopL7ViyckB4iK1noyGiZxyeQvwmbeiFrutygTsukqGaTUcYH74",
  "key3": "2stZMqHAx3kuGLtGmK9xDR7ZBFMbH7tZp19ifskKSaU2ZbLRppXM19mbgyvpRiWtSQVuoDMi8rrGybC1E4Bg4jxN",
  "key4": "3ZzxQ1XyVB2houBwHK7G6YTRZvdkhJY6a4aRtRknNuV8XthLL33Cpv2mrKU3tKKQni8Fhgjqk9dBd2tGzkVubsdw",
  "key5": "4ZzSv439s2XH3Sk4fNDbChzwRs1SAWNdmxcQowqPQSyxSmrNaSfmMod8duvVsz4fPW6XwQ9hJRy3vhXe7kJYabkN",
  "key6": "38EiBq1pmGAgPgpktRWRMGUFSJgYLdqdNkDpkqdwTa8XKybhUmE13iEH5Q3cgds17zifEbgvNkfD6MgxnVXMPnam",
  "key7": "4gbBNSVsJJzyJ6YWqp5gFhPFeLZpnXezqQ4tNqxavCp8rUzgmqtMry2ERGcPoo1einkMTnsLSnrGpaEuq9dgadMP",
  "key8": "4fKQ6abDWZEXkKKiPVNnpSyAQd2V67h4nD3CPJY3S3FNPbkDNueCobVnLLKpH2Xc8njJiYSdVSx4TsVpqxHvBe8B",
  "key9": "jTscgBHw4r8HBxv851uWG8bPtQ17JCiHmBKV4aHeJgKy7NpBtJQkmHx1NioMEioGPBPfQjP2kTsFiQZbArsdKQy",
  "key10": "DVy9AzBeGwoXwMhQcxdeakdUFyyPMyj7cXV6TKKMnmXU3YYdN87XPcWyHNmYPmKvKooi7UPiBnAokTxArmBnhUY",
  "key11": "5HLqFRyEDwFit6Yz9TYXvM2RmnctUt5MgWg12ibJivRdSjQwKggsWQeXceWFsdLpNh1Y39A3xB7LB6UF5uMaRgAW",
  "key12": "58D2N77XtzjgDdTTSDWWFSGK2ACmYS7dAsNmFBdWywNZLjs3X4utZLG8ykznJ9sdptQRinVtYPenFvMLgXT2XXuz",
  "key13": "YjELzeFhZVv54WSs6Yn7uUviFKHw1KTFNYXqyjFAxcMZQRa5j68TctUBS8xovLoMRwhSW4hAMh5Si1F3YtAxpsk",
  "key14": "4pi3fKA93yAZtvLbH7ZwJJsUQrozJ5Hm7sHwANSbCnFSPmxqkzMwWEfcbLdxnDeXVAaKugxSNo255E2nGJHsWpCe",
  "key15": "2Esovpe1XsAb4bKzuWz6JfAm9yncjnuydGPU7QgDoWPiqWMZ3X6tgXsCZhRjjYcdEa7yS73qwURHiujYZ5p2hY49",
  "key16": "328bR5sE1RhAZspndwbiuYmkJqG8Qk58hw1K2HkSE8bwZkrfrewjJwe1VBMTTLHM4M8MYpNcHzWM5JkYpphfChR5",
  "key17": "cuwbMmzZ4KsRWhJiEKXRGJpr4gmBCx4x7JVNARmM6D2EUidxZwqWXa228XigwKdjuK8JUey4LBW7pWbPhzLwYDF",
  "key18": "5BpMKjFb1t33yw4RMDcaR2SaWM6MSrQm3eJ5hjpEzbZPoPEcGHRBhbtu6XvJAVBpwnUkrkUkRvkW7iBsyHsYQY8E",
  "key19": "3ksyci3m9861dDpxrr9d5xuC6K3SaEG1r6VfGUM9pXmtMEDkudVBD2Us1TYYhubuUJn1jY9FYXYS7ahFepWLEuPX",
  "key20": "3vjRBtmjG9L1WFokQ9mGJm5AWwS6LfpBNyhmoqUoq16MGk9cZMr9qb4fY3K3taBEwY5E7WhT4ZyG9ZtcUmp47fGw",
  "key21": "4Ut7ur9XMpnRYLW3deDKEJKTokWvE9NF65qDDpJwKGF7fXaSjfw1Xiaky79KJW9ss14pAMtGfPbWFL1h3LNetVkC",
  "key22": "5G3ut6SrYScqE91V1Ax6burBRGPCwNct8tjfXkDXV4dkHLt5Y5kkmHM2QPeSu7WwcgpvVCLudDzGYBh7dCbduPZi",
  "key23": "4LfQKgXg1TA212ZpA3p4BjoEjwRiMM9aHhFCYmJAwKfLFhi3i8ZYKyLXUZWoEQf8cAVwFAzSP1Btj2vd6GTWHd4f",
  "key24": "5H1M7f77KUPntXpyVyR9xhHXQ5iJ5HePVsyXruJ4z9VPQL5hMcDXPX726uRyeJTCmoCYykWVjBmQwDUvxj2bnqzo",
  "key25": "5RrQxqCcGjFHcr5qzskKgZH142e1V7SYJY8M3SNVGTwRJVtuTN7GgS6YAU364qiqCsiez2VAfS26raeyipyo213E",
  "key26": "5eumJo8hrq4FSJiWwgNVc1KaPrYBqDixritbffYfCMFnyCwTjVCkzdR4MuyyeCah6ABfFsLVw5qx7wrdAG7CHd54",
  "key27": "48RuVYK23ATP7p2wnxAZcPBQ2AjorsqGttZo4YYUK3K52SHJZtFfWjYPp2kgj9Mp587FkCpAb1LTTJmoRpXXFUPq",
  "key28": "4bKNkXQhPBPorhabp3B9wzQ3DBKXjuvdoNCoDLeB7mv9QsaKgcnRBKeQuwsvRj25YXWoPNw1bjcJiTsj2xXJLq6H",
  "key29": "4LBtkcYNo2oqbjGn7aBBGQTQx6QeDmvAWoKvq1E3EeqgMb93jvTNZnM2TpcnsMFgdTMPbvXasGHT4xRabBnLWyFM",
  "key30": "4bJTAJKFDCyooSaPw4dyouzRLKbckA4i5DgHE56HUePC9FkW55n68m9MGp1MBDGhMUx8vkxgLZa2Bxty4ypnGRYy",
  "key31": "2CZEcoAjKh6AwNqU1cKPeWtvFGTdg9Q9xyWkQkLjY9EwNzLEZoAWsT9eLVrMpR8DbU3btoF6XbuM7fzsSDW6kYEj",
  "key32": "w5F7vgBNxF1Ld2L6V1V8wGtcZ1MwMPisj69p5eVbKzaCHWhH1FeF8PKXN2G8j7cyE5bLQpfxzEx3phq4qFfN4hc",
  "key33": "4hXsNVUVRj7VCHTH23E7E6nhfxKhmj1LTZNKovNhTfabgKc67cQnqdik6YodzhhSEo7CeWWwFM7M59NPMcsAEHnC",
  "key34": "5GNVoMxnDZdCst31AwhLpoAgQyuF7e1zFMe5YWPH2orXx4aYwhpJ5oW96bez6vMbbfDjGmg6SSBvgpUuDPrjqbW3",
  "key35": "RqZgTYKnmDxYWTmmERp1kGC2Ech72mDAZcNJ3UaoHYgztdZR2cxpp2gvEBPzL1cMrHvQkJw4MVM1jdWcGss4ry2",
  "key36": "PdjNJABQ8XEnii1QoPoJkPRK3WDScYBaUSANZn7ktzrCPgD9pEoxmBM32Lf56QNSkJpznVLSZ2KPPRmX3kXcyxu",
  "key37": "2FHgCNWLcgUeUGdoxv53NoSPyXkQXw7vMQKvTsbTf9RHf9H81KLzJ7DJ9faB58uXE1gKExHRzCoAz4dSFXZnDSm7",
  "key38": "2dwDFfSmLZQDze1mnU63RU1c5YFUzMBXXJpznrDESoAxtuTKgAUtcodQxnzt7YoCWZcyy61QezqYXQmr69y3TwJs",
  "key39": "5q9cg6ayAg4a9cppdLrtPG915fBQ56CWH3EMUryVFF6McHUwZFjmgXbH3c1AGnsAfFNLH2Zz6oaePksXc8hAeg6y",
  "key40": "4DtPAdzFFVeZrzG2ZCAFrbLzgTGmKd5gzhUczKfwD8Xx3CoQrD9b92DwTiaZuUR31pRHC1yDvdGT2L1rZN96rK9j",
  "key41": "yE2MUQUsPjanqMshL7nmSuQxhcmr3eVWa1XmJswV5eBoANAmdUoB8csE4CMqJDxztx88UXHxMqLZ2gwnZm56QZx",
  "key42": "5hXMhARUdDtwVrDfYcEpKPD2ShPPatti39u3gk9KTUSxznzfsdfM7tfafNd64GK4jeNDnctJxadYGqZHTvAg7mu",
  "key43": "5nUJNHM2zgQ9b3A7pkiM3oHQZ24ywzQVXuXEi7RZ18WwZU1fbdEkQa9q7mbmZtSnBq6WRZs2y1qGz7jiYG4gMV2G",
  "key44": "55SghQvonAGQDP9eRhrcsYdjQxupGBSHAdwTziosSZbQfNCuc6U1FpMnzkKvR17UVf5g4AuPGi8CF2h7HTvqw5je",
  "key45": "6663i5n2bmSffkMcinfWdghemxznPPyVhh9Nv9c8bfP1TzYAgEQVQj94oAhFEs7gk73ZAtMQSZJEhiQteFE33QZN",
  "key46": "4k5k3gneaHaZ1AtTVhgE7sczEYrLGHL2f8DH12JKNzJJT4tjhtSRSvsYogboiu5UwBmL8tcPUJnsCoRD4fpwcGaz",
  "key47": "2SmcAM1uzBmLWuWtqjasjXzDitF481zQG7Ur77DobaATXAvRapXdpgN9rvFccm26pGiuLFRtSDUNYiwFZzWAJpmb",
  "key48": "2fA9SdX8yEmPqMpuaFVKdqzo4M7Rf8rDQKnydMvheSiv9mav3dxMnmVPjboPtKxkZ69CpY5DrxC7C5xVqRgV3bFs"
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
