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
    "5UHCQ5t94BfYm5fBDrAeHAEBX2wL5ZLbPmRrxp2iKH4hk9ji1MyTeQffH2b3jVSGUMzeUpeq1GjrqSnLKSYZwmWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzywKNPVwPSbuadRaAEhWAinBEdm7c6HUwb9iFFHouZEJij8SCTBmjg1rEKjq3ZE8Hs7BoG1M7H61DYeAVzb1ug",
  "key1": "4KnTjX8NMCYnjCfyK3R6UoH2rvPkvTDGJKBXoynNVjQkcQ4T5X3ac6Mm2FZn5nqQzr1VqaMx3K11ytnMDy5YiWrR",
  "key2": "G5698Sg3F4VSAc5kG7b8DnmaMC2SMXhTBMpawAAWrizZHBeashiMAzhXHcqdWicMt9GyX1GSYDiawKzVVAgn4yn",
  "key3": "4tMeeXpvpdU2oNCeoEt4nqbnzLaTX28M3qHG1eHnYT4Vge4iVqE9cF53WhhAq1Vwp262j36KsyGMVd8rYrwCgaSz",
  "key4": "56RSSJ4gzvL8Mti9voiMi45Z2NceaxmhAzHPhEjw8uCgaKZPB7yuKNbsV8Fd6nWwxyFWGnWgVuudMativKezZptd",
  "key5": "Y1cKM5PmYQj4c6Xpm65PP2rneCVtUhPAVUuPLfP467s9SxuytFUQvx6ayaFHWrRCT8dq5k1xawbGRBpMZEki2Lb",
  "key6": "2gzF9hkDTFy8fkKmfzmDRoFdVHoYNcfnAhr8FZruayJMEL6Fsw2jZ7T7eNH6EcEWC2QzdgmgbgTgirh1qWiNdsJ6",
  "key7": "4APnEdAHtzayupKzdu1bQFA1sQhmg7ED62N9E93fd8ehvNDck91Y4PAYVTjFqH5Ba76jzDhJuUoSoSSJqSSkDAFM",
  "key8": "2B19GuKR13Bk7h7XM1M2PHikiHkYhNyQBsXPu8o5oJwiGf198EMWJmpS2K64QoQcP6Q67cDzJuYzYY8rbT1MXx51",
  "key9": "5uKFPyPrMrZopThHYtoK9mXobjnVzExZT2EYceVS4N7M5X7Lz21YAQLtznXZ9ws1xfvhEkB8m8uTcpu1PoVxwQjH",
  "key10": "4iyTqEhEnUts8PvBYVfYZxa5g22PTooQ75btSDKEXfXtMLXqHJvDocvKEaZYXAYJXNz2itmezFkg2oV3T2ZmHBic",
  "key11": "44zdts8aVU9GCtUpUbRGCYyXyBwZ76MZRL5yQ45gSgCAANX3jCDwGR9GDKkfZ7R8YAcMq6MF5BeZwLh7yYcxXB8",
  "key12": "5WhKcNhFvP88HnqNvp3J5CLhgQfDipM6hwPyCxbFPAk18PGKaeS1TgVKuTg94VZ1bX46fnM1N6Epw2D7R8gjc3vK",
  "key13": "4kFmJ254VVZDm4LqUSQXzfaaG4BpU4ihhLxtYGBxpGdZAx69WLvrug3siCLMLJNTcxmodMaB6iha3KCf4hDFd5PM",
  "key14": "5L4V3AmrRX19vKnS5WbE21xSrgi6nQNYt49UtiLujUHFGeDPP3reRMnHZVyMeu3z8fmxKzdW9i3Fh1JRTwMrJTAp",
  "key15": "5rpmEVvPoqQurcfdQC1EJTgqU8w2of5kgLhpp7wby4BfDfBps8mrLKb88YipcF3dgJQMryVCcEsoHEP2UAmi7QUi",
  "key16": "UqF8xAaMbJ9ChmojMrqTo42n2LhwiP4YSDtt7XxKQZYXMFc5k3YdwcpcKgoWXAZey26ByKZA4pgNUNrVwEmFp5i",
  "key17": "22pjMiSHbFAnhmWCcXWFAjxnnWmtk7HSLwxpbuojGv28NdQoNr2DFaktg6Xdx3rRYqNtQ2s3wMeF8daURvZuUa2K",
  "key18": "5rd17fuMucgiqGD6KEhiDpbtUf3yRJzA7o7yMBRUz4qYMLRcvB2y6QWSN63MuDPvQwrCeCoj45RQdR3td6pjjpyv",
  "key19": "2tCtCSQhN7UHyyPbdfDU8NF5zpHRkCfMTxisoEMEhmhA2A7ahVTCrBSfmgqLAAfx6BnsfX7f3XmdXxXAayCGqU6X",
  "key20": "5JJf8XFoktVHhQyWiZfRHVjhCBcvELe6fhcxqZ7i2ZRdqazPdMmtBS3u5xhBGb1SxjHGf623gK1GGrvEwAJg5sqj",
  "key21": "5XB7ywTthGJgV4gh64SiRDw6A358p6oXnjgi8enjqLE72FpgU9vxsBiNRKVuUFddg2ygeHMGpcfnPcwhH4d6fSS8",
  "key22": "61wqUSAQyJhtojLHqF7j1vrePMeT83aXUDV1Acs62n9fgVSgFn3SKL5RTmCJMfxXQBzYZabWUM8QHkmPzWLdudpF",
  "key23": "4HDJoQDQGreB4UX77v84tKSLsmRqjnqbYS9jM5yPCCxKMTNu3NWxXQqHTHNh6F4ohRwcAa7FmeUuUzEc2j4GUSUH",
  "key24": "4dtKS5qKoeTZac2a8urm21iPNmUR7GHyJAHbsAZCGWjMVkNqDCFdJydMZetRbLEHgAR74c6raEoznpsURwmU8RQZ",
  "key25": "61p4QUTo4iNeBzSEs49qh2KNTqadJYKfpErtBedhjt9rdNMViF1qinZGxX238pF1Ys6zPDYmYmsYbSENU7s8Fcsm",
  "key26": "4coNNGytQMsanxFXeFRKt6exJDwLNJ7bcmoQK17kNsWEwA9fM4pr11qCQBSQnULLBDNYfUaBRMLfPauJ5TMPDTZx",
  "key27": "59UckrVdR1gA4sKskixBsfVwndDuUdfMvGV3BvCFX6yoxuhuo4qpAG98PRCBykjF2rC8XD4iyqeHrNQ28UJXUvVy",
  "key28": "5fyaX9ay3jGovAfSoNCLMjKzUdq8cdVQjbhGhpeNDXPVibGu7JBLecwGNFgEfkWZqZ4LxZDehffNQP5Zoz14eqDr",
  "key29": "3hPkimaoqoSf2dogxKeVZoD392zVakG3q2xCfoi6ChdTtkFtH9TMkVZB81fvNWWf6n3BZreZVULDMZgM2GAqesbB",
  "key30": "2CLytpnWRj9syhvfYfsksdv9fmuLzR7bhS64MbEfkHgNxC1HS6YPFsHV9dx3UNwKJ9wwGXpSo8jFL91QkMagJcKg",
  "key31": "2XWGRNsPZxsJ49XA7GHK9TRW8XiWyxFK9QUAgPUyrvtJtk9NiZtAgP4w3SjsXLVY2bcj5SUcy67BywwHYUrQyr71",
  "key32": "2VvrMgozuQe8hF9psX7FEbWMzvma5PCfR544jt8Azr2irAXkKtkSRL9AbyTwcg58uD6EGt1qAVLyzVKfF7pJZwq4",
  "key33": "JHoQQJmyPRpEtZxEn9anFSJFZEtMjroy6DuKDRjargR2UdjFj6vKfisU1Q8VLVJuaD8HrWvvR843tvGq6SY4EDx",
  "key34": "4HAUtrRLcAXW5wxFTYsJ1QxzE611RtfwUNRU2cEPsGioAFqTZRYqT152dn7KUCDvkDc8eb818dNi7wxePCPJ757q",
  "key35": "5mYqG7eNSkkHbLGoRzwohZSsFXuphYnn46puBBBcRYgVLm5rY3m1dmyeDHEBNoiQ59YZTmE2HM7zupyno77wqpQc",
  "key36": "3375swvGDdPWVsSwHmrThvAehfy2Tws9FzH8wrGx7Um9wL5KSfcKXGwVYjFGH1T7EVfFLxX1RNiaA3VjsuX5BFzG"
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
