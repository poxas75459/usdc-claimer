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
    "2um9CmBBvWYrFE3BfQC1XpVGe82Dezpfr67gtHC9v3hzWVjjQQ7XuHCZgkecTkaLSrMEpN7Z7qeGExN6CrBfPZR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEHE3Qzzj4cXRRj6Gf2SePuUUK3BR44FxkmLaboVe6WPdK2gCgJEu4MEwUiSJpKQ8AbP5zvVUyFT5b4Nu9cGhgF",
  "key1": "3YeQDrXgzZRL9QqmAh9ME1k36Gj8tyuEho61ffLQz3icxdsKYS5X7gbjFT2pVhxJfFfTMVS9gzkmAKX6XXr2TEKh",
  "key2": "5z2gkq8KHgeJXBHriZ8WuphFsRvCKGtvhPxZ3g5Kr5ZDxeF6iYJ87FCGGXZbtdu6rciWkFrs7YrThoiK1K4CiSei",
  "key3": "YatcjGkYwyCdeLG9CUEL98eWhoK5DsPbxM6fHhzJcLjg2vj8ngSNhM2DFRvZYWYctaAhYG7bhR7Rhhe5fUKbLy4",
  "key4": "28yvgp21gDm4fEYzmDt1xgiUuN6Wxd9Y5bjs6NcxUk7UH38XuciWn4zU55ASZb6LZuHEnBk9KqXDDj7AGDd4M1cS",
  "key5": "3acpBkXEe3e3Mh9KJZuSoB5Mzi73xkDcuHaJDQ2F7wH3yAJeGnP2MGBQd2q2Gge3ceKFn9s9bEk6z38i8egP1UHv",
  "key6": "3s6JGg7iWfSAMb6vaVB6hK5hwnCmZKqd4ErDfG6d6NTCrmUP7SfZ5utdp5qLnnP7iVCZQd36P6nQgxUG3YTh9EGj",
  "key7": "4K7mbf5hk8m3hWJVencny2LpRtCBLUtxvUYu2DngoRgCTrqZYHx6eZCoQDkAmevuTW7SLmDSdrkBmyQYDcrjdSzt",
  "key8": "35SGYX4L8ZJPrNuc5LdbQYwjNvStTFLxt9nbuK68YfzAAs7QdYzXzeGUDvUfhRAFkyDJc4XzFhrd184FFw22Gmfu",
  "key9": "2Huayv2jc8KZ72VpMyMHc3fxuGFuz6q2pHKvzxDMPChk5RQ1ryvG1bs3Fz5psDUbbfNxAhUsmMCgeRQkZwP53WBh",
  "key10": "27AMtFd1rntmzUhMmPRrfqrrVenR1VkXF6REjCZ7b8f9f7RkozfuECMmCyN2vN7vYCdv5fVNS4wYDtA79RCvjXuN",
  "key11": "5nQoVM7DTqG4P9iYnnkKy1CgrpyrL2VadjMoXmwECjWtZyTE8VNmQ9bRibX4f2b5V6mfn1kjwfWvQ2vntHVPREu4",
  "key12": "gdC8Z86AiPt6dGT91422VeWkXQ29a1RhTpmrebVhmJ8YagEmD313e86fAoyuvx8d1WdMb2xprokHWty4euCoAWH",
  "key13": "2cRpUBzqurbx5xWCM9mtvhZR9NA15NhA7FURFKSXeW2fnp8F26ef633zzhBXWTbzSjp3d8AExPxUCBau519vRo4N",
  "key14": "4NY2Ny73iZdJmyXCD74iYdm54yoENRE577HfVtZbXqwErk8A5yohy2qkr4iDaxHBU18c9RBsTenuiPfmxG8Jh9MJ",
  "key15": "4qayoBTgyEYre8yEor6QZAYWAhLKeT5XRQafMC2X6kL2mhsFL7fSqncRQrtzmLtoRg7zwN99XQUCwhkE8vXJ2AUc",
  "key16": "3t8qN1L56KRVgvLzoiSYTHojwpHdgT3aT8F5MDReXJKfeSG6e3MgN8HQ1RUwKPLZp3rUK9PQEf5f6XFLryNvTCdv",
  "key17": "5FarKYA3Vog5nYirguWXLWDFMzdevxJyaoKTs6jzR1z9zeRdX3Z79RPsKkcy4vYqv8ESDjQqDb9WC8Tk7rjdoW1Z",
  "key18": "33BJiaHr21Vx1Wv7TDtQYps1PMgYn8NZS8BwPRk44R4LuUXkJXsBVMEqAvcyVS3KKtYbUHy718FjwUGwwXeXzFU1",
  "key19": "5CCPUpJvaTw54kd98iJieuFVVQtjb8tkoc1suknY4BHP2zR2tRdxEZtyHGLZR3F2dzbQwvhpzLtKYeqSLMa5ZhX5",
  "key20": "52smCEue3WNwaZw8xKfFPMYv9wAbEvEWUzqFM73p1oiLeqqKWiBLvn476HrFXark9GiFUiuC6jLYnyrYNnG7a1cb",
  "key21": "2oqdNuV7dSa2uqcbyFMKJ2aPRQy9VXZQiGucDCN6xP5CXrZx2sdgSfgzCYn9RCoZtQ5BSftPGp6wJuzDeCZK3ywP",
  "key22": "SyUWJtDdWqR3GcRNWcoZ4FBCBYPZDkoX5YDpir1w71TdF5hxmWjCDGyqCwAd82bhrdMGpVDSTHeWRiBdYeqnGnz",
  "key23": "3NQckGXgNSLzwrgFCm4K8BEPGjxpmXwum87SRgopbudKDe1xbMYjeS1CgqKD1LxGFSYfWi3wy2D1BxeBeXnYrN2j",
  "key24": "AS9EeKKK8e6CeNTcyX1ccXmBUjBzCt8QmHpuoWLdB4ttKx9GDZF18WBBYVcy9N299CB33EPg6FHpwvAt8SRZwy1",
  "key25": "3efWDuhNEa3WBbDpmKUsqNuQMRTer7qDTMTqk7PwFbq7ZJ3a7T84tm3UFjKxZnfRciq4kyrnMm6MbtmYyq4RfQEu",
  "key26": "v1hkiHkB87vXj6vKue6ziaZ7ykwVLENMvEGVt15mHxTmUQS2dcAQBS47xdr1M8JeqmhFqSEVhzwSkJLRqf3gEq6",
  "key27": "4JsPP4HA6RFzz1VZvHfv4Qc6Qc7GRSvb3Tcmqx2zPP4ktwf4D2uvXj3uTADKmBGoRnAJzqnS3phGmwYifcVTqcyE",
  "key28": "5uKRf6KPDkpLz5W4ZGCXtFu5nLfVL7LS1w4Z8Cr4zWLz4NUBbkP8TPiw1XpgrDRY2n2x3dqSEroXsaUfxMnXL5Sj",
  "key29": "25XnoGTNkLCpJ7CtM9rgxABGTjoj6N4Vwh53jJTUv4VBVd5bwmQ8Ue4oFGT9ez2gJUcP2NuyuT7JxMpmVpZP5Hwk",
  "key30": "2NKs5RpeCWLsyWKQdwuN3c6SBzvJ3rjjGFCMnzUGcf3ynQH7hWiYtF7oTZVeC9eWXk5ANhWJWQ5azngtjPSEopQc",
  "key31": "2tDTgfHqV4Yd8Q6CQ8aEiThYdzhfGwtGhACGYXZTu8oiZGg7g1DuGZUSUxvMNDybYhJmsK5yE5fWfQ4JACcJM1Jr"
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
