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
    "3M377tt6VRv8x4EkiwwuV1KTYi4ukQEhJiQsFHnN2hM2VUNduTRZYR4nENAHLn6Z5Fmvvuw8zw9XA5muJBRhMzLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hwa3jzggvJHXHR1mq35k7qaypXM4F3sKUXubrzoUKH87Uf6i6uNnkbKMuk5CBxnMKa41tWf4tGL3dS9KorTTmES",
  "key1": "63dchTvbHKDiiSVKdspkqeXQALKsXWkD3BHWBuc88nMFw3F7fknNdZH8wQYgGmRhfn1gwXYwwnuKnpzM3BRVfivw",
  "key2": "4gdjVaNT8eiqKeeJhn24JKQgMuooSVshoFEQT5sKj9tW3frRhTYTT1UZ2PBxu55Nfdy5GavyrzDhkTCso2tBheJA",
  "key3": "2fUhhrqmcGSDGGiV9WfA7tiR9a3wq9zrMQ9xuWQyJowMc2ZEj3ojvb18eic6iVdv9pmy6tgtxjsuMJtFfkgxTytX",
  "key4": "64u9qasdJKnavHW3dXSbxCJnYxbRxJF7PobbT8Eo9x2yHD696de9D3TCrhK6L4FtfX7GogpEQN4AsBTyhNHRUEgT",
  "key5": "21o4GLYsuCUPocr3xeu2qkMwN8BQXRQnUhz49kTX1RcRHKVgjGrkYAnJCWo9D64CwYCBroARPhCFAq3N2H6vaeWM",
  "key6": "2rBudVyCejf6gQFSuc3gA9y16uoLPEMWb91X4KXVvCWiSEX2WCzedn5XDAFvrSGGkJqVsoYyk7j3CuiDrhnbBK6L",
  "key7": "5sJZCt9ezGoXNvYxgMBF5UDMTPUKYheXS5tENM7y7STzuYX25B96a1uX9bHQS34gzyojqzsVNpxicT9zqcA3W29c",
  "key8": "4DVidNpznzYPTdvtMPw4oWLjvEd9r2SR8CzuryjJMMFwQktG6ax4ny6kCSMeqsvHQc5RMPTkr5HfAkvdxb6eU53S",
  "key9": "myxntxn85PRJGBAJE6hwo7AZ4wtEpbx7UCmF7KXnXTh9bZGW5KwD8H2iJ5J3q2XHpio2qV2L8ZCdmevSZY3VKfa",
  "key10": "3mzDCVNfGYtzBqVRvrr1Wvid916mcPXdYAP7DrMWi72uJsJGZcdS2gXp2RGtHujeheB1CWtJReLuLJhVetEADkep",
  "key11": "2bkcaXguNqAmsEcX8HyYcynxsySKEarW9EpavAihZ39YeryuuX9bU8SJPRaVgF1izbE7ZtKiEVTAN7KoJVimim49",
  "key12": "3SxmtGxCoZvWqELhZUSuwGax3sM6BRxgwLtGXXRcMDjzA2jZL8dqcuXGmPf3NTmFo3RoATJe8U7E7FDJDbtSp1CJ",
  "key13": "64NDSKxpQTevcTxP8bofbu7NTUs66pN37fewf3Mtj9rf1qiwELPYU1K1coqAtF4xcZVgqzBKFiJadqC5Mtspnzxw",
  "key14": "2hvxoLqm3pmzHQcGyPVjp83rYjDtk6toxxQWMVdiSmax6RHa96Wd4p4TBdP9SQeWRHtTkyeFejVHowi8UsnkQiu5",
  "key15": "Ys9J4U9Bop67WfX5RrPUcS8HxA1gVNz7o4FjrQbgU6kNgpr7aVAztyWzpSpP46AzVy3vYijZSiwt7tzZCNyEC4c",
  "key16": "vgLFgrVWQUTdQuRS577rB3knzMW8WhDx6YfA6G6yLa9GqZKkTwwZ2212TDrqzj8fDg3pJgc2aUAxxjCGeGKxEca",
  "key17": "48rwg7MH4zmyvvRBkYgJThz3bBRf7oDTwCa2FpHV3XN9rRXEo5nw9hjm35BYjaEuTqGuvKQLEgjcaBp6GwThed1a",
  "key18": "3kRX6qFmpkpzifRtc2P4r2pkHTz7Xg73WPpgTRVaC2SQBqpTNpWFCDSTkeuiqhEkc8AVGCcWACL8Y9bXfidsA1o4",
  "key19": "2SQoziHNMWgUwPhiKbnxHiXR3TnNzDjn8L4DXvSEjPfiHAhoVX3Wg1JBbWZTCbhSJiYYKJo3zyukbtscd7dARC78",
  "key20": "4AnYTKmC2NN1WwaQwruPkn582Dv48tQjkkYvXkmBbzWreadnJzkWFTssHB6qHEMNis2DwfV98YPDqyN9ecEHanin",
  "key21": "2uCrkgpSS5sb9jA83E8yLzLpJ864V66s63k8d1qogbE4qgwwthyfG4yBeH1XT3QnYNhmrT1ifjpn6xSFbxgshgFX",
  "key22": "r8XZGY2uw7RJCm9Gqv6FMWUHzBDh8EksF1n3KBrMY9zHBiPdVvRqmtW5X2fz31Xu7Q4sEnDTyej5E2mY59xbunK",
  "key23": "4VHgwssnTW4opqBuxjCDfgq1WYBWQ2azkGkG3Uxi8BhTa74J2m3HDndBFmkFFtq2hT7sPspP1WZ2M3cS43irNDx5",
  "key24": "xQjsqX2X4j9XaEHaViyaTfs68JcNsK1WvXzD42tXV3jMte5TvswWfejqTiv4oEJ2GpWTV566wSXhwBPwfEGB8bn",
  "key25": "3pNLxPXKwh14oikfPNZymM6oLVxAgGkEEwnP1gMF1jZq7KZVJnJ5Qs3voWegReFRcMK5bh4KcUovWf2ANkzjRW8U",
  "key26": "44aYPU2YeoitWmbbMX9sbYPaZpSRrQiuHfJPCahhzPWxd8zoTAkczYc46X43ndQyiLsEx1ZhtFdfFWVSVNpN2BM6",
  "key27": "4YSNe3D845seTJ2hniSeME2uEpL3dmgfAbkWhsrvqorz4F5r7cdbBeLBYT7SFrmhpQTp6RsjHcBrJSJVqY2ZypFb",
  "key28": "3aPFZpdVeA2sp2qtmKDADZaEjDdNwErJMUoAd7B5EdBPxbRBeDZDZSq7fwJPsyVvKy1fTcJ2xvbcATzb2rvqHiRt",
  "key29": "48z1KjHSCtcyn1WyjDWrRXNX1SxvTxa9wriDW1g74QinGnx6prTnbCtpDu4z8xTinYYRgunNx68s6EuqEaoYbeJf",
  "key30": "24Kefqx5SKSfAgTtdfqqWtLxsbgQmDgJ2wcy3dN8ivXXvi5PgvPcX8jYAdcchJgKzwVYfhchuXb8MSwJzcnhCvRY",
  "key31": "2pXTnnh1QwHw386E62mq3kp5yFSMBtCJpyfWpWVXBz8ecuASoXg9tvRp3M8MSMdNX6BijSmSJK5jfRGX78YqjXdP",
  "key32": "rmgFFDLm4Kn8EZW7b5tmkK9KJMb9qDxrBLkcKhbT1Z2VFetaxKm9bzPkwgdWUnSUEv2WgfsULv7ZQGj6atyo9si",
  "key33": "2SbhpvU58Fj6ubeEsqdCxEmV4AFY6aqQCB4CzGEkQGwbid2w6ipM38ePRMsoBxkjrapQdLA2qQ7pU5VdYb6VH33C",
  "key34": "2JPb82ANNYBWtbYogE3jjKNXrK7p8czWmKPyvk71ZAeRKtdWJqTKJZDENnLFegFA2TxgAExfCvpqKPTCxcXpoQrq",
  "key35": "4upFDhqcTBKor1nRXsNDYX4gK9aVkBUgWT2d81GQypYKQz9YsMjyNEQ5RApr3YhjnZK3wnxUmkc6MtSC7JTnezEK",
  "key36": "PtCVdMPKfugpECQqkRQj7P98RkBM2qxQpREgdyb3gbYtuFFWxJ2TLYV3TMu46s6Rtv8a66nppTtfmQXLuhv9paN",
  "key37": "3QnJsXmgaBVgK2dSn6BoNBhtumnNZ3pBrp4xxbczP1EjgvzskFtMv2k4iF8W6q952Xzq2W1Qz3Zjw1CoYJ27QxSz",
  "key38": "3ChwzUFXVgKcA6aMpPyTrXRGp1LBLHrCqdAevyDVwy7FnZo2yY8mtUDeMD7eQwvALxjc7mY5qBCMLbiS6Bft9WEN"
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
