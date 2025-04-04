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
    "4qALiX9ZeqvvQJhMTapE6vgGx7fJ891MPjqr1LmjiDoaygWkjBrkfabTWunC2jejDenCP5Lh83BzQBeAM2d6GaCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLAfFJWnbd6QdJpPXNBBgbhHPavWX5BpqBnUNw9uqTQwfoiiCmYQnv6Kv9qbnnVs3JxNTTSbsXCr1Q6xdwVstP8",
  "key1": "5n9qFQHqKY6idfN7gv2D4cSsdTZ6wi9ySfAevKjimc32WTYvXGBt6vBBiWTTrtMiNn4vxGCXFk8mSXve6u6DbWBw",
  "key2": "kpkRr3mJ5Pf3zsrANCKupbHh3N1L7ut2SbHvjZmpCSxKCgRLSXZHMgZPMnrBrLULTTdFXBxqzkBgWVEU2XGPqZV",
  "key3": "3aVPE3TU2driJ6ks6uPRnQDH7eUKb4higmjSnSZRKAzNBQsfe73KkV8HZfb1FgKue8ZVykzoLeQ19iGCekwNeJ5A",
  "key4": "2ndCtaYqFeieeCynKVSg5RWr3Z1YSSiEBWN8oPX9THGu6w6ZWF7NwmRewfWvHZvTsW1uozRm1prQePQWKXae8THv",
  "key5": "4uwmrweaRQKjpSaApMFYid6ZcNaYdXbLVsF63GcxPoRPBuHtEvHBRTHxGvRAhVFWArSSU2qTL68cScgvvuAXcsiS",
  "key6": "52JbkS7P6DAB3dNYhXpD75coq5cgt5CsNMSUyoDowKKsURUUA8afUsRzvzWrCuKmJD5nVQHCEGvc1bZvsyyrzfBK",
  "key7": "4X7umg5BoCSw9MMq8nV9ozzEhKNk3yz16YGTtp5GLJNVLki77XQMKs695Zo9Wp1NAfaynpDm3BCqARCwpdwo3J2F",
  "key8": "9Uoc9WByNJZ1dx2kASx9hiCxpDCTqa92SjpNWDUhGkPjkei7eNcVh2MB2deN7i5EaDCt8GBAWdDzyDhuRq8nLkb",
  "key9": "qztwo1M5Bn7WXM47gChf8th4nf4ub8etE4SZshqmfqzY9RyQUzzUpWJc9pzj7bANDaPtu3AT6SRjhxzkCogEVcc",
  "key10": "xk7qToTxDLWG9aAx2yXMRudj5bsUJeVUG5sWCspob2sCFPirPBePVBsWPWWPniQ86JknsGexDuWJbb1oYzfV8H4",
  "key11": "2EZr6JDBXnergMWJ2A8hpdnwZApqphN8e2z4cpMjr63ACqYcKB4yUqVvQtmK6W9qkvKFJRwUXpVVrKBSRmckxxia",
  "key12": "oEz3rbyvBoGyFd83o7az1zgvXC2NNv5ELx3XPRDJBKXH82sNam3cyGGmQHKmJiaRRcvguBRTMwSaQjHUJ4n5ihp",
  "key13": "3KEkUq5xWxZ2XoPx1kAG28vcGKRmPE8ckSoyVXJUPBhahU1XdfgvuRdYgBzDc3Dw68LMcP2SDD3gmX1VfETQR4xz",
  "key14": "3otwxgoPW8yDqHopqEMiFmnvkme11vopFCgkbR6nertY8n7BxWTKjSkijaJo4WxN5PZd9QpEDg5GtukBD5p5h7Ct",
  "key15": "3UiwgsRjnryiVYBGK5skZ8jGUkEsf9ZqBadFB6X3w7TNckbPneTqTELfuATRMd8bAcQofzxMWSEZsWhcvJ6VVb7h",
  "key16": "63pCTzKcKrL2EkgZLrtXp5UZkT2oQEAf3bULg1Gb5KtviqjEKDWbmUaEBCZ2dhvbUsNK3vFrgh19ewRiJ1C52toB",
  "key17": "2Z2kgyu2JiMjHjcJhupoZqwzScXUL97HCUViTAhbSHyBvmHJecx3LUr4hMKv8HgaBKr4v8ZkQwa7DqZezwVM6aGY",
  "key18": "5NQSvLWm7wVXYnwswpf57ZY1cPXhzqYD15fdkE2TfoEsA8eQgmMURbaXrVZZEi25imJM9gpCHHsR5eR8Z3p7TmvN",
  "key19": "3umF9SSji8uDLZ7tmB35gowJ4YYjVu1uypPzMxFusSoFxKZBVA1H2rukr1XiTMXF3VniMYa6YRRhGkAR2tD1XqQH",
  "key20": "WvD1FhobASCRiv2zvrB7yoqNgoG88bZnpLjhfjJ27hK1grgms9r2gj3MLm6tQr7ueRg8VDWzkL6Tc3kEzDJtq4X",
  "key21": "5DA6xyEDUL8PEGBgepnbqLAH1agC9efpqhraW8SBaqEjzUvZhurGix9M73C8LUpG2L2ny89apz6kXsZEszSnksyM",
  "key22": "5uy4YsxmS9Nf6MkCxBix5RwwioTLcR4xm4L7newHYvxvTRd3Ee5G2PhZZdDY6c6xMcU7mXBsLrN4g84piWuHP48Y",
  "key23": "3izybSNXttWL6W3t2gc7syzDGL3JXaAtm8jvkhtER4evPrB1w3qN1QJB8KoqaXWH68GF6TKh8hJUsk9JtR3ENGk7",
  "key24": "3aXtRhBuwfhXH9FzfwzT82T9M4GcsYemcHt6ZxARLSp3Cfnn5d2PM7xZyZhACkwPA1cRsKuZjeL5nZ8N65ztihcw",
  "key25": "qKD1Bsa6VmtBNjWg92mKCwEtKHWfKT2Rx8TDdLR5zsJZ2LxNDmaNtqdB5reJi2cpSr4tcUszSz68x2XGEr7dcoF",
  "key26": "5Rv7Qtdn6d5rvyvqRqgczdmEzamzeB3NsqxkoohvxMisqY37gpQMtKmtaydpFQ6vCSjcQsNiFRRUZxNK6KhgAAt3",
  "key27": "5swDFMBcULTiejwekWJFaXHAbSywt32MdAJbT9FAaKP67gUev3ZrEG2ExWKC4pZ713Pabj2KRAJ7QNrMQuG9z2Yd",
  "key28": "4DhNN2wphYaJvErgsG3D6TcJEwJyUMYvskVAMcGffycEcE3HHa6zmTWJNFsqK5NbHBhbcL6oGezdwDrznRiZ2WK4",
  "key29": "8aJTw52BKA96S2PC8bAjQyE3ay2hfpBjVetJsGbnzJJMTfBKk2shMgMviaHpwnh34d7bw2PWPiyJpeNF9SEYCf5",
  "key30": "4Nwvunur5BLTEFcSr752dNVxjdr9rTRneXcNv7zTeBefXgwW5rWnUh4ZmjbyKLfqLF8vXrcrN2ZXJfJ71nLQzm8u",
  "key31": "5gZVtGKHJMgsX5yY8yx6XyWN1Ztydzb9dhtHucQPsX1nqLqCGtqAasN5vEscBFb4ZWwtJtCikqYKZNzjPxGrUAdU",
  "key32": "2nZ1maCXXmqi7fH1JH3ksXSm1e1VqMqGjmo8FLGjVkDrKwTakC7ftqHQX2K7kSdSBmpYvd969FsEgnNZrFLcscxX"
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
