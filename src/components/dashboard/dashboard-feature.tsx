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
    "3EG7kkTzYR3as7WuTkyQrYnjDiJG8Z3JcawZrLCDuuzZiCmMaUJzzA5qzokM29mdt1WVAuy4HHws3vZ1ESTnkpWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6KwLg9Rrs1nxSQa4yavU5WX2Wop7UhE6acqbgS9JvAteXhfZqABdQM6HswUmiNTtRvtPf2cvzgq3ur919Uy7o",
  "key1": "3GkveBpqWR2ph8n579fMtAmJ2Jcc52r4QXcr7vXBo2jwuh8X79bQSi19rxPcyZNWQZqDtmMM1q6rMcwaP3WrRc4t",
  "key2": "5ms1hi61jb1Nd4soAZ7RsdcL8fm3JQDjmKa6zmcBNNBstue29fSx2PJJpXWsg5M2SDs9ZjKN2WgxnBgCV1DiX1PS",
  "key3": "238SwjiVYRqWcKqHSHBgsdqdsEn339SFNSSTgq3u8sS9XKt1UNywEd2B1ogvKXJKzpkmCrHTjwsETWXQ6y4sgpj7",
  "key4": "3hxMFvUQAj4dmLU6Kw7LKDfQydpSZvJBwjR3m4A4hjseMAUSobaM5hGDyQCzxp72WMHPKKdGdJzRS5E8NA4Nec4d",
  "key5": "RnKRagaEVzjkkm8D6RhzpjFkLH9mMiuiW1yLnF9ZHKNH3pK2bbaV2csYdVt1ZYzeEqznbPKjNsvz57KBPK5zPB8",
  "key6": "5QXoDfKiYxtJzL8c7hKsidBnrgCLxmHoYUYbudkwtnpbEkrGV5CFiRbJxAx78HdjLC6EQu2gMZSXqnnqPBtPGicp",
  "key7": "2NYSkn2GZLzpNcoFkC72128rcqyi58oT1293ywJdbCreS4Md9xQqz2L3h2LneuTzXU4neKnpmhnzjDfPJwigGrcj",
  "key8": "gWyCLurbUsPjMPZse7TBpbZnyQ7Z7dWsmT5MNYgYbxtzienEnKpi1bZmMVwsUHJHRTpvy5Mw6Y1h6krvGPbsQ84",
  "key9": "3zWGvdZPC2wmtcEJuP6aVhE8qruqyDUTcT4a7KP54MGLu7gXLveMF2JyTZex97sL2LkbgcCWG6sWFTjPKHhshpgr",
  "key10": "4aknhXJcJRQwKuvfiGMtCXsnnwtE9cEhyD8cChY34xfBUqXctZSgytMGsqxGbmx8mkda735qa5v8PCiYwfTaKb7m",
  "key11": "3sbGPJtzjRgSr2zMviM67A5jzMSbcyKZodQf2zAmDcQRJYM5Jdpe1FzYS5m9Yn8TeywsMx5mx5yjqf59aFGz52Be",
  "key12": "4MXVJFQu5YvugkDbLcdxADg1DQnmkfWZ1QqgMLbex83mN9Nky2oQnRRb9246xbkGkuCWAKsqTbDHWVgAMHCrBSfu",
  "key13": "5aAAszpTXdsDMbUShJiZxavbj3KNkiZ6U5EFbwpBqGfScLPhG13hUeqEko7Z5a3CbSggzBReA1cFRWeU63DqxsjS",
  "key14": "5Z6mjvjf9mkK1cdg8J897w5RZZfugDeUu2mEHPyAYQkjFqSFJt9nxbNhUBa97Z44RJB3VgXejH3dAjtSrhMasE2A",
  "key15": "2RYyyRZeTPwGM1NsaAreg31mxVpZ2qZRBMWWZ7TVhHf9UGvKhvBKzoTkmHTYBXEniLSTdLCdSjjyZHcdztZVuXNz",
  "key16": "uCfMQx2EeY4ftduWY9ZLpEgXqNoyeWU759jgnWsYnmJENCka5e1RaY9281TwBGhhjUu4V4bkj1xPkax2FUmHAAA",
  "key17": "55qtKbkcEnLyvoYzgB2KG9XqYcHXtYUzXXc5xRVJpukdNT8cxskg8KzZQ3qiSs75vFCmnVpo9N5ZgXubvuhQ9FZL",
  "key18": "3sqERik6P7pa7zTdanMPQJiSzekSbKHv3YPqSguvGGSHLAKsg4az7gNG1rAWujdRBHJi8a34a6UWt4xK6btBMm47",
  "key19": "2FxNT1R2Kn7Qu6jCZemcGDuuXGkuUgBtqJYauAkStaoBNArF39MF9MyxAintomfVTFSmu4ePsEhjTx61zJzvK2tp",
  "key20": "4YoQuoWyBLfaoxD3hq5mF5r5NxBrR17szeyN222ZNyPf6gVcaojKyTCJLByLfa4YLgyxV9yfHCjNc7Ri8huNaR9p",
  "key21": "HbChtjZtu44i8BiaTyxFm2ivzvWEcV98n5M7za7RetWjCTySD7Sy5XPjAbTMLsA8cZ8H98tbchZgb5BNa3qhzmz",
  "key22": "4qD3tEJvBEBipmv5dfiUMJVoRPgrppSjErViFGu66g48bzzeRCDb6jfYvwfzgGkuCLceoY615xKgD3zKdHvon8Rx",
  "key23": "5h7jq2QiQn7gVRYnEDmtaBp51qoSz2YvqfpZ4XhF1vLAWikcnVjKpbbsdYXvRb33tAVpTiX94YX61Q2U1BMVTeqT",
  "key24": "2epYoS4uawLDQ8taKcmTvvhCHtoRyC553sf6qhw8CUVnAcZb6BubETXWw3yDMYPRCqAa3uBZEPqFqbxj7MUk4WYZ",
  "key25": "2nh1Qi4TtneRrTojNUe9km3y2ZEFD5s98PzUUnK9H8HagicJsKPckrpyoqdqCUQyVVmu6jsyRBQhwSvSiibtaMd8",
  "key26": "5bY4e9gJ75yvf1KK9EYmqr4DWCFGFHRim1XfBD2rtbvzV9itmpottBVaQYgPwyy7j4DAuooKXr3FhhcdQU4HaPxL",
  "key27": "oduG3WVSXjGMbrGVefgR8tP949ZHuXThdcELjh66au2yBcv6B4gzMYszxsvK24gZcMozTPrFep2SnCXr9YuHg9R",
  "key28": "5njtaE2SSg7QQ1z6LggnY1XACgBT1R7uh33ExNW5PjxiMsnv9w1XVfdsCMDyXuu3aMN8LaadXY1wEUq3eoK9DebU",
  "key29": "3bExE8rxxzB2qC2i5E6a56bAh61WNP4cDQamZFjHRMbBEaTmdQWwEous2aNgZPdgmrfqK6bZkAPhVoUkdQoN9wdm",
  "key30": "YckJDPyXh1fNfpS7oB8wwWyR9g6Eidae6t1So7qkanTcw1Q7A9Hu6LLYXrviE1TkQ1V5UJoJ3C1pW7X3B3YN2oL",
  "key31": "63YkQvUFon9ofAj9M3j1N2y8kYCYZpxF7yTgWkCTvmo3818nymrTFRVjs99Ha9EXEixPXVaWKoaj8929dgL52yCx",
  "key32": "3FhcbT9BVu6frPLDHoGiXGoHZsPztDysaget3RdoozRoLRzts2aCaEUXov3hMhsLnfEXwep8YPQMvGDA7GYv6W4b"
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
