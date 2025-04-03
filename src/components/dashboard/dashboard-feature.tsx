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
    "ewNUXJ5o9T2ZG5cw1cZFVh7EpxUC7WvmA6cyVFShY67DmvKBPfiK7VEzQGKqji2zYbHPkT2rWSueWshNJ3ww16i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrAZbhvYGpwBTFpyTTX1Vryqdmm92iPGMSjiQZ1sC7gDNTvVP4rJPEUguGD6tMaQqPtLx4g3sVKhiY5LjM3ZKt8",
  "key1": "4M66eZxdLgGNmpc5LBU2DWEeTuCwSy7tiPKvqVDMfMK7GhCTbfBDnk1VmXiUDJuhivMkPHsLEz63WeqsZZRt3eJh",
  "key2": "2iyFWDq7FLmx9b9AoFtBMPaEuYC51MDtZUPiDKC1ZhdZRMzDUfGRieQt1MvXE6zLeN4LLzYhhcFWnTJ3cPYSHtJ5",
  "key3": "X1HL9g3jc9Kj1Lbw6W58GAu6fSBabSYDrTsxVYoAWniRZb3upZF2CebegTDRwuDRaUToZnvS6dEbn3zyp8BerSR",
  "key4": "58PZsLt36UiK4BhR5MVkGT7JfVwWeFcRzbqC3Rh9ihZBFiyskj1MPxip86m8c7TNoazZMeWk4pnsPosmDVEC6XNc",
  "key5": "5iLVzitjyzx6UotaZWBdmNRkn4j6FyqA3PpNEd24CZoExZDKxqFLWpmm4FeEfvZsaMzDrRS3qeqrwHX9vWVtqD3W",
  "key6": "bf9jQBQ7gGwcoafLPRcZEsmxsig5FwvamJfpQPPABRLQ5GEhgWdh9vo3CrnVvUA5znVXp7TzspAh62TmmGLpnBz",
  "key7": "cMtksc8EabMx3kkaegXPp7LX8XFjYCdVYUzTaqWw76sZUcURPg1bkAXB7xtNF5BecUFX9rp2tr1dDmKoxf5WkK2",
  "key8": "66VTbFJLxYgu36g2tYURgspmdGVsTr96v2msWxihakCo13au3DKJWNfszjjbf14JxqjvP6hshfgwFZAtudzusWDZ",
  "key9": "29h6aZDwpoPTEEJia2YzHF2vvmBujgPnaDt4b6Cb1VEcDVfSquAwGTrfffNk8RSEBguHfkTqWA26E92VuPxG8pB9",
  "key10": "4F5jVMViTkQLL18wNVWzyAJ6tKUqJH2VwWmEeN6AcxmPECbCPTW5WhxPMKajb5yjBWGz64SQDz3jKufA61K57EQK",
  "key11": "3QJaGyaFSb47jw6UFLLriVAi1MeWsPZNxNbQ2V8Uay4Xoq2pCtsVKqWpdgWwEAYA1kHS1djGJTrpHVdyrF6Q1Fvq",
  "key12": "s5hieDhtvmzAtvLanb2equuKkqkaZgPVLv3nqvExhmdBHmhp3vPwtVUDC7UGkD1Dg784Q8nyvcizxQ37YLvjyqY",
  "key13": "2dgPu3xvZhJhFxSLsKF8zNafWHQrmWAcczCuQcdaGYbk2uwx4YiPFTLWSHW9N6uuPWf9nVL61kUPQuQfSL4yrtuN",
  "key14": "2SFZ2F37wkgX3mrJGieq2vxKmTkUvriKrsDSad6wPwiPGSUHioGbxvmN4jdeBqNwcaXZYjFQT5Kb4mKvggnQE9Fs",
  "key15": "4rQsc1uj14D3W6X7xRsue4avMDSFD4xTyuZ8ebjX85p1Q9K4szMK4A5k51SN3LfGRP9a63UGT7DwiWz1fFJps7PP",
  "key16": "2ZTeMM5p3pg9AXk61JYVCgwsFUT4gnHupGjgZyGH3cy9UtVFMQmaiePoE1uT9GfidsNdARwyC2BabdysLqzizekt",
  "key17": "6pnKLGxfZfRu3p2ohqLj4y9e98jjvrgEE56DXbHEVP3bNk27mfRS1FV6gqv4HC4hxdsJptSeBHR7i94XNrLbMGA",
  "key18": "3rb8V4E711JPZYA6ezYA1Kx9Nk5xMZjNwL8WXoSxUxbWNrQUD4jj9C7w3CdkfbA3noqS61wWwQKfuhbMBFsPjvk3",
  "key19": "4eiVKGeKYw1db5qmcYUaFErqxFRjgbNnuV3C5iGMPqKQiQb2vxHgi4RaBHhw6U6Dkeng16ozmj1K8Y4juTprWZdA",
  "key20": "5LEVKRLagQRBaeqaitp3d9SCVDHPchfZ8waTRJXCaqfxRyqqptniAjiwVrTWi2VYUKaA9v3tG7Qucop4rVZTwsoL",
  "key21": "5c9pLD5pDb9BQXnGjYPzeYqhMNbscohgGAL66iwXxoijHPrkXbR9RrpJhYaSu8Y8FQjLCZKWRAcga7XpvEzteBRg",
  "key22": "2uDMSdnRj7xHaq1s9CbfbNuADfwezFUWHXhZxnvPpPsNxGVWQPRjR83uZX3Qrpyo8xdSwjmDVPVzRqwUkPhVcAhZ",
  "key23": "5KdbLHdeeWpak9y8CmZ6MgbPEftiV1wnoeL4pNdsWaW7eR1Mm2pePxwfChVaogVZVYCzfCno4NjHTfrcksap1Dan",
  "key24": "3Yza12Kee8h78GQvibRXs8ssUYgKj5QLYywPjaFnHhbx7gr4hZ52pqs85Uyu6cfsb43BdVTtLZhxiKaXsM3xfYp9",
  "key25": "2XVyXaYzdaD5fovBWPaXPcfJPfQjPBdNqCZkwWgEfApWBtGFSC414f143rLwvkF4V8YwhsmgpNr5EF9QsG7i5XT2",
  "key26": "7RzALCsJTfy18yfyrhFFrT2UVET8SHzJYEzuoXQMERJmqAcq7cKz8ECokf8gQTjdYyGA9afGyYsCHcm2KjZPCEN",
  "key27": "2RDbN3Atn5gi93Q4jcGBKjYETr7xfGG5YnoVCikKKVDDJCx95W8W4MuEtPLkaJXUo3gkXpHNVtDDjbKSWsvD4TT7",
  "key28": "5e8VUr9rmjcXd6DoeqoejcmdfnepjiEX9e8LVcuLX3ufsfkETrhWTXrU7g76ah9sV2WugaD5mJuSZnckkdDLZPw",
  "key29": "64U1VKddEawr6aEvT4rZhhEcj4eKo9UspiYm6dtxa7uXFSYPJVdnqsgf8ECsNbkp64hQtngvZj7krdYoSFFrnqRK",
  "key30": "5Nvzm4kWRrPhVGBoeZTYJi6pFyZ9FmJNgrMKUbunM8KpNgEE5JSgzv6QvAWPMbhxLnBuip7VZH9z8RVQ3VK24HPk",
  "key31": "5RNAwzn8AGrZHzLTHqUxYbXKyVDFW2oF2twTFdR4Z5SZMHxKe82Ny3PSDjp1duuXvfoGMeyWFxSfbYLEJKSb4mGV",
  "key32": "vehMHwstJG48hE4oKBwLpKsqHqetibT6maDiDHCVrrqziaEmDBcLK1rTRbbWzzXGjkgYeLNrdXb7HzhXAjXtYBr",
  "key33": "4LXPNTC4GMkvgnraSnJvBXZ1Uuh5xeCUVa9SCJLuxU34gKvuk5NB9aciXEtLATBaqU91HZAoR3gqX6tgsRA42NJd",
  "key34": "27BELqbbFN4tQVzvmg4feqd3rZzpTTTNY2tLCnmSnCX9QhshDSTZSTYHuKSoJU5zuJtFHNSFNHGPxoNvjnHnTbiz",
  "key35": "2H4dpHw1i6z9XPmj7fYApUua5kR4aMHpXLQgNGedEsJkPFZ8ZLf3pV8xr9ZfVWmTE5pwDZFbicGtGbmvU5tvxE8V"
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
