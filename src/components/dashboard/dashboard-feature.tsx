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
    "5NT1iCtspV2AKtfETpUFYxsVnQEutA3P6uNyVa4TGyJyEsyfb6Y9hfCVUpW2LuiBEdfyYB8sN9jYuTNfn4TgfTc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNezLDzFRLABg6PgFyWVa2MWvhDbVz76o171H8o7vRhUsy8T75wbNKdYQLWaXKWKYKKLNY93FJ6aY5XzaPoc9VR",
  "key1": "4YGVi8cREGyVvkH7q5zjL5K1CPv1HF4VALc3Z7KR8i7V5pBrBDjsiqzzgmM5SQJCiL8ykpjx5j5tfuZrd5JMKCkJ",
  "key2": "5rxokH1WqKFHLXgJU3jXP8NSbxzLeTCAS48K1CCJFFXyiDSPheiRgB1NoaSkX45Q6ADZYw1YDVHkQ1dvuzVQXAcA",
  "key3": "44Tu6R97AiC5SBfcRvhRXw7qRkqLAdfnkA1Z6t6wLgTNdSRbGAyQkPFzZy2pNMBy2dZrp9crL6Me7nmFBJ6f4gsT",
  "key4": "4HMifheiYFvWYJG2Ud2Q95HRxPzLdsZifKkJjuuUwsNdPHjuS5Pn9C2TZh6SMarc6Z3HRiAXb9cRsjA6889DjXux",
  "key5": "58ipPRzWwgsjwM4XnGKS2bt1yGCoksTgRUFsZ74XEvGnwyx1KFdtCoKxqKyUCmqnTE9vhQc3WuwbQLkKDjaVqxz8",
  "key6": "5CNhY7vg6chA7vtqw55bEG4LLfGmkvxFzG9S44bZuGWNeeER9U82GP8TLAvf6sTexaVMNTeAcNSDraY54YuwVAtA",
  "key7": "3hbuZdXaZwGR2tRn8PENgNuGNCT8B1j2DVEkLaweu36fDx3kPaX8kvyAUyT35WyRVwSbh37CiPMTJL6tQLKjGQap",
  "key8": "35U8nnvyzQihV5o3vTCtwXcipJNTug5DW8bjzyXUYphiuVJn7KtMfFo8Z5BtNTaxZkiaUHDwBZTtQBGiYeiYdLD5",
  "key9": "59jHZ7jHtdyNAu6qcqaV4A3FGtr8iM5UVR7AxZpmyzxmDh95msDwQhqM6jsFv7HGQhmmaTAT7kAskZZPfozcN6yD",
  "key10": "62KwGwcn2cpEU35WJpKuHbD4mrF5JS9QaGtXXCUEqe5LLdCVNfuNt59XcwzkRysknr1xjUFYmLy23B5cnWwfHJB3",
  "key11": "yDf3uDynLAt3LdGyncLoRx567PvpLkhBUGsbEGngrZjGVYsBGFrE2p2md7Cv7B4YUVVooowHQwKc4x69pj3qtPH",
  "key12": "3PJQcEoK7dkiMmKf7GWZtCJvvYHNNtSk4MaDxPnyLi8EbPHypvMKNiMJUNidogyewwNXokV9KHmktXdpyLD4YTva",
  "key13": "34bvfPMyYD7eEhdVbvjooedpEckKsQEtFhYjVr3BPbQjtvq4titb4g9svrjRLVnDfJS5QH8x2oTDTJthuzN7uf7n",
  "key14": "5XZFq2WE52pR5LjgXXT2t6M8HpmNekD7UmDrRUkptNdUmyHwqS6RHLaNCY28ncDLkCuaYq6Y8Ydio5q8dzY1qrhK",
  "key15": "VHhfek7Ria8DqsuFh4FMnMi5zzjHPby1UAtBBgDfcVQwzyk5m3JKm8EhR1zkVSoRXuBZUafawnJ6wTypzcPKuZc",
  "key16": "EeKGKSoCcwW43xarQfzGg4rG25QfCPTKRGyXe1FJnMKAYqveWUmLihwDBBhQowFeweypAXBA9AuHe75cmPBApHN",
  "key17": "3cWFGcBRefFVgLvxWBHEozxLhoHiCD8uC2nXNsJBUjFgsahdcHcxR3H8MGBsKvXB7Ky3NvjUEw8xL8oY3YfbCpur",
  "key18": "XkkN7PyKuQXERh3dtPW78m3EddqLpTLNMCqgfeijQcWC3Gt3qK5FpxBrsDy9D1yiVY9DKZvWz9fVhRhSx4WcfjB",
  "key19": "uWNUpUhKUctWMaQSaV2kiZXougf4Ak6jXNV7tUjg9jYpigjGfxyNtW6drMvyawtht4iAPecDAehzqMzz9uuRyuP",
  "key20": "2Rd7DqXuw1LAXJ8czRAQt4TpUQyA1egqKVQbm9rf4BxLTJghJKsP6nGeZjgXddh1Wu7WgqCDXwP6edSrTw5fXwha",
  "key21": "5PnTNQCnRWhBcnBNyy4zLyJsKyR4Y8LzhaPz2jAahWJ4wTXnNQyAoNF5quq2fKoagfuLRcEtCMJXjiJ3c3PbKJZq",
  "key22": "31FYiXNqPuJti6PnbEFbHW1RunTfpY2ZDE2wEnFACPQoiqaX9Zp9GaYsSxBUmk5srW9VJmk6T1t2ppofMf4vWsZw",
  "key23": "4stssWriVB63ynz8vmRaNJ3aStuYiNihVas4aB3Ujdae4tnqRJVDZqVaTjDiVNp7ueZKgzzrCGP3UtDybjYimnzq",
  "key24": "42QDJPHnu5tGSMqD11KZaLnprJrMmPEVVGonTdVq8V8aZfPVGW1C7aALx7KPqsVGDz2CkBmcFu7xBL5bbSyGAJuo",
  "key25": "4wMPxX2LAx3evhPsqSJeoV7wWX7xuDTVzPcyt76nAmYLqTD9roQzcct16p6HEMvjtKk3oEeYeBuCpvwtovkKyKCN",
  "key26": "3M5gnS36T3fR2wHds4NXTrPZHLLJLTctAn8tjJmMnU6UT7icYHCP5kh8XAcD5AoZwLm6bAaP6GvD1NEpzNsq64pV",
  "key27": "B5AnKuyBNXD2wjUtMSH8rfmCa33oc6id5BJ7xVis6STr6bNFxmZCiwRbf98jJHQkMqWKBYFG2u6ptLsUMQYeczZ",
  "key28": "5DfHxw4VAXmwAkzMrkRrY9CwG1UCdxJyP2mJmzeUFz8KXxCGAuTAvwweEvGDMgwaGmcxVZqR9jRgyLeW2vh2mbqb",
  "key29": "4MFHRVTrT2KDpEjUm3A3uwRkT2X1NXZ3DeZ3iq6rmhmD38VWnbMfja4EoAY7WhnUXvAeJKEeQHjLgJ42dAc2P25v",
  "key30": "2PvaPSsS15J1tm4XD2r7pD3R3fwjiyrFyTLqt8Mdu4J5E93En1iCK5Dbmkz4TUKYwndbo9NEEicnprqXZhQrYCV7",
  "key31": "3pGSUqxq9RwQZPLb94wuzgibXdtikB1nkbSrGXg3uPN7maYvhjqMcHE6nyWSfhDVpjGWEFSXTSCf1PoQ1MCiaXhi",
  "key32": "3mHtnjXKa64QmqxyBKorH3ToZEYHyCwJN9BhQFFfX9aajLiaNjEEhifWMoTc2WguYXpNZRf1MTUjZCnWixPXYYG4",
  "key33": "4vygpKefxLWib18QvRNp1SnUFzHtiEPfHgeCFidPhc8U1EuVSUBpj9giC1MxoJqFW7982sdxVdmvt85Sq3GQbMTy",
  "key34": "5UDXWZkC1sXBa8PiJuRQxZw9Am8HESt9ytCz6tga39nNvyNwaJAgDWRVxRHiMnDSoY7gpZ9SvqkX54yj8UhUdUyk",
  "key35": "46RBT74q5Xb6xeXtUUJHsHS5Fui29MLNKBfcf8tMCccuai3Ga86hpknmN8XG8g3rUSGtRZkky8fzFALDyu3bqv3z"
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
