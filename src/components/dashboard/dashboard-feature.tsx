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
    "446tRaQ1KHQyezLJz5DGrBE7kECrfGNPkVB4P22PRZNCokgEhDJT1mLV4QSQnsUAhNo2puYdC9eTPXNgDCs4A34r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGHYqXDxnbNpDqspeCvSRFBCHzR8i1ZCcT2xs94nxCSc3Xsb6tFiXjuBaBrniqjMKXbgJLNYHWpFCdX4ipDyAw6",
  "key1": "5eAxj1oHtHGshCBaAhov6x2Um6xTrb8EwAbybVgULynZbkZPraV6rqyG4yZpn1xhdPJDZB17JMPz7WdX1QDgchDg",
  "key2": "4UH4Uipzh1iUNnXNTrHnsdAoivP3dTCzT4XK6idZRZxxQZJ5tZ38Qd9nTVEtP2tSgqPvHDBF3AniJJh3X23hqG2z",
  "key3": "5iikTQqA5HMpbcmDuf9hHJN6XF4MVkX2yjmu36bcsxLzJv6Zg1yTY6ygXStZFxbpwkufZhUw536P37HHuUn3Wfsw",
  "key4": "2WzGUhqxuFLpCtJhiSm27erksRu5paq3CWcn9Z1MjEbUB2N4diVAMbJE9XDbZoSDT4B4kzQ1ESf7aSwBXUGjYHoA",
  "key5": "24AzyHjnGPCoxJtq7qE7QtGzuX6tUSKq3p64Y526qsSm8DoSCGGTnvWBYykxdrwH2W3kPnyNiWHBSpHvPL5ofrfT",
  "key6": "2JD74dYb4DTvMg5r5mLHcUZdybJoWADqSRgNN6mD8vt6tSx6QYet75ytQz44VSKZZMb3XmhufAJDqwsuUYSJZHh6",
  "key7": "3CRy3eT447474Q7pv8rGFpPEtYVBLUk897RUJf6QA48qB7QRoAaCMjpexpCnbqbqphUZFz8jNqNyMWWWXfkwmfFF",
  "key8": "eLVPapXz8rH8gD5A2ST3G9q5v8LSLZvgc5aEh1fQ8fDukKRRWnWMoXJFBqhvhpwZ8psmwCjiezo4n4Bh477CXtB",
  "key9": "5DMfcPLHd2QSGyXjpDSbLt5eg2FcEHYBXxT9Ra1eob2UNKDV9zi1WKHjF31AKhEovK3XQrno9icJNAguoktARA8R",
  "key10": "66FzRaqHYjxW5PtPy89GHbNuuNCVoCnpkbkEjTdNdjhoFeARFgYcCqgP4vkzVjCJchP6wh3cq8DKRDfmVgVWCiK1",
  "key11": "2eL56Yf3b4zZ4apdAgXGTDHcvnyvgnfDcd1xmTWa24SFJcvMKgFxJGzvuaMWnZh1UjSNfF2hXkFqdYUenGsGqZzx",
  "key12": "QP2NKKjQrEMRMz1Ri54xSx3q5EgqKChoLZgZUeW2vrtism94m4zkpTjPvPf5LJ593c5k9gbYF4Nsy92UyGf8M5T",
  "key13": "2CjQKH3BeReyTQ2ZnbHJJTwzSHrJHDfTrPMhP7P9wVrYvr2C1uGembB8hyg6KYspRV7fR2KqMhoNarHnMPPXBLZv",
  "key14": "2oiARuEgcx5HmPEbkqKgwN9X4uuLhEZQo2nYTb8p6bZnCAqk7pw2N2zGrGYEzeMiCPj1UneVgmwdqKPs4MjKkytZ",
  "key15": "4ksQwZPMiR8hXiUGi8bKS2HbrE3T5r1ykSYn1UN8vF6XJhRBhEjSG4JUfxfVHofxar59ok9SQ63azTJqrqUpXjnc",
  "key16": "4nd4reoXxuRzcaUxMKUwSyC6LmVUkYcCRsQppzuebc6HGU2QeDy9RL9VM2K4fYM2y7fwHFHEE9UE6g83YcQbbZPr",
  "key17": "HQwMZ7427fXnB7rgDCk47qhZRb9JppY13dYy9aXpnQENHo4QVSGA3rR2yp51C5RBh1CwdYDgkHDNR672anRM4B3",
  "key18": "pENqvvzcehvzrv3J3UzeJd6tVVvGBf5k5mH7GSwkHs6iDY6YnQsphzjs4AwcFLQjw9FaE1NUJKmMtuQJn6FabX9",
  "key19": "QykNwUQhHyu2k1CQxhuihKiSHFJeBQoXhUJ4zTDGC9HwB9UaAhqPfmSBdcSDwSnvUxitU2VvAGP2JhmTpnuRz9S",
  "key20": "265FDkZR48FP5VLirXxMEMQQn72qCdFePby2LuExJHXpMhueeoHSadPugDRTgMGwuEuNc1UheMj2Nwkh89487CTn",
  "key21": "65sDUJfRQJ6EQuKZy4RryWUTDEJA8RLEysrN4ufBR4qS5Z8GEaHqFe95JBjtpXzefa99swLkGSrq7QC363aekQva",
  "key22": "2trctjHCP5LeFQeRjjy6GgV3Atv6vgEH47EjrAFErvHFEwVFXNxDhfdLFBm62J8FYHspVxeMzKMpRZ9L8GJHDuoh",
  "key23": "5Wu4bNVJntuJUciseX7HqZUmoqHoEcXF4wnnF9whTwF28Jxb5u5CnfBK7ZTmaL8ZDPUHFSfFv85dJNb2CjJ8nzGM",
  "key24": "GCBefRh8JXkukNgdx3Pd58Mh12NAotd7SzniCoCc3VPnptLvYXtBDxkc2dN4tvsuYqSBNzH8EUs2hyoouyW5HUP",
  "key25": "2SZ6fpT7drJsBwesVrbDks6rQ71DCDnEMvJ5sGtHhuu2m84jqUBpVzL5dVBWdMr9WThogquPqKtHNhjhi6pim44F"
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
