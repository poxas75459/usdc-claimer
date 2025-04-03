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
    "2xjB1Jo8NfK6hbSfGJc3Hj4Yr78noCqtKQ75AemRHxq2u2CiDtqyNLGcCgFbtmSuaTNyUYEiqzf9GHDREgCYdbiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxC2PNwgkhFheFMUi1oP9Sa1oA2p3PDTH9FzR8B567f8TfQF3VoYRRifgZNqzXcddm87D2BKCEEktxr3Ddwwfpq",
  "key1": "3Wtrw21b6dLTXFhKMuC2NpndexiDvR9VMRcBaWVNsYY4MWgMZhxQgMaxBryEB7AbN4PUhfeYBLjAND5KbVvkPWho",
  "key2": "2ed1oa5sR7gj9fMsEVTSDZKJ8Ywu8g1mrKP2LNuGGkE6s2TyaZYRncH4aVFugDqofjYd1G8dLcxjadBDwf5zg5F",
  "key3": "37i6MVLQPVkirtmjSPfgP4xWb9d5rii2iS9PT2x7YvshSapyxKh5vXNsV2V95XLv42T4nEKB36hEsWVU7ogP8fTe",
  "key4": "2RZHFx1zRDYRSjnZWryYTs1yP4dXLKvjKL7RSc4twKR5vp8JmVZs1AVLjtxDd1BGoEwtBqKTqwDWK58LcdQxTtkn",
  "key5": "5fYtbur9XPcorAKYEpZws1pFEB8BWTkaPnyxL1kfSrnc4EQZkrHTbLB9fM5S1MmmFKDYMdDpUjFNj59HzTxpRwxs",
  "key6": "2g5UqeuCARAojtuUnthUPdP59Ys98ResUAPWyYyNBNk4xgc3iBWYi63zPx4bUjEBPJN6P7v4epHuh2DaD5f2eGdt",
  "key7": "5dt7nxwFBHfzufCaPkvWXaaY4QkjNENq5Jq8nsP1xZr1SVzmx6S2Eio3EiFbB9ypERxbybZxKBfb1XpvFrmZtNV3",
  "key8": "2xJCFkjfPshKTkaWAmXPB3RfbrHUwSUozdE79k53zYG7yH8wqXeay7tpNWw75JnzJBvBuu6iguASoKEvZnLkXpRZ",
  "key9": "3SLdJd5ZZCqnuy5mx5ixWg3jik3Ue85JK3DHrLZSBEhi7fSFuzqXEXsTPTcsJCjjWsBizAtKK1CocENK481kWK2Z",
  "key10": "3hjyTacFkeq7NMvsbUgxZCkMhAckdnD1VD5k8HYWzNoksWHhzUiDZgftYVN4hWNMu19Xx8FtVTSBdvPqHQjwvhnq",
  "key11": "3LXXQtY5J6zQxHLiMxy8RekMVspkuaMA6HWP4ig2fZ12dzbJa1pCNiKRjz8RGbgypWBD1eJ52Bn13m8Ji48ZyPjR",
  "key12": "2WN5BEbc9ne2AQt9icxkNh7mvk8Uy3yGPmnEqREttPvi2WKzoGgG8aoEfTQEve6B2CdDf9iWvkp8qe5uYSbQStZy",
  "key13": "3Vr4qq3qcwSHhkmREE755K1sQweEVmGiygg1N4GAJozMuCLK7pGBMa666SU9AZwbT14iUtnLStey9ieYdEbTunvT",
  "key14": "2hdTGcc7VbZbareUC7CbK8wwfWXfyWdHQvnD3uVEjCde6Pwe2VapcDzqvB1K1DfxeC2z3kmVDxLoG485z6BKCbD1",
  "key15": "3GAT5SDSwLB1VrrvxWMx4GqT9gvXCHN96zv1iREv6Zt2ZdjjLJakC2a7245Z4tGgvRni6dxM24GC5y3BWizJEFjn",
  "key16": "2jMfdgvdKoEmury7Pr3JVmi9Fv22CVKUHWg17nFwepXuD88V66g4yaNZQpX1kwTEnNZZZgSPNxDbSsGDcbguuMg8",
  "key17": "2wFrDQiPZijwJj5EeLUxEzKW1SDgb1CHHH6PwjZ5CLV4tmAv9qe5mtaVg8mY22BFmHigPG2bubGBw2E66QyuBhrC",
  "key18": "4BWmtxwtJJt3vmZZ6MtrBB6pzQTzNkeD619WznXjFD8v3qJY6skywgn8WTzSUE4JaoJDWohtCaUtMzMf1xxPKyt7",
  "key19": "2d1c1qJS7NoNfec19S683D8UumzXzgHGoUPEmw4ng6xJxdf7tRavZf4HVqdr99Pycpd6EdN7SLnHec3sHaVnRbzV",
  "key20": "61o1NniykKHsiHzpH6QRn56g8SAjFECmQESdUH1epVy3wXcdnYyQHegNM965MDRP6GHE5afjC4KZN3J2zhGN5xN4",
  "key21": "2hjRK7pHW35GovFfU7zusPcSKhC766jiEFWA3JMBKiKdgs8j1hcxvJmu33AVgRqvw4cL5b1rH8igWvRx711w7qjm",
  "key22": "xrhM3XZGevubRuzca59At1MQf91PzTdryMW9gWmQdepEH6LhvNCyG13SZ6184tZgw4iy4F1oqV1a5zmKVMySJLe",
  "key23": "45uRXTpk237fS2uiUy3HfT8zFAw4681ezBq8iw2GwuqU2aUv2xW7eWMmvkWq6kFrDB9Wk23vCLQMEYdjoHMvzWsc",
  "key24": "3ora5jMZX1EtZX5x4mbHJxFTHMRnZnKzthYLzQEYM6BLZkpcdW7bnS82cFLF9G4fw6419bm3Dn47Zpq4aMmGDiPU"
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
