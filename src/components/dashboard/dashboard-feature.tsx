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
    "RRWkoZ3i87wFJnSWwMMAfVzoPSTb3acJxexWjmmv1fdAKpVyPL5pk1sgpPAYRicx23fdb9u6faLEfRgKtNGJPLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x39qBXq4tmc2cWC24pZtpTGCxZ1mdNS8Nf2S92tJWiERSPCKaVt7UFuGTuSaZqxJm5wSMfgMndxbwi6TEMuLGjE",
  "key1": "2gbLnv2X6FPgydDBFqNCMuBRhyMUqEo9RpiRMqJCYLLcBytQciN16RPncxfE3uDewHpeLsU5JoMDmzHX6VqT2SB1",
  "key2": "3HGuHqoGbhpbYhbUH6NQxSPS2jQgfHUPwBqXaZJk5aut92BV3kHUNCEyFCuWRx2qyKFPUFj4zaPT7LW9EqcSQeyW",
  "key3": "5dnPpPefSLAgQD9MYXx2Hk7Hgd9VdHq5bapj6VCvZXL9eUFtjKjqpgJZdBNVT8R9wYX5non8582BYTfBWab24W7r",
  "key4": "2d51HZkdQWotTwcNDT3KPujbqagF7uSUAEGyHe4tGA8fD2Z7rwJFHRb6p7nHmaWhpaE9UewEuAqbutV96jUP4VM6",
  "key5": "4rCje6kQ6ggheHBLKgL7cGi78534mQYMy9Ytntr5S9Ba1PgQJQkcGsgTL48suvDsCWY7xZasSCfi7jMH1drxrxwQ",
  "key6": "5E4fbhF14jk2GwXnTeS9jhVfuSjLDrBRyXJDUya48UoQ5ZvidXYUcimhApCb2uXEJciAkVFYVzv7gAWyz1wXHjsN",
  "key7": "32wb44k18UH3yGpsgPwpFZjUuk18XnjwygxiYMs7uJ4FNoBzNSaLCZZG2L26qHV3JZReoFWYqAztyBw5rXbseoEk",
  "key8": "EQq2vLo2smueredcboo1BFgf6TnrjweBBV439jdBH17CQnn9gC3drDiDjYpJKbn1YTGvNdVqqdpRpdTeAoHP6fA",
  "key9": "wVrqRsL5bnESkDFtRHdjjo2ijQ259abMRyR33VoCEhSRaGCeEP7np8AsgFzsdoTkmU7CTsrwErt9g3oThqTXGmm",
  "key10": "AZXFEdP9V5L6YzRugojwjdbt2QnSY97u51LPqMXX4UtJ7BguVqm2QtAqUATRegd4QZiVoLX76buhTusHShwSRN2",
  "key11": "3yXqdd321C8oSTVJoX2Ec5Q4ye7QHQ4mjgSZJ7ZC64NcyHL7i48TvEFQzNVwJgCZMXFaNwNXfKEUitQUPLWjKfxh",
  "key12": "5Yr3cHxZMmMq2WktY9oPQqeg7XXfdw2Jmae63F5RWawNFav5LnPsUs29nsXmbsXrnPiopSukwQXKb8SHgVpdyz8V",
  "key13": "54u2BAtTv1P48rQk1YD692XzWN1e9BHxpY1z5hQn6d8bAWsdii2cHzaCujKYvTdtbt9XdETZ3VjrKf7YcGFjFuRd",
  "key14": "33AdFDWqpFRG5DjHRLU2a2DgyuApyo6uPfvbEAzAFdyeUwGf88rKSYiw8SAB8aHfvpHcEAaw3czSNxJGC7Y24eGu",
  "key15": "5Ui3dNrLtik286TPAoCxwXoAAFdycK927vvrVDqHHpjMeY9mWZeFqnk3ckrkDLXQw5pGssVk1skwPyjKdB4pPgbB",
  "key16": "4yrcmnq39AK7vTxSoyiQcPeLS9paw6sdRpatxJRwyZDLjWM4Tc4FAxkDyEYK8AUctrqxLFacBuJAwN32hDSngoLA",
  "key17": "QQtERKyQSXBGip2EwGQFVD7PoWWG7Z4zKDzbXsq8df778RAEDQNFjqWEoazc9NDMU3L71NjpS3Kbr9Q4teATBTJ",
  "key18": "4emW5Kdm6RNRpgT9kutJxBMXUvKZZwTKoBbpU1DNEEx7Y4BGp4GzSqHWwMShqGqaAbMPj2CioJMDh7yRbJ6yWErg",
  "key19": "7eoxod53fuWxCtiLe2exJnisZaenfKAwP3d2fXgLUDhH8TEuZMuNL27SRnjcWJoZ5xC1SyPVwxEXAyA5NVudXRr",
  "key20": "VrMDLXcWFjyc4zQXrZJb7vPz3eBn1Q75aEu7uf2xY9mazW1UuaBJvqJxiSLs16pAJUf84TSxkbCkLe7eaLkUgMS",
  "key21": "5V3JjpBWzncgVTd8nXprbt6eAKSfy2SyQat8FiHQQPdNJW1FsdWmuH8z1MG4WMYADgSsYgiLuLYTZKTmLmBmBCxo",
  "key22": "uH4aebdubxrcZWGqRj14eTjrPssgD12FBFEqq5G5xmB9tSeLc1DttAKk8hMWMfAGTFy5am8XoLPE1CwnVqZhpzz",
  "key23": "56r7hjkkSMMz9jw8Tq5agRRjqqwQTr1YPfogNvYvnQATJ1MHRbkqWhyrGsn7cGhNyj1ewqToMRQjFSqecCCwW4Z7",
  "key24": "3GfZJ3MYXjiBPuDFqCwbtwAuTfsp2GLpyDaHkLoVpbqvgzvyffawzw1LRERWuYTd5LdqhsmJxgzvDvm8Cwo8pNko",
  "key25": "4qV1EbfgNSof8sWB3docPM5p4af8M5cHnHeYH2gxyM3B6Ucz6hYWpMzKzSNnr7bNuqeHFdUnurE2CiND9Jq7soKB",
  "key26": "4rg9tpLDzuT5SxNLjHhXtaroji9bqfzcQv2HAJGBvKEzFTY8E69MMsXxuhUSzfKwjxPVc4fygD3KKMeqxKPDW1Fh",
  "key27": "3rLDejrb6BteVQ4LSzv3tisQCQeUsdrHeTShfjjQMpHVsNr5hCtk7qFfLVgDswUzUKPKZVxHV2f5FSTL8CjPsEEJ",
  "key28": "29RHaDaTDXUJtM3ezeFsMv8rjYW67ii1ZjtMuiraAGDPhSXXkwZ4RJssNKMGmWdQyTTHp8oVDWxqEjW3QvUZQW6S",
  "key29": "dTkof5VjaDypEMPK62TDc58Vh3jua3qyFdtmfDhUMbEREgwLcM3DET5FZzT278xCFuBU8eJZMJjsuQubiSQpb7Z",
  "key30": "5Bfw25WXPp3UQHi7kxGEVBhk6gZAZ83SARHBYpLQSRYmWPgwstXwBnEkm8zwiNUQK6gu68W9qRgomE3WbUxR2xqS",
  "key31": "5FQaYDi8Zr9p3hp4fUjZ3RJj821KmNG6WAXnpTfcK6xESjuPweMtP3iS2fVo7Mgy4QqsTHowyjVw68s4to5CmKx",
  "key32": "3HuRwnqkbiUkYYqCzAj13H1qpNFstidZVoAdrJtL2LXjNf7qeYE6MB4Uj7M31nz4gzSPAyBNEr6vyvsLfo7XNCD8",
  "key33": "4GtqFk5rdX1T4os8BH9DR5LypdF4SY1vJ1dz2VkY7TANXhN6pPTwaNVMMLrwb7PSKKeuzve959ASYCyJx3q1FKFb",
  "key34": "3AkqVCnUnJhW93maz32cYvSu4ivJgk7wA6fc133uMtfJugy6owfYjKh5z5jA1GrPYmcHMQhDhM6aVmNzBTvWGTpJ",
  "key35": "379hVq4mohug8vBNWc7eNaGJ2DFPnxP4kx8xxhqnLVMRiPSZWjLXXfyCkP4Ft5Pb5BPsBUbYkd9niu5fxPYMWSzW",
  "key36": "5KbTg44KRS5ZyGbYdgsnP9eXzigzNaDZ5S2wpLUiKJx5dMCP3zEdjKNgkLQv9ttJ6AndmD6rMGucJoU41XZd6HBt"
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
