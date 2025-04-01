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
    "3E2zqwB2DcyjxNz6cbo3QUCqZfehYMWXeubJxHXe3xgR3ixZPhewXe64aFv9A9m3vskMUTcgLTDknh1Z9yvQm8bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDsZhGnYYqQuogRHtauXDiEpHL2Pucr8HuioLvSzp4s7CqphJi2QXbVVhnKgaKBCud5kFtFbSM7yeSj5CrsyNod",
  "key1": "4hXS1gnErBB1cAyjezY97B7A3V3nFTEVvuAPNfeWx4PsTiBFPagZs7AXhchBa6MqTV57TXCbqFDAL2x9DYfv4GWG",
  "key2": "58sgdJxLB2CcxXK3rUsBV8bLzJhirJZkPDeKKFmJNKHTraTJow7zJseUzTKFKtmXGtNswhuTFX9MKE5j5C1mZx1J",
  "key3": "2WGwsAVTJpqJtJ9qTmVe3Dj6sTFf3cw8KQk1xNBiwzT5joRmeZ2k5geYcP2TbjVVyHxDGp9W2gWxogEx1dTv9Qyo",
  "key4": "2L9Q4c9voPdD5pVbfxtrTM3dB8VyZsWZFNZXhckNjBEpKABHsibCjGwx1mo8w12ckQ3Dm6Cf1ts2MEsQ21Bq1UJ9",
  "key5": "5rsAHeeV8YqtiTBiJ5uUWB6M1kzSGWj6id8BxCTfPjWk4h5mqxML4ppNkiPx8Mo9tA5thSwCkgXSTfYYMftCbiSh",
  "key6": "rpXxJ7PwDhfvhbMejAYthhhVPTziKAZYEi8Yh6WJJvgRV9qbwjweRYcMEgCDoVa9bmErB6GwBf8AsZz25THXG3R",
  "key7": "3NzXUhEcoE4iWnkBbfWJ4t7MPqm82dX5vm4btgCTGXxLZMYJqtmWsUDAwvL2oTGTLg8YVEx12tb4sstUZMiFZSeY",
  "key8": "4syo48b1xA3vh85kXY1sG9Urrp26Pv9paepMhm5XtR6z2562QVMn8TyPW2zmJxjc9iHsxKpUyuFHG8KGsKMG8XNv",
  "key9": "FW8sDhooBFH1NaZ4WorcSGYKscahWwAwuLqpYWeoATv7Q3xp6TgTnzWoLZDCNQwEt7ftTR4kQ23suEPwRj7hUKd",
  "key10": "2Eiqgk1t6iqf4Lxopsuiyu1915FpteJBHMrvQFhz26uTPQ3ofYkGywMUxR63mDe113AYUrZ9oMvYqU73PyVorFFN",
  "key11": "3saoVLw3D88nNeqU7C5Vat4uKnrh278XAWz1PS1khm6vT5ui27tEYd4oZfTony7gmf5shqvZuNAnmFYN2trKrHF",
  "key12": "3u1YpEJnUkVhSrL7nEqbxsbb1CNK5n5FfFL8GxsGqDKkJmDSnondxsXud1AZfear8JwKVZQJhCNJ8F53J22aGx3A",
  "key13": "fG1uSJ5ayZ3jbXxZZ7KpNYbQa7LBM5EiLajgT2TwAFvyNoiUHVkA5ohXHwzHtLXJFUs1NRwWpF5c9GcBBKL2Qou",
  "key14": "36jVNY8XWSGu6QWBdi79hqKM9FazBPhoJAqB7QDwhrvoen9a7wMvitayGRqfjyNkyZ94RXEB5RNqyAQQWTfaSSuU",
  "key15": "J2vX5C36hYrUZqnZTMUCr8FqtQ1XBtGHaG8BGb8gExAxiJsqxatCxYcJYHGSEm2sSysX89S2yxXSMZTF7BMgYW1",
  "key16": "vL7UaYfkuFvv8bd41JD7SVJj1axcb3AC4cZuK7mWgJeJ4qqnzcHmr2deSxFvRvpcHbv8a55u9NwMUfUi2QCNzL1",
  "key17": "4eHGnF2Xe7jrjdxFAkZKdimFSUzsEbUz7FVZYBqjCons9MKa4XYXUY53n5TR1gyXVf3WiN18simPPuETMVmTn9w1",
  "key18": "nWPMj4Dp5DxcqdqH3HZw8wmCA4cgScfAZoT3KP7R4iUgzTCVZ1RVDCHuTwy8bHtTnJxPyo2z4eLSJ4zbR1JWwNt",
  "key19": "2hFZV9pDRRZKqMfgEj4rfqPiYCoiXVCQ4zxGHmAa5mskG3dc5CJrxjf7uaa79ZRRtPqR12YX7UpdsJ8LhNFqRUCZ",
  "key20": "38xBwyymRUJt64yeCj7Y87CzR16FcjwTR2ySQJpRxj8USyRPswrUAtZCT173LLeyhusBq4u6YngkHx3NEKRpES81",
  "key21": "5fqqmPAv7bx9JnreWkTKwpK7gcDFgv24XQfby8KV8DCmxjFCHwoJDYSeFj9YJrsmGm2JCYnWwt1zYNnS7FHjF166",
  "key22": "63WHBmS2M8BLnvt4qj8ynjco18gTgzBTsyU88YM1iQgyc46gadLbeHzSNRhP4grPxue4hkxQPGzrdBm42vBTGHAZ",
  "key23": "3wrNjjDnKaxCUj77EP8Eib7vZkFSezttjFJszrWSPQBBii4WexMJhXDaS6dHsJEyHotmD3kH3fwrkbABsMTirVot",
  "key24": "3rif5jKZctUS6X3gHfpmAav8iH36s5AbEqzuuLNNv8bcu7KgRnPMz1ssyoD2ZYTy3bLThjYoKUtSMREmCSNzBfHQ",
  "key25": "5aRmoZsA94hY7HvUHyN1c7cxdKK3ogBMsGXysUMA24Yo69v98RN8QWaEvk68mPhoauQpjGLfCX4Kv1nSKoeZ8n3K",
  "key26": "esyuPzgQHmkhVKEAMH2nhqczFzKZwSFXx3CENETLCWwJz5NdoZeKrGpZZPfPXKxq8EtMb9gptmKffA1QSwiDByP",
  "key27": "42H8BAmZjxXFsuP1Bxtrc9nUDzQP3NXPGStqbvzN4TYhxCDKKqmVxSez1njSZr5tcLjptnnCWuZ1278ppkPeWxGH",
  "key28": "so2CtgfcUHHpsXoVTmsuhwp2gheYdvUzuJyve68b7P2xUuNLsrjY7EMFgkwjRSuXB8dHGJ64Cyp8PEahLTigUgP",
  "key29": "4o3Bj37JmZyVucHrfQVuaVyF2MkMLzHzjarcmCznTJBps8TbhVgqmq77JyeNtKxMocoDd2hyK2TRpnAfPGASDV6s",
  "key30": "4aySKwHLyFLGQZvwpKkpff5swiCbTuqWhx3bDd47YKT9VFiqVsEP8iH6YwW3aUyqBr5sdCdrUvoD8gGw92Xwr8EY"
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
