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
    "4ATGB6nRPrtFqfoABbTtQzCuVe3TQgRsMGybactdKd68Qq9ARZL9neUn4XN1o8JVisYYwUtTqNmjbBU2zM9rC3y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c82TWYYkV9pn4t8rbUXkwRphboo9ciahSR2D8yzGcLcPfrPE6cPhZwHHu4eTXHhWU9jLY9y6T1aViNKMUtk5sZz",
  "key1": "4Bhdg5bGoQ3gRua4tB6pCNhVJipzee2evXW5cjU8hNYUxc5zPCBiXTiNqqXkfHC85DXCVS9GhpLmppYHup3yqd3S",
  "key2": "2g5G9QTzGr3eR4BTA1jgHhLsDkwoH2uSGQK2aTuCheWpP29ruBJUDxpedziwcPhLt9TGLn9qQaycTcUJBV5uXzZT",
  "key3": "4RpULDyKLbiCydFePFHtnTMxKR345hajwN9eM37Bsx2bzq4aJ3LMzXNpBMCeJ53pPKr6iFJVMDBfTgHiTepvrotd",
  "key4": "2w1SdbZ64uLfVAYUdHkff9h7gyTDXJZQuKn3y9evE1ib6Csbq4FZD3m7hfzKxGnkQwtXrRQogmQc87HoNMQJaBJX",
  "key5": "55VH51puxi9bJbCUeNRiGv3WbN5YnSbMXT2SQN7N7T4MmMmmZR1ZG7BNtZRzXnDLTFeUWfVUXAE8aDtAxTDp6Ucu",
  "key6": "GJ2zAAsvmwbpW5kLcuAawvgANw96BYuWwqfGHsune2JEUFj3vN8ir1TyU2fRSyTaQ8WK53uo5fJgierNajhpzU5",
  "key7": "5HZ6ihwLroCbcDsgXn49Vr4bHNjzpo9FR393qoSYz1Y5qu2frC3YCPDMrTSoAb1uBqcxbFPeWoZ6kbPbEA1KhHBw",
  "key8": "3jPSYAMWj56Cf77asJk6yFLKZnPodyNebNqsCDJjKboJTFYUGQX3rwPtJawmnAvGtyeu6T73F7xdToy5QVt4uM1Z",
  "key9": "5bcANLxhtjGTAwq2v4DWVcW99sdFufZ5MkRXg2Ce7mKSoB2gAJ1s4itLTyTwnxJm7HdKJLFNiYKuH4mV1VZFkRfG",
  "key10": "3exyetD4NjHBPsbeenPhfeCpEqo6S2LAEEJRbpF93YVKqiWRRJK1DHfF4tGTdKaqdvKMct5khGqbx9SfFyGSWvCy",
  "key11": "236bmfaj4LnDXqNJKHhX69UDovkUzYGBZUkeyhS1XZqFgnJuwTVmMLF8nvVSSzjj6sZLZGRjgnYEQsgPswf24RdV",
  "key12": "66KLmFSqdxmrLFBKVcnEUkCArDgVjysSVLdTcEEJTgLn48ursbpGxYNeHnoWHwFRvoCgSRxH6ofTtZBf4RfQyy8X",
  "key13": "2KE8n2nSC72XhbNUrtWCSU13dGsCTTtgWYXHnnERLT88aiBpchwsSXJtNiDZpihjAjf3mZgksa7QHha1ogURiMmR",
  "key14": "2hhLyHizX9hNHBgBmZo521kiTecxJ8MVe6pmeXb1WKcokf6ExXZoJDhEvEV2UzZLfu2sXma9iboUu1ZbAL14GepB",
  "key15": "3VJSTMiqNLpqJGfiCBKvPZAZCe1djJAnbbu8qrPpGrnjy5s2Ey1q8aFg9CyuLwfTPdMJpiJgZXGoA96MopqfKP8M",
  "key16": "5tCwXUhKsBnVtHWc5DmikXgg22FgFMGGAkCboXCBBFGqFjMz8b2L3ZQhJbXnrGqoSt6C5wBnS8Xktc6CQGq8NAZA",
  "key17": "2W9U5pCgUsCY7q1ZXQxxbQNayamhUGWG6dzC9o8kPdsfpPpBUJ5PH5XDd9jvFA1gPKYaapqjijaTfpeuZSTUu44y",
  "key18": "3NeY5p57jitYzHgiM145ENbnSzPa7uETwXvqp5xMpUp7nNvWwg4XsrjZpKzX7r48ZFQZ5gv5xc8ykSoQNzYjNdWr",
  "key19": "4uR1nHiKE5aF3btPWH9KKXUYra1ENkho4Y4Drr15ajLnVBKDVXu5J7QNZCdLUjsoFh7xbrutgjXeBE6HyTGChDmh",
  "key20": "5Qf3r45AjQRWNy5Wmx3PREkZrAJHUucucd9LjAtPkbVJz8QcoXcE8aFCJzbZExCqQMbHBPU69fQwxrQ5jfhdm25W",
  "key21": "297tX7BeBYiipJEJdBbMPmvuYWhmwRCr9QuDfLuE9PnPMEAUvS8gFomQam5RuYNzDzffKb4bgG5KyPDXRNBvjUg7",
  "key22": "Den9RbHBJBMb3Cs8G7pSSHCBMcRPppTaVToK8MGgTkrSUiVeX31vkGTN4oRHGYr4v3hXnVShiTh3TzXVgi1y77c",
  "key23": "YFnDH24MTKMudh1hYK74tyMwzPGzsmDrgwGrNhq9tQqpjdbmWT82bK3qj7i4Qs3qJzdQR2kwEeggfRsYFCqhrqM",
  "key24": "4zjfBCE347SRKuNegnZekFsdkuQSdPYt7cJhpX4nAJZhK3G6BmEPgjKM9YHAvwKjSSyBCTG68469nhc9u2nVokcw",
  "key25": "qFpL8sRVP6gWrZoh1KaiYxa3GZH26Gdufs9SZ9i2zBW2aajy1XjFnZNTBQ68C16DDrQdkrvLRXXh5vB1vAKecmu",
  "key26": "372WmVzSQvZH1eLNeJeLFkGhWRrTsyRAXt1vqqd6ALbVBuvFb9E2KNPweECxKeSth8wpQKHgpfBSRAYdvRMxbCcv",
  "key27": "3jTwnhZDiBrqCEDbC8HyDajMhAY7TQsyYhLgHxjNo3okY24cxFSobCSJZA8Kc1UTTeo92HTGF4nxrYuzs6iK6HNY",
  "key28": "2361B3N7DdFipynTTeVsoeRkDLA7bjSGrWcRxDdYHCTtvEmVv1KT8xMMHvJkk4aaJQ4i8q7hE4uq5uve8gL3XKuF",
  "key29": "dYzNWrSxyMF5EPS33K8cnfJkqQdputbGHizyDTiA3PjfwPCu4xV2aHaq9NcjKSxt9ChTqJwcu27Mgawcxt2QdxB",
  "key30": "4sic28HMTsPbxLsXEPCKXZK5Ccry6cjKrYjYR5Ykhi6N31mW6L374hyx7TRUbPKqETJxB7XRxY793Rg7me7PWfRR",
  "key31": "3ooDtnM9BW7DnEXqUiSqeVRbfPm8iw5Wk4pLpFx1VAc69dcJ4cELiHs3Xx9LfoZLjhSwvA5WBwbpGiGkL9k6aD6E",
  "key32": "3pGoAWG9PAbXcJZmUUWK6ZLfre2v6VNeXgK11Qki9Zkad7D6Ee9itNKgNw79wXARNvvvA1giNYWWuRL5MfMGDrmZ",
  "key33": "259jkmy1S5VCxTbn7KnseBj2grcWe9yx8U2Sirw56TnueZQTutgGpPysih5r8qehCBJTU2bC13cCsX2E8iNDdPuC",
  "key34": "4n7jbueMErNbEKQ4zMBNCTPPGcKsaAUt2XVwtJfPwGijHJdenXLsityRzUfchZ3LuDaz4F1Rx4nPfEkcMsRFysn1",
  "key35": "4rBw1E6SdQ3Rgd8NjrLBMEzuig6n96q32He8vCo1VurgVXGsQ4VBMq9nPM4DbLozSAv2yLKmZrhKvMvBJ45A68fP",
  "key36": "3HX2dt4k5XRCgeYpZxYk8fehZvswcScSbGshCn5Hk8wsVb6NW5CW6csPRzW39aiLKa6jaj1MijKYexoeQfcqtbWT",
  "key37": "3dbEyNxATWzYEF2SohvF9VmNrqzi2EQUB6aDC9hahB16eH3JGFUKtApMZtKF2jovp6pzSVYEt9zvyPdpgcR7MKuN",
  "key38": "4b5vjvwrcYVkg97JqJxPmiJ6jBovNNhuScL2VSBVZFbLTDYTspyTRZFgQJVpu9JcTuo2GkKiaXzewdYj4XympdCt",
  "key39": "Ug3VvKbaeiKkuTQ9tonR4XNSgERx49QWo6wLjqCP14NSi28D5SAF6jNMK4xfZNRRtPR2UrRUyyMiMRMP2YcUhsC",
  "key40": "3hX36ffsqqao3YsPHpgSwnRsdcoc3qtDWcFtK61mxyNxvdgW84pj3AVCd6K33J6MFx8NvpZskovZ1Zxqotr5Lkfp",
  "key41": "5gTd4GGDicetiHYh9WMK9FgQZxUsvGm3BZJEujFd3QJMsrdKH1fsZnpJRKQ9L8v6gEtFnFjLK21Csu5wdq1JXx48"
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
