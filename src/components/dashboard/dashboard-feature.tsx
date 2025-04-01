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
    "3V4FjK1oq9PEzf9Hw2nCvnPNTquNBEc1gSKxKjj5TWGfoZWGwEvTmMnV6dD6CSHe77yhCNP7ZuUoWQpkvZGKAVNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vnCmAAuyQfzBFTzz6A5ReWrtiRJM2sdExc8icgCPd3zrWdViJqKQA1GfaEt3Tt6qnenDjYfHxQPFHxRynEyCj2M",
  "key1": "3TDGudtU3q6wmcCcyoicumgH8oUnYC5CxeJwSRba83Ua7aUBUUweKyTjNyvLXmx5qosSVoxQRQEFE4quRWR9qprS",
  "key2": "5ohTBBQ4hJw1iFwCLZmJqekiD911NRNc4k5gCmbVWSirsU3ubRzfzDFBYjRqVCe5uGY5tZwL3dF6jstyn5vqd2eH",
  "key3": "3CA3hbXuNK19iiqSeGBPy2ZxvFFcUr5j4a5KvcDvc1dWqA143NtY2dbMimJkdSLnA9eJC749yyfg97yP8XyeKNEw",
  "key4": "2diw5R2HAhWQREWZ2ANz9rN1z4vK25MRHEtvEwENXGPpTR2DzHvoavs7yQxXjspgG6WjEEUhDdFcFFbXw9YxTjxb",
  "key5": "2q8qZjGTMDaJDnaBh2JDwgBmbiaLBEmKt8UX651KcVi2KcZgAJNDBNoegAi98wXBLYt6EwWtDNLfchqwrYTTY3r1",
  "key6": "4duyK8ntGF4qVAmyJn43dUotaR6eoNALiPsVtpMENumZBR9m6HWH9pmvxMfsXts1769DBexHBBcfZxF1K6UA2ZW3",
  "key7": "LYLD3aFWbseLDGWuyDUbCPvhGi1rTAnyE7RxiJL6D7iYM7UkmukzG5TVms4Wirkc2xWRfSj5Jjz8Ycq2Y8cryKk",
  "key8": "49uXhXZjd5o64FBByDRxzmDyJVWDvHandNMZuYowEBY5Uhqket7GjtKUrnp2B9hkHdWczpqNsuQwkX38FN9Dyajv",
  "key9": "4PugiaZw1oBjpb1f6id8cNXrCXRCtzUa3Q2HdrwXFn736msp1obv5NY8GRopLzyjpVsFzwA9xCtG5obHDDFrWTJW",
  "key10": "hMgUsUt1aH26zvSknvn8MLmcyWVrmz63yYd77ni6aswEtmb5mkjwWqTveiMYyn1yP6TDVumHtsPU9f3B45bs8Fj",
  "key11": "H81iyBSZqmcUDrMLoJXw8P57VQyQQzUo18SLEfkRhCPNp5bJGKiF9dCAcXcU2qFpBbvH5e7eszuUTda6kwkTboe",
  "key12": "2HWp5AGdmYGJ5U7W2oCjV7aLgFa8PSgX4yAU7cjgsc8FtwBbksLpB2S5jqZsc6315NrBGb4SZRDPo9dKS28qTzZF",
  "key13": "2yqdtd1Fhcer7qugevuLZztPCD8W2Q4iygNhHRjTNX16F2YBfz8xCevrWNCgfaqEeCUic7Pox1zzBEPDrWQoa7MV",
  "key14": "37WJJSiPyb4sUTdZtHb25a7nczevxb6gEHrGaFyxbLfrhjF9UPPU9CeMjvGRqPpqoWg8FDfTRYw4r7zKKXhvNVqX",
  "key15": "2uVU9nas8sKt59mtFgS5W3jwmLjra5JbsG8yTe5zYG19QhwWGXu4Nb7WVZGey9uPQnixEq7LtND4RiaVko5G9LVX",
  "key16": "63jAyCjFAKBDiK4NrPB5pHP1QyV148gsqQfnGqADR57ZaFNhH6nXeyh5jbwv2kYHwPFqmB2QB5rUW8DSoZM7xPrF",
  "key17": "4ztwvP3vvHtwMtPZeuZudv48oonGP7n4TaY3taGg7VxeRnQ93hkGBMo96E3epmMarmRWXCUEHVpCNKT1McHbB58H",
  "key18": "2oLJSw4j21ZaK1t1BDKEHfK9VcrkRiUPWqPb49hdX914zcmHhfdec7djS76c51LXoTegzQ5oe29emHwzRm5tT4Ku",
  "key19": "2f191jPnVLLRrRwrMQt1xengF1ep8wypxgdBrgdsfCRf4GdoLcnF4VzGAkdnUPrDj1UdQGbwrRLJs7h4Xkqtqqj",
  "key20": "3q8taakB8XpvdCCvzfZAmHpPw81MfKj8hfCW81cahrHvH3TkwquWGbn35iLV1DK8KMLxsh2R3YXT5CJdqxDGDkhb",
  "key21": "33gTePbBMKfgsEet8mm8WN1FYnb76GgtHk81Pa3hTeDRtuQWDU8h2GsixRfzEoCTP1eSmBHRn8VqmEUfn2MgDtSH",
  "key22": "4YwrhALSbNrjPwiJMFCywdm7y7QVLzKwMuT3kFirQ7PiFUJznJiNSwPLH1vSjGwwp8NnM2DAtXs2kWWLteE4b2nz",
  "key23": "2aP66FVc4ocjfpJc8HA1fSUsYi5P4KQtKMMMoaYwQNkdSfXBVUUXoVRZmHfzPwLq21dpVxyBeA9koYif9W8kZqoY",
  "key24": "39YkALEA71xJ9tnm5suWQDVzkcEhcK3Bov1aoERFPC4vtRaSxvfNiB7pVTjiJUvE2XYWfbvcjccRTDmNyC8VEMpc",
  "key25": "4jh76RrTVRsXua8xDzQz67HyiSxuszd6pWnN79accZ8yHgo1HsiyE5Av5CQgWxxAFRRAtR2T8imTHR29QDGwAabp",
  "key26": "3JH2VimcGQUwhXnVGSzQusBsYpe9pAMrjS1C2tZmutzL9MuD3jWGeAWFRf5nps1weeBig7iGsk3J7K34CY8souv6",
  "key27": "2K8R7PRn9hod1PzPKmAovR34XeFkj7jERFHhMhNNkTVuocnrK4zXYFVNdT3QTRdVDHeteYyjt1gEiApjiX4J8Ryh",
  "key28": "JDapRRURcwVdNRfTfSKevqKUJqzDLoSyCyge8ZRQBSj6GbTrKTe2VewHGLAzd185m76y3wyXdkKW9co6MkT35oq",
  "key29": "5kn5fA9MKZE8usyVZ3fBnTqoxD4DaDo7FVjcZLxoERrLvkEkgvGn26Ks3cnjhJ77Ki5KC2kKfaygeYHys1cbNuQi",
  "key30": "hfTRiqytXHVpDByHN22gbDXf1SjE6vgU2fxKV3PpTDVGHVzhubgsqFbMJMCdepmuo2pD8ShPcwJQepUQMhustER",
  "key31": "4ZGHBpXFzEXj6wa8a6NUi2sq8UPyyyJyTqfeN7dmH9cweipkz1KWXbYxCDDkwgo2CFzatZVvWhZrM4kdM8FtXeEs",
  "key32": "aSXMYJGHobSNzBJXt8Vz2DzDV4MY9x7LYmSw1vMAJnV6Vy3fShwAmNxuKKSpwS1BtU6wDfYanniNvVicmgR8Ak2",
  "key33": "4MWqzyQb8XxQw6JCGZJogqfbCqBfASXpqaf1E27q8dKK3eMaemCzGscSB2kTkX2BbFsYaecsLndhAmAxENs2ezGG",
  "key34": "xFLb9sb28c8kN3dDZTfh9uj7MG5xm3xdQ9GZb4scRDFH8wjP4fqgBu1YGv4rpaQcYqYDJTkFvkFevkCYaZRCGDE",
  "key35": "5jXn2uENxpCyDmYzLBMuB7tA3Cj3xtuD6gKiH3osnkhcpe6yAeiPKc5yAs7UEBi7Tz5R4E5dpY282ViqVKU1ms4k",
  "key36": "3wkzkagszNYmLyuwLTqZkTbCSRiP8J5h6LyesTZEZe1ATJhoK6p8b1fkzvjYj5oos1bakUNh36acQMke2rc9v2Rn",
  "key37": "3fEET46KNF5ihX4mpBN2z7ZjdqkY7gxeRNMcpekhzd79Jir8H3BRk2jpDiN6dBVtcK366EusQQ824JiMX34F8mLi",
  "key38": "4wvDPUJDyvHYhWTMT44cViW2w3SHRB5Pk9qk5BnTQJVEJd6XVXA4R3jRh24ave79GvCwByZHvcvL7wX2HerS85vU",
  "key39": "4XihXgA73YdGXSaESjx3awPhjQBWQb3K1PmYGt9KcQUXZsJSgxuQQpnuPbqj9DsFozu6D4jJoZ4gUnpzB65Yb1bH",
  "key40": "42QQzjJsAsgc1hPWoRBiRwVHDbeN1ri4Y4e32Lgn5ZBRSkDfh6cDugmJXx7VUnPRKerg6JaKiz6wUuRmM4g6aG7Z",
  "key41": "59YAnR2TgNPjY84gPsftcTqSDpAMvQPvLTHkZMD6zLZpTwn2kyS8os6h9rVL6qBWVKUHdya6AzB2D3HtQDgXQ3qX"
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
