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
    "5EpChpiPbEHB8jyP9HBaGqFf34C99DK77yNUjZjdG915uTYAL5XBnrBycqsjJGkF28oJiyNaCNVvfKXLdxj2c4nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teD3Q1mWbX1nu2tffiviHJ1EQJjFg6JrbfZB3wDDU7iCFcs5d4kQCQJNucEPgEb1jSgvDAorvDj9eRkgFZvuU5M",
  "key1": "2AScYpuUgJS2BUDKTyKGjEDqVUGN2aXsJffnSB6NF7WXNWGq1PC2U4kiuna29K6gAuHJ34pa7jjez5nCMF6nivgL",
  "key2": "3pFHaSM9UVKNSfJJmDGWyxANGpQBUVyWSYTryZWGhtXYT9kRW8axtQPxkTh7qqm3KPKuWsH1Xyd6EbeFPQk8yus7",
  "key3": "21h5L1X2m3LTutKvQtU8S4DNBBeP1K1ao7tAy3rWCkZ67sZ8tr1vJN2KZCQSPsAP2W68brmms85ty7nrtXaPdGZF",
  "key4": "mSVNYoj82TGkxxz82GzGUKhS62fgo7eJ5T5z78byoNeDzo5Q5ptnNXuGwLygncMa8iFHG4xVhSBpyof4T72VkxQ",
  "key5": "3G25zrggpNpoy4qeWhcmb8CbbDv2Xv5yjy2DNXBFJDLwArAcCySooqsreWr2q32UZdpMzn2i9TS91fvoSR4cBCiP",
  "key6": "4nteeTRPL1yNDEcHs6NXmYQm5Q4WGNuYT1epEjS7Sbv6rvGzgbrfaCE25NvVPccmyu9Eeu8sCAbats3QATEZrB4h",
  "key7": "2HCpCRTeLiGZo6fwn4MQpiHhL3r7eFoQQzbnjjHwv7rzD6xdjuM4y5NVoxpvD7ybHMSHt4xANDTVKpp2qFUhRMGB",
  "key8": "215uSpbucT3Rzp6qZA8T5daBJ7VRPDrzHjX7vtt7NsEgUvQp4J8pi8vDnA9uR43T8AC4aJtHxoF7E7g4wNfv84b6",
  "key9": "61GwkPFQPazdNgSmP1CNT8GeeZsJciixSMxNiLu81miWRznCtsPQJRnYuGBaxfEqNLGG7QzKw4DayGMGV5iX8XaW",
  "key10": "4sDScNf28ghBPNUSzcZmVyy15ikqkLxsp6R2GuHmzKChdQmvjPZVyCaw8QwWc2mQtDksQKWrN4iXbXVHSKEvdLT7",
  "key11": "3A5avQFXZLJXbWfECwqWKcA9HPBAkSHS8WkK3EYsbWEv384kWazovuz4PGjJnPEdeYkxgYNS6N9UJs2mffTpE7Ra",
  "key12": "3B3PRn5EuPE4u53WMXSAAy2GCG7GKyefE2sPkCJHkKKkReAvbMytABuJNaGKJqrU2mbhaN1YcmMUvpsxP7g29yfx",
  "key13": "5VXK6FouwRoMSCvPfv1oxxu6QcdhavmMMcisZmX3D7nfw882Y1FqJWZfFkwFY1RRMSXFNhq5hxDScJ6t5vXjhXX6",
  "key14": "3TfYoRFo7h6HtqU3RCSveEcDAPFx1qxBQrqpVyNkVGUDgcpCbUQmeaKncrpFEGadSyQG3fJUgXKX1MAdzDyipY5Z",
  "key15": "2dTCj8KWj7Cj5WugLJK9eqPwSN21F1msHuqzgyYQ85txoHVRaZHZ9nga54DmEF54Hgyk8PEzihGWZD9o9y73LmAJ",
  "key16": "PC5EGzdDW7jpHLJEKgCyvBiJBFzJWeqRuPqhMWeXvwjas985pGmc9K6CZEr7C86kEQFQ3r5aYLwFjLf5EPNJ7YR",
  "key17": "5qCtEqevcWJq8hcLVMEvdFBy5ampqmeTArfEBfRWe4avcK77jz2aA5zEsxEoWnxPmfTR8aDxBdK6RhKg6t4QpjFo",
  "key18": "2QiHHqdKniywtq7ymb3JHqH7wkdvVbZagSkCt7LcyD64VZzwVMjPXw5Qbrdw9KNCrxKUVvfXuaohBv5Rh51zxZhd",
  "key19": "oWWfkUZqYtKnwmoD88EeiFDW69vNf8hNZr2gcNG3iZCT1V3X5vQDbovmUuzExr1sWusHG9qDwTPLGQTCF662NBn",
  "key20": "CnVjeGAvUHNHP2tUtBkcS3ko6HkCw1134u1W9woVXVJNs7ZvgMBB8PCq1rtGW3iUe6qit3612QCH5VRTW6cdjVi",
  "key21": "ELpUVZfk9ddFfSKjFdyqPj1DnJcdp4nim1YTkQSL9tJoXJHZ48tiBE9Z9kfgcCete28WcfhohCgQq43cY91Jm4x",
  "key22": "5FKVidsp6XhFQ1muEdpirkbLtytCNQwNEFTMUHRum4sDkpB5cVKqQ9tEj5HbAJFhaDDUjZHtZQ44qx9gsypfVYPZ",
  "key23": "RukKz6aqcvm7g2oDTdxyDzaCEN8ESn8XNEzrgBCzUzpbRt3mqJyv5WG9BSi6bwvcPvsamD7Q4LW1g8VWXUyCpQx",
  "key24": "23NAwUaWWpdLuf8MxGTpwmyundxuAojEwdTcbGLBNmmJ7QVisxtdgM2zKaS5shwjAKFiNSE3HU24RHGzTrESrY3W",
  "key25": "4FkYA2N49z2mQCun95y2v6yrMwQUgTnEyhxKF1Vp3qtnERGid94py8hbqY77PJpcGwhKf8VtyxkFTFq1apGiGDHM",
  "key26": "5jBMqjbiPFFUSTjnfNqx82CTGWbKPeCsaDzg5HJxjQhgrK1ZGyzbUeWv9riV9ARhZ4vfDjJWENuiKkh4Y5JZTdEu",
  "key27": "3cPErLuwKeKoitaB2H1PifynoSYLTeZYLBYwiMrXs9wviPxbYFxNEmymCSkkwsMu9NGZ9Cv1tzJfLWYkzaa7VLk2",
  "key28": "5WdbZW24k3e87ps9twuh481wDLwnGBpm8sjTxUU4hbpSKhSaLkHUw99hux6fTYHSiggfajaVqmKoS7HWLM9kmFaH"
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
