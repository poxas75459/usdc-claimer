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
    "26jQ2poxoHTY29Xm6N7GzoPW7s8J9d9sqbP6UeWwfecq3iHnGzgJtRPpxMFGQvvEqEQ9tzzh8shwj9pemBG5g83k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X5e6dqKt1PDwx1e34GPzjfV7sawZNVcNHPqFPvsXDZC5TeJCznnifWR9w1kuxknaFF9HzYRdysXJoCS5JsDeJfw",
  "key1": "3GduQDtfM2Yy6KahEmvfYBBVE9zSiNvaFqzFWNVcgrcANVPp24Zw7tR3JgimuQuSCRcs89Z6s3uYaBxkv9jcsXD2",
  "key2": "33ZfdvAxzYKTTrB5kVq93qK5seisYXmxmJZyDTpjHXJBQZWiNfttykXAgP4EGn377UmszebhPUiAL36fsBw9Zoix",
  "key3": "VNwNqRKJJ3EbfF4985QMuCuiQbvFisJnz4uXAxR3F9nPiPD4DEH5q6YNoodNgnVM9T2KN8zg5PZDbxGTwXRHWs7",
  "key4": "4N9Ys2hSsix38gVeY38kd5ftpe1pRe4qQcYb8xJgHHroi8N2pSkDNbG9fnAYggK9TyVvnLfCvLFsEZ9b4Yxinf5K",
  "key5": "SsA4FmKrzrVwbcAXEg2qQiTWw613PYJ1wSfHk9NHXbrpvZH3QtNZuLDxtQ4vTpTLX81QsgPLrq4kzUoDoMMZ6m8",
  "key6": "NhiQy4QsMQgsdvAXUjS6rqo9TDFVaMBfpom9yt9PnSPXmXbMzwkK94BWCe2wDxyGybx4s5FFbHVYL4MiYW1JM7W",
  "key7": "mMoyUVEMGamLuL2zpNW5j8URXiRdkAWSmEAMz1VvExyL3pcs4Tf6SWa9WueLMsKjFATDtCse8DFArBdgR9YbMSC",
  "key8": "3bjxc9g7sHwohE8k7sgRZGBU94TcZksqm8qoQ6PiuChcZnZyHsuaVnjYw8MjNJvsHhrRRnYdkFUW6XwR6xmdCUTj",
  "key9": "2dmMZjrsphsqaHke8b1vhsCzt7TqQoQcDjyYnmoGEDs5FxmbR3gRaUXT2XLHss5foJkAqwCP8DYyjH2uwF4e6te5",
  "key10": "2kFWaiFhc9RLXbonHAUHNtQbK7dRJCWt9wU1ATZyh6kEbcus7kgaB4tNCMiNnkDekTTvbvFEFV3unaFeumq8m8vM",
  "key11": "2guLFbewFW13zAofhoZrfhMWbnqkqhCfTPYWpKi3zfsvi9cUy5V9YjimtMTA26WLY3ekHtVm6C31Ecb3gxponFVN",
  "key12": "3psb6EEUqPPg6r6nqfByRrMy1mKmX8ASSs3nEUyJdKqCWvJRKEzUzuyLXuxgCosZRhK6A9ZwdQ4qp8RSAPvNrrRo",
  "key13": "5AiaB7GJGmjXfWEhfVp8aDHczwSo83ZvwnNHmv6MXYcTh55oByTaBcC4xkTMsr6Q89FX4W4DXJjCaKu9FejdWjvh",
  "key14": "5XAWQdc2gpw4XK8bFCvsRTxA3XLRQukcdszXDjt4BPvmMvHdhu9yKVAqDLxBpw6EpA7nBp5RCJePbJtzn1r2NTWo",
  "key15": "5gdJJYXoViTVVAPQwrzRBLowHzLiHHjQ8RCD8crUiFEmt5ZpZhDge3XgTRTdah7WRQRNH8v5D3PA4abErXLGbKEK",
  "key16": "5fzk1RDqBoRSckGzwjZhHKASanCiKm9b9S2eSpAK3VZ7Cvma9G92Lwm8namH6dvNQPZNeFyrnEpW9oHu48pohiHh",
  "key17": "2aGb4sG5nk8sKPDHm3AD4FTSoJbNsqBEw5BrefLSYpr5Xbhf1bV32yZHAU9EjAzTvj9TYN74Ar6Y2wZNTnt9Ke8F",
  "key18": "2R43vPR1U2LMKjhVtSwAYsnaBtj7gjmgPRtyWyxAuHNs627xAAVrrZ5H9C7m5cbNrvbwLhj6xeDTKKZ9mizHbn8u",
  "key19": "59QUxumbQuGn2Dc4XMtmskmZkvCSKrncyPP4a1nY6h4qehygwnejQguqaPrfLGATuqeDFv3ad51KnuASNWJoNWd",
  "key20": "4b168xAV7o1BjYA7mdZWthRnSBJANHETdHsmz4vWYz3FUd51ZvjowUNkRjeE6K5AxDyriS87szWVR6ShxWRFL2JN",
  "key21": "66mh92kuoq5QE4zYrsXVWxjSo8WzjHZkKkqeMLpduvAmLtYDypxKB8r7bL9yxAei4P6YrEEWRfmRbpceJsdgSeg2",
  "key22": "4fwRSf8L3LWGHSQmxCEMwDpNCcpD1QmxPo1TTunBunbX6pM2xcTL5nLxXGjprMYC5ee1yGz41FN5tHECVQ7DB8TJ",
  "key23": "WUtZNTPU69Cu8wPxnjCoxoxyPghHFBXxHWtPDU17HPDB3dt4WrECT9jSYMDHMtjFWsF5hoSrPHYh2D6QQZcWk4J",
  "key24": "kePvZTHmj9Pz47gi9Dq6GDNQQuZV8JHcn8NsfNYgiKyyH1NwiVeUtFN7HnucPX1iy2omR4yoemzMGbBWvN6e2Wb",
  "key25": "4rELqg1Tsb8oh1JtGQ6Zo7DFbSToZna1cG9mG9738YzWCdrKK9ReKPg1ebbB5erMsA4ZY1YpPRn5P45jqiNr33Bs",
  "key26": "3wtZN7WXrqMgqNALt2unaJ4acq7beHnNCeDGNGGaR1EiudZYToWg966BsqL4bk11xhZGguwSBgtTNKiCoUVMJD14",
  "key27": "tHyTzB1RaKUZqz3KVfj5UznCgzFyUW3dEfk1mRdBRFsEoUrLqqFvc1dW9wY6EgiQTEtAEBusQmav6VDMWRYFQg3",
  "key28": "3xrHaVDDXFCyQdFfQWBG1FpsbqCjYm3ZTasLYw1P2YZcrrveVGKqx5ezPRZoyxyxqH21dPNsSEKruELDnLyUq2T5",
  "key29": "cbGhZZAQtdL1jsogdvDM9GWYMTUiWvBLyLQY2wMLSFubgw5d4E7BUjoTpud2w7ecu6uS6ztLheAewU6ZYeNLo5Q"
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
