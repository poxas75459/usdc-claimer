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
    "44RLyFRHuk3BUSv8DeXRMexgividNqFY86jJRiyecsWVkWG3E3YaYW88jJD27T3SsNfNevKUf34aUbHyL1DCKDti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fvMmqLoQFCTuRbWnqaNM8Li9nMsufR6NHNbUEjpLuLbkRYpeWRXYEjQb8FH3MJ6hFyo7M39s17tgnkVVVGLGDg",
  "key1": "65b9yJKMNzHc9R8UEtcSsttRueHPL1u7veKRwM9UvTFchSc3Wb9enyhfrhM9EaYvUSR6CTt4z7KbME2ZnM7eE2u1",
  "key2": "ob6tPvU25U8onZt16M3jzrByoKBsxKzhrBFWyJcM9PY2x2ZbtPzgxrH7X8mgnkNrTkse9PPoBZaCD7TbPg7JTB3",
  "key3": "4NfA1LGb9az65hV2hKyyMMhWV3k7VdsBWMVEnLvr1BPG29zuMdsRWbCEyeDRvda2jD7bQLdC5rLab23NHsiLsSR3",
  "key4": "5QHzXzdvxt9qRbQg8BuYE5F1XhQq3xoNAiVwZVMeUznqTcYnBP3Ub52vTeUyjfhGsZzq5Cyd9sbVUDi9dAn7H8vf",
  "key5": "diA7aeEpcR5LTqvGYwxXiEmzx4AumxMhnXFXBgjUzUqa39GH8SxWuG9cM4vvyncRJN9T8fAvTsc9PDPgCTxKRxc",
  "key6": "DC5NMtfGUPiZJ2nV6LnNJG6USy5h8mYWmLf8RXrMjsYLyDb7UMBbbpEfJBGz2tmaJvQumNhnpHb2bPLRYeuuKde",
  "key7": "BbWV5S14afd7Rir2ChEyWLeS3L4Ni2SfR9zyDbzx1xrgPs6NLWLcsbr1Q9c9xbTtnJmg2xPD2x12XNiKysDWcK6",
  "key8": "3YyVUKC7pjn1MYTz6nZhcRFYU1vwQieLt1hdarpEJCRE2NrBJHt8pPSP8XV3ytoiFniUEhGfbhTutFQmvWjbBPYQ",
  "key9": "5AP9N5MwFrhdKTN3sxfLMLLUk9gXwSrXSPX79ajRELu3pPD3WKEF4pVY1s79mbekFP8MoUHWKTpUbuKBK3U5fFst",
  "key10": "2CDdKBN5JM1qzyAefymK1f3KCai9fpWofz51K4bT3FxqnW5V65Zd8AriHboEcwwkaL7avqF4mjFmjq1gXLydUQKb",
  "key11": "5X1ns2t2GaPrcS4uhbxMjWBcsoobotTGMzASkoF3xzj5DPbMTQ6K8HCvS71qYWTAE2kxfvNUYWLsKCm6BUrUVgRV",
  "key12": "5NrXhKxZvzhwubyzCtHNsADyMnRK7sMHJHA9JhQTW7sAVHp2wzBEtRffwfMfUb3tegdSFgGSztPhQ6DRPMRDozbJ",
  "key13": "66PyDkXTF852JiAzvoghijS9yP5AcfgPoZUsvqjLohQAWNXnSFWWaG4FJQ8ANBne57fpWfEJD2YRiATHQbCBKfi1",
  "key14": "2xUw5URs8PRLA56aPEgQ1ksLEPBrqHH3RdnurjLRkrAyn22YWTun6W15y1Ho2cthvnQh1qBNtruDa911452Lh6hd",
  "key15": "cdbPzq8TLnSxWSGzp3zv9qfRWL8dcwrXMPSachebyjp4bRxAWVLAvMMaXA2G9wvdWf16XgSA1DfRUYztZ11B2DP",
  "key16": "3Q3ASz9vGFYEbsCd58HruVoPi7a5fQJbXvsHgZGccxdWLnFyxXobUD6PGJifbE7pa6ZacvvfZSZHsCPNyeo8b4Bx",
  "key17": "585rGYKfYM3NSR711pmp9MSjze8g2jYy55ASFN4dF41d3MYMoa5ZdMm9JvCkLmSRW8mcN1hjhoRpz3xkFzWRnMaX",
  "key18": "4y8U4Zv8xC5FprnMYZqPWSnS9SWtLBr5G5v4LE9hNJfZrovQci4sCBobCnpFryqGcChUiBkSitkLsyboM6coXgaS",
  "key19": "4X7bhcPGBf4EaJNHXTZN2iX2vppNPCG4tsjY8ALTdPh8UnBWxheTypStDwdQimkmZCf7WEmG1a6RyNdtxuFGvioL",
  "key20": "4L3vRJabVXVHmr8wagfuXRNdLnurD7gp6P39AA3qxfQXELM28atA7BzSWSgvUnGsmq9e2cQFQZ6Km7N45pEYUR8G",
  "key21": "2qZAscBNy6AF1bucszCekHyvDkxBS6YiMJhH1Ve6QGbsEzgjGoDhWkDt3ojZrFMUJ6GNcp8voBXAqrekuVFCCUVi",
  "key22": "3pQUcmeRGmDHX2soHX14qgy8xjqmuK6SLk82XUJdKH1Sc7LCRHU3NBJZ8KHn1RET1tQL6dnCRJGUaYFjvZgkVskZ",
  "key23": "3o5xaMQsxEXRc4L1rEcR2E6g9ieCnzN2baYw43zMZrgFfGpe7USiY6aNCuCsMtjSJUbm93JVb2MXj3TTjA9k3qva",
  "key24": "5sdHUa6KgrNhTQW6nYjZEsRTDRenZ1jGhpTmq3djTMjjS7MkmDAkwXAfRhwZR1534gyTmC8P3pek4J93buaTeC3s",
  "key25": "4aCvNQfQW8nFz17HaCRRzT7bgeAXmKbqNy2qPjRhLxfgmn2f2xt5af1RkoBNX6UaBQFAYBiEzKdnwNcLGtozevjM",
  "key26": "2xbP4FzYNGT9R1a5eEiqXd3z1BKqAdWfJDhURAn5b61TXEFzxeoLFnRfTHHcv5TEPVD1U8FiJyXLcec6L7HaiPpv",
  "key27": "4G9UZA3bcQDwoxPrP7EC69ib6MWLzLx4jABiJUuPPB9UtgsQNbi5eU5xfp1dfNxsZ1S8VVtnaskfjDipNv2ghB1j",
  "key28": "2P2UUiPCeFjb1fd8VS8Hr3N3k6xUKc82h2qwMMKNsEenGhdRiGvihxqzvMEFpY2LTH9db7gCt5cSU6Gy3KUaJeon",
  "key29": "3Chf9pJFh22BxNnosWyxg8UpbCmUAt6GHpqHg5pDfF96rrW3KThdkncNDgYRXJbduixEPvb7d6RnyYbbyuRjVdQg",
  "key30": "5432VBBRRQhKAxLA69Qw7R4n375rRQkxDSdG2Wh3qt7NRGBGDbb2iWAJApeMxTqCGcdbu8tFvo2B91oXXeLbUUgQ",
  "key31": "67CzuXgzX2UANZavYdYdrYun5zqZ19TBZpWAbruX2pzbuv4SuCAvt8MQNbmxw1oUse3UQ4eTD2wcVToHJedV7CEz",
  "key32": "3fm3rhmQa56Kf3DeuY6QyB6R2jLddLQ7VxZnwGibAdqWoda3G32wzXV29XbYHNwon8QC1NaJgTU3xFbx5sox9EtK",
  "key33": "2ScrpQ44zuLFWf6wWtrqTA8sLVButMpZy6f28SHmzEYY1Sz8dfXzGDDoxJ2Hk4RLe2VPYT7JPLWiWYytoofs6v4a",
  "key34": "5K32r6XB2b6ANzpLidT36Azj3HpYsywcvdvq9TezYQQMNhfzscVrHaVPxfWUMw48V7tJ1W4JCFqZSQJSRraZaG4M",
  "key35": "3x2EDyY9EjdQ4AuEi6afcUnrUB3d5B1vKC5U4Dug4TZCFXaBHLTy8n4Kx43zdLLxprz9QRSKCqfSZZQtPW75ejFe"
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
