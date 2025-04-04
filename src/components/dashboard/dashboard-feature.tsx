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
    "66CNTKr6gYUuiJLHrZiy2qa4wCKW4jteLSHQAZXP6Ruju7RRpPqE2vz2JZXL7dBKVrcHy97RNxsPZF66qJmY1imX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSrzktg1db1g55xk35JT6Es7wmbp9bPEHQWWqs3MRBVSqw6NpzefphwPfdQaUkj8Yz1mdYSZNV3Ge6Gpivj4onc",
  "key1": "4fCJK6dskLcUR1aMjdDXTrAznQi7EcuFJZYdm7JpCFai7m67oHYUZMm4Z2ULpnaLHY8o2QioMGi7B6se8F8V5G4h",
  "key2": "5LqSth9WtHzcivoLnyQvhiVP2nAuNh2He5GfUip9qQYGm8LZN4pnsuP8e1eNfiHC96BAXPZ6yY6v6EaHjrRLt5rT",
  "key3": "2fMaTor8aHv86oGKVrDFAdpTTWRGN5MjmtjubSzkN9PmUzmt5MuSqwhBLaPS4skHSDE9LVhRhT5RjrtjNQjUATX",
  "key4": "4JJKuuCaHRF43ZEtSnQpCwKohWrRqbwWUtVYyEXKBrciX3CR1uwxSsJQhpK1hyrgGW4CdkubqEDQfDgzXfniz3CN",
  "key5": "2mSBbf8ATeoU53GgU4rNM9JbE8YZUCQP5p2MBMxJKwf3oP4Lji6NSPkE8JrU2rTzCeeUaeTTRA4anfR5doaHyMmJ",
  "key6": "2HKYeQueEN12ozBSf9eFyzpM9ZXbgza7P3LktwWsdSn2MqEBd9JHaJ4BFSbBp3dWPMKhPzeDqUykrHtuiVuPtibC",
  "key7": "4v1nUEm6hZyRJQdwW29EGmL1u63qutszUeEd6ruKMbwtnvKXmkeEASrDuJun5b6MEDjgEnwv4guLtSeXXZaDfzFv",
  "key8": "2ipVokAPJwse65Jhwi9chXGR2tNQJDQvD7pk4VqXGseW7r7DRH8hu6CnRkiQ7gxwGkHbneAkip2bRCFu4DD16cde",
  "key9": "2BxYSaLkbowXHJaTaQRVwSsAJTMbCgCQVZdSGbb3aYoU6TShLy3xTeLf7t4H7kiinzGhaXQ8L7ZAKyzX8A7R1fhZ",
  "key10": "Cs7qvToqpkrYY44kcYsGbce6NxXLSVLr6RsDx7MBhLCd35sc64p1aXByn8JjuX6WA6QT69quzGEFNHCAkt49Qvy",
  "key11": "4MJkpFa4CnW9fYYVab2tZCMtZ7ryGCZAjQsYqZ84r6fArVgD3FbrKjUxJnodB8p9rnx3FPs9chVuC6TurvaUqSfK",
  "key12": "3KJ7fHeo2YLfEqS9q4S13pymsQtsCW6LoLZz3mwYNpu5gNHA9huCMebTZqFBfJ4qfJ4dXEx6P4c7FFsT3NxxZzxQ",
  "key13": "5GXqEVKTwtDiq7cx9kwwxYCAquwwkap9FTV3SbowFzqWf8YMwc4nWtr6WxC7Y9mhsm7S1GTufXJKmcD76LRbEKbb",
  "key14": "NtVJbcK2nH1PZJZ8HAvy4bhmCq4uJFQ7dnzAMyChv7W8jA67P62zMq7NsSYGG8zaQyLevYkcbWQ7J9Vi7evVxdL",
  "key15": "4PZgA1wvUXstuqiW75couy2nvqidRf6wQ4YYbBskWYrx9gvg1LCC6EPXGUeqrBVaEmeNhZ7Ue8oRWhv3tjH1W1Eh",
  "key16": "23QAwvPpyB6aeWhmrf3FrtFbTmLb3Uv3TT2dgKzVfWzk1ERKec9BSJhs78h5LwUGFj3xi7TvaACWCkM4uHi5qkL8",
  "key17": "2W4uo6i45keiH3Ut2cBFqrvZ1mbTayaX6MjKiaZ31jv7v7ZuJizJbsJMkavzFGDEdwtEEJgivBkXgstdje3e6cjM",
  "key18": "5yvqzeyB96NtyQq8CzNCr4v1tiMg2bD4ZK5pd7qdyN7JpLzjppAjM1nEi6T6TxzfSWDAsGRf2qsvx9qWZhwZTiWB",
  "key19": "zbqVdR8bo4ZFRUsSC9ah7Ews4oDs9ZnoRKCAAzy4opqrtK3ps2bH5rcWamC3bPLCDYfsagcZHwXKYE7Bsdagnqo",
  "key20": "3Td6PdGZuc7AxLKm1hP5Zq42S5oTDC3fdwMbPkoKK73dpn3F1J9KVrWVMNV7dEPuR7jdNhVivySmsVFCpQ2ysfsT",
  "key21": "3BzjwCFc3xTy8uJUz1w3TF5ws1EZsBeQT5vG1541x2QE96747p4VjwJ99GnHfiBCQYqG9cPUfT5pL9arwQwXMkrQ",
  "key22": "pjUzPdmFxf5woN5naRifJs3V6GVnDCZTPMrMu1JtuAXaHf8yzWHqe1pbaKuQmVL4ULgKAfszohcD7xErk8JrgkG",
  "key23": "3xLkAGwbuKxYesP2YwPndZDt1NF7FZHBZVaBpdsgCrrH5A7BAm1CMcwnd633nrFsnstypXa8kPX5nK33HLtaXaEt",
  "key24": "6427EXyYYorSKMMvgk2VVf6r5KhtKZNjbeFAuc3sqDGuDB8MreVx4uJTxPEXmegn1otQRL1G5pEhBw4rXbHgEnGv",
  "key25": "674Fu1gjPTWFEhynt5ZWPG2XwVirQSjG4iXGqYdSQpF8rAkbvt3T3awb6t3gaBaiV7skyHWjx2mkNwJhKmjGedXZ",
  "key26": "522e6Kz1zXbn77W8fT7CrTYERkpSgxRDAkvGVZPsbJ5U9XrboyQZbcaF29WiZ1bs79nW2Zw9hMM2z7KTfyvkwbTt",
  "key27": "5RUG5oWv4DC42QdcwPGBVm6cTSRkp8HQzt7xzxrHTCaDh2qSJjfV3aNhzTgxnRz4vDGBWmsrgDzNyLqmABZKrJwh",
  "key28": "3bhymDJyYVbMVdYgvGRnY4fh7DEBWsBteQfZ5pXd68vmRNXnriBWcaMMhYfX6STmviUs3APRjaNZDEkVv1c7sTYX",
  "key29": "4fm2429QRQ9gMtb8eSGnbxzi2ogt95RXQjMykyUAueDs55cTnBXPahWpkWDpdrEQtUvy5Zss4VxViEDz8xizHarz",
  "key30": "H1brPsn68VNhFm31is8fQyt337CCXwJKSk6hjbktLgXHNp28M2eHYeYpPagH417a8LVTGf1z5gZE4vfB117A4Xf",
  "key31": "2rMi7tj7JY9CF3ttHtjBX5wrJjG29icsysakoppqjoSb8vvGHCL1rjZQBEgcWzHhF5myJpcL27WNgxaoBti5wVXz",
  "key32": "bnuR5VwvR7mSDFjvFbazmRGkRKuB5EMShjTMTTFd18W4BXKjhpFeemV5WW188TD5tihZFLCL9XiiPCdsTcPS15Z",
  "key33": "2kFf8iLUUvE2svCZjznogGW4QkRevvLUVTy8Ndj9MP85en95qQsB82YiynUvMCAAYgPZ8RVfRKgX5Kvo36EQBCwx",
  "key34": "2ez94yLha5BXRZpdezBdDHhUcoFgGSpkMTY1WSHptMgeBgUGsc5rx1EVyGtn7EDbThFy7KxA1qRy7QoFWQ8XNogk",
  "key35": "39DBgURxMaPzXzaZJPeKzzWb4mZu2TbS78jf85Qa7UJDpPkUFaTfcatP8Ecv2WG1PnCuYKMoYw6c7NM7ihqvDHfL",
  "key36": "5oPV6rFhoxV8mjW9162VZfHRm8iW44GTFbSaiHa5om5Y3ChE92qxC4AfTk1d6oJxquLmdrabhLfHM2h3PshKJbZU",
  "key37": "5p9y8RJTJrdQ74qfRpE2xsCNafHxiUDApTxJBRDUgbERdj4dcdmJYmdvKimJsQzDN1jK95KwVwyMjFbbtnQG5K5y",
  "key38": "3xJMYe8MNNn4Tm444AWo5tHsHsUYVdCCCqyNZPudAhBabLfaBWL6mX3qSCKZ1SAueKYNGrCczZndQtoxkVV39Vii",
  "key39": "2HKxiTtVzoUQbm3gJF6QP6CaXKsyvGM8Q8VUMF3Pj4J7CxA76VKpxYHpT7kH2t9dvSqc2JwkgvQ5bZFDJVwXEVe2",
  "key40": "3QaMP8hosTe1WBd7XjRgsNGTWro7cxDqDUAtBNL3fTmGF8GAr3dadT4u4rsZyxbDmmmPCgFbFVeavWBz4Fb4sr81",
  "key41": "5T3G2VWMvdUZfuDsNuBNneomkTJgcDWo59Du32yGbH5Sai584J1JgMJ4FFQzHibk3H1yUgbkKVKVAPEybRpFxg6S"
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
