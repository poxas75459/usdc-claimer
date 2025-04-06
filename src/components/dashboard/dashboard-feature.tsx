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
    "vqTNRKoTzUtJzGeKkyoRy9VeA1EnVdFwPCk2kxEMJK8Uj3WSB33BYPyzPZDdAWRifK78KraV6rXze6yJ2QzmHuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vH3xhwnnzHeCz3imUNEBXBZSpcQjkdMxsRZhNpTmEXj96tnXK8fR2nmkVExbNNEh21yVj2NkncEhAM9p37Wgk1",
  "key1": "4q8CtzoxryQSbZpSe44fcVkm8toPjo4kQCwr5brK24WJg2Tw6mY6QftTfyaX1LzmHW3QpSC9S8UPMaT9PoAXgGRZ",
  "key2": "4QgA6AkJU6gxCpYkaCQ9LiwQg6HcKcHhwn5EXHDRdU4creZFcn8LRkFsdYsdj3FRAnsBEy76MJtxQrtmgeE5kpgP",
  "key3": "5aXJqCPuE3W6GdEysTXiCBuxx8gsFqxe28ykV7r1tYWjNJ98AdBh98f139MjRroxj5DTADWr8YcRdH94YY4KrxNs",
  "key4": "5YZnQ8zHbifi8jcMHcneRuQMdogGvPj2VSDnBsapnPBjqGqC95VECW1ra7UHBxPLSYCgzVHn2By7qeWHaqjSPcKu",
  "key5": "22DiYB8muKRpr2H3Zgr9Q55as2Gq18SKdNyfZB9rdBL1pFqjE29MKrsuc3y3eqtDNZSsqXo1pdiU9zQiWqFVbirh",
  "key6": "3straspvRw71hpuV6A5j1auFVdiXt6PKAQyS7tEePHoowo5M9QpmLm42TjRJwBsvwZooeoUatrQfwQWoe6vmLib5",
  "key7": "5cnRZwLzEutaAHPK56YVbUQhoqN2wQbvQakTvwJp43eRvg66PSveResG7T8AWXCWBWEpxXSc9AeFHbeQSQLpBdBK",
  "key8": "3YhXuYxQZbxtKkRu1p9JLEexigjLLTLu9Um7ynpffpKRGKrJtWBfLE2EpJcuSBERLuXTQTrL8uJHL1kCkUr9wjE1",
  "key9": "5r7nkd1u1bEVmgvHsBWUyxT66CM7Uzf36sVGj5yxYiCpXm7cWn6nmYH3MPnMJNxpEbLo2KLebVLcGgnFgE6EkZCH",
  "key10": "61rDHDXwPMYTuFB4XFRbuMPuwVDimAhLSCLvVXeZoxY5GW9VqRrAqAVRigqRTBUx93iWzU4HUGcJUrrmGE8QZj1N",
  "key11": "2p8abZyKu5WvMGE45tfkGrnXfiVnV9PB2z2HxXQ1wnsXU71YN2fFCTcsssNvC3UT1vVtKVWZRX14mfgWn1AjgyYe",
  "key12": "7JCogULGPMY77nPxUxf1MzBdbZw3tygyLg1a2Q49BQrpZdPun3j4EgdQ7Z8d6uGNyahCVNPySftGrgM6JzMY5hX",
  "key13": "4FX4YPqT3dNBkGoCSksLYAWWFL632SPp7iMeBTtnzp9tiNyP8pMBziC2cjraN65h6ck7fBPsnRovgSLcXYB8Rvw5",
  "key14": "5UiEEJ2ZpvAbpa7JXPS6NVRpszNKAdWgAg76CbY5aV1kY7LJDhW6goJ1KA6urQHehL4SQy47F3iPA33uosj3yqtE",
  "key15": "Zu75kCqngAFpE2kyo7ETPQdHhufnq1WY49NAkL5Uwy6rSx8upY6Zgka5nJYT3LKhKH5qMBLmcxk6nMH9z79Fcbo",
  "key16": "3bM9Ryx9iVVsEUfn3zuMwkjivDNes7bBQWSsaXxYz2sfdkgNFBbaYuW8yLTSNzWRxMYHkoZHWGmVw1ZvE8J4FNmF",
  "key17": "FCcAAd7f5QMfMeRdk7dxC3Dw92xbNHkuJtXHUegj9y9zmS7SbnRLVagXLBGrpKrNpcafyAiLPMrNLY3YjrvWD5o",
  "key18": "5GZq1LiyD8B3oUdoNpXxWnvqrR7Z1auui4ptmqAAbDrC16VtCRk2fvVGPavJKSt7kdEBa5so5XsDt81LRfL3puVf",
  "key19": "s2Jqp1n6PUjYFA1AGvLeRsu5UT9EeZfW6SKKNCWaFXT4MfFFgHooARq2Awx788GocFysaCJWxiNZmdBv5HwhmBY",
  "key20": "4LmNxxCSrCapuqYVaVuwEgbBhCCMRPg8jVps1Lxd4ipCpwY9LWrR5dmsWmUbN4Mb6jh8yymo6YrFj8JVfFzQRYNB",
  "key21": "24KfHzUmqwXBoFdRZC4BRRw3ieUz4V7Rjjtrp57BKoRGVZBvbDqDS65DgKWifcaWo4yFYtbzZCAh264zT4X3aEPd",
  "key22": "2JCHSjjfHUDQwgQLVJwgPtvwjMfxYi8FhtviZYx2TMAuZwtSYbhHFTsfACcw9ioRgziHVsgfg47r3kA3CAdiNaXV",
  "key23": "2wgdcNgd9BMrzNkaZF9TWEJKN7iJv37wV5RhJwU6cxy8coGitbLC1KU5hRHbHqtb7ZetUbCZKT4rztmQY48TGLVk",
  "key24": "3wEJfC86vm4BRFBXJCWZRi5HEo9QRtGDQ3TeqtaGojAhxF9eY6YU8sKa6yfD9R1A4hDBqtd29EV71aBWtq5ah8j1",
  "key25": "47qaXeVjMTzAXQQah8T9LhQrMPttHuXGnanMLztjzV2ovzhMwmRjfqMnkKy9c7YSMJ8CJRmnyiC8imys2LTQvfDd",
  "key26": "3ESj86DMQn8cYvkdFJ6pehvrzS1DnNkG18Q1HdDvSHQt56n6j855GtXstQ48BzC66hcB9SksxWH2qoQvaCnEBF46",
  "key27": "36Ujftk1gFYFhDGunUJbLNz3MXxco1fTNtxUjKyj1eYhti4H8Ne7jzRxBvCfJiUjsXwKckgCJyF28jssTBp4FUff",
  "key28": "GQQSV1jM6jarRfCf3zGhXNGHDa28pZj8EFraRMqNv27TkYtwKTBtz8mczbLBpxMhKtYnXZEFAHSEo1Ncup8bxdL"
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
