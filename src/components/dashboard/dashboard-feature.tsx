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
    "4W6JxTTifN9Eu2JXSseb3PjEHbt6n3SF7oh2JmuzDE6ncHaVgx9LGHxk5A6z7PYGSJ3mZ4WYWrFhhnLm69dnx1D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2VA4ShWUH2tuvTQdejcmqAcJkZWB3oAXo3G1dsTke7nz8wHk6BxrGf76APHr8WzUmBLXeZHfBmFXUvjobTVP5C",
  "key1": "4D11iArW9fajNhUT3DaEDRDerMUskBhxqMtMAWFpy1Fk1m7uLsgKLVmFN7BQHLNFe7RxVUa4sBysTUgbw93c4uVG",
  "key2": "54qXiVCxT7hLRKdDz7rnTezJcTiNQZVhcfSNACq8iKm65UdktRe2rGYGgBeSLKRYkzzTdr2BC3SijZMVdLxJyxQR",
  "key3": "62juxmTkHayocMRoMHmtXU4JhkdrvNzoaRqXKJKDCABiszL3pDFR6BRJ1ewG6JR7qvmrEDrWUwqRnSLFdQGukmkN",
  "key4": "4iLcGeJZi2K6UPtiwSG8kApAbcsV4rEYLvEgzoMsf6vhmR713njUWE41baoYpfMACk6kpjzcsG2jG6ZavuQ3s21h",
  "key5": "21GuNKRnTppbxB4KFR435roaLEuZaRYs5naMrvRG3SpTy8d7nPgZ3hyXB8nUGoWuFP4gUAR6v9Wv163G619P2tAD",
  "key6": "45ueUT5c6kDfX7mriHN4frzP5tJ1mjQWv7rix2oe2L5MBkhLrBdCQ3FFH7nFrjtxuoHj3MWNUJMrVxKFwq1bfN1Z",
  "key7": "55RqyzDz2dbhEUT85ETZ9sJwrKLYjvWKXX3id3epaajx7Hze2vQwN3fNewEoQPFgMqLPyk438TXBdbef2hSigvmA",
  "key8": "2WHdpPNpFZcQpHVvsNebkCSQbLTcxSe4KpDe9xkYwzhwkmGuEQG7WFEEPs12M6PG4M44RnGgTcuXCGPgSPjGEWc5",
  "key9": "5xMCsNAUX3fcewfY1nRz8PHsG65zHgsjMoY1TwTwugiGRMp4AVNuAgQwfSHKTb8HLBC3wTmgpFZzP39UpVvjBSZY",
  "key10": "2aCDDAoaQUT1PCNmJW6tQ7s7ntzy9PJp7V6xoNtVR7phk8GQ5VvMc3rJzktpTLq2nY34uytS7mbn5Kb6VgdSRJmZ",
  "key11": "38pd1Hcd8F7gdjHQ94kr2eDM8bLNkroC9Ne3UEhYRJdKM1KFiRPZUQ16kVWz8PvbFgrM3mh4kSp3pEJcazsew3jx",
  "key12": "21JG7raFGhQ3uaRnZGdEc5ac6skQVYWxMHVNCSkHbjtdTBzJ3PjLJa1WMkPfnSeBQFoBAjr1FHhrcMa63829mVN8",
  "key13": "5B1pMRC67Lc5u1qz2nSZNwRx6eDvzRfJrmpFD97w9je49anDcM9K1GJmsiGRGC2NsKp4Eu63MxCSSmc4USJV8kPf",
  "key14": "4rHFi2JX2oSggEjyUw1ijUGfKnaZsFa7fttdPi65LMmmxhUFTVF4hZYTm3A95AMqganHnMSrHWWbVGaP56vfRRHk",
  "key15": "4UtZSqRd6z5vg4ovPp3zs8b4Yr56PPDfKmdpNRCVVu8GYfUefAfrRusr7Gexz1C24Q4bhcQ5u46hXf2KsNWZ3jm7",
  "key16": "3ynfR36LXh4m648hGxQrDpgRs6KhCs6EwrrzVeKsTBTN4oxSv4Te8ecBzM2Du29Ro2LhnzNzmGMavECz65fr1Bkg",
  "key17": "pdb7r9p14mbW3xi4LNrwkWFbdgg5sv5MR2YULv1pVKPR5szhJcPhgvyXqKYjQVRsrj9KT2ULDHPrNwg13xfHe1x",
  "key18": "3xPPs1zMSSThBhaZZXk7C7EVVad7GhTV3jL2Bw6GY1ULuaN9jEpK8aGmP4vF1nELYBcUKuYXbVwREazwBEZ5vDSZ",
  "key19": "4UgBDncoXdgx5hPmyvnJxoFYSan72deEdKiNMN9U9baLyKXNH2Y713fAtTiMJX2SmsgiNMY2adSWyWcNDDEPMDZe",
  "key20": "D8UN9PKziH8UBP5ffoTSjupwPUQyzhJhgdaLnEYsWG4QdAHjcqCqrigAcAhBzW6uKNg51KY8xZSuXkYFEPF4RpR",
  "key21": "4gVFXLqiEhwcFqrZUTQMT2C27cQFdL5CLM4z9FqRpGJSGBeCZmfC5Wd1JAXKik2aUWHwaYoM5HkQLfcYsvxwzhA9",
  "key22": "34dwaCJm3LNsNsW7xzMWCiPMdpS6f5URBR79swfmz8DH1zJMWYKKj1xgJhWWDib3dbEFUM17KapWBMjF7xBvSZsU",
  "key23": "549Xh4UC6cWW2uwojQUyZcNWbYqZEPcpPv6Yv5WEtA4kzrPG2X5VVzCV6nPEZ1Kfbni8XfeYCbzJgZbb7cJN7jzL",
  "key24": "51TFV5MvMrckHmUX6ySNaLQiPk151npTazpNLD98swxpfBoLYtcoy88cNKDb6JTdZQSV93NMaNALTi2S2D4xrEN3",
  "key25": "3s1SQf9AxyAbRYKskq4dtRPtUjGfjamnL3Mt9WnWYoZwJLYQamUm5u75VmvLriNr74RG2d16HXzXcrAEWfYbxjBX",
  "key26": "4ewsoBTn9gUnnE2YGZAWDqniGKiswqsCNg9B1mrJ4UrsMNAr1TLxCpJtGBHVYXomad4NpB29LnodP92NoHrCrSz5",
  "key27": "4bEuBBc3mAhkPYeF4CesdmTTY2Y13fuF1Jr1un1chiKZZmr91Mw8jj2V2Zkvk939ExnBMnUR7uC3fcdRpGmZFhCL"
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
