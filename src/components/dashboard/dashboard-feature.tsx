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
    "Eh6Umykj3UWsbt263g21scdtgVEkAJrtUvvUvLxQHPyhvG1N3n3Cp8qih4HrGeBjNPhUvdG1eW1yfDhBEj2yeqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23G2xAbG1gaFZuwBLhZnnnA1sJKVAyTxU56nww1hzaUAV99VrHrzyChnBiEPDsJsCqHq3UV3zWudkcYx1kVUNYH1",
  "key1": "5Utrt8TiXEkjzZPyACs7Xw35WPMmUmuTgMazZssnkoGcCLZWAngi2KDCN7xEoaLJe2cazvfZbywMqhqSYzEKCvoE",
  "key2": "3spwLnmNLsEaXH1mtLzAPzHrCVbsFGzksDN6XQLX6HA13JC8y49GcKHgqcWS53jwGLUY5phUc8sUvu47153hZfwN",
  "key3": "47YfMCErtYbkKH41AoV9nur9qw38kzQBmWsqqoAU5eAtf1B9NdgB6uFevtKH6yXw4gRRhndRhSqZN8UiQgwY3Zyw",
  "key4": "5qBUhXpXzL93DT2BWkGePzaHZ5pqZtoZCQgzyjGqmZnkrdM1xvzA2LRP7RugTM2MU53JPqJww5hp3G2qWUDHXvrz",
  "key5": "ejr13LA4ErjvSuMnYqrvH25cDkrUjAu6jSFZUCkQRorhtJPW2wweNhG7f97m9bLPmURXBs9iFYHVdzaPJJABB2a",
  "key6": "4R72d7XZjgNsNByBYtpdjstK5crifwaCcuxBSZbBmXDd2xQSPhNhqZK5t5aPZMGqtdxmJ67g3rkjmLWyY1QhcWW5",
  "key7": "2QyKB6JHdnC55HkXGA61Jj2zJNuhSimwf2Vwo2vu4HgrNci6HDALy349drRvtPxc3W3gu3mTTDuNUo1icmBKqdfv",
  "key8": "29uPFMfMSXkjUFTfmAu7KSK8cgwp1wrFBtE6gzt3DAis4L99vh9Q6dKuvTTd6JKYpMKTrPpvxjnwy6fzKZtTkbgC",
  "key9": "2KUG2PQGJAvajvoRMmkowwgWtCXrf4BobDLQvCZTRHxzUhHp6gbEaTSV6vvkLNQMQKE66PSkJWqtgYxceqXZJR5h",
  "key10": "4Q1b8MZDyTmM67En7QiJQwwh8ajKmQ55jX9bdPRh5pKe9eaTcbX2Jczut7SEMwuHbXtDaxmN8LuP3PJikHMGLpo8",
  "key11": "2sjG6zertqNdLKDsoiYw3oHkTR5xrwjtcY8yZDF925Ri7nfbFotLwavfTFzLhHfoFyj4qZQzE8KoTqXgryBF7fZQ",
  "key12": "UVYciNDWCWWyGFUrpGN7SKZrT2G3qhuuquQZLC3Ya3qdReAqXEsE2azcCZPDaHHYcFxk7hT71LcEmwFUv2RGEFN",
  "key13": "3xTz6Q2sv2c2MarLEJjnv53FNkjGFuHvNZLu2mx2TL4CpWDz1YEFRELXLYtu5AA9AhvnnEQTdghadXQ52dkBLgJw",
  "key14": "jK1yhkVhwSArJT63E74H9VumWq865PVtAhs3WY65Ks84SjPFtZBhwpXnWCcVrbiriUmjhfnnkLnac1PWe8vwmUP",
  "key15": "3NZpjUxNkry9RTA1MP9EgGYUK7MQxYw1dDdBP6mtCScpD6jxb1JEW3yPwx9gPjFoHpZxLmENBfxjtu1ZAZwL1mMP",
  "key16": "3ej2oghaFuFqzdqzMMV7QJmJ69EJtk6LxVkjX6dGCfAuBqS9Ev6M8eth2XWbZN7m4jjT7dM52P3T6abCjaTCyrWB",
  "key17": "25mAGB56iXg1yX8FpCtdnXdCfuxGMstyzPqRXqDugeQXY8DCytW7drHquXh7LHEQHSTofVc41hbc2wFQqyVpFfjX",
  "key18": "2HkDLqrkBEtNKqTWvjK7jgSib7iXf4GJ9CSWuCPJ5N2xpS7DeUeidhfcA3BF3SGWi5H4TrcP9sgVpp7LTTi1Cywz",
  "key19": "oZvx4ZfNHwXzeJ29vnEovouu4hQLsQo9qt97crrdxNbRJKMiQNiSs1aGDRdfqtiwNw8ztwiwSmsbCxdfEL1YngQ",
  "key20": "U85A3qFNRmufnDwhMKSZWXe6VNpwNWVwbAEh3cb1Nu9Z3oSqxj4Tofb98jXVFZQehmGXwVQJr7d5NYeqP3wwqwp",
  "key21": "3AhK3dByMkSJoyXFDW6YPxmdmBW1QeVfe63SZDcVHMCYBQpEiRxmr8w3MkKYu3Ya9ymW2NYi1oDxxF5SUfb5uzn9",
  "key22": "3G327BpWSSsZcUNRtgLdLVpv7HBSRSjFAPskHMrTgoMnFMnsjKLauEuLqq91ZTRVPikPkanjUVajQSQpvVd4Ceb5",
  "key23": "2n4LTTrzBQMtV2R5p1fNtZ6jR62yQ2mvApTWFWGbaS52icBdUFXsMeVhQiPJzqMw55dAwdf9E4wkSh38Cgm7C2EY",
  "key24": "FJsw924N1oj9izVm45oJq5iV48hbQN9tin8ugvukXSkVsN929gxFddPg5cLigpMroh7w7PwaBhugjKBoNnf9eWd",
  "key25": "VFyeikdxWDQBWZBWVWbQ94qdf587NxWy5mHu2hjdiySVLSRNgakiW3bcbxJpdBZhp6xjWrsom18MoqTdfQeGNRR",
  "key26": "3PNzHuvoSZeiLKuYQTMckv9gqVMGG1iiPLyhyBGjeewKaDiiLL8G7G61AitFzPRa9SRr2d9sDhFCQMTX9kWXoZqD",
  "key27": "5Se3MTmCvF4yffmrgjL6vALH3dLoynTCQWv3F1cYxvZSf43NnfUNirnyU8d65Zfp3h9JF78CBSdcNZi3Zpxi2xKP",
  "key28": "1kxz5KrFymDAaJWyRHs4Lkv81R9zFEK1vnWRucjBKqUS6LTXkwq4DHNSb7rovjDTuF5oAs4o1hVSg47qPYy3nvz",
  "key29": "3Vd2wZPejBG32GLzA87SmAkc5TWuY5pCEYUtF3MxFnmFuuzWhSzLRYE4opSB9E2juKXYjTouN6NBtvsPKuj1C5Ht",
  "key30": "2waAWpJNUqBc95CPJuKqoVM1D1AF6A18vLE7wMdYnCZ1CJTcomZztCrtBWteAB3PVZuwH436sE6zTYFBLFKSGFuN",
  "key31": "BZAi63Uv1Ls5cs2vRd76C5ZHxE2NoVHovyxUwwHdnE5KCNzcYUhhrrWhNixSjDXg9rtAbQoeJWP9BJzHJzE7Xa3",
  "key32": "3jxuDVp699aDi9AHNE9yX8TtUo7SCGdqFLsaUZMQm5VCir1z1WAESdxjoG4mn31YoRiLpza546h9ScUErWWHaRsV",
  "key33": "3D8YM1GfBLm7rJmfXRqG5xdBCis3RQcc4KXKX3tYuZYae4BKPynLuE1ijUyrwstCnT79pPXeTHUF6o1kiuLFW83x"
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
