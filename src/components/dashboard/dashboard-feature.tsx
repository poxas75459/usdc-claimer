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
    "66YLjcJUeLvKs17Z8woBDUGxe395Hz6yF3EaxLWxxNdGbLXfbSV4hY2f9YqkfTQbtU8tPgHG1LE6UnKiH2Rndac9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVJStY4DCEuiGbgwfvEh8cq9XcLJLdCY8Bi4bwxeSHr3GFGzdPLuB1pKcnToZBeJbC6jpoYh46pYKu2RrryA6xH",
  "key1": "3hwFTQ8kiD27XyQUwD8stNYgBHhM2cK1nMeiynXvWKktc3WQK6fwSCuysT5wvhb9nvWnbKjnQKjXc4kjTTdVMafq",
  "key2": "2boQVJTWB8TrwREkPdCcvw5WQtC46oEg5ZmcBUpBM9NefjDtNTeteFBf8AkYvjgbPQpyPLLaz9NPRdiYp6eSyNo7",
  "key3": "2VVdYXtjQAQ3FKQ6XM79UqtJqX6WPhevDgaohemmDrsKVcqTa9AQVoxvAkpuJqP9uysoa6beWfL9JknLhmLXtySq",
  "key4": "3oYPuyGmqTt7SoBc7Lz2MV4HtghSuNTvF7XMheTM4rfVuDd9isBioswSzpvyCxvceYF2W6ZubWNzWjNbjnoz4VgV",
  "key5": "4tbYtexu7tS6cfcvdkCHqFXHmFUUjBruHfTZhXdid41BArRhzBxfbQXuTVy53euiP8hjj4iXRaX115FhQEtKzgEM",
  "key6": "5GziWr4jUBgvBKwQEt294CAWX3tkketfzEH8RNpccoP7zvYFLcLS8UsxkndvknptDidzuxAvJXE7XYCyncpWgykF",
  "key7": "5fdNzCRqqZgGxhkY75St7hoHmg7J9T5BRMvgFhCXVC6g2wjMgERkCWWYMQ32VX3MS9RSmi6cixvBkDHFYw5NkEHX",
  "key8": "4azACMLWTzJi88wRJzpRHV5ppPPVe224Pn73AtWpAtqVyTQvRmvhaCainaC6HxaDuwjHxhHodihi8tNY8BvHiWZ3",
  "key9": "33EypnXnpnpdMyVCq9VSnuHKnPKvPBEyrVvkzviERsP2goXGm6ZpUWNmNDc1TgGMNSYLCR6pRZXg3xjmJf2uAgoe",
  "key10": "2hkmRUn9b3vwGvQYJWqLhXpaWJ2Cd7NrJUV5LR71Ve6Xq7kvpguTJSYpJBHSHWiugQF9vZgoHxaKBkdt3NKN59J4",
  "key11": "4iJE7zrd79qPJFcQ2295FNTYQQgWN6BBB2Q7WejmeYsGjh7ZfRnQ1yrxvhcacZxqtDwFUGqJCBHiMEFCvys6SgPC",
  "key12": "5CeZyfYKYohD8z7SZsyHPcdnMgkntUiRB4GMU6MWnhL4TcAAtkyBeEyzUnpwiyJT3FjefYuGEX234bE5CZ4wjDkf",
  "key13": "2esww33jJay8HPXQXftr1oXkZcywPxpbhU6f2r84w9WPdiihhRkrvug2iGMTmLkK68oCcccqHoCcLD3minStpVxk",
  "key14": "RejgTgWFV294aFAtDsX6DxEEw2fLPnNHmyQGeM24uDHaEa31FAcWuA6k99FiD9oW4Xppqu1DYKJtavi3qqzT3Rm",
  "key15": "2FV8EohWsum7iWW5nLKBeBtT3GaRDHfgyiNX9fnJcuuDudjJoRVe6WUE1Paa54ys9Q7kYsTPwUERheT14tTstf7z",
  "key16": "3QWNzJXXE4M3QPF7hTpGYxQvnUMjPUCqk7KzzZ9P48Y1631nDuHp5V7dYASw93GUvQf8g9HjfWnmSRTPTR7AGUnp",
  "key17": "4dM9xudnyL4qDw3E3i3GqAdVc8v14G2voa4gFLK3CRTNLB2eLCWhNkQrTBU2KLTun4NzWFRuiUqG3r1WQU3nzxdB",
  "key18": "67LCEDKfsh4JWpUhKq6eBjPQRmoyTYFxL3RGjvKqpaD4CoyAT25NdHBnzUcjQE5DGiGsnEJLjoULehtQDjg5esTP",
  "key19": "UaX4w24ZDK2WGv87bE46coc6o1JikjsyQ4W1mVgTyq4oPbiNFgaqmNRyZrTHpZBcXvA2tsdH6GKHgJgxgcrDmzh",
  "key20": "5QJcC3wHt8Aig2KAJHAHscGB7aG3tgPR15gTqTCGw2hoyJhkxKZvp2VJd5EVd8gAcL6x7ES8rrs4k3sxhfaQcR3U",
  "key21": "2bAUSV9DMKahus9jR7SRLLehMgAKV67cW9MUDAVcW8yQFJVTsQhH4SuESggjkUvvS7zkXmk1DVGuYpEzsB3RXC8N",
  "key22": "36FrM6h9dBrMuvGLQbXw76z7CWVsNLQnpgLW2eCA83A7M7A5Z4kymbaMFrMZPkypqr2k53Jtd5dABg4eqoGpxt4B",
  "key23": "2d4Cbhn9oYxMEPYmzVEC1DzeLXSmW85r7gpmwJ9dQ2KGj17t3R7RsA7ZyUR6wRNq82Y2k5QFDzizPRd88SGxJSMM",
  "key24": "3UZ15sQXBG2DaCxf1F2M9GPjkKp6sAatGmMwgRBhmhdMtCCEiNPaCZvy6wcr4xYBQNctZecFhd3cakBtN8xNhPuo",
  "key25": "4zCAKjjsRcmTdM2TngDxDqhckajtwNUi6bdm6AGb2KibC13oBBCzXCCsVdiduuX3iruipfY5acRThQRGSfRjJHRG",
  "key26": "4DYUq4zMkWkD4XgYMHiCGpN2BfaohRM2mrKmLp6bMPq62t9Me2eEG2fZ2i7otHoGvNXBheDvorsfAnhesYfPz7Ca",
  "key27": "4psmFuQPZeWCWbUMzAAVaQmKGgiFWH6oLameZMdPA1SpCkc5kGapxqmrSvWjPs5pYHsJRNKtwnSAqXDQ2DZtjqgV",
  "key28": "2xCJmwubnGdRvBC2gQThLNPptEFR61yziLD4aHNMBWYxzryqutt5CMaaBDZw7BskhxU6JvrLEcSjEYyGnu2XHjfF",
  "key29": "5r7qQronPHsP4ViadBgk9GDVDCx21ConYu26T1QpYtrWmFisAXCzFcvToAWUr3T2oiMJmfWNZoDXJumq2nLeNRYP",
  "key30": "3WegAQii1ujnSgDtBX1BcPQJayiHa8kFXb8dW9HEXNjvUMFgmrgAdsZswwyRJVKEeifCibhJCQ6XTbiZCveXTyMe",
  "key31": "3PKkAsvWUWCvSuEsPd86Ys7Z9boU5wUSfW2CUE8YpLbq6Fcf7PuCuBUDN97jojNiNtp5X1J1gLoxtVnPtivUFXm8",
  "key32": "3RPhrBUHE7iUGEQrkKbgLa7fyrFmzyYfBZm6oszgW1aZ3J4UWm3C8JyR9ofCDHpZCkGUwTCHMm4SFdEHphyZUj6U",
  "key33": "4F8LPL2VavrHRdhSfrZTVMAdmzqqpXgDTGL74F9TSciAhapi9uamu1iMJy9d7jWdr2WTufGge2V8CAWo9TsnUHFy",
  "key34": "5DvZjuRbqLBxzuFU7maMaffTugR9TjJMZpQu3WwiCMdmsmARv93iEgn9cavK62cU8Nh3FZKmHXkbGUVvQkt7bJgP",
  "key35": "3339EMNp5vtzXf2SmiFPekmu2gnRN8JpebRxNn5YjQx1hKaYN6mKS5nggGoGi3C2oxwZ2ZKBs71wtXxg4WsXh5Ci",
  "key36": "5owLP9wcmbk77qPrQfGGeNrepsYHaLkrwCdoXD2HBSn5T3PesEduCLGfRKGytvCNzX3BchyFAoEEueoRaDHKfkes",
  "key37": "4JWdN4AVdGNfM4mEvDCJWw3YvigE46hnyVmhfv6xf3TYoDoUPrsMMKgweRjW63EaTiZdUYfUJJFHKKoNxc2MLZCJ",
  "key38": "d5xyQgFNY56uqsH4g4NoT9dViHGsbJ2TvThHVxzGcW8nYxsuGZprUj4fCu6D6gHNFWQp23VhWb6oyYS9mcAGoNC",
  "key39": "2SCgDeJuaT4LogJ7HWphm4rPJLsoAxDTDGPQKs8mfX5fTxdURoCZ8V5mpWh2WzKWhPbAdnALbBBoJm4gA52yLEPs",
  "key40": "4ew1PdpW1qv11VzbtEh22WBb3YYmduhBffDvnEvwd9aGtUL5UVhmBFe7bgdtNdN6FBRfo6km1WXQbiNVAsEKKTVM",
  "key41": "rohWUvS6hdCkitqWtEWknnMNChXRVAjubBaHExjjsYN6YMDyyKFnxE9GkgPtpRijfEYA527q5S6SeGwiyTMfUa3",
  "key42": "3vFFAx77HgGJrPkZYe2fPhhtyGYMTfFLY47QSvs7eWUqPbi2yYTDEWB4wcbRDesf1rc7wFWRJHr1YBxDaJjiNook",
  "key43": "39U7PRScKXXQvmvxYT5S9QkttwxQ77eHPtqvMwH4SvPxyCAh2T17nkVivEveZC5aEL2fSQa8TC4QvSkazsgiGfFm",
  "key44": "3n78zNiJUUDRNHAuN99vC9KvXeBfWgHxCV1PsJMPHsuMrV5hw37AthzWLWW7FMbMDxVs7F33DA1DgLmT3QyjxGFA",
  "key45": "4N2QWfU19YBzYTeZRszauDtxfExEUsq3zMqvxfqNwjw94XtoA3H4f7k9yXnkUN5VvZ3hqdtUeoPgJjKxZLLe56qy",
  "key46": "37MVokvki2V9ovvcPYrQf2FNLe3GQt1xpwrW34kimQKKE7LT1vPRKSsYP1BgoSdWyQ3SwxKq6QNEhS6LyRG6Z7fp",
  "key47": "3PKRzSLqLEiyYu2AW3CGYfytnCS221UkqaHLWcNk9ZXRaFH5QaUABZXe5g7khJR62G4bQgS8UqoqJpaTrZaYFwBD"
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
