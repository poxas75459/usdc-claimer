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
    "635XV47DYvszRoRfdKU8aEP1TAPa8nAU3GyvL7eMuhpdAcScWGewPuSc6Karkmf26PKT7xMbFzuiuGzMnqaCcMoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3C9DWwspYFx8DcHcge9yTduqX1wqhgwHgj2B22B4gFuqtQbYpju9VZuwrf4FKWeFGJ69nTW6u3ZHxE96WfCoz9",
  "key1": "2nWrck2iFjEjQxo8aAFt2PnYu9v8cGyJq1VN1VH5Y3Gv64Nfx9K65SjUN2zUcsPEEjkeqgkhrUZKnvsqGoeBmmrT",
  "key2": "3jDsvPU3VK7kVBy4bvo8D7Fi3qxLsqVJUeKM3ki77nELvMYQEWHsTmPiPnnaT4GUbgt1VRfWZcvnYaXsHSij1YoK",
  "key3": "2qSMVc2ih1AVaXRRDBRGwKuT5ExL2v8iv4JcWJUSipiku8L8HRsGkvqwZHYrKxAYQ1yungcMiQACTo88ogx3g93K",
  "key4": "2Hfha4B6ayE6gZvSEDPGuyMSVxVnJVD58J4B2ZSQfnXQu7qfAbXs5WznzxooTK8wo9gbWbJmWaoBYiWf7mTqgV6M",
  "key5": "2qA25d3mnGvSz3aF62adw2FSDmrGGpDToEFVDNxNTFfktFS7cCU1xHePWSYqj4tzh9p17Sb4mnqgPpZobrtGwHJZ",
  "key6": "kBn36qyTmCFZK9oLweVoLGCGnWbVNTmNVZMuw2z3bzWbS18sSmp8rS72PXkm7AsJNZGXAswThwzXBVo3LXPs269",
  "key7": "Jg6gQtbXub1guds76oZ26um2XrQJoj1u6kFceku1Xa9Fwp3yUDSTaY94V5ZLfFyezwFuMsyZr3QCpiv8J9d8gbe",
  "key8": "2vARiJJgZ7DpF5gMMUVNQYfRmzzSn85NG3kNXF3dzG7UVmtGm6wcR95RtF7GsMTVKTgvAXie96mFN3Xff4k9qzwL",
  "key9": "WnUGXNrnw822zVfAn1FNrXs2YQbNq2KYX1Tya9CDpydEcthyNsD2RPo1SkewHiR27S2qWMHSXrYvCzqa8C5FGGr",
  "key10": "5mxtXXZMwKwWaSkQUN542Yfb8jee7HzKjbm1zkKWW5P6PTsBtSw1Pg7mjBVTuds4rLcdakoq2cLAJnGabD6KeoJN",
  "key11": "dAUGKnrAA3Wf5k8o8QpvSrRWnX62tXUz2Xpbk8hYGyrmhoXx4kA6RaALkqcNJYQPvt89RGanabKL1PBAEmMvYa4",
  "key12": "5EDSrEuKLDYruMavAwNjzQ5oPEo4uXxmPZfugYFAqxr8nftxnED2AgZPkuRHso2SoRHeRdCPK1iBMpms7RrYXESH",
  "key13": "4zSjRzMTPGLX8SxnwaHPaBmYu5KoULEy8pQhcfyHJrh2EMUvFNbLZvUmz55C6qoBRTZ2iwQPnMEqPhb2ZkNRNhLN",
  "key14": "2gQC8oEatSuo6mE7cMS3BdLtMKHJtCZryexVboqYv9Q5tgzQfojQuUd2vg7dWos871yzSZpKW9xxA7sYWNDUHm5N",
  "key15": "3AQLBzQBCUYx7jKZQa25vfA4uspkeKqWBwx8rSqZqYpyhsk5kfnZDycjeouKvUxN8pffXmDv3AaeAmbdRYo2zG6G",
  "key16": "2TGjeqTEiEYPhFXhLDMXUapKZNFwyAqhG5XhAg7DBdmhVwTLDDfArfCuhecjvFNYzYcacZA6okAJuEkorhz1BirB",
  "key17": "659CKdVntvfzsYYs7jPfonmtNpPhHYmzYZuqbGEHZ6JsACtpgWww24CM179HgR5Vuo4sxcSzv4vxzcN7iXkZxqYC",
  "key18": "62a3ejNgUmpG6zn9rYgK4FEU7pjT1SyFoi6xq4GsWYAUj3DTjgypwyPcjk29f2cT3pdexhWZN21SpBuvQHUFN8ip",
  "key19": "3BxiZYyoqYeToyffSRhMSTXibTAgGGE3r1eDok8RrmaBe7DUNu7Rs8x7GCsrU1m9maNYr5B4UBmsk6dAxJSR1yak",
  "key20": "5ZW5DW7ncC2sUgz1xY3g5AmbFAgmTikBjLmPGBMUUHVqztqgJshkMC4hQbFvg8XUYGieDCnwKSHJxu138ZatvAhW",
  "key21": "5VR6yZ1hLqJoP88QXGvTsUTk6zfkgGSpMidTFZmwdzqP2RuhMX2ham7nQqRJ2EktK3E2DGvCyAh59p4yW4awDHpk",
  "key22": "2eg1Fd68x8Lv2h4GSQzaH5bmKjs3jhqVcogeVNomdhd4mBt5zUAeDp7RcznZQ9WUUXyMfVZg8yEdGRAZApFSSn53",
  "key23": "38b2YBdERMYtr4Lruayduys3HCQug272JZVbdQTSxqM6A59G9m6y1UuD9cyFohaUiQ7J7w91aXkcqBwhExYZ7knU",
  "key24": "te5owqqP73TNqwZtyq9jiuyFqSGXXvE3WnNNAb5guSqLQCuEHnZozacVSW24D7cytcLqQ2pVvSMocP8bm4HCqa1",
  "key25": "6VUHXxAWeDFTrfZkHCy8pWwySbZoP3C6ySa2oaWk2Bj8vR1ZLT6gRdKNJHWJqmTBSJLDpDTn7nx5t4UVAQZQTJi",
  "key26": "5XDMqx7gQbotED2tAetq2X2a2RpJb6HeHVjD2uzw16M4M8thPUqseZU9F8Mtcqv4suH9iJ31ggFTAf7mGPf6CgRd",
  "key27": "5WRCi3YCd5w4cC7xDFivxmNCX9Ju3JNTenNFnYBTW22mCvMxwogG4bCMTGVNHbEQ2GD39AEhNT27ns5333NuvNQF",
  "key28": "2iiHbrkQdUiNt4X2yoWLdGBhvfcZJb3YK6Le7qULDet9TyTRmTbE8g1r3iwyUFPAqmyuga7qd7KXnnt7Ww6zKCnU",
  "key29": "nJ2C96rzFsiYoVEcwfD2gEUtEX1Xsnmpku31eJ3u7vPb6HtRG49anQHSxudz8Eti2Rcx5kXKyzSKDY5AVEU6ycY",
  "key30": "5CkUAEHM6Uc4tRbgkx4GwEo4awASh5i3nMgcKRMWn52yodzni32ejfvv6VmnPkV66SHMt1hewiWXFfn6EM7Lt7Sc"
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
