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
    "2QJg8fPuPBJEvjWSyeJW6rrBkB4TWKj6oGkuEiWFJ9frHvMn8q34pxzbzrkByKLZKQdExLudRhgwcBhggjAWZWnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPVzPsnMDxLmBYaxabriP48G4JB6Som3GiS94yA1NqmScrXjLsA1aYWupPuKQHc37g2WFUpii2RCnMvyGLvtfnC",
  "key1": "5fkx8R7m1rPf1oQmE4TX8eMTgpWz5ttpCm5oU53RYr5Gs16RtAj297LkdhXfFAMG9ybSpr3LUP5VRxypVKARzzor",
  "key2": "2Y2GPDiq5JYLh5jXhYZyZrqhTf8JggBinLMjsBmcb6boBYKPq5W3EhPqVawsoxqKVMxDCfGVbdY6US6Sua2JbQaT",
  "key3": "2ii6oph5P454fDju39QodE9didCnNNLoJJNcAErAC4noPw7xA4zUDJ8hQGdKoiovZh1toF6VcFZe28brTMth8zZE",
  "key4": "U2wbXisH5vv47djTDWpEBrU1wdWugQhr5bisvLKwEgs8J4TkNFVLLoidZ38obShj1gLSgAuU4jdxstfE7vQbZeZ",
  "key5": "GS1FKpNKmrZ2orgwjhZ7zwNHkqQ9XwoMq8rQJCdaQr7obQdduNQ1PAoDuMmg8EwAowXT2PxMKTJQppd7C37m82s",
  "key6": "3bzbEWzJfA2pXMBkKRwZjCaU2YjsYsdN8vjsRdQQhMP5WPPWeXxYrHE7PgMKcjxAouQT7eTbNRWdx3bC25xhRXLX",
  "key7": "2NTbjacM4A7xBfeLvrpcLzR4s1UUXcMtFJmK3nq3r3kMFHDPyaGEBsVgZDDGmVrwiQAiVBuU2AnkWUVGzitGWHE7",
  "key8": "2RWzg2Gb5asA61yErfJ5jssgd3P7YHZokGHPZ8M3sy4YWhK6xwor5zt9Pus1xoXLb5CUmC6gZ1sgW8FfmqvGVNf9",
  "key9": "5xztDrLrgH1i48iQXBFsuewpwZmo4WPjfgJSzqPNXwKyNev1w8J9JiTkaXLWSSa8WcCjDEH79Hn5sE23pV7Y9kYW",
  "key10": "Yz6J7CR3Y5UMBdv6gQ4p8eTZ7xwp9Di574CdEHPY5Qp8iV4pUcv8DBMSAdDmGnatgdva21Bs49GQs8Mws1x2wzk",
  "key11": "2w9rdWpfzF2jZcD4w2DADRs8tNR2Bc7oY7mpJMPoxHLQRjjgrRWmXHJwgswaic72cFQb5thtcgTr5L6kVVsoVXmY",
  "key12": "2ScqVaEq3neYpWcWrxcbz39RVhtawz7p3UBTpDShUdjbabdYt1NWKrYPU4r7hkrURwW4pZ2V4rYcZEpHRtJMq1gz",
  "key13": "2A9hNLxkAB3XzZKkZQZcHadMjnbqUuSnDGoJHcmBwo4iDBB4VxETgWJH3UfiCmhHeW6urGDHNbiqspQMqeDkqdRi",
  "key14": "5kcWD1KMvBz7b3uWDXMYayGykYchL55VpU9i3eV2so7ipgDpdHuqv4JQrkyXUAjQoTsmjgcK73nEeBiAETrjXTt1",
  "key15": "5Mx9btJEaqPCJ6SZXhbw9mP6fjzNFu4YbY4JzhZKGHXFUei1imht9gt5bVGP3GQCvcvvgruLwVzuhcC4nQnWdssM",
  "key16": "2tLyTy7LzmZG7ggnxDsJPiESLCLfQstZRf7KFxfAuGMNbU4Rg4vN7tghEvvcveupcoBaRMBLfzPFP5wUcAV3JbKT",
  "key17": "jbiinu3HbsXYNwozQpPkVUpd2hm5J9MCu5okPKQ2eiMHZxQjTrhhCpdimTz173SD3eVw9x34Ec6qSyTtLuDyPVH",
  "key18": "4TMeZwWno3MPQVevbeU4TQJA6Yf1keWmS6UjSjomYkecnuYAh2vsDJzLbMsDHt7LUXShBYSxEvyZvEBs79HifyZW",
  "key19": "5v1SmPUgpqoqLoF4hbPsKW2EibRxgKpgWgKXJA8djwTjSr12wnhZd3HmnczHhk36jspm6fNz6GefQWUpZ5C8NZ1j",
  "key20": "5UFaVrZHuS5bdJ9Hzd1PF5vzRULLhZgZRUWpjPKzRqQAT2a1BDhQzJzT9pKHEv9fXoUkPpuPUR659kCxQj2Zgxbo",
  "key21": "2j3sL4c58ozUdiFEZFFnfCiYKRKqXUPw8mYofMLWR1EsBdQgTzJz3hWU1Ze5TrMtCX6o9Fir5XGyQ49iHWhnU8Ek",
  "key22": "Vipe8aMiKokq9fKsKfZiH6eX7e2GcXea43Cm3w6jpRZjcRnnsZoDWmp4tkWK4RaakQHm4s3JfM8BruQfkjxQSP9",
  "key23": "2pe35JFfVdLiUY7majgBj1MVqTnYWEBN94VpNb7SuVvxsnqV8mxsEPva4j4pc7exrC8BbdnyQ58GaF2pNxZZC9rm",
  "key24": "4zrB1gwxxfR37ZYxo1q74PVq2pxw75sPvGnPbQ9hMkHTcgesmu324vuWrrgYBEpPqdidzLHP6PxNN9MrEmKuGLGQ",
  "key25": "2HVtjuHNzNKQi1sv1khsW2oDbPYm9HoPNSitY6Xnq83CniCef6iUAK29Vm4mVxjJfHk6xEdR3FTMyaTwe1svmieo",
  "key26": "4NUtfVemG9CmFUEyXLTHQRPVNJPEg6ba9b5JPJaS6TdQmoMxxBtAdQZaGw4JfhhtvYZCVaQ3i2GXg3qyGEYrRuBG",
  "key27": "5PyaVStwpvzwtqoNFZaR1T8FJWrLNyxvy6Moy5aDQh9Wzjxa9NyYmgunHz1QFsEK7iZavUtiEwcHfLHZvp9ZVddg",
  "key28": "9Xw76GqPjws9Tudw43QBE517KWxXweazLb8mXTvHVMzRWZtrGKWXzvayEy9eYpKP6xCe4vinJZk6u1cv9wGnTQX",
  "key29": "2uT1SEHiqwzN7pCNeZ2Dj34cGMZJkgSPpRS3nmwHfoJRP3LqzdMQXstm1ybgmyXCcgSoXBd7jHQFn5vAioGXuXAp",
  "key30": "27EWo8AAMQcVoQzH6bn7nAs6m38kkpKRkwHY9DtyB8p7XC6BjDHT2H4pAbUUw9n7kcnjW46fwwFLvW69uvbHXqG9",
  "key31": "5X9rLFM8VRgWXiWJjFKZYddqEUvpyjhyzEy3j4W1ZKmL3qNeCD2icSk9rFhRUbmJM6BaKY9QgQgNZELmznzpei2b",
  "key32": "FcvUZXq8mspAgDzeqQNFpw3sB6JoVEdB7pv7fhesaUoBMFC8gPwZAyafh5C1YHxQcL4onWBnpnAzgpaxAxA6Pbh",
  "key33": "4n8sNFKbrqTurMcmU5XQ6cDMKn5R1WRTmiXUMVGovgVnKoSHRa3geGhtvg8R4ShkmockovMKrjjGAUDtaZkaZfwr",
  "key34": "4wpKkEbFhgHiKwWt9kBYioxHngfEbekzXT8qcSygDRGtw1PzDmQrWpeFvfXoPkEPC1DEnwQhDBMbEu15KWytmoLM",
  "key35": "3oJ4fthmpfEVdujVqCX96Tk6CLxHU2bFzeXYwRDq5r1fucwiGhcVxr8gVQiRqRi1kJL6g6hF97yRvj4zKxnTsTTR",
  "key36": "3iHHtcNwc3KgoCPpcG1BKYBGeERjF4SFRmTR1knrD3XPgRB53weJr84KpU4ahS7d3URqLYfuNAksvwP7JyJ4h1oz",
  "key37": "33BoRvosbpbdiAmB5v42eeNBwrQfy4J9TmuTNnhSgASosGcMBS1NKHmN49SvRW1cixVNLHEUt7Lc4AZx5y5meg7L",
  "key38": "s52HiPwWz1B8CkjpvhywFa4KdWZgnPgLBgKMdsdB6xM5EQzYfXyTrKeBpnXPpyKsverV1ZF4bWMQPTXpR6fbmwb"
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
