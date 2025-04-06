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
    "5coLbmbDFU7G2LS1c6mY6Gw99zQimSecYv93DUcVNuSmavnomzkLQqi5LMVBtPbqpGFxcdbBH6JGBNdYhSj3zb6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqaUiFdV6gPZfNjEUb1xnc7Gx4SRqs4yyMv55C1f9FGcGWApLZt45o5uV3NiRRSzMiv3BZBu9VSf2wG3iLALBHu",
  "key1": "5mm6PYVLFcA9FKcTYw9GQvXiu5u11DFNDCDthjtuCsxfdzoJ4tyTFV18DqinK6vHiKC6zAcji8mwzDVoK4ud8Fcn",
  "key2": "5rxwhPzBfwMEXp5TnUSk7aMbLXGLwqE5aK6qxV15HwZphirWswuKHHKw3NcxSXtap2bBSpxz9H9aQf3kLE2ujxue",
  "key3": "2WWxBZKegUVs95GNps1FUKRPytUvqiaERQfViZDVA7tLTehxcHKgXTNAH1p3jxqvoqV6JcRdwhbLG7t4kziJTkAK",
  "key4": "23Ncb6fhVvkazVXifWRZmjbZpBV8Pz6ksHfQvbfNsYnkGeFoQn1Ww7e9soqGDNvPSNdMaM64ekWbVfDCNwiyn6af",
  "key5": "3F4GeAgxyeBGJ8cotTGuaw5sYvEPVSbzvdyQsFXqjcxv3WpmndFh31uxQmzrZDZcj41SWX7xybgHU9roHGLoFr4T",
  "key6": "32R9Y54PyX2rx1umyE7SmNUEZgxtKSFe4CiDf6JuYKFEBwmGa3DfMRmBgHsoUxEsgTWcYY3mJw6vnG62RPE5CNoS",
  "key7": "4mMsBTuktsTqH9ZkWXiNQ9iRRegGNksedcq2dntYmqUtck6kvu4qTrd8Gia4HnkYbhpsLnfntgE9QpDRQXrySimk",
  "key8": "S7yjhCj8WcAaKXKN7CHPj6urvW2a1sizHsCALSEVU3yC2geVmcSGYp7Q5rgeAWjbDnfxeTnR72hmyWmqYYm7JMb",
  "key9": "34Ds9FHkG75AgepnAikbjwTxSwCsYbh9bg5zUDyFq64rLRgo6nckrhS3MEy3686HDMkwUvqAwFsufU2DD4i7P9KV",
  "key10": "zhaDMy9G6LXPHtCW8HFbKEdX6jcLyRNfnrZMNscqGFgmkvHqH9kuEvMscu3xxSxi5GbbwY17X1N49iNrVfF9ryV",
  "key11": "3Bm8pGmQFCnKdFbdXcLXr9EGyysbyvR3cUuNTWDhiiTfiYxG4F9P3fg8RCKqV8fqYPVrCvZsymBzoZVyp5Ff8FcZ",
  "key12": "3Ecxzi2expYnrqtfgmzgUF9ogVKL2yi316FSKyhcNg38gsEvcQjzJFGx74G8UWETvtLhJNAiegjXhWVocv4N4pa",
  "key13": "2tH3Ju1iYu8djetq2xEkBZHZjiJiG2qGkMACmYYeMqiyX9opPg1oYTP45EMDMFaUYw9LYpoeqQuLe3NRNRSAcDkP",
  "key14": "3N5LwATHuES8enKibbLAJyer6f1zX7koTMM3vsWH8ZswGTy1wkpPo9Usnz8kn91JhYzgNHSNEppsHAYDeMNt5f5t",
  "key15": "2BZuSM1mw917Gm8bB6BUpvVXPY4vd9hJtdG3AcNyHV7ZLV4fjNwcGDZ1rwUWTqU3vbqfvHNce4tFoQEU9BViBB1Z",
  "key16": "2AxGN3M4hKiVPAEdgpSdZvuPA9PZfJazYE1PwgqTB3oNyUNHtBnEyst4XLA3hAkE3rfsM22qbvPrvUQTwgLr51ox",
  "key17": "4UnDmWk5Xom8MJUJWiA5dXAW6txv4m5nmvNMASPjPcdY9jmUfxTtz2KPCEEwCFpkEpKWh4GTV4oLuokBx3Ms9pwQ",
  "key18": "2gPdm1vVRhUdJzsyYGtZHPHrx1Ntyh6g4ErwQCizAhkLxkk3FJ6MvimDHKuNqSmqpcR23TsSA8yGFKhHygMCCK9X",
  "key19": "2GB6e7kJaYyP1eTbWQuizw7jv6ZMjDnw1Szp1SqwbH4oPDBpcg6VrDDFfC26X4kgh29iAL7LBAfZ39B3cWYi46MT",
  "key20": "3qUWXGzyPHr8S68cKCBfHmywhvVr3EPjTvgzJ6q7yWmvJBJbfL8gJEYcH2qEFjjXG5NEjoofMgZ4eHFAQFVZ9aTo",
  "key21": "2xZzJwJnqbPDXqAana4kjac4KdYGy5m1wMb1w5mjmTudkqYe5XcwQD1Unq6huJd5c9ybpjpPBrHQHiFt2S6QoVcs",
  "key22": "53E95gUwXnqtTvBdaZZZs7kTmqQHrpAhYMTHquX3PY6oXKdDwC4kzntLYt92QNVabhUyCd8GEPg28ra3QzCAkSCL",
  "key23": "5M4E5BXuuQ9CyCB6oJesFdLmNzziHVjigHjk9BggEDrJukoVkKUiunMJkJ2H4gQsjTxxtx4BZmt3NTSvstWALVrM",
  "key24": "3dG2gaDiWoKRcHfxhBoNmHvRqQDnARkqzowQwgC6JyNNhS2sP7oUsDTeCkmpNTuVs4Z4rU7frKpXuNLfRE3BZUH6",
  "key25": "5jR9xN4HRzWyvyJgExe9CYsYUjuKuUbzwrBFKvHGfmBwgqqUeeg5xFV36DmUMJkHynMVxwjBfNK9cKkpdswXUBrT",
  "key26": "22iYAiSaNdzijjuRcJ8gLUXK9uirEUAdTQmvNArtWAgrc3XW5QJktEwzHd8R56bL6ZQEKjrZwd1S7nP1rA6H7zg2",
  "key27": "5edrTcwuAp7hKmrHhGfPf3dxFuqojBq2Y7sLVLUNAnw1HB45BKJzLe4XQyJ78HhATbwrDs2e5SCFke8RCvN8xL7Y",
  "key28": "aGoiLURYQU7G8YmwXzCoNxnhR4REkVzSNrRy2ARS37s5rNx3bRZsknidoq2ZVgi2nc1wsdzFtLWAowx98iaMwBC",
  "key29": "fACAtgigG9KueJs8sgXHArkxJVHNDh65jcBguXphBDM2Xa1xAqyvbw2948vAzQvVZKa6AFzegduPH9WFRc86GBL",
  "key30": "3E9HrcwuNVG6gcty6qzkftcAFNxeu7bwffmUnuBctw9qxv2i7QFpLoeYKYFj4ZvWTUjwY2rkxBbB4zijPp8Gd71x",
  "key31": "4mzkFHLBz5sXyQQymS66aMg3zYHvJqQZQqdc4d8sfVyC5u9FDUqBPALYGkdTP7EyiiXZhVQQsiVgU6TN8URbWKp3",
  "key32": "4EcgPUDQXhkFEkXm1v1CB72fU6C4d6c2PBNPFvy4e1LjuxbcuchNGLjadUJfvLqYksb2dLnAAmxM8LHnU94bjm45",
  "key33": "VKVkrL6dppcGHiZYDjinUwLBD7gEPduJnc8cAWdo7MutGXjPQxjiEvsjr3E4Yv65XhfxVwQBPQRbev3od9WRKk5",
  "key34": "3fPEh5ZuKEed86vamZZkKdL79cxPiWG8VSiEAYe6ZKEbXSWQyJ9F9ofJJAwLzBXy7Z1rKax5TQ6ruHy6cBF8V9qm",
  "key35": "65Z6tT2kUKaEUtMQpycXVWarWgjMdThJJg8XutfpzEzGbEQEyfTuNYCBnmtrwDBM2z1vb331TtdtVP2Yb5BeNuoZ",
  "key36": "2pQ4aPWFct8WEtN6nVhL8kxuztrKALb1wEYV1btRi7sS438kVnrnUMRZsnrNJ6EkBCenefZdP8dogpkfvHxtRMjx",
  "key37": "22GSBPTtD1GcaKq7TKL3ANNTCADFjfqQU78RaHKcQpecSRTmd15Q9TjeCQDTdaeyXCesqScJp4WhCw9uMm9yaBKv",
  "key38": "2KyeLHWxstvvkuLh6n6EzoNRgr2D8cHMXsTvg5TeHcJJRfHnBjT2Qh1uGZqJG4BQnaaNkdXiuU7CKnisMUMEdPRK",
  "key39": "2rAeor31eYtyYykfPP6vs5w1ZeGnXCwmbbsvde3Cazo3333Su2FJBoFPwTBAGJuKzvmDdsomLE129YggFka7k2TY",
  "key40": "2R2rbasnWESQhWn7YJJiJNEjLaPurB4ARpzSo2cwTkBoztDPmxg77nJurmsBCA947apkoLYqbZU1oG27HYD4BY14",
  "key41": "4pP8z32AEEiUuP7Q6Jfxw7CJryuUBjizXK3WsozwfT29jzfjMeTmg2Me1g6gRek9wt8DhWGbvZNwRkrf95Wvw63C",
  "key42": "5X7wnAFbu1StmgcSXM3NHN7eMV8ejjgAxVeqssAdR2FfUDHqmPSX1MYETZPdrLMZFfo8kR1aRdTfQ7PUJvPPXmFo",
  "key43": "3anTsL3gfNWYMhGcGro8pTJ6ENzH48ELa4vZvArifzxq3x11DwSjTbZDDsT9FB8cBP23bw1M5ZUonbNkZUhQHgMX",
  "key44": "4iLidpJjhGfm1hfjCTHHH2D2zdkGRUCtMi9EQ8Q9Xza4PUwXQP6Z16dty7UKEHpaxRzTBzxJrdZhNKXLb9jdxUPT",
  "key45": "66z7F4bkHdnX61PLoCXnYn9AABgFFpvry6KYaNPYuN6AAC8AcBaaBvd7NrG4DBYC2NLqkTYWt9Dq2FEAV2zSdCnQ",
  "key46": "3D8eitJkxukCi2LBfAPvzUh9PcNtittAV1LnwQ1SWPHvkumHshccViZrGqVA1C26JKLJ3D39YjWjEPRPBQzGkU4y",
  "key47": "YyZP6QEffmnpinnSUtkCcXdZBU6h87JSfwUxTyw3HESJwGJNsgjiFjx92DUQHvHy93tpT6gH1jPrtzdhXUbp7R3",
  "key48": "4A8dUnVKxZYHczv8fysHSEEPNc2GNKpiFohFN8kuK9AjNb6G4pb7Kv4AUKE6ry1abd2s5jpTRMnwW9DLzgcvi9Cw"
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
