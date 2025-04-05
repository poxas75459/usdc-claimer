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
    "2qpXnEtYt1Sx19453Trw1p7Uck2MXCsApdkq3avvrGcatLjq36bzL5XXvyYotLXWFfeXbSvRPSe6Yz8joXqn6kUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEWdQLxueuNqu93JN4XrN3KcMGkaW18FiBvFiLrMxYdHnGu4USfF38kwTLXWRyM5CWfqQScNDYaDmPfXXsLJFmv",
  "key1": "2mt2YhJxEDGjMr4SFkrx5uvWT5EiDRdXV7nAoZSxknKBMoxmxoBtf2KogkRHBt6GT3sA72H7YUQLLcw4aTRv6n1J",
  "key2": "4qMoa432hCZGbAfnaidQMCMkwWkvMZapS1BJztkFAw1APe4LYwuDWwUBr1eeuPbjv2ATjFYLAS1P1wNmAc9xK9nk",
  "key3": "35RQqKb6gPtdtUAkM9uJSsNCBRsUFReiXQeugjYwFVeUdmSVbLXpiVWYQcjvttQ12LSKqjGRsGv7NYjrW2qdbDFe",
  "key4": "2GeW5iFYQ3eT87rrmaWkgoM1dwqNdvrLe8KWVS24ieMQCp1aqq5wwXc6bumYYwUNpugeJQWpuFKjysiNvwuzQSix",
  "key5": "5wjZ7AH7tKYRfdK4DmP9ARSBC4ghzbUA3QHEYx4fgr9u36X2Myn4HLKLbc8Ld4CwYRxnFn5FT5aV4WrzVyD17MeG",
  "key6": "3YMeDZjSraRXm45fykoJQv1d4MvqaywrVRzczxUajGsxZPvTqdfqqHjYpo7PrdTeVEfh4Xib1SHFV5XZ5MEafiWQ",
  "key7": "2zuExCxSDNsZY8tYnnKAyPrGWG2vKaH1vFvJCn17YNqkEaWnsEZjo1QbqmGFgUugHQp4jFnyLPiz97ASdJE388x9",
  "key8": "3CorzPaRudfVu8kL2nQA4i1FjGj1BBuEMnbrtyLUJFeqijNBm758NSQxDqEEXPeXu86uBLxq3Xv7xDMPbQ6dy9Kn",
  "key9": "2qq6eRndSqnf8zQHrCqiYSwc8HRxF2jRuzrdjFiFrRuU4UW8u6CRFSexAV17NwE4vheTAkFuD2WWGheRqujyb7YQ",
  "key10": "2BySmqeT2XvK6r9AW8HZ6MtTYSsuwxSX2ixRqNqP5PfEtbfjajx9PMHae43VEh5vNHooZfrg5mHsyuwdW6HoZPP7",
  "key11": "3aSwZGWx4SmQiRFtAjWmS5V7iirsXEXsBVz78EHrFYmi5gVxK9c26gkNbKpe63tt3nBdP2cF1CndjX2U286C6L2p",
  "key12": "4AL5ghPrNGv3kE49sogPkyDwoQWegPRJBzmsdGoa3uKcGKeLYrb6MaHuFMV1PhzBPvQSCV7ZXHUp89esTfGFNJHY",
  "key13": "4H4qjMET2gsdBDZUuvy5ryRuCJySNMESerBkYqUAaGCU4ASp192iir4ATbh5VAvA98saD6hrRaBMUcD5yMwHpnzf",
  "key14": "5eWqBzw7Gf9WDATLvtS7wn5meum8aiB22Tm9PLTrX4TMaMJ4zHFcWQ9cMjWKVYdQWsJdKrixkNG9Gf4EpyEgT8jR",
  "key15": "5x3QK5yyg2W3Woj4fxa4nP9ZBL5mWSWVew3EMFdBykKcStNK7WjccoyUK86KAKQ7hjaDeAR4rosr3bKKdZnD8dZF",
  "key16": "39Z71mNa91GijVuhZMpgQdi5ibvWVCen4FNWooKLQYhqnuPfCa4yAUmT7QLFYhGBQCNW66ijqZKSk9meCbEUDt3D",
  "key17": "3B5qsf1dwyXMcCPv6Zy1UAgC5kfPaBYsM6u1Eib7AhasxivLxiwj5KXHhQoD7PREdM1msKdu9N931maG18cET5Co",
  "key18": "4tyuzT7oufcaZ3uPpuQcoqPQaNvdVgKcLpfJuo4nf5xbGdmR4gYwSFCWb9VxxPzfwWn1CGtJbxiPCPqzR9ftpuKC",
  "key19": "39ibER9xCWEXxV8RExFVZWxvxDdHqCzLgEEJr3BG99iSMdQfAEjPKyshHvUcSTx3dpzMa6RN5FhC6yQU4oetM1jC",
  "key20": "36CUHJqJsG1cupos78Rx37VdbYbiEU2MXyfmuQntM1UvqNYVAdTsTvzBP78gk5GEgvVr3yy84Wusma7angiQBiHR",
  "key21": "2d5sDjPu8ZzMfnbuNMoBnFreQEgMDzLTcvmhqh3a3VysKPxA85FEygu7BVV3cPC2s44yEb3YEbqEd3HSQ5rWdM6A",
  "key22": "27iPFgVW3XuB38dYqJ9TitvqTFL12Ev56KuQH34EiesfcJbRRzvgjGx6Ta1bYLrKKWJnnUL2BVTt3Su7hYCvfsYP",
  "key23": "22uEh3Nj7ckT1aEXQwZSUzd1SNxVLF3Uz7AozynSX4AS9NxC1eAj1NkzbyWmnfSkUXqV7y3XQzonGhWusQN6E9xq",
  "key24": "sTJHQ5QjZ8TALkG8HhfsRwycdcuHi58bEASxMnBiVEaBQ3mujmcVZLTRJP5J6sK237bouGUBvDBd57rqFb8j2QP",
  "key25": "E63mqVirQw7Sw41F7a7tiH6rWNzvtWkBHSGxc9MDCVTLAne2kvopqWMQpBuFHVQwtG5TeC3dVSDMsJPfDtAUonK",
  "key26": "3HkarSJwcM2cwhX497hpp6LikCbQ5C8AHbsvMt37dV4UoFnju3eAEDbZZKsa2eMgtfxLLftF62Ysy2Qh18ce2Zyz",
  "key27": "5aQwpmPib1gamxyVuesW49pBHwezZBZE9q9mcXW9WmwPSQ8u8nGcGFpSpwkBjSNC4YyDGCK6DZfYDQYdaftYmYNt",
  "key28": "27MMnx1fwmYZx65Lo6UCSGGF2aDpj6eY6jhQzHeJ8yyabbWSDoT7vyovLGYbmk93EWUXyaXPP7sJ7nbEoEKXgFU4",
  "key29": "5nmwuofA1V3rL8cxUs2tEy6dQmrJZmCEpwjs3TQk24oEQzkC9iFow7oFEdCfjNRhXhJauUL9qQ4aWsX4e1Jnvbdm",
  "key30": "3t6eKdjk3Y5mghiJzpC3xWmL3o1v6Yt8E2ZtpxdtjwUBdpEXkifEcVnXm1Ph66ajaH1JMhXHCxTyQV3GWJkDhHEj",
  "key31": "3oqbft7NYq89tFxR6oNpAUqmzqNRtirRkjf3H2NWH2GFVfnutUo2pEsDaNLqgAwnuM6wu2MQogvxw89PQhVCFzdR",
  "key32": "41PApbf5cLfWKxd1ncqc36mDnjMPCz7Ba5wPort3Aauu43CpUvLpPvYaKA3XgRieY99Jk7VQ8GMiJkBoDuNSCiDL",
  "key33": "3twyNzSTtbwyWsbESQYKZyCYDjFn9iAZSHZV2KDy6cF56eNqvehR32gTMhn6YS6RevXMwh18HwH8HA6MqW1Q6ttk",
  "key34": "3hEEFJVSaBRnXQQiFtLKY8sVTPYmnbHvi8kR4QiKr6fXMTkFVBJ3Rak3qxe4C9g9ng8Uja2mLogp2Up79dTHAnD1",
  "key35": "2JD4fFbBsVvg8ENSBBqFRhiNETMhfuJ35WGu3xbWCGuEQhEenq55jm6krP3Qw4VSK2QM5G8boDM4iPGyJm8ge4SP",
  "key36": "3vDkMoYoAFfDQRFtvmdLADTMDbkXQeMikXaauyqqSXBvMfjRHjYsf7JGD44fisXYGty7dvH6Rm5GNxT9xeaaJTWF",
  "key37": "3zp2rouTq1bUX9S1WdEuZsRVM1VqHSzHJQmRFkVP5pLTBcGkZjvtAZb8gxGyVWGb6jV2NwBfYMNRshbvpmrFs8qR",
  "key38": "2MfsWGADxYw1WbEKs6ShpLJJGDsRp1SLoMfLMqs2Xr7E832eHd23Di7UZJenqg9EYBXfDkK8VTmgcyyt3DsPd6si",
  "key39": "4EyXRsjAvT3C26quHv7NJEfmjpuXhh5kxgJM4ermbNTZbVBQ7aUZtC3jK7byeD3oWbKxpYuGd5Vuh2YsBRQTuFpS",
  "key40": "4caodtcBffB7Ddg6SymBZn3HZUdTGdtrpLArpjxsgz5wtrUnazwwtJ4nhRq9XsYodpontiVQXsZkosmost5vZ9T7",
  "key41": "Um2qudwJtS8TGZgVZZ6QzQt57cM2BG3vy6SwJV7Hsa8LeJZyRNcEkSd1zamDrrN1XeZKNLkjZ7qK1BxAadJTPgd",
  "key42": "CL7gLi1cRFnC5ctbpgTMTJrzthphPSo1VgtZFvMZCgj2vhH8bekkE4ZAwWGRpqQDp4LEzmviBQVQt7Au4u1Znw4",
  "key43": "35Bp4DqqktYSUmf4p3Uq9AFW1S9nhqoNmPjManrKMwsqacTewxoWVaSUie3oR14Ty2AJFiFPb8FMsewf1rZNHBvg",
  "key44": "5TKEbYYyFYfWP5q71DRxptPvnLs3NSScUVuCxX63KadYAn8Mdt424ajV3PdA8wqeFSrRZGqpCF5fDAJSaX9Z43DJ",
  "key45": "5diDPS3aDy7RpLsHsR6qvKXapJTTwRGP9iJG5VWybjaa3xfRzhCXodghVLWDnDe3ANN6EEzxXDgmLjbNTLScUC6T",
  "key46": "3FUCAaDkwwgGFBgDgbnLw4DMrc361ramGBZTXWhGQ4DEqmEM71zU19cYRbUXnSrF8vd1bh1ztbLtvKc2dGGz9a4z"
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
