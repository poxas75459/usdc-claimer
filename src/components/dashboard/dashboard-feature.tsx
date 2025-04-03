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
    "2jjmYtFUqSmzWtg4bijzYGiwRSsZRWydkR5RyNXgQCa4ptyg1HZUZaNE6uQ9zYGeYikHpYhUJ7QpiH6H9W3VjLYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t9y7zSVB6WDzpvkCbu6nHsBcWBwzYwRUD2s8u8EisDELM5QkvASQh9dqRmAN4kkP9wZ6g1yaAN2UPmQJBCA5o7a",
  "key1": "4WLan6EuEmGFLqfBGwUMV84D2HmKipiG6aV8akBvUS4AsmzyKvTA2MXPj1ZTaBDfn88xW42u3YekBcsLJi4Df6bw",
  "key2": "2W5ftc5ZLEbqcxGAyhw1rhnJZjYgHcMqPVTEHdU11qRuoiNgaZZYGKczhX2skLkGpgLduAtE4gC7ZDcRfU2yb61e",
  "key3": "5qkiFYBUYm6zBEFYoQ24LinVquSBeTA2oMjPSCtDE9G7seaMricGigCAwoUbFj7ceSZaUPsz12CyGeZhACfinwM3",
  "key4": "3vh6aRt13XxYw9apuqMyVfJQUyejWMG1Bp7EFZk6D3ZvUzgb1md4bdjkD2EUW2h6ANdVaHM9K4ybCcvrgY1cGLAR",
  "key5": "5APXiz1MZschaeb3v2WgpSuiEHTzURj6V2U8V3tepw1x3S2KTA8tXCDxP55ESGFESW2AvY3biRvHpf5ooh28DMyq",
  "key6": "5WJP7uQZM6TrXY6gBjzfuqYoXznv1VFdUcpUJxrJC4z3iFPLJ3yA7vM5FTfiSwJ3Qr8mwAbMg2n4WBck3FB9vad7",
  "key7": "2Q269xEpresdpK5MW7Gythv6Bp78JVGvKsovCzzt8Sok1pUCAu8wwtMXEEZ972B5EHrc1AKjCdGM1ttQsTEK2YNZ",
  "key8": "3mm56znG8dQR3Jgz5x1wQgEHLFx8DHLPHXoCemrauMsE1iDUvgYm3vjx4m2pvM82xjLpcbWnVKUv2azWupdEjszj",
  "key9": "dwDdsTw8BWruuDrsb6g9P2ozdqa4BDA1DdijXq5ETZjtnFea6Mcj4XPsLdEVLg2zBhimLMF8E2n59irgUH47czQ",
  "key10": "2LfuNy7EotZbbsEEn6fU657gVHbKzWJBUzib3i2Z3NxBZQDD6Y96DADzTJKbsLjLj4sJt8fT3tp8pWpCJPJcrebr",
  "key11": "4WScsiPB1EgSY8Vk5AtR1VShn4owjcn3X32PcDnoVLgckFBUuUjZ2jsEtKxcziHboiaTy2paCN4zJe65DHG8zw7q",
  "key12": "5qxDwFvo5gEYsyQAKJ2AQHhY9TY3TnT7em4GD74LmDKubFvPyVMb5h84CPKDrk4FMw6WcYjTSPu2Py7MSWxPfJaA",
  "key13": "41WFsk3R9znGbECvASHwgEFwFqKZLM2fGAeEvsRNnUtPooGcAJy1kXPiPHQWDQQtmPPM2S4AbpXmusLqo3cGDUxc",
  "key14": "2Z2xiWz1jqfR7VSAt7y474Ypazu38y7FfLT6WbUkVkGqBBTavvkmsFGwgEFoThL7YzQWZZ818hxMAcdHoWPgJ56y",
  "key15": "53A4M1Y688mjn83tcwB9xKddjEw6NhAmryq1e1EnkrZVvdis6MAmUTggpsypyi75eZvHet9me78aTZc1gVybNK8Y",
  "key16": "35BqT41dzHe9Tg2pEDQmnxae6MJZWdEzbUsMiaCheZFurAUYWsAtBPTzL1ZY13F93g4y9BTMFif55vyiKDPG8tmi",
  "key17": "2fJTNDCPqaJetqzD7d7bMWKGXzwgMRwxK1jhv5rErc6s8Mf9FzQQHAKezSvxAJhj8cD67euRunP2YNXmKqjtLnR6",
  "key18": "23xKWJ8eF3NnmNFYJFSdS717Vho1X5aVcAajaXC6t15yd32UeigzLCgXJQh8MMLRtsjP8hAokZmDTvwb3oAFjPmt",
  "key19": "2YYezeADXuXRZkxXifsykt5oAY4so3SF7C2VorJCK4o79JXKNv2MMo9giBuKrLk9M6P9viyzx2WERhwYuTmo2TVy",
  "key20": "3cNFzv69KniRseSkqUW4sXnjrKHkHUSSRoM4Rzo4F68xZQ6jZMu4VVWYqLCNL5uniZNhe5gJoqPNf1MXqi5bwREA",
  "key21": "51Uni2ya2q1V2mZ8EyqEHj5VvGFbgTh6igypjF4zvHuwqeTTVRi6yRegJZTJHo2FFDqpmrjcEqjuMwsy6Vz2dSm5",
  "key22": "3cTwu6fpvmoRJzubrJCJXkweQY4WfFN1VBo62fZCJKtZpHg7G4MLPtCSyFfnJpTLVAzUi3ffh42wgAwJ9GvVvQEZ",
  "key23": "v6nq19jLahNHmR2k1kkAte2Nr4dC35D9Y7SmaVKeoinqt3ZMGCP9En1ZTbiEXBR9iwsUqrwreeaKK8hnJhRBKx7",
  "key24": "3oRLS3XgP4D27QJstNH51x36TfdYkRN25qr96UuAPPXT2ZbRtrCjMbusEhraC27HBkgnqKJtdqqQ5k4cxVmLV3JE",
  "key25": "4PKtoXxiRqkHMLXxA5jaUTd2MV7LQhrEVPcAii9LaDekmC8CbWqhLhsDjBSWAwsudY4ZgBkkmTXgPAdw9B1NfGLG",
  "key26": "37tLTqBfcgV2jypBDx8W3fqfUgrRBqRm35nhVGRRYydtm7xaeXJqRe4s9HfhN2d5AEt6otiZq6oapYEwW5NedLn3",
  "key27": "4N3MNYgodingtrRD6njhV6rqJJ76dcTHVe4wtBLhUQ63E6caQgNx75ALgmxrxQRKViF45iNQXPCDDsjyVZpSKVMb",
  "key28": "5G5kpZQYbAwGFD21DyUu3X2p3MRwEfDrXeRX643N8gT15gLf8PNWRNZuoYLi1GZXz52QqqKaeUvuqeZ7cXThafXG",
  "key29": "2NNMCYtuMEJ1qLc1objGmpaAbZzv22oHVyH1aY1caGMWpbPyruBHA6SWQEfRMboYCMVtEKwmi9jzkS8v1HKpm2Gd",
  "key30": "4pZ29zRNeVyTaHn1F6kRZfRSau1mztB6Q3gyV4Tf8Wi1ubGdRVboKiuJhUpQJmZsYqax1GD1mHp9K71sxVgcxca8",
  "key31": "h698YHc5MtVi1a1Jbw6sq4zyDVxnu5vx4coPiSo4EzREmwg145UBiqzwJyvT1cyohAJksrVdvE3YwVYzhc7inKj",
  "key32": "5GFNTD6eHjUeS1rVKG3STxGS2QSao8kMCHC6jBXpn2yQkkBgWeJPwaypNgNAy7S1BUErrrLKckV2HTFqYjtBYymi",
  "key33": "4du9uXnPDmvxTSrM7pcsuSkTLrBcwFRVLeUuiugaYognxQducAqxsTHN9tBrvaSBquhHepBbpn1vRfW1w7BFjzMi",
  "key34": "55gHw21GfptLbdg7v2dFY4E6ee87arh2cL41vA3kSpARpEKJDvDsdFddtiWNeoKpmq3yhB4xQC6BYupQqjpHy1T9",
  "key35": "61RwSR9ioWewvB4fbUeYxsWm9YbcY11U2A4dQ3vsAFMpXyAjt8rcy9gL1oGPap7sf7Cu1R3fhuwtij9Ph4Q78Fho",
  "key36": "3RvbMaHtdDteMnfCcKRTx7jTQwhckJ2Fj2TweSiUxyL6j7CVvSDhjiKdXNY613KNNiTJpwy7rCMHKkBWXB73Xbvp",
  "key37": "2iXqtgKYKZv6ETF1wZ5mu6p8SrqYoFP2h9twrV4AiGiaRZuCvQY1xnUvCH7usXxATcqa4pcgmPFXjA9SLXkTZpYT",
  "key38": "3GZEaUH6DUH5BANexdvxtwCjYDSwtztERz4Bkx95datL8gthsySp64voanhusDH4cEP6t8X8pwvYxoop3DZG5ZFq",
  "key39": "5SYp7aXz5HtHRGqfCZ89oDcUBwqgnE7bz6PjRi4VMEvWd3V9fae4ShgzQqDm2mHBYytES3Gs4YLAU1kHe69vutKe",
  "key40": "4vfHtiMQSKJ6KP1e5CjMeUzb1C7YbbWgdDJF8WWKb651LhwwKkV8SZ9kNpNEcPQ31R6e3jzLubugfSHXb5e5X11B",
  "key41": "65sMjie4aoGqBYjzSUrGSpjYyiUrEj3rXaRg52LbSmvrajMxRwV9BBRLj1ZpfL8FX7KFxh5V3UfXh6TtznLf18yp",
  "key42": "WBYH6Zqs4mztZzBkyifWaDTDwQtxUJJdZsAF4cGWFHqpsh5NHeUC7wr1eh42DZoLCmXtzvDy4Gb4E55FT5wwNu7"
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
