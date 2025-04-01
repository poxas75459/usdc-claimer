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
    "ymbUpYPEfHgRs4MhxEVr2GjBr771ebAvqRSasdbg49AFLu1zYgBMEpCUaUYftxaFTBDHFQDiuS1o3VdETUSPuKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xohj4AAy7EK1dpsErCRt5VTvq2FQhL2S2kpcCaMjqNNpasDX1RdUynrwVwUj4kQhFrY2B3Vc7Z1KEDFSqkjRhVW",
  "key1": "4sUqxtq64djXbqGnkQrUwjDVFfaawwFNHUuAni2aTPVVTfYk92eVJFy1vfg4Dgk4rVzJ8ii9ZSByfaxmj4v5hkEQ",
  "key2": "2uuZU223rEWgh8GmTrXABysE1687yaZfhVnCqhAKM3yG74X3RMZWqYJxQSAK55t2L1duMs3jgtx52s15Xz3athUx",
  "key3": "3o7w3C5nGqD6Gh2vvsC5m6ew2YukgGxp37v7p3bM5bU6hHqMd1psBtvFuhEx2nKvDRT4oScY5VtHnXUsxGGEYWvr",
  "key4": "k5QgxiyBaH1jeXehX1x9YAhSvQ7Bpyk1Mahetvxk9MrHQgpsSCipAZTbHijvoKqWRqs9jqmDC442L8Utn48ev8P",
  "key5": "4nv55mzp1mLtMhw3cQLt4GTMGboCfcnfuYwbkgx7AsNFaM2HNmEGhGZ1tiELxEmsiz7oZvUbFDVud5JrHdxJuKBk",
  "key6": "5xZpuzfyowHYt4dy8ECDEWLMDE1uLrLJs2Q1xMCR6EKSPxLUgQGf6X7DedtZG9BFXW7v13DnPx5GfFz9dxERiEyE",
  "key7": "2c58GGpfRrQo6PejW9Z5khGrr3AkKihCpv7JLnqtKLPet5DKPYdgHQrQc6LnT84vEm6pdaJSx3ZsHJ41riVaAbLe",
  "key8": "4q2ts6CTvF6u7WucRprdKh7CP937DuAwiAm7tct9kgCgqFn2VYF3CMbm4yepSYWxkPi1cStt7WG7zWKPbsuWut2i",
  "key9": "2QExaQfBUD3toyimdGhP89YFmPXyEqzCHaoSWkqySj6FPNxktejmkFibyM15TwmdDD6EhjKtxfZ835ttGHUhVxZY",
  "key10": "qnVg49PQ4Q82psyECdKakSyzTcQvT54ZtVjLLwrqwpfnN13D4TvDeRXTsUyTFskdG85BCo6A2TAvyQ4SwySUCa8",
  "key11": "4gAr4Xs6asxqLzdnjTyMKf9puFL1a28WiP3XV2k1QiDbJTMJR8gJcDMuD5NAKbAo5wwkeCrq6EtrMXHfGM3a1CWY",
  "key12": "NpzxYMNsVBh1ZrTNMosW7qKLUrNgTemYEsJ9jfyPvv1puRtLKwcifwyZ9mYTChrKCnewG9mX4v9gevWp5qF3F93",
  "key13": "3oUmiutNFmZPpTfG2AftTEWdPSxmtpkRqkhW4Ag5ppncERr3CxrRr2sgpLrynNCaaMxvFeBpVgCUypakPwpkiQAW",
  "key14": "SbARMsPi51d3kUgPYEkBgXLtRAvCjtTVCFTnf38z1xLB5Y5ofjC5q3ePy1BESkqavnM93Pr1hYCcmNhkKExnzid",
  "key15": "2kVoxtUAHSwRPuo22BuMucvoAYHUYfuGWQG6ExC2KXehquRa8rCW78BnGps2k49y93PUxT5ZTRs99dL8JUWqsky9",
  "key16": "4M8Ks1zEZ872UNmAKikygYyLUqheF2GrxzZKN6R8EZxQqEDGbBkq8yey2jqTXtjrVbCnDeivED9q6HePku1ymuzN",
  "key17": "25JK8tSojqZp3HLK8NcMkC1Jct9DWQujKYXRTaVaUHoZd2nSV1GEbhiV8tcR4ZTEFzoAfysmjjqhzBUaKeWUQPn8",
  "key18": "5uxAJsQ6Ssbi4r8J78vriga7TGfvc4EZgfJhgzWTZ5wVSPAHb3tAe35UftFEU9wKzXs9eE8ytbg4BuY9Q4rnkpC8",
  "key19": "4xF3Zjg98iqeDp52gXqnaGfFAzn5QqJd1vgLMZdrVt4c64ug6i2kbLEeERBVhNz8Uspoc6ujmwUGZvLKMiUw1V24",
  "key20": "4gkRr1GdVzY3QijNB1koYUHfTArF1dXfe3TLcaszhkQkVKaAqACK1ZTh9GoCnB6m97k5QoeB8SQnqA3zWkHX1bGn",
  "key21": "38oYTuWs5A3A1VJLANnuiJ3kjJ6b9WHS559RFgnEY8PPUkngVe8j9Gbj2N4TT9s51M3qA1fcYJiWfvfdtCG1xXpX",
  "key22": "zKBAaHnoFAn2Z99k7P1URbDGJ1LCnnHk3eiJmKjweZcmiUGGT8ZHHVdjjZYS16qkLZ7eMjKYnkTwH4CwJUpiSSZ",
  "key23": "5b9gNyXM2X4Zotv9yQhZ2obJU8ZQWzhrghgYkeVt3EEZDYk9p27EDusrMoU8qKjUQmC35zw61XGtrYYFTKCsNFG4",
  "key24": "4hXPsGVeidov1Uh3meb5oHBR3JV56XANGAFquoGdGuSzPzLquNKaLUuTAD3XHbvHnk6nHge8yHfe4rcaK9Riqyrk",
  "key25": "2v9BZhQNnMZACGwqXa8uYLUe8uAtiCxNWRoXYfqu1FDUzRCNeS3TWSeNVxR3xRdvwbL3bGS2Z2JKNbaULWQBnQLp",
  "key26": "5eRGdFNUNd34d9CizFQBvPuALR8XX47Drp222Vv6URSm7MGDrwtqcRAjdvKTiGauvHFXJ2v7sUXjtC1o4FVrWCyv",
  "key27": "5aZgJvEMwRAz1W3Wcoy3RPiE22Fb8vcwUwhpRW2Xv4dFNMsfeyVp1NrAY8xbusrJWRoFSjsFkrD97sj9iognGBwE",
  "key28": "xXL2G9ubATt1ykCy5Q5iU67qtu1nJzNT2TPDbj5gjgdE2M88seGuoSHFeiMikNynbESeQ3Xk4dGZavULpp35g1S",
  "key29": "34dmQkLeRc4CL5JUWqSceV61L6EgJkWtBMFmTRgkW6cKTGERAk8QGXPGcCVYyJywVW8eirvpd9xZTLUKCh6stX91",
  "key30": "2azFfGcUPGCn6CAhdrrGq2CY1Rer51wxJ41FzosKEVPZH4ktV2mJCdpEyq8Gi1hJBxRwaKhWWF8hLsUER22xSsfh",
  "key31": "3nD3PX93yz1iap1YzZdU9kVhqKYDEmQBkjeJZoNZ2Bvhibvg6Fjvq8RT5wxbqqQKRhiYqD3qgiF8mozNz2WMtQgB",
  "key32": "4gYM9DXe6qfushSinYsM3BMweuM61hPy8h7Pj2qSQteYHKYK3eK2vQZXcKZCDKBSxw1iky4acJvdp2i13yBXFJxb",
  "key33": "5NAHgKEnDkEoPSwLxtfuNNEDHwi4W8rrPAE44KyUW2cpm6TkEA6xXKYztPkgLGNy2pC2EBuwYjEa9p3VuSgSAWfH",
  "key34": "2HLBHYcNxEr8z6J8qiZDMwYWHAcjdDNgdzjzVyBLTqu6cVTZJtLWo2w5PsWrYWF7ZWwW8ptU5NGM6bW57eUffUwL",
  "key35": "4aT8k58hCjipYZ6Nd8qYpgx7TvSAJsRRANed79TXMyRXB9DabQvZZ6sje5XC8xRNs6FVWHw3ptPtHR6fa1ZPAzLv",
  "key36": "2YganWrHU98NphxUsEVzHkmdVJ4Gk3M8gaNn8neameBFtECFmWS8Fj7gpSzS1wXgAAMLrEGU7Uakgm9r83hBC8n8",
  "key37": "2MiY9rV3Qs39zt1qRWPdLGzfMV2WPfEUMevk1Pv3CkZtTCFwWJ9mruXvDVksQ1afQkziQcsNXWsFEt6R1Ampa762"
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
