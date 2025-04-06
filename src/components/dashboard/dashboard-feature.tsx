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
    "tMMSPjLVDMagfvgjTBPtUfjUaDJauB8ZYyMcHQA2so6s7cSELsfeX9iK2R8V7b5hT5jd5YPkx8Z7xGu4mfF8Tba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHaJi4QX2rDK82Cgip4Dqi1Sw3NzXzx5sKXvMB8punadXfokVM3DjcKHz5LgwR3Z1iCgq1rqmxtF5fsdcbfPZYa",
  "key1": "3Lr91DyKYEXmv8JoJdBdREomYrPZDdn4qzK6yrNUqcVwh5dDsqUjfq94pW2EVgEv1Bo6ikaE1KwDjZ6gX8utvXQ4",
  "key2": "4wEReH2hkDEURRPPesXTqjuarw1k3g5Yuc7QoookmQj2yr7hhV9Z1zFL6AVP1v9d7LtuiSeDfvkmhKydG61K142t",
  "key3": "5uNhJgCPg5mNUQK6qhjCj7jhRCvN2gvgJPi5ZZWKhwiifVUuT624WKYt4bB8bvNEUQp48EkxNaVBSqtZWYTNoqb7",
  "key4": "5dyMEEMQ5ZdbXwkoVboFsBKtEZFqUTQMAQJrsujMEL8URugEbntXhtkX6YrLFoWMvvHDxXDuJVSuNCcVpqsWQaD8",
  "key5": "3e8siWUgnM2JXP7UExA5xpoRKbocygdHZGdYwRckZ2YpeG5E5yNhn65XsYhpcdSNWp1ecNcFimKGfwjBHb9hF5q2",
  "key6": "5Wi5kuV2MNUZDzdZUV7Xjpih1H3UeQkVsw8wnfAp3D9BbJAcPNBTFRMH3NHETEMVG9Vhpy8ENhZeMj68aWxKUcCD",
  "key7": "3yaJenowtgtvYD5aWJehQA6ptvcf1vQNyGn4xhSRqh7qRMqhDMwYAy7jLGP1VHxhhPcKp5UtrAF5bWEMyUUUB3gS",
  "key8": "Zkoq4DsmmuHUxYSrqY1m7n8qPozaX3W4sPCbcZ9LNde5Jb6m2Px7XhysRmzxBxHTABxQJfB4DY1R3AcGSCavPPe",
  "key9": "QedfuS5tve3C5gLWAAdB3nV3uXiyvdQCa5ymrjUShbwj2coCULSP5Ek95ref198QYzvqk5eBzMgQf2GauHy4f29",
  "key10": "4Jh4WN8RpAHa1hES2wRP4hXSLUah2uuqHtEUpKoSASXjLVn1gr3K4KsJZETnFuUNWnsE1ArV9UCikS283qhq8joR",
  "key11": "3hLjbppgtrgBxiRiFyEvas1GM6nhxCg9Cd7F8jNsVzKZPa8nrq6ALQrmtsfd7uuh5rgJzqCcV7rHY4oyDGBhZ4f7",
  "key12": "38oWtBAPoGwDmLKnao7xAz7guosQGDBafCvqfBC1Vp9Ni5M2uTetHB1Wv4TKktt2bDRqxPKpWZTs8LaYXXV2ArKP",
  "key13": "351er7HGqego68ffvaZaVXQXzyTEsvj1mrhAUrAtQPLVL4YMsSUiZA1GrJUiPJZGeUPFdE6Jqnwoh5KYeg3BVGLa",
  "key14": "4KiPDJbz9B8wFmDDyA77bonXCYkkjDmnVYtfaqMoyjMmnV7knSGidtFpPsozFGz5pAKNeNbuVJNLm2mwjJ1pqhjL",
  "key15": "5ErHj6rmWaAUoJEkqxVa7cA7iCzs2EfxpfeSNHMgHpGQLNjnhRXK9pQsMrTGySRYBz9U3Bc8p4bZsda6aH7fECvD",
  "key16": "3wSoubzN6bEdT3Vsk6jmqQeESaccKzsJdpdeyFRjVtpwUe4Z1KSvZtkYYk94S9yNmXcjR8igm5iHxHf342LDLGqK",
  "key17": "3qDXy772G2sZfeYZTLKMV1JxiHzeC31t9qyGvBs1SgR4S4twthgbJroaSk85eoxN9PZsS1eTRLF2ospx78k5pGW9",
  "key18": "4k2cx2yejpgoSrmjTS1X11s6VJwQqovDScfXgcFBbXQ3Kxi1BMaXGW5nvs74e7B9JKbpVweWc3nywQoDoVH3NEn3",
  "key19": "4CGxpN5wRjtmctLP9EFxsz23h3zVBJh4xsQ6oP41xgLi3xkoWHdAPfZVwC7vPXXwUZCDxq3kmB2JPZ9goJtXsQri",
  "key20": "A4nNszUhET31Zi4edQgND4nCxMY4KDnWBxBYMU243rWiagKwfinM6tsunAydHhoC23gTw4jUbVbL59496sHoGgM",
  "key21": "5qQaeSC7FQAsz7hoKada8W7q9De7FFF2SADnm8foarV3fmamCUFRWDxjgixqFqMsWNdmGsUJwAF5QJjTJbYJbdra",
  "key22": "4QbSJFtoFWEu8LQqJnuWGaM5XRjh5NyCxyDs8mBqDG2hfT4icx3WMn5dVyomtXhzfnhu9P5v62zTkxdQtZ6VuiAY",
  "key23": "64wV3e6W792spMPpezGPnBtgwnqdPwJRN9gsqZev13fWRob1aeskWC6KAJ1UM18VLKcGiG46gbpfp4BZAhpvjwQ9",
  "key24": "3bHr3W3PrGPo7vpcWapUqUqdZCWRm3jKV4fXP82JPUQhavTcv6627RT4MUXuHvzcC2L4sWmZivTgBVGWU3f6pfRC",
  "key25": "45t16cBxfLBks15fWCLG9kXHYy6ix19K8MGHpQrVK3DXtd9QW2dUALsKrjjnSaGwKiVKjjKUzwKQjJYDL4jDJVLh",
  "key26": "PM2nQB7Bjab9Kcnp4T9dL6sjhR4Rr9cCFLhSLnnj2ii5JMJaDpDY3yHncEdoGt8TeGiWvS2DHUfiaPHqK6cyPVu",
  "key27": "4aQk17QYAuEzkGV7Rr3MyGnEB7zNvHgSd8z1ef62orLtWXUDdm4CwiYwCZBTLMfd6RiJZTEpzEJVVoaAFMYhF8yj",
  "key28": "S94HHsngeDdcrps58LJ8FKZqyRHxFAdzHoKws3n3uptr7kQZbMLeQHCtcga9konj2Dqy2gnggyvp6NprdvbsYc9",
  "key29": "5DQa4afV4s8fHhCg4P2kNX89juo87cKwqcj2eceLd8Jf7xrEVLaqQHGkJ1RGE3FL7XS5b3mPq8xvW1HnSA6jCMRH"
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
