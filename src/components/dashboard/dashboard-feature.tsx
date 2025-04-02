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
    "52UyZx4Fu2t96CiYSTvTThxvAW1QeAb8h6cSNyupefbPg3X93hAyjrExEgiFECDWeAFpF6JupBCP9gUpkJq9vyKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mx1qoMQziTEXxYHzjehg3YJJ9t3psxNneeL91mbR4ALFdHdvurCE4ctGdaKrfan1ukDak6rqCccQsz7pHekAsbh",
  "key1": "3wsgURDhXy8DFi5ChLqCenpmZFFr7WnnixrNuJVRPgzNeBNd21KAHcTymnZjV7LfJKzUEw3YysgZhBxR6eA9Zn3E",
  "key2": "67X2NMgsuQ1A3vHLpnA8FZ64vxRe52UYFkScRxewbDzybezseFVYYgPZxrcwEkiqUhxfKny8QG98bmKi45GH64Kj",
  "key3": "2PGuSHFBiDRqTVkCfeHoWujC88Hu1j2jyrKAg5kgVS7F7Mqro9cMCuraYNUwjS8yNLX6d7C24FMFYMHVS7c48r1m",
  "key4": "4YqiSGuQ2uWqPd6zbYDLiLvfLKw8Knr8XedTtS8snu7VY6hHwiSzfiy3jXjJPTcLmoe5gZz3rWKciP4Ded4PLXLN",
  "key5": "h6CD2CKALn1mLspRYidbPHPT5pfoDYY8wuPL4pa7rd8QaSEs6nunj4H8MVQwea7KfvyBdKzeeoou59T1qeyfZQ1",
  "key6": "3deSBBe4SXZ2d4SzExjFknCEhFsQCDuCaQQkDdihe72jCD7gCBGFoFocPPYXa29LwCb22yiVe4JmNDa3KQKBmVih",
  "key7": "v3D4naXgi242cvF3erqzqdLYqicqMH25TBnziWmD3NnitMSRAwkBLEF57B9eMzz3Ay9j7FTUo1UZ4Synh2mqYSJ",
  "key8": "3UymxKkT3CbcGsoqryjjdQqR7jE7qr126LASpgpmG8j78dGSnPpa3FHws3QuXv5oqy67ZtbD4R1HSosGuESRgiRW",
  "key9": "47MeCrJYZhTNQVgz3JhLTQq1xEeQdrNg9JTBJKNpKSgC3eQduTT5kjvTSRpz6erLdYKgxeyfPtU6U22iXydAA9oL",
  "key10": "XmrCpL75HaEk4ZrexrWGGXFbhti2Ne2nwSJtwh7tvoMGfuCKe2jdVgcBww7Ecg2wsTFufcWU4QE8cLZuEeiDRDB",
  "key11": "4bQdDg3PNTHxxVzXFYpuEEVcfTTzdFm8VwVG4NF8UcEjANx8x7AyonEZ3rBavs9Xcfqo7C9d9qzytQ15ZCi1QuVz",
  "key12": "5PuSK8jACF6L3MTMqGLSvWWT66FJ3f24qD8wt6D8FMRjirb1msMPLYUsKz8VfcA67KE9bb1hAqnvW3NcQ9ry5iWW",
  "key13": "2rjc57CrXp1rahjwHJojhzbrwa9ESoBLjTB3uB4WbxerQXNjSM6PuYUb3sUtjz97SgQcdFtKEJ4jHxVGoavnCxAo",
  "key14": "3L7C5xpHb84rt7WGCPZ8bEyPthTxL8sifKGPGP4UZj9KaXN3msbeAxyh8FBsUxG5Asxh8gnRWmMfcaGVuznJ3ddH",
  "key15": "3C64w5v1ukmLDBwn2yaKZQQRcp6bVXcKL34HHaH3aUu7ZzpVhjgGMMhtHCEZ7NaVPk5PdtfHVbKmwSNaz1PDtd8r",
  "key16": "5hzH5hxw2Gm8ZkkJvu1EXP3fwthkCFJmgMc65nBaDonwX8N6UvgK3AQLm7AtWWFHurgAWSnLgXpKTE3yvQtb5RSQ",
  "key17": "cAQiFS9hwNJ16qT9KfEFUs5a4HCD4iewBb4MYgaxTMsesWwTBwUUfhJ7EtdCe8JjjEDYxXN8bmmuURUdJ53UgHu",
  "key18": "3oGhzDE4hTnq8rqAGdsVDzjyNB3TQgF4cXezuuaPmL2Zo3vNxLrRwuv72GUf6zofaWf7Q2E4rXUDdUcNLfgeyyWD",
  "key19": "2LvBdrUpv7rRodjp8WTdcVeXG1kBnEznnkzo7PkFFKXrXtezU3piMNTsnmftSS6QGt35gs7QW7tJJy2LbwFg5qva",
  "key20": "2KhNLjfynwNwr3TwBe7m9hXaRs97BoF3u5oE6fpQZZ6cfFpFXnLzrobXxrw4ZMm67GBzxmoVN2KwdqqZYxK6rhTd",
  "key21": "4RGTmdirAifFwQANcGmYk42LmPfX6ouWgDVNmGrFZrD5LFXCGuSWVUEqKQbx7892WL6PmJdwmCMZYmgvmvUTH1Qx",
  "key22": "5RiausP6UQyct23gPzTefgH9dw8Au7jNt3ktGAQYuGxVPemUB31zpw6Kwt9G3ACLGosgfAKKVrYo3UEamrerR69n",
  "key23": "dS2EZjHmnzATawkmifnLSpynfz4TDvqQxCEw811MJQNY75P5fA75oP83251msj1ixtk562TUBgQwiU1mdmN87Ef",
  "key24": "27dvXEqaYGaqru9enomzEkse6dSQbeex5774TYFFq1zXgQbrrVvDv2YfPpxqyhYegJi8GSDxg3KyHwg9hydW1GaJ",
  "key25": "3dXfreEjP7vPyAjNRLZeLdFYZ3ipcq2JXguznVmM21JbdoRKHpsXVepSXQkcHoiSqQutEQZJ13CFDXhq8NMnBgSB",
  "key26": "5MxLyu2J6LdihWSeKuynPsPoQorwWRBVimPTkD4FxAcgzTGo3FSRMxGvXwvusHmqiUbveLSGg72JQ7FYZ1A7hnRW",
  "key27": "2h4WiAKt4rHXQGf1iL8DpU9zGQdx35ggDx33r6X86KeEow2McaSdLowrvRAayuATrm5pfoUbEggDUGdvYZ9FwK8S",
  "key28": "4Fwcju9YnwgAsXz2fnsiYzQUmtpqKid6rBWrTSpL3YDosu6W1Eo7Xg2x8Cn2kkkQeZtxRHTmEKvQPQk61VLyMTbh",
  "key29": "dicARRNVrwYpKnMvJggS284dcDi5GyHckM1suesSzfZe8LbTfPXqTz5PjpPsd1rhAyQ5gmtJAQ7CTuTZWXkr2qC",
  "key30": "4qDTwchoeuSG86wc42yt6hMK7Hgavc2Yrs9sV1gmg8enyxR2LGXcpdFhM3Qk7G7nzRe7yLcQH9Z49PjCZ75RNXiX"
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
