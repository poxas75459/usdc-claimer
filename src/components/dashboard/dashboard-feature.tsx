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
    "2Sqq2g7QytrcHw5hkMpALDtg8mgacwFicTJ4DW8DFNed5y9nq8DKQ81ApbegBrJiZxf51jxzjvRKJVbp1SSEr72S"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5RkfLPFUTcTpF4C9gQo6g5w4is9yDGfRPcYaLdsAqzqTbq4jtf7Q4VzNso3LJFa7DVkvmUqyS3dkmUG69NdnDNiY",
  "decoyKey1": "4V44xfAT32JJrBtSJuDFzwuvtpRM5G5eWhKGFB4F4WtTepAodKKC6vH72uq344umaFgmNSfTbqnbuuxJekqWJL1B",
  "decoyKey2": "4eSVc3kyqLs5mnJTwRuuj1gH3Uxx61rk4iY34GuWHJihUXZHeNQL3wrmyKuRPw1xup71whxNih9sJjAzMiuFZGhg",
  "decoyKey3": "55PuifA3Tgjr2p2hQkK7rEt8PdrzKqFLeGX9bibg17X6FXc1KH8SCZVQuUxRQmVeH5Wc5UcBtyP9VLrDHu8Ep4Mr",
  "decoyKey4": "2AMf1V3UiUw6euyEzGJFxda3hJgoDvu39HRf1GSogD2yZJwPkhNgAGiJsKrsma9dm6kDh6vC4821tGsjcyg7Xygs",
  "decoyKey5": "3ABepxpatzDyfaD2bnUJFoqYX7YzFChXVuTNuzpJ1TdibiAVRD7etAu8m6VAi1GEgjVV233yHA4NCGHMeHpKHLgy",
  "decoyKey6": "zNfaEMdjfkY3ZucDEBMfTtoL4fLiKEL28yTtXySEEcojGPo7uG3iRW1iEHMFdEcPgQzJjLkJ54WmAdrX9LCm6Ak",
  "decoyKey7": "3vgkPjRL9GCPsbdjmCsBCUYKL4YnZhiWVSm5DG8bh7baozLFTgU5Zn3KJBBidKdZ2ngsbBkKsi7cXPWPS557oydF",
  "decoyKey8": "5zVvjyUeQWxHBg3XAcyVTPbdKATssNs5Sa6FchcfcRZdkotnpGTQ3QoF6yk6mbihK5omx8j2eezhNzXwhRPMwpQZ",
  "decoyKey9": "5FvVySeCXZ2j5stHCkGvxbpu3mQPiAV4vVu83E9bc74YjrTx5AbbpnkhdbSr3QKLpSESWYvZxHkQC9ufkQMN9sDL",
  "decoyKey10": "WgDv9FtTm8YpeYCpfavX4SZ7JWQDkreExWMHb8Exr6jZPUbtBqKcs2GgY7b9RSYdAEbyLkr6prrNmNcFkAFj24J",
  "decoyKey11": "2rYS3vhQ7b3LpHKKnQEPy93beLQuc4dhrY8EE3ZnUS9F8mzr7hb4hrgDQACwgga1RZ92nP7PCmRgbb94kRshiPrS",
  "decoyKey12": "46bCtPbCXu78aGCqEXHTLNbh4SmWvoN8PZosuEqwMt7cwvB8whD6ht7MZ5yLqPD9DcvVGLdqRooPUqVBsxx2KDHy",
  "decoyKey13": "Z3ERo6Kdut9xNKHK5rU8NmH8Aza1GgSTt6gAUZUzUWyMjuNUT75U1rcgmsbFDYTSmqmMuEMfar2BrsxumnNjkg3",
  "decoyKey14": "62BZ8frQKH1MTNbFYg5ZyMp1Cc57ocdXkaCyQGDt7gJbXQXprTjeRVSTseTpe8FLdDnR9bC5T2T1SXDeUs9jbCF",
  "decoyKey15": "5hdM6wkDukWLcgeaRkhmn2yUucY3XWUSsySknD8d3vpAxGjpjnpg7YPZg3hFzgHWRCNF8AmoutqBewVV46hzmPpf",
  "decoyKey16": "4QJjjqmgbzdobogDi89jXR5v8VScji1hxPcfAsBZz5aSA3GU28VjCEThTrHbW7df3ANaVf8cR6VqVMBTKE9rNq56",
  "decoyKey17": "8wKVcHJbeY9fHVYJgEci53CNbSk52YNAnvrx34RLSsyEczsmEic2DsyAkZz7bZnkAeNsoJVFES1Q87kWq1EuTiJ",
  "decoyKey18": "5v7MUQFnfocXjWUV5rQXTKqMdyvENHjvfpsFomsLmqKA8BjfUChftUfqKDiYWpwUfxyMbDdjek17CGqSQ2jv6NVN",
  "decoyKey19": "3XJQFgueuZ8QyaueWL17vxhsnA4cr6xaB4TxptA35v7HTVazSbWudDZy6mMo5vrmufTM1gok1EwXKRMbxZijnT36",
  "decoyKey20": "53jhU5ggiDTr2dZHR4SsVNZwY5srVzqJk1QD6wU78fUGdyC8641kR4yggQQ6qG6nLE5UR9u7zXyth7HHhA357CSV",
  "decoyKey21": "pn2BJVPfU88VghKiei4sJzN4jxhq6vLEc3CY84yTdEUGVJT3Xpqxv4i81QJtVwto3FFfVTUtH1vt6H7efpcEoU4",
  "decoyKey22": "4xQmUq6cVN1FTwzMnj9fRDMydZxkwcoB2f2Se3smArt2oubDXzf36zeGP7pTyjkVWjjzD21RFdC7z5GFMNQzU8kU",
  "decoyKey23": "5a6iE2UUanCvLEVAfWMaDQVVFUCf2vMwWzGtN32PGmYLPdMs7kCLCcvcrTBDS4RaujnFGMgxaiqPPjzULcr5GT25",
  "decoyKey24": "4SG7k6AapHRdMM21PzyyXQU8yKtL7TtYJc5aw7gYEegBqSod75aP7xwyWUkXjGMFLrbB7Cf9sT4r6GEQzniDaWZ1",
  "decoyKey25": "3LJvF41YdywWRu4Bc6LBcZ2k9j7jCtL7H3gXdMwWArknHaUCwtDn35ZwtD6iHfJJebLFzhuhwEDpDw2DkchndVWE",
  "decoyKey26": "4w2DFAHGMiJ1yVcN5QMrxfP8GQi775VWT5Vn7gTwqTWoEdP1Y2tmVnbPRVtMfX9bHYCsZE1Azah3TmmvPrFPz2AF",
  "decoyKey27": "2u5L8zcbrGEUxB36EmCxQWmnYZjc9SQaJ1EccLARzgAjfUy3gEtJzEsTBgTdDzpg6YRogEoHSa9iq2VgYveqw1bf",
  "decoyKey28": "3z79GXu7s29m9xMA5xq1FNZrgVqnbeh3V9fH5GB36FXQbfoMviU2gdkRwAkJivdBJqfWkJTyjuD2cY9rkX5mrsSc",
  "decoyKey29": "3SSDWB3mGVHkKuvWaBEh6WmbEZjz9QQAkNmHkrksQXpNQx6NPtuEFivgJ8UErC4oSJDo5oaXpsxBuomUZN1RMm7r",
  "decoyKey30": "4CArV1EW2HPCh4uBgm8W6jdxbR91xjrzL1CTqQbp58vqa3gYnvEh5fFh26PdhGr6BCSB9uMFwQpZ72FcmteAvJrf",
  "decoyKey31": "5jHkVi9riCcxLh1NGrtLaZKLE3CWPMk6EYa96MVWgt5yGV8xZYhivXgYqPzMJoi7mkPYqTnL52PAjb8YfijiAX5U",
  "decoyKey32": "4otVaKo6dVmXwKjNhGLBbHs9bKfY9DigRphFvQFce99onvEbK3F3ZRpAy7ATPSD1nhyzGp8ksBZr6mMupBCgPpyf",
  "decoyKey33": "5ujqFhTZDxQ895pvXzwzNZDm5is2phb3SsSbZjuDC6XmDeXJ36mPamXXGtQGXMio4GywnpUnbqUfyPu4YWk3nNd1",
  "decoyKey34": "R36SaYfECSXapEjZCZHNJrFBzYdZJEwxUUm2whUTP5dLxW2VYGpzz4J4DKMonaGRV7a5EBMoigF2Co4khCj1xjG",
  "decoyKey35": "psR4VsQxBvqkQuev6avsjc4mepyCo4bv48XjzSrnhVsdkrMNbimDMyWfzbYeZHyadNmX2dcHNGk4ifLBjxKooWb",
  "decoyKey36": "XqEXpzWbQHZCi4v1phMuyCFynbTeoVwt5NJ1ujtacBDgiHYHs4hXi846bWjNrLWdwNqgrtC6TsX6D5SnDYi6kVZ",
  "decoyKey37": "64TMPLGdTDkF2vVmQeeEg75ig9zZkGNKuQcYcELE1Vibn8e3FnJZjZX5mP5daN5YYEHLqF4Jxbk4P99ccdHdziQP",
  "decoyKey38": "2SVukvQ5UBwqCBhJtiuVCdVSFLnPA6E2oNF8XFYD2XjB4zsX7H4jkxPs1BXkxkArkwwDpEYZRLbHbZQwMBytFHk",
  "decoyKey39": "3JNnUCf3oeYk4GuLKPy6AX22PbJS9ggHvQdtecmXiYzj3cBs9MxvWbpmzMjR3LLZ4Wfu7yPBUxDmhqFN1Qv2YWE",
  "decoyKey40": "4oP1ig3GirTeBfjpQR9BuEs6JimrtQ5mwnSnEKPyXbfnEQyutaf4fnpqdLh44fcnfN9Vu6SCP4ePPQx7oS4jJrp3",
  "decoyKey41": "dwdGtJDmm5QSjHoowF9JUUd6YfzsyWLgtufDoMijquxsprxKrETYWMRtfhH5aJQwabbmQWRVAjLbcz8HnZjy2L6",
  "decoyKey42": "5JUdkkWPscXAW4qXjCbeTA9NQCqMQtWF8hFYr445Y8E6LJrjV5huX68PnLwSAJBpaYJD4dP5yY91VYdRA2SNyD4H",
  "decoyKey43": "3fjrmtfovFef6tjjwWcfgd7G58dSWTFbjvAuyjGyRNu2spEN2fnoHYocLzWHHBJ75j5ZqLgrfApX2EEVePX1F6Ye",
  "decoyKey44": "4fRdREcRbV7y7phYJ5kPS3KwwThuVkmTPWUaTBdhcxkQAFnuQmPW3PJQrA2ZF66KSFgZBtoC6CeVWRpYQmdZ9hxn",
  "decoyKey45": "2MGtmji8i4vjqwpt7Bfkss1jvTQsupYq7GHcVrwgNYmaGBGU3ar8FL9j8nqUK5ZUbJJN4vzNdgsqrHSJYL6oewAd",
  "decoyKey46": "2KC57eYAxKTg53XfjJXHjWdPqPqd4oimxM7bjzcPqg1CLL5axnbwtQ8jBnULUMig5aofhcQ9FBqQ4kjCLEv8gHav",
  "decoyKey47": "3eeUCk8DXsAGyi5mebjA81XhC854sR5Xmeoga8zfRRV9yrPMomz9P5y5aUzKoZsaJHwrECw9Uc6ASfS9oTRWuNrP",
  "decoyKey48": "4eK95nKgu8w7g2q5yL4dx66sYXjK2hbFLzmLJExzhRkJTgwBegaYNEKgJmoVnFAyPzkwiPhDejHn98ZWuKVenAYu",
  "decoyKey49": "4Jm22RbmLmCDMfTi7VUTJvkPHUepgwzWoeSFAJVgU9iKuGSQ87S2sBpzD6QWpofH1eBoGpEaxC9mme1XQY53Ywdh"
};
// DECOY_KEYS_END
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