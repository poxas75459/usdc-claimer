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
    "32jqgRj4KotesVAWG5XM8iQLzee4Qs5T8UpUruMbpWvLXjJqUFtgtLSVecgdNaKv5qxzY6ehzyjkigXV3KTkf9Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iD8otrPntZ3EbiZLCKrZDNRz85BqEG6qK1bYPL5GhZnF98K3SuYq44UayqW8rTPq7ZPxcCXYWRHsCX1sYnM2uny",
  "key1": "32WGwHYYFhVsKt6C8cTEreLuDtR71LP3adWsqWJxzDWQznDELTMrLCUU5Z34HsiQtazZwXzm26nr3vgyoUvzPAdi",
  "key2": "aqXRMMwEWmNKhpDacLAiDuGZKUW52uFYK4kHZ1aGSmGcXLSUvGKZVgYYP3dAAimFUK5KuRvvdx1FA4bhXcjeG5Q",
  "key3": "5uj96eeVxhhaUYVcXWBpDakFH4rhEWnJ5Xn1VBZY5FBMZ9LcK3VwU321M7U2r6iLSD22cbgMe4vinAEcb7bChz6Q",
  "key4": "38yKbFqiSjCr7HnPnVHx1YysVdqqecb6iR6bQX4Nma6rSEJbR2QBosjhjfg2dpEjjx17vQng7uGMe2bnHbey5AfB",
  "key5": "xrhXzyEQ6c1HH7aq4oYRxh1RAcHkqKUdcqA2G5zhdyNR4BWme5vV6Q4VEcbJTRXFoECFKcZiueYufavJc5UW8DG",
  "key6": "5ZxUk2d1fbG25FiJPo2jg5rTcGGFM4XMmYyh3mJ9xMqZ4o46CBEvSBGh358TYG3T217uK41ACoR69jPtAdqpB4uC",
  "key7": "252K8STuGhy5ByoJd5er7akjM5GnhNUmKFp6gTZpBySDFcUmHNMJHRkCkkFScZeF8omdPjoSXme5rtvYMQuPNM7f",
  "key8": "5VnXqmybb2sqktDxoW38Eax43HBQLxtsmkSE5TFY4GmQiFhZPWVZhWj3R2ZHePrGr3PqUWxNhbiMK17ViywBLVYL",
  "key9": "5aiAkXMTbb6JUNBantvsPh652k5yGku6MBWArznfBXKsj2WSXKErJkJxy9N2xRVnZSuB2TtnFS21n7CSxjGQfwsX",
  "key10": "4RKLm4iTg7ST2sDw3h3tFPknCqfcrss7ufnHqmh9QDMivWpjwpX7JAAL9gorkvoNakJqg1sy2XBHWXCHWA7K6D3z",
  "key11": "3pkwZAsHF2ycdeQkLC6D3nHeCVzvYYvSSCYi6A5Vg2uXaHa6UafsCdnf2uykVkHT31NoxScTKRnZboNpy8H7BXFZ",
  "key12": "4MLiKbaKdPMSgT7U1u2o4qijZC9FrmhTTp2mdNqNqYste7FQGe5j3EXSC6TLHgcEiKH1i2vp6d89EMD7QBYQE6AF",
  "key13": "3nwX28otyTtNSHTv2e69MfWG5JNqaFcPFUrGnPRHuqYUxoPYViqMMr9KsvPBcqfEnje1TYAtUmGmPUsUZyN9LaFL",
  "key14": "wm7GaJxom416h1r6LCc6Dkw9S3gSSt1qZ4QLYRaJuMvYbyuToeKP48xJEgJ6zrqs23eeh8QxqvifV2V46CAsAMU",
  "key15": "3C2bjE8R5nZYPpHoAtFKNSK2YAYSVoKiTgU5jSPRxg6W9kinS3vfexyP8HwpaveJMsLnikTJCEqepBPR1xzFTk7y",
  "key16": "43mm6fVCFgdEq71nc17hFBxzqUwrXkBjoh3Tmq4HhnqBaLuvciND3E1K4SPXrC5ExeZRXgHqfVQu7CB3USvs8w1c",
  "key17": "4L4auTeamdch98oH2MdRcAToj16bic2hxxMJEt5Ey5dP2XGjymeueLeMiWP1AEoACPEiKghTd3ffK1aXqXT8sRmf",
  "key18": "xW1cnbdH272276SEFXjoddRGgbdiAHBTp4Gam71WarqpJJ8spehzF7EAeK5P2fxevJCHW6xGWwP8mH5qYk3eAGP",
  "key19": "2APuoHDdrq2tzrepgeC6PJZKH6qL3KMbcB1ze4cs6qCwoXvVP3PzP7cm8tKS7XNguyLRcDAEnQr45Eb6rWNdHuEf",
  "key20": "vKsdQcMEv1d67oAg1xWizCxGHXGNHjXdXrHdfLtbB8t6RLrwYP2uSEfMBC77Wt7qkr8PVL7uyfk52hUmaRu8y5u",
  "key21": "28trsz2yh6CC7ZXWr2UK4oaQt3z6yGGYdhXk1QNBU2sF5phwhjT25Kd6ddzsMuY254ZPLy5EZRjzxNC7KEfFNHRu",
  "key22": "2gG1YPCsXEmeyrsKT3BrXDYn8LassckheDHG7pK4wSsEz3hveQQkCcG3UXU3UAGVVpU8zTvKJUYXsusKBzyDLPBe",
  "key23": "Ax4gAEDMLrGaJhp54AbdLPw8ZQpfEDrBSJuuCuX1KwqVt5tFQuBZTbzen6zVVcz56y8KhmUDNYFETfuV83janec",
  "key24": "2iDmRw7NrwGGQwJ6mPARhrzFdFjfhF4t7rrWgYurUvY2zcajDrNCixWpkUWSYKqwsKvzfgt525dS7aWnTwPpEpDP",
  "key25": "25GPmEcqqEhX4bPXJ96S2oesJuH43qejJXd9BdzDKE3ZuY9yVHkhzgst7R5pCkfSexpUW8AyBZiLJWYZ44qDCmnb",
  "key26": "2BjydXCkDpkN3HXyjaafSGcgpAv5srfP2qsYRkzhP9MKuHKEbRmkL3gMrM2tjPFWKHeXw81VuUvtYawm6ssLbqgU",
  "key27": "5zJgoGPXeJZRzsp9JuhVh6YzXNV6KRTXw3QpRfFuiAsmeDt8PLidsYwdhaPpBa6d4CV9aem3eMPZYfKuRHtqnFCc",
  "key28": "cUrxvKfprYAXzyH2A1wcgadoXHhea7mhTPJJ3zie632e3Hz6Mq5ypPULduPK1eBrWUSym1cXoH559Sfvhd3Pzgu",
  "key29": "5aG8JkT9o25kteE6pWaHLUkeXTGFU8AbqhZ4eGPJoSXoBSCzd9oueG2CcW5Geia2t7prRsdFv5Wo2Hodn9GnoCQ2",
  "key30": "4yBdwr551s5KkPVmpxQgNZLh8Qe4FPGR83XxkvFsEnNUKv5yRy1VzY1uYMQpn7jvrJhEMrm7xcNecB3uGoEWZszx",
  "key31": "3u1xuBDmAu1QxmKmaf3HrgAbhtfFi4WG5JMf2t9XNiqgAf7WJSmq2Uk2zHY5yqhkYod16aDXUZkRvWySZWpiKmX6"
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
