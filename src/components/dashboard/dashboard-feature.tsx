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
    "4Wc4azkXR6AtuLZffy9QysWHm6KdpV8aFGTWzM6pJ51Vfwyw2LAxoxo8JsD6P4cKGgJHmb4tYV89tvynm2Qrb3wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvAq2m6jDMsxnSkRYRFqLQqX98sr4pbfwa9Q6YrJgCw27xdFfaXbP8PgjaYFT1S2hGKWA99GFsVibZEqb5h8mLo",
  "key1": "2kz2WGJN48rcJQoWwEyH5PSw8FydnKeZS1AWtBupRKEygYs6TH5ix3jPpAdRzUFGzBT6i3uW56NQiJgFJr3bxPyg",
  "key2": "2ZHVKySrGEtuAokTh3vG4ny9S8hDJxzuQK73QWMwzQypqCA1ALTGhkt7DmngFaSH7m27JpLv6to6Tsz7VCXPTVUy",
  "key3": "3MZBaoci3wBNVEF4cEC2nQjuLVv7RfRYjBPHLLrfCoDzmEC9zMc4Pd1sRLNaGKPJ5FL2rkeioE7mxajkoy4K4wD6",
  "key4": "qeoMDKgsdTk7DgtStGvysxnYNvjN9Gry6ZzwqAqjNqeto7VQc2wniuSg2yuJwsCHXQqJVrLCTG1XvCtk3LhQmHy",
  "key5": "5A3yG957AsdzStwsnCoLW3TziPovcqbztCjguazk63iq7y4VWqcHvydLcK9YtTqmZQBmJpUvJbbTPqZnxWjg3qRX",
  "key6": "4wi8diVvQVSnwNVURTQW2D5A1rzxgPH62sJF4Y9sjs3uk3rNznt8PezV82t6WvXye4xuXLDg1u8TbMiGTCya72C5",
  "key7": "2wAdujGNZ2KBUCj4HY5XqhVk357wDFrcuMiwDZfz5ziucCxGNMXxAHgKSGpAE54GT7gzsHRWQJivruhPvAjjFbhQ",
  "key8": "M4ujnMHxcKVdQj8qZwhfxM8LueHk9JWy2sDwY4ya9APjJaF9JSEH4yw84UZw2D4M9ECNMdX1r7LE7M5tjxRLzms",
  "key9": "29EoVsxavgavZQpJgQR9g9MGkKSQjwwjdziV7e2fWFJBSuQHVTZqMs2QchfLF15oiXuYmiWvQP77zfvYvaifctKk",
  "key10": "5VdzJaN6N9FZiT8FesmzGZZPaBypnZamd1CR5626HbkaaVPx9ukSmxrT48fG9omfj1rrtBZZP6au9DXucXjCSuzi",
  "key11": "g6W7zydrfNFJzQbXQCQSfCwDY63EZnD45WKnhdh8Y8SNSYoH9h4CDALcAKRMGG2oH6yakJrtX3ynGDufAx4XF69",
  "key12": "4oebgsLJcfVgP6MEwwCEAPfF8M5vios8hJu2DVH8ijCuZQh9TLD9jVVwc2cHL6PztdW97d5nhHdW5LXF3vf81jjT",
  "key13": "5SwEQptuniFDVDevuLA1mHXcmC9mVY1X3zUuM1v8hhci9v1xsDKPKq4pP2EbJVVjdg6XmaqbUCmb5Aq1CMnmvMxK",
  "key14": "4FF8Knc7KUx2VKByJrLZoERwFFNgtcMTQrRLJgNVCLQNdsnxn4Cuw5GVqG7Z8bbiEXxWLkewSQfC4M9oh9FwUsiS",
  "key15": "tLva1jptum8fnLHRz3dpvw6mFKm42Hwdd5mzKQKZm2YwD2YGAQALaYcigFtW1UbxmzzVBii9TD2b5iCgeqBVxdu",
  "key16": "29xbzESANT1yHjs9S9sin1WPm6ooH8kGMfSRNd8YTbR4mzgDakZtN1N4tHP2caiyns1nnjNDTRV2Gy8BLGBNZ8oR",
  "key17": "3QiLPvQW3SDVRmUHR1SSeF96e3phsTSWiR9fDVmg1xzmqGDH2RJW1KtJpoD79av5UAowiL6ByW8A9Q2APa1kk34a",
  "key18": "4F18BpRx1J8nCdXMir5ruC1r68ebo1kn2sVfu9TdkA1X96EVs5284fS6H4nY78w3d121CtNbhF3ZJP566Gr2dD4Z",
  "key19": "2kwKfT1pZ7qYWF2ELrB7X51EwFv55XPqr8tvWUKLkaiudai4dYFrN1LTU4o7M5V2dwRdyfws6xBGQ9aFUDZ7e9ae",
  "key20": "4zF6PfLKfEt1hUf32uhpakRA5bzuAR2heyrpqr9TVbCVPBz5Kk3cCqWs4QMWoohmPHuvxAK4CVTamYxn9HuXXaeX",
  "key21": "33EXJY9uViCt3Hk7qa6AmMqYXzgL5QJBkGAXQNjsWxgnBCnAuUVJYLB3xbKLo58KNaLdW5Ar5359KmzSecoZz13Q",
  "key22": "4wjqSBnZLXBhZmY82BLv7jiVLpu9UNFKxNPxBPbSUYd3cZbigVhxngmEqCZyRcHESdd7kRr1wKfEDJc2FbHSGzHF",
  "key23": "22eB8qkdxn3x4yNmGwNNoPMYasJFjjSdf2eHjmspkExcTaVVbDEBD62AGMk9Sz2co4f6unvPjEi2uiR7ESRyUZZe",
  "key24": "ma3tZqrKELVuz64MxNsh851XvEat8osm9ADC6XTGXzi1PVy5CfGkoSwgRyg8D6hwNo5h7CEjbGrwu2XrBmDDJs7",
  "key25": "35tFg3w5H2KLNtcpktF73cCYooGuuNrnP9GTxnYE4j27ZwYmaRZMRYZRam1eX7ZBZ21XPs81S4DCnLuGhogatXDz",
  "key26": "4WusVocfwiF4xJtLfup7qWH1NppWx8PeiEJjCZxyDxcR6oh4kvbTVHxpTfLfxgmeWSquBRrAM378Vc2iUfcbRSsh",
  "key27": "2qchjYb6tEHvcJmRZjTC1xFduDu5QzGjpUbuhchTJtdLaAijnxWLJH3qDjSXY7juN9rJVW27eXd44Njvw9PKJZuz",
  "key28": "31z8mifMLN5hXNDVDHgfiqGJr4YbD53xZ3Jf1CtRQs51a4RZvZuJdyBiDKibocneUmgDbw2Nn9DVhKTx9vwZaqbA",
  "key29": "5EMV9AdreNjkNBbvmmd8TqTnGM7LfmsVKEKREBC3rYFfnG1MQJp5cUier16o4dkev8euNZ2zmEnQJdzbrwWmNWPK",
  "key30": "4N2TpR8CVt4oUSoU9Dff6cKCYRUeRM8qCvKoB6scXjTo1nhiHNrCLJtkb2LAmeQ1X8z8HJjYY9fsqDLCsVmnr4WE",
  "key31": "2BmhHmT4K2kicCrFT2rXdcK5PEjPFLyNJWR7fo7coJFrqtZFC2rwQfZ3st4n9fUmowi9XX6tB3ZKAycuiMmKdibk"
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
