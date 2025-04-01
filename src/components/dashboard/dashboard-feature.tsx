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
    "xmHCBtYcpHUof7jqMB49G9Wy3LxbC7E2gxCJDURHu8ZKxQR7SmGnsPemy53KsPECR795zEqo9x8E1YbEJNov9Vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bwrwjWEaU5WZ4cQUoEa1REya47pMhiHpCY1rU5VMhdTAVGaCLeP1YM4pujkuyTe3TgS3EdRkaB3kKrXRznSR8pq",
  "key1": "3mpjKuXqPRC46yhdKRv9WxxXyPtEmg2ECGQyiqL4sZzAJmRQkhHMJ3r7kMZc2tLMxRfP2XvQMPVjjkQQo7zppidy",
  "key2": "4EZTNh3nVX8i6md57nCUyxbms9Js9fY5sWiUz7ScrFLLbFSEcqMUFquPb3mEqdrJVYJgh9EgGWQXpD9gRbeZ5TsE",
  "key3": "3HR7u7LZCtvTJSFU9jQUPgLE8URsU9Myaf3zzqx71Ayd6get4GUDpnNQsVTEVDEUbT61NkjzCYKML2EW2FBkEVTA",
  "key4": "eEBHxFTyhspLGjRRYnqrjYuHfAtWP3dTf8DtwyHds1Su1u8jh27PnEx9GFHnw92x4P4roNjQ88Xww6hD7QEJ9qk",
  "key5": "3TXmJyWKWD9FaQCaKjzTrbB1aUbYLxxXicY59Yr6C2PdbqGna8YKGdUEYATWbJG8YpDLovroStWb88LEhcnZaubL",
  "key6": "U3ThM6HTVYsSyXShqfUeyA8bdpA9WJAiEbvF2sXo2KyAnQEW1kDvwwwNsn6KfmjeurFS8BQfYjFjB957VRpQz3v",
  "key7": "57F8sXeJtTqJ3cbtNbsVYFFvEahS1qLPkWRTYqiBQnHY7emNAmsc7JybyDQYkbQgYYauncia9bUcjRSzarKAUoHz",
  "key8": "33jJwCKp75aiqoiJ6EXqk94KiVRZtFhUycJav9Dkz1Znt4qP4a1wLWDwVxdBsHJz4K8PNGbGfv3CtTgGaM3SZzuS",
  "key9": "3jjwAS6QX5W8CCLaNEjbnPpQGPsheBqzKrvVfEv3JGQbgwvrJwUDWVakXk5nFKDBed6KA6iq2Nm1wLqv2qqscemn",
  "key10": "55HR4C6gPS2tD9UNqGriB4HKnDpqqSU2bLzSvDKnzJBofzuewQCSaNa5W8YL5vkvUht8zZ68sDnfF3kPieh5b4az",
  "key11": "5dHDGKS5kyhBNf6x83v8jxRhZRD1t7THmPXRUun1XiDD3h1BpbbiF4PgJgZrLyxi78DFg3PKmpR1jXu7yjyZg1qB",
  "key12": "3QQmWVWXr3ymD3926jkupaUz5RFCHbTiynD72UjHHxQPxnViaaeKGw868p5kQSoG79PJtyXwwrx4tCfmGc1ToXJz",
  "key13": "JxnW5wBDVbLfjPeUgSzfG3ZbqnEAe4SgnKRH2ZD5tBRppUx8v1YaGkryEDtyqb98n5G4Js9jtqPhHP857rPvQUt",
  "key14": "2jCXmi4URYPYSaH9YQPaPRk2qwEB2aL5va8y3uVSqBxy84U5aZfBGFid3wWiVZBzb5N32BnnhVCyakq2ZmDfHFXP",
  "key15": "5Brvb1hA8B1Ao8GjbFKLwjNFBfgC6qVMvkJscA3tEmyssNXPgipg3Jmrvh36EnD8bsVy2CQ9cNTTWkmP32km8Nu6",
  "key16": "4Bp7J82iRiFzNj4yGyRw6ZXGwsjr2TWABVRXhJjWub6Qa8iUjZYeBMsbM3nbbo2Yot8M1nXFyDa8RjXFKnmpMAg8",
  "key17": "ezHASnbTiDzFS2w4e8B7zWt3H9dwCzywPoLYvVm9NRp5MvQWyFtwXYUH6nHbMfT8wjb4p2Bi2NrELSC34etzXnm",
  "key18": "5GTCZ7oBNn8uVYZ7z1m7ukNhKvYfEDmHq8s6s6ZffdVsjnC2igWZfRj7EaNSEiaHkmnQvpTWL7r2m8hbzk76WJCe",
  "key19": "65zYJC8V4gT9zEJ4jrT6Ec8nT5X9gsaD8qcB5sEG762ob15CDfjMQk6V56J2ES3nYXBdawrYyHB2zCSZ9M1DZVSA",
  "key20": "4kAVk7wEE3dsosf24JFRhz4U6tZZM1WZSxb79yDH8uLJmDX2o2bcQQAg2KZmCR2zCbqFAMg2S9kga8MZruqNt77t",
  "key21": "5zCZ36N6VcvKJgvHid6qnpaFFxo8xtJga56hLA2EUzEWgZYcWM7v6bsAnXmp2cjGLwXmgPabr7hdAR132PVD1yih",
  "key22": "fYupgDaRXscur4Wb3Zfd66XviswN1NsMp28s9zBAgTpCBx8cYAFxPF5ZjJ2NbzWjrtvNtZ1RGFfvKWoHbmVHaV1",
  "key23": "4Hypmjtrjpk3JtrqV2uuneiEcd1SQEQ5xxnyVkSbMqMo9swexwhcFG5JJTMi8VLXsPEFskoTY8XEZWdu39KDKATB",
  "key24": "25jrVzCJgJX3Vg51dSP2j8J6gVDDm4nGjBEh5hiujncSseSERgtW2shfFU9E4bsomZFgvStn7ci8ttgjCT9EiLxx",
  "key25": "5sbSfmiHmZJo8S9QBA5VZrMd7QKkh5qBqHwJ8dGciwVywCPPT8s2eii6pYPHJYaUFfrSN1yU6UBK8QTW8E4WUrgN",
  "key26": "4v4ev99iChhk5LHw4hLsz1fxhwa95rapFZrQJzXeHGTpdHDfjTUxBNQVufQ96C1hpQpzUV2tY1Aa3UAT3WHVRCn6",
  "key27": "3f7nD9zyA3PpRx1n8msvJ97mUyGEw4vASfREX8xmW5TWygM2q1PXT1e1fLULrGkrjd6hiQqK6z1up2oY1RxAhbgP",
  "key28": "4EMtXhRmPGzK3GAR3D8nU1xiEnAq8WHZPawTHoC1chEaeXdXk3fN2iz2mWbNA1BMorVFR7N8L6LZtyDTKyFdq1PT",
  "key29": "3ZVz3V47Br7hJw1ApVVedjFMEgKgsHBcqewQUSbLDuEs9k3NPb5Js27jkqU6WkrBsn1vSTAKCPakGbRufUibvhx2",
  "key30": "3qdc9ChD4yDChXZQmLU8BLHDgm535WPFjAVVge8AM9wu9xZG413YmQQX544WhmiDNLT4PcYiHh1rS87L7cNP3DGj",
  "key31": "28td6bmT8weJ4keSSmnyx8f9pKAfJZhXpx9q3eJw3WHWGHdbtxh3UR47wRQuvFs7RUisQgHmMVzbwQjGuBj7is9R",
  "key32": "2Dgo5tdm27EnCQDwVC5wdy157ieotqqXwPX3c4XJBMz5wzPTv212pQrDxNciQTqQ6E6GBtBikJH8zWqRtDhx2gro",
  "key33": "5EPmbYAEztvGWmoyusQSquLMkFPZALsDW26qr1EShzzadaBVW6rDZKb76ZmbvpRuGZeVyXfj94H4T3sEo1QVy9c1",
  "key34": "5uSnc6GHmpfMaPRkp5Y5NFxQdgKwjg4Soj49cfRPRTf6E4HWyHECC2y8MRGPAzPjs5aUFjXGXLH8AogMB1Tsn7wD",
  "key35": "2GLsgHyaEfvp23VnttzEh42QyUWHmh2kFH2Lfia123ZxjMDuRZVc38PawUvc3yrSxJubS2TytK6PDUjpte11J3RV",
  "key36": "LZNLpdnaMgNSWJ6eyxrc2fmDdF6XjhU8GzSZkxiZCFTpnmsKyVyVVtJBUgtnuJMaFynhvjBPtGuDHCTrYActsBU",
  "key37": "2r2Rda3KVNtr2kLptrJ55rcDXMPodDTo4RPbx5tNyaRvoPHzQXy2j2V5dfBKJLzbvCd9obSYs3dbeM32Qa3acmQ2",
  "key38": "5qA1CYZMNhWbyTsQBSEBjJSGBuoqk2zb5u9615sJXmUkSfNPZ47iYv2MwiYyUgMD4ZcjUkiNmEduhreQBYicVVSM"
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
