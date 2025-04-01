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
    "3Rfs8RvrPPYbs7Lhd3NEzhhm5cLqmqj6higcbR2hP6hZx2zqCJvS9ehKJ9gTMheyeFHJFqkyHwdUsR6khRZTYrtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDWMDUMDiiygiCCXfy28kNiyyqDNbP9Tjvu9SfV45VbCx6P2goHPEobHfPdcxLJyt4TBjRPr4vS2r3AfkLGQErd",
  "key1": "5Fk9cN9XNT4DxbfLSv16VxUu7DXttvTJC1jfQnUMnjw5dQdwKeFUsspn3VgMNMMYNU7eub3kHxr1gwzduKMvf8tQ",
  "key2": "5LERiJkgq6Wv8oL6d1ABRDmjYx244b6fL1pYSPtXw4EMpdssGUsSCbnoLT6ZNDhTmanBkr5U2Ejm3HHfgLt2Y1LG",
  "key3": "5e8UjTSNW5KhiwaLnJLX3n9kEhRJNqtSEHVbe6tSJtNnCyiF8RM5rH1rxGy8CjmeYa78JigiVbcmC7cDabVvdncy",
  "key4": "5imGu7Lo8Eu9VQ1b5xtdafadznPSBkjDcGssQrR9xkMa766JerV3XfwtD9deaM9rmmZSga23zzynhyUksDwKBxZB",
  "key5": "5CK6RShR1g8BNcn4uPv94RbSEY9fbJ8qadG18zSDJmcFSbXfDgpcLgLFG3x4Ld8D3KZkvngMKwAU75dWHX2dcDQi",
  "key6": "4qSAFzPCNpYjy7wRTUEj8cgVQN7m34nW6Mcj7Z6NQmtAWSLag4Kf5sDvY8iv6rzCCq4kEyC498hQEd9EjvPA51jf",
  "key7": "wk2NemjKMehgh7TmiXC6Mmx7qYavnQGHyMHJwMHacGYqJopVzarBrUi3Lt5H1QYE2wMLmFkLurJs58jzPPBQQte",
  "key8": "2en4MYBdqmkFxgPqFpsPEw32wnr4h8KVWcurZdbHj2yppLozga4HK56jSAXD9d26w6VLJuWV7GP3vXbwLkVYLHzz",
  "key9": "35pRiCyEuKSX1tF1SrEZAi16sMvG7ej5CUX6ynkGMYjFqK5jWBvhK57TX9Q1w7yQzuohKkqfQcAVetW34xD8NvAi",
  "key10": "2xKPseCgwdGo3oJ3opuJECCFjdP7xZgyvsND5wa74Nj64HDueRZCDSGNY5C18zYBj8FZPv9EswATNdSfxTwsn3xq",
  "key11": "5HkocdCWdM849tbCwmJj15nN5XLfjtzKgoaHVRRK2DMiUWLgM9TG8ix164WL7PycCoSg7NAjNbu3CkvuqYAi6T8K",
  "key12": "ZeeXTSRkygkrn5VGTH1zKxRHnQNZVuNiBEqW3pnDnkuUSRAQeBz8EZk4rLYqXHwV4FdkUvgq9GZoqQgNjn1YBqJ",
  "key13": "2N9Lig7UsE3MbX3MDAhReSab3W7i6fQZSWM5Z4XLhZZLQadjpzcxDGoPD51rgK9yNinANcEqqaBLYPq5MzJnSQit",
  "key14": "2MjycoCBf2saTygxMoT6RLhmpTSZ8X8hMA48hjHqL8uuzGBSX11rSC18mqcicC63Jsii2Q1Z9aVSoHeqeFLMq8qq",
  "key15": "48NJkaBD7Qw9hYQM7kwGiQNG9RKMmQCfLm8h2ysg3P7xyK6YdnZ4QosLVahEHd3enFzBpt4MCQw4qtV6mWuUKiKL",
  "key16": "63iBzKpgYq5pY3PjtVFhEx6XxVb25mkw5uiQPuDniLKDzxSx1buwWJWLauz9dG8H3QzXRCCnQ6UbN4KJFoXPvFga",
  "key17": "2wtkWPUEL8vAeXwgwM91C76F4FvWCKAZ7mT7d5GYmFJvhyfnnwa72KJQYbeCfWgxNWKjxm1N2VEZRD19fEgiYsxj",
  "key18": "5jMQmm8Q6s8XVHghoJqLqBt1rCQqndx8iXBicFv7no9pXVCL8kVsNAcmDaCH54vzkEsok3ct6PYBVTihd56tNe5Z",
  "key19": "2b21eS6LkMQkRvk2vX8cbFsApScksha9AQQUnYCLeDmuPSA6VKQeuB6NxwSDuPXHH8g1dn3vfE7KXMEXZwrALD5S",
  "key20": "5HuPfGSJuQLFtbcvpeuXnCd619joUtYCANts6AHyCc29XbUThWgPnXZakhwPeCqY3xRDNfmAPDvgnhbYoJ3w7VQM",
  "key21": "2WahWAfYeQ7hHkEmhrhEdz6627cZ9sodTotTMhvkEUgZVByhfK4AenH8KYqNBzc8XychqfYkbgi9gYZfF3RkVYvh",
  "key22": "2tSKNXrfoUt4GS7T6WToimxBqDT6kxhQ9fK1hzCHYS1jDYLj9aWXiTBwimebXXzZxdXxiqpUGXoJpKzLVNSAyatL",
  "key23": "5z8cYEUhxJVsodqFywfPnuPDLw37SpDtgoJUKaM6nR7A9q9r6BRTiNhdrp576jbaxLk7hNgbg9yjNFYX75aQtK8n",
  "key24": "4eopBKmvHXjBgTd4G2VFTgeEMEwuV9bmJC4N1QHMo8i5G2MrJCrYoE8zPYFL7BdBFZYsL7PPrFptkoXSdXXVWE4L",
  "key25": "5FWG2PkTYuT9x87XMK2NdbXV7kyVC1uS6d15ubCtFmLFY8hQ4YzP7m8s96mxyftbmhz7y6B3LadXJ6t6e4G6J4yQ",
  "key26": "uyg5uNsCd6h4EpaVcSfgL71xLpztyEdppfgLUYGpSRx9qJosiR9dWBTVtwi5WkdXnN149czEFQbTrcGT5EBoe4U",
  "key27": "4MVDzJQUmJsdky8BfLuUnca5P4jNaJakKfMfNfXVnvaDiuGoBoNVKDtzTem3dQ7mfXpds4igGRzm2JU1UhGts4Vp",
  "key28": "sAQEcCD7dmBAPmb5HsR9USaNh4NTaEEFqEAPQquB9jHow1dQSGShV8YMymEA9XVoa2PCk5P1w2aWr4hog3mKo7r",
  "key29": "4i1SbWRc3TkporuUNWLGHPgY5Bow5YZZJQrL3CwqLowuTaoF9coURMB4MR1hXQfjGcsyLGQTdtaCfmVmCfoYTTwo",
  "key30": "3XW5fBazEW9FBZyPMFpVnbPdQ7naUJtSLaVB4GHmuUZrAmUeNTMuNkxJhi72jP9e3rcFqKR3UbKLEBwmQ9dY7HDR",
  "key31": "42XQicdz12iufrUxTGdefnKxxiGGPhD5woak4KTxd7QqQh5J6ofK2TsbDCez3V2CUr4knpggqEd8dDrwHc4EvEkZ",
  "key32": "4wAaGqwBJXtVrtCUYuzjcVtMbCsm9e7k1XoCB9dFTXR2PemPfGWLYndppHNRZrYBWa7H7ThEMXhMiNMwSNV29uLW"
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
