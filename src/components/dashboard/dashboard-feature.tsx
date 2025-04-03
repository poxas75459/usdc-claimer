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
    "59UxmY3VFwRZwGcCtHy4g6svZK2UjCWsuoCNuPH8rZjwYRub81QS3AV6hyrGKhb8S7aSEa5xjMetcbtFoZaB2xGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMmKzNsptCodwdzcBMkr1QFZ8Svfn12rkGmg6mKjCHij2ZcZqYrEmq6wE84L4hXqUexSnNhh7mdfnDYQomDdWk6",
  "key1": "GQskXFs6VPwj1D5x34YyFp3gJ2w79ZdWQpzqPNQZV9ERJ9Z7pTnsWYpLCDnyVGxANc8sFGE4kDttQqdrQYFDtk4",
  "key2": "2y1A5JtytfhexxBR2F6H3SiBcvH75Gt5YQXEKT2Mt7SQu2RytavY98pNWg5jZEP5YHD3rnEsXT64MRF4ria6r6Sx",
  "key3": "MpCPvqQKWn8E5YibZTuDyq1cd3gUKKGzQ3FL1H8YG41TCJpYyF6siWArMDhsS2TU9dP6ovLQ6qFW2MvLpf2k4G4",
  "key4": "4MoPqZ2ub5Chj6hXFU89hzpLV2nWkTy7mEH7txtHq2Bz4nvM1FM8BVroEkPghgHuDyBzZ8SSM2LShbiWdamvZNEF",
  "key5": "3UL8ZSfAPpVyPSoM3hrwvSfMx2ZcSXUfDWNw56gDXMm8fswTawvqb2SVe9nhd2XZKXx2soRNkyh8eu198g472QXe",
  "key6": "4apnzRKPvo5R2uV3hbrYgSXuA8yskpU4HQa37WBNmFSaD66FgLuQyNosthEEPhq728DSJsofkN6hLQNXjy7nXQFb",
  "key7": "3PXWXa4csy4Uqjvt5sxcxAmBnhEd6WwTsZfPicMfqgemurF8GSDKUjZBRUykUGxL65XjP5wZG3TcRy2BGuSPkeNB",
  "key8": "4FrGpoczrT1ahAz2gganyfujhc3AnvCYzde6EBp1sMvoHB1SvYDkQBYeRXMce8LkN3uG1Z5KLDtS855G5J72gFLs",
  "key9": "P5bgySHg9kfNE5MQj2bThYnojp74ekP8tYdNRdEjgLqT3C1YPRA6HUcS5r22StXFnRaSKuDBVF8Zq7LaCfBoDkJ",
  "key10": "5aQj8pBPHov89sustBzv67xgwq2KuyJVCdEmCeEHzYjbrQiv1a6PRjqK4tgCJKYTrLm4m9C3o8oiULAbzyWmvgG1",
  "key11": "mFZ61qwz1XRhYG3W2bXWnXij3ksHcNCQ9a7Zww63BhqdcLuQdsKSnkyKGm62zjKJBrx26y1fGctDuxXgEfqqdwX",
  "key12": "DT7uswfCWH1ftYtvDMogCvV9oecgGdwNij93adzQ1c7L6Bx8Xc18zdgqxqXK1JdwyxvDgYwvR1My7etrATHGHza",
  "key13": "5XnXAcgowduRFyB4avApHEQcazxGTgGdwstYziQz4NDjpUD1TnPobiGXHvjjA6rWoRh7LXygnUsAsTdvPcHSmcDf",
  "key14": "378Mxdw63CAo1YZFrcmnHoVzpWXE6Hx1P3Lw3JijpzaBrffdVita8ZuHULB8Uhc33HE3TWyMHpWLDhvTPJDDeW7H",
  "key15": "2Xppw5s8d3ohZJoSTKTdPo4jNCU4pt6Vm2zBH9DDrupV4UW7VbQDRiZ1cfseaNpgqpEgcpHGswj4WQDEvtCKot4R",
  "key16": "66Z9FXoctLTinUc7fy6R8HwLJL7BGWFazpvX39ZBvUkYvLfPTXc33mDiFA98RtkYuWhoEcwPuwWuKL3trmzcuFb4",
  "key17": "3SYyU2AtszxgMnC8zG6nGsvt2kAp819LTwR9wdUxfwF6JG6w8QReSr7KTgnQi4Ta5ohGyWA4rYhCWAPP1MFaXGua",
  "key18": "3wpsjixBj9DMdpcnnhfiGQwBB8uWzdHzYQNwLACBnLWVamSdNYoMnoqxMiQx1muPb2rz8UCbzEGZx6PMZ9vAxTsC",
  "key19": "hA7VdTwYXBe6CK24cVxhcFJFLyx8dD1VvFFCei1v7J1i7ae5R76g653CjP2QC5s6eDQXPjVdhjwRtjc7cq1sBJ5",
  "key20": "2HqxH6ibPp6BDvnmMxiPxfSoDzVEcLUSrAn8e88ySFa2cjitfExACbueEkLuCBZXM35k7mCwC1arWAdHFWA7wpwM",
  "key21": "2mcV51Rhwi2SyGxTEs1e2cMVrQs9b2YDCLPEoHNZQbA1fZYzdapL8cNvzDtrPbJn74ph5npXjLoNf52pxVMH6U4A",
  "key22": "2ZrYktPuGyk6iuzJT9hjvQUnDqQzWx6d3JVM5wHKNQEMUQXz58sRNpZSkLGD8VLNhARJY9iCHxJgqsNDdKiEhg8X",
  "key23": "Nx476DGJ6Ud7pDxrsyQowcXLY3na5NaMAdCXv2uyVYKDNHQM6vphGDWCJdMJoEtiLSsDpshu7wCnWMrYh3WdBsS",
  "key24": "2smwGznt1ufiG43t4hBLZfxfkwDQ1WgQV4BepvpQAyCYf5LDh7uvWFnXpPtcddQAuEH7QpkzAC8EWAYgmsUAVJFX"
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
