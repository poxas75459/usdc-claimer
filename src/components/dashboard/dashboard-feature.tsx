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
    "58ERjuaHAQNNoVWaCMrMpRceLg6gj5D4b7zYAJJgDm1pqLAqP89grMAJ14DzYLPEGLLXmr7BgnbS1RosdLRoN2a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cniya9TWAH7pQmuPFhDy1fmLKunuSzwT6RGUHhAecSozoADdBvpECkzPPFBfV9wTv5HXzW8hPvcKFPeacPgCEKy",
  "key1": "258CJcMtqQhVa5rCdHxHJ3NYpRjhqtjwETsdmcsfw3Fjbwo2or4b31TeyEN46gdhfXHUeUwUhv11dviuHfPoxyY5",
  "key2": "2C3WyK7n6ZbW7WTLQFgKK1P5T37AyFkoUni5YneQkWPjaXhEKXKzEptBWH3CPWVFUErn9Thv27u8s6sRGwqsvgUf",
  "key3": "4HU3GrGrQXqpYeyrTc3emn7HaPXoqXPtYDqfXC5iUHLekts9Ls3ng4BDkH7yYqS2BV4QPYXmxqtUpv5vY3v2pNXE",
  "key4": "3r8KrpfYUbqEuxEo5Hb1u9ge565UXMuwVdeizu5b1LtCk25mCJv9rw27VCNwLqNv8XQd8PR4B9TNxsitwGFW9n1E",
  "key5": "3qt8fqwehrWYNUZsTTJYZrGWF2PWSKaHaYs5ubBoM61QDUSeJCuKk7zqqWbzptFQ2gFxdLC1twxg74YAqBNioAFB",
  "key6": "5tdUm3xWjm3stjBviA2tz5L9bQ4NHeX219onaSZYx3bf2W1KDWP4TjwtQvz9a4Mz2AkGG6fcABsuRXcHYQodAXvy",
  "key7": "4eHBwizHXfuCmbSrSBT5Jirn1J5Dtn4ygPjTWiqLbwKjwTnpMDcLjrpChLaQo17pgcybLnoq71CBgqZaZkMdPSb5",
  "key8": "43PhPdQHHdUQsHEQLVsbqoQNhy2cizK7pX78em5G6R2nq8adoA52DW6AFSoFt1JgKvD9XybzYu9zPe5Hpygag1tg",
  "key9": "fQMrRHWNxhckbDq6vLRX4YBXw3x2iM2BAPbweYTvDv9ML1iohi184rornYqSiKwgfpogqE9d9XJQks49SrADbFv",
  "key10": "8PPZV2Dq1Hje1DbtNxskzgdf23J1RR526vgek49BT25zvotKREpq13B6PFzuStqzAy1BT9rgGfbHg874E4oJ4yE",
  "key11": "tutNEnUSd4ddYcgw95NUEuyhqxqoc4sxYvwH6UKY23CK1HP7UZYa94sn6prZ8XU3DvDPhBhf9NGpwNETNvi7eJr",
  "key12": "jspihwGYoMVPDrYgx44rUsX9f1vCkY7TzJmeFxBmq221H8j2kRoEyZrtm9MCyMFXFog1GUkiSWFdgepJwtvLyxd",
  "key13": "32zCXRNDvcNZPzjKWANyhtz75rzpQKPGzRpHMG1ZPTh37pgSwvrrw2jZwofiBCn1rwKuNDkqu3Zg57VwLwZZid51",
  "key14": "3Ku4KjHr7yogn65ASxJd9AdF6h6GYDE5akX1NTfoEXKC3j62CJztgdoAPetKHGAmWy3ihWsjbPcGmViXs5knMrsR",
  "key15": "4XcyowKVzBEckTZsXxBBgmdZ3wWeRFCJtAQENdAdtkxJCAUBi9vuf7cymocNDNPk4inz8JjtrDogbsJu9FRjTLZJ",
  "key16": "2MLNf65FBuh9pJULdbaboBcvE6Jexu4LopmSQPUYATeTgMSdgnTerLunkJYiXUXQYGeaHYCTEfdqSoBTEfKen6hW",
  "key17": "5s36MMqpNyrkGaMC2F4qsVQkMEsdYkebtoEetduseBsLaXLaAzaez59yV9PxuPGCuP8m1wfMya5HkuRJ5gPh3pbg",
  "key18": "2Y31urkLUqqnFQ3qF44bWVnALHvrHjnWNqUNwA6aGt8DPodvEY4z86JCFcVGpn3D3ykZvZXNA7XMweAompWpEYcw",
  "key19": "41iuKQTZy81BMHyU5GZqkrMKASx7s8LoXT1prWzXUqJ2Lq5M4Njk4b7MtGYSr5Pwuf3AkcZyyhcfXusSDMoc1oa8",
  "key20": "5S4fVj7oDGdXYS56B9xMTYQ5XjBFDDrRTmRpaWWfZt5xfVpD2ncHKP4MwsJJuUFVURsUhJ9W7NkDhPZmda29QL6y",
  "key21": "3887CPaFqw4tMS6mkT4eM8oF7Fm2e2skfN5t1PKuUVWB9U6dFYs3nEvp7wSTQyG1JPizSagdQCTgGHB2sEVCE6At",
  "key22": "5QnVhAZGoRAhJjKYioAzLE9DrJb9J6pAvi8Ug8fMMW9by98hcM4mev2GqdxyYVr7p8ddbc4qBgMknk4AjYeCPjiT",
  "key23": "2QXMtaFs7C455U5CoCqLWh5hE3QSZrKFvB6HVCzsSERgAASh8nWBm4RnK9JUgw6r3VRynRjRvC6TbAsKh8U46tKe",
  "key24": "2nQxNvaUD4g4i94xaJNMpsn6ZX92kaGDwPLzKFm8pJGnzkYZ1aU6Nt9Yzr8bUpWkH2fgPbJAJgT8vo7gFKQZZp2j",
  "key25": "2AebYFq2pZqUavG1fmM12scJ84YoUqefD5hfDhL3RcdRcF9ewBkLGiLVo52dFanp81VKoSUnBFeCuyxpzSDXuYVb",
  "key26": "36MQBNA1UeuTiVskKXuuC7uxDZzzvEdEaK8qH3vybo11qaz1DSC9cx1zjUY3xUSBVFFiGN277tiu8mpm4fiUBMfe",
  "key27": "2iUbPehTzxxF54VJbxrgEa4QPRj1d8v36bHGs5UMPkgMsLPbFFNtuxv2SA7mkDQG16wDPjvhbpXaWbrL8Qj1ow2B",
  "key28": "5gvnmC5kBiBNTgwGCvZLGNThqF9oa82t21Q9p7B7muTSZ42bHK5YrLKzSMwLUXo2wNERLJXe3vyGPDDkbSVU6bhw"
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
