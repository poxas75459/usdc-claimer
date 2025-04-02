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
    "5Go1cCZCk5qBCfFinFfDFmwbn4UftbzufL7qrs93uj7nMBQGyXC1V9QvMx2Jc476LDfoyCEonBtAs8iPh2v619K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9jKLz5F13YYhydGt8sy9MabrLktefuGWU4CSpLxwk675ri6tmtkUCSdCc2oJhkciZN91WasggrcjHdUKCH5Pi65",
  "key1": "2xZxxceaF2hoq5JKAqfh2WTqm7XEEmGWsq7zyTWtxzyAJrq7dtgismkWH7D8oU3wPivCvVRJAKyQvKqNagnvTHH3",
  "key2": "5o9jCHNXjAAdghpMri7zWqu57Y6tUVzMDghvbb2WTt3Gc4BtJNb2nxEsgfJsV2mu2YJeWYaUVQX2cb4CnjkXDw2H",
  "key3": "5YVQYrLEApjnjCBDHt4VhPysDCiZSBJWwPaZizyLJqLa5fj1nSF3zPYuSNQ7v3dfRNGN2oKGZGAbbBaL2PAMsA7z",
  "key4": "5fxoKT5Gk3ofamDiF9mxxz96SeCnoGCN1Yqdz941JD9r9qP8ukgSKSMVCyJQjPPKoktDb6zcSUfo2nFWGeZLUYEt",
  "key5": "4jckbDNKGuPMiM97U7dhsjcGECCyLJCcoH7ukKLrq3ZQRcYYxEqukA1ZY4oxmRpdDQTrJLiPSYiBHQZTvtKiCMmq",
  "key6": "3AgEmLLxtTjmPcWJoBRRwG91pV8Vyre945PNawmfYzzREv1g39Z4XoZbD8BA2axDYMbqu7xvEgox8ey4k8xWJf5D",
  "key7": "43N2XMy6dEyhYEUpqzyysVDviQEHtEA6GSiRT9KZfNfA1P3BMx1s7uBL7gzxKkJ4qiSaNUsrNS3xw9SA2wGN2cNs",
  "key8": "AL8E15pcx9X9NXT1U2zjUfASBfKKWTb3h1KqJ71WKyyrZXX9HEsYPfkxAj8daZCAcAmNSYysSUyyxexs6yDHjtb",
  "key9": "qhXikLWaRvUyVR58pLLaXZ99D6uzB3ZX1HPnDyY6BQjr34Au5gnELCTb5XmbJNyKSaNBPATiLqe4yd3gzVi3zUR",
  "key10": "vdkFojgGQDDA6GarPPQQis2A3FyRg7p43EEmGkmMCXPEi5Ymi6ekh2eJCSW9WYTTB1UVVaxHqJUSagsVDkMDeNt",
  "key11": "2h39XU71Ghb2ZxNBvGX8g39GzsT7ZkVTGeZwiUUiUCsoHgg9SyQ5vg9DfsaYLF3ufh3UPHWY693d5diJyz3zrX2z",
  "key12": "4DQkLepMDoMZJinEBpb12wBugS8zBfvvyf3odbeJsKE8KWynBwLJvGQ47ybXPDp3PMNv7NwjSGDN5KDpGWrHpceZ",
  "key13": "4uWxmyWXxbsiV7r2h6M3ZkD7TrixKmBJnzMSfiDVWnQkdxeBXLfAby3rvdHzsNEMmsAxGtPwpYa7kS3z1R5fkrwi",
  "key14": "66TSxvRJo5jcihfQM1q1BH3ebwyXTVWao3nJKtowPgScdsGz8Z4xLGjWh2bAVXV9ddoq5639Zay7b5EjGjncKfH1",
  "key15": "3uLiCezJmdHydyR6eCpDMW6fi5oKyG98XdLRKznCCNrR1KYSowrZgoxMd297g3VpsFDJaQcSGWamvdPxaz8vXcHe",
  "key16": "3Xm84aPjhPHJpR9dgGyjUyavK7zr6DpwG46wNN8QcrF7iADGptri1LyAEfDu5zggt8kfSCHEJkz9t3An4mV6wjJB",
  "key17": "26p6E7DT7SxPTb9DPwtjT7Vphgjitw4KHmdokMXuJDkEeuuShNNQhZ7XMML1Sq4EPyEPPaDqByqoKGDSVRNYzzs6",
  "key18": "321mtmwbcDyNwEbk3266hQhQjD9P3Azmx83rGNzPVtH2Vw6ZSVtU8rWhAqF7pbDsP9iPnPDYHVhM9EAZNiu646me",
  "key19": "4v3W4zsLTD1RNFNEHNYV1wb9XGKUMRr6ohcp7ABi77bg4FgUThUsohUN1ZdpvVGRMRhAVLesELenFHJ4BCUgs5XA",
  "key20": "UNsw3EmJFoQd84aNpoFMRp6hmfN33HoWt6C8CfXKFVcbuMHsVz2u1QfrGPpnPcoR5QmLZ5dMVDRwVvyEB814oEg",
  "key21": "54ghGJvADeMi91ZU6s3aVXEvfBxKT4ZfRJAMemH9BB8KcQy4Nknxb1ZVmBnmdSWEgVtjCR5MGumci7DmT5ALDBZF",
  "key22": "5JRV676oRQmHQd5kMYBBW5wRddva66a5VyCfYpwCCDhP8Tb4Xth6vpaPfrrNV4kzCErH4mF8WE88vcjJn8Qkhg6C",
  "key23": "ui8iVQZxrde2scBwnPTAwvNeYNTk8CcuQZgsAeQQeHCsry4wixmLRx6ANL9JFcPAMRw3UoR1TWJyw1VMMM6p7V9",
  "key24": "3MBQoVUBC4d6v341eEcFRNBS36nAmxUAFfrssdP1qUuSafx23AJeVTTPw9bkstib9TMu8GfXDGfNafnUj2dxkUJY",
  "key25": "Vqm3zX9aaVhdidXvDQA6AJMQsSyxDSkqGhT2qG9X4Fp4t7hT6YNdWGptbhXZ9N1QFd3r39hSbRazvuBG2392DUK",
  "key26": "3Y3SiS1iw8hGdsSqrgY8mmHXC9aYFHUFK2m816YNnLsooTXEuAdrMaoRoQnNyjcadMi73BLzyVLHxCneozc47nJk",
  "key27": "46zDfKsMTcVJPYHnagSe21F3BTrgE42mWMaQD9SEqMnKB3HPe1c4s5BQdL1cwXfHU6KSgMh3aqy5xzcCGfGoD5AN",
  "key28": "XrGYUT7atiKMG5nXWo36KhZP3J5vbToSbgoFq7fgi2fVyX7VpVSnSWfnWHp1WppGKrLZaFssnq1FbKfkbXv42Vf",
  "key29": "2tK6bE6sXp37ojShfEsSkyhEtTbadz2QexswBfVvLpEosuf1v9zHBsvn7h4HF9DHdB1RoCPzYxhCzxbvWYq7R3WS",
  "key30": "TJCBTXr2wY7A4CnUesNei8Qs83Ex8Nz4ATdZzkna3zo5kbiRbJZEqhQNkqyJN42WoDZZHxGbWat6HcpsVCpMPD9",
  "key31": "3JiTh78edU4wTbxBs3eNbq65Vk3SMJ9XtdMKRYvMabwk3LWnU7Um7i7LPk2fCaF41C5mSz5Tf3MyBw9fBtn59LHa",
  "key32": "45bCopfUGiQsvDjuCQUd8nCTPp2WLArvwDLZDP8STDPF2EJ8vSP1J2c9RNj2apg8hmhc4uE2CdMaWzqqotQgFrZ6",
  "key33": "3uFDwyRjVWmmQ4Jh5BYg8k213aJPZa2MQmU1dLfRGR6xuEtVwSQ5p9TzokYb1Z1kbku3y6pcPEezKyEEHR1XYLC7",
  "key34": "4XfG989s9sa8DNiM3RVFfME4C8aHK9gcTHMkG5EmZVTqizdkoXqgGtiPZw9UJxDCY4y9s4kq5VF45r9X7WTnBTGN",
  "key35": "2RpWERmLRNKWo3UHAzpKcSdTZd9waMBZ5jENQa3vybbnvqiEqP5kwUvCxuppf5Pa7R6MQ3xEuP68K1HobrrTSgWJ",
  "key36": "ZKckeTQpKoHvcL6s9cANsBfjyy5TiDbYZWgGzvrb5PvYq5vqL1uw9kqG7meFdpZVCkL7kZBRqYRP7Zx91mACond",
  "key37": "2Ezq16auKogTrD7s3aSpT5c3u4phk1wXe1jV52E2CWH4yhhxSjrQFDApxMF57qnJz9XaDttnr46dW4q2VDevZwwr",
  "key38": "3rPUW7TjEfLgVfEbHFL1JwvzCF2x6FVueX4pwa1McEixMqVFAcsXHXWaSY7hUNwVHzjJJ5wrteEYAWrFQqJGtphK",
  "key39": "5mmGfziR9skUoNAYJMXn1i9j8k9J1Fi2AfRruEKSog1LcbA5MxwtykxS8UGT4MxEV8EyGjUz7iv5RP6DAgcCwV9b"
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
