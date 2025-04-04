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
    "4L45Bf8EDx7xaa3S1YLDfKCNTCM8bSPie3QKB6GBKRLzeTKcNrNxVzphYKbZTwhbA6rjMNL2UHRg42oBcQF2M4hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BujAhHi4VR56AG5LLwxEpuRVUKMhRxTg9ok5PKj47M1cSTkpQibSc77zPNLDGGJjbQdi1Ky5JZzkto29z9xrCya",
  "key1": "9yGegxME2DBapxwnd24GPJn5vpmg4RbvzvtDYt9tFwSRmRLjPHxtJjYL59rVHioozKCzn331EvhvZEjp9YedXuh",
  "key2": "XQTjoa1LVUdcxnbNHpxJTf1KwdoFS9KbhjVed3S1N32zHqs12wdDzyXup9U6ChAvaSorn7qgmb9bkmadCUjCAdA",
  "key3": "4H245sd2miCbE1iFh7e7j6gGpQRGF8UpTA3CKpGfX45BnXuEE7rno8qeDqutyF636WnB3ktP4hNDWCCHquzk6Nce",
  "key4": "3aEjYR8JCPWQoPbotghJeqgSTST5hLDPzeC1Xfc9xFvDptCZvxmTb2v7LnftJgs5zKmjx85LbHk8z9pBTDUqLvK9",
  "key5": "p6Lqrvj92Lfp1eRJtBVEEj57ZR2YUZ7vbFkEvJbwkCVSLabddFkppEyAdkX6dge5CCw59s9vJBCRG8gYvaHwXk8",
  "key6": "3Zcu5YBsMB8a3vjcTGxUuFPPiPAQu5mXdmRayMJPfeyGKEPV5b94bie1fg7nNVQc2G5wsfWPxf5DuJt1VjaxCntA",
  "key7": "3cuaN9eWPdD6KoiDYaPc66Nef8EH69qsvfAttZi9CpKnu8vVw2J6xBspsXrux4FmxUv96ota9hd9H67hDcyjKFes",
  "key8": "6HRW2ME3GqsKLNbM8S4qpwg6eoayDWi1qR8FwXxS9ijEUKGyD8haTpf352PyR5vHEaPUCxcFSCbSa7UJH1H9rnp",
  "key9": "3h8YEHU48ZdB4f6Ez2cWQhfRXo3WzzASxkXt9LHAiBDmo5htRCJUzMYq33xQRxweXZEFq4cju9xSzaQcHqqtwXaE",
  "key10": "cdHqowNZfE3y5ZEnDpas7CQZxnGp53duAb2ZS1QKnv7RpDvPRwfY8M56zbm4s8ZDJXMzgh5zrpGieNwvaKsZJvv",
  "key11": "2ARUQeXvkgEZXrk13EkmBg9L7dA96PDRZjqNggoKAa2pRtkM6yD65wXwEhP7BPBvmLhnBCqzyEr5yvC5BSok6FZ1",
  "key12": "3BX32vx3wvk3T52sm1re7WUNG7ih8ffBUU9WmeroxAuniYm5qyDmH1ueWLsZfsZjRXmFk4wv3itaJb8xAoW8VtAq",
  "key13": "2QgVwmVJJVAiQpBePEA9NchHoJ6QptVvq2hv6Dd9iSaYVG3V43nHC7z2JvhYQAWaHRa5Y65CtR5sCbfd9CE6jB5q",
  "key14": "4vShUCXkGnJHxVM85EQrFGXYMTEhBz7kQrmqMKjEvh5byfizD5XMFGA943eVNQJ5Ax2Rk3D5zLnhtZcGvNbwggpy",
  "key15": "3weEUBUqMsbmrzeCVb3hWcufeQEDLQvmdEV8gTvZx17zicNZihpsjBVFHxbGT6Zoeob84J6JJMSuqxYcCH7gXTky",
  "key16": "3waYsSHMmgYqxzdtXpZGpdMvWQc6FpeE7dsp79zxRU6YzQG6kHs75sozPUnwXjKd2qUFZu4WGNwUowJ9HgnExYZr",
  "key17": "QXzaniCYzARDQgKWqy2t3QcMUb8Bupuz8EqXmk89jnZZhvJaLgXyGD3zLbPcZPYSwTVhZaXA9KaRwXreice2fSR",
  "key18": "3H9n5J9Jk4gXevL4pyYLsxhftEsjd8x39EoBQd7AZBjsREUTk7iPHf7SYfaA6kYrtKfxncPv3ANPwdp6k6jh7HJx",
  "key19": "4StT4NNcM9R4uDXXJwdptd6aDmPPd5r3wcnH5G49thop1tLTmTXdFEhJRR7TykL25zTYaonEJoFSFzsxF17SaYni",
  "key20": "56xKr1YXD4GQs4NGXzzkjjunbxRQitFFhyaRECv8mw55rcD6TsZ5whgsZkhrwKRtrVxhovCoQaMQpG37bx7XaeW5",
  "key21": "23TZ7du5sgU54KCD7BjQaq2V2vJH2fKHEzwR63xJQ8JU34P4qMLs25d7ytSUhQQqgyrN9aKmPKsjuzBSqzHzVDAW",
  "key22": "x2v7nPf7etAmbxY5EQaCkA2YVjPFjGJp1PFdUmXsLaGa8ga8p75tCo1QiUiqqFQSgH5ZzACAF1Ypy2HR5y4R9eX",
  "key23": "2PnBMjA1YavDteqsJagQ7cn2zU4BMjcgfCUrwUBsXCiUeDphf7r8AoWkJEzvwCHTvJ4wJr2yZSgyDhbKTB8AFxc",
  "key24": "4F1VtDyRFEX5yi9xe3D6gumH138cqP2Awyt9P65aaidshk7Uq4F6uQmjkaR1HMuJZrXJwrgb77VtEFwUqKeTwrzx",
  "key25": "2vohXtpWVAk2Xdr3vTejX6rLnaa69tQACwJo5MUy3CcBWA5GnRpCWxEpmRDeguDzVnNbYTMJrRzk9teKKh9bGvxA",
  "key26": "3gR2GQBaNFZf5NzpPsjNZ3RuCw46AWX38xH5XRWLviK9XKbW1SzbGGQLFLcVbPNydCzdW5SVJhVoh2SyGCG4fpB",
  "key27": "41jxjv18qxJGcxfyjoDcqGgEcLdcujSPaM16ZwDY7gtx1vRSSpcG6SUzu65XxYuBaqa2gN98Xh4SjpATkZxWefd3",
  "key28": "2n3WG6QCyDKCX9meFeEt16TdY8eUJAT18ovKpGC7dbMbYgGxG2W4YzZ7KTkk2tQEMtK3YeqUY2GQcZsk7YvEDxoz",
  "key29": "5Y3kYnCQ462zM3hgEqW4efw9rsH3qYSekJrcPk7uTFKYQBsFVNnuygxyjza9wg3SpLsJgHFtKb1vpDu3pB6HLDik",
  "key30": "53vBb593zqfq5R8h8cuhCvkGWr1PZ2HLFMNfZcJQBw4f15odEN7EXx9shQ6jAWYJsQrBeHDsSMZ4iRQuBWd4XRNu",
  "key31": "3Yhjfg5rFpcQWW6W8ecRFNk2ijXtg86JgN1vBj3UBSUPQyAehzBcPpHzfheQBA7WYQVjEkoMDWnqHKoM9uesNmAu",
  "key32": "2hCTePjAM9XRasVMTSEemq4q8kht4nQeeRQfXBbMMB7zDMbT3GhhQCkTpJmTPfvWfKesZcuER7i5FTdyDQ7Z7ChN",
  "key33": "hR1VVr51GQKdcQoqfhN3iGu9fCq3srfpizfCpDcaZ67kG61xjUb4TerLzzwq23CbrqDvpBUYHaC5QQ14QFS6T3Z",
  "key34": "2EMNDtNaXFGSkD47NeirSRTvNi952J6HDrqEKgNk1D37P2B9LCkbPGN6ctzcyrx9mvGVYoGcrzneRPuNsrMNnuLz",
  "key35": "7vqtbzGfV9ip51i4DL6sSThYJooE5d1US3WyQkahbdjMJ2zoPz9amfo2nGPHxhsV7JfTj9fPYVgnfg8Pu1Rg92P",
  "key36": "5MLvzF83UL1x3FeXRyVEuM3F8JbNYFZ5L9zrKdy67JvwobuLtBpM7k8BGdTmskgdshQkWdKBWYfosZcqPek6XJJP",
  "key37": "pHUbhJ3TmysmoEr7GWzAr7SSjzAG4jztMpmA5CH4GsNXEYNi3vkqfBpYWwJhcYFH8a4waWwinZ7ZpQF2E5ZFPL2",
  "key38": "4dugyQ42qy6viPYJ98vnhmDXBjpvM52cKg7ZqK9swaacaekQwn6DFVazEyHyVDsLyoDdxCktKriAxB1D2NzguLzQ",
  "key39": "257mQxrYiT9MGsDsSXsBRDMEVwKqfAGCio4ZwDY9NHZyzWWSmxCo5c3zxBuZtVHEj3yqWeF7wSNZwHxKyzVkbkXc",
  "key40": "64JbgSd7Nyuk4WBs8WJpwMUH7wbVS9DYtPHZuandLLkbBDj32M5kn27L3UBd38pDgmEuEx1QinQTAev5nkxVYCdp",
  "key41": "62PTHLU67uxdPkqGhSfdD2bqbpYCNhipJzrQyt6c3niEHgE2H1gaWq1xS8RvFNXk6YYkpCKVpX7YAc2ZSyNW2EYu",
  "key42": "3kDULd77X9QMdjhduMU2sZTc9ZHBUchZy6ioiUrTooS82Az3c8V43BGPSYWvLUutX1PH6Y2gEMKiTq5D1NcAirrg",
  "key43": "3DLxb7ZkcvRHSrWmWCXPw3h28oH2uVe2zNnDsagE2gVi4Aq8EUJEZ2XQ9FxodSYrUn6ozb3JXX8oJiZw8sTDhAfp",
  "key44": "5Kkz44PfEHkSwWGCiLRyxuCDqB6CP9mwAB9RuZCDAXD6rRvkazKQ32usEeqzaVRxvFPJZeZZJco1fhnCKHZnAbe9",
  "key45": "DAsWL2RxD5SxzEfnjm5xxzNAeDm2pbM9qV7FX5Us4XjXtjgC4uB7ywAcKCBDpLGzhxpJZSjTioTGYwNEYhRGBU9",
  "key46": "1BUv2JrBUUXmvY7NmMbd6Yq3a5ZaJeWePtAVbmtSnJNLV9ec61dVgcoygojHZ3KLYpjT3P5Nnss7CPWxW858MrM",
  "key47": "5AZvP77XsSBwdMFE3uMSdi14zHc6hZMqrHPBZFDv79WDDjzo4w5yu1NbgewioCrtQ1bWHP2N7kWnN4JX63H5rt5Y",
  "key48": "656oztWRD9AjddLQxfQoGcje6ea4a4W34mCXTQ3714NUa1LRYC2tND5TjzxCKdkqbsJvGZpxxED6DfDwdfxaRvvZ",
  "key49": "45QGi2HVVfM13PYHaN3PiFQARF3BQDsMGdAdS7A8tZ7k32mzaYSsovPfKj4QBFYLr9wbiLbmmEpRBvXTzKkWqVJQ"
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
