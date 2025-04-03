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
    "4JiXDvVzsTngGR1ttEjcCAzx3g27iWhue6vvBx9Gv2LajZmgioRgpVRNsqj6FdvWnDD2TAoMLt53XMYZGXJTqGdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N51LG3gYJLJHRaKyQfvjUUqW6Qqqu4JDF98mHhdo3WF6PzP4WX5A2iPDiLynWZKZC9FSNETR3eVxqXtVBPNKLwD",
  "key1": "2Y8BSdr2AjSvnph57bhdaTc94tfhoMC7uo2HDgznJivso5qMHjWg6XTmWW7PagNkTVZRx2X3UvisvyTvR2RpSYZ5",
  "key2": "335i8wnidAEtBdYpVYT3ueuofUL2U7UfcUwYPGTpufz9XhcFVx9tQvxjKGG9GuuKqPi7pRT1Fyd4NGkNaoeYBpjL",
  "key3": "5NnUUtGAMFUJThY3X2UHykAGg153u1wqoaJCrnAcajLSthbyiR8LFoRqb3f7thiWyohvBw2BVfteKLTfnzmKnvS2",
  "key4": "2bNXTejC8Ttg6RXBwFrCvmSn28aq3dzjqzyKf53oSptNnEba4A1dkTzSV4MedJkyFJHbJd32FHUxVSWps8Wm6ned",
  "key5": "2nSyi148f4kSG6mo8x3LLMQVzPAhmTsTUiY7xKFcwg9zjfWSjErhaWvzVEXjYvE5gtfFASh64NyXi9pKtmW4w29Z",
  "key6": "LwSTSzqu5sMFroSBVpMdySK62jWUtYGbcudwXeospdFWnWegLdeGF42BQaf2iTQewpDTQSS6kJA9LxWKNhoDp5h",
  "key7": "4M3L7zTVX3GuTq6qTAVFJD92VbSW2AxT1yrCUHwNMcfi9kQQSPcsh1fEVSJkQkeTx5spRqxzi7UmTTXLMpBrHd48",
  "key8": "5Fqmm3B3q416gUk2TjWYCrUVE1ptnEAHPw3yjY3ZXs1sFgGtsCZDp47pYTvzo5WdaCJcrWRz2rm3sNC2avL56Wn8",
  "key9": "3a8ZLMqb9jYFQW5JDB7ZVRF61EatZfmNyqMmS4SxbCYe11ayMbW6xW3Pkkumz5aeJ8D1wauLt9Zx8h8zPp1ECGTJ",
  "key10": "3DuJiyGUAKnnmcHiSznz4bwRagYaVXgzUVhQ7qX1nds9MN5N9v79QJNQFpvXKtzoGomMGp7PMrv8LuNC8EanGuAn",
  "key11": "5g9n1SZLVvr43Y7eU7P3UDu5boeNkamHCk3udK3rQDBfd4H4xAHdqikuEzh1yjr5LvJyR9xexq1ATViWMHHoBYyC",
  "key12": "418ZF2eB1hiZyQtqJen5zKnKffc2PgBPpMoijUsajLmREYqV1n4UM3yP2KzvHvMhdABfzUqJ4KYB8XuF98o5LQou",
  "key13": "5EqkWuV9fbRSSKvqmnUd53jQmNuYKUwv7aSAVBsZXuFXcMoarrsUeijgGzCF2N5ke5qVg8fs4dH9FxSmnqdmFMev",
  "key14": "3RytPhr4VsDSXkAEEiY9GaHczP1Ei8mSiSfxDKWt8jDX9LAtTVoegZSqarAkvG4B9uTHGF93WyHjHtVQXhfrqe3g",
  "key15": "5WCZCNcfGHeA8smceNa3DyhD21jSqwmKJt27h8qvQvZkYPbvaqQjtiDwGCkLESnGfHoTZhcegeKjuUiweHVom2e6",
  "key16": "5aihw2QCBFbCNKnfHKqU7YLjqRieB37vcW4JQoaXXXUsyqqD3jCfwxCFNwB7eiUmGFULPoVLQRNaT98KCaDe5vgA",
  "key17": "3BtLgjERYTuVECZftbpUnBcC933nkZqbP1nm94bKnPVfahZuyZWfb6zJwZKp7c1KRmP1mP4Akg7PtsVHkvSfbdnm",
  "key18": "4wYMdbZMxQ4qtnVGL6BheopkFmnUcLooxYKBvinM3UGgzHajpmuceBnzPZbjkUqX8M2s9ivH6dMwmt8ctY2P1vaC",
  "key19": "2kFN9BB4XsHgvdXW5kV8bhw13h8ownyyrUQ5GijkrdAsYPwRiRgoJNhehiC3Qo2yxfCEwFpdCYL6bQQeZdNXbueP",
  "key20": "3v1sF9agE8L7FPRQEt1ibAFsp2uAujbbuJRKTHigBKaykPVVKGsAfQz1m6YdVPNLwwde3Lty6R92iGWrwNRTiqaS",
  "key21": "3CYXPHjBfTaKqJ73WNghx4ELJchUZbXz3GyBRGedc3tMCZdDB5F1srqRTa66WYxzJnN6WpSjouDJvTmrJAbprAc7",
  "key22": "41TqtNHZDqH6xe5UcWszTC5pfvpZo6XdhccPwGK1dvz4XoXMoWaUQHz2ETS3tdZhchVFUi7bo94WZg7H7xz1HCTf",
  "key23": "31RDk4DxUAw9EQptpLSWvPVcmw7o46ZX1EA5t5ABkDUsvwpnbFArGoo4kshTioDCTpnysYa3dGYBBRanSD48Anaa",
  "key24": "3eBkQNH3ANG8woJZRQYgn98pDnPAA2dpa25CGBsSsMiV3Wvu5f4nwT8wUTwna7m4bm7gX6SD21uzAzdFSwsegmr6",
  "key25": "4BwSQw9SpydVJ35i9VNKjrgYKRVXi7G685uTEajqCRPRZBeCDyRgR3jRrpjNTFxZJ2ggJZiPP1dT4WjiYtFsFTmi",
  "key26": "5Y83gQEbsXY5PqjoJGhzVCHfXK44LwTLd8VewXGGanrB2JtSKZ3S1XnBHFMtGGckCXqqReeFv8tfYCvtmihUWoLA",
  "key27": "33kH9XNhaqR8VqczoebQykhPGYgx5f5HhSSqrvHWxcMZ5dd7WaYNmL9cfJMCMUsMqkb4pj6c4VZCrhGu294NwYfX"
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
