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
    "62Joav3mAiXWCwy9rw2BUfNJA8hHZf32ZXhAhZdK3EQHvcQ8DmKZ3H5568SFTYMexZ9SSJu6obxwRhZhFCySjPJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rAxjGVFMPmWzE9WFCkPX8kVTGTDQM9pmGVg2j7SMj2vdA846MNajHCiB698PLq4Pm2LhwyaZK66NaTP5vQgro6",
  "key1": "53qBSPwq9Y3vp1fWnAT4CzqVej6XNBjKJFjYRGHCc59AhkRPc1d2tQdbzqAu1nb6zkZsioUzNoGeT8PF9wYUEszM",
  "key2": "56m4tf2QXE9RegCnLA2LoAJa2pxhef41WZqcTQPbXV9ZesipZnCLqfMHXMarFGqBH6BjHkDcLQTjv7Tv1dfeD4FC",
  "key3": "5gY7mzx6c3QWunUaRW4wB9KayjiJa6Ma1rqYwpqPUokP4hPNzU9ofajf26BCphNTRpQG9NzBLsGQCZHVrK4pTT6M",
  "key4": "4wYccf2vKtzjThPdhRH3LpmNN7YizhEpB26GCPrjQdKYfGM26c2gem65BLmcjwukAUuhoAVXPdrQwjX7ESymN7ny",
  "key5": "er5j2Dn1CDLmmBiFG5wXQnTX1HvsDExC9diLnrSQs3gPubodkdtyz7ZWMWimwoEFnyp2kVoPUQCKmVpHDgKphyY",
  "key6": "2BQHKUqqUB594TbyEQokGG4iNc23RDaJcC7sm4ottH8GUcgVxCeQGC2BMu1BkSuYERYUpJG6dg7LDwCYEhYDBFSr",
  "key7": "2JreKn8q95AToovuAPL3AcStSxwYy8bKRjhrPfHUPQSwnJk3AkBhPeSuH3u3wPnQJTfDWWiprnZEZ4121hFELxKF",
  "key8": "TXHynzHJArXbTKBSHS9VLSxJUWb6jTPvjgcyN1X7Nce2B7w1RAWnpj5KCLcWBpnAwxQ5S5KNu7wvnPZoAFX9Maz",
  "key9": "gxSrqLav65FeE3qCWsteKvXETAZc3KBD7EEeGNfgweo3XQ1VNG9z6qpdrxfnyr9dAbf218GuNZhSRTdWQQ5xYcu",
  "key10": "4AQ23eBJFmioLfeNZfbyYQbLS6KuVg9DxtbjbPs5P7RZSKCujZhY4uvUwTgWpNkN8kLpVWVe3x6b1MU21GeVMmQn",
  "key11": "4MYLSfhJJaLcwhDzHTBM1wqmUfsRZpLvGvS56CrAhjw2i3AofDDmbxgGVwnWHXoRmrxYxFv6ynjE7wkedbFG6mBp",
  "key12": "4GwDGy1NBvUV5EgfXss8bW528ZGtFSDzjAGAxrqbRrzm3GbGSsKnopfaoPVa1qiunn1UZnV8humbGf8wE7qzXnVh",
  "key13": "2ghX25ZdMr6D7jJTXiCBNHLKqYpZZgyHqA4gVeHvuPePuio7gcZgXNvfpgB1frd9FYrP8ioy5dw3feAFa6CWrPzv",
  "key14": "5eF4uttrCQcy6XM2EZP1qxBFLGtNekwESBNBhFAqFLpc7odUScauMASRxxMR1arc4tFPWEg4ApWh1tqh7zABCubF",
  "key15": "3KNLQQMoWc5GRPcLQ3LzXsB6LSqRre4YBusrLuTa1g1PZw83ACk19dvMwgP3RZFui4iigMvmH7S4WoAEJ812sD5a",
  "key16": "3juqqp9aJoA7R5959PgBRJdroUXTfu9EJZ9eeBqWbFcVsASCYMyTCWj4XSfkbHPmL93gmecpN3TM24LagpGLjwjS",
  "key17": "BRjgNxKTdEwo47Xey1zJ4XbgEtm4X789twWdHU7spKZCpNRH9rdjoyaVN3rbNxvdpJHKyy3tB8HyJsjBCpNU9JH",
  "key18": "36Pnhz6sPUqAeMJDmhTmvdWywoHp7W4wHCCca7TLSZGNsaWAx8PrmHcj9J7SGmHTMbiGndYsMEPekiyoacx1gTDU",
  "key19": "3Rk6MaZAJ11GmBD7hYgif3R2kw4TYszFAqBBCkD16EETuxpF73GrBLZ2m95DHpwJXc5RBimGabGzzx7n63GJyhb4",
  "key20": "3vjcs1tmw2ksPg4EyJc9jaXBrmEZGsZPM3ay1qFzBtok79aJ5LSKZcDBhbDHDMXodzSpLPpAPvC8ueTbrX7jQ7gT",
  "key21": "cVGPj4Wfq9y2x2Xscu99GHE58k7ns9hmNdUrJXinyENiCUtL7VEk3jN8SB2HrR9PgEgWMRySuiaXrziUxrnJbZL",
  "key22": "3eDTWot3ejVCzidwBhUYBGzvugpz5ker4sHFyYJRodLnDiFDB6KFAMnThVZtqtJjmHCd7MxqFSh3e8iUskP7ETZE",
  "key23": "3sE6bqYtXAW1NKqh4RqxobW3BmoMzzMcor46b2MxsbUfeqPNWcXHmnfbzvTeqcJLoRfHjcWzZL8pHaP1voUUKtPr",
  "key24": "aY17zuqvp2gL4Xwkioq5CR527miLP5UvPoczxnzB1pmDZE9T2ztXagHcvybAMSnAsJMX94VWgkQhfYEBFySu8HZ",
  "key25": "2B43Lg3H8vkrWw4ELi2ZCXwUPw45LL7jVgbhDr12XbYH9oRJPZCCmSnvwVmDrHFTZEyxvwwXiP1TRkm9fVQ2ya7R",
  "key26": "5ig2x6hC4stxg623y9kYpocahTu1ScHAepyNCodnMY8JxfptmPhQ8WNywRftLxEkCvVjJapxsjajxP46BqkXRBzH",
  "key27": "4ftT7NjhPaFSC7z4YQom43wDviQy3FhhfFEkdbXuAY7kxbckJYSB3EzRQs4iXmVvgmxVFraEwyP3UEGHbT3KxbeC",
  "key28": "5UDyEDU9q7neLL7c8YcKsiHTegQCbeRD4sg1SoxF6iLKYzBhZ9w9ZzV65vdWmnJwwXPcE4ZfPKo61qGLZ1Nd12cB",
  "key29": "58zFNw6D1NsRJD9jN252BEzpDVHDJue1VY972VVEBEN7dUmU1BhyzURQyPqGgpWNU6YCpgsqpeBEQCwBpAArRpnh",
  "key30": "QUgbewFkUh9CBZrQzBj35jGvcapk1uu4MnxZmaeKJf6X8EokG21J1ZzftpyEM8QEPTGF8npwXucXVEXzJumeLBQ",
  "key31": "3VwWwHZcP72SvkmqFd3hpTQNASq3qZD6DFgQLsiDJP6iqE17DUSX5TjZPvwrqY7juV4URz1WGJ6fyrAfUYHdDoCg",
  "key32": "2yfVrZPVWQiCnV2A6J9JaWmoUWJ11F5Y7kr76GsGGAhZVCT8RXGPxgcffEPQeDqUMuiXCRMAQ2ijchRNXm6zevZL",
  "key33": "2wivkF9mZBESc6EuJMcgWDai5H9CLfcKZzW2BKQNTfpoKrnUi4bunuKmQ3LMoMaVCPgYG5XWJzrxy7kwQAbBvrkZ",
  "key34": "5taBdgRkFHxJkjH97qo1E9UN8pc11J3GiaiU3kXfP8NdTwvnn22ChhajBqTawUepAKwQFGP33j1ZTjXR9Y1w9MZW",
  "key35": "3uoiabyYQUZ5wLG2oPgueSaotVXEqz28Et5yWHsyygC2WpQ42R8bbW8sTAJ5FrWrR77A5yq5eg4rXtpddx4vtW4g",
  "key36": "5MCMZHXuauWHBZH3V6ctC3E6fFE2UuVoW2vtCNoH22W7QjwwACRA6utwdk9zWqbY1yYBz5rAGj1C1EymCCTmANjy",
  "key37": "27QL9kGDKRo9bsWsB2jbtYMc72V3YJfBVGdM6rCaavcpbKxqtz7CYoLqLEmoxB5xz1CuYhCJBmCPmtjVsbQ4AheF",
  "key38": "51eKScGcrDE9oEGgfB4ENXG9mHp57ZDEi4nR5FD8ArrTzjxHJTyqhjhzeMaBpXABkVQ3K3QutVgfddZexTL2wdR",
  "key39": "65BhPpz6DVqSdTBJMygeqbSTmpmqMetohUv4XgAqgLAeLWBUGsNMK5TeV5Sbty7eezYyvA6Vgui1JbTa4xc91iGJ",
  "key40": "5zUz5XAVJzNbGoZoTWV2cqFfnxFzrNwRbY67p4poV2apGj4BE7u7X7hhTaLQrShUqUDc1Vfh7Xm1fEFQTLg3roAY",
  "key41": "4Sa5v5b4xuPEqt3p69pEYh5EmRHKx2VopHSVFKB8KZFw5xKuMBKLQLvqgzeamdiMEG5enFr9UDd5WCyUBodyC45r",
  "key42": "451V35kgqx9hVADQdoGX7eikxR4G6VQcJCWJ8mbYa7gCxUvZP8kusG69bDbTnpAud98RQE7a3FNa4ogL8fKPi2ox",
  "key43": "5SFgo9nUb7PWVKnFj4YvdmX16RaDdv2fqKjq6eiwRhppE8RMYb8G19kbjHabKKUdQSQeQMS7eMZSytACBewLBgCF",
  "key44": "jrKvugmeyN7VT1LUw2fgzw1G5MdW4uVCBo1r1VKj3enDy4QCeUMrc2LH5jTqczdvfxSvm5i2kgsKSt3yJWz5GVR",
  "key45": "51KoKDSMm7nxTWFSW1bYptYwq6TxK7k4DVRLYL6oVAWVuVmTYktYQCV6nbZEmmQZRV85BuUj2QktbBrZtD6T7no9",
  "key46": "2cYWD6DuvNyx3dNH3aSc5EtRELC7Q8tYtrtSJcVq6mABQzmdYJapDwdPTrwRzN1CJSsUiH6WwBkwSZYKcSfAKjTm",
  "key47": "2a1KMas33EDAS71Pf7nW1bLMjc8jRonzpY7JAD9LAcmZAMw1ps6wFqznjrER4cphxA8Q57uGvqAKr6J2HWa6QNxR",
  "key48": "4xSukkyyUREKbVxgztCBosA1SDAsHHgjAB7HyTxLuSTqPeh7Y8C1HmHiH3MpjWdVyiz1ikHtWBfU9AYig9DsZbpM",
  "key49": "5fAQS7EFB7Pw5S6oPdT6vuW7JBKX6qqTJk56ubnWL8Bi38Z1X1uczHbU9utLG2ZNLurGpxWmFo8dJWwYNaRkDN8H"
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
