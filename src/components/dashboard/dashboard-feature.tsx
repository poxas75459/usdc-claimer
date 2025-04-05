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
    "HHY8RCcqR1UeGeGTPiZZYfXFJgdL5k4p1xC6JPUYFPEo74ERrz6JzZdQunTPFNEWeVCN6hGX6Q3QwtujVb5FaFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wn3hhvE7PzV9Jutfr8f5RfK79Zn8WZZz3YcAbXrcsGX9D57kYkgiAPN3CRzBAMvVSPwVji2e9sCgjWudGroooxr",
  "key1": "23c5GoxnmFtmrQpibmPzYnxhPMTMwF2KcyRAaQuGBWYU4gJuh6NfCanH4Lmiz4HGisZcPWXRD7RfQy8y5UVaCWci",
  "key2": "2gTR1WJLREve931p7e4NiFv5RSnrkzDo1SapvwqmGvEVVgJesMzSwxSaNz87JEiqa8DC4YuEHFcHiqUuGnukRie8",
  "key3": "92ahPLZVGPxMhT46HB8RP3zVVMfvfFK6rLTun7Rm5uyWFDfdA6rMBAzYgYvjnakFqBnHhxtuCQNpUEYGgqP4uoD",
  "key4": "3HgbJh55PsNRvGVejudVHvWJuBEWDMWQy9dxKnKWDeRGnUDrF3PHXHXnbWtzDxCwBN8dQUomV73h6gpSh3AYfkQB",
  "key5": "63TpSEixxf3BNDHhptK92oo3r1pa2W6BaFN1y5YMQAnZydYudiL239DxBgogkhG9REyrXj98FqFVfykEYaB4RMhi",
  "key6": "3cK6k2t72LVinBRR6pCuH2ha7CfA7KbBsRdP4RGbhrSyeYb4tNT98iLfPbHp3SkeNxm6R1RDyBz4pA9h54yVhm48",
  "key7": "3TiVLvy22nyVnadgi7w61VGrF18bp3HDv1vBx1y5phcNydh3DDrsuqoZZ5T1bGpvpVkpDP43rwEKTGpwUAxBHNmV",
  "key8": "61xdoVDipbFnJ9jVVJcW8yAgB2pLac9ZBsHnqZvx89VNYsacwXb6zJ2WPXafiB5LuR2tyzmfNEtvCzEDyQbh7vAM",
  "key9": "cGzXkKczGr9rzbi1aGVqPqFvxnuiMjbL9qjKQNX1sKU9mhaZQy2Fc122YqsRBxGcR4PBHTFiAStpwtjuoosaEMZ",
  "key10": "2r98eda9f8Ad9a7NTqJC2PNvkcZiPQj84nDMvLGePYTFw43LCF8Lr3BogUedHpbaXs4W8mSBjCiFXQf5Qviv8ZNN",
  "key11": "YkHt1PCvyxgFSmuKxTrUZm5aA7qDpYqxCi1ocWUh7vRmzaFc55TF7V4txYnhhpqww7hAbTpPa4Y4CUy2knVuqM2",
  "key12": "5EHnfdw5sAQVPhgQH3D8Pd6qBN5erXXHexMbdCicXyQAxGnH1w2EUApjuHQvBXSxjVLjimbf5ycuyZnJB5GBdrCs",
  "key13": "47nVKrBqfZjgtbYLZRyTui76qj8WMYJfxfrVZC6CmcDh8TBUKxKAAAGwks7GgsGhELedh2Ru46rQ3VtGqwoG4N1x",
  "key14": "4gsfSW9kGykCMN5A4qesg4tRSFRaMEJUTpRJfgvJu1F9YXtDePxG63XNF9Ye7jbbpu1kW2wGnMGuQxUXFpEznAF9",
  "key15": "555U6jhx7Zem1TbTGgouTxDcx2Wa62yVB49htdPWzjypu1eWQqqx8NVKT5fdkmxyTTFLVrG2wbYiitiVnfg2XNK3",
  "key16": "5Db2Kn2nj5dKEQH2h8meWPZbbPTUsmVVLNT7srFRhh8SWPuLmhJkKjuCyyTnTqPYTPc6SaN6wyNEdnbH56zZT61u",
  "key17": "zxDoVs6YVoWV1B7k5qF8gBrbk4wGghv3wskzB3xeSvwyUCYsvyTSPNtd828oD5KV6kyzbMfSX9ToBpFfeuBKjUB",
  "key18": "5XLC45eHbB1cwyB2Nw2H96LVui28ujsChhCEXLiJ1977wfTVo4YoGfduCYN5ziRaXrkCSHe8d6BX4F3Pb29LeSXB",
  "key19": "39UJETJEfK4E35c8gVjaCW6FAfvAGKVWdoNavHiRiVv48y6eAF6gWENv7iNE1BJDeVe37ejZzR8T3m3x48F8pdNh",
  "key20": "H4FvjyqSphLVxPsixcwTWMJkHxA9zbtoRRXcxUDk5H3xdKNcp71J1CrByjcXSoe1znWUruPSc7G56hov2K32GVC",
  "key21": "2p4FwV82pHRZWUEKqTnnEHmpceFtQ3MFgHDn7HDjdZ3ZHkeCECDTHKGcbNGK41TZ7sQg9obTgygo6c92xfEunitj",
  "key22": "5j7JadtTexYuNNRW8AnF4GxndsrhgKUpXQ5ongwczQxEp7rFpTwYaHVojj1mppRRcgUYuUfsgCR7wzm8NcMZ8BER",
  "key23": "4B27v6qo1WgpNKXf6tr2JgpRz6WZpVEn4WZ4thgrfQoTZ4767DBq6zFeGpSa48nGUwq29vhEREHb1w28eHwmk991",
  "key24": "4gAwVpdH2KzxnR5HhmbENeJBATQWKywV6JFnqnq2nrPAsPx3nNK1m9GHiJJRqKh14qkDEjWff73B99BxK8DouJHu"
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
