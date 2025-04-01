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
    "3hY44ZY5KBLxtcDZ2e6VRhGvPwCyUedaFwoEBWDpoJ1Zot4iVUr7bj3WYBc2cJpQiyVG4Rjvc8ptypTS8wgmNy9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQrrc14HQeL7Qtof374ZqK1BBmh29nXXMnWjW77tMPEDn3nBZPXag1wJ6JJ9KZMp2ge2DbRxrFj3LBTiT9kzkdp",
  "key1": "3cm96wdNFccpZjciRUfn1twWQG1RfG6oxezT2bmx71teGWyLj5UkdbbLrNuY8bZTG8JXSQkHRu6WMvXQU5DvZMdh",
  "key2": "5L3wrb9sGK55DX81hsYToXziR9CV9GcGvSVZzqDczmRzWFU5YsPai7UDDDToyPuFVff6UoiphamkbUxJ4qE6nVDo",
  "key3": "6zBvZzh5LdwPa3bcgL3kXZ2wfgdt59uVQi6qL6NB5vwZGYvtyiM79zTRXiDYjzJDLQAukUiBBao6auexWoJxRJ5",
  "key4": "HJH2wGTPaKFddSdsa273EnEQZZEr1UbY2HqRnPfCBC8Ey5jaTcT3iwWeoNZkBPE58Cfo4KDBA5pR4UWvikuvJYg",
  "key5": "5ZYbtv3pAJZcDzjhoHb52C7oDahBNCpRMybaEoruYppSSYP4c6f51uUHp1LfX3FK8kQQfZ8CjsKDqTQqDQAr56YK",
  "key6": "5dmAja4DP63TJcxe3ncew9AtF7ZSVopeD1n5pXfGmLRWcZ1zdSjWGKr7qu12mKwJUy9G8wQrh6HtgiY9xX54q8gG",
  "key7": "3LhJMDJHL5CxjN76YXisRNmss2uB8cj8QviMpuTjaVTiXY934FYXGqPwenmo9Fvo2BLYzeLx1b67LT3uRmaaMge1",
  "key8": "2n4cameY4fmPh1pjQreRwWPF6ktD7nVougEUiAWdRU3eX9LjbsSWp1MifVHSKaC4dM6bRkZAPuSfNwJm1udFM9Bf",
  "key9": "n747q8xFtm13wxmZdpiLuCnVu18nSgehGZR2j1QJbXhP7z4CSpjuaqTsgk7AJs3wWPpMqj2zDY5YAGCZXkgA4Wz",
  "key10": "2KcGVU3iHuapmTTKHDNbeBfrvyQFaNUHMCRbB5Eg9BdEtnxQ3G5Qz9P4jJvNmrGRvkcPMVCtcW9j8XZipjT7Keuh",
  "key11": "2m2CUjAirHvhuUqCQ1XMekP4ZGxxDoiNepgQvuQhk9NRiK99CGyQQ9ZvPpVySxgi7yMJMeMhfvMyU8zEtRyiXm5K",
  "key12": "5eKSf8riNwXmtADAf4KuQw8jxXc55vKDFTKoV7oJ5r9zz8bRWvAEjSY8Wj3x9hbz5gXGq6ULmLYiAGRdLxYNyhb3",
  "key13": "2FYTwH8E1fQdZiN4VsNRU4XoNgadRruvYLT4gkLMVReMy5pexrFnRUwUn5hLV7pqd47rbmT7CYEXV2kx5VRr5xjg",
  "key14": "3TrYk5sd8Rmwsz7Z2sCfoFYrcnmeqoHiMAe2kzcJ6U2kGBFemwBg2Qo3X7EowMDmNskBBMJjKW6J14kJZsuj6Cpn",
  "key15": "59vvBd3kV9LL61YQTgtHFf176ZNhx65bKL5bwnGawuZPYFBvp3ZxbAd1w4CYV7otx56nqBT1pfy62ewvi6iouqxi",
  "key16": "541iD4WPqHgpT37aaX5PzQBBgEMj7vevKbFLHRY6aczU73Y5rDwEgMBYva74vKSo3PfXVpLsu1Xd51YD3gqzxask",
  "key17": "33LGJXEnLEWc4BXavaA5UTtYmuzPiGL1YWpnL6y8XRoteFyWQy21u4KHcaPNndkr2fCnc6noY8uWnKd8YLUkMYQV",
  "key18": "2kGjApimHoJg4qKW7kEaYXg7kKnb5byuHECUwuScgC7Ua7kfNsSZs4xsK4Ei3S5M8qUPcEbpbLt34afy4CRhBJ5d",
  "key19": "nujNc7Y4g39Kca24EUeoPxb1z7Ft3vavr1ABH9MtyKAgvaLLoFr5NVvmHSzVJp5bjR944Z7x8r5rivgcd3ktgFh",
  "key20": "3ZH8oQNo8Y1caiLWCmvQBJGEKxzAm1grHAJ6xAK6Vbfu8qLHqJwDxNnA8cGUsUZquSGqJTErdSN4BDkxWbdDtWGh",
  "key21": "4wm8ydtT1GFKt7Dc6qu8jJrZvUpwaH6sVqWs4MoLbDptSQGKh1kBviv69yovohrwe1PSky45Ezw7CjHsHyNmTkAQ",
  "key22": "4D38zF4oqZVnpdASJB7rXACXgoFdiaZ3rQmJTStXNPt4xaxrhpmy9X3QxxcvcorSZL2p5h593P7b478wiTm1iLpZ",
  "key23": "5zuzjcaHMnY8VMdPBFAtBxvqWxgE7FjN6R4Wvcoee4cqFYJNecf4vxAA8ZAgajf8ysSSHfkLLvbaUbfjL72anYW9",
  "key24": "Mop8r1nkcjibzihEhPug8C8f45RdxPu7bXJrtWwBGRwtpSNDM8TC75DSHMkLWtyyL6JW3CdMKRpVSU5i7JJmu3e",
  "key25": "49d5Bb9tgNdj957C16sfYLwfSBEakXjo8t458GK8NcNocXrx39tfC3DSZbiYr8s5Ajc37RmCvj51YURuUw9u9zcH",
  "key26": "4na1JkZPDwcgn6ES9WGVJeU3rAVHF18UXcMgXqdmiL3esAEB7ENVKLWQCfRvaHj6TTAiMWNSXK4zUZyQ5T7yZVrB",
  "key27": "bDxVvtHjZyU5VSBT5goaijf4pzPtpjQCBHGUfMTytkTaa318dd6hM15hzjzjABn9WsQM1FU8AgfLb2uqrxmpxuA",
  "key28": "e3rBcUXtBqTA34NgEV4kaVH6KMH498y5NUbeiSBdvt6gXfVuzoNnu3DDXPqDJL9BCamidc9RRTMJ4UP2BG7q8Vk",
  "key29": "4FVq35p6XKZUE3AhHbUVzUMjuq9kYvafx99GEXNmUgNrEQdkAxiZFrH2KZrua7X1Ahf8XVhabF34TgL95QrqoGv6"
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
