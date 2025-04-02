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
    "5ALoFc2dLxu2UA5yan2hertoy9PMScAJFYN9rwrZ5j81Za8oanjVhqyChf1LYb86XkpuxhNkdDzoSgNqde5dRXq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eu8jLzy2REydP9md34cJM3jvbMCZjXPRdxowDDhETTMywnhiwStK4t1M8xneA2SRYT1PzqcWhtRQHvvLxi4w6u5",
  "key1": "5qVBWGiAQN7Cm2sa6QzNc1nEZS9d625RPowLmWHvnitECLc8g1DCQ3J2kYiiETUKeDug8z1atmtawBDUxbBuWhw8",
  "key2": "62MAup1v65Mj9bDSbNW82SBjnvtcRDgVbuoxU4HiJjgqAs5oTY8TxWkqYTBxnSnimqxrxNaXfS9iF5VYKBpL6Ai2",
  "key3": "43g6w8eXEPxzjaRMjFDVFCKxef7bzKQ8ZbEpmN2VrNDksLqc9WqQNJQB6tif8NBzRuw4dkd4ZMNaBrf3TPSGyTU",
  "key4": "64vZJmjhEbr6enwGZ1hRNupfqf61wbxDqSDvEa661TFvd2xFqx8x8nZFmcDvjMC5gN3VC4a8saUtiiNgaJrEaxGi",
  "key5": "oey7LMRRmjGFA44UXtngxxPqDxa7fXVsR2KfVHk12oVz2g5WveoUXMvJ7sXvhxGPUuFVmnsAfHMLKz91wxinYFz",
  "key6": "5AX6x3kCzU7yxVhH68pwU1R768AVhkuzLQPFJgMBgVV9dnAvUVquqV5r82eUDSKYXFxGo7GAKaaeBa8oi9i1ooGr",
  "key7": "2jukURaR6abiWJfTtUGTayY6JPq4pF9i8AUnxDcs3fFqEhSnRExuMCMHMiyyKuq63yMH7usaXHGs9UyVRMd5ou7m",
  "key8": "4HWnVraZTfGPuVUgJoBhthoQhMaEz84fr3keeTe5nwMx7UzsnoZHyTvA4F2FhuNUGVwoPUcjxQxze651ARnmpzeo",
  "key9": "JmpbqAT5ECvLiKJYzirbSAJzMCgMzGax1hyqy5HdsUPaegEtu5w7ka1Mt5mrT4kzNk3aM31iz7CT86Kbh21jjXt",
  "key10": "4SrdZ8tA4ufN2LiSwJj3Zpyvdsk1RfkxNW5V6YMkKoncphcWs2vrKdEwAt35uE8g9ZkGtN3h4Se7zgWeYENHqFcA",
  "key11": "29sNAA865t5L35Tk9mCTQKzGfsTEKo8gpLY3xt1cTHiG2KiyzeHQusg8LeiLz6tmeFMsmMvU1T2pqyH6vBuLoVQv",
  "key12": "3DAMgCtFdH9QgrZQBNvLgB3he5E8gm5ydwwh8hD5zE1X6JM9urmYsctnRd84L3ixucQZAhbDMUAL4gwnrQDVYfnr",
  "key13": "2buFh9zPbnWgCauYa9gFYE7t5Ma4YFq9WMnfZ3QNVyKhN8sqXkzZViSDoGvsViGZxoM44FHM9e2ScCeKFzY1NfRz",
  "key14": "uZxrmUrBzrAAwDNghrdpgfK6hePyEauxzVb2oSmNKvMoA38UiQBoRNT19HiLPYAxpSWtW8iU6wdqVrb7qwLvCTR",
  "key15": "5PVCCjbXZB5zrBSNLGKDRxXRBQih67W8g8VYg5WV96THronCRDYbRCmf4u4NkhLKkvgGYmQx6dL5y1aAyJqmAfZe",
  "key16": "2AAgWw64t7UgkznLycJFvDyugZTWF7S7av9kkUshPkiHw7P97ZZogMmnxR34kU6Jo4tcYyNiQgD9EUBGb7JzNjL3",
  "key17": "3Bi9ohAsgdEiHNTDHGcsAGcUogvjtuFHR5cMgKHZMBmScpq1Er1bkUeFqFVJ4AoWf6D7YdgxRXNwPWDAceQSL5zb",
  "key18": "RhjeR3CUt6pAfW9KtEXJ7xwKUeA2eADbY2a3H5PaUYf5eKc73hkCRokyJ9qmEkASihjUhxEZfmKwytGdByxXudC",
  "key19": "38rmHsTEQmDwDkcehqn3ioyMzLaopYvjjjTnwyu4Egd72t1mzbZe7opiw6Erkxk7vQAqFW3PD2bkJjzbfUF5TGD8",
  "key20": "5pXXa8ptK5dRdqVP71dctZyw4WGBf4gEV81UuGFDz5xyhJVpbzAb2Xkwd272swXtvaRwRx2yDrpXxuG4oL9x9vBk",
  "key21": "3ShtBwkxAD9DHWtxvnHoSKztyrPqfwXY6eqnb74wuLk4xM6MWNuT5rKL5UwnBhZoL5WDeaLeRgWCTrFs8jN85SAw",
  "key22": "5dypz9xA9dbFRnE1Tgm9YyuJApzmDg3uSakmGTC4RXLhmp6Y31xN8idkDLFm4Tn19A7Af4BGDRW6g5RFo5TxEVRM",
  "key23": "4mSvYx8E2HrjN8K81C6LuLa23NyLywEDuDBALndQqc3ZAjh1Fj6hBjnGYPvS5FSdc2aAod3sudibSyst3Bd4mYUA",
  "key24": "36Q7TCsQRVNBfnxdtafneBei3KKuGRfhBFvs4EE7GS3ubRDbjwdVyHYcqhdDu7Fzd5vez2LvQ8465AHeu9kKA4jm"
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
