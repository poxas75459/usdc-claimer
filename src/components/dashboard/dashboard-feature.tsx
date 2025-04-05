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
    "4xPDJgH2AQttP86MAF444q9siXowinp35YgsK6xHnXcn422zLAbKVb3Ras43bfSypckHHoDwWv1PHkpVPheSefpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBpUR8GFRksnkZRR7KXBnoccjYsp7uA1JkFtYr6GqpE37RCMxptJpu33z4zZxeZmnNh2ow6bXgsi28J4sedpbfo",
  "key1": "vAKSA4NXPjTVCtPo9jxjwvLwDXbVWcDZcr1ZgL6d9fPrhwi6oujF42NE5JCVZfWcr2WMxM5aetPLMzJYr4uJGo9",
  "key2": "3SScPaayq7ofsosgNNHN9MNpkXQ4HirmhwyqiysnG7iUNNNhdHngGrju5JtBbGqXijMa2TFU9t8ohSYdfAGq3jju",
  "key3": "3HrETp8FX1TEzVnURUNPieTBaitNKoaLguxkhQyP6oKEFVTdkveiFp9L4ZJbVi4xWjG8P3ME3iZm52nptxVtKCs8",
  "key4": "3rQyV9Q63ntxakd3QCQztpqkYvG3ViCPbYeBdQnQaeLQWXCYANFhGYE787Dpomw23JCFN3uV1ur2eGmVX6YjPtdV",
  "key5": "R3EXkBJkJSFZm5sLrWNeftnHLwsSvHNPPu9J6V6Ae74dHo37eDhFbCDytJQ8QncK89SCTb9uCwgmfJBiR9jfrkj",
  "key6": "2phXuQmqB8Gmj1vJPqPeA3W7vgcYCkgsQRVYZaVghbUVCTohUTr4LwXcQcQ93aJdPc4NzFcsUz1GQVscmA5fA8nR",
  "key7": "2FFS1kWJ9Vp7P1dtzeZEw8Zkiy6G72SoTxmh65gjiV1UsrWF6W5KJqZewdDsi8VeGPfvGefWq5D1RVU3onYBGBJz",
  "key8": "2AyrE5j3t2GkUShh3kF5gLubBWeB5XQersVGDSGJdKG8nMwGExR5WDvmoSAY2dUNrAW6J5iGvz954KqfjSVj5jsn",
  "key9": "Cm8iYx5apFufF8R5JetKJoEEompHVop5snWdp96Z2RbA5Jsm1hL23oABQqbMy2T37tYoVjcBJD27YoeQTJkmqvp",
  "key10": "3fM7F4c24uB5NA7RqZMwgoNRCfZKXsJi2Qs2is7A4sEQYSUVTQFq7ExuepnCwBFiZsRtyE8GWpVPogW9E9dznn6K",
  "key11": "2J5qGTHr4ZeJBUDpYJSJ98FnRWwPpzAqTten3Rvv796LbkESjUWnWoPBUrTcLVK1W3rpkxkNJvV8BihUV9fzVkh8",
  "key12": "4sBSsK4peJ3JszZuxnfX9qGCz5te14YfNamkkbFc7BgXTA7WqdyM7arqns9pGK9ZhoP6XJm8CaFobB8rbrguGX2d",
  "key13": "EApGd42tYJkRB6AH4w2cG5osSJe4AATtfn9itjLVrd23cZWffpv22EhHtnuLqj3sc8hGCNxL6V4pQw8bkWs5jR9",
  "key14": "9zG7vm6R2abts9xDXToAze2DJCayrvFAiLaccTLzbryTmNPjpqa5f92yjWEbsEcEmvcBtY2aohGLm7kQD74qUWW",
  "key15": "5GXzxqTaN7jYXkUnBtx7cgyuMtCGotL2o6TF2yhsTxAsHULNrs5YZqwozixbhb5RoBHV6vs3yRoS1jNC3cDhrjD9",
  "key16": "5TCSfxjEMFVZ7HjJ1EA6czd9GApF99HSunjRzRyKCzJoA2QAauY9U1voEdWsShYtDRefuroyyXeLPUsvEYhQza3Z",
  "key17": "yq17HuJdqQpfPmKEHHCxrkb1UnJTDvNTyZT2bcYaM6YgQftXW7UH4UyMw7qYmfGCTWLGzvVhWGXzRu4ikFoaoUg",
  "key18": "4tyey4NJS4Bn2ec9YsoLs1K8kUGkg3UrxkaVfPw4tHPG4F5wHHTxpPcjPAG2FV5sVJJyQTgXvqcotxWLhk15qFhe",
  "key19": "4SiQfuN434au3tieSNAxz22AE2PUfWc2LVbRP9WWvUbHuJVovRobP9fA2jSb68gzfAbJnkpjRuUdbiiQdjkAqZVg",
  "key20": "4rQiqeBDJUurmfdB2FYb1PhL9ezYSYDtrePMXWXb3UTKfmBuDDhuMCXArJ4CDGqAQmbcMqTMnX4nRE8ArsM2GiBP",
  "key21": "5FNb4G7JiR1HC3Mkzve7WsSA3ign9yB2bMpV53eXcabKoNsiyi7vyuDq4uGD14Dht1LXVPUS1J9hRUFCiuCGXEfW",
  "key22": "5kVfqiTFPVKFqB7Fggw61QNVnSYEqZmhyNyKsBozRo1GsfbFNnpnc9H5g8UPaE8pgyieh7Y3KE8ByBNTQJgNMWz",
  "key23": "45qN3fXCMmDQLN9uyLGfmbEbqpFZ5JpLGLQZRfbQrY8pEBHgyAjA1cijUTywFTiNiQ1A1Rnw1F5Bkerz8TtkTYKr",
  "key24": "xgknChxi8P5daYLgfBb1vWH77WZAmmFCEBfhhK28V3R1r6YFiNEYduBiGogCDV2SeVBBPk4UXRmTPeQeTBRXkqx",
  "key25": "38kxMUEfVFJjtZ2nZbFpEaSeRJ7rQkdZDUehLeHLZPo4LdA7HNpeMB3NKwraC6vYxPNQqGDqSd2swbQ7bkoMXPqB"
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
