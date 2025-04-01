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
    "4F2TgHisWwBcjYNpabfq5RabftMDCVD3BX9M2PTsFXHqRdMGZtzWtdDyrdtzjmTGpoWzCrwzHgjeFQj9EjwPQKUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHQ1bPmFtz95m6DXgpFMw3LMaMSyPkKeaC3NucBKXPbZR1x9sVzfwZDGyVx1xsgV9YP8ZJdWYkWx2EFaSN54cn5",
  "key1": "V5APFZwBz73sEpjnKTzGkX3ca1wUjUDwsfQHcjY9pnUQieUyunQgw2cSKQLKjUJ1G7NCeDsu9ApAbJwPRrYAQWB",
  "key2": "4T81WxFChY9ENNDXMJaxpKLqfF3EvbxYpkTspoocfXXXYVGzJ5Zivhhj1kxjS68xHXxGSi2e4UVCn4eKH2hqNzp4",
  "key3": "6iPk8o5Kup9oYJNAReBMAko18EFbsYF8hxiFPowTENFhCGofhzeUxLseqzcWp4Bi6AydbdhW2KK1SG17VEmBTTp",
  "key4": "348nZFTztY8L1bNDQiFdGhTBVJ5igX4fbqs2HAz99mMB7aKkosRRPDGVmN7NBMkcQdR6GW8W5LBA8BZC1gjFeDZ3",
  "key5": "4foZPJYqE3YRZXWRZ53zHo8JYyujSS3npVcJp6eJbV83ZfkDCpCnLhswj3bycWB38d7KM1FFgC6uha7ZNRQWpaok",
  "key6": "3kM4yvczXpUyNNzyZWiKKysFmdCwbChMvuBerjosLCTa6hVrPxuXvh61mcbPZRxQVKTF81NMS5eGox82nQj2JSyv",
  "key7": "2AnNb1LYxdPVCNECmwrJFqKQYRfPdpfdzYCot9afaXkyQrvSp5VJAwdH7QJHukqbbNAMyzFFNR9dn7cuNDY9R4kN",
  "key8": "4tw2cHcvxhjuwdz3oBJu2HziPtKAX9P1rZTB6sDH3MLxkGHkMpTbZZRZA3Jhyer6PFhRDra1VQLhmoMWQp8XRpaW",
  "key9": "bcZHrYS34RTVdLykwuZ5AYBwFT65cXi3LGjm5B9B4nRY1kjKF4gxfi4acGSavY1L9xatDychX4qGzgFmp36skrE",
  "key10": "2duQu9cDzBahbGjX8AbsGHDDYLQ6i9wtMVydHyQcoKmLELt9gLv7hQy8sgwqQwkXV981WxrDJ8Wx5QFAARZA2QH3",
  "key11": "3PkSkJJFy4dLKSutRo4ngpQ9oapK9PPsbdnbjj7q21TUiKd2KvJRP4Juw93bZsKLeMztsYuXMS5aDy6zps2KS4AH",
  "key12": "4XwcBgaitHJiPxv8gQKCrdepdj5f1JkGPWiksZ1WXFhVV1USW17akB32C8k9NSkb5yszwS5iyw7ijei82vA5eKmt",
  "key13": "2q4AWr9eTLGd9ju4DDs5Uh3vn6wyk1m9bKbAnWLprNDvj9yktfcGEfgvtCeamT6jSN3hQoGZEYchpSogXzeFbcXr",
  "key14": "2XnVuFtYazzMxcEpX4J8RfyiD6ZtyDJRrwLzr57xtwJxFLadDww7v6CYKuxu9sZUVFFbH3hiBiKh3aXMMFaPYZj2",
  "key15": "4ykHAUDbiwZLefBS3CQ5TjKbWhBHffWRFkdiET3Bv3pPTNuDqsJtPFeLzAvPrxBR2gEmESpmARtAUVbNTGfvn2Kq",
  "key16": "3MCHNBbEcMmiCRCknonGs2r6BrFD4yXEgoH3tVqwKyJRHpH8DhBPDsjkPp8c1Xkpzw6JX9RxQHh4AujwuNnYbB4m",
  "key17": "5fBrVCeJoqsa3S9QUaXScfd4dUUBg5H5XLBSGEro8cub8qfwXdUXt9m3MtiwBF8qaAn1BqtcdtEZLjhYib199mGM",
  "key18": "4Rrancjc1PoLE46MsCfCmouEXEGZUV2NRv3mACqCrZp2SdXMSSLRneYX3kkGeiHUxGv7Kwim2tkcZgMCRigxcrEN",
  "key19": "36pZzTPT9NAB7XxNUew9E3vikmTnT2XmqHiV6Q6cqWDySLK9NWY85XFArLehCKzMtQKPPyN3Bk1qNjhPqzL5awu6",
  "key20": "4Lc2UZGR73AEdHkCd1bvWErwqxfNwTAKvoR8iK7vAgnhyfybK6N9yntStQ5nWszuGqkAN29oYYS524NkB1FkEq9X",
  "key21": "4xVVJnSpF4vXXAWyrVEQh6WPf9tVYQLZkQEN1mui2TwPeBkga5hTqYgZyXkozySk4Db4YkhSRLhhCjCMqSyWzZWf",
  "key22": "2kSmEh9x8YaCeWf9SbqQnnDEa1gy6UjC6VPZY4BCMzy3ATZ7xh7DwYoTxja3EKYKiHcZW5xCSF2N2fw3Veoviqhg",
  "key23": "4kXM6RapZqSMVnHZJ3CqtWQN5wkv8YLEkzbcRjF95VbdZKS1PD8UDhCTBrtSWjojRy3YQtDSKqAQr7YYkTJ2tbxu",
  "key24": "55dsSQTg6cKaVHm7ijmy8GL4WjsXCsvzmTFppkcVdXY8pt14yY2u8uh5SM27nMm1cx6y49u9TtJJ86i6MvUxtqx6",
  "key25": "EEoDwFfJpy9v6d2ku6a84iBVjfZDW2aerVgk77pgqwgscY72wiyVBnTERuFE1EMUHrrwrHy8HK3RUT2tdm6D67m",
  "key26": "5hXUt7nPxm4MWyQh52WuwPJYY8GfQucwyNZSuy5eNoBKycUAeXYf4yK3GbjC22rANqQSEX4yskRP2RixctXK94Lz",
  "key27": "5wH3dxvVxMj7ZLrBPuAXvrXLbWTotJHji8Gww8UG1f9sYFfSLXy9dvEbDtrvHJyLLJagyaSxFEEj24uF57aygcXr"
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
