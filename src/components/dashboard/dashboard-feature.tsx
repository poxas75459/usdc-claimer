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
    "2kL6zi6Nc6twyNpGLGxBA6We5LL4S8aSJarZmu4pGAbWZbPe65sysyRgqkGgNEQcHnGY8oy6YyEUHuP4wBsAPYfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqKymkKKN5QutG7iXUNNgx7Y526MHzn41WSK8eyXGhRWnkNeWiUaSmuk1edAJjA3DeN6NUcyDi5Wi54Ufj5j9Lt",
  "key1": "3Do9D3cGijvfcRdrnRnkw3Q8dRXTukqE3tKgAirUT4rf2d1Jbdoz9gvF2gcChq3mQ5EWVfBAxJt3Q26TeRBPC2cF",
  "key2": "4Fu4aFKPnmJzjE2rf5Cs4dfv5aqqFVAzytSAGJQK7QPS8YcYsXMvXg9Jg8GcrajaHECtZgMNT5hAYxSAM1jrFqXx",
  "key3": "5Q2gvgEySTk2SbYSv5d7JbvJZ1dBa8SYsv4c8eiihRQkLXUPmyWrwYZiGT4vQKaRAQc26JNN3F4iQq94E9iPMKmn",
  "key4": "2eY5nhxSawA7VTNePFxWnxW6ru9ebkDzbU6mtJcTDKGUcbweAu6wJ2Xv1P4LqxqSL4HhqrZznwvrHCgGiENEtqTd",
  "key5": "34kwsRDNkKzVhBDKhx4gdYXFTquHSkHeKoK6fmgUvQP827PJCdKPMwimytC4tHCEHv6hbtaNLRDtBL1cByzmxbsQ",
  "key6": "3E7kQWhgFtwdYNBWNtGSd4Ny2szzEZaQcGR48ypHPAioQdgoX1MLHb3rnKtJYQCZuogSvmJhZmWbTsPyK9JD9tp7",
  "key7": "5frZis7Vsj9jdi6XAZcTyXJcWyZHQpmai8eyMSGmH2MKd2Qz252qPAAKfoPRMbA3qbZacAJAZUueFTTQCD9S3hPB",
  "key8": "5mye3LwSeBShuTFiEpD7jkxvrKbEP6bGUPDTZSJUvtmUfdEYwqMeBNR8aqrhA5GPsWq9zjbrUqF2QQJ4Si5ezvrx",
  "key9": "291yS8PdZzkXvvR7UXSBBNdF8XTLGiQYBmaDZDSbapZTxRTz5YQHXRqujvh2bd1gVPbgqMXa8JSRawQttdQF3gj3",
  "key10": "3FrttG9ZdHEyCmBZEyY1QF9HCb7Z1Ba4KdACf3NTaYC4m3cMeb8KdS4ztbt3tEehiPVHgQae6U272QqX5SHDps1i",
  "key11": "2RW3f3qCPbD5Yq4MxSTyP8VxibKdhagfUB6Wp8rkChZ33U7btDqXJafC3z4PeaVMnfy9ftdbsj2e92JsjpuXqCNa",
  "key12": "4GRAL76sEPm4zyS6oAYEPbaEww7MdePAmgd4jNA7jZoXzGLyNJJmQRXKNzuuqByEdDWdAFvDNmqtP6QhZ9CSTirA",
  "key13": "4E9nNGxVUPJUq1mFw3pZri1e9GtPp9W5GMo5wUdnwLviGManF2JyQ8piURhfAJ7w3nnTzNnaCWjxM38F3M7Jrdki",
  "key14": "ViYK94p34AeUwtnChjc3kbMZYcNP6aMnfgfwyqpvNn815cbEfW3xk3n4r1CkoGmqKiR6tTLUZYjQDdBzKvanchm",
  "key15": "5Coj7th1TfkkJVbWWMK36cydC5vjQThurUavDSQUcsVSYHrGHkH7saAKKcKyTmdTQhAi4o8an4d51NBP7p4vh1jm",
  "key16": "5kXh4j7fMVkErFAyhjRr8dxGdcFrYmH2n9Wbz4kVceDwHLh3ApdJ4rYyyy5Rw53kxSHeogUXDjKuaKHQWbuUw8ax",
  "key17": "fNJ4fNS4Z9pP2npa9fC66u3z2TnW7ZENrhiwS4DRjvSwNJBkRfLhTXvJof6oarni6UwFJfBaBXobA88RYBo63Cd",
  "key18": "54CxMoNwJuSxmHzcxFM14XdCfgwGUrp2gcgqCuCWavsweK8vxDbVwXy9DHtvZtMCbJ8rEdVvzwiTkT2wAhr2zR5s",
  "key19": "3F3ujbzXBGNnwGz6qsgxrx7NJgxy2agpTax9A9pMQZokVvBmByHTW1BVYR2JraECafSJbt3hRGMxr8USxKqSPGHm",
  "key20": "35yU9HZP3h9ZahaeYDn89MXfUMy1pSha9YTBCqDJMzhjcUQba5GDmo9t64awJ4zqMVPDebSSbTMMXtJTbfCBCXyM",
  "key21": "4ByKhCZBgRtnqbQddDx16UdKoJgL9FE1yt2U3xfkkduhenMYfBDyetmAGZ9nfxkyFaEc1W5FVZ3smKKG7Wn875aY",
  "key22": "635Po9iUwyHyHvsuoH54HeZRtWkreYaV6hzRWcLFmzXxj5d34PrLsr2j8v84AR1qBUBozKzBW3SyFR6ULHpaPMj9",
  "key23": "2b66S5DZpG4rdgVYBY9qLd1uswmSQPGHKUNK66WYDeDnBVhWLwqDV2qDdj3qrziUfQioHE2dA3AFuxJxj36Ck5Sp",
  "key24": "38zyRcrN5QBaajMBeF5sbm7nSbnduoKV5mfKnetfh5JQQpJEoQBqH8CS7znkYJEfMLw1V8NGeUWykcV3iePqzomK",
  "key25": "3RYQQq9AUYtHU3oNS6wxGwMYUWMkQ7ToP94R1LvMNpWbUDkMTouyZMFeW7y8cwZPeHbCd76gNtgJVmgWYBH8f74R",
  "key26": "5yyY4AxZEKbDnDd44NCjzPR12oPydjd8eo3w94XASPrsYCoPCaLo82uk2VDPuAaX4VcwsMCVbD1prLifxn9j8Z7V",
  "key27": "4cMBp4NEk4rw7RXCGvLnFWxH66sKWoL3ma4mF5mNLLSxCqznNLqsM3hArs6Vsa2z5wNAasZWHZd6A9iqabTLvTWF",
  "key28": "3JAKVs7pZjaWv45j5S85La2y484tPCF3uhfSXRMwSZEVqnPkFJbhRVSswiXkKJdPNWJwGZnCXhrcPKoHY45xwE9D",
  "key29": "6towhRiJqa4hRLks9zuZBzb3JCE5rZNipPvW2yYuhZ9N1dxGJmQxva9YzPjT3fhbU53pfKGXNgMjoFpzEHyvDu3",
  "key30": "2p5wny5dcjECr9oPu9mmhkdMMJcj5y6Wm75Bucy9evkvXg6pTjY8Umv22FAVopJm2D1CF5Lfaw2uhQ4FiNhcuzgS",
  "key31": "5zS2ttkEinvX2v6iAF74PQHPa3eCZPeKEtBi2o8rAxbgpV3EtU361iSjcM5x1VQ48rFJRKW24pD16nxqcUuuC8C8",
  "key32": "yzqQso7pA2ZRMGJ3obJ8XDa2xpU8mryLwFhcKKz6PvnxDhVPKKqDYAasnaRjzshRWHcRmtZfrcdCygzW96dkb6x",
  "key33": "42cyaVHK1ZddxHLPKveFP2DQj4dNkMHpsHHfrDBNmFNFb7PD3zhL17UEFKbrBRhLeS4duvcZ4dn3yTbbDyUkzQBf",
  "key34": "iZLRQMvL72t1Bkii3AvcjagWHH27zy2dudXLv3BCa6GRiQwicbJ893GegXd6HMUciqnvEJnSPMQpK2MdU1wHw1E",
  "key35": "4YidttPzyp9F9JeY8LoUG6HQaa7bULbyn6HhU1MMhc8xXrXJXsaMEKMxCMqEqDYvNa7dDdMGEeKQLVfeTnqQWxAt",
  "key36": "5TXEf4RYNEnBvPYad5ydQaMUiNEwFyptvPDXtRHMpyGUhUN3K2AjcfGiWVqKytd14oymAVpqwhU1DSPACGCHkF1m",
  "key37": "344pPeKjNM59cVimGf7WF6KMwS9kyM9zXStYqHTYvx4iU7iGG38u9YABy4z2BymjtffxKCaq4gpNQ54MrXFnofiU"
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
