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
    "5rLCAMfM4XhmNqZA3QEfCbxtKoUNHJmWWiPZPX9huT1H3PveEB3FXgfAkMbpiR62wXWjPX8TV7E211zHgi2jwwKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohcjaP1gx8KZoUauvBL7sy1vgXRfGQuCwcuXFMDWvYyXbjJXU4xxYGzodTLUTMys4STbtbWpdKiUwubs1xjAtU4",
  "key1": "3ngCArXxpcp2xmhDrNDpuhgiT5hUbZQowm9XheHfMt2M3BN8g3nrPue4e6wW1YzASHGFkunLX2wLBTLq6bapUmF1",
  "key2": "4UA3A8o6DaeBXeThUBuFghCxbrGhPkGPEBGfsLjrLch6bCHtemZPsXjbamE4rsuXKjVnj6zG3J1ZWjACpDqbBabe",
  "key3": "5UuuckgT3DuQt1Kz28FfKgk6xzcJwfJ3omf2f2MopsFiC215wja1pPnVkXWM43pfsRgNdSa4Z7A6fWQTuKv47E8q",
  "key4": "22hRFgLvwhB2MfoQQEAgaDw8TGZD9d3yVoGWugZJqUAc726WyMWamgzqJhSQq3FEL75T6GnKE2nKhkAULHRUbfrt",
  "key5": "3GKVZbHwmTJKb7H4Zh3DUxucrfN1vhToqLxGqkM1GaDeJVk98R4ji78KGtAydLv5uXCZo1NGetNTihKkYM4ddUhW",
  "key6": "2r7rVbkd2ErEiFy5GWLZJPRKSGp2fk1383NTKBmvp5JoDeL4xUn3zaZeYvRHL8oH5yqunJDY83CbQzNCrFT88F2R",
  "key7": "33dGynBVAHqGsKyUCCoCQ6ZucKVAWraJnL5DJ3PdPm4N1h1fqBxZpEXnCDcZYx6cBu4VhWdGNQGiNyCnJiE3Boj6",
  "key8": "39kmedz9XZKtaEDMXZVUVCGUTEo7UTUZEtNwHYCp5T7KF9STnqTynhBhhqrg5SBbELt7rsMyaNHVk4WYu7EbHb4Y",
  "key9": "3JAsJ3G2KueDh5GvhrrS3oUQ6AhmWHdKKxVY2LZxkWoQaacs2PcrigS2yktmyki3VNwb53XbNgw18tXsygsrZjXz",
  "key10": "26mkSVtrevshRhhwf95CysvyDDpHfcoWJBhzBD8AunUkJT4fSLzRNDw2o4LxCqNzTgjGBKSM3NrKPfEffCr9npWn",
  "key11": "5erTkwoAm5EhCYZmUizD9srdn9gewwq9VFoPMx9xrSWWRX7uHF17PMHhavcPA5bKxJLKrYKzb5TRZ4SRdkBxBvDR",
  "key12": "4EUk9qx1nEJYGU4bLWxtcGQKG4YQgv7dUhvKoJrS2dm6Fw92JFNZcRPqJU8YBVvoPmfYCScaaTrNFgSt8JerEPFt",
  "key13": "csKrFsyRPjRvFDeJS3RhvAExYHEzHXkJGkiMbShoLRJPzhBQguGngBcU1GYwRM3nSFTVja36o4ehMUr5QAfDfKv",
  "key14": "GaWQGGGNdXTwyTyKsDqwdfSBXSvjKqQ5N9hrNUmLpb4psnkUhFuHadbq1fCx6S9kqCennhTFcAedBzTqdaYrZAv",
  "key15": "4hmxvup341KxKgBBVPVc6tgZYqKNSBhZzchJTFhyLZHDhzf1DqPzsrRApmY1QK6mmYMH4h4dgxtoaZ8eV5WqbK7A",
  "key16": "Ay2aNiz6yL8A66xCAJZBueB9BAysora21rJiF1hS4Q3GDK2reQ1uza2tsmaX4XPr6btnAErnhh2gqq8WH39Gitu",
  "key17": "5h7KgB1cK7oCJoEwSfMUtwg5FgkC7bvVraTSf8TnuhNaoGb9eonR5wSyuWi7FHmkmsQPvYzCFv1wD4QFnH5otzLp",
  "key18": "55DD8CzEa2S5skUX5k4W73ecJFi4RQfjLCjzgEfnuUxN2QAq5Bn1Harbuy7j8fY8DMM238mwVqyAhZ3tdDZBNyvw",
  "key19": "3a47yc1ifiErN9kxajyiw2HFyQKw9YMtFXeTRFmv81oE6zvHusQBqjvQKzwrvhwhuRxcc9YRopPZC6zoDp4mDED7",
  "key20": "aGVReNYeJCaEEkM8YzGF47VxpdFKKBHuWQnC6VdQobhCoGtk8ZnSJKQPHhz64Nx7UdWnSMpZzNBAvfpBRfGQy6g",
  "key21": "gdCsW6ibqvR7cxiQWnKkoxSaPa1BB8xp3RmSDNEL9wuqqBhcdAMZP7ti4HbePzuKC1acmn2nUvZtcxtEZpxwBac",
  "key22": "pDQ5qfPDqpVekH1PCKuQY71AkffQtZAhfbeCv1ap8vrXReNkPbmsPWLvaMfHxqn7bTsJb5acESwR8nfCaBf3CVd",
  "key23": "2xDoauqi2hRCiZUDXxog46SQyR1ze9Q5z9UgLFtE8AQoyRbfNfJnExNEjtxFpY6g8KjSwwZpUNeRhg12NuSVyGpX",
  "key24": "3rwvXk4Dk4B3VXc4EGoiF6C8vEhPLKHdkP2uvAgxCmwGfSpSLM9iRcv323ibRho6wXjsACjHry39P6KKVj3cf7NR",
  "key25": "u77asmLx2z87eB32AnzTco7wjfepMvmF8y6AxbhFZLeZkkw4wEkrrv1yqZzmiBT1bu5ZUSbBMy8LHsHHwvHYdZQ"
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
