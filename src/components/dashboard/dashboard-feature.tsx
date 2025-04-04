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
    "5TkLgWHnto3zik1DLKkMkEqF7kr16x4nXTem46qsMUKMxYtVkkRUgNqZXC6E68vw19Ma9TGA5N7vxA3R6NHvahwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgrQM6d5S1JuH1A2w73gFThg1AJjZLMpRYCu2fDa9S8TfhAsruUWmT9LaY6hpGQrRmHhsDfV6r7tGKqkCFV1iZq",
  "key1": "4AZQwnoeAJEtjPdj3kmNKnP89Z8NNLGqb98HDtxBdLaANxgDqRfAhdtosfBK9wEcbiTptNVp7BTgvFcmRdjtZL1A",
  "key2": "4oXTsqLmN8JSVK2CeMujHictDki9WdhsBrcGfHtWo7mSm1TiYEUDwv9nLhVqGGg85pDadQqSrxcwsurB3kTvZMFD",
  "key3": "4WeYBLF1EZ5qKYAbmCFJ1nzEKqVYiC7aewEExGnY91eRNsFErwNCGzfvAgvVgNs5W6iDiASYnxMxeQANNmN9UpZf",
  "key4": "9b4DqUKjCdTALJgx5ENb1eKr1LFaZRFy3sb8PprEThU9UNQfnVg4a8qGtwFzoSgsHeAv1Aqvg2UpG5tb6Kz25we",
  "key5": "pXyPhGZzNVP7qqnhFBjte1imquDf2XVPhugxYeZh6jxXiiFofmYyDXNjYPUuFxMuex2JaAk3E3Zxs6paEZxNPWL",
  "key6": "33EFpGR7HYk1mVjyFuEExFJeBLVhyHafgUWMTJFv3EmYitkZDUDzBwFH262iaK71sWqo5PnBYq7avrHhfsAeK56z",
  "key7": "t1ctuXBfS5m1t8sEUbKyXgrjjGNzziMV2wLXyfwKFePQ3zruHR5vFPknwXLstttknrpZPEKiZ9MaBGseoqgAgYX",
  "key8": "4r8rsfF64KLZkCHvLckFYdC3cJpw6gt7KZtkNQPXnpFPF32ogMRgsNYWRtHoLzbUWRjRf9gG2RATaEH9ZCALY65k",
  "key9": "4AakvieQEYpa8HF2YWdoDLSsTpcvRXrwu1tbZsyQzqxp6CoBr5XWRz6pbbtTN9mor5HPE5hq4VV7xQjBhJ1NFfKL",
  "key10": "2AsTiVeQpEzukLL45R8yPmSRBijDQAK8RxyukcYe5KCaA8DM8eyEbppPKATu3jVTcZ8qDs15DZiCwCQxn28YUdyD",
  "key11": "2zTQEMU9eYK3jYVoo4tcrhRjsuf3a12mPik5LkPyy9cZAtiaD2LY3n2ns6qSVXmAvCmc8oPowurhqqxcUHRXSyvk",
  "key12": "kLTDShvf3nvMGWkfBEEE9jqGpuDcXR1rCUsnWesVyf9tqh7gA7jXZSk9dbWwkoAFMgNhWzhofQTKo8dYPoKUoLY",
  "key13": "5oQmZp88vuN4h3mgBfpo53RNKzJZm2HoPW8cLKaHLfcHZ21FHxvVhNxgazwQEMujfe5okpwxHxjkSHazQ5kTGW6B",
  "key14": "2ht6tSqEY9FBY9msjHEKSbqAEDxqJovqP2hK1JcE4B6ZRr6g2mUwB1YWKpmb1mmjAJYgXD4juTk7MEVCYgVzvDHE",
  "key15": "2hqnPs4xnQpqKhHRgShXBe7C8JEJYFsVVfPQuDSRwATeVnDg8t5XXpUSTJqaMt2oNZddx56KMKue4pqtmvFjSjN2",
  "key16": "3pL5LWL93eBs9XQyZSrKb1C3hynBUvcobircGHQ452wtSxUfobVFPj3Zq2DL38nyxyf8sTp1cn31hFzy3USrigcz",
  "key17": "53nUtyUoVJLWTCkrUH7HbxskbuUMTFSC7tgdEzaxSkRVJx5Ev49ewRJb6g2RgRF62mmfrLStLFdPfNmoReApFsaL",
  "key18": "5k7y3MgLTZUPKX9ftb42SNTCkRie9izL2G2gFDmDtbmindupctoTHxiXvFfjMQN9nzKCHY7oDun2SaSubi8fa2JT",
  "key19": "2niqcY61qi7cd5Lux2HbHRxpQCwGZLE7okSrNasvSsCCdYy2SGEcLGAXeNT1qoc7qcRqS2NpPd6UWqQhSxqxAX8E",
  "key20": "Joti1W9gYV2aNrJLuQqBevvByA5mK6qM1GQ9wT9tMMDg2spxHREinywYgQrFrGxciAJiH1z7kDYb4CAbE98bjsd",
  "key21": "bhp6XZ5JLxYFSr7z7NAtRt4n1ANR6Cspsn9i2ZcRHdSqngenkTUYZK82s3d6MLAy4H8tQmNeDxd5FCH7yDnkdkz",
  "key22": "4wGuTFNGn5U3GsMmrxjSg3Nfmo9VzXMSmKDnGGow7gyZfPHeLXmMHNMvtWZCcq2gm7KNp8wJG6fU1a5ktZmvr992",
  "key23": "z6wThxdQHa7jSuZbZz5cG7J4Vt4NZpQkgFXHNbK23qx6bUYEo6yGDYzTXZMHAbZvtLArhjutKJWxwpYU6A5tXGe",
  "key24": "5RV5AYXBnvTJZZ5fWHJFmGquzZsvTdBdaZTZqVPZkihG1oSnwNdxXTK6YCDMChS9pDSgSVrcHCsc8bZrjueg78FW",
  "key25": "2ma4RszkZwZNPprYCDbe51jhYkEYJSJchMe2ZFh75Kk6sdKEXsQ7TxKPbfFbbpea8woDv6fCxJw9YCE88ZCfyHPn",
  "key26": "4f3ExWEXFwpvhnJrrb5VLu5schhGf6LjBBaeFba3nqe7486TM59FeXaHMrJcwhDXkSjkeBFFqrH7mgujgj3nzaht",
  "key27": "7ziM6smPSSxrWH5CXLeGf5xvGCmeZuHCaLp7ZTLAGV9mKkUBteU6Mp94xg39R7AtXocHx58CwPukp5bmbXh7g1F",
  "key28": "N79K96rSDbe6nLNixjG99d6enPiKQvusSmuAxkq4G9byZtBwodijcrmEfGwWYMXCC86rhXq4tiNNVX4Lsf8kepw",
  "key29": "xFUQcc3V9ewgWrePnEiUUQPUb71Z9gafEznAmdZSFirDPHJQUmHDQoL7fQykimx3dTidGHH58JfPZSaBFspZJba",
  "key30": "5jktYq2N7yw7YwM69ZAwiDWxEhGwZZrusAJPSbzKoGG5PGDMjAyTxjRytxnoDEunJZ6YruhYWQPEk3MWi8zwyihn",
  "key31": "3f1bfrEnqvNdiCmPGKA4TEmmYEbiw9JAm7HXoAz25aAgKde9pwjaUhb4TDfX6nLSMT8atuugrtKdQG2aCNReFVkY",
  "key32": "5oPtTLM2BtPM9EGyc3uyuhBxV2cnXtcLssxNeuPa2unLhxpY8nw6pcAmVbV6FHxKAbT2v7x1n5aYq8yF7264cQ4c",
  "key33": "3JU1pvUtWLGg3akrF2q2vpFWiYWLR77Grw4yM69CNeiKHvJDHbnjLAT16mLqCBCkmXJrUC2EwqWm8wSqekaHF2EV"
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
