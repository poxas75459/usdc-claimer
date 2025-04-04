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
    "4Wq7BfZDof9R9oB2j1mCmXCQo7EnXuGsokz2QHACKsWKtD93FB3gqhiMQpLx2M6FFdyCnxQ3rveY3AatnS2dUaW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjSagL1yQdEnQNkX4Fa7kfUhAVrXn6wmNH4qoKpiCqarabMEx8hAN81BRVWNAsXxFykfXV6D3bnEpDRM3XAp8Fk",
  "key1": "2by61k8yaTpph3RVvHWh6GFPqL2BNpyDmz8RpX4ovzAkyg2aHirWSm19vFW6SstUwGhMcdDZT9pUdKhXiwT5pEvy",
  "key2": "3BS5Xfd8fzZeRByCL9MCzazT3RqTJbNr7r3g4mrJvmRA6Dq3NeQjyK8RCBpkVBfxJKg2CzT292gKSpFBjhyL9Du9",
  "key3": "3WPJDTv1Hemh6thS8E1cbRNbTCjmTybGYz8AsnYsdUkPYn9ThfnaiJBGQtdRqN4R2g1UGcodC7DsDk1upVpRsePM",
  "key4": "3KbYcsNPZxQdR3RYP1z3mcBgpHdzKRB1qQpDxfyVWKpxD4uh9MNtg7MZ81ZkdC3Ldi8dPZvDwpPuwEewYMifqux6",
  "key5": "55uNXLd2LbBxpCtv2s6coAor2699z1XuDreAjjvo1X68k6bSviYa1disyLGLRZnLK2gyWXxhKWiZ2ou26aEfv8UB",
  "key6": "4m4u8TYzxwfKu3GjMdU5sHoEGZjUCSzV6Rzs3NGSmLhvHrzLcujiZS6ztsZ2SkPUboxjSw8tbgHrMu1VHoVhMntg",
  "key7": "2e59VVCn3ve2csbwzx6825nSVP8Q14L8k6s4yBeEpNrTiBpNw1t4XoZnsbdjMzsmNMMEsxRrSpJyxF21Sm1P4ho6",
  "key8": "3SnM73Un1PW6vPqKQVaqtbwcRytqM4GtZZ1SMsvGEkAnTiDHbZGDY3YarjtEvaJhBKG7M6AV3mBygT8T4yET2CBw",
  "key9": "3BG8hggyUThtBLHAnhuzWa4kAF53ERshah6dgKHjYARAd5NVvrirXLPYXf6NbHxiWgMC4KvwBaHs5sanCnUbMT5J",
  "key10": "3akTaMX8hAUuELydVhDEekPfjBUgX8D18qvZosRhwkLVDi2iXWinkDjQ9ASj3ydb6PcSqukcw55xwaRsAdYajvLb",
  "key11": "vMdaRufoafNrV7KjpDwjPmnX8y555xKeYXNnxxhkN4ERiqrHMWvT3zJroSaqQW4DWdANjRPqryXb5H9qtj5T9RV",
  "key12": "3aSXK1HmCcYM6QX6Aoy9EA2gUCWroWQaSGtHuanghFMPdDw4nd4uXCaNxae9EMAYWTVsZgkPcKoFs2FL7WGWFPNA",
  "key13": "5sLcxCG9BBt5uoWinrSLQePQ39k6udX4NEEhWT6GcVL6Vc5sP7dAE72Bxx1tP1cT8s9r4ubzdxmwwhLUAhnmJxQ4",
  "key14": "2L2duHraL2M5LaobcnrCnsXzKCz8FN9nfD8CTQS1ULWh7TPJWCTgGgLczHGbNcNUGkmfpAAfy1UwvLEZm9XpvpZL",
  "key15": "5wG6raUd5wVwtvg6dGwS1NhRDiaSaZ2CkboHHMM5yzomDhgpGtGDPwWgA6FWYEQUhCPdVtKA1osE65XCduGbJdeE",
  "key16": "2XpxKFyRELVUSUT8vRDrG3So5swXdz8fdS31FPj42PaiVkKG37C89aaz4FPid8qpkD84d8nXsJauY7XJTgy6vBaN",
  "key17": "4t4ymeFfT9cHKLABUE4UHFfmsNYzahLiDmMyffqyDtsp4AtKZkeZvgjXwTX3b6zp21Kdv17jQJzu9qgndqNidJyM",
  "key18": "3HRWG37SCydGMY7X6bbn6JYw8KLymSxjDs57mXYBnQb8b4G252fA8Th4dfmQUcG4ntB8LxC2bUCWNMy6yfMj7BQZ",
  "key19": "BFT7UaqTSgEMauaRiep5EJ347zE4oy2RXLZcRYULMss2Pryz8DsUDszEEa5STcumX9WAt35K2WqM7gymQRdTUsQ",
  "key20": "2nAtEtrpkhjdo6eAbbmWbWQgBsqUxfyRLYNpeb7yDPrhAaDNYdaNFhZQJ1ze29CH39BEGh6x83ARUj6i5US6i6rV",
  "key21": "5NYcLS58uyVzKBhDq8d6b7XgF2d7r1PyEvZWPX5fNePBLkhYPt44ZBH5cbHqQNXbAviu2nW2eb43eZkLnQyqhbVc",
  "key22": "4PXBrgRbUFSV1Ubm4XWymivCTMgZxJvAa8oMZNEtnKzmfZrPXhesvkeaXnqLGvZYs2rcRXGtS1zjWrWt4amdP2aw",
  "key23": "aBjZKaCBa1SwqBrYBDfj18K5AxSM6VRDv65tDgCNpx6MYsxD21z5MeBzjpbhnev8nEj5MYqRt8h3XRBeWURSv6X",
  "key24": "4ikNGK9Xi3Yt2z4pikx1TQjbjX8614kxZtqoSEnAuqiiF9SoQUS9iWmQ78hBjMgS8MhVSH5F9D1NsdbzUASAJHaN",
  "key25": "8KvXyQZkanf2qx31VvZkxQLXyTFuzsRKYc7nBkn2wRVo4R9J5oab31VJXWXXDsxVnVCZohTpsJy2wv1sFbovpWx",
  "key26": "5UmDZ9RUo7oY5KeXVS7SanDY3y4Eo9RhsLNdSyAYGHW61qRWjMicEsKmobiaVNp6gyGrGPnoByXSaJdzTuQufgkv",
  "key27": "21KSnao9MU1F2pJyhzviHmXZbt4NrtztWrSxCDCg7KTLnrPEhzxKhC4BbqifW85siuaEQhxqvvUPNacSmzKvVQR4",
  "key28": "37ocd7j686VYVWTHhiJuB4B2grGAxDpx8tpsZ7fXkHZFtZ2G5oy6XMX7dY4hwKocRh75AiWitujnKdoAGDpy74ie",
  "key29": "Zn4hGnm9aGYMcfePrSfxVouiV66kDzw1tTsv13UCvNHTUvid1LAswzVVdNGTxiHSwduReXmUiFZRbQ3GSJ3zjxs",
  "key30": "4nbwEaLG6DSPiBfbxtrZYfscfg4op1piwiXKY3CK5SbxLQM1icJpCBxCj27sw5Rxqp7MnZuuzeFQJLFwzkaQtVrA",
  "key31": "3v2NCYXLSCSrGTaKCeZF8QSEp5pocdRZfnDpp6gjqV1XCVacT2d7aUQDxfsKN1WMu9kg4pRen38mXYgDe9kRUmzR",
  "key32": "S4uey7GpjP3t2UEjZx2sYuMEpruKYF4VzprVmQWa2yHuMp5AvSy9kEkrfScmzFdhJ2D1qhfj9gdGfSX8ixt6max",
  "key33": "Br9CCA3f9Dw48fdi9GcW84VVU7gJKrTffsKzLbpn2ptGu7oTyg4msmw72yons26r6J22Scqvcch7WhvGLgAQE6y",
  "key34": "2dY3Nx4tBPr4m1SZcQuxXy6dpFmt1TeWLVX3S8gAUcvDz4Ld7poBHLaYwCXobRhAJoNCfiKsns9bXGoMuQL7T37e",
  "key35": "4SXEtFCzGk2DEwvbkg9Q3vw6jn9pWH6Z72N7ZaLXDhyAPF5TVJPSBvtjPqGz1TeB9UDnD57Vb1rSX3gnnTs4YAL6",
  "key36": "5WyB6UJmFJ1SNb9bNGANXCdWEQciU3CcL72c6suLExJ65M7oEEciURxqstfVAynvwuSzx4EUuoscpmxrP8fsrS6c",
  "key37": "3bcvxBq4wxCrovCfQF1q8p7vu419LViGzjDCFjScovC7DWyNthKSUq1iERWuqtcHx15RDPpjAsDkYBLvsc5d5hWh",
  "key38": "627s1ZMG8e2yEF2m5HRBdVhzw3UXE9nbYCqgAxoj13CED4CLAdU6hwYkR2zFsWR4giwZ1tWW6FtnBCwujTEsYPLM",
  "key39": "5HQLDTsKax7WdZTpKRdkUhCr3GZXttmoxwUPmWhXA6C5dFkYHnDGYMK21weazRe8UteJjH519po288WZbJq74Toz"
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
