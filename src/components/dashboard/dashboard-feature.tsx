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
    "5bZyzYD6RiXvzNbjUac4H7NZuH8iXbcyj9X8x4zXYfM8vk2krooJ8gyHGTXYKJhKwpy4S6BiSwQBrB3dky4R3XaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ar2bzZV4spgNbTv5dyYW1Y23jyhc3pAtezscgqrxJxrc1gbLCLPFGxjT3fvwttLSPoSBoQmiJ2HeyrjnrZXEC9v",
  "key1": "2araLMMYBmMpBWynq2U1QEnBh9nhn4wP9VsXHL8ubBoKga9WFppDNTLN1uju8DyQk5MmMTGyB42cp1SEtXuaGNCY",
  "key2": "KAryDhwEdEi1oJjyqUqqecVXsB9XYNdR1hnfAum6AFAm7ZucLdcVC1QgmFVxuX6uKyg4yKy34Fko2PaPyyV5rXh",
  "key3": "2hgjRSLLS1aeanBFXTsbBMJ2n4ALA6a1zdN26RZjnmKhuJLrMgS4xA8nm6nmLgUuKMrKXiiVTx3NakGP2LWukayJ",
  "key4": "4vYC4DpAkShmSQ2dsiYeCvQrp6TbUcyhgH23oPwN4jS8EonMQ3A21qAcTbc2NT6v1QpiBxtVyCt1LhKGXZ8qGAqC",
  "key5": "FJK36Y3bUNmMhBeXmYfK3JigZtS976avFaBgcbVByZuBwZHN9HZuPCrbo6SpUh2MP1jWhQU7LqFLxG2kUm2VJsF",
  "key6": "3LbaZ4ShF4RrEAiC1oASVB8wMTrNmKzDTTETm4yHuSjVkNFk8eR7N56BrYLYbqmU9KHW1whihV2tQCPEkXZdT7F5",
  "key7": "4Jc5apWcm3RRsRSnugy8HTWmmTD4tBTUuL9ye3LmMXTBXP4p1r1nQV7ZzcVDhu6EWBMkoBDfMvu58Yp6jusrj5i8",
  "key8": "55twcDu5wZQYFBxdf2pSXPvSEfEpjQZipyxnoeHvPNWFTP2FjbL64unxnYBsMa4V1QfUHobCH9mU97NWUGnbadJv",
  "key9": "wce6tJuifvDQnht2yqxGvd4StcCgMXPkgJsw2jfuMjsJUFMGHUxQQZkdQMoiSMiPvf5j711UNzcGFAty9zyVy53",
  "key10": "5rqMe1TuHkS6NnDfHCw1HVwQWJa89d6kiMARADtvTx3o9Jt2sgDS5Cfo67STkBZ8aZwMKgAYEqUbfxXmEdTzpK9T",
  "key11": "5jzkRmquDuycte5mJbmiTk9oSjbsLwA9XGNXPd3qB3cQ79aXPMq1LRiqKREkaZ313q87TQNtVexvFxDNNxpzsYtM",
  "key12": "4M9akx3KLiCA9sotyADi3vNfZRZW1x96tsC62VYPEjoyzSUuLo1pxNNhsE24RGBjqUcsmfKSRYXNeypnE4cWZ2zq",
  "key13": "5wufnkP7XKZyNx46Jk5VUmxfcokRLaW6TroZvNVsTfc9SAbQbWap65MwMreJih9TQ7Tqzv3QDxY3T5qmbs9PAgmP",
  "key14": "3DSQ4JVKsz9hGqYZQCRPggmLXMRguDTMpf6WpBZZFuJR2zJL37KdsMptic67ADWcsDLGXqVZhot5qc41RVk9ED75",
  "key15": "YiUbWTmxoJnWeWb8kFwA1aefT3kYw79xLHX4KjAata3XQNQbPp5CWBH89GTgXSG5QDd8gspfNbQypuVMxHTDhua",
  "key16": "48j2NQS1wyJD5Ceb5JCqiEZeKTXyBSdvWu5ixCUqokBMdxNNWrrqZTagmUFCHAt2qCn7u4qJnR1xLPrsyxqJJQ2Q",
  "key17": "2uXMt981uajP9PnvVuSBXgxbaeviQP1qzBWM9qKNQ5P64WYoSewvywBMPbPdA6MuPJdpZ2q3hGThLQGaVaHfAtWY",
  "key18": "2BRKH7dw79sV9dNiimULzW1wXY3pyQQf7NTBKMFy7vEFFKWki92wpXMFYzbSn81r6qBw4PTEHcYXNd3WZGFscF5c",
  "key19": "3jdNq26haozDXxN3T93Z2Sr5o8VLkBmYc3g2a3DTBhqR5V6DBz3yboG3heySCr1nsUvWAGoBi4T5Mf3BJFB1qC7a",
  "key20": "2P2Mzf3MhPToHrzUBiiNhNB9MeZGTL7mq1udUy2Ui2rbGcLgzobe8pj8Peay9TubpN69HpCMnbrVmkHghVCHE4fD",
  "key21": "5QUw1w7WbiPzWVGGyxguAYgYepJufiBg5Wq3KqnMunvmGRXdDmYFFHprvgEbDb1Uaemd5EWQSQ1Epv7bEZJ6NCYB",
  "key22": "2dvhi4gX5tvLUnznY2916AsSRiTMM33JSrorkXPziZVQwFCXmuj4eFJii6cL8XhjAhJxG5RtcgdKwWKicscgJ4dK",
  "key23": "5z9WWZXbL6Bub4ZiiPafE6d9enQTQhoZS3RdbR4vGtN6ufrv38MKw446gDrhyHnLZgk372GsPQ6fFWHSSSYq8mR8",
  "key24": "UTrSc8XhiDpBfdSS9yxz8aSpfRwwWcuLE8whNJUZU67Kp4yMx3QrteKkDYGdMiVb6aEVCXwGJyK3ZGYcL9rYE7z",
  "key25": "49CrwLVuBopUyNywVVqP2oCMSzPMgAeaRmuZ3qUBh5Me1WuBabiZQRwjaVPH1WNoKyRnuEnDDQK47hs5Amz6FFiM",
  "key26": "26BL7CmoxMuvB4r5GoiZGZ2j4xC6FbA94xEDWfwPFT9b3aw8tLruqSnpSV4DFVj3CctrxbBKm4GD7hsVQJJeFRG1",
  "key27": "51fKYUQDuQj8g6uKK6U3MQGFmneWTRpTWoy4SGF9kFwxThVBwrTfgNwtuEoskwd9RaGrjCz7oKo8WAKFgbe8kbK",
  "key28": "AknTSZJCfiGBXgrAthfi3dYK4kUyEqWJcyj45QGBd9ZSAtkKPDDttyHaXkNYX19RyXEU6KoTRQtsJrRWNqeAc9b",
  "key29": "5KPqKFs49fZ3tmEL5XMCBWrphVy6RZYyyhTbRKcmQCMnxN8ee2XfTd3WAcqK6DexSkuB4SK1kUPqzLgtorCR7d9R",
  "key30": "3FHrqPB4w6yHdX9u7PrL8x9vsDyZjD78phU5NtKzrDsRbFStshLKSruv9L4V5NKgM7KkYHz7U9uhkzzSVuvVhnhE",
  "key31": "3re6km1iRGvaVyvVEPjhzCjhxQnvSCFL6PRcET8pd4jCwwb1JfYkPSmySB8qnqjE4B2NwQbTYntpoKNkeWdoj3Nt",
  "key32": "2f16TdUgoP5cTqerkR4NnUoMWZWj1s9ysF3hB2M7GbT6NWEe8knEZV5EJmcLDRh173yApRY6FuYNCrS6bpJSu5uZ",
  "key33": "4CWC5R33pfVdCuLkbjeMafkT6WuTXnFDDN9miyda4fGbuNiLFXGNYLDnREnvyRdr8FBmzJ2PNFcn3nQzvsoV58je",
  "key34": "bMriXR1fdYaUBqRnSiBPyhk3DDQMsxXic9vHcnMsLADGhoX6hsHPjs15br95D92LAVpSMgSggtWACKADpoD3yL4",
  "key35": "T7tPozr8poS2rMzdGfe9p66k4cfvU8N8HDS2LBqcHzjWFEoubHgAYRg68gmZLdqXcVcZhaP67pgCEJU1ruVfu3H",
  "key36": "58gE2L2YgHmo64qmstFa27DMYfeYo4ogdfWDsBAyxZdksUUumjbo66id3Wx5HpXcp85n44LQQFer6yVHXuMiedF1",
  "key37": "651Cac5UrVah8ydzcHhC7mCfJzHgT82SYrjJGGsGZffn849xwxrJhrtsLQygUBQ3ADhM7Ks8PCqWN72Ba8wpP3Yq",
  "key38": "3hfbi5vTpHpqtb5jDZJm9rBKmfvwSE4x7k4sMiCkyEGQ8pyr22GaQUBY75FmN6nQBFJ1L3BjPbUco4j4D7N79KGG",
  "key39": "2EDpFoVkaArDY72wP4uiUWfXTAFAogRWM992CRbbXspTt4usJVkDcwnuJh8Fz6Wo1eZ4oiwCviY2mmEK2bNPyev5",
  "key40": "5oxVENs4ijaFaZx9RGHJRqE4vRVwcmacJr3WtcEXCESrF97tqZfhXCA5ETV4im5FDHMTTrLJeWCBS5UQrZW8idoW",
  "key41": "2GWSCiR9t4rrTCHZrneupAGkJrP4YyCzmhMzBSrZ4tBxMykSJQYDE7L4aghjZAKGP8W31TGuNctoCiPaqe9cnSmU",
  "key42": "4cWzoPGUNq7LqB2omgeR5dbFNneoZcSwQ1nKB2e7wGowe8kszm19Rn7MGiDh2QsJbqedNdw4r1i4jC5DktShfrQ9",
  "key43": "5gxaZVywsEEZL7rqWDgH9LpK5yT9Ttzf6AhyMHEbWsMXBPzfQ6ETEg71kRZLWWW6r8U4qA7r83tA7XLtCokjafhM",
  "key44": "43bVjf1QMCNX1cXpEKt2NzB3HkxmZhYCQXQTtFEppeNpCxWQFu47QopEcjW32U919HMCHi8rNqUZFfabmEpTsMLT"
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
