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
    "4RGDGKFoVQmiDpuHhpLZUjmab2LEkyZcSC9YjkocdfHNHhxcZzcX5CH9MfrGfQRhPSJEaQJB4bnsGGQSSz2PfGGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZLCaHSuNSxTzdZQDw4TqDApg4XaZ1gRx3PypmvdkDtPuTU5SzXJwvCG3Ajs6GjeAr8PYF657jiYZGeiLnxHo9Z",
  "key1": "T3D1zMf2byvECF6pXs6TeiM8ax1bSKBT2ebfMcKpRRA8gmukYhj8BM2SeTq5m7mdLN7zyQreJsjB3Ckj1c77s5o",
  "key2": "3r4ZaUsAsR6ZykeLiyo3EHQVL1Uw7AvXj2BTmh4j3TTKKVLTwpa6b2LsFemoZeBFbMzJJK4Gq7dcJfR3zRAkjjrh",
  "key3": "3fw3wHa2wGyMPcvEHi7FamTs8xJC9ZDtjeizPVhHHytZnhTLyK8aRNNzae3tETuEbjMzJ7nkFcJkR9MbsEupdPFu",
  "key4": "2adoKm4CR2pKWTruzZVxby6GrJMKEnehvcqKeaH7MBctTqiF3ofxJVs443UxaedKNqjtVwHme14ts63VuicRA5xH",
  "key5": "5ZQR5mPgLUd2f7DXbGBRUbEDWg86GfAfB7KzXyhBBE2Uyb9hNGggSCmABDfVi5NsWv8KtS22UxCjE5J9JpPUE872",
  "key6": "t9SYDnkvs9uEwgcMvJKqTj5i2AbPH41W5xC1XWon8PgctUjj3Z4SwmQmZokbwQn2Lk6fgAVQmr1eWv6HJnoWatJ",
  "key7": "4NMNJRJCKhbmBSTaR9Tx5PfnhSs3N4c53rpjtiZQdWriKGkFLuQUKsN1uXEmeVQu3WQSXN941fAue1Eutist6v31",
  "key8": "3iaEp8Qk3g4k7hy1reEThssWrFe2umzY4UYs57bkyZj1oCCdPu8JuoSfF4bkuQLCHUBXVMjwx5VQUJHG3UBbk9vg",
  "key9": "cPMbL2XoekyAEbqg7b4CAbbypfwT3ADYk7ZPtzxDwGvkTxT2u3hH5dRek3G7owGrEFw7iyPr7nq1pzk6FopcjMv",
  "key10": "5CKjKUwDqs8CN2RTkU6E1Jg3tkEtUh2EWnw2gXDBitwP73ghpfmrsVZXhjLSeWkdFnXLnFH12s5Gm241ENMyxSNA",
  "key11": "34QiWYqcDQs7pDNjfLai45dfffUp6Wf43EkEVb1N8efQq2jc7Jok2rz5nb9AjHek7VEP1bT3mjuFBZ5tKgDKZvGR",
  "key12": "UWrtHiEtrBB6CMBDFdFpt5BiBYPVY1ncvKPFqcXDRk2FxRkPN3sYwrYQRr95LPnoj4f9FDGARMNLwYtuStgwT6T",
  "key13": "5jMjezRQvne4QABQibYfQkKZkHGNzLWjwQicbDSqYx8jnRpTbtP4Txah4okuCoS23xpeabE2ydLndwnhHz45vGVP",
  "key14": "2Z4cmvtMTHDDR4NWA77MimZ9SbqPBGXNFzvEhpunduM8TD8KfBdjg8mHftdauMp8VxzfcBSmtVVFJAaCyQn8P68c",
  "key15": "3R6RsdUguzLbS5wxcikCPyAWTB3MbyrRp9qVDP8kNWbryPte6Lm1ARFXkNMwrZQeZwCwi2DKRnsskBvpvbWUgKzg",
  "key16": "NkFdvSDfFiMwKFiQC6pChCN663bE6M5mizMkbuoUcrbXr1EckFGnRLpYbfTEvs6iKvxwAq2eof5JLP9AEjdYrMp",
  "key17": "3xXULWFunFMFsgVZMnvfyQZF3TZknyGr5tDm5HdDHK8FU6QJnJh9k3uVypyg1gXcEsX7rpx5Ubhe9c8XxYJrKx3R",
  "key18": "3iRJUyAzGxKgzUN89wCR2R46f3tSCFh3aQsnoasCGAtWmibfBKgoAEjJLYDeM9psLF6NEeJnts5SP7WFMKoJhQv",
  "key19": "677YDcFqBsgqQDn35AeSFXyGZRLUYV4iyj8vveBYS7bdovFRWZcKGLTbDnKMfMBE1vocp962GTc7K85KBT8y9TEp",
  "key20": "23jnRcekaiBEhGmmWbEYGpsBrxQ7m3qj1mgsoPHywPv9PmgHCgjbq2UVqiWERck8mu6p8kdiSm5SNp9vHa8mXf3g",
  "key21": "4d29MdV1i6Y2U4spKRG16xozP1pCUA39MQFbLdYw9aiLnmKvLKh5WnsMq5FBaaJ7eHsNVYAPvyxKxFhSx5mEeRgA",
  "key22": "5KHTFh5Ky7M8j9tabTex9DwFTQzTFbpu2Joz7Jpsy1TqwBMYQ6ZFEDZnQWaAGahh1S5EFYg6cP6s4fzkioPo79fu",
  "key23": "hp5fD99JbGYSf5LXXReHp9vmpGi1Hqyh3EUi7BKqAzxPDtauD4mN89D4fAXj8HXDvhmXhVeVzYYiRrUJLXCcNmz",
  "key24": "p2CdYkQeZ6thDuSLLJyHM5vwSW5FYAWgGCnhkyz4K8tfw2TfeumTdZ51Bun45bzcmW6zGPAcg5YbRJD8ykW2mvs",
  "key25": "5W9jWyixPEoM9tcX8fTDCMaDDjRC3Tz3XD3sPeMrGqecrdR41WtoPjo1Nm4iNi3rVx9H4p1265xR6B4PjstWbfud",
  "key26": "3Dy8w4NssBunFzNcdiwpaq6h67dSExiRgR3AczP16vdqfH4BpAGx4y8gXWM9FYetb9jjyGkedixmf5Z75DM61ECm",
  "key27": "4BYECRsMda5yQjH7WVwH8YLAjXHvp2cAwtVigViUx6gJiHf7MsfzxKVK3ZmoXrsZGgy17WcB1cakvSYwN1NgoCBf",
  "key28": "5knEPNGnVzYq7g3BPEWkVs5R7LoH8xch53EGWkBv1vFR6BL4jfquvUjhGoRCfYWENGQmokNdB4HrRNFvJUT8D4Zf",
  "key29": "2MDDwBGh2E6aoM1T9fdrZyZrMsU5g48iGFPhWGA4xSpyLEdRDWiFg2xVJSMFFS5uSHWRaNSy11Wknsr8TX2Vm71t",
  "key30": "4fFUQKwVYhpJasxosT93y9GsYSJtpkxSSRA4Mg49hhayDomj6H6NHWHNfjNFAf8WKYKRCKUxVk3ivMG22erpc7EU",
  "key31": "5ZDjfhrcoZ4urhqrPxRAN2ZpAmaDpYGKsqGF1Gj2gRW3JKgJC4hDDoKaEDLM5gkjQiPC33dV59fScieUF3QKofPP",
  "key32": "2gRzbEzRUYgbwfarXFb6FX112UjvDJqsew1E72rh6U3XJLgVnJmNKEPzn9S8zvBkXaLhnv2B6KpMUKJ6N8PczC4W",
  "key33": "5mDB3RkkpBLtRFrPiEPCQyB9FbDuFAJvbQqSnyLogoQ3rr6QM8E3Nhqn5yiVAdXkZgHj9HwAuPmRXyP2TN7QeTSt",
  "key34": "4n9knmRtvDc3igc7deZgkKpz51xhAtxT8yeZXe2gDRHotT4NXa9kSFWbvaL5jq4XcGDNjfPXn9HFM3GBPn8a37yz",
  "key35": "7qtGeqjSoisMDKYLCyTybDvxnrUKEhbxxWaY4Fc197a2UPz5Dpr21oh7MeKRikFPMeS3hBh4gVzC1TRcdjLPFpp",
  "key36": "5k4ToNMYxoEd87ENJg8TGTkcTfjtnrcsbR3JPbF1MPBPh751w4dsJK2viU88D8snDi5zfu87qdWZdMKA1wHwE4BN",
  "key37": "2d1zd3uyBVmVyjnQPRh7tEWi63tasK7a4suwfPtwPVbrdApzK1RvA3SFePgSuMnfHYVtFg9BAsKW7XkzrKSQFaBc",
  "key38": "2gYx77Qdu9DkrAGJPv1Sw8T9LtjCerKDFnpcV3vpaEgqfrgBwRnqpRuCoQHdXVEYGRiAgDu3bVHTf9aR1VY3xjtR",
  "key39": "45zxMh9rPwsmmTUb2hCpaEuoTmFuVvSMkW4CJPo8mEzuwQGjfyh699zdXdPHcakXZp1bHjaSYvC5N5ipNw7RqAWA",
  "key40": "4W2J2MDgQwVWrggz56JxqV3rb9pYmWTRYPqSFf1tieM46ANR9RciiRLNuUFnrUA5dAr2vSiFmD6ovJzGpLhCvAz3",
  "key41": "4zMCMU8mHbePW46KEq9SqtbKgD8kRMr4RjqK8UqvaasUuo9SnoNqm2k1veDuayotZLQiuDwgJsdScqXRNxeKJCfU",
  "key42": "HnZcDcHvfB4keRG7wvJEoKUCcqjroc7jNZe1t6d3oXu8bn5jBrN2zBjXdvDyxhZvB5gUN7GrQy7tVGF8nJ1VkHk",
  "key43": "4dbAxGjzVQ5S9JVGG8ecyAwwace5jHYPxM9827bJPjKMGF6eY5Zj2BPeuggg1WFVCkCHBZLJRXqbewUe4oQEX5M7",
  "key44": "2LxK44zz2RPEjjRBRakUqPf5RtTbinytXvt3LAtVUN5miuANf5gkCCmoqzFMTeSYiEKspFP79W8tS2YtsQySP4NU",
  "key45": "2Vsc2NFg9eVgZV77aBMTUktVFfA2sB5dHrJNmPgBsVz3ragFUimvrn1p57T7jJwRpNGpxgBBH2whwtYzNZGy4GH7"
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
