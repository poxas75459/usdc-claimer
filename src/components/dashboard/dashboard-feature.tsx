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
    "QHduMoZHKyF6q4xapy1VPz9u2FvSECAiokjGGjXLnmcpfiwtGGjNHgRuk6s4DhLDygjv33JkVRk9vAmH1jPkBcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stoANMDcJBXrxU9yCUPdpVgS9bjG1Gn71KRYQM2MeBY56jiMHXc52BCdWjtF5eW5tUMxrGV7ndW3c4HuMFyKxe8",
  "key1": "2PQ5VnJe6MMoJu2djfRg8TdTvgtEXKABiUFkuPeDufdpbsKYRhKRrVxwUGrnUTRo8Rzxsvvk2yng3Ve47iK1YUGY",
  "key2": "5nifjw7LFfWUfRi8gA1LXjEdziDcCSSHxwF5iGyYbPX3UXchBKv5H2G8DkLMxzQWuTiHXmrHUxy6uoCx7HqBbPUZ",
  "key3": "2RqV1ZDFLBCrY4GWQJFnQzJfWw3pr7U9ggbGRU5fjcENatovvemVPXLbjDcttemSiJ8TkfwKpFvd13co2JAaMfHm",
  "key4": "5ms7cuG2eUyMfdHB2hZDSrcnPr7PQAVHgS2aUn7FbZrchD5HgX2msrfvxmxY5u53jMPyAZTzhumrS9xWXKkqGHki",
  "key5": "srrbXKCsn2kye66aLPrFKkgXEnEzJdvqPMyXw8BigGQv7rkVCs6uDyMvqthYpLdW8anT6hJnNzzrc9FvJtH1PUE",
  "key6": "3wRs8ZTnd7V77BXmEmQzb61PvjbHfPAYK9SNfb9iJYQKDwryReBDSs2N21ejNWvwBN8MJK3AvPNb3kEjsBheRwDC",
  "key7": "n4BS9PK9yM4qHzxTZNttf55pwYtFE4c9yseQjqqLXNnHPKmJEUfB44Ua17YtNk7RZYUrWKWNhwo2T8C2u6Ag62F",
  "key8": "2JsxSBCczdiKDPdPEsWxNZEGbn7UBAsYQZrbB42Had2Sp27DAQ4hULwCar6LxAak9syHuJdHxtijjQd4Lc7XwLRD",
  "key9": "2bQ4aUZRyY9UvZhYb5q4R3ZKBx3ayYkySihLwVm87sRprhnz5LHSfB6QRe3RVmcr3PGFFC9YWRJ8bAdiVp1ADB7z",
  "key10": "3xq6zop1TogvG1D6qAk1Scb2BoyjFRBcoT9auvQ5C9UPphrHNUDgiWxqFNcHmNLBqHegmnkhdpbc5bqkKKZADVwx",
  "key11": "2ckDJWvuHXvFsnxVZJf4AXWuZxjYXRjyWYzKvZjdJuSAmTxED2fjQdFuxTRGnWvSZddNR4YhSxLPJeavoYcV6Yxm",
  "key12": "4fe62pfF5RarwPo1h6rGACumJcP7nA7LdSbgk7Cb77pfNEHxD2MyPS8w3YRupj9tnmV59mkKcggbzRBmWyxTZkHu",
  "key13": "3mmds2hvbLQvBxbZQbiGEiPeHoujWaSaVZ5HtJZXP7PEze4vfAynCxGHo9VdZUdApZUSGNgjuhMkMLQydVTwykrT",
  "key14": "35SjnQDZKeWRuRyYtRkFPp5gCKEzJjJfYtaYLuxsbBDXqV9FUZGDvVfNCSQRCmCubXnkJyoEqvaMigrYCr2UaXxQ",
  "key15": "5YBCz8Vq9jxQ78aTTDyFRyKJ4CXsq2br76VVhgjDjGyBXGXSW8xkoYnKGazWFahrnPWvVhQjeK78f9stapgRxHS1",
  "key16": "243ukraioQ67Pnys5ueQSCPz7kMcn65HU4rRN9ttsXK7iCVkQpCtqCLpDL3zBW2EnKbiuz6DfQhTe5e5KQ8oRdYf",
  "key17": "3Pq3i8rn6T47d44wV4jMUQMs6vnFDDQWDZjhNnrDVUMe1nVbHoNTLkkphwDBY6CC2PnMyCKUAzLRBWrFD3okrVXh",
  "key18": "5VdqN2L2DDB7NxE34jV4jqH1cvfg1Zibk2ern1ki53g57bfpYGJC4WkyxEoZ2zniHaerBfydwtNivcdt2FPoeQA4",
  "key19": "2BHF3tFD5e7ww5KBnc6sLSs5Krw2QgSiVzYgqpZ28ZMi27gYd5RjRzp2cLJR1Mt8gSL6MPamQV1GRQtSjtdEmPLC",
  "key20": "24WLbGwKrf753VTgrKRWxoT4Vt4zy4hzjsQtW3xRqmphYMEAZgs8r143EquMztKVF3qE44Fe8Vv6f1qdL8EMjfND",
  "key21": "3djwymefmDbHRkYNK7zXPBxo2o6vGF2jNmNTLYch5BVrpPEbqzTZwY4cotNydZeyHHgWr4WRD2ZYJv5YEhgxy7pM",
  "key22": "5MhMGDb8ZGdRnnHz5Z1NzyHXdJR1wQTWeKphMAQZf5Afm4VFhdKWfaMhNFobDjqdohTAimbbiyEk6hoikW2RMYtd",
  "key23": "4GkVFW2kiFoLhB8brB917E4owgBLtPzFHgsQDGZBLhbhER3rNS3ZTJQtwxYQnRDMYRZeog2PgDKroGffCumQtCWu",
  "key24": "3BUdWrQKByZVvHyzeZ9xJ49JLMVnnQhBQB7dQWzto86SCJcvv8raxUECkMHy4rqLYxy3fZjNCBNeVh1mk7VBfYMq",
  "key25": "24VCoX1b7jFDYpaoEjtTp6ZFQbawAodJhtCFgHGVPks1Bq7Shr2ztyYBpF4vzNRkk4cFs6jxdU3no1H662Gb7hZH",
  "key26": "kfxFnPyGcuGYCjKCDyZhzchKVzaZYZAczps88dRubx5ShZ4RHBcBL6FmJZjtkfUhjRRCb5r88x4jHUGEWM6CcvU",
  "key27": "5CUQfxAQ7MZLkudNCUWXUodvcvJGUcZMpwzTKvgNFzvfbGg9jMs7yH5UP29pncidEsBEXomjK4G5GegvzLbCszjQ",
  "key28": "56Djv5RtaxPGQx4vicAVYa8F5BRsqKqq1VUYPD25rwU1eRuhZv4z2z3VE8SFFZ1AaDcPNMSMw6aZyi6w1MLujFiY"
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
