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
    "4gCScVxb3ZoYNcguTmkqLMt6JdEqfS1p7eEku4LGvDE6Ph66UTQ7FMGEixsNZk7fnJDJZemkEAhBehmd4k2a5mH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXxdTypobz8dWQKMc3dnEo5DLKV1BCDyEDMP3c7TRwwsA7LQ9qh781DMnvrkMuM73tQcLKFzabdxWN2qW3Cv4vp",
  "key1": "4Ci3BB4rKVzNEw9HqjjY2552MNa2ybFzUYeqX6ztv4daXA9eBrRMMqTMDkiA1Nhrp6UZTX26k8J8WzMcFVsY2K5Y",
  "key2": "2xPNcwmTuEvfjAkyeR4joMt4nA9T7ersGT2o1a4t7fFD3ZsHBDFAnaGMAQvusa19kuBdAB1ucfnXwcQnaoZ2g5aY",
  "key3": "5kTbcJENt26q7vn9ZZRNagCbfKz1VmDifgHmHWyBxzQgEw5JMBFq65oN9JAfXGcsEe4UizTjBHtoMY24Zc9QvUE8",
  "key4": "631K1YbtSPh41akaaXmgndfXbdnf4V5LGtvfvmAAZZfFbmmmC5o7863p9rM9iyvuQeEUSx2B725GT8icckLWCnX8",
  "key5": "3bxJ87G4iHK2JQrheUwZwSHja85D3XFwTWiW6EYV3sqkjTGXSSedBRhooJBEKLjfxfMdyWRirFvhNVYhVmJrJF6w",
  "key6": "3ArVszjwAaKBgUEYPkN9t2vobcNcTMrRTHHizv1NxKHuhYfNBV4DGnX52p5LocB5s4GzYbDNAzzN2M3nNAi3Z4wm",
  "key7": "38KiPouFpjCsy7YVSju2uBUhbEwzDGtMDqjcZHzqUL2bERa4v6LjdNHqRAJtU4uFrqhX9YDPyez5t1rZz21yJhg1",
  "key8": "4VA7PVU4FzVN1uagEFzcxQn8YU3n9ZY9ABHFXw1Tt3WgRMcCmonvx8eTD2fzmLhP2ML2QkULs5aUe8sAL1VUo9EX",
  "key9": "2px6vT5t4QLUeYkrFtigaG9ozvVkcDmKzRE6KKnyteNxkvvYe3w2UNdxdqBpXvFXuVqa5JoSoZ75VpTrPgrFBiWf",
  "key10": "3kA5XpVHiiPnGEFDtLEWQ1d28FbckAB246KqtS1pDv5ZW9QpbA6aKJDFk1qSSAJHKFkrWMRzVfyd8r5W3BoZKGot",
  "key11": "4Txy9mcDc6hb2gb6hZDqDdkV2JA6i8j1jgc4ARoNccKsdQGsptnUQ9JemWuX7KT58iiNNcaTwK9iSzEvdnEvzHgx",
  "key12": "KyRktMPy1NKqcws1BZwhejVm988LGbVJH9xPMyNjmTRvPFF9DvpwcuNPFA7VDQruJWFu215u9UhEFD8HH5rL2eV",
  "key13": "5mY3VBf1Lqo7Lcb7KzDgYinyC4BvRw7wmD86TAhVQ66UWnfjY7v2Q55wDy5DVTum7YzZoZ9rQfWe9q7evpCTSqwq",
  "key14": "3fGnEkmEiuwV4xgafHkdPdMEgyjdkGaCaUW3HgcCKbEx67NRez4dh11xoExnAAvJwzMJxVZGCDzBHsHo3rnUAaPq",
  "key15": "oJbtGdzLRqyPoELFxSxaLDViq17szoZ2V4vkcHs1dwQqPHXLPjX38yoB2GHcspuS75j5H4W6TYEnxiaRPGbfLH7",
  "key16": "51raBSur8a7Q5fHdEgN61RwgzeWN3mA2esso6gyBzkTqE4pp9X9YNgqW7hWbpsdhAnQTiTdecPJSjQkQH8Fhz4vE",
  "key17": "3bLG8jSfgFReA4vURqKmcHcRjSUdK1CQgEpv3T6mLecU34pQuroiW1vSQaYKFTBfnRuwRXqpYFJDJvpPy9iqXAPJ",
  "key18": "4Z5vjFxVh4EhYGRdbpmhrLi8XkQo1LzmBQtxH2rzofV9iE9fA2qDmX9FxhgMTkqe6Xmwh8xAx5quSZVfR7p7gByv",
  "key19": "2J9u5C8NoHd6ptBCsu1x9qL9Qkf6zpeQQ9AVckmmRZqZRtzrxHhRHCWMtjiw5srxyCwocw45GBQd1iotrDUhCRwX",
  "key20": "2dT33FV5nZVoYENAiCDN4dz95vcCGVm9dA1JZSK3oaCa4rHkBVzjDBPftadsUmmy5VC1u8qH7rWG4cnnrDRgfLjX",
  "key21": "3tSwdxYvTXnu6zubDfR6cP8oopA5LY5nymdjpFseTGeKS9dL2ULGQWf5fD2U5LB2APyrJreScAovk3Hs5LUph9ms",
  "key22": "4Vad5Rmcx1GcMyqhHoq2AoemQZAWT93iXcXYBY8yPeVXr65mbsFpirDRMVW24PK6CuoEpoyvRpGZnMeSvyNbLinR",
  "key23": "2HQCMqSyD4EevMFUs89s31dwWTyXn6u48AVqt4ws7W245AVN5FPKukaERT4RyvRtA4y61dtjJaGdMFzVhkC8qxwC",
  "key24": "iva7fAaUbfKf3moUEFtMJhmgyRgaJV8CwzHmAbE38bHSnHjqxfsoCfQSCkp8Kx9SM689EwTDk8VdfnByf1PqDig",
  "key25": "5ey7RwHBZD9qyAca61yD2kNZz1j7pu8pAyc3bopWYsGRZD3ueq5BVCNkNvQhh6Wgdxry6Wm9x7qbuBbjDpn3rriJ",
  "key26": "2L9SJUxpTyMyUnWDhAfS3J1bpNJUVdjW1YaoKoJ614cpgnNe9rwrLSd5GVGAMmWp4cyAeXU9B1HDyTyjnTYwEm7s",
  "key27": "28EegTmmN26kZMb7qZ3fK2mSvmXct2Gdzx8NbqFSiAHi68kzsY7sCQhw5dK36dBGotCCU9dFssBkA4bP6sGZUVFb",
  "key28": "2odVKFh8wJx7rUGQLi6BsBHsbyZ8EEo6ZZ9AyDsFuXR8vUvbwdsT3HihSEzNDz6CK964vZPjb3Nc8KaZLAhgfdmG",
  "key29": "jGzrY23JNMrH54ZrLGrwcwN86VRxqwJnszEjHDWz4EGepmQJsn9WkBzghCUA3uPZjfkHepyKZmCrzrdUz19qkLL",
  "key30": "3b5sdi6o4uW1AXQQepLrDgqYxLpjmxQMDGUFazFXfnGy8QudQWM2f2dhhDCdmJKstx3sKRBRsCWqDQaZSAPav7mC",
  "key31": "nseSckDThDpchSmpQ28sWbXxFyLLJxBq683siPT8RaYKnk1JHVGudY3cehuCnE9wAq5oG5aocaABxZTyohXNDCj",
  "key32": "58Ek9Jmcp5RtKk4N7bkTHgRa3cDhjAv36iP2bebXjrjDq5eLdBBUufLJ74KU9N4peg5cYjFgmbPww64LNzUEv4GH",
  "key33": "45XZJk9c7YhobSLwxqNHMA17YhW3ZwMWTQQQqmNCvGfmtnaHcLKjLYQ7JQbU5SoLNfzLSj3eZvsm7DC5SF2StkTY",
  "key34": "HSFV9vpyQMdrbLjuDg2bMBsMGnWziJnSdYkjL7KfF72Gy8caaYyeH9yVPmBSVdRpWMejrZ7EySocCgwfJjKnoeW",
  "key35": "5QVNERg9mqXaMe9gLP9pEswVCnSxLixFEcjDEdrE8iSe6fgfaCQqhxWP2o2vZbm898MoFn7kFmzHevTQ6PWKibjV",
  "key36": "4k72dBvTKmdKvbTbq9SQ91o3uy7mVfPhWzktth3MCg9D38NTba2LHsNNpLuz23wf43xMaiHruzHcJoWMq34cN7XN",
  "key37": "5i7PDSwTS8RH4sygiMjuUpEjX33qEAiTuKfieMhk5Eh2oFVo3VNFT3xKKo6Sf6JzWUsJusNHaxZegEbeBMkA61FY",
  "key38": "5DfyM8Kf6Y12kGAjQivCMdfgY5Tebjq81Z45aM1yeL22e8Q42inXH2fa3hfPbwtNzLFYpVNUgqSNcCNF6W4NuwKx",
  "key39": "hFkKuem7TEeBGCsXEGhAVSSLdTy36PnZ85dr7wtvwQdRQRrLuZAHRPNhhmpYvFCrqJ8o7jwzWAvgau2EK9w27Qc",
  "key40": "1iVFo3nPF1j76ZbNNeAEHKtCKnTk8UWe6gEcxJiMxJTpRxPWtn621H7njBfZL8NHCvFBdA89ESnQGQA7ijBX77s",
  "key41": "5ZFm8VMLybGcn5yuyvZmYhXGWqhEnzbDN8TrvvhRTT3qW4Stv6GNqbBkr2LkRgSHNTG3dtc5Jhr8XDnKGuT49PWe",
  "key42": "2MW6yULwJRUJ6f2NACB4dGNzDCaKFPLbpo6ohod8BbJGVgqcziVpwdFv6Vys3tci5gvmdP8bgdskh1k17mxaJvZm",
  "key43": "tX5rkcYwn7NMLuzxyHpCaz5JpZmfp4QRJSXuRbSGtGrtaMFZ7ghhHiLQx1iyJqFmRTArsXwaa3AAXYsB67zWCKg",
  "key44": "5hAUJR9KrNmvsvoyfWERuvRbpnajrBvCww8xzfT7jdMxNKiaamNAAipaw8S2YPTbqdmzefzrY4c11s4iB8qn9Q5b",
  "key45": "5LyyWSFfuqm266smu1sNaRXu7s6oQyZzcrduA9rL9HrUWFnujSKE2WbFSBxSJUmmxRHkiyYUbGDvS8n3L9Qszx13"
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
