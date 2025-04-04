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
    "5cyK1EiatQTCpWKWjUqurV8CDQFpqA66N7jPMkgguaywV3rTTo5eHvJQDq84Vp7QSyw5wEtWDKNrADUJhcW989dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7Y5JFt59FRreu4dPUzsb4ML7noi5fr7iFBzWj9BHW7qvZxDcQU6enZjxdeBZSAzMp2dtxo5XTjs6Rqb1SJebSr",
  "key1": "3xy7ekY2igPBjC3v4gdMJKSi7aMA15reGx38rEGa2er5jSLJu1VDQ19KuDjKCbpqAfkXy6ATi9msazPe9qzBZA1n",
  "key2": "2iCaSMsPRmaqruo2hXTqKbdYk361R5L9uSDgTGzECVQzmpbf8SjKk3S8Rh86uLPrnhxiLTs6rzt6RvweffqJtR3C",
  "key3": "3YK83hANRuQseLrwFdSxZQKT1Q8hCM2HRJG8gRPa5L1iCPDNwf8ioS5fXc3ci3VrHrMdshU1xP1gUTYRghAxLY2m",
  "key4": "29qtYwBnHXv35WUEEUPRfhecVMGy5tanHSzcLLG5yzJsFsPqg7u9CWK5pyQTZAdjzBvHuYJQXWssNpj2T5NiiuXh",
  "key5": "fc75UAH3dyfzGF8mwLJnGohhKaToLsghqggdN2gYNfVpX7Uj7ha89skvDgkQNxDbiyRmdd7WbAcRcXXYWnH5zrj",
  "key6": "3qhuU6bbeyk7jGf1RR4AXMnvShUPtFvHD4uWixuYqKcDWMo9JwQNWNyhwHVGRWnXnWRG9pBX3esj3yn5ECGxPMhf",
  "key7": "2bm9MXWU62KQjDxq9Uhe35fPKzP1XZiay3pqroRiS1QsixTaqR2PQg7nTqVfsAUnDH2cUUcNQxcjA45ZMk6YLThB",
  "key8": "GhBiUjrCznJMSBQf11fUGnet3Dacxvs4gZHgBXvioZ7prHTL4RwPJxucm6hWHanUmypWnvvH6hfqFJ58mnHvrEi",
  "key9": "38hsGEZRkKdYjSzriNDRyDAqxf3PgiQTAzZLcEBqoYdUW4fJ7VNChxxXPjd7Fcgrq3Y4bsx4aWTx1aeVfovCojpe",
  "key10": "5MphWJJ5NWNS2bqZvX2SNmNUPX3UDNp5hVrBUD6p2wy6E4G5jeyna3jbbuJeNovyRrhfE5NGtHdRxnW6JWZXsUNR",
  "key11": "4j4Mq2vLf9s85gJWfvKDhv4yT3x1eZecJndqZn8km8VqfYSbUTekB97iWdk7533kyAggTSvFBQbvT38YujFFNru3",
  "key12": "21DjtukUskKxRXf9sjpNkztt5i1Qibc77a2hcUpNyPUMQg6ST2N1Q4UG2MCCtAQr77r5aqt1vZ3mN2AmsBuqYi7V",
  "key13": "3KzVbpn1NujGkTgjiLUge7wRq9RZW9arbvrp67RdDdQnW2jSGLMFtaiKmT6Ff5tv4Q1HdaXeYwBEDnXuKeHZJwu1",
  "key14": "5x37qAWhqJTGQtzCHu8BGLLkLArX1ihmoXuhvaiGTUDgCBtWvbeQJpktp5WxPZcs8YjLTmgiGdDrychxLCsbjr3d",
  "key15": "2mmgCtLpwnNYFEVrDT3F1XdAPeBYfiqzSyGqGa2tDk6wVBU2FiRavJMpsufrm7Gw5XrH8RnAN8y7CX3onMTWN53f",
  "key16": "39bW7SmtkhkbqeGJuBW4iK6Rgz8dMs8KQBAHemXjfhvAPpDXyRq9W7QrkSije8X7BkoKdJpEvLeoV2ZTPRsrb4uF",
  "key17": "2ddcTFsncWAZXD4NoU5kUpGSf99BDJfM5zoqRaGMA2FKJt3sqwgEb7QsHLWpqQ9NUqX8SHEPQh18RdHEifyKbwCv",
  "key18": "4Voh1hXmVNmkbhkrhWbD2wp7J6anQvGzXNkd2GeMbMcwVVBfYWkbVbJDtCWtFCXDXbRu3TgUrmUdMu7WxS6VGsbg",
  "key19": "67m3QeJk94aThJ1ZptFistEEGC2UKCWEE1NtJDrmKzCg5NfncSaAWSoW1G8i5F5asWfmAZUpdfaukMJGyBC6Fud2",
  "key20": "5vrFzFY68Jx8CEeJHX1MsGBe8ZexCozdSgMN4AtH9kuMGvnYhYjSsUw5v6pFf7AqWh6wZ1kHRGBSRm4xqjeSZhAM",
  "key21": "3hDCFUZ912mRzkaP6B4NwCcprvwUwghqBobhZagxKZ8fRvkj5X7UqufCyDiv8m5T5ksTHA3Gu5iNXMDZM8wTwMWY",
  "key22": "5pZEo3drmFRAFidLsPp7rnHvBih8FmshMDMYN9aR99ePx6ZQpyzPveuxftRoEaHPjvig9Uy6DPmndX3bnazBSfnR",
  "key23": "62ZCBJbjsRE2XJxxWWzjqWnjEjt2ych66Mp6jQs9naDEZbaVbtP1KiJueveR8VwYVKFpgAgt28FuYJL39ewZ6zmy",
  "key24": "3KXuj7SCgF2DZegeu5AzzEm1yHWC3fwsJca1u5rkFen6UAC4BhdPVsGLmfMAiLWvGfksNF6fzyaUdGERbMZ6x433",
  "key25": "26KJYdUbdps7k4hatkWGNYKtdrnVeAZF2PThBhpneACRHQQsuJJUkc9hkWr3TBGBcqvZRd5TuFHEfLGNXS1JaMMQ"
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
