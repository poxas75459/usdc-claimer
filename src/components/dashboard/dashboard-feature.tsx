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
    "5H3SxsYuxB4MbhDsMYc99HrC7gaf2rVoPod6HA1Hhzn6XungTigpzu1p9GsTti7obNKSBtSuqtrSoM99MpstzWwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EP77Gj7ZdTnUVSye2LvbRkwxsqspRdzX899dr89eQdNBmfBXZ5M14MWNuYeRNajHDVwAtqfX5axbXgqG6RNrgNq",
  "key1": "3mGQwMoHdx89mJfC2soyMHYM8PEkqEw18vC3BMD7cqSTWs4RmiSnc2iaub5E3sUPoEYZeGrQ5WZoWhpCBTwvKADu",
  "key2": "NrvrY6XtebWb7o7wMktZz1mQ579CztLJz3eERxYz7LvUcuupzacrG1XYMM3QGgnLibB6LJNPXc7k384hShTPRa8",
  "key3": "2RVNbbcoZ8L4cBVr6BdB4q3vMJwFREVLgPcGKR2QswHzwvhZKjA1Gs98pDtVDVS7gz7jQDUGtMZq3wEKSF1JvcJ9",
  "key4": "3k4yQj5BaBhrSjtjAXoK7LG8SPDGTwdEDtKgtCDjHrLrm6J3SJw3L8aowN6qLKg3LKntG2fiyFLxaM51GyJvpMkv",
  "key5": "5JHTHBeiBfp78eYr7vjFWdXCQHDtwUvcHCD2R6dnZ8uSMmRLfsS7BjyGii51tZ5gCZHfv9Kn1gfJhY7MW8LH5NqK",
  "key6": "3sDBKjX46fsRsJrrMbUaMUZHtpJUUQGHSNBgATn8oPPL3H7vsuNTcE9pXyvnnBYpJ35tsJRqiN1jyFYSteRML9rN",
  "key7": "5Snds95fHEr2hsvDRqSb6cyJHHK95T35HF8Pgejsx4TDfoMTritbHc3s4xkphQUdBuSMRvUJt1VQdGwLLQMmyLbQ",
  "key8": "59boiMCnUvT9qAUJYPyt5iky3P8ZpcBA8VLAniA2Wf54Ym3Edkjr3QcmYWdDt5a8npWu7ur6aFmtn6cdM7eqkd9a",
  "key9": "2b1zTMY2kFu2eG7hk6y765aCyG3w1VmvZ7r53zdv21v7o4P8hPNAq5LeiVsDWf76umZ5HznnsAURsk84RY63feh7",
  "key10": "PRqHuh2pagjiE8i3PxwnHkFc7Qh7wnRb6omUw3euA6tdHVRgBPbKQRox5SeWo7AMPd5j3UkBLCB69QwjFBYtYXv",
  "key11": "53FVXyZ7YJaKBe9hz55ZwRa1JakM3g5vvXGa8wcW5PfLmNS6BPXAPAv81GnqdVdEsQjcfdTCWQb6q4Kbr9bSDWrK",
  "key12": "j2SdQCKPupwJ65TgiuMvL78wj26fcWb35w9xM97sWyX4ESbE5HHRexEkVHt1oBcbv2VsEMF4XPjVMvgnhjpHF4x",
  "key13": "5jHpWA5rfVMQaerPcKBZafzuM2bydNZzHFmva4M36RyooE9NXYvvGxzwf4wZe1w9hhCU5p1BT4WC59nUY57DByf",
  "key14": "5r1jhTCRFDqRGgPEpui2ZsPRNP6HU8j5rgMAiNyoUxkZbwXBkemPoLKAYz5LJN154PvDPQVA5kaqfHNAwyxUR2Rs",
  "key15": "4W9AV7PU2P5AaTycfbfEQ2FTw6ML1aL5DghZGX5h5H8ng3pqL1bE3nMz7yDFjrwQzHXDMMBFsYx7ur3y2Rx6NuS",
  "key16": "2PMFnB6xzkpRqYnEhLNvaW3vZ1dQEKgsjNmXzsY63Fp58DdJhMX76pKfpZ8SbPzmTsgFJ8xCENu6iartwNytvXDq",
  "key17": "3NjmP74DwNg4H3K3HpSAi3GwB19e7tvxnDB5dGEKyDCFVqik35Juk6Tnj4EiagE24TZBoAuScwjcosaKqUG7dM38",
  "key18": "5LwQCknSZJ3F2nfvwcNnDy6Dmnn7fbiPcbDRBgPCfXPwmu9byT9LuSK5VV6AhsavXSPCLn39AHCTdVPSVf6Az8vp",
  "key19": "5JG3V3BYxmXarx2WNiqXo3rQMwSTxW1L1Tx1htZE5V35VSgjJz8EFAUNWXhrZA8De8CjugRMiHcUKjRvtFaQhDub",
  "key20": "3Hv2Pk8RUdoCusyexYjw5WkJkkjgDqZrwWotP8rj3dfuJ7fRFp1rgnRUPKvGV48ohB3G8ptmuecZtCKAG8MrJkiC",
  "key21": "CFTH98vkoHppAjvWycUMyAtNWA2ihzTyH9cBec4phRduafwFrDYZBonJVLpX1XexZgPq78wX1e1nGotW7vNJyqY",
  "key22": "5Rm9eDkthhLC759c6Au1PJK1bJ22JUAJv3SW2rc1a3kr6hcamy9rXBQaQmH52qrbiDXZU4VRW8Q2tesiaxUXvyNA",
  "key23": "5uMygX2nw7KAXGyxHyzfydHiqi42R5UBqmL99XxkqRX5o6cAt2bApWTk238tut8HttwjrHCm7JRw7yrcUSRhiaVQ",
  "key24": "2Dd9FchFHyGtPuxhX34QYG9aNDMJ8CDRQgiNYzK4ejrzDjo8onaC9GpPqi6ftKqovcyoa6GViUzPiwgokpotQeiT",
  "key25": "4ExraWDnrHW6v5qA7Soomkasz6a835UkatKrsKjnUcU6TpCVTgsuXmLRtrzxWkE3x8B5jSmxurS7NWGXB2oLHbQ",
  "key26": "4j1GGHk4crCH751rrF4vXxZaTS6ZttH8QoD3axMNLbGyFb46HNJnw3tpHcpJcFoUxFizgELd5ZhbEti8zU7DKRcd",
  "key27": "SJsfpzXwc1LMA7kWqjut8zH2pfWokuvdVLHVWK42yYKYgvst3xumm4cAZZkteD4tPzm7814Nmgq5hgEezvtgJoU",
  "key28": "476wo5f2aQZyAwJiNP6cPCxEXgLtxF96RyDfsFQ4HZVrkkccRr3MnVFdsUWwKzb2NcLkGbm6j2GnoFqBHm6u4Xn5",
  "key29": "eaB5oYkSKZraG7FZfFtvax7zNVwAZs9BmNQnEJPEnLF3soc4GYiGBvJd3W8XpXqkwhRyogUihuShsoZpXgZCJFN",
  "key30": "5bQTKhtyybLSC2tHuDNdvQayZ6Zm3N9xhyftx1BikUKx6Rpz1Ftttz4SyBsmoweBLnLVNYSNaPvhkYvsHXaP2tUT",
  "key31": "3ezMeL1JDTraJdKQhXSPAHr4FAwDWmqUo2Vcr5vx4TRCjEzCDWZw6osrgz5ZTBSC6w1Q52EAcSmu18VanwpVPTD2",
  "key32": "3k9Mz8kMsgyHMWWdUJuaKAoVm3HgGAxQ4BK87NRokomfFTVGovK4C56vTBUwa8qznzgHaFGLyAgQgxrjAUwa3C4h",
  "key33": "2yYV7RWSegFsJpKpLbbsLZPzudM7Nt4WtiJ46P1N4xr9t6fnXBDATwUxFtYyg9rdZbYySbVhKrBwRKubfxk2GDQ9",
  "key34": "56LiFVhmXBWzRcrV5iTDfhgkjdJeRYWgmXbywn6pfJZ9uAyDEcxq4rXMypDga8F8pwtFWNgrHqMNRCoWA3TyYKBZ"
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
