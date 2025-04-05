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
    "3duHUAqSechPhBYeozg7fhEYcDq8dfrZ1ZkrMsGQ94jqmHDA3T8Am1BFNBFuv8b4YzVH4mjZUsDy5Lw99DF5LjWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YheMGU6h4uTJiVnkBzK1KW3RpygjKCf3AYqwMshLdW786USxgrtPkrg2g1UQwjDgp94uJMGXi41iWeDANanLRLi",
  "key1": "3xdSDFSVa7wz2ygper6sis2d4ntUYE16ebkH3LwP1ZZe8jabCAqiBrFKoW98afpSJWYzSHDwoVpzLvuEKreaGgu2",
  "key2": "5o4KRCYg2UB8eXHjKTap715z2P8EWv3jRwXXyBHMzUBsjLKvMM2ePBeiiRXkADgdMgb23KDH9Su1AHSW7Xt5phAq",
  "key3": "3QNNrz3P583FXhLAb2mjjdubi4fYTkaDnULhGdHfaE5JXy5daKxEnGZdhd8h9xMzo8fNHBWru1o9yME6wPxn84Z2",
  "key4": "3GWCmtcvPFVJChYLWQZqjqK8Nxtz7NsusBHjcecsLZ1J9g15AeFJqV6Qvm31dgEFaAC9v5oaKiMNMefZKbTmRj92",
  "key5": "4o55YqigDaJJr4jA7wTMEmpGZHyzXMaaEPHHPDzN92gjBJtdGGW8yx11exJ78asZKeFDHuKCszmHwqQqAHTQ2frP",
  "key6": "3ct6Npfvp8uE3jUyDN6mwQQkv9eDiHpN9cyPt4twmPydfRAXDGJo7LrWd1j6eFm1riDaPKQCpUceuHEWnumxYjvJ",
  "key7": "5DCNxLL1Ju69ZUGXGXmKBj2Lfrhuf59g4BUvZDYoEFhDRqta38N75HFgvQ31dfkakh33UDkbXpqiZtETtNYwfqYW",
  "key8": "DBSPGQJb5FqvyevEk98DV84fZ8mF6eDw4VzmWYRhDGpR7ENd6Aw3yeQoCWBqwiTLrc4sxEirc9aMnpr8g2mLHWN",
  "key9": "5iU6gqG1nuBjiwLEV5pzSsfqHQXP9Q6cKKJhgL7iC117uuP4Rw3AcGhD29WHbkUcFb2fji6tbEtbiDcH14zE6GvF",
  "key10": "4noNBH46YVb8A9bJ2MT9yrsshkCww6apvBmdXBKEQ34T7g6Uq5QvKp59xnyVLq5NuAdzknZZE7NZbgaMyp4MVDvF",
  "key11": "2SUHGLYV78hbc1qwN6MCVq98pNcXQk77exicaPW1Mf8Da1VCakCrekteVYAkduxUH7zmXUm92B413YvqExS4eGy1",
  "key12": "4YatVjG5JLVJ6xp9mjH1oKYNRNUgfSG1f3rdpniXR5Tr5fRVyWrtxUgpdrUYpGtmAv2QD13qnreU3x2VDjpj3wvX",
  "key13": "MWGzAzrVwyWgnLd3iFL8pApgdsujpUVRQRvKFPszHjDw1KfduLUPHd4P8YUTTB7amjE93sMyHPZx3q5emvtxDhk",
  "key14": "3ZXyKUS95cWMgbzXqyu67jKKfBZYsVR4XnR5QVtG68G73QksCekr3LXpaZTRtUVbB7Z4jqUWqbgEPR6vCpeqBho2",
  "key15": "3HQN3YMAPwEhvhMFCdVgRiwFyHsL5RPce7zCaMSniKEEuzf7vjZSWC9Ezj8v4fuFAGHeBJ4s3ZDo2eEYF4xbNCE5",
  "key16": "3JUfP7Bk7Jk5pon9rBk8kE2CCDVtiALcvKSKBybeQgSnmni2XhoZprBqeTU7RpXuxeYoZTYWhq69sdDdp9BdfVVv",
  "key17": "5oexyGxbSgBbUAH5VN9V3QyxTc9ZtCB4Wy89dNa96jmPcTibKEy4ZxZD3YKGemKu39wgWPXPUjmPrz7mzqGe5Gk2",
  "key18": "3uPwzzM69QvrdEgREBnkGh2W1p2q6BmuopLujyarbQjBAaszCfbB4p4B1psg5Nzfu1Q3cstJyoHzj4zPVNSXMJs1",
  "key19": "pHcU8Ww9tXh12nGvpws26rPVdz3hU4z87d26KTNYu1WRniDxLUxhxMCqJnFpDezZXtkabjwR4Cre3Z8EtK22pSt",
  "key20": "5JQCKX9FU1LrPG5BhvLR8KUF3W2UYPFr5zXRLf2sNtaLHr1h7cwL3oNzwse4jLoWSuc3XuEFDA9StMad8zmkUbJt",
  "key21": "24fmrxFUq2KXrsrQVAEqHvgzJkq8phX9925aT5fiQ8MiUjVw3EER8jCh8Ld4g2qmAK4iji1REb3bdiYafsJ9Jkwc",
  "key22": "3QwcRC66CF5JqjtScimej4XCPnTV4ea1R3szcZQ8hbYnKnCXkXut5nS7SHY1Z1pS6cp5xUW6F1SgyJ5bBLBd7pFf",
  "key23": "3qv5KgWoSwhCiYtPoiNRkn7ztcTb5EJmTqb8Tr9eXLhaJSbZcXSRhTbFqrsmxAzzhxhXdiWVYWgEAqJYmDwh5xEs",
  "key24": "42onU1aVRqBq4pRy7C89Gjyex3jBxG3apqKxR9r17hMoovCepfLGUheM3zBCQXutCoHsHGkkPV5HtpWxVoRNC2Gp",
  "key25": "66swAAN9krqA785T5odajrUVLeHpTFp5LCzXSB38M5zqwn4p8q5PqkaJuoBewkfa4rn8rSDpU3JwwcehzV18KSHH",
  "key26": "3X9GAqJD1cGQ5VBamfxTox8rmRXQgaT1g9mVQo1UfmgBWKpG7FhZiQCsECvW31yY2cE2GCywpBNEaaVjJMNg4g9B",
  "key27": "428KRbjP4h2ehSxTo5ujTfoYCJTru83YE4rXid1X8S4igjJALn3yRFJ2KTN8Qv8e2Qcg6DWL7smJMrMAv2Zkjhm5"
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
