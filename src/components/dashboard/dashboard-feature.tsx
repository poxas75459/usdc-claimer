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
    "282xEjCvbVm4s2Sd2tmo1ZREBE1eJyCmaWFtiHtMm8TLfzPR2ABFnEDDwP5Jsz1EETPzL1gPNTH7jH2r9ox54YkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qqraHn1dadNWfh4uSxcv3NdQYyBwTGF8x78hTbyAAbQ3q4a6QbapoFVWF87VGZfB2aGEi7MJ2ABJGjmzEiGiwp",
  "key1": "56pMuwNKLaKR1fKZC7CTNaBPtbdYtSSPu78TWS2Duoj9u4GQkg51HfViW2PhaDsaR1uMZqWn6HcT83DHuD18X3Ja",
  "key2": "3cyTmWro79ND3rRsubJKDKm4NbHxp61bUuQ2ACMtMuTmovX4rQwGkxk9HCj6xrNhhpqkStYvfh2sFDDP7XDTSnVB",
  "key3": "RCYdsHAatnZa52rfHK55ZCpE2japSJERdWUftHPakwfx4cygb3bwoaWR2rZJ73HVMxnif67PJWUuF9SWzDxJ4vz",
  "key4": "2tFntab49HmSsnQn8nr5CeLNT2yRNP9D1BRsXi9ZXjQS9PYv2x7cyoCfdJbzKkvLGYowGVwuWXTERHuma4kVFzNC",
  "key5": "oqZYBtti1wRV2d5h31Scomtjfxk49NzX6BsHZWcZrtP82cGjPcQqeaGrMCQkCkDZo9jpDxouC4bXbk1JwyC1riQ",
  "key6": "4xXEY54EBX4YqZ94U9jg1iQFunAUVRxNQCZizGMPAzM2BNiBnGGpsJ2N9FF13V7PeNGyQZbEvtQCMCoT6UFtsfhP",
  "key7": "4Lp2TMgKALgp78KGA6exJpYckYqvP6HoG5Fq9ANnAfimqDSDkXu1J8jYWDCfc9sqFhxfFuSzh4Bn7YccscpRzb8w",
  "key8": "5YGLDAU9AeDCdTVSebhjw14zyns6WxqmyKWNp6tFrT7EfTiw1a4Sdcg6v44AwHF4uQHAcG6FNpNeqXRX1eTfvCZt",
  "key9": "5a6jyspxwDQqbm4ZyndXsEeG3SoN7XSQ1XiAC6sAKpuWhXiYCf6eg5ymp8RPobJkrkV43sChuqFi95Dcwdj4T8uE",
  "key10": "5PEzJTGcHNM1bUj666q5Vuh7Qzp7mQAFdJ4AJ8pZ3AEaKsvhgzntikMBc2SUvg2PP471EwCJEvdHv4MqvcX49D1R",
  "key11": "3kfBikkp4UA4aBUwqu2mZEk6S49bwqcW8uJinV14xu5jQHz8LPtVQtBEqXBr1ro5jHNApYK82rvDHdf8etWq1k8B",
  "key12": "5zds5idxH9HtMb7RtQxBkLUZZeCBjhSe6xgrhy2QgZax5rBPC1eeGsJHUAQ1SuKiFvE6hqvnypX3Li6ptgpjYWXa",
  "key13": "5nZ6RbtKfbEoMMdKrhx1LtDhFLEACfKTgaHtEMUsaiVvaSStmyMt82aWdi8ZBH6nu78nnVPQgEzPDCU2zzg79YZu",
  "key14": "3RsL8oqYY1f7uBQyLscNfAdhUv5Veg2QMSwDEN7FsMBbGqPCESYbMe2ciUXxVAV55M5555VeCoN5yqBLpxCKNLob",
  "key15": "4oPnDdwoRs4sbsDtMXXF94w4JNNKHwMSwEY9PdmSWVwkaCZTWAzdqAkkuzRSAi1VdvESXzFJCg81nAjdmTe24t8k",
  "key16": "2s4Jjk4SHibjESMAadwtFLQNSLwx7wTdj6oVKaLic5795E3oTm6qvD97EhK5dHfBLBxV842e2HTk5S5h2s6EWaBp",
  "key17": "EbYSQt7AneQRdMPaA6GGCG5BLJB4bAijxdwfWG7xSUvgJVahuYsxfCHYTirkLGYjWnPVvspwxjHxexLoETtmo68",
  "key18": "3iYS56BwCjE3iuHV5u2HXfpA2FJaQEAaHeDWhDmAWaAW2F7dMFVut99pdyyELrVBfLtv9XfCdkW5FMJKkLt5g8TQ",
  "key19": "4Z37aCzYD5HAUfh7yUr5nUc32p4Qj7wRVnQsmAMNmNDuqV8RZgnRpgvw9ZEnoMbdWUs3tocFjwqZVRd84QnHVCv8",
  "key20": "5g8Tgs4zGwNTSMLp5RYGyMSpMDBYZXaCAmeQ7in3JRX3oEf74bmeDhgrx4Q4nCKk3HFprg9u2VaX313Gzg12ewWX",
  "key21": "3GvzZ2a3fbaJ3sb4J8q5Xzr4UEzPY6PswbP6GWEmNNNi5eGu51EjUoQWXi7aPijQw4NH939NexmNZGhdz6wEHb16",
  "key22": "4N4mN2RBJW3FoMtoJGPdLtrVF7GpZuGoRdfVc3ttRzp5tKrFW7kHE85eUeEb9Yu9e82mfGXrgtqSa7ovkXk6LcQh",
  "key23": "kr9AA5dFn9b8guFjE7j6a4rX8gA6V9BWSftL281YNynY7BfP6U48Zs9nqcsBGaiupwNktdtewyHiJTV92XcaDWa",
  "key24": "j82cwpf8qqQgTRssWxxZUG1tKS2zmZioVeXuqE9qZSaXimGDCRDVUJKcSEzYMeQs88rn5ok2xTS4vmUNnfMTGTS",
  "key25": "66RNPgwyxEaCDqe6mN5ZNX4sVzc9bEpfauSLCGk5TdCTTBYX3mDzSNhaXU8P9hkQu29VEW1DT2pe34xoHx7pUBtN",
  "key26": "2Gxt1Y8jQjfT2U3ykSE7yVd98Xrv6ng84yvECsrNgvxz3QqCJD6PpoxUjR2nYe24Bc7554sksVgM7KqbjKJwRP2v",
  "key27": "3hNagJyRW43xFe3mLk1cMFjfoWQeEPngWPD3Aeee5jZJmtN7K3rEEkq9TAeZ4FA7F3b8Lwp6FK8487N2q7PnkYoz",
  "key28": "JoRjGgR5TYFtATPVK53dcHMgKfTfsQ1DcWFFQB3sd89MZmE52YotuugQwGygKc2qCtrMc1HxX6txt1uorAXRXnf",
  "key29": "2ETT7fGtqJCFRd7T2qsQNE5gnRTSxWdLJ8r8cQytJuTvcTh1yQstk6BZrZuU8CM31KEMUuBQAUobzGjBDb5CeKvt"
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
