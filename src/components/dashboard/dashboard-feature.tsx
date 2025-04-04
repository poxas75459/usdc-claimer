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
    "2fD2VFS3uE54hUkFxbzH5AdLCLpkTjdoUhgrMfGirqvE5G9yD12wE5Db5Ry9LfpPDSwXsa7njhrM5C6Z59pthezY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8TQScAw4wDbKJp28ALg2xhdsfKg3iuDvxPhAoT36tJ2yj6ygw2qxqxaZKUy7ZUsq2Qq2S3agGxKgSF8wht9jsR",
  "key1": "5k1U5SsCRvSRMmGXAcNAQkn1LEN2bPgvfLzpponREURskbqPMhuFFgt7KnevjHxFZhwrkiAerJjQziDLosz4NYXh",
  "key2": "2KSDRNNuF876WCsFr97aEnLmaRhRujPGytLFGeYfccQQL1Z8T3kjsyszd6hrt55TBFNLJi8dqhBJvGdzybgFhus7",
  "key3": "CFi42rTrFnzKwesLsezKqcWoKb2mn68PqsSHhaXXSS3GDT2LjFL7UfHqATV4tasJWU1icgxsY4SoPitwmxZabC9",
  "key4": "2X3CXc28sHagMEW67vRJME2BugWp5HS6Y8wf43DDRecoANVctknZ8h9pXD3d5N54q59ZFeQWAW57fkdZVYaymwoW",
  "key5": "2wpdCEze5mTjGH5fG7UEPrXG4vMgu7Edz2z6BKWgY8fC5ayu5BGXCXss2kCPtyBGc2fJRWsHQuBWmFvU3poYf57m",
  "key6": "2mZwT3VxQ6kPcPPquY9MKWrdnYTravsEFEqnoxheayTCqRMgs7XgXoNnXCCydR6aVxoewRde8Wzbdzzppb27FenC",
  "key7": "5opNQfG92EjCKbeT4vG3nQRbaMkCc1sgeLZv6aiv2baQa7oAGjuqavHSXUQJGDQLQQCrGFbbFUYULWwzcmzv6SDS",
  "key8": "4Bke1uCTLpsvWRnumRqQb43fTuKNCvy4XvLs56ydxhZZsDY5zHUmRUoYwXhEVQyBpTU99iywQcQe5845im337WiB",
  "key9": "4r9yCN3TM1LAEQy2xvKLAoH5re796N8T2goPzx2WwARq6HL26n5fPjN5UnePionEoyERCw2ERK1kBbTC7Xfbr4p1",
  "key10": "LfcAKexLfELd8rU8k9xgQYYECw3bwRZ3j5R4K2zjHktfMi3jGhqgDESBTXg1UYEiT4acudUyAUot78tcauJpxEt",
  "key11": "2P5G6p7e5LB8iQBRNndbtwTsvqUL2X3xMWF9PGR46K7By7iiZZDpBrQ7BBMhvLuFndC9K1gXrSZeZndzz3hSq6Yc",
  "key12": "5VvzRW7HWF7bfd54YmDDGW5RFZgzzv8UmbKiQE1RqkJUsN2Gu7D18DfsAy5LEoiy8ePJfWnU3sATnPVUFyDxxTLk",
  "key13": "5AHgYjWgKnU5tyeVdzYcRenfh3KSjF3kWBq92cCERXcHzvBhtqEk5j9HL85FvobqiPinwVAbWoT75BaNuy6nSvBQ",
  "key14": "dGuvZXZPVys2w2FieNFx5KW8vzhhMyppVDrHpxbthfYcD31PvCfeifqWejYQd2BJ3bD2bwzuTUT2No3tm1VqnNj",
  "key15": "33ahDBHY7Y7JkNTwGWuLFvSSVNEdHnapXQ3tKyaYuqzmyhu8VH6sDneqA8XKXTKwG7wNehDcxhFwupWNdkpuA1b1",
  "key16": "3TZcAeEhwFLrYCmyhjfBTd8VKLb1CEAB6jhViEoS4AaHXT6HzRecwPKUv4CvCJjUi1myJoWgSrC7iVVheDqZNNKs",
  "key17": "5nssCuprrMPRnmf3hij6CRZKXwho1uCZE2h4mZGBpPDk8N52U6eDanEAazNmV3kXTL1Szrj5932eC6jd2agNXFCn",
  "key18": "2oCVf4LzcfSWvFQFGEg5m6CuErjhnjvBUKVzyhoSUpeQprAEVTMqPSAtfxdYfHx8PFZBcwciGCma1Tc8kjEJwvMg",
  "key19": "L8j2cUmWU8TcN8Pjy8ZKWoUotfyBCCfmAwqW5gpLfsgLrkB6yXPpbKLa42cSkKUQrpHjaQwwLqCjd8yR8v7tUwG",
  "key20": "4zFWmq86tjTX6QY1sSWDoFBmWmRrCkTEeDoPotR5XUzeG3W8CrHj1iFPshMiQ3WvX8DfRPnxktDPhvPe2BQVPLWx",
  "key21": "B3gVWzg756qDdxNCTZtZGNT1a1DUL8nd7E36yBZwGy2y4zDc6fJpKYjF9wdHmVt8xsXwdpjwdg5FtT7uLafcVZ5",
  "key22": "2wPyrAzxoyHdVo1ZGDGcFF3SPNiiF8dZ1NhMBwU8CFqxYTpMBGkW3DU9vUqqAx3RMpUBmLryd7rJ3XVWZWd3dQcc",
  "key23": "29g4TwAXScoiu9ogdK37Cf5zxKA219WPS9VEYVSFHPaYMaAaNH2cRHRhkoHCMGQoHq5RFY4r4rH9nSQJE5kZkZkA",
  "key24": "3WnhDckq3KC4vWcPDWWeG9gvwuXvHsDFn4nzXMJRvA5Fzzetwz6h1TGCvTHKP5BDAY8aCmFch9Ad3cVnaXKrjE9r",
  "key25": "4564gLzx9jWDMkwH2jeKTgaupMg83CfwxjNaDfgsbzVZpABtuMm8aaE3V3cd7oZ2ZorGjppcvN1nnxtCXFFfRPtR",
  "key26": "4AZdxr6aB36P8awRyh74VZ5AhBeCrNDnDKm6D7DqQWf9VYUrDc1uSKS3hhhNWkGe3SbLhp4KH3qGspN3c6ECi2z3",
  "key27": "25FA3k8Mxu7aYd9Q1Wq3ixUzorqfzhesz2RNoXQzav3uudSZoMeNqpNPBY7LswmuJmTeE1Bn14d68LQ1bDACf7py",
  "key28": "61XLPefyQ6HAqzK5nbT98nbBV8qXTwiUQe51thYDaZUeZfozp7KQU98TYGGWkbnhNrdwa6pvvNVshdKgt68rceaQ"
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
