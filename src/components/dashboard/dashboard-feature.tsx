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
    "2B25aZD4yCdJSridCXt113pBtbaGDPuqvdmSAbXwtiERnNkK7UNQR2tcJjyaHMNWCKaKmHvNzi9uJ9Ev9KW1faFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZvXoaRpr9UWpBtwfUPUQcwa1df5ivkDWxiKJj3n1SUB73d4qFzx1vxGbtsamXo6sN4KkhdABBrbHpjttdUNmjD",
  "key1": "5a6N8F5haoCtqk7aa7nhUtpiqSJfCphbhC5QbqSjKjwi2ucdsHHqzco2gxxFurqFcSbLJzktzf2veupbKpRg15G6",
  "key2": "wdZGk6H4dboExhhefnbFsfUKqrY5CBpjcMh4FcA8e77BcGPbvVTnvDcf82So7gN7oFQU9AoFtNk89NW9zsKJJk3",
  "key3": "XztwToC1U3T8KGH8heUEaZyojvz8Vb7Ukeo3ZzUvcqYLRV2Yb3EfFBkeGLP93zUBUvhjH9C7drRRhnQSPnNCWLy",
  "key4": "4wVSLHrz9AomfpqEsUrLNkaTkpe3onQDe6Z1cZd3ouZsACkLeKGP5hg5NbPVeYYTf8pZ9oNZVErsVn8VBLK5yLzm",
  "key5": "hWic57YNwecFWvWcDViPAbHrvhMVKThAAHGrK9VAUMLY8TWUWopowYoNFBWAe7CTzpTweDfrkHSynqNFitoGE7t",
  "key6": "2EcYWonkLcq8QJQ5hbkSF7QYWYJcot4bfmuS8pwfKGuV55bU2vyLFzQ7cuhcKeiZRbCYLKL74hxJDj3ZxTdkR7ZZ",
  "key7": "4QVbJ2uMima6GYcmhHTBd4wdX5GUbZQJpRqGVwTzu4DapaqdUEqLcC7iWJGanrf4uTFVEcF3PoSG6pmqYoYcEeia",
  "key8": "3Gent2ixbrwb3rvECQtj4CAXDTejqKMzCxTw65w3SDiX24hgPgm33A7SrQnymWUgwSQwsox1bLSE9CXfbevNCWVB",
  "key9": "4Lf44Q5JbXRaHVMPSizDNSzQAxNMbs1LV67pWKqFvab43MLHY391o5xjpGEBhusxUELU5UGXesyKKTVba45Ny7xw",
  "key10": "5b8d68kFVS3ycjs1iMKdsKuXNE2s6uLxwMq9D5BLKBRp6hNcmucZE5bz2HZovwCj33LCGYFQuDbPudTkX6EH1mDf",
  "key11": "4yrvu7P2qpaA5X4aatj5sC14mkMvEW2oeRYwpeELW7qKKAw73J5cwQzn6XT4kNnCJZg45AGkxzNQ762PKBa27GNU",
  "key12": "48Hdr3zr8PaV7XWD8D514inaq5t4LUq5vVegaqVFAohniNWTobChZzBRBPtryafffKscU9hoyGViFfuEjQdzyW9L",
  "key13": "2EYRFD3KdDZMuBb5qdCpoVwCZzKJuSJtLHDyU9q7QuQya3CPXHd9SGh6cpbozyf2oBRE1WzRj88Phb3D9c2pwp3W",
  "key14": "63WW4YYbJMAk3xRQ9sn1m6QczRWs7yFGfrgDgHntNB84XtwVJVnn6LoPaoDhx9tkhY3joEEMckKV4VEgKK4CCuCV",
  "key15": "3Vy6kD3nGMygmt9dUo1m9Gfx7VumhRhoYtQ5CiAjAEJNBBG8fbkXQoxu3F63Y4qz3uRWbvyiETrixXPRWeQa2uoS",
  "key16": "3CxgR1Gfeg3Qop94dNWxCgnc8wcgpY5iemK1FRpygJKTVEAN68CYEVhFCJPrn9PFfrGPSdVBhCAvuwFmYRhafK5V",
  "key17": "4VF6DpABnGMpcJzzhbv4jVFKBRp56yiEbzi1gPaL2hWTY55bSRFgFDpXqXJHYQoopz6hsUUibgD4VPyXhuJ2w2hr",
  "key18": "wKhmD8d4GKa3RcF6NbJTGksYUTmsCXowLmU6fvXTUkgaNGAJWeiuNb7ZToMDG7eYD7n9v9Pv25BXrbcB4xHTMDS",
  "key19": "597xnqUA7gQSHmUWAR79yW8FhpYMfiaUmbtH8b91aTnfACDtJKQ2MZo3c1E1yaXqCzZqAXFxkM4dmHMWqNzdk6LF",
  "key20": "3v8hzERTMWAhuDTGvFMarvzurrb27WVPg3vkVjKbruG9jzQM6efCdL8u9rdpixBJ4dRrg1csidpGLAwwYmE4npyT",
  "key21": "4HiFFA34JDCotrBT5i8zyd7MW3ESAnABJPYiBN1e5hPza32AuZ8m6GFGd3SdENJqF1AwGLvRVqP6AdGDnnQiNxH5",
  "key22": "3S8n4UBHvE3iRGCAfpPSa3bzCcxQseX2H6iZUuThyXWpq964MectTTxB1SHpzka7kCca5yyc4vehp8aXBUY2BodC",
  "key23": "3dGA4LuxY3RTDDR84Y6LgUzNUm3AjPV8rPpwc8bxgtUXFRKcyNT9vWU6NzvWty2L6mkBsFrx4vYTyWkzQbD7MxzR",
  "key24": "3pAqQesLH6WdH8rLom5QsibMxZgnVGWLCQzSvsPpxeapQkbMzbXc9ppmmmjrRqez5eHSW9jAYggvbQgJ7VCn67Yi",
  "key25": "PgVVgoSbafNnQtfH9SefSzHrcq3WixgKBSJCXuMZmj3QvCbRLHsn75pLryXQr1iwNcuSmsXBfTZg84Eyfp1wKGS",
  "key26": "4C1dWoH3f8f82QuK5R4RbsmjVmNj8266J3F4EVsYu6wxrmHkHdskXHX7ACdDDqsLpjpU3aLVNT3fTtmcmMLAM5z4",
  "key27": "51naRcfGM5fVksJ1LD7zV2tetMNhJ8AcvhwTtg2wGyBzq6J3tH7HyDPtrhGAD69Xdb5g2HxSzzcWUAmf6xZex5FC",
  "key28": "33BHjuSVu44qRp8z18qsaMzcncyNdaJtHXqSPD2AgV7PNUKm7YYH7LAd3XzPcpbfBEvVittUA5sYbfcunfL8LAbY",
  "key29": "589QrRAMNpqmPRszCNHyJKv2RKzHiQyf5YrcFLK27CcDyCdjV4DeEhhFN5esxzTQGshno8eCgEdchbPQ6NrNLguL",
  "key30": "3pM24VW8LfeUZdkFZn3oeDAFKtehiXaH1bPAuUbTdv4xerkGjFMavSTkiqERFWXsUBJUkiXZjFLq5zuu3zjJoXv1"
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
