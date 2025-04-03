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
    "H63SdJ3z2CnGTUyKGsYth9di5DdPrKgNUzp9ahw4z1fywgkY1LDU2NikxW4kGRFhbTsC4AZVHEDqcNcewtt91p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcB6yTbVPb4D68bUj1pDSvVpvMgpXJy8bWt95pdQWufAPEXyyVga5UxUbXHczGrCaWsvoM4TVjVrsffJNyVyfrK",
  "key1": "oRNzoyCdc1SK5v1BpaNYafQ5opL6gQYy2x214wJ3abCkRZJ8J4MXUZdbGhRZpTSV16xv2tqTcLJpHSxz2zP7GUo",
  "key2": "5ipR3kpgQHgNPGA5qxB1sW8HHh1savxZmZTwjWFSMCAsFx7VZXaofpbMy4NAhEVgR9ow8hYuRZc5L7G2nGhy1fAx",
  "key3": "LVXKvpr32kcs9fKJr8wEeUjwULXpQZ1K7uXXNmVqRE9LHyFp7Jk9wEPnxW1YoigjbhFHLgLV6r7UDMBs4JgiNdW",
  "key4": "5xZStvnuupukKmNvrnfecoqLJSWG6E4uxEyLYBwQGotuTFWw9qpiE5Sq3hkdK8DmxCXmtmJKPGkPfAZmezTSKepG",
  "key5": "2CPCM1CVrnhQMcN2Pnn1QzHhC5yvvMhPnTai5MLjDDds9Z2MWrGEcG6QpMREbAy9Vzwccc4z7hy1kBVkGf4RuEww",
  "key6": "5Hxx5S3Him1UdLu4tH8pb5nSbb4Hhqbxi9zo6vKZCF9sfbzToczw8LeoF5KZA4cBCJDi4tBThuN7suha2sJV1kRG",
  "key7": "58zEaHpmiaX8WbzKJ731askA3HdJvuLCCfx7CNupaXdA2h5c4fx9BcxjE6MaDMRqxZqrAh6WnmL5zdTRZkMAKvYH",
  "key8": "26ER7vnsVuu4kyxcoGLZaz9bXV4s5G7kUB41BLnLtT7jpBcrMhDoKngkwsYgLbrC5xAtYaA1jZ35xjeJ6HdeNQsW",
  "key9": "5B8w3xyovRZHJR48cVDgVEmKj8oMCFPFyiBGYPF2zrLi3cz8Nevqhtgz46CMLqq85V7jKpG9EAbdFGk4xYqNSAE9",
  "key10": "3C48us2HzAjTsUpB53TG1zjDUw7ZNN1Ywu1VFWWn2fo5Tm7AEfz7qZLXmajZq1886yFn39N4CwUoaYdGxteZLbHn",
  "key11": "3DVUW4c11iapaYJs3BeqvoDmnLqJUMFTzkFknZVU6dcUtDVGUjwDUPoAW1HMyw1QoEHfEvLoZoGwYbCKU1g8GSkB",
  "key12": "27xoeADzwuZsWNcL1effXskW6zGLqMmJqVsdZiJYLUhJq9gmW9DmQBrMG6TVkb9U2LwLNJt7fJkkPGDAgR7aFZgn",
  "key13": "5A5Bj2jqBS2RkhRg1yPNagSkRiLF6KNVYAWDtqPcYdLcSrk2ryyxLdQVcxCu1q7R5M7ViGfoFJ8W1xzahc1ZdHVK",
  "key14": "37bakTq4fvuquBZsGxcbV6LH9um8edwtYd2UJidkxvfd8AnSMQk7zs5Kui3fVNCSYTaDcwxMwqfb1XXknLihq6fy",
  "key15": "5x4GKML2iYDWsqt1CmUVWGr6HWj7R5FeDMNfn4wEkGgU7EbJ4qtVyNfjo6Tw8gZ7iYCZckei32GTHXq3YxgXzxju",
  "key16": "4KBS8kVaJ45abhkZT4HzYsxW6oArfBixgDBiV943TvvztYbGLViN28Hv2abFykZm58gdB7NBsLwn8TiYZ3DzLzVo",
  "key17": "3VkbQLi7jsHEQHQhZUrVK8QLzU2MDXMqFngGqzBhYGoJVqRBFQxxYxfBKG8Pr27ekLEMWUV9bKfDJVhVZKPG6ccN",
  "key18": "4PgmJWZ1EEBpQ25zZY25HdacYxxrvm99HRF3Nk8zdiaoUWdePsWHKpe1E5M7oGgyre4bsFdaZLRXdbQroLZyVCCg",
  "key19": "W4HXyYurjFaMTztLBbm22oUaPkfdvCxPZhRgMV2cB8DMNBUdJtyRMCWMHzdweNAjjkpqRhYqNwhTJdKpEjGwEyN",
  "key20": "55YwW4jDJ4SSdk6RBCdnTUZrCaDXUAq7UfpbEJ6FPKLh2bELmCg628DT9a4yEM91VLo7XP6sw5BBwJW1r4ekAq5m",
  "key21": "4GT56ikK47wETVr7GR3ZLv2nYQ6W4VCneQuc74NTPRKvqS4Jk6NrP1WsCrGNcnKCXzG7BuLrBcw9VjZgCaRPPutw",
  "key22": "8WcpeYHwNn3ethtwFoZT7Pv5Z7rjpSepdDPiFDR96qn9cNK6DtUYKjZGPGrKDyuUNPB7X83wHYxQVdtewr9BTbb",
  "key23": "25EMsanPEHvkXnVMMbyWr8hsk1n8jF6fKtXLENGhkRVzcxyAxF1ZUVAFKatyQdvDVN8wroxaj2EyxjJNzFACYjy1",
  "key24": "5u2p4m9NDj3GdyfQVjEwe9n9vgsjwtZUdQNZqv5W1jJ6ssMsu6URoaDjJdE3u4fBo4Ughhh6fNZJE4ADagbm7yVk",
  "key25": "3wyqjYAGrYZxLq1PehqGFoK1eWJuvXsp9MHKa3YP5SgV56aAHnHjXEDfXFBHzE9ttbRuTi78C7FZzXUXedXeBjF2",
  "key26": "5kJ5vnQdNPTaop6LBntp3KC8jNZ4tLx2G7ZDZ2EQLaZnoUHWkhRg8HPxiCqJzKgEJV4DLZEjahwmNU5DK4bmeRbS",
  "key27": "59pxc4PHHkQCC37v1uDoeP74ZhBZ4QDXaXSdSpQ64vJBsr4oKLyKJosqEvnPLJWBsut4yvnNfp3FrtuDn8Qb7EPT",
  "key28": "2z7AjzVTkbDUfxnq385TuynktFDi2AUwpc6fTsrgQKPqWdTE5V4ZQPitX1N2LJnXxbqcJNNdVokijq7XeNyc3DTT",
  "key29": "i2wT2gaeRunLM2hzNXTmsaDHEuPygFHKRVWZsBmswEitsdQUXys7FMYUC8wHhdCvRsfXzSNnGaN2kcwwjnicXFA",
  "key30": "2Z8aFWdRsnhFS1scVhJwi3oEyHWE8K89eXB2GZcoMgASACd99Jw8nudkB97gUXr1P3Aayws6QRpagq2Dq8GMaPCd",
  "key31": "3VZkGZo3Vqe9pJZRaXd53bRF8sjDn5KN3cccp7rN9i4sCmk3nCg3d7kW2XYZyWdo1LcYKve1Z7ETmuqAqLHhbwJ4",
  "key32": "63yTSBArQ5nuoivLr94ad5LBtKFX6yviYVY59rBP7xHfo5SucGLeYM3VFuLHsMPgQcrR8AZNsCGG3XDT7Pppdaoy",
  "key33": "5YYZcQLA4eY9C3373ieVaCh4idH4zF43znSABM4RitnJaGPiVEfxjJpSo5agQWnmWcnefqNbyQyb9VLvCNZJyq2f",
  "key34": "mFT7GXJWYXdiFuLdWtUr6uw88zk4NUAeGtv7kFweXQ8gusCdZDV7DNVP5NXcM7w8Ssvqu2YyJGtiDPn6sPz46ag",
  "key35": "45dxyj8v334ZzLdutLYeG2A4MsifV6sVytAvuK6XWu8komtLTKhiJTxo6ttLzjqzW1FuiqgEybX7kR4kzFCzvoi",
  "key36": "2uzoUMJ1txmCHLreqRcjMGTrfPhsaT8VD21jLnLzYXwoS6zLeMPZUAQwhmqrYE66nrNinUR6gGkEjKV1bE7b7akx"
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
