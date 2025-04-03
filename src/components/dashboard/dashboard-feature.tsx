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
    "iAXi3U8AHYg181uig3TY75me4vGSAebV7nhepwwwU2JTJHJ36bLErGqv9XrNPgcc6NzfVpX3B5SrmmocE9RE3wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ghSYDiBC1pyWgdZomgSWSvMf9hWj2YUZpKkeM3pVKcpy8U6VmHzHSAztHCdPLx2q3DC4medVBhAkZyihif5VY5o",
  "key1": "4kPA2BvTSu2d5m3qwWbF6iBRJh75AS8Y1XVdVG7GiSKk8KpCK9XwBDUAazKtMPCwqDrmgsV2MDwtQ4eauL7PG29H",
  "key2": "2s6jng7YGjwKBatBk49VrAsnopuKambfhBsvT7zafgq4XPKfcZXPSR8sz5KQmUhcaV9cko2Z6ym7Nytv2qmXNuhj",
  "key3": "585hdq92bnroV85VDEKWeoRpx3i8piYnxweHhvdtX1MBuLjJvpw9utx6Jp36uHfQVq1ohZWBcp3TLJqcmePtpFxx",
  "key4": "urAULNfcYm3AChQCqfqARp1WN9eLyofEdN1RY1Tbp1xtrjuw59GKEW8t3qDnQzVBnaV1cCAi17aevCGMjVziYaj",
  "key5": "3nzKVArhLNWpCSXTXjnBsuGhAqBvHXSi7cowuG3tD54cb4ch9TqUZwNXsnaAm8jW4YFZubaGDBRiQqEYV8hMP29n",
  "key6": "5PmHVgs7iPqPHnjnmPRH2Uo9x7SPNsnqBgQ5PtR6KbZAJUD9TwkkstqYy1w27xTbS2hpvcS9yAFdxBMWxpfxC6aj",
  "key7": "2LSULeBGGia6johzRYa5o5TUKgWa1QKcRvaCerMbWcqEp4fiq32hnfe7UZsmDz4WkJtEXbY57esWaGMFVnGdzevu",
  "key8": "3t7qEVoU6Soh2N3Ju6NdiW7vcevMV8DzSq3hGNsaDCDM1zjUdkntb5zdsMoNbSNKgiCmkwebTWrZxwhR1eDjxoaU",
  "key9": "3f5dS9b6kJXsyTypNZoS2oicsuWPFpkvJmDHpWAeRZaJKSN5rKSRaFTBc872dbsmi7ASadFhuw1STPuVtJM86U8V",
  "key10": "7oud4T4vaqu8eY6boqQFRxwGxbnzhuQbMExX3Nm48L4orFEjn1Gn11pbhSNvJHnWvSTaYZjY4nFkQszct98WQvJ",
  "key11": "4ASqBMGcRTBJSm47wdmukKccE76aMuUVAeCgwNiUEKmfNhEK7JWWErRkrLjtV3f5opfiEh2iMMvUsCWdn44zGiYF",
  "key12": "4xDRo8jqyApqk6s3KfrWaoKMihpNkGVwiS9yxm66o9kYKembababexuQkatRpV282Y5JdRMLWxzinznyTxHQMGzc",
  "key13": "WZvz6zS4yyDVjY92DHuGqy9fHgU1ZJKWFQLZFim5LZZcQHBVmUHWXXobZzng1EnXy2UB3DMTFNLXis6YkiQopmo",
  "key14": "HSmA9dU2t41sMFRS2timKNjeuJKDVJ4CVjvN1gKLPkRLqbD3kr1pZMmHvYWu1PzqvdxZWoLzeGZJMaVsQZioTFK",
  "key15": "3qREVqhwZJ646wzELT6kAk9eZfRDaEm7aGQeHx6EVM5pRrXoPQ7CgnD4qBbdunsPBR9e38jPetQH3Cxb7AM4zR2i",
  "key16": "2uMZBSBfCG9KviN2YCj51R9FYsSk2q9rJrDBsdF1s1DpsaHG5JRKwtmMbJbJ2Te8S3bWc9vWdTC8hVgpjpLEW1Bg",
  "key17": "5kJDAtnmArdAvQ1q43gg57KYfDAjXG7YoaeCNamokusGtG8KH9dvE997WXZDSnbW66oBSWms1HgYPuqC4dyksRrA",
  "key18": "5uSTxXM6gkXZU9qMJxq9EfJDAJjfqHLy2v86UmEXdYbUSEUaGWqTKaQag37tRXGRcFbdZ9iw2Xn3t4PZnD96CiXc",
  "key19": "3S8SycAZ3irBSXFTScvy3WRMWCzuAX8EVwJ16NjcZciX6G2ECW37ZCJSg9mfCSBG2TP5M1JiA4BGbafrYjq213fN",
  "key20": "wSsrzh8qD7CiG9ispqSECwHN1W5qEbHNLo1n3wusLY3ZHqhQRGJiXH3fLfgPpHnBAj3y1sWrZq6upaLbnFTKhMn",
  "key21": "bPNhG6dbMhVQtH7y4ivezK4rLiPgjBjckbqUTSaUFMbW5gQrgMb38gE6vPVtMFFQzdcPjR9m6mggkXh8U2g1dfh",
  "key22": "2hufMTgM3c7Uqmg7VpeyGgXQ4R1uUp5DXVcziAPcqTfxa9ryZ9nei51aYvPjjCCafo4AnXupPZGQPgiXdFDdBgFp",
  "key23": "27Ug6hZT6o1hyAnXJgw5muARFheaqtbCQSuLr3BqFzNDjrMq2v6PVHCVDhA7bUY34cb4MTUZPzRKocRHCmbUaZgx",
  "key24": "35cAjUktJ1HpDWYGNMkBCCGkZfHsR6dSYQiAzvvyc6XCpShpHBFzQ1mwar4cg7wGF2mqtz2vXLRkjvmkPe5eDkEF",
  "key25": "31iJ7QgGUpaQ4mKtY4nmZQbyx9trjKNkXUooQ3NMtAPNX4VzFQy9S6VkbJ9qixUZkUp9x27SiwzhoVFhB56u2pSj",
  "key26": "3qZ7PSXH8pwsspYraftJSUBLcxmYCZDLzmr1aXrVyTiVDBAuSvUbkdiLxhFKw31kSzWecyjS1PehK7BcX5iePdH2",
  "key27": "UXRNdpwvcVTuidQ4vYNpon1yvLhCC7dDmJLpttLMagZQVWnJnL9iC7AqoQZcBW7yBqWtXjh4Wby6uV9wxTDi251",
  "key28": "26UBstFbWmeUSDbp9p8ADfQSUHpyV5Z2SbLabhX1QRR8wKyKUHJcdyCqiTkfkAVgSoMQ4r4bm4YdvMJuVUw1o7HS",
  "key29": "8RjRzn1CkHpKSL3sUvwMBkksL8kxBLhniKiRKANiYsPVrFZ6iZEfP6ffqSeUGR5Z7E1MigfhiHGNV48xaChwUiF",
  "key30": "5XWaELT7Nq3EeGEgHUbhwQ7KB92BnsG5sv86rahC1vTZ1KsWNfdDFKu6GCutgTCXtpH8U1f3icMfKnrhRuK9T9wp",
  "key31": "x7Gv1MKf9vz9ZUrEwxQyRUzYrXnyZKsVwWh6SGiewjgKXisAEub4eLuTdW3UduumbfyVq5o5PbWqJbnR56EiqZs",
  "key32": "1eq9xJrxFouuQETRZcarBgbdeMEii6R5axV4B5cgrgtgjikSeHb4sFVGoZa7nzeAmYkA7x5prbF7rVjRtmPvHHg",
  "key33": "4nA3GMR92xCZdG2ZGw4iRtU6V1k8MKM1VqCC1rUURho44HCTVCQfJmXuFjaXqgU6kUNLdw2daqGD1TMa2cQg6qKn",
  "key34": "5zJvBjHebsSr5Fa44bkX8qi52KSiqzYe5ZpmErBk3SgUN6XAn5ybp5NTWsmTvij6TMKQbeb49UgM6YMnyjp3pEy3",
  "key35": "35hVXVT46EixaNR7SJU3JykmuJt5vE4gU72eNEcxgZgWgi7BAJxgLXeUdzVKstr2QkPNrfK5SJY1ibi2kQNrjJR3",
  "key36": "U36xVPU7NLnuXzqm2zReWhCAZKWNdbqcF3nsZT9iRrYM3T6LvYMMcxKYE5eKpHkZzD2qRdEA5gaDX2Ag4H8XzKz",
  "key37": "hTGysDvGhpsm4mcpRwKefS8kbXUtPwjTS9uGS4u7GnXuWjbeBFsfnw4CnwA4bEJGB13XNtrYE3puZVwnDSCMFPz",
  "key38": "4z7rEzdRw116HHbLppJwY7bPKYuRSyTcGkTdQ1UwvS2mN44wbnViUTakYHFS591udFDdvdpudoGzcw4dv2DuWtMP",
  "key39": "5vkA3FR9fztC8eKFETx8146DvQtoRVHLkwTUjecAEQGuv9dD1rWk3zz4ryVdGq9bMoa65btd2qzZEHKYXy5NDXpb",
  "key40": "5uwRG62h79Nc2HCouj9VbTUxioQb33M8azBf7z9TN6CR17ygkReUAZVZ2y1YQsZzVfv5bbv8JnNcCg3rxa5Syfpb",
  "key41": "5aKpaGGE5NXDkhZzs1n7whfDpgjk1fvZZQNFdFCufXgHeUD6KNS3yNKmRSbapv43pCfgbmcJBcFS4CaYeNkwY77N",
  "key42": "4KBTDsuqmWHsi1ErdjVJR4n55q51eRmuxso1MCT1azyWJKof5uPsoRxcWWD9hgfuSe3tmV9aUuAV1DQfeRUbaXYd",
  "key43": "4Gcj6HWLE7wM6E8hQgyonbPfBZHcAb8ciutyCFWEFnm2exmX4TKZvqkRMrkb2UzbhbRkJMjotNgd52o3Wntqc5RA",
  "key44": "eWF4UAJR1SgSEhq3XgZKrPyPH71vA9nrAt6irBScM64vrjuodnszF288zvHVq66pckc5izjcRadrzKkngkk4RPz"
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
