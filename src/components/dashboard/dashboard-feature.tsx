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
    "5M7cuGbYwwXapxzLvjLrCCz5zbaiDL7Uyb5FgFFqoNFcJiE1ovRj6au44zeA6Eqky3kGj7SGc5gipKRtb6e8q2nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPS3hK7MfqWBkyse7R4ax9xcBJAdwjZjKGngMxNFUy52hU6MoHUruUXucvHtp8NstZsXcHrDzdYCW9yhJa2Xye9",
  "key1": "4VDRHMfsmcZa9j97zB1qTgVS7ceVSircojGwondZv69GkovcaxL9H8zdPVbY6frH6Sp3jtHpjJUxAy2aUhFBqqCJ",
  "key2": "5enA86CYfBZ6f4du8ARrBJhvSa68XthNYjQ2knooPreJspfteD46MFXpyMwutb6fvLPZWhoPr7ZZ1cKLNWSC7M3J",
  "key3": "YYjAVcyq1SUtyp3Xmgr7ovYA5sPVcXgfASgxquK8XTrb4R3iw6Cr5NZ5uYEfaPoMDjm1eAp5KrTj1yNEW1mgbhV",
  "key4": "4LT6xcnd58dSD51XrGft7ipf3ySyEWMvGTPV7ohEZPNbkNSuznXCMieKq7HayzBwcraa4yNEEP3CmP4Rp4dHH2y5",
  "key5": "4fuxCESbXt9H3ZEZv45ZJMzP8i9GnyXWVaCBtJoHmQFzyjMR6WNSHu4FsGLbXBJpQ23f8GQEJsydjAqdShx5sREX",
  "key6": "5beSnNubbsSEhDEMAPtbR1JHLBNaBXTD4RCa2qu4awHPkNKrxRGt7DR5EpXEZd2SQqto8MWv8KH9CMDABaLAmw14",
  "key7": "2MDsLBdkbuNtZmw2rZqBqMcLExW3zwnzQqEeEjK3ikiaz6QXbDccfHmdJ8VuVPNGskeGhCa9ZE4bcoTk84dVDjSW",
  "key8": "2GjtBeW1F1CrSzddTP1QphY2yNQenp6jydAAJnkbh7Skh3pbyhC1pQCusVSgTyZLzQaaYVPLXesTnnZtXYiWg4eA",
  "key9": "4XmpMZXEvc1jf6uoi3orc84rmfq8vR7Vye5HoLVv1FLWAYwZVRX4C7FA6wCFMDREy2NHjUNMQLwcYgxvDmKs9PX7",
  "key10": "mU73ARzVNJjYc45zmhsuTrB8jyxaLTz1BZr7YEynKe9yFYwTbeSdaJRX8SvKo9pimEHufXdN3Nd9myBG8dUiDEW",
  "key11": "45fnHPTgT2h5tPDxAs738zJXKUXPaGyGkw1PjKZKWnT2oTbuFBVH3hVAKdyyfoM87XXLYysuyCW9ijkswnNBW4ac",
  "key12": "AWd1YGxCzLM6HRnz161sV1xsn1mWBcCWhB6tpuCG2pYXs197cQH657WYiqAC2NoKXRi1Fhb8Xe7GyBSseCtMHH9",
  "key13": "2VjNdJd7LjvBXZQLF4DuN2mCQngTCgGHUAe1bHZ9XEAyzcpk4tg2RqsNYjF6dckbSbKU43e1A9rx3htYt5qnF7mt",
  "key14": "24huFemQKHmaFSwbTxJqnma2pkBZGpugtNYi4A2QRQ6aJFNusrMurU4c2p78tCgwZ4kJZ2wiMtHw1UfbskcV3pSU",
  "key15": "3XGbTeyLCZcdPo7wQCo8sH1i6eiKYnLs7gBvt4YJgpJi6uodpq7DHgTPHf6g8ejgdN3xo1NpEDQfMyCypRhhPnDo",
  "key16": "3TQYeTZxshyNxTNvapMf837Fdx9G41cnQCw5xvDYgyTKihyoHDCwwKFZjRLX4pnTvFAsehuzMpCufrmwkm8ZQDSS",
  "key17": "4rjfcu4ajAfTZtWGKdaXZSEiknxvbemaN9663hTDutXZ6iHe4A1pvjTmmiAbrfZo4bqyzEdZcc5x68MyfUBtSgSX",
  "key18": "AFfA33kkEVTbQfYq77Bgxuva4AQV9ec515od4qL2TaoYMS1cHreSYhTphn6sE4MXnxTjE4etBGFeQTL1rb9ooHo",
  "key19": "3R8G2abAYWW119GuXDQm4R1aKURgg7KZdKjfqw8FXF2djRrQyqJ91JxWuPtL8ZqiXz3UEe1fqTRjdDUW49Z2P5W3",
  "key20": "5UsTF2bXT2hEqP11RbdjuuH53zH57KPE9tcDxrhyor2SaUk5eXXHCiM5yroBEE9Dg7UJ16LJe1MTJC2keYn7j1JC",
  "key21": "3mjA5rwQET8v8f5LPbZ1CkRYQ393gbqnAJPLCLBAKp3p1wo9hXRsNN3UEv4aYWCH1CZmseAvJycsLgXgWnX3XVG6",
  "key22": "67UNVm36Xw4p7BMcoa3aiUUGUfzzwMCqmBs1QnLTLJuBYHucUx9hWfFtnkcuQws35YfBsRWQtAUKJUWKSXHnBuAw",
  "key23": "3YpYKUHcmtFGE7b2nh4ErKqwDzQNEoz9P4ksMnBNgJHSNYPEUYRovz4dx5AXeYoqotLvSi57ii5AtkbDKAWfSSL6",
  "key24": "5ABmnbVgT4G669tRek5Kumc1b9dsTuTQCutWUcsLM1ZdP8tPgRE6s5ZyMibmhbqErRscfNJTqYM9sP2NmwsTreWY",
  "key25": "2UWCNPtGeGC56zfbWzSoBTjPWJy4gGXAx4RC2sRdGTLjRqnUAdYNFFG3TsMpV46GMKYwNzr2fpyycm8Nm3x4gPyX",
  "key26": "2N8Ckbzh5LNEcHFXtJSeBWdZeWT32CuPVsDJ8daNPdfPwPiC1XtDthtBXtmfwuyGGrH5EKj8HjNDb9VvXz3UfeGn",
  "key27": "2m3SSHq2CFJiJuW9PyrTBEKFTFbbLhBwuFBf6TdCBU68YL26xZyWbpp7ekwmXXhAhDEusTwrU4XBHnp9iNwjdzuo",
  "key28": "5Tc2gEfJo1mzaEy6WRNmnpLQMt6DFHGKEk9Fw2RxTMj4NkcFZu5gV7r6JETkBh4jYwwCo74Qzrp6sUx1iJQ4Gq6t",
  "key29": "2LZMDjFajKp2x5oGUPHXF9ro1mBdBEiCW6udgruDXkQh4tEFfKQTKqkBq3rApSKm2GzguSP3idjb76WsEnTF8DjF",
  "key30": "4oGyRj2cs5Wy79yfS1YKDnouipC8UWXxg6kFPQTAxH13j2w8nx6r6LEHWTLeE5CMfEG9sdaonHwmz9VnTqBkdSBX",
  "key31": "4T39BtzyyjWddD2V5dEYUKLnhzqXpB8jVDfEqFpVX9LiTshaSFbG1KNtvyy6U4X7KenX9yFNNfqRbeMTqYe6HkSY",
  "key32": "UxCKgUZkSNJf26Bg7qNomPfnbannsUYmLhZW5mwaSqiYdYdZy1FaGaUfGg2w55dCdjvCRApUMzEsWWdtVLoS15Y",
  "key33": "RvTXcv3dyHjgzTuhMSBNU531SxQL5GX1EphTavmkBMWqd54NEETV6Z8S9Dfb4bBwJKwkqynjMmm5aciDvyBD2uH"
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
