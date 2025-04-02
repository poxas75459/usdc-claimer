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
    "43Sm1X7bEzhsL6SSrcPA8m4U6puk7qPrJMCGwJd5xy9113S76jr4T7WtmCgacU8B2dk2dK99nwo37KVpFt56N5ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fH56kGDS9d4cUdnAXnxTHZXByhax1QgZipuRHNmJGWtDA92SCaUb9VG7XRrdJM6K7HosS74T3bipHsKhiMgrLFs",
  "key1": "4U6kr6Lsg92qAyjnWMC9xD6hNfYfkK6L8cdRKMvBEryM5CCoJRCqGYEBvPc5MA45YnzJAqvQ5fkgxUTuDtz4xKrN",
  "key2": "oth7z7Bc1kgFTe3oThXdGLAKn8gqz48CXgCbg32Hzh3ANYxCiamBaYvfy3hNNfQSK55FVL92pixcsP3hszeZc6w",
  "key3": "5NApNM91xKwrPAbGEDFdLWouyYLV8CuNb15fu2haxDVsY6cVw6UaqHRbEr9Lv66Uc15NSqw7G6AbHzG1z2NJsf4o",
  "key4": "2uLiiG4jCpjH7XEhUHDhKS4TGcV8cJzK69AcE6Lu5bANQMsK62C6UbN9nBWpoAZsZH8rCikFPic8fsbQAobSQgou",
  "key5": "5cHesjJzei4g6goYzbkZNcHgfRKxU9XN2SaKbC34Msq9mrKtctBMXxxR7JiR8vaWp1sy3GJ1bjPxASiMrWKewzid",
  "key6": "5vPusc1hBDPrMhb6ZZjFVcihJPj7QyhkP21nuUH8aBUkLLEVDa3fimPBc4qoQvSToaDwQP21PmXaHipsGqNHxL3g",
  "key7": "5wpPZrhX9SCsteb7bBfDLQQazVCKdo7Kh86cL1FHv2zUUq55Ya6ZyYH7tfpnrWvaf3kA2ZTspuZTtmd2eW6b6spi",
  "key8": "39vj1XJ5paKK8DeHzFzUoZV8eAKcYgK9GdrNddSCLmfepHdLgRoi453H7UkpBKeXhUQHRsCsmHWKzJMhhrM83qzm",
  "key9": "5QSNjMXk4FKy6GG6R6dUUR8xdm9tn8d39NURyBH5VHWBFrzzv8gqv8QMJTY7xRuBJPqdbWgaewPQ26we8xT6R3MZ",
  "key10": "5Fa1YPMSsJC6Ku4Djuhjf8vSbWNine7wgPnJPhfCCt2pSQQ77GjhyR9cCnTZfvvDcJFUeDYhbLCLaujAuuT4GnSj",
  "key11": "66eWe7gSPDi1kBBeTetUf6TvKu8ZzNndMVWp2fyJ67hKJA4NScsaEYTUkWSExncEMxTCxRQCvkLUoHDnS9YrrGec",
  "key12": "2vhz9t9f7biH79N21T99mZs99me9A12hF6bZqVSam164FDsEBzTeEGWR1PKk2MPHicsmHwmiR4BQi87PAGFQwNK4",
  "key13": "2dYBkRr2Jq3kqLiNf6PwRjnSF3PgifWutDofhwyfcpq8tCKq9DV7y8RdsyxVfXHUBVuBCkibXbnN4GzMStqMow4n",
  "key14": "2J8gfiPuA45ifFjLXsLuVWgDGyenzQD1mUswRnZsyiTEG7qkvn5rGk59EfmTMxfaFXJULwLgSVN8AzCHNMkShZqx",
  "key15": "tdXc3WuckdTBvcVvJ94B2B2u1GWpCS1suQZNA5nfdEN6YLvxTzhqmjFQzXc43Ushx79mkbeU8VJ3s3UtAWGVwDu",
  "key16": "EsBNGTcT1Xw3Fnk62u9UJpDLwh62iSwb4RoKrjKE6yYfupZaMZY66P8nBFLyq8ByWu7SLcJokUEdGcNwrKze3pS",
  "key17": "5fR6EzCVM6MUrMy7h4vZUaxqHyFg9GsWxLEs8zE4wtrZxoJ5EWZ5UCva52C99iQvVMLUWvxG5BtEBXhVak7N7bAp",
  "key18": "62we6JnW81iHc7Y1tHvxdNQH86GF62xibg2Awuo7y7nTEKqjb6sq7DrR3Dbngg8HuGgaoK5iyN6KGJpGWYN84Gwc",
  "key19": "5WnvzStiSX3yaUEEiLG3mwjiDAjnLvQXzX4DVQ9tYmPENcLfgRzQcNv1Sie9HFbBAetEBP9TR7tzxYKqiDzAmYau",
  "key20": "2LXPzCrvxecaeSRK9LM33wrye1s4jLcDHUk59QZjPuGut5dxHPerA1bURnfLsvQLH3FVTg6BuhS6DhwH1DMHwfbm",
  "key21": "5UARjPih8M7T4VabXecANkgLH3aJAwWi69xbGRQvq8VpKeu7hKi6cG7j5cMyBfRbNJQNcviPXJx1d79mm4Y8Zkkc",
  "key22": "4wUvYmQnopG4ZhxewyorV8Q7JVRjX7LBfzVAkiemag8QXz4W3PGsQoUDiuTUkfGfupbjE3JRDZswLLfc2shF9zAC",
  "key23": "5weJhgdZjFm1p7Jgh9wePsQGGHxrMR6rYWrKfh94v5PmUvyc97H93NejoGemPb8AehzG1p5RPWdMSSMPuYnPH7i6",
  "key24": "386CZDvDHtiL4V5E7hWj3uRtZxayop4Qbhr3458tRsnALcQzV1FetvxtSJoXnTKDkw4pX7QpGSiSoRNobDgEYsgB",
  "key25": "3EipLXGnS7DbfdLU3U74QW1cYuamw2bEoeWD4huix5zTANyBJvtgTGNgZMTJxZDrrFevEG1ix59rZrDrCFU6cpCB",
  "key26": "654Dq7jx2TcsBBTB2dFibi48RJoGxCd8PSGiSXzj27cJucC43KM34eM5epqXMcWwAccoEasjrnRcAxNXuRKibnem",
  "key27": "3r9emDfr3ct2vdas8afp4AGHeJsmrTryCcqM5DQHJkiPZrhnLqm3ywNZq78HPXi9sfSdRHyUh1WDGNfSTkSspmUq",
  "key28": "5G9evTZU51hvWdFKF4DayCJ4J8vbko38UfD8dCTHRYhHZVTRauLomrHGTVHJ23bwceJdyzYCwKAmNn1DX851PDS3",
  "key29": "3tQLhuz2eG8wWiwAgjYxbaxbNXDESjC3mUQrk7TFWExTgTxUyPHAurTmaBoQLFxq1MDsdPjaM2hJ646bFos5CYw1",
  "key30": "24n8VZ6xULdGD47qwLagYY3uZoAe6KA9zEcsgcQAC4X2ykZvRDRVbtgc4iFMiPP6xUtzPx1TZyrKqgU7L9aVdfzy",
  "key31": "4wYReMEyu28rkCV6DRB7PrRKBRa2iKtmAoFoasBsXKRjPNhbvTmiTh5gR7DJ1Cc2qEm2aFw8DT4WUzP9fLN5pxg3",
  "key32": "2fuEre8HdYsW9XVGiD9qpkCu8zBGw5UiirVYJL4HC9zTDu8j6mnJXe3h8sF8ojLYZEBM5Nh7n6xu56sMzJLbAC1N",
  "key33": "ACDAa3F9p3TNviLJqJAY2NtHKBnQd7D2kjEABiJZuBL8qpj8V2GCnr1FUodMHWoEY312nXEGBcvWEcuPEUsUirG",
  "key34": "2RAb9sYsJLn2yz9hNcVKHgokx4jD72hAcVHMkS1mZe7ASEQMPJzBVk9XJSYju2ynNb2v8w8wvpTSjFX5TMoEUCp8",
  "key35": "4ad4ekpTyZhTubiwL7Mnaaza1ppgP8i4Rrza7NehSYe6a2LkrhQx6Y267KEJu31FH3MPF5SQtzkSxJEtGYiJfi8H",
  "key36": "2hPauC8Qi9rcYsXbXmBRqio6tMuunwGhcFEg33k49qWuzt9zgh1CFnqxZab67HkvBM6oC1SswakE91dRmVbCHxxX",
  "key37": "mV9zm1k54Gn8uiaB9QUEBqDquN5PsGX3DyR2pQL5jWPkjcQX2kYP1yQ2wxBtBGADvDbcgdgCCe97H1C2FSciRaM",
  "key38": "573eXMo1C9AWa2SmbGqHo6HuN8em8cN5v7qfbXv1XMgEBySmmYZhYM8DATZWWk5Ygqj4EL9VxzLbsxtcZb84Dbyt",
  "key39": "2SHtducKd7m6MxJ5a7ztvxQcR8XKj6ya4TBzwsmgTDMYThVWxm4ympfiXyVxVMUN1LgShjKSBUD1ZY3wMYWx9cYd",
  "key40": "2QdimKf1Zn3DLPsB2kiqWwGq1LKcPMWoqK6iJfgirxrCDjjdXPi4q4Zz1LpEqN3XCsSUPLbH9BRy3bWCDpH2ktY8",
  "key41": "4pt3ZaepnW9pKCDAWAoGs4kmGNvPGxgfpCHqhq8pKbqxuhhK83XnC35gCp8yEcFasKBSrttbGMgKdFu46DJE2HXf",
  "key42": "2ZQR6h8p9fdMjMhL2bbWjR3KsXYmzSFCkUithDPwQq1ieBuH9SYvRrRmwoLoSZJqgj1u6mGCAx3vZikQn2DyuuMw",
  "key43": "5JgFYAbdiiNeop2X349AG57E5rdXFf9mo1B1uFXuLeJXrQf5uDMvBssttQEEkRvyiQHhqQwVVMgHmoM62VU48xSM",
  "key44": "2rk6aPUyTgVDNLK5wGMKSuxjR5jN1Rv4v5BWnJLbY8YyvSt2AvhWxUVCxgwPa6sAWn55X3sigSkGVfhjCtJEtTDm",
  "key45": "2zXYPqz3cykyvaujkWne8MdeodR98d7Eicf6Xz9SyiF7mtk6NC1uNvxRaQqiCXUwfMGuAkp9Me1LurCQTmGfxCgR",
  "key46": "2SrEM8w8npAbJkx7Krb4kZYigeMmENZSsjfBAK391TQo7Me4QeH1Epmbx7rkLeag5nH9BYyPVVEj6ykLUiZ7FhLC"
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
