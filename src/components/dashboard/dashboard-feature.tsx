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
    "4WzRDd9DQtDU3hhx4wmEcB15FjX83S8gMt2sd33y2kh6MY8zVynHuSnuNcmFfP93YP2V2v2nFjCesR5PzehoyeRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncukMfTFLvRJEKKGaxkqqaLgXFXLYouTABG46gMNrpt1Bn6Uyg4pd39Utj68ZKLZjse6wjmg4pEwr5Hd1J3jrnc",
  "key1": "42XCu6jTxE43HG7qY4Ndv2PsijkHkiLvxNAgjk9A6nRA2yFqx4quqHDKbgwjWAu4fdnmqtRHsqaVGWS7yzGVAjLF",
  "key2": "34tF56BBuyX7LgGBwmrFduZksu9MBXayo3fMH2eGQ3w4bGd2oBTQsN7isrn1XGxfxiS9AVeGpPnwTJZApb9LUZm6",
  "key3": "5tN8XmcxYLRFMKZEmCguBog5mYHcQLAb8cCVZMYkrpuiWZfC1NnLHndzT1LFNeF9sBN6dQFqKqUqi2mzbFXA9g1z",
  "key4": "feDyCEbt2uC4tnj3tTc1S2Xw2LjoQBpqTijTjD6b9zy2d8K6j2SsBGejdah3x2TLQtZpW4zn4QRwcW9fJukpa3j",
  "key5": "4eWyN1it7QaXGbg4rZs4UXNrtQTBPe6r5MVSsfcMAmC5GmadBBMeVHpe7T6k5rPr5gh6XxGpW9p9PHVQRwUjDQeg",
  "key6": "3vVDJs2puYRT2LTq7d67NVyzxfCBSUoizAD8h6psSrRXrLpSmzX6H2cbP8TgKqXAG4bem3NZmJTBzxhHJ9RD1QCo",
  "key7": "SPbBihhturPnXw4HFSbrKjnvoPFdZzqhXk5tzJ8tR8DkTZo5DEqnjQHQN8c4K57fFQSrFFe16Mw394QEfSMqtoJ",
  "key8": "4cR6RjPaf6mbr6xwmQJkcEk1u9cJ4se27PigFdEFDCF5cktDhnewL8UnZFDB1sUC9BSGbtLhweV7yW6RQFGGMqkv",
  "key9": "58RtTMtQG65fJyDNj1XBVPECdAZ62LBxvLv3CkQSru4XhVsWVxV8eF2QoPCh6qGn52z56yKGouFcauAYYN2KHfSq",
  "key10": "5QnKKGn3Sf2bRx79otp1ubeqKTECcygDTKFTQBCTBvdbEdeHH8NSThvxom3PVwiY5jB6XpBackjVKbYwxN9SVmAb",
  "key11": "P7t3jSaXpLad1UmvCLTdhY4FnWJJMjkmi5xF6nNnJ9RjnyoFEVjvk8aMnZ5KrAisGQ92neJAJFpEC7sh4BbLUkf",
  "key12": "63kvkp24BpPiP3B6bS7Mf7A5gx6LCY8SStLsgEAYYYLL94jZv23ZbuKFw2Rb6g5Ty3w5m3DYVKKfz6ePmzZVYtES",
  "key13": "5n3ZgZBz7VHp8p1G2zNeAFXoYeH6sh3vjVUykjtivghJeAy4kaaEY1mPoGkeShPu41D2QzWzggWERGNB19HD35vf",
  "key14": "29m5izJZG9CMXaDKxyCyobdn61baEb5BenUHBu8dbakXXLgHmbTpjcNcyustVagENxQA6USKZHHc2WEKDTT69J7M",
  "key15": "3Cn3TEvMuPU1ZHp1y6CAGutiuYyktQyKraDnLQG7vSZ9yzyNLRcWa3Fz83QWwojPRZhNC5iT7Eb4GUnsqjcxzzj8",
  "key16": "5wszh8je6K1PH16SF5FZ2EEabwT3psJN9RcM9myoUrkeEEYpojwAyiBn4ebGrLmJ9729xfL8vNUcT3eiH9C6xHMH",
  "key17": "66kzLC2QuTLk2ZrHZW1jQuymvTVy8j8E3zYv3JSdzF6pDNsXm8jmDsSHrRTaBsXXNL3tgvF9Y9XNw5ruEJFih1r9",
  "key18": "3G6NSFGi89dgUiX4JyxMshuCwRg4ctyU2sbcbVme5Jstj9XxG4VVaDrZCz5vwWCkA9b2ChdmZ8z9gTjuhDuCGqff",
  "key19": "3GLnBt3jKXMGz21NzZmvmeWEH1x7JhTGvf3sNzpLgw8rf2WYM4peTCcpXJiBuk86fWLap98w5VfBEh9GA86HWfaC",
  "key20": "4Vp4x5Sg9qGDREJU7mE2ZcgMjwihMwbdxfdYxKzpd767d4MjoZ2HHsxafayr1MvrNGy3rhV2P2EfzEPJ5sk8VpWE",
  "key21": "3H9vKAAdv6XWmYsNbudzTkdT2po68oHKeEGJex5Zs4u4kn2KtXbJt4c4MvszUeVLw3wKAFHLLp7BesedbMsJsNwh",
  "key22": "5rkBRgcSJXMyd2P5YXabXArqiNgfkSnwGnjnZywB7PKssu9kwD2zBK6CDm3YwwJct8Rab83XgFwK7uVLaUjKiftb",
  "key23": "5odbgdh5NY3Z2PZuDasz27Q4eDybY7H6vHW9rCG9tiFebzC9Hr2qeLj7KaQ9fwa4ChGeePBRjJGkRaUSop4rU6Ly",
  "key24": "4YuE6yz69TkgbAzqJ92x3FwZogMYFq1bYgJmcXiKEEWcCZTtVnYHiNMBzLqmoJ4bd6F1tcTumnuPzLGaJBwBt6Le",
  "key25": "2Ti6k1qB2p3p8LcDeQvZQT5NiXzZYmeStatnJt9FotM2jgcMFAnpGN79hQqtwnGDSww9KzahK1KubZkzV2UEB95n",
  "key26": "5imYwXb6RDTotj8ZPpLUm5Hod76SpduMuKedLykF4G28CnBCg1joK7kmiGVEsdB9o8tSWRzkYFq6t6tfdaxDSxCi",
  "key27": "ydVwk6jQJ1s82pTiBYPy8MzcndHa4rjcQTGSAzPbxNw3KwvfZyiRd15gNaxTNFD88qLaZhKYKT2fS2qEeEGn2rn",
  "key28": "2FVFaTh1XyeFkCowshen6XkBvdHYsuhRD397RbpQQfyUAbC7DoPrtUsWz2auLuq21Pi3hzdQk8nER1Zr2mEHdR5V",
  "key29": "33pmQvQhioa5ATZ2tYBayAqV8tCLJVMBbGeXM8gmDSSXpQcSpG8xWXzRuteXwe4MXTwrnJo7NhFecSfDdm8v7Vor",
  "key30": "3fvZxfmZsmniaGAafRHGEWhiqiKrfeS83CrDRaXU71ha1HDsnts5FXuTyVj8PKEfRUXgfKMwEpVTASQPhg8L7UaA",
  "key31": "2EsAg4R3GGF3XgZmuZwQu1NVkz4uK5Tjg4s5ijPktN1dKqBmf7QJuBJh7N9tAissURYLbaSuu9Ub1h1yw5YrTHHb",
  "key32": "2KXwcme7MLh7kruFyYFnasuCEe3bheDPTXU8E8hKPtk8MFsNaJkJsHQnyKdrH9sFTJ2nLfaQqZCoFRssCaqacihJ",
  "key33": "4e7QPt1mQy2DZi9NJ4AuP8UQa3AGQuUKyXV4bbD2qHUGe9EffVLmDp1NqJazchqRidMNGcG6wRfXGL6maVYLVPVX",
  "key34": "5mk7n32nqMnMDasQjAZXboqxkuGJzK5wpiPLz2FwP3dz6nbyF2rxMvEXnjffp3XY9BPXSGPL275qyrh58rFXdZgf",
  "key35": "4bfSKtt7rMeh3BP8BYzbALS8z3AVcL6JPnmAc5UwF1TBxPP9FLpY8LfyeSYd4MDJGg7GjW8aYFfvCTkZMN1U4TKL"
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
