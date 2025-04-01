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
    "GiBUc1XrddN3veeJR6VK4i8X6WZygZRyQVrTXdRrMWs6m2fkkoAefeWxJT8BUiY3oby68Q81WicVsWHwmEkqa4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQCu5omyCM7DteX2tTftEMp2nYva8HeHj4djQY1rQc78d8stoJDCzvc5P5vT1HYQvtHhp93WPFrs7j6BFXzDcZ",
  "key1": "321JueKGWK1DmUcX7147D2Kg9DSct4NZ272sHJPQZkjxwV3j1BhMHTAnt1FaFYrLoDWpZR7DPXzvuWrbGXLJ19de",
  "key2": "336jZQFoX4Fcp6bWvhGxbWYL4GBeYyqspqnfriQWz3MHzBugYnMCMhz1GES5fMpKjNMaHUn2cpv2Q9KhLbBgqsRY",
  "key3": "2W3A6ck9DF4MTmM3sqpHycwdgN96M4z2huaz7f5pakJieHdWTBZAfwTtz9iFpKkxzsbAj6JjwRuZqnoZnQzSEWx9",
  "key4": "3aLULNggwXqLTLjnn9aYEFDqsMJXpVKcR26o7sLfuBAVUvpGm8J8DGN486fijPxd5acPn5Nn6R7HiRCWphTZV6Xh",
  "key5": "3DafUYkgBiysRFreh1RxxcnBtQ32mdcP8jamc4JazudthhQgs85KxXk5BEiLWPA48TLHHmf2ePKexb2LbBafqBRg",
  "key6": "4wkvKap568aWDMp9QXweutyR2C9hESwV6t2dW58wh4Pg9fATUGHKqTY8judEFWhZZvrKA8ox4NUd9VSoKXguBZj6",
  "key7": "2nWbdgX1TwZn2qf9pUTyXWy4nVgDtzEaErqoC73boyxZUbBuF5QoAXM8nq68bgSrrtA6Do7pkEaE4aasuFdtfcja",
  "key8": "5fheDcM2Um5h2i9AzynrmRG7PkmZLDmXnD2t187yMuj32bnQRTNRAhVS6XuNtpixXMmpkmY6BQbUMSFSr67aBg4R",
  "key9": "5gfTJzotKmqRBi9LD28ynZRe53HQ2DxkZj9BchGkn3HU625UbhozkHhXvJiK2VUFuZkjL1JdU54J74Cn4ycpeMpm",
  "key10": "3Cmv2AoydDrivse8u7SVc5dFMKKZLQTYChD6ePb2PeXsXtwNpzz4pVAF72Szd9KwTEzBJwPfAhSvHSo4tzJoPcnb",
  "key11": "3FFDUdsBnyFWAVgv9ukegB9c3W9hx4rHB7WiEVXRMZ9ht5JQKuUQ1bMCXCQS6eNWGw6WrsBW64U7FfYAZoTMDwdD",
  "key12": "qq8cRAhKjYYmnd9MxFN7cTUVwNgxHiFH2hbYEmmoeoYi3WdrwhP5MLvTAr32mvxVrycqoE7HkL1WMmG8UBiN7xP",
  "key13": "5E5rUiw1yaXFBh1iDE6bp3h7veg7AKf7Ghyn3EH32JWp8mBEASoiJpcrtoAGhk9WMGbB76ehhgpGT6HqwpUApThe",
  "key14": "54PJogmh779hYRUSwZcUVkDNvSJYP9iS8NgcwF5Jk1DyrQrxzg6qsAAF1F65H2zNGEW1dJWC3GCPYHtUqPMjzFDY",
  "key15": "2SXjYci3MuPJZopxRdcJZYt3mRXujQCzhvZg6mtZouTu1yMQ29YyL5eb1QujFzNE18ooJWB7mjgJCqZmUM6fTKuA",
  "key16": "53SxsfGEyTXa8yoaAQQ3QJ1dLEHZ2vgRNgeExKkHGKanB25f2r2C9AYzYSHNyS7areVL7K5kgbecMVdCTRzEQZxw",
  "key17": "5dP7fyNVmjT1jmANFNxEUJiY9haUmU56LqsK1gkffEyZwULusefbRFJs8FYYivRMsBHXy2aMFb1raw3m5VJ7TyzN",
  "key18": "2gG8u1TQ63xEXSwXQCToR2fUeWjtXKcKefyRNq9gSAG4GpRFRnAGSeQV1HR77G6fDcHcsBc97sJEUtLip59JH7rs",
  "key19": "3pg75tdMF5m1xqkaQGbRgNrZKbAwGZ3nP6vUzL7kVjJciKxvJcNcbYsV6c97oMcKUrxRCYMeFaXKxuYFVNyijrYM",
  "key20": "V8WzhqWdLo5b3Qw6Z2ekUAGsaU5St9YT3SkCwiEdnE5GcQTkQMtVn32JBL7aPZj6PpyJixumsU4wk5ScJvS3395",
  "key21": "ZKcGjNkYB3p3TpWzyLPcgC5bmM5PCQqCAE7QH4rZUG5hXSyejthq1FojjsxiffiCUSS94URLmatJZvYdoviTCh3",
  "key22": "RUuhVTyYQqCxdJNQgbDKT6ZR3bfH7fyK7mmEgmXacWb1kgeDguHYPoqfDcrrWyfLxbm6YPxRqZqVJzQJ4C8iyiK",
  "key23": "A1WdrKF5j3zmr39JhbFXE4WcLgtiTdZmit3Hr5kBiDUDuX9wHRHmm6ESe3HwMqqKRd6bwerkyCWFJPFppCBiJwM",
  "key24": "3u1VVUQKTCAGaog6TU714pPkcRMM5tPGJpfrKU8DAYvHEBPKWVhbpdWgesow6VqDw3ta9caHWsZ84j1CKiw8yPHX",
  "key25": "an1ukPQ7ML8dcAhoTD1Jihm8NeyadXHTkaDMcCMpfrUS78ZnfRrykYexLryfcCYSY6Vw2aRF7S2MbiTJ3GEp3Qy",
  "key26": "Dg6YPoB3cscjuZ6M3VNgXGkpawVKsRH3MK8WzvTw1YU1VKkvjuB7mMZQmK7QmbDoBpoFyXS65Enz7WVfoFcjpUr",
  "key27": "2tNjjF5UufARqZqpEbEhiRmoDKwoWcbHSY7bb6f4zbTBAhs7VLcxTPRNgsBzLrU5i4zyBcDiixPADhHUpQJpvGFk",
  "key28": "3trppaSohPkT8S5ibKGCpZghremL9c1CFzViaGVzsEXwS9urW6zLmbzvKcVG1Px1TRGKzgX8YJwyeSFjbRGtg8h2",
  "key29": "2mhh23EVhthrXNDrcRTm8jKoLWoQkQJMXnkjtdPfKqt2UvKGMfx97NYzDPZCJNPMPFycZbcRYKnYRYdGMe2Sx3Fv",
  "key30": "5a2f3Wv8qX8JECjW9LKSXJ8ZV8ZNsB3taNQhHKGvLEr4Xe1j8AYLrgveWg5ragxaQt2nFfE26v2Tg9o2BnmkrbSx",
  "key31": "4AcLPx8PqHrDaPNCBYSv4FFjBrboeVZsHJsMJvg28Z3YDxSAActDg84rTS5xzd16LWTDMaxFifVkF4Vwcbdhr5tH",
  "key32": "634w5DnxbeQPSQoYKhDQzgySqFEXzp9iq2oHKuEAe1rxwszAVU54f1iE5affrnN2erGHd75foLBLtLcjdKJibZyQ",
  "key33": "5SmcN7L8MWPUWqgf1PJeypRubNnyXBgSxqucmVZyG6zjaUKvHq8k9eyrsNTMyLb1YzV8aDiKpT5PYh4jU9ShQqYu",
  "key34": "giUPCx4BDsHpmGozaz3AQUskj9yhBugHnVgnHkWPncNSMF1v64DkZKw3wegm64TM3WWDGeCoxK39X9m7W5vH8Nj",
  "key35": "3jX2Gb4gfB9M2Cn2vKej3rWGq7B3tzpi6xpgquU8orf7E33jJ2XzMk9Vxukx4ZzaUFT7J5tDiqQA9mqZGz385hxA",
  "key36": "qg61cAPentRmEthDh4tqjgy45LyFqecCYzpoXQ7dKAJydvhL9JUHfQUdhtHuFESgPH7WHUkvNdqg967Aqor87ca",
  "key37": "MeA4xkRGxBdNXAa9538XbAj235cZ5hMzcf2owQP2w8atu9K87QthMvDbkFZweS1oG1WWxPmgsPbobZGM1ZUUPMB",
  "key38": "4tsXEgW9SvJudo7GYKNP1wtrzXEacYvKYajVtaYxjWN3crsEbWqfP1ag9DpVwnYv7NTx3N7oB8Gmn4dAiFXhsJoi",
  "key39": "1YQh4EZRUT956mG355aPUAHx9JefHEWTDZ7MBuXdceNAm2Lcw2RLh6j7yBJvdjf73U3NJ4XrTreyVp6WNWnwvZ"
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
