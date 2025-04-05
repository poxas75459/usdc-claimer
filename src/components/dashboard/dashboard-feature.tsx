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
    "3TGSgBifayzYFCP2rHBRR9jY3zyuhJewHEHcHYYxRkWXfw4P7DVWrMUF6w3HxHK3TKXhrBMbNaia1VGnWk4gfBQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVVKsTjYeGto6dKwnqvRWwyNzW7cDJmFHGFZFK8TMdA6vkV5YoDzHXyJsHmn4CYDmTV6X1wFYbfypmZKyg5Rq9f",
  "key1": "2uc4Nfk6pyzQuAUMpPihsshnAmZb8dgLbS4cosgegHK24BpTrHpmgw6VwaQ2mj21oxzAD5adRAJ4QEqRuzUFB2sz",
  "key2": "Hhg952nqhnw9sN6tuj79sNRasKHDZwW8rwsCx3KauXx1zbnWmXMZnuCZLnDfE8hApq21fEwTcwvEVVpLbZEAd6q",
  "key3": "57HvynKimkx3HRCUAcVYJd6knYVTcbTkb1HZhe9WBka9KUwVfa4dfpHg7naGjgpwjKmaXkUEPVTb7CqU5oBQgjBW",
  "key4": "61D8pQngQdPrd2PYQy5kHpeY8nYcCmBwxg3BDxzC17eDmpkMaMw5qGA4h6cYuKMkafYhY2z6FGmNm3J5K3f2AqR3",
  "key5": "uFLPpZ4YgEmQoyUmWy3kEwagV1VHFLEuoFcGDMVXrut77e5h7mcWJUMfQzK9eFyLy2ZcK794JVGHAeTUXLHCYBL",
  "key6": "2Qy5FbAP93uAGJzkR2GYijTUJk3Jwv635u7jhfTxkE2Gi5BTTFpqKoTUDJNpQn5q1TMXa12F9z4qtqLQLkddHUKD",
  "key7": "2QNveJxaLC4C7AFq8NASdoBSPxTWNXPVv7Rf7XueG3DcgV16E21jCf42nGYhuPdwr14JGiM98C3KyYJJ577F4SvD",
  "key8": "PtwxeBPEZNZzwYkLcmniz4UxBikxFZpUqnsW2Zq79jPuqNSn5K4snEGDAfgQuDLzmFTNXp6pLJZJhns1XUXfc1k",
  "key9": "3g8nsyPcou4w62rxrviWLPLW1oQRsVL28xrufKCfCECqx94Tp56m4PHtLj1MJUbxZX4XAePJ9P7s4KSJuZUxB2DW",
  "key10": "gZAumz3uxQrnLrXK95Uxz6r3rWc3snKHgLTHjLywyHerRScjSWsEgTERBAPfdmFJnoDiS7RbPE62tKX4fNQ8UwW",
  "key11": "2acrmmJLH2fD8pRbX3L2PgeC7pHAqKSa2TCTukN9EnE3QHPPenE3xJiYkuAbEQqxSgXdRHeMKQY16wkTEtqMaEXc",
  "key12": "5iYVsqfGgY9miyHdLSWqqgJRRmWFuaBJa8YFd5vBmDez17WCGn87A3NAs4thvp5H9kntci74AekUtVtG6MSBf4VD",
  "key13": "5i6cjsoXcys3yqHJZhEGV6owTc4ZKeTRUWUcWQ3skzCH7yGcvERee5eSZJUPWK1pTTNF7ZfrBpSkEB49XQ4EuLMH",
  "key14": "3TEMqk25MDCVpkzDCegkSbtDxDrjwCtvAaajDEJsJh7RQJWL7biiStczH7kJrqcL4aTu4PMSwXukfQgvSwtWbbHu",
  "key15": "334iNGPVaMSRH6JJNwzeML6s1RmoMc9i6ChV1S4ryDEw54CEeqHCk1qDMByQGud9AkxRvDQ1X8sJacd5ww5UkDmV",
  "key16": "RZMo4Jng2y31ejBnD8PcFaJWnM9FS1biQY8GM8QCBGz5UnCdp3665unDX18aLJPvDTtvjEb6QdgQr1j3zFgrAsU",
  "key17": "4X7Pa1SkyFTZYidCJLZeS1MHDXB1YJz8G8hyU9PY2Vat6LX6WWdXsNm4WNraNS1zqM68YdYPGZ6ojoKu7xW5QRJY",
  "key18": "3YtjZeiN4R3yBSisemYJzoGCQr1gYbkfFeqStmj2o7NBmNZVKM9J1jkFnsG3UoTP8LKb6yZtCQkkzzHtJRLp7XMH",
  "key19": "4BSoD3oLARdTk1g115XMMYmSzadcv6Z2iyn1QSux4rzpzskCwUb1UqEaqssB156azSPQ3WLVGWGmnW74ffCstyR1",
  "key20": "NHfU1SDZXkkAWRh5DatMwkfJhBnK5VNZAgMP9jCEqBGUo3SrhFkri9TUxmMWZVZKqZBXYAZTinhZQmfE7RqCZY5",
  "key21": "2ERvviNmfrrVqx8FmG4om3mu2epgignvtYvJfHd3Lny2XL3WYwz7vtg42NpDLLQh26zpaGSRf4JMDZW5LdnpbTTF",
  "key22": "mjw3t88WHqjgtBwRBwp5E52hy4PsWtts59B1TqSZLvoTsRwPjyPieAtBh4Qux91ntxX37JUfh2TTpLECLiM9SQS",
  "key23": "3vx12srv6Rmzmgka33E4E7CRtedGoPTJGtM346xzA6bKWewzRjSqHWh59c81WgLYxUkfVjZYMbhd8iYR8MThLGRJ",
  "key24": "2wvt2Hs39dmoT3YTYeG1fC63GajJ7CLjMbj9WZXA8JZSn2YR1qwtj4eT55aK1TwxxKykNZxUBPSUe4BqNsfXnvDD",
  "key25": "8oGByggE3PueAdwW4Ex5h5wWU713rVsVxRKmanmeU5F6g6keqkgdkUsTUN8brEXQ9hdAMCtRxUjPd6H3pzNF5xv",
  "key26": "5TbeCMPnBhY8qgvdNyrY1NYBksJ2KTuphi2R35XqBvgDBC8sfWHreYMHKb5rqMr5JVPUit9zvnpegaNKcdVctj6V",
  "key27": "fFnDGp9YhmD3tzH9s6bdb9B3Ko2dgkbBbyzPf62sXxvbKoU6464pbxVmxb6XEazRuMV5HcvAeVwd7R2Pdtrfgqn",
  "key28": "4NpE345jvwGi3UXET8smZoiPAE1M9k1fBngNrw2vYu8VZnnyyuc3rc6bS8gN4LbAJgvDDWki3JXBvWmxRvHdP1WP",
  "key29": "4cXgeWWfvGFCJ1S1BpdnsxG9Uo1eNXc6a2z7FqTzxh5ThLu5phyvRAhoCCi7mz5t9VNt1FpWUwhs6eFoYuvuuh2n",
  "key30": "5w5wKVzWckgHoh4cqTZNrbzANqVceUTP3okDSQHx7Pd2ZUpGt7KBc31MtLUGj6GWhFMUFTEzxdid6NTMEYMCftgL",
  "key31": "2GSy3wwTdk7oNpAg5UXHVoU76xJrY1qKJ3nDwtaEajAxk9siGYP3KtAtHpaL4B36uMJDfuuwnn5zBeqrH4puLGvR",
  "key32": "5dn6Z9wKXSkaJekJVxYqjGSTUDJY9eEP9VzLnaaEUmyZK2uuhR8tPBuxT5AEXgisX2bU7Hk65P7kRbLXbHnVY363",
  "key33": "2aeUntjZY7uqKghfPyxAq2ypAnHk9gsygcVfYRozDDcte95n6jYk2wLi2uu9VEK2eAV1evow5KVJWpTE68N31tui"
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
