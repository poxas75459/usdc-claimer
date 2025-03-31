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
    "3dr2mS2D2j8eczEE4gQ3A37amU1Sr2tfyF5XHmxQPXbLVA86gPqqjb7ACWHdwhvmtseuP9EEXfEWDPRe8Dgnb1Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdbwN9x65VvmeEHHDQC9cetAQypoSj4iTCKCLU9usNq8QmS61CgkCvnfNiyv1hh5soB8vQdbHbZqwfQaGV8rxEw",
  "key1": "wiSvwCQZqKWv9ccVzyLbYhiVxhwAubnNphczxDEqBzpzP8BAQSnwQ2RUCdr24G4eRJQy6TUQSbMgFUs4GyEwjKu",
  "key2": "2RGKbJEuvksvAFEPMTTtHvX6ofmJL2NLRqGejRhiAzQSmHC8YwJpYDqgRWo4Am3KE4HTsmwgPuanrAU1FVdBGPKm",
  "key3": "5nWH6e4ENwf2nN7mDPnyLmUYHsa3JgA8mUM2J38MB2qedqEvtHwcfmCCqHuZX9x2egU9MuS1EFU5cnAFPiRVFQ22",
  "key4": "YYaT6BcGzABTGqQjQPt4wip3RnrBBhfjpdbLpBb3rPwhTURa3hV8hGk8YSskCoMkkMD6CN8Vbedvu9Zt5VLNvcB",
  "key5": "71VyqupgA5AecSCiNBXAdGcVkLxp3z5q5zrwNRHd8Bv23pb1NXhbFGyArxzuw5SCuC3bVW6uSft9FRXiV5ZpQAk",
  "key6": "3jAt2f3R37uwJ4YzBH9keeqvCGLXWQJ7YXqxpYkEFjJvse79sNE1GDwJjU2JBRvX8H6esH1qCuWtXUwUXeKJF3nx",
  "key7": "4VvZjxKdQAbhKqAhDTKs5RM6Q5HLYHAzyRzVc9cJxFi7UbSibcn8FYBAps8FBG5Zwp2FGLt3aMoLiPNUJT2x8xau",
  "key8": "7Lsw724wB5k75e5e4ucRUTxLqhQwWZVPN9jETVTuvEroWQT1xPWpwt9RPxshHMDSNFsd2TCSbFrPVE7nBKfYfoq",
  "key9": "3ZSfSqzMBWjCJa4Z5J2xp85q1ctPHDBtnx8ZwCZV7e42F81wxKXd7W52HuGzS6opqYuqhK8wiojFVdBgSDnAcZwu",
  "key10": "5XCJDHupStYUCNaoX9RoFGUzsWEk3Dd2D3S3TS8t9oCf4wiPs1H5npDM8UHHGUzaWymaTmnK12yxDDbZo29nvTcU",
  "key11": "3AyDAfYSH42k37555asJa64q88KU588yUW5ePWbZimhPqLdrSwd3hJqobmnk4VcwrFN8wTMW1HQDZwdbrwaEWJAD",
  "key12": "59Xwktrh4CFmoc4byfF3vBpJmgEJScu7c87jyXA6s1KSR5u6Yt2q1hVt4bqbyv4qhQN5Jb2ratKjvr59gimc7K7G",
  "key13": "2oaqaEpQ4qkgeHcUUhUw1FWc61FyCaijugukbD5Aam6ecCcrbWFiYs9cUgxkQ5rE35mBpqtRZYZVWwHPPSjgWBXz",
  "key14": "2L44cbzRW9VAd8nh8P2eHbUZPHt8cep3WU53RqV2twLj3uzGF8hvRuCiQ6J8yMBsviw47pbSwMsWyMw9TUGqzQbZ",
  "key15": "4fx2wgFhWsh6iKARfuTQQGWzvJuBhUNEfoabX5VxxiHgPDr5ZR4h9PYe43UbiE33S7y3hi7hBkwu577K8k5uDC9U",
  "key16": "2cH3cHLvdKX8fBGY52RYRYAiZzcAN9m8MrCPjiBLfBX1y2Vk5jfoH1uwiruTGQv9zoLA83MZBhCwTP44tPEcJbdf",
  "key17": "3vgLNw1APMC1z43XG7KDR7AB3zdS8LK4R3NtieDi5MvLvD2pbwzQgNbEaAZSWY5oVJi9U3adfB1vQqMZE2MBNBzd",
  "key18": "3LJbDRKEVhQJstm2Eicz6nMfz1tu6H2i5jtDEpbd2P3GegB7Ea4uYxMiPT8GG573EMuAc4zqZEgk7TZt9VCmkNw6",
  "key19": "2j65bCix7v454nNSrAKh7DhqpR5JDfvPMHYjUjEyVS5uMNvvjoaPjwnLgixDEk5ws2RU5RhMVR8TquWMyqnricA2",
  "key20": "34DdwoA2amCDtBjUgP5Yu8PfDTakpMPeCdGq5BQ9gSiipNg2mvz5XY9HEFUjdn73ozRFh2DoLzCT9XeyuzvH5Vzz",
  "key21": "5E16KrhTcK5tGzZBK9vxePR3UznKWGBkNiyGUerKBgwgkQDACRQG68mn67cATLaKnUF5nkjRq7B8DEDJnnRwJXBF",
  "key22": "9DZvxiSFyJAmvvcmksy7ECEYxY616fsKta9xHJGP8oTjmQunJiFgihe8RozTnVzhCUncaiMHdUmJT5yE5DfGN58",
  "key23": "tNtiqz2zzAzHckM7VrbwLQzoDjD4HYSxtkxuCLGc4wXSQJs99gDaAdELNbEHE5Z48dsnA5mabQFzSEZ2w7SsYiX",
  "key24": "2UAgHeLq6wRabJtbQvUV9R1ABr54udhMf2JctzfMidKWZcDjE4FMpDd4nzTJJkXYVUfLiQG9pV4FMUfPeLxkVeHX"
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
