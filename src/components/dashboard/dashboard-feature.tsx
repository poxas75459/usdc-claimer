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
    "2ymmd8gf8FT1hRWMuYYmFoctUEQEjnH2KzCk72tbnzViVirY9A6Zzu2dWtUvGmGpMsKp91UjuNeoShzBJDLT4UH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TM21vGogbGuB4bYgDZqApi5G2joHxsThEFfpbcvTGcTc2UAiQwZAkkjimgtQsC3zQNiTwbmghfvkV2ADHeYmA9x",
  "key1": "5zmsZrvafGXH8RcdktLYxe2j4nHZjtvfyhCDceY9QAcS9Fs3DA2gPEWEUHH6aTRF27ZjUtwZhDjDyBtJSV9pSSn1",
  "key2": "4qGP5qGSy4CiLBsFCY1951nogG58GZ6tQXpWpuGiFiF2fnRh9k5MExyXVgVjwFVM3D1BgEndEPE3R1xHmCDgiV4",
  "key3": "hrHTdHGVbDrfoeJ2kH49YjfQ6muq2VBLsy8JL8sTnCsscU8zJ8tcpN86WqCfpbEh8uF9neq2XdBiB3Bt6teKtsY",
  "key4": "2ELLjZP1veRajEDA92nKyK2YzKuboSdvA3pJ3Qnt5wJTxVScmRuX8GXQeivKPxqgnoP79dBaW8UC9jyer25vsWkA",
  "key5": "4kVFtu9VEhcZgrFfc7SspSYZHQiM6k3tdfxVEiWVvJ1Y3dr7JpDWRet4wau5J6Q6Ee9rtkrNvpLu6KCgTAuamWfL",
  "key6": "4VXsex1SonWTPqTiv5U9giL2NdELPX7nyJKKA12MT42EJsFoJmhqxgwwubJEFxUqiFAeqRNyPsezX5NRG4dVdR3M",
  "key7": "3uygbN9jsgWHUM6JoKP9nDQEFs4mhR97NFVR8LAeLL5KdiqtfYa4bviPJqszEBGae1c2DRGGocLxkR4oEPi9abh7",
  "key8": "43RQQmyothzkNsUibYpB9gff8zFbK6RhRG9v6qJSXRCmYMDDdkgJeNT4rqPX7Q6BLPE6EaFE3xsyF3zMGxRXY7Yw",
  "key9": "2yGNAPF3QGZ6qfSRKDeqUJZrJAsm2GQSeX13U4QNBV65A7rL75UfzJBnYg7VFEWwkksrwsshqpYf9daLc7hk7qQq",
  "key10": "5TrbuT1Nx44vBXjW37iadBedtTwSKqb7ikSMgqJzdmxQLMQ9P2xb4pW1kbVQJ8FrQ6iLX2LbJ2CTkdA6r6ohsXYa",
  "key11": "4JsciVSayYrgUDPQaj8Zsmhn1hxMYuLcVVt5pWC4inTppExegwsCCHyfSibtjuQyTeD7nKTbkVaccGAEprVhpDik",
  "key12": "2ehJ4AVP4RdPcpAFtc9Esh1YEfWoQF8vUEwL6tqFDwvQ1MqYqtxozzdFEMGSVNhnsETqFXLsgPPzdx9mE25xC1Nu",
  "key13": "57ctS4A6WTDV7r1fsq8jsF2ANNf7NqTWFvQBHYe1Uh1zpvwg6g2AEnCJiJVuM1iJuCQaEDFb8EK71n7PMQZM1Ps2",
  "key14": "4nyBhkKqmPS5padRjVrRJVK9WuyayDt8bUHyuAom7MHW1YXfuWEuM26KH8hht7ka1rSFC9aVcD85uUCqU1LXKaMk",
  "key15": "4m7gvoEMT2zyR3dMj61x3gJNj1R7gEDb9HbbJhaAAtF3dCy4Lr77Y3X6bT2aYowFcCYeWqWZKu8P1uvu9AMa5yeW",
  "key16": "4gVn7inTNFAo7ttsFiE7gsyKb3xc3gwhRytdLnZnY7Pwet2oq3RzBsAGkdqgLEWbgFzk1uZceQyr9ALqiR23YiC1",
  "key17": "43UZXzT1TP8EkbR67FKV4Ni51sdnCQDfbAjsFHHhzK2f5RabtmPY2AGC4ciaGh9pHzQuVmzXWfhpWzC3nAxkq7Nv",
  "key18": "22pypYbWbzW3t1WkWKTyVVxUu5KYcPVNEhNFc3xiZveeyXk8fJDK3k26iFQQdynUiPYTxhv9gADX9b5bDXURysN8",
  "key19": "3SGNCxsAHgWwstavaHmXsFZ15UUDB1DX9K58p1haDMVtyxGZveZ9BrTKf44t4mKeXjhtQC58xGwy34cLb7QNAxXC",
  "key20": "3j7zD8pooGhiiRw7U83BLdkVh2yhvavXjEU4WUxGsuVaqWAmbouY4zWVcpigqJ2mRtfyy54pb4c2EzBP5yrNdMad",
  "key21": "3CuBLsQKTorzpUW4uCrXT6sYZ6ugs9e3vqrU8uxCnAn39GLvWACJhmVhSLMBCgX6HxG8eaCwoUU8DuVYDu27UvJv",
  "key22": "27qmftojhyHzsLagyRpHHNkhu5Naf4JkaYnHYaR3CShR7JFkDpcZ9ba1ccTTR3ByWR8s4y1QLTBu1C6Erpv9BMZf",
  "key23": "3J1eXZjBtEt8eKbx63DMbWyksMqQMq3mXYeZZPiRGie8FqmuShaVbBAxUmEeh2EiaCiLRP47sRhSpHSUZChB65XL",
  "key24": "5QfR6L32nZSjWMYprxM5kKYED4ZG2EoMc8TnhDiwMc8NLrHfK1izyyYD4678icWbN1SkQ2ixNkNk9C6ZLPr9drta"
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
