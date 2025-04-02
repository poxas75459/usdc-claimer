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
    "46huBLCnaJHay7S3nfk4tL358CjE7RMgcUroeU1e5hrpwtuyQDdvQYLPH62zfcX3Q8boAhc7UxL5ftUAg5DU9GPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AcN2DjNRtwdymMNd6uTLHYqi3m2hxaoDYVcgqw3eojzDhD9LTTJubkDnCUzhyTssDZ245RPP45ysLRHQePrdah8",
  "key1": "5RaZo7jAWYMZrDMxT6WqUa3ZY5wfGXHvzaQZQLYe1YnnTtVeaUA8nTs8Dnasv79ssUBx4Y6fHP26KXpQE8HLWre1",
  "key2": "4Ro9ySeCVj7yLGsUbVYdXpsfd7URDPFFk7m9UndfgryBKGaN73ktJwfpM9iG9X2jQdEDVyYZeETjAGLptzTw6Noq",
  "key3": "5GPoSqJuswJtjpPnwDvYy784hTBYe4VjL5bEnZRyV694FwGAZhh8xSnh48np5w9FMtURUgNhnhS3cU6hCBU9J2UP",
  "key4": "3RUfAhtTu1sjaxtzpVod1SxNeDGMQK294iVwKwciDa2zdS25xAvkpDvMkhjngcaGKAoatPXRqPLDHJ5VM6TLpELp",
  "key5": "2zDcNQWWjMkLk6Y4DJYL6cpJkTU6v5m3e1d5n75xGDivZXYgsKm7uyDyqohpJeH2Errp4j1YF7zNyhp5ZpiBMCd4",
  "key6": "2NSXCv6XXbUkhxPktTW63ovyWCZLZe26NVpNEoeZj57jWHtaX4L4jL7gU5hk7zRNc7NTubii3M9MmwCNCUByTWDX",
  "key7": "3KJXadJZGqfwNm7XgQmMPnFi6DatCj463k8nBLmDw9KPZFaVdhNC9eMAcfHA6LxKfuRUPe5dDzPkmXpY3UbyGoG1",
  "key8": "5kTzRUEzFnXAyggCNMztuHG1X75SCDoGShoteiEW3VLVvV9W6SSrK1avyvgqsa7y4HUwMi4RkpMbcAfjtCcAUBSk",
  "key9": "8n41VLAWyaieS45GuaSCh5124H5fJ12aAVfHnjjmXUd3g16iHPkkZvVGc9a2JpJ6QmuKUFZmXZuxRnMZ6kHzkai",
  "key10": "9TkhNiSyhQ6PGZtRStck9xPARDGb88RHBWQQDJHuxVDsMY4urea3qByjxVCWehG254W5VTm45PXUrugGVhSnomP",
  "key11": "5ao4jjTVgU8cPo6wQbdsRn7H3rrTQ6NF6Riee2J3udN72fXPP4G7vRdRrHf5oxyWrxkZJJkkehD7bychcxWhbTyK",
  "key12": "46U8CKNjRJJ89bpQ7x8pBytTZpQPNuc2weHmZBVhvoiGfsy6MSNrmLYVpmXJRuPcFcDb2jqaJ7uPxyrYrAaXxySB",
  "key13": "4bwkAt2zy37w2u4eEKcZxcxhMBVMVnN7xdViFUvCEX4MKnoPmaFR6sSRfttg8VuMgbj5ZEpzT36sck4EZc6wjhHJ",
  "key14": "4k26tvpnkgY6zjqKizD7atDiBQWeWDmxGTW2w8rpn7siXt8HMP222J6yEeNvZPRRdUTXjg9nJmrH9DKayUYjgVoR",
  "key15": "3o2YqF3m5wwrPvpAU4x8XF2NuahnWQg2oCe2hDoF1nP3Ez8G97N3gAz3VrEUzaNBpxU7kyjdZSeH7EFTF6kAex6s",
  "key16": "3ZziqhxvKjRjMcTEWFE7MPZdcE53QzfiY6rYhKdband51uMBYUfg5VBEH3CYUnqdAwyUQijFoyqAK1HPnseLu2aZ",
  "key17": "3JNvorfwR2XFKfy4MQefgHDLJpey3JxtBEkhh7jSVHyypxvFyD7ucfou82zVP5BBMV7y7gbkkP2WUMuzEDJmk9Qs",
  "key18": "4gKcb5acvbV1viEtYXZU5chV1hyPRR2Da1L2K44qyKXmCabtPq8RJxhJgZC6bvLGxa9pRksyzjWyQ2nXjmcx9uFK",
  "key19": "2DqCpbTsmhLdJfynWgg5C6StzsyaadEV4MQFRbkYbb4B5Q6V7p7yHa5dNxh242Rq939cRyTCgGRAnKrNm1sEb4fh",
  "key20": "2aLg3gB44ruAzwZL8A5PpasiRiFbMK7ecShsMrBQ5THVVS8Z3TjB3kXoK38YcS6PYt68oPoSqUeHojAx4ocmBd4U",
  "key21": "4TvnjHxfqyxnyQZKQxSiQ2yxqS7qzJMjJDbmvpCWcCwCzAUV3A6d4usR5eCuVF3yaZ3VRvDa6b9d3hTvfkJf6oeZ",
  "key22": "Sdx1SkXfjWXhkt71s5CSrMBUk2N1WJriDp2tmAiCzJaVdxZDt8HVggwQaXjU37FPYp7VfZECn4yT9rYpGNRYRPy",
  "key23": "4U3tev4jgXchskjtWGJZtpa8Vkw9GMTrMJ8q9b6JQghPBRLH2U4XJHGuWeWYPT1fdmxH2gycn82ybTX8nxdq2qL2",
  "key24": "TM18nus8ZHKuwMdWvnvMA6NjZe8ToLUnid5vsvUgccJx4Y5jk3SQSKCTMgUPjrSJ95zFmbWGji94PT7JmQqvB1V",
  "key25": "3bBADQqH4FqEDostjY43YjC3bKUskuT6k5f7De5qeNxVUZKVmDEnJRn4hFdGgzvCSx1yyYrX4BDKbMWRFcKHAAWW",
  "key26": "48BZbv8MLLkftJuVtDg4VMPhZLuxibgyskGB7gusfdErmYTp3ptZUUgSfoFMwtiEUyv2zsFJRXxvQywaTgZLmPWZ",
  "key27": "R8WC4bLc6UQZxeWPegxKeSscbhJJeHsMHhMX4C3nRDLrsAU4qWyYphQzXDpQDWyWnyjpndu3Qr9XyNepup2wuKq",
  "key28": "2FV9E28rgKA8BJoknDw2kTYYaVAJswn1bs7CU3mYek2AA45kfdCwpt6981p6ZQ4c4hHU7dtN23pFe2N7YwDxrQLK",
  "key29": "3AE7jnrmeHL6it9zrfhF6SnkZKMzYRQd7QXbHZZm5Va3e1EbqjVmmXKHAQXCh1PUfuiJxNZWPhdpNbQAJg5jDdEK",
  "key30": "2b3gXAoNMPVNpnPxprNkgqFFHCVxTGWkoqKHxHwepMNGxBnc3Chykdvhnw3HuhEcCcePKqU4DJz5UaygmMgHezHh",
  "key31": "25yBpMk2W52HiwWuCGNmsn7r1t1dxiGPnvSgLVPQepeA7Ns7paq4LPG9a4fKahiNNzP5v1JhM1gt1FWXduCRrbC9",
  "key32": "3Zm7cTW8gUJQCSR1uhXC831se5S3jKADm5xjHidgGtWJGM9uAHJUq1EFvZhZoKzEpTgMULWX6tFjxWSibxwh7mG2",
  "key33": "3MdwsKyJGCqCdxKuyHQKggrX5Sa2JjfSJYYE9HVANf5oucN1zdij76YLqiZmjug2pbo5zmuccqGsgkjvhFQ77XU8",
  "key34": "4PU4AgSYJFJd1nGZbHq3qC8JKLaLRYtmMHB6zwv654ShMhoBCPCHdBbvPADCdXHWHfncPzx4DbSuHnWvC4p3UTMp",
  "key35": "2uQUq8biWieUnMAkZPXRAf3uhjLWuz9vkDc5DyPksz7qQa7J6d3sj1efqXNCYrqvX7EV3qVXv9eg3iJK1ZKR6zTC",
  "key36": "27asLvw8yuuANQMXfLcKChaF48s1ZBQ8C1q9g6hker2tXWXXJCGAc2oMWRQi4ukGqgMetdTVixehnfi5p5dezhCK",
  "key37": "5xPNHuQXDHE3SD5upPcVz3oN3sKEZSwcf13epEF194C9XXTUPU1Q5tcpfWNzDe42Yyeo5A41QCQ8HytLudUnKAmS",
  "key38": "5aXc6AgnkBUE7wykbfHkZBk5K7pjaZsZPgpBMxVbGyFbQsZV9jqQtX6x3pHGVmCoSbwvP2MYw1gLSJjWRSfGUqYC"
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
