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
    "3NXWhr91uVtLfzEHEhLN3CRpxQ6zKx3hSgWRsG9tSkMeYA6pvigGunyaCEWsXWE7REjjVVJ4roo9fFXL5zX2k8BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBvTbEPiBejDmRe2G5aWRF95gi5xSdKGeGSJVg7tpEg5S3SYdAQ7nfPb5PX8kkg6i2TN49XgW7hnJi6zXK8pK6h",
  "key1": "5f8XSjodCJDxMvyeCPGtRKyLbmmmjdDxR1Vvp2Q5Eg1yrT3ny5yG2438yMGrEHEc3NnsrjGRJh9cHzdxQkpHLmnu",
  "key2": "4vzGsu9qfjDNmo7Xjtvzvm1T8u2H3XKh2gk93dHKjG5YQ6fNEG96LNXDFi565hH5tiB9VzoJorg1KEbpytRpJCwK",
  "key3": "4QE28ygK5e8yfFZ49cDvpQ6MjsLF8BYADbjJwg1a8kbdfD7fYMcZgTWuVFP13b1anNxDoC6Tvh116CUHixRWJ9V3",
  "key4": "4VCHagQ2ySPTtZfZuXC6dMN6FuzArPW3EZoxFmNrBhJgBrizmFm6Wtvo5H38uKLm2k4n24gj87sq8aThQhbfz5oo",
  "key5": "5rBKKh5rTAgSdsfQ6rhhjyFNo3cc674KKXXwscKTQ32sKnRNCeZVV5oRTmyX82xwfn8KTSpLzzov6A3MbDz2Jtia",
  "key6": "4JH3doMvs7HGBszQN1HhBFc6LHA4ufLMbSGu1iRdoMQa9oZLLot323YRG6sSZqStazV1px16NTkd3HaxHYPKcj8n",
  "key7": "3WyNACBRJFNfj8fCsjvzW3LZ8kiBTfQLbPGei7ypFpSMVF3DRxgrVZx9cMWtwBf9BTkFabx1dy6ZXRtuQyAZtE6A",
  "key8": "4Eo4mq3boefsL7NBQPH3Q9PBd6Ex5W7F66GZbYr2oC5krkDZwLp8bjrexs1EqpE46duiXEiWgvAbTUGQXNGx9Nqi",
  "key9": "2hBDQiTqs8FqG8rFKH7Fq9KPAY3RuXkYLsjg61ZZvapi3oTFJxXzeoaDA4RJbeApEJ6ercFR8GWp9RkqXTYaiYxt",
  "key10": "4J6oXx9FoZ8zVmEUEQs2fGDooY5mdvdinuTWZGWygBAvupnXqB16MWW6KGnPbiAQeMb7i7qQrqgSgwqB8PrNmt3q",
  "key11": "qfrdjKePQpuALKccpPiX5E2aT79py6o5erry5Vzxe65V4Nt1YRkMAN85PMUCVcQ5HkZDqzUpGSkFuKXvWEQmraC",
  "key12": "3A3WrZbQbV28qVZBBQMjYi6tVfBJJRLLYftDuyA5qMVshmoSNFLNkncSXCgenVyrGLtBiNLstkKjN4zuiF9bdMNy",
  "key13": "2AutW35C821p5dboCRMN4ab4XGF9BDdN9thRvsAYiY6m2k98YxP8i6Gs9VFbhvf9jrwJZ9QjooJBu13WyyFzgM1q",
  "key14": "3KmjVAo3XTBe5k9Uuk4sFuPMcB2ibinSnHT79RGY9WETGdG6MZPmgpJyzPejb1H779LvLpekXPCjWRtiAUY9y3wT",
  "key15": "3ciA4XyYkKM9PwHC7q46rKMKZoiTGaChvg922StNxPkhJHCfd8keJYkn2SPmeaKcSeCc6UaAcBDrBimB3BBpTKmr",
  "key16": "4ma1sFFpPDGxHdHGfnNEALSWXBMPiq6wjuRXy8RMsuudtUDP99UcREWFWvRzHRCH2eH5YNXJDUSSm7WSygBJUq82",
  "key17": "5d5eyQGVTwmuQXb5hWVk3qsvs9pHKEKPmvqmdFduyGMatUuiwqntULNAiBQFyC1Se6GVi6h9eJ3vPAUKzbZAHnmg",
  "key18": "5SHPQusLXbwBAuSAVmc9fqDRrVaA4bNrBJryHvSa7cxixDEY2PNPvvkRMzC9iEfEwnxChEA6G5JYABR2WmSAbQBQ",
  "key19": "3NCk9oMBWuQiM6fRd1eBADWAmMHisMNFCckbJ8oXbZfoNu5eRzTho4uP7vnXfSGCE6Q6xmbi2P2H8456aNWcCyMD",
  "key20": "28aCy1C6Sqyvs3ywXAwQNrNPo5F827X96T89vaGqHxhUsT5oK2BvqnjTpmC8q2MLdho5wiVjwK66SPKvCRKEBJvy",
  "key21": "282G7sabSXAhSaCe7dDc3rHrHHBDhSdxLoYSz2H6oPUSZbhgQypWQ82Wh4NASrCmc38Ji3A6D8cxs6NzAsBnwnS3",
  "key22": "33ea7vs5afNt54ukm4gmXcW4yDYbXaYSexg2noqkstVpMn7LwKQxwA4rTwb4Ryhs9EXrLeQEpwMhtRZmVuT9MUAr",
  "key23": "3iYq4kJR4xJueVvTQheWzAqcJkJ2Gmoaoq86svL2RTkNax1Xkh6KMYjy7haUuxGFXwyhEfwe8JCyHC6nSfsAjkWk",
  "key24": "3A8ZwLSBfQT4PX4qNzcWY9pnpsaHms92ZNSpkKstHYRCPVpptcvoASCBggKipRSE2tSuAwKSPdtJihy6zkoHkX5z",
  "key25": "3HpSRzemXzDZMSQxJzgw6daDC9HkTVoDmjGMeJCX5R1gRbe3aib2jZKWfsocAfujhUJYLEooYFwBMMQaGKYKmJNj",
  "key26": "21qTBn27jKeFrk8WhwTXUFZixFGYSp6aCpR7uatAphjJyiP2xRnPdJTgNGnAjeSZLTGb9UVn3pUxJXNHZ83skAS3",
  "key27": "4yJyYN4EgWxyQZishATQhbK39zHkYj3fwX25Ahc7srhCWhJfbVEiFMRsXJ6Mno4ukZ6Trzp2tqdsZ2nbjggLBaUE",
  "key28": "vztDBmyupoRdWGsXVFGhMzfoCtKh6tnXGzJ3QC1AeVivBi8fJLpvhjAefdWU2cVt3WXvBo1vDMEcPPhueytBUYs",
  "key29": "2rdHLpwWSpQGgig8Ge6vL4CgB2xiiYy3DUwAyqs7A62KJd5891Lf6AF8VpLox6puC5GH89RDumdpyKjz3Jp1CnwX",
  "key30": "JnGgyL1q8YgN3Vnupxd4DZGmSzxZvPYfhKrVPXZMAA421S8qhS4e7fKqiQzXq6xzpQx1jEwBdvtT8B3hrFwcYXN",
  "key31": "23wPY1QdUrf3auLxL8MeB9TwDQjNaGCwfsvw8WvdhwGUmtDuyxFYrFA5wv2fnE8m9EmYAsDgj4TA4QWuKPC2vQx2",
  "key32": "352cmhFP4wkRAkdXqJe355fi2r6JmAhWw5Ne7gypWvAA8FHjhmWiiaPwFobuE8bRPv3omduWkdiiYHciu4S8xC38",
  "key33": "3BrSBig7xqLPRh9EzEcVs6uBdqZJLn1Tox8qGHPff4mEvA31ce6RudRiyjTkMBvKomHbc3MJuZhJAh4cyM9VUrZ3",
  "key34": "3pSLTyJqBQNXEzHtaR2H8ci7exfrkrKZn6w2ffv66fFuEMNC5ixTofgGk6Gnj791m2YKNnhYQVnNVttjgu4aq5q7",
  "key35": "2bcm9D1BUzD2LWd2nYrP9AxxCByZJnMchJYzwtRt2C7yGz8EwSG9aC6Q3icZvZU7gHnEGEyjWT9MkKYWtD7pSCtZ",
  "key36": "37EkZ6RsdJQr8t1csPkhdBTX2eSN1h21c4QbPSqYFxpMV1BDPM1TMDwvavet5osHgnj9JuoTgw3UdpeQdHKuJ66v",
  "key37": "oBjZYqmpbdGUd37cEdWymwbrjehHekMznZ3NMqsD2YdK8wkf44Joq3XfHG8oS8rfNWLKFiLGAmaS4iEm38k6qdM",
  "key38": "3ZuYScmcQvtZkRTq8duyVcJNewn9bWzpoo8CPw5Nk23fRtCdTCj19JtqtA7CBjs5aGqWRxKThDAyssPeEMsY1Ltw",
  "key39": "3DZrTppunPmYvTJhDcHUR9VVGqyrmHmcYK73GgbL19SEch2ULS4svUbUAfvSUFGGNbjuvFjxtS3fQpprWarTCHCC",
  "key40": "2tkqeuxNANg1yCawEEVL8Ahpa97ZtMHbs1PkhWHRhwKweyzmdppywewQkgzKTA751Qkd5s1jcbmQzoj3p9c21Chb",
  "key41": "4aHigW2wDdFu9SmZvNkjFSxNBxLRhrTiP7f5Wwn8TESYP8KmynfxpUnz8Cae68oRo4S7qv7gVst7sQLqd4EVVfGU",
  "key42": "2mJgj6bwdab5ZPMwMJzcJhbo4BrBrR93emQ7Cqbe5znApX2XStB4rSnPduKpcKvZWSoAZya73U8m8jWkivpxF1Ag"
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
