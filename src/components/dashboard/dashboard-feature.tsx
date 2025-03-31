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
    "JJcgegWi86wD8nbReYB7BELr5PVQpyHxXev8ZtQD2XN5cXwbyg3AHRwLhdgh8J5LKs4yuDipgMvtBhcWUzD7AvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoF7ddfUVaET7Ladz1gTSiva8a8fpHWgRFDm1toF4H4wys5nVg9onE7curfB8LaP2XJCZLMvzXYiPjZ64g9A1M7",
  "key1": "4XTFccdtjZWeAcRdTeK7dNszdHxrTDVW71ygeiP7UADj8e34uSm8CRwtRWteNjJUDN8xxiMZR3eKWRAL5KjoxUPR",
  "key2": "3i2oMoX89VRAPyi4jzykLG8uUz6XJT38qDa4MHkPXhZdthej99z4zp1PjvYW97DnDH8LFARw9dK6HWVAfz2mdSs5",
  "key3": "2HbYJDc1XwVAfiTCmKVU5v3yLpxitEzWxAXZEAG6pcUeJAfhSMbDJbsxVUUVRWoms3kJGjNbhuCcJRpHr1GPZa5t",
  "key4": "5Uw3HkanLgei4chUjmqUundE49HHKZjXKHhCRZ8XemSz6aVjce5vN8S4JQXsLz5FMy1i6Unm1Zvd9vQfdTuHWNmo",
  "key5": "4WrDVLzKoUxAw5JVbtGm8fBtwP2u67GnFLb7qBK331yEmMFwPZGpDSUGRJ5acSW3GWBXY35XjUd2dzAqjdfcaBPu",
  "key6": "38kGTzbGXxJHZAnjoSiDyPqF6JJCtHvgX3aCXRCEBFXyZ2KhbDLxEZM9ZKVXSyhRupATML3Tt1cnc1E4bMcTvkEE",
  "key7": "57BFWkeVkgNc3nso8JkgM9BBprGXUqeJTJ4GRYpqS9YVgfw7A3xryJPteEGPp8rpff3vMRa4kLeMSZ9eeKBCY13j",
  "key8": "4Fb1cNdUnkd6otPsQubkEtDGuEYrxe4GBtR9uaQVN6YADBxjujGkpFRm3jzQXVvdRdEaC9zheArRcDAu8uCKPeM4",
  "key9": "5G5S9Gfbvc7pvkMGL1jA5zUUfX7R8fckmTHiWaszdcT5T7xCVySLz9J6MH8RhB9UsqM5Yw4pBZWZqbEwQkdrQzNJ",
  "key10": "4BcT9C9zY7GCRUz1xArDGsM9YRD6DrXqEgH8dkXkfCB3a7Sgi9KkpmRF8jV7ZYYaYkoTxCunuQX3Taa7cgLuSG83",
  "key11": "aNWPB3pbhZK1nPNbQwqWvKgHTXLgkNTarz5K1yc3VEf1wjNAqExkxqwkLRqtAoGDm2iuvg5C1F4gyBD25KPdwxh",
  "key12": "3tENCRG7UoxzPN9JgkRmcbS583QXvgcyvMkycwwSUVyWYZyTeQiqSFqf95ECrJ3ha4ydExyghChvephAkMZqNhqm",
  "key13": "RbkGF1iCktpgbPiaLi1yTfB9bW8xCfSY3b1a5oW9MZmFfy1qp7qsd8D579DKm2996SZerA8G9AYkCwKrALfRap9",
  "key14": "338vHaMY2QFXzbbryujdjDz18vWMZop9CQF7hzquwVPpvtXfM96fAGz7yKdG4X3VwCwiFHLYyLMwaDgQhBqsA3Kr",
  "key15": "5BCSfi2B2X9Yk6kjaQuYRNDY7yBQVgqjL2gs4mvdt3QiyBogBxNHVPqPu3yG2fENX1UbVusPsy3QBtj8JJDqZjtG",
  "key16": "2VtNpWvZjXUCS1fnRp49ju5gnbeXEcTaNWYncBhwiPiozuNfKJZ397XYwBG8Bp8N8Qg9H8Uf4Z8rW7uZTJVnu24M",
  "key17": "3QDcMSfUwo5Bo47y2xmBU6puN8RSQYWBT9GPCzhjczUYDDcWD8r3bVAGVmsqn6AN2DS9xhfMw3xra3NAqDLpbfDz",
  "key18": "3fvrv76YkN826oaMUQQdXvAHNqCCkAUYL3oo7zHw1hFEeV6vfKzsGkWwRLxXeXE7tyEz2VVRiaR9VHsd4w1sVK6e",
  "key19": "2osfp9n8Paoze57gnA6yMZe8ToNkgmXwZET87aFVyxXs5HDaLbW5kUWbhfjYijx7k4EX2dG2Thh9DvQMEifEgJmh",
  "key20": "2qtvVrt7Hxr7TgD71QnS96rwRYDFi9H8XXr5YTTNeL8EdXgtSuNYmA7oqXzjg4L4ueDU932jhNvjHQpzn1F1iPd",
  "key21": "NJmVPnJiUwKG6FyVNdqkHDfa4veCearb1kpgpngCbGVQQE7pfSzEVdkxaLkieRw7mzQ8aWvxgCbJuzSLJbrbVeu",
  "key22": "4LqX14kg7dfajjeiy6tQmoWmEPsEytjynrXhCGtnTjPrTBK47LcPpE3sE7bFRGpytv95nx2GSzBimP9XKuLPBKRg",
  "key23": "5W9bTpX7PSBUBCpjFdgnNGPGZuY6e8kkz13rGns8YN6q64GXGekAqVHW7ZYYfFGVgj79xnGXoKp7Jkx7SBMe2XwZ",
  "key24": "31GVWtqPKdNHPyKgwpwhwdPSEjoUkR5SkYqrWq7MubRJrkftUro7tKJuDQht3XRnZ7kG8hhSku624RdobHBHmyag",
  "key25": "2GdvNDsVtRyKwkFG1DzGAwLHyweDu9UbB2wxWxMyTP8uTzEQNTM9JGtYdZWukEDxPHhDTi7CfuBSexiSVEj2TWs3",
  "key26": "XPLL4Wc3Dezzrhu47n2GgmB5GfQAcegJSeRsQMMpAnwtgBHiVHGNviHrxGfvkaHf4kiwyns2uEMrWaYQx9yNARj",
  "key27": "3UeayqSmEAgD1KSSczammxvPS9DBz1FCEbTw43mBNJEn91xBA38qy1X3x28mN5ekQxsFisWNxBVMgho1Rr92R2J2",
  "key28": "3VuckeyQRDFQrfmVG2XHC4rW5WAxtcnEtS3SrWp7vFuKNERMohHunEUVg59Cvj7MC5iQQYZjGmjjNBoFLxkK2srs",
  "key29": "5hNoQg6Kqk4vqzgAgL9xX1eFiKMEkr9rXachcER7FSZsiZzuVZs4qyiV28hT3QoWK8HpEdLDSWDoKpKg8xomoNM",
  "key30": "3GsuwUi9WKswGXPKCuJ9qVVpFwZmG62Wo4EwAvBKy2267mMMqvEv95yE1y8rpTujhXrftgWoFXFTdUc18MqRNcm",
  "key31": "3zHhe7gWj5AMVtBgALCrY3dra12Pq66vMDQNieULXt6Uwjfx3J95P1untUn3bwWMq89txrWPD8KcANvNCajidLrz",
  "key32": "4RTdhEswx6N51Sjsjeafysjv4ayodw9QCjHmZ9Qw1WTmvLJv5h1buA7Y7DoNi1FAb5qDjiEiHZiD7YJc76mm2n55",
  "key33": "2qAaWJwpHrMVi6JKssYjQrV6Sra1MKt7QwhfiAcwKy54mZVESAdbgxzN66FnkBDwnfmPFTnKxE3A6UgNvFRfHPSE",
  "key34": "2JrJqAjzk4EZhcy4GZdxe8hyLBY8C95DnQZw1V1k6Fn4VUNiJzEaeZfFyB2xvBTCNLyzRKq42tv9AjgUt2mLLGEQ",
  "key35": "2dGSGSrCs7Fs7pfEwD1MwRtXHhxjFbsTeo9racW1CYUPhovrerRMDxp3QDUBqGgYsn2nFd7VYuf19odehXS5GkpB"
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
