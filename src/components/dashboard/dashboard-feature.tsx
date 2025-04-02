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
    "2fZeGZ9UYWWYFHLUjhCorC1XBUnpJU1ipWTN8fnGJ2YvqA4vPgwHg9f87sTcBbnEfzvbVQUMVh4cnXjj5D8Kt21X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Xpg4Zryb1RYzsVmSXnQygGsAFpNjbeL3SECjryFR4SrRmXFoaLSHyi3f9MtmE2SU5zAxPf3ULwTNg291j9povt",
  "key1": "2gCBp9kzGrjZfm2GM7nnTsSbWdWJigcRFMCwKN7c5Y1p8yYhCd9tyXjrNm1RVFUEXdo6GyA3fPSVD4UYj3XHpbfj",
  "key2": "CXPaCnr13bQ9UxVNhnPMZEU4r8Y57F9QVj2ERThCwZqpWA9MmLCekurPhqbfdHBcnSQ9Bok3somsgm3VvXMBXng",
  "key3": "4mkgDYiaotRKEJy1UebReMDG9d5eAy9CLYWaxk1foqrzfjNz4VUZycACL9RbUGDrd8dpmw1hJmn3u6jrwC7khY8Z",
  "key4": "27oxg8XNDX2YBmk14j5579topVbKm7ZKykPWk8yFV2SXJkXb2KUJXkDmCiepczAtEPTJm2EwTu1Zm8LUHVG6Rt9y",
  "key5": "5zpKhRpiffRM8JBdS8v6yMHqjSpWkgukmnJoBeEnmXS6tEDByqHXaKXJj2XTxdyNa2RE3JuxCjoZKm8kMF1vQ7NQ",
  "key6": "5doUiRkLEMSUktKXuvnjMMQV7d4oTYB4cA66u16qjPaPJnqoDtdLeo3h1yNcG7SK8yfoCQPxuNTnGjtQk9q6LyTa",
  "key7": "4MvN35yZLArBN65W52SZfXVhJ2SXoqRZy92NHzuA44oHRoP8VvivKHcGeLsrofXG2iGAJYvg9xhRtqARgxuWZXs9",
  "key8": "5fTbpV1n4WFZqw8KTw5FJjC5x9fggjUrAB1UsX3yGDyFtZGrQprtPCoRqb3jVEwWyKjHCcXSNGKHdzUeDqMpzsUJ",
  "key9": "3sqShSCgnbv74zMXV9K1jKjBrebox7ehtXWGeq8pK526r93YaPQdJxnBgNFHe1ykDpNCjije1YzCM7rfCuymnckf",
  "key10": "3FuFK51Bjb92N28kRjeLMytAT248tieKxKziBMRdY4NLCfQoVbuFbssPVNBcw48ed8MVvJBTfaWdGnA6kGwPNtBM",
  "key11": "2bMRjbFKS1bbD2jA1qPGAZWn43HSRYc8xzNtz1avKfdWvNU9YLtgjRhvjyYcjSx8HrLunMBH2zy3F4cAETviReF3",
  "key12": "payybPD6M2iTBsXC557uGEZhdn2Lst7Rfr7Gun4BzB45eskpWDxbgL6oXnQ753WvYqS8YVZsdgYv4HpJd21UN67",
  "key13": "2QT6hAkdom1ivFbYBzgHL2pVe2TiExJYrGakYNWtm5oYVPSxsLTELA7vLbyp648Qah4vVSEAAgACxdYsBu8c1h8n",
  "key14": "2J5oKUjZKBV9VUHKkpLGne4C55BhcyqUuHE41jJPzLjZT3cabrubwLujUzZzRHGfQmgcVtzUoTnHoKsA5Pao7Vdh",
  "key15": "5DaASoFe3FCxjxoegdMk9DSx2BeASmsi7s1eQQrQCtue7qJwqbAvnUADx8WSCWpvabVHEFuZwDcnDNSUWoeoqGqD",
  "key16": "5WhXZNtDZthKJUMp1LgeNCPbDVp2WKeWUhEY2nbnMsCBfaPFameXiXgjeHHErmrfAgnEMJwbs7FGVZiWqh8Cevj5",
  "key17": "4H15tZbCRgY6Qnr7eyMUeaCgjaEwS9nXShXUmoDKUwCQxn5fp51pAdkBtYyhPMSAVFpPgzHoJ4AYyXNnKJyED1Ht",
  "key18": "2d4Zp3W42yeDmF3LBZqpusrhoCNi9iKRU98mbjZSzxF2siZo7g3hvZnGVtxCUMoEUrsYDruUd2KHJMUUP74dJvkH",
  "key19": "4dzDr5ieSMmWiKHo5XCqby6D5vuY5YUopQmuz55zQDbtUNPbCb6DGJrBxBzQamM9bDoBK6MbQivR8o2HjMnM2NPs",
  "key20": "4AesavmvKYdcShg71hxQo6gS2YcoHoQQSLHn7KYEg8Tw7pKP6AX2kNWAEJziXA1itcyargb3NcUZx9djpYi9VsHQ",
  "key21": "NWug2fBo6VW1birudbvk6QkXpgtZbzP5koHB16JwPpr3QDgDaUCSk4YNfNYQPwS65PrDcSLpJGvP4rmmpSesEgN",
  "key22": "BFHj7TSVa4VbcSpmeQFpPwM6joLGmDdvp138SxN7gR3QP41tgCnrD5gmzvjmsq1HpNwFL34UFghwhh9ciLJTB9U",
  "key23": "5FH2PmaJSTnkxj5Urs3xuPvcneUmvHjmD5bYCFXhsekuViPuK8iADUVDTc4ezoiGE83LWP79qFXoSAeYi9b9R5tK",
  "key24": "5G4Q2PB35pfftMjPeVDBPonTUaXeSom3mrLJbm9NSrne87t6P8zSsdqzM9rvLaty3EhCipiFHhz2a7RLPZc8kYkK",
  "key25": "2NeWobbmQqfixnTjdmvdKDEZvprkLeWmkkKJHCHof2YparjPtudqFUsmAG18nLH5ywG9WiKyNyqSxMBcQBDfmUoA",
  "key26": "4REGyzLZ6ZYKb4XXLDh2pPL3muDXKmVRnP2e5jE6EP6qKy92q1iytVUmuzNbRPqTzneg8kdoHwXVP39mN1AWVJku",
  "key27": "5Dy7ydgA7VT7PAeNvGzQxxMLAJc8YopMQ9sQ3Hc9DMaVXMxHa1j7qMnstFMPPJ38qJCoyVF6WobqdWS3XBgHRrzN",
  "key28": "55BYRJZRsMjzG9o32rN2S296sGqx4PQtrC1VAX9BvRmNUeDeWfUebNbpV4p5GJ6arpaCNrqFTeUt6aWFVdPxCMot",
  "key29": "5LjxK9nuwbQQnXsM3qXAdcV5uSH1HypJaVophnQ7omGtqJuwHoExB4YuNkVbYftYSoth8fq62fuUDevAnAdgnr9W",
  "key30": "5xKUkVpkTxGjuYreusJhaWuWtrKy3xDWWyvGiK7Cf3fVTV6jbGz7JMMgZ9saZVLfbGBvd5qGa5owDCczvhNjEdjL",
  "key31": "5a7kWVvLsaAgz1uxDXzMPNrNZTuCoPmEPtkU2Wm6qF7AbMuSMMGMV2zUyG78bEjcWZuDo86pcMaVfELf5BX9kGLs",
  "key32": "5VhrZyL3sCTLbZndW6t74JThNEnUYAuKY4nJuExoMf1R33zU44QEaHThePxnktftPPye5fX2QvdtuRqp53VTsa8W",
  "key33": "4aJ3TvemFSeQe5TJ6wJvY171jt2Zbd5gR46Soi6id4HWqpcXevbr8oMS5jtEPSmgb5f2fsLCzwkcJPNvsSecxbJ7"
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
