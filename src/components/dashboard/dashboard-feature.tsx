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
    "4X2Lrvi33fW6erpx8sDCNuDj7RqLfb7QUyqyEHMgXU4tm6XvVSUjjohmjzox7uuhmNyMrnT7pmc2FKgqBcfgpmQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvMSrpEqNi4DAencGfhaF4aQA3i1FKi5fr5JBM5stzuibiycSRtWaosA8vgJ8D4k62rqqNeyUrMMjpkDE8yJqSk",
  "key1": "3fsKyEKCLMDgjtgeEgFgTBkf8LMhRijMD4j6ffozw6fmcBWkoei3QHPZS1hFvgDq99ZUpiFCD58utBHW6NBacKgS",
  "key2": "2YFMdqG4C7PFb5PvSN3L8hQ6VLJG3XoR2FHXHRtSJuKSXTiHMgYW2tmEsWHw532bYxDofscPQ8guc2ZkAga2gSG",
  "key3": "4kDAxLYzTVJHq6SH11JDtAstWazsikfLBmMPETau3oUZ6o1xR5c5UuzbJ3h8VRZyGB1FLDfdhSoBRhTFiSRjepdr",
  "key4": "4ovDi3XBF6EVnZQvcyecY7cpcm3agz1S3kEjaQJYBSfGFUSbWzytTTWwjXH6AhV8uihNpGHAFa6kELqM9Nx2gTKx",
  "key5": "4KopLsf27bitYWYKecfGUfN9ZWnTpVUfyC5Hq8D8hGvVTzHW2uhZ57kTyiMNq2E8WC4d82LoN1RwXFi4VxFS9go8",
  "key6": "3DiRr2UXW7Y5FE1dkT1bEfY92GWFWZKg8cRJwJsYHL6BtL2UJ2EvR1e86HUEsZkGutgtgTJV5V5ALBgCuXBQuUYg",
  "key7": "5PARKm8TZSGGeequX2N9QrWjA7Fs7q2RXkxTtPu3nLs2bZaPgQQHogrKuZAEVTF5NSCMZAg7VLkxugiZdhXovMXT",
  "key8": "2yDmZstsdFCgV5o33pv5TsxRATo4BTVdaFxRun6BKUS98rSRSNC4ytDbuJoFXepMggaRNMbqgkSs5ZaTiatq4m1J",
  "key9": "63orrszisuJWSSr68DEHpTSXLN7WtsYSmmtqxvwZHZMmSRWqJczHmfNf5ZYMkW4jMwZW8RwTgZ1ukAE6Sd4U7c6M",
  "key10": "2AVz9wC6kvfZfKASGAKMHPHKyVk419k563r5MKK14d2PhMDoULJBxVshJgnoiLZ1CSCxRMCsjLwJWMZjXUxbWbB",
  "key11": "5msTPuAiUyuBAs4qKMuZ5GeUMzkfBhxB2mMhBhUhW99xarXymSCAmbgNme11VLd7nxkqGiyQKMdqsfdkGWShDaZD",
  "key12": "5E49sbwUz2kKYTmR48yZGf5Jw6YD2CV538m8jAYtDAemvm385Z8avK2A4KZitkj6ZMxkWrNAo9acrqGm3JvRnkMw",
  "key13": "aqrQHPq5eVC8SYQuFkYqSKLgDWLfoHesGVPyVABxa7sX7qoiu6aMS6fjscWWJ1A3rxrsFJCbr2kSDoHTMcvAAnD",
  "key14": "5YfEtrtJEriweS3nFBNzey7C5UXRE8EFzrDPzgqzyz4XPPMpbocMwWap35jeKEG8N6Gf8GXK24JkD4Xm4ddFhJ2i",
  "key15": "4cnkD7rxTaCqf9au68UkN13ZgLVjjoW7fDnqxSbGPePKQtpMK2NS5jZRrAxkXAyiXPWAMUsjaFKrVeTpdA5sJywF",
  "key16": "4jDnK2gA517hvyjQpE79TfJQcc6GRRG2pXkHxjcS1MVfog2e5EGpP99fMxVWZCXuk5NrGRrTAJCTG8NuGkDsFb4E",
  "key17": "2827jiqM7qQbwPxnmUfbXUEq1x6e4BiBwqVKP7ZSjET1Rg8EwGY2Wd9x2qn3SRHWg6qch8pWqvu69Wbee9gPwUBb",
  "key18": "2b7BDmpnjzVC69xv4ZG75fyKSwBqdtsDYR9FDZYeCWXUs1HQu9YmqJ2CVYYaM4S5PRNMmFYnU5Tq2vkmLWqhrkKW",
  "key19": "3m2NwG7NbEuQ5aHXvbJjPzRrMP2wADhVqdWYm9Ej7J9ngYwruLybzujndfD2NbDhnhnNrSFXUsPR3g5YVZsG9goK",
  "key20": "29AGGxhSfTHNGFzhz8FEZhTVbEoofuFZy852rCwVhZxKf8GcAqAWEaVYHvGLrJnLS1BS8QnMQpCecwjNXV2ZUf1f",
  "key21": "44UMuRtMniYjZNZCG13bCxD7QxTEbjzACivfSFtA1NKPHigoQvHixgCCJJAUACCwawZvVjGi8xXSsyuq689pVEmF",
  "key22": "5ywysP8ZMQkqbZTo6QCPgpdTe8NDPSnwazzT8QkpAeN7B7Re4RFu3xN47EZKaYGibc7vT6ekwvQR2dRDa8dHgdUz",
  "key23": "5QhmjCedFTgKQU4XXgQb5T1cH6hqYXoouiktwXAHUqVSCBRv24C4hoENhPDo9jP9zVCyQFASr6JzUvVk2aCueJe6",
  "key24": "5mr5o26e2p1a5ktayjZgAxvbEmWKvVaHPrsoM7RHoKS6YvwMYQ5E6kaYBCZ4NEafeZJgWsBnNsDBVx4JPgKDWjjU",
  "key25": "38v8gBHnNszZWFeJovdfsgB824xXpDU75X2b4FpwWU72c28R4AjoWYXPTyt1ii462Va4Xf9JwuQ5weiKRjcW7Eqh",
  "key26": "3vnNyFDsNN7BmMLMTrTguMEQFXqGr6D4KsBhBA596xgqBHZRR6ywgt6RoxfxgZgAbG4koBUVZN29ofjKfobhjTNU",
  "key27": "3BSFZ4tQfQWF1xumn8du5QWj9xmpmw3A5hUwWy8p7arvPaHxt2FVKBPrYxeBtRobXFm9X183NwmNPruFmHayuday",
  "key28": "4iAPMpvGzyekk7AQQACAaV893bbe9ksUAr1RsLc5WRob8Nap5gWRiCVRXusAswUuN9GE2kqKQNDGpEF8gWZDoPbF",
  "key29": "ucbF2apd5MfiL1Fb7vM1RRXJFwXpqApH8ujyFk4nmmNn41N72Qu8pQj86193Hju6FjWYvCFAFMFAanXsQu8pyHH",
  "key30": "4ZnvyzHrma9b6krSj1GKusHoyByWVocBCsbmKM6mncSogPw8PMoXRAp69nA9ArpcMdUincqTebdyArEZfzCF9VV1",
  "key31": "4bsFL54NAem7P87oTrXCTX6vFjurbVf1uTDodPp7qmurjRPKxuwYzypcFPfCvjvERom25LCEAeRBrjVbSB292TBu",
  "key32": "5PVGCBVQBaPrJcryUpaVm7EGG4DvmgkuVUZLksSLbxHsBZ4Nak8FNL37d6bCFZ3A4VyD2ADScAbE4zf4YQgeuaxG",
  "key33": "4o69DgFnEJDoMjYsx1Rr5bpjUMRLTaSZyymmPsahQ2eEVQuXeCi2TkWgqw1QX98rwz4XdMKaycucduXydiJRHWEw",
  "key34": "3K8Mt32idMpqy5BXpf6Yi69d4L5NwdQPmX53ADKAGjbv3yPwcQ8Cj4ZuUrKzgwNyzXFy5gbGLnP9uUKBbDPPDNs5",
  "key35": "p6HQm6C1tS1MGM4jNfPjq4WWdkrrhSDe9CpSf6VyfLKjSSHBQQowdqbpBNNYoB2xcWujF8RGkpz5V43oczXftua",
  "key36": "3cuBC77r1n6w5yAumZpAjEeHWujvePA4P1dc3aqfM81ueh1aQjBAgHjU7b4XmniESJBeifHaRBWyLeeqc6ySh9NL"
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
