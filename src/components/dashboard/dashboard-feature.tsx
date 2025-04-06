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
    "Hr1ko9xcpbyFfSRPgnjYK8j17AZmLnkd2pPiuhhqTYswqep7Pn88t25XarjQSGECfJidQsxjsJEuX5w13V5zAdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49E3ybAXmmurML5F251WK8ycuQ7ehcHqYhWpfQH7o7NAmbsPjZy2XeTZuohYmyndiFoXCJHMkipFVNgv8dph1oeH",
  "key1": "5nBoMSvZEN3WB8LJZdonjyjPk8yn3wvBKmd9oeR3J59K9VDomUivVm4CMxXbX7UFAyGkvFgjsHGRsid5PTtcMQoP",
  "key2": "4RQTM8rhJfPr6cY4ZcKgWXfJ6gcxGdRb2kN2ovNggikqw2vCxVxakLKc5L1Jc71LL3qhTPB5exp4aapRSj2V9X8k",
  "key3": "2XhB13Kh8ZqF54MzJ1NtKka1cgXZEE3uTMrDLd4fD12UZWK1hw9BgJouf1963NfttiXWSdedXFqsP7PGQPrFR5tj",
  "key4": "5aapXqvXYYUx4NsaL1icJvD98JPPhzn35U2y6hj677iLgPVSBvuagY2X9Y1zxxxyBUC1caV2jYycqne63qjLJ8qj",
  "key5": "27JgWFo3XaNhVa1BbVQfYm8M7dpk3JFDDULswY5QntBY4e4fbodnwV6TRpojLDPYuynfuRjiFsTVTz6DQEFQA9Hf",
  "key6": "3NrHwAHKwFTDCUurvB2s3uUUFBtqt68zsTMozmT7VMKqHfy26ALNcpFPfcLRohxuqCNVDBbijY9uqQUdjkA9Auzf",
  "key7": "3my8VvfYvhQsXh5DLVRPSypJ15pxCXnB4tquaUkiTtBCY9CBFX6iYSg2cfyDA8qBmsgWeFDKyTFnepnSyvsGMWpk",
  "key8": "JMVsamzkppQJjLMxPDJ8GJEizcbgABZokGVj29wAZBdrAdxo6TvHzdhcxXDsV8kg27et8zXg3fFcvkaUE5WuXux",
  "key9": "2R91GNMQEvUNgthNmPeDNoFhkn7uE7ASyGewdeiCRxTrFKpm2Voad4mu2zRtPM7MaYGG7zQU8D2i16KQX5vfFAyC",
  "key10": "23CXvxQPvBZHWZmqbeiQRgeXkrmVmQoxU1etHZtpxm6981S3cXYxmeqfFF2gpT9cgd8eATZYCsxVPHaaodLayxh8",
  "key11": "2VAGPiwnAm84aguzkMJF5Cmiv2cebtFHg3nr9k1Rb1fREvPe7xLkbT1a19HngtjDg7UAEkH64LtQatNkT2PW6YBo",
  "key12": "3cbwfznnAme925zzwXtPDm7ghBU9dyB1n91KFYW3rSPQomfBdr1bixuPs5kLjF52yHZyqN4NitdqVoN9x5Hg9Pcd",
  "key13": "541eERvqde9dYae4u9BeBjq34D22km6sxh7H6arDbhKo5UnzJfRJeNnbWHZWqvgVfw19s6sf1D59J4HbwKSrYVt",
  "key14": "5sN97N4dHyt7y84RJhkV6eQXHJgBwztcYi7GDLMuzUXuXfxNMKkBXg5kCQYwFHttd1giWcFZ5GuG7wFaTm8ZMRTX",
  "key15": "NLC5vMBkvzkPnYYW2kTMBk1KgAUVaiiFEkoYwX7juDfVFyt776meKVc1rteKiUj6yqJCy7aENodSPsY6iH1W15L",
  "key16": "2gZ58uxguvy8rfsaHex9i8Jg7pm8qmBwwRSC8WY7cy86YqWUnaZMP1MbwQaLToNU8FiU6w6VXQBXeDNzdhwgPmbS",
  "key17": "3dGkX5jMuGjNGBBuAWU5hcTxesJ2R1Y65exWbKpaYLSaGgvn3Kfdb6kP5oy14MC9fjd5oNVwmR6VD7WnhFxZZzSe",
  "key18": "5qgrPQkKSqHVfsirtckZrXbzQpJkbia6sbtAjTdBN464GAyhDTGNsXnTs7L6gJyfyykuT162NA7pvM9vriDnu4iM",
  "key19": "4aq53kUQsp923sP7trkutLynyDbNFEMfmJg4S4umdwd3K7C8PPkT2Z23XCzz4wX8LbgfiFeBpBkndgEhBMU88nLA",
  "key20": "3m9HLuuQBsvKjnQT358er2qSHs33qi4JPyQD9Sz2Adpj1M7h4Vqg3nxcoVbpxycDJSxzyDt6pHmzkYr2ncioyf3J",
  "key21": "5FfwpD8CAH1hHTqhWergz2xkoHzUUkisEAQDGd6MMrQzuJbQy4FUW8qe4sYo2LEqYKkHUbcjaYcr2dAhYi95Hn9v",
  "key22": "3rTxifgDwiMcXUjP5k9XgpmDDgtqSXBuTBadTeuE3hyFSMDKJoPGjA6A1BPJtTaTPhpmKdMzFeVmY7RxHvqUMmpH",
  "key23": "4tqGASj7vssxBV9QFaTkihHhzmrkn7LHEcAjZzWx252rvw4SuTkcpLbGs8QQTZG7Lx6gnovZxTw1BLk7Eo4dvv6P",
  "key24": "328K1fAAFtBtd7WDVC5ZZTV8kkuac46nfgkxm9bPfTCpo3FAgQaBXCMMyJx5WiGNhan2uVfiv4B4M6MuXxwSwG46",
  "key25": "4WZZEBzZp87aMeF3D1ahiuXRACS3t78M6yjvSXrGzEbRnWYPqyfdM3XQom6ecLYtmjyGbHH7nkSyshPztoX6wpUY",
  "key26": "2aBbFceg9KyL6PezvPLVkeMMoBxoJxS9x4u6UxJZ2oTBisx6QBMnbLwepHHYKofTcf74N9xrQnwVKcwy82hRuwH3",
  "key27": "5Nn7QMUGLtkZ9CpLapGHme3bkzY9UtW9AquQr9mfyAkP9XtqouCrKkapAaA9e8qB11cBvo3TxWYAivQXBUKw1vW3",
  "key28": "3yJdzp84aL68dqCBkXsfWpiMBktepcPQVf7UPm8gBaMNQHZipoLDqaC54R8p8SePKPzpUc2ukJtaLhjryX4Xmpzp",
  "key29": "3bScaWNPu48jwPxnavq3EDvWrp2ffVMDYCB1FbFTmPpK64P4omfXYMv9THsXN3kRqJnZtKJaL24G2c4u88bp46tg",
  "key30": "55ofEp2FyBDxXX69wq4Q9nmpUwrizHMq4Z1b4sh2Dgd8C8UpY1WspUcyhgPV7zyPSLLRXk5Y4G1xYSDKg8nc3emp",
  "key31": "4GfEEucWzKGP6v1uVgdCVdRbwvKjLE8J5tKmtZfnPgxoLWnRVQi86b4wobTtN8ohvYJK1vYEZkg1rKPzstPGdYot",
  "key32": "3Mhzye8GRq4jUGhzQWZanoUdwrALhCaco2vJ7gpmZyXFJvzGk9kwsyh62CpgpZSR9SFMKqHZDayJ1Qm2dCX1HiDW",
  "key33": "5aUcbnL3ufrhodf6HxrDRvM7qCithdsxYhzFcQkKXChhFpnhTWYHR72bVhAwW1GsPjC6RdLkWrCbCSicFGvwJkBj",
  "key34": "34mvUbHL3iBcG3ynvSkuNHi2P4jRhmMH5YRs29bXs2uT2b2UdiFRmvi2tXPxnyNe8LoAdnsXSSyW6P2xv8oqqBsd",
  "key35": "37kjvrtfCVSaT6S6qDi7MuCfhrfNBcxkcXqanuU46nGgzXWSvmCbfPsqrC1a2yoSQDFfGgyK5adK76eGss5JBV6N",
  "key36": "N2jUfVzrk8RphDBArfGgXSL2iW7zsUBvqyeHPKRQ3vCprCUn29QLHb4qjGGJfnRxXscYfhBEWWp5W6VjRk4d53F",
  "key37": "3axsxcKjMV93pRRGb3cEG6refjsvVHT4JnqAx2g3bKW1dRChTHCikkX1FusDpCFK43i49krJv8mRzPrNkFMZYdih",
  "key38": "3Hxv3hfPhxEA94XxyV5AP7HuWBDCyNbo5vXA3xjGRkGHkaPpQG9iKu7EGK8u9PXj2fkP3ErgzPa3fG7ij7YfeyJd"
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
