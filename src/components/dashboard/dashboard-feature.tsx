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
    "67MhLofbHzzKc2wfvFcJWvREF8ypsijhuwY7cSbEyZhE8tPHAxvTAu51ueUReZyGjsQN9uDHsJq7P4fxSPQmZVZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wqKHtSSRaP2mt2Gd4N8uGmYW9WRTKWV3AcHza6y8mHU9Vi51HeeJ3BoUzDTW2XPCEE3EzZaMb3AoZJFv53DVd94",
  "key1": "TGPAKvqq3p898iFimhsgwvnYVtGezehCicnWAVfsHYkFApxqmZZfoy1EdejvJ4whYmMcBCXLKnwtoy5kzvPzpaH",
  "key2": "5pj3uNaAM4tvT3wwspS7E55pCZ38ww4E8CDc4TNw6kTSkgeE3CugR9QuAuF6dn2HEdsRZD3L7GTpfNdChoHnwD8i",
  "key3": "3bN689W6ghxgEHzGsQBYsC44iiRZYnW5ev8n2cKc7s2KFBT8BKPXjL8Vz7YdsE1Shn97FyN8sx6V81zeHa5sjHG3",
  "key4": "2BbJBTSHcEvcD4pJdYxKfvFXrzFXQRpirzz2RWqz9cTeF3ZJUGqVx6pRYr6EkkZKhpHeH9XcY7VBEwPKrVL7E5p",
  "key5": "4xnsW6HZzQYS5yxFPM7XfDsBG2CkqFLtHHkoudUPdB7rkTQkDi7mbrBfSse5EL4QpgwM45aa9vRDLDWicTAVryh3",
  "key6": "oxw1Top1Cew7en3DDUTh8inhU9NfVXE891Pyvp2UHBQPkMioWqHnPp5tw5y3hkRcunUanDbKJfcSaALtDViK88Z",
  "key7": "2oeo9c4FSq7PC2d18FS4ZmCv1ACcTKViZ7iGCHdfndMGKsfvfL1CXfxzkmbG39x3Rf8H9VHHuGiduKEHXn6BUMv6",
  "key8": "3sQ1gHK8iR4g38Ta2aEadATc2428uL9aJAsBUMFUtoghJV1kwbZLbyXj6oLVMqQHw2CLxDUXrBszdJrxGPyP436B",
  "key9": "qM9xkoUUsPxcT1r6QNaPkyQTAiyKWMVXhSYKwgPGDArmwoetGfwkEZPtf9iC3SfpzUC4YsdKuWsykQyywxJyWtg",
  "key10": "6Lv9PZQkX8mJqTa4GJhZfJoiGNMVY3jSZkwi5SfuWFUngQcxpCz1v4wjzPzVv8Aeh41uFNwFiT7RgSz5qUM3uQK",
  "key11": "AFJPA27GtsrgADY6CWJt9uBSqQtgB8YSryUgdPqdc7zDayRzxvQCWcD8YwxpvWnfFxRDxnRLRUh641fQCSjWHbp",
  "key12": "36ADQZS82Dmct6eNsrVjeZELzjTXRDG12aYBpnXwdVpk8UEA1yHZphgm5oRefanQw7vL2wwwGBHjQJa23G48tUhE",
  "key13": "3LyJq71UTjBFGpfEdqazoaHVkQJm34FqN9yAFTBYxeGA4e7RVRDYvNN4mwsqEnH7xNxpQe7dCgBGeQEJYBHxwPVX",
  "key14": "4ENjvzch8JmcwhCGpgY22wEfyTQPpVBfoPGiLHiBMarfBgTeQi1cPDossEm6dyG2LyZ5RjNv8e6Q7LVvkW5DTPsS",
  "key15": "4j5UirptdmthDJa2GYtHZTMCiB85kWiNyFTCBEhmuAcgxQ3xV87qrPsZitT7xQZApJC5NLVd3reBMiPzawNaMR2b",
  "key16": "5zbsouUn247XRPEm1qV2CcZTVdV487mKcNXRLrZCfyHxMBETBykRuF3WkkYEXHCKTJA8moANmLMZJWUt8EgUYeQX",
  "key17": "4VPzGe4QigmpREWnm2RVVNmePDrSwuEvRBZzSeVmSuGiaPcMP1PNBpmawXWRa3JVoaiPYejouREz9wbW1QoEhvNt",
  "key18": "54xqY2HTFLn8MWEWUgPY7Ex5wbe3LG4rvzUAqWgmWf83EDHmppuxasXTLAPm11j861MTTPWFmo2QoAtyp6dw9a9W",
  "key19": "5GMstfCWsr5A4cUhYEwH9Z8WsfZVQu268vkTKW3i79ACzFokyqND5bR9TKYyij6X6QN9uqEdTSEHikRepnPgdcAo",
  "key20": "Q7isViQjehUUx771Ryr7QYWhXrp4Zz34wRjPXk8G6VxwbGFmNGWyxYseEkW9QShoPfY28JBJAmGtBQ4uJFEDdx7",
  "key21": "5wWXX9Z4d53n6gZaGo9sSPBywwVWuqWFqUC2L7PUgPXTpKNKZaYN1cAHMN1GRYRNVfu3mTiVSAjdauAdhiyCnycC",
  "key22": "iDXcGQ1pjJGhbfMJuNvimpP4Bfa5YWWaENNqFYDUQLS2vmZEpPRZZE9UriMPenYVxNuUsptuVyKeRL6J8csLUmW",
  "key23": "VGEvM7wp3yg1P4wzo2dBcHZYYsyGEppKoNUhVmBaTeYpDsGCCHsyUqwN5GR6h2DMriXwccnaMLbq8mD5yhsBG3X",
  "key24": "5P4GFyzWxxjDeRc8AJx672QSfLvRs8LA8emivbc5TnAMUUxvXF1mLWUcqWgtDYZ6sBBPv57EZNwK5zKYx25ymvAi"
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
