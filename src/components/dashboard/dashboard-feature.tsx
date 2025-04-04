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
    "3LJyFGZKy1d7GUztoeHiUtoVvAeyTMiidKt2ht72hEyBntoHqDPy1BnvrE6X4mBbmsboQ6wVVmxf451MWFp9TUeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLTcA3vSrqc9N6jBkAFyg34TorNWG5C6meg6Z9tE3kHcp5prUed8bQY9pp3uLyhpZwdZKowPKQh53CZQ3WT7LC3",
  "key1": "nMLsGY4Po2DbLUtq4Hy5Jin6Tqdx1rqmteKnL4U7Z7wAC5SgKoeC27bZ1j48hTnxh3oKsUuNiPCKaj6vYezZy9j",
  "key2": "36QmdDyBT7krqKVfpeUSJRNKPkPMsTvZvgJ8Gm5Z3J4z6pESrzhMCjBAJLiDhm74mvkhyEgBJGertv2ywXqMHPiQ",
  "key3": "5dDVnAx1RiWthNeYA2oCQ5gUG3QJAD1fprft6JHQceLWHG7gZLXWaBW9ybwmtHJRHdti8nub2tq2bw8f2w4bMPDh",
  "key4": "XJysWAxRRWQkhzxq8NcfX1ypisB5EtCZXEUbpUXLkR2PZJ7HcukfzCnXNPzmroN2Xk3R2YY9qeArGokeREagG2e",
  "key5": "4oFsjzZeq1VW4GHCDqvg63xRNsNz59ZxpNMLaMGrHrFBKiYbjEmzSGbXMa5W9hZzBazWkQsdA2kKxwA1CABwfc9x",
  "key6": "3YWjx4YYEENjAbtgKq6CVBZZfYBfXC2voLtLj9VX6oa22DZDAnPZYZYUq4LxsYzBairrpGiyeMeovUwh2fDJ8cfP",
  "key7": "pUPVy6H2dfX23CdyhPGJZWW9Akf3Ci97KibEzXpaSuaXVxUu5XGxUbYsSpy5eqLwWN7cWapMaAvZ2VrX8MHj1KJ",
  "key8": "5Pzj48WjPHwigNzMcBoTtWYn8vi5qmEanZJMcYaeDdk65zigwXCNXMWcD4kRkEc5V1qgk8HvUzn1QvBuQt6qanqH",
  "key9": "5TcCAg2k84VMQWMZsZbJPCtByaGzC3uafiGQW7ukAEFHWf9sVMBirZGiwbxCH6QAa8Rp2MZbnHDJz15pjpoJccJS",
  "key10": "5YrMeb22V6cspAfTcaCcUAHZLLzi1kd3CnvcST3c5xUdp7ex2wzNBzV6y1KdgpvFnSATL1nD3kdFsKGKM4RuM5Xy",
  "key11": "5hAEAZTWuMCneYujwA5ejCYLo7QMWX2jjMx8YJpEwGZhvuiH5Bom6abm6eByHC88Nr82nbqwP3rNc6gqw3bLeTCb",
  "key12": "5CA7LvmDjjPes8jpakXhcbskixjEAwQYLC3szp8zPmG9xy2toto2M6EC7XbrZUCZY3gmRgGr9M8TMFKkb9btgoxM",
  "key13": "39nYugY7wfGhKuLcDmAwT9Bwkc6gXMmbDERGZNs7rjXdkVS9Nkman6sk968b7cNJuJ3Arm8cNtocPKnjCcihuqTi",
  "key14": "2pwuuaN55ccXWqWeM2jxuw4rG1wcGaUAyZSdWv6ZgUafSp67rjY6gbmd5iyysEZrtdozHBqqCAXsXEMSaXQVy8X3",
  "key15": "27RXdzEZ1TsupBrqRvTShbS59nweiCrtXEURB2Bqjy7KuQynoAj4jxrQLjAG4BwgZ4PHbvy2xz3NG9Zg4aBouchv",
  "key16": "5bD3KQNmXwpVSp1i1xVA3FjGzi4QxEvNPrYtyZB7FBTTdmALpQgLcU1jLANCWoBH3baXMjMu99srYaTfjbcY38Fn",
  "key17": "2pWe21S9vLQWzqHJBfzpj4BHXvc7mAsASPSyFD9v5PkDvSJamioNqJP5kR8Hg2mt3rMLWoAbT95ti37QjW3ed8No",
  "key18": "5A9DixXDp3PBMrf3tpX3Sh7pM8xfjA3Dy5ihaxvL4Joy482RpmwM5LyCL1yyhNLCA88yrHwCAdPdCopjJavPvDQf",
  "key19": "5PvGWHfTZ3m1jseHXGvu8rKbYJfvGSvBLU8qu1VZ1Je8L9V5Xpgw9BnH5EgxHjofeN9B8CRsXmB94tw1FSgEKsAD",
  "key20": "1zMngfWFwVnfQhy61irWDbPvdLmwRgLceRUadWzSVy2HQYM6AUccicVL3c3enwXYFE9VjKexBZRectvgioNuvEF",
  "key21": "eQg7hCLCQi7fBmjTBYUXfru473EitYug1FVLoS45w5zpBMM44UvUmettBewgiDh2KcXajgDRLF4s3ZyaiCRHx6n",
  "key22": "3PMyvEppsDPkP4F5MnvUgidea5QUUxU5XqQyyfYVQGfQRnqaPgu1GyTkTG3DP8F6RppnBg7Y82B92opyqd1xr3Ue",
  "key23": "58S5Hjk84Jf8BYjuRVrug4wHsPfXk4HguvDMT2UsUhkNbLjfB74o6sD1AU4MBtPULbZF5sm9JrjRktK4Rq5sEho",
  "key24": "5hNMXB3KrLFCFKozHajndophMgk3PyBffcTB24ZSiwXAPM4vDvFoedfihp3kb2KktAr3EidduJp1Pc3AVuBjyRWu",
  "key25": "uMX9NyWkP1JWciD9jKoTRDUbCic9gPMkx8tXCwxo8zpmuyo8pprZDLASxh8a9wgDoynVeAq17nZyQEGeeuWffD3",
  "key26": "5o6oLEanuTSUeUWMMG9vCJyNDqWbDuqynBkbqo4BNGdTTXkjw2Hu4MGeC3PX553SBKcgqD85fV6ok72C4wJ9NCgz",
  "key27": "ZzjohqDvZVLmCAjZad7CTtM1E59BcEpBfj44xJHAPF3yqfmVmVXwmR8erA6tf2Gmqmme74oowB14FdPmbUu6hcu",
  "key28": "27pMWgvgPF2bkhhFn58GMJpqbksRimYSMcqv1XMRn3Zp7wwKx8amAgnsKX6FbKgrTHZGkcbatygSHv7tmT3gQmZA",
  "key29": "4UX7wrREw5maDu1cBZaxKzWcKsEGcQ6q4xi3sottwBP9rbmTe5NkmLNBkvvpxoLqNhGMdEGy3W1vj73BGuUoaH7W",
  "key30": "4Cj3y9ZC3yaFL9da8dmjdmsbLYZgkCpagCrbTTgjgNfMcuRaqK9HKtWcFKku1sFt6kcNjhMTnyPYAn4GLU7czJ5Q",
  "key31": "5yMSc5P4Jfw4sKy3E69R8PMPcvBQV9nUBYiCe2bdxHPm35rGVPRbqixV1Aq5JxcrURotHYsY6maRCLaaREDseedg",
  "key32": "3XTbjtheV3ScxShu2s4jNYL8fXQFW7S7ZfwsGrAir48ekZ86fgfYc4eNC2h3Pjq6v5mw4DwBtrBVhCCCdQfghzTy"
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
