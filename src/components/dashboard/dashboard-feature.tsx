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
    "2wzSr72evhXiDeh8bUgsTeYGeuzkKmWDbmJ3xriBvNEkcv12fEf8WrMdNd38uEmGjZxvnSaLTEp123tA5sEEsqJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDqFMtzqgeWpdFJeV7vmG8k7PGPyFGD8zxFT9hoz8izABkjtVCpoLntYAGck6zuMR6WMCTiaY83E9FCsrAVMMU7",
  "key1": "5JXujoKf5cqmANyt2hfS4NaUcaShdKY3h4k8dauqZn8qQeoS4amMf6npXvR3Hd6D2XNHaDq3UDdih3aXEcTt3SJL",
  "key2": "5gto4H35jynPjq8PiqLbBRMcfqcAVn4uyGPLEyH8Rvt4Xqf7Spfwx5sruvkotcNu9rR8uhCy6Kp7ki6Df8TJNtKb",
  "key3": "2mtSGQLBv3ZX7mikdBSH9LXpNXxAxpXMrBGSZzTWUMQzjxPy6ZSjMXAHsm3txsHdsPzy7Pjku2Nbjgk91omKrxyv",
  "key4": "3vnJ5JZK5AqZfNQqZ8sXih2aFCWXYWtAnS1Vo696Gg6KEHmkdLZRoj1WBJm6KLBWDdeAEV68PLrSCB8hb3p9hYs",
  "key5": "2DsejWKDwHhQD3Pi7UJi5U7FtZdRcL9Z7p2xEyZzAtN5Sp9QAiSHNcBwH5zBct9gqKUA2k5XpobepuyJGYRsimvR",
  "key6": "66ujsrpoUnXfhWqJsAFXccPEGffWJBNnxX3AuCJc5oWvDXRNjZ9T23Uhi8FTBU8LAAS7s8F5goyn5FqtFTaiPD9H",
  "key7": "4i5v5RQsmqMaP8ehuFDcFE6DZXdcWzS8Cn25guqC2Cvtp5D5by2qUFG5sjC9sU1TBVTEzhPzSQ144eXXQrR1As8u",
  "key8": "4bKg3fLH8TNRLFhJZ9xnoKqUyjPEBSFHTrfkQLqJMSgNZUrFHPiAN4bursMWsrbzZkatvPJjCAr4GXn75cC2ebvo",
  "key9": "5whLFCuguF5qZ8xWg4rcoPLJxgx3CDpGpkU5TR2HHVUyKMWwBDh7GJiHMN24R3LUXkMu5gQ3s1CpCw8oAyjrw8UZ",
  "key10": "22SoXZZQWyqWL4gfDZYVmtcr9gS6VB4BtvT5YuZh86Yq9cKYCWtsGmsT3mSEZqEevYG1DNC5XX5uy37AZD8MEw2b",
  "key11": "4W6peQ29bjFhcRbU2yvhn21SiD3dtpRutaoUYS3qXXXrkRriFPi3wnmWXqLcnn2HAvh7X1Xfv3K1ctYefVR3dsif",
  "key12": "3SKVu6u6kRSvTm78YqnPmHmazEjZ8tJiZW8YrvRtxR7jYFzBERtdX8DXeu4TYZHZM2yk919radn6rdCqShT1oEFw",
  "key13": "3e7JmyRgdthvkaLcJ2EhvZ6qXy4mEur59BoVhyZzLfKhWzmKraNVc8YJ4Txh7yN1y93dJjLe3sivUdyCQ1DHcZLb",
  "key14": "3GzPMfxcJ52u2t3wukfjHXfMdew8RhjSPu4MTjS3StREMA6SCM3CqbtaTuyJTT14Pn4C3vR5dfsG1KtmaoQDKMJe",
  "key15": "48xBAec4gyFuBN5roYSfm9ZqmaiJSNgdAzLUs34cfvjnsSzXUWZ6dUjdpwgtjMrhFZHwrjtHw72Xckd3SK1a2gmH",
  "key16": "551V8Vzoc2AEu8UKoNz6YuBPep6GjrtGEYoEZXHyGamuqPjLwQchhdkNgQLVYzdMADmWYWQqc2p2rHGfbgJBMFkG",
  "key17": "354GAAXPMEeWb5VZX7TfwPkcQpqwTknMixSy3VdcFeEPfnQ4kLHgyfZybKXCAbKM4qAVbcmyWQ1mvgHELqDXjuJw",
  "key18": "5jP8SUR5ktHq77aoVNdBhByxGSbKjT43tPWn6SadtbE1jsgK7778s6EGNv8CqiwgjrU39gbDUMiSkrKQEwMqKroZ",
  "key19": "vd7KN5yGWvzjrqAU5vn6zfwZQKfcqQ6bPi6VJxkPwa9oTtkocSsuyvWs766kkAxpQD1wstVnUmQEgANzmo6ZX6G",
  "key20": "2n9z5eNoxY3PFVaNNTFau8MqMYayJLp2YpcDN4BTELeLyikgXeV8uQvdXcmuWw7ptcrq27XA9qWziVmkN9BCP2ef",
  "key21": "5emhrTst7SHSNFA7Sic1f8kYhEwoAZTwmzzu1Um2S5yRE8U8HFX6rjo4ricwGWuu8mvurosV4QVLWGtVBN21qemx",
  "key22": "2ZpxQoXpKt8YjpR9KBg64n5ZJBVEnnNuGwu59TurphCoFqDeZ4vUzQroy2LSyYKjvhbnSCxbyUmYWoS33qRRYoXV",
  "key23": "3wZADoVdDiaWoYUP4voj2NigbcFBQFX39tCuWRrvQCKUNrezVD7FW8iBF3hL7K3Pkpc3K4phtYY3brpfoAP5J13M",
  "key24": "493Qpa5DFkKRov4SbaEcwN5xsnC5PaDBWuLKU6WbP8eu7CuPNMpzBmHrH38KMr3wDwXDSBAbbYnk7Kt3DkpQJ5ME",
  "key25": "4oZ2e8ZUQt1JrbWjG7GDKiQezTsxs73JHqoUtJqCE5oW4CTWdS6696kmcnq6rvqcKPFov9FXah7c5pRtyvAFJ9V7",
  "key26": "3Xr3oVGS9MrPF9H7uvneUpJDWYcJayi5AgwBsud31c61nZrhYxW7PLoBnh1gMrRnD3ukJQTqTRYnvjCaj3s1xpEA"
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
