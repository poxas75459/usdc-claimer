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
    "5C1WsoqfRY9NFqzymkJ5YAvzqVVhvREpfsuAvqc6F3UaPG7pXWcRNfCqeJwPJGXEbuzRpMjb1YwmyMAQX52Zo41W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DK6ZbqFUJHHMDfmVw1zqESyU7RFuEw6JH5vXAEAEtBw9jVkyE61p15FG3v6oqKUZiaEhhwe4nGgnp3KQoZWaxxi",
  "key1": "Ujbd7P2PvafgdHknSZate5Dd3ioQh8Rrnzdn7fts3Qcg1T2bYyuZNkXcL91XB53dVSJhaKcErjWBJKuZExjis6V",
  "key2": "2eFjEhsZMMfARJeTZAU8y1sQMGMLykrv7Q9VSAE5RgUJih9L9htzvUPXjKhUiCozWGLTEbYbZFt3PwMv4FgtrfSM",
  "key3": "NnN1aPPRX2LNvmEeKQqqc4kfF8Lsq3gyFSHakjV82XHSF7MPBEXnsFAfHL4LKEjzZFkwuEueZwA4d8TECGoG52x",
  "key4": "3hbuZwfSh69N2QxwGAGJaoP5cJcGErZLSQWLcWLzJPq91RCnS6qT54QCp5uaVv5QbLdRH3ETJUnYtLp4w7nsZ2oM",
  "key5": "3a3BbDjHhf44ZC5eAoBjycjEU7caRPLLFVy3WseYnQvk1m3D3TCrkUYRqMjbAT8RmEAoEhicRr5LubDBftAubSFh",
  "key6": "3Ao57LBe8WWMJq4fVwQ1FNMZ9mLinKkYntsmysym9JiKHsgMvXJyRaWPkTeibkXXpF4BdzqByeoGwoRRtoLgHwsC",
  "key7": "igszVp4emUNaRrw3kfGLe1h5MkGwkdVFQAH2CuRZdapmuTQu4HZqAwbhko8tpEy7ox3ztHwgMbxbrVT5znJsDjv",
  "key8": "x2h3ddQWs6SSweAL7mH12XKTuqVTtE6yzVFpNDaWQ6AnnSHDHZvXq4bcZGomgjJ8Mg5nobuJdf5bTfeEPqdJh6m",
  "key9": "2pP7DCd3MR2D1Ydt3qYMefJUZhQdzxzSTryk2SksRiD6SZm64FAQpL78SLLcFyrcp5aomD5kDg4gdDAHgTBo8y9Z",
  "key10": "4ipoerTWj2J9AHp71eKdu9SmFUh3GGuHzCJtsdQMRaiNhaVcnbgz3KBupXQJVeAoKJXiehweeAZ9ahazcBg1S87L",
  "key11": "4bVNRnu7cqAdV4fNjbW7WakxeqZJ4wV8yoEFiyG1r8tGhPTEZ4PpKNXyvYAKmDW6kX5CY3T1rj6kAuUqPcYAVegE",
  "key12": "3HCZM3gUnU6LJnfeAQQjvVdKpBF6LbQ6n8q7HdAVznVGNd9eYwqDkaLR9HkSciFZ3BohboMs9vrgo7KgxFjnd8ty",
  "key13": "4xeKxyzcwyseRrWzYgddxiCLJuioRxV6AiPxCEfFGc6FHyDc8AXLUPnPFbbjF5Qp1bQo4MuX4PoQXNGkACR2p7Ft",
  "key14": "4iBBHjsRkVw5FRDW3rPUnMoC9amEvGxi9uCh5ckx3H63qwXaypaKuLBCtw2vVVnrgLXYEZGTHkvYcAxXSHVKLqCL",
  "key15": "3Ai3JuFcveRA2GTE94Ap2DzFaaAUxkio4KhTNDZyV4213234YJostm9ZwuK4ayz8pFCfmMjtLwoz5BsR4QFCfmrM",
  "key16": "P5wApi2NXUhqCuHUzraQYRvu4PzuATp1U17G5gZ88YyXT5AHzQCfX7qqLCQkcUGFPdqJGntswu5MKspx53S22hG",
  "key17": "BHoMSC8Cm4a5yyTHzsayz9tkM9d3ATiBtpkaEvgFskrGsmANuMe9amXo9LxN8hCavSQG3FkmmmBH5fCmkvAUm5A",
  "key18": "3V4QYMRYHLZav4FTsJxcCZ2WWXotEWrCeLv55o2C1WRc1b4nGgqofUg5sFfnSD9QcU7oCKBMdprq9aULkYhuLgqb",
  "key19": "ZU6sGCboVrwJWo74pRxo61o38FoS7KiahjHCJxq6fPf7hgkFoAecTeYMCrVkwsrfMLaXBCGNkm6VNdYF9cFSXXd",
  "key20": "4TkC3B461ekTEsSHcsajyujXBafuQJ5XPmDezqMYsKtEihxzeCAX34y4PGVPquibQDRfndoe9bZLbU2ryNGQhD2H",
  "key21": "23swuGtmpYy8hvDfrG4Cs7xi2uSnhbzL2fKmA4dEbh7nSoa5Yc8H9pHBe5ftZ9rNQhje6zmUB7TQZcCAXB4idjLe",
  "key22": "f3f4dL7UykDzax81UzzV9xGu568QaGvFRzwd56U4qFh3mmSgJmEfwWvHSJ8T3LSB2tn3EGFWQGuriTwfpdw8ujJ",
  "key23": "217MGUbkiHhxNhicRKG7rpYzBmsunNKUM9ucRNFVHLX2PDnwuBNEvbAh72og6FDPoqxcDViLQCHg6TXQLcbmwzo7",
  "key24": "4wCofC8a8CrYoVBfPiDrvY2omyFo4J6gwYZbXK6WwrP6sWDegag2MApSRZ7k8ujxU9eM64cF7g2XE9aWSjU89JpK",
  "key25": "5pD4ZhkkmVQpMF6qugCjwZVpdvzaTsnYrXoM9aGaDWiqXpXFxHZ2qh95xuNeY2dLTQdvTgk3ModjN9FpQsmRD4RM"
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
