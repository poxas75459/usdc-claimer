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
    "2Vhv2jq9tTEsioQZNYvfotyQveNcEGLM8WuxhMnogKy7Pibt1QAhiXkvVJeXw6axCE2LaF5hof8hfmT9XERfZts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNLmaFWFp9cqY2pBfr8wRSy5wvyaG5ym565t9Rq3oqcLVRHB3ncvV54w8C6cTY86u1mXxGprnGQL3K97ivAqcUv",
  "key1": "5KfWavMaT7ipXDjwtYnXyPYcr1NLp2sZ8FhpDdNPhAEav5kPC5GY4vpqVs2vCcrU8JWgktxVDH24m9wqts36EqHx",
  "key2": "2dFVHZygYGvtWTzrmjRo2DFUTrWZcVPz8ve1hN4VdYJ647bADYZmrRFujxyp1diPkRQPFg9QwKbFQETMF4KumcF8",
  "key3": "4Ejk6g898WBTWDsx1BcCiBhtfLaMjLXjgfo2pJ2ji2rX9Souv2Gc25DQQszs5G7WEMbi9hZ9VHJbjrT9mtnBVjv",
  "key4": "37AzWSDGQ5PV6Zgckgjc3ZtwmLGoRLWDGo7tJTCefMBfKduL2LL6Hx4LY2w7SnSx3UsdkAkEtUqRpXsumXukvtnX",
  "key5": "4fMCTxGnWvscNbtq4tMyykm9wYcVyzF7D6zBT9ef54Wnc9yFZQ7J5cPnW16MqdvjnvLx2c8TiaFy2rP3vUhXJf8v",
  "key6": "4ps5YWb9Q4GQLR2G7gbTNheKkwMiYSiP9YS78wdSf6CtufmytH5TqeWQMGnvwvGhTJQKrTxFTHTgz26pCKqWQk72",
  "key7": "4m29zCrHx3h9JhE5Jc2Sn5oNewgiqQHqrk3Vpg2j89QDpYX5h9aSAENbyyUZbgSxn4jz15v4Vp8Ya1GtqhCKnFDt",
  "key8": "QsPSgvhAk4cHwgL7woAts3B9WRN2uqvD46aYY8Ycx9GES9oVrxM46uLx5HcwWXaPnQz2k7FJ93fXmpxiooioFxa",
  "key9": "EaiJzVHrBAPNxJT2zZrbUqU1N7U6PBtR9mTesaLarJPjeKTVkqcvn8DHreumTyGf2G3sNWGHaCGFA4Z4o6ip3Yi",
  "key10": "FuV5KyaCws64RdNUod9nHKEgxzyDCbhv2mocV1hgwWNfEyNNEbh9pFUYfDEPYWA9ybzkVw3KJcWGfRVHkiyW6Fw",
  "key11": "5swepCYgqawMjf46DW69sKvjbj3gmpKpveom1EkZuhbc4tGfpMnKa3Bt3gF2up7g7hKrutUEVpbfgJBh3K6882bT",
  "key12": "3qV85X8Jd6xM5i4hqsn3DNpAsuCduEHwLUvsFsyP9ZWVMeQb6rvHpd4mpAP7MFKtH1tNAqj51H9yNvrm85uopXxH",
  "key13": "3j3S9NGmpDUZkcU41UR7vtgaR26SZGcDqdoEGCJS7FfmY8D7Cu2CwmL43W9vh4FsLwkczwYPex14eNwUC6EiUjhd",
  "key14": "5TiLnzCk5zyP9Gvma1Ras3TXAuDiCgFoN4kZdojVhL9Dkm9S8X9MbAT1d9zfdDpDkEDuHsxBVWqtg8PhGD98oXtv",
  "key15": "5cbiCui5eEduj2WJ2kDrXs3ERPUtcdj3aitQWfzAmsgLKFChKaZZHRCyMtqx7oZuHF3VCcCYyJK2GjTad7JuRJTQ",
  "key16": "5knnpBtQTiDqGsGiq5HzZRLd9iEvB2EXfEM3ZPuU4PjWwf3ocrpe6mUDpZJ38qekgj6DM5mcUbXEnBgxdG7EztEn",
  "key17": "2zMw1bJYEv8fzyYBpWTtjgJQNtw29D85URBkkBZdTKendCQEVTPdijphU68quDCfnnauZjsfRpuujb29g2NFMrEq",
  "key18": "4T2M2jzfMQXeUEW2UqxaVRjusqPkjwd8e94TyrCVL6bUxRaHfopbo4DeKu8StUauDg5r1wjdqNGYTQ1aGBfXrQxd",
  "key19": "5JdaJruzKFQV8jUFdMk7JwRy7W9ZJFG43mvM2BAhqLvvqR68GiLTEiUodyUxHkPr17EgWHFYwdSYX9gQResacj6t",
  "key20": "3Hpx82LQUBvEgbDYog8ze5fQWLuKpsTz3U1fRRrzJm1CG77BATiRArk8DKxkmEKwqPzHjv3dtsZF5WWET7kZCG4q",
  "key21": "2tQ5PZttvu7Nhgwm64AHeJpLp3nCYs73ToQskasZf2mBQS7aAKYyviGZzFgAuXEkafADGe2KVD2ApwAXDVqgaDig",
  "key22": "4MtEiBwGQV95sZ6cAiLwX9ediEhjonuYA1S2MVqW5gvtVx9bm6FL2zPabTgumVr7P6tymFjxAfs3iskBCp3EJFZ5",
  "key23": "ApFP8YWFunRsBMbiayPzVKZdg4zUrYuWMefYgLLpkrgiv6DPduH1WLzJ6F82Uohs5cWDUGXMXrnufYoZYnm7BnR",
  "key24": "2H6zFFgwVMFqY5M7cc3SMZLD9ocjfY21iFXptcJWCX2cgJp39QKcy7nTynqDXu8W6CgPZ8RnEUaLzY7yzkcf7UaX",
  "key25": "4DKRnk1njncWATUXZFST8dwanGLPFjy7z3uzCpbEf88AfuFSPoxFn6U8ZPCLTQy75F8x8SGABADHKWK4hFJM2wCi",
  "key26": "5NZtZxSD21UyfPpf3r98wnA3NJtgMHYJGXUV7MpyHPUaJa5GAf4TXWU7CF9AKW6GjvkCAFSgtg4x3V17NXZJ6pvK",
  "key27": "2JGi1gTFxkwohuXMyA2PG45iW6PkzwEkgS27NNNC2hcWxQhiH5qxUv8Nb8uc9YjFtEJ2tfxbPXJokFUzGT9higfP",
  "key28": "3GFy47QYfdXgP9xrGcxDbhSHBTK1dxoe6JVLtQqGyYCt44ZaHXv5uJyjtksiWB7vWGZHCrFoEgc23Nb8dE2AXDL5",
  "key29": "2gSg6LmZeKXTmM2cqcti2x7AP6FqodVKSbjLT6x4JQQZ381NvQBKec9o3YZZQr1EuRn5o4VabdXaopoCFbnSFoNf",
  "key30": "2rDXT16iXUf6dHkhqb3jVKpujhMGvDyGNexAG8hg2TXqRyBCPP6Uv5PiGJWeo4YVQzW9D5XYXyUdtp93GuhZHqJ6",
  "key31": "4FzMz2EG8RZ8osPWEoGMQZGdirYw2ZhSyje7GHccKqijo9NZZpatg1Nbz9JvSdaNZVnkDxPzAmqRSNrpfxPH4NbS"
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
