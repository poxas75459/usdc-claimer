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
    "3RPHeUfvpVNveYEsBWuobarGJCji2NJ5zoi7eCTkjZCUAP1khdaVc9tjT5K9LATrEUVD63hL37yERwBkCtn6x271"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyorBTMYFgvyKsZVvRZyGj874R6NfBDbbnj3mD7PNap1RZ7a3fBU3vKUi5Cdxqgjwar29REoSmA4eYrdhzqu2FA",
  "key1": "29rxLEK9Xm8NKEH7GfM1pBQiFyGNDa3HDg136r2ioxaiKP2A8MaJe4m3my5BQqL7KqBFfQC9eVXRgipT15NM3FYN",
  "key2": "54btQZi2aX4Q34QR6L1JMJQtp9vLhqXufsToFo9dnDPVK8r6XiPCpShtztFCpdBDy9kNkTqKGm118ZfvuFjw55Xs",
  "key3": "3ecwRx8ZRuyqReK3S5Fof9eKiDwF2GjimfaEcNSByJtCtzD6zPrSobVGtTbWa4eVNWnyTxTN2iJY6oXHWBPoHyZ1",
  "key4": "659BqwYiJoiHHQL8Gy9h1JioKerSeXJ1uwhbLtepBpoNa5vEutP97wL8nfB3GpbGkWMRDjwuSZ5cZP3PsBjSwpH1",
  "key5": "5ykvnWH7zh5N8QJETQfbBdBXsbRDk8QTaUbu32K9Jz12HFc6r43meFb4LRCJrcP7DvLNF9FUvTRNcDevFyk9eQcg",
  "key6": "CdDSyK7AsGA5qj91mhtBJyYhADzyADFvSwDyrDimLXYsVheWmdgj3oUXv97ipjD3dFjtParnnZLwmoBytu1LjKN",
  "key7": "4tmU5o5jthAgoVdoLc5kc51YgMxjmC3ADJmbogMkVbnbnvLn7LkZVz88vAN5JgfKTpxyuCLtTiA68L5P2wc3quf4",
  "key8": "SCbebvzojQXNokMapGnHvngxhuCC4VZ3RJ9KmDtLxibpbxrYks399wFSQZ4X11c8aM2m5ChKG2DRAVvFjPV4pv8",
  "key9": "4QVta9bWifaQQPUTcypYV7LZCCq8DvEoQgxh34fYA2xWsbVwxTSoDSXzgytmDvtxfbWqAUyYaEGqxHJQeEsKsgDx",
  "key10": "59xfK5hEw65CynJmktnaqgqNPRjXS4auG3nHq9vcXtyNae2YoAVBeApQqfw49VSeLngSii7ynqvvou7y1Cz4dHxg",
  "key11": "15P1yKoXyRPGccfwqM4zpGPn9jKitrXxk4bDe78oLL52BauacZWeATtXP74DdXP7CBCnK5Rqu48vJscDsdAJKPE",
  "key12": "5LTBg8YGTJB6GDUmuHMVdZyruUwjcdDxau9z3cQxSf8yjd7ag9AYHwYbAPzwKs9M9VBkTCKAgx2KFXEUKahpMPxc",
  "key13": "29puRP9a7Xv2U53A7Xq9tvX27prjRFZ6hjRweZ3w6ftx6GjWLjdMCnewNh2fYYxPbREzMsYSMccAM7q9m6pzmTs6",
  "key14": "4mUNJwubVW3ip9X8wNcYx2UuomGguo8RTVpC9q5dKdDrQuw3sv35ib2yssYcxSRXVHdedyCf5picjCEJBpRRX8Yv",
  "key15": "5GEqcMUinFBcdDwRrAoSNDTQS6fyQKLDadGnHEqZ1t1u7wgUrRWXxuF1eK4xS7Rn3cf795YLhDBKJNygEwnnRFmN",
  "key16": "57seeCxCCsSC9D6ajoQ2vC2FQ7booRNuRQZP4mTsw1ms7fimHR4t2esXysFar2XhoC8HAhRMDcKHSDdmdiP6eKhL",
  "key17": "3fcjhEPwtmSGducQ7zUFT54bp176DFq9FRnTXg7n8QzSvzfhyNCPkWKrE9x2bK3m5VdQqpKiS2NjsTFBisK7nRji",
  "key18": "2K2uHfuPGFYj7ZqLMLE4RYnPCbR1bvPLzuehNF7kBbb5Dk6ZEkWF6hfjfXU3LUwvCaJPZeP87rfWKSn63RG73GEK",
  "key19": "4ohKSneqzeuMjtkszmmAjEPQsomnQw7mB5FAkN1rgcxXyM2xJdwwnpMtn68cwmL1uUjTsyufpmGxybtdviuyPpaS",
  "key20": "4VhZi8z9W5PMqMFG1DUWdfcGkM24snL8Sdi5ZGXTnxPbkGyjqLPkueVhdoGH8kgEqDSgNPQgxCfBYh7wAYbnSfeC",
  "key21": "y8DfDA5BcmZWeNhbwkwUeZWLU8E6stP8EaWHwexqZwGwPrLdmAnNtb7WaL6xb3n8sRd6uNxhxHCQBmtmJ4iK5tq",
  "key22": "4UtEacuPi2TQYS4f96RkYcCJrsmm1Vbs2HgyhwAV5MqqmeSCXYVUAN2HmLJ4hqcG9pyBYUf8UeqntzkUqCAxdTPA",
  "key23": "5nNaRH6dUqw4aGEximUXJAJcUZLqTbWVcaTuKCBs5JSN3d55vfn9ixY7fnWjQuCSaqeKj4fkgwvQntxK8qG8TkaT",
  "key24": "2SzvHhXmsTif3FpGXNrhQkYLhK3h3LAaaGuzStwPbZRCfyMvFuY5ZMVACvt9qDBPyL6sQstLA2rVGmdGxLBqsny5",
  "key25": "3wbu9mu3XWhpKVRjp8bUfh9yqLpwXsDvEEUzGp3rxTM1fBAiC3oQgW8oQEWBEo4CPhbix2JinvZ85nB77HqmMija",
  "key26": "2K5vLPgdJJaY9hf83gVfGpLc8orAQ8MFJivpgyYZ8khjyZeQiEdsVwashWFcm4DGQ2hvHj9yQB9Td5iS3nyubdKk",
  "key27": "4VPU65ydf4TacEvPFd7qaKsEZJ21BX91s5sZH3HprgS19yaqPFzWLsDxSNsPZc3NMQVfbkMyiYvSoZCuigADtnLH",
  "key28": "zHCvNKWUqyANq89mgb666fwtx4JGtTH757PLvfrmaDZTBK3uorwFiwiA4jDB3otftEP2zRAE1pkYzMA1XFjvqqu",
  "key29": "4XKtGEUUd18KAwur9da68ZbJDxD2qFLTwHS8w6eyFJhZmzgZQfR6qmrgZMUM25wN5Fbp8AEmEAfqhB3TGLHQUxWi",
  "key30": "54RJnfj88yaDxEUGYFwnhSiCcW96yyHoT8SJuUKubwQHS2Ly2ZF7tUk8aHr4UeAPsTLW2SxasQLkMofJQ7J8eXyr",
  "key31": "2AevJQ5vWvDST4JKodTEigkCHGsT5raLmThPmd1SPh7ZZXC6TogyFEpNfMD6GSjKNwixbSLgQHHkNUxarXqBUwGU",
  "key32": "61cr1kJTDpioqjaeggonSjEU8s2x7o8LJPi3fGZyQCxA7rSjtCcYnvP46aJfb2ZXjdqmsS3RzFR6kCzaEHLxHT2T",
  "key33": "2vS19pkLKrkd4pLsufz35DcHJiU3mZhKcE1zZH9BbdLqq1FWVtDqhkL4CvJcmSFbhVn2Ju7Ho6rFKnt83REAbmxT",
  "key34": "4SStVNr8Lihbg71JW2KRYEEQ5aiVyS3w71cwYrHa6UD3x8WaZ8x4Vusvui1unHSta9LMrNgBCdST9oKnvpV6fh7G",
  "key35": "3GRiw73ekQLTYtRwwKw54h51wLUAbNFTxkVos9vVatDu2vPgwVwxks6o9DST68MyhHH7hu2LoZenXTrE56XKe5eV"
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
