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
    "UxKvoMtvkvGQycwMippdfWNrEALYuxXyVzNb3MbU8ZwGoATfoN4iavx97oomrQPRQXJfVeM1bWotgbPNVL9WJjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8n2macWBUwhzLJLEDgTY2DgoDY2LZWYbu1ZpWEfo52kATjvxoPEugcu55JGnhFMMeh9hvfTUMMAxgUmC3wQj1A",
  "key1": "5hUZgTgx9GCjzpfTmbVkR8MZqzwPuXs6qkuM6mcjjBp57tYm5bitYVCLSpxsdZhaL465Sn2uNvwrNLL2MUeqNmPz",
  "key2": "5jFY8YLAxbsWYDrxcDPvqpkV2zBk48vQ6Am5E3WsU2SxLmXjZ8EeXuDsXFuLNXsR3ZotrqLfCDz3Hf6QWV7mmzym",
  "key3": "4D7A2e6sXswbqmypGSyAdtdTQE7GQFMHoBoiBTUH7AojT3iR2dm6oEUounHaTxAV9m6NMRkrfzF7xHLEGsMbGNC4",
  "key4": "5sDPfvfCqdBa5mEMe4z9uxqRKmhN4zoGbVnZyHhrwDDpmg2p81cLzHATcc98Wky7TgkgK8pvuh5VckshcJeJZsdv",
  "key5": "3MRfUqQig6Xf8NvcBWxvfBCUpjJbrnkAg5YrX94Z5YHYBkk7R45nyUS76aPpSFbQ19rUtFQbjMG72BiBHDPpz1Lx",
  "key6": "2iGz9LoUh1WFnLEedBWAoTRjKX9VqKToU2eZaLFcSETdUnPNx3mbeS5dXPqgnNsEFuuzteZzE9krWvgsGFeeriSG",
  "key7": "515pwk4q5nxUuPdQpY6BoGCZ1v8MjiJrSVBjBgC2qygpbCRaDzt4aM85UcJWXiZEdeZb8pquUBhp59jE2TGrmJMp",
  "key8": "58WemA12TpJ4hwYii4cnpXyLBMartqdH3WMND46mCmdbp8Fr5FdvVrpNpHpyoQAaprgEpmARK1cfhnDCbCJKizjM",
  "key9": "28MRtQPzLFry6qRvEnGExae7cxuMgTMCe4yZ9wtYXYihWVZtfWymfEr5cRiM8zofCafpQtWN2hQrKXdAxHkSP8hs",
  "key10": "3JZwFD7MmvbwS8QWWEAaG15bK1aWdtwyAfjfqsgkzdSuUS1WckGmUHT3mKK629ajzcdKCJDoaKULDHwE8sTAPjFf",
  "key11": "5DKNgig4aKSsso2h3YngPLrBiRzF5xQq9s5sSFwYtA866CoPCBTodJXvrqRQZjJSiwg7rpKuJWEvVH9cV5937qG7",
  "key12": "n9fmqKU7eeJXmgAZdSARJCKneTsAgjrJpPFCjyTJrigAQKD543k8WUNyW8b2vGBHFkEG7D7SpNag9donbWX7M2L",
  "key13": "4tfPmhSiPfCkwX4zM8PEG9UTejGAS7y5Ug3R8iKedZBjPPS12TTdXbAD9otMzsLq9gHzGNSoxw6nUL4syHq6skVK",
  "key14": "4mz11zY6LW9SGCgf237PF61X4PvZkSVH7FxrnLkkwqsxiZFsTiYAdvZqBf4GNjW3wB6JFtQBKkzkmKvr9G8bpGRg",
  "key15": "5ZJU3uMBPpvdaKVyFvvauF3uLqfcE7FvXGNRBvhf6gcTFK1TwDDN1SH9ndoANfUYNKXZk2u2dBtBFZvJirF9dwei",
  "key16": "5Bkw7HWfeeicay7vhy4qVguoWRvaKmfSgAy1Ha2EpJfLA3Bvk7fk466FhUSkarcJd1WCjb5Qy2y3ayJN3cFkXd8B",
  "key17": "2AbkgVWUgADE5U2sVqqEWbTFyP6AC8P1ffSqtTSSNCEtzuBdj5hAuZM2e6BVK7yENyWFtjfSdkBUFmVtRGvYEPQ3",
  "key18": "3CAVcBGCT3CJP69yPZr11sVYdEnxCjD7UNdrBCS9APtMtJ7yxYQBx5u4UzwATVmDMgfEECNtcofLzwvRUA4ooEkz",
  "key19": "KhERYMCiMuSsYKBqXWhdxGTYTvWFogMuVcaLjx4Q2Vq4q2ALz2XdKYFsZYq6u3K9DzFe6R7DeUutgKXuunsWY3W",
  "key20": "3H8UyxSyAo7Yn6gTbRQ6NhTF4UPjRE3pAk25ybgY3pB97nemUjDT1jGfAq5fV4g9G6p16WSHkatA7PcLrkBKu6vX",
  "key21": "53ZQHGJQCnj1zzdufhQEDESdYJmus7XYpuppMu7Kb6f1moWj51BcMYpBZku6YETYuMTNLaMPdwqu3i9VQ3ukA1PC",
  "key22": "2CGZjNyugHvP76Zu8YDBgDs4avX9LAdXVgMNxZSmzRYifyXamW98Stxr5neHpJJRQ3W2QjGJ7zuBWhMT43Ywhkkf",
  "key23": "4u7kmygfXWC89Kxi989RDhkkQA9vFtFeZXrGDuKPegH9pzrPYZCPx91B6EKbNkJYGjgXvnNLwNzCa7mrrfZXoytb",
  "key24": "4nA55DTLjfFeuYPzFDkJiFiGJ2uF9EfUtxCU3SKkDVGgnowUWH462qWbpLwrxcMRMpX9v9PFfiBunUvGm8sR955q",
  "key25": "425XXqkoVpBCECzy95HkLKK94cgirjfhZbZcyizEMxgM4iVhnsLY5QmXkVFGbrUwQWJeExNqTBvSxnjXn5ELKgmQ"
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
