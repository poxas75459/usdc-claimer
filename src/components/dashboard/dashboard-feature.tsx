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
    "4ujHDtQS6NauVCXnox3sEH68kSkz7c5n8sEGoKUJM28LEapiE6eo5W6jHMgD5jR6g5zKdNFJmpSRX1ZaJZkSk985"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUbpLY1CY479Lryt8hjZ2CukwHfHor8DoyrCoBaiiCqk43o8zsECwS5q4g8i27unHWx1Kz1rfk94qh4yM6m7U3o",
  "key1": "37P2WUpp9Pd9Sz22sUdrMMarHtz3LUu7SePpGYswExrExxx8LvZPhDGVyrXNcwUarxVUH3xWSaxje2LMTnBK1nNo",
  "key2": "5y3tAHiNrHrauNVHVGUz64B9XXNP5mXfSLdXXH25hKpRAd3VfiGtVzkxdebnFMfUHy2Ttaykju2Your4qfnQkhi2",
  "key3": "5wK1Ey2MJTfftA3s3HGVy7rzKnZJ9TTpaqTK2UdWBp4LmzjEaZ3y9tbzXfrXityEaaNeRvA282LXyZPWj49BoVNi",
  "key4": "4W3h7xsS1XavJLJgz5qHvo5f8ioVFDkqyNfkTXMAqL8qwai9kHryneBy7sv8DKoBGjEe2yKphcieCsKKde7RZtUS",
  "key5": "VgQJB8b2XaB1PvKeVgq4JJVpfXW7E8thL7z2g35J4KNkANsZwyH8aFR8VrTFZj5HQC755Ubd2gAampyAu5NzfdB",
  "key6": "bzaqVWnMntsWxdqvQ5UaFBCjVHAjvJERLqkomu7yrhR3Ex7FDfqWwn9h1n1EQ8Rfo3ndp1ZyevRkWTydUYHWtRF",
  "key7": "2KkKKwUtixSryGLaXn7kUaXwA7doSfJRkzEGM3AwKcKJFmeoqJeufc7LpLDh7oCataPhUc7gbMWGz11SBGeMzNqZ",
  "key8": "25hytSrSmnFkVkivKM4h8iKAxTdHMQaxSjuVK4N72G18KxKaDc8CGBKATeiCWibDSrsnGhBCGQjebqr6eHshFGju",
  "key9": "n1WvB23EMSRqLPGkh63tvAxJEXW1aDb9iWx6U9otrkSQj7GTfyHontTLud3ihu6b3XvdVi6CnjvUcBETfCT3yxZ",
  "key10": "3zdc6YrS4yiNYP8bNhYayoDNeU9Uk5gcEr5ny5dKAZrsfEvp5WmNVTspVSzhve5zNuKB97gRWM5JJip7dsHNk2Bi",
  "key11": "3eKNK1ddazH9ZkhoM9sEsKr87mvyoePBji9a6K9mmTuSKeQcqLQtSu4qL78oaZ3qqHts7XTVmzALNSNFBJhBQudx",
  "key12": "22ogs6o4t52SCYB9QcgC6htBMfchqZXPHbMuVpP1viHZ2Bps2mkNiVXPttMK5152vQkSe6diw2KaXkZfFPMXGz3C",
  "key13": "BzfdncPvLRaPbUyhcKViR37ALNLRizbo7PSwmnzkPR1Fqs8bXhvErPFirvVg6Ct9G3hPvy6fuCXXiPaTy3tDwpq",
  "key14": "42sMAWF98DEtuJFDR57qjxWNcAxb8LSt97opX9D3dPjgtTkA9h9nCbsfADA2ftFfomxVS238Y7ADfCuGoXfUAqZN",
  "key15": "2ge8hycM6s3FSxthdEFrEA4zbjEPvE5x7cGrhmgE8cZcHFHasrFjjEHfFJCfT51KogHjg53o26aFSPyzZAquPf7k",
  "key16": "D1S6nThEZ56bTUV9j5GgyNb7K1Y9S1a1QUR5YGJAvq3c5AKek5eJVdaD49jkVtRsLkSBRkH5qji7nck9eVxxeyA",
  "key17": "3Rq9qXD6w4p8tYydDZwbEvWTgUPgYS5GW29uRfDqxhqEPkQMtKfoFzU5XJw1aivKdcLZjSBV7ygdgCTCVcHaC1iW",
  "key18": "2DsYfGQKTTS6qSZEeAz2ut1uEkFLwFsm2rdGTgYhqvXikPoyxaEc2j7MqmSL6BCGhEy4MeHkwiiWVVUDSRwdm5aS",
  "key19": "kRg5PTaTuygJVWcfx2dmsQTztnhqvCFXWR7tFNqSTUwnibe6AnqEuAnLdJXLGbQzptQJVncEE2mBHexvctnkyGa",
  "key20": "2bPLfkSYTb3jyKaHMuyo6oDRjjqK5tQEfdUWz4m7fp2Fy4d6Erq4b8rhrv7TGCGMVxAiEbTVCjPnWH5Gy2XFhWEs",
  "key21": "dFkSvnZpNcXcUd8fgKncmSbChsL1JguqApGf8jUMyiUASuuxnkGxkJqPUMMHR6qkG8u7yZ51xNSysQtrJ5iAAc9",
  "key22": "5xyLc1RvzhX8oYGi9AwFYGCsLcp4a392uGKZ1pnekFm5SyjE71z2zWutP6WGZaMo6uhYgS8CubUCkSkXHN6UyYPe",
  "key23": "3n4VFbEhHZ6KXPMH4RiNtgwELDiKrJKGQGmaKPNum9ikmFnLJaGbTr6Y4ywuQinL9xqoEsEi3sLVxRc7sm4cgtDQ",
  "key24": "3nfJxBjhcx5pAeW4jwvXnk3Fu9fzbFyfFfHJbXuUoomFPsumpduKN25ZecQ7jtEamYZCAB4fUfKuoMSSgwhRq1XS",
  "key25": "3WG9zje8ssjqEV4GSLjWoYwUiDwtpvpZt1477tdBsuj3eQuh97H9vuwk7CYs848HwjYYz6xNjdGztThA9GgGR1jh",
  "key26": "rqwMHw6uRBaXfjNMtTz6NwQcuEB6w9hCMWvZaR2uNGBnmj2izdX6cStuMpvydmJKfoWMMwnfH5tXdWKkanFhCmk",
  "key27": "4RjJW5VDYDJEwg7PXnK9yPoZeuBbE5iqB7pDn4wGhsEkV1TD7G5wVj18Q2bH5cDEZgUMkVWYYXD2qZa5G2gqRHTc",
  "key28": "5GXpZZws14Duy7vSr3ZovZb5qqK4MUbbDsEDU4NW8mSjmzPQo1ovDuCtiziWP6HDCisvNtSrFw5UuB2ngHeYBbAY",
  "key29": "4mrxS5RqGQKKs26WhXg6s4NDtazvcbSYZGMqd46BEwJErU3d9HiYzX88JrZWihSU1RayK36BstuFkNxrwmfNDDgr",
  "key30": "5qa1sxVnojbSucCc6Pa4rRRhURoG75QYypdSahN7nZLs3M26CP97ssjSJiLgUdtiMepPkT4hFsuXbar5b7TDgGQB",
  "key31": "wvBzysKnCPip9ZfRAKoTxYCnJhEn18pzNjsU7khFPQZSbTFsqqRReyhE7qc7sBSi1RGYdBD868KkwVcqgbtZfx6",
  "key32": "2buLTSHYjeo178zpc2XaT7iynAPncthroJfAa9WEtMjc689LYfvkH17uomfQoVvP9nCEGNQSk3bKpDaFeungZKBf",
  "key33": "2Kf3hgzNSPRKuLLRCEeCxbyLmv3zp14k1LGo4hixWPk7hoRDR5bdgJgg83CsjT2auNU9FsEy9rbb8RC49K84mTs",
  "key34": "58Ajtm6FiXyuAqbZQMtY811FE4y8knkgPFYvFtjwfsYrtoh9j1LN7E7bTXrqJL8rtP6F872SPS3xHsQsBbNmRQJD",
  "key35": "4XZa7AftXY1xwScihXnbhNKjaQsnypTED6jwSBThbVzhcosT1pKSxYYGAPTUihFBw1SHwWSncH1AomvKKsdAxFEk",
  "key36": "5JyMYEznW6YtXX9FzdfuCvkWv6NUgzHPLAt5M1X4h5TstERTi1BrahzyHxS9dUJy14p9JEYF8cPxs1eUjADei5jT",
  "key37": "3EfvmydUgPx5vahM6yNep9rBZXfyXoGGQyrCkR8igbMGNMMUjEHxghBEKB9gRCXx5jm1cYEgF67tAPfANzGxvsbN",
  "key38": "4ysYrTSs1CJsEs4683P2ydXRBFZP3GD3F8utzECLNLhFdBmgPZVEzZqnUan85gjoDnm4Arenqb5CD7Ynsq53qs7L",
  "key39": "2uMp2WyxeVJBJ5prZiA6TRuCYukhDtSYgWet9drtMqDBNQN61mfgzL9my27Yi8Md8Q56cqeY7XzhwzTAPEPowA5H",
  "key40": "4ceuNdjF6Ak54ZZ8Q9eJs6ce4ogBtb6sHC3na3mRWjxWUfwx1f6ZHVog1dYZR4Thh1XAVKTXkK86u2HTsrsnvYmL",
  "key41": "4ZojZp5QZC2a7BXeomoKkL7UVKKcfeZWDusrG6Xy4tiaey6HkWfiiZqYqbopxtAdb6DG1vcpzS5Uj9Sa9odmkdSF"
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
