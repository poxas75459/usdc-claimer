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
    "B11kryw4Tcy1kZKDTzMjPsWLwMdTBeNGsqyVFtudMCwUCVTLkLcFtGdR4eMNFf2rMNMHV2HxRa4r9hn1VZMRQAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzKdxeKQjRTq4Ec6c7avMg2pJtibU1SvNsxCyCH2CqirULAU8oqSSAXMPoeQvg3QHSsCT9BTSXEu5GyrWyY53bR",
  "key1": "5sup71x3y2JiMzL4pWEUPsvWKx2gnH75sumUaUKmox3SixRp7igky2VsKWMKXZeYtAUxzEE9QfGsiHk8UZNDTFE3",
  "key2": "5PmvfHEohJTjEm1v3BqrHA28aXcGCMvr8qr1ysTyxhNapp7dpkeGbBV7MYhNihgkN82DVwctmYmWY1HQXZXs9chJ",
  "key3": "5n7PRNPgu3hxG8X8kruu9gCQ9mamSVYBtP4JYtsePndi4FGC3UBuMciwRyxFxkX9EZRnZZtQoaSqrePVzf42up8h",
  "key4": "jeSbnTtAnk5wQLwpRMkiiVYvpJZ6omBidQbBCnw3uE7isjqhjRG4DRTDzBjSUHxSjWLVSaqWb5xFvhbxPawHQbX",
  "key5": "3usczF8kqVqt7Tuu4XRLJ5T7tE9Fk5mWCwJEHYEsPxsHXMkDXTmauoBRE1pETNBEGNDsWGuNerxNryyobpabK1aM",
  "key6": "5MSZ1bjgMUxwGF82VsgrhxERPGwYonD2196EYujF23d71tEbbN4muobUYXCTcPTMQZ2uBehc9MPv8uLXq5rGZdjg",
  "key7": "7gX7HBPxJKv4qj9txu3vtGLWWVxu52gaGs3uBSUvXNLiaQoH3dMUsddQcpnCLkbLL3QtAEfmBdTGQ3B5syBixZw",
  "key8": "33HE7tHZ6H3YCxQEbLUDENxTHUCHEWg9KszvY4oAQFJgnxVVGKhFagYZaEFdbpfvVrkGvi9mBgCHHN5foXbGyBCg",
  "key9": "i7a4cHo1tNRX9yEuHH4eJ48zJg2ip4sVeCLTij85sXa39bwJ9hnKRWnB7HMp5CBN2hLrsT51NFa8gD4VqjyW6dD",
  "key10": "4wTYEMLuaUPKcYoUjDApUkmqLBQeWMqP9Sh7Cfc3d22NDdgqgUSMCT94yU4MXDcoXagsfoufPH9i3gFLDdVkNFfe",
  "key11": "4mBTxfMRYWdDDtQkRABR1i2geao6USCH4Y3LBY3p2jHHHY66zhYkYts9HAVmPS5yx6NBkVhhB7FLgbYi5cA2Yr6e",
  "key12": "ToESYD5R9ZU81mzKbMWRgfBv6EwZ3gPfSsFRwiYVrhtxmBoJddbeHPdn1aH64rGydsJkrxTzpLYm65go9MJgMrf",
  "key13": "4PUSDPP7Mz3ayRuvzmGvU53qC3MQPgN5QoxjSLqNY6aA1wvWH8m2PHYza8kMmiFifKQivJhakpG61jHpWRXHN6Ao",
  "key14": "4WQNo5gkzci4gPQ1uJQsmp4Soz9g3kqRThpdpFPxbpiLstyQVTxEwARgg1LDJUq5TH3ddPhcDE41WXX3BSn84rnL",
  "key15": "3DEpsE2xNbmCW8RMPpCus7qXLdfWrBwuCQBdo6ibtX5YrfF7JJDWKKv5rhaG1uvRWhrBHgSjocXRuKL1SSahWtcD",
  "key16": "34C8QbwYNqcfqJMeqmGhzbcTDjn2aa6zDo6jDVRDuM2uwtAW6xWZkNytbN2pQiEC9b8wnuybNP2HkDcA9TgycVUS",
  "key17": "4sJW7UiF79a3eVaR7G9DtU1DpJaKh2sctLVGhJqccQqdGJDGBf9dSNKwTnSDrAjWg5KQttQmrZq5pEGL5YUtbnZL",
  "key18": "4YYV8hkHtEVmzNUWbcoiAsAQsha85nqddwBJqL4LbitXEYekaTu9aMgrEBnDCH69Si5EWGZAA6bNJrvKRudm1rjK",
  "key19": "4fPjxRCGJwNN49vmmXtpx8w2u7jEg5JsM8rwkwdMBBsgRTUcq4NjEpZeqU8qTpVXUzTNzn7Ff2DTMd7E6BiCdwSs",
  "key20": "5kb1bS66VqvvDT1Sj8abJc5UkNbTP6NRrWPT1uc1cT27TQwjqGGvY9sKLvqvFtyp6d3KtBF1T9EWUsG5MnRx2nwx",
  "key21": "2AAbNzXjn4rgU7VxKEhT7wsHUn6BG8m8G3NPZDcnGTXXaeeywEFt6fuecLGS67p5UcB9cG2qSFUqZZHNDpcLH3Bx",
  "key22": "4gPf7TZ9BHd61JPuei7rcS8XH4oF6GeEoiiBKxaGvox8nGTRmhywKAdJggoNbNcnaXQYnTWxiRoK5DPUv3Aa2in2",
  "key23": "3UpX3xRUBA5sACRrL1PaUeA7YaPKgsGrDuLXFxmiFG4D1a27gjYveCePJR4V3PSJtGdpPJZCsE8MdRfKFd8NVK91",
  "key24": "3CbZ5y2gvKoJQM9bcPgA6irSfRnwjGubVscuJi7mehDN89m3xyYd8uDTct6MxVguDymCyBn73m6iHZsYo625e9N8",
  "key25": "2WvqrD1xB84WvBmcdomyUoCASohTg7HnBqDBh1r8Ac5qZvywMwRY8r81Lpy6tg3aK8afRafeoUPS9P48UBJW9JSG",
  "key26": "5nWPjbiGP7e9zMuyEbVaK9DCiL89sfVigEc7L7aeD5XP38kqy4RCsKq4oge6xiDwZuhGW3Ng2XoFgFMoNfJPoAgv"
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
