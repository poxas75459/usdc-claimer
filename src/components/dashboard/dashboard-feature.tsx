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
    "dTsqopu6fmd71FMJiZ7pMmQ1gqNmyKFvht6RMAfeMvBushAnuJ22tMMdEr7exRTEY4duPbgofPvuw5hUSFG93wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBq52cYKtmNHkVBXqT34zP4tZoTpkv73efXe6B6ApRwH1XgSnu4khNukZfVyK6zwu88QSbeXzTDxvLdM8ZhCph9",
  "key1": "4uJWDSFJZcsp1XHjUHNVDRcWGWN7qV6j7kVxda79qF3cjVsTApefTpiduHDBidAw386D7XB1KQXXdL1rpEQxrjhG",
  "key2": "5CKmJH1cKwi34NfTJGH3yiJQF7WSnDehEAuNVspEWnGpjAHh4rAvs7TzvgxWDCXzRKaKCJjuAmhsXKzDDA7X5BCh",
  "key3": "3WjfchrefSj94xT4ytujnBMcgDUreszwmHzncwaGWxqPawXcVk8ofxSqEH9g2WRxKQDdjA65BwVSqBCWVjS99LhM",
  "key4": "2iknDKKu4JiGrk7TcS7GzaThvkZVw2AGBaG6Qr7DoCk97SRrkWTX4j1f1CGUxHydESpdyeaFHnmabtjGGYZubnTd",
  "key5": "3CixD2kBwUiG8dFzb8Ns2qWZMmx3HFDAsANs5bRptNm76UTpCHndNFBe9vkx1y8rDpCPxshzpzVDwJteQLDsvPeu",
  "key6": "4JiuRn2nqAGdrZi7jKe4RZTKP3WAdmqEpZuCrHFAPyQjNNzWq5AwyNFFUmHsySvvKMpuS4VBAoLcWywSGJfKo6XR",
  "key7": "3bHN1wnfuiEHqLXpptkmPyBLhZwHHKFp7Z89JqSGM2QEEq6BfPkU5oKCPVKqcNmmyexJ73rQFdFYy6PGkxbdBHEF",
  "key8": "3fxjybAnyd8tpNv9PxZhUe5j9MNPuuyYaVDt2P6rJFeKmMayLxwiy6kefDHmeuWQw2idGFxeggKoQBq7KDUqz8qE",
  "key9": "Li4nJ2c96rTaMjw753uQ6fFWXZAdXnit5B6oK6SNgViQpCg9RVNUyiiWukXxMUgdqpKAKAtzD1tGjMs2GUptuBE",
  "key10": "5J2gk85rNvX5w5UErbmJ44xQyHNSrh5iCDPnb8kRXmURrpRqxbmyK2tYkpzCXVAEeuRNfF8LdseGiico1BveKY2H",
  "key11": "5gnpG1djYywbJ93RNem8h4rKsbCqyVL7ozvj9NVADifZNPJhzfdpYH46ehLAX1dSUJfL314r4rkeRSFL2ajdT7Df",
  "key12": "xk3q5nq3anKwzeoEXnK5y35XpCow7Mz7eJgZh4j6jizKNbnZzGTF7JLaUoXGK4kYdxBw1g55PorqGNAeV1rsLAN",
  "key13": "2j7nzfxqi6CWQf7fKJz9oGai3JErHPvUX82oo4epRwLwF9v6hSw5QCqWiUGRXBxNPYgy9CjbcKPKmqxbGAEww4tY",
  "key14": "4oXFrKMdP1oxmRFN8D9ce9sppDUVmQPXScPrzgr5MRCnd9tjSQCkFXfbFrF547BEMnJdV8YWbYMJLcfrJEHqgsUB",
  "key15": "2HXLBhugECRGbdC2cpKBwxiCsqvRiqZ5GVmWzoYux6r4261g2Sa8tyomgsQKj95SmP1Cxvk11XRUA6FfSdfjQPGX",
  "key16": "zE4fCc7WV6hoiQfHZTc4t1yJ9JEcyAhuJNsya6q9xfbnLMQuLbzGv97NYRnNxa6UzDgwLXawxEGjuWmqjsii3JV",
  "key17": "3BPzqT59zXAjGLDAysqqet9UQSJmAcLZCmMN6pJYxaNkfB42z7uSyCBfvFm2UCcdjYoiNoUqhpvz1kSMPPNaP2zX",
  "key18": "498usXWKjRnkmSn28oN3Vp21mVVQddfiRAYgAPwdhX2pcGC1UxrgYDrER9tor6H9bQAfddi1ZHyjX2LMxT8EEPQY",
  "key19": "5U9hWFhiCHBUQq8AvpqTSEEsV191ESwPD7p9cw25EdMjVVijpa8MTFDVFM93wXxUvMhcM7Yzk4BZUqHKc2RbgTv6",
  "key20": "4UvPzJjMc5vhpRnAkGb1TTaGEEz7RzUDDZ3Szgp6KBHCXxEfDfa5qTtirALL1sV5S3pWUgunxHPve5mw6YEfERA5",
  "key21": "8UA8H2MYpdhckTgmsKcJ38Ue3T5QMirXVMha8bWPNr4f1ZJ5gnXt4d6fX6NsoUgLTE5DpQwqtwuH2Ar4q3jWabW",
  "key22": "4CXSuaHQ7mjrhPE1MwYjwoyjtsCVKbucZoQeGniSmHurVR3LEx95VF7ViWeRXxtaRKjZx4BgRw2EDmBKf43hiwJW",
  "key23": "2GMAd6aMch3Jbf6uzkHrXVjNrLVPW4N3VMrPNBKxiDMd3L4qhBGBWo3FTzd2NEPQ8rFVoR9XpJAofywezVuDoiL4",
  "key24": "2wFJdxKeSFZeMmxx3qPpjaQa7K4M7L3wqxS5LtskCU4pr9PUMapyLbhFc2Zw3UNyaNLsnN8NivYr5bdAN9F7cpei",
  "key25": "2swXsWCG2xciHe5Bz1kje8hgLbcnQchCREL8ScrmxT4YnGHu3YNu2bVcrg6EqqiZEV4VAmRynS9FAG8MVT4RzFYH",
  "key26": "65SxGz55yAWEo6RSzcLwzEbrgLUDUHd2e2ZU1gt7Q3B6caeDDTiXXgh9DYNjvZtcGDRHPkKW6XCvrZZTk1NbRoP6",
  "key27": "odKjF9wZeqgbixESkfu6y6hxvU91wk9eHN7KnHxhyVQxAb8CydMNaQBAZgzA5nQf3dMF1mYLtx55f8twMefM4cX",
  "key28": "4zyh8vBbH9RPccXuAMsVqsEW8nah5Ev7XJzYNAUMjqMu5JMT79a3pw3EHYnXB9SngacsXobxznYD8gqRjomchssM",
  "key29": "5dQuagNRUAN9gCxSbX2dQDLa1w1TdkdXKgALDkHEyJyqX1XmBvtNw2VbE5sFXzjER1krh8iaw5189FNGXvsBfHz9",
  "key30": "NspGojiXiDFqJULfjFyoLRQVVtxS2Fq9J5yQhbmKHGrs4J1WcF1qJsj5LYMFKLo1QMyQWHnGhYeqd68dxDsgthQ",
  "key31": "2tqWyEKnpvUmErTKhkqVPS6jHFdJkoYPvspyxACkagV8miA2i2rorNA7nPgteRwisjWs4yP9hhwnbtzczx46Ux7w",
  "key32": "4cauivQxAeU2BWXUeCWpsByYSqHj4aa5Ytjf9wBFRrtJgU15ThbLLciQbYDbbNKjxoyC4E3e6Bu8Hp5VrMjUWfA9",
  "key33": "66vMumovcdP93S2R4kbeF7azAWQHHDuja9Cv4Zo8hz3zSAL4PXHxJJaAA17ZL5sQMFZByrzMKaKoqETrgrw5rgfp",
  "key34": "5x8wwueK5gdn8tpvfc1Mje8Ts5wPFrVA7xN6uPc1LAks86feFxpk2YCQU1W3FxkhVSQtkRm8iFXT9kNerPjB1y3y",
  "key35": "4sQvExswLxiXR3PVrHFPZRC6eBUZ6WrD8Cixq6c1APfXYdaxvUr5c2MxKMdpWnda5j1UwKpmKozxnAwx79QMjZTF",
  "key36": "4h5A8JSDT9hcgcrS32cHDnv9bBMWvcFW43pjVAnNrexCvupCBMfFawWHcEYtT7KfAYNa4FDoX3QLiPWbENZsfFZ3"
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
