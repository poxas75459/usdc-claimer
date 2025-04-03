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
    "425gpyH3LxLcFhGtSER8JMGDfNCxtGLv2PgG7upkSyNJLJbvHT5ZNsGXn4nEzWfYice8Lp6PhyNnLTe4XJ5fG9yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFjxZzEQSFFkr6QQVMsqWwqHAHisqbNfwf59jWDsFss95wKLZMZXjeWNZn7wnnN3TFPJYJmAJLT8pjCJCrkqxWV",
  "key1": "2t3d94dHNYoy6j7uQYJzBPfCHiHfih5odB1ARYqPHmx4Dq7ZaAtbSCFf5zWnkmk8nq7Kx3DVbPBSDxwuv8kzjjar",
  "key2": "4Z2GTWDMPSqwxJRw1Rq6C6eXNnR5WCqHrbe8eVK7WjwzqJwiLA3mi2vJsmbiKNsyJNk191Sxfxo9Lv6MeRgpdCjq",
  "key3": "EPXMLHJH9wr31W9DhcvqwYkN49jaEYKtuTCZPYfTfZJ9zr2CxnS6ufxDiyW9tCc75GczTnmH3rR5kdYBrWmqXP2",
  "key4": "27kPPQByWBLYzdqSWkd7QmfsWtwxWqh9azGPHQ41EedgvX7vRZqD1zhsrwBtKsL8QzcWC7FBaKRkELjQ6VB3zYur",
  "key5": "3FXTGxFiAycrXYdowBT4iJn1ujpLwVNXv3fy67AFz4KoYPx9qtyJEwW4Sboov3ExLww38gq1yiWRtMvbZrsj1xX1",
  "key6": "5CZADBNcZbzjUTTkSWzDyTpVn2ftwNa5rcFD6k25TQUTr2rGiysaMncz6Wx5HG4mwTDFBW1dYKMcPWhyF3zc8iQx",
  "key7": "56s4pNwQ4Md6138BDCd5Yd9g3LxHj5kGgSHvYZMJs3YgnwxsfzmHymwBmj448Hpio6TpZdy2cy13k6FhRpuQ6WsR",
  "key8": "3qpMUrQYMZXtvxQWYPQuXHaZa4zf4Wn7XcUcJzsKeW9mgPgTTpD5s1DTSgWGLnLasTZ48pKcTcTBsST4x1MMzroY",
  "key9": "8QmD2Vz9Krgkpm4vnAMq7bRTNePf62ncw4NfqYr1NabiUigeNNayyjUXe9mvKrfDNUKcZVC8jCZLfM6ia61kjYT",
  "key10": "hCEPd2qEVifkHKitqGCpApyUeqU9BgJZxQZsnz9WoRjWne8Z81veseUT8MhpCJCZt7A6r7EcHu8pUyT3Y3nNMZw",
  "key11": "5V8bvByeSu3NkiV9ttSzyqjpdo7KfhvrcAqP3LXMP7pzqXinDkPo9bMv2j3b4iJ1bsNVw76DdyBTvv1udPD3K1ZW",
  "key12": "qbF4E7JjfG3Yisba6CSjnWLpeqJBRuFkuD1mcHKxSnURtdcSguw9ToQRavCi5CaJtHbUV4ahpxTkrDa6HTqa5sC",
  "key13": "53BaYbG6UoNsinU6j5oSgeS96CVNNGBXeXzYKXNWDwwumiZKpeyriebiZSPYL6ZpMyY3mPkCT9RbqRtkn17R1n51",
  "key14": "FzRPWYMrxLAfB3mH5zYg3BrzyZqs9B7p1wuphg3mktuEVbqo6G1pmqwmKLGxzR3Sim2hbtXqnEDPnkcEpFEciZV",
  "key15": "bKxg2hmWBhht4F61CNsKSDNFpRJbbEHTDCvsJMfXddWygC4xMSBbYghKrW7K8MsijpKJpM1xceAca7vvWhvs8VY",
  "key16": "3yVrxPpQTuVxHk6J538D9C9HUpsfpsEQmKtBTrv3XeFRJz9qLtU42K9o5qTZRGdoeKvp52bF9xaSup7d9GacQ9HV",
  "key17": "5yQjKL2skmiRMbZ7QtGifUdUvPTmuRyTCV9pKNFwM71GW5BX2AaAnee53HLLvKeet2m3MeeocSgvpwghPddcX4tS",
  "key18": "435NWHKad3KYvTFweeBZqw1zU8xaYwcBWnQdTTLuyb79YoZYP45L2tRGkqqVSWqEcETfjGDmZTyKNeUVG6rRadcF",
  "key19": "5APpDEGsq3tA9FptLhDu2DCtXGa4JuJSykHnGjuEEtYytKzGuheVYmbbWCYtkaomB39yVHSdKB89SLefF9CEMRhM",
  "key20": "5YJ4mQ18RKKU62A7TGALoPpYXhtmC6vrThjhMWTFui7FtVfxZptNuFMqsqnUq7DzrhcE3EZ9VKEA9fFL2L7Qx6E2",
  "key21": "3ae9xCzSfPZjo1h4e97rvZvtiBn3rYbGE25L7yNurDiGPk94A2ptP4W9FxevftVti1tyasfAks9d7LGvaYqEcyVs",
  "key22": "4st9NqtcnYMu1V6GmLdo5XNwtGKwyaVfry6g3CLXgXbepZqtm4sYkNN7ahA1DdKfX1gQYkTGLBy31mGPFv62z1mG",
  "key23": "5qP6bsstR2otqnaBtoa28DLU4DYNMDQ4asNAhC581PmCTenZBpWZcw35VjmrzW3KPDDvPSucNFRFRznNPampJqST",
  "key24": "5yeu4uhY6tv5f2iWz2LVB5mmPnBMSLY8jroJtZ5e7fyYPtcWYmd78TQrXCPFPcAZjGoRwTerQ8zvx25F996bxhkm",
  "key25": "fRDZL9YFbCSbnERk3iVZcgVcYLS7hqmbtyWzhzbveN3zjshsrFjYa1feMSbucUKqzhxXyG2THB1ScsHvv2mrdWY",
  "key26": "61JKwcc8UL5NC6bwuiRMqSxSaT94NLRjrLZp3R5Wp2kqMqQXzcuim5CEjKihdxvb5NWXzHgWUZfHubzgASw8n7uz",
  "key27": "2dHMG11eYwCaUsvPJ6XokW6gu9g4BrBwUvd3mWmCEGZnTYPmmDrekfTJZPoYqhKFM8vzB6aPjGxFeJpVVFx5bir7",
  "key28": "v8ogzg2jySVXUXE1mZeHK5VufJAGdAqE8bqb8qX7H9NPSw7gTG884eNi8X2cAnPJTfSqrewV13FEpHgECMmxMVo",
  "key29": "2wdzTA6t2A4AS1EV5L33wkyJgkzfEFrf2HGnwNKN2B7VdjMEFXnegp1HkgvDXfu8oCd3rJMnfKQGLPA9DST7JC9",
  "key30": "4XFWQJnLRH2XqLN2y8kTEyi3CmsaQBBhFMP7DzhfRg9W5Rx5cTnJwqhrMZaoxQMS3dVaszSVvyqa31MRFG7m4qkw",
  "key31": "267cXwhqCRMTixU1mrq2Sd4511BAFMtRxTsq6oDYyhDJSF7LKj7ei1JeuYFGYcxyQy9CAa93P9Yh9bkr1SVXjQUv",
  "key32": "65T5RdCyv4sqyTtBdhpZKZj5x7gmBZ2ooxG8d53rsytSa7qnYiwp2rGYAojAKThFkBU7asEn4wKp9aLndUkJEwqo",
  "key33": "5aNgWKEq4HrUivxrftrDDRfB8SZc6FpeVn6YrdjQEXcYhqovwuGP2ywi4vjAx6S6RMmHMx9azpgutq4A5gsG8Gt4",
  "key34": "4aiXbh4gbBeWgzjKCfC3pmgkLEC5tzCSLsz7XsXJzV4UcuDWHQiCYhQtJDQshRhSZA6hufRAxtbJCVkkG7yn6fSu",
  "key35": "42468CF9e95GeZ2mGNeJHPeRtuQdUqcVEH9rrGAm6bBoE8tzDQcKii3FHgka9E81YNmhR9d84kTn6F5EqbgrQsQ6",
  "key36": "5v2ZZpv6iPtUjasKhc1emdZaBiRq5UT9sSH6tKh3o9Pub9zbg4mtPr1HFTUWhtBaaPxhNfG5UXSZkLJv8o6QEZZA",
  "key37": "2nMi8Nm1opjuyoNQUszUA3PMJozoZAPXjyJwmEEytn7g5EJmR2umtjVT5BqDCh29MfBUnpwr6GeT3TQhwpVvzCzi",
  "key38": "4fNqE7y5hZMtepC6DehFxKPjw5ZjSyfijNYo5yED6SoZBrg33oLNiLE3karQ6TmuZoJ9oPThJkerAup4LENrCiWP",
  "key39": "5NESzVLtaRw2vzpoaGmCK5hCai4WgxdjEU24tn3sgfnf1pPA2dEPwicdhtWQViBfr6xZT9ScLZEzstePcFtmQy1k",
  "key40": "5bFxZYJnAMRzuB6qB1G9qasX3KcgacJL13LpMsCR2P98PXpkW1v4TkNCdZ2DAubKttmxJhPd4tCoRxMKF1V7C6z5",
  "key41": "66fgEBPPtxhX9BA59y5goQkjUHWxuwJ4fDGvvVUzqMV5xub21QuSJEn1sxes366ohY1118EQ5vDjosNxtDiNjxrZ"
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
