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
    "39YL4YQhJZCf8Zdi2FU1KbDEYooms5m2qjUAAh2x7MLqG6VAiZapWTAkryELVsXMYtDaGCsxhNj3ak8Qf5EtMtSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpbTt4s9bTCioJLSFfEJ7gFwduTyUQBHT9uLB9hZBrzbmEiKDUSZJTQmC3tnEkxojZn64DBLR7fbfuVnyQmofSB",
  "key1": "Q55Si6BhgRuKiGLKKydowy14Zea9XYUSGqMAYN6oquCSGmgrYv64Qv1TTyBi73AfBD4tv1ksSQPbXA6H3iJ4dAh",
  "key2": "vhcCpSqKvsrKGTkNogg9AwGDoVDquCUdD2fHGJj4mrN85kfnWhSc2mpb3RxXG4kSUrCAbHNsHDRE8gfMQBioXe6",
  "key3": "xbsnD5siJCsxc62trrjb8hNQEXF57HTax8V3CuqPN2QYoVGhPbeacY8DBDTHbHGWvtxdPLsx25189CqQ2yzCfcK",
  "key4": "52TH1fv4eAC8UjrHTRj9Sjoixv2B7RBKyxmVewnZY5MkpykrzfLwNQHj2zFccCyxU4nBRV1ZkN1VeLwZ5bGDp9kW",
  "key5": "2YUw1DYbJWU9bMhTfAiRFbGmhvxKi1LybEhzuaFT3ohvGEmEaHTLQ2mrtRrbYtrwN4bKyx3aj6C9TPWK44ehDNaU",
  "key6": "5ZWVmiwQV63dcFJ57HLirvUTiqKvssvjZW44gSw3kSWFcdvYtbXpYiPTunAReeMmzsASDwDkvn6TE7zz38exdwhD",
  "key7": "3mWjYMNMfy4MPkHSw481WR76hCbirFusLUir28H3o1TvyiNBUXGTXSKSwfboscQ8xWaXDUiVQyit7BEdbXC3rncZ",
  "key8": "5MwFK1HGtios1RPfjfXkkGpKPEYoiAhN8hLFXPdJpxCd1qQEG6UhqY5ZhYygJWVMut7k7r5z9QMVjvqPdxVtRiT2",
  "key9": "43YjZxYEhdvr4XDeaMihYqUFAbNxFTkh5Ye1cBLL2PUDWkUhHpWns6XtR8Nr46Meub1RCJVcUgZcK9WNpLgciBA1",
  "key10": "2Rhn9jGGKshCc6xgjdPPCUPAeDPA6BbQjYfDN1kWxLUMMvmxUx9GnYnjygBkWq6n1hg4YMXvbLvaszag45o6WhmG",
  "key11": "f1hq3pmhtXk9APsk8yMZsD4zTfTVNwoEDwcLAoRgLayHiZ6aaSpeEjD2LfbK1ok3wVXAYnt2r2KHwoffDvGAJVL",
  "key12": "5gJGhJ1cZrirkYEs4AMx9dsB57MMmCJPvPcZdFPR3m9PzdhVviePcBSmTNDbCdiMghppBeqPJDr4CZw3YmPXeKLH",
  "key13": "3uSHFB9u5FqCGqyvK95BxPVbmVi9tUuehkzWVeB8bnCfXPdpL1xiFhYdh2e6GN2bUk9xdPcesKTkbKJvvU465Gym",
  "key14": "4Gwr88UnVhF5vTvocjzCdbGvcshkfLEiRkvcY37FLtyF9fV4CbcFtiN4tve8esmuk55cnSSQpyzpPXk8Lo3kZQW6",
  "key15": "orcW4K5k2Gu95APBc9ixdfyxsDRaL32sfNWWLAD1mJaDvjcUn46a1EZeJWABfU5fZfLuF9CicinRQhgcgJyieXs",
  "key16": "4ChFZDRZ8iQ4bgMkLt5ECSJPYYTCDXVZnRct8te36noVkw1A951EogsLHu1qofzYMPacKfx4BemN2uFQiPYK77Cd",
  "key17": "2DyirtCcN1yxvet3Ypo3UtxBEeGaFjTDQjejEeez495Wr6esXBNqoZoNKiuRdhxjwVFXjobNMGKXU3MUyt4HaAgT",
  "key18": "5gbG2bKmWJrr4P2fsXi3voTPiMRNprCeGF2GNJtB3kKB68bCngdqFgBusisV8k2LT9kXeggQMFKqAvS4JNjyPkuy",
  "key19": "W6NFUX1as4eWUtfEWwBJHP1nH8p91T6iw7BtNbop48nZVE9GB4ir5Jg7SMCG4NihveZnWyMREysCjrNFmdiEzvP",
  "key20": "4LwTySYDzJ2wEiDYGmfXtn1zFqoWgdS2ts8zPCeyg3uwhKKiEDjm8fvwMZsUNLisECUw4C7RrzTAKoz56SgbEgqb",
  "key21": "351wcoT92rgFZKUDbWYNQ8y5pHFAb3uqXdyUZHPmSbDdPtCYsppLKA4qn8wgTQ4CKEGQ3gjK32yH2mqDDxL5XEpd",
  "key22": "5QxppbRRAKUkGDFzkkD2N7sgaEWbnuTj3MD4qqSts5wuRuFwNohUJaYWmVPFRBFm1Pak28EhLkfa18cnK6ssqtH7",
  "key23": "4GNc5WMdtd4jJmhx6hjuVxs94qHcRuxTUqy6gyr2MhPgudvU1RHPKNrhxfAgnSrfpBDr2svDPk9fpL3cwP1HfgZp",
  "key24": "48AuABqQBh1XT62nKtFhmqs5PAdQAzFCZvbaCwoZPZoqLygvnCYzeSzn6YEBXXmj9Xd6NJcjNKhVjFCvTmhPXftb",
  "key25": "3yiBzsSfqPKKLnpAFpvBzwz7NnNz6U1RiD63q5CHB7znxDNoY5hHvigzT5gTCkYAKYYnrH8aTuXYDXaJ8cZsNwpn",
  "key26": "25xwt3EwvbFVHT8FjDr2Vv4Wzen5Xxn5FFw5VxouLMhB7utPzqJ2eEpeJjyJsLzcT1skQPMbVxSRvuWNUUJKWnxa",
  "key27": "2UsZhkizx6RqgU1pQyJYy1kJNaQBBZMinQrjZazFjgB8rnF96VRxiH1avg8qofZDwke3NaMWX6bCExiuajpByAEH"
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
