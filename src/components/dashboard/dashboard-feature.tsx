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
    "3C7cLX4CVFDYAX1NopePeRBx9Yj3PqtSjCUqzzZzGGagFGQKMnwNt1kaSVAZ7dDmnh2Gyi3FMjvCK9EoEVWue3mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acAHQiRtz3ftf8aKazVfuz9FpeVJnz7mGkjAukiPEdQVYJ7DGv2PBZb55y3NJDg5rvnZfPi9fbrj2zQh3QfDvhk",
  "key1": "Nkazadcw4qMoVLPP9HL5SrTw2VpT1fcxRAsa9wB5MPFtjoPofq6XUrMpfpY5v4BwfYiSx8on173EwuftTmQXgxB",
  "key2": "Z3dr3rqUDfLCwb5nFm2DUFsmx2tE2wrX153XjTMYFKmBLMLSZ6PHGrgYFLUFkpicYNW6KiGekhLRdKhyTKLS7TH",
  "key3": "2zuq293aT5E4DkbFvsvUj4TG4CrLzsgEEWo1kooH7G9JoUVqabyML4jL8yXTwds8reTkinrSktSDNwYXRQGNk5ob",
  "key4": "5zxGpRyjujxQ7ta4wJ8pXSh647rk3YhFa6dm88TFUZKoEPK5E74n7kWH7YYDbSDYkULQe76fXBA8N7eKVYx2qcZ9",
  "key5": "EYdihc8b4dyruAkW1njeP1tWo1Zg7Sgqnxf1bcaJ2t59iRmGqv6G22F5gDP479uMZqQVzYX7qJVSbaUWrRpsd8s",
  "key6": "3T36wcPNt2tqVpFeqm7HBkxeqiTRgU7F3xTovsztynZVCPQWiXLhRDMYTPch1EvusVB4FDZRr32uarELg2ErarkF",
  "key7": "3g2JUgThh7jWhdBaaeU35LdNX5JSYUthpcbwPNE8WHaaam1yi4mv84tkZoPbq8f1moUS6KfhJxuWe3f2mmeNSpBx",
  "key8": "5wXtTGPt9WLkj6kY7dfuqUNZZzkiibR1LZ3eoMEaoc9KNGZfWGequGog2vyKha9Kyq6SC92k5hZuRUQRCNkSy5rS",
  "key9": "5D9xUsTXUB6iq2mceSnkRBKsYb3aFiHDqAYS5SaSghCdRZdBmuxapBSS7apRgKbV7sRngtuUNPtMiPq6VgRpp1TY",
  "key10": "RviPq149FnaFYY8XH8WEch81gUW17uuPKrXpiWN1waKs4Jcxv3mT8hoFpbT4mwHKPBdpathvjPZvGnfbsgkyVYx",
  "key11": "5f4MaSF1ZgePvUEEV89VQ9Wc4LLR96GM9pgk6Vh2ozSVLqWXM6wdCdXU1AAVDELdL2jGGicrbAxgWpA9y9XBCWHN",
  "key12": "5yw8EmwSNhV48WdcGs9viv4NJJdrt44k7PJ4vwUXfT6bt3MAS39y5HUTnnTrp9ijJtaxDJ3XmqDUXuTEunoxUdkQ",
  "key13": "5bN3BNRRufWAxLNdxFZdvmtmQZ3zcy7qvNdLnYsW2w7sG6hNF3feHRNP3w46vj6bR47tUc87dKMJfwaPH6XoqETz",
  "key14": "ThowHWfAq5QMkjpnMSMSv8Nt8mMqjPV6gPYkAcaN2qo2dR3NrzCd3BBtCSh242Kb1Uc3Rwm13SJZNPrdm8hQMDe",
  "key15": "2YLkRgL9vLLFgdtVxe1F4Ft8EPqrKKAk7F44vKc9aLqjEFB3oB6sGd64jY6F5JtZ7M5VZRFcQ4t4qNvgZ4KTgWt",
  "key16": "vCA5HCPGdLYL6feHQH2kvNxFCwUUhKBKveq8UAdcz1pSP3WBf3TwEZc48pSzfxoQUBGmXEtmyo3n5fJVhVRUcJ1",
  "key17": "3cFWAkQ3fbUcfNyvsfL9D2cA6GYDPSDpb6D3Mq6zXQxhPdZFTphvLSfCmHNab5hx5wgt7jPyWcvmkPyitHLq3N6D",
  "key18": "2wgL6QUdbSURDSaYT8NvADuyo9eHLj3dJTXfNHXhwX2nrkVme7F7o6Xpht3hfBYthZfTJy89fzprTYyevCNHyGbF",
  "key19": "5saPKiY5wayFcMN2eDCRTbSaPvPCdjAWS93X9mdAtGEJu1f2g8bgoCJawKeuyWkzVCcb69SZxFKFVUHxbaj9bpa6",
  "key20": "652ijo5L1JstYVCHsGzZ8LrrHjWggpdzzYaPG6KmYEMKQVfYy5XdSbFga8617CeNfW67z1bqzB4cBLA9P5AzXzKv",
  "key21": "DzRtyG4vdtNXsd2QVNK4TtBVMZYV9BxWV7PzrBzt94CnpVLfa1eUKBGh5KLbiSFPbWAfzZUwunD8DXUF7Tp4BSF",
  "key22": "4pvDaz62B12CQwSHpHfmXrBJz7tEok4FWNEPtQQ6vcZUhdDwgCGkbcqentszfcMfT3ExNz517RJCiJLbYmkcUSfD",
  "key23": "zm3KWHKvJGD7awKvotvCkgZZBex4pAtYVd1iWz1KFomzE8nKSe15nyfvYujdZgySNL9S8nJcSAo3q5DY56EEDV9",
  "key24": "2yLd4JQ2PxscL5t4A1zCsSBvUGUboAXMcqPwfqLM5bY3ctYA9kFQyo4ST7Pi7zhoYYD2XuUqbXUrSHNWcYW98YjR",
  "key25": "uFJsJnKTWzw3B7vngfrB59nJhiiNxBSkftgvtDmDQRrV4HsErB3QZb8R3TKV93ar8JdvckNpzmxfZB4w1bWfppE",
  "key26": "3LfyAMmjFYV7Wt5XTm3qSpqRZ4E3kteoSXrJu7T8ptALqMP95XsHrQZR5FgecJWg7kfb6CCBLCGoHgEsoV9rr2F9",
  "key27": "35uQvzMGudtw3nmnX44ssu3jdQgkVaKhxC5ZBfAgqHufSfASuwmk7xrwe9shbpzeDVGQdK9azPxjC99RGDJsTq4w",
  "key28": "5m348iHBq87MVe3gVRDhFLSzE7aH2yASjmwKQHBSCZmFvDtRhebhEbNnHqbThsNQXv6ZBRXtmh7JLAXUt245BJaa",
  "key29": "2nsWMwEjj6sEHQYS7jMZqsHT1EMUqoqoauPYkNTwe9eyLu8Zt145HBG9gg9mwRNivuaSxBJNRMx86HtLsX4mcwQV",
  "key30": "3bNb4tw6joBKQ6i7veQXXEDD3bK9FuMZF4F49UbcWNN5nvRUfciCxX88xSxBvab1FEEVdrKUpEW5AhoSTnvS1283",
  "key31": "55u9gDhTRAQj1eHGqED3LuE63KzV7dXukV6GSAk23v9hfaZ2mmMRZ1cjfd7BT3LdQJhaZrLE63Jtf5TDQKvyWhbR",
  "key32": "5ENcfexDLi6nVoMPAVieNuz4emWVvuMWWCqPJd8tGG4iiCfc2BEcWixeH2e5hSMSt98vkr1uo3UrNqhbhak4524G",
  "key33": "46ouT8qd7XtqErhXS9pg6oekYth4MaUN37vzUrWG5YDzPEZVbMjH3B1nBxFQ474Gukb1DFkyggwS6MbA2EgWP5Q7",
  "key34": "4A4uHCp7jybDhcDwxCMvfa7VnphyP1QtaS2mpeQ7siqHp7Wn7LNWcKUZGD4oYKbuPPvfYWMFJPo9E6BZUsNzuT3e",
  "key35": "Ekrv9siBCuAw8VvFhuaVKQWkqcrUCHS9MFfYQ7cy2KgSfwy7TusMUQz4txi4pMoVaX5o3wt3SEQv7VV2U6pdHHk",
  "key36": "5A1sjNGUCrhsvtz92E5j77ALAF9MQFEhJVmDdJqLrugJhHnKsgvmhw4gFfyWD9QwuyEaYTjRH3RNVLWcPajhAFjP",
  "key37": "4CB7bgEo5ah9iURhBhfzW99iUc8PUzXYKcEBv1P1XRSkCBnW12C49pDChattabP15dQcYGJVqaa6vtpZgFL8FVfc",
  "key38": "31aWs9BrzEKLfWjjPgtqDT7DTCGtSXa8uBy2i5Jcgxc8i8Ytw7gH7S14QZfuvHToXfd5bepuQRrJKP9eydM8Bi5T",
  "key39": "3is9KgsFpzv2fNxN7UZ7bnbiQ8fJkcDJTYziqe9kArVjyFhgwxXYE3ptdgZB4F9xokwE39zeYwcKqhvDA3wxvEys",
  "key40": "2EoFS9z8R1iGCSadiUaLwLyT6qGUN9rmutvLeVqdt7dz8sm9SSN2SVD1A3WHnq8Fm9g4n8JSKycNVttfhGLvumtw",
  "key41": "3jTALbWAiMawjxf33NZeGjehkk9n87TftgktzXKENwCyuQmfdTGduY26VUHJSx6fdLaaMCQKGrxvKVM6gfnEQpBp"
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
