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
    "5Tx7usKQaU4ssxgmm4pEo8VXxjkMkscdiX8Z2hehiLfKCSs9h35mPVsfNU3eMMfeVEeXg6Du9uBjcmLgzpA6QDCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTB44MuMr2KdtRNCwDi27DPSBxu3mGDpF52MtpEuVu8CG5G9QYJoDHFZKUmSr1vZqj2VgpwJqcpLaYuttYqBS83",
  "key1": "5dPorMgMDhqmrZr1uaqXNoejrdJynxrzGrgtxuzG4GuiFnMponMyncQHHFn4bgKgSieEkPEsxPVTFLNXbyBe3ySN",
  "key2": "SBQ5QTxVZJxi5wi7SGuUpek1xaMUeppdJCQFsCVyoKE8jjzfFLEYS4qwxpTrtzTDGb7ibBdTuDGkCk9y9FG2ZRN",
  "key3": "MEMhSWW1wsoZFMW4zzpJkQtRMxe81tMv9x4JaYgKxtnBWwM6T7S93wGz8zbPWuDGu79SRZLsrNPMujsJ3mhtohZ",
  "key4": "3n53YWZ3RpYQWw8dTRrxnijUHid6jRD4vaGZ9t5eD5L1vUgw7YKZ5DWY9wtH6FP6yauYjTtn4UXgAZkDUd7KTv81",
  "key5": "5jA4ktAdzTN4FabYQpw1mkTuPpH61dwWyr1UYg9MyqU1P3GqzvjxzWxH5w78LaGeGJWV51AjBc5X97DjvecLRfMV",
  "key6": "3qrZ68oMR1FCNjKJgZ2TTrXQDBY49AqSXE8J3jpdKcpi7AheFTtxthhbuMM2rVE2Dbjdjtj3Tsxtkj2wLiYCdr1N",
  "key7": "5A2EBifuFh66o9rpk6iQ3aePGH5gBquqbHzGiEPiCkYzhWR2Uyja3211broFVAMcdDbDMg1UEtkdgK54Wm4jAWzP",
  "key8": "5ezKp9fLUg3X7bVXrANWofwpUvd9w34WwPnBLmKstUmQLFCcTnBKCuAo24MAbiWFoQ21onSqmy3m4rj6ZrdLPddn",
  "key9": "ZCWQiZdT69YrwMRztiGxcAMGSzR7v924tDbiFfPFybEXhPqVnadxt5V948KG3KKBuESMjDLQTeqkDeocDLv5Wzf",
  "key10": "5oWG86rcnzzmbh7XdzYwKHbrF3g4jyHJHescFUmsj3BAk4xS3FSWWd2XyiFzbsTE9BjGjJsQD6WYng1PnLjhDE2r",
  "key11": "5UqiPtYBGPoj7V9U8EDigmWp3HwTJeX59z38xBEyKjyAFdbg4BqApDTDDGtFDwa3vsMr9ANmAfW3u3tLD5uXMaju",
  "key12": "hzBuFPie7jP1SHg27MhSHu9WqiZyQVE9SF5B8HmQMDZ62h8a7ob7GxsUHqCarW6Myc8GvXNrpHuYY3X2w8ba5tH",
  "key13": "4ut2KhVEuMSUeNHQ1t9p9LgWJNgSvwaEqNH6xXdCnCaGNSc8XKc5YJ3g1UiWXCyKqn1mH9fbucwds1AdaQEatjCf",
  "key14": "4h6nbuPDqUuFa3ej5qmHP5XZe4GnNPfA5EbkHuXW7kYTQnZrSrDDirhWkvAnHcLNbjZohcNUHkcqwiAVfxwCr2PF",
  "key15": "2Zf3wcwxuA44AJDPeefNFnGhxHqdgm53N1M6prpqntrbGTLAVhbLfbwE9JcwPzrtay5aSwXb6FAmtFMVeVG8dJGx",
  "key16": "1db7FGNkYwp26LMyZKVzDXJUfdKvj3yUU7zEUZRKgvXme2svAAvoAGCNnCbMJUUzQULY4sFUekMSbH4Nte195JT",
  "key17": "57RUMv3j5EogZvBbWHBKU1ZboZ96m1HWCLbyiHHkgnVzbwzACcb9gGfizyH2Le3LXV61G4JAtgx5ADdLhYTtpGEr",
  "key18": "4Ec7ELBy2uiGGFnHNKN6cbG6hScp4kRCtm5sBcR3qGzxpJmC8oYAB6WYbgft3QZjSLPMGaX4RAUSpSUq8wPjvVAq",
  "key19": "Uj9feHXCjAziPsq5Xq7NwoTTF4g8wypRYCoddeuTHHAxunSacwEcU5fYZPES1TohY37pe6Ag43GsW5NpDLYyN3j",
  "key20": "V3safLrtW8Sbeq3qqWDjAtkwkzykDDGeYV9BkvSQejM7EPKLHUbuQdXBWCLYRrRQPQgfPXSoEdmuyojnnZSQqAe",
  "key21": "23pog5kpJyoPpPcgCRkKkMr1LjauQVNNbrnTmkkeMCCjAxkJmzybt4RXGD2Dzta6xXrm1PMhnVTeHTWTuYnnqzAR",
  "key22": "3oNSG2iDzvzTR1F9sK9uxopU4GALTsC94JFFbAsshzLZYcxRizhLGjyAg1Jwonjn6Earb2HiwVXMu4TKoAnfQtXf",
  "key23": "5KqZdU3hNU1im5fxfhgEmUeepvggVwaL1cDmzPfyCFwmRPg9tEbSVdbtwZM6f5cczFFzKsJAckUkhoL74vcGEUMH",
  "key24": "5U6SVrRwZzUapegMPC85Lgf7QXgTjcjS5RRA98HfVog5jmP6Vc5vyBzCEUGU9DXmGoyPN8E6LJcpjW5MCezCT2pz",
  "key25": "LPFJUWFdXZNbyaiVZzmjapeVBQPku5WjjDpoFJU5V1ejFUoPzWmkizg1Cd2DxgEovvs3EDhqAyHGTwkUwxv58b1",
  "key26": "41bzT2n11EvskpvgwLPh9ZXnyeDAJvRMzRe6kPQZfWxyut3XUP62rcgeyfuGPEhN4smkiVY6nx5Tag8kJ1wKq7Rv",
  "key27": "57w85CPW53TjSdHUjEAn6F7MhC3w2CzjjKDhRHDYW6RGHXyeAAoTCxMQ5BXoHDjxhZ6AD7iBmsH6jtM13TQTPFch",
  "key28": "DQdtLwuEDpwxUdW8mhS9roLgeVinVryytkKKJV6yVSTo73qcrNjuXrWg6Dm56rQgM5ZevsHW81VmsM4fnLnoGtE",
  "key29": "2JWJ1ETucHagDNnxRLXo4AhHguVnHTJfrpvjCjdPHosq1Eh23ReYrVbjEDFym3P6Lhkgq9neVYkg2UbhpwSL9FXt"
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
