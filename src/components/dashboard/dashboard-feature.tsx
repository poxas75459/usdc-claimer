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
    "56whuY4oyDRoozTYMWtZgMCchKdemrah1U4jiLdR8MczVpHgCwn1Bx5MjPcuiLDiMkwx4ngauC9dAwnSG4mLXh4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwa3Z2kodsDAeWoUBBQNp9TGhxqrGpxMSEQefL2tDNRVNrnLkeptnAzKJHE4LHqkapTsTMTfySkDBQ8D4XJa4dj",
  "key1": "58N3731tdaT6opR1yRNw9mes5rYKJeL1M1ReKX42AzXt8U6fRNeiUXYKbT2TbygXG2eU2gvmd1HvxGc5DMraTCy1",
  "key2": "3kUYNz3MGPboAKEUnbCfsb7YqxTqBp4PZo8NN9fo8CXZfGcKwSBrCbFUJCUxLkaj4SrhHQAXoJsUdnoYU85NzM9q",
  "key3": "5wftdY134KKi5JbV4vUuUMCStN64cFHUeGhvifwEv7VdBaeQzYVAkHoBu4XZzTLFbmQA2L2yaYNXoEUMm26b7AdC",
  "key4": "441Dw2z1tdRMtgfV41172RA5LCdokTXt9yoRdAfpgqVjPv2QpZz4BsDHtp6MkbyCuovaENFeAg95Xg1xnte1zsgR",
  "key5": "5hXx2LXMDZPYXKvcbUayb3Kyeobr6ExuXp95imXqibS8GkWBg559aPG3s6G8bH4cwSRsKUEJbRneA9ML3tkfEZ1Q",
  "key6": "5nqhWmiVSuP8oseEyiAmRFhuLbLTUXZy2veVo5255rxb7xaKDrVFXA8bipCvR5uFF5CqVFjzZ3ytNoeF8212ytHX",
  "key7": "3nHWHU5UhchzDejEKzAfX6v1FcCxztHAzWdP1v4zMibhuRGXszM6my8puYzQ4A9zGAjm6Csij1H2zVmK3HxExtVZ",
  "key8": "f9ear8y9BXeGTYnXsHFcLdLm9vE6FKUnD9KMbhUMgweuFCuDj8AxZ1PrSHk5VBDWaBmjA5QfXhcHt7fAmtwrdmR",
  "key9": "2QtXzF26YBzyx4D2Jh7bNCu9QjQper2nhWtcE5khhAp8z7pMjo4BrVrFBK8Hk39sChNrZVLCgo5AH8tM7kmWsCpw",
  "key10": "314FDosbsEfaKSPNnViSz5qTa3ZgwQ9e6R5teJ9MmGLtj7YB719oxT7BfTyPtuBqQMvByQotoFTX7937q17TSUUE",
  "key11": "K4PFnwQ9ELv4CYbxZQSoKhAB2KDzzc1RmuJfDnY3YH9ugrtSfswAPEEifn4DEYPVgf9nXh4UGbv7UGYn32zhgwr",
  "key12": "2H17T79SmeBHQi9zJAviHWUsEbVgCQitLggwZgnANqRByJUxjQ5gax6Uywrv1HgcX7LuVspW81nRTYnyLvG3iKRH",
  "key13": "66b8RSiMvASiefRH52PCXFNmHGFUHDL5ELe48XRAq4RFWnRaUAuzts16R7Arni8ToL6QEGqxJujGQdipfWnXvXUn",
  "key14": "3HpjYYgcbHbi3J5U8GhxQc1k9W5bE7oA7har6S9z99hZnfqmtUDRpzSwc8nMjnU6g3EjeQnddhCSJE1ARqr6LbNx",
  "key15": "4fRuknhxTXxbUGPG7LZCepsYhhSWUpQCni9ioAHQym8XvRd31Xf45z1aiRzztEZkAmSTg7b4cZm3dfYivHLmcEAg",
  "key16": "4XnBzbv4uuAVd1KWwN1t4UXBqDP7GJCxJkRhM83BeCa2xFmykXLJ4LKppq5mkXfLNtjGUx7UmnApMbkhUgKM134h",
  "key17": "31wVEzgC7oeFq24f1gEmfbJzWbdSLrQuum9V6oGwvgpDYAwGDAb32pG3ZzhasL9QUiopoS3NJQ93Ydm3NngHahaU",
  "key18": "5M5zQJ8hPizNJDZM4UDxA5ENkaaJ8WumUU98uCApZcxjphc3HPRZKLxeqADjxSmJHNzGKiVxooUboqjb2VRKQRYb",
  "key19": "5UZvFeLnAjqUtmh5nGPcCifbLtk9CEtwNbmvjpGgCZ8JvTfrBXz9usaGewQxq1AfHjjyUc4g3BRujvR2u4Q3Esii",
  "key20": "agcevUnQYbvSartUQERmfuwS2rCTPvSf5rHMSsCnUvgGbDDwEexeLGJXdch8Wmp9cyfqWAL4ss7sBnjkVnNauYT",
  "key21": "5PUbGViE8fz5i8vbv6HusxcoJAmUDDZDDr7sXXHWCHGekRReDEWjDXFdvyqQxFhVj1pimCNfqk35ZfSWVv6Q8ZWp",
  "key22": "564QNNvjkmxt7fS3jKmzykDKFW1hbGU3kXSbEcxLBeWHVufddLubemM65bYsvQHAcjARKJs14enDEkM6ALJVqSt6",
  "key23": "4aoXKSpWiuFE7TmAL3B5VrcsCBN3QSZjbrut1kVganYmHGJmeGSjXmNkRjPH4vuzS8AwPV3g1FkJu6EECba36yZV",
  "key24": "4Y9bFzPWtXVg26VWzDpheb5yjANPkHiUsyPzRaKci5XV7UmmfZZsQrjsL9pVDPFU1efwexpPp88kwuWnxuVuRXUZ",
  "key25": "3SjeNpp8Mm7YyTfZDWPC4yKCAwFbHdefE4KTsBLfQy9rpgswUq5CFfj9eQHc8Ybtd7BBujCBMzZ3fqcZVHXzMuoC",
  "key26": "2gpn6A4xYgEQfAp9MhUBUmXhcK5Prrmuhi5kG7cTophuQNFQLx96SLRTE2EnRkm6MfaPdG7NRd9AtMvaFTFEMXKw",
  "key27": "XrFiuqT8CvezbW4HJBGJbVHwt51qdSbEbXR7spvV1zugGtu2Jv6YyC9SuJAbmKC6iBUd41oi8i5XgwCpSyckQnf",
  "key28": "4spCQeF9Xj7GCG6xDnyAMWsTapKf9Rk9t3SuA5Efb9Di4iDbZMB9GU9r3fmHHjvgjVZCLYTE8iWcqd85bdj3cpAK",
  "key29": "2TXJepAEuBnuwZmrM1rpzqeM8txFHXGBVLcJAhDQnq8JzvqWHMfi9dV52zXWysf8G6P2uhE4G6VRJinhZsSPz3g",
  "key30": "3Awc4yhaxyDwWmir9ZVou7uBxi9gFCjhVZrCScXNw9pXSfyikLtgpY6VTv8sKbAFeF2e9EjDQTMARk17PsX4gfns",
  "key31": "4Dizk2ZmnGD9rDvCbGj74NCuffmWQfBbY7WuZfiMx2yDokTXjzPEcGbS9Ebbw86XGAi5Cny4y6yonNjanxNQhUBU",
  "key32": "2Jc9UDLX9AFkreXZV8an9V1dHuQf21GMGZYEhC1hztD64g81Xxps6TzMX4jKFs3KDzhUXSRFXQ29xeg68PW6eRAB",
  "key33": "3CEpL5zCphWFrW4aT1PmdgtrRqh8VquAvm96KhsVwmC6MCgncnszozBFmnpRPyQ2khSZR7ZQKPX7Hy5jV42stKyy",
  "key34": "5yXvWATZn7rwF9bKQoPpZkexKF3AghoN1V4cfGfg9v7mrAQ4FpeUq9AmMm46X5CtcsvcdiwAEFfAUpBaGwwHPF6Y",
  "key35": "2vnKu7S4kHCNrWyz8yjDoyoXAk4Njt2WHo74cz83p72qm8bRBrbVdJ1CpuVtK5WdDNsP9kDh9tJQjcXUz38z2wnr",
  "key36": "34TZdvEn4MnkpenRSMRfcsKYBs5ZpHbUQVtLrNV7m9E6bDSYFZnqU8ECasRRq8gxzEVW98WvnxnKe6u83EUvDTLT"
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
