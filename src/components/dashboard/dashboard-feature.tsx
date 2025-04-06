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
    "2RHZ1PK2CW4SfXnhEq3UzJdycJgTGqYTNCMh3GkiTN1fnaFAicDo3YDRcdFwxHMBt1PkKBiJ6xmpFe3qvp42EKDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ce2u3K43HJ1PZd4LSbQz9hjy2V4oa9vsCeyvmJVZA95U8dSnSc9QJvNqsq1YvMDXNXmUyFS4c3R76ZAe4XPvaSU",
  "key1": "45spWsTocpynWM5n6TF8e5rsGYGsDmYenZ3r1BTGzEH3QBx6HGFerGr9FFXEuhYgtrDm92QKiQwFRAZQBcXk5nan",
  "key2": "5XRe3P9jPKv52qGpJjrk5hJ6tB3qNvy6qGYR6HidcEJpnjNjyF3JUPgU4r59Wzgxh4jY4v2gfdjfooHVEtiLM8yJ",
  "key3": "61m3Wq2Gx6UTn81ueEk1jE81ScJN6gQDh6k73T2d1Ja1pMwojpAPyZLzCCpqFzXcKTNcAT11Fqq9sY3rNSENLP5B",
  "key4": "3xiJmvttWaByXVHZX381LZNApgVPfVLioqHgwAsFuoJkkXghRfhia8ZW81bpSvStHga9PgPzCNy6yzydccKTMBjJ",
  "key5": "55NcWDtWYb6H7usTh5Sg731SLUjam2wFr6xWgY2tTssG1nSCryP1C9QmNei8gRt5St9gL5CduQa5Sfd3J2qg4W6Y",
  "key6": "5VmHjS2chhzex6z4vk2Csd8CqLAuvysRVX7kHnF3WDQjAKTri4QBPrJWgZb8hWh2pmmsGqpbD63NJraak1CFNyeF",
  "key7": "5xJuxKsxUUWiriV9khGAPTqnZUAEwtsADTCTDw5HftPG5iBYnimcPUDNSadujpkNnEzv4cyVVZMgUdVXGydgsgYq",
  "key8": "5ZtG9i24hjTSGCrkYjnTE84tYTG3YJdn3xpUv5dXRo3ZPqwgG18FMRx1jryCSEaLLP5WrAJGvv39q3rW99HYxtVr",
  "key9": "5tSG2ebsyEEpfUHKjCNCpaqaKhiVGR3FuMZyJCTo8E355m7bg9jRVNRgcA69LNuq6QE6QUa3ePnuLioxgDC9iFAW",
  "key10": "2w6krnMgpTx73z3SDRzwbBQVTjh1pa12b5nVUaMcbFVpMPhNp12FMb5TQigAJaW7uqciMZDnTwqUnL62wyWrFDVD",
  "key11": "3dT1enfMDA6aJSn4wYnNiMx6DF4ZBSrK1h5Bp7mLFs2h1vaF6KTv9mpEDEnW6rHGGiaUeyPKgKre5FFe8xVBbkfX",
  "key12": "5vECMWWEP3sFizCQu8JVY4uierx7g1DhXdsrAmXLjyuX5S1tC4t9eD235wEa2w4ADdopmYGR5Eyj2eLkujUKcg4t",
  "key13": "2T12KEh2Bb2XH43wuz7ZeFogGBfY7LfMbYPrE1uVk9MbcFSLq1vZRajATAqsu7RcyW1a1JdBHsjWvEoAx9Bij6fT",
  "key14": "4RwpduHV7r26YrrkQmrDkLjnpdQ7B7GQHCFZkMVoenDPKZHQhkifF3LE9Nz5pTdz5A8iC2Z3j1EtBhAJo9jZuNmu",
  "key15": "4Y8TSQ6cLkvioqo8RUxkHTcpm3hMmyShgZgrVXjkoFCU8NMkNVGe8ssZAennWHFq6vy5i3Y3QVJWD7CJL2a6wKPj",
  "key16": "4L8hnKrYRQbgNDHsKgkDPeB2VrmgNy3rhSzdKhJ3tnims6DxPMYpYNjwVkcAJyj3DS1SZoCFr5RgYKzW47xq4UrX",
  "key17": "4S2veuzwvkad5XxKd9AXR2mewAwVbLtfmTnfWE3WYorguPrhsxcgxFHY1145eh3NNwwDtkt1P5rv4SKfkbkfrfoz",
  "key18": "52RphTsb1C4nwi9oECbaS9fYkZfLXfduixbrrX4YVpZ3iNhmq2odTwbryDZhKjfBqMA3BWyX3FLrZcbsnk2VRymN",
  "key19": "MJcchwmfUqrs15oGsLcVtMNZKBwBvyz244XtCV8i4Zk7DwCwwVu3zryChwK96EcWK9C2ZiSfgQTfwoc9EBbKfX7",
  "key20": "K98odUYUokWhNzskQrCKPTzexELRSmAsZ8kLoqxYX9EoQMsQG9jhN4twnHrzjy9ZnBhu4GJ5LQ7WVzTszaFEWFB",
  "key21": "3Z1sGmsnfBZ3ChsoLhgsCWGH1RUrm8NVQNhQuXSptVvArpJ72HFdDUzubnGAypMMFPULDXZHkbAFcc4HCm5YkkJn",
  "key22": "5RN45RmXpo7kFQGFY5KcpXZaGAGhCjKMsRcMV8pGjLw7KNfpPPKrPGHnEjwjKQVHi6pFJP2c1MV8NMKqYSivpnp8",
  "key23": "454MMUsPxqqRdV3yhQqyrXCKxECt4BprBaMkqH6YTj9gVFsyckm4jGifqhgJpQhJzML6Qd2zTw764JADPx4TD6dc",
  "key24": "4hNMSH59Qufgk8PE6M6DY2TUjTQLzTGT7G9rDJ8gHrr1PBNwWNRJ5H1gZq6ZPtFkCjaPk2MdREHR6bpNWsCwsNgG",
  "key25": "5HedMBZQhEPcGYRS1VKsZpQimpfmdixydx5vhp7NCvej73SqvkFGyDpz52VqAhhxwh3JEXBNWTHjuZwwi9EnPPsc",
  "key26": "2rcovpgdxDNmMzBvdaVUo3GGQgocq8k2fo8J144SMu1gDvotUAp2nXWR9H82QpqMQr63ynPLutcTYui68p9G98HF"
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
