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
    "3t1z6WoQtp6ADRetQCufi5nHbB3tL34AuJUh97scDbH19pWM2w6BPiDGyGTu4CuRgsDkiEPu4DLRyrMPf7PkVQXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DCMU52CA9sDQbd9PJuCu9Ftcj53pDEX5yYHy8R99Vft8BPrj3K3p4nowuMVd1RFPJXCRrGwiC5LjiiMejfxdXC",
  "key1": "5uCUznb81REq3aQrtDtALGV7UehiRKRW3cGBo9w6QvxpQgo8k4yED5iLzJpm1wtnLgnxinKrV4TXLnLHhoE9wGzt",
  "key2": "4voMky8RN1jb1RnQZ1Nrj9HX3Z1uo259Geciviqr21zqUo2B8YMDh4voMqXXQN1h8NfpCTQ82kFgYd3cLZeUouJy",
  "key3": "3jZqGdTuunKrvV4uc26vCz3bpiWJ9CwXpapusxnZhnK8iit5jZgUnSpufFbjwhWnwYj7kW1jv1BVnd1jidbVFpDK",
  "key4": "3a3EVM5T7x9BfLVT9LWD5bg8pD7aDxYxTRUE4GZCawwzA42FLrLdNEAotfk2VHCUHbbbTBtVTHhQZWD3v9CHKPG",
  "key5": "57ouyWFKasUoguRBHqPS6D4ogKmaBDxDBdyyCaYLp2WcBfRZ8rUC3YNrMbevRMiUGgY1y5YY6MBLhkETDdpoJccD",
  "key6": "5aqkmr16JuVzTbZcLDSLDGHXxAvQ2gHCGn8JgRPvDTmb7yPjamgibWazZLNsF3QyEkAsi5o6em87KLCLi5o6HQhi",
  "key7": "5p8iL8Bh2QEWSkNkyNFv4Cd7VJXhtgYZhfemb4EZcpPPCQwDrpmURjgmv3WYk53L2AYYfLdTuh9GmqqkzJbdxUST",
  "key8": "44ZamaDJwabGQe9jySNbGUs81Dnbz5wxyFpgTpE4VPAzpLFkFiTrrb8QULvGnNbe4wtrJWumtwufPa4sStWoN7s7",
  "key9": "415L9XhxQy1dXLNwicCFi3bXq6rnCGXSRs9oN9XVGDexXGZERVB17zAY8UVXofsLYuPo8t8qwvRLwmgfaGeAf4yp",
  "key10": "61S5wgUpA3iPEUcu2UXZiNY9BLycXYtzuJvAmgeKn8ao8UeKc6g8iPRW3p1jYGHD1qrpRy4pKR25W4UTDfhouFxE",
  "key11": "r2KdKuX8EATtEeQaEppfjZ1qPUtiW9NXp5DwkmnMRibVrBNi7kbkYttVoZStUASJPWEgijMdYQVsxamLu47tCut",
  "key12": "5GfNEHB3rJrJkWM3QS15CZwuM7SU3u8TWXVy31KN8wMxGw96vk9guxe1TBRb83CCXcewPCQHBWj9cPuXByw1omhv",
  "key13": "3uMUSf1PELKQowZi3DkQnjZp16dnEXgVXUqj6JtrSqQKvhAbAENAJCZvZWNnLxFDczJ8RUAutaj6K5DpeoMWMp1N",
  "key14": "3UfyQuepFTDhtpEVVfAvN4dfjAZgpJeYeXJgkpyUwEKoJuWuQZJfznVSV3f1fNyBhK7LpULHXX8SmuMs5v6JZ2xv",
  "key15": "j2RaCP1ZXYgYj8P4CtobmbJ8L99nLYwn86W5wHbTgnETekeywdDpioAqBi5GNJU5Wk9mEuFAWEgMnGg51yMK7ny",
  "key16": "2NUTvEKfheEGfYymdJ63aZ86AxbkuBqvuy9upsoYHpFUTwM9nVLwbXQwMqLLT6VhDfuF1NRghGpvedrQ2Sawk7pq",
  "key17": "4MfhWHVKGBXz48fs39bpM6J2GS7VGsGzqB9cqLGpZmU6zvXSeLQ2cc6CQWGEAJ5YHvnaUqbABur6osmLuLDXaxfX",
  "key18": "4XUQkpdu2r1sSzKeGDc8TkE2sdfubfVr5nyNJtdRbpoeQw6T7BsD6jDVgy1dV6tgeZdNx8zzQpXFyUS4mxmoSHEB",
  "key19": "3eZ3LnQCncpc6rqr5S2cwUXjyLJuig4nfH6UsP4YnVRFu73mc2JikF4ZSmqnW4mZqH5hZKQLCK3YkkxYELuqj3mA",
  "key20": "3E8kaUsuPgHNBr2xioyBBRjBbQFevE4w5VBtnZ1wnPkW9UjMhLrrjgaUEFMYRE6difWDCJGC6T81ohcWewhRptVb",
  "key21": "3ukLFigHDR5NV2VKLZGsaAjTXnh3HtY4t5zvr7iqpHh54E16aGnCTRdy7krjRQpYk89pyxiVEhTU7UFQyYQVAX8t",
  "key22": "2bcSRurKrfYU7EzWG3oejYdScNz7vXcv6VQXEUouzSqxGG4kpQMEGGVwJ2PbJ66KuVCNcqaarebvcf7CryCoXKxd",
  "key23": "5pN41ggDKn6ZS2pdPp5yoL5abR3urNvYYkzd5cY9wFHsz6P2nWYVSaUiCnFNpM39VByqWjyPP8QNmgmhVCkqHAcR",
  "key24": "635xhZs5u4RHb1jJD6iG9wdCtXmRXQgBj8qjQUCw2NxtKf5s7LsDcq62Zrz97MmY7K1bpK1DKgpuRL2nETjy2pts",
  "key25": "3EMuSviKMmdu12e5drcAvFDjaUmWaSsYbSF9d8bbb2MtwNPZ2pDErnGcpu2M8zZxvwDLmzYBe6tSU4jtWm1U2ktU"
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
