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
    "3vDAm31PAJWXeG1QXtteJL2UBs8LWoRiVkknVjcKGhqAvkTqUJ46hGctstiKHC9FZHbVGWg2U7wGFdHiB5DKT6EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4mZb5ZnTgseP1GdcpycGorbMG3f1AoZEaETxubvAaf7iE2uukXSigrxhFH3GArffrWuwidsfn4zDPSqrxy5u6w",
  "key1": "PL3NK2mqbNcdapupQ3Ny8FaDhrgFVBM889oa6MiJn3QyxbbPGJTZ3oZTTQXXYw7gf3AeEEgrx6rNtBTmWWbo5MH",
  "key2": "3k2mrgmLH9Fq8rkvpmD4HiPapPQeWBH8LCpx5hP2CP7qdzoBXx6VZgCRwEkjPRGuVLKE1s81fKPjW7rUWJ4TsACh",
  "key3": "p84C1gwymaNKoQREKTeqQYLx7d9qwBx8sWFiiH6LiaZ7ywHYoX61FEto2bq91SL8Dtr9HBeDZyHTQwQcah97nVw",
  "key4": "3eaovTmH5Pra4QRhMQoeK4YJr3pPx1vVj9D4bE35VPLuuEpCeU2vWXZRgQTMzbC5KjcxW5gMRaTGVge5MdAiioVS",
  "key5": "2HsPiMD9K7QB6KBQ4f28PAUP1ePJLjDqcYrHe6yU3WxQ8CrgvASW7NbxBwJdyMAN83DfDnPGWNuDtewAGbxrwXfZ",
  "key6": "3EFQZJFMmYHLVPFdW1ZZ4U7Tg2J5UmgLtY4HBKsAzfGvjXKm7gKTJNKPNFzk5ZGhnFDmdjNCMRP5Lbj9bt7wSY2Q",
  "key7": "23A3PzEnL8C74SAZUaaprR4ZrmS36EHiTF9LnEaAY91Tj6U3SVTwVswTCLDhvFJqFALJjEw9JM65KPAyco7gpFMs",
  "key8": "21juRRSYmDRssUgSd9kPEXXu2EyMi7mycyP9Xx1soThKy3zzY3jwi8tVfMjL6UUQLdFu6YxVfmm4usY2CjBP6WNC",
  "key9": "3uZ475gByCYow9V4gS94E9P7cCSyZhrSfJcZfPeiU1zcUT9S3s96e8eWDi7CGmgyaKN3zFiSvD6hybrTmFVutZN1",
  "key10": "xdMojzeQbcUHjWuCUxscUyiMNFfisxYTTEfYku2GuAquLK9WRfCigxn17wyh1eGRfiNKqC9KWSkVxnmETQv4h8Q",
  "key11": "Vw7gvcDHiQgc2C51qPMTqrDBAehXiYGg4Dfm3UBm3Xo8pqvzqb2zjBTHkzBxfdqow8CAuGAb6T93sXi6TVpDr7S",
  "key12": "2e2qTF33E1HFoZmn8Yb5s2P4Ra79QjBKY4GucaTVVQ5wWdXserJ6krP7rS9zY84jew1QouySWgU1HqJ91aE2pUem",
  "key13": "3oAHWXtJJHEeVn56VN5a2xwdHhniTDJdzMjF9kWniMauV8nnHoECSbzSUyHRe5iGjabToyQfteMDogZG3aREMEG9",
  "key14": "47v6P7DnKwupLWcUQGysapbCoW4nWWKijFxPRj4Jd8e5rg823MtKPUxRH9p5nCURhaNZYDWxGbeqX2UjWuNabFYQ",
  "key15": "2hiF17FB4ppo218KDEdLwwhVv75o891JYQKVXKcyUPu6uuHF7L5HR3A2GjbHr4ybnMMmzYiLDmYgqhWanKncWCr8",
  "key16": "2oQmrjkH47bakmppf9z93qRqQtMvUb7z1FPozte24qffxhMDq4XpvWKiAAgbbLVVbnasdFwrD3mjEfBJMUmhzvN1",
  "key17": "44YpYttur1g3Zc3TJJmvxvj5KNqJtwpEyLXGM9bSjqWcokxHu3Af2BFwz1pt5huV7sg8i9QcXMV9AaH6L1hz6xc6",
  "key18": "3f2igj6cuDSpeU5D4QUAS6dddQQ1NMoZswMxEgYn2CL8PfCenC8aZvX4BekA9DSiYhhDUH9iGTk9RdB9dhURqv5U",
  "key19": "34pgeRN8Lrbjy7xZ1NF1mfAtEbEXcrixy5JbKutMKGSnAbe7GNGNjzmThU1Xe2DTWzRg3pc7hkNWTFGz2FPuttz",
  "key20": "47K4wjQ6Y7hBMsGU54qfxUj5QQhf2JSKn3YHAuM2BRHGAThTgEqvsX25G5AW7peDtKtd1rfx9mdPdWPc2eTDXptn",
  "key21": "5QT88894GxcjKmx9qYdfGU1jYtB5bMctL3JFVUAmcUjwh5zs3nvh84FF48DTayJcvuxsVEEr4QuvBGLLFLRF8oLF",
  "key22": "SoYGtMts5yDfdWo78NisYHCeGMRv592kuKyZGYVMK5poijgz7Fzm7RYvjZMvNwhWx3F2ff8yqugXCk6rF4sG6VZ",
  "key23": "mrYwFLWZfpzHnSUBTR7zR6mn7NPootYANSCjdAgWd3opZ5Sbq9XBbfaC1S6RC5qW2yYot2i8VbVNofdbVbd2gWw",
  "key24": "2ZAtmxHuHriayMMqiQDpE1CF6NZEkLr77n738oKwcjndMKsGJWkT8vGfZaRS9VYU41TGYRMxj2KXPtdHwHhaxm1x",
  "key25": "3dMwTY7gcpqsfcREfrEaNQFixtpxGujDWbpgpwSggbipPrqmFv5Pzo8g3rfRdUSfSviZigJ8u8wFopFzDtCGKJ5f",
  "key26": "4LMKhm5t2xAZYZe5gXTsRkxKCKMTPb6Qw7HZM3qUYV5e3AUBN2TycEVFT8S37wz6svJcCqUzmRYSddw6AzMuv45o",
  "key27": "36rsRWzzAQ31xw5h1PZycGjHWK7aLY19figbkJ3ZVHk8sBusxyn1dtd9ct5fW53Pa4Y7aZPo3d8Cs8Kd1S87B4gm",
  "key28": "2qqikcCDxk8fktpQnicZEajkuQyKDDMtv7PW6h4my1aC42QMo8epenU7f7ZwEhpfTrppd6bmBWQoKchJWCaBkY8f",
  "key29": "pPBhjZnob8qbs4qQiAUHP6UbyAhPzaSoQ5RD385tVQWGNTMsb3MAXFQR4mkyViearScdQ3yucDAuSFBr1F3DTtX",
  "key30": "3L9PKKZXACmNmWFWB8XEfGpDsWjuxniMkYzjvRUESnBugvNwrinJAYTpaAjQCtdc3M1Xx9Ygcj9MeVVTh3cv866k",
  "key31": "9rvEVLEcek69aBSDdbCqm1jNEYMx47amPnuEWYPVGw4PF5C3TEhzxRxXj8f8wH4NpXzNAUSi5JTw7j6gekUvByP",
  "key32": "5wP6kCadoQTk3Ku9gv4SkaEvSnvYDxtSAt8a9JMdVzdvDP8r8GntWj87UMCa9LWnBwp1DPc7L5MyoVzDNBjrdd2y"
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
