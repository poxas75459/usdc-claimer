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
    "5EqogeB3QBoMvkPk7n42Vrr71oV6MCcyZxjnNmKqhkpT3CQVcywuXRQPm1fE95XFwi3EyPUpJeyU2WPToH3t6hB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nbNFrPNWXxFwkq89ZVgMBK2GsBPUPNERGLB4FASxFY7z4sQ1Kfig2PZ4HvXs7uLRJWvXCGfwrRXJ4HfaFjwoN7",
  "key1": "2m1TyikA6yY5cBn1DHGx3f2pdz2pPUGtyojMVcFoVtjKk43Vz1E6fEWw6V7tFxzaNbU6TgwMW9h4vMoNHFxUMgtH",
  "key2": "3YvnjgYqms9Bvy138WbbcFWZcix3Ut2RCwnnqetvcqLu2T2C2bM1TsYysamxCBKupA8Jm8mwmTpqdHz1418ANnmn",
  "key3": "5KXEkKrGoPwef7DZifuRCXzrHgtWUe39XVS3uUnFWdWiqrx6oZNgrgnmcrGprBSSYF21f12Aq4aKN417MRB5fpLK",
  "key4": "34mpdjqr5H7ykycR69NsMLDfZh663T5KE6CGgNWwmYJtbN7tm5kJudc8CsZVQAYGtEhtpa5tmbA9k3A4YdRRixtU",
  "key5": "61NoMwpbyFa8JjHPtEc7SHekDVDh3Hu67WRn3dhyrbaJEtbVFRQ9XDsFrtUtvcUDN21hRKeyBKhTThojKaTmdkJZ",
  "key6": "5jo7Hwq41bxRDBgeF1gVtZ3CoGxLPH47PckRNoma6qSsXPC1d9bdELYtkjAYkNSfCCf8aNM3vkrGWfHh54Pia4mE",
  "key7": "2TPtiPpAfBpu38YJghvdaLLg9EEa9BMoadJbqSwm82UMfYkNetAs3U6Lv6Jb23qMkXEgeaM1W2kVB2VSV1qjExE4",
  "key8": "5fPv3bZN1FrQx5WMqNurJbYZDYraTMBK36vDwTKrKeDS5XGbDHkGRC3vRxna4RjN687c2Ypkhwp9ixUpN6BvwuMT",
  "key9": "2gQab63UuZZqQLGARyw5dNRxS1oBM757dETQ4EqpQmk4ReBeqCLfCSXkwRrwSB7wBPP4LWEuRcXj5aHQGX6xKHMo",
  "key10": "3oBD2xDeYvxuH8hgd6hUSfgVFh6Lqabt3CJS4Pon32cFqv4EtrpBAZoQJGtY7CVv9ACmJdzuKUuxMEznWjQQzQZB",
  "key11": "5NnF1pvjygbxtWFmKvmVqQekz1CT8LUCTRQV7sWZxv6vNrJXsKSBc5mzssyDK4Nt4qQmakAGkMZRtq2qep6RU3H1",
  "key12": "46PBSZ6n7ZEL7UJEUUniqTsybKcCbt2xM3rBk69nuPfEUrxKhfbJfpMey1teBmveaSseM42nWaXe4hH8wvjDg5J4",
  "key13": "J4izhjJ5J7dv8JaQ9o5SSsFYdqnBAHkQvHuWufWKUxFp1LyYg22ExudYtREypoqGK1BtmW8TEXnyg4mzspqQpBA",
  "key14": "4aZ4YLcZKcinnbU63u3CGeyMT7S43zFBbpReEG9Ambsnf3gYonwyCKzmKtqqYH8zdsasqinxtvvXFgrS9pBRHkm4",
  "key15": "66amTuF8aMhEcyWvFF84eaPvnFYpMgCKuokPNSN1W5jv8P1ipPiHnRZ2toVcCrpRXB5o8iqWFnHxoZmXjfc74gAo",
  "key16": "3C9rQBb3nBZv8RWfC12VQxd3nWniFMGKbJXVsWmbskSDQU5TKyVn9dgKuPRw8jk64mt4xYiaUDNY14Q5BZW79nbq",
  "key17": "2aGJ6gVXAEZe78ZSsrGy5XRbcm4sEk91eWxPHNB6gSUzLxTjcXejRwdAj1PFfh7ZPXNGXPDHkTEBfGJopWxWojMg",
  "key18": "2vuXcsyE4o1R3aVfwsTqYsMUtBDw5GTvZfKKQz54YFEbqjZDMbj2gcbNzfpMjC9DuewNaH4vm3yAVRhsioqpU6QN",
  "key19": "3E3kU1ff2XwidXX21hxFEXB9Qj5khpKC3PKy7n12HAUAPm3ThsaMcDqCYJdGZzzdfETPVd6KrbytM7HxL5NG8goL",
  "key20": "4t5o7cScRbYXsoLvX5pKH8jHcebxyj1DD4xdQW7bBCfCe1v23efvF5YexwaSTrAXv8y6TDoLe2wsM5pC9Mygjb37",
  "key21": "58rzQAippfq6vXxpd7CALeWtBbbnoPmxmLrzC7qefoioL9rJm2RfztmwkMCeDjiLkRyDAwfLCFEx6Y9k5f3bjBEe",
  "key22": "hePzuJx7ENdpWyhSYsVq6nfqZxsybWhCG4FpRG8cgZHxgGLfHFvgtdYCA3JmX683x2a3VocRLzRAs38jAcVEncC",
  "key23": "1kgyxbaY6j1NgY2HvWU9qkTvXzC6mzvUPSkCUAkTZckZcZ6KYPKHmubqcjq7cn12ts6SMZdtprbXYB1NUy3BuR2",
  "key24": "43Cr1UfJC49qBdxLamrDvowMNixSzms4r9n47vnXNHXxXih2m2LzUNF5Y3LyGcnQ6dwoBAxbiJy4TY5SMYnJcjZ7",
  "key25": "3GPY6aUcPHqL8FKVq3pZ3bmiArkEPiU5RzbyEnkoCiPT3SFS3Szdwi733xjK1pSxfFjXWMxvDNwgvjAfuTR3H7h",
  "key26": "52vhURFUcKJckxQcsWw22of2j6Vk97jzaHSCyDJiNraVrohcQdTozrsL9xhrp4oBJVTQiw4JpdVAtbh2UqAPxV9h",
  "key27": "GSbJZAf5e3kVSb2VnhtJoGtXqX4WuBE96E9PfZa5AtLBm9ZZn2VHR1ZHt4ZpQ1CzMpwBeH95m4KzHVXfMN1Xr3B",
  "key28": "49JBq8LCYBRz8DZhRKnnjuYwpYrgNyRmfhN7tVcSQJ3Lzk6Kyoabpz5u1Na7GEtdDYQCiNjHspj8HsE8wcE6sRaU",
  "key29": "2SMpPj3zYRRNbfHxW485y9MPmLSSkg6PLzFaC5KjMLspbg4hrc5LfWh4nZoDLJmmaGRC5Md6SDM7dsH6xKGbgBsB",
  "key30": "3h3jQEXfcX13hgPytdV6JkkU7qsqnduLL3sNEpwMAHDvwoKZy12dztbubUHQr4gNmT1ENA4wtNixcgoANfZNjsJf",
  "key31": "5feLFK2eE5AQyFr3ghMxk8pMXcT92iSYWoAwGNEEUJhN21sKmo6zG44zdsmnSj8QMwMi2BXPW6vfWj1nSpLTK5HH",
  "key32": "61Rjr9XedC2DHXHypqwDsPwroCVtqH4S4FTxSGqpN44aweZeqPkgyqv5KKu3qTMa3ixqMisikwpUSkpFoQDVdzE3",
  "key33": "59gdtXq9Wke8HRxR4rLf5K6GxVUb28rrFeKhQSRKCErXPbULTSrTic3ZbpofYWKHfJ1X8f1DXtwY6WViZ8wgdR8V",
  "key34": "3NziG4Vfcmiix3NK1S1rrhKEADGg2n5hZ4qtsRcq7RhFdjHZMnW6FT91rpzS16ukvknwmZUgH9t2QCfnF2n21hCd",
  "key35": "4AXB9qyopEfQDfWnHa7YhnMUukDhYSmaXHepAyeyEe97SHA18aX4As4yYrJPCfbBWhFz11bkNUg9ib7DphqpfitS",
  "key36": "4hiJHqMMVcraKhrg1i9G9xZJ3kDpjAeJhPDwZQw7AwyWCLhQ5vGuburz2wmp5vDxVmBELjCzHLYt8cifZf5zcSqb"
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
