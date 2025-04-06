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
    "2C1auFNZbjXqfVyJqERaikorTsNZLck8cRYDM7P3XPb2QahLktxDhwJJ6K1tL5ycZr9tMiZPY4C1Jw9dFVGeqTWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLkVarqLARCKGXaB3A7U438iuCe3Eb5XUW13jCoatgqgfvdbXVhrmmoZvpBYFHV86RpcSrR82pkR2FFt5gpT2xL",
  "key1": "3Utw3CsWQU6oGe7pTDroeHoGK1d5J8tYtQeknJhectQXYysnMTj1B3ciPVHXvguJqZTDa77Kg4eyStD6cTLt91Q8",
  "key2": "4aZUnvvZoacBTe8BtJ5XyhK9jsF78jzCTZ3TuAGBFbQuJwhTDXUawZrCgJ5LWgFmV9RPT5Ctm4Kqh5RHShDxXonu",
  "key3": "3CUqc7gtq8brNUCN5jiPEtzuTMso6qjVFiertoUMJysvqSs6PabjAobpyCxHV3WdtWLcsFtmRH5N6aJMqbbDsDNJ",
  "key4": "5o55xbLimTDnLzA7UPbMWHgWV2zpT6zLNKJihJvHbVG8UvAHJPtS6JRCqpAdxtbaRwGKjA3QJ1SF23Z8YC4Fg3pE",
  "key5": "66unwAkeBDggY6EigZA2mPueYeEmNc6aQ1bqeM6mPsF2yywVz7CrNnWZVoiHRd9izjAxNxYMSKi9z325jQtZXisn",
  "key6": "5w7iFKjSFyMchtzMLgrpq43rbNTmHrT5ukdbnZGBB4Ja7o1Uvc2sETuHv5ZMHUH6QbwH2pPZpJFVAys9RWtVXnuw",
  "key7": "2EvXpV59E1ohc6NpzqAv9uw79CLgnqxbioru1botVYVzCyBWgB7PF8s1na77jDseMZBmDWL9kf7iFxNc7f8prejr",
  "key8": "4UhLudkMverdoCh9ZZXwLP7wq5ub7mLqqdMvnTFeDe97PHGxk7fW7uru9tWtCCjiRAr81PHf3oX7v2Vu2fsC59q9",
  "key9": "urL2oTgRzCsHZcYcsvR71hWDrpg1bdt4z2cWvkxSJHBTos7XZdFxXT9dGPdSkp4a7BMDzTcWTXh8feGE8vfAvqm",
  "key10": "4C1eLPcDVu855wtP4FnPkEVXvVuce2KZdrF16pfUwqQNRN5aK3B3xN6mJ6raEbZioM5wZ6LAVsQmFwch19D8jaZJ",
  "key11": "5N1fDEpZDKEytdYCYYTt7nfPUTw3X37LosyfLec2v9uPD2qNyS99cjLSYNdNPhEsJVYmxKdgGmWgXB3BvP5a2hyc",
  "key12": "jrXH2GH9RbQ2KY5j2cJn3fMRbop5tPCe5ymibCre6DzTfrBggV9ETWjnsvMJP3PHvWfofXoabkjKMmXzSnRkRk9",
  "key13": "4ruy2LCTLXRAizkAhEFtgdbxfRtXa1E71domygYMoUVuHnQpdVysu8PEaE1SWUtiTeDDS9SopUyQVU138sj2fvJe",
  "key14": "JEx6BdNYXTAFgDZtzVLMoSo41QksbdudPL1hTa1HArVBKUGZYX7Q3wVLNYiKa1AgwukCE1663NP5Qzq5urZrYaW",
  "key15": "5WPR283sr8kt37o4cXqg2djAVUctYSyBMdovNokjNKaJJSgakL5UyqoSS6c6rh9vjHEAGyYnhhMGJTCZh32R7rZA",
  "key16": "c8BbWHahej8jXmD1JmkFbufd5kJyf63Hps1Wc3ztnPXJY7nr5ZhfSfRAQcPpamxosKX2rzPiFk1FkG4NKeTL15Q",
  "key17": "5DCk2b89mX8RN45T2ZYc91VgGkbuaygDC53roX6GTuMx32zGrP3SD7CsaxCJHKwEtUUwCCdFbcRV9hG5e6Zs8B7A",
  "key18": "4VYCDpkaYHNTW7SVQKLJzGNLXsmBKQxpykFdF5TGh8Jtdi6LsUh5UqDEk48hmDx4qoSc41hDKNe4Qg4T6fu8ML6e",
  "key19": "3A9FvPDhwshMnoqjaYnHBXcFTMXD9Kn5YuTzppSkwigZpWSvdzrwq3VbnSsXNuaHZMenp6WmvnoKdrBxsgiTKaWA",
  "key20": "5JJsE7gRs5R6BdXofqN52uSq8hzNx9Bc2FqVVLbMFfE45xdQUaAHHwYZ6sNN5WiWeNMSznRvS31R5rTEnEh4Epw1",
  "key21": "4615DNQKG94rrpNxgCGzQxHyhoXFW8ABzrtUagaLrCatKjWu1oudHZ4F425q2RceyHr8TLLgTVJ4xfpCttQ9oGpB",
  "key22": "3KHPfvMsoDiRhwQKhVYbbovkeYKjj47WAqzfyV5QLkzXvz1tHGKDpNdvrZJhfMVVv28VL2VnnMP8jRT9z1PydkAv",
  "key23": "cDQMdsGakbYz39kb2V1GuJCr4Dq2ZCuhtGwbsuuaDUQjkvvV4hvLdbsW681DDfzDpJ1bCuwjqYRikQbxYbFcg8i",
  "key24": "2qyFkqGKc1TTjXWSQvaveXpqdqLNNUUWEWSLmbBjfnG8vXCB4iaQdTE2fYhibc5VuvLnS16VnXHXroSiyt6boteV",
  "key25": "4Keg19LtMGYo1TjKUcPgwprbZEK6XZD7o1i4F4CzihC1qbVC1C8eB4V256wRpmfmECdphefomHkFuHW51ZDbaTYQ",
  "key26": "2UVE5Y7LbXhTLMFAfP2gxwF3YhUQNSiktRYsr9x819CQ5EnEd7kUkoA2qCnv13RfFa4ccShAmdsjtJzQ5ybEAGRv",
  "key27": "4PpTbCzJWnhe8Pc8dLUyw4CNJVbvQfLvtc7mXgZEecwpVJ8okb7MoTVMRKa5ERU83r6QDCsVNAZYH8CpDPxw9sEQ",
  "key28": "4kEwdH7uYGb4bDQp9mFT394uB3ZaKwYcHzBGtJkryPFUiEBH1PCxcYv68Kz5A3ahT4cVBSvTtv6dh7FWhwgqmJ6H",
  "key29": "D9HoBk1E7hw7sNJisLb55oLbBPfYKCpcoFo7zZzzeEzfPpNxuLSiDiJ8cyGNGWDkEWThwLH7uuvcUzA2dgVwdJ9",
  "key30": "2itSW1vY1kNzYiZe45TVGjU819fAgp5pMCvAnF1a7FNXNVEzTssUPuDX4szUBbCqakbDzJ2C7EqF1zbpiSobM953",
  "key31": "3TaSQN8FxqTiNcnZV9nABG7LTH7vxiVu4gxAUGA5ebkY2JopN9a17pwxHALz7WUzZpU6DtmcHGqPSWXkUwqXZWVh",
  "key32": "4LjSwBzKLn9pTHu8BgSsKMm9nCauvrTXGpaiXyVUSXkaNypJ1VQ7uiCx7EgPiJY314XVsGMFKoiSKgU9oByfcnD7",
  "key33": "35xEBrDmWswt3z4saSc341YFpAr3gx12VdLr4E8V5D9peY2BCB5HesWofVkecp3AxUfiAhdhPcVnqBUF74E4KtTc",
  "key34": "CBf8SRELZ6aEmhJTRy63umayy7XPAnMFwStxJiqKek7jp9GDq54ZckQjzQqZvrkXMLT3JyE5RftMoNpmGtqebrr",
  "key35": "2Nmsk8qyXqjW9PJK7Mz1enHrFx7XyRcF6aKKorXBLVFbTA31uc3cW4YZLHxyzJgQexfCGReDq5XHcxeyNGhQrDjP",
  "key36": "4LPvWMR65huroVowdUvVgH38GKyYUPxoUTHtAj8Lj1F2Ge6izMuWsjSTMEUSKTeWhNoiNAgV9DrLnJCa7wvFe35o",
  "key37": "2hkzDSWQeHEgQZzxjxPXDoVoh7vQvTaTmHPtpJiN6srQSijFcrLBMdMgiJqDGsXBp3ozUHfGN5tLWXVjraMN19X9",
  "key38": "4amETsvnR9SUff4pNsoC5yjz3YFhdzU7A7hS1Y7BACUSxQCL3qVBXceAKrikdtKyjsTCZRCT7QximzZARUSWGTyg"
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
