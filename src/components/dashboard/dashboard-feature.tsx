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
    "4yeXgNrSF9FatRcNz5or5f63ZKW2TdtTMYVAj1LVsvmBG3q95SRNDQLYxqT42tuGx8CnJHGqEai7jYvK9nBgkrSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJ3MwyruAWmcaJpXQ4nvUz8U4ahbqggVXq6STrFgrKXvN3fztdKK5KfnfdZxb1asvfqbW4b8DNhpvsBZ8mJPxgg",
  "key1": "3j1bi2Fk2RRBdp4XwApRTE3Z6dBetVgdVwYUj86sDD3CyVbJYFyxMKxScrKS1nbUmTQjXCwYqVLatWeK7fpD4oae",
  "key2": "kY7sCj1UUvyBT5VnCxFuURQQoLTgmgNSGfEPHsizHLCXin3kKDEFBAaQ94uEPapSwJAr67gJ9vTmg8HKyqB59MV",
  "key3": "FMpaVUX3JFxfPBBUk46aepdvxoY8o1sHndzxt9syXrEjpn5Qb1xzCffNSxMrQv1PN6ZhgMu67GWAm6DSAvsK4uG",
  "key4": "4a8wToVxUqhk8HD4TiMYpGhGBD5oUMbiuvAYBDYhgiJPKSVb55vUzJKQijeTDPrmzcEb28AmJDCrGaJQyrEZiyrx",
  "key5": "2V673hANwimRDYxE6vi6NMhRrbdXvj6jgVsvgbv5euSSzhrtgVdDMmKwkSu6cZHTCmbESPAs7fArKeN47JuPohnT",
  "key6": "3ieb1WuD4JQoo9T7UD3SEzCsHwXGzjsrj5ApBi7UDEZ4w9LNiNKPpwXTNeS6aURTJvyeA48ipA7kMrLePE2pZnk5",
  "key7": "zj3KcoCn2onc3GWmpzXpgAAXrFWv4ML1n3628T4bFuWNPNwcXbzkaSq7gATf8H3KNkMoWudXtFoSLTocYYKzwAt",
  "key8": "5eJnzA1nMDHLitJ7bUg63CRi5X24YMDQWTUvF2NWNonrNXx1odCq6fbZFYSG8uiyjtUjkQpiTXb9BtN9CMZjUBJR",
  "key9": "xiRcQKiXDLfPE6Zfp1UZGcyPGtUsbfJhJP8NpRwYSY8smd5g3NFYikvn6RWF3D1GqioSPkyFK5Z41CHUc3Da2io",
  "key10": "4GYkY1dNVF8g782aazSE8V6Mz9TEg9WM5exdpumrbGk5Qkeqmn8HiQzvZjqNs8yxmU44gPqL2bNwzw1wbcNFQYRD",
  "key11": "2efaZvJ1Ts1sTi5jJgiKZBS2VNKU8fS52tfLgdZkwDAyM4Eba72bmMYyaHR2D71VzGc1nLmYAjcW1kBFUvqRdmzo",
  "key12": "4VYHNE55sNgfN7ZPKsXiawUGsQmHbkSS9ggGro6J5x3Tp7rnoLjauYHhUna3A6XqTNZ1eu49Lm1mWVVtwFDdRijA",
  "key13": "4xyMR3YCMgWYXwKqp5AexqDteCwPqBvDwRHozZG7cMnKSZpBgpPSV6GSzfCGQnLjYYiP1haaKrYJMGrgQjFCyNvA",
  "key14": "4ztD9JM7Eee2TfUsM3uy8Z5L3soaudEbnteEZ6xPnYY8yyyKvWzFjYWUgKdcpoz5r5i3LFX3wgTpG6Z2pmME7HNu",
  "key15": "4xX8f5aY8DWqJrRaDXedgYLhSyCQLvZbMSbPmWcwXfqKm7BRSmsQvTkkJfThg9eSN6NkrcBCmwmU9cyQCzCeQSEr",
  "key16": "5eKqUwn7XVFMBa8d9KBSLZCd1i3SjbP9uQBAi9sEt5v6SbtHghT8g6CsHkg4FA5C228Z5deLZPwB17i5MJrcg4yT",
  "key17": "3HRgtTzDK19bPNaPdc4SeSbhxJqg44JAF7gVzDmkLNSwMty7bVbK4J1xUQf25y3V4KERTkTCSAqWTsz4tFbdo2Q4",
  "key18": "5rQ8LkJtLnjg1QmKpjSR4HwTiTQtksaWS9DnYHcsKQ4Aovkvhbqu4uocPj4vcMn9NFAgVad9Y3L3THxrXcM4nCxY",
  "key19": "yscccfZjQwvsSVZJuEEFHDmwm9a7HZvSwtfygR6tUBPwS1iUYrErv4tCLbKJBnE2Q5wT8t78tTVnTiVhcCyTkHj",
  "key20": "2Sh8jY2Hgw6jww2EKTxeP48Rb4KSTHJSeJGGMM2CtnuwUohktPBRpHPL79HPXdVc1kSAfFXJh92gL2kGDLWwBZAe",
  "key21": "D5ftdexyBmghx7ujhNanUdpha7ZmN6WJwE3MT4vrY4BCxmsZ6bW526cxmj2CV5E8DBPNWf1MQSTkVcZptASYshT",
  "key22": "3xH6CmAVMwcL6zFJgwr43EEAkpnv6yVk66yiFAc3SSN16X8R9WHY6jn7X1r4LWDtzfzmHWaK7RFQo3FJMDoS5cZE",
  "key23": "54BS76ei9E6ppDrC4D6oSH8usVXftLk6xoXmxFDh9eeBxeggpNbHByb5zqAN9rpns1YZQkm7zrgqyppqU38LdjNz",
  "key24": "5Mok63pVuxqgsLQzLb1HkNn55A6iPbfsLA43QzcocQuiQVuU46YCCbgNey1PHT2ZrcUkjWtEruVw6yvb3Go8PAEN",
  "key25": "2JmCpbd8NbGLUDapbXv35XnsabyEhmtSiLZR48eoCFPh5dvRAH57LH5tU2c4ASnbdW7FKgshkQ89x4tamHf6vyJY",
  "key26": "4rhKy7tpyjwZKNasWvEyCJDUhRR2W2y1BbxXYwF9xenYjrYXeangDhX7BwTa4Sx8PCb3oWXfzyCPc7RwpuA3yCr7",
  "key27": "2v7gRdfqmRRSrjVTcKtK3JFBJFtzUkU3aQ2Ho3wH7apfUpspKeqcSDUtMdx9dM51NHiqTCoLPACyonPFPFxapsKY",
  "key28": "YbJtakLdz5p9wH8XksAwVryMtVG2LpAp3CaQdqQi79t5q4rbvdSce3nb5r5q6G4nYc497CQGCFJy8RrUPzG7zQQ",
  "key29": "5KZQUYJmb5N9e7pfnr6ob8xXCtnzPaQPZBo6MGaK37BHJg37MSpfLeL7waFfRSj4oAKbhbhNnA86CMcvpF7HhKgb",
  "key30": "y8ikcy7xoLrTKnwMBCGoy8ds9TUMPCuf3ockcf1QpSybZwRQrLZkS5tGCKLYJjqga84E27YZhP7NWBDGDsSrqSX",
  "key31": "37n9xN8QFxaT8L1GP2bokx5qM9pHQuFMqs5H63LeJWFcFVpwFiFYDzoHfkctEVYX5EjUfVNfcATJrRyc6h7WJvTU"
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
