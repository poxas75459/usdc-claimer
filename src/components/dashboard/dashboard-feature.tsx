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
    "56daNKLrEQgJbeGfFvMeMZsiWNFKpTC2tggC6G2mfX4C9VB97Q1YHKoEgGP7v9Vcppkx7vifnjam6A2uFTGrktXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JYcXftWLkKKhmfYG9owAQbhxJtmNCTYWrtfpPs5xnxiKkQriFvzb8YH8GwWHfhRBvA8bLbRAn16d2EHx4WVBimz",
  "key1": "2WPcAJHd3VuhGE4hUQv5XEqJWG3obfqRMZUTzfQ6PrFzXtLzTrhwzkkV5SPYmsMA8ocCjqn4Y1ikTYBBQzUKgkMF",
  "key2": "bVejGi6M4h7WuKSpuYj3aTsJugPwEJpvs4sotJtDprudcUc89e1XejHPPSNT1NBryP2MnLg3BxGFmyb4tinkrSz",
  "key3": "41fUEkNrbPL2oUkkLtQjuUeD9XtC9w5Q6Te4ZLCUTYU44b12qXSexepFZFcisjVrwUrAtTdx3X4tpag58q48i2GZ",
  "key4": "3wwv5U7rSVD7CkuaHFQ9p2dagMe9vqGZaDCKkLLKKdHwgASEXjLryi9a47uuQN1czPHX7WGtbGaQ8GRDv4oVVr2U",
  "key5": "2gth8pUNzc2Wr8dWzmu3HRWnYwUCBVtreFSbqGKfwuEYXgud8yqW2HfNyJvsFh89VKhyStTw9qCVsEaZayYGE5GQ",
  "key6": "4MJKmyeBFsu8se4zArcUw8xxQ27JSRu7y3orBKuvSmfdjg4u1EpGxAekvcLDT7Ubs6tZNukiWSapmaSV7M1hexjo",
  "key7": "2beQ9PKmDJu2BSrBpwBeMM312Ahh1DGYkpL3jetc9r8iJBDrK6N3kxi7W377D4u8CUhspP86V32pMbaLrTo9tkwC",
  "key8": "nwg9R4C4smJ67jx9gVBBN71Crg425Tvs2Bz3VxQ3b9AiibNUVrA3swkgYMDB578PY4JqtTW3gA3fEDtxzjmCaxU",
  "key9": "5Bi9wfC1ytzzE6D66MK1Rwrdgqo3dcbayWXBGxqnpLDtbak7SF8atDA2sH5EfwFxDivLY7R9EKqRNPFG3MzmFQVs",
  "key10": "27jpNCFwNpFi1MbspVWWWCiz8FkNjajcaXsQhungm4qVZ15M1FLiPFbxnjfqwJLNofTxae4LLRBroq4JNe4h21FG",
  "key11": "4sy9YReKqwVxorsqC1bjrUtCnUvGqF2CuhnRuLhn2G7U6rXBMw8rXiVQSXf4bsdhjz84rnyGejgLd5hSJzA3xfFY",
  "key12": "2RHrm6iL1RN2PxsGDKtsaNbZCDFphZW9EXwbqwjExifcEVkQ7Y4CzVfZhmU78zVhdC6XypeZVof7GBqkiAZDStfM",
  "key13": "21zgMH9A7uk4ewvD6FQukeXg5B8PydRT2VLERyZqeS1zfGZHRqyYLBPWGN7TyqqgCm9YP7Fxar4czu9hpR8VaiZh",
  "key14": "5ieG77e3VpWzsq7vXhNA12gmYpiL9B3NMLVQpEz81KhUQv57vzeyqfEmUsSmGvde48m6i896tfeZG6ALZccck4Zt",
  "key15": "B6BcXvrgWwckhMg3XsQegGnu1WMMTZQk3q4mDAs5a7VRbHu7YcuLTCnZnq8vU2yrtBDm1TWX6Z6B9b5EFg9icto",
  "key16": "3zZ7DHk7drGPX86TfUu43J7xPSQg2gmY96PPdvRGt2pga61X7ViM7vvzHKRtYzH6hX4mtnoBjVuXgpk297f9PoYf",
  "key17": "5fyHunDkgbpjwUXgoijdkjoxmCL29DUk8X7AkD2mRaeCxnqw4wm9vqvcSmzWPoTdfwp5zEyHHz8oT8neL81Twsbm",
  "key18": "YuevU2Th8zVtwrjRRn7EBhyZaSk6g3GJQ6qpUM8gBb3Z6ssccMMzCMXomtWeAvJt9csCHcwy5YtZE2V9tpqwb2a",
  "key19": "5GtGSMuRH7jyBiUiEtYQbCpCASVb4n5EYt6ASTdNUrRrKsTFLLBjqK44gxsqQXGKeH2XFnBS3Bp2KNMen3UxytJ4",
  "key20": "5NWrL4B39q2Ly6uPK8jMeRmr5ANpTuW1ZUGMGHt2mEYgGoJpMCfNYShsK6HgaEots8QWQmW8Y5awunVedme2sETP",
  "key21": "2XqXLLaTpHbzYqMdQip92UDPTDTNUzD45Eu628bwHDn7o4i8HiFPZkKoSgswmnhPXNjjVqzmhLQ3YBPn3EtsJj1K",
  "key22": "Uz4qz4eFuGrdw11a7vmPm4SZoZbTK5k6SyaUjvQj2TgJvQPJ8UTg6KguGM95dpRLQsvabrf2r66SU8sgd3nBmi1",
  "key23": "2pYghqA9HTyCCQyTE7iaerX44bpEaivArcfwMW98kV3VZzvNhvfhpJgPh4wfeDeHoyxaTMf1RECnR4Mt2GDrN5zt",
  "key24": "4kgLb7junx1BQA68dfMAbF7yhJBQk3NJdbSnEXByTARA1J6mZBPYtYvbQqYnETTNz1FHb1FRtRESzTMRXGyu5bSv",
  "key25": "2Xqzky9KvbugtZgQQgqA7nbQMxjcprpBcZ5mfUZTJQnbgkL9qasNznb4ZX52AZwmM7s8N4kZ4QteeE8HuhoJdXcg",
  "key26": "5h9bdi3HmrCqG8d3CxZnZEtr7GPUp4HjK95Kzw3p36YVBdK4XTsLVUfizTCSgWoAVWBZf5LT6QYhaNSMo76fcjJX",
  "key27": "3M8hTjx2LehNCkY4tHaZUcGywixo3JzrFGdxLBdpikeCzncAegdkGLrjgkf44TJp6zC6RTfsh2i5wHAYxZWyG41g",
  "key28": "4t1vrhcUKFm9kq15khhwpwstdHHDpezD2DTMuHHu6pvw4cYxJpiaGvMNyUnGGpSno8AfxNP9MxpWBRdbU3k2jUZD",
  "key29": "5goRGazY9rgWFYRhP6zFVS4ieTzXPAhRbeqEFdeCRwt8W3bmGdn3RE1fnP6HEKgHyso1QZw4zjH4KUnsckHSCqVv",
  "key30": "5JGLemDMRDWs3cS9AuJx7VWkSFgLXhGrTJdZgXkoK5cuXFm2Wsk9ucmFHBg7zgVeSFUDnNkGboY5VoGoPgxmt2rd",
  "key31": "3uuQhm6ibTZJWiTwPTWtJYQdw6nERd92Cvum4PkAP4demdo2xkKLdEdWSkdZ2DeCSgAKfXxUWdKoW5bEiL33mKvf",
  "key32": "4aG1FqVzwT6yuENEhBsLSZZ3EJQ4Ei9kfaoQ9rCJcPnSca6tphtYyGFwKtp7XArtoHZTXDc1pVBJLE28vCfcK3hF",
  "key33": "xWWmF83PbrJ2jqj47d67KP3KKzu6iC6H6QAKVFKw8Ux46rGpizoB68H5brf5FHHLU9kxoXHeXb49fPkdv2Y2Z2W",
  "key34": "5EautbFQyhEP42SzSbJKw4xUUnsUgP3YzQcc5SZHXuEhtWFqmB5iHmvwUki1Gy3pZGW8K2EM34pWQooLaBJabsSb",
  "key35": "4Y6Mrwy4oTGSQEvX59ZR13o4xRaRWG8rBUFiNuH3Wtf5hVdVBstAk7XgPAk6brxYobrSHZGWWNnrTtw3zLnBg4Yf",
  "key36": "CSgM2dg1fWhoNt3h93aBQGrhr6Z1RHBsonwuy6ZS1HV6AVCFCBVsA8PLk4uXCwSbZjkVG5cFZCbT8EWL1rgRxWF",
  "key37": "52Hmmy9Xev9Bz68HvAWXVKxiZXDMrae9ke9fEoCD3ajw5uyTA3LLfVQkgCCWtUS4f2jtzqwLU5aZLsbGqrScAbjs",
  "key38": "5BWCrRZaEsEyeC8w1kYtoE4kxVZ9M7YDhDsQZ5JKZknF5wet4aCLDVSioFNEXkb6DTXhCfNaGqe1mXyMVeihcTi3",
  "key39": "2Q19wVet5Hz21yZE1dPJnC4caLSfy5ewu28ETXExepKQjjhx1j5ZgxSxJRKaXrqMoDCLJjTw9SJFmhSCcqs4LRCm",
  "key40": "2bkUAWWicwrBB7uhFjDsfeLYiB9He1gCRFh6zKUqto5b6fub56ATBQP4quP21kfLSjrRXKaXUq1mWstcKNSp4Z5H",
  "key41": "9SV1DRpCuz1s8TqRoYiDmmKzw83P2xwK85oaP5WeZ5t4goitJq2vDKTLSqHDaL4yGg24QquzyDmLrY1FkzueryZ",
  "key42": "5GW4Kg6ddkUFwwcEAgNG8Bo9bexazh2aNCr6f5vX14iLpK6W8ygxZzKiZgckN4S9DD4LZ9KGKia5QQsNwmpSssL4",
  "key43": "m7e4wejPc6tZu5grsuXbPfZ9JjPnK4aGFEetbZbbBZPMS5x4SWj1iiZYJ2WrPVxJXnJjWz3sepbGAgr5Yt6q2XP",
  "key44": "4NGMmNVTiHKieDeYmoBwENbk9jDnrAcaAhTxBtnkLbzjTWYmwKiAK3NXfKpi7GxEPT86phw5sTqbNY9Ynzqm3sTY",
  "key45": "3o1i3PGisrGqaz1sKYEYrPjhCHpv9Xq3V9TWpP2Vv7bH5fz1EmmU2wVDR7ckJGbZdftgT4V2aqq1TGrzLkriLQ1j",
  "key46": "4TbLkg5mZ9RF1ZzHnGfmjiXe38SXr4xv6Kh39jPL9HsCtnAg6rj6ThEUGYjNjen2U3y1SEAGvMiC2DVvC3eYgKJA",
  "key47": "4nGxoBX6mYRaycgw5k3BVhR4SVP9k3hacwFHyTaVzyVkEZtrE1A87UaJpvNAjSvjV4UjyvDJ9fqAoymrBkBxPaE2",
  "key48": "tPEzn9KYQnSvMrSEh1VYPRBCTKqHanErVPe2FpVeiHv2zxCaiHtzRaM8iUUJtj4qrtcMF7aJgQma4zQydxrCvqc",
  "key49": "3swyLTpa7EeRGm7s44TSmiYKYcGwraHRtdM1iPDLKBvAJHEQ3b1tAMGjRbRuoi37x8U96WVHXLUzpaHTD4wfV4Ry"
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
