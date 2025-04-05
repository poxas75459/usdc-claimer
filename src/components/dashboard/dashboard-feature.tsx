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
    "RxhPm99exckKbZRRh3SeHMDAmSdnbUPKUdNbVfr9eU7iFVZrJi8mgsyvGMM26FUrd48115NVYLDGcghuEnrpa8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3662E1inW4RFiqk7wUx56Ty73gvSqDTwz6BdawrVnU8KBbmhBx9Bec5W36ZUtxoxjo9JbjX4LAHEN2TDbEJYLa",
  "key1": "54ktLSjzRxGr9Dp8hrhFGydE8fvVwggD7vYSG52y3TYAKmqisdkUtsgn6iDMXFZw3zBvYc2R6K42Kr6MDrWHrDdJ",
  "key2": "4MT1B1WQ2Y636Q53pG5SLPfMaBNYif5r8sWi2JqDrPmPBJZD2E2uqYv7w7aDbqPN3aEZvftzQoXqBoxgMLQP8Vcz",
  "key3": "27JNcsjF4MivFXba2yv47KGDpY5ARYSyxkCbo8JZhSjCGSpQHMYm4G5wPk48hW4UtVXNMeZXSdYAezRj4xDzp7ks",
  "key4": "2pN3xtTawZMrGAoT8CfbzJTHcc6eG1ugKPsUmz5g9DrJJkKhNn92suUjCvuW1BqBFLTEsCnHZH53Ly3huBj4HAfR",
  "key5": "4drqmcHzthJeeQfDx5SsLFarv92J972o99KJLEx4uMML1ePWwj59bg8VtQezUHW82WJruEZFPhgvbiNbR68XMkL3",
  "key6": "3fCTEkMAWB3MRtxp1xD7n5nmyKYopD88fvNZHyoaogT9U4LrpZKu8WkPs1zQUyiBvUkxptsWod2UeJs6teViccuQ",
  "key7": "5rBBQPqYSpxbVsgNX1Gs2L1TfZ24P8y1kEpfdHLpMERch7TqthbLXbX75f2aPQKRtmTmW6LjRakCkN44ThpbwyTd",
  "key8": "4nzfzojrc9yx3odYgPhhV8BJohDsRupKL48T2RVVHM3Jejx7Cx3buz7iCNHYc9uwxd5zV1RGDkqRNLuCvCrmGkGq",
  "key9": "3efPUJXazVchpwxaYH6pa7MVd2D1S8n6uhnxjPxMu747Cni3btNYginZreXb3fxZNyvNaDWFc51oX8CXmZeEGCRJ",
  "key10": "2znyxwHhqSMD4WqjAsXHG7uKPSR2FAkLdBS452KreL53jvZeVK49DJiXzGiAYKsWfymeUXBa2mDTnuwQvJ4rJQdN",
  "key11": "qUFgLcSXk8rzmWYpxBysaEp5ZrtCGG86TfptAUbupf199VES3WFVTiMdgDT3bkwuNKydBNhKQ8AjBRCeQXRS5xk",
  "key12": "422F6K5gC79PbfCKedSdg82NnxGfPUmMbnubUqhd9gJAhUZBMEjjRKMwNVWZSZwNfdbMQYhUnv49zBAU4WdizpQj",
  "key13": "4zymkTBpd2jyajAoEEEDJxdq3FnCyFDh9MtEjwsbQHumL2VerUy59xuFJFbuZ7HHiSAVefC6ttBL1k3itN1NvSAb",
  "key14": "5oVaZJADVxnptyPTHCic3ipUtpGgjdvTzo6ioP15N2qev6vSaPbW7r4VctvPDKZ4GSmuMXoCYytCnsVKZrm8cuEH",
  "key15": "3FL5XtAzNR6pFzjgJwUGDbPP8iuGtvXvR2C34d5UTVYYTJeLhGzsovmYbKzAJ62pbUgZMhTiK3FArdfdsE4KY9HN",
  "key16": "du6kPN79vfDfNbsUvnaCRPmKY2ttCCqmaQf5SNe6DYfirESsifBp49iWHpVtbPE9DVbPopiynj9ev5UEMgC2CeQ",
  "key17": "2vg1sRuEVfi1xwpHCy9N6G1Q1qUEcAMoxVS7rUPePD9k3RfvYMhgxnJr5Hkm3Wzb7a44vHKKjGDcEwjX8xY11KKa",
  "key18": "2SorJH9MMmczUD8SujLjuvMMXGZFUCrrYyQkWFTpYuTnSFP6qqRnQ1Tc1QPKWrHSF89P1v7cDW1MxpV76RDq9X9T",
  "key19": "Vj9AJeGjeCzpKPXAosS6PyteeezJVGZRAkoKqaXHW9cvQTKaSHgYZZbz71yfJtXbAzKZyfaodjw89QsMGyY3QGc",
  "key20": "5ywhuCRQscYrGUCJLUHANxQoAm9Yzep5uPfmkZk5CS17dpxFFxYtEkTqJx97XKgCxs3PCo1q1tPGWm1jhpuyTVbc",
  "key21": "4Xva6mohzR8juaPQvQuWwSVDNAyi6PigWJjox51eyXjM6Fax36xdbrg6sseLmSeMmH4EtaJ7NoxGiyt34MhQDRGZ",
  "key22": "N29YDnFmy4Gzp97DNyHMF2QA8ozrBAVUCBknVCHMhrqxJB6SszEQ9nspoBue92PB6F2W1VoN19QSh766AUT6rTQ",
  "key23": "5MeVxv8bCcNPtwVKbqmbdnTNQtsN3ttYcMwWzXM6pBbCJn7rCnhQGupn5fKij5A6EG3ix9bJufkK8RjJYAcVZXhK",
  "key24": "2wmzwinQLQd6sUzsTsqXNdHW6iUALMTPWNYi8wmaeB3eTafUEbESeFoJRuQfwhxApUy5H6FpAfwfBEfcDyJ1T7Sy",
  "key25": "5eyn5KKy1iu1wWzRe4C7xUTdrU9VRUpLsXuHSqc5wDxoSwuTKZjC44SUfbPMvGg9PegVwXtAb8MA2VxW3AfKAqVT",
  "key26": "52bFyR6Rf1GfAwbwZrp5CHTo14KHJRid9Dxzo9F3QPDsSEZhCCD2hrHF74MzcwxBh2kBrfxcrHavvnmBHVHnnRwV",
  "key27": "4m86RT4fQXDsehgbCofNwcUw4tHRJSXt5J5eH4CAYnWrHXMLSd5cj7wrKRupqJKngoGHApcKPk4SeHErKi5iMi2",
  "key28": "FAbu7XxL8F894QsvA6EvaGfLi2LrGQ4F2zT6vt6kw26WUyq41LqX5kdi9fRCbzaSiDrba57gayQKgJKyxNejqP2",
  "key29": "27aqxFQPkmKajgFHsECVuzU7Azte9zf7H4P13HLL5JTKcLNE7FbqTsAmFAjNkxA7tcjR1BQXEvwtxKabN9vTtLCu",
  "key30": "2ibtfSxvJMbRAipoeTAAV3eQqaKzUvaMYk6f5DhJR33H316ox5qgS7R3b5Py4jSuGwpJUg6CmMtcNwzxvVhh4RGG",
  "key31": "5A5FobsvJUxRH9dqePTBMtbS6LmYfZZk2nc8JZ9YtQqvigsBpaAGsFuuNeCd2Zxozg7mN7y2aGNTrzTaxatqqkk6",
  "key32": "3gqVJu4jYvhegndo6jdTeazSk9FUWsZrFUBzzgA8z8mSCFEg7GLBfH5UVaKQMjSAhjBg32ZbLnL8Qre9PfxRMjc3",
  "key33": "5WT3Gs7a91EEyzxrcMQEmEqssaFtc5KmgchvfJvCFrvHg4wxVf9e9nP9t7zQ6dRob1QdBLivZoRLgApWe3YDJEi9"
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
