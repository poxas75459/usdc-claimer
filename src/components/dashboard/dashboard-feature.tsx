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
    "3Z8Se1zub5koxknQjoYcf1NZncVZqaJPz3c31s81YyBcgX6UzxDFjWqiVwfd5ZcVEQXqdkjcsjyngumHas33AMfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37yWPXxuGMUaEbTdpN5Mo1Fgeypfd2kdACqeHPQJAqmvz5M3BijEdiop2pufBHKXRsecWkhWd9KBe1mvZFj2sU9z",
  "key1": "5KU42gPkUWJL3nVQGCnqUMpBQMW4dMS5KCvK1HUZgexvdCy8NBwqCBV8YFRzA45aEV1AaGzNi3Jq8DQq2ee7p2Se",
  "key2": "3XX3n2PX3RpsChS47rRFCLCL6McfhkPNZZYTbbq2po9cB1TZpzKYAV5r5GXD1ZqXJbf8Wp6tmbZgvoqQR4Yb5zgV",
  "key3": "4vJubJyKPZ3YPooTeQhWu4EGRLrwoDroh3FDKXqN3BjGYSXBz6J2HWfY54J59hAA3ZDiHSn61bkkHm56TSMBrVZM",
  "key4": "4X6PTz72r1jziPmiDoXqmXpZ8xdX34PpQDjSM16CMSSaFNAwFKbrXYjTUDALcRXCfsMu6oucCnaZ4uZMLAdFTQxb",
  "key5": "2RL3HrnPas7WB8R8VMqxFrhPfq8ftrGZv7WoUofocUn6nygMu8GR6ee2TkxzLe76VXvzQGsxD6KSdxGo1sEBECxR",
  "key6": "34CyEDGiegTS8ux4tyFkxzWGMUQZ4TGQC44sWumiEXi5sLzLTb7C5qZAVTzX1RkSDNpJLtNK9sUk1zWgYsRZJ4kQ",
  "key7": "59nw6Wa147WzW1LqEEfeDSeU2JeQysT6UUHJGfoT8sTropNmXtQEEAqTyQzpWZ5wahrejkXokeTYVy7ifrp8jm8H",
  "key8": "3sDqDs2z37EHcz72jjEiPR2Gt83DxpWKQwief6DSiAhe35RSnpYnCwodLpA8YsmgEAJomDwrkRmngt9fRQnCgbMW",
  "key9": "4s4cEgTrzQaeCiVfQE6zA6yTCHux7dmgJFTDKsmD8MNFLnk7sztQGsvXpM6riyqad72skhx7bCSPeMmKwqey6nUW",
  "key10": "fDbzQVHH2m4GoNfGEB4BePkeVgHzPW1iRoWKBcbZiquhwcKgT2xtWZFYp9bCB1s6Non2Kx6HAf5Jn7jofA5JM75",
  "key11": "4pcHGrSPijpCuYXyJP66Zi3hZNDefT72YSyMTLxb7tQenYP7My2ZNkZmo759gBu2DVKFd1VQ26Ev18k6A5bW8ftp",
  "key12": "9cjkqevH71Cm9rZWUxdueiKPXGN5HxtMpdM8sJpYMUzCoWSFTxJqK69ePtrhRaVxQ84Epq7mmcm9wuEVWetfrxf",
  "key13": "4g9DYR4ANyemcF1bzEw6bgXDEHzQHX6ueCqySfj1ZkSaFxHHda84zqLMJZ5JH5uDLEtR4ocmC1aaes5fXNT6jKG3",
  "key14": "3JVdag2TFjRqDHTAGECJRmYzTQVvpZ6bDj1CFEt9jdkgYoa47MDJJrc3TiZbYZSUL9TUN7VgQ7PcjJtgVoan1Ctq",
  "key15": "4edqvCatHQBvHTPY1ZKYVWMyyBc5hsYi6AYVfsfYhZZAC6ZULSBMwDvk88piHQ8ua4qaWsTfQXQvxqWJsAhvvbJG",
  "key16": "25AyihmjFkKEGJww2X2nbNRjrpSNtSiUhXmH6Xt4qJA2eSCvJvzTTn2BovdNJwBuHVVY1ui8bb6d9yjgaJxFD4Fx",
  "key17": "5myDMeUmRjHWYaJjs4heioMUVjZuPjUYRCMnCF1MvfjyHcGFNhYf1LhdHHyvj8B6mYWWbi66Wxhic8yGgpvuGMm3",
  "key18": "gfbi3Ypmds9xkA3fvoLM5EegPifHxj88G1xvK8VNTHQhb9fsZX89JpBdfmGjymHLmqx4p1R8UYMZwjX8gg5GXSb",
  "key19": "5UASW9WzHvX6xNLVjZ5k7FAAzXd3tzRqzGiGQXbSS8ePaS6TY22FnhZQdcXXrnfYHLNPGhPTRb77ANh1Ny6Rs34a",
  "key20": "5xT7sY4ZHcKKj6VR7GA2UmYj4cCjcgYH7yKHPr5XQsKYezq25ASrg2CPHnJGPdUaagGpUzQtfoPah7Gga8HXVXCs",
  "key21": "4oPv6gdHAWJuCSf7JxJndgG31m3GMJYLc4RXXYnr1Vi1nsZDwAAsku3NZTKnrjjnUxNtepRkiCe4TzUkPsXvHQ9U",
  "key22": "3AjTAcgcyPRvxHBSuMXKTVn5bfPnJpcF18m6AR8XfceNk5RKnVoza9WPu5nnfvkShap2n7rhQFbZ3yDiikvwQiLg",
  "key23": "3L6angszq6SobzJMkcih9S6nuuRMhtwE3TC2PajidKJYypAN9bZaZwhBk5gdRBoepbMtyMuKzVRLE9EccLfQcthJ",
  "key24": "46cqWEuveTHE84Kf5LmEExQjuKvzQnJWUPUXV6FHL28M75WQ6jSpWcEV2iL6JQsgQtNMTwzrddiAKhWRv1QC6U25",
  "key25": "29CGshu3iL2j8BnRncjsw3DCzPBK71vnE1Ek4FCf337x5TnG65iavCg5Bk3iYeu7cSgQQYb2Np1QGugPGh3qvcSw",
  "key26": "2VUhvZRZqkrbUqNxCY3cEExjzDz1sFeHH7RcBtBrKR44oqZB83ubDDk8i58gKxyysdgExhZ3qpsg3r1DNTwoGn8o",
  "key27": "4EyUugArbKcEZtsi1pfvhBDXTqQKW7jyKfpYttpjCMdz1q5HCJLW247cC67ZmKaiWxovTjKh6aKeULAEjUeZeZui",
  "key28": "NEKTTREcJcfBr3uUJNa1XVso8U4ib6kzSudCdxe4t9S3te8wjzBaSrrtmaxAphpHAGb3FZaKpzFRKxr6FSrFSx6",
  "key29": "556M3ZDLtwWVBGUMEvJRdaVonZcL9HRMe1YvDSuUktRzTk3bM2qAFAtTgRx3bAZySBvw8oZUVyWaXXeFewnHPGNC",
  "key30": "3tfqebnWb61vtV4hXuH39hqofTwbJ7nzhRtPgWxYaDzwHufkv1nzAaH2kMvGeeJphbrL6T6son7bhRPXuL2XJPhU",
  "key31": "2mYiwunCiL8Qr8NFkVbg8VZiJJ38FczEZgp986EC6FbuCvo2799gBBAk6gfYZuRP29Dynv6ryMtx5gkh3ANT1BqD",
  "key32": "4v145EpiFQNiwGeegKwMKLsESN4qLii6cUGDG7BvRkWBJCXVgjdsJzq9e4n3yui4bmMYrnRdtNVmu5YyBmsgGHrB",
  "key33": "2uyjhih3fQ6iwxMKvgnHwzF6cvqsRAEoHmTnEvLXPUm2k5s98ZDHooXtuTDNGGzcBYwNt5ZUpfThJMgBX7yH5K6b",
  "key34": "WjvR4L4mKS7j8vFm5E4YhSa4EGJrubyb1G8kkfeSZaGzu7MifjfnQ3f7s2Bnay2fjjpeTbMtdjhLbMzkdZCoJrL",
  "key35": "4kqHoxw3Yr6GftQJCJnxmkZV1GqrmjwkRokmDQnNnXMLSwVAp2iq1oPgqdky98oEcVMqg9dCcwFnvxDo628YodBT"
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
