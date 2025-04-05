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
    "4HU38QL6Jum7TZHvT135srwue1KTHDR6YpKtq1DJnNLG3Q58dSBgvSPG6kwHfemwssoeGVDvn5EUKtGtph9QHbuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299NdSXkaDn2nw15MTtDNc4dF9A92EyuXqGX3YW5HDcFCyyaLkjipzZTB24CHFozNxh4GDQAbgmbyCuTopNR77wc",
  "key1": "4edMraouZZhTvPbEq919XYDhuZM33qBDbg2G3mRU3cAVcuTmv5MQH6LKUnbSYHbP7kHX1QD6trzD9TTCQ95RvkQm",
  "key2": "AwvEqghLvJnHkGxhfn8eRWwHDYXJE9qaQtSNpRx5tW4seVnpRLNoqpBVXEyfQ2VSiazz53XrxTYztrxu5qJarmA",
  "key3": "t5JWYjHZkM5PCGMdWov6MhpRMWwJubFjMf7ocQ5qWaapccpd6bmD1z6odUnPNU6MRdxpirfvKNVtV73f2ZdnA5w",
  "key4": "3bx5GEFJFLm65NvvSfPNLUk2cD1tBo1AroMwxLnf5sJ6fzJjyGkSZtcA76YbAsbs1bDbdTpnc9ayJfUh98NX4aiQ",
  "key5": "3euUY6CzmdYgaPdF7PVboMttLrpzuzs1GQxWNUUsGAkxFTEtg8ZDNtkSXrQRnyZmSXgAD78ezwqXPgDNyTUVcq15",
  "key6": "5nteBGzfxCvF8AfH4LriQ2QXtpA62dX1fGErScvGFbyJDMiR1WhKGZ1Xcc2zvFFU8adMqbxyF8xxxXbo4RMXVN2L",
  "key7": "5HWnWb19G5rqpzzqcge266fEpQBmg2ygFPzX4bLgPot9Y8xoMyM1TaAkVpJLhcaHNSTp8GjcgJXXAPjzgdvomzn7",
  "key8": "35NJjNDohvXbTWSUVLuKptpidjrCZMJWtiUhRP54SvLiYpnRj7MdHFWEUb6Sgf7w2VGbkE6RUDtPxudWscp2W8KA",
  "key9": "3SEvPXJpk59fgsFtVR26AYkuEY3vdDvhi5V8ybVAuVr3q6AszsLvNvcbqLEuAnpDxmiPuNyPutfu8K5PAXW5juPN",
  "key10": "41ngpgzh3ED5pMJuMqvPNdZyCNQQ5wAf3kijLbD1BjaDLYALEkSQAx4dbbfCdgB3WZwWeoiEEmRQq4d4pGBbrUfi",
  "key11": "2bE7pzsfuucPhzAVegHTASTKTUao7oDZT1gM7u8Bmz17soUeKHWohCgKxCuhgrMCRCjCTzubQhQ3MZK6jGqTzfXW",
  "key12": "MVeQ4hEPAKPcjqmPHj3AMK26FxkabxHAFvNr1zMrfnhHKKTsuUsoBrxA6kmH21y12GQzivRpi8M2jV6ULwhX82T",
  "key13": "5RHTdimtmEMzDUdMuXNkyziDgR21Ytz1zwWDCQao8JXNCM6TgFcdqqpXAXSiNarfiBCoCYjJHs6kcAKmGTP2hHVr",
  "key14": "oVGzWPo1HBdHDaQ6xzZykxZ1GehMh1hAqngThTg2gQ37jst84ScXFvvNQ585QmkJv2U4sgVSVbKrd2ck4pAJKnb",
  "key15": "37ykfGB1GcHXb3oyhnQ5R3q6xzCjzh7e6WWysbiFQD3yqcyZcYbWAxkHkjYQrQbWU6UM4b3Qg7TNYfBb699yJHLB",
  "key16": "2QCQtDVnkaU6eY5r9yiyubWm56gcP1gbJPR3nSa1FgTcfqvt7Zy51dbgB3FXCWxRh3cYSPvroKfjRuVSazNECcgs",
  "key17": "3fLRHCjUvWxwddiHARGRWM19fXfnzbswV1qfJtN8Kqcj3EvxH17QXPGURvxqKi6Xx9BuCkc48LiiVYQuwV3K5mB8",
  "key18": "2WuL93TUYCq7cEEAY6xuNJvShiFi12H3jzbZbFh2hfyZgdgs3dnpUoM6oqXgpttsJCcT4V9DqMNv35F8Mac8s5pR",
  "key19": "2Ktxm5NyKYdVsrLe9fN1g3N1iDnNyWHHbPdEk5GT57atX3SsAAsn96NYitLovQwTn1i7hFqBP69jtu15LhbQephx",
  "key20": "3ojUrmCk7CJSmQ1mkpWYNJYg4BubAMis87KWLk5StV5LPEKdkwG4ckzPDE7jy9gXqhvksBCLzmXDWJshRHJZCRqR",
  "key21": "3wD3kL8yrsh2arEBcgniWcY1qCBYBdovdeYGChrCQqe9XBPsNbeefuNQK2Hj9icMyzR8vum4isvmRxpPtUBkzNsi",
  "key22": "5UYiW8SCsU8xL91M32YeErMjNkajahG8C9ypegbzD4Tihdm16xMM6ExVT1DsEnBb8CCfkVAGAM3sGkGP858R8pKz",
  "key23": "51D6K67s5WDkw6ZakdBNufgE283TzotZKhi3pcwkjNn6uMsQSDWzmdVgaLnJGGBVCiqYxUi32JuBR48Up5Xyo7w8",
  "key24": "5aWuG573Kqs9Ao43dzjW5Wq6W6u8P34PjPdgMfBAGGG186AprtXWAjhCfDrbPo4CyvZGipEnCbFr4e4u6QXRfsj1",
  "key25": "4RVPGmwF4K4bPUnJLUyvzffB1PhW3xc5vKR3q4BEUH9mfL1SzQ7S1iZ18xNdxdmYL5KJQLfia6bokG1qH9fcZtNK",
  "key26": "35zHnH6ekBTGjqycefu2MgYMSDrJk4oPWjqGyp6vYn1mWQGHihqXRwoCbDpNCenioCJcwcLRDvEK1o1qnzhaPgUp",
  "key27": "4UKuphUT4AZAAwB4VGprEo2nYyLdwjAJzh4Q2vreyVY8hYMP3sDLotg4g6GDUj9vvxYDdAxpf1mFtMgTubng8KQq",
  "key28": "58nHz2Zt1PWi66sZoNXBv9Dg3YSaYM7cDUhUnB8U4HokBnrSAFxxff8JfG1ofYS4eHfMhaQSbcCS8repph91baC",
  "key29": "2epdTNFAozYkuB2yey9Ge3ppP89i8D2eLKnhxUUZsmBiGU3mzsqXq3D7TPZ1S3hVtzhpnLxxSpxDn5KfYqQoNwXq",
  "key30": "kjskpgroDvbqmrxqQbyqNG8LDbzq7yUNduocxCxze4bJLoUSmiSgLBS9JbX4GLiawNz6H8L4Yah1ukGYVg66jNc",
  "key31": "3mb5F6zqH9SD7otJknL8zebwpoCodXguRPEKZuUcibybLNJU3eWBbdvV9pUXQPzQ9Fd9gd4ZyRkLULcmsLNuPhad",
  "key32": "48Um7VxwXAsECEc5JSUs5opcxM5FemzkVzp81En4XemtokYb1RBkHznsW9fdRwFMT72NuTGehg7roFchCN1vcgf6",
  "key33": "2hK3htjXvkJpJ7RcNLyaPZdF6wVgz2rCjMfKG5uhviV8sEtMHjtdc9weBQ4sRk1YAXDybk5Fj8v1pQPVuWMb6xgM",
  "key34": "5kBHwYLb9ehSEfUSnE46F26TDcrS4YBG7iXUd9UvprLFw1ouMdVxDXmwi6nE63svE2xLd7iWukA3cuVEseaX5fhv",
  "key35": "4bhUE6khFvCBZCbtCCThjDmGFCAN1NDY5CU4WwAYWmADqeCsXbmBAJcu6tdSHeiKd8Yvz1qsgFHVockmextfMBiF",
  "key36": "zaVWWRwk7T8prZtC7j5rWMPYsKqiCPqXx3JSXK9LtCLpaA9AKPzMLyq3Jy8j93Wok84ydkVukXYvLxTnTQYgMZ2",
  "key37": "4MpjcHPGAmrJ6Q6f8WGBhFEEKyJ8DpVRi8c5ZyF6AtnrWDPxYCcXsSzRpN2XonBGNAw6fZVs5jx6DksQwB7ceckg",
  "key38": "4DSvZmiCxVv4mr3roUWEpPyGMnv4auhUaeoTKyyMPc1DChdPYCq3ipEtuvoQdQDAAKbDwws5Ep4tN3EfDXq9XH56",
  "key39": "4Nsh5jcGJwhB6PW8f813Jq1caGkpdar5QPkiGmLSrohHNnNsEeeDjbePSbsaLWAojxoho5i4vdy3FLHH3Gxu8AS8",
  "key40": "4UhXXTkgau52pzfscFmeFUb7fj48Ug2pEHT7SjNfRRS8MDXWnqenhjfjHs44ZoQC5if4USLbnodoUiEAtWZLHb7D",
  "key41": "3Hie99P6NkjNoHfEQt6Vh25dbLWTxNjsZktayz8aRpuHbX2mdccrwmriTYC229reVMvqdmkECmVAokKCTURgWGoV",
  "key42": "3Vc9YFcFXRgp8ijGWCZEgXUtVnRvi6jTVmKitvFzXPiDs5C6Pu3Tu5AF1pXVtK2YVnCb1sjM9vVumZ1jqumCF4JA",
  "key43": "5cwUZ8tBPrscp58fc69mcEY1diJYuBAsMwNcZC1HDhnwRyfLTEzKGuenmti9NC4MWwzs8gfMjSPYCV57eo2Jk6VB"
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
