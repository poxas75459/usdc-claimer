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
    "54txMoBSgEnX7QnQD8HRvrdCBNEcXkhPw3486CGjBcR46sjkMtNtzR7SBTSDAL9KQLt2PzWDpPMEpn1bfyt9tZnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pu5UPp4pTAywrJjGPPrqhqdtnYM53yVA3yBPwebJgfFZDiWnHrHfJnurs5EDciJWok9X2VFsFkeaphsNcPU4uXN",
  "key1": "WDKMTD28UUPLyweRbB97W93PT2vDpVjw4zJ8s5GULAcnua6963r7Jeey9jTPALBaWLXY4pszV3Zab7dRK8jqwtp",
  "key2": "5ZUph8r7JeduFLhS2UtsrURCb3QTNe5diTQUg1k3dWNQzqQ4wdrKPhU1LGHicimp3KKtF4muHFbSvkNFB7fv6rb3",
  "key3": "4P8eTdGKXBbgzFzqwkjNFSHPxV8qZCcrLgLgZmRWmR3Sm6G5CPBHZcLTht22pSpkqvsxXvwkAwoEPyGxDkWz9p9b",
  "key4": "3fokbMcNNuQX1mUReeNwkva8JGydEuqq1LUC3etXPYCez33TvwAejxKZrvHr9cf4qwjShJocVCdnabMUtoBEmph2",
  "key5": "5MTqzByTGhA8vNtBTP1UTA8zegqb7cBxUT9qZXXd75q7FwPsFyP6SnbjnQeGLBTR7KZmzWGrZhvEHoNBSuF6QknE",
  "key6": "5za9J9zJczLYCparTJZ7U7zUpVKcq5vafQTjMsX3UyGqPFdWVnP7f574Vaek5MaSwQQZ4MnxpMifTbvX4KxQ5Ej",
  "key7": "2TBuC4UxUAN6YSqxWdF6Sc5DmkTrzPC37ZCxidboyGnDEidPnhjbos4nb4qntR2RCKwj4xdajUQQc1JwVsK4Vk9d",
  "key8": "3vHRvLHMMhKyWas9xeV5gakWdjwe2uVaBr3u42rwrXCx3UxFQqaBP4z43ZbN2MDQQyXJbQhUkT4JsSoQZfoexU7Q",
  "key9": "PEUXdZ26q6gdXHrz8BV1r6Xn8nmbbzAqiUri7RiZ5MBoMSgxXBS8NYJR4jBgxhYNaHQaqXCyKLJzfvtj5hoMKjo",
  "key10": "36TEV6iDc973HQLp2pHyFwtZMiJQKQWuegdFEqJdTrof5FvvgexC59Yveamcoi9mCyjtNRK632eVhdJ84bYXS4RF",
  "key11": "4AFcp983Q2N5SVevBYuPKs3euQw6SVdxyvZzQS7aUEkBCknYuy3x87d69tRJGaoGmkUacqgUAgpEUtz5iS5cMGr2",
  "key12": "5AHN1Mf1gJL99PWfxSrK4bq6xfxXugFRL83w6HKijyeErsop42P5k3gDfNRp9U3ZnK1prW8mcN2Y6RTefgfUNXw2",
  "key13": "2BJLewaBHJ2xZyWcbjNYd1ZU4NYA5MR2zQUvrDz31TARmRp8iCYtARZkJAV5a8r85CffT7syxfBiMH4D3MCp64gG",
  "key14": "mQCZTvhp3r9X6z1Uf5Vsx6LhF9998QD4eYEYaLsL2a6oU93tz9E48kTd7Z9BN8JS3Ta5T9cGJVe4Gwf4yaHbbk1",
  "key15": "3YNbn1iwzPv7T4JmwhtaVuffzXZRHmgxxbJqVeNtoBEviZJyd4fvcRRRBs6pHtMCn1286VmLB23ynsXnnJ4LMozC",
  "key16": "55e2ULGH8HcMEjjBiLNGW6jof8AMbFxJRP9KGvXSdbrVPKeC74GTJ1XVTjwrwWStDxRZzmMRtW9XTaa6z75ZXuSN",
  "key17": "3MnSV7N2c2ovQHetoeFrN4JpsnnkjWev6wFDYhBxyojMz5vFSR22pxyK6xnEvDGc6cu1R9brbWe1La9mUEDCs7SJ",
  "key18": "djynjiVZVfA4mqgGq8hYYKpSQgxNuCGAucRNPHjFeLdfVaCEGkXF9ojLNGGdyw9mVwBojhrVDAC3G8ioqKsWXHz",
  "key19": "4fsAgQwbP4W35cF7QQ2n6nWM5X5SxDoamqhvtyDfDpJigxbDwiADCzJfXSvLP1hmqy8tTo382E24gb5kjJ6pXJDE",
  "key20": "5DcoAKQj1zbsPtLxU7bd47bPoAWk33vEDLfRUjN3WAuxDBYtFpK3WofDeV9hnSRtZYwUdHaWD1EffjpE2yxDM8B4",
  "key21": "4HS9Q98Suj1wX6VxssB3SKLD7ms68fDhTnMZ5JQdYRyars4zbsEFDKo85Xw8pjE3CmvQ9NhYTorFHZbEspbHVrq5",
  "key22": "67a8iNoZ4dkY3TqZkeEiXuphZN1zAPokduUAWBbmFttxgyKse6nYXExm3Gm82g5p7UnxixdDXYKxQpMS12imSgV8",
  "key23": "5sbXjrPuhPGpYA8pAuEFYcDwjnC3cMSf9dHNa2XDJubWjQxbZHat9oBfqMsx3y1fAoXawxc4H7ucjmdTPKzzqT5j",
  "key24": "5nHdavAPqSAJZ942PTGf7h5rsgywNPgfW5rkkkpof8RBRDfGCkLvgMojVjobm5TVVss8yt3vqpFushSrrHm16j62",
  "key25": "21SBSTMzMUZHrRzEFF99L3rhkyaii3cBSo1gFyezDBrTVXaaCD3MBvPGTdcNDPh3XLLLrioSWV4k65BzFYhuKxGM",
  "key26": "58s1q3nagWd1nPidAPgzpzEN2iBmZ3w9LM6rvbuMUMB41kiHKeqjWYGfuELj81BeVVUSzEsK2wpHsARzX3omq4zN"
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
