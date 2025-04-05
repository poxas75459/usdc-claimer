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
    "676pfUHtwJRrWKmCequ36kN19p9bWbrN2vssZWxMJSgMq8vZZSTZTvFDKiJu2Yg6qoF6hbbWcH33o6ZNt6mZMeQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAWjCzgZiLATDEAQwfCUCzUCNT1oL1gfs9kWHwVRhUAbrQ7LT4QyusVWn5LdLbHNFK428foBfZCYc5TcmJwrAVo",
  "key1": "4xDXAQ6BUEY6a26ngpkFrAMqAJvTHBPfk7cH4YyqTwnVUhpseUxh5gNsevCspcxrVh49GXoTb1ymKK3YksZKveEG",
  "key2": "3WxgfYoiygPa6TQC1FpAD7eELfjxeizTCcg9fRM3CcdBXtG2gGtQqRfeKKLkGGM4K9kfdKXsBaqCJub7dai68rdG",
  "key3": "DbsNcb7NTWrCqntFZBGRb5xKr4hyZwf26Qjw7JYBGovxBnAw7VC1GNFjCjsogvESPPugEFZSBQeGWGuVhDpUkP5",
  "key4": "3ey5oksv2tapyzV3ZGEnro8MR1iakofFZ2MVQPx5Wjc5uLNqqfYqBv7Sb2ivaQEG98SWtK6LLdv6pMq53QysskUe",
  "key5": "4cGEs3bCFaoZuwaTzdjR7QE6Z4JK5fRf7m443u6ryrnLQgRNNwMAxpZa6iB57hH1KPp5uwnnSMX2XDZbzbyTSVSB",
  "key6": "3V4ZoGJi49BAQFFJcK2kBrqpN8X9tYM1hYe6pu2vqQPvjVW3skuQExQQfEohPbSiom9F5tFkCw87x3KQxQ8nYNTe",
  "key7": "2AhGHkwE1H8TkeBY3KSUs5upokkszMSLZ1PvdkTjemSWSdeeVAeYVBM2tBvgGn2NgZng6VRGnL8txfm8pUMDeRo1",
  "key8": "62AwSNXXdodZVKb4szDjm5JFhA4XPLuQ8BPJadSLgLkysscTkywjpTk8mN8S767WnyCS5VT6FPaBSu7vrdLsprbh",
  "key9": "pdFyh9riotEZiCrEhjXWcXJUBF8fKdXD8NuY5328J9x2eBLPzRkjKBpPaix41MKHSsetuYX19Vv8Z38DMwYBNow",
  "key10": "2Bx6dto3GXSTqm4Ch939xnppprjGWrBzTeNJx6v92hJHJ123sGL2MuLbgKomA8ZP18czg9mQss2WQrHsErEHx6DV",
  "key11": "YTqqd9AhW6N7yJXEnrtpCBzo8wpkRQmwQedFR3T6x1y7MLnz6L4FiZKMUwpDay5gSzCyUWzsi9FrtCJ61KdTcX6",
  "key12": "3PaNYybNar1anmiM9hHZTmoPY58d1vLDjNEx3XBtdaYJwYa7VzVbHBrAx5XCX5z1Zm3AnjU6FmpbvMWZ1WiNbTAq",
  "key13": "uA4Nb5cC8qskbYRiyy2yHPYsRfZCEsGNRvcAcbXYr62x4C7fs4wmfiNnxd5xnd6Nr47MerfTv2LEfscURQ9nG1j",
  "key14": "3tuFCPRk1Fsm2zB5J9yCTQLGAPJ1H6Pfcx4mAG9Ansx3fGjpabE6ejmpCBdvkrKJG5Z5g9K1TcpSoDiNQxGAVtnS",
  "key15": "f54M1SESLD4oHdahNnjaQG2hGbS7MkkR8EcpBDTAWknSXtGRePBXc54ocHJek7N5KjcmoJujPtsM8mvDBUem7Up",
  "key16": "5sBNc4dERctvP5RQHat17P8QcEun6ndnMjh5e9niftPwRAArJ66M8js7Re3tY2YqUCPzHmkGi6nzCdi4fzfH8uXg",
  "key17": "4H3FDXWQT15vhesRBUiJcTe2DGu2JFjUa5puj942fAaZQZ2YLFjM2weWuaswDMs4n5rjJJU1LxmB2aGAe4Qwg8yg",
  "key18": "52QGiyy27NB76rNoWaRZyJn9zfiCV79E28a3UdwHRkpuqaUsUnyJpaUBmvQJCHAEWiofdLBdbrrEzRg46b5T6ine",
  "key19": "5CwXr9KPWt9QiXwwPKZA9oNaj8qzLnUmXGGbqYqpxq4ccxmobouMHozxXxMrEvwHyYQTiKXyREpK5UEsdkE7ToB9",
  "key20": "5QxMxmXmTa1eEYYxD3bAxhPYdVXWCvHpDbkk6dEP55LSX5t5ns9h4YnNn9iq7exGnS6CqrozygXcpHXvxinXoqih",
  "key21": "3HVzhhDodvqNXyeTVxjtNqMUFDUecUgF517vBj6yswGiV7Fez4X1KfM9HB8ZDiG7emHSepBs1FxSHydWPpp3eN2m",
  "key22": "4pNy1fqaXuHtC1jbZTdGXWv4hi6KUaMWb5AiWJ13NadaPP5LsYaTxiAuN6pQWQWdt1TvabJoVV53qgbgZEpzY1ca",
  "key23": "4pPnzfRNDorj2BnMtfz5NXxo4huErUWnFNQHMeoRPfbUPVCJ4EGokhaP1imH5htgR4oFZQ19USRx8K5HsetHuw3W",
  "key24": "45Ftzmf92sQ1znznMWg2cTRqQH4gfH8uKFAvG5YMnHzfZYkc9UkXkoxe6rDWxpud9LtAHJ8A6zuZGHC2sTfpKgp9",
  "key25": "A34Z8ht2cw8FBfBWZyRLXWmwM21L7QMsZS7MkZZSt9jyTVEGnrBMKFQVyY1V7wLijoL6jVTsdyHPvzdPajZq3L3",
  "key26": "61tWRP2cTw45yDZdiZip8dsbNt3ECY1rDg4XFLU7KLcfcc9gktHtvAzJfTVE5Rin9cLyEXbW25Sp1Ycwwvfu48fu",
  "key27": "3RKvZxwF8VCdMsJSehsUVKkUkeGGJwiCrHowrwcipVfPwcTMaAdni8YjnAr7jkC8Au5tUVe1DKxx9nU8HYMD5rzd",
  "key28": "2MVDJDU1rYtEpax9xHpHstjc1Qmr6tLaVbdXhK1XFsE5zauhUKMK4ERqbkYcjEMp9GVmTmh6ccex6Bujg8L3GAYd",
  "key29": "25todC2yUkaYhzDe6R82EWSLhk4ya3wTK6v3MbXxxUjiq6WgbHijgrhTHr8fUhufkkwmxYavChGhmzFiaQQnpMWm",
  "key30": "2jD74E9R1CDBcr84xZbAUgv4FzCK31uy22bPzBiCk7gpXk4Ao2Qw5yUDLJQqr8gAgxYBxgrVYDgrCMvMZhAB5Jao",
  "key31": "58ReVD3fRRR1VE54EfBq2VN9WA8xoxcKYtKWZeZDuF1LiaepsU9FJ2bz5pjF7wo1KSBCp4rVZVMKtazADdnp2Sch",
  "key32": "3n1TWZ8TdAkzhnQUxZG5VMRurpsRrSrQj29nNfZat6uDRV6cLy9H7tk9L9vV34Bfy7xDkGNiLtvdRbuEHgk2ubC9"
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
