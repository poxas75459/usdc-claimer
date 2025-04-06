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
    "4sR4F31iBovRLBU8KSw2dhR3QPENP6xjD3aCfh9P5GLaWY7h1mXzSebjMF66NkqPZmoxGJwAtPgU6QB4gnV1JETZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZFRgnVCANA6prbGJUzKP8HxqwvjmtW3SWssyuQjTRJuLUEcbpSMciaHTJZ8kpe7jyQNHxRvqmhhUZvd72Kohae",
  "key1": "3hp8f8R7eshdhrqvQ3AJ6GAJPxBrGcr8qbtwSmN26ApMQuJ2iWUyNHWmRNAyocfL7WqEycCy6Mn3rK8iriHtpA1L",
  "key2": "4CG6YH6qqt2c2YyV4NR398cxE5RpFRQeXb9BFkemM9Xar6WQ8GU541wHW6gapELN9f6Dji9RRrndbgS3dx8tjEmj",
  "key3": "3xuTEPz3nxnyrAnB3aEhXmh6DZk8Vd59Jp1kMtdg4UU4ML1KP6BJmM69EgfnPsehbKC76Yx7md9dfkrmFpZFCnW8",
  "key4": "3NKY1XeozzVnWD9QTkskdSB1Q8qu2AGybWGUqH776WrzvAXuLdMg2YgQY62R1kZPPZPTr32gHb37YbzeiypGQPig",
  "key5": "3aJ9DNm4oQuatqqLnxcqcVAm4aQNjizpDrwkZfQTUDSUyFHNQ3u1eZSgnahvpMnibA16SGY3owaYwLHczpNSM1ev",
  "key6": "4bC7XDn6PZQYKimTAy4GnVDAKVtpNSHyUv553ubo7c21dZ92i9y5wkZNUmZAkUoywDD6maz4F5513DKcob3CQY3J",
  "key7": "4tdhsZUJL8wrbxCYkMJDmaLqzaKtQJoWZ8eZcAj7Ux5WdzUkQhiagRnyDT4gM2G2xtdQ3pemox6qnspHismEMpi2",
  "key8": "2YFFYiH4cWvxE3BsNRYkGFmskHWUDNNqkriJgFzzV15GL4tajkfb6yiWdEAgCbDktuuLHB7YrJAxExrUtHADptDT",
  "key9": "5jRiK1AivfAUGwwzPEG3DhztFZDY6F5WrRU1Fxm3s11HPRQmn1J6xV3MJ3qh92p5wYWjXpxJV97R9BithYyKEDyT",
  "key10": "5bsbBtnJ1Z31wsKTAmoWyxWiYXe2CYTe3kmTnRC8U5zCJcZazcnf9rzWGLRnvtd4yWZzfst5KTHvcNZUoVk711Zj",
  "key11": "3F37LiM41pouJ5B8TrV3p36XkJ5JhVf3WyNKQZ6vok5YFe9c2WjsmbfnwpKHW25J6g1uoNSrKbtMunVTiEU2QkEf",
  "key12": "4LG8m1RW5RvhyggkhVY7kgphjiNeYsc2DcmCJpgPnyeL3HeCq5NjMg4WsQf1kVSEbsLNWfcE82LRMqcgmyjHxZFu",
  "key13": "3VA6rHNkPscywjCAG54uXXBLrdsgj26cyWPy2b1pniNHRRLkbSS2nJPhoeQBWRZSTQ83strhy5txdsoMPmw7LDJa",
  "key14": "4514wssz6TsmxG8RoRpqBxk7QEPWKNV7knx81bfdzQVkbteJfmjrKh3J4nDHpveCSCKvFEpxzSwrTbyx7hzBR7Ss",
  "key15": "55zbzwXrotEusUy3vm17jydJaGKsjppCBgshG4hJxzyf9d92MZNgs4nAp4oGLNCRNgf3A5eXgfGRCRp2JofhSjGj",
  "key16": "3KxXtYPrUH2hNw9BX3ipRfwwj7MsXJZiXYafY78xPJkR1fSPRJrZedxmSKo2WoEbBy1jE2eDjZ6wzuvQVA9wd3z7",
  "key17": "3ZKEdwwoQ6jpCc6jUdN9AtFoMkCnvVuYJw6E83hsGHtZMMg88ZsxrhKfmx1HErKTpVFt5iifNq5yChVbcMjuDpNu",
  "key18": "3oiosRWKayTK6NxYFX6iFpZmpHRPV68V3hxakdduyqQxZWgVngGN6RXPxZKGaXpUdjm8zxNx8Rj8wNAR7QvKs4r9",
  "key19": "5ghHEWGNsBuVxrQgBPTi7212AZdBkQsic5nFYegpMe8pLUcx19gB4PjBfdKxfoiAeNy2QDZceginxs8mr6jJsrMa",
  "key20": "PCdGEgd5cuEeV3adgs1N2w7RGWyqe8AWDdrMx2t7sxvxmkUJuLGdLbkrDszW8eZXZR27pQ4GFGDviRAef9dmwYs",
  "key21": "5N9jEn4tMs8VWCPLZyE1H4TpBUyWjWDLgaoxBrR81ch1Kzfh7drsTP1cgCB6v1ZRh8E2pWyQ8RRgwFvQXgB3w6Ei",
  "key22": "GdLWfvvxR8Tj1ggwW97DvgeXWb72F2F6FZdMvVgjd8F8TrYerhcABhB9HU5v76eMYD59Un9Vz63dSyvSwSsxVXS",
  "key23": "2v1ei2z7UtMmp13DP5KkTLGCQKPBLKGYH4Bzs6ZmqMuWK7GWDbyJZGafiCE5VPeb5VfoDocJf8cU1y2wYDQHF5EP",
  "key24": "2HEEe5vbMCYQPimt57agECV7cGgdYUBw8Ltspq8LprZsUWd46orAifztH6PEQZRYaNsVEqy54dJxQNEDtjqpeobu",
  "key25": "BdnnjSweKSimteo8cTARUXAN17veSsSySeNa2ENdKTe5h9r7DzciSAX2No3RMgBbV4Uc4xLd5mrqsCBX9C7QmZd",
  "key26": "5kev2SMzXeMNnQTcXC5hDr8mUQDa6cxcph9y5ZstpD4tAk7p9VyBezpNmVTnQmKrwy2qM5aurNVyZToXE6Ad4NgY"
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
