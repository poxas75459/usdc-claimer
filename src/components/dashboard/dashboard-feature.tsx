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
    "4k68ubgEgfoc4v7rFZm1XBhaw36tBvKf226oN1B8Dgz7iS2SwB2dKNu2AEWk2FV2cDqs9XmKPxA53Z9jS3sLYAEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqzau4Fvrj7NxSWhHBZAi5933wjJUPTQqnK9iKDU8edmuQYqk6XQ9UCKRZzLEya3s5DDGCddutR4pwBVPXcG8i5",
  "key1": "4v5AhGZmFsQR8K1ih9MFEppUSAagdqJWqsH1j6oCxGFLzMw6kntab69BjMzxdDrQsw8K5Q92BWeE2cvxirt2VgJC",
  "key2": "BARtCfXrFLdDa5Yk3uS8KUnhXhSepTp8W1fdVXGaMAFM3kg8j8MNk9u4ooFHDUHhCys17bbySY72Y3xcAVn8up5",
  "key3": "4QCCQUxr8dEJTaweVuTu9PV7VbYEVR59feqRsBpCWyJUcigrA8Uo1hbUw8Cj3dH3Mr9u4kMRCtB3q8twKnPifRye",
  "key4": "2dc2MvWrgJHVAB4fNgPUES8gC7Pv3WdAZqRFVZFp45dUgCVBT1ma3e9MhTF29mY652JeToxmQHVcSUXHNT2awpfs",
  "key5": "6LLVVcBpd4akjSXFYkpKLho9iTHkuG8kkmn4EsZsLu9pJ285aTZBgX24WC2bZRLtjF2qXLFoA4uWMDDphVVDjc1",
  "key6": "AbYuXs8A4zHjV9B3sYinWWbhFM2E2RSjWc7GbK19yhw2pksDxLhJ7dRaEFivic1rvmJvugRtNrYPZeBLTziZgEw",
  "key7": "3FwGWiPaWqij8jPBP7swv1ub4WvD743djNDScS3giRp1Y38dvDbcnr7ad7CBqTqKdC4Hc6MQoMAAE2WRqM4eCsb9",
  "key8": "254GEtX9M8D1CiS8HvFLxeE364rzdtjFzDRbsPGRSZydzr8fm4KgLwK6dYWmxyoNgyUf9AZLskG7V6vr2yENUWsY",
  "key9": "36R1854xgUJvvNaveAALkfF5h8rDxf5xuxUrLuBaudsbvC73AFrFLy1BqepDznZdNrAzWhCVJfoaxKhsTgmfzBGV",
  "key10": "3yqDoMXFe69VqhqXEdeHzUn8BkHXa19p2p1Yu6xVBdebxJ8SvXurcFoLZw9N6KSwSZ8Hu9bYfz9DGSAYP2VFHpx4",
  "key11": "2iWhi8TskJgiZD3K8YePWXYb35oeMA6aw1oE9TSJNtAUUotP2Ek5TLPs7L4tPtroam1LG3VZMjT7LN59vGuT6BYQ",
  "key12": "49mM57GXEzX9n8HCiaKfe9D7KAvyeYNfbM7RLTjRTaRJ6TDcHMnR61fFy52rhUBPw2FR2ZZHCk3GMbyQaq8oDVmt",
  "key13": "2e9KiToHvHynb3rxXsWnGaTbmMUHpM3yqhZjAiTbjvrqKRWSiJc8KDXnn5DHY7g3mY3UM5fQvY5vQT6KJPctCjRz",
  "key14": "3e95gCSkJ3im9bZQfoqbbKCpnTkMXZ3KJi2mYRohsMWLoEdmzo42S9TVWoXnPLjE8MhPEHmrNYBz5Dc8FdV4P1vF",
  "key15": "2AkMhMMXYACVi3pkw4V8vPk7caiqLz31Sj3u8yXXJYYdsAGzw4Tz4WXrVhnAnNiPDcWUB1oAa3NKuAvijkzw13SX",
  "key16": "2tvqwJ4TdBigXxggn9mJ4afGV2Mu6hHHoEXh3AMq4U8GCtcoQy3EeJDXTWTU2S2jm4L4MNisHYaKrXBdNgth4Zyr",
  "key17": "kVkH1JSHxyyXeHDpH9xtWZMN1mrkn5sihrytU7VcP9eiBxH6gnUvXjy7cSsCMFV8JAcN9te9ZNP3wApkPF45n7M",
  "key18": "5wvWcYpDmpnEjbGNMrcwaUv4BNVVH3PNNseccZ2BbCb7DuBPYSwPwiL6Es3Rj36Pv8rYZexKa9M3RBqj9F28bf1K",
  "key19": "47DgB8xMtfM5oEyfHaon2saf21eV4XtvPgvxKX1kEaJjPLjzx6igVuCVhexBCthM6g2hwao1RmWD8XkZkoAyW7Pw",
  "key20": "5g68ceQTFcBhVYzxd9ZJq5U9xN3hXP3EcUD4gxfzLMjkEq2SS3zC6P5mrGUMQgk6hXMZEq4qxBHN6VHLosG1DTs5",
  "key21": "2KV4xZWW3sZLWh8ar18C75oWD8NJZyDiehitbTCr2ArByD9XTnzuuAEvyCfqcZ9kBeAMaJd6Tq7oDrUQS3AoQqDR",
  "key22": "5rQUvXKuWwrWNxq5YJwWKktyeFcyjj1JvY3eJ731GpJfRKtwmeKdCH8DGfqEEFFbVY15ki6g7kkKxs4kGm5Y4rny",
  "key23": "w84waoh18FmjSZA41Bys5guvm6BZpbzRqbggcqvL312RAGWyEnkAzGtgtZvWJRMkMdpzdYD3gn3abXDAxMuLkKx",
  "key24": "5LHRoEEQrAWHTdiWKqipTk1Rh2w58C8UGvMP6zjFGx5GEC6FgVAmYv5sVvm2ozroSjgPHBYECTfBG85J8VsibFfc",
  "key25": "5vnKiJTRbh5uG9dWUcc2Sa6cis9xd3FnxWw7pDtJvynq28mxbRyYFrakM4vc1aK14GdvfvtCpZvCiFnaBscTLcN2",
  "key26": "1hEn4X5VH5kUVGtjERm5XDXDNYu2E58dhxVQDK1ZKAg3K2KQ4Aw1xr4DVujqLiKMhyLQTEUENzA993G4oQkGAjU",
  "key27": "7iUMQgfFPXTbf19DeThgVehZhtCu9VBT3rKihKQSSGrqbGPSShUfVA45e36fW1593ds2Hu5pjheEwQYh2wNRiKA",
  "key28": "FuHBcpkdfqz5kde5c9nrRGEbkeWQjgdcXpzbZCqMDaebjGryZK2YZg4o76ArEPysFMBNYcrbctWwgxBUS5x7t7U",
  "key29": "27j6wPFTF5xpsx3Y9nkWWwQCyrsDfWu6LL2ZwW8kd2MZ3jA3fn2qnynbhvnCdh3aYSryMUffPZXHvAUzJj4kujRs",
  "key30": "65XZhMz6KSmAuCPPMTMJmC7UFT2MewkuVHPrevwJaVCYw3kPwetLc6d8VpCgB7rd9JiwkxCNT5RY2EvXM15UJuza",
  "key31": "126QuXkidA2sMcSbceUvxd8TM25uToqGsbSSx3YRCCRPBAL76WJd6wDP4q7ddsNqSK56rujxecpxPPfnTQKCQkrL",
  "key32": "4ie7s6nfmfxQZNBvnkZnmoBYp8JVL3oBdNpPZJrpWCX46KoXYFiZxEXzJN2QgqKvQCCbafEBxkZqToNFCBp3uRfs",
  "key33": "2di4fFenMRzJsoLHuxXAC53FceDoqjDUaQQCnqjd2mKS8HeMt86d6kdK3FA2cQ2J9Gxos2gcks34uaQWHa4PWmca",
  "key34": "4jUc2NuZNMziSBk1JsrUxNw7yEASmjgPCGCDZLBNtVsddSHviAPjhuNBSxENMpSgaJPgZmcpw9dCk6d57uDteUFU",
  "key35": "Puru2dAn8FXH6CPP6CpE7UD2CFbdqD4qS1Nkp1NhfLUJAGqNjcZniX8b5AM5VYSfXi3v8awXNLmLEhcV9z9TruB",
  "key36": "4pXkjAFNZBewd4HSpgUbKFNv1UVqUeVfFws9Cp4rJ5q6wPwSd67Zv6EhKXZJgSkBt7ew1vd6QPGoREppRgTeWvU5",
  "key37": "5ej4Rdye5hRjJhAmAHnZorUBUjoEvgjgA7VUtKew4mPFNhnEnjhHsVgtUfbtCDCKSHPwEdcvzm4tR48w6GL5oYpK",
  "key38": "5btQmAvwQUDEogSRjSDH1czZq9Atu1ELD8mPpVcwDSfB5yEbVkmjN526oFd5VAvibgq8EsXEe4aZsfYWjq6Zg2j2",
  "key39": "3qTwutcWeuMAFvg9hjTi7RXziEon7qNyizFhGE4ox4dQDqhAhhAafTrrjq8ncsLr4S7ptnhucNzSdivbTMuWgLni",
  "key40": "3Jrwn1YnuRxRDnPowpQ7AVp4zD2EFwpLg5DUmtCKv693mpQmbSCCF31AbWLhYK6tVNz4kzshjkdiTzKFbxDAFziC",
  "key41": "2PrZjT6jrnjWZnQuyyXJTZT4Ds25gj9UtND3UKWZfQa9xSMNcont9TVzyEf7TWPfnNJGYnPFz3t8wJBrLJND2TbH",
  "key42": "41PbQHfGG4stw7k5hoPnpK87BqFq9CiWHdBtpr8k23kRtUHWW5enXKfwiBMSjDxVpu5JrvB6W1kBBxfeWws8kadb",
  "key43": "2SWPKxRLC6o6DRL2YoTY5GExfY5jJN56nuiN3WwLF2ZkXibULMB6sVL4n47UheJCbYD2kZBgQPaQnkGyjy5JwKpS",
  "key44": "3sLiXLtTKoacAaHXs8vpHbUSwbJs5p3hspnNggDJguDJJDftRD5YcNhJUzSZHXn8wuN5Ew9TZ7z5A86nCtWdLjRc",
  "key45": "4BMd3uXLJxjezXYgb5U6DDNjvYnKh2CCAmnCYw1N7xWpHpWm3ETK6V4iYZWrecs2e83i8f3QfkcnUdY35fZPnCpN",
  "key46": "2P2drPiDR8zpdpCN44YCA8ZTNkKinek4C7sUqiVJ8TYSmr2ZEYjeB6ggz3yDdo6GnWWh3BHA5zezv4xNoV4YWncE",
  "key47": "52U2ThDhdG2cVaeFMMz8fJPZk6guq5mAwE7u8SnQArgazsdbCgr6TGWQpdia3fqkSuihsXkMRzNfngQWwrcALRHD"
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
