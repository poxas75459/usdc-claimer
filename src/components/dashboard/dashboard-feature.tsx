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
    "3AT9uuLXCMu3dFo3aUPnr7BAjqJrQTVzzMteyczgSkaJHJdTYc2kwaNFBEAWNuSZd3gqvUQ5PxDc7nVRr331SiAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhxhKoXTgKXbAW34n2gYmStnCkRpy6iYyVX1ZvLfyk3JeHRdbRvwayjh9u5Koh3DyBZuqXT2RbDvee7RFzeb2dg",
  "key1": "zQ1X1WF9RJZqFAayURvfMvYRMQAm2Jyk9a3nrWYR5DgMZFVqrWtf6joVJbKPEAn4oVFNCmLpnv4b4h1TkAQWBrT",
  "key2": "22Dj4mPeTibcf5RFAU9bmqxHEyu9GsT3p5jpWFmCYdLnH7XMpLYguF4ahq6EArZu3urVNtTtQvuu6JjfCD1EYSdr",
  "key3": "2Wq2KtuH61hoRqK55uunUXmvc27BTF75GcZMhYBNBwV4fpvHs1xvUSFVVYLf4jabaAfXvXJP7KUVgq4Rkwc85VmT",
  "key4": "2YRp29CE9bCyuaohSVQrWP6gLii6P7FrEHyVbSs4Xj6f2sJNAPC9stBSGCUNyE1NAUr3inR1wSG15jNwfgkge2QQ",
  "key5": "2hmNbXRtAH4aCS7YgnKEnNKFPUQASPB59hkDdAzU1bzRzP49EjELtwhtaqfmikYamMnAH13g1YkvFiLj6oWcS3Ki",
  "key6": "3EXiKY9LKNmYZy7HDoPuypJvX8766gmKDdjmJ33FtHCHvJMkBJSQYdE3r2M2ZXxJxTQJ7sj5wRoHFmNH1JeHFPSx",
  "key7": "5oo6HyDEM92Tm3cTLDrc6HwCeAWCeKEUWdQVDeWWNJze47ry7odTzDZkAUm9mwGSnHQ9LEneWh1kpEtTHDrLS852",
  "key8": "3b5DZbpZqZbYKZ1t7HazzhXS7pHbzwNgJkwmXjP3Hz9a1nrB9SeYXuh24R4Y36p9xNYmrDtXTtQrL3YuWX7v7vsm",
  "key9": "hpoMtt5knPtmsCx1v2BqMWTVLqyC881JxXSabDDSRMtFdfDQFhpLYc8zviRHDVJFhYuZ5zgEvFzZLuo46FGuUoP",
  "key10": "4a7mBFMwV7m9G4U73CukzgQ9BbvAuni6LZAWrQEFWTFbRrvAYR8t6FJLnYAHnNHX3tztaAEkSNXes8t4k7jXT2Yy",
  "key11": "5JQHVaq1jYHLAUmffmqrKvQksU9Dh8mukVqvYJK9ctXN2mkbSS54YfzqdZPdKjZHMuSW5V4JK4MZtfQv9UJjPkTf",
  "key12": "5V7X1hx7xHtsmjgFFAp2CJcUoPt7C2nSfuVs1WhYMNZZyRWSzh9BEVnMxd9hUpjMqyeGmcwBZCFY7pobfFujefYe",
  "key13": "Hu7yk663XzP5bDu2U8HFjySUsTCnC9uys3ZpGrQGRdhqGKfwsVEtrskeTQGE4e52DrZaUX4woJ2HoAzt9nDHPCd",
  "key14": "247GNwNBhvj4DibJ5a3htabMy7UPjAqRm4FC4iBEMaUKaPmMYYTBRKWrXiz9Rk69Jf2tyF3jqSeDbMZ2MRbHXvCN",
  "key15": "2h7mRzzFfx7oD6L44DNp2H8mnYr6kfXtZBWyAFv2HpqPyR6jug18ryb4TxdHgxwgmrben8pgsxYcC4LVih6mL1DX",
  "key16": "5b7PUUKVrPnTAEqi4oF5avZ1y2bhjvJ9BNVcci2J9waePoKjwH9oGBQ6vC2UR9LDinJ5E9DRR5byKmcEC3a7eRv5",
  "key17": "yWKKGkGvn7k827yuKdbEAM18L4pgFXbb3aYz2KjzjxJhmQBNthNS6Hhn36Qi19dFWAW2Ltqz7NhAa3HFKEa4sQv",
  "key18": "45XqbGQUAiDRx7bUJkok8g7NQ5nLV9KY4Vne8JDehF5384FHaM3Xcu2bBJd8Dpdd5jH7PChXXS9Gd4uiL1Sw35Zd",
  "key19": "2QEipCGFm12RYcq78QRdVWceQvTWStfNsPTydUWrLcZSqNj3mywRqzaUvFJZamut52cDoV9jjHRkzVHRkWkfDJ4U",
  "key20": "3zXUTUWfVufDcZwF6MYr487EkKFfZVMQRYkWaxFrhhmDcJjYTYfdKCVr28AddDR5n5h2nZ8DzMzMg9MQLkmCr2Nq",
  "key21": "4nATqdss6JX7UZhMUJ5CQfoPvY4tbFXDoFdfHKa9jaLDYWnyYPnqQSm1dqDmZiMSCACxjKtLqbnqQRX9vsKweUJL",
  "key22": "2fXKHWwp6XRoTm9SQyLKhaQBocbTVJTBoojBPLjqL6R7UggxE9RB4AFXCDyUGrhstqdTRQ5NQN3rPTpRqATn9Svu",
  "key23": "5Q6hhmaqWFqetyPFe187G7WyfQRXgVo3Hqop8Pw8DN3Q3zgaMESa6MZzogSwqS5RGeDpfXdHgdKpZwqgd2CqtbRU",
  "key24": "584o9cqHgDSJHhLWekVwQRdPUXZbYDmvPJW3DuVjL3Ut4CaVao2JSc3Zv3LJBPSk9Lj5wqZAbkb5Vq7NibGGAxXt",
  "key25": "3DJ3rrPHims65BrBDsiTMVu8D7mR4tVm5BkTDnTASNV6Vpb53jWUy7kbDs3x7aB1z5guh6d8e72dXmYj9KfrD2wz"
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
