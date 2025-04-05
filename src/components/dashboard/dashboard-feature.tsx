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
    "4mrRsov6aBcR97N1xLmcTVzvreSz3uKbaS6SkVfJG1vNovruaMixq8KtFVXesU7sJgnWKH9SWrLtiDnYoGFTDgWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuhm1JE2pU15mjJLYjb2sM3KhHmL2VMyX6CnDSumpiLfwxRcc3mu4d6Fy368msMyL8tybUm8EFp7tAaNrMwHVKh",
  "key1": "7UDXfBA5sEpy1oVDdRBX55r213ULBKKJQyqc32Vx9Wr5aFVm15gi4iBmQUFHGH5RHvw5aSRbC7sTcQnxv1tw9mN",
  "key2": "2zrf49M6LwB5yngd4fGKCkCfCheZZwyGBfDVhkhsFJpSqQhimnJUwNiq8JRGgaFBz2n2XsZ6uWz3QTAvaWKoi82o",
  "key3": "2XAFUPg2TVcSSL6LABfLyYRcsdmwt92v3tJmWbuaoBhZDFqquMeg8H3GbmAM41AfjoXYpkeViAK8sTPntLxzdmxg",
  "key4": "4Kk6Tb6oob187f2Dxvv6tS7qciLFXGYLzMgUpmJ8iMNfqPV1xvFDzgXuyTbJSoKXLUp7LTDCcjkYbfx4bhdZcWFx",
  "key5": "2dcEeZ1n949kZA2ZTE8wBjnhhn2sPvAAPt5C8op7uAMxBaAye3A5MXVuCY1XG3Ta5AxboVHCHP1YCk4nrTuvaiFL",
  "key6": "2QSmNS75bKhPLRen3hNNWp7GZSWutceBcjZFCEzQEQ18f1PqHXybqES9Uq9psGzW3ajGQtkahctTDzPvLUZ7Hxio",
  "key7": "5sVsdTFzk4XPz6VXzn6guTrjrjsRkapo1Pf1wJHeupnkkgFtyXGxZcFrHFySxsiXqCW121KEgSE5pJFxSzpqyDef",
  "key8": "5wrq8DGDf99nc4UeXPXnFARSV8oJar9AJgRPshKV3hFfEVEDsvZHpvFKn1tQ42BsjBnWLXa7uVxKJBbLZKAp6KnN",
  "key9": "5wbDhAw7fW8ijsTLWKgmVuirtcHDAY2pi8Ne6MVJDkMEu1uPBJPSoxnLKPAAiNjs1jrM4e6QsiBKPKmYwKUXi7Tt",
  "key10": "5YGnEjFnLeMyazRxuJbZmPEG9MLEKfFyij7ws29dboWNZ6Z4kAa52qaMoungtWY338W8V73ahNMC6UYubiWEkbao",
  "key11": "ucGdsP2WN5KzbSt1caEPE3Uud1ZKnu91snqqTj8Q44Q7zPgYMRxSnGjar1SQbkPUY6XGiVmvcxGBc77HzRRPoyJ",
  "key12": "5tdH7VEmxT6gPGPjAbCFFt1m8ZXsEpuqDNrsh1hnVRdprUhJwn1fTrGbLVNUDhou5xpa35mj1uN28XT3JXFDgs8P",
  "key13": "DwzsaALrcjL9qdqnaSR21jyh5TcMMoQ8LcdBaU4jBBKmdwuff7cesFSunLrU7c7ACBSsXSqm8jXZKWKENbnRqxf",
  "key14": "5EfovgTUPc61Rd81Z5Av1sAh4acDTKRQg7VSSR6HDEE1zsa9n4EWWemhFFVV6QM3pGhxenysfQ5wJn1dZDuYys4Y",
  "key15": "28CH1fk3zfjfVjXpuAF3dPePPTqnbaANRpfg3meALDtVoiPwJRQJv64eUh3ShfP7VoFtbhwU7D9pRTaqCC5d9iav",
  "key16": "3xPkLwCjoT83Nr11gbm8Qf1focgdnv65F4Fms1yXv9pkqkj3KEkkGvmoxMHWNjfiPiqhjtjt2L8gkV7RnhBbsiHH",
  "key17": "4jswWtBPJQQneXYT5GZUPR8qqzrvMoDsKxSJffKnRo86Q4wbt4a41yCiSatm7G9PD1NGhtVFdvizGAwg1FNYWi31",
  "key18": "5aS541mD174duo1mVysyWntBAkQYTMoFaTKrRSny7pftvi7o9HzHyeomAaMgGUVGrdrxumNAhGgbRdUKi6ENt6Rd",
  "key19": "52yAYeZiwGypnZBowM3BCH3o5VedZj8RfdZ6KebuT4MQTSPSREAvDaW3nJJKfhLYkgjDjMrdLKEnrqvEEuobCovt",
  "key20": "41CKgPbENycgGSGjgbJp1RcGNbg4PojrXFAQ5FKReucSB5o8LHossWUj6zCPtWFuSurvoJuXrj8pCjeSpJfSP8s2",
  "key21": "3SBNoNrS7GbAS3CutSBjwamdsXZfpxV2XW77KuqSNVJgPebhruJdp14CLAZngPvb5Z54g1dduwj4PHYWmoBc399D",
  "key22": "4bXy8gxweiWxrW1h7ZeSsj5VCGhnDU7kmia1Xmy4ZRfcqsHG4ucFk6JeJjnqdtmpXLn6WKA8LFTkY5qFj5eLkZxT",
  "key23": "2GH5fZdb8td8qe5L1vCZ2ei5WnLCC1Zk33kzmUGY6xhVtJiTZQPXjgRFbZ5EUbSUUfCLMvM7vVuCbX8AU7q3uCzK",
  "key24": "4Q6c8qp6DcSuWVSPQiZfzRCTa6UFcsokRReNkSKFaW4wcw8cC4Lbfp99vxQxFhbaHQftir5eijVQAu8j2pX66Mep",
  "key25": "4yo8dJcPP1GbvwHunvjAKcUc8JF97zEx7rXfS4t4BFk4VgJGtxdNpGK9RWMVciXTFWHdqdrYgbopeMHAEdxoV9wK",
  "key26": "337KmztN4TqJVLpUbyScx35Goc9rEnGQx6C5SoNe94y7pimz3qGN9NTprWZ4gfeR3xDJN1mb7WpvwofWbba65JNp",
  "key27": "44n8x3FNvWXGAC2pPrrLpnHzHy4R1C7yYJ4t6q3k9rMRyMjPUDUvpAdcWVBm8NbGeSw4BiCuyPjitFre3BsjA31f",
  "key28": "5XBgoeeZQUX4Gi8edXXkscTCtpRVYwYD6S9jXRFbaVGrAgp5a2Gv4sHfidKeokhqdoPXCxMQ3udAqWNhBjmnG7sy",
  "key29": "5Ea3KhdH9hc7gqGkgqoRw96bHeDhpwxM3bQNb4txXSrMqpy7amwjFGqEHwSQxotdf4zGggzzWj5b4nKTKf5hocgf",
  "key30": "yEVYS2aTqArhsUHbnk3TH6PQMrZobg9YkA5CKJnPBoncnAhQgbrqhpke368CJuQgSuD1orNXz1r1XQZbdVwKEE1",
  "key31": "2Ecyznv4QKKZi83cJSMqS5LE3TUMgiSDFX9dELqvgo6mQpg2ShxbKpH7q3sT4EyB56SufsADfd6UmMkMje52R926",
  "key32": "23Y6PH7XNy8SJ8rjzJeG7MBENmNF9PE67XQUNYfkUQ7DLHeTu9JsmeuEPdZTP1NzU7hgpYTywSunabRJ1dHRG2rW",
  "key33": "deJUNmFpHdYEjEBoSJxZMYRA5pitwyhdZoeETdjtvdJqeeyx9SkeV8dFqup2XVoTXTSShmRnaAorbL7Ty9VVMX8",
  "key34": "TgJFXmRcR8JGF6U71KYo5EgHxJ4mTY5gwqmaoPPKK76Kq14PTJcwtWRz5CAeaQ1oeKhYcuKv9WPj2tmvzJeJUBA",
  "key35": "2g22FspiZ7py4BLPb92Hr8dhaf8AkrjbzRWb3ha95uKPLV4Gsom22RzAYMpLwvnUjFSmjnceHW7BhdwB5MTNbKs7",
  "key36": "62dC4FemVAfiYxUomejZJSHWVxVcLJYsu7iYwAftNQFGBQ2DMPc1pFs4GPVW5BqMZWJqHX3CVUV4JL38rF8J3Uic",
  "key37": "48CK98GMSjk1kgRBw8XhJ7uRiqU38GNboUGAxC9WWFZxeQQnCUW5p9ouokb4mMwTYDDojHTBhSd14pcopEfBpPBL",
  "key38": "4Hk5VmG3S34kTbs7ong5eKrPYJVmvQTqNxdkP6SBh8zJqprkFQox411n1r7x2bRND9wZUWdqMDZa35nGsxknb1iJ",
  "key39": "3YkvQbBwbjPsX2CxrJSo6y2DudM1JaCesqHQK3986vGbTXDVP2xciJQg6avqFp8wn5dLrgFrpmygB2qt5sqXtETV",
  "key40": "2TNqCGDtviT66mPMRFSxYyiJG7h89kig6XfUjiUSpuQGXZ6qnR8vy1pd85DqYiWqbx9NDd95kvdMRm8BR3fhMTYj",
  "key41": "4JjCKxsAU6cZeWdJofscUb13vru51afNQw9Myq2dAHztfxEDkUzZXhTCAhWqnFMqsUBnm14Gv2eK9wy34rXNaEEi"
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
