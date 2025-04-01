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
    "47KkXeuQVr6PpH9DtDeRVhx3oySrT836aHocKb16Z6oUZMZzLn24mAQtihsLBfYZEvQ1KC4Yb6eAdU8eP9DemZ4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QeJxwfFuURTZY8ncj8QfDSievdnLs2bXQkDEywma2pimzkZ7nPoK9RweknyLSNrPb7hBSZqHZnGuwGMSCB5Ak7A",
  "key1": "2hbhNt3u2zAMC5VPa6Jtnb23U259TkhVLQYwn2zNYgy4YANRfuMFuBqi8RKesyWArGEJQxPCtggWZQjvTaYfWDFL",
  "key2": "2PQ8fPaKKKechgVgkV5i4Vb9UJWs1B4gmSLJed3fxENTFenBQRtdSPwWaqw75ASVVrf59HsocpT55W6ve4Mqz5yH",
  "key3": "3Dv7uN5p4RnHUmnsTLdxKhHcEpnBXXL6bLVzm6mTCEC1cV8eGjp7aEEePJSKTUUo6PdRe9i8b8VXGnMhCSjKRDZz",
  "key4": "4QVcD8GtNwQ5mVVoc5tDDSgmqXRMmygXWw4G7sVSBXnMSg6oGQbmcckaKWxvEaWZGKqFVycdKLZAFmBEFtYH2chp",
  "key5": "4otrDoDACxGhQ34XRm6Gy5Mck8woRfaGTWmGiFVmmk2vm8ETdptPRyVoatz4X2tCSw4s6V6XGG4cEZbcQTPZrRDm",
  "key6": "24c5RT9hfBuJLyToMz3eEaNu1yyEob9nNSQeDCEbdUpiQLU39e2au5quDfFdfRWosJVrp3EpEZNuiSm38GkqcdsS",
  "key7": "2wr9JVjzF5sQUDmKHEt3WRDU4mVB2CiCCrxQwi4VF13PgiiaprfgedGfjMgrMJh2EwwtkgE3ooAuXHjixJgeSFo1",
  "key8": "2AnnWhtL3SFCaUSYaPQaZEKcsHQvhyC2TiJgHDXuCsdnVMviWmFh5vdckww5xXGjWkST4AR8zaudeUfpx4wcWwKx",
  "key9": "9gaHGLAVSPo2Z8qt2DtkLRotLu8FAm4cKCwZJp6qzjxYX7FZtjNSHrAEW2eaxpJTb2HX3ADfVC5rEkY3swYs8Gs",
  "key10": "X9UsGREuvkTRQ6FKXFdbaf6ck6FsmZjiNEiWupnWKTm8c48Vsty2jNReEcFLypjjvjmY48sqQLWQDLFA9wTMYft",
  "key11": "4fcgZdfiPQM6jDagjLS8HjBakYPHBUQPfR41u6DbKxnnWGjFgUiQag4xZj7ArugzGLdhWfW8mPjqRuyPSutr9kYM",
  "key12": "3xRtYSD21zwyxfKtCee2uRrJgVSh9WWjjND3uTXeCKYkHBG5ESPsgAVPqFhn7SmP4RmzF8LMkaZeT95EbtLmPBAt",
  "key13": "jRL5ZkxNE4ugKzgpM2wpyPaxg42d3yxT26bfFuYvHFUwHHdqUWUZqf21cb4A5DxUNUwHJqq3w2MFuSawMX9DtMt",
  "key14": "2a6rdAsQj6uz85J8F5nZLVJtssJ9uUcxy88cdB1BsCozjKxmkpp8J6y4giuiY79GBgnzHsbRonP6Yd6b7FtMWpwm",
  "key15": "2KJ7bPF3W7Y26f8gV6j3kTtDwJgwDgRBM7or3HvoTYGmeGrksGsJMLX9WcPSb7cKLpLS6fGrQmUbuJNMbazjb9oA",
  "key16": "3Hkc9YdKj6xfV3aMRqYAtXka6bwQuyJWUjigyTb8K1kQCVMJfgE6BR9JikTvp9qVcKwYwWTLXz86uF8tphPdTjzL",
  "key17": "3rwvEWkTubMT9fnxBiYDLn1YqfJF8VJmpKwMD41LZAutGAddDtGpZfjN3rc4V3EZpQ33x2J8to985D5gxcewUGKY",
  "key18": "inXozEGUgZdsKJDuGvmcc5Nh6RFhkSEGRLYQv5sSZZVmyoGb6wPJQfkNpLi5HskJeck2hwNo2tYdM1yhk35XDvP",
  "key19": "3Ukzs6M2dJAUfFk5Q5hA4HSZYuaRGi9JXo9YE9eGjs6NCgTenpnTgoZ2DVjEg7Egymdjvr7nS1SxSbgWdsajMMuB",
  "key20": "hfgtTtGGbWqDUpcp6gZApb7HuwEpjrHdDq85smaWCVAaMsvPtwJYFsyfPRrQ6b7F1MsESm5LxxdT7SnSBz3ppEQ",
  "key21": "2F5CeaKqyDKivfBqq1z81ydwD8SMAr7qwgC5p33W7WoL1mBULqr17ax7jNdgfrMSVW22bFRNXLkWhabmkjKarwkE",
  "key22": "34ZV27hciQmWa1AgDnpeH4aw93ZBu8CfyAvauEzkyUh1CLwjRkQkt5SdErnB7BmyDcoRRo2oJvY862SCuHo35V4o",
  "key23": "42TpjbsKP9XaAcscXqYfQEyjiDdDXKr6hzyrb8G9oFvXMunrJ22VnFK8ZsTFavSPQmyoHSPrEJzjDfryRrjiwr14",
  "key24": "4igSWApks9MgHWdStC1yQBTeEWFH4dJWC6nzUc8nnbnHNtCeGkXzQ93fLmi6uiGhKwwMonKvHjRJ9iJbVAEJpyF1",
  "key25": "47AU6xwEBpk8dKyFvNVM3ft8FHjXJ7NZFyuHjy9NVCwhJW2e49njvJ2yXXXN8wYMSHGu1B42H9XHfnHM78u2bJ7B",
  "key26": "4RpCZ8GHbPi92rG6s41GCwM334skc2xDCLJdP8DSnxfVBp9weWXSTYtNb6fCV2DYodD9WiL5WMgKdbbH3KSJSj9s",
  "key27": "yuM3hCPa6XMo2MgMKqPi82NW6EUFpnHD2qeTGZCxtjSGtK4hFYfUwxxpMRSvzFSHiYdNkZtL5vHuJEg377vmh1P"
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
