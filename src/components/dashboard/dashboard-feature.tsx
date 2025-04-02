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
    "5QQvPei2o6buQNpNw9RZx6tTEUuyf6ejznT32y1FUgWMFAx1LqRUa8mN9Psd1oAU9uuw9bfsBpzGCE1xWhWjj9Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cgr9n2JJqqSkPqdtLH5rgWaAMFviATKV2UhbSNGQcJZ9777JAmvh7f6Lx182HUvkpfobfNV8KkEfU6yyf39S1fp",
  "key1": "3edh3B9J2Jico1Er8if6yFSAjPAnwZxJmXJTK2PzjGK7mF5GuQzfH7x4JbcvJzvrhfJQUQqtZKDdZKePkZjkQiz6",
  "key2": "3e6e1H2bRpvNfwUEsHHXbe9xXWSyLL27wRCwe4h4WkL9FBkS2XFRzrq71ouV3HyfE4suuNLqahCjU7B7i4AEUDqs",
  "key3": "2rbhAFa7mh8uyxUL3J5ScsBjUCUoAfkVN2jJ4dZcPuvqntak9UDTWiSQ2TwwMqAzgQufBM3BCmXPiAJu1SaMtG1p",
  "key4": "5Wo7NDieVkKLTQ7XXxYEt2H8K1fEBYCCrYTvLB1P284J6ShhdRHmWfH3cMm1U5eWspuM61ztVGQTj8M3TDwLEiKu",
  "key5": "32qXQB6SyL7YxNJrAJmFp5Dp179Hhgk1jN9aMe8xkgHByMw7cgxxic9ivoVNH8fSbJsT9rB8Z7MTmLFV9vK172kn",
  "key6": "JMynKHppXS8aAuXXjcD19z2tpctwkQhtqdkLaYRifLwjWo828k21mQ6tyTwXGcJ7XyMQ1ojZSFDZ26k56c42nbp",
  "key7": "oczHp3Akmtn6LavM2iq11xYKKxQcjBmznoQVZBY2VEZX9f3GK2iKpL7YLevWeurvxQYM4X57jZh6UvGuDt6uSC7",
  "key8": "4XiJXFiwTJ74ZxVArXgDDRWBMWQTu8WL6HdiiKTH2qudMARRtAP6v3XegizNBkhsjzMpvRvtC8g6zBpM1kFnqczQ",
  "key9": "4tde71eiCvGx26AoSkbqmW9ZjCcArAWrPkeMyeXGCGcNt4GrnHxDhbQv73wq2czdGotFN5suGrQUJMtp6hH1Y8uk",
  "key10": "4j3YKknbPWw165NbzP6EKKWCebcy87eRvCBaPCpjqQDzVirxkKcNCZPPzeAcmTD9qWNbYfbRLjFS2R2KdFuBNfys",
  "key11": "3eJWjXBoWsveSBCM9DhAKbNK1wGQDvE1WKKgAfPG3ZE7VZnu65AgDcUKB7faKaZVF7Ca99Vo9xrsG4cyXtCbgaHq",
  "key12": "5BLG7ySB65jQ2ajW33648KS77vErmgEeWYMHx8A4eUeKuS5tYEYbtBabqqBwTYgsU4oMBe9qW8CoNMFuYZ56S2tb",
  "key13": "2vjRvYciWdvkTvzM1MBfMa4ztFZ5poXPtDUhwHi8PEHuzda4CpTiC5NrnnKAfPTFSAeB7dtfnWnMuzzygt8aFZ2Z",
  "key14": "3QhQgoDPG4pdAkewUhq5zusvX3redrmmSeXbvrLZnqadk2zf1fxeV2gs7C9NukX2wd22Nos6ncZKB2T8QCS9Z61A",
  "key15": "yfHvp7stPtoiJ9cUamTwuWMEqeksViT5WTw9gG2mWmJwcf9qbDRcmK7oqNFv6ZM9zH1kV6SobkPLSsYZohF8Ry6",
  "key16": "4Z3Th9S3W8wqeUYy8rfnpTCuFGL4uyGjcJ8bXXTomhWrhuouqHmgtiA96jme58Z1qukwJcadUDqvSnYbcGSV7yry",
  "key17": "4bBZTkFnZHa3FnCTTdD9EuBzetntu5hJ4KSCrY6PnFxPuxd3irJnNpsNKLJfo5e6zimDE768y84XaqA7hAqHwFbh",
  "key18": "5aWi3odLrwCigXdYPARVfh4ReLY1JHKLjbk6jSxKpMpJsYGtG54gbTojSwpQewAV4eTgVEwwyynwErjjYtkef5zN",
  "key19": "3b1NBzt6n3gH6i29o1P9gJZUvgWi2cUgn1bLGn8K2oGu4uhDGToRNJHP7g2JQe2fBGWtGG5AJDk1FWhESx1wT4rN",
  "key20": "46337hUnWjqahTU9M3V13mCmLMw4Ado9Kc14RQeco7PfzEtWHQek45Smam96mWQ1RVYGS6FmacjdUyJ4DWQTbDBJ",
  "key21": "5ae41iXJnUP6rFJ6AEziwFk5zCVnq2zfeSEYKAnjAtpmSJFLxXLxMTkRTNUBE1m1yf5yWPTQE5KEMEyyqergDE97",
  "key22": "5PSLYU6Ep77uEnc9sa6wQGUYXpi9UYgabpqKHxrNXnKRoEGgVYRMoyNbchFgcLZRw5W4AVBkyf2pLeuuDoGWD81H",
  "key23": "4ytihFXzBfT2frrSQbVwYrXQT9HLLVxSGFSD3nFgTbRMr8J6RXymwx97bfuckC4ho7DhVjaXK4xRWHrFYzaFBNSb",
  "key24": "343AH1vJgeAEh856Vr6ZWB27kqNGpqWgwBzPpDGU4gX2QMzaWLCFEVFSbrFtbsZyCEaqERYoZt1D3rafs5hJ5tw1",
  "key25": "4yNtvNUrygRwpgePeom8B9AFf7GvhrEjjqwDZbFGYRmTStuVXy3Zw6kzXkcuBctKRFmt7HzA8v8M8chGrhdUtLDJ",
  "key26": "3UCs73fu6cKskHwVP7z1csPaLfnw6Rz6jifM2F4ieBdSQB4AUxUkpKZCBnh21zAeXJm2ZkvTDMwqzrzmNGyvfmDb"
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
