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
    "3FCa5rr53AJuSovg7pFqis3h88VGbwTToRSpNSqw6mTbF8dTBN9riDv3SyjGYUwHj9uhh7kXMsmFEzzFGPrkM9Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5uifzuU6HK2ynCLPJmAMxbFaD588iC8VuBNKpfMxWtXWd5ta1PN1JVdHaFnPpFiGf2BvqiiR4dQxRSueukhB5p",
  "key1": "5oE8aJUZRBaJg7oPB7nDNeK3AsfBB6BGJjZrdmgWu7HX9zbWrxMSaZq6EsnZpFZnYskPXwFgn4saSGV38n3gknqt",
  "key2": "5Wx9pELjU65zVsm59wpLwbKMVJanKQp4Tv94bc2bx5ShNx3ex9nbDsHezVmsCNHBZFZ6W896pFkpEvwX1Rnixq51",
  "key3": "2U3ojERQsuVacyRLFyrk5pTjgZzcD5DyYyDNT4creVnpT1GfMxDyjooM8WGGqaRMmZ11yefPbtV21CfGrDryFRMP",
  "key4": "21f1XQhjvgjbXUFiHG39yDj5v234Yp6QSqdXeLBHAMTg3hMSJCAcAdcHprYQiHy1A5mVxEHG3PfZGQ9gYPuRURXK",
  "key5": "5YA7R6vPm7r6QtygkCEwyKnEUQXGyweyuVhh2vrkZJeKnhVKVkt7F1GBHPENVn1dah9sW6BTiSkYWHooVPAVefxH",
  "key6": "4LKCn94buqauGACnkhNcY76rtnNy8Dd1wZkoRkFnu8RZ4fM2AUDsUDMGnxRAs5CxjnAp5ichcrhdPo5nXYdHmSE5",
  "key7": "2az8YCvQgVW7cp74yxxuAZ94WJpysK62HbcXUH5MUQT2WX1ZRqiHc6RxfXNgPaR4jhaMAs2f3bCRV8oNfAbST8vD",
  "key8": "4iLpYchefpvTS1z64spbmhkBvU4ehtuwq2GewamHDerkWWbhi4op9BPd6HYxBW1EzMaQe8xPwvqBY6N9nHLad2b2",
  "key9": "2gnrPLPjN7S2cLy1CQXqic6BPwRUD7TWTyT3m64DE6yajsp8ZSXLAWMSrhX69AZULeVPKtvx1oa76jwYVeq4dbxw",
  "key10": "txTXjds1T6WUZyUWwBzvart1fsxiioWFPbTrScqq773Bn445kUo37QvKoUY4wbj7ZRwQhmfJ7fZ2H58G4vA86nr",
  "key11": "4WY9tcweDRCogHYXeZyiY3NazmaTusiggrV6EbvAmindkoszAuWbUA1JaF7eCXceTwDuX426tjoWWh6STdovwHsv",
  "key12": "5uSe6L69CrwdUJJKV3Q68cSAoUoDoHUVPYc2rQ2p2cVWqR8zmHAFHtUz3zaRC4hNdZkciQte3mcfXPJVGnyKJaLU",
  "key13": "iVQPJSZY9Ggbzhs78JSZNHibdRf4VxiZtoatW5KxG98YxgECTQjdNirhaQLqNM9YXQsPD4XbWStk5Rduws2PwM9",
  "key14": "4f2jtpo2qjTawk6rPKe1YStQkPKcrjJn3hMeQghMkPsC29Z4MrJ52jVcP3KGCtJ4UKymrwPW2uiAe1nMLVnUMcW6",
  "key15": "3Jp7xwcK7oAMfhUDAuc47qqeBUmB9jPeUtxL48kMmeECCa5xTpTjMfjqWtUfSSYpnj7SwBHEAWriMPUkoNsCG2ti",
  "key16": "4RW4ieZHnQKnhXAhZd7nqXReAQ3kdT8hTmezask4GGFznVKtHFadTdMhdoH7t8i3NRDfntGyBHagGveiiriWN2S5",
  "key17": "5jckNR81dqP6FnFnxU3k2JNR5rYLsxSL5DgdQqVGZZdGygCGPwLPnLwpYtQdihM2H4BD1xs94H4Fv9RvksNWuTkJ",
  "key18": "2ePTmPNvJK2NwEvqoUz5SsZCJr87EvEeciWR84eVQSsDHgzWbcDjXwUzLpGEfzM3oGRwc5MpM241NnhEhyo9SaCF",
  "key19": "4D4Zxn2dbfeBuh7r46brDFFqUf1QaxdAjwufTgVWNsMsxApnKchkSKYe1whv26XB5TdKK5j5ciqTnYSk21iZZ8hq",
  "key20": "2KRbnKTXyfRyFufwBsPg3oywK8vLJyVuqfBfkTrpn8q3pQNBHqaeUqFb3RjezdW8Yo8JW49PCtTzLj4jEf9MRJST",
  "key21": "66ozkrC84CSsZH7bMuiHCvZvWeXtCnGnrynKqSLnvZAcAkWzVqw8wCtGtPUB1D5s2P7ECrb6yWKGFtTALpxkCMYD",
  "key22": "2DgyTaNY4wiuBc8uZZhKtkTnYSr8akUhPSVGZHbd8L1MAxTRpPkG9fMi9jZkrUKDDKzmKPWNgd8vAioFRDUDMT3Y",
  "key23": "2woJLnY9zP9ySpeCuWaR98sorqJjKabxwqYRXVNKAzPpfk1UfDM71DhT4AeQ4FDxuncwjo8fro66ouH8VF6XC76S",
  "key24": "3K5tgcQoGcyamstYj2QX5JVbp7MsRQHF9iotbs4RaV1gXoXtAw2DcUzhN5CKnee56sNJtbJWHzGQXn18CkvPTrtx",
  "key25": "4GBNrWX3Be3dgoRDrDdzbCziA1d4UTxZcx6hBGA8QggHR7EGF2vZwocV1qvm8EpMpYrsxub3AdgzB5zbQcSnafEA",
  "key26": "S7jHWp3DanNwTHBvAz7u6aSuzbuHwKN7zGmQJaNqcZaVPzn6tXHkKGeAVxcEenixrXd3TcCs62qjRDuX7iPcvic",
  "key27": "449VCfmiHTrFTdizXdWDnYmxZReK7SYWmyHHYw5gqUzyFZEgS6BSR95biG2ZkQnyXt2BeG9xD2rHv3oLAq4ngqGH",
  "key28": "1hwuPQnig9mvob74oXStepj2CrMvgEGkB4LQUvFwThRz1dC3gurwASaqhGwHW1rEYduYYWqEN7E8gz3cD8RBSZ8",
  "key29": "2a6h3RguEoHmoMgLQSYB4vC5xaq4Ky3aKdqGk1ntB1U78vCriydaXZt9YhH9txsDLxESdXJSy73ggsXRBcgaeGHH",
  "key30": "3jZtf2iRVmruAYtgriaS3onBoVGk3v23KmADPd1GF7gxi2r8LMSFC9ftqTdxmWPg6gVfQdszzkZjTaDVFM91u8U2",
  "key31": "HXxRjrapYpeEkyNdxVvhPRgdk5vEwSnAyanQGvhz6Uy9FNNRNXpbs2r4j32T1ce7KxAagQAZ5nDsUV19nFTv7hT",
  "key32": "3MohqdWRr92sMh9mqpyudLW8tJ3SaXfhdu3jUFutZ98T74Wzybu3U5AMQi6r675He4vjFgkPVq2Zmaz3HwZstHFM",
  "key33": "3btNhNDcxXaFaXzSKXnoZHczrTN8f3cP8r2g9EDrEkyF4nWZhJgSMXba9Nw6tN9R5rvtXE6R2kCHSBHnedA3Ek9u"
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
