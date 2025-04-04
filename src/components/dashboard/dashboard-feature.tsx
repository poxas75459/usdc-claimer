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
    "dNDGX6HhYvNmYVjuxzvqp4g6rsRa3HCuokCWyAcbygiTXNZV4RFBKpDP4u7PsZMVZAjz3mJo2WWPntZdLGrgjsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfjkjAUK7rS2VJWrx68uLteYCqZesZka2X1BjKZHRAEfnhTSQhWHknChJ9MZoNp8RNx2YhQB9sTK7t9hiNijc1i",
  "key1": "3sFFNiYepqGHRjfHMCAPUv4mP9xwFhmysn6Q4JDcsFtFxFssQi1p5sXuRsZkgY8TbWzziZgsV2Vo6No83zMNaS4",
  "key2": "4rMDY6gHA3SBxPbbAhcmUZ98V8BoYNjxmWZwP4WRURLRtz6riJcmD4VrrGQWkpET5LzYmfTMfohWrixuTro1xEbJ",
  "key3": "97y9wurc3KUkywtwNf93KdFeqYEcimc6UgJMRAqrRWTHRbaX9emfx7cgtqL81ivKpNAdrKvWf7tu38EJTF6k9oD",
  "key4": "4t7xUxKTbzWu3V59FkFCEBUT3NkidNsiLL4WcZWeruNoMKmiHwMtnprVscaBrfGAgeZqvvSWP1DvU2tXLXYZmc36",
  "key5": "3HxgTCKRZBEiF3fhHKVEEHGpghsKV1kLN9R31Qiqs7VxNPGjUkKeScQpTL5kZBhF2hPDHyz58jMcwRYpEzBR7h2E",
  "key6": "3xZzyB41FoWTBkhByhaLnNhGZ7BTjc8nmsRReEtjp6CPwq5KSeM6xKoPuYpNx3pTWrMNLTyHL2SFUfrGh3iL1EnT",
  "key7": "4yzg9N2wGLPeMZhjfKZk5tk9PHpQZ7CG3xVrcft9MAmpmtkKZPtedzcPP3LJKKpD8EDwhB9h9YjmwCrU7AP3o1en",
  "key8": "4ECXxXFoD7GrgzDnDamtbA7fMZpBaeagP2BASwVXfoerzBiHrHpxMcMYzSTDHf3SB51UHjPJBayvjsL6LLqrRq4q",
  "key9": "DPocHENuVoPeNcs3Ya44jysANTCHxet1VF7XTuwLV74Dpkyjdf4yh3SGYZQmwFAb9NxsDGtmG7wAP2SzMZWrBoT",
  "key10": "2kmD9bS1JF5dZaF74WgkdzVft6B6wCxVEhoKmXKi38ZUabBogRM3mv7E4BNaucmLfiht9E8dZ4p37fncSPGwkd7s",
  "key11": "3a9VzCKUDCD7NV82KG6AH4U8MeRLp82rsUDmV3AMVmqdVvjyPTw838QNzQYoKqnj3JEFWiAJryfDWs3rNuadALRv",
  "key12": "4rzQ4YZ5NAfMNVhBKzEgGubCt845BWoczY3ejhZU2TUKgy7M3P6HTtCrtSMk8VffkxShTRCdopsjbCZqVS972DCs",
  "key13": "5RAPZawLyUxrQAFs1UFoqg8kRJxkx3cF6P4qZQ2WN3EZEBE7j96CLqEj1E5o2R7Jqe4dN6EnGUMUyLugfLTJJHda",
  "key14": "4M1XJcDH1MAQp3Nof2qNxHGNYyMYcNzyHisBn1kEwWKxJcibisDFyipw72fpch1rsXq56bGwvT2ecipYY77mMtP2",
  "key15": "2S4mXt3op2oaY1DBtaaX8WssKZBSno2FmSEnnbYnmu9L7umUWVUuhzYs1CU9U6fGRuuKy4whtmMugynxpgiQJJZD",
  "key16": "5wkzwbvXABqoMQxNHuJNEBQcNzkxaq4ccC8JNqeN1SdALdG2eYYgRPqAbZzCPRBwditUa3RCKkDrWTwnFAsmce17",
  "key17": "5aWmqvApQLWa7Bf1biG77oWRHVZw8aCNvnBpxYEQu6zd4ttRDTAiF8dDiyJkXsDbkmjx6fUi2Us8cj4TK9egxHGD",
  "key18": "bsUAMpkULkqD3gdW4cyfB1e33QCaExkp6MM5pYaWc4p3DsmEqi4uJvM8L8toCNJxhmC4T5yZiVTsJeZvtvoC8tc",
  "key19": "3YXY5qBfPZko2yijQMA2ASTcB552V6eSwHbtmKuYS9dZHLvLc4G2bbk14Donj6pV8wjEzhDa1df32xx6dAvWj56u",
  "key20": "5QwY3DGP7WFsNqAC1FJELnG5P1SipHA94MLnFVcPHVRD22Rk36yqJsV7CGLwUa8ukDdvDEZo8RdZPmyLDhk25eJj",
  "key21": "2Hreg17ceVLzkUCu4aPDRkgEwPoVDj1zC8KuvM96e95mUMmwA8Z8kUvmQ9cAjMuQgga53GkonqUkQNZeKR2qdabE",
  "key22": "5ztdaGkXw39tgfy1pLbyHk3zBqKHtytuJyMMfH93ZdPeH5yDGXA1b7EZM61Sx8t82irZ9HsyiQRPVJsvxfkmoqNJ",
  "key23": "5hxiGoUAHzYVeeeNTqYpuCbtju7ryCY9sGf9GiY3XMdxFhF6TA93jRZkMVYE7sFiCLsPcYrHfjh8yyxQFErxUmgT",
  "key24": "3BJniHaybyftXkctTz55qXtB1x3D2ASH1EdePFUdzyjaD3chJgAz4FamzqJqSzbfc6UbDH9DxXRy5iXmKyeqgvo5",
  "key25": "26WzsnfJR2wQ5UgPcNdJMUr7h1Uw1QVM74fG65WSUCDJWMjtasFxkVYTXv7FQ4b1yrKMdvLvfmFUHza9n8LMt8N2",
  "key26": "3qUrrbMwSFWeoTs3eifysBorL6k5JCYrK1MqvUKQ9WoK7i8LZA38wgx6yMgun2CimBUVmtvfmQSsXzfVqiz4yV3X",
  "key27": "66rKAkZJRVDBgZJXvfFBfRvS9wsfnBQbaswsBAgzvimXa47rSSCxsLAYrT8qr4do1gFSrAoTJkcBctfTpWbYSZwi",
  "key28": "2xmDMviKqrFMtzLqBpSH6Y19wrfSoLXBUESLMxZXdpf6VuB4a8NZrjc8fQovReEMe9NoZUwCyaJS79KcibvV8z5h"
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
