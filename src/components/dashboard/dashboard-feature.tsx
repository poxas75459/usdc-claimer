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
    "2SmqEUJfc9R44Bt5Ppdu9pDwBQT4CRdHNGtCf6rjZ18qVLuSY66Mbfso6Eaqu7nHLAmDjCWiqtpdCMktvS4Zvaof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUEY7i16XeAnMfPi6QQdAJwnzyXwRj2hhc2hTPUKqKXRo8eZVFrJ4HTMog8Jrb3mi4V2oBrDrKUxGvjqQ4tJVoZ",
  "key1": "3d44VF8SDgGb9aDoHSBHFkugKoZTjmvih8LsxtR6cgfDtFnToTdYGL4pidDY4wrC2tVqT3d7FaezAGfTnWbUX2dQ",
  "key2": "4FEYTxMkrsFJyQPmSAL7PVWGcXxa21CVEzadbNa7xdPnKBLaiZdHbzA9FeR5SSZpNvpqo8opGpp1X1538Jgzh1u1",
  "key3": "4nJA9DH8EdeVftzC9To2wDGinumHgJo1oG9bDfWGz3V5QuRMdAbsM4gZn59FmsqAWbhZiW6CciMTHganWeih28oZ",
  "key4": "2aGu8WmWKexTotxP29nbbf9Bb6eEkwR3gtWZ1seM1pgBmfd2tYRMJwCAwj65ADkW97nXThR2rSVB1BmM2DHyMZkc",
  "key5": "5aBsteLTpzhrRC6ohqmy1NjtDY1V4szR2dZ62yMn2e4geuH7btLwn2AXqZEypwKwDAddkdaLdzvgugter3gh5aJE",
  "key6": "rTj66dKHHabB8kLucF3y2afj7cDFKjg9iggAJrGffao2RNTBRxnHtJTa162LyNagRcy7dknJvwzVdAbN1qv9wjv",
  "key7": "5JdoYoTB19frABQhgosPN8vcXxD8qQzdYHH8mNXT52Dx2mQyk1G8ffffo4VAPkQxBZpYPDVmKe8uQBPV3pR51fD7",
  "key8": "2xQHonfamiYr1s4v9kpe2ozkHJ2WPLmesyvWvYHqLZ1nQKa5reqHUaPn4mH4h3HENyEMEBCnUF2JVHXHYnD9Hf2x",
  "key9": "5rgm5DeSSAAXRsuhaPDdibJzbRCmAunvj98EoqR5MPte8Fn56Q5KG1AJh8MiepkyAjm56BXfBwXdCqZoYj81CeYT",
  "key10": "2WB7cM1LGA9jv9kKc5WPxmLFXGoMrkBXxKHSPpRz8cmVvzGJKosLLcBxqbCuoP4nBqksyVFBJFrv4LJEtWD2dLNr",
  "key11": "3WRkNtdhB9XqYa8vpKrSRp45JxMxwZ4Q8kvECbMCUrP6aNZa4xysTKtCWUpKi6vYueTzncvHoWyHWJLeFbDFGzT6",
  "key12": "5jHQffUZyfVT2n6jKci1EVRf8ij2P2KeEwHS6P9Sse4hooA2ZoBJj1eQgxX8qABLY2tPiecy47byxh4y8G7vk88x",
  "key13": "8Yf3dQetxCk4mctBXj883NgD4yEFFZ9SW9qi8WejpMxFoC3Z4smGj7WUYsy7jxCG1v2yM5KjRQMpdYA5yjBHQAU",
  "key14": "26aZbCNP9AVgnr63Ti2CYHv4EiKjT2gXY66hB1ixrfFjhjHFGKZHQoTG6vg7f5BXG5RyyjxWHAc2cvsVuSfB2oAR",
  "key15": "2wMvAkK6FrX7gWXJmDW4SvQ4f2cjQ7sbDr65Ko5QoEm9nQGgK3DFvWSYyXUGhLBQ8ybJeNdMqJFAB5vA6hcD1Unu",
  "key16": "5NXGL4zunsBiyJhSkosqRbpDcrvg8tbFvujps7bS8sc1TwK1PiNopDTwshutwdRA7bdERkvcDAvBDbM5vgUbdnfb",
  "key17": "LaR8boBrEH8BTi2XYXi873B9ATdqiXCauZidR4Pvk2QxNtoDVw8MgJEVxUd8jcFLnpazmpLwHXvbbgfhLj3dofY",
  "key18": "2CmZJWxCcfhxCbRGHptXH58ByYNvyF9RTZ9z2E6bTnfYiwwYJ9J5AUmm8u7ENPceKNcxA7eZ7GRaUBABAnGLyAWQ",
  "key19": "5Sfdu4zqKa6Tq2htbJZFWSnkmkPRRU8NhqRJwfGg3ZTzytt66kH3j9FgK53mWebs5hbjVRZhRAHvLTFuLgW8w9se",
  "key20": "4Rnd5d3e2ozDGqJScRKRYRiaUoTxCTbdQpVLMiafK3HX1EckyvgZeVWDGkLstaveGis7D9P8QWsLPSnRNEt7De3R",
  "key21": "4BRk9iKC2NRyMLfZEL1P2Gg4tyugztvb45SDTkF9TdrkLux2mHrHpo7gEbkrLtC6rJGwrCeQMWsTfUttx2dKLcKW",
  "key22": "3wv3UJUiXjzGaP5xwmc1vqbkJvZjifdAzyaDpcHTExGoojGcHoHb6z2J4eocs9EX1YCZRYFVnjUmegXPafBKEZT4",
  "key23": "5Pb4j6DWDucKz9KCDWXhTxZGWPAMRDiLs7YRZJisMNRKrcokS4xGbQcN7XvzwJGgCuFjiV7DZJipVtrZF2DZVYu4",
  "key24": "tSkLcPzbEnUp6DaiBFSFDhCWQoBDuj6n5oP2ddLBHxT4rqp7GhFtibXQeN36GM86SjdZGVFuD3hJXQJ61s1p9bp",
  "key25": "3gPgdFRwjEjg7GjKjA8JLrruRLKf783mJAZmDDMq3BFm4gW3uDXcwjg33NHkMXdyMnz5g6gLJmJNWwLZM12dn43X",
  "key26": "4UWq58wE59xNKMGKcp5XBozSGLBju7Sa1otLkmzpAd6g3u2FhK67ShCv9JzLPtYDm2zf7aTRLGPU8JX4pmPRDAQG",
  "key27": "5wgDvpRsVyseTKSmbADZjTtUzNnMYjjgrdhFW2XUHobqbrwaugJYPrhBzhanmd6tUiFwsnCjyiFGnQYRHMg3ZJYu",
  "key28": "2ngfZAGwb8DvDMH5kog4j4sJ5KaQyTSnvPjSLNR6Bxsc5gfKuvNnDUDS5qXHsKw4DMkd6QNcJwniCUNdt6t8PwNj",
  "key29": "3J4kxSyujPMby92oA9WaXuLLhJEntQXkhy7ZLKqZBwoojGkeQ8Ub3mmhw4zx5HCkh4bGjDwGnchn7C5CBLWoRNW2",
  "key30": "QZwJJqG4djwfebyJnxc2j7SY7PXzS3rKwipv58NSUpDAyP3uQbQbZF2pRtCZwSLBJKpk1rEh71H6JggZNgHMbAR",
  "key31": "4aNMN9gLUPszpMNPzS3XoCwC9oSAC4o4qehCykpQSVtQQsd4uaa563GWHmuwY8zc2frALJbWqMKHw58WKMuYizbt",
  "key32": "29CaGmCYbaCZtwRGxiXqGS9JjaBzRFCKbvYV6Qe9asB94mrNHdDpew55ruviZcMrSphgXX2seR6ivRhzsLTqT6HZ",
  "key33": "GwFuzgayP2o7NTwp6X982obQmV3xW4f8kbhMgmZgYACUw1E3FTPs6odUrPY466bgNkFpUxdeaKbEvr3acY8xCzB",
  "key34": "2FTbG2unBrKjrUic6BsjpcvKRb1Jbyuz3hg2s9eQkVDuEX2dDk9NqzxKhKgkPVCAZjLJgcEsRvxe9vEUzsauHD94",
  "key35": "3zVdJMpM8W36iLa5BQoRcTY7Fi3S9uUJvtPraSdC1stvWtWGqNRs3gw6kS477QA64mnNjdiv9o8cZFk4eYjZxs4s",
  "key36": "nsSeLmwr5zc2tjvWjpBqRggZ8XrUDYrZqQzURsifxJuLA9mxTDTboRhzdpPve7h5chy21M4e9xKJYdF2vDnJNXk",
  "key37": "24VDbWuCA9GUPcQAXnofNsQVpxof34NAfkcPgZvJ9EFHGdxeH1nes2wTheQGX3ThmSF3xye1UcKJDdG9BPARGwvw",
  "key38": "CvYd5h5mZQjXSanw8snfwi6rFPcgeU4GCFY7W8EZTM9ceE7Xc2y4xvNA9pWwrFVdpLfttMoFCoSVqENopveJB2U"
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
