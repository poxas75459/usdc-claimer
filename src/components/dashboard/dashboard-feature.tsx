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
    "2Tq9oH2QsUaKfUCW7sExzHPssmTPCnmFgZ7Es7tAxrMQ4PRQs8UxCP8EJXProc9xzNtpyjgkwp3psxJaZGNu9dmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bc9Hqz99pmVk8XDZKA4BmoJYr5zA2NcgmUjYBQzxKi5NMtK5FERT6YGVu8cV8pE6UdyXsVYzgLDSYxajFmBuPmh",
  "key1": "5TL8x3ChpbJvEbeoUbEkA8JKk6G9NrK2gSSP354X8bC2oW14VUZQkUoPUJ5NFP8m4m8d9nKKFDZAUnnqTT3bU5wC",
  "key2": "39mZ5rJfEZCPHerrZdm7SRKUZiSia7Ez8psmyJyXgrJEgWe4HRDaPTsNCkRyw1u4ur6aa9Wp5yFFUt6s1teDXURo",
  "key3": "5W4wjroVBYSryfF9MtGPSXBhbsSTP8pkWfxJYLiNwKrB7G3Qge5KDnY2RXvdz2ioeZCZXQP44gxw1k2225zSGFgj",
  "key4": "5ajQiZrJhtTiFYubuyTvFPscuh6y9K27DJN1ES2k5LgYqGsVCLjJ6fUfXqZGiijDjqUmcCECq3Y3HPSEGQ1vnTVT",
  "key5": "574JjwobguAPdqucrSuyhrwzT8HxZjRaDTEwQKrvZKFnqpXxvwcfongThUYgsrGChecDiYtpRUpYXJ7np7QEWqEr",
  "key6": "21o2W5Lr5f872YcefsDcgvRfZPvqxPxJtW8SuzDRDk5rFYSkyJmeauaXvHkvwUhu8nGVj9nsxhnXg6f4dycNNCmu",
  "key7": "3tZmBmpguiitpdM4vu1LVmSAVoeKaveaqGccgKeQ9Rfijx9vJYAkyyfhMByR8tG3oHFdM5E3raaAZVxh2k3f8Ur8",
  "key8": "2stpLi9soDxBekpviihh9XoAhP7daxaB6gaqF6QDwyKLRN9iQrVAuP7M61Mm5v4oUEgNeLDGbvnv826nWwhZt4aY",
  "key9": "5WRYVSLBsPL9xbFMjN8mByqvEPJE2C5x8FesfVut6c7is8VLLyHx6AXAXJUXLXWhtsVeAgbconRSicaxGrE72PvW",
  "key10": "3Z2KrTMF3n8TQMGNrzbN1GpSn8xaTXXeUbUnroZx6qWxw5w44R9MXrt8wEbwc8xzTN7sZiz6nqQXvdvMVJCboLXL",
  "key11": "4oGkd1J2nLQAViVPR3ciY48din3mMWRSH9qypa1HZveyLCiq2HLAse6am37eJv4yNWEuZwApYNRYkHyR2ZAXVH64",
  "key12": "2hjXtVj6EUTiFPyjNzfJSy2qecE8JQnaNK2xYWJR336BHwyzuMUJN4GTFM796ZtGbK6ngL9zn52e6aHo8ziVE9wM",
  "key13": "5NR5b2oLjFqK2WcbV8hW9XZkeTYEEdkbPH53TjtN2niU2cabjDCDeuwU2WrrTywhqTTKZJcqiMmHgnN7US73YeV5",
  "key14": "3GZrueuQiV3pNfTnH3oqPsDzR9aWq6v54GD3ANZFV5Cqfz2ZUjahj6kVPvPsFZvy5TpNfw9rSbpXpCxZ6Px1qGVR",
  "key15": "5mYU9UnimzWG7eXeSfFioHWwyGzuuRL93B1ZatfQJi7KBNnRchZcne4S3KiYpoP1tD46yU8SGNxG7CE1pKoHa6PT",
  "key16": "5sWmrnZNurgSskJfwzS2UkkWEPbyi69Jz9Nyr3giFXdYvv7DDDEnxXRvJEeXa9VuKHecXTerPdfFjzVcEfWg5jsF",
  "key17": "4rp2hNwuZnFpEehohLLb5p9JNXPU9jdkPwYN4UFBe3oVM84CbnSjySLYnhy1DJqLpcod1LwHdMPXbKXAvTs1pvfU",
  "key18": "5UvW8VXsFpUnNP6SCsgGKXJEb1U2Mm6wbsyVxjxKatcfRUhNW4ZqVYUsdaAdziTstPCHznX5fFV1uCA3psrVoTSF",
  "key19": "n7WRTXP2Y6DoJqXzDMaLuYHZnpVKChHZYaYqqbWwmfAeA5Wxq6VWPQoaVqCNVjDapc7E8RsNEmti6q3oFbNAjnz",
  "key20": "2GE2LMxtWfsBATPuJwgTht1E5SnPYmw7eF4DsQyc8SC8SgRwd3qxuVWAcEwEKj1xYs5uqqsD5rg5W9soxC5eYezr",
  "key21": "4SpU3Bux78e9Mtv3MmvC3SKjYSboWsQUpKh1oJM2TBZw1p6EJwPGroPix791fEr92HwsPo5wh2gCNWzcxATprk88",
  "key22": "5oSEUgiTVzn1iGTFWY9FCmX9Jvc6ExhMwUUxfrbYgJgTkN8ndq6R7CXeRswANLFxmJgAYPZaTowmUJtauCdyAbda",
  "key23": "5zJdgBkS2P1MzkpRhq1JH282ajYop9MXNMffp3gWMBeeGyMApmv7zm9SoKxgbRDrxanxe7KnFdygdHmNghtgJATJ",
  "key24": "4kqZ24dzJ36jhxCUHfAcU9WsVqoHV3gqMUpA8exobEKqo8k1rSvyXutHj9arzvF8sWkHDDRurX18Sgb6upFdTMG9",
  "key25": "4DwbcvaY3dACZpV4RzztmNnEsaGWZZjsXrm5pCcJ6p1jJrbKiqLwNS5Rzvw1fLEQD3yUP5WaHEEHsQmgUdVw2TDb",
  "key26": "2itcXoA121G5fRm49GTrmDL3VwxFBk6UjPCH1uZD3WUYc84WN7RECdtdSbu7c1T51g6bzKkkfqzjQrdPEy32PAFi",
  "key27": "38mxLVFdtQ5SJ5bNSwH6Am8x5jFAMntosCupu79iaabJkGNisKTEQBWDs62HqUnsuoucvJeDHkAghvpHU992r1WD",
  "key28": "4vbe99F3S7DmGYqwKVKzLx39NUbymCJ3h5zcQbMgMuJRxuZgKv2JEbsrKRtWKF15GePBbvVngzghc1mqs7CihxfA",
  "key29": "25M7emdWH2giijjrN2P3MNGCoNzPCpNZqjVYXVqHNx5CppPUNf5JRrFXZFZi13AK8TkNPerbk9wgAWzVD8jt76sr",
  "key30": "EvYmkJQ1F3A9huyej4hnS4qePEAfXfd67a54j2tR2B2W93DnmBmfshmEiikMSkyGLV16qzeq6MyVBEgTvPJhiSj",
  "key31": "3o4aBqES24LgjTJjnMEgRFXCXvEtBcW7M9p5tuSHXvh3wjMhMVxzWArYhvg6Gj5rDeQAD4QZCnQAnY8Xi2SkM2Dc"
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
