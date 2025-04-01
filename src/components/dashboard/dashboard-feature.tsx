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
    "5DhchB2WmA98hL3UXhPN8f5PBRVJnrEsbu1o545RXc1oGefP6Li3RvXuuWZ8MPEMTdmS7STkJ3D6NMZgXpvMuKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNTxcZQBspbDLBj2X7u1TaLdrocT88whdW3Aiji2pHHxtNr7quiWXtbZYR7LcGDC6ZMadcQoU5jVyLghYHPa25Y",
  "key1": "utWUWnPn1KczhwPKFnHqJ47XEHdfUkZQSmiRmq9XMX2LZvmK2Ccc1sniXyB9zP4Pgi5AV3G1PVvvYRH3LJgDnmy",
  "key2": "36iS2oUC5SaBV4p4TkmN5AawgpyQLpVxZmgYgiAmqnRJYHoKPzZZMMzLrMKSvEK34xcx8qPToKK3fAYuaG22pcFG",
  "key3": "NiSzab11VijtbcHiWoZ1iVsmSh1xnyTFLgXELB2eezaqxbUgYhpYdLgxyxSZG8MgzKaySo2oTRH8qRMbNEfVXTE",
  "key4": "jBJ4NqFUUtm2uiwK9GhofC5eSmQFfoNy3MftPX67ia4FZLE1NcPJLRmvewj2GNeubnq9iszUdBjDkfCgt1eBjsh",
  "key5": "5LG46adTEUYSMVoDByK213wSr1k7Zy5dMrMCKS3hgArqDxhDEvp4qSposAGtrYgbHit5DP86o1arnP5eXt6xiZSG",
  "key6": "2cDntPKqw7zhYDZ2eYHuVzw8E6hmX3LDqXLbexgDim3H9WEABHWjVEpX8YQ3TsRZ21pn9CtWbKJnfWMT3reS5Yxu",
  "key7": "5GBXnP5UrhjGrk4i75xLLQR6i17YMJNh4FKhP7Mx7MHs8GuFiFbVbUcFRq12N9PpFJDSpA8VaXU9VFSumMytvyjp",
  "key8": "2V77ZXJArFxkeVJm1xRK24sAU3bYD9tXwLSxRdgEqvxStjkw3JHLTPPtRcqHXvxHwVWDBRnJKvyVgHxcAUHrvtPb",
  "key9": "2A7BhUpWgPL4mkEtNHApJr1v1LDoAQq4fSJUJoVNbUj8bMTWGnnxPgeCQCKhAWFXRAyv13t856UshQJMvGMzhUWQ",
  "key10": "58hwD26LbNEsa88SzVDyins85fZ6VAEAcbZBYfvup7THkxfv4FM8bpEN14JFTifWrQfJWdVhnWtYoazzT2HjxWzX",
  "key11": "4AkKzmsAs53CC1jgyDso1EcYiQWMesrwsHhCQU2RsCsTD6FumAGFsGDJC3YfbPXeMRCuEWdszRYrNyfHpQwNgWEb",
  "key12": "2z5UoZcBdW9S47u5Hth6L3i2EK4GSQuS6wxNAjA5xkELUJEb8Cud9dML4LEZkE4UXm5nkGN7zGPg3udmLSgG9wwb",
  "key13": "29sGxsJN5qPsGSBLfhdxu4rn7f7DRHtnJU6EbCnPu7Cwi4B1p4xvPQPcWMiWrfmuAEcuJpTwyxX7CDGn935gFZe7",
  "key14": "39dy1NMXRoNQHtomjUkaZfAa521Wyi9YmGgNEPQDnsETiczcnzGspcVeoErTJvDeDCe8fx5Q3sGKLjf7ccsFkacZ",
  "key15": "4C2bUgfwztZLegNb5HwVPNktCFzRof7X7iZncsmnQL9h4bFK5UXinSU2iLyaiGwCLSuNZ27WRBGmDRZkECH4QQN5",
  "key16": "bBTMXXUE4mX6gpnascER3PS2ysuZxKNN2Lcaj7LEnw5mxQQnztsZaS4C52LbqzPztRF8pGoEx4ZV9BJUJpgXQjK",
  "key17": "4yn2Yr13oUgEqscCtWsT9R1J1RxsF3M17sJfgEqrDVZbqYddFMUwzkRyX1ogh1H6JEUJ83Hyn2SkJb8f5y2CwX8p",
  "key18": "2HGh8WfPTBDV8aH3e5eBTwAA2KQbz2vTXMaL4irxb3ve12SCsHwwH45PqEMq1bN2ZcM7BmP7jBM1qfuVLN75rPgc",
  "key19": "HpKNZGbch2VLEEcLdfXCSwi2hNxFQnyFGAW3DTsE6MFcsHZtznhWp795Lw8seed9Qp2VsHJ88hrHGacyhsguMbC",
  "key20": "4hNcPDjoGAvjwfyLS2r1u63XiN4Kweus93vPkjwrkkLLHmackZDApRAeiRaQyHuHzgnQZkUuB3awXWmiwT8t3ydh",
  "key21": "2oF7fMAQcx5rCUvAhHTfS8bobZwAnX6LuySZ7Ya9nYovPKcMw9UgapD1QjxUEGzDD4zNDSsV1SNMwmvRREWP6dQb",
  "key22": "W5aZ6MejFpXBpSNFZMk7UfvBYNYe9YoXHvFnpTiKGatorpZTAoytSti5rQ3NDpsLWq7vmbkC7kPPofhbxauh7xE",
  "key23": "4DnxzPQppzyA2e2UdGoiZ7LYAzjTevYxjAF8aTE3HgCaLeHVWYfm8f1wSb1rtsNgTUdfoUx4MhrJkrQRLaL5i7pf",
  "key24": "5xxKN5k4FCsHqMr9UCSxn1pvULTLdyNQCmLYpTQeQxxZKdRPzqRcoeJYVyrAM31jBgc2ekEHjrbQbiuPPXgjctZs",
  "key25": "3QzJFXfjt4uUYmi7mPr67hLijK4SBnXD87MBwRvJb41iQX3fbgSjAxPyTmV2rktRPYami1UX5Wzix7F5ep7tF7q4",
  "key26": "5uSUmrezyVstxsLAAh51zik28paczThAZL7wCUP9RRK7iHMDUhdPRh5xL61DfQ18ByueDBwftL7MZdN6mMj8kZJJ",
  "key27": "51u6merjT6RtgtarAjYhTpgdxPp68oawmtsggc1Zf6x8n5hjempZZQENLT7KC2P7YommoMfrjnZo8KTxNmEWtuBc",
  "key28": "2oL9dVnbVBhKZjSBgn7tK5kY4beqYMX6k2rFfKDNKWyruapd52XKwETb9a8DeXZFcEe3ad8yc2Jrck8fWWAA36Wn",
  "key29": "3T7UUfwVYFf7aEisQsY2prrkCTZc7fFFPNGDjAcMafU6pRKzQgzPDEmegqRMHqYNme3m4SJm2ULixMSGwiU48mH6",
  "key30": "gPHjbDnoVPaC75NKvAAqSUCW7tRpzmZu5xiKYNQiUntYuXgACkirAS2dDFSEDqYKqtTaCZXkvXgHuWJ3SnwuxcW",
  "key31": "ECpj3Sdwz1khmJJksyvCPpqmzf5ryDKd21wSMp9638T5Lcec65pS3H5hLLBVwPqGUwHWSCRYLChJpwTiUYbgtTf",
  "key32": "6y2p7LdVWimi3WcCbFDTFC3GBJPo2mxrmr5kwMNTndxU3zySCTHGGaWuLjuDKutWTAUMT2qv6dHHm1KernRvce9",
  "key33": "42R8zAg72AofMx3c4XN4SguHj5KS7ewkgvh4RoKbEwRMMvLq2jvnahfxN2z77Pd8kazvJdTNyyoi94kYs472p81E",
  "key34": "5zn6wzRr4QMGSan4LftgQFsWcZQoAbPQzvvmVoPNCbtMrEUhoZXJvysQTMmjuiu6rpNnUWbySRZdCVQMmqokRj55",
  "key35": "5DKUyWmor1A8BAbbYqaYdY5y7uDjQdX8HeXsRcZTBJQc3MroasMhSezFdkjWsskBvCpCf153MPSdiWfDYaibDbRw",
  "key36": "2ccxPVZi1eLMemHqk8esDBH26c6j8FWN8f3QWNLCSYhFrfXZgqWgNzKe5ZHCZgghxUqYXTvxa4DeALwfQUGdY6FG"
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
