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
    "2PnrgbhhG7xPQbEYZFFtFGYEeeTAh591rZzK2pFmKMqxEB8awdafzKsKBFShQ9zW7KPi3mXXWvDTiFWiBTjvYwbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7NJcqYmRdn5CN4FsZ9xSUeW3XojELGSzTLVx9heW1qoTy6YopY3ChAyJ59Eri2y57t3CMu3cmRQWfhuCzmZst2",
  "key1": "seeHVESXCDShEmTLBA77NZXE1GorFsUqpYZcKPSMyPUNNToAnQqB6poSoTGxFwvMszMFQEXTHFWxcqfT2Z3BTcz",
  "key2": "c3HGTU6jHG3qPrKdJq9fRCeAk3z8TdMyrXczvBu7g7n9f9gqCHEHUXXwADCN1tUNQWMZqkCYmZviWNm2EfXafzV",
  "key3": "2K1VUf7h11TfpPuhJCLBu29poaHriEWYa7FdaUmGFFk6uy68j1sM6nUyrttDsqy8xr84aYRt6MRACrn3KAstXX2M",
  "key4": "5S6avf2YsSdMcw2T9udWMJsU7xR9zJwustdRVTj8Qqz3vvKcXXW8vWQzFMzxtMyFGyfFvKoahQsUL7db3WDUi3rD",
  "key5": "2Z4BqSMgw6DazHsp8jNzYBLsg87Ld61bjoocAShrgY7wPV76GbcyUaBeczRBjwnAkMHDgEr8hqUH4RrboYNFbk2y",
  "key6": "LsdyG3GQKkNvR9gkWQGHhbxQg9cPhS3cM8NuzBoe3wekKUsc3BCLDPY8qSpxsW8pF3oRPWo7XFn2QHFZvCERuFk",
  "key7": "622tv4ctpb1HPN22yWMjrEbdXU3GPs1h4yhVMDNFkVkwHMVYcwc9WMxUXxm5c9GuSzJNcxZBdhsvdZVAHPBibMUh",
  "key8": "67jxJKLq7biE5geLQPpztkdk8KhZGuJThRKuL4e2EUFuUWEwxecb4YeAkpFPnaepVPsoyySaJKVVxghZCNkdPqCd",
  "key9": "CuLZR19jd2gd6zK5o8azyCmWeqigdp3idLhB2ibrDAeJ5CgQcYNsKVSrNhMKwy5n4qPccKMvisFtWjKZmUtfspw",
  "key10": "3oFfrkZDgGBn7VrXN1b1L71pKmFjvoHgNYxxjWtWqyVqtmodUGBcbU2YCCJ4NudhtTY5uizNScxMZEz7eqhaBVBm",
  "key11": "4dqqzrqfws4aDfvt1d7w59ML3qbKCLtVSoiaTuFj26SRHBBYNWN4acGqkxpbsii9fqpF62MmJ2RLGdGFciZEt3bP",
  "key12": "2T6LQ9n15QFrdiYYpA6ZkhXQPXh8shAJuVMwFUgE1TgPyRXeqbWcTSNsdeWWGwJ3Xd5UdaPXshhtf11TmQM5HgJj",
  "key13": "3CWSXxEc9az7RLPLcAZbD4Tkm6NBhxBKYvU3w7xSWvkeX5Er2By5FEnDhSAvbH6PgQLbuwtc2KsqQEWKDsaqmRWn",
  "key14": "a1sfU5pVtjmrxMzY6mrGYabQRfsBWuHM5jQ7qQM64h2C3wbVsHM6ftXmY7fxKRxnSEsK7nZCaZcyzjskukG7QEq",
  "key15": "x1uq3H5RHPARAJtjSpbwPMjcPTpT4yGGtFfnaYsDqNBt18sxjJoPKnzB3miNLaomvZZrLmD5jafoDKZWuvAzdU2",
  "key16": "5tTVtLiSLNvxy4TSu1LdMmNQuWpUvyA4j2eqCoow6xieczCDow5HiTiuPF6XziasKMk28sdnLvc86wNFcgMsQYaA",
  "key17": "5hntHtuQtBtYnkU9Z4uwEcD9tvV9GVeG5iq5FTarcsE1GYAVeo33vWXFTUSg3LNnZKGGBunAdg1nFK4fpHiZViqi",
  "key18": "5w1ZwPJH2nWUPZFKMPrjGEwEHUT41bBDrqprCwTYY6CLajonwnv5AJfAswB9QMrYPZD15eoZ73HQ38J33AxVxRkn",
  "key19": "3tUCPjJZK9xJ2CQDuHk6mAQwcaZDkxC3nz8XAPnNwBQSywTzav11S81pK2H6h8dC5UYwJH5SV7phqmyTKDKtLG65",
  "key20": "6WRpMWufGAGvQGdCKQJPf8M9zFWtg9vnL1Hfe2m5SD6HirRQ3bAynq92UyB6wHtos337Z1VZsCKz9ucqAFW1Enm",
  "key21": "5fJbsSxnRYefJs9FUDdNLhcMWH6SRctXXyn7St5T6jyJqnAubCgep4GWxZFe1iVSAEzNmciykW2SftgZiP5SBh9r",
  "key22": "2RG4wBXozKMJ83fQkqdvVPoo8DX666sSPEHHa8hbAsi3FT6JAUDaHAULpH7kdGMg3Lbhrtc4eb7cHVCZypm4q7Ph",
  "key23": "2XNtAbCrzRUkd5dyG3tkmaCFaDcmEMo6d7NTovpdTg28PEseJDu6FggaszQppubBovF44mDXewpbCgAgYDwv6ted",
  "key24": "5JKTvjGK8LFhHqPMiqcbC8aVh7AWyerRAmtpE1KGAXki9re2f4zN3RrSLpfMS4pb8jRMn5g6HqqJfe5VsF2TuPSz",
  "key25": "4BpN5Xw5H1vLFQHDC7LSvLyEVLBdJcndjaiqGQ36hqGNUjxQnB79SAnj7pepL7pi3dD6qsgpq8NfKRacfY6ZFuf",
  "key26": "5kEQ9yyxmZ7ei5Z7f4NKu3DpYwiehwRy9zC4YNv3hrkXDqzDqu7k67Y6XHcijFXnpmvFAPNRSKFmtdBCiZk8wNTQ",
  "key27": "4ouWiYSSwahCGyoRUnMPXr3GTnQHwG9dcDfmCVo9HN9LCEo3Ak9MKLFPAKe5ekvEmkWZCcBzv6GriuQCcSN44K1o",
  "key28": "3FwSsUNoH2uLnV4n7p5gif8yBkTZnofjnTbuxzd11HvrFxDwdJdq4iv9YFN2LQqECCtmC8rEiL72oeB9tQCcwkYS",
  "key29": "4gYS7xcL3L3wT5a56Fin4wDJR6LpbTeSJpWdDiGm7KbJJyRVQeFyRLkmEDGL5qrHGJb97SZXJJJGAZQevNYWYhe7",
  "key30": "551w6G7nJA7wk8sqJseBEuDtD5KZcHvuBERRa6E1VT4TD2A4bxjw1SokwDXCi491dCTvRApUk4fMy1cX4fJUAZX9",
  "key31": "5VcAYK2hRrRdYxaHGuNCKh3RgyPSoBQsq8XYpecTfobHpPpuor1Zq77FRrT3iorvWjbDAnJsXRJHmQDfhvWSsHQ3",
  "key32": "45oCPYtv3ox98PCPu6m8Byfn15Sr6oQoNPDndrhbvC9L8EJYu3pptwyi6TiWPGzd1tTowgLAewE7cqAsJik5RNmw",
  "key33": "5prvqRVK6ZXa8WxUdb4HmgsLrHQLiYbXmDgraFQ6kJecmJDWm19fagGa43RxmMfjxKqPymUwYT9UjNsUU4vfXVQd",
  "key34": "gXV9x1BnhTN2deBJxiwaM3Hk9KMRUF1etsoZ36b2KTRdzhxHsCF7P3eTUr95ziaMgo5RHj7JePU3q2ZHAkV7pQH",
  "key35": "feb3VpjyBHhp96Gkry7y2hACVdrFXE91zd4891SNPsieSJKNknLazR1ZCZZ9LxQCkp34YGy7qs7vYym3rMGyVc8",
  "key36": "3N6bGbtFmxesQaSdn2VQ4PBU5uEzNAAic9FaGneFEAJyhVxQDwjpQ9ssR3pV8Ga1pVz26c6RMMTGtfs1j7VtFFM9",
  "key37": "25gBXNj7PwsYHSvsPTKwpDWqSghPZCSNZnuqC42LY4E9JyUB8vBkdGuX7oGDU5nh1UJXEHEWMBzY4hD3V5nBrJAU"
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
