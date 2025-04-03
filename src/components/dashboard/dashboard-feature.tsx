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
    "47FxGj5jDtSNEKBkpzLJPPtSQN1dEGH9jroputLcCsjLe6sfpstU7cQy61RcBpZTqTAfnxGC1DNNoiCp7UifbXxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrFB3adoeenFACLNev3zEP2t5Lwnqb7Yn8FeAtSQJdqvUaeQdcjCCSQT1sHvusjBeiGbYVh8H1YFNB3979iYUMQ",
  "key1": "3iYaGw7jDwuPuVuVNfwtfyo4858jAdkvjL6htdmKzd6Po7XvfSe62hNg5JETdoJUmWEyHSrBbV78DTKYtZ17e1eW",
  "key2": "4zAA18t99M3XXqz9gPE8dezuSAKcaohvkmrzrmqE5REHfSN1hn4yeYbEM5RrGnq4PFhSK2Bvs5Fjn5DQSEbis9bm",
  "key3": "5VpWhCUQxbti8RWDGzVne5oFjDkchDmjdCEf1tifbxVhTDxXafXkfDRr4BxD9CroDwbZGLLwxcRheCDZutM1zwuq",
  "key4": "QRjfockVobf9cnjvqzmdzSDjvh449HGAjgMKAWPh28v4ZNLK6KGWS3eUmJ218M233GaAtWD7jG1NqR2rdRNGshZ",
  "key5": "3eqLhQLwXq9MEJfFqVHTui2xLqUs81SNmN3JEapHUuFNfdAWA2CxdAN9fZqpcDRmosxeiQ8iByLDRLM364zjQsEd",
  "key6": "iNjzGshWmdfDK7HoAsWvCttKV9X5aRkEqnbZrTg9YzCDSYaNkHpwjUDaTi9FjQnbUahrAWE2oRHdjTJtCDAAvvq",
  "key7": "5ttRyxsLrqdMay92axcadgSZcHkQgWz5tyxHn1LcU3JvUHaTNFgmEc9xLEnYTV17pU6ZQ7SdauE32pU4Y3yoJUx4",
  "key8": "3NewHYAZ7BoYMt1k3RY8mz85bJp7ckoiGXqFvSaxHUqbCGCfiEfhKCxyQnihPNjtSDThRCJHKEqKZXioARxLaHnH",
  "key9": "e6i966RUGaFHuRCqsTQ7eks1DDFW1LxnugEmbTnvoQ5MUEU6eVjxTxDueexCrfUSsuNxQDwW2q8uXSB4HncghTK",
  "key10": "2cigYV2ZdHDXCJ9gkvufSB5w39j11vmtMaVWgAizChtBBfYJE1oyVsaup3jVbpqGyhGykUez1jjvTBRgy9yaG57M",
  "key11": "sGKHXR178rBB5vnk38SrHcawxcSyPuMsuJy64gKVCk8Rcn6ujXMMmvtMLyY8x5j64SHJccaxrzzv6N22KABjaTR",
  "key12": "3fhT6Y3u2k6TkTZFFrt5NWu9nF3z5crAWQFgBQbDVtM5u5njG3H7cUh1bEyFoCvAQkSZwx72WieMHiXu1GLLXdNP",
  "key13": "3n1Lw2TAcukxRMoxWwQD7XTStgkPLpnEkWiWFGasU5gTXrWtdq7GaKap34gSUyFesRxU41Mkn3kF7RhGuVePivqh",
  "key14": "2NyGxaGK6DYvFagJA6QabqfqyJnmvSgs4bvnL9uMTF3hW9TwB8p7RYHsKZcCd76hzUbq63k2Jh6C1zsNZPp16JUa",
  "key15": "4RfE1KvxhGBFU6sQdvRrzP3BNy6rQw3gJYKnAXx12GqcJLi7d5JZHTiw7J5DjpLJjJ2oCK1KWoR9o57e2CBrvXZ4",
  "key16": "rkXXJ6oKp9vRidEve8L7dFoNbGcZHLsac1pSr3WkfE9nNzbVyzTsjcrEvzUtUEPKGWdGcCsyT1zbG7n1yxRynQR",
  "key17": "5SPNGuWwAERENa2SsDk2GUyg46tJCBEPW4ctuPwyMoCZmcfKwi82br8hmvW9V8Hfqq44yT3sE8y7BBPSAep2otg6",
  "key18": "VSrN17tLNeBEcXkmbac9ZUUN3eeHqAmbgPxu9b2JYHrwHhyiM6FChCKoc5NE7TmBnXw5irAKnRYukLqnvh9vnCf",
  "key19": "4AVkUe1MaS6bhJUaZyWSDCGhpHXcaiNTmsDbqt1gH1dMxSvoRaHHkabYq2osXKim5WDsa5M5ZcHthKDzBRXgFvNE",
  "key20": "4hvye23dxTd86QDYCdfxpHEqSoSXLTu1fDbBCTxVmYXbV4akoKzMWSVTGdHDnvCNbBvt3jh4EqKBF7rNCL7ZyBMf",
  "key21": "65TqBQdf4vFYL8sup4XieMwHkf5PA2A9fCny9fofQtNJnM9Gv3o86zyfScdZCP1Zx5Ns5vK4gHqr2JWpmvwLk9Za",
  "key22": "Xyjni699bBjkR923RZ6ZT4ujPEUAGd4ykXZBbaFTPpxRbdkvK3aZKSUeMqbwA8jkSDXSDZYqv6HvU2P1fQWYU3o",
  "key23": "EuusXCrBpfPQuXNLRfKYgauU2RRcT4JsdUc792Vzz5zourv2CVX31Q2szMPpxzWLNFJs2Bsq2eEBuxqkx9zCvcg",
  "key24": "5inn9qLxTcrALzZqVoMLNX2VvfkedD5iK57A6adDbf6AfuJcLweCpthUZ2bftRidstFSxnDAxPeNrA6Xj6R8T8b9",
  "key25": "23i383T4GndXctjrp3urgnFzMGwZpMuNmZbW5CrpjGdJgGYTYSDnjkgaDgZVZvwLTkLX6fN5dUwhVcn35URnnop4",
  "key26": "3PrPRfiFcY645PazxgyChBB68BQW5tvrja56Yeupw966gzNyyw1T9M7KVufmBdmQfkip7B2BQdWiBqw9jP3Dg5iC",
  "key27": "45tkA2nAgPwBcznrCbGV62kqmpq9bqnoHK7PdwZNajpbJP6xFdvW59jKYoUV1PmNjjzTt1SkDqsYrVfrDdm7Q2D1",
  "key28": "3tNSivVAirueDHxv3PppGxtCgqtD4jgnzMMEwLgkBXM4mcGoLsKvuPuGpSwMJC4UCKQhwYf7TqMgziPhsgkAG5QB",
  "key29": "3dts1vYw84mhUiVyQD6asZgpVEK9fyV2HnhWrESrwnureHCPHJknHgKrBkYcEbzM6qhTusAkuVRLC8zDaf3jsFjA",
  "key30": "49DSCxyrk6ah6JrNfqUUvwVvPbFuyqHWLW37S6zaBgiat3L7BhpCJWcDBbhcY5MEJEZtMD2jiLrkmZs74gWfweM",
  "key31": "45RxcfH9ZNpFGpwut2XdVCzGx1BL5mQfta7pfhPKybLXbUgugqjW3FXgGMyZMEUtbhy5juBc9SYrrvsBWq7xwZZB",
  "key32": "3AfnEsYLcvp6ztfsWUwYnA8A8Mq1hF2nDxNkqXdGuv9XghdD767PuLhzHzSbw38KwRr9XppRjCBzjnnV35mVjwC6",
  "key33": "4VCaSFH9X5XSLMJEzi8f51nEviWxEfd48v2TapFwVH6tgDLuVyyHhpya8Ui5YShocHbtNojRPi9QciSUZwstSb68"
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
