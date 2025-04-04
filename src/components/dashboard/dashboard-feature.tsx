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
    "3ZBDj2cAfNF2o1Lq4DMQV2iNdLH2vgYUTQbADAMTtAk7yX7tCjiK3tVyZXVnQ9ar78x432bvUfyR7KSkWNCwhZwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJkG2TNDbViiw8P9WSw4HYnrGfmpbadUXEo1N9fiosns2dJAuqWDKC1Axc6nYbPSpZNHJwLDa3Wxd3agZAiQPEp",
  "key1": "3u5k89nqtjEDCsxGFJuZG2LKCKk355eXqpzA7gmxxtZWMASzup211thDwPzCQPwro4HAZBNto3uPpsvMEdbUKzs4",
  "key2": "3LyuYuHx8mUzoAx1j8oQicujjSBU3paaMD9ATtAtyHJQVLPx4VZcmdWTR94TQrPdHmGuGmxDoA5kphUX4VQ1Uzs5",
  "key3": "3fn5r82PeaVmn6b9d3UBF1X4VAPphza5fTVtQrcHiTtpC3JPd43GWYZByPxtDD5ahQA26MLJThZbzqr79jeV4ts6",
  "key4": "wLtSGVgvNBX86hNZs3G5EvZ4x2coBwidzgnw78XMiBCya2LZhGKVBiv2NJQoXDLtisD4yGs4WX6u8c54rpTp3C5",
  "key5": "5dbmGSph6hdXgseCfZNPLpnqgwg1LBbqHYCdXRZ2J2AcAAdhPPF84Fz8hajhoqu1vFRVkS9U9UYFTh4sFaveVPSY",
  "key6": "3ngLNqCLjFPm2yr72cgNs4FcTyo4ZUq4XS7jTHNt4dxDrvbwyoc9ww2xHPWVB8CdXTudSGEbZPxohFHNBQGmnzqW",
  "key7": "22xveFbxuSrJLqUxFskxRfMiHYsXPsJgnHEZPpta4sf437EV3rXXzVsjkqQGxRfxq3dBFh1sbG76x67ihMG6caMy",
  "key8": "4HvggT9UtTmLSjc6s8xTs6RzjUxNtSoxveCuti9HQJQ6ctPp1ykpjHNzys8Yw2qBHi3nGBUEfctLK5adPDJvEJ1U",
  "key9": "3DRHjg74asMhQge5TwvSs4jvu7cMjPrb1kfHbmsroSAYrMNHrDg6aaRDvkeNkKVU1tZtRKujUARAyJNHL8347crv",
  "key10": "4NKG3EP2dj533P3t4BFz3me9troFBUtvHY7QoAWVFDFpWT12wpssAzQRo4wwzy5qA5ae9RHUEcQA6sKMPYs1ieNV",
  "key11": "5PXmQDvb9C5eaBLqcobEpXFnETwoZmPxUyJgnUjiBLW4x76q5po3gbJyY2PAnbEZjTH9rk4QioKZ8pqVsWzQHdqs",
  "key12": "23UDH677FPMUdKrWGZLTR3rK2V4F3iaa8aqYn1UpdAV54BKFhJrWzFw847VzPFUPRdXuvi9p2sHjFYnxCU7FVVHu",
  "key13": "2Rr51MPXYULpGp7x6z2GDphpow53Kd4QKnb4F681wVVUEq7wmVtW6deufwRsR8fef84dXniM4wzx8HTDBvX7HG3E",
  "key14": "4BRkVrfRupRS53zZcfAYUDXLxPrUS9LqQv1bsXn61NrL95pRp1GCShtnUudiPaHznhr67ExvFXRVjkctGheE3Lcq",
  "key15": "41WTwnG89AEN5vzb3jZ89f1XjkfrGQomsVMappwApYMCnYafnRbfquxBViaKUjcuVnSPqmQKTr2VZEEyZs8XDTdq",
  "key16": "5KsUZFf6L5jzW472xB8YxqK9iSMk9ghhX1zeJd2YTKJZyuQVFbdWf59WXJhjAooFH6veXXauUdw7o5SSWegr8yJf",
  "key17": "62nFU7V42ex1sfUax4Xegiys6VdC2tL2A5x4Zq3UzPNsebTzk9kHp9rUkHjwszgPhvrMMnmudTnkVWrcb1bLKMXH",
  "key18": "2UHxrHyBw1ZZMdBPcSwfdk3wZqYWYyNRooPEB25GzKbxBpvtbW8MyCvZumiULAwauk2bafskZLuegd89ZjnAq9ht",
  "key19": "4uqr2EWs3D6cBSBeLK8H2BNWQSyDdGGLERdZWEqNasB366goKpdAFiuHqhxePhm99zw6as5R2MNP7zkyvERx1nmZ",
  "key20": "3RMmcPsB7WsUa4VBFRqPDB4LrfyrbcdqLU2ebjND4KUiVEZR1vo65XqcuvgCn29Jb83YHHvbBkqCYQBXAk7eN9es",
  "key21": "3BymV9wt7i8mfLCK4jre6WdvpZ6Bh8VgBLvfZDuH2Fk5zc73yavX8ZCisoPMQ5PhWXMyi4Mgt6eabDWjp12UWFCx",
  "key22": "5ceEqqMaq7CQfakmLQfL5jN3RQtPghM5e6Uje9qJfMWT8mZyFjUR5boEhAzVg6vKNXBcyNMxcehpZ9KeQPkDNDW",
  "key23": "52VYiFSEU9N26S4tEpwPaBPUEvKXEE13XvVCzXmLNfAu7jEypoFLkSQ7pCQVrVdJCUwHRkAQ14Q9VKpUTja7zdFU",
  "key24": "wTZmPfxeNv1iKfhW3cDirZ8qfAaP8mAwgtASTKsExthcoCWWmfxppUh1Ns794dJ6gjfxcu6XRyrU8LB25CMzHFq",
  "key25": "45HtNior3bfNkfpCrUWaFiuHHwBypLjufJcF2dP17zRU1tD3Gadm7yEKhzkqmg8B1qzWoCj7uyGdsgh5mUsXTBCR",
  "key26": "2eJPUEkU8Strxypp7kAToVse5VVvzqcdJC1XbnKgTiPWVm9ZiejeZTtJtSsPN1yQijmkuTaYj7JPbRjenamEXzaD",
  "key27": "41ajTWCasEfgrq52YuxDKnR8UagRXUs6Km6umAYa9LNWqPMj6gAAmLCRhTtfgnZ9JcFwFJ5x13oWjo2CxSif2r8p",
  "key28": "SW67PLLoyaLpvyR9qJ6E5d8iybsHvqiFjFj4TdEygUMyYR8z9raGnivWFMSu9Rreb1KxFWBEvKtygdZU6FAm1f7",
  "key29": "4wCyY1dKSAaCPEbkxm4UdXau6J7M6KoYCYD6juMbXGYGoiuP8XVDeP2FxSM44ttE2x6KFErAu4mvirqgzonPAmcQ",
  "key30": "3So336vuHWEp6pGhbDyRzhC8gA1yaNewuzTHWQxhEhD4xUedizGHQqwTs5bFb6GyjQ4npK4J7nYTJD4XtZNf8Nva",
  "key31": "52LmVjGSfaZkqp7bxawbrx2C4XsnVrN2oHpmm1uJwquFFB2prwPEPCBdnB8DQYKx6ynMEDPXj3QH7HEZER97YqzD",
  "key32": "3HPy3XW2h8PydxXSmxovV1Uk7PjHoXcSxa6bD7eMnAutNSrRB9fpcTeimCrQ7cnyWDxFRbHBA3Xc4FmZepsNPoYu",
  "key33": "56aVyakHFPoVTiP86ZeGMa3HKn1b2Ptjpair2TdkUVvdGR9XeCRRMyuRG1JwHqwEUWenjrSKFSXkwQdDrNofU8Gk"
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
