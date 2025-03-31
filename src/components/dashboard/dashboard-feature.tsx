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
    "4Us4ehhpkCr8k2qbQapyJvVVngWV3EzMzYzsKLVbAG5NXBnk23QuACXC1UinZMV4AmLAWq5ny2Ai8Qupef1mWeNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjrT2j19aSoewFsTmRnoziyrqheTrxd9nBJ3spWGWfoKactbC1qSbcXxHfFFMXFcRWTHHJcFJSf12SGALG7cwQ8",
  "key1": "4henjR7BgJoMU1V1E2yoknSQCFwXsdBZShPdzRK7kKvQNqD9HHYH6VFcT5igmhxVLPP8C6mn5h3Cxsq6gnbRRRae",
  "key2": "5qrWv2DA1kcFJyCLGmALKTbm886VdwRK28r2v8qZefCijaDa7k9Yqi41r5YvRACaTXwBk82sVsGE3vg9Dr8dNyzV",
  "key3": "2JVX3yXj5rZ73r3K6bZqcE8KXhnXr7SWrMsWd7o7MrUTVcmt1aws6dbciFFaNX2j546BpdCdozkqy39qv2ossyro",
  "key4": "2owqTrX1HFyzguRfNwM2ywV3nP8prGjYmk3LJXrneMuGbWJ3Ax5Et1vrM6K6QQwWusrmK76iD8ngv9fwkURaggTd",
  "key5": "3YjVKNceaunv2jPy34kFTdQ2ZZ9vpW4tqdmFG9WshpvF1M3UDB487Bw4iUohEMCPnhuPVE6Ty45kbjcsFm5FdquF",
  "key6": "5jEgicKZtfF2NQzqHG4E8V9akS3aLBpAmfscVoFvRNYcyM4uRsZD7w7oNkLExRdeWJtgVfa7qDCLSivkrfd9CDa6",
  "key7": "48GfsxnKJ4Z9WHVSwQfqURgrdx7Uzv92qzmxPT5pmXuPEyjFXVyzjDCiv7tkEJ6g31ydVrnsqzfZGYYprjdwxJrF",
  "key8": "4XCmivXhBwEpvNKuKLmdqkGFgN9gE1g6Y4MERJPxuMZFVvdavsNCPiN1cTbFgQHwqqH7gmdfh2eSKJFQGN9tqeEC",
  "key9": "4ZvgRhHe3UzqnP23FGSXGxkQnrrznWhsFxvc6pkqgBbhxmejSPAdDzUaBoqR788sFUjhTkJy1WxBvMudstKKBLRt",
  "key10": "2fdHUdkh587nFx7jUgnSLSXWNhrhdMxJuKCtpSoBPGcQekPMBabqbQjXtEfMEbUVMw4gXCqQFvThmkxwVUH2F8ft",
  "key11": "5QsR2WMtjxvVxwnVGYHaUicyCjQiKo7gpoxZBx7BL2jTkNJKP32TyWR92vzBPqJ1YjGJx2XDhRgi8yK92MaSYgFb",
  "key12": "4eSjgj7iczJ9JTdoQBX4qjtD8Rj3wc2XaRrAYYcx24NVrEq5wGLvW2vej4W5FJddrAyg9ohxdFmURfqJn8b3XZqC",
  "key13": "1LR87BHiVszowncjNtxvryESCgwEiXvvbEzJKBrcrwjD229ogJpxwtQScADUiqF4HLsnDkodLqsgMbEaM69Ym8L",
  "key14": "4h69oKCfLRyZX1Xa4ZrieeheqyUU1zs1C9PqQ8uNgrg3b8JopC8qbzEeTzTBy2536sUL8rFME5rsHAb9FJyDTD4S",
  "key15": "3cdaDupi2mrcYSfcaowYee3Z38f2XJVpnFhoX8GZ1bB8CrB5oJ42bU1Bfi45xfiAAsJettVTLauszZfCZuvVG4LY",
  "key16": "3QpycVg5A2VbsYhRGyN2ombNv6kHSrGGsagY9frMa1oLVB4mGPF3hEe5bgmbdvU5Wi6oamHZZv9KvM6N8UAKJUf4",
  "key17": "3aCk62t1DkM1293kFgBJ3NP76WM9X9NYDwHijFf9AVB6axgZkXtPXnUEt8tPVVZoW271Fg3tbSTqYW5iBLarr5ZU",
  "key18": "42gQMxPGPfvxjbgjFGy4KRGNyFt27xhWHhbyhRDVCDr9VjUED5UKni53wMxsF4eeZ4c2CdEK1g8DuaMfSA4E1cQ1",
  "key19": "2k15LAvjb4muJ9NPtuHbjzTiNrC7WD8zq7LANyB2sr5U3ig8hSSrLBjRzxWF6amUog3MqJW1gUHnShpiedcdzvbp",
  "key20": "4KcYSsj1mLAKUDWf6aX93ewi2TGp5q5KRLH9NfUByDt69WJVYgYCgMbZkSswnGL2rMAgZ7pMgEonHqfv7YfQH3Ag",
  "key21": "3NYorGU6Sf7DBMxDg4Q864WdcDHnaLTkjyxi4P4c3PBYDvr1vtFnXiQgDwiJgGSJ3JBmVUC9AnNNuuZRFkzEyooe",
  "key22": "2Aw3wBjERdPGqcgqKSzG2F7ZKAJAKizcg5xWD6pB38aEa9Yip7Ge88L7Wrj5dubrNw3eMUU8HjnWqc292i2zUjiu",
  "key23": "5Msigz4yxo6hgTAJ4wNHKaD1Ps163qbBoRSfauRVJCDRWfoBDUGCDv1KZqdWxTfdCr6yT2zuu1izPpMwARyp5fpv",
  "key24": "59RmzpfPnNVWUtjXExuPUmkx4qJKBZqbvfebTVwu19EV9mQETwS9htGYEfY9eVRwEpe5N4SrqTEGDjkm94sYaTbg",
  "key25": "2kVmZr22rv8E4zcWm6xcuMHR3hnESbShNZ32J7NLf93NVd5SxQyVRbcxyg3sAtMHMR3ZPcuVWR7RoR7KaM6Ca6yS",
  "key26": "4WoCsyANR8rbTtZifVrC9vneQRJbRv16Jo6u4EmAtA8WhxNfQA2nwg8AeWogu1Udn2c1vJnqdGMykCXE8aVB3nEU"
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
