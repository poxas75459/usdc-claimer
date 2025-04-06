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
    "fhQ24e8LB1PGHDZfGnbezHS9HkcYfG9DTPKAo8wLvJBz3zmVh79mprZ2bs9RsUuh2SqBD5itbDXC8BsYWNErqGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n7F6b3SfRsQdDZNc8naDPYJLj166NGMBecT1fjrJBrCgE95LiAsDP52wJhxLyF4pNjMbs5P31442TqmrvCs9gRd",
  "key1": "5wiLAgo3E6XACqkLBMEB9CtcLNmHbmuCspExTG2NKWEK6GeQUHwFmxBNzAnzBRWWk1fb1ecz6uFTNUQzPpiyqKtS",
  "key2": "ZKoTg4fMsDKL3dsKvbkYv6VKkLcSqfzMTubS7iVXqzbt8DBdmxV8mfExYDFVHxGBbGbpKfGNwjWLSKrZqdLH7ku",
  "key3": "3wrhLGZunm7x4SGqZeD4pCL259wcRvEpFp2GfYPW8pFvyb7Ummks1Q7F7wzDG7LWynTUumWxKbdiZA2aaChxKfJ1",
  "key4": "7umj2CCv2DtDdfcPdzuwUjguUhMhqqEryEHJk21HgJnMTmZNo4jxKwBvzegQW3xczRLTua4RmVK65vEHG21yVmr",
  "key5": "CjJStc8e8qAv1imgnDbactavL2vYR7YqAbrSYZgCgzsSGN4K12uKcR1vuHLeYpwsEXhgqCGkqdKrE5q4pvbDe8R",
  "key6": "3FtrGdqKwjLx24YWUgmabYby9LbiCvjd7hLJG1D98ggjyFPtu8yeuxH3A4AKqTUXDQUNzg71sYdAkHg8YwAn3R2u",
  "key7": "351JzFukUHz76khjBrPd2jz1WugtEMqTNQ1cswvjy1GE1gWmAYivjXN1dkcs9GApxEz6iD6yn8bbtrP9Hzf6objT",
  "key8": "5kSUxZW6aPc5wXuAhQUrZAY6Rc8imqxPwAPSyraK7xXqcZAKyxgFA4cDYADyWJ5to7hcqY5AFZQM3frgYeLv6Y58",
  "key9": "4NFgQPCaze4vF69HSrkyo8QGTKexU5hEtZpkTH7xLJ879A7RPDUfHXQob8dfypCpVLmWmaKkChz9hjRExGfpSbrd",
  "key10": "46yo6SrgAEhp3kqruzNgpJDwigks1yJR7pdc2FCKbPWDeJ1CHptkzFFJEDMbxPYBeNNPNuqFR9DXMqfmHrz5K1vR",
  "key11": "4MjY78wJkMjXftNA73Bu4AN2uWHg9xNjVF4f8SRSrhEHHzvWwCs1o1Bxe5tNMWsmRht7pWeVD87MsvRAkcUwHaY2",
  "key12": "32ULoBKWBVomzmUXrP3B6QdcySMd5zL5Lc5W4Nwoby2HL4QK3VxinA8rCzMCi9QmSY38LH3rjx5faC58bZv4Cj6X",
  "key13": "4XpZpPexjxDqhTanPnGLAUmBssM45PCNF4gYrimy9XdKFYnoTsY8r57LwNgDtARivvThTQrzmrnRTFppKr3UspyW",
  "key14": "5GUNTzG8G2Rkopys2yQYJaK1AYrqv15VHyF9EyVX5xNHpGxZ1azikE31GjBNJuYhJVUpyt7eNS5QWnNYwDNCn7dF",
  "key15": "3JodNifm4XurgwQHFBwh9c6YM6GQq6D3BHsjXHikA7CqBxM5pd1XUh3igz5ZybcoepZcDY6Q7nbWs5C5u5NHuaVe",
  "key16": "TCNhb1EAETT2c8HresdmprwtY65Eb5B7zV17Pu6cgvLgV7UfmLtiyVfhZdZfkagPYRqnvveKaL84PC3BRj228cM",
  "key17": "NJqW88xD7fibWBG5Vzf1UazvEzmWEgvgnFx2xZTHinf4whPbZSCKgsAiLorThd7LrqwLVB7QtouDT2AffUo9FAi",
  "key18": "2ULtNEtTpGGRGBTWpgAMhmVDXB1uYDHPRqTb5VMGSh57KhK8FKZcv7KHtcDmqnvGDdoZfNPH2Kq5zu2Hg63kLW4b",
  "key19": "5MfPo4NgPS4JuPNKLa27TB8inhLHAj4evYBr7LEkGe5yck68zPjqM5JKzb7wMZY4Vwc7Ghgh6hkxCQ3Hyq8dyQ8y",
  "key20": "MY6YNbamEFYug94SmYgKs8RLfbJvcNK1XsxHpLNP4JyqxC4NcAQqcQHBz7CqVeoQev1i9bBr4ubVBXdybNVwHmf",
  "key21": "3htsWCbPdnv2xXqWNocQDVLZRZjPXQ5PYN3T98xA4AAkz9C8Fm8TYF5LM3KGCLpPF4Ho2R8PJg1gTdFKAxcMvJXc",
  "key22": "55xMYcYHHRa32QfTGhy6bjsC9e7bG1smuyCxydYr2gDmUSiafQioFAPtpB2hDgnHb3YSAUL1Z7VWAJK3BpNKDRTD",
  "key23": "2J3xom4re41YdtEDeKANd1dSRu75LDdzk2AFge4Z4jeDu98MopFvYBcm4VUmqjmRTVRb7ESXCjQXE2ord5oviaNq",
  "key24": "2az56hG4Sng8gPPxVqbYK8Zpf6xXQV8FUY2CCi4nv6UbFDoDMxjahe2dmK643En78pA3wjpBqHJZwQwi28yNkEuY",
  "key25": "6jYrKu2n6fQabsC9VowdYX6pk2hTAitW576h57YUAz6Tc36X7pwgfa4ygzxs5juAVBAeDcAiJWT97cbcZmkqZ3c",
  "key26": "4yz8PbZcTJG2CFPdbLfxK6NQt48ZbcPirXTscFiDV6j6unQKdNxcY48QrBmGCCLFs6upU3WbQViBpMELW7ARXeoZ",
  "key27": "5pAZ86UhmYkECKTqnpEbUVagcUMACAoRe4tiD3jMMbcevR8LA58SEHPtUeq1uWuXMywcGKTG5E1h4E7dNmoT7KyS",
  "key28": "3sTG3XyhmXPYqGyPQdGZe2RaXE7biMqXo11QqqS232gsvjwA99CkJ8Kb938KQFbnPbWUpS5GqjmMGfhA7WhFrtR",
  "key29": "WjkcsE8x2kYTYJcXBhC2D4hU9qf3GEjeUqqaF5bNVTn7MD5mahSBfUoE5B51bYi6W4M1N74vGJxKJKn5zf2pJtU",
  "key30": "dqSYk4LgNdpA9VhfoeocMgCQZMGx3Ek4tkY3ksjp97DQdvwnCjr9pKrFLRiH431EkRsWDNStj1pcRJvBCY1EEsN",
  "key31": "2ehSPf8dcZKKaAHW4mUFUpFGQbVXAc3At5KuqQrgCue4HTc2UugA4dsSUdcUpCCys2DxabvKTf249owFXaRZ368Y",
  "key32": "3sbnWboy2MwfNVzPUjgFN83DPppVcKfAeKHRrdSUs8TxfKzvNYCjHoZL2p9B9jUpsz11g26HhBea6mDLcEG5bG2x",
  "key33": "5KGf6vKM8SvKuhvhxUYrr9QhAi4UqmYpmBaag8QHR1UQBCZU8q9EoYrXLFAHTaPcAv5Dga7crM2T7pLut71c3uhH",
  "key34": "KwVMTb6V7FrJpiqNhX7ZY96Ntt3GjHnNdB6Tn9yRJY1DTvrbxM7LL9JtwRp8CXc24DBNqExe3weTTdGUtFQqABm",
  "key35": "837i6vAn2H5jQJjhSBmG2TLz9nCLqSfta6kFnsDAEnnhFoLjn6YcPBSSwKXvZjHVjTtBW9paRS1RKZZwLPBhmyc",
  "key36": "2ZzRybdoSWHgzhBPxN54Pjbg9Tc8g4h7CZXBvoJyHqz52JeJUZk55GTgDLEdUvfqp6ZYFHD6bYkhBYhFmro5uewt",
  "key37": "4G63W3bJvKEaixBMRmMNgW7UgZ6BJBcdh3A1fhnEk81zYnae1GWr5iH6Zmt5U4atg2gY1rzdy8VV2o2PRyiMPH53",
  "key38": "8grkkc27Gd3riaieXrd6PxiT8XCZTdjSym8vSfqdSN92v1rtcZxxCxfoYL1ttc5nUVcqTxsVL2K95NaZtWmPDi9",
  "key39": "2gmZZCFLFLWqy8K99yLubQ9CT9CJtEBc6drMfJwsv6PgSzh8Pz9Seefg6aiXJrCXtGtaymKjsEFuTLy6DoNZanWD",
  "key40": "5VDoYmdGm1JWwwdPnTmMs72KvwfGAtqAVtNtW4scWht4pPpun6zY5Dfaa41A7FmeP3qRY9zhcjERxuB1MW93AmX7",
  "key41": "65FMfY8gK6S66PZWGWpUaBNLBH3Ry9agk3ZdEzYUmvupT2Pcc7Di26oNzHqe4nyMFmXBVYjws4pfuXXpCSVcBjiU",
  "key42": "3YvLDsabvRR5cjnt2Wkk9oopScTKT8kmKRtAe1ktSyRhCk6aCms8xpdsTkANY4RCr39NiufkA1MQF8FZCaNxSUoj",
  "key43": "2UQGEkuEy37uxBufP954By33Sjv2gFrjMX2iXM4sJq7Pu2YzuhNGggVPchYQyc6Q8GVYGJkUb3WrcaVwoCa52tKA",
  "key44": "4ScV5nQ3ovczYcjgRa8JFwtc9QuDfxDNKfXmwECdjbNbCsG5R63f3AHE2bXJPTSkHkZnxhMbtZM1GHS8wvdQnedx",
  "key45": "3Rk7rQpuKeVA6Qn3jPkjjtaGuPB8zupNqb1y8c6YNMGhzSYmmAKicQ9dGgMHbshCBxoNbQ3eszqBuTddovTeKSc1"
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
