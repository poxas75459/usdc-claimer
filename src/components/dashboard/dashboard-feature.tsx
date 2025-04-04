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
    "5gnqereNrfrEvh2dfRJ8MqPWkqrrLbP68SCuQmxjPTfcxmBd6wfMZULjMvdisD56V3r6KaXVdSgAJtoTWVWiYkU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "heVbFyza84HwWgss9XZqLd3QRZki5ADuLvQphjjueAupxnK3yXiFdgp7CT5My9up99aYHxYvtqRKcXAJ78tDoJQ",
  "key1": "4qxL7FezZhFhRLBxHxRzF9J437ww5qpJvwoFnpbcHCJW5gdwwQ1h4vKFMoDEYBFYuT2g54waGUeNE8k6c91wbuYR",
  "key2": "2Z9jcBh7dktvFDJ3F7KtyuvvZPKqBjN62ZVbsbmdojiSp5y5safFUPvZNA65XBdc4e1qmnehfwsayGprTNQVuJG9",
  "key3": "271idAahGXBkDtqrvG2vKC58LPTCaggSLTG8hrbWkhAmdS75wVUhXXtQ5D95kgddX3KSGp95R4NNZ1xW2MxB4sKM",
  "key4": "4zoDwm7yb59qTEsRxYCC5bNqUTpYi2aRBAsHw9p9Rz1z6VU2fj5QY2Re8dfU16TM6M4HzBP6Q1D1GJ9MMfrXM8Ta",
  "key5": "3iBpmTHNf4cmKkUH5451XaYRw37pTXnKiqF1Uw41DLuFYVeehvcVCm4gSH7SQUvUtwwzqccgC4heWuw9U2wBXM2z",
  "key6": "2aL3QZaawEud55s5YQezniikAVJTzSZ7VmCJqyrt1GrPvtiiAC7nDfxqcViZMHVaN9Y8kTtHofyettLnWcqHa2H",
  "key7": "496nVHHTnTGiq6npfvmmLXTgQJNsjmqoU5M5DEBf3CLQXWLQ34PGormaAmHcQt3J3DHqJTqi94brAME4KecYEnbC",
  "key8": "3cTnJh6MbfRx1Rr4JJZR9MUcXyr9pGq7xz1PujCv24mR7b86wTB4RqZzxwd7B9VZHVgfory7ce3284zACnmUo2Es",
  "key9": "3bYk4LQBpcKjETYQeYTJX5xLB99Ft6ZU7JVQ8hmahS3XKGm1V4iX94y6sSSp7gPMVbSFdzExAagVCLJJnryPogxU",
  "key10": "4cBMoneB7vHH3vunKJvy2vzNUEBqk7vc4beqt1BGnowFXDBFWYJunkqcbThchNdy22KzXyZqRxzqHGMvfuHqxNRm",
  "key11": "44QvXHzBgHfhNnfPTCki7NHSHMSiEfN3Sm8yaswnGZGHYgaUQuFQBaCeiDKRZGx5HsEKT6TCvF3vtbCUrcXnTunM",
  "key12": "51xJNdsNzUEbZLiFHJBx7FHYxzzx4ztJbGA5mbtdt3stbMNyRWwHz8BApTUcJUpK1jEnrQvaeFf1vEEcnWwzUUum",
  "key13": "4SnBdYuXm6jRCRtQb2WHYKjLVDQBxEQa6xjAe9UXp1FEsSLZ5Q3WFPsaVA2CRRQk8Q19VgmUkVdfZsAxojJQBkYT",
  "key14": "ZDZgvSrZQGJggFAoMayyt5iBHEBPyc9e4rkdGGPgFY3oN5Tn6sxHTLXAKDxiNid8TCoowQaCPkNaEg3n8kUZqzn",
  "key15": "2pzo6BE86AyLw19XejUJbxkX3kDq2jmhtNbEqKKpooLmqkDzxhRYFqk3Ks6B2AKKm8zmGRRT8s2Wwmt593caqiXQ",
  "key16": "2dU8ddiie3QBSbJQ3b7iDF4tyXFY7fMzcg5FWJv51TdPNDXUznGxUBy5oNjev9UMGwe8LZ1WPPtAbCJiJ34fDatY",
  "key17": "paVcJbWzCdgv4D2LMixrMby3BUgdtZrqGtVcYvRrWdEmWJETzEfCrZ1hHmRAoj2m4tvDuDzGJ3xsf9opZydS85r",
  "key18": "4JsXbnudvKG98M2suU3FEooSagREKwKUvHePoNwZdHxCKhQvovxQvZBtmnnPT3CupYiUQz5VzXYPzNfAM9kyh6F5",
  "key19": "3dDamBP6YUrThm53h8gYtUrmj7FPWQUzcq8tVvznBe3qvRuGu2YXscY3MVyECEDgzGJF91Pj2TXpRwT7zM9Spucb",
  "key20": "5Ewt5ja1apPjerwgoaqPqAMdjnnN3bi9ugycVXtRa3Y9RVMYtEm2BJ1Z3fXt54MxZR58oz5eUMm6Fp1uCUPCWfTT",
  "key21": "2xsTcX2AzHY7TnSCtNfrzr6kEZXy6fC4CnmK9cbb1tjEKCVNQRvUNbchx63czwoZL1kdRJVKrFckgNSAnkMDZmaX",
  "key22": "HSMdw7nCb5VMzVfeVRqkTYr6cBvRCEmTRccWBmFCedJG9rLuCuRYuAJjKBRjeWLH2RBB8WDRuUUE665AkA5dPQw",
  "key23": "5m5DBVyfcW2syjeGh6gMY4TeGBqfCpxrvSpQ2VrtMLYzUrYHJb6o5fyZXmQt3TTneTVxMAtHH55Nd5Ydgh9VitqX",
  "key24": "3HdyXhz7Lm21QMq9MNn1gGyZxfTmeBqgj2LeFhLWiHEJyxqH2qabWXsKdLGD1D1SfVSLP44DupnqZzeBMTMNNzb",
  "key25": "bBjyrEiq9a1opUUdspnni9kJ9MZRJ5rbG9NHbN7mc67Z3Sc85WDaGNRQoNJqCmGio2Ku2rWZXNY82yUKyRYTXf6",
  "key26": "4ZmHRP5oWgtg75PFP8MkGcps2wUfk9etmmF8r6QGPuqrHT68NjnCtd4x9EexGChF4PMrLi77b7zrRxWHLRSQN8rr",
  "key27": "45W7mGHiCvnYK4S7gXBCATut1oocv13rVdocZHnP23rGGttHw3hkFMuRYqNqL6qj6zwzT11QjdLQB2WZM9Dgpzuq",
  "key28": "3B2SRYHwaamfSi9a1NasWc5vgyt63FvNoEfPex8pruXDMBatWSD54cpNsSFjmSABtpBBR4bmpMxQrKZmpTFsFfqS",
  "key29": "5c3ysUtychcaVw4sDwB3iMwiuEQzpAZHcdfjGJQe9P1ByUD3MyRUtKzpiiwojProRTDN4i3Q14tPEa5NR55iSNq5",
  "key30": "2u5LsPKJRkdpg72yWmVJQRMMmSEMyA5ZBWrQPaPpj4kzV7Lp2eYxCcsx9c6uuriFq4Mudtg2bw4743boJCDJPMSF"
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
