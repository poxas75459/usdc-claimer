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
    "2cStNwBEP2FXqV5aFhrNpSDy8r61e5odowkEy1wbguVhigQoxVw9QWHMLYiZH5ApxayXGZFsG52K2kSVtbTHpBRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yYrFemBaoBAcAMBNKPiysJukGofozTf2EyeJrCqCtTPYjYqvXPJysqt7toMvHKQCGa2WYyiQxbFPdhdPY4TmFo",
  "key1": "3tTvw2KHFyrF4S2oSdJogx9Me4GSubEEEqYHqYzU8JUxFTZcVpmjN4eFgGqNjFx4SsHwcWSCYEnMGtLpoLTMmygd",
  "key2": "mg1o6Jjd57UWMjdJMcZN3kzB1s66d6n56XKUxASDHnZ6YTiRTezc2drwckCsDm4NRvH7NZcaRVzeFUX24VYGwzE",
  "key3": "5DeerwHhnAkKAwnPxrEpE63FWFXfx3cAto7FqsuZtpQnn4rEqJrdKr94JVd328tprbGqm4LPdjLYQFEboQLcHZMm",
  "key4": "WsHQt2t29Gf8mQ1Hkhg2zP4NH6BdnUJYbfTgBX9RmCwtogxaESqWvfvXeviHUpqx4yRE5hfd6jrTtnjfCuMBRmb",
  "key5": "2G89EvxuUMuBp2qaNNqgLvQr5aKsWzfqm1tr6hwsAA8wdm1DowpsbSEom4ot8Pe3sU3L821t2tyz8MiDoj7tFWXg",
  "key6": "4KYiB5dJBKpWbS1hebexKFnhHcgu9jXhTRv6aWJHjEg7fSDVbtRhUYWH9kwyFF6ypExPSFeW6SPciZh5kmah45V4",
  "key7": "31ZNccNUpTCT79xKZEDLeksFQZ9LYtBLqGRHufAQqAPzX8xPjjidhhguKeM2DhSdKk4YjQm5JAmAxdbccXPpTrhf",
  "key8": "QYriKaXN2bdBj6yc6NvtJNiCtdYEQrpeho5biLJbSqQLfbnNWodgB4GgpWHdf81eswZcGPKdAjZVjVQNcwtkmxy",
  "key9": "4BaSgXdyZECDcnoSYfHKGAHdwxg57SRi4a9raxiqtcjhAoavBNYc22V85QEf2hkd28bj2dP88QKBSEmhv2FubySs",
  "key10": "rVH7cSqpqWpen3CduxSWHTX2Cx2GtyZvtfTMs7VSRMon8aeaAvtjwzCRUyPdEgRu6bPctdMxxWX3b1BeBMdpxBL",
  "key11": "5zjFckXsNUkaEesGKgHGkLtttVtahUGJvjzvi5EtA2sgmZGGom94iEpbn7UWiCHQSdPouqJ6iHpFE7qGNYDULxfP",
  "key12": "u3sdwUk3CMdnTMN2SYjNFeY57r68ChrFM9hBRfYMPTcX24EaMRNCRHTVWdYr1xJ8Yw7b4RxxZnLf27xNaFJ2sDt",
  "key13": "2Cm23t9RR5wnea4VEzPenUMMTws4iuFa1GGU8DZEBfFdJssMdoYdorx1ULJnYS5Nc7oYWXchVUgEkAFEJhXtnA7J",
  "key14": "4qxT8LVeHk67gofvb1e7rW49xPzqNgqogXcrCRU768BCnZuu6HqCwQnYYgFSFgV24g6Zys2wNFN1tw6NBzm8o16n",
  "key15": "5yFz5PDZW6t6sSXX3WjZzJGJENpoWWDoqu4Z8MYL2MBXAqvxpc3GKHBbvmE9xLpFR5zW4AbadGaydemiAytjG6rd",
  "key16": "4Qi5xsNDRhP8w3wdKeCQEiwJjG5Jn2x8xJuAHwGWEjfLzV2QENdc5NnrCKTDfxq183NmwaandBjWadPy25zMpHcG",
  "key17": "WfTwr9Po5eZYJAUb55i6AyppTXQYCYoWz43aSCcjq585BSD8ygWR7KXuciLGpQQZAYELxFGnbxj9Abw8tdgW3fq",
  "key18": "2oNLtwgBHUt7jBafpFDKKyAsttf7D4vqsGHjwfx58fvZ3tcn4ZmB29vyCTmVuPqME73hLKSDnYSXomjpvNagWbBH",
  "key19": "r8aAcodpmxRQaAvYxaJTztjWF8pKQjvzkQxoDP2unkvyb1X1iYdM9WgLX12nreNAD8A6NsJ9F6jNz7QYPQqMjuY",
  "key20": "4xeHTr4QVPg8CD3hNzaWqK5bUTAxaZVGFzDKnpjcVDZvGdS4zyMncSGiRih8ZHD4YvUjCFGBaWboN2s1n1jNvQWa",
  "key21": "3tuB4MavGW81djaqArNqvCVeyNiMQE1WcLfhpTRj92BzmFVvTEPUeSyuP7kjBXNEdLHzqxNummzBEqowShfPPVnC",
  "key22": "3p7QKhiHWLcQBDrN8hsxxB7uumWAZrMotbRUf3GY5hfiTmoUNDPZzTye7nVMjopxX4yiyhLW5btwi1cr7NHnqpBL",
  "key23": "sLLN2rkhoyNbZjsUJCoZbws16WwUXuJKPDtz7PtLnKGZNdBm8BDGVs3rDRecvhudQrUq9WAdizdyqNVCJPEJbcP",
  "key24": "2Fju9Hd2SY874C49fwrLyQh1A6Hz4mc4DcDYp7qVHsk4GpwDH5x91RMt4o34bKqiobXzGfXsZvnbdCzR82uDY83o",
  "key25": "4Qzczio73DEpT63YuHDib7WbK5H1bEXetVKKD13w6m48BcHuZeuVAwRxo2L1RfDhKa8kpfKULDN5ddVdJbYuwKo5",
  "key26": "SUHxw1PtPVTRQXuUwf16mreWTZ4TNefYCW2qoGYjaX7sU42XiQ5SecVMThmwnK8v3pXY4v4mXcfbfVJGcw9mWKR",
  "key27": "2CFhm3Z41WeJYwXNHpKWCKpn6bjd8DWhCgvgjNpoUASA37EvxT93WZ4SVeA612Fbz9Vzode9Hm9XCZDF6q4UPPNr",
  "key28": "2fpbDwNYx6dnnvMPgVpbxFR3EZCK2fABHKNsqc3BQHBsvJKzLGmrvWRarXRn33iU1SCVN6tjsEjoU6SC6dVKZa8q",
  "key29": "4LLUuHdCrBe6eadT9R8M2396MyBrAMETdCwAQVzaACQAmXXiRziGrgTETHvmtTgV4X4kRLj28a61CeKxLX8QbdW6",
  "key30": "2Ri5R7TiTb5sAAtfu3xAW9LqFfJdBDuoEnNXKd4H6m2zXjCELFMkqwbKaD9ysgptqA8JvNfam7HU5igTZvenmFsb",
  "key31": "3JiiS8fQFmC7pnorxN5df5XytsSu5WffBJqunTeaaRGKYrVVvsE86aNNbXmAL5i8FoWHR1aihAxFQBV12zZeoxfZ",
  "key32": "56atrTy4QdKbMyebeaTu2JN6Q7FR1LFuLozuQCsNbrQZvPdmoJiypaGcPzNy7SSrkv41nrc4FwNzo1qD8L4UXviX",
  "key33": "62PNsq2GPLegPwFKXe63Y2rT8K1zLZwhE6XfLdkaFvvABmcDFAYWEThqzvAHvwEybz2Jfgv3WLYJZuqYBUBCehhp",
  "key34": "342KEqWU1yjuMHd1sDESzBUjPUZg46F7wxt6PPiuM5YoPP565Xex3Ht7dN9tbpuarLqzG7dWSUVoMraYRKJ2CQfx",
  "key35": "4MeWGid3UuwmGrDrWbKWbxDrWobYwT93NaX6apx5avuZjaqQDcou8qqKsnvWMEvWbZXsXZNxCKu81EcTNGo6xcjh",
  "key36": "RwhGNpeZzMWcWkS3jU3rYWjjS5uwLG9W9fdYJgNS8gKuJFnn96fTLtU1BFzURDCEG99NDJSAqe4eeuio3WuKNqe",
  "key37": "48TQAUNVf9DtxpkgdNSybSEovoZETaZdnEMkWjk3kWETxoGxAen7CdXaqw2z12xgR36uDvRuLDGSMN3bMPwyQW6z"
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
