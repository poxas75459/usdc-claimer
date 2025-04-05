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
    "4vT4DHkjjWNfU2A7t6WGEBaiitg3FohMpWEV2irTWTYnTCybZzQsnr5PvRvkGzMrMdLfWRf7ZxHJUmbZXB6BK2vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p1uvUaYsEMZYSgYmLTA8So6PL9gYCmmFPVMffRu3Wez8ZZd345Sk22TBvqiTAjUKe5tFJHPocMM1XocL3BjDMW4",
  "key1": "3gDcBkieU1WpWoNUg88MmmQbKLDbNpTVChudAZf3PkQKFdxsvth5funcyuaoMaBhxcQs2VtEfWGeZLu9Mxo53pkK",
  "key2": "dSJJY4wH9wBoXzSX6XUuvtHZ8SrFbzWXezu3NxdMsKfnKqXB7DwoKFSL8YNdENKhvjuTJ1JALfniVRcTpQuZtYy",
  "key3": "qC6Fn9LfzzTQmy1oBDUqE6xSKoFUGiWEmFv5TcSCknGEtRCA7WK7iQ9HD9TgpiBDjEa58jt5X9mxZ93oAQ9ciGY",
  "key4": "2JECmVbYJTPyk7zwStqhSj7XoEbpMgdJfN4xzDcuQRMWeaTPfcE3UZ7W4XFi4Qx6wbC8xiZjMPQqp4CE6LecQViY",
  "key5": "3L9pYqZNJpXNsDiu2u2unEG3CwozZJmrsRJZFLNURErmXtKCAF64KZswi93ryTpxEL137PrWGGyaNLWNQbU9hceG",
  "key6": "52sqVszt6zSBYMFbRSrgHQFvJ3NvkzcLBsX9KKmRGeBaJsTBZT1R5taRRoxaZGu1DX8VPAcEUiBQobRxTPXjMWJx",
  "key7": "SzW5PPBmmJM5eQNH41UizVpVGM1mg2iUvN9UJTHcz7EmCVacfjR8wAmewQ54ARUJyTKvzRz2QAH7TMfAHtJRuCf",
  "key8": "63mHpznhpy8yr6vwg7tUnFbQhutcMWDNuheQyugaWdGsatj12Hh47hxjUcKRppite6chYtqXhw3guZ55tkcAsTJA",
  "key9": "4KWK72BNsH44tdg3TyPff4qCUFTBL1ok26gjj3fmNs6sVBpsbccBzErCmdNk8rExrBDR3FXj4fwvEaKnuVC79juA",
  "key10": "KyVQsTCvCoMahAP6zW2kaHGzzVbs9dtwUa7DfLuA8tuemDuj6JwRr8ziVevf1xfbQUMfCwoGXkNkZbrPvHyA5Ko",
  "key11": "12tMdZxRDuXFcHHYkMyL1bWP4EKLQEBUfKQSjs8mRYfzum2K5qYLYiTBH3M7BLJVAPFpyBeB8EPkj4CG3xWJgDZ",
  "key12": "45KfLqHELpLVatTUqc1MtdvvQXYPnftrr9WjfHNrgMj9c4uVWXsWPaYSHXJVfAZZNp7ZyaLrqAoqhKNSSv3AxRFv",
  "key13": "mJ2NqHubBmKCfBhmqM49DCe4kG9puVzSFvUa5et3duA5qQbJCYcrnyHXgLoTt9LESKzx8hZFgQEvj138TMxdaDH",
  "key14": "2oHirbUDJbhWiAsTwp6hKs3y15jw9vGrmRjBqAs9pfMQvGzu5ReUR93Avu89DBjV2hRR8cGz2aMACYqBx5PeEbvj",
  "key15": "5sod2o9bj1Qr1Q1yZpbx56FmJaVw9jeTKz7iSV7qzGP44UfrU8pDbF2rwCP2kh34MkS69hHSAzeJ8nTWkhi8qb9N",
  "key16": "LbDLzBhXFGkQ5desKDcw3Yb7TGnXNDTvTa31eh8jbpkigpHN2SR5ELY7EUyf7VJGVS4Kw17FmVaibrf5CnaeMAg",
  "key17": "4f8b7PC5mherQWYNV9isHAY4WfXka2apinwUyxaAR8F9QnKAygv5G2WkY4vUtxFxHnA9SDFHbn9jWswGkT8AhVNf",
  "key18": "2iVRkd1zarhMe39sMdVkskAqZy1HueYKf1sQorYB8vXqGpG6QL1ZxyhuZedP4qXiwJWfUWZhv5wBqS5SGSm49uGa",
  "key19": "66spXMdpCiw9xHobdZq5PRHWgvHxRBW1bfFN9vFJu5H6tjsMwJjGhXN71SWiqknbLRorWoquqPhUbu7rBP9b86TG",
  "key20": "39ueTR3GQSRtJq66i8tboWSPi2cHirW7nxjwSXPFhisCSH38vngqiK3yw1ACR6Fq7xLdEvvC52Dr2YDzgFm2KnjZ",
  "key21": "5RUC6wZ7ciVGzFBReuAqHpHLNRWRUV8FdJwZUXXstu1RoWakNmhv1pADdjNpEgmfc3UxDvZk5NvuNNiuwNhq6c5b",
  "key22": "qWsyqVJzusVAsKR2DW4btHuUU7TTsJiqqKWAkystaibL6Jiym6iG9WxALHvz3gcCQTxzRN98n1QuTnohjAipU7k",
  "key23": "3YKn2kVtvpExumDNjrAb7q7NgwdYTGGbSEVcozSvia6gmDNYN9hUA8N4m48N6mBNwVvwT2oPjDiWWsuf75wrNmHY",
  "key24": "t5Cs9U4ke1grYC3S1crh2RoeUY9at1y7Sq7pT37iv9rxTYdDhHNjyJfy9M7CXoEdNpyQEkWG64Kg9m4YfYXHY2G",
  "key25": "3ARNSYdq3fWaJU6jNKNPhTi7yo4VmWcLW1noY8gLscxHATFM7AcrntfwM1jSebpk8TGfmmzVh1146sf5qZ1wf6W1",
  "key26": "2pGYqqsore8pqXKv2hXbdsML5vekW1s2Uu2ipmMrE2ZBRLTmd5uQr4oYBGxidECPizknxsoFw7jVJoy3Ly5WVyLy",
  "key27": "4i61yf6Z84nPN9cueXHrwtyBwAPEu7nAksJo3KDhv6FYA64S8njvAEuyGi75Pd1zdTce6CXUq4VmdoF5iwgQeEXy",
  "key28": "3peLCKrA7GaQq8Y38tCSazr7p132AWeiCWWEGoJ3LgHoyRoaogqzNH3xE4Xbb6rWkejxBhT64hKNi7aWor5wkvXT",
  "key29": "3GubC49yzGtBBRrwougLEWbyLyCeGLfG3rS4i48gWggK7d5jegdBQXTGz3MF7VZP9UZ2aBNGpg23PiJKXpnGACJm",
  "key30": "2Zzqk3UtNSC8XStn3Hdk9E4VbpZuuecDXm7zsG9cUztZaNCWawbGETs4dRxHnEom5D2bWft7FFGgrNLawbVrEUMS",
  "key31": "wwdDvy5ruAQQCsTtrr3CMJbPruF6sVhJyMZ9FaZLsNhs41UTSokoUV2N7MkWgVH5GJ2sKXhfEZc1V51XQjWR32f",
  "key32": "2UTHZh8WLnwHKLxCy7jWFWzef8tFpVqA6kBLxawL5tXKgC7njjjx3sc9scSBqyPJ2SefEB5igfmi848xy1ivAKh7",
  "key33": "3RnRhper5CaeSUKQJnzzyzqquHAP2u9WNXhfsCgsLbLatbMs3otKC5QKNMGU2ggjexvLxjfU3kn7KwximU3X8HAQ",
  "key34": "4YXscXtyuHcLaMd8dBwKeaYhQtFCBQA1tZkVoEjxZ1FoJ6k5HGwnKF8Rw9BpgjmnrJ9r3JTfyi4XfikTsAnWH3pm",
  "key35": "2hhtF1LUDNs2ZM4XUEXuTH42B7pUQuHvg4HsVzTr9umbcTedu23XumLPbqM6ks3fraMJvDgryBDuivWySFkPuCSt",
  "key36": "45MaCAWLDHYhn3V54hq4sw327J7pS3vUxwRra89Di8UsQrdSCDDqvJMZ3kG5c8xpDtFk9eJkChFCnTJRnkVnhCBn",
  "key37": "3jr21XNBC6ZKNuUrWnZMibCE2DCrdQZXdcd4V55cJbGmXEaZ66yzdcci9i9YozgJ52pisHq1vDYPviZKQ6meuGGY"
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
