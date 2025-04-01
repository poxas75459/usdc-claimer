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
    "5Lja8hUsaRJu4uvb3ycnJP3pLMKGxdTTVeAA8jfYUopQzsfZcCUdfJFqWD2bnwta3Dn6J1rMpH7VnUsrC4VMGnrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCMcBafFwjYrzXp3rBPwbvYq2nEKWAmxSFcTj1BQpL9rZ9CvK8UA5P8yvNXMQ5Prdqeap42ywWvDpDkBrg5DsfS",
  "key1": "4Qx42DWWj4pW6n17esY97hikQK6jYMgNUU17VedpZ1xuwvs6LEubE5gKBz4GgRXt2FXHqGyKv7LPpC17e8yDNLwP",
  "key2": "4HYqTDWvHggk2TyMFkgMzq9BXPudwH2UwF4yUzJY7GxwBUMgRMfz4nTYa4Ykot1NzByfQqaz5dmgrRmzLWBjrQf3",
  "key3": "5wxj5QD3dGgzPkXbo92AwQRvWuVT3Vs5b8zUtagcTWWLXU8SrmNvnfjVHjK1rcwo5jKbmiz6vy54NDnTBrUSXNHk",
  "key4": "3wsj9QP6b6hHFaigKJXqZhGVEHUGQuiY75v3bPPE4KquVUnk3EAJZccWLyv37YMmAFaoiK71YmShwnnxsxEEGenB",
  "key5": "2Mt5eb2ZkUjKMW3gavsfpR5CbgyxrGXmaTnyEUKbPXDnDvhG7bk1vy7rk4ZddHgk5hVnvKAPMtSPGdUcG8xHnLTp",
  "key6": "4wkrJBbyA8HY1SEvMVCnKdaKjc2GnQBq1smzTCqVWm5iBE7NUguqLhJaoJqrGcutje8GArBPJcFDor8zJnt1q43P",
  "key7": "5pL7BPoEkmkNCqUDdoN8BeXhYdnuqNnSV79AvpYHFkTaeteCf5iiVTrtKKWvRFE1jdMnkfUL5cE79BmcjntP2UzB",
  "key8": "23TRpnuF78tCoWPAT3KKJJjktSzpn5hVvnWqVYv8CQg1GU1tzvHwGBGjNkVrLWpiR4GRh1FrvyyTKqLnnhAEeoGN",
  "key9": "3LZhmpSKzifg2JmxVXYp17EPmGyMV3fxxJb76gdzf4XKkvuEaMmKKHAMGdY78ACpMFTzCm4B3csFaiMagzVXpho8",
  "key10": "21ZwcxFULudqgtuibDaC8mnKPK2mTpsD4YeZTVFEipa2PZcDE2S69MsUsTdAdpCguFNDKBNDthKZTqKx1pW2XNF9",
  "key11": "48DmnBJKX1ZwPJYUHsYR4ZWNxctB8SQ5n9EChfYzq8yxVirafABSYJB25dUwvbbRPi4Xptb16a5PJcaRPMP6yMbF",
  "key12": "53iZhE5e9mgymDik4hE8NqNL151eLu3THZHAJYyJV8AkwYWumE4JACgA1Vx8Lz9fqRwwNNKHcAS99F85KkG5jnib",
  "key13": "5xLftBwMnmRa2GhuzE2fyVtKEuoWpwRtqZWnUDFP2ysuPcXr8HcxNJPPuGL8XB3PHGHNtxbQAJXTDD5WYby18kFL",
  "key14": "4WTJgDhzHCPew2n65XDSu2kjj7rDoVWgDaZXChuTHAhdLzCGNWeTWAETbfG46CJ9sWdeyaG5CwRQchndmMW3D6x6",
  "key15": "G52aNSRRn2RpxdFuZLm1jEPCQji6y7w6fBdAoAuhBKJ6hRLgCr3iG1heVfcjSnXYFyLs2bJkEXBuSj9tsUabTuz",
  "key16": "52MhRAQEBfMu89BYQG2E5H172WZ6AoVgLvuGAuuDEEincQEtheHtUUomq9oSu7e4QFQN3pXk5GgUSdMzbY4MftcX",
  "key17": "5qUiYKHuVYVy169N44uwPgwYxrs1jaCpzkWeGr2xbFc11iJP181K2nZBUKVZAmWgz5ncBD1MhnsYghPyJEiHy7Rb",
  "key18": "5zcBp7K1qEUtf2iX9g28zjPEdoq9HwEFxKKj8ke5tu2Xmw3U7buNAuUSkDq7YMsYJDt3BbTPaQvagEUEEjgWaMEM",
  "key19": "2dLj89UAkzGEZXTrkDsMzk8U2p59Yi2aGSpitUPr9czQFF67KoAntooyE1yjDwwNzC38vcyGfs3veBpzXy2fDjig",
  "key20": "4UoceTKVogSLUbUZJGSqh7x2vsrLwxypguuGDbNof2Wja9F3ZXdqd313ocMHYJ5wYGBQoyhtFygawAbF57AL3Uac",
  "key21": "2wv7nRFGV2ZijC73vCKBbMpTssUCx15w1ETdSGi6h8vwrpoVecKv3iZMqwdRWy169dFzBHHP5qVLwHU9JD744fxj",
  "key22": "iwvGA1NWs14JJ2W1jKeZ6mXVLH2hEofD7QjQxWXJ24FnR7yNwRNQ1wwdbW69arG45bAYnpZdv91vBZpLUrxKogo",
  "key23": "2w4G1oB6eRXyU1iWcmbCdeT7NECS2Pnrv8M4UVH1x8yN9kEHeQKwpv4fMw5j73RWBH8faBunFw3kNY2M2BuRFq1p",
  "key24": "34RTUgfBW13aGCBMWHKaoBZpQxmEhDxnjDvFRKJzjzyuWuDaP6h6LytAo96bRRuSEoh2RHBnGeFPd2M8QdMC3kJR",
  "key25": "3aGuLNtpuYAXHwxxr9R9zj1bXV2XDw3PusbMM8kPv3k2heR6j8g91xC9RYeL333WBYzMPJ3ZbfSf3BsDotK9XpPf",
  "key26": "2NmgDPEPhCH1wZ7RoZAc4v7kKvskhs2U4rXKd7WCrAvPPe2AZvsdz2wtdGB3G7EosWe8RnzDoGTbcHEtW1oinaqr",
  "key27": "61SuqHjHmepYv4tm2KAmecsCVYuGX6UHp8wXvQUPBRWokqdFMekqTnXexRinCGQ85TauRrMtLXTB32iVEWKgcR5p",
  "key28": "4VhRVbr6v8BXZ6PaYJMoLukdpoX3J6fcYAvvFSodFbwiThSo13g1sbh9iVrYUqg7aoerTbkm3MXNXamG4KiTm5i7"
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
