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
    "3yWfsTXkUVPTWwDgQsrB8DVPNw7RwhxDDFxUZhsMkhwfKt4dRH7Y47cqjFjHfkgmejHheUtPStDNmy7xrXkRHff6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xc1Ser3frR4zEkckGGy2iPoMpyAiWtsJU1vuR9V1uPgfpDxoTMdUEyeTJHLepJduCaubXTFnbzcsxG1X5jGFRmP",
  "key1": "7zgGVgVzmVW5ixN6pxWgydiW2YB6BV7H6ia1EWUPExcQH4m3b9Z6DiK9svZRaPNt1ggjwDPrpEsUU32AeLRuQEE",
  "key2": "22YzFxBm2cNRqkzMws7iXCwkFWVamRRNytfpqjqPyFPhfUB9dwfVQ6EyQp955oPYCvz5BrGQRB8o6rv7dVD1YKBd",
  "key3": "3fveem5e7fo7XefE43sfCrQggrVqoFdjDtfzTKN7z6WKLUPjEPsiJXRDPgDhyRaoRFqvYJ6DgfVinacQEj9T5fYp",
  "key4": "4jhbJK6sghfL9NtcsPzFZc1nmHwL3hhpqo8aCdHasCGgLea3SzyrQS3jiqhsenmSnf3S6FfkNiScaxx459FRJBU6",
  "key5": "5xw3RjumFFtWNqtC7K73onbmmFwCwAnUj2muXapWMWxpbTZu3rYH1YEw3cYVqEmeiUKgumkeuyHZfVPXYRcMgabN",
  "key6": "tgbEzUwrKF5u5qoiTvCAhEp4UgEeiBim9qU6dMqTggN9E8PhEGPJKCj3mpYmK7wTgMCbScwoHKoJNyyPtXJHBM2",
  "key7": "2FeqRujmAtkGVcSQnzoYca57pmBU7NrspKVfH6xJwE7a879LJKQah4ojGdjZs9rKPVhAtpfJE4VzUSCcVa3owZHU",
  "key8": "uwwBvb2Erwi3FK5CdFHqxHusuRrP4txgrMauji9uR18vzcXrHt65zzEhDoWVAmxo4ceBs8nDKNJkpuWEkk4Qvwg",
  "key9": "WYKBVtBpeJCiYmCAhq85nwwjKgHdR14EWuZnSTUSwkmEUDUvHv2WQvoujhJw4aztxP8yd2mJbXxCTbp3BYqGjjF",
  "key10": "3LvZzGfFQKn5EQEzn9MXA8KGnbQZw9RpMtBdZYiYKCQvyaXyJ4ApLACheYVUvgdc9UBin9hKTqd7cUiDLHiVH1Gv",
  "key11": "2ZaagXcM11V9GbALXSXocwyy6VRvfqoDScesrU7g2S8vrKRYjsSRAitEJ2VWTia79nM2MakKFyPFtECg3CQKy7PD",
  "key12": "4BGDTbKSxk9GGc1XyJ7d7YDxBhEcSTBWpRWrjFYgwcr6xT9EDPJhwsZGuQ61QJSqABXxY5SThqGHxpFnPzMuBrL9",
  "key13": "4cEmzciQV9kUNfpJKTafx5VPNMnoHFQEHMfaC311xz26os2VvuaCDsJoCgBXV39JsgK7ArxwLfyEGTrD7fqUwoHW",
  "key14": "5f88r9VaAm2Dvsx6hDz3JtrPA8SVNN9GU4RHjYqoJUUYJthyK4JYpRNffkczYUSNoAAfQF3Vms5qrk3CiehGikAH",
  "key15": "4odLpxd6L89nMNMPnVA9n4Hp5xfrei5jdoSyGi2Y5aKTTPVPWCfBAfuXatks5rF1MQvZv8JQjCmmdR1uB1ek48rS",
  "key16": "4bxm9hFWf53xmJrbZmRtvikp68au9pWTh2WyWsde4zb1RY77xbCT2Qzhxeb1HMEf6i5G9od7xdfDTgvLGRyk45SE",
  "key17": "4oxDzY1kd6mnqVG6HU5jjeHAnC34o6BrstUEpZ7rJKp9CyDypiZJrG7JHuG2S7tfn9GK4hVLXT6SVkxSRRSjeLmh",
  "key18": "4Fjhwau9J6aCi6TEWhURoKejWcUkXDEAxE9FfLijUAK79XgTyr11tTwMguCpmNiq8yncVuwHx4Qt3mwVnR6hxcYV",
  "key19": "2QUis5nJ32im3nfoAvVMFEhCbpbWi3K8den3kbNqo4FPobifceAGyGHZEJMA9u2WB1gdF4qDxKv9yXvUqReXK3yC",
  "key20": "LY2yFapJGJsUAy1xm7S6aBPr3tqt3PNt8tCCbes9nDkWfK3eWXW9VS6pebHb7Mm16EcDNuhddLmuvuLYUBMDnp9",
  "key21": "29N22DLteFVFdhNVsMFsM9yXU96Eb8DRgfSW9aa3TULCzhWcbVNALb9wzZRVibTGAkK3NEMmTAAMqJEzjmp4BEQZ",
  "key22": "3JV93q5Gn4jgJSK4X8TBareiv3HY5v5hJhoAWdR4vhNJ8SDL3TxQVKMZKmbcC4PbrJAk8jM95EXbnn2A1pmX4Ap3",
  "key23": "3RQqJPxNqSUXGAPU7SFgynDuK7hwo95sQ5ZyStNNL1SZ592dqhbRUdZWCog3owyxsV9ncHZetv7g8oqE33RMVCgy",
  "key24": "2B9M4PbZiGXMzqqxr3jrcMJhsBMyY7Z2TcaBAHu6ZyhF2sicZJy4bEXaum3vMuLQxrT5p71E4WqHvz8pMoKPJr3k"
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
