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
    "5YLkgAEUA5qBqg5w8ToyrnSVrNuaxDBKZfGxtG82JwGyZu8onsHVW4oJ9Teky7EbpUQP7sb2ESVp1UibQnJnvt3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fg2V2Xrxph1g4e7kMeKzkSqUnnKPxE7PQgPAkenJ5k6YX56RdG6eaDD51uQE5n3FKWj5XnjFUyyB89d2y9nWCFg",
  "key1": "x8HWLgxJ2DoMazAwaaWZNt3jdjhhjQzRQWyihx4s6Ay4fRvGgAuBSjizGXKeHy8D8VDXxJS8RFZGLKcJbmTDDQu",
  "key2": "5rFRzcMVED5VNKWTmPhQx5fRneMKH86RpffxJcHYLNJqj8tM4Cx7aExSYBFekhWaW6wpZVzxDh1oaqETq9NWY7Fy",
  "key3": "3GmspXZygWbEFCqfpueS3frWcqXjB1CCZjTnSFqK6NXrnoywF7oi9aDkbTmP66mC6BcqyZATP6BW5CXssihm89Hg",
  "key4": "34FWXx6DaFdpNfgD23jKJfh6ajrrargcdnB1Py72hMvMR3sfAgSra7s64kzVPkjcU9sjcRCvUGSWgyksaiHmBtjv",
  "key5": "5zfLJCWPXX5Fd2in8cG4QK1ER49sN3sL6sLH1fipPBKjpZNU9MPAMYfpqMePQVtTgukCPbkxdvHRGswfS3DHPhCm",
  "key6": "4MCjeKFUN4fnnLrJjKnZXnfihPAkv3utNmTUiX1NSqGW8GQhsRsGDNj5T991K26XBuJemoiwokq1wZQmovTQEzAH",
  "key7": "4b57Zg4MC4jDtSiWSptYmKLN6Ysg5wEM4UtfgckBp4oiVkZR1B3kuydNsj56UESFQb9xJUhmC7sEokvmhEogJKkp",
  "key8": "5FoHiqLhD75x11kpFyvpPhSTc4Kyer1TYHTk3hXVrybrewAZb5b3kufYX1ENQst2owjpsBtfsPZTYrvt8ayiqXnL",
  "key9": "5HnLkY1tEFz2Hwyjtv7rJaWdF8HbSf5LenM2gDcfHe8FvgMuKMYyawRHTcKFsiTfYERZjdGarpdAh8oSEW2y71Bm",
  "key10": "3FPQAkW8TpKcUXk3WAv7xqssrFikxUDAdxwdn3sf3vAVCnfGaSxhMkc4TWyJhDTLgTjcN9qajVzX4H4wJfcNqmsq",
  "key11": "31W41M7VqyvBgvp8n6Sqy4Z41P9pHYS398oUAZNCHB6F7vfStar7maQZU2xuoujB6vSS4XhJi6RHLCzMvbk6jKfo",
  "key12": "3vkE1Z4CeuMXS7wtpTsDJo8tjDUvhPqpXPM7RybLD5JDRUXybTkBk3TCUkzFSUvAHopRYdDtBRGkbN2f8J4GN6Up",
  "key13": "5ZVYWkTH6N6EttgBdXdu3ZRtRwk8Si9JhBwUCtwPnKf4Dntp7ycp61tNpWa2hMbmfE64V3h9jWRcP3EADHc9dRXa",
  "key14": "3KA8jpB4zxMzaY5cRaMX1F79pWgKSuswrtpDdKybghqZ1N1NVrzhUrZhs4hu2Sa2PepETWctpF84e46Z6dS18hCR",
  "key15": "2tMbebH1MuVGcNTSjJfMMeqFbekzxJSsqk9CmTU9w3Yt4iCcbyUTtKAhFrbNP9GDzkwrYTyNKLxEH86FCoar8kWe",
  "key16": "3ekDh2NA7fbesgAsPGxtZJAxt1yTAHCzcmJ7JkVykiD3iLGKFdU1eiywLsCrjQf3V8rqNevunpTPYGfC1KfWX8BP",
  "key17": "4Sur1axkAj1vVXymM8AjeUSQV6KEcagKH7npHcpb2FvP7HA5gUSXY4yz76BJeFsx3B2Nxou6gBgqZwHkMxCBBQph",
  "key18": "MhUfgJ2S6LKeiHNzRfBDGkCY7XqYbVikdGqXxnFqTRa2JMmEL2j5viQUiaLC7sMa9oxqFsfpugKvsLhpVEtnW5J",
  "key19": "3HvTKbBn4P7vbMqr7AZhNZhjyfr3UazxwXXEaPF5ADwSoY1A9tFFUEmG77WqcBTbL4boKokagpV63kFXHQ7JJX6B",
  "key20": "gxBHscbt37g8syBj8M6vvLfDxTnEeVe5SQSFhsZCqZGv9QPf3n7VQXPbB1voUecH2B5MrHUuxuTZiHXq5QsjHng",
  "key21": "cgwvki7xTCbhq7KbRXgMxSEixpHNxvbkMSRHFP4RsqgopT1xp8spvXsS5VBa2kQyuKVPAzfnsVFj3A9D11gA4G9",
  "key22": "4VozUBtYqwNEMHmMZLp1AcDvSgrSGAeaGixuoUuue75PTSnKqbDKMR5QY7ZWvg8PoyVa1dxs9jUFPjK2Ss6q8n9f",
  "key23": "5A7fvWF8TC4dG4k75RdwxvYjtvPxpMtQYWvf8Gg8bu1WeuZ31ymx5EjWbY6PgyGpRsuAnKoYLC3mASgWvhjJMmyj",
  "key24": "QXY8j4Jgqxs58GppW9HCqJnvFkTPbB4mB1EYVmvFqeuA2pPAnjjQCGSAin6zH7EBkGeX2w9CSiHhxxvvY9RiweD",
  "key25": "HC9JPRErc6QRPCqhcKEimLFJz1kigmU7Zn5qUrwQUeFKUzFpeMT9nL4tzxn5ePxER5TqwjiHPj3TAckzGBnW6wE",
  "key26": "62XHC52qGhFJiCELFUyfxTLv3Hox6JchpVyjtEtu43df3PdQ4pcFXxLRxAH37mCsbsrRXZWp8Ccr7F2hVnQmpX42",
  "key27": "kootD5hrBGUFuPaxJ2vnRo2bckpCR7RJRY25nzN4ER7G6fYbFpEVE3yvszDmPScvDSt2ucdoBStmktGhQJueHRr",
  "key28": "3LChns6unB2jbxm33Ymmz961tozntztn6Jy8hmRQaGnpqHwCrFLtTdrcE335M1jT9bR7Bo2QTQK8y4s4BVHHXB16",
  "key29": "4KHRi451dbZAp28wg7biZGMr1UPYzhtB1x7LFj4VwSLFSdg63k95VKiL1qBZRLzgB5SbkNCXaRMKnXQitfP4f1XW",
  "key30": "2DvxmLez2vGU42Ps9aNJmr8CvPcaUChCEDRzeTYbTQUhzMnrGrxiB6KUKNBdnnFs1WoxPp9tHPLwxbJqav267e77",
  "key31": "2ihL1TQGRfrCCNQqhGQuU8GW1kJVPa4dMqZ5d7nJJ2GTjtW9MbsJURvU7vA8pa4sSQ5csiC8KpL8dnqc2FiRcfjy",
  "key32": "66u5LYSWNqYohW9oCiibZSe7vQFE1PY3eMnSwmReu9HkA4stVdwrjvogDanrFc6y4nucAt9fet613FMPALk6rLnP",
  "key33": "4QJK6vbKEoLm5eNe9oZfChvKJXmtw1vogsTRW6Vh1hZU717kRHENUMbBhABs7wx4mhtnnKiaDcPVHuDusZr3EEDn",
  "key34": "4Lqw5LATPmWoWPt82u3XnFZ5T5tgyaw14qvojk8P19rcvxcFRwyMNRY8XHzjo8NwtGBw5gYEREHpK4HnPdNkS6aZ",
  "key35": "4yYAukZYmudRaP93vMtYiW4LjCuTKnZQuQSSiz5pUz7eZ1oj5feFV9uve4WojGe2QnWg7kAa9Vu7KtTFWTioBjHT",
  "key36": "3dZ39LXgaocZpFTu79EECDVaST15V3wDi7p88TSFk6X3aJbuFz5FquUqP2btGTn514vyVUBJhGfxU7tVdmtGksjy",
  "key37": "2uJKWkiS4rQZwFA1zaseSkkU3PGHtMNcmi7KRzmuECLBJpCpuAvk4CyZoFrT2wYvwkmQfteewaBC1x49ntNVBtSx",
  "key38": "2CKYkNZZhiDmVrG2ih2HRYvn7zk8uQcEBSLEay6WLgM7Kkk61oD7PGW4WmGLwuummPDRPTKytFxGtEh61uhEVNi",
  "key39": "9JM4PN1C3Zv8g4Hi2pTyFVohXTkuQGJC2ntq5Upw8si2HB7b7FmXa6psaWTmzTv49WYhPKgfK9zAmyCuRE8pmuP",
  "key40": "2g1F1u86Lub7r5mjuUGE6WHd5Bs2tzfJgUJci1VPTcazS7en6SzsYpM2D1cYhTtRLZzBAfTDn2RcMMaUCL1BARa7",
  "key41": "5WUYbrXVc8FR9oJaFkG4TVfScaRYbGAE6Cdbnhf8W5pJxYWhHdp6f5QKNX8nhJpwFHDugx3MpzjyFYZEbJvoRAM3",
  "key42": "2mrZrAK6aLk3G1JWWJvn31EPnRuaG6gjRoCCFBRgSzkPgca8XrSBa8yPtQ76iXeQa5qUi2rFTCst2MAyN8vurNLy"
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
