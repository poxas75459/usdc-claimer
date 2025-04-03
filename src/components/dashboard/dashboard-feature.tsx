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
    "57uCPexrQvNupdrim4QvMKQ9iTghSJfSNRQK5wgMtWVQgkxX2knyqZXdxx2oWWirCRaEAM2kKubzCMG2TG5sGBPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDUii6ruPwSUs1ue2mc5Cwwq25p9ZthdpN3BcofNA278GejRgsPSRB19sPWduF2izaxVqapPAwz33FgQZdUJ4Tw",
  "key1": "22ni33YteqX9Jw5Sf8axHLX2aCeqG5TPqGbF5FcehFfius1QgEXXJMu5DZmE8xJnqgXgy65NEby4TM3RibJDfEjn",
  "key2": "4huSm8ybX98nwHCJNmh6jf3tgM3PXvGop7GeryuhKozwsnyraao2Lor97Dfsbqr8G2oexFHh9gxbxBUJqUvrVtnr",
  "key3": "5VkDQuN4ufr5oCsduoqW4hbTVDLCoUmvJHb4HLB4wLNXgT5qjW2PykSNR3wchji1QTR5QaL4XCFbWC32MGrmqZue",
  "key4": "4KhqdqMPveigDkLWFVS762HSbYBQX7ygV3k2AJgVgU4eLkqt3FEjsRjMPmJVfvjZLaLpj3PgeffTUuY1NUVYBy65",
  "key5": "3JHXJtHr5Dqjod43heRYiyxPxJP72BoRsXvt7rqm25gWDWo8mo52ocEGCXRuD19s3ZyH17Z3Cx4renJuQ5moefgX",
  "key6": "5SnmzjmPNUpZwYY4PzwRrjrzov9QBcAQ6B87uuKH1RBSmyZCcq5mCkHuTHovKLYAMoVMcPqhmoHfRbQDmYinViPL",
  "key7": "3NnPX2uCK1xGfF7FgzBx3M33yy7FaP1xmSsD6N3qk9d5V9aJ64mpQwcT5bGY5BATaEKNrcDWCv2PV8zZtXDFWorH",
  "key8": "2o3RWpLc3wQMx86zx7ogiRAcNQuBjz4MwTpiTocdEXPNY7LBgpNn4mgpP5NH77S4mzasYK6R4NngV3sGnuv5HmiH",
  "key9": "3gCyoS6oBAtRUonHrXZAmkTysoWtFv8DS6asXzV4nZ43WUwd31A75w7ZinxWw36W2gfuNyfshyfF5xj7uL3eSXxC",
  "key10": "rGpebdEqpux55mGusJXtBrFxLuFqfmkxKvr5ZNJqbsxnTS5YUJeNmNNTiXCcsDDRyF74nf4vwDRenkiUvKRjKU9",
  "key11": "wpj5fi544VBvdXHHREJNnrq6QAiTHdPbi6iRxESpHSeWtNf5eea9QLqyfFmbxLv1q9MoxhM7k8zTwcRyHcRxJks",
  "key12": "4NLSewkN4HmGuKpDtuNyvJ5MwGFrau3mfsZV7f4aJeqEcCiDtYP6wTbzw5otfe1UJXzdwb1Xe6n6X79p9rMbtJju",
  "key13": "58f7yJFAaKLs4rsFtobmLksMyJkoTJacSLnTmdk3w7dryUTf5FZ6DqTLFmdXAGuuyueScCBVBYH2p6SRbcZGFdYG",
  "key14": "3QqK2CWe8pXi99ZoTmKKKTqKd8ZckveJvXy7ew3zJpjYACt1k4e7AVpPfmJ7YXpPmch7Ch71sraTnAAf8ksExqjC",
  "key15": "2tWxKMkk4VjhbwQHFcego5194DHPHEVag2GxAgKkdSCqHT1dJeSiwGaXNCDWjJd9uHhA4VYuhbweqXamf7ns2PMi",
  "key16": "LZWY2XzqjWFDFTDnkFfwyswHykWjQNk9FUceGtZreXEdKVfoBzjrF6WXFhiAnmKiANWRzPPkTC4Aaa3AnTZUh4c",
  "key17": "WgpTq7ZuzEvT7Ki7iUdPRu6V6687H67U9thxCmdxprx2Cz6aY9hVBpaKsDq2y1HMf9y9svWzpwHNCWd7fG8Uvb2",
  "key18": "fF6hvCp7oJg4LDDcbeSN3RnjAqZme9UXCww2x18BjejZnc87hbsfDLHyYhiqgPBzfG1qUkH7zj4SEcd3kdEzFof",
  "key19": "5nv175fdTufjaBLDwcLAE77KsSzD8F4PsH8UwM14zBbdBHCUrYu2YEUAWBrN4PZp83FKZ7Fg8vA1g2C2aahFNAFS",
  "key20": "3BSqMsstZQUSetQUzsHcY7xUkspJUQvMso46dxx4m8oEF3DhWKMathbj18HzXhsmoW3SKEd8uovpi7YRm1LBr6E2",
  "key21": "2mQVxvuN8XydCyjRR8VaMZ6TNXp1VZepTxjBw9btA6DVAHGeJdxP3xLAYcw2EnJSw4Z8ymZodjCoYDs7CE8VyfCD",
  "key22": "2MFyBHKbndAf9yvvyFWDJj3hvCxyzbHb3DfvVnHZmHieiTDF7wYaxfcA8zzbvg76BgaSUjdciLjrmB5uXxedD4NN",
  "key23": "57nLBXUdrnqTtDwSevdVfQQFsinBp9uLJv1TVMWtDwrx4h53baos3ZVT6pBPuR36vSwg6NeWfM24PQCQVzQLWhFS",
  "key24": "2bsJ4Q1w7ttT6FU7F9A3zzA7UG74t7Lhh7f4777dzTocTK78tQtCwxam7MTdQHQEbM2anFvKUN65PVkTBm2i9A6v",
  "key25": "BsEHXMy8d73bVDhDhcebseMEQsrznm9UynZjPprKtqmUtXEa5VfZjeriwwNxoYCFezKhrzq94oCVxkwowTWit8T",
  "key26": "61DxcFmzyVcbk2jp83oxwYLHQ6ohGRRiFEBteeDBbPNY3LymtSdBQWxHJjejp4cehZaq7JoQ31amCRVpMRgLdEvA",
  "key27": "64dYFQTWUMBUS6orBRTYyBmwuGVM3SRv17aHiYP3FUZC7dWFV4vgkoNtrCkih57HNVtZprnYbNzQdz3gTLXMYi1y",
  "key28": "62sSHt6RZh6rNqDZuDxAg6hPsbiN7SjbqW7e7YwR6cB8ZUQ1SZRbsFsq2iDGruQn1RZ8Zn7HEFCJnAXL7eqX3frp",
  "key29": "4BqmpnkkrN3YTprsJLYJwXeaiZuHEmuscv4fgZqS8yLksNRZrUptTGo2vpxaWRXcU9kSjGrL1cV7iz9fTsYUNryi",
  "key30": "2wxFSZ1gTUz4sKzSvJiGdsiEaT545sEzjLPJ9BS14eQS1CEaVTQtT94mnenQydgx6ehQtMcgPcQKcFbQ6q65tdC3",
  "key31": "4HkozQ2pT5cRDTiJaNhk9HKW7MaPp5wwji7L2wfGQrJAJYU9itdnDKYK3ZUeZYW62TFA731U1QaeLWFR9FBV572r",
  "key32": "robBMaeDGauzfngeqzQp7dtp8t11P7ZRrhBJKEpkQTkWiLPC6r27fjoU33k5axToL4GXu9tzmSgbNQwTqjTEWhr",
  "key33": "5djSvbJnp6f3JsY4cBpHdJXn4DLCr4bgvtCGW49TFjc4im98KHtycc6KA6NUGUY3jKw1b2VpEPAyne9CvMuVzb1b",
  "key34": "3s37vhJWvKLMUNv3oF39sq7zEXAjt9FrAEXbn8NiLvmHCGwRafLPdzKtZsXzy3ihcdaMf66sBLGighq84X1o5iEr"
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
