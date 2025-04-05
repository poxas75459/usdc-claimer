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
    "48FX6hB7T4xijxW8DMCGWuZ88cfoNWPzEKnsVGGi69qYdHr4jvKZBWXFkSctbZjxexnCJLEsxqDLbmQdP9Zu2cMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mf2B3T1NpUGBH7VGtv8gWPgxVFewXEgbXzTxbXmRJDMt5B1pwbSkQBzfEfDBVscj4zTr4MYBRmcyZWjdFQM5P9",
  "key1": "4WaMFBgbMkap31wAXKHdvtK5tnpKCHxQoh7M419xgFdDj5hdZtJQ3hGjErWBPeACvUHL4sGBKhmKgLxaXLzMZTGF",
  "key2": "5tnSKvkK3Nr3udWCu5wqvrtUYtwexKVKZq9ixzHnq679hN44ULFuXmJipZVwM1bVsABqjasYdUWt2iZB7U35YJy6",
  "key3": "BACakmbi4y1pRAjpVRPoDB8qzmxQS9o2P7wL5iab5tr4VGhaYYo8zL575Zh3M4L2T4RjAVUNifzu7oUCVC22eNS",
  "key4": "5UGLhmCww6W5n6kVYWGmoF6zJG5fLbvdzLRcnxFwrzuByYBoFSwBh8koLCeyCNSV6ReogubsBtUVYYYqiwTpEFNJ",
  "key5": "4quLHzXZuvn1gzjPmsciimDDiFBbAci6ULoGZ1NM67CnZHRr2EBEg9bjsURMoz37KDTT7VnUNUoTRqpbnX5kdKJr",
  "key6": "4oDi4gPckV2a3Ac7JaqJxaVKWGgJhvpfTWromBPeE8h1nMgdGGifBp5o9mFtdeYhVDeq8Q9vyYxLecPJvsayFf4g",
  "key7": "xw58F2uQZJsZHackrneynNBhiosWnSXiZLh4ykTjZDmzQ3pJBZsKnJJtWSmqiiYs1KfqFJ6EpsnQtgqsX3fVNJs",
  "key8": "4XePsa7J5EfgJEa1bL8DGrLmzmfnRQ7uDdGiRVGfp2S1ou3MWqyZFXESK2AyN3JrwQU5HcqXDanksWsDKpsvTdhw",
  "key9": "2CexWQ4f2itdvpqnjwjBCugbgGfyma27Pzv85mA1kyw78h7jc3T5XZW3svqfKKS82nDM4sNktEdDYRApK5u5TScm",
  "key10": "y6oAdeaoXtGPwazjJQ7f7xaMs227JWakkKNEQQ1PjqCyRw3u9Xs9mXxYJcYzkTEGereGAx1ZnfR8KQzSKifFPL5",
  "key11": "3UEd6TUMTRMgHh2ptaUvbSwG1rLU94phNxBQWota2R24CAGEfP5PnGMkiSpQNaJ3wuSWBPkJnD84hYWcakDEo1cP",
  "key12": "2zAbYYYtcJUt6ELbTpkAz1MgvMYe1oEvxgyjHEstrDMa5oanaBo5pXpjGTdmMobWuqUjNYq57UR1egfD3V5fAvar",
  "key13": "41aeH2d567K4nsofa84fqjEuw73N9uK3Fg5YocY9q6uKGriEJ4j5By3HvPvavhZfqwPChPsvoGUQtdxWLDT52PaF",
  "key14": "5MjgteyyC2piZWiM8tmXrdFirXh4Ucvn6amWfEDQwYNGBrh8L4PFubh4q7soJt8PMBF27qpWu3Pw7hVpR92f1Dhx",
  "key15": "4yqFNy62B7ikKRtx3BFQo6Phw11aUyX11Y7e5eNfdbcMNf9kr61FZbq1DBtb2LHccK6XLcnSiktUoYZrR5VHsXPf",
  "key16": "2tquQAV7PVKAu3UqdpkBBePHWVe1azi2kp97jPxDrMUDoBHr32DevVLy6r8weia6zRe4By7jrcmPHVQK3HUYKb9R",
  "key17": "3iXMk1vT9BY19Ppi8TiHh4Z6PNhb3Kcr6WqSGPsgyb5okSNStwDn4gynqPv1xyTJqaJLM7ffyMvh56WWxUmdo7v3",
  "key18": "3sCFGb5e2YfvkN4hJAzXedoF8iSKpGJjcvFV3haFBd84qWmWbQRZDj51MQr8vys7a6agxTQCWbf2p69Uoz2GSNUT",
  "key19": "4QmV8HXdxx2j98BCrg6KRtQBZZDEeKoBj78WdCGBrYkwCJg27vZwYz9UezBjT2EgtDQXXXmoxKucx8WvK9vXicop",
  "key20": "3NvkvxG7vty71gD1YmvQ57uHXJ4siRoTZffAFQsnnSkMGgqpThv9AmsHuRFzCWB94y4jXe3HinGEFtv2mVdBGZZQ",
  "key21": "5VYWAkNxS29WUTvEH6pHQcTRPsrrNMduqk6L1WWqVymUbTqFkeMUR2JTrm2wLCSNoDQqByz8XQ2ygcADuzo6BZQY",
  "key22": "4bjAj2UTiRQpRqCQg63soVSJMb7kc1jtr3RFAqUEwYPfqd75TUV46Vd17ZTuVroBTdJAByT97cyrFcdPLU31V6rf",
  "key23": "4aYcQcVh6iLSmUm6TRsL6m91vTrwFZjmBNQSHxBg12uhjKGnARncEYjowkJPKjHY5xAH2AeBkSU861ec2oRVfvrB",
  "key24": "5bEUeHnCyXfqESEJUJUxHBits7XNpgiw5ZSwrPAgR4VUfLLDgLE9XK4T8Hr13BH5RPUVPBCk5ec8ALDBGa6KschZ",
  "key25": "2n4Kxags1ovnrdv8vWaPkDqbw5T1MaAf7MX6CV6dSsFCDCpYfbL92ecPa854Ri5qvgA4S2uREiwqe9Ur61y6y27U",
  "key26": "4d1LQHjbASMEuHJZYdGFUTApUuc9brpHdtRFHwpX7f9TG9EtBiKWV8MXQoQy9b4XwFCMB186dTMGZnKryLwCf4W1",
  "key27": "3qXrtjXemgjMasbgx1xwtquo6b1jzcRF42CNo683YZ1KXJ86HS5nNP7HjTv51PVi5bnJUd9zTgr8zC6kDxoEQqWQ",
  "key28": "3KnvctsVgQpSkzAXVjCbUPccijP7HmUY4daTQgQv64psWqycxKWYBhXJ2zuqCKVeWDz8zm88ePD98sGBEBEomfPj",
  "key29": "5thuqDAdZvdqSzPJpcdevoqCsZ27wZ6hEiuvFJt6Jq1oGAAJjPWsz9EST3YASQh4N8Zz8pQYFmvdFYQG7hUecC3b",
  "key30": "5vo4buCoi59NKrqurU5SFzsS2GVoWvDpReRJuyuFubBBDWUqbht9p9XuFEEEJ88H6BTsHLu7kN5ZD7Sddz6vSPPB",
  "key31": "tz8XoiReGvz3RCzNsTP8yL4hdY2ZnYM2dhsecmAxTmvHKCCowhA6k9DMXhJzy37GL6V8qQHFT2LMkHKcH5XHHuH",
  "key32": "415int2MN5nNbpjULUdzTVAkYVZrgW7dY2WzdqEZZ8ajn9exM1A83Yqaw1LNW1RNiHyNgkMorjXoZ39Ksgy6Ur1n",
  "key33": "2dsu5GFykjtsXuAniLn7SQbBxRJGYEpEF52nmt7DqTqWcdiaUwfzziLK8t6fXCdcczUyumnNVShCX6RUjMoJheu2",
  "key34": "4QhWpzPmQe77dsgzZ7amb4VMerspVnYoc8u7A3ZB6bXuhEnqX7hC2aPYRVpER2W9aLeMfZyRqhQxXDxTTY4BnF9T",
  "key35": "rn5M413tBJ5H4VK9myTFTdDKv5qViTMdrBetX2EXTeczQr1FgRUzHvJud7ZLVvKLJD1gswm4Wk5cuKptAHwxQR5",
  "key36": "3FhHgtUrT276D38xFonMUP4XUXZq3UNM1FYcWGJeMdz7vqSqpNgAVi9vW82SR5yqbxT4PTNrBu6cksfKCpLHwofK",
  "key37": "3j3aw7BcmCWP2HTZJEijXYfwAKtwuCrskdHkA9yxoGMXf89EBt5i9ZXaAPRPacLN8hDDLCGQnGnXsgL9HARiiyi3",
  "key38": "3DQmfsq3LwDvRo3U7uGBaCqmdhKinyDWSvjMbRvffYSeQ51uVCsYQfmxhLMXTEdDiACTGkjKeKWr8ZdXqkbWURRi",
  "key39": "2SG1V6Qtex2oRxYMHXikjumDhjzpRjsamGsDm7i3dP4cNHp9S9W9Xe4eVd8dsay4eo5ay3LmTQ3KwSsbYE4Nfxti",
  "key40": "4D3KqE4PJVBzpJzUwiGK7MUuT5Eig5yDkKEjh8gsW3ZRNq5NKy6gCcZD7Zwfjo61scoiKkbNsvvTAgJCKDqnaEen",
  "key41": "YmFWQe4dS97uLhXFXxQyK2sgDyMxHzoNHwGZrzhFYGZyeG4KmwJ2PiwXYkXtkfBqTf2o1SYBfuvxyfpoduNiMs3",
  "key42": "2TEa4t3yQyBqzhL76remEBGMsaEL3SqAqbALAbyjan2DTighq1UEiuEHUzRNE7fZdAzEJAgP6bFYA5Q4xssVF9BY",
  "key43": "3DDLugtvFnswtpYX6RU4PdUscg9V8bRx1jSnWZnDa8yT3F9CJpiYuNe8s6ubvGxc3FpgkmfVeFQWkYJwztbFTFrm",
  "key44": "7iF7j22H5EJutXta5NpYzkRL4tSPUUWfEDwiDWq9UXdyBvW2yXzUzLmaJ9bcKQvDoJBSm24mQnjMyBy3dxsH2LH",
  "key45": "7mZ6cUrMWf35WqNXKqMYJH4VychZcqEmDQsDocQ1bcNQautkWkMg4CR3QVQZVeyv8tuaKAo9GLB3LuWernFJvKq",
  "key46": "4odccPxkM7iccUf2Xsvu2cerYP8Gyjn6EcX3a2EsWEuYVLpETphi3zL6MzdaDx7iabHRrGHQfah7SjJu5QRYUqEa"
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
