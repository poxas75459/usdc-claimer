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
    "25Dp6yXPFKiHZoPbpRk7RypZGvE1P44sTdF4kfgWA5gE8bqYDZENB4yZy4ecaZhPX37BkBuKMoANbYSiXvcorrpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4AEbYLLxdJGMuEWbb8AhFAp1gMFxRGJRn9WSjrJACgqkcePxkAuS3zSZkHFLAhL4BJtrx2f9jfo3cKRCo6xKar",
  "key1": "2DpKMf1QbFLdeaZYr2xnc4wTsVYJP6WkWPHtUfmEPGScpfa14gXDqDyx5m3Xys2FBxAgPjndXKWssWmi9T7pxfbF",
  "key2": "4TnJpk5VkwRoZrJyEpw44deHi5Yz8h1h73C8rezgE43VCWg5m9YrgSJB2Ts9wq5yhb3n5tZzRi5Ef9LjYhKnJu2",
  "key3": "46coeB3EhqvtNvHtJsfxczdWogBpQU5YD94uM6TeqUGWvCdXQqixqLGdZyQp4Juso5Ng62DiwziPcGEfwCZaSW56",
  "key4": "K879hGCA2cSoDvBSGMVfku6MpXNpn9tHPGFSGB87DEEt2NagZmzn2jf2uahX94V4jDCfkCmH2YiqiV3ySvzoPbG",
  "key5": "3oEhBRKER2w16WpWUVHE3XSTpnwAPFzyvhHaAsa8PyrLG2JNDm97nk6VvXVEY9bnfgcfyndpxbxjqQeMamkz35wy",
  "key6": "3nDfPNXzDU3aPrEe3c6D5CjJALDXX3CLKKSfWatQHqMsMfwc19P6a2SqnieTjc4GXtN435j7YT3yYxkft2AMaX8C",
  "key7": "2Mp75md7ha2f8NqnxhQyJwmMg83mT1kXzDLwn1QWXjrRQFqFD7YsKpMv9KsrHu6RHqSz4FfwYiDYd7jVMho5XrPf",
  "key8": "46LDsYwQkcJT7qXy3TxcU16sBDYmoJemXCAJeTPn8j7snSkYmSFiCCszyXuDQLVkT9LYP17xv1ZUYjdQkqttxFRG",
  "key9": "32G3mYhCFsUmACXsXBZDaDG8GWUtn49neyH6gTZis85Cej2fLqH1gHi3N2W4QsSfo8XjTztPJXsoLkR4B3D1XkZM",
  "key10": "25QLBJY4pmgKJXqh8ZLYHcvmiTkFFnkqcFNoaFYHbmBGG4GotUaMPPUefV5nabZNQGftRMuA61fQTsKmgpyd19F1",
  "key11": "4Qy5PKSuwRzK2W7KJ9KSgSBLFcerkps6W2AAXDeF8Gvn8njdcNX3eCwmJURn48YYvBAqgxS4zfg6CkNND84TswXP",
  "key12": "4Ddgr4vkvLejDT7CCTPUAqgEqNJpfWKnLQE9yQ5ExSzS93p6d4hKVD4smwSZdwKjxtwAzbaHkKT1fC3AdBvYLmPc",
  "key13": "5nKvv3AUMm6fedVyYH3PjQmbjhMgw4GfQyN9dToYJaykpB2w2NBtNBFSNnrDTBw6H3P7qgbKaUSiznFeSYhTHS39",
  "key14": "4Ps7SZXBPGUbobW5fdsD5HEzG53SQDhzZAzni9K5iEPxompdpBsbBjxpoJrcS3zXP8fyUmM7boBKRb5ezeetGWWD",
  "key15": "5F3z4nRPf5mJmYfa9UUnKj2z1vj6JT1VDTM6f4WsyrKKavfRpgxEcbeSqTKxTAZQ1LBk5zDFkkpFanpLa5EUUdLr",
  "key16": "4HSRKyFUkWpJuPnBLs572LVBukqmL9TBEnQJhbiuDimbcAvt7YX4xksUzDvd2MVVHjBmJRXy22ExmAV3U8xuNHcJ",
  "key17": "5K7FwYgrAMJVnAuCufjPf5vsnp2qneR1YBeNWyY5185wqvMvaJ9cH3nxULhLDv5SYdgf5rWRrQK44FZZXsRW2Zvt",
  "key18": "52M3wnTf61YywHsUb9WddRKvJRruDS9MQcUxGygf5VBzDmgVTMh21178uKFeWQoKBumZRFh4HNmqGigDhx7SYtyY",
  "key19": "2f5aVrsgHkbvPyQRbPUEbJbLVV6rV9P22PfLhUPYjrr7p4Z5EtqM5SJKbUbzZ5oVzenVw6DQsw9r29irGbEKBrtF",
  "key20": "4N9hJv5SSgNcsuBiSPYHK8Nr4QNL4bGMkE31Q451gLv69a7bzieFgwcxMHgsR82mVM5e8wmprFfrQ6dCwpkCLaw3",
  "key21": "amFqMctFYBB1VxyhLhzhk9be2za2f32iVzSyb1oSBBNrRzUT4St4Jqnsvt5h25XXH5hpPUNhRPCY67tvK5iLb6W",
  "key22": "5TnEsHMBEt1h8LKBJe6KgbTL38tV3qoQaMmeCuzPURSsFqaz6KeR6NB4y2ayhSCnTtUg4eSYYtNC3AaXvv2oJ6jz",
  "key23": "S3VtkKK9XmRBkEAaM5WebwieBYarqX9xdUHPbJSBVPAAsDyVLELzPQWTNGRPAC68efeUvy5929TLw53vmxxHE9x",
  "key24": "3129roRnaT3P5Ypdp8UwBrts3FfumGu7huTUvJ4GbsP2RU52ZS9zAkgtQruGi7imaxCfyFBhXtRmxVBskHAPH7TF",
  "key25": "2oyNhWwzw534fNbytKr4Q365Arhb5TpefKhTBo42S8GcTgPSwhhSfTGcHjAYDkdYNpFmdjERfSbLS2RFZ54MCj3p",
  "key26": "2ixeDu6LV1dvWf47RBg9Yb1m7rCqdHoykHAidSRyQh3776eBseEeQcGMnM9K82SY6f96KLxSF6Sh9oPq8YoWq3z8",
  "key27": "5k5tcf7ZNCvKeBwcWaKs1RKZQbmuYPd9ZdvTJeFzfyYXQTtsXw1oyLyJER5EWq8daG6SvypPjUh8hT3QVdpSq8GU",
  "key28": "jWNAnpTtzbrz9EJ1KDTi2UvPcwoSbK244n54HCJbP2LxLZsfzBsiBqUnwfGmGTS6P887sHGGkZbaeARVpyPSV6n",
  "key29": "25eWSMwrn175iFvfYCdj2PbPit3MsZuAajpZ7oTUUy5zcpKTaDVnN9QG3LxPQMsV6U4YYPCy3KK6LVwc3fznFzo2",
  "key30": "5VEFW8K6nTx87PR7FQS1XLJJF6AQArvy7hAwfYFxyubMmKM4KcFKkNm7nmrQcG6VFTWwMFmkACxTirGPZ5DQYGmv",
  "key31": "2EYbsuYVLcLyUsvHu4a7zTJSM8jWguMvXHtxqZMMU6oN8MqpBBZwfT7gm95LiQqYpTd4TwrDe96K7UK7KcHys2FA",
  "key32": "4fwJZiXypebhJ4s4UNFzEZYF7uU6ukJFRFDYNpLm76QSkzZ1KbTVbPDywnY6M6UwbSr64Wpxb5a6TM5e3j5hFJU4"
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
