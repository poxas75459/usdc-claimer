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
    "5uDhACa1eyQx7HCtVVJwtaeCksDUwcHGpPLeDwTMidjECfysNfTM8PBxzB64nN63G6Rw9mH8V2TVxJ6DVpEy7E6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDgyQ2ahGbEEdAnNTxLcbUdQNpHHY2nr4NxLbMsvkFxfW9Cp2i3FwAJK2bLtc1E59NFQYg5jF12SmaayvCVdGKD",
  "key1": "2p1dciPfGc1VgKT7y89cbDSEPy31S3GGSeRY4ucMT6yS9udF1GGzR3UTUfiVaiwU1Eni4uARtZoP3R4fuoscSV6k",
  "key2": "36i9dA7uWmprvswJR98cku9Ff5ibirdEgV67C6JgebkaHDG14Qv263e6uHbL9VjbR4hgEwaT9eqAtqEC3ToDJT3V",
  "key3": "2M6LReBAaB8o865iPcki1HWEq8g9Wehn7uFTT8jZPYBFbhdpSTcwGyDuo6ZroPTcfFshadEJ6TCKfNqJaRuUAjBs",
  "key4": "LvWYvLez3L25X2njfpgLyugWbusGAwuhBQydU8C2tZjE4RRcigMFks5SkoBKQsP1Yj8mgkFYXHG8DzLbAGGK7pk",
  "key5": "44nKv9i8KHYcPVRbxqRPyHkiDVcA73qRYBT6Jb5i5HNYy5RWkXfA1Kqqa6Ub5pcckmJb1biG81gK5R3t8QTECnrM",
  "key6": "5ibU9QGUaUHAVniPCUW1a9zFfy4i3DcJj4ztSZ87mzAynz3Jg5YqyGcJMMehkckbwPDNdcUnvq61MFtzrfe3XE9y",
  "key7": "4uwbvnjWezVNDJSksk5fwH7Hnv81SPkx4FCCfCitizk6Ly4rCZu2KDiq3qyf4zZZXeYZGYHWsrCdcrSWNS7VPcki",
  "key8": "4TB6rkhxtM1gRoSzc7huPgD9voKJNXwLytLtSnTkri5rPMDre5qyuwuFCK334XziF9MSS5QrdUb7sJofUrfmRKhU",
  "key9": "49qRWVcYLj5m79LyASa9YAefPfXyLBPrSiG1Qz9YfKi4tuq1JXJ5BayVpDGvn7eBk5yuknEnX3ybDL4dLi9ja1oE",
  "key10": "5Yo2KevcQDUirsVDEwmBYEdfqXXmrz9Cp4QkWJmqwCmEuTGXxzWgqrxP7th4zTSBCyHggk1Mg7n8CRiaEdecLkvG",
  "key11": "3r4jNR51wni97E6pG8BsbXvX5gNCCWpZ2dGQEkHGrgEjd2SUEEJdJLKEN31XAn92oyjZM5zqHTFRM1X7JiVsePVr",
  "key12": "4hpXcfehSqnkWSNR4zeF3xYw2cqezAPtEN5cFvvL24ViQLH7Zqeted8XSLzrv57U9jYNE2vJvu1FdvBGGabEL9mv",
  "key13": "44x7nPDECHbSrHo5NXEbE8XgW4g23yzfpy7SPm51afEGnD11SrA1sUvVF5T4m8RRGM9UCX45CnGTXRx38Vqi3Fv4",
  "key14": "3jZ6dHnqFXv4AtteQvtLBHy2Lr4bTeagZjd7vEAxRmT1bHWfTwRH7px4Fyn9uApa9ZaW9mgL9JpWzuHehYmwv4Ec",
  "key15": "BnSj6rxHXBqDWmrezuc34gESiojWtUsMoQYYzoVumgb26T3X8yKXrFr5fDEMcxSJoH2DcUnSFbUw7ACyM3aSNjN",
  "key16": "34ikqUEZty1AikXhns9DvMfZw4CVrMkBUikztd7sRyBgmmbRp2D1sMDics5MknCbD7QRPmmvDZdMmG3MEXGdnMT8",
  "key17": "4Sqrc5HfzjXmwrhReCHGZVS9CNEg7P9EKi6eJxuCJLb44icAFUhiUnmsq8jEkJqZp6KggxGUBw3KJ2LrxDCcGsvy",
  "key18": "2X2Est7BgFmLReAKwXYvKVAA2AxMd73gRyYPqD395KhFgNFcPnoKXRbW2VvMyrTYucUC1L7PJauSeGH6Mge3ATsV",
  "key19": "4VjiyBSnEc3F6yQ9NDZ5WaatFFoG1oWS2M8nxe7pERpjea7KvSW3X51rvijBpxLZPek7G1yPcYXpJ81hQGZxHXR8",
  "key20": "4WpbLiR1QXh4Z5cAmPLF3wJqBpmznDEChFLmcHirj5NLza8HBdMnecehDB9waD8YYNpQwPQgnn6XWDULzoBmES49",
  "key21": "4hgg8VWhq3a9P31ybpyto2mGyaWBwE5ATZNmyU2eMj6od4duC1v2rxbMoRAPRsunMAJSVQh7fNfp28MCiWZkVmTL",
  "key22": "2asgkwnxaWD1GeZtQgd9nAa3yQ1PRWU87bPTNxgirr3bAXVJpa4mwGeHzQpoZ7nn5CTUJwgfsZvkqFZ4tqJ7pqUZ",
  "key23": "2ATcEU3UGrmV1qTg9C9f7AeWrBbAgMF1evFRRcRNhEcCNXc45U2VZh4u8cnhV77cjgyfojao1mgRZxchuXQAVS3i",
  "key24": "4LWx8msiqSU6PFsyvEMR1287gGpKPRA1mjESnPKoML6j8cnTwxxv3xDwcWZhDziR4VAy7N3jpgUHcucfTCKhxfuj",
  "key25": "V6jf3Zo2cXz2yZEybDWytRnAQ3Sno2NtGz44K9pgj8wGBgjCVaY9DzVb9dSQ6QNoLhxa8Dds1ZTFrYegVL6upPS",
  "key26": "5sxJVXG9J17bqEq8YHwUCuiSe6yfoL5BjZTudKC8jwJ7LyA8zctLd4EcGWFaviCdPpvnHoGGwQ42Naycib4v9sq",
  "key27": "5f8ghdH63P2bsuVyV1XXp7imRMWmPiuHS9rUTGXijP7rA7HZGq7HUQtS4bmxeNR2JNLWq5XqFcBNw4cc8BkhAxYn",
  "key28": "V4e5Wd6zAhSezGGj3kB3wy1NEkhLW9ou3vi3bbEFsTrBqfQRujN1HznaHKGdEjkN9wzJZULsWR1QAk5JXTko4wC",
  "key29": "2tDasZWSe7a8YWX13ZVBF1V1XBRZ8sxyQvuHwvTXRMToxM1WEyeit3i1KDNKbXh62L2HjavsoVU2XTjf3ghSBq97",
  "key30": "sFsZdbZkp3Jq5ZG6a7WbDaWY6TKUqTiCa5sbdwtqDaLnUB13wVhVMypVdyGsB1Epixt1xx3S7iWHSpoSzqmbg2t",
  "key31": "2ZeX68u6znaJP5RgLNYwRStNDgydTQyZHTvys5CFhXcRMdW27d4hJSCohRGmYoRWvhpuGvV1p2Xzaq8CVfFhqxVz"
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
