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
    "oJq4GaB5Fzn9wsSo7QM36TQGzav2ZmkBou2TGZ5Y15pfmroGGC83cRTL8RaV2bxKnC5Ef6ghRiDNmj3PntWGtid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBgxzRyHktzcCwNUpnLgY8XVxa97zrnyBbKiHqFvqEzui7GwRiex5SZy8c39iRYSM2nTDga886GQRagZTiWCP53",
  "key1": "3vaXnxBAeJQoDvHiRvkpgSM5gxTzAyKD6nrtRtsiTJpveuA81T9dtt8iziWKdT4nGRPs3MNDjqSM2WT3Avicsse9",
  "key2": "4ooKni8f5tvPy4zzPC8HSKcarQie9VucpyniwKGTqFU15Kr3zjnx4cL73eSr3jkxaoNDJfuHUWtSagguPQcYN1Py",
  "key3": "nqwNwhVUtNNQ5hTigjcXfHS9FfaChQCdE4492Xbsw6EGgGD5qJPDiZScaUHSBhTvPz9Q9T1U3wGtz3QW7eU5kub",
  "key4": "25Qjomhm7PbGDHyrxmvARFM8fqYLjnCYAjFNoJw5hvMbfJER3uN9RGc6sXYhhGM7QcwrM9eoFYDwFXKzUygzPdR1",
  "key5": "4qQNKkHCyX4pTXNW55ct8E5h8LVTFB1P73W7rT24KFGaWsDErJwoFTNVQbWFkSxw4pCZXJhXYCtFU3KNyhtgQ3Pn",
  "key6": "27CA48LeSSoAn6bUp4LA7n3QmZKaJtnfeWLiCSyYUXvnv2CeVN71LHgEvriW9uUNX5zevU7foh5FGk6bMh8eDP3X",
  "key7": "5LCy7QbiNfQgwwu9cfnsVSBHWpoP4fK3HSFP8gXCjfxiaG2E1c5K4eeYTYYmjhcFAPVVmqqpPhLrZ1LBpDfC95VQ",
  "key8": "2BFrjFQWbRrnhHc9ACkxmeR89ima41UnBqtzpemWSB572cAWLbNSso5Lh8KnRmR42s24vwNKGdTSyTD2sgfDFfsr",
  "key9": "3GFPDyyqDXfT8P98Bs5SMN3ubzXTKZsoDF4XPN2s1aLT3XsLeu6cqfTsnGfKF4REzekL9PcmPrswNWCFvmdAdzXG",
  "key10": "Fp3izGntTRUpf2LfiH2D6RM6ZF61EtFN7uJG5Q62kUVRADSaZ7RvwpMv7yifmfgsdB3NhR9xwgabRcrUewUWYY9",
  "key11": "63y3c34duST4fLnHLatMkuq9iuh6htauqAWKugsEPiXCGEPiJdxkJWeZuc2vwiuB6ETnaAu9nuAgq7YetzjdwC1B",
  "key12": "2GBWVo5tg38mXNMHpALnYMtZ78qyNqj6eADMQykvUn53U4oLaRY6pXomTk8j7wVw3fPzz9mpZM2YGagpYwfb4juc",
  "key13": "677T2okuUhzy9avjz1Ud5SM63RsAWZtb2pBhdHm4EeD2v8NELegDMx2nLCZsxL5Q4hqbAQFEMpAN4CZWyA6qciQG",
  "key14": "36bN3bLNDjWDmwZzoq2jdZnxDqR4ymYnvagaULaYDsq3GwCRxaiJqfzZn56vxqqjfHbY2P94Sq21bpcdXKJn6pRa",
  "key15": "4csmSPkfcPDFECu7GQDP4PHW7TF7SWNsThJRyfDS5jvsesVRfPMsVqrFtiAwEvWoTePutoH9DrmWVoPCmSLsZSFw",
  "key16": "3bXFNNqRSE8UYQRgfKi7anpcDKvnodoLJfZDHKVrvVY23Ca9zMNTdMJqqo7C2RsCFw8FV5WKHGUQjpVyAETD2kUP",
  "key17": "4WpjNr7LDKRkB7Ldh8XSpor7JwHDTxo5xPeWVvLdxixi7EZAsxh6Ceizjh7vEFo1A5wMmUYTykCxXJVe3oAuoNyv",
  "key18": "46CvZ5BUVGF3zybofwskrEzLiT7vfq77gwqbi2ggqnq4kTfuzHtR86nRLBxhWkJfW9ivgYh6DmqUpVE1VSS1Q1LB",
  "key19": "3w3uhsBkTctjEgXz4VTAo57awS255tZ3uhRGUTEkkaHRe1PQewnfg48fQTAtHZV6sEGaF9Pj3wstVTpSKdjg5DvG",
  "key20": "5uEW8Cjj9h9jM2FjQk2vAzQgbSSdEoFDqwVmukxBqArqXo1QbWzrZxTAHueQreFoqo7FEENHWJaZHpd6rFCdfhXX",
  "key21": "4ZmSW2JvoCQzK8wzL7RXt1PL4FXNGKXBF1HZ74TqECeXVEkxZuSHCG4eE97kuCbujufTjakJG9VBxL61TRURPBUT",
  "key22": "3FE3PdgkoQGEAiBu7CBUz7s3gsr1Cs7hwjKqkKrvBrv5F58QYdgG4LHwumRQteTjhmF1T4J1UoFuG84GLqQB6HmB",
  "key23": "2GtreDDeWHuEjX2YsZrMdL68DA4GD9bBxbRsnkrViQRaJFn5zyN55oRpQR6Nv5tAvTuJxszfF2HZMKktUergo5Uv",
  "key24": "4FxLAyYV1iCi8J16q4DtcmAduCijqZ33CzknKCWsCVH7WT1WRq6zB3SMjUB65Jxbf2iZGKyncHUFMr2PnwMSPmeD",
  "key25": "aG9DHjaGCCMGYHKKdT6Ve5LWMaKG3FuKTM6BzRdobvbeNn7KboEGVoNCLHTu7wU2HZap6fJSxKSwoutpvAT9EwQ",
  "key26": "4oju82rVEaAknY2SjaEDHiG9spVZ7PeK5FpADLzKnSwdKBmSH3vLoj5gcVTxAgdVRVuU8LDGov2smgMSgePD1nXj",
  "key27": "kBv4XmLqPVHcdD22UfwST8ogXN8srywW68o4XVjmVnjSE2N28YbP8WT4T5wJjWbBRG424aTLMqGK9Bwpi58ELxC",
  "key28": "5wMmZ48m5tvVDH7i6CpBAaX1bPsvPxwXA7dWnepN86ovZSojENXiiycM63zKbZyys3XXGtMTcJorLayT3X74ihie"
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
