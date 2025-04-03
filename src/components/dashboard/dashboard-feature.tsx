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
    "5nYdqEMHxZHQGVebawkWagRAAQECs9fJKfT5XWtmcEhD53S9J78nsvqSs5qJD4xHB5XUjjbJ8YjbynjZqoHKsKtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63V5Au4VWjszzbjykc2ifMySiEXwYB4yptBAQqVwmb5LYJD8Fd717N6RMj3kcnRdzY4vkrBUVZKqPCJJNajuPAUe",
  "key1": "5JYMzyv1MreRdg7TLSkzvKWokjagF9atHb5HKWD6Q3RanmtnYMYVr1geYwZbbYNwVTw7cgymvtTe5FwcmGdGmZGC",
  "key2": "5mcA7Zb1HYnikMKvdX1fpKoKtF3nz4tscmBmLMkM7eGH2udDMixLucrMVpeNQvdFNtgyYqtua7QnidCHNiK3meBy",
  "key3": "3eN1n5cdDqRJ9qBTjVLvnNVwpPU4hseashGG3cGEEYCBkE1x1LY7Ki5sv7QsWZo3ZGdP8MJbJMEqA1szuZspSGwH",
  "key4": "3N4dhawDWB5Trzr7scZDq7gi2TnWeDpSCWzTrA6oMEQZ4mThP7ugEYLHkDeBRHRRhTBgWWcmHdTyfdbXFZNCw1JF",
  "key5": "2CZ7nSyeg85vh5RsorP31TXsW2GfNUhWqy41GrFq9LpssnEDnkD1P4hxUwWEFyDCVPqdt2wrfbosk9YTsoLK4f9p",
  "key6": "q1ZXmtdTfebtg7NRRzzACLyPhbTHiRDaFPnMM9zEXPSZdP5mZ6RGcHGCLWinDK7DVgcLcH9G2B93Uykvqqx6cMP",
  "key7": "37T3P5uvgsxGvq2dTofAgPC88VUv1E1X8aNFkp5922BXFosVR3fxexsWagZxjE5vyggJKzemxigbF3NgonwwCE5v",
  "key8": "4wHLp8HEE87enpfAs7xzcczmVuj4hUqas5aN5u96kz7xMFCgTjVA18GpJpPS8ooTpCoB2wCJmsN7ifYjaVYXht3t",
  "key9": "DjCyKZqDHxBYDuH3LD4REL5VmEuMVhrWHqbPk5uA6m5E8rG18GUwt4idTQ1xikXXUA2tMQ47ZGmgrHDpAmzrjZW",
  "key10": "5ySWnZroHVt4a7AocqkEvFBPUnHBYRiTjAPBm6z12NpvaaQiXUK1XsJr9BbZQjiHqYRbXxhCpY69R2hMXryUhxfs",
  "key11": "2XksThRPnfUN3V1JErGCLVKPKtwvJNoV7JvfUpA82urmKr5j1PUaGYoKrFKFJ6kDYA15B7S6BzPozLkTM1hNmQvx",
  "key12": "38ibAhfnC4cm5iVxiRbyQAPcnccVntZp6kZwym6C7BvDSDgKjThULSWpdefVFFimw7hMXffLiq2vLbc75veyf2xc",
  "key13": "52osE8xya3PpLrJBPthgwxVTWHP9nJXmX8i9A5Y6w1zJ9ZwGxt3Hfc6h8S1LK1hS5KATFNT664vVmEZgYSQFxQKn",
  "key14": "44YQcmKwtnp5uhKdM4ggPc5a1BHpKhnNzttHXhZJ8VvmZJkX7Q8u3qYLQWAfTrHV2EwwDavVfBmuXVurr2cu2SJ4",
  "key15": "4SHrKsVqpH628v5eou5cuGFXoV1Y4qNHbdSsGvqz1dtrhhPrjbzDW95hysKDiScT4Uck2tC5bvymqe4axDQga1K1",
  "key16": "3PiWxPFjYiU1APTbmRqodD11295PVGccus9xUa3iVTfDbd9AXHYZk7PaosFd3fcrkWNdfbka8iMFZyi6YzrWZz31",
  "key17": "5GFPGcJeiaYGs3at6qEp4VzM5mLJ5NL8Q96VMwc5i6vogvTJKGFNKDdvymV8yydtxDN3raDsypo5DDDtTWfbavp3",
  "key18": "43gdLemsCjdkdP6GKmeCEvwBxxgzfJLiq11s8MzhihtDvFjp6LB7H3ni1b2D5B4YYabDHAjMVYTo163Sz1uTd7nF",
  "key19": "5XRmXBRpUx9chYUwDG4XvkXpafijUYYhhvSoy1QYZtx199Ab1C2iyPTmukDrVEBphHbXGNbsaXvRexWakWoUKdvF",
  "key20": "5ns57XSVnmEy4BsNYGp9nUfpYmCfiJyX2GbJTs5RRyZs2Mg81nJmvxd7KwBhUhTwgdjTBA19Wq3ZQZPkXr6NjX3e",
  "key21": "485n3tpZjfs8onev7GcoTnxgVZzN5kM9oR6DfELu7WZKEvSRzPJGXwwTg7iS6QXZK5gMvecLN1udHFhiApX23GdA",
  "key22": "4iH69piHoHb79R7LPck4eDKDTbMekntpXG4t3YHGBAnLgSXJKNbd7LhJJ9subxH24rRKUSmdfVX1w2MafmTHK3xX",
  "key23": "3HYocF7aVYo26oMv1r9rLkQ8L6NyVqCZ9no3ihGwP1F7sdbUzxXApymcfRhyqFws9PFmc3z3n8BnBGN6xviCfVKn",
  "key24": "2m6fyLTH7MJdn3F51drZP5eUCgouYcajXrjRNtVvV8NpVfujHY9R74xKb2CU2sRjDWTwuKTSqbLjaGz9TTvWWxCE",
  "key25": "2Pngs43BRgoA3ytrTZDCktG1tvZZRXuQrPNnSjBpkJZZ5X4BXD6VWyaWsUSg2nuPSKekruNN3qPLiMG4xyD2z6QX",
  "key26": "3tXPDd6VqNs4VHkip5RuFJF3qCpVURHkSauLra4s8UWSHQRrFduF3TLkTYCqCne35cTw3mzYhkSp32Q69m9cAFu6",
  "key27": "3ahSm4V6pujmq4CDmJY8pu7v4oqSJM1oQaovrs172Vx9CVkDGnXyfS82RwtveTBtSsnXpT1vvp5Y2tmzAoxsvEUK",
  "key28": "5HQm3jTvmA2PywkZZpZDG47V9SBCiGnMWFetC9KqH4so2bkUKXNt97NmRSruuZ2K7bCrkZE2AtywRsK4Pv4RVMTy",
  "key29": "2wJYU5s4JvxBWyHj5DGRqZuqZsuABmuSdAk2vv6jVKg2Zc9ePmtYt8TRtSjEAMWzFcnPqLRM9pYvhj7BjPorHAPL",
  "key30": "48xbcfShfeYJy4dwW9MvBqEocm4JqDtUPquwdcZk8kSyutfuPBmJ6KDQuZD5VBRkC5Zrf8YNxpAXrHJYy9JxiMhB",
  "key31": "5qDVvRF1n49emtmLPC7ED2a5V4YNnihb6wty9EKaGmnHGBd5GWbzUZ2KuLpskbxZY3NHYUcADmP2rHvMHe9qT1ys",
  "key32": "kvs7JDh6xfYNQAX19UL1Pt8CJbbYy94vMLgX38eMbLuWPWNVg7kVejTh1iej2yrGXGq3PHxQ3tn6RdAphgvYZiA",
  "key33": "33sXWrGoKpGb13ZKTreLYu7DsohSVuAvedGcnX2MuJAV8MbYKPHp8rSqU3N69a21jzcp96wdkDvmV8mSgiLUbAoV",
  "key34": "2zxL4Gz1KkVf15YDSj3rhWd3fzqQtYgKaHUMsEpA6Myoc2DkV7DK5MoJXP1kx2f72VNvLsEgHju7p7NT5oxPu3bJ"
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
