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
    "5wXfmP6mv3JTUhF4Z4a2NF2cQcsK7h1uABCXiiT7mTzh1FHYUh8wo15xmrge9j8cXR9Jx2za6qhG2B6uCfHfoSpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYUG5JZ6RQZ2doM93vK9rCvGkpgBbcwubtCDns6iSDKm7q7QdHGMF13uj5TXrWEToV1xEPGBf87qYVgVdSSESVW",
  "key1": "57SJqCdm5WLjGVfBCtfnmPYmdNg5e5J2Q657392oz2Mn5ywDPzGsMiZHxt3xEtDjqskq6UMfHXTMc2fhpEX3iZVR",
  "key2": "uhYj9sBYoLgQs48T6CeVq1RLHqfphRiX9bqC4PN31jDFZfmG7hW3anBWEYXBeKjXg3NsmCMgDYKfo8H9U3ZgdPe",
  "key3": "4SvTNF6GyHGAKfJTYjRKKJaGMdP5mGA6TsZ5dETQasj7onkscjnoeA6rhja16mTQvNfwPKBAj8vr4BLaukqpkBRg",
  "key4": "5wpfK5Pu3Dxvayi7b23QAHaMkXVWH7wMdsYVbt4r54cff9Jj7kKYUtLpoxwE2tdK2HEtt6ZdM3HMQmWMCjxH3WuH",
  "key5": "3DXm2xit6qAmf9nEYegF177WwPjPimAn5LGxsVzeyU1kzCoCtm6jjaxEPVbkPk6xisuhE17ewbPPWzC1jnPtHxLW",
  "key6": "tMiUswHCLjFjr2YxoVqVJXKXRhSqjHqGtougBou1iMrrRtdTonEtS7y7iy3o96WadWoSAveN5DWLFF6cVA5owav",
  "key7": "5TJsoQ3nuJXVjTGZfx3x1SKof5AXg6Yha2XCrhZaT5PBbxAyN88xGfb1PtHACjD6eFvCNLzzFd57A1DmwjJEJJjr",
  "key8": "55E7joGUUZEdMMkTff7h7rdJf69CSs5p3kmU22kQNFDuCxAtRdVNHm1exBRWRDG9LwRmqUp2L4V9y56XLrzyku8t",
  "key9": "34bnipoBH9ynf2zWcTzc9PYVumhRwYTntWQ57SboyDkuWGXeG8p45aLiNdtEd5WzyNVusoJ2zKnaFN26KzJ5AwAw",
  "key10": "38dr5xk7McC7rHA2r5Hw2617WjHAaXXdwEthVonLxonNGwD9oXK8gi7i18ARZv4JbbW7hdz7DxD4ZAz2aoXVh1gg",
  "key11": "4HGvyJEH7sSesRUNrhoLJG3EiZkPiFgzx8mT2msnLYNJEHoF9WpNAfW46LZnNLj549J225eDD2EJChXAFcUKKAUW",
  "key12": "4FTfgLYYJeBbjDNKbBhjfh3garnrbsy5BvdPQMnmT7iPLyzs3wnaadH46pYTsHmCfaFyMQHMyNsYukPGbSKHCkjC",
  "key13": "4TSJ7rAg6DSdZf735TknuWAAD8dPfPR31CYDFPUHK1WMN29R1pNXZ3NHYGHaLPZgXnDXMAGEqm3ZZEu3SpH4MpVi",
  "key14": "4vR5HeHWeCqWWvFpGJBEW3ieXbKGQRfArFSFMohnekoJ1d32TbWjVSLf9cn3obL6XW5wrBrG3CqspuaZ4xY1zdEj",
  "key15": "DpGTjtgMmbmuzY5Cyeqss2wBAiJ8TXch9jg1NCpZhMDi8oAavuVhiX9a1dBSwHvKsJL1GfugobBj5AKHX6mvwU2",
  "key16": "4Px8dcRsSLnU5iMU7Ev1YwZVCjPbJgTBsiqEnxWjpHTY8tv9DLngEv5QDjjXhN6v82zY6uqSwU81zqzBtdi8iFTH",
  "key17": "cBw4m6khwoRPVs6eEFqf6wZvvjpy6VnCUaUw2P4Z2eknCHRVMHBALUAm7PawGdzvtRZsWvuqaCQTasDW9WNVWqM",
  "key18": "4PaZi2A7H4ppQhY6HNBfRLej3hVsou6LDZGxaBXJgLZRioYAmXts2uzc9y3EmRakoQzNXcjeHsmGQfqQTh7JB9yS",
  "key19": "3UBj9BAFqppwZLdABLn2umdy2YE876hSsJSMpt6hWi24mdJDmbXkPM7Tt6w1EKXwKVEJ91X9iWS8tpzhLSvvzaR7",
  "key20": "5pPBkRq8GZxphEa9L9nZsginHhktQMHBxuuuvwuPeYRKRHytq3iM2e4YHdcrXFsH8L9m6PbBfi5Y34YkTVXdWT5G",
  "key21": "5PhF9KCfpHHT9NXBmHpxPXDzjKsCZXFqQnuXQyGath2WTqBuTZvvobyEtrJT19S8EwGixi2h6TpqNSXQbNFdDGvp",
  "key22": "jp9WKmkwF1A2X1J9KpF2y1kUybahE9JFm9MFajrBqvz2tVTHPsfoWVCJ5AdyieQ4GDXNLFxCxeRvJTBiiogGcX9",
  "key23": "2KFKpHZDBPNuhcG6o44fJrcxLzW93Sp5uhosSwHwYEknmVKQx1CMcUM3VVc2aPZQFe6Ybhq4jxFY14r4qCZVbxaa",
  "key24": "MpW7qrVhbLsVZWeM31cf926xyTk7yooShtVsue822owEEFaQQ9kJRzsKQpQfYacZuFkztLBxqDKJRniX2heGcq9",
  "key25": "5GcFVeiWEE7YiaVDDZiNEB6fRPvPjTU1EqgF4am6FydjBqZfWPGyeGdxssxbrCDxnqpLXe9ZMsAHEgHqX7uMpLj5",
  "key26": "53JrRCQ8CFhC4WPX9qJfptMAgT19XqLYF9Mppo5ANyi7zXRcBPovi68qMhxKGrAmKgQEeYKFiPwfjzCEUvhE69ta",
  "key27": "3sPhfgM4u5gtmcaXXtdjyX1G2GgAzvDGZHfdY9Zq6RXVmVqqf6BibvJjqqZf7pm67uHXPhasNQJ8FXamWPxyLFjJ",
  "key28": "2xG7f7rKa4xmDdsbiPKuqkMYMykwkk5C1uMSQH7EEiMd9S2U7tbeFS8e9t8iHWeb41GVbA7CGnoM7q67yZCk3fzU",
  "key29": "czjNfA6742PDXrM1FuBsN7eGrxBxpekfdzjdtsETUdSitqqid8vyWvPXjSsuP3LZs75LG7yEwaxkunXbZq444G3",
  "key30": "5SmXWD8hPtTLoFucrrPaFZreAMNemoPNGxbBMT7fVSfiyWZtERqPjsjATUzemimpZ4FSDCTCCDNikKir5PZpxkEN",
  "key31": "2B4myhX6UKYRkahGiac1n1RZHipUM3WSRZX3UxLvgv2yaGez8gwM9PzetS5QxtZ1RNHMn48BLfLHH7tTHJQw8V1Q",
  "key32": "33AnCQqPAXVZ8rZBDptxqkAtTsgnpaZu3KAv9XWv4QtxVoqMGSvUmbPiAB12T9niwmX2zchVzgH7QQCroCJTSJie",
  "key33": "5dzdQss5Gmw2KgKuwWFNV6ZMHJ7tWCQssfV8WtGVxbhXc8NSYrRMTdgsYgftMpvCEptSw5n16FptB5SmxtdSjycD",
  "key34": "2uvXvXuMuqjU1PNPJBCTX6yXK4hyv34DdG8gdLFJZYkeTZ1EuKnz9H7nqdJeKCbXjxYrf4gsr9n7Nh3pwF5naWhY",
  "key35": "3pXutPNYtBSgjAxN8mxfqeM9ivuqEnrK4oy7oB4bfSUUUC2JJo4q3wPxLpmkXHd2JT5WgsjUn9HZfMn3ueg6HuZb",
  "key36": "4o6Q3Yzd19CTBm2CwBo5pRKiJphMVgSNA5T2gPuKsYmVTuZTHGUyaTkgYZ2FuaMvGcxDpd1i8RDVR73NcSCu7cVX",
  "key37": "QwbqyQNmeAjzvak2qQg27nVQR9g86N6VbB9FJj1P33FyeL8yQAwXVhc2nZ2nRG1KySPKYGs9qXpucKcfoKyS7y4",
  "key38": "4vJUXhKUdQwWpM85w8K1RbwSA6woy1YRDGj2agj7Y9cofsVJKGNSdLAD9XJ8rsh3Xp5Ry25NqNqURD44PXXoBWem",
  "key39": "224wtGTbWh1To9h2qCMwbamqduDZMhmqcub2GqfUNMeJUoeCEfQseyomoDdBLvJDSTUJHQ5hB3saot1txxXaj6LD",
  "key40": "4VJm3VDyas1cJkXLhde9wsQjQW5CC6rxEUxxoDYh2HohvYPoxe1kLZB4GStUJ3c4TXQrXcfLEbULYWdWp2LmS6v3",
  "key41": "4AZZrnbz6fiZnNhFKMTQTmgrao2GJEXGvyj3XrCJSGU4vfNw2iTzcKN2XBpyr3sudZ2XoRKZnnTS96ZNaXthYYw3",
  "key42": "5FTtRm99zxhvJgwHhyo6Xyt5PQbTTZxvk77gYFpc4eVitKTVjG8q4tyxF83tdMFkjhMLykXqLCUm3vaLzKeDmp25",
  "key43": "3NwyDZ8jf1wtBjCNAFZPTpgrMTzCPdp5poZjrpPR3rHTWrpk4VcxUyy3KGdbgvRgoxfvu7U4TDgTv8Y8JEz9GLNX",
  "key44": "o9MkFNZvEP1oTB7FXt9gBhNza1CChCH4JkXdvggVdzU1Z1Yjvc2kxyY2Yf4yCftq85zkEbAU7NuAumm8cS43J5K",
  "key45": "2fDNTQHnRTyUL4BzvPU88mnmdwywXeCBHeNMUkQ6MKLrWhPbibFScuYoeYrD8BvDNEYeedosABa1qjARDLX5cYFz",
  "key46": "Z4dGJ6fDoqP2YtFognDz6wRMYPptzz3DAaGELeB5z1bVcEfNDAo8CvVxeo2Y7oqDzyhCeBthPDk4oi71f9twuKv",
  "key47": "2JRZeb4vETZ1kMSp3MHiUtQbkA9UZDQ7CnFudG3tY7ij8j6DWsPwhLCeBW7EjB3co9qhZ1Zx9YMPZ9qUbDKT9yNt"
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
