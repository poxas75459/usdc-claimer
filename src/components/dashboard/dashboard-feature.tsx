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
    "3f2yQkKrWgMBhGo3YuJqKmmbaqLDiSo2bQ45bqBkqXP7hG8374Knu86K68PGJpsQahaq354Bdmxk2ZdnRX1QNXU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwAjhdEWhyiFGte6rhhNUy4Fm4X3dEsvr6CLgcWqwA77m9RWjgRa33F8fCAaH6A7DR9GJSX5kojQvnxunh4orGs",
  "key1": "2NKEcdJgNkj76BEhSK1wukHmpoA8t2MQ8xNg8XejJ4Yhe3ut9MXUsrJkjn9UTx2u9DHDR6Dh6FZMbfgPfJ4zAGyE",
  "key2": "2doHfcjcbo3Q8d5ptgkChtXDrCuncXWFoorFkNMhEn3MoJjo1g6noaBvFQaYfzwav8vQMdfpFH9YopFNd3KHjX86",
  "key3": "5T85u9jJVbMdMcxeffHZjFM93S8ygB4csGzCZYeTMwavqCsLhyMQxQY5khFj8P8nYaeeVMirHvWxKWYXmAqQ9FVc",
  "key4": "36YLokzFCVatovTG97bvEW8mFQYN6yLeQMnypTku35kY5tfrwiPfTMDYavUMMXXEQCQHiyWHyVfFAi2af4icRST3",
  "key5": "5ruMVyAXUCQzjjrCncrbDFQeJ9xvuDryw4JBeHhkeWL6n9wRahE6U9tGp95Gtm1j3Jzaa3YNbCExoteAoM9FVMNL",
  "key6": "Zo85UMabnqsZRWMSL1X2hpVHF3szCoYg1Q18YQykaZdbPDKDpwH9KEsHCxNRfQd1vG5VaUcXQAvj6CySGhfQNXT",
  "key7": "4XAmfVKe5n3bwgoK9w3GAHMFMNDH5B9beto1VFYuTcEmxfUWqefvGiMsg8kQoAFKyJGE2cmJQoH1isJ9ZymZa2va",
  "key8": "2eFhprwCcwX4vK3L4soeUiKLJ5FjCRfNSVEKrmjc7N4AEMixaBS2ffJ8aKRNuXWDQKq5W2V19J17yFxy4WUACGNV",
  "key9": "3hb3vR8gLFVxQSDZtof32wpAQL9JaS8fD3ATAmQFNFwM62Jg1JC9EKAmZTBPookshswcC7uHpugYVoMEtWpJtK4X",
  "key10": "Py5m1pSDcTWGmJ5GNPA9jQDmg7thGiGzjL1JP1LV4ehkSxvyTZykndX9Yr5wRBVY2iD2n8LSAHUDa3N4wRZdbJD",
  "key11": "5GNJCAo2r5CuixcZ2L9LCBPi7z7y1Q3Dpcddzm2FfLX5Sp1bYDhfvPsj6nqnakeqXQ83aEyzKEYj5W3AX6k94bkR",
  "key12": "AqykaFTXYAvyxfxLJofGU7g4ZkuRNVwpNB8sgChEdqtsxHPTWZ2du4WNA1gLx2XwSWibSMmnAfuyMPdVxMMSiGa",
  "key13": "2uQGRp19TE9NQQSW7AN4SPHRfE65dH8r3v8fwzhqQAhNJ7rZ2SoDm4EAkztxRyy8VDFTs28pgWcLUhivXHvdqeTX",
  "key14": "4zxexK6reuENNyuTJqjtcUonMdr7t157bN3VBazBFrGiLuDi5JBc1zow7AYAGBQYC4f2hDBGaeDGt7A8J8QnyFEM",
  "key15": "tPKpaD3xCyEqRMZ2kiPX5nu3QqyWdu3Xc3g2SWyXsCbA7f5GLZexDhGACQWhGskW2Mx8N8AF9oz4sNAmc6rQMxe",
  "key16": "5TmzD187W9G4J8AX4Ms3EkQ727McdsX6CoFkhamd4FxBexc4NSfT7T4tLPt91ZaZLAmktfYPZFgXkRTCYFoXHp1G",
  "key17": "3bmsDNs8V1fRq4pgfmCyBWXUXfKpksA5NJ7DSstDZkRcxdJEwoVtWWkRMqqYYwqChPWNBfQCG7DoMHzjzC1GfQCm",
  "key18": "2cybvaXSKPQ6JvU4m5puHS16cwSnXEuUXWBNudaWWpMjvzga8p1V6NSpDRAiA8Jk736unnu4bUU3kFoZgR896t8r",
  "key19": "21vh4bMBxbU9bZw7VEumRjFfi7AsSuB7HocLteKhSKFC2aMpZWmFvTBW8RS3MeSTEXqUGHj4kra2LdwnYo1AYeds",
  "key20": "36jEEExq8DTADJ8ZbLBFXGrevH5c7W3cDzAxhQGbJ1XjPeF5f4zPbixVpDXy4sKCHecj43KZz6fph14pam4HyTWp",
  "key21": "5DLyfEojKXKgF5XWVneu1KeMYSv8kVLRqtJMvAdgEntCR9Skz7Mhq7CuCZbH5HZvNAVg1T2qPFg6RidGG6L7uyVq",
  "key22": "5kCG6pZNXZXdvF9co763Jebu62iFJf7dpPzgKVTo6VVRNj9Q7fFQfNAuWWLEJ9PRn2g67TieeWLZLAMKoakSLiRw",
  "key23": "2f16ZJy9D8E3fAPe6DLoxDTr7wmv27SCff3RCGCApm5C6EDKyCPvx43CYVex2SNQbWqWTHYoTZp7MgWT1JuFx1NT",
  "key24": "664i7FezGgXVqXLojaFPLWoh71LJb7vgZqbWTVj2JGuWKHwHG8HvfnoGPeVL5jZUWCMowAvR1TPEZpfXzYHjCtef",
  "key25": "2v5beVQt7xXPqbyxX7dC4sL4Cxtu2XWgQuUo5qd4UHBGdMxYqwzyTKRk12CD5bkPwohjW4iziGU7HYRe1VNEEgrR",
  "key26": "FbJGTQCFkgXwUKBnXtQfitxQasMhs8pGmzNVXpCbqJ94XNXuBRydjYYFCfRZbLcPUJ99cvm1s3f93HtNegksYpR",
  "key27": "5iAToAVSo5H9sEHXW7E2JmQcnvdtXdNQAUUs4dkMQfvpEXvekfEFkADZwRJng6ak5Z1RKxsUoPGhHasapAyEko7R",
  "key28": "4ebGkt1bwL8e8bDaBpzoSZy9KB35h4xTgQKjX9ipigCB4yMeP73A1yLvwXdHsEzWGW23vJYsbDDSBQcbm4sMyzTg",
  "key29": "51wcwLeFamEbfN4uk39g1aMKnorJQk41z6AiCJ3tqLxkcdPYP8B38AcV2hH1x9jf8JanrDJr91ehaZYVD4TJgntu",
  "key30": "2h73FMsop5JsFHV3u3AxaxgURcNeWzYEEQNEnYPt6wv5F67q7fhEk6gdZaZrT6WJfKiTfHHxcvnojRw6EC1C6gLa",
  "key31": "5Ac9WsFSJzCNHq6onyxdNqtjLA34Ux3kvCYSdvJcsuM9DaUemavs53Wx3jWg2GXsWjocmmBaeaVbonAe9hCko7wE",
  "key32": "2Diucr1U7bitM8rRro5cR2vD6WUfkGM2aBN4sR5bKW2Xkiv3Kp1ydqD4ZXj8rhHHzG9ZWP4NTYb3xbWa28fWr2FR",
  "key33": "4m5FR7rzV3Hs7podLFbs5J4jJUYcHJbBE3Dj1e7wiLeDV8xN824iTF4PEAgSmyom4ffemJAtmzwsYuGWxQo6kMVC",
  "key34": "35gwojGEZYwYQbXvqc3pNheoZ2tS17GTk55cBjx5uZEMQR13upHTE1zqCizBaGXzs3dNRSEqGnjQrxhYNt7rB5SK",
  "key35": "5GdRx6BjabQF43qrosVKJLbao3A3eBiBRU9ymisDuY6F4ojEbLHw2XZYxugCB19q3RQwhR9Sg7m2VJ6g32UUghJF",
  "key36": "2HFXZRx2si42kYeu1p98D26KTDmoQrMUsBrntxG4ojEyf8GkERsnp5RGUaFrzjkHwh2dBNmJ9176aQsNmYRDdSqg",
  "key37": "31cFLpAU1NNhqh1dBkQgX7qnevaZUUGAZebrC4xLkJpTGgmS7x2rRuFVRPMPpy5PMYZaDkrKGEDUxWFYaMvsThn"
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
