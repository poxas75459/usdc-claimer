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
    "3eNTBWqSFHTm5fkCohpVW8D8bTuSbKPtjL5xsM3NLv7X2qwC8Hna7PvEei7e1pxheRxoQYBv927PUvY1cLpuakEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JnNw4T7FwE8GU7hCeBigSNYo4ARkYWA6FgKKqMR9nVUEBFD7ohqL8LZ6N1m1uD6y5YL4mwqquf1dJ59WVCcCtNq",
  "key1": "BSrL9oSohscnqigT1jnbmWVgvU5ukHpL8fvc6aV1gQHKVixTZCKpmMRJxQ35mt1WDbHXN9RHczQ3TzfTiFeTFij",
  "key2": "4EtUj8eeBCyD6V4VDyTwvCiSkCTffnoWyUdYufLeRLddpS5KBGXRdDos5YuMyWNPbYE4CNvPB8LP76QHESBUcLVg",
  "key3": "mfozNu1RwYRgawohpzrfaQMy66Ho6DynTzsBmSBmEcNVohmiDgXp6nuu91bA9A8X1mcsST3Un7Jv4G217HEXeLw",
  "key4": "4MaiJqBXCQSKd65m5S3nDyTQt8Gs9qUdMsTZ5Ye1Hp6GWj9LH2WPHsePviLTKaiE8dvCFHzbjWaYb9hRCcAMu6gM",
  "key5": "2fS5VWgbgGXsaZessGmMLbGmafscAGiDHsCTLmPEag5qjQ87DTouFpEY4o1yYY8JWi9CkbGbx11bMrcDCyeo2Vvb",
  "key6": "2BP1xmT4GL7yBJBy512D3XVVCHCX3SLdY6PBGRkTxrwDPf7zNKsjCT1guPnPP4BrSWE7sz8VmHeuEgbV3jRMCdUs",
  "key7": "5EAxvotKVXK2xcwiKm3cn8XCm7mhUKiakoKrx76rXdu9hFtk4opQiFjnD5Q1mPVeuDPJUeYBVQ4CLNgC3tNws47e",
  "key8": "6hNeYncbrezg9TMXM9P6SLUgj2tjb3WJKxD8a8UBNFZ3MUmRimrF5HKpZ3rfcpKQzLixgo25cdknQEYy3AqPGBf",
  "key9": "3tWR6e1HoCsehJy4rjuMKxGAPYXZuzo5YgQeCpnoWQofL9hzfECu2cEFdyEhYWeYQquqNgUW9AhsayLpTfLAad3C",
  "key10": "2Zf6b3To1FRf1njJQ3Jv5keuCqAqJ3HrS9eQeZBLXcVxSoEvg4d5U3GmyZxi4w4LXkyGsQyaiKu3EzDmBdKfm5ph",
  "key11": "LgX9LkVJ19pwDgnX9t8tty3fPp4VBHSwyQvCvEKK8VZDLVpYcZcMVPpPi4RgAuiESBBz7ihe5nWUZgBtY8WeJUu",
  "key12": "2TzRJmv3T23Hmhv4Zz4bpakpZeJ87GABdBjXHBjadwTJG37YQPraEXcdKa34ZnrphDhBXWUzQqutxkT2uhgJrpqi",
  "key13": "2htZVzKWAcH3kB7uu65FU4bEYRT5NRSUXnm4cLzwcL88rWgEnUYeZ2njg1FBbCoqVkNce1G9BvDC2f8PEK11gF8r",
  "key14": "3N8UoEVSm9AFxd549N3EpxxDprzdKi3RFf7qoyzHQ2BqGQJuvQkCzGdchNFEpaY7xTaL7ZqZPewmQjfet5Evv4YD",
  "key15": "365RdfefeZHjemweLhinzKoKSPcf4UFyqrc2xqEiK29iTfs5yT7uu2XrAkznBM3PazqQQeHbE9xehnvpu2fuUesv",
  "key16": "4MVijsHxZqDFW8psxJ4ZJrry1KAvha5QMsr6asSTqywRnPRWyCgJHTTd6hUa5gSUR27vpiKiar57y8LBrf9kUG89",
  "key17": "pUeRrF8FMUn4NcGYe4URob9LaNxotJSDw81PsMzg7X4gtH1c9fL8aFYPVCgHJy7STaWShhGhnkkwNCA4V4bH1w5",
  "key18": "3veKY8Ndx1LeQ3GsP9Kfatc4K15XKLpUU2JHgKLQEbTLF3rdczHYydrhUtpYb5XiKEYSUuW6RnQgak1NVPDydNfA",
  "key19": "4pFvXJT7FT1tNUhJT1HgnAT5h8Vrgvqd2uBDvRsmmT2yRvTrij9cYZAyZZqxzbiJi9ZXDgAbL7nqGAk2VrTt734d",
  "key20": "5qLejvYhDBhBfVVRoXnNAzoH4aPGPBBSE2HjYzBMdkGiPv2AQ161qxPCBMcuDjRmtvj8AUQQZo3LqbFkvQPW9agr",
  "key21": "3YZw8Ujmp8uy2osYP97TfHUFaFmrvYbp5eZphSTjt4vXW1wf4zuh4w1SfB3niZj83n2eCdXETxQqXXmHTFRv685k",
  "key22": "2ZZoxHUv1WisJ8aq1Poa44gBgz2NbgwR3Ur7U7h9299b2rgnbS66JRjfcB19wD3DWhoHMA4XCdXmzQvYV63qVWHw",
  "key23": "D1XcCAeGxwucVpnKEpE73YrpmwniwW9Hi3a4XWd2jvTQSRJ4gD4tkpf1aQzvQtdSvpWq2gNL23X9S1vKUC7pSNn",
  "key24": "dcJMbcenL4c5KS5Jf4dbUQQRnVMSHwSRXApk3UPow5cDtKadF1NyYhjB7WPUzYcuFtLT47jNnx1gGhg46LMkP69",
  "key25": "5yYpaf8TkJo1gepS16naenqMwjp6unz5oMGkp71osNHKtX2JLEW2ouuM3yQRz4Y1cHJKPsJeUgb9uuPJ4cikb6wv",
  "key26": "5SELe2eSaztsWoDsv8z4u1MsnfZMr6rJvP3RkTCUMeAnhwh9iQRQwrwAyacuGZk2mtpu3zCxBx37QpkoxPjGncoZ",
  "key27": "59hXjFmGaQoXh4TNPg6v1woswgaJdjo3wg49J26BUtoj7EVZP75L8HKLHA5gCsEken2CYZgtumJpMxec2RuVQLbT",
  "key28": "3dTu2suNMqM5SVFJfEnwRBNWoRT41aMDFRPGA8xiWRWpAFDGeFuyuaVyLgH3AHMjNYbGtAbm8a8jjsDLs5zieeZK",
  "key29": "4hCqQ9mAEUTt1owni8gMNapHS4nejpprtq77zFGTwiuvgkgcZY9Fn6y55CZhJjhtmYTrK9eM1JZsiapjbM3s48z6",
  "key30": "DQbF7qKJidrccke7pPMkPGhBAn6HTo8naY4aTs21T9Pm95KJr2LTMRKkQPoX3FY6m3mdMcts9Ltoa7FZsDnexdt",
  "key31": "3kohR4Ty3venTyBAypWGsUm3yXYssCGn6ez5Z82ovbteoMCqXqRxti9kb64JQkMKDNGBMx8PT5UfsoV2HNEfR4ah",
  "key32": "2L7JCQU4pwcsmkvDXpmiE2S2mY9LmbwiX7zXnthES6Ye4CJRqA6rfN5nwzjReK2FhZyXCBV8jWmHQTQuuN2JkSih",
  "key33": "21iKwbYaMbwTPDLYZAQad9cRouBbrbAVcJWV95rmLz4G9QctQcpjvDkMBedxMqzqx6sSPDUcEuFie5DJdKsoEQNn",
  "key34": "31TRmpL5DNiM5ZNohtMK2tq9Tn9CBNEAwv5KAMJJNnuaQHUSTfR9nnbsFzQmPYz4dFSRZUWXxY81tNjA2axRZift",
  "key35": "5JZUNVxc3JhAsy2dMRx7442VgGG8V1tSzRNGWba5DVqVdJXsKQsK9je5pDiXA56dFj5K9yVXof2VKQqVatjvpK1V"
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
