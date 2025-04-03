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
    "3gEaWz5JpnG14w4z9azivHRVdTYEwPq6DnsXxyKCK9HDdvYH5XUJiydn6QRydj6UKYvaxUfp5fqBbhCn5Thqxpn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vS5DioYM9yWrGrfKnwXMuXQxF7T4jrorF6YUDGwMRaodD11XVgQq8f23tiYYVXncVqrKs6JA3wFW9o1ZmEHnQmU",
  "key1": "3GP3hRyyKB8VcTF54He1fJpgup1iNGPGSsfgkQLoU3uWahWQVwUbKR7Sx5EsFFpQQgkGUNW6SaioKcobbpBnWU3",
  "key2": "44ALjjx6B8qNp8587pwQLq3at9i6AbiAgN5WMpyzRtZ5n4bYqmfJMbQYiAbut2jtUmJYVtwGj36uzah8vvhRoNDz",
  "key3": "4KGrey64tK3sDqTesNwPjBnw3s3YGjzNSLwqDysMiURL9dnqDGvuVLfrHLVLZoP1KKBmrsriqpUykr8fQgfwJJh2",
  "key4": "4Dqvy6DNosSKYHoCj1XzvxFdqTTb7acuNk3awAM1VKQZxDeeGA47CLAe5gbWtDmfu19e8n15YfMMZTJpy1JXXbv7",
  "key5": "5uSEcNBvQSgrLZg9oQ3W2CdKcbGB6uDgCgkiAyU7p1EDf11jPGWUSb9yPfhkXvRz1qRGTXwRzLaommgS9iCcWwjA",
  "key6": "2sQeYkePHHtyjBUAiWMuSisXQpkszGbax75mEEyCGkGYS1Leo3tr1x65x8Hk5gW1tgsALc2u5VEuh4HiwuJbk1d1",
  "key7": "52Hb54fwqP35tEyVqTjiGwZE1YJA9QzH896HuzmnyMxteQPzeTSX2HTZajEkXvinzt6EHKTgX7ubnXAsc9GNcEb3",
  "key8": "5iyF6ZqkyPDgfrEgTd5oJKQCaDhZQ56jZXsnGXeVhDPZdxWVpfopbr5vZJZcUEV3jG4wVrPH473Yqi48aMZprXnK",
  "key9": "3uKtZESMd1yYS86Jpye7RHKoktuxNr5hBVVWZVwjRteDxCVzE7ReWZg9ZKzDmkE8vFDXiKeKEh65USdxm4r42zhD",
  "key10": "4GhRLwtP1EoA4vNUDRSdeoxNN9J5SzxrqtageJK3bTFB62hDk31aXu9bK69McA9asiN4MVprgGT6vwiHBmgmzaYP",
  "key11": "TGuuzS2B1ujK2rgqLKw2zZXS8yPVAri2hDkejYncagDw6mM2PybrHZioEt5yYB17MmdAaczTE14g68WUrAKwi65",
  "key12": "5gKuhqa44mAeEWSz11Ky7g2zTQ1JNxWZseD9BcGyzkw8MoQmRAFBA3weiR3dYMvv34CxkmHkaSyMBXCvGZjvEKdW",
  "key13": "58L1GMT4eeDpCYuP59BM5hr3J3Td1wXJ9ayLLhcusFb94hy2V9JQLbcZZmDhBXkkAtf7u6N18j5jPvxUeYDSVEHn",
  "key14": "4Muz42FkAfbvzvGXAMpG5oYufKZ1dJKeXxXhTVdqRZCUYkd6r2paXtMEmW5sFQwwe6GZ4872XfFvLyaDBt8FYh8N",
  "key15": "4r63418ztUiKKzBjBGLjYyxX8HMvpuxXVmRc1VNeH3Eixn8W7uS9rMsDq9UgQK9QNpPCPf6v8vj1iZLKgm5NmBVB",
  "key16": "3JQATFJZ9urtMpEP53PkemgpPT77PLBEGoHfrY5HsnATkyQaZhY4nbbnNV3cFich73M3Mn4A5iSeZxCk2zTWhKYe",
  "key17": "4pe5iojoUU8qRFTJfSh5Bg4V6ZRv6JVtmTAoptikbFWMbR3WnG2Z7wGYacmS8DgganXGcbDRguzE2gwkYMZkP5nW",
  "key18": "55sCNojUD5DhopHSXcNYb8U4Y9j4SZLpqsFTUzs3qwrwnv7ndSwjTs6eYBXH9q6CMctum5YSQkHMVE39iCyrgNUx",
  "key19": "5DtvEGTRAvj95RtVppePsEqDy9o6wdbimsJBYf2Lc6YZriSMrx5gHiShcRGkNF6D4fs2NyfmaD4mzWPXhAvUqq22",
  "key20": "3MUJST6v7E78L9NdpBmytxDSKmVFCz4Ak47XSNMXBwdF6RC5CHqThCFicAYGGrTHH27Dhp99xQuX4fc7fqNDSYS2",
  "key21": "5nTFZJN8cKgCRtQxxcyGSNr4ohPBR8bNPaL16orHy2vHgbSy8cz23fGzTSb58GgemhRKby5PxttHuP3a31WSDWx3",
  "key22": "5wR4H3kiBaQTBkfUm3z2qkbUXtUcJsEuVoUofR7C47szcsYfAHaAujZAQC4cfBjiSERNw1xj768V1AWCMewSADRQ",
  "key23": "48EPUtpHxDoCixUG7zix7bX7HjToZHJgKa95h8VyLnE2bDoVwaidPXL7Qna2NuBGCL7KsEELS4TotWY2KSWGkim7",
  "key24": "5vd5kx74XKsA8nsqPFgk3KqCqNjeLRVZWeSXW2io4KYLq6wtG7C1YUZVXdivusTt4SzZnNYX5SRpyCFmxAxP3GbZ",
  "key25": "2wour7HSnuAzv61P4LiytVSiTtXY6e2pspCX9DBuadzwnSrhyNwyB1CEmujoCBWc8X1jYnuB4eTXVoW9zLGUVCNs",
  "key26": "46MgUY18km7kNUacUDwBu5oFAa1HPX3dvpKFN2YXLR4gEt7rg54N38dEpzhf5iuRdYNogf6VtHjB21W5vBEmbw46",
  "key27": "56tLJAmAw4Ved2s3jGGt4gauehLwfburMkhkRDFZE6DNkiSBPsBHCxGsghHLB1NgZ4EUkM8jzjMhjXFJgzXjDJLS",
  "key28": "3ZXWHu3kxfjcHBogXV1GuXnyx31wRHbdpBrJxFjH4hBQRf8F2nGpgteExtFRtJDFc3GjkQUzdigTB6gQrcSwyfLj",
  "key29": "2GVUvwFJQKyG2dHzpaGvJmeiv5ofXkZTV48hHPHrzwLZACWykqfywbWWCbsnnuCTwGeo7g4dM6y55DveZvibAyBP",
  "key30": "2BhvhFr8hpgG4VA3S9apPanuGb5EBx3evECMjZJgJvK5MDC8gTa6mnf5W6smBFN36ve6MLwe8gr4MHTYkumiq8LK",
  "key31": "55Ysery3qsEgVubRoGdycY8PqCo3pa6qPf6jjuLwEE8xrPid7AVo5YzkKtb8Q1uLkgtDGqZpPYU3GAR2uYvUKjif",
  "key32": "5YKdQEdcmZTQPPAi5495Eu2F5siEpu9AbfVFkhfDJZjFHc1oGAN7nTaMs9mVFvcPyBgUWBud1Dve58gzVua8UnGm",
  "key33": "5npKssytpbUrAYYgrCL7MgZ9KEMueejPSApAghnji4zzF9C8sbDNPsbwMYyRsk3jmCTH6BUgtEsaU98cVrEtUUJU",
  "key34": "kGrcgsp2BvgitrPXPyTjgnp3yhvjmhjff9JJaf1X8fWUnzopDa9oqLcBm3NHHc4SCU5ijM56LYGiUa61EpxTWbm",
  "key35": "4HEhpfuj5HZjUBBKxWwTHC2jsXqp7VdvEmnmQqa54CfAQwjAtGNsE5taJcm7uCu7TH3UnHRxA7BvbD1SNdsunARu",
  "key36": "2kgGdkYeQKqvft4ePuFSMP845gUbAVAVYpzVwK8dvU6HNwqr81PVG9cXbnkydU3hQxvLue6iqDJ2MS5phHpFw2At",
  "key37": "3coqe1DUcJmJR43RZEMhYcva1kKdoNCeQynakVwykjBR8Gv7HhxWU6jvHEqeX7EwzP2BjtkuLAcFfBB9tVVpgxpK",
  "key38": "5tvysd1QNwu8FNJJwjaLAWuHjqgMYvNRLDQC1HLjVJSvsqg2Cmz7FBB8qJqs8BCsqLgCiK98P9rMqt2c6JTZ7bjv",
  "key39": "WQeqPdC26JBdiWbwRASziLC1WazmuFHxHe4x1TRgSVdip82oy8U8xbXPqfsNnsSsPky8v7FsJ63hsveMiv9eppg",
  "key40": "29ufQJhziwVodQb3Ct3HkiczvrxPdih6bhh15f3C4xzMHcagppfyTGL2twnq2fGyQG8QdBxMiDZTvdTDL6wL4Mud",
  "key41": "5xM2XGPZkbManHo4SHa2tkU83ZZTiaX9n5k2BcpFe4LRpcSqeKyE4XE1sV5iQsmStKiN9fvppnTkLd1q2NXDvdLu",
  "key42": "4kZXyV5UT2APMfczyNKnkPe5qHGBS12P7j3sofd7eiXjoUrkS9Le5UUezen8AsNdeuM6heVmSMB5ZDwnstwrweMd",
  "key43": "3NxqThNUXjUrxzkRdktiw4FS2ekHGZgdRhdHQZ1dTrdkV2n71mdvJqeSHuWam5X53EtQTuyUBvHEVGn5cNx7RBEY",
  "key44": "4GuzjPGrmphq62PGc5hD7cFmG8RevJov2hm6BjCXNP4qfTectTZ5xcvPQGbXdgScwQjyqH9QbmyGCFpxj8srQCFm"
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
