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
    "2dxV74zmsvrWQmBA7DYrkbgRy1emGhbsbRMjuA9QiXr1kBzqt2gwSQMnAnQm6CRwvTfTnT8sMdKhLARpKvYWLEte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1jXSe8pG8incDJLbetMRcVDojsHdvtLzwN64rr1ybLE9yDeWrbgpYry53Kx4Z7HTvDoWaa3tJdgH9c6kzYxbUv",
  "key1": "YhNkGfMbwxeFnknCHur3gHUa4uNdSAnG6PxfAKDBiCdm2FWYmbKJL1Wv7HJXYNbeJyC7hu8pJFnGBa4i3k3UVNV",
  "key2": "674jKyYEPkjUd6tZS9pVyrvSfpJXXnzr44Ca5HepFKn9rKJShGpmbpsvVwdG3S7UBHqvZtZ2ZFiy8iURKKPzFSUX",
  "key3": "65rrnjN19R9ydRgwp73gUBvibQYfpn8s859bmnTwLuP9X3MtLLQpSXggTRx9mZUyzRHL5mxreQRaxfZEUgtaUvgM",
  "key4": "oJsU3xhV4rtnM1Ri8DVr7JgePx8rjpEDAsLFtTqrpBoamR2SgGjt3Ha4L8a6GY9RSqa75hWnNuELVXHwKxKrXcZ",
  "key5": "EYpxL1GVypurR2eEXnRhEa2NLSYTE2VQViLU9TBvS4Ao1w2TpXYNxscu2rGSZeAtMiCS8Sp6jwqctmkV3keMHMT",
  "key6": "zuH2XiTjajLH1d2n3HrvVSuNi3zNiwWRFgRqbm7BjQuxtyWBgjK6g3vktKXAJnvZNo74thYJGzWNQ3TtwofC5Wv",
  "key7": "5KcZPGqis9enVhdhLAcpo53sJs8RuEQpqPRRDMsPi2RoM4KuT1dCCbEVrvmg55PSzNcoAYeXcT1YzymZtUdXk84b",
  "key8": "4iiwm8MBqDK5fG16Aij8Kvfu5gBjYiqGirEsi1yXV2bJGx6dG82mAw7zr3ePcQxaYpyLzXHFtroaoVprourY3dtL",
  "key9": "4qKVpEzZDFjHz21LyWr74wF1MZnFxS3ka1xrW4hrnVMg1zWgBaC4NPkcoZpbAF29s4ENk6g7967n7BR3bJ6nNc1N",
  "key10": "2NjiNQVMWMrU6KLJGgNromM1WgEmdowuhK4ixHK1iKLoAP3yokDn8Gy7Sko5nodXmsWRZVESHM6ZNqbMTZaspQNd",
  "key11": "5dxTjiSkz6YEM3q9u6SMer1Woa9eoiqEzW6WMyeeMvAa4L6AV5AkceeRGdPvdU6WMegcy7EDu32FY5nEHfpfSjhu",
  "key12": "66mGpYGPxkP4PbSa8AJ51C7akkYSpevZE9kuoXyW7iD6qp7SGkYhExCcs9fGRvrdXofLvRSLmKwc8qxa1FRuF1tA",
  "key13": "26YejxwdPP8GFuamF14X4XjwrvjEhknqpEQTjuPja6eHg9bduFw7GMoNwKWMA82kYV4N4bobdi4fQhqbkGz2WiJi",
  "key14": "3VTHRDrTkt7t9fxPgRSN4sA9Q7FFQNAPHwoBK6ioTUG7Ssq94fWoTtxmHSCNux93JbkTMP3xihbgZhZswPFXW2vJ",
  "key15": "2EKogjzm431krBHmKjfLC2o6uG8iaeWsjNdMCFCkcQHRdiqSC7euKpCrFtUjsgxFfTe5mNmaXN3js3q2ZrKhuTXL",
  "key16": "5W9rd3ud31q4yc989LvTFPLr8Vg14fT2nJZ9Zhi6Zxg4iFtwFXRqX6BbZFa7ht3kqFMfM1wqJZZNhKtuDv96b6YW",
  "key17": "2ken2oAShKaoCjRPB6XFJFe3JhdecQfDLbw4gVPCKaDkCWNA5WuMPuftpC86MViZGZv6J63zM3e3t3vjTNxtPn3p",
  "key18": "3oCHBqauKDox7ZpN14FkH1rtYE732bda71siSyFnsbb2XVaXNori4iTXeBS9ZtYSzLJDBukLGQiyVziCoByLENSw",
  "key19": "Wd68FwtjfEnQsBQotkvVp5G9NxaEauqPNG9pN3NMPZP9Nfv7q1qJ25fD8wMpm2iE9MFYMomtm1wNjoMUuHE4USf",
  "key20": "5GqgTXArUnvBipQrr5vzAit9gjPkbYAYYcTiLEHX3n5SAypUE8sTD6SRPPLzrVheun9mbvCukYpaMTWYiZWPboJo",
  "key21": "4UwhUWUWBqRMWj9CQEbcgXiujeEtp27hrZPdqX71p3PYVcGNxfWhZXZYy2yn98vhySVvyYR1TzvjeiR8A8ti5PBx",
  "key22": "3HgA3m5C4zLYq7HoyR5UmfUiNkyTBsWpByD69SMFTVErBtcqa1fuFyMAdmS4pSQmCA6zgFgaR2Ue6TuMixVKAk6L",
  "key23": "5UtR7zaL5LnVhkCo1CKMo7f99JG8U2iYQA853kjQsasL2th2pK4HsfSiJ3VjecKcgPXQwKsJgaXJ5M5zsAC4kpfB",
  "key24": "26jYFNUrVw4U3cBaMrUxm22VPyiHeKEeEgDkpK6pm9Z8ZzwEG1AmnR4NHDFmpCQPgrHf62aKXDTxXfh87EF81J52",
  "key25": "aAW1jKSuYVXCfsbypqu9EeDbFf34oYevCbUSUdMn6cqvj2GwCSjkqMDLvQZNSVWq1ewjNRXvdSoTpMZvKwQWHnF",
  "key26": "33T35tkciEYhmU4aZ6W3fEv9iBvPpJu8zagnmwjh2udvzHsg3JzK3mLxKWqRHGPn2Qys5fXjEtJuQiKKWFmiK9FQ",
  "key27": "5TYQC7TRH5XnRk135HNueMkqXepnRi9tjNfYVoj6nW9PFgtwbkiPWbQxyJa4FRiuqfUs3oEZHQSpokDsCCcTFBcm",
  "key28": "28gXovRh87R7TpbE5PdaL4EYNG7WTDszptUA4pUL8tj5KhfhjnvEggsZvviCvAsitxp8b5evRXFLRboGcxdRFeeT",
  "key29": "Az4KZb1TsMWAzEtzuXEerCg6u4Zc4nVMpUJp8FXPfkdSkhoYBT4C6yZZwyvrHM9wwucuJNUenu4dJAN5LpMHyJg",
  "key30": "5LGFRVfjpVfbtA7qvP5pLatntuUXRTNXG94fwtjgUMrZKHn17BMjEbdZx9aQ4Cp82QRkocq8eY3QyGrEjYA2RifY",
  "key31": "5UTMr2p5Qztt3QtqNnrwUSgoWe5AgLbXrTGRbLM12f9PqAD2pgt5FK4nU133cYTrUd6nHqsK971idRGaHmJ7hxWJ",
  "key32": "YPC6ConhzetNJjCi4ZfAWiCRYVrQUN9HHQUK5YjprbvWV35Z6hYJytFDkZ398kKqsSDssr7y6pkon1j92Rd2hxc",
  "key33": "5DDmBs4SgmqXCvEw6mqT1KBmuiiaTpsaZbaMi7XF45SR4jBUjWnep11ccDQpL7QZfmZJHbLkqPVLDv3yjKgUxMwx",
  "key34": "33zKbNd2Gbvr22VT5d2VLsch2m3JgoEUZYCY7GHjBy9kwBfmSu6AxcuS6jKobNLabXuPri7HnUN1riSzQU3Zyx7f",
  "key35": "4ebq4xfdvqJi389ULxgxLM5hnjbJcZF94XT8hiUEy7R7B7zK9CwuQ9PfAQHPy9qdqh3R4S8ZyrXzX2NWkytN742e",
  "key36": "5YgZGkjWv72xm9nzU38tbTnig5Dnfm57YCdYu3R7U7dUwTe3ZenhikTTjGxfaFckBEgBPJ8hFPvp9MK9edbuTzs5"
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
