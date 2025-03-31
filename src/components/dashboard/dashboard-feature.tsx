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
    "3UH1jaP5RcV8PKdsCwEdEZkfNMTSWCUZjy4K97oKexyGnxuAqCTZnSavKGLxHLCGc2jkkK9btVGcPcJg2cGHxdVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iSG8DNrAXfzgfnVuZXKT5tx9GXLuRoBgSwJCH1zsH5E9PEe9YogT2uZmdVcrpr5SJRZnLaVMiKemGKrHx4zXHqt",
  "key1": "3H8rY1w3ccKhBTJmXtSng2CPXTqKnoVBk9qq5SgDHRsyWa3V6TZuwA6b3B2Lq7m8ULRvJZQHAASYgr6Xp1nwYDHx",
  "key2": "4yT8QaPhJWzf8ATwy1AXK8SwtXcVWvzYgpmrQFq8Y4yH5LphPoYpJycM8ppoxv3oJzoozYrcGX3Va1rAztXvVdxq",
  "key3": "5xA8EmkvXjpLmLSrrJKTLbnQpaM1FMdaCwvKcdpZhELGQBqqtuLbrXxJdoXi712Z2zAVKPVmgPPSKX7fc1Qx4W2Z",
  "key4": "3jq7nyunQvZgjwP2J4tdS3mEGmwhQxjc3uUi2s4bRFMKTqcJzFWQrN6UR2xTpdToyhCVfin81QrDSTzEkkoewG5f",
  "key5": "UNEQfspsJUXfQF4JsDdqu4ozCyxSipzJYRrDF66ZjLk3Mx5WpkWx1HLfTbGjYg4XeeWgyVXcReT9DqogDAh3Eu7",
  "key6": "2HyKCmuKCe7hZkPrGY87U1GXgE937pYLWiHuq4vv2kRmY8VjsGNYSuGKUZo3cfDoKGnbRCZTkyPM5J8wtLDsh9Ht",
  "key7": "24P66zcAXjmdtnqD2zxvGgG3XPxdiW7d8d5b8LQLyFaMQiEaceDMqu6dtvxnpeK3omziJ4AB6LEPgch41XxrYnJE",
  "key8": "3R85RQdtiqQkAVhyKzpfEBzp28a88AV3mvNDkutn9T2qSfX2bRedvkhWwrSNQWo9PahutmmtStsLZn1zizWBXcXG",
  "key9": "wMw9ZUGsKZAfFDKMTeFfHuyKNRbSiVoTaESmPsHe2Nd32GtKS25Njve6MiepPpWCfLxzxATWmU4TF21XYm7aw2g",
  "key10": "5kJVYUggDxwkKvuuRfxgLvvHcCfQDt2PEMaa3ErjHGciVscAFkxRRX1HD69GhsVFz6yED5fhSXsQRh3sY1h92obU",
  "key11": "4obFU52wDY3LaHW28MUtjQYbXtmZYjSiufZgiNaY17GQ7HZaE7W2ojD6FNZ4dLJfQ1sYvfTrbj2spNUv8qhDP6A8",
  "key12": "2DnXwZjorCCendRu63aNpQEu85MBEzcU4hh2YjPukhFy7ggdvyRLd8bFWwTEC6jmHfnc1vK28HCsn13rfJtfQRKV",
  "key13": "3w1sigJzf57F38SSaG2RdmpEJShQE5TyeMzUuxhq2ghwDAR9TLDJB1DNV37NzjGZkDxTveLWpYuU947sFRykN28r",
  "key14": "4LF9o7uzaYRNB2L6BD3gZ2NRre3G545Q1FfRA367UdZ7hGRY7P2QsCjcQFzYuEreNxN5qCPm27VHz5o6DZPQVrqM",
  "key15": "4CfATa1eV7acuHM6TTWgdWY5e96iZ9nNFbT7msGZZwJKKrmqhp7gS5N7KPyVbY13pfdKxju9xGvJAAFajKRdCXoB",
  "key16": "2kgKCde41fWCh6drrVbcFsCbtcotgE6f38aCaYB4pThPaJ7UKjUeAZCw56jhT9KCVEUJv8SHH19VeEyF8JMU1noy",
  "key17": "4Zh2z8ssTdEQQXZB7NuHHkbWhDbyptKYDyJke1t973hqXXguTcDea7utzVZXcqMGRh7kJBx316eDE8DkCgzgVKPx",
  "key18": "4sSkiXMX6bFuP48g773fedSYULAtA5K3ycWB4dGB2fPuZB9P42cwroypPnDTkLPAJpABf14W8376DjobQq7oA3H4",
  "key19": "4XgPoRL1AMSB7Tv2yqwyooth8fpw6vLjAh8PboCrjDXv5RRGmW46eJjptPht9q5ttAhqgSnr3ZvDd5KeUsBxwjhS",
  "key20": "3rVRVLWqFTj3VveHQP2JvUAXQ8XJwF9KB4RXytZ8A18oESvZjkhnG9qyCHRfDyhHAEZEvY8TjE7eY6cmz5PVZjWH",
  "key21": "66cLuQM8FRVUpeAZg2Fat9KsXCcPivuNRpnq6m71Q7jANVHxhmnjWuE3byTceQh5xURyfmicpe2AQ3q3PP6hb95h",
  "key22": "5qNJBvJHSGVWCwgQTUcrxEk1gCStKYLmh1CCKTM85FD4RxzeJ3GTFjLnGDmG1kSGumf4kzBSbHwbJFfZUPmyYPsT",
  "key23": "4oR5DGrUYg8o5Rf83dQzaJh2KR6wKWzNhcsFmwHn3c43bbioniYaUy6X6gx3EPcMqZ2LhWbJAcqwyacYftBPK9TY",
  "key24": "5k7CsbiR3hmzHCgQTEQhPGR8F6KtJi83S9fVWoto2DXZYpKAMvamG2GMF1qBFozJUfdgD2xJ6iKCHWKuDAF5tWFw",
  "key25": "4SaYHhNYGDNG2MNo6aRsVcW1BA5vWoZvL9AxKY3kjH21KshTFbCbsg5VSb6x318CT7MrNeaGNkBAYrRRNS6vNfa7",
  "key26": "uKe8mBxeGj6iXx8qBJWtw24gQGmYe9ceLhf68mRCmRmWuiLF3a2Vcb4GPTUc9wUt6uryUsAHEgehgyJvLLUuLVf",
  "key27": "3ZuD2SExLhL6xPZp6EkuVz8DvupLwKbknQFhvJTQXixbbpM7sFDVauY6yUbE7vxMFbghRwwKknmQEyoTA21MSrsB",
  "key28": "5WgU9h6r4N2sQQPtJoKrrCvFX65wdU3FVcGAtdYzqJD3kUoUmeU4UCZkppFMtx4agxqnDCk6t2Kxu6mCq8KNVMAT",
  "key29": "3wBFGZncgBUKYxekWSQFYW3bokGQRghsDBiKcyZ8KMCYoUPtZ3ZXJfFpQh474UGfaSXMW4z5N6ZPvcyp5ytHQvSh",
  "key30": "4mDA4DADTtZoLMZpKNmggdTeb851ATdmHU3CvZgEDJ8jA7YG18TB52fdj6cUqgJYR9aXu7n8AYeDZDv9a2fWUUkH",
  "key31": "5Mzi5J8J3eAmTVxsVQKQoTvLEtJRzt9BuSXvpK53yv8o7dyumxQLYKvrNVdUsQn1HCHwh3yzmVRmR2Grocmy5QAn",
  "key32": "8y8PyhekSSBo3xjhYF997o5MgMjkpGMFHGiv8zDhiCAHzT6URzUM5AsAFi4EBzKk5dMwjtGjVXNBihtktEt1PmK",
  "key33": "4bt5eHFLFR18EYqLhqrsMjVreAmUtdSHXvNuiyRNALMsnF2Lj8zW32H2p234kcNACVJTUG9zoupvxsSUF7YQBGgF",
  "key34": "RBYSN2XdiVVi3uk4jcGs3eRqgsUQSoBcpe2f3XNgp61d4nMsHQZUEx1nXPo3QemDF23LQHq9ZcoY1kxRAanwWsP",
  "key35": "2nDiUxnX3mh7k7Y4iuWGoUc9bwWGHJLmJTANDUgegWEsWMsKHdMNWCGBRxvXytBDrCBfGMUR5JJ22L7yoUbZAwLz",
  "key36": "5QYrVgAFMFjVGLBE5XsoEWGWxxgi48kJ9NmmKx3ZKZE9Bn1bbEkBsiL6whWGQhChvgpkHF34y2m3norezUXZ8BFN",
  "key37": "67L2Cm5Mcp2FnewbwHDwdCQnvpBNg69ZAUtzwWQR8ZhgrX41hT4ZqK2XNvynB42boC2NzKYpCcfjXasEXhzhAeqi",
  "key38": "5MQigyKEtMzkZnGRyvY1yPu57hLaqJQQ5eX5STYp8MJL3QzUKNRiBjmhVVEhjMVSdCpKQ78FMRErbDNAnuMk81cs"
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
