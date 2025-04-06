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
    "4XkcULv7Fqkbrd3MWW5JMVbAWt1WpdbEaYHqSkERR7jbMHrNxJf27uTVWGpQEZKhxiP46Mf5zt61XcjRXL9L5b47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Riz7nYnhuoG2gvQSMxkgLSXcxd7ZXa5LPLTxjFYWKXnzGeSd5PigLUZ996M38BRhAFvzBCY61WdiG93GE9JDXD5",
  "key1": "4UPBauvXvtVC2ZvGEgKDWSV67mJ8AyBnNCitazWKS2wURtiXTHVoVfntKW759MKJVweVtuifUvdC4qeTJjB36BQk",
  "key2": "yT3TSN9xxoELFMT3e6NF9T3wWRiNSu8k1ChPMeV17ggbK6ErDnFh8WkbsLvPtCzxVNety2G5ppWUutSZeJTcFJZ",
  "key3": "5T1GyEHcgdSFWLjUqpkXEHZzWeix9WGQNSq1sw1mYRDnKGmBG6c3imDWprSvSA11i2vWQxJKBVPoUeNST4MiaeRJ",
  "key4": "2st2T68RLEXJ6Wdak3bAzX82LsAP7iPYCcrVQJqfcsKViYTWCgxu7iZCwj9Dsf2tqCc8Qk8oTXu4yRrAiTeWaraR",
  "key5": "5htqpbENXUoXLdZoxoqq48LRxfAjxqbsqXyexfZN8WSG9aE2pMetD4ArsBDVFxGD4eFPumY1eHyhYDMGgraNz9hb",
  "key6": "4NwrT9ivc8azauug2SjCss5aLHHEabe7S2ZXpX99GGwyN3G4mS18gP2r432m2LSKY14tySCgBiCedmQmzVmP1xSg",
  "key7": "67hs5sGwduogzBnNLvDtAV2zv14iNv3Gug3QA6h4UJyEm6dzjtLgAQ8H6b9PVyeAnoUSkuXvXN825KQhAcfG6Ruo",
  "key8": "5Lva2Uxpn46XXUfNPNGXxKE7JvLhExNYBohfj6c6Pkv9p1GFnQ6GKkNN32EMGX7xn3wkDsKXxYZA74wbhPb34Mgf",
  "key9": "P5L9kFAngETTBwUk2GbXRYrkMBrC6bUCoSC4j59uyuDbXncMNXDXjbR5zwxo26wkt1gD8k9PfHRPsK53i3XSyFg",
  "key10": "296TsW1Q5fCRF3EKSqbZH5555wsW3P94DokdaX2j9UWvLmYt89hPguCr4xeBRZBF77FWcoKiNei9EZfq1EDLAcpj",
  "key11": "2pMdDWDVT1hosXxkzhAo6Qszy5TD51PHv8nJDGjLt8jE6U1paVDPtaxhWovzMApsf9qGjKpFXQ3oYDoJy2FH39P2",
  "key12": "55mBf3KTbsdmadB54edLiALh6nvm7xix6A3a1F8kBCWuHFmVUR96YvQoxGc3jdzhGLwCPwCwLg1qTYCuazhzZjw7",
  "key13": "2Byc653B2Xfsy47UZ1hpUMHEtjRcsLf7gttPCLtZmHMTTPwEqmrwjXeQpXeT2mfgKZQ5sJ496D6x79qGfS2tmqfi",
  "key14": "3eQDtopRULiVecPS8753ar1hdcg9EGHcqpbXTjZV9UPKUQdzvoTYZYfzRqdiEDdqB1pKL3nrKchU4edVDjPtG5PG",
  "key15": "5VTr6FbrDNKfck8CjFBcj2bvKdeWJMt9emHoELhXWcyYVG6d9iSFJqBk2tzbdDuD1vp4b9uZMnsMEdBmNFfSntT",
  "key16": "SpqidjLkCWVGwy5wpreTLXxSQKrbMgT2E5VPictm4Wjhui9QBaw9zHHzbnA3kat7Fb9U21wAuhTgVCpwkrUwFtG",
  "key17": "6wJr62aeEKxTydMBKmpYwAM4J8wp7J2hzJRGLgiLpHazEQESU9qUqJn3Mb76CgsCBUUEgqwb2VARJ6EoQVLKKs3",
  "key18": "59r5LzFm1oo3fciSFj6DfrhEMC2roCGxPrYUkM6t1bdLQC5EZHcrUK1GeMiGGDkfaygv29Yq6rWHTY9mEMKH8R3F",
  "key19": "4sM7CZjyehENDUDx7RdZCE9L1gjo4tBmbmcPXqTYPpYcwEMf42znvfBfVoGKaq9Ta2tkGwDAeCpNcSmQVBFggeym",
  "key20": "39EPPPT1KMedA7U2T68um9GsbgTf5NV6Aps12q1RJsWejhrY9PkABXddiGv4TqCieDqD7BNLUrPb19a6sxuLGW7V",
  "key21": "4wM2X6ea2Tq3HjX93ToeyeT9Y95WvdwkByFWbj7Z1ineABxGoEfXTe5PdBb6jjCn8rNpLbCdmiCFZpM91H3MjhVG",
  "key22": "3NoSz58ah91W1QWgYcgovghEWE4UcXX7Qjx4cmw7pCPxpzDJqxr3gFVAjsDa49ccHBRk4UCkUFt5Gxx4Cj8Pzwwx",
  "key23": "3qYa4aYbQVYVgViJwtGgjWePaqGAkaRyynPvGRWuaeJ47peMCX57vfxxyxMSpkvRFN7nc3zRpLnHQkZ7iR4yn2eq",
  "key24": "2nMrxcZn79UuLxXbjYSTmeUAzkU5axTYpCKJ9QLP9aoK3KnsEUMLUcVrD6V918KENwUrqrmmgNANW3EaeF2qVLZt",
  "key25": "2eKXtDg9bnZKqsvCNfLTPr114SenEc4SVY9j83T2JscbwBku7tjSmtiDbHS76HMqRopvzYCTjQy6CLDCoFzTnQo2",
  "key26": "2XRXAZbffiP21vFefbA4YVhLytGD87NB43eiJ1C7NbHvEaHTC3pdu1XEFDFR3aPpFfpqBP4kbF1SeESPqnsD5mRw",
  "key27": "2pepbLpXgCCUqzGPHvnEv4tTPm78dhbUNex8fynb7BHtaxGsb7MPwqgwKMSBivt67PWvM9Frk9i7Chq9WNg8fUvE",
  "key28": "5kQmVP3Qb2ymZ7K19r5UNFM4EcNTL3VfFCahRGoo7NB6ZkVxybTzxagXGKVJPAQgbh2uoxKVfzDUu1nK3BEvKert"
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
