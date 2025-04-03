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
    "5h6ebSjLbVURGnnV6Xowmii2U7ev9yn8uUXfN3Bv5UTXWkt4oEFotkknurURktddjjF2tdGeY5geieiwE89DEhp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4fTDbL49Rux8bf8XeyhYmYAFJqeMV1HiGQ43mk1RKqEXtWEVDhMQ1N3oPx4YAuw53mozomBNPMnuhSAToBmw3t",
  "key1": "V6kRn1k8FVPj2qJeGxGyjXi8GgA6z4kntKodK2rEkF9bVSSa1SoX73cLPcnaPWdVerXsE41bxsuoL7LHqHdsBTT",
  "key2": "2LkwbwnajPE3LPTuBSQrPrJiJpmFF6TWFAQPcUc2463HK6rV7Pt4fKkrYrvucnNqgEqY7M9NXpFXLN6Rwx1ZGKrd",
  "key3": "ovxLQi9Jckxk6sR51BjSF4T56hfm8dgD2uPTEsQF6PUh2PqczGgaERti7tWJwJuE8JD5rMUTvd3oKZVzaCXC7sS",
  "key4": "2uqHzQaipHyaMppPusqpE7JZNHZFtbKdGJDbBZxb9rdooM8KfmYZexfi8qyrw3y9Y6YgrzCJAVmJCbafVnjSfawj",
  "key5": "FdDDgPsDNBpMCxoHm1VaMxheoSWLMiaG9QefeXCNKeXWfNT7SorSdafmPcpQrPLHyFpxU2QvMPoxhjXfygDBDLU",
  "key6": "644Fz1Bc2TZPhXWJ3oij5Ss2qZ738FBiRg76KX1oDV5Gig4W3RMyLdLaJcoHXrYRRJm51sy2cCwUWwHiDS6zZAek",
  "key7": "rY62cwpF7oa8v9wAy5sQgj1SKDT6Ndyi73wiFb1uFD5vUfToJ2cqrc9VwEzPv49uzYEuNGS4gnipzXEFpkGmQib",
  "key8": "UbQF2p4n2SpDYUte6JzwgTopgzycT3BEJ1isEfjE2gnj4MuYtQDn1t8Q5PQ32LL21fSFMY7yvakQ1qHMAB7bmas",
  "key9": "2CnJWBLPcXdzys8icqTUebDHvXTMV1zw8dweH2rs1J2geUaqeMhYBe5z3CPCn2JHBRhy4bdkUXntGxG2W5YfYQQ3",
  "key10": "Wd9hShDK3zdq8KYSCxyWjkSAumTVxcMF1tmXiMXbBswB27XWKEzGYrF8g9t2wFP8422Dv7dZFviQTh5q7Audf91",
  "key11": "3GcCVUwxkbPCmxtU1mL618TUSztHuvrQjWT2PcVPQpBd2n6Lb6SnCncxeDDmJ8XZ3YSoqzyzVHdFhjWWxLRKuzoa",
  "key12": "3uLAXqbCGunDj3DSeJGob3hM8fS4f1xYKsBG4XtGT7E7qC5cm6ssvxhZUzm1ppyfhNYfyW1UaLEfBCMeXZeYKARH",
  "key13": "4k4R7QzH2AkjooXXWgduSWBxA8Mm4YH1tiZmovc6HcsVThkwN72Thq89F3Z2sb1Q3yJptqyQCckwpLfRuomSjYTe",
  "key14": "5tpUojZbgsCzfbopYfaCp5KxUXohJnHjWrvhgGbgmE9vhQU6YvtWCrdc4Dm5rYGiJBP5ZDtZhGTuUByidmxC1aYF",
  "key15": "3Gd3LhYzSuHWsxJ3uBwUtdbYX9mQ8v1qpPnhCGwA68NAkVxVxVS33WHwjwFCvRoWRvfJXjdxvFSt8NbQwkvsB6XV",
  "key16": "2Ugk3og3sxH4UE3SL76FqQ1kLv7JkSKA6r3HEic26GdAGr4zZPGecxjZaLVCeV8Jei6ixRxaCsh8bNj9WtNibGqj",
  "key17": "4gE6Ypeu9MiwfsxCYtGkarVCeCzVt7pFG75h1ZkFfVDrXbVeePnAG5oBGDYTvQartDQtuPggJy2yGSsTuBV6wiXw",
  "key18": "3HeSxZ49RgPaq4h3BxkrsFG1brcVeMJYa3jh6rcnAMELCPW2PLGVthEPwEUMx3Ze7YRj3bDJxJrs2aEw8uZiGKFV",
  "key19": "4cwJhJGmHoMvvRUbQNhjCGpVu6FGJgAWw7TH5RMA7bvnD98kKrr9dQ5W4deQjv7M9N1PJhvS4jFxyeqF7QYQ36o1",
  "key20": "5ipdketB3v7MJvXnC9zQPcvwKLg2B3rngWBiBELPuKjREDpaZW9JjhykrC9HqbkLYNrteLRcspfBqowpYp9wBgsK",
  "key21": "2CATqNRDkozBq2HgzceeRzeezYMvVAKSdKFu8kEYbMx6p1iPCWQmRCsppEpxh7GzFqNUPvrQ4frxUvBsyfPqRFmy",
  "key22": "4NyqnUUs47NLXuDrEKpMupbp8YjffFdvhx2ehR6vduqpdALBVNiTG4tVzkdLmLsPWk8dfG65eUTLcY5V9XmfDCdS",
  "key23": "5qBVsUd63FKJA3uqYqukkTPCJbyoKWSCooYSaRnziM9eaYEvURG7ATTv3Hq3xDENPeF9nHqMsWrexgE8Qw9aHcyP",
  "key24": "53FRaB32tZHBLpyTtmNjQuP167mnF1nM9W7LthSH3RbqfTPoMpXTU6ZiDcvYTJ7pjyvjZcSaC7xmSjMcnUWdhpK7",
  "key25": "pXmfcnTxoCpZDmvgUXAA7grzEEm63HzVU4xEr6v4Qd6FyBd5s9dp4CAeu8PsyEf2QYYrSCrMWFPyjL4MZVC1HxW",
  "key26": "4EHyEwFLctes5HD1qq5rXDkSFdrSSnR3YGGEAbV4g7QGrKaRh6zDusYb54YNwT7RpwqXfWkeTzfzR1iDtJYHKBn1",
  "key27": "5G1AsthA2CP45Lg2a3NpquXEurgkYrzt46TC7x5AtdMc3xzZToSmTfkQsJyiM6BDXEyBzUneATosY4KWCJqW62po",
  "key28": "5JxWZdBfCWqrMyrGaKkJuGfQpiyyWxcxb3Wx9FersCvYwVXuuSvsMvuT6vTtbYzTiDakuKCFF9bcErYghgm43yAE",
  "key29": "v57EkzaAjoFj5ewpPv8JofkY9WKjHFZoPEHC1DWpP2brLmiarLTvE7AhQJrwfexHcocSPqXg8ZV4dhyQMf9Nfjc"
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
