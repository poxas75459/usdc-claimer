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
    "28HADwcRuaL38hECBZ7CEcmQTztifyzEYj7zbw3gNL9xHSLf2joqpeEi97E89L7cKLuStVoiCGePKyhgaQgtSNoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czYe6EdeVu2HGgexjHmTRoa6ucjmtLspe31u6H2HWhAXjc3YuNES1R1Qfvq1MHvHx4c33DywHEy7kY2vFjrNYLL",
  "key1": "5LFzDvMu1ZY3NZJ846i6MJD74zZay5fJ9G2GQ16Bj7HRCBYUp7AuQi36KhAU8eh79dDryue52Te2n18RWqFUUewr",
  "key2": "2gner6vHnZSVoFw8rjxHYmy4WCvhWYhQJrx25FQPG5WRDPFJMpXYwiNg5RFBB9dMb6RedjTW4SgirvEicZ9fzb6Y",
  "key3": "2Yge3mWbogjrXKVpoXbQb412CtJZoVuRLB8j3vpGs4DtKt1cQmV33vPrZTFNJNxaNpU8ogaDSZcTUt5uHG96BnGg",
  "key4": "2SiNvCRBDDFtRKWAMuRTX3jXhAmuhZQjxQNktEa3SpKehEmkLjP43Qbd7zPsdNDLqGdxKX7m7nFRJvaHEPxTAm7K",
  "key5": "3Qkvnes3Jnrz8J2hNUHTFst9VwHYBsyBjf6txzfRueWx5e9MBcJUDVZ3qhgFXikGu7PjoxHPpvvrYGTBpN68qXgX",
  "key6": "WHLN6NNpSk6hZ4DJ4J3PqgrySoRJyTiPQLwfPZFnWkpJ7w3A248KQWzvektEz7VJA77ANWvZgQ1Hw73NzvLd5QK",
  "key7": "4xdfaytcPt2uG9B9b8WPaNVLtQudp4qjxaXAXXjyr3KbQWipmJKe8WWxbqZt3cVPGcy3MQ12r8xKWp5V3tFFaF5Y",
  "key8": "4guffVFvuK5ZoQHgf5QM1q1cLFqRzKkgpXR4jmTaiSNjpaJpEwapfX8iEApVMKc7cN8cGJ9sk45b73CWtiCoeQ6Z",
  "key9": "2YmYqKtArsypVLCaKpE5XYhS4cbrA4BXXHseJqp3TbJhLQ5tNRJfKMYnznhicEkUpSCtTcAiKQutKJiwF4UZg7mY",
  "key10": "CMYgLaKWQkWsfyLEk2FtvvVfVc8pZgAD4YCPgcSFsS8nDJ57TYVoADXw11Xtvy6Y7nyfGN8yshFJF5SAmPXcoXE",
  "key11": "2KnVsXno6npWccdSoVrDbYNrvc44V3KwoHnND2AvsVkyuu2mhkfR2EADVb5ypneNRvMbcLw5JSBQYM6VCbj5NiSZ",
  "key12": "39y8BhU6xTPdBq9DBHYnDY7JFxmUB4YTqxZ3vVvAkRNvf1GFHUZT83v2qJdohoYYjcrbEh5LJHbrK52ruuJ2p7Bk",
  "key13": "54AWwY3wWqA9a5WjCNUHKhTkVaM6yiKbN9ZsfcQiyxWQxXBfUYD3Rzot5qH1BqRWaqf1QeisHd9B9KuSy1qZ3WHB",
  "key14": "5MZ6mYqVZpfMm8oE3vJqroCpPabcEntNwSdK1SGR4xoXmKVtGEe9hw6v9NN5YR35RoUEmTNDJHxUeppTtnFK7kD9",
  "key15": "R8JK7wutwJ86owhPXcCRGPpiHqzkGMfKecs7E7WQZyixBp3udE1PuqCjPqkkfqDtw8v3Aeka6YXjYngVU3m63oW",
  "key16": "3BzFVXwsgGuGWbfR8ucfmsZr9DRW9GxKYg39wgS3xczS5aQ6hoVtQK8diFkGtSPA5xXfJeHL6j4pvmxQHpCYzbrA",
  "key17": "4eimhYw46mJoG7TL6yHNYbLX3iD2gZ6eyBeWc3MHwGdUPv1ZZUC3L7PWwRm1Uggb7xt5ApL2PEQmFz7jGoGatfdj",
  "key18": "31b558bfQbWyFmGUhyhB4pa2e5zHmi3d3TtUjf4vQeCTjvCovH4tgU9kyzGJixQFg8bRvB5vqgxqqohME3eav1RN",
  "key19": "3MWPGivDebajwJCyZaDo25idDSUkkoHhusd5MEjdz1o47H2ziT9r96VTpCbBCk1pcdvYfZXJ1aNxi9uLvv3StcG9",
  "key20": "275YdBtmY2ofgTartf2vadRfvbRcCPBWk5kDXNXYDGaNMTtLNw1HsEo4TazJPEQArd1xmdSFwFcee8HWXQ5cVNCH",
  "key21": "pVLHqvfK6ySkfu8ZEhUVrgTtr5pFzFm2CDg6gr4yESmYMNJhxLiDH9wWw8vGKNPXdaUEmJ8Gq9br141K4EwRZpn",
  "key22": "2agRUTiy1EhJX8MDcdRE1qpELYe5vSQhYwPwFXC1ooRnxCUxXzjD78iZzhuJFiGWQwpdkqVnfxSrwZ3FYqGYwWTH",
  "key23": "5W8c55dpReRXqbNP7weenZofXeNjbb3imnLxM8Mgnqr3SFeXpDKoQipYPbcQgktBCteFaLPjkixQ1APbdSwtWxrw",
  "key24": "4bQ26Up5rmQqY6TUh73wv55JxZrsPFWYpYEYn5HoVwGZbDDty9RXW7NnNp4SSV5h6Zm6htavD6MAj8t1ccmdijAW",
  "key25": "4Rn2RpdAMz5arvLnqpnUV387fUrZ5Ea2rXht1iMzpiH4aRVrC4Nf16mbZkMkuWjBcsNAE5Yypf6UGVdUC4p2wksq",
  "key26": "4ipB21ufKJ3Qeqk3A2y7D6Qcmwyi9NVN7komF5rhq9pM5rjHTYVjaK8oFwY2hvk7rf4DTrCLGGhPN78RdFJdWq1A",
  "key27": "3JpVYn35rjHsXSyyzxYq7PgPvox2rLyYrmJBNDdYofRoSipsbHk8HkyHMANwS417D2jjdUgUX3XCJe9WZoddsXXx",
  "key28": "3xsjTt4N3i1iDXmhV1eTYYPH6YYAA6CVmZkmKT3kUe6EzoqgfNXNHd1ttvr8Q87vbjXR1zw63CYcrHr1uSihyhJQ",
  "key29": "icyjrm8GX7Nt1USJGQBAPgPd2t3EB6EwjF1e3ZGjBYXt4p5SsKSYfyAMEiqztimQcwRUvpDa8JNwmZGqJjVhzpt",
  "key30": "652ZH95iaDLjCDwW1fgMiheMnde6UJcwK2jYqj8hJe72r2JKhHw1dhjDmzJ2Lwz4ERFRkPMZfP98fs1TJuU7j5WV",
  "key31": "cz3x8a982F2H3m4Mur8x5kEyZDxf7huz5wDMxZGc45x1q3ujNyDhc564aDUCioL2SrqiF4rfdBb9moYXCQUngFx",
  "key32": "AcEd1QELSyB24QpETqNzEzRadiTPpnYyShuSQyPJeW96Us5LwLT5FU4cB4bDRdyg9ZwHr5H84Y9iuA6XVyFTeCm",
  "key33": "2f3FHMqtbnyQFQ3gzHYmHSyiryvWLJUhnzVFR9Xycj2v7UFjpsKUYzaQgKAeF5WuCiHNzLFBq5cFgdgGNQfUzYFj",
  "key34": "27uH4xEQHir3PM3U8LLCZVrbgf8k75JzZPN4ocge7EcHuB8hzhePSCcxY4pkmQw42kVmMthMkUvc9Dh48mD1ULc1",
  "key35": "397w5P2HQGR1Bg3JMCcmT2yggQYtQZe7ZFtKKuoMsYaLsED7oVQRNi1D5FFh13efv6PNQNA61pWR2ZbLVZwssjCT",
  "key36": "37JKS16AvqE48g8nY3781zLGNcDvaWQDdVonkoNpL7d2K1xN9SPeUrq1x5mgqE7opZfmNC9k4HepBmk67kQ4zrUs",
  "key37": "DuvG93szyjoCD1semRECMoWJuibaKUfBFsQtnuaNRt2TCcjjUnqY8igjTp2Zy6rAVwsPew2QA6UHYdNqZcSVN9Q",
  "key38": "3nDSjujrfyELxUAyXqyvJrkt1eiZo1wQLRp13tw9SwbtAAN9P3nmLW8chUfepBZCMGfkeTfjEadx5A6yoPXiaxTF",
  "key39": "LraHnrYvJkpnLbW63wReNJc1vsmAL7yCzjmgxSDvtfW7y2qKzJ1HXbjkKJ6UBRX5hKGQExGot3YRUvL2ZDPLDBA",
  "key40": "3mcoWWgmVU4XvjWsSMpUxbrid2iYHouD25xVhufeVZSFL2bBJD2WKRAsxejiANCPX3WkbrGEcN78HiDZkxtKJ2QR",
  "key41": "2vKMfweqfdWswEmPkbm8Hh1FEFZySTL9KFVyeyNGec8SyXPfDYGD8NuQzgfsupYt6cenzwp1Dq8Ker9Z61tC6DaY",
  "key42": "2Sn2iXvnYqwSxF7aZ4d3UFiLWxzM7mAWZq75Tc8ptxTswT5zYvV3vBz48J5d2tBvYAnCqNYgL5vCWotpp9VPSUCG",
  "key43": "3Gq47Pyk8pfPCvhoW3c3P8M3km6ij5s4aV8e4ot1LcN8gPoyoSJW14QAArHvXcGuFC4xQX92bGCjkcagUdUfJypC",
  "key44": "HexuWxBU9mLKx77AFVctfEmAwb3R82fcfGV7Z7vMSspWgKCmobPJ1EtcMSRYwLSLAUpkQuAAq1CT6sU48AoNt3N",
  "key45": "3tgGbipZYEdyCoVwaLAYZShQTa2GGUWvhdnA9NiaWkju7m1xEg6mNqYUwtYb5ZuPqrmMsY7wMzNSD1pkb6LCrWb2",
  "key46": "w9YriCbZevvg4MXyZLiR9hd9GweajVJRMCFjhhY6qEHAMJo2eN96kTpg23S4Xjb9x7MeXv18MHLxtKjgGxTVYjD",
  "key47": "2T9pnabwRNMr8pzYTkcMFbCFRByLf6iHZPLAkNks7LRH4L9fxmTAJ3qwa7jBiv28DdiNi842WUvZytjfD4L19zY2",
  "key48": "5YhonS2cuxMi1orwsSVRDPoLD4WCN35GiGpfNQmotm57tRJo1DVBQQmxUz7hAA8b5dUGmMCQpR46YJ33zedg6EyX"
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
