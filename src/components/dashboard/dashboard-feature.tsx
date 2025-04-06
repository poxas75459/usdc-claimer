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
    "Nqgr8nEejbEZr7Y22iFhagozTGTEUVnXFcE7JXSZJhoPCrEAfeCN6BH2VNMULn6Zu7PaRS2DEDgM8EAa22Xkibq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qa9wXMnyP11sohg48HEwcroireSyapTgr7mdKwjmqHvjuNjLeVLSeWMWRHEKujXNwawqHh5q57BE5QJ9k6VkZbi",
  "key1": "2uCo8ArtsPTVqApqfoEY42geGHLBM8Sx2FxFFHvpQZ6ZMyF2yzSnKPaTJrCjKr1TqDHFmUmbnFTdTYmWAb57LYNT",
  "key2": "2eVtm56TRBqpzPhtiPCcQjGVhKA1n3je3PNqMUUjgG1w2UyifgzoAyLBkAf1tyTLrZJAqiu7Rn6Y7ExCzCx96y4M",
  "key3": "2oS9f8DMTTNjL1TzCmPpRYhCSRDHUAVMCEF8SyaUxLoVDYgpPdvenaNCtKsFAKC4VyThacmWEStFJmGxKzN77YcT",
  "key4": "2U7gy9pskGar8JzUDkoueJL6onQBv6QMCQiPAZvz9qbK7D4fkwKtR4pat4dcJvTKPGgk9hUsXYomU5Huuu7ubWM9",
  "key5": "2T9RzsVsCRLAwpNnyGahAXb9GmVmkWHYjHA4x3qDB7yJrGwK35DCwkoyPL3XTVV85gJu4K4shGQFxpesKjDGNuJB",
  "key6": "2nttdmQcRcC9zwzpQzGWthz8KVVkUiJvUn2yQC5GdcLdY1EpcxWxnicWuxfzbP9j3rFHktHLioGZdviMXxz5Dcde",
  "key7": "5PdoizBrehKGUrvGL3sb24atwNbBJmh2H5sjakrhcgvZZSXt7zs2xJtLfvMYAxhZvPrE8LanFNsdJAHitAZ4Ujj2",
  "key8": "4ZWXUq2KSRmWQLGexDWvksXEjDYT4n7Xwj75KVXV9FKErDEUTrTmYib4dMG7vLCB3pFJM1wBGNV5tuBw42wAWEim",
  "key9": "k4npbqCTkXy8HNDNwN8SwjTwwe2FhAm7j1BeU8AN1nxbJTPnJNUe14vxoRMsn98oMUfJ89JwCpYWL7DsNxV3xeZ",
  "key10": "5y9Xf5jxHKfyHqx5HmeWS3TDQSJ2ox6CH1ktbTAXKJxsZkfdBkRkWViA8b5GZGf6WzPt5GEetJ4SE1sP6Rn5RkzV",
  "key11": "252n7NT2oBDAD74QfWtPPYcYjxapWZo8ySPJhuq2fkAu1Mfesm9aAZKce33bkxB34xAjqR5hHDbBa4jUcgWu3Psi",
  "key12": "CTsbwBHLotogmjocuQu3tCUKjftnNKMEriyJYBagfe5jmZzFayEFceT9n54MBSdM6WgytVJHmAtQbng5DLVj1QA",
  "key13": "49qcn2nh4CdPT93DWH4DqN2Jp9M6NkMzswmUcpVk47KnLRyf5EgFTevfztoFLQaHKS695KsyhTnTFexWGvs26Bra",
  "key14": "26zkL9eSrSdkobo4owFtxMB6PQ29MDyN9HnzqmWFNhBXq8w4RzxcSCkWF1RNCKhpmGrvAX8XAVibv5gwED4ehgb6",
  "key15": "5PSrLSdxMNRATKUv19zhr4AgiEFHjXt4ex4K5CotAjVvkjjX4pMvAByoew6dMnGoPtYhdqfZUZbAmSa5yc6Gj6Fm",
  "key16": "q8cR1F8dqjXLF789oJwqM19EibZgVqKapzAajjnyvFDH64fX4MTLCcFEvL12YDRVZMStyZ5txspRcqa3gwRQght",
  "key17": "ihgC316GmKXCcr6T9nQcmT6qmgmVcSD8kpZej4R2VS1UnN529QnvwzhtohGupTTuQSmB71X27P17gwmnTuz9vUp",
  "key18": "317uwwN2w7iwiFh6ENWtghSKdnv86Xf34kmS6VUnYZX7Xt98P3DjDRPYzuMxRGf3LYQxDFgN7PwQwrfD4PPh81nu",
  "key19": "3DTuxNrWwRx8EwQ44EkL9yr8CwsegdnNsv5ZwenTriZXGAdvHXNiXkievwovvNsYyr2CFhq6rZkPVfGrFBRTSUEt",
  "key20": "tciTf7wxs6MMxrWAtPcLnW7XornQgTSFBLuGtu2Ke4nFGi1DZo5hLj2KbxhRH5oMYbx1kbh9Vgrd9fKatbgVMpR",
  "key21": "hNxCFVb5qEfmvKgCi74BRHNEh5iqrsZ1d34wHtprReu3pGmcFoQpWhhsG5zgv6sz4ynhhzY7Ae1a4yKHN4XqMTf",
  "key22": "2YvE9PFizV8VA1KLDgUjCH7Gu9sxXwdZtriLGNtDJgTE7CNrPsrD1h3zPC7xszQCA52qY6aCX7FG8dG2ZfLj6Yr7",
  "key23": "2bj9pgWGS4cgUDJsjpqYEZwvaciNsJPsPJVaDyv6R7VKdbKZ3Kvk1nbgyZNj2QJ93JraNRDBSMw61kesgz7a6ngW",
  "key24": "2aidZuo6WN3rHoqXCzR8d2NW1UcwAbSfJvALTmDJwrYaRAz1jA4p64gBZMueF5hpGxdn52WyvQVpWDaaGUtmaBec",
  "key25": "2Cb2FQ3tCwEawvm2Tg49TMNRofJrHtYcvqsQXpCmwqVFj7agrm6UDBakGaBGzPAMKvEA9XpkCqwLtPJGD8dWLSJU",
  "key26": "4rxpmwWK96VwgSzmaELk47CoYX2HoAcNoPyCYoZKSa8THLMEjjaHDi8tZu1NhcnaaMYfxWzidvbWNvFqQcmixEjn",
  "key27": "Ncx9WLmyV7XxqWWNafMxzjNkC35hMuXskekjFXWvyqsQn7JFpHWFfRhErK3VxVRUiqgU9DDjoHef8mXsRijRJdE",
  "key28": "5p4aMwyBHeQPMrQkTLLLJGXVTVzrXXg2yc3cSthNJEfmVP52NgAmyTgfYEKWFxDvgxukVXrWMTfMAeULChqZEfGE"
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
