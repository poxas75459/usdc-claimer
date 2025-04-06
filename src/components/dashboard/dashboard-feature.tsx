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
    "nMnkSK6SE8JTpJAZGf92UJcLjw5TXzQZ1whN3y51saT5edH3k3MEPPvs7jcZZvFrK7eZaCxEJgtyBnJE1HXxZiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSiXJcStC6cL3aM6Fb8mtByGwKuNbqV9UboV8k1no2hgUd2dmLDX6SBzFGKDM3poDfYk6QQ1rBpySYXtBF2JeGa",
  "key1": "FVaEVBkcUHPw6FcLZdo3aDR6QbaqL9ncYVff5CMxC5pGrcQ5txoaxbHHDSqqJMhbhKi3oJcesCn1MRdmMKj8LmU",
  "key2": "22iuRzmJ2XhtBVcjyFR415nWa3A9UvS5yTXFmSn4mJDDvYup3h2e87GHKmGtJfLPSRJ2rc2qFyVTqdjd8tR7iVMA",
  "key3": "4rAtKGrWQr7e4uqmvRBsuaevutGDgPjt27HYNJZEq2rP4W853Z7PfVz1ERDAGwNBk1XekvAdowk982jf2YzkVfLd",
  "key4": "3d6RkBXLiyf5QsULLrnVmjGDENbSApjGHUPAHmLfZZQa7H37j3GuZKGSdfuGYmeUaeZCKoM3WN3GAvCSZCF7SVBU",
  "key5": "2gfghqLurucBKQnFDE596zqkeh9Dk2TeY8QzKPHsbseiZWDvPaGExo6fauwdGUv4L5kmVoRREfTYMShyw9Jgychc",
  "key6": "4wXbRfeP1NwjB2XVyJsEf6YM3YGck8CfjcXy6znLNpGLS19UASK9AqzPiKZrbenACA9dZMqG8tA9otbr4V1UfBAg",
  "key7": "5sgkexbeCnprTKWfgaBoDAuQVfodkuZ3nmuNaoALUQBMR2MK5nVm1r1DKcFagjVfmEa3FZkyQ9ZBnev8HHLYg47U",
  "key8": "3udykHVk1UyZvcPghPZFEfxt1kFMci5nJ9Eb3pWUPnwccoE2qdMENzky7zBa39fGhgAw7txhdzGfSdQ8Hq7mbe3J",
  "key9": "5nXmvSujZT2smGHZRTYrMYmmVhr22yq4SZRiYBudezzRttqb1CDqroiKmezH2UqmYMp7GrAebNbyLuzqFotYmtyz",
  "key10": "4t6P3VVV95iMqcfP4cvUnEPcXjKqb6WtvYgpChR5A6NcrPaLcQW1DHSxKc4HWncpGSqwwmr4yu4i2SV52EBeoqzW",
  "key11": "79b42PXh18uoXk1ea3uSRXGdqufyWw8VfaCprAaz7gAw7VJvgALNbdESSoK6R6zSaG48pjwShbtTUtHY1jCDjFm",
  "key12": "5Uo4T1W2UDNUpUyKJNk6UYu3brGJ8mzLfC77YmB6bwdouj7sLa3K3rYqRyDFfXJ5tqr2K8DiZq6mhLxUjn65gBEN",
  "key13": "z6L7Ep9jxZiZwZzvMJRE5VuVHtDcnfFFZ71FRHvJf15rzhCnduJoHaAXKqyNHvEQFS398C9WAtRefvX7egvkumL",
  "key14": "g2EbxsrEBesDeSYqzG3ky7FdhBBNeKUGZEkA1cw8LjZHEw1an6QuQojDgWSN8H2F4J92HmgbqLFgNZGQg3vkdSg",
  "key15": "5g2vPhY4R6yEbLTTjAHgCt1tCAKRWtY141X91kUjiPcpYnm5ccMkmujbfLM1MB9RDqvMEnCFe8Q3EZ78D4mGhhxU",
  "key16": "4BXsBLvveGzGvNEGqbAjKyxy2XmqFFXzB7AY2bdKdMQyxWEisYoJTpqYYkLCpAATDgzGPu3ABP5b7tXTVUsCaQfb",
  "key17": "GxZv9B8HcCHj65uQigJKNoAuUMXFTfFEMoG9Ei2XrxJueMSMMRQg5QYR3tVPqd6eJfZQjopSHuNpAxcwZf9PbM6",
  "key18": "2z4LBzXyuR5uXpYifmuvHBV1g5qBXUwXvVV5nU7EAjWpeE2adfxESKbhTkJ65qZ1YNq6duSx5p7SguBgo6x8ChbP",
  "key19": "5SttiGW7iLXSvaBsMw6efHu3u4tCocxueqmcVuxUuUVNPooLBS6HXHfnaYP9y3iZcm5VP9uLbDehC2AupNaZfSRw",
  "key20": "y2PozHDNULjfjUcB1riHL7uP9M9dVPbPm3Prxz9fuHByAT9vc2uCtxR4bJ6UUMMD53TwLcZCXe6KELuTFqZ9GNH",
  "key21": "MP6ytPNz6W68gjVK37ortzT7T8DAvnbxv7s1YtqEbpu2hfP42fFKeA8fUcG6fLQQqDmNuwHZZqkeVU1DS1vwpsj",
  "key22": "3QPePoezgaScm4TUrQ2T2YpvmMvK9APnHPRYx7X9ch6JuJyVeYSQBKeW76hG3WfxgSJrcNGdKSfsM5DmUEmtPRvR",
  "key23": "5xpPGHFRHK1TunDLxQEFXcrHSu3SAjPf9xRjYfYpjuPz9Y3fzHyoEXb3YJDj9ud2UhX7fpj4m5VfTUoFqk8JJBUJ",
  "key24": "2LntSzXSRYZXh6VztK834iuW3AJfzUdsN7diNzZfiBaafmPsrra8xaP8vfZzocQsV989ewampXVqCdQmaTRcEqaL",
  "key25": "4qXy21XeB62E7UZtu6Mdf9ay1ZFkCmne9f7L2okrvi9GHUHth8VPMjd3ieM1wYhYPJWKy7Qjak7qH1c87FU54QHF",
  "key26": "3K4B6vPEwSkhUHkzSt1FQESs4SVrckcBDm86sgRdk2UM34XNyVQje992mjbfpoq37x5VpkHfnNGMNN9VpHXcG7DL",
  "key27": "4H3Q6awPZ4rUshiqLvhUCBi3nh4BKydKp9gz2bH3kV5EvzP28zg79SKGET9jKW5LtgxEw65XUSX6f4VCSq4BEJsG",
  "key28": "5447QMsGeVX1Jw6qVXr2UABx7cCVH7bb4aacZeTJgCQcTZWiXHczUJjKb3Hk5PzLWk8eYT5e6vrhMjAsHbrBBVdy",
  "key29": "4VwvCpR8qqSCxwwCJE7VVhCLZDTjS3xsLuqJrayNAq3y4fGCDQo9ntHoWkZbxm66tEpzUqTD9msHtuy3z9epCimU",
  "key30": "4eEoGaVNM4T997mBmTSextdeAs4HB9CQdJ9DgP7j3zcFQwGZL2ZGchZAf5ee4T2wn2oAWb3Gchdj8TP4SPf7Z2qb",
  "key31": "3Sm56x8BAqZpr7qdcDRBLqPLET4eTrarRJdHP5nAu4oeSZMFs1b9W9vQREKjSQgCFzJyB8P93kVEY5kPqtmt1Fh7",
  "key32": "3uXePrX7NCF9HRDycP1Vcy8GLtykMeAyEoEwBV5vXexZr7pVjT91z7EroBJEKF7Arx7NGBzYZuN4kpdP6r3KmanV",
  "key33": "4QdeFBCzNFhKmSDrXef9Qr89cjfouwKVqot5k4dTyi9jbsQqqoSbitg3S6zCfM8rzLYUimf8cPsySuxX7UokV7gx"
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
