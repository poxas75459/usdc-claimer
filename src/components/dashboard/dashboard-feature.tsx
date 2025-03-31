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
    "2cHBQjjAXHna5VBNmg9fGdoV1YBjvnH28tB9SaKy84xY94kr5QKm2ChzY3NGktTBKW1Mbn96D9ENUxdpLHuDp2EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5QBc22bDQejShqT9d9CUnX7PUyFwz1XDvriXaE5iJDifN8DrVjwRpj1pMDYVXoBmPEF7yWQDYBN5CRbmsMWGj7",
  "key1": "WnccR2yx186oF23vBxU9ZqUeKxWp44VuWZGkjV3zmwjknGEMFHYBBWb7jwq4tvQAhvL6G2TxCs9Czkz4AmoToZj",
  "key2": "53BTLwLs6QXKvjx2vmNSLqdKxdjJkChRaFfJE6MpMD8G9oNJCt66PQgCnzjjtPdtASCS6CTHpBWWHKsZrW2mNNUX",
  "key3": "zQXxN8uZ5CryCk8jaPgDoMTtA7zp2XANA1gNsin7rz9RVetxMKsL1kP6185rV6htRi7vMVpdZmr2C9ifPVGL9oC",
  "key4": "3rE3fu9mpuuf9iS5zbUdADmynrTyAAwiw3qBvJnDwCWUEtyzm1oCUNW1AzBFo37HDtP1Z3j3mAxaA2tQx8KqRivq",
  "key5": "3kWQNNnwwRVvhWPuRdkQPQRmtt3DHyaEUT9d32AGUa85ax8iX4CDDigT1hYpF4PYaoqi6Y84xSLuZY3rweJMsnEc",
  "key6": "5MQCjD8M2JjLnzTYQE7y8h6ofM2YGwquAY9pKPSuEnWbHnVoJTdr2vNVqVc7S7GVm8gNw6w9FkGDx35gGnEqMGaM",
  "key7": "2nkRRhBiHHbwed4SaQsSFKbF7ro9DWf7U2yWG9hzPy1HoQN4xPMnyU55XbwgYfsBAHqCwftP3aR5mA2TsyX9u3jH",
  "key8": "2iwaqyHz1ctEfqKfNAKZoYWYb6ZpqaUpvdffPZovDqLAD9cvoncsSdezpqsP3pycCYJZCfce7c8eDdXXV3Yd7kxD",
  "key9": "2MLkbRCt4JYmf3TwudWpteqqKpmdCLrFC5yRg8VcqwqKK5cQmjW7BvDkE2k1varYKZWuZu1Ed9VA2yDM7ysDa8mR",
  "key10": "2EFgq19bL5HSQLtXWoRamrpZF6eaVi6mXMxWCCYVbcZwkgpXAS3SWrpoDEMPajzbHE9Hf92BPG9pTyyMYUfSgqXa",
  "key11": "2iwXuZwHdkXxC2qeZMiCqBNm2vUdEMgMPuLefGEJBB5naKybXYSrqLwLa2W18afjbs2PtupDs7SRZgjoQsRpeye3",
  "key12": "4vQGg8z5D1tsfKagJtD7zFJjwcctACunQLmpiRoVTkFWt2HcHYyv7653CwWz1fjgDKgEr1dsHyxwqxJVEU9rmAGS",
  "key13": "26ebYPRjWn8kSSVdfDHjhdvjFYujV1Cgy5Asx6juMBWdfNHSyjh5Vg3CiKPZ5ha6Mc247GCppbeXAENG2VAGytH9",
  "key14": "5gypn3sUp7pxZd1A9jBocPDnkbQdHM2faFoqmaUD3CtorgmbhnCpvo57FXotVXVu8xPZCjHHaHh2Yeqtc6BESddV",
  "key15": "3k8XYMUk2FofpnrWzsfXgUDqZYZNCtwwxherj4GMf6b81ReqWFcXvVRYUjruV4Q7LpVdgPJbfxA6pX6pLDhGYL2w",
  "key16": "65xieXE92EvMNm82wRtifpDw7uTmziW4mDCQwLHnFfqZbarizPpCaod3tHCHT5RNm7Yr3jabZfEBgxVHPV7xTNSk",
  "key17": "3rnBeQxDTSDpfDYWioKbCp8W8spyfgpYQekCjvStPKjgW2Eu97gJeFy8hsiEv3VdJj7XNKNKKhjbrgxZiGe8Uq83",
  "key18": "3GeqvxmwHUjMjKrfoRVBdGZ9S2ovXyvCVihwvncSn1YhUKgsDg4aiXQLTSMNpUEsUCtRWPaUL2YAAdANrw1rL4Lc",
  "key19": "K2KroZLi1Yf8Jzqzs9SC1gZs5VR5aXtwMVCgbQjeJmLXCtK8Q1zgnxCvFe9kK7U9ALB9kkg64n2PhnYH84iNs7q",
  "key20": "45cD5TbBDcokAXvpC2XDVNzRTBgqo3VvtZiEDvPRMyGuQNt5h3Y8TUto8KoQTzsye39g6M67rByJLuntaw16JGqS",
  "key21": "4gkkmGUDZvD7YDnKLAJJ1AhByT9xgFjfrvmQeDAE5f1Vh4rgBaoS3bRSoZkM4yr3SzP3MnriSBfELxS3As585Fxp",
  "key22": "AkSX4H55ZydU3aFmbwrZwa1JZtfBzkYucLuqdjTT1zbpXPYxGuN4t7KfPGZGTVtmFpNhE8nSXvhcMEJeQs6tfu7",
  "key23": "2axsUMSj9SH6y5xQUdjDBF1ghW8wWd3qv36ZQXx9tYZFhEU8CcCietMYWvk4pfpY9nwzLEqcoXuhN24Kx9RUvdhe",
  "key24": "65UEb5idcN6zhGHWxakX2ygdbqd7CWYXURj8as2TS1NCkRNqodxqqEEWL3uMC1j2CoxZ2ivv61GnCcmRVzBLR28q",
  "key25": "3mbTVsPzVFVEQa7HcFLVDxEqxuVj2rgVAt3NQETTsX3ARHxccn1Ec8dSJDm73S4nEkRijFdPC68Bmg52TfW3mvWg",
  "key26": "57wR3CQrANmcHmfQsWiTwMGXARe95YTHojFm6G6QF9c6QSXrX3HGEZswRETrXMoJs9QkEMg685vPKyyZKYpp6CMU",
  "key27": "4Ub1waPutTTyd8hHhz31QrFDbyVJfHoXAV9bi3K6AuWaPU1pBJ6Yd3cgheUtwx6qeHcT9aYRQKPLnw1iVTc1sDP4",
  "key28": "516qdYAG8Vj35qzjAX3ZKmyfNx2bE4HCDYKBBYQdKgPVBMfB79yYRcqGDinqWpGXBdGZ3qdVHdvvr4qQkZau1JrM",
  "key29": "M6b2CYw7LNZvR7YNUVZP39FKyR3SrS4gzdAzu6EVJuE4LAcQ77GpAp1bjf7spdDAXDWNFGAqb8e3dfkcxrTrvfo",
  "key30": "4Kbw3NNQCWfoutfCGuRAunh5s779EdvPCSR8BQLY64GNwLJThdG7VAYQAmq3TsV3sQ86FCtFYfqwFRU3TX5oHohL",
  "key31": "5QTmUsUPgZTSNixX1zLsqZeH1aPYTkyQf1saTyJXCiGGnyXegveoMW3TyZuRtRvC8Wg6ntMzvfmg6g5onQcCGMMm",
  "key32": "342MCoDeM3fn3wyL1T4qpUxCUHQoB7g7sbbndzEsujPbU6CScCAG8VcGo4bcpsM7h7HSUxYbnCzrVA7J3sheS7Hz",
  "key33": "33yKu95UWGhxNSbkvS4U4Hwso2PASmDv2TVcbYPSL4dw7w6fTsLfNDU968dKVT12v5RwWozoXSbdBfKRp4XgdSQX",
  "key34": "3BuebRq98Xtg6gvRnuq5KJUXWtL86j3mXdEHV6tWmkp9mAT2tVkMRqEt78Tz4JVgUwmbp11sr59gJZT1A1cZRHot",
  "key35": "2pEEDQGH7boQy5S6XgNTu5LCms48kNWTBTX9sy2ss9cYJ347aJX6K6tBCQFcwb6RMSAtcYCvFGhvBqZrVCJHtJ2Y",
  "key36": "4RthgbMEjMwBzBbCj9guZrgusw8iJ5dQsQuGQZ9KmsesikKrQBECfXhVcNPS83dZSNh3yz1b1DUTPVpU2cJAxdZZ",
  "key37": "77AdMqvDBWkyNtJsqtUNgMZXYBfviyrY4jdtnDoEzX61xGYvHATxJPG6DHLQ75HSMNVPyF3po8wKaLfkkdiiPcG",
  "key38": "5DxXQK64LJFCcMk4AursHJW6ZRhNPTDSvyxYXZRcrxeuKtd1D3iEoZHZCDLmffqBGLCbmKF9pzY6BJCpoiWwR85m",
  "key39": "3ceDiyXMrQvJmcEwiowqmf497uefu2rDLWchezj9p2Xv7vYJ65v99aU6SHjFfVgPMXRta79KCH52nPPqA1zLgFg8"
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
