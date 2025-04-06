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
    "4pPV4ePhNE6JTzyuRmkfJnC9Dxf2PFF5t1DfbyuuBqnSXB3bdrjMcNhT2m4FbFxq8pNJp2aFWst25J7vUmYwSTZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65myAV22jcR6j7JZD1R8QsDzN1tucjcz5fyQX3YR1EYLyA4t1w5JuMhuqEvv7HRjnnHpVWANaB8MBwWFKpCk3kUC",
  "key1": "dSkXYXXqsrHvPHCtKYHb57JJFc8USUpzx6X81h3vaKztSxjytK49vr9mR2BPEdRHSbrTEgAjYGyd332Afn9YmjZ",
  "key2": "4NEMb4HgDXuMXEBwRUapZw4jnPNea8UNok5PrHE6nAgYGcmPtQq5mZ8jpXrS2pzCzfZvDXfLj9HdpYKcmWHNQeJ6",
  "key3": "uxoorpua54FjmTdhSwoPRvscffueDCdKM1H4nXijspreQS6V7navHnZVkfwsFJknBTSrfy9or4TNYdaSDRdVeg7",
  "key4": "yHxg33AQJ62k9oYGJcc6Xf86TD1pU3WkvuVQSixjaZobZc5S5rBzCSiHV3Pn8qdTzzZtJ1BwvnW84BpDFv6qt1X",
  "key5": "4NLGZnLG9TFWi7haUHwg5pbKxa5QgPBE4en7oNDLQQ1PZCQ3dveiRUH7E7KHAzfxfpGdhQsEk4wqTWuBRZCCFQsb",
  "key6": "2FAQSiaNq8CFcDjteu8uiAPypKMpoiTreHDVUixfmJA3r4chunSvtqw4252UHK5Hffb8VqmKYY2dC9JAQqP1LjRy",
  "key7": "4XQ7Knfd3pCnzqQ7ZoJUNbdWRctExaWDVaPnw8fdpVYH1Ym5vjLJrYZZLZ3vo3XoEaxBznnhR4kzFuVJFY4LzRxa",
  "key8": "37ZVBYEdgPWsmypJnPdUn6u7GqC2uiX6A4CZEKipjHQf4eVNhWKwJMhFaCuuE2KwjtNHaw67dVMVmrNpmJQCXFL2",
  "key9": "3PUFojMuVYThCMMbYJrz77VxpgVKYDppworBmfXWNzijz8kinhjPYUzwaXRZ8MRrHraTWkHvyfgpTLyDfaU8QGS5",
  "key10": "2qTrC76g5QuvBGFeTwiS5uYDi5NydV3F84idhuNRDF2B4D1oUzSvPAcjmnJUnhhyAACPM4KSmZpjrdvkZit5so11",
  "key11": "3na11K4XPhRKAr3MHCF8cZNuqiCW8QAQi8uGKGUy3NXxFyhZkoR8heo5Han8c9ENnbZPTkgSrcbouE3Srfah1GLP",
  "key12": "cFbCVbBUvWzVuJEMfKjBZiJGnphwAx7VgRbVHGjn22gvrJ5WJbLZf65JhdTby95a8bjhodR9QEuVUPraZF5HgC9",
  "key13": "4pFxrYzUax1SMB3UAcgDJFJUGA66ihaFDqLFUXSvfEHaJa8AqN6sjyu1e2GaUkRQMeE9rk4UmV3KnbRxkVnqXbmv",
  "key14": "h3PYcJUq1KfcVAShAPuEeHf6HTGcmke8HU2hM6H8rrvJCM6rLaBJqv8cmFuCYN8iQmtuydMhytJ8P1fsbDaaE24",
  "key15": "4yPGuGEqNVdRmAGV6KYdyM9oP4AqXX3QAGT2QU9meyQJvWp7eTtb75fphkeNo4ag5aZVBgr6q5jgoYsidhWErWtG",
  "key16": "HqT7nt24dZjmuKK7ysNCQhuPnspSzEwzkiqjeh9TjPryg111vyeDPf3pcx6kCHNgqWUMA1FGT9tySXbj9K3qyY9",
  "key17": "4yURryQ3wuqhusyBYHTYRh3VAHD6EKnxBiLYVukGZ4nMt3vL1XRXMqxGGnooyHGW3jfUM1wE1e4zKfHKShncREcL",
  "key18": "5qpLZLkSvMSmFmgZsgoFrp8VVXqck3TcoVXGqfHd9tf7UpPze3vZqusYXFZ6qB4BnAk4CZvgeCPQYq6GKgCLAzGS",
  "key19": "5NKwgVzkSW3AxppVgjf1ADJ2AdhW6HWxDzD8M1WFisxjDmkXUpTwcTtz4yKDZAQmyCqVfpzK4fjcS69hr825wz8i",
  "key20": "XBNxm5ZF6dy4MGuq2yM7B4omjNEkpDs6wca7r2DtD7DYNX9zNmVidS6GErbN4sMKHgmQp2cCQYAAD1EdAN2jvbK",
  "key21": "5eR8aHfDnKfinW3tiYPDD7GPR7V6xSP3Zoc3o4j3qGAomB5Sjz5yJrFBG72nve7kbNDwM4VCiZDWUSgNMvw9MLdZ",
  "key22": "4tXPyLgchCTpvUTfpW57zm6ktZhhCk8hxpFezbS9Spi5NSmAVRCpwMiiDytRU7hRzZWbB5TzJZGU7GQ7yz4spJSn",
  "key23": "3zutKU18QZ7W9S54j7zNxK38A2dh4NKXcfiH7hbjCaojmxMsWMwTPsaPJvy353YES4hCCCAbr9KNufMi1DGRtQRX",
  "key24": "2xDmT461hmVR3eQX37SubEWs6F7TcgBU9hkuFquxVXNz8vTpB75tedLYw5W5Y23u7GGh4VzYXRrwR5hU1qYLUHXf",
  "key25": "3GPYPzMLD2soMcF57LxndAAG63MpqPiSVPpT2Ua6uoKmYZkMsn57GS8xVVwwh9sW2gtkwbVjHRAT69NF7RDzEL3s",
  "key26": "2Qu76ZwmmnoDwYStjVV6YsPNRPqREbdWSh1BD6fT3D8BE4kU1b2FyButD6emioRn6AuCzpLTsar6G12AkFpJixRd",
  "key27": "5sLNcSF7BN2kAqcWCJ85FPoFbJZajDTkJFHW44h97u93hwj9BkrJre9ehsuDNdHHh9GL8tdVhLX8dtx5ZnPen73H",
  "key28": "5awTbzAcDe6eRX9EkLQwWNjtvBSZ97944ds4x5HVgJ7Bd7Mt7imRrX8cr2N3brZKwXmZQX7YQte3hjkBWstKN6uT",
  "key29": "4R8qnJS8LrLjaJHT2HZoojLN6AevV6A3zRK7cRwuw41hsqHHLoRCNj1qrr6AHBZxeMK1hgUHfq8jk4czfgZgYexZ",
  "key30": "35kRk2UzqPS8DGjoaehd8fhkefJiNNz7P6wYAwhY1wWHWnJYeged64emYC9F9n1Efe9SC9eHxUdo3GCJYyHsuJdZ",
  "key31": "2FAEmAyPBMRskeSrDS5F5p84x1mejXQaUuiieYMDZQf9a5nFc1n3aSidHgKMsP6hH5moHjvg1A9EvCDEPATNw2T2",
  "key32": "reMC2Gqbu7se1bc2dkufvo4Mh3HGRerh6e6UFa9uVDoSML6mge6TSqvq7UK1xsNzJbKwm3H8bkb2N6VfzFqQQ3e",
  "key33": "4Vy5nAVELXcLkRHbLBETNqK3b2VSfCSyHigZxoqcTBij39pVGM9T27h9nfqVbxJ6Kwiv3GomGNohC634zHrzUPw9",
  "key34": "4sgdgmX9WrFZQgZX9uSXi8dpcXKduhrRnPG6dfCkHFp1qz2jPDbty9XRkv2QrCNJbJSeSsgrMzmC4JQveRJFDaHt",
  "key35": "4xubzyE3dCnjE9zGj2onBNUcYRr26DkzLhvhEk4H7GGzcrrxDhsv6Mm96bTPBfWW8AvizBZwe6CpUL4yhuW6CmBS",
  "key36": "23KM8eAskZGtNrfWuBhy6TzHR1fSvh6nqEmk4chEyz49UeBX534hiFjZpjcHbmPogqApt8JfNQJs5qAs6VwjgjiV",
  "key37": "65vvrm6UakTQJwtV478vPPPAGKRgh2ZudsiE6xWGhidpFKU1CShFRpS77seV48xaVU5gRnfXmHweUyxs2fh7iHyt",
  "key38": "37DApx4ZsXaGiuuunNyVwv46jxZ94TyVZ9PLcBjvoJ8o6kcvWAMukSJHeJGzJLzhtWQM9QFCoamDoSdEqNu9CEfN",
  "key39": "W3S4ksPeUxNZkGStB9WtEmzZq5NB7L1GeSWqstFPKTqCBLtCXzPZQvPyKc2qCXXdiKvT9LkFxh9afhC1vcyNeUM",
  "key40": "5hMDESMVerSAhsJ7Sjwg6mbTxz4Nt2fMB8S2PytUnpw7q9gkh11zU9oxc7S7A8XFBb6twwsBpdGz8qrx6syzwjDF",
  "key41": "4qtdJHu6PYZLCY81QMxVnzqmY8epcv7B5nEPwArLGxKDtkXBMiANwCu5csWY2jwaT3GNPnLaQYDy9B59A4ed5dbf",
  "key42": "2hHujpmCVLqu3WveuYMaxyMiM27KwZFSvqs5tMiGrmr9w72LCusjHSzUYAyVmKbki1dudux69DVo2G2eL7X7bqmL",
  "key43": "4cVXPsPTac6CebiZDboMcxvEwcMWZGEeimgpx1TfGaHtcaEz83S2FBwvgnM6mdgUoszepsaXY3qwxDw73nXkASoY",
  "key44": "2Bif8SkP1mSVzTeHg6xxL1qun16HaNm9F27HLU5NgRXCJKShkmt9mhMUfo6SB2mmbs8D5DsN2Uu9FbBmjPbfPzKt",
  "key45": "4Fn4pbWXBDEiDqbKq6g7Bkv6X6UnKEpLaviLbhT4LagD7QrEgkj3qdupS1q8Qc4pFk2kHVhyhk19JwoHW7rDPtj9",
  "key46": "5Pk4Wz7xEuaLZ1cZdFYB4xTh5EQMi5fZJ2vszENiBQpjwNEz8hPeVfPRV6XtXWNmipPKegbM2DFcWf2w4JLdhqMQ"
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
