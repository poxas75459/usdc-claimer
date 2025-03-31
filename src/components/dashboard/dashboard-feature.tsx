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
    "373HWdA19T8EUcCQhLGRJi78wcr4ntr6VYy8d52rgA3AFZwkeBmg7zV6PTjv4BVEKhho82iTKU7vnCQhYsDfMVF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGqmiVfED9z4z5z6ZttfoqTbBFMpfsZ57VJ3MxJgCCZdwdqTJk8TATV5TfzoeA3T1LhJj5bWCV6BDuSAN4jWojJ",
  "key1": "3p638DkJ8wU7VVv1m39tVjDq9F7iVsxHVxwtjAJA8yRB54ghCMRE1Qqqs3msSSTdwjhBsZGJRhB2Xgp54PkttjMs",
  "key2": "2ZQZiHeVyBBvr3GRzZVaraKL3MP9vAee7xk6Rnh1ifrhVKQhQt7qBNGcmjtdnvo4HD2SUnjVE9H99LDzSNt4zDGS",
  "key3": "4VwtEjPdCdLnH3niPSPphkNK7NG2TykSR4kCab2so1PFH3JWD8wXCwGMdZD4MwCLsnwsbGJxjLr7KEXKRt8YXkgY",
  "key4": "4Y9ZPpXcrZVdHEXSEAqf4F3aezD1UgeqngnkrdeuPpzYa4Wi43tQvGH8grQfbBnWxLNcLKtFxJuA3KMGyfyz4eQq",
  "key5": "7wkwSMAT9JX8WWuBXtwcJRQjXGdXeAjaqKDm8D8vQyRXy9qGAZyKXzuoQhiXbzD7Sn9BmsNG4XPdW2Nd25QJs79",
  "key6": "3CciFdS1cATZMo7WZxifQHAq3SoStPCzZ6oMUvCsLEWaUykwmYSVaBBTQEuBEcbPLfUeJ2baYnMyv2SMkSs7PTee",
  "key7": "28dpXJf2S86k7zRumFUYheMJJNMzfFuVEwLw3PqhqG9VHHyP1EotmbSorqp86bHznbNw2iLKfh1YHXgxNziPHkh7",
  "key8": "RfPH42XcwrRF7K5guP9XCms7eo4J7Z3jGZ6WZ3awXoFAysVr9BeCYNScVVrFWe4ohgYGsLsAbfAFHnvX5om5kCv",
  "key9": "3CDv1kmue7NYKQs5gjfqt2RYgxRTJJbyGXFpL8v2oAR2HHARQ5Q4gJ7bjcKHJimcLZv5MD7phmKf4HaFuUgZv19Q",
  "key10": "gwGfwo4bDBcQ5ZiJ3GhZ3ys3QAxBG1pGig4eVcFBiUtmBRLpeTJAExwcn8BrbfVtxrwUyQUHjiTAEGnuMNGQtmz",
  "key11": "7gbGfcJcyPTQBMHTiW3PLzm3L7hELUzSc9kDeNDNWP6By4QFPqPaxhMNb5X7qdGScS9KeANfuHKD4ChfqXG8MRK",
  "key12": "3E7JRnc7ek61BcynZh1f7SuZFA9JNYHfLZUXHjnZU8ofpneuKsYPzQhph41tkTG49svhgGKgXbHue9pw8rDo8zP6",
  "key13": "2JeA2FL3aZsuSczYbYkt6L8zZcddLVexotTd3BxBX1vPZ8u4apHJaDSDqiKvx6Pakb834gTEVxBzKQJstsjZxQz3",
  "key14": "3o1bALc65zzC2qE8mbz6RbCt1v3aLKDY1KLdC8JoQ5b4bpY4HnvwsvTfPkwRsY2NbNGR6nzQHHEs1rJSF53Vs7wk",
  "key15": "3auDXGjcYsm7PXoaKjbNKD2hZ57zvWvtQjVVuXC2SeY6kyEzZexSxwfywMGXrWs5YfNTfL1C6yUDj95QVHrJbrvj",
  "key16": "5VcKS6giQCC8JbKf8gLgv9td5R1TPqmvbppaUE3tJcFQVPFZipVqmq5FTL3tkHNt1iqvZF2HDWZoLSngeJKmNQgq",
  "key17": "cdpgKkDJdPgfxnau4KnQYGc1528gNbaZQm3F1HTxmMBjMS4RiwhwFKdNrhtRKpkaCY4Wf1TrbeQNQb8ZzSHNw1x",
  "key18": "59vTZBp3UdvuSVMXFxpphPEggFfiHqv9Q1ZMYYh6UuGuXNMc4HC3QPxMVrjQ5kc8ZUmZ6s7p7u54eaXzLD4f4qDd",
  "key19": "qTcsKYQP9jLBANtzymB3uA1BsQpcvmcXv9KxZut6pux9zypfCquHox8JRas4V16YiUhmGdm4vE7Yrf3tgSF5rGe",
  "key20": "4zVPiw5u9afRdvnnPwHYoRsMWgHk7Wb9TGqXuDKjrSHxxM5ADRpNLDBfyNrMoJ7vS1SFpA2B5B2JqAkLGVFDrAUa",
  "key21": "zQetfvaBveUop1SJa1LNfiMjhjwps2W5NYoDSFvMC4X8CGdc6xbqtfd1z3WQRVqAVyBMcnj9VTMgKesDFPdjpRq",
  "key22": "5YntXoUbzGBGTW7JPffempMy76ijLK3icnedUVdxGhjVX8oHTpPPYztgJu17vwwEoRyL6V5FdwBKJnigPCMYVMP",
  "key23": "3Qkpr4P1euiKEgqTMq1m91EFFEwQaVZ3dba61TphkEeH7XZc3siaGybT6D1PJoDpJgoC3vjzkmu9SVidAQ987Ucn",
  "key24": "61z7cF6q6Mwoiev1d4Hf8oB1yPk24BiyzEoQ39TaYZTSo9HdkqBcwnevbc9fafT5RzKeCyUMJYqmqy1FaRrSEHbe",
  "key25": "kg6rGCiSEUr6cwCr8qW5QcWadczceoFQKwd5PKWBB9Piv6gXzLFD1BVmUgCqxLiJRbqASBesE2TZ2G4LjgnJkce",
  "key26": "581b3eoDBAbxShWrTdbH5ipW32javW5WeXasRE183rxcf2Gsjb3n1PnWLSnc8y9Dh4hKsxNpuFpoEgEjZ87vZ4Fs",
  "key27": "2kd9y6RuKKkuM7kq9gq3h7EaLcJZYdQDgqH1BoN345pQ8297vxquGu1yzCM75XFHdvtecBKJ6XKpr9ngKpxZoLcN",
  "key28": "5cpVYgkg4nzyrcUYAfAFrvUtvPce2iXVK6uCRL1zFnc9SLHTcoQrWhAzTusQKrZrkrBFAq3eBDMzJR9MudP5iNg2",
  "key29": "4f89YLZJMzYQJGjt8KgYUpzC3ne5bL8eCt2jivfk88ta5BZ43jEs12zLYWiCQQrDWMuGKYXbVGk97phwgRkLznUy",
  "key30": "2G5xk2ySMZPn7pCcGP7FvWkS3Yvg4GCFdgUUTXRRp2wcPbGC1aztSTwQCgzHiXkNWm7McyDqgmYYPM8o1xonUc1s",
  "key31": "2tUCEyfyo5jPRgjYaZeJcRPSAHxMsDdcbDkWCHw2eCf1u5bNvobr2B17qp37PRmvcckPoG3vNizBz1cDHMNBpVzz",
  "key32": "4avy1dfvKbjPPfmDxF8En2kU1s7mDMAwv3xjjDkUuoF5xCA1GFgiuwYxPVao5vXt2k2Qi8ECHyCtYcByjwk1MiyZ"
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
