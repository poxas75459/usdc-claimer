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
    "2twqNdJDQ1MNezQse5Cr6J28VPywourtCvRTzZahjiiVDFsrRaG34jkxFhRT1VJyWYpHvHT2FAhCKJcfLpZYZ6Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QDUaquM8GxQwVaxNU5hBTnqfCNKGhnWFnH9VfjkbqPNmqUjiJh6Wbv7rM3nTSdVA8kx6bWxvRST6oBHjyjK1ag",
  "key1": "5JUwiiLM8wdyax2VkejFPRZVVnm1xF5zUzqMDhxe6GYuKkJv7vyDtmqNKuAxeP5KaZGFN7todJkpji27TK28UYyn",
  "key2": "3ri5wYkZaP3nq125MkmzAGACZbbE2TAjq6RA9i46Gzb7wNsoVzBnn5TK81QT3aQ4azWkZsTLmgDKPtsGN5HobFzi",
  "key3": "5yXccdCqzDTNREcDdmoUnX69xYhLjizeYxYcmATPdiQJuc1YNGVVnFoX26fJ12oUm7LY5PD9CpiZfxe2Zq1UupFC",
  "key4": "Mtyyb48NG6LA7vmraU4GxbhctoVqFhafveCtfAcTmf8p3GFA4mxvAo7F74Cbz4V4bkhji4hZRLSDrW5w4WXsQGV",
  "key5": "3T1MJpKf5DV32hZL5b9a1zkkgvRF42hSHZXJ2sNh1J94EviM1cGCNmGGJ1Bd35d9YzXcyHAVu8a4AzxgtzBwWoVL",
  "key6": "3rqkBJSMLXgTVFyy1hifUPGyfxg6mkw4LGSnw9wdVLLfcVZo2LuM1a5Jfy12LeRDsKY33VZ4KHNFPk2NQraGYMsY",
  "key7": "2a6vKuq3BW9GFreno5YYtN779xojihwb79rikMf2sg6AZaontaQ8xDWtTdYZDqtmaDbim56WG3dyrifCgC1c8t1i",
  "key8": "2jPYFsQfWAuWYJLtfgkYYLAtdNAaRhsu7CJDLdvXpoR8sgn4XnZWxW3iSVf55HYkAawePh5KhxjLp3P2kgaNHM3S",
  "key9": "4rio7H5vD4KnjQPYx2AkGYaWSp9jzNmnR1rqaDQP9CMCRrkEouiz32CeRdb5jvYis3UVsVTwrvdbRHCDqpnEmZ6v",
  "key10": "4jNDtVFTGuwU8wM5osTwSnLpa727EydbHPqC7pb7UbEdEMkf3P7W1T2fedLrRKFwkjRPfW1ebpMjW99ABjgtpBRs",
  "key11": "2mRCDk1BG7kMAKfh4yyS8nv4pPfL3dqZyqS2PdYChBZRyX3yhFzFUcy8EzLGHpRM2H7Z7LPjEyontvfRunpWL5PW",
  "key12": "3TEzcKLhhzEySM89UeTMxgZm8SxZDdSApxmXbQ1NJDcG2ZgWmuVRYHDFA6H1NoExByecNX3nmf9rHJFCpXBsaU2f",
  "key13": "45PJZpfdzfDYSsQZwLWezYDyhbpHcGinD6BdruL23muD8KYCzLchNATRWUbTrKRtmKo31SysgyEP3tNVK9i2ymxQ",
  "key14": "Ky1KEatibCCAV8jD1ta46FHUXhC2ENhDVuosZdsvozj76nDyzHB2RXmwRzQTv8qDWhgV3RfwDfgqAZzwkHV3moD",
  "key15": "4RiN55bDPMzKQTfKx6EXMBfNwaGXQVCtMqHDspQKT6kSeaRYTxYDhsiwu52cXusr2sqA3yM6bANJ1NY81s3BXxYZ",
  "key16": "Jr2KFF4VviZpe6AJ7Mzng1ZPnNnB3oVGmr3X4N5DM9h2sw8UTTXUcLoEqxum6dMXFo3CFv2742CYUvT8BxCYCWY",
  "key17": "2G2ZEM9BcfBM9mXKy2cSVjcib3BCA5yGQu5XphEF6MCWCtERBsnvxP48QdbvLRxdHckZhSdDem5fDCWJ5aiMMvEN",
  "key18": "gxC5ndzoMughkQkDTkW85cGQgZsUZuxeG3KHS5KABECPkjTyzSmGLJSsAjHU4a3TKkfMw5PWMjY3Tgn6AeXWJcb",
  "key19": "4NuMBGLGt6HuYWpLsynrAB8xHuMATqxy3pNKQwWid8cSrfbhiP8wXCMmUBBDfnBiYb2UDrzA7yHJzmrsYA1mCP4N",
  "key20": "5RYhmYD1HTMgLTbDmrcx47t5Z2n9VnoFmrZXQGGzz6T7Dg72GAy87y9QvNZG1h9g1uYEFZL8NCm83u132T5EbPgU",
  "key21": "21bUHgC67kdHdAGcA2cKNDhkBt2YD62zCjmTPmrXTtP1je4XvULycDovYrGFpCpRKxYdZ2b9sb28rA52vi1LjRsh",
  "key22": "3WhV7EwAUEJaiHShGdovKGaJuKN3PznCJNuybh4v3pHd1HD9tiTEQTSmF8s7RHnF3TxiHqZCntDqkMwU31vZ2Z5S",
  "key23": "3EDBhtm1neySiT5KmSSgoFrwNZn4qkMwG5STT1cpRPdupBsdY6NyADcxHwaj75oHbMozyxEeN3EEuAMyqosA5Ys4",
  "key24": "2EqhkcCbHAvYbtjoNkxL9zTHsYiBKLkKwzQzzE7yzcTwSN8dYS5XNJN3Wb5q4ZvW1jGD2y3zNYZH1TThXHDNvgZb",
  "key25": "666xJkTyov8ad65U5oqPUzjgrhYwLGfCWNuewjUku4NRbLt84bZ9D4bhFvxxU7a21SpC7hTQZo5nzyTPDZxF7epp",
  "key26": "3zQaQw6BQLxXgEC6wrdNufJfqgwJmRaKHKrUPguoGqv7va5Rh57xEbe7jkxRE7CRTqAAewCJwBYJL2o1SEyEDXiX",
  "key27": "4eL6Ke5bagFCWvWZJRKstC4CEZSC5YWLY7rFze9ijcgKZo7edDsVYqtPkj64PSYF2DMoGF5srEcrUriggS6P7XYw",
  "key28": "2CP56az8San7aEEX8YPgDuQk8bdXjDc4YCDSzkUDCx653HYMY4YyL3Tc3uhcB2gXKkKFBFsDhjW4pU4hunJSqsLg",
  "key29": "3EW1qDKC4WMHMUXecddaf6X3QprLUA8wjVsW2zLQi6D6Pr7eR7ons2TWxPHhFWSF6MZFMYHS7RruyW9jChJhogvp",
  "key30": "2JRWbjnGeect4e2PmvwkaVPF37mL2NrXPda6Hu4Y19ory6uNX8ToweSi9muAi8uSVncT3jqPHharJW4U5YKtckAj",
  "key31": "2Vhg9UiNjyeqCbTawRnnTGBM84MsVt68Jjt8ng4qrFKLLrEKYmr2GRZfP5g1qjjonLKSoiW4ySd2xka8MJGXJgid",
  "key32": "3QJxiMkdkWjzHsaCu45BfoMy3kwf8g3Db4paTYKLN46cjVKi38ttrzsXKzTAmEFyHBHUBBwHU37a2ktLeYA6hWhp",
  "key33": "4DoK6fVYZZZkf9YvVufaDDdRfpf86dJh6JYoNM7oqv7H7Sgwyg2jjhS2rXJNY58Gzb7UywNEX7QzaCEPZSJ4VSc3",
  "key34": "4Xz1YecM87dwW2uFuLuzWrY7vE4RSDndMuQwmh4vue95FbWHjEBVDYSVTMkync4ASpr7vg9Quiyo1AqnJEEokdLx",
  "key35": "5xhM7mYBCzYhmo3KL9VvWTRkFiGycV3SBJS27idg9UU44iPLcVAFPf6VELj1ccPbyKhWDrx3XVr66ektJBynprEj",
  "key36": "cmd2UGAbiUg8qGNqvrKh6CFjnAkc2x3Kp5AmBgKLV3pCiq3LR2aUEXwE7sJHBEXhFHbLXeMeouaqaHLRDuRWMmD",
  "key37": "4G3KQTnv2MkiW9y8Hz1g8b9TXsUbzJNwFRh7HnGG4sD8QeyLKEQtfRzjZi5wt25xCvGAKWggrUx7hvLorKumq5Un",
  "key38": "2CyHLSmaANZj4Wxhbs9ZVnojNVmbdJad9ngbq6XAfq8ewpkAzHxgynFNPdBtYiopRMkjfqHBkkyUc7TXS7Xrw6fZ",
  "key39": "2sW8zwa93vUkPh16JgsmtUWLkA9mhP3oVtF7uotmgARzqCWfawRwSyuveAj8k5j2hyU2rfujiKT1jeZLZtZzSY1N",
  "key40": "56jJMH89NSaMzMA7S7srwHjUEV3AqZMKN4R7BbKgJZ3xUUEUUwB3XSgHJABPHb3enAnQMcdyuCmbotT2jSHe78WH",
  "key41": "5WZm7X7JSBqsMqf3fFqHsDHpP3Mk6TCAtAji6jcfkcziX9L9THXWyPa47fFdhJjvRxbgBdcEzWfVCCxi3uymYpHr",
  "key42": "2FYPVVQNiVHoX59mu4KWypqzWGyFDBLbKBT9fZ85k7fFrtXE4qLBwLNregMn268w5r4b2Pv6rgVdwCsRSCELTcqP",
  "key43": "5nUDiXeoB8JF3mBQLQeR77EUGPMrGpskDjL2snx4fkKgcgVj91hAxhkXXk16eahLW9wW5W1y1gU3yATn3zwi2iR",
  "key44": "544ef3KVdBkdxBVC63EBiHSsRtRb9FFn4Q3GXKAVok5nL69tJCV7gBagLj9dkFL4Z11Px8qkdcY8Hy7KxX6Tt5RB",
  "key45": "5pWKzSTxPxs6jU2FCgNJ7tPCDmbH89MfVAFPQGHictFVw333fHxYNqw1xqLniKiBsK9LXgjsTAR9t8U3i69igSRG",
  "key46": "2LSvg2VBMnyRdKjByUyFr7FkaEV5W2X9qmH68D8E6A3XAygARZcB1PN13jLHuZ9RxkAfqNPmwuA23ToNmKxam5GP",
  "key47": "4bX97FmPjqm4QZrqxN3xjW9ChsM2xBG6LpmSijDnXsvTyWxkzq28wENsHhAsDwffVFfAkR8cZFfMuXHMhfDTjxRZ",
  "key48": "DXbQPfw9bAUda3FXsj5BucTustGjAieUy6Ab3vuHSRA4gjCeMFHtnu9xJV8nU2vrwhG3msADmo2TitHLqNAziPB",
  "key49": "KJxqhjYKDvRxJt64dE7TUUFvH6uEnrpAJYWwyxRHNjrGLd7Hj1Sn5df4UP8bEmf7Hd8ZsmxmEJrMVKN6uGJbzjt"
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
