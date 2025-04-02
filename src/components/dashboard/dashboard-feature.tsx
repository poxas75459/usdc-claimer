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
    "2Dy4qkrksPy8egH8K2XFgsyUJVSAA63VTEjK1hKdgdytjbrX2u138iHvteT3wGATijvzGA5b7p2UAjHuNCn3fz5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSYCgmC3MNfYZtYyJ3dnxp9MbTsXJ3QeKepU2XHJurYcqjJrxTWfapya2SbRogk4RgbRChwESFtqo7enqmor893",
  "key1": "5TvaZw8WuSF1tKztdYjZ1jGfDHQcPZGK15ezi33ThuySwqSN2pdwt7gAfJUmYcpC4LoMHpevg8BVTiXgUPNnVYLM",
  "key2": "AyNverMH93jW1VyVv2gJoNSWWBBpzRcnYHvv5v1hsGUQLr1QGtm5mL6NHNsQ98wCo7LBwt5pq4nAWEo3VQxURts",
  "key3": "5ZT8iEtYPYd6cKdjcrkBChtKpitei1vQ4B919SaovwEMLoq8PjEqnRDp4ZTAkMw9o3ggdVtPuKbQWPma78t2ziwB",
  "key4": "Wji5tmTcyd1XyfaRsQacBbh3bPSNM2QTwQYbGmiVsY6rSmpSrg8qeGNBxMbfCkcPPVPLiBycayKzMLjq8wv2jUw",
  "key5": "33gXp6Pwn2JcccBGdJ2XdNunGpRndVuBaQhPRoGmnmEy1mrvZyXrYJ1q47bvaRpNx2KyGw3EZX2PyvTD9vhwBgzS",
  "key6": "39NvT3v6XJWLvXBnSWAdk4xG9BhXoinbkWACwRjZFhWqzidWKJtPKdRHbuJUmb6kREyqPrxtAbTZhwMajCUhqMRh",
  "key7": "5krJqDV5eTA2njNxJD2JR5wUeEXfYjrkKCoJgfJMe2FDjWu3ABf5s5BVeLX2SCV52J75Kd8FmC2NYnyab2ehVgXm",
  "key8": "2TNUy5ePCcVcFSpDTHtKvqtnNGiB3Dqi9VrxVQbPgrpoMnVDZnEsZQxPA2W6zpMCX1aPCr4fofG3MC3VN4bXRDLP",
  "key9": "27uXVJScK1n7GRXJbg5bc9va21KAFAaL7XTgmhin3BxEYcfUbGzthbswwDCTBLCisxNDUDsoXus1f4qKnHwWTWov",
  "key10": "57D5Br163RPMcRtviAoEQAJsG5pYUMyH5o1ZGS7Yi7BEc1WzGYhK5Cbi6BKVvwSCmJVfXMWUCYEH56fSrye7Etqg",
  "key11": "5JDgLUc87bUCGaxNWXZCRXms61HtmTFp8sCTrqG2X46pnBsXVerZiQY9UEYwRG8Q49mzmLi4CiGHVGQtiXGcohBY",
  "key12": "2vsHEo1J3PxzTs4R4oGBXrvZF5JGBt3o3qzJj2xoAMSDSVKuJGaqeJn7LThnTwk6USh63mQRDx2pxzbcTS2UgvDp",
  "key13": "abmYsKgr7BTe6FjLQyShYmG93xPrW85z1pK6ZJWoPMsq2e2vdwucWWq2Gke67MMGCFbHejEXD3qAy1fUHY3maAP",
  "key14": "29oz9X47Uni8Kt416kLekiJuYZGTVkyBWKeUFdVYBWRbNMDHwXM1VqqsRaszxdWmRyjJbrb9sjBWAriNwKiJVVuc",
  "key15": "2RQfr9CRQrT7NvcXk5L2szaUj7oT3HfbvPhRHSEmE2k2wqKExJRPqyCcdk847QpduWCz3b9hrSXhHv4aYhhST7Xy",
  "key16": "5TWgKpgSLJ4wMpj8vw53RPcn7b9oz6gsMsQEzhbYX4wyE6C9WX5EWFw1LwvMk6fyNMXtruhhFFJhAC3ZiU4g2FZ3",
  "key17": "59bvREAfzAFUMc63bKLc47j1dKY7nWpnayKd9Kb5csDitnpW3rK8kn9yBUSSMJJXsms5FCzFMMRyR7SStGiYGZDQ",
  "key18": "2CFJ4yxM4zJ4EG8Wg6zHnCuLGnCgeni1PDDFsus571Kc8gJRLhCdNWT2oFEG8MBTQCPqzn4soKQ3hp7dckhJnSW4",
  "key19": "3s1mP27KmPk9gmioY6pNYV7whgbfVfEpMbiiX4Vgm6hw33jBuJK8eiWsET5u1y1EXQyaQrhPm4XHwUKPxDdR5ZCi",
  "key20": "4GacFSc1TUpZYNw1nb3hofPq27p2fxoiS5TZqoxtvFt7D2Vw7Wvj4ZjxarH3NkZPiLgwYaPrYVNS9swtSi1UnPdK",
  "key21": "CPen1N3mmhXQyaotba8vZUgUWr5KeQigiH6BNEFkpkWhcAbhLQLALafnYXRio3bsXDmHmNEcFkPxvuVZu3tzjD6",
  "key22": "5fRwtZHJgUAKqAhocT1PvpzUfuMSZwJoMtsWJ7RJji3tSfBiQhneNeoDKixu5hndbx4Lrgw4ik4BaxrpHxDwvqza",
  "key23": "5n4PRD7h1QpRM9wMWJF3z8RnpLKLF2xbpAwrNVZgau3afRgt22M2iVtjsyRpwAsjePoeuxk2fi35v3UHpuXKmWJ2",
  "key24": "4NRomFS2GMK3Eht5PG4s4LhFQ63rB9bRN7qTvXZXuMQ54GyCuoAkAd8GS1ryb3JbF233PzAsPjDUfL1RhdPAi6u1",
  "key25": "2hNV3FMAk1FgV7TvVjmdANUCJC34ahttJE2K1QtiEEJhUf1rYc7VooNvF5NJQ9pzhGPdxWBX9E6kUiieGFC5H4DJ",
  "key26": "2nQHZCwvrYt5pTiTENzkXYXhLRKX3qpmpgF1PTobmzZVBg2oez9v9kBtkvMDwe9dhjbApNnCRCQrqDDZ27Gsswjx",
  "key27": "2o2pmV9fepYxJVDjR2ZLVttVAdVN7QT1yPWh8HCQVV8TMqo1FzUANgbb4cforLuXbUAVKCvcVW6yZV75ng4ejQGx",
  "key28": "3z5pSpQ74CedgD8Lmf3zhdsD2pkXJQ3ALzDuSaPRSA1bNfZg6nw4LrNWRDV45y2QQ7JEDvoSR4t2WXmqsWaUdBk5"
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
