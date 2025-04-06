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
    "5rPwH1JyLpH35Msc1pubHWEytZ4zmQLHi1u6NQq8WfWrqqCZ2icSsnBUhQD4QfTttqB2mzose7bHCFTRdK9z7BuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dKMJh8UiYT5mbA9PPYvpQxvXduqiYmBE63poUUC6WdMoRcgLvrxMEgiqwWnH9k17TUhZTyajoRZfSjTjqGAN56",
  "key1": "5Gw9Z5gkUZWrwFVD9yZgmuh66YiSxZFfUaRqjSufPJr43814BMwGyaMuRHCe5JTgRZPgpJyoHuvgTJdudJsegsaa",
  "key2": "5FUJSeGGuc24T8oHxZtBBtAA6HvVk3taTE3mJEXakm7BpKcrRVAu87uFK6RKo8HmoKAY656XvFpYrpX1qCt7UJ9Z",
  "key3": "2jQv4D9oaxEAU3MHdxtkCHvqJJe9R7isoj6us9nBDBVMWidfYb2tTbvSYu17ZnpdJWpv358EKXKvu4EEm1yAZiPX",
  "key4": "5PG9wWZJoJm8Ysb8EJfm8N64WHwHHwMj93nfjiZpMQRhp9ue1MxRFxFRMRhzfEd7KhkXRYr2GvovZC8NTqRJUNcr",
  "key5": "mE3x2NR8PBccM7mB39jm7We3j5yVScgkGJdc8CV6N56DouLjWg82PFC6k19v4y9eUPPc1BUpeButKPmTwmphFVd",
  "key6": "3Dyzx1LBxnifN1qEZnf6MMDbAYk34yLbyNeKWMNWMzfMLRjyxTGvuaAM2Gb7zNtw5p1uN9CNHPYdLKTnHYNEfSnu",
  "key7": "3a2poEynyUHNi2GCpaS3vswEuEmNJge693Kd8dtVSp8UvccNejdvgbQmftpcLbUiGnZdvTbTwcAbyKLGJAZe73Av",
  "key8": "2PvcPL3x91N4MneTavCunLCKrYg3LtV9hLWnmyeGxy4b6bbqDdBPMmgrjYBF93prmcvditsb6YFtFSFby5CTrcBz",
  "key9": "63REYRirT41EYkUBSEKATPp2qx1qzyrJR24N1ckHbY1mVUwdRiSyHQfDQvULfiahfySoe7Jv5Z8FktK2oS8Z6CCR",
  "key10": "qRzcrsCDQCkC2Cw2uoWGsvsZEjonkq4uuumDVkxUaNP2guy78gP4DgVnFnqWhW13pCN3ubEhoJjKr4brzAq4bey",
  "key11": "2aF7yhXeRfYVhBsJnzDUZc2kZBD3zUojJbAQ4eKaREj9jxehoZvyVtgAaM4P4UernZCbySUDsGQceJanJJMnz9de",
  "key12": "6326KgDBvi4zcwbu1SSidr2yTJYy4raRpC4uWsx8QndyugEYbMWCoooXioTzAn9ovrBzJjtCm76XZqZ7ennRyXVu",
  "key13": "3mnHBe8Qw2SY4toefmF6BxxWXXSZprUTHh2GQ1baBDLyb1mj5BaDJisfqNg3F3g9YUKDvg2pjJk3n72dJioMg4CY",
  "key14": "3UNBeesM537c5fGdS2MwQM9HUNNKW6Amw5YjDAtReEPo7vjwzKqQink6FTwZkJMedzzU86SqFHMqUdTFDGGKipdi",
  "key15": "5JRMxwPtN6k6LGXUSyxtA1a7TBpv1ef4YFGoWrwcA4qr8NmomG83x1o93Bb2HzMKedV5fWpUJcLeLmBLsFFkJ15U",
  "key16": "38vwVA1ZEtwF9fGNg2Vb4mRSpVirL43PXPLf7jexM9CJsCLVJnzq9gw4rmCzXRL5QryEh3iNdYPfA8S6EtBJmpa4",
  "key17": "4UwESqaC7N3rzcsCjTs8NfpoVdTCrDeySwpNdWiRWw9vknyQ72YddkeRPAS52XTTvwPJpNtrpDRW26eFByNDgmzy",
  "key18": "4x9AHEAfxp9bCqr8dEL8qtnho6BG3YmkgpTScb7X4zyfYLbU74LR9QeHAumqJS5L4yzyQ4wqzGcAwmdGSQw5636U",
  "key19": "5x9TMHHEp4hKy241Uw21YKtnitN4K6wxGKfrChSKU7K612jnCsgN6N2u9eq66mhUdJLEfYGcJN4xhwwq78qqA7gr",
  "key20": "2ZAkfMHtwud9CYKFz3jqWYRES4LWx76M9cmjE64sSehLRm7cx4K5BTorpA3hXxV7wQHw3FDs7hVw1s3nLjpKuMbx",
  "key21": "2XDzJTrJs3syrxeAX13e8BVWJFcmn9S6YuwBRMPgWgMCoiEVa128PeBBumJ7rXzx85hAZae7C2wPJdk688wBmQLB",
  "key22": "2T4RQnZXJJqpZhhDw7QvQScjX5HPSjFwDb53YnTFa6CX37j1HXqFBDNg7vXd9jBwx1UQgLGWvgwaj6whQeypEea6",
  "key23": "5bQZKNZk7MWv4wtri2UGV2GW8wZfmswjjs7NLJEusw1cXXT3J5f32NRQd1fQxDxnc3UDJsuodHLi7ryMtqcY1WRH",
  "key24": "27PqSenSY1ZyMd5sfpGYHRWKafKzDMQBQwLq6CwRkJaRe9ARyDYPaSEACa47BsVxsuczmQT5KZM1J2EuucGYhYBw",
  "key25": "4coQiFdYanCBMbwSNiFUpCsXEY3HGsD5e9HYSxgbz7pGgrjvmK4CxSuE2VnEQaCmDEx6HgoANCt6beLYD3dpysCF",
  "key26": "4Tqch5gPgU8rgZ8K9Sgbv3uUua2n6X7zn875CxPuPC8FTWKBmEzKoaMwMQQAh9HZoEJ1t4zgVw9oZiQ7JMTXD6ZN",
  "key27": "4ZRHKof6mUndEf63QPLrDd1eZ9qCew8N73Yj4ga8kMJEmixCLtmqAVHFxrNrpBKMPdcEJgugh2a3HBWXxiKp2f2C",
  "key28": "noU7WBUnMFzawyJrYNpNWZ8kPfn49oPfgTbpv1jWUwp3f2VN3t8gab5GjmrVihpDVEKv748vMWgvYEadFvU4igA",
  "key29": "5vNJfjndX3eLu2URAEHqTFWtLwZayPstSzRHtibEyN1M7Dp6PfTbZd26nPHnrFG85QJURwRHAuj1fN7whPsbfVqh"
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
