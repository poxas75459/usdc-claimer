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
    "5HHvYJPuwhzXbE22e7SkMd6McPvF5QdHnYMG1Wz26PW7C4wqDbEGoCn1PBMWPmi44KcJouif34wiiJK8PkFCWMaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4jWqMZppfb6Ug983jy3Q5Mun6ZRAnRJkzeeToD5vE5Czrh82SZZ9sNhT62PVfey3n1gCFPzKG6Bv3S8rE2PYkn",
  "key1": "3yQ2SWRPh5nxNXzdCRyGyHDi8TmsnsEWc2fh14fv5LbJEt5PqH9rEPcuzQVtBPQgCiyZ6EKvLaaGd6zKKZZv2i1c",
  "key2": "sNLxTBwV3dsdbYae23PqFVbT7bJosngc4J6mndjNxNXga6zyeaFEy8tBdZfAYnZkebEdg1FR3DzohHmMq3de1jo",
  "key3": "BgVTy9SrKSEtCC7dCU8ko4bTCjeZeBX2kiaUY79BL1gJJrc5QuhKGqrpqvCCDncRFQ2SS92EtL3uG5r4U8Fez2f",
  "key4": "34pjeBfGEiJU8EpoRursi3vGwgj14vv6wgKBvevWmUneqeQfF3RBf6hxc9MJy171XCD8tFXNXWLefFLAv8emBFrE",
  "key5": "2huYP6T9XxQURWNz58JhExHXeF9Pi7SPXC1B9AkvQC5rMZyxtpfuJbuTWRL8tCwBfVfY873PSEdmhcLcPMrbWHp9",
  "key6": "2zmKKgDdnAVLvFoybEfjwkb6J3gQrHY7B5pfCFWx58wRcY3iqrinKpbKgcU3SMbLXbYkeaKuwKNssBifL2guKbBd",
  "key7": "5ctX8AryUWhLCCf4oxSffM1YsLeUMsc6HUTsXpMA19NjQEGqLGZnKx6ePcJiNrgMWBSXD2SditpDvMV4kbHGC4GA",
  "key8": "3NN6RPG4WUjWkPNeroEbdHbXp7SWFHqvVjQGKKg8wKV1V3c12ZqzS5YpomCd7AEzSZPBRDVPRBMKpinrtVyBooGH",
  "key9": "KEY15swzv8ShknJNHk6ejzYPW1PbF6qKjmfbQg7mwj3p5BGVXhR9JDA9zL3jGNP3WrZqSfyaFtWbgywFpLqT1cZ",
  "key10": "5pfvrrFdA3b5q1BGutkExRaJCxpPXm3xNSUv2H9YAJpkMNVHhZpSGrGoD2dV7fCLUCgMXgxaGQaT2QpSuHKRH1Dn",
  "key11": "6Vm6ZXv9zgnmrDGSkELUofjR25E6mT7Y7sg9hNpA9SB98LLd2PGe9MR9AbP1xCDyN2vrpxdD2GV6rjNZ3bMYaG1",
  "key12": "UUpPCtRGFjKevMbHo2ZzaZWEjKhgGgtB81N1YLzjX6di65AH36MpBRZatEiFd5hCyEiGbvXC8RC9uJZbswdEiXF",
  "key13": "2Fp4KdUu4exZPsPWZdFSbYxV1FAK2NLoWUP1FsfLgtu3V9TntoXPg2sN82aXUrYyFGKa7h4wh7Tnoquu27w4mVLG",
  "key14": "4U7vFZ8Lh3EaghEvQCrHDLYKuf8MJZMUVPouVBXWozSwuHiUYryKuh9w3PtTnKCRYRkLLBKDExAu4GB9vrxwacpx",
  "key15": "65xpaM8nsGuyZTauZeWmUGJehBjsxJNG9CWivEFU1STHhWmgo69Zh2n3XcMsnmvBs2BbUs46ZsmUbAfBb8aheXj4",
  "key16": "2LsAfA5Xcgzhkr3SMdGH7YvDqM3UysjP1SuABoQ2qXyXGbZ2rDP7U5qeuCKQXQxjKfQfsz8gCakZ3T51KrcMvaTN",
  "key17": "37csR1s9z12pxChhVUkyCB6zChzVoMcmSjRjPd1HUeF9vDN57oiGU6GqGy2JPyeoKpdqfswSRDbUiU4tCiQDCkQm",
  "key18": "3WwiYpdym2NptNF7QTvXCAB4Ce6Zgf1t8P8R8qJ98DkAkHcGUJMp5q4JaPuYqqfXZmMc4hSmYybvdKK1SmV4yL5K",
  "key19": "3qzCs17SdnV1MscZjudkzcv4Hu9rLupB3XW4XmXSinZ46J3dxAzUXYyVrkPPRE3oXxxkJRhSKZE9gYXXkt6DoRuS",
  "key20": "3BgGDtV5BxiVst8JTX4o9aRffUek15b9bcZSMS5yUCTMqs9kb6gTQcJHKpsVWBbHVX3rELZ8Q9KznoVXPN9RCViX",
  "key21": "3xE9vjPyNyKXgAEEGWav6g3cVG5KNwtEVDQvrs3fHYgoFMjozEY9zWFFEQzryNDuBSuFGEB6szwT9bgVdjtkeTW1",
  "key22": "4Paq3nqcmm37n3QXdp9QFT6prxBuCdemcHwKEGTgL2vsUvKjt3H7vsyFErcGsCAxTrMjnqMyRRDvZ1Xq7nd88e1U",
  "key23": "3SEQvkFttZL7b21GjdPBoNcda58ryeigX5pcc4Bh7eHm4K7RGtyMRpAFXByR6uDKwbD91TfZq7SZEoTEqmmbrR2a",
  "key24": "3WTB7PquxSBFMmJ8vkPiR8CRazT7f6g2EJ2hYvgjQa1X3jWRCeoEnGMr2HmYDndFmJUemsgjvfiD7LGy2P3uunp4",
  "key25": "4kBRRHQ64rgVTBUuXjcajz9mdjAjGdUezy8MYpdu81Xj6vE9cWdKRDGK2nHz9yuScDyTJ8KwyxhKA5f5N79oQnn8",
  "key26": "BivM4wnyaY7K9kmTyQdoexFQ8xqbHXs2kFz6LaPYNeguPpqbPVbhm5A2mCkxxw1zMMUim38Vrr86HoTVV3AM9Ug",
  "key27": "45snqgrePvEktyej6osCCFvdSJ1HpGzeH3bvMDNdfkr6AEvGJpjveNFTWorRtiTe1TbrEZNBqecoRALhBSRHJ7LC",
  "key28": "2oDexVHefkk4EWuN7A2Sp1Wa1DbEySJRK5uvgZCTERSzb5v37uhRVPpPfgqi7owozzooibftog4DNShZqmmj4kGZ",
  "key29": "2HU2vGYgHfzU9VJfuv2Xv416nQETyKh48x2BNhNJ4154QQCitEpSu9N1biWsjGZMseLuC4s8J8cJcDbfC8A9kbDv",
  "key30": "4NHU6fU76iD4LQSpf9FfrDFjph5fNiRq87Vw7PWEk9XhHhuVQh5DVtNJp4r7ozPjoziQ7s3mfbiXcyaC8T8wxpHT",
  "key31": "XNGQJ1DEx7E5hD9AzDNwpsvRaJrquHXpjs8BR4a5oEemiHPW6uykQAFkdvvUWRdzM5sNd4nxT6pT3rKPv9dpGYm",
  "key32": "3ixKEjKJ3Xug5byVGh1QJ8irsRgMhdeX1WKezFtXCnsz6N9esba9cTqW6ExC4GjQGiJrCSGXeWWy7kNSHvqgrvXh"
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
