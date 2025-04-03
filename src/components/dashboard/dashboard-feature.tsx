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
    "247f2RXVuLewDdM6q7TwgkkYpwUs5eGkDCSpZakNBTfeSwHDwdoiNRsazPbyDo6c1L5hUrYSNhutd9GgPDTBQ6QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPafSLKTsvb3NVarUyJf6788YCibZmWUtmLNDPYSpT8WzmMhrmxc4UW8oLYH2PjogAfBCCNEQJSS1p25ksHs7Sv",
  "key1": "3pohiha91Dax4niZ3JLo9qXDZdSsabxW1Qs7E6y8QNN2J4pGYViVQgUWyktKrXJaTEibyoA7hys3tMVDiJnvq2yH",
  "key2": "2tziScwHxqvVuLpHwgPK73zgxEyapaanB1ZfnLjekbfQ5esVCPePM4UEB3pLqnxY5wL4SRxvMCqEgK4v4XrEQufn",
  "key3": "3c5cdQFtYXbdqjXG55MTEPZjNA9XnfiAzpJr4zShusyJQXaxLMhfNH3dnwAySNfCiexZukUE5E3njQLsHCBH88Cd",
  "key4": "5kqCQ9CWLoKY1YvDWthsUT7iRp8KNLD4ArHXMZ3x5t45UaNuMrqc8QxKfX3jv7hjt67KxrButgrtLtYhDwh5iWnm",
  "key5": "5U4HWCzi4gnpeLDkmcAL5ghW6stV9tWWfRVdhRkv3ATjr4P65wn9uGohk5Dj1hCCfscd8C6Kmz143H6xazATbhvw",
  "key6": "5C9FWgEXtpCgckjZuxSGDpUryxiSQ8p6B2ASyRtfpevYJkf3mC94ZCkGzTySYft2UdFXoFyVHVWdd4JRyCqgkVqw",
  "key7": "j5sgxcYPrWZFcmMrSyVhLDw5hnWMrsz3pJerwsjugxcRaEwedmBzFAQ7XvEWHtyVLwzzJAzxnswoQk2KnCMxeLN",
  "key8": "9PVG8KAB1sJ3kxAou3USEh6twY6YNp7qquF3aXf2EEJWy5fvP5ez1JEF3nfmXg933n5Njw9D7XAuBpXpYrRsWkW",
  "key9": "4spjFNsa86TwPoFpS9WBCsqxAT9FJEQXkQ777xtsBxxJg8u2A2UdKUxcJWmojPY67qvUJXmMXxyGRBHA8FfFtK3E",
  "key10": "4ECjGC5CYRd4JQS9ya2inYuFN22PCLGMfmJCas5wS71N1pvu8fgwoT8dkCF3kBtnPsf3PvyvoxvnbyBo5rcGbWbH",
  "key11": "2zwTHdnkuYRLhnmHTYs3nNvAD7ruNuwDPGaWiKFu3tYPJbeWuKsKCx8mFRmEsyphtDQrnUDDiX6SwWotpuCVHyPk",
  "key12": "4aPqjq6ZtFg95W7T92nF3KXNX9PVT623U9iFvfHm1P1rCD8XqcjnPXgTivzcfy7muWCRxzPFDVkUm6XKat7nsikX",
  "key13": "3xAeRVQmXXHHXPdAEdq2FkFShdbs68Utm114c9xiXQa2Tj23Vai6Tc5QfbyAUxNt6t5EQzPcuPRcUS655cfNWQXb",
  "key14": "5HAdzXwfYv2zoWNrxeG7uJFFMpgyxMdm8BUNjg8kvztvAhj8spEbbWVNfGyTiembjcbB9y4qYz6t8Eozxk2vbqTN",
  "key15": "5AuznzrG78p1DEJhqRuTxVocd422Kc1nHWvw6CKrtkE3ApPxQrtjT9axxqrJfgEu4tw2SKnDN1bF7E1rtMKmNFjh",
  "key16": "3Pi37qeDzv87oBSBCEYSw7QEQex82pJdN3bzUoAe5SuZZwcPdt5XxQeiEgsBL11Nz8ZZXk1yromcBVf6U2vNDuc2",
  "key17": "48npcsacyawiXLnd2ywzLjUVn9JhRU9zBxRp47oYWFN5zUbDFMkvTeCRHuRfQCe8xvLWtMuhpvmGNnpCuLZqBFtW",
  "key18": "VjzbJESxaV6cuk82NkEPLEBB1sMaQpPMLhUoPo11xRWhJBAt5Cg8tQ3TLDzgEkhhQEHP91q8YnvHhCSa1QYRzeS",
  "key19": "61bvyZPqGWD43MegTdNtPcnAD1PZePTbRhwSidK2xKKAVPp8xCcCM3x4YhMGxM8gUvBqxcJoxYUvGk6DvBdeSdM5",
  "key20": "5sT9CFua6XthXqJHQdejYCPCTM8AxkXv4wzcZE8eV3jjKhfsFk4RQv7KutCNqaohCDP9R5J6D21kBvkkZqWU2yUj",
  "key21": "2eLESYZnQJ9kKoPN877jJ5r7uwrQJUPLC6x3UwKZue7St5ivFXr3Jod51626fV6LfTcwARR4YRoWrKuF9fSJHaj",
  "key22": "35UMTMMFuJm7LTkKyyJGt8N9b6r8Q2PGig83KkekcRdt7m4XMK872iAKh1ndhxZqN1pRviMeMwWdw86WrnbZXVvm",
  "key23": "53cjc372U4PZhV3zkEuhAxjUaXQKUqEp5J8wk1STmnzKfqK9aUqUwG78YkscbWP1N7xMSG236ikuhrqeVnn2M8dh",
  "key24": "EQahizE7m92t659ZCCqUjdKFBAa4Aah76RVSYdhs47FMFJ9rjWSRPAi9iJY1p3TDYTVUmC1ij5mkVTrfabwG3t9",
  "key25": "36cNKon1FTKyT2Tr2niEZDJC5DaemmPtDAVJSdxvCje9oshwrcVaRzr9TeDXyfk3owzDtxRkYfZ1T7XK3GJ2ardK",
  "key26": "3hrDC4p8fhnGKh5mD9RLGBRUiVAJQBzoUs26xhCHpoLzfuUzGRsqjixn7rc5Lz5u2epVNS2PHMyhwRQB3g83JDLS",
  "key27": "4CtBPQnFQKrEjAdnUryvnDGWNMaUUiym8XwxpuoAJyZpNmCmZgazPoywqc8oVcCBC1DBiow197WoecuEXKTqkBsk",
  "key28": "nHX99zbxzofVhMzqkPwMBUyWDYbC1gRWHnSoC8AxrtZEK5KNfpBR4367naLHc2Zhyn7B5pC1483bLctNfxzEGWB",
  "key29": "LxmFxGrJimgRpFouJhUgU8mUxZGv5SQei7RBugRFYQ1f31aiAkwY7e8zDRbhoa6kkiVL924Boa8xwH5ph7HwwKZ",
  "key30": "3WK7H2eTcrZ7mKQKUcsau2BwUUXR4qMm5xPbpK6HMcgu7abijCrT1XsnWiMrnqLBThajkGvdNHicKh1VWYz7aXXn",
  "key31": "2HuP34jTeneAfQJDeETQ5N7Vit1cM1VSzKWQU3Eib6ef1KeHSSCk6xLBvUmAXykV8HSn8NZ7pE3vHQDVRQo58uaB",
  "key32": "GnhikrJsAiWHpWRTWHEmCLJLMqXbJMzPY9pGsDc1s4QrNFpkckwSQLicamokyKb7aoL1h4VoXULtg64R4U28PgB",
  "key33": "3nutrU8JkZxLW29PwxBBSmDbVTB5xnVjngAhsqkPPpEbQkKkpP76zB2THmwh7Dsvr9XpubephRC5CoJuv5Qsa89e",
  "key34": "2iUePc2ejRHPDydPth33rQQKQrNd9GoXg1odvLktEqaSN63UpQe92SZEkwfFCKE6igDacYZSY7dVJP48cZ9G45gV",
  "key35": "q5ma9n9FHctFFrcdPvgb7q4JZG1gFzmWKNU9dPzC1tooY82PUdshVKAmgbgreoe5h9YDh4WDyx5r3feFmbhdK2c",
  "key36": "4LfREc6w2DuqS5nXpFdpKymfV2BMTxzQbKupYoneMZGwEVVEQjLyuaoESxREycsJQ9BPAoDR3KvDYgoGRC54zSTE"
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
