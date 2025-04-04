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
    "xf7LHPRBCqPL48dB8DepAuhFhj9pPVB5v2sGp3gQRaZKEiYdX2ncUWjq5zF3DGQnNCbhWot88j7LxsHLuGve3Bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m28gSfbjkEXTfb9QiDaGq9G2QiRhqUswkHGwSNkqkxRSNQGVim1LKuE6SeLCAc6yGttHUbUbK5ZzUeLmxy2hnUW",
  "key1": "5x7D94EYwLsfK1j93E5RZPfvsfg76NnEo636CERCSzK84zU25yCyDxPpQ1jXJ1pHZzLHdh13rbp9eKM5aws2tLfR",
  "key2": "aBXzL6Qfy8qZTkh641L94omFKgTP2wan9Kbqd7mMNgxh7epLoE8RFgA9NpDJQ3hZu6C7CWfapQtU3EeNJgBSnq4",
  "key3": "5FXYsUW8bYRw9Grp639yyRbYxfhPHVuuxWLumLbtzYv8S8YPMpHbNhneahmUpgV6caGSCFVhQoVxitBxVzM3HbSK",
  "key4": "3gyfieymT6UfgW5QvnvB3vUdnNKop9rLfTMQ8JPBMa2ZaNSf9EqbWybrg8wSjYf2r1w245j5DBGvtKQAv8m1GAGG",
  "key5": "VxkpehfQPYL168U3CD1Db5McZY9XyX5fEsMvfnoTMZDhyPCs7xQ4xzuK4oUrc1TeZvQ2gh656SHmAoKzxwZLJFh",
  "key6": "267gP56fbG9V9RQFBKujEHCqXMPFvpHA2i9q3Ee2Ds3pncqaCxRVe59B5wYRVJf6ALses43nuzkjoXhxyp7Egizv",
  "key7": "PjqArEQCsQ2VicndwGnmT982WLZszYHMQ9HTDAzwh5M2YsXY2Jp9PwkrrJHkR8cMc58YPyXhTEJVgRRLcdNk5vZ",
  "key8": "3qgQXWggzMcJXwGePzkztSzZR8p13QuwAHz9NMkNLeAB1joFZxoZpyNrXw8d5NjRGkwtG1upVJCMsfSeAgzMBr22",
  "key9": "51xaHxzh85dnL2fAA9vN2w8bxoip2VfWo67jLUiNXxMzDymcJ4nNKe33V18xm2wXZVQuKkPQ1zWfp6dBaR8LV5wp",
  "key10": "Dn4xYA5VcBRuuWKXRAyEADwHjE9HhjaYGKAmRckpvUYt1iJRReyTZN91SVypfXgqjEGzDLCr8HYg855JYhGvP5X",
  "key11": "34EMwzWsQUsK1mMHYQXggGHAYqyCjhFxscGWSqQjS1HaT5qbLriATvCNp9oZzHBD1Po5yXEZGiQXrV6SYvNF6NNx",
  "key12": "2F3xFvkvz9AuLjHNUKyAAxqQALD67sCLXpR9r8GFenJPaqEPEtcyutucLa9csUc5CJ9bt7ghyn2eyfgi7c5x4ffm",
  "key13": "42dnGCDo3pfAQY3S2km5xbKKGwhPXpkhpYE54aY8civQ8kJKMYErNfSMvxTp5wMPaUXVHwiQ5CTPFb3UhUDDA936",
  "key14": "4T5AjcJH5g7jpAXbezN7WCEi68AW4iC3KDUkkVupS8EWcWDJ98cCoiNhr8Bi5rXVT6NG7Wb27gnmeKBjUiZPPRBY",
  "key15": "2Y2YUsmmSkE214jg6A4Ry4PKDBbGqGCfGXmwwy9f7UkUSir2xcVAV1oaU7PKp7biUbg98TW9Tggt3RNVxhn8KNEB",
  "key16": "5CrrTFJueZvrA3HcRd8VAHvbJvJkr1k2pG7e5erMqMrdra1uUwVENJAA3X8qeCdv1qSpPpvGdnadoAHdgwxoKESV",
  "key17": "avbedZWQxVzZHpqiPmWjFitXGq5PSE3qaFoaTSa1hkVEed4xj8QA4DVM5oQz1APQBuDBfoJMw9ZvEMTTtGkUfWu",
  "key18": "44YqnRVpCoCS5hQnmoNmdAuMu9ncSeBu597bDXLzkf9SJ5Fq1HeFp2okGBN3QCpGGaEZTu1E2i8SQkTm5atpSNEo",
  "key19": "4UPVi8rRT9QFK6fufFpDxexD75aUNtt4VnDZarwEfLPanFRM9XcpMbEo9XhZBTuEYe6MMX6AsgK11bb7MrcPSq5m",
  "key20": "3xTMFMsDmB2zpsYeMd6yt117XZ7r2UtubCi722GiFnUWvMJAfgn4rJyE8raSidiwdnmQRQBaGZpWTvpT3k555wgA",
  "key21": "3hG4oksqu6eE1G9sjsEpkMHJMwdXm6MVy18oMvMucqigX3L9tshjjvVY9cLwypHwmPUVzztEw5ugHBUTuma1oJP2",
  "key22": "4LYDbQjXWzNu2ht1t1JV91XwaEPoeEq4GfayW9LveuU16xXQEVzC2ePTUxpsEytxLwP68Xrqu9tkJD1h6dKBJGri",
  "key23": "3Dyz6CMZ8CXPfyjKKjpzJaXz1UZrpxgMgGRcAF2ruZRvq9cSa5xME5PUgw1UXXiE26t1oJDZ3Yn9dVnkGQ37dTcy",
  "key24": "4RoLuAVsuH2K84T24LGFxFw334hCBh8L3JWsjAH1upTJYgUjzwqsnhthAGvbvTXXcxTdRroeinR6dB62kGajiujT",
  "key25": "3XdqjvETrrQnLHaFoRCrmP4AxF7xeYJZ6HmFmfwxVKBsTpgWBeoyhFnCdMywENdx1YzCgw12Aq96QnmU1s5nGMbj",
  "key26": "SRYU2yFAVRCcxFkrbQAaR4otVpxTPnDbaqXcAayWMDxRUtJgCQ6JzRfUYVo9NFDmBb6ePCaM3Y211qyPt47Sexo",
  "key27": "4h75CUJzo8vkyGk5AaAzvdwNFy1Zd8XjSHEf537LgY19pCTLWkfDfbtSqFk29psP29xY8jFN76LbxRoJPnQ2fe8L",
  "key28": "2iTqzz4fidv4rX9resgB1N76Nu6uHQFH8BeU5V59uCGNzmXEkp5aWJgzGQLYQHDm9oKf5j9gM9x3xnouRYjCkP2t",
  "key29": "57uUNjZEg3Q5AFok4AtPqmPcJgVHqxs7PbKDDXVPWAUhDWnuWEiwxmGvmRFuPBT4a9ERrzSW1kM8FH6hKdBREGHF",
  "key30": "62MZxgt7ckKG4nmW4dV6unoR3AsYqGb8gtuVsEJLoAfBgYE2rb2XocxjSKy97GYvRt6QGo13fFoETXcjfRtYjtD1",
  "key31": "5dEk4DDMk2qTu6JfQ3c2KDjHYGZmrNNLvcke2FKTAiW1ndrcABaFt3bAvqX2QBJDmAqQVbXf6uDfDGGwn9vrQ3BC",
  "key32": "kptmJUKp1kj4msopaeAeG82hw4AykEJSwnLk3wAdaXkPg1AxERqC4PpMiVQ5rTBrED7UocYnCubQGsz5LfDimB2",
  "key33": "3uaoEW5xRdhiWf8zAJhTk3qZLydBKT29YKYfxYs7BX9BaBYznwmB3U2NdccGbzWpGvGNpghB96hfHLyy3heXdco",
  "key34": "4D9YePtR6oMgoJE9xXFzo547qP2v9set9dwTG5JeJNPM9c8SBmmHoGGetuT4WBj1t6UgnT876RsMvNuKMoL9PsNP",
  "key35": "JjdgoeVFaVw4gAy9xydxoXzL7DQQ4xJ4kMEwEFfQ5BuP49wjrcBSfGLMyKtMS3io4jaCQYbuvPYWs3ee4omvX48",
  "key36": "2E1FhhNmQYaU5wnmGnaGbQ7G4kPVrBzXTXuuPeXpffrU9H9KSQcRGBT2mrDqqzX7TcSyextzZJStw9Zk2y5E3uT2"
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
