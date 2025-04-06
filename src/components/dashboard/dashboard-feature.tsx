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
    "3emW48v1CQ4dvJ2mA7BsjRLcuWVbsswb77sJSu4V2d6irT2u1vpwQBnW9kK4vYMwm47ERRUi3UQ22WXUQEXxRw7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mqehrj3wW5pzLT8BsWSJ8opKrnrjTMqC4ZYRR9VdaKD1qmxJPFvUay8zauq9F6Z1taTLsFtksaB33FK2T1HGL7",
  "key1": "4jn5dZWx6tP64h5nqa5FB7MWZ1cx1tz4tkMmixqfM6nWixQGDsarUFD7inNujRcjhFvddAjAu7AkggpPCB6t93u4",
  "key2": "Ct9cissp2Ynm1MXKTQGRSmTX1ih9q2fw2y9A8n9yDxnig3ZBvSNosLUBhDKZrVe3jDYzLrSYAYZsAxT8FEKhyTj",
  "key3": "65a8cTqF8S9gd5ekHAYQhrN1DezePmDJJJvkeF3a95JXDiuQMzegjCefEQgEbQU2fkqZxYYhedCxHzcMbfVjL3L7",
  "key4": "kV5gWDiHB4hFhKbPFC8zrmNVaPV1HNAZNSg4nLGUcNeFtfjv4DJqUaAwjfsdy3rEBdbYeJwq24jiEohfmC6yL8Y",
  "key5": "2FWqLF5x7yAdeL72Tsvqz8pei47URoubZjyPm9P7aakdTZVyFXmX5YurJyKFMTBkG4JWjfUVtr9Br2AwnXNdh7HB",
  "key6": "2QCvS4EbEjWoWMiwmz1ZdzCErqgGxpbNZDSq2S2ymwLLbDHR7Bn5nHzKJ2BvfM8f1tPp7mZaqokhkxbRgsYsPYnp",
  "key7": "5gp29EVZ8Z9NVsvF9tePh5htumQez3LtUNJdo6HNeo1H4L6Phh1LwaHwTCzj8g1W7zpPoSdxQXZXgW8A3vKjRBpz",
  "key8": "7gKDwEVkdcwgYDDDUEqEMZo5xezdMm9aMYyJyx2pzDiAW1ZJzbdEsCrXioWPhV2juDL2kXxwKoQ9kMRacF4vbMB",
  "key9": "4SkRYMNgCwP4GV8mt75eUws3uSs1g7pAYUVQBL1DW9tHnM6qqQzMniqndonNrpT8miFW13Z9dVMYqFou5SGFbSLP",
  "key10": "4W4GUwVDisFC44rr7DehcjqGuPDT7TRG7KLG64BoQPBdMHjQ6c23d3PtSYuWy2R5njpytX3qG9SwqvxjbZkZQGs7",
  "key11": "29GvU1SvDomcRwyc2Sh9kpjm8KY7yrA9SefpfEVos6LJXmk9JAX4K8BqXTCDYkeqUrKfLMCejQzrTVsMaiatNDP4",
  "key12": "3amnbD5vS9FTyyC5xqH87q8Ad9qRLpidfWauS1XFrpKXksDRpwc8rALFw1SzJJ3mEHjuyrxuN2xZ9TWNzef11NPr",
  "key13": "2HkRwEES3ZTMQPfa85zLXoDG41Bh2qabfF85bNZ6M3GafLZ6pQg9mpGep84E7zLX32LD1PJfhMt4cbaiQk4oFA9z",
  "key14": "2T91eV2m9ZndxSC2KqJNWSTM5Rx624TrLFgJHqfMiPGT3AFjZVoPZS729w6qmejMiUsKXrE5qpUVJQ4uRtoJFe1V",
  "key15": "2RSjqZHvCs5QTKkEUUTeFDjTR2L8XLGXZYE97WZyL546DQTxuEz9kf8oFJ763b5yLbiuoaSkyKpN9aKCVJ32Bndk",
  "key16": "jyiwgxTTcD618HTqWHPdk3imC4e7jyj2G2QFxVaMLTdGFKGUjngpTtQ89isK1vZWwCym5PsbKsTgfDrDTJAQz8y",
  "key17": "3gJjz6f3GTDh6MmCbDLj3BZrzgUxNfxnLzgmEB3NEmj5cPCzNJhn3ADH9ZjvNG9retFmn7Tj9XrHiAFCx7D7oiTK",
  "key18": "4Krr6Qt7won97mmaFHCbvywYhguRvAmNjSRSDrJYdrK7wwJe7grx7UanipMrP2A7hmcu4exmSg6qxGFn84YcGyjn",
  "key19": "37MmdwCj1bCkfbP1kQhkSvwJtpxmkDQA3X1Ki1dx33GiRw6jicnEAYjP1MEBKG7B79NwMPrUTbzVvQJau9USBMo6",
  "key20": "edme93xGWWyUCte5jW3enaHMk64CgHAF4gF47kdoX6gVJMgZ7ExrxmfTtrFb7QDdTn4sZsyLgheqFMrdUhx18vs",
  "key21": "5Qzw3H7Uvm3J2cdDBbK3EipPMPLBCexwFAf384Q5mrxi31pCJZ2msTmjnLiG7PDeGzxAci2XK9PukHDmcMCcSMcz",
  "key22": "32zcD2mKhJcKWRoW2iEzqK11uXNqJSEyhByvkgtdR55uFAQHoQUD2f57YwMGr1C7q2aV2s83LAvaepxV9aWPNHu",
  "key23": "3pjJvWgsnPJP4kcTtXUPKeULKqxV8qPtowo5ZkwsHaedPt9dDSDAKp5DjQYNgQhDwqGRaj8fRQRCNh3XrKywraSG",
  "key24": "4uQE7bu4xYLGABSMX1Hb6LeomqkKYKj2ZChwsGnbaEqjf1CciwGGLgTvuVp7hME2sMBipft4CNuNiCpzztAh8Wkn",
  "key25": "5eUKTJjCKXwLCdLpN4TrfvgGLBWdihtbW5vzjeaQZXDMbEpSce1S9Ck5VThZM244Bdc2yQwssKUYDvdvVhkXoVUx",
  "key26": "3n8LWKm7CaDh3kbfUy3zoox41DedgdskEjiPNDjK59cXnVSGVsKbhV61yrF2ggSri4JfrNS7pSRsoh1vk3VjERGR",
  "key27": "61uDwYyeh9QzjZ9fwdEPmXnkYX3V4sHue9PFqbs4LN8iLZgZjZ1emiReFWf11kdwrBUwjeF3oCscVmmCBLMbU18A",
  "key28": "2GNFdcDBJ5v9E1RvVEMJQMGxYy6CWCshCMQjmEQN1SBEcJ3GBiMeUFhn4pv4bt1trgwBQPRajX732geXP5xMHTdf",
  "key29": "576CjoUt2ocG4J5rjnGyvbo2k2PJBX9HoTFiaiEN6WugRNTMzX6ATDiL9toCgo9izpPRD224adNbu6XACXD8eKpB"
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
