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
    "gdsR1rBjFNQE2hAShyPxV4Dao1og4VSbskdT1XG64z2gsNmsMn9B4JMnPYxJxQUDKuGcMzJGdHdtvkv9tm1BCwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XeghKX6BW8De8PXBw7emm3WproAyQYbtXZhjfyAV5NNP3aEswPPJSPSfzKCuYJAcNKi2ekvj1Szx9YijzoSaPh7",
  "key1": "3zWrXwQDxSKA6BnSzFe4kUVXhcPWRXDfyYVszp6YFBtYXoauLQefBv48YPHqCoCstjiNhx8T4Y4mGndFZofpVvwb",
  "key2": "2S3CWVWZeBqyVs651LtiKWKreeDcY9sy6fxYQTZjKax1RvFWXtDez4G3HkiWcvsfkTPd9amcwtqpZwqnpSwmyn5p",
  "key3": "679qSQsKbBTtrGVz8izvypkQxGLRbWjJDTczNr8SRMRj9pgzARJVWeCv6H2JAwEjBhYM61eRUmhUDSCizmgVvQd1",
  "key4": "5UDQt4vSXTU2MnKgEQQz3Uj5NoKwvRb2HggEywbpfwvSNif4ZDJiHE8g4Tt4mAKR3VnyuqQJt8LYNvCTx3Ps2krt",
  "key5": "5CVSEo4aL8M2Acu7g1igwVLpFvXT9MZcgkawNRincGKPSxwWqdRip251fomuscar4rxioHDkDPcepDebwbiyDY1x",
  "key6": "2CWEQ6qS8ioDWj3tRctaxzapm3uiwTUXPsmXVLmUtyLAyufxPMsRDe6UwFd61Z4R48b5ecjortLN1NPtD2JhSYv9",
  "key7": "kQjC6XNpraMMnHoUSeANBDPiRDLwYNVfF79Jq96CRqusvX6i3egyG7S8CZCKFuprbQyiqG9zmf4aZ7FSuxo7ndC",
  "key8": "4Pz9yGng1ZTVDtuNXXpL4npfRiufizPHwqPhaLbCsrpNG8cfD4QHGWQWk8XLWQrVJrWzSH385oWCDuU5HSooswwb",
  "key9": "2Qyv9QRG2LWEQr2stBovspZP3EiQsXeohQSUzQeXvpwBLsTMvA5MP3XdW91HR7sDBMQo89H4oHqDFMr4oZgtXygf",
  "key10": "4x9y9RazrZqwaudk4eKDmte2uNaZT1qip8MMJzAFfxQdFPTvzcAAbSs82WGXNyLad4oH7zyib7K8yExDkVeYnLFd",
  "key11": "3tkpjuU2gFUX4hvzAuU2UpxgrtXty7Rtck7X9iE5caEcYEdc6XnEiBgBMyuvaPP7HXMWMoUtxdgHFkxxE78wwjjf",
  "key12": "54TgL3S6gvNwS9i6PPsZTGptWR5JJrqNc8ZbQUuS1XcXXC2N4Ss1ysUduf8bDAi3ydHhqtaxxksszCwT6z1cwezi",
  "key13": "3qzoDsrFLy3tBVBf5SXpiPiwdmEJwu1RTGY8jsYpRMdWj2qWCM3daLkCiXCqwTAwbwgvyNRZKsXqbURibspYiZPw",
  "key14": "3g9fBD6w9RvpDJPvMjkFNQNoq3PNPzLNcru1frFCaaNyiLC77LxELe63TPF6h3ZaAj4kCkuWaVMCChBZVeTaYdu5",
  "key15": "UmtJcnFmoM3vhR85mnkYFkffERcXXsnkvycgTQ4edv1YQCgr6eBpEh8VKAJdcMe2FukY8CewEoVNNvvTBojN9XJ",
  "key16": "5QBmszZFJ2xmcdNLgEpwKYn1oKn4kz16DvFAe7jogZevgfJbk3mnwVx9mwgPZoRgACxRfSGUGq7LzYk28L5tG6CX",
  "key17": "eJAFMzkJYd47MGM7KLdhcG3oWcmPbNLehqc8pc1pbLSR5eCoQPpuH1zyj9Mp1KfHVHabPzsP8rb1PcQJci8w9yV",
  "key18": "6zv4WJ5uPs3qDvRmE8zNbsNATgpJurXx2mV61RFy3qncJCZoz3u9o76ECFioriftBwHwh6Ri7VTGxSup5YJTahz",
  "key19": "3Y8CFc8WCph4VxmMRhYdYhbYGTEbXSqV5WmghD6wqGeiFSdxhFVotM8fXPPZoKSpFb3jfH6rrZeNWy3q4yAoNT1M",
  "key20": "32UpELeAMsVUkYMbTRxuRBSKaEkbcjpvh9M5H1RXTkVDBk2UUbGEJgwRfjAftrJsKPe5nNipgp1rswWPMCbJmUxP",
  "key21": "4XcyHKYpY9dPvgz3XKsVisF2aUurZF4ZLFGeweRmWnw4KzhwFkUMLN5CUuA6PJWR22nghCnDoLYkZbNEZiAdC6Qb",
  "key22": "xmZCfm8xo1ZcrS7bE8qVwbnmMhQKrMbne29cCjxFzPkKfJecbjZ5j8DbtJ89a4rFnvjL3kPjCjEogiVqiqxnuEE",
  "key23": "26C2FTEniUbjZpbE2JFtmYf9TzzfomMuxgU44nWeTab9vrj8QEi84xD8zP61n3KzLK9UJhZbEtmShDYKXEkT2RYA",
  "key24": "GDQ8oN5VXtoPKDfA9XeSbueVftWZN29LPDT82H9e5Bf9D1HEtw4MJTWbsMm2vVAmAnTFDpWfCXY8TczWqiDkUnb",
  "key25": "5QuJHCF79eivKQageDmFx7m25ZziejJfpcjtpTyVCfLgXn188kxcJjkDmRaocu8mLnjz8jzd5ZqdVqpbo6vuJZPZ",
  "key26": "v6ZaB1TBq28NAEoU9KVJSMMJvZUW3Bx5o9fVDNLe3iCzyMTMDu5iFWdaAX8osS4sTfkiCdvDPFwtfKKxrArfoBq",
  "key27": "rSdnFbTsej2LvUrCZT4r4JjwEQw2JXWHHNaxTN5G5Yg3bMG3juDEpTqwwrroR9dxiW1oWRWMikaBhtJ4zL8WV3L"
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
