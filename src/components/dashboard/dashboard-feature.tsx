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
    "VZ8eKUjF6mawyUuXAYWCFQQ114tzs9hwb15dVMSYHTGfsYgxidZscenvSZDomDmmJfcooNjHvYmQ1XSrTtBpXC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mzo91DtgqVhzi3Wozp12Um6FU1k6QMCLEZBZnY8WzziL5ZugonGXXX9eH6hX42sLFjTa8pfe9g1ztgqXE8YzCr",
  "key1": "BUm4Mbgq9NkKH8fWbWmedFSry8GAtxpZyiPHtMtZcPTBtGsUMHoAfzqXB7PddUoi4zz4F4o9BXMDA8W2gCQMduR",
  "key2": "3HcawBpMdduSQpgZ1qy76kGi3VpEXp1mDxg4xHWcUN89XErSxSyhWeja5HdVgGQUVt5zRGw4fBn614ktN6LKFsUr",
  "key3": "4kXK6QZkw8mZaz6tyaxUf1W76WoeFVtNCV7rfiwWUyKGpSxpX8T4cFwBKzvxdZBksAa5rj74oi8UfTQi1DJU3jBr",
  "key4": "58KqxvsuNW9uvwZ535rP6niQ6Mgr9GUG1DwJJ6VGBYqHU9QxmohXwDwkUTE9YmakynD9L4T4P1Bf8w1UsnZoom11",
  "key5": "3eUi1Sf1AYATG5GhtghX9A5L6P4vAVEWrVn4mRF3zu5XMQgzqrvmyJtqLegjM43VQFhixADY9iWXWUTw1Y579FWo",
  "key6": "4c2dcaMQruQpz1h7J3yBR1vicpq6ihwaVBjZiK9PruETe48HybZ5h1NNahqCuHMcPMWLwFtcAKx7G2YFKsE5VPej",
  "key7": "5V9DV7bw6duT9L3dQWKXF75RZNQ4cH3pwJGR1D1rPsui2fGpnF22ZojZNyGMLQZDJMNyBTtznjyszCfkp92gKRTj",
  "key8": "4rCDDx1HTAGyVxKwe1Ux5f2iaiygGhjWVq8MGGVKSp2CK1xcVX7BC5w1edVyupefhRSnLVYiCzhzfr2SzkZTqea1",
  "key9": "5DwmiNpdHsR1gc1cTDEBvJmfHAr6NKuvQENY1q2THjZQwxXn5JAmU4j5xwyzrW8HaPVz3jQ673KBktc48P9JCzkG",
  "key10": "2JrsRCWHpHSoivmEW1eM8v9bqyP1QH7AaV36j49Adbj5bqhTk751VtJuf8F675kwb7ZADa5ypN6kYYxgKUrubxLk",
  "key11": "4mFKwkJZELzDeq7mkRSAQARPM7ggnj3Vc2docLs5ds6KYHCVx4GsveLnBXv8NwR4fp3MMyaYobHJvjVnM59rEL3C",
  "key12": "2Kr5MvoXW4W2HWx9Uy5a2Hy31aSuGg2gPU3JkWY6JwcMYrPe2ckJwEXABdtMVUot76zzM8thE69rHMwSsjyWJokq",
  "key13": "45fum9m7jXMnbpeDZVxzLp93xqeQWJAU38P4SBc81tXnXLEMQfWnBUQBQudaTFwqbexgQTqVfZ1sd2jx3bkWGofd",
  "key14": "51VuJRGYYJznfj2dCBGefebT51YmpMdQiQyQx5XkoampZFbS5RScPWnxaTafmPW8yC34tGmtChAwL66xWbqVa3Xt",
  "key15": "2mdqsj4BGAiBobpu4oGuK32kzHekFXLEPBAxNNpstQ8yTsjWsFXGd3a1pmJwA8aAhFXAgprixvkqUDrqoNHjPEQ8",
  "key16": "4vjf4q992edT8qTEycGvvsRXcLNn56PwQrt3L6ZbXtXnKMaELdVDoR99GNnbXJ6UcGV7zdsJXfgKbKtkAGaxE8rs",
  "key17": "56GDerk3mzzgWMeYQBSnySBYzrF2YRS4bU8fodHmJLcCD3gqPGDbs3vgxM2MoVZaUJLeFB3bcWCvtv6bnV7GmqZ2",
  "key18": "3qojm4yak5naQF3F6oQbzVtDYyTdyPKWxoKhj7Y1cy4xrFeHjirDBLGTXb4dV3EhtuJt9MDRnoAp27DryLfu4Vr",
  "key19": "4RdtpjMj2nsjiF9e7UkyResVHYVbkLctKYQLt6vNe2RWuSXR13ZdzRr9g518Xk7XqB23iDN6TCBF32ykRefJeUhA",
  "key20": "6494FhxBXb5keS49i1SseAAQTqVxWNtQdUrbgqVSLVW78ZuowLyFhEbHCwnWhsWN4FeGgKUZ1vnxxtVEWLWm9PGx",
  "key21": "21K6amJukAohjK2e1CvdQwdVY5PnvGfnC6rJLsGqJa5boSSQ5Si9cXyZfzH6vTdz9gGhz2BDDGgtdh3NXBdVfJBz",
  "key22": "4MSkDvAbHFdypABokBJj4tfdpKre7iPHYSd8BFvAmWHA1hahaJTsP6WnsWraqLvgXAZ6Usgq4fRYSwp7vxNMNRvh",
  "key23": "vSm7pFjFT6MkFTT5xmEZ7Jvceo7QVyk3pGsPAs5StUDgg71jYgCrrtZp4pQwSuJZo4ywY1KhdUJFpmNfdnBvPX4",
  "key24": "8LEfDQWmFXh1hh1mmoLMgcMHMK9x6CneM2HWbmSwBuxh6x9TNv6f1yDqVEwLw2VfNdRJ9qHdv3GauA7zvLFFvky",
  "key25": "48GhDotTmCd26Nvy8633szoq4MAdhKo9bop3cZNcDby85wc531c3yXrc1gufi4FsRzg3hN86atZGRyYjEoPH6Qqf",
  "key26": "4AyCp42xpGj4qNP6V3rGn3o5dEs5XZRLLC5cQ1dr4xoEgCopbcGqMQbVwxrBtwcqtzxJ9kkBEavEi9Hshy4SRSXs",
  "key27": "a9ZfDTBfTBPJrEkTTfC1JhvJquceBaC4vMokkcnpBwyXrSXiCdhdj2cYNXciXwj8h2bKjM7ZDBdtGoo3Xnv4Dsp",
  "key28": "5Fcn1DjLbmwJpX2Vw5eC1ftaj8DQpJmNDXrqgkSwL29h69A1VWpdehrJVLtKAbhaM1yxuq4xLDi2uYwnFeBSfvK",
  "key29": "4wQKKHvDzTzNqzVB4qrVkiV7UCrPQNfLKbN2myB264GgfH3wfsr6nHomnZVnsYXQmoVwLM8YNcdZdtZt1T1pZevH",
  "key30": "2UQKXhpe9pQbpcBpkbJoWy2yarQEdM4SEnpeYqiWVtdYSAiV1769pJRrj4MjukUq6NwJ4tpR9fPoQvnSu2u9TfF9",
  "key31": "4MWHSvXuzGX8g8XjhSso4J19DuwCJw93XriyLPtbe25VDRfhv4Qg5Y5BwUXKJFANQwTrmNT8Sa3VqUMWeuZ7i6eH",
  "key32": "2CRvcfFqWHSty77cixmWQ1vVmnqdMYDPvRMvfoV4MkAGNYM8EqcGtqFfXQ3AtSArTqSwuHAcw8bXwKZZdUjLrLz7",
  "key33": "5MMiapoeTYftPc7mgg21931f4EikQqZxiwM5keusYvVuWScXAeoELPWyEYzH3yBgWsidf8mFukovKC2D7tWHUMs3",
  "key34": "wKREBPp17BA5exyyrQxCAbNSqQUjgvJi2xozDEJJtJ5kJqpdhPCidBAB6whTvBjbmN1xb1gQAqHjr8fdRgDXRs4",
  "key35": "2YFm9sAUFvCx4UdGaWgAdQNHHiUTbKTyrVfWQZm6Xou8CPJZqoJaZDmCNBxi7FC7rWJ56veQ1wWRbLzZb6HQYLN9",
  "key36": "5Yi8LVynXHkQEtZALkqoXVGp7LsYkmecqdocJgs7b7AzNE9Ux6yPyv3im7q2EFPEviRc1GG3V49RvbUoyCMBVgYY",
  "key37": "HT5n9tMXCkowpJrx5g4UyR8mWJGJx1GXBWA7tyqRKHyEHS5d9d81GBvQGSMx6pwuSPKBP3zaJsEnWAe3Xs6Hgi5",
  "key38": "5qyBQpJXpuxUS5S3aFoR9BoRMJub3VUy2qdrtM8Qmtpwmt751j38qEX1pYXq2R1Ceucir78H56pgnPWZSStDL6Zv",
  "key39": "5Be7ukgy2UtjQtoQ6SwKSAJTebUSbXWeCJbYU34odNcLxT2vD4Jj891mjAQ5dirxHjanr4yatxsmHkGyQZUZ9Tex",
  "key40": "zWmz9jt7h55MyGbNHvXCPfsF8ZKnkUcgt4PMXrGU8LSFPnh4nxXTpVVpKc1VUMWCeG7kb9frj6pxYeK112SBaRr",
  "key41": "3Jt6frciCmNA6kRiwM3BtAapJBUTS9AsYpmMJ3bwzEhpP3i53nQ3pDe1t4FALcQquW5fC5P1kktz3NMHn1PDNpkx",
  "key42": "65QTNEDci9frExzbkqhgRXJsbwkVKT5JRT2bBbk3nGCoiER2Pd97vpw4xLPNXvq6NvWekujP7MpSbWApreCzqtXg",
  "key43": "441QzneUZSCqfXpS4Nrp2LD9aigpQNYW9t4LHyCNewcaDcN4m7LBciofyq8qcqCYuRyKdmqZMdAC5vnXeeioCVQU",
  "key44": "62UWNjQAG4Zro3jGrVZyq8DQJffk9quzVkwidhdV7ywLd6fgEpSWRXcY8zY3X6pbGm5pBtDoAMnMWhADxqaPJqko",
  "key45": "ruD76B89x31tjXbim7kVSCk6qAxuiTsURjrCbWGs4U3Bcoy4hcXFMMi6xdL5bhzo3NZ1aUNbXajVJpWhAtEhGuh"
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
