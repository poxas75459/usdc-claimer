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
    "3irjRJQfNfvJWNCUbSbnnTCgxvQF6w8r3CG61RjXQW6qYywjFyQaq4mHyfqovZpayY3XiyogRqSYXwJW9fsguGNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAZc49gTgXcXWA9PKeqLxjGbFy8RmYE71fUQkfg1kqQueEuP7oQaNjhaeri99Sbc93ha68u3PtqLwroM71YQLx2",
  "key1": "2BBp3RyD2QgGw33EiYtFbqgw5wHFTPmyVhwg3iDUuL63YMaodZ5MyEn66g3zwXBZJJnJnCMY3PVk81JMakzD8oG2",
  "key2": "48c6CQUTtnjMWmefjFXcoWoHx88YQMJTd8HV3gYP9Qq1HmJxqHzQiK1jU7Q5SV3VsYfFzw1MC327mmBTqzh7uTVV",
  "key3": "4MwoosGt3x2ADNA8Y1LWjcJJ3Xo7UBzfHfadmoMo896ygeiWyqiNmLjVDNhU2J8mcRT897PeT1jQu1SZ7Ahp4tJ2",
  "key4": "xMvjJ2pGagNwonZnFDeKB4nN21ns8JNhqzAqkj5UuXBQ5zKArw2qiGN1xYswAaDx8mPPF7ZGAcxpwZX2XT5sAgN",
  "key5": "49SxyayEjJieKkzqLkXSgdz6qxFgPLsieuFvNbxgaB7gJ2FgaLGrM5mshsarQAyUnQu4GWBXQLcapaUEMncmwqPa",
  "key6": "4TArxtvhrB1nEQHoKufJbvNNtw4rSYMBkcLX19JKsZQ6ipjYNEGG29YTVTbUVTxxRwWG3DSCmgg1gKdRRS2bptv7",
  "key7": "2ZSb57zFSd3XYThsUkfG4MoMCag7k2NCtAFZvQj5CCoLtYEECQ8fP1csw7YHcd5jzk2jFNtg9T7mhrat3y1kRvrP",
  "key8": "2zGJFUstbMocxr9xXUtvYYWFmgpj1TQaiRbtYw1Wg6rUr2sTP2cxbE3gUocNXUYfwB6ynkzcwDghZm25P2HznyFH",
  "key9": "651SiSLAug1Wmb4bnAUVvTCqDxQST3CXTbJ3WUQCcHtf8GhJNEVTJb7p14Y2DVaLhnL1qpRHHR6fi4KvhJEi5JUa",
  "key10": "4PMYSjm132prJLc7dSmDuSJNUrQ6h4Nu9PTWeJJNKyLtovJGTcCEYayPnkVeD1zxM12hqz3Bs9VDtWYVvUEhELez",
  "key11": "4gjauzf96iathpq4C3ASkvL7vYEk97zuhWBHaq19dTBoKH1ntnCFtyfQiFz8mDRAqkxsDS2otitrZCM2EBesT8Gb",
  "key12": "5SzUVxU4sn7d61HYS1NPrR4PVgSzSzqGRSc4njgqPzixjUrsbR4BYY2bjVA8zRDDy3WHFqHnJPMxcNZbbCajuQ7N",
  "key13": "24VXw1MnNArrpNUGRWcsUiF2aTer2q1L436WyvUZGoCDhrPrDta1GPPrtuGxNqLZ5jKYeh18i6rHkMTfvtTYFd8P",
  "key14": "3GJqNEqoPXTEKMxF76mYkSdahBtcRSCQRPXu8nLQQLH8rPGwWzciZfLsm47ZmoZaQutLXchaHXRq31gGp1b9WykC",
  "key15": "4vJRcoDaoVWdff712JNgnNqq8oBSSVct1GM8fiMuCoN9Y6qAMoCFdcctujn8ptkeEqCzfcFRHpk6nT69V62ULgtt",
  "key16": "3jUGWRQJ9tSBBnQZ7NRfe42WhrfTtSmcvX8DHnDmARdbZh3NJzg815vS41A6tiNWffaphu5MhvkngNsKcEwCFE2q",
  "key17": "67EAmhaA6qYFtpiYvxfik3Yyyk9vjYbgjsqDzUBAiEWkK9Rhk7XhB5niTooSrNaBg6x5rMWLffaDxmHA4jYkwQpw",
  "key18": "pHbZD5kkY395vQaqCoQnKv5u2QZ8J2E4DMJcCqXNmDRTMUDVKYtCwLSh9qTgUQenbpPfjW3F49kdUjXZZBhsUFt",
  "key19": "3vrtXxV6b79E1p7JvNk7BZSFEwkpWYGCMtRZNVurfz714GLnH4jNvZz1SZdsEgdTPCiBAfwZwWJwDDebTk8e6ZRj",
  "key20": "5rfsKVQyjHZM6BnN1SEVhUYGs7RaFLB6f6FjWLWjQAyRA2RsEDxD7BDZqBtEJV8JaYSZ7kpqZttaG89WYQzSCF57",
  "key21": "2XmL5o44KDtSaABckyYBuaRSPYdUwwVsiEC1PfGy54M8p2t7gry3jNHx7JrhNkyizoHVpGFMASGvN71vAX3GiZBh",
  "key22": "BJAtxLXtqJUaXXiRF8JTKkrjNcsJihbanWiV6U1hGj9mdwFuq3Gv32hFzPAYSLzRAS86Ewtq7SEMrBxFJNxMJAj",
  "key23": "4WXGk4m5iQHCrahXSYm5x5RMdTbooiHvbxnrEinq4RdpDHSYDmuUJpTzsPBNSEdhDy9hTNswrSFFxXrMmEVsww5y",
  "key24": "3xrRWn19Wp1oQCq7qUe7rgc7FNJ4FSFWcCK4CYreNBHV9pQHUuwP6kbNKZVRz9dapG8epBB5YZC8k8yZVSi96i2d",
  "key25": "3PbuhF8CZrWCQmvxiUUDemVr3FRDpv59FTEiRTxidZ8PYm2P7j1m3zn8Ge7nhVggpyqbQ9sYFa8xXfAjhfUoPjui",
  "key26": "2ZoBxkh6rvHn8kVRVyV9VwDMTQMQGWNkpWQjik7vftQ97Lyc4oERjJAfzD8wgADTFh9xhKSW6H2msr66hqvUcChS",
  "key27": "cMjVR6nbZTCkDCfTRHSrzeCs6K8iJeqybQGpLAqpDch2dpcVgKqNRZ7cnVaPfrkhNqTAqii1ZRT4VENShcfFe7G",
  "key28": "31uo6MmCTAfCo3FsqvEMjQa5bUyQsk9VeHkrEhqeEvNxfcmdwaCKwvmrdMpyNWtMnbVHq87LtGxPn48VjMCo8Gnq",
  "key29": "5vz8yLuUTa8QHnBEr75VZAn3cUZSzde5s1uBDP1oruSyzt9GCQNGo9qXW2KPjBm9cnfuvJnePKSk3PBAMzG2CPBH",
  "key30": "5qJv6LdFbNssjJagHw1pXTf5JP5wh9HbWyKPWikXiiNs9DUifgskwc5vLVu4QHp6D1pu6EkxX6jrTeT8NauLuAKH",
  "key31": "j3ae4jxSGs97xpxpq582jrMXtcAFCsfjwSkboBVgAuEhjBEc6RDfJugwAFZ7RE9NkvGMoMW2cpQppSJbbfbH7iK",
  "key32": "3YmVXikb5kjZspr82ijW2uBExj67deBStjJWp8gWRP6F1zdvut6MttYDne6Nxy4BmyYbFa5nsDE1BMZfCvMtcC32",
  "key33": "41Tv53TjjBMSrxKoMXV1PpWme58Gbevq6XrJFyj5mTRbPEpSnxpHrZMBgPt38Qr48QXytryEgWY4XbpEn8woFitk",
  "key34": "3XvoBCkeuYPvopgKksFdqqXm1vt2n6zUKeHwMLFxvpMQiHZggvhxrN5wtispb4JHxBSRAz21RsmbN75RurFae6St"
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
