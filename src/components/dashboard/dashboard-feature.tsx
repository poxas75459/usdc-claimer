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
    "3u1uRGjrJdH4xTKG5eL8utdGca9yFTbvugRGFeaMgqHoTVawCeGEocigsokmHqnZDRjnJ4WH18i4rnUQYKYgHoqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGyviuLpcNqmHrtebRW3rLbNmkWi3Vi9qQu7eCuMPaUsAQYSufddhyJGY2pdqa6h6M9e6c4YNLPk5qfHnX83QBS",
  "key1": "5KNocFqJxAXTWgCDvE9BZxgwdjSYd93YhMBDqsoe4G1BYvnzFzkQG7eBqqYqyEySDNDsKvmXZeFmQATTmCeZo9QY",
  "key2": "9UYDLsQ69pALQmUGByaK5NMapJSTzh4DNQrexGyEjfDts3tZfcp6FX96w3LkS1FPkxMrAnHAihiAcZJGqGAoKTb",
  "key3": "4Pu9gxSHLoysrax69wECfkCdeq6ZqsgeZNj8ntqHLbD6WGjViZi47MQ87xDkh7aH8ayiD447qDTyHhY34JCfiRaT",
  "key4": "2EZqw5JRRtspaLcp7AwHc4EFeHh7mNfTLSFkKge7hWBQYvjzxuuUVfv8MxZp47Gu9RLZ2BkoiaRiLhMSH9PH54hg",
  "key5": "4CbPQS2cipVNv6NqwsgcM3oGqq6s8cXqA2LHRCBwa2fzAuGxGvBWvZmdV2Tk91kdrmuQrQ5mvcSa9XtFVLHKTyZH",
  "key6": "MXcy5obSjwB62Dt6Mv8So4gUuG4PCTaoaP4Q2Tshh5AvW9twrir5GJREdWD4rLPGSNsEuKRFYw1gRgA3G2WfR9L",
  "key7": "2zvrVDhRFeK2NQUBu3gamjKvnQrpDVweHgaQcFk446pAscxASK2qecRJXsAUKEXhVxw5FPEQKALCakLpKbuxbrNv",
  "key8": "2kHTNCEJdqKR2d8pYuuScExDy7L3t2aqvW82soh4BHbXqubNjxkRJ7xZfD9VH9MXQ76oAoVQnWF5d4GmsWamNhxY",
  "key9": "3YGV2Gd6uWWTECLA2cRGGW1fyz3uWAPULHNZHKcABowEgdhinzTwp553y8gxx1GWgz3mpAGBvpeuZ89Ay5x2nf5E",
  "key10": "5XGDYjzVT8s1bvhrayCjv3XGqSPtXQjRA5c2YTz2vHrKjXRZaS1dWXsvD23QzQ59vYDxezvTQUgodW2A7KdNheGx",
  "key11": "4vvNuGnEYvSaTk2Jq36KFeNvS81rsVspRJTkuDEnFk8wKKSyheLdT5yBvN6xcdEn9SGVD84FE38JqQnpvmpUrrst",
  "key12": "26Xto5YdBEX1TTDyBxNNQRrf4BcBfzNpLgwswF6rCjnqWiYWnhJzzXyrpdkVthnCbuW2XPbVrSBypotEvWQczFk4",
  "key13": "2ec9nqETnJhFpW4jT5Sip2UxFmkK2LrDYR2bs4gc5bzuPS7ExzrU6tDaJc41p4pUEcrk76q8YjZXx3ciaAtsJTQA",
  "key14": "N2Z3QqBkGu4KkmgeGWnfuq6khFGRURcTzjGR2KQbn3M33nG54cyAUteMtSziJdNe2kMu8uNLci4NhaBk82azzq8",
  "key15": "bweMoYNWwU91s6aA8azcJQxTL4jBXqSCx9jG5Jyq8fkkxAx4rm1ZRcCqquDtCxRt871Afs7BN8N9Su4QSZwrXrX",
  "key16": "RrKZha2opK1HHCzzxqosou4TGmet6PZMStiH3H7GQZFfwoZERUrcoL8nkF3jNKpWb3t1FauthsGd98scR32avWT",
  "key17": "2v57KiLXNEB37keaGH9gAyLaHjVnrbtSg5RqRfbhc5hwK7Y1yymuVToZNJvsbktLUPtitbUEUd1N2kNYqQ39oSeT",
  "key18": "3uAtyh9fQiPefvnxTXVyXhcuzKfyQXMoBZt6nzecMMaPvbMH7p9Ku1ZVjLnrethMAXh2f39Pm4Us4cTdgEhY9mRq",
  "key19": "3kZnoqJSkCupYandHiWiroVpBrx5o2X6SVDWpQd3b9NnGVo5WAweLAtbYrfnpKasUyVmDs487YsyHjJ1L4ge3vuR",
  "key20": "38P5LtbfMgSeBy2LDyBsq2dK6gDAJeg6gWpBAj7oWPBDaoxB915t8D9hDtzgihx7k6JYcLmc42Bs3jSvXFoHx6jJ",
  "key21": "mVQWeQfSbfgD8eNEwcs7fM1HKXnxYUB33eRPpkLsGgrGDE3tLwxP2HXs5Xg3R4Fzd6bYkixyUbcqpAs6jZNq7yZ",
  "key22": "3iYxjjTUE1hNfh1fULW4EKMmUN4peL67yjY2SfsHip9HvrCHezvRqtQ68GUnw7JqbK42Qijx4duvDWkNkX2o68fa",
  "key23": "2TyrrJb5N2x2tzmc8wcddw9BPYF2aRDxxLh6P4X43SvKamy9YchaJPxAykbTdmmCigUu74dJ7hFj79QUT9EGfUux",
  "key24": "LCJAW1fLgqBfSkhX1VCfyEpsMbFvpvW1Y9dW9GiNXAyaYGdsEFqhsvqjTQ74G9Egdwzz2FDsSwG276rnc6gyiZX",
  "key25": "65o1MzzRHJs1T8JeyWWctM7GesjVRuAXWgJv7au4UECH7k5Wsq7YiZPwkzaPrdjCjWA379FRH5tH8qNLmvAFAroK",
  "key26": "26HNCETWkkVBgZk9eVAWBH4mpgp5XLDuKkBW6LQ2xKKhcoXvD6iZPLsWR5bhinUKxyDjkFZ5CDjhmEH9EcfZqUEx",
  "key27": "2J3fZNTUFZG8LZEGsrhK1D4exKdbmQ4NFZXQoQMLum9vT88PjzoRE3csJkL11ew8WMVzWb1wGRoG7gsDifbBh1eB",
  "key28": "2TAxw4RG6YZdWJbkto7EMee9JSKTueYbMvdAAdtZiPvw4nXJebHQybizY3cydDh5Tc45Dm65LjqJz1txEUwA7Sxv",
  "key29": "gGDMG5PeotfbmHHwLqRmST5mPWXCjAxHceUcBjyzKGWzcBEkM12Z13fjFz1Bb5YgMNRh1PS6duhKmYSSxgaf1vP",
  "key30": "2AeJMAC4VQoke86NmFfviz2mFqNb6Q7LkG45ahnqxZESQ3BoN8QZioYDL6vjbmWRGb76bbeVQiaFsaJF3a1JEKXA",
  "key31": "2LKqc2L2SZLkagttN3e49MYJH8zCnfcnRmTyMk9J6aRa2baBpsDSFKtdSXK56aVPWKSiitPkuiQsMvKeKmLu16H4",
  "key32": "cnpHxJY2Syyi25mGwYdQMHNJWMfapwBKC3Eo43Lmk9hr3G8ab2MTEWue3LAKVySYpdTbaMX4oYa3DQZtE7UyzNM",
  "key33": "YGxySUUpVZBBEC2yDypSAVQujcLHgQLB6R3n27gtk9onYnXKgt3P1rNbmovQsWUxYQjvrUbmiispFDDM7KKyoGF",
  "key34": "5pa5oCtWhz3q8K86ZdqFPJYji4T3xBYpp1KBo9gmzyDWM2M2ofjwPimmFzTT2gWGL6mbvmax1MHt232Y7uCHSLbh",
  "key35": "2LwSdNWjWkP2VNSeLUuAroHcpne41JpWiDws8xndmajq2HvvMQ8LF9xditbggDrqc1Q7L4gdsCPYVsFaHySe4ahL",
  "key36": "48axnhguVVP4ANG9gJScN2V9V2JNdXYipHHumZab1Af78zWZHAGkgRaj2fs4DomtavS1tLP7Fram7nbnEKkBBh5J",
  "key37": "4TFkD4NewYuTSPz2fBAZGd1AigCArXyQLvjW9Gvhnz39YRDLEDZ1hZnRASVopw8hSPtcUdsEbZ1edSsy4AVdaQvG",
  "key38": "36Poyc3bmx9d6NVC6q9YKjK3WMSgmvK6c5oPRDHbU11WBZM8LYeRxF3HffdbNZogCdZSVCJbFuZri5Mk8FDZKTBD"
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
