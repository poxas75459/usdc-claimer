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
    "4PrHX4a4dkiDKrUc5kBcrTMMcfq3R6M8bcy8CLQhji7Z7HuF9mmYfXGhVbscWz3BtEGkKsop53N1rSf6udSGn5Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twYn8qRkLdYCcrKPpY7iQk4EThuC8jvPuatNjG5rdFf6hPrih9aee23qb3fMDuWCdMX2RmhyEc4kh8WxpvWeKhL",
  "key1": "zDLtmhXJrUonrtEydJ1VMt1hG3uZqAUTaUKtieCJYVFYDczKFYSpoXHvF3rCNyWasRp94zbEyr4nDDT3NAkpdCQ",
  "key2": "2t46embXefR5C2KWGAQ38mMKHBUZfzZkpKXrouzADkDf6jj7nTca65XSYTgpEnq3Gj295SwpajWYz7YeEaJE3Q3s",
  "key3": "3AG8ts3yepNWUYZaJ6P2jWfX4guAfuJq7WGWcbxYig2VdG7QNLUiSYSVh4hee6oeExP8hKy4yNHfBtqHzNPevij3",
  "key4": "31iF6wLQohyJQ8fHqpRmAzN9VrurXcajbeMnqHctQ9GrNW2rVgYvafmFQgfPyqBaKAXyaXmwdBMJmTdBecS6qsXB",
  "key5": "3pWUXbL4fosXQE5E4AwXEzfZUGizCFfLthP6MqjmBrCrHmQKWBD6qA6aZSwwwnof9qpcXFsan2N63faYQCC38FVD",
  "key6": "3djaPKt2utmMA49vBf5DpTrhqLC7vPdePnQnZkqwcmqnJYSJJ3etBjrvhasmLicnTLKeDXB5t9ghoixnwui3bpZn",
  "key7": "4sDg3WZwdjBLG2sNgv1VqJP3o3ot7FPas1tLTg2vHNokt3iv5V5Tpvytsa72LciX4HDaKFAdtrzuwyYwEZ5MZ5Da",
  "key8": "5nbk742m2Fqo6fgfrLzQZtDTPWwyBWvtEqkSRCNTooM1kzGCiYopioNtA7xWruzVjbYz5rFtrWE2RjUCKQQ3zfBM",
  "key9": "42jdQCYVQhjbGWjviJSc5UWqWdHyMVfxmFJ4i7QmtnBhUHNjwAaQ8mESNznkdZrSeXgpETt4a5qffEx1xtogC7B1",
  "key10": "3aGMJPUS7Zk7nFwv1cF4BzMDWjnzA4oyRaZ3ZvpUnpH1Wv8vC4nkrAvyCnH7FiS6qxZLxDDQp3WYxfudjgru9Bck",
  "key11": "2AgyeCB3umoSLfp6Jarxoo8ocdXG2osnWHMYVbk7j2jgC8wyaF5pkN7dZMDT93TUHsyZDqEpjLmxAezTAKMrPACB",
  "key12": "5KB8rm77ni491C8r3xKYU5kefkqXexqfJ4SRKbxjiXGpEDpG8UkUyksLxWQ3D92yZygKh3EyG9gDCxDaASQDUcyQ",
  "key13": "5DMd1K4TGuKXrSF5ohmuyjGmwnhgChfh1j3dxzoVDRWVetGfib3fcGqLuqqs73hWreAe3wdEN3AgQBVykU1EX5hR",
  "key14": "5tQoVs129hPvFG9CSeY4zKc6SQRWyDi6WTzrxDuFxAJYrfRvQYL7tQe2x9PDUAy8DSuNP5tSGGjPd1A6ULuKHx1L",
  "key15": "66dtUgdgUSptakh4XxKMqsaXqVq5ttJBqkf4yvTeaeHao8Ss7JrhLHg1FH1gr27UThAVwNqbogRo2tAScZDobGTm",
  "key16": "fVb3rJg2F6URRUYHE1ATxM8BUvu9kmMk6jwVaGAd31hGKvsnTLL2ZpfcCkQDMyPXKoimwgwH9nN6zLr38D28RSW",
  "key17": "3wnxPMfLcq2QcA9CDxaHrTrcuv8XJ3Z6UqsfEQfyFR1FewRkMrPe1zSUVuLeqcRLZ99DJ5p3RXbJ7SCuuNj9LjgU",
  "key18": "5ENkaBTV3fy34TredzNQ8ZpWnTTzvhsgKRoKuWRxucPkazMn9qn6drwkjJDyJsYngojSY9CCyiDRLm5yjThERNng",
  "key19": "6ZkFpiygB7TiEMcTTFvy5JbajnHQo867wJdxUw7GnmyiTbb9ubc3GGjuHJT1S3JCC8AWmj5KxE4ePEdbF51rdTL",
  "key20": "43tNaRuRkq57oNzNyuTtijvyJzAgNvh1Bhzhp5PDEUt5JiU1J79tiwuSai1YvKfTxUdJTF8XNFmQbCr8g6LcffLZ",
  "key21": "4sEnU4BZCZMp4CnEXUSmANBaoPgHFkJkGDhDLczSm1y9ZrbtgM27rmPwEvpf1tkj3ndGK1iDofMQn35Q2GqJrAJY",
  "key22": "26pfUA3smoUA1yFE43BQvBigEzvqVxb5FBME29bUKoCF4kWhciWf6KpgNNH1sbVAfke6i1yDfkyqFcDu8ZEfX3yd",
  "key23": "3fqPn4yBte2mm7StsrvmV2f83YEe7wRTndwopQJeajEiuQFhTLK6Q1Yc2G1PHvFa2wsMT5pxnUxT5DiSq4ERpZzx",
  "key24": "3DvnEbUse4Q5x3Xj2ge53DWmRX6seUWUeEUhiTnWm5tb8MPcYk2ZrCZkkYbw48LYe9oDGDWfQ6AUu2NWEBudoEez",
  "key25": "3ANyihaDnkQPDppzba2G2G94TMGTvBgRyjaWH9uticaJXWTVGDH61FuY2Hyi7QSitunTCJXSiQCwrqmpVvPR8w1R"
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
