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
    "NgijYKQBmV1qqERmf1DHv43EGu1BfeqzoFnSScV97w1ysvDRwLU9TsVJzm5nArhgMczj6Tk3QF2JuQKArkcUfY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mv4svu6z53MACRkbDP5QufEoM4UA3Ke5Dg7vuEaXuswLiXYmZhVurKtY9iHNCudZc7TGMF7B616gcoYvJKn82MA",
  "key1": "352X3Duri2kEGkAqCAwU6BcRpXaom2B2VBmNTcE7iZEQyieKrsR5r2x4KkcJ484cwuQ7qZiNcgfuWf4v97bc5yCk",
  "key2": "5BUbe9F7nitg2MWFZvnT3RVFsKg3CCpLJJbXMPNXvWiFLwz3EAytcwYCSSGjLyKEftxPzhZFFe9FYQNW5TKFuQXD",
  "key3": "591AyEU8cAvg2ihKXmdT6Uj84FMhVLhxoiruezmMZTXTUuPg2xnUoo9hyKRTYGK7Up1Ydgkh5dKZACGPwRvR528P",
  "key4": "5HcFLk63xiUKwQFEPCLurwr4nob2cpUMe7goRGfYiu4MrFd9dyxzBdB1Lfp5qbzWRU7R9AphvhBpmGmrQXbXJV3N",
  "key5": "4qpcvUH9EUbfMAbd1gffaab5qBW4nTkvLgixjTMHREtjrxJtwnhdbB9f7HDueZDL3TfQPEoMXY5xApfVBxmGJowP",
  "key6": "5n4BCc6vfymGrxYM5vD6iwtWwXqMvVZireNYdSdwC44gTy3pzPQEAADV2XkGZwPdd7MW2spZ4ibvG2aF9gRyF7hi",
  "key7": "4HZSZgrj8NVYuQgF1B4AQGyWyeZnMwv63SFw62fBhfZanxQkLzAVSx52h3N9JfEn5ViC9Eh7JsgnwQZ3yxiF6Av2",
  "key8": "xeaXRUCmi9zYVPAVKzbWFS8U1VntzoqoCpSevuYbkyQsokDM6JpuFJ4bRjpFeZy7hDYi753AsMEVzq5oqsTQBbM",
  "key9": "65pfPE3aBHXthmyvNQNP3D9onLiWMyRxcawyB9SLQJDAWy9F5e7FE8mnbV9kUgRaaxoJFYjVdgboz2hQvLAdPHhL",
  "key10": "3GwURCeWvwyScZBcqMoucWwMkK8Vb1nK1NroiE1rurNYiSAKi6CKmjYyrN8KCX1nxHRHPBJ8fbPuPh73VH8AuVhP",
  "key11": "4YD8guqfrNiijMcRsRuLZf4Ua3LXBnrhuQXRApWY3QULff5ieCM2gUkuJBfkC8p43RDYQVU6h7TybBDzwwk7rpe4",
  "key12": "2PwK734aARh3QqmusLYd7rptxMp5toGuyXjaKDBmoss2iRskxF8WHuMgJ1CCLrcAdZoSuHnJ6uHfwcy9R656Gd9Q",
  "key13": "3XPip44zSnaaUBz9bKGpj9PfVxRhHLHRTw3e5yvLQDFSWkdQ22wFMvgEVmZV8w3GP9tUcNB8EPdp5oaeTQ778trA",
  "key14": "2cS5ZMwaBfcSgdyYSbNb9EG1c8su5QJK7tnr4Bddx4KtG85SqcXJpp2mkSiobExwjj39QsvpThzqFughZDGLHkvS",
  "key15": "2uRh7PGuKzvoNz6iaBeBHMcvPckQrUmibV6iSRsPdmj5aRRAQTLS2YSGwkrKz3K7epLL1nP2P8WWZZNYfcC1KYLT",
  "key16": "53MrHcGma7bsyi6VaeQ8ukFxtE3ZKq18iLstyNSBwEFfSg4gFCjT9jHZ7Aiemx7RpB8ffwVHwvtRM8CP6VzDpHcP",
  "key17": "4syHescPMMMGfBFAjHPF85W3KFHKkHf1W2FTAtUb55THahVz49DYdZMhCPm6zy7Zp2x9owzpdw5ERs6ioADwFrQ3",
  "key18": "3TRsLuAXE3Pqg8Ys7vNqVkiLhSCAaKzFHaCxP32VY6METz6jnHzutZoq6Ab7bJCTQeeLaTSET4h8qNxzbwfncQ6y",
  "key19": "4MXcFjKmv2DgFf8AdyAhvogaYc2WSX3BXj5GWbfGERfX5g67CBcE9K8xbKNDomCzFuFHSXJVWF7PGqgQ14joCDKT",
  "key20": "3wHqwmY3ZpbaY4o5J2oabStuvpvRHsL1xKHwEPERJ8SPXtKnY1dbn6Jgoh5RfeYkjCr345tLzsENqbm65g8ZHWX6",
  "key21": "28uHZJF6pkHsVTrPqMDBRCAUQyKzKwsFkW6DNgaaZ5HPuJV8sgAoGMdZkH8PK7UDfBNyXTJitTA7G7KfJYwbd4H9",
  "key22": "4qoWeGksycwYEujk9AzA93wxavkL85diEGjg1admReihXWxm3ccjQfpZSFtd6SDAKFGsLEvkdTmrpK6WVfe9uAFU",
  "key23": "2z6uo11ofDpPnUeX4SGHHd5N3LpnM1F74YrmPsC2siBYwEG243NQ1padiy6CzwLfXZiRE6VFxaR1fxw7ZBUUr6t8",
  "key24": "5zMfypVpRn9bfFP3jntEbXVahU7Mamy9ZPqMb42Tb2vcGSTnaEqJdFQG1qR6CkNuXghPk4UjSeDuKWkwY4m8tf5g",
  "key25": "Dhf2waVN8wotGHcCG1icdCocsHFY1Nb4cMVRDNsXNvnGhjifzuZP4XXm7XpL2Q3TXvMnDPRXRpYEj3eoRh8Ur5q",
  "key26": "4bdoSV7JvFpmnyBJKdV5Fb3V7E4J46143H4wGtyprC8tK6rZC19ehNLJA15ze9s11xWPABX9umHUamnHV3X5bpnC",
  "key27": "GVfuCsTCyTNxjR6yoizK1b8Ck9Qd9L2qkKbSHEYFs5irfxur6WuUzA4vm1RSmN7vhNNLedHY1AzQyGwPcC8QL6K",
  "key28": "5xdvGFgCAy8rSpRYpvDRpH5vTwh6kBD5fRsVAA5U3jCmAAaCu68s2PkiGKLCFkFmV7hHaD2u9t9pkciSv4AnGHLA",
  "key29": "2LpSW6LMt1v7hKXACptnVi2z2Xy3GQP4fdKV9kTdet5iZap1VonJVuWvV7adg2ncKmLhyi79pqQa8XyX57oHa81y",
  "key30": "WRJJMC5Zerkq4VDSxL4JLpnZqLs7ULXAJPm1taLZoapzTLZc5AZfULKa4amrtS8gSypauaA7z2nhYowwGYDhpJm",
  "key31": "2QmGhXbQPcPdyMEmmvrbCaT5k9vdWw7cT2BEsFU6XATDcwZUGqd4gF6CFLu5fXEw7maXJMTsB8jvZPAtuX7GwSGi",
  "key32": "wMWFRo5bwepRTaYKbtfsji9a37k2B1GSht1mnv5QbGa3g6ZYB3uLjfdX7LND1AycqtMULG9NrTGS9iUMAwz2po1",
  "key33": "5vFB9JuLqJ78Ft2MQ28hTcGt5Z3x2pcDkhSqu8HBfDj38wRzc1pwRAj7toBvbH36QLfqQpxDeTHZq5xLo1PQ3aZh",
  "key34": "3TdWbxSnYyshw7C3NNVQ9Pfx7BZdZ4h8hsyPVrFaBZYS6UnKFM1urSdNqncwBNxq6VGUc8pEDkPt7zJM6XyEH8jW",
  "key35": "RSNjTenVrsLFTCHcYLt6tqRzDRcRXoGfnYQrEwGvSv6ZtvwCRkJDxpJLqjLUcBMPfWcZjDcNUoRxXbcfoHF3frq",
  "key36": "4XvMPMpdB7hNKu97g8pF3czT1NM1jbobQzLR8WNQYEgBWFK4b1krZQu7g5EvbwrJiek3uoNZDwYbiErDGyyuUbPn",
  "key37": "4sQ2FhZQ8sKSYSHEA5x3TBup5u2Wkshrisp1ACeCuQDfLrdwopBBMe4vnfShrxKsd13KfJN7XHoX7cfQBum8icQ6",
  "key38": "2uPzBXjVxBvS1pJoAkVXdjKoQV6mgGTjnUvrCrj29v9eMHTTzuJED68yQV21wQBWqJ6ywYMQLAMicLpnKJp64Yim",
  "key39": "6afUkMtmpHDA9ucE9n1pjwRvDmiheoAU1qBib3oUNFCUwqDEPAWc3py2qbN6HRU84gx6oby15CrHQukC51KgJ9R",
  "key40": "5Erc7zfJZdsWzyWcrk8M2Y39EWo47vngoazJ7HRYJsjBVNA5gCFHgBC6vcrUYimwXZguZp4nmHZPmBEfxnkPj5P9",
  "key41": "6746F8T2nfxVXJ7nhnPmjhHvN2h2RsmvKXxA7Div9yN8X4CXMBAYNX86BnmPstjxPQ4LgmQXA3N5doW1mVzKzadX",
  "key42": "Ev7JknZDKba65KNYTR9b6MHf8HiW3qU1kj8dsiYUr1b8tipEu2sT6AWA8Wt1GyuUnLGt1eaEHq32SNzex7XzyAz",
  "key43": "xa4uZpm2zSJr6346HSGmXeWfiKJ1Gp8zxMK6LMBJqJ3WrsWH9WMTdNZFjvvc6xvwHaVBN7N7aUWw7MUaZY5tH35",
  "key44": "56D1S7KmYFgEmkAESUQZDjySDFw1GYQdtZPAozta3i2J1KQYB88TJzd1osDQocTb7F3wgFG3uzxoZQzYS8ccAuHu"
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
