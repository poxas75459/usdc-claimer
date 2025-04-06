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
    "3ceFiYhZTErQuoeEna8Ec7qxBgkS2uUgf3kMGVcGBoLVvqS121MwARZ4NofHVK24sBZmyQiWxoorgHCxZhcyVMbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623EeKGstecNWpENj7LiuoskiHfaw1ugunAtnDXV1veQWnVGdQRktPjNWCUw8TkfWL1akY1ig579C4qj34AdnbVE",
  "key1": "2dByT1AgtWVtfTLSKtCmsaEugNPiXvkSEjyA2rk9sK9WVh79Dkb7zSMDA6heDigpbzQVsMbx5qPFYvDHHqkadMzC",
  "key2": "rNAe33rAcNrYprsejAYxsrDz7xuYGe7xDSkbpRG55ZW8ySFmKJnkHjTqQX7ZBq3ZfhEQXqqybaChZyr8AmsHgyB",
  "key3": "3Jk2HdqZqA8E9ehYLp8rnx25Pd2fLN8Sx6nzXrmXt6Sn8PDm5wPt1vL82oq9xKgpxDdrHcVoJjUVVUq74jsUWXDP",
  "key4": "2Yt9N2YJDU53GcDrS4DEotHnzEJWVr5nCzr2RHZJoBpwWiSs3WAMUJrbzapEZPhvKoYLuKWeaW9xi3U7zLnwtPFL",
  "key5": "1gkFaTuKL3DfAiqVPU6sSauWH8ayiX6oPvxdN8RLZTvNb3ipZxnkWL4ERGgmXSmFUKoP1z9eiZtdTjpf5RFh8jQ",
  "key6": "ZSDgTGYSKdi3NkHuXany5uu6ie7DdDyXaFJjvWRfvqc9u8ZJGjzMW7GuXSU6dqwfCVV5kqNijYYsYxLqNbwayCA",
  "key7": "2DV6rwD7mv4Rt4gjU5M5NMhHja2oi9mAn7ubNLk1BcFW7dJsV572NrspPqoPxWAXVZmnsJdz7XtmsM55tK1DWWtw",
  "key8": "3FRXD1vxphYBhEA4gSv9joEetJA2SgNsibsBbifNWg2Pp4vXeoNjdppPaqsoaFP6adKiUXvrP3UA2n5JbhSPqYHq",
  "key9": "4zCacyVXCu4XBNHzE2t3PYyYf7frTdNwoJW7dEvGEBWybXaLCvEG1onNSU3GvWSxPVSXSbs9KDs9YbLCysjvMxfv",
  "key10": "23HkEBT24NwGcu7r8kzGZzZh4UM7N3tau71KmNuoouMoK1dhsEc8Jtzr3Jm9Xa2jjUfPbYPm46PUaZe5rJnY7sqW",
  "key11": "58jQ2JKqaNBszMZyxmYVoE8ZzZBdyoYK2kLoGthtKJ5g8scHaZCEvJ11Ytk6i1MBnkdZNkMGLjWJpTmg9gEoubCA",
  "key12": "TcKuXyqrJq38GNATKGwDETgApsigfmXdan8bFk5T4zZ7WBwbfKmNdD4wZbM8wUqRYJ7Wh6Cdcy4v8agfpSJTcHT",
  "key13": "4Z56sjDcUTPP6DhqYFYvqLcDKg68zt4zoWZcCXtdeXpek95wobaHFpv92E2nefyqBBoS6fELpd81jUgoxBsUQeo2",
  "key14": "2KyottsTbQ1yTX6MzLad1KfLLwhs57wcqy93W76JRrWoPyzc4Mbbm5FtfmrHbGFTDLyWL4hwWZtE637RRxa8dpUt",
  "key15": "HCFK722wLRf7vLVth3foqGZpwC7e5pXVEpDQhRzgAsXFjNFPo4aaCGFL5dX7E5af7NEUyS9FL2Abny47VJqKYDY",
  "key16": "4yfo53VAWMAEgFXPsD1dCnBPHNtAZjjq78grN4qtdQTapHQTfCobYfBEFqBcqLW5spAiNivrE6FbdyjXuji76Fa4",
  "key17": "hwRBHTU9fu3DywsunqHgBZ7C11trSxTFrjkpZLvFRPECibfCuw86793Kf3h4S8Eg7KZG7KWB6f699WJhdM7RYpa",
  "key18": "4JDqgkghn23t1WTxTcait62gvtgwikpV4y8CAFCXHgwSRpeSjvVWVuz2Z9x6FQhHiFw4os6MVPRwpZpsamNqPpXr",
  "key19": "3bdigZLt6b4E6KvMJsX84QYedJ8wHgDNDWgfajuaDu3fDP8kyxmBy4PUkmuwaZCHYrLZZoUYeHW3TcKUFT45PWDm",
  "key20": "3GCdksLdbUr3fhokB6HBuTJzngwNifNikirnBWMQmfFhDeSscqU6DorvQcnrWKXromJ2KeYW49LtXBHM64aXK6q1",
  "key21": "3p28P6XADQ8ChYtGrVX1PovWrB8qon15sgycmB1VomKnmTTcfeTfihS8Qz632dpLpQcZ1BY6RBnrZDMWyrT5nx77",
  "key22": "5W5zQKm13Hahehq5QcqBzLUphkEHjVpsRep9Y83rLeT7qZxa4ccGC9J7MxB9X34eWxv6VeXrZokrBoUXFXqSPaPC",
  "key23": "2ErUGMnrLUmjbbFrv28pUHEoK65jqa4cHxtsGmZBHMooLDYQCu19cj317v4ci4GfkTN2D3k1PVtyz5aWcK2nEeEt",
  "key24": "xQN6Qo1RGfdn1XP8eQdokvCp3CcJCaJ1ZW8oE8TdrBqyfFozFxaZWLJp9He439B2MhhgqsCkZokvQaEPX8FM39K",
  "key25": "5TBSg1SamaNuDMchWWw72dgF6NWMWyMXGQxF2At23QZQ2HqzrpMFvHbBGCkhhLTsBUbHvTidt5NUxsaArC8WcCYw",
  "key26": "2mYyawdJs2B6akdTE4hNyddDb2b26yB8pH31Sx1VJpp7e1UuYcB5UTocC429kiKywXSqGko1HsLNfLRkJZc8wDtf",
  "key27": "2HF8coW8PKNUupu5MFMM9Zg9LhUDdf8GYgTxAnbBPTTbnxrCyLucy4RKTA19qaveVFTw7vtccwijk6E2c4nje9DU",
  "key28": "5JmdnLYrd1CwDwVrd6JrQmdX17XCJLKnDttnPS6hqQsYenPmVa3ZsnQE7pYmiUTnvNK4wYMseeFMxGXHkNhW7Nqa",
  "key29": "3mbGs7sb7UPJfD5Nj4X6Y6J9V1Z4ds6uKBiquYEtJkwFtU5zkPupoHEHepTZ5kGEYTJmbLKja76GM2uZSzeZd9jk",
  "key30": "3z7GXQPmi7KGDvanaGaS5hZcrtYRvKWUfuGmBDG6dtkBtUXU4BoKdKE6fXvmdu8ZQwqopofaZvP7TtPie8VQWGs4"
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
