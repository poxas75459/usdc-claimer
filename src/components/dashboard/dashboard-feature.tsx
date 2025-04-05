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
    "2zTdqXQmNtBiTjh7hs1yHVsTru388S2CfEWh4ZWXFXwg5NyqfHVNDMQ2PaqZQWMxNP6PF3oBig8h4jwyCNAgGNuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teRbX7GBXX9My3f7hrLAN3t5xYxAKQsi6H3aRKkmT6BYe5ibKzE2zurHpsxswrDGQJMe2UbrRQfWvjsQE3GcFY7",
  "key1": "2HMEZyfcAeR7W6HLenWFzyJR8zxqhsMhNZxuq7h8PysYH75hMrQZiFV4ejkS4yYHvsgFAySCXxxGpP9Bxc1VGFg9",
  "key2": "4P9WxhcLj8saB4QbwfAyGYr55DnKFsoTrBaACoBPjMJXn5SYhAg1vs56vLq3EbYSUTqjrQpdCRDJTMWrp81PxLVu",
  "key3": "2mMFqXwMmKFZ8tFp8nvUanXc1HQ8y86pAXGqyQKpAVrrm1jV3ssMzLAoJCxCKE5YvEgXSiWMSurFRuhJ6JUZnKWq",
  "key4": "49wZ9dRnn1WW2AmF7SJ11gu2kcktxv7G7Bf2nUZFzd5ziAesTsTAXL64tg9JvG63zCehPeitXjQhUFUjVbkBXYby",
  "key5": "hfJ7ghnCkJ6QPcHAEPxZ2GzGgjFSwkj7hFnjtquvcrPyAqhdfnRBTnRj6xWMkBFBcdTVfQSmkzmwzA4poswmvmR",
  "key6": "WCRqocz5eEDfBsQVmd3gBRNbWp7vtNxHQ9bTqDMJqDgENteb6ej6ztQKhU3WckPmq5tduogK7TUj6v1MhAt1n66",
  "key7": "59xtMEAVMQyB4LwZXbZuvJiXAKvTbZDXdN7veR1CLhEK2h5Nri8BVKvuvkXVnxwAnukkkN5jyg7v2k7Suyp6pxH9",
  "key8": "2qwQgWon3kkKxeTiS64ETAnU1JE8DQ559eoaVzHzWLjD7ugKsZUYT8LuMy4n1MHzQjwCWFji66k8SHpdtHyNEZrK",
  "key9": "3vh6f3BjVxNB4Me43mqHq3V6FJcg7CSuUH3BC9hyJX8TapL1arqTXybQB1EtcCVV4NWeiz9csk5FDV2jwmbg78XL",
  "key10": "4avA8dsMc1dV1NQheCgUurEsYQavifJdhKVFgkZJjwtnDma7AygWHXvZ2hgddpXuCPSBnCrqLa5ZfqDLByd9bzUP",
  "key11": "4yDQLisXPNoATEZJzX5xvEmDiwQpJbpGi6RmM9yKtmqsxZMXTkKhBscrP9SgVqmf9tNdvrtbikPQMMQSprfuEnUT",
  "key12": "5mm4kSAax4XrxVNWeiii1LNMVQE2nihPaRyymvTbG3aLm59n81jeAxpn6Ld74fGsTZfeU6LvsZZtDiQDNm7AQXRu",
  "key13": "ZZyy58jAAUokaoeANiHcFixrNtgf9EdbyPzsCr59QSUCWR1WubBT3srX3XH3XcvjNmmw5xcT6sAgzueYo18fEJy",
  "key14": "4AwpaV2awN1zDYV3GFQnMHWSZwKAKFXWEzYzuVVDam9kbB2GBswJQd2sZiKnhNrrc5GGDDdsbxYu2srfP44xbTEM",
  "key15": "5QpeAbFYAWtmo12PFdc1UHt3Cc9oN9dvBjGTJ8qun6RcWLEt5j7ZJJ4ExzU8F9Lj884TgapgQWpGozhowUYwssDb",
  "key16": "4qKB98uKfkVUg7XJaafG1W9y3fYjAAREYZqwj2NndAogzh1awgdm9owK17qqE9nPwzTGey8ZKrUKch8Zen1dNost",
  "key17": "p2mfJtJY5wSsDATiqmJBFnvRZfmjz1U7kaSp27Vp53pFz8uoojLvvxhSnewiG3i5eDKnJaygkva43CUH2sLT3mH",
  "key18": "2PjiJ2cC3gsysjhsHnWkJvgsgY4kBPW15hm7HDaanaWgg4NFwcdFcqRtur3YCV1h8SN2mXtybhYV9TopjXifJ6ve",
  "key19": "47kAFMMGxpBMXRbRxReeNDmzsP8cb5FrZHM9Y8XspjsBnvz4rJbtwNwqxGRWEKQvhA8eDmiBguf1nXh9Z7grqNS6",
  "key20": "4YiT8psHDkuhABvgc3FmsWG8jAVvo4K6hFDuqMQ3Xc5iEqyiQxevV7WdXwtPzTKNsZ1UQvVFycb1H6GJsyfPcaCK",
  "key21": "4hFvsPZuPD8JeGbpX22idEwr8jryxM6SnXdvGewpHfvoorFTE45aMtA1xaWnYyncZxZTRrW2NHVrHMzMyY8gqGSU",
  "key22": "53kEtTdyzVbbZXrtuLDUQoNbHy9nXKXfJrxFbuwkdYr8MKLWmt8pUxitaWwYJ44CExYHYGHfW4xFS5N25UfkSkMs",
  "key23": "2nkX9pktZrCZ9AvktviMsRHoxaC7wH25ZnWnVPcTSU2jPf5q8o5aPB2btC8W3nnhfb1ZvMQ8dPZ4HxvV9bBh1CG2",
  "key24": "3YEa7ts8zJTfqsrjziQtQ5cSaxjMvvjS5VWS1d1hezc1MCaiWDMkYRxPHUmWoaV7teijxPB3s4MmoCtKaEN91amr",
  "key25": "5We8DR54q194ggAn74v529godax8KTmqL3mGodgSdRs6k7gyaMgPtiAWNFuaqnH8zxa8VhbBNcFYjx5ktcbcYDLb",
  "key26": "3r6boh4dPEhpMypkPFNdtG3Pg54g6Y56iVPRAde4m71HadSp964HYTgWaAFPkiXRtyawbqcBYcXdHmpFRR4fURQj"
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
