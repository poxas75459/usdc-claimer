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
    "2sAcfEXfoDs8ddqUpTAwiSJRn4jwvhGkqmY3pS9dEkJfhpfUmsVWtKbc1jE7EibgS9wWyq4t2kT79fg7Ez37xC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356zTnhfHKH3wV3Sziv3TvALBeWMBz9i57C4FN15vUjpS2R19MrhAtvtFp8TnYZdN9X2NgY8PxcNwFcL66ZUuqcR",
  "key1": "556DGsRAd4k4TFwvaj8TgcAvDB5ZJmQzR5tuxMq8AY82Sey6Vxr8WizUh9hN2RGUn7uyPv7NXMjbqquzwiHwVhPk",
  "key2": "66HrorbXxzpWPwCtWmU1JxpVWxDRRewDUStRs2Mw3wuiXgwac9SKs2kZg9rKPdkjixL2QHTBXWvjEzV7oTRcc3Rd",
  "key3": "3mt4fYcKPfkr1ytAtVsPJSsPFLtvnWzaiDSrxqEx46XLAcwrSY7brYicmdUtPD3JYis3Hao9fXc79WdsHjXMTCmN",
  "key4": "3AbrtozVVxBb4k9cGdSgjLDzWTXe34ZFFBW4hgqDrjsSYhZRbC1ZtqoV8h1sjW8jzcyb59YcXwxXjVB1sfPjYwvG",
  "key5": "3kmfU7mYPGTuMGK22beWR7XpavFW7FsAQN4DnfyrUS1kfbQwgE4jgtzoaP1d8e5WxAuMxr6vRaEMsNwLFgLVUbvD",
  "key6": "2MjmVLpdvGvPSjndKunvBCbbejenopcPp61tH5ogx6Mro5Gx7dV7mW2xwTN2y6tRrj4TnzsU3fsGvsYFLApS3sXE",
  "key7": "63iHhRih9EkTJCCSNqGJUw1kjQ4n35iyFN5jjv9Ua77FcoPVKTV4hZ8U5FWgwN6Ui6uZuiptLQeAxdMFNDDJJyPp",
  "key8": "y4giHBuDtTMymU8br2Jcwg9W6Ezsit9psT9JXGwdEcRHrPzvGL42RmUSH8qnC2Fi53wPeSRSus6QMA4LhptqXHt",
  "key9": "57UkJXq7NTAyfoj3ddz5LsunM6F9tVhjPngyi76WAYNPmDghTessoeKqQ4bhs5JXiCeJkTjVhNi8726GNktatJDZ",
  "key10": "4QQut4SGje1k2q5tqXWF6GyEd1iv7XJox4ntQ2EKouEHNGzyGbnKeShcsJ3fqCv2vz3EyxoXgiSxgCp6UxrmH5b9",
  "key11": "41kr2nokbGnWCWkvrcSeAbf4TXfw2fiKqXRRrGfA2xLomEJHdp6qAuczNinfogeeNvp4EUcxACFgFTUzDhyzNFGr",
  "key12": "4HiXtsUMoFG4kM6JRRC7p2eXrXmBAiEEUL8G7j7wrpC7Facpyn9kBMuMUhLLkRyJ4VjiEcB4ZNwKn4r25TXTHM1E",
  "key13": "31AqFvSz2Vc5R5kPGvEt5da57HqSwUmix4Ex8hELu3HMQNqZcongZXNxcP1LbePL1DWo6gHAi3wZVUBTDAcSWHd3",
  "key14": "d4XGvXYrPbbB4ZoWs2pzWHB1whcXxFJsigt2LsCE1KNAAiWG1JNU1FWEB2uGHSn5Vmn1euapXhCpXZbpMCWesj8",
  "key15": "6awqk7RUMpA8KDx4m6ZoUQumLW111zYFLERffYN7Fbd5cF1L2qDvw548hRVKCzZhY7KECc7HYDu4LfXtTaxc258",
  "key16": "4JB5tM4ogUqdTWNtfPCxNg5dqUKXYT871Wdp6ZwxdNgnJujwSxKAh7fqeHSw3SpsKZEh5HqL5hYcfkKWtwMGaH6s",
  "key17": "3v7bKGVcf6fsDeV6FbGCS1fpNDrFPLhAzxJoQ9tAop3UbzZg6ZWj5rcAdz3TYRQrKZK1tHAEdhuwD2NYu8JhqGGw",
  "key18": "5y1YW16ydk9uegn3VYAKMB9SDZMvwv3SCcWLEH7amMktNDACuYzPbjgPGMpX8D1fhfhxyASvC73KeR4ZndTdNet",
  "key19": "4PmZVtsjkRJcFsM2qCVeZGfMTzujqrmkShvU99z8q6cioioStZBtcwpye84SvYr5xQEAKFPHfnQi458L1sEZAQWf",
  "key20": "3CeHxucqFDZwZaSFQJNrkqoqZtee7Fo6W1yLmPym411rFtqFMiqwBU7hWw4pTmC1qenKk2a34YZMLGh4wX1dVv14",
  "key21": "5JFSbBD4jDTbq4nJUETF9MQB5PoRYu2WPdA2heUNWPaUr1nwAL2qMMXAmw1i7CwgnZJhZbgfDM1hXc9rpzQXUmPV",
  "key22": "3U1VTmGkm9a7KyYaearA8jKfGANZDdPr8A7vNhS4cfx58EDiSS2RKJ7RGF8JW9KLykjcpCdSKQLEfcoaC3u79fwL",
  "key23": "3MwYRT6aQvX6r9kGyVz37GDZs445AxyNVjU4R98MZsrNhas9DgKo3SijaEWWhHun88xiZSC1B1cjqzDEAwswuqxE",
  "key24": "4tY6zoofc5TWtWwkqND5r7iGWkJcZCaLSW5xcLqgyq4WCsoxXyJnmh1JPmJ16L1kwKzA84sW5xKb1GbWTYfJSXEf"
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
