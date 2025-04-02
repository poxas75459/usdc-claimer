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
    "39YXGXtFuXKjZXoZTWhmEKDaAyZdGjj3BtMoUJRMSbiyUhKnLZLJZsSAkvz6FGdKBakPjFiXDvg2UmPVUXy5aNuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgZK2dqCyeckbP3uHgtS5s68UnQYzPYW7egDzJJCidy1xUsNth79t68Giai9zcdnwLU4yUvEgCHia5aomRWK3vz",
  "key1": "8zTNzcHdJeAc2ZYM5PBt8g1UzF8W48Qr661zeP7MTaccs2xMPahKf4NtU9JtN6ogUE1y3x7sGdzSPk6aJr4xFQn",
  "key2": "3hRkDnrGRo1xBAVQYzWD4WeUTmu5FGKHudZFTKhTa3w5Gnsg4nDkvU1AxuCLpte5i8EUh3nbj8m78RtrFmrN1RsM",
  "key3": "3RmATcoN6SuEeVAybuHPtdjT6PUri63gfedMMgoTzcWA3nSSwKhaCRXLwmaFqZ1TQbDzCtY9xobQpHJjueRBhpvt",
  "key4": "5oAPdvP92JnrHaJycpZAVFLkWEez4gL22KJPNnyF59MPswqSs4NG7gXEjw1NkmHmo7bcEwygxnMGKf2FmFxWGn3K",
  "key5": "5CUTbBapcaDUzM8h5LrBNdD6gfoMDnBuM18b2owqDqbmwTrTQmqibKN8HEKCoDWwBsgNcoeLwdfzVQN3R9d6upcp",
  "key6": "3krtgobQVbiM8BoG6wmc85D5hoE57884UZi9y9FHkfAHPWJzHxRp3gcQbwPVaGPftPz6Egx9GPdmXANBxymL7BDD",
  "key7": "5AyJrpAzwDHPLvifG4L7buz3vVM9hancFBgnnJ1vUYmd5GvhZWnYpzqFFy1LhYrM3KzJ5Bmd7Mm1QHFtreXPJB1Z",
  "key8": "2KS5gbQV5XmYGC6VhQ9Q82tPbT3wp6bsZnehdfPrnCH1kk46LNXLH2esFxijfTCcL5UhPXC9osVXpZUsoctNL3Cv",
  "key9": "2vpXVvvEt25gFPrKNoQTeMGWa8aQG93ewAKqRueT9JPZqEkmpJgFgaw7T8LqMzExdJZKqQMo44Td461m255zwZn7",
  "key10": "2FgAYqkjJjqYD4Xtoe93ikyM88ii3tTTVgb7znEX8xUtJ1HpqAJmR7ZyEx8pECBDo4YDgxHC2g7RxmG3hzhzUsHZ",
  "key11": "5RBJ9jXoafW7s6c9GpvQ8mWvmq6Kdx99sg65V7PyBWwraXiazEVuJPZEMkfn1jVGX64npaqZEHLUtq67YLZfrhx2",
  "key12": "2zWtm36YEEHd2CjnRERTPcuLKQHVzKVj7mHt9RTki9DpCheJq59wVXRGzTkqozZ41KL2VaVnEMQX9N25gWTArPyM",
  "key13": "29GAiq1EkXpSjFEU7ZrA5j2e4V5R9VUie9ULdwEH6NLBLEeyzk8kv8SZzgSUEHxUJuR42qb6K71aNKDYRBqerq1M",
  "key14": "55VYkymkMMM1L3L7k648FxsSyuAWFjVYN43JupFEJVqkWMTvrUNuHUX9fhPX1wSpmf3RUEEscqCpNRCwtjoPbUzP",
  "key15": "52uc9Brau9xMVM4kz2LZAYsyMwESMFVRCUpeaoG61YD9DBkR7oGoWpS3zGY6V7meAmEkDnKA1ABnWiVSs6nWrPyG",
  "key16": "jrrQ63yJoc5s2xF9vrt7AU8XS359qW44R7L6ANx5RemdnyJBS3mLeuwM3bjp8R3jaZ4vrJ7Chiua3JqACDeLetz",
  "key17": "4rXT8RaTmMvN9SHYLrpif2brwm9XTfJvrAMwQLqvxRPWGjSBMYdWGzVnXjyQBM565BQbfsBmYecM3sjuxGYGKNCo",
  "key18": "54DADtFFzAdQnNVzfSuHXSTJAK5ArCKCBJT792rZye1VnrZEYKm8khHZTLZnP1KBLodUiScFz6uzMGDcouYenLKH",
  "key19": "5Fu8tAs4ZXoVdnKGT4ei4GQuzaetMNGbD3J98zVF2RQxvz9fFN7ytZUWnhu4mE91FeUTYJL534MLp8JfA5td5TqW",
  "key20": "45X8rvSGE2C1Yh68iC5XwiDkp93xHtRL5A2vzx1hQExwgPfWrxQCi8qMPgz7BcbJSUo7vvUfG9Jab5eFTspCo985",
  "key21": "65JbZEnEH9q1vjK4apyxi8n5CjeHUpfxr4SajGoXTYJWDbnVP8QnBh6nrF1EHDWAoTnDPuZj1k3fJrS21nhhqWS4",
  "key22": "3JCgocQrymEGRxrhtykSeSv8W9vVeNNoHHZ34H1edFmCKRQFtYtQuC9DKBVL2EmczuAasCXrifnktMKXEeRECfFS",
  "key23": "3V6byTquKkvwH5dMgiEaCSon7H9CwBoA3DGaB7U2jZdL15SXSbk91F3an4J9fPPJgWYnWgta9A1SZYgTcSjY7c1i",
  "key24": "5oJtY4S1AqtomDe5v6j7DANvqj6GqK9uhV5H8uaShp2QxqzPQfDGgUppRoRC7zi9w4Ckj3fabxuyHef9q1DWYFJp",
  "key25": "5cBi9mZbvZcTd5B3VQ7spvyJSJbLULhkvPDC4Y4Bfho9UjopbZK4TnYMiB752E93zYtUQhN8SAu8BiSca4HQHVvo",
  "key26": "2LkVNvCWXbPU2SGN2hc1RGVwJwaNEfbsrFPfjCffZKCMshJ8Ms5w51MbXyjprLx6vv1BmbQaBTjGtTbEpkFQDtWi",
  "key27": "5qBEDy5yS5iRFRDMKupUymVJmvcTv4s6XhdawZfq5ddEK1RJEwn3iHebPuvhnhnv6W4q7TRHPQLUsrx5dP4QAMRX",
  "key28": "49rWdHKjTmcMTUnmsreGF8MU5mtXTfs8Y9drnQk5povQU26299kPBRbjcdQXm5PmccAuWxiGRkP75shf9UpGv3Z5"
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
