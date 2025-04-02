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
    "3qjzUg3idbYXm2PwK3hPZ3w8Cyr9qiHnJaeBp9AsVcYHUa8k3w9n9i1RVfN4SHeiXQZH9Zy4sX7DhPuS7UeBpHtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5ahgS1hfYw6K3sR4sqbD7eRxGFaDdZuXz33p7PusHkNPhrSe4W2ZZoySXi4UqH96pYfhQAtBbuNV5sVZHdXXRs",
  "key1": "4yQQWE8LbgP3xNaxTkZv1qMw2fDb92DwnPwyQnuDypG2hvbypaf2mxocFChPMeonFunmjbzjXbZfTmhuUzvynLVz",
  "key2": "2uu34GnAZunD9z3L2GxxNPF8XxowjwjE1dh5CfAzd9tBW8P9Zs4TJAUNhcARGnJutVRXncUiSrRr1AYbquR94JWB",
  "key3": "3odD9aePkCMFJmjgEt6XF4BPAXfs31TK7sGtuuSuW5QwKgnALiqgpvZ7npVZDu89KUsW3ymJzRYUytnsZe8ifwuH",
  "key4": "4PD24kQJoCnGXRqt89ne7xTLRL9k3qK3ZzgSbsubvejuxmKR14LhaR7aQEFc6b7cHRWa78PANZ5NnY4EhBSnehYh",
  "key5": "56QmttSsjVk16qaJckegq66zrYDEocrJ8kN63DQzRLCMyhnHzVnrxirjveSFkKehX5SUmgN8MyoPsynRjsZCib2X",
  "key6": "5smJGpmraiRpQz3JzVAztccqmAjr97YFWRZsP7Fq4tfFMkSbQf6yFeCMvQmgjYA9jPtm6rgN2rWJL8LRp5symPQd",
  "key7": "4umsK4KjbgUWKwaYzqFzXPwaHVDYbDAmWf23xebjHga9BDVxdVCgZnwDsKdcfygbUeBk3SNfKbN8zffrhCfqu7Em",
  "key8": "4ZtTfDWAE5jDdB39Fu7dKVSmttm6T1NfQX4U2mroceVa514SUBrnV1dCmAfsZzvfyx9kZ3NepbnWctwj3pX4mxYi",
  "key9": "4qhbi5sRbVGsVxg6ap46vaCq5VB1Ca2v1A4V5hgGETWKfyj13xdquELJvDYmKrKPnATXatwfzrzp2tmGXcSiMpMJ",
  "key10": "2yYGnWwQWRzgi1wz8AkHpgqq8ak77yAaxbQowSbfUaNgoEdYPGoZHUvsXahRXmKdsCYUEJHUsDbWCqBaznf3WCwN",
  "key11": "nQKjhaYerD9atmiCSVvMNa9m64PhQqMmh2FcTnDthJm8C8P16JNYBwrfQ5jg85XDyeXtLZdnpHVL8rsznU14wdH",
  "key12": "52mUdxHy6aGjB1VdwZLNGuja4qsaWPfJUTfqd56nRdz1FYRRHJvXKYcYmPaudSAPvD1g95vTThkq65aq2jXH7w4x",
  "key13": "VUEPpDAfUZNPv8uGNqGPXZDV9SBrXs92aiwuEAwUAvpSRedAtAMmLt3Xu1rF8FzF7Jtzxme1PhoVpaXzvth4vQA",
  "key14": "55wg6rUeFz9jzn9pk6bNzPvGhXbTM2ufXR5G42KnESFHTZXH5bwjtBsLXJ8Ukp5YE2DHsqqG8LakXc5N6q7yyqgb",
  "key15": "3PsKn6vTB1Uh3uneqqXow6CLbsaYqZeS2ig4jJzL4E9NVzCAyR7cbTrkSLfzmVxKa9WodSSj6JrxaHDEyXBhkzXW",
  "key16": "M9ahcEsuTsxsfvyPozRsC59qawNTKFU74eAPXhmDmoxzC1YqxJ7w6v4LyDfj4qKa2P4XrDeuAZipCoJNPzoXj8r",
  "key17": "46RoRHHvhTJSnBCVovQnaGcpSRBDaowv5NCHXhQsetywzSPLKAr7tqYGu9ALARatAT3vZKZMsa6L1HK1nAYrapG6",
  "key18": "46fkGGCTfvxcgRGo3zWoJnLuWBCf4baa6uEvwXFYk1KyTSSTLF2B1hxZj3A4JdA3aigLnVJCC5rysoEXTGMifhvu",
  "key19": "41NNjkTYqz4gv3kkZPpefv7XXVMxH6Jt2kwYQzY7PDEXyzyP3Yph4tRuyfC2DovCfwgZCUUv1QCgd4HXu7Kz32Pv",
  "key20": "2ujv12dcoCTxFxjdRM2z3LfpegsDYpLpmdZ59G16E2Xpsfm7S6813a1gENKEeqYx6s8psp7XeHxMgX8J3MAcDQ7v",
  "key21": "2fXNmh4huFRURpukHQpTkutrW1iBwhQULW2LtbjPJvockH4ckcKbNV2dtXuXKuweoznjkzrf5beELN2dBL6RxgNM",
  "key22": "5ViVU8hG2oYyMekwobTxaB9Ei68XwAWMtvgUzitHEH3cC6EcoXcmAwCYknvmdoycTuxUxDzpDpyggo4G4zBGx7VQ",
  "key23": "25E1LsNkoAcECzpvLmQLyrFCspypRcJAgVXmwnrNUEa9dvoPs2mHNE4wD9kxV8bj1ijyAFoNqteB4aBsAtRZUVy4",
  "key24": "4B7aPdHzdSgQ68yhkR3fSzNA3akDyLrqJppCWnEqjpTYaU4UUZ9CmTLsxbmgD56SgdTKTcgu7S5yuxSEzzXWr7Za",
  "key25": "2cXENr86qMmNzmaExPmKz2afm4vCy8vZccX7PyjkX92bZmmBnR8Rz4eheBShyGMeWm8sDjhGR8jYhj7Ekoz8X3aH",
  "key26": "4iiTuwv5LZRxFMwLotbXdpnX1bnEQEXGndzSfWm12e6GznT3iZPMEQGMVdcTgzdC2wpxZ1cDxzwoRhRh1NRp8xai",
  "key27": "2m6vzUZ3MdTQeikkpcsuVhntGTjWQgkuNhuyAFHUSYKyfkAvtQQubaSsi8NdPhrYCXP7Z177F7s7HN5yF9meo583",
  "key28": "4t2e4jwPVLSFikp4EWxMSFRV99gPqnUWF57QBnzPXjjVfV1Yk8ARGtiMXWxUk43KKc1XKt3gKc4xuVFCjKTaA4fj",
  "key29": "2LBhPjqRRbeSpzSV8SFoRBoNx9aKoBSLutas5HqThSpKHzjqzmfVK4sFh8wz4sHUm6n4yz1npA5YArhFduyt3X13",
  "key30": "3sUGQb489pSMPyxEC7rMwNfe2VBntrmRdA9eLDmAmqqA69GEA6UeDpTqaVUmVby2khw9ahwVfuv8535AX2y9rPnN",
  "key31": "52SBhnq3wzxiV9fFkGxtFL1nJx3M3h7TzADCGgdXQ4xo7UzNBMrDRBAk7KQs1Re1YzHfxjcWXUZn4BG6XXgLmuCN",
  "key32": "5qrZhuNRZeGDeAUResMXN31drnFKwQvf4pkKxC6tirWEaHxcHa1MGFAF8Deu2LZpGucV9Q21PZc5QVKqwX9krLUN",
  "key33": "eSTT1sRdp13Z8JXNw3ApJw6L5HHtRx4hiEMM4voTvHzoWe5D49Z3BBYqjKeQRBztV5jW6nQxzShK14PDpEJQx5x"
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
