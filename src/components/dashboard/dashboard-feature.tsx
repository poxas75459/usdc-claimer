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
    "2ep4jCpooyrrwMLJfBwpdmZHmVq1s9X6LFTddAmrdZzg6tLeJc5oV2ZiaLoWmDZ1V6sQfHVyp38xSdAffqAmAXzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586YMb5GNZcgzrjo8HTAFkdGL4AeuQ7BcWmo7LUeTshaLDRaxzwNgsrbtXjyfsPZUZbSLf3v8E154nim3g85txnA",
  "key1": "2qmaDeNyvGYDgCeDnqvziY5C3a8nhoh7NYCWmqwZjpmqAUehzdjnRtiqk3CynNoirnCcAFZToFMfB6EtfX1CPdLp",
  "key2": "2kQucMurYxXRFNFutGB2f64aTgMtHvBbHGzUKuFe37HGxYmWUu5KKz3PMEwP8GSGq7MmS1MR9DPc2cjqhf7JNUj7",
  "key3": "4qGjHBpJQc3S1KQtVCpSJUdr6XNPdzpcmZkmDdShWwhSU4xKSVYvHFn4mh39FcN7njBfrHamW7WNAPwrF2AhJmDu",
  "key4": "2LBQhb9Mu7vbZQJKa772HPUxQU9xBWwz85gCj3g6p8zMhVWp5nh2uzuTYEa7HjbCtcNACewVG4uoekhKMKurpQJg",
  "key5": "63eanTsFyWtvPiYGbjjN4xCP89ibSKPZYLCsb9Q1iPdAoj99CGsQ5UFEMExCnsPfkckrNMfbQcMBRBqKMGXh5r5e",
  "key6": "S45C7noPVn7Yb5VjmsHjSA4n5CCHAy7bTPL5XwpVFsuBtgTZEufd4qoUsnjqY62wMN235iZZ3rztDbgmdKXL2Vh",
  "key7": "4bWRvY6mU21Jj3BqskAgAdUH67WGXAbWFNsTLFobVKJLMJTS6Mgo3usRjJg64ww8JuMVMxCWBpNKuLMmZqGjk5U3",
  "key8": "Chr15AVXwvxJKM4JxpJQe1jsqYhYWA1ZhskQ7LWM79Ywyrer6x2zg3Hh6fErzjdfDdNuoCjJojxrsDPxcqRMd9U",
  "key9": "3DUNBfwUHj4FzmLhsqtrDEDtwG7Te6PEcWu1KC5eus4UjZiMgE4snuBLu3kx4Q9d5Gsznrk11LqxyyHfARuJ4H3w",
  "key10": "2FDMtoKZ3wsYXKnDgBzwipnWJXefyGDaZK1E2Vrc1T2BtL7S4D8hLAcBweHTKVzotvy7wMTc4EbxX9xofV3maNPJ",
  "key11": "322genK5wpVpQg7czNHeRhikug3zQ6nQzZX4bBmctbEacvJw3G3rMTx6LJmebFEnB1Y153etc4XQhquoUbJZBHiP",
  "key12": "5B74dc44sywGvnXhfhmgWf9Vz8E1FLpRE1bg9k2CZ4JYUxHjdeJ9ryZWSPaUV68qt2siTkqXQXsPryZEjEmCKF62",
  "key13": "2XPWWLaLyY938ZrQ3qF62hgN91kC4XMsdH5GGAZrdAv81SgjBzeUk1SzhzVzPT669K5Jk8nnYDEaUjfZVQmgtsK1",
  "key14": "4WqZmV9NWriruJQDJXaJckmvQydwQ1S9kV97hnC3W3753EQgz1cJKyH6PRtLoCPTsRQT9v9M5G5qi85aJyyno2L2",
  "key15": "56xCYh873Kej1NDV3S4TaF3UbN2cyDMyAPSpzrasE8T7TiXgWKtbQEWZuAbBZxHtkaccwRbzZGe5E4a8gXyinzKY",
  "key16": "51c4NHaxmKuTcGfZxZ5xLt3TZuoJdQ3yYr33F1vXARTjBRjRTb3XBNTvFdJvKGwiWoMoujmx3PMdbqFfi7naUQgs",
  "key17": "4SaEGYiwAt2X4kdTfU3Q7jqzdfms51WCv2afzBZStECjYPyCcE8jLbsP3p3NTjSE1Y8h11ecPwAXZbvhw6PWGwi7",
  "key18": "3SXUrEyo266NMEzK69VabjhSLp9sdTFVer74FKgTCLAphUbQUScPA3ke5ChxLDoMUsCw7Nt387WifEu2wSzxkUzU",
  "key19": "3JVEB4CCoyPGkrdyUh9oaYH428JYx1pyoCBmoySzRmKLvCz8p9EMmP1aXpiGoneBKpCrvJWwHXKtx4VM63SLtK18",
  "key20": "3bpqW3wBJM9UTrb7qUt6yaLDF1pkR3Uir9fJTkZsCTATF4yMQTxUJkTLGnU1XfHPoCV76tnH9ZwDik2TRFCD5iBo",
  "key21": "5d4vgUz29A8hfuYHvcM9LqKhoHRHVGjf7xWvSe2vSiRpphnpnMy1HMLJE6tUq2XCMZpaKGoKLjWzw3xFzQYvRqWF",
  "key22": "5wPsLdYFg9YnmoVmQerS9BpdmnqQ4KHPGVfHmr7X1rggeS1ST4JNXX8FVN8dYXC1udD2FQMeSfQi4Fk6WVM9MWFx",
  "key23": "ri3fwUQvctxeCcu3EB3nDdZttWce1ceDdFjvAjfAcVCenNkhjRSDVeocMr4rnKBqfygMBtsVPaJFm63QV3yZ2Bj",
  "key24": "PwShiMyXotsd4ZfAXWggknEQPH5Dv4onu4EA1adRLsW1zJmncAY9qxNye6YLqbsQvLoZBmX5JzrU7MtARrbG8mm",
  "key25": "2ga7skKpw1XcekHa9v5wpcpzwqeTsXXX7G5W3NzxXpc5cL7KhXumVSiLCrvF58NioNiyrbg8PMGZb1q64hE474z6",
  "key26": "4ip4LSsqbMAqJxpye3LnYGabn7nipLkwLCSDa9kuR82TtREvao2KXMg3iPGpKmUybn8emdyVWWepMsFSPwnNDRhU",
  "key27": "62ZB6tS2MEmizhmoM34uu3G2j1rLn2bKavHe3JrRCDGmci6pfZwFEcVf2yNJyhFu6RENBv9a3SmYZfEBvrqfhv5r",
  "key28": "FFCLhz4cYuLfnFCV5EFLSwFzSVVAptN7BEWCTAUYH6ieeryTuiFA6zo6ZtYuLdNK1LbpLc1MyyGki4jUqdpmJsL",
  "key29": "3ikUq6zvuPecdi2xZmsxZjyqoYykoHRonKsKKmAhokPBSYFctv2gjEeeeTNsyEJGn7aWB7FUWT7RDak4Md1ZBm6L",
  "key30": "3NHcw9Biscwipr5Gmvm8cg9P98oTrVeDeSFXzPc8D2KABtcMX8k93ZQQSR6fXHMGvkernSCwvatoSuFhQ2RTHNnv",
  "key31": "5co5BThdmc13tYqRFTCiJHAns2JvZ1rfs2UU6UugkNErC9BEZYnNetxF6mQ4s1G1qesre5dxtr77ZTnCyhH2rN9e",
  "key32": "2xtcHSootGLbTGXFC3mAf6K1BUvTbs3BL9n7EKbr63TLwNizqBXqvG9wJXaMYbcvEhsoDgsnsWxszqgsMgR17Gvh",
  "key33": "2wAGC5n7KB92Afe6ec5d2cW1MQrojB3YA6LWox5AX1qdhz1XVxwc6YxWYKLqS7yK57b6kkwvcYXFdUBk4VxGhPwR",
  "key34": "3tTaL3tYfxm7BkmBANco497g8T3QbwFgd8mwCek8SHVr1JpiyeueSp5mHamufBipqfVhuqWXfwgQGg8QyFQFxua7",
  "key35": "2uf5mLinzLB6iGjSV77GQsfPZ5TLBfXJcPoa2sbqMHRnPgPC4wopfJYCJX9vkh7kbe4PZPtPd7raFdoqau5XChyd"
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
