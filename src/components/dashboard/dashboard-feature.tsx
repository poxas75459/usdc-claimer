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
    "2dDFNsrmh8YfvKoFMT29jsQkS2GjAqxuUUAKGPPF7JFaAWmV9Ssqrjkm6vLghvXH2r7uWgbGhRen1Vakno9aVRRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5i2VTXdW8Gb3LyLav8G1oZWW5ehctLGog6k2tphv5DQ1Wx9N87S8sBDCmnAqyfhncvnnALSqLQLnoesm16P6hj",
  "key1": "5suUDR4pNLabkEVZkW5vbuwzC9L4Qaipb6G82U8vcVjEARAYd5vRdLTeSigtiqvmjDrWRKUxAHKLJizi8upBMfDK",
  "key2": "2ERYVnNCLpAWoAyunU9y9MXEpabdTy2dRUPNEEMZXHCVVXnEU1TimZPbPUGvLpkfpFoLieDxSJ3qRUFCC4w2y95s",
  "key3": "2vAfukW8oaajUZ5rQvQF7puWZYhf9WbLDRiHZgQptmkK3FRsjFdFeot7z73T2nQWmai26eSFNjW1CVJtfy1w9WZE",
  "key4": "4X4oF2SEteNwHnuDYXid9TdD9QfdANjBaKT869mBWqGFNJdog6Vtt95SFxSWLvkHKDkaDDWSKuLuHzqRJBWjzgYj",
  "key5": "ayFokHpaFiMMJsAEQC58bEW8sPXFxeE1HfAiL4v9JGwZ43hkksXe6z6FXaURQdu9Y5wKEaErQ5VVvCZ1jSMLC1h",
  "key6": "5QeE5YcV66A1yRXndgzo4g2rb96j9yBUT6663mbbDczX8a43Jkq2RYWSaahBeAUs1FaehDB4JYY6JdfApTCBMjvW",
  "key7": "2zsgd1ZpTtxj8EdNRZYPx6v8M4FhcFhCdPhQKzbKAErZhvaieuP6uYa29gpbo7C2ZANCoBC5DkEh36aBNHvqcmBj",
  "key8": "4LpdpXPd1MMJ2PoEtPMKw7yPF8FfbhCas4xc8c9LXwm2bnfQetT28fdedzE5rz4i9wmHo59RyFkELXA2y2kW3g6h",
  "key9": "2ShjXjd2NFXahVsyRNbDYHsysBNcyxvhzrGUfWCKMRFVLiAystndf6BNAcWMe66N39gMdfy8W8UpTDn8UxPLqax8",
  "key10": "4iXDhMBSx37yLAMTzunHFxEPPJME5byfNzr4mXtzXs3sJ2Rjs8xT9accmKSVrSskDcHAdNJmgogVxKmj5keqBB8s",
  "key11": "641fvHhYVBe4sfCwH3X8fkxZuE6vr62nxpSsHYLxv9Ao1xq3MpM8XG6735u2aDQzmyCqxoRjD6mVXgBW8Z6KH3rH",
  "key12": "VdxSneuTN93tVMXwxiQszh1oCKFoGUWEULoChm85mzwdhqpgszJEAEov8ABBTwVokRvmufVHTZzH7xAcPx7qfVJ",
  "key13": "2TbRmWwuzoJBEq6axitBQk9ouLGH4S9hUmSAY3jDcM98iEyjSrHkANZcuKdofLc8FkZNVJS2BaUXFa4wXgdSvBTe",
  "key14": "smqrHL1TLdRRsAc1THq1Urb9WafKJaQfDTP8MaCQjkYHSvYPtXUG56mBf4112KtfkHLhY72vrkgDbNxtNmGUeyb",
  "key15": "4mobrxYkfpZCAmGAHUy3TpA2KSEK28KRCACx3ti2H2SdtVXWyaUhFTsap3hKVwasnvzUZVEJUgAK5TFmsrZkF6PB",
  "key16": "2B9H5R6KnFP4N4uTxHxMrnMPQsdWxx2U4PU5SDqKT4tQC1qAQ92zLucoZzh7o8kohDjB7FScVLvaZGHhW9Tekim6",
  "key17": "4zig5R32o9asNcbVSESoZQA6BrxUiUkNbtxgvcbQ97aHP6eH1i9TvyHcBUAzdKEvVuAMn7tyujQoh7mZ8Mkbqsn8",
  "key18": "4gc9PHZ5cYqUBbMjcfTpYUjd7WP1jnkt7k3AuBX1LKJRV2Q9hijWdSdxz4RaWdqSd7qxXL4xRQpi6NbgDLUz4b2P",
  "key19": "Nduibp2aGZoJkUGUYvW4EBfV8YTgd1js8ZpXquA9S2FQyduJK61pbEVsWVfeT85kEF3Mi6cWw7hffHRJCfHxXeV",
  "key20": "4NvJDPdSwAVxmxwySTJyEQjAZibJEuGczJGEPrZNYrj46Yj4UbncBNNW2FoiiUAJ3JjrBr2tzcNxcdPp2YKbKDxz",
  "key21": "59LjK5BNg92GzUXAk5sGYmYiBp7hrTv1rDkFVyWkKKk9cDc3k5Z8saNAiLPFbB9GMWyrtTCbRAMFj9cuVeah1peL",
  "key22": "2tCKLWrHrYhVL4MvJkyvcu4b1EVV7sB7aoRvD1vTLNh1YDpHifUDkQUz498s7HQaEyiBVDy1vyg55L91Uz9yG3qT",
  "key23": "37Uwp7URfZpB9z5BRAetBsf89zshie9AQhVi9us5Y8SFsaZWWZDUCLG8jB8A3Eq9ZU7qK8h83gUNo5pkT8SzyXxF",
  "key24": "2E7BGNWSu2vx1CbSVNR2om23eVKzF3CvDu3FksnFwPrb9nnrJm1Z1TWsrKftSV4yUhUVWDD3Xs4CK87nyKxT58KG",
  "key25": "4WcHT8gBXtR363u7Q87gWTpoCqzbFgUPZTDgC7FcbrwM18E2KBbTsMe1xRE8SpMVzX2wsE37Z9Cp3W3LM6jcptsK",
  "key26": "51HFf7yKAoNrSp7vAR6TgvrhGqGpcYVv2yYxTngPnw1HKFJBZCuqjCA3W258hD2aTbPQhRGkMCqZpSLcxgBUNK4S",
  "key27": "4zRbGhcrNjiDt6JcWrMJcLMH6A1yJMQxLtNSW6fgcMWr42Y4QM6Kod7tx1M3yC1seN6hek5vsBYNcTEHKfZYivAu"
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
