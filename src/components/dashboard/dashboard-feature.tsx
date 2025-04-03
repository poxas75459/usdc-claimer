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
    "2LUXeYwoTSxfeFzP28zXNsmpU9R2tHU3XVjL3ou17sWSaxj1vz5KAZj3oKv1gjz8n7jE4imVthgyAoe1BoahntWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZiK4RLYQrqLgfNUxLiKZTEB4rL7Bim32FwQS6SMyGU3GoAVDZhcdp1zt9iBjxjmCHqqRwf6JmAVvNx998xsruUb",
  "key1": "3hQnSzy4h7wAVFC74UYti9ie5dJA1oK2WeAUAbjZDfTtUUCcUgxqLBAe56jWME8ScDf64i76ULrx9qQt1WVBCYv1",
  "key2": "5kh6B5bhhgLvFxcQDtVR1rYgrZ6ZuBchGYHP8srAmkozB4w1LR7S2uyBBMjTR4kFgAbn6V62rVFUxFUrRsKLSGPD",
  "key3": "2SDxRuiKWvWaAycCdRfW94jGhNyARxjKXq5jvrPS6N2Bw3yMfXcZn9NKLtprkd4YmGqBnBaoWz1kAh4WyHX5hZmq",
  "key4": "3VyuQHVPCDCW8DbzTB5qAsruScRkdY6ZNx8VBmgDNnPMJZY73H8iw1D81hsCTDig3jcAkfCQvcTKJ7XdL7Fw8vHH",
  "key5": "3HDpudffP9fPNQ1UkRnsui1LtvcztVKhPgxut1ByPnjiCzC8qu9394t4PYH7FvStZJoZcX7L1B3M1wJmejbpfaU2",
  "key6": "CXBiQC1wAvYWXX1D5CmzNoj44JTpA1n5Lm877Tt2YPNLvctevZWzwmXs5NWHQqWggcjHXFMnaWDuWFDfjC26UkL",
  "key7": "4KaQ8YSgikJqAkEWztrRGmmPMCKNjddxdFhnsNRbjCXMatEhXWYxHyiSbqsAimjbrvrrLKeiRgVhCVKKDeycQ6mt",
  "key8": "4WV5xYmp1NJfaXHMoAcqG2PMrsyDY3tkVMr85Fbhte1b8ouebiFnZamxMzNdCzj5SNDLoNakkLyYxmd4nuU4qWHz",
  "key9": "4rnJdjNDBDfeaBTnNu5aULp8pEgbMwv2rzLkP8z6tAfJVutp52Vd6chZNzTr6Lqf2NHGfUwyoage9o3iBem3Y7bQ",
  "key10": "4vuWp3S6wPvU3GNWQG5KPZ8xB2rrdfwqXTWRQdW4q3EBxk1W4ZKWeMFfYRpKDmGcJwWXzTHRZUiwTjm1Z4qx64uR",
  "key11": "47J2tkKLoBcK8hDR1YEikJD8QzSGfETjPUHUi1iWAKRNmvfAp3kUsh3vqNTnSKdiQxqHop5fP2DbbyGuMtZ8LPF5",
  "key12": "wkAQrKAVfJNp5HgoxQ9EwkUKfi3EAsByR7YxEn42Z8Lj8NTpaN2e4E6gZaeDStD4g2xTAQkXXK5QfhBn4pf2vvV",
  "key13": "2YzUvBxAZYrXDcPZaLdVXxuRn1KDaUB4BxveJgRkyoFdCAyA261Uam4koz8x3rVrm5x3NWYqReG28wnznW2Fmzod",
  "key14": "35QXQt9b7FZMuZuTnatetCeeQsvbwsJP8eJ9nsrorJmm479vjutTQnFxP93z1mdFCiAF3b6CLPDbc8GFDazapx6x",
  "key15": "5fDgEkWnMSSdYTiN2ZynC2ZwHvxGL2QRPCJpvtxbXzfmUpWmz6PoPXGArH8sqiyUogHCKxsQK5y6Wi6gK9F31HZQ",
  "key16": "4zUM3A2i7krDiAbbL3gjXMaV3WGy659ymdHyV6PUtZLJvnX2HeBEPAeuM86rJ4Sku1fMcr2HguGXKZdCkRc9V7X7",
  "key17": "C1nQ4GA5znc3bvTZZTLQ35tz518EG4PiwmgGyBFZzQmkzuu5WueeStqecfbsX8xyCDSrzuwRfqxbYy4JkTGvWmG",
  "key18": "3jX5tuEXz91DbDqvHYzobhk5WfSdB69RFEv273sEoYBtY8KyjScMVbwDYNGBSv4CfBveMM1tqiimtzRgaWzZ9xre",
  "key19": "2BgB6wSmwq8iRG1VUbEP7zkWeKmdDmQ9tUvEdv5pig6hUMmtXVyCDYsubM7vt7pQqJxfaPCYc3EFxqXD21dUArfX",
  "key20": "5RUTfsGrnMLKANV7jXmJhVXXHtVWsT7T5jPRBQvnG4PAKB4ije6rpcQq6qS28VwqRCC7rbSH5LmWNCfPAHG4Kgyd",
  "key21": "3GaiNEPUpfx4Dwq2TmakyRMN9ZC5X4N2EUUvbSXsbuuU21Rf22U8UU99GARkGLMuTeBqFgy52eqguQQSb5AigDWX",
  "key22": "57PU5V8H6oZxmrdKA7iUfXcSNbXQueZxnS8B1kxgaPNPZQZ8Lgo1qNLqptTokZK5jjddg5iKo5iFkfky25PwGvp1",
  "key23": "5E5tGjzPPCbEvBsFqvdo899wXHthUgcFnHXfUZTFxWf5xa6a4zTBnUFp7gJ4uyyJPSQBgQ19oPhfiDjmUKLAmXYb",
  "key24": "4rDW7ep6tcTZTuoJT7WgpQfupbSAusMPpMmarxHsu4LkZEHqB7ru2FEKfRDM22oDEvsoSBVJWnfsBxu6N96sSAT1",
  "key25": "3sPLQ5MijRsxzsbak6MCJLEGUKGAWfD3DGXyCEjCWGgBMBeEksq5b7FBQCMymVUvi7Ado96JhcQjQ96Ef71Co9WP",
  "key26": "b9HWkbxpbGXXCr67Bzab7wXqKt9AP6tPY5n7WiRiQrwU1ZmUnYX4fpvV9KafHSWMXdD8s1QTbW2Yf7payLWpUCt",
  "key27": "3VZrktBC79ZKeNKomr2FjJXCrXm2r4SVrgJZMLDzVb958scvgrj9BaDjT4wRzUV1LUztZpLTCcSDZjtiCDBCxdb9",
  "key28": "4ygNuzzY9mjFT3wmLSrKbJHhmQA3McNTW5gPzF1pHGiT7HmPAKW1wbtenymuSHfnng4uPZHBt7qeRRsAvgEwmM1v",
  "key29": "bQTtvht2qM65Qy3S5SxamnYKTZ3YajLbh92YexDNuZCaG72VfYRNt1BHJY88SGG53ob5Z5edaMmiMH5DAps7CDu",
  "key30": "3Ut5wjiKzaqSRKZ25YMTH6RB1G96LZTpGXAPgf1CTbQHpEZqdneFgbAMSa4BUec42cUcJSXvEp8BBPVh4AS6oiz5",
  "key31": "4L8itDFH6n9XbN1MNUD2gVX9LtAoE8XXmYDBxhQk59Wdw5cEdQhgN3AkAXyjtZXNgnGT4oYHYJSwrGSyZqnb4NxY",
  "key32": "etAjPB2gwzRaroWh2c9LuF4JVQmhvenWyGidoib9ndn5TPEcPpyZJ8f4AY7Pg6DmkumsKrm1wehN5BoJvu8ZBU5",
  "key33": "mPj6hwGbMwVKXYrucATs4beRMLqxuWUXN4ELmbHAKNzpdgQ5DCakbB9RMY4qTdaoeRacWP5KzxSPUQA8VKTidRk",
  "key34": "4SZyREojoEvuxcstNzZFTkxVUPQH5cpv1xu5aaXnscRkRSCzLHrvJ3sYaopLnEdmkDCM6hZ9ekHVnnrNwPWrLY6T",
  "key35": "itsNmyP9JSvZ1itrTxPup1mVyqKu1R55Fmsy8RpCKy7PswYPEQbBJQts3dDyrWHwQCJPPGqkCk9xh6QkwsoJWMq",
  "key36": "5ds42G8BbxUiUJ1skEBMrSdMnHDtYMdzHpZhjYXmkcRjeZVa1HmmVaXsAvSMWavhf41VNp8B6TeLWdcUEXLLrRR9",
  "key37": "4j5Z5UP5fKxw54MfV3J2ZzPYkjXK7zoG38sSt8K8deu9xccs1bBiMNqih2h71Q45SYKaSeHm7hLzhAHfXsXVQaAf",
  "key38": "horgrrMzoYAXmtLrDfE6WHrBNn5wj6FEMVoU5RBDnySgb8crdFkDN4BrvhWcbKKryBxMn5Uaa4nyazRqCKVQ9PM",
  "key39": "TpesSWKpBo65pngtbx6mc6sHuPfzCmoszYEtEqy4BikwzKmDFTsDBmLKbFFkgj42P4Gm5U13dPH2CvKgZXms5rF"
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
