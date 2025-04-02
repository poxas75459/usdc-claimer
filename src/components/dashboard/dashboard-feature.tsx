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
    "295GnEdRU5ufyHzsrcbUK5d3KbiLQawd6iDA77Ubqg3Ps4Q5nKDg6dH4bDZVVf3AkMBcUQbwHaCJPLinuao6BiQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pe4kXwT4pipVz3xYDVhCiCbPPpw66TcK7xRYs5WKGKdq7i6rsPDrnLqsCA1VQgkZwQT6BUGtgp7EK4SuQLBU3J",
  "key1": "tjovAccmM9Wa5F5EnZVuiVzYEHCzPP4xDWFWLxXt4piFpPUdWGgpmp5ds2BPSrD3MgmCVJeeqy4pxawrcbjd9oo",
  "key2": "2dGU4o8uXTa3v47rmyusLssQU5YTKBDfZ3UgahNvxmtrfH3FeuTBQa4WkAFwBwyXT6gZAdKgS6UsrR86nxfukDNp",
  "key3": "3x5aPpQsLVfzySVApfVNPqbz7T5urS4FtpwoTDH7yK7qR5HSEpFfy4fFV8un8SbTVRsmD7NNvZKFzwQzkSDro14v",
  "key4": "3iypsUr7ZMngLPAxQyLD35nCEg9rzGyML6B1YBrqs8aE1xuvj993pzXC11B9sHPG1wTG2Jya85gGDwwittjQEnxQ",
  "key5": "5ZXeQ8KzU3cxKyfg3Uv16gBJW48r4SytakEgnBSqXBLQjSLEHmxyKwrHjrVoeRwYj5qSWPQPQ6hMD4H9UbNfjgwE",
  "key6": "QipgaWcqwmytaVs8i4m6x7uSAjQ6GycRPohnpZvxFTdo2V9uXvNrJsPoa6mDjhrhVqnAWGRQP3rGgT9hNiWXzec",
  "key7": "2pGti4prpnWwSHfHT3VaYz3shvQJqorfA3ZshbqvkhymfQBTNJyXGbi3VEqoneWaL6nyrbyTKgCBfumGxcpkqEHi",
  "key8": "3GMFqKbfKdUAnauhsDr6pEwJwX5e54p3KkazUTm8imb74L6jHXRkXh8P6bxgLECgeQmCdkwpUbScGjDhpgHXa1Rn",
  "key9": "3E5k47GytzCV8qR8DN3SXjyhxdpEqknjL7K4ifwhpDwYb8xLVCdGoPHrvwmYcAzaKZnnWVpggbePohzj4WnJwuUk",
  "key10": "e6yscn5LQogJkH16naUy58XuR12p7hFcuHenLGcuPdpRF2fCnqwBiRp62oaeJrvWMVhJ1byk22yVJJGeSAeHWqY",
  "key11": "5tNUW6G1zssBL4hb4pSHa5QgKncbQNR8JPsoA2Kzupkz6PZax9au1hr1xrLWJ3SgH6ygXiQMRFobZxFpx8g7fD6v",
  "key12": "4gurWUAr5Kg8CWXAHA9hKeJf65Q5sbNYNrA68WDKAt9g8vFaUPtBy4XwQDd5zrrobvdYf1NqwgY9N2n7t7AG3YHK",
  "key13": "5PqfT75zoTbV3fm1TN5AgXT3nJZWLGAcjgQd2vuJVasXcwgQPbmXeEyEER7HZzJyhemWDkEqLbvX9Wy1U8WTbJ6U",
  "key14": "LGjdvcaZpDT4yDTyWkff1U4Tq2VzJEh8ybXptBnmCxQHWrj658K6k5HAxn2DhkSewoPGyRvkzxECxcQLrVZpaoF",
  "key15": "39pNuqs79jwycJLnug5wxPFtCnsuBaVpvJWEtH3CTnaux4CEcYqESL6mPs579xDDerr7piwpDA55LZCqBT91W34U",
  "key16": "DJjCFYEsJu1muCFwPYPc4GbumvcafgQdeKupLScJrtzhJ9MaqKJ7AeqS1vaq62FUyoSZEqmYaRr8rrt17F55t1z",
  "key17": "474Ngvu5WzQhK7WzQFazFFvPbnpa7YB1rqxXKsHCLUY4SwqAtJGEQodqWMqcy8brCWX9dRVPr8yJoWWEJzZ8bUaA",
  "key18": "48jowh2fNK6jHjTkCH8t9NtYeXX3d6Kqz4p65YB19H9PxNcbDwirdzHFCgHrb13P9myp9gPrv5szV8xQkuTjXnEc",
  "key19": "3q8L9wFqyoVcmpTC44pKGyU7R7Zw3Mf3SgJmFUXVcQBnevdCpTHPzCrW2foRYJtccxwc1SyJBQFNmkPmzMsWuf4T",
  "key20": "3ZYyrehbmoW1yhNNjnuEgyv6Af4sfLrxHfJKtJNYJf84Xcijfkj5cHCQ2TBLddBnm6S6UW4tJQQvwKsSm3G5QCz9",
  "key21": "2BwxBJLbNhkrZfJTzc5Wbr7kRe26kHcJ9oRxDgr6vSuJYKNW7WoKT2YLUjUii4SSYDvqRy77FB25YXZ9QJYSFfmm",
  "key22": "3LXwpLiGaS9JQ7yHstrAXXxYmfLEwZCJwAW7jwQA2zhF5pLVpqDg1qNYzXVMb5PtCHinBgqJh4xxhYBYPNnpNx6z",
  "key23": "aE6qnq3J4AGBjAkWS97yBWABZMS6WMcRuMVwiez2wzuJgHA9RqK7MAnMqPDhiYfhK8Lk4TiX9P2We2kYKBx7ow7",
  "key24": "3K5sDV6JiBYDcHp8Gh1fRzBfaUcveDBNHMTv9h9RsFMieH3x3YbkDZGXLt72pESjYXch4vN4Spzhuc1ztcL9o8Wk",
  "key25": "2CAjiKxsxNZbhB8ZBj9Re1ykxXtyxp1TNWxWJhuxWCwJv3ghhB4V93s38v999GJpCCuWGWZ7hTrVnxUc3BmqBUXW",
  "key26": "5H2cKjtVeYGj25qbPZxHcEjMTRRWLynkcrS4aRp6FcXNjbXdFcTUrxCQPk7XgDRdpG7A7db6YbRN6GNPekP34aEV"
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
