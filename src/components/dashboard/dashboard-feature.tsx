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
    "62UXDHLYa1eyK2xvLq4srnXY7NyxHWVeBwJG8ZdVengcLY2MWyhynjmJGDWDexLLKpMbEbjRB5NwbBd2NFZjwVDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyZDcxddjJWvUN5qnvoULJZjeRcfmLuNMsvUSoAAYRCZbZ61mCcrEjnAHrr3UJJWqi5jgqSdxvu96eMMjQH7gN9",
  "key1": "2HbyvY48c4XSJ8F8rbTZgWFUFWWcdXrr9v2c2Xbu44ghLbpw45FPVuuPsj1izFHKzFnU7VSCeJXP8nyVNEdhBqA4",
  "key2": "3eB48NKKfxi5L47pgZsvYwLKF1VMFszZzeYAf921qgo919FRds8ZQeUPhkMuHSffXAQYh9WnszpWp93LRMQ2QW1B",
  "key3": "1GtLuxqW1Ry2urCFT9JnCAiiTnv2THN5Gr5xRoVJ8gojxH8rtcZghQPFYiTVyyYxXLjimCmN2dXvvhjN1zgYn56",
  "key4": "6mryx2UvhVuWtnV5QhsbrGuwcaqy7H4C9hmrYWcQREPHy9h8EZBRkiZPonpNeNETqrAL8TiGMkgXAGBMKroTpGP",
  "key5": "3X9hMibZHSpqNBiwwNN6VJScEtmpBEkh6DQk7tWDqkfUaLWpnYBS721fSsSMirBw1XjFtBarPbK6jsF1RL49Y7Um",
  "key6": "4bqpt8hcoynmamvVZs12hpketTunXyxiXdoqWKn7uz5svXFEnRxyYirsuPm2yFxUeBBvnMDkpZXNZQHJVfMwjzq9",
  "key7": "4fhx4Mca1XEhzGBjsbrTi5cXznpvutrwxpidUdutQJogHYVd95MkqLp6BCjBFeaUPNRycSBvyToUimZMcRcxqrLS",
  "key8": "2a7eQkwyAE9KMHXMQVtUvJCTq5Bgz3fscTZpTnpSbot8b126ofziTrmtMKqWL1GUwQLnYt4KdwDTU42F2NUbFEHX",
  "key9": "PDV3RBghxM5NgUwiTz8a8GoA9s5WEkqLrDUHeLvvHppkwVWQxHDp6dEhqU6BLZq11f78uAUCb4qEba2LBMdAFBN",
  "key10": "BdLWh4u893rEEGha3ZyumAexwByNZKD3utFnjdCiaNLTkjkeyP55KRXQT1AhrqzyQF4qDmXYDCHWyt1gATcMejH",
  "key11": "4XzdPYryLm2dKJoUSidaYFg677BG9t18vUSe9qQbSP53ZZ4R56PCn39kEaXpybWw33srSVdvbYiu8zJZGRr1fa3h",
  "key12": "GcEqseALj3Twx3fyDr5HNJF4wFmWt2LNQ6FEbezeVKcGfx1byoB2oHitLA27DP11oeuT7h1ABNhh9uiU7FRqSHQ",
  "key13": "2ZWFDFqs6iMcw78DLbJRZTtwPK5hu1wNGnRURtesrgAhqvXK6U8oijxHvZkuW6zmXbv3Kd3TVkGPumdqsosWZzZP",
  "key14": "3hgJdFsjtNMLxzLNWAvQJu6rUGe1jTUoF1VgMsPFegzAX3Fg4iwMjZ2g5ZPnWTzykNvkSCDiwJ58ZvW4WTtNRy9N",
  "key15": "a3wpy57ZNUa4yspcgQwCyG1zDo6fwZBTS59DdHzftrmorz4GoQqpYcJ4DZNx9hZjVDrbs5mZDEQux8CSvAJa9vY",
  "key16": "32GtPFLuoJbUwodYZfDrzDkY9d1auQ8VgPSvBTLDsfWYL4zzmARgJQEz7pT6nuEHxu21CXfZaspKgXweFpweqVns",
  "key17": "3cFud4WeYQjrcFBgmRmns8pJS7WnYAvoW9JKSob96RkLwP9vhkhkjNZTRqwV8XxdEbxWiDXEztapiEK7TD7KDz4q",
  "key18": "5sSVZXa3v31JYrmo6pNQGCBXm1nT4TPKdBkX15Rsuoa756wWat8LTNgc9wHYvKHKoLizQ3o3YHyde75Y6WhFKneR",
  "key19": "o2RJzW5foQ7etbPVTae2v7WkxfbzACyttC6muvmUesawiLr1wvh8mjV64MnLu4hR7fTi49fnR91VWdVjD61qBGM",
  "key20": "5T9MYDH3dgv6GuaGoznGjSdcBXGP49ekR4GyQzig61CAnwB8eKbpg7uutRj2TPdTC9NDoXfogBmFgwEmeq64Sbjg",
  "key21": "57mzjagmPwxXhBeKt7w5RDd7kHgdoYmRB1Q4hCN6zB2VtRxEbssuvbEdBsaJjo8rBBmEhJRnF6pV5L6TXgoXXa5k",
  "key22": "3fqQkaEarALzyzpccPT6sEJ1HdtDRC57NjwCLmXDFtAvqH6aVurur3wTHzfofGnJSTTp7LkSU8WfAi3LDjMjYLDz",
  "key23": "2wkBZW6MctcWDao8aCTxfFxS7V8esM79hNXuJeZJm8D8FPB4jWPwTMsgv9cJoBsw56tcZshDbCSe94Xa6Uc6xXUe",
  "key24": "5qvm1fmg3iPVnAbPmarDfkRXjNJAqq6Z7ZqX4FPUKCTDkTmuCDcjeDyydWKSig6FRBSBVQCirUWnCes4ZgpeTy4W",
  "key25": "5KocTxjj75zwryMyX1XYAGKGqfVPJHrCyNPUVVWwuVydWQB97KwcyhJQ7pbPY7NE25UC7UnR7tHhJr9vRsMqMDjn",
  "key26": "3TYoE9dkpUyu1iquyGVV9BgRKZf2ZQEejnGPx8foDriEFRbTJWqDt2NCoa6tAJ19MzkBghuMqijtmuyma1at8Jo1",
  "key27": "4LkAhF1QxDgNstQTKrFuR8Q2N1t3ruA64n7g1v636P3YxuGAYx6xo7V9AUN4zp3Rj9p7a5vtT4QnVaHofbvaQe5P",
  "key28": "22TsucJyKiFQrxqa2GYuEf4nWWDPxPiCJGypDWFns9kgB2KQP8Zaec3xayeSdF3x1b9pKeYLEgukEDyB7qD6ex2s",
  "key29": "N3wnkdBKdvCqbakMTvSHYumXFbYZgdE5srcK7pVWC5SUvpkAS73Nt8FA1Vb8asQdBNf3L6NLuwos3sizjHzeCji",
  "key30": "4KTAC8cN3bVpKEebnxaMCWMf18J9jBjDNAb9jBanqyZgbXYGBSjPi155MCadgGct5wnL52GmrdtPC3yTycA6NKR8",
  "key31": "5Xt4ewP4AUgkZbWN6otMKvh6uVKL7DCGxGG497L6dLCgGagv1FUHJ3bXzi1huv9GLvvueE2AJHvKcm9iUiLV8Ah7",
  "key32": "sNYwVGTiku63wbzaFnHWhAuYa9kkrCF5TcXDzqXJ1vUxPAraymkWrE2HhUvmTPFFoNu3M2aZi1m5C28cTMgkSwR",
  "key33": "2383gHUx4REFrPy5jAexN8AAwyEVAiXqwe3R73RZwe3rsWyKmJaHurk4f6TbBeDDp7a1Awa9JkMpCPkzVq3VFXnP",
  "key34": "22GLrFm8qYV2VzGiSrk2UBdYx2xZ9GKYg12dv1rzKMrkuPtPm5qo8K939rutaMRwcN7N52idiwq26i96E6pnEu9g",
  "key35": "5xXAzMbBncaQdrbpFjEs61d9dHT4R8n8kgq1UmGyEJpZkKBGyiccQj32DGQgZ3PMAXwyGRznoCrxZSkgCRXUCiHA",
  "key36": "5ReV1pRZCXdDTUk2tR5WPQD9rVftrajUqfXRZjuFTcM8Adj3bXigT3RG6bo3b5DowLDQk4ULukMBjBomvuhSQvxP"
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
