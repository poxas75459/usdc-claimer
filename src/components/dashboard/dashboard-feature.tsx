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
    "xBXmm3AR1hwqB6dNy4REetTWsSUPi1qWcyy7gSPevW5pmcqAZmtAiGdWYSXyGnQwM3pgBqpMSg6Kv3U7P8bz1ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqDWYxs17V4tR3ryG7ckvu4uGJkncipmDvVNDyFWNx3zLe8hAiLtgaSLjLgkZRueiSiC6JrMZys72tB97Le1krE",
  "key1": "32ZAErMCaHftxb5yKhYuoeUvQRcbQWvP2nuTKKuyQSQoMw9y4V4opnCs9KBfXbfsVsV675URyDHdsQgQfmSyAw7A",
  "key2": "27aqeBzbV3CJ4EndPUarMBbTzMshdD4mopaX4qAUsXWjmRa1HhSxDejJ8nJnewodYKT6pXJ7X2JJNgLkhMJ1VNHk",
  "key3": "4VuTNCcyePagxgnK4C5NZkjNTdggCd6F1PeiZCWgbKSj1S9siiNuytVCMwpuPivmT9YNzN2ZNzFQoUSX71ZG9sTZ",
  "key4": "4AYPD9Pp58dsufL9RT5KKJQVrgzdGSwoVzkRw5DxwS5gaXrt4L29z5Rkjfy64Z6ASqr7jaRGvcuWAeMu2qdhvALF",
  "key5": "4ToTArw5rmEca1iPYEpubZ7wJEFMWAfcS8ta7khThUP3TwLDfsBbqhMYYykWWW8a1xX86q6933t25yon9R6PKmDM",
  "key6": "2XqQXA514N4xoqRH2fQjWdCKEjaVbkKbscDbWAdU8w2gWojHgW9GYYzjsa8rqLn5959Ed7ZfkNUGfgBB9KMAKt2n",
  "key7": "5Hzqyovxz5TeW1TYpzeXbatMRSrHBcCbQFghJ2wk6GXe5qWYXTaWz49GZX5FfvGkSb7YuMzQQXfduXa1NcXr1QVm",
  "key8": "483kPBmJS7qoa1JJ2QgdWjA5xkidfW8owXMXLb9mW5b29fNajU5aS3mtLqeSZYFVUffmPFJgFPCLTHknf3oZ15z8",
  "key9": "1cbJ6vL35petGdbom7NeLKfAvRiiWfhPBU1FUKJb2WcFEoAzqLFMC3kXrhDpMf8xX72FSXd1pxPPUEmkyqDZ9yf",
  "key10": "3ENnST3x8BTdZ3hRFmTDvwTyoayg5ht6Dp5G9if6EhMXVPXFCSEBFvz85iTuitEyoCBS1KqAJegsHRuUzHfMon4o",
  "key11": "2aPoJTdh2pNNsBzoJA5npRSiqoMcQvUReTibXkod1xUi4QnSgq1yRC5WXhVjw2443szZgt1jCzEYScEQqtpBQSxp",
  "key12": "3eqMrRWEezfzGgkScoR9CkPkfxRHLiGjWBgEXzpctAUn5eoBGZNERDxT1rX4QGnmXFCT2J4RNSZ1uCRC6bkUFATY",
  "key13": "2Aj6Bena3EX92UkrwMtLWUU6j2rBifFgoiw3ZpGgrSte1t5hqH6ag6v9XCQ77L2hCogyaeHG9nKB1UAo2xoY17cT",
  "key14": "25SqJ1XFRvgxE6CrsoKJiDK117dTceKjf3bRDfRuzzeinporuy2QWwrVXQZveHd2ZCG6MB9VfcoSL15otNrQu73b",
  "key15": "67EhxZLDkgB6BxiPRk8WfMxoKGtYVCPzUJJ2QQEtc5WgfK3122t4WrayZ11Y2khfcr4zzaSMYELt3Ad3LFASP5nf",
  "key16": "4qZkQu8qV6rbypWCymVxR6mLm3DrKqxC3wPNGWYAXLQ3yBtipdiUiexWNbVKcSyXPkdYismS8qEVQdUHK9CH8hrA",
  "key17": "Q3QKELGxrAwb254WJv4KcuXA6J1AMX39VWzFkk8LSfoKZ1fE7gN69UGMhWJDMVe59CdGwCLQJuDG5VSG5DqNCof",
  "key18": "26xodCuTiA6g8ixCaVYW2Uhpwm7sg1kK2NWhisPkLE4PGwPu8MENdAQ9HxGVHVnEHUfgueC5GV326P2i3JtbT6Cx",
  "key19": "67EL3ArbSCGXdGZBDTbkYp3T9CY8DyvL2mzdrQMBYoSHNgvDp5VrkcscokSSobLHS5UQYnAuityQwpXi33AGkQn4",
  "key20": "3dJU35SHkUeB4AbbFYV5erDQH6hUcoPHTm22ZNsNg9cFzPjFjvV2tRjVrPdTwsQcSpmZykPF1kJ3dTFgCPJh5dn2",
  "key21": "2weEirMVgssZuynBoC4VefFAHX8DzFiMzLyXA8fgV7KYZNQBmXazgeM2mvs3pAtqFGFmmdKbtdbQk8hk7aUVKidr",
  "key22": "4z1YQH7ZdopSzTcmHNL2JEV2RagKHWwjUYdMd1yV9eL7SvDZRnDFTmDsHuJ56xHpNmA6t3kF25LGTr7iVmTjq35j",
  "key23": "3g2uLHKeNky6eVQ13HZDX2i9SPmkDHkToFvitCcAYHjozfKAmG3BBiuQEDW3y6DPJvNq6jMXnqQdaxksZvh2eVSs",
  "key24": "NqyQs2Lv9GFX1cTjH7Fe9jPqegGApAiJgbi2ma3RRimvjbwkQXxyVuL5CvZL4BfAp9hgisPuVfuUms97vSRutfz",
  "key25": "47vFvARm5qVCnh1T1QXbpAVXdb1Fgh9UxY6gyBSWTxC2fKCHbDS84BLe7wg7CTp4yJL3xU8BfE1x3KKgEmtTqMwH",
  "key26": "47u8eaHNrexiAwTnNGDTghxZM5zq14SavLfkysUo5zPGhjVQ9xb7cWj2Wnqr9cX6DyGcxWjNZhWKJq339JT4X9uw",
  "key27": "22YfwHvjTpn1aNveyWzqsN64ZuLJwk117yX2P2gvTWa4j5DEWY6AfLVdzihzRkttzSx9VtzS7jyznggQkjYqUXpv",
  "key28": "3H1VzHQBkT3AW6Mm7CQwjCEbxwPwKq4vgBVndD2HRdmX34RZNWJAynr7EVt9K2Zhg8fwSN5Cy9VdoARxZPCWKmhr",
  "key29": "3x29NZ6qK1HbwH5V2gkZEKoafXGHaR4he7g3EvUebmvN99Ui6zjwrRyZX7zpHJRyq6ccLQs8Q7WS46VQ9vNfnVHA",
  "key30": "44JponCHL3sTLgkxyzUw9pBRKPpRsKuhjXPpJdm7sQq1rtSREQxUQ4zLzd2ot6vVDDeEVrUDK2SH9LUHKqFqgkFZ",
  "key31": "5vXSLwwEDorFoa7eTHcT6fphurpNb311QcH8RuGgUwkUGyBpMtRsyQs95jpE78u7xrW9HpDet8WkEfrztdVpcavC",
  "key32": "5c8Pv3Du6eEnagrAo2qkyumkg9RdVKMyjXgWZ96LmZcRNESxxqL8YbPiQuUP8tnSw3y2APsYG4earvL7b5Dah3is",
  "key33": "3mD693pnsoZ8zHWc3QfYBL88auAw297y7wp369mk3XWhvZfbaVy9Uj2chGFbVNFQZif5hF6fUJHhkHxyLiEQGDKJ",
  "key34": "42wuYQMV5EoLUJDMrJCoyJ5P7mSEXuY8zSNsr9SpANgaDpSXx2nieh86MtjmT1QiX8rMkjvYfu7FFFyvTd6niBya",
  "key35": "3EWReehm1AqaxCa8oo1yKUkS5w5cg81mX1QxZ5Mnbyx7trDnsfxsrDPCWM84X4RZraTEZ3FWsQn5c1UWqEYyqFQB",
  "key36": "5sQNjAQLWtkL8bv9N5hc31BXJNEVYSi8XDJuCfFYAs9apqzbjKvuHxwUtfAAKqRNYZAasCvZuoFnRu8Fkpjbtjxr",
  "key37": "61PACjfod4vT7SQST3632maYt54fEY3rnk4xStxwgosDUXMz64vgUbJteK7yTdTrbNYbdkEQS89ATdTHxhKmdg9y",
  "key38": "NeaEDEfP4WateXpThFSkC4DnUA4inNbhSE5cQ3AJz2dxNXfpZUD4nBFDcdeZKg7cCMAjkeBEApSD93BnhUXyHcm",
  "key39": "4LWpb7YUnvcfG2xEhryY83aRBdWsPTvAsaiQfohxfncfWCaACC5gDhrLDRifyQyTHSm324k4gpqJbtDJGKCDyKWS"
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
